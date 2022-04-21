(function(){var P$=Clazz.newPackage("main.java.Utilities"),I$=[[0,'StringBuilder','java.awt.Color','javax.swing.border.EmptyBorder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MultiLineToolTip", null, 'javax.swing.JToolTip');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['maxChar'],'S',['lastText','lastWrapped'],'O',['sb','StringBuilder']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$java_awt_Color.apply(this, [40, $I$(2).yellow]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color',  function (maxChar, bgColor) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.maxChar=maxChar;
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 5, 0, 5]));
this.setBackground$java_awt_Color(bgColor);
}, 1);

Clazz.newMeth(C$, 'setTipText$S',  function (tipText) {
C$.superclazz.prototype.setTipText$S.apply(this, [this.wrapToolTip$S(tipText)]);
});

Clazz.newMeth(C$, 'wrapToolTip$S',  function (text) {
if (text.equals$O(this.lastText)) return this.lastWrapped;
this.lastText=text;
text=text.trim$();
var enclose;
if (text.startsWith$S("<html>")) {
enclose=false;
} else if (text.contains$CharSequence("<br") || text.contains$CharSequence("<BR") ) {
enclose=true;
} else {
enclose=(text.length$() > this.maxChar);
if (enclose) {
var words=text.split$S(" ");
this.sb.setLength$I(0);
for (var i=0, len=0; i < words.length; i++) {
if ((len=len + words[i].length$()) > this.maxChar) {
this.sb.append$S("<br>");
len=0;
} else if (len > 0) {
this.sb.append$S(" ");
}this.sb.append$S(words[i]);
}
text=this.sb.toString();
}}return this.lastWrapped=(enclose ? "<html>" + text + "</html>"  : text);
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:54 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
