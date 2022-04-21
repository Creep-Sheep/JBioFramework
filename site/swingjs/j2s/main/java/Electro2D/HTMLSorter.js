(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.util.TreeSet','main.java.Electro2D.HTMLComparator','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLSorter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['compBy'],'O',['proteinInfo','java.util.TreeSet']]]

Clazz.newMeth(C$, 'c$$I$java_util_Vector$java_util_Vector$java_util_Vector$java_util_Vector',  function (cb, t, p, m, f) {
;C$.$init$.apply(this);
this.compBy=cb;
this.proteinInfo=Clazz.new_([Clazz.new_($I$(2,1).c$$I,[this.compBy])],$I$(1,1).c$$java_util_Comparator);
var tmp;
for (var i=0; i < t.size$(); i++) {
tmp=Clazz.new_($I$(3,1));
tmp.add$O(t.elementAt$I(i));
tmp.add$O(p.elementAt$I(i));
tmp.add$O(m.elementAt$I(i));
tmp.add$O(f.elementAt$I(i));
this.proteinInfo.add$O(tmp);
}
}, 1);

Clazz.newMeth(C$, 'getSorted$',  function () {
return this.proteinInfo;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
