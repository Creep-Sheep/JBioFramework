(function(){var P$=Clazz.newPackage("main.java.MassSpec"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AminoAcidTranslator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['aname','String[][]']]]

Clazz.newMeth(C$, 'translate$S',  function (seq) {
var sb=Clazz.new_($I$(1,1));
var n=seq.length$() - 1;
for (var i=0; i < n; i++) {
var c=C$.aname[(seq.charCodeAt$I(i))];
if (c == null ) return null;
sb.append$S(c[1]);
}
var cn=C$.aname[(seq.charCodeAt$I(n))];
if (cn == null ) return null;
sb.append$S(cn[0]);
return sb.toString();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.aname=Clazz.array(String, [256, null]);
{
C$.aname[65]=Clazz.array(String, -1, ["Alanine", "Alanyl-"]);
C$.aname[67]=Clazz.array(String, -1, ["Cysteine", "Cysteinyl-"]);
C$.aname[68]=Clazz.array(String, -1, ["Aspartic Acid", "Aspartyl-"]);
C$.aname[69]=Clazz.array(String, -1, ["Glutamic Acid", "Glutamyl-"]);
C$.aname[70]=Clazz.array(String, -1, ["Phenylalanine", "Phenylalaninyl-"]);
C$.aname[71]=Clazz.array(String, -1, ["Glycine", "Glycyl-"]);
C$.aname[72]=Clazz.array(String, -1, ["Histidine", "Histidinyl-"]);
C$.aname[73]=Clazz.array(String, -1, ["Isoleucine", "Isoleucinyl-"]);
C$.aname[75]=Clazz.array(String, -1, ["Lysine", "Lysinyl-"]);
C$.aname[76]=Clazz.array(String, -1, ["Leucine", "Leucinyl-"]);
C$.aname[77]=Clazz.array(String, -1, ["Methionine", "Methionyl-"]);
C$.aname[78]=Clazz.array(String, -1, ["Asparagine", "Asparaginyl-"]);
C$.aname[81]=Clazz.array(String, -1, ["Glutamine", "Glutaminyl-"]);
C$.aname[82]=Clazz.array(String, -1, ["Arginine", "Arginyl-"]);
C$.aname[83]=Clazz.array(String, -1, ["Serine", "Serinyl-"]);
C$.aname[84]=Clazz.array(String, -1, ["Threonine", "Threonyl-"]);
C$.aname[86]=Clazz.array(String, -1, ["Valanine", "Valinyl-"]);
C$.aname[87]=Clazz.array(String, -1, ["Tryptophan", "Tryptophanyl-"]);
C$.aname[89]=Clazz.array(String, -1, ["Tyrosine", "Tyrosinyl-"]);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
