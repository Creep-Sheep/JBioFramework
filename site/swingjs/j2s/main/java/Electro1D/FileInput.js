(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[[0,'javax.swing.JOptionPane','java.util.Vector','main.java.Utilities.MessageFrame','main.java.Utilities.FileUtils','main.java.Utilities.GenomeFileParser']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileInput");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'loadFile$java_io_File$S$main_java_Electro1D_Simulation',  function (f, wellNum, simPanel) {
$I$(1).showMessageDialog$java_awt_Component$O(null, "Proteins Loading");
var filename=(f == null  ? null : f.getName$());
var error=null;
var proteins=Clazz.new_($I$(2,1));
if (filename == null  || filename.equals$O("") ) {
error=Clazz.new_($I$(3,1));
error.setMessage$S("Please enter a file name.");
} else {
filename=f.getAbsolutePath$();
var extension=filename.substring$I(filename.lastIndexOf$S(".") + 1);
var data=null;
if (true ||false) {
data=$I$(4).getStringForFile$java_io_File(f);
} else {
}var n=0;
switch (extension.toLowerCase$()) {
case "faa":
case "fasta":
n=$I$(5).fastaParse$java_io_File$S$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, proteins, null, 0);
break;
case "pdb":
n=$I$(5).pdbParse$java_io_File$S$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, proteins, null, 0);
break;
case "gbk":
n=$I$(5).gbkParse$java_io_File$S$java_util_Vector$main_java_Electro2D_Electro2D$I(f, data, proteins, null, 0);
break;
default:
error=Clazz.new_($I$(3,1));
error.setMessage$S("File extension is not valid. You inputed a " + extension + " file, please input a fasta file" );
break;
}
}if (error == null ) {
var n=proteins.size$();
$I$(1,"showMessageDialog$java_awt_Component$O",[null, n + " Protein" + (n == 1 ? "" : "s") + " loaded." ]);
simPanel.addSampleFromFile$java_util_Vector$S(proteins, wellNum);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 10:57:36 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
