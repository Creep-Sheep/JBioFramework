package main.java.Electro1D;

/**
 * plot.java
 *
 * @contr
 */

import java.awt.Image;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Point;
import java.awt.Graphics;
import java.awt.Color;
import java.awt.Cursor;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;
import java.awt.event.MouseMotionListener;
import java.text.DecimalFormat;

import javax.swing.JPanel;

import javajs.async.SwingJSUtils.StateHelper;
import javajs.async.SwingJSUtils.StateMachine;

/**
 * The type Plot.
 */
public class Plot extends JPanel implements Runnable {

	private static final long serialVersionUID = -2725697857452487199L;
	
	private static final Font plotFont = new Font("sansserif", 0, 14);
    private static final DecimalFormat oneDigit = new DecimalFormat("0.0");
    private static final DecimalFormat twoDigits = new DecimalFormat("0.00");

    private Electrophoresis parent;
    private Thread runner;
    private Image offScreenImage;
    private FontMetrics fm;
    
    private Protein stds[];
    private Protein sample;
    private Protein dye;

    private int numberOfStds;
    
    private int h;
    private int w;
    private String xLabel = "Relative Migration";
    private String yLabel = "Log MW";
    private String titleLabel = yLabel + " vs. " + xLabel;
    private int xAxesLabelY;
    private int xAxesRMLabelY;
    private int yAxisLabelX;
    private int yAxisLabelY;
    private int titleX;
    private int titleY;
    private int msgX;
    private int msgY;
    private int charHalfHeight;
    private int charHeight;
    private int charWidth;
    private int charHalfWidth;
    private int gridYMarks;
    private int gridCols;
    private int rightGridCol;
    private int leftGridCol;
    private int bottomGridRow;
    private int topGridRow;
    private int rows;
    private int cols;
    private int xArray[];
    private int yArray[];

    private int pause;
    
    private boolean imageCreated;
    private boolean standardsSet;
    private boolean paintRM;
    private boolean paintUserRM;
    private boolean stopAnimation;
    private boolean showExperimentalMW;
    private boolean showSampleMW;
    private boolean questionRCorr;
    private boolean showLogMW;
    private boolean showNotBracketed;
    private boolean graphVerticalLine;
    private boolean graphHorizontalLine;
    private boolean newYLine;
    private boolean newXLine;
    private boolean harpPlayed;
    private double yStep;

    private double logMwMax;
    private double logMwMin;
    private double ln10;
    private double deltaPixelY;
    private double deltaPixelX;
    private double mouseRM;
    private double plotRM;
    private double experimentalMW;
    private double logMw;
    private double rCorr;
    private double rCorrSq;
    private double slope;
    private double yIntercept;

    private int nPoints;
    private int xMouse;
    private int xPlot;
    private int userLineY;
    private int userLineX;
    private int fitLineX1;
    private int fitLineX2;
    private int fitLineY1;
    private int fitLineY2;
    private double errorMargin;
;
	private StateHelper stateHelper;
	private boolean working;
	private double nY;

	private int xAxesRMLabelX;

    Plot(Electrophoresis electrophoresis) {
        parent = electrophoresis;
        pause = 20;
        numberOfStds = 7;
        stds = new Protein[numberOfStds];
        sample = new Protein();
        dye = new Protein();
        gridCols = 10;
        cols = 13;
        xArray = new int[cols];
        errorMargin = 0.2;
        ln10 = Math.log(10.0);
        rightGridCol = cols - 1;
        leftGridCol = rightGridCol - gridCols;
        resetFlags();
        
        // Create mouse listeners for the canvas
        addMouseListener(new MouseListener() {
            @Override
            public void mouseClicked(MouseEvent e) {
            	doMouseClicked(e.getX(), e.getY());
            }

            @Override
            public void mousePressed(MouseEvent e) {
            }

            @Override
            public void mouseReleased(MouseEvent e) {
            }

            @Override
            public void mouseEntered(MouseEvent e) {
            }

            @Override
            public void mouseExited(MouseEvent e) {
            }
        });

        // Add a listener for the mouse movement
        addMouseMotionListener(new MouseMotionListener() {
            @Override
            public void mouseDragged(MouseEvent e) {
            }

            @Override
            public void mouseMoved(MouseEvent e) {
                if (standardsSet) {
                    paintRM = mouseOnXAxis(e.getX(), e.getY());
                    setCursor(Cursor.getPredefinedCursor(paintRM ? Cursor.HAND_CURSOR : Cursor.DEFAULT_CURSOR));
                    repaint();
                }
            }
        });
	} // Plot

    private void resetFlags() {
        stopAnimation = true;
        newYLine = true;
        newXLine = true;
        paintRM = false;
        harpPlayed = false;
    }
    
	protected void doMouseClicked(int x, int y) {
		if (!standardsSet) {
			return;
		}
		for (int k = 0; k < numberOfStds; k++) {
			if (stds[k].matchPlotPosition(x, y)) {
				parent.displayProtein(stds[k]);
				return;
			}
		}
		if (mouseOnXAxis(x, y)) {
			if (working)
				return;
			working = true;
			xPlot = xMouse;
			plotRM = mouseRM;
			paintUserRM = true;
			stopAnimation = false;
			showExperimentalMW = false;
			showSampleMW = false;
			questionRCorr = false;
			showLogMW = false;
			showNotBracketed = false;
			graphVerticalLine = false;
			graphHorizontalLine = false;
			start();
		}
	}

    private boolean mouseOnXAxis(int i, int j) {
        byte b = 3;
        if (i < xArray[leftGridCol] || i > xArray[rightGridCol]
                || j < yArray[bottomGridRow] - b
                || j > yArray[bottomGridRow] + b)
            return false;
        xMouse = i;
        return true;
    } // mouseOnXAxis

    
//// least squares analysis

    /**
     * Carry out the least-squares analysis for a set of standards and define both the "dye" and the protein.
     * 
     * @param stds
     * @param sample
     * @param dye leads the way
     */
    public void setResults(Protein stds[], Protein sample, Protein dye) {
        this.stds = stds;
        this.sample = sample;
        this.dye = dye;
        getFit();
        sample.relativeMigration = sample.getDistance() / dye.getDistance();
        standardsSet = true;
        graphVerticalLine = false;
        graphHorizontalLine = false;
        showExperimentalMW = false;
        showLogMW = false;
        showSampleMW = false;
        questionRCorr = false;
        imageCreated = false;
        repaint();
    }

	private void getFit() {
		double sumX = 0.0;
		double sumY = 0.0;
		double sumXsq = 0.0;
		double sumYsq = 0.0;
		double sumProd = 0.0;
		nPoints = 0;
		for (int i = 0; i < numberOfStds; i++) {
			if (stds[i].selected) {
				double x = stds[i].relativeMigration = stds[i].getDistance() / dye.getDistance();
				double y = Math.log(stds[i].mw) / ln10;
				sumX += x;
				sumXsq += x * x;
				sumY += y;
				sumYsq += y * y;
				sumProd += x * y;
				nPoints++;
			}
		}
		if (nPoints <= 1) {
			slope = yIntercept = rCorr = rCorrSq = 0.0;
		} else {
			double xy = nPoints * sumProd - sumX * sumY;
			double xx = nPoints * sumXsq - sumX * sumX;
			double yy = nPoints * sumYsq - sumY * sumY;
			slope = xy / xx;
			yIntercept = (sumY - slope * sumX) / nPoints;
			rCorrSq = xy * xy / xx / yy;
			rCorr = Math.sqrt(rCorrSq);
//        d2 = Math.pow(d2, 0.5);
//        d3 = Math.pow(d3, 0.5);
//        rCorr = num / (d2 * d3);
//        rCorrSq = rCorr * rCorr;
		}
	}

    private double calcLogMw(double x) {
        return (slope == 0.0 ? 0 :  slope * x + yIntercept);
    }

    /**
     * Set the minimum and maximum log values
     */
	private void calcMaxMinLogs() {
		// make divisions n*.05 & then make Max plot round number above maxMw
		// add the two ends of the line in the calculation
		double y0 = calcLogMw(0);
		double y1 = calcLogMw(1);
		logMwMax = Math.max(y0, y1);
		logMwMin = Math.min(y0, y1);
		for (int k = 0; k < numberOfStds; k++) {
			if (stds[k] == null)
				continue; // BH: I am not sure how this happened; threading in Java?
			double logMW = Math.log(stds[k].mw) / ln10;
			if (logMW > logMwMax)
				logMwMax = logMW;
			else if (logMW < logMwMin)
				logMwMin = logMW;
		}
		// round up for max, down for min
		logMwMax = -Math.floor(-logMwMax * 2)/2;
		logMwMin = Math.floor(logMwMin * 2)/2;
		yStep = 0.5; 
		nY = (logMwMax - logMwMin) / yStep;
		
		// old way
//		float mDelta = (float) (1.1 * (logMwMax - logMwMin));
//		yDivision = 0;
//		for (; 10 * yDivision < mDelta; yDivision += .05) {
//		}
//		for (test = (int) logMwMax; test <= logMwMax; test += yDivision) {
//		}
//		logMwMax = test;
//		logMwMin = logMwMax - 10 * yDivision;
//		logMwMax = Math.floor(logMwMax + 1);
//		logMwMin = Math.floor(logMwMin);
//		yDivision =
//				// yDivision = (logMwMax - logMwMin) / 10.0;
	}

    
    private void calcDimensions() {
        h = getSize().height;
        w = getSize().width;
        xArray[0] = 0;
        int pixels = w / cols;        
        for (int i = 1; i < cols; i++)
            xArray[i] = xArray[i - 1] + pixels;
        gridYMarks = (int) nY;
        rows = gridYMarks + 2;
        bottomGridRow = rows - 1;
        topGridRow = bottomGridRow - gridYMarks;
        yArray = new int[rows];
        yArray[0] = 0;        
        pixels = h / rows;
        for (int j = 1; j < rows; j++)
            yArray[j] = yArray[j - 1] + pixels;
        deltaPixelX = xArray[rightGridCol] - xArray[leftGridCol];
        deltaPixelY = yArray[bottomGridRow] - yArray[topGridRow];
        //font = getFont();
        fm = getFontMetrics(plotFont);
        charWidth = fm.charWidth('0');
        charHalfWidth = charWidth / 2;
        charHalfHeight = fm.getAscent() / 2;
        charHeight = fm.getHeight();
        xAxesLabelY = yArray[bottomGridRow] + fm.getHeight();
        
        xAxesRMLabelX = (xArray[leftGridCol] + xArray[rightGridCol] - fm.stringWidth(xLabel))/2; 
        xAxesRMLabelY = xAxesLabelY + fm.getHeight() / 2 + charHalfHeight;

        titleX = (xArray[leftGridCol] + xArray[rightGridCol] - fm.stringWidth(titleLabel))/2; 
        titleY = yArray[topGridRow] - charHalfHeight;

        msgX = xArray[leftGridCol];
        msgY = yArray[topGridRow] - charHalfHeight * 2;
        
        yAxisLabelX = xArray[leftGridCol] - fm.stringWidth("MW 0.00 ");
        yAxisLabelY = (yArray[bottomGridRow] + yArray[topGridRow] - charHeight * 6) / 2;
    }

    private Point calcPixelXY(double x) {
        double y = calcLogMw(x);
        int px = xArray[leftGridCol] + (int) (x * deltaPixelX);
        int py = yArray[topGridRow] + (int) ((logMwMax - y) / (logMwMax - logMwMin) * deltaPixelY);
        return new Point(px, py);
    }

    private void calcLineCoords() {
        Point point;    // Defaults to (0,0)
        point = calcPixelXY(0.01);
        fitLineX1 = point.x;
        fitLineY1 = point.y;
        point = calcPixelXY(1.0);
        fitLineX2 = point.x;
        fitLineY2 = point.y;
    }

    private void calcStdCoords() {
        Point point;    // This defaults to (0,0)
        for (int i = 0; i < numberOfStds; i++) {
            if (stds[i].selected) {
                point = calcPixelXY(stds[i].relativeMigration);
                stds[i].plotXPos = point.x;
                stds[i].plotYPos = point.y;
            }
        }
    } // calcStdCoords


    ///// plotting methods /////////   

    public void paint(Graphics g) {
    	setOpaque(true);
        calcMaxMinLogs();
        calcDimensions();
        if (!imageCreated || offScreenImage.getWidth(null) != w || offScreenImage.getHeight(null) != h) {
            offScreenImage = createImage(w, h);
            if (standardsSet) {
                calcStdCoords();
                calcLineCoords();
                imageCreated = true;
            }
        }
        Graphics g1 = offScreenImage.getGraphics();
        g1.setFont(plotFont);
        g1.setColor(Color.white);
        g1.fillRect(0, 0, w, h);
        g1.setColor(g.getColor());
        drawPlotSurface(g1);
        drawYScale(g1);
        plotStandards(g1);
        drawResults(g1);
        displayRM(g1);
        plotUserRM();
        showExpMW(g1);
        showSampMW(g1);
        showLogMW(g1);
        graphVertLine(g1);
        graphHorizLine(g1);
        showNotBracket(g1);
        g.drawImage(offScreenImage, 0, 0, this);
    }

    private void drawResults(Graphics g) {
		int ax = xArray[8] + charWidth * 2;
		int ay = yArray[2];
		g.setColor(Color.white);
		g.fillRect(ax - charWidth * 2 + 1, ay + 1, xArray[3] - xArray[0] - 2, yArray[2] - yArray[0] - 2);
		g.setColor(Color.black);
		int off = 1;
		int d = charHeight + charHalfHeight;
		g.drawLine(fitLineX1, fitLineY1, fitLineX2, fitLineY2);
		g.drawString("slope = " + twoDigits.format(slope), ax, ay + d * off++);
		g.drawString("y-intercept = " + twoDigits.format(yIntercept), ax, ay + d * off);
		//g.drawString("r = " + twoDigits.format(rCorr), ax, ay + charHeight * 2);
		g.drawString("  2", ax, ay + d * off++ + charHeight);
		g.drawString("r    = " + twoDigits.format(rCorrSq), ax, ay + d * off);
	}

	private void drawYScale(Graphics g) {
        double d = logMwMax;
        int i = topGridRow;
        if (standardsSet) {
            for (int j = 0; j <= gridYMarks; j++) {
                g.drawString(twoDigits.format(d), yAxisLabelX + 5
                        * charHalfWidth, yArray[i] + charHalfHeight);
                i++;
                d -= 0.5;
            }
        }
    }

    /**
     * dots 
     * 
     * @param g
     */
	private void plotStandards(Graphics g) {
		if (!standardsSet)
			return;
		int diameter = 6;
		int offset = diameter / 2;
		for (int k = 0; k < numberOfStds; k++) {
			if (stds[k].selected) {
				g.setColor(stds[k].color);
				g.fillOval(stds[k].plotXPos - offset, stds[k].plotYPos - offset, diameter, diameter);
				g.setColor(Color.black);
				g.drawOval(stds[k].plotXPos - offset, stds[k].plotYPos - offset, diameter, diameter);
			}
		}
	}

	private void drawPlotSurface(Graphics g) {
		g.setColor(Color.black);
		g.drawString(titleLabel, titleX, titleY);

		// plot box
		g.drawLine(xArray[leftGridCol], yArray[bottomGridRow], xArray[rightGridCol], yArray[bottomGridRow]);
		g.drawLine(xArray[leftGridCol], yArray[topGridRow], xArray[leftGridCol], yArray[bottomGridRow]);

		// x-axis
		for (int x = 0, i = leftGridCol; x <= gridCols; x += 2, i += 2) {
			g.drawString(oneDigit.format(x / 10.0), xArray[i] - charWidth, xAxesLabelY);
		}

		// x-axis label
		g.drawString(xLabel, xAxesRMLabelX, xAxesRMLabelY);

		// y-axis label
		for (int j = 0, y = yAxisLabelY; j < yLabel.length(); j++, y += charHeight) {
			String s = yLabel.substring(j, j + 1);
			g.drawString(s, yAxisLabelX - fm.stringWidth(s) / 2, y);
		}

		// horizontal lines
		g.setColor(Color.lightGray);
		for (int j = 0, i = topGridRow; j < gridYMarks; j++, i++) {
			g.drawLine(xArray[leftGridCol], yArray[i], xArray[rightGridCol], yArray[i]);
		}

		// vertical lines
		for (int j = 0, i = leftGridCol + 1; j < gridCols; j++, i++) {
			g.drawLine(xArray[i], yArray[topGridRow], xArray[i], yArray[bottomGridRow]);
		}
		g.setColor(Color.black);
	}

    private void showSampMW(Graphics g) {
        if (showSampleMW) {
            String string = sample.abbr + " MW = " + String.valueOf(sample.mw);
            g.drawString(string, msgX, msgY);
            parent.displayProtein(sample);
            if (!harpPlayed) {
                harpPlayed = true;
            }
        } else if (questionRCorr) {
            g.drawString("No match! RM was OK, poor line fit?", msgX, msgY);

        }
    }

    private Point lineCoord = new Point(0, 0);

	private void plotUserRM() {
		if (paintUserRM) {
			logMw = calcLogMw(plotRM);
			lineCoord = calcPixelXY(plotRM);
			if (newYLine) {
				newYLine = false;
				userLineY = yArray[bottomGridRow];
			} else if (userLineY >= lineCoord.y + 2)
				userLineY -= 2;
			graphVerticalLine = true;
			if (userLineY <= lineCoord.y + 2) {
				if (newXLine) {
					newXLine = false;
					userLineX = xPlot;
				} else
					userLineX -= 2;
				graphHorizontalLine = true;
				if (userLineX <= xArray[leftGridCol]) {
					showLogMW = showExperimentalMW = true;
					experimentalMW = Math.pow(10.0, logMw);
					double d1 = Math.abs((sample.mw - experimentalMW) / sample.mw);
					double d2 = Math.abs((sample.relativeMigration - plotRM) / sample.relativeMigration);
					if (d1 < errorMargin)
						showSampleMW = true;
					else if (d2 < errorMargin)
						questionRCorr = true;
					stop();
					resetFlags();
					paintUserRM = false;
				}
			} else if (userLineY <= lineCoord.y + 2) {
				showNotBracketed = true;
				stop();
				resetFlags();
				paintUserRM = false;
			}
		}
	}

    private void displayRM(Graphics g) {
        if (paintRM) {
            mouseRM = (double) (xMouse - xArray[leftGridCol]) / deltaPixelX;
            // cursorPos = String.valueOf(mouseRM);
            // dotPos = cursorPos.indexOf(46);
            g.drawString(twoDigits.format(mouseRM), xMouse + charHalfWidth/2, yArray[bottomGridRow] - charHalfHeight/2);
            // g.drawString(cursorPos.substring(0, dotPos + 3),
            // xArray[leftGridCol], yArray[bottomGridRow] + division);
        }
    }

    private void showNotBracket(Graphics g) {
        if (showNotBracketed)
            g.drawString("RM not bracketed by Standards", msgX, msgY);
    }

    /**
     * animated vertical line
     * 
     * @param g
     */
    private void graphVertLine(Graphics g) {
        if (graphVerticalLine)
            g.drawLine(xPlot, yArray[bottomGridRow], xPlot, userLineY);
    }
    
    /**
     * animated horizontal "user" line
     * 
     * @param g
     */
    private void graphHorizLine(Graphics g) {
        if (graphHorizontalLine)
            g.drawLine(xPlot, userLineY, userLineX, userLineY);
    }

    /**
     * MW just below user line 
     * @param g
     */
	private void showExpMW(Graphics g) {
		if (showExperimentalMW)
			g.drawString("MW = " + String.valueOf(((int) experimentalMW/100)/10) + " kD", 
					xArray[leftGridCol] + charHalfWidth,
					userLineY + charHalfHeight * 2);
	}
	
    /**
     * log number just above user line 
     * @param g
     */
    private void showLogMW(Graphics g) {
        if (showLogMW) {
            g.drawString("log(MW) = " + twoDigits.format(logMw), xArray[leftGridCol]
                    + charHalfWidth, userLineY - charHalfHeight/2);
        }
    }

    private final static int SLEEP = 0;
    private final static int PAINT = 1;

    public void start() {
        if (runner == null) {
            runner = new Thread(this);
            runner.start();
        }
    } // start

    public void stop() {
        if (runner != null) {
            this.stopAnimation = true;
            runner = null;
        }
		working = false;
    } // stop

    public void run() {
        Thread.currentThread().setPriority(1);
//      while (!stopAnimation) {
//          try {
//              Thread.sleep(long) pause);
//          } catch (InterruptedException e) {
//          }
//          repaint();
//      }
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
				} else {
					working = false;
				}
				return false;
			}
    		
    	});
        stateHelper.next(SLEEP);
    }

}
