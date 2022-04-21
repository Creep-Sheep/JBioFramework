(function(){var P$=Clazz.newPackage("main.java.Ionex"),p$1={},I$=[[0,'java.awt.Point','Thread',['javajs.async.SwingJSUtils','.StateHelper'],'java.awt.Color','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageCanvas", null, 'java.awt.Canvas', 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.COLLOY=25;
this.COLHIY=226;
this.COLLOX=280;
this.COLHIX=376;
this.delay=100;
this.DETECTORIGINX=6;
this.DETECTORIGINY=309;
this.DETECTPEAK=259;
this.DETECTTOP=275;
this.m_nTime=0;
},1);

C$.$fields$=[['D',['m_dTopConc','m_dBottomConc'],'I',['COLLOY','COLHIY','COLLOX','COLHIX','delay','DETECTORIGINX','DETECTORIGINY','DETECTPEAK','DETECTTOP','m_nTime'],'J',['startTime'],'O',['m_animator','Thread','m_offscreen','java.awt.Image','m_offgraphics','java.awt.Graphics','m_imgBack','java.awt.Image','m_theExp','main.java.Ionex.Ionex','m_pLastConcen','java.awt.Point','+m_pNewConcen','+m_pNewDetect','+m_pLastDetect','stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'c$$main_java_Ionex_Ionex',  function (theExp) {
Clazz.super_(C$, this);
this.m_theExp=theExp;
this.m_pLastConcen=Clazz.new_($I$(1,1).c$$I$I,[6, 309]);
this.m_pLastDetect=Clazz.new_($I$(1,1).c$$I$I,[6, 309]);
this.m_pNewConcen=Clazz.new_($I$(1,1).c$$I$I,[6, 309]);
this.m_pNewDetect=Clazz.new_($I$(1,1).c$$I$I,[6, 309]);
}, 1);

Clazz.newMeth(C$, 'start$',  function () {
if (this.m_animator == null ) {
this.m_animator=Clazz.new_($I$(2,1).c$$Runnable,[this]);
}this.m_animator.start$();
});

Clazz.newMeth(C$, 'pause$',  function () {
this.m_animator=null;
});

Clazz.newMeth(C$, 'stop$',  function () {
this.m_animator=null;
this.m_nTime=0;
this.m_pLastConcen.move$I$I(6, 309);
this.m_pLastDetect.move$I$I(6, 309);
this.m_pNewConcen.move$I$I(6, 309);
this.m_pNewDetect.move$I$I(6, 309);
});

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).currentThread$().setPriority$I(1);
var myThread=this.m_animator;
this.startTime=System.currentTimeMillis$();
this.stateHelper=Clazz.new_([((P$.ImageCanvas$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageCanvas$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (this.$finals$.myThread === this.b$['main.java.Ionex.ImageCanvas'].m_animator ) {
this.b$['main.java.Ionex.ImageCanvas'].animate$.apply(this.b$['main.java.Ionex.ImageCanvas'], []);
this.b$['java.awt.Component'].repaint$.apply(this.b$['java.awt.Component'], []);
(this.b$['main.java.Ionex.ImageCanvas'].startTime=Long.$add(this.b$['main.java.Ionex.ImageCanvas'].startTime,(100)));
this.b$['main.java.Ionex.ImageCanvas'].stateHelper.sleep$I(Long.$ival(Math.max$J$J(1, Long.$sub(this.b$['main.java.Ionex.ImageCanvas'].startTime,System.currentTimeMillis$()))));
}return false;
});
})()
), Clazz.new_(P$.ImageCanvas$1.$init$,[this, {myThread:myThread}]))],$I$(3,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
this.update$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
if (this.m_offscreen == null ) {
this.m_offscreen=this.createImage$I$I(488, 395);
this.m_offgraphics=this.m_offscreen.getGraphics$();
this.m_offgraphics.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.m_imgBack, 0, 0, null);
}this.drawProteins$java_awt_Graphics(this.m_offgraphics);
this.m_offgraphics.setColor$java_awt_Color($I$(4).blue);
this.m_offgraphics.drawLine$I$I$I$I(this.m_pLastDetect.x, this.m_pLastDetect.y, this.m_pNewDetect.x, this.m_pNewDetect.y);
this.m_offgraphics.setColor$java_awt_Color($I$(4).red);
this.m_offgraphics.drawLine$I$I$I$I(this.m_pLastConcen.x, this.m_pLastConcen.y, this.m_pNewConcen.x, this.m_pNewConcen.y);
this.m_offgraphics.setColor$java_awt_Color($I$(4).white);
this.m_offgraphics.fillRect$I$I$I$I(381, 25, 50, 10);
this.m_offgraphics.fillRect$I$I$I$I(381, 216, 50, 10);
var strConc= String.instantialize(String.valueOf$D(this.m_dTopConc));
this.m_offgraphics.setColor$java_awt_Color($I$(4).gray);
this.m_offgraphics.drawString$S$I$I(p$1.formatFloat$S.apply(this, [strConc]), 381, 35);
strConc=String.valueOf$D(this.m_dBottomConc);
this.m_offgraphics.drawString$S$I$I(p$1.formatFloat$S.apply(this, [strConc]), 381, 226);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.m_offscreen, 0, 0, null);
});

Clazz.newMeth(C$, 'formatFloat$S',  function (strF) {
var str;
var nPos=strF.indexOf$I(".");
if ((nPos < 0) || (nPos + 3 > strF.length$()) ) {
str= String.instantialize(strF);
} else {
str= String.instantialize(strF.substring$I$I(0, nPos + 3));
}return str;
}, p$1);

Clazz.newMeth(C$, 'resetBackground$',  function () {
this.m_offgraphics.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.m_imgBack, 0, 0, null);
this.repaint$();
});

Clazz.newMeth(C$, 'prepareBackground$',  function () {
this.m_offgraphics.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.m_imgBack, 0, 0, null);
for (var i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}if (this.m_theExp.m_arrProteins[i].m_bMix) {
this.m_offgraphics.setColor$java_awt_Color(this.m_theExp.m_colors[5]);
} else {
this.m_offgraphics.setColor$java_awt_Color(this.m_theExp.m_colors[i]);
}this.m_offgraphics.drawString$S$I$I(this.m_theExp.m_arrProteins[i].getName$(), 10, 344 + (i * 11));
}
this.repaint$();
});

Clazz.newMeth(C$, 'animate$',  function () {
++this.m_nTime;
if (this.m_nTime >= 460) {
this.m_theExp.processStop$();
return;
}this.moveProteins$();
this.m_pLastConcen.move$I$I(this.m_pNewConcen.x, this.m_pNewConcen.y);
this.calcConc$();
this.m_pLastDetect.move$I$I(this.m_pNewDetect.x, this.m_pNewDetect.y);
this.calcDetect$();
this.repaint$();
});

Clazz.newMeth(C$, 'moveProteins$',  function () {
var dConc;
var protein;
var i;
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}protein=this.m_theExp.m_arrProteins[i];
if (protein.m_bBound) {
if (this.m_nTime <= (150 + protein.m_nPos)) {
dConc=this.m_theExp.m_dConc1;
} else {
if (this.m_nTime <= (300 + protein.m_nPos)) {
dConc=this.m_theExp.m_dConc1 + (((this.m_theExp.m_dConc2 - this.m_theExp.m_dConc1) / 150) * (this.m_nTime - 150 - protein.m_nPos ));
} else {
dConc=this.m_theExp.m_dConc2;
}}if (Math.abs(protein.m_dCharge) < (dConc * 100) ) {
protein.m_bBound=false;
}}if (!protein.m_bBound) {
(this.m_theExp.m_arrProteins[i]).moveProtein$();
}}
});

Clazz.newMeth(C$, 'calcConc$',  function () {
if (this.m_nTime <= 150) {
this.m_dTopConc=this.m_theExp.m_dConc1;
this.m_dBottomConc=this.m_theExp.m_dConc1;
} else {
if (this.m_nTime <= 300) {
this.m_dTopConc=(this.m_theExp.m_dConc1 + (((this.m_theExp.m_dConc2 - this.m_theExp.m_dConc1) / 150) * (this.m_nTime - 150)));
this.m_dBottomConc=this.m_theExp.m_dConc1;
} else {
if (this.m_nTime <= 450) {
this.m_dTopConc=this.m_theExp.m_dConc2;
this.m_dBottomConc=(this.m_theExp.m_dConc1 + (((this.m_theExp.m_dConc2 - this.m_theExp.m_dConc1) / 150) * (this.m_nTime - 300)));
} else {
this.m_dTopConc=this.m_theExp.m_dConc2;
this.m_dBottomConc=this.m_theExp.m_dConc2;
}}}this.m_pNewConcen.move$I$I(6 + this.m_nTime, 309 - 1 - ((this.m_dBottomConc * (34))|0) );
});

Clazz.newMeth(C$, 'calcDetect$',  function () {
var i;
var nPos;
var nMaxAmount=0;
var nMixAmount=0;
var nAmount;
var nHeight;
var nNewPoint;
this.m_pNewDetect.move$I$I(6 + this.m_nTime, 309);
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}nMaxAmount=Math.max(nMaxAmount, this.m_theExp.m_arrProteins[i].m_nAmount);
}
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}if (this.m_theExp.m_arrProteins[i].m_bMix) {
nMixAmount+=this.m_theExp.m_arrProteins[i].m_nAmount;
}}
nMaxAmount=Math.max(nMaxAmount, nMixAmount);
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}nHeight=50;
if (this.m_theExp.m_arrProteins[i].m_bMix) {
nAmount=nMixAmount;
} else {
nAmount=this.m_theExp.m_arrProteins[i].m_nAmount;
}nHeight=((nHeight * (nAmount / nMaxAmount))|0);
nPos=this.m_theExp.m_arrProteins[i].m_nPos;
switch (Math.abs((203) - (nPos + 1))) {
case 2:
nHeight=((nHeight * (0.5714285714285714))|0);
break;
case 1:
nHeight=((nHeight * (0.8571428571428571))|0);
break;
case 0:
break;
default:
nHeight=0;
}
nNewPoint=309 - nHeight;
if (this.m_pNewDetect.y > nNewPoint) {
this.m_pNewDetect.y=nNewPoint;
}}
});

Clazz.newMeth(C$, 'setImage$java_awt_Image',  function (img) {
this.m_imgBack=img;
});

Clazz.newMeth(C$, 'drawProteins$java_awt_Graphics',  function (g) {
var i;
g.setColor$java_awt_Color($I$(4).white);
g.fillRect$I$I$I$I(281, 26, 95, 200);
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}if (this.m_theExp.m_arrProteins[i].m_bBound) {
this.drawProteinBand$java_awt_Graphics$I(g, i);
}}
for (i=0; i < this.m_theExp.m_arrProteins.length; i++) {
if (this.m_theExp.m_arrProteins[i] == null ) {
continue;
}if (!this.m_theExp.m_arrProteins[i].m_bBound) {
this.drawProteinBand$java_awt_Graphics$I(g, i);
}}
});

Clazz.newMeth(C$, 'drawProteinBand$java_awt_Graphics$I',  function (g, nProtein) {
var rect;
var nPos;
var nWidth;
nPos=this.m_theExp.m_arrProteins[nProtein].m_nPos;
nWidth=this.m_theExp.m_arrProteins[nProtein].m_nBandwidth;
if (nPos >= (201)) {
return;
}rect=Clazz.new_($I$(5,1).c$$I$I$I$I,[281, 25 + nPos, 95, nWidth]);
if ((rect.y + rect.height) >= 226) {
rect.height=226 - rect.y;
}if (this.m_theExp.m_arrProteins[nProtein].m_bMix) {
g.setColor$java_awt_Color(this.m_theExp.m_colors[5]);
} else {
g.setColor$java_awt_Color(this.m_theExp.m_colors[nProtein]);
}g.fillRect$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
