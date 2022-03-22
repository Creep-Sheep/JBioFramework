(function(){var P$=Clazz.newPackage("main.java.Electro1D"),I$=[[0,'java.awt.Color','main.java.Electro1D.Protein','main.java.Electro1D.Acrylamide']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Constants");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['dyeColor','java.awt.Color','dyes','main.java.Electro1D.Protein[]','gels','main.java.Electro1D.Acrylamide[]','gelPercents','String[]','+voltageList','standardIndices','int[]']]]

C$.$static$=function(){C$.$static$=0;
C$.dyeColor=Clazz.new_($I$(1,1).c$$I$I$I,[132, 50, 237]);
C$.dyes=Clazz.array($I$(2), [10]);
{
for (var i=0; i < 10; i++) C$.dyes[i]=Clazz.new_($I$(2,1).c$$S$S$S$I$java_awt_Color,["Dye", "Dye", "Dye", 6000, C$.dyeColor]);

};
C$.gels=Clazz.array($I$(3), -1, [Clazz.new_($I$(3,1).c$$S$D,["7.5%", 7.5]), Clazz.new_($I$(3,1).c$$S$D,["10%", 10.0]), Clazz.new_($I$(3,1).c$$S$D,["12%", 12.0]), Clazz.new_($I$(3,1).c$$S$D,["15%", 15])]);
C$.gelPercents=Clazz.array(String, [C$.gels.length]);
{
for (var i=0; i < C$.gels.length; i++) C$.gelPercents[i]=C$.gels[i].percentGel;

};
C$.voltageList=Clazz.array(String, -1, ["50V", "100V", "150V", "200V"]);
C$.standardIndices=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:07 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
