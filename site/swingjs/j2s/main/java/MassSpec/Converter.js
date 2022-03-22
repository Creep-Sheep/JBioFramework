(function(){var P$=Clazz.newPackage("main.java.MassSpec"),I$=[[0,'main.java.MassSpec.Ion','main.java.MassSpec.SpecAminoAcid']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Converter");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'convert$S',  function (aminoAcidSequence) {
var aminoAcids=aminoAcidSequence.toCharArray$();
var ion=Clazz.new_($I$(1,1));
for (var acid, $acid = 0, $$acid = aminoAcids; $acid<$$acid.length&&((acid=($$acid[$acid])),1);$acid++) {
try {
var newAcid=Clazz.new_($I$(2,1).c$$C,[acid]);
ion.add$main_java_MassSpec_SpecAminoAcid(newAcid);
} catch (ex) {
if (Clazz.exceptionOf(ex,"main.java.MassSpec.AminoException")){
System.out.println$S("Converter.convert " + ex.getMessage$());
} else {
throw ex;
}
}
}
return ion;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
