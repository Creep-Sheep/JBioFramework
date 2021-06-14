package main.java.Electro1D;

import java.awt.Color;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.swing.JOptionPane;

import main.java.Utilities.GenomeFileParser;
import main.java.Utilities.MessageFrame;


public class FileInput {
	GenomeFileParser fileparser = new GenomeFileParser();
	
	@SuppressWarnings("unused")
	public Vector<Protein> LoadFile(File f, String wellNum) {
		String filename = (f == null ? null : f.getName());
		MessageFrame error = null;
		Vector<Protein> proteins = new Vector<>();
		int n;
		if (filename == null || filename.equals("")) {
			error = new MessageFrame();
			error.setMessage("Please enter a file name.");
		}
		else {
			filename = f.getAbsolutePath();
			String extension = filename.substring(filename.lastIndexOf(".") + 1);
			String data = null;
			if (/** @j2sNative true || */false) {
				data = getStringForFile(f);
			} else {
				// In Java we work with the filename.
			}
			switch (extension.toLowerCase()) {
			case "faa":
			case "fasta":
				proteins = fastaParse(f, data);
			}
			
		}
		if (error == null) {
			n = proteins.size();
			// here a dialog pops up
			JOptionPane.showMessageDialog(null, n + " Protein" + (n == 1 ? "" : "s") + " loaded.");					
			// display the protein titles from the file
			
			//TODO 
			//Process the protein list and put in correct well using wellNum
			
		}
		return proteins;
		
	}
	
	private Vector<Protein> fastaParse(File f, String data) {
		BufferedReader in = null;
		boolean anerror = false;
		String temp = "";
		String totalChain = "";
		double doubleVal;
		Vector<String> fileData = new Vector<>();  //holds complete file
        Vector<String> chainData = new Vector<>(); //holds chain designations
        Vector<String> sequences = new Vector<>(); //holds sequence data
        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
        Vector<String> functions = new Vector<>(); //holds the protein functions
        Vector<String> molecularWeightStrings = new Vector<>(); //hold molecular weights
        Vector<Protein> protiens = new Vector<>();//holds the list of protiens
		
		if (data == null || data.equals("")) {
			try {
				in = new BufferedReader(new FileReader(f));
				String temp1;
				while ((temp1 = in.readLine()) != null) {
					fileData.addElement(temp1);
				}
			}
			catch (Exception e) {
				MessageFrame error = new MessageFrame();
				error.setMessage("Error reading from file. Be sure you typed the name correctly.");
				error.setVisible(true);
				anerror = true;
				System.err.println("Exception was: " + e);
			}
		}
		else { //use data from text area
            StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
            while (fileSplitter.hasMoreTokens()) {
                fileData.addElement(fileSplitter.nextToken());
            }
        }
		
		if (anerror == false) {
			
			for (int x = 0; x < fileData.size(); x++) {
				temp = fileData.elementAt(x);
				if(temp.substring(0, 1).equals(">")) {
					if(x > 0) {
						sequences.addElement(totalChain);
					}
					if(temp.indexOf(":") != 1) {
						if(temp.indexOf("|") != -1 && temp.indexOf("|") < temp.indexOf(":")) {
							//this is most likely not chain data, so don't add
						}else {
							chainData.addElement(temp.substring(temp.indexOf(":") + 1,
									temp.indexOf(":") + 2));
						}
					}
					//add sequence title
					//just add the whole line
                    sequenceTitles.addElement(temp.substring
                            (temp.indexOf(">") + 1));
                    //the function of the protein is the same as its title,
                    //minus the identification numbers
                    functions.addElement(temp.substring(temp.lastIndexOf("|")
                            + 1));
                    totalChain = "";
				}
				else {
					totalChain += temp;
					if(x == fileData.size() - 1) {
						sequences.addElement(totalChain);
					}
				}
			}
			//temp data storage
			double mW = 0.0;
			String mWstring = "";
			
			for(int i = 0; i < sequences.size(); i++) {
				temp = sequences.elementAt(i);
				//get the mw for the sequence
				mW = GenomeFileParser.getMW(temp);
				System.out.println(mW);
				mWstring = String.valueOf(mW);
				if(mWstring.length() > mWstring.indexOf('.') + 3) {
					mWstring = mWstring.substring(0, mWstring.indexOf('.') + 3);
				}
				
				doubleVal = Double.parseDouble(mWstring);
				molecularWeightStrings.addElement(mWstring);
			}
			//CONTINUE HERE, THIS IS WHERE YOU HAVE MADE A LIST OF PROTEINS TO BE PROCESSED
			
			for(int i = 0; i < sequences.size(); i++) {
				protiens.add(new Protein(sequenceTitles.elementAt(i), "", "",
						(int) Double.parseDouble(molecularWeightStrings.elementAt(i)), Color.black));
			}
			
		}
		try {
			if(in != null)
				in.close();
		} catch(IOException e) {
		}
		
		return protiens;
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
			e.printStackTrace();
			return "";
		}
	}
}
