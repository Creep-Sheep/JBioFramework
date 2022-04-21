(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'javax.swing.JRadioButton','javax.swing.ButtonGroup','javax.swing.JButton','javax.swing.JPanel','javax.swing.BoxLayout','main.java.Electro2D.WebGenerator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HTMLGenScreen", null, 'javax.swing.JFrame', ['java.awt.event.ActionListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['sortField'],'O',['contentPanel','javax.swing.JPanel','buttons','javax.swing.ButtonGroup','functionButton','javax.swing.JRadioButton','+titleButton','+piButton','+mwButton','submit','javax.swing.JButton','electro2D','main.java.Electro2D.Electro2D']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D',  function (e) {
;C$.superclazz.c$$S.apply(this,["Sort Web Page By:"]);C$.$init$.apply(this);
this.setResizable$Z(false);
this.electro2D=e;
this.sortField=0;
this.functionButton=Clazz.new_($I$(1,1).c$$S,["Protein Function"]);
this.functionButton.setActionCommand$S("function");
this.functionButton.addActionListener$java_awt_event_ActionListener(this);
this.piButton=Clazz.new_($I$(1,1).c$$S,["pI Value"]);
this.piButton.setActionCommand$S("pI");
this.piButton.addActionListener$java_awt_event_ActionListener(this);
this.mwButton=Clazz.new_($I$(1,1).c$$S,["Molecular Weight Value"]);
this.mwButton.setActionCommand$S("mw");
this.mwButton.addActionListener$java_awt_event_ActionListener(this);
this.titleButton=Clazz.new_($I$(1,1).c$$S,["Protein Title"]);
this.titleButton.setActionCommand$S("title");
this.titleButton.addActionListener$java_awt_event_ActionListener(this);
this.titleButton.setSelected$Z(true);
this.buttons=Clazz.new_($I$(2,1));
this.buttons.add$javax_swing_AbstractButton(this.titleButton);
this.buttons.add$javax_swing_AbstractButton(this.piButton);
this.buttons.add$javax_swing_AbstractButton(this.mwButton);
this.buttons.add$javax_swing_AbstractButton(this.functionButton);
this.submit=Clazz.new_($I$(3,1).c$$S,["Generate HTML Document"]);
this.submit.addMouseListener$java_awt_event_MouseListener(this);
this.contentPanel=Clazz.new_($I$(4,1));
this.contentPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5,1).c$$java_awt_Container$I,[this.contentPanel, 1]));
this.contentPanel.add$java_awt_Component(this.titleButton);
this.contentPanel.add$java_awt_Component(this.piButton);
this.contentPanel.add$java_awt_Component(this.mwButton);
this.contentPanel.add$java_awt_Component(this.functionButton);
this.contentPanel.add$java_awt_Component(this.submit);
this.setDefaultCloseOperation$I(2);
this.add$java_awt_Component(this.contentPanel);
this.setVisible$Z(true);
this.pack$();
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cmd=e.getActionCommand$();
if (cmd.equals$O("title")) {
this.sortField=0;
} else if (cmd.equals$O("pI")) {
this.sortField=1;
} else if (cmd.equals$O("mw")) {
this.sortField=2;
} else if (cmd.equals$O("function")) {
this.sortField=3;
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
$I$(6).setSearch$I(this.sortField);
this.electro2D.generateWebPage$();
this.dispose$();
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
