(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.util.Vector','java.awt.GridBagLayout','javax.swing.JLabel','javax.swing.JList','javax.swing.JScrollPane','javax.swing.JButton','java.awt.GridBagConstraints','java.awt.Insets',['main.java.Electro2D.SingleProteinListFrame','.SelectedListener']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SingleProteinListFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame');
C$.$classes$=[['SelectedListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['electro2D','main.java.Electro2D.Electro2D','sequenceOneList','javax.swing.JList','sequenceTitlesOne','java.util.Vector','+positionsOne','+copySequenceOne']]]

Clazz.newMeth(C$, 'c$$S$main_java_Electro2D_Electro2D',  function (param, electro2D) {
;C$.superclazz.c$$S.apply(this,[param]);C$.$init$.apply(this);
this.electro2D=electro2D;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1)));
var sequenceOneLabel=Clazz.new_($I$(3,1).c$$S,["Sequence"]);
this.sequenceOneList=Clazz.new_($I$(4,1));
this.sequenceTitlesOne=Clazz.new_($I$(1,1));
this.copySequenceOne=this.sequenceTitlesOne.clone$();
this.positionsOne=Clazz.new_($I$(1,1));
var sequenceOneScroll=Clazz.new_($I$(5,1).c$$java_awt_Component,[this.sequenceOneList]);
var selectedButton=Clazz.new_($I$(6,1).c$$S,["Remove Selected Proteins"]);
var c=Clazz.new_($I$(7,1));
c.insets=(Clazz.new_($I$(8,1).c$$I$I$I$I,[5, 5, 5, 5]));
c.gridx=0;
c.gridy=0;
this.add$java_awt_Component$O(sequenceOneLabel, c);
c.gridy=2;
this.add$java_awt_Component$O(selectedButton, c);
c.gridy=1;
c.weightx=1.0;
c.weighty=1.0;
c.fill=1;
this.add$java_awt_Component$O(sequenceOneScroll, c);
selectedButton.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(9,1),[this, null]));
this.pack$();
this.setVisible$Z(false);
this.setDefaultCloseOperation$I(1);
}, 1);

Clazz.newMeth(C$, 'updateSequences$java_util_Vector$java_util_Vector',  function (pL1, pL2) {
this.sequenceOneList.setListData$java_util_Vector(pL1);
this.sequenceTitlesOne=Clazz.new_($I$(1,1).c$$java_util_Collection,[pL1]);
this.copySequenceOne=this.sequenceTitlesOne.clone$();
this.positionsOne=Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'updatePositions$',  function () {
this.positionsOne=Clazz.new_($I$(1,1));
for (var x=0; x < this.copySequenceOne.size$(); x++) {
if (this.sequenceTitlesOne.contains$O(this.copySequenceOne.get$I(x))) {
this.positionsOne.add$O(Integer.valueOf$I(x));
}}
if (this.positionsOne.size$() == 0) {
this.positionsOne.add$O(Integer.valueOf$I(-1));
}if (this.positionsOne.size$() > 0) {
this.electro2D.setSequencesReady$Z(true);
}if ((this.positionsOne.get$I(0)).$c() < 0 ) {
this.electro2D.setSequencesReady$Z(false);
}});

Clazz.newMeth(C$, 'getPositionsOne$',  function () {
return this.positionsOne;
});

Clazz.newMeth(C$, 'getPositionsTwo$',  function () {
var positionsTwo=Clazz.new_($I$(1,1));
return positionsTwo;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SingleProteinListFrame, "SelectedListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var oneIndexes=this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceOneList.getSelectedIndices$();
var oneProteins=Clazz.new_($I$(1,1));
for (var x=0; x < oneIndexes.length; x++) {
oneProteins.add$O(this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceTitlesOne.get$I(oneIndexes[x]));
}
this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceTitlesOne.removeAll$java_util_Collection(oneProteins);
this.b$['main.java.Electro2D.SingleProteinListFrame'].copySequenceOne=this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceTitlesOne.clone$();
this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceOneList.setListData$java_util_Vector(this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceTitlesOne);
this.b$['main.java.Electro2D.SingleProteinListFrame'].sequenceOneList.validate$();
this.b$['main.java.Electro2D.SingleProteinListFrame'].updatePositions$.apply(this.b$['main.java.Electro2D.SingleProteinListFrame'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
