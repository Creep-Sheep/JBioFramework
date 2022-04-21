(function(){var P$=Clazz.newPackage("main.java.Ionex"),I$=[[0,'java.util.Hashtable','java.awt.Rectangle','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DialogLayout", null, null, 'java.awt.LayoutManager');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_map=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['m_width','m_height'],'O',['m_map','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$java_awt_Container$I$I',  function (parent, width, height) {
;C$.$init$.apply(this);
this.Construct$java_awt_Container$I$I(parent, width, height);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container$java_awt_Dimension',  function (parent, d) {
;C$.$init$.apply(this);
this.Construct$java_awt_Container$I$I(parent, d.width, d.height);
}, 1);

Clazz.newMeth(C$, 'setShape$java_awt_Component$I$I$I$I',  function (comp, x, y, width, height) {
this.m_map.put$O$O(comp, Clazz.new_($I$(2,1).c$$I$I$I$I,[x, y, width, height]));
});

Clazz.newMeth(C$, 'setShape$java_awt_Component$java_awt_Rectangle',  function (comp, rect) {
this.m_map.put$O$O(comp, Clazz.new_($I$(2,1).c$$I$I$I$I,[rect.x, rect.y, rect.width, rect.height]));
});

Clazz.newMeth(C$, 'getShape$java_awt_Component',  function (comp) {
var rect=this.m_map.get$O(comp);
return Clazz.new_($I$(2,1).c$$I$I$I$I,[rect.x, rect.y, rect.width, rect.height]);
});

Clazz.newMeth(C$, 'getDialogSize$',  function () {
return Clazz.new_($I$(3,1).c$$I$I,[this.m_width, this.m_height]);
});

Clazz.newMeth(C$, 'addLayoutComponent$S$java_awt_Component',  function (name, comp) {
});

Clazz.newMeth(C$, 'removeLayoutComponent$java_awt_Component',  function (comp) {
});

Clazz.newMeth(C$, 'preferredLayoutSize$java_awt_Container',  function (parent) {
return Clazz.new_($I$(3,1).c$$I$I,[this.m_width, this.m_height]);
});

Clazz.newMeth(C$, 'minimumLayoutSize$java_awt_Container',  function (parent) {
return Clazz.new_($I$(3,1).c$$I$I,[this.m_width, this.m_height]);
});

Clazz.newMeth(C$, 'layoutContainer$java_awt_Container',  function (parent) {
var count=parent.getComponentCount$();
var rect=Clazz.new_($I$(2,1));
var charHeight=this.getCharHeight$java_awt_Container(parent);
var charWidth=this.getCharWidth$java_awt_Container(parent);
var insets=parent.getInsets$();
for (var i=0; i < count; i++) {
var c=parent.getComponent$I(i);
var r=this.m_map.get$O(c);
if (r != null ) {
rect.x=r.x;
rect.y=r.y;
rect.height=r.height;
rect.width=r.width;
this.mapRectangle$java_awt_Rectangle$I$I(rect, charWidth, charHeight);
if (Clazz.instanceOf(c, "java.awt.Label")) {
rect.x-=12;
rect.width+=12;
}rect.x+=insets.left;
rect.y+=insets.top;
c.setBounds$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
}}
});

Clazz.newMeth(C$, 'Construct$java_awt_Container$I$I',  function (parent, width, height) {
var rect=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, width, height]);
this.mapRectangle$java_awt_Rectangle$I$I(rect, this.getCharWidth$java_awt_Container(parent), this.getCharHeight$java_awt_Container(parent));
this.m_width=rect.width;
this.m_height=rect.height;
});

Clazz.newMeth(C$, 'getCharWidth$java_awt_Container',  function (parent) {
var m=parent.getFontMetrics$java_awt_Font(parent.getFont$());
var s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var width=(m.stringWidth$S(s)/s.length$()|0);
if (width <= 0) width=1;
return width;
});

Clazz.newMeth(C$, 'getCharHeight$java_awt_Container',  function (parent) {
var m=parent.getFontMetrics$java_awt_Font(parent.getFont$());
var height=m.getHeight$();
return height;
});

Clazz.newMeth(C$, 'mapRectangle$java_awt_Rectangle$I$I',  function (rect, charWidth, charHeight) {
rect.x=((rect.x * charWidth)/4|0);
rect.y=((rect.y * charHeight)/8|0);
rect.width=((rect.width * charWidth)/4|0);
rect.height=((rect.height * charHeight)/8|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 17:00:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
