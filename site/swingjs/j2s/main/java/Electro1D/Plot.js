(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'java.awt.Font','java.text.DecimalFormat','java.awt.Point','main.java.Electro1D.Protein','java.awt.Cursor','java.awt.Color','Thread',['javajs.async.SwingJSUtils','.StateHelper']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Plot", null, 'javax.swing.JPanel', 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineCoord=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
},1);

C$.$fields$=[['Z',['imageCreated','standardsSet','paintRM','paintUserRM','stopAnimation','showExperimentalMW','showSampleMW','questionRCorr','showLogMW','showNotBracketed','graphVerticalLine','graphHorizontalLine','newYLine','newXLine','harpPlayed','working'],'D',['yStep','logMwMax','logMwMin','ln10','deltaPixelY','deltaPixelX','mouseRM','plotRM','experimentalMW','logMw','rCorr','rCorrSq','slope','yIntercept','errorMargin','nY'],'I',['numberOfStds','h','w','xAxesLabelY','xAxesRMLabelY','yAxisLabelX','charHalfHeight','charHeight','charWidth','charHalfWidth','gridYMarks','gridCols','rightGridCol','leftGridCol','bottomGridRow','topGridRow','rows','cols','pause','nPoints','xMouse','xPlot','userLineY','userLineX','fitLineX1','fitLineX2','fitLineY1','fitLineY2'],'O',['$parent','main.java.Electro1D.Electrophoresis','runner','Thread','offScreenImage','java.awt.Image','stds','main.java.Electro1D.Protein[]','sample','main.java.Electro1D.Protein','+dye','xArray','int[]','+yArray','stateHelper','javajs.async.SwingJSUtils.StateHelper','lineCoord','java.awt.Point']]
,['O',['plotFont','java.awt.Font','oneDigit','java.text.DecimalFormat','+twoDigits']]]

Clazz.newMeth(C$, 'c$$main_java_Electro1D_Electrophoresis',  function (electrophoresis) {
Clazz.super_(C$, this);
this.$parent=electrophoresis;
this.pause=20;
this.numberOfStds=7;
this.stds=Clazz.array($I$(4), [this.numberOfStds]);
this.sample=Clazz.new_($I$(4,1));
this.dye=Clazz.new_($I$(4,1));
this.gridCols=10;
this.cols=14;
this.xArray=Clazz.array(Integer.TYPE, [this.cols]);
this.errorMargin=0.2;
this.ln10=Math.log(10.0);
this.rightGridCol=this.cols - 1;
this.leftGridCol=this.rightGridCol - this.gridCols;
p$1.resetFlags.apply(this, []);
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
this.b$['java.awt.Component'].setCursor$java_awt_Cursor.apply(this.b$['java.awt.Component'], [$I$(5).getPredefinedCursor$I(this.b$['main.java.Electro1D.Plot'].paintRM ? 12 : 0)]);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
}});
})()
), Clazz.new_(P$.Plot$2.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'resetFlags',  function () {
this.stopAnimation=true;
this.newYLine=true;
this.newXLine=true;
this.paintRM=false;
this.harpPlayed=false;
}, p$1);

Clazz.newMeth(C$, 'doMouseClicked$I$I',  function (x, y) {
if (!this.standardsSet) {
return;
}for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k].matchPlotPosition$I$I(x, y)) {
this.$parent.displayProtein$main_java_Electro1D_Protein(this.stds[k]);
return;
}}
if (p$1.mouseOnXAxis$I$I.apply(this, [x, y])) {
if (this.working) return;
this.working=true;
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

Clazz.newMeth(C$, 'mouseOnXAxis$I$I',  function (i, j) {
var b=($b$[0] = 3, $b$[0]);
if (i < this.xArray[this.leftGridCol] || i > this.xArray[this.rightGridCol]  || j < this.yArray[this.bottomGridRow] - b  || j > this.yArray[this.bottomGridRow] + b ) return false;
this.xMouse=i;
return true;
}, p$1);

Clazz.newMeth(C$, 'setResults$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein',  function (stds, sample, dye) {
this.stds=stds;
this.sample=sample;
this.dye=dye;
p$1.getFit.apply(this, []);
sample.relativeMigration=sample.getDistance$() / dye.getDistance$();
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

Clazz.newMeth(C$, 'getFit',  function () {
var sumX=0.0;
var sumY=0.0;
var sumXsq=0.0;
var sumYsq=0.0;
var sumProd=0.0;
this.nPoints=0;
for (var i=0; i < this.numberOfStds; i++) {
if (this.stds[i].selected) {
var x=this.stds[i].relativeMigration=this.stds[i].getDistance$() / this.dye.getDistance$();
var y=Math.log(this.stds[i].mw) / this.ln10;
sumX+=x;
sumXsq+=x * x;
sumY+=y;
sumYsq+=y * y;
sumProd+=x * y;
++this.nPoints;
}}
if (this.nPoints <= 1) {
this.slope=this.yIntercept=this.rCorr=this.rCorrSq=0.0;
} else {
var xy=this.nPoints * sumProd - sumX * sumY;
var xx=this.nPoints * sumXsq - sumX * sumX;
var yy=this.nPoints * sumYsq - sumY * sumY;
this.slope=xy / xx;
this.yIntercept=(sumY - this.slope * sumX) / this.nPoints;
this.rCorrSq=xy * xy / xx / yy;
this.rCorr=Math.sqrt(this.rCorrSq);
}}, p$1);

Clazz.newMeth(C$, 'calcLogMw$D',  function (x) {
return (this.slope == 0.0  ? 0 : this.slope * x + this.yIntercept);
}, p$1);

Clazz.newMeth(C$, 'calcMaxMinLogs',  function () {
var y0=p$1.calcLogMw$D.apply(this, [0]);
var y1=p$1.calcLogMw$D.apply(this, [1]);
this.logMwMax=Math.max(y0, y1);
this.logMwMin=Math.min(y0, y1);
for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k] == null ) continue;
var logMW=Math.log(this.stds[k].mw) / this.ln10;
if (logMW > this.logMwMax ) this.logMwMax=logMW;
if (logMW < this.logMwMin ) this.logMwMin=logMW;
}
this.logMwMax=-Math.floor(-this.logMwMax * 2) / 2;
this.logMwMin=Math.floor(this.logMwMin * 2) / 2;
this.yStep=0.5;
this.nY=(this.logMwMax - this.logMwMin) / this.yStep;
}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
this.setOpaque$Z(true);
p$1.calcMaxMinLogs.apply(this, []);
p$1.calcDimensions.apply(this, []);
if (!this.imageCreated || this.offScreenImage.getWidth$java_awt_image_ImageObserver(null) != this.w  || this.offScreenImage.getHeight$java_awt_image_ImageObserver(null) != this.h ) {
this.offScreenImage=this.createImage$I$I(this.w, this.h);
if (this.standardsSet) {
p$1.calcStdCoords.apply(this, []);
p$1.calcLineCoords.apply(this, []);
this.imageCreated=true;
}}var offScreenGraphics=this.offScreenImage.getGraphics$();
offScreenGraphics.setColor$java_awt_Color($I$(6).white);
offScreenGraphics.fillRect$I$I$I$I(0, 0, this.w, this.h);
offScreenGraphics.setColor$java_awt_Color(g.getColor$());
p$1.drawPlotSurface$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.drawYScale$java_awt_Graphics.apply(this, [offScreenGraphics]);
p$1.plotStandards$java_awt_Graphics.apply(this, [offScreenGraphics]);
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

Clazz.newMeth(C$, 'drawYScale$java_awt_Graphics',  function (g) {
var d=this.logMwMax;
var i=this.topGridRow;
if (this.standardsSet) {
for (var j=0; j <= this.gridYMarks; j++) {
g.drawString$S$I$I(C$.twoDigits.format$D(d), this.yAxisLabelX + 5 * this.charHalfWidth, this.yArray[i] + this.charHalfHeight);
++i;
d-=0.5;
}
}}, p$1);

Clazz.newMeth(C$, 'showExpMW$java_awt_Graphics',  function (g) {
if (this.showExperimentalMW) g.drawString$S$I$I("Experimental MW = " + String.valueOf$I((this.experimentalMW|0)), this.xArray[this.leftGridCol], (this.getSize$().height/8|0));
}, p$1);

Clazz.newMeth(C$, 'showLgMW$java_awt_Graphics',  function (g) {
if (this.showLogMW) {
var g1=g.create$();
g1.setFont$java_awt_Font(C$.plotFont);
g1.drawString$S$I$I(C$.twoDigits.format$D(this.logMw), this.xArray[this.leftGridCol] + this.charHalfWidth, this.userLineY);
g1.dispose$();
}}, p$1);

Clazz.newMeth(C$, 'graphVertLine$java_awt_Graphics',  function (g) {
if (this.graphVerticalLine) g.drawLine$I$I$I$I(this.xPlot, this.yArray[this.bottomGridRow], this.xPlot, this.userLineY);
}, p$1);

Clazz.newMeth(C$, 'plotStandards$java_awt_Graphics',  function (g) {
if (!this.standardsSet) return;
var diameter=6;
var offset=(diameter/2|0);
for (var k=0; k < this.numberOfStds; k++) {
if (this.stds[k].selected) {
g.setColor$java_awt_Color(this.stds[k].color);
g.fillOval$I$I$I$I(this.stds[k].plotXPos - offset, this.stds[k].plotYPos - offset, diameter, diameter);
g.setColor$java_awt_Color($I$(6).black);
g.drawOval$I$I$I$I(this.stds[k].plotXPos - offset, this.stds[k].plotYPos - offset, diameter, diameter);
}}
g.drawLine$I$I$I$I(this.fitLineX1, this.fitLineY1, this.fitLineX2, this.fitLineY2);
g.drawString$S$I$I("Slope = " + C$.twoDigits.format$D(this.slope), this.xArray[7], this.yArray[4]);
g.drawString$S$I$I("y Intercept = " + C$.twoDigits.format$D(this.yIntercept), this.xArray[7], this.yArray[4] + this.charHeight);
g.drawString$S$I$I("r = " + C$.twoDigits.format$D(this.rCorr), this.xArray[7], this.yArray[4] + this.charHeight * 2);
g.drawString$S$I$I("r Squared = " + C$.twoDigits.format$D(this.rCorrSq), this.xArray[7], this.yArray[4] + this.charHeight * 3);
}, p$1);

Clazz.newMeth(C$, 'drawPlotSurface$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(6).black);
g.drawString$S$I$I("Plot of Log MW as f(Relative Migration)", 10, this.charHeight);
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[this.bottomGridRow], this.xArray[this.rightGridCol], this.yArray[this.bottomGridRow]);
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[this.topGridRow], this.xArray[this.leftGridCol], this.yArray[this.bottomGridRow]);
for (var x=0, i=this.leftGridCol; x <= this.gridCols; x+=2, i+=2) {
g.drawString$S$I$I(C$.oneDigit.format$D(x / 10.0), this.xArray[i] - this.charWidth, this.xAxesLabelY);
}
g.drawString$S$I$I("Relative Migration", this.xArray[this.leftGridCol + 2] + this.charHalfWidth, this.xAxesRMLabelY + this.charHeight);
var yLabel="Log MW";
for (var j=0, i=this.yArray[this.yArray.length >> 1] - this.charHeight * ((yLabel.length$()/2|0)); j < yLabel.length$(); j++, i+=this.charHeight) {
g.drawString$S$I$I(yLabel.substring$I$I(j, j + 1), this.yAxisLabelX + (this.charWidth/4|0), i);
}
g.setColor$java_awt_Color($I$(6).lightGray);
for (var j=0, i=this.topGridRow; j < this.gridYMarks; j++, i++) {
g.drawLine$I$I$I$I(this.xArray[this.leftGridCol], this.yArray[i], this.xArray[this.rightGridCol], this.yArray[i]);
}
for (var j=0, i=this.leftGridCol + 1; j < this.gridCols; j++, i++) {
g.drawLine$I$I$I$I(this.xArray[i], this.yArray[this.topGridRow], this.xArray[i], this.yArray[this.bottomGridRow]);
}
g.setColor$java_awt_Color($I$(6).black);
}, p$1);

Clazz.newMeth(C$, 'showSampMW$java_awt_Graphics',  function (g) {
if (this.showSampleMW) {
var string=this.sample.abbr + " MW = " + String.valueOf$I(this.sample.mw) ;
g.drawString$S$I$I(string, this.xArray[this.leftGridCol], (this.h/6|0));
this.$parent.displayProtein$main_java_Electro1D_Protein(this.sample);
if (!this.harpPlayed) {
this.harpPlayed=true;
}} else if (this.questionRCorr) {
g.drawString$S$I$I("No match! RM was OK, poor line fit?", this.xArray[this.leftGridCol], (this.getSize$().height/6|0));
}}, p$1);

Clazz.newMeth(C$, 'plotUserRM',  function () {
if (this.paintUserRM) {
this.logMw=p$1.calcLogMw$D.apply(this, [this.plotRM]);
this.lineCoord=p$1.calcPixelXY$D.apply(this, [this.plotRM]);
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

Clazz.newMeth(C$, 'start$',  function () {
if (this.runner == null ) {
this.runner=Clazz.new_($I$(7,1).c$$Runnable,[this]);
this.runner.start$();
}});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.runner != null ) {
this.stopAnimation=true;
this.runner=null;
}this.working=false;
});

Clazz.newMeth(C$, 'calcDimensions',  function () {
this.h=this.getSize$().height;
this.w=this.getSize$().width;
this.xArray[0]=0;
var pixels=(this.w/this.cols|0);
for (var i=1; i < this.cols; i++) this.xArray[i]=this.xArray[i - 1] + pixels;

this.gridYMarks=(this.nY|0);
this.rows=this.gridYMarks + 2;
this.bottomGridRow=this.rows - 1;
this.topGridRow=this.bottomGridRow - this.gridYMarks;
this.yArray=Clazz.array(Integer.TYPE, [this.rows]);
this.yArray[0]=0;
pixels=(this.h/this.rows|0);
for (var j=1; j < this.rows; j++) this.yArray[j]=this.yArray[j - 1] + pixels;

this.deltaPixelX=this.xArray[this.rightGridCol] - this.xArray[this.leftGridCol];
this.deltaPixelY=this.yArray[this.bottomGridRow] - this.yArray[this.topGridRow];
var fm=this.getFontMetrics$java_awt_Font(C$.plotFont);
this.charWidth=fm.charWidth$C("0");
this.charHalfWidth=(this.charWidth/2|0);
this.charHalfHeight=(fm.getAscent$()/2|0);
this.charHeight=fm.getHeight$();
this.xAxesLabelY=this.yArray[this.bottomGridRow] + fm.getHeight$();
this.xAxesRMLabelY=this.xAxesLabelY + (fm.getHeight$()/2|0);
this.yAxisLabelX=this.xArray[this.leftGridCol] - fm.stringWidth$S("MW 0.00 ");
}, p$1);

Clazz.newMeth(C$, 'calcPixelXY$D',  function (x) {
var y=p$1.calcLogMw$D.apply(this, [x]);
var px=this.xArray[this.leftGridCol] + ((x * this.deltaPixelX)|0);
var py=this.yArray[this.topGridRow] + (((this.logMwMax - y) / (this.logMwMax - this.logMwMin) * this.deltaPixelY)|0);
return Clazz.new_($I$(3,1).c$$I$I,[px, py]);
}, p$1);

Clazz.newMeth(C$, 'calcLineCoords',  function () {
var point;
point=p$1.calcPixelXY$D.apply(this, [0.01]);
this.fitLineX1=point.x;
this.fitLineY1=point.y;
point=p$1.calcPixelXY$D.apply(this, [1.0]);
this.fitLineX2=point.x;
this.fitLineY2=point.y;
}, p$1);

Clazz.newMeth(C$, 'calcStdCoords',  function () {
var point;
for (var i=0; i < this.numberOfStds; i++) {
if (this.stds[i].selected) {
point=p$1.calcPixelXY$D.apply(this, [this.stds[i].relativeMigration]);
this.stds[i].plotXPos=point.x;
this.stds[i].plotYPos=point.y;
}}
}, p$1);

Clazz.newMeth(C$, 'displayRM$java_awt_Graphics',  function (g) {
if (this.paintRM) {
this.mouseRM=(this.xMouse - this.xArray[this.leftGridCol]) / this.deltaPixelX;
g.drawString$S$I$I(C$.twoDigits.format$D(this.mouseRM), this.xArray[this.leftGridCol], ((this.yArray[this.bottomGridRow] + this.yStep)|0));
}}, p$1);

Clazz.newMeth(C$, 'graphHorizLine$java_awt_Graphics',  function (g) {
if (this.graphHorizontalLine) g.drawLine$I$I$I$I(this.xPlot, this.userLineY, this.userLineX, this.userLineY);
}, p$1);

Clazz.newMeth(C$, 'showNotBracket$java_awt_Graphics',  function (g) {
if (this.showNotBracketed) g.drawString$S$I$I("RM not bracketed by Standards", this.xArray[this.leftGridCol], (this.getSize$().height/8|0));
}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(7).currentThread$().setPriority$I(1);
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
} else {
this.b$['main.java.Electro1D.Plot'].working=false;
}return false;
});
})()
), Clazz.new_(P$.Plot$3.$init$,[this, null]))],$I$(8,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
});

C$.$static$=function(){C$.$static$=0;
C$.plotFont=Clazz.new_($I$(1,1).c$$S$I$I,["Courier New", 0, 10]);
C$.oneDigit=Clazz.new_($I$(2,1).c$$S,["0.0"]);
C$.twoDigits=Clazz.new_($I$(2,1).c$$S,["0.00"]);
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 19:35:26 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
