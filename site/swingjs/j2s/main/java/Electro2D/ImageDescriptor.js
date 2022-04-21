(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.image.PixelGrabber','main.java.Electro2D.BitUtils','main.java.Electro2D.ScreenDescriptor','main.java.Electro2D.ImageDescriptor','main.java.Electro2D.LZWCompressor','main.java.Electro2D.BitFile','main.java.Electro2D.LZWStringTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageDescriptor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['B',['separator_','byte_'],'H',['leftPosition_','topPosition_','width_','height_']]]

Clazz.newMeth(C$, 'c$$H$H$C',  function (width, height, separator) {
;C$.$init$.apply(this);
this.separator_=($b$[0] = separator.$c(), $b$[0]);
this.leftPosition_=($s$[0] = 0, $s$[0]);
this.topPosition_=($s$[0] = 0, $s$[0]);
this.width_=width;
this.height_=height;
this.SetLocalColorTableSize$B(0);
this.SetReserved$B(0);
this.SetSortFlag$B(0);
this.SetInterlaceFlag$B(0);
this.SetLocalColorTableFlag$B(0);
}, 1);

Clazz.newMeth(C$, 'Write$java_io_OutputStream',  function (output) {
output.write$I(this.separator_);
$I$(2).WriteWord$java_io_OutputStream$H(output, this.leftPosition_);
$I$(2).WriteWord$java_io_OutputStream$H(output, this.topPosition_);
$I$(2).WriteWord$java_io_OutputStream$H(output, this.width_);
$I$(2).WriteWord$java_io_OutputStream$H(output, this.height_);
output.write$I(this.byte_);
});

Clazz.newMeth(C$, 'SetLocalColorTableSize$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 7)), $b$[0]);
});

Clazz.newMeth(C$, 'SetReserved$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 3) << 3), $b$[0]);
});

Clazz.newMeth(C$, 'SetSortFlag$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 1) << 5), $b$[0]);
});

Clazz.newMeth(C$, 'SetInterlaceFlag$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 1) << 6), $b$[0]);
});

Clazz.newMeth(C$, 'SetLocalColorTableFlag$B',  function (num) {
this.byte_=($b$[0] = this.byte_|((num & 1) << 7), $b$[0]);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
