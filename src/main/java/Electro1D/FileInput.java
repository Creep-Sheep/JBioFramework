package main.java.Electro1D;

import java.io.File;
import java.util.Vector;

import javax.swing.JOptionPane;

import main.java.Utilities.FileUtils;
import main.java.Utilities.GenomeFileParser;
import main.java.Utilities.MessageFrame;

public class FileInput {

	@SuppressWarnings("unused")
	public void loadFile(File f, String wellNum, Simulation simPanel) {
		JOptionPane.showMessageDialog(null, "Proteins Loading");
		String filename = (f == null ? null : f.getName());
		MessageFrame error = null;
		Vector<Protein> proteins = new Vector<>();
		if (filename == null || filename.equals("")) {
			error = new MessageFrame();
			error.setMessage("Please enter a file name.");
		} else {
			filename = f.getAbsolutePath();
			String extension = filename.substring(filename.lastIndexOf(".") + 1);
			String data = null;
			if (/** @j2sNative true || */
			false) {
				data = FileUtils.getStringForFile(f);
			} else {
				// In Java we work with the filename.
			}
			int n = 0;
			switch (extension.toLowerCase()) {
			case "faa":
			case "fasta":
				n = GenomeFileParser.fastaParse(f, data, proteins, null, 0);
				break;
			case "pdb":
				n = GenomeFileParser.pdbParse(f, data, proteins, null, 0);
				break;
			case "gbk":
				n = GenomeFileParser.gbkParse(f, data, proteins, null, 0);
				break;
			default:
				error = new MessageFrame();
				error.setMessage(
						"File extension is not valid. You inputed a " + extension + " file, please input a fasta file");
				break;
			}
		}
		if (error == null) {
			int n = proteins.size();
			// here a dialog pops up
			JOptionPane.showMessageDialog(null, n + " Protein" + (n == 1 ? "" : "s") + " loaded.");
			// display the protein titles from the file

			// TODO
			// Process the protein list and put in correct well using wellNum
			simPanel.addSampleFromFile(proteins, wellNum);
		}

	}

}
