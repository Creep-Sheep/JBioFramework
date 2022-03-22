(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BitFile");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index_','bitsLeft_'],'O',['output_','java.io.OutputStream','buffer_','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (output) {
;C$.$init$.apply(this);
this.output_=output;
this.buffer_=Clazz.array(Byte.TYPE, [256]);
this.index_=0;
this.bitsLeft_=8;
}, 1);

Clazz.newMeth(C$, 'Flush$',  function () {
var numBytes=this.index_ + (this.bitsLeft_ == 8 ? 0 : 1);
if (numBytes > 0) {
this.output_.write$I(numBytes);
this.output_.write$BA$I$I(this.buffer_, 0, numBytes);
this.buffer_[0]=(0|0);
this.index_=0;
this.bitsLeft_=8;
}});

Clazz.newMeth(C$, 'WriteBits$I$I',  function (bits, numbits) {
var numBytes=255;
do {
if ((this.index_ == 254 && this.bitsLeft_ == 0 ) || this.index_ > 254 ) {
this.output_.write$I(numBytes);
this.output_.write$BA$I$I(this.buffer_, 0, numBytes);
this.buffer_[0]=(0|0);
this.index_=0;
this.bitsLeft_=8;
}if (numbits <= this.bitsLeft_) {
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|((bits & ((1 << numbits) - 1)) << (8 - this.bitsLeft_))|0);
this.bitsLeft_-=numbits;
numbits=0;
} else {
this.buffer_[$k$=this.index_]=(this.buffer_[$k$]|((bits & ((1 << this.bitsLeft_) - 1)) << (8 - this.bitsLeft_))|0);
bits>>=this.bitsLeft_;
numbits-=this.bitsLeft_;
this.buffer_[++this.index_]=(0|0);
this.bitsLeft_=8;
}} while (numbits != 0);
});
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
