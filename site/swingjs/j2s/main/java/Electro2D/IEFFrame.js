(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.Font','javax.swing.JPanel','java.awt.Color','java.awt.event.WindowAdapter','java.awt.Label','java.awt.Dimension','javax.swing.JScrollPane']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IEFFrame", null, 'java.awt.Frame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['maxRange','minRange'],'O',['IEFPanel','javax.swing.JPanel','dimensions','java.awt.Rectangle','ief','main.java.Electro2D.IEFProtein','theFont','java.awt.Font','scroll','javax.swing.JScrollPane']]
,['I',['xlocation','ylocation']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_IEFProtein',  function (i) {
Clazz.super_(C$, this);
this.theFont=Clazz.new_($I$(1,1).c$$S$I$I,["Arial", 0, 12]);
this.ief=i;
this.maxRange=Double.toString$D(this.ief.getMaxPI$());
this.minRange=Double.toString$D(this.ief.getMinPI$());
this.setTitle$S(this.minRange + " - " + this.maxRange );
this.IEFPanel=Clazz.new_($I$(2,1));
this.IEFPanel.setLayout$java_awt_LayoutManager(null);
this.IEFPanel.setBackground$java_awt_Color(Clazz.new_($I$(3,1).c$$I$I$I,[202, 225, 255]));
this.addWindowListener$java_awt_event_WindowListener(((P$.IEFFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IEFFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.IEFFrame$1)));
this.setBounds$I$I$I$I(C$.xlocation, C$.ylocation, 415, 500);
this.dimensions=this.getBounds$();
this.IEFPanel.setBounds$I$I$I$I(0, 0, this.dimensions.width, this.dimensions.height);
this.IEFPanel.scrollRectToVisible$java_awt_Rectangle(this.dimensions);
var v=i.getNames$();
var location=30;
for (var j=0; j < v.size$(); j++) {
var l=Clazz.new_([v.elementAt$I(j)],$I$(5,1).c$$S);
l.setBounds$I$I$I$I(5, location, 390, 20);
l.setFont$java_awt_Font(this.theFont);
location=location + 15;
this.IEFPanel.add$java_awt_Component(l);
}
if (this.dimensions.height < location) {
this.IEFPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[this.dimensions.width, location]));
this.dimensions=this.IEFPanel.getBounds$();
this.IEFPanel.scrollRectToVisible$java_awt_Rectangle(this.dimensions);
} else {
this.IEFPanel.setBounds$I$I$I$I(0, 0, this.dimensions.width, this.dimensions.height);
}this.scroll=Clazz.new_($I$(7,1).c$$java_awt_Component,[this.IEFPanel]);
this.scroll.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6,1).c$$I$I,[415, 500]));
this.scroll.setWheelScrollingEnabled$Z(true);
this.add$java_awt_Component(this.scroll);
C$.xlocation=C$.xlocation + 10;
C$.ylocation=C$.ylocation + 20;
if (C$.ylocation > 500) {
C$.ylocation=0;
}if (C$.xlocation > 500) {
C$.xlocation=5;
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.xlocation=0;
C$.ylocation=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
