/**
 *
 */
package main.java.Electro1D;

import java.awt.Color;

/**
 * @author Bader Alharbi
 *         Constants interface initiate many final attributes, by Parameters.java
 *         this will make locating these fixed values easier
 */
public interface Constants {

	//Why is low 8x10^16 or something like that, it should not be that high I dont think
    public final double low = 0.75D;// why is it 80000000000000004D
    public final double medium = 1.0D;
    public final double high = 1.5D;
    public final double highX2 = 2D;
    public final String fiftyV = "50V";
    public final String hundredV = "100V";
    public final String oneFiftyV = "150V";
    public final String twoHundred = "200";
    public final String slow = "Slow";
    public final String moderate = "Moderate ";
    public final String fast = "Fast";

    public Color dyeColor = new Color(132, 50, 237);
    public Protein dye1 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye2 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye3 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye4 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye5 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye6 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye7 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye8 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye9 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);
    public Protein dye10 = new Protein("Dye", "Dye", "Dye", 6000, dyeColor);

    public Acrylamide gel1 = new Acrylamide("7.5%", 7.5D);
    public Acrylamide gel2 = new Acrylamide("10%", 10D);
    public Acrylamide gel3 = new Acrylamide("12%", 12D);
    public Acrylamide gel4 = new Acrylamide("15%", 15);

    public int std2Ref = 1;
    public int std3Ref = 2;
    public int std4Ref = 3;
    public int std5Ref = 4;
    public int std6Ref = 5;
    public int std7Ref = 6;

}
