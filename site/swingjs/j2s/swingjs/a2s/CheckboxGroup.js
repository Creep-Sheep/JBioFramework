(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CheckboxGroup", null, 'javax.swing.ButtonGroup');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getSelectedCheckbox$',  function () {
for (var e=C$.superclazz.prototype.getElements$.apply(this, []); e.hasMoreElements$(); ) {
var ab=e.nextElement$();
if (ab.isSelected$()) return ab;
}
return null;
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:27:06 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
