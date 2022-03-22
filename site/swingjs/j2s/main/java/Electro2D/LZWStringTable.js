(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LZWStringTable");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['H',['numStrings_'],'O',['strChr_','byte[]','strNxt_','short[]','+strHsh_']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.strChr_=Clazz.array(Byte.TYPE, [4096]);
this.strNxt_=Clazz.array(Short.TYPE, [4096]);
this.strHsh_=Clazz.array(Short.TYPE, [9973]);
}, 1);

Clazz.newMeth(C$, 'AddCharString$H$B',  function (index, b) {
var hshidx;
if (this.numStrings_ >= 4096) return 65535;
hshidx=C$.Hash$H$B(index, b);
while (this.strHsh_[hshidx] != -1)hshidx=(hshidx + 2039) % 9973;

this.strHsh_[hshidx]=this.numStrings_;
this.strChr_[this.numStrings_]=b;
this.strNxt_[this.numStrings_]=(index != -1) ? index : -1;
return ($s$[0]=this.numStrings_,this.numStrings_=(++$s$[0],$s$[0]),--$s$[0],$s$[0]);
});

Clazz.newMeth(C$, 'FindCharString$H$B',  function (index, b) {
var hshidx;
var nxtidx;
if (index == -1) return b;
hshidx=C$.Hash$H$B(index, b);
while ((nxtidx=this.strHsh_[hshidx]) != -1){
if (this.strNxt_[nxtidx] == index && this.strChr_[nxtidx] == b ) return ($s$[0] = nxtidx, $s$[0]);
hshidx=(hshidx + 2039) % 9973;
}
return -1;
});

Clazz.newMeth(C$, 'ClearTable$I',  function (codesize) {
this.numStrings_=($s$[0] = 0, $s$[0]);
for (var q=0; q < 9973; q++) {
this.strHsh_[q]=-1;
}
var w=(1 << codesize) + 2;
for (var q=0; q < w; q++) this.AddCharString$H$B(-1, ($b$[0] = q, $b$[0]));

});

Clazz.newMeth(C$, 'Hash$H$B',  function (index, lastbyte) {
return ((($s$[0] = (lastbyte << 8), $s$[0]) ^ index) & 65535) % 9973;
}, 1);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
