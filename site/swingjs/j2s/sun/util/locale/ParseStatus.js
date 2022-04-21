(function(){var P$=Clazz.newPackage("sun.util.locale"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ParseStatus");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['parseLength','errorIndex'],'S',['errorMsg']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.parseLength=0;
this.errorIndex=-1;
this.errorMsg=null;
});

Clazz.newMeth(C$, 'isError$',  function () {
return (this.errorIndex >= 0);
});

Clazz.newMeth(C$, 'getErrorIndex$',  function () {
return this.errorIndex;
});

Clazz.newMeth(C$, 'getParseLength$',  function () {
return this.parseLength;
});

Clazz.newMeth(C$, 'getErrorMessage$',  function () {
return this.errorMsg;
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:26:59 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
