(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.util.Vector','java.awt.GridBagLayout','javax.swing.JLabel','javax.swing.JList','javax.swing.JScrollPane','javax.swing.JButton','java.awt.GridBagConstraints','java.awt.Insets',['main.java.Electro2D.ProteinListFrame','.OneListener'],['main.java.Electro2D.ProteinListFrame','.TwoListener'],['main.java.Electro2D.ProteinListFrame','.CommonListener'],['main.java.Electro2D.ProteinListFrame','.SelectedListener']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProteinListFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame');
C$.$classes$=[['OneListener',2],['TwoListener',2],['CommonListener',2],['SelectedListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['electro2D','main.java.Electro2D.Electro2D','sequenceOneList','javax.swing.JList','+sequenceTwoList','sequenceTitlesOne','java.util.Vector','+sequenceTitlesTwo','+positionsOne','+positionsTwo','+copySequenceOne','+copySequenceTwo']]]

Clazz.newMeth(C$, 'c$$S$main_java_Electro2D_Electro2D',  function (param, electro2D) {
;C$.superclazz.c$$S.apply(this,[param]);C$.$init$.apply(this);
this.electro2D=electro2D;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
var sequenceOneLabel=Clazz.new_($I$(3,1).c$$S,["Sequence One"]);
var sequenceTwoLabel=Clazz.new_($I$(3,1).c$$S,["Sequence Two"]);
this.sequenceOneList=Clazz.new_($I$(4,1));
this.sequenceTwoList=Clazz.new_($I$(4,1));
this.sequenceTitlesOne=Clazz.new_($I$(1,1));
this.sequenceTitlesTwo=Clazz.new_($I$(1,1));
this.copySequenceOne=this.sequenceTitlesOne.clone$();
this.copySequenceTwo=this.sequenceTitlesTwo.clone$();
this.positionsOne=Clazz.new_($I$(1,1));
this.positionsTwo=Clazz.new_($I$(1,1));
var sequenceOneScroll=Clazz.new_($I$(5,1).c$$java_awt_Component,[this.sequenceOneList]);
var sequenceTwoScroll=Clazz.new_($I$(5,1).c$$java_awt_Component,[this.sequenceTwoList]);
var removeLabel=Clazz.new_($I$(3,1).c$$S,["Select proteins to remove: "]);
var sequenceOneButton=Clazz.new_($I$(6,1).c$$S,["Sequence One"]);
var sequenceTwoButton=Clazz.new_($I$(6,1).c$$S,["Sequence Two"]);
var commonButton=Clazz.new_($I$(6,1).c$$S,["Common"]);
var selectedButton=Clazz.new_($I$(6,1).c$$S,["Selected"]);
var c=Clazz.new_($I$(7,1));
c.insets=(Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 5, 5, 5]));
c.gridx=0;
c.gridy=0;
this.add$java_awt_Component$O(sequenceOneLabel, c);
c.gridx=1;
this.add$java_awt_Component$O(sequenceTwoLabel, c);
c.gridx=0;
c.gridy=1;
c.weightx=1.0;
c.weighty=1.0;
c.fill=1;
this.add$java_awt_Component$O(sequenceOneScroll, c);
c.gridx=1;
this.add$java_awt_Component$O(sequenceTwoScroll, c);
c.weightx=0.0;
c.weighty=0.0;
c.fill=0;
c.gridx=0;
c.gridy=2;
c.gridwidth=2;
this.add$java_awt_Component$O(removeLabel, c);
c.gridy=3;
c.gridwidth=1;
this.add$java_awt_Component$O(sequenceOneButton, c);
c.gridx=1;
this.add$java_awt_Component$O(sequenceTwoButton, c);
c.gridx=0;
c.gridy=4;
this.add$java_awt_Component$O(commonButton, c);
c.gridx=1;
this.add$java_awt_Component$O(selectedButton, c);
sequenceOneButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(9,1),[this, null]));
sequenceTwoButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(10,1),[this, null]));
commonButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(11,1),[this, null]));
selectedButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(12,1),[this, null]));
this.pack$();
this.setVisible$Z(false);
this.setDefaultCloseOperation$I(1);
}, 1);

Clazz.newMeth(C$, 'updateSequences$java_util_Vector$java_util_Vector',  function (pL1, pL2) {
this.sequenceOneList.setListData$java_util_Vector(pL1);
this.sequenceTwoList.setListData$java_util_Vector(pL2);
this.sequenceTitlesOne=Clazz.new_($I$(1,1).c$$java_util_Collection,[pL1]);
this.sequenceTitlesTwo=Clazz.new_($I$(1,1).c$$java_util_Collection,[pL2]);
this.copySequenceOne=this.sequenceTitlesOne.clone$();
this.copySequenceTwo=this.sequenceTitlesTwo.clone$();
this.positionsOne=Clazz.new_($I$(1,1));
this.positionsTwo=Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'updatePositions$',  function () {
this.positionsOne=Clazz.new_($I$(1,1));
this.positionsTwo=Clazz.new_($I$(1,1));
for (var x=0; x < this.copySequenceOne.size$(); x++) {
if (this.sequenceTitlesOne.contains$O(this.copySequenceOne.get$I(x))) {
this.positionsOne.add$O(Integer.valueOf$I(x));
}}
for (var x=0; x < this.copySequenceTwo.size$(); x++) {
if (this.sequenceTitlesTwo.contains$O(this.copySequenceTwo.get$I(x))) {
this.positionsTwo.add$O(Integer.valueOf$I(x));
}}
if (this.positionsOne.size$() == 0) {
this.positionsOne.add$O(Integer.valueOf$I(-1));
}if (this.positionsTwo.size$() == 0) {
this.positionsTwo.add$O(Integer.valueOf$I(-1));
}if (this.positionsOne.size$() > 0) {
this.electro2D.setSequencesReady$Z(true);
}if (this.positionsTwo.size$() > 0) {
this.electro2D.setSequencesReady$Z(true);
}if ((this.positionsOne.get$I(0)).$c() < 0  && (this.positionsTwo.get$I(0)).$c() < 0  ) {
this.electro2D.setSequencesReady$Z(false);
}});

Clazz.newMeth(C$, 'getPositionsOne$',  function () {
return this.positionsOne;
});

Clazz.newMeth(C$, 'getPositionsTwo$',  function () {
return this.positionsTwo;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProteinListFrame, "OneListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var x=0; x < this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.size$(); x++) {
for (var y=0; y < this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.size$(); y++) {
if (this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.get$I(x).equals$O(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.get$I(y))) {
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.remove$I(y);
}}
}
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.clear$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].updatePositions$.apply(this.b$['main.java.Electro2D.ProteinListFrame'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProteinListFrame, "TwoListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
for (var x=0; x < this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.size$(); x++) {
for (var y=0; y < this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.size$(); y++) {
if (this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.get$I(x).equals$O(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.get$I(y))) {
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.remove$I(y);
}}
}
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.clear$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].updatePositions$.apply(this.b$['main.java.Electro2D.ProteinListFrame'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProteinListFrame, "CommonListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var copySequenceTwo=this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.clone$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.removeAll$java_util_Collection(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.removeAll$java_util_Collection(copySequenceTwo);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].updatePositions$.apply(this.b$['main.java.Electro2D.ProteinListFrame'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProteinListFrame, "SelectedListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var oneIndexes=this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.getSelectedIndices$();
var twoIndexes=this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.getSelectedIndices$();
var oneProteins=Clazz.new_($I$(1,1));
var twoProteins=Clazz.new_($I$(1,1));
for (var x=0; x < oneIndexes.length; x++) {
oneProteins.add$O(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.get$I(oneIndexes[x]));
}
for (var y=0; y < twoIndexes.length; y++) {
twoProteins.add$O(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.get$I(twoIndexes[y]));
}
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne.removeAll$java_util_Collection(oneProteins);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo.removeAll$java_util_Collection(twoProteins);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.setListData$java_util_Vector(this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTitlesTwo);
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceOneList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].sequenceTwoList.validate$();
this.b$['main.java.Electro2D.ProteinListFrame'].updatePositions$.apply(this.b$['main.java.Electro2D.ProteinListFrame'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
