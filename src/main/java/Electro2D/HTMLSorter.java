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

import java.util.TreeSet;

/**
 * This class creates the ordered Vector of all of the proteins to be
 * displayed in hte HTML file.
 */

import java.util.Vector;

public class HTMLSorter {

    private TreeSet<Vector<String>> proteinInfo;
    private int compBy;

    public HTMLSorter(int cb, Vector<String> t, Vector<String> p, Vector<String> m, Vector<String> f) {

        compBy = cb;
        proteinInfo = new TreeSet<Vector<String>>(new HTMLComparator(compBy));
        Vector<String> tmp;

        for (int i = 0; i < t.size(); i++) {
            tmp = new Vector<String>();
            tmp.add(t.elementAt(i));
            tmp.add(p.elementAt(i));
            tmp.add(m.elementAt(i));
            tmp.add(f.elementAt(i));
            proteinInfo.add(tmp);
        }
    }

    public TreeSet<Vector<String>> getSorted() {
        return proteinInfo;
    }
}
