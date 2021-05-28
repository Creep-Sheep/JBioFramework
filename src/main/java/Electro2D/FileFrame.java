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

import javax.swing.JFrame;
import javax.swing.JTextArea;

import javajs.async.AsyncFileChooser;

import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JComboBox;
import javax.swing.JPanel;
import javax.swing.JOptionPane;
import java.awt.BorderLayout;
import java.awt.Cursor;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowListener;
import java.io.*;
import java.util.Arrays;
import java.util.function.Function;

import main.java.Utilities.GenomeFileParser;
import main.java.Utilities.MessageFrame;

public class FileFrame extends JFrame {

	/** variables for the file reading pop-up frame **/
	private Electro2D electro2D; // reference to calling applet
	private WindowListener ffwl; // listen for window closing, etc.
	private int fileNum;
	private final String directoryString = "." + File.separator + 
			//".." + File.separator + 
			"data";
	private JTextArea instructions;
	private JLabel select;
//    private JComboBox choice;
	private JButton button;
	private JPanel center;
	private JPanel south;
	private String[] sa;

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
			File f = chooser.getSelectedFile();
			String filename = (f == null ? null : f.getName());
				MessageFrame error = null;
				int n = -1;
				if (filename == null || filename.equals("")) {
					error = new MessageFrame();
					error.setMessage("Please enter a file name.");
				} else {
					filename = f.getAbsolutePath();
					String extension = filename.substring(filename.lastIndexOf(".") + 1);
					// if the file's extention is not one of the supported types
					// display an error message
					String data = null;
					if (/** @j2sNative true || */
					false) {
						data = getStringForFile(f);
					} else {
						// In Java we work with the filename.
					}
					// call the proper method to read the file depending on
					// its type
					// BH using Java 8 switch here
					switch (extension.toLowerCase()) {
					case "faa":
					case "fasta":
						n = GenomeFileParser.fastaParse(f, electro2D, data, fileNum);
						break;
					case "pdb":
						n = GenomeFileParser.pdbParse(f, electro2D, data, fileNum);
						break;
					case "gbk":
						n = GenomeFileParser.gbkParse(f, electro2D, data, fileNum);
						break;
					case "e2d":
						n = GenomeFileParser.e2dParse(f, electro2D, data, fileNum);
						break;
					default:
						error = new MessageFrame();
						error.setMessage("File extension is not valid: " + filename);
						break;
					}
				}
				if (error == null) {
					// here a dialog pops up
					JOptionPane.showMessageDialog(null, n + " Protein" + (n == 1 ? "" : "s") + " loaded.");					
					// display the protein titles from the file
					if (fileNum == 1) {
						electro2D.refreshProteinList();
					} else if (fileNum == 2) {
						electro2D.refreshProteinList2();
					}
				} else {
					error.setLocationRelativeTo(frame);
					error.setVisible(true);
				}
				// set the cursor image back to normal
				setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				// close the frame
				dispose();
			}, () -> {
				setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				dispose();				
			});
	}

	@SuppressWarnings("unused")
	public static String getStringForFile(File f) {
		// In JavaScript we get the data directly from the File object
		swingjs.api.JSUtilI jsutil = (/** @j2sNative new swingjs.JSUtil() || */
		null);
		if (jsutil != null) {
			return new String(jsutil.getBytes(f));
		}
		try {
			BufferedInputStream bis = new BufferedInputStream(new FileInputStream(f));
			byte[] buf = new byte[1024];
			byte[] bytes = new byte[4096];
			int len = 0;
			int totalLen = 0;
			while ((len = bis.read(buf, 0, 1024)) > 0) {
				totalLen += len;
				if (totalLen >= bytes.length)
					bytes = Arrays.copyOf(bytes, totalLen * 2);
				System.arraycopy(buf, 0, bytes, totalLen - len, len);
			}
			bis.close();
			return new String(totalLen < bytes.length ? Arrays.copyOf(bytes,  totalLen) : bytes);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "";
		}
	}
		
}
