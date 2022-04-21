(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,['javajs.async.SwingJSUtils','.StateHelper'],'main.java.Electro2D.GelCanvas','main.java.Electro2D.DotThread','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BlinkThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['theDot','main.java.Electro2D.ProteinDot','theGel','main.java.Electro2D.GelCanvas','stateHelper','javajs.async.SwingJSUtils.StateHelper']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_ProteinDot$main_java_Electro2D_GelCanvas',  function (p, g) {
Clazz.super_(C$, this);
this.theGel=g;
this.theDot=p;
}, 1);

Clazz.newMeth(C$, 'run$',  function () {
this.stateHelper=Clazz.new_([((P$.BlinkThread$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BlinkThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['javajs.async.SwingJSUtils','javajs.async.SwingJSUtils.StateMachine']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateLoop$',  function () {
if (!this.b$['main.java.Electro2D.BlinkThread'].stateHelper.isAlive$()) {
switch (this.b$['main.java.Electro2D.BlinkThread'].stateHelper.getState$()) {
case 0:
if (!$I$(2).getBlink$()) {
this.b$['main.java.Electro2D.BlinkThread'].stateHelper.sleep$I(20);
break;
}this.b$['main.java.Electro2D.BlinkThread'].stateHelper.next$I(1);
break;
case 1:
if ($I$(2).getBlink$() && !$I$(3).getDotState$() ) {
if (this.b$['main.java.Electro2D.BlinkThread'].theDot.getColor$() === $I$(4).RED ) {
this.b$['main.java.Electro2D.BlinkThread'].theDot.changeColor$java_awt_Color($I$(4).GREEN);
} else {
this.b$['main.java.Electro2D.BlinkThread'].theDot.changeColor$java_awt_Color($I$(4).RED);
}this.b$['main.java.Electro2D.BlinkThread'].theGel.repaint$();
this.b$['main.java.Electro2D.BlinkThread'].stateHelper.sleep$I(1000);
} else {
this.b$['main.java.Electro2D.BlinkThread'].theDot.changeColor$java_awt_Color($I$(4).GREEN);
}break;
}
}return false;
});
})()
), Clazz.new_(P$.BlinkThread$1.$init$,[this, null]))],$I$(1,1).c$$javajs_async_SwingJSUtils_StateMachine);
this.stateHelper.next$I(0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
