(function(){var P$=Clazz.newPackage("main.java.Ionex");
/*c*/var C$=Clazz.newClass(P$, "ConcenTextField", null, 'javax.swing.JTextField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['lastValue']]]

Clazz.newMeth(C$, 'c$$S',  function (string) {
;C$.superclazz.c$$S.apply(this,[string]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'keyUp$java_awt_Event$I',  function (evt, key) {
var strText=this.getText$().trim$();
if (strText.equals$O("")) {
this.lastValue=this.getText$();
return true;
}if ((key == 9) || (key == 10) || (evt.id == 404)  ) {
return false;
}if (((key >= 48) && (key <= 57) ) || (key == 46) || (key == 8) || (key == 127)  ) {
try {
var fValue=Float.valueOf$S(this.getText$().trim$()).floatValue$();
if ((fValue >= 0.0 ) && (fValue <= 1.0 ) ) {
this.lastValue=this.getText$();
return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.setText$S(this.lastValue);
} else {
throw e;
}
}
}this.setText$S(this.lastValue);
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
