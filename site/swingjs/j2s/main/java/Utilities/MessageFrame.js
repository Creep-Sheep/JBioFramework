(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'javax.swing.JPanel','javax.swing.JLabel','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MessageFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.theMessage="";
},1);

C$.$fields$=[['S',['theMessage'],'O',['panel','javax.swing.JPanel','label','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["Alert"]);C$.$init$.apply(this);
this.panel=Clazz.new_($I$(1,1));
this.label=Clazz.new_($I$(2,1).c$$S$I,[this.theMessage, 0]);
this.addWindowListener$java_awt_event_WindowListener(((P$.MessageFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MessageFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.MessageFrame$1)));
this.setBounds$I$I$I$I(20, 140, 600, 100);
this.panel.setBounds$I$I$I$I(0, 0, 600, 100);
this.label.setBounds$I$I$I$I(0, 0, 600, 100);
this.add$java_awt_Component(this.panel);
this.panel.add$java_awt_Component(this.label);
C$.superclazz.prototype.setVisible$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'setMessage$S',  function (message) {
this.theMessage=message;
this.label.setText$S(this.theMessage);
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
