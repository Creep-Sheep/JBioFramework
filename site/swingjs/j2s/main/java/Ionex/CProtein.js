(function(){var P$=Clazz.newPackage("main.java.Ionex"),I$=[[0,'java.net.URL','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CProtein");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_arrChargedAminos=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 1, 1]);
this.m_arrAminoPK=Clazz.array(Double.TYPE, -1, [4.4, 4.4, 10.0, 8.5, 10.0, 12.0, 6.5, 3.1, 8.0]);
},1);

C$.$fields$=[['Z',['m_bBound','m_bMix'],'D',['m_dPH','m_dCharge'],'I',['m_nPos','m_nAmount','m_nBandwidth'],'S',['m_strName','m_strFile'],'O',['m_applet','main.java.Ionex.Ionex','m_arrChargedAminos','int[]','m_arrAminoPK','double[]']]]

Clazz.newMeth(C$, 'c$$S$I$S$D$main_java_Ionex_Ionex',  function (strName, nAmount, strFile, dPH, applet) {
;C$.$init$.apply(this);
this.m_strName=strName;
this.m_nAmount=nAmount;
this.m_strFile=strFile;
this.m_dPH=dPH;
this.m_applet=applet;
}, 1);

Clazz.newMeth(C$, 'load$',  function () {
var url;
var strLine=null;
var strTag;
try {
url=Clazz.new_([this.m_applet.getCodeBase$(), "pdb/" + this.m_strFile],$I$(1,1).c$$java_net_URL$S);
var reader=Clazz.new_([Clazz.new_([url.openStream$()],$I$(3,1).c$$java_io_InputStream)],$I$(2,1).c$$java_io_Reader);
while ((strLine=reader.readLine$()) != null ){
strTag= String.instantialize(strLine.substring$I$I(0, 6));
if (strTag.equals$O("ATOM  ")) {
strTag= String.instantialize(strLine.substring$I$I(11, 15));
if (strTag.equals$O("  CA")) {
strTag= String.instantialize(strLine.substring$I$I(17, 20));
if (strTag.equals$O("ASP")) ++this.m_arrChargedAminos[0];
if (strTag.equals$O("GLU")) ++this.m_arrChargedAminos[1];
if (strTag.equals$O("TYR")) ++this.m_arrChargedAminos[2];
if (strTag.equals$O("CYS")) ++this.m_arrChargedAminos[3];
if (strTag.equals$O("LYS")) ++this.m_arrChargedAminos[4];
if (strTag.equals$O("ARG")) ++this.m_arrChargedAminos[5];
if (strTag.equals$O("HIS")) ++this.m_arrChargedAminos[6];
}}}
reader.close$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.FileNotFoundException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
}
} else {
throw e$$;
}
}
this.getCharge$D(this.m_dPH);
return true;
});

Clazz.newMeth(C$, 'getCharge$D',  function (dPH) {
var dAntilog;
var dCharge;
this.m_dCharge=0;
for (var i=0; i < 9; i++) {
dAntilog=Math.pow(10.0, (dPH - this.m_arrAminoPK[i]));
switch (i) {
case 0:
case 1:
case 7:
case 2:
case 3:
dCharge=-(dAntilog / (1.0 + dAntilog));
break;
case 6:
case 8:
case 4:
case 5:
dCharge=1.0 / (1.0 + dAntilog);
break;
default:
dCharge=0;
}
this.m_dCharge+=this.m_arrChargedAminos[i] * dCharge;
}
return this.m_dCharge;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.m_strName;
});

Clazz.newMeth(C$, 'getAmount$',  function () {
return this.m_nAmount;
});

Clazz.newMeth(C$, 'setAmount$I',  function (nAmount) {
this.m_nAmount=nAmount;
});

Clazz.newMeth(C$, 'getFile$',  function () {
return this.m_strFile;
});

Clazz.newMeth(C$, 'moveProtein$',  function () {
this.m_nPos+=1;
if (this.m_nBandwidth > 3) {
this.m_nBandwidth-=1;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
