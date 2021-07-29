package main.java.Utilities;
/*
 * Copyright (C) 2013 Rochester Institute of Technology
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * See the GNU General Public License for more details.
 */

import java.awt.Color;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Hashtable;
import java.util.Map;
import java.util.Random;
import java.util.Vector;

import main.java.Electro1D.Protein;
import main.java.Electro2D.Electro2D;

/**
 * This class generates the preprocessed proteome files created after a genBank,
 * fasta, or protein database file has been run. In doing this the time to load
 * a proteome (if already loaded once) will be cut down. (Hopefully...)
 * 
 * BH Note: In addition, the class serves as a temporary container for several
 * data vectors that are used in Electro1D and Electro2D and holds the
 * calculations for molecular weight and pI.
 * 
 * 
 *
 * @author Jill Zapoticznyj
 */

public class Preprocessor {

	public static void init() {
		// just initialize this class to speed later class loading
	}
	
	private static Random rand = new Random();

	private final static double[] partialCharges = new double[256];

	private final static double[] mws = new double[256];

	static {
		mws['A'] = 71.0938;
		mws['C'] = 103.1538;
		mws['D'] = 115.1036;
		mws['E'] = 129.1304;
		mws['F'] = 147.1914;
		mws['G'] = 57.067;
		mws['H'] = 137.156;
		mws['I'] = 113.1742;
		mws['K'] = 128.1888;
		mws['L'] = 113.1742;
		mws['M'] = 131.2074;
		mws['N'] = 114.1188;
		mws['P'] = 97.1316;
		mws['Q'] = 128.1456;
		mws['R'] = 156.2022;
		mws['S'] = 87.0932;
		mws['T'] = 101.12;
		mws['V'] = 99.1474;
		mws['W'] = 186.228;
		mws['Y'] = 163.1908;
	}
	private final static Color[] colors = { Color.black, Color.blue, Color.cyan, Color.green, Color.magenta,
			Color.orange, Color.pink, Color.red };

	private static Color randomColor() {
		return colors[rand.nextInt(colors.length)];
	}

	private static final String EXTENTION = ".e2d";
	private static final int HEADER_WIDTH = 12;
	private static final int LINE_LENGTH = 50;

	private final String FILE_HEADER        = "FILE:       ";
//    private final String NUMENZYME_HEADER = "NUMENZYMES: ";
	private final String PROTTITLE_HEADER   = "NAME:       ";
	private final String FUNCTION_HEADER    = "FUNCTION:   ";
	private final String SEQUENCE_HEADER    = "SEQUENCE:   ";
	private final String MOLWT_HEADER       = "MOLWEIGHT:  ";
	private final String PIVAL_HEADER       = "PIVAL:      ";
	private final String SEQ_SEPARATOR     = "-----";

	Vector<String> sequences;
	Vector<String> sequenceTitles;
	Vector<String> piValues;
	Vector<String> molecularWeights;
	Vector<String> functions;
	Vector<String> concentrations;

	private String inputName;
	private double[] minmax;
	private boolean is1D;

	private String line;

	private boolean isE2D;

	private String e2dOutFileName;

	Preprocessor(File inputFile, int fileNum) {
		this(null, inputFile, fileNum <= 0);
	}

	/**
	 * 
	 * @param e         an Electro2D object or null if Electro1D
	 * @param inputFile
	 * @param fileNum   0 (Electro1D) or 1 or 2
	 */
	Preprocessor(Electro2D e, File inputFile, boolean is1D) {
		this.is1D = is1D;
		sequences = (e == null ? new Vector<>() : e.getSequences());
		sequenceTitles = (e == null ? new Vector<>() : e.getSequenceTitles());
		molecularWeights = (e == null ? new Vector<>() : e.getMolecularWeights());
		piValues = (is1D ? null : e == null ? new Vector<>() : e.getPiValues());
		functions = (e == null ? new Vector<>() : e.getFunctions());
		inputName = (e == null ? inputFile.getName() : e.getLastFileLoaded());
		concentrations = (e == null ? new Vector<>() : null);
	}

	public void writeToE2DFile(String outFileName) {
		if (outFileName == null) {
			outFileName = "data" + File.separator + inputName.replace('.', '_') + EXTENTION;
		}
		File theFile = new File(outFileName);
		System.out.println("Preprocessor.writeToFile creating " + theFile);
		if (theFile.exists())
			return;
		try (PrintWriter out = new PrintWriter(new BufferedWriter(new FileWriter(theFile)), true)) {
			out.println(FILE_HEADER + inputName);
			out.println(SEQ_SEPARATOR);
			for (int i = 0, n = sequences.size(); i < n; i++) {
				out.println(PROTTITLE_HEADER + sequenceTitles.get(i));
				writeRecord(out, FUNCTION_HEADER, functions.get(i));
				String seq = sequences.get(i);
				writeRecord(out, SEQUENCE_HEADER, seq);
				out.println(MOLWT_HEADER + molecularWeights.get(i));
				out.println(PIVAL_HEADER + (piValues == null ? getPI(seq) : piValues.get(i)));
				out.println(SEQ_SEPARATOR);
			}
		} catch (IOException e) {
			System.err.println("Preprocessor.wrteToE2DFile Error writing to file " + e.getMessage());
			return;
		}
	}

	/**
	 * write the header/data record
	 * @param out
	 * @param header
	 * @param data
	 */
	private static void writeRecord(PrintWriter out, String header, String data) {
		int length = data.length();
		int pt = 0;
		while (length > 0) {
			int n = Math.min(length, LINE_LENGTH);
			out.println(header + data.substring(pt, pt = pt + n));
			length -= n;
		}
	}

	public int readFromFile(BufferedReader reader, Vector<String> sequencesOut, Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
		String err = null;
		isE2D = true;
		StringBuffer buf = new StringBuffer();
		try {
			while (true) {
				if ((line = reader.readLine()).indexOf(FILE_HEADER) != 0) {
					err = "Preprocessor.readFromeFile Invalid file format.  Missing FILE: line";
					break;
				}
				if (electro2D != null)
					electro2D.setLastFileLoaded(line.substring(HEADER_WIDTH));
				while ((line = reader.readLine()) != null) {
					if (line.startsWith("-"))
						continue;
					sequenceTitles.add(readE2D(reader, PROTTITLE_HEADER, buf));
					functions.add(readE2D(reader, FUNCTION_HEADER, buf));
					sequences.add(readE2D(reader, SEQUENCE_HEADER, buf));
					molecularWeights.add(readE2D(reader, MOLWT_HEADER, buf));
					if (is1D)
						reader.readLine(); // skip piValue
					else
						piValues.add(readE2D(reader, PIVAL_HEADER, buf));
				}
				finalizeRead(sequencesOut, proteins, electro2D, fileNum);
				// electro2D.setLastFileLoaded(
				reader.close();
				break;
			}
		} catch (Exception e) {
			e.printStackTrace();
			err = "Error reading from file.  Be sure you entered the file name correctly. " + e.getMessage();
		}
		if (err != null)
			System.out.println(err);
		return sequences.size();
	}

	/**
	 * Read an E2D record, consisting of some number of lines starting with the same
	 * header, as in PDB files.
	 * 
	 * @param reader
	 * @param key    "NAME:" for example
	 * @param buf
	 * @return
	 * @throws IOException
	 */
	private String readE2D(BufferedReader reader, String key, StringBuffer buf) throws IOException {
		buf.setLength(0);
		while (line.startsWith(key)) {
			buf.append(line.substring(HEADER_WIDTH));
			line = reader.readLine();
		}
		return buf.toString();
	}

	private void getPIandMW() {
		minmax = (is1D ? null : new double[] { -1, Double.MAX_VALUE, -1, Double.MAX_VALUE });
		for (int i = 0; i < sequences.size(); i++) {
			String mw, pI = "";
			if (isE2D) {
				mw = molecularWeights.get(i);
				if (!is1D)
					pI = piValues.get(i);
			} else {
				String temp = sequences.get(i);
				mw = getMW(temp);
				molecularWeights.add(mw);
				if (!is1D) {
					pI = getPI(temp);
					piValues.add(pI);
				}
			}
			if (minmax != null) {
				double d = Double.parseDouble(mw);
				if (d <= minmax[0]) {
					minmax[0] = d;
				}
				if (d >= minmax[1]) {
					minmax[1] = d;
				}
				d = Double.parseDouble(pI);
				if (d <= minmax[2]) {
					minmax[2] = d;
				}
				if (d >= minmax[3]) {
					minmax[3] = d;
				}
			}
		}
	}
	
	int finalizeRead(Vector<String> sequencesOut, Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
		getPIandMW();
		int nSeq = sequences.size();
		switch (fileNum) {
		case GenomeFileParser.SEQUENCES_ONLY:
			// Mass Spec
			sequencesOut.addAll(sequences);
			return nSeq;
		case GenomeFileParser.PROTEINS_ONLY:
			// Electro1D
			for (int i = 0; i < nSeq; i++) {
				proteins.add(new Protein(sequenceTitles.get(i), "", "",
						(int) Double.parseDouble(molecularWeights.get(i)), randomColor()));
				if (concentrations.size() > 0)
					proteins.get(i).setConcentration(Integer.parseInt(concentrations.get(i)));
			}
			return nSeq;
		case GenomeFileParser.ELECTRO2D_FILE_1:
			electro2D.setSequences(sequences);
			electro2D.setSequenceTitles(sequenceTitles);
			electro2D.setMolecularWeights(molecularWeights);
			electro2D.setPiValues(piValues);
			electro2D.setFunctionValues(functions);
			break;
		case GenomeFileParser.ELECTRO2D_FILE_2:
			electro2D.setSequences2(sequences);
			electro2D.setSequenceTitles2(sequenceTitles);
			electro2D.setMolecularWeights2(molecularWeights);
			electro2D.setPiValues2(piValues);
			electro2D.setFunctionValues2(functions);
			break;
		}
		electro2D.setLastFileLoaded(inputName);
		electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
		if (!isE2D && !JSUtil.isJS)
			writeToE2DFile(e2dOutFileName);
		return nSeq;
	}

	private final static Map<String, String> htPIcache = new Hashtable<>();
	private final static Map<String, String> htMWcache = new Hashtable<>();

	/**
	 * This method calculates the molecular weight from inputed sequence
	 *
	 * @param seq protein sequence
	 *
	 * @return returns the molecular weight
	 */
	public static String getMW(String seq) {
		String wt = htMWcache.get(seq);
		if (wt != null)
			return wt;
		int len = seq.length();

		// Molecular weight of protein, starting with 1 unit of H2O
		
		double mW = 18;

//     Determine the molecular weight for each AA until reach
//     end of sequence. Add the weight for each AA to the value
//	   of total weight. Since a water molecule (MW 18) is lost with
//	   each bond, the weight given for each AA is its molecular
//	   weight minus that of water. The MW of one water molecule is
//	   then added to the total molecular weight of the protein sequence.
//	   If the AA character does not match one of the 20 accepted
//	   abbreviations, then a weight of 0 is given for that AA.

		for (int f = 0; f < len; f++) {
			mW += mws[seq.charAt(f)];
		}

		String mWstring = roundOff(mW, 2);
		htMWcache.put(seq, mWstring);
		return mWstring;
	}
	
	private static void calculatePartialCharges(double pH) {

		// pK values were obtained from Bjellqvist, B., Basse, B., Olsen, E.,
		// Celis, J., Reference points for comparisons of two-dimensional
		// maps of proteins from different human cell types defined in a
		// pH scale where isoelectric points correlate with polypeptide
		// compositions, Electro1DMain 1994, 15, 529-539.
		

		partialCharges['D'] = getPartialCharge(false, 4.05, pH); // ASP
		partialCharges['C'] = getPartialCharge(false, 9.00, pH); // CYS
		partialCharges['E'] = getPartialCharge(false, 4.75, pH); // GLU
		partialCharges['Y'] = getPartialCharge(false, 10.0, pH); // TYR
		
		partialCharges['R'] = getPartialCharge(true, 12.0, pH); // ARG
		partialCharges['H'] = getPartialCharge(true, 5.98, pH); // His
		partialCharges['K'] = getPartialCharge(true, 10.0, pH); // LYS

		partialCharges['\1'] = getPartialCharge(true, 8.2, pH); // N terminus, NH3+
		partialCharges['\2'] = getPartialCharge(false, 3.2, pH); // C terminus, CO2-
	}

	/**
	 * @param isBasic -- that is, "is a basic amino acid," meaning that it is protonated, like lysine.
	 * @param pK
	 * @param pH
	 * @return
	 */
	private static double getPartialCharge(boolean isBasic, double pK, double pH) { 
		return 1 / (isBasic ? (1 + Math.pow(10, pH - pK)) : -(1 + Math.pow(10, pK - pH))); 
	}

	/**
	 * This method calculates the pI from inputed sequence
	 *
	 * @param seq protein sequence
	 * @return returns the pI value
	 */
	public static String getPI(String seq) {

		String pi = htPIcache.get(seq);
		if (pi != null)
			return pi;

		double lowpH = 0, pH = 7, highpH = 14;

		int plen = seq.length();

		double charge = 0;

		// Calculate total charge at varying pH values until the
		// charge is within 0.005 of 0
		while (true) {
			// Calculate the charge for each AA until reach end of sequence
			// Add the charge for each AA to the value of total charge
			calculatePartialCharges(pH);
			charge = 0;
			for (int a = plen; --a >= 0;) {
				// Determine appropriate pK value for current AA
				// If AA not acid or base, set to neutral
				// and give default pK of 0
				charge += partialCharges[seq.charAt(a)];
			}
			charge += partialCharges['\1'] + partialCharges['\2'];
			// Calculate charge on N-terminus and add to total charge
			//was charge += 1 / (1 + Math.pow(10, pH - /* 9.53 */8.2));
			// Calculate charge on C-terminus and add to total charge
			//was charge += -1 / (1 + Math.pow(10, 3.2 - pH));

			if (charge > 0.005) {
				lowpH = pH;
			} else if (charge < -0.005) {
				highpH = pH;
			} else {
				break;
			}
			pH = (lowpH + highpH) / 2;
		}
		String s = roundOff(pH, 2);
		htPIcache.put(seq, s);
		return s; // Method returns the pH at which charge is 0 (pI)
	}

	/**
	 * Round off a value to n decimal digits maximum
	 * 
	 * @param mW
	 * @param n
	 * @return
	 */
	private static String roundOff(double mW, int n) {
		String s = "" + mW;
		int pt = s.indexOf('.') + n + 1;
		return (s.length() > pt ? s.substring(0, pt) : s);
	}

}