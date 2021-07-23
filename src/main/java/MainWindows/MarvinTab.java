package main.java.MainWindows;/*
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
 * Main GUI class for Marvin integration with JBioFramework.
 * Instantiated by /Main.JBioFrameworkMain/ as a JPanel object (extends JPanel)
 * which adds it to main frame.
 */

//GUI compoents

import java.awt.Dimension;

import javax.swing.BoxLayout;
import javax.swing.JPanel;

//chemaxon (marvin) packages necessary for internal Marvin stuff
import chemaxon.marvin.beans.MSketchPane;
import chemaxon.marvin.common.UserSettings;
import chemaxon.marvin.sketch.SketchParameterConstants;

/**
 * JPanel object containing the main GUI for interacting with MarvinSketch.
 */
public class MarvinTab extends JPanel {

    /**
	 * 
	 */
	private static final long serialVersionUID = -3569857311726169914L;

	//declaraiton of the main panel being constructed (for accessing below)
    private static MSketchPane marvinPane;

    //unused textarea.
//    private JTextArea textare = new JTextArea(10, 50);


	/**
	 * allows lazy initialization
	 */
	private static MarvinTab instance;
	private JPanel sketchPanel;
	private JPanel mainPanel;

    /**
     * construct the front-end JPanel for the main MarvinSketch application.
     * by creating and arranging the other components created by the methods
     * below.
     *
     * @return return the main panel
     */
    public JPanel createMainPanel() {
    	instance = this; 

        //main panel for application. contains topPanel.
        //top panel. contains sketchpanel.
    	
        JPanel topPanel = new JPanel() {
            /**
			 * 
			 */
			private static final long serialVersionUID = 2047700591318761617L;

			public void setVisible(boolean tf) {
				// lazy initialization
            	getSketchPane();
            }
        };
        
        sketchPanel = new JPanel();
        topPanel.add(sketchPanel);


        mainPanel = new JPanel();
        mainPanel.setLayout(new BoxLayout(mainPanel, BoxLayout.Y_AXIS));
        mainPanel.add(topPanel);
        return mainPanel;
    }

    /**
     * returns the JPanel its constructed in traditional accessor format.
     *
     * @return returns the marvin sketch pane
     */
    public static MSketchPane getSketchPane() {
    	// BH 2021.04.26 allows lazy instantiation of Marvin for SwingJS
    	if (marvinPane == null) {
            marvinPane = instance.createSketchPane();
            instance.sketchPanel.add(marvinPane);
            instance.mainPanel.validate();
    	}
        return marvinPane;
    }

    /**
	 * Create the central panel of MarvinSketch where all the drawing takes place.
	 * construct and return an MSketchPanel object filled with Marvin's
	 * /UserSettings/ object constructed by createUserSettings().
	 */
    private MSketchPane createSketchPane() {
        MSketchPane pane = new MSketchPane(createUserSettings());
        pane.setPreferredSize(new Dimension(900, 500));
        return pane;
    }

	/**
	 * Provide the back-end settings by using Marvin's classes.. construct and
	 * return Marvin's /UserSettings/ object which is used in the construction of
	 * 'pane' above.
	 */
    private UserSettings createUserSettings() {
        UserSettings settings = new UserSettings(
                this.getClass().getResourceAsStream("marvin.properties"));
        settings.setProperty(SketchParameterConstants.MENU_CUSTOMIZATION_FILE,
                System.getProperty("user.dir") + "/src/customization.xml");
        settings.setProperty(SketchParameterConstants.SHORTCUTS,
                System.getProperty("user.dir") + "/src/shortchuts.xml");
        settings.setProperty(SketchParameterConstants.TOOLBAR_TEMPLATES + "20",
                ":specials:specialTemplates.mrv");
        return settings;
    }

}
