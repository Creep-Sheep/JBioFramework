package main.java.Electro2D;/*
 * Copyright (C) 2013 Rochester Institute of Technology
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * See the GNU General Public License for more details.
 */

/**
 * @author Jill Zapoticznyj
 * @author Adam Bazinet
 * @author Amanda Fisher
 */

import java.awt.Color;
import java.awt.Component;
import java.awt.Graphics;
import java.util.Vector;
import java.util.Random;
import java.util.Collection;



public class IEFProtein {
	// BH question: Why was this a java.awt.Component??

	private static int nProt = 0;
	int index;
	
    private static Color[] colors = {Color.blue, Color.green, Color.yellow,
            Color.red, Color.orange, Color.pink};
    private Color myColor;
    private Vector proteins;
    private int myX;
    private static int myY = 5;
    private double tempX = 0;
    private double increments = 0;

    private double myPi;
    private double maxPi;
    private double minPi;
    private static int myHeight = 40;
    private static double pixelWidth_100 = 0;
    private static double tempWidth = 0;
    private Vector names;
    private static double maxpH = 10;
    private static double minpH = 3;
    private static GelCanvas gelcanvas;
	private static double w34;
	private static double pH_range_100;
	private static double pixelsPerPH;
	static int pixelWidth = 563;

	
    /**
     * constructor - creates the Electro2D.IEFProtein object
     *
     * @param p the first protein to be represented by this object
     */
    public IEFProtein(E2DProtein p, GelCanvas g) {
    	index = ++nProt;
        names = new Vector();
        gelcanvas = g;
        proteins = new Vector();
        proteins.add(p);

        minPi = myPi = p.getPI();
        maxPi = Math.max(myPi, minpH);
        names.add(p.toString());
        myColor = colors[0];

        /**
         * determine the x coordinate of this Electro2D.IEFProtein
         */
        double w = gelcanvas.getWidth();

        if (myPi <= minpH) {
            myX = 1;
        } else if (myPi >= maxpH) {
            myX = (int) (w - 6) + 1;
        } else {
            myX = (int) ((w - 4) * (((myPi - minpH) / (maxpH - minpH))));
        }

        Random rand = new Random();
        tempX = rand.nextInt((int) w - 7);
        tempX = tempX + 1;
        increments = (myX - tempX) / 50;
    }
    
    /** Get the X-pixel for a give pH 
     * 
     */
    
    public static int getXForPH(double pH) {
    	return (int) ((pH - minpH) * pixelsPerPH);
    }

    /**
     * addProtein adds a collection of proteins c to the vector of proteins
     * being represented by this Electro2D.IEFProtein object
     *
     * @param c the collection of proteins to be added to the vector
     */
    public void addProtein(Collection c) {
        /**
         * copy all of the proteins passed to this object into its vector
         */
        proteins.addAll((Vector) (c));

        /**
         * change the color of the Electro2D.IEFProtein based on the number of proteins
         * it now has
         */
        if (proteins.size() < 10) {
            myColor = colors[0];
        } else if (proteins.size() < 20) {
            myColor = colors[1];
        } else if (proteins.size() < 30) {
            myColor = colors[2];
        } else if (proteins.size() < 40) {
            myColor = colors[3];
        } else if (proteins.size() < 60) {
            myColor = colors[4];
        } else {
            myColor = colors[5];
        }
//
//        this.repaint();

        /**
         * add the new protein names to the vector of names and set any
         * changes in the max or min pI values
         */
        for (int i = 0; i < ((Vector) c).size(); i++) {

            E2DProtein p = ((E2DProtein) ((Vector) c).elementAt(i));
        	
            names.add(p.toString());

            double pi = p.getPI();

            if (pi > maxPi) {
                maxPi = pi;
            } else if (pi < minPi) {
                minPi = pi;
            }
        }

        myPi = (maxPi + minPi) / 2;

    }

    /**
     * accessor method
     *
     * @return the X coordinate of the protein
     */

    public int returnX() {
        return myX;
    }

    /**
     * accessor method
     *
     * @return the Y coordinate of the protein
     */
    public int returnY() {
        return myY;
    }

    /**
     * accessor method
     *
     * @return the maximum pI value
     */
    public double getMaxPI() {
        return maxPi;
    }

    /**
     * accessor method
     *
     * @return the minimum pI value
     */
    public double getMinPI() {
        return minPi;
    }

    /**
     * getProtein returns the protein object(s) that this Electro2D.IEFProtein
     * is representing.
     *
     * @return proteins
     */
    public Vector getProtein() {

        return proteins;
    }

    /**
     * changeWidth increments the width of the Electro2D.IEFProtein for the initial
     * animation.
     */
    public static void changeWidth() {

        /**
         * increase the width of the object by a 50th of its final width
         */
        tempWidth = tempWidth + pixelWidth_100 / 50;
    }

    /**
     * changes the position of the object a 50th of the distance from its
     * final position.
     */
    public void changeX() {
        tempX = tempX + increments;
    }

    /**
     * Sets the tempX equal to the final X value for the end of the animation
     * of the IEF process
     */
    public void setX() {
        tempX = myX;
    }

    /**
     * Sets the tempWidth equal to the final width for the end of the
     * animation of the IEF process
     */
    public static void setWidth() {
        tempWidth = pixelWidth_100;
    }

    /**
     * draw displays the Electro2D.IEFProtein as a rectangle on the screen
     */
    public void draw(Graphics g) {

        //set the color to be drawn to the color of this Electro2D.IEFProtein
        g.setColor(myColor);

        //draw the rectangle to the screen
        g.fillRect((int) tempX, myY, (int) tempWidth, myHeight);

    }

    /**
     * decreases the height of the protein for the beginning of the SDS-PAGE
     * animation
     */
    public static void shrinkProtein() {
        myHeight = myHeight - 2;

        /**
         * shift the y coordinate down so it appears that the object is being
         * compressed
         */
        myY = myY + 2;
    }

    /**
     * accessor method
     *
     * @return current height of the object
     */
    public static int returnHeight() {
        return myHeight;
    }

    /**
     * accessor method
     *
     * @return final width of this object
     */
    public static double returnWidth() {
        return pixelWidth_100;
    }

    /**
     * accessor method
     *
     * @return current width of this object
     */
    public static double returnTempWidth() {
        return tempWidth;
    }

    /**
     * This method is called when the reset button is pressed.  It sets the
     * tempWidth data member back to zero to prepare to draw the IEFProteins
     * again
     */
    public static void resetTempWidth() {
        tempWidth = 0;
    }

    /**
     * This method is called when the reset button is pressed.  It sets the
     * height and y positions back to their original values
     */
    public static void resetProtein() {
        myHeight = 40;
        myY = 5;
    }

    /**
     * accessor method
     *
     * @return vector of protein titles
     */
    public Vector getNames() {
        return names;
    }

    /**
     * sets maxpH equal to the maximum pH value and minpH to the minimum
     * pH value entered by the user for the IEF animation
     * @param canvasWidth 
     */
    public static void setRange(double max, double min, int canvasWidth) {
        maxpH = max;
        minpH = min;
        // calculate the final width
        pixelWidth = canvasWidth;
        pixelWidth_100 = pixelWidth / 100D;
        pH_range_100 = (maxpH - minpH) / 100;
        w34 = pixelWidth_100 * 0.75;
        pixelsPerPH = pixelWidth_100/pH_range_100;
    }

	public static double returnWidth34() {
		return w34;
	}

	public String toString() {
		return "[IEF" + index + " " + proteins.size() + " " + minPi + " " + maxPi + " " + myX + "]";
	}
}
