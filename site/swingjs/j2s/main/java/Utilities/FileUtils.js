(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'java.io.File','java.io.FileInputStream','javajs.util.Rdr','javajs.async.AsyncFileChooser',['main.java.Utilities.FileUtils','.FileDropper']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileUtils", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FileDropper',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['directoryString'],'O',['jsutil','swingjs.api.JSUtilI','chooser','javajs.async.AsyncFileChooser']]]

Clazz.newMeth(C$, 'getStringForFile$java_io_File',  function (f) {
var bytes=null;
if (C$.jsutil == null ) {
try {
var fis=Clazz.new_($I$(2,1).c$$java_io_File,[f]);
try {
bytes=$I$(3).getLimitedStreamBytes$java_io_InputStream$J(fis, -1);

}finally{/*res*/fis&&fis.close$&&fis.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
} else {
bytes=C$.jsutil.getBytes$java_io_File(f);
}return (bytes == null  ? "" :  String.instantialize(bytes));
}, 1);

Clazz.newMeth(C$, 'getFileChooser$',  function () {
if (C$.chooser != null ) return C$.chooser;
var dir=Clazz.new_($I$(1,1).c$$S,[C$.directoryString]);
if (!dir.isDirectory$()) dir=Clazz.new_(["." + $I$(1).separator + ".." + $I$(1).separator + "data" ],$I$(1,1).c$$S);
return C$.chooser=Clazz.new_($I$(4,1).c$$java_io_File,[dir]);
}, 1);

Clazz.newMeth(C$, 'openFile$java_awt_Component$java_util_function_Function',  function (frame, ok) {
var chooser=C$.getFileChooser$();
chooser.showOpenDialog$java_awt_Component$Runnable$Runnable(frame, ((P$.FileUtils$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FileUtils$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.ok.apply$O(this.$finals$.chooser.getSelectedFile$());
});
})()
), Clazz.new_(P$.FileUtils$lambda1.$init$,[this, {chooser:chooser,ok:ok}])), null);
}, 1);

Clazz.newMeth(C$, 'setFileDropper$javax_swing_JComponent$java_util_function_BiFunction',  function (c, f) {
c.setTransferHandler$javax_swing_TransferHandler(Clazz.new_($I$(5,1).c$$javax_swing_JComponent$java_util_function_BiFunction,[c, f]));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.jsutil=(new swingjs.JSUtil() ||null);
C$.directoryString="." + $I$(1).separator + "data" ;
C$.chooser=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.FileUtils, "FileDropper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.TransferHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['func','java.util.function.BiFunction','oldTransferHandler','javax.swing.TransferHandler']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$java_util_function_BiFunction',  function (c, $function) {
Clazz.super_(C$, this);
this.oldTransferHandler=c.getTransferHandler$();
this.func=$function;
}, 1);

Clazz.newMeth(C$, 'canImport$javax_swing_TransferHandler_TransferSupport',  function (support) {
return true;
});

Clazz.newMeth(C$, 'importData$javax_swing_TransferHandler_TransferSupport',  function (support) {
var tr=support.getTransferable$();
var flavors=tr.getTransferDataFlavors$();
try {
for (var i=0; i < flavors.length; i++) {
if (flavors[i].isFlavorJavaFileListType$()) {
var list=tr.getTransferData$java_awt_datatransfer_DataFlavor(flavors[i]);
var loc=support.getDropLocation$().getDropPoint$();
for (var j=0; j < Math.max(1, list.size$()); j++) {
this.func.apply$O$O(list.get$I(j), loc);
}
return true;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.datatransfer.UnsupportedFlavorException") || Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return this.oldTransferHandler != null  && this.oldTransferHandler.importData$javax_swing_TransferHandler_TransferSupport(support) ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
