(function(){var P$=Clazz.newPackage("main.java.Electro2D"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RangeImage", null, 'java.awt.Canvas');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pic','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_Image',  function (i) {
Clazz.super_(C$, this);
this.pic=i;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.pic, 0, 0, this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-10-03 19:41:55 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
