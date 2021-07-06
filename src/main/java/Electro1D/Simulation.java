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
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.List;
import java.util.Vector;

import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.TransferHandler;

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
    Vector<Protein> well2proteins;
    Vector<Protein> well3proteins;
    Vector<Protein> well4proteins;
    Vector<Protein> well5proteins;
    Vector<Protein> well6proteins;
    Vector<Protein> well7proteins;
    Vector<Protein> well8proteins;
    Vector<Protein> well9proteins;
    Vector<Protein> well10proteins;
    Protein sample1;
    Protein sample2;
    Protein dye1;
    Protein dye2;
    Protein dye3;
    Protein dye4;
    Protein dye5;
    Protein dye6;
    Protein dye7;
    Protein dye8;
    Protein dye9;
    Protein dye10;
    Sample stdSample;
    Sample sampSample1;
    Sample sampSample2;
    Sample well2samp;
	Sample well3samp;
    Sample well4samp;
    Sample well5samp;
    Sample well6samp;
    Sample well7samp;
    Sample well8samp;
    Sample well9samp;
    Sample well10samp;
    
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
    protected int wellOpening7X;
    protected int wellOpening8X;
    protected int wellOpening9X;
    protected int wellOpening10X;
    
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
	FileInput fi;
	double speed;
	boolean shouldReset;
	boolean paintRedoWells;

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
        dye1 = new Protein();
        dye2 = new Protein();
        dye3 = new Protein();
        dye4 = new Protein();
        dye5 = new Protein();
        dye6 = new Protein();
        dye7 = new Protein();
        dye8 = new Protein();
        dye9 = new Protein();
        dye10 = new Protein();
        stdSample = new Sample();
        sampSample1 = new Sample();
        sampSample2 = new Sample();
        well2samp = new Sample();
        well3samp = new Sample();
        well4samp = new Sample();
        well5samp = new Sample();
        well6samp = new Sample();
        well7samp = new Sample();
        well8samp = new Sample();
        well9samp = new Sample();
        well10samp = new Sample();
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
        fi = new FileInput();
        MouseClickListener msl = new MouseClickListener();
        this.addMouseListener(msl);
        shouldReset = true;
        paintRedoWells = false;
        resetWell();
    
        this.setTransferHandler(new TransferHandler() {
			
			  @Override
			  public boolean canImport(TransferHandler.TransferSupport support) {
				  return true;
			  }


			@Override
			public boolean importData(TransferHandler.TransferSupport support) {
				System.out.println(support.getComponent());
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
		if (stdLoadState == loading || sampFileLoadState == loading) 
            return;
     
		Vector<Protein> proteinTemp;
		if(p.x > wellOpening2X && p.x < wellOpening2X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 2", this);
		}
		if(p.x > wellOpening3X && p.x < wellOpening3X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 3", this);
		}
		if(p.x > wellOpening4X && p.x < wellOpening4X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 4", this);
		}
		if(p.x > wellOpening5X && p.x < wellOpening5X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 5", this);
		}
		if(p.x > wellOpening6X && p.x < wellOpening6X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 6", this);
		}
		if(p.x > wellOpening7X && p.x < wellOpening7X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 7", this);
		}
		if(p.x > wellOpening8X && p.x < wellOpening8X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 8", this);
		}
		if(p.x > wellOpening9X && p.x < wellOpening9X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 9", this);
		}
		if(p.x > wellOpening10X && p.x < wellOpening10X+wellOpeningWidth && p.y > wellOpeningY && p.y < wellOpeningY+wellOpeningHeight) {
			fi.loadFile(f, "Well 10", this);
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
     *
     * @param g
     */
    private void paintData(Graphics g) {
        g.setColor(Color.black);
        int i = charHeight + 17;
        int charSpacing = (int) (0.9 * charHeight);
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
        stdSamples = aprotein;
        sample1 = protein1;
        sample2 = protein2;
        dye1 = dyes[0];
        for(int i = 0; i < stdSamples.length; i++) {
            if (stdSamples[i].selected) {
                stdSamples[i].setWidth(wellOpening1Width);
                stdSamples[i].setStartPosition(wellOpening1X, wellBottom);
                stdSamples[i].setMaxPosition(plateBottom);
                stdSamples[i].SetHostScaleFactor(scaleFactor);
            }
        }
        if(well2proteins != null) {
        	for(int x = 0; x < well2proteins.size(); x++) {
        		well2proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well2proteins.elementAt(x).setStartPosition(wellOpening2X, wellBottom);
        		well2proteins.elementAt(x).setMaxPosition(plateBottom);
        		well2proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
        	dye2 = dyes[1];
        	dye2.setWidth(wellOpeningWidth);
            dye2.setStartPosition(wellOpening2X, wellBottom);
            dye2.setMaxPosition(plateBottom);
            dye2.SetHostScaleFactor(scaleFactor);
        }
        if(well3proteins != null) {
        	for(int x = 0; x < well3proteins.size(); x++) {
        		well3proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well3proteins.elementAt(x).setStartPosition(wellOpening3X, wellBottom);
        		well3proteins.elementAt(x).setMaxPosition(plateBottom);
        		well3proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
        	dye3 = dyes[2];
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
        	dye4 = dyes[3];
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
        	dye5 = dyes[4];
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
            dye6 = dyes[5];
        	dye6.setWidth(wellOpeningWidth);
            dye6.setStartPosition(wellOpening6X, wellBottom);
            dye6.setMaxPosition(plateBottom);
            dye6.SetHostScaleFactor(scaleFactor);
        }
        if(well7proteins != null) {
        	for(int x = 0; x < well7proteins.size(); x++) {
        		well7proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well7proteins.elementAt(x).setStartPosition(wellOpening7X, wellBottom);
        		well7proteins.elementAt(x).setMaxPosition(plateBottom);
        		well7proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
            dye7 = dyes[6];
        	dye7.setWidth(wellOpeningWidth);
            dye7.setStartPosition(wellOpening7X, wellBottom);
            dye7.setMaxPosition(plateBottom);
            dye7.SetHostScaleFactor(scaleFactor);
        }
        if(well8proteins != null) {
        	for(int x = 0; x < well8proteins.size(); x++) {
        		well8proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well8proteins.elementAt(x).setStartPosition(wellOpening8X, wellBottom);
        		well8proteins.elementAt(x).setMaxPosition(plateBottom);
        		well8proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
            dye8 = dyes[7];
        	dye8.setWidth(wellOpeningWidth);
            dye8.setStartPosition(wellOpening8X, wellBottom);
            dye8.setMaxPosition(plateBottom);
            dye8.SetHostScaleFactor(scaleFactor);
        }
        if(well9proteins != null) {
        	for(int x = 0; x < well9proteins.size(); x++) {
        		well9proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well9proteins.elementAt(x).setStartPosition(wellOpening9X, wellBottom);
        		well9proteins.elementAt(x).setMaxPosition(plateBottom);
        		well9proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
            dye9 = dyes[8];
        	dye9.setWidth(wellOpeningWidth);
            dye9.setStartPosition(wellOpening9X, wellBottom);
            dye9.setMaxPosition(plateBottom);
            dye9.SetHostScaleFactor(scaleFactor);
        }
        if(well10proteins != null) {
        	for(int x = 0; x < well10proteins.size(); x++) {
        		well10proteins.elementAt(x).setWidth(wellOpeningWidth);
        		well10proteins.elementAt(x).setStartPosition(wellOpening10X, wellBottom);
        		well10proteins.elementAt(x).setMaxPosition(plateBottom);
        		well10proteins.elementAt(x).SetHostScaleFactor(scaleFactor);
        	}
            dye10 = dyes[9];
        	dye10.setWidth(wellOpeningWidth);
            dye10.setStartPosition(wellOpening10X, wellBottom);
            dye10.setMaxPosition(plateBottom);
            dye10.SetHostScaleFactor(scaleFactor);
        }
        /*
        sample1.setWidth(wellOpening2Width);
        sample1.setStartPosition(wellOpening2X, wellBottom);
        sample1.setMaxPosition(plateBottom);
        sample1.SetHostScaleFactor(scaleFactor);
        */
        dye1.setWidth(wellOpening1Width);
        dye1.setStartPosition(wellOpening1X, wellBottom);
        dye1.setMaxPosition(plateBottom);
        dye1.SetHostScaleFactor(scaleFactor);
        /*
        dye2.setWidth(wellOpening2Width);
        dye2.setStartPosition(wellOpening2X, wellBottom);
        dye2.setMaxPosition(plateBottom);
        dye2.SetHostScaleFactor(scaleFactor);         
        */
        stdSample.setRatio(0);
        //sampSample1.setRatio(0);
        //sampSample2.setRatio(0);
        well2samp.setRatio(0);
        well3samp.setRatio(0);
        well4samp.setRatio(0);
        well5samp.setRatio(0);
        well6samp.setRatio(0);
        well7samp.setRatio(0);
        well8samp.setRatio(0);
        well9samp.setRatio(0);
        well10samp.setRatio(0);
        
        stdSample.drawSwitch(true);
        //sampSample1.drawSwitch(true);
        //sampSample2.drawSwitch(true);
        well2samp.drawSwitch(true);
        well3samp.drawSwitch(true);
        well4samp.drawSwitch(true);
        well5samp.drawSwitch(true);
        well6samp.drawSwitch(true);
        well7samp.drawSwitch(true);
        well8samp.drawSwitch(true);
        well9samp.drawSwitch(true);
        well10samp.drawSwitch(true);
        
        stdSample.empty();
        //sampSample1.empty();
        //sampSample2.empty();
        well2samp.empty();
        well3samp.empty();
        well4samp.empty();
        well5samp.empty();
        well6samp.empty();
        well7samp.empty();
        well8samp.empty();
        well9samp.empty();
        well10samp.empty();
        
        ResetFlags();
        runSampleFlag = true;
        stdLoadState = notLoaded;
        //samp1LoadState = notLoaded;
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
        wellOpening1X = topOpeningX + border;
        wellOpening1Y = topOpeningY + topOpeningHeight/3;//added /2 and parenthesis
        wellOpening1Height = k3;
        wellOpening1Width = i2/3;
        wellOpeningY = wellOpening1Y;
        wellOpeningHeight = wellOpening1Height;
        wellOpeningWidth = wellOpening1Width;
        //wellOpening2X = i1 + (i1 - (wellOpening1X + wellOpening1Width));
        halfWellWidth = wellOpening1Width / 2;
        int nextWell = halfWellWidth + wellOpening1Width;
        
        wellOpening2X = wellOpening1X + nextWell ;
        //new Wells
        wellOpening3X = wellOpening2X + nextWell;
        wellOpening4X = wellOpening3X + nextWell;
        wellOpening5X = wellOpening4X + nextWell;
        wellOpening6X = wellOpening5X + nextWell;
        wellOpening7X = wellOpening6X + nextWell;
        wellOpening8X = wellOpening7X + nextWell;
        wellOpening9X = wellOpening8X + nextWell;
        wellOpening10X = wellOpening9X + nextWell;
        
        
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
        g.fillRect(topOpeningX+2, topOpeningY, topOpeningWidth, topOpeningHeight+5);//not sure if this looks nice
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
        g.fillRect(wellOpening7X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening8X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening9X, wellOpeningY, wellOpeningWidth,
                wellOpeningHeight);
        g.fillRect(wellOpening10X, wellOpeningY, wellOpeningWidth,
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
        stdSample.setXPosition(wellOpening1X);
        stdSample.setWidth(wellOpening1Width);
        stdSample.setYPosition(wellBottom);
        stdSample.setMaxY(wellBottom);
        if(shouldReset) {
        	pipette.setSample(stdSample);
        	pipette.setStartXPosition(wellOpening1X + halfWellWidth);
        	pipette.setMaxYPosition(wellBottom);
        	pipette.setSampleDepth(wellOpening1Height * 2);
        }
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
    	//if (stdLoadState == loading || sampFileLoadState == loading) {
        //    return;
        //}
    	switch(wellNum) {
    	case "Well 2":
    		stopRun();
            well2samp.reset();
            well2samp.fill();
            well2samp.setRatio(wellOpeningHeight / ratioModifier);
            well2samp.setXPosition(wellOpening2X);
            well2samp.setWidth(wellOpeningWidth);
            well2samp.setYPosition(wellBottom);
            well2samp.setMaxY(wellBottom);
            if(shouldReset) {
            	pipette.setSample(well2samp);
            	pipette.setStartXPosition(wellOpening2X + halfWellWidth);
            	pipette.setMaxYPosition(wellBottom);
            	pipette.setSampleDepth(wellOpeningHeight * 2);
            }	
            ResetFlags();
            well2proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well2proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 3":
    		stopRun();
            well3samp.reset();
            well3samp.fill();
            well3samp.setRatio(wellOpeningHeight / ratioModifier);
            well3samp.setXPosition(wellOpening3X);
            well3samp.setWidth(wellOpeningWidth);
            well3samp.setYPosition(wellBottom);
            well3samp.setMaxY(wellBottom);
            if(shouldReset) {
            pipette.setSample(well3samp);
            pipette.setStartXPosition(wellOpening3X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well3proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well3proteins); 
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
            if(shouldReset) {
            pipette.setSample(well4samp);
            pipette.setStartXPosition(wellOpening4X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well4proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well4proteins); 
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
            if(shouldReset) {
            pipette.setSample(well5samp);
            pipette.setStartXPosition(wellOpening5X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well5proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well5proteins); 
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
            if(shouldReset) {
            pipette.setSample(well6samp);
            pipette.setStartXPosition(wellOpening6X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well6proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 7":
    		stopRun();
            well7samp.reset();
            well7samp.fill();
            well7samp.setRatio(wellOpeningHeight / ratioModifier);
            well7samp.setXPosition(wellOpening7X);
            well7samp.setWidth(wellOpeningWidth);
            well7samp.setYPosition(wellBottom);
            well7samp.setMaxY(wellBottom);
            if(shouldReset) {
            pipette.setSample(well7samp);
            pipette.setStartXPosition(wellOpening7X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well7proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 8":
    		stopRun();
            well8samp.reset();
            well8samp.fill();
            well8samp.setRatio(wellOpeningHeight / ratioModifier);
            well8samp.setXPosition(wellOpening8X);
            well8samp.setWidth(wellOpeningWidth);
            well8samp.setYPosition(wellBottom);
            well8samp.setMaxY(wellBottom);
            if(shouldReset) {
            pipette.setSample(well8samp);
            pipette.setStartXPosition(wellOpening8X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well8proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 9":
    		stopRun();
            well9samp.reset();
            well9samp.fill();
            well9samp.setRatio(wellOpeningHeight / ratioModifier);
            well9samp.setXPosition(wellOpening9X);
            well9samp.setWidth(wellOpeningWidth);
            well9samp.setYPosition(wellBottom);
            well9samp.setMaxY(wellBottom);
            if(shouldReset) {
            pipette.setSample(well9samp);
            pipette.setStartXPosition(wellOpening9X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well9proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	case "Well 10":
    		stopRun();
            well10samp.reset();
            well10samp.fill();
            well10samp.setRatio(wellOpeningHeight / ratioModifier);
            well10samp.setXPosition(wellOpening10X);
            well10samp.setWidth(wellOpeningWidth);
            well10samp.setYPosition(wellBottom);
            well10samp.setMaxY(wellBottom);
            if(shouldReset) {
            pipette.setSample(well10samp);
            pipette.setStartXPosition(wellOpening10X + halfWellWidth);
            pipette.setMaxYPosition(wellBottom);
            pipette.setSampleDepth(wellOpeningHeight * 2);
            }
            ResetFlags();
            well10proteins = proteins;
            updateSpeed(1, null);
            //setAcrylamideEffect(well6proteins); 
            addSampleFileFlag = true;
            sampFileLoadState = loading;
            setPause("fill");
            start();
            break;
    	}
    	
    }
    
    /*
     * Keep working on this, harder than expected
     * redoWells resets the wells with the same files, so easy to repeat
     */
    public void redoWells() {
    	shouldReset = false;
    	
    	addStandard();
       	if(well2proteins != null)
    		addSampleFromFile(well2proteins, "Well 2");
    	if(well3proteins != null)
    		addSampleFromFile(well3proteins, "Well 3");
    	if(well4proteins != null)
    		addSampleFromFile(well4proteins, "Well 4");
    	if(well5proteins != null)
    		addSampleFromFile(well5proteins, "Well 5");
    	if(well6proteins != null)
    		addSampleFromFile(well6proteins, "Well 6");
    	if(well7proteins != null)
    		addSampleFromFile(well7proteins, "Well 7");
    	if(well8proteins != null)
    		addSampleFromFile(well8proteins, "Well 8");
    	if(well9proteins != null)
    		addSampleFromFile(well9proteins, "Well 9");
    	if(well10proteins != null)
    		addSampleFromFile(well10proteins, "Well 10");
    	paintRedoWells = true;
    	validate();
    	repaint();
		shouldReset = true;
	}
    
    public void paintReset(Graphics g) {
    	//super.paintComponent(g);
    	g.setColor(Color.blue);
    	g.fillRect(wellOpening1X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	if(well2proteins != null){
    		g.fillRect(wellOpening2X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well3proteins != null){
    		g.fillRect(wellOpening3X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well4proteins != null) {
    		g.fillRect(wellOpening4X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well5proteins != null){
    		g.fillRect(wellOpening5X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well6proteins != null){
    		g.fillRect(wellOpening6X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well7proteins != null){
    		g.fillRect(wellOpening7X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well8proteins != null){
    		g.fillRect(wellOpening8X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well9proteins != null){
    		g.fillRect(wellOpening9X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	if(well10proteins != null){
    		g.fillRect(wellOpening10X, wellOpeningY + wellOpeningHeight - wellOpeningHeight/5, wellOpeningWidth, wellOpeningHeight/5);
    	}
    	
    }
    
    /*
     * resets the wells that files are put into
     */
    private void resetWell() {
    	well2proteins = null;
		well3proteins = null;
		well4proteins = null;
		well5proteins = null;
		well6proteins = null;
		well7proteins = null;
		well8proteins = null;
		well9proteins = null;
		well10proteins = null;
		dye2 = dye1; //setting the dyes to dye1 prevents null exceptions
		dye3 = dye1;
		dye4 = dye1;
		dye5 = dye1;
		dye6 = dye1;
		dye7 = dye1;
		dye8 = dye1;
		dye9 = dye1;
		dye10 = dye1;
		ddNum = 1;
	}
    
    /*
     * updates the speeds for each of the file wells
     * 
     * @param d the speed coefficient that changes with the voltage
     */
    public void updateSpeed(double d, Acrylamide acrgel){
    	speed = d;
    	if(gel == null)
    		gel = acrgel;
    	int mw;
    	double slope;
    	double b;
    	if(gel.getConc() == 7.5) {
    		slope = -1.351168070689;
    		b = 5.130287985031;
    	} else if(gel.getConc() == 10) {
    		slope = -1.26337886495;
    		b = 5.008386491966;
    	} else if(gel.getConc() == 12) {
    		slope = -1.077057455865;
    		b = 4.859468868697;
    	} else {
    		slope = -0.906781981037;
    		b = 4.714783861725;
    	}
    	double speed;
    	/*int mwRange;
    	int mwRemainder; 
    	double rangeTraveled;
    	double speedRange;*/
    	if(well2proteins != null) {
        	for(int x = 0; x < well2proteins.size(); x++) {
        		mw = well2proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well2proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well2proteins.get(x).speed = .95;
        		if(speed < 0)
        			well2proteins.get(x).speed *= -1;
        	}
    	}
    	if(well3proteins != null) {
        	for(int x = 0; x < well3proteins.size(); x++) {
        		mw = well3proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well3proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well3proteins.get(x).speed = .95;
        		if(speed < 0)
        			well3proteins.get(x).speed *= -1;
        	}
    	}
    	if(well4proteins != null) {
        	for(int x = 0; x < well4proteins.size(); x++) {
        		mw = well4proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well4proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well4proteins.get(x).speed = .95;
        		if(speed < 0)
        			well4proteins.get(x).speed *= -1;
        	}
    	}
    	if(well5proteins != null) {
        	for(int x = 0; x < well5proteins.size(); x++) {
        		mw = well5proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well5proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well5proteins.get(x).speed = .95;
        		if(speed < 0)
        			well5proteins.get(x).speed *= -1;
        	}
    	}
    	if(well6proteins != null) {
        	for(int x = 0; x < well6proteins.size(); x++) {
        		mw = well6proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well6proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well6proteins.get(x).speed = .95;
        		if(speed < 0)
        			well6proteins.get(x).speed *= -1;
        		
        	}
    	}
    	if(well7proteins != null) {
        	for(int x = 0; x < well7proteins.size(); x++) {
        		mw = well7proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well7proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well7proteins.get(x).speed = .95;
        		if(speed < 0)
        			well7proteins.get(x).speed *= -1;
        		
        	}
    	}
    	if(well8proteins != null) {
        	for(int x = 0; x < well8proteins.size(); x++) {
        		mw = well8proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well8proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well8proteins.get(x).speed = .95;
        		if(speed < 0)
        			well8proteins.get(x).speed *= -1;
        		
        	}
    	}
    	if(well9proteins != null) {
        	for(int x = 0; x < well9proteins.size(); x++) {
        		mw = well9proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well9proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well9proteins.get(x).speed = .95;
        		if(speed < 0)
        			well9proteins.get(x).speed *= -1;
        		
        	}
    	}
    	if(well10proteins != null) {
        	for(int x = 0; x < well10proteins.size(); x++) {
        		mw = well10proteins.get(x).mw;
        		speed = (Math.log10(mw) - b) / slope;
        		well10proteins.get(x).speed = speed * d;
        		if(speed > 1)
        			well10proteins.get(x).speed = .95;
        		if(speed < 0)
        			well10proteins.get(x).speed *= -1;
        		
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
        updateSpeed(speed, gel);
        /*if(well3proteins != null)
        	setAcrylamideEffect(well3proteins);
        if(well4proteins != null)
        	setAcrylamideEffect(well4proteins);
        if(well5proteins != null)
        	setAcrylamideEffect(well5proteins);
        if(well6proteins != null)
        	setAcrylamideEffect(well6proteins);*/
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
        i = 0;
        do
            if (stdSamples[i].selected && stdSamples[i].drawProtein(g))
                notAtBottom = true;
        while (++i < 7);
        if(well2proteins != null) {
        	dye2.drawProtein(g);
        	for(int x = 0; x < well2proteins.size(); x++) {
        		if (well2proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well3proteins != null) {
            dye3.drawProtein(g);
        	for(int x = 0; x < well3proteins.size(); x++) {
        		if (well3proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well4proteins != null) {
            dye4.drawProtein(g);
        	for(int x = 0; x < well4proteins.size(); x++) {
        		if (well4proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well5proteins != null) {
            dye5.drawProtein(g);
        	for(int x = 0; x < well5proteins.size(); x++) {
        		if (well5proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well6proteins != null) {
            dye6.drawProtein(g);
        	for(int x = 0; x < well6proteins.size(); x++) {
        		if (well6proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }if(well7proteins != null) {
            dye7.drawProtein(g);
        	for(int x = 0; x < well7proteins.size(); x++) {
        		if (well7proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well8proteins != null) {
            dye8.drawProtein(g);
        	for(int x = 0; x < well8proteins.size(); x++) {
        		if (well8proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well9proteins != null) {
            dye9.drawProtein(g);
        	for(int x = 0; x < well9proteins.size(); x++) {
        		if (well9proteins.elementAt(x).drawProtein(g))
        			notAtBottom = true;
        	}
        }
        if(well10proteins != null) {
            dye10.drawProtein(g);
        	for(int x = 0; x < well10proteins.size(); x++) {
        		if (well10proteins.elementAt(x).drawProtein(g))
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
            if(paintRedoWells) 	{
            	paintReset(offScreenGraphics);
            	paintRedoWells = false;
        	}
            stdSample.drawSample(offScreenGraphics);
            sampSample1.drawSample(offScreenGraphics);
            //sampSample2.drawSample(offScreenGraphics);
            well2samp.drawSample(offScreenGraphics);
            well3samp.drawSample(offScreenGraphics);
            well4samp.drawSample(offScreenGraphics);
            well5samp.drawSample(offScreenGraphics);
            well6samp.drawSample(offScreenGraphics);
            well7samp.drawSample(offScreenGraphics);
            well8samp.drawSample(offScreenGraphics);
            well9samp.drawSample(offScreenGraphics);
            well10samp.drawSample(offScreenGraphics);
            
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
                if(well2proteins != null) {
                	for(int x = 0; x < well2proteins.size(); x++) {
                		protein = well2proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye2.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well3proteins != null) {
                	for(int x = 0; x < well3proteins.size(); x++) {
                		protein = well3proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye3.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
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
                			protein.relativeMigration = protein.GetDistance() / dye4.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
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
                			protein.relativeMigration = protein.GetDistance() / dye5.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
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
                			protein.relativeMigration = protein.GetDistance() / dye6.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well7proteins != null) {
                	for(int x = 0; x < well7proteins.size(); x++) {
                		protein = well7proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye6.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well8proteins != null) {
                	for(int x = 0; x < well8proteins.size(); x++) {
                		protein = well8proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye6.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well9proteins != null) {
                	for(int x = 0; x < well9proteins.size(); x++) {
                		protein = well9proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye6.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
                			proteinDist = "mm travel = " + twoDigits.format(protein.GetDistance());
                            relMigration = "RM = " + twoDigits.format(protein.relativeMigration);
                            addInfo = true;
                            repaint();
                            break;
                		}
                	}
                }
                if(well10proteins != null) {
                	for(int x = 0; x < well10proteins.size(); x++) {
                		protein = well10proteins.get(x);
                		if (protein.matchPosition(e.getX(), e.getY())) {
                			protein.relativeMigration = protein.GetDistance() / dye6.GetDistance();
                			proteinName = protein.fullName;
                			proteinMW = "MW = tbd";
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
    public void increaseDDNum() { ddNum++; }


}
