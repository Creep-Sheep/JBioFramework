(function(){var P$=Clazz.newPackage("main.java.Utilities"),p$1={},I$=[[0,'java.util.Random','java.awt.Color','java.util.Hashtable','java.util.Vector','java.io.File','java.io.PrintWriter','java.io.BufferedWriter','java.io.FileWriter','StringBuffer','main.java.Electro1D.Protein','main.java.Utilities.JSUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Preprocessor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.FILE_HEADER="FILE:       ";
this.PROTTITLE_HEADER="NAME:       ";
this.FUNCTION_HEADER="FUNCTION:   ";
this.SEQUENCE_HEADER="SEQUENCE:   ";
this.MOLWT_HEADER="MOLWEIGHT:  ";
this.PIVAL_HEADER="PIVAL:      ";
this.SEQ_SEPARATOR="-----";
},1);

C$.$fields$=[['Z',['is1D','isE2D'],'S',['FILE_HEADER','PROTTITLE_HEADER','FUNCTION_HEADER','SEQUENCE_HEADER','MOLWT_HEADER','PIVAL_HEADER','SEQ_SEPARATOR','inputName','line','e2dOutFileName'],'O',['sequences','java.util.Vector','+sequenceTitles','+piValues','+molecularWeights','+functions','+concentrations','minmax','double[]']]
,['O',['rand','java.util.Random','partialCharges','double[]','+mws','colors','java.awt.Color[]','htPIcache','java.util.Map','+htMWcache']]]

Clazz.newMeth(C$, 'init$',  function () {
}, 1);

Clazz.newMeth(C$, 'randomColor$',  function () {
return C$.colors[C$.rand.nextInt$I(C$.colors.length)];
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$I',  function (inputFile, fileNum) {
C$.c$$main_java_Electro2D_Electro2D$java_io_File$Z.apply(this, [null, inputFile, fileNum <= 0]);
}, 1);

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D$java_io_File$Z',  function (e, inputFile, is1D) {
;C$.$init$.apply(this);
this.is1D=is1D;
this.sequences=(e == null  ? Clazz.new_($I$(4,1)) : e.getSequences$());
this.sequenceTitles=(e == null  ? Clazz.new_($I$(4,1)) : e.getSequenceTitles$());
this.molecularWeights=(e == null  ? Clazz.new_($I$(4,1)) : e.getMolecularWeights$());
this.piValues=(is1D ? null : e == null  ? Clazz.new_($I$(4,1)) : e.getPiValues$());
this.functions=(e == null  ? Clazz.new_($I$(4,1)) : e.getFunctions$());
this.inputName=(e == null  ? inputFile.getName$() : e.getLastFileLoaded$());
this.concentrations=(e == null  ? Clazz.new_($I$(4,1)) : null);
}, 1);

Clazz.newMeth(C$, 'writeToE2DFile$S',  function (outFileName) {
if (outFileName == null ) {
outFileName="data" + $I$(5).separator + this.inputName.replace$C$C(".", "_") + ".e2d" ;
}var theFile=Clazz.new_($I$(5,1).c$$S,[outFileName]);
System.out.println$S("Preprocessor.writeToFile creating " + theFile);
if (theFile.exists$()) return;
try {
var out=Clazz.new_([Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_File,[theFile])],$I$(7,1).c$$java_io_Writer), true],$I$(6,1).c$$java_io_Writer$Z);
try {
out.println$S("FILE:       " + this.inputName);
out.println$S("-----");
for (var i=0, n=this.sequences.size$(); i < n; i++) {
out.println$S("NAME:       " + this.sequenceTitles.get$I(i));
C$.writeRecord$java_io_PrintWriter$S$S(out, "FUNCTION:   ", this.functions.get$I(i));
var seq=this.sequences.get$I(i);
C$.writeRecord$java_io_PrintWriter$S$S(out, "SEQUENCE:   ", seq);
out.println$S("MOLWEIGHT:  " + this.molecularWeights.get$I(i));
out.println$S("PIVAL:      " + (this.piValues == null  ? C$.getPI$S(seq) : this.piValues.get$I(i)));
out.println$S("-----");
}

}finally{/*res*/out&&out.close$&&out.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Preprocessor.wrteToE2DFile Error writing to file " + e.getMessage$());
return;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeRecord$java_io_PrintWriter$S$S',  function (out, header, data) {
var length=data.length$();
var pt=0;
while (length > 0){
var n=Math.min(length, 50);
out.println$S(header + data.substring$I$I(pt, pt=pt + n));
length-=n;
}
}, 1);

Clazz.newMeth(C$, 'readFromFile$java_io_BufferedReader$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (reader, sequencesOut, proteins, electro2D, fileNum) {
var err=null;
this.isE2D=true;
var buf=Clazz.new_($I$(9,1));
try {
while (true){
if ((this.line=reader.readLine$()).indexOf$S("FILE:       ") != 0) {
err="Preprocessor.readFromeFile Invalid file format.  Missing FILE: line";
break;
}if (electro2D != null ) electro2D.setLastFileLoaded$S(this.line.substring$I(12));
while ((this.line=reader.readLine$()) != null ){
if (this.line.startsWith$S("-")) continue;
this.sequenceTitles.add$O(p$1.readE2D$java_io_BufferedReader$S$StringBuffer.apply(this, [reader, "NAME:       ", buf]));
this.functions.add$O(p$1.readE2D$java_io_BufferedReader$S$StringBuffer.apply(this, [reader, "FUNCTION:   ", buf]));
this.sequences.add$O(p$1.readE2D$java_io_BufferedReader$S$StringBuffer.apply(this, [reader, "SEQUENCE:   ", buf]));
this.molecularWeights.add$O(p$1.readE2D$java_io_BufferedReader$S$StringBuffer.apply(this, [reader, "MOLWEIGHT:  ", buf]));
if (this.is1D) reader.readLine$();
 else this.piValues.add$O(p$1.readE2D$java_io_BufferedReader$S$StringBuffer.apply(this, [reader, "PIVAL:      ", buf]));
}
this.finalizeRead$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(sequencesOut, proteins, electro2D, fileNum);
reader.close$();
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
err="Error reading from file.  Be sure you entered the file name correctly. " + e.getMessage$();
} else {
throw e;
}
}
if (err != null ) System.out.println$S(err);
return this.sequences.size$();
});

Clazz.newMeth(C$, 'readE2D$java_io_BufferedReader$S$StringBuffer',  function (reader, key, buf) {
buf.setLength$I(0);
while (this.line.startsWith$S(key)){
buf.append$S(this.line.substring$I(12));
this.line=reader.readLine$();
}
return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'getPIandMW',  function () {
this.minmax=(this.is1D ? null : Clazz.array(Double.TYPE, -1, [-1, 1.7976931348623157E308, -1, 1.7976931348623157E308]));
for (var i=0; i < this.sequences.size$(); i++) {
var mw;
var pI="";
if (this.isE2D) {
mw=this.molecularWeights.get$I(i);
if (!this.is1D) pI=this.piValues.get$I(i);
} else {
var temp=this.sequences.get$I(i);
mw=C$.getMW$S(temp);
this.molecularWeights.add$O(mw);
if (!this.is1D) {
pI=C$.getPI$S(temp);
this.piValues.add$O(pI);
}}if (this.minmax != null ) {
var d=Double.parseDouble$S(mw);
if (d <= this.minmax[0] ) {
this.minmax[0]=d;
}if (d >= this.minmax[1] ) {
this.minmax[1]=d;
}d=Double.parseDouble$S(pI);
if (d <= this.minmax[2] ) {
this.minmax[2]=d;
}if (d >= this.minmax[3] ) {
this.minmax[3]=d;
}}}
}, p$1);

Clazz.newMeth(C$, 'finalizeRead$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (sequencesOut, proteins, electro2D, fileNum) {
p$1.getPIandMW.apply(this, []);
var nSeq=this.sequences.size$();
switch (fileNum) {
case -1:
sequencesOut.addAll$java_util_Collection(this.sequences);
return nSeq;
case 0:
for (var i=0; i < nSeq; i++) {
proteins.add$O(Clazz.new_([this.sequenceTitles.get$I(i), "", "", (Double.parseDouble$S(this.molecularWeights.get$I(i))|0), C$.randomColor$()],$I$(10,1).c$$S$S$S$I$java_awt_Color));
if (this.concentrations.size$() > 0) proteins.get$I(i).setConcentration$I(Integer.parseInt$S(this.concentrations.get$I(i)));
}
return nSeq;
case 1:
electro2D.setSequences$java_util_Vector(this.sequences);
electro2D.setSequenceTitles$java_util_Vector(this.sequenceTitles);
electro2D.setMolecularWeights$java_util_Vector(this.molecularWeights);
electro2D.setPiValues$java_util_Vector(this.piValues);
electro2D.setFunctionValues$java_util_Vector(this.functions);
break;
case 2:
electro2D.setSequences2$java_util_Vector(this.sequences);
electro2D.setSequenceTitles2$java_util_Vector(this.sequenceTitles);
electro2D.setMolecularWeights2$java_util_Vector(this.molecularWeights);
electro2D.setPiValues2$java_util_Vector(this.piValues);
electro2D.setFunctionValues2$java_util_Vector(this.functions);
break;
}
electro2D.setLastFileLoaded$S(this.inputName);
electro2D.setMaxAndMinVals$D$D$D$D(this.minmax[1], this.minmax[0], this.minmax[3], this.minmax[2]);
if (!this.isE2D && !$I$(11).isJS ) this.writeToE2DFile$S(this.e2dOutFileName);
return nSeq;
});

Clazz.newMeth(C$, 'getMW$S',  function (seq) {
var wt=C$.htMWcache.get$O(seq);
if (wt != null ) return wt;
var len=seq.length$();
var mW=18;
for (var f=0; f < len; f++) {
mW+=C$.mws[(seq.charCodeAt$I(f))];
}
var mWstring=C$.roundOff$D$I(mW, 2);
C$.htMWcache.put$O$O(seq, mWstring);
return mWstring;
}, 1);

Clazz.newMeth(C$, 'calculatePartialCharges$D',  function (pH) {
C$.partialCharges[68]=C$.getPartialCharge$Z$D$D(false, 4.05, pH);
C$.partialCharges[67]=C$.getPartialCharge$Z$D$D(false, 9.0, pH);
C$.partialCharges[69]=C$.getPartialCharge$Z$D$D(false, 4.75, pH);
C$.partialCharges[89]=C$.getPartialCharge$Z$D$D(false, 10.0, pH);
C$.partialCharges[82]=C$.getPartialCharge$Z$D$D(true, 12.0, pH);
C$.partialCharges[72]=C$.getPartialCharge$Z$D$D(true, 5.98, pH);
C$.partialCharges[75]=C$.getPartialCharge$Z$D$D(true, 10.0, pH);
C$.partialCharges[1]=C$.getPartialCharge$Z$D$D(true, 8.2, pH);
C$.partialCharges[2]=C$.getPartialCharge$Z$D$D(false, 3.2, pH);
}, 1);

Clazz.newMeth(C$, 'getPartialCharge$Z$D$D',  function (isBasic, pK, pH) {
return 1 / (isBasic ? (1 + Math.pow(10, pH - pK)) : -(1 + Math.pow(10, pK - pH)));
}, 1);

Clazz.newMeth(C$, 'getPI$S',  function (seq) {
var pi=C$.htPIcache.get$O(seq);
if (pi != null ) return pi;
var lowpH=0;
var pH=7;
var highpH=14;
var plen=seq.length$();
var charge=0;
while (true){
C$.calculatePartialCharges$D(pH);
charge=0;
for (var a=plen; --a >= 0; ) {
charge+=C$.partialCharges[(seq.charCodeAt$I(a))];
}
charge+=C$.partialCharges[1] + C$.partialCharges[2];
if (charge > 0.005 ) {
lowpH=pH;
} else if (charge < -0.005 ) {
highpH=pH;
} else {
break;
}pH=(lowpH + highpH) / 2;
}
var s=C$.roundOff$D$I(pH, 2);
C$.htPIcache.put$O$O(seq, s);
return s;
}, 1);

Clazz.newMeth(C$, 'roundOff$D$I',  function (mW, n) {
var s="" + new Double(mW).toString();
var pt=s.indexOf$I(".") + n + 1 ;
return (s.length$() > pt ? s.substring$I$I(0, pt) : s);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.rand=Clazz.new_($I$(1,1));
C$.partialCharges=Clazz.array(Double.TYPE, [256]);
C$.mws=Clazz.array(Double.TYPE, [256]);
{
C$.mws[65]=71.0938;
C$.mws[67]=103.1538;
C$.mws[68]=115.1036;
C$.mws[69]=129.1304;
C$.mws[70]=147.1914;
C$.mws[71]=57.067;
C$.mws[72]=137.156;
C$.mws[73]=113.1742;
C$.mws[75]=128.1888;
C$.mws[76]=113.1742;
C$.mws[77]=131.2074;
C$.mws[78]=114.1188;
C$.mws[80]=97.1316;
C$.mws[81]=128.1456;
C$.mws[82]=156.2022;
C$.mws[83]=87.0932;
C$.mws[84]=101.12;
C$.mws[86]=99.1474;
C$.mws[87]=186.228;
C$.mws[89]=163.1908;
};
C$.colors=Clazz.array($I$(2), -1, [$I$(2).black, $I$(2).blue, $I$(2).cyan, $I$(2).green, $I$(2).magenta, $I$(2).orange, $I$(2).pink, $I$(2).red]);
C$.htPIcache=Clazz.new_($I$(3,1));
C$.htMWcache=Clazz.new_($I$(3,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
