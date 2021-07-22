package main.java.Electro1D;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Graphics2D;
import java.awt.Image;
import java.awt.Point;
import java.awt.RenderingHints;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.Transferable;
import java.awt.datatransfer.UnsupportedFlavorException;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.BitSet;
import java.util.List;
import java.util.Vector;

import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.TransferHandler;

import javajs.async.SwingJSUtils.StateHelper;
import javajs.async.SwingJSUtils.StateMachine;
import main.java.Utilities.GenomeFileParser;
import main.java.Utilities.MessageFrame;

/**
 * @author Bader AlHarbi
 * Simulation class to initiate the simulation panel GUI
 */
public class Simulation extends JPanel implements Runnable {
    protected final static int wellCount = 10;

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
    Protein[] stdSamples;
    @SuppressWarnings("unchecked")
	Vector<Protein>[] wellProteins = new Vector[wellCount + 1];
    Protein[] dyes = new Protein[wellCount + 1];
    Protein sample1;
    Protein sample2;
    Sample stdSample;
    Sample sampSample1;
    Sample sampSample2;
    Sample[] wellSamples = new Sample[wellCount + 1];
    
    Pipette pipette;
    Pipette pipette2;
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
    protected int[] wellOpeningX = new int[wellCount+ 1];
    protected int wellOpening1Height;
    protected int wellOpening1Width;
	protected int wellOpening2Height;
    protected int wellOpening2Width;
    //These are the same for all the wells
    protected int wellOpeningY;
    protected int wellOpeningHeight;
    protected int wellOpeningWidth;
        
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
    int[] scaleDivs;
    int[] scaleHalfDivs;
    String[] Jlabels;
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
    int ddNum;
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
	double speed;
	boolean shouldReset;
	boolean paintRedoWells;
	BitSet bsRedoWell = new BitSet();

    /**
     * constructor that take instant of the Electro1D parent class
     *
     * @param electrophoresis
     */
    @SuppressWarnings("serial")
	Simulation(Electrophoresis electrophoresis) {
        this.setPreferredSize(new Dimension(600, 450));//450, 450: i think it is 550, 450
        animationModifier = 1.0F;
        modifier = 1.0F;
        stdSamples = new Protein[7];
        sample1 = new Protein();
        sample2 = new Protein();
        for (int i = 1; i <= wellCount; i++) {
        	dyes[i] = new Protein();
        	if (i > 1)
        		wellSamples[i] = new Sample();
        }
        stdSample = new Sample();
        sampSample1 = new Sample();
        sampSample2 = new Sample();
        //well 3 sample declaration
        pipette = new Pipette();
        pipette2 = new Pipette();
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
        ddNum = 1;
        MouseClickListener msl = new MouseClickListener();
        this.addMouseListener(msl);
        this.addMouseMotionListener(msl);
        shouldReset = true;
        paintRedoWells = false;
        bsRedoWell.clear();
        resetWell();
    
        this.setTransferHandler(new TransferHandler() {
			
			  @Override
			  public boolean canImport(TransferHandler.TransferSupport support) {
				  return true;
			  }


			@Override
			public boolean importData(TransferHandler.TransferSupport support) {
//				System.out.println("Simulation.importData " + support.getComponent());
				Transferable tr = support.getTransferable();
				DataFlavor[] flavors = tr.getTransferDataFlavors();
				Point loc = null;
				try {
					if(isReady()) {
					for (int i = 0; i < flavors.length; i++) {
						if (flavors[i].isFlavorJavaFileListType()) {
							@SuppressWarnings("unchecked")
							List<File> list = (List<File>) tr.getTransferData(flavors[i]);
							loc = support.getDropLocation().getDropPoint();
							// BH for now we just load one if multiple are picked
							for (int j = 0; j < Math.max(1, list.size()); j++) {
								loadFile(list.get(j), 1, loc);
							}
							return true;
						}
					}
					}
				} catch (UnsupportedFlavorException | IOException e) {
					e.printStackTrace();
				}
				return false;
			}	
			  
		});
	}
	
	public void loadFile(File f, int fileNum, Point p) {
		if (stdLoadState == loading || sampFileLoadState == loading || p.y <= wellOpeningY
				|| p.y >= wellOpeningY + wellOpeningHeight)
			return;
		for (int i = 2; i < 10; i++) {
			if (p.x > wellOpeningX[i] && p.x < wellOpeningX[i] + wellOpeningWidth) {
				loadFile(f, "Well " + i);
				break;
			}
		}
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
     * TODO
     * @param g
     */ 
    private void paintData(Graphics g) {
        g.setColor(Color.black);
        int i = charHeight + 17;
        //int charSpacing = (int) (0.9 * charHeight);
        if (noLoadError) {
            //i += charHeight * 2;
            g.drawString("Add Standard", plateX, i);
            noLoadError = false;
        } else {
        	g.drawString(proteinName, plateX, i);
            //i += charSpacing + 2;
        	
            g.drawString(proteinMW, plateX + 180, i);
            //i += charSpacing + 2;
            
            g.drawString(proteinDist, plateX + 260, i);
            //i += charSpacing + 2;
             
            g.drawString(relMigration, plateX + 370, i);
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
        if (stdLoadState == notLoaded) {//|| samp2LoadState == notLoaded
            addInfo = true;
            noLoadError = true;
            repaint();
            return;
        }
        updateSpeed(speed, gel);
        stdSamples = aprotein;
        sample1 = protein1;
        sample2 = protein2;
        for(int i = 0; i < stdSamples.length; i++) {
            if (stdSamples[i].selected) {
                stdSamples[i].setWidth(wellOpening1Width);
                stdSamples[i].setStartPosition(wellOpeningX[1], wellBottom);
                stdSamples[i].setMaxPosition(plateBottom);
                stdSamples[i].setHostScaleFactor(scaleFactor);
            }
        }
        stdSample.setRatio(0);        
        stdSample.drawSwitch(true);
        stdSample.empty();

        this.dyes[1] = dyes[0];
        this.dyes[1].setWidth(wellOpening1Width);
        this.dyes[1].setStartPosition(wellOpeningX[1], wellBottom);
        this.dyes[1].setMaxPosition(plateBottom);
        this.dyes[1].setHostScaleFactor(scaleFactor);
        for (int i = 2; i <= wellCount; i++) {
        	Vector<Protein> proteins = wellProteins[i];
            if(proteins != null) {
            	for(int x = 0; x < proteins.size(); x++) {
            		Protein p = proteins.elementAt(x);
            		p.setWidth(wellOpeningWidth);
            		p.setStartPosition(wellOpeningX[i], wellBottom);
            		p.setMaxPosition(plateBottom);
            		p.setHostScaleFactor(scaleFactor);
            	}
            	Protein d = this.dyes[i] = dyes[i - 1];
            	d.setWidth(wellOpeningWidth);
                d.setStartPosition(wellOpeningX[i], wellBottom);
                d.setMaxPosition(plateBottom);
                d.setHostScaleFactor(scaleFactor);
            }
            wellSamples[i].setRatio(0);
            wellSamples[i].drawSwitch(true);
            wellSamples[i].empty();
        }
        paintRedoWells = false;
        updateRedo();
        ResetFlags();
        runSampleFlag = true;
        stdLoadState = notLoaded;
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
    
    public boolean isReady() {
    	if (stdLoadState == notLoaded) {//|| samp2LoadState == notLoaded
            addInfo = true;
            noLoadError = true;
            repaint();
            return false;
        }
        return true;
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
        plateX = i1 - i2 - i2 - 63;//had no -45
        plateY = k2;
        plateHeight = i3 - plateY;
        plateWidth = i2 * 5 + 20;//was *4
        plateBottom = plateY + plateHeight;
        plateRtEdge = plateX + plateWidth;
        topOpeningX = plateX + j3;
        topOpeningY = plateY;
        topOpeningHeight = j3;
        topOpeningWidth = plateWidth - border;
        wellOpeningX[1] = topOpeningX + border;
        wellOpeningY = topOpeningY + topOpeningHeight/3;//added /2 and parenthesis
        wellOpening1Height = k3;
        wellOpening1Width = i2/3;
        wellOpeningHeight = wellOpening1Height;
        wellOpeningWidth = wellOpening1Width;
        //wellOpeningX[2] = i1 + (i1 - (wellOpeningX[1] + wellOpening1Width));
        halfWellWidth = wellOpening1Width / 2;
        int nextWell = halfWellWidth + wellOpening1Width;
        
        for (int i = 2; i <= wellCount; i++)
        	wellOpeningX[i] = wellOpeningX[i - 1] + nextWell;
                
        wellBottom = wellOpeningY + wellOpening1Height;
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
        g.fillRect(topOpeningX+2, topOpeningY, topOpeningWidth, topOpeningHeight+5);//not sure if this looks nice
        for (int i = 1; i <= wellCount; i++) {
            g.fillRect(wellOpeningX[i], wellOpeningY, wellOpeningWidth,
                    wellOpeningHeight);        	
        }
        g.setColor(Color.black);
        int i = 0;
        do
            g.drawString(Jlabels[i], divLabelX, scaleDivs[i] + charHalfHeight);
        while (++i < 7);
        i = 0;
        do
            g.drawLine(divStart, scaleHalfDivs[i], divXLine, scaleHalfDivs[i]);
        while (++i < 13);
        //TEXT
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
        //TEXT
        Graphics2D g2 = (Graphics2D)g;
        g2.setRenderingHint(
                RenderingHints.KEY_TEXT_ANTIALIASING,
                RenderingHints.VALUE_TEXT_ANTIALIAS_DEFAULT);
        g2.drawString(" ELECTROPHORESIS CELL", plateX, cellLabelY);
                
    }
    
    /**
     * addStandard()method that's control the addition of the standard proteins,
     * invoked by the Add standard button
     */
    public void addStandard() {
        
        stopRun();
        if(shouldReset)
        	resetWell();
        stdSample.reset();
        stdSample.fill();
        stdSample.setRatio(wellOpening1Height / ratioModifier);
        stdSample.setXPosition(wellOpeningX[1]);
        stdSample.setWidth(wellOpening1Width);
        stdSample.setYPosition(wellBottom);
        stdSample.setMaxY(wellBottom);
        if(shouldReset) {
        	pipette.setSample(stdSample);
        	pipette.setStartXPosition(wellOpeningX[1] + halfWellWidth);
        	pipette.setMaxYPosition(wellBottom);
        	pipette.setSampleDepth(wellOpening1Height * 2);
        }
        ResetFlags();
        addSampleFlag1 = true;
        stdLoadState = loading;
        setPause("fill");
        start();
    }

	public void addSample(Protein[] stds) {
        if (stdLoadState == loading || samp2LoadState == loading) {
            return;
        }
        stdSamples = stds;
        stopRun();
        sampSample1.reset();
        sampSample1.fill();
        sampSample1.setRatio(wellOpening2Height / ratioModifier);
        sampSample1.setXPosition(wellOpeningX[2]);
        sampSample1.setWidth(wellOpening2Width);
        sampSample1.setYPosition(wellBottom);
        sampSample1.setMaxY(wellBottom);
        pipette.setSample(sampSample1);
        pipette.setStartXPosition(wellOpeningX[2] + halfWellWidth);
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
        sampSample2.setXPosition(wellOpeningX[3]);
        sampSample2.setWidth(wellOpeningWidth);
        sampSample2.setYPosition(wellBottom);
        sampSample2.setMaxY(wellBottom);
        pipette.setSample(sampSample2);
        pipette.setStartXPosition(wellOpeningX[3] + halfWellWidth);
        pipette.setMaxYPosition(wellBottom);
        pipette.setSampleDepth(wellOpeningHeight * 2);
        
        ResetFlags();
        addSampleFlag2 = true;
        samp2LoadState = loading;
        setPause("fill");
        start();
    }
    
    public void addSampleFromFile(Vector<Protein> proteins, String wellNum) {
    	//if (stdLoadState == loading || sampFileLoadState == loading) {
        //    return;
        //}
    	int n = Integer.parseInt(wellNum.substring(5));
    	if (n > 1 && n <= wellCount) {
    		stopRun();
            wellSamples[n].reset();
            wellSamples[n].fill();
            wellSamples[n].setRatio(wellOpeningHeight / ratioModifier);
            wellSamples[n].setXPosition(wellOpeningX[n]);
            wellSamples[n].setWidth(wellOpeningWidth);
            wellSamples[n].setYPosition(wellBottom);
            wellSamples[n].setMaxY(wellBottom);
            if(shouldReset) {
            	pipette.setSample(wellSamples[n]);
            	pipette.setStartXPosition(wellOpeningX[n] + halfWellWidth);
            	pipette.setMaxYPosition(wellBottom);
            	pipette.setSampleDepth(wellOpeningHeight * 2);
            }	
            ResetFlags();
            wellProteins[n] = proteins;
            updateSpeed(speed, gel);
            //setAcrylamideEffect(well2proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
    	}
    	
    }
    
    /*
     * Keep working on this, harder than expected
     * redoWells resets the wells with the same files, so easy to repeat
     */
    public void redoWells() {
    	shouldReset = false;
    	
    	addStandard();
    	for (int i = 2; i <= wellCount; i++) {
          	if(wellProteins[i] != null) {
        		addSampleFromFile(wellProteins[i], "Well " + i);
        		bsRedoWell.set(i);
           	}        		
    	}
    	updateSpeed(speed, gel);
    	
    	paintRedoWells = true;
    	validate();
    	repaint();
		shouldReset = true;
	}
    
	public void paintReset(Graphics g) {
		// super.paintComponent(g);
		g.setColor(Color.blue);
		g.fillRect(wellOpeningX[1], wellOpeningY + wellOpeningHeight - wellOpeningHeight / 6, wellOpeningWidth,
				wellOpeningHeight / 6);
		for (int i = 2; i <= wellCount; i++) {
			if (bsRedoWell.get(i)) {
				g.fillRect(wellOpeningX[i], wellOpeningY + wellOpeningHeight - wellOpeningHeight / 6, wellOpeningWidth,
						wellOpeningHeight / 6);
			}
		}
	}
    
    public void updateRedo() {
    	bsRedoWell.clear();
    }
    
    /*
     * resets the wells that files are put into
     */
    private void resetWell() {
    	for (int i = 2; i <= wellCount; i++) {
    		wellProteins[i] = null;
    		dyes[i] = dyes[1];
    	}
		ddNum = 1;
	}
    
    public void clearWells() {
    	resetWell();
    	stdSample.reset();
    	ResetFlags();
    	repaint();
	}
    
	/*
	 * updates the speeds for each of the file wells
	 * 
	 * @param d the speed coefficient that changes with the voltage
	 */
	public void updateSpeed(double d, Acrylamide acrgel) {
		speed = d;
		gel = acrgel;
		int mw;
		double slope;
		double b;
		if (gel.getConc() == 7.5) {
			slope = -1.351168070689;
			b = 5.130287985031;
		} else if (gel.getConc() == 10) {
			slope = -1.26337886495;
			b = 5.008386491966;
		} else if (gel.getConc() == 12) {
			slope = -1.077057455865;
			b = 4.859468868697;
		} else {
			slope = -0.906781981037;
			b = 4.714783861725;
		}
		double speedTemp;
		/*
		 * int mwRange; int mwRemainder; double rangeTraveled; double speedRange;
		 * stdSamples[0].speed = 0.048245000000000003D * d; stdSamples[1].speed =
		 * 0.35087200000000002D * d; stdSamples[2].speed = 0.46814299999999998D * d;
		 * stdSamples[3].speed = 0.49524400000000002D * d; stdSamples[4].speed =
		 * 0.62672099999999997D * d; stdSamples[5].speed = 0.68241399999999997D * d;
		 * stdSamples[6].speed = 0.92105300000000001D * d;
		 */

		for (int i = 2; i <= wellCount; i++) {
			Vector<Protein> proteins = wellProteins[i];
			if (proteins != null) {
				for (int x = 0, n = proteins.size(); x < n; x++) {
					mw = proteins.get(x).mw;
					speedTemp = (Math.log10(mw) - b) / slope;
					proteins.get(x).speed = speedTemp * d;
					if (speedTemp > 1)
						proteins.get(x).speed = .95 * d;
					if (speedTemp < 0)
						proteins.get(x).speed *= -1 * d;
				}
			}
		}
	}
    
    /**
     * set the Acrylamide effect
     */
    protected void setAcrylamideEffect(Vector<Protein> proteins) {
        int i = 0;
        do
            if (gel.getConc() > 12D) {
                if (proteins.get(i).mw > 26000)
                    proteins.get(i).setDecider(gel.suppressor);
                else
                    proteins.get(i).resetDecider();
            } else if (gel.getConc() > 10D) {
                if (proteins.get(i).mw > 29000)
                    proteins.get(i).setDecider(gel.suppressor);
                else
                    proteins.get(i).resetDecider();
            } else if (gel.getConc() > 7.5D) {
                if (proteins.get(i).mw > 40000)
                    proteins.get(i).setDecider(gel.suppressor);
                else
                    proteins.get(i).resetDecider();
            } else {
                proteins.get(i).resetDecider();
            }
        while (++i < proteins.size());
    }

    
    /**
     * set the acrylamide gel properties
     *
     * @param acrylamide acrylamide reference
     */
    public void setAcrylamide(Acrylamide acrylamide) {
        gelLabel = acrylamide.percentGel + " Acrylamide";
        gel = acrylamide;
        updateSpeed(speed, gel);
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
        dyes[1].drawProtein(g);
        i = 0;
        do
            if (stdSamples[i].selected && stdSamples[i].drawProtein(g))
                notAtBottom = true;
        while (++i < 7);
        for (i = 2; i <= wellCount; i++) {
        	Vector<Protein> proteins = wellProteins[i];
            if(proteins != null) {
            	dyes[i].drawProtein(g);
            	for(int x = 0; x < proteins.size(); x++) {
            		if (proteins.elementAt(x).drawProtein(g))
            			notAtBottom = true;
            	}
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
		//System.out.println(runner == Thread.currentThread());
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
            if(paintRedoWells) 	{
            	paintReset(offScreenGraphics);
        	}
            stdSample.drawSample(offScreenGraphics);
            sampSample1.drawSample(offScreenGraphics);
            //sampSample2.drawSample(offScreenGraphics);
            for (int i = 2; i <= wellCount; i++) {
                wellSamples[i].drawSample(offScreenGraphics);            	
            }
        } else {
            drawGraph(offScreenGraphics);
        }
        g.drawImage(offScreenImage, 0, 0, this);
    }

    /**
     * inner class handle mouse events when user clicks the protein bands
     */
    class MouseClickListener extends MouseAdapter {

		@Override
		public void mouseClicked(MouseEvent e) {
			checkMouse(e.getX(), e.getY(), true);
		}
				
		@Override
		public void mouseMoved(MouseEvent e) {
			checkMouse(e.getX(), e.getY(), false);
		}


    }
    public void increaseDDNum() { ddNum++; }

	public void checkMouse(int x, int y, boolean clicked) {
		// BH -- suggestion to think about whether it could work with a mouse move and
		// whether this has to be all after the fact.
		// System.out.println(e + ", i: " + e.getX() + ", j: " + e.getY());
		if (clicked && (!stopAnimation || !notAtBottom))
			return;
		if (sample1.matchPosition(x, y)) {
			announce(sample1, sample1.name, 1);
			return;
		}
		for (int i = 1; i <= wellCount; i++) { /// BH ??? was 6? not wellCount?
			if (dyes[i].matchPosition(x, y)) {
				announce(dyes[i], dyes[i].name, 1);
				return;
			}
		}
		for (int i = 0; i < numOfStds; i++) {
			if (stdSamples[i].matchPosition(x, y)) {
				stdSamples[i].relativeMigration = stdSamples[i].getDistance() / dyes[1].getDistance();
				announce(stdSamples[i], stdSamples[i].fullName, 1);
				return;
			}
		}
		for (int i = 2; i <= wellCount; i++) {
			Vector<Protein> proteins = wellProteins[i];
			if (proteins != null) {
				for (int j = 0, n = proteins.size(); j < n; j++) {
					Protein protein = proteins.get(j);
					if (protein.matchPosition(x, y)) {
						protein.relativeMigration = protein.getDistance() / dyes[i].getDistance();
						announce(protein, protein.fullName, i);
						return;
					}
				}
			}
		}
	}

	public void announce(Protein p, String name, int dyeIndex) {
		proteinName = name;
		proteinMW = "MW = tbd";
		proteinDist = "mm travel = " + twoDigits.format(p.getDistance());
		relMigration = "RM = " + twoDigits.format(p.getDistance() / dyes[dyeIndex].getDistance());
		addInfo = true;
		repaint();
	}

	public void setStandards(Protein[] stds) {
		stdSamples = stds;
	}

	@SuppressWarnings("unused")
	public void loadFile(File f, String wellNum) {
		// BH modal dialog blocks. JOptionPane.showMessageDialog(null, "Proteins Loading");
		String filename = (f == null ? null : f.getName());
		Vector<Protein> proteins = new Vector<>();
		MessageFrame error = GenomeFileParser.loadFile(f, proteins, null, 0);
		if (error == null) {
			addSampleFromFile(proteins, wellNum);
			int n = proteins.size();
			JOptionPane.showMessageDialog(parent.parentFrame, n + " Protein" + (n == 1 ? "" : "s") + " loaded.");
		}

	}


}
