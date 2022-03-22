(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.io.File','java.io.PrintWriter','java.io.BufferedWriter','java.io.FileWriter','java.util.Vector','javax.swing.JOptionPane']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CSVCreator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.directoryString="CSV Files";
},1);

C$.$fields$=[['S',['directoryString'],'O',['proteins','java.util.Vector','electro2D','main.java.Electro2D.Electro2D']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.$init$.apply(this);
this.electro2D=e;
this.proteins=this.electro2D.getGel$().getDots$();
}, 1);

Clazz.newMeth(C$, 'writeToCSV$',  function () {
var filename=this.electro2D.getLastFileLoaded$();
if (filename.length$() > 0) {
var out=null;
try {
var fl=Clazz.new_($I$(1,1).c$$S,["CSV Files"]);
if (!fl.exists$()) {
fl.mkdir$();
}out=Clazz.new_([Clazz.new_([Clazz.new_(["CSV Files" + $I$(1).separator + filename.substring$I$I(0, filename.indexOf$S(".")) + ".csv" ],$I$(4,1).c$$S)],$I$(3,1).c$$java_io_Writer)],$I$(2,1).c$$java_io_Writer);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Error writing to CSV file");
} else {
throw e;
}
}
var p=null;
var d=null;
out.println$S("Title,Sequence,Molecular Weight,pI Value,X-Coordinate,Y-Coordinate");
if (this.proteins == null ) {
this.proteins=Clazz.new_($I$(5,1));
}for (var i=0; i < this.proteins.size$(); i++) {
d=this.proteins.elementAt$I(i);
p=d.getPro$();
out.println$S("\"" + p.getID$() + "\"" + "," + p.getSequence$() + "," + new Double(p.getMW$()).toString() + "," + new Double(p.getPI$()).toString() + "," + new Double(d.returnX$()).toString() + "," + new Double(d.returnY$()).toString() );
}
$I$(6).showMessageDialog$java_awt_Component$O(null, "CSV created at " + "CSV Files" + "/" + filename );
try {
out.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error closing stream");
} else {
throw e;
}
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
