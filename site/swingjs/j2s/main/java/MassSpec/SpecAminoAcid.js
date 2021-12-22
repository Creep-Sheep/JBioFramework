(function(){var P$=Clazz.newPackage("main.java.MassSpec"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SpecAminoAcid");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['mass','COOHpKa','NHHpKa','sidechainPKa'],'I',['charge','hits'],'S',['name']]]

Clazz.newMeth(C$, 'c$$C',  function (code) {
;C$.$init$.apply(this);
p$1.translate$C.apply(this, [code]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (input) {
;C$.$init$.apply(this);
if (input.length$() > 1) {
throw Clazz.new_(Clazz.load('main.java.MassSpec.AminoException').c$$S,["String input too long; must be single char."]);
} else {
var charArray=input.toCharArray$();
var code=charArray[0];
p$1.translate$C.apply(this, [code]);
}}, 1);

Clazz.newMeth(C$, 'translate$C',  function (code) {
switch (code.$c()) {
case 72:
p$1.setName$S.apply(this, ["Histidine"]);
p$1.setMass$D.apply(this, [155.15603]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [1.77]);
p$1.setNHHpKa$D.apply(this, [9.18]);
p$1.setSidechainPKa$D.apply(this, [6.1]);
break;
case 75:
p$1.setName$S.apply(this, ["Lysine"]);
p$1.setMass$D.apply(this, [146.19206]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.18]);
p$1.setNHHpKa$D.apply(this, [8.95]);
p$1.setSidechainPKa$D.apply(this, [10.53]);
break;
case 82:
p$1.setName$S.apply(this, ["Arginine"]);
p$1.setMass$D.apply(this, [174.20206]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.01]);
p$1.setNHHpKa$D.apply(this, [9.04]);
p$1.setSidechainPKa$D.apply(this, [12.48]);
break;
case 69:
p$1.setName$S.apply(this, ["Glutamate"]);
p$1.setMass$D.apply(this, [147.12784]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.1]);
p$1.setNHHpKa$D.apply(this, [9.46]);
p$1.setSidechainPKa$D.apply(this, [4.07]);
break;
case 68:
p$1.setName$S.apply(this, ["Aspartate"]);
p$1.setMass$D.apply(this, [133.09784]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.1]);
p$1.setNHHpKa$D.apply(this, [9.82]);
p$1.setSidechainPKa$D.apply(this, [3.86]);
break;
case 80:
p$1.setName$S.apply(this, ["Proline"]);
p$1.setMass$D.apply(this, [115.13]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.0]);
p$1.setNHHpKa$D.apply(this, [10.6]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 86:
p$1.setName$S.apply(this, ["Valine"]);
p$1.setMass$D.apply(this, [117.15]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.29]);
p$1.setNHHpKa$D.apply(this, [9.72]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 77:
p$1.setName$S.apply(this, ["Methionine"]);
p$1.setMass$D.apply(this, [149.21]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.28]);
p$1.setNHHpKa$D.apply(this, [9.21]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 83:
p$1.setName$S.apply(this, ["Serine"]);
p$1.setMass$D.apply(this, [105.09]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.21]);
p$1.setNHHpKa$D.apply(this, [9.15]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 81:
p$1.setName$S.apply(this, ["Glutamine"]);
p$1.setMass$D.apply(this, [146.14]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.17]);
p$1.setNHHpKa$D.apply(this, [9.13]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 78:
p$1.setName$S.apply(this, ["Asparagine"]);
p$1.setMass$D.apply(this, [132.12]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.02]);
p$1.setNHHpKa$D.apply(this, [8.8]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 76:
p$1.setName$S.apply(this, ["Leucine"]);
p$1.setMass$D.apply(this, [131.17]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.33]);
p$1.setNHHpKa$D.apply(this, [9.74]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 73:
p$1.setName$S.apply(this, ["Isoleucine"]);
p$1.setMass$D.apply(this, [131.17]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.32]);
p$1.setNHHpKa$D.apply(this, [9.76]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 65:
p$1.setName$S.apply(this, ["Alanine"]);
p$1.setMass$D.apply(this, [89.09]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.35]);
p$1.setNHHpKa$D.apply(this, [9.87]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 71:
p$1.setName$S.apply(this, ["Glycine"]);
p$1.setMass$D.apply(this, [75.07]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.35]);
p$1.setNHHpKa$D.apply(this, [9.78]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 70:
p$1.setName$S.apply(this, ["Phenylalanine"]);
p$1.setMass$D.apply(this, [165.19]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.58]);
p$1.setNHHpKa$D.apply(this, [9.24]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 89:
p$1.setName$S.apply(this, ["Tyrosine"]);
p$1.setMass$D.apply(this, [181.19]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.2]);
p$1.setNHHpKa$D.apply(this, [9.11]);
p$1.setSidechainPKa$D.apply(this, [10.07]);
break;
case 87:
p$1.setName$S.apply(this, ["Tryptophan"]);
p$1.setMass$D.apply(this, [204.23]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.38]);
p$1.setNHHpKa$D.apply(this, [9.39]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 84:
p$1.setName$S.apply(this, ["Threonine"]);
p$1.setMass$D.apply(this, [119.12]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.09]);
p$1.setNHHpKa$D.apply(this, [9.1]);
p$1.setSidechainPKa$D.apply(this, [-1]);
break;
case 67:
p$1.setName$S.apply(this, ["Cysteine"]);
p$1.setMass$D.apply(this, [121.16]);
p$1.setCharge$I.apply(this, [0]);
p$1.setCOOHpKa$D.apply(this, [2.05]);
p$1.setNHHpKa$D.apply(this, [10.25]);
p$1.setSidechainPKa$D.apply(this, [8.0]);
break;
default:
throw Clazz.new_(Clazz.load('main.java.MassSpec.AminoException').c$$S,["Incorrect symbol for amino acid = " + code]);
}
}, p$1);

Clazz.newMeth(C$, 'setName$S',  function (n) {
this.name=n;
}, p$1);

Clazz.newMeth(C$, 'setMass$D',  function (m) {
this.mass=m;
}, p$1);

Clazz.newMeth(C$, 'setCharge$I',  function (c) {
this.charge=c;
}, p$1);

Clazz.newMeth(C$, 'setHits$I',  function (h) {
this.hits=h;
});

Clazz.newMeth(C$, 'setCOOHpKa$D',  function (k) {
this.COOHpKa=k;
}, p$1);

Clazz.newMeth(C$, 'setNHHpKa$D',  function (k) {
this.NHHpKa=k;
}, p$1);

Clazz.newMeth(C$, 'setSidechainPKa$D',  function (k) {
this.sidechainPKa=k;
}, p$1);

Clazz.newMeth(C$, 'increaseCharge$',  function () {
this.charge=this.charge + 1;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getMass$',  function () {
return this.mass;
});

Clazz.newMeth(C$, 'getCharge$',  function () {
return this.charge;
});

Clazz.newMeth(C$, 'getMassChargeRatio$',  function () {
return this.mass / this.charge;
});

Clazz.newMeth(C$, 'getCOOHpKa$',  function () {
return this.COOHpKa;
});

Clazz.newMeth(C$, 'getNHHpKa$',  function () {
return this.NHHpKa;
});

Clazz.newMeth(C$, 'getSidechainPKa$',  function () {
return this.sidechainPKa;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:56 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
