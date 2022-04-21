(function(){var P$=Clazz.newPackage("main.java.Electro1D"),p$1={},I$=[[0,'java.awt.Color']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Protein");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['selected'],'D',['startY','relativeMigration','speed','x1','y1','y1float','distance'],'F',['scaleFactor','charge'],'I',['concentration','mw','width','height','maxPosition','decider','counter','plotYPos','plotXPos'],'S',['name','fullName','abbr'],'O',['color','java.awt.Color']]]

Clazz.newMeth(C$, 'setStartPosition$I$I',  function (x, y) {
this.x1=x;
this.y1=y;
this.startY=this.y1;
this.y1float=this.y1;
});

Clazz.newMeth(C$, 'resetDecider$',  function () {
this.decider=1;
this.counter=1;
});

Clazz.newMeth(C$, 'incrPosition',  function () {
if (this.counter == this.decider) {
this.y1float=this.y1float + this.speed;
this.counter=1;
} else {
++this.counter;
}this.y1=(this.y1float|0);
}, p$1);

Clazz.newMeth(C$, 'matchPosition$I$I',  function (x, y) {
var x2=this.x1 + this.width;
var y2=this.y1 + this.height;
var range=2;
return (x >= this.x1 - range  && x <= x2 + range   && y >= this.y1 - range   && y <= y2 + range  );
});

Clazz.newMeth(C$, 'setWidth$I',  function (w) {
this.width=w;
});

Clazz.newMeth(C$, 'getDecider$',  function () {
return this.decider;
});

Clazz.newMeth(C$, 'setDecider$I',  function (i) {
this.decider=i;
});

Clazz.newMeth(C$, 'setHostScaleFactor$F',  function (f) {
this.scaleFactor=f;
});

Clazz.newMeth(C$, 'setMaxPosition$I',  function (i) {
this.maxPosition=i;
});

Clazz.newMeth(C$, 'setConcentration$I',  function (i) {
this.concentration=i;
});

Clazz.newMeth(C$, 'matchPlotPosition$I$I',  function (x, y) {
var range=3;
return (x >= this.plotXPos - range && x <= this.plotXPos + range  && y >= this.plotYPos - range  && y <= this.plotYPos + range );
});

Clazz.newMeth(C$, 'getDistance$',  function () {
this.distance=this.scaleFactor * (this.y1 - this.startY);
return this.distance;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.speed=0.01;
this.name="notSet";
this.fullName="notSet";
this.abbr="notSet";
this.color=$I$(1).blue;
this.height=2;
this.decider=1;
this.counter=1;
this.concentration=1;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$I$java_awt_Color',  function (name, fullName, abbr, i, color1) {
;C$.$init$.apply(this);
this.speed=0.01;
this.color=$I$(1).blue;
this.height=2;
this.decider=1;
this.counter=1;
this.name=name;
this.fullName=fullName;
this.abbr=abbr;
this.mw=i;
this.color=color1;
this.concentration=1;
}, 1);

Clazz.newMeth(C$, 'drawProtein$java_awt_Graphics',  function (g) {
if (this.y1 >= this.maxPosition ) {
return false;
}g.setColor$java_awt_Color(this.color);
if (this.concentration == 1) {
g.fillRect$I$I$I$I((this.x1|0), (this.y1|0), this.width, this.height);
} else {
g.fillRect$I$I$I$I((this.x1|0) - this.concentration, (this.y1|0), this.width + this.concentration * 2, this.height + this.concentration);
}p$1.incrPosition.apply(this, []);
return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Protein: name=" + this.name + " fullName=" + this.fullName + " MW=" + this.mw + " rm=" + new Double(this.relativeMigration).toString() + " d=" + new Double(this.distance).toString() ;
});
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-04-21 16:53:53 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
