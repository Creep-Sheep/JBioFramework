(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Acrylamide");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['concentration'],'I',['suppressor'],'S',['percentGel']]]

Clazz.newMeth(C$, 'c$$S$D',  function (s, d) {
;C$.$init$.apply(this);
this.percentGel="0.0%";
this.suppressor=1;
this.percentGel=s;
this.concentration=d;
this.setSuppressor$D(this.concentration);
}, 1);

Clazz.newMeth(C$, 'getConc$',  function () {
return this.concentration;
});

Clazz.newMeth(C$, 'setSuppressor$D',  function (d) {
this.suppressor=(d > 12  ? 6 : d > 10  ? 3 : d > 7.5  ? 2 : 1);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
