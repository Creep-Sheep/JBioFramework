(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSCheckBoxUI", null, 'swingjs.plaf.JSRadioButtonUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return (this.isAWT && (this.jc).isRadio$()  ? "RadioButton" : "CheckBox");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-04-27 11:58:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1