(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AncestorEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ancestor','java.awt.Container','+ancestorParent']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container',  function (source, id, ancestor, ancestorParent) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
this.ancestor=ancestor;
this.ancestorParent=ancestorParent;
}, 1);

Clazz.newMeth(C$, 'getAncestor$',  function () {
return this.ancestor;
});

Clazz.newMeth(C$, 'getAncestorParent$',  function () {
return this.ancestorParent;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:26:16 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
