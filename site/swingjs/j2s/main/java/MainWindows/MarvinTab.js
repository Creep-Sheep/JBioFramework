(function(){var P$=Clazz.newPackage("main.java.MainWindows"),p$1={},I$=[[0,'main.java.MainWindows.MarvinTab','javax.swing.JPanel','javax.swing.BoxLayout','chemaxon.marvin.beans.MSketchPane','java.awt.Dimension','chemaxon.marvin.common.UserSettings']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MarvinTab", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sketchPanel','javax.swing.JPanel','+mainPanel']]
,['O',['marvinPane','chemaxon.marvin.beans.MSketchPane','instance','main.java.MainWindows.MarvinTab']]]

Clazz.newMeth(C$, 'createMainPanel$',  function () {
C$.instance=this;
var topPanel=((P$.MarvinTab$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MarvinTab$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JPanel'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setVisible$Z',  function (tf) {
$I$(1).getSketchPane$();
});
})()
), Clazz.new_($I$(2,1),[this, null],P$.MarvinTab$1));
this.sketchPanel=Clazz.new_($I$(2,1));
topPanel.add$java_awt_Component(this.sketchPanel);
this.mainPanel=Clazz.new_($I$(2,1));
this.mainPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$java_awt_Container$I,[this.mainPanel, 1]));
this.mainPanel.add$java_awt_Component(topPanel);
return this.mainPanel;
});

Clazz.newMeth(C$, 'getSketchPane$',  function () {
if (C$.marvinPane == null ) {
C$.marvinPane=p$1.createSketchPane.apply(C$.instance, []);
C$.instance.sketchPanel.add$java_awt_Component(C$.marvinPane);
C$.instance.mainPanel.validate$();
}return C$.marvinPane;
}, 1);

Clazz.newMeth(C$, 'createSketchPane',  function () {
var pane=Clazz.new_([p$1.createUserSettings.apply(this, [])],$I$(4,1).c$$chemaxon_marvin_common_UserSettings);
pane.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5,1).c$$I$I,[900, 500]));
return pane;
}, p$1);

Clazz.newMeth(C$, 'createUserSettings',  function () {
var settings=Clazz.new_([this.getClass$().getResourceAsStream$S("marvin.properties")],$I$(6,1).c$$java_io_InputStream);
settings.setProperty$S$S("menuconfig", System.getProperty$S("user.dir") + "/src/customization.xml");
settings.setProperty$S$S("shortcuts", System.getProperty$S("user.dir") + "/src/shortchuts.xml");
settings.setProperty$S$S("ttmpls20", ":specials:specialTemplates.mrv");
return settings;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-26 10:28:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
