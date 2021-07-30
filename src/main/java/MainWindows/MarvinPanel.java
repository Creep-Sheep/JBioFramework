package main.java.MainWindows;

import java.awt.Container;

/**
 * Main GUI class for Marvin integration with JBioFramework.
 * Instantiated as a singleton by /Main.JBioFrameworkMain/ as a JPanel object (extends JPanel).
 */

import java.awt.Dimension;
import java.util.function.Consumer;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.SwingUtilities;

import chemaxon.marvin.beans.MSketchPane;
import chemaxon.marvin.common.UserSettings;
import chemaxon.marvin.sketch.SketchParameterConstants;
import main.java.Utilities.JSUtil;

/**
 * JPanel object containing the main GUI for interacting with MarvinSketch in
 * Java or JavaScript.
 */
@SuppressWarnings("serial")
public class MarvinPanel extends JPanel {

	/**
	 * api id for allowed domains in JavaScript
	 * 
	 */
	private static String apiID = "2d2e4f98e04447babfbef7ae1e830756";

	private static int defaultWidth = 900;

	private static int defaultHeight = 500;

	/**
	 * the Marvin application, either Java or JavaScript
	 */
	private static MSketchPane marvinInstance;

	/**
	 * singleton instance of this class
	 */
	private static MarvinPanel instance;

	/**
	 * run after scripts are asynchronously added by jQuery
	 * 
	 */
	private static Runnable whenChemicalizeCreated;

	/**
	 * the name of the div we are using for Marvin; initially in document.body, but
	 * when the JFrame is added, this div is moved into it.
	 */
	private static String marvinDiv = "jbfmarvindiv";

	final static int STATE_UNITIALIZED = 0;
	final static int STATE_CHEMICALIZED = 1;
	final static int STATE_EDITORLOADED = 2;

	static int state = STATE_UNITIALIZED;

	private static JLabel labelWorking;

	private static Container marvinAppPanel;

	private static Object myclass = /**@j2sNative C$ || */null;

	private static void setupMarvinJS() {

		// JavaScript only

		// Add the div that Marvin JS will be placed into.

		// Add the Chemicalize scripts to the page,
		// running whenChemicalizeCreated only when ready.
		
		String serverScript = "https://marvinjs.chemicalize.com/v1/" + apiID + "/client-settings.js";
		String clientScript = "https://marvinjs.chemicalize.com/v1/client.js";
		String div = "<div style='display:none;width:" + defaultWidth + "px;height:" + defaultHeight + "px' id="
				+ marvinDiv + "></div>";
		System.out.println(serverScript + "\n" + clientScript + "\n" + div);

		@SuppressWarnings("unused")
		Runnable r = new Runnable() {

			@Override
			public void run() {
				state = STATE_CHEMICALIZED;
				if (whenChemicalizeCreated != null)
					whenChemicalizeCreated.run(); 
			}
			
		};

		/**
		 * @j2sNative
		 * 
		 * 			$("body").append(div);
		 */
		{
			// This block of code is never run, because it would only be in Java, but
			// this static code block is JavaScript-only. Just here as an illustration of
			// how the j2sNative annotation works.

		}

		// Using SwingUtilities.invokeLater is necessary to account for 
		// the fact that this static code is run before main() has had a chance to run.

		SwingUtilities.invokeLater(() -> {
			/**
			 * @j2sNative
			 * 
			 * 			$.getScript(serverScript, function() { $.getScript(clientScript, r.run$) });
			 */
		});

	}

	
	static {
		if (JSUtil.isJS) {
			setupMarvinJS();
		}

	}

	private MarvinPanel() {
		// private constructor only
	}

	/**
	 * Public access to a singleton instance.
	 * 
	 * @return the instance
	 */
	public static JPanel createMarvinPanel() {
		if (instance == null) {
			instance = new MarvinPanel();
			if (JSUtil.isJS)
				addPanel(null);
			else
				getMarvinApp(null);
		}
		return instance;
	}

	/**
	 * gets the Marvin application (asynchronously in JavaScript), running a
	 * Runnable when completed.
	 */
	public static void getMarvinApp(Runnable whenReady) {
		// BH 2021.04.26 allows lazy, asynchronous instantiation of Marvin for SwingJS
		if (marvinInstance != null) {
			if (whenReady != null)
				whenReady.run();
			return;
		}
		if (JSUtil.isJS) {
			createMarvinEditorJS(whenReady);
			return;
		}
		
		marvinInstance = new MSketchPane(createUserSettingsJava());
		addPanel(marvinInstance);

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
		
		transferMarvinDivIfYouCanJS();
		
		Consumer<Object> marvinReady = new Consumer<Object>() {

			@Override
			public void accept(Object marvinObject) {
				marvinInstance = (MSketchPane) marvinObject;
				if (labelWorking != null)
					labelWorking.setVisible(false);
				if (whenReady != null)
					whenReady.run();
			}

		};
		try {
			if (labelWorking != null)
				labelWorking.setText("loading Marvin JS...");
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

	public void setVisible(boolean b) {
		super.setVisible(b);
		if (b) {
			getMarvinApp(null);
		}
	}
	
	private static void addPanel(Container marvin) {
		marvinAppPanel = (marvin == null ? new JPanel() : marvin);
		if (marvin == null)
			marvinAppPanel.add(labelWorking = new JLabel("working..."));
		marvinAppPanel.setPreferredSize(new Dimension(defaultWidth, defaultHeight));
		instance.add(marvinAppPanel);
		instance.validate();
		if (JSUtil.isJS) {
			transferMarvinDivIfYouCanJS();
		}
	}

	@SuppressWarnings("unused")
	private static void transferMarvinDivIfYouCanJS() {

		// Transfer the body-based marvinDiv into the frame
		// In SwingJS, the div associated with this panel is panel.ui.domNode 

		Container panel = marvinAppPanel;
		
		String mdiv = "#" + marvinDiv;
		/**
		 * @j2sNative 
		 * var d = $(panel.ui.domNode);
		 * var m = $(mdiv);
		 * d[0] && m.parent().is($("body")) && d.append(m.show());
		 */
		return;
	}

	/**
	 * The only method we are implementing here. Note that the JavaScript interface
	 * is different from the Java one.
	 * 
	 * @param mol
	 */
	public static void setMoleculeByName(String mol) {
		
		Object c = myclass ;
		getMarvinApp(() -> {
			/**
			 * @j2sNative 
			 * 
			 *   c.marvinInstance.importStructure("name", mol);
			 */
			{
				marvinInstance.setMol(mol);
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
	private static UserSettings createUserSettingsJava() {
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
				frame.pack();					
				frame.setVisible(true);
				getMarvinApp(() -> {
					setMoleculeByName("Glycyl-Alanine");
				}); 
			}

		};
		if (!JSUtil.isJS || state == STATE_CHEMICALIZED)
			whenChemicalizeCreated.run();
	}
}
