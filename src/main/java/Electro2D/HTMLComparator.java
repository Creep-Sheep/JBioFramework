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
 * This class compares the information to be displayed in the generated
 * HTML document.
 */

import java.util.Vector;
import java.util.Comparator;

public class HTMLComparator implements Comparator<Vector<String>> {

    private int compBy;

    public HTMLComparator(int c) {
        compBy = c;
    }

    public int compare(Vector<String> objA, Vector<String> objB) {
        if (compBy != 1 && compBy != 2) {
            if (((String) objA.elementAt(compBy)).equals(
                    (String) objB.elementAt(compBy))) {
                for (int i = 0; i < 4; i++) {
                    if (i != 1 && i != 2) {
                        int comp = ((String) objA.elementAt(i)).compareTo(
                                ((String) objB.elementAt(i)));
                        if (comp != 0) {
                            return comp;
                        }
                    } else if (i == 1 || i == 2) {
                        int comp = compareDouble(objA, objB, i);
                        if (comp != 0) {
                            return comp;
                        }
                    }
                }

            } else {
                return objA.elementAt(compBy).compareTo(objB.elementAt(compBy));
            }

        } else if (compBy == 1 || compBy == 2) {
            if (compareDouble(objA, objB, compBy) == 0) {
                for (int i = 0; i < 4; i++) {
                    if (i != 1 && i != 2) {
                        int comp = objA.elementAt(i).compareTo(objB.elementAt(i));
                        if (comp != 0) {
                            return comp;
                        }
                    } else if (i == 1 || i == 2) {

                        int comp = compareDouble(objA, objB, i);
                        if (comp != 0) {
                            return comp;
                        }
                    }
                }

                return 0;
            }
            return compareDouble(objA, objB, compBy);
        }

        return -1000;
    }

    public int compareDouble(Vector<String> objA, Vector<String> objB, int index) {
        int retVal = -2;

        double dA = Double.parseDouble(objA.elementAt(index));
        double dB = Double.parseDouble(objB.elementAt(index));

        if (dA < dB) {
            retVal = -1;
        } else if (dA == dB) {
            retVal = 0;
        } else if (dA > dB) {
            retVal = 1;
        }
        return retVal;
    }
}
