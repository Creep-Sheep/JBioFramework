(function(){var P$=Clazz.newPackage("main.java.MassSpec"),I$=[[0,'java.awt.GridBagLayout','java.awt.GridBagConstraints','java.awt.Insets','javax.swing.JPanel','javax.swing.JLabel','java.awt.Font','javax.swing.JButton','main.java.Utilities.BrowserLauncher','javax.swing.JTextArea','main.java.Utilities.FileUtils','javax.swing.JScrollPane','javax.swing.JComboBox','javax.swing.JTextField','main.java.MassSpec.Spectrometer','main.java.MassSpec.MassSpecMain',['main.java.MassSpec.MassSpecMain','.ToggleFragmentButton'],'main.java.MassSpec.TandemGraphGUI','main.java.MassSpec.OutputGraphGUI','java.util.Vector','main.java.Utilities.GenomeFileParser','java.text.DecimalFormat','javax.swing.JOptionPane']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MassSpecMain", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['ToggleFragmentButton',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.proteaseChoices=Clazz.array(String, -1, ["Trypsin", "Chymotrypsin", "Proteinase K", "Thermolysin"]);
this.clearListener=((P$.MassSpecMain$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.MassSpec.MassSpecMain'].clearGraphics$.apply(this.b$['main.java.MassSpec.MassSpecMain'], []);
});
})()
), Clazz.new_(P$.MassSpecMain$1.$init$,[this, null]));
},1);

C$.$fields$=[['O',['proteaseChoices','String[]','help','javax.swing.JButton','+about','lowerRange','javax.swing.JTextField','+upperRange','proteaseBox','javax.swing.JComboBox','tandemGraph','main.java.MassSpec.TandemGraphGUI','massDisplay','javax.swing.JLabel','blueBs','main.java.MassSpec.MassSpecMain.ToggleFragmentButton','+redYs','outputGraph','main.java.MassSpec.OutputGraphGUI','ion','main.java.MassSpec.Ion','clearListener','java.awt.event.ActionListener']]
,['O',['inputArea','javax.swing.JTextArea']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
var constraints=Clazz.new_($I$(2,1));
constraints.insets=Clazz.new_($I$(3,1).c$$I$I$I$I,[1, 5, 1, 5]);
var headP=Clazz.new_($I$(4,1));
var head=Clazz.new_($I$(5,1).c$$S,["Tandem Mass Spectrometer"]);
head.setFont$java_awt_Font(Clazz.new_($I$(6,1).c$$S$I$I,["SansSerif", 1, 18]));
headP.add$java_awt_Component(head);
constraints.gridy=0;
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [headP, constraints]);
var infoButtonsPanel=Clazz.new_($I$(4,1));
this.help=Clazz.new_($I$(7,1).c$$S,["Help"]);
this.help.setToolTipText$S("Opens Help wiki for Mass Spectrometer");
this.help.addActionListener$java_awt_event_ActionListener(((P$.MassSpecMain$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(8).openURL$S("https://sourceforge.net/p/jbf/wiki/MassSpec/");
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.MassSpecMain$2.$init$,[this, null])));
infoButtonsPanel.add$java_awt_Component(this.help);
this.about=Clazz.new_($I$(7,1).c$$S,["About"]);
this.about.setToolTipText$S("About the program");
this.about.addActionListener$java_awt_event_ActionListener(((P$.MassSpecMain$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(8).openURL$S("https://sourceforge.net/projects/jbf/");
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.MassSpecMain$3.$init$,[this, null])));
infoButtonsPanel.add$java_awt_Component(this.about);
constraints.gridx=0;
constraints.gridy=1;
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [infoButtonsPanel, constraints]);
var inputLabel=Clazz.new_($I$(5,1).c$$S,["Input protein sequence to be analyzed: "]);
constraints.gridy=2;
this.add$java_awt_Component$O(inputLabel, constraints);
C$.inputArea=Clazz.new_($I$(9,1).c$$I$I,[7, 20]);
C$.inputArea.setToolTipText$S("type or paste protein sequence here");
C$.inputArea.setLineWrap$Z(true);
$I$(10,"setFileDropper$javax_swing_JComponent$java_util_function_BiFunction",[C$.inputArea, ((P$.MassSpecMain$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_File$java_awt_Point','apply$O$O'],  function (file, pt) {
this.b$['main.java.MassSpec.MassSpecMain'].loadFile$java_io_File.apply(this.b$['main.java.MassSpec.MassSpecMain'], [file]);
return null;
});
})()
), Clazz.new_(P$.MassSpecMain$4.$init$,[this, null]))]);
var scrollPane=Clazz.new_($I$(11,1).c$$java_awt_Component,[C$.inputArea]);
constraints.gridy=3;
this.add$java_awt_Component$O(scrollPane, constraints);
var orLabel=Clazz.new_($I$(5,1).c$$S,["OR"]);
constraints.gridy=4;
this.add$java_awt_Component$O(orLabel, constraints);
var loadButton=Clazz.new_($I$(7,1).c$$S,["Load Sequence From File"]);
loadButton.setToolTipText$S("Load from protein file");
loadButton.addActionListener$java_awt_event_ActionListener(((P$.MassSpecMain$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(10,"openFile$java_awt_Component$java_util_function_Function",[this.b$['main.java.MassSpec.MassSpecMain'], ((P$.MassSpecMain$5$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "MassSpecMain$5$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File','apply$O'],  function (file) {
this.b$['main.java.MassSpec.MassSpecMain'].loadFile$java_io_File.apply(this.b$['main.java.MassSpec.MassSpecMain'], [file]);
return null;
});
})()
), Clazz.new_(P$.MassSpecMain$5$lambda1.$init$,[this, null]))]);
});
})()
), Clazz.new_(P$.MassSpecMain$5.$init$,[this, null])));
constraints.gridy=5;
this.add$java_awt_Component$O(loadButton, constraints);
var proteaseLabel=Clazz.new_($I$(5,1).c$$S,["Select protease: "]);
constraints.gridy=6;
this.add$java_awt_Component$O(proteaseLabel, constraints);
this.proteaseBox=Clazz.new_($I$(12,1).c$$OA,[this.proteaseChoices]);
this.proteaseBox.addActionListener$java_awt_event_ActionListener(this.clearListener);
constraints.gridy=7;
this.add$java_awt_Component$O(this.proteaseBox, constraints);
var selectRangeLabel=Clazz.new_($I$(5,1).c$$S,["Enter m/e range: "]);
constraints.gridy=8;
this.add$java_awt_Component$O(selectRangeLabel, constraints);
var rangeSelectionUpperPanel=Clazz.new_($I$(4,1));
this.lowerRange=Clazz.new_($I$(13,1).c$$S$I,["0", 5]);
var lowerRangeLabel=Clazz.new_($I$(5,1).c$$S,["Lower Limit: "]);
rangeSelectionUpperPanel.add$java_awt_Component(lowerRangeLabel);
rangeSelectionUpperPanel.add$java_awt_Component(this.lowerRange);
constraints.gridy=9;
this.add$java_awt_Component$O(rangeSelectionUpperPanel, constraints);
var rangeSelectionLowerPanel=Clazz.new_($I$(4,1));
this.upperRange=Clazz.new_($I$(13,1).c$$S$I,["3000", 5]);
var upperRangeLabel=Clazz.new_($I$(5,1).c$$S,["Upper Limit: "]);
rangeSelectionLowerPanel.add$java_awt_Component(upperRangeLabel);
rangeSelectionLowerPanel.add$java_awt_Component(this.upperRange);
constraints.gridy=10;
this.add$java_awt_Component$O(rangeSelectionLowerPanel, constraints);
var runButton=Clazz.new_($I$(7,1).c$$S,["Run Spectrum"]);
runButton.setToolTipText$S("Outputs the mass spectrum data on right panel");
runButton.addActionListener$java_awt_event_ActionListener(((P$.MassSpecMain$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "MassSpecMain$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(14,"runAnalysis$S$main_java_MassSpec_OutputGraphGUI$S",[$I$(15).inputArea.getText$(), this.b$['main.java.MassSpec.MassSpecMain'].outputGraph, this.b$['main.java.MassSpec.MassSpecMain'].proteaseBox.getSelectedItem$().toString()]);
});
})()
), Clazz.new_(P$.MassSpecMain$6.$init$,[this, null])));
constraints.gridy=11;
this.add$java_awt_Component$O(runButton, constraints);
this.massDisplay=Clazz.new_($I$(5,1).c$$S,["<html> Mass: N/A <P>"]);
constraints.gridy=12;
this.add$java_awt_Component$O(this.massDisplay, constraints);
this.blueBs=Clazz.new_($I$(16,1).c$$S$Z,[this, null, "B fragments", true]);
constraints.gridy=13;
this.add$java_awt_Component$O(this.blueBs, constraints);
this.redYs=Clazz.new_($I$(16,1).c$$S$Z,[this, null, "Y fragments", true]);
constraints.gridy=14;
this.add$java_awt_Component$O(this.redYs, constraints);
this.tandemGraph=Clazz.new_($I$(17,1));
constraints.gridy=0;
constraints.gridx=1;
constraints.gridheight=8;
constraints.weighty=1.0;
constraints.weightx=1.0;
constraints.fill=1;
this.add$java_awt_Component$O(this.tandemGraph, constraints);
this.outputGraph=Clazz.new_($I$(18,1).c$$main_java_MassSpec_MassSpecMain,[this]);
constraints.gridy=8;
constraints.gridheight=6;
this.add$java_awt_Component$O(this.outputGraph, constraints);
}, 1);

Clazz.newMeth(C$, 'clearGraphics$',  function () {
this.tandemGraph.drawSequencePeaks$main_java_MassSpec_Ion(null);
this.outputGraph.setPeaks$java_util_ArrayList$D(null, 0);
});

Clazz.newMeth(C$, 'loadFile$java_io_File',  function (file) {
var sequences=Clazz.new_($I$(19,1));
$I$(20).loadFile$java_io_File$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(file, sequences, null, null, -1);
if (sequences.size$() > 0) C$.inputArea.setText$S(sequences.get$I(0));
});

Clazz.newMeth(C$, 'runTandem$main_java_MassSpec_Ion',  function (selected) {
this.ion=selected;
var massFormat=Clazz.new_($I$(21,1).c$$S,["##.##"]);
var mass=massFormat.format$D(this.ion.getMass$());
this.massDisplay.setText$S("<html> Mass: " + mass);
this.tandemGraph.drawSequencePeaks$main_java_MassSpec_Ion(this.ion);
});

Clazz.newMeth(C$, 'getInputArea$',  function () {
return C$.inputArea;
}, 1);

Clazz.newMeth(C$, 'getLowerLimit$',  function () {
var lower;
if (this.lowerRange.getText$().contains$CharSequence(",")) {
var noComma=this.lowerRange.getText$();
var index=noComma.indexOf$S(",");
noComma=noComma.substring$I$I(0, index) + noComma.substring$I$I(index + 1, noComma.length$());
try {
lower=(Double.valueOf$S(noComma)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(22).showMessageDialog$java_awt_Component$O(null, "Did not recognize Lower Limit as a number. Using default lower limit of 0.");
this.lowerRange.setText$S("0");
return 0;
} else {
throw e;
}
}
} else {
try {
lower=(Double.valueOf$S(this.lowerRange.getText$())).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(22).showMessageDialog$java_awt_Component$O(null, "Did not recognize Lower Limit as a number. Using default lower limit of 0.");
this.lowerRange.setText$S("0");
return 0;
} else {
throw e;
}
}
}if (lower < 0  || lower > 20000  ) {
lower=0;
$I$(22,"showMessageDialog$java_awt_Component$O",[null, "Lower Limit out of bounds (0 to 20,000). Set to default of 0."]);
this.lowerRange.setText$S("0");
}if (lower > this.getUpperLimit$() ) {
lower=0;
$I$(22).showMessageDialog$java_awt_Component$O(null, "Lower Limit is higher than Upper Limit. Set to default of 0.");
this.lowerRange.setText$S("0");
}return lower;
});

Clazz.newMeth(C$, 'getUpperLimit$',  function () {
var upper;
if (this.upperRange.getText$().contains$CharSequence(",")) {
var noComma=this.upperRange.getText$();
var index=noComma.indexOf$S(",");
noComma=noComma.substring$I$I(0, index) + noComma.substring$I$I(index + 1, noComma.length$());
try {
upper=(Double.valueOf$S(noComma)).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(22).showMessageDialog$java_awt_Component$O(null, "Did not recognize Upper Limit as a number. Using default upper limit of 3000.");
this.upperRange.setText$S("3000");
return 0;
} else {
throw e;
}
}
} else {
try {
upper=(Double.valueOf$S(this.upperRange.getText$())).valueOf();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
$I$(22).showMessageDialog$java_awt_Component$O(null, "Did not recognize Upper Limit as a number. Using default upper limit of 3000.");
this.upperRange.setText$S("3000");
return 3000;
} else {
throw e;
}
}
}if (upper < 0  || upper > 20000  ) {
upper=3000;
$I$(22,"showMessageDialog$java_awt_Component$O",[null, "Upper Limit out of bounds (0 to 20,000). Set to default of 3000."]);
this.upperRange.setText$S("3000");
}return upper;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MassSpecMain, "ToggleFragmentButton", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JCheckBox', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$Z',  function (text, state) {
;C$.superclazz.c$$S$Z.apply(this,[text, state]);C$.$init$.apply(this);
this.addItemListener$java_awt_event_ItemListener(this);
}, 1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var source=e.getItemSelectable$();
if (source === this.b$['main.java.MassSpec.MassSpecMain'].blueBs ) {
if (e.getStateChange$() == 2) {
this.b$['main.java.MassSpec.MassSpecMain'].tandemGraph.setBlueBs$Z(false);
} else {
this.b$['main.java.MassSpec.MassSpecMain'].tandemGraph.setBlueBs$Z(true);
}} else {
if (e.getStateChange$() == 2) {
this.b$['main.java.MassSpec.MassSpecMain'].tandemGraph.setRedYs$Z(false);
} else {
this.b$['main.java.MassSpec.MassSpecMain'].tandemGraph.setRedYs$Z(true);
}}if (this.b$['main.java.MassSpec.MassSpecMain'].ion != null ) {
this.b$['main.java.MassSpec.MassSpecMain'].tandemGraph.drawSequencePeaks$main_java_MassSpec_Ion(this.b$['main.java.MassSpec.MassSpecMain'].ion);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
