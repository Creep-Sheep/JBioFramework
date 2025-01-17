package main.java.Electro2D;/*
 * A 2D simulation of electrophoresis using Swing components.
 */

import java.awt.AWTException;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.Rectangle;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.io.BufferedOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Vector;

import javax.swing.JPanel;

/**
 * Controls the actual movement and placement for the animation frame.
 */
@SuppressWarnings("serial")
public class GelCanvas extends JPanel implements MouseListener {

    private Electro2D electro2D;

    private Vector<IEFProtein> barProteins;
    private Vector<ProteinDot> dotProteins;
    private Vector<IEFProtein> barProteins2;
    private Vector<ProteinDot> dotProteins2;
    private double maxPH = -1;
    private double minPH = -1;
    private double lowAcrylamide;
    private double highAcrylamide;
    private CompIEF comp;
    private static final int VOLTAGE = 50;

    //private Graphics graphic;
    private Rectangle gelCanvasRectangle;
    private Image bufferImage;
    private Graphics bufferImageGraphics;
    private boolean pHLinesNeedToBeDrawn;
    private boolean mWLinesNeedToBeDrawn;
    private boolean redrawPHAndMWLines;
    private boolean indicateProteinPosition;

    private double tenK = 48;
    private double twentyfiveK = 48;
    private double fiftyK = 48;
    private double hundredK = 48;
    private int genDotsRepeats;
    private boolean calculateMW = true;
    private boolean reMWLabel = false;
    private boolean barProteinsStillMoving = true;

    private static int iefRed = 54;
    private static int iefGreen = 100;
    private static int iefBlue = 139;

    private double xLoc;
    private double yLoc;

    private static boolean blink = false;

//    private boolean mousePress = false;
//    private int startX = -1;
//    private int startY = -1;
//    private int stopX = -1;
//    private int stopY = -1;

	private boolean doShrink;

	private boolean doGenDots;

	private boolean doAnimateIEF;

	private boolean doDrawIEF;

    /**
     * Constructs a gel canvas and adds itself as a mouse listener
     *
     * @param e Used to link back to the electro2D that will use the gel canvas
     */
    public GelCanvas(Electro2D e) {
        super();

        electro2D = e;
        addMouseListener(this);
    }

    /**
     * This method is used to ensure that Electro2D.GelCanvas will take up
     * enough space to allow the user to easily see its display.
     *
     * @return the dimension object used by the JFrame to allocate the space for
     * the component
     */
    public Dimension getMinimiumSize() {
        return new Dimension(800, electro2D.getHeight());
    }


    /**
     * Sets up the gel canvas for animating the Electro1D simulation
     */
    public void prepare() {
        /**
         * Make two vectors that will contain the objects that are the image
         * representations of the proteins in gel canvas
         */
        barProteins = new Vector<>();
        dotProteins = new Vector<>();

        /**
         * Set up the static variables in Electro2D.IEFProtein so it knows the pH range
         */
        maxPH = electro2D.getMaxRange();
        minPH = electro2D.getMinRange();
        IEFProtein.setRange(maxPH, minPH, getWidth());

        /**
         * Create the Electro2D.CompIEF object that later will help sort the proteins
         */
        comp = new CompIEF(maxPH, minPH);

        /**
         * Call the next method, which will handle setting up the barProtein
         * vector
         */
        fillBarProteinVector();
    }

    public void fillBarProteinVector() {
        /**
         * Get all the information barProtein vector will need from electro2D
         * into local variable vectors.
         */
        Vector<String> sequenceTitles = electro2D.getSequenceTitles();
        Vector<String> molecularWeights = electro2D.getMolecularWeights();
        Vector<String> pIValues = electro2D.getPiValues();
        Vector<String> sequences = electro2D.getSequences();
        Vector<String> functions = electro2D.getFunctions();

        /**
         * Fill up the barProteins vector
         */
        for (int i = 0; i < sequenceTitles.size(); i++) {

            barProteins.addElement(
                new IEFProtein(
                    new E2DProtein(
                        sequenceTitles.elementAt(i).toString(),
                        Double.valueOf(molecularWeights.elementAt(i).toString()),
                        Double.valueOf(pIValues.elementAt(i).toString()),
                        sequences.elementAt(i).toString(),
                        functions.elementAt(i).toString()
                    ),
                this)
            );
        }

        /**
         * Call the next method, which will sort the elements in barProteins
         */
        long t0 = System.currentTimeMillis();
    	barProteins = comp.sortBarProteins(barProteins);
    	// convert the bar proteins into dot proteins, animation wise
        makeDotProteins();
        System.out.println("GelCanvas.sortBarProteins (ms) " + (System.currentTimeMillis() - t0));
        return;
    }

	public void makeDotProteins() {

		/**
		 * this next for loop goes through each element in the vector that we just
		 * collapsed everything in and retrieves all the proteins that were represented
		 * by each bar in the last animation
		 */
		for (int i = 0, m = barProteins.size(); i < m; i++) {
			IEFProtein p = barProteins.elementAt(i);
			double tempx = p.returnX();
			double tempy = p.returnY();
			Vector<E2DProtein> tempProteins = p.getProtein();
			//  make a protein dot animation for each protein contained in the bar proteins
			for (int j = 0, n = tempProteins.size(); j < n; j++) {
				dotProteins.addElement(new ProteinDot(tempProteins.elementAt(j), this, tempx, tempy + 43));
			}
		}
	}

    /**
     * The prepare2 method is called only when the user wishes to compare
     * two proteome files.  The method performs the same basic steps as
     * the original prepare method cascade, as well as comparing the proteins
     * from the second file to those already contained in the first file.
     * If two proteins are the same, it colors the first file's matching
     * proteins green and removes the proteins from the second file's
     * collection of proteins.
     */
    public void prepare2() {
        Vector<String> sequenceTitles2 = electro2D.getSequenceTitles2();
        Vector<String> molecularWeights2 = electro2D.getMolecularWeights2();
        Vector<String> pIValues2 = electro2D.getPiValues2();
        Vector<String> sequences2 = electro2D.getSequences2();
        Vector<String> functions2 = electro2D.getFunctions2();

        barProteins2 = new Vector<>();
        dotProteins2 = new Vector<>();

        /**
         * compare the sequences of the second file to the sequences of
         * the proteins in the first file
         */
        for (int i = dotProteins.size() - 1; i >= 0; i--) {
            /**
             * color the proteins in the first file red
             */
            dotProteins.elementAt(i).changeColor(Color.red);
            String tempSequence = dotProteins.elementAt(i).getPro().getSequence();
            for (int j = sequences2.size() - 1; j >= 0; j--) {

                /**
                 * if the sequences match, remove the sequence and its
                 * corresponding information from the second file's list of
                 * info and color the protein green in the vector of proteins
                 * from the first file
                 */
                if ((sequences2.elementAt(j)).equals(tempSequence)) {
                    sequences2.remove(j);
                    sequenceTitles2.remove(j);
                    molecularWeights2.remove(j);
                    pIValues2.remove(j);
                    functions2.remove(j);
                    dotProteins.elementAt(i).changeColor(Color.green);
                    break;
                }
            }
        }

        /**
         * Next, make IEF bar proteins out of the proteins on the second list
         * that didn't match the proteins in the first list so that their
         * positions on the gel field can later be determined
         */
        for (int i = 0; i < sequences2.size(); i++) {

            barProteins2.addElement(new IEFProtein(new E2DProtein(
                    (sequenceTitles2.elementAt(i)),
                    ((Double.valueOf(
                            molecularWeights2.elementAt(i)))).doubleValue(),
                    ((Double.valueOf(
                            pIValues2.elementAt(i)))).doubleValue(),
                    sequences2.elementAt(i),
                    functions2.elementAt(i)), this));

        }

        /**
         * Convert the bar proteins into dot proteins and color them all yellow
         * to designate them as being the ones from the second list that did
         * not match.
         */
        int tempx;
        int tempy;
        Vector<E2DProtein> tempProteins;
        ProteinDot tempDot;
        for (int i = 0; i < barProteins2.size(); i++) {
            tempx = barProteins2.elementAt(i).returnX();
            tempy = barProteins2.elementAt(i).returnY();
            tempProteins = barProteins2.elementAt(i).getProtein();

            tempDot = new ProteinDot(tempProteins.elementAt(0), this, tempx, tempy + 43);
            tempDot.changeColor(Color.yellow);
            dotProteins2.addElement(tempDot);
        }
    }

    /**
     * The paintComponent method does the actual drawing when the System calls
     * for the Electro2D.GelCanvas to be set up.
     *
     * @override overrides the paintComponent method of JPanel
     */
    public void paintComponent(Graphics g) {
        /**
         * We then set up a buffer image area so that once we're done painting
         * on it we can transfer what we've drawn to the actual area that the
         * user can see. This reduces flickering.
         */
        if (gelCanvasRectangle == null || bufferImage == null || bufferImageGraphics == null) {
            gelCanvasRectangle = getBounds();
            bufferImage = this.createImage(gelCanvasRectangle.width, gelCanvasRectangle.height);
            bufferImageGraphics = bufferImage.getGraphics();
            bufferImageGraphics.setColor(Color.BLACK);
            bufferImageGraphics.fillRect(0, 0, gelCanvasRectangle.width - 1, gelCanvasRectangle.height - 1);

        }

    	if (doAnimateIEF) {
    		doAnimateIEF = false;
    		animateIEF(g);
    		return;
    	}
    	if (doDrawIEF) {
    		doDrawIEF = false;
    		drawIEF(g);
    		return;
    	}
    	if (doShrink) {
            clearIEF(g);
            drawIEF(g);
            doShrink = false;
            return;
    	}
    	if (doGenDots) {
    		doGenDots = false;
            clearCanvas(g, 1, 47);
            for (int i = 0; i < dotProteins.size(); i++) {
                dotProteins.elementAt(i).changeY();
            }
            if (dotProteins2 != null) {
                for (int j = 0; j < dotProteins2.size(); j++) {
                    dotProteins2.elementAt(j).changeY();
                }
            }
    	}
        if (dotProteins == null) {
            dotProteins = new Vector<>();
        }

        if (dotProteins2 == null) {
            dotProteins2 = new Vector<>();
        }

        // First, clear off any dots left over from the last animation
        clearCanvas(bufferImageGraphics, 2, 49);
        // Then, draw the protein dots
        for (int i = 0; i < dotProteins.size(); i++) {
            dotProteins.elementAt(i).draw(bufferImageGraphics);
        }

        for (int i = 0; i < dotProteins2.size(); i++) {
            dotProteins2.elementAt(i).draw(bufferImageGraphics);
        }

        // update the background
        if (mWLinesNeedToBeDrawn && tenK != 48) {
            redoMWLines();
            drawPHLines();
        }

        // transfer the buffer image to the real canvas
        g.drawImage(bufferImage, 0, 0, this);


        /**
         * Next we check to see if it's time to draw the pH lines by finding if
         * an animation has been run by looking at whether or not the PH values
         * are different from their startig values of -1 as well as checking to
         * see if the Line boolean indicates that the lines have already been
         * drawn.
         */
        if (maxPH != -1 && minPH != -1 && pHLinesNeedToBeDrawn) {
            drawPHLines();
        }

        /**
         * Check to see if the SDS animation has been run, and if it has
         * draw the lines for molecular weight.
         */
        if (mWLinesNeedToBeDrawn) {
            initiateMWLines(g);
            mWLinesNeedToBeDrawn = false;
            redrawPHAndMWLines = true;
        } else if (redrawPHAndMWLines) {
            drawPHLines();
            redoMWLines();
        }

        /**
         * When the user clicks on a protein name in the protein list in
         * Electro2D.Electro2D, the drawProteinPosition method will draw a draw axis on
         * the gel canvas with the protein of interest at its origin.
         */
        if (indicateProteinPosition) {
            redrawLocation();
        }

        /**
         * Next, we color the buffer image with a rectangle the size of our
         * canvas in black. Then we make a black
         * rectangle at the top of the image that's almost as long as the
         * image itself but only 46 pixals tall.
         * Then we copy it all over to our canvas.
         */
        bufferImageGraphics.setColor(Color.RED);
        bufferImageGraphics.drawRect(0, 0, gelCanvasRectangle.width - 1, gelCanvasRectangle.height - 1);
        bufferImageGraphics.drawRect(1, 1, gelCanvasRectangle.width - 3, 46);
        g.drawImage(bufferImage, 0, 0, this);
        
        
        
    }

    /**
     * This method is used to generate GIF files for when the user is not
     * viewing the gel canvas.
     *
     * @param dts     The vector of dots to create an image of.
     * @param seconds Used in writing the file that stores the image.
     */
    public void genGIFFile(Vector<ProteinDot> dts, int seconds) {
        ProteinDot.setShow();
        dotProteins = dts;
        mWLinesNeedToBeDrawn = true;
        maxPH = 10;
        minPH = 3;
        this.repaint();
        try {
            GIFEncoder gifEnc = new GIFEncoder(bufferImage);
            gifEnc.Write(new BufferedOutputStream(new FileOutputStream(electro2D.getLastFileLoaded() + seconds + ".gif")));
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        } catch (AWTException ex) {
            System.err.println(ex.getMessage());
        }
    }


    /**
     * This method draws the dotted black vertical lines that represent
     * where the different pH values are on the canvas.
     */
    public void drawPHLines() {
        ArrayList<Integer> linePositions = electro2D.showPH();
        int length = 0;
        int loc = 0;
        //BH ?? int offset = (this.getTopLevelAncestor().getWidth() - this.getWidth() - 25);
        bufferImageGraphics.setColor(Color.WHITE);

        /**
         * Loop through each integer that's in the range between the minPH
         * and the maxPH and use that integer to figure out the starting point
         * for the line. Then draw a dotted line down the length of the canvas.
         */
        for (int i = 0; i < linePositions.size(); i++) {
            length = 0;
            loc = linePositions.get(i);// - 24;
            if (loc > 0 && loc < getWidth()) {
                while (length < this.getHeight()) {
                    bufferImageGraphics.drawLine(loc, length, loc, length + 5);
                    length = length + 10;
                }
            }
        }

// BH if applet is redrawn (as from resizing) then we need to redraw the lines again        pHLinesNeedToBeDrawn = false;
    }

    /**
     * Use this method to say that the pH lines need to be redrawn, but not the
     * molecular weight lines.
     */
    public void setRedrawPHLines(boolean tf) {
        pHLinesNeedToBeDrawn = tf;
        redrawPHAndMWLines = false;
    }

    /**
     * This method is called by the reset button and sets all of the animation
     * variables back to their default values.
     */
    public void resetRanges() {
        minPH = -1;
        maxPH = -1;
        tenK = 48;
        twentyfiveK = 48;
        fiftyK = 48;
        hundredK = 48;
        reMWLabel = false;
        calculateMW = true;
        redrawPHAndMWLines = false;
        mWLinesNeedToBeDrawn = false;
        barProteinsStillMoving = true;
    }

    /**
     * This method is used by Electro2D.DotThread to let the paint method know it's time
     * to generate the molecular weight markers.
     *
     * @param i Number of times the genDots() method was called.
     */
    public void setMWLines(int i) {
        mWLinesNeedToBeDrawn = true;
        calculateMW = true;
        genDotsRepeats = i;
    }

    /**
     * This method initializes the lines that denote the different ranges of
     * molecular weight and draws them for the first time.
     * @param g 
     */
    public void initiateMWLines(Graphics g) {
        lowAcrylamide = electro2D.getLowPercent();
        highAcrylamide = electro2D.getHighPercent();
        int height = this.getHeight();

        if (calculateMW) {
            if (lowAcrylamide == highAcrylamide) {
                for (int i = 0; i < genDotsRepeats; i++) {
                    hundredK = hundredK + (10 * (1 / lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 100000);
                    fiftyK = fiftyK + (10 * (1 / lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 50000);
                    twentyfiveK = twentyfiveK + (10 * (1 / lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 25000);
                    tenK = tenK + (10 * (1 / lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 10000);
                }
            } else {
                for (int i = 0; i < genDotsRepeats; i++) {
                    hundredK = hundredK + (10 * 1 / (((hundredK - 48) * (highAcrylamide - lowAcrylamide) / (height - 48)) + lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 100000);
                    fiftyK = fiftyK + (10 * 1 / (((fiftyK - 48) * (highAcrylamide - lowAcrylamide) / (height - 48)) + lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 50000);
                    twentyfiveK = twentyfiveK + (10 * 1 / (((twentyfiveK - 48) * (highAcrylamide - lowAcrylamide) / (height - 48)) + lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 25000);
                    tenK = tenK + (10 * 1 / (((tenK - 48) * (highAcrylamide - lowAcrylamide) / (height - 48)) + lowAcrylamide)) * (VOLTAGE / 25) * .25 * (100000 / 10000);
                }
            }

            calculateMW = false;
            drawMWLines(Color.LIGHT_GRAY);
            g.drawImage(bufferImage, 0, 0, this);
        }
    }

    private void drawMWLines(Color c) {
        bufferImageGraphics.setColor(c);
        int width = 0;
        while (width < this.getWidth()) {
            bufferImageGraphics.drawLine(width, (int) hundredK, width + 5, (int) hundredK);
            bufferImageGraphics.drawLine(width, (int) fiftyK, width + 5, (int) fiftyK);
            bufferImageGraphics.drawLine(width, (int) twentyfiveK, width + 5, (int) twentyfiveK);
            bufferImageGraphics.drawLine(width, (int) tenK, width + 5, (int) tenK);
            width = width + 10;
        }
        electro2D.clearMW();
        electro2D.showMW((int) hundredK, (int) fiftyK, (int) twentyfiveK, (int) tenK, reMWLabel);
        reMWLabel = true;
	}

	/**
     * This method redraws the lines that denote the different ranges of
     * molecular weight after the initializeMWLines method has already been
     * run.
     */
    public void redoMWLines() {
        lowAcrylamide = electro2D.getLowPercent();
        highAcrylamide = electro2D.getHighPercent();
        drawMWLines(Color.WHITE);
    }

    /**
     * This method draws the IEF proteins, which appear as moving rectangles at
     * the top of the animation, to the screen.
     */
    public void drawIEF(Graphics g) {
        for (int i = 0; i < barProteins.size(); i++) {
            if (barProteinsStillMoving) {
                barProteins.elementAt(i).changeX();
            } else {
                barProteins.elementAt(i).setX();
            }
            barProteins.elementAt(i).draw(bufferImageGraphics);
        }

        if (barProteins2 != null) {
            for (int i = 0; i < barProteins2.size(); i++) {
                if (barProteinsStillMoving) {
                    barProteins2.elementAt(i).changeX();
                } else {
                    barProteins2.elementAt(i).setX();
                }
                barProteins2.elementAt(i).draw(bufferImageGraphics);
            }
        }

        g.drawImage(bufferImage, 0, 0, this);
        //this.repaint();
    }

    /**
     * This method gives the illusion that the barProteins are being squashed
     * into the lower part of the animation.
     */
    public void shrinkIEF() {
    	doShrink = true;
    	repaint();
    }

    /**
     * This method clears the IEF animation area.
     */
    public void clearIEF(Graphics g) {
        bufferImageGraphics.setColor(Color.BLACK);
        bufferImageGraphics.clearRect(2, 2, gelCanvasRectangle.width - 3, 45);
        bufferImageGraphics.fillRect(2, 2, gelCanvasRectangle.width - 3, 45); //trying to turn canvas black
        bufferImageGraphics.setColor(Color.RED);
        bufferImageGraphics.drawRect(2, 2, gelCanvasRectangle.width - 3, 45);
        g.drawImage(bufferImage, 0, 0, this);
    }

    /**
     * Returns the red value for the background of the IEF animation.
     *
     * @return IEFRED
     */
    public static int getRed() {
        return iefRed;
    }

    /**
     * Returns the green value for the background of the IEF animation.
     *
     * @return IEFGREEN
     */
    public static int getGreen() {
        return iefGreen;
    }

    /**
     * Returns the blue value for the background of the IEF animation.
     *
     * @return IEFBLUE
     */
    public static int getBlue() {
        return iefBlue;
    }

    /**
     * Resets the red value for the IEF animation background when the reset
     * button is pressed.
     */
    public static void setRed() {
        iefRed = 54;
    }

    /**
     * Resets the green value for the IEF animation background when the reset
     * button is pressed.
     */
    public static void setGreen() {
        iefGreen = 100;
    }

    /**
     * Resets the blue value for the IEF animation background when the reset
     * button is pressed.
     */
    public static void setBlue() {
        iefBlue = 139;
    }

    /**
     * Controls the animation for the initial display of IEF proteins.
     */
    public void animateIEF(Graphics g) {
        int finalRed = 0;
        int finalGreen = 0;
        int finalBlue = 0;

        double width = IEFProtein.returnTempWidth();
        double finalWidth = IEFProtein.returnWidth();

        bufferImageGraphics.setColor(new Color(iefRed, iefGreen, iefBlue));
        bufferImageGraphics.fillRect(2, 2, gelCanvasRectangle.width - 3, 45);

        IEFProtein.changeWidth();
        if (barProteins == null)
        	return;
        drawIEF(g);

        iefRed = iefRed - 1;
        iefGreen = iefGreen - 2;
        iefBlue = (int) (iefBlue - 2.78);

        if (iefRed <= finalRed || iefGreen <= finalGreen || iefBlue <= finalBlue || width >= finalWidth) {
            barProteinsStillMoving = false;
            bufferImageGraphics.setColor(new Color(finalRed, finalGreen, finalBlue));
            IEFProtein.setWidth();
            bufferImageGraphics.fillRect(2, 2, gelCanvasRectangle.width - 3, 45);
            drawIEF(g);
        }
    }

    /**
     * Returns the vector that contains the ProteinDots.
     *
     * @return the protein dots
     */
    public Vector<ProteinDot> getDots() {
        return dotProteins;
    }

    /**
     * Returns the second vector that contains ProteinDots.
     *
     * @return the protein dots used for comparison
     */
    public Vector<ProteinDot> getDots2() {
        return dotProteins2;
    }

    /**
     * Increments the y values for the protein dots depending on whether the
     * start button for the second animation has been pushed or not.
     */
    public void genDots() {
    	doGenDots = true;
    	repaint();
    }

    /**
     * Called with the restart button, sets the dotProteins back to how they were
     * when the application was first opened.
     */
    public void restartCanvas() {
        barProteins = null;
        dotProteins = null;
        barProteins2 = null;
        dotProteins2 = null;
        /**       for(int i = 0; i < dotProteins.size(); i++) {
         ((Electro2D.ProteinDot)(dotProteins.elementAt(i))).restart();
         }
         if(dotProteins2 != null) {
         for(int i = 0; i < dotProteins2.size(); i++) {
         ((Electro2D.ProteinDot)(dotProteins2.elementAt(i))).restart();
         }
         }
         **/
       // update(g);
        repaint();
    }

    /**
     * Clears the canvas or buffered image in preparation for more animation.
     */
    private void clearCanvas(Graphics g, int dw, int dh) {
        g.setColor(Color.BLACK);
        g.clearRect(1, 48, gelCanvasRectangle.width - dw, gelCanvasRectangle.height - dh);
        g.fillRect(1, 48, gelCanvasRectangle.width - dw, gelCanvasRectangle.height - dh); 
        g.setColor(Color.RED);
        g.drawRect(1, 48, gelCanvasRectangle.width - dw, gelCanvasRectangle.height - dh);
	}

	/**
     * Draws black axis lines over a protein on the canvas whose name has been
     * selected from a list of proteins.
     *
     * @param id the title of the protein to be indicated
     */
    public void drawLocation(String id) {
        xLoc = 0;
        yLoc = 0;
        bufferImageGraphics.setColor(Color.BLACK);
        bufferImageGraphics.fillRect(2, 2, gelCanvasRectangle.width - 4, 45);
        for (int i = 0; i < dotProteins.size(); i++) {
            if (dotProteins.elementAt(i).getPro().getID().equals(id)) {
                xLoc = dotProteins.elementAt(i).returnX();
                yLoc = dotProteins.elementAt(i).returnY();
                i = dotProteins.size();
            }
        }
        indicateProteinPosition = true;
        repaint();
    }

    /**
     * Used by the Electro2D.DotThread class.
     */
    public void startDotBlink() {
        blink = true;
    }

    /**
     * Returns the statis of blink.
     *
     * @return blink
     */
    public static boolean getBlink() {
        return blink;
    }

    /**
     * Sets blink to false.
     */
    public static void stopBlink() {
        blink = false;
    }

    /**
     * This method draws the location of a protein to the screen using its
     * xLoc and yLoc values.
     */
    public void redrawLocation() {
        bufferImageGraphics.setColor(Color.LIGHT_GRAY);
        bufferImageGraphics.drawLine((int) xLoc + 2, (int) yLoc, 0, (int) yLoc);
        bufferImageGraphics.drawLine((int) xLoc + 2, (int) yLoc, (int) xLoc + 2, 0);
    }

    /**
     * Called during reset, sets indicateProteinPosition to false.
     */
    public void resetLocation() {
        indicateProteinPosition = false;
    }

    /**
     * Mouse listener event, called when the user presses down on the mouse.
     * Used to select many proteins.
     *
     * @param e used to return the x and y location of the event
     */
    public void mousePressed(MouseEvent e) {
    }

	/**
	 * Mouse listener event. Works with the variables set in mousePressed to figure
	 * out where the user dragged the mouse and select the proteins within that area
	 * for zoomed display.
	 *
	 * @param e used to find where the user released the mouse
	 */
	public void mouseReleased(MouseEvent e) {
// BH was commented out as JavaDoc -- just changing to //
//		if (mousePress) {
//			stopX = e.getX();
//			stopY = e.getY();
//			if (startX != stopX && stopX > startX + 5) {
//				if (startY != stopY && stopY > startY + 5) {
//					Vector bigDot = new Vector();
//					Electro2D.ProteinDot theDot = null;
//					double diameter = Electro2D.ProteinDot.getDiameter();
//					for (int i = 0; i < dotProteins.size(); i++) {
//						theDot = (Electro2D.ProteinDot) dotProteins.get(i);
//						if ((theDot.returnX() + diameter >= startX) && (theDot.returnX() <= stopX)) {
//							if ((theDot.returnY() + diameter >= startY) && (theDot.returnY() <= stopY)) {
//								bigDot.add(theDot);
//							}
//						}
//					}
//					if (dotProteins2 != null) {
//						for (int i = 0; i < dotProteins2.size(); i++) {
//							theDot = (Electro2D.ProteinDot) dotProteins2.get(i);
//							if ((theDot.returnX() + diameter >= startX) && (theDot.returnX() <= stopX)) {
//								if ((theDot.returnY() + diameter >= startY) && (theDot.returnY() <= stopY)) {
//									bigDot.add(theDot);
//								}
//							}
//						}
//					}
//					ImageZoom zoom = new ImageZoom(electro2D, bufferImage.getSource(), startX, startY, stopX, stopY,
//							bigDot);
//				}
//			}
//		}
	}

    public void mouseEntered(MouseEvent e) {
    }

    /**
     * This method sets mousePress to false, so that a user can't drag a zoom
     * box outside of the Electro2D.GelCanvas.
     *
     * @param e unused
     */
    public void mouseExited(MouseEvent e) {
        //mousePress = false;
    }

    /**
     * This method is called when the user clicks on the Electro2D.GelCanvas
     * and will find the protein clicked on and bring up information about it
     * in a different window.
     *
     * @param e used to get the position where the mouse was clicked
     */
    public void mouseClicked(MouseEvent e) {
        double clickX = e.getX();
        double clickY = e.getY();
        showDotFrame(dotProteins, clickX, clickY);
        showDotFrame(dotProteins2, clickX, clickY);
        showIEFFrame(barProteins, clickX, clickY);
        showIEFFrame(barProteins2, clickX, clickY);
    }

	private void showDotFrame(Vector<ProteinDot> dotProteins, double clickX, double clickY) {
        if (dotProteins != null) {
            for (int i = 0; i < dotProteins.size(); i++) {
            	ProteinDot dp = dotProteins.elementAt(i);
                double dotX = dp.returnX();
                double dotY = dp.returnY();
                if (dotProteins.elementAt(i).getShowMe() && clickX <= dotX + 6 && clickX >= dotX - 1) {
                    if (clickY <= dotY + 7 && clickY >= dotY - 1) {
                        ProteinFrame pFrame = new ProteinFrame(electro2D, dp.getPro().getID(), 1);
                        pFrame.setVisible(true);
                    }
                }
            }
        }
	}

	private void showIEFFrame(Vector<IEFProtein> barProteins, double clickX, double clickY) {
		double iefWidth = IEFProtein.returnWidth();
		if (barProteins == null)
			return;
		for (int j = 0; j < barProteins.size(); j++) {
			IEFProtein bp = barProteins.elementAt(j);
			double iefX = bp.returnX();
			double iefY = bp.returnY();
			if (IEFProtein.returnHeight() > 0) {
				if (clickX >= iefX && clickX <= iefX + iefWidth) {
					if (clickY >= iefY && clickY <= iefY + 40) {
						IEFFrame iFrame = new IEFFrame(bp);
						iFrame.setResizable(true);
						iFrame.pack();
						iFrame.setVisible(true);
					}
				}
			}
		}
	}

	public void drawIEF() {
		doDrawIEF = true;
		repaint();
	}

	public void animateIEF() {
		doAnimateIEF = true;
		repaint();
	}

}