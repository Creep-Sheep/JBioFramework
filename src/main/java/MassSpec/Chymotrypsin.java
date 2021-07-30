package main.java.MassSpec; /**
 * @author Amanda Fisher
 */

import main.java.Electro2D.Protease;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Cuts proteins in a similar/same way that Chymotrypsin does (after Tyrosin(Y), Tryptophan(W), and Phenylalanine(F))
 */
public class Chymotrypsin extends Protease {

    public Chymotrypsin() {
    	super(new char[] {'Y', 'W', 'F' }, false); //Chymotrypsin cuts at these proteins
    }

}
