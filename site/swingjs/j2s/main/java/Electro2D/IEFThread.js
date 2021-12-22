(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.IEFProtein',['javajs.async.SwingJSUtils','.StateHelper'],'main.java.Electro2D.GelCanvas']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IEFThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.go=false;
this.delay=1 ? 50 :250;
},1);

C$.$fields$=[['Z',['go'],'I',['delay'],'O',['gel','main.java.Electro2D.GelCanvas','electro2D','main.java.Electro2D.Electro2D','stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_GelCanvas$main_java_Electro2D_Electro2D',  function (g, e) {
Clazz.super_(C$, this);
this.gel=g;
this.electro2D=e;
}, 1);

Clazz.newMeth(C$, 'setIEF$',  function () {
this.go=true;
});

Clazz.newMeth(C$, 'resetIEF$',  function () {
this.go=false;
});

Clazz.newMeth(C$, 'run$',  function () {
if (this.go == true ) {
var finalWidth=$I$(1).returnWidth$();
if ($I$(1).returnTempWidth$() >= finalWidth ) {
this.gel.drawIEF$();
}this.stateHelper=Clazz.new_([((P$.IEFThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IEFThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (this.b$['main.java.Electro2D.IEFThread'].stateHelper.isAlive$()) {
if ($I$(1).returnTempWidth$() <= this.$finals$.finalWidth  && $I$(3).getBlue$() >= 0  && $I$(3).getGreen$() >= 0  && $I$(3).getRed$() >= 0 ) {
this.b$['main.java.Electro2D.IEFThread'].gel.animateIEF$();
this.b$['main.java.Electro2D.IEFThread'].stateHelper.sleep$I(this.b$['main.java.Electro2D.IEFThread'].delay);
} else {
this.b$['main.java.Electro2D.IEFThread'].gel.setRedrawPHLines$Z(true);
this.b$['main.java.Electro2D.IEFThread'].gel.repaint$();
this.b$['main.java.Electro2D.IEFThread'].electro2D.setSDS$();
}}return false;
});
})()
), Clazz.new_(P$.IEFThread$1.$init$,[this, {finalWidth:finalWidth}]))],$I$(2,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
