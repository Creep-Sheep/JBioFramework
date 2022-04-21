(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'java.util.Vector','main.java.Electro1D.Sample','main.java.Electro1D.Protein','java.util.BitSet','java.awt.Dimension','main.java.Electro1D.Pipette','java.text.DecimalFormat',['main.java.Electro1D.Simulation','.MouseClickListener'],'main.java.Utilities.FileUtils','Thread','java.awt.Color','java.awt.RenderingHints',['javajs.async.SwingJSUtils','.StateHelper'],'java.awt.Font','main.java.Utilities.GenomeFileParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Simulation", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel', 'Runnable');
C$.$classes$=[['MouseClickListener',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wellProteins=Clazz.array($I$(1), [11]);
this.wellSamples=Clazz.array($I$(2), [11]);
this.wellOpeningX=Clazz.array(Integer.TYPE, [11]);
this.dyes=Clazz.array($I$(3), [11]);
this.bsRedoWell=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['Z',['addInfo','addSampleFlag1','addSampleFlag2','addSampleFileFlag','runSampleFlag','imageCreated','stopAnimation','notAtBottom','runExperiment','noLoadError','shouldReset','paintRedoWells','needCleared','needClearedError'],'D',['speed'],'F',['animationModifier','modifier','scaleFactor'],'I',['pause','$border','baseX','baseY','baseHeight','baseWidth','topX','topY','topHeight','topWidth','bottomEdge','rightEdge','leftEdge','plateX','plateY','plateHeight','plateWidth','plateBottom','plateRtEdge','topOpeningX','topOpeningY','topOpeningHeight','topOpeningWidth','wellOpening1Height','wellOpening1Width','wellOpening2Height','wellOpening2Width','wellOpeningY','wellOpeningHeight','wellOpeningWidth','wellBottom','halfWellWidth','totalElutionDist','ratioModifier','divStart','divXLine','divLabelX','charHalfHeight','charHeight','gelLabelX','gelLabelY','cellLabelY','posProbeX','posProbeY','probeWidth','probeHeight','negProbeX','negProbeY','posProbeCenterX','negProbeCenterX','polarityPlusHorizontalX1','polarityPlusHorizontalX2','polarityNegHorizontalY','polarityPlusVerticalY1','polarityPlusVerticalY2','polarityNegHorizontalX1','polarityNegHorizontalX2','polarityPlusY','endPosX','endPosY','endNegX','endNegY','endWidth','endHeight','posLineX','powerLineWidth','negLineX','posLineHeight','ddNum','notLoaded','loading','loaded','samp1LoadState','samp2LoadState','sampFileLoadState','stdLoadState','buttonState'],'S',['gelLabel','proteinName','proteinMW','proteinDist','relMigration'],'O',['runner','Thread','$parent','main.java.Electro1D.Electrophoresis','stdSamples','main.java.Electro1D.Protein[]','wellProteins','java.util.Vector[]','wellSamples','main.java.Electro1D.Sample[]','wellOpeningX','int[]','dyes','main.java.Electro1D.Protein[]','sample1','main.java.Electro1D.Protein','+sample2','stdSample','main.java.Electro1D.Sample','+sampSample1','+sampSample2','pipette','main.java.Electro1D.Pipette','+pipette2','scaleDivs','int[]','+scaleHalfDivs','Jlabels','String[]','fm','java.awt.FontMetrics','$font','java.awt.Font','offScreenImage','java.awt.Image','offScreenGraphics','java.awt.Graphics','twoDigits','java.text.DecimalFormat','stateHelper','javajs.async.SwingJSUtils.StateHelper','gel','main.java.Electro1D.Acrylamide','bsRedoWell','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$main_java_Electro1D_Electrophoresis',  function (electrophoresis) {
Clazz.super_(C$, this);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[600, 450]));
this.animationModifier=1.0;
this.modifier=1.0;
this.stdSamples=Clazz.array($I$(3), [7]);
this.sample1=Clazz.new_($I$(3,1));
this.sample2=Clazz.new_($I$(3,1));
for (var i=1; i <= 10; i++) {
this.dyes[i]=Clazz.new_($I$(3,1));
if (i > 1) this.wellSamples[i]=Clazz.new_($I$(2,1));
}
this.stdSample=Clazz.new_($I$(2,1));
this.sampSample1=Clazz.new_($I$(2,1));
this.sampSample2=Clazz.new_($I$(2,1));
this.pipette=Clazz.new_($I$(6,1));
this.pipette2=Clazz.new_($I$(6,1));
this.ratioModifier=10;
this.scaleDivs=Clazz.array(Integer.TYPE, [7]);
this.scaleHalfDivs=Clazz.array(Integer.TYPE, [13]);
this.Jlabels=Clazz.array(String, [7]);
this.gelLabel="notSet";
this.powerLineWidth=3;
this.proteinName="notSet";
this.proteinMW="0.0";
this.proteinDist="0 mm";
this.relMigration="0.0";
this.runExperiment=true;
this.loading=1;
this.loaded=2;
this.samp1LoadState=this.notLoaded;
this.samp2LoadState=this.notLoaded;
this.sampFileLoadState=this.notLoaded;
this.stdLoadState=this.notLoaded;
this.$parent=electrophoresis;
this.Jlabels[0]="0";
this.Jlabels[1]="1";
this.Jlabels[2]="2";
this.Jlabels[3]="3";
this.Jlabels[4]="4";
this.Jlabels[5]="5";
this.Jlabels[6]="6";
this.twoDigits=Clazz.new_($I$(7,1).c$$S,["0.00"]);
this.ddNum=1;
var msl=Clazz.new_($I$(8,1),[this, null]);
this.addMouseListener$java_awt_event_MouseListener(msl);
this.addMouseMotionListener$java_awt_event_MouseMotionListener(msl);
this.shouldReset=true;
this.paintRedoWells=false;
this.bsRedoWell.clear$();
p$1.resetWell.apply(this, []);
$I$(9,"setFileDropper$javax_swing_JComponent$java_util_function_BiFunction",[this, ((P$.Simulation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Simulation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File$java_awt_Point','apply$O$O'],  function (file, loc) {
this.b$['main.java.Electro1D.Simulation'].buttonState=this.b$['main.java.Electro1D.Simulation'].$parent.getButtonState$();
System.out.println$I(this.b$['main.java.Electro1D.Simulation'].buttonState);
if (this.b$['main.java.Electro1D.Simulation'].buttonState == 2) this.b$['main.java.Electro1D.Simulation'].loadFileDropped$java_io_File$java_awt_Point.apply(this.b$['main.java.Electro1D.Simulation'], [file, loc]);
return null;
});
})()
), Clazz.new_(P$.Simulation$lambda1.$init$,[this, null]))]);
}, 1);

Clazz.newMeth(C$, 'loadFileDropped$java_io_File$java_awt_Point',  function (f, p) {
if (p.y <= this.wellOpeningY || p.y >= this.wellOpeningY + this.wellOpeningHeight ) return;
for (var i=2; i <= 10; i++) {
if (p.x > this.wellOpeningX[i] && p.x < this.wellOpeningX[i] + this.wellOpeningWidth ) {
this.loadFile$java_io_File$I(f, i);
break;
}}
});

Clazz.newMeth(C$, 'start$',  function () {
if (this.runner == null ) {
this.runner=Clazz.new_($I$(10,1).c$$Runnable,[this]);
this.runner.start$();
}});

Clazz.newMeth(C$, 'stop$',  function () {
if (this.runner != null ) {
this.runner.interrupt$();
this.runner=null;
}});

Clazz.newMeth(C$, 'paintData$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(11).black);
var i=this.charHeight + 17;
if (this.noLoadError) {
g.drawString$S$I$I("Add Standard", this.plateX, i);
this.noLoadError=false;
} else if (this.needClearedError) {
g.drawString$S$I$I("Clear the gel", this.plateX, i);
this.needClearedError=false;
} else {
g.drawString$S$I$I(this.proteinName, this.plateX, i);
g.drawString$S$I$I(this.proteinMW, this.plateX + 180, i);
g.drawString$S$I$I(this.proteinDist, this.plateX + 260, i);
g.drawString$S$I$I(this.relMigration, this.plateX + 370, i);
}this.addInfo=false;
}, p$1);

Clazz.newMeth(C$, 'startRun$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein$main_java_Electro1D_ProteinA',  function (aprotein, protein1, protein2, dyes) {
this.stopRun$();
if (this.stdLoadState == this.notLoaded) {
this.addInfo=true;
this.noLoadError=true;
this.repaint$();
return;
}this.updateSpeed$D$main_java_Electro1D_Acrylamide(this.speed, this.gel);
this.stdSamples=aprotein;
this.sample1=protein1;
this.sample2=protein2;
for (var i=0; i < this.stdSamples.length; i++) {
if (this.stdSamples[i].selected) {
this.stdSamples[i].setWidth$I(this.wellOpening1Width);
this.stdSamples[i].setStartPosition$I$I(this.wellOpeningX[1], this.wellBottom);
this.stdSamples[i].setMaxPosition$I(this.plateBottom);
this.stdSamples[i].setHostScaleFactor$F(this.scaleFactor);
}}
this.stdSample.setRatio$I(0);
this.stdSample.drawSwitch$Z(true);
this.stdSample.empty$();
this.stopRun$();
if (this.stdLoadState == this.notLoaded) {
this.addInfo=true;
this.noLoadError=true;
this.repaint$();
return;
}this.updateSpeed$D$main_java_Electro1D_Acrylamide(this.speed, this.gel);
this.stdSamples=aprotein;
this.sample1=protein1;
this.sample2=protein2;
for (var i=0; i < this.stdSamples.length; i++) {
if (this.stdSamples[i].selected) {
this.stdSamples[i].setWidth$I(this.wellOpening1Width);
this.stdSamples[i].setStartPosition$I$I(this.wellOpeningX[1], this.wellBottom);
this.stdSamples[i].setMaxPosition$I(this.plateBottom);
this.stdSamples[i].setHostScaleFactor$F(this.scaleFactor);
}}
this.stdSample.setRatio$I(0);
this.stdSample.drawSwitch$Z(true);
this.stdSample.empty$();
this.dyes[1]=dyes[0];
this.dyes[1].setWidth$I(this.wellOpening1Width);
this.dyes[1].setStartPosition$I$I(this.wellOpeningX[1], this.wellBottom);
this.dyes[1].setMaxPosition$I(this.plateBottom);
this.dyes[1].setHostScaleFactor$F(this.scaleFactor);
for (var i=2; i <= 10; i++) {
var proteins=this.wellProteins[i];
if (proteins != null ) {
for (var x=0; x < proteins.size$(); x++) {
var p=proteins.elementAt$I(x);
p.setWidth$I(this.wellOpeningWidth);
p.setStartPosition$I$I(this.wellOpeningX[i], this.wellBottom);
p.setMaxPosition$I(this.plateBottom);
p.setHostScaleFactor$F(this.scaleFactor);
}
var d=this.dyes[i]=dyes[i - 1];
d.setWidth$I(this.wellOpeningWidth);
d.setStartPosition$I$I(this.wellOpeningX[i], this.wellBottom);
d.setMaxPosition$I(this.plateBottom);
d.setHostScaleFactor$F(this.scaleFactor);
}this.wellSamples[i].setRatio$I(0);
this.wellSamples[i].drawSwitch$Z(true);
this.wellSamples[i].empty$();
}
this.paintRedoWells=false;
this.updateRedo$();
p$1.ResetFlags.apply(this, []);
this.needCleared=true;
this.runSampleFlag=true;
this.stdLoadState=this.notLoaded;
this.sampFileLoadState=this.notLoaded;
this.setPause$S("elute");
this.setinitialspeed$();
this.start$();
});

Clazz.newMeth(C$, 'stopRun$',  function () {
this.stopAnimation=true;
if (this.stateHelper != null ) this.stateHelper.interrupt$();
this.stop$();
});

Clazz.newMeth(C$, 'isReady$',  function () {
if (this.needCleared) {
this.addInfo=true;
this.needClearedError=true;
this.repaint$();
return false;
}if (this.stdLoadState == this.notLoaded) {
this.addInfo=true;
this.noLoadError=true;
this.repaint$();
return false;
}return true;
});

Clazz.newMeth(C$, 'calcDimensions',  function () {
var i1=0;
var j1=0;
var k1=0;
var i2=0;
var j2=0;
var k2=0;
var i3=0;
var j3=0;
var k3=0;
var i4=0;
var j4=0;
var k4=0;
var b1=($b$[0] = 2, $b$[0]);
var b2=($b$[0] = 4, $b$[0]);
var f=60.0;
this.bottomEdge=this.getSize$().height - 2;
this.rightEdge=this.getSize$().width - 2;
i1=(this.rightEdge/2|0);
this.$border=(this.getSize$().width/32|0);
j3=(this.$border/2|0);
k3=this.$border + this.$border;
j1=(this.bottomEdge/8|0);
k1=(this.bottomEdge/10|0);
i2=(this.rightEdge/6|0);
j2=(this.rightEdge/18|0);
this.baseX=this.leftEdge + this.$border;
this.baseY=this.bottomEdge - this.$border - j1 ;
this.baseHeight=j1;
this.baseWidth=this.rightEdge - k3;
this.topX=this.leftEdge + this.$border;
this.topY=this.$border + j1 - 20;
this.topHeight=j1;
this.topWidth=this.rightEdge - k3;
i3=(this.baseHeight/4|0) * 3 + this.baseY;
k2=this.topY + (this.topHeight/4|0);
this.plateX=i1 - i2 - i2 - 63 ;
this.plateY=k2;
this.plateHeight=i3 - this.plateY;
this.plateWidth=i2 * 5 + 20;
this.plateBottom=this.plateY + this.plateHeight;
this.plateRtEdge=this.plateX + this.plateWidth;
this.topOpeningX=this.plateX + j3;
this.topOpeningY=this.plateY;
this.topOpeningHeight=j3;
this.topOpeningWidth=this.plateWidth - this.$border;
this.wellOpeningX[1]=this.topOpeningX + this.$border;
this.wellOpeningY=this.topOpeningY + (this.topOpeningHeight/3|0);
this.wellOpening1Height=k3;
this.wellOpening1Width=(i2/3|0);
this.wellOpeningHeight=this.wellOpening1Height;
this.wellOpeningWidth=this.wellOpening1Width;
this.halfWellWidth=(this.wellOpening1Width/2|0);
var nextWell=this.halfWellWidth + this.wellOpening1Width;
for (var i=2; i <= 10; i++) this.wellOpeningX[i]=this.wellOpeningX[i - 1] + nextWell;

this.wellBottom=this.wellOpeningY + this.wellOpening1Height;
this.halfWellWidth=(this.wellOpening1Width/2|0);
this.totalElutionDist=this.plateBottom - this.wellBottom;
i4=this.plateBottom - this.wellBottom;
j4=(i4/6|0);
k4=(i4/12|0);
var i5=this.wellBottom;
var j5=this.wellBottom;
var k5=0;
do {
this.scaleDivs[k5]=i5;
i5+=j4;
} while (++k5 < 7);
k5=0;
do {
this.scaleHalfDivs[k5]=j5;
j5+=k4;
} while (++k5 < 13);
this.divStart=this.plateRtEdge - b1;
this.divXLine=this.divStart + b2;
this.divLabelX=this.divStart + this.fm.charWidth$C("0");
this.charHalfHeight=(this.fm.getAscent$()/8|0);
this.charHeight=this.fm.getHeight$();
this.scaleFactor=f / this.totalElutionDist;
this.gelLabelX=this.baseX + b1;
this.gelLabelY=this.baseY + this.baseHeight - b1;
this.cellLabelY=this.baseY + this.baseHeight + this.charHeight ;
this.negProbeX=this.topX;
this.negProbeY=this.topY - k1;
this.probeWidth=(j2/2|0) + 4;
this.posProbeX=this.baseX + this.baseWidth - this.probeWidth;
this.posProbeY=this.baseY - k1;
this.probeHeight=this.topY - this.negProbeY - b1 * 2 ;
this.negProbeCenterX=this.negProbeX + (this.probeWidth/2|0);
this.posProbeCenterX=this.posProbeX + (this.probeWidth/2|0);
this.negLineX=this.negProbeCenterX - 1;
this.posLineX=this.posProbeCenterX - 1;
this.posLineHeight=this.posProbeY;
this.polarityNegHorizontalX1=this.negProbeCenterX - 2;
this.polarityNegHorizontalX2=this.negProbeCenterX + 2;
this.polarityPlusHorizontalX1=this.posProbeCenterX - 2;
this.polarityPlusHorizontalX2=this.posProbeCenterX + 2;
this.polarityNegHorizontalY=this.negProbeY + (this.probeHeight/2|0);
this.polarityPlusVerticalY1=this.posProbeY + (this.probeHeight/2|0) - 2;
this.polarityPlusVerticalY2=this.posProbeY + (this.probeHeight/2|0) + 2;
this.polarityPlusY=this.posProbeY + (this.probeHeight/2|0);
this.endWidth=(this.probeWidth/3|0);
this.endPosX=this.negProbeCenterX - (this.endWidth/2|0);
this.endPosY=this.negProbeY + this.probeHeight - 2;
this.endNegX=this.posProbeCenterX - (this.endWidth/2|0);
this.endNegY=this.posProbeY + this.probeHeight - 2;
this.endHeight=(this.probeHeight/2|0);
}, p$1);

Clazz.newMeth(C$, 'setPause$S',  function (string) {
var b=($b$[0] = 100, $b$[0]);
var f1=2.0;
var f2=4.0;
var f3=1.8;
var f4=2.5;
var f5=3.5;
if (string === "elute" ) this.modifier=f1;
 else if (string === "fill" ) this.modifier=f2;
 else if (string.compareTo$S("Slow") == 0) this.animationModifier=f3;
 else if (string.compareTo$S("Moderate") == 0) this.animationModifier=f4;
 else if (string.compareTo$S("Fast") == 0) this.animationModifier=f5;
this.pause=((b / this.modifier / this.animationModifier )|0);
});

Clazz.newMeth(C$, 'drawCell$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(11).black);
g.drawRect$I$I$I$I(0, 0, this.rightEdge, this.bottomEdge);
g.setColor$java_awt_Color($I$(11).cyan);
g.fillRect$I$I$I$I(this.baseX, this.baseY, this.baseWidth, this.baseHeight);
g.setColor$java_awt_Color($I$(11).black);
g.drawRect$I$I$I$I(this.baseX, this.baseY, this.baseWidth, this.baseHeight);
g.setColor$java_awt_Color($I$(11).red);
g.fillRect$I$I$I$I(this.posLineX, 0, this.powerLineWidth, this.posLineHeight);
g.setColor$java_awt_Color($I$(11).cyan);
g.fillRect$I$I$I$I(this.topX, this.topY, this.topWidth, this.topHeight);
g.setColor$java_awt_Color($I$(11).black);
g.drawRect$I$I$I$I(this.topX, this.topY, this.topWidth, this.topHeight);
g.setColor$java_awt_Color($I$(11).lightGray);
g.fillRect$I$I$I$I(this.plateX, this.plateY, this.plateWidth, this.plateHeight);
g.setColor$java_awt_Color($I$(11).darkGray);
g.drawLine$I$I$I$I(this.plateX, this.plateY, this.plateX, this.plateBottom);
g.drawLine$I$I$I$I(this.plateRtEdge, this.plateY, this.plateRtEdge, this.plateBottom);
g.setColor$java_awt_Color($I$(11).white);
g.fillRect$I$I$I$I(this.topOpeningX + 2, this.topOpeningY, this.topOpeningWidth, this.topOpeningHeight + 5);
for (var i=1; i <= 10; i++) {
g.fillRect$I$I$I$I(this.wellOpeningX[i], this.wellOpeningY, this.wellOpeningWidth, this.wellOpeningHeight);
}
g.setColor$java_awt_Color($I$(11).black);
var i=0;
do g.drawString$S$I$I(this.Jlabels[i], this.divLabelX, this.scaleDivs[i] + this.charHalfHeight);
 while (++i < 7);
i=0;
do g.drawLine$I$I$I$I(this.divStart, this.scaleHalfDivs[i], this.divXLine, this.scaleHalfDivs[i]);
 while (++i < 13);
g.drawString$S$I$I(this.gelLabel, this.gelLabelX, this.gelLabelY);
g.setColor$java_awt_Color($I$(11).gray);
g.fillRect$I$I$I$I(this.endPosX, this.endPosY, this.endWidth, this.endHeight);
g.fillRect$I$I$I$I(this.endNegX, this.endNegY, this.endWidth, this.endHeight);
g.setColor$java_awt_Color($I$(11).black);
g.drawRoundRect$I$I$I$I$I$I(this.negProbeX, this.negProbeY, this.probeWidth, this.probeHeight, this.probeWidth, this.probeWidth);
g.fillRoundRect$I$I$I$I$I$I(this.negProbeX, this.negProbeY, this.probeWidth, this.probeHeight, this.probeWidth, this.probeWidth);
g.fillRect$I$I$I$I(this.negLineX, 0, this.powerLineWidth, this.negProbeY);
g.setColor$java_awt_Color($I$(11).white);
g.drawLine$I$I$I$I(this.polarityNegHorizontalX1, this.polarityNegHorizontalY, this.polarityNegHorizontalX2, this.polarityNegHorizontalY);
g.setColor$java_awt_Color($I$(11).red);
g.drawRoundRect$I$I$I$I$I$I(this.posProbeX, this.posProbeY, this.probeWidth, this.probeHeight, this.probeWidth, this.probeWidth);
g.fillRoundRect$I$I$I$I$I$I(this.posProbeX, this.posProbeY, this.probeWidth, this.probeHeight, this.probeWidth, this.probeWidth);
g.setColor$java_awt_Color($I$(11).black);
g.drawLine$I$I$I$I(this.posProbeCenterX, this.polarityPlusVerticalY1, this.posProbeCenterX, this.polarityPlusVerticalY2);
g.drawLine$I$I$I$I(this.polarityPlusHorizontalX1, this.polarityPlusY, this.polarityPlusHorizontalX2, this.polarityPlusY);
g.setColor$java_awt_Color($I$(11).red);
var g2=g;
g2.setRenderingHint$java_awt_RenderingHints_Key$O($I$(12).KEY_TEXT_ANTIALIASING, $I$(12).VALUE_TEXT_ANTIALIAS_DEFAULT);
g2.drawString$S$I$I(" ELECTROPHORESIS CELL", this.plateX, this.cellLabelY);
}, p$1);

Clazz.newMeth(C$, 'addStandard$',  function () {
if (this.needCleared) {
this.addInfo=true;
this.needClearedError=true;
this.repaint$();
return;
}this.stopRun$();
if (this.shouldReset) p$1.resetWell.apply(this, []);
this.stdSample.reset$();
this.stdSample.fill$();
this.stdSample.setRatio$I((this.wellOpening1Height/this.ratioModifier|0));
this.stdSample.setXPosition$I(this.wellOpeningX[1]);
this.stdSample.setWidth$I(this.wellOpening1Width);
this.stdSample.setYPosition$I(this.wellBottom);
this.stdSample.setMaxY$I(this.wellBottom);
if (this.shouldReset) {
this.pipette.setSample$main_java_Electro1D_Sample(this.stdSample);
this.pipette.setStartXPosition$I(this.wellOpeningX[1] + this.halfWellWidth);
this.pipette.setMaxYPosition$I(this.wellBottom);
this.pipette.setSampleDepth$I(this.wellOpening1Height * 2);
}p$1.ResetFlags.apply(this, []);
this.addSampleFlag1=true;
this.stdLoadState=this.loading;
this.setPause$S("fill");
this.start$();
});

Clazz.newMeth(C$, 'addSample$main_java_Electro1D_ProteinA',  function (stds) {
if (this.stdLoadState == this.loading || this.samp2LoadState == this.loading ) {
return;
}this.stdSamples=stds;
this.stopRun$();
this.sampSample1.reset$();
this.sampSample1.fill$();
this.sampSample1.setRatio$I((this.wellOpening2Height/this.ratioModifier|0));
this.sampSample1.setXPosition$I(this.wellOpeningX[2]);
this.sampSample1.setWidth$I(this.wellOpening2Width);
this.sampSample1.setYPosition$I(this.wellBottom);
this.sampSample1.setMaxY$I(this.wellBottom);
this.pipette.setSample$main_java_Electro1D_Sample(this.sampSample1);
this.pipette.setStartXPosition$I(this.wellOpeningX[2] + this.halfWellWidth);
this.pipette.setMaxYPosition$I(this.wellBottom);
this.pipette.setSampleDepth$I(this.wellOpening2Height * 2);
p$1.ResetFlags.apply(this, []);
this.addSampleFlag1=true;
this.samp1LoadState=this.loading;
this.setPause$S("fill");
this.start$();
});

Clazz.newMeth(C$, 'addSample2$',  function () {
if (this.samp1LoadState == this.loading || this.stdLoadState == this.loading ) {
return;
}this.stopRun$();
this.sampSample2.reset$();
this.sampSample2.fill$();
this.sampSample2.setRatio$I((this.wellOpeningHeight/this.ratioModifier|0));
this.sampSample2.setXPosition$I(this.wellOpeningX[3]);
this.sampSample2.setWidth$I(this.wellOpeningWidth);
this.sampSample2.setYPosition$I(this.wellBottom);
this.sampSample2.setMaxY$I(this.wellBottom);
this.pipette.setSample$main_java_Electro1D_Sample(this.sampSample2);
this.pipette.setStartXPosition$I(this.wellOpeningX[3] + this.halfWellWidth);
this.pipette.setMaxYPosition$I(this.wellBottom);
this.pipette.setSampleDepth$I(this.wellOpeningHeight * 2);
p$1.ResetFlags.apply(this, []);
this.addSampleFlag2=true;
this.samp2LoadState=this.loading;
this.setPause$S("fill");
this.start$();
});

Clazz.newMeth(C$, 'addSampleFromFile$java_util_Vector$I',  function (proteins, n) {
if (n > 1 && n <= 10 ) {
this.stopRun$();
this.wellSamples[n].reset$();
this.wellSamples[n].fill$();
this.wellSamples[n].setRatio$I((this.wellOpeningHeight/this.ratioModifier|0));
this.wellSamples[n].setXPosition$I(this.wellOpeningX[n]);
this.wellSamples[n].setWidth$I(this.wellOpeningWidth);
this.wellSamples[n].setYPosition$I(this.wellBottom);
this.wellSamples[n].setMaxY$I(this.wellBottom);
if (this.shouldReset) {
this.pipette.setSample$main_java_Electro1D_Sample(this.wellSamples[n]);
this.pipette.setStartXPosition$I(this.wellOpeningX[n] + this.halfWellWidth);
this.pipette.setMaxYPosition$I(this.wellBottom);
this.pipette.setSampleDepth$I(this.wellOpeningHeight * 2);
}p$1.ResetFlags.apply(this, []);
this.wellProteins[n]=proteins;
if (this.wellProteins[n].size$() == 1) this.wellProteins[n].get$I(0).color=$I$(11).blue;
this.updateSpeed$D$main_java_Electro1D_Acrylamide(this.speed, this.gel);
this.addSampleFileFlag=true;
this.sampFileLoadState=this.loading;
this.setPause$S("fill");
this.start$();
}});

Clazz.newMeth(C$, 'redoWells$',  function () {
this.shouldReset=false;
if (this.needCleared) this.needCleared=false;
 else return;
this.addStandard$();
for (var i=2; i <= 10; i++) {
if (this.wellProteins[i] != null ) {
this.addSampleFromFile$java_util_Vector$I(this.wellProteins[i], i);
this.bsRedoWell.set$I(i);
}}
this.updateSpeed$D$main_java_Electro1D_Acrylamide(this.speed, this.gel);
this.paintRedoWells=true;
this.validate$();
this.repaint$();
this.shouldReset=true;
this.needCleared=true;
});

Clazz.newMeth(C$, 'paintReset$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(11).blue);
g.fillRect$I$I$I$I(this.wellOpeningX[1], this.wellOpeningY + this.wellOpeningHeight - (this.wellOpeningHeight/6|0), this.wellOpeningWidth, (this.wellOpeningHeight/6|0));
for (var i=2; i <= 10; i++) {
if (this.bsRedoWell.get$I(i)) {
g.fillRect$I$I$I$I(this.wellOpeningX[i], this.wellOpeningY + this.wellOpeningHeight - (this.wellOpeningHeight/6|0), this.wellOpeningWidth, (this.wellOpeningHeight/6|0));
}}
});

Clazz.newMeth(C$, 'updateRedo$',  function () {
this.bsRedoWell.clear$();
});

Clazz.newMeth(C$, 'resetWell',  function () {
for (var i=2; i <= 10; i++) {
this.wellProteins[i]=null;
this.dyes[i]=this.dyes[1];
}
this.ddNum=1;
}, p$1);

Clazz.newMeth(C$, 'clearWells$',  function () {
p$1.resetWell.apply(this, []);
this.stdSample.reset$();
p$1.ResetFlags.apply(this, []);
this.stdLoadState=this.notLoaded;
this.needCleared=false;
this.repaint$();
});

Clazz.newMeth(C$, 'updateSpeed$D$main_java_Electro1D_Acrylamide',  function (d, acrgel) {
this.speed=d;
this.gel=acrgel;
var mw;
var slope;
var b;
if (this.gel.getConc$() == 7.5 ) {
slope=-1.351168070689;
b=5.130287985031;
} else if (this.gel.getConc$() == 10 ) {
slope=-1.26337886495;
b=5.008386491966;
} else if (this.gel.getConc$() == 12 ) {
slope=-1.077057455865;
b=4.859468868697;
} else {
slope=-0.906781981037;
b=4.714783861725;
}var speedTemp;
for (var i=2; i <= 10; i++) {
var proteins=this.wellProteins[i];
if (proteins != null ) {
for (var x=0, n=proteins.size$(); x < n; x++) {
mw=proteins.get$I(x).mw;
speedTemp=(Math.log10(mw) - b) / slope;
proteins.get$I(x).speed=speedTemp * d;
if (speedTemp > 1 ) proteins.get$I(x).speed=0.95 * d;
if (speedTemp < 0 ) proteins.get$I(x).speed*=-1 * d;
}
}}
});

Clazz.newMeth(C$, 'setinitialspeed$',  function () {
for (var p, $p = 0, $$p = this.stdSamples; $p<$$p.length&&((p=($$p[$p])),1);$p++) {
p.speed=1;
}
for (var i=0; i <= 10; i++) {
if (this.wellProteins[i] != null ) this.dyes[i].speed=1;
}
for (var i=0; i <= 10; i++) {
if (this.wellProteins[i] != null ) {
for (var p, $p = this.wellProteins[i].iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.speed=1;
}
}}
});

Clazz.newMeth(C$, 'setAcrylamideEffect$java_util_Vector',  function (proteins) {
var i=0;
do if (this.gel.getConc$() > 12.0 ) {
if (proteins.get$I(i).mw > 26000) proteins.get$I(i).setDecider$I(this.gel.suppressor);
 else proteins.get$I(i).resetDecider$();
} else if (this.gel.getConc$() > 10.0 ) {
if (proteins.get$I(i).mw > 29000) proteins.get$I(i).setDecider$I(this.gel.suppressor);
 else proteins.get$I(i).resetDecider$();
} else if (this.gel.getConc$() > 7.5 ) {
if (proteins.get$I(i).mw > 40000) proteins.get$I(i).setDecider$I(this.gel.suppressor);
 else proteins.get$I(i).resetDecider$();
} else {
proteins.get$I(i).resetDecider$();
} while (++i < proteins.size$());
});

Clazz.newMeth(C$, 'setAcrylamide$main_java_Electro1D_Acrylamide',  function (acrylamide) {
this.gelLabel=acrylamide.percentGel + " Acrylamide";
this.gel=acrylamide;
this.updateSpeed$D$main_java_Electro1D_Acrylamide(this.speed, this.gel);
this.repaint$();
});

Clazz.newMeth(C$, 'drawGraph$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(11).black);
var i=0;
do g.drawString$S$I$I(this.Jlabels[i], this.$border, this.scaleDivs[i] + this.charHalfHeight);
 while (++i < 7);
}, p$1);

Clazz.newMeth(C$, 'paintSample$java_awt_Graphics',  function (g) {
var i=0;
this.notAtBottom=false;
this.dyes[1].drawProtein$java_awt_Graphics(g);
i=0;
do if (this.stdSamples[i].selected && this.stdSamples[i].drawProtein$java_awt_Graphics(g) ) this.notAtBottom=true;
 while (++i < 7);
for (i=2; i <= 10; i++) {
var proteins=this.wellProteins[i];
if (proteins != null ) {
this.dyes[i].drawProtein$java_awt_Graphics(g);
for (var x=0; x < proteins.size$(); x++) {
if (proteins.elementAt$I(x).drawProtein$java_awt_Graphics(g)) this.notAtBottom=true;
}
}}
if (this.sample1.drawProtein$java_awt_Graphics(g)) this.notAtBottom=true;
if (this.sample2.drawProtein$java_awt_Graphics(g)) this.notAtBottom=true;
if (!this.notAtBottom) this.stopRun$();
}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(10).currentThread$().setPriority$I(1);
this.stateHelper=Clazz.new_([((P$.Simulation$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Simulation$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (this.b$['main.java.Electro1D.Simulation'].stateHelper.isAlive$() && !this.b$['main.java.Electro1D.Simulation'].stopAnimation ) {
switch (this.b$['main.java.Electro1D.Simulation'].stateHelper.getState$()) {
case 0:
this.b$['main.java.Electro1D.Simulation'].stateHelper.setState$I(1);
this.b$['main.java.Electro1D.Simulation'].stateHelper.sleep$I(this.b$['main.java.Electro1D.Simulation'].pause);
break;
case 1:
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
this.b$['main.java.Electro1D.Simulation'].stateHelper.next$I(0);
break;
}
}return false;
});
})()
), Clazz.new_(P$.Simulation$1.$init$,[this, null]))],$I$(13,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
});

Clazz.newMeth(C$, 'paintAddition$java_awt_Graphics',  function (g) {
if (!this.pipette.fillWell$java_awt_Graphics(g)) {
if (this.stdLoadState == this.loading) this.stdLoadState=this.loaded;
 else if (this.samp1LoadState == this.loading) this.samp1LoadState=this.loaded;
 else if (this.sampFileLoadState == this.loading) this.sampFileLoadState=this.loaded;
this.stopRun$();
}}, p$1);

Clazz.newMeth(C$, 'ResetFlags',  function () {
this.runSampleFlag=false;
this.addSampleFlag1=false;
this.addSampleFlag2=false;
this.stopAnimation=false;
this.notAtBottom=false;
}, p$1);

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (!this.imageCreated) {
this.offScreenImage=this.createImage$I$I(this.getSize$().width, this.getSize$().height);
var newFont=Clazz.new_($I$(14,1).c$$S$I$I,["TimesRoman", 0, 9]);
this.$font=this.getFont$();
this.fm=this.getFontMetrics$java_awt_Font(newFont);
p$1.calcDimensions.apply(this, []);
this.imageCreated=true;
}this.offScreenGraphics=this.offScreenImage.getGraphics$();
if (this.addInfo) {
this.offScreenGraphics.setColor$java_awt_Color($I$(11).white);
this.offScreenGraphics.fillRect$I$I$I$I(this.plateX, 1, this.plateWidth, this.topY - 5);
p$1.paintData$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offScreenImage, 0, 0, this);
return;
}this.offScreenGraphics.setColor$java_awt_Color($I$(11).white);
this.offScreenGraphics.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
this.offScreenGraphics.setColor$java_awt_Color(g.getColor$());
if (this.runExperiment) {
p$1.hitStackBottom.apply(this, []);
p$1.drawCell$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
if (this.runSampleFlag) p$1.paintSample$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
 else if (this.addSampleFlag1) p$1.paintAddition$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
 else if (this.addSampleFlag2) p$1.paintAddition$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
 else if (this.addSampleFileFlag) p$1.paintAddition$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
if (this.paintRedoWells) {
this.paintReset$java_awt_Graphics(this.offScreenGraphics);
}this.stdSample.drawSample$java_awt_Graphics(this.offScreenGraphics);
this.sampSample1.drawSample$java_awt_Graphics(this.offScreenGraphics);
for (var i=2; i <= 10; i++) {
this.wellSamples[i].drawSample$java_awt_Graphics(this.offScreenGraphics);
}
} else {
p$1.drawGraph$java_awt_Graphics.apply(this, [this.offScreenGraphics]);
}g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.offScreenImage, 0, 0, this);
});

Clazz.newMeth(C$, 'hitStackBottom',  function () {
if (this.dyes[1] != null ) {
if (this.dyes[1].y1 > this.wellBottom + 10 ) {
this.$parent.paramsetspeed$D(this.speed);
}}}, p$1);

Clazz.newMeth(C$, 'increaseDDNum$',  function () {
++this.ddNum;
});

Clazz.newMeth(C$, 'checkMouse$I$I$Z',  function (x, y, clicked) {
if (clicked && (!this.stopAnimation || !this.notAtBottom ) ) return;
if (this.sample1.matchPosition$I$I(x, y)) {
this.announce$main_java_Electro1D_Protein$S$S$I$Z(this.sample1, "tbd", this.sample1.name, 1, clicked);
return;
}var w=p$1.findWell$I.apply(this, [x]);
switch (w) {
case 0:
return;
case 1:
for (var i=0; i < this.stdSamples.length; i++) {
if (this.stdSamples[i].matchPosition$I$I(x, y)) {
this.stdSamples[i].relativeMigration=this.stdSamples[i].getDistance$() / this.dyes[1].getDistance$();
this.announce$main_java_Electro1D_Protein$S$S$I$Z(this.stdSamples[i], this.stdSamples[i].mw + "", this.stdSamples[i].fullName, 1, clicked);
return;
}}
break;
}
var dye=this.dyes[w];
if (dye.matchPosition$I$I(x, y)) {
this.announce$main_java_Electro1D_Protein$S$S$I$Z(dye, "", dye.name, 1, clicked);
return;
}var protein=(clicked ? this.findProtein$I$I$I(x, y, w) : null);
if (protein != null ) {
protein.relativeMigration=protein.getDistance$() / this.dyes[w].getDistance$();
this.announce$main_java_Electro1D_Protein$S$S$I$Z(protein, "tbd", protein.fullName, w, clicked);
}});

Clazz.newMeth(C$, 'findWell$I',  function (x) {
for (var i=1; i < this.wellOpeningX.length; i++) {
var wx=this.wellOpeningX[i];
if (x <= wx + this.wellOpeningWidth + 2 ) return (x >= wx - 2 && (i < 2 || this.wellProteins[i] != null  )  ? i : 0);
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'findProtein$I$I$I',  function (x, y, w) {
if (w < 0) w=p$1.findWell$I.apply(this, [x]);
if (w < 2) return null;
var proteins=this.wellProteins[w];
for (var j=0, n=proteins.size$(); j < n; j++) {
var protein=proteins.get$I(j);
if (protein.matchPosition$I$I(x, y)) {
return protein;
}}
return null;
});

Clazz.newMeth(C$, 'announce$main_java_Electro1D_Protein$S$S$I$Z',  function (p, mw, name, refDye, clicked) {
if (!clicked) return;
this.proteinName=name;
this.proteinMW="MW = " + mw;
this.proteinDist="mm travel = " + this.twoDigits.format$D(p.getDistance$());
this.relMigration="RM = " + this.twoDigits.format$D(p.getDistance$() / this.dyes[refDye].getDistance$());
this.addInfo=true;
this.repaint$();
});

Clazz.newMeth(C$, 'setStandards$main_java_Electro1D_ProteinA',  function (stds) {
this.stdSamples=stds;
});

Clazz.newMeth(C$, 'loadFile$java_io_File$I',  function (f, wellNum) {
var filename=(f == null  ? null : f.getName$());
var proteins=Clazz.new_($I$(1,1));
var error=$I$(15).loadFile$java_io_File$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, null, proteins, null, 0);
if (error == null ) {
this.addSampleFromFile$java_util_Vector$I(proteins, wellNum);
var n=proteins.size$();
}});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Simulation, "MouseClickListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.MouseAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.b$['main.java.Electro1D.Simulation'].checkMouse$I$I$Z.apply(this.b$['main.java.Electro1D.Simulation'], [e.getX$(), e.getY$(), true]);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
this.b$['main.java.Electro1D.Simulation'].checkMouse$I$I$Z.apply(this.b$['main.java.Electro1D.Simulation'], [e.getX$(), e.getY$(), false]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
