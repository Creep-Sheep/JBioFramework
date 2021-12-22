(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'java.awt.Font','main.java.Electro1D.Protein','java.awt.Point','java.text.DecimalFormat','Thread','java.awt.Color',['javajs.async.SwingJSUtils','.StateHelper']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Plot", null, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['imageCreated','standardsSet','paintRM','paintUserRM','stopAnimation','showExperimentalMW','showSampleMW','questionRCorr','showLogMW','showNotBracketed','graphVerticalLine','graphHorizontalLine','newYLine','newXLine','Played','harpPlayed'],'D',['yDivision','logMwMax','logMwMin','ln10','yConversion','deltaPixelY','deltaPixelX','deltaMw','mwOffsetFromMax','pixOffsetFromTop','mouseRM','plotRM','experimentalMW','logMw','sumX','sumY','sumXsq','sumYsq','sumProd','rCorr','rCorrSq','slope','yIntercept','errorMargin'],'I',['pause','numberOfStds','bottomEdge','rightEdge','xAxesLabelY','xAxesRMLabelY','yAxesLabelY','yAxisLabelX','charHalfHeight','charHeight','charWidth','charHalfWidth','division','gridRows','gridCols','rightGridCol','leftGridCol','bottomGridRow','topGridRow','rows','cols','nPoints','yPos','xPos','xMouse','xPlot','userLineY','userLineX','fitLineX1','fitLineX2','fitLineY1','fitLineY2'],'O',['runner','Thread','$parent','main.java.Electro1D.Electrophoresis','stds','main.java.Electro1D.Protein[]','sample','main.java.Electro1D.Protein','+dye','offScreenImage','java.awt.Image','fm','java.awt.FontMetrics','$font','java.awt.Font','xArray','int[]','+yArray','lineCoord','java.awt.Point','twoDigits','java.text.DecimalFormat','stateHelper','javajs.async.SwingJSUtils.StateHelper']]
,['O',['plotFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$main_java_Electro1D_Electrophoresis',  function (electrophoresis) {
Clazz.super_(C$, this);
this.pause=20;
this.numberOfStds=7;
this.stds=Clazz.array($I$(2), [this.numberOfStds]);
this.sample=Clazz.new_($I$(2,1));
this.dye=Clazz.new_($I$(2,1));
this.stopAnimation=true;
this.newYLine=true;
this.newXLine=true;
this.yAxisLabelX=1;
this.gridRows=10;
this.gridCols=10;
this.rows=14;
this.cols=14;
this.xArray=Clazz.array(Integer.TYPE, [this.cols]);
this.yArray=Clazz.array(Integer.TYPE, [this.rows]);
this.ln10=1.0;
this.yConversion=1.0;
this.deltaPixelY=1.0;
this.deltaPixelX=1.0;
this.deltaMw=1.0;
this.mwOffsetFromMax=1.0;
this.pixOffsetFromTop=1.0;
this.yPos=1;
this.xPos=1;
this.lineCoord=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.errorMargin=0.2;
this.$parent=electrophoresis;
this.ln10=Math.log(10.0);
this.rightGridCol=this.cols - 1;
this.leftGridCol=this.rightGridCol - this.gridCols;
this.bottomGridRow=this.rows - 1;
this.topGridRow=this.bottomGridRow - this.gridRows;
this.twoDigits=Clazz.new_($I$(4,1).c$$S,["0.00"]);
this.addMouseListener$java_awt_event_MouseListener(((P$.Plot$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Plot$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['main.java.Electro1D.Plot'].doMouseClicked$I$I.apply(this.b$['main.java.Electro1D.Plot'], [e.getX$(), e.getY$()]);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});
})()
), Clazz.new_(P$.Plot$1.$init$,[this, null])));
this.addMouseMotionListener$java_awt_event_MouseMotionListener(((P$.Plot$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Plot$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseMotionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
if (this.b$['main.java.Electro1D.Plot'].standardsSet) {
this.b$['main.java.Electro1D.Plot'].paintRM=p$1.mouseOnXAxis$I$I.apply(this.b$['main.java.Electro1D.Plot'], [e.getX$(), e.getY$()]);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
}});
})()
), Clazz.new_(P$.Plot$2.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'doMouseClicked$I$I',  function (x, y) {
if (!this.standardsSet) {
return;
}for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k].matchPlotPosition$I$I(x, y)) {
this.$parent.displayProtein$main_java_Electro1D_Protein(this.stds[k]);
return;
}}
if (p$1.mouseOnXAxis$I$I.apply(this, [x, y])) {
this.xPlot=this.xMouse;
this.plotRM=this.mouseRM;
this.paintUserRM=true;
this.stopAnimation=false;
this.showExperimentalMW=false;
this.showSampleMW=false;
this.questionRCorr=false;
this.showLogMW=false;
this.showNotBracketed=false;
this.graphVerticalLine=false;
this.graphHorizontalLine=false;
this.start$();
}});

Clazz.newMeth(C$, 'start$',  function () {
if (this.runner == null ) {
this.runner=Clazz.new_($I$(5,1).c$$Runnable,[this]);
this.runner.start$();
}});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.runner != null ) {
this.stopAnimation=true;
this.runner=null;
}});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'calcLine',  function () {
if (this.nPoints <= 1) {
this.slope=0.0;
this.yIntercept=0.0;
return;
}this.slope=(this.nPoints * this.sumProd - this.sumX * this.sumY) / (this.nPoints * this.sumXsq - this.sumX * this.sumX);
this.yIntercept=(this.sumY - this.slope * this.sumX) / this.nPoints;
}, p$1);

Clazz.newMeth(C$, 'showNotBracket$java_awt_Graphics',  function (g) {
if (this.showNotBracketed) g.drawString$S$I$I("RM not bracketed by Standards", this.xArray[this.leftGridCol], (this.getSize$().height/8|0));
}, p$1);

Clazz.newMeth(C$, 'resetSums',  function () {
this.sumX=0.0;
this.sumY=0.0;
this.sumXsq=0.0;
this.sumYsq=0.0;
this.sumProd=0.0;
this.nPoints=0;
}, p$1);

Clazz.newMeth(C$, 'calcLinePoint$D',  function (d1) {
var d2=p$1.calcLogMw$D.apply(this, [d1]);
var d3=this.logMwMax - d2;
var d4=d3 * this.yConversion;
var j=((this.yArray[this.topGridRow] + d4)|0);
var i=((this.xArray[this.leftGridCol] + d1 * this.deltaPixelX)|0);
return Clazz.new_($I$(3,1).c$$I$I,[i, j]);
}, p$1);

Clazz.newMeth(C$, 'calcMaxMinLogs$',  function () {
var i=0;
var j=9999999;
var mDelta;
var test;
for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k].mw > i) i=this.stds[k].mw;
if (this.stds[k].mw < j) j=this.stds[k].mw;
}
this.logMwMax=Math.log(i) / this.ln10;
this.logMwMin=Math.log(j) / this.ln10;
mDelta=(1.1 * (this.logMwMax - this.logMwMin));
for (this.yDivision=0; 10 * this.yDivision < mDelta ; this.yDivision+=0.05) {
}
for (test=(this.logMwMax|0); test <= this.logMwMax ; test+=this.yDivision) {
}
this.logMwMax=test;
this.logMwMin=this.logMwMax - 10 * this.yDivision;
this.deltaMw=this.logMwMax - this.logMwMin;
});

Clazz.newMeth(C$, 'drawYScale$java_awt_Graphics',  function (g) {
var d=this.logMwMax;
var i=this.topGridRow;
if (this.standardsSet) {
for (var j=0; j <= this.gridRows; j++) {
g.drawString$S$I$I(this.twoDigits.format$D(d), this.yAxisLabelX + 5 * this.charHalfWidth, this.yArray[i] + this.charHalfHeight);
++i;
d-=this.yDivision;
}
}}, p$1);

Clazz.newMeth(C$, 'showExpMW$java_awt_Graphics',  function (g) {
if (this.showExperimentalMW) g.drawString$S$I$I("Experimental MW = " + String.valueOf$I((this.experimentalMW|0)), this.xArray[this.leftGridCol], (this.getSize$().height/8|0));
}, p$1);

Clazz.newMeth(C$, 'mouseOnXAxis$I$I',  function (i, j) {
var b=($b$[0] = 3, $b$[0]);
if (i < this.xArray[this.leftGridCol] || i > this.xArray[this.rightGridCol]  || j < this.yArray[this.bottomGridRow] - b  || j > this.yArray[this.bottomGridRow] + b ) return false;
this.xMouse=i;
return true;
}, p$1);

Clazz.newMeth(C$, 'sumYsqs$D',  function (d) {
this.sumYsq+=d * d;
}, p$1);

Clazz.newMeth(C$, 'calcStdCoords',  function () {
var point;
for (var i=0; i < this.numberOfStds; i++) {
if (this.stds[i].selected) {
point=p$1.calcLinePoint$D.apply(this, [this.stds[i].relativeMigration]);
this.stds[i].plotXPos=point.x;
this.stds[i].plotYPos=point.y;
}}
}, p$1);

Clazz.newMeth(C$, 'plotStandards$java_awt_Graphics',  function (g) {
var b1=($b$[0] = 6, $b$[0]);
var i=($b$[0] = b1/2, $b$[0]);
var j=($b$[0] = b1/2, $b$[0]);
Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
if (this.standardsSet) {
for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k].selected) {
g.setColor$java_awt_Color(this.stds[k].color);
g.fillOval$I$I$I$I(this.stds[k].plotXPos - j, this.stds[k].plotYPos - i, b1, b1);
g.setColor$java_awt_Color($I$(6).black);
g.drawOval$I$I$I$I(this.stds[k].plotXPos - j, this.stds[k].plotYPos - i, b1, b1);
}}
g.drawLine$I$I$I$I(this.fitLineX1, this.fitLineY1, this.fitLineX2, this.fitLineY2);
g.drawString$S$I$I("Slope = " + this.twoDigits.format$D(this.slope), this.xArray[7], this.yArray[4]);
g.drawString$S$I$I("y Intercept = " + this.twoDigits.format$D(this.yIntercept), this.xArray[7], this.yArray[4] + this.charHeight);
g.drawString$S$I$I("r = " + this.twoDigits.format$D(this.rCorr), this.xArray[7], this.yArray[4] + this.charHeight * 2);
g.drawString$S$I$I("r Squared = " + this.twoDigits.format$D(this.rCorrSq), this.xArray[7], this.yArray[4] + this.charHeight * 3);
}});

Clazz.newMeth(C$, 'drawAxes$java_awt_Graphics',  function (g) {
var oneDigit=Clazz.new_($I$(4,1).c$$S,["0.0"]);
g.setColor$java_awt_Color($I$(6).black);
g.drawString$S$I$I("Plot of Log MW as f(Relative Migration)", 10, this.charHeight);
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[this.bottomGridRow], this.xArray[this.rightGridCol], this.yArray[this.bottomGridRow]);
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[this.topGridRow], this.xArray[this.leftGridCol], this.yArray[this.bottomGridRow]);
var i1=this.leftGridCol;
for (var j=0; j <= this.gridCols; j+=2) {
g.drawString$S$I$I(oneDigit.format$D(j / 10.0), this.xArray[i1] - this.charWidth, this.xAxesLabelY);
i1+=2;
}
g.drawString$S$I$I("Relative Migration", this.xArray[this.leftGridCol + 2] + this.charHalfWidth, this.xAxesRMLabelY + this.charHalfHeight);
var yLabel="Log MW";
i1=this.yArray[this.leftGridCol + 5] - this.charHeight * ((yLabel.length$()/2|0));
for (var j=0; j < yLabel.length$(); j++) {
g.drawString$S$I$I(yLabel.substring$I$I(j, j + 1), this.yAxisLabelX + (this.charWidth/4|0), i1);
i1+=this.charHeight;
}
g.setColor$java_awt_Color($I$(6).lightGray);
i1=this.topGridRow;
for (var k=0; k < this.gridRows; k++) {
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[i1], this.xArray[this.rightGridCol], this.yArray[i1]);
++i1;
}
i1=this.leftGridCol + 1;
for (var i2=0; i2 < this.gridCols; i2++) {
g.drawLine$I$I$I$I(this.xArray[i1], this.yArray[this.topGridRow], this.xArray[i1], this.yArray[this.bottomGridRow]);
++i1;
}
g.setColor$java_awt_Color($I$(6).black);
}, p$1);

Clazz.newMeth(C$, 'calcLogMw$D',  function (d) {
if (this.slope == 0.0 ) return 0.0;
 else return this.slope * d + this.yIntercept;
}, p$1);

Clazz.newMeth(C$, 'sumXs$D',  function (d) {
this.sumX+=d;
}, p$1);

Clazz.newMeth(C$, 'showLgMW$java_awt_Graphics',  function (g) {
if (this.showLogMW) {
var g1=g.create$();
g1.setFont$java_awt_Font(C$.plotFont);
g1.drawString$S$I$I(this.twoDigits.format$D(this.logMw), this.xArray[this.leftGridCol] + this.charHalfWidth, this.userLineY);
g1.dispose$();
}}, p$1);

Clazz.newMeth(C$, 'graphVertLine$java_awt_Graphics',  function (g) {
if (this.graphVerticalLine) g.drawLine$I$I$I$I(this.xPlot, this.yArray[this.bottomGridRow], this.xPlot, this.userLineY);
}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.imageCreated) {
this.offScreenImage=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
this.$font=this.getFont$();
this.fm=this.getFontMetrics$java_awt_Font(this.$font);
this.calcDimensions$();
if (this.standardsSet) {
this.yConversion=this.deltaPixelY / this.deltaMw;
p$1.calcStdCoords.apply(this, []);
p$1.calcLineCoords.apply(this, []);
this.imageCreated=true;
}}var offScreenGraphics=this.offScreenImage.getGraphics$();
offScreenGraphics.setColor$java_awt_Color($I$(6).white);
offScreenGraphics.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
offScreenGraphics.setColor$java_awt_Color($I$(6).black);
offScreenGraphics.drawRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
offScreenGraphics.setColor$java_awt_Color(g.getColor$());
p$1.drawAxes$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.drawYScale$java_awt_Graphics.apply(this, [offScreenGraphics]);
this.plotStandards$java_awt_Graphics(offScreenGraphics);
p$1.displayRM$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.plotUserRM.apply(this, []);
p$1.showExpMW$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.showSampMW$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.showLgMW$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.graphVertLine$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.graphHorizLine$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.showNotBracket$java_awt_Graphics.apply(this, [offScreenGraphics]);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offScreenImage, 0, 0, this);
});

Clazz.newMeth(C$, 'calcFit',  function () {
if (this.nPoints <= 1) {
this.rCorr=0.0;
this.rCorrSq=0.0;
return;
}var d1=this.nPoints * this.sumProd - this.sumX * this.sumY;
var d2=this.nPoints * this.sumXsq - this.sumX * this.sumX;
var d3=this.nPoints * this.sumYsq - this.sumY * this.sumY;
d2=Math.pow(d2, 0.5);
d3=Math.pow(d3, 0.5);
this.rCorr=d1 / (d2 * d3);
this.rCorrSq=this.rCorr * this.rCorr;
}, p$1);

Clazz.newMeth(C$, 'showSampMW$java_awt_Graphics',  function (g) {
if (this.showSampleMW) {
var string=this.sample.abbr + " MW = " + String.valueOf$I(this.sample.mw) ;
g.drawString$S$I$I(string, this.xArray[this.leftGridCol], (this.getSize$().height/6|0));
this.$parent.displayProtein$main_java_Electro1D_Protein(this.sample);
if (!this.harpPlayed) {
this.harpPlayed=true;
}} else if (this.questionRCorr) {
g.drawString$S$I$I("No match! RM was OK, poor line fit?", this.xArray[this.leftGridCol], (this.getSize$().height/6|0));
}}, p$1);

Clazz.newMeth(C$, 'setResults$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein',  function (aprotein, protein1, protein2) {
this.stds=aprotein;
this.sample=protein1;
this.dye=protein2;
p$1.resetSums.apply(this, []);
for (var i=0; i < this.numberOfStds; i++) {
if (this.stds[i].selected) {
this.stds[i].relativeMigration=this.stds[i].getDistance$() / this.dye.getDistance$();
p$1.sumXs$D.apply(this, [this.stds[i].relativeMigration]);
p$1.sumXsqs$D.apply(this, [this.stds[i].relativeMigration]);
var d=Math.log(this.stds[i].mw) / this.ln10;
p$1.sumYs$D.apply(this, [d]);
p$1.sumYsqs$D.apply(this, [d]);
p$1.sumProds$D$D.apply(this, [this.stds[i].relativeMigration, d]);
++this.nPoints;
}}
p$1.calcLine.apply(this, []);
p$1.calcFit.apply(this, []);
this.sample.relativeMigration=this.sample.getDistance$() / this.dye.getDistance$();
this.calcMaxMinLogs$();
this.standardsSet=true;
this.graphVerticalLine=false;
this.graphHorizontalLine=false;
this.showExperimentalMW=false;
this.showLogMW=false;
this.showSampleMW=false;
this.questionRCorr=false;
this.imageCreated=false;
this.repaint$();
});

Clazz.newMeth(C$, 'sumXsqs$D',  function (d) {
this.sumXsq+=d * d;
}, p$1);

Clazz.newMeth(C$, 'sumYs$D',  function (d) {
this.sumY+=d;
}, p$1);

Clazz.newMeth(C$, 'plotUserRM',  function () {
if (this.paintUserRM) {
this.logMw=p$1.calcLogMw$D.apply(this, [this.plotRM]);
this.lineCoord=p$1.calcLinePoint$D.apply(this, [this.plotRM]);
if (this.newYLine) {
this.newYLine=false;
this.userLineY=this.yArray[this.bottomGridRow];
} else if (this.userLineY >= this.lineCoord.y + 2) this.userLineY-=2;
this.graphVerticalLine=true;
if (this.userLineY <= this.lineCoord.y + 2) {
if (this.newXLine) {
this.newXLine=false;
this.userLineX=this.xPlot;
} else this.userLineX-=2;
this.graphHorizontalLine=true;
if (this.userLineX <= this.xArray[this.leftGridCol]) {
this.showLogMW=true;
this.experimentalMW=Math.pow(10.0, this.logMw);
this.showExperimentalMW=true;
var d1=Math.abs((this.sample.mw - this.experimentalMW) / this.sample.mw);
var d2=Math.abs((this.sample.relativeMigration - this.plotRM) / this.sample.relativeMigration);
if (d1 < this.errorMargin ) this.showSampleMW=true;
 else if (d2 < this.errorMargin ) this.questionRCorr=true;
this.stop$();
p$1.resetFlags.apply(this, []);
this.paintUserRM=false;
}} else if (this.userLineY <= this.lineCoord.y + 2) {
this.showNotBracketed=true;
this.stop$();
p$1.resetFlags.apply(this, []);
this.paintUserRM=false;
}}}, p$1);

Clazz.newMeth(C$, 'calcDimensions$',  function () {
this.rightEdge=this.getSize$().width;
this.xArray[0]=0;
this.division=(this.rightEdge/this.cols|0);
for (var i=1; i < this.cols; i++) this.xArray[i]=this.xArray[i - 1] + this.division;

this.bottomEdge=this.getSize$().height;
this.yArray[0]=0;
this.division=(this.bottomEdge/this.rows|0);
for (var j=1; j < this.rows; j++) this.yArray[j]=this.yArray[j - 1] + this.division;

this.deltaPixelX=this.xArray[this.rightGridCol] - this.xArray[this.leftGridCol];
this.deltaPixelY=this.yArray[this.bottomGridRow] - this.yArray[this.topGridRow];
this.$font=this.getFont$();
this.fm=this.getFontMetrics$java_awt_Font(this.$font);
this.charWidth=this.fm.charWidth$C("0");
this.charHalfWidth=(this.charWidth/2|0);
this.charHalfHeight=(this.fm.getAscent$()/2|0);
this.charHeight=this.fm.getHeight$();
this.xAxesLabelY=this.yArray[this.bottomGridRow] + this.fm.getHeight$();
this.xAxesRMLabelY=this.xAxesLabelY + (this.fm.getHeight$()/2|0);
this.yAxesLabelY=this.yArray[this.topGridRow] - (this.fm.getHeight$()/2|0);
});

Clazz.newMeth(C$, 'displayRM$java_awt_Graphics',  function (g) {
if (this.paintRM) {
this.mouseRM=(this.xMouse - this.xArray[this.leftGridCol]) / this.deltaPixelX;
g.drawString$S$I$I(this.twoDigits.format$D(this.mouseRM), this.xArray[this.leftGridCol], this.yArray[this.bottomGridRow] + this.division);
}}, p$1);

Clazz.newMeth(C$, 'sumProds$D$D',  function (d1, d2) {
this.sumProd+=d1 * d2;
}, p$1);

Clazz.newMeth(C$, 'calcLineCoords',  function () {
var point;
point=p$1.calcLinePoint$D.apply(this, [0.01]);
this.fitLineX1=point.x;
this.fitLineY1=point.y;
point=p$1.calcLinePoint$D.apply(this, [1.0]);
this.fitLineX2=point.x;
this.fitLineY2=point.y;
}, p$1);

Clazz.newMeth(C$, 'graphHorizLine$java_awt_Graphics',  function (g) {
if (this.graphHorizontalLine) g.drawLine$I$I$I$I(this.xPlot, this.userLineY, this.userLineX, this.userLineY);
}, p$1);

Clazz.newMeth(C$, 'resetFlags',  function () {
this.stopAnimation=true;
this.newYLine=true;
this.newXLine=true;
this.paintRM=false;
this.Played=false;
this.harpPlayed=false;
}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(5).currentThread$().setPriority$I(1);
this.stateHelper=Clazz.new_([((P$.Plot$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Plot$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (this.b$['main.java.Electro1D.Plot'].stateHelper.isAlive$() && !this.b$['main.java.Electro1D.Plot'].stopAnimation ) {
switch (this.b$['main.java.Electro1D.Plot'].stateHelper.getState$()) {
case 0:
this.b$['main.java.Electro1D.Plot'].stateHelper.setState$I(1);
this.b$['main.java.Electro1D.Plot'].stateHelper.sleep$I(this.b$['main.java.Electro1D.Plot'].pause);
break;
case 1:
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
this.b$['main.java.Electro1D.Plot'].stateHelper.next$I(0);
break;
}
}return false;
});
})()
), Clazz.new_(P$.Plot$3.$init$,[this, null]))],$I$(7,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
});

C$.$static$=function(){C$.$static$=0;
C$.plotFont=Clazz.new_($I$(1,1).c$$S$I$I,["Courier New", 0, 10]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-17 21:39:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
