(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'java.awt.Color','main.java.Electro1D.Sample']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pipette");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['dropped','emptied','hasSample','retracted'],'F',['y1float','speed'],'I',['x1','y1','gap','sampleDepth','initTipLength','maxYPosition','wellBottom','pts','emptyTip','dropStart','dropLength'],'O',['sampleColor','java.awt.Color','pipetteCoordsX','int[]','+pipetteCoordsY','+pipetteCoordsYf','sample','main.java.Electro1D.Sample']]]

Clazz.newMeth(C$, 'setSampleDepth$I',  function (i) {
this.sampleDepth=i;
});

Clazz.newMeth(C$, 'IncrPosition',  function () {
var i=this.y1;
var j=0;
this.y1float=this.y1float + this.speed;
this.y1=(this.y1float|0);
j=this.y1 - i;
if (j > 0) if (!this.dropped) {
this.pipetteCoordsY[1]+=j;
this.pipetteCoordsY[2]+=j;
this.pipetteCoordsYf[1]=this.pipetteCoordsY[1] - this.emptyTip;
this.pipetteCoordsYf[2]=this.pipetteCoordsY[2] - this.emptyTip;
if (this.pipetteCoordsY[1] > this.sampleDepth) {
this.pipetteCoordsYf[0]+=j;
this.pipetteCoordsYf[3]+=j;
}if (this.pipetteCoordsY[1] > this.maxYPosition) {
this.dropped=true;
this.dropStart=this.pipetteCoordsY[1] - this.emptyTip;
this.dropLength=this.wellBottom - this.dropStart;
}} else if (!this.emptied) {
this.pipetteCoordsYf[0]+=j;
this.pipetteCoordsYf[3]+=j;
if (this.pipetteCoordsYf[0] > this.maxYPosition) this.emptied=true;
} else if (!this.retracted) {
this.pipetteCoordsY[1]-=j;
this.pipetteCoordsY[2]-=j;
if (this.pipetteCoordsY[1] < 0) this.retracted=true;
}return !this.retracted;
}, p$1);

Clazz.newMeth(C$, 'fillWell$java_awt_Graphics',  function (g) {
if (!this.emptied) {
g.setColor$java_awt_Color(this.sampleColor);
g.fillPolygon$IA$IA$I(this.pipetteCoordsX, this.pipetteCoordsYf, this.pts);
}g.setColor$java_awt_Color($I$(1).black);
g.drawPolygon$IA$IA$I(this.pipetteCoordsX, this.pipetteCoordsY, this.pts);
if (this.dropped) {
this.sample.drawSwitch$Z(true);
if (!this.emptied) {
var i=this.pipetteCoordsY[1] - this.emptyTip;
var j=this.wellBottom - i;
g.setColor$java_awt_Color(this.sampleColor);
g.fillRect$I$I$I$I(this.pipetteCoordsX[1], i, 4, j);
}}if (this.emptied) this.sample.drawSwitch$Z(false);
return p$1.IncrPosition.apply(this, []);
});

Clazz.newMeth(C$, 'setSample$main_java_Electro1D_Sample',  function (sample1) {
this.sample=sample1;
});

Clazz.newMeth(C$, 'setStartXPosition$I',  function (i) {
var j=0;
p$1.ResetFlags.apply(this, []);
this.x1=i;
this.y1=0;
this.y1float=0.0;
this.pipetteCoordsX[0]=this.x1 - 4;
this.pipetteCoordsX[1]=this.x1 - 2;
this.pipetteCoordsX[2]=this.x1 + 2;
this.pipetteCoordsX[3]=this.x1 + 4;
j=0;
do {
this.pipetteCoordsY[j]=0;
this.pipetteCoordsYf[j]=0;
} while (++j < 4);
this.pts=this.pipetteCoordsX.length;
});

Clazz.newMeth(C$, 'setMaxYPosition$I',  function (i) {
this.maxYPosition=i - this.gap;
this.wellBottom=i;
});

Clazz.newMeth(C$, 'ResetFlags',  function () {
this.dropped=false;
this.emptied=false;
this.hasSample=false;
this.retracted=false;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.sampleColor=$I$(1).blue;
this.gap=6;
this.speed=2.0;
this.pipetteCoordsX=Clazz.array(Integer.TYPE, [4]);
this.pipetteCoordsY=Clazz.array(Integer.TYPE, [4]);
this.pipetteCoordsYf=Clazz.array(Integer.TYPE, [4]);
this.emptyTip=4;
this.sample=Clazz.new_($I$(2,1));
}, 1);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
