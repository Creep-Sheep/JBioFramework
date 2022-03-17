(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Sample");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['changeOn','fillSwitch','emptySwitch'],'I',['sampX','sampY','sampWidth','sampHeight','fillCounter','fillRatio','maxY']]]

Clazz.newMeth(C$, 'setXPosition$I',  function (i) {
this.sampX=i;
});

Clazz.newMeth(C$, 'setYPosition$I',  function (i) {
this.sampY=i;
});

Clazz.newMeth(C$, 'drawSwitch$Z',  function (flag) {
this.changeOn=flag;
});

Clazz.newMeth(C$, 'empty$',  function () {
this.fillSwitch=false;
this.emptySwitch=true;
});

Clazz.newMeth(C$, 'fill$',  function () {
this.fillSwitch=true;
this.emptySwitch=false;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'drawSample$java_awt_Graphics',  function (g) {
if (this.changeOn) {
if (this.fillCounter > this.fillRatio) {
if (this.fillSwitch) {
--this.sampY;
++this.sampHeight;
}if (this.emptySwitch) {
++this.sampY;
--this.sampHeight;
}this.fillCounter=0;
} else {
++this.fillCounter;
}if (this.emptySwitch && this.sampY > this.maxY ) {
this.changeOn=false;
this.sampHeight=0;
}}if (this.sampHeight > 0) {
g.setColor$java_awt_Color($I$(1).blue);
g.fillRect$I$I$I$I(this.sampX, this.sampY, this.sampWidth, this.sampHeight);
}});

Clazz.newMeth(C$, 'setWidth$I',  function (i) {
this.sampWidth=i;
});

Clazz.newMeth(C$, 'setMaxY$I',  function (i) {
this.maxY=i;
});

Clazz.newMeth(C$, 'setRatio$I',  function (i) {
this.fillRatio=i;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.changeOn=false;
this.fillSwitch=false;
this.emptySwitch=false;
this.sampX=0;
this.sampY=0;
this.sampWidth=0;
this.sampHeight=0;
this.fillCounter=0;
this.fillRatio=0;
this.maxY=0;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
