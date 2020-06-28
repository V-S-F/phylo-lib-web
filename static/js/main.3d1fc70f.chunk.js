(this["webpackJsonpphylo-lib-web"]=this["webpackJsonpphylo-lib-web"]||[]).push([[0],{157:function(e,t,n){e.exports=n(240)},162:function(e,t,n){},240:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),c=n.n(o),i=(n(162),n(39)),u=(n(69),n(246)),s=n(249),l=n(248),f=a.a.createContext(),m=n(243),v=n(244),d=n(245),h=m.a.Content;function p(){var e=a.a.useContext(f),t=e.goVisualizePhylo,n=e.goGeneratePhylo;return a.a.createElement("div",{className:"wrapper main"},a.a.createElement(h,{justify:"center"},a.a.createElement(v.a,{className:"intro",justify:"center",gutter:[16,16]},a.a.createElement("div",null,a.a.createElement("h1",null,"Welcome to PhyloML"),a.a.createElement("h2",null,"A phylogenetic library written in OCaml."),a.a.createElement("h2",null,"Inferring Evolutionary History through modern genetic similarity."))),a.a.createElement(v.a,{justify:"center",gutter:[16,40]},a.a.createElement(d.a,{lg:7,md:10,sm:12},a.a.createElement("div",{className:"wrap"},a.a.createElement("button",{className:"offset",onClick:n},"Generate Phylogenetic Trees"))),a.a.createElement(d.a,{lg:7,md:10,sm:12},a.a.createElement("div",{className:"wrap"},a.a.createElement("button",{className:"offset",onClick:t},"Visualize Phylogenetic Trees"))))))}var y=n(110),g=n.n(y),b=n(133),E=n(242),w=n(113),_=n(247),x=n(35),k=n(16),N=n(31),j=n(9),P=n(24),O=n(1);P.b("Dna-PhyloLibWeb.Empty");function A(e,t){var n=N.e(e);return N.c((function(e){if(function(e){var t=e-84|0;if(!(t>11||t<0))return t>10||t<1;switch(t){case-18:case-16:case-15:case-14:return!1;case-19:case-17:case-13:return!0;default:return!1}}(e))return x.a(t,e)}),n)}function C(e){var t=x.c(128);return A(e,t),t}var S=x.d;function L(e,t){try{return x.e(e,t)}catch(n){return}}var T=x.e;x.b;var M=n(17),F=n(14),B=n(4),H=n(10),U=n(12);P.b("Tree-PhyloLibWeb.UnknownClade");function z(e){return e.tag?0:[e[0],F.b(F.g(z,e[1]))]}function G(e){return function(e){var t=z(e);return H.a(F.l(U.f,t),F.k(U.f,t))}(e)?e:j.c("clade_ids not unique")}var V={contents:0},R=(V.contents=V.contents+1|0,V.contents),I=B.a(0,[R,0,void 0,void 0,void 0,void 0]);function W(e){return!e.tag&&0===e[1]&&void 0===e[2]&&void 0===e[3]&&void 0===e[4]&&void 0===e[5]}function X(e,t,n){return B.a(1,[e,t,n])}function D(e){return B.a(1,[e,void 0,void 0])}function q(e){return I.tag?j.c("Representation invariant broken"):G(B.a(0,[(V.contents=V.contents+1|0,V.contents),e,void 0,void 0,void 0,void 0]))}var Y={contents:!0},J={contents:""};function Z(e){return Y.contents?j.l(e):void(J.contents=J.contents+M.b(e))}function $(e){return Y.contents?j.o(e):void(J.contents=J.contents+e)}function K(e){return Y.contents?void console.log(e):$(e+"\n")}function Q(e){for(var t=1;t<=e;++t)Z(32)}function ee(e,t,n){for(;;){var r=t,a=e;if(!a)return;var o=a[1],c=a[0];Q(c===r&&0!==c?1:((c-r|0)<<1)+(0===c||0===r?0:1)|0),0===o?$(n):Z(124),t=c+1|0,e=o}}function te(e){return ee(F.i(e),0,"|"),K("")}function ne(e){return e?ee(F.i(e),0,"o-"):j.f("ds")}function re(e,t,n){for(;;){var r=e;if(!r)return;var a=r[1],o=r[0];if(o.tag){0!==n?te(n):j.n(void 0),0!==n&&ne(n);var c=o[2];void 0!==c&&"Unnamed"===o[0]?K(c):K(o[0]),e=a}else{var i=0!==a?[t,n]:n?[t,n[1]]:[t,0];0!==n&&te(n),0!==n&&ne(n),$("C\n"),re(o[1],t+1|0,i),e=a}}}function ae(e){return J.contents="",Y.contents=!1,re([e,0],0,0),J.contents}var oe=n(38),ce=n(3),ie=n(20);function ue(e,t,n){return H.c(H.c(e,t),n)}function se(e,t,n,r,a,o,c,i){return[r.contents<1?-1e9:i+ce.c(ce.c(a,n.contents),r.contents-1|0)|0,n.contents<1?-1e9:i+ce.c(ce.c(a,n.contents-1|0),r.contents)|0,n.contents<1||r.contents<1?-1e9:ce.c(ce.c(a,n.contents-1|0),r.contents-1|0)+(H.a(L(e,(0>n.contents?0:n.contents)-1|0),L(t,(0>r.contents?0:r.contents)-1|0))?o:c)|0]}function le(e,t,n,r,a,o,c){for(var i=function(e,t,n,r,a){for(var o=oe.d(r,a,-1e9),c=0;c<r;++c)ce.d(ce.c(o,c),0,ie.b(c,n));for(var i=0;i<a;++i)ce.d(ce.c(o,0),i,ie.b(i,n));return o}(0,0,a,o,c),u=1;u<o;++u)for(var s=1;s<c;++s){var l=se(e,t,{contents:u},{contents:s},i,n,r,a);ce.d(ce.c(i,u),s,ue(l[0],l[1],l[2]))}return i}function fe(e,t,n,r,a,o){for(var c={contents:S(e)},i={contents:S(t)},u="",s="";c.contents>0||i.contents>0;){var l=se(e,t,c,i,n,r,a,o),f=ce.c(ce.c(n,c.contents),i.contents);f===l[2]?(u=M.b(T(e,c.contents-1|0))+u,s=M.b(T(t,i.contents-1|0))+s,c.contents=c.contents-1|0,i.contents=i.contents-1|0):f===l[0]?(u="_"+u,s=M.b(T(t,i.contents-1|0))+s,i.contents=i.contents-1|0):f===l[1]?(s="_"+s,u=M.b(T(e,c.contents-1|0))+u,c.contents=c.contents-1|0):j.c("This should not happen")}return[C(u),C(s)]}function me(e,t,n,r,a){for(var o=fe(e,t,le(e,t,n,r,a,S(e)+1|0,S(t)+1|0),n,r,a),c=ce.c(o,0),i=ce.c(o,1),u=S(c),s=0,l=0;l<u;++l)H.a(L(c,l),95)||H.a(L(i,l),95)?s=s-a|0:H.e(L(c,l),L(i,l))&&(s=s+1|0);return s}var ve=n(13),de=n(11);function he(e){if(0===ve.f(e))return[[0,0],0];var t=[[0,0],j.g];return ve.e((function(e,t,n){return t<n[1]?[e,t]:n}),e,t)}function pe(e){return he(e)[0]}function ye(e,t,n){return ve.d(n,[H.d(e,t),H.c(e,t)])}function ge(e,t,n){return e>=t?j.c("invalid input"):function(e,t,n){ve.c((function(t,r){return t[0]===e?(r+ye(t[1],e,n))/2:t[1]!==e?r:(r+ye(t[0],e,n))/2}),n)}(e,0,n),function(e,t){ve.c((function(t,n){return H.a(t[0],e)||H.a(t[1],e)?void 0:de.a(n)}),t)}(t,n),n}function be(e){return 0===ve.f(e)}function Ee(e,t,n,r){var a=ce.c(e,t),o=ce.c(e,n),c=F.a(t,r),i=F.a(n,r);if(void 0!==c){if(void 0!==i){var u=F.h(n,F.h(t,r));return[[t<n?t:n,q([c,[i,0]])],u]}var s=F.h(t,r);return[[t<n?t:n,q([D(o),[c,0]])],s]}if(void 0===i)return[[t<n?t:n,q([D(a),[D(o),0]])],r];var l=F.h(n,r);return[[t<n?t:n,q([D(a),[i,0]])],l]}var we=m.a.Content,_e=[],xe=[],ke=function(){var e=Object(b.a)(g.a.mark((function e(t,n){var r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(r=new FileReader).onload=function(){var e=C(r.result);_e.push(e),xe.push(n)},r.readAsText(t)}catch(a){console.log(a),console.log("File printing failed")}case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function Ne(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=function(){o(!0);var e=function(e,t){var n=t.length;if(0===n)return I;if(1===n)return D(ce.c(t,0));for(var r=e,a=0;;){var o=a,c=r;if(be(c)){var i=F.j((function(e){return e[1]}),o);return 1===F.f(i)?F.e(i):F.f(i)>1?q(i):j.c("Precondition violated in upgma_help")}var u=pe(c),s=u[1],l=u[0];a=Ee(t,l,s,o),r=ge(l,s,c)}}(function(e,t,n,r){for(var a=e.length,o=ve.b(void 0,a),c=0;c<a;++c)for(var i=c+1|0;i<a;++i)ve.a(o,[c,i],me(ce.c(e,c),ce.c(e,i),t,n,r));return o}(_e,1,-1,-1),xe);console.log(ae(e))},u={accept:".FASTA, .txt, .fasta",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",disabled:n,headers:{authorization:"authorization-text"},multiple:!0,transformFile:function(e){var t=e.name.split(".").slice(0,-1).join(".").toUpperCase();ke(e,t)}};return a.a.createElement("div",{className:"wrapper"},a.a.createElement(we,{justify:"center"},a.a.createElement(v.a,{className:"page",justify:"center"},a.a.createElement("div",null,a.a.createElement("h1",null,"Generate a Phylogenetic Tree"),a.a.createElement("h2",null,"By computing similarity scores for DNA samples of species, we can infer their species' evolutionary history through time. Begin by uploading .FASTA files that contain DNA sequences, or use our example DNA sequences."))),a.a.createElement(v.a,{className:"upload"},a.a.createElement(E.a,u,a.a.createElement(w.a,null,a.a.createElement(_.a,null)," Upload .FASTA files")),a.a.createElement(w.a,{onClick:function(){return c()}}," Generate tree "))))}var je=n(241),Pe=n(2),Oe=n(19),Ae=n(27);function Ce(e){return"number"!==typeof e||(e>=14?e<17:e<9)}function Se(e){if("number"!==typeof e)return e.tag?e[0]:String(e[0]);switch(e){case 0:return"phylogeny";case 1:return"name";case 2:return"description";case 3:return"clade";case 4:return"rank";case 5:return"confidence";case 6:return"taxonomy";case 7:return"scientific_name";case 8:return"id";case 9:return"<";case 10:return"</";case 11:return">";case 12:return"quote";case 13:return"=";case 14:return".";case 15:return"true";case 16:return"false";case 17:return"EOF";case 18:return"Unit"}}var Le=ve.b(void 0,16);function Te(e,t){var n;if(t){var r=j.h(e);n=k.b((function(e){try{return j.e(r)}catch(i){if(i===O.c)return;throw i}}))}else{var a=k.f(e);n=k.b((function(e){try{return function(e,t){for(;;){var n=t,r=k.g(e);if(void 0===r){if(""===n)throw O.c;return n}if(k.d(e),10===r)return n;if(13===r)return n;t=n+M.b(r)}}(a,"")}catch(i){if(i===O.c)return;throw i}}))}var o,c=k.g(n);if(void 0===c)return n;try{o=N.d(c,0,5)}catch(u){var i=Ae.a(u);if(i[0]===O.e)return n;throw i}return"<?xml"!==o||k.d(n),n}function Me(e,t){var n=k.g(e);if(void 0!==n){var r;try{r=n}catch(a){if(a===k.a)return Fe(t);throw a}return 32!==r?ve.g(Le,t)?ve.d(Le,t):function(e){return e>=60?e<63:34===e}(n)?B.a(1,[t]):(k.d(e),Me(e,t+M.b(n))):Fe(t)}return Fe(t)}function Fe(e){return ve.g(Le,e)?ve.d(Le,e):B.a(1,[e])}function Be(e){return!(e>57||e<48)}function He(e,t){for(;;){var n=t,r=k.g(e);if(void 0===r)return B.a(0,[Oe.f(n)]);if(!Be(r))return B.a(0,[Oe.f(n)]);k.d(e),t=n+M.b(r)}}function Ue(e){var t;try{t=function(e){var t;try{t=k.e(e)}catch(n){if(n===k.a)throw O.c;throw n}return k.f(t)}(e)}catch(u){if(u===O.c)return[17,0];throw u}for(var n=0;;){var r,a=n,o=0;try{r=k.e(t),o=1}catch(s){if(s===k.a)return F.i(a);if(s===O.c)return[17,0];throw s}if(1===o){var c=0;if(r>=32){if(46===r){n=[14,a];continue}if(r>=60)if(r>=63)c=2;else switch(r-60|0){case 0:var i=k.g(t);if(void 0===i)return F.i([9,a]);if(47===i){k.d(t),n=[10,a];continue}n=[9,a];continue;case 1:n=[13,a];continue;case 2:n=[11,a];continue}else if(r>=35)c=2;else switch(r-32|0){case 0:continue;case 1:c=2;break;case 2:n=[12,a];continue}}else if(r>=11){if(13===r)continue;c=2}else{if(r>=9)continue;c=2}if(2===c){if(Be(r)){n=[He(t,M.b(r)),a];continue}n=[Me(t,M.b(r)),a];continue}}}}ve.a(Le,"phylogeny",0),ve.a(Le,"name",1),ve.a(Le,"description",2),ve.a(Le,"clade",3),ve.a(Le,"rank",4),ve.a(Le,"confidence",5),ve.a(Le,"taxonomy",6),ve.a(Le,"scientific_name",7),ve.a(Le,"id",8),ve.a(Le,"true",15),ve.a(Le,"false",16);var ze=P.b("Phylo_parser-PhyloLibWeb.SyntaxError"),Ge={name:"",description:"",tree:I},Ve={name:void 0,rank:void 0,confidence:void 0,taxonomy:void 0};var Re={contents:function(e){return 17}},Ie={contents:function(e){return 17}};function We(e){var t=Pe.a(Re.contents,void 0);if(!H.a(t,e))throw Se(e),Se(t),ze;Pe.a(Ie.contents,void 0)}function Xe(e){for(;;){var t=e,n=Pe.a(Re.contents,void 0);if("number"===typeof n){switch(n){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 14:case 15:break;default:return t}We(n),e=""===t?Se(n):t+" "+Se(n)}else{if(n.tag){var r=n[0];if(We(B.a(1,[r])),""!==t){e=t+" "+r;continue}e=r;continue}var a=n[0];if(We(B.a(0,[a])),""!==t){e=t+" "+String(a);continue}e=String(a)}}}function De(e,t){return void 0!==e?[t,e]:[t,0]}function qe(e){return We(10),We(e),We(11)}function Ye(e,t){var n=Pe.a(Re.contents,void 0);if("number"===typeof n){if(12===n){We(12);var r,a=Pe.a(Re.contents,void 0);if("number"===typeof a)if(15!==a){if(16!==a)throw ze;We(16),r={tag_name:e.tag_name,str_attr:e.str_attr,num_attr:e.num_attr,bool_attr:De(e.bool_attr,[t,!1])}}else We(15),r={tag_name:e.tag_name,str_attr:e.str_attr,num_attr:e.num_attr,bool_attr:De(e.bool_attr,[t,!0])};else{var o=Xe("");r={tag_name:e.tag_name,str_attr:De(e.str_attr,[t,o]),num_attr:e.num_attr,bool_attr:e.bool_attr}}return We(12),r}throw ze}if(n.tag)throw ze;var c=n[0];return We(B.a(0,[c])),{tag_name:e.tag_name,str_attr:e.str_attr,num_attr:De(e.num_attr,[t,c]),bool_attr:e.bool_attr}}function Je(e){We(9);var t=Pe.a(Re.contents,void 0);if(!function(e){if("number"!==typeof e)return 1===e.tag;switch(e){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:return!0;default:return!1}}(t))throw ze;We(t);for(var n={tag_name:t,str_attr:void 0,num_attr:void 0,bool_attr:void 0};;){var r=n,a=Pe.a(Re.contents,void 0);if(!Ce(a)){if("number"===typeof a){if(11!==a)throw ze;return We(11),r}throw ze}We(a),We(13),n=Ye(r,Se(a))}}function Ze(e){for(;;){var t=Pe.a(Re.contents,void 0);if("number"!==typeof t)We(t);else{if(9!==t){if(10===t)return qe(e);We(t);continue}Ze(Je().tag_name)}}}function $e(e){if("number"===typeof Pe.a(Re.contents,void 0))throw ze;var t=Xe("");return qe(1),t}function Ke(e){if("number"===typeof Pe.a(Re.contents,void 0))throw ze;var t=Xe("");return qe(2),t}function Qe(e){We(14);var t=Pe.a(Re.contents,void 0);if("number"===typeof t)return qe(5),0;if(t.tag)return qe(5),0;var n=t[0],r=Oe.a(String(e)+"."+String(n));return We(B.a(0,[n])),qe(5),r}function et(e){var t=Pe.a(Re.contents,void 0);if("number"===typeof t){if(14===t)return Qe(0);throw ze}if(t.tag)throw ze;var n=t[0];return We(B.a(0,[n])),14===Pe.a(Re.contents,void 0)?Qe(n):(qe(5),n)}function tt(e){if("number"===typeof Pe.a(Re.contents,void 0))throw ze;var t=Xe("");return qe(8),t}function nt(e){if("number"===typeof Pe.a(Re.contents,void 0))throw ze;var t=Xe("");return qe(7),t}function rt(e){for(;;){var t=e,n=Pe.a(Re.contents,void 0);if("number"!==typeof n)throw ze;if(9!==n){if(10!==n)throw ze;return qe(6),t}var r=Je().tag_name;if("number"!==typeof r)Ze(r);else{if(7!==r){if(8!==r){Ze(r);continue}e={id:tt(),scientific_name:t.scientific_name};continue}e={id:t.id,scientific_name:nt()}}}}function at(e,t){var n=Pe.a(Re.contents,void 0);if("number"===typeof n){if(9!==n){if(10!==n)throw ze;if(qe(3),W(e)){var r=t.taxonomy;if(void 0!==r)return X(r.scientific_name,r.id,t.name);var a=t.name;return void 0!==a?X(a,void 0,a):D("Unnamed")}if(e.tag)return e;var o=t.taxonomy,c=void 0!==o?o.id:void 0;return B.a(0,[e[0],e[1],t.confidence,t.rank,c,t.name])}var i=Je().tag_name;if("number"===typeof i)switch(i){case 1:return at(e,{name:$e(),rank:t.rank,confidence:t.confidence,taxonomy:t.taxonomy});case 3:if(W(e))return at(at(e,Ve),t);var u=at(I,Ve);return at(q([e,[u,0]]),t);case 5:return at(e,{name:t.name,rank:t.rank,confidence:et(),taxonomy:t.taxonomy});case 6:return at(e,{name:t.name,rank:t.rank,confidence:t.confidence,taxonomy:rt({id:void 0,scientific_name:"Unnamed"})})}return Ze(i),at(e,t)}throw ze}function ot(e){var t=function(e){var t={contents:Ue(e)},n={contents:function(e,t){return 17}};return n.contents=function(r){return r?function(r){var a=t.contents;return a?a[0]:(t.contents=Ue(e),Pe.b(n.contents,!0,void 0))}:function(n){var r=t.contents;return r?(t.contents=r[1],18):(t.contents=Ue(e),18)}},n.contents}(e);Re.contents=Pe.a(t,!0),Ie.contents=Pe.a(t,!1);var n=Pe.a(Re.contents,void 0);if("number"===typeof n){if(9===n){var r=Je().tag_name;if("number"===typeof r)throw ze;if(1===r.tag){if("phyloxml"===r[0]){var a=Je().tag_name;if("number"===typeof a){if(0!==a)throw ze;var o=function(e){for(;;){var t=e,n=Pe.a(Re.contents,void 0);if("number"!==typeof n)throw ze;if(9!==n){if(10!==n)throw ze;return qe(0),t}var r=Je().tag_name;if("number"===typeof r)if(r>=4)Ze(r);else switch(r){case 0:Ze(r);continue;case 1:e={name:$e(),description:t.description,tree:t.tree};continue;case 2:e={name:t.name,description:Ke(),tree:t.tree};continue;case 3:e={name:t.name,description:t.description,tree:at(t.tree,Ve)};continue}else Ze(r)}}(Ge);return qe(B.a(1,["phyloxml"])),o}throw ze}throw ze}throw ze}if(17===n)return Ge;throw ze}throw ze}function ct(e){return ot(function(e){return Te(e,!1)}(e))}var it=m.a.Content;function ut(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),f=s[0],m=s[1],d=Object(r.useState)(""),h=Object(i.a)(d,2),p=h[0],y=h[1],g=new FileReader,b=function(e){try{g.onload=function(){var e=ae(ct(g.result).tree);m(e),o(!0)},g.readAsText(e)}catch(t){console.log(t),console.log("File printing failed")}},x={accept:".xml",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},transformFile:function(e){b(e)}};return a.a.createElement("div",{className:"wrapper"},a.a.createElement(it,{justify:"center"},a.a.createElement(v.a,{className:"page",justify:"center",gutter:[16,16]},a.a.createElement("div",null,a.a.createElement("h1",null,"Visualize PhyloXML"),a.a.createElement("h2",null,"Visualize an existing phylogenetic tree. Begin by uploading a phyloXML file, or use our example files."))),a.a.createElement(v.a,{className:"centered-content"},a.a.createElement(E.a,x,a.a.createElement(w.a,null,a.a.createElement(_.a,null),"Upload PhyloXML Files"))),a.a.createElement(v.a,{className:"centered-content"},a.a.createElement("p",{className:"phylo-example-text"},"or see some examples")),a.a.createElement(v.a,{className:"centered-content"},a.a.createElement(je.default.Group,{onChange:function(e){var t="/phylo-lib-web/examples/phyloXML/"+e.target.value+".xml";y(e.target.value),fetch(t).then((function(e){return e.blob()})).then((function(e){return b(e)}))},defaultValue:"phyloXML examples"},a.a.createElement(je.default.Button,{value:"amphi_frost"},"Amphibian Phylogeny"),a.a.createElement(je.default.Button,{value:"tol_156"},"The Tree of Life"),a.a.createElement(je.default.Button,{value:"apaf"},"Apaf-1 Gene Family Tree"),a.a.createElement(je.default.Button,{value:"adh"},"Alcohol Dehydrogenases")),a.a.createElement(u.a,{content:a.a.createElement("p",null,"Example files obtained from"," ",a.a.createElement("a",{href:"http://phyloxml.org/",target:"_blank",rel:"noopener noreferrer"},"this website"),".",""!==p?a.a.createElement("p",null,"See the phyloXML source for the current tree"," ",a.a.createElement("a",{href:"adh"!==p?"http://phyloxml.org/archaeopteryx-js/phyloxml_trees/"+p+".xml":"http://www.phyloxml.org/examples/adh.xml",target:"_blank",rel:"noopener noreferrer"},"here"),"."):null),title:"Credits",trigger:"click"},a.a.createElement("div",{className:"phylo-example-credits"},a.a.createElement(l.a,null)))),n?a.a.createElement(v.a,{justify:"center"},a.a.createElement("div",{className:"ascii-phylo-container"},a.a.createElement("p",{className:"ascii-phylo"},f))):null,a.a.createElement("svg",{id:"phylo-container",name:"phylo-container"})))}var st=function(e){var t=e.useBack,n=a.a.useContext(f).goHome,r=a.a.createElement("div",null,a.a.createElement("p",null,"Content"),a.a.createElement("p",null,"Content"));return a.a.createElement("header",{className:"site-header"},a.a.createElement("button",{className:"site-title",onClick:n},t?a.a.createElement(s.a,{style:{alignSelf:"center",paddingRight:"10px"}}):null,"PhyloML"),a.a.createElement(u.a,{content:r,className:"tooltip",title:"Title",trigger:"click"},a.a.createElement("a",{className:"tooltip"}," ",a.a.createElement(l.a,{style:{paddingRight:"0.5em"}}),"Confused by all the terms?")))},lt=function(){var e=Object(r.useState)("HOME"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=a.a.useMemo((function(){return{goHome:function(){o("HOME")},goVisualizePhylo:function(){o("VISUALIZE_PHYLO")},goGeneratePhylo:function(){o("GENERATE_PHYLO")}}}),[]),u=function(){switch(n){case"HOME":return a.a.createElement(p,null);case"VISUALIZE_PHYLO":return a.a.createElement(ut,null);case"GENERATE_PHYLO":return a.a.createElement(Ne,null);default:return null}};return a.a.createElement(f.Provider,{value:c},a.a.createElement(st,{useBack:"HOME"!==n}),a.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,n){}},[[157,1,2]]]);
//# sourceMappingURL=main.3d1fc70f.chunk.js.map