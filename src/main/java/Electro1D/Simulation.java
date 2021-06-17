package main.java.Electro1D;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.text.DecimalFormat;
import java.util.Vector;

import javax.swing.JPanel;

import javajs.async.SwingJSUtils.StateHelper;
import javajs.async.SwingJSUtils.StateMachine;

/**
 * @author Bader AlHarbi
 * Simulation class to initiate the simulation panel GUI
 */
public class Simulation extends JPanel implements Runnable {
    /**
	 * 
	 */
	private static final long serialVersionUID = 4599259684085322211L;
	private final int numOfStds = 7;
    Thread runner;
    Electrophoresis parent;
    int pause;
    float animationModifier;
    float modifier;
    boolean addInfo;
    Protein stdSamples[];
    Vector<Protein> well3proteins;
    Vector<Protein> well4proteins;
    Vector<Protein> well5proteins;
    Vector<Protein> well6proteins;
    Protein sample1;
    Protein sample2;
    Protein dye1;
    Protein dye2;
    Protein dye3;
    Protein dye4;
    Protein dye5;
    Protein dye6;
    Sample stdSample;
    Sample sampSample1;
    Sample sampSample2;
    
    Sample well3samp;
    Sample well4samp;
    Sample well5samp;
    Sample well6samp;
    
    Pipette pipette;
    protected int border;
    protected int baseX;
    protected int baseY;
    protected int baseHeight;
    protected int baseWidth;
    protected int topX;
    protected int topY;
    protected int topHeight;
    protected int topWidth;
    protected int bottomEdge;
    protected int rightEdge;
    protected int leftEdge;
    protected int plateX;
    protected int plateY;
    protected int plateHeight;
    protected int plateWidth;
    protected int plateBottom;
    protected int plateRtEdge;
    protected int topOpeningX;
    protected int topOpeningY;
    protected int topOpeningHeight;
    protected int topOpeningWidth;
    protected int wellOpening1X;
    protected int wellOpening1Y;
    protected int wellOpening1Height;
    protected int wellOpening1Width;
    protected int wellOpening2X;
    protected int wellOpening2Y;
	protected int wellOpening2Height;
    protected int wellOpening2Width;
    //These are the same for all the wells
    protected int wellOpeningY;
    protected int wellOpeningHeight;
    protected int wellOpeningWidth;
    
    protected int wellOpening3X;
    protected int wellOpening4X;
    protected int wellOpening5X;
    protected int wellOpening6X;
    
    protected int wellBottom;
    protected int halfWellWidth;
    protected int totalElutionDist;
    protected float scaleFactor;
    int ratioModifier;
    int divStart;
    int divXLine;
    int divLabelX;
    int charHalfHeight;
    int charHeight;
    int scaleDivs[];
    int scaleHalfDivs[];
    String Jlabels[];
    FontMetrics fm;
    Font font;
    int gelLabelX;
    int gelLabelY;
    String gelLabel;
    int cellLabelY;
    int posProbeX;
    int posProbeY;
    int probeWidth;
    int probeHeight;
    int negProbeX;
    int negProbeY;
    int posProbeCenterX;
    int negProbeCenterX;
    int polarityPlusHorizontalX1;
    int polarityPlusHorizontalX2;
    int polarityNegHorizontalY;
    int polarityPlusVerticalY1;
    int polarityPlusVerticalY2;
    int polarityNegHorizontalX1;
    int polarityNegHorizontalX2;
    int polarityPlusY;
    int endPosX;
    int endPosY;
    int endNegX;
    int endNegY;
    int endWidth;
    int endHeight;
    int posLineX;
    int powerLineWidth;
    int negLineX;
    int posLineHeight;
    String proteinName;
    String proteinMW;
    String proteinDist;
    String relMigration;
    private Image offScreenImage;
    private Graphics offScreenGraphics;
    boolean addSampleFlag1;
    boolean addSampleFlag2;
    boolean addSampleFileFlag;
    boolean runSampleFlag;
    boolean imageCreated;
    boolean stopAnimation;
    boolean notAtBottom;
    boolean runExperiment;
    int notLoaded;
    int loading;
    int loaded;
    int samp1LoadState;
    int samp2LoadState;
    int sampFileLoadState;
    int stdLoadState;
    boolean noLoadError;
    protected DecimalFormat twoDigits;
	private StateHelper stateHelper;
	private Acrylamide gel;

    /**
     * constructor that take instant of the Electro1D parent class
     *
     * @param electrophoresis
     */
    Simulation(Electrophoresis electrophoresis) {
        this.setPreferredSize(new Dimension(600, 450));//450, 450: i think it is 550, 450
        animationModifier = 1.0F;
        modifier = 1.0F;
        stdSamples = new Protein[7];
        sample1 = new Protein();
        sample2 = new Protein();
        dye1 = new Protein();
        dye2 = new Protein();
        stdSample = new Sample();
        sampSample1 = new Sample();
        sampSample2 = new Sample();
        well3samp = new Sample();
        well4samp = new Sample();
        well5samp = new Sample();
        well6samp = new Sample();
        //well 3 sample declaration
        pipette = new Pipette();
        ratioModifier = 10;
        scaleDivs = new int[7];
        scaleHalfDivs = new int[13];
        Jlabels = new String[7];
        gelLabel = "notSet";
        powerLineWidth = 3;
        proteinName = "notSet";
        proteinMW = "0.0";
        proteinDist = "0 mm";
        relMigration = "0.0";
        runExperiment = true;
        loading = 1;
        loaded = 2;
        samp1LoadState = notLoaded;
        samp2LoadState = notLoaded;
        sampFileLoadState = notLoaded;
        stdLoadState = notLoaded;
        parent = electrophoresis;
        Jlabels[0] = "0";
        Jlabels[1] = "1";
        Jlabels[2] = "2";
        Jlabels[3] = "3";
        Jlabels[4] = "4";
        Jlabels[5] = "5";
        Jlabels[6] = "6";
        twoDigits = new DecimalFormat("0.00");

        MouseClickListener msl = new MouseClickListener();
        this.addMouseListener(msl);
    }

    /**
     * start thread
     */
    public void start() {
        if (runner == null) {
            runner = new Thread(this);
            runner.start();
        }
    }

    /**
     * interrupt the running thread
     */
    public void stop() {
        if (runner != null) {
            runner.interrupt();
            runner = null;
        }
    }

    /**
     * paintData(Graphics g)
     * draw protein info on the simulation panel
     *
     * @param g
     */
    private void paintData(Graphics g) {
        g.setColor(Color.black);
        int i = charHeight - 3;
        int charSpacing = (int) (0.9 * charHeight);
        if (noLoadError) {
            i += charHeight * 2;
            g.drawString("Add Standard  & Sample", plateX, i);
            noLoadError = false;
        } else {
            g.drawString(proteinName, plateX, i);
            i += charSpacing;
            g.drawString(proteinMW, plateX, i);
            i += charSpacing;
            g.drawString(proteinDist, plateX, i);
            i += charSpacing;
            g.drawString(relMigration, plateX, i);
        }
        addInfo = false;
    }

    /**
     * start the simulation on the gel panel , the protein bands moves after invoking this method
     *
     * @param aprotein is an array of standard proteins (known)
     * @param protein1 is a unknown protein for well 1 (sample)
     * @param protein2 is a unknown protein for well 2
     * @param protein3 is a dye
     */
    public void startRun(Protein aprotein[], Protein protein1, Protein protein2, 
                         Protein[] dyes) {
        stopRun();
        if (stdLoadState == notLoaded || samp1LoadState == notLoaded) {//|| samp2LoadState == notLoaded
            addInfo = true;
            noLoadError = true;
            repaint();
            return;
        }
        stdSamples = aprotein;
        sample1 = protein1;
        sample2 = protein2;
        dye1 = dyes[0];
        dye2 = dyes[1];
        dye3 = dyes[2];
        dye4 = dyes[3];
        dye5 = dyes[4];
        dye6 = dyes[5];
        int i = 0;
        do {
            if (stdSamples[i].selected) {
                stdSamples[i].setWidth(wellOpening1Width);
                stdSamples[i].setStartPosition(wellOpening1X, wellBottom);
                stdSamples[i].setMaxPosition(plateBottom);
                stdSamples[i].SetHostScaleFactor(scaleFactor);
            }
        } while (++i < 7);
        if(well3proteins != null) {
        	for(int x = 0; x < well3proteins.size(); x++) {
        		well3proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well3proteins.elementAt(x).setStartPosition(wellOpening3X, wellBottom);
        		well3proteins.elementAt(x).setMaxPosition(plateBottom);
        		well3proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
        	dye3.setWidth(wellOpeningWidth);
            dye3.setStartPosition(wellOpening3X, wellBottom);
            dye3.setMaxPosition(plateBottom);
            dye3.SetHostScaleFactor(scaleFactor);
        }
        if(well4proteins != null) {
        	for(int x = 0; x < well4proteins.size(); x++) {
        		well4proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well4proteins.elementAt(x).setStartPosition(wellOpening4X, wellBottom);
        		well4proteins.elementAt(x).setMaxPosition(plateBottom);
        		well4proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
        	dye4.setWidth(wellOpeningWidth);
            dye4.setStartPosition(wellOpening4X, wellBottom);
            dye4.setMaxPosition(plateBottom);
            dye4.SetHostScaleFactor(scaleFactor);
        }
        if(well5proteins != null) {
        	for(int x = 0; x < well5proteins.size(); x++) {
       			well5proteins.elementAt(x).setWidth(wellOpeningWidth);
       			well5proteins.elementAt(x).setStartPosition(wellOpening5X, wellBottom);
       			well5proteins.elementAt(x).setMaxPosition(plateBottom);
       			well5proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
       		}
       		dye5.setWidth(wellOpeningWidth);
       		dye5.setStartPosition(wellOpening5X, wellBottom);
       		dye5.setMaxPosition(plateBottom);
       		dye5.SetHostScaleFactor(scaleFactor);
        }
        if(well6proteins != null) {
        	for(int x = 0; x < well6proteins.size(); x++) {
        		well6proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well6proteins.elementAt(x).setStartPosition(wellOpening6X, wellBottom);
        		well6proteins.elementAt(x).setMaxPosition(plateBottom);
        		well6proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
        	dye6.setWidth(wellOpeningWidth);
            dye6.setStartPosition(wellOpening6X, wellBottom);
            dye6.setMaxPosition(plateBottom);
            dye6.SetHostScaleFactor(scaleFactor);
        }
        sample1.setWidth(wellOpening2Width);
        sample1.setStartPosition(wellOpening2X, wellBottom);
        sample1.setMaxPosition(plateBottom);
        sample1.SetHostScaleFactor(scaleFactor);
        
        dye1.setWidth(wellOpening1Width);
        dye1.setStartPosition(wellOpening1X, wellBottom);
        dye1.setMaxPosition(plateBottom);
        dye1.SetHostScaleFactor(scaleFactor);
        
        dye2.setWidth(wellOpening2Width);
        dye2.setStartPosition(wellOpening2X, wellBottom);
        dye2.setMaxPosition(plateBottom);
        dye2.SetHostScaleFactor(scaleFactor);         
        
        stdSample.setRatio(0);
        sampSample1.setRatio(0);
        //sampSample2.setRatio(0);
        well3samp.setRatio(0);
        well4samp.setRatio(0);
        well5samp.setRatio(0);
        well6samp.setRatio(0);
        
        stdSample.drawSwitch(true);
        sampSample1.drawSwitch(true);
        //sampSample2.drawSwitch(true);
        well3samp.drawSwitch(true);
        well4samp.drawSwitch(true);
        well5samp.drawSwitch(true);
        well6samp.drawSwitch(true);
        
        stdSample.empty();
        sampSample1.empty();
        //sampSample2.empty();
        well3samp.empty();
        well4samp.empty();
        well5samp.empty();
        well6samp.empty();
        
        ResetFlags();
        runSampleFlag = true;
        stdLoadState = notLoaded;
        samp1LoadState = notLoaded;
        //samp2LoadState = notLoaded;
        sampFileLoadState = notLoaded;
        setPause("elute");
        start();
    }

    /**
     * Stop the simulation
     */
    public void stopRun() {
        stopAnimation = true;
        if (stateHelper != null)
        	stateHelper.interrupt();
        stop();
    }

    /**
     * calculate the dimension of the simulation panel, the location of the
     * proteins bands relative to other panel edges
     */
    private void calcDimensions() {
        int i1 = 0;
        int j1 = 0;
        int k1 = 0;
        int i2 = 0;
        int j2 = 0;
        int k2 = 0;
        int i3 = 0;
        int j3 = 0;
        int k3 = 0;
        int i4 = 0;
        int j4 = 0;
        int k4 = 0;
        byte b1 = 2;
        byte b2 = 4;
        float f = 60.0F;
        bottomEdge = getSize().height - 2;
        rightEdge = getSize().width - 2;
        i1 = rightEdge / 2;
        border = getSize().width / 32;//16
        j3 = border / 2;
        k3 = border + border;
        j1 = bottomEdge / 8;
        k1 = bottomEdge / 10;
        i2 = rightEdge / 6;
        j2 = rightEdge / 18;
        baseX = leftEdge + border;
        baseY = bottomEdge - border - j1;
        baseHeight = j1;
        baseWidth = rightEdge - k3;
        topX = leftEdge + border;
        topY = border + j1 -20;//-20 added TB
        topHeight = j1;
        topWidth = rightEdge - k3;
        i3 = baseHeight / 4 * 3 + baseY;
        k2 = topY + topHeight / 4;
        plateX = i1 - i2 - i2 - 45;//had no -45
        plateY = k2;
        plateHeight = i3 - plateY;
        plateWidth = i2 * 5;//was *4
        plateBottom = plateY + plateHeight;
        plateRtEdge = plateX + plateWidth;
        topOpeningX = plateX + j3;
        topOpeningY = plateY;
        topOpeningHeight = j3;
        topOpeningWidth = plateWidth - border;
        wellOpening1X = topOpeningX + border;
        wellOpening1Y = topOpeningY + topOpeningHeight/3;//added /2 and parenthesis
        wellOpening1Height = k3;
        wellOpening1Width = i2/2;
        wellOpening2Y = wellOpening1Y;
        wellOpening2Height = wellOpening1Height;
        wellOpening2Width = wellOpening1Width;
        wellOpeningY = wellOpening1Y;
        wellOpeningHeight = wellOpening1Height;
        wellOpeningWidth = wellOpening1Width;
        //wellOpening2X = i1 + (i1 - (wellOpening1X + wellOpening1Width));
        halfWellWidth = wellOpening1Width / 2;
        int nextWell = halfWellWidth + wellOpening1Width + 4;
        
        wellOpening2X = wellOpening1X + nextWell ;
        //new Wells
        wellOpening3X = wellOpening2X + nextWell;
        wellOpening4X = wellOpening3X + nextWell;
        wellOpening5X = wellOpening4X + nextWell;
        wellOpening6X = wellOpening5X + nextWell;
        
        wellBottom = wellOpening1Y + wellOpening1Height;
        halfWellWidth = wellOpening1Width / 2;
        totalElutionDist = plateBottom - wellBottom;
        i4 = plateBottom - wellBottom;
        j4 = i4 / 6;
        k4 = i4 / 12;
        int i5 = wellBottom;
        int j5 = wellBottom;
        int k5 = 0;
        do {
            scaleDivs[k5] = i5;
            i5 += j4;
        } while (++k5 < 7);
        k5 = 0;
        do {
            scaleHalfDivs[k5] = j5;
            j5 += k4;
        } while (++k5 < 13);
        divStart = plateRtEdge - b1;
        divXLine = divStart + b2;
        divLabelX = divStart + fm.charWidth('0');
        charHalfHeight = fm.getAscent() / 8; // DPH2;
        charHeight = fm.getHeight();
        scaleFactor = f / totalElutionDist;
        gelLabelX = baseX + b1;
        gelLabelY = baseY + baseHeight - b1;
        cellLabelY = baseY + baseHeight + charHeight;
        negProbeX = topX;
        negProbeY = topY - k1;
        probeWidth = j2/2+4;//had no /2+4
        posProbeX = baseX + baseWidth - probeWidth;
        posProbeY = baseY - k1;
        probeHeight = topY - negProbeY - b1 * 2;
        negProbeCenterX = negProbeX + probeWidth / 2;
        posProbeCenterX = posProbeX + probeWidth / 2;
        negLineX = negProbeCenterX - 1;
        posLineX = posProbeCenterX - 1;
        posLineHeight = posProbeY;
        polarityNegHorizontalX1 = negProbeCenterX - 2;
        polarityNegHorizontalX2 = negProbeCenterX + 2;
        polarityPlusHorizontalX1 = posProbeCenterX - 2;
        polarityPlusHorizontalX2 = posProbeCenterX + 2;
        polarityNegHorizontalY = negProbeY + probeHeight / 2;
        polarityPlusVerticalY1 = posProbeY + probeHeight / 2 - 2;
        polarityPlusVerticalY2 = posProbeY + probeHeight / 2 + 2;
        polarityPlusY = posProbeY + probeHeight / 2;
        endWidth = probeWidth / 3;
        endPosX = negProbeCenterX - endWidth / 2;
        endPosY = negProbeY + probeHeight - 2;
        endNegX = posProbeCenterX - endWidth / 2;
        endNegY = posProbeY + probeHeight - 2;
        endHeight = probeHeight / 2;
    }

    /**
     * pause the simulation
     *
     * @param string determines the animation modifier
     */
    public void setPause(String string) {
        byte b = 100;
        float f1 = 2.0F;
        float f2 = 4.0F;
        float f3 = 1.8F;
        float f4 = 2.5F;
        float f5 = 3.5F;
        if (string == "elute")
            modifier = f1;
        else if (string == "fill")
        	modifier = f2;
        else if (string.compareTo("Slow") == 0)
            animationModifier = f3;
        else if (string.compareTo("Moderate") == 0)
            animationModifier = f4;
        else if (string.compareTo("Fast") == 0)
            animationModifier = f5;
        pause = (int) ((float) b / modifier / animationModifier);
    }

    /**
     * draw protein band
     *
     * @param g
     */
    private void drawCell(Graphics g) {
        g.setColor(Color.black);
        g.drawRect(0, 0, rightEdge, bottomEdge);
        g.setColor(Color.cyan);
        g.fillRect(baseX, baseY, baseWidth, baseHeight);
        g.setColor(Color.black);
        g.drawRect(baseX, baseY, baseWidth, baseHeight);
        g.setColor(Color.red);
        g.fillRect(posLineX, 0, powerLineWidth, posLineHeight);
        g.setColor(Color.cyan);
        g.fillRect(topX, topY, topWidth, topHeight);
        g.setColor(Color.black);
        g.drawRect(topX, topY, topWidth, topHeight);
        g.setColor(Color.lightGray);
        g.fillRect(plateX, plateY, plateWidth, plateHeight);
        g.setColor(Color.darkGray);
        g.drawLine(plateX, plateY, plateX, plateBottom);
        g.drawLine(plateRtEdge, plateY, plateRtEdge, plateBottom);
        g.setColor(Color.white);
        g.fillRect(topOpeningX, topOpeningY, topOpeningWidth, topOpeningHeight);
        g.fillRect(wellOpening1X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening2X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        //new wells, function needs to be added
        g.fillRect(wellOpening3X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening4X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening5X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening6X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        
        g.setColor(Color.black);
        int i = 0;
        do
            g.drawString(Jlabels[i], divLabelX, scaleDivs[i] + charHalfHeight);
        while (++i < 7);
        i = 0;
        do
            g.drawLine(divStart, scaleHalfDivs[i], divXLine, scaleHalfDivs[i]);
        while (++i < 13);
        g.drawString(gelLabel, gelLabelX, gelLabelY);
        g.setColor(Color.gray);
        g.fillRect(endPosX, endPosY, endWidth, endHeight);
        g.fillRect(endNegX, endNegY, endWidth, endHeight);
        g.setColor(Color.black);
        g.drawRoundRect(negProbeX, negProbeY, probeWidth, probeHeight,
                probeWidth, probeWidth);
        g.fillRoundRect(negProbeX, negProbeY, probeWidth, probeHeight,
                probeWidth, probeWidth);
        g.fillRect(negLineX, 0, powerLineWidth, negProbeY);
        g.setColor(Color.white);
        g.drawLine(polarityNegHorizontalX1, polarityNegHorizontalY,
                polarityNegHorizontalX2, polarityNegHorizontalY);
        g.setColor(Color.red);
        g.drawRoundRect(posProbeX, posProbeY, probeWidth, probeHeight,
                probeWidth, probeWidth);
        g.fillRoundRect(posProbeX, posProbeY, probeWidth, probeHeight,
                probeWidth, probeWidth);
        g.setColor(Color.black);
        g.drawLine(posProbeCenterX, polarityPlusVerticalY1, posProbeCenterX,
                polarityPlusVerticalY2);
        g.drawLine(polarityPlusHorizontalX1, polarityPlusY,
                polarityPlusHorizontalX2, polarityPlusY);
        g.setColor(Color.red);
        g.drawString(" ELECTROPHORESIS CELL", plateX, cellLabelY);
                
    }
    
    /**
     * addStandard()method that's control the addition of the standard proteins,
     * invoked by the Add standard button
     */
    public void addStandard() {
        if (samp1LoadState == loading || samp2LoadState == loading) {
            return;
        }
        stopRun();
        resetWell();
        stdSample.reset();
        stdSample.fill();
        stdSample.setRatio(wellOpening1Height / ratioModifier);
        stdSample.setXPosition(wellOpening1X);
        stdSample.setWidth(wellOpening1Width);
        stdSample.setYPosition(wellBottom);
        stdSample.setMaxY(wellBottom);
        pipette.setSample(stdSample);
        pipette.setStartXPosition(wellOpening1X + halfWellWidth);
        pipette.setMaxYPosition(wellBottom);
        pipette.setSampleDepth(wellOpening1Height * 2);
        ResetFlags();
        addSampleFlag1 = true;
        stdLoadState = loading;
        setPause("fill");
        start();
    }

	public void addSample() {
        if (stdLoadState == loading || samp2LoadState == loading) {
            return;
        }
        stopRun();
        sampSample1.reset();
        sampSample1.fill();
        sampSample1.setRatio(wellOpening2Height / ratioModifier);
        sampSample1.setXPosition(wellOpening2X);
        sampSample1.setWidth(wellOpening2Width);
        sampSample1.setYPosition(wellBottom);
        sampSample1.setMaxY(wellBottom);
        pipette.setSample(sampSample1);
        pipette.setStartXPosition(wellOpening2X + halfWellWidth);
        pipette.setMaxYPosition(wellBottom);
        pipette.setSampleDepth(wellOpening2Height * 2);
        
        ResetFlags();
        addSampleFlag1 = true;
        samp1LoadState = loading;
        setPause("fill");
        start();
    }
    
    public void addSample2() {
        if (samp1LoadState == loading || stdLoadState == loading) {
            return;
        }
        stopRun();
        sampSample2.reset();
        sampSample2.fill();
        sampSample2.setRatio(wellOpeningHeight / ratioModifier);
        sampSample2.setXPosition(wellOpening3X);
        sampSample2.setWidth(wellOpeningWidth);
        sampSample2.setYPosition(wellBottom);
        sampSample2.setMaxY(wellBottom);
        pipette.setSample(sampSample2);
        pipette.setStartXPosition(wellOpening3X + halfWellWidth);
        pipette.setMaxYPosition(wellBottom);
        pipette.setSampleDepth(wellOpeningHeight * 2);
        
        ResetFlags();
        addSampleFlag2 = true;
        samp2LoadState = loading;
        setPause("fill");
        start();
    }
    
    public void addSampleFromFile(Vector<Protein> proteins, String wellNum) {
    	if (samp1LoadState == loading || stdLoadState == loading) {
            return;
        }
    	switch(wellNum) {
    	case "Well 3":
    		stopRun();
            well3samp.reset();
            well3samp.fill();
            well3samp.setRatio(wellOpeningHeight / ratioModifier);
            well3samp.setXPosition(wellOpening3X);
            well3samp.setWidth(wellOpeningWidth);
            well3samp.setYPosition(wellBottom);
            well3samp.setMaxY(wellBottom);
            pipette.setSample(well3samp);
            pipette.setStartXPosition(wellOpening3X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            ResetFlags();
            well3proteins = proteins;
            updateSpeed(1);
            setAcrylamideEffect(well3proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 4":
    		stopRun();
            well4samp.reset();
            well4samp.fill();
            well4samp.setRatio(wellOpeningHeight / ratioModifier);
            well4samp.setXPosition(wellOpening4X);
            well4samp.setWidth(wellOpeningWidth);
            well4samp.setYPosition(wellBottom);
            well4samp.setMaxY(wellBottom);
            pipette.setSample(well4samp);
            pipette.setStartXPosition(wellOpening4X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            ResetFlags();
            well4proteins = proteins;
            updateSpeed(1);
            setAcrylamideEffect(well4proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 5":
    		stopRun();
            well5samp.reset();
            well5samp.fill();
            well5samp.setRatio(wellOpeningHeight / ratioModifier);
            well5samp.setXPosition(wellOpening5X);
            well5samp.setWidth(wellOpeningWidth);
            well5samp.setYPosition(wellBottom);
            well5samp.setMaxY(wellBottom);
            pipette.setSample(well5samp);
            pipette.setStartXPosition(wellOpening5X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            ResetFlags();
            well5proteins = proteins;
            updateSpeed(1);
            setAcrylamideEffect(well5proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 6":
    		stopRun();
            well6samp.reset();
            well6samp.fill();
            well6samp.setRatio(wellOpeningHeight / ratioModifier);
            well6samp.setXPosition(wellOpening6X);
            well6samp.setWidth(wellOpeningWidth);
            well6samp.setYPosition(wellBottom);
            well6samp.setMaxY(wellBottom);
            pipette.setSample(well6samp);
            pipette.setStartXPosition(wellOpening6X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            ResetFlags();
            well6proteins = proteins;
            updateSpeed(1);
            setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	}
    	
    }
    
    /*
     * resets the wells that files are put into
     */
    private void resetWell() {
		well3proteins = null;
		well4proteins = null;
		well5proteins = null;
		well6proteins = null;
		dye3 = null;
		dye4 = null;
		dye5 = null;
		dye6 = null;
	}
    
    /*
     * updates the speeds for each of the file wells
     * 
     * @param d the speed coefficient that changes with the voltage
     */
    public void updateSpeed(double d){
    	//TODO
    	//I have some form of it working, i need it to fall in between ranges and somehow
    	// calculate a movement value to still fall in those ranges.
    	int mw;
    	double slope = -1.351168070689;
    	double b = 5.130287985031;
    	double speed;
    	/*int mwRange;
    	int mwRemainder; 
    	double rangeTraveled;
    	double speedRange;*/
    	if(well3proteins != null) {
        	for(int x = 0; x < well3proteins.size(); x++) {
        		mw = well3proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well3proteins.get(x).speed = speed * d;
        		if(speed > 0.945288)
        			well3proteins.get(x).speed = .935288;
        		if(speed < 0)
        			well3proteins.get(x).speed *= -1;
        		/*if(mw < 600) {//lighter than dye
        			well3proteins.get(x).speed = d * 0.945288;
        		} else if(mw < 6500){// less than lightest sample, should go further
        			
        			well3proteins.get(x).speed = d * mw / 6500 * 0.921053;
        		} else if(mw < 14296) {
        			well3proteins.get(x).speed = d * mw / 14296 * .6824139999999997;
        		} else if(mw < 17183) {
        			well3proteins.get(x).speed = d * mw / 17183 * .6267209999999997;
        		} else if(mw < 26527) {
        			well3proteins.get(x).speed = d * mw / 26527 * .495244;
        		} else if(mw < 29011) {
        			well3proteins.get(x).speed = d * mw / 29011 * .465244;
        		} else if(mw < 42734) {
        			well3proteins.get(x).speed = d * mw / 42734 * .350872;
        		} else if(mw < 0x1c58b) {
        			well3proteins.get(x).speed = d * mw / 0x1c58b * .048245;
        		} else {
        			well3proteins.get(x).speed = d * .048245;//slowest band
        		}*/
        		//well3proteins.elementAt(x).speed = d * well3proteins.elementAt(x).mw / 10000; //* something to do with the molecular weight
        	}
    	}
    	if(well4proteins != null) {
        	for(int x = 0; x < well4proteins.size(); x++) {
        		mw = well4proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well4proteins.get(x).speed = speed * d;
        		if(speed > 0.945288)
        			well4proteins.get(x).speed = .935288;
        		if(speed < 0)
        			well4proteins.get(x).speed *= -1;
        	}
    	}
    	if(well5proteins != null) {
        	for(int x = 0; x < well5proteins.size(); x++) {
        		mw = well5proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well5proteins.get(x).speed = speed * d;
        		if(speed > 0.945288)
        			well5proteins.get(x).speed = .935288;
        		if(speed < 0)
        			well5proteins.get(x).speed *= -1;
        	}
    	}
    	if(well6proteins != null) {
        	for(int x = 0; x < well6proteins.size(); x++) {
        		mw = well6proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well6proteins.get(x).speed = speed * d;
        		if(speed > 0.945288)
        			well6proteins.get(x).speed = .935288;
        		if(speed < 0)
        			well6proteins.get(x).speed *= -1;
        		
        	}
    	}
    }
    
    /**
     * set the Acrylamide effect
     */
    protected void setAcrylamideEffect(Vector<Protein> protiens) {
        int i = 0;
        do
            if (gel.getConc() > 12D) {
                if (protiens.get(i).mw > 26000)
                    protiens.get(i).SetDecider(gel.suppressor);
                else
                    protiens.get(i).ResetDecider();
            } else if (gel.getConc() > 10D) {
                if (protiens.get(i).mw > 29000)
                    protiens.get(i).SetDecider(gel.suppressor);
                else
                    protiens.get(i).ResetDecider();
            } else if (gel.getConc() > 7.5D) {
                if (protiens.get(i).mw > 40000)
                    protiens.get(i).SetDecider(gel.suppressor);
                else
                    protiens.get(i).ResetDecider();
            } else {
                protiens.get(i).ResetDecider();
            }
        while (++i < protiens.size());
    }

    
    /**
     * set the acrylamide gel properties
     *
     * @param acrylamide acrylamide reference
     */
    public void setAcrylamide(Acrylamide acrylamide) {
        gelLabel = acrylamide.percentGel + " Acrylamide";
        gel = acrylamide;
        if(well3proteins != null)
        	setAcrylamideEffect(well3proteins);
        if(well4proteins != null)
        	setAcrylamideEffect(well4proteins);
        if(well5proteins != null)
        	setAcrylamideEffect(well5proteins);
        if(well6proteins != null)
        	setAcrylamideEffect(well6proteins);
        repaint();
    }

    /**
     * draw graph
     *
     * @param g
     */
    private void drawGraph(Graphics g) {
        g.setColor(Color.black);
        int i = 0;
        do
            g.drawString(Jlabels[i], border, scaleDivs[i] + charHalfHeight);
        while (++i < 7);
    }

    /**
     * paint the protein sample band
     *
     * @param g
     */
    private void paintSample(Graphics g) {
        int i = 0;
        notAtBottom = false;
        dye1.drawProtein(g);
        dye2.drawProtein(g);
        dye3.drawProtein(g);
        dye4.drawProtein(g);
        dye5.drawProtein(g);
        dye6.drawProtein(g);
        i = 0;
        do
            if (stdSamples[i].selected && stdSamples[i].drawProtein(g))
                notAtBottom = true;
        while (++i < 7);
        if(well3proteins != null) {
        	for(int x = 0; x < well3proteins.size(); x++) {
        		if (well3proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well4proteins != null) {
        	for(int x = 0; x < well4proteins.size(); x++) {
        		if (well4proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well5proteins != null) {
        	for(int x = 0; x < well5proteins.size(); x++) {
        		if (well5proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well6proteins != null) {
        	for(int x = 0; x < well6proteins.size(); x++) {
        		if (well6proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if (sample1.drawProtein(g))
            notAtBottom = true;
        if (sample2.drawProtein(g))
        	notAtBottom = true;
        if (!notAtBottom)
            stopRun();
    }

    private final static int SLEEP = 0;
    private final static int PAINT = 1;

	/**
	 * run the thread
	 */
	public void run() {
		Thread.currentThread().setPriority(1);
		System.out.println(runner == Thread.currentThread());
//          while (!stopAnimation) {
//              try {
//                  Thread.sleep(long) pause);
//              } catch (InterruptedException e) {
//              }
//              repaint();
//          }
		stateHelper = new StateHelper(new StateMachine() {

			@Override
			public boolean stateLoop() {
				if (stateHelper.isAlive() && !stopAnimation) {
					switch (stateHelper.getState()) {
					case SLEEP:
						stateHelper.setState(PAINT);
						stateHelper.sleep(pause);
						break;
					case PAINT:
						repaint();
						stateHelper.next(SLEEP);
						break;
					}
				}
				return false;
			}
			

		});
		stateHelper.next(SLEEP);
	}

    /**
     * change the standardized proteins loading status (per each simulation )
     *
     * @param g
     */
    private void paintAddition(Graphics g) {
        if (!pipette.fillWell(g)) {
            if (stdLoadState == loading)
                stdLoadState = loaded;
            else if (samp1LoadState == loading)
                samp1LoadState = loaded;
            //else if (samp2LoadState == loading)
            	//samp2LoadState = loaded;
            else if (sampFileLoadState == loading)
            	sampFileLoadState = loaded;
            stopRun();
        }
    }

    /**
     * reset the animation flags
     */
    private void ResetFlags() {
        runSampleFlag = false;
        addSampleFlag1 = false;
        addSampleFlag2 = false;
        stopAnimation = false;
        notAtBottom = false;
    }

    /**
     * update the graphics (the simulation panel)
     *
     * @param g graphics reference
     */
    public void update(Graphics g) {
        paint(g);
    }

    /**
     * the paint method
     *
     * @param g graphics reference
     */
    public void paint(Graphics g) {
        if (!imageCreated) {
            offScreenImage = createImage(getSize().width, getSize().height);
            Font newFont = new Font("TimesRoman", Font.PLAIN, 9);
            font = getFont();
            fm = getFontMetrics(newFont);//font
            calcDimensions();
            imageCreated = true;
        }
        offScreenGraphics = offScreenImage.getGraphics();
        if (addInfo) {
            offScreenGraphics.setColor(Color.white);
            offScreenGraphics.fillRect(plateX, 1, plateWidth, topY - 5);
            paintData(offScreenGraphics);
            g.drawImage(offScreenImage, 0, 0, this);
            return;
        }
        offScreenGraphics.setColor(Color.white);
        offScreenGraphics.fillRect(0, 0, getSize().width, getSize().height);
        offScreenGraphics.setColor(g.getColor());
        if (runExperiment) {
            drawCell(offScreenGraphics);
            if (runSampleFlag)
                paintSample(offScreenGraphics);
            else if (addSampleFlag1)
                paintAddition(offScreenGraphics);
            else if (addSampleFlag2)
            	paintAddition(offScreenGraphics);
            else if (addSampleFileFlag)
            	paintAddition(offScreenGraphics);
            stdSample.drawSample(offScreenGraphics);
            sampSample1.drawSample(offScreenGraphics);
            //sampSample2.drawSample(offScreenGraphics);
            well3samp.drawSample(offScreenGraphics);
            well4samp.drawSample(offScreenGraphics);
            well5samp.drawSample(offScreenGraphics);
            well6samp.drawSample(offScreenGraphics);
            
        } else
            drawGraph(offScreenGraphics);
        g.drawImage(offScreenImage, 0, 0, this);
    }

    /**
     * inner class handle mouse events when user clicks the protein bands
     */
    class MouseClickListener implements MouseListener {

        @Override
        public void mouseClicked(MouseEvent e) {
            // System.out.println(e + ", i: " + e.getX() + ", j: " + e.getY());
        	Protein protein;
            if (stopAnimation && notAtBottom) {
                for (int k = 0; k < numOfStds; k++) {
                    if (stdSamples[k].matchPosition(e.getX(), e.getY())) {

                        stdSamples[k].relativeMigration = stdSamples[k]
                                .GetDistance() / dye1.GetDistance();
                        proteinName = stdSamples[k].fullName;
                        proteinMW = "MW = "
                                + String.valueOf((int) stdSamples[k].mw);
                        proteinDist = "mm travel = "
                                + twoDigits.format(stdSamples[k].GetDistance());
                        relMigration = "RM = "
                                + twoDigits
                                .format(stdSamples[k].relativeMigration);
                        addInfo = true;
                        repaint();
                        break;
                    }
                }
                if(well3proteins != null) {
                	for(int x = 0; x < well3proteins.size(); x++) {
                		protein = well3proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye3.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = " + String.valueOf((int) protein.mw);
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well4proteins != null) {
                	for(int x = 0; x < well4proteins.size(); x++) {
                		protein = well4proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye3.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = " + String.valueOf((int) protein.mw);
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well5proteins != null) {
                	for(int x = 0; x < well5proteins.size(); x++) {
                		protein = well5proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye3.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = " + String.valueOf((int) protein.mw);
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well6proteins != null) {
                	for(int x = 0; x < well6proteins.size(); x++) {
                		protein = well6proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye3.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = " + String.valueOf((int) protein.mw);
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                
                if (sample1.matchPosition(e.getX(), e.getY())) {
                    proteinName = sample1.name;
                    proteinMW = "MW = tbd";
                    proteinDist = "mm travel = "
                            + twoDigits.format(sample1.GetDistance());
                    relMigration = "RM = "
                            + twoDigits.format(sample1.GetDistance()
                            / dye1.GetDistance());
                    addInfo = true;
                    repaint();
                } else if (dye1.matchPosition(e.getX(), e.getY())
                        || dye2.matchPosition(e.getX(), e.getY())
                        || dye3.matchPosition(e.getX(), e.getY())
                        || dye4.matchPosition(e.getX(), e.getY())
                        || dye5.matchPosition(e.getX(), e.getY())
                        || dye6.matchPosition(e.getX(), e.getY())) {
                    proteinName = dye1.name;
                    proteinMW = "";
                    proteinDist = "mm Travel = "
                            + twoDigits.format(dye1.GetDistance());
                    relMigration = "";
                    addInfo = true;
                    repaint();
                }
            }

        }

        @Override
        public void mouseEntered(MouseEvent arg0) {
            // TODO Auto-generated method stub

        }

        @Override
        public void mouseExited(MouseEvent arg0) {
            // TODO Auto-generated method stub

        }

        @Override
        public void mousePressed(MouseEvent arg0) {
            // TODO Auto-generated method stub

        }

        @Override
        public void mouseReleased(MouseEvent arg0) {
            // TODO Auto-generated method stub

        }

    }
}
