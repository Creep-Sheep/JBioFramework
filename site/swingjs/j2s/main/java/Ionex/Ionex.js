(function(){var P$=Clazz.newPackage("main.java.Ionex"),I$=[[0,'java.awt.Color','main.java.Ionex.CProtein','java.util.Vector','main.java.Ionex.ProteinFile','java.awt.BorderLayout','java.awt.MediaTracker','main.java.Ionex.ImageCanvas','java.awt.Panel','main.java.Ionex.IDD_DIALOG1','java.net.URL','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Ionex", null, 'java.applet.Applet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_dConc1=0.0;
this.m_dConc2=0.0;
this.m_nBuffer=0;
this.m_bPositiveResin=true;
this.m_arrProteinIndex=Clazz.array(Integer.TYPE, -1, [-1, -1, -1, -1, -1]);
this.m_cState="S";
this.m_nCharge=0;
this.m_nSolSpeed=0;
this.m_colors=Clazz.array($I$(1), -1, [$I$(1).red, $I$(1).green, $I$(1).blue, $I$(1).cyan, $I$(1).magenta, $I$(1).gray]);
this.COLLOY=25;
this.COLHIY=226;
},1);

C$.$fields$=[['Z',['m_bPositiveResin'],'C',['m_cState'],'D',['m_dConc1','m_dConc2'],'I',['m_nBuffer','m_nCharge','m_nSolSpeed','COLLOY','COLHIY'],'O',['m_controlPanel','java.awt.Panel','controls','main.java.Ionex.IDD_DIALOG1','m_imageCanvas','main.java.Ionex.ImageCanvas','m_arrProteins','main.java.Ionex.CProtein[]','m_arrSelProteins','java.util.Vector','m_arrProteinIndex','int[]','m_colors','java.awt.Color[]','m_arrAvailProteins','main.java.Ionex.ProteinFile[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.m_arrProteins=Clazz.array($I$(2), [5]);
this.m_arrSelProteins=Clazz.new_($I$(3,1).c$$I,[5]);
this.m_arrAvailProteins=Clazz.array($I$(4), [100]);
}, 1);

Clazz.newMeth(C$, ['getAppletInfo$','getAppletInfo'],  function () {
return "Name: Ionex\r\nAuthor: Kristen Cotton\r\nCreated with Microsoft Visual J++ Version 1.1";
});

Clazz.newMeth(C$, ['init$','init'],  function () {
var imageBkgd;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1)));
imageBkgd=this.getImage$java_net_URL$S(this.getCodeBase$(), "macro.gif");
var tracker=Clazz.new_($I$(6,1).c$$java_awt_Component,[this]);
tracker.addImage$java_awt_Image$I(imageBkgd, 0);
try {
tracker.waitForID$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
this.m_imageCanvas=Clazz.new_($I$(7,1).c$$main_java_Ionex_Ionex,[this]);
this.m_imageCanvas.setImage$java_awt_Image(imageBkgd);
this.add$S$java_awt_Component("Center", this.m_imageCanvas);
this.m_controlPanel=Clazz.new_($I$(8,1));
this.add$S$java_awt_Component("East", this.m_controlPanel);
var f=this.getFont$();
this.m_controlPanel.setFont$java_awt_Font(f);
this.controls=Clazz.new_($I$(9,1).c$$java_awt_Container,[this.m_controlPanel]);
this.controls.CreateControls$();
this.initControls$();
this.resetControls$();
this.setState$C("S");
this.controls.IDC_START.setEnabled$Z(false);
});

Clazz.newMeth(C$, ['destroy$','destroy'],  function () {
});

Clazz.newMeth(C$, ['paint$java_awt_Graphics','paint'],  function (g) {
if (this.m_imageCanvas != null ) this.m_imageCanvas.paint$java_awt_Graphics(g);
 else System.out.println$S("Ionex.paint imagecanvas Doesn\'t exist!");
});

Clazz.newMeth(C$, ['start$','start'],  function () {
});

Clazz.newMeth(C$, ['stop$','stop'],  function () {
this.m_imageCanvas.stop$();
});

Clazz.newMeth(C$, ['run$','run'],  function () {
});

Clazz.newMeth(C$, ['action$java_awt_Event$O','action'],  function (evt, arg) {
if (Clazz.instanceOf(evt.target, "java.awt.Button")) {
if (arg.equals$O("Reset Settings")) {
this.resetControls$();
return true;
}if (arg.equals$O("Load Experiment")) {
this.saveInput$();
return true;
}if (arg.equals$O("Add Protein")) {
this.addProtein$();
return true;
}if (arg.equals$O("Remove Protein")) {
this.removeProtein$();
return true;
}if (arg.equals$O("Start")) {
this.processStart$();
return true;
}if (arg.equals$O("Stop")) {
this.processStop$();
return true;
}if (arg.equals$O("Pause")) {
this.processPause$();
return true;
}}return false;
});

Clazz.newMeth(C$, 'initControls$',  function () {
try {
var url=Clazz.new_([this.getCodeBase$(), "pdb/pdb.idx"],$I$(10,1).c$$java_net_URL$S);
var reader=Clazz.new_([Clazz.new_([url.openStream$()],$I$(12,1).c$$java_io_InputStream)],$I$(11,1).c$$java_io_Reader);
var i=0;
var strLine=null;
while ((strLine=reader.readLine$()) != null ){
var nPos=strLine.indexOf$I("\t");
var strFile=strLine.substring$I(nPos + 1);
var strProtein=strLine.substring$I$I(0, nPos);
this.m_arrAvailProteins[i]=Clazz.new_($I$(4,1).c$$S$S,[strProtein, strFile]);
this.controls.IDC_SELECTPROTEIN.add$S$I(strProtein, i++);
}
reader.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
this.controls.IDC_SELECTPROTEIN.select$I(0);
});

Clazz.newMeth(C$, 'resetControls$',  function () {
this.controls.IDC_SOLVENTA.setText$S(( new Double(this.m_dConc1)).toString());
this.controls.IDC_SOLVENTB.setText$S(( new Double(this.m_dConc2)).toString());
switch (this.m_nBuffer) {
case 0:
this.controls.IDC_BUFFER1.setState$Z(true);
break;
case 1:
this.controls.IDC_BUFFER2.setState$Z(true);
break;
case 2:
default:
this.controls.IDC_BUFFER3.setState$Z(true);
break;
}
if (this.m_bPositiveResin) {
this.controls.IDC_POS.setState$Z(true);
} else {
this.controls.IDC_NEG.setState$Z(true);
}this.resetProteinList$();
});

Clazz.newMeth(C$, 'resetProteinList$',  function () {
var i;
this.controls.IDC_PROTEINS.removeAll$();
for (i=0; i < 5; i++) {
if (this.m_arrProteins[i] != null ) {
var protein=Clazz.new_([this.m_arrProteins[i].getName$(), this.m_arrProteins[i].getAmount$(), this.m_arrProteins[i].getFile$(), this.getPH$(), this],$I$(2,1).c$$S$I$S$D$main_java_Ionex_Ionex);
this.m_arrSelProteins.setElementAt$O$I(protein, i);
var strTemp= String.instantialize(String.valueOf$I(this.m_arrProteins[i].getAmount$()) + "mg " + this.m_arrProteins[i].getName$() );
this.controls.IDC_PROTEINS.add$S(strTemp);
} else {
if (this.m_arrSelProteins.size$() > i) {
this.m_arrSelProteins.removeElementAt$I(i);
}}}
if (this.controls.IDC_PROTEINS.getItemCount$() == 5) {
this.controls.IDC_ADD.setEnabled$Z(false);
} else {
this.controls.IDC_ADD.setEnabled$Z(true);
}if (this.controls.IDC_PROTEINS.getItemCount$() == 0) {
this.controls.IDC_REMOVE.setEnabled$Z(false);
} else {
this.controls.IDC_REMOVE.setEnabled$Z(true);
}});

Clazz.newMeth(C$, 'saveInput$',  function () {
this.m_imageCanvas.resetBackground$();
this.controls.IDC_START.setEnabled$Z(false);
this.showStatus$S("Please wait while the experiment is being loaded...");
this.m_dConc1= new Double(this.controls.IDC_SOLVENTA.getText$()).doubleValue$();
this.m_dConc2= new Double(this.controls.IDC_SOLVENTB.getText$()).doubleValue$();
this.m_bPositiveResin=this.controls.IDC_POS.getState$();
if (this.controls.IDC_BUFFER1.getState$()) {
this.m_nBuffer=0;
}if (this.controls.IDC_BUFFER2.getState$()) {
this.m_nBuffer=1;
}if (this.controls.IDC_BUFFER3.getState$()) {
this.m_nBuffer=2;
}for (var i=0; i < 5; i++) {
if (i < this.m_arrSelProteins.size$()) {
var p=this.m_arrSelProteins.elementAt$I(i);
var protein=Clazz.new_([p.getName$(), p.getAmount$(), p.getFile$(), this.getPH$(), this],$I$(2,1).c$$S$I$S$D$main_java_Ionex_Ionex);
protein.load$();
this.m_arrProteins[i]=protein;
} else {
this.m_arrProteins[i]=null;
}}
this.loadColumn$();
this.controls.IDC_START.setEnabled$Z(true);
this.showStatus$S("The experiment has been loaded and is ready to run.");
this.m_imageCanvas.prepareBackground$();
});

Clazz.newMeth(C$, ['removeProtein$','removeProtein'],  function () {
var nSelItem;
nSelItem=this.controls.IDC_PROTEINS.getSelectedIndex$();
if ((nSelItem < 0) || (nSelItem > 4) ) {
return;
}this.controls.IDC_PROTEINS.remove$I(nSelItem);
this.controls.IDC_ADD.setEnabled$Z(true);
this.m_arrSelProteins.removeElementAt$I(nSelItem);
this.checkAddRemove$();
});

Clazz.newMeth(C$, 'checkAddRemove$',  function () {
if (this.m_arrSelProteins.size$() <= 0) {
this.controls.IDC_REMOVE.setEnabled$Z(false);
} else {
this.controls.IDC_REMOVE.setEnabled$Z(true);
}if (this.m_arrSelProteins.size$() >= 5) {
this.controls.IDC_ADD.setEnabled$Z(false);
} else {
this.controls.IDC_ADD.setEnabled$Z(true);
}});

Clazz.newMeth(C$, ['addProtein$','addProtein'],  function () {
var nAmount=0;
var strName;
var strFile;
var j=0;
strName= String.instantialize(this.controls.IDC_SELECTPROTEIN.getSelectedItem$());
j=this.controls.IDC_SELECTPROTEIN.getSelectedIndex$();
strFile=this.m_arrAvailProteins[j].getFile$();
var strAmount=this.controls.IDC_AMOUNT.getText$();
if (strAmount.equals$O("")) {
nAmount=0;
} else {
nAmount= new Integer(strAmount).intValue$();
}for (var i=0; i < this.m_arrSelProteins.size$(); i++) {
var p=this.m_arrSelProteins.elementAt$I(i);
if (strFile.equals$O(p.getFile$())) {
var nNewAmount=p.getAmount$() + nAmount;
p.setAmount$I(nNewAmount);
this.controls.IDC_PROTEINS.remove$I(i);
this.controls.IDC_PROTEINS.add$S$I(String.valueOf$I(nNewAmount) + "mg " + strName , i);
return;
}}
this.m_arrSelProteins.addElement$O(Clazz.new_([strName, nAmount, strFile, this.getPH$(), this],$I$(2,1).c$$S$I$S$D$main_java_Ionex_Ionex));
this.controls.IDC_PROTEINS.add$S(strAmount + "mg " + strName );
this.checkAddRemove$();
});

Clazz.newMeth(C$, ['processStart$','processStart'],  function () {
if (this.m_cState == "S") {
this.loadColumn$();
this.m_imageCanvas.prepareBackground$();
}this.setState$C("R");
this.showStatus$S("The experiment is running");
this.m_imageCanvas.start$();
});

Clazz.newMeth(C$, ['processStop$','processStop'],  function () {
this.setState$C("S");
this.showStatus$S("The experiment has stopped");
this.m_imageCanvas.stop$();
});

Clazz.newMeth(C$, ['processPause$','processPause'],  function () {
this.setState$C("P");
this.showStatus$S("The experiment is paused");
this.m_imageCanvas.pause$();
});

Clazz.newMeth(C$, ['setState$C','setState'],  function (cState) {
this.m_cState=cState;
switch (cState.$c()) {
case 83:
this.controls.IDC_PAUSE.setEnabled$Z(false);
this.controls.IDC_STOP.setEnabled$Z(false);
this.controls.IDC_START.setEnabled$Z(true);
this.controls.IDC_UPDATE.setEnabled$Z(true);
this.controls.IDC_RESET.setEnabled$Z(true);
break;
case 82:
this.controls.IDC_PAUSE.setEnabled$Z(true);
this.controls.IDC_STOP.setEnabled$Z(true);
this.controls.IDC_START.setEnabled$Z(false);
this.controls.IDC_UPDATE.setEnabled$Z(false);
this.controls.IDC_RESET.setEnabled$Z(false);
break;
case 80:
this.controls.IDC_PAUSE.setEnabled$Z(false);
this.controls.IDC_STOP.setEnabled$Z(true);
this.controls.IDC_START.setEnabled$Z(true);
this.controls.IDC_UPDATE.setEnabled$Z(false);
this.controls.IDC_RESET.setEnabled$Z(false);
break;
}
});

Clazz.newMeth(C$, 'getPH$',  function () {
switch (this.m_nBuffer) {
case 0:
return 4.8;
case 1:
return 7.2;
case 2:
return 8.0;
}
return 0.0;
});

Clazz.newMeth(C$, 'loadColumn$',  function () {
var protein;
var nPos=1;
var arrCharge=Clazz.array(Double.TYPE, -1, [0, 0, 0, 0, 0]);
var nTemp;
var i;
var j;
for (i=0; i < this.m_arrProteins.length; i++) {
if (this.m_arrProteins[i] == null ) {
continue;
}protein=this.m_arrProteins[i];
if (((!this.m_bPositiveResin) && (protein.m_dCharge <= this.m_dConc1 * 100 ) ) || ((this.m_bPositiveResin) && (protein.m_dCharge >= -this.m_dConc1 * 100 ) ) ) {
protein.m_bBound=false;
protein.m_nBandwidth=3;
} else {
protein.m_bBound=true;
protein.m_nBandwidth=(protein.m_nAmount/2|0);
arrCharge[i]=Math.abs(protein.m_dCharge);
}}
for (i=0; i < this.m_arrProteins.length; i++) {
if (this.m_arrProteins[i] == null ) {
continue;
}nTemp=i;
for (j=0; j < this.m_arrProteins.length; j++) {
if (arrCharge[j] > arrCharge[nTemp] ) {
nTemp=j;
}}
protein=this.m_arrProteins[nTemp];
protein.m_nPos=nPos;
if (protein.m_bBound) {
nPos+=protein.m_nBandwidth;
if (protein.m_nPos + protein.m_nBandwidth > 201) {
protein.m_nBandwidth=(200) - protein.m_nPos;
protein.m_nAmount=protein.m_nBandwidth * 2;
}}if (protein.m_nPos > 201) {
protein.m_nBandwidth=0;
protein.m_nAmount=0;
}arrCharge[nTemp]=-1;
}
nTemp=-1;
for (i=0; i < this.m_arrProteins.length; i++) {
if (this.m_arrProteins[i] == null ) {
continue;
}protein=this.m_arrProteins[i];
if (protein.m_bBound == false ) {
if (nTemp == -1) {
nTemp=i;
} else {
protein.m_bMix=true;
protein=this.m_arrProteins[nTemp];
protein.m_bMix=true;
}}}
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
