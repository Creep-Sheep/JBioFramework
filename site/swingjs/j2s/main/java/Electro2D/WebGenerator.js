(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.io.FileWriter','java.io.PrintWriter','main.java.Electro2D.HTMLSorter','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WebGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bgColor="\"FCFCFC\"";
this.openTab="<";
this.closeTab=">";
this.openTD="<TD>";
this.closeTD="</TD>";
this.openTR="<TR>";
this.closeTR="</TR>";
this.directoryString="HTML Files/";
},1);

C$.$fields$=[['S',['maxMW','minMW','maxPi','minPi','bgColor','openTab','closeTab','openTD','closeTD','openTR','closeTR','directoryString'],'O',['electro2D','main.java.Electro2D.Electro2D','fWrite','java.io.FileWriter','pWrite','java.io.PrintWriter']]
,['I',['searchVal']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.$init$.apply(this);
this.electro2D=e;
this.maxMW="";
this.minMW="";
this.maxPi="";
this.minPi="";
}, 1);

Clazz.newMeth(C$, 'setSearch$I',  function (index) {
C$.searchVal=index;
}, 1);

Clazz.newMeth(C$, 'genFile$S',  function (filename) {
try {
{

}
this.fWrite=Clazz.new_($I$(1,1).c$$S,["HTML Files/" + filename + ".html" ]);
this.pWrite=Clazz.new_($I$(2,1).c$$java_io_Writer,[this.fWrite]);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
System.err.println$S(x.getMessage$());
} else {
throw x;
}
}
var names=this.electro2D.getSequenceTitles$();
var molwt=this.electro2D.getMolecularWeights$();
var pI_vals=this.electro2D.getPiValues$();
var functions=this.electro2D.getFunctions$();
var htmlSort=Clazz.new_($I$(3,1).c$$I$java_util_Vector$java_util_Vector$java_util_Vector$java_util_Vector,[C$.searchVal, names, pI_vals, molwt, functions]);
var sorted=Clazz.new_([htmlSort.getSorted$()],$I$(4,1).c$$java_util_Collection);
this.maxMW=String.valueOf$D(this.electro2D.getMaxMW$());
this.minMW=String.valueOf$D(this.electro2D.getMinMW$());
this.maxPi=String.valueOf$D(this.electro2D.getMaxPi$());
this.minPi=String.valueOf$D(this.electro2D.getMinPi$());
var startingLine=" <html><head><body bgcolor=" + "\"FCFCFC\"" + "><title>" + filename + "</title></head>" ;
var startTable="<TABLE BORDER=2><TR><TD>PROTEIN TITLE</TD><TD>MOLECULAR WEIGHT</TD><TD>pI VALUE</TD><TD>FUNCTION</TD></TR>";
var endTable="</TABLE>";
var endLine="</HTML>";
var maxmwCode="<center><br><b>Max Molecular weight = " + this.maxMW + "</b><br>" ;
var minmwCode="<b>Min Molecular weight = " + this.minMW + "</b><br>" ;
var maxpiCode="<b>Max pI Value = " + this.maxPi + "</b><br>" ;
var minpiCode="<b>Min pI Value = " + this.minPi + "</b><br>" ;
var filesizeCode="<b>Proteome File Size = " + sorted.size$() + "</b><br><br>" ;
try {
this.pWrite.println$S(startingLine);
this.pWrite.println$S(maxmwCode);
this.pWrite.println$S(minmwCode);
this.pWrite.println$S(maxpiCode);
this.pWrite.println$S(minpiCode);
this.pWrite.println$S(filesizeCode);
this.pWrite.println$S(startTable);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
var protInfoTable="";
var molwtValue="";
var pI="";
var tmp=Clazz.new_($I$(4,1));
for (var i=0; i < sorted.size$(); i++) {
tmp=sorted.elementAt$I(i);
pI=tmp.elementAt$I(1);
molwtValue=tmp.elementAt$I(2);
protInfoTable="<TR>" + "<TD>" + tmp.elementAt$I(0) + "</TD>" + "<TD>" + molwtValue + "</TD>" + "<TD>" + pI + "</TD>" + "<TD>" + tmp.elementAt$I(3) + "</TD>" + "</TR>" ;
this.pWrite.println$S(protInfoTable);
}
this.pWrite.println$S(endTable);
this.pWrite.println$S(endLine);
this.pWrite.close$();
});

C$.$static$=function(){C$.$static$=0;
C$.searchVal=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
