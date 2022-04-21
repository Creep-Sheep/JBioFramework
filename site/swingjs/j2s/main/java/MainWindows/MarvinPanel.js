(function(){var P$=Clazz.newPackage("main.java.MainWindows"),I$=[[0,'main.java.Utilities.JSUtil','main.java.MainWindows.MarvinPanel','javax.swing.SwingUtilities','chemaxon.marvin.beans.MSketchPane','javax.swing.JPanel','javax.swing.JLabel','java.awt.Dimension','chemaxon.marvin.common.UserSettings','javax.swing.JFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MarvinPanel", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['defaultWidth','defaultHeight','state'],'S',['apiID','marvinDiv'],'O',['marvinInstance','chemaxon.marvin.beans.MSketchPane','instance','main.java.MainWindows.MarvinPanel','whenChemicalizeCreated','Runnable','labelWorking','javax.swing.JLabel','marvinAppPanel','java.awt.Container','myclass','java.lang.Object']]]

Clazz.newMeth(C$, 'setupMarvinJS$',  function () {
var serverScript="https://marvinjs.chemicalize.com/v1/" + C$.apiID + "/client-settings.js" ;
var clientScript="https://marvinjs.chemicalize.com/v1/client.js";
var div="<div style='display:none;width:" + C$.defaultWidth + "px;height:" + C$.defaultHeight + "px' id=" + C$.marvinDiv + "></div>" ;
System.out.println$S(serverScript + "\n" + clientScript + "\n" + div );
var r=((P$.MarvinPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MarvinPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).state=1;
if ($I$(2).whenChemicalizeCreated != null ) $I$(2).whenChemicalizeCreated.run$();
});
})()
), Clazz.new_(P$.MarvinPanel$1.$init$,[this, null]));
{
$("body").append(div);
}
$I$(3,"invokeLater$Runnable",[(P$.MarvinPanel$lambda1$||(P$.MarvinPanel$lambda1$=(((P$.MarvinPanel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "MarvinPanel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {

$.getScript(serverScript, function() { $.getScript(clientScript, r.run$) });
});
})()
), Clazz.new_(P$.MarvinPanel$lambda1.$init$,[this, null])))))]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'createMarvinPanel$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
if ($I$(1).isJS) C$.addPanel$java_awt_Container(null);
 else C$.getMarvinApp$Runnable(null);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getMarvinApp$Runnable',  function (whenReady) {
if (C$.marvinInstance != null ) {
if (whenReady != null ) whenReady.run$();
return;
}if ($I$(1).isJS) {
C$.createMarvinEditorJS$Runnable(whenReady);
return;
}C$.marvinInstance=Clazz.new_([C$.createUserSettingsJava$()],$I$(4,1).c$$chemaxon_marvin_common_UserSettings);
C$.addPanel$java_awt_Container(C$.marvinInstance);
if (whenReady != null ) whenReady.run$();
}, 1);

Clazz.newMeth(C$, 'createMarvinEditorJS$Runnable',  function (whenReady) {
C$.transferMarvinDivIfYouCanJS$();
var marvinReady=((P$.MarvinPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MarvinPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$O',  function (marvinObject) {
$I$(2).marvinInstance=marvinObject;
if ($I$(2).labelWorking != null ) $I$(2).labelWorking.setVisible$Z(false);
if (this.$finals$.whenReady != null ) this.$finals$.whenReady.run$();
});
})()
), Clazz.new_(P$.MarvinPanel$2.$init$,[this, {whenReady:whenReady}]));
try {
if (C$.labelWorking != null ) C$.labelWorking.setText$S("loading Marvin JS...");

ChemicalizeMarvinJs.createEditor("#" + C$.marvinDiv).then(function(m){marvinReady.accept$O(m)});
} catch (e) {
System.err.println$O(e);
}
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) {
C$.getMarvinApp$Runnable(null);
}});

Clazz.newMeth(C$, 'addPanel$java_awt_Container',  function (marvin) {
C$.marvinAppPanel=(marvin == null  ? Clazz.new_($I$(5,1)) : marvin);
if (marvin == null ) C$.marvinAppPanel.add$java_awt_Component(C$.labelWorking=Clazz.new_($I$(6,1).c$$S,["working..."]));
C$.marvinAppPanel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[C$.defaultWidth, C$.defaultHeight]));
C$.instance.add$java_awt_Component(C$.marvinAppPanel);
C$.instance.validate$();
if ($I$(1).isJS) {
C$.transferMarvinDivIfYouCanJS$();
}}, 1);

Clazz.newMeth(C$, 'transferMarvinDivIfYouCanJS$',  function () {
var panel=C$.marvinAppPanel;
var mdiv="#" + C$.marvinDiv;

var d = $(panel.ui.domNode);
var m = $(mdiv);
d[0] && m.parent().is($("body")) && d.append(m.show());
return;
}, 1);

Clazz.newMeth(C$, 'setMoleculeByName$S',  function (mol) {
var c=C$.myclass;
C$.getMarvinApp$Runnable((P$.MarvinPanel$lambda2$||(P$.MarvinPanel$lambda2$=(((P$.MarvinPanel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "MarvinPanel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
{
c.marvinInstance.importStructure("name", mol);
}
});
})()
), Clazz.new_(P$.MarvinPanel$lambda2.$init$,[this, null]))))));
}, 1);

Clazz.newMeth(C$, 'createUserSettingsJava$',  function () {
var settings=Clazz.new_([Clazz.getClass(C$).getResourceAsStream$S("marvin.properties")],$I$(8,1).c$$java_io_InputStream);
settings.setProperty$S$S("menuconfig", System.getProperty$S("user.dir") + "/src/customization.xml");
settings.setProperty$S$S("shortcuts", System.getProperty$S("user.dir") + "/src/shortcuts.xml");
settings.setProperty$S$S("ttmpls20", ":specials:specialTemplates.mrv");
return settings;
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
C$.whenChemicalizeCreated=((P$.MarvinPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MarvinPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
$I$(2).whenChemicalizeCreated=null;
var frame=Clazz.new_($I$(9,1));
frame.add$java_awt_Component($I$(2).createMarvinPanel$());
frame.pack$();
frame.setVisible$Z(true);
$I$(2,"getMarvinApp$Runnable",[(P$.MarvinPanel$3$lambda3$||(P$.MarvinPanel$3$lambda3$=(((P$.MarvinPanel$3$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "MarvinPanel$3$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
$I$(2).setMoleculeByName$S("Glycyl-Alanine");
});
})()
), Clazz.new_(P$.MarvinPanel$3$lambda3.$init$,[this, null])))))]);
});
})()
), Clazz.new_(P$.MarvinPanel$3.$init$,[this, null]));
if (!$I$(1).isJS || C$.state == 1 ) C$.whenChemicalizeCreated.run$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.apiID="2d2e4f98e04447babfbef7ae1e830756";
C$.defaultWidth=900;
C$.defaultHeight=500;
C$.marvinDiv="jbfmarvindiv";
C$.state=0;
C$.myclass=C$ ||null;
{
if ($I$(1).isJS) {
C$.setupMarvinJS$();
}};
};
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
