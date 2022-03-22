(function(){var P$=Clazz.newPackage("main.java.MainWindows"),I$=[[0,'java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.JLabel','java.awt.Font','main.java.Utilities.BrowserLauncher','java.awt.Cursor','javax.swing.JButton','javax.swing.JFrame','main.java.Utilities.EmailForm','javax.swing.JOptionPane']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Welcome", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['jbfWebsite']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_LayoutManager.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
var c=Clazz.new_($I$(2,1));
c.gridy=0;
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [this.mkHeadPanel$(), c]);
c.gridy=1;
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [this.mkBodyPanel$(), c]);
c.gridy=2;
C$.superclazz.prototype.add$java_awt_Component$O.apply(this, [this.mkTailPanel$(), c]);
}, 1);

Clazz.newMeth(C$, 'mkHeadPanel$',  function () {
var headP=Clazz.new_([Clazz.new_($I$(1,1))],$I$(3,1).c$$java_awt_LayoutManager);
var con=Clazz.new_($I$(2,1));
var head=Clazz.new_($I$(4,1).c$$S,["Welcome to JBioframework!"]);
head.setFont$java_awt_Font(Clazz.new_($I$(5,1).c$$S$I$I,["SansSerif", 1, 26]));
con.gridy=0;
headP.add$java_awt_Component$O(head, con);
var subHeadP=Clazz.new_($I$(3,1));
var s;
if (true ||false) {
s="<html>JBioFramework (JBF) is a set of chemical separations simulations frequently used in chemistry, biochemistry and proteomics research. <br>It is written in the Java programming language and will run on any and all systems that have the JVM installed. <br>A copy of the source code is available online on Github, or by clicking \'Contact Us\' > \'Source Code\'. Click on one of the tabs  in the upper left to get started.";
} else {
s="<html>JBioFramework (JBF) is a set of chemical separations simulations frequently used in chemistry, biochemistry and proteomics research. It is written in the Java programming language and will run on any and all systems that have the JVM installed. A copy of the source code is available online on Github, or by clicking \'Contact Us\' > \'Source Code\'. Click on one of the tabs  in the upper left to get started.";
}var html1="<html><body style=\"width: ";
var html2="px\">";
var head1=Clazz.new_($I$(4,1).c$$S,[html1 + "500" + html2 + s ]);
var url1=C$.jbfWebsite;
var s2="<html><a href=" + url1 + ">here</a>.</body>" ;
var headLink=Clazz.new_($I$(4,1).c$$S,[s2]);
headLink.addMouseListener$java_awt_event_MouseListener(((P$.Welcome$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.MouseListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
try {
$I$(6).openURL$S(this.$finals$.url1);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (arg0) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (arg0) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (arg0) {
this.$finals$.headLink.setCursor$java_awt_Cursor(Clazz.new_($I$(7,1).c$$I,[12]));
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (arg0) {
this.$finals$.headLink.setCursor$java_awt_Cursor(Clazz.new_($I$(7,1).c$$I,[0]));
});
})()
), Clazz.new_(P$.Welcome$1.$init$,[this, {url1:url1,headLink:headLink}])));
head1.setFont$java_awt_Font(Clazz.new_($I$(5,1).c$$S$I$I,["SansSerif", 0, 14]));
subHeadP.add$java_awt_Component(head1);
con.gridy=1;
headP.add$java_awt_Component$O(subHeadP, con);
return headP;
});

Clazz.newMeth(C$, 'mkBodyPanel$',  function () {
var body=Clazz.new_($I$(3,1));
var help=Clazz.new_($I$(8,1).c$$S,["Help"]);
help.setToolTipText$S("Opens a link to our wiki");
help.addActionListener$java_awt_event_ActionListener(((P$.Welcome$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="http://sourceforge.net/p/jbf/wiki/";
try {
$I$(6).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$2.$init$,[this, null])));
body.add$java_awt_Component(help);
var about=Clazz.new_($I$(8,1).c$$S,["About"]);
about.setToolTipText$S("Open project page on sourceforge.");
about.addActionListener$java_awt_event_ActionListener(((P$.Welcome$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(6).openURL$S("http://www.rit.edu/cos/jbioframework/");
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$3.$init$,[this, null])));
body.add$java_awt_Component(about);
var probSheets=Clazz.new_($I$(8,1).c$$S,["Problem Sets"]);
probSheets.setToolTipText$S("Download one of our pre-made problem sets:");
probSheets.addActionListener$java_awt_event_ActionListener(((P$.Welcome$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var pSf=Clazz.new_($I$(9,1).c$$S,["Problem Sets"]);
var pSp=Clazz.new_($I$(3,1));
var pSl=Clazz.new_($I$(4,1).c$$S,["Choose a problem set to open \n"]);
pSp.add$java_awt_Component(pSl);
var pSb1=Clazz.new_($I$(8,1).c$$S,["Problem Set 1"]);
pSb1.setToolTipText$S("High School and First Year College level");
pSb1.addActionListener$java_awt_event_ActionListener(((P$.Welcome$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="https://docs.google.com/document/d/1sIvaC-tOh8Dm7c5P7t71OXytmwkna1Yp0zaxXcGsKms/edit?usp=sharing";
try {
$I$(6).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$4$1.$init$,[this, null])));
pSp.add$java_awt_Component(pSb1);
var pSb2=Clazz.new_($I$(8,1).c$$S,["Problem Set 2"]);
pSb2.setToolTipText$S("Upper Division Bio and Chem Students");
pSb2.addActionListener$java_awt_event_ActionListener(((P$.Welcome$4$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$4$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="https://docs.google.com/document/d/135rCzggvppfCvhCaAjUzZAB2NTO5sUV6vy_OtPTxeYc/edit?usp=sharing";
try {
$I$(6).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$4$2.$init$,[this, null])));
pSp.add$java_awt_Component(pSb2);
var pSsl=Clazz.new_($I$(4,1).c$$S,["Then take our brief "]);
var pSsurvey=Clazz.new_($I$(8,1).c$$S,["Survey."]);
pSsurvey.setToolTipText$S("Opens brief survey");
pSsurvey.addActionListener$java_awt_event_ActionListener(((P$.Welcome$4$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$4$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="https://www.surveymonkey.com/s/8K7YR2C";
try {
$I$(6).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$4$3.$init$,[this, null])));
pSp.add$java_awt_Component(pSsl);
pSp.add$java_awt_Component(pSsurvey);
pSf.setVisible$Z(true);
pSf.setSize$I$I(350, 125);
pSf.add$java_awt_Component(pSp);
});
})()
), Clazz.new_(P$.Welcome$4.$init$,[this, null])));
body.add$java_awt_Component(probSheets);
return body;
});

Clazz.newMeth(C$, 'mkTailPanel$',  function () {
var tail=Clazz.new_($I$(3,1));
var contact=Clazz.new_($I$(8,1).c$$S,["Contact Us"]);
contact.setToolTipText$S("Contact, review, or view source code");
contact.addActionListener$java_awt_event_ActionListener(((P$.Welcome$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var f=Clazz.new_($I$(9,1).c$$S,["Contact Us"]);
var p=Clazz.new_($I$(3,1));
var l=Clazz.new_($I$(4,1).c$$S,["Ask a Question, Review the Software, View/Edit the Source"]);
p.add$java_awt_Component(l);
var emailB=Clazz.new_($I$(8,1).c$$S,["Send an Email"]);
emailB.setToolTipText$S("Send email to us from within the program");
emailB.addActionListener$java_awt_event_ActionListener(((P$.Welcome$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var emailFrame=Clazz.new_($I$(10,1));
emailFrame.setVisible$Z(true);
});
})()
), Clazz.new_(P$.Welcome$5$1.$init$,[this, null])));
p.add$java_awt_Component(emailB);
var review=Clazz.new_($I$(8,1).c$$S,["Review JBF"]);
review.setToolTipText$S("Opens review page on sourceforge");
review.addActionListener$java_awt_event_ActionListener(((P$.Welcome$5$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$5$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var url="https://sourceforge.net/projects/jbf/reviews/?source=navbar";
try {
$I$(6).openURL$S(url);
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$5$2.$init$,[this, null])));
p.add$java_awt_Component(review);
var bug=Clazz.new_($I$(8,1).c$$S,["Bug Report"]);
bug.setToolTipText$S("Report an issue with the software");
bug.addActionListener$java_awt_event_ActionListener(((P$.Welcome$5$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$5$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
$I$(11).showMessageDialog$java_awt_Component$O(null, "will copy information about program");
});
})()
), Clazz.new_(P$.Welcome$5$3.$init$,[this, null])));
var source=Clazz.new_($I$(8,1).c$$S,["Source Code"]);
source.setToolTipText$S("Link to available source code");
source.addActionListener$java_awt_event_ActionListener(((P$.Welcome$5$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$5$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
$I$(6).openURL$S("https://github.com/RITJBF/JBioFramework/tree/master/");
} catch (i) {
if (Clazz.exceptionOf(i,"java.io.IOException")){
System.err.println$S(i.getMessage$());
} else {
throw i;
}
}
});
})()
), Clazz.new_(P$.Welcome$5$4.$init$,[this, null])));
p.add$java_awt_Component(source);
f.setVisible$Z(true);
f.setSize$I$I(400, 100);
f.add$java_awt_Component(p);
});
})()
), Clazz.new_(P$.Welcome$5.$init$,[this, null])));
tail.add$java_awt_Component(contact);
var credits=Clazz.new_($I$(8,1).c$$S,["Credits"]);
credits.setToolTipText$S("Citations");
credits.addActionListener$java_awt_event_ActionListener(((P$.Welcome$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Welcome$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var frame=Clazz.new_($I$(9,1).c$$S,["Credits"]);
var mrvn="<html> <u>Marvin</u> was used for drawing, displaying and characterizing chemical structures, substructures and reactions, Marvin 5.11.5, 2013, ChemAxon (http://www.chemaxon.com)</body>";
var srch="<html> The <u>Blast</u> [National Library of Medicine], <u>NCBI</u> [National Center for Biotechnology Information], and <u>Uniprot</u> [The Uniprot Consortium] search engines. </body>";
var rt="This software was developed at Rochester Institute of Technology (<u>RIT</u>). ";
var html1="<html><body style=\'width: ";
var html2="px\'>";
var head=Clazz.new_($I$(4,1).c$$S,[".............................................."]);
var tail=Clazz.new_($I$(4,1).c$$S,[".............................................."]);
var marvin=Clazz.new_($I$(4,1).c$$S,[html1 + "250" + html2 + '-' + mrvn ]);
var search=Clazz.new_($I$(4,1).c$$S,[html1 + "250" + html2 + '-' + srch ]);
var rit=Clazz.new_($I$(4,1).c$$S,[html1 + "250" + html2 + '-' + rt ]);
var panel=Clazz.new_($I$(3,1));
panel.add$java_awt_Component(head);
panel.add$java_awt_Component(marvin);
panel.add$java_awt_Component(search);
panel.add$java_awt_Component(rit);
panel.add$java_awt_Component(tail);
frame.add$java_awt_Component(panel);
frame.setVisible$Z(true);
frame.setSize$I$I(400, 250);
});
})()
), Clazz.new_(P$.Welcome$6.$init$,[this, null])));
tail.add$java_awt_Component(credits);
return tail;
});

C$.$static$=function(){C$.$static$=0;
C$.jbfWebsite="https://sourceforge.net/projects/jbf/";
};
})();
;Clazz.setTVer('3.3.1-v4');//Created 2022-03-22 08:41:08 Java2ScriptVisitor version 3.3.1-v4 net.sf.j2s.core.jar version 3.3.1-v4
