(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'main.java.Electro1D.Constants','main.java.Electro1D.Protein','java.awt.Color','javax.swing.JCheckBox','javax.swing.JPanel','javax.swing.JComboBox',['main.java.Electro1D.Parameters','.UnknownListHandler1'],['main.java.Electro1D.Parameters','.UnknownListHandler2'],['main.java.Electro1D.Parameters','.GelPercentageHandler'],['main.java.Electro1D.Parameters','.VoltageListHandler'],'javax.swing.ButtonGroup','javax.swing.JButton','java.awt.GridLayout','javax.swing.BorderFactory','javax.swing.JRadioButton','javax.swing.JLabel','java.awt.BorderLayout',['main.java.Electro1D.Parameters','.StandardsListListener'],'main.java.Utilities.FileUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Parameters", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JPanel');
C$.$classes$=[['StandardsListListener',0],['UnknownListHandler1',0],['UnknownListHandler2',0],['VoltageListHandler',0],['GelPercentageHandler',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stdProteinArray=Clazz.array($I$(2), [$I$(1).standardIndices.length]);
{
p$1.setStandards$main_java_Electro1D_ProteinA.apply(this, [Clazz.array($I$(2), -1, [Clazz.new_(["", "beta-Galactosidase", "b-gal", 116107, $I$(3).blue],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Ovalbumin", "oval", 42734, $I$(3).yellow],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Carbonic Anhydrase", "carb anh", 29011, $I$(3).gray],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Triose Phosphate Isomerase", "TIM", 26527, $I$(3).green],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Myoglobin", "Myo", 17183, $I$(3).magenta],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Lysozyme", "Lyso", 14296, $I$(3).white],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["", "Trypsin Inhibitor", "BPTI", 6500, $I$(3).red],$I$(2,1).c$$S$S$S$I$java_awt_Color)])]);
}
this.unknowns=Clazz.array($I$(2), -1, [Clazz.new_(["Unknown #1", "Aconitase", "Acon", 82512, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #2", "Conconavalin A", "Con A", 25556, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #3", "Glucose Oxidase", "GO", 63058, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #4", "Neuraminidase", "Neur", 43505, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #5", "Phosphorylase b", "Phos b", 94969, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #6", "Pyruvate Kinase", "Pyr Kin", 56773, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #7", "Ribonuclease A", "Ribo A", 13673, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #8", "Chymotrypsinogen", "Chymo", 23564, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #9", "p-Hydroxybenzoate", "Hydrox", 43939, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color), Clazz.new_(["Unknown #10", "Ribonuclease H", "Ribo H", 16638, $I$(3).black],$I$(2,1).c$$S$S$S$I$java_awt_Color)]);
this.unknownSpeeds=Clazz.array(Double.TYPE, -1, [0.151663, 0.506535, 0.233075, 0.345459, 0.109091, 0.264865, 0.695904, 0.531106, 0.342453, 0.63648]);
this.standardSpeeds=Clazz.array(Double.TYPE, -1, [0.048245, 0.350872, 0.468143, 0.495244, 0.626721, 0.682414, 0.921053]);
this.samples=Clazz.array(String, [this.unknowns.length]);
{
for (var i=0; i < this.unknowns.length; i++) this.samples[i]=this.unknowns[i].name;

}
this.standards=Clazz.array($I$(4), [7]);
this.colorPanels=Clazz.array($I$(5), [this.standards.length]);
},1);

C$.$fields$=[['D',['selectedSpeed'],'I',['state'],'O',['selectedSample1','main.java.Electro1D.Protein','+selectedSample2','selectedGel','main.java.Electro1D.Acrylamide','acrylamide','javax.swing.JComboBox','+sample1','+sample2','+voltages','voltage','javax.swing.ButtonGroup','+speed','dyeColor','java.awt.Color','$parent','main.java.Electro1D.Electrophoresis','stdProteinArray','main.java.Electro1D.Protein[]','+unknowns','unknownSpeeds','double[]','+standardSpeeds','samples','String[]','resetwells','javax.swing.JButton','+clearwells','+addStandard','+startButton','+stopButton','wellButtons','javax.swing.JButton[]','headerPanel','javax.swing.JPanel','+headerSub1','+headerSub2','+labelPanel1','+labelPanel2','+dropPanel','+selectionPanel1','+selectionPanel2','+standardPanel','+colorPanel','+voltacrPanel','+voltagePanel','+voltageSub1Panel','+voltageSub2Panel','+controlPanel','+colorPanelTop','+resetPanel','standards','javax.swing.JCheckBox[]','colorPanels','javax.swing.JPanel[]','proteins','java.util.Vector']]]

Clazz.newMeth(C$, 'setStandards$main_java_Electro1D_ProteinA',  function (p) {
for (var i=0; i < p.length; i++) {
p[i].name="Standard #" + (i + 1);
this.stdProteinArray[$I$(1).standardIndices[i]]=p[i];
}
}, p$1);

Clazz.newMeth(C$, 'getStdProtein$I',  function (i) {
return this.stdProteinArray[$I$(1).standardIndices[i]];
}, p$1);

Clazz.newMeth(C$, 'c$$main_java_Electro1D_Electrophoresis',  function (electrophoresis) {
Clazz.super_(C$, this);
this.selectedSpeed=1.0;
this.acrylamide=Clazz.new_([$I$(1).gelPercents],$I$(6,1).c$$OA);
this.sample1=Clazz.new_($I$(6,1).c$$OA,[this.samples]);
this.sample2=Clazz.new_($I$(6,1).c$$OA,[this.samples]);
this.voltages=Clazz.new_([$I$(1).voltageList],$I$(6,1).c$$OA);
var unl1=Clazz.new_($I$(7,1),[this, null]);
var unl2=Clazz.new_($I$(8,1),[this, null]);
var gh=Clazz.new_($I$(9,1),[this, null]);
var vl=Clazz.new_($I$(10,1),[this, null]);
this.acrylamide.setSelectedItem$O("7.5%");
this.sample2.setSelectedItem$O("Unknown #2");
this.voltages.setSelectedItem$O("150V");
this.sample1.addItemListener$java_awt_event_ItemListener(unl1);
this.sample2.addItemListener$java_awt_event_ItemListener(unl2);
this.acrylamide.addItemListener$java_awt_event_ItemListener(gh);
this.voltages.addItemListener$java_awt_event_ItemListener(vl);
this.voltage=Clazz.new_($I$(11,1));
this.wellButtons=Clazz.array($I$(12), [11]);
this.speed=Clazz.new_($I$(11,1));
this.headerPanel=Clazz.new_($I$(5,1));
this.headerSub1=Clazz.new_([Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 3, 1, 1])],$I$(5,1).c$$java_awt_LayoutManager);
this.headerSub2=Clazz.new_($I$(5,1));
this.labelPanel1=Clazz.new_($I$(5,1));
this.labelPanel2=Clazz.new_($I$(5,1));
this.dropPanel=Clazz.new_($I$(5,1));
this.selectionPanel1=Clazz.new_($I$(5,1));
this.selectionPanel2=Clazz.new_($I$(5,1));
this.standardPanel=Clazz.new_($I$(5,1));
this.colorPanel=Clazz.new_($I$(5,1));
this.voltagePanel=Clazz.new_($I$(5,1));
this.voltageSub1Panel=Clazz.new_($I$(5,1));
this.voltageSub2Panel=Clazz.new_($I$(5,1));
this.controlPanel=Clazz.new_($I$(5,1));
this.colorPanelTop=Clazz.new_($I$(5,1));
for (var i=0; i < this.colorPanels.length; i++) this.colorPanels[i]=Clazz.new_($I$(5,1));

this.voltacrPanel=Clazz.new_($I$(5,1));
this.resetPanel=Clazz.new_($I$(5,1));
this.$parent=electrophoresis;
var border=$I$(14).createTitledBorder$S("ELECTROPHORESIS PARAMETERS");
var border1=$I$(14).createTitledBorder$S("Animation Speed");
p$1.setPanelsColors.apply(this, []);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[3, 1, 2, 2]));
this.headerPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 1, 5, 5]));
this.headerPanel.setBorder$javax_swing_border_Border(border);
var speed1button=Clazz.new_($I$(15,1).c$$S$Z,["Slow", false]);
speed1button.addActionListener$java_awt_event_ActionListener(((P$.Parameters$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].setAnimationSpeed$S.apply(this.b$['main.java.Electro1D.Parameters'], ["Slow"]);
});
})()
), Clazz.new_(P$.Parameters$1.$init$,[this, null])));
var speed2button=Clazz.new_($I$(15,1).c$$S$Z,["Moderate ", true]);
speed2button.addActionListener$java_awt_event_ActionListener(((P$.Parameters$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].setAnimationSpeed$S.apply(this.b$['main.java.Electro1D.Parameters'], ["Moderate "]);
});
})()
), Clazz.new_(P$.Parameters$2.$init$,[this, null])));
var speed3button=Clazz.new_($I$(15,1).c$$S$Z,["Fast", false]);
speed3button.addActionListener$java_awt_event_ActionListener(((P$.Parameters$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].setAnimationSpeed$S.apply(this.b$['main.java.Electro1D.Parameters'], ["Fast"]);
});
})()
), Clazz.new_(P$.Parameters$3.$init$,[this, null])));
this.speed.add$javax_swing_AbstractButton(speed3button);
this.speed.add$javax_swing_AbstractButton(speed2button);
this.speed.add$javax_swing_AbstractButton(speed1button);
this.headerSub2.add$java_awt_Component(speed1button);
this.headerSub2.add$java_awt_Component(speed2button);
this.headerSub2.add$java_awt_Component(speed3button);
this.headerSub2.setBorder$javax_swing_border_Border(border1);
this.headerSub2.setToolTipText$S("Affects how quickly the animations run");
this.headerPanel.add$java_awt_Component(this.headerSub2);
this.dropPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[2, 1, 1, 5]));
this.labelPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[1, 2]));
var unknownLabel1=Clazz.new_($I$(16,1).c$$S,["Well 2"]);
unknownLabel1.setToolTipText$S("Set of unknown samples for well 2");
this.labelPanel1.add$java_awt_Component(unknownLabel1);
var unknownLabel2=Clazz.new_($I$(16,1).c$$S,["Well 3"]);
unknownLabel2.setToolTipText$S("Set of unknown samples for well 3");
this.labelPanel1.add$java_awt_Component(unknownLabel2);
var wellLabel4=Clazz.new_($I$(16,1).c$$S,["Well 4"]);
var wellLabel5=Clazz.new_($I$(16,1).c$$S,["Well 5"]);
var wellLabel6=Clazz.new_($I$(16,1).c$$S,["Well 6"]);
this.labelPanel1.add$java_awt_Component(wellLabel4);
this.labelPanel1.add$java_awt_Component(wellLabel5);
this.labelPanel1.add$java_awt_Component(wellLabel6);
var standardsLabel=Clazz.new_($I$(16,1).c$$S,["Standards"]);
standardsLabel.setToolTipText$S("Set of known values for comparison");
this.labelPanel2.add$java_awt_Component(standardsLabel);
this.selectionPanel1.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[3, 3]));
this.selectionPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[1, 2]));
this.voltagePanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17,1)));
this.voltagePanel.setToolTipText$S("Affects how quickly proteins travel across the gel");
this.voltageSub2Panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[1, 4]));
var volt1=Clazz.new_($I$(15,1).c$$S,["50V"]);
volt1.addActionListener$java_awt_event_ActionListener(((P$.Parameters$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=0.75;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
});
})()
), Clazz.new_(P$.Parameters$4.$init$,[this, null])));
var volt2=Clazz.new_($I$(15,1).c$$S,["100V"]);
volt2.addActionListener$java_awt_event_ActionListener(((P$.Parameters$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (arg0) {
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=1.0;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
});
})()
), Clazz.new_(P$.Parameters$5.$init$,[this, null])));
var volt3=Clazz.new_($I$(15,1).c$$S$Z,["150V", true]);
volt3.addActionListener$java_awt_event_ActionListener(((P$.Parameters$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=1.5;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
});
})()
), Clazz.new_(P$.Parameters$6.$init$,[this, null])));
var volt4=Clazz.new_($I$(15,1).c$$S,["200V"]);
volt4.addActionListener$java_awt_event_ActionListener(((P$.Parameters$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=2.0;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
});
})()
), Clazz.new_(P$.Parameters$7.$init$,[this, null])));
this.voltage.add$javax_swing_AbstractButton(volt1);
this.voltage.add$javax_swing_AbstractButton(volt2);
this.voltage.add$javax_swing_AbstractButton(volt3);
this.voltage.add$javax_swing_AbstractButton(volt4);
var border3=$I$(14).createTitledBorder$S("Voltage");
this.voltageSub2Panel.setBorder$javax_swing_border_Border(border3);
this.voltageSub2Panel.add$java_awt_Component(volt1);
this.voltageSub2Panel.add$java_awt_Component(volt2);
this.voltageSub2Panel.add$java_awt_Component(volt3);
this.voltageSub2Panel.add$java_awt_Component(volt4);
this.voltagePanel.add$java_awt_Component$O(this.voltageSub1Panel, "North");
this.voltagePanel.add$java_awt_Component$O(this.voltageSub2Panel, "Center");
this.voltacrPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[2, 2]));
this.voltacrPanel.setBackground$java_awt_Color($I$(3).lightGray);
var voltLabel=Clazz.new_($I$(16,1).c$$S,["Voltage"]);
var acrLabel=Clazz.new_($I$(16,1).c$$S,["% Acrylamide"]);
this.voltacrPanel.add$java_awt_Component(voltLabel);
this.voltacrPanel.add$java_awt_Component(acrLabel);
this.standardPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[8, 1, 0, 1]));
this.standardPanel.add$java_awt_Component(standardsLabel);
var sll=Clazz.new_($I$(18,1),[this, null]);
for (var i=0; i < this.standards.length; i++) {
this.standards[i]=Clazz.new_([p$1.getStdProtein$I.apply(this, [i]).abbr],$I$(4,1).c$$S);
this.standards[i].addItemListener$java_awt_event_ItemListener(sll);
this.standardPanel.add$java_awt_Component(this.standards[i]);
}
this.resetPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 2, 5, 5]));
this.resetPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.resetwells=Clazz.new_($I$(12,1).c$$S,["Refill Wells"]);
this.resetwells.setToolTipText$S("Reset wells with the same samples");
this.resetwells.addActionListener$java_awt_event_ActionListener(((P$.Parameters$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.resetWells$();
p$1.setButtonStates$I.apply(this.b$['main.java.Electro1D.Parameters'], [2]);
});
})()
), Clazz.new_(P$.Parameters$8.$init$,[this, null])));
this.resetPanel.add$java_awt_Component(this.resetwells);
this.clearwells=Clazz.new_($I$(12,1).c$$S,["Clear Wells"]);
this.clearwells.setToolTipText$S("Clear the wells");
this.clearwells.addActionListener$java_awt_event_ActionListener(((P$.Parameters$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.clearWells$();
p$1.setButtonStates$I.apply(this.b$['main.java.Electro1D.Parameters'], [1]);
});
})()
), Clazz.new_(P$.Parameters$9.$init$,[this, null])));
this.resetPanel.add$java_awt_Component(this.clearwells);
var tempStandWells=Clazz.new_($I$(5,1));
var wellsLabel=Clazz.new_($I$(16,1).c$$S$I,["Select the Well to Add a Sample to", 0]);
this.addStandard=Clazz.new_($I$(12,1).c$$S,["Add Standards"]);
this.addStandard.setToolTipText$S("Pipette selected standards into well 1");
this.addStandard.addActionListener$java_awt_event_ActionListener(((P$.Parameters$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.addStandard$();
p$1.setButtonStates$I.apply(this.b$['main.java.Electro1D.Parameters'], [2]);
});
})()
), Clazz.new_(P$.Parameters$10.$init$,[this, null])));
tempStandWells.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I,[2, 1]));
tempStandWells.setBackground$java_awt_Color($I$(3).lightGray);
tempStandWells.add$java_awt_Component(this.addStandard);
tempStandWells.add$java_awt_Component(wellsLabel);
this.dropPanel.add$java_awt_Component(tempStandWells);
p$1.helperMethod1.apply(this, []);
var addSample=Clazz.new_($I$(12,1).c$$S,["Add Sample"]);
addSample.setToolTipText$S("Pipette selected unknown into well 2");
addSample.addActionListener$java_awt_event_ActionListener(((P$.Parameters$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.addSample$main_java_Electro1D_ProteinA(this.b$['main.java.Electro1D.Parameters'].stdProteinArray);
});
})()
), Clazz.new_(P$.Parameters$11.$init$,[this, null])));
var addSample2=Clazz.new_($I$(12,1).c$$S,["Samp2"]);
addSample2.setToolTipText$S("Pipette selected unknown into well 3");
addSample2.addActionListener$java_awt_event_ActionListener(((P$.Parameters$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.addSample2$();
});
})()
), Clazz.new_(P$.Parameters$12.$init$,[this, null])));
this.startButton=Clazz.new_($I$(12,1).c$$S,["Start"]);
this.startButton.setToolTipText$S("Powers on the battery to begin run");
this.startButton.addActionListener$java_awt_event_ActionListener(((P$.Parameters$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.startRun$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein$main_java_Electro1D_ProteinA(this.b$['main.java.Electro1D.Parameters'].stdProteinArray, this.b$['main.java.Electro1D.Parameters'].selectedSample1, this.b$['main.java.Electro1D.Parameters'].selectedSample2, $I$(1).dyes);
p$1.setButtonStates$I.apply(this.b$['main.java.Electro1D.Parameters'], [3]);
});
})()
), Clazz.new_(P$.Parameters$13.$init$,[this, null])));
this.stopButton=Clazz.new_($I$(12,1).c$$S,["Stop"]);
this.stopButton.setToolTipText$S("Ends current to stop the run");
this.stopButton.addActionListener$java_awt_event_ActionListener(((P$.Parameters$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].$parent.stopRun$();
this.b$['main.java.Electro1D.Parameters'].$parent.setPlotData$main_java_Electro1D_ProteinA$main_java_Electro1D_Protein$main_java_Electro1D_Protein(this.b$['main.java.Electro1D.Parameters'].stdProteinArray, this.b$['main.java.Electro1D.Parameters'].selectedSample1, $I$(1).dyes[0]);
p$1.setButtonStates$I.apply(this.b$['main.java.Electro1D.Parameters'], [4]);
});
})()
), Clazz.new_(P$.Parameters$14.$init$,[this, null])));
var contr=Clazz.new_($I$(5,1));
contr.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[1, 2, 5, 5]));
contr.setBackground$java_awt_Color($I$(3).lightGray);
var stds=Clazz.new_($I$(16,1).c$$S$I,["Standards", 0]);
var strt=Clazz.new_($I$(16,1).c$$S$I,["Start Run", 0]);
var stp=Clazz.new_($I$(16,1).c$$S$I,["Stop Run", 0]);
this.controlPanel.add$java_awt_Component(this.voltacrPanel);
contr.add$java_awt_Component(this.startButton);
contr.add$java_awt_Component(this.stopButton);
this.controlPanel.add$java_awt_Component(contr);
this.controlPanel.add$java_awt_Component(this.resetPanel);
for (var i=2; i <= 10; i++) this.selectionPanel1.add$java_awt_Component(p$1.newFileButton$I.apply(this, [i]));

this.add$java_awt_Component(this.selectionPanel2);
this.add$java_awt_Component(this.dropPanel);
this.add$java_awt_Component(this.controlPanel);
this.setStandards$();
this.selectedGel=$I$(1).gels[0];
this.setSpeed$D(this.selectedSpeed);
this.selectedSample1=this.unknowns[0];
this.selectedSample2=this.unknowns[1];
p$1.setButtonStates$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, 'newFileButton$I',  function (i) {
var b=Clazz.new_($I$(12,1).c$$S,["Well " + i]);
this.wellButtons[i]=b;
b.setToolTipText$S("Select a file to be put in well " + i);
b.addActionListener$java_awt_event_ActionListener(((P$.Parameters$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "Parameters$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro1D.Parameters'].loadFile$I.apply(this.b$['main.java.Electro1D.Parameters'], [this.$finals$.i]);
});
})()
), Clazz.new_(P$.Parameters$15.$init$,[this, {i:i}])));
return b;
}, p$1);

Clazz.newMeth(C$, 'getButtonState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'setButtonStates$I',  function (i) {
this.state=i;
switch (i) {
case 1:
this.addStandard.setEnabled$Z(true);
for (var j=2; j < this.wellButtons.length; j++) this.wellButtons[j].setEnabled$Z(false);

this.startButton.setEnabled$Z(false);
this.stopButton.setEnabled$Z(false);
this.clearwells.setEnabled$Z(false);
this.resetwells.setEnabled$Z(false);
break;
case 2:
this.addStandard.setEnabled$Z(false);
for (var j=2; j < this.wellButtons.length; j++) this.wellButtons[j].setEnabled$Z(true);

this.startButton.setEnabled$Z(true);
this.stopButton.setEnabled$Z(false);
this.clearwells.setEnabled$Z(false);
this.resetwells.setEnabled$Z(false);
break;
case 3:
this.addStandard.setEnabled$Z(false);
for (var j=2; j < this.wellButtons.length; j++) this.wellButtons[j].setEnabled$Z(false);

this.startButton.setEnabled$Z(false);
this.stopButton.setEnabled$Z(true);
this.clearwells.setEnabled$Z(false);
this.resetwells.setEnabled$Z(false);
break;
case 4:
this.addStandard.setEnabled$Z(false);
for (var j=2; j < this.wellButtons.length; j++) this.wellButtons[j].setEnabled$Z(false);

this.startButton.setEnabled$Z(false);
this.stopButton.setEnabled$Z(false);
this.clearwells.setEnabled$Z(true);
this.resetwells.setEnabled$Z(true);
}
}, p$1);

Clazz.newMeth(C$, 'helperMethod1',  function () {
this.colorPanelTop.setBackground$java_awt_Color($I$(3).lightGray);
this.colorPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[8, 1, 1, 3]));
this.colorPanel.setBackground$java_awt_Color($I$(3).lightGray);
var colorbuffer=Clazz.new_($I$(16,1));
colorbuffer.setBackground$java_awt_Color($I$(3).lightGray);
this.colorPanel.add$java_awt_Component(this.colorPanelTop);
for (var i=0; i < this.colorPanels.length; i++) {
this.colorPanels[i].setBackground$java_awt_Color(p$1.getStdProtein$I.apply(this, [i]).color);
this.colorPanel.add$java_awt_Component(this.colorPanels[i]);
}
this.voltacrPanel.add$java_awt_Component(this.voltages);
this.voltacrPanel.add$java_awt_Component(this.acrylamide);
this.selectionPanel2.add$java_awt_Component(this.standardPanel);
this.selectionPanel2.add$java_awt_Component(this.colorPanel);
this.dropPanel.add$java_awt_Component(this.selectionPanel1);
this.controlPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1).c$$I$I$I$I,[3, 1, 5, 5]));
}, p$1);

Clazz.newMeth(C$, 'setAnimationSpeed$S',  function (s) {
this.$parent.setAnimationSpeed$S(s);
});

Clazz.newMeth(C$, 'setAcrylamideEffect$',  function () {
for (var i=0; i < this.stdProteinArray.length; i++) {
p$1.setDecider$main_java_Electro1D_Protein$main_java_Electro1D_Acrylamide.apply(this, [this.stdProteinArray[i], this.selectedGel]);
}
p$1.setDecider$main_java_Electro1D_Protein$main_java_Electro1D_Acrylamide.apply(this, [this.selectedSample1, this.selectedGel]);
});

Clazz.newMeth(C$, 'setDecider$main_java_Electro1D_Protein$main_java_Electro1D_Acrylamide',  function (p, gel) {
var doSet=(gel.getConc$() > 12.0  ? p.mw > 26000 : gel.getConc$() > 10.0  ? p.mw > 29000 : gel.getConc$() > 7.5  && p.mw > 40000 );
if (doSet) p.setDecider$I(gel.suppressor);
 else p.resetDecider$();
}, p$1);

Clazz.newMeth(C$, 'setSpeed$D',  function (d) {
for (var i=0; i < 10; i++) $I$(1).dyes[i].speed=d;

for (var i=0; i < this.stdProteinArray.length; i++) p$1.getStdProtein$I.apply(this, [i]).speed=this.standardSpeeds[i] * d;

for (var i=0; i < this.unknowns.length; i++) this.unknowns[i].speed=this.unknownSpeeds[i] * d;

this.$parent.updateSpeed$D$main_java_Electro1D_Acrylamide(d, this.selectedGel);
});

Clazz.newMeth(C$, 'setStandards$',  function () {
this.$parent.setStandards$main_java_Electro1D_ProteinA(this.stdProteinArray);
});

Clazz.newMeth(C$, 'setPanelsColors',  function () {
this.headerPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.selectionPanel1.setBackground$java_awt_Color($I$(3).lightGray);
this.selectionPanel2.setBackground$java_awt_Color($I$(3).lightGray);
this.standardPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.voltagePanel.setBackground$java_awt_Color($I$(3).lightGray);
this.voltageSub1Panel.setBackground$java_awt_Color($I$(3).lightGray);
this.voltageSub2Panel.setBackground$java_awt_Color($I$(3).lightGray);
this.controlPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.labelPanel1.setBackground$java_awt_Color($I$(3).lightGray);
this.labelPanel2.setBackground$java_awt_Color($I$(3).lightGray);
this.dropPanel.setBackground$java_awt_Color($I$(3).lightGray);
}, p$1);

Clazz.newMeth(C$, 'setDefaults$',  function () {
this.$parent.setAcrylamide$main_java_Electro1D_Acrylamide($I$(1).gels[0]);
this.selectedGel=$I$(1).gels[0];
this.setAcrylamideEffect$();
});

Clazz.newMeth(C$, 'loadFile$I',  function (wellNum) {
$I$(19,"openFile$java_awt_Component$java_util_function_Function",[this, ((P$.Parameters$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Parameters$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File','apply$O'],  function (file) {
this.b$['main.java.Electro1D.Parameters'].$parent.simPanel.loadFile$java_io_File$I(file, this.$finals$.wellNum);
return null;
});
})()
), Clazz.new_(P$.Parameters$lambda1.$init$,[this, {wellNum:wellNum}]))]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameters, "StandardsListListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var source=e.getItemSelectable$();
for (var i=0; i < this.b$['main.java.Electro1D.Parameters'].standards.length; i++) {
if (source === this.b$['main.java.Electro1D.Parameters'].standards[i] ) {
var p=p$1.getStdProtein$I.apply(this.b$['main.java.Electro1D.Parameters'], [i]);
p.selected=this.b$['main.java.Electro1D.Parameters'].standards[i].isSelected$();
if (p.selected) this.b$['main.java.Electro1D.Parameters'].$parent.displayProtein$main_java_Electro1D_Protein(p);
break;
}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameters, "UnknownListHandler1", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (ev) {
var item=ev.getSource$();
var i=Integer.parseInt$S((item.getSelectedItem$()).substring$I(9));
this.b$['main.java.Electro1D.Parameters'].$parent.displayProtein$main_java_Electro1D_Protein(this.b$['main.java.Electro1D.Parameters'].selectedSample1=this.b$['main.java.Electro1D.Parameters'].unknowns[i - 1]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameters, "UnknownListHandler2", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (ev) {
var item=ev.getSource$();
var i=Integer.parseInt$S((item.getSelectedItem$()).substring$I(9));
this.b$['main.java.Electro1D.Parameters'].selectedSample2=this.b$['main.java.Electro1D.Parameters'].unknowns[i - 1];
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameters, "VoltageListHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (ev) {
var item=ev.getSource$();
switch (item.getSelectedItem$()) {
case "50V":
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=0.75;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
break;
case "100V":
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=1.0;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
break;
case "150V":
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=1.5;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
break;
case "200V":
this.b$['main.java.Electro1D.Parameters'].selectedSpeed=2.0;
this.b$['main.java.Electro1D.Parameters'].setSpeed$D.apply(this.b$['main.java.Electro1D.Parameters'], [this.b$['main.java.Electro1D.Parameters'].selectedSpeed]);
break;
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Parameters, "GelPercentageHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
var item=e.getSource$();
var selectedName=item.getSelectedItem$();
for (var i=$I$(1).gels.length; --i >= 0; ) {
if ($I$(1).gels[i].percentGel.equals$O(selectedName)) {
this.b$['main.java.Electro1D.Parameters'].selectedGel=$I$(1).gels[i];
this.b$['main.java.Electro1D.Parameters'].$parent.setAcrylamide$main_java_Electro1D_Acrylamide($I$(1).gels[i]);
this.b$['main.java.Electro1D.Parameters'].selectedGel.setSuppressor$D($I$(1).gels[i].getConc$());
this.b$['main.java.Electro1D.Parameters'].setAcrylamideEffect$.apply(this.b$['main.java.Electro1D.Parameters'], []);
break;
}}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
