(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LookupTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numComponents','offset','numEntries']]]

Clazz.newMeth(C$, 'c$$I$I',  function (offset, numComponents) {
;C$.$init$.apply(this);
if (offset < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offset must be greater than 0"]);
}if (numComponents < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of components must  be at least 1"]);
}this.numComponents=numComponents;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'getNumComponents$',  function () {
return this.numComponents;
});

Clazz.newMeth(C$, 'getOffset$',  function () {
return this.offset;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:25:16 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
