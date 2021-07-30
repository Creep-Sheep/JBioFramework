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

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextArea;

import javajs.async.AsyncFileChooser;
import main.java.Utilities.FileUtils;

@SuppressWarnings("serial")
public class FileFrame extends JFrame {

	/** variables for the file reading pop-up frame **/
	private Electro2D electro2D; // reference to calling applet
	private JTextArea instructions;
	private JButton button;
	private JPanel south;
	private int fileNum;
	private JFrame parentFrame;

	public FileFrame(JFrame parentFrame, Electro2D e, int i) {
		this.parentFrame = parentFrame;
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

	boolean haveShown = false;
	
	public void setVisible(boolean b) {
		if (b) {
			setLocationRelativeTo(parentFrame);
		}
		super.setVisible(b);
		if (haveShown) {
			loadFile();
		}
		haveShown = true;
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

	public void loadFile() {
		FileUtils.openFile(this, (file) -> {
			electro2D.loadFile(file, fileNum);
			dispose();
			return null;
		});
	}

}
