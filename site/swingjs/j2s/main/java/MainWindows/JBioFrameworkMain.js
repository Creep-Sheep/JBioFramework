(function(){var P$=Clazz.newPackage("main.java.MainWindows"),I$=[[0,'javax.swing.JTabbedPane','main.java.MainWindows.Welcome','main.java.Electro1D.Electrophoresis','main.java.Electro2D.Electro2D','main.java.MassSpec.MassSpecMain','main.java.MainWindows.MarvinPanel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JBioFrameworkMain", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['marvinTab','javax.swing.JPanel']]
,['O',['tabbedPane','javax.swing.JTabbedPane']]]

Clazz.newMeth(C$, 'main$SA',  function (args) {
Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["JBioFramework"]);C$.$init$.apply(this);
C$.tabbedPane=Clazz.new_($I$(1,1));
C$.tabbedPane.addTab$S$java_awt_Component("Welcome", Clazz.new_($I$(2,1)));
C$.tabbedPane.addTab$S$java_awt_Component("Electro1D", Clazz.new_($I$(3,1).c$$javax_swing_JFrame,[this]));
C$.tabbedPane.addTab$S$java_awt_Component("Electro2D", Clazz.new_($I$(4,1).c$$javax_swing_JFrame,[this]));
C$.tabbedPane.addTab$S$java_awt_Component("Spectrometer", Clazz.new_($I$(5,1)));
C$.tabbedPane.addTab$S$java_awt_Component("Marvin Sketch", this.marvinTab=$I$(6).createMarvinPanel$());
this.add$java_awt_Component(C$.tabbedPane);
C$.superclazz.prototype.pack$.apply(this, []);
C$.superclazz.prototype.setDefaultCloseOperation$I.apply(this, [3]);
C$.superclazz.prototype.setVisible$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'getTabs$',  function () {
return C$.tabbedPane;
}, 1);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
