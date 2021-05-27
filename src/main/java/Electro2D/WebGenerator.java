package main.java.Electro2D; /**
 * Electro2D.WebGenerator.java
 * This class generates a website which displays the maximum and minimum
 * pI and molecular weight values, as well as a table of the contained
 * proteins from the animation with their respective pI and mol. wt. values
 *
 * @author Jill Zapoticznyj
 */

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.File;
import java.io.IOException;
import java.util.Vector;

public class WebGenerator {

    private Electro2D electro2D;
    private BufferedWriter buf;
    private FileWriter fWrite;
    private PrintWriter pWrite;
    private String maxMW;
    private String minMW;
    private String maxPi;
    private String minPi;
    private static int searchVal = 0;
    private final String bgColor = "\"FCFCFC\"";
    private final String openTab = "<";
    private final String closeTab = ">";
    private final String openTD = "<TD>";
    private final String closeTD = "</TD>";
    private final String openTR = "<TR>";
    private final String closeTR = "</TR>";
    private final String directoryString = "HTML Files/";

    public WebGenerator(Electro2D e) {

        electro2D = e;

        maxMW = "";
        minMW = "";
        maxPi = "";
        minPi = "";
    }

    public static void setSearch(int index) {
        searchVal = index;
    }

	public void genFile(String filename) {
		try {
			/** @j2sNative */
			{
				// Java only
				File fl = new File(directoryString);
				if (!fl.exists()) {
					fl.mkdir();
				}
			}
			fWrite = new FileWriter(directoryString + filename + ".html");
			buf = new BufferedWriter(fWrite);
			pWrite = new PrintWriter(fWrite);
		} catch (IOException x) {
			System.err.println(x.getMessage());
		}

		Vector names = electro2D.getSequenceTitles();
		Vector molwt = electro2D.getMolecularWeights();
		Vector pI_vals = electro2D.getPiValues();
		Vector functions = electro2D.getFunctions();

		HTMLSorter htmlSort = new HTMLSorter(searchVal, names, pI_vals, molwt, functions);
		Vector sorted = new Vector(htmlSort.getSorted());

		maxMW = String.valueOf(electro2D.getMaxMW());
		minMW = String.valueOf(electro2D.getMinMW());
		maxPi = String.valueOf(electro2D.getMaxPi());
		minPi = String.valueOf(electro2D.getMinPi());

		String startingLine = " <html><head>" + "<body bgcolor=" + bgColor
				+ "><title>" + filename + "</title></head>";

		String startTable = openTab + "TABLE BORDER=2" + closeTab + openTab + "TR" + closeTab + openTD + "PROTEIN TITLE"
				+ closeTD + openTD + "MOLECULAR WEIGHT" + closeTD + openTD + "pI VALUE" + closeTD + openTD + "FUNCTION"
				+ closeTD + closeTR;

		String endTable = openTab + "/TABLE" + closeTab;
		String endLine = openTab + "/HTML" + closeTab;

		String maxmwCode = "<center><br><b>Max " + "Molecular weight = " + maxMW
				+ "</b><br>";

		String minmwCode = "<b>Min Molecular weight = " + minMW + "</b><br>";

		String maxpiCode = "<b>Max pI Value = " + maxPi + "</b><br>";

		String minpiCode = "<b>Min pI Value = " + minPi + "</b><br>";
		String filesizeCode = "<b>Proteome File Size = " + sorted.size()
				+ "</b><br><br>";

		try {

			pWrite.println(startingLine);
			pWrite.println(maxmwCode);
			pWrite.println(minmwCode);
			pWrite.println(maxpiCode);
			pWrite.println(minpiCode);
			pWrite.println(filesizeCode);
			pWrite.println(startTable);
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}

		String protInfoTable = "";
		String molwtValue = "";
		double molwtDouble = 0;
		String pI = "";
		double pIDouble = 0;
		Vector tmp = new Vector();
		for (int i = 0; i < sorted.size(); i++) {
			tmp = ((Vector) sorted.elementAt(i));
			pI = (String) tmp.elementAt(1);
			pIDouble = Double.parseDouble(pI);
			molwtValue = (String) tmp.elementAt(2);
			molwtDouble = Double.parseDouble(molwtValue);

			protInfoTable = openTR + openTD + (String) tmp.elementAt(0) + closeTD + openTD + molwtValue + closeTD
					+ openTD + pI + closeTD + openTD + (String) tmp.elementAt(3) + closeTD + closeTR;

			pWrite.println(protInfoTable);

		}

		pWrite.println(endTable);
		pWrite.println(endLine);
		pWrite.close();
	}
}