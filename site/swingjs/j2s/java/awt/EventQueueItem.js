(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventQueueItem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['event','java.awt.AWTEvent','next','java.awt.EventQueueItem']]]

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent',  function (evt) {
;C$.$init$.apply(this);
this.event=evt;
this.id=evt.getID$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:25:01 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
