(function(){var P$=Clazz.newPackage("main.java.MassSpec"),p$1={},I$=[[0,['main.java.MassSpec.OutputGraphGUI','.MListener'],'javax.swing.ToolTipManager','main.java.Utilities.MultiLineToolTip','java.awt.Color','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OutputGraphGUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['MListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numericalDifference=200;
this.startingPoint=0;
},1);

C$.$fields$=[['D',['mostHits'],'I',['$width','$height','xAxisWidth','yAxisHeight','xAxisStartingPoint','yAxisStartingPoint','halfHashMarkLength','numericalDifference','startingPoint'],'O',['peakLines','java.util.ArrayList','mainPanel','main.java.MassSpec.MassSpecMain']]]

Clazz.newMeth(C$, 'c$$main_java_MassSpec_MassSpecMain',  function (mP) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.addMouseListener$java_awt_event_MouseListener(Clazz.new_($I$(1,1),[this, null]));
this.mainPanel=mP;
$I$(2).sharedInstance$().registerComponent$javax_swing_JComponent(this);
}, 1);

Clazz.newMeth(C$, 'createToolTip$',  function () {
return Clazz.new_([50, Clazz.new_($I$(4,1).c$$I,[13421823])],$I$(3,1).c$$I$java_awt_Color);
});

Clazz.newMeth(C$, 'getToolTipText$java_awt_event_MouseEvent',  function (event) {
var ion=p$1.pickPeak$I$Z.apply(this, [event.getX$(), false]);
return (ion == null  ? null : ion.getSequence$());
});

Clazz.newMeth(C$, 'setPeaks$java_util_ArrayList$D',  function (pL, mH) {
var lowerLimit=this.mainPanel.getLowerLimit$();
var upperLimit=this.mainPanel.getUpperLimit$();
this.peakLines=Clazz.new_($I$(5,1));
if (pL != null ) {
for (var ion, $ion = pL.iterator$(); $ion.hasNext$()&&((ion=($ion.next$())),1);) {
if (ion.getMassChargeRatio$() >= lowerLimit  && ion.getMassChargeRatio$() <= upperLimit  ) {
this.peakLines.add$O(ion);
}}
}if (this.peakLines.isEmpty$()) {
this.numericalDifference=(((upperLimit - lowerLimit) / 15.0)|0) + 1;
this.startingPoint=(lowerLimit|0);
} else if (pL != null ) {
this.mostHits=mH;
this.resizeXAxis$();
}this.repaint$();
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.$width=this.getWidth$();
this.$height=this.getHeight$();
this.xAxisWidth=this.$width - (this.$width * 3/20|0);
this.yAxisHeight=this.$height - (this.$height * 1/4|0);
this.xAxisStartingPoint=(this.$width/10|0);
this.yAxisStartingPoint=(this.$height/20|0);
this.halfHashMarkLength=5;
g.setColor$java_awt_Color($I$(4).WHITE);
g.fillRect$I$I$I$I(0, 0, this.$width, this.$height);
g.setColor$java_awt_Color($I$(4).BLACK);
g.drawLine$I$I$I$I(this.xAxisStartingPoint, this.yAxisStartingPoint + this.yAxisHeight, this.xAxisStartingPoint + this.xAxisWidth, this.yAxisStartingPoint + this.yAxisHeight);
g.drawLine$I$I$I$I(this.xAxisStartingPoint, this.yAxisStartingPoint, this.xAxisStartingPoint, this.yAxisStartingPoint + this.yAxisHeight);
g.drawString$S$I$I("I", (this.$width/40|0), (this.$height/2|0));
g.drawString$S$I$I("m/e", (this.$width/2|0), (this.$height * 54/55|0));
var yStart=this.yAxisStartingPoint + this.yAxisHeight - this.halfHashMarkLength;
var yEnd=this.yAxisStartingPoint + this.yAxisHeight + this.halfHashMarkLength ;
for (var i=0; i < 16; i++) {
var xPos=this.xAxisStartingPoint + (i * this.xAxisWidth/15|0);
g.drawLine$I$I$I$I(xPos, yStart, xPos, yEnd);
var markNumber=String.valueOf$I(i * this.numericalDifference + this.startingPoint);
g.drawString$S$I$I(markNumber, xPos - 10, yEnd + 11);
}
var xStart=this.xAxisStartingPoint - this.halfHashMarkLength;
var xEnd=this.xAxisStartingPoint + this.halfHashMarkLength;
for (var i=0; i < 3; i++) {
var yPos=this.yAxisStartingPoint + (i * this.yAxisHeight/2|0);
g.drawLine$I$I$I$I(xStart, yPos, xEnd, yPos);
var markNumber=String.valueOf$I(100 - i * 50);
g.drawString$S$I$I(markNumber, xStart - 25, yPos + 5);
}
this.drawPeaks$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'resizeXAxis$',  function () {
var smallestme=this.peakLines.get$I(0).getMassChargeRatio$();
var biggestme=this.peakLines.get$I(0).getMassChargeRatio$();
for (var i=1; i < this.peakLines.size$(); i++) {
if (this.peakLines.get$I(i).getMassChargeRatio$() < smallestme ) {
smallestme=this.peakLines.get$I(i).getMassChargeRatio$();
} else if (this.peakLines.get$I(i).getMassChargeRatio$() > biggestme ) {
biggestme=this.peakLines.get$I(i).getMassChargeRatio$();
}}
this.startingPoint=(smallestme|0) - 1;
this.startingPoint=this.startingPoint - (this.startingPoint % 5) - 10 ;
var end=(biggestme|0) + 1;
var deltame=end - this.startingPoint;
if (deltame > 15) {
var remainder=deltame % 15;
this.numericalDifference=((deltame + (15 - remainder))/15|0);
} else {
this.numericalDifference=1;
}});

Clazz.newMeth(C$, 'drawPeaks$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(4).BLACK);
var xPos;
var yPos;
if (this.peakLines != null ) {
for (var ion, $ion = this.peakLines.iterator$(); $ion.hasNext$()&&((ion=($ion.next$())),1);) {
xPos=((this.xAxisStartingPoint + this.xAxisWidth * ((ion.getMassChargeRatio$() - this.startingPoint) / (this.numericalDifference * 15)))|0);
yPos=((this.yAxisStartingPoint + this.yAxisHeight - this.yAxisHeight * ion.getHits$() / this.mostHits)|0);
ion.setXCoordinate$I(xPos);
g.drawLine$I$I$I$I(xPos, this.yAxisStartingPoint + this.yAxisHeight, xPos, yPos);
}
}});

Clazz.newMeth(C$, 'pickPeak$I$Z',  function (x, isClick) {
if (this.peakLines == null ) {
return null;
}for (var ion, $ion = this.peakLines.iterator$(); $ion.hasNext$()&&((ion=($ion.next$())),1);) {
var xc=ion.getXCoordinate$();
if (x > xc - 2 && x < xc + 2 ) {
if (!isClick) return ion;
this.mainPanel.runTandem$main_java_MassSpec_Ion(ion);
ion.displaySequence$();
}}
return null;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.OutputGraphGUI, "MListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
p$1.pickPeak$I$Z.apply(this.b$['main.java.MassSpec.OutputGraphGUI'], [e.getX$(), true]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
p$1.pickPeak$I$Z.apply(this.b$['main.java.MassSpec.OutputGraphGUI'], [e.getX$(), false]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
