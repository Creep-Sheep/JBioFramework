(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'javax.swing.ButtonGroup','java.util.Vector','javax.swing.JLabel','javax.swing.JTextField','javax.swing.JPanel','javax.swing.JFrame','java.awt.event.WindowAdapter','javax.swing.JButton',['main.java.Electro2D.SearchProteinFunction','.SearchListener'],['main.java.Electro2D.SearchProteinFunction','.ResetListener'],'javax.swing.JRadioButton','java.awt.GridLayout','java.awt.BorderLayout','javax.swing.JOptionPane']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SearchProteinFunction", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.event.MouseListener', 'java.awt.event.ActionListener']);
C$.$classes$=[['SearchListener',2],['ResetListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['searchField'],'O',['dots1','java.util.Vector','+dots2','gel','main.java.Electro2D.GelCanvas','electro2D','main.java.Electro2D.Electro2D','window','javax.swing.JFrame','search','javax.swing.JButton','+reset','searchTerm','javax.swing.JTextField','+excludeTerm','buttonPane','javax.swing.JPanel','+buttonLabelPane','+buttonSelectionPane','+searchLabelPane','+searchFieldPane','+textPane','includesLabel','javax.swing.JLabel','+excludesLabel','radioButtons','javax.swing.ButtonGroup','sequenceButton','javax.swing.JRadioButton','+titleButton','+functionButton']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e2D) {
;C$.$init$.apply(this);
this.electro2D=e2D;
this.radioButtons=Clazz.new_($I$(1,1));
this.gel=this.electro2D.getGel$();
this.dots1=Clazz.new_($I$(2,1));
this.dots2=Clazz.new_($I$(2,1));
this.excludesLabel=Clazz.new_($I$(3,1).c$$S,["Excludes: "]);
this.includesLabel=Clazz.new_($I$(3,1).c$$S,["Includes: "]);
this.searchTerm=Clazz.new_($I$(4,1));
this.excludeTerm=Clazz.new_($I$(4,1));
this.buttonPane=Clazz.new_($I$(5,1));
this.buttonLabelPane=Clazz.new_($I$(5,1));
this.buttonSelectionPane=Clazz.new_($I$(5,1));
this.textPane=Clazz.new_($I$(5,1));
this.searchLabelPane=Clazz.new_($I$(5,1));
this.searchFieldPane=Clazz.new_($I$(5,1));
this.window=Clazz.new_($I$(6,1));
this.window.addWindowListener$java_awt_event_WindowListener(((P$.SearchProteinFunction$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SearchProteinFunction$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['main.java.Electro2D.SearchProteinFunction'].window.setVisible$Z(false);
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.SearchProteinFunction$1)));
this.search=Clazz.new_($I$(8,1).c$$S,["Search"]);
this.reset=Clazz.new_($I$(8,1).c$$S,["Reset"]);
this.search.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(9,1),[this, null]));
this.reset.addActionListener$java_awt_event_ActionListener(Clazz.new_($I$(10,1),[this, null]));
this.sequenceButton=Clazz.new_($I$(11,1).c$$S$Z,["Sequence", false]);
this.titleButton=Clazz.new_($I$(11,1).c$$S$Z,["Protein Title", true]);
this.functionButton=Clazz.new_($I$(11,1).c$$S$Z,["Protein Function", false]);
this.searchField="function";
this.sequenceButton.addActionListener$java_awt_event_ActionListener(this);
this.titleButton.addActionListener$java_awt_event_ActionListener(this);
this.functionButton.addActionListener$java_awt_event_ActionListener(this);
this.sequenceButton.setActionCommand$S("sequence");
this.titleButton.setActionCommand$S("title");
this.functionButton.setActionCommand$S("function");
this.functionButton.setMnemonic$I(70);
this.sequenceButton.setMnemonic$I(83);
this.titleButton.setMnemonic$I(84);
this.radioButtons.add$javax_swing_AbstractButton(this.sequenceButton);
this.radioButtons.add$javax_swing_AbstractButton(this.titleButton);
this.radioButtons.add$javax_swing_AbstractButton(this.functionButton);
this.buttonLabelPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[0, 1]));
var labelPane=Clazz.new_($I$(3,1).c$$S,["Select Search Field"]);
this.buttonLabelPane.add$java_awt_Component(labelPane);
this.buttonSelectionPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[0, 1]));
this.buttonSelectionPane.add$java_awt_Component(this.titleButton);
this.buttonSelectionPane.add$java_awt_Component(this.functionButton);
this.buttonSelectionPane.add$java_awt_Component(this.sequenceButton);
this.buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.buttonPane.add$java_awt_Component$O(this.buttonLabelPane, "North");
this.buttonPane.add$java_awt_Component$O(this.buttonSelectionPane, "Center");
this.searchLabelPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[0, 1]));
var searchLabel=Clazz.new_($I$(3,1).c$$S,["Enter Search Term"]);
this.searchLabelPane.add$java_awt_Component(searchLabel);
this.searchFieldPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I$I,[0, 1]));
this.searchFieldPane.add$java_awt_Component(this.includesLabel);
this.searchFieldPane.add$java_awt_Component(this.searchTerm);
this.searchFieldPane.add$java_awt_Component(this.excludesLabel);
this.searchFieldPane.add$java_awt_Component(this.excludeTerm);
this.searchFieldPane.add$java_awt_Component(this.search);
this.searchFieldPane.add$java_awt_Component(this.reset);
this.textPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.textPane.add$java_awt_Component$O(this.searchLabelPane, "North");
this.textPane.add$java_awt_Component$O(this.searchFieldPane, "Center");
this.window.setLayout$java_awt_LayoutManager(Clazz.new_($I$(13,1)));
this.window.setTitle$S("Search Proteins");
this.window.add$java_awt_Component$O(this.buttonPane, "West");
this.window.add$java_awt_Component$O(this.textPane, "East");
this.window.pack$();
this.window.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'searchFor$S$S',  function (fcnName, limitations) {
this.dots1=this.gel.getDots$();
this.dots2=this.gel.getDots2$();
if (this.dots1 == null ) {
this.dots1=Clazz.new_($I$(2,1));
}if (this.dots2 == null ) {
this.dots2=Clazz.new_($I$(2,1));
}var prot=null;
if (this.searchField.equals$O("function")) {
for (var i=0; i < this.dots1.size$(); i++) {
prot=this.dots1.elementAt$I(i);
if (prot.getPro$().getFunction$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
} else if (prot.getPro$().getFunction$().indexOf$S(limitations) != -1 && !limitations.equals$O("") ) {
prot.doNotShowMe$();
}}
if (this.dots2.size$() != 0) {
for (var j=0; j < this.dots2.size$(); j++) {
prot=this.dots2.elementAt$I(j);
if ((prot.getPro$()).getFunction$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
} else if ((prot.getPro$()).getFunction$().indexOf$S(limitations) != -1 && !limitations.equals$O("") ) {
prot.doNotShowMe$();
}}
}} else if (this.searchField.equals$O("sequence")) {
for (var i=0; i < this.dots1.size$(); i++) {
prot=this.dots1.elementAt$I(i);
if ((prot.getPro$()).getSequence$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
}}
if (this.dots2.size$() != 0) {
for (var j=0; j < this.dots2.size$(); j++) {
if ((prot.getPro$()).getSequence$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
}}
}} else if (this.searchField.equals$O("title")) {
for (var i=0; i < this.dots1.size$(); i++) {
prot=this.dots1.elementAt$I(i);
if ((prot.getPro$()).getID$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
} else if ((prot.getPro$()).getID$().indexOf$S(limitations) != -1 && !limitations.equals$O("") ) {
prot.doNotShowMe$();
}}
if (this.dots2.size$() != 0) {
for (var j=0; j < this.dots2.size$(); j++) {
prot=this.dots2.elementAt$I(j);
if ((prot.getPro$()).getID$().indexOf$S(fcnName) == -1) {
prot.doNotShowMe$();
} else if ((prot.getPro$()).getID$().indexOf$S(limitations) != -1 && !limitations.equals$O("") ) {
prot.doNotShowMe$();
}}
}}var count=0;
for (var dot, $dot = this.dots1.iterator$(); $dot.hasNext$()&&((dot=($dot.next$())),1);) {
if (dot.getShowMe$()) {
++count;
}}
for (var dot, $dot = this.dots2.iterator$(); $dot.hasNext$()&&((dot=($dot.next$())),1);) {
if (dot.getShowMe$()) {
++count;
}}
$I$(14).showMessageDialog$java_awt_Component$O(null, "Search found " + count + " proteins." );
count=0;
this.gel.update$java_awt_Graphics(this.gel.getGraphics$());
});

Clazz.newMeth(C$, 'displayAll$',  function () {
this.dots1=this.gel.getDots$();
this.dots2=this.gel.getDots2$();
for (var i=0; i < this.dots1.size$(); i++) {
(this.dots1.elementAt$I(i)).doShowMe$();
}
if (this.dots2.size$() != 0) {
for (var j=0; j < this.dots2.size$(); j++) {
(this.dots2.elementAt$I(j)).doShowMe$();
}
}this.gel.update$java_awt_Graphics(this.gel.getGraphics$());
});

Clazz.newMeth(C$, 'hideExcludeFields$',  function () {
this.searchFieldPane.remove$java_awt_Component(this.excludesLabel);
this.searchFieldPane.remove$java_awt_Component(this.excludeTerm);
this.window.validate$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.searchField=e.getActionCommand$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.searchFieldPane.add$java_awt_Component(this.excludesLabel);
this.searchFieldPane.add$java_awt_Component(this.excludeTerm);
this.window.validate$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SearchProteinFunction, "SearchListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.SearchProteinFunction'].searchFor$S$S.apply(this.b$['main.java.Electro2D.SearchProteinFunction'], [this.b$['main.java.Electro2D.SearchProteinFunction'].searchTerm.getText$(), this.b$['main.java.Electro2D.SearchProteinFunction'].excludeTerm.getText$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SearchProteinFunction, "ResetListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['main.java.Electro2D.SearchProteinFunction'].displayAll$.apply(this.b$['main.java.Electro2D.SearchProteinFunction'], []);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
