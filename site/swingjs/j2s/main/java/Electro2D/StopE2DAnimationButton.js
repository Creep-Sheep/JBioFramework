(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.IEFProtein','main.java.Electro2D.ProteinDot','main.java.Electro2D.GelCanvas']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StopE2DAnimationButton", null, 'javax.swing.JButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['electro2D','main.java.Electro2D.Electro2D']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.superclazz.c$$S.apply(this,["Stop"]);C$.$init$.apply(this);
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Stop Animation"]);
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
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
