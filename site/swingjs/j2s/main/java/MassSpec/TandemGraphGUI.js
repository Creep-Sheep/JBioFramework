(function(){var P$=Clazz.newPackage("main.java.MassSpec"),p$1={},I$=[[0,'java.awt.Color','java.util.ArrayList','main.java.MassSpec.Ion']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TandemGraphGUI", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numericalDifference=200;
this.startingPoint=0;
this.blueBs=true;
this.redYs=true;
},1);

C$.$fields$=[['Z',['blueBs','redYs'],'I',['$width','$height','xAxisWidth','yAxisHeight','xAxisStartingPoint','yAxisStartingPoint','halfHashMarkLength','numericalDifference','startingPoint'],'O',['peakLines','java.util.ArrayList']]]

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.$width=this.getWidth$();
this.$height=this.getHeight$();
this.xAxisWidth=this.$width - (this.$width * 3/20|0);
this.yAxisHeight=this.$height - (this.$height * 1/5|0);
this.xAxisStartingPoint=(this.$width/10|0);
this.yAxisStartingPoint=(this.$height/20|0);
this.halfHashMarkLength=10;
g.setColor$java_awt_Color($I$(1).WHITE);
g.fillRect$I$I$I$I(0, 0, this.$width, this.$height);
g.setColor$java_awt_Color($I$(1).BLACK);
g.drawLine$I$I$I$I(this.xAxisStartingPoint, this.yAxisStartingPoint + this.yAxisHeight, this.xAxisStartingPoint + this.xAxisWidth, this.yAxisStartingPoint + this.yAxisHeight);
g.drawLine$I$I$I$I(this.xAxisStartingPoint, this.yAxisStartingPoint, this.xAxisStartingPoint, this.yAxisStartingPoint + this.yAxisHeight);
g.drawString$S$I$I("I", (this.$width/40|0), (this.$height/2|0));
g.drawString$S$I$I("m/e", (this.$width/2|0), (this.$height * 49/50|0));
var yStart=this.yAxisStartingPoint + this.yAxisHeight - this.halfHashMarkLength;
var yEnd=this.yAxisStartingPoint + this.yAxisHeight + this.halfHashMarkLength ;
for (var i=0; i < 16; i++) {
var xPos=this.xAxisStartingPoint + (i * this.xAxisWidth/15|0);
g.drawLine$I$I$I$I(xPos, yStart, xPos, yEnd);
var markNumber=String.valueOf$I(i * this.numericalDifference + this.startingPoint);
g.drawString$S$I$I(markNumber, xPos - 10, yEnd + 15);
}
var xStart=this.xAxisStartingPoint - this.halfHashMarkLength;
var xEnd=this.xAxisStartingPoint + this.halfHashMarkLength;
for (var i=0; i < 11; i++) {
var yPos=this.yAxisStartingPoint + (i * this.yAxisHeight/10|0);
g.drawLine$I$I$I$I(xStart, yPos, xEnd, yPos);
var markNumber=String.valueOf$I(100 - i * 10);
g.drawString$S$I$I(markNumber, xStart - 25, yPos + 5);
}
if (this.peakLines != null ) {
this.drawPeaks$java_awt_Graphics(g);
p$1.drawArrows$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'drawSequencePeaks$main_java_MassSpec_Ion',  function (ion) {
this.peakLines=Clazz.new_($I$(2,1));
if (ion != null  && this.blueBs ) {
var bIon;
for (var i=0; i < ion.size$(); i++) {
bIon=Clazz.new_($I$(3,1));
for (var j=0; j < i; j++) {
bIon.add$main_java_MassSpec_SpecAminoAcid(ion.get$I(j));
}
bIon.add$main_java_MassSpec_SpecAminoAcid(ion.get$I(i));
bIon.setMass$D(bIon.getMass$() - 17.00734);
bIon.setCharge$I(1);
bIon.setColor$java_awt_Color($I$(1).BLUE);
this.peakLines.add$O(bIon);
}
}if (ion != null  && this.redYs ) {
var yIon;
for (var i=ion.size$() - 1; i > -1; i--) {
yIon=Clazz.new_($I$(3,1));
for (var j=ion.size$() - 1; j > i; j--) {
yIon.add$main_java_MassSpec_SpecAminoAcid(ion.get$I(j));
}
yIon.add$main_java_MassSpec_SpecAminoAcid(ion.get$I(i));
yIon.setMass$D(yIon.getMass$() + 1.00794);
yIon.setCharge$I(1);
yIon.setColor$java_awt_Color($I$(1).RED);
this.peakLines.add$O(yIon);
}
}if (!this.peakLines.isEmpty$()) {
this.resizeXAxis$();
}this.repaint$();
});

Clazz.newMeth(C$, 'drawPeaks$java_awt_Graphics',  function (g) {
var xPos;
var yPos;
if (this.peakLines != null ) {
for (var ion, $ion = this.peakLines.iterator$(); $ion.hasNext$()&&((ion=($ion.next$())),1);) {
xPos=((this.xAxisStartingPoint + this.xAxisWidth * ((ion.getMassChargeRatio$() - this.startingPoint) / (this.numericalDifference * 15)))|0);
yPos=(this.yAxisStartingPoint + this.yAxisHeight - this.yAxisHeight);
ion.setXCoordinate$I(xPos);
g.setColor$java_awt_Color(ion.getColor$());
g.drawLine$I$I$I$I(xPos, this.yAxisStartingPoint + this.yAxisHeight, xPos, yPos);
}
}});

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

Clazz.newMeth(C$, 'drawArrows$java_awt_Graphics',  function (g) {
var firstX;
var firstME;
var secondX=-1;
var secondME=-1;
var xDifference;
var meDifference;
var arrowFirstStart;
var arrowFirstEnd;
var arrowSecondStart;
var arrowSecondEnd;
var lineHeight;
for (var i=0; i < this.peakLines.size$(); i++) {
firstX=this.peakLines.get$I(i).getXCoordinate$();
firstME=this.peakLines.get$I(i).getMassChargeRatio$();
for (var j=i + 1; j < this.peakLines.size$(); j++) {
if (this.peakLines.get$I(j).getColor$() === this.peakLines.get$I(i).getColor$() ) {
secondX=this.peakLines.get$I(j).getXCoordinate$();
secondME=this.peakLines.get$I(j).getMassChargeRatio$();
break;
}}
if (secondX != -1 && secondME != -1  ) {
xDifference=secondX - firstX;
arrowFirstStart=firstX + 2;
arrowFirstEnd=firstX + ((xDifference/2|0)) - 15;
arrowSecondStart=secondX - ((xDifference/2|0)) + 15;
arrowSecondEnd=secondX - 2;
meDifference=secondME - firstME;
if (this.peakLines.get$I(i).getColor$() === $I$(1).BLUE ) {
lineHeight=this.yAxisStartingPoint + ((this.yAxisHeight * 0.05)|0);
g.setColor$java_awt_Color($I$(1).BLUE);
} else {
lineHeight=this.yAxisStartingPoint + ((this.yAxisHeight * 0.25)|0);
g.setColor$java_awt_Color($I$(1).RED);
}var xArray=Clazz.array(Integer.TYPE, -1, [arrowFirstStart + 3, arrowFirstStart, arrowFirstStart + 3]);
var yArray=Clazz.array(Integer.TYPE, -1, [lineHeight - 3, lineHeight, lineHeight + 3]);
g.fillPolygon$IA$IA$I(xArray, yArray, 3);
xArray[0]=arrowSecondEnd - 3;
xArray[1]=arrowSecondEnd;
xArray[2]=arrowSecondEnd - 3;
yArray[0]=lineHeight - 3;
yArray[1]=lineHeight;
yArray[2]=lineHeight + 3;
g.fillPolygon$IA$IA$I(xArray, yArray, 3);
g.drawLine$I$I$I$I(arrowFirstStart, lineHeight, arrowFirstEnd, lineHeight);
var meString=String.valueOf$I(Math.round(meDifference));
if (meDifference < 100 ) {
g.drawString$S$I$I(meString, arrowFirstEnd + 10, lineHeight + 5);
var letter=p$1.retrieveLetter$D.apply(this, [meDifference]);
if (letter.equals$O("Q or K")) {
g.drawString$S$I$I(letter, arrowFirstEnd - 2, lineHeight + 20);
} else if (letter.equals$O("I or L")) {
g.drawString$S$I$I(letter, arrowFirstEnd + 3, lineHeight + 20);
} else {
g.drawString$S$I$I(letter, arrowFirstEnd + 12, lineHeight + 20);
}} else {
g.drawString$S$I$I(meString, arrowFirstEnd + 5, lineHeight + 5);
var letter=p$1.retrieveLetter$D.apply(this, [meDifference]);
if (letter.equals$O("Q or K")) {
g.drawString$S$I$I(letter, arrowFirstEnd - 2, lineHeight + 20);
} else if (letter.equals$O("I or L")) {
g.drawString$S$I$I(letter, arrowFirstEnd + 3, lineHeight + 20);
} else {
g.drawString$S$I$I(letter, arrowFirstEnd + 12, lineHeight + 20);
}}g.drawLine$I$I$I$I(arrowSecondStart, lineHeight, arrowSecondEnd, lineHeight);
}secondX=-1;
secondME=-1;
}
}, p$1);

Clazz.newMeth(C$, 'retrieveLetter$D',  function (meDifference) {
var diff=(meDifference|0);
var letter;
switch (diff) {
case 71:
letter="A";
break;
case 156:
letter="R";
break;
case 114:
letter="N";
break;
case 115:
letter="D";
break;
case 103:
letter="C";
break;
case 129:
letter="E";
break;
case 57:
letter="G";
break;
case 137:
letter="H";
break;
case 131:
letter="M";
break;
case 147:
letter="F";
break;
case 97:
letter="P";
break;
case 87:
letter="S";
break;
case 101:
letter="T";
break;
case 186:
letter="W";
break;
case 163:
letter="Y";
break;
case 99:
letter="V";
break;
case 128:
letter="Q or K";
break;
case 113:
letter="I or L";
break;
default:
letter="X";
}
return letter;
}, p$1);

Clazz.newMeth(C$, 'setBlueBs$Z',  function (state) {
this.blueBs=state;
});

Clazz.newMeth(C$, 'setRedYs$Z',  function (state) {
this.redYs=state;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
