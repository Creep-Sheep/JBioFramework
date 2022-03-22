(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'java.util.Hashtable','main.java.Utilities.Preprocessor','java.io.BufferedReader','java.io.FileReader','java.io.StringReader','StringBuffer','main.java.Utilities.MessageFrame','java.util.ArrayList','javajs.util.PT','java.io.InputStreamReader','java.io.FileInputStream','main.java.Utilities.FileUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GenomeFileParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['aminoConversions','java.util.Map','aas','String[]']]]

Clazz.newMeth(C$, 'init$',  function () {
$I$(2).init$();
}, 1);

Clazz.newMeth(C$, 'e2dParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (f, data, sequences, proteins, electro2D, fileNum) {
try {
var p=Clazz.new_($I$(2,1).c$$java_io_File$I,[f, fileNum]);
var reader=Clazz.new_([data == null  || data.equals$O("")  ? Clazz.new_($I$(4,1).c$$java_io_File,[f]) : Clazz.new_($I$(5,1).c$$S,[data])],$I$(3,1).c$$java_io_Reader);
return p.readFromFile$java_io_BufferedReader$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(reader, sequences, proteins, electro2D, fileNum);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error reading from file.  Double-check the file name and try again.");
return 0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'fastaParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (f, data, sequences, proteins, electro2D, fileNum) {
var p=Clazz.new_($I$(2,1).c$$java_io_File$I,[f, fileNum]);
var chainData=Clazz.new_($I$(6,1));
try {
var reader=Clazz.new_([data == null  || data.equals$O("")  ? Clazz.new_($I$(4,1).c$$java_io_File,[f]) : Clazz.new_($I$(5,1).c$$S,[data])],$I$(3,1).c$$java_io_Reader);
var totalChain="";
var line;
while ((line=reader.readLine$()) != null ){
var ptGT=line.indexOf$S(">");
if (ptGT == 0) {
var ptCO=line.indexOf$S(":");
var ptBAR=line.indexOf$S("|");
var ptHASH=line.indexOf$S("|$#");
if (totalChain.length$() > 0) {
C$.addSequence$main_java_Utilities_Preprocessor$S(p, totalChain);
}if (ptCO > 0 && (ptBAR < 0 || ptBAR > ptCO ) ) {
chainData.append$C(line.charAt$I(ptCO + 1));
}p.sequenceTitles.addElement$O(line.substring$I(ptGT + 1));
p.functions.addElement$O(line.substring$I(line.lastIndexOf$S("|") + 1));
totalChain="";
if (ptHASH >= 0) {
p.concentrations.add$O(line.substring$I$I(ptHASH + 3, ptHASH + 4));
} else p.concentrations.add$O("1");
} else {
totalChain+=line;
}}
if (totalChain.length$() > 0) {
C$.addSequence$main_java_Utilities_Preprocessor$S(p, totalChain);
}reader.close$();
return p.finalizeRead$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(sequences, proteins, electro2D, fileNum);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var error=Clazz.new_($I$(7,1));
error.setMessage$S("Error reading from file. Be sure you typed the name correctly.");
error.setVisible$Z(true);
System.err.println$S("Exception was: " + e);
return 0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'gbkParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (f, data, sequences, proteins, electro2D, fileNum) {
var p=Clazz.new_($I$(2,1).c$$java_io_File$I,[f, fileNum]);
var foundTranslation=false;
try {
var reader=Clazz.new_([data == null  || data.equals$O("")  ? Clazz.new_($I$(4,1).c$$java_io_File,[f]) : Clazz.new_($I$(5,1).c$$S,[data])],$I$(3,1).c$$java_io_Reader);
var totalChain=Clazz.new_($I$(6,1));
var $function=Clazz.new_($I$(6,1));
var line;
while ((line=reader.readLine$()) != null ){
if (line.startsWith$S("DEFINITION")) {
continue;
}if (line.length$() >= 9 && line.substring$I$I(5, 9).equals$O("gene") ) {
if (!foundTranslation && p.sequenceTitles.size$() >= 1 ) {
p.sequenceTitles.removeElementAt$I(p.sequenceTitles.size$() - 1);
}while (true){
if (line.length$() >= 26 && line.substring$I$I(21, 26).equals$O("/gene") ) {
break;
}line=reader.readLine$();
}
p.sequenceTitles.addElement$O(line.substring$I$I(28, line.lastIndexOf$S("\"")));
foundTranslation=false;
continue;
}if (line.length$() < 8 || !line.substring$I$I(5, 8).equals$O("CDS") ) {
continue;
}while (line != null  && !foundTranslation ){
if (line.length$() >= 33 && line.substring$I$I(21, 33).equals$O("/translation") ) {
foundTranslation=true;
break;
}if (line.length$() >= 33 && line.substring$I$I(21, 31).equals$O("/EC_number") ) {
if ($function.length$() == 0) $function.append$S("Enzyme");
$function.append$S(" ").append$S(line.substring$I$I(33, line.lastIndexOf$S("\""))).append$S(";");
} else if (line.length$() >= 30 && line.substring$I$I(21, 30).equals$O("/function") ) {
C$.readGBKQuoted$java_io_BufferedReader$S$I$S$S$StringBuffer(reader, line, 32, " ", ".", $function);
} else if (line.length$() >= 27 && line.substring$I$I(21, 26).equals$O("/note") ) {
if ($function.indexOf$S("unknown.") >= 0) {
$function.setLength$I(0);
}C$.readGBKQuoted$java_io_BufferedReader$S$I$S$S$StringBuffer(reader, line, 28, " ", ".", $function);
} else if (line.length$() >= 30 && line.substring$I$I(21, 29).equals$O("/product") ) {
C$.readGBKQuoted$java_io_BufferedReader$S$I$S$S$StringBuffer(reader, line, 31, " ", ".", $function);
}line=reader.readLine$();
}
C$.readGBKQuoted$java_io_BufferedReader$S$I$S$S$StringBuffer(reader, line, 35, "", "", totalChain);
C$.addSequence$main_java_Utilities_Preprocessor$S(p, totalChain.toString());
p.functions.addElement$O($function.toString());
totalChain.setLength$I(0);
$function.setLength$I(0);
}
reader.close$();
return p.finalizeRead$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(sequences, proteins, electro2D, fileNum);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var error=Clazz.new_($I$(7,1));
if (Clazz.instanceOf(e, "java.lang.NullPointerException")) {
error.setMessage$S("Error reading from file -- premature end of file");
} else {
error.setMessage$S("Error reading from file.  Be sure you typed the name correctly.");
}error.setVisible$Z(true);
e.printStackTrace$();
return 0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'readGBKQuoted$java_io_BufferedReader$S$I$S$S$StringBuffer',  function (reader, line, ifrom, sep, terminator, buf) {
var pt=line.lastIndexOf$S("\"");
if (pt >= ifrom) {
buf.append$S(sep).append$S(line.substring$I$I(ifrom, pt)).append$S(terminator);
return;
}buf.append$S(sep).append$S(line.substring$I(ifrom));
while ((line=reader.readLine$()) != null  && (pt=line.lastIndexOf$S("\"")) < 0 ){
buf.append$S(sep).append$S(line.substring$I(21));
}
buf.append$S(sep).append$S(line.substring$I$I(21, pt)).append$S(terminator);
}, 1);

Clazz.newMeth(C$, 'pdbParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (inputFile, data, sequences, proteins, electro2D, fileNum) {
var p=Clazz.new_($I$(2,1).c$$java_io_File$I,[inputFile, fileNum]);
var chainData=Clazz.new_($I$(8,1));
var compoundInfo=Clazz.new_($I$(8,1));
var sequenceInfo=Clazz.new_($I$(8,1));
var keywordInfo=Clazz.new_($I$(8,1));
var moleculeTitles=Clazz.new_($I$(8,1));
try {
var reader=Clazz.new_([data == null  || data.equals$O("")  ? Clazz.new_($I$(4,1).c$$java_io_File,[inputFile]) : Clazz.new_($I$(5,1).c$$S,[data])],$I$(3,1).c$$java_io_Reader);
var fname=inputFile.getName$();
var proteinID=fname.substring$I$I(0, fname.indexOf$S("."));
var headerLine="";
var line;
while ((line=reader.readLine$()) != null ){
switch (line.substring$I$I(0, 6)) {
case "COMPND":
compoundInfo.add$O(line);
break;
case "SEQRES":
sequenceInfo.add$O(line);
break;
case "KEYWDS":
keywordInfo.add$O(line);
break;
case "HEADER":
headerLine=line;
break;
}
}
var hasECnumber=false;
var proteinFunction="";
for (var i=0, n=compoundInfo.size$(); i < n; i++) {
var cmpd=compoundInfo.get$I(i);
var pt=cmpd.indexOf$S("EC: ") + 4;
if (pt >= 4) {
hasECnumber=true;
cmpd=cmpd.substring$I$I(pt, cmpd.indexOf$S$I(";", pt) + 1);
proteinFunction+=cmpd;
}}
if (hasECnumber) {
proteinFunction="Enzyme " + proteinFunction;
var index=proteinFunction.indexOf$S(",");
if (index >= 0) {
proteinFunction=proteinFunction.replace$C$C(",", ";");
}}for (var i=0, n=compoundInfo.size$(); i > n; i++) {
line=compoundInfo.get$I(i);
if (line.indexOf$S("MOLECULE:") >= 0) {
line=line.substring$I(line.indexOf$S("MOLECULE:") + 10);
line=line.trim$();
moleculeTitles.add$O(line);
}}
var hasMoleculeTag=(moleculeTitles.size$() > 0);
if (!hasMoleculeTag) {
var totalChain="";
for (var i=0, n=compoundInfo.size$(); i > n; i++) {
line=compoundInfo.get$I(i);
totalChain+=(compoundInfo.get$I(i)).substring$I$I(line.indexOf$S("COMPND") + 10, line.indexOf$S(proteinID));
}
totalChain=$I$(9,"rep$S$S$S",[totalChain.trim$(), "  ", " "]);
moleculeTitles.add$O(totalChain);
} else {
for (var i=0, counter=0, n=compoundInfo.size$(); i < n; i++) {
line=compoundInfo.get$I(i);
var pt=line.indexOf$S("CHAIN:");
if (pt >= 0) {
var s=line.substring$I$I(pt + 7, pt + 8);
chainData.add$O(s);
p.sequenceTitles.addElement$O(moleculeTitles.get$I(counter));
while (line.charAt$I(pt + 8) == ","){
line=line.substring$I$I(0, pt + 7) + line.substring$I(pt + 10);
s=line.substring$I$I(pt + 7, pt + 8);
chainData.add$O(s);
p.sequenceTitles.addElement$O(moleculeTitles.get$I(counter));
}
++counter;
}}
}var seqByChain=Clazz.array(String, [27]);
for (var i=0, n=sequenceInfo.size$(); i < n; i++) {
line=sequenceInfo.get$I(i);
var c=line.charAt$I(11);
var pt=(c == " " ? 26 : c.$c() - 65);
if (pt >= 0 && pt < 27 ) {
if (seqByChain[pt] == null ) seqByChain[pt]="";
seqByChain[pt]+=line.substring$I$I(19, 70) + " ";
}}
line=seqByChain[26];
if (line != null ) {
C$.addSequence$main_java_Utilities_Preprocessor$S(p, line);
p.sequenceTitles.addElement$O(moleculeTitles.get$I(0));
} else if (!hasMoleculeTag) {
for (var i=0; i < 26; i++) {
var seq=seqByChain[i];
if (seq != null ) {
chainData.add$O("" + String.fromCharCode((65 + i)));
C$.addSequence$main_java_Utilities_Preprocessor$S(p, seq.trim$());
p.sequenceTitles.addElement$O(moleculeTitles.get$I(0));
}}
} else {
for (var i=0, n=chainData.size$(); i < n; i++) {
var chainValue=chainData.get$I(i);
var pt=(chainValue.charCodeAt$I(0)) - 65;
C$.addSequence$main_java_Utilities_Preprocessor$S(p, seqByChain[pt]);
}
}C$.convertAmino$java_util_Vector(p.sequences);
if (proteins != null ) {
if (hasECnumber) {
} else if (keywordInfo.size$() > 0) {
var s="";
for (var fcn=0; fcn < keywordInfo.size$(); fcn++) {
s+=keywordInfo.get$I(fcn).substring$I(10).trim$() + " ";
}
proteinFunction=s.trim$();
} else if (headerLine.length$() > 0) {
proteinFunction=headerLine.substring$I$I(10, 50).trim$();
}for (var fcn=0; fcn < p.sequenceTitles.size$(); fcn++) {
p.functions.addElement$O(proteinFunction);
}
}return p.finalizeRead$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(sequences, proteins, electro2D, fileNum);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var error=Clazz.new_($I$(7,1));
error.setMessage$S("Error reading from file. Be sure you typed the name correctly.");
error.setVisible$Z(true);
System.err.println$S("Exception was: " + e);
return 0;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'convertAmino$java_util_Vector',  function (sequences) {
var nSeq=sequences.size$();
for (var i=0; i < nSeq; i++) {
var seq=sequences.elementAt$I(i);
var len=seq.length$();
var bytes=Clazz.array(Byte.TYPE, [((len + 1)/4|0)]);
var pt=0;
for (var j=0; j < len; j+=4) {
var aaa=seq.substring$I$I(j, j + 3).toUpperCase$();
var s=C$.aminoConversions.get$O(aaa);
if (s == null ) {
System.err.println$S("GenomeFileParser could not convert " + aaa + " to X" );
} else {
bytes[pt++]=(s.charAt$I(0).$c()|0);
}}
sequences.setElementAt$O$I( String.instantialize(bytes, 0, pt), i);
}
}, 1);

Clazz.newMeth(C$, 'getFASTASequenceAsSingleLine$java_io_File',  function (file) {
try {
var reader=Clazz.new_([Clazz.new_([Clazz.new_($I$(11,1).c$$java_io_File,[file])],$I$(10,1).c$$java_io_InputStream)],$I$(3,1).c$$java_io_Reader);
try {
var line;
var c;
var sb=Clazz.new_($I$(6,1));
while ((line=reader.readLine$()) != null ){
if (line.length$() > 0 && (c=line.charAt$I(0)) != ";"  && c != ">" ) {
sb.append$S(line.replaceAll$S$S("\\W+", ""));
}}
return sb.toString();

}finally{/*res*/reader&&reader.close$&&reader.close$();}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("getFASTSequenceAsSingleLine " + ex.getMessage$() + " trying to open " + file );
return null;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'loadFile$java_io_File$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I',  function (f, sequences, proteins, electro2d, fileNum) {
var error=null;
var filename=(f == null  ? null : f.getName$());
if (filename == null  || filename.equals$O("") ) {
error=Clazz.new_($I$(7,1));
error.setMessage$S("Please enter a file name.");
return error;
}var data=null;
if (true ||false) {
data=$I$(12).getStringForFile$java_io_File(f);
} else {
}var n=0;
var t0=System.currentTimeMillis$();
var extension=filename.substring$I(filename.lastIndexOf$S(".") + 1).toLowerCase$();
switch (extension) {
case "fa":
case "faa":
case "fasta":
n=C$.fastaParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, sequences, proteins, electro2d, fileNum);
break;
case "pdb":
n=C$.pdbParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, sequences, proteins, electro2d, fileNum);
break;
case "gbk":
n=C$.gbkParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, sequences, proteins, electro2d, fileNum);
break;
case "e2d":
n=C$.e2dParse$java_io_File$S$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, sequences, proteins, electro2d, fileNum);
break;
default:
error=Clazz.new_($I$(7,1));
error.setMessage$S("File extension is not valid: " + filename);
break;
}
System.out.println$S("Time to load " + f + " = " + new Double(((Long.$sub(System.currentTimeMillis$(),t0)) / 1000.0)).toString() + " s with " + n + " proteins" );
return error;
}, 1);

Clazz.newMeth(C$, 'addSequence$main_java_Utilities_Preprocessor$S',  function (p, s) {
p.sequences.add$O(s.replaceAll$S$S("[-]", ""));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.aminoConversions=Clazz.new_($I$(1,1));
C$.aas=Clazz.array(String, -1, ["alanine", "ALA", "A", "arginine", "ARG", "R", "asparagine", "ASN", "N", "aspartic acid", "ASP", "D", "asparagine or aspartic acid", "ASX", "B", "cysteine", "CYS", "C", "glutamic acid", "GLU", "E", "glutamine", "GLN", "Q", "glutamine or glutamic acid", "GLX", "Z", "glycine", "GLY", "G", "histidine", "HIS", "H", "isoleucine", "ILE", "I", "leucine", "LEU", "L", "lysine", "LYS", "K", "methionine", "MET", "M", "phenylalanine", "PHE", "F", "proline", "PRO", "P", "serine", "SER", "S", "threonine", "THR", "T", "tryptophan", "TRP", "W", "tyrosine", "TYR", "Y", "valine", "VAL", "V"]);
{
for (var i=1; i < C$.aas.length; i++) C$.aminoConversions.put$O$O(C$.aas[i++], C$.aas[i++]);

};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
