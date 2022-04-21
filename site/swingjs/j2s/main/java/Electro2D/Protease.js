(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Protease");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['cutsBefore'],'O',['cuts','char[]']]]

Clazz.newMeth(C$, 'c$$CA$Z',  function (cuts, cutsBefore) {
;C$.$init$.apply(this);
this.cuts=cuts;
this.cutsBefore=cutsBefore;
}, 1);

Clazz.newMeth(C$, 'cut$S',  function (sequence) {
var cutSequences=Clazz.new_($I$(1,1));
sequence=C$.checkSequence$S(sequence);
var chars=sequence.toCharArray$();
var nCut=this.cuts.length;
var p0=0;
var p1=0;
for (var i=0, n=chars.length - 1; i <= n; i++) {
var aa=chars[i];
if (!this.cutsBefore) {
++p1;
}var afterAA=(i < n ? chars[i + 1] : " ");
for (var j=0; j < nCut; j++) {
var c=this.cuts[j];
if (this.shouldCutHere$C$C$C(aa, c, afterAA)) {
C$.makeIon$S$I$I$java_util_ArrayList(sequence, p0, p1, cutSequences);
p0=p1;
}}
if (this.cutsBefore) {
++p1;
}}
if (p1 < sequence.length$()) {
C$.makeIon$S$I$I$java_util_ArrayList(sequence, p1, sequence.length$(), cutSequences);
}return cutSequences;
});

Clazz.newMeth(C$, 'shouldCutHere$C$C$C',  function (aa, c, afterAA) {
return (aa == c);
});

Clazz.newMeth(C$, 'checkSequence$S',  function (sequence) {
if (sequence.contains$CharSequence(" ")) {
throw Clazz.new_(Clazz.load('main.java.Electro2D.ProteaseException').c$$S,["Sequence to be cut must not contain spaces."]);
} else if (sequence.matches$S(".*\\d.*")) {
throw Clazz.new_(Clazz.load('main.java.Electro2D.ProteaseException').c$$S,["Sequence to be cut must not contain numbers."]);
} else if (sequence.matches$S(".*[a-z].*")) {
throw Clazz.new_(Clazz.load('main.java.Electro2D.ProteaseException').c$$S,["Sequence to be cut must contain all upper case letters."]);
}return sequence;
}, 1);

Clazz.newMeth(C$, 'makeIon$S$I$I$java_util_ArrayList',  function (sequence, p0, p1, cutSequence) {
if (p0 < p1) cutSequence.add$O(sequence.substring$I$I(p0, p1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
