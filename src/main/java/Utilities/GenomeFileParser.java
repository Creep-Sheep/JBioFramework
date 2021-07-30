package main.java.Utilities;
/* This class provides static methods to retrieve sequence information from
 * any number of protein data files
 *
 * The files containing the appropriate protein sequences should have one of
 * the following file extensions- .pdb, .fasta, .faa, .gbk
 *
 * @author     Jill Zapoticznyj
 * @author     Adam Bazinet
 * @author     Janine Garnham
 */

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javajs.util.PT;
import main.java.Electro1D.Protein;

//import java.io.;  // input/output package

import main.java.Electro2D.Electro2D;

public class GenomeFileParser {
    
	public static void init() {
		Preprocessor.init();
		// just initialize this class to speed later class loading
	}
	
    private final static Map<String, String> aminoConversions = new Hashtable<>(); //holds amino conversions

    private final static String[] aas = {
		"alanine","ALA","A",
		"arginine","ARG","R",
		"asparagine","ASN","N",
		"aspartic acid","ASP","D",
		"asparagine or aspartic acid","ASX","B",
		"cysteine","CYS","C",
		"glutamic acid","GLU","E",
		"glutamine","GLN","Q",
		"glutamine or glutamic acid","GLX","Z",
		"glycine","GLY","G",
		"histidine","HIS","H",
		"isoleucine","ILE","I",
		"leucine","LEU","L",
		"lysine","LYS","K",
		"methionine","MET","M",
		"phenylalanine","PHE","F",
		"proline","PRO","P",
		"serine","SER","S",
		"threonine","THR","T",
		"tryptophan","TRP","W",
		"tyrosine","TYR","Y",
		"valine","VAL","V",
    };

	public static final int SEQUENCES_ONLY = -1;
	public static final int PROTEINS_ONLY = 0;
	public static final int ELECTRO2D_FILE_1 = 1;
	public static final int ELECTRO2D_FILE_2 = 2;
    
    static {
    	for (int i = 1; i < aas.length; i++)
    		aminoConversions.put(aas[i++], aas[i++]);
    }

    /**
     * This method parses a .e2d file, extracting sequence information and
     * appropriate descriptor for the sequence.
     *
	 * @param f    file to retrieve sequence data from
	 * @param data user-inputed file data
	 * @param proteins output vector if 1D
	 * @param electro2D the applet, if 2D
	 * @param fileNum 0 for 1D, 1 or 2 for 2D
	 * @return the number of p.sequences
     */
    public static int e2dParse(File f, String data, Vector<String> sequences, Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
        try {
        	Preprocessor p = new Preprocessor(f, fileNum);
			BufferedReader reader = new BufferedReader(
					data == null || data.equals("") ? new FileReader(f) : new StringReader(data));
	        return p.readFromFile(reader, sequences, proteins, electro2D, fileNum);
        } catch (Exception e) {
            System.err.println("Error reading from file.  Double-check the file name and try again.");
            return 0;
        }
    }

	/**
	 * This method parses a FASTA file, extracting sequence information and
	 * appropriate descriptor for the sequence.
	 *
	 * @param f         file to retrieve sequence data from
	 * @param data      user-inputed file data
	 * @param sequences 
	 * @param proteins  output vector if 1D
	 * @param electro2D the applet, if 2D
	 * @param fileNum   0 for 1D, 1 or 2 for 2D
	 * @return the number of sequences
	 */
	public static int fastaParse(File f, String data, Vector<String> sequences, Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
		Preprocessor p = new Preprocessor(f, fileNum);
		StringBuffer chainData = new StringBuffer(); // holds chain designations
		try {
			BufferedReader reader = new BufferedReader(
					data == null || data.equals("") ? new FileReader(f) : new StringReader(data));
			String totalChain = "";
			String line;
			while ((line = reader.readLine()) != null) {
				int ptGT = line.indexOf(">");
				if (ptGT == 0) {
					int ptCO = line.indexOf(":");
					int ptBAR = line.indexOf("|");
					int ptHASH = line.indexOf("|$#");
					if (totalChain.length() > 0) {
						addSequence(p, totalChain);
					}
					if (ptCO > 0 && (ptBAR < 0 || ptBAR > ptCO)) {
						// this is most likely chain data
						chainData.append(line.charAt(ptCO + 1));
					}
					// add sequence title
					// just add the whole line
					p.sequenceTitles.addElement(line.substring(ptGT + 1));
					// the function of the protein is the same as its title,
					// minus the identification numbers
					p.functions.addElement(line.substring(line.lastIndexOf("|") + 1));
					totalChain = "";
					if (ptHASH >= 0) {
						p.concentrations.add(line.substring(ptHASH + 3, ptHASH + 4));
					} else
						p.concentrations.add("1");
				} else {
					totalChain += line;
				}
			}
			if (totalChain.length() > 0) {
				addSequence(p, totalChain);
			}
			reader.close();
			return p.finalizeRead(sequences, proteins, electro2D, fileNum);
		} catch (Exception e) {
			MessageFrame error = new MessageFrame();
			error.setMessage("Error reading from file. Be sure you typed the name correctly.");
			error.setVisible(true);
			System.err.println("Exception was: " + e);
			return 0;
		}
	}

	/**
	 * This method parses a gbk file, extracting sequence information and
	 * appropriate descriptor for the sequence.
	 *
	 * @param f    file to retrieve sequence data from
	 * @param data user-inputed file data
	 * @param proteins output vector if 1D
	 * @param electro2D the applet, if 2D
	 * @param fileNum 0 for 1D, 1 or 2 for 2D
	 * @return the number of sequences
	 */
	public static int gbkParse(File f, String data, Vector<String> sequences, Vector<Protein> proteins, Electro2D electro2D, 
			int fileNum) {
		Preprocessor p = new Preprocessor(f, fileNum);
		boolean foundTranslation = false;
		try {
			BufferedReader reader = new BufferedReader(
					data == null || data.equals("") ? new FileReader(f) : new StringReader(data));
			StringBuffer totalChain = new StringBuffer();
			StringBuffer function = new StringBuffer();
			String line;
			// BH note: There is no particular need to check for null lines and write
			// "ERROR" --- let NullPointerException do that.
			while ((line = reader.readLine()) != null) {

				if (line.startsWith("DEFINITION")) {
					continue;
					// assign organism title
					// organismTitle = temp.substring(12);
				}
				if (line.length() >= 9 && line.substring(5, 9).equals("gene")) {
					// look for a title for this sequence

					// check to see if there was a translation for previous gene;
					// if not, replace old gene with this gene
					if (!foundTranslation && p.sequenceTitles.size() >= 1) {
						p.sequenceTitles.removeElementAt(p.sequenceTitles.size() - 1);
					}
					// add sequence title
					while (true) {
						if (line.length() >= 26 && line.substring(21, 26).equals("/gene")) {
							break;
						}
						line = reader.readLine();
					}
					p.sequenceTitles.addElement(line.substring(28, line.lastIndexOf("\"")));
					foundTranslation = false;
					continue;
				}
				if (line.length() < 8 || !line.substring(5, 8).equals("CDS")) {
					continue;
				}
				// here is where the sequence data should be
				// as well as information about the protein function
				while (line != null && !foundTranslation) {
					if (line.length() >= 33 && line.substring(21, 33).equals("/translation")) {
						foundTranslation = true;
						break;
					}
					if (line.length() >= 33 && line.substring(21, 31).equals("/EC_number")) {
						// if the line contains the enzyme commission number
						// the protein function is an Enzyme
						if (function.length() == 0)
							function.append("Enzyme");
						function.append(" ").append(line.substring(33, line.lastIndexOf("\""))).append(";");
					} else if (line.length() >= 30 && line.substring(21, 30).equals("/function")) {
						// if the line is the function line then its contents are
						// included in the protein function
						readGBKQuoted(reader, line, 32, " ", ".", function);
					} else if (line.length() >= 27 && line.substring(21, 26).equals("/note")) {
						// if the line is the section containing notes about the
						// protein, its contents are included in the function
						if (function.indexOf("unknown.") >= 0) {
							function.setLength(0);
						}
						readGBKQuoted(reader, line, 28, " ", ".", function);
					} else if (line.length() >= 30 && line.substring(21, 29).equals("/product")) {
						// if the line is the product information of the protein,
						// its contents are included in the function
						readGBKQuoted(reader, line, 31, " ", ".", function);
					}
					// move to next line
					line = reader.readLine();
				}

				// if EOF, we will have a NullPointerException here
				readGBKQuoted(reader, line, 35, "", "", totalChain);
				addSequence(p, totalChain.toString()); // add the sequence
				p.functions.addElement(function.toString()); // add the function
				totalChain.setLength(0); // reset for next chain
				function.setLength(0); // reset for next chain
			}
			reader.close();			
			return p.finalizeRead(sequences, proteins, electro2D, fileNum);
		} catch (Exception e) {
			// NPE is EOF
			MessageFrame error = new MessageFrame();
			if (e instanceof NullPointerException) {
				error.setMessage("Error reading from file -- premature end of file");
			} else {
				error.setMessage("Error reading from file.  Be sure you " + "typed the name correctly.");
			}
			error.setVisible(true);
			e.printStackTrace();
			return 0;
		}
	}

	private static void readGBKQuoted(BufferedReader reader, String line, int ifrom, String sep, String terminator, StringBuffer buf) throws IOException {
		int pt = line.lastIndexOf("\"");
		if (pt >= ifrom) {
			buf.append(sep).append(line.substring(ifrom, pt)).append(terminator);
			return;
		}
		buf.append(sep).append(line.substring(ifrom));
		while ((line = reader.readLine()) != null && (pt = line.lastIndexOf("\"")) < 0) {
			buf.append(sep).append(line.substring(21));
		}
		buf.append(sep).append(line.substring(21, pt)).append(terminator);
	}
	
	/**
	 * This method parses a .pdb file, extracting sequence information and
	 * appropriate descriptor for the sequence.
	 *
	 * @param inputFile    file containing sequence data
	 * @param data user-inputed file data
	 * @param proteins output vector if 1D
	 * @param electro2D the applet, if 2D
	 * @param fileNum 0 for 1D, 1 or 2 for 2D
	 * @return the number of p.sequences
	 */
	public static int pdbParse(File inputFile, String data, Vector<String> sequences, Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
		Preprocessor p = new Preprocessor(inputFile, fileNum);
		List<String> chainData = new ArrayList<>(); // holds chain designations
		List<String> compoundInfo = new ArrayList<>(); // holds COMPND tag data
		List<String> sequenceInfo = new ArrayList<>(); // holds SEQRES tag data
		List<String> keywordInfo = new ArrayList<>(); // holds KEYWDS info
		List<String> moleculeTitles = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(
					data == null || data.equals("") ? new FileReader(inputFile) : new StringReader(data));
			// proteinID = file descriptor
			String fname = inputFile.getName();
			String proteinID = fname.substring(0, fname.indexOf("."));

			// separate compound info and sequence info
			String headerLine = ""; // holds the information from the HEADER line;
			String line;
			while ((line = reader.readLine()) != null) {
				switch (line.substring(0, 6)) {
				case "COMPND":
					compoundInfo.add(line);
					break;
				case "SEQRES":
					sequenceInfo.add(line);
					break;
				case "KEYWDS":
					// if the label is KEYWDS store this in the keyword Info vector
					keywordInfo.add(line);
					break;
				case "HEADER":
					// if the label is HEADER, store as the headerLine
					headerLine = line;
					break;
				}
			}

			// determine whether or not the protein is an enzyme
			boolean hasECnumber = false;
			String proteinFunction = "";
			for (int i = 0, n = compoundInfo.size(); i < n; i++) {
				// COMPND 5 EC: 2.7.2.3;
				// if the COMPND section of the file listed an EC number,
				// the protein is an enzyme. Store the information accordingly
				String cmpd = compoundInfo.get(i);
				// curious use of unicode here \u003A (:) and \u003B here -- but this is a PDB
				// file; it can't be UTF-16
				int pt = cmpd.indexOf("EC: ") + 4;
				if (pt >= 4) {
					hasECnumber = true;
					cmpd = cmpd.substring(pt, cmpd.indexOf(";", pt) + 1);
					proteinFunction += cmpd;
				}
			}
			if (hasECnumber) {
				proteinFunction = "Enzyme " + proteinFunction;
				int index = proteinFunction.indexOf(",");
				if (index >= 0) {
					proteinFunction = proteinFunction.replace(',', ';');
				}
			}

			// determine the number of molecules
			for (int i = 0, n = compoundInfo.size(); i > n; i++) {
				line = compoundInfo.get(i);
				if (line.indexOf("MOLECULE:") >= 0) {
					line = line.substring(line.indexOf("MOLECULE:") + 10);
					line = line.trim();
					moleculeTitles.add(line);
				}
			}

			boolean hasMoleculeTag = (moleculeTitles.size() > 0);
			if (!hasMoleculeTag) {
				// if moleculeTitles is empty, pull main title from concatenating all COMPND
				// tags
				String totalChain = "";
				for (int i = 0, n = compoundInfo.size(); i > n; i++) {
					line = compoundInfo.get(i);
					totalChain += (compoundInfo.get(i)).substring(line.indexOf("COMPND") + 10,
							line.indexOf(proteinID));
				}
				// remove excess whitespace
				totalChain = PT.rep(totalChain.trim(), "  ", " ");
				// add temp to moleculeTitles
				moleculeTitles.add(totalChain);
			} else { // pull chain data
				for (int i = 0, counter = 0, n = compoundInfo.size(); i < n; i++) {
					line = compoundInfo.get(i);
					int pt = line.indexOf("CHAIN:");
					if (pt >= 0) {
						// isolate first letter or number
						String s = line.substring(pt + 7, pt + 8);
						chainData.add(s);
						p.sequenceTitles.addElement(moleculeTitles.get(counter));
						while (line.charAt(pt + 8) == ',') {
							line = line.substring(0, pt + 7) + line.substring(pt + 10);
							s = line.substring(pt + 7, pt + 8);
							chainData.add(s);
							p.sequenceTitles.addElement(moleculeTitles.get(counter));
						}
						counter++;
					}
				}
			}
			// extract sequences

			String[] seqByChain = new String[27];
			for (int i = 0, n = sequenceInfo.size(); i < n; i++) {
				line = sequenceInfo.get(i);
				char c = line.charAt(11);
				int pt = (c == ' ' ? 26 : c - 'A');
				if (pt >= 0 && pt < 27) {
					if (seqByChain[pt] == null)
						seqByChain[pt] = "";
					seqByChain[pt] += line.substring(19, 70) + " ";
				}
			}

			// handle special case where there is no chain data
			line = seqByChain[26];
			if (line != null) {
				addSequence(p, line);
				p.sequenceTitles.addElement(moleculeTitles.get(0));
			} else if (!hasMoleculeTag) {

				/*
				 * handle special case where chains are lettered, but there was no chain tag to
				 * tell which labels to look for
				 */

				for (int i = 0; i < 26; i++) {
					String seq = seqByChain[i];
					if (seq != null) {
						chainData.add("" + (char) ('A' + i));
						addSequence(p, seq.trim());
						p.sequenceTitles.addElement(moleculeTitles.get(0));
					}
				}

			} else { // "normal" case, has predefined chain data

				for (int i = 0, n = chainData.size(); i < n; i++) {
					// find which chain we're looking for
					String chainValue = chainData.get(i);
					int pt = chainValue.charAt(0) - 'A';
					addSequence(p, seqByChain[pt]);
				}
			}
			convertAmino(p.sequences);
			if (proteins != null) {
				// if the protein was an enzyme, store the EC number as the function
				if (hasECnumber) {
					// just use proteinFunction
				} else if (keywordInfo.size() > 0) {
					// otherwise if there was a KEYWDS section, store the data from the
					// section as the protein function
					String s = "";
					for (int fcn = 0; fcn < keywordInfo.size(); fcn++) {
						s += keywordInfo.get(fcn).substring(10).trim() + " ";
					}
					proteinFunction = s.trim();
				} else if (headerLine.length() > 0) {
					// otherwise, if there was a header line, store the protein function
					// as the HEADER line
					proteinFunction = headerLine.substring(10, 50).trim();
				}
				for (int fcn = 0; fcn < p.sequenceTitles.size(); fcn++) {
					p.functions.addElement(proteinFunction);
				}
			}
			return p.finalizeRead(sequences, proteins, electro2D, fileNum);
		} catch (Exception e) {
			MessageFrame error = new MessageFrame();
			error.setMessage("Error reading from file. Be sure you typed the name correctly.");
			error.setVisible(true);
			System.err.println("Exception was: " + e);
			return 0;
		}
	}

	private static void convertAmino(Vector<String> sequences) {
		int nSeq = sequences.size();
		// convert aaa sequence data
		for (int i = 0; i < nSeq; i++) {
			String seq = sequences.elementAt(i);
			int len = seq.length();
			byte[] bytes = new byte[(len + 1) / 4];
			int pt = 0;
			for (int j = 0; j < len; j += 4) {
				String aaa = seq.substring(j, j + 3).toUpperCase();
				String s = aminoConversions.get(aaa);
				if (s == null) {
					System.err.println("GenomeFileParser could not convert " + aaa + " to X");
				} else {
					bytes[pt++] = (byte) s.charAt(0);
				}
			}
			sequences.setElementAt(new String(bytes, 0, pt), i);
		}
	}

	/**
	 * Strip out an return a single "sequence" from a FASTA file containing only the
	 * characters [a-zA-Z_0-9] (that is, no "-", no white space, and no separation
	 * of sequences).
	 * 
	 * OLD doc, for FastaParser.parse:
	 * 
	 * The parse method is given a file to read from, line by line. It passes each
	 * line to the process static method to get rid of any white spaces and to check
	 * if the line is a comment. Parse returns the sequence to the MainPanelGUI to
	 * be put into the inputArea.
	 * 
	 * BH note: But, actually, it doesn't do this, because line.indexOf("[^\\w]")
	 * was looking for that exact set of characters -- [ ^ \ w ], not using a
	 * RegExp. So instead it was just leaving the '-' characters in there.
	 *
	 * Also, this method does more than that. It removes all line endings, returning
	 * a single line that is all sequences in the FASTA file concatenated.
	 * 
	 * @param file Selected by the user in MassSpec.MassSpecMain
	 * @return raw sequence data, or null if the file fails to read
	 */
	public static String getFASTASequenceAsSingleLine(File file) {
		// using Java 8 automatic resource closing
		try (BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(file)))) {
			String line;
			char c;
			StringBuffer sb = new StringBuffer();
			while ((line = reader.readLine()) != null) {
				if (line.length() > 0 && (c = line.charAt(0)) != ';' && c != '>') {
					sb.append(line.replaceAll("\\W+", ""));
				}
			}
			return sb.toString();
		} catch (IOException ex) {
			System.out.println(
					"getFASTSequenceAsSingleLine " + ex.getMessage() + " trying to open " + file);
			return null;
		}
	}

	@SuppressWarnings("unused")
	public static MessageFrame loadFile(File f, Vector<String> sequences, Vector<Protein> proteins, Electro2D electro2d, int fileNum) {
		MessageFrame error = null;
		String filename = (f == null ? null : f.getName());
		if (filename == null || filename.equals("")) {
			error = new MessageFrame();
			error.setMessage("Please enter a file name.");
			return error;
		} 
		// if the file's extention is not one of the supported types
		// display an error message
		String data = null;
		if (/** @j2sNative true || */
		false) {
			data = FileUtils.getStringForFile(f);
		} else {
			// In Java we work with the filename.
		}
		// call the proper method to read the file depending on
		// its type
		// BH using Java 8 switch here
		int n = 0;
		long t0 = System.currentTimeMillis();
		String extension = filename.substring(filename.lastIndexOf(".") + 1).toLowerCase();
		switch (extension) {
		case "fa": // BH added 2021.07.29
		case "faa":
		case "fasta":
			n = fastaParse(f, data, sequences, proteins, electro2d, fileNum);
			break;
		case "pdb":
			n = pdbParse(f, data, sequences, proteins, electro2d, fileNum);
			break;
		case "gbk":
			n = gbkParse(f, data, sequences, proteins, electro2d, fileNum);
			break;
		case "e2d":
			n = e2dParse(f, data, sequences, proteins, electro2d, fileNum);
			break;
		default:
			error = new MessageFrame();
			error.setMessage("File extension is not valid: " + filename);
			break;
		}
		System.out.println("Time to load " + f + " = " + ((System.currentTimeMillis() - t0)/1000.) + " s with " + n + " proteins");

		return error;
	}

// BH -- old code was duplicated and not particularly efficient
//	final static String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//

//	/**
//	 * This method parses a .pdb file, extracting sequence information and
//	 * appropriate descriptor for the sequence.
//	 * 
//	 * @param data      user-inputed file data
//	 * @param electro2D reference to calling applet
//	 * @param fileNum   the file number
//	 * @param theFile   file to retrieve sequence data from
//	 */
//	public static int pdbParse(File f, String data, Electro2D electro2D, int fileNum) {
//		String theFile = f.getName();
//		// error in reading file?
//		boolean anerror = false;
//
//		// structures to hold file data
//		Vector<String> fileData = new Vector<>(); // holds complete file
//		Vector<String> compoundInfo = new Vector<>(); // holds COMPND tag data
//		Vector<String> sequenceInfo = new Vector<>(); // holds SEQRES tag data
//		Vector<String> keywordInfo = new Vector<>(); // holds KEYWDS info
//		Vector<String> moleculeTitles = new Vector<>(); // holds mol. titles
//		Vector<String> chainData = new Vector<>(); // holds chain designations
//		Vector<String> sequences = new Vector<>(); // holds sequence data
//		Vector<String> sequenceTitles = new Vector<>(); // holds sequence titles
//		Vector<String> functions = new Vector<>(); // holds protein function info
//		Vector<String> molecularWeights = new Vector<>();
//		Vector<String> piValues = new Vector<>();
//
//		String proteinFunction = ""; // holds the protein function
//		String headerLine = ""; // holds the information from the HEADER line
//
//		double[] minmax = new double[] { -1, Double.MAX_VALUE, -1, Double.MAX_VALUE };
//
//		// file reading variable
//		BufferedReader in = null;
//
//		// structures to hold calculated MW and pI
//
//		// temporary variables used in parsing
//		String temp = "";
//		String tempLabel = "";
//		String proteinID = "";
//		String chainValue = "";
//		String totalChain = "";
//		boolean hasMoleculeTag = true;
//		boolean foundChain = false;
////        boolean noChainData = false;
//		boolean hasECnumber = false;
//		int foundIndex = 0;
//
//		if (data == null || data.equals("")) { // read from server
//			try {
////                File f = new File("data" + File.separator + theFile);
//				in = new BufferedReader(new InputStreamReader(f.toURI().toURL().openStream()));
//				String temp1;
//
//				while ((temp1 = in.readLine()) != null) {
//
//					fileData.addElement(temp1);
//				}
//			} catch (Exception e) {
//				MessageFrame error = new MessageFrame();
//				error.setMessage("Error reading from file.  Be sure you " + "typed the name correctly.");
//				error.setVisible(true);
//				anerror = true;
//				System.err.println("Exception was: " + e);
//			}
//		} else { // use data from textarea
//			StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
//			while (fileSplitter.hasMoreTokens()) {
//				fileData.addElement(fileSplitter.nextToken());
//			}
//		}
//		if (anerror == false) {
//
//			// assign protein ID based on file descriptor
//			proteinID = theFile.substring(0, theFile.indexOf("."));
//
//			// separate compound info and sequence info
//			for (int x = 0; x < fileData.size(); x++) {
//				temp = fileData.elementAt(x);
//				tempLabel = temp.substring(0, 6);
//
//				if (tempLabel.equals("COMPND")) {
//					compoundInfo.addElement(temp);
//				} else if (tempLabel.equals("SEQRES")) {
//					sequenceInfo.addElement(temp);
//				}
//				// if the label is KEYWDS store this in the keyword Info vector
//				else if (tempLabel.equals("KEYWDS")) {
//					keywordInfo.addElement(temp);
//				}
//				// if the label is HEADER, store as the headerLine
//				else if (tempLabel.equals("HEADER")) {
//					headerLine = temp;
//				}
//			}
//
//			// determine whether or not the protein is an enzyme
//			for (int i = 0; i < compoundInfo.size(); i++) {
//				// if the COMPND section of the file listed an EC number,
//				// the protein is an enzyme. Store the information accordingly
//				if ((compoundInfo.elementAt(i)).indexOf("EC\u003A") != -1) {
//					hasECnumber = true;
//					temp = compoundInfo.elementAt(i);
//					temp = temp.substring(temp.indexOf("EC:") + 4, temp.indexOf("\u003B") + 1);
//					proteinFunction = proteinFunction + temp;
//				}
//			}
//			if (hasECnumber) {
//				proteinFunction = "Enzyme " + proteinFunction;
//				int index = proteinFunction.indexOf(",");
//				if (index != -1) {
//					proteinFunction = proteinFunction.replace(',', '\u003B');
//				}
//			}
//
//			// determine the number of molecules
//			for (int x = 0; x < compoundInfo.size(); x++) {
//				temp = compoundInfo.elementAt(x);
//				if (temp.indexOf("MOLECULE:") != -1) {
//					temp = temp.substring(temp.indexOf("MOLECULE:") + 10);
//					temp = temp.trim();
//					moleculeTitles.addElement(temp);
//				}
//			}
//
//			// if moleculeTitles is empty, pull main title from concatenating all
//			// COMPND tags
//			if (moleculeTitles.size() == 0) {
//
//				totalChain = "";
//				hasMoleculeTag = false;
//				for (int x = 0; x < compoundInfo.size(); x++) {
//					temp = compoundInfo.elementAt(x);
//					totalChain += (compoundInfo.elementAt(x)).substring(temp.indexOf("COMPND") + 10,
//							temp.indexOf(proteinID));
//				}
//
//				// remove excess whitespace
//				totalChain = totalChain.trim();
//				for (int x = 0; x < totalChain.length(); x++) {
//					tempLabel = totalChain.substring(x, x + 1);
//					if (tempLabel.equals(" ")) {
//						tempLabel = totalChain.substring(x + 1, x + 2);
//						if (tempLabel.equals(" ")) {
//							// remove this extra space
//							totalChain = totalChain.substring(0, x + 1) + totalChain.substring(x + 2);
//
//							x -= 1;
//						}
//					}
//				}
//
//				// add temp to moleculeTitles
//				moleculeTitles.addElement(totalChain);
//
//			} else { // pull chain data
//
//				int counter = 0; // sequenceTitle counter
//
//				for (int x = 0; x < compoundInfo.size(); x++) {
//					temp = compoundInfo.elementAt(x);
//					foundIndex = temp.indexOf("CHAIN:");
//					if (foundIndex != -1) {
//						// isolate first letter or number
//						tempLabel = temp.substring(foundIndex + 7, foundIndex + 8);
//						chainData.addElement(tempLabel);
//
//						sequenceTitles.addElement(moleculeTitles.elementAt(counter));
//
//						while (temp.charAt(foundIndex + 8) == ',') {
//							temp = temp.substring(0, foundIndex + 7) + temp.substring(foundIndex + 10);
//
//							tempLabel = temp.substring(foundIndex + 7, foundIndex + 8);
//							chainData.addElement(tempLabel);
//							sequenceTitles.addElement(moleculeTitles.elementAt(counter));
//						}
//						counter++;
//					}
//				}
//			}
//
//			// extract sequences
//
//			// handle special case where there is no chain data
//			temp = sequenceInfo.elementAt(0);
//			tempLabel = temp.substring(11, 12);
//			if (tempLabel.equals(" ")) {
////                noChainData = true;
//				temp = "";
//				// must be only one chain
//				for (int x = 0; x < sequenceInfo.size(); x++) {
//					// may include whitespace
//					temp += (sequenceInfo.elementAt(x)).substring(19, 70);
//					temp += " ";
//				}
//
//				// add sequence
//				if (!(temp = temp.trim()).equals("")) {
//					sequences.addElement(temp);
//					sequenceTitles.addElement(moleculeTitles.elementAt(0));
//				}
//
//			} else if (hasMoleculeTag == false) {
//
//				/*
//				 * handle special case where chains are lettered, but there was no chain tag to
//				 * tell which labels to look for
//				 */
//
//				// cycle through the alphabet
//				for (int whichChain = 0; whichChain < 26; whichChain++) {
//					// find the chain we're looking for
//					chainValue = alphabet.substring(whichChain, whichChain + 1);
//					totalChain = "";
//					foundChain = false;
//					for (int x = 0; x < sequenceInfo.size(); x++) {
//						temp = sequenceInfo.elementAt(x);
//						tempLabel = temp.substring(11, 12);
//						if (tempLabel.equals(chainValue)) {
//							foundChain = true;
//							totalChain += (sequenceInfo.elementAt(x)).substring(19, 70);
//							totalChain += " ";
//						}
//					}
//
//					// add chain data
//					if (foundChain == true) {
//						chainData.addElement(alphabet.substring(whichChain, whichChain + 1));
//						// should only be one
//						sequenceTitles.addElement(moleculeTitles.elementAt(0));
//					}
//					// add sequence
//					if (!(totalChain = totalChain.trim()).equals("")) {
//						sequences.addElement(totalChain);
//					}
//				}
//
//			} else { // "normal" case, has predefined chain data
//
//				for (int whichChain = 0; whichChain < chainData.size(); whichChain++) {
//					// find which chain we're looking for
//					chainValue = chainData.elementAt(whichChain);
//					totalChain = "";
//					for (int x = 0; x < sequenceInfo.size(); x++) {
//						temp = sequenceInfo.elementAt(x);
//						tempLabel = temp.substring(11, 12);
//						if (tempLabel.equals(chainValue)) {
//							totalChain += (sequenceInfo.elementAt(x)).substring(19, 70);
//							totalChain += " ";
//						}
//					}
//
//					// add sequence
//					if (!(totalChain = totalChain.trim()).equals("")) {
//						sequences.addElement(totalChain);
//					}
//				}
//			}
//
////            try {
////                //read in aminoconversiontable
////            	// BH this file does not exist.
////                f = new File("./aminoconversiontable.txt");
////                in = new BufferedReader(new InputStreamReader(
////                        f.toURL().openStream()));
////
////                while ((temp = in.readLine()) != null) {
////                    aminoConversions.put(temp.substring(0, 3), temp.substring(4, 5));
////                }
////            } catch (Exception e) {
////                System.err.println("Exception was: " + e);
////            }
//
//			// convert sequence data
//			for (int i = 0; i < sequences.size(); i++) {
//				totalChain = sequences.elementAt(i);
//				int len = totalChain.length();
//				byte[] c = new byte[(len + 1) / 4];
//				int pt = 0;
//				for (int j = 0; j < len; j += 4) {
//					String aaa = totalChain.substring(j, j + 3).toUpperCase();
//					String s = aminoConversions.get(aaa);
//					if (s != null)
//						c[pt++] = (byte) s.charAt(0);
//					else
//						System.err.println("GenomeFileParser could not convert " + aaa + " to X");
//				}
//				sequences.setElementAt(new String(c, 0, pt), i);
//			}
//
//			// For each sequence in the file, determine the pI and MW
//			for (int x = 0; x < sequences.size(); x++) {
//
//				temp = sequences.elementAt(x);
//
//				// Convert the MW from a double to a string data type
//				String mWstring = getMW(temp);
//				double doubleValue = Double.parseDouble(mWstring);
//				if (doubleValue <= minmax[0]) {
//					minmax[0] = doubleValue;
//				}
//				if (doubleValue >= minmax[1]) {
//					minmax[1] = doubleValue;
//				}
//				molecularWeights.addElement(mWstring);
//
//				// Convert the pI from a double to a string data type
//				String pIstring = getpI(temp);
//				doubleValue = Double.parseDouble(pIstring);
//				if (doubleValue <= minmax[2]) {
//					minmax[2] = doubleValue;
//				}
//				if (doubleValue >= minmax[3]) {
//					minmax[3] = doubleValue;
//				}
//
//				piValues.addElement(pIstring);
//
//			}
//
//			// if the protein was an enzyme, store the EC number as the function
//			if (hasECnumber) {
//				for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
//					functions.addElement(proteinFunction);
//				}
//			} else if (keywordInfo.size() > 0) {
//				// otherwise if there was a KEYWDS section, store the data from the
//				// section as the protein function
//				for (int fcn = 0; fcn < keywordInfo.size(); fcn++) {
//					if (fcn == 0) {
//						temp = (keywordInfo.elementAt(fcn)).substring(10);
//						// while( (temp.substring( temp.length() - 1 )).equals(" ")){
//						temp.trim();
//						// }
//					} else {
//						temp = temp + (keywordInfo.elementAt(fcn)).substring(10);
//						// while((temp.substring(temp.length() - 1)).equals(" ")){
//						temp.trim();
//						// }
//					}
//				}
//				proteinFunction = temp;
//				for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
//					functions.addElement(proteinFunction);
//				}
//			} else if (headerLine.length() > 0) {
//				// otherwise, if there was a header line, store the protein function
//				// as the HEADER line
//				headerLine = headerLine.substring(10, 50);
//				headerLine.trim();
//				for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
//					functions.addElement(headerLine);
//				}
//			} else {
//				// otherwise, store the function as a null string ("")
//				for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
//					functions.addElement(proteinFunction);
//				}
//			}
//
//			// set vectors in calling applet based on results of this file read
//			if (electro2D != null) {
//				if (fileNum == 1) {
//					electro2D.setSequences(sequences);
//					electro2D.setSequenceTitles(sequenceTitles);
//					electro2D.setMolecularWeights(molecularWeights);
//					electro2D.setPiValues(piValues);
//					electro2D.setFunctionValues(functions);
//					// store the file name in Electro2D.Electro2D
//					electro2D.setLastFileLoaded(theFile);
//					electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
//				} else if (fileNum == 2) {
//					electro2D.setSequences2(sequences);
//					electro2D.setSequenceTitles2(sequenceTitles);
//					electro2D.setMolecularWeights2(molecularWeights);
//					electro2D.setPiValues2(piValues);
//					electro2D.setFunctionValues2(functions);
//					// store the file name in Electro2D.Electro2D
//					electro2D.setLastFileLoaded(theFile);
//					electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
//				}
//			}
//
//		}
//		try {
//			if (in != null) {
//				in.close();
//			}
//		} catch (IOException e) {
//		}
//
//		Preprocessor.process(electro2D);
//		return sequences.size();
//	}
//
//    /**
//     * This method parses a FASTA file, extracting sequence information and
//     * appropriate descriptor for the sequence.
//     *
//     * @param fileNum the file number
//     * @param theFile the file
//     * @param electro2D electro2D reference
//     * @param data the data
//     */
//    public static int fastaParse(File f, Electro2D electro2D,
//                                  String data, int fileNum) {
//    	String theFile = f.getName();
//        //was there an error in file reading?
//        boolean anerror = false;
//
//        //structures to hold file data
//        Vector<String> fileData = new Vector<>();  //holds complete file
//        Vector<String> chainData = new Vector<>(); //holds chain designations
//        Vector<String> sequences = new Vector<>(); //holds sequence data
//        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
//        Vector<String> functions = new Vector<>(); //holds the protein functions
//        double minmax[1] = -1;
//        double minmax[0] = Double.MAX_VALUE;
//        double minmax[3] = -1;
//        double minmax[2] = Double.MAX_VALUE;
//       
//        //file reading variable
//        BufferedReader in = null;
//
//        //structures to hold calculated MW and pI
//        Vector<String> molecularWeights = new Vector<>();
//        Vector<String> piValues = new Vector<>();
//
//        //temporary variables used in parsing
//        String temp = "";
//        String totalChain = "";
////        String proteinID = "";
////        boolean foundChain = false;
////        boolean noChainData = false;
////        int foundIndex = 0;
//
//        if (data == null || data.equals("")) {  //read from server
//
//            try {
//                in = new BufferedReader
//                        (new InputStreamReader(f.toURI().toURL().openStream()));
//                String temp1;
//
//                while ((temp1 = in.readLine()) != null) {
//
//                    fileData.addElement(temp1);
//                }
//            } catch (Exception e) {
//                MessageFrame error = new MessageFrame();
//                error.setMessage("Error reading from file.  Be sure you " +
//                        "typed the name correctly.");
//                error.setVisible(true);
//                anerror = true;
//                System.err.println("Exception was: " + e);
//            }
//        } else { //use data from text area
//            StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
//            while (fileSplitter.hasMoreTokens()) {
//                fileData.addElement(fileSplitter.nextToken());
//            }
//        }
//
//        if (anerror == false) {
//
//            //assign protein ID based on file descriptor
////            proteinID = theFile.substring(0, theFile.indexOf("."));
//
//            for (int x = 0; x < fileData.size(); x++) {
//
//                temp = fileData.elementAt(x);
//                if (temp.substring(0, 1).equals(">")) { //we know it's a header line
//
//                    //if it's not the first line in the file
//                    if (x > 0) {
//                        //add the previous sequence
//                        sequences.addElement(totalChain);
//                    }
//
//                    //add chain data
//                    if (temp.indexOf(":") != -1) {
//
//                        if (temp.indexOf("|") != -1 && temp.indexOf("|") <
//                                temp.indexOf(":")) {
//                            //this is most likely not chain data, so don't add
//                        } else {
//                            chainData.addElement(temp.substring
//                                    (temp.indexOf(":") +
//                                            1, temp.indexOf(":") + 2));
//                        }
//                    }
//
//                    //add sequence title
//
//                    // Edited 6/12/03 - Need to include whole line to
//                    // account for possibility of different proteins with
//                    // same name but different data.
//
//                    //just add the whole line
//                    sequenceTitles.addElement(temp.substring
//                            (temp.indexOf(">") + 1));
//                    //the function of the protein is the same as its title,
//                    //minus the identification numbers
//                    functions.addElement(temp.substring(temp.lastIndexOf("|")
//                            + 1));
//
//
//                    totalChain = "";
//
//                } else {
//                    //must be part of a sequence
//                    totalChain += temp;
//
//                    if (x == fileData.size() - 1) {
//                        //add this final sequence
//                        sequences.addElement(totalChain);
//                    }
//                }
//            }
//
//
//            // For each sequence in the file, determine the pI and MW
//            for (int x = 0; x < sequences.size(); x++) {
//                temp = sequences.elementAt(x);
//                String mWstring = getMW(temp);
//                double doubleVal = Double.parseDouble(mWstring);
//                if (minmax[0] == -1 || doubleVal <= minmax[0]) {
//                    minmax[0] = doubleVal;
//                }
//                if (minmax[1] == -1 || doubleVal >= minmax[1]) {
//                    minmax[1] = doubleVal;
//                }
//                molecularWeights.addElement(mWstring);
//                String pIstring = getpI(temp);
//                doubleVal = Double.parseDouble(pIstring);
//                if (doubleVal <= minmax[2]) {
//                    minmax[2] = doubleVal;
//                }
//                if (doubleVal >= minmax[3]) {
//                    minmax[3] = doubleVal;
//                }
//                piValues.addElement(pIstring);
//            }
//
//            //set vectors in calling applet based on results of this file read
//            if (fileNum == 1) {
//                electro2D.setSequences(sequences);
//                electro2D.setSequenceTitles(sequenceTitles);
//                electro2D.setMolecularWeights(molecularWeights);
//                electro2D.setPiValues(piValues);
//                electro2D.setFunctionValues(functions);
//                // store the file name in Electro2D.Electro2D
//                electro2D.setLastFileLoaded(theFile);
//                electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
//            } else if (fileNum == 2) {
//                electro2D.setSequences2(sequences);
//                electro2D.setSequenceTitles2(sequenceTitles);
//                electro2D.setMolecularWeights2(molecularWeights);
//                electro2D.setPiValues2(piValues);
//                electro2D.setFunctionValues2(functions);
//                // store the file name in Electro2D.Electro2D
//                electro2D.setLastFileLoaded(theFile);
//                electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
//            }
//        }
//        try {
//            if (in != null) {
//                in.close();
//            }
//        } catch (IOException e) {
//        }
//
//        Preprocessor.process(electro2D);
//        return sequences.size();
//    }
//
//    /**
//     * This method parses a .gbk file, extracting sequence information and
//     * appropriate descriptor for the sequence.
//     * @param data the data
//     * @param electro2D electro2D reference
//     * @param fileNum the file number
//     * @param theFile the file
//     *
//     * @return n on success, 0 on error
//     */
//    public static int gbkParse(File f, String data,
//                               Electro2D electro2D, int fileNum) {
//
//    	String theFile = f.getName();
//        //was there an error in file reading?
//        boolean anerror = false;
//
//        //structures to hold file data
//        //String organismID = "";
//        //String organismTitle = "";
//        Vector<String> fileData = new Vector<>();  //holds complete file
//        Vector<String> sequences = new Vector<>(); //holds sequence data
//        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
//        Vector<String> functions = new Vector<>(); //holds protein functions
//
//		double[] minmax = new double[] { -1, Double.MAX_VALUE, -1, Double.MAX_VALUE };
//
//
//        //file reading variable
//        BufferedReader in = null;
//
//        //structures to hold calculated MW and pI
//        Vector<String> molecularWeights = new Vector<>();
//        Vector<String> piValues = new Vector<>();
//
//        //temporary variables used in parsing
//        String temp = "";
//        String totalChain = "";
//        boolean foundTranslation = false;
//        boolean foundGene = false;
//        String function = "";
////        boolean hadFunctionLine = false;
////        boolean hadEnzymeClassNumber = false;
//
//        if (data == null || data.equals("")) {  //read from server
//            try {
////                File f = new File("data" + File.separator + theFile);
//                in = new BufferedReader
//                        (new InputStreamReader((/*electro2D.getCodeBase()*/
//						   /* "data/" + theFile*/
//                                f.toURI().toURL()).openStream()));
//                String temp1;
//
//                while ((temp1 = in.readLine()) != null) {
//
//                    fileData.addElement(temp1);
//                }
//            } catch (Exception e) {
//                MessageFrame error = new MessageFrame();
//                error.setMessage("Error reading from file.  Be sure you " +
//                        "typed the name correctly.");
//                error.setVisible(true);
//
//                anerror = true;
//                System.err.println("Exception was: " + e);
//            }
//        } else { //use data from textarea
//            StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
//            while (fileSplitter.hasMoreTokens()) {
//                fileData.addElement(fileSplitter.nextToken());
//            }
//        }
//
//        if (anerror == false) {
//
//            //assign organism ID based on file descriptor
//            //organismID = theFile.substring(0, theFile.indexOf("."));
//
//            for (int x = 0; x < fileData.size(); x++) {
//
//                temp = fileData.elementAt(x);
//
//                if (temp.length() >= 10 &&
//                        temp.substring(0, 10).equals("DEFINITION")) {
//                    //assign organism title
//                    //organismTitle = temp.substring(12);
//                }
//                //look for a title for this sequence
//                if (temp.length() >= 9 && temp.substring(5, 9).equals("gene")) {
//
//                    //check to see if there was a translation for previous gene;
//                    //if not, replace old gene with this gene
//                    if (foundTranslation == false && sequenceTitles.size() >= 1) {
//                        sequenceTitles.removeElementAt(sequenceTitles.size() - 1);
//                    }
//                    //add sequence title
//                    while (foundGene == false) {
//                        if (temp.length() >= 26 &&
//                                temp.substring(21, 26).equals("/gene")) {
//                            foundGene = true;
//                        } else {
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0; //error code
//                            }
//                        }
//                    }
//                    sequenceTitles.addElement(temp.substring
//                            (28, temp.lastIndexOf("\"")));
//                    foundGene = false;
//                    foundTranslation = false;
//                }
//                //here is where the sequence data should be
//                //as well as information about the protein function
//                if (temp.length() >= 8 && temp.substring(5, 8).equals("CDS")) {
//
//                    while (foundTranslation == false) {
//                        if (temp.length() >= 33 &&
//                                temp.substring(21, 33).equals("/translation")) {
//                            foundTranslation = true;
//                        }
//                        //if the line contains the enzyme commission number
//                        //the protein function is an Enzyme
//                        else if (temp.length() >= 33 &&
//                                temp.substring(21, 31).equals("/EC_number")) {
//                            if (function.equals("")) {
//                                temp = temp.substring(33, temp.lastIndexOf("\""));
//                                function = "Enzyme " + temp + "\u003B";
//                            } else {
//                                temp = temp.substring(33, temp.lastIndexOf("\""));
//                                function = function + " " + temp + "\u003B";
//                            }
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0; //error code
//                            }
//                        }
//                        //if the line is the function line then its contents are
//                        //included in the protein function
//                        else if (temp.length() >= 30 &&
//                                temp.substring(21, 30).equals("/function")) {
//                            //hadFunctionLine = true;
//                            if (temp.substring(32).lastIndexOf("\"") != -1) {
//                                temp = temp.substring(32);
//                                function = function + " " + temp.substring(0,
//                                        temp.lastIndexOf("\"")) + ".";
//                            } else {
//                                temp = temp.substring(32);
//                                function = function + " " + temp;
//                                x = x + 1; //jump to next line
//                                temp = fileData.elementAt(x);
//                                while (temp.lastIndexOf("\"") == -1) {
//                                    function = function + " " +
//                                            temp.substring(21);
//                                    x = x + 1;
//                                    if (x < fileData.size()) {
//                                        temp = fileData.elementAt(x);
//                                    } else {
//                                        return 0; //error code
//                                    }
//                                }
//                                function = function + temp.substring(21,
//                                        temp.lastIndexOf("\"")) + ".";
//                            }
//
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0; //error code
//                            }
//                        }
//                        //if the line is the section containing notes about the
//                        //protein, its contents are included in the function
//                        else if (temp.length() >= 27 &&
//                                temp.substring(21, 26).equals("/note")) {
//                            if ((function.indexOf("unknown.") != -1) ||
//                                    function.equals("")) {
//                                //hadFunctionLine = false;
//                                function = "";
//                            }
//                            if (temp.substring(28).lastIndexOf("\"") != -1) {
//                                temp = temp.substring(28);
//                                function = function + " " + temp.substring(0,
//                                        temp.lastIndexOf("\"")) + ".";
//                            } else {
//                                temp = temp.substring(28);
//                                function = function + " " + temp;
//                                x = x + 1;
//                                temp = fileData.elementAt(x);
//                                while (temp.lastIndexOf("\"") == -1) {
//                                    function = function + " " +
//                                            temp.substring(21);
//                                    x = x + 1;
//                                    if (x < fileData.size()) {
//                                        temp = fileData.elementAt(x);
//                                    } else {
//                                        return 0; //error code
//                                    }
//                                }
//                                function = function + " " + temp.substring(21,
//                                        temp.lastIndexOf("\"")) + ".";
//                            }
//
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0; //error code
//                            }
//                        }
//                        //if the line is the product information of the protein,
//                        //its contents are included in the function
//                        else if (temp.length() >= 30 &&
//                                temp.substring(21, 29).equals("/product")) {
//                            if (temp.substring(31).lastIndexOf("\"") != -1) {
//                                temp = temp.substring(31);
//                                function = function + " " + temp.substring(0,
//                                        temp.lastIndexOf("\"")) + ".";
//                            } else {
//                                temp = temp.substring(31);
//                                function = function + " " + temp;
//                                x = x + 1;
//                                temp = fileData.elementAt(x);
//                                while (temp.lastIndexOf("\"") == -1) {
//                                    function = function + " " +
//                                            temp.substring(21);
//                                    x = x + 1;
//                                    if (x < fileData.size()) {
//                                        temp = fileData.elementAt(x);
//                                    } else {
//                                        return 0;
//                                    }
//                                }
//                                function = function + " " + temp.substring(21,
//                                        temp.lastIndexOf("\"")) + ".";
//                            }
//
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0; //error code
//                            }
//                        }
//
//                        //otherwise move to next line
//                        else {
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                System.err.println("Error! Protein lacking " +
//                                        "sequence.");
//                                return 0; //error code
//                            }
//                        }
//                    }
//                    if (temp.length() >= 35 && temp.substring(35).lastIndexOf("\"") != -1) {
//                        temp = temp.substring(35);
//                        //add first line
//                        totalChain += temp.substring(0, temp.lastIndexOf("\""));
//                    } else /*if( temp.length() >= 35 )*/ {
//
//                        //add first line
//                        totalChain += temp.substring(35);
//                        x++; //jump to next line
//                        temp = fileData.elementAt(x);
//
//                        //add remaining lines
//                        while (temp.lastIndexOf("\"") == -1) {
//
//                            totalChain += temp.substring(21);
//                            x++;
//                            if (x < fileData.size()) {
//                                temp = fileData.elementAt(x);
//                            } else {
//                                return 0;
//                            }
//                        }
//
//                        //add last line
//                        totalChain += temp.substring(21, temp.lastIndexOf("\""));
//                    }
//
//                    sequences.addElement(totalChain); //add the sequence
//                    totalChain = ""; //reset for next chain
//                    functions.addElement(function); //add the function
//                    function = ""; //reset for next chain
////                    hadEnzymeClassNumber = false;
////                    hadFunctionLine = false;
//                }
//            }
//
//			finalizeRead(sequences, sequences, sequenceTitles, molecularWeights, piValues, null, functions,
//					theFile, minmax, null, electro2D, fileNum);
//        }
//        try {
//            if (in != null) {
//                in.close();
//            }
//        } catch (IOException e) {
//        }
//
//        // store the file name in Electro2D.Electro2D
//        electro2D.setLastFileLoaded(theFile);
//
//        Preprocessor.process(electro2D);
//        return sequences.size();
//    }

//	static {
//		File f = new File("data/jpred_msa.fasta");
//		System.out.println(f.getAbsolutePath());
////		String s= FastaParser.parse(f);
//		String s = getSequenceAsSingleLine(f);
//		System.out.println(s);
//	}
	/**
	 * BH remove sequence alignment markings
	 * 
	 * @param p
	 * @param s
	 */
	private static void addSequence(Preprocessor p, String s) {
					p.sequences.add(s.replaceAll("[-]", ""));
	}
} 
