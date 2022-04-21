(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.Color','java.util.Random']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "E2DProtein");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['myMolWt','myPI'],'S',['myID','mySequence','myFunction'],'O',['+myColor']]
,['O',['colors','java.awt.Color[]','rnaColor','java.awt.Color','+dnaColor','+enzymeColor','+hypotheticalColor','+transportColor','+receptorColor','+transductionColor']]]

Clazz.newMeth(C$, 'c$$S$D$D$S$S',  function (id, molWt, pI, sequence, fcn) {
;C$.$init$.apply(this);
this.myID=id;
this.myMolWt=molWt;
this.mySequence=sequence;
this.myFunction=fcn;
this.myPI=pI;
if (id.toLowerCase$().contains$CharSequence("dna")) {
this.myColor=C$.dnaColor;
} else if (id.toLowerCase$().contains$CharSequence("ribosomal")) {
this.myColor=C$.rnaColor;
} else if (id.toLowerCase$().contains$CharSequence("hypothetical")) {
this.myColor=C$.hypotheticalColor;
} else if (fcn.toLowerCase$().contains$CharSequence("enzyme")) {
this.myColor=C$.enzymeColor;
} else if (fcn.toLowerCase$().contains$CharSequence("transport")) {
this.myColor=C$.transportColor;
} else if (fcn.toLowerCase$().contains$CharSequence("receptor") || fcn.contains$CharSequence("reception") ) {
this.myColor=C$.receptorColor;
} else if (fcn.toLowerCase$().contains$CharSequence("transduction")) {
this.myColor=C$.transductionColor;
} else {
var r=Clazz.new_($I$(2,1));
this.myColor=C$.colors[r.nextInt$I(9)];
}}, 1);

Clazz.newMeth(C$, 'getID$',  function () {
return this.myID;
});

Clazz.newMeth(C$, 'getMW$',  function () {
return this.myMolWt;
});

Clazz.newMeth(C$, 'getColor$',  function () {
return this.myColor;
});

Clazz.newMeth(C$, 'getPI$',  function () {
return this.myPI;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.mySequence;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.myID;
});

Clazz.newMeth(C$, 'getFunction$',  function () {
return this.myFunction;
});

Clazz.newMeth(C$, 'getColorGuide$',  function () {
var retVal=Clazz.array(String, -2, [Clazz.array(String, -1, ["DNA in Title", Integer.toString$I(C$.dnaColor.getRGB$())]), Clazz.array(String, -1, ["Ribosomal in Title", Integer.toString$I(C$.rnaColor.getRGB$())]), Clazz.array(String, -1, ["Enzyme EC in Function", Integer.toString$I(C$.enzymeColor.getRGB$())]), Clazz.array(String, -1, ["Hypothetical protein", Integer.toString$I(C$.hypotheticalColor.getRGB$())]), Clazz.array(String, -1, ["Transport protein in Function", Integer.toString$I(C$.transportColor.getRGB$())]), Clazz.array(String, -1, ["Receptor in Function", Integer.toString$I(C$.receptorColor.getRGB$())]), Clazz.array(String, -1, ["Transduction in Function", Integer.toString$I(C$.transductionColor.getRGB$())])]);
return retVal;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.colors=Clazz.array($I$(1), -1, [$I$(1).YELLOW, Clazz.new_($I$(1,1).c$$I$I$I,[254, 143, 74]), Clazz.new_($I$(1,1).c$$I$I$I,[160, 11, 206]), Clazz.new_($I$(1,1).c$$I$I$I,[72, 100, 100]), Clazz.new_($I$(1,1).c$$I$I$I,[0, 95, 95]), $I$(1).CYAN, Clazz.new_($I$(1,1).c$$I$I$I,[158, 49, 49]), Clazz.new_($I$(1,1).c$$I$I$I,[0, 135, 16]), Clazz.new_($I$(1,1).c$$I$I$I,[255, 96, 0])]);
C$.rnaColor=$I$(1).BLUE;
C$.dnaColor=$I$(1).RED;
C$.enzymeColor=$I$(1).GREEN;
C$.hypotheticalColor=$I$(1).PINK;
C$.transportColor=Clazz.new_($I$(1,1).c$$I$I$I,[117, 92, 50]);
C$.receptorColor=Clazz.new_($I$(1,1).c$$I$I$I,[176, 196, 222]);
C$.transductionColor=Clazz.new_($I$(1,1).c$$I$I$I,[255, 216, 202]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:53 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
