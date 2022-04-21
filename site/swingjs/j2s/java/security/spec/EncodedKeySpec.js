(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EncodedKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['encodedKey','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (encodedKey) {
;C$.$init$.apply(this);
this.encodedKey=encodedKey.clone$();
}, 1);

Clazz.newMeth(C$, 'getEncoded$',  function () {
return this.encodedKey.clone$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:25:36 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
