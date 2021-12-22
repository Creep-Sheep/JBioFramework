(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[[0,'java.awt.Color','java.awt.Font','java.awt.Cursor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ECSearchButton", null, 'java.awt.Canvas', 'java.awt.event.MouseListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bgColor=$I$(1).BLACK;
this.fillColorOff=$I$(1).RED;
this.fillColorOn=Clazz.new_($I$(1,1).c$$I$I$I,[255, 165, 0]);
this.highlighted=false;
this.textColor=$I$(1).white;
this.textFont=Clazz.new_($I$(2,1).c$$S$I$I,["Arial", 1, 14]);
this.d=null;
this.pro_id="";
this.buffer=null;
this.bufferGraphics=null;
},1);

C$.$fields$=[['Z',['highlighted'],'S',['pro_id'],'O',['electro2D','main.java.Electro2D.Electro2D','bgColor','java.awt.Color','+fillColorOff','+fillColorOn','+textColor','textFont','java.awt.Font','d','java.awt.Rectangle','buffer','java.awt.Image','bufferGraphics','java.awt.Graphics']]]

Clazz.newMeth(C$, 'c$$main_java_Electro2D_Electro2D$S',  function (e, id) {
Clazz.super_(C$, this);
this.electro2D=e;
this.pro_id=id;
this.addMouseListener$java_awt_event_MouseListener(this);
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
if (this.d == null  || this.buffer == null   || this.bufferGraphics == null  ) {
this.d=this.getBounds$();
this.buffer=this.createImage$I$I(this.d.width, this.d.height);
this.bufferGraphics=this.buffer.getGraphics$();
}this.bufferGraphics.setColor$java_awt_Color(this.bgColor);
this.bufferGraphics.fillRect$I$I$I$I(0, 0, this.d.width, this.d.height);
if (this.highlighted == true ) {
this.bufferGraphics.setColor$java_awt_Color(this.fillColorOn);
} else {
this.bufferGraphics.setColor$java_awt_Color(this.fillColorOff);
}this.bufferGraphics.fillRoundRect$I$I$I$I$I$I(0, 0, this.d.width - 1, this.d.height - 1, 15, 15);
this.bufferGraphics.setColor$java_awt_Color(this.textColor);
this.bufferGraphics.setFont$java_awt_Font(this.textFont);
this.bufferGraphics.drawString$S$I$I("Search for Enzyme Info", 8, 14);
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.buffer, 0, 0, this);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.setCursor$java_awt_Cursor(Clazz.new_($I$(3,1).c$$I,[12]));
this.highlighted=true;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
this.setCursor$java_awt_Cursor(Clazz.new_($I$(3,1).c$$I,[0]));
this.highlighted=false;
this.repaint$();
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
this.electro2D.showECSearchPage$S(this.pro_id);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
