(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'javax.swing.JTextArea','javax.swing.JButton','javax.swing.JPanel','main.java.Utilities.FileUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haveShown=false;
},1);

C$.$fields$=[['Z',['haveShown'],'I',['fileNum'],'O',['electro2D','main.java.Electro2D.Electro2D','instructions','javax.swing.JTextArea','button','javax.swing.JButton','south','javax.swing.JPanel','parentFrame','javax.swing.JFrame']]]

Clazz.newMeth(C$, 'c$$javax_swing_JFrame$main_java_Electro2D_Electro2D$I',  function (parentFrame, e, i) {
Clazz.super_(C$, this);
this.parentFrame=parentFrame;
this.fileNum=i;
this.electro2D=e;
this.setTitle$S("Load Protein Data File");
this.setDefaultCloseOperation$I(2);
this.setLocationRelativeTo$java_awt_Component(null);
this.instructions=Clazz.new_($I$(1,1));
this.instructions.append$S("Instructions: Select a file that contains your protein sequence data.\nPlease note: Some files may take longer to load.");
this.instructions.setEditable$Z(false);
this.instructions.setAlignmentX$F(0.5);
this.button=Clazz.new_($I$(2,1).c$$S,["Select a File"]);
this.button.addActionListener$java_awt_event_ActionListener(((P$.FileFrame$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FileFrame$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$O'],  function (ea) {
this.b$['main.java.Electro2D.FileFrame'].loadFile$.apply(this.b$['main.java.Electro2D.FileFrame'], []);
});
})()
), Clazz.new_(P$.FileFrame$lambda1.$init$,[this, null])));
this.getContentPane$().add$java_awt_Component$O(this.instructions, "North");
this.south=Clazz.new_($I$(3,1));
this.south.add$java_awt_Component(this.button);
this.getContentPane$().add$java_awt_Component$O(this.south, "South");
this.pack$();
}, 1);

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b) {
this.setLocationRelativeTo$java_awt_Component(this.parentFrame);
}C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (this.haveShown) {
this.loadFile$();
}this.haveShown=true;
});

Clazz.newMeth(C$, 'loadFile$',  function () {
$I$(4,"openFile$java_awt_Component$java_util_function_Function",[this, ((P$.FileFrame$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "FileFrame$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_io_File','apply$O'],  function (file) {
this.b$['main.java.Electro2D.FileFrame'].electro2D.loadFile$java_io_File$I(file, this.b$['main.java.Electro2D.FileFrame'].fileNum);
this.b$['java.awt.Window'].dispose$.apply(this.b$['java.awt.Window'], []);
return null;
});
})()
), Clazz.new_(P$.FileFrame$lambda2.$init$,[this, null]))]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
