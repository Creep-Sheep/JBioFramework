(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "RetentionPolicy", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SOURCE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CLASS", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RUNTIME", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-19 05:25:25 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
