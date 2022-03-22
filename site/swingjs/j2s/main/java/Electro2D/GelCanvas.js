(function(){var P$=Clazz.newPackage("main.java.Electro2D"),p$1={},I$=[[0,'java.awt.Dimension','java.util.Vector','main.java.Electro2D.IEFProtein','main.java.Electro2D.CompIEF','main.java.Electro2D.E2DProtein','main.java.Electro2D.ProteinDot','java.awt.Color','main.java.Electro2D.GIFEncoder','java.io.BufferedOutputStream','java.io.FileOutputStream','main.java.Electro2D.ProteinFrame','main.java.Electro2D.IEFFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GelCanvas", null, 'javax.swing.JPanel', 'java.awt.event.MouseListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxPH=-1;
this.minPH=-1;
this.tenK=48;
this.twentyfiveK=48;
this.fiftyK=48;
this.hundredK=48;
this.calculateMW=true;
this.reMWLabel=false;
this.barProteinsStillMoving=true;
},1);

C$.$fields$=[['Z',['pHLinesNeedToBeDrawn','mWLinesNeedToBeDrawn','redrawPHAndMWLines','indicateProteinPosition','calculateMW','reMWLabel','barProteinsStillMoving','doShrink','doGenDots','doAnimateIEF','doDrawIEF'],'D',['maxPH','minPH','lowAcrylamide','highAcrylamide','tenK','twentyfiveK','fiftyK','hundredK','xLoc','yLoc'],'I',['genDotsRepeats'],'O',['electro2D','main.java.Electro2D.Electro2D','barProteins','java.util.Vector','+dotProteins','+barProteins2','+dotProteins2','comp','main.java.Electro2D.CompIEF','gelCanvasRectangle','java.awt.Rectangle','bufferImage','java.awt.Image','bufferImageGraphics','java.awt.Graphics']]
,['Z',['blink'],'I',['iefRed','iefGreen','iefBlue']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.electro2D=e;
this.addMouseListener$java_awt_event_MouseListener(this);
}, 1);

Clazz.newMeth(C$, 'getMinimiumSize$',  function () {
return Clazz.new_([800, this.electro2D.getHeight$()],$I$(1,1).c$$I$I);
});

Clazz.newMeth(C$, 'prepare$',  function () {
this.barProteins=Clazz.new_($I$(2,1));
this.dotProteins=Clazz.new_($I$(2,1));
this.maxPH=this.electro2D.getMaxRange$();
this.minPH=this.electro2D.getMinRange$();
$I$(3,"setRange$D$D$I",[this.maxPH, this.minPH, this.getWidth$()]);
this.comp=Clazz.new_($I$(4,1).c$$D$D,[this.maxPH, this.minPH]);
this.fillBarProteinVector$();
});

Clazz.newMeth(C$, 'fillBarProteinVector$',  function () {
var sequenceTitles=this.electro2D.getSequenceTitles$();
var molecularWeights=this.electro2D.getMolecularWeights$();
var pIValues=this.electro2D.getPiValues$();
var sequences=this.electro2D.getSequences$();
var functions=this.electro2D.getFunctions$();
for (var i=0; i < sequenceTitles.size$(); i++) {
this.barProteins.addElement$O(Clazz.new_([Clazz.new_([sequenceTitles.elementAt$I(i).toString(), (Double.valueOf$S(molecularWeights.elementAt$I(i).toString())).valueOf(), (Double.valueOf$S(pIValues.elementAt$I(i).toString())).valueOf(), sequences.elementAt$I(i).toString(), functions.elementAt$I(i).toString()],$I$(5,1).c$$S$D$D$S$S), this],$I$(3,1).c$$main_java_Electro2D_E2DProtein$main_java_Electro2D_GelCanvas));
}
var t0=System.currentTimeMillis$();
this.barProteins=this.comp.sortBarProteins$java_util_Vector(this.barProteins);
this.makeDotProteins$();
System.out.println$S("GelCanvas.sortBarProteins (ms) " + (Long.$s(Long.$sub(System.currentTimeMillis$(),t0))));
return;
});

Clazz.newMeth(C$, 'makeDotProteins$',  function () {
for (var i=0, m=this.barProteins.size$(); i < m; i++) {
var p=this.barProteins.elementAt$I(i);
var tempx=p.returnX$();
var tempy=p.returnY$();
var tempProteins=p.getProtein$();
for (var j=0, n=tempProteins.size$(); j < n; j++) {
this.dotProteins.addElement$O(Clazz.new_([tempProteins.elementAt$I(j), this, tempx, tempy + 43],$I$(6,1).c$$main_java_Electro2D_E2DProtein$javax_swing_JPanel$D$D));
}
}
});

Clazz.newMeth(C$, 'prepare2$',  function () {
var sequenceTitles2=this.electro2D.getSequenceTitles2$();
var molecularWeights2=this.electro2D.getMolecularWeights2$();
var pIValues2=this.electro2D.getPiValues2$();
var sequences2=this.electro2D.getSequences2$();
var functions2=this.electro2D.getFunctions2$();
this.barProteins2=Clazz.new_($I$(2,1));
this.dotProteins2=Clazz.new_($I$(2,1));
for (var i=this.dotProteins.size$() - 1; i >= 0; i--) {
this.dotProteins.elementAt$I(i).changeColor$java_awt_Color($I$(7).red);
var tempSequence=this.dotProteins.elementAt$I(i).getPro$().getSequence$();
for (var j=sequences2.size$() - 1; j >= 0; j--) {
if ((sequences2.elementAt$I(j)).equals$O(tempSequence)) {
sequences2.remove$I(j);
sequenceTitles2.remove$I(j);
molecularWeights2.remove$I(j);
pIValues2.remove$I(j);
functions2.remove$I(j);
this.dotProteins.elementAt$I(i).changeColor$java_awt_Color($I$(7).green);
break;
}}
}
for (var i=0; i < sequences2.size$(); i++) {
this.barProteins2.addElement$O(Clazz.new_([Clazz.new_([(sequenceTitles2.elementAt$I(i)), ((Double.valueOf$S(molecularWeights2.elementAt$I(i)))).doubleValue$(), ((Double.valueOf$S(pIValues2.elementAt$I(i)))).doubleValue$(), sequences2.elementAt$I(i), functions2.elementAt$I(i)],$I$(5,1).c$$S$D$D$S$S), this],$I$(3,1).c$$main_java_Electro2D_E2DProtein$main_java_Electro2D_GelCanvas));
}
var tempx;
var tempy;
var tempProteins;
var tempDot;
for (var i=0; i < this.barProteins2.size$(); i++) {
tempx=this.barProteins2.elementAt$I(i).returnX$();
tempy=this.barProteins2.elementAt$I(i).returnY$();
tempProteins=this.barProteins2.elementAt$I(i).getProtein$();
tempDot=Clazz.new_([tempProteins.elementAt$I(0), this, tempx, tempy + 43],$I$(6,1).c$$main_java_Electro2D_E2DProtein$javax_swing_JPanel$D$D);
tempDot.changeColor$java_awt_Color($I$(7).yellow);
this.dotProteins2.addElement$O(tempDot);
}
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
if (this.gelCanvasRectangle == null  || this.bufferImage == null   || this.bufferImageGraphics == null  ) {
this.gelCanvasRectangle=this.getBounds$();
this.bufferImage=this.createImage$I$I(this.gelCanvasRectangle.width, this.gelCanvasRectangle.height);
this.bufferImageGraphics=this.bufferImage.getGraphics$();
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).BLACK);
this.bufferImageGraphics.fillRect$I$I$I$I(0, 0, this.gelCanvasRectangle.width - 1, this.gelCanvasRectangle.height - 1);
}if (this.doAnimateIEF) {
this.doAnimateIEF=false;
this.animateIEF$java_awt_Graphics(g);
return;
}if (this.doDrawIEF) {
this.doDrawIEF=false;
this.drawIEF$java_awt_Graphics(g);
return;
}if (this.doShrink) {
this.clearIEF$java_awt_Graphics(g);
this.drawIEF$java_awt_Graphics(g);
this.doShrink=false;
return;
}if (this.doGenDots) {
this.doGenDots=false;
p$1.clearCanvas$java_awt_Graphics$I$I.apply(this, [g, 1, 47]);
for (var i=0; i < this.dotProteins.size$(); i++) {
this.dotProteins.elementAt$I(i).changeY$();
}
if (this.dotProteins2 != null ) {
for (var j=0; j < this.dotProteins2.size$(); j++) {
this.dotProteins2.elementAt$I(j).changeY$();
}
}}if (this.dotProteins == null ) {
this.dotProteins=Clazz.new_($I$(2,1));
}if (this.dotProteins2 == null ) {
this.dotProteins2=Clazz.new_($I$(2,1));
}p$1.clearCanvas$java_awt_Graphics$I$I.apply(this, [this.bufferImageGraphics, 2, 49]);
for (var i=0; i < this.dotProteins.size$(); i++) {
this.dotProteins.elementAt$I(i).draw$java_awt_Graphics(this.bufferImageGraphics);
}
for (var i=0; i < this.dotProteins2.size$(); i++) {
this.dotProteins2.elementAt$I(i).draw$java_awt_Graphics(this.bufferImageGraphics);
}
if (this.mWLinesNeedToBeDrawn && this.tenK != 48  ) {
this.redoMWLines$();
this.drawPHLines$();
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bufferImage, 0, 0, this);
if (this.maxPH != -1  && this.minPH != -1   && this.pHLinesNeedToBeDrawn ) {
this.drawPHLines$();
}if (this.mWLinesNeedToBeDrawn) {
this.initiateMWLines$java_awt_Graphics(g);
this.mWLinesNeedToBeDrawn=false;
this.redrawPHAndMWLines=true;
} else if (this.redrawPHAndMWLines) {
this.drawPHLines$();
this.redoMWLines$();
}if (this.indicateProteinPosition) {
this.redrawLocation$();
}this.bufferImageGraphics.setColor$java_awt_Color($I$(7).RED);
this.bufferImageGraphics.drawRect$I$I$I$I(0, 0, this.gelCanvasRectangle.width - 1, this.gelCanvasRectangle.height - 1);
this.bufferImageGraphics.drawRect$I$I$I$I(1, 1, this.gelCanvasRectangle.width - 3, 46);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bufferImage, 0, 0, this);
});

Clazz.newMeth(C$, 'genGIFFile$java_util_Vector$I',  function (dts, seconds) {
$I$(6).setShow$();
this.dotProteins=dts;
this.mWLinesNeedToBeDrawn=true;
this.maxPH=10;
this.minPH=3;
this.repaint$();
try {
var gifEnc=Clazz.new_($I$(8,1).c$$java_awt_Image,[this.bufferImage]);
gifEnc.Write$java_io_OutputStream(Clazz.new_([Clazz.new_([this.electro2D.getLastFileLoaded$() + seconds + ".gif" ],$I$(10,1).c$$S)],$I$(9,1).c$$java_io_OutputStream));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ex = e$$;
{
System.err.println$S(ex.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"java.awt.AWTException")){
var ex = e$$;
{
System.err.println$S(ex.getMessage$());
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'drawPHLines$',  function () {
var linePositions=this.electro2D.showPH$();
var length=0;
var loc=0;
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).WHITE);
for (var i=0; i < linePositions.size$(); i++) {
length=0;
loc=(linePositions.get$I(i)).$c();
if (loc > 0 && loc < this.getWidth$() ) {
while (length < this.getHeight$()){
this.bufferImageGraphics.drawLine$I$I$I$I(loc, length, loc, length + 5);
length=length + 10;
}
}}
});

Clazz.newMeth(C$, 'setRedrawPHLines$Z',  function (tf) {
this.pHLinesNeedToBeDrawn=tf;
this.redrawPHAndMWLines=false;
});

Clazz.newMeth(C$, 'resetRanges$',  function () {
this.minPH=-1;
this.maxPH=-1;
this.tenK=48;
this.twentyfiveK=48;
this.fiftyK=48;
this.hundredK=48;
this.reMWLabel=false;
this.calculateMW=true;
this.redrawPHAndMWLines=false;
this.mWLinesNeedToBeDrawn=false;
this.barProteinsStillMoving=true;
});

Clazz.newMeth(C$, 'setMWLines$I',  function (i) {
this.mWLinesNeedToBeDrawn=true;
this.calculateMW=true;
this.genDotsRepeats=i;
});

Clazz.newMeth(C$, 'initiateMWLines$java_awt_Graphics',  function (g) {
this.lowAcrylamide=this.electro2D.getLowPercent$();
this.highAcrylamide=this.electro2D.getHighPercent$();
var height=this.getHeight$();
if (this.calculateMW) {
if (this.lowAcrylamide == this.highAcrylamide ) {
for (var i=0; i < this.genDotsRepeats; i++) {
this.hundredK=this.hundredK + (10 * (1 / this.lowAcrylamide)) * (2) * 0.25 * (1) ;
this.fiftyK=this.fiftyK + (10 * (1 / this.lowAcrylamide)) * (2) * 0.25 * (2) ;
this.twentyfiveK=this.twentyfiveK + (10 * (1 / this.lowAcrylamide)) * (2) * 0.25 * (4) ;
this.tenK=this.tenK + (10 * (1 / this.lowAcrylamide)) * (2) * 0.25 * (10) ;
}
} else {
for (var i=0; i < this.genDotsRepeats; i++) {
this.hundredK=this.hundredK + (10 / (((this.hundredK - 48) * (this.highAcrylamide - this.lowAcrylamide) / (height - 48)) + this.lowAcrylamide)) * (2) * 0.25 * (1) ;
this.fiftyK=this.fiftyK + (10 / (((this.fiftyK - 48) * (this.highAcrylamide - this.lowAcrylamide) / (height - 48)) + this.lowAcrylamide)) * (2) * 0.25 * (2) ;
this.twentyfiveK=this.twentyfiveK + (10 / (((this.twentyfiveK - 48) * (this.highAcrylamide - this.lowAcrylamide) / (height - 48)) + this.lowAcrylamide)) * (2) * 0.25 * (4) ;
this.tenK=this.tenK + (10 / (((this.tenK - 48) * (this.highAcrylamide - this.lowAcrylamide) / (height - 48)) + this.lowAcrylamide)) * (2) * 0.25 * (10) ;
}
}this.calculateMW=false;
p$1.drawMWLines$java_awt_Color.apply(this, [$I$(7).LIGHT_GRAY]);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bufferImage, 0, 0, this);
}});

Clazz.newMeth(C$, 'drawMWLines$java_awt_Color',  function (c) {
this.bufferImageGraphics.setColor$java_awt_Color(c);
var width=0;
while (width < this.getWidth$()){
this.bufferImageGraphics.drawLine$I$I$I$I(width, (this.hundredK|0), width + 5, (this.hundredK|0));
this.bufferImageGraphics.drawLine$I$I$I$I(width, (this.fiftyK|0), width + 5, (this.fiftyK|0));
this.bufferImageGraphics.drawLine$I$I$I$I(width, (this.twentyfiveK|0), width + 5, (this.twentyfiveK|0));
this.bufferImageGraphics.drawLine$I$I$I$I(width, (this.tenK|0), width + 5, (this.tenK|0));
width=width + 10;
}
this.electro2D.clearMW$();
this.electro2D.showMW$I$I$I$I$Z((this.hundredK|0), (this.fiftyK|0), (this.twentyfiveK|0), (this.tenK|0), this.reMWLabel);
this.reMWLabel=true;
}, p$1);

Clazz.newMeth(C$, 'redoMWLines$',  function () {
this.lowAcrylamide=this.electro2D.getLowPercent$();
this.highAcrylamide=this.electro2D.getHighPercent$();
p$1.drawMWLines$java_awt_Color.apply(this, [$I$(7).WHITE]);
});

Clazz.newMeth(C$, 'drawIEF$java_awt_Graphics',  function (g) {
for (var i=0; i < this.barProteins.size$(); i++) {
if (this.barProteinsStillMoving) {
this.barProteins.elementAt$I(i).changeX$();
} else {
this.barProteins.elementAt$I(i).setX$();
}this.barProteins.elementAt$I(i).draw$java_awt_Graphics(this.bufferImageGraphics);
}
if (this.barProteins2 != null ) {
for (var i=0; i < this.barProteins2.size$(); i++) {
if (this.barProteinsStillMoving) {
this.barProteins2.elementAt$I(i).changeX$();
} else {
this.barProteins2.elementAt$I(i).setX$();
}this.barProteins2.elementAt$I(i).draw$java_awt_Graphics(this.bufferImageGraphics);
}
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bufferImage, 0, 0, this);
});

Clazz.newMeth(C$, 'shrinkIEF$',  function () {
this.doShrink=true;
this.repaint$();
});

Clazz.newMeth(C$, 'clearIEF$java_awt_Graphics',  function (g) {
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).BLACK);
this.bufferImageGraphics.clearRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 3, 45);
this.bufferImageGraphics.fillRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 3, 45);
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).RED);
this.bufferImageGraphics.drawRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 3, 45);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.bufferImage, 0, 0, this);
});

Clazz.newMeth(C$, 'getRed$',  function () {
return C$.iefRed;
}, 1);

Clazz.newMeth(C$, 'getGreen$',  function () {
return C$.iefGreen;
}, 1);

Clazz.newMeth(C$, 'getBlue$',  function () {
return C$.iefBlue;
}, 1);

Clazz.newMeth(C$, 'setRed$',  function () {
C$.iefRed=54;
}, 1);

Clazz.newMeth(C$, 'setGreen$',  function () {
C$.iefGreen=100;
}, 1);

Clazz.newMeth(C$, 'setBlue$',  function () {
C$.iefBlue=139;
}, 1);

Clazz.newMeth(C$, 'animateIEF$java_awt_Graphics',  function (g) {
var finalRed=0;
var finalGreen=0;
var finalBlue=0;
var width=$I$(3).returnTempWidth$();
var finalWidth=$I$(3).returnWidth$();
this.bufferImageGraphics.setColor$java_awt_Color(Clazz.new_($I$(7,1).c$$I$I$I,[C$.iefRed, C$.iefGreen, C$.iefBlue]));
this.bufferImageGraphics.fillRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 3, 45);
$I$(3).changeWidth$();
if (this.barProteins == null ) return;
this.drawIEF$java_awt_Graphics(g);
C$.iefRed=C$.iefRed - 1;
C$.iefGreen=C$.iefGreen - 2;
C$.iefBlue=((C$.iefBlue - 2.78)|0);
if (C$.iefRed <= finalRed || C$.iefGreen <= finalGreen  || C$.iefBlue <= finalBlue  || width >= finalWidth  ) {
this.barProteinsStillMoving=false;
this.bufferImageGraphics.setColor$java_awt_Color(Clazz.new_($I$(7,1).c$$I$I$I,[finalRed, finalGreen, finalBlue]));
$I$(3).setWidth$();
this.bufferImageGraphics.fillRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 3, 45);
this.drawIEF$java_awt_Graphics(g);
}});

Clazz.newMeth(C$, 'getDots$',  function () {
return this.dotProteins;
});

Clazz.newMeth(C$, 'getDots2$',  function () {
return this.dotProteins2;
});

Clazz.newMeth(C$, 'genDots$',  function () {
this.doGenDots=true;
this.repaint$();
});

Clazz.newMeth(C$, 'restartCanvas$',  function () {
this.barProteins=null;
this.dotProteins=null;
this.barProteins2=null;
this.dotProteins2=null;
this.repaint$();
});

Clazz.newMeth(C$, 'clearCanvas$java_awt_Graphics$I$I',  function (g, dw, dh) {
g.setColor$java_awt_Color($I$(7).BLACK);
g.clearRect$I$I$I$I(1, 48, this.gelCanvasRectangle.width - dw, this.gelCanvasRectangle.height - dh);
g.fillRect$I$I$I$I(1, 48, this.gelCanvasRectangle.width - dw, this.gelCanvasRectangle.height - dh);
g.setColor$java_awt_Color($I$(7).RED);
g.drawRect$I$I$I$I(1, 48, this.gelCanvasRectangle.width - dw, this.gelCanvasRectangle.height - dh);
}, p$1);

Clazz.newMeth(C$, 'drawLocation$S',  function (id) {
this.xLoc=0;
this.yLoc=0;
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).BLACK);
this.bufferImageGraphics.fillRect$I$I$I$I(2, 2, this.gelCanvasRectangle.width - 4, 45);
for (var i=0; i < this.dotProteins.size$(); i++) {
if (this.dotProteins.elementAt$I(i).getPro$().getID$().equals$O(id)) {
this.xLoc=this.dotProteins.elementAt$I(i).returnX$();
this.yLoc=this.dotProteins.elementAt$I(i).returnY$();
i=this.dotProteins.size$();
}}
this.indicateProteinPosition=true;
this.repaint$();
});

Clazz.newMeth(C$, 'startDotBlink$',  function () {
C$.blink=true;
});

Clazz.newMeth(C$, 'getBlink$',  function () {
return C$.blink;
}, 1);

Clazz.newMeth(C$, 'stopBlink$',  function () {
C$.blink=false;
}, 1);

Clazz.newMeth(C$, 'redrawLocation$',  function () {
this.bufferImageGraphics.setColor$java_awt_Color($I$(7).LIGHT_GRAY);
this.bufferImageGraphics.drawLine$I$I$I$I((this.xLoc|0) + 2, (this.yLoc|0), 0, (this.yLoc|0));
this.bufferImageGraphics.drawLine$I$I$I$I((this.xLoc|0) + 2, (this.yLoc|0), (this.xLoc|0) + 2, 0);
});

Clazz.newMeth(C$, 'resetLocation$',  function () {
this.indicateProteinPosition=false;
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
var clickX=e.getX$();
var clickY=e.getY$();
p$1.showDotFrame$java_util_Vector$D$D.apply(this, [this.dotProteins, clickX, clickY]);
p$1.showDotFrame$java_util_Vector$D$D.apply(this, [this.dotProteins2, clickX, clickY]);
p$1.showIEFFrame$java_util_Vector$D$D.apply(this, [this.barProteins, clickX, clickY]);
p$1.showIEFFrame$java_util_Vector$D$D.apply(this, [this.barProteins2, clickX, clickY]);
});

Clazz.newMeth(C$, 'showDotFrame$java_util_Vector$D$D',  function (dotProteins, clickX, clickY) {
if (dotProteins != null ) {
for (var i=0; i < dotProteins.size$(); i++) {
var dp=dotProteins.elementAt$I(i);
var dotX=dp.returnX$();
var dotY=dp.returnY$();
if (dotProteins.elementAt$I(i).getShowMe$() && clickX <= dotX + 6   && clickX >= dotX - 1  ) {
if (clickY <= dotY + 7  && clickY >= dotY - 1  ) {
var pFrame=Clazz.new_([this.electro2D, dp.getPro$().getID$(), 1],$I$(11,1).c$$main_java_Electro2D_Electro2D$S$I);
pFrame.setVisible$Z(true);
}}}
}}, p$1);

Clazz.newMeth(C$, 'showIEFFrame$java_util_Vector$D$D',  function (barProteins, clickX, clickY) {
var iefWidth=$I$(3).returnWidth$();
if (barProteins == null ) return;
for (var j=0; j < barProteins.size$(); j++) {
var bp=barProteins.elementAt$I(j);
var iefX=bp.returnX$();
var iefY=bp.returnY$();
if ($I$(3).returnHeight$() > 0) {
if (clickX >= iefX  && clickX <= iefX + iefWidth  ) {
if (clickY >= iefY  && clickY <= iefY + 40  ) {
var iFrame=Clazz.new_($I$(12,1).c$$main_java_Electro2D_IEFProtein,[bp]);
iFrame.setResizable$Z(true);
iFrame.pack$();
iFrame.setVisible$Z(true);
}}}}
}, p$1);

Clazz.newMeth(C$, 'drawIEF$',  function () {
this.doDrawIEF=true;
this.repaint$();
});

Clazz.newMeth(C$, 'animateIEF$',  function () {
this.doAnimateIEF=true;
this.repaint$();
});

C$.$static$=function(){C$.$static$=0;
C$.iefRed=54;
C$.iefGreen=100;
C$.iefBlue=139;
C$.blink=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
