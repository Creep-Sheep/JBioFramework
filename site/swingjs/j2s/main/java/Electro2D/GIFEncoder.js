(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.image.PixelGrabber','main.java.Electro2D.BitUtils','main.java.Electro2D.ScreenDescriptor','main.java.Electro2D.ImageDescriptor','main.java.Electro2D.LZWCompressor','main.java.Electro2D.BitFile','main.java.Electro2D.LZWStringTable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['numColors_'],'H',['width_','height_'],'O',['pixels_','byte[]','+colors_','sd_','main.java.Electro2D.ScreenDescriptor','id_','main.java.Electro2D.ImageDescriptor']]]

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (image) {
;C$.$init$.apply(this);
this.width_=($s$[0] = image.getWidth$java_awt_image_ImageObserver(null), $s$[0]);
this.height_=($s$[0] = image.getHeight$java_awt_image_ImageObserver(null), $s$[0]);
var values=Clazz.array(Integer.TYPE, [this.width_ * this.height_]);
var grabber=Clazz.new_($I$(1,1).c$$java_awt_Image$I$I$I$I$IA$I$I,[image, 0, 0, this.width_, this.height_, values, 0, this.width_]);
try {
if (grabber.grabPixels$() != true ) throw Clazz.new_(Clazz.load('java.awt.AWTException').c$$S,["Grabber returned false: " + grabber.status$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
;} else {
throw e;
}
}
var r=Clazz.array(Byte.TYPE, [this.width_, this.height_]);
var g=Clazz.array(Byte.TYPE, [this.width_, this.height_]);
var b=Clazz.array(Byte.TYPE, [this.width_, this.height_]);
var index=0;
for (var y=0; y < this.height_; ++y) for (var x=0; x < this.width_; ++x) {
r[x][y]=(((values[index] >> 16) & 255)|0);
g[x][y]=(((values[index] >> 8) & 255)|0);
b[x][y]=(((values[index]) & 255)|0);
++index;
}

this.ToIndexedColor$BAA$BAA$BAA(r, g, b);
}, 1);

Clazz.newMeth(C$, 'c$$BAA$BAA$BAA',  function (r, g, b) {
;C$.$init$.apply(this);
this.width_=($s$[0] = (r.length), $s$[0]);
this.height_=($s$[0] = (r[0].length), $s$[0]);
this.ToIndexedColor$BAA$BAA$BAA(r, g, b);
}, 1);

Clazz.newMeth(C$, 'Write$java_io_OutputStream',  function (output) {
$I$(2).WriteString$java_io_OutputStream$S(output, "GIF87a");
var sd=Clazz.new_($I$(3,1).c$$H$H$I,[this.width_, this.height_, this.numColors_]);
sd.Write$java_io_OutputStream(output);
output.write$BA$I$I(this.colors_, 0, this.colors_.length);
var id=Clazz.new_($I$(4,1).c$$H$H$C,[this.width_, this.height_, ","]);
id.Write$java_io_OutputStream(output);
var codesize=$I$(2).BitsNeeded$I(this.numColors_);
if (codesize == 1) (($b$[0]=++codesize,codesize=$b$[0],$b$[0]));
output.write$I(codesize);
$I$(5).LZWCompress$java_io_OutputStream$I$BA(output, codesize, this.pixels_);
output.write$I(0);
id=Clazz.new_($I$(4,1).c$$H$H$C,[0, 0, ";"]);
id.Write$java_io_OutputStream(output);
output.flush$();
});

Clazz.newMeth(C$, 'ToIndexedColor$BAA$BAA$BAA',  function (r, g, b) {
this.pixels_=Clazz.array(Byte.TYPE, [this.width_ * this.height_]);
this.colors_=Clazz.array(Byte.TYPE, [768]);
var colornum=0;
for (var x=0; x < this.width_; ++x) {
for (var y=0; y < this.height_; ++y) {
var search;
for (search=0; search < colornum; ++search) if (this.colors_[search * 3] == r[x][y] && this.colors_[search * 3 + 1] == g[x][y]  && this.colors_[search * 3 + 2] == b[x][y] ) break;

if (search > 255) throw Clazz.new_(Clazz.load('java.awt.AWTException').c$$S,["Too many colors."]);
this.pixels_[y * this.width_ + x]=(search|0);
if (search == colornum) {
this.colors_[search * 3]=r[x][y];
this.colors_[search * 3 + 1]=g[x][y];
this.colors_[search * 3 + 2]=b[x][y];
++colornum;
}}
}
this.numColors_=1 << $I$(2).BitsNeeded$I(colornum);
var copy=Clazz.array(Byte.TYPE, [this.numColors_ * 3]);
System.arraycopy$O$I$O$I$I(this.colors_, 0, copy, 0, this.numColors_ * 3);
this.colors_=copy;
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
