package main.java.Electro2D;
/**
 * Electro2D.FileFrame.java
 * <p>
 * This class encapsulates all the functionality required to pop up a frame
 * and load protein data from a file.
 *
 * @author John Manning
 * @author Jill Zapoticznyj
 * @author Adam Bazinet
 */

import java.awt.BorderLayout;
import java.awt.Cursor;
import java.io.File;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;

import javajs.async.AsyncFileChooser;

@SuppressWarnings("serial")
public class FileFrame extends JFrame {

	/** variables for the file reading pop-up frame **/
	private Electro2D electro2D; // reference to calling applet
//	private WindowListener ffwl; // listen for window closing, etc.
	private final String directoryString = "." + File.separator + 
			//".." + File.separator + 
			"data";
	private JTextArea instructions;
//	private JLabel select;
//    private JComboBox choice;
	private JButton button;
//	private JPanel center;
	private JPanel south;
//	private String[] sa;
	private int fileNum;

	public FileFrame(Electro2D e, int i) {

		fileNum = i;
		electro2D = e;

		setTitle("Load Protein Data File");
		setDefaultCloseOperation(DISPOSE_ON_CLOSE);
		setLocationRelativeTo(null);

		instructions = new JTextArea();
		instructions.append("Instructions: Select a file that contains your protein sequence data.\n"
				+ "Please note: Some files may take longer to load.");
		instructions.setEditable(false);
		instructions.setAlignmentX(JTextArea.CENTER_ALIGNMENT);

//		select = new JLabel("Select File: ", JLabel.RIGHT);

//		String[] files = { "file1", "file2", "file3", "file4" };
//		choice = new JComboBox();
//		for (String f : files)
//			choice.addItem(f);

		button = new JButton("Select a File");
		button.addActionListener((ea) -> {
			loadFile();
		});

		// layout

		getContentPane().add(instructions, BorderLayout.NORTH);

//		center = new JPanel();
//		center.add(select);
//
////		/** @j2sNative */
////		{
////			center.add(choice);
////		}
//		getContentPane().add(center, BorderLayout.CENTER);

		south = new JPanel();
		south.add(button);

		getContentPane().add(south, BorderLayout.SOUTH);

		pack();
//		refreshFileList();
	}

//    public void refreshFileList() {
//
//        choice.removeAllItems();
//        File fl = new File("data");
//
//        if (!fl.exists()) {
//            System.err.println("Warning: No data files found!");
//            fl.mkdir();
//        }
//
//        sa = fl.list(new ImageFilter());
//
//        for (int file = 0; file < sa.length; file++) {
//            choice.addItem(sa[file]);
//        }
//    }

	@SuppressWarnings("unused")
	public void loadFile() {
		// change the cursor image
		setCursor(new Cursor(Cursor.WAIT_CURSOR));
//      filename = sa[choice.getSelectedIndex()];
		
		JFrame frame = this;
		
		// BH using the AsyncFileChooser for Java and JavaScript
		File dir = new File(directoryString);
		System.out.println(dir.getAbsolutePath());
		if (!dir.isDirectory())
			dir = new File("." + File.separator + ".." + File.separator + "data");
		AsyncFileChooser chooser = new AsyncFileChooser(dir);
		chooser.showOpenDialog(this, () -> {
				electro2D.loadFile(chooser.getSelectedFile(), fileNum);
				// set the cursor image back to normal
				setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				// close the frame
				dispose();
			}, () -> {
				setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				dispose();				
			});
	}

		
}
