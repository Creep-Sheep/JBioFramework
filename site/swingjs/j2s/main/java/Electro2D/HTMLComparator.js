(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HTMLComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['compBy']]]

Clazz.newMeth(C$, 'c$$I',  function (c) {
;C$.$init$.apply(this);
this.compBy=c;
}, 1);

Clazz.newMeth(C$, ['compare$java_util_Vector$java_util_Vector','compare$O$O'],  function (objA, objB) {
if (this.compBy != 1 && this.compBy != 2 ) {
if (objA.elementAt$I(this.compBy).equals$O(objB.elementAt$I(this.compBy))) {
for (var i=0; i < 4; i++) {
if (i != 1 && i != 2 ) {
var comp=objA.elementAt$I(i).compareTo$S(objB.elementAt$I(i));
if (comp != 0) {
return comp;
}} else if (i == 1 || i == 2 ) {
var comp=this.compareDouble$java_util_Vector$java_util_Vector$I(objA, objB, i);
if (comp != 0) {
return comp;
}}}
} else {
return objA.elementAt$I(this.compBy).compareTo$S(objB.elementAt$I(this.compBy));
}} else if (this.compBy == 1 || this.compBy == 2 ) {
if (this.compareDouble$java_util_Vector$java_util_Vector$I(objA, objB, this.compBy) == 0) {
for (var i=0; i < 4; i++) {
if (i != 1 && i != 2 ) {
var comp=objA.elementAt$I(i).compareTo$S(objB.elementAt$I(i));
if (comp != 0) {
return comp;
}} else if (i == 1 || i == 2 ) {
var comp=this.compareDouble$java_util_Vector$java_util_Vector$I(objA, objB, i);
if (comp != 0) {
return comp;
}}}
return 0;
}return this.compareDouble$java_util_Vector$java_util_Vector$I(objA, objB, this.compBy);
}return -1000;
});

Clazz.newMeth(C$, 'compareDouble$java_util_Vector$java_util_Vector$I',  function (objA, objB, index) {
var retVal=-2;
var dA=Double.parseDouble$S(objA.elementAt$I(index));
var dB=Double.parseDouble$S(objB.elementAt$I(index));
if (dA < dB ) {
retVal=-1;
} else if (dA == dB ) {
retVal=0;
} else if (dA > dB ) {
retVal=1;
}return retVal;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
