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
import java.util.Random;
import java.util.Vector;

import main.java.Electro1D.Protein;
import main.java.Electro2D.Electro2D;


/**
 * This class generates the preprocessed proteome files created after a
 * genBank, fasta, or protein database file has been run.  In doing this
 * the time to load a proteome (if already loaded once) will be cut down.
 * (Hopefully...)
 *
 * @author Jill Zapoticznyj
 */

public class Preprocessor {
	
	private static Random rand = new Random();
	
	private final static Color[] colors = { 
			Color.black, Color.blue, Color.cyan, 
			Color.green, Color.magenta, Color.orange, 
			Color.pink, Color.red 
	};
	
	private static Color randomColor() {
		return colors[rand.nextInt(colors.length)];
	}

    private static final String EXTENTION = ".e2d";
    private static final int HEADER_LENGTH = 12;
    private final int lineLength = 50;

    private final String FILE_HEADER = "FILE:       ";
//    private final String NUMENZYME_HEADER = "NUMENZYMES: ";
    private final String PROTTITLE_HEADER = "NAME:       ";
    private final String FUNCTION_HEADER = "FUNCTION:   ";
    private final String SEQUENCE_HEADER = "SEQUENCE:   ";
    private final String MOLWT_HEADER = "MOLWEIGHT:  ";
    private final String PIVAL_HEADER = "PIVAL:      ";
    private final String LINE_SEPARATOR = "-----";

    Vector<String> sequences;
    Vector<String> sequenceTitles;
    Vector<String> piValues;
    Vector<String> molecularWeights;
    Vector<String> functions;
    Vector<String> concentrations;
    
    private String inputName;
	private double[] minmax;
	private boolean is1D;
	
	public static void process(Electro2D electro2D) {
		/** @j2sNative return; */
		// SwingJS could write to a temp file if desired, just not a regular file
        new Preprocessor(electro2D, null, false).writeToFile();
	}

	Preprocessor(File inputFile, boolean is1D) {
		this(null, inputFile, is1D);
	}

	/**
	 * 
	 * @param e an Electro2D object or null if Electro1D
	 * @param inputFile
	 * @param fileNum 0 (Electro1D) or 1 or 2
	 */
	Preprocessor(Electro2D e, File inputFile, boolean is1D) {
        sequences = (e == null ? new Vector<>() : e.getSequences());
        sequenceTitles = (e == null ? new Vector<>() : e.getSequenceTitles());
        molecularWeights = (e == null ? new Vector<>() : e.getMolecularWeights());
        piValues = (is1D ? null : e == null ? new Vector<>() : e.getPiValues());
        functions = (e == null ? new Vector<>() : e.getFunctions());
        inputName = (e == null ? inputFile.getName() : e.getLastFileLoaded());
		concentrations = (e == null ? new Vector<>() : null);
    }

	public void writeToFile() {
		int length = 0;
		String fcn = "";
		String seq = "";
		String tmp = inputName.substring(0, inputName.indexOf(".")) + "_" + inputName.substring(inputName.indexOf(".") + 1);
		File theFile = new File("data" + File.separator + tmp + EXTENTION);
		System.out.println("Preprocessor creating " + theFile);
		if (theFile.exists())
			return;
		PrintWriter out = null;
		try {
			out = new PrintWriter(new BufferedWriter(new FileWriter(theFile)), true);
		} catch (IOException e) {
			System.err.println("Error writing to file");
			return;
		}
		out.println(FILE_HEADER + inputName);
		out.println(LINE_SEPARATOR);

		for (int i = 0; i < sequenceTitles.size(); i++) {
			out.println(PROTTITLE_HEADER + sequenceTitles.elementAt(i));
			fcn = functions.elementAt(i);
			length = fcn.length();
			while (length >= 0) {
				if (length <= lineLength) {
					out.println(FUNCTION_HEADER + fcn);
					length = -1;
				} else {
					out.println(FUNCTION_HEADER + fcn.substring(0, lineLength));
					fcn = fcn.substring(lineLength);
					length = length - lineLength;
				}
			}

			seq = sequences.elementAt(i);
			length = seq.length();

			while (length >= 0) {
				if (length <= lineLength) {
					out.println(SEQUENCE_HEADER + seq);
					length = -1;
				} else {
					out.println(SEQUENCE_HEADER + seq.substring(0, lineLength));
					seq = seq.substring(lineLength);
					length = length - lineLength;
				}
			}

			out.println(MOLWT_HEADER + molecularWeights.elementAt(i));
			out.println(PIVAL_HEADER + piValues.elementAt(i));
			out.println(LINE_SEPARATOR);
		}
		out.close();
	}

    public static int getHeaderLength() {
        return HEADER_LENGTH;
    }

    public static int readFromFile(BufferedReader reader, Electro2D electro2D,
                                    int fileNum) {
        int fileNameLoc = 0;
        int endofHeader = 1;
        Vector<String> sequences = new Vector<>();
        Vector<String> sequenceTitles = new Vector<>();
        Vector<String> molwts = new Vector<>();
        Vector<String> functions = new Vector<>();
        Vector<String> piVals = new Vector<>();
        Vector<String> fileData = new Vector<>();
        String seq = "";
        String molwt = "";
        String pI = "";
        String title = "";
        String function = "";
        String line = "";
        String line1 = "";
        int hlength = getHeaderLength();
        double doubleVal;
        double maxMW = -1;
        double minMW = -1;
        double maxPi = -1;
        double minPi = -1;

        try {
            while ((line1 = reader.readLine()) != null) {
                fileData.add(line1);
            }
        } catch (Exception e) {
            System.err.println("Error reading from file.  Be sure you " +
                    "entered the file name correctly.");
        }

        if ((fileData.elementAt(fileNameLoc)).indexOf("FILE:")
                == -1) {
            System.err.println("Invalid file format.  Missing file name " +
                    "line.");
        } else {

            electro2D.setLastFileLoaded((fileData.elementAt(fileNameLoc)).substring(hlength));
            for (int i = endofHeader + 1; i < fileData.size() - 1; i++) {
                line = fileData.elementAt(i);
                while (line.indexOf("NAME:") != -1) {
                    title = title + line.substring(hlength);
                    if (i + 1 != fileData.size()) {
                        i = i + 1;
                        line = fileData.elementAt(i);
                    } else {
                        System.err.println("Error reading from file.");
                        return 0;
                    }
                }
                while (line.indexOf("FUNCTION:") != -1) {
                    function = function + line.substring(hlength);
                    if (i + 1 < fileData.size()) {
                        i = i + 1;
                        line = fileData.elementAt(i);
                    } else {
                        System.err.println("Error reading from file.");
                        return 0;
                    }
                }
                while (line.indexOf("SEQUENCE:") != -1) {
                    seq = seq + line.substring(hlength);
                    if (i + 1 < fileData.size()) {
                        i = i + 1;
                        line = fileData.elementAt(i);
                    } else {
                        System.err.println("Error reading from file.");
                        return 0;
                    }
                }
                if (line.indexOf("MOLWEIGHT:") != -1) {
                    molwt = line.substring(hlength);
                    doubleVal = Double.parseDouble(molwt);
                    if (minMW == -1 || doubleVal <= minMW) {
                        minMW = doubleVal;
                    }
                    if (maxMW == -1 || doubleVal >= maxMW) {
                        maxMW = doubleVal;
                    }
                    if (i + 1 != fileData.size()) {
                        i = i + 1;
                        line = fileData.elementAt(i);
                    } else {
                        System.err.println("Error reading from file.");
                        return 0;
                    }
                }
                if (line.indexOf("PIVAL:") != -1) {
                    pI = line.substring(hlength);
                    doubleVal = Double.parseDouble(pI);
                    if (minPi == -1 || doubleVal <= minPi) {
                        minPi = doubleVal;
                    }
                    if (maxPi == -1 || doubleVal >= maxPi) {
                        maxPi = doubleVal;
                    }
                    i = i + 1;
                }

                sequenceTitles.add(title);
                sequences.add(seq);
                molwts.add(molwt);
                piVals.add(pI);
                functions.add(function);
                title = seq = molwt = pI = function = "";
            }
            
            
            if (fileNum == 1) {
                electro2D.setSequences(sequences);
                electro2D.setFunctionValues(functions);
                electro2D.setSequenceTitles(sequenceTitles);
                electro2D.setMolecularWeights(molwts);
                electro2D.setPiValues(piVals);
                electro2D.setMaxAndMinVals(maxMW, minMW, maxPi, minPi);
            } else if (fileNum == 2) {
                electro2D.setSequences2(sequences);
                electro2D.setFunctionValues2(functions);
                electro2D.setSequenceTitles2(sequenceTitles);
                electro2D.setMolecularWeights2(molwts);
                electro2D.setPiValues2(piVals);
                electro2D.setMaxAndMinVals(maxMW, minMW, maxPi, minPi);
            }
            // electro2D.setLastFileLoaded(
            try {
                reader.close();
            } catch (Exception e) {
            }
        }
        return sequences.size();
    }

	private void getPIandMW() {
		minmax = (is1D ? null : new double[] { -1, Double.MAX_VALUE, -1, Double.MAX_VALUE });
		for (int x = 0; x < sequences.size(); x++) {
			String temp = sequences.elementAt(x);
			String mw = GenomeFileParser.getMW(temp);
			double d = Double.parseDouble(mw);
			molecularWeights.addElement(mw);
			if (piValues != null) {
				if (d <= minmax[0]) {
					minmax[0] = d;
				}
				if (d >= minmax[1]) {
					minmax[1] = d;
				}
				String pI = GenomeFileParser.getpI(temp);
				d = Double.parseDouble(pI);
				if (d <= minmax[2]) {
					minmax[2] = d;
				}
				if (d >= minmax[3]) {
					minmax[3] = d;
				}
				piValues.addElement(pI);
			}
		}
	}

	int finalizeRead(Vector<Protein> proteins, Electro2D electro2D, int fileNum) {
		getPIandMW();
		int nSeq = sequences.size();
		switch (fileNum) {
		case 0:
			// Electro1D
			for (int i = 0; i < nSeq; i++) {
				proteins.add(new Protein(sequenceTitles.elementAt(i), "", "",
						(int) Double.parseDouble(molecularWeights.get(i)), randomColor()));
				if (concentrations.size() > 0)
					proteins.get(i).setConcentration(Integer.parseInt(concentrations.elementAt(i)));
			}
			return nSeq;
		case 1:
            electro2D.setSequences(sequences);
            electro2D.setSequenceTitles(sequenceTitles);
            electro2D.setMolecularWeights(molecularWeights);
            electro2D.setPiValues(piValues);
            electro2D.setFunctionValues(functions);
            break;
		case 2:
            electro2D.setSequences2(sequences);
            electro2D.setSequenceTitles2(sequenceTitles);
            electro2D.setMolecularWeights2(molecularWeights);
            electro2D.setPiValues2(piValues);
            electro2D.setFunctionValues2(functions);
			break;
		}
        electro2D.setLastFileLoaded(inputName);
        electro2D.setMaxAndMinVals(minmax[1], minmax[0], minmax[3], minmax[2]);
        Preprocessor.process(electro2D);
        return nSeq;
	}


}