package main.java.MassSpec;/*
 * This class is an exception thrown by AminoAcid when an incorrect input is
 * given to one of its two constructors.
 * 
 * version 3
 */

/**
 * Thrown when a character in an amino acid sequence isn't recognized
 */
public class AminoException extends Exception {

    /**
	 * 
	 */
	private static final long serialVersionUID = 2055883749146096766L;

	public AminoException(String message) {
        super(message);
    }
}
