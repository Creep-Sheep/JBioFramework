(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'javax.swing.JPanel','javax.swing.BoxLayout','java.awt.FlowLayout','javax.swing.JButton','main.java.MassSpec.MassSpecMain','main.java.MainWindows.JBioFrameworkMain','javax.swing.JLabel','java.awt.BorderLayout','main.java.Utilities.BrowserLauncher']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProteinFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.searchID=null;
this.swsSearchID=null;
this.proteinFunction="";
},1);

C$.$fields$=[['S',['proteinTitle','ptTruncated','searchID','swsSearchID','sequenceString','proteinFunction'],'O',['electro2D','main.java.Electro2D.Electro2D','proteinInfoPanel','javax.swing.JPanel','+searchPanel','titleLabel','javax.swing.JLabel','+mwLabel','+piLabel','+functionLabel']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D$S$I',  function (e, pt, filenum) {
Clazz.super_(C$, this);
this.electro2D=e;
this.proteinTitle=pt;
this.ptTruncated=this.proteinTitle;
this.setTitle$S("Protein Information");
this.proteinInfoPanel=Clazz.new_($I$(1,1));
this.searchPanel=Clazz.new_($I$(1,1));
this.proteinInfoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$java_awt_Container$I,[this.proteinInfoPanel, 1]));
this.searchPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.setDefaultCloseOperation$I(2);
this.setLocationByPlatform$Z(true);
this.proteinFunction=this.electro2D.getFunctionbyTitle$S(this.proteinTitle);
this.proteinFunction=this.proteinFunction.trim$();
this.sequenceString=this.electro2D.getSequencebyTitle$S(this.proteinTitle);
var blstSearch=Clazz.new_($I$(4,1).c$$S,["Blast Search"]);
blstSearch.setToolTipText$S("Performs BLAST search for the protein sequence");
blstSearch.addActionListener$java_awt_event_ActionListener(((P$.ProteinFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProteinFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.ProteinFrame'].search$S.apply(this.b$['main.java.Electro2D.ProteinFrame'], ["blast"]);
});
})()
), Clazz.new_(P$.ProteinFrame$1.$init$,[this, null])));
var index=this.proteinTitle.indexOf$S("|");
if (index != -1) {
this.searchID=this.proteinTitle.substring$I(index + 1);
index=this.searchID.indexOf$S("|");
while (index != -1 && index != this.searchID.lastIndexOf$S("|") ){
this.searchID=this.searchID.substring$I$I(index + 1, this.searchID.lastIndexOf$S("|"));
index=this.searchID.indexOf$S("|");
}
if (index != -1) {
this.searchID=this.searchID.substring$I(index + 1);
}} else if (index == -1) {
index=this.proteinTitle.indexOf$S(";");
if (index != -1) {
this.searchID=this.proteinTitle.substring$I$I(0, index);
} else {
this.searchID=this.proteinTitle;
}}var ncbiSearch=Clazz.new_($I$(4,1).c$$S,["NCBI Search"]);
ncbiSearch.setToolTipText$S("Performs NCBI search for the protein sequence");
ncbiSearch.addActionListener$java_awt_event_ActionListener(((P$.ProteinFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProteinFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.ProteinFrame'].search$S.apply(this.b$['main.java.Electro2D.ProteinFrame'], ["entrez"]);
});
})()
), Clazz.new_(P$.ProteinFrame$2.$init$,[this, null])));
if (this.proteinTitle.indexOf$S("|") < 0) {
this.swsSearchID=this.proteinTitle;
} else {
this.swsSearchID=this.proteinTitle.substring$I$I(4, this.proteinTitle.lastIndexOf$S("|"));
this.swsSearchID=this.swsSearchID.substring$I(this.swsSearchID.lastIndexOf$S("|") + 1);
}var uniSearch=Clazz.new_($I$(4,1).c$$S,["Uniprot Search"]);
uniSearch.setToolTipText$S("Performs Uniprot search for the protein sequence");
uniSearch.addActionListener$java_awt_event_ActionListener(((P$.ProteinFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProteinFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.ProteinFrame'].search$S.apply(this.b$['main.java.Electro2D.ProteinFrame'], ["uniprot"]);
});
})()
), Clazz.new_(P$.ProteinFrame$3.$init$,[this, null])));
var sendToSpec=Clazz.new_($I$(4,1).c$$S,["Run Mass Spectrum"]);
sendToSpec.setToolTipText$S("Send protein sequence to Mass Spec for analysis");
sendToSpec.addActionListener$java_awt_event_ActionListener(((P$.ProteinFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProteinFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var input=$I$(5).getInputArea$();
input.setText$S(this.b$['main.java.Electro2D.ProteinFrame'].sequenceString);
$I$(6).getTabs$().setSelectedIndex$I(3);
});
})()
), Clazz.new_(P$.ProteinFrame$4.$init$,[this, null])));
this.titleLabel=Clazz.new_($I$(7,1).c$$S,[this.ptTruncated]);
this.mwLabel=Clazz.new_(["Molecular Weight (MW): " + this.electro2D.getMWbyTitle$S(this.proteinTitle)],$I$(7,1).c$$S);
this.piLabel=Clazz.new_(["pI Value (pI): " + this.electro2D.getPIbyTitle$S(this.proteinTitle)],$I$(7,1).c$$S);
this.functionLabel=Clazz.new_($I$(7,1).c$$S,["Function: " + this.proteinFunction]);
this.add$java_awt_Component(this.proteinInfoPanel);
this.proteinInfoPanel.add$java_awt_Component(this.titleLabel);
this.proteinInfoPanel.add$java_awt_Component(this.mwLabel);
this.proteinInfoPanel.add$java_awt_Component(this.piLabel);
this.proteinInfoPanel.add$java_awt_Component(this.functionLabel);
this.searchPanel.add$java_awt_Component(blstSearch);
this.searchPanel.add$java_awt_Component(ncbiSearch);
this.searchPanel.add$java_awt_Component(uniSearch);
this.searchPanel.add$java_awt_Component(sendToSpec);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
this.add$java_awt_Component$O(this.proteinInfoPanel, "North");
this.add$java_awt_Component$O(this.searchPanel, "Center");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'search$S',  function (type) {
var url;
switch (type) {
case "uniprot":
url="http://www.uniprot.org/uniprot/?query=" + this.swsSearchID;
break;
case "blast":
url="http://web.expasy.org/cgi-bin/blast/blast.pl?sequence=" + this.sequenceString;
break;
case "entrez":
url="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=protein&cmd=search&term=" + this.searchID;
break;
default:
System.err.println$S("ProteinFrame.search " + type + " invalid type" );
return;
}
try {
$I$(9).openURL$S(url);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("ProteinFrame.search URL did not work for " + url);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
