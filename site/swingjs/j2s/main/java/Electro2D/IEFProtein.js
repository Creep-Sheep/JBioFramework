(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.Color','java.util.Vector','java.util.Random']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IEFProtein");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tempX=0;
this.increments=0;
},1);

C$.$fields$=[['D',['tempX','increments','myPi','maxPi','minPi'],'I',['index','myX'],'O',['myColor','java.awt.Color','proteins','java.util.Vector','+names']]
,['D',['pixelWidth_100','tempWidth','maxpH','minpH','w34','pH_range_100','pixelsPerPH'],'I',['nProt','myY','myHeight','pixelWidth'],'O',['colors','java.awt.Color[]','gelcanvas','main.java.Electro2D.GelCanvas']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_E2DProtein$main_java_Electro2D_GelCanvas',  function (p, g) {
;C$.$init$.apply(this);
this.index=++C$.nProt;
this.names=Clazz.new_($I$(2,1));
C$.gelcanvas=g;
this.proteins=Clazz.new_($I$(2,1));
this.proteins.add$O(p);
this.minPi=this.myPi=p.getPI$();
this.maxPi=Math.max(this.myPi, C$.minpH);
this.names.add$O(p.toString());
this.myColor=C$.colors[0];
var w=C$.gelcanvas.getWidth$();
if (this.myPi <= C$.minpH ) {
this.myX=1;
} else if (this.myPi >= C$.maxpH ) {
this.myX=((w - 6)|0) + 1;
} else {
this.myX=(((w - 4) * (((this.myPi - C$.minpH) / (C$.maxpH - C$.minpH))))|0);
}var rand=Clazz.new_($I$(3,1));
this.tempX=rand.nextInt$I((w|0) - 7);
this.tempX=this.tempX + 1;
this.increments=(this.myX - this.tempX) / 50;
}, 1);

Clazz.newMeth(C$, 'getXForPH$D',  function (pH) {
return (((pH - C$.minpH) * C$.pixelsPerPH)|0);
}, 1);

Clazz.newMeth(C$, 'addProtein$java_util_Collection',  function (c) {
this.proteins.addAll$java_util_Collection(c);
if (this.proteins.size$() < 10) {
this.myColor=C$.colors[0];
} else if (this.proteins.size$() < 20) {
this.myColor=C$.colors[1];
} else if (this.proteins.size$() < 30) {
this.myColor=C$.colors[2];
} else if (this.proteins.size$() < 40) {
this.myColor=C$.colors[3];
} else if (this.proteins.size$() < 60) {
this.myColor=C$.colors[4];
} else {
this.myColor=C$.colors[5];
}for (var i=0; i < c.size$(); i++) {
var p=(c).elementAt$I(i);
this.names.add$O(p.toString());
var pi=p.getPI$();
if (pi > this.maxPi ) {
this.maxPi=pi;
} else if (pi < this.minPi ) {
this.minPi=pi;
}}
this.myPi=(this.maxPi + this.minPi) / 2;
});

Clazz.newMeth(C$, 'returnX$',  function () {
return this.myX;
});

Clazz.newMeth(C$, 'returnY$',  function () {
return C$.myY;
});

Clazz.newMeth(C$, 'getMaxPI$',  function () {
return this.maxPi;
});

Clazz.newMeth(C$, 'getMinPI$',  function () {
return this.minPi;
});

Clazz.newMeth(C$, 'getProtein$',  function () {
return this.proteins;
});

Clazz.newMeth(C$, 'changeWidth$',  function () {
C$.tempWidth=C$.tempWidth + C$.pixelWidth_100 / 50;
}, 1);

Clazz.newMeth(C$, 'changeX$',  function () {
this.tempX=this.tempX + this.increments;
});

Clazz.newMeth(C$, 'setX$',  function () {
this.tempX=this.myX;
});

Clazz.newMeth(C$, 'setWidth$',  function () {
C$.tempWidth=C$.pixelWidth_100;
}, 1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color(this.myColor);
g.fillRect$I$I$I$I((this.tempX|0), C$.myY, (C$.tempWidth|0), C$.myHeight);
});

Clazz.newMeth(C$, 'shrinkProtein$',  function () {
C$.myHeight=C$.myHeight - 2;
C$.myY=C$.myY + 2;
}, 1);

Clazz.newMeth(C$, 'returnHeight$',  function () {
return C$.myHeight;
}, 1);

Clazz.newMeth(C$, 'returnWidth$',  function () {
return C$.pixelWidth_100;
}, 1);

Clazz.newMeth(C$, 'returnTempWidth$',  function () {
return C$.tempWidth;
}, 1);

Clazz.newMeth(C$, 'resetTempWidth$',  function () {
C$.tempWidth=0;
}, 1);

Clazz.newMeth(C$, 'resetProtein$',  function () {
C$.myHeight=40;
C$.myY=5;
}, 1);

Clazz.newMeth(C$, 'getNames$',  function () {
return this.names;
});

Clazz.newMeth(C$, 'setRange$D$D$I',  function (max, min, canvasWidth) {
C$.maxpH=max;
C$.minpH=min;
C$.pixelWidth=canvasWidth;
C$.pixelWidth_100=C$.pixelWidth / 100.0;
C$.pH_range_100=(C$.maxpH - C$.minpH) / 100;
C$.w34=C$.pixelWidth_100 * 0.75;
C$.pixelsPerPH=C$.pixelWidth_100 / C$.pH_range_100;
}, 1);

Clazz.newMeth(C$, 'returnWidth34$',  function () {
return C$.w34;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return "[IEF" + this.index + " " + this.proteins.size$() + " " + new Double(this.minPi).toString() + " " + new Double(this.maxPi).toString() + " " + this.myX + "]" ;
});

C$.$static$=function(){C$.$static$=0;
C$.nProt=0;
C$.colors=Clazz.array($I$(1), -1, [$I$(1).blue, $I$(1).green, $I$(1).yellow, $I$(1).red, $I$(1).orange, $I$(1).pink]);
C$.myY=5;
C$.myHeight=40;
C$.pixelWidth_100=0;
C$.tempWidth=0;
C$.maxpH=10;
C$.minpH=3;
C$.pixelWidth=563;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
