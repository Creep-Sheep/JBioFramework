(function(){var P$=Clazz.newPackage("main.java.MassSpec"),I$=[[0,'main.java.MassSpec.Trypsin','main.java.MassSpec.Chymotrypsin','main.java.Electro2D.ProteinaseK','main.java.MassSpec.Thermolysin','java.util.ArrayList','main.java.MassSpec.Converter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Spectrometer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'runAnalysis$S$main_java_MassSpec_OutputGraphGUI$S',  function (sequence, outputGraph, proteaseChoice) {
sequence=sequence.trim$();
sequence=sequence.toUpperCase$();
if (sequence.matches$S(".*\\d.*")) {
System.out.println$S("Spectrometer.runAnalysis Protein sequence must not contain digits.");
} else {
var splitSequence=sequence.split$S("\\s");
sequence= String.instantialize();
for (var split, $split = 0, $$split = splitSequence; $split<$$split.length&&((split=($$split[$split])),1);$split++) {
sequence=sequence.concat$S(split);
}
var protease;
if (proteaseChoice.equals$O("Trypsin")) {
protease=Clazz.new_($I$(1,1));
} else if (proteaseChoice.equals$O("Chymotrypsin")) {
protease=Clazz.new_($I$(2,1));
} else if (proteaseChoice.equals$O("Proteinase K")) {
protease=Clazz.new_($I$(3,1));
} else if (proteaseChoice.equals$O("Thermolysin")) {
protease=Clazz.new_($I$(4,1));
} else {
System.err.println$S("Did not recognize protease choice.");
System.err.println$S("Defaulting to Trypsin.");
protease=Clazz.new_($I$(1,1));
}var ions=Clazz.new_($I$(5,1));
try {
var ionStrings=protease.cut$S(sequence);
for (var ion, $ion = ionStrings.iterator$(); $ion.hasNext$()&&((ion=($ion.next$())),1);) {
var newIon=$I$(6).convert$S(ion);
newIon.setCharge$I(1);
newIon.setSequence$S(ion);
if (newIon.getMass$() != 0 ) {
ions.add$O(newIon);
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"main.java.Electro2D.ProteaseException")){
System.out.println$S("Spectrometer.runAnalysis " + ex.getMessage$());
} else {
throw ex;
}
}
var mostHits=0;
for (var i=0; i < ions.size$(); i++) {
var hits=0;
for (var j=0; j < ions.size$(); j++) {
if (ions.get$I(i).getMassChargeRatio$() == ions.get$I(j).getMassChargeRatio$() ) {
++hits;
}}
ions.get$I(i).setHits$D(hits);
if (mostHits < hits) {
mostHits=hits;
}}
outputGraph.setPeaks$java_util_ArrayList$D(ions, mostHits);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
