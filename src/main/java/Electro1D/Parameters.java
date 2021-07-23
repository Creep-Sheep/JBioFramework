package main.java.Electro1D;

import java.awt.BorderLayout;
import java.awt.Window;
import java.awt.Color;
import java.awt.Component;
import java.awt.Cursor;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.ItemEvent;
import java.awt.event.ItemListener;
import java.io.File;
import java.util.Vector;

import javax.swing.BorderFactory;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JRadioButton;
import javax.swing.SwingConstants;
import javax.swing.border.Border;

import javajs.async.AsyncFileChooser;
import main.java.Utilities.FileUtils;

/**
 * @author Bader Alharbi updated Swing version the parameters class intiate the
 *         paramerters panels to contole various simulation parametrers the
 *         parameters defulat values are deleared in the Connstants.java
 *         interface
 */

@SuppressWarnings("unused")
public class Parameters extends JPanel {
	/**
	 * 
	 */
	private static final long serialVersionUID = 5982938969814262007L;
	// class attributes
	Protein selectedSample1;
	Protein selectedSample2;
	Acrylamide selectedGel;
	double selectedSpeed;
	JComboBox<String> acrylamide;
	JComboBox<String> sample1;
	JComboBox<String> sample2;
	JComboBox<String> voltages;
	ButtonGroup voltage;
	ButtonGroup speed;

	Color dyeColor;

	Electrophoresis parent;
	Protein stdProteinArray[] = new Protein[Constants.standardIndices.length];

	private void setStandards(Protein... p) {
		for (int i = 0; i < p.length; i++) {
			p[i].name = "Standard #" + (i + 1);
			stdProteinArray[Constants.standardIndices[i]] = p[i];
		}
	}
	
	{
		setStandards(new Protein("", "beta-Galactosidase", "b-gal", 0x1c58b, Color.blue), 
				 new Protein("", "Ovalbumin", "oval", 42734, Color.yellow),
				 new Protein("", "Carbonic Anhydrase", "carb anh", 29011, Color.gray),
				 new Protein("", "Triose Phosphate Isomerase", "TIM", 26527, Color.green),
				 new Protein("", "Myoglobin", "Myo", 17183, Color.magenta),
				 new Protein("", "Lysozyme", "Lyso", 14296, Color.white),
				 new Protein("", "Trypsin Inhibitor", "BPTI", 6500, Color.red) // BH why was this "MassSpec.Trypsin"? 
		);

	}
	
	private Protein getStdProtein(int i) {
		return stdProteinArray[Constants.standardIndices[i]];
	}


	private Protein[] unknowns = new Protein[] {
		new Protein("Unknown #1", "Aconitase", "Acon", 0x14250, Color.black),
		new Protein("Unknown #2", "Conconavalin A", "Con A", 25556, Color.black),
		new Protein("Unknown #3", "Glucose Oxidase", "GO", 63058, Color.black),
		new Protein("Unknown #4", "Neuraminidase", "Neur", 43505, Color.black),
		new Protein("Unknown #5", "Phosphorylase b", "Phos b", 0x172f9, Color.black),
		new Protein("Unknown #6", "Pyruvate Kinase", "Pyr Kin", 56773, Color.black),
		new Protein("Unknown #7", "Ribonuclease A", "Ribo A", 13673, Color.black),
		new Protein("Unknown #8", "Chymotrypsinogen", "Chymo", 23564, Color.black),
		new Protein("Unknown #9", "p-Hydroxybenzoate", "Hydrox", 43939, Color.black),
		new Protein("Unknown #10", "Ribonuclease H", "Ribo H", 16638, Color.black),
	};
	
	double[] unknownSpeeds = new double[] {
			0.151663,
			0.506535,
			0.233075,
			0.345459,
			0.109091,
			0.264865,
			0.695904,
			0.531106,
			0.342453,
			0.636480
	};
	
	private double[] standardSpeeds = new double[] {
			0.048245,
			0.350872,
			0.468143,
			0.495244,
			0.626721,
			0.682414,
			0.921053
	}; 
	
	String[] samples = new String[unknowns.length];

	{
		for (int i = 0; i < unknowns.length; i++)
			samples[i] = unknowns[i].name;
	}
	/**
	 * constructor
	 *
	 * @param electrophoresis
	 */
	Parameters(Electrophoresis electrophoresis) {

		selectedSpeed = Constants.medium;

		// string array, holds unknown proteins names
		// array of proteins for passing to start run

		acrylamide = new JComboBox<String>(Constants.gelPercents);
		sample1 = new JComboBox<String>(samples);
		sample2 = new JComboBox<String>(samples);
		voltages = new JComboBox<String>(Constants.voltageList);
		UnknownListHandler1 unl1 = new UnknownListHandler1();
		UnknownListHandler2 unl2 = new UnknownListHandler2();
		GelPercentageHandler gh = new GelPercentageHandler();
		VoltageListHandler vl = new VoltageListHandler();
		acrylamide.setSelectedItem("7.5%");
		sample2.setSelectedItem("Unknown #2");
		voltages.setSelectedItem(Constants.oneFiftyV);

		sample1.addItemListener(unl1);
		sample2.addItemListener(unl2);
		acrylamide.addItemListener(gh);
		voltages.addItemListener(vl);
		// button groups
		voltage = new ButtonGroup();
		speed = new ButtonGroup();
		// panels

		headerPanel = new JPanel();
		headerSub1 = new JPanel(new GridLayout(1, 3, 1, 1));
		headerSub2 = new JPanel();
		labelPanel1 = new JPanel();
		labelPanel2 = new JPanel();
		dropPanel = new JPanel();
		selectionPanel1 = new JPanel();
		selectionPanel2 = new JPanel();
		standardPanel = new JPanel();
		colorPanel = new JPanel();
		voltagePanel = new JPanel();
		voltageSub1Panel = new JPanel();
		voltageSub2Panel = new JPanel();
		controlPanel = new JPanel();
		colorPanelTop = new JPanel();
		for (int i = 0; i < colorPanels.length; i++)
			colorPanels[i] = new JPanel();
		voltacrPanel = new JPanel();
		resetPanel = new JPanel();
		parent = electrophoresis;

		// create borders subtitles
		Border border = BorderFactory.createTitledBorder("ELECTROPHORESIS PARAMETERS");
		Border border1 = BorderFactory.createTitledBorder("Animation Speed");

		// helper methods
		setPanelsColors();

		setLayout(new GridLayout(3, 1, 2, 2));
		headerPanel.setLayout(new GridLayout(1, 1, 5, 5));
		headerPanel.setBorder(border);

		JRadioButton speed1button = new JRadioButton(Constants.slow, false);
		speed1button.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				setAnimationSpeed(Constants.slow);
			}
		});
		JRadioButton speed2button = new JRadioButton(Constants.moderate, true);
		speed2button.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				setAnimationSpeed(Constants.moderate);
			}
		});
		JRadioButton speed3button = new JRadioButton(Constants.fast, false);
		speed3button.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				setAnimationSpeed(Constants.fast);

			}
		});
		// add to button group to allow one selection only
		speed.add(speed3button);
		speed.add(speed2button);
		speed.add(speed1button);

		headerSub2.add(speed1button);
		headerSub2.add(speed2button);
		headerSub2.add(speed3button);
		headerSub2.setBorder(border1);
		headerSub2.setToolTipText("Affects how quickly the animations run");
		// headerPanel.add(headerSub1);
		headerPanel.add(headerSub2);

		dropPanel.setLayout(new GridLayout(2, 1, 1, 5));
		labelPanel1.setLayout(new GridLayout(1, 2));

		JLabel unknownLabel1 = new JLabel("Well 2");// Unkown Proteins
		unknownLabel1.setToolTipText("Set of unknown samples for well 2");
		labelPanel1.add(unknownLabel1);
		JLabel unknownLabel2 = new JLabel("Well 3");// Unkown Proteins
		unknownLabel2.setToolTipText("Set of unknown samples for well 3");
		labelPanel1.add(unknownLabel2);
		JLabel wellLabel4 = new JLabel("Well 4");
		JLabel wellLabel5 = new JLabel("Well 5");
		JLabel wellLabel6 = new JLabel("Well 6");
		labelPanel1.add(wellLabel4);
		labelPanel1.add(wellLabel5);
		labelPanel1.add(wellLabel6);
		// JLabel percentAcrylamideLabel = new JLabel("% Acrylamide");
		// percentAcrylamideLabel.setToolTipText("Affects the density of the gel");
		// labelPanel1.add(percentAcrylamideLabel);

		JLabel standardsLabel = new JLabel("Standards");
		standardsLabel.setToolTipText("Set of known values for comparison");
		labelPanel2.add(standardsLabel);

		selectionPanel1.setLayout(new GridLayout(3, 3));
		selectionPanel2.setLayout(new GridLayout(1, 2));

		voltagePanel.setLayout(new BorderLayout());
		voltagePanel.setToolTipText("Affects how quickly proteins travel across the gel");
		voltageSub2Panel.setLayout(new GridLayout(1, 4));

		JRadioButton volt1 = new JRadioButton(Constants.fiftyV);
		volt1.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				selectedSpeed = Constants.low;
				setSpeed(selectedSpeed);
			}
		});
		JRadioButton volt2 = new JRadioButton(Constants.hundredV);
		volt2.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent arg0) {
				selectedSpeed = Constants.medium;
				setSpeed(selectedSpeed);
			}
		});
		JRadioButton volt3 = new JRadioButton(Constants.oneFiftyV, true);
		volt3.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				selectedSpeed = Constants.high;
				setSpeed(selectedSpeed);
			}
		});
		JRadioButton volt4 = new JRadioButton(Constants.twoHundredV);
		volt4.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				selectedSpeed = Constants.highX2;
				setSpeed(selectedSpeed);

			}
		});

		voltage.add(volt1);
		voltage.add(volt2);
		voltage.add(volt3);
		voltage.add(volt4);
		Border border3 = BorderFactory.createTitledBorder("Voltage");
		voltageSub2Panel.setBorder(border3);

		voltageSub2Panel.add(volt1);
		voltageSub2Panel.add(volt2);
		voltageSub2Panel.add(volt3);
		voltageSub2Panel.add(volt4);

		voltagePanel.add(voltageSub1Panel, BorderLayout.NORTH);
		voltagePanel.add(voltageSub2Panel, BorderLayout.CENTER);

		voltacrPanel.setLayout(new GridLayout(2, 2));
		voltacrPanel.setBackground(Color.lightGray);
		// add new section for volatages and acrlyamide percentages
		// JPanel voltacrLabel = new JPanel();
		JLabel voltLabel = new JLabel("Voltage");
		JLabel acrLabel = new JLabel("Acrylamide %");
		// voltacrLabel.add(voltLabel);
		// voltacrLabel.add(acrLabel);
		voltacrPanel.add(voltLabel);
		voltacrPanel.add(acrLabel);

		standardPanel.setLayout(new GridLayout(8, 1, 0, 1));
		standardPanel.add(standardsLabel);
		// check boxes

		StandardsListListener sll = new StandardsListListener();
		for (int i = 0; i < standards.length; i++) {
			standards[i] = new JCheckBox(getStdProtein(i).abbr);
			standards[i].addItemListener(sll);
			standardPanel.add(standards[i]);
		}
		// end check boxes

		resetPanel.setLayout(new GridLayout(1, 2, 5, 5));
		resetPanel.setBackground(Color.lightGray);
		JButton resetwells = new JButton("Refill Wells");
		resetwells.setToolTipText("Reset wells with the same samples");
		resetwells.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				parent.resetWells();
			}

		});
		// resetwells.setBackground(Color.orange);
		resetPanel.add(resetwells);
		JButton clearwells = new JButton("Clear Wells");
		clearwells.setToolTipText("Clear the wells");
		clearwells.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				parent.clearWells();
			}

		});
		resetPanel.add(clearwells);

		JPanel tempStandWells = new JPanel();
		JLabel wellsLabel = new JLabel("Select the Well to Add a Sample to", SwingConstants.CENTER);
		JButton addStandard = new JButton("Add Standards");
		addStandard.setToolTipText("Pipette selected standards into well 1");
		addStandard.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				parent.addStandard();

			}
		});
		tempStandWells.setLayout(new GridLayout(2, 1));
		tempStandWells.setBackground(Color.lightGray);
		tempStandWells.add(addStandard);
		tempStandWells.add(wellsLabel);
		dropPanel.add(tempStandWells);
		// dropPanel.add(addStandard);
		helperMethod1();

		JButton addSample = new JButton("Add Sample");
		addSample.setToolTipText("Pipette selected unknown into well 2");
		addSample.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				parent.addSample(stdProteinArray);

			}

		});

		JButton addSample2 = new JButton("Samp2");
		addSample2.setToolTipText("Pipette selected unknown into well 3");
		addSample2.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				parent.addSample2();

			}
		});
		JButton startButton = new JButton("Start");// Start run
		startButton.setToolTipText("Powers on the battery to begin run");
		startButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				// when click start
				parent.startRun(stdProteinArray, selectedSample1, selectedSample2, Constants.dyes);

			}
		});
		JButton stopButton = new JButton("Stop");// Stop Run
		stopButton.setToolTipText("Ends current to stop the run");
		stopButton.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {

				// when click stop
				parent.stopRun();
				parent.setPlotData(stdProteinArray, selectedSample1, Constants.dyes[0]);
			}
		});

		// dropPanel.add(voltacrPanel);
		JPanel contr = new JPanel();
		contr.setLayout(new GridLayout(1, 2, 5, 5));
		contr.setBackground(Color.lightGray);
		JLabel stds = new JLabel("Standards", SwingConstants.CENTER);
		JLabel strt = new JLabel("Start Run", SwingConstants.CENTER);
		JLabel stp = new JLabel("Stop Run", SwingConstants.CENTER);
		// contr.add(stds);
		// contr.add(strt);
		// contr.add(stp);
		// contr.add(addStandard);
		controlPanel.add(voltacrPanel);
		contr.add(startButton);
		contr.add(stopButton);
		controlPanel.add(contr);
		controlPanel.add(resetPanel);
		/*
		 * controlPanel.add(addStandard); controlPanel.add(startButton);
		 * controlPanel.add(stopButton);
		 */
		// higher panel for choosing wells

		for (int i = 2; i <= Constants.wellCount; i++)
			selectionPanel1.add(newFileButton(i));

		// add(headerPanel);
		add(selectionPanel2);
		add(dropPanel);

		// add(voltagePanel);
		// add(voltacrPanel);
		add(controlPanel);

		setStandards();
		selectedGel = Constants.gels[0];
		setSpeed(selectedSpeed);
		selectedSample1 = unknowns[0];
		selectedSample2 = unknowns[1];
	}

	private JButton newFileButton(int i) {
		JButton b = new JButton("Well " + i);
		b.setToolTipText("Select a file to be put in well " + i);
		b.addActionListener(new ActionListener() {

			@Override
			public void actionPerformed(ActionEvent e) {
				if (parent.isReady())
					loadFile(i);
			}
		});
		return b;
	}

	private void helperMethod1() {
		colorPanelTop.setBackground(Color.lightGray);
		colorPanel.setLayout(new GridLayout(8, 1, 1, 3));
		colorPanel.setBackground(Color.lightGray);
		JLabel colorbuffer = new JLabel();
		// colorbuffer.setOpaque(true);
		colorbuffer.setBackground(Color.lightGray);
		// colorPanel.add(colorbuffer);
		colorPanel.add(colorPanelTop);
		
		for (int i = 0; i < colorPanels.length; i++) {
			colorPanels[i].setBackground(getStdProtein(i).color);
			colorPanel.add(colorPanels[i]);
		}

		// selectionPanel1.add(sample1);
		// selectionPanel1.add(sample2);
		// selectionPanel1.add(acrylamide);
		voltacrPanel.add(voltages);
		voltacrPanel.add(acrylamide);

		selectionPanel2.add(standardPanel);
		selectionPanel2.add(colorPanel);
		// dropPanel.add(labelPanel1);
		// THIS IS WHERE THE GRID OF BUTTONS TO ADD GETS ADDED
		// dropPanel.add(resetPanel);
		dropPanel.add(selectionPanel1);
		// dropPanel.add(labelPanel2);
		controlPanel.setLayout(new GridLayout(3, 1, 5, 5));// should be 3, 2, 10, 10

		// create the control panel buttons & use anonymous inner handling
	}

	/**
	 * set the animation speed, take string parameter
	 *
	 * @param s the speed of the animation
	 */
	protected void setAnimationSpeed(String s) {
		parent.setAnimationSpeed(s);
	}

	/**
	 * set the Acrylamide effect
	 */
	protected void setAcrylamideEffect() {
		for (int i = 0; i < stdProteinArray.length; i++) {
			setDecider(stdProteinArray[i], selectedGel);
		}
		setDecider(selectedSample1, selectedGel);
	}

	private void setDecider(Protein p, Acrylamide gel) {
		boolean doSet = (gel.getConc() > 12D ? p.mw > 26000
				: gel.getConc() > 10D ? p.mw > 29000 
				: gel.getConc() > 7.5D && p.mw > 40000);
		if (doSet)
			p.setDecider(gel.suppressor);
		else
			p.resetDecider();
	}

	/**
	 * set the proteins bands speed take double value
	 *
	 * @param d the speed of the protein bands
	 */
	protected void setSpeed(double d) {
		for (int i = 0; i < Constants.wellCount; i++)
			Constants.dyes[i].speed = d;
		for (int i = 0; i < stdProteinArray.length; i++)
			getStdProtein(i).speed = standardSpeeds[i] * d;
		for (int i = 0; i < unknowns.length; i++)
			unknowns[i].speed = unknownSpeeds[i] * d;
		parent.updateSpeed(d, selectedGel);
	}

	public void setStandards() {
		parent.setStandards(stdProteinArray);
	}

	/**
	 * set the parameter panel colors
	 */
	private void setPanelsColors() {

		headerPanel.setBackground(Color.lightGray);
		selectionPanel1.setBackground(Color.lightGray);
		selectionPanel2.setBackground(Color.lightGray);
		standardPanel.setBackground(Color.lightGray);
		voltagePanel.setBackground(Color.lightGray);
		voltageSub1Panel.setBackground(Color.lightGray);
		voltageSub2Panel.setBackground(Color.lightGray);
		controlPanel.setBackground(Color.lightGray);
		labelPanel1.setBackground(Color.lightGray);
		labelPanel2.setBackground(Color.lightGray);
		dropPanel.setBackground(Color.lightGray);

	}

	/**
	 * set default values for acrylamide gel properties
	 */
	public void setDefaults() {
		parent.setAcrylamide(Constants.gels[0]);
		selectedGel = Constants.gels[0];
		setAcrylamideEffect();

	}

	public void loadFile(int wellNum) {
		FileUtils.openFile(this, (file) -> {
			parent.simPanel.loadFile(file, wellNum);
			return null;
		});
	}

	// GUI attributes
	JPanel headerPanel;
	JPanel headerSub1;
	JPanel headerSub2;
	JPanel labelPanel1;
	JPanel labelPanel2;
	JPanel dropPanel;
	JPanel selectionPanel1;
	JPanel selectionPanel2;
	JPanel standardPanel;
	JPanel colorPanel;
	JPanel voltacrPanel;
	JPanel voltagePanel;
	JPanel voltageSub1Panel;
	JPanel voltageSub2Panel;
	JPanel controlPanel;
	JPanel colorPanelTop;
	JPanel resetPanel;
	JCheckBox[] standards = new JCheckBox[7];
	JPanel[] colorPanels = new JPanel[standards.length];
	Vector<Protein> proteins;

	/**
	 * StandardsListListener, inner class to handle events invoked by GUI components
	 * in parameters panel
	 */
	class StandardsListListener implements ItemListener {

		@Override
		public void itemStateChanged(ItemEvent e) {

			Object source = e.getItemSelectable();
			for (int i = 0; i < standards.length; i++) {
				if (source == standards[i]) {
					Protein p = getStdProtein(i);
					p.selected = standards[i].isSelected();
					if (p.selected)
						parent.displayProtein(p);
					break;
				}
			}
		}

	}

	/**
	 * UnknownListHandler, inner class to handle events invoked by GUI components in
	 * parameters panel
	 */
	class UnknownListHandler1 implements ItemListener {

		@Override
		public void itemStateChanged(ItemEvent ev) {
			// Object item = ev.getItem();
			@SuppressWarnings("unchecked")
			JComboBox<String> item = (JComboBox<String>) ev.getSource();
			// "Unknown #1"
			int i = Integer.parseInt(((String) item.getSelectedItem()).substring(9));
			parent.displayProtein(selectedSample1 = unknowns[i - 1]);
		}

	}// end inner class UnknownListHandler

	class UnknownListHandler2 implements ItemListener {

		@Override
		public void itemStateChanged(ItemEvent ev) {
			// Object item = ev.getItem();
			@SuppressWarnings("unchecked")
			JComboBox<String> item = (JComboBox<String>) ev.getSource();
			// "Unknown #1"
			int i = Integer.parseInt(((String) item.getSelectedItem()).substring(9));
			selectedSample2 = unknowns[i - 1];
		}

	}// end inner class UnknownListHandler

	/**
	 * VoltageListHandler, inner class to handle events invoked by GUI components in
	 * parameters panel
	 */
	class VoltageListHandler implements ItemListener {

		@Override
		public void itemStateChanged(ItemEvent ev) {
			// Object item = ev.getItem();
			@SuppressWarnings("unchecked")
			JComboBox<String> item = (JComboBox<String>) ev.getSource();

			switch ((String) item.getSelectedItem()) {
			case Constants.fiftyV:
				selectedSpeed = Constants.low;
				setSpeed(selectedSpeed);
				break;
			case Constants.hundredV:
				selectedSpeed = Constants.medium;
				setSpeed(selectedSpeed);
				break;
			case Constants.oneFiftyV:
				selectedSpeed = Constants.high;
				setSpeed(selectedSpeed);
				break;
			case Constants.twoHundredV:
				selectedSpeed = Constants.highX2;
				setSpeed(selectedSpeed);
				break;

			}
		}

	}// end inner class UnknownListHandler

	/**
	 * gelPercentageHandler, inner class to handle events invoked by GUI components
	 * in parameters panel
	 */
	class GelPercentageHandler implements ItemListener {

		@Override
		public void itemStateChanged(ItemEvent e) {

			@SuppressWarnings("unchecked")
			JComboBox<String> item = (JComboBox<String>) e.getSource();
			String selectedName = (String) item.getSelectedItem();
			for (int i = Constants.gels.length; --i >= 0;) {
				if (Constants.gels[i].percentGel.equals(selectedName)) {
					selectedGel = Constants.gels[i];
					parent.setAcrylamide(Constants.gels[i]);
					selectedGel.setSuppressor(Constants.gels[i].getConc());
					setAcrylamideEffect();
					break;
				}
			}

		}// end inner class gelPercentageHandler

	}

}