(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.ColorFrame']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlayE2AnimationButton", null, 'javax.swing.JButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['sdsPlaying','iefDrawn','sdsDrawn'],'S',['choice'],'O',['electro2D','main.java.Electro2D.Electro2D']]
,['Z',['compareFiles']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.superclazz.c$$S.apply(this,["Start"]);C$.$init$.apply(this);
this.addActionListener$java_awt_event_ActionListener(this);
this.electro2D=e;
this.sdsPlaying=false;
this.iefDrawn=false;
this.sdsDrawn=false;
C$.compareFiles=false;
this.setHoverText$();
}, 1);

Clazz.newMeth(C$, 'getSdsStatus$',  function () {
return this.sdsDrawn;
});

Clazz.newMeth(C$, 'resetPlay$',  function () {
this.sdsPlaying=false;
this.setText$S("Start");
});

Clazz.newMeth(C$, 'resetIEF$',  function () {
this.iefDrawn=false;
});

Clazz.newMeth(C$, 'resetSdsStatus$',  function () {
this.sdsDrawn=false;
});

Clazz.newMeth(C$, 'setCompare$Z',  function (bool) {
C$.compareFiles=bool;
}, 1);

Clazz.newMeth(C$, 'setHoverText$',  function () {
if (this.sdsPlaying) {
C$.superclazz.prototype.setText$S.apply(this, ["Stop"]);
this.setToolTipText$S("Stop separation");
} else if (!this.iefDrawn && !this.sdsDrawn ) {
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Start IEF pH separation"]);
} else if (this.iefDrawn && !this.sdsDrawn ) {
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Start SDS-Page separation"]);
} else if (this.iefDrawn && this.sdsDrawn && !this.sdsPlaying  ) {
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Press \'Restart\' to start over."]);
} else {
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Press \'Add Proteins\' to begin"]);
}});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.sdsPlaying) {
C$.superclazz.prototype.setText$S.apply(this, ["Stop"]);
C$.superclazz.prototype.setToolTipText$S.apply(this, ["Stop Separation"]);
this.electro2D.stopThread$();
this.sdsPlaying=false;
} else {
this.electro2D.clearpH$();
this.choice=this.electro2D.getAnimationChoice$();
if (this.electro2D.getSequencesReady$()) {
if (this.choice.equals$O("IEF")) {
this.electro2D.getGel$().prepare$();
this.electro2D.resetBool$();
if (C$.compareFiles) {
this.electro2D.getGel$().prepare2$();
}}if (this.choice.equals$O("IEF")) {
if (!this.iefDrawn) {
this.electro2D.restartIEF$();
this.iefDrawn=true;
this.electro2D.getGel$().setRedrawPHLines$Z(false);
}} else if (this.choice.equals$O("SDS-PAGE")) {
if (this.iefDrawn) {
this.electro2D.getGel$().resetLocation$();
this.electro2D.clearpH$();
this.sdsPlaying=true;
this.electro2D.restartThread$();
this.sdsDrawn=true;
Clazz.new_($I$(1,1)).showKey$();
}}this.setHoverText$();
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
