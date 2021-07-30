/**
 *
 */
package main.java.Electro1D;

import java.awt.Color;

/**
 * @author Bader Alharbi Constants interface initiate many final attributes, by
 *         Parameters.java this will make locating these fixed values easier
 */
public class Constants {

	// Why is low 8x10^16 or something like that, it should not be that high I dont
	// think
	public final static double low = 0.75D;// why is it 80000000000000004D
	public final static double medium = 1.0D;
	public final static double high = 1.5D;
	public final static double highX2 = 2D;

	public final static String slow = "Slow";
	public final static String moderate = "Moderate ";
	public final static String fast = "Fast";

	protected final static int wellCount = 10;

	public final static Color dyeColor = new Color(132, 50, 237);

	final static Protein[] dyes = new Protein[Constants.wellCount];

	static {
		for (int i = 0; i < Constants.wellCount; i++)
			dyes[i] = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
	}

	public final static Acrylamide[] gels = new Acrylamide[] {
    		new Acrylamide("7.5%", 7.5D), 
    		new Acrylamide("10%", 10D), 
    		new Acrylamide("12%", 12D), 
    		new Acrylamide("15%", 15)
    };

	public final static String[] gelPercents = new String[gels.length];

	static {
		for (int i = 0; i < gels.length; i++)
			gelPercents[i] = gels[i].percentGel;
	}

	public final static String fiftyV = "50V";
	public final static String hundredV = "100V";
	public final static String oneFiftyV = "150V";
	public final static String twoHundredV = "200";

	public final static String[] voltageList = { fiftyV, hundredV, oneFiftyV, twoHundredV };

	private final static int std1Ref = 0;
	private final static int std2Ref = 1;
	private final static int std3Ref = 2;
	private final static int std4Ref = 3;
	private final static int std5Ref = 4;
	private final static int std6Ref = 5;
	private final static int std7Ref = 6;
	
	public final static int[] standardIndices = new int[] { std1Ref, std2Ref, std3Ref, std4Ref, std5Ref, std6Ref, std7Ref };
	


}
