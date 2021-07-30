package main.java.Utilities;
/*
 * utilities.UnknownLineException.java
 *
 * Version:
 *     $Id$
 *
 * Revisions:
 *      $Log$
 *
 */

/**
 * Exception thrown when a given line in a line graph isn't recognized
 *
 * @author Kyle Dewey
 */
public class UnknownLineException extends Exception {
    /**
	 * 
	 */
	private static final long serialVersionUID = 2756149082573223092L;

	/**
     * Instantiates a new Unknown line exception.
     */
    public UnknownLineException() {
    }

    /**
     * Instantiates a new Unknown line exception.
     *
     * @param message the message
     */
    public UnknownLineException(String message) {
        super(message);
    }
}
