(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'java.io.FileReader','java.io.BufferedReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FastaParser");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parse$java_io_File',  function (file) {
var returnSequence= String.instantialize();
var bReader=null;
try {
var fReader=Clazz.new_($I$(1,1).c$$java_io_File,[file]);
bReader=Clazz.new_($I$(2,1).c$$java_io_Reader,[fReader]);
var line;
while ((line=bReader.readLine$()) != null ){
line=C$.process$S(line);
returnSequence=returnSequence.concat$S(line);
}
bReader.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.out.println$S(ex.getMessage$());
} else {
throw ex;
}
}
try {
bReader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return returnSequence;
}, 1);

Clazz.newMeth(C$, 'process$S',  function (line) {
if (line.charAt$I(0) != ";" && line.charAt$I(0) != ">" ) {
var starIndex=line.indexOf$S("[^\\w]");
if (starIndex != -1) {
var splitLine=line.split$S("[^\\w]");
line= String.instantialize();
for (var split, $split = 0, $$split = splitLine; $split<$$split.length&&((split=($$split[$split])),1);$split++) {
line=line.concat$S(split);
}
}return line;
}return "";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-20 10:59:09 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
