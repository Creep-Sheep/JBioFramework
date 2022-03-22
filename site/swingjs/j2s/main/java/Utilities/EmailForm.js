(function(){var P$=Clazz.newPackage("main.java.Utilities"),p$1={},I$=[[0,'javax.swing.JLabel','javax.swing.JTextField','javax.swing.JScrollPane','javax.swing.JTextArea','javax.swing.JButton','javax.swing.GroupLayout',['javax.swing.GroupLayout','.Alignment'],['javax.swing.LayoutStyle','.ComponentPlacement']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmailForm", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bodyTA','javax.swing.JTextArea','fromL','javax.swing.JLabel','+subjectL','+bodyL','fromTF','javax.swing.JTextField','+subjectTF','jScrollPane','javax.swing.JScrollPane','sendButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
p$1.initComponents.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'initComponents',  function () {
C$.superclazz.prototype.setTitle$S.apply(this, ["New Message"]);
this.setDefaultCloseOperation$I(3);
this.subjectL=Clazz.new_($I$(1,1).c$$S,["Subject:"]);
this.subjectTF=Clazz.new_($I$(2,1));
this.subjectTF.addActionListener$java_awt_event_ActionListener(((P$.EmailForm$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EmailForm$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.subjectTFActionPerformed$java_awt_event_ActionEvent.apply(this.b$['main.java.Utilities.EmailForm'], [e]);
});
})()
), Clazz.new_(P$.EmailForm$1.$init$,[this, null])));
this.fromL=Clazz.new_($I$(1,1).c$$S,["Sender:"]);
this.fromL.setToolTipText$S("Email address of sender:");
this.fromTF=Clazz.new_($I$(2,1));
this.fromTF.addActionListener$java_awt_event_ActionListener(((P$.EmailForm$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "EmailForm$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.fromTFActionPerformed$java_awt_event_ActionEvent.apply(this.b$['main.java.Utilities.EmailForm'], [e]);
});
})()
), Clazz.new_(P$.EmailForm$2.$init$,[this, null])));
this.bodyL=Clazz.new_($I$(1,1).c$$S,["Message body:"]);
this.jScrollPane=Clazz.new_($I$(3,1));
this.bodyTA=Clazz.new_($I$(4,1));
this.bodyTA.setColumns$I(20);
this.bodyTA.setRows$I(5);
this.bodyTA.setWrapStyleWord$Z(false);
this.jScrollPane.setViewportView$java_awt_Component(this.bodyTA);
this.sendButton=Clazz.new_($I$(5,1).c$$S,["Send"]);
this.sendButton.addActionListener$java_awt_event_ActionListener(((P$.EmailForm$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "EmailForm$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.sendButtonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['main.java.Utilities.EmailForm'], [e]);
});
})()
), Clazz.new_(P$.EmailForm$3.$init$,[this, null])));
var layout=Clazz.new_([this.getContentPane$()],$I$(6,1).c$$java_awt_Container);
this.getContentPane$().setLayout$java_awt_LayoutManager(layout);
layout.setHorizontalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addComponent$java_awt_Component(this.subjectL).addComponent$java_awt_Component(this.fromL)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).UNRELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addComponent$java_awt_Component(this.fromTF).addComponent$java_awt_Component(this.subjectTF))).addComponent$java_awt_Component(this.sendButton)).addGap$I$I$I(11, 11, 11)).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addComponent$java_awt_Component(this.bodyL).addContainerGap$I$I(-1, 32767)).addGroup$javax_swing_GroupLayout_Alignment$javax_swing_GroupLayout_Group($I$(7).TRAILING, layout.createSequentialGroup$().addComponent$java_awt_Component$I$I$I(this.jScrollPane, -1, 388, 32767).addContainerGap$()));
layout.setVerticalGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).LEADING).addGroup$javax_swing_GroupLayout_Group(layout.createSequentialGroup$().addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component$I$I$I(this.subjectTF, -2, -1, -2).addComponent$java_awt_Component(this.subjectL)).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addGroup$javax_swing_GroupLayout_Group(layout.createParallelGroup$javax_swing_GroupLayout_Alignment($I$(7).BASELINE).addComponent$java_awt_Component(this.fromL).addComponent$java_awt_Component$I$I$I(this.fromTF, -2, -1, -2)).addGap$I$I$I(8, 8, 8).addComponent$java_awt_Component(this.bodyL).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component$I$I$I(this.jScrollPane, -1, 169, 32767).addPreferredGap$javax_swing_LayoutStyle_ComponentPlacement($I$(8).RELATED).addComponent$java_awt_Component(this.sendButton).addContainerGap$()));
this.pack$();
}, p$1);

Clazz.newMeth(C$, 'subjectTFActionPerformed$java_awt_event_ActionEvent',  function (evt) {
C$.superclazz.prototype.setTitle$S.apply(this, [this.subjectTF.getText$()]);
}, p$1);

Clazz.newMeth(C$, 'sendButtonActionPerformed$java_awt_event_ActionEvent',  function (evt) {
}, p$1);

Clazz.newMeth(C$, 'fromTFActionPerformed$java_awt_event_ActionEvent',  function (evt) {
}, p$1);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
