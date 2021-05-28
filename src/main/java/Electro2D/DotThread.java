package main.java.Electro2D;

import javajs.async.SwingJSUtils;
import javajs.async.SwingJSUtils.StateHelper;
import javajs.async.SwingJSUtils.StateMachine;

/**
 * Electro2D.DotThread is the thread controlling the second half of the 2DGE animation.
 *
 * @author Jill Zapoticznyj
 * @author Adam Bazinet
 */

public class DotThread extends Thread implements StateMachine {
    private static boolean go = false;
    private GelCanvas gel;
    private Electro2D electro2D;
	private StateHelper stateHelper;
	private int loop_i;
	private long tm;

    /**
     * Constructor
     *
     * @param e reference to the Electro2D
     */

    public DotThread(Electro2D e) {
        gel = e.getGel();
        electro2D = e;
    }

    /**
     * This method called when the play button is pressed to pause
     * the animation or when the stop button is pressed.  Sets the
     * boolean variable in charge of the animation loop to false,
     * stopping the animation.
     */

    public void stopDots() {
        go = false;
    }

    /**
     * This method returns the value of go - the variable
     * which determines whether or not to edit the location of the protein
     * dots.
     */

    public static boolean getDotState() {
        return go;
    }

    /**
     * This method is called just before the animation is started or
     * when the animation is restarted by pushing the play button.
     */

    public void startDots() {
        go = true;
    }


    /**
     * The run method used by the animation thread.  Makes repeated
     * calls to Electro2D.GelCanvas' genDots method while go is true.
     */

    private final static int INIT = 0;
    private final static int LOOP_IEF = 1;
    private final static int LOOP_DOTS = 2;
    
    
    public void run() {
    	stateHelper = new SwingJSUtils.StateHelper(this);
    	stateHelper.next(INIT);
    }

	@Override
	public boolean stateLoop() {
		if (stateHelper.isAlive()) {
			switch (stateHelper.getState()) {
			case INIT:
				GelCanvas.stopBlink();
				// send the percent acrylamide value to Electro2D.ProteinDot
				ProteinDot.setPercent(electro2D.getLowPercent(), electro2D.getHighPercent());

				gel.resetReLine();
				stateHelper.next(LOOP_IEF);
				break;
			case LOOP_IEF:
				// while the IEFProteins are still visible...
				// LOOP_IEF
				if (IEFProtein.returnHeight() > 0) {
					// ...shrink them in size...
					IEFProtein.shrinkProtein();
					// ...and redraw them to the Electro2D.GelCanvas
					gel.shrinkIEF();
					// then wait for 100 milliseconds
					stateHelper.sleep(100);
					break;
				}
				// Make the ProteinDots visible
				if (ProteinDot.getShow() == false) {
					ProteinDot.setShow();
				}
				loop_i = 0;
				tm = System.currentTimeMillis();
				stateHelper.next(LOOP_DOTS);
				break;
			case LOOP_DOTS:
				// While the stop button or pause button has not been pressed...
				if (go) {
					// ...change the location of the dots and redraw them to
					// the Electro2D.GelCanvas
					gel.genDots();
					if (System.currentTimeMillis() - tm >= 10000) {
						stopDots();
					}
					loop_i = 1 + loop_i;
					stateHelper.sleep(100);
					break;
				}
				gel.setreLine();
				gel.setMWLines(loop_i);
				loop_i = 0;
				electro2D.resetPlay();
				//gel.paint(gel.getGraphic());
				gel.repaint();
				break;
			}
		}
		return false;
	}
}