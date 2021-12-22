(function(){var P$=Clazz.newPackage("main.java.MassSpec"),I$=[[0,'java.awt.Color','javax.swing.JFrame','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JTextArea','main.java.MassSpec.AminoAcidTranslator','javax.swing.JButton','main.java.MainWindows.MarvinPanel','main.java.MainWindows.JBioFrameworkMain']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ion", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.totalMass=0;
this.totalCharge=0;
this.hits=0;
this.xCoordinate=0;
this.color=$I$(1).BLACK;
},1);

C$.$fields$=[['D',['totalMass','hits'],'I',['totalCharge','xCoordinate'],'S',['sequence'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, ['add$main_java_MassSpec_SpecAminoAcid','add$O'],  function (a) {
C$.superclazz.prototype.add$O.apply(this, [a]);
this.setMass$D(this.totalMass + a.getMass$());
if (this.size$() > 1) {
this.setMass$D(this.totalMass - 18.01528);
}return true;
});

Clazz.newMeth(C$, 'displaySequence$',  function () {
var frame=Clazz.new_($I$(2,1).c$$S,["Name for MarvinSketch"]);
var panel=Clazz.new_($I$(3,1));
panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
var proteinSet=Clazz.new_($I$(5,1).c$$S$I$I,["", 150, 300]);
proteinSet.append$S("Instructions: \n\n To display the structure properly, go to Edit> Transformation > Flip> Flip Horizontally.\n \nNote: The longer the sequence the more likely it is to display diagonally,\n simply select all the atoms in the structure and move it where you would like it to be.");
panel.add$java_awt_Component$O(proteinSet, "Center");
var mol=$I$(6).translate$S(this.sequence);
var marvinButton=Clazz.new_($I$(7,1).c$$S,["Show in MarvinSketch"]);
if (mol == null ) {
marvinButton.setEnabled$Z(false);
} else {
marvinButton.addActionListener$java_awt_event_ActionListener(((P$.Ion$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Ion$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(8).setMoleculeByName$S(this.$finals$.mol);
$I$(9).getTabs$().setSelectedIndex$I(4);
this.$finals$.frame.dispose$();
});
})()
), Clazz.new_(P$.Ion$1.$init$,[this, {frame:frame,mol:mol}])));
}panel.add$java_awt_Component$O(marvinButton, "South");
frame.add$java_awt_Component(panel);
frame.setSize$I$I(480, 175);
frame.setVisible$Z(true);
frame.setDefaultCloseOperation$I(2);
});

Clazz.newMeth(C$, 'setMass$D',  function (mass) {
this.totalMass=mass;
});

Clazz.newMeth(C$, 'setSequence$S',  function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setCharge$I',  function (charge) {
this.totalCharge=charge;
});

Clazz.newMeth(C$, 'setHits$D',  function (i) {
this.hits=i;
});

Clazz.newMeth(C$, 'setXCoordinate$I',  function (x) {
this.xCoordinate=x;
});

Clazz.newMeth(C$, 'getMass$',  function () {
return this.totalMass;
});

Clazz.newMeth(C$, 'getCharge$',  function () {
return this.totalCharge;
});

Clazz.newMeth(C$, 'getMassChargeRatio$',  function () {
return this.totalMass / this.totalCharge;
});

Clazz.newMeth(C$, 'getHits$',  function () {
return this.hits;
});

Clazz.newMeth(C$, 'getXCoordinate$',  function () {
return this.xCoordinate;
});

Clazz.newMeth(C$, 'setColor$java_awt_Color',  function (c) {
this.color=c;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.color;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
