(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[[0,'javax.swing.JPanel','javax.swing.JButton','main.java.Utilities.BrowserLauncher','java.awt.Dimension','main.java.Utilities.GenomeFileParser','main.java.Electro1D.Simulation','main.java.Electro1D.Parameters','main.java.Electro1D.ProteinData','main.java.Electro1D.Plot','java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.FlowLayout','javax.swing.JTabbedPane','java.awt.Insets','javax.swing.JFrame']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Electrophoresis", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tabPane','javax.swing.JTabbedPane','+tabPane2','paramPanel','main.java.Electro1D.Parameters','simPanel','main.java.Electro1D.Simulation','dataPanel','main.java.Electro1D.ProteinData','plotPanel','main.java.Electro1D.Plot','parentFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'Header$',  function () {
var headPanel=Clazz.new_($I$(1,1));
var help=Clazz.new_($I$(2,1).c$$S,["Help"]);
help.setToolTipText$S("Open Help wiki for Electro1D");
help.addActionListener$java_awt_event_ActionListener(((P$.Electrophoresis$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electrophoresis$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="http://sourceforge.net/p/jbf/wiki/Electro1D";
try {
$I$(3).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Electrophoresis$1.$init$,[this, null])));
headPanel.add$java_awt_Component(help);
C$.superclazz.prototype.add$java_awt_Component.apply(this, [headPanel]);
});

Clazz.newMeth(C$, 'c$$javax_swing_JFrame',  function (parentFrame) {
Clazz.super_(C$, this);
C$.superclazz.prototype.setPreferredSize$java_awt_Dimension.apply(this, [Clazz.new_($I$(4,1).c$$I$I,[900, 470])]);
$I$(5).init$();
this.parentFrame=parentFrame;
this.parentFrame.setName$S("Electro1D");
this.simPanel=Clazz.new_($I$(6,1).c$$main_java_Electro1D_Electrophoresis,[this]);
this.paramPanel=Clazz.new_($I$(7,1).c$$main_java_Electro1D_Electrophoresis,[this]);
this.dataPanel=Clazz.new_($I$(8,1).c$$main_java_Electro1D_Electrophoresis,[this]);
this.plotPanel=Clazz.new_($I$(9,1).c$$main_java_Electro1D_Electrophoresis,[this]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
var c=Clazz.new_($I$(11,1));
var tempPanel=Clazz.new_($I$(1,1));
tempPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I,[0]));
tempPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[240, 450]));
this.paramPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[240, 450]));
this.dataPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[240, 450]));
this.tabPane=Clazz.new_($I$(13,1));
this.tabPane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[240, 450]));
this.tabPane.addTab$S$java_awt_Component("Parameters", this.paramPanel);
this.tabPane.addTab$S$java_awt_Component("ProteinData", this.dataPanel);
tempPanel.add$java_awt_Component(this.tabPane);
var tempPanel2=Clazz.new_($I$(1,1));
tempPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I,[0]));
tempPanel2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[650, 450]));
this.simPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[650, 450]));
this.plotPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[650, 450]));
this.tabPane2=Clazz.new_($I$(13,1));
this.tabPane2.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4,1).c$$I$I,[650, 450]));
this.tabPane2.add$S$java_awt_Component("Casting Tray ", this.simPanel);
this.tabPane2.add$S$java_awt_Component("Plot", this.plotPanel);
tempPanel2.add$java_awt_Component(this.tabPane2);
c.gridx=0;
c.gridy=0;
this.add$java_awt_Component$O(this.tabPane, c);
c.gridx=1;
c.gridy=0;
c.insets=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 5, 0, 0]);
this.add$java_awt_Component$O(this.tabPane2, c);
this.paramPanel.setDefaults$();
}, 1);

Clazz.newMeth(C$, 'addStandard$',  function () {
this.simPanel.addStandard$();
});

Clazz.newMeth(C$, 'stopRun$',  function () {
this.simPanel.stopRun$();
});

Clazz.newMeth(C$, 'displaySim$',  function () {
this.tabPane.setVisible$Z(true);
});

Clazz.newMeth(C$, 'setAcrylamide$main_java_Electro1D_Acrylamide',  function (acrylamide) {
this.simPanel.setAcrylamide$main_java_Electro1D_Acrylamide(acrylamide);
});

Clazz.newMeth(C$, 'startRun$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein$main_java_Electro1D_ProteinA',  function (aprotein, protein1, protein2, proteins) {
this.simPanel.startRun$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein$main_java_Electro1D_ProteinA(aprotein, protein1, protein2, proteins);
});

Clazz.newMeth(C$, 'setPlotData$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein',  function (stds, sample, dye) {
this.tabPane2.setEnabledAt$I$Z(this.tabPane2.indexOfComponent$java_awt_Component(this.plotPanel), this.plotPanel.setResults$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein(stds, sample, dye));
});

Clazz.newMeth(C$, 'displayData$',  function () {
this.tabPane2.setVisible$Z(true);
});

Clazz.newMeth(C$, 'addSample$main_java_Electro1D_ProteinA',  function (stds) {
this.simPanel.addSample$main_java_Electro1D_ProteinA(stds);
});

Clazz.newMeth(C$, 'addSample2$',  function () {
this.simPanel.addSample2$();
});

Clazz.newMeth(C$, 'addSampleFromFile$java_util_Vector$I',  function (proteins, wellNum) {
this.simPanel.increaseDDNum$();
this.simPanel.addSampleFromFile$java_util_Vector$I(proteins, wellNum);
});

Clazz.newMeth(C$, 'isReady$',  function () {
return this.simPanel.isReady$();
});

Clazz.newMeth(C$, 'paramsetspeed$D',  function (d) {
this.paramPanel.setSpeed$D(d);
});

Clazz.newMeth(C$, 'updateSpeed$D$main_java_Electro1D_Acrylamide',  function (d, acrgel) {
this.simPanel.updateSpeed$D$main_java_Electro1D_Acrylamide(d, acrgel);
});

Clazz.newMeth(C$, 'setStandards$main_java_Electro1D_ProteinA',  function (stds) {
this.simPanel.setStandards$main_java_Electro1D_ProteinA(stds);
});

Clazz.newMeth(C$, 'resetWells$',  function () {
this.simPanel.redoWells$();
});

Clazz.newMeth(C$, 'clearWells$',  function () {
this.simPanel.clearWells$();
});

Clazz.newMeth(C$, 'getButtonState$',  function () {
return this.paramPanel.getButtonState$();
});

Clazz.newMeth(C$, 'setAnimationSpeed$S',  function (s) {
this.simPanel.setPause$S(s);
});

Clazz.newMeth(C$, 'displayProtein$main_java_Electro1D_Protein',  function (protein) {
this.dataPanel.displayData$main_java_Electro1D_Protein(protein);
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var f=Clazz.new_($I$(15,1));
f.setDefaultCloseOperation$I(2);
f.add$java_awt_Component(Clazz.new_(C$.c$$javax_swing_JFrame,[f]));
f.pack$();
f.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:53 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
