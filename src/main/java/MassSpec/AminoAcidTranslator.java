package main.java.MassSpec;// This class translates the given sequence letter names of the protein into the full names so it can be used in Marvin Sketch

public class AminoAcidTranslator {

	final static String[][] aname = new String[256][];
	static {
		aname['A'] = new String[] { "Alanine", "Alanyl-" };
		aname['C'] = new String[] { "Cysteine", "Cysteinyl-" };
		aname['D'] = new String[] { "Aspartic Acid", "Aspartyl-" };
		aname['E'] = new String[] { "Glutamic Acid", "Glutamyl-" };
		aname['F'] = new String[] { "Phenylalanine", "Phenylalaninyl-" };
		aname['G'] = new String[] { "Glycine", "Glycyl-" };
		aname['H'] = new String[] { "Histidine", "Histidinyl-" };
		aname['I'] = new String[] { "Isoleucine", "Isoleucinyl-" };
		aname['K'] = new String[] { "Lysine", "Lysinyl-" };
		aname['L'] = new String[] { "Leucine", "Leucinyl-" };
		aname['M'] = new String[] { "Methionine", "Methionyl-" };
		aname['N'] = new String[] { "Asparagine", "Asparaginyl-" };
		aname['Q'] = new String[] { "Glutamine", "Glutaminyl-" };
		aname['R'] = new String[] { "Arginine", "Arginyl-" };
		aname['S'] = new String[] { "Serine", "Serinyl-" };
		aname['T'] = new String[] { "Threonine", "Threonyl-" };
		aname['V'] = new String[] { "Valanine", "Valinyl-" };
		aname['W'] = new String[] { "Tryptophan", "Tryptophanyl-" };
		aname['Y'] = new String[] { "Tyrosine", "Tyrosinyl-" };

	}

	/**
	 * Create the Marvin molecule string Arginyl-Valinyl-...-Serine
	 * @param seq
	 * @return the name, or null if the sequence includes unnameable amino acids
	 */
	static public String translate(String seq) {
		StringBuffer sb = new StringBuffer();
//        
//       
		int n = seq.length() - 1;
		for (int i = 0; i < n; i++) {
			String[] c = aname[seq.charAt(i)];
			if (c == null)
				return null;
			sb.append(c[1]);
		}
		String[] cn = aname[seq.charAt(n)];
		if (cn == null)
			return null;
		sb.append(cn[0]);
		return sb.toString();
	}

}
