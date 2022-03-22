(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.Color','javax.swing.JLabel','javax.swing.JTextField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProteinData", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['mw'],'O',['$parent','main.java.Electro1D.Electrophoresis','$name','javax.swing.JTextField','+fullName','+abbr','+molwt','+logMolWt','titlePanel','javax.swing.JPanel','+namePanel','+fullNamePanel','+abbrPanel','+molWtPanel','+logMolWtPanel']]]

Clazz.newMeth(C$, 'c$$main_java_Electro1D_Electrophoresis',  function (electrophoresis) {
Clazz.super_(C$, this);
this.mw="0";
this.titlePanel=Clazz.new_($I$(1,1));
this.namePanel=Clazz.new_($I$(1,1));
this.fullNamePanel=Clazz.new_($I$(1,1));
this.abbrPanel=Clazz.new_($I$(1,1));
this.molWtPanel=Clazz.new_($I$(1,1));
this.logMolWtPanel=Clazz.new_($I$(1,1));
this.$parent=electrophoresis;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$I$I,[6, 1]));
this.titlePanel.setBackground$java_awt_Color($I$(3).lightGray);
this.namePanel.setBackground$java_awt_Color($I$(3).lightGray);
this.fullNamePanel.setBackground$java_awt_Color($I$(3).lightGray);
this.abbrPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.molWtPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.logMolWtPanel.setBackground$java_awt_Color($I$(3).lightGray);
this.titlePanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["PROTEIN DATA"]));
this.namePanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["Identifier"]));
this.$name=Clazz.new_($I$(5,1).c$$I,[8]);
this.namePanel.add$java_awt_Component(this.$name);
this.fullNamePanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["Protein Name"]));
this.fullName=Clazz.new_($I$(5,1).c$$I,[15]);
this.fullNamePanel.add$java_awt_Component(this.fullName);
this.abbrPanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["Abbreviation"]));
this.abbr=Clazz.new_($I$(5,1).c$$I,[5]);
this.abbrPanel.add$java_awt_Component(this.abbr);
this.molWtPanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["Molecular Wt"]));
this.molwt=Clazz.new_($I$(5,1).c$$I,[5]);
this.molWtPanel.add$java_awt_Component(this.molwt);
this.logMolWtPanel.add$java_awt_Component(Clazz.new_($I$(4,1).c$$S,["Log Mol Wt"]));
this.logMolWt=Clazz.new_($I$(5,1).c$$I,[5]);
this.logMolWtPanel.add$java_awt_Component(this.logMolWt);
this.$name.setEditable$Z(false);
this.fullName.setEditable$Z(false);
this.abbr.setEditable$Z(false);
this.molwt.setEditable$Z(false);
this.logMolWt.setEditable$Z(false);
this.add$java_awt_Component(this.titlePanel);
this.add$java_awt_Component(this.namePanel);
this.add$java_awt_Component(this.fullNamePanel);
this.add$java_awt_Component(this.abbrPanel);
this.add$java_awt_Component(this.molWtPanel);
this.add$java_awt_Component(this.logMolWtPanel);
}, 1);

Clazz.newMeth(C$, 'displayData$main_java_Electro1D_Protein',  function (protein) {
this.$name.setText$S(protein.name);
this.fullName.setText$S(protein.fullName);
this.abbr.setText$S(protein.abbr);
this.mw=String.valueOf$I(protein.mw);
this.molwt.setText$S(this.mw);
this.logMolWt.setText$S(String.valueOf$D(Math.log(protein.mw) / Math.log(10)));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
