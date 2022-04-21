(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatPrecisionException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['p']]]

Clazz.newMeth(C$, 'c$$I',  function (p) {
Clazz.super_(C$, this);
this.p=p;
}, 1);

Clazz.newMeth(C$, 'getPrecision$',  function () {
return this.p;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return Integer.toString$I(this.p);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:25:42 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
