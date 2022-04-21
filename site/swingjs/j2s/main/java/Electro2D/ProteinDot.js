(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProteinDot", null, 'java.awt.Label');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showMe=true;
},1);

C$.$fields$=[['Z',['showMe'],'D',['myMolecularWeight','myX','myY'],'O',['graphic','java.awt.Graphics','myProtein','main.java.Electro2D.E2DProtein','myColor','java.awt.Color','myPanel','javax.swing.JPanel']]
,['Z',['showAllDots'],'D',['minPercentAcrylamide','maxPercentAcrylamide']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_E2DProtein$javax_swing_JPanel$D$D',  function (pro, panel, x, y) {
Clazz.super_(C$, this);
this.myProtein=pro;
this.myMolecularWeight=this.myProtein.getMW$();
this.myColor=this.myProtein.getColor$();
this.myPanel=panel;
this.myX=x;
this.myY=y;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$javax_swing_JPanel$D$D',  function (c, panel, x, y) {
Clazz.super_(C$, this);
this.myColor=c;
this.myPanel=panel;
this.myX=x;
this.myY=y;
}, 1);

Clazz.newMeth(C$, 'setPercent$D$D',  function (lp, hp) {
C$.minPercentAcrylamide=lp;
C$.maxPercentAcrylamide=hp;
}, 1);

Clazz.newMeth(C$, 'changeY$',  function () {
if (C$.minPercentAcrylamide != C$.maxPercentAcrylamide ) {
this.myY=(10 / (((this.myY - 48) * (C$.maxPercentAcrylamide - C$.minPercentAcrylamide) / 532) + C$.minPercentAcrylamide)) * (2) * 0.25 * (100000 / this.myMolecularWeight)  + this.myY;
} else {
this.myY=(10 / C$.minPercentAcrylamide) * (2) * 0.25 * (100000 / this.myMolecularWeight)  + this.myY;
}this.myPanel.repaint$();
});

Clazz.newMeth(C$, 'restart$',  function () {
this.myY=48;
});

Clazz.newMeth(C$, 'returnX$',  function () {
return this.myX;
});

Clazz.newMeth(C$, 'returnY$',  function () {
return this.myY;
});

Clazz.newMeth(C$, 'getDiameter$',  function () {
return 7;
}, 1);

Clazz.newMeth(C$, 'setShow$',  function () {
if (C$.showAllDots) {
C$.showAllDots=false;
} else {
C$.showAllDots=true;
}}, 1);

Clazz.newMeth(C$, 'doNotShowMe$',  function () {
this.showMe=false;
});

Clazz.newMeth(C$, 'doShowMe$',  function () {
this.showMe=true;
});

Clazz.newMeth(C$, 'getShowMe$',  function () {
return this.showMe;
});

Clazz.newMeth(C$, 'getShow$',  function () {
return C$.showAllDots;
}, 1);

Clazz.newMeth(C$, 'getPro$',  function () {
return this.myProtein;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.myColor;
});

Clazz.newMeth(C$, 'changeColor$java_awt_Color',  function (col) {
this.myColor=col;
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics',  function (g) {
this.graphic=g;
if (C$.showAllDots && this.showMe ) {
g.setColor$java_awt_Color(this.myColor);
g.fillRect$I$I$I$I(((this.myX)|0), ((this.myY)|0), 3, 3);
g.setColor$java_awt_Color(Clazz.new_($I$(1,1).c$$I$I$I,[54, 100, 139]));
}});

Clazz.newMeth(C$, 'update$',  function () {
this.draw$java_awt_Graphics(this.graphic);
});

C$.$static$=function(){C$.$static$=0;
C$.showAllDots=false;
C$.minPercentAcrylamide=-1;
C$.maxPercentAcrylamide=-1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
