(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,['javajs.async.SwingJSUtils','.StateHelper'],'main.java.Electro2D.GelCanvas','main.java.Electro2D.ProteinDot','main.java.Electro2D.IEFProtein']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DotThread", null, 'Thread', [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.delay=10 ||100;
},1);

C$.$fields$=[['I',['loop_i','delay'],'J',['tm'],'O',['gel','main.java.Electro2D.GelCanvas','electro2D','main.java.Electro2D.Electro2D','stateHelper','javajs.async.SwingJSUtils.StateHelper']]
,['Z',['go']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
Clazz.super_(C$, this);
this.gel=e.getGel$();
this.electro2D=e;
}, 1);

Clazz.newMeth(C$, 'stopDots$',  function () {
C$.go=false;
});

Clazz.newMeth(C$, 'getDotState$',  function () {
return C$.go;
}, 1);

Clazz.newMeth(C$, 'startDots$',  function () {
C$.go=true;
});

Clazz.newMeth(C$, 'run$',  function () {
this.stateHelper=Clazz.new_($I$(1,1).c$$javajs_async_SwingJSUtils_StateMachine,[this]);
this.stateHelper.next$I(0);
});

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (this.stateHelper.isAlive$()) {
switch (this.stateHelper.getState$()) {
case 0:
$I$(2).stopBlink$();
$I$(3,"setPercent$D$D",[this.electro2D.getLowPercent$(), this.electro2D.getHighPercent$()]);
this.gel.setRedrawPHLines$Z(false);
this.stateHelper.next$I(1);
break;
case 1:
if ($I$(4).returnHeight$() > 0) {
$I$(4).shrinkProtein$();
this.gel.shrinkIEF$();
this.stateHelper.sleep$I(this.delay);
break;
}if ($I$(3).getShow$() == false ) {
$I$(3).setShow$();
}this.loop_i=0;
this.tm=System.currentTimeMillis$();
this.stateHelper.next$I(2);
break;
case 2:
if (C$.go) {
this.gel.genDots$();
if (Long.$ge(Long.$sub(System.currentTimeMillis$(),this.tm),10000 )) {
this.stopDots$();
}this.loop_i=1 + this.loop_i;
this.stateHelper.sleep$I(this.delay);
break;
}this.gel.setRedrawPHLines$Z(true);
this.gel.setMWLines$I(this.loop_i);
this.loop_i=0;
this.electro2D.resetPlay$();
this.gel.repaint$();
break;
}
}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.go=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
