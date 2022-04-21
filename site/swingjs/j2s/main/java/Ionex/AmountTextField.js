(function(){var P$=Clazz.newPackage("main.java.Ionex");
/*c*/var C$=Clazz.newClass(P$, "AmountTextField", null, 'javax.swing.JTextField');

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
}try {
var intValue=Integer.valueOf$S(this.getText$().trim$()).intValue$();
if ((intValue > 0) && (intValue <= 400) ) {
this.lastValue=this.getText$();
} else {
this.setText$S(this.lastValue);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.setText$S(this.lastValue);
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
