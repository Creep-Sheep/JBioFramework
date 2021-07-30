package main.java.Electro2D; /**
 * @author Amanda Fisher
 */

import java.util.ArrayList;

/**
 * Contains the methods needed for a Protease who cuts before or after apecific proteins without any other conditions.  Otherwise the method cut needs to be overwritten and new conditions added
 */
public abstract class Protease {

    final private char[] cuts;
    final private boolean cutsBefore;// does it cut before or after the proteins in cutAminoAcids

    public Protease(char[] cuts, boolean cutsBefore) {
    	this.cuts = cuts;
        this.cutsBefore = cutsBefore;
	}

	/**
	 * Cut array list.
	 *
	 * @param sequence the sequence
	 * @return the array list
	 * @throws ProteaseException the protease exception
	 */
	public ArrayList<String> cut(String sequence) throws ProteaseException {
		ArrayList<String> cutSequences = new ArrayList<>();
		sequence = checkSequence(sequence);
		// runs the sequence through the sequence checker method in order to detect any
		// errors
		char[] chars = sequence.toCharArray();
		int nCut = cuts.length;
		int p0 = 0, p1 = 0;
		for (int i = 0, n = chars.length - 1; i <= n; i++) {
			char aa = chars[i];
			if (!cutsBefore) {
				p1++;
			}
			char afterAA = (i < n ? chars[i + 1] : ' ');
			for (int j = 0; j < nCut; j++) {
				char c = cuts[j];
				if (shouldCutHere(aa, c, afterAA)) {
					makeIon(sequence, p0, p1, cutSequences);
					p0 = p1;
				}
			}
			if (cutsBefore) {
				p1++;
			}
		}
		if (p1 < sequence.length()) {
			// added by Bob Hanson - right? Do you get the final ion as well?
			makeIon(sequence, p1, sequence.length(), cutSequences);
		}
		return cutSequences;
	}

    protected boolean shouldCutHere(char aa, char c, char afterAA) {
    	// overridden only by Trypsin
    	return (aa == c);
    }

    private static String checkSequence(String sequence) throws ProteaseException {
        if (sequence.contains(" ")) {
            throw new ProteaseException("Sequence to be cut must not contain spaces.");
        } else if (sequence.matches(".*\\d.*")) {
            throw new ProteaseException("Sequence to be cut must not contain numbers.");
        } else if (sequence.matches(".*[a-z].*")) {
            throw new ProteaseException("Sequence to be cut must contain all upper case letters.");
        }
        return sequence;
    }

	/**
	 * Takes the characters collected by cut and turns them in to a string that
	 * represents the sequence of the Ion
	 *
	 * @param buildingIons The current ion
	 * @param cutSequence  The sequence to be cut
	 */
	private static void makeIon(String sequence, int p0, int p1, ArrayList<String> cutSequence) {
		if (p0 < p1)
			cutSequence.add(sequence.substring(p0, p1));
	}


}
