(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'main.java.Electro2D.E2DProtein','java.awt.Frame','main.java.Electro2D.ColorFrame','java.awt.event.WindowAdapter','java.awt.Panel','java.awt.GridLayout','java.awt.Label','java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorFrame");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['colorPanel','java.awt.Panel']]
,['O',['colorFrame','java.awt.Frame']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var colorKey=$I$(1).getColorGuide$();
C$.colorFrame=Clazz.new_($I$(2,1).c$$S,["Color Key"]);
C$.colorFrame.addWindowListener$java_awt_event_WindowListener(((P$.ColorFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColorFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(3).colorFrame.setVisible$Z(false);
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent',  function (e) {
this.windowClosing$java_awt_event_WindowEvent(e);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.ColorFrame$1)));
this.colorPanel=Clazz.new_($I$(5,1));
this.colorPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1).c$$I$I,[0, 1]));
for (var labelStrings, $labelStrings = 0, $$labelStrings = colorKey; $labelStrings<$$labelStrings.length&&((labelStrings=($$labelStrings[$labelStrings])),1);$labelStrings++) {
var colorLabel=Clazz.new_($I$(7,1).c$$S$I,[labelStrings[0], 1]);
var backColor=Clazz.new_([Integer.parseInt$S(labelStrings[1])],$I$(8,1).c$$I);
colorLabel.setBackground$java_awt_Color(backColor);
var Luminance=(((backColor.getRed$() * 299) + (backColor.getGreen$() * 587) + (backColor.getBlue$() * 114) )/1000|0);
if (Luminance <= 125 ) {
colorLabel.setForeground$java_awt_Color($I$(8).WHITE);
} else {
colorLabel.setForeground$java_awt_Color($I$(8).BLACK);
}this.colorPanel.add$java_awt_Component(colorLabel);
}
C$.colorFrame.setBounds$I$I$I$I(0, 0, 400, (42) * colorKey.length);
this.colorPanel.setBounds$I$I$I$I(0, 0, 400, (42) * colorKey.length);
C$.colorFrame.add$java_awt_Component(this.colorPanel);
}, 1);

Clazz.newMeth(C$, 'showKey$',  function () {
C$.colorFrame.pack$();
C$.colorFrame.setVisible$Z(true);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
