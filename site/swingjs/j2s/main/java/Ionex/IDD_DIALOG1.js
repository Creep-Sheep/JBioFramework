(function(){var P$=Clazz.newPackage("main.java.Ionex"),I$=[[0,'java.awt.Font','main.java.Ionex.DialogLayout','java.awt.Label','main.java.Ionex.ConcenTextField','java.awt.CheckboxGroup','java.awt.Checkbox','java.awt.List','java.awt.Button','main.java.Ionex.AmountTextField']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IDD_DIALOG1");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_Parent=null;
this.m_fInitialized=false;
},1);

C$.$fields$=[['Z',['m_fInitialized'],'O',['m_Parent','java.awt.Container','m_Layout','main.java.Ionex.DialogLayout','IDC_STATIC1','java.awt.Label','IDC_SOLVENTA','javax.swing.JTextField','IDC_STATIC2','java.awt.Label','+IDC_STATIC3','IDC_SOLVENTB','javax.swing.JTextField','IDC_STATIC4','java.awt.Label','+IDC_STATIC5','group1','java.awt.CheckboxGroup','IDC_POS','java.awt.Checkbox','+IDC_NEG','IDC_STATIC6','java.awt.Label','group2','java.awt.CheckboxGroup','IDC_BUFFER1','java.awt.Checkbox','+IDC_BUFFER2','+IDC_BUFFER3','IDC_PROTEINS','java.awt.List','IDC_REMOVE','java.awt.Button','+IDC_ADD','IDC_AMOUNT','javax.swing.JTextField','IDC_STATIC7','java.awt.Label','IDC_START','java.awt.Button','+IDC_PAUSE','+IDC_STOP','+IDC_UPDATE','+IDC_RESET','IDC_SELECTPROTEIN','java.awt.List']]]

Clazz.newMeth(C$, 'c$$java_awt_Container',  function (parent) {
;C$.$init$.apply(this);
this.m_Parent=parent;
}, 1);

Clazz.newMeth(C$, 'CreateControls$',  function () {
if (this.m_fInitialized || this.m_Parent == null  ) return false;
if (!(Clazz.instanceOf(this.m_Parent, "java.awt.Container"))) return false;
var OldFnt=this.m_Parent.getFont$();
if (OldFnt != null ) {
var NewFnt=Clazz.new_([OldFnt.getName$(), OldFnt.getStyle$(), 8],$I$(1,1).c$$S$I$I);
this.m_Parent.setFont$java_awt_Font(NewFnt);
}this.m_Layout=Clazz.new_($I$(2,1).c$$java_awt_Container$I$I,[this.m_Parent, 190, 247]);
this.m_Parent.setLayout$java_awt_LayoutManager(this.m_Layout);
this.m_Parent.addNotify$();
var size=this.m_Layout.getDialogSize$();
var insets=this.m_Parent.getInsets$();
this.m_Parent.setSize$I$I(insets.left + size.width + insets.right , insets.top + size.height + insets.bottom );
this.IDC_STATIC1=Clazz.new_($I$(3,1).c$$S$I,["Solvent A Concentration:", 1]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC1);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC1, 11, 28, 80, 8);
this.IDC_SOLVENTA=Clazz.new_($I$(4,1).c$$S,[""]);
this.m_Parent.add$java_awt_Component(this.IDC_SOLVENTA);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_SOLVENTA, 97, 25, 40, 14);
this.IDC_STATIC2=Clazz.new_($I$(3,1).c$$S$I,["M NaCl", 0]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC2);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC2, 146, 28, 28, 8);
this.IDC_STATIC3=Clazz.new_($I$(3,1).c$$S$I,["Solvent B Concentration:", 1]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC3);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC3, 11, 49, 80, 8);
this.IDC_SOLVENTB=Clazz.new_($I$(4,1).c$$S,[""]);
this.m_Parent.add$java_awt_Component(this.IDC_SOLVENTB);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_SOLVENTB, 97, 46, 40, 14);
this.IDC_STATIC4=Clazz.new_($I$(3,1).c$$S$I,["M NaCl", 0]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC4);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC4, 146, 49, 28, 8);
this.IDC_STATIC5=Clazz.new_($I$(3,1).c$$S$I,["Resin:", 0]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC5);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC5, 19, 64, 30, 8);
this.group1=Clazz.new_($I$(5,1));
this.IDC_POS=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,["DEAE - Sephadex", this.group1, false]);
this.m_Parent.add$java_awt_Component(this.IDC_POS);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_POS, 7, 74, 72, 10);
this.IDC_NEG=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,["CM - Sephadex", this.group1, false]);
this.m_Parent.add$java_awt_Component(this.IDC_NEG);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_NEG, 7, 84, 65, 10);
this.IDC_STATIC6=Clazz.new_($I$(3,1).c$$S$I,["Buffer:", 0]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC6);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC6, 94, 64, 28, 8);
this.group2=Clazz.new_($I$(5,1));
this.IDC_BUFFER1=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,["Sodium Acetate, pH 4.8", this.group2, false]);
this.m_Parent.add$java_awt_Component(this.IDC_BUFFER1);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_BUFFER1, 82, 74, 99, 10);
this.IDC_BUFFER2=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,["Sodium Phosphate, pH 7.2", this.group2, false]);
this.m_Parent.add$java_awt_Component(this.IDC_BUFFER2);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_BUFFER2, 82, 84, 99, 10);
this.IDC_BUFFER3=Clazz.new_($I$(6,1).c$$S$java_awt_CheckboxGroup$Z,["Tris HCl, pH 8.0", this.group2, false]);
this.m_Parent.add$java_awt_Component(this.IDC_BUFFER3);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_BUFFER3, 82, 94, 99, 10);
this.IDC_PROTEINS=Clazz.new_($I$(7,1).c$$I$Z,[1, false]);
this.m_Parent.add$java_awt_Component(this.IDC_PROTEINS);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_PROTEINS, 7, 107, 174, 53);
this.IDC_REMOVE=Clazz.new_($I$(8,1).c$$S,["Remove Protein"]);
this.m_Parent.add$java_awt_Component(this.IDC_REMOVE);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_REMOVE, 7, 165, 57, 14);
this.IDC_ADD=Clazz.new_($I$(8,1).c$$S,["Add Protein"]);
this.m_Parent.add$java_awt_Component(this.IDC_ADD);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_ADD, 7, 182, 58, 14);
this.IDC_AMOUNT=Clazz.new_($I$(9,1).c$$S,[""]);
this.m_Parent.add$java_awt_Component(this.IDC_AMOUNT);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_AMOUNT, 79, 182, 40, 14);
this.IDC_STATIC7=Clazz.new_($I$(3,1).c$$S$I,["mg", 0]);
this.m_Parent.add$java_awt_Component(this.IDC_STATIC7);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STATIC7, 129, 185, 10, 8);
this.IDC_START=Clazz.new_($I$(8,1).c$$S,["Start"]);
this.m_Parent.add$java_awt_Component(this.IDC_START);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_START, 7, 225, 50, 14);
this.IDC_PAUSE=Clazz.new_($I$(8,1).c$$S,["Pause"]);
this.m_Parent.add$java_awt_Component(this.IDC_PAUSE);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_PAUSE, 69, 225, 50, 14);
this.IDC_STOP=Clazz.new_($I$(8,1).c$$S,["Stop"]);
this.m_Parent.add$java_awt_Component(this.IDC_STOP);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_STOP, 131, 225, 50, 14);
this.IDC_UPDATE=Clazz.new_($I$(8,1).c$$S,["Load Experiment"]);
this.m_Parent.add$java_awt_Component(this.IDC_UPDATE);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_UPDATE, 30, 6, 60, 14);
this.IDC_RESET=Clazz.new_($I$(8,1).c$$S,["Reset Settings"]);
this.m_Parent.add$java_awt_Component(this.IDC_RESET);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_RESET, 102, 6, 60, 14);
this.IDC_SELECTPROTEIN=Clazz.new_($I$(7,1).c$$I$Z,[1, false]);
this.m_Parent.add$java_awt_Component(this.IDC_SELECTPROTEIN);
this.m_Layout.setShape$java_awt_Component$I$I$I$I(this.IDC_SELECTPROTEIN, 7, 198, 174, 23);
this.m_fInitialized=true;
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
