(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.FlowLayout','swingjs.a2s.A2SContainer','javax.swing.JComponent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Panel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'isAWTContainer$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager',  function (layout) {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[layout]);C$.$init$.apply(this);
this.subclassSetup$();
this.setBackground$java_awt_Color(null);
C$.superclazz.prototype.setOpaque$Z.apply(this, [false]);
this.秘setPaintsSelf$I(2);
this.秘paintClass=this.秘updateClass=C$ ||null;
$I$(2,"fixAWTPaint$java_awt_Component$Class",[this, Clazz.getClass($I$(3))]);
}, 1);

Clazz.newMeth(C$, 'subclassSetup$',  function () {
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
C$.superclazz.prototype.setOpaque$Z.apply(this, [c != null ]);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-05-28 11:34:04 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
