(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.IEFProtein','main.java.Electro2D.ProteinDot','main.java.Electro2D.GelCanvas','main.java.Electro2D.PlayE2AnimationButton','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RestartE2DAnimationButton", null, 'javax.swing.JButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['electro2D','main.java.Electro2D.Electro2D']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.superclazz.c$$S.apply(this,["Restart"]);C$.$init$.apply(this);
this.setToolTipText$S("Restart animation");
this.addActionListener$java_awt_event_ActionListener(this);
this.electro2D=e;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var g=this.electro2D.getGel$();
g.resetLocation$();
g.resetRanges$();
this.electro2D.resetIEF$();
$I$(1).resetProtein$();
if ($I$(2).getShow$()) {
$I$(2).setShow$();
this.electro2D.stopThread$();
}g.restartCanvas$();
this.electro2D.resetPlay$();
this.electro2D.resetSdsStatus$();
this.electro2D.setBool$();
this.electro2D.clearpH$();
this.electro2D.setIEF$();
$I$(3).setRed$();
$I$(3).setGreen$();
$I$(3).setBlue$();
$I$(1).resetTempWidth$();
$I$(4).setCompare$Z(false);
this.electro2D.resetBothProteinLists$();
this.electro2D.setSequences$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setSequenceTitles$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setMolecularWeights$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setPiValues$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setFunctionValues$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setSequences2$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setSequenceTitles2$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setMolecularWeights2$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setPiValues2$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.setFunctionValues2$java_util_Vector(Clazz.new_($I$(5,1)));
this.electro2D.refreshProteinList$();
this.electro2D.refreshProteinList2$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
