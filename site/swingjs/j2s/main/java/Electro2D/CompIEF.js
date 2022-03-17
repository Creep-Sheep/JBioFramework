(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.IEFProtein',['main.java.Electro2D.CompIEF','.XComp'],'java.util.BitSet','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CompIEF", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.Comparator');
C$.$classes$=[['XComp',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['maxPH','minPH','oneOverRange']]]

Clazz.newMeth(C$, 'c$$D$D',  function (maxPH, minPH) {
;C$.$init$.apply(this);
this.maxPH=maxPH;
this.minPH=minPH;
this.oneOverRange=1 / (maxPH - minPH);
}, 1);

Clazz.newMeth(C$, ['compare$main_java_Electro2D_IEFProtein$main_java_Electro2D_IEFProtein','compare$O$O'],  function (i1, i2) {
var x1=i1.returnX$();
var x2=i2.returnX$();
if (x1 == x2) return 0;
var w34=$I$(1).returnWidth34$();
var minpi1=i1.getMinPI$();
var minpi2=i2.getMinPI$();
var maxpi1=i1.getMaxPI$();
var maxpi2=i2.getMaxPI$();
if (minpi1 >= this.maxPH  && minpi2 >= this.maxPH   || maxpi1 <= this.minPH  && maxpi2 <= this.minPH   ) {
return 0;
}if (Math.abs(x2 - x1) <= w34  && (minpi2 - minpi1 >= 0  && minpi2 - minpi1 <= this.oneOverRange   || maxpi1 - maxpi2 >= 0  && maxpi1 - maxpi2 <= this.oneOverRange   ) ) {
return 0;
}return (x1 > x2 ? 1 : -1);
});

Clazz.newMeth(C$, 'sortBarProteins$java_util_Vector',  function (barProteins) {
barProteins.sort$java_util_Comparator(Clazz.new_($I$(2,1),[this, null]));
var n=barProteins.size$();
if (n == 0) return barProteins;
var bs=Clazz.new_($I$(3,1));
bs.set$I$I(0, n);
var p1=barProteins.elementAt$I(0);
for (var i=1; i < n; i++) {
var p2=barProteins.elementAt$I(i);
if (p2.returnX$() == p1.returnX$()) {
bs.clear$I(i);
p1.addProtein$java_util_Collection(p2.getProtein$());
} else {
p1=p2;
}}
for (var i=0; i >= 0; i=bs.nextSetBit$I(i + 1)) {
p1=barProteins.elementAt$I(i);
for (var j=bs.nextSetBit$I(i + 1); j >= 0; j=bs.nextSetBit$I(j + 1)) {
if (!bs.get$I(j)) continue;
var p2=barProteins.elementAt$I(j);
if (this.compare$main_java_Electro2D_IEFProtein$main_java_Electro2D_IEFProtein(p1, p2) == 0) {
p1.addProtein$java_util_Collection(p2.getProtein$());
bs.clear$I(j);
}}
}
var bp=Clazz.new_([bs.cardinality$()],$I$(4,1).c$$I);
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
bp.add$O(barProteins.get$I(i));
}
return bp;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CompIEF, "XComp", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$main_java_Electro2D_IEFProtein$main_java_Electro2D_IEFProtein','compare$O$O'],  function (o1, o2) {
return (o1.returnX$() > o2.returnX$() ? 1 : o1.returnX$() < o2.returnX$() ? -1 : 0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
