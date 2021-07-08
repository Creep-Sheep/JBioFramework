package main.java.Electro1D;

import java.awt.Color;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Hashtable;
import java.util.Random;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;

import main.java.Utilities.GenomeFileParser;
import main.java.Utilities.MessageFrame;


public class FileInput {
	
	GenomeFileParser fileparser = new GenomeFileParser();
	
	private final static Color[] colors = {
			Color.black, Color.blue, Color.cyan, Color.green, Color.magenta, Color.orange, Color.pink, Color.red
	};
	
	private Random rand = new Random();
	
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
	final static String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	final static Hashtable<String, String> aminoConversions = new Hashtable<>(); //holds amino conversions
	static {
    	for (int i = 1; i < aas.length; i++)
    		aminoConversions.put(aas[i++], aas[i++]);
    }
	
	@SuppressWarnings("unused")
	public void loadFile(File f, String wellNum, Simulation simPanel) {
		JOptionPane.showMessageDialog(null, "Proteins Loading");
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
				break;
			/*case "pdb":
				proteins = pdbParse(f, data);
				break;
			case "gbk":
				proteins = gbkParse(f, data);
				break;*/
			default:
				error = new MessageFrame();
				error.setMessage("File extension is not valid. You inputed a " + extension + " file, please input a fasta file");
				break;
			}
			
		}
		if (error == null) {
			n = proteins.size();
			// here a dialog pops up
			JOptionPane.showMessageDialog(null, n + " Protein" + (n == 1 ? "" : "s") + " loaded.");					
			// display the protein titles from the file
			
			//TODO 
			//Process the protein list and put in correct well using wellNum
			simPanel.addSampleFromFile(proteins, wellNum);
		}
		
	}
	
	/**
     * This method parses a .pdb file, extracting sequence information and
     * appropriate descriptor for the sequence.
     *
     * @param f   file to retrieve sequence data from
     * @param data      user-inputted file data
     */
    public Vector<Protein> pdbParse(File f, String data) {
    	BufferedReader in = null;
		boolean anerror = false;
		String temp = "";
		String totalChain = "";
		String theFile = f.getName();
		//double doubleVal;
		Vector<String> fileData = new Vector<>();  //holds complete file
        Vector<String> chainData = new Vector<>(); //holds chain designations
        Vector<String> sequences = new Vector<>(); //holds sequence data
        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
        Vector<String> functions = new Vector<>(); //holds the protein functions
        Vector<String> compoundInfo = new Vector<>(); //holds COMPND tag data
        Vector<String> sequenceInfo = new Vector<>(); //holds SEQRES tag data
        Vector<String> keywordInfo = new Vector<>(); //holds KEYWDS info
        Vector<String> moleculeTitles = new Vector<>(); //holds mol. titles
        Vector<String> molecularWeights = new Vector<>(); //hold molecular weights
        Vector<Protein> proteins = new Vector<>();//holds the list of protiens
        String tempLabel = "";
        String proteinID = "";
        String chainValue = "";
        String proteinFunction = ""; //holds the protein function
        String headerLine = ""; //holds the information from the HEADER line;
        boolean hasMoleculeTag = true;
        boolean foundChain = false;
        //boolean noChainData = false;
        boolean hasECnumber = false;
        int foundIndex = 0;
        
    	
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
        else {
        	StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
            while (fileSplitter.hasMoreTokens()) {
                fileData.addElement(fileSplitter.nextToken());
            }
        }
        if (anerror == false) {
        	//protienID = file descriptor
        	proteinID = theFile.substring(0, theFile.indexOf("."));
        	
        	//separate compound info and sequence info
            for (int x = 0; x < fileData.size(); x++) {
                temp = fileData.elementAt(x);
                tempLabel = temp.substring(0, 6);

                if (tempLabel.equals("COMPND")) {
                    compoundInfo.addElement(temp);
                } else if (tempLabel.equals("SEQRES")) {
                    sequenceInfo.addElement(temp);
                }
                //if the label is KEYWDS store this in the keyword Info vector
                else if (tempLabel.equals("KEYWDS")) {
                    keywordInfo.addElement(temp);
                }
                //if the label is HEADER, store as the headerLine
                else if (tempLabel.equals("HEADER")) {
                    headerLine = temp;
                }
            }

            //determine whether or not the protein is an enzyme
            for (int i = 0; i < compoundInfo.size(); i++) {
                //if the COMPND section of the file listed an EC number,
                //the protein is an enzyme.  Store the information accordingly
                if ((compoundInfo.elementAt(i)).indexOf("EC\u003A") != -1) {
                    hasECnumber = true;
                    temp = compoundInfo.elementAt(i);
                    temp = temp.substring(temp.indexOf("EC:") + 4, temp.indexOf(
                            "\u003B") + 1);
                    proteinFunction = proteinFunction + temp;
                }
            }
            if (hasECnumber) {
                proteinFunction = "Enzyme " + proteinFunction;
                int index = proteinFunction.indexOf(",");
                if (index != -1) {
                    proteinFunction = proteinFunction.replace(',', '\u003B');
                }
            }

            //determine the number of molecules
            for (int x = 0; x < compoundInfo.size(); x++) {
                temp = compoundInfo.elementAt(x);
                if (temp.indexOf("MOLECULE:") != -1) {
                    temp = temp.substring(temp.indexOf("MOLECULE:") + 10);
                    temp = temp.trim();
                    moleculeTitles.addElement(temp);
                }
            }

            //if moleculeTitles is empty, pull main title from concatenating all
            //COMPND tags
            if (moleculeTitles.size() == 0) {

                totalChain = "";
                hasMoleculeTag = false;
                for (int x = 0; x < compoundInfo.size(); x++) {
                    temp = compoundInfo.elementAt(x);
                    totalChain += (compoundInfo.elementAt(x)).substring
                            (temp.indexOf("COMPND") + 10, temp.indexOf(proteinID));
                }

                //remove excess whitespace
                totalChain = totalChain.trim();
                for (int x = 0; x < totalChain.length(); x++) {
                    tempLabel = totalChain.substring(x, x + 1);
                    if (tempLabel.equals(" ")) {
                        tempLabel = totalChain.substring(x + 1, x + 2);
                        if (tempLabel.equals(" ")) {
                            //remove this extra space
                            totalChain = totalChain.substring(0, x + 1) +
                                    totalChain.substring(x + 2);

                            x -= 1;
                        }
                    }
                }

                //add temp to moleculeTitles
                moleculeTitles.addElement(totalChain);

            } else { //pull chain data

                int counter = 0; //sequenceTitle counter

                for (int x = 0; x < compoundInfo.size(); x++) {
                    temp = compoundInfo.elementAt(x);
                    foundIndex = temp.indexOf("CHAIN:");
                    if (foundIndex != -1) {
                        //isolate first letter or number
                        tempLabel = temp.substring(foundIndex + 7, foundIndex + 8);
                        chainData.addElement(tempLabel);

                        sequenceTitles.addElement(moleculeTitles.
                                elementAt(counter));

                        while (temp.charAt(foundIndex + 8) == ',') {
                            temp = temp.substring(0, foundIndex + 7) +
                                    temp.substring(foundIndex + 10);

                            tempLabel = temp.substring(foundIndex + 7,
                                    foundIndex + 8);
                            chainData.addElement(tempLabel);
                            sequenceTitles.addElement(moleculeTitles.
                                    elementAt(counter));
                        }
                        counter++;
                    }
                }
            }

            //extract sequences

            //handle special case where there is no chain data
            temp = sequenceInfo.elementAt(0);
            tempLabel = temp.substring(11, 12);
            if (tempLabel.equals(" ")) {
//                noChainData = true;
                temp = "";
                //must be only one chain
                for (int x = 0; x < sequenceInfo.size(); x++) {
                    //may include whitespace
                    temp += (sequenceInfo.elementAt(x)).substring(19, 70);
                    temp += " ";
                }

                //add sequence
                if (!(temp = temp.trim()).equals("")) {
                    sequences.addElement(temp);
                    sequenceTitles.addElement(moleculeTitles.elementAt(0));
                }

            } else if (hasMoleculeTag == false) {

	    /* handle special case where chains are lettered, but there
	       was no chain tag to tell which labels to look for */

                //cycle through the alphabet
                for (int whichChain = 0; whichChain < 26; whichChain++) {
                    //find the chain we're looking for
                    chainValue = alphabet.substring(whichChain, whichChain + 1);
                    totalChain = "";
                    foundChain = false;
                    for (int x = 0; x < sequenceInfo.size(); x++) {
                        temp = sequenceInfo.elementAt(x);
                        tempLabel = temp.substring(11, 12);
                        if (tempLabel.equals(chainValue)) {
                            foundChain = true;
                            totalChain += (sequenceInfo.elementAt(x)).
                                    substring(19, 70);
                            totalChain += " ";
                        }
                    }

                    //add chain data
                    if (foundChain == true) {
                        chainData.addElement(alphabet.substring
                                (whichChain, whichChain + 1));
                        //should only be one
                        sequenceTitles.addElement
                                (moleculeTitles.elementAt(0));
                    }
                    //add sequence
                    if (!(totalChain = totalChain.trim()).equals("")) {
                        sequences.addElement(totalChain);
                    }
                }

            } else { //"normal" case, has predefined chain data

                for (int whichChain = 0; whichChain < chainData.size(); whichChain++) {
                    //find which chain we're looking for
                    chainValue = chainData.elementAt(whichChain);
                    totalChain = "";
                    for (int x = 0; x < sequenceInfo.size(); x++) {
                        temp = sequenceInfo.elementAt(x);
                        tempLabel = temp.substring(11, 12);
                        if (tempLabel.equals(chainValue)) {
                            totalChain += (sequenceInfo.elementAt(x)).
                                    substring(19, 70);
                            totalChain += " ";
                        }
                    }

                    //add sequence
                    if (!(totalChain = totalChain.trim()).equals("")) {
                        sequences.addElement(totalChain);
                    }
                }
            }
            //convert sequence data
            for (int i = 0; i < sequences.size(); i++) {
                totalChain = sequences.elementAt(i);
                int len = totalChain.length();
                byte[] c = new byte[(len + 1)/4];
                int pt = 0;
                for (int j = 0; j < len; j += 4) {
                	String aaa = totalChain.substring(j, j + 3).toUpperCase();
                	String s = aminoConversions.get(aaa);
                    if (s != null)
                    	c[pt++] = (byte)s.charAt(0);
                    else
                    	System.err.println("GenomeFileParser could not convert " + aaa + " to X");
                }
                sequences.setElementAt(new String(c, 0, pt), i);
            }

            //temp data storage
			double mW = 0.0;
			String mWstring = "";
			
			for (int x = 0; x < sequences.size(); x++) {

                temp = sequences.elementAt(x);

                // Determine the MW from the getMW method
                mW = GenomeFileParser.getMW(temp);
                mWstring = String.valueOf(mW);
                if (mWstring.length() >
                mWstring.indexOf('.') + 3) {
                	mWstring = mWstring.substring(0, mWstring.indexOf('.') + 3);
                }
                molecularWeights.addElement(mWstring);
                
              //if the protein was an enzyme, store the EC number as the function
                if (hasECnumber) {
                    for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
                        functions.addElement(proteinFunction);
                    }
                }
              //otherwise if there was a KEYWDS section, store the data from the
                //section as the protien function
                else if (keywordInfo.size() > 0) {
                    for (int fcn = 0; fcn < keywordInfo.size(); fcn++) {
                        if (fcn == 0) {
                            temp = (keywordInfo.elementAt(fcn)).substring(10);
                            //while( (temp.substring( temp.length() - 1 )).equals(" ")){
                            temp.trim();
                            // }
                        } else {
                            temp = temp +
                                    (keywordInfo.elementAt(fcn)).substring(10);
                            //  while((temp.substring(temp.length() - 1)).equals(" ")){
                            temp.trim();
                            //   }
                        }
                    }
                    proteinFunction = temp;
                    for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
                        functions.addElement(proteinFunction);
                    }
                }
                //otherwise, if there was a header line, store the protein function
                //as the HEADER line
                else if (!headerLine.equals("")) {
                    headerLine = headerLine.substring(10, 50);
                    headerLine.trim();
                    for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
                        functions.addElement(headerLine);
                    }
                }
                //otherwise, store the function as a null string ("")
                else {
                    for (int fcn = 0; fcn < sequenceTitles.size(); fcn++) {
                        functions.addElement(proteinFunction);
                    }
                }
                
			}
			
			for(int i = 0; i < sequences.size(); i++) {
				proteins.add(new Protein(sequenceTitles.elementAt(i), "", "",
						(int) Double.parseDouble(molecularWeights.elementAt(i)), colors[rand.nextInt(8)]));
			}
        }
        try {
            if (in != null) {
                in.close();
            }
        } catch (IOException e) {
        }
        
        return proteins;
    }
	
	/**
     * This method parses a FASTA file, extracting sequence information and
     * appropriate descriptor for the sequence.
     *
     * @param f the file
     * @param data the data
     */
	private Vector<Protein> fastaParse(File f, String data) {
		BufferedReader in = null;
		boolean anerror = false;
		String temp = "";
		String totalChain = "";
		//double doubleVal;
		Vector<String> fileData = new Vector<>();  //holds complete file
        Vector<String> chainData = new Vector<>(); //holds chain designations
        Vector<String> sequences = new Vector<>(); //holds sequence data
        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
        Vector<String> functions = new Vector<>(); //holds the protein functions
        Vector<String> molecularWeightStrings = new Vector<>(); //hold molecular weights
        Vector<Protein> proteins = new Vector<>();//holds the list of protiens
        Vector<String> concentrations = new Vector<>();
        
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
                    if(temp.indexOf("|$#") != -1) {
                    	concentrations.add(temp.substring(temp.indexOf("|$#") + 3, temp.indexOf("|$#") + 4));                    }
                    else
                    	concentrations.add("1");
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
				
				//doubleVal = Double.parseDouble(mWstring);
				molecularWeightStrings.addElement(mWstring);
			}
			//CONTINUE HERE, THIS IS WHERE YOU HAVE MADE A LIST OF PROTEINS TO BE PROCESSED
			
			for(int i = 0; i < sequences.size(); i++) {
				proteins.add(new Protein(sequenceTitles.elementAt(i), "", "",
						(int) Double.parseDouble(molecularWeightStrings.elementAt(i)), colors[rand.nextInt(8)]));
				proteins.get(i).setConcentration(Integer.parseInt(concentrations.elementAt(i)));
			}
			
		}
		try {
			if(in != null)
				in.close();
		} catch(IOException e) {
		}
		
		return proteins;
	}
	
	/**
     * This method parses a gbk file, extracting sequence information and
     * appropriate descriptor for the sequence.
     *
     * @param f the file
     * @param data the data
     */
	private Vector<Protein> gbkParse(File f, String data) {
		BufferedReader in = null;
		boolean anerror = false;
		String temp = "";
		String totalChain = "";
		boolean foundTranslation = false;
        boolean foundGene = false;
        String function = "";
		//double doubleVal;
		Vector<String> fileData = new Vector<>();  //holds complete file
		Vector<String> sequences = new Vector<>(); //holds sequence data
        Vector<String> sequenceTitles = new Vector<>(); //holds sequence titles
        Vector<String> functions = new Vector<>(); //holds the protein functions
        Vector<String> molecularWeightStrings = new Vector<>(); //hold molecular weights
        Vector<Protein> proteins = new Vector<>();//holds the list of protiens
        if (data == null || data.equals("")) {  //read from server
            try {
//                File f = new File("data" + File.separator + theFile);
                in = new BufferedReader
                        (new InputStreamReader((/*electro2D.getCodeBase()*/
						   /* "data/" + theFile*/
                                f.toURI().toURL()).openStream()));
                String temp1;

                while ((temp1 = in.readLine()) != null) {

                    fileData.addElement(temp1);
                }
            } catch (Exception e) {
                MessageFrame error = new MessageFrame();
                error.setMessage("Error reading from file.  Be sure you " +
                        "typed the name correctly.");
                error.setVisible(true);

                anerror = true;
                System.err.println("Exception was: " + e);
            }
        } else { //use data from textarea
            StringTokenizer fileSplitter = new StringTokenizer(data, "\r\n");
            while (fileSplitter.hasMoreTokens()) {
                fileData.addElement(fileSplitter.nextToken());
            }
        }

        if (anerror == false) {
        	for (int x = 0; x < fileData.size(); x++) {

                temp = fileData.elementAt(x);

                if (temp.length() >= 10 &&
                        temp.substring(0, 10).equals("DEFINITION")) {
                    //assign organism title
                    //organismTitle = temp.substring(12);
                }
                //look for a title for this sequence
                if (temp.length() >= 9 && temp.substring(5, 9).equals("gene")) {

                    //check to see if there was a translation for previous gene;
                    //if not, replace old gene with this gene
                    if (foundTranslation == false && sequenceTitles.size() >= 1) {
                        sequenceTitles.removeElementAt(sequenceTitles.size() - 1);
                    }
                    //add sequence title
                    while (foundGene == false) {
                        if (temp.length() >= 26 &&
                                temp.substring(21, 26).equals("/gene")) {
                            foundGene = true;
                        } else {
                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR"); //error code
                            }
                        }
                    }
                    sequenceTitles.addElement(temp.substring
                            (28, temp.lastIndexOf("\"")));
                    foundGene = false;
                    foundTranslation = false;
                }
                //here is where the sequence data should be
                //as well as information about the protein function
                if (temp.length() >= 8 && temp.substring(5, 8).equals("CDS")) {

                    while (foundTranslation == false) {
                        if (temp.length() >= 33 &&
                                temp.substring(21, 33).equals("/translation")) {
                            foundTranslation = true;
                        }
                        //if the line contains the enzyme commission number
                        //the protein function is an Enzyme
                        else if (temp.length() >= 33 &&
                                temp.substring(21, 31).equals("/EC_number")) {
                            if (function.equals("")) {
                                temp = temp.substring(33, temp.lastIndexOf("\""));
                                function = "Enzyme " + temp + "\u003B";
                            } else {
                                temp = temp.substring(33, temp.lastIndexOf("\""));
                                function = function + " " + temp + "\u003B";
                            }
                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR"); //error code
                            }
                        }
                        //if the line is the function line then its contents are
                        //included in the protein function
                        else if (temp.length() >= 30 &&
                                temp.substring(21, 30).equals("/function")) {
                            //hadFunctionLine = true;
                            if (temp.substring(32).lastIndexOf("\"") != -1) {
                                temp = temp.substring(32);
                                function = function + " " + temp.substring(0,
                                        temp.lastIndexOf("\"")) + ".";
                            } else {
                                temp = temp.substring(32);
                                function = function + " " + temp;
                                x = x + 1; //jump to next line
                                temp = fileData.elementAt(x);
                                while (temp.lastIndexOf("\"") == -1) {
                                    function = function + " " +
                                            temp.substring(21);
                                    x = x + 1;
                                    if (x < fileData.size()) {
                                        temp = fileData.elementAt(x);
                                    } else {
                                        System.out.println("ERROR"); //error code
                                    }
                                }
                                function = function + temp.substring(21,
                                        temp.lastIndexOf("\"")) + ".";
                            }

                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR"); //error code
                            }
                        }
                        //if the line is the section containing notes about the
                        //protein, its contents are included in the function
                        else if (temp.length() >= 27 &&
                                temp.substring(21, 26).equals("/note")) {
                            if ((function.indexOf("unknown.") != -1) ||
                                    function.equals("")) {
                                //hadFunctionLine = false;
                                function = "";
                            }
                            if (temp.substring(28).lastIndexOf("\"") != -1) {
                                temp = temp.substring(28);
                                function = function + " " + temp.substring(0,
                                        temp.lastIndexOf("\"")) + ".";
                            } else {
                                temp = temp.substring(28);
                                function = function + " " + temp;
                                x = x + 1;
                                temp = fileData.elementAt(x);
                                while (temp.lastIndexOf("\"") == -1) {
                                    function = function + " " +
                                            temp.substring(21);
                                    x = x + 1;
                                    if (x < fileData.size()) {
                                        temp = fileData.elementAt(x);
                                    } else {
                                        System.out.println("ERROR"); //error code
                                    }
                                }
                                function = function + " " + temp.substring(21,
                                        temp.lastIndexOf("\"")) + ".";
                            }

                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR"); //error code
                            }
                        }
                        //if the line is the product information of the protein,
                        //its contents are included in the function
                        else if (temp.length() >= 30 &&
                                temp.substring(21, 29).equals("/product")) {
                            if (temp.substring(31).lastIndexOf("\"") != -1) {
                                temp = temp.substring(31);
                                function = function + " " + temp.substring(0,
                                        temp.lastIndexOf("\"")) + ".";
                            } else {
                                temp = temp.substring(31);
                                function = function + " " + temp;
                                x = x + 1;
                                temp = fileData.elementAt(x);
                                while (temp.lastIndexOf("\"") == -1) {
                                    function = function + " " +
                                            temp.substring(21);
                                    x = x + 1;
                                    if (x < fileData.size()) {
                                        temp = fileData.elementAt(x);
                                    } else {
                                        System.out.println("ERROR");
                                    }
                                }
                                function = function + " " + temp.substring(21,
                                        temp.lastIndexOf("\"")) + ".";
                            }

                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR"); //error code
                            }
                        }

                        //otherwise move to next line
                        else {
                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.err.println("Error! Protein lacking " +
                                        "sequence.");
                                System.out.println("ERROR"); //error code
                            }
                        }
                    }
                    if (temp.length() >= 35 && temp.substring(35).lastIndexOf("\"") != -1) {
                        temp = temp.substring(35);
                        //add first line
                        totalChain += temp.substring(0, temp.lastIndexOf("\""));
                    } else /*if( temp.length() >= 35 )*/ {

                        //add first line
                        totalChain += temp.substring(35);
                        x++; //jump to next line
                        temp = fileData.elementAt(x);

                        //add remaining lines
                        while (temp.lastIndexOf("\"") == -1) {

                            totalChain += temp.substring(21);
                            x++;
                            if (x < fileData.size()) {
                                temp = fileData.elementAt(x);
                            } else {
                                System.out.println("ERROR");
                            }
                        }

                        //add last line
                        totalChain += temp.substring(21, temp.lastIndexOf("\""));
                    }

                    sequences.addElement(totalChain); //add the sequence
                    totalChain = ""; //reset for next chain
                    functions.addElement(function); //add the function
                    function = ""; //reset for next chain
//                    hadEnzymeClassNumber = false;
//                    hadFunctionLine = false;
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
				
				//doubleVal = Double.parseDouble(mWstring);
				molecularWeightStrings.addElement(mWstring);
			}
			//CONTINUE HERE, THIS IS WHERE YOU HAVE MADE A LIST OF PROTEINS TO BE PROCESSED
			
			for(int i = 0; i < sequences.size(); i++) {
				proteins.add(new Protein(sequenceTitles.elementAt(i), "", "",
						(int) Double.parseDouble(molecularWeightStrings.elementAt(i)), colors[rand.nextInt(8)]));
			}
			
		}
		try {
			if(in != null)
				in.close();
		} catch(IOException e) {
		}
        return proteins;
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
