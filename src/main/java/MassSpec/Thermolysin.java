package main.java.MassSpec; 

/**
 * @author Amanda Fisher
 */

import main.java.Electro2D.Protease;

/**
 * Cuts proteins in a similar/same way that Thermolysin does ( before Isoleucine(I), Leucine(L),
 * Methionine(M), or Valine(V))
 */
public class Thermolysin extends Protease {

    public Thermolysin() {
    	super(new char[] {'I', 'L', 'M', 'V'}, true); //Thermolysin cuts at these proteins
    }

}
