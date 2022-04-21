(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DefaultFocusTraversalPolicy", null, 'java.awt.ContainerOrderFocusTraversalPolicy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_awt_Component',  function (aComponent) {
if (!(aComponent.isVisible$() && aComponent.isDisplayable$() && aComponent.isEnabled$()  )) {
return false;
}if (!aComponent.isWindowOrJSApplet$()) {
for (var enableTest=aComponent.getParent$(); enableTest != null ; enableTest=enableTest.getParent$()) {
if (!(enableTest.isEnabled$() || enableTest.isLightweight$() )) {
return false;
}if (enableTest.isWindowOrJSApplet$()) {
break;
}}
}var focusable=aComponent.isFocusable$();
if (aComponent.isFocusTraversableOverridden$()) {
return focusable;
}var peer=aComponent.getPeer$();
return (peer != null  && peer.isFocusable$() );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:24:59 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
