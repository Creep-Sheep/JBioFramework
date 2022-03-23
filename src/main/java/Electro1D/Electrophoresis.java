package main.java.Electro1D;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.GridBagConstraints;
import java.awt.GridBagLayout;
import java.awt.Insets;
//import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.IOException;
import java.util.Vector;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTabbedPane;

//
import main.java.Utilities.BrowserLauncher;
import main.java.Utilities.GenomeFileParser;

/**
 * @author Bader Alharbi Desktop application The Swing version 1D
 *         Electrophoresis simulation,
 */
public class Electrophoresis extends JPanel {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6625659357016475348L;
	JTabbedPane tabPane, tabPane2;
	Parameters paramPanel;
	Simulation simPanel;
	ProteinData dataPanel;
	Plot plotPanel;
	JFrame parentFrame;

	public void Header() {
		// @TODO: figure out where we want to put the help button on E1D
		JPanel headPanel = new JPanel();
		JButton help = new JButton("Help");
		help.setToolTipText("Open Help wiki for Electro1D");
		help.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String url = "http://sourceforge.net/p/jbf/wiki/Electro1D";
				try {
					BrowserLauncher.openURL(url);
				} catch (IOException i) {
					System.err.println(i.getMessage());
				}
			}
		});
		headPanel.add(help);
		super.add(headPanel);
	}

	public Electrophoresis(JFrame parentFrame) {
		super.setPreferredSize(new Dimension(900, 470));
		//550(i think i want 825, 450: good size: 845, 470

    	GenomeFileParser.init();
    	
		this.parentFrame = parentFrame;
	    // to match <div id="testApplet-Electro1D-div"></div> in Electro1D_embedded.html
		this.parentFrame.setName("Electro1D");
		simPanel = new Simulation(this);
		paramPanel = new Parameters(this);
		dataPanel = new ProteinData(this);
		plotPanel = new Plot(this);
		
//        super.setSize(20,35);
		this.setLayout(new GridBagLayout());
		GridBagConstraints c = new GridBagConstraints();
		//this.setLayout(new GridLayout(1, 3, 5, 0));
		// set up left Panel
		
		JPanel tempPanel = new JPanel();
		tempPanel.setLayout(new FlowLayout(FlowLayout.LEFT));
		tempPanel.setPreferredSize(new Dimension(240, 450));
		paramPanel.setPreferredSize(new Dimension(240, 450));
		dataPanel.setPreferredSize(new Dimension(240, 450));
		tabPane = new JTabbedPane();
		tabPane.setPreferredSize(new Dimension(240, 450));
		tabPane.addTab("Parameters", paramPanel);
		tabPane.addTab("ProteinData", dataPanel);
		
		tempPanel.add(tabPane);
		
		// set up right Panel
		JPanel tempPanel2 = new JPanel();
		tempPanel2.setLayout(new FlowLayout(FlowLayout.LEFT));
		tempPanel2.setPreferredSize(new Dimension(650, 450));
		simPanel.setPreferredSize(new Dimension(650, 450));
		plotPanel.setPreferredSize(new Dimension(650, 450));		
		tabPane2 = new JTabbedPane();
		tabPane2.setPreferredSize(new Dimension(650, 450));
		tabPane2.add("Casting Tray ", simPanel);
		tabPane2.add("Plot", plotPanel);
		tempPanel2.add(tabPane2);

//        this.add(headPanel);
		c.gridx = 0;
		c.gridy = 0;
		//this.add(tempPanel, c);//tabPane
		this.add(tabPane, c);
		c.gridx = 1;
		c.gridy = 0;
		c.insets = new Insets(0, 5, 0, 0);// insets gives spacing in order of: top,left,bottom,right
		this.add(tabPane2, c);
		//this.add(tempPanel2, c);//tabPane2
		//JPanel testPanel = new JPanel();
		//this.add(testPanel);
		//testPanel.setVisible(false);
		
		paramPanel.setDefaults();
	}

		

	/**
	 * addStandard() add standards proteins
	 */
	public void addStandard() {

		simPanel.addStandard();
	}

	/**
	 * Stop running the simulation on the gel
	 */
	public void stopRun() {

		simPanel.stopRun();
	}

	/**
	 * display the simulation panel
	 */
	public void displaySim() {

		tabPane.setVisible(true);
	}

	/**
	 * set the acrylamide percentage
	 *
	 * @param acrylamide acrylamide reference
	 */
	public void setAcrylamide(Acrylamide acrylamide) {

		simPanel.setAcrylamide(acrylamide);
	}

	/**
	 * start running the simulation
	 *
	 * @param aprotein is an array of standard proteins (known)
	 * @param protein  is a unknown protein (sample)
	 * @param protein1 is a dye
	 * @param protein2 is a dye
	 */
	public void startRun(Protein aprotein[], Protein protein1, Protein protein2, Protein[] proteins) {
		simPanel.startRun(aprotein, protein1, protein2, proteins);
	}

	/**
	 * setPlotData() set the plot data
	 *
	 * @param stds is an array of standard proteins (known)
	 * @param sample  is a unknown protein (sample)
	 * @param dye is a fast-running leading marker
	 */
	public void setPlotData(Protein stds[], Protein sample, Protein dye) {
		plotPanel.setResults(stds, sample, dye);
	}

	/**
	 * displayData()display the data
	 */
	public void displayData() {
		tabPane2.setVisible(true);

	}

	/**
	 * adding the sample
	 */
	public void addSample(Protein[] stds) {

		simPanel.addSample(stds);
	}

	public void addSample2() {
		
		simPanel.addSample2();
	}
	
	public void addSampleFromFile(Vector<Protein> proteins, int wellNum) {
		simPanel.increaseDDNum();
		simPanel.addSampleFromFile(proteins, wellNum);
	}
	
	public boolean isReady() {
		return simPanel.isReady();
	}
	
	public void paramsetspeed(double d) {
		paramPanel.setSpeed(d);
	}
	
	public void updateSpeed(double d, Acrylamide acrgel) {
		simPanel.updateSpeed(d, acrgel);
	}
	
	public void setStandards(Protein[] stds) {
		simPanel.setStandards(stds);
	}
	
	public void resetWells() {
		simPanel.redoWells();
	}
	
	public void clearWells() {
		simPanel.clearWells();
	}
	
	public int getButtonState() {
		return paramPanel.getButtonState();
	}
	
	/**
	 * configure the animation speed
	 *
	 * @param s the animation speed
	 */
	public void setAnimationSpeed(String s) {
		simPanel.setPause(s);
	}

	/**
	 * displayProtein(Protein protein) display protein info on the plotting panel
	 *
	 * @param protein the protein to display
	 */
	public void displayProtein(Protein protein) {
		dataPanel.displayData(protein);
	}

	static public void main(String[] args) {
		JFrame f = new JFrame();
		f.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		f.add(new Electrophoresis(f));
		f.pack();
		f.setVisible(true);
	}

	

}