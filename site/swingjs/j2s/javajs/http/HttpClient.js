(function(){var P$=Clazz.newPackage("javajs.http"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "HttpClient", function(){
});
C$.$classes$=[['HttpRequest',9],['HttpResponse',9]];
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HttpClient, "HttpRequest", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addFilePart$S$java_io_File',  function (name, file) {
return this.addFilePart$S$java_io_File$S$S(name, file, "application/octet-stream", file.getName$());
});

Clazz.newMeth(C$, 'addFilePart$S$java_io_InputStream',  function (name, stream) {
return this.addFilePart$S$java_io_InputStream$S$S(name, stream, "application/octet-stream", "file");
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HttpClient, "HttpResponse", function(){
}, null, 'java.io.Closeable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'close$',  function () {
});
};})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-01-14 18:17:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
