(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageFilter", null, null, 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (f, s) {
var extension=s.substring$I(s.lastIndexOf$S(".") + 1);
if (extension != null ) {
if (extension.equals$O("e2d") || extension.equals$O("gbk") || extension.equals$O("faa") || extension.equals$O("pdb") || extension.equals$O("fasta")  ) {
return true;
} else {
return false;
}}return false;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return "Just Images";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
