(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "MissingFormatWidthException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
Clazz.super_(C$, this);
if (s == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.s=s;
}, 1);

Clazz.newMeth(C$, 'getFormatSpecifier$',  function () {
return this.s;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return this.s;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-01-14 18:17:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1