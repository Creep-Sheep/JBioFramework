(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BadLocationException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offs']]]

Clazz.newMeth(C$, 'c$$S$I',  function (s, offs) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.offs=offs;
}, 1);

Clazz.newMeth(C$, 'offsetRequested$',  function () {
return this.offs;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:26:20 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
