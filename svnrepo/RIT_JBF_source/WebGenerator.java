/**
 * WebGenerator.java
 * This class generates a website which displays the maximum and minimum
 * pI and molecular weight values, as well as a table of the contained
 * proteins from the animation with their respective pI and mol. wt. values
 *
 *
 * @author     Jill Zapoticznyj
 */

import java.io.*;
import java.util.*;
import java.net.MalformedURLException;

public class WebGenerator{
    
    private Electro2D electro2D;
    private BufferedWriter buf;
    private FileWriter fWrite;
    private PrintWriter pWrite;
    private String maxMW;
    private String minMW;
    private String maxPi;
    private String minPi;
    private static int searchVal = 0;
    private final String bgColor = "\"36648B\"";
    private final String openTab = "\u003C";
    private final String closeTab = "\u003E";
    private final String openTD = "\u003CTD\u003E";
    private final String closeTD = "\u003C/TD\u003E";
    private final String openTR = "\u003CTR\u003E";
    private final String closeTR = "\u003C/TR\u003E";
//    private final String directoryString = "./../HTML Files/";
    private final String directoryString = "HTML Files/";

    public WebGenerator( Electro2D e ){
	
	electro2D = e;
	
	maxMW = "";
	minMW = "";
	maxPi = "";
	minPi = "";
    }

    public static void setSearch( int index ){
	searchVal = index;
    }

    public void genFile( String filename ){
	try{
		File fl = new File( directoryString );
		if( !fl.exists() ){
			fl.mkdir();
		}
	    fWrite = new FileWriter( directoryString + filename + ".html" );
	    buf = new BufferedWriter( fWrite );
	    pWrite = new PrintWriter( fWrite );
	}catch( IOException x ){
	    System.err.println( x.getMessage() );
	}

	Vector names = electro2D.getSequenceTitles();
	Vector molwt = electro2D.getMolecularWeights();
	Vector pI_vals = electro2D.getPiValues();
	Vector functions = electro2D.getFunctions();

	HTMLSorter htmlSort = new HTMLSorter( searchVal, names, pI_vals, molwt, functions);
	Vector sorted = new Vector( htmlSort.getSorted() );

	maxMW =/*((String)molwt.elementAt( 0 ) );*/ String.valueOf(electro2D.getMaxMW());
	minMW = /*((String)molwt.elementAt( 0 ) );*/String.valueOf(electro2D.getMinMW());
	maxPi = /*((String)pI_vals.elementAt( 0 ) );*/String.valueOf(electro2D.getMaxPi());
	minPi = /*((String)pI_vals.elementAt( 0 ) );*/String.valueOf(electro2D.getMinPi());
	
	String startingLine = " \u003Chtml\u003E\u003Chead\u003E" + 
	    "\u003Cbody bgcolor=" + bgColor + "\u003E\u003Ctitle\u003E" + 
	    filename + "\u003C/title\u003E\u003C/head\u003E";
        
	String startTable = openTab + "TABLE BORDER=2" + closeTab + openTab + 
	    "TR" + closeTab + openTD + "PROTEIN TITLE" + 
	    closeTD + openTD + "MOLECULAR WEIGHT" + closeTD + openTD + 
	    "pI VALUE" + closeTD + openTD + "FUNCTION" + closeTD + closeTR;

	String endTable = openTab + "/TABLE" + closeTab;
	String endLine = openTab + "/HTML" + closeTab;

		String maxmwCode = "\u003Ccenter\u003E\u003Cbr\u003E\u003Cb\u003EMax " + 
	    "Molecular weight = " + maxMW +"\u003C/b\u003E\u003Cbr\u003E";
	
	String minmwCode = "\u003Cb\u003EMin Molecular weight = " + minMW + "\u003C/b\u003E\u003Cbr\u003E";

	String maxpiCode = "\u003Cb\u003EMax pI Value = " + maxPi + "\u003C/b\u003E\u003Cbr\u003E";
	
	String minpiCode = "\u003Cb\u003EMin pI Value = " + minPi + "\u003C/b\u003E\u003Cbr\u003E";
	String filesizeCode = "\u003Cb\u003EProteome File Size = " + 
	    sorted.size() + "\u003C/b\u003E\u003Cbr\u003E\u003Cbr\u003E";
	
	
	try{
	    
	    pWrite.println( startingLine );
	    pWrite.println( maxmwCode );
	    pWrite.println( minmwCode );
	    //buf.newLine();
	    pWrite.println( maxpiCode );
	    //buf.newLine();
	    pWrite.println( minpiCode);
	    pWrite.println( filesizeCode );
	    pWrite.println( startTable );
	}catch( Exception e ){
	    System.err.println( e.getMessage());
	}

	
	String protInfoTable = "";
	String molwtValue = "";
	double molwtDouble = 0;
	String pI = "";
	double pIDouble = 0;
	Vector tmp = new Vector();
	//System.out.println( sorted.size() );
	for( int i = 0; i < sorted.size(); i++ ){
	    //  try{
		tmp = ((Vector)sorted.elementAt(i));
		//System.out.println( tmp.elementAt(1) );
		pI = (String)tmp.elementAt(1);/*(String)pI_vals.elementAt( i )*/;
		//System.out.println( pI );
	    pIDouble = Double.parseDouble(pI);
	    molwtValue = (String)tmp.elementAt(2);/*molwt.elementAt( i )*/;
	    molwtDouble = Double.parseDouble(molwtValue);

	    protInfoTable = openTR + openTD +
		(String)tmp.elementAt(0)/*(String)names.elementAt( i )*/ + closeTD + openTD + 
		molwtValue + closeTD + openTD +
		pI + closeTD + openTD +
		(String)tmp.elementAt(3)/*functions.elementAt( i )*/ + closeTD + closeTR;
	    
	    pWrite.println( protInfoTable );

	    //   }catch(IOException e ){
	    //System.err.println( e + " " + e.getMessage() + "hi" );
	    //e.printStackTrace();
	    //}
	}



	//try{

	    pWrite.println( endTable );
	    pWrite.println( endLine );
	    //System.out.println( "closing stream" );
	    pWrite.close();
	    //}catch( Exception e ){
	    ///    System.err.println( e.getMessage() );
	    //}
	    //finally{
	    //try{
		pWrite.close();
		//}catch( Exception c ){
		//System.err.println( c.getMessage() );
		// }
    
	
	//File f = new File( "./webgen.html" );
	//try{
	//  BrowserLauncher.openURL( f.toURL().toString() );
	//}catch( MalformedURLException e ){ 
	//  System.err.println( e.getMessage() );
	//}
	//catch( IOException e ){
	//  System.err.println( e.getMessage() );
	//}
    }
}