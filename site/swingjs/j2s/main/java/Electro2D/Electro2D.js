(function(){var P$=Clazz.newPackage("main.java.Electro2D"),p$1={},I$=[[0,'java.util.Vector','main.java.Utilities.GenomeFileParser','main.java.Electro2D.SingleProteinListFrame','main.java.Electro2D.FileFrame','java.awt.List','main.java.Electro2D.WebGenerator','javax.swing.JButton','main.java.Electro2D.HTMLGenScreen','main.java.Electro2D.RangeImage','java.awt.Toolkit','main.java.Electro2D.GelCanvas','main.java.Utilities.FileUtils','main.java.Electro2D.PlayE2AnimationButton','main.java.Utilities.BrowserLauncher','main.java.Electro2D.ColorFrame','main.java.Electro2D.RestartE2DAnimationButton','javax.swing.JLabel','javax.swing.JComboBox','java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.BoxLayout','java.awt.Insets','java.awt.Font','java.awt.GridLayout','javax.swing.BorderFactory','java.awt.Color','java.util.ArrayList','java.text.DecimalFormat','main.java.Electro2D.IEFProtein','java.io.FileInputStream','java.io.InputStreamReader','java.io.BufferedReader','java.net.URL','main.java.Electro2D.SearchProteinFunction','main.java.Utilities.MessageFrame','main.java.Electro2D.ProteinFrame','main.java.Electro2D.DotThread','main.java.Electro2D.IEFThread','main.java.Electro2D.CSVCreator','javax.swing.JOptionPane','javax.swing.JFrame']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Electro2D", null, 'javax.swing.JPanel', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastFileLoaded="";
this.sequenceTitles2=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['resetPressed','rangeReload','sequencesReady'],'D',['minMW','maxMW','minPi','maxPi'],'I',['fileNum'],'S',['lastFileLoaded'],'O',['fileFrame','main.java.Electro2D.FileFrame','proteinListFrame','main.java.Electro2D.SingleProteinListFrame','gelCanvas','main.java.Electro2D.GelCanvas','playButton','main.java.Electro2D.PlayE2AnimationButton','restartButton','main.java.Electro2D.RestartE2DAnimationButton','csvButton','javax.swing.JButton','proteinList','java.awt.List','selectedIndexes','int[]','animationChooser','javax.swing.JLabel','rangeChooser','javax.swing.JComboBox','dotThread','main.java.Electro2D.DotThread','iefThread','main.java.Electro2D.IEFThread','rangeImage','main.java.Electro2D.RangeImage','graphics','java.awt.Graphics','percentAcrylamide','javax.swing.JComboBox','rangeLabels','java.util.Vector','+mwLabels','web','main.java.Electro2D.WebGenerator','sequences','java.util.Vector','+sequenceTitles','+molecularWeights','+piValues','+functions','proteinList2','java.awt.List','sequences2','java.util.Vector','+sequenceTitles2','+functions2','+molecularWeights2','+piValues2','fileFrame2','main.java.Electro2D.FileFrame','header0','javax.swing.JLabel','leftPanel','javax.swing.JPanel','+pHPanel','+mWPanel','parentFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame',  function (parentFrame) {
Clazz.super_(C$, this);
$I$(2).init$();
this.parentFrame=parentFrame;
this.proteinListFrame=Clazz.new_($I$(3,1).c$$S$main_java_Electro2D_Electro2D,["Protein Lists", this]);
this.fileFrame=Clazz.new_($I$(4,1).c$$javax_swing_JFrame$main_java_Electro2D_Electro2D$I,[parentFrame, this, 1]);
this.fileFrame2=Clazz.new_($I$(4,1).c$$javax_swing_JFrame$main_java_Electro2D_Electro2D$I,[parentFrame, this, 2]);
this.fileFrame.setResizable$Z(false);
this.proteinList=Clazz.new_($I$(5,1));
this.proteinList2=Clazz.new_($I$(5,1));
this.web=Clazz.new_($I$(6,1).c$$main_java_Electro2D_Electro2D,[this]);
var webButton=Clazz.new_($I$(7,1).c$$S,["Generate HTML Page"]);
webButton.setToolTipText$S("Creates an HTML file of proteins and values");
webButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
Clazz.new_($I$(8,1).c$$main_java_Electro2D_Electro2D,[this.b$['main.java.Electro2D.Electro2D']]);
});
})()
), Clazz.new_(P$.Electro2D$1.$init$,[this, null])));
this.rangeImage=Clazz.new_([$I$(10).getDefaultToolkit$().getImage$S("rangeSelectDeactivated.jpg")],$I$(9,1).c$$java_awt_Image);
this.rangeLabels=Clazz.new_($I$(1,1));
this.mwLabels=Clazz.new_($I$(1,1));
this.resetPressed=false;
this.rangeReload=false;
this.gelCanvas=Clazz.new_($I$(11,1).c$$main_java_Electro2D_Electro2D,[this]);
$I$(12,"setFileDropper$javax_swing_JComponent$java_util_function_BiFunction",[this, ((P$.Electro2D$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Electro2D$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File$java_awt_Point','apply$O$O'],  function (file, loc) {
this.b$['main.java.Electro2D.Electro2D'].loadFile$java_io_File$I.apply(this.b$['main.java.Electro2D.Electro2D'], [file, 1]);
return null;
});
})()
), Clazz.new_(P$.Electro2D$lambda1.$init$,[this, null]))]);
var compareButton=Clazz.new_($I$(7,1).c$$S,["Compare Proteins"]);
compareButton.setToolTipText$S("Compares multiple proteins to each other");
compareButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.Electro2D'].getSequenceData2$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
$I$(13).setCompare$Z(true);
});
})()
), Clazz.new_(P$.Electro2D$2.$init$,[this, null])));
this.csvButton=Clazz.new_($I$(7,1).c$$S,["Record to CSV"]);
this.csvButton.setToolTipText$S("Creates a spreadsheet of proteins and their values");
this.csvButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.Electro2D'].writeToCSV$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
});
})()
), Clazz.new_(P$.Electro2D$3.$init$,[this, null])));
var aboutButton=Clazz.new_($I$(7,1).c$$S,["About"]);
aboutButton.setToolTipText$S("About the program");
aboutButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(14).openURL$S("https://sourceforge.net/projects/jbf/");
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Electro2D$4.$init$,[this, null])));
var helpButton=Clazz.new_($I$(7,1).c$$S,["Help"]);
helpButton.setToolTipText$S("Opens help wiki for Electro2D.Electro2D");
helpButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="https://sourceforge.net/p/jbf/wiki/Electro2D.Electro2D/";
try {
$I$(14).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Electro2D$5.$init$,[this, null])));
var addProteinButton=Clazz.new_($I$(7,1).c$$S,["Add Proteins"]);
addProteinButton.setToolTipText$S("Load proteins from file");
addProteinButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['main.java.Electro2D.Electro2D'].getSequenceData$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
});
})()
), Clazz.new_(P$.Electro2D$6.$init$,[this, null])));
var removeProteinButton=Clazz.new_($I$(7,1).c$$S,["Remove Proteins"]);
removeProteinButton.setToolTipText$S("Remove unwanted proteins from field by name");
removeProteinButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['main.java.Electro2D.Electro2D'].removeHighlightedProteins$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
});
})()
), Clazz.new_(P$.Electro2D$7.$init$,[this, null])));
var searchButton=Clazz.new_($I$(7,1).c$$S,["Search Protein Field"]);
searchButton.setToolTipText$S("Refine protein field with these search options");
searchButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['main.java.Electro2D.Electro2D'].openProteinSearch$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
});
})()
), Clazz.new_(P$.Electro2D$8.$init$,[this, null])));
var displayProteinsButton=Clazz.new_($I$(7,1).c$$S,["Display Protein List"]);
displayProteinsButton.setToolTipText$S("Display editable list of all the proteins in field");
displayProteinsButton.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
this.b$['main.java.Electro2D.Electro2D'].displayProteinList$.apply(this.b$['main.java.Electro2D.Electro2D'], []);
});
})()
), Clazz.new_(P$.Electro2D$9.$init$,[this, null])));
var colorKey=Clazz.new_($I$(7,1).c$$S,["Color Key"]);
colorKey.setToolTipText$S("Pop-up color key explaining dots in field");
colorKey.addActionListener$java_awt_event_ActionListener(((P$.Electro2D$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (actionEvent) {
Clazz.new_($I$(15,1)).showKey$();
});
})()
), Clazz.new_(P$.Electro2D$10.$init$,[this, null])));
this.playButton=Clazz.new_($I$(13,1).c$$main_java_Electro2D_Electro2D,[this]);
this.restartButton=Clazz.new_($I$(16,1).c$$main_java_Electro2D_Electro2D,[this]);
this.animationChooser=Clazz.new_($I$(17,1).c$$S,["IEF"]);
this.rangeChooser=Clazz.new_($I$(18,1));
this.rangeChooser.addItem$O("3 - 10");
this.rangeChooser.addItem$O("4 - 7");
this.rangeChooser.addItem$O("Enter A Range");
this.rangeChooser.addItemListener$java_awt_event_ItemListener(((P$.Electro2D$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "Electro2D$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (e) {
if (this.b$['main.java.Electro2D.Electro2D'].rangeChooser.getSelectedItem$().equals$O("Enter A Range")) {
this.b$['main.java.Electro2D.Electro2D'].rangeChooser.setEditable$Z(true);
} else {
this.b$['main.java.Electro2D.Electro2D'].rangeChooser.setEditable$Z(false);
}});
})()
), Clazz.new_(P$.Electro2D$11.$init$,[this, null])));
this.percentAcrylamide=Clazz.new_($I$(18,1));
this.percentAcrylamide.addItem$O("5");
this.percentAcrylamide.addItem$O("7.5");
this.percentAcrylamide.addItem$O("10");
this.percentAcrylamide.addItem$O("15");
this.percentAcrylamide.addItem$O("18");
this.percentAcrylamide.addItem$O("4 - 15");
this.percentAcrylamide.addItem$O("4 - 20");
this.percentAcrylamide.addItem$O("8 - 16");
this.percentAcrylamide.addItem$O("10 - 20");
this.percentAcrylamide.setSelectedItem$O("15");
this.sequences=Clazz.new_($I$(1,1));
this.sequenceTitles=Clazz.new_($I$(1,1));
this.molecularWeights=Clazz.new_($I$(1,1));
this.piValues=Clazz.new_($I$(1,1));
this.sequencesReady=false;
this.proteinListFrame=Clazz.new_($I$(3,1).c$$S$main_java_Electro2D_Electro2D,["Protein Lists", this]);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(19,1)));
var c=Clazz.new_($I$(20,1));
this.leftPanel=Clazz.new_($I$(21,1));
this.leftPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1).c$$java_awt_Container$I,[this.leftPanel, 1]));
var rightPanel=Clazz.new_($I$(21,1));
rightPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(19,1)));
c.weightx=1.0;
c.weighty=1.0;
c.gridx=0;
c.gridy=0;
c.insets=(Clazz.new_($I$(23,1).c$$I$I$I$I,[0, 10, 0, 10]));
this.add$java_awt_Component$O(this.leftPanel, c);
c.gridx=1;
c.gridy=0;
this.add$java_awt_Component$O(rightPanel, c);
var constraint=Clazz.new_($I$(20,1));
constraint.gridx=1;
constraint.gridy=0;
constraint.fill=1;
constraint.ipady=50;
constraint.ipadx=650;
this.pHPanel=Clazz.new_($I$(21,1));
this.pHPanel.setLayout$java_awt_LayoutManager(null);
rightPanel.add$java_awt_Component$O(this.pHPanel, constraint);
constraint.gridx=0;
constraint.gridy=1;
constraint.ipady=10;
constraint.ipadx=15;
this.mWPanel=Clazz.new_($I$(21,1));
this.mWPanel.setLayout$java_awt_LayoutManager(null);
rightPanel.add$java_awt_Component$O(this.mWPanel, constraint);
constraint.gridx=1;
constraint.gridy=1;
constraint.ipady=450;
constraint.ipadx=650;
rightPanel.add$java_awt_Component$O(this.gelCanvas, constraint);
var header=Clazz.new_([Clazz.new_($I$(19,1))],$I$(21,1).c$$java_awt_LayoutManager);
c.gridy=0;
this.header0=Clazz.new_($I$(17,1).c$$S,["2D Electrophoresis"]);
this.header0.setFont$java_awt_Font(Clazz.new_($I$(24,1).c$$S$I$I,["SansSerif", 1, 18]));
header.add$java_awt_Component$O(this.header0, c);
this.leftPanel.add$java_awt_Component(header);
var firstPanel=Clazz.new_($I$(21,1));
c.gridy=1;
firstPanel.add$java_awt_Component(helpButton);
firstPanel.add$java_awt_Component(aboutButton);
this.leftPanel.add$java_awt_Component(firstPanel);
var secondPanel=Clazz.new_($I$(21,1));
secondPanel.add$java_awt_Component(addProteinButton);
this.leftPanel.add$java_awt_Component(secondPanel);
var thirdPanel=Clazz.new_($I$(21,1));
thirdPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1).c$$I$I$I$I,[1, 1, 0, 0]));
var innerPanel=Clazz.new_($I$(21,1));
innerPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(22,1).c$$java_awt_Container$I,[innerPanel, 1]));
thirdPanel.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$javax_swing_border_Border$S$I$I",[$I$(26,"createLineBorder$java_awt_Color",[$I$(27).gray]), "Current Animation", 2, 2]));
innerPanel.add$java_awt_Component(this.animationChooser);
thirdPanel.add$java_awt_Component(innerPanel);
this.leftPanel.add$java_awt_Component(thirdPanel);
var fourthPanel=Clazz.new_($I$(21,1));
fourthPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1).c$$I$I$I$I,[1, 2, 2, 2]));
fourthPanel.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$javax_swing_border_Border$S$I$I",[$I$(26,"createLineBorder$java_awt_Color",[$I$(27).gray]), "Animation Buttons", 2, 2]));
fourthPanel.add$java_awt_Component(this.playButton);
fourthPanel.add$java_awt_Component(this.restartButton);
this.leftPanel.add$java_awt_Component(fourthPanel);
var fifthPanel=Clazz.new_($I$(21,1));
fifthPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1).c$$I$I$I$I,[1, 1, 0, 0]));
fifthPanel.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$javax_swing_border_Border$S$I$I",[$I$(26,"createLineBorder$java_awt_Color",[$I$(27).gray]), "Choose pH", 2, 2]));
fifthPanel.add$java_awt_Component(this.rangeChooser);
this.leftPanel.add$java_awt_Component(fifthPanel);
var sixthPanel=Clazz.new_($I$(21,1));
sixthPanel.setBorder$javax_swing_border_Border($I$(26,"createTitledBorder$javax_swing_border_Border$S$I$I",[$I$(26,"createLineBorder$java_awt_Color",[$I$(27).gray]), "Choose Acrylamide %", 2, 2]));
sixthPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(25,1).c$$I$I$I$I,[1, 1, 0, 0]));
sixthPanel.add$java_awt_Component(this.percentAcrylamide);
this.leftPanel.add$java_awt_Component(sixthPanel);
var seventhPanel=Clazz.new_($I$(21,1));
var additionalOptions=Clazz.new_($I$(17,1).c$$S,["Additional Options"]);
additionalOptions.setFont$java_awt_Font(Clazz.new_($I$(24,1).c$$S$I$I,["SansSerif", 1, 16]));
seventhPanel.add$java_awt_Component(additionalOptions);
this.leftPanel.add$java_awt_Component(seventhPanel);
var eighthPanel=Clazz.new_($I$(21,1));
eighthPanel.add$java_awt_Component(displayProteinsButton);
this.leftPanel.add$java_awt_Component(eighthPanel);
var ninthPanel=Clazz.new_($I$(21,1));
ninthPanel.add$java_awt_Component(compareButton);
var tenthPanel=Clazz.new_($I$(21,1));
tenthPanel.add$java_awt_Component(searchButton);
this.leftPanel.add$java_awt_Component(tenthPanel);
var eleventhPanel=Clazz.new_($I$(21,1));
eleventhPanel.add$java_awt_Component(webButton);
this.leftPanel.add$java_awt_Component(eleventhPanel);
var twelfPanel=Clazz.new_($I$(21,1));
twelfPanel.add$java_awt_Component(this.csvButton);
this.leftPanel.add$java_awt_Component(twelfPanel);
var thirteenthPanel=Clazz.new_($I$(21,1));
thirteenthPanel.add$java_awt_Component(colorKey);
this.leftPanel.add$java_awt_Component(thirteenthPanel);
}, 1);

Clazz.newMeth(C$, 'getButtonPanel$',  function () {
return this.leftPanel;
});

Clazz.newMeth(C$, 'displayProteinList$',  function () {
this.proteinListFrame.setVisible$Z(true);
this.proteinListFrame.validate$();
});

Clazz.newMeth(C$, 'showPH$',  function () {
var minPH=this.getMinRange$();
var maxPH=this.getMaxRange$();
var linePositions=Clazz.new_($I$(28,1));
var twoDForm=Clazz.new_($I$(29,1).c$$S,["#.##"]);
var fm=null;
for (var pH=(minPH|0); pH <= maxPH ; pH++) {
var x=$I$(30).getXForPH$D(pH);
var s=twoDForm.format$J(pH);
var newLabel=Clazz.new_($I$(17,1).c$$S,[s]);
if (fm == null ) fm=Clazz.new_($I$(17,1)).getFontMetrics$java_awt_Font(newLabel.getFont$());
var w=fm.stringWidth$S(s);
var maxx=$I$(30).pixelWidth - w;
var lx=Math.min(maxx, Math.max(x - (w/2|0), 0));
newLabel.setBounds$I$I$I$I(lx, this.pHPanel.getHeight$() - 15, 35, 10);
this.pHPanel.add$java_awt_Component(newLabel);
this.rangeLabels.add$O(newLabel);
if (pH > minPH  && pH < maxPH  ) {
linePositions.add$O(Integer.valueOf$I(x));
}}
this.pHPanel.repaint$();
return linePositions;
});

Clazz.newMeth(C$, 'clearpH$',  function () {
for (var i=0; i < this.rangeLabels.size$(); i++) {
this.pHPanel.remove$java_awt_Component(this.rangeLabels.elementAt$I(i));
}
this.rangeLabels.removeAllElements$();
this.clearMW$();
this.pHPanel.removeAll$();
this.pHPanel.repaint$();
});

Clazz.newMeth(C$, 'clearMW$',  function () {
for (var i=0; i < this.mwLabels.size$(); i++) {
this.remove$java_awt_Component(this.mwLabels.elementAt$I(i));
}
this.mwLabels.removeAllElements$();
this.mWPanel.removeAll$();
this.mWPanel.repaint$();
});

Clazz.newMeth(C$, 'showMW$I$I$I$I$Z',  function (loc100, loc50, loc25, loc10, reMake) {
var hundredK=Clazz.new_($I$(17,1).c$$S,["100K"]);
this.mwLabels.add$O(hundredK);
this.mWPanel.add$java_awt_Component(hundredK);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setBounds$I$I$I$I(this.mWPanel.getX$() + 10, loc100, 40, 15);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setForeground$java_awt_Color($I$(27).BLACK);
var fiftyK=Clazz.new_($I$(17,1).c$$S,["50K"]);
this.mwLabels.add$O(fiftyK);
this.mWPanel.add$java_awt_Component(fiftyK);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setBounds$I$I$I$I(this.mWPanel.getX$() + 15, loc50, 30, 15);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setForeground$java_awt_Color($I$(27).BLACK);
var twentyfiveK=Clazz.new_($I$(17,1).c$$S,["25K"]);
this.mwLabels.add$O(twentyfiveK);
this.mWPanel.add$java_awt_Component(twentyfiveK);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setBounds$I$I$I$I(this.mWPanel.getX$() + 15, loc25, 30, 15);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setForeground$java_awt_Color($I$(27).BLACK);
var tenK=Clazz.new_($I$(17,1).c$$S,["10K"]);
this.mwLabels.add$O(tenK);
this.mWPanel.add$java_awt_Component(tenK);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setBounds$I$I$I$I(this.mWPanel.getX$() + 15, loc10, 30, 15);
(this.mwLabels.elementAt$I(this.mwLabels.size$() - 1)).setForeground$java_awt_Color($I$(27).BLACK);
});

Clazz.newMeth(C$, 'setSDS$',  function () {
this.animationChooser.setText$S("SDS-PAGE");
});

Clazz.newMeth(C$, 'setIEF$',  function () {
this.animationChooser.setText$S("IEF");
});

Clazz.newMeth(C$, 'getFrame$java_awt_Component',  function (comp) {
var theTop=null;
var parent=comp;
while (parent != null ){
theTop=parent;
parent=parent.getParent$();
}
return (Clazz.instanceOf(theTop, "java.awt.Frame") ? theTop : null);
});

Clazz.newMeth(C$, 'allowSelectRange$',  function () {
if (!this.rangeReload) {
this.remove$java_awt_Component(this.rangeImage);
this.update$java_awt_Graphics(this.graphics);
this.rangeReload=true;
}});

Clazz.newMeth(C$, 'disableSelectRange$',  function () {
if (this.rangeReload) {
this.add$java_awt_Component(this.rangeImage);
this.update$java_awt_Graphics(this.graphics);
this.rangeReload=false;
}});

Clazz.newMeth(C$, 'getSequenceData$',  function () {
this.fileFrame.toFront$();
this.fileFrame.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getSequenceData2$',  function () {
this.fileFrame2.toFront$();
this.fileFrame2.setVisible$Z(true);
});

Clazz.newMeth(C$, 'showSwsSearchPage$S',  function (id) {
var buffer=null;
var searchID= String.instantialize();
try {
var fileStream=Clazz.new_($I$(31,1).c$$S,["HTML Files/Search Addresses.csv"]);
var inputStream=Clazz.new_($I$(32,1).c$$java_io_InputStream,[fileStream]);
buffer=Clazz.new_($I$(33,1).c$$java_io_Reader,[inputStream]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.showSwsSearchPage File not found.");
} else {
throw ex;
}
}
if (buffer != null ) {
try {
var line=buffer.readLine$();
line=buffer.readLine$();
line=buffer.readLine$();
var brokenLine=line.split$S(",");
searchID= String.instantialize(brokenLine[4] + id);
buffer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.showSwsSearchPage Problem with reading buffer.");
} else {
throw ex;
}
}
}var searchPage=null;
try {
searchPage=Clazz.new_($I$(34,1).c$$S,[searchID]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
System.err.println$S("The error was " + e);
} else {
throw e;
}
}
if (searchPage != null ) {
try {
$I$(14).openURL$S(searchID);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'showBlastSearchPage$S',  function (seq) {
var buffer=null;
var searchID= String.instantialize();
try {
var fileStream=Clazz.new_($I$(31,1).c$$S,["HTML Files/Search Addresses.csv"]);
var inputStream=Clazz.new_($I$(32,1).c$$java_io_InputStream,[fileStream]);
buffer=Clazz.new_($I$(33,1).c$$java_io_Reader,[inputStream]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.showBlastSearchPage File not found.");
} else {
throw ex;
}
}
if (buffer != null ) {
try {
var line=buffer.readLine$();
line=buffer.readLine$();
var brokenLine=line.split$S(",");
searchID= String.instantialize(brokenLine[4] + seq);
buffer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.showBlastSearchPage Problem with reading buffer.");
} else {
throw ex;
}
}
}var searchPage=null;
try {
searchPage=Clazz.new_($I$(34,1).c$$S,[searchID]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
System.err.println$S("The error was " + e);
} else {
throw e;
}
}
if (searchPage != null ) {
try {
$I$(14).openURL$S(searchID);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'showSearchPage$S',  function (id) {
var buffer=null;
var searchID= String.instantialize();
try {
var fileStream=Clazz.new_($I$(31,1).c$$S,["HTML Files/Search Addresses.csv"]);
var inputStream=Clazz.new_($I$(32,1).c$$java_io_InputStream,[fileStream]);
buffer=Clazz.new_($I$(33,1).c$$java_io_Reader,[inputStream]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.showSearchPage File not found.");
} else {
throw ex;
}
}
if (buffer != null ) {
try {
var line=buffer.readLine$();
line=buffer.readLine$();
line=buffer.readLine$();
line=buffer.readLine$();
line=buffer.readLine$();
var brokenLine=line.split$S(",");
var filename=this.getLastFileLoaded$();
var extention=filename.substring$I(filename.indexOf$S(".") + 1);
if (extention.equals$O("pdb")) {
id=filename.substring$I$I(0, filename.indexOf$S("."));
searchID= String.instantialize(brokenLine[4] + id);
} else {
searchID= String.instantialize(brokenLine[5] + id);
}buffer.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
System.out.println$S("Electro2D.ShowSearchPage Problem with reading buffer.");
} else {
throw ex;
}
}
}var searchPage=null;
try {
searchPage=Clazz.new_($I$(34,1).c$$S,[searchID]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
System.err.println$S("The error was " + e);
} else {
throw e;
}
}
if (searchPage != null ) {
try {
$I$(14).openURL$S(searchID);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'showECSearchPage$S',  function (id) {
var index=0;
var searchId="";
var ecNums=Clazz.new_($I$(1,1));
while (id.length$() > 0 && id.indexOf$S(";") != -1 ){
ecNums.addElement$O(id.substring$I$I(0, id.indexOf$S(";")));
index=id.indexOf$S(";");
if (index + 1 == id.length$()) {
id="";
} else {
id=id.substring$I(id.indexOf$S(";") + 1);
id=id.trim$();
}}
searchId="http://www.genome.ad.jp/dbget-bin/www_bget?enzyme+";
for (var d=0; d < ecNums.size$(); d++) {
ecNums.set$I$O(d, searchId + ecNums.elementAt$I(d));
}
try {
for (var d=0; d < ecNums.size$(); d++) {
Clazz.new_([ecNums.elementAt$I(d)],$I$(34,1).c$$S);
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
System.err.println$S("Bad URL: " + searchId);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var f = e$$;
{
System.err.println$S("The error was " + f.getMessage$());
}
} else {
throw e$$;
}
}
try {
for (var d=0; d < ecNums.size$(); d++) {
$I$(14,"openURL$S",[ecNums.elementAt$I(d)]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'removeHighlightedProteins$',  function () {
this.selectedIndexes=this.proteinList.getSelectedIndexes$();
var selectedItems=this.proteinList.getSelectedItems$();
for (var i=0; i < this.selectedIndexes.length; i++) {
this.removeProteinbyTitle$S(selectedItems[i]);
this.proteinList.remove$I(this.selectedIndexes[i] - i);
}
if (this.sequenceTitles2 != null ) {
var selectedIndexes2=this.proteinList2.getSelectedIndexes$();
selectedItems=this.proteinList2.getSelectedItems$();
for (var x=0; x < selectedIndexes2.length; x++) {
this.removeProteinbyTitle2$S(selectedItems[x]);
this.proteinList2.remove$I(selectedIndexes2[x] - x);
}
}});

Clazz.newMeth(C$, 'openProteinSearch$',  function () {
Clazz.new_($I$(35,1).c$$main_java_Electro2D_Electro2D,[this]);
});

Clazz.newMeth(C$, 'getVoltage$',  function () {
return "50 V";
});

Clazz.newMeth(C$, 'getMaxRange$',  function () {
return p$1.getRanges.apply(this, [])[1];
});

Clazz.newMeth(C$, 'getMinRange$',  function () {
return p$1.getRanges.apply(this, [])[0];
});

Clazz.newMeth(C$, 'getRanges',  function () {
try {
var ranges=(this.rangeChooser.getSelectedItem$()).replaceAll$S$S(" ", "");
var lowAndHigh=ranges.split$S("-");
var range=Clazz.array(Double.TYPE, -1, [Double.parseDouble$S(lowAndHigh[0]), Double.parseDouble$S(lowAndHigh[1])]);
if ((range[0] <= 14  && range[1] <= 14   && range[0] < range[1]   && range[0] >= 0   && range[1] >= 0  )) {
return range;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
var mess=Clazz.new_($I$(36,1));
var m="That is not a range such as 3-10. Please press restart and try again using values between 0 and 14.";
mess.setMessage$S(m);
mess.setVisible$Z(true);
return Clazz.array(Double.TYPE, -1, [3, 10]);
}, p$1);

Clazz.newMeth(C$, 'getLowPercent$',  function () {
var value=(this.percentAcrylamide.getSelectedItem$()).trim$();
var percent=-1;
if (value.indexOf$S("-") != -1) {
value=value.substring$I$I(0, value.indexOf$S("-"));
value=value.trim$();
}try {
percent=Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
var mess=Clazz.new_($I$(36,1));
var m=value + " is not a valid number.  Please " + "press restart and try again." ;
mess.setMessage$S(m);
mess.setVisible$Z(true);
} else {
throw e;
}
}
return percent;
});

Clazz.newMeth(C$, 'getHighPercent$',  function () {
var value=(this.percentAcrylamide.getSelectedItem$()).trim$();
var percent=-1;
if (value.indexOf$S("-") != -1) {
value=value.substring$I(value.indexOf$S("-") + 1);
value=value.trim$();
}try {
percent=Double.parseDouble$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
var mess=Clazz.new_($I$(36,1));
var m=value + " is not a valid number.  Please " + "press restart and try again." ;
mess.setMessage$S(m);
mess.setVisible$Z(true);
} else {
throw e;
}
}
return percent;
});

Clazz.newMeth(C$, 'getAnimationChoice$',  function () {
return this.animationChooser.getText$();
});

Clazz.newMeth(C$, 'resetPlay$',  function () {
this.playButton.resetPlay$();
});

Clazz.newMeth(C$, 'refreshProteinList$',  function () {
this.proteinList.removeAll$();
for (var x=0; x < this.sequenceTitles.size$(); x++) {
this.proteinList.add$S(this.sequenceTitles.elementAt$I(x));
}
this.proteinListFrame.updateSequences$java_util_Vector$java_util_Vector(this.sequenceTitles, this.sequenceTitles2);
});

Clazz.newMeth(C$, 'removeProteinbyTitle$S',  function (title) {
for (var x=0; x < this.sequenceTitles.size$(); x++) {
if ((this.sequenceTitles.elementAt$I(x)).equals$O(title)) {
this.molecularWeights.removeElementAt$I(x);
this.piValues.removeElementAt$I(x);
this.sequenceTitles.removeElementAt$I(x);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'removeProteinbyTitle2$S',  function (title) {
if (this.sequenceTitles2 != null ) {
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
if ((this.sequenceTitles2.elementAt$I(x)).equals$O(title)) {
this.molecularWeights2.removeElementAt$I(x);
this.piValues2.removeElementAt$I(x);
this.sequenceTitles2.removeElementAt$I(x);
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'refreshProteinList2$',  function () {
this.proteinList2.removeAll$();
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
this.proteinList2.add$S(this.sequenceTitles2.elementAt$I(x));
}
this.proteinListFrame.updateSequences$java_util_Vector$java_util_Vector(this.sequenceTitles, this.sequenceTitles2);
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var proteinFrame=Clazz.new_([this, e.getActionCommand$(), 1],$I$(37,1).c$$main_java_Electro2D_Electro2D$S$I);
proteinFrame.setVisible$Z(true);
if (this.playButton.getSdsStatus$()) {
this.gelCanvas.drawLocation$S(e.getActionCommand$());
}});

Clazz.newMeth(C$, 'resetSdsStatus$',  function () {
this.playButton.resetSdsStatus$();
});

Clazz.newMeth(C$, 'restartThread$',  function () {
this.dotThread=Clazz.new_($I$(38,1).c$$main_java_Electro2D_Electro2D,[this]);
this.dotThread.startDots$();
this.dotThread.start$();
});

Clazz.newMeth(C$, 'setBool$',  function () {
this.resetPressed=true;
});

Clazz.newMeth(C$, 'resetBool$',  function () {
this.resetPressed=false;
});

Clazz.newMeth(C$, 'getBool$',  function () {
return this.resetPressed;
});

Clazz.newMeth(C$, 'restartIEF$',  function () {
this.iefThread=Clazz.new_($I$(39,1).c$$main_java_Electro2D_GelCanvas$main_java_Electro2D_Electro2D,[this.gelCanvas, this]);
this.iefThread.setIEF$();
this.iefThread.start$();
});

Clazz.newMeth(C$, 'getIEFThread$',  function () {
return this.iefThread;
});

Clazz.newMeth(C$, 'resetIEF$',  function () {
this.playButton.resetIEF$();
});

Clazz.newMeth(C$, 'stopThread$',  function () {
this.dotThread.stopDots$();
});

Clazz.newMeth(C$, 'getLastFileLoaded$',  function () {
return this.lastFileLoaded;
});

Clazz.newMeth(C$, 'getGel$',  function () {
return this.gelCanvas;
});

Clazz.newMeth(C$, 'getSequences$',  function () {
var positionsOne=this.proteinListFrame.getPositionsOne$();
if (positionsOne.size$() > 0) {
var copySequences=this.sequences.clone$();
this.sequences.clear$();
if ((positionsOne.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsOne.size$(); x++) {
this.sequences.add$O(copySequences.get$I((positionsOne.get$I(x)).$c()));
}
}}return this.sequences;
});

Clazz.newMeth(C$, 'getSequenceTitles$',  function () {
var positionsOne=this.proteinListFrame.getPositionsOne$();
if (positionsOne.size$() > 0) {
var copySequenceTitles=this.sequenceTitles.clone$();
this.sequenceTitles.clear$();
if ((positionsOne.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsOne.size$(); x++) {
this.sequenceTitles.add$O(copySequenceTitles.get$I((positionsOne.get$I(x)).$c()));
}
}}return this.sequenceTitles;
});

Clazz.newMeth(C$, 'getThread$',  function () {
return this.dotThread;
});

Clazz.newMeth(C$, 'getMolecularWeights$',  function () {
var positionsOne=this.proteinListFrame.getPositionsOne$();
if (positionsOne.size$() > 0) {
var copyMolecularWeights=this.molecularWeights.clone$();
this.molecularWeights.clear$();
if ((positionsOne.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsOne.size$(); x++) {
this.molecularWeights.add$O(copyMolecularWeights.get$I((positionsOne.get$I(x)).$c()));
}
}}return this.molecularWeights;
});

Clazz.newMeth(C$, 'getMWbyTitle$S',  function (title) {
for (var x=0; x < this.sequenceTitles.size$(); x++) {
if ((this.sequenceTitles.elementAt$I(x)).equals$O(title)) {
return this.molecularWeights.elementAt$I(x);
}}
if (this.sequenceTitles2 != null ) {
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
if ((this.sequenceTitles2.elementAt$I(x)).equals$O(title)) {
return this.molecularWeights2.elementAt$I(x);
}}
}return "";
});

Clazz.newMeth(C$, 'getFunctionbyTitle$S',  function (title) {
for (var x=0; x < this.sequenceTitles.size$(); x++) {
if ((this.sequenceTitles.elementAt$I(x)).equals$O(title)) {
return this.functions.elementAt$I(x);
}}
if (this.sequenceTitles2 != null ) {
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
if ((this.sequenceTitles2.elementAt$I(x)).equals$O(title)) {
return this.functions2.elementAt$I(x);
}}
}return "";
});

Clazz.newMeth(C$, 'getPIbyTitle$S',  function (title) {
for (var x=0; x < this.sequenceTitles.size$(); x++) {
if (this.sequenceTitles.elementAt$I(x).equals$O(title)) {
return this.piValues.elementAt$I(x);
}}
if (this.sequenceTitles2 != null ) {
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
if (this.sequenceTitles2.elementAt$I(x).equals$O(title)) {
return this.piValues2.elementAt$I(x);
}}
}return "";
});

Clazz.newMeth(C$, 'getSequencebyTitle$S',  function (title) {
for (var x=0; x < this.sequenceTitles.size$(); x++) {
if (this.sequenceTitles.elementAt$I(x).equals$O(title)) {
return this.sequences.elementAt$I(x);
}}
if (this.sequenceTitles2 != null ) {
for (var x=0; x < this.sequenceTitles2.size$(); x++) {
if (this.sequenceTitles2.elementAt$I(x).equals$O(title)) {
return this.sequences2.elementAt$I(x);
}}
}return "";
});

Clazz.newMeth(C$, 'setMaxAndMinVals$D$D$D$D',  function (maxmw, minmw, maxpi, minpi) {
this.maxMW=maxmw;
this.minMW=(minmw == 1.7976931348623157E308  ? -1 : minmw);
this.maxPi=maxpi;
this.minPi=(minpi == 1.7976931348623157E308  ? -1 : minpi);
});

Clazz.newMeth(C$, 'getMaxPi$',  function () {
return this.maxPi;
});

Clazz.newMeth(C$, 'getMinPi$',  function () {
return this.minPi;
});

Clazz.newMeth(C$, 'getMaxMW$',  function () {
return this.maxMW;
});

Clazz.newMeth(C$, 'getMinMW$',  function () {
return this.minMW;
});

Clazz.newMeth(C$, 'getPiValues$',  function () {
var positionsOne=this.proteinListFrame.getPositionsOne$();
if (positionsOne.size$() > 0) {
var copyPiValues=this.piValues.clone$();
this.piValues.clear$();
if ((positionsOne.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsOne.size$(); x++) {
this.piValues.add$O(copyPiValues.get$I((positionsOne.get$I(x)).$c()));
}
}}return this.piValues;
});

Clazz.newMeth(C$, 'getFunctions$',  function () {
var positionsOne=this.proteinListFrame.getPositionsOne$();
if (positionsOne.size$() > 0) {
var copyFunctions=this.functions.clone$();
this.functions.clear$();
if ((positionsOne.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsOne.size$(); x++) {
this.functions.add$O(copyFunctions.get$I((positionsOne.get$I(x)).$c()));
}
}}return this.functions;
});

Clazz.newMeth(C$, 'getPiValues2$',  function () {
var positionsTwo=this.proteinListFrame.getPositionsTwo$();
if (positionsTwo.size$() > 0) {
var copyPiValues2=this.piValues2.clone$();
this.piValues2.clear$();
if ((positionsTwo.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsTwo.size$(); x++) {
this.piValues2.add$O(copyPiValues2.get$I((positionsTwo.get$I(x)).$c()));
}
}}return this.piValues2;
});

Clazz.newMeth(C$, 'getSequences2$',  function () {
var positionsTwo=this.proteinListFrame.getPositionsTwo$();
if (positionsTwo.size$() > 0) {
var copySequences2=this.sequences2.clone$();
this.sequences2.clear$();
if ((positionsTwo.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsTwo.size$(); x++) {
this.sequences2.add$O(copySequences2.get$I((positionsTwo.get$I(x)).$c()));
}
}}return this.sequences2;
});

Clazz.newMeth(C$, 'getSequenceTitles2$',  function () {
if (this.sequenceTitles2 != null ) {
var positionsTwo=this.proteinListFrame.getPositionsTwo$();
if (positionsTwo.size$() > 0) {
var copySequenceTitles2=this.sequenceTitles2.clone$();
this.sequenceTitles2.clear$();
if ((positionsTwo.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsTwo.size$(); x++) {
this.sequenceTitles2.add$O(copySequenceTitles2.get$I((positionsTwo.get$I(x)).$c()));
}
}}return this.sequenceTitles2;
}return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'getMolecularWeights2$',  function () {
var positionsTwo=this.proteinListFrame.getPositionsTwo$();
if (positionsTwo.size$() > 0) {
var copyMolecularWeights2=this.molecularWeights2.clone$();
this.molecularWeights2.clear$();
if ((positionsTwo.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsTwo.size$(); x++) {
this.molecularWeights2.add$O(copyMolecularWeights2.get$I((positionsTwo.get$I(x)).$c()));
}
}}return this.molecularWeights2;
});

Clazz.newMeth(C$, 'getFunctions2$',  function () {
var positionsTwo=this.proteinListFrame.getPositionsTwo$();
if (positionsTwo.size$() > 0) {
var copyFunctions2=this.functions2.clone$();
this.functions2.clear$();
if ((positionsTwo.get$I(0)).$c() > -1 ) {
for (var x=0; x < positionsTwo.size$(); x++) {
this.functions2.add$O(copyFunctions2.get$I((positionsTwo.get$I(x)).$c()));
}
}}return this.functions2;
});

Clazz.newMeth(C$, 'setLastFileLoaded$S',  function (l) {
this.lastFileLoaded=l;
});

Clazz.newMeth(C$, 'setSequences$java_util_Vector',  function (s) {
this.sequences=s;
this.sequencesReady=true;
});

Clazz.newMeth(C$, 'setSequences2$java_util_Vector',  function (s) {
this.sequences2=s;
this.sequencesReady=true;
});

Clazz.newMeth(C$, 'setSequencesReady$Z',  function (bool) {
this.sequencesReady=bool;
});

Clazz.newMeth(C$, 'getSequencesReady$',  function () {
return this.sequencesReady;
});

Clazz.newMeth(C$, 'setSequenceTitles$java_util_Vector',  function (st) {
this.sequenceTitles=st;
});

Clazz.newMeth(C$, 'setSequenceTitles2$java_util_Vector',  function (st) {
this.sequenceTitles2=st;
});

Clazz.newMeth(C$, 'setMolecularWeights$java_util_Vector',  function (mw) {
this.molecularWeights=mw;
});

Clazz.newMeth(C$, 'setMolecularWeights2$java_util_Vector',  function (mw) {
this.molecularWeights2=mw;
});

Clazz.newMeth(C$, 'setFunctionValues$java_util_Vector',  function (fcn) {
this.functions=fcn;
});

Clazz.newMeth(C$, 'setFunctionValues2$java_util_Vector',  function (fcn) {
this.functions2=fcn;
});

Clazz.newMeth(C$, 'setPiValues$java_util_Vector',  function (pi) {
this.piValues=pi;
});

Clazz.newMeth(C$, 'setPiValues2$java_util_Vector',  function (pi) {
this.piValues2=pi;
});

Clazz.newMeth(C$, 'start$',  function () {
});

Clazz.newMeth(C$, 'stop$',  function () {
});

Clazz.newMeth(C$, 'destroy$',  function () {
});

Clazz.newMeth(C$, 'getAppletInfo$',  function () {
return "Electro2D.Electro2D...copyright 2003 Adam L Bazinet & Jill Zapoticznyj";
});

Clazz.newMeth(C$, 'writeToCSV$',  function () {
var csv=Clazz.new_($I$(40,1).c$$main_java_Electro2D_Electro2D,[this]);
csv.writeToCSV$();
});

Clazz.newMeth(C$, 'generateWebPage$',  function () {
this.web.genFile$S(this.getLastFileLoaded$());
if (true ||false) {
} else {
$I$(41).showMessageDialog$java_awt_Component$O(this.parentFrame, "Webpage created in \'HTML Files/\' subdirectory");
}});

Clazz.newMeth(C$, 'resetBothProteinLists$',  function () {
this.proteinList=Clazz.new_($I$(5,1));
this.proteinList2=Clazz.new_($I$(5,1));
this.sequencesReady=false;
});

Clazz.newMeth(C$, 'main$SA',  function (args) {
var f=Clazz.new_($I$(42,1));
f.setDefaultCloseOperation$I(2);
f.add$java_awt_Component(Clazz.new_(C$.c$$javax_swing_JFrame,[f]));
f.pack$();
f.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'loadFile$java_io_File$I',  function (f, fileNum) {
var error=$I$(2).loadFile$java_io_File$java_util_Vector$java_util_Vector$main_java_Electro2D_Electro2D$I(f, null, null, this, fileNum);
if (error == null ) {
var n=this.sequences.size$();
$I$(41,"showMessageDialog$java_awt_Component$O",[null, n + " Protein" + (n == 1 ? "" : "s") + " loaded." ]);
if (fileNum == 1) {
this.refreshProteinList$();
} else if (fileNum == 2) {
this.refreshProteinList2$();
}} else {
error.setLocationRelativeTo$java_awt_Component(this);
error.setVisible$Z(true);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
