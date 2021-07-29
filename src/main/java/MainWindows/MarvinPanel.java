package main.java.MainWindows;

/*
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

import java.awt.Component;

/**
 * Main GUI class for Marvin integration with JBioFramework.
 * Instantiated by /Main.JBioFrameworkMain/ as a JPanel object (extends JPanel)
 * which adds it to main frame.
 */

//GUI compoents

import java.awt.Dimension;
import java.util.function.Consumer;

import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

//chemaxon (marvin) packages necessary for internal Marvin stuff
import chemaxon.marvin.beans.MSketchPane;
import chemaxon.marvin.common.UserSettings;
import chemaxon.marvin.sketch.SketchParameterConstants;
import main.java.Utilities.JSUtil;

/**
 * JPanel object containing the main GUI for interacting with MarvinSketch.
 */
@SuppressWarnings("serial")
public class MarvinPanel extends JPanel {

	private static int defaultWidth = 900;

	private static int defaultHeight = 500;

	private static Runnable whenChemicalizeCreated;

	private static String marvinDiv = "jbfmarvindiv";

	private static String apiID = "2d2e4f98e04447babfbef7ae1e830756";
	
	static {
		if (JSUtil.isJS) {

			// JavaScript only
			
			// Add the div that Marvin JS will be placed into. 
			
			// Add the Chemicalize scripts to the page, 
			// running whenChemicalizeCreated only when ready.
			// The timeout is necessary to account for the fact that
			// this static code is run before main() has has run. 

			String serverScript = "https://marvinjs.chemicalize.com/v1/"+apiID+"/client-settings.js";
			String clientScript = "https://marvinjs.chemicalize.com/v1/client.js";
			String div = "<div style='display:none;width:" + defaultWidth + "px;height:" + defaultHeight + "px' id="
					+ marvinDiv + "></div>";
			Runnable r = whenChemicalizeCreated;
			
			/**
			 * @j2sNative
			 * 
			 * 			$("body").append(div); 
			 */
			{
				// This block of code is never run, because it would only be in Java, but
				// this static code block is JavaScript-only. Just here as an illustration of
				// how the j2sNative annotation works.

				System.out.println(serverScript + clientScript + div + r);
			}
			
			SwingUtilities.invokeLater(() -> {
				/** @j2sNative
				 * 
				 * $.getScript(serverScript, function() { $.getScript(clientScript, r && r.run$) });
				 */
			});
		}

	}

	/**
	 * the Marvin application, either Java or JavaScript
	 */
	private static MSketchPane marvinInstance;

	/**
	 * singleton instance of this class
	 */
	private static MarvinPanel instance;

	private MarvinPanel() {
		// private constructor only
	}

	/**
	 * Public access to a singleton instance. 
	 * 
	 * @return the instance
	 */
	public static JPanel createMarvinPanel() {
		return (instance == null ? instance = new MarvinPanel() : instance);
	}

	/**
	 * gets the Marvin application (asynchronously in JavaScript), running a
	 * Runnable when completed.
	 */
	public static void getMarvinApp(Runnable whenReady) {
		// BH 2021.04.26 allows lazy, asynchronous instantiation of Marvin for SwingJS
		if (marvinInstance != null) {
			whenReady.run();
			return;
		}
		if (JSUtil.isJS) {
			createMarvinEditorJS(whenReady);
			return;
		}
		addMarvin(new MSketchPane(createUserSettings()));
		if (whenReady != null)
			whenReady.run();
	}

	/**
	 * Create the JavaScript editor, addiing it to the frame when the
	 * ChemicalizeMarvinJs.createEditor promise is fulfilled.
	 * 
	 * This method only runs in JavaScript.
	 * 
	 * @param whenReady a Runnable to run when the editor is reports that it is
	 *                  ready
	 * 
	 * @author Bob Hanson hansonr@stolaf.edu
	 */
	@SuppressWarnings("unused") // some of these variables are JavaScript only
	private static void createMarvinEditorJS(Runnable whenReady) {
		Consumer<Object> marvinReady = new Consumer<Object>() {

			@Override
			public void accept(Object marvinObject) {
				addMarvin((MSketchPane) marvinObject);
				if (whenReady != null)
					whenReady.run();
			}

		};
		try {
			/**
			 * @j2sNative
			 * 
			 * 			ChemicalizeMarvinJs.createEditor("#" +
			 *            C$.marvinDiv).then(function(m){marvinReady.accept$O(m)});
			 */
		} catch (Throwable e) {
			// Throwable includes all JavaScript Errors (as in Java),
			// which Exception does not.
			System.err.println(e);
		}
	}

	/**
	 * Add the Marvin application component (Java or JavaScript) to the instance
	 * frame.
	 * 
	 * In JavaScript, we just create a JPanel of the desired size and append the
	 * already created div that is currently in document.body.
	 * 
	 * @param marvin
	 */
	private static void addMarvin(MSketchPane marvin) {
		marvinInstance = marvin;
		Component panel = (JSUtil.isJS ? new JPanel() : marvin);
		panel.setPreferredSize(new Dimension(defaultWidth, defaultHeight));
		instance.add(panel);
		instance.validate();
		if (JSUtil.isJS) {

			// Transfer the body-based marvinDiv into the frame

			@SuppressWarnings("unused")
			String mdiv = "#" + marvinDiv;
			/**
			 * @j2sNative $(panel.ui.domNode).append($(mdiv).show());
			 */
		}
	}

	/**
	 * The only method we are implementing here. Note that the JavaScript interface
	 * is different from the Java one.
	 * 
	 * @param mol
	 */
	public static void setMoleculeByName(String mol) {
		MSketchPane marvin = marvinInstance;
		getMarvinApp(() -> {
			/**
			 * @j2sNative marvin.importStructure("name", mol);
			 */
			{
				marvin.setMol(mol);
			}
		});
	}

	/**
	 * Java only
	 * 
	 * Provide the back-end settings by using Marvin's classes.. construct and
	 * return Marvin's /UserSettings/ object which is used in the construction of
	 * 'pane' above.
	 */
	private static UserSettings createUserSettings() {
		UserSettings settings = new UserSettings(MarvinPanel.class.getResourceAsStream("marvin.properties"));
		settings.setProperty(SketchParameterConstants.MENU_CUSTOMIZATION_FILE,
				System.getProperty("user.dir") + "/src/customization.xml");
		settings.setProperty(SketchParameterConstants.SHORTCUTS, System.getProperty("user.dir") + "/src/shortcuts.xml");
		settings.setProperty(SketchParameterConstants.TOOLBAR_TEMPLATES + "20", ":specials:specialTemplates.mrv");
		return settings;
	}

	/**
	 * Create a JFrame that just contains the Marvin app for testing. 
	 * 
	 * Note that this will not actually work as an app in JavaScript. 
	 * 
	 * @param args
	 */
	public static void main(String[] args) {
		whenChemicalizeCreated = new Runnable() {
			@Override
			public void run() {
				whenChemicalizeCreated = null;
				JFrame frame = new JFrame();
				frame.add(createMarvinPanel());
				getMarvinApp(() -> {
					frame.pack();
					frame.setVisible(true);
					setMoleculeByName("Glycyl-Alanine");
				});
			}

		};
		if (!JSUtil.isJS)
			whenChemicalizeCreated.run();
	}
}
