(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SearchProteinButton", null, 'javax.swing.JButton', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pro_id="";
},1);

C$.$fields$=[['S',['pro_id'],'O',['electro2D','main.java.Electro2D.Electro2D']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D$S$S',  function (e, id, text) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);
this.electro2D=e;
this.pro_id=id;
this.addActionListener$java_awt_event_ActionListener(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.electro2D.showSearchPage$S(this.pro_id);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1