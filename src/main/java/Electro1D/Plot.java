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
    /**
	 * 
	 */
	private static final long serialVersionUID = -2725697857452487199L;
	private static final Font plotFont = new Font("Courier New", 0, 10);
    private static final DecimalFormat oneDigit = new DecimalFormat("0.0");
    private static final DecimalFormat twoDigits = new DecimalFormat("0.00");

    Thread runner;
    int pause;
    Electrophoresis parent;
    int numberOfStds;
    Protein stds[];
    Protein sample;
    Protein dye;
    private Image offScreenImage;
    //FontMetrics fm;
    //Font font;
    protected boolean imageCreated;
    protected boolean standardsSet;
    protected boolean paintRM;
    protected boolean paintUserRM;
    protected boolean stopAnimation;
    protected boolean showExperimentalMW;
    protected boolean showSampleMW;
    protected boolean questionRCorr;
    protected boolean showLogMW;
    protected boolean showNotBracketed;
    protected boolean graphVerticalLine;
    protected boolean graphHorizontalLine;
    protected boolean newYLine;
    protected boolean newXLine;
    protected boolean Played;
    protected boolean harpPlayed;
    protected int h;
    protected int w;
    protected int xAxesLabelY;
    protected int xAxesRMLabelY;
    protected int yAxesLabelY;
    protected int yAxisLabelX;
    protected int charHalfHeight;
    protected int charHeight;
    protected int charWidth;
    protected int charHalfWidth;
    protected double yDivision;
    protected int gridYMarks;
    protected int gridCols;
    protected int rightGridCol;
    protected int leftGridCol;
    protected int bottomGridRow;
    protected int topGridRow;
    protected int rows;
    protected int cols;
    protected int xArray[];
    protected int yArray[];
    protected double logMwMax;
    protected double logMwMin;
    protected double ln10;
    protected double deltaPixelY;
    protected double deltaPixelX;
    protected double deltaLogMw;
    protected double mwOffsetFromMax;
    protected double pixOffsetFromTop;
    protected double mouseRM;
    protected double plotRM;
    protected double experimentalMW;
    protected double logMw;
    protected double sumX;
    protected double sumY;
    protected double sumXsq;
    protected double sumYsq;
    protected double sumProd;
    protected double rCorr;
    protected double rCorrSq;
    protected int nPoints;
    protected double slope;
    protected double yIntercept;
    protected int xMouse;
    protected int xPlot;
    protected int userLineY;
    protected int userLineX;
    protected Point lineCoord;
    protected int fitLineX1;
    protected int fitLineX2;
    protected int fitLineY1;
    protected int fitLineY2;
    protected double errorMargin;
;
	private StateHelper stateHelper;
	private boolean working;
	private double nY;

    Plot(Electrophoresis electrophoresis) {
        parent = electrophoresis;
        pause = 20;
        numberOfStds = 7;
        stds = new Protein[numberOfStds];
        sample = new Protein();
        dye = new Protein();
        gridCols = 10;
        cols = 14;
        xArray = new int[cols];
        mwOffsetFromMax = 1.0;
        pixOffsetFromTop = 1.0;
        lineCoord = new Point(0, 0);
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
                    repaint();
                }
            }
        });
	} // Plot

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

    private void calcLine() {
        if (nPoints <= 1) {
            slope = 0.0;
            yIntercept = 0.0;
            return;
        }
        slope = (nPoints * sumProd - sumX * sumY)
                / (nPoints * sumXsq - sumX * sumX);
        yIntercept = (sumY - slope * sumX) / nPoints;
    }

    private void showNotBracket(Graphics g) {
        if (showNotBracketed)
            g.drawString("RM not bracketed by Standards", xArray[leftGridCol],
                    getSize().height / 8);
    }

    private void resetSums() {
        sumX = 0.0;
        sumY = 0.0;
        sumXsq = 0.0;
        sumYsq = 0.0;
        sumProd = 0.0;
        nPoints = 0;
    }

    private Point calcPixelXY(double x) {
        double y = calcLogMw(x);
        int px = xArray[leftGridCol] + (int) (x * deltaPixelX);
        int py = yArray[topGridRow] + (int) ((logMwMax - y) / deltaLogMw * deltaPixelY);
        return new Point(px, py);
    }

	protected void calcMaxMinLogs() {
		// make divisions n*.05 & then make Max plot round number above maxMw
		int maxMW = 0;
		int minMW = Integer.MAX_VALUE;
		for (int k = 0; k < numberOfStds; k++) {
			if (stds[k].mw > maxMW)
				maxMW = stds[k].mw;
			if (stds[k].mw < minMW)
				minMW = stds[k].mw;
		}
		logMwMax = -Math.floor(-Math.log(maxMW) / ln10 * 2)/2;
		logMwMin = Math.floor(Math.log(minMW) / ln10 * 2)/2;
		nY = (logMwMax - logMwMin) * 2;
		yDivision = 0.5; 
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
		deltaLogMw = logMwMax - logMwMin;
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

    private void showExpMW(Graphics g) {
        if (showExperimentalMW)
            g.drawString(
                    "Experimental MW = " + String.valueOf((int) experimentalMW),
                    xArray[leftGridCol], getSize().height / 8);
    } // showExpMW

    private boolean mouseOnXAxis(int i, int j) {
        byte b = 3;
        if (i < xArray[leftGridCol] || i > xArray[rightGridCol]
                || j < yArray[bottomGridRow] - b
                || j > yArray[bottomGridRow] + b)
            return false;
        xMouse = i;
        return true;
    } // mouseOnXAxis

    private void sumYsqs(double d) {
        sumYsq += d * d;
    } // sumYsqs

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

    public void plotStandards(Graphics g) {
        byte b1 = 6;
        int i = b1 / 2;
        int j = b1 / 2;
        new Point(0, 0);
        if (standardsSet) {
            for (int k = 0; k < numberOfStds; k++) {
                if (stds[k].selected) {
                    g.setColor(stds[k].color);
                    g.fillOval(stds[k].plotXPos - j, stds[k].plotYPos - i, b1,
                            b1);
                    g.setColor(Color.black);
                    g.drawOval(stds[k].plotXPos - j, stds[k].plotYPos - i, b1,
                            b1);
                }
            }
            g.drawLine(fitLineX1, fitLineY1, fitLineX2, fitLineY2);
            g.drawString("Slope = " + twoDigits.format(slope), xArray[7],
                    yArray[4]);
            g.drawString("y Intercept = " + twoDigits.format(yIntercept),
                    xArray[7], yArray[4] + charHeight);
            g.drawString("r = " + twoDigits.format(rCorr), xArray[7], yArray[4]
                    + charHeight * 2);
            g.drawString("r Squared = " + twoDigits.format(rCorrSq), xArray[7],
                    yArray[4] + charHeight * 3);
        }
    } // plotStandards

	private void drawPlotSurface(Graphics g) {
		g.setColor(Color.black);
		g.drawString("Plot of Log MW as f(Relative Migration)", 10, charHeight);

		// plot box
		g.drawLine(xArray[leftGridCol], yArray[bottomGridRow], xArray[rightGridCol], yArray[bottomGridRow]);
		g.drawLine(xArray[leftGridCol], yArray[topGridRow], xArray[leftGridCol], yArray[bottomGridRow]);

		// x-axis
		for (int x = 0, i = leftGridCol; x <= gridCols; x += 2, i += 2) {
			g.drawString(oneDigit.format(x / 10.0), xArray[i] - charWidth, xAxesLabelY);
		}

		// x-axis label
		g.drawString("Relative Migration", xArray[leftGridCol + 2] + charHalfWidth, xAxesRMLabelY + charHeight);

		// y-axis label
		String yLabel = "Log MW";
		for (int j = 0, i = yArray[yArray.length >> 1] - charHeight * (yLabel.length() / 2); j < yLabel
				.length(); j++, i += charHeight) {
			g.drawString(yLabel.substring(j, j + 1), yAxisLabelX + charWidth / 4, i);
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

    private double calcLogMw(double d) {
        return (slope == 0.0 ? 0 :  slope * d + yIntercept);
    }

    private void sumXs(double d) {
        sumX += d;
    }

    private void showLgMW(Graphics g) {
        if (showLogMW) {
        	Graphics g1 = g.create();
            g1.setFont(plotFont);
            g1.drawString(twoDigits.format(logMw), xArray[leftGridCol]
                    + charHalfWidth, userLineY);
            g1.dispose();
        }
    }

    private void graphVertLine(Graphics g) {
        if (graphVerticalLine)
            g.drawLine(xPlot, yArray[bottomGridRow], xPlot, userLineY);
    }

    public void paint(Graphics g) {
    	setOpaque(true);
        calcMaxMinLogs();
        calcDimensions();
        if (!imageCreated || offScreenImage.getWidth(null) != w || offScreenImage.getHeight(null) != h) {
            offScreenImage = createImage(w, h);
            //font = getFont();
//            fm = getFontMetrics(plotFont);
            if (standardsSet) {
                calcStdCoords();
                calcLineCoords();
                imageCreated = true;
            }
        }
        Graphics offScreenGraphics = offScreenImage.getGraphics();
        offScreenGraphics.setColor(Color.white);
        offScreenGraphics.fillRect(0, 0, w, h);
//        offScreenGraphics.setColor(Color.black);
//        offScreenGraphics.drawRect(0, 0, getSize().width, getSize().height);
        offScreenGraphics.setColor(g.getColor());
        drawPlotSurface(offScreenGraphics);
        drawYScale(offScreenGraphics);
        plotStandards(offScreenGraphics);
        displayRM(offScreenGraphics);
        plotUserRM();
        showExpMW(offScreenGraphics);
        showSampMW(offScreenGraphics);
        showLgMW(offScreenGraphics);
        graphVertLine(offScreenGraphics);
        graphHorizLine(offScreenGraphics);
        showNotBracket(offScreenGraphics);
        g.drawImage(offScreenImage, 0, 0, this);
    }

    private void calcFit() {
        if (nPoints <= 1) {
            rCorr = 0.0;
            rCorrSq = 0.0;
            return;
        }
        double d1 = (double) nPoints * sumProd - sumX * sumY;
        double d2 = (double) nPoints * sumXsq - sumX * sumX;
        double d3 = (double) nPoints * sumYsq - sumY * sumY;
        d2 = Math.pow(d2, 0.5);
        d3 = Math.pow(d3, 0.5);
        rCorr = d1 / (d2 * d3);
        rCorrSq = rCorr * rCorr;
    }

    private void showSampMW(Graphics g) {
        if (showSampleMW) {
            String string = sample.abbr + " MW = " + String.valueOf(sample.mw);
            g.drawString(string, xArray[leftGridCol], h / 6);
            parent.displayProtein(sample);
            if (!harpPlayed) {
                harpPlayed = true;
            }
        } else if (questionRCorr) {
            g.drawString("No match! RM was OK, poor line fit?", xArray[leftGridCol], getSize().height / 6);

        }
    }

    public void setResults(Protein aprotein[], Protein protein1, Protein protein2) {
        stds = aprotein;
        sample = protein1;
        dye = protein2;
        resetSums();
        for (int i = 0; i < numberOfStds; i++) {
            if (stds[i].selected) {
                stds[i].relativeMigration = stds[i].getDistance() / dye.getDistance();
                sumXs(stds[i].relativeMigration);
                sumXsqs(stds[i].relativeMigration);
                double d = Math.log(stds[i].mw) / ln10;
                sumYs(d);
                sumYsqs(d);
                sumProds(stds[i].relativeMigration, d);
                nPoints++;
            }
        }
        calcLine();
        calcFit();
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

    private void sumXsqs(double d) {
        sumXsq += d * d;
    }

    private void sumYs(double d) {
        sumY += d;
    }

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
					showLogMW = true;
					experimentalMW = Math.pow(10.0, logMw);
					showExperimentalMW = true;
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

    protected void calcDimensions() {
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
        FontMetrics fm = getFontMetrics(plotFont);
        charWidth = fm.charWidth('0');
        charHalfWidth = charWidth / 2;
        charHalfHeight = fm.getAscent() / 2;
        charHeight = fm.getHeight();
        xAxesLabelY = yArray[bottomGridRow] + fm.getHeight();
        xAxesRMLabelY = xAxesLabelY + fm.getHeight() / 2;
        yAxesLabelY = yArray[topGridRow] - fm.getHeight() / 2;
        yAxisLabelX = xArray[leftGridCol] - fm.stringWidth("MW 0.00 ");
    }

    private void displayRM(Graphics g) {
        if (paintRM) {
            mouseRM = (double) (xMouse - xArray[leftGridCol]) / deltaPixelX;
            // cursorPos = String.valueOf(mouseRM);
            // dotPos = cursorPos.indexOf(46);
            g.drawString(twoDigits.format(mouseRM), xArray[leftGridCol],
                    (int) (yArray[bottomGridRow] + yDivision));
            // g.drawString(cursorPos.substring(0, dotPos + 3),
            // xArray[leftGridCol], yArray[bottomGridRow] + division);
        }
    }

    private void sumProds(double d1, double d2) {
        sumProd += d1 * d2;
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

    private void graphHorizLine(Graphics g) {
        if (graphHorizontalLine)
            g.drawLine(xPlot, userLineY, userLineX, userLineY);
    }

    private void resetFlags() {
        stopAnimation = true;
        newYLine = true;
        newXLine = true;
        paintRM = false;
        Played = false;
        harpPlayed = false;
    }
    
    private final static int SLEEP = 0;
    private final static int PAINT = 1;

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
