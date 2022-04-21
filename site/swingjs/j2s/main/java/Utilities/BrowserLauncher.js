(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'java.awt.Desktop','java.net.URI']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BrowserLauncher");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'openURL$S',  function (url) {
try {
$I$(1).getDesktop$().browse$java_net_URI($I$(2).create$S(url));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.out.println$S("BrowserLauncher.openURL " + e.getMessage$());
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'openHTMLFile$java_io_File',  function (file) {
if (!file.exists$()) {
throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["File does not exist: " + file.getName$()]);
}$I$(1).getDesktop$().open$java_io_File(file);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
