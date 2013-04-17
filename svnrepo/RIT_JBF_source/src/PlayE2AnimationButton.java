/*
 * Copyright (C) 2013 Rochester Institute of Technology
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * See the GNU General Public License for more details.
 */

/**
 *
 * @author Amanda Fisher
 */

import javax.swing.JButton;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class PlayE2AnimationButton extends JButton implements ActionListener {

    Electro2D electro2D;
    boolean playing;
    private boolean iefDrawn;
    private boolean sdsDrawn;
    private static boolean compareFiles;
    String choice;
    boolean isPlaying;

    public PlayE2AnimationButton(Electro2D e) {

        super("Run");

        String hoverText;
        if(iefDrawn == false){
            hoverText = "Run IEF animation";
            }else{
                hoverText = "Run SDS Page animation";
            }
        super.setToolTipText(hoverText);
        addActionListener(this);
        electro2D = e;
        playing = false;
        iefDrawn = false;
        sdsDrawn = false;
        compareFiles = false;
    }

    public boolean getSdsStatus(){
	return sdsDrawn;
    }

    public void resetPlay(){
	playing = false;
        this.setText("Run");
    }

    public void resetIEF(){
	iefDrawn = false;
    }

    public void resetSdsStatus(){
	sdsDrawn = false;
    }

    public static void setCompare(boolean bool){
	compareFiles = bool;
    }

    public void actionPerformed(ActionEvent e) {
        
        if(playing == true) {
	    playing = false;
	    electro2D.stopThread();
	}
	// otherwise determine which parts of the animation need to be drawn
	// and start the appropriate thread.
	else {
	    //get the animation the user wishes to see
            electro2D.clearpH();
	    choice = electro2D.getAnimationChoice();
	    if( electro2D.getSequencesReady()){

		//if the data for the animation needs to be processed,
		//do so
		    if( choice.equals( "IEF" )){
			electro2D.getGel().prepare();
			electro2D.resetBool();
                        if( compareFiles ){
			    electro2D.getGel().prepare2();
			}
		    }

		//if the user selected IEF animation and the image is not
		// already displayed on the screen, perform the IEF
		// animation
		if( choice.equals( "IEF") ){
		    if( iefDrawn == false ){
			electro2D.restartIEF();
			iefDrawn = true;
			electro2D.getGel().resetReLine();
		    }
		}
		//if the user selected SDS-PAGE animation, and the IEF is
		// already drawn, perform the SDS-PAGE animation
		else if( choice.equals( "SDS-PAGE" )){
                    if( iefDrawn == true ){
			electro2D.getGel().clearCanvas();
                        electro2D.getGel().clearIEF();
			electro2D.getGel().resetLocation();
                        electro2D.clearpH();
			playing = true;
			electro2D.restartThread();
			sdsDrawn = true;
		    }
		}
	    }
	}

        // let the user know whether they can pause or play the animation
        if(playing == false) {
	    this.setText("Run");
	} else {
	    this.setText("Pause");
	}

    }
}
