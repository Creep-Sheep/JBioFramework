package main.java.Electro2D;

import main.java.Electro2D.GelCanvas;
import main.java.Electro2D.ProteinDot;

import java.awt.Color;

import javajs.async.SwingJSUtils;
import javajs.async.SwingJSUtils.StateHelper;
import javajs.async.SwingJSUtils.StateMachine;

public class BlinkThread extends Thread {

    private ProteinDot theDot;
    private GelCanvas theGel;
	private StateHelper stateHelper;

    public BlinkThread(ProteinDot p, GelCanvas g) {
        theGel = g;
        theDot = p;
    }

    private final static int INIT = 0;
    private final static int PAINT = 1;

    public void run() {

    	stateHelper = new SwingJSUtils.StateHelper(new StateMachine() {

    		@Override
    		public boolean stateLoop() {
    			if (!stateHelper.isAlive()) {
    				switch (stateHelper.getState()) {
    				case INIT:
//    			        while (!GelCanvas.getBlink()) {
//    			        }
    					if (!GelCanvas.getBlink()) {
    						stateHelper.sleep(20);
    						break;
    					}
    					stateHelper.next(PAINT);
    					break;
    				case PAINT:
//    			        while (GelCanvas.getBlink() && !DotThread.getDotState()) {
//    			            if (theDot.getColor() == Color.RED) {
//    			                theDot.changeColor(Color.GREEN);
//    			            } else {
//    			                theDot.changeColor(Color.RED);
//    			            }
//    			            theGel.repaint();
//    			            try {
//    			                sleep((long) 1000);
//    			            } catch (Exception e) {
//    			            }
//    			        }
    					if (GelCanvas.getBlink() && !DotThread.getDotState()) {
    			            if (theDot.getColor() == Color.RED) {
    			                theDot.changeColor(Color.GREEN);
    			            } else {
    			                theDot.changeColor(Color.RED);
    			            }
    			            theGel.repaint();
    			            stateHelper.sleep(1000);
    					} else {
    				        theDot.changeColor(Color.GREEN);
    					}
    		            break;
    				}
    			}
    			return false;
    		}

    	});
    	stateHelper.next(INIT);
    }

    
}
