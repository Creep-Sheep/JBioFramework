(function(){var P$=Clazz.newPackage("com.sun.imageio.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CloseableDisposerRecord", null, null, 'sun.java2d.DisposerRecord');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['closeable','java.io.Closeable']]]

Clazz.newMeth(C$, 'c$$java_io_Closeable',  function (closeable) {
;C$.$init$.apply(this);
this.closeable=closeable;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.closeable != null ) {
try {
this.closeable.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
} finally {
this.closeable=null;
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:24:51 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
