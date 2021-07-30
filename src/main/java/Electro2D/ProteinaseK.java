package main.java.Electro2D; /**
 * @author Amanda Fisher
 */

/**
 * Cuts proteins in a similar/same way that ProteinaseK does (after Alanine(A), Phenylalanine(F), Isoleucine(I), Leucine(L), Valine(V), Tryptophan(W), and Tyrosine(Y))
 */
public class ProteinaseK extends Protease {

    public ProteinaseK() {
    	super(new char[] {'A', 'F', 'I', 'L', 'V', 'W', 'Y'}, false); 
    }

}