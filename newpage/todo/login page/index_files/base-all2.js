(function(){
var _1,_2,_3,_4,_5={},_6={},_7=/\\/g;
var _8=function(_9,_a){
if(_9==null){
return null;
}
if(_9.Slick===true){
return _9;
}
_9=(""+_9).replace(/^\s+|\s+$/g,"");
_4=!!_a;
var _b=(_4)?_6:_5;
if(_b[_9]){
return _b[_9];
}
_1={Slick:true,expressions:[],raw:_9,reverse:function(){
return _8(this.raw,true);
}};
_2=-1;
while(_9!=(_9=_9.replace(_c,_d))){
}
_1.length=_1.expressions.length;
return _b[_9]=(_4)?_e(_1):_1;
};
var _f=function(_10){
if(_10==="!"){
return " ";
}else{
if(_10===" "){
return "!";
}else{
if((/^!/).test(_10)){
return _10.replace(/^!/,"");
}else{
return "!"+_10;
}
}
}
};
var _e=function(_11){
var _12=_11.expressions;
for(var i=0;i<_12.length;i++){
var exp=_12[i];
var _13={parts:[],tag:"*",combinator:_f(exp[0].combinator)};
for(var j=0;j<exp.length;j++){
var _14=exp[j];
if(!_14.reverseCombinator){
_14.reverseCombinator=" ";
}
_14.combinator=_14.reverseCombinator;
delete _14.reverseCombinator;
}
exp.reverse().push(_13);
}
return _11;
};
var _15=function(_16){
return _16.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,"\\$&");
};
var _c=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|:+(<unicode>+)(?:\\((?:(?:([\"'])([^\\12]*)\\12)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+_15(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function _d(_17,_18,_19,_1a,_1b,id,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24){
if(_18||_2===-1){
_1.expressions[++_2]=[];
_3=-1;
if(_18){
return "";
}
}
if(_19||_1a||_3===-1){
_19=_19||" ";
var _25=_1.expressions[_2];
if(_4&&_25[_3]){
_25[_3].reverseCombinator=_f(_19);
}
_25[++_3]={combinator:_19,tag:"*"};
}
var _26=_1.expressions[_2][_3];
if(_1b){
_26.tag=_1b.replace(_7,"");
}else{
if(id){
_26.id=id.replace(_7,"");
}else{
if(_1c){
_1c=_1c.replace(_7,"");
if(!_26.classList){
_26.classList=[];
}
if(!_26.classes){
_26.classes=[];
}
_26.classList.push(_1c);
_26.classes.push({value:_1c,regexp:new RegExp("(^|\\s)"+_15(_1c)+"(\\s|$)")});
}else{
if(_21){
_24=_24||_23;
_24=_24?_24.replace(_7,""):null;
if(!_26.pseudos){
_26.pseudos=[];
}
_26.pseudos.push({key:_21.replace(_7,""),value:_24});
}else{
if(_1d){
_1d=_1d.replace(_7,"");
_20=(_20||"").replace(_7,"");
var _27,_c;
switch(_1e){
case "^=":
_c=new RegExp("^"+_15(_20));
break;
case "$=":
_c=new RegExp(_15(_20)+"$");
break;
case "~=":
_c=new RegExp("(^|\\s)"+_15(_20)+"(\\s|$)");
break;
case "|=":
_c=new RegExp("^"+_15(_20)+"(-|$)");
break;
case "=":
_27=function(_28){
return _20==_28;
};
break;
case "*=":
_27=function(_29){
return _29&&_29.indexOf(_20)>-1;
};
break;
case "!=":
_27=function(_2a){
return _20!=_2a;
};
break;
default:
_27=function(_2b){
return !!_2b;
};
}
if(_20==""&&(/^[*$^]=$/).test(_1e)){
_27=function(){
return false;
};
}
if(!_27){
_27=function(_2c){
return _2c&&_c.test(_2c);
};
}
if(!_26.attributes){
_26.attributes=[];
}
_26.attributes.push({key:_1d,operator:_1e,value:_20,test:_27});
}
}
}
}
}
return "";
};
var _2d=(this.Slick||{});
_2d.parse=function(_2e){
return _8(_2e);
};
_2d.escapeRegExp=_15;
if(!this.Slick){
this.Slick=_2d;
}
}).apply((typeof exports!="undefined")?exports:this);
(function(){
var _2f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,_30=0,_31=Object.prototype.toString,_32=false,_33=true;
[0,0].sort(function(){
_33=false;
return 0;
});
var _34=function(_35,_36,_37,_38){
_37=_37||[];
_36=_36||document;
var _39=_36;
if(_36.nodeType!==1&&_36.nodeType!==9){
return [];
}
if(!_35||typeof _35!=="string"){
return _37;
}
var m,set,_3a,_3b,ret,cur,pop,i,_3c=true,_3d=_34.isXML(_36),_3e=[],_3f=_35;
do{
_2f.exec("");
m=_2f.exec(_3f);
if(m){
_3f=m[3];
_3e.push(m[1]);
if(m[2]){
_3b=m[3];
break;
}
}
}while(m);
if(_3e.length>1&&_40.exec(_35)){
if(_3e.length===2&&_41.relative[_3e[0]]){
set=_42(_3e[0]+_3e[1],_36);
}else{
set=_41.relative[_3e[0]]?[_36]:_34(_3e.shift(),_36);
while(_3e.length){
_35=_3e.shift();
if(_41.relative[_35]){
_35+=_3e.shift();
}
set=_42(_35,set);
}
}
}else{
if(!_38&&_3e.length>1&&_36.nodeType===9&&!_3d&&_41.match.ID.test(_3e[0])&&!_41.match.ID.test(_3e[_3e.length-1])){
ret=_34.find(_3e.shift(),_36,_3d);
_36=ret.expr?_34.filter(ret.expr,ret.set)[0]:ret.set[0];
}
if(_36){
ret=_38?{expr:_3e.pop(),set:_43(_38)}:_34.find(_3e.pop(),_3e.length===1&&(_3e[0]==="~"||_3e[0]==="+")&&_36.parentNode?_36.parentNode:_36,_3d);
set=ret.expr?_34.filter(ret.expr,ret.set):ret.set;
if(_3e.length>0){
_3a=_43(set);
}else{
_3c=false;
}
while(_3e.length){
cur=_3e.pop();
pop=cur;
if(!_41.relative[cur]){
cur="";
}else{
pop=_3e.pop();
}
if(pop==null){
pop=_36;
}
_41.relative[cur](_3a,pop,_3d);
}
}else{
_3a=_3e=[];
}
}
if(!_3a){
_3a=set;
}
if(!_3a){
_34.error(cur||_35);
}
if(_31.call(_3a)==="[object Array]"){
if(!_3c){
_37.push.apply(_37,_3a);
}else{
if(_36&&_36.nodeType===1){
for(i=0;_3a[i]!=null;i++){
if(_3a[i]&&(_3a[i]===true||_3a[i].nodeType===1&&_34.contains(_36,_3a[i]))){
_37.push(set[i]);
}
}
}else{
for(i=0;_3a[i]!=null;i++){
if(_3a[i]&&_3a[i].nodeType===1){
_37.push(set[i]);
}
}
}
}
}else{
_43(_3a,_37);
}
if(_3b){
_34(_3b,_39,_37,_38);
_34.uniqueSort(_37);
}
return _37;
};
_34.uniqueSort=function(_44){
if(_45){
_32=_33;
_44.sort(_45);
if(_32){
for(var i=1;i<_44.length;i++){
if(_44[i]===_44[i-1]){
_44.splice(i--,1);
}
}
}
}
return _44;
};
_34.matches=function(_46,set){
return _34(_46,null,null,set);
};
_34.matchesSelector=function(_47,_48){
return _34(_48,null,null,[_47]).length>0;
};
_34.find=function(_49,_4a,_4b){
var set;
if(!_49){
return [];
}
for(var i=0,l=_41.order.length;i<l;i++){
var _4c,_4d=_41.order[i];
if((_4c=_41.leftMatch[_4d].exec(_49))){
var _4e=_4c[1];
_4c.splice(1,1);
if(_4e.substr(_4e.length-1)!=="\\"){
_4c[1]=(_4c[1]||"").replace(/\\/g,"");
set=_41.find[_4d](_4c,_4a,_4b);
if(set!=null){
_49=_49.replace(_41.match[_4d],"");
break;
}
}
}
}
if(!set){
set=_4a.getElementsByTagName("*");
}
return {set:set,expr:_49};
};
_34.filter=function(_4f,set,_50,not){
var _51,_52,old=_4f,_53=[],_54=set,_55=set&&set[0]&&_34.isXML(set[0]);
while(_4f&&set.length){
for(var _56 in _41.filter){
if((_51=_41.leftMatch[_56].exec(_4f))!=null&&_51[2]){
var _57,_58,_59=_41.filter[_56],_5a=_51[1];
_52=false;
_51.splice(1,1);
if(_5a.substr(_5a.length-1)==="\\"){
continue;
}
if(_54===_53){
_53=[];
}
if(_41.preFilter[_56]){
_51=_41.preFilter[_56](_51,_54,_50,_53,not,_55);
if(!_51){
_52=_57=true;
}else{
if(_51===true){
continue;
}
}
}
if(_51){
for(var i=0;(_58=_54[i])!=null;i++){
if(_58){
_57=_59(_58,_51,i,_54);
var _5b=not^!!_57;
if(_50&&_57!=null){
if(_5b){
_52=true;
}else{
_54[i]=false;
}
}else{
if(_5b){
_53.push(_58);
_52=true;
}
}
}
}
}
if(_57!==undefined){
if(!_50){
_54=_53;
}
_4f=_4f.replace(_41.match[_56],"");
if(!_52){
return [];
}
break;
}
}
}
if(_4f===old){
if(_52==null){
_34.error(_4f);
}else{
break;
}
}
old=_4f;
}
return _54;
};
_34.error=function(msg){
throw "Syntax error, unrecognized expression: "+msg;
};
var _41=_34.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(_5c){
return _5c.getAttribute("href");
}},relative:{"+":function(_5d,_5e){
var _5f=typeof _5e==="string",_60=_5f&&!/\W/.test(_5e),_61=_5f&&!_60;
if(_60){
_5e=_5e.toLowerCase();
}
for(var i=0,l=_5d.length,_62;i<l;i++){
if((_62=_5d[i])){
while((_62=_62.previousSibling)&&_62.nodeType!==1){
}
_5d[i]=_61||_62&&_62.nodeName.toLowerCase()===_5e?_62||false:_62===_5e;
}
}
if(_61){
_34.filter(_5e,_5d,true);
}
},">":function(_63,_64){
var _65,_66=typeof _64==="string",i=0,l=_63.length;
if(_66&&!/\W/.test(_64)){
_64=_64.toLowerCase();
for(;i<l;i++){
_65=_63[i];
if(_65){
var _67=_65.parentNode;
_63[i]=_67.nodeName.toLowerCase()===_64?_67:false;
}
}
}else{
for(;i<l;i++){
_65=_63[i];
if(_65){
_63[i]=_66?_65.parentNode:_65.parentNode===_64;
}
}
if(_66){
_34.filter(_64,_63,true);
}
}
},"":function(_68,_69,_6a){
var _6b,_6c=_30++,_6d=_6e;
if(typeof _69==="string"&&!/\W/.test(_69)){
_69=_69.toLowerCase();
_6b=_69;
_6d=_6f;
}
_6d("parentNode",_69,_6c,_68,_6b,_6a);
},"~":function(_70,_71,_72){
var _73,_74=_30++,_75=_6e;
if(typeof _71==="string"&&!/\W/.test(_71)){
_71=_71.toLowerCase();
_73=_71;
_75=_6f;
}
_75("previousSibling",_71,_74,_70,_73,_72);
}},find:{ID:function(_76,_77,_78){
if(typeof _77.getElementById!=="undefined"&&!_78){
var m=_77.getElementById(_76[1]);
return m&&m.parentNode?[m]:[];
}
},NAME:function(_79,_7a){
if(typeof _7a.getElementsByName!=="undefined"){
var ret=[],_7b=_7a.getElementsByName(_79[1]);
for(var i=0,l=_7b.length;i<l;i++){
if(_7b[i].getAttribute("name")===_79[1]){
ret.push(_7b[i]);
}
}
return ret.length===0?null:ret;
}
},TAG:function(_7c,_7d){
return _7d.getElementsByTagName(_7c[1]);
}},preFilter:{CLASS:function(_7e,_7f,_80,_81,not,_82){
_7e=" "+_7e[1].replace(/\\/g,"")+" ";
if(_82){
return _7e;
}
for(var i=0,_83;(_83=_7f[i])!=null;i++){
if(_83){
if(not^(_83.className&&(" "+_83.className+" ").replace(/[\t\n\r]/g," ").indexOf(_7e)>=0)){
if(!_80){
_81.push(_83);
}
}else{
if(_80){
_7f[i]=false;
}
}
}
}
return false;
},ID:function(_84){
return _84[1].replace(/\\/g,"");
},TAG:function(_85,_86){
return _85[1].toLowerCase();
},CHILD:function(_87){
if(_87[1]==="nth"){
if(!_87[2]){
_34.error(_87[0]);
}
_87[2]=_87[2].replace(/^\+|\s*/g,"");
var _88=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(_87[2]==="even"&&"2n"||_87[2]==="odd"&&"2n+1"||!/\D/.test(_87[2])&&"0n+"+_87[2]||_87[2]);
_87[2]=(_88[1]+(_88[2]||1))-0;
_87[3]=_88[3]-0;
}else{
if(_87[2]){
_34.error(_87[0]);
}
}
_87[0]=_30++;
return _87;
},ATTR:function(_89,_8a,_8b,_8c,not,_8d){
var _8e=_89[1].replace(/\\/g,"");
if(!_8d&&_41.attrMap[_8e]){
_89[1]=_41.attrMap[_8e];
}
if(_89[2]==="~="){
_89[4]=" "+_89[4]+" ";
}
return _89;
},PSEUDO:function(_8f,_90,_91,_92,not){
if(_8f[1]==="not"){
if((_2f.exec(_8f[3])||"").length>1||/^\w/.test(_8f[3])){
_8f[3]=_34(_8f[3],null,null,_90);
}else{
var ret=_34.filter(_8f[3],_90,_91,true^not);
if(!_91){
_92.push.apply(_92,ret);
}
return false;
}
}else{
if(_41.match.POS.test(_8f[0])||_41.match.CHILD.test(_8f[0])){
return true;
}
}
return _8f;
},POS:function(_93){
_93.unshift(true);
return _93;
}},filters:{enabled:function(_94){
return _94.disabled===false&&_94.type!=="hidden";
},disabled:function(_95){
return _95.disabled===true;
},checked:function(_96){
return _96.checked===true;
},selected:function(_97){
_97.parentNode.selectedIndex;
return _97.selected===true;
},parent:function(_98){
return !!_98.firstChild;
},empty:function(_99){
return !_99.firstChild;
},has:function(_9a,i,_9b){
return !!_34(_9b[3],_9a).length;
},header:function(_9c){
return (/h\d/i).test(_9c.nodeName);
},text:function(_9d){
return "text"===_9d.type;
},radio:function(_9e){
return "radio"===_9e.type;
},checkbox:function(_9f){
return "checkbox"===_9f.type;
},file:function(_a0){
return "file"===_a0.type;
},password:function(_a1){
return "password"===_a1.type;
},submit:function(_a2){
return "submit"===_a2.type;
},image:function(_a3){
return "image"===_a3.type;
},reset:function(_a4){
return "reset"===_a4.type;
},button:function(_a5){
return "button"===_a5.type||_a5.nodeName.toLowerCase()==="button";
},input:function(_a6){
return (/input|select|textarea|button/i).test(_a6.nodeName);
}},setFilters:{first:function(_a7,i){
return i===0;
},last:function(_a8,i,_a9,_aa){
return i===_aa.length-1;
},even:function(_ab,i){
return i%2===0;
},odd:function(_ac,i){
return i%2===1;
},lt:function(_ad,i,_ae){
return i<_ae[3]-0;
},gt:function(_af,i,_b0){
return i>_b0[3]-0;
},nth:function(_b1,i,_b2){
return _b2[3]-0===i;
},eq:function(_b3,i,_b4){
return _b4[3]-0===i;
}},filter:{PSEUDO:function(_b5,_b6,i,_b7){
var _b8=_b6[1],_b9=_41.filters[_b8];
if(_b9){
return _b9(_b5,i,_b6,_b7);
}else{
if(_b8==="contains"){
return (_b5.textContent||_b5.innerText||_34.getText([_b5])||"").indexOf(_b6[3])>=0;
}else{
if(_b8==="not"){
var not=_b6[3];
for(var j=0,l=not.length;j<l;j++){
if(not[j]===_b5){
return false;
}
}
return true;
}else{
_34.error(_b8);
}
}
}
},CHILD:function(_ba,_bb){
var _bc=_bb[1],_bd=_ba;
switch(_bc){
case "only":
case "first":
while((_bd=_bd.previousSibling)){
if(_bd.nodeType===1){
return false;
}
}
if(_bc==="first"){
return true;
}
_bd=_ba;
case "last":
while((_bd=_bd.nextSibling)){
if(_bd.nodeType===1){
return false;
}
}
return true;
case "nth":
var _be=_bb[2],_bf=_bb[3];
if(_be===1&&_bf===0){
return true;
}
var _c0=_bb[0],_c1=_ba.parentNode;
if(_c1&&(_c1.sizcache!==_c0||!_ba.nodeIndex)){
var _c2=0;
for(_bd=_c1.firstChild;_bd;_bd=_bd.nextSibling){
if(_bd.nodeType===1){
_bd.nodeIndex=++_c2;
}
}
_c1.sizcache=_c0;
}
var _c3=_ba.nodeIndex-_bf;
if(_be===0){
return _c3===0;
}else{
return (_c3%_be===0&&_c3/_be>=0);
}
}
},ID:function(_c4,_c5){
return _c4.nodeType===1&&_c4.getAttribute("id")===_c5;
},TAG:function(_c6,_c7){
return (_c7==="*"&&_c6.nodeType===1)||_c6.nodeName.toLowerCase()===_c7;
},CLASS:function(_c8,_c9){
return (" "+(_c8.className||_c8.getAttribute("class"))+" ").indexOf(_c9)>-1;
},ATTR:function(_ca,_cb){
var _cc=_cb[1],_cd=_41.attrHandle[_cc]?_41.attrHandle[_cc](_ca):_ca[_cc]!=null?_ca[_cc]:_ca.getAttribute(_cc),_ce=_cd+"",_cf=_cb[2],_d0=_cb[4];
return _cd==null?_cf==="!=":_cf==="="?_ce===_d0:_cf==="*="?_ce.indexOf(_d0)>=0:_cf==="~="?(" "+_ce+" ").indexOf(_d0)>=0:!_d0?_ce&&_cd!==false:_cf==="!="?_ce!==_d0:_cf==="^="?_ce.indexOf(_d0)===0:_cf==="$="?_ce.substr(_ce.length-_d0.length)===_d0:_cf==="|="?_ce===_d0||_ce.substr(0,_d0.length+1)===_d0+"-":false;
},POS:function(_d1,_d2,i,_d3){
var _d4=_d2[2],_d5=_41.setFilters[_d4];
if(_d5){
return _d5(_d1,i,_d2,_d3);
}
}}};
var _40=_41.match.POS,_d6=function(all,num){
return "\\"+(num-0+1);
};
for(var _d7 in _41.match){
_41.match[_d7]=new RegExp(_41.match[_d7].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
_41.leftMatch[_d7]=new RegExp(/(^(?:.|\r|\n)*?)/.source+_41.match[_d7].source.replace(/\\(\d+)/g,_d6));
}
var _43=function(_d8,_d9){
_d8=Array.prototype.slice.call(_d8,0);
if(_d9){
_d9.push.apply(_d9,_d8);
return _d9;
}
return _d8;
};
try{
Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}
catch(e){
_43=function(_da,_db){
var i=0,ret=_db||[];
if(_31.call(_da)==="[object Array]"){
Array.prototype.push.apply(ret,_da);
}else{
if(typeof _da.length==="number"){
for(var l=_da.length;i<l;i++){
ret.push(_da[i]);
}
}else{
for(;_da[i];i++){
ret.push(_da[i]);
}
}
}
return ret;
};
}
var _45,_dc;
if(document.documentElement.compareDocumentPosition){
_45=function(a,b){
if(a===b){
_32=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){
return a.compareDocumentPosition?-1:1;
}
return a.compareDocumentPosition(b)&4?-1:1;
};
}else{
_45=function(a,b){
var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;
if(a===b){
_32=true;
return 0;
}else{
if(aup===bup){
return _dc(a,b);
}else{
if(!aup){
return -1;
}else{
if(!bup){
return 1;
}
}
}
}
while(cur){
ap.unshift(cur);
cur=cur.parentNode;
}
cur=bup;
while(cur){
bp.unshift(cur);
cur=cur.parentNode;
}
al=ap.length;
bl=bp.length;
for(var i=0;i<al&&i<bl;i++){
if(ap[i]!==bp[i]){
return _dc(ap[i],bp[i]);
}
}
return i===al?_dc(a,bp[i],-1):_dc(ap[i],b,1);
};
_dc=function(a,b,ret){
if(a===b){
return ret;
}
var cur=a.nextSibling;
while(cur){
if(cur===b){
return -1;
}
cur=cur.nextSibling;
}
return 1;
};
}
_34.getText=function(_dd){
var ret="",_de;
for(var i=0;_dd[i];i++){
_de=_dd[i];
if(_de.nodeType===3||_de.nodeType===4){
ret+=_de.nodeValue;
}else{
if(_de.nodeType!==8){
ret+=_34.getText(_de.childNodes);
}
}
}
return ret;
};
(function(){
var _df=document.createElement("div"),id="script"+(new Date()).getTime(),_e0=document.documentElement;
_df.innerHTML="<a name='"+id+"'/>";
_e0.insertBefore(_df,_e0.firstChild);
if(document.getElementById(id)){
_41.find.ID=function(_e1,_e2,_e3){
if(typeof _e2.getElementById!=="undefined"&&!_e3){
var m=_e2.getElementById(_e1[1]);
return m?m.id===_e1[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===_e1[1]?[m]:undefined:[];
}
};
_41.filter.ID=function(_e4,_e5){
var _e6=typeof _e4.getAttributeNode!=="undefined"&&_e4.getAttributeNode("id");
return _e4.nodeType===1&&_e6&&_e6.nodeValue===_e5;
};
}
_e0.removeChild(_df);
_e0=_df=null;
})();
(function(){
var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){
_41.find.TAG=function(_e7,_e8){
var _e9=_e8.getElementsByTagName(_e7[1]);
if(_e7[1]==="*"){
var tmp=[];
for(var i=0;_e9[i];i++){
if(_e9[i].nodeType===1){
tmp.push(_e9[i]);
}
}
_e9=tmp;
}
return _e9;
};
}
div.innerHTML="<a href='#'></a>";
if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){
_41.attrHandle.href=function(_ea){
return _ea.getAttribute("href",2);
};
}
div=null;
})();
if(document.querySelectorAll){
(function(){
var _eb=_34,div=document.createElement("div"),id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){
return;
}
_34=function(_ec,_ed,_ee,_ef){
_ed=_ed||document;
_ec=_ec.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!_ef&&!_34.isXML(_ed)){
if(_ed.nodeType===9){
try{
return _43(_ed.querySelectorAll(_ec),_ee);
}
catch(qsaError){
}
}else{
if(_ed.nodeType===1&&_ed.nodeName.toLowerCase()!=="object"){
var old=_ed.getAttribute("id"),nid=old||id,_f0=_ed.parentNode,_f1=/^\s*[+~]/.test(_ec);
if(!old){
_ed.setAttribute("id",nid);
}else{
nid=nid.replace(/'/g,"\\$&");
}
if(_f1&&_f0){
_ed=_ed.parentNode;
}
try{
if(!_f1||_f0){
return _43(_ed.querySelectorAll("[id='"+nid+"'] "+_ec),_ee);
}
}
catch(pseudoError){
}
finally{
if(!old){
_ed.removeAttribute("id");
}
}
}
}
}
return _eb(_ec,_ed,_ee,_ef);
};
for(var _f2 in _eb){
_34[_f2]=_eb[_f2];
}
div=null;
})();
}
(function(){
var _f3=document.documentElement,_f4=_f3.matchesSelector||_f3.mozMatchesSelector||_f3.webkitMatchesSelector||_f3.msMatchesSelector,_f5=false;
try{
_f4.call(document.documentElement,"[test!='']:sizzle");
}
catch(pseudoError){
_f5=true;
}
if(_f4){
_34.matchesSelector=function(_f6,_f7){
_f7=_f7.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");
if(!_34.isXML(_f6)){
try{
if(_f5||!_41.match.PSEUDO.test(_f7)&&!/!=/.test(_f7)){
return _f4.call(_f6,_f7);
}
}
catch(e){
}
}
return _34(_f7,null,null,[_f6]).length>0;
};
}
})();
(function(){
var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){
return;
}
div.lastChild.className="e";
if(div.getElementsByClassName("e").length===1){
return;
}
_41.order.splice(1,0,"CLASS");
_41.find.CLASS=function(_f8,_f9,_fa){
if(typeof _f9.getElementsByClassName!=="undefined"&&!_fa){
return _f9.getElementsByClassName(_f8[1]);
}
};
div=null;
})();
function _6f(dir,cur,_fb,_fc,_fd,_fe){
for(var i=0,l=_fc.length;i<l;i++){
var _ff=_fc[i];
if(_ff){
var _100=false;
_ff=_ff[dir];
while(_ff){
if(_ff.sizcache===_fb){
_100=_fc[_ff.sizset];
break;
}
if(_ff.nodeType===1&&!_fe){
_ff.sizcache=_fb;
_ff.sizset=i;
}
if(_ff.nodeName.toLowerCase()===cur){
_100=_ff;
break;
}
_ff=_ff[dir];
}
_fc[i]=_100;
}
}
};
function _6e(dir,cur,_101,_102,_103,_104){
for(var i=0,l=_102.length;i<l;i++){
var elem=_102[i];
if(elem){
var _105=false;
elem=elem[dir];
while(elem){
if(elem.sizcache===_101){
_105=_102[elem.sizset];
break;
}
if(elem.nodeType===1){
if(!_104){
elem.sizcache=_101;
elem.sizset=i;
}
if(typeof cur!=="string"){
if(elem===cur){
_105=true;
break;
}
}else{
if(_34.filter(cur,[elem]).length>0){
_105=elem;
break;
}
}
}
elem=elem[dir];
}
_102[i]=_105;
}
}
};
if(document.documentElement.contains){
_34.contains=function(a,b){
return a!==b&&(a.contains?a.contains(b):true);
};
}else{
if(document.documentElement.compareDocumentPosition){
_34.contains=function(a,b){
return !!(a.compareDocumentPosition(b)&16);
};
}else{
_34.contains=function(){
return false;
};
}
}
_34.isXML=function(elem){
var _106=(elem?elem.ownerDocument||elem:0).documentElement;
return _106?_106.nodeName!=="HTML":false;
};
var _42=function(_107,_108){
var _109,_10a=[],_10b="",root=_108.nodeType?[_108]:_108;
while((_109=_41.match.PSEUDO.exec(_107))){
_10b+=_109[0];
_107=_107.replace(_41.match.PSEUDO,"");
}
_107=_41.relative[_107]?_107+"*":_107;
for(var i=0,l=root.length;i<l;i++){
_34(_107,root[i],_10a);
}
return _34.filter(_10b,_10a);
};
window.Sizzle=_34;
})();
var Mustache=function(){
var _10c=function(){
};
_10c.prototype={otag:"{{",ctag:"}}",pragmas:{},buffer:[],pragmas_implemented:{"IMPLICIT-ITERATOR":true},context:{},render:function(_10d,_10e,_10f,_110){
if(!_110){
this.context=_10e;
this.buffer=[];
}
if(!this.includes("",_10d)){
if(_110){
return _10d;
}else{
this.send(_10d);
return;
}
}
_10d=this.render_pragmas(_10d);
var html=this.render_section(_10d,_10e,_10f);
if(_110){
return this.render_tags(html,_10e,_10f,_110);
}
this.render_tags(html,_10e,_10f,_110);
},send:function(line){
if(line!=""){
this.buffer.push(line);
}
},render_pragmas:function(_111){
if(!this.includes("%",_111)){
return _111;
}
var that=this;
var _112=new RegExp(this.otag+"%([\\w-]+) ?([\\w]+=[\\w]+)?"+this.ctag);
return _111.replace(_112,function(_113,_114,_115){
if(!that.pragmas_implemented[_114]){
throw ({message:"This implementation of mustache doesn't understand the '"+_114+"' pragma"});
}
that.pragmas[_114]={};
if(_115){
var opts=_115.split("=");
that.pragmas[_114][opts[0]]=opts[1];
}
return "";
});
},render_partial:function(name,_116,_117){
name=this.trim(name);
if(!_117||_117[name]===undefined){
throw ({message:"unknown_partial '"+name+"'"});
}
if(typeof (_116[name])!="object"){
return this.render(_117[name],_116,_117,true);
}
return this.render(_117[name],_116[name],_117,true);
},render_section:function(_118,_119,_11a){
if(!this.includes("#",_118)&&!this.includes("^",_118)){
return _118;
}
var that=this;
var _11b=new RegExp(this.otag+"(\\^|\\#)\\s*(.+)\\s*"+this.ctag+"\n*([\\s\\S]+?)"+this.otag+"\\/\\s*\\2\\s*"+this.ctag+"\\s*","mg");
return _118.replace(_11b,function(_11c,type,name,_11d){
var _11e=that.find(name,_119);
if(type=="^"){
if(!_11e||that.is_array(_11e)&&_11e.length===0){
return that.render(_11d,_119,_11a,true);
}else{
return "";
}
}else{
if(type=="#"){
if(that.is_array(_11e)){
return that.map(_11e,function(row){
return that.render(_11d,that.create_context(row),_11a,true);
}).join("");
}else{
if(that.is_object(_11e)){
return that.render(_11d,that.create_context(_11e),_11a,true);
}else{
if(typeof _11e==="function"){
return _11e.call(_119,_11d,function(text){
return that.render(text,_119,_11a,true);
});
}else{
if(_11e){
return that.render(_11d,_119,_11a,true);
}else{
return "";
}
}
}
}
}
}
});
},render_tags:function(_11f,_120,_121,_122){
var that=this;
var _123=function(){
return new RegExp(that.otag+"(=|!|>|\\{|%)?([^\\/#\\^]+?)\\1?"+that.ctag+"+","g");
};
var _124=_123();
var _125=function(_126,_127,name){
switch(_127){
case "!":
return "";
case "=":
that.set_delimiters(name);
_124=_123();
return "";
case ">":
return that.render_partial(name,_120,_121);
case "{":
return that.find(name,_120);
default:
return that.escape(that.find(name,_120));
}
};
var _128=_11f.split("\n");
for(var i=0;i<_128.length;i++){
_128[i]=_128[i].replace(_124,_125,this);
if(!_122){
this.send(_128[i]);
}
}
if(_122){
return _128.join("\n");
}
},set_delimiters:function(_129){
var dels=_129.split(" ");
this.otag=this.escape_regex(dels[0]);
this.ctag=this.escape_regex(dels[1]);
},escape_regex:function(text){
if(!arguments.callee.sRE){
var _12a=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];
arguments.callee.sRE=new RegExp("(\\"+_12a.join("|\\")+")","g");
}
return text.replace(arguments.callee.sRE,"\\$1");
},find:function(name,_12b){
name=this.trim(name);
function _12c(bool){
return bool===false||bool===0||bool;
};
var _12d;
if(_12c(_12b[name])){
_12d=_12b[name];
}else{
if(_12c(this.context[name])){
_12d=this.context[name];
}
}
if(typeof _12d==="function"){
return _12d.apply(_12b);
}
if(_12d!==undefined){
return _12d;
}
return "";
},includes:function(_12e,_12f){
return _12f.indexOf(this.otag+_12e)!=-1;
},escape:function(s){
s=String(s===null?"":s);
return s.replace(/&(?!\w+;)|["'<>\\]/g,function(s){
switch(s){
case "&":
return "&amp;";
case "\\":
return "\\\\";
case "\"":
return "&quot;";
case "'":
return "&#39;";
case "<":
return "&lt;";
case ">":
return "&gt;";
default:
return s;
}
});
},create_context:function(_130){
if(this.is_object(_130)){
return _130;
}else{
var _131=".";
if(this.pragmas["IMPLICIT-ITERATOR"]){
_131=this.pragmas["IMPLICIT-ITERATOR"].iterator;
}
var ctx={};
ctx[_131]=_130;
return ctx;
}
},is_object:function(a){
return a&&typeof a=="object";
},is_array:function(a){
return Object.prototype.toString.call(a)==="[object Array]";
},trim:function(s){
return s.replace(/^\s*|\s*$/g,"");
},map:function(_132,fn){
if(typeof _132.map=="function"){
return _132.map(fn);
}else{
var r=[];
var l=_132.length;
for(var i=0;i<l;i++){
r.push(fn(_132[i]));
}
return r;
}
}};
return ({name:"mustache.js",version:"0.3.1-dev",to_html:function(_133,view,_134,_135){
var _136=new _10c();
if(_135){
_136.send=_135;
}
_136.render(_133,view,_134);
if(!_135){
return _136.buffer.join("\n");
}
}});
}();
if(!this.JSON){
this.JSON={};
}
(function(){
"use strict";
function f(n){
return n<10?"0"+n:n;
};
if(typeof Date.prototype.toJSON!=="function"){
Date.prototype.toJSON=function(key){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){
return this.valueOf();
};
}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,_137=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,_138,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r","\"":"\\\"","\\":"\\\\"},rep;
function _139(_13a){
_137.lastIndex=0;
return _137.test(_13a)?"\""+_13a.replace(_137,function(a){
var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
})+"\"":"\""+_13a+"\"";
};
function str(key,_13b){
var i,k,v,_13c,mind=gap,_13d,_13e=_13b[key];
if(_13e&&typeof _13e==="object"&&typeof _13e.toJSON==="function"){
_13e=_13e.toJSON(key);
}
if(typeof rep==="function"){
_13e=rep.call(_13b,key,_13e);
}
switch(typeof _13e){
case "string":
return _139(_13e);
case "number":
return isFinite(_13e)?String(_13e):"null";
case "boolean":
case "null":
return String(_13e);
case "object":
if(!_13e){
return "null";
}
gap+=_138;
_13d=[];
if(Object.prototype.toString.apply(_13e)==="[object Array]"){
_13c=_13e.length;
for(i=0;i<_13c;i+=1){
_13d[i]=str(i,_13e)||"null";
}
v=_13d.length===0?"[]":gap?"[\n"+gap+_13d.join(",\n"+gap)+"\n"+mind+"]":"["+_13d.join(",")+"]";
gap=mind;
return v;
}
if(rep&&typeof rep==="object"){
_13c=rep.length;
for(i=0;i<_13c;i+=1){
k=rep[i];
if(typeof k==="string"){
v=str(k,_13e);
if(v){
_13d.push(_139(k)+(gap?": ":":")+v);
}
}
}
}else{
for(k in _13e){
if(Object.hasOwnProperty.call(_13e,k)){
v=str(k,_13e);
if(v){
_13d.push(_139(k)+(gap?": ":":")+v);
}
}
}
}
v=_13d.length===0?"{}":gap?"{\n"+gap+_13d.join(",\n"+gap)+"\n"+mind+"}":"{"+_13d.join(",")+"}";
gap=mind;
return v;
}
};
if(typeof JSON.stringify!=="function"){
JSON.stringify=function(_13f,_140,_141){
var i;
gap="";
_138="";
if(typeof _141==="number"){
for(i=0;i<_141;i+=1){
_138+=" ";
}
}else{
if(typeof _141==="string"){
_138=_141;
}
}
rep=_140;
if(_140&&typeof _140!=="function"&&(typeof _140!=="object"||typeof _140.length!=="number")){
throw new Error("JSON.stringify");
}
return str("",{"":_13f});
};
}
if(typeof JSON.parse!=="function"){
JSON.parse=function(text,_142){
var j;
function walk(_143,key){
var k,v,_144=_143[key];
if(_144&&typeof _144==="object"){
for(k in _144){
if(Object.hasOwnProperty.call(_144,k)){
v=walk(_144,k);
if(v!==undefined){
_144[k]=v;
}else{
delete _144[k];
}
}
}
}
return _142.call(_143,key,_144);
};
text=String(text);
cx.lastIndex=0;
if(cx.test(text)){
text=text.replace(cx,function(a){
return "\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);
});
}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){
j=eval("("+text+")");
return typeof _142==="function"?walk({"":j},""):j;
}
throw new SyntaxError("JSON.parse");
};
}
}());
Object.keys=function(o){
var _145=[];
if(o===undefined||o===null){
return _145;
}
for(var name in o){
if(o.hasOwnProperty(name)){
_145.push(name);
}
}
if(o.call!==undefined&&o.call!==Function.prototype.call&&_145.indexOf("call")===-1){
_145.push("call");
}
return _145;
};
Array.isArray=Array.isArray||function(o){
return Object.prototype.toString.call(o)==="[object Array]";
};
Array.prototype.forEach=Array.prototype.forEach||function(fn,bind){
for(var i=0;i<this.length;i++){
fn.call(bind,this[i],i,this);
}
};
Array.prototype.indexOf=Array.prototype.indexOf||function(str){
for(var i=0;i<this.length;i++){
if(str===this[i]){
return i;
}
}
return -1;
};
Array.prototype.some=Array.prototype.some||function(fn,bind){
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&fn.call(bind,this[i],i,this)){
return true;
}
}
return false;
};
Array.prototype.every=Array.prototype.every||function(fn,bind){
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&!fn.call(bind,this[i],i,this)){
return false;
}
}
return true;
};
Array.prototype.map=Array.prototype.map||function(fn,bind){
var _146=[];
for(var i=0,l=this.length;i<l;i++){
if(i in this){
_146[i]=fn.call(bind,this[i],i,this);
}
}
return _146;
};
Array.prototype.filter=Array.prototype.filter||function(fn,bind){
var _147=[];
for(var i=0,l=this.length;i<l;i++){
if((i in this)&&fn.call(bind,this[i],i,this)){
_147.push(this[i]);
}
}
return _147;
};
Array.prototype.reduce=Array.prototype.reduce||function(fun){
"use strict";
if(this===undefined||this===null){
throw new TypeError();
}
var t=Object(this);
var len=t.length>>>0;
if(typeof fun!=="function"){
throw new TypeError();
}
if(len===0&&arguments.length==1){
throw new TypeError();
}
var k=0;
var _148;
if(arguments.length>=2){
_148=arguments[1];
}else{
do{
if(k in t){
_148=t[k++];
break;
}
if(++k>=len){
throw new TypeError();
}
}while(true);
}
while(k<len){
if(k in t){
_148=fun.call(undefined,_148,t[k],k,t);
}
k++;
}
return _148;
};
Array.prototype.reduceRight=Array.prototype.reduceRight||function(_149){
"use strict";
if(this===undefined||this===null){
throw new TypeError();
}
var t=Object(this);
var len=t.length>>>0;
if(typeof _149!=="function"){
throw new TypeError();
}
if(len===0&&arguments.length===1){
throw new TypeError();
}
var k=len-1;
var _14a;
if(arguments.length>=2){
_14a=arguments[1];
}else{
do{
if(k in this){
_14a=this[k--];
break;
}
if(--k<0){
throw new TypeError();
}
}while(true);
}
while(k>=0){
if(k in t){
_14a=_149.call(undefined,_14a,t[k],k,t);
}
k--;
}
return _14a;
};
String.prototype.trim=String.prototype.trim||function(){
return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"");
};
if(!Function.prototype.bind||Function.prototype.bind===window.__hualuOldBind){
Function.prototype.bind=function(_14b){
var _14c=this;
var args=Array.prototype.slice.call(arguments,1);
return function(){
return _14c.apply(_14b,args.concat(Array.prototype.slice.call(arguments)));
};
};
}
var object=(function(_14d){
var _14e=function(){
};
if((function TEST(){
}).name){
Function.__get_name__=function(func){
return func.name;
};
}else{
var _14f=/(?:^|\()function ([\w$]+)/;
Function.__get_name__=function(func){
var _150=_14f.exec(func.toString());
if(_150){
return _150[1];
}
return "";
};
}
var _151=function(prop,dest,src){
return !(prop in dest);
};
_14e.extend=function(obj,_152,ov){
var _153=null;
if(typeof ov=="function"){
_153=ov;
}else{
if(ov===true||typeof ov==="undefined"){
}else{
_153=_151;
}
}
for(var _154 in _152){
if(_153&&!_153(_154,obj,_152)){
continue;
}
try{
obj[_154]=_152[_154];
}
catch(e){
}
}
if(_152&&_152.hasOwnProperty("call")&&(!_153||_153(obj,_152,"call"))){
obj.call=_152.call;
}
return obj;
};
_14e.clone=function(obj){
var _155={};
for(var key in obj){
_155[key]=obj[key];
}
return _155;
};
_14e.bind=function(host){
_14e.extend(host,_14e);
};
_14e._loader=null;
return _14e;
})(window);
(function(_156){
var _157=true;
for(var i in {toString:1}){
_157=null;
}
if(_157){
_157=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}
var _158=function(func,_159){
return function(a,b){
if(a===null){
return this;
}
if(_159||typeof a!="string"){
for(var k in a){
func.call(this,k,a[k]);
}
if(_157){
for(var i=_157.length;i>0;i--){
k=_157[i];
if(a.hasOwnProperty(k)){
func.call(this,k,a[k]);
}
}
}
}else{
func.call(this,a,b);
}
return this;
};
};
var _15a=function(name,bind){
var _15b=Object.__getattribute__(this,name);
if(bind!==false&&_15c.isMethod(_15b)){
bind=bind||this;
return _15b.bind(bind);
}
return _15b;
};
var _15d=_158(function(prop,_15e){
if("__setattr__" in this){
this.__setattr__(prop,_15e);
}else{
Object.__setattr__(this,prop,_15e);
}
});
var _15f=function(name,bind){
var _160=Type.__getattribute__(this,name);
if(bind!==false&&_15c.isMethod(_160)){
bind=bind||this;
return _160.bind(bind);
}
return _160;
};
var _161=function(name){
if(name=="@mixins"){
name="__mixins__";
}
var _162=this.prototype;
var _163=_162.__properties__;
return (name in this||name in _162||(_163&&name in _163));
};
var _164=_158(function(name,_165){
if("__metaclass__" in this){
Type.__getattribute__(this.__metaclass__,"__setattr__").call(this.__metaclass__,this,name,_165);
}else{
Type.__setattr__(this,name,_165);
}
});
var _166=function(prop,_167){
this[prop]=_167;
};
var _168=function(){
return this.__subclassesarray__;
};
var _169=function(cls,name,args){
if(!name){
throw new Error("can not get function name when this.parent called");
}
var _16a=cls;
while(_16a&&!_16a.prototype.hasOwnProperty(name)){
_16a=_16a.__base__;
}
var base=_16a.__base__;
var _16b=_16a.__mixins__;
var _16c,_16d;
if(base&&base.get&&base.has(name)){
_16d=base;
_16c=Type.__getattribute__(base,name);
}else{
if(_16b&&_16b.length&&_16b.some(function(_16e){
_16d=_16e;
return _16e.has(name);
})){
_16c=Type.__getattribute__(_16d,name);
}
}
if(!_16c||typeof _16c!="function"){
throw new Error("no such method in parent : '"+name+"'");
}else{
return _16c.apply(_16d,args);
}
};
function _16f(func,prop,_170){
if(prop==="__name__"&&func[prop]&&func[prop]!==_170){
if(typeof console!="undefined"&&console.warn){
console.warn("请不要将同一个方法赋值给多个类成员："+func[prop]+" --> "+_170);
}
}
};
var _171=function(func,self){
var _172;
var _173;
if(self===false){
_172=function(self){
return this.prototype[func.__name__].im_func.apply(this.__this__,arguments);
};
}else{
_172=function(){
var args=[].slice.call(arguments,0);
if(self===true){
if(typeof this=="function"){
_173=this;
}else{
_173=this.__class__;
}
}else{
_173=this;
}
args.unshift(_173);
return func.apply(this.__this__,args);
};
}
_172.im_self=self;
_172.__class__=arguments.callee;
_172.im_func=func;
_172.__setattr__=function(prop,_174){
_16f(func,prop,_174);
this[prop]=_174;
};
return _172;
};
var _175=this.staticmethod=function(func){
return {__class__:arguments.callee,im_func:func,__setattr__:function(prop,_176){
_16f(this,prop,_176);
this[prop]=_176;
}};
};
var _177=this.classmethod=function(func,_178){
var obj={__class__:arguments.callee,im_func:func,__setattr__:function(prop,_179){
_16f(this,prop,_179);
this[prop]=_179;
}};
return obj;
};
var _17a=this.property=function(fget,fset){
var p={};
p.__class__=arguments.callee;
p.__setattr__=function(prop,_17b){
_16f(this,prop,_17b);
this[prop]=_17b;
};
p.fget=fget;
p.fset=fset;
return p;
};
var _17c=function(_17d,_17e){
var cls=new _15c(function(){
for(var i=0,l=_17e.length;i<l;i++){
this[_17e[i]]=(function(name){
return function(){
return _17d.prototype[name].apply(arguments[0],[].slice.call(arguments,1));
};
})(_17e[i]);
}
});
return cls;
};
var _17f=(function(){
if(!Array.push){
return false;
}
var a=function(){
};
a.prototype=new Array;
var b=new a;
b.push(null);
return !!b.length;
})();
var _180,_181;
Object.__getattribute__=function(obj,name){
var _182=obj.__properties__["prop_"+name]||obj.__properties__[name];
if(_182){
if(_182.fget){
return _182.fget.call(obj.__this__,obj);
}else{
throw new Error("get not allowed property "+name);
}
}else{
if(name in obj){
return obj[name];
}else{
if(obj.__getattr__){
return obj.__getattr__.call(obj,name);
}else{
return undefined;
}
}
}
};
Object.__setattr__=_156.__setattr__=function(obj,prop,_183){
var _184=null;
if(obj.__properties__){
_184=obj.__properties__["prop_"+prop]||obj.__properties__[prop];
}
if(!_184){
obj[prop]=_183;
}else{
if(_184.fset){
_184.fset.call(obj.__this__,obj,_183);
}else{
throw "set not allowed property "+prop;
}
}
};
Object.__new__=function(cls){
if(cls===Array||cls===String){
return new cls;
}
cls.__prototyping__=true;
var _185=new cls();
delete cls.__prototyping__;
return _185;
};
var Type=this.Type=this.type=function(){
};
Type.__class__=Type;
Type.__new__=function(_186,name,base,dict){
var cls=function(){
if(cls.__prototyping__){
return this;
}
if(cls.__constructs__){
return cls.__constructs__(arguments);
}else{
this.__class__=cls;
_15c.initMixins(cls,this);
var _187=this.initialize?this.initialize.apply(this,arguments):null;
return _187;
}
};
cls.__subclassesarray__=[];
cls.__subclasses__=_168;
cls.__classbasedmethods__=[];
if(_156.runtime){
cls.__module__=_156.runtime.stack[_156.runtime.stack.length-1].id;
}else{
cls.__module__="";
}
cls.set=cls.__mixin__=_164;
cls.get=_15f;
cls.has=_161;
cls.__metaclass__=_186;
cls.__class__=_186;
cls.__new__=base.__new__;
cls.__dict__=dict;
cls.__constructs__=base.__constructs__||null;
if(base!==Object&&base!==Type){
(base.__classbasedmethods__||[]).forEach(function(name){
cls[name]=base[name];
cls.__classbasedmethods__.push(name);
});
}
cls.__constructing__=true;
cls.prototype=Object.__new__(base);
cls.prototype.constructor=cls;
if(base.__subclassesarray__){
base.__subclassesarray__.push(cls);
}
var _188=cls.prototype;
var _189=_188.__properties__||{};
_188.__properties__=_156.extend({},_189);
Type.__setattr__(cls,"__setattr__",Type.__getattribute__(base,"__setattr__"));
Type.__setattr__(cls,"__base__",base);
Type.__setattr__(cls,"__this__",{base:base,parent:function(){
return _169(cls,arguments.callee.caller.__name__,arguments);
}});
for(var k in dict){
Type.__setattr__(cls,k,dict[k]);
}
var _18a=cls.__mixins__;
if(_18a){
_18a.forEach(function(_18b){
_15c.keys(_18b).forEach(function(name){
if(cls.has(name)){
return;
}
var _18c=Type.__getattribute__(_18b,name);
Type.__setattr__(cls,name,_18c);
});
});
}
cls.prototype.get=_15a;
cls.prototype.set=_15d;
cls.prototype._set=_166;
delete cls.__constructing__;
return cls;
};
var _18d=["__mixins__","__new__","__this__","__base__"],_18e=["__new__","__metaclass__","__mixins__"],_18f=["__this__","__base__"];
Type.__setattr__=function(cls,name,_190){
if(name=="@mixins"){
name="__mixins__";
}
if(_18d.indexOf(name)!=-1){
if(!_190||(typeof _190!="object"&&typeof _190!="function")){
return;
}
}
var _191=cls.prototype,_192=_191.__properties__,subs=cls.__subclassesarray__,_193=cls.__constructing__;
delete cls[name];
delete _191[name];
delete _192[name];
if(_18e.indexOf(name)!=-1){
if(_190&&(typeof _190=="object"||typeof _190=="function")){
cls[name]=_190;
}
}else{
if(_18f.indexOf(name)!=-1){
cls[name]=_191[name]=_190;
}else{
if(_190==null){
_191[name]=_190;
}else{
if(_190.__class__===undefined&&typeof _190=="function"){
_191[name]=_171(_190);
_191[name].__setattr__("__name__",name);
_190.__name__=name;
if(name=="initialize"){
cls[name]=_171(_190,false);
}
}else{
if(_190.__class__===_17a){
_190.__setattr__("__name__",name);
_192[name]=_190;
_191[name]=undefined;
}else{
if(_190.__class__===_171){
_191[name]=_171(_190.im_func);
if(_190.im_self==true){
cls[name]=_190;
}
}else{
if(_190.__class__===_177){
_190.__setattr__("__name__",name);
_190.im_func.__name__=name;
cls[name]=_191[name]=_171(_190.im_func,true);
cls.__classbasedmethods__.push(name);
}else{
if(_190.__class__===_175){
_190.__setattr__("__name__",name);
_190.im_func.__name__=name;
cls[name]=_191[name]=_190.im_func;
cls.__classbasedmethods__.push(name);
}else{
if(_15c.instanceOf(_190,Type)){
cls[name]=_191[name]=_190;
}else{
_191[name]=_190;
}
}
}
}
}
}
}
}
}
if(!_193&&name in cls&&subs){
subs.forEach(function(sub){
if(!(name in sub)){
Type.__setattr__(sub,name,_190);
}
});
}
};
Type.__delattr__=function(cls,name){
delete cls[name];
delete cls.prototype[name];
delete cls.prototype.__properties__[name];
};
Type.__getattribute__=function(cls,name){
if(name=="@mixins"){
name="__mixins__";
}
var _194=cls.prototype;
var _195=_194.__properties__;
var _196=cls.__metaclass__;
var _197;
if(name in cls){
_197=cls[name];
}else{
if(_195&&_195[name]!==undefined){
_197=_195[name];
}else{
if(_194[name]&&_194[name].__class__==_171){
cls[name]=_197=_171(_194[name].im_func,false);
}else{
if(_196&&(_197=Type.__getattribute__(_196,name))!==undefined){
if(_197.__class__===_171){
_197=_171(_197.im_func,true);
}
cls[name]=_197;
}else{
_197=_194[name];
}
}
}
}
return _197;
};
Type.__constructs__=function(args){
var _198=args.length;
if(_198<1){
throw new Error("bad arguments");
}
var name=null;
var base=_198>1?args[0]:Object;
if(typeof base!="function"&&typeof base!="object"){
throw new Error("base is not function or object");
}
if(base){
if(!_17f){
if(base===Array){
base=_180;
}else{
if(base===String){
base=_181;
}
}
}
}
var dict=args[_198-1],_199;
if(typeof dict!="function"&&typeof dict!="object"){
throw new Error("constructor is not function or object");
}
if(dict instanceof Function){
_199=dict;
dict={};
_199.call(dict);
}
var _19a;
if(this===Object){
_19a=dict.__metaclass__||base.__metaclass__||Type;
}else{
_19a=this;
}
var cls=_19a.__new__(_19a,name,base,dict);
if(!cls||typeof cls!="function"){
throw new Error("__new__ method should return cls");
}
Type.__getattribute__(_19a,"initialize").call(_19a,cls,name,base,dict);
return cls;
};
Type.initialize=function(){
};
Object.__class__=Type;
var _15c=this.Class=function(){
return Type.__constructs__.call(Object,arguments);
};
_15c.initMixins=function(cls,_19b){
if(!cls){
return;
}
if(cls.__base__){
_15c.initMixins(cls.__base__,_19b);
}
var _19c=cls.__mixins__;
if(_19c){
_19b.__this__.mixining=true;
for(var i=0,l=_19c.length,_19d;i<l;i++){
_19d=_19c[i];
if(_19d.prototype&&typeof _19d.prototype.initialize=="function"){
_19d.prototype.initialize.call(_19b);
}
}
delete _19b.__this__.mixining;
}
};
_15c.mixin=function(dict,cls){
if(!dict||typeof dict!="object"){
return;
}
if(cls===Array){
cls=_180;
}else{
if(cls===String){
cls=_181;
}
}
dict.__mixins__=dict.__mixins__||[];
dict.__mixins__.push(cls);
};
_15c.hasProperty=function(obj,name){
return (obj&&obj.__properties__)?(name in obj.__properties__):false;
};
_15c.hasMember=function(cls,name){
if(!cls){
return false;
}
if(name in cls.prototype){
return true;
}
return false;
};
_15c.isMethod=function(_19e){
if(typeof _19e=="function"){
if(!_19e.__class__||_19e.__class__==_171||_19e.__class__==_175||_19e.__class__==_177){
return true;
}
}
return false;
};
_15c.getPropertyNames=function(obj){
return (obj&&obj.__properties__)?Object.keys(obj.__properties__):[];
};
_15c.inject=function(cls,host,args,_19f){
if(typeof cls!="function"){
throw new Error("bad arguments.");
}
var _1a0=arguments.length,p,_1a1,init;
if(_1a0===2){
args=[];
_19f=true;
}else{
if(_1a0===3){
if(Array.isArray(args)){
_19f=true;
}else{
_19f=args;
args=[];
}
}
}
host.__class__=cls;
_1a1=cls.prototype,init=_1a1.initialize;
host.__properties__=_1a1.__properties__;
p=Object.__new__(cls);
_156.extend(host,p,_19f);
_15c.initMixins(cls,host);
if(typeof init=="function"){
init.apply(host,args);
}
};
_15c.instanceOf=function(obj,func){
if(typeof func!="function"){
throw new Error("bad arguments.");
}
var cls;
if(typeof obj=="function"){
cls=obj.__class__;
if(cls){
do{
if(cls===func){
return true;
}
}while(cls=cls.__base__);
}
}else{
return obj instanceof func;
}
return false;
};
_15c.getChain=function(cls){
if(!cls){
return [];
}
var _1a2=[cls];
while(cls.__base__){
_1a2.push(cls.__base__);
cls=cls.__base__;
}
return _1a2;
};
_15c.getAllSubClasses=function(cls){
if(!cls||!cls.__subclassesarray__){
return [];
}
var _1a3=cls.__subclassesarray__;
var _1a4=[].concat(_1a3),ele=_1a4.shift(),subs;
while(ele!=null){
subs=ele.__subclassesarray__;
if(subs!=null){
_1a4=_1a4.concat(subs);
_1a3=_1a3.concat(subs);
}
ele=_1a4.shift();
}
return _1a3;
};
_15c.keys=function(cls){
if(!cls||!cls.prototype){
return [];
}
var keys=[];
for(var prop in cls.prototype){
keys.push(prop);
}
keys=keys.filter(function(name){
if((name.indexOf("__")==0&&name.slice(-2)=="__")){
return false;
}
if(["get","set","_set","initialize","constructor"].indexOf(name)!=-1){
return false;
}
return true;
});
return keys;
};
_180=_17c(Array,["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","unshift","valueOf","forEach","some","every","map","filter","reduce","reduceRight"]);
_180.prototype.length=0;
_181=_17c(String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase","valueOf","trim"]);
_181.prototype.length=0;
})(object);
(function(_1a5){
var _1a6="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-.";
function _1a7(_1a8,url,_1a9,_1aa){
var min=url.length;
for(var i=0,len=url.length;i<len;i++){
if(_1a9.indexOf(url.charAt(i))!=-1){
if(i<min){
min=i;
break;
}
}
}
_1a8.got=url.substring(0,min);
_1a8.remained=(_1aa?url.substring(min):url.substring(min+1));
return _1a8;
};
function _1ab(url,_1ac){
if(typeof url!="string"){
return ["","","","","",""];
}
var _1ad="",_1ae="",path="",_1af="",_1b0="",_1b1="",i=0;
i=url.indexOf(":");
if(i>0){
if(url.substring(0,i)=="http"){
_1ad=url.substring(0,i).toLowerCase();
url=url.substring(i+1);
}else{
for(i=0,len=url.length;i<len;i++){
if(_1a6.indexOf(url.charAt(i))==-1){
break;
}
}
_1ad=url.substring(0,i);
url=url.substring(i+1);
}
}
if(!_1ad&&_1ac){
_1ad=_1ac;
}
var _1b2={};
if(url.substring(0,2)=="//"){
_1a7(_1b2,url.substring(2),"/?#",true);
_1ae=_1b2.got;
url=_1b2.remained;
}
if(url.indexOf("#")!=-1){
_1a7(_1b2,url,"#");
url=_1b2.got;
_1b1=_1b2.remained;
}
if(url.indexOf("?")!=-1){
_1a7(_1b2,url,"?");
url=_1b2.got;
_1b0=_1b2.remained;
}
if(url.indexOf(";")!=-1){
_1a7(_1b2,url,";");
path=_1b2.got;
_1af=_1b2.remained;
}
if(!path){
path=url;
}
return [_1ad,_1ae,path,_1af,_1b0,_1b1];
};
function _1b3(_1b4){
if(!_1b4){
return "";
}
var url="";
if(_1b4[0]){
url+=_1b4[0]+"://"+_1b4[1];
}
if(_1b4[1]&&_1b4[2]&&_1b4[2].indexOf("/")!=0){
url+="/";
}
url+=_1b4[2];
if(_1b4[3]){
url+=";"+_1b4[3];
}
if(_1b4[4]){
url+="?"+_1b4[4];
}
if(_1b4[5]){
url+="#"+_1b4[5];
}
return url;
};
function _1b5(base,url){
if(!base){
return url;
}
if(!url){
return base;
}
url=String(url);
base=String(base);
var _1b6=_1ab(base);
var _1b7=_1ab(url,_1b6[0]);
if(_1b7[0]!=_1b6[0]){
return url;
}
if(_1b7[1]){
return _1b3(_1b7);
}
_1b7[1]=_1b6[1];
if(_1b7[2].charAt(0)=="/"){
return _1b3(_1b7);
}
if(!_1b7[2]&&!_1b7[3]){
_1b7[2]=_1b6[2];
_1b7[3]=_1b6[3];
if(!_1b7[4]){
_1b7[4]=_1b6[4];
}
return _1b3(_1b7);
}
var _1b8=_1b6[2].split("/").slice(0,-1).concat(_1b7[2].split("/"));
var i;
if(_1b8[_1b8.length-1]=="."){
_1b8[_1b8.length-1]="";
}
for(i=0,l=_1b8.length;i<l;i++){
if(_1b8[i]=="."){
_1b8.splice(i,1);
i--;
}
}
while(true){
i=1;
n=_1b8.length-1;
while(i<n){
if(_1b8[i]==".."&&["",".."].indexOf(_1b8[i-1])==-1){
_1b8.splice(i-1,2);
break;
}
i++;
}
if(i>=n){
break;
}
}
if(_1b8.length==2&&_1b8[0]==""&&_1b8[1]==".."){
_1b8[_1b8.length-1]="";
}else{
if(_1b8.length>=2&&_1b8[_1b8.length-1]==".."){
_1b8.pop();
_1b8.pop();
_1b8.push("");
}
}
_1b7[2]=_1b8.join("/");
return _1b3(_1b7);
};
function _1b9(){
var loc=window["location"];
var _1ba=loc.protocol+"//"+loc.host+(loc.pathname.charAt(0)!=="/"?"/":"")+loc.pathname;
if(_1ba.indexOf("\\")!=-1){
_1ba=_1ba.replace(/\\/g,"/");
}
var _1bb="./";
if(_1ba.indexOf("/")!=-1){
_1bb=_1ba.substring(0,_1ba.lastIndexOf("/")+1);
}
return _1bb;
};
function _1bc(path){
path=path.replace(/([^:\/])\/+/g,"$1/");
if(path.indexOf(".")===-1){
return path;
}
var _1bd=path.split("/");
var _1be=[];
for(var i=0,part,len=_1bd.length;i<len;i++){
part=_1bd[i];
if(part===".."){
if(_1be.length===0){
throw new Error("invalid path: "+path);
}
_1be.pop();
}else{
if(part!=="."){
_1be.push(part);
}
}
}
return _1be.join("/").replace(/#$/,"");
};
function _1bf(name){
this.__name__=name;
};
_1bf.prototype.toString=function(){
return "<module '"+this.__name__+"'>";
};
function _1c0(id){
this.message="no module named "+id;
};
_1c0.prototype=new Error();
function _1c1(name,_1c2){
this.message=_1c2.id+": module "+name+" required";
};
_1c1.prototype=new Error();
function _1c3(_1c4,pkg){
this.runStack=_1c4;
var msg="";
_1c4.forEach(function(m,i){
msg+=m.module.id+"-->";
});
msg+=pkg.id;
this.message=msg+" cyclic dependency.";
};
_1c3.prototype=new Error();
function _1c5(id,_1c6,_1c7){
_1c8.apply(this,arguments);
};
_1c5.prototype=new _1c8();
_1c5.prototype.constructor=_1c5;
_1c5.prototype.make=function(name,_1c9,deps,_1ca){
var _1cb=new _1bf(name);
_1ca.modules[name]=_1cb;
_1ca.packages[name]=this;
var _1cc=this.createRequire(name,_1c9,deps,_1ca);
var _1cd=this.factory.call(_1cb,_1cc,_1cb,this);
if(_1cd){
_1cd.__name__=_1cb.__name__;
_1cb=_1cd;
}
_1ca.addModule(name,_1cb);
return _1cb;
};
_1c5.prototype.execute=function(name,_1ce,_1cf){
if(_1cf.getStackItem(name)){
return null;
}
var deps=_1cf.loadings[this.id].deps;
_1cf.pushStack(name,this);
var _1d0=this.make(name,_1ce,deps,_1cf);
if(name=="__main__"&&typeof _1d0.main=="function"){
_1d0.main();
}
_1cf.popStack();
return _1d0;
};
_1c5.prototype.toDep=function(i,_1d1){
var name=this.dependencies[i];
if(name.indexOf("/")==-1&&name.indexOf(".")!=-1){
return new _1d2(name,this,_1d1);
}else{
return new _1d3(name,this,_1d1);
}
};
_1c5.prototype.createRequire=function(name,_1d4,deps,_1d5){
var _1d6=_1d5.loader;
var _1d7=this;
var _1d8=name;
var _1d9=_1d4;
function _1da(name){
var _1db=_1d7.dependencies.indexOf(name);
if(_1db==-1){
throw new _1c1(name,_1d7);
}
var dep=deps[_1db];
var _1dc=dep.execute(_1d8,_1d9);
if(!_1dc){
if(_1d7.dependencies.indexOf(name)!=-1){
throw new _1c3(_1d5.stack,_1d6.lib[dep.id]);
}else{
console.warn("Unknown Error.");
}
}
return _1dc;
};
_1da.async=function(_1dd,_1de){
_1d5.loader.buildFileLib();
var id=_1d7.id+"~"+new Date().getTime()+Math.floor(Math.random()*100);
_1d5.loader.defineModule(_1c5,id,_1dd,function(_1df,_1e0,_1e1){
var args=[];
_1e1.dependencies.forEach(function(_1e2){
args.push(_1df(_1e2));
});
_1de.apply(null,args);
});
_1d5.loadModule(id,function(){
var _1e3=_1d5.loader.lib[id];
_1e3.execute(_1e3.id,_1d4,_1d5);
});
};
return _1da;
};
function _1e4(id,_1e5,_1e6){
_1c8.apply(this,arguments);
};
_1e4.prototype=new _1c8();
_1e4.prototype.constructor=_1e4;
_1e4.prototype.make=function(name,_1e7,deps,_1e8){
var _1e9;
var args=[];
var _1ea;
deps.forEach(function(dep){
var _1eb=dep.execute(name,_1e7);
if(args.indexOf(_1eb)==-1){
args.push(_1eb);
}
},this);
_1ea=_1e8.modules[name];
if(!_1ea){
_1ea=new _1bf(name);
_1e8.modules[name]=_1ea;
_1e8.packages[name]=this;
}
args.unshift(_1ea);
if(this.factory){
_1e9=this.factory.apply(_1ea,args);
}
if(_1e9){
if(_1ea.__empty_refs__){
_1ea.__empty_refs__.forEach(function(ref){
if(typeof console!="undefined"){
console.warn(ref+"无法正确获得"+name+"模块的引用。因为该模块是通过return返回模块实例的。");
}
});
}
_1e9.__name__=_1ea.__name__;
_1ea=_1e9;
}else{
delete _1ea.__empty_refs__;
}
_1e8.addModule(name,_1ea);
return _1ea;
};
_1e4.prototype.execute=function(name,_1ec,_1ed){
var _1ee;
var _1ef;
var deps;
if(_1ed.getStackItem(name)){
if(!(name in _1ed.modules)){
_1ed.addModule(name,new _1bf(name));
_1ed.packages[name]=this;
}
_1ee=_1ed.modules[name];
_1ef=_1ed.stack[_1ed.stack.length-1];
if(!_1ee.__empty_refs__){
_1ee.__empty_refs__=[];
}
_1ee.__empty_refs__.push(_1ef.module.id);
}else{
deps=_1ed.loadings[this.id].deps;
_1ed.pushStack(name,this);
_1ee=this.make(name,_1ec,deps,_1ed);
if(name=="__main__"&&typeof _1ee.main=="function"){
_1ee.main();
}
_1ed.popStack();
}
return _1ee;
};
_1e4.prototype.toDep=function(_1f0,_1f1){
var name=this.dependencies[_1f0];
if(name.indexOf("/")!=-1){
return new _1d3(name,this,_1f1);
}else{
return new _1d2(name,this,_1f1);
}
};
function _1c8(id,_1f2,_1f3){
if(!id){
return;
}
this.id=id;
this.factory=_1f3;
this.dependencies=this.parseDependencies(_1f2);
};
_1c8.prototype.load=function(_1f4,_1f5){
var deps=[];
var pkg=this;
var _1f6=-1;
function next(){
_1f6++;
if(_1f6==pkg.dependencies.length){
if(_1f5){
_1f5();
}
}
};
this.dependencies.forEach(function(_1f7,i){
var dep=this.toDep(i,_1f4);
deps.push(dep);
dep.load(next);
},this);
_1f4.loadings[this.id].deps=deps;
_1f4.loadings[this.id].callbacks.forEach(function(_1f8){
_1f8();
});
_1f4.loadings[this.id].callbacks=[];
next();
};
_1c8.prototype.execute=function(name,_1f9,_1fa){
if(_1fa.getStackItem(name)){
throw new _1c3(_1fa.stack);
}
var _1fb=new _1bf(name);
if(this.id==="sys"){
_1fb.modules=_1fa.modules;
_1fb.stack=_1fa.stack;
_1fb.getModule=function(name){
return _1fa.packages[name];
};
}
_1fa.addModule(name,_1fb);
_1fa.packages[name]=this;
return _1fb;
};
_1c8.prototype.parseDependencies=function(_1fc){
if(Array.isArray(_1fc)){
return _1fc;
}
if(!_1fc){
return [];
}
_1fc=_1fc.trim().replace(/^,*|,*$/g,"").split(/\s*,\s*/ig);
return _1fc;
};
function _1fd(name,_1fe,_1ff){
if(!name){
return;
}
this.owner=_1fe;
this.runtime=_1ff;
this.name=name;
};
function _1d3(name,_200,_201){
_1fd.apply(this,arguments);
var _202=_201.loader;
var info,id,_203;
var _204=_202.paths;
var type=this.getType(name);
if(type=="absolute"){
id=name;
}else{
if(type=="relative"){
info=_202.find(_1b5(_1b5(_200.id,"."),name),_204);
id=info.id;
_203=info.context;
}else{
if(type=="root"){
id=_1b5(_205._pageDir,name);
}else{
info=_202.find(name,_204);
id=info.id;
_203=info.context;
}
}
}
this.id=id;
this.context=_203||"";
this.type=type;
};
_1d3.prototype=new _1fd();
_1d3.prototype.getType=function(name){
if(~name.indexOf("://")||name.indexOf("//")===0){
return "absolute";
}
if(name.indexOf("./")===0||name.indexOf("../")===0){
return "relative";
}
if(name.charAt(0)==="/"&&name.charAt(1)!=="/"){
return "root";
}
return "top-level";
};
_1d3.prototype.constructor=_1d3;
_1d3.prototype.load=function(_206){
this.runtime.loadModule(this.id,_206);
};
_1d3.prototype.execute=function(_207,_208){
var _209=this.runtime;
var _20a=_209.loader;
var _20b;
if(this.type=="top-level"){
_20b=this.name;
}else{
if(this.type=="relative"){
_20b=this.id.slice(_208.length);
}else{
_20b=this.id;
}
}
if(_20b.slice(-3)==".js"){
_20b=_20b.slice(0,-3);
}
var _20c=_209.modules[_20b];
var pkg,deps;
if(!_20c){
pkg=_20a.lib[this.id];
_20c=pkg.execute(_20b,this.context,_209);
}
return _20c;
};
function _1d2(name,_20d,_20e){
_1fd.apply(this,arguments);
var _20f=_20e.loader;
var _210=_20e.path.concat([_20e.moduleId]);
var _211=false;
var info=_20f.find(name.replace(/\./g,"/"),_210,_20d.id);
var id=info.id;
var _212=info.context;
if(_212==""){
_211=true;
_212=_1b5(_1b5(_20d.id,"."),_212);
}
this.nameParts=this.name.split(".");
this.id=id;
this.context=_212;
this.isRelative=_211;
};
_1d2.prototype=new _1fd();
_1d2.prototype.constructor=_1d2;
_1d2.prototype.load=function(_213){
var _214=this.runtime;
var _215=_214.loader;
var _216=this.nameParts;
var _217=-1;
function next(){
_217++;
if(_217==_216.length){
if(_213){
_213();
}
}
};
_216.forEach(function(part,i){
var id,info;
if(i==_216.length-1){
id=this.id;
}else{
info=_215.find(_1b5(this.context,_216.slice(0,i+1).join("/")));
id=info.id;
if(!info.found){
id=id+"/index.js";
_215.definePrefix(id);
}
}
_214.loadModule(id,next);
},this);
next();
};
_1d2.prototype.execute=function(_218,_219){
var dep=this;
var _21a=this.runtime;
var _21b=_21a.loader;
var _21c=this.context||"";
var _21d=this.nameParts;
var _21e,_21f;
if(this.isRelative){
_21f=_218.lastIndexOf(".");
if(_21f==-1){
_21e="";
}else{
_21e=_218.slice(0,_21f);
}
}else{
_21e="";
}
var _220=_21e;
var name;
var _221=(_21e?_21e+".":"")+_21d[0];
var id,pkg,_222;
for(var i=0,l=_21d.length,part;i<l;i++){
part=_21d[i];
name=(_220?_220+".":"")+part;
if(!(name in _21a.modules)){
if(i==_21d.length-1){
id=dep.id;
}else{
id=_21b.find(_1b5(_21c,_21d.slice(0,i+1).join("/"))).id;
}
pkg=_21b.lib[id];
_222=pkg.execute(name,_21c,_21a);
_21a.setMemberTo(_220,part,_222);
}
_220=name;
}
return _21a.modules[_221];
};
function _223(_224){
this.modules={};
this.packages={};
this.loadings={};
this.stack=[];
this.members={};
this.moduleId=_224;
this.path=[""];
};
_223.prototype.addModule=function(name,_225){
_225=_225||new _1bf(name);
this.modules[name]=_225;
var _226=this.members[name];
if(_226){
_226.forEach(function(_227){
this.modules[name][_227.id]=_227.value;
},this);
}
return _225;
};
_223.prototype.loadModule=function(id,_228){
var _229=this;
var _22a=this.loader;
if(id in this.loadings){
if(this.loadings[id].deps){
_228();
}else{
this.loadings[id].callbacks.push(_228);
}
return;
}
this.loadings[id]={deps:null,callbacks:[]};
var pkg=_22a.lib[id];
if(!pkg){
throw new _1c0(id);
}
function _22b(){
var id=pkg.id;
var file=pkg.file;
pkg=_22a.lib[id];
if(!pkg||!pkg.factory){
throw new Error(file+" do not add "+id);
}
pkg.load(_229,_228);
};
if(pkg.file){
_205.loadScript(pkg.file,_22b,true);
}else{
pkg.load(this,_228);
}
};
_223.prototype.getStackItem=function(id){
var _22c;
this.stack.some(function(m){
if(m.id==id){
_22c=m;
return true;
}
});
return _22c;
};
_223.prototype.pushStack=function(id,pkg){
this.stack.push({id:id,module:pkg});
};
_223.prototype.popStack=function(){
this.stack.pop();
};
_223.prototype.setMemberTo=function(host,_22d,_22e){
if(host){
if(this.modules[host]){
this.modules[host][_22d]=_22e;
}else{
if(!this.members[host]){
this.members[host]=[];
}
this.members[host].push({id:_22d,value:_22e});
}
}
};
function _205(base){
this.useCache=true;
this.anonymousModuleCount=0;
this.base=base||"/";
this.lib={};
this.paths=[this.base];
this.scripts=document.getElementsByTagName("script");
this.lib["sys"]=new _1c8("sys");
};
_205._urlNodeMap={};
_205._pageDir=null;
_205.getAbsolutePath=function(src){
if(src.indexOf("://")!=-1||src.indexOf("//")===0){
return _1bc(src);
}
if(!_205._pageDir){
_205._pageDir=_1b9();
}
return _1bc(_205._pageDir+src);
};
_205.prototype.name2id=function(name,_22f){
if(typeof name!="string"){
return "";
}
var id,ext,_230;
if(name.indexOf("/")==-1){
id=name.replace(/\./g,"/");
}else{
id=name;
}
if(_22f&&name.lastIndexOf("/")!=name.length-1){
_230=id.lastIndexOf(".");
if(_230!=-1){
ext=id.slice(_230);
}else{
ext="";
}
if(!ext){
id+=".js";
}
}
return id;
};
_205.prototype.find=function(id,_231,base){
var _232=this;
var ext=id.slice(id.lastIndexOf("."));
if(!_231){
_231=this.paths;
}
var _233=null;
var _234=null;
function find(id){
var pkg;
if(pkg=_232.lib[id]||_232.lib[id+".js"]||_232.lib[id+"/index.js"]){
return pkg.id;
}
};
function _235(path){
var _236=find(_1b5(_1b5(base,path),id));
if(_236){
_233=_236;
_234=path;
return true;
}
};
_231.some(_235);
return {found:!!_233,id:_233||id,context:_234};
};
_205.prototype.buildFileLib=function(){
var _237=this.scripts;
for(var i=0,_238,_239,src,l=_237.length;i<l;i++){
_238=_237[i];
src=_238.getAttribute("data-src");
_239=_238.getAttribute("data-module");
if(!_239||!src){
continue;
}
_239.trim().split(/\s+/ig).forEach(function(name){
this.defineFile(_1b5(this.base,this.name2id(name,true)),src);
},this);
}
};
_205.loadScript=function(src,_23a,_23b){
if(!src||typeof src!="string"){
throw new Error("bad arguments.");
}
src=src.trim();
var _23c=_205.getAbsolutePath(src);
if(_23b){
var _23d=_205._urlNodeMap,_23e=_23d[_23c];
if(_23e){
if(_23e.loading){
_23e.callbacks.push(_23a);
}else{
_23a(_23e);
}
return;
}
}
var ele=document.createElement("script");
ele.type="text/javascript";
ele.src=src;
ele.async=true;
ele.loading=true;
ele.callbacks=[];
var _23f=function(){
ele.loading=null;
ele.callbacks.forEach(function(_240){
_240(ele);
});
for(var i=0,l=ele.callbacks.length;i<l;i++){
ele.callbacks[i]=null;
}
ele.callbacks=null;
ele=null;
};
ele.callbacks.push(_23a);
if(window.ActiveXObject){
ele.onreadystatechange=function(){
var rs=this.readyState;
if("loaded"===rs||"complete"===rs){
ele.onreadystatechange=null;
_23f();
}
};
}else{
if(ele.addEventListener){
ele.addEventListener("load",_23f,false);
ele.addEventListener("error",_23f,false);
}else{
ele.onload=ele.onerror=_23f;
}
}
document.getElementsByTagName("head")[0].insertBefore(ele,null);
if(_23b){
_23d[_23c]=ele;
}
};
_205.prototype.removeScript=function(src){
if(!src||typeof src!="string"){
throw new Error("bad arguments.");
}
src=src.trim();
var _241=_205.getAbsolutePath(src);
var _242=_205._urlNodeMap,_243=_242[_241];
if(_243){
delete _242[_241];
if(_243.parentNode){
_243.parentNode.removeChild(_243);
}
_243=null;
}
};
_205.prototype.createRuntime=function(id){
var _244=new _223(id);
_244.loader=this;
_244.path=_244.path.concat(this.paths);
return _244;
};
_205.prototype.definePrefix=function(id){
if(!id||typeof id!="string"){
return;
}
if(id in this.lib){
return;
}
this.lib[id]=new _1c8(id);
};
_205.prototype.defineFile=function(id,src){
if(!id||typeof id!="string"){
return;
}
if(id in this.lib&&(this.lib[id].factory||this.lib[id].file)){
return;
}
var pkg=new _1c8(id);
pkg.file=src;
this.lib[id]=pkg;
};
_205.prototype.defineModule=function(_245,id,_246,_247){
if(arguments.length<4){
return;
}
if(id in this.lib&&this.lib[id].factory){
return;
}
var pkg=new _245(id,_246,_247);
this.lib[id]=pkg;
};
_205.prototype.getModule=function(name){
var id=this.find(this.name2id(name)).id;
if(id in this.lib){
return this.lib[id];
}
return null;
};
_205.prototype.predefine=function(_248,src,base){
if(!_248||!src){
return;
}
base=base||"";
_248.trim().split(/\s+/ig).forEach(function(name){
name=base+name;
this.defineFile(_1b5(this.base,this.name2id(name,true)),src);
},this);
};
_205.prototype.define=function(name,_249,_24a){
if(typeof name!="string"){
return;
}
if(typeof _249=="function"){
_24a=_249;
_249=[];
}
var id=_1b5(this.base,this.name2id(name,true));
this.defineModule(_1c5,id,_249,_24a);
};
_205.prototype.add=function(name,_24b,_24c){
if(typeof name!="string"){
return;
}
if(typeof _24b=="function"){
_24c=_24b;
_24b=[];
}
var id=_1b5(this.base,this.name2id(name,true));
this.defineModule(_1e4,id,_24b,_24c);
};
_205.prototype.remove=function(name,all){
var id=_1b5(this.base,this.name2id(name,true));
delete this.lib[id];
if(all){
name=name.charAt(name.length-1)=="/"?name:name+"/";
id=_1b5(this.base,this.name2id(name));
Object.keys(this.lib).forEach(function(key){
if(key.indexOf(id)==0){
delete this.lib[key];
}
},this);
}
};
_205.prototype.clear=function(){
for(var prop in this.lib){
if(prop!="sys"){
this.remove(prop);
}
}
};
_205.prototype.execute=function(name){
if(!name||typeof name!="string"){
return;
}
this.buildFileLib();
var info=this.find(this.name2id(name));
var id=info.id;
var _24d=info.context;
var _24e=this.createRuntime(id,_24d);
_1a5.runtime=_24e;
_24e.loadModule(id,function(){
var pkg=_24e.loader.lib[id];
pkg.execute("__main__",_24d,_24e);
});
_1a5.runtime=null;
};
_205.prototype.use=function(_24f,_250){
if(!_250||typeof _250!="function"){
return;
}
this.buildFileLib();
var id="__anonymous_"+this.anonymousModuleCount+"__";
this.anonymousModuleCount++;
this.defineModule(_1c5,id,_24f,function(_251,_252,_253){
var args=[];
_253.dependencies.forEach(function(_254){
dep=_251(_254);
if(args.indexOf(dep)==-1){
args.push(dep);
}
});
if(_250.length==args.length+1){
if(typeof console!="undefined"){
console.warn("object.use即将不再支持第一个exports参数，请尽快删除。");
}
args.unshift(_252);
}
_250.apply(null,args);
});
var _255=this.createRuntime(id);
_1a5.runtime=_255;
_255.loadModule(id,function(){
var pkg=_255.loader.lib[id];
pkg.execute("__main__","",_255);
});
_1a5.runtime=null;
};
_1a5.Loader=_205;
_1a5.NoModuleError=_1c0;
_1a5.ModuleRequiredError=_1c1;
})(object);
(function(_256){
var _257=new _256.Loader("http://pub.objectjs.org/object/");
_256._loader=_257;
_256.add=_257.add.bind(_257);
_256.predefine=_257.predefine.bind(_257);
_256.define=_257.define.bind(_257);
_256.remove=_257.remove.bind(_257);
_256.use=_257.use.bind(_257);
_256.execute=_257.execute.bind(_257);
_256.addPath=function(path){
_257.paths.push(path);
};
_256.define("./window.js","sys",function(_258){
var sys=_258("sys");
var dom=sys.modules["dom"];
if(dom){
dom.wrap(window);
}
return window;
});
_256.define("./loader.js",function(_259,_25a){
_25a.Loader=_256.Loader;
});
})(object);
object.add("ua/index.js",function(_25b){
var _25c=this.numberify=function(s){
if(!s||typeof s!="string"){
}
var c=0;
return parseFloat(s.replace(/\./g,function(){
return (c++===0)?".":"";
}));
};
this.__detectUA=_25d;
this.ua={};
var o=_25d(navigator.userAgent);
object.extend(this.ua,o);
function _25d(ua){
if(!ua&&typeof ua!="string"){
ua=navigator.userAgent;
}
var m,m2;
var o={},core,_25e;
if(!~ua.indexOf("Opera")&&(m=ua.match(/MSIE\s([^;]*)/))&&m[1]){
if((m2=ua.match(/Trident\/([\d\.]*)/))&&m2[1]){
o[core="ie"]=document.documentMode;
o[_25e="ieshell"]=_25c(m2[1])+4;
}else{
o[_25e="ieshell"]=o[core="ie"]=_25c(m[1]);
}
}else{
if((m=ua.match(/AppleWebKit\/([\d\.]*)/))&&m[1]){
o[core="webkit"]=_25c(m[1]);
}else{
if(!~ua.indexOf("Opera")&&(m=ua.match(/Gecko/))){
o[core="gecko"]=0;
if((m=ua.match(/rv:([\d\.]*)/))&&m[1]){
o[core]=_25c(m[1]);
}
}else{
if((m=ua.match(/Presto\/([\d\.]*)/))&&m[1]){
o[core="presto"]=_25c(m[1]);
}
}
}
if((m=ua.match(/Chrome\/([\d\.]*)/))&&m[1]){
o[_25e="chrome"]=_25c(m[1]);
}else{
if((m=ua.match(/\/([\d\.]*)( Mobile\/?[\w]*)? Safari/))&&m[1]){
o[_25e="safari"]=_25c(m[1]);
}else{
if(/\/[\d\.]* \(KHTML, like Gecko\) Safari/.test(ua)){
o[_25e="safari"]=undefined;
}else{
if(!~ua.indexOf("Opera")&&(m=ua.match(/Firefox\/([\d\.]*)/))&&m[1]){
o[_25e="firefox"]=_25c(m[1]);
}else{
if((m=ua.match(/Opera\/([\d\.]*)/))&&m[1]){
o[_25e="opera"]=_25c(m[1]);
if((m=ua.match(/Opera\/.* Version\/([\d\.]*)/))&&m[1]){
o[_25e]=_25c(m[1]);
}
}else{
if((m=ua.match(/Opera ([\d\.]*)/))&&m[1]){
core="presto";
o[_25e="opera"]=_25c(m[1]);
}
}
}
}
}
}
}
o.shell=_25e;
o.core=core;
return o;
};
});
object.add("./string.js",function(_25f){
this.substitute=function(){
return Mustache.to_html.apply(null,arguments);
};
this.camelCase=function(str){
return str.replace(/-\D/g,function(_260){
return _260.charAt(1).toUpperCase();
});
};
this.hyphenate=function(str){
return str.replace(/[A-Z]/g,function(_261){
return ("-"+_261.charAt(0).toLowerCase());
});
};
this.capitalize=function(str){
return str.replace(/\b[a-z]/g,function(_262){
return _262.toUpperCase();
});
};
this.trim=function(str){
return (str||"").replace(/^\s+|\s+$/g,"");
};
this.ltrim=function(str){
return (str||"").replace(/^\s+/,"");
};
this.rtrim=function(str){
return (str||"").replace(/\s+$/,"");
};
this.lengthZh=function(str){
return str.length;
};
this.toQueryString=function(_263){
var _264=[];
for(var key in _263){
var _265=_263[key];
var _266;
if(_265&&_265.constructor===Array){
var qs={};
_265.forEach(function(val,i){
qs[i]=val;
});
_266=arguments.callee(qs,key);
}else{
if(typeof _265=="object"){
_266=arguments.callee(_265,key);
}else{
_266=key+"="+encodeURIComponent(_265);
}
}
if(_265!==null){
_264.push(_266);
}
}
return _264.join("&");
};
});
object.define("./events.js","ua",function(_267,_268){
var ua=_267("ua");
var _269=(function(){
if(document.createEvent){
var _26a=document.createEvent("Event");
_26a.initEvent(type,false,true);
if(_26a.preventDefault){
_26a.preventDefault();
return !(_26a.getPreventDefault?_26a.getPreventDefault():_26a.defaultPrevented);
}else{
return true;
}
}
return false;
})();
function _26b(){
};
_26b.prototype.stopPropagation=function(){
this.cancelBubble=true;
};
_26b.prototype.preventDefault=function(){
this.returnValue=false;
};
_26b.prototype.getPreventDefault=function(){
return this.returnValue===false;
};
_26b.prototype.stop=function(){
this.stopPropagation();
this.preventDefault();
};
this.fireevent=function(arg1){
var name,func,_26c;
var _26d=function(self){
var _26e=arguments.callee.__name__;
if(!name){
name=_26e;
}
var _26f={};
var args=Array.prototype.slice.call(arguments,1);
if(_26c){
for(var i=0;i<_26c.length;i++){
_26f[_26c[i]]=arguments[i+1];
}
}
_26f._args=args;
var _270=self.fireEvent(name,_26f,self);
var _271=self[_26e+"_createEvent"];
if(_271){
args.unshift(_270);
_271.apply(self,args);
}
var _272=_270.getPreventDefault?_270.getPreventDefault():_270.defaultPrevented;
if(!_272){
return func.apply(this,arguments);
}
};
if(typeof arg1=="function"){
func=arg1;
return _26d;
}else{
if(Array.isArray(arguments[0])){
_26c=arguments[0];
}else{
name=arg1;
if(arguments[1]){
_26c=arguments[1];
}
}
return function(_273){
func=_273;
return _26d;
};
}
};
this.HOLD=2;
this.CAPTURE=1;
this.wrapEvent=function(e){
e.target=e.srcElement;
e.stopPropagation=_26b.prototype.stopPropagation;
e.preventDefault=_26b.prototype.preventDefault;
e.getPreventDefault=_26b.prototype.getPreventDefault;
e.stop=_26b.prototype.stop;
return e;
};
this.wrapPreventDefault=function(e){
if(_269){
var _274=e.preventDefault;
e.preventDefault=function(){
this.defaultPrevented=true;
_274.apply(this,arguments);
};
}
};
var _275={click:2,dblclick:2,mouseup:2,mousedown:2,contextmenu:2,mousewheel:2,DOMMouseScroll:2,mouseover:2,mouseout:2,mousemove:2,selectstart:2,selectend:2,keydown:2,keypress:2,keyup:2,orientationchange:2,touchstart:2,touchmove:2,touchend:2,touchcancel:2,gesturestart:2,gesturechange:2,gestureend:2,focus:2,blur:2,change:2,reset:2,select:2,submit:2,paste:2,oninput:2,load:2,unload:1,beforeunload:2,resize:1,move:1,DOMContentLoaded:1,readystatechange:1,error:1,abort:1,scroll:1};
function _276(node,type){
if(node.nativeEventNames){
return node.nativeEventNames.indexOf(type)!=-1;
}
return type in _275;
};
this.Events=new Class(function(){
function _277(self,type){
var boss=_278(self,type);
if(self.__nativeEvents&&self.__nativeEvents[type]){
boss.removeEventListener(type,self.__nativeEvents[type].run,false);
boss.addEventListener(type,self.__nativeEvents[type].run,false);
}
};
function _279(self,type){
var boss=_278(self,type);
boss.attachEvent("on"+type,function(_27a){
_27a=_268.wrapEvent(_27a||window.event);
var _27b=self.__eventListeners?self.__eventListeners[type]:null;
if(_27b){
_27b=_27b.slice(0);
_27b.forEach(function(func){
try{
func.call(self,_27a);
}
catch(e){
_28c(e);
}
});
_27b=null;
}
var _27c=self.__nativeEvents?self.__nativeEvents[type]:null;
if(_27c){
_27c=_27c.slice(0);
_27c.forEach(function(func){
func.call(self,_27a);
});
_27c=null;
}
});
};
function _27d(self,type){
if(type in _275&&self.nodeType==1){
return;
}
var _27e=typeof type=="string"?type.toLowerCase():type;
var boss=_278(self,type);
var _27f=self["on"+_27e],_280=boss["__on"+_27e];
if(!_27f&&_280){
boss.removeEventListener(type,_280,false);
boss["__on"+_27e]=null;
}else{
if(_27f&&_27f!=_280){
boss.removeEventListener(type,_280,false);
boss.addEventListener(type,_27f,false);
boss["__on"+_27e]=_27f;
}
}
};
function _281(self,type){
if(self.nodeType==1&&_276(self,type)&&_282(self)){
return;
}
var _283=typeof type=="string"?type.toLowerCase():type;
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
self.__eventListeners[type]=[];
}
var _284=self.__eventListeners[type];
var l=_284.length;
var _285=self["on"+_283],_286=self["__on"+_283];
if(!_285&&_286){
for(var i=0;i<l;i++){
if(_284[i]==_286){
_284.splice(i,1);
break;
}
}
self["__on"+_283]=null;
}else{
if(_285&&_285!=_286){
for(var i=0;i<l;i++){
if(_284[i]==_286){
_284.splice(i,1);
break;
}
}
_284.push(_285);
self["__on"+_283]=_285;
}
}
};
function _282(node){
if(!node){
return false;
}
var _287=node.parentNode;
var top=document.documentElement;
while(_287){
if(_287==top){
return true;
}
_287=_287.parentNode;
}
return false;
};
function _288(boss,type,cap){
if(!boss["__preEventAdded_"+type]){
boss["__preEventAdded_"+type]=true;
if(boss["on"+type]){
boss["__on"+type]=boss["on"+type];
boss["on"+type]=null;
}
boss.addEventListener(type,function(_289){
_268.wrapPreventDefault(_289);
},cap);
if(boss["__on"+type]){
boss["on"+type]=boss["__on"+type];
boss["__on"+type]=null;
try{
delete boss["__on"+type];
}
catch(e){
}
}
}
};
var _28a=typeof console!="undefined"&&console.error;
var _28b=[];
function _28c(e){
if(_28a){
_28b.length=0;
for(var prop in e){
_28b.push(prop+":"+e[prop]);
_28b.push(", ");
}
if(_28b.length>0){
_28b.pop();
}
console.error(e,_28b.join(""));
}
};
this.initialize=function(self){
if(!self.addEventListener||(self==window&&ua.ua.ie==9)){
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__nativeEvents){
self.__nativeEvents={};
}
}
if(!self.addEventListener&&!self.attachEvent||(self==window&&ua.ua.ie==9)){
self.__boss=document.createElement("div");
}
};
this.addEvent=document.addEventListener?function(self,type,func,cap){
var boss=_278(self,type);
if(cap===null){
cap=false;
}
cap=!!(cap&_268.CAPTURE);
if(!ua.ua.ie&&(type=="mouseenter"||type=="mouseleave")){
var _28d=func;
func=function(_28e){
if(_28d.delegating){
_28d.call(self,_28e);
return;
}
var p=_28e.relatedTarget;
while(p&&p!=self){
try{
p=p.parentNode;
}
catch(e){
p=self;
}
}
if(p!==self&&_28d){
_28d.call(self,_28e);
}
};
func.innerFunc=_28d;
type=(type=="mouseenter"?"mouseover":"mouseout");
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
self.__eventListeners[type]=[];
}
self.__eventListeners[type].push(func);
}
if(_269){
_288(boss,type,cap);
}
_27d(self,type);
boss.addEventListener(type,func,cap);
_277(self,type);
}:function(self,type,func){
var boss=_278(self,type);
var _28f;
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__eventListeners[type]){
_28f=[];
self.__eventListeners[type]=_28f;
if(!self.__nativeEvents||!self.__nativeEvents[type]){
_279(self,type);
}
}else{
_28f=self.__eventListeners[type];
}
if(_28f.some(function(f){
return f===func;
})){
return;
}
_281(self,type);
_28f.push(func);
};
this.addNativeEvent=document.addEventListener?function(self,type,func){
var boss=_278(self,type);
if(_269){
_288(boss,type,false);
}
var _290;
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(!self.__nativeEvents[type]){
_290=[];
self.__nativeEvents[type]=_290;
self.__nativeEvents[type].run=function(_291){
_290.forEach(function(func){
func.call(self,_291);
});
};
_277(self,type);
}else{
_290=self.__nativeEvents[type];
}
_290.push(func);
}:function(self,type,func){
var boss=_278(self);
var _292;
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(!self.__nativeEvents[type]){
_292=[];
self.__nativeEvents[type]=_292;
if(!self.__nativeEvents||!self.__eventListeners[type]){
_279(self,type);
}
}else{
_292=self.__nativeEvents[type];
}
if(_292.some(function(f){
return f===func;
})){
return;
}
_292.push(func);
};
this.removeEvent=document.removeEventListener?function(self,type,func,cap){
var boss=_278(self,type);
cap=!!(cap&_268.CAPTURE);
if(!ua.ua.ie&&type=="mouseleave"){
type="mouseout";
if(self.__eventListeners&&self.__eventListeners[type]){
var _293=self.__eventListeners[type];
for(var i=0,_294,l=_293.length;i<l;i++){
_294=_293[i];
if(_294.innerFunc===func){
boss.removeEventListener(type,_294,cap);
_293.splice(i,1);
break;
}
}
}
}else{
boss.removeEventListener(type,func,cap);
}
}:function(self,type,func,cap){
var boss=_278(self,type);
if(!self.__eventListeners){
self.__eventListeners={};
}
var _295=self.__eventListeners[type];
if(!_295){
return;
}
for(var i=0;i<_295.length;i++){
if(_295[i]===func){
_295.splice(i,1);
break;
}
}
};
var _296=["error","unload","scroll","resize","load","beforeunload","blur","focus","storage","popstate","hashchange","message","redo","undo"];
function _278(self,type){
if(ua.ua.ie!=9||self!=window){
return self.__boss||self;
}
if(_296.indexOf(type)!=-1){
return self;
}else{
return self.__boss;
}
};
this.fireEvent=document.dispatchEvent?function(self,type,_297){
if(!ua.ua.ie){
if(type=="mouseleave"){
type="mouseout";
}else{
if(type=="mouseenter"){
type="mouseover";
}
}
}
_27d(self,type);
var boss=_278(self,type);
var _298=document.createEvent("Event");
_298.initEvent(type,false,true);
object.extend(_298,_297);
_268.wrapPreventDefault(_298);
boss.dispatchEvent(_298);
return _298;
}:function(self,type,_299){
if(!_299){
_299={};
}
if(self.nodeType==1&&_276(self,type)){
var _29a=_268.wrapEvent(document.createEventObject());
object.extend(_29a,_299);
if(_282(self)){
var _29b=self["__on"+type];
var _29c=self.__eventListeners[type];
if(_29b&&_29c){
for(var i=0,l=_29c.length;i<l;i++){
if(_29c[i]==_29b){
_29c.splice(i,1);
break;
}
}
self["__on"+type]=null;
}
if(self._oldFireEventInIE){
self._oldFireEventInIE("on"+type,_29a);
return _29a;
}else{
if(typeof console!="undefined"){
console.warn("请使用dom.wrap方法包装对象以添加事件处理函数");
}
}
}
}
_281(self,type);
var _29a=_268.wrapEvent(_299);
var _29c=self.__eventListeners[type];
if(_29c){
_29c=_29c.slice(0);
for(var i=0,j=_29c.length;i<j;i++){
if(_29c[i]){
try{
_29c[i].call(self,_29a,true);
}
catch(e){
_28c(e);
}
}
}
_29c=null;
}
var _29d=self.__nativeEvents[type];
if(_29d){
_29d=_29d.slice(0);
_29d.forEach(function(func){
func.call(self,_29a);
});
_29d=null;
}
return _29a;
};
});
});
object.add("./options.js",function(_29e){
var _29f=true,_2a0=Array.prototype.slice;
for(var i in {toString:1}){
_29f=null;
}
if(_29f){
_29f=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}
this.overloadsetter=function(func){
return function(){
var a=arguments[func.length-2]||null;
var b=arguments[func.length-1];
var _2a1=args=_2a0.call(arguments,0,func.length-2);
if(a===null){
return this;
}
if(typeof a!="string"){
for(var k in a){
args=_2a1.slice(0);
args.push(k);
args.push(a[k]);
func.apply(this,args);
}
if(_29f){
for(var i=_29f.length;i>0;i--){
k=_29f[i];
if(a.hasOwnProperty(k)){
func.call(this,k,a[k]);
}
}
}
}else{
args.push(a);
args.push(b);
func.apply(this,args);
}
return this;
};
};
this.Arguments=new Class(function(){
this.initialize=function(self,_2a2,opts){
if(opts==undefined){
opts={};
}
var _2a3={};
for(var key in _2a2){
_2a3[key]=(opts[key]!=undefined?opts[key]:_2a2[key]);
}
return _2a3;
};
});
this.Options=new Class({initialize:function(self,_2a4){
if(_2a4){
self._provider=_2a4;
}
self._options={};
},setOptions:function(self,_2a5,host){
if(!host){
host=self._options;
}
for(var i in _2a5){
if(i in host){
host[i]=_2a5[i];
}
}
},setOption:function(self,name,type,_2a6){
if(_2a6!==undefined){
self._options[name]=_2a6;
}else{
if(self._provider&&self._provider.makeOption){
_2a6=self._provider.makeOption(name,type);
if(_2a6===null){
return;
}else{
self._options[name]=_2a6;
}
}
}
},getOptions:function(self){
return self._options;
}});
});
object.define("dom/index.js","ua, events, string, net",function(_2a7,_2a8,_2a9){
var ua=_2a7("ua"),_2aa=_2a7("events"),_2ab=_2a7("string"),net=_2a7("net");
window.UID=1;
var _2ac={};
var get=function(uid){
return (_2ac[uid]||(_2ac[uid]={}));
};
var $uid=this.$uid=(window.ActiveXObject)?function(item){
if(item===undefined||item===null){
return null;
}
return (item.uid||(item.uid=[window.UID++]))[0];
}:function(item){
if(item===undefined||item===null){
return null;
}
return item.uid||(item.uid=window.UID++);
};
$uid(window);
$uid(document);
function _2ad(){
if(window.__domLoaded){
_2ae();
return;
}
if(!document.documentElement||!document.documentElement.doScroll){
return;
}
try{
document.documentElement.doScroll("left");
}
catch(e){
setTimeout(_2ad,1);
return;
}
_2af();
};
function _2b0(){
var _2b1=null;
_2b1=setInterval(function(){
if(/loaded|complete/.test(document.readyState)){
clearInterval(_2b1);
_2af();
}
},1);
};
function _2af(){
if(!window.__domLoaded){
window.__domLoaded=true;
}
_2ae();
};
if(!window.__domLoaded&&!window.__domreadyAdded){
window.__domreadyAdded=true;
window.__domLoaded=false;
window.__domloadHooks=[];
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",function(){
document.removeEventListener("DOMContentLoaded",arguments.callee,false);
window.__domLoaded=true;
},false);
}else{
if(window.attachEvent){
document.attachEvent("onreadystatechange",function(){
if(document.readyState==="complete"){
document.detachEvent("onreadystatechange",arguments.callee);
_2af();
}
});
window.attachEvent("onload",_2af);
_2b2();
}
}
}
function _2b2(){
if(ua.ua.webkit&&ua.ua.webkit<525){
_2b0();
}else{
if(ua.ua.ie){
var _2b3=false;
try{
_2b3=window.frameElement==null;
}
catch(e){
}
if(_2b3){
_2ad();
}
}
}
};
function _2ae(){
var _2b4=window.__domloadHooks;
var fn;
while(_2b4[0]){
try{
fn=_2b4.shift();
fn();
}
catch(e){
if(XN&&XN.DEBUG_MODE){
throw e;
}
}
}
};
this.ready=function(_2b5){
if(typeof _2b5!="function"){
return;
}
if(window.__domLoaded==true){
_2b5();
return;
}
if(document.readyState=="complete"){
window.__domLoaded=true;
_2ae();
_2b5();
return;
}
if((ua.ua.webkit&&ua.ua.webkit<525)||!document.addEventListener){
window.__domloadHooks.push(_2b5);
}else{
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_2b5,false);
}
}
};
var _2b6={};
var wrap=this.wrap=function(node){
if(!node){
return null;
}
if(Array.isArray(node)){
return new _2a8.Elements(node);
}else{
if(node._wrapped){
return node;
}
if(ua.ua.ie&&node.fireEvent){
node._oldFireEventInIE=node.fireEvent;
}
var _2b7;
if(node===window){
_2b7=_2a8.Window;
}else{
if(node===window.document){
_2b7=_2a8.Document;
}else{
if(node.nodeType===1){
_2b7=_2b8(node.tagName);
}else{
return node;
}
}
}
node._wrapped=_2b6;
$uid(node);
Class.inject(_2b7,node,function(prop,dest,src){
if(typeof src[prop]!="function"){
return (!(prop in dest));
}else{
return true;
}
});
return node;
}
};
this.getElements=function(_2b9,_2ba){
if(!_2b9||typeof _2b9!="string"){
return null;
}
if(!_2ba){
_2ba=document;
}
return new _2a8.Elements(Sizzle(_2b9,_2ba));
var _2bb=Slick.parse(_2b9);
var eles=Sizzle(_2b9,_2ba);
var _2bc,part;
if(_2bb.expressions.length==1){
part=_2bb.expressions[0];
_2bc=_2b8(part[part.length-1].tag);
}else{
for(var i=0,_2bd,_2be;i<_2bb.expressions.length;i++){
part=_2bb.expressions[i];
_2bc=_2b8(part[part.length-1].tag);
_2bd=Class.getChain(_2bc).slice(0,-1).reverse();
if(_2be){
_2bd=_2bf(_2bd,_2be);
}
if(_2bd.length==1){
break;
}
_2be=_2bd;
}
_2bc=_2bd[_2bd.length-1];
}
return new _2a8.Elements(eles,_2bc);
};
this.getElement=function(_2c0,_2c1){
if(!_2c0||typeof _2c0!="string"){
return null;
}
if(!_2c1){
_2c1=document;
}
var ele=Sizzle(_2c0,_2c1)[0];
ele=wrap(ele);
return ele;
};
this.id=function(id){
return _2a8.wrap(document.getElementById(id));
};
var _2c2=this.eval_inner_JS=function(ele){
if(!ele){
return;
}
if(typeof ele=="string"){
var node=document.createElement("div");
node.innerHTML="<div>&nbsp;</div> "+ele;
ele=node;
}
var js=[];
if(ele.nodeType==11){
for(var i=0,l=ele.childNodes.length,_2c3;i<l;i++){
_2c3=ele.childNodes[i];
if(_2c3.tagName&&_2c3.tagName.toUpperCase()=="SCRIPT"){
js.push(_2c3);
}else{
if(_2c3.nodeType===1){
var _2c4=_2c3.getElementsByTagName("script");
for(var j=0,_2c5=_2c4.length;j<_2c5;j++){
js.push(_2c4[j]);
}
}
}
}
}else{
if(ele.nodeType==1){
if(ele.tagName&&ele.tagName.toUpperCase()=="SCRIPT"){
js.push(ele);
}else{
js=ele.getElementsByTagName("script");
}
}
}
var arr=[];
for(i=0;i<js.length;i++){
arr.push(js[i]);
}
arr.forEach(function(s,i){
if(s.src){
return;
}else{
var _2c6="__inner_js_out_put = [];\n";
_2c6+=s.innerHTML.replace(/document\.write/g,"__inner_js_out_put.push");
eval(_2c6);
if(__inner_js_out_put.length!==0){
var tmp=document.createDocumentFragment();
var div=document.createElement("div");
div.innerHTML=__inner_js_out_put.join("");
while(div.firstChild){
tmp.appendChild(div.firstChild);
}
s.parentNode.insertBefore(tmp,s);
}
}
});
};
var _2c7=(function(){
var t=document.createElement("div");
t.innerHTML="<TEST_TAG></TEST_TAG>";
return !(t.firstChild===null);
})();
var _2c8=(function(){
if(ua.ua.ie<8){
return false;
}
return true;
})();
var _2c9="placeholder" in document.createElement("input");
var _2ca="naturalWidth" in document.createElement("img");
var _2cb="checkValidity" in document.createElement("input");
var _2cc="hidden" in document.createElement("div");
var _2cd="formAction" in document.createElement("input");
var _2ce="selectionStart" in document.createElement("input");
var _2cf=function(){
var prop=property(function(self){
var attr=prop.__name__;
attr=attr.replace(/^prop_/,"");
return self[attr];
},function(self,_2d0){
var attr=prop.__name__;
attr=attr.replace(/^prop_/,"");
self._set(attr,_2d0);
});
return prop;
};
var _2d1=function(_2d2,attr){
var prop=property(function(self){
if(!attr){
attr=prop.__name__.toLowerCase();
}
attr=attr.replace(/^prop_/,"");
var _2d3=self.getAttribute(attr);
return _2d3!=null&&_2d3!=="undefined"?_2d3:_2d2;
},function(self,_2d4){
if(!attr){
attr=prop.__name__.toLowerCase();
}
attr=attr.replace(/^prop_/,"");
if(!_2d4){
_2d4="";
}
self.setAttribute(attr,_2d4);
});
return prop;
};
this.getDom=function(str){
var tmp=document.createElement("div");
var _2d5=document.createDocumentFragment();
if(!_2c7){
tmp.style.display="none";
document.body.appendChild(tmp);
}
tmp.innerHTML=str;
while(tmp.firstChild){
_2d5.appendChild(wrap(tmp.firstChild));
}
if(!_2c7){
tmp.parentNode.removeChild(tmp);
}
return _2d5;
};
this.ElementClassList=new Class(Array,function(){
this.initialize=function(self,ele){
self.length=0;
self._ele=ele;
self._loadClasses();
};
this._loadClasses=function(self){
self._classes=self._ele.className.replace(/^\s+|\s+$/g,"").split(/\s+/);
};
this.toggle=function(self,_2d6){
if(!_2d6){
throw new Error("token不能为空");
return;
}
if(typeof _2d6!="string"){
return;
}
if(self.contains(_2d6)){
self.remove(_2d6);
}else{
self.add(_2d6);
}
};
this.add=function(self,_2d7){
if(!_2d7){
throw new Error("token不能为空");
return;
}
if(typeof _2d7!="string"){
return;
}
if(!self.contains(_2d7)){
self._ele.className=(self._ele.className+" "+_2d7).trim();
self._loadClasses();
}
};
this.remove=function(self,_2d8){
if(!_2d8){
throw new Error("token不能为空");
return;
}
if(typeof _2d8!="string"){
return;
}
if(!self.contains(_2d8)){
return;
}
self._ele.className=self._ele.className.replace(new RegExp(_2d8.trim(),"i"),"").trim();
self._loadClasses();
};
this.contains=function(self,_2d9){
if(!_2d9){
throw new Error("token不能为空");
return false;
}
if(typeof _2d9!="string"){
return false;
}
self._loadClasses();
if(self._classes.indexOf(_2d9)!=-1){
return true;
}else{
return false;
}
};
this.item=function(self,i){
self._loadClasses();
return self._classes[i]||null;
};
this.toString=function(self){
return self._ele.className;
};
});
var _2da=["click","dblclick","mouseup","mousedown","contextmenu","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup"];
this.Element=new Class(function(){
Class.mixin(this,_2aa.Events);
this.nativeEventNames=_2da;
this.initialize=function(self,_2db){
if(_2db){
self=document.createElement(_2db);
wrap(self);
}else{
}
if(!self.__eventListeners){
self.__eventListeners={};
}
if(!self.__nativeEvents){
self.__nativeEvents={};
}
if(self.classList===undefined&&self!==document&&self!==window){
self.classList=new _2a8.ElementClassList(self);
}
self.delegates={};
};
this.prop_hidden=_2cc?_2cf():property(function(self){
return self.style.display=="none";
},function(self,_2dc){
if(_2dc==true){
if(self.style.display!=="none"){
self.__oldDisplay=self.style.display;
}
self.style.display="none";
}else{
self.style.display=self.__oldDisplay||"";
}
});
this.retrieve=function(self,_2dd,_2de){
var _2df=get(self.uid);
if(!(_2dd in _2df)&&_2de!==undefined){
_2df[_2dd]=_2de;
}
return _2df[_2dd];
};
this.store=function(self,_2e0,_2e1){
var _2e2=get(self.uid);
_2e2[_2e0]=_2e1;
return self;
};
this.delegate=function(self,_2e3,type,fn,_2e4){
function _2e5(e){
var ele=e.srcElement||e.target;
do{
if(ele&&_2a8.Element.get("matchesSelector")(ele,_2e3)){
fn.call(wrap(ele),e);
}
}while((ele=ele.parentNode));
};
var key=_2e3+"_"+type;
if(!self.delegates){
self.delegates={};
}
if(!(key in self.delegates)){
self.delegates[key]=[];
}
self.delegates[key].push({wrapper:_2e5,fn:fn});
_2e5.delegating=true;
if(ua.ua.ie){
if(type=="mouseleave"){
type="mouseout";
}else{
if(type=="mouseenter"){
type="mouseover";
}
}
}
self.addEvent(type,_2e5,_2e4);
};
this.undelegate=function(self,_2e6,type,fn,_2e7){
var key=_2e6+"_"+type;
if(!self.delegates){
self.delegates={};
}
if(!(key in self.delegates)){
return;
}
self.delegates[key].forEach(function(item){
if(item.fn===fn){
self.removeEvent(type,item.wrapper,_2e7);
return;
}
});
};
this.matchesSelector=function(self,_2e8){
if(self!=document&&!self.parentNode){
return false;
}
return Sizzle.matches(_2e8,[self]).length>0;
};
this.getData=function(self,name){
return self.getAttribute("data-"+name);
};
this.setData=function(self,name,_2e9){
return self.setAttribute("data-"+name,_2e9);
};
this.setHTML=function(self,str){
self.set("innerHTML",str);
};
this.setContent=function(self,str){
self.setHTML(str);
};
this.getElement=function(self,_2ea){
return _2a8.getElement(_2ea,self);
};
this.getElements=function(self,_2eb){
return _2a8.getElements(_2eb,self);
};
var _2ec={before:function(_2ed,_2ee){
var _2ef=_2ee.parentNode;
if(_2ef){
_2ef.insertBefore(_2ed,_2ee);
}
},after:function(_2f0,_2f1){
var _2f2=_2f1.parentNode;
if(_2f2){
_2f2.insertBefore(_2f0,_2f1.nextSibling);
}
},bottom:function(_2f3,_2f4){
_2f4.appendChild(_2f3);
},top:function(_2f5,_2f6){
_2f6.insertBefore(_2f5,_2f6.firstChild);
}};
_2ec.inside=_2ec.bottom;
this.grab=function(self,el,_2f7){
_2ec[_2f7||"bottom"](el,self);
return self;
};
this.inject=function(self,el,_2f8){
_2ec[_2f8||"bottom"](self,el);
return self;
};
this.getPrevious=function(self,_2f9){
var _2fa=_2f9?_2a8.Element.get("matchesSelector"):null;
var _2fb=self;
while(_2fb=_2fb.previousSibling){
if(_2fb.nodeType!=1){
continue;
}
if(!_2fa||_2fa(_2fb,_2f9)){
return wrap(_2fb);
}
}
return null;
};
this.getAllPrevious=function(self,_2fc){
var _2fd=_2fc?_2a8.Element.get("matchesSelector"):null;
var _2fe=[];
var _2ff=self;
while(_2ff=_2ff.previousSibling){
if(_2ff.nodeType!=1){
continue;
}
if(!_2fd||_2fd(_2ff,_2fc)){
_2fe.push(wrap(_2ff));
}
}
return _2fe;
};
this.getNext=function(self,_300){
var _301=_300?_2a8.Element.get("matchesSelector"):null;
var _302=self;
while(_302=_302.nextSibling){
if(_302.nodeType!=1){
continue;
}
if(!_301||_301(_302,_300)){
return wrap(_302);
}
}
return null;
};
this.getAllNext=function(self,_303){
var _304=_303?_2a8.Element.get("matchesSelector"):null;
var _305=[];
var _306=self;
while(_306=_306.nextSibling){
if(_306.nodeType!=1){
continue;
}
if(!_304||_304(_306,_303)){
_305.push(wrap(_306));
}
}
return _305;
};
this.getFirst=function(self,_307){
var _308=_307?_2a8.Element.get("matchesSelector"):null;
var _309=self.childNodes,l=_309.length;
for(var i=0,_30a;i<l;i++){
_30a=_309[i];
if(_30a.nodeType!=1){
continue;
}
if(!_308||_308(_30a,_307)){
return wrap(_30a);
}
}
return null;
};
this.getLast=function(self,_30b){
var _30c=_30b?_2a8.Element.get("matchesSelector"):null;
var _30d=self.childNodes,l=_30d.length;
for(var i=l-1,_30e;i>=0;i--){
_30e=_30d[i];
if(_30e.nodeType!=1){
continue;
}
if(!_30c||_30c(_30e,_30b)){
return wrap(_30e);
}
}
return null;
};
this.getParent=function(self,_30f){
if(!_30f){
return wrap(self.parentNode);
}
var _310=_2a8.Element.get("matchesSelector");
var _311=self;
do{
if(_310(_311,_30f)){
return wrap(_311);
}
}while((_311=_311.parentNode));
return null;
};
this.getParents=function(self,_312){
var _313=_312?_2a8.Element.get("matchesSelector"):null;
var _314=[];
var _315=self;
while(_315=_315.parentNode){
if(_315.nodeType!=1){
continue;
}
if(!_313||_313(_315,_312)){
_314.push(wrap(_315));
}
}
return _314;
};
this.getSiblings=function(self,_316){
return self.getAllPrevious(_316).concat(self.getAllNext(_316));
};
this.getChildren=function(self,_317){
var _318=_317?_2a8.Element.get("matchesSelector"):null;
var _319=self.childNodes,l=_319.length,_31a=[];
for(var i=0,_31b;i<l;i++){
_31b=_319[i];
if(_31b.nodeType!=1){
continue;
}
if(!_318||_318(_31b,_317)){
_31a.push(wrap(_31b));
}
}
return _31a;
};
this.addClass=function(self,name){
if(!name){
return;
}
self.classList.add(name);
};
this.removeClass=function(self,name){
if(!name){
return;
}
self.classList.remove(name);
};
this.toggleClass=function(self,name){
if(!name){
return;
}
self.classList.toggle(name);
};
this.hasClass=function(self,name){
if(!name){
return false;
}
return self.classList.contains(name);
};
var html=document.documentElement;
var _31c=(html.style.cssFloat==null)?"styleFloat":"cssFloat",_31d=(!ua.ua.ie&&html.style.opacity!=null),_31e=(html.style.filter!=null),_31f=/alpha\(opacity=([\d.]+)\)/i;
this.prop_opacity=property(function(self){
if(_31d){
return self.style.opacity;
}else{
if(_31e){
var _320=self.style.filter||self.currentStyle.filter;
if(_320){
opacity=_320.match(_31f);
}
return (opacity==null||_320==null)?1:(opacity[1]/100);
}else{
return self.retrieve("opacity");
}
}
},function(self,_321){
if(_31d){
self.style.opacity=_321;
}else{
if(_31e){
if(!self.currentStyle||!self.currentStyle.hasLayout){
self.style.zoom=1;
}
_321=parseInt(_321*100);
if(_321>100){
_321=100;
}else{
if(_321<0){
_321=0;
}
}
var _322=_321==100?"":"alpha(opacity="+_321+")";
var _323=self.style.filter||self.currentStyle.filter||"";
self.style.filter=_31f.test(_323)?_323.replace(_31f,_322):_323+_322;
}else{
self.store("opacity",_321);
self.style.visibility=_321>0?"visible":"hidden";
}
}
});
this.setStyle=function(self,_324,_325){
switch(_324){
case "opacity":
return self.set("opacity",parseFloat(_325));
case "float":
_324=_31c;
break;
default:
break;
}
_324=_2ab.camelCase(_324);
self.style[_324]=_325;
return null;
};
this.getStyle=function(self,_326){
if(ua.ua.ie){
_326=(_326=="float"||_326=="cssFloat")?"styleFloat":_326;
var _327=self.style[_326];
if(!_327&&self.currentStyle){
_327=self.currentStyle[_326];
}
if(_326=="opacity"){
if(_327=(self.style["filter"]||"").match(/alpha\(opacity=(.*)\)/)){
if(_327[1]){
return parseFloat(_327[1])/100;
}
}
return 1;
}
if(_327=="auto"){
if((_326=="width"||_326=="height")&&(self.getStyle("display")!="none")){
return self["offset"+(_326=="width"?"Width":"Height")]+"px";
}
return _327;
}
return _327;
}else{
_326=_326=="float"?"cssFloat":_326;
var _327=self.style[_326];
if(!_327){
var css=document.defaultView.getComputedStyle(self,null);
_327=css?css[_326]:null;
}
if(_326=="opacity"){
return _327?parseFloat(_327):1;
}
return _327;
}
};
this.dispose=function(self){
return (self.parentNode)?self.parentNode.removeChild(self):self;
};
var _328="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr noframes noscript ol p pre table ul center dir isindex menu".split(" ");
this.hide=function(self){
self.setData("old-display",self.getStyle("display"));
self.style.display="none";
};
this.show=function(self){
if(self.getStyle("display")!="none"){
return;
}
var _329=self.getData("old-display");
if(_329&&_329!="none"){
self.style.display=_329;
return;
}
self.style.display="";
if(self.getStyle("display")!="none"){
return;
}
if(_328.indexOf(self.get("tagName").toLowerCase())!=-1){
self.style.display="block";
}else{
self.style.display="inline";
}
};
this.toggle=function(self){
if(self.getStyle("display")=="none"){
self.show();
}else{
self.hide();
}
};
this.prop_innerHTML=property(null,function(self,html){
if(_2c7){
self.innerHTML=html;
}else{
var _32a=_2a8.getDom(html);
self.innerHTML="";
while(_32a.firstChild){
self.appendChild(_32a.firstChild);
}
}
});
this.prop_tagName=property(function(self){
return self.tagName.toUpperCase();
});
this.fromString=staticmethod(function(str){
var tmp=document.createElement("div");
if(!_2c7){
tmp.style.display="none";
document.body.appendChild(tmp);
}
tmp.innerHTML=str.trim();
var _32b=wrap(tmp.firstChild);
if(!_2c7){
tmp.parentNode.removeChild(tmp);
}
return _32b;
});
this.position=function(self){
if(self.parentNode===null||self.style.display=="none"){
return false;
}
var _32c=null;
var pos=[];
var box;
if(self.getBoundingClientRect){
box=self.getBoundingClientRect();
var _32d=Math.max(document.documentElement.scrollTop,document.body.scrollTop);
var _32e=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
return {x:box.left+_32e,y:box.top+_32d};
}else{
if(document.getBoxObjectFor){
box=document.getBoxObjectFor(self);
var _32f=(self.style.borderLeftWidth)?parseInt(self.style.borderLeftWidth):0;
var _330=(self.style.borderTopWidth)?parseInt(self.style.borderTopWidth):0;
pos=[box.x-_32f,box.y-_330];
}else{
pos=[self.offsetLeft,self.offsetTop];
_32c=self.offsetParent;
if(_32c!=self){
while(_32c){
pos[0]+=_32c.offsetLeft;
pos[1]+=_32c.offsetTop;
_32c=_32c.offsetParent;
}
}
if(ua.ua.opera||(ua.ua.safari&&self.style.position=="absolute")){
pos[0]-=document.body.offsetLeft;
pos[1]-=document.body.offsetTop;
}
}
}
_32c=self.parentNode||null;
while(_32c&&_32c.tagName!="BODY"&&_32c.tagName!="HTML"){
pos[0]-=_32c.scrollLeft;
pos[1]-=_32c.scrollTop;
_32c=_32c.parentNode;
}
return {x:pos[0],y:pos[1]};
};
});
this.ImageElement=new Class(_2a8.Element,function(){
this.nativeEventNames=_2da.concat(["error","abort"]);
function _331(img){
var _332=new Image();
_332.src=img.src;
return {width:_332.width,height:_332.height};
};
this.prop_naturalWidth=property(function(self){
if(_2ca){
return self.naturalWidth;
}else{
return _331(self).width;
}
});
this.prop_naturalHeight=property(function(self){
if(_2ca){
return self.naturalHeight;
}else{
return _331(self).height;
}
});
});
this.FormElement=new Class(_2a8.Element,function(){
this.nativeEventNames=_2da.concat(["reset","submit"]);
this.initialize=function(self){
this.parent(self);
if(self.elements){
for(var i=0;i<self.elements.length;i++){
wrap(self.elements[i]);
}
}
if(!_2c8){
self.elements.namedItem=function(name){
return Sizzle("*[name="+name+"]",self)[0];
};
}
if(!_2cd){
self.addNativeEvent("submit",function(_333){
if(!self.__submitButton){
return;
}
var _334=self.__submitButton;
self.__submitButton=null;
var _335=self.action;
var _336=self.method;
var _337=self.encoding||self.enctype;
var _338=self.noValidate;
var _339=self.target;
var _33a=_334.getAttribute("formaction");
var _33b=_334.getAttribute("formmethod");
var _33c=_334.getAttribute("formenctype");
var _33d=_334.getAttribute("formnovalidate");
var _33e=_334.getAttribute("formtarget");
if(_33a){
self.action=_33a;
}
if(_33b){
self.method=_33b;
}
if(_33c){
self.enctype=self.encoding=_33c;
}
if(_33d){
self.formNoValidate=_33d;
}
if(_33e){
self.target=_33e;
}
var _33f=_333.getPreventDefault?_333.getPreventDefault():_333.defaultPrevented;
if(!_33f){
_333.preventDefault();
self.submit();
}
if(ua.ua.webkit<=534.3){
setTimeout(function(){
self.action=_335;
self.method=_336;
self.enctype=self.encoding=_337;
self.formNoValidate=_338;
self.target=_339;
},0);
}else{
self.action=_335;
self.method=_336;
self.enctype=self.encoding=_337;
self.formNoValidate=_338;
self.target=_339;
}
});
}
};
this.createRequest=function(self,_340){
if(!_340){
_340={};
}
if(!_340.method){
_340.method=self.method;
}
if(!_340.url){
_340.url=self.action;
}
if(!_340.data){
_340.data=self.toQueryString();
}
if(!_340.onsuccess){
_340.onsuccess=function(_341){
self.fireEvent("requestSuccess",{request:_341.request});
};
}
if(!_340.onerror){
_340.onerror=function(_342){
self.fireEvent("requestError",{request:_342.request});
};
}
if(net){
xhr=new net.Request(_340);
}else{
throw new object.ModuleRequiredError("net",_2a9);
}
return xhr;
};
this.send=function(self,data){
var _343=self.createRequest();
_343.send(data);
return _343;
};
this.toQueryString=function(self){
var _344=[];
function _345(name,_346){
if(typeof _346!="undefined"){
_344.push(encodeURIComponent(name)+"="+encodeURIComponent(_346));
}
};
self.getElements("input, select, textarea, output").forEach(function(el){
var type=el.type;
if(!el.name||el.disabled||type=="submit"||type=="reset"||type=="file"||type=="image"){
return;
}
if(el.tagName.toLowerCase()=="select"){
el.getSelected().map(function(opt){
var _347=wrap(opt).get("value");
_345(el.name,_347);
});
}else{
if(type=="radio"||type=="checkbox"){
if(el.checked){
_345(el.name,el.get("value"));
}
}else{
_345(el.name,el.get("value"));
}
}
});
return _344.join("&");
};
this.checkValidity=function(self){
return self.getElements("input, select, textarea, output").every(function(el){
return el.checkValidity();
});
};
});
this.FormItemElement=new Class(_2a8.Element,function(){
this.nativeEventNames=_2da.concat(["focus","blur","change","select","paste"]);
this.required=_2cb?_2cf():_2d1(false);
this.pattern=_2cb?_2cf():_2d1("");
this.maxlength=_2cf();
this.type=_2cb?_2cf():_2d1("text");
this.min=_2cb?_2cf():_2d1("");
this.max=_2cb?_2cf():_2d1("");
this.selectionStart=property(function(self){
try{
if(typeof self.selectionStart=="number"){
return self.selectionStart;
}
}
catch(e){
return -1;
}
if(document.selection){
var _348=document.selection.createRange();
if(_348==null||_348.parentElement()!=self){
if(self.__selectionPos){
return self.__selectionPos.start;
}else{
return -1;
}
}
return _369(self).start;
}else{
return -1;
}
});
this.selectionEnd=property(function(self){
try{
if(typeof self.selectionEnd=="number"){
return self.selectionEnd;
}
}
catch(e){
return -1;
}
if(document.selection){
var _349=document.selection.createRange();
if(_349==null||_349.parentElement()!=self){
if(self.__selectionPos){
return self.__selectionPos.end;
}else{
return -1;
}
}
return _369(self).end;
}else{
return -1;
}
});
this.getSelected=function(self){
self.selectedIndex;
var _34a=[];
for(var i=0;i<self.options.length;i++){
if(self.options[i].selected){
_34a.push(self.options[i]);
}
}
return _34a;
};
this.prop_value=property(function(self){
if(self.classList.contains("placeholder")){
return "";
}
return self.value;
},function(self,_34b){
if(self.classList.contains("placeholder")){
self.classList.remove("placeholder");
self.removeAttribute("autocomplete");
self.value="";
}
self.value=_34b;
if(!_2c9&&!self.value&&self.getAttribute("placeholder")){
self.classList.add("placeholder");
self.value=self.getAttribute("placeholder");
self.setAttribute("autocomplete","off");
}
self.checkValidity();
});
this.validity=_2cb?property(function(self){
return self.validity;
}):property(function(self){
var _34c=self.get("value");
var _34d={valueMissing:(function(){
var _34e=self.getAttribute("required");
if(_34e&&_34e!="undefined"){
return !_34c?true:false;
}else{
return false;
}
})(),typeMismatch:(function(type){
if(type=="url"){
return !(/^\s*(?:(\w+?)\:\/\/([\w-_.]+(?::\d+)?))(.*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(\w*))?$/i).test(_34c);
}
if(type=="tel"){
return !(/[^\r\n]/i).test(_34c);
}
if(type=="email"){
return !(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i).test(_34c);
}
return false;
})(self.getAttribute("type")),patternMismatch:(function(){
var _34f=self.get("pattern");
if(_34f){
return !(new RegExp("^"+_34f+"$")).test(_34c);
}else{
return false;
}
})(),tooLong:(function(){
var _350=self.get("maxlength");
var n=Number(_350);
if(n!=_350){
return false;
}
return _34c.length>n;
})(),customError:!!self.__customValidity,rangeUnderflow:false,rangeOverflow:false,stepMismatch:false};
_34d.valid=["valueMissing","typeMismatch","patternMismatch","tooLong","rangeUnderflow","rangeOverflow","stepMismatch","customError"].every(function(name){
return _34d[name]===false;
});
self.__validationMessage=(function(){
if(_34d.valid){
return "";
}
if(_34d.customError){
return self.__customValidity;
}
if(_34d.valueMissing){
return "请填写此字段。";
}
if(_34d.typeMismatch){
return "请输入一个"+self.getAttribute("type")+"。";
}
if(_34d.patternMismatch){
return "请匹配要求的格式。";
}
if(_34d.tooLong){
return "请将该文本减少为 "+self.get("maxlength")+" 个字符或更少（您当前使用了"+self.get("value").length+"个字符）。";
}
if(_34d.rangeUnderflow){
return "值必须大于或等于"+self.getAttribute("min")+"。";
}
if(_34d.rangeOverflow){
return "值必须小于或等于"+self.getAttribute("max")+"。";
}
if(_34d.stepMismatch){
return "值无效。";
}
})();
self._set("validationMessage",self.__validationMessage);
self._set("validity",_34d);
return _34d;
});
this.validationMessage=_2cb?property(function(self){
return self.validationMessage;
}):property(function(self){
self.get("validity");
return self.__validationMessage;
});
if(!_2cb){
this.setCustomValidity=function(self,_351){
self.__customValidity=_351;
self.get("validity");
};
this.checkValidity=function(self){
self.get("validity");
return self.validity.valid;
};
}
this.focusToPosition=function(self,_352){
if(_352===undefined){
_352=self.get("value").length;
}
if(self.setSelectionRange){
self.focus();
self.setSelectionRange(self.get("value").length,_352);
}else{
if(self.createTextRange){
var _353=self.createTextRange();
_353.moveStart("character",_352);
_353.collapse(true);
_353.select();
self.focus();
}else{
self.focus();
}
}
};
});
this.TextBaseElement=new Class(_2a8.FormItemElement,function(){
this.initialize=function(self){
this.parent(self);
if(!_2c9){
self.bindPlaceholder();
}
if(!_2ce){
self.addEvent("beforedeactivate",function(){
self.__selectionPos=_369(self);
});
}
};
this.prop_placeholder=property(function(self){
return self.getAttribute("placeholder");
},function(self,_354){
self.setAttribute("placeholder",_354);
if(!_2c9){
self.bindPlaceholder();
if(self.get("placeholding")){
self.value=_354;
}
}
});
this.prop_placeholding=property(function(self){
return self.classList.contains("placeholder");
},function(self,_355){
if(_355){
self.classList.add("placeholder");
self.setAttribute("autocomplete","off");
}else{
self.classList.remove("placeholder");
self.removeAttribute("autocomplete");
}
});
this.bindPlaceholder=function(self){
if(self._binded){
return;
}
self._binded=true;
function _356(_357){
var _358=self.get("placeholder");
if(!_358){
return;
}
if(self.get("placeholding")){
if(_357.type=="focus"&&self.value===_358){
self.value="";
}
self.set("placeholding",false);
}else{
if(!self.value||((ua.ua.ie==6||ua.ua.ie==7)&&!_357&&self.value==_358)){
self.set("placeholding",true);
self.value=_358;
}
}
};
self.addNativeEvent("focus",function(_359){
return _356(_359);
});
self.addNativeEvent("blur",function(_35a){
return _356(_35a);
});
if(self.form){
wrap(self.form).addNativeEvent("submit",function(){
if(self.classList.contains("placeholder")){
self.set("placeholding",false);
self.value="";
setTimeout(function(){
_356();
},0);
}
});
}
_356();
};
});
this.InputElement=new Class(_2a8.TextBaseElement,function(){
this.prop_formAction=_2cd?_2cf():_2d1("");
this.prop_formEnctype=_2cd?_2cf():_2d1("application/x-www-form-urlencoded");
this.prop_formMethod=_2cd?_2cf():_2d1("get");
this.prop_formNoValidate=_2cd?_2cf():_2d1(false);
this.prop_formTarget=_2cd?_2cf():_2d1("");
this.initialize=function(self){
this.parent(self);
if(!_2cd&&self.type=="submit"){
self.addNativeEvent("click",function(_35b){
var _35c=self.getAttribute("formaction");
if(_35c&&_35c!="undefined"){
self.form.__submitButton=self;
}
});
}
};
this.send=function(self,data){
if(self.type!="submit"){
return;
}
var _35d=self.getAttribute("formaction"),_35e=self.getAttribute("formmethod");
var _35f=self.form.createRequest({method:_35e||self.form.method,url:_35d||self.form.action,onsuccess:function(_360){
self.fireEvent("requestSuccess",{request:_360.request});
},onerror:function(_361){
self.fireEvent("requestError",{request:_361.request});
}});
_35f.send(data);
return _35f;
};
});
this.TextAreaElement=new Class(_2a8.TextBaseElement,function(){
});
this.Window=new Class(_2a8.Element,function(){
this.nativeEventNames=_2da.concat(["load","unload","beforeunload","resize","move","DomContentLoaded","readystatechange","scroll","mousewheel","DOMMouseScroll"]);
});
this.Document=new Class(_2a8.Element,function(){
this.nativeEventNames=_2da.concat(["load","unload","beforeunload","resize","move","DomContentLoaded","readystatechange","scroll","mousewheel","DOMMouseScroll"]);
});
this.Elements=new Class(Array,function(){
this.initialize=function(self,_362,_363){
for(var i=0;i<_362.length;i++){
self.push(wrap(_362[i]));
}
_363=self[0]?_2b8(self[0].nodeName):_2a8.Element;
Class.keys(_363).forEach(function(name){
if(typeof _363.get(name)!="function"){
return;
}
self[name]=function(){
var _364;
for(var i=0;i<self.length;i++){
_364=self[i];
if(typeof _364[name]=="function"){
_364[name].apply(self[i],[].slice.call(arguments,0));
}
}
};
});
self.set=function(key,_365){
for(var i=0;i<self.length;i++){
self[i].set(key,_365);
}
};
self.get=function(key){
var _366=[];
for(var i=0;i<self.length;i++){
_366.push(self[i].get(key));
}
return _366;
};
};
});
var _367={"IMG":_2a8.ImageElement,"FORM":_2a8.FormElement,"INPUT":_2a8.InputElement,"TEXTAREA":_2a8.TextAreaElement,"OUTPUT":_2a8.FormItemElement,"SELECT":_2a8.FormItemElement,"OPTION":_2a8.FormItemElement,"BUTTON":_2a8.FormItemElement};
function _2b8(_368){
var tag=_368.toUpperCase();
var cls=_367[tag];
if(cls){
return cls;
}else{
return _2a8.Element;
}
};
function _2bf(arr1,arr2){
var i;
for(i=0,l=arr1.length;i<l;i++){
if(!arr2[i]||arr2[i]!==arr1[i]){
break;
}
}
return arr1.slice(0,i);
};
function _369(_36a){
var _36b=document.selection.createRange();
if(_36b==null||_36b.parentElement()!=_36a){
return {start:-1,end:-1};
}
var _36c=_36a.createTextRange();
var _36d=_36c.duplicate();
_36c.moveToBookmark(_36b.getBookmark());
_36d.setEndPoint("EndToStart",_36c);
return {start:_36d.text.length,end:_36d.text.length+_36b.text.length};
};
});
object.add("./net.js","dom, events",function(_36e,dom,_36f){
var _370=window.__ajaxProxies;
if(!_370){
_370=window.__ajaxProxies={};
}
this.ajaxRequest=function(url,_371){
if(!url||typeof url!="string"||url.trim().length==0){
return;
}
if(!_371||typeof _371!="function"){
_371=function(){
};
}
var tmpA=document.createElement("a");
tmpA.href=url;
var _372=tmpA.hostname;
var _373=tmpA.protocol;
if(_372&&(_372!=location.hostname)){
var xhr=null;
if(_370[_372]){
(function(){
if(!_370[_372].loaded){
setTimeout(arguments.callee,100);
}else{
_371(_370[_372].contentWindow.getTransport());
}
})();
}else{
var _374=document.createElement("iframe"),_375;
_374.style.display="none";
dom.ready(function(){
_370[_372]=_374;
_374.loaded=false;
document.body.insertBefore(_374,document.body.firstChild);
_374.src=_373+"//"+_372+"/ajaxproxy.htm";
dom.wrap(_374).addEvent("load",function(){
if(_374.contentWindow.location.href!==_374.src){
_374.contentWindow.location.href=_374.src;
}else{
_374.loaded=true;
try{
_375=_374.contentWindow.getTransport();
}
catch(e){
throw new Error("message : "+e.message+" from url : "+url);
}
_371(_375);
}
});
});
}
}else{
if(window.ActiveXObject){
try{
_371(new ActiveXObject("Msxml2.XMLHTTP"));
}
catch(e){
_371(new ActiveXObject("Microsoft.XMLHTTP"));
}
}else{
_371(new XMLHttpRequest());
}
}
};
this.ping=function(url){
var n="_net_ping_"+(new Date()).getTime();
var c=window[n]=new Image();
c.onload=(c.onerror=function(){
window[n]=null;
});
c.src=url;
c=null;
};
this.Request=new Class(function(){
this.__mixins__=[_36f.Events];
this.initialize=function(self,_376){
if(window._developer_no_ajax){
return;
}
_376=_376||{};
self.url=_376.url||"";
self.method=_376.method||"get";
self.timeout=_376.timeout&&_376.timeout>0?_376.timeout:0;
self.headers=_376.headers||{};
self.data=_376.data||null;
self._xhr=null;
if(self.urlMapper){
self.url=self.urlMapper(self.url,self.method)||self.url;
}
self.onSuccess=_376.onSuccess;
self.onsuccess=_376.onsuccess;
self.onerror=_376.onerror;
self.oncomplete=_376.oncomplete;
};
this.send=function(self,data){
_36e.ajaxRequest(self.url,function(xhr){
var _377=false;
self._xhr=xhr;
var _378={request:self};
xhr.onreadystatechange=function(){
var xhr=self._xhr;
if(xhr.readyState===4){
if(_377){
return;
}else{
if(self._timer){
clearTimeout(self._timer);
self._timer=null;
}
}
self.responseText=xhr.responseText;
self.responseXML=xhr.responseXML;
if(self.requestBlocker&&self.requestBlocker.block&&self.requestBlocker.block(xhr)){
self.requestBlocker.handle(xhr);
return;
}
_378.responseText=xhr.responseText;
_378.responseXML=xhr.responseXML;
if(xhr.status===undefined||xhr.status===0||(xhr.status>=200&&xhr.status<300)){
self.fireEvent("success",_378);
if(self.onSuccess){
self.onSuccess(_378);
}
}else{
self.fireEvent("error",_378);
}
self.fireEvent("complete",_378);
}
};
var xhr=self._xhr;
var url=self.url;
if(!data){
data=self.data;
}
if(data&&self.method=="get"){
url+=(url.indexOf("?")!=-1?"&":"?")+data;
data=null;
}
xhr.open(self.method,url,true);
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
for(var name in self.headers){
xhr.setRequestHeader(name,self.headers[name]);
}
if(!self.headers["X-Requested-With"]){
xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
if(self.timeout){
self._timer=setTimeout(function(){
_377=true;
self.abort();
self.fireEvent("timeout",_378);
self.fireEvent("complete",_378);
},self.timeout);
}
self._xhr.send(data);
});
};
this.abort=function(self){
if(self._xhr){
self._xhr.abort();
}
if(self._timer){
clearTimeout(self._timer);
self._timer=null;
}
};
this.getResponseHeader=function(self,key){
return self._xhr.getResponseHeader(key);
};
this.setHeader=function(self,name,_379){
self.headers[name]=_379;
};
});
});
object.add("./mvc.js","events",function(_37a,_37b){
this.Action=new Class(_37b.Events,function(){
this.initialize=function(self){
_37b.Events.initialize(self);
self.view=null;
};
this.execute=function(self,view){
self.view=view;
view.load(self);
};
});
});
object.add("./urlparse.js",function(_37c){
var _37d="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-.";
function _37e(_37f,url,_380,_381){
var min=url.length;
for(var i=0,len=url.length;i<len;i++){
if(_380.indexOf(url.charAt(i))!=-1){
if(i<min){
min=i;
break;
}
}
}
_37f.got=url.substring(0,min);
_37f.remained=(_381?url.substring(min):url.substring(min+1));
return _37f;
};
function _382(url,_383){
if(typeof url!="string"){
return ["","","","","",""];
}
var _384="",_385="",path="",_386="",_387="",_388="",i=0;
i=url.indexOf(":");
if(i>0){
if(url.substring(0,i)=="http"){
_384=url.substring(0,i).toLowerCase();
url=url.substring(i+1);
}else{
for(var i=0,len=url.length;i<len;i++){
if(_37d.indexOf(url.charAt(i))==-1){
break;
}
}
_384=url.substring(0,i);
url=url.substring(i+1);
}
}
if(!_384&&_383){
_384=_383;
}
var _389={};
if(url.substring(0,2)=="//"){
_37e(_389,url.substring(2),"/?#",true);
_385=_389.got;
url=_389.remained;
}
if(url.indexOf("#")!=-1){
_37e(_389,url,"#");
url=_389.got;
_388=_389.remained;
}
if(url.indexOf("?")!=-1){
_37e(_389,url,"?");
url=_389.got;
_387=_389.remained;
}
if(url.indexOf(";")!=-1){
_37e(_389,url,";");
path=_389.got;
_386=_389.remained;
}
if(!path){
path=url;
}
return [_384,_385,path,_386,_387,_388];
};
function _38a(_38b){
if(!_38b){
return "";
}
var url="";
if(_38b[0]){
url+=_38b[0]+"://"+_38b[1];
}
if(_38b[1]&&_38b[2]&&_38b[2].indexOf("/")!=0){
url+="/";
}
url+=_38b[2];
if(_38b[3]){
url+=";"+_38b[3];
}
if(_38b[4]){
url+="?"+_38b[4];
}
if(_38b[5]){
url+="#"+_38b[5];
}
return url;
};
function _38c(base,url){
if(!base){
return url;
}
if(!url){
return base;
}
url=String(url);
base=String(base);
var _38d=_382(base);
var _38e=_382(url,_38d[0]);
if(_38e[0]!=_38d[0]){
return url;
}
if(_38e[1]){
return _38a(_38e);
}
_38e[1]=_38d[1];
if(_38e[2].charAt(0)=="/"){
return _38a(_38e);
}
if(!_38e[2]&&!_38e[3]){
_38e[2]=_38d[2];
_38e[3]=_38d[3];
if(!_38e[4]){
_38e[4]=_38d[4];
}
return _38a(_38e);
}
var _38f=_38d[2].split("/").slice(0,-1).concat(_38e[2].split("/"));
if(_38f[_38f.length-1]=="."){
_38f[_38f.length-1]="";
}
for(var i=0,l=_38f.length;i<l;i++){
if(_38f[i]=="."){
_38f.splice(i,1);
i--;
}
}
var i;
while(true){
i=1;
n=_38f.length-1;
while(i<n){
if(_38f[i]==".."&&["",".."].indexOf(_38f[i-1])==-1){
_38f.splice(i-1,2);
break;
}
i++;
}
if(i>=n){
break;
}
}
if(_38f.length==2&&_38f[0]==""&&_38f[1]==".."){
_38f[_38f.length-1]="";
}else{
if(_38f.length>=2&&_38f[_38f.length-1]==".."){
_38f.pop();
_38f.pop();
_38f.push("");
}
}
_38e[2]=_38f.join("/");
return _38a(_38e);
};
_37c.urlparse=_382;
_37c.urlunparse=_38a;
_37c.urljoin=_38c;
});
object.add("./validator.js",function(_390){
this.isUrl=function(text){
return /^(?:(\w+?)\:\/\/([\w-_.]+(?::\d+)?))(.*?)?(?:;(.*?))?(?:\?(.*?))?(?:\#(\w*))?$/i.test(text);
};
this.isEmail=function(text){
return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i.test(text);
};
this.isIP=function(text){
return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.i.test(text);
};
});
if(object.addPath){
object.addPath("http://a.xnimg.cn/");
}
object.add("ua/extra.js","sys",function(_391,sys){
var _392=sys.modules["ua"];
if(_392){
this.__detectUAExtra=_393;
var o=_393();
object.extend(_392.ua,o);
}
function _393(ua){
if(!ua&&typeof ua!="string"){
ua=navigator.userAgent;
}
var m,_394,o={},_395=_392.numberify;
var _396=function(key){
try{
return window.external[key];
}
catch(e){
return null;
}
};
if(m=ua.match(/360SE/)||(_396("twGetRunPath")&&window.external.twGetRunPath().indexOf("360se.exe")!=-1)){
o[_394="se360"]=3;
}else{
if(m=ua.match(/Maxthon|MAXTHON/)||_396("max_version")){
_394="maxthon";
try{
o[_394]=_395(window.external["max_version"]);
}
catch(ex){
o[_394]=0;
}
}else{
if(m=ua.match(/TencentTraveler\s([\d\.]*)/)){
o[_394="tt"]=m[1]?_395(m[1]):0;
}else{
if(m=ua.match(/TheWorld/)){
o[_394="theworld"]=3;
}else{
if(m=ua.match(/SE\s([\d\.]*)/)){
o[_394="sogou"]=m[1]?_395(m[1]):0;
}else{
if(m=ua.match(/QQBrowser.([\d\.]*)/)){
o[_394="qqbrowser"]=m[1]?_395(m[1]):0;
}
}
}
}
}
}
_394&&(o.shell=_394);
return o;
};
});
object.add("ua/os.js","sys",function(_397,sys){
var _398=sys.modules["ua"];
var _399=function(s){
var c=0;
return parseFloat(s.replace(/_/g,".").replace(/\./g,function(){
return (c++===0)?".":"";
}));
};
if(_398){
this._detectOS=_39a;
var o=_39a(navigator.userAgent.toLowerCase());
object.extend(_397,o);
}
function is(obj,type){
type=type.replace(/\b[a-z]/g,function(_39b){
return _39b.toUpperCase();
});
return Object.prototype.toString.call(obj)=="[object "+type+"]";
};
function _39c(bool,msg){
if(!bool){
throw new Error(msg);
}
};
function _39d(obj,msg){
if(obj==null){
throw new Error(msg);
}
};
function _39a(ua){
ua=ua||navigator.userAgent;
ua=ua.toLowerCase();
var _39e=[{core:"windowsnt",match:function(ua){
return /windows\snt/.test(ua)&&!/xblwp7/.test(ua);
},versionRule:/windows nt\s([\.\d]*)/},{core:"windowsnt",match:/windows\sxp/,version:5.1},{core:"windowsnt",match:/windows\s2000/,version:5},{core:"windowsnt",match:/winnt/,version:4},{core:"windows",match:/windows me/,version:"me"},{core:"windows",match:/windows 98|win98/,version:"98"},{core:"windows",match:/windows 95|win95/,version:"95"},{core:"windows",match:/win16/,version:"3.1"},{core:"windows/phone",match:/windows\sphone/,versionRule:/windows phone os ([\d\.]*)/},{core:"windows/phone",match:/xblwp7/,version:7},{core:"windows/mobile",match:/windows mobile|wce|windows ce|pocket pc|wince/,versionRule:/iemobile ([\.\d]*)/},{core:"windows",match:/win/,version:"unknown"},{core:"android",match:/\sandroid/,versionRule:/android ([^\s]*);/},{core:"linux/debian",match:/debian/,versionRule:/debian[\s\/-]([\.\d]*)/},{core:"linux/redhat",match:/red\shat/,versionRule:/red hat[\s\/-]([\.\d]*)/},{core:"linux/fedora",match:/fedora/,versionRule:/fedora[\s\/-]([\.\d]*)/},{core:"linux/ubuntu",match:/ubuntu/,versionRule:/ubuntu[\s\/-]([\.\d]*)/},{core:"linux/suse",match:/suse/,versionRule:/suse[\s\/-]([\.\d]*)/},{core:"linux/mint",match:/mint/,versionRule:/mint[\s\/-]([\.\d]*)/},{core:"linux/centos",match:/centos/,versionRule:/centos[\s\/-]([\.\d]*)/},{core:"linux/gentoo",match:/gentoo/,version:"unknown"},{core:"linux",match:/linux/,version:"unknown"},{core:"chromeos",match:/cros/,version:"unknown"},{core:"unix/sunos",match:/sunos/,version:"unknown"},{core:"unix/freebsd",match:/freebsd/,version:"unknown"},{core:"unix/openbsd",match:/openbsd/,version:"unknown"},{core:"unix/aix",match:/aix/,version:"unknown"},{core:"unix/hp_ux",match:/hp-ux/,version:"unknown"},{core:"unix",match:/x11/,version:"unknown"},{core:"macos",match:/mac_powerpc|ppc/,version:"ppc"},{core:"macos",match:/intel/,version:"intel"},{core:"macos",match:/mac_68000|68k/,version:"68k"},{core:"ios",match:function(ua){
return /applewebkit/.test(ua)&&/ mobile\//.test(ua)&&/like/.test(ua);
},versionRule:/os ([\_\.\d]*)/},{core:"macos",match:/mac/,version:"unknown"},{core:"os2",match:function(ua){
return /os\/2|ibm-webexplorer/.test(ua)||navigator.appVersion.indexOf("os/2")!=-1;
},version:"unknown"},{core:"symbian",match:/symbian|s60|symbos|symbianos|series40|series60|nokian/,versionRule:/symbian(?:os)?\/([\d\.]*);/},{core:"blackberry",match:/blackberry|rim\stablet\sos/,versionRule:/(?:version\/|blackberry[\d]{4}\/)([\d\.]*)/},{core:"webos",match:/webos/,versionRule:/webos\/([^\s]*);/},{core:"palmos",match:/palmos/,version:"unknown"}];
var o={};
for(var i=0,l=_39e.length,_39f,_3a0=false;i<l;i++){
_39f=_39e[i];
var _3a1=_39f.match;
_39c(is(_3a1,"RegExp")||is(_3a1,"Function"),"match rule should be regexp or function");
if(is(_3a1,"RegExp")){
_3a0=_3a1.test(ua);
}else{
if(is(_3a1,"Function")){
_3a0=_3a1(ua);
_39d(_3a0,"match function must return true/false");
}
}
if(!_3a0){
continue;
}
var _3a2=null,_3a3=_39f.core.split("/"),_3a4=_3a3.length;
if(_3a4>1){
o.oscore=_3a3[0];
_3a2=o;
for(var m=0;m<_3a4-1;m++){
_3a2=_3a2[_3a3[m]]={};
}
}else{
o.oscore=_39f.core;
}
var _3a5=_39f.version||"unknown";
if(_39f.versionRule){
_39c(is(_39f.versionRule,"RegExp"),"version rule should be regexp");
m=ua.match(_39f.versionRule);
if(m&&m[1]){
_3a5=_399(m[1]);
}
}
if(_3a2){
_3a2[_3a3[_3a4-1]]=_3a5;
}else{
o[o.oscore]=_3a5;
}
break;
}
if(o.ios){
m=ua.match(/ipad|ipod|iphone/);
if(m&&m[0]){
o[m[0]]=o.ios;
}
}
if(navigator&&navigator.cajaVersion){
o.caja=navigator.cajaVersion;
}
if(!_3a0){
o.oscore="unknown";
}
if(/wow64|x64|win64|ia64|x86_64|amd64|sparc64|ppc64/.test(ua)){
o.processor=64;
}else{
o.processor=32;
}
if(window.devicePixelRatio>=2){
o.resolution={width:screen.width*window.devicePixelRatio,height:screen.height*window.devicePixelRatio};
}else{
o.resolution={width:screen.width,height:screen.height};
}
var _3a6=typeof window.orientation!="undefined"?true:false;
if(_3a6){
if(window.innerWidth!=undefined){
o.orientation=window.innerWidth>window.innerHeight?"landscape":"profile";
}else{
o.orientation=window.screen.width>window.screen.height?"landscape":"profile";
}
}else{
o.orientation="unknown";
}
return o;
};
});
object.add("ua/flashdetect.js",function(_3a7){
this.getFlashVersion=function(){
var _3a8=false;
if(navigator.plugins&&navigator.mimeTypes.length){
var x=navigator.plugins["Shockwave Flash"];
if(x&&x.description){
_3a8=x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")[0];
}
}else{
if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){
var axo=1;
var _3a9=3;
while(axo){
try{
_3a9++;
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_3a9);
_3a8=_3a9;
}
catch(e){
axo=null;
}
}
}else{
try{
var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
}
catch(e){
try{
var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
_3a8=6;
axo.AllowScriptAccess="always";
}
catch(e){
if(_3a8==6){
return _3a8;
}
}
try{
axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
}
catch(e){
}
}
if(axo!=null){
_3a8=axo.GetVariable("$version").split(" ")[1].split(",")[0];
}
}
}
return _3a8;
};
});
object.define("xn.net","sys, net",function(_3aa,_3ab){
var sys=_3aa("sys");
var net=_3aa("net");
var _3ac=net.Request.prototype.send;
net.Request.set("send",function(self,data){
data=data||self.data||"";
if(self.method=="post"&&XN.get_check&&!/[\?|\&]requestToken=/.test(data)){
data+=(data?"&":"")+"requestToken="+XN.get_check;
}
if(self.method=="post"&&XN.get_check_x&&!/[\?|\&]_rtk=/.test(data)){
data+=(data?"&":"")+"_rtk="+XN.get_check_x;
}
_3ac.call(self,data);
});
this.Request=net.Request;
});
object.define("jxn","dom, string, net, xn.net, ua",function(_3ad,_3ae){
_3ad("xn.net");
var _3af=Object.prototype.toString,_3b0=Array.prototype.slice,dom=_3ad("dom"),net=_3ad("net"),ua=_3ad("ua"),_3b1=_3ad("string"),_3b2=/^<[\w\W]+>/,_3b3=/^<([\w]+)>$/,_3b4=function(){
},_3b5=false,_3b6=function(){
},cons=typeof console!="undefined"?console:{log:_3b4,error:_3b4,warn:_3b4},jxn=function(_3b7,_3b8){
var node,_3b9=null,_3ba,_3bb,i,l,msg;
if(jxn.isJxnNode(_3b7)){
return _3b7;
}
if(jxn.isString(_3b7)){
_3b7=jxn.trim(_3b7);
if(jxn.isHTMLTag(_3b7)){
node=document.createElement(RegExp.$1);
_3b9=[node];
}else{
if(jxn.isHTMLString(_3b7)){
_3b9=dom.getDom(_3b7).childNodes;
_3bb=[];
for(i=0,l=_3b9.length;i<l;i++){
if(jxn.isDomNode(_3b9[i])){
_3bb[_3bb.length]=_3b9[i];
}
}
_3b9=_3bb;
}else{
if(_3b7.toLowerCase()=="body"||_3b7.toLowerCase()=="html"){
_3b9=Sizzle(_3b7);
}else{
_3b8=_3b8||document.body;
if(jxn.isJxnNode(_3b8)){
_3b8=_3b8[0];
}
_3b9=Sizzle(_3b7,_3b8);
}
}
}
}else{
if(jxn.isFunction(_3b7)){
dom.ready(_3b7);
return;
}else{
if(jxn.isAcceptableElement(_3b7)){
_3b9=[_3b7];
}else{
if(jxn.isArray(_3b7)){
_3b9=_3b7;
for(i=0,l=_3b9.length;i<l;i++){
if(!jxn.isAcceptableElement(_3b9[i])){
msg="array elements should be all dom nodes";
if(_3b9[i].nodeType==3){
msg+=", text node(nodeType = 3) is not acceptable";
}
jxn.error(msg);
return;
}
}
}
}
}
}
_3ba=new _3b6();
var len=_3b9?_3b9.length:0;
_3ba.length=len;
for(i=0;i<len;i++){
_3ba[i]=_3b9[i];
}
return _3ba;
};
jxn.extend=function(dest,src){
if(typeof src==="undefined"){
src=dest;
dest=jxn;
}
var prop;
for(prop in src){
if(src.hasOwnProperty(prop)){
dest[prop]=src[prop];
}
}
};
jxn.extend({errors:[],warns:[],logs:[],consoleClean:function(flag){
_3b5=flag;
},resetLogs:function(){
jxn.errors.length=0;
jxn.warns.length=0;
jxn.logs.length=0;
},error:function(){
var msg=_3b0.call(arguments);
jxn.errors.push(msg.join(","));
!_3b5&&cons.error(msg);
},log:function(){
var msg=_3b0.call(arguments);
jxn.logs.push(msg.join(","));
!_3b5&&cons.log(msg);
},warn:function(){
var msg=_3b0.call(arguments);
jxn.warns.push(msg.join(","));
!_3b5&&cons.warn(msg);
},slice:_3b0,isInDomTree:function(_3bc){
return !!dom.wrap(_3bc).getParent("body");
},isDomNode:function(obj){
return obj&&obj.nodeType==1;
},isAcceptableElement:function(obj){
return obj&&(obj.nodeType==1||obj.nodeType==9||obj==window);
},isFunction:function(obj){
return _3af.call(obj)=="[object Function]";
},isUndefined:function(obj){
return typeof obj==="undefined";
},isObject:function(obj){
return obj&&_3af.call(obj)=="[object Object]";
},isArray:function(obj){
return _3af.call(obj)=="[object Array]";
},isString:function(obj){
return typeof obj=="string";
},isRegExp:function(obj){
return _3af.call(obj)=="[object RegExp]";
},isBoolean:function(obj){
return obj&&_3af.call(obj)=="[object Boolean]";
},isNumber:function(obj){
return typeof obj=="number";
},trim:function(str){
if(!str){
return str;
}
return str.replace(/^\s+|\s+$/g,"");
},isHTMLString:function(obj){
return jxn.isString(obj)&&_3b2.test(obj);
},isHTMLTag:function(obj){
return jxn.isString(obj)&&_3b3.test(obj);
},isDocument:function(obj){
return obj&&obj.nodeType===9;
},isWindow:function(node){
return node&&typeof node==="object"&&"setInterval" in node&&jxn.isDocument(node.document);
},getNumber:function(str){
return parseFloat(str,10);
},getWindow:function(node){
return jxn.isWindow(node)?node:node.nodeType===9?node.defaultView||node.parentWindow:false;
},isJxnNode:function(node){
return node&&node.constructor==_3b6;
},forEach:function(obj,fun){
var i,l,prop;
if(jxn.isArray(obj)){
for(i=0,l=obj.length;i<l;i++){
fun.call(obj,obj[i],i);
}
}else{
if(jxn.isObject(obj)){
for(prop in obj){
if(!obj.hasOwnProperty(prop)){
continue;
}
fun.call(obj,prop,obj[prop]);
}
}
}
},registerPlugin:function(name,_3bd,_3be){
var i,_3bf,l;
_3b6._plugins=_3b6._plugins||{};
if(_3b6._plugins[name]){
jxn.error("plugin "+name+" already exists!");
return;
}
_3b6._plugins[name]=_3bd;
jxn._extendAsPlugin(_3b6.prototype,_3bd,name);
if(jxn.isArray(_3be)){
for(i=0,l=_3be.length;i<l;i++){
_3bf=_3be[i];
if(!jxn.isString(_3bf)){
jxn.error(_3bf+" is not string");
continue;
}
if(jxn[_3bf]){
jxn.error(_3bf+" exists in jxn");
continue;
}
jxn[_3bf]=_3bd[_3bf];
}
}
},_extendAsPlugin:function(dest,src,name){
for(var prop in src){
if(!src.hasOwnProperty(prop)){
continue;
}
pluginProp=src[prop];
if(jxn.isFunction(pluginProp)){
jxn._appendFnToDest(dest,prop,pluginProp,name);
}else{
dest[prop]=src[prop];
}
}
},_appendFnToDest:function(dest,prop,_3c0,name){
if(prop in dest){
jxn.warn(prop,name,dest[prop].__by,"重复设置");
}
dest[prop]=function(){
var i,l,_3c1,_3c2,_3c3=this,node,_3c4=[],_3c5=false;
l=_3c3.length;
if(l==0){
if(prop.indexOf("has")==0||prop.indexOf("is")==0){
return false;
}else{
if(prop.indexOf("get")==0){
return undefined;
}
}
}
for(i=0;i<l;i++){
node=_3c3[i];
_3c1=_3b0.call(arguments);
_3c1.unshift(node);
_3c2=_3c0.apply(this,_3c1);
_3c4[_3c4.length]=_3c2;
if(_3c2!==undefined){
_3c5=true;
}
}
if(_3c5){
return _3c4[0];
}
return this;
};
dest[prop].__name=prop;
dest[prop].__by=name;
},tagName:function(_3c6){
if(!_3c6||!_3c6.tagName){
return "";
}
var _3c7=_3c6.tagName;
return _3c7.toLowerCase();
}});
if(!ua.ua.ie){
_3b6.prototype=new Array();
_3b6.prototype.constructor=_3b6;
}else{
jxn.forEach(["concat","indexOf","join","lastIndexOf","pop","push","reverse","shift","slice","sort","splice","unshift","valueOf","forEach","some","every","map","filter"],function(_3c8){
_3b6.prototype[_3c8]=Array.prototype[_3c8];
});
}
jxn.extend(_3b6.prototype,{each:function(func){
var i,l=this.length;
for(i=0;i<l;i++){
func.call(this[i],this[i]);
}
return this;
},toArray:function(){
return _3b0.call(this);
},node:function(_3c9){
return jxn(this[_3c9]);
},index:function(node){
if(!node){
if(!this[0]){
return -1;
}
return this.prevAll().length;
}
if(jxn.isJxnNode(node)){
node=node[0];
}
var i,l=this.length;
for(i=0;i<l;i++){
if(node==this[i]){
return i;
}
}
return -1;
},eq:function(_3ca){
if(_3ca==-1){
return this.node(this.length-1);
}
return this.node(_3ca);
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
}});
(function(jxn,_3cb){
var _3cc={},_3cd=function(_3ce){
if(_3ce.preventDefault){
_3ce.preventDefault();
}else{
_3ce.returnValue=false;
}
return false;
},_3cf=["error","unload","scroll","resize"],_3d0=["blur","change","click","dblclick","focus","select","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];
var _3d1={load:function(_3d2,_3d3,_3d4){
if(jxn.isWindow(_3d2)){
dom.wrap(_3d2).addEvent("load",_3d3,_3d4);
}else{
jxn.loadFile.apply(_3d2,arguments);
}
},delegate:function(_3d5,_3d6,_3d7,_3d8,_3d9){
jxn.forEach(_3d7.split(" "),function(type){
dom.wrap(_3d5).delegate(_3d6,type,_3d8,_3d9);
});
},undelegate:function(_3da,_3db,_3dc,_3dd,_3de){
jxn.forEach(_3dc.split(" "),function(type){
dom.wrap(_3da).undelegate(_3db,type,_3dd,_3de);
});
},trigger:function(_3df,_3e0,data){
dom.wrap(_3df).fireEvent(_3e0,data);
},bind:function(_3e1,_3e2,_3e3,_3e4){
if(jxn.isObject(_3e2)){
for(var prop in _3e2){
dom.wrap(_3e1).addEvent(prop,_3e2[prop],_3e4);
}
return;
}
var _3e5=_3e2.split(" ");
for(var i=0,l=_3e5.length;i<l;i++){
dom.wrap(_3e1).addEvent(_3e5[i],_3e3,_3e4);
}
},unbind:function(_3e6,_3e7,_3e8,_3e9){
if(jxn.isObject(_3e7)){
for(var prop in _3e7){
dom.wrap(_3e6).removeEvent(prop,_3e7[prop],_3e9);
}
return;
}
var _3ea=_3e7.split(" ");
for(var i=0,l=_3ea.length;i<l;i++){
dom.wrap(_3e6).removeEvent(_3ea[i],_3e8,_3e9);
}
},on:function(_3eb,_3ec,_3ed,_3ee){
var _3ef=false;
jxn.forEach(jxn._specialEvents,function(_3f0){
if(_3f0.likes(_3ec)){
_3ef=true;
_3f0.on(_3eb,_3ec,_3ed,_3ee);
}
});
if(_3ef){
return;
}
dom.wrap(_3eb).addEvent(_3ec,_3ed,_3ee);
},off:function(_3f1,_3f2,_3f3,_3f4){
var _3f5=false;
jxn.forEach(jxn._specialEvents,function(_3f6){
if(_3f6.likes(_3f2)){
_3f5=true;
_3f6.off(_3f1,_3f2,_3f3,_3f4);
}
});
if(_3f5){
return;
}
dom.wrap(_3f1).removeEvent(_3f2,_3cc[_3f3]||_3f3,_3f4);
if(_3cc[_3f3]){
_3cc[_3f3]=null;
delete _3cc[_3f3];
}
},one:function(_3f7,_3f8,_3f9,_3fa){
function _3fb(){
_3f9.apply(this,arguments);
dom.wrap(_3f7).removeEvent(_3f8,_3fb,_3fa);
_3cc[_3f9]=null;
delete _3cc[_3f9];
};
_3cc[_3f9]=_3fb;
dom.wrap(_3f7).addEvent(_3f8,_3fb,_3fa);
},hover:function(_3fc,_3fd,_3fe){
if(!_3fd){
return;
}
dom.wrap(_3fc).addEvent("mouseenter",_3fd);
dom.wrap(_3fc).addEvent("mouseleave",_3fe||_3fd);
},ready:function(_3ff,_400){
if(_3ff!=document){
jxn.error("ready should be called for jxn(document)");
return;
}
dom.ready(_400);
},submit:function(_401,_402){
if(!_401||!_401.tagName){
jxn.error("element should have tagName");
return;
}
var _403=_401.tagName.toLowerCase();
if(_403!="form"&&_403!="input"){
jxn.error("submit event, element should be form or input");
return;
}
if(_403=="input"&&_401.type!="submit"){
jxn.error("submit event, type of input should be submit");
}
if(_402===false){
_402=_3cd;
}
dom.wrap(_401).addEvent("submit",_402);
},toggle:function(_404){
var _405=jxn.slice.call(arguments);
if(_405.length==1){
if(jxn.css(_404,"display")=="none"){
jxn.show(_404);
}else{
jxn.hide(_404);
}
return;
}
_405.shift();
_405.currentIndex=0;
var _406=_405.length;
if(_406<=1){
jxn.error("two event handlers for toggle at least");
return;
}
dom.wrap(_404).addEvent("click",function(){
var _407=_405.currentIndex;
_405[_407].apply(this,arguments);
_407=_407+1;
if(_407==_406){
_407=0;
}
_405.currentIndex=_407;
});
}};
function _408(_409,_40a){
_3d1[_409]=function(_40b,_40c,_40d){
if(_40a&&!jxn.isWindow(_40b)){
jxn.error(_409+" caller should be window");
return;
}
if(_40c){
dom.wrap(_40b).addEvent(_409,_40c,_40d);
}else{
dom.wrap(_40b)[_409]();
}
};
};
for(var i=0,_40e,l=_3cf.length;i<l;i++){
_40e=_3cf[i];
_408(_40e,true);
}
for(var i=0,_40e,l=_3d0.length;i<l;i++){
_40e=_3d0[i];
_408(_40e);
}
jxn.registerPlugin("Events",_3d1,["on"]);
})(jxn);
(function(jxn,_40f){
var _410=(function(){
var _411=document.createElement("table"),flag;
try{
_411.innerHTML="<tbody><tr><td>1</td></tr></tbody>";
}
catch(e){
return false;
}
flag=_411.getElementsByTagName("td").length!=0;
_411.innerHTML="";
_411=null;
return flag;
})(),_412=(function(){
var _413=document.createElement("select"),flag;
try{
_413.innerHTML="<option>1</option>";
}
catch(e){
return false;
}
flag=_413.getElementsByTagName("option").length!=0;
_413.innerHTML="";
_413=null;
return flag;
})(),_414=/^\s*<\s*tr\s*>/;
function _415(node,prev){
if(node){
node._prevJxnNode=prev;
}
return node;
};
function _416(_417){
var prev=_417._prevJxnNode;
if(prev){
_417._prevJxnNode=null;
}
return prev;
};
function _418(str){
var tmp=document.createElement("div");
tmp.innerHTML="<table><tbody>"+str+"</tbody></table>";
var res=tmp.getElementsByTagName("tr");
return res;
};
function _419(_41a,html,_41b){
if(_41b=="table"){
_41a.appendChild(document.createElement("tbody"));
}else{
_41a=_41a.parentNode;
}
var tmp=document.createElement("div");
tmp.innerHTML="<table><tbody>"+html+"</tbody></table>";
_41a.replaceChild(tmp.firstChild.firstChild,_41a.tBodies[0]);
tmp.removeChild(tmp.firstChild);
tmp=null;
};
function _41c(_41d,html,_41e){
var tmp=document.createElement("div"),_41f,_420=_41d.selectedIndex,_421;
if(_420==-1){
_420=0;
}
tmp.innerHTML="<select>"+html+"</select>";
_41f=tmp.firstChild;
while(_421=_41f.firstChild){
_41d.appendChild(_421);
}
tmp.removeChild(_41f);
tmp=null;
_41d.selectedIndex=_420;
};
var Dom={show:function(_422){
dom.wrap(_422).show();
},hide:function(_423){
dom.wrap(_423).hide();
},after:function(_424,_425){
_424=dom.wrap(_424);
var node=_425;
if(jxn.isString(_425)){
node=jxn(_425)[0];
}else{
if(jxn.isFunction(_425)){
_425=_425.call(_424,null);
if(!_425){
return;
}
jxn(_424).after(_425);
return;
}else{
if(jxn.isJxnNode(_425)){
_425.each(function(node){
jxn.after(_424,node);
});
}
}
}
if(jxn.isDomNode(node)){
dom.wrap(_424).grab(node,"after");
}
},insertBefore:function(_426,_427){
jxn(_427).before(_426);
},append:function(_428,html){
if(!jxn.isAcceptableElement(_428)){
return;
}
if(jxn.isJxnNode(html)){
html.each(function(node){
_428.appendChild(node);
});
return;
}
var _429=false;
if(jxn.isString(html)){
if(_414.test(html)){
_429=true;
html=_418(html);
}else{
html=dom.getDom(html);
}
}
if(!_429){
_428.appendChild(html);
return;
}
var _42a=jxn.tagName(_428),root=_42a=="table"?(_428.getElementsByTagName("tbody")[0]||_428.tBodies[0]):_428,trs=html.length;
for(var i=0;i<trs;i++){
root.appendChild(html[i]);
}
},appendTo:function(_42b,_42c){
if(_42c==="body"){
_42c=document.body;
}else{
if(_42c==="head"){
_42c=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
}
}
if(!jxn.isAcceptableElement(_42b)){
return;
}
if(jxn.isString(_42c)){
_42c=Sizzle(_42c);
}else{
if(!jxn.isArray(_42c)&&!jxn.isJxnNode(_42c)){
_42c=[_42c];
}
}
var _42d=jxn.isInDomTree(_42b);
for(var i=0,_42e,l=_42c.length;i<l;i++){
_42e=_42c[i];
_42e.appendChild(_42b);
if(!_42d){
_42b=_42b.cloneNode(true);
}
}
},before:function(_42f,_430){
_42f=dom.wrap(_42f);
var node=_430;
if(jxn.isString(_430)){
node=jxn(_430)[0];
}else{
if(jxn.isFunction(_430)){
_430=_430.call(_42f,null);
if(!_430){
return;
}
jxn.before(_42f,_430);
return;
}else{
if(jxn.isJxnNode(_430)){
_430.each(function(node){
jxn.before(_42f,node);
});
}
}
}
if(jxn.isDomNode(node)){
dom.wrap(_42f).grab(node,"before");
}
},clone:function(_431){
return _431.cloneNode(true);
},detach:function(){
},empty:function(_432){
if(!_432){
return;
}
if(_432.nodeType===1){
var _433=_432.getElementsByTagName("*");
for(var i=0,_434,l=_433.length;i<l;i++){
_434=_433[i];
try{
if(_434.clearAttributes){
_434.clearAttributes();
}else{
for(var p in node){
delete node[p];
}
}
}
catch(e){
}
}
}
while(_432.firstChild){
_432.removeChild(_432.firstChild);
}
},prepend:function(_435,html){
if(!jxn.isAcceptableElement(_435)){
return;
}
if(jxn.isJxnNode(html)){
html.each(function(node){
_435.insertBefore(node,_435.firstChild);
});
}else{
if(jxn.isString(html)){
html=dom.getDom(html);
}
_435.insertBefore(html,_435.firstChild);
}
},prependTo:function(_436,_437){
if(!jxn.isAcceptableElement(_436)){
return;
}
if(jxn.isString(_437)){
_437=Sizzle(_437);
}else{
if(!jxn.isArray(_437)&&!jxn.isJxnNode(_437)){
_437=[_437];
}
}
var _438=jxn.isInDomTree(_436);
for(var i=0,_439,l=_437.length;i<l;i++){
_439=_437[i];
if(_439.firstChild){
_439.insertBefore(_436,_439.firstChild);
}else{
_439.appendChild(_436);
}
if(!_438){
_436=_436.cloneNode(true);
}
}
},remove:function(_43a){
dom.wrap(_43a).dispose();
},replaceAll:function(_43b,_43c){
if(!jxn.isAcceptableElement(_43b)){
return;
}
if(jxn.isString(_43c)){
_43c=Sizzle(_43c);
}else{
if(!jxn.isArray(_43c)&&!jxn.isJxnNode(_43c)){
_43c=[_43c];
}
}
var _43d=jxn.isInDomTree(_43b);
for(var i=0,l=_43c.length;i<l;i++){
_43c[i].parentNode.replaceChild(_43b,_43c[i]);
if(!_43d){
_43b=_43b.cloneNode(true);
}
}
},replaceWith:function(_43e,html){
if(jxn.isString(html)){
html=dom.getDom(html);
}
_43e.parentNode.replaceChild(html,_43e);
},text:function(_43f,text){
if(text&&jxn.isString(text)){
dom.wrap(_43f).setContent(text);
}else{
return Sizzle.getText([_43f]);
}
},val:function(_440,text){
if(!jxn.isUndefined(text)){
_440.value=text;
}else{
return _440.value;
}
},wrap:function(_441,html){
if(jxn.isFunction(html)){
html=html.call(_441,null);
}
var _442=_441.parentNode,_443=dom.getDom(jxn.trim(html)),_444=_443.firstChild;
_442.insertBefore(_443,_441);
_444.appendChild(_441);
},unwrap:function(_445){
var _446=_445.parentNode;
if(_446==document.body){
return;
}
var _447=_446.parentNode;
var _448=dom.wrap(_446).getChildren();
for(var i=0,l=_448.length;i<l;i++){
_447.insertBefore(_448[i],_446);
}
_447.removeChild(_446);
},wrapAll:function(){
alert("not implemented");
},wrapInner:function(){
alert("not implemented");
},html:function(_449,html){
if(jxn.isUndefined(html)){
return _449.innerHTML;
}
var _44a=jxn.tagName(_449);
jxn.empty(_449);
if(!_410&&/table|tbody/.test(_44a)){
_419(_449,html,_44a);
return;
}
if(!_412&&/select/.test(_44a)){
_41c(_449,html,_44a);
return;
}
try{
dom.wrap(_449).setContent(html);
}
catch(e){
jxn.error(_44a+" can not set innerHTML");
}
},prev:function(_44b,_44c){
_44c=_44c||"*";
return _415(jxn(dom.wrap(_44b).getPrevious(_44c)),this);
},prevAll:function(_44d,_44e){
_44e=_44e||"*";
return _415(jxn(dom.wrap(_44d).getAllPrevious(_44e)),this);
},next:function(_44f,_450){
_450=_450||"*";
return _415(jxn(dom.wrap(_44f).getNext(_450)),this);
},nextAll:function(_451,_452){
_452=_452||"*";
return _415(jxn(dom.wrap(_451).getAllNext(_452)),this);
},parent:function(_453,_454){
return _415(jxn(dom.wrap(_453).getParent(_454)),this);
},parents:function(_455,_456){
return _415(jxn(dom.wrap(_455).getParents(_456)),this);
},siblings:function(_457,_458){
_458=_458||"*";
return _415(jxn(dom.wrap(_457).getSiblings(_458)),this);
},firstChild:function(_459,_45a){
_45a=_45a||"*";
return _415(jxn(dom.wrap(_459).getFirst(_45a)),this);
},lastChild:function(_45b,_45c){
_45c=_45c||"*";
return _415(jxn(dom.wrap(_45b).getLast(_45c)),this);
},children:function(_45d,_45e){
_45e=_45e||"*";
return _415(jxn(dom.wrap(_45d).getChildren(_45e)),this);
},find:function(_45f,_460){
return _415(jxn(_460,_45f),this);
},end:function(_461){
return _416(this);
}};
jxn.registerPlugin("Dom",Dom,["html","empty","before","after","show","hide"]);
})(jxn);
(function(jxn,_462){
var _463=/^-?\d+(?:px)?$/i;
var _464={width:function(_465){
if(_463.test(_465)){
_465=parseFloat(_465);
if(_465>=0){
_465=_465+"px";
}
}
return _465;
}};
_464.width=_464.height=_464.top=_464.left;
var Css={addClass:function(_466,cls){
dom.wrap(_466).addClass(cls);
},removeClass:function(_467,name){
if(name===_462){
var _468=jxn.trim(dom.wrap(_467).className);
if(_468==""){
return;
}
_468=_468.split(" ");
jxn.forEach(_468,function(name){
name=jxn.trim(name);
if(name!=""){
dom.wrap(_467).removeClass(name);
}
});
}else{
dom.wrap(_467).removeClass(name);
}
},toggleClass:function(_469,_46a){
dom.wrap(_469).toggleClass(_46a);
},hasClass:function(_46b,name){
return dom.wrap(_46b).hasClass(name);
},css:function(_46c,name,_46d){
if(!jxn.isAcceptableElement(_46c)){
jxn("css() should be called by dom node");
return;
}
_46c=dom.wrap(_46c);
if(jxn.isObject(name)){
jxn.forEach(name,function(prop,_46e){
prop=_3b1.camelCase(prop);
_46e=_464[prop]?_464[prop](_46e):_46e;
_46c.setStyle(prop,_46e);
});
}else{
if(_46d!==_462){
name=_3b1.camelCase(name);
_46d=_464[name]?_464[name](_46d):_46d;
_46c.setStyle(_3b1.camelCase(name),_46d);
}else{
if(name){
if(name.indexOf(":")!=-1){
_46c.style.cssText+=";"+name;
}else{
if((name=="width"||name=="height")&&_46c.offsetWidth===0){
var _46f={position:"absolute",visibility:"hidden",display:"block"},_470={position:_46c.getStyle("position"),visibility:_46c.getStyle("visibility"),display:_46c.getStyle("display")},_46d;
for(var prop in _46f){
_46c.setStyle(prop,_46f[prop]);
}
_46d=_46c.getStyle(_3b1.camelCase(name));
for(var prop in _470){
_46c.setStyle(prop,_470[prop]);
}
return _46d;
}
return _46c.getStyle(_3b1.camelCase(name));
}
}else{
return _46c.style.cssText;
}
}
}
}};
jxn.registerPlugin("Css",Css,["css"]);
})(jxn);
(function(jxn,_471){
var Ajax={ajaxComplete:function(_472,_473){
},ajaxSuccess:function(_474,_475){
},ajaxStop:function(_476,_477){
},ajaxStart:function(_478,_479){
},ajaxSend:function(_47a,_47b){
},ajaxError:function(_47c,_47d){
},loadFile:function(_47e,url,data,_47f){
if(jxn.isFunction(data)){
_47f=data;
data=_471;
}
var _480=function(_481){
jxn.html(_47e,_481||"");
_47f&&_47f.call(_47e,_481);
};
jxn.get(url,data,_480);
},serialize:function(_482){
if(!jxn.isDomNode(_482)){
jxn.error("serialize should be called by form element");
return "";
}
var _483=_482.tagName.toLowerCase();
if(_483!="form"){
jxn.error("serialize should be called by form tag, not "+_483);
return "";
}
return dom.wrap(_482).toQueryString();
},serializeArray:function(_484){
}};
function _485(_486,_487){
if(_486.attachEvent){
_486.attachEvent("onload",function(){
_487.call(this,_486);
});
}else{
setTimeout(function(){
var _488=arguments.callee;
if(_487.isCalled){
return;
}
var _489=false;
if(ua.ua.webkit){
if(_486["sheet"]){
_489=true;
}
}else{
if(_486["sheet"]){
try{
if(_486["sheet"].cssRules){
_489=true;
}
}
catch(e){
if(e.code===1000||e.code==18){
_489=true;
}
}
}
}
if(_489){
setTimeout(function(){
_487.call(_486,_486);
},1);
}else{
setTimeout(_488,1);
}
},0);
}
};
function _48a(url,_48b){
var _48c,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
var _48c=document.createElement("link");
_48c.rel="stylesheet";
_48c.type="text/css";
_48c.href=url;
head.appendChild(_48c);
if(!_48b){
return _48c;
}
_485(_48c,_48b);
return _48c;
};
function _48d(url,_48e){
var _48f,head=document.head||document.getElementsByTagName("head")[0]||document.documentElement;
_48f=document.createElement("script");
_48f.async="async";
_48f.src=url;
_48f.onload=_48f.onreadystatechange=function(){
if(!_48f.readyState||/loaded|complete/.test(_48f.readyState)){
_48f.onload=_48f.onreadystatechange=null;
if(head&&_48f.parentNode){
jxn.empty(_48f);
head.removeChild(_48f);
}
_48f=_471;
_48e&&_48e.call(this);
}
};
head.insertBefore(_48f,head.firstChild);
};
var _490={xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript"};
jxn.extend(jxn,{ajax:function(url,_491){
if(jxn.isObject(url)){
_491=url;
url=_491.url;
}
var _492=_491.dataType;
_491=_491||{};
if(_492=="script"){
_48d(url,_491.success||_491.onsuccess||_491.onSuccess);
return;
}
var _493={};
if(_491.ifModified){
_493["If-Modified-Since"]=parseInt(_491.ifModified);
}
if(_491.ContentType){
_493["Content-Type"]=_491.ContentType;
}
if(_491.cache){
_493["Cache-Control"]=_491.cache||"no-cache";
}
if(_492){
if(_490[_492]){
_493["Accept"]=_490[_492]+", */*;q=0.01";
}else{
if(_492=="*"){
_493["Accept"]="*/*";
}
}
}
var data=jxn.isString(_491.data)?_491.data:_3b1.toQueryString(_491.data);
var _494=_491.method||_491.type||"get";
var _495=new net.Request({url:url||_491.url,data:_494=="post"?"":data,dataType:_491.dataType,method:_494,timeout:_491.timeout,headers:_493,onsuccess:_491.success||_491.onsuccess||_491.onSuccess,onerror:_491.error||_491.onerror||_491.onError,oncomplete:_491.complete||_491.oncomplete||_491.onComplete});
_495.send(_494=="post"?data:"");
return _495;
},ajaxSetup:function(){
},get:function(url,data,_496,type){
if(jxn.isFunction(data)){
type=type||_496;
_496=data;
data=_471;
}
var _497=_496;
if(type=="json"){
_496=function(e){
_497&&_497.call(this,JSON.parse(e.responseText||""));
};
}else{
_496=function(e){
_497&&_497.call(this,e&&e.responseText);
};
}
return jxn.ajax({method:"get",url:url,data:data,success:_496,dataType:type});
},getJSON:function(url,data,_498){
return jxn.get(url,data,_498,"json");
},getScript:function(urls,_499){
if(jxn.isString(urls)){
return jxn.get(urls,_471,_499,"script");
}
if(!jxn.isArray(urls)){
return;
}
var len=urls.length,_49a=0,_49b=function(){
_49a++;
if(_49a==len){
_499&&_499.call(this);
}
};
jxn.forEach(urls,function(url){
jxn.getScript(url,_49b);
});
},getCSS:function(urls,_49c){
if(jxn.isString(urls)){
return _48a(urls,_49c);
}
if(!jxn.isArray(urls)){
return;
}
var len=urls.length,_49d=0,_49e=[],_49f=function(){
_49d++;
if(_49d==len){
_49c&&_49c.call(this,_49e);
}
};
jxn.forEach(urls,function(url){
_49e.push(jxn.getCSS(url,_49f));
});
},post:function(url,data,_4a0,type){
if(jxn.isFunction(data)){
type=type||_4a0;
_4a0=data;
data=_471;
}
return jxn.ajax({method:"post",url:url,data:data,success:_4a0,dataType:type});
},param:function(){
}});
jxn.registerPlugin("Ajax",Ajax,["loadFile"]);
})(jxn);
(function(jxn,_4a1){
var _4a2={linear:function(t,b,c,d){
return c*t/d+b;
},easeIn:function(t,b,c,d){
return c*(t/=d)*t+b;
},easeOut:function(t,b,c,d){
return -c*(t/=d)*(t-2)+b;
},easeBoth:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t+b;
}
return -c/2*((--t)*(t-2)-1)+b;
},backIn:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*(t/=d)*t*((s+1)*t-s)+b;
},backOut:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},backBoth:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
if((t/=d/2)<1){
return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
}
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
},bounceIn:function(t,b,c,d){
return c-_4a2["bounceOut"](d-t,0,c,d)+b;
},bounceOut:function(t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else{
if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;
}else{
if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;
}
}
}
return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;
},bounceBoth:function(t,b,c,d){
if(t<d/2){
return _4a2["bounceIn"](t*2,0,c,d)*0.5+b;
}
return _4a2["bounceOut"](t*2-d,0,c,d)*0.5+c*0.5+b;
}};
var _4a3=function(){
if(this.onTweening){
this.onTweening.apply(this);
}
if(this.current>=this.frames){
this.stop();
if(this.onComplete){
this.onComplete.apply(this);
}
this.tweening=false;
return;
}
this.current++;
};
var _4a4=function(_4a5,_4a6){
this.tween=_4a5||"linear";
this.duration=jxn.isNumber(_4a6)?_4a6:(_4a7[_4a6]||1000);
this.reset(_4a5,this.duration);
this.tweening=false;
};
_4a4.prototype={equation:function(from,to){
return this.tweenMethod((this.current/this.frames)*this.duration,from,to-from,this.duration);
},reset:function(_4a8,_4a9){
if(this.tweening){
this.stop();
}
this.duration=_4a9||400;
this.tween=_4a8||"linear";
this.fps=this.fps||35;
this.frames=Math.ceil((this.duration/1000)*this.fps);
if(this.frames<1){
this.frames=1;
}
this.tweenMethod=("function"==typeof this.tween)?this.tween:_4a2[this.tween]||_4a2["linear"];
this.current=1;
},start:function(){
this.tweening=true;
var _4aa=this,d=this.duration/this.frames;
this.timer=setInterval(function(){
_4a3.call(_4aa);
},d);
},stop:function(){
if(this.timer){
clearInterval(this.timer);
this.timer=null;
}
this.tweening=false;
},hold:function(){
this.stop();
},goon:function(){
this.start();
}};
var _4ab=/[a-zA-Z]+/,_4ac=/^(?:([+\-])=)([\d\.]+)/;
function _4ad(_4ae,_4af){
var _4b0=_4ab.exec(_4ae);
if(_4b0){
return _4b0[0];
}
_4b0=_4ab.exec(_4af);
if(_4b0){
return _4b0[0];
}
return "px";
};
function _4b1(_4b2){
return jxn.getNumber(_4b2);
};
function _4b3(_4b4,_4b5){
if(jxn.isNumber(_4b4)){
return _4b4;
}
if(_4ac.test(jxn.trim(_4b4))){
if(RegExp.$1=="+"){
return _4b5+_4b1(RegExp.$2);
}else{
return _4b5-_4b1(RegExp.$2);
}
}
return _4b1(_4b4);
};
var _4a7={"slow":600,"fast":200};
function _4b6(_4b7,_4b8,_4b9,_4ba,_4bb){
var _4bc=[],_4bd={},_4be={},_4bf={},_4c0,_4c1,step;
if(jxn.isFunction(_4b8)){
_4b8=_4b8.call(_4b7);
if(!_4b8||!jxn.isObject(_4b8)){
jxn.error("function as first param, should return an object");
_4b8={};
}
}
if(jxn.isFunction(_4b9)){
_4bb=_4b9;
_4b9=_4b8.duration;
}
if(jxn.isFunction(_4ba)){
_4bb=_4ba;
_4ba="linear";
}
if(jxn.isObject(_4b9)){
var _4c2=_4b9;
_4b9=_4c2.duration;
_4ba=_4c2.easing;
_4bb=_4c2.complete;
step=_4c2.step;
}
_4b9=jxn.isNumber(_4b9)?_4b9:(_4a7[_4b9]||1000);
_4c1=_4b7.__jxnMotion;
var _4c3=_4c1.isNew;
_4c1.isNew=false;
jxn.forEach(_4b8,function(name,_4c4){
name=_3b1.camelCase(name);
_4bc.push(name);
_4c0=_4b1(jxn.css(_4b7,name)||"0");
if(isNaN(_4c0)){
_4c0=0;
}
_4bd[name]=_4c0;
_4be[name]=_4b3(_4c4,_4c0);
_4bf[name]=_4ad(_4c0,_4c4);
});
var _4c5=_4bc.length;
if(_4c5==0){
}
_4c1.onTweening=function(){
for(var i=0,prop,_4c6;i<_4c5;i++){
prop=_4bc[i];
_4c6=this.equation(_4bd[prop],_4be[prop]);
if(_4bf[prop]){
_4c6=_4c6+_4bf[prop];
}
jxn.css(_4b7,prop,_4c6);
}
jxn.isFunction(step)&&step.call(_4b7,this.equation(0,this.frames),this.frames,_4c1);
};
_4c1.onComplete=function(){
for(var i=0,prop,_4c7;i<_4c5;i++){
prop=_4bc[i];
_4c7=_4be[prop];
if(_4bf[prop]){
_4c7=_4c7+_4bf[prop];
}
if(jxn.css(_4b7,prop)!=_4c7){
jxn.css(_4b7,prop,_4c7);
}
}
jxn.isFunction(_4bb)&&_4bb.call(_4b7,this.frames,_4c1);
this.tweening=false;
if(_4b7.__motionQueue&&_4b7.__motionQueue.length!=0){
var args=_4b7.__motionQueue.shift();
_4b6.apply(_4b7,args);
}
};
if(!_4c3){
_4c1.reset(_4ba,_4b9);
}
_4c1.start();
_4b7.__motion=_4c1;
};
var _4c8={animate:function(_4c9,_4ca,_4cb,_4cc,_4cd){
if(!_4ca){
jxn.error("need params for animate");
return;
}
var _4ce,_4cf=_4cc,_4d0=_4cb;
if(jxn.isFunction(_4cf)){
_4cf="linear";
}
if(!_4c9.__jxnMotion){
if(jxn.isObject(_4cb)){
_4cf=_4cb.easing;
_4d0=_4cb.duration;
}
_4c9.__jxnMotion=new _4a4(_4cf,_4d0);
_4c9.__jxnMotion.isNew=true;
}
_4ce=_4c9.__jxnMotion;
if(_4ce.tweening){
_4c9.__motionQueue=_4c9.__motionQueue||[];
_4c9.__motionQueue.push(jxn.slice.call(arguments));
return;
}
_4b6.apply(_4c9,arguments);
},clearQueue:function(_4d1){
var _4d2=_4d1.__motionQueue;
if(!_4d2){
return;
}
for(var i=0,l=_4d2.length;i<l;i++){
_4d2[i]=null;
}
_4d1.__motionQueue=null;
},delay:function(_4d3,time,_4d4){
jxn.animate(_4d3,{},time,"linear",_4d4);
},dequeue:function(){
},fadeOut:function(_4d5,_4d6,_4d7){
jxn.animate(_4d5,{"opacity":"0"},_4d6,"easeIn",function(){
jxn.css(_4d5,"opacity","0");
jxn.data(_4d5,"display-bak",jxn.css(_4d5,"display"));
jxn.css(_4d5,"display","none");
_4d7&&_4d7.apply(_4d5,arguments);
});
},fadeIn:function(_4d8,_4d9,_4da){
var _4db=function(){
jxn.css(_4d8,"display",jxn.data(_4d8,"display-bak")||"");
jxn.css(_4d8,"opacity","0");
return {"opacity":"1"};
};
jxn.animate(_4d8,_4db,_4d9,"easeOut",function(){
jxn.css(_4d8,"opacity","1");
jxn.removeData(_4d8,"display-bak");
_4da&&_4da.apply(_4d8,arguments);
});
},fadeTo:function(_4dc,_4dd,_4de,_4df){
var _4e0=function(){
if(_4de!=0){
jxn.css(_4dc,"display",jxn.data(_4dc,"display-bak")||"");
jxn.removeData(_4dc,"display-bak");
}
return {"opacity":_4de};
};
jxn.animate(_4dc,_4e0,_4dd,"linear",function(){
jxn.css(_4dc,"opacity",_4de);
_4df&&_4df.apply(_4dc,arguments);
});
},fadeToggle:function(){
},fx:{interval:function(){
},off:function(){
}},queue:function(){
},slideDown:function(_4e1,_4e2,_4e3){
var _4e4=function(){
var _4e5,_4e6,_4e7,node;
if(jxn.data(this,"animate-height-bak")){
_4e5=jxn.data(this,"animate-height-bak");
_4e6=jxn.data(this,"animate-display-bak");
_4e7=jxn.data(this,"animate-opacity-bak");
}else{
node=jxn("<"+this.tagName+">").appendTo("body");
_4e5=node.css("height");
_4e6=node.css("display");
_4e7=node.css("opacity");
node.remove();
}
jxn.css(this,"display",_4e6);
jxn.css(this,"height","0px");
return {"height":_4e5,"opacity":_4e7};
};
jxn.animate(_4e1,_4e4,_4e2,"easeIn",_4e3);
},slideToggle:function(){
},slideUp:function(_4e8,_4e9,_4ea){
var _4eb=function(){
jxn.data(this,"animate-height-bak",jxn.css(this,"height"));
jxn.data(this,"animate-opacity-bak",jxn.css(this,"opacity"));
jxn.data(this,"animate-display-bak",jxn.css(this,"display"));
return {"height":"0px","opacity":0};
};
jxn.animate(_4e8,_4eb,_4e9,"easeIn",function(){
jxn.css(_4e8,"opacity","0");
jxn.css(_4e8,"display","none");
_4ea&&_4ea.call(_4e8,arguments);
});
},start:function(_4ec){
_4ec.__jxnMotion&&_4ec.__jxnMotion.start();
},stop:function(_4ed,_4ee,_4ef){
var _4f0=_4ed.__jxnMotion;
if(!_4f0){
return;
}
if(_4ee){
jxn.clearQueue(_4ed);
}
_4f0.stop();
if(_4ef){
_4f0.onComplete();
}
},hold:function(_4f1){
_4f1.__jxnMotion&&_4f1.__jxnMotion.hold();
},goon:function(_4f2){
_4f2.__jxnMotion&&_4f2.__jxnMotion.goon();
}};
jxn.registerPlugin("Effect",_4c8,["animate","clearQueue"]);
})(jxn);
(function(jxn,_4f3){
var _4f4=/^(?:body|html)$/i;
var _4f5={position:function(_4f6){
if(!_4f6){
return null;
}
var ele=jxn(_4f6),_4f7=ele.offsetParent(),_4f8=ele.offset(),_4f9=_4f4.test(_4f7[0].nodeName)?{top:0,left:0}:_4f7.offset();
_4f8.top-=parseFloat(jxn.css(_4f6,"marginTop"))||0;
_4f8.left-=parseFloat(jxn.css(_4f6,"marginLeft"))||0;
_4f9.top+=parseFloat(jxn.css(_4f7[0],"borderTopWidth"))||0;
_4f9.left+=parseFloat(jxn.css(_4f7[0],"borderLeftWidth"))||0;
return {top:_4f8.top-_4f9.top,left:_4f8.left-_4f9.left};
},scrollTop:function(_4fa,_4fb){
if(_4fb!==_4f3){
var win=jxn.getWindow(_4fa);
if(win){
win.scrollTo(jxn(win).scrollLeft(),_4fb);
}else{
_4fa.scrollTop=_4fb;
}
return;
}
var win=jxn.getWindow(_4fa);
if(win){
if("pageYOffset" in win){
return win.pageYOffset;
}
var body=win.document.body;
var _4fc=win.document.documentElement;
_4fc=(_4fc.clientWidth)?_4fc:body;
return _4fc.scrollTop;
}else{
return _4fa.scrollTop;
}
},scrollLeft:function(_4fd,_4fe){
if(_4fe!==_4f3){
var win=jxn.getWindow(_4fd);
if(win){
win.scrollTo(_4fe,jxn.scrollTop(win));
}else{
_4fd.scrollLeft=_4fe;
}
return;
}
var win=jxn.getWindow(_4fd);
if(win){
if("pageXOffset" in win){
return win.pageXOffset;
}
var body=win.document.body;
var _4ff=win.document.documentElement;
_4ff=(_4ff.clientWidth)?_4ff:body;
return _4ff.scrollLeft;
}else{
return _4fd.scrollLeft;
}
}};
jxn.registerPlugin("Position",_4f5,["position","scrollLeft","scrollTop"]);
})(jxn);
(function(jxn,_500){
var _501=/^(?:body|html)$/i;
function _502(ele){
if(ele.getBoundingClientRect){
var _503=ele.getBoundingClientRect(),html=ele.ownerDocument.documentElement,_504={x:_505(ele),y:_506(ele)},_507=(ele.style.position=="fixed");
return {left:parseInt(_503.left,10)+((_507)?0:_504.x)-html.clientLeft,top:parseInt(_503.top,10)+((_507)?0:_504.y)-html.clientTop};
}
var _508=ele,_509={left:0,top:0};
if(ele.tagName=="BODY"){
return _509;
}
while(_508&&_508.tagName!="BODY"){
_509.left+=_508.offsetLeft;
_509.top+=_508.offsetTop;
if(ua.ua.gecko){
if(!borderBox(_508)){
_509.left+=parseFloat(_508.style.borderLeftWidth);
_509.top+=parseFloat(_508.style.borderTopWidth);
}
var _50a=_508.parentNode;
if(_50a&&_50a.style.overflow!="visible"){
_509.left+=parseFloat(_50a.style.borderLeftWidth);
_509.top+=parseFloat(_50a.style.borderTopWidth);
}
}else{
if(_508!=ele&&ua.ua.webket){
_509.left+=parseFloat(_508.style.borderLeftWidth);
_509.top+=parseFloat(_508.style.borderTopWidth);
}
}
_508=_508.offsetParent;
}
if(ua.ua.gecko&&ele.style.MozBoxSizing!="border-box"){
_509.left-=parseFloat(ele.style.borderLeftWidth);
_509.top-=parseFloat(ele.style.borderTopWidth);
}
return _509;
};
function _506(ele){
if(document.documentElement&&document.documentElement.scrollTop){
return document.documentElement.scrollTop;
}else{
return document.body.scrollTop;
}
};
function _505(ele){
if(document.documentElement&&document.documentElement.scrollLeft){
return document.documentElement.scrollLeft;
}else{
return document.body.scrollLeft;
}
};
function _50b(_50c,name,_50d){
var prop=name.toLowerCase();
if(jxn.isWindow(_50c)){
var _50e=_50c.document.documentElement["client"+name],body=_50c.document.body;
return _50c.document.compatMode==="CSS1Compat"&&_50e||body&&body["client"+name]||_50e;
}else{
if(jxn.isDocument(_50c)){
return Math.max(_50c.documentElement["client"+name],_50c.body["client"+name],_50c.documentElement["client"+name],_50c.body["client"+name],_50c.documentElement["client"+name]);
}
}
if(_50d!==_500){
if(jxn.isNumber(_50d)){
_50d=_50d+"px";
}
jxn.css(_50c,prop,_50d);
return;
}
return parseInt(jxn.css(_50c,prop));
};
var _50f={offsetParent:function(_510){
var _511=_510.offsetParent||document.body;
while(_511&&(!_501.test(_511.nodeName)&&jxn.css(_511,"position")==="static")){
_511=_511.offsetParent;
}
return jxn(_511);
},offset:function(_512){
return _502(_512);
},width:function(_513,_514){
return _50b(_513,"Width",_514);
},height:function(_515,_516){
return _50b(_515,"Height",_516);
},innerWidth:function(_517){
return parseFloat(jxn.css(_517,"width"))+parseFloat(jxn.css(_517,"paddingLeft"))+parseFloat(jxn.css(_517,"paddingRight"));
},innerHeight:function(_518){
return parseFloat(jxn.css(_518,"height"))+parseFloat(jxn.css(_518,"paddingTop"))+parseFloat(jxn.css(_518,"paddingBottom"));
},outerWidth:function(_519,_51a){
return jxn.innerWidth(_519)+(parseFloat(jxn.css(_519,"borderLeftWidth"))||0)+(parseFloat(jxn.css(_519,"borderRightWidth"))||0)+(_51a?(parseFloat(jxn.css(_519,"marginLeft"))+parseFloat(jxn.css(_519,"marginRight"))):0);
},outerHeight:function(_51b,_51c){
return jxn.innerHeight(_51b)+(parseFloat(jxn.css(_51b,"borderTopWidth"))||0)+(parseFloat(jxn.css(_51b,"borderBottomWidth"))||0)+(_51c?(parseFloat(jxn.css(_51b,"marginTop"))+parseFloat(jxn.css(_51b,"marginBottom"))):0);
}};
jxn.registerPlugin("Offset",_50f,["innerWidth","innerHeight"]);
})(jxn);
(function(jxn,_51d){
var _51e={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},_51f=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
function _520(_521,attr){
return _51f.test(attr)&&attr in _521;
};
function _522(_523,name,_524,_525){
_525=_525||"";
if(jxn.isObject(name)){
for(var prop in name){
if(!name.hasOwnProperty(prop)){
continue;
}
_522(_523,prop,name[prop],_525);
}
return;
}
if(_524===_51d){
var attr=_525+name,_526=null,tmp,_524;
if(_520(_523,attr)){
_524=_523[attr];
_524=!!_524&&_524!="false";
return _524;
}else{
_526=_523.getAttribute(attr);
if(jxn.isString(_526)&&jxn.trim(_526).indexOf("{")==0){
try{
tmp=JSON.parse(_526);
}
catch(e){
}
}
_524=tmp||_526;
}
return _524;
}else{
if(jxn.isObject(_524)){
_523.setAttribute(_525+name,JSON.stringify(_524));
}else{
_523.setAttribute(_525+name,_524);
}
var attr=_525+name;
if(_520(_523,attr)){
_523[attr]=_524;
}
}
};
var Data={attr:function(_527,name,_528){
return _522(_527,name,_528);
},data:function(_529,name,_52a){
return _522(_529,name,_52a,"data-");
},removeAttr:function(_52b,_52c){
if(_52b.nodeType!=1){
return;
}
_52c=_51e[_52c]||_52c;
if(_52b.removeAttribute){
_52b.setAttribute(_52c,"");
_52b.removeAttribute(_52c);
if(_51f.test(_52c)&&_52c in _52b){
_52b[_52c]=false;
}
}
},removeData:function(_52d,name){
name="data-"+name;
if(_52d.removeAttribute){
_52d.removeAttribute(name);
}else{
_52d[name]=null;
try{
delete _52d[name];
}
catch(e){
}
}
}};
jxn.registerPlugin("Data",Data,["attr","data","removeData"]);
})(jxn);
(function(jxn,_52e){
var _52f={};
for(var prop in ua.ua){
_52f[prop]=ua.ua[prop];
}
_52f.version=ua.ua[ua.ua.shell];
_52f[ua.ua.shell]=true;
jxn.browser={};
jxn.extend(jxn.browser,_52f);
})(jxn);
(function(jxn,_530){
var _531=24*60*60*1000,_532={get:function(name){
var _533=document.cookie,_534;
if(!_533||_533==""){
return null;
}
if(!name){
return _533;
}
name=jxn.trim(name);
_534=_533.split(";");
for(var i=0,_535,_536,l=_534.length;i<l;i++){
_536=jxn.trim(_534[i]);
_535=_536.split("=");
if(jxn.trim(_535[0])==name){
return decodeURIComponent(jxn.trim(_535[1]));
}
}
return null;
},set:function(name,_537,_538){
var _539="",date,path,_53a,_53b;
_538=_538||{};
if(_537===null){
_537="";
_538.expires=-1;
}
if(_538.expires){
if(jxn.isNumber(_538.expires)){
date=new Date();
date.setTime(date.getTime()+_538.expires*_531);
}else{
if(_538.expires.toUTCString){
date=_538.expires;
}
}
_539="; expires="+date.toUTCString();
}
path=_538.path?"; path="+_538.path:"";
_53a=_538.domain?"; domain="+_538.domain:"";
_53b=_538.secure?"; secure":"";
document.cookie=[name,"=",encodeURIComponent(_537),_539,path,_53a,_53b].join("");
},remove:function(name){
jxn.cookie.set(name,null);
}};
jxn.cookie=function(name,_53c,_53d){
if(typeof _53c!="undefined"){
jxn.cookie.set(name,_53c,_53d);
}else{
return jxn.cookie.get(name);
}
};
jxn.extend(jxn.cookie,_532);
})(jxn);
(function(jxn,_53e){
function _53f(_540,_541){
var _542=document.createElement("div");
_542.style.display="none";
_542.style.behavior="url(#default#userData)";
var _543=new Date();
_543.setDate(_543.getDate()+_541);
_542.expires=_543.toUTCString();
(document.body||document.getElementsByTagName("body")[0]).appendChild(_542);
return _542;
};
var _544=new Class(function(){
this.initialize=function(self,_545,_546){
self.__storageName=_545||"ObjectJSLocalStorage";
self.__expires=_546||365*100;
self.__storageHolder=_53f(self.__storageName,self.__expires);
};
this.setItem=function(self,key,_547){
var _548=self.__storageHolder,_549=self.__storageName;
var _54a=self.getItem(key);
_548.load(_549);
_548.setAttribute(key,_547);
_548.save(_549);
};
this.getItem=function(self,key){
var _54b=self.__storageHolder,_54c=self.__storageName;
_54b.load(_54c);
return _54b.getAttribute(key);
};
this.removeItem=function(self,key){
var _54d=self.__storageHolder,_54e=self.__storageName;
var _54f=self.getItem(key);
_54d.load(_54e);
_54d.removeAttribute(key);
_54d.save(_54e);
};
this.clear=function(self){
var _550=self.__storageHolder,_551=self.__storageName;
_550.load(_551);
var _552=new Date();
_552.setDate(_552.getDate()-1);
_550.expires=_552.toUTCString();
_550.save(_551);
document.body.removeChild(self.__storageHolder);
self.__storageHolder=_53f(self.__storageName,self.__expires);
};
});
var _553=("localStorage" in window),_554,_555={},_556=false;
if(_553){
try{
window["localStorage"]!=null;
_553=true;
}
catch(e){
_553=false;
}
}
function _557(){
if(_556){
return;
}
_556=true;
jxn(function(){
_554=new _544();
jxn.forEach(_555,function(name,_558){
_554.setItem(name,_558);
delete _555[name];
});
_555=null;
});
};
if(_553){
_554=window.localStorage;
}
jxn.storage=function(name,_559){
if(_559===_53e){
return jxn.storage.get(name);
}else{
jxn.storage.set(name,_559);
}
};
jxn.storage.set=function(name,_55a){
if(jxn.isObject(_55a)){
_55a=JSON.stringify(_55a);
}
if(!_554){
_555[name]=_55a;
_557();
return;
}
_554.setItem(name,_55a);
};
jxn.storage.get=function(name){
if(!_554){
return _555[name];
}
var _55b=_554.getItem(name),tmp;
if(jxn.isString(_55b)&&jxn.trim(_55b).indexOf("{")==0){
try{
tmp=JSON.parse(_55b);
}
catch(e){
}
}
return tmp||_55b;
};
jxn.storage.remove=function(name){
if(!_554){
delete _555[name];
_557();
return;
}
_554.removeItem(name);
};
jxn.storage.clear=function(){
if(!_554){
_555={};
return;
}
_554.clear();
};
})(jxn);
(function(jxn,_55c){
var _55d=2;
DELAY_FACTOR={ieshell:{"6":3,"7":2.5,"8":2,"9":1.5,"10":1.3,"other":1.2},firefox:1.2,chrome:1,other:1},cache={},DELAY_GID=0;
function _55e(_55f,_560){
if(!(_55f in DELAY_FACTOR)){
return DELAY_FACTOR["other"];
}
var _561=DELAY_FACTOR[_55f];
if(!jxn.isObject(_561)){
return _561;
}
return _561[_560]||_561["other"];
};
jxn.delayDo=function(fn,_562){
fn._gid=fn._gid||DELAY_GID++;
var _563,_564;
if(!fn||!jxn.isFunction(fn)){
console.error("please use delayDo like \"delayDo(function, priority)\"");
return;
}
if(fn._gid in cache){
jxn.clearDelayDo(fn._gid);
}
_562=_562||_55d;
_563=_55e(jxn.browser.shell,jxn.browser.version);
_564=setTimeout(function(){
fn();
jxn.clearDelayDo(fn);
},_562*_563*1000);
cache[fn._gid]=_564;
};
jxn._getDelayDos=function(){
return cache;
};
jxn.delayDoOrEvent=function(fn,_565,obj,_566){
if(!jxn.isNumber(_565)){
_566=obj;
obj=_565;
_565=_55d;
}
if(!obj){
jxn.delayDo(fn,_565);
return;
}
var _567=function(){
_568&&obj.off(_566,_567);
jxn.clearDelayDo(_567);
fn();
},_568;
jxn.delayDo(_567,_565);
if(obj=="domready"){
jxn(_567);
}else{
obj=jxn(obj);
_568=true;
obj.on(_566,_567);
}
};
jxn.clearDelayDo=function(gid){
if(jxn.isFunction(gid)){
gid=gid._gid;
}
if(gid in cache){
clearTimeout(cache[gid]);
cache[gid]=null;
delete cache[gid];
}
};
})(jxn);
(function(jxn,_569){
var _56a=jxn(document);
jxn.scrollViewportTo=function(_56b,_56c){
if(!_56b&&_56b!==0){
return;
}
_56c=_56c||{};
var _56d=_56c.delta||0,_56e=_56a.scrollTop(),_56f=(_56b===0?0:(jxn(_56b).position().top))+_56d,_570=_56f-_56e,_571=_56c.noEffect||false,_572=_56c.easing||"easeOut";
if(_571){
_56a.stop().clearQueue().scrollTop(_56f);
return;
}
_56a.stop().clearQueue().animate({},{step:function(_573,_574){
_56a.scrollTop(_56e+Math.floor(_570*_573/_574));
},duration:500,easing:_572});
};
})(jxn);
(function(jxn,_575){
var _576,_577=false,_578={},_579=3;
function _57a(node,_57b){
var min=jxn(document).scrollTop()-_57b,max=min+_576+_57b*2,top=node.position().top,_57c=top+node.innerHeight();
return min<top&&top<max||min<_57c&&_57c<max;
};
function _57d(){
var _57e,_57f=document.documentElement;
if(typeof window.innerHeight!="undefined"){
_57e=window.innerHeight;
}else{
if(typeof _57f!=="undefined"&&typeof _57f.clientHeight!=="undefined"&&_57f.clientHeight!=0){
_57e=_57f.clientHeight;
}else{
_57e=document.getElementsByTagName("body")[0].clientHeight;
}
}
return _57e;
};
function _580(prop,_581){
var len=_581.length,_582=_581.delta;
if(len==0){
return;
}
for(var i=0,_583;i<len;i++){
_583=jxn(_581[i]);
if(!_57a(_583,_582)){
continue;
}
if(prop=="value"){
_583.val(_583.data(prop)).removeData(prop);
}else{
_583.attr(prop,_583.data(prop)).removeData(prop);
}
_581.splice(i,1);
i--;
len--;
}
};
function _584(){
jxn.forEach(_578,function(prop,_585){
_580(prop,_585);
});
};
jxn._lazyLoadNodes=function(){
return _578;
};
jxn.lazyLoad=function(_586,_587){
_587=_587||{};
var prop=_587.prop||"src",fast=!!_587.fast,_588=jxn.isNumber(_587.frequency)?_587.frequency:_579,_589=_587.delta||0,_58a=jxn(_587.parent||document.body),_58b;
_578[prop]=jxn(_586,_58a);
_578[prop].delta=_589;
if(_577){
return;
}
_577=true;
_58b=(fast===true)?"scroll":("scroll/"+_588);
jxn(window).on("resize",function(){
_576=_57d();
_584();
}).on(_58b,function(){
_584();
});
_576=_57d();
_584();
};
jxn.addLazyLoadNodes=function(_58c,_58d){
_58d=_58d||{};
var prop=_58d.prop||"src",_58e=_578[prop]=_578[prop]||[],_58f=_58d.selector||"[data-"+prop+"]";
for(var i=0,_590,l=_58c.length;i<l;i++){
_590=jxn(_58c[i]);
if(!_590.data(prop)){
_590=jxn(_58f,_590);
}
if(_590.length!=0){
_58e.push(_590);
}
}
_580(prop,_58e);
};
})(jxn);
(function(jxn,_591){
jxn._specialEvents=jxn._specialEvents||[];
var reg=/^scroll\/\d+$/,_592={},GID=0,_593={ieshell:{6:20,7:20,8:20,9:1,10:1},firefox:10,opera:15,safari:1,chrome:1,other:1},_594={};
function _595(){
var _596=_593[jxn.browser.shell];
if(!_596){
return _593["other"];
}
if(jxn.isNumber(_596)){
return _596;
}
return _596[jxn.browser.version]||1;
};
function _597(_598,_599,_59a,gid,_59b){
return function(){
var _59c=this,_59d=arguments,_59e=_59a*100;
if(_59e>2000){
_59e=2000;
}
if(_598==0){
_599&&clearTimeout(_599);
_599=setTimeout(function(){
_59b.apply(_59c,_59d);
_598=0;
_599=null;
delete _594[gid];
},_59e);
_594[gid]=_599;
}
_598++;
if(_598>=_59a-1){
_59b.apply(_59c,_59d);
_598=0;
if(_599){
clearTimeout(_599);
_599=null;
delete _594[gid];
}
}
};
};
function _59f(_5a0,_5a1,_5a2,_5a3){
var gid=_5a2._scroll_gid=GID++,_5a4;
_5a4=parseInt(_5a1.split("/")[1]);
if(isNaN(_5a4)){
jxn.error("scroll/N, N should be a number");
return;
}
times=_5a4*_595();
var _5a5=0,_5a6=null,_5a7=_597(_5a5,_5a6,times,gid,_5a2);
_592[_5a2._scroll_gid]=_5a7;
dom.wrap(_5a0).addEvent("scroll",_5a7,_5a3);
};
function _5a8(_5a9,_5aa,_5ab,_5ac){
var gid=_5ab._scroll_gid,_5ad=_594[gid];
dom.wrap(_5a9).removeEvent("scroll",_592[_5ab._scroll_gid],_5ac);
if(_5ad){
clearTimeout(_5ad);
_5ad=null;
delete _594[gid];
}
};
jxn._specialEvents.push({likes:function(_5ae){
return reg.test(_5ae);
},on:_59f,off:_5a8});
})(jxn);
return jxn;
});
if(!window.jxn){
object.use("jxn",function(jxn){
window.jxn=jxn;
});
}
object.add("XN","dom, ua",function(_5af,dom,ua){
this.DEBUG_MODE=false;
var _5b0="http://s.xnimg.cn/";
this.debug={log:function(){
},on:function(){
_5af.DEBUG_MODE=true;
if(window.console&&console.log){
_5af.debug.log=function(s){
console.log(s);
};
}
},off:function(){
_5af.debug.log=function(){
};
}};
this.namespace=function(){
var a=arguments,o=null,i,j,d;
for(i=0;i<a.length;i++){
d=a[i].split(".");
o=_5af;
for(j=(d[0]=="XN")?1:0;j<d.length;j++){
o[d[j]]=o[d[j]]||{};
o=o[d[j]];
}
}
return o;
};
this.log=function(s){
_5af.debug.log(s);
};
this.isUndefined=function(_5b1){
return typeof _5b1=="undefined";
};
this.isString=function(_5b2){
return typeof _5b2=="string";
};
this.isElement=function(_5b3){
return _5b3&&_5b3.nodeType==1;
};
this.isFunction=function(_5b4){
return typeof _5b4=="function";
};
this.isObject=function(_5b5){
return typeof _5b5=="object";
};
this.isArray=function(_5b6){
return Object.prototype.toString.call(_5b6)==="[object Array]";
};
this.isNumber=function(_5b7){
return typeof _5b7=="number";
};
this.$extend=function(){
var _5b8=arguments[0];
for(var i=1;i<arguments.length;i++){
if(typeof arguments[i]=="object"){
for(var key in arguments[i]){
_5b8[key]=arguments[i][key];
}
}
}
return _5b8;
};
this.namespace("config");
this.config.jumpOut=true;
(function(){
var _5b9={};
var _5ba={};
_5af.getFileVersionNum=function(file){
return _5ba[file];
};
function _5bb(file){
return !!_5bc(file);
};
function _5bc(file){
return _5b9[encodeURIComponent(file)];
};
function mark(file){
var obj={};
obj.file=file;
obj.isLoad=true;
obj.isLoaded=true;
_5b9[encodeURIComponent(file)]=obj;
};
function _5bd(_5be){
_5be.addEvent=function(type,func){
if(!this._customEventListeners){
this._customEventListeners={};
}
var _5bf=this._customEventListeners;
if(_5af.isUndefined(_5bf[type])){
_5bf[type]=[];
}
_5bf[type].push(func);
return this;
},_5be.delEvent=function(type,func){
var _5c0=this._customEventListeners[type];
if(_5c0){
for(var i=_5c0.length-1;i>=0;i--){
if(_5c0[i]==func){
_5c0[i]=null;
break;
}
}
}
return this;
},_5be.fireEvent=function(type){
if(!this._customEventListeners||!this._customEventListeners[type]){
return;
}
var _5c1=this._customEventListeners[type],ars=_5c2(arguments);
ars.shift();
for(var i=0,j=_5c1.length;i<j;i++){
if(_5c1[i]){
try{
_5c1[i].apply(this,ars);
}
catch(ox){
if(_5af.DEBUG_MODE){
throw ox;
}
}
}
}
};
};
function _5c2(o){
var rt=[];
for(var i=0,j=o.length;i<j;i++){
rt.push(o[i]);
}
return rt;
};
function _5c3(file,_5c4){
var obj={};
obj.file=file;
obj.isLoaded=false;
_5bd(obj);
obj.addEvent("load",function(){
this.isLoaded=true;
});
if(!_5c4){
_5b9[encodeURIComponent(file)]=obj;
}
var el=document.createElement("script");
el.type="text/javascript";
el.src=file;
el.async=true;
obj.element=el;
if(ua.ua.shell=="ieshell"){
el.onreadystatechange=function(){
if((this.readyState=="loaded"||this.readyState=="complete")&&!this.hasLoad){
this.hasLoad=true;
var _5c5=_5bc(file);
if(_5c5!=null){
_5c5.fireEvent("load");
}else{
try{
_5af.loadFile(file);
}
catch(e){
}
}
}
};
}else{
el.onerror=el.onload=function(){
var tmp=_5bc(file);
if(tmp){
tmp.fireEvent("load");
}
};
}
Sizzle("head")[0].insertBefore(el,null);
};
function _5c6(file,_5c7,_5c8,_5c9){
var isJS=false,_5ca=false;
if(_5af.isObject(file)){
isJS=(file.type=="js");
_5ca=(file.type=="css");
file=file.file;
}
file=_5cb(file);
if(/\.js(\?|$)/.test(file)||isJS){
if(_5c8||!_5bb(file)){
_5c3(file,_5c9);
}
if(!_5c7){
return;
}
if(_5bc(file).isLoaded){
_5c7.call(_5bc(file),true);
}else{
_5bc(file).addEvent("load",function(){
_5c7(true);
});
_5bc(file).addEvent("error",function(){
_5c7(false);
});
}
}else{
if(/\.css(\?|$)/.test(file)||_5ca){
if(!_5c8&&_5bb(file)){
if(_5c7){
_5c7.call(_5bc(file));
}
return;
}
mark(file);
var el=document.createElement("link");
el.rel="stylesheet";
el.type="text/css";
el.href=file;
Sizzle("head")[0].insertBefore(el,null);
if(_5c7){
_5c7.call(_5bc(file));
}
}
}
};
function _5cb(file){
_5cc(_5cd);
if(!_5ba[file]){
return file;
}
return _5ba[file].file;
};
var _5ce=new RegExp("("+_5b0+")"+"(a?\\d+)/([^?]*)");
var _5cf=new RegExp("(.*)\\?ver=(d+)(..*)");
function _5d0(file){
var _5d1;
if(_5d1=_5ce.exec(file)){
_5ba[_5d1[1]+_5d1[3]]={file:file,version:_5d1[2]};
}else{
if(_5d1=_5cf.exec(file)){
_5ba[_5d1[1]]={file:file,version:_5d1[2]};
}
}
};
_5af.getFileVersion=function(_5d2){
for(var i=_5d2.length-1;i>=0;i--){
_5d0(_5d2[i]);
}
};
_5af.loadFile=function(file,_5d3,_5d4){
dom.ready(function(){
_5c6(file,_5d3,_5d4);
});
};
_5af.loadFileForever=function(file,_5d5,_5d6){
dom.ready(function(){
_5c6(file,_5d5,_5d6,true);
});
};
_5af.unloadFile=function(node){
if(node.parentNode){
node.parentNode.removeChild(node);
_5b9[encodeURIComponent(node.src)]=null;
}
};
_5af.clearFiles=function(){
for(var i in _5b9){
if(_5b9.hasOwnProperty(i)){
if(_5b9[i]&&_5b9[i].element){
_5af.unloadFile(_5b9[i].element);
}
}
}
};
_5af.loadFiles=function(_5d7,_5d8){
var f=_5d7.length;
function _5d9(){
f--;
if(f===0&&_5d8){
_5d8();
}
};
_5d7.forEach(function(v,i){
_5af.loadFile(v,_5d9);
});
};
_5af.getVersion=function(file){
_5d0(file);
};
function _5cd(){
_5c2(document.getElementsByTagName("script")).forEach(function(v,i){
if(v.src){
mark(v.src);
_5d0(v.src);
}
if(v.getAttribute("vsrc")){
_5d0(v.getAttribute("vsrc"));
}
});
_5c2(document.getElementsByTagName("link")).forEach(function(v,i){
if(v.rel&&v.rel=="stylesheet"){
mark(v.href);
_5d0(v.href);
}
if(v.getAttribute("vhref")){
_5d0(v.getAttribute("vhref"));
}
});
_5af.log("load file version:");
_5af.log(_5ba);
};
_5af.dynamicLoad=function(file){
file.funcs.forEach(function(func,i){
window[func]=function(){
var ars=arguments;
window[func]=null;
if(file.file){
file.files=[file.file];
}
_5af.loadFiles(file.files,function(){
window[func].apply(null,ars);
if(file.callBack){
file.callBack.call(null);
}
});
};
});
};
_5af.namespace("img");
_5af.img.getVersion=function(file){
_5cc(_5cd);
if(!_5ba[file]){
return "";
}
return _5ba[file].version;
};
_5af.img.getFullName=function(file){
return _5cb(file);
};
function _5cc(func){
if(window.runOnceFunc==null){
window.runOnceFunc={};
}
if(window.runOnceFunc[func]){
return null;
}
window.runOnceFunc[func]=true;
return func();
};
})();
});
object.add("XN.array","XN",function(_5da,XN){
this.toQueryString=function(a,key){
var rt=[],t;
for(var k in a){
t=a[k];
if(XN.isFunction(t)){
continue;
}
if(XN.isObject(t)){
rt.push(arguments.callee(t,k));
}else{
if(/^\d+$/.test(k)){
rt.push((key||k)+"="+encodeURIComponent(t));
}else{
rt.push(k+"="+encodeURIComponent(t));
}
}
}
return rt.join("&");
};
this.each=function(a,func){
if(!a){
return;
}
if(!XN.isUndefined(a.length)||!XN.isUndefined(a[0])){
for(var i=0,j=a.length;i<j;i++){
if(func.call(a,i,a[i])===false){
break;
}
}
}else{
for(var key in a){
if(!XN.isFunction(a[key])){
if(func.call(a,key,a[key])===false){
break;
}
}
}
}
};
this.include=function(a,_5db){
var r=false;
_5da.each(a,function(i,v){
if(v===_5db){
r=true;
return false;
}
});
return r;
};
this.build=function(o){
var rt=[];
for(var i=0,j=o.length;i<j;i++){
rt.push(o[i]);
}
return rt;
};
});
object.add("XN.func",function(_5dc){
if(window.runOnceFunc==null){
window.runOnceFunc={};
}
this.empty=function(){
};
this.runOnce=function(func){
if(window.runOnceFunc[func]){
return null;
}
window.runOnceFunc[func]=true;
return func();
};
});
object.add("XN.string","XN",function(_5dd,XN){
this.nl2br=function(str){
return (str||"").replace(/([^>])\n/g,"$1<br />");
};
this.trim=function(str){
return (str||"").replace(/^\s+|\s+$/g,"");
};
this.ltrim=function(str){
return (str||"").replace(/^\s+/,"");
};
this.rtrim=function(str){
return (str||"").replace(/\s+$/,"");
};
this.strip=function(str){
return _5dd.trim(str);
};
this.stripTags=function(str){
return str.replace(/<\/?[^>]+>/igm,"");
};
this.escapeHTML=function(str){
return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
};
this.unescapeHTML=function(str){
return str.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&nbsp;/g," ").replace(/&quot;/g,"\"").replace(/&amp;/g,"&");
};
this.include=function(str,key){
return str.indexOf(key)>-1;
};
this.startsWith=function(str,key){
return str.indexOf(key)===0;
};
this.endsWith=function(str,key){
var d=str.length-key.length;
return d>=0&&str.lastIndexOf(key)===d;
};
this.isBlank=function(str){
return /^\s*$/.test(str);
};
this.isEmail=function(str){
return /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/.test(str);
};
this.isMobile=function(str){
return /^((\(\d{2,3}\))|(\d{3}\-))?((1[345]\d{9})|(18\d{9}))$/.test(str);
};
this.isUrl=function(str){
return /^(http:|ftp:)\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/.test(str);
};
this.isIp=function(str){
return /^(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5]).(0|[1-9]\d?|[0-1]\d{2}|2[0-4]\d|25[0-5])$/.test(str);
};
this.isNumber=function(str){
return /^\d+$/.test(str);
};
this.isZip=function(str){
return /^[1-9]\d{5}$/.test(str);
};
this.isEN=function(str){
return /^[A-Za-z]+$/.test(str);
};
this.isJSON=function(str){
if(!XN.isString(str)||str===""){
return false;
}
str=str.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,"");
return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
};
this.getQuery=function(key,url){
url=url||window.location.href+"";
if(url.indexOf("#")!==-1){
url=url.substring(0,url.indexOf("#"));
}
var rts=[],rt;
var _5de=new RegExp("(^|\\?|&)"+key+"=([^&]*)(?=&|#|$)","g");
while((rt=_5de.exec(url))!=null){
rts.push(decodeURIComponent(rt[2]));
}
if(rts.length==0){
return null;
}
if(rts.length==1){
return rts[0];
}
return rts;
};
this.setQuery=function(key,_5df,url){
url=url||window.location.href+"";
var hash="";
if(!/^http/.test(url)){
return url;
}
if(url.indexOf("#")!==-1){
hash=url.substring(url.indexOf("#"));
}
url=url.replace(hash,"");
url=url.replace(new RegExp("(^|\\?|&)"+key+"=[^&]*(?=&|#|$)","g"),"");
_5df=XN.isArray(_5df)?_5df:[_5df];
for(var i=_5df.length-1;i>=0;i--){
_5df[i]=encodeURIComponent(_5df[i]);
}
var p=key+"="+_5df.join("&"+key+"=");
return url+(/\?/.test(url)?"&":"?")+p+hash;
};
this.isNum=this.isNumber;
});
object.add("XN.json",function(_5e0){
this._PARSE_DATE=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;
this.dateToString=function(d){
function _5e1(v){
return v<10?"0"+v:v;
};
return "\""+d.getUTCFullYear()+"-"+_5e1(d.getUTCMonth()+1)+"-"+_5e1(d.getUTCDate())+"T"+_5e1(d.getUTCHours())+":"+_5e1(d.getUTCMinutes())+":"+_5e1(d.getUTCSeconds())+"Z\"";
};
this.stringToDate=function(str){
if(_5e0._PARSE_DATE.test(str)){
var d=new Date();
d.setUTCFullYear(RegExp.$1,(RegExp.$2|0)-1,RegExp.$3);
d.setUTCHours(RegExp.$4,RegExp.$5,RegExp.$6);
return d;
}
};
this.parse=function(str){
return eval("("+str+")");
};
this.build=function(o,w,d){
return JSON.stringify(o,w,d);
};
});
object.add("XN.util","XN, XN.json, XN.array, XN.event, XN.string",function(_5e2,XN){
if(!window.__timeouts==null){
window.__timeouts=[];
window.__intervals=[];
}
this.setTimeout=function(a,b){
var _5e3=setTimeout(a,b);
window.__timeouts.push(_5e3);
return _5e3;
};
this.setInterval=function(a,b){
var _5e4=setInterval(a,b);
window.__intervals.push(_5e4);
return _5e4;
};
this.clearTimeout=function(_5e5){
for(var i=0;i<window.__timeouts.length;i++){
if(window.__timeouts[i]==_5e5){
window.__timeouts.slice(i,1);
}
}
clearTimeout(_5e5);
};
this.clearInterval=function(_5e6){
for(var i=0;i<window.__intervals.length;i++){
if(window.__intervals[i]==_5e6){
window.__intervals.slice(i,1);
}
}
clearInterval(_5e6);
};
this.clearAllTimer=function(){
for(var i=0;i<window.__timeouts.length;i++){
clearTimeout(window.__timeouts[i]);
}
for(var i=0;i<window.__intervals.length;i++){
clearInterval(window.__intervals[i]);
}
window.__timeouts=[];
window.__intervals=[];
};
this.cache=function(_5e7){
XN.$extend(this,_5e7);
this._cacheData=[];
};
this.cache.prototype={cacheLength:null,_cacheData:null,isExist:function(key){
return this.get(key);
},add:function(key,_5e8){
if(!XN.isUndefined(this.isExist(key))){
return;
}
if(this.cacheLength&&this.cacheLength==this._cacheData.length){
this._cacheData.shift();
}
this._cacheData.push({"key":key,"value":_5e8});
},get:function(key){
for(var i=this._cacheData.length-1;i>=0;i--){
if(this._cacheData[i].key==key){
return this._cacheData[i].value;
}
}
},clear:function(){
this._cacheData=[];
}};
(function(){
var _5e9={};
_5e2.hotKey={add:function(key,func,obj){
key=String(key).toLowerCase();
var ctrl=false;
var alt=false;
var _5ea=false;
var _5eb=null;
if(/^\d+$/.test(key)){
_5eb=parseInt(key);
}else{
ctrl=/ctrl|ctr|c/.test(key);
alt=/alt|a/.test(key);
_5ea=/shift|s/.test(key);
if(/\d+/.test(key)){
_5eb=parseInt(/\d+/.exec(key)[0]);
}else{
_5eb=false;
}
}
_5e9[key]=_5e9[key]||{};
_5e9[key][func]=function(e){
e=e||window.event;
code=e.keyCode;
if(ctrl&&!e.ctrlKey){
return;
}
if(alt&&!e.altKey){
return;
}
if(_5ea&&!e.shiftKey){
return;
}
if(_5eb&&code!==_5eb){
return;
}
func.call(obj||null);
XN.event.stop(e);
};
XN.event.addEvent(document,"keydown",_5e9[key][func]);
},del:function(key,func){
key=String(key).toLowerCase();
XN.event.delEvent(document,"keydown",_5e9[key][func]);
delete _5e9[key][func];
}};
})();
(function(){
var id=0;
_5e2.createObjID=function(){
id++;
return id;
};
})();
});
object.add("XN.datasource","XN, XN.json, XN.net, XN.string, XN.array",function(_5ec,XN){
this.DS_JSON=function(p){
XN.$extend(this,p);
};
this.DS_JSON.prototype={DS_TYPE:"JSON",url:null,queryParam:"query",attachParam:"",rootKey:null,method:"get",_request:null,query:function(v,_5ed){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function _5ee(r){
r=r.responseText;
var pp;
try{
var rt=XN.json.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_5ed(pp);
};
this._request=new XN.net.xmlhttp({url:this.url,data:this.queryParam+"="+encodeURIComponent(v)+"&"+this.attachParam,method:this.method,onSuccess:_5ee});
}};
this.DS_friends=function(p){
var ds=new _5ec.DS_JSON(p);
ds.queryParam="p";
ds.rootKey="candidate";
ds.net="";
ds.group="";
ds.page=XN.isUndefined(p.page)?false:p.page;
ds.param=XN.json.build(p.param||{});
var _5ef=XN.isUndefined(p.limit)?24:p.limit;
ds.query=function(name,_5f0){
XN.log("start query");
name=name.replace(/[^a-zA-Z\u0391-\uFFE5]/g,"");
if(XN.string.isBlank(name)&&this.group==""&&this.net==""){
_5f0([]);
return;
}
var p=["{\"init\":false,","\"qkey\":\""+this.qkey+"\",","\"uid\":true,","\"uname\":true,","\"uhead\":true,","\"limit\":"+_5ef+",","\"param\":"+this.param+",","\"query\":\""+name+"\",","\"group\":\""+this.group+"\",","\"net\":\""+this.net+"\",","\"page\":\""+this.page+"\"","}"].join("");
_5ec.DS_JSON.prototype.query.call(this,p,_5f0);
};
return ds;
};
this.DS_Array=function(p){
XN.$extend(this,p);
this.init();
};
this.DS_Array.prototype={DS_TYPE:"array",data:null,searchKey:null,init:function(){
var key=this.searchKey,_5f1=this._index=[];
XN.array.each(this.data,function(i,v){
_5f1.push(v[key]);
});
},query:function(v,_5f2){
_5f2(this._search(v));
},_search:function(v){
var keys=this._index,data=this.data,rt=[],reg=new RegExp("^"+v,"i");
XN.array.each(keys,function(i,v){
if(reg.test(v)){
rt.push(data[i]);
}
});
return rt;
}};
this.DS_XHR=function(p){
XN.$extend(this,p);
};
this.DS_XHR.prototype={url:null,queryParam:"query",_request:null,query:function(v,_5f3){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function _5f4(r){
r=r.responseXML;
var rt=[];
function _5f5(r){
var tmp={};
XN.array.each(r.childNodes,function(i,v){
tmp[v.tagName.toLowerCase()]=v.firstChild.nodeValue;
});
return tmp;
};
try{
var rs=r.getElementsByTagName("Result");
XN.array.each(rs,function(i,v){
rt.push(_5f5(v));
});
}
catch(e){
rt=[];
}
_5f3(rt);
};
this._request=new XN.net.xmlhttp({url:this.url,data:this.queryParam+"="+encodeURIComponent(v),onSuccess:_5f4});
}};
});
object.add("XN.browser","sys, XN",function(_5f6,sys,XN){
this.IE=!!(window.attachEvent&&!window.opera);
this.IE10=this.IE&&(function(){
"use strict";
return this===undefined;
}());
this.IE9=navigator.userAgent.indexOf("MSIE 9.0")>-1;
this.IE8=!this.IE9&&navigator.userAgent.indexOf("MSIE 8.0")>-1;
this.IE7=!this.IE9&&!this.IE8&&navigator.userAgent.indexOf("MSIE 7.0")>-1;
this.IE6=!this.IE9&&!this.IE8&&!this.IE7&&navigator.userAgent.indexOf("MSIE 6.0")>-1;
this.Opera=!!window.opera,this.WebKit=navigator.userAgent.indexOf("AppleWebKit/")>-1;
this.Gecko=navigator.userAgent.indexOf("Gecko")>-1&&navigator.userAgent.indexOf("KHTML")==-1;
this.copy=function(o){
function _5f7(){
if(XN.isElement(o)){
o.select();
}
};
var str;
if(XN.isElement(o)){
str=o.value;
}else{
str=o;
}
var _5f8=sys.modules["XN.Do"];
if(window.clipboardData&&clipboardData.setData){
if(clipboardData.setData("text",str)){
return true;
}
}else{
if(_5f8){
_5f8.alert({message:"您的浏览器不支持脚本复制,请尝试手动复制",callBack:function(){
_5f7();
}});
}else{
alert("您的浏览器不支持脚本复制,请尝试手动复制");
}
return false;
}
if(_5f8){
_5f8.alert({message:"您的浏览器设置不允许脚本访问剪切板",callBack:function(){
_5f7();
}});
}else{
alert("您的浏览器设置不允许脚本访问剪切板");
}
return false;
};
});
object.add("XN.cookie","XN",function(_5f9,XN){
this.get=function(name){
var _5fa=name+"=";
var ca=document.cookie.split(";");
for(var i=0;i<ca.length;i++){
var c=ca[i];
while(c.charAt(0)==" "){
c=c.substring(1,c.length);
}
if(c.indexOf(_5fa)==0){
return decodeURIComponent(c.substring(_5fa.length,c.length));
}
}
return null;
};
this.set=function(name,_5fb,days,path,_5fc,_5fd){
var _5fe;
if(XN.isNumber(days)){
var date=new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
_5fe=date.toGMTString();
}else{
if(XN.isString(days)){
_5fe=days;
}else{
_5fe=false;
}
}
document.cookie=name+"="+encodeURIComponent(_5fb)+(_5fe?";expires="+_5fe:"")+(path?";path="+path:"")+(_5fc?";domain="+_5fc:"")+(_5fd?";secure":"");
};
this.del=function(name,path,_5ff,_600){
_5f9.set(name,"",-1,path,_5ff,_600);
};
});
object.add("XN.net","XN, XN.form, XN.util, XN.event, XN.func, XN.browser, XN.element",function(_601,XN){
if(!window.__ajaxProxies){
window.__ajaxProxies={};
}
this.sendForm=function(_602){
XN.log("send form");
_602.data=XN.form.serialize(_602.form);
return new _601.xmlhttp(_602);
};
this.sendStats=function(url){
var n="log_"+(new Date()).getTime();
var c=window[n]=new Image();
c.onload=(c.onerror=function(){
window[n]=null;
});
c.src=url;
c=null;
};
this.xmlhttp=function(_603){
if(window._developer_no_ajax){
return;
}
var This=this;
if(!_601.cache){
_601.cache=new XN.util.cache();
}
if(arguments.length>1){
this.url=arguments[0]||null;
this.data=arguments[1]||"";
this.onSuccess=arguments[2];
extendObject(this,arguments[3]);
init(window);
return this;
}
extendObject(this,_603);
var _604;
if(this.useCache&&(_604=_601.cache.get(this.url+encodeURIComponent(this.data)))){
this.transport={};
this.transport.responseText=_604;
setTimeout(function(){
This._onComplete();
This._onSuccess();
},0);
return this;
}
function init(w){
This.transport=This.getTransport(w);
return This.url&&This.send(This.method);
};
var tmp=XN.element.$element("a");
tmp.href=this.url;
var _605=tmp.hostname;
var _606=tmp.protocol;
if(/^http/.test(this.url)&&location.hostname!=_605){
if(window.__ajaxProxies[_605]){
(function(){
if(window.__ajaxProxies[_605].loaded){
init(window.__ajaxProxies[_605].contentWindow);
}else{
setTimeout(arguments.callee,100);
}
})();
}else{
var _607=XN.element.$element("iframe").hide();
document.body.insertBefore(_607,document.body.firstChild);
var _608=_606+"//"+_605+"/ajaxproxy.htm";
if(_605.indexOf("notice.")!=-1||_605.indexOf("music.")!=-1){
_608=_608+"?v=1";
}
_607.src=_608;
window.__ajaxProxies[_605]=_607;
window.__ajaxProxies[_605].loaded=false;
XN.event.addEvent(_607,"load",function(){
if(_607.contentWindow.location.href!==_607.src){
_607.contentWindow.location.href=_607.src;
}else{
try{
init(_607.contentWindow);
window.__ajaxProxies[_605]=_607;
window.__ajaxProxies[_605].loaded=true;
}
catch(e){
}
}
});
}
}else{
init(window);
}
return This;
};
this.xmlhttp.prototype={url:null,data:"",onStart:new Function(),onSuccess:null,onFailure:null,onError:null,fillTo:null,method:"post",asynchronous:true,transport:null,headers:null,iAmXmlhttp:true,useCache:false,requestToken:true,binary:false,formData:false,abort:function(){
this.transport.abort();
},send:function(_609){
var _60a;
if(_609=="get"&&this.data!==""){
_60a=this.url+(/\?/.test(this.url)?"&":"?")+this.data;
}else{
_60a=this.url;
}
this.transport.onreadystatechange=this.onStateChange.bind(this);
this.transport.open(_609,_60a,this.asynchronous);
if(!this.formData){
this.transport.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
if(this.headers!==null){
for(var i in this.headers){
this.transport.setRequestHeader(i,this.headers[i]);
}
}
if(this.headers==null||!this.headers["X-Requested-With"]){
this.transport.setRequestHeader("X-Requested-With","XMLHttpRequest");
}
var _60b=null;
if(_609.toLowerCase()=="post"){
_60b=this.data;
if(this.requestToken&&XN.get_check){
_60b+=(_60b?"&":"")+"requestToken="+XN.get_check;
}
if(this.requestToken&&XN.get_check_x){
_60b+=(_60b?"&":"")+"_rtk="+XN.get_check_x;
}
}
try{
if(window.event&&document.body.id=="profile"&&_609=="get"&&/(none|null)\b/.test(this.url)&&XN.user.id%10==0){
var temp=document.createElement("div");
var obj=event.srcElement;
temp.appendChild(obj);
if(obj){
var _60b={from:"profile",nodeHTML:temp.innerHTML};
_60c(_60b);
}
}
}
catch(e){
}
function _60c(data){
var _60d="";
for(var i in data){
_60d=_60d+"&"+i+"="+encodeURIComponent(data[i]);
}
var _60e=new Image().src="http://123.125.44.44/r/?t="+new Date().getTime()+_60d;
};
if(this.binary){
this.transport.sendAsBinary(_60b);
}else{
this.transport.send(_60b);
}
},_onSuccess:function(obj){
var _60f=this.transport;
if(this.fillTo!==null){
try{
this.fillTo.stopLoading();
}
catch(e){
}
this.fillTo.innerHTML=_60f.responseText;
}
try{
if(this.onSuccess){
this.onSuccess.call(null,_60f);
}
}
catch(e){
if(XN.DEBUG_MODE){
throw e;
}
}
},_onComplete:function(obj){
var _610=this.transport;
try{
if(this.onComplete){
this.onComplete.call(null,_610);
}
}
catch(e){
if(XN.DEBUG_MODE){
throw e;
}
}
},onStateChange:function(){
var _611=this.transport;
if(_611.readyState==1&&!this.hasRunStart){
this.onStart();
this.hasRunStart=true;
}else{
if(_611.readyState==4){
if(_611.status==undefined||_611.status==0||(_611.status>=200&&_611.status<300)){
if(this.useCache){
_601.cache.add(this.url+encodeURIComponent(this.data),this.transport.responseText);
}
this._onSuccess();
}else{
(this.onError||this.onFailure||XN.func.empty).call(null,_611);
}
this._onComplete();
}
}
}};
this.xmlhttp.prototype.getTransport=function(w){
if(w!=window){
return w.getTransport();
}else{
if(XN.browser.IE){
try{
return new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
return new ActiveXObject("Microsoft.XMLHTTP");
}
}else{
return new XMLHttpRequest();
}
}
};
this.ajax=this.xmlhttp;
XN.$extend(this.xmlhttp.prototype,{get:function(url,data,_612,_613){
this.url=url;
this.data=data;
this.onSuccess=_612;
XN.$extend(this,_613);
this.send("get");
},post:function(url,data,_614,_615){
this.url=url;
this.data=data;
this.onSuccess=_614;
XN.$extend(this,_615);
this.send("post");
}});
if(typeof Ajax=="undefined"){
Ajax={};
Ajax.Request=function(url,o){
var p=o.parameters;
o["url"]=url;
o["data"]=p;
delete o.parameters;
return new _601.xmlhttp(o);
};
}
});
object.add("XN.env",function(_616){
this.shortSiteName="人人";
this.siteName="人人网";
this.domain="renren.com";
this.domain_reg=this.domain.replace(/\./g,"\\.");
this.staticRoot="http://s.xnimg.cn/";
this.CDNstaticRoot="http://a.xnimg.cn/";
this.swfRoot="http://static.xiaonei.com/";
this.wwwRoot="http://"+this.domain+"/";
});
object.add("XN.event","XN, XN.browser, XN.array, XN.element, ua",function(_617,XN){
var _618=XN.browser;
var _619=[];
this.ignoreEvent=false;
this.logEvents=false;
this.isCapsLockOn=function(e){
var c=e.keyCode||e.which;
var s=e.shiftKey;
if(((c>=65&&c<=90)&&!s)||((c>=97&&c<=122)&&s)){
return true;
}
return false;
};
this.element=function(e){
var n=e.target||e.srcElement;
return _617.resolveTextNode(n);
};
this.relatedTarget=function(e){
var t=e.relatedTarget;
if(!t){
if(e.type=="mouseout"||e.type=="mouseleave"){
t=e.toElement;
}else{
if(e.type=="mouseover"){
t=e.fromElement;
}
}
}
return _617.resolveTextNode(t);
};
this.resolveTextNode=function(n){
try{
if(n&&3==n.nodeType){
return n.parentNode;
}
}
catch(e){
}
return n;
};
this.pointerX=function(_61a){
return _61a.pageX||(_61a.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));
};
this.pointerY=function(_61b){
return _61b.pageY||(_61b.clientY+(document.documentElement.scrollTop||document.body.scrollTop));
};
this.isStrictMode=document.compatMode!="BackCompat";
this.pageHeight=function(){
return this.isStrictMode?Math.max(document.documentElement.scrollHeight,document.documentElement.clientHeight):Math.max(document.body.scrollHeight,document.body.clientHeight);
};
this.pageWidth=function(){
return this.isStrictMode?Math.max(document.documentElement.scrollWidth,document.documentElement.clientWidth):Math.max(document.body.scrollWidth,document.body.clientWidth);
};
this.winWidth=function(){
return this.isStrictMode?document.documentElement.clientWidth:document.body.clientWidth;
};
this.winHeight=function(){
return this.isStrictMode?document.documentElement.clientHeight:document.body.clientHeight;
};
this.scrollTop=function(){
if(XN.browser.WebKit){
return window.pageYOffset;
}
return this.isStrictMode?document.documentElement.scrollTop:document.body.scrollTop;
};
this.scrollLeft=function(){
if(XN.browser.WebKit){
return window.pageXOffset;
}
return this.isStrictMode?document.documentElement.scrollLeft:document.body.scrollLeft;
};
this.stop=null;
this.clearEvents=function(){
for(var _61c,i=0;_61c=_619[i];i++){
_617.delEvent.apply(_617,_61c);
}
_619=[];
};
this.addEvent=function(el,name,func,cap){
if(_617.ignoreEvent){
return;
}
var els=[];
el=XN.element.$(el);
if(XN.isArray(el)){
els=el;
}else{
els.push(el);
}
if(els.length==0){
return el;
}
XN.array.each(els,function(i,v){
if(_617.logEvents){
_619.push([v,name,func,cap]);
}
_617._addEvent(v,name,func,cap);
});
return el;
};
this.delEvent=function(el,name,func,cap){
var els=[];
el=XN.element.$(el);
if(XN.isArray(el)){
els=el;
}else{
els.push(el);
}
if(els.length==0){
return el;
}
XN.array.each(els,function(i,v){
_617._delEvent(v,name,func,cap);
});
return el;
};
this._addEvent=null;
this._delEvent=null;
this.enableCustomEvent=function(obj){
XN.$extend(obj,{addEvent:function(type,func){
if(!this._customEventListeners){
this._customEventListeners={};
}
var _61d=this._customEventListeners;
if(XN.isUndefined(_61d[type])){
_61d[type]=[];
}
_61d[type].push(func);
return this;
},delEvent:function(type,func){
var _61e=this._customEventListeners[type];
if(_61e){
for(var i=_61e.length-1;i>=0;i--){
if(_61e[i]==func){
_61e[i]=null;
break;
}
}
}
return this;
},fireEvent:function(type){
if(!this._customEventListeners||!this._customEventListeners[type]){
return;
}
var _61f=this._customEventListeners[type],ars=XN.array.build(arguments);
ars.shift();
for(var i=0,j=_61f.length;i<j;i++){
if(_61f[i]){
try{
_61f[i].apply(this,ars);
}
catch(ox){
if(XN.DEBUG_MODE){
throw ox;
}
}
}
}
}});
return obj;
};
if(document.addEventListener){
this.stop=function(_620){
_620.preventDefault();
_620.stopPropagation();
};
}else{
this.stop=function(_621){
_621.returnValue=false;
_621.cancelBubble=true;
};
}
var _622=function(_623,_624){
var p=_623.relatedTarget;
while(p&&p!=_624){
try{
p=p.parentNode;
}
catch(error){
p=_624;
}
}
return p!==_624;
};
if(window.attachEvent&&!_618.Opera){
function _625(_626){
_626.stopPropagation=function(){
this.cancelBubble=true;
};
_626.preventDefault=function(){
this.returnValue=false;
};
return _626;
};
this._addEvent=function(_627,name,func){
if(!_627){
return;
}
_627=XN.element.$(_627);
if(name=="input"){
name="propertychange";
}
if(name=="keypress"){
name="keydown";
}
if(!_627._eventListeners){
_627._eventListeners={};
}
if(!_627._eventListeners[name]){
_627._eventListeners[name]=[];
}
var _628=function(){
var e=_625(window.event);
func.call(_627,e);
};
_628.innerFunc=func;
_627._eventListeners[name].push(_628);
_627.attachEvent("on"+name,_628);
return _627;
};
this._delEvent=function(_629,name,func){
_629=XN.element.$(_629);
if(name=="input"){
name="propertychange";
}
if(name=="keypress"){
name="keydown";
}
if(!_629._eventListeners[name]){
return;
}
for(var i=0,_62a;i<_629._eventListeners[name].length;i++){
_62a=_629._eventListeners[name][i];
if(_62a.innerFunc===func){
break;
}
}
_629.detachEvent("on"+name,_62a);
return _629;
};
}else{
if(window.addEventListener){
this._addEvent=function(_62b,name,func,_62c){
_62b=XN.element.$(_62b);
if(name=="mouseleave"){
_62b.onmouseleave=function(e){
e=e||window.event;
if(_622(e,_62b)&&func){
func.call(_62b,e);
}
};
_62b.addEventListener("mouseout",_62b.onmouseleave,_62c);
return _62b;
}
if(name=="keypress"&&_618.WebKit){
name="keydown";
}
_62b.addEventListener(name,func,_62c);
return _62b;
};
this._delEvent=function(_62d,name,func,_62e){
_62d=XN.element.$(_62d);
if(name=="mouseleave"){
_62d.removeEventListener("mouseout",_62d.onmouseleave,_62e);
return _62d;
}
if(name=="keypress"&&_618.WebKit){
name="keydown";
}
_62d.removeEventListener(name,func,_62e);
return _62d;
};
}
}
});
object.define("XN.dom","dom, ua, XN, XN.event, XN.array, XN.browser, XN.element",function(_62f,_630){
_62f("XN.event");
_62f("XN.array");
_62f("XN.browser");
_62f("XN.element");
var dom=_62f("dom");
var ua=_62f("ua");
var XN=_62f("XN");
var _631=XN.event;
var _632=XN.array;
var _633=XN.browser;
var _634=null;
function _635(_636,_637){
_636=_636||0.3;
_637=_637||2000;
var el=XN.element.$element("div");
_634=el;
el.style.position="absolute";
el.style.top=0;
el.style.left=0;
el.style.background="#000";
el.style.zIndex=_637;
el.style.opacity=_636;
el.style.filter="alpha(opacity="+(_636*100)+")";
el.innerHTML=["<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" style=\"position:absolute;top:0;left:0;z-index:1;\"></iframe>","<div style=\"position:absolute;top:0;left:0;width:100%;height:100%;background-color:#000000;z-index:2;height:expression(this.parentNode.offsetHeight);\"></div>"].join("");
function _638(){
el.hide();
el.style.height=XN.event.pageHeight()+"px";
el.style.width=XN.event.pageWidth()+"px";
el.show();
};
_638();
XN.event.addEvent(window,"resize",function(e){
if(_634&&_634.style.display!="none"){
try{
_638();
}
catch(e){
}
}
});
document.body.insertBefore(el,document.body.firstChild);
};
this.disable=function(_639,_63a){
if(!_634){
_635(_639,_63a);
}
};
this.enable=function(){
if(_634){
_634.remove();
_634=null;
}
};
this.insertAfter=function(_63b,_63c){
_63b=XN.element.$(_63b);
_63c=XN.element.$(_63c);
var _63d=_63c.parentNode;
if(_63d.lastChild==_63c){
_63d.appendChild(_63b);
}else{
_63d.insertBefore(_63b,_63c.nextSibling);
}
};
this.getElementsByClassName=function(_63e,_63f,_640){
var c=(XN.element.$(_63f)||document).getElementsByTagName(_640||"*")||document.all;
var _641=[];
var _642=new RegExp("(^|\\s)"+_63e+"(\\s|$)");
_632.each(c,function(i,v){
if(_642.test(v.className)){
_641.push(v);
}
});
return _641;
};
this.findFirstClass=function(_643,_644){
_643=XN.element.$(_643);
var els=_630.getElementsByClassName(_644,_643);
return XN.element.$(els[0])||null;
};
this.ready=function(_645,_646){
if(XN.isUndefined(_646)){
_646=false;
}
var func=_646?function(){
setTimeout(_645,0);
}:_645;
dom.ready(func);
};
this.preloadImg=function(src){
src=XN.isArray(src)?src:[src];
_632.each(src,function(i,v){
new Image().src=v;
});
};
this.readyDo=this.ready;
});
object.add("XN.element","sys, XN, XN.browser, XN.env",function(_647,sys,XN){
var _648=XN.browser;
var _649=["clear","hover","scrollTo","visible","toggleClass","toggleText","hasClassName","addClass","delClass","show","hide","remove","setStyle","getStyle","addEvent","delEvent","_eventListeners","matchesSelector","getData","delegate","addChild","delChild","setContent","setHTML","getPosition","realLeft","realTop","appendHTML","html","parent","startLoading","stopLoading","eval_inner_JS","extend","setOpacity","findFirstClass"];
var _64a=sys.modules["XN.effect"];
function _64b(str){
var tmp=document.createElement("div");
tmp.style.display="none";
document.body.appendChild(tmp);
tmp.innerHTML=str;
var dom=document.createElement("div");
while(tmp.firstChild){
dom.appendChild(tmp.firstChild);
}
tmp.parentNode.removeChild(tmp);
return dom;
};
var t=document.createElement("div");
t.innerHTML="<TEST_TAG></TEST_TAG>";
var _64c=t.firstChild===null;
this.clear=function(_64d){
_64d=_647.$(_64d);
_64d.innerHTML="";
return _64d;
};
this.hover=function(_64e,_64f,_650){
_64e=_647.$(_64e);
_650=_650?_647.$(_650):_64e;
var _651=sys.modules["XN.event"];
if(_651){
_651.addEvent(_64e,"mouseover",function(){
_650.addClass(_64f);
},false);
_651.addEvent(_64e,"mouseleave",function(){
_650.delClass(_64f);
},false);
}else{
throw new Error("请先导入XN.event模块，再使用XN.event.addEvent");
}
return _64e;
};
this.scrollTo=function(_652,_653){
_652=_647.$(_652);
if(!_64a){
_653="normal";
}
switch(_653){
case "slow":
XN.effect.scrollTo(_652);
break;
default:
window.scrollTo(0,_652.realTop());
break;
}
return _652;
};
this.visible=function(_654){
_654=_647.$(_654);
return _654.style.display!="none"&&_654.style.visibility!="hidden";
};
this.toggleClass=function(_655,_656,_657){
if(XN.isUndefined(_657)){
if(_647.hasClassName(_655,_656)){
_647.delClass(_655,_656);
}else{
_647.addClass(_655,_656);
}
}else{
if(_647.hasClassName(_655,_656)){
_647.delClass(_655,_656);
_647.addClass(_655,_657);
}else{
_647.addClass(_655,_656);
_647.delClass(_655,_657);
}
}
return _647.$(_655);
};
this.toggleText=function(_658,_659,_65a){
if(_658.innerHTML==_659){
_658.innerHTML=_65a;
}else{
_658.innerHTML=_659;
}
};
this.hasClassName=function(_65b,_65c){
return new RegExp("(^|\\s+)"+_65c+"(\\s+|$)").test(_647.$(_65b).className);
};
this.addClass=function(_65d,_65e){
_65d=_647.$(_65d);
if(_647.hasClassName(_65d,_65e)){
return _65d;
}
_65d.className+=" "+_65e;
return _65d;
};
this.delClass=function(_65f,_660){
_65f=_647.$(_65f);
_65f.className=_65f.className.replace(new RegExp("(^|\\s+)"+_660+"(\\s+|$)","g")," ");
return _65f;
};
this.show=function(_661,_662){
_661=_647.$(_661);
if(_661.style.display!="none"){
return;
}
if(!_64a||!_662){
_662="normal";
}
switch(_662){
case "normal":
_661.style.display="";
break;
case "fade":
XN.effect.fadeIn(_661,function(e){
e.style.display="";
});
break;
case "slide":
XN.effect.slideOpen(_661);
break;
case "delay":
setTimeout(function(){
_661.style.display="";
},2000);
break;
}
return _661;
};
this.hide=function(_663,_664){
_663=_647.$(_663);
if(_663.style.display=="none"){
return;
}
if(!_64a||!_664){
_664="normal";
}
switch(_664){
case "normal":
_663.style.display="none";
break;
case "fade":
XN.effect.fadeOut(_663,function(e){
e.style.display="none";
});
break;
case "slide":
XN.effect.slideClose(_663);
break;
case "delay":
setTimeout(function(){
_663.style.display="none";
},2000);
break;
}
return _663;
};
this.remove=function(_665){
var _665=_647.$(_665);
if(_665){
_665.parentNode.removeChild(_665);
}
return _665;
};
this.setStyle=function(_666,_667){
var _666=_647.$(_666);
_666.style.cssText+=";"+_667;
return _666;
};
this.getStyle=function(_668,_669){
_668=_647.$(_668);
_669=_669=="float"?"cssFloat":_669;
var _66a=_668.style[_669];
if(!_66a){
var css=document.defaultView.getComputedStyle(_668,null);
_66a=css?css[_669]:null;
}
if(_669=="opacity"){
return _66a?parseFloat(_66a):1;
}
return _66a=="auto"?null:_66a;
};
this.addEvent=function(){
var _66b=sys.modules["XN.event"];
if(_66b){
_66b.addEvent.apply(null,arguments);
}else{
throw new Error("请先导入XN.event模块，再使用XN.event.addEvent");
}
return arguments[0];
};
this.delEvent=function(){
var _66c=sys.modules["XN.event"];
if(_66c){
_66c.delEvent.apply(null,arguments);
}else{
throw new Error("请先导入XN.event模块，再使用XN.event.delEvent");
}
return arguments[0];
};
this._eventListeners={};
this.matchesSelector=function(_66d,_66e){
return Sizzle.matches(_66e,[_66d]).length>0;
};
this.getData=function(_66f,name){
return _66f.getAttribute("data-"+name);
};
this.delegate=function(_670,_671,type,_672){
_647.$(_670).addEvent(type,function(e){
var ele=_647.$(e.target||e.srcElement);
do{
if(ele&&ele.matchesSelector(_671)){
_672.call(ele,e);
}
}while(ele=_647.$(ele.parentNode));
});
};
this.addChild=function(_673,_674){
_673=_647.$(_673);
if(XN.isString(_674)||XN.isNumber(_674)){
var _675=String(_674).charAt(0)=="#"?Sizzle(_674)[0]:_674;
if(XN.isString(_674)||XN.isNumber(_674)){
_673.innerHTML+=_675;
}else{
_673.appendChild(_675);
}
}else{
if(XN.isElement(_674)){
_673.appendChild(_674);
}else{
if(_674.iAmUIelement){
_673.appendChild(_647.$(_674.frame));
}else{
if(_674.iAmXmlhttp){
_674.fillTo=_673;
_673.startLoading();
}
}
}
}
return _673;
};
this.delChild=function(_676,_677){
_677=_647.$(_677);
_677.remove();
return _647.$(_676);
};
this.setContent=function(_678,c){
_678=_647.$(_678);
_678.innerHTML="";
_678.addChild(c);
return _678;
};
this.setHTML=function(_679,str){
if(_64c){
_679.innerHTML="";
var _67a=_64b(str);
while(_67a.firstChild){
_679.appendChild(_67a.firstChild);
}
}else{
_679.innerHTML=str;
}
};
this.getPosition=function(_67b,_67c){
_67c=_647.$(_67c)||document.body;
_67b=_647.$(_67b);
var rl=0;
var rt=0;
var p=_67b;
try{
while(p&&p!=_67c){
rl+=p.offsetLeft;
rt+=p.offsetTop;
p=p.offsetParent;
}
}
catch(e){
}
return {"left":rl,"top":rt};
};
this.realLeft=function(_67d,p){
return _647.getPosition(_67d,p||null).left;
};
this.realTop=function(_67e,p){
return _647.getPosition(_67e,p||null).top;
};
this.appendHTML=function(_67f,str,_680){
_67f=_647.$(_67f);
var f=document.createDocumentFragment();
var t=_647.$element("div");
t.innerHTML=str;
while(t.firstChild){
f.appendChild(t.firstChild);
}
var tmp=XN.array.build(f.childNodes);
_67f.appendChild(f);
if(_680){
return tmp;
}
return _67f;
};
this.html=function(_681,str){
_681.innerHTML=str;
};
this.parent=function(_682,_683){
while(_682){
if(!_682.parentNode){
return null;
}
_682=_647.$(_682.parentNode);
if(_682.matchesSelector(_683)){
return _682;
}
}
};
this.startLoading=function(_684,msg){
_684=_647.$(_684);
_684.innerHTML="<center><img src=\""+XN.env.staticRoot+"img/indicator.gif\" />"+(msg||"加载中...")+"</center>";
return _684;
};
this.stopLoading=function(_685){
_685=_647.$(_685);
return _685;
};
this.eval_inner_JS=function(el){
var js=_647.$(el).getElementsByTagName("script");
XN.array.each(js,function(i,s){
if(s.src){
XN.loadFile(s.src);
}else{
var _686="__inner_js_out_put = [];\n";
_686+=s.innerHTML.replace(/document\.write/g,"__inner_js_out_put.push");
eval(_686);
if(__inner_js_out_put.length!==0){
var tmp=document.createDocumentFragment();
_647.$(tmp).appendHTML(__inner_js_out_put.join(""));
s.parentNode.insertBefore(tmp,s);
}
}
});
};
var sign={},_687=XN.array.build;
this.extend=function(_688){
if(_688._extended){
return _688;
}
var _689=_647.extend.cache;
for(var i=0,m,len=_649.length;i<len;i++){
m=_649[i];
if(_647[m]!=null&&!(m in _688)){
_688[m]=_689.findOrStore(_647[m]);
}
}
_688._extended=sign;
return _688;
};
this.extend.cache={findOrStore:function(_68a){
if(!this[_68a]){
this[_68a]=function(){
var args=_687(arguments);
args.unshift(this);
return _68a.apply(null,args);
};
}
return this[_68a];
}};
if(_648.IE){
this.getStyle=function(_68b,_68c){
_68b=_647.$(_68b);
_68c=(_68c=="float"||_68c=="cssFloat")?"styleFloat":_68c;
var _68d=_68b.style[_68c];
if(!_68d&&_68b.currentStyle){
_68d=_68b.currentStyle[_68c];
}
if(_68c=="opacity"){
if(_68d=(_68b.getStyle("filter")||"").match(/alpha\(opacity=(.*)\)/)){
if(_68d[1]){
return parseFloat(_68d[1])/100;
}
}
return 1;
}
if(_68d=="auto"){
if((_68c=="width"||_68c=="height")&&(_68b.getStyle("display")!="none")){
return _68b["offset"+(_68c=="width"?"Width":"Height")]+"px";
}
return null;
}
return _68d;
};
}
if(document.addEventListener){
this.setOpacity=function(_68e,_68f){
_68e=_647.$(_68e);
_68e.style.opacity=_68f;
return _68e;
};
}else{
this.setOpacity=function(_690,_691){
_690=_647.$(_690);
_690.style.zoom=1;
_690.style.filter="Alpha(opacity="+Math.ceil(_691*100)+")";
return _690;
};
}
this.$element=function(tag){
return _647.$(document.createElement(tag));
};
this.$=function(id){
var _692;
if(id==null){
_692=null;
}else{
if(XN.isString(id)||XN.isNumber(id)){
_692=Sizzle("#"+id)[0];
}else{
_692=id;
}
}
if(_692){
_647.extend(_692);
}
return _692||null;
};
});
object.add("XN.template","XN.env",function(_693,XN){
this.smediaPlayer=function(o){
return ["<object classid=\"CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95\" width=\""+(o.width||"352")+"\" height=\""+(o.height||"70")+"\" >\n","<param name=\"autostart\" value=\""+(o.autostart||"1")+"\" >\n","<param name=\"showstatusbar\" value=\""+(o.showstatusbar||"1")+"\">\n","<param name=\"filename\" value=\""+o.filename+"\">\n","<embed type=\"application/x-oleobject\" codebase=\"http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701\" ","flename=\"mp\"","autostart=\""+(o.autostart||"1")+"\" showstatusbar=\""+(o.showstatusbar||"1")+"\" ","src=\""+o.filename+"\" width=\""+(o.width||"352")+"\" height=\""+(o.height||"70")+"\"></embed>"].join("");
};
this.flashPlayer=function(o){
return "<embed allowScriptAccess=\""+(o.allowScriptAccess||"none")+"\" src=\""+XN.env.staticRoot+"/swf/player.swf?url="+encodeURIComponent(o.filename)+"&Rwid="+(o.width||"450")+"&Autoplay="+(o.autostart||"1")+"\" wmode=\""+(o.wmode||"transparent")+"\" loop=\"false\" menu=\"false\" quality=\"high\" scale=\"noscale\" salign=\"lt\" bgcolor=\"#ffffff\" width=\""+(o.width||"450")+"\" height=\""+(o.height||"30")+"\" align=\"middle\"  allowFullScreen=\"false\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" />";
};
this.flash=function(o){
return "&nbsp;<embed src=\""+o.filename+"\" type=\"application/x-shockwave-flash\" "+"width=\""+(o.width||"320")+"\" height=\""+(o.height||"240")+"\" allowFullScreen=\"true\" wmode=\""+(o.wmode||"transparent")+"\" allowNetworking=\""+(o.allowNetworking||"all")+"\" allowScriptAccess=\""+(o.allowScriptAccess||"sameDomain")+"\" flashvars=\""+o.flashVars+"\"></embed>";
};
});
object.add("XN.form","sys, XN, XN.event, XN.json, XN.array, XN.element, XN.string, XN.env",function(_694,sys,XN){
this.fillWithJSON=function(form,json){
form=XN.element.$(form);
_694.fillWithArray(form,XN.json.parse(json));
};
this.fillWithArray=function(form,a){
form=XN.element.$(form);
for(var p in a){
_694.Element.setValue(p,a[p],form);
}
};
this.setValue=function(_695,_696){
return _694.Element.setValue(_695,_696);
};
this.getValue=function(_697){
return _694.Element.getValue(_697);
};
this.serialize=function(form,type){
return _694.serializeElements(_694.getElements(form),type||"string");
};
this.serializeElements=function(_698,type,_699){
type=type||"array";
if(XN.isUndefined(_699)){
_699=false;
}
var data=[],_69a,_69b;
XN.array.each(_698,function(i,v){
if(!v.disabled&&v.name){
_69a=v.name;
_69b=_699?encodeURIComponent(_694.Element.getValue(v)):_694.Element.getValue(v);
if(_69b!==null){
if(_69a in data){
if(!XN.isArray(data[_69a])){
data[_69a]=[data[_69a]];
}
data[_69a].push(_69b);
}else{
data[_69a]=_69b;
}
}
}
});
if(type=="array"){
return data;
}else{
if(type=="string"){
return XN.array.toQueryString(data);
}else{
if(type=="hash"){
var tmp={};
for(var p in data){
if(!XN.isFunction(data[p])){
tmp[p]=data[p];
}
}
return tmp;
}
}
}
};
this.getElements=function(form){
form=XN.element.$(form);
var _69c=[];
var all=form.getElementsByTagName("*");
XN.array.each(all,function(i,v){
if(!XN.isUndefined(_694.Element.Serializers[v.tagName.toLowerCase()])){
_69c.push(v);
}
});
return _69c;
};
this.Element={getValue:function(_69d){
_69d=XN.element.$(_69d);
var _69e=_69d.tagName.toLowerCase();
return _694.Element.Serializers[_69e](_69d);
},setValue:function(_69f,_6a0,form){
if(form){
_69f=form[_69f];
if((XN.isElement(_69f)&&_69f.tagName.toLowerCase()=="select")){
_694.Element.Serializers["select"](_69f,_6a0);
}else{
if(XN.isElement(_69f)){
_694.Element.Serializers[_69f.tagName.toLowerCase()](_69f,_6a0);
}else{
if(_69f[0]){
var _6a1=_69f[0].tagName.toLowerCase();
for(var i=0,j=_69f.length;i<j;i++){
_694.Element.Serializers[_6a1](_69f[i],(_6a0[i]||_6a0||""));
}
}
}
}
return _69f;
}else{
_69f=XN.element.$(_69f);
var _6a1=_69f.tagName.toLowerCase();
_694.Element.Serializers[_6a1](_69f,_6a0);
return _69f;
}
}};
this.Element.Serializers={input:function(_6a2,_6a3){
switch(_6a2.type.toLowerCase()){
case "checkbox":
case "radio":
return _694.Element.Serializers.inputSelector(_6a2,_6a3);
default:
return _694.Element.Serializers.textarea(_6a2,_6a3);
}
},inputSelector:function(_6a4,_6a5){
if(XN.isUndefined(_6a5)){
return _6a4.checked?_6a4.value:null;
}else{
_6a4.checked=!!_6a5;
}
},textarea:function(_6a6,_6a7){
if(XN.isUndefined(_6a7)){
return _6a6.value;
}else{
_6a6.value=_6a7;
}
},select:function(_6a8,_6a9){
if(XN.isUndefined(_6a9)){
return this[_6a8.type=="select-one"?"selectOne":"selectMany"](_6a8);
}else{
var opt,_6aa,_6ab=!XN.isArray(_6a9);
for(var i=0,_6ac=_6a8.length;i<_6ac;i++){
opt=_6a8.options[i];
_6aa=this.optionValue(opt);
if(_6ab){
if(_6aa==_6a9){
opt.selected=true;
return;
}
}else{
opt.selected=XN.array.include(_6a9,_6aa);
}
}
}
},selectOne:function(_6ad){
var _6ae=_6ad.selectedIndex;
return _6ae>=0?this.optionValue(_6ad.options[_6ae]):null;
},selectMany:function(_6af){
var _6b0=[],_6b1=_6af.length;
if(!_6b1){
return null;
}
for(var i=0;i<_6b1;i++){
var opt=_6af.options[i];
if(opt.selected){
_6b0.push(this.optionValue(opt));
}
}
return _6b0;
},optionValue:function(opt){
return opt.value||opt.text;
}};
$F=function(id,type){
var el=XN.element.$(id);
if(el.tagName.toLowerCase()=="form"){
return _694.serialize(el,type);
}else{
return _694.getValue(el);
}
};
this._helper=function(el){
el=XN.element.$(el);
try{
if(el._helper){
return el._helper;
}
}
catch(e){
console.log(arguments.callee.caller);
}
el._helper=this;
this.element=el;
};
this._helper.prototype={maxSize:9999,limit:function(max,cut){
var This=this;
this.maxLength=max;
if(XN.isUndefined(cut)){
cut=true;
}
this._limit_cut=cut;
if(this._limit){
return this;
}
this._limit=true;
var el=this.element;
XN.event.addEvent(el,"focus",_6b2);
XN.event.addEvent(el,"keyup",_6b2);
function _6b2(){
This.limitCheck();
};
return this;
},limitCheck:function(){
var This=this;
var el=this.element;
setTimeout(function(){
var v=el.value;
if(v.length>This.maxLength){
if(This._limit_cut){
el.value=v.substr(0,This.maxLength);
}
This.fireEvent("overmaxLength");
}else{
This.fireEvent("normalLength");
}
This.fireEvent("checkover");
},0);
},count:function(show,_6b3){
if(this._count){
return this;
}
this._count=true;
var This=this,show=XN.element.$(show);
if(XN.isUndefined(_6b3)){
_6b3=true;
}
if(!this.maxLength){
_6b3=false;
}
var el=this.element;
this.addEvent("overmaxLength",function(){
show.addClass("full");
});
this.addEvent("normalLength",function(){
show.delClass("full");
});
this.addEvent("checkover",_6b4);
function _6b4(){
show.innerHTML=el.value.length+(_6b3?"/"+This.maxLength:"");
};
return this;
},countSize:function(show,max,_6b5){
return this.limit(max).count(show,_6b5);
},getRealValue:function(){
var el=this.element;
if(el.value==this._defaultValue||el.value==el.getAttribute("placeholder")){
return "";
}
return el.value;
},reloadDefaultValue:function(){
this.element.value=this._defaultValue;
this.element.style.color="#888";
},defaultValue:function(v){
var This=this;
var el=this.element;
v=v||el.value;
if(!XN.isUndefined(this._defaultValue)&&el.value==this._defaultValue){
el.value=v;
}
this._defaultValue=v;
if(this._default){
return this;
}
this._default=true;
if(document.activeElement!==el){
el.value=v;
}
el.style.color="#888";
XN.event.addEvent(el,"focus",function(){
if(el.value==This._defaultValue){
el.value="";
el.style.color="#333";
}
});
XN.event.addEvent(el,"blur",function(){
if(el.value==""){
el.value=This._defaultValue;
el.style.color="#888";
}
});
return this;
},focus:function(_6b6){
var el=this.element;
if(XN.isUndefined(_6b6)){
_6b6=el.value.length;
}
try{
if(el.setSelectionRange){
el.focus();
el.setSelectionRange(el.value.length,_6b6);
}else{
if(el.createTextRange){
var _6b7=el.createTextRange();
_6b7.moveStart("character",_6b6);
_6b7.collapse(true);
_6b7.select();
el.focus();
}else{
el.focus();
}
}
}
catch(e){
}
return this;
},onEnter:function(_6b8){
var el=this.element;
var _6b9=el.tagName.toLowerCase()=="textarea";
XN.event.addEvent(el,"keydown",function(e){
e=e||window.event;
if(e.keyCode==13){
if(_6b9&&!e.ctrlKey){
return false;
}
XN.event.stop(e);
_6b8(el);
return false;
}
},false);
return this;
},onEsc:function(_6ba){
var el=this.element;
XN.event.addEvent(el,"keydown",function(e){
e=e||window.event;
if(e.keyCode==27){
XN.event.stop(e);
_6ba(el);
return false;
}
},false);
return this;
},autoResize:function(min,max){
var This=this,el=this.element,type;
this.minSize=min||this.minSize;
this.maxSize=max||this.maxSize;
if(el.tagName.toLowerCase()=="textarea"){
this.resizeType="height";
}else{
this.resizeType="width";
}
if(!_694.inputShadow){
var d=XN.element.$element("div");
d.setStyle("position:absolute;left:-99999px;top:-99999px");
document.body.appendChild(d);
_694.inputShadow=d;
}
this.shadow=_694.inputShadow;
setTimeout(function(){
if(min){
return;
}
This.minSize=type=="width"?el.offsetWidth:el.offsetHeight;
},10);
el.style.overflow="hidden";
XN.event.addEvent(el,"focus",function(){
This.timer=setInterval(This._resize.bind(This),200);
});
XN.event.addEvent(el,"blur",function(){
clearInterval(This.timer);
This.timer=null;
});
return this;
},_resize:function(){
var el=this.element,sh=this.shadow,oh,type=this.resizeType;
sh.style.fontSize=el.getStyle("fontSize");
var fs=parseInt(el.getStyle("fontSize"),0);
sh.style.fontFamily=el.getStyle("fontFamily");
(type=="width")?sh.style.height=el.offsetHeight:sh.style.width=el.offsetWidth;
sh.innerHTML=XN.string.escapeHTML(el.value).replace(/\r\n/mg,"<br>").replace(/\r/mg,"<br>").replace(/\n/mg,"<br>");
(type=="width")?oh=sh.offsetWidth:oh=sh.offsetHeight+fs+3;
if(oh>this.minSize&&oh<this.maxSize){
el.style[type]=oh+"px";
}else{
if(oh<this.minSize){
el.style[type]=this.minSize+"px";
}else{
if(oh>this.maxSize){
el.style[type]=this.maxSize+"px";
}
}
}
},cursorPosition:function(){
var _6bb=this.element;
var _6bc=0,end=0;
try{
if(typeof (_6bb.selectionStart)=="number"){
_6bc=_6bb.selectionStart;
end=_6bb.selectionEnd;
}else{
if(document.selection){
var _6bd=document.selection.createRange();
if(_6bd.parentElement()==_6bb){
var _6be=document.body.createTextRange();
_6be.moveToElementText(_6bb);
for(_6bc=0;_6be.compareEndPoints("StartToStart",_6bd)<0;_6bc++){
_6be.moveStart("character",1);
}
for(var i=0;i<=_6bc;i++){
if(_6bb.value.charAt(i)=="\n"){
_6bc++;
}
}
var _6be=document.body.createTextRange();
_6be.moveToElementText(_6bb);
for(end=0;_6be.compareEndPoints("StartToEnd",_6bd)<0;end++){
_6be.moveStart("character",1);
}
for(var i=0;i<=end;i++){
if(_6bb.value.charAt(i)=="\n"){
end++;
}
}
}
}
}
}
catch(e){
}
return {"start":_6bc,"end":end,"item":[_6bc,end]};
}};
this._helper.prototype.setDefaultValue=this._helper.prototype.defaultValue;
XN.event.enableCustomEvent(this._helper.prototype);
this.help=function(id){
return new _694._helper(id);
};
this.inputHelper=this.textAreaHelper=this.help;
$CursorPosition=function(el){
return _694.help(el).cursorPosition();
};
this.userInfoAutoComplete=function(id,type){
var _6bf=sys.modules["XN.ui"];
if(_6bf){
return _6bf.userInfoAutoComplete(id,type);
}else{
throw new Error("请在use中导入XN.ui模块，才可使用XN.form下的此方法");
}
};
});
object.add("XN.effect","XN.func, XN.element, XN.event",function(_6c0,XN){
this.fadeIn=function(_6c1,_6c2){
if(_6c1.fadetimer){
return;
}
_6c2=_6c2||XN.func.empty;
var op=0;
_6c1.setOpacity(0);
_6c1.style.display="";
_6c1.fadetimer=setInterval(function(){
XN.element.setOpacity(_6c1,(op+=0.2));
if(op>=1){
clearInterval(_6c1.fadetimer);
_6c1.fadetimer=null;
_6c2(_6c1);
}
},60);
};
this.fadeOut=function(_6c3,_6c4){
if(_6c3.fadetimer){
return;
}
_6c4=_6c4||XN.func.empty;
var op=1;
_6c3.setOpacity(1);
_6c3.fadetimer=setInterval(function(){
XN.element.setOpacity(_6c3,(op-=0.2));
if(op<=0){
clearInterval(_6c3.fadetimer);
_6c3.fadetimer=null;
_6c4(_6c3);
_6c3.setOpacity(1);
}
},60);
};
this.gradient=function(_6c5,r,g,b,_6c6){
if(_6c5.gradientTimer){
return;
}
_6c6=_6c6||XN.func.empty;
_6c5.style.backgroundColor="#fff";
_6c5.style.backgroundColor="rgb("+r+","+g+","+b+")";
_6c5.gradientTimer=setInterval(function(){
b+=10;
_6c5.style.backgroundColor="rgb("+r+","+g+","+(b>255?255:b)+")";
if(b>255){
clearInterval(_6c5.gradientTimer);
_6c5.gradientTimer=null;
_6c6(_6c5);
}
},60);
};
this.slideOpen=function(_6c7){
if(_6c7.slidetimer){
return;
}
if(!_6c7.slideHeight){
var _6c8=_6c7.getStyle("position");
_6c7.setStyle("position:absolute;left:-99999px;top:-99999px;");
_6c7.show();
_6c7.slideHeight=_6c7.offsetHeight;
_6c7.hide();
_6c7.setStyle("position:"+_6c8+";left:auto;top:auto;");
}
var eh=_6c7.slideHeight,h=0;
var step=parseInt(eh/10);
_6c7.style.height="0px";
_6c7.style.display="";
_6c7.style.overflow="hidden";
_6c7.slidetimer=setInterval(function(){
_6c7.style.height=(h+=step)+"px";
if(h>=eh){
clearInterval(_6c7.slidetimer);
_6c7.slidetimer=null;
_6c7.style.height=eh;
_6c7.style.overflow=_6c7.slideOverflow;
}
},50);
};
this.slideClose=function(_6c9){
if(_6c9.slidetimer){
return;
}
var eh=_6c9.offsetHeight,h=eh;
_6c9.slideHeight=eh;
_6c9.slideOverflow=_6c9.getStyle("overflow");
_6c9.style.overflow="hidden";
var step=parseInt(eh/10);
_6c9.slidetimer=setInterval(function(){
_6c9.style.height=(h-=step)+"px";
if(h<=0){
clearInterval(_6c9.slidetimer);
_6c9.slidetimer=null;
_6c9.style.display="none";
_6c9.style.height=eh;
_6c9.style.overflow=_6c9.slideOverflow;
}
},50);
};
this.scrollTo=function(_6ca,_6cb,_6cc){
if(_6ca.scrolltimer){
return;
}
_6cb=_6cb||10;
_6cc=_6cc||XN.func.empty;
var d=_6ca.realTop();
var i=XN.event.winHeight();
var h=document.body.scrollHeight;
var a=XN.event.scrollTop();
var _6cd=null;
if(d>a){
if(d+_6ca.offsetHeight<i+a){
return;
}
_6ca.scrolltimer=setInterval(function(){
a+=Math.ceil((d-a)/_6cb)||1;
window.scrollTo(0,a);
if(a==d){
clearInterval(_6ca.scrolltimer);
_6ca.scrolltimer=null;
}
},10);
}else{
_6ca.scrolltimer=setInterval(function(){
a+=Math.ceil((d-a)/_6cb)||-1;
window.scrollTo(0,a);
if(a==d){
clearInterval(_6ca.scrolltimer);
_6ca.scrolltimer=null;
}
},10);
}
};
(function(_6ce){
var _6cf={linear:function(t,b,c,d){
return c*t/d+b;
},easeIn:function(t,b,c,d){
return c*(t/=d)*t+b;
},easeOut:function(t,b,c,d){
return -c*(t/=d)*(t-2)+b;
},easeBoth:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t+b;
}
return -c/2*((--t)*(t-2)-1)+b;
},easeInStrong:function(t,b,c,d){
return c*(t/=d)*t*t*t+b;
},easeOutStrong:function(t,b,c,d){
return -c*((t=t/d-1)*t*t*t-1)+b;
},easeBothStrong:function(t,b,c,d){
if((t/=d/2)<1){
return c/2*t*t*t*t+b;
}
return -c/2*((t-=2)*t*t*t-2)+b;
},backIn:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*(t/=d)*t*((s+1)*t-s)+b;
},backOut:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;
},backBoth:function(t,b,c,d,s){
if(typeof s=="undefined"){
s=1.70158;
}
if((t/=d/2)<1){
return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;
}
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;
},bounceIn:function(t,b,c,d){
return c-_6cf["bounceOut"](d-t,0,c,d)+b;
},bounceOut:function(t,b,c,d){
if((t/=d)<(1/2.75)){
return c*(7.5625*t*t)+b;
}else{
if(t<(2/2.75)){
return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b;
}else{
if(t<(2.5/2.75)){
return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b;
}
}
}
return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b;
},bounceBoth:function(t,b,c,d){
if(t<d/2){
return _6cf["bounceIn"](t*2,0,c,d)*0.5+b;
}
return _6cf["bounceOut"](t*2-d,0,c,d)*0.5+c*0.5+b;
}};
var _6d0=function(){
_6d1(this.onTweening,this);
if(this.current>=this.frames){
this.stop();
_6d1(this.onComplete,this);
this.tweening=false;
return;
}
this.current++;
};
var _6d1=function(func,_6d2){
var args=Array.prototype.slice.call(arguments);
args=args.slice(2);
if(typeof func=="function"){
try{
return func.apply(_6d2||this,args);
}
catch(e){
_6d2.errors=_6d2.errors||[];
_6d2.errors.push(e);
}
}
};
_6ce.Motion=function(_6d3,_6d4){
this.duration=_6d4||1000;
this.tween=_6d3||"linear";
};
_6ce.Motion.getTweens=function(){
return _6cf;
};
_6ce.Motion.prototype={init:function(){
_6d1(this.onInit,this);
this.fps=this.fps||35;
this.frames=Math.ceil((this.duration/1000)*this.fps);
if(this.frames<1){
this.frames=1;
}
var f=("function"==typeof this.tween)?this.tween:_6cf[this.tween]||_6cf["linear"];
this.equation=function(from,to){
return f((this.current/this.frames)*this.duration,from,to-from,this.duration);
};
this.current=this.tweening=1;
},start:function(){
this.init();
_6d1(this.onStart,this);
var _6d5=this,d=this.duration/this.frames;
this.timer=setInterval(function(){
_6d0.call(_6d5);
},d);
},stop:function(){
if(this.timer){
clearInterval(this.timer);
}
this.tweening=false;
}};
})(_6c0);
});
object.add("XN.ui","XN, XN.array, XN.element, XN.event, XN.browser, XN.util, XN.dom, XN.func, XN.string, XN.env, XN.net, XN.json, XN.form, XN.datasource",function(_6d6,XN){
(function(){
_6d6.element={frame:null,iAmUIelement:true};
XN.array.each(["addClass","delClass","show","hide","remove"],function(i,v){
_6d6.element[v]=function(){
XN.element[v].apply(null,[this.frame].concat(XN.array.build(arguments)));
};
});
_6d6.container={container:null};
XN.array.each(["addChild","delChild","setContent"],function(i,v){
_6d6.container[v]=function(){
XN.element[v].apply(null,[this.container].concat(XN.array.build(arguments)));
};
});
XN.$extend(_6d6.container,_6d6.element);
})();
this.Element=this.element;
this.Content=this.container;
(function(ns){
var UI=_6d6;
var _6d7=XN.event.addEvent;
var _6d8=true;
function log(s){
if(_6d8){
XN.log(XN.isString(s)?"xn.ui.button:"+s:s);
}
};
ns.button=function(_6d9){
XN.$extend(this,_6d9);
this.init();
};
ns.button.prototype=XN.$extend({},UI.Element);
ns.button.prototype.text=null;
ns.button.prototype.className="";
ns.button.prototype.disableClassName="gray";
ns.button.prototype.init=function(){
var This=this;
var el;
if(this.getConfig("el")){
el=XN.element.$(this.getConfig("el"));
}else{
el=XN.element.$element("input");
}
this.frame=el;
el.type="button";
this.addClass("input-submit");
this.addClass(this.getConfig("className"));
this.setText(this.getConfig("text"));
_6d7(el,"click",function(e){
if(This.onclick){
This.onclick(e);
}
},false);
};
ns.button.prototype.getConfig=function(key){
if(key=="el"){
return this.id;
}
return this[key];
};
ns.button.prototype.getEl=function(){
return this.frame;
};
ns.button.prototype.setText=function(text){
this.text=text;
this.getEl().value=text;
};
ns.button.prototype.disable=function(){
var el=this.getEl();
el.blur();
el.disabled=true;
el.addClass(this.getConfig("disableClassName"));
};
ns.button.prototype.enable=function(){
var el=this.getEl();
el.disabled=false;
el.delClass(this.getConfig("disableClassName"));
};
ns.button.prototype.focus=function(){
this.getEl().focus();
};
ns.button.prototype.blur=function(){
this.getEl().blur();
};
})(this);
(function(){
var rl="realLeft",rt="realTop",ow="offsetWidth",oh="offsetHeight";
_6d6.fixPositionMethods={"1-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"1-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"1-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"1-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"2-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"2-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+"px";
},"2-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"2-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()-f[oh]+"px";
},"3-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"3-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()+el[oh]+"px";
},"3-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"3-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+el[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"4-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"4-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]+"px";
},"4-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()-f[ow]+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
},"4-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-p[rl]()+"px";
f.style.top=y+el[rt]()-p[rt]()+el[oh]-f[oh]+"px";
}};
})();
this.fixPositionElement=function(_6da){
var This=this;
this.config={tagName:"div",useIframeInIE6:true};
XN.$extend(this.config,_6da);
var f,x,y;
if(this.getConfig("id")){
this.frame=f=XN.element.$(this.getConfig("id"));
x=f.realLeft();
y=f.realTop();
}else{
if(this.getConfig("tagName")){
this.frame=this.container=f=XN.element.$element(this.getConfig("tagName"));
}else{
return;
}
}
this.container=XN.element.$element("div");
this.frame.appendChild(this.container);
XN.array.each(["alignWith","alignType","offsetX","offsetY","alignParent"],function(i,v){
This[v]=This.getConfig(v)||This[v];
});
XN.element.setStyle(f,"position:absolute;z-index:10001;left:-9999px;top:-9999px");
if(!XN.element.$(this.alignParent)){
this.alignParent=XN.element.$(document.body);
}
XN.element.$(this.alignParent).appendChild(this.frame);
if((XN.browser.IE6&&this.getConfig("useIframeInIE6"))||this.getConfig("addIframe")){
var _6db;
this._iframe=_6db=XN.element.$element("iframe");
_6db.frameBorder=0;
_6db.scrolling="no";
_6db.setStyle("position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
if(XN.browser.Gecko){
_6db.setAttribute("style","position:absolute;border:0px;left:0px;top:0px;z-index:-1;");
}
if(XN.browser.IE){
_6db.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)";
}
this.frame.appendChild(_6db);
}
if(XN.element.visible(f)){
this.show();
}
f.style.display="block";
};
this.fixPositionElement.prototype=XN.$extend({},this.container);
XN.$extend(this.fixPositionElement.prototype,{alignWith:null,alignType:"4-1",offsetX:0,offsetY:0,alignParent:"dropmenuHolder",left:null,top:null,_isShow:false,getConfig:function(key){
return this.config[key];
},setOffsetX:function(x){
this.offsetX=x;
this.refresh();
return this;
},setOffsetY:function(y){
this.offsetY=y;
this.refresh();
return this;
},setAlignType:function(t){
this.alignType=t;
this.refresh();
return this;
},setAlignParent:function(p){
this.alignParent=p;
XN.element.$(this.alignParent).appendChild(this.frame);
this.refresh();
return this;
},refresh:function(){
if(this.visible()){
this.show();
}else{
this.hide();
}
return this;
},visible:function(){
return this._isShow;
},show:function(){
this._isShow=true;
this.frame.show();
if(this.alignWith){
this._moveToElement(this.alignWith);
}else{
var x=this.left===null?parseInt(((XN.element.$(this.alignParent).offsetWidth-this.frame.offsetWidth)/2),10):this.left;
var y=this.top===null?XN.event.scrollTop()+200:this.top;
this._moveToPosition(x,y);
}
if(this._iframe){
try{
this._iframe.style.height=this.frame.offsetHeight-2+"px";
this._iframe.style.width=this.frame.offsetWidth+"px";
}
catch(e){
}
}
return this;
},hide:function(){
this._isShow=false;
var f=this.frame;
f.style.left="-9999px";
f.style.top="-9999px";
return this;
},moveTo:function(x,y){
if(!x&&!y){
return;
}
if(XN.isNumber(x)){
this.left=x;
this.alignWith=null;
}else{
if(XN.isString(x)||XN.isElement(x)){
this.alignWith=XN.element.$(x);
}
}
if(XN.isNumber(y)){
this.top=y;
this.alignWith=null;
}
this.refresh();
return this;
},setX:function(x){
this.moveTo(x);
return this;
},setY:function(y){
this.moveTo(null,y);
return this;
},setIndex:function(i){
this.frame.style.zIndex=i;
return this;
},_moveToElement:function(el){
_6d6.fixPositionMethods[this.alignType](this.frame,XN.element.$(el),this.offsetX,this.offsetY,XN.element.$(this.alignParent));
},_moveToPosition:function(x,y){
if(x){
this.frame.style.left=x+"px";
}
if(y){
this.frame.style.top=y+"px";
}
}});
(function(){
var _6dc=_6d6.fixPositionElement.prototype;
var _6dd=XN.event;
var _6de=null;
_6d6.clearDialog=function(){
if(_6de&&_6de.parent){
_6de.remove();
}
};
_6d6.dialog=function(_6df){
var This=this;
_6de=this;
_6d6.fixPositionElement.call(this,_6df);
this.container=XN.element.$element("div");
this.frame.appendChild(this.container);
if(this.getConfig("HTML")){
this.setContent(this.getConfig("HTML"));
}else{
this.setContent(this.buildHTML());
}
this.dialogContainer=XN.element.$("ui_dialog_container");
this.header=this.title=XN.element.$("ui_dialog_header");
this.body=this.msg=this.message=XN.element.$("ui_dialog_body");
this.footer=XN.element.$("ui_dialog_footer");
this.closeButton=XN.element.$("ui_dialog_close");
this.header.addChild=this.body.addChild=this.footer.addChild=function(s){
XN.element.addChild(this,s);
setTimeout(function(){
This.refresh();
},0);
};
this.dialogContainer.removeAttribute("id");
this.header.removeAttribute("id");
this.body.removeAttribute("id");
this.footer.removeAttribute("id");
this.closeButton.removeAttribute("id");
if(this.getConfig("showCloseButton")){
this.closeButton.show();
XN.event.addEvent(this.closeButton,"click",function(e){
This.hide();
This.fireEvent("close",e);
});
}
this.frame.style.zIndex=10000;
this.setWidth(this.getConfig("width")||400);
if(this.getConfig("height")){
this.setHeight(this.getConfig("height"));
}
XN.array.each(["title","msg","message","header","body","footer"],function(i,v){
if(This.getConfig(v)){
This[v].setContent(This.getConfig(v));
}
});
if(this.getConfig("type")){
this.setType(this.getConfig("type"));
}
this._buttons=[];
XN.event.addEvent(this.footer,"click",function(e){
This._parseButtonEvent(e||window.event);
});
XN.util.hotKey.add("27",this._hotKeyEvent,this);
if(this.getConfig("modal")===true){
XN.dom.disable();
}
if(this.getConfig("noHeader")){
this.header.hide();
}
if(this.getConfig("noFooter")){
this.footer.hide();
}
if(this.getConfig("noPadding")){
this.body.addClass("no_padding");
}
};
_6d6.dialog.prototype=XN.$extend({},_6dc);
XN.$extend(_6d6.dialog.prototype,{header:null,body:null,footer:null,_iframe:null,_buttons:null,buildHTML:function(){
return ["<table id=\"ui_dialog_container\" style=\"width: 100%; height: 100%;\" class=\"pop_dialog_table\">","<tbody>","<tr>","<td class=\"pop_topleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_topright\"></td>","</tr>","<tr>","<td class=\"pop_border\"></td>","<td class=\"pop_content\">","<h2><span id=\"ui_dialog_header\"></span><a style=\"display:none;\" class=\"close-button\" id=\"ui_dialog_close\" href=\"#nogo\" onclick=\"return false;\">关闭</a></h2>","<div class=\"dialog_content\">","<div id=\"ui_dialog_body\" class=\"dialog_body\"></div>","<div id=\"ui_dialog_footer\" class=\"dialog_buttons\"></div>","</div>","</td>","<td class=\"pop_border\"></td>","</tr>","<tr>","<td class=\"pop_bottomleft\"></td>","<td class=\"pop_border\"></td>","<td class=\"pop_bottomright\"></td>","</tr>","</tbody>","</table>"].join("");
},getButton:function(text){
var _6e0=this._buttons;
for(var i=_6e0.length-1;i>=0;i--){
if(_6e0[i].text==text){
return _6e0[i];
}
}
return null;
},addButton:function(b){
var o={text:b.text,_onclickForDialog:b.onclick};
if(b.className){
o.className=b.className;
}
var _6e1=new _6d6.button(o);
_6e1.frame.setAttribute("dialog","1");
this._buttons.push(_6e1);
this.footer.addChild(_6e1);
return this;
},delButton:function(b){
if(XN.isString(b)){
b=this.getButton(b);
}
this.footer.delChild(b);
return this;
},_preventHide:false,preventHide:function(){
this._preventHide=true;
return this;
},setAutoHide:function(boo){
this._preventHide=!boo;
return this;
},_parseButtonEvent:function(e){
var el=_6dd.element(e);
if(el.tagName.toLowerCase()!=="input"||el.type!=="button"){
return;
}
if(!el.getAttribute("dialog")){
return;
}
var _6e2=this.getButton(el.value);
if(_6e2&&_6e2._onclickForDialog){
_6e2._onclickForDialog.call(this,e);
}
if(this._preventHide){
this._preventHide=true;
}else{
this.hide();
}
},_hotKeyEvent:function(){
this.hide();
},setType:function(t){
if(t=="normal"){
this.frame.delClass("errorDialog");
}else{
if(t=="error"){
this.frame.addClass("errorDialog");
}
}
return this;
},setWidth:function(w){
if(!w){
return this;
}
if(w=="auto"){
this.frame.style.width="auto";
this.dialogContainer.style.height="";
this.dialogContainer.style.width="";
this.width=this.frame.offsetWidth;
}else{
this.width=w;
this.frame.style.width=w+"px";
this.dialogContainer.style.height="100%";
this.dialogContainer.style.width="100%";
}
this.refresh();
return this;
},setHeight:function(h){
if(!h){
return this;
}
this.hegith=h;
this.frame.style.height=h+"px";
this.refresh();
return this;
},resizeTo:function(w,h){
this.setWidth(w);
this.setHeight(h);
return this;
},clear:function(){
this.header.setContent("");
this.body.setContent("");
this.footer.setContent("");
this._buttons=[];
return this;
},setTitle:function(s){
this.header.setContent(s);
return this;
},setBody:function(s){
this.body.setContent(s);
return this;
},remove:function(_6e3){
XN.util.hotKey.del("27",this._hotKeyEvent);
_6d6.element.remove.call(this);
if(!_6e3){
XN.dom.enable();
}
return this;
},refresh:function(){
if(this.visible()){
_6dc.show.apply(this,arguments);
}else{
this.hide();
}
return this;
},reLocate:function(){
var w=this.frame;
var s=XN.event.scrollTop();
var _6e4=(XN.event.winHeight()-w.offsetHeight)/2;
_6e4=(_6e4<=0)?s:_6e4+s;
w.style.top=_6e4+"px";
},show:function(){
this._clearHideTimer();
if(this.getConfig("modal")===true){
XN.dom.disable();
}
_6dc.show.apply(this,arguments);
this.fireEvent("show");
return this;
},hide:function(){
this._clearHideTimer();
_6dc.hide.apply(this,arguments);
XN.dom.enable();
this.fireEvent("hide");
return this;
},_hideTimer:null,_clearHideTimer:function(){
if(this._hideTimer){
clearTimeout(this._hideTimer);
this._hideTimer=null;
}
},autoHide:function(t){
var This=this;
this._hideTimer=setTimeout(function(){
This.hide();
},t*1000);
return this;
}});
XN.event.enableCustomEvent(_6d6.dialog.prototype);
})();
this.panel=this.dialog;
this.dialog.prototype.setHeader=function(h){
if(h&&h!==""){
this.header.addChild(h);
}else{
this.header.innerHTML="";
}
};
this.dialog.prototype.setFooter=function(f){
if(f&&f!==""){
this.footer.addChild(f);
}else{
this.footer.innerHTML="";
}
};
this.menu=function(_6e5){
var This=this;
this.config={alignType:"4-1",barOnshowClass:"",tagName:"div",disalbeButtonClickEvent:true,fireOn:"click",keep:0.2,useIframeInIE6:true,effectTime:50};
XN.$extend(this.config,_6e5);
var _6e6;
if(this.getConfig("text")){
this.frame=_6e6=XN.element.$element(this.getConfig("tagName"));
_6e6.setContent(this.getConfig("text"));
}else{
if(this.getConfig("button")){
this.frame=_6e6=XN.element.$(this.getConfig("button"));
}else{
return false;
}
}
this._alignType=this.getConfig("alignType");
if(this.getConfig("menu")){
XN.element.$(this.getConfig("menu")).hide();
this.menu=new _6d6.fixPositionElement({id:this.getConfig("menu"),alignType:this._alignType,alignWith:this.getConfig("alignWith")||this.frame,addIframe:this.getConfig("addIframe"),useIframeInIE6:this.getConfig("useIframeInIE6")});
this.container=this.menu.frame;
this._canAddSubMenu=false;
}else{
var dt=XN.element.$element("div");
dt.hide();
this.menu=new _6d6.fixPositionElement({id:dt,alignType:this._alignType,alignWith:this.getConfig("alignWith")||this.frame,addIframe:this.getConfig("addIframe"),useIframeInIE6:this.getConfig("useIframeInIE6")});
this.container=XN.element.$element("div");
this._menu.setContent(this.container);
}
this.menu.setIndex(10001);
XN.event.addEvent(this.menu.frame,"click",function(e){
e=e||window.event;
This._frameOnClick(e);
},false);
this.menu.setOffsetX(this.getConfig("offsetX")||0);
this.menu.setOffsetY(this.getConfig("offsetY")||0);
var _6e7=this.getConfig("event");
if(_6e7=="click"){
XN.event.addEvent(this.frame,"click",function(e){
This._buttonClick(e||window.event);
});
XN.event.addEvent(document,"click",function(e){
This._documentClick(e||window.event);
});
}else{
if(_6e7=="mouseover"){
XN.event.addEvent(this.frame,"mouseover",function(e){
This._frameMouseOver(e||window.event);
});
if(this.getConfig("disalbeButtonClickEvent")){
XN.event.addEvent(this.frame,"onclick",function(e){
XN.event.stop(e||window.event);
});
}
XN.event.addEvent(this.frame,"mouseleave",function(){
This._buttonMouseLeave();
});
XN.event.addEvent(this.menu.frame,"mouseleave",function(){
This._menuMouseLeave();
});
XN.event.addEvent(this.menu.frame,"mouseover",function(){
This._mouseOverMenu=true;
});
}else{
if(_6e7=="manual"){
}
}
}
XN.event.addEvent(window,"resize",function(){
This.menu.refresh();
});
this.hide();
};
this.menu.prototype=XN.$extend({},this.container);
XN.$extend(this.menu.prototype,{isShow:true,menu:null,_alignType:null,_button:null,_canAddSubMenu:true,_delayTimer:null,_mouseOverMenu:false,_mouseOverButton:false,_clearTimer:function(){
if(this._delayTimer){
clearTimeout(this._delayTimer);
this._delayTimer=null;
}
},_buttonClick:function(e){
XN.event.stop(e);
if(this.isShow){
this.hide();
}else{
this.show();
}
},_documentClick:function(e){
this.hide();
},_frameOnClick:function(e){
var This=this;
var el=XN.event.element(e);
var tag=el.tagName.toLowerCase();
if(tag=="a"){
return true;
}
if((tag=="input"&&(el.type=="radio"||el.type=="checkbox"))||tag=="label"){
this.isShow=false;
setTimeout(function(){
This.isShow=true;
},20);
return true;
}
while(el!=this.menu.frame&&el.tagName&&el.tagName.toLowerCase()!="a"){
el=el.parentNode;
}
if(el.tagName.toLowerCase()=="a"){
return true;
}
XN.event.stop(e);
},_frameMouseOver:function(e){
var This=this;
this._mouseOverButton=true;
this._clearTimer();
var _6e8=this.getConfig("delay");
if(_6e8){
this._delayTimer=setTimeout(function(){
if(This._mouseOverButton){
This.show();
}
},_6e8*1000);
}else{
This.show();
}
if(!this.getConfig("keepDefaultEvent")){
XN.event.stop(e);
}
},_buttonMouseLeave:function(){
var This=this;
this._mouseOverButton=false;
this._clearTimer();
setTimeout(function(){
if(!This._mouseOverMenu){
This.hide();
}
},this.getConfig("effectTime"));
},_menuMouseLeave:function(){
var This=this;
this._mouseOverMenu=false;
this._clearTimer();
setTimeout(function(){
if(!This._mouseOverButton){
This.hide();
}
},this.getConfig("effectTime"));
},getConfig:function(key){
var _6e9={"hoverClass":"barOnshowClass","event":"fireOn","button":"bar","delay":"keep"};
if(_6e9[key]){
return this.config[key]||this.config[_6e9[key]];
}
return this.config[key];
},show:function(){
if(this.isShow){
return this;
}
this.menu.show();
var _6ea=this.getConfig("hoverClass");
if(_6ea!=""){
this.frame.addClass(this.getConfig("hoverClass"));
}
this.onShow();
this.isShow=true;
return this;
},setWidth:function(w){
this.menu.frame.style.width=w+"px";
this.menu.refresh();
return this;
},hide:function(){
if(!this.isShow){
return this;
}
this.menu.hide();
this.frame.delClass(this.getConfig("hoverClass"));
this.isShow=false;
this.onHide();
return this;
},refresh:function(){
if(this.isShow){
this.menu.show();
}
return this;
},onShow:XN.func.empty,onHide:XN.func.empty});
XN.event.enableCustomEvent(this.menu.prototype);
this.autoComplete=function(p){
var This=this;
this.config=this.config||{};
XN.$extend(this.config,{inputTip:null,searchDelay:0.2,DS:null,enableCache:true,maxCache:10});
XN.$extend(this.config,p);
if(this.getConfig("enableCache")){
this.cache=new XN.util.cache({cacheLength:this.getConfig("maxCache")});
}
if(this.getConfig("input")){
var _6eb=this.input=XN.element.$(this.getConfig("input"));
}else{
var _6eb=this.input=XN.element.$element("input");
_6eb.type="text";
_6eb.addClass("input-text");
}
this.frame=_6eb;
XN.event.addEvent(_6eb,"focus",function(e){
This._startCheck();
This.fireEvent("focus");
});
XN.event.addEvent(_6eb,"blur",function(e){
This._endCheck();
This.fireEvent("blur");
});
this.addEvent("focus",function(){
var v=this.input.value;
if(v==""||v==this.getConfig("inputTip")){
this.fireEvent("noinput");
}
});
this.addEvent("blur",function(){
this._lastInput=null;
});
XN.event.addEvent(_6eb,"click",function(e){
XN.event.stop(e||window.event);
});
XN.event.addEvent(_6eb,"keydown",function(e){
This._userInput=true;
e=e||window.event;
if(e.keyCode==13){
XN.event.stop(e);
}
This.fireEvent("keydown",e);
});
_6eb.setAttribute("AutoComplete","off");
this.DS=this.getConfig("DS");
};
this.autoComplete.prototype=XN.$extend({},this.element);
XN.$extend(this.autoComplete.prototype,{input:null,cache:null,_userInput:false,_lastInput:null,getConfig:function(key){
if(key=="input"){
return this.config["input"]||this.config["id"];
}
return this.config[key];
},_startCheck:function(){
var This=this;
if(this._inputTimer){
clearInterval(this._inputTimer);
}
this._inputTimer=setInterval(function(){
if(This._userInput){
This._userInput=false;
return;
}
This._checkInput();
},this.getConfig("searchDelay")*1000);
},_endCheck:function(){
clearInterval(this._inputTimer);
this._inputTimer=null;
},_checkInput:function(){
var This=this;
var cv=this.input.value;
if(XN.string.isBlank(cv)){
if(this._lastInput===""){
return;
}
this._lastInput="";
this.fireEvent("noinput");
return;
}
if(cv==this._lastInput){
return;
}
this._lastInput=cv;
this.fireEvent("searchbegin");
if(this.cache){
var _6ec=this.cache.get(cv);
if(_6ec){
this.fireEvent("searchover",_6ec);
return;
}
}
if(!this.DS){
XN.log("no ds");
this.fireEvent("NO_DS");
return;
}
this.DS.query(cv,function(r){
if(This.cache){
This.cache.add(cv,r);
}
This.fireEvent("searchover",r);
});
}});
XN.event.enableCustomEvent(this.autoComplete.prototype);
(function(){
var _6ed={};
getCompleteMenu=function(id){
return _6ed[id];
};
getParentFromClass=function(_6ee,_6ef){
var _6f0=null;
while(_6ee.parentNode){
_6ee=_6ee.parentNode;
if(XN.element.hasClassName(_6ee,_6ef)){
_6f0=_6ee;
break;
}
}
return _6f0;
};
_6d6.autoCompleteMenu=function(p){
var This=this;
this._MID=XN.util.createObjID();
_6ed[this._MID]=this;
this.config=this.config||{};
XN.$extend(this.config,{ulClassName:"",liClassName:"",liHoverClass:"m-autosug-hover",aClassName:"",noResult:"没有匹配结果",dataLoading:"正在加载数据...",noInput:null,autoSelectFirst:false,noHighlightClass:"noHighlight"});
_6d6.autoComplete.call(this,p);
var _6f1=this.input;
var m=XN.element.$element("div");
m.innerHTML=this.getConfig("wrapper")||this._wrapper();
this._menuList=m.firstChild;
this._ul=this._menuList.getElementsByTagName("ul")[0];
this.menu=new _6d6.menu({button:_6f1,menu:this._menuList,fireOn:"manual"});
this.addEvent("keydown",this._inputOnkeydown);
XN.event.addEvent(this._ul,"mousedown",function(e){
This._menuOnclick(e||window.event);
},2);
XN.event.addEvent(_6f1,"blur",function(){
This.menu.hide();
});
this.menu.hide();
this.addEvent("noinput",function(){
var tip=this.getConfig("noInput");
if(!tip){
this.menu.hide();
return;
}
this._ul.innerHTML="<li>"+tip+"</li>";
this.menu.show();
});
this.addEvent("NO_DS",function(){
this._noDataShow();
});
this.addEvent("searchover",function(_6f2){
this._buildMenu(_6f2);
});
};
_6d6.autoCompleteMenu.prototype=XN.$extend({},_6d6.autoComplete.prototype);
XN.$extend(_6d6.autoCompleteMenu.prototype,{menu:null,_menuList:null,_ul:null,_currentLi:null,_highlightMenuItem:function(li){
if(li==this._currentLi){
return;
}
var _6f3=this.getConfig("liHoverClass");
if(this._currentLi!==null){
XN.element.delClass(this._currentLi,_6f3);
}
XN.element.addClass(li,_6f3);
this._currentLi=li;
var aid=this._currentLi.getAttribute("aid");
if(aid){
this.fireEvent("highlight",this.result[parseInt(aid)]);
}
},_checkOnlyOneNoHightlightEl:function(){
return (this._ul.lastChild==this._ul.firstChild&&XN.element.hasClassName(this._ul.firstChild,this.config.noHighlightClass));
},_inputOnkeydown:function(_6f4){
var li;
if(_6f4.keyCode==13){
if(this.menu.isShow&&this._currentLi){
var aid=this._currentLi.getAttribute("aid");
if(aid){
this._selectMenuItem(parseInt(aid));
}
}
return false;
}
if(_6f4.keyCode==38){
if(this._checkOnlyOneNoHightlightEl()){
return;
}
if(this._currentLi&&this._currentLi.previousSibling){
li=this._currentLi.previousSibling;
}else{
li=this._ul.lastChild;
}
while(XN.element.hasClassName(li,this.config.noHighlightClass)){
if(li.previousSibling){
li=li.previousSibling;
}else{
li=this._ul.lastChild;
}
}
this._highlightMenuItem(li);
return false;
}
if(_6f4.keyCode==40){
if(this._checkOnlyOneNoHightlightEl()){
return;
}
if(this._currentLi&&this._currentLi.nextSibling){
li=this._currentLi.nextSibling;
}else{
li=this._ul.firstChild;
}
while(XN.element.hasClassName(li,this.config.noHighlightClass)){
if(li.nextSibling){
li=li.nextSibling;
}else{
li=this._ul.firstChild;
}
}
this._highlightMenuItem(li);
return false;
}
return true;
},_menuOnclick:function(_6f5){
var el=XN.event.element(_6f5);
while(el&&el.tagName&&el.tagName.toLowerCase()!=="li"){
el=el.parentNode;
}
if(!el||el.nodeType!==1||!el.getAttribute("aid")){
return false;
}
this._selectMenuItem(parseInt(el.getAttribute("aid")));
return false;
},_menuOnmouseover:function(_6f6){
var el=XN.event.element(_6f6);
if(el.parentNode==XN.element.$("dropmenuHolder")){
return;
}
while(el&&el.tagName&&el.tagName.toLowerCase()!=="li"){
el=el.parentNode;
}
if(!el||el.nodeType!==1||!el.getAttribute("aid")){
return false;
}
this._highlightMenuItem(el);
return false;
},_selectMenuItem:function(id){
this.menu.hide();
if(!getParentFromClass(this._menuList,"feed-comment-attach")){
this.input.focus();
}
this.fireEvent("select",this.result[id]);
this._lastInput=this.input.value;
},_buildMenu:function(_6f7){
var This=this;
this.result=_6f7;
if(_6f7.length>0){
this.fireEvent("hasResult");
}
if(_6f7.length==0){
this.fireEvent("noResult");
var _6f8=this.getConfig("noResult");
if(XN.isFunction(_6f8)){
_6f8=_6f8.call(this);
}
this._ul.innerHTML="<li>"+_6f8+"</li>";
this.menu.show();
this._currentLi=null;
return;
}
var lis=[];
lis.push(this.firstMenuItem());
var len=_6f7.length-1;
XN.array.each(_6f7,function(i,v){
lis.push("<li onmouseover=\"getCompleteMenu("+This._MID+")._highlightMenuItem(this);\" aid=\""+i+"\">"+This.buildMenu(v)+"</li>");
});
lis.push(this.lastMenuItem());
this._ul.innerHTML=lis.join("");
if(this.getConfig("autoSelectFirst")){
this._highlightMenuItem(this._ul.firstChild);
}
this.menu.show();
},_noDataShow:function(){
var tip=this.getConfig("dataLoading");
this._ul.innerHTML="<li>"+tip+"</li>";
this.menu.show();
},firstMenuItem:function(){
return "";
},lastMenuItem:function(){
return "";
},buildMenu:function(r){
return "<li>"+r.name+"</li>";
},setMenuWidth:function(w){
this.menu.setWidth(w);
},getCurrentItem:function(){
return this._currentLi;
},setCurrentItem:function(item){
this._currentLi=item;
}});
_6d6.autoCompleteMenu.prototype._wrapper=function(){
return ["<div class=\"m-autosug\">","<span class=\"x1\">","<span class=\"x1a\"></span>","</span>","<span class=\"x2\">","<span class=\"x2a\"></span>","</span>","<div class=\"m-autosug-minwidth\">","<div class=\"m-autosug-content\">","<ul></ul>","</div>","</div>","</div>"].join("");
};
})();
this.friendSelector=function(_6f9){
var This=this;
this.config=this.config||{};
XN.$extend(this.config,{getFriendsUrl:"http://browse."+XN.env.domain+"/getfriendsajax.do?s=1",url:"http://sg."+XN.env.domain+"/s/f",aurl:"http://friend."+XN.env.domain+"/friendsSelector.do",param:{}});
if(this.config.url.indexOf("sg.renren.com/s/m")!=-1){
this.config.aurl="http://friend."+XN.env.domain+"/friendSelectorForVip";
}
XN.$extend(this.config,_6f9.params);
if(XN.isUndefined(this.getConfig("page"))){
this.config["page"]=false;
}
_6d6.autoCompleteMenu.call(this,_6f9);
this.addEvent("select",function(r){
this.input.value=r.name;
if(this.onSelectOne){
this.onSelectOne(r);
}
});
this.buildMenu=function(r){
return r.name;
};
this.addEvent("focus",function(){
if(this._ready){
return;
}
if(this._isLoading){
return;
}
this.loadFriends();
});
};
this.friendSelector.prototype=XN.$extend({},this.autoCompleteMenu.prototype);
XN.$extend(this.friendSelector.prototype,{_isLoading:false,_ready:false,isReady:function(){
return this._ready;
},isLoading:function(){
return this._isLoading;
},loadFriends:function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var This=this;
var p={};
p["init"]=true;
p["uid"]=false;
p["uhead"]=false;
p["uname"]=false;
p["group"]=false;
p["net"]=false;
p["param"]=this.getConfig("param");
p["page"]=this.getConfig("page");
new XN.net.xmlhttp({useCache:true,url:this.getConfig("aurl"),method:"get",data:"p="+XN.json.build(p),onSuccess:function(r){
r=XN.json.parse(r.responseText);
This._onload(r);
}});
},_onload:function(r){
this.isLoading=false;
this._ready=true;
this.config.qkey=r.qkey;
this.DS=new XN.util.DS_friends({url:this.getConfig("url"),qkey:this.getConfig("qkey"),limit:this.getConfig("limit"),page:this.getConfig("page"),param:this.getConfig("param")});
this.DS.query=function(v,_6fa){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function _6fb(r){
r=r.responseText;
var pp;
try{
var rt=XN.JSON.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_6fa(pp);
};
var _6fc=XN.json.parse(this.param);
_6fc.q=v;
this.limit&&(_6fc.l=this.limit);
_6fc.friendId&&(_6fc.friend=_6fc.friendId);
var _6fd=[];
for(var key in _6fc){
_6fd.push(key+"="+encodeURIComponent(_6fc[key]));
}
this._request=new XN.net.xmlhttp({url:this.url,data:_6fd.join("&"),method:this.method,onSuccess:_6fb});
};
}});
this.friendSelectorSynchronous=function(a,b){
function s(id,ac,v){
if(XN.isObject(id)){
id=id.id;
}
if(v.isReady()){
try{
v[ac](id);
}
catch(e){
}
}else{
v.addEvent("load",function(){
try{
v[ac](id);
}
catch(e){
}
});
v.loadFriends();
}
};
a.addEvent("select",function(id){
s(id,"select",b);
});
a.addEvent("deselect",function(id){
s(id,"deselect",b);
});
b.addEvent("select",function(id){
s(id,"select",a);
});
b.addEvent("deselect",function(id){
s(id,"deselect",a);
});
};
(function(){
_6d6.multiFriendSelector=function(_6fe){
var This=this;
this._ID=XN.util.createObjID();
this.config=this.config||{};
XN.$extend(this.config,{inputName:"ids",nameInputName:"names",aurl:"http://friend."+XN.env.domain+"/friendsSelector.do",url:"http://sg."+XN.env.domain+"/s/f",initParam:{},param:{},noInput:false,maxNum:-1});
XN.$extend(this.config,_6fe);
if(this.config.url.indexOf("sg.renren.com/s/m")!=-1){
this.config.aurl="http://friend."+XN.env.domain+"/friendSelectorForVip";
}
this.frame=XN.element.$element("div");
var div=XN.element.$element("div");
div.hide();
document.body.appendChild(div);
div.appendChild(this.frame);
this.frame.innerHTML=["<div id=\""+this.getID("friendsContainer")+"\" class=\"tokenizer friendAutoSelector\">","<span id=\""+this.getID("inputContainer")+"\" class=\"tokenizer_input\"><input id=\""+this.getID("input")+"\" type=\"text\" /></span>","</div>","<div class=\"float-right\" id=\""+this.getID("menu")+"\"></div>"].join("");
this.input=this.getEl("input");
this.menuContainer=this.getEl("menu");
XN.event.addEvent(this.getEl("friendsContainer"),"click",function(e){
This._parseClickEvent(e||window.event);
});
this.autoComplete=new _6d6.friendSelector({id:this.input,inputTip:"输入好友姓名...",autoSelectFirst:true,url:this.getConfig("url"),aurl:this.getConfig("aurl"),param:this.getConfig("param")});
this.autoComplete.loadFriends=function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var p={};
p["init"]=true;
p["uid"]=true;
p["uhead"]=false;
p["uname"]=true;
p["group"]=false;
p["net"]=false;
XN.$extend(p,This.getConfig("initParam"));
p["param"]=this.getConfig("param");
new XN.net.xmlhttp({useCache:true,url:this.getConfig("aurl"),method:This.getConfig("loadMethod")||"get",data:"p="+XN.json.build(p),onSuccess:function(r){
r=XN.json.parse(r.responseText);
This._allFriends=r.candidate;
This.fireEvent("load");
This.autoComplete._onload(r);
}});
};
this.autoComplete.buildMenu=function(r){
return "<p>"+r.name+"</p>";
};
this.autoComplete.setMenuWidth(129);
this.autoComplete.addEvent("keydown",function(e){
This._onInputKeydown(e);
});
this.autoComplete.addEvent("select",function(r){
XN.log(this.input);
this.input.value="";
This.selectFriend(r);
});
if(this.getConfig("noInput")){
this.input.hide();
}
this.fireEvent("init");
};
var _6ff=_6d6.multiFriendSelector.prototype=XN.$extend({},_6d6.element);
XN.$extend(_6ff,{isReady:function(){
return this.autoComplete.isReady();
},isLoading:function(){
return this.autoComplete.isLoading();
},loadFriends:function(){
this.autoComplete.loadFriends();
},getUserByID:function(id){
id=String(id);
var rt=null;
XN.array.each(this._allFriends,function(i,v){
if(String(v.id)==id){
rt=v;
return false;
}
});
return rt;
},getConfig:function(key){
if(key=="inputName"){
return this.config["idInputName"]||this.config["inputName"];
}
return this.config[key];
},getID:function(id){
return "mfs_"+this._ID+id;
},getFriendID:function(id){
return this.getID("friend_"+id);
},getFriendEl:function(id){
return XN.element.$(this.getFriendID(id));
},getEl:function(id){
return XN.element.$(this.getID(id));
},getFriendsNum:function(){
return this.getEl("friendsContainer").getElementsByTagName("a").length;
},getSelectedFriends:function(){
var rt=[];
var a=XN.array.build(this.getEl("friendsContainer").getElementsByTagName("a"));
XN.array.each(a,function(i,v){
rt.push(v.getAttribute("uid")+"");
});
return rt;
},reset:function(){
this.deselectAll();
},deselectAll:function(){
var els=XN.array.build(this.getEl("friendsContainer").getElementsByTagName("a"));
XN.array.each(els,function(i,v){
XN.element.remove(v);
});
this.fireEvent("deselectAll",this.getIds());
},selectFriends:function(fs){
var This=this;
XN.array.each(fs,function(i,v){
This.select(v);
});
},deselectFriends:function(fs){
var This=this;
XN.array.each(fs,function(i,v){
This.deselect(v);
});
},select:function(o){
if(XN.isUndefined(o)){
return;
}
XN.log("mfs select:");
XN.log(o);
var _700=this.getConfig("maxNum");
if(_700!==-1){
if(this.getFriendsNum()==_700){
this.fireEvent("overMaxNum",_700);
return;
}
}
if(XN.isString(o)||XN.isNumber(o)){
o={id:o,name:this.getUserByID(o).name};
}
if(this.getFriendEl(o.id)){
return;
}
this.getEl("friendsContainer").insertBefore(this.createFriendHTML(o.id,o.name),this.getEl("inputContainer"));
this.fireEvent("select",o.id);
},deselect:function(uid){
if(!this.getFriendEl(uid)){
return;
}
this.getFriendEl(uid).remove();
this.fireEvent("deselect",uid);
},_parseClickEvent:function(e){
var el=XN.event.element(e);
XN.event.stop(e);
if(el&&el.getAttribute("action")){
this.deselectFriend(el.getAttribute("uid"));
}
},createFriendHTML:function(uid,_701){
var a=XN.element.$element("a");
a.id=this.getFriendID(uid);
a.setAttribute("uid",uid);
a.href="#nogo";
a.className="token";
a.tabindex="-1";
a.innerHTML=["<span>\n<span>\n<span>\n<span>\n<input type=\"hidden\" value=\"",uid,"\" name=\"",this.getConfig("inputName"),"\" />\n","<input type=\"hidden\" value=\"",_701,"\" name=\"",this.getConfig("nameInputName"),"\" />\n",_701,"<span uid=\"",uid,"\" action=\"x\" class=\"x\" onmouseout=\"this.className='x'\" onmouseover=\"this.className='x_hover'\" >\n</span>\n</span>\n</span>\n</span>\n</span>"].join("");
return a;
},_onInputKeydown:function(_702){
var i=this.getEl("inputContainer"),pa=i.previousSibling,na=i.nextSibling,_703=this.input,c=this.getEl("friendsContainer");
if(_702.keyCode==8&&this.input.value==""){
if(pa){
this.deselectFriend(pa.getAttribute("uid"));
}
return true;
}else{
if(_702.keyCode==37&&this.input.value==""){
if(pa&&pa.tagName.toLowerCase()=="a"){
i.parentNode.removeChild(i);
c.insertBefore(i,pa);
setTimeout(function(){
_703.focus();
},0);
}
return true;
}else{
if(_702.keyCode==39&&this.input.value==""){
if(na&&na.tagName.toLowerCase()=="a"){
i.parentNode.removeChild(i);
XN.dom.insertAfter(i,na);
setTimeout(function(){
_703.focus();
},0);
}
return true;
}
}
}
return false;
}});
XN.event.enableCustomEvent(_6ff);
_6ff.deSelectAll=_6ff.deselectAll;
_6ff.deSelectFriend=_6ff.deselectFriend=_6ff.deselect;
_6ff.selectFriend=_6ff.select;
_6ff.getSelectedFriendsID=_6ff.getSelectedFriends;
_6ff.getIds=_6ff.getSelectedFriends;
})();
this.friendSelectorWithMenu=function(p){
var _704=new _6d6.friendSelector(p);
var menu=new _6d6.friendSelectorMenu({url:_704.getConfig("url"),aurl:_704.getConfig("aurl"),param:_704.getConfig("param"),multi:false,alignType:p.alignType,offsetX:p.offsetX,offsetY:p.offsetY,initParam:p.initParam});
var div=XN.element.$element("div");
div.addChild(_704);
div.addChild(menu);
_704.frame=div;
_704.addEvent("focus",function(){
menu.menu.hide();
});
menu.addEvent("select",function(p){
var This=this;
setTimeout(function(){
This.menu.hide();
},30);
_704.fireEvent("select",this.getUserByID(p));
});
menu.menu.menu.setOffsetY(9);
return _704;
};
this.multiFriendSelectorWithMenu=function(p){
var _705=new _6d6.multiFriendSelector(p);
var menu=new _6d6.friendSelectorMenu({url:_705.getConfig("url"),aurl:_705.getConfig("aurl"),param:_705.getConfig("param"),multi:true,showSelectAllCheckbox:_705.getConfig("showSelectAllCheckbox")||false});
menu.addEvent("submit",function(){
menu.menu.hide();
});
_705.menuContainer.setContent(menu);
_6d6.friendSelectorSynchronous(_705,menu);
return _705;
};
(function(ns){
var _706=false;
var _707=XN.event.addEvent;
var log=function(s){
if(_706){
XN.log(XN.isString(s)?"ui.tabView:"+s:s);
}
return s;
};
ns.tabView=function(_708){
this.config={selectedClass:"select",event:"click",alwaysReload:false,mouseOverDelay:0.2};
XN.$extend(this.config,_708);
this.init();
};
ns.tabView.prototype={_tabs:null,_currentTab:null,_idPre:null,_tabIndex:0,init:function(){
this._idPre=XN.util.createObjID();
this._tabs=[];
},getConfig:function(key){
if(key=="activeClass"){
return this.config["activeClass"]||this.config["selectedClass"];
}
return this.config[key];
},_getID:function(el){
if(el.nodeType&&el.nodeType==1){
return this._setID(el).id;
}
return el;
},_setID:function(el){
if(!el.id){
this._tabIndex++;
el.setAttribute("id","tabview_"+this._idPre+"_"+this._tabIndex);
}
return XN.element.$(el);
},_getTab:function(id){
log("_getTab start");
log("param:id");
log(id);
if(!id){
return log(id);
}
if(id.label){
return log(id);
}
var key=this._getID(id);
log("key:"+key);
var tabs=this._tabs;
log("all tabs");
log(tabs);
for(var i=tabs.length-1;i>=0;i--){
if(tabs[i].key==key){
log("_getTab end");
return log(tabs[i]);
}
}
log("_getTab end");
return log(null);
},getCurrentTab:function(){
return this._getTab(this._currentTab);
},setCurrentTab:function(tab,_709){
log("setCurrentTab start");
var oldC=this.getCurrentTab();
var nowC=this._getTab(tab);
log("old current:");
log(oldC);
log("now current:");
log(nowC);
if(oldC&&oldC.key==nowC.key&&!_709){
return;
}
if(oldC){
this._deactiveTab(oldC);
}
this._activeTab(nowC);
this._setCurrentTab(nowC);
log("setCurrentTab end");
this.fireEvent("change",nowC);
return this;
},reset:function(){
var tab=this.getCurrentTab();
if(tab){
this._deactiveTab(tab);
}
this._setCurrentTab(null);
return this;
},_activeTab:function(tab){
log("_activeTab:");
log(tab);
tab.getEl("label").addClass(this.getConfig("activeClass"));
if(tab.content){
tab.getEl("content").show();
}
tab.onActive(tab);
log("_activeTab end");
},_deactiveTab:function(tab){
if(tab.getEl("label")){
tab.getEl("label").delClass(this.getConfig("activeClass"));
}
if(tab.content){
tab.getEl("content").hide();
}
tab.onInactive(tab);
},_setCurrentTab:function(tab){
log("_setCurrentTab start");
tab=this._getTab(tab);
log("currentTab:");
log(tab);
this._currentTab=tab?tab.key:null;
log("this._currentTab");
log(this._currentTab);
log("_setCurrentTab end");
},addTab:function(t){
log("addTab start");
log("params:");
log(t);
var This=this;
var tab={onActive:XN.func.empty,onClick:XN.func.empty,onInactive:XN.func.empty,onInit:XN.func.empty,getEl:function(key){
return XN.element.$(this[key]);
},active:false};
t.label=this._setID(XN.element.$(t.label));
t.key=t.key||t.label.id;
if(t.content){
t.content=this._getID(t.content);
log("get content id:"+t.content);
}
XN.$extend(tab,t);
this._tabs.push(tab);
log("all tabs");
log(this._tabs);
if(tab.active&&this._currentTab===null){
if(tab.content){
tab.getEl("content").show();
}
tab.label.addClass(this.getConfig("activeClass"));
this._setCurrentTab(tab);
}else{
if(tab.content){
tab.getEl("content").hide();
}
}
var ev=this.getConfig("event");
if(ev=="click"){
_707(tab.label,"click",function(e){
e=e||window.event;
XN.event.stop(e);
This._eventHander(e,tab.label);
},false);
}else{
if(ev=="mouseover"){
var _70a=true;
var _70b=null;
_707(tab.label,"mouseover",function(e){
var el=this;
_70a=true;
_70b=setTimeout(function(){
if(!_70a){
return;
}
e=e||window.event;
This._eventHander(e,tab.label);
},This.getConfig("mouseOverDelay")*1000);
},false);
_707(tab.label,"mouseleave",function(e){
_70a=false;
if(_70b){
clearTimeout(_70b);
}
},false);
}
}
tab.onInit(tab);
log("addTab end");
return this;
},_eventHander:function(e,el){
log("on click,el:");
log(el);
log("get tab form by el:");
var tab=this._getTab(el);
if(this.getConfig("alwaysReload")){
this.setCurrentTab(tab,true);
}else{
this.setCurrentTab(tab);
}
tab.onClick(e,tab);
},refresh:function(){
this._activeTab(this.getCurrentTab());
return this;
},showTab:function(id,_70c){
this.setCurrentTab(id,_70c);
},hideAll:function(){
this.reset();
}};
XN.event.enableCustomEvent(ns.tabView.prototype);
})(this);
this.refreshAll=function(){
document.body.style.zoom=1.1;
document.body.style.zoom=1;
};
this.getHiddenDiv=function(){
if(!this._hiddenDiv){
this._hiddenDiv=XN.element.$element("div").hide();
document.body.appendChild(this._hiddenDiv);
}
return this._hiddenDiv;
};
this.friendSearchBar=function(p){
var _70d=XN.element.$(p.input);
var _70e=XN.element.$(p.submit||null);
var form=XN.element.$(p.form);
var tip=p.tip||"找人...";
var _70f=p.action||function(p){
if(p.type&&p.type=="PAGE"){
window.location.href="http://page."+XN.env.domain+"/"+p.id+"?from=opensearch";
}else{
window.location.href="http://www."+XN.env.domain+"/profile.do?id="+p.id+"&from=opensearch";
}
};
var _710=false;
(new XN.form.inputHelper(_70d)).setDefaultValue(tip).onEnter(function(el){
if(_710){
return;
}
if(!XN.string.isBlank(el.value)){
form.submit();
}
});
var _711=16;
var _712={id:_70d,noResult:function(){
return "搜索\""+this.input.value+"\"";
},limit:_711,params:p.params};
var _713=new _6d6.friendSelector(_712);
_713.lastMenuItem=function(){
if(this.result.length==_711){
return "<li><p><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."+XN.env.domain+"/myfriendlistx.do?qu="+this.input.value+"\">点击查看更多..</a></p></li>";
}else{
return "";
}
};
_713.setMenuWidth(_70d.offsetWidth);
_713.onSelectOne=function(p){
_710=true;
_70f(p);
};
if(_70e){
_70e.onclick=function(){
if(_710){
return false;
}
var v=_70d.value;
if(v!=tip&&!XN.string.isBlank(v)){
form.submit();
return false;
}
if(_70e.tagName.toLowerCase()=="a"){
return true;
}else{
return false;
}
};
}
};
this.navSearchBar=function(p){
var _714=XN.element.$(p.input);
var _715=XN.element.$(p.submit||null);
var form=XN.element.$(p.form);
var tip=p.tip||"找人...";
var _716=p.action||function(p){
if(p.type&&p.type=="PAGE"){
window.location.href="http://page."+XN.env.domain+"/"+(p.id||p.uid)+"?from=opensearch";
}else{
window.location.href="http://www."+XN.env.domain+"/profile.do?id="+(p.id||p.uid)+"&from=opensearch";
}
};
var _717=false;
(new XN.form.inputHelper(_714)).setDefaultValue(tip).onEnter(function(el){
if(_717){
return;
}
if(!XN.string.isBlank(el.value)){
form.submit();
}
});
var _718=7;
var _719={id:_714,noResult:function(){
return "<a onmousedown=\"window.location.href=this.href\" href=\"http://browse."+XN.env.domain+"/searchEx.do?from=opensearchclick&q="+encodeURIComponent(this.input.value)+"\" title=\"搜索"+this.input.value+"\">搜索\""+this.input.value+"\"</a>";
},limit:_718,params:p.params,wrapper:["<div class=\"\">","<span class=\"x1\">","<span class=\"x1a\"></span>","</span>","<span class=\"x2\">","<span class=\"x2a\"></span>","</span>","<div class=\"m-autosug-minwidth\">","<div class=\"m-autosug-content\">","<ul class=\"search-Result\"></ul>","</div>","</div>","</div>"].join(""),url:"http://sg."+XN.env.domain+"/s/h"};
var _71a=new _6d6.friendSelector(_719);
_71a.loadFriends=function(r){
if(this.isLoading()){
return;
}
this._isLoading=true;
var This=this;
this._onload();
};
_71a._onload=function(){
this.isLoading=false;
this._ready=true;
this.DS=new XN.util.DS_friends({url:this.getConfig("url"),qkey:this.getConfig("qkey"),limit:this.getConfig("limit"),page:this.getConfig("page"),param:this.getConfig("param")});
this.DS.query=function(v,_71b){
var This=this;
try{
this._request.abort();
}
catch(e){
}
function _71c(r){
r=r.responseText;
var pp;
try{
var rt=XN.json.parse(r);
if(This.rootKey&&rt[This.rootKey]){
pp=rt[This.rootKey];
}else{
pp=rt;
}
}
catch(e){
pp=[];
}
_71b(pp);
};
this._request=new XN.net.xmlhttp({url:this.url,data:"q="+encodeURIComponent(v)+"&l="+this.limit,method:this.method,onSuccess:_71c});
};
};
_71a.buildMenu=function(r){
return "<img src=\""+(r.head||r.uhead)+"\" width=\"50\" height=\"50\" alt=\""+(r.name||r.uname)+"\"/>"+"<strong>"+(r.name||r.uname)+"</strong>";
};
_71a._noDataShow=function(){
var tip=this.getConfig("dataLoading");
this._ul.innerHTML="<li class=\"lookMore\">"+tip+"</li>";
this.menu.show();
};
_71a._buildMenu=function(_71d){
var This=this;
this.result=_71d;
if(_71d.length==0){
var _71e=this.getConfig("noResult");
if(XN.isFunction(_71e)){
_71e=_71e.call(this);
}
this._ul.innerHTML="<li class=\"lookMore\">"+_71e+"</li>";
this.menu.show();
this._currentLi=null;
return;
}
var lis=[];
lis.push(this.firstMenuItem());
var len=_71d.length-1;
XN.array.each(_71d,function(i,v){
lis.push("<li onmouseover=\"getCompleteMenu("+This._MID+")._highlightMenuItem(this);\" aid=\""+i+"\">"+This.buildMenu(v)+"</li>");
});
lis.push(this.lastMenuItem());
this._ul.innerHTML=lis.join("");
if(this.getConfig("autoSelectFirst")){
this._highlightMenuItem(this._ul.firstChild);
}
this.menu.show();
};
_71a.lastMenuItem=function(){
if(this.result.length==_718){
return "<li class=\"lookMore\"><a onmousedown=\"window.location.href=this.href\" href=\"http://friend."+XN.env.domain+"/myfriendlistx.do?qu="+this.input.value+"\">点击查看更多..</a></li>";
}else{
return "";
}
};
_71a.setMenuWidth(_714.offsetWidth);
_71a.onSelectOne=function(p){
_717=true;
_716(p);
};
if(_715){
_715.onclick=function(){
if(_717){
return false;
}
var v=_714.value;
if(v!=tip&&!XN.string.isBlank(v)){
form.submit();
return false;
}
if(_715.tagName.toLowerCase()=="a"){
return true;
}else{
return false;
}
};
}
};
this.userInfoAutoComplete=function(id,type){
var _71f={"elementaryschool":"http://www."+XN.env.domain+"/autocomplete_elementaryschool.jsp","juniorhighschool":"http://www."+XN.env.domain+"/autocomplete_juniorhighschool.jsp","workplace":"http://www."+XN.env.domain+"/autocomplete_workplace.jsp","highschool":"http://www."+XN.env.domain+"/autocomplete_highschool.jsp","allnetwork":"http://www."+XN.env.domain+"/autocomplete_all_network.jsp","allSchool":"http://www."+XN.env.domain+"/autocomplete-school.jsp","city":"http://www."+XN.env.domain+"/autocomplete-city.jsp","college":"http://www."+XN.env.domain+"/autocomplete_college.jsp"};
var ds=new XN.datasource.DS_XHR({url:_71f[type]});
var at=new _6d6.autoCompleteMenu({DS:ds,input:id});
at.buildMenu=function(r){
return "<p>"+(r.name||r.Name)+"</p>";
};
at.addEvent("select",function(r){
this.input.value=(r.name||r.Name);
});
return at;
};
});
object.add("XN.Do","XN, XN.func, XN.array, XN.ui",function(_720,XN){
this.currentAlert=null;
this.currentConfirm=null;
this.alert=function(_721,_722,type,X,Y,w,h,_723){
var _724={type:"normal",width:400,button:"确定",modal:false,callBack:XN.func.empty,autoHide:0,addIframe:true,closeFire:true};
if(!XN.isString(_721)){
extendObject(_724,_721);
}else{
if(XN.isString(_721)||arguments.length>1){
var ars=arguments;
XN.array.each(["message","title","type","X","Y","width","height","callBack"],function(i,v){
if(ars[i]){
_724[v]=ars[i];
}
});
}
}
var temp=_724.params;
delete _724.params;
_724=extendObject({},_724,temp);
_724.callback=_724.callback||_724.callBack;
try{
_720.currentAlert.remove(_724.modal===true);
}
catch(e){
}
var _725=new XN.ui.dialog(_724).setType(_724.type).setTitle(_724.title||(_724.type=="error"?"错误提示":"提示")).setWidth(_724.width).setHeight(_724.height).setX(_724.X).setY(_724.Y).addButton({text:(_724.yes||_724.button),onclick:function(e){
_725.setAutoHide(true);
return _724.callback.call(_725,e);
}}).show();
if(_724.closeFire===true){
_725.addEvent("close",function(e){
_724.callback.call(_725,e);
});
}
_720.currentAlert=_725;
try{
_725.getButton(_724.button).focus();
}
catch(e){
}
if(_724.autoHide){
_725.autoHide(_724.autoHide);
}
return _725;
};
this.confirm=function(_726,_727,_728,yes,no,X,Y,w,h){
var _729={type:"normal",width:400,modal:false,yes:"确定",no:"取消",callBack:XN.func.empty,focus:null,addIframe:true,closeFire:false};
if(!XN.isString(_726)&&!XN.isNumber(_726)){
extendObject(_729,_726);
}else{
if(XN.isString(_726)||arguments.length>1){
var ars=arguments;
XN.array.each(["message","title","callBack","yes","no","X","Y","w","h"],function(i,v){
if(ars[i]){
_729[v]=ars[i];
}
});
}
}
var temp=_729.params;
delete _729.params;
_729=extendObject({},_729,temp);
_729.callback=_729.callback||_729.callBack;
try{
_720.currentConfirm.remove(_729.modal===true);
}
catch(e){
}
var _72a=new XN.ui.dialog(_729).setType(_729.type).setTitle(_729.title||(_729.type=="error"?"错误提示":"提示")).setBody(_729.msg||_729.message||"").setWidth(_729.width).setHeight(_729.height).setX(_729.X).setY(_729.Y).addButton({text:(_729.submit||_729.yes),onclick:function(){
_72a.setAutoHide(true);
return _729.callback.call(_72a,true);
}}).addButton({text:(_729.cancel||_729.no),onclick:function(){
_72a.setAutoHide(true);
return _729.callback.call(_72a,false);
}}).show();
_72a.getButton(_729.cancel||_729.no).addClass("gray");
if(_729.focus=="submit"){
_729.focus=_729.submit;
}else{
if(_729.focus=="cancel"){
_729.focus=_729.cancel;
}
}
if(_729.closeFire===true){
_72a.addEvent("close",function(){
_729.callback.call(_72a,false);
});
}
_72a.getButton(_729.focus||_729.submit||_729.yes).focus();
_720.currentConfirm=_72a;
return _72a;
};
this.showMessage=this.showMsg=function(msg,_72b,time){
var _72c=_720.alert({msg:msg,title:(_72b||"提示"),noFooter:true,autoHide:(time||2)});
return _72c;
};
this.showError=function(msg,_72d,time){
var _72e=_720.alert({msg:msg,type:"error",title:(_72d||"错误提示"),noFooter:true,autoHide:(time||2)});
return _72e;
};
});
object.use(["XN","XN.array","XN.browser","XN.cookie","XN.Do","XN.dom","XN.effect","XN.element","XN.env","XN.event","XN.form","XN.func","XN.json","XN.net","XN.string","XN.template","XN.ui","XN.util","XN.datasource"],function(XN){
$extend=XN.$extend;
if(window.XN==null){
window.XN=XN;
}else{
var _72f=window.XN;
window.XN=XN;
for(var prop in _72f){
if(window.XN[prop]===undefined){
window.XN[prop]=_72f[prop];
}else{
XN.$extend(window.XN[prop],_72f[prop]);
}
}
}
isUndefined=XN.isUndefined;
isString=XN.isString;
isElement=XN.isElement;
isFunction=XN.isFunction;
isObject=XN.isObject;
isArray=XN.isArray;
isNumber=XN.isNumber;
$=XN.element.$;
$element=XN.element.$element;
XN.element.findFirstClass=XN.dom.findFirstClass;
extendObject=$extend;
xn_getEl=ge=getEl=$X=$;
$xElement=XN.element.$element;
XN.DEBUG=XN.Debug=XN.debug;
XN.debug.On=XN.debug.on;
XN.debug.Off=XN.debug.off;
XN.namespace("ui");
XN.namespace("util");
XN.namespace("app");
XN.namespace("page");
XN.APP=XN.App=XN.app;
XN.PAGE=XN.Page=XN.page;
XN.CONFIG=XN.Config=XN.config;
XN.ENV=XN.Env=XN.env=XN.env;
XN.ARRAY=XN.Array=XN.array=XN.array;
XN.String=XN.STRING=XN.string=XN.string;
XN.BROWSER=XN.Browser=XN.browser=XN.browser;
XN.COOKIE=XN.Cookie=XN.cookie=XN.cookie;
XN.EVENT=XN.Event=XN.event=XN.event;
XN.DO=XN.Do;
XN.DOM=XN.Dom=XN.dom=XN.dom;
XN.EFFECT=XN.Effect=XN.effect=XN.effect;
XN.ELEMENT=XN.Element=XN.element=XN.element;
XN.FORM=XN.Form=XN.form=XN.form;
XN.FUNC=XN.Func=XN.func=XN.func;
XN.JSON=XN.Json=XN.json=XN.json;
XN.NET=XN.Net=XN.net;
XN.Template=XN.TEMPLATE=XN.template=XN.template;
XN.UI=XN.Ui=XN.ui;
XN.UTIL=XN.Util=XN.util;
XN.ui.DS_JSON=XN.util.DS_JSON=XN.datasource.DS_JSON;
XN.ui.DS_friends=XN.util.DS_friends=XN.datasource.DS_friends;
XN.ui.DS_Array=XN.util.DS_Array=XN.datasource.DS_Array;
XN.ui.DS_XHR=XN.util.DS_XHR=XN.datasource.DS_XHR;
try{
document.domain=String(XN.env.domain);
}
catch(e){
}
if(window.isJSON==null){
window.isJSON=XN.string.isJSON;
}
if(XN.events==null){
XN.timeLog={};
XN.events={};
XN.event.enableCustomEvent(XN.events);
}
});
"abbr article aside audio canvas command details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\w+/g,function(n){
document.createElement(n);
});
(function(){
function _730(){
};
var isIE=!!(window.attachEvent&&!window.opera);
window.Expressions=_730;
if(!isIE){
return;
}
_730.ie6=(navigator.appVersion.indexOf("MSIE 6.0")!=-1);
_730.ie7=(navigator.appVersion.indexOf("MSIE 7.0")!=-1);
_730.k=1;
_730.timer=function(){
_730.k++;
var _731=document.getElementById("expressionsTimer");
if(_731){
_731.innerHTML=_730.k;
}
};
_730.ele={};
_730.pseudo={};
_730.selector={};
_730.style={};
_730.addClass=function(ele,_732){
ele.className+=" "+_732;
};
_730.removeClass=function(ele,_733){
ele.className=ele.className.replace(new RegExp("\\b"+_733+"(\\s+|\\b)","ig"),"");
};
_730.hasClass=function(ele,_734){
return ele.className.match(new RegExp("(\\s|^)"+_734+"(\\s|$)"));
};
_730.getPixelValue=function(ele,_735){
if(!(/^\d+(px)?$/i).test(_735)&&(/^\d/).test(_735)){
var _736=ele.style.left;
var _737=ele.runtimeStyle.left;
ele.runtimeStyle.left=ele.currentStyle.left;
ele.style.left=_735||0;
_735=ele.style.pixelLeft;
ele.style.left=_736;
ele.runtimeStyle.left=_737;
return _735;
}
return parseInt(_735)||0;
};
_730.pseudo.hover=function(ele,_738){
if(_730.ie7){
return;
}
if(!_738){
_738="hover";
}
ele.attachEvent("onmouseover",function(){
ele.className+=" "+_738;
});
ele.attachEvent("onmouseout",function(){
ele.className=ele.className.replace(new RegExp("\\s"+_738,"ig"),"");
});
_730.timer();
};
_730.pseudo.focus=function(ele,_739){
if(!_739){
_739="focus";
}
ele.attachEvent("onfocus",function(){
ele.className+=" "+_739;
});
ele.attachEvent("onblur",function(){
ele.className=ele.className.replace(new RegExp("\\s"+_739,"ig"),"");
});
_730.timer();
};
_730.pseudo.disabled=function(ele,_73a){
if(!_73a){
_73a="disabled";
}
function _73b(){
if(ele.disabled){
if(!_730.hasClass(ele,_73a)){
_730.addClass(ele,_73a);
}
}else{
_730.removeClass(ele,_73a);
}
};
ele.attachEvent("onpropertychange",_73b);
_73b();
_730.timer();
};
_730.pseudo.enabled=function(ele,_73c){
if(!_73c){
_73c="enabled";
}
function _73d(){
if(!ele.disabled){
if(!_730.hasClass(ele,_73c)){
_730.addClass(ele,_73c);
}
}else{
_730.removeClass(ele,_73c);
}
};
ele.attachEvent("onpropertychange",_73d);
_73d();
_730.timer();
};
_730.pseudo.before=function(ele,id){
var _73e=document.createElement("before");
ele.insertBefore(_73e,ele.firstChild);
_730.timer();
};
_730.pseudo.after=function(ele,id){
var _73f=document.createElement("after");
var _740=setInterval(function(){
try{
ele.appendChild(_73f);
clearInterval(_740);
}
catch(e){
}
},200);
_730.timer();
};
_730.style.width=function(ele,_741){
if(_741>0){
ele.style.width=_741+"px";
}
};
_730.style.minWidth=function(ele,_742){
if(!_742.match(/(\d+)px/)){
return;
}
_742=parseInt(RegExp.$1);
function _743(){
if(!ele.__oldWidth&&document.documentElement.clientWidth<_742){
ele.__oldWidth=ele.runtimeStyle.width;
ele.runtimeStyle.width=_742+"px";
}else{
if(ele.__oldWidth&&document.documentElement.clientWidth>=_742){
ele.__oldWidth=null;
ele.runtimeStyle.width=ele.__oldWidth;
}
}
};
window.attachEvent("onresize",_743);
_743();
_730.timer();
};
_730.style.outline=function(ele,_744){
if(_744=="0 none"){
ele.onfocus=function(){
ele.blur();
};
}
};
_730.style.backgroundOrigin=function(ele){
ele.style.backgroundPosition=(ele.offsetWidth-14)+"px center";
_730.timer();
};
_730.style.boxSizing={};
_730.style.boxSizing.borderBox=function(ele,_745,_746){
var _747=function(_748){
ele.runtimeStyle.width="";
if(!_748){
_748=ele.currentStyle["width"];
}
var _749=(ele.currentStyle["bordeLeftStyle"]=="none"?0:parseInt(ele.currentStyle["borderLeftWidth"]))||0;
var _74a=(ele.currentStyle["bordeRightStyle"]=="none"?0:parseInt(ele.currentStyle["borderRightWidth"]))||0;
var _74b=parseInt(ele.currentStyle["paddingLeft"])||0;
var _74c=parseInt(ele.currentStyle["paddingRight"])||0;
var _74d=_749+_74a+_74b+_74c;
var _74e=(parseInt(ele.parentNode.currentStyle["paddingLeft"])||0)+(parseInt(ele.parentNode.currentStyle["paddingRight"])||0);
_748=_730.getPixelValue(ele,_748)-_74e;
ele.runtimeStyle.width=Math.max(0,_748-_74d)+"px";
};
var _74f=function(_750){
ele.runtimeStyle.height="";
if(!_750){
_750=ele.currentStyle["height"];
}
var _751=(ele.currentStyle["bordeTopStyle"]=="none"?0:parseInt(ele.currentStyle["borderTopWidth"]))||0;
var _752=(ele.currentStyle["bordeBottomStyle"]=="none"?0:parseInt(ele.currentStyle["borderBottomWidth"]))||0;
var _753=parseInt(ele.currentStyle["paddingTop"])||0;
var _754=parseInt(ele.currentStyle["paddingBottom"])||0;
var _755=_751+_752+_753+_754;
var _756=(parseInt(ele.parentNode.currentStyle["paddingTop"])||0)+(parseInt(ele.parentNode.currentStyle["paddingBottom"])||0);
_750=_730.getPixelValue(ele,_750)-_756;
ele.runtimeStyle.height=Math.max(0,_750-_755)+"px";
};
_747(_745);
_74f(_746);
ele.attachEvent("ondetach",function(){
ele.runtimeStyle.width="";
ele.runtimeStyle.height="";
});
ele.attachEvent("onpropertychange",function(){
var pn=event.propertyName;
if(pn==="style.boxSizing"&&ele.style.boxSizing===""){
ele.style.removeAttribute("boxSizing");
ele.runtimeStyle.boxSizing=undefined;
}
switch(pn){
case "style.width":
case "style.borderLeftWidth":
case "style.borderLeftStyle":
case "style.borderRightWidth":
case "style.borderRightStyle":
case "style.paddingLeft":
case "style.paddingRight":
_747(_745);
break;
case "style.height":
case "style.borderTopWidth":
case "style.borderTopStyle":
case "style.borderBottomWidth":
case "style.borderBottomStyle":
case "style.paddingTop":
case "style.paddingBottom":
_74f(_746);
break;
case "className":
case "style.boxSizing":
_747(_745);
_74f(_746);
break;
default:
break;
}
});
_730.timer();
return;
};
_730.style.content=function(ele,_757){
ele.innerText=_757;
_730.timer();
};
_730.style.position={};
_730.style.position.fixed=function(ele){
var _758;
window.attachEvent("onscroll",function(){
var _759=500;
if(ele.hackStyle&&ele.hackStyle.IE6fixedPositionDelay){
_759=ele.hackStyle.IE6fixedPositionDelay;
}
ele.runtimeStyle.visibility="hidden";
_730.addClass(ele,"IE6_SCROLLING");
clearTimeout(_758);
_758=setTimeout(function(){
ele.runtimeStyle.visibility="visible";
_730.removeClass(ele,"IE6_SCROLLING");
},_759);
});
_730.timer();
};
_730.style.position.fixed.delay=function(ele,_75a){
if(!ele.hackStyle){
ele.hackStyle={};
}
ele.hackStyle.IE6fixedPositionDelay=_75a;
_730.timer();
};
_730.style.fixLineHeight=function(ele){
var _75b=function(_75c){
_75c.runtimeStyle.zoom="1";
var hack=document.createElement("h");
hack.style.zoom="1";
_75c.insertBefore(hack,_75c.children[0]);
};
for(var i=0,tags=["IMG","SELECT","INPUT","TEXTAREA"],tag;tag=tags[i];i++){
if(ele.tagName.toUpperCase()==tag){
if(ele.parentNode.currentStyle.lineHeight!="normal"){
_75b(ele.parentNode);
}
return;
}
}
_75b(ele);
_730.timer();
};
_730.selector=function(_75d,_75e){
var eles=Sizzle(_75d);
for(var i=0;i<eles.length;i++){
_730.addClass(eles[i],_75e);
}
_730.timer();
};
if(isIE){
(function(){
var _75f=setInterval(function(){
try{
document.body.doScroll("left");
clearInterval(_75f);
document.getElementsByTagName("title")[0].innerHTML;
}
catch(e){
}
},20);
})();
}
_730.hover=_730.pseudo.hover;
_730.focus=_730.pseudo.focus;
_730.after=_730.pseudo.after;
_730.before=_730.pseudo.before;
})();
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
try{
window.onerror=function(){
if(parseInt(Math.random()*10000,10)!=5000){
return 1;
}
var a=arguments,e=encodeURIComponent,l=location,d=new Date();
if(a.length!=3||a[2]==0){
return 1;
}
new Image().src=["http://s.renren.com/speedstats/jserror/stats.php?message="+e(a[0]),"url="+e(a[1]),"lineNo="+a[2],"location="+e(l),"time="+d.toLocaleTimeString()].join("&");
return 1;
};
}
catch(e){
}
if(!window.console){
window.console={log:function(){
},warn:function(){
},error:function(){
}};
}
window.now=new Date();
XN.dom.ready(function(){
if(XN.config.parentDomain||(!XN.config.jumpOut)){
return;
}
try{
top.location.href.indexOf("x");
}
catch(e){
try{
top.location=self.location;
}
catch(e){
}
}
});
if(XN.browser.Gecko&&XN.string.getQuery("debug_mode")){
XN.debug.on();
}
(function(){
var _760=false;
window.load_jebe_ads=function(s,r,_761){
if(window._developer_no_ads){
return;
}
if(!s){
return;
}
if(_760&&!_761){
return;
}
_760=true;
XN.dom.ready(function(){
var p=XN.cookie.get("id");
if(!p||XN.string.isBlank(p)){
p="";
}
if(!r){
r=location.href;
}
var src="http://ebp.renren.com/ebpn/show?userid="+encodeURIComponent(p)+"&isvip="+XN.user.isVip+"&hideads="+XN.user.hideAds+(!XN.pageId?"":"&pageType="+XN.pageId)+"&tt="+new Date().getTime();
if(r.match(/http:\/\/www\.renren\.com\/home/ig)){
r="http://www.renren.com/Home.do";
}else{
if(r.indexOf("friend/manage")>-1||r.indexOf("friend/addfriends")>-1){
r="http://friend.renren.com/myfriendlistx.do";
src="http://ebp.renren.com/ebpn/show?userid="+encodeURIComponent(p)+"&isvip="+XN.user.isVip+"&hideads="+XN.user.hideAds+(!XN.pageId?"":"&pageType=friend")+"&tt="+new Date().getTime();
}else{
if(r.match(/http:\/\/(www\.)?renren\.com\/?$/ig)||r.match(/http:\/\/(www\.)?renren\.com\/?SysHome(.do)?\/?/ig)||r.match(/http:\/\/(www\.)?renren.com\/pages\/syshome_newversion.jsp/)||r.match(/http:\/\/(www\.)?renren.com\/pages\/autoLogin-ads.jsp/)){
r="http://www.renren.com/SysHome.do";
if($("ad100000000068")!=null){
src="http://ebp.renren.com/ebpn/show?ref=http://www.renren.com/ad_100000000068";
}else{
if($("ad100000000108")!=null){
src="http://ebp.renren.com/ebpn/show?ref=http://www.renren.com/ad_100000000108";
}else{
src="http://ebp.renren.com/ebpn/show?ref=http://www.renren.com/ad_100000000061";
}
}
}
}
}
if(XN.app.share&&XN.app.share.pageInfo){
r=r.replace(/\?.*$/,"")+"?shareType="+XN.app.share.pageInfo.type;
}
if(r){
src+="&r="+encodeURIComponent(r);
}
XN.loadFile({file:src,type:"js"},function(){
var _762="http://s.xnimg.cn/a"+jebe_json.ad_js_version+"/jebe/xn.jebe.js";
XN.loadFile({file:_762,type:"js"});
});
});
};
})();
XN.USER=XN.user=currentUser={};
XN.USER.me=function(_763){
};
XN.event.enableCustomEvent(currentUser);
XN.USER.addFriendAction=function(p){
this.config={commentLength:45,needComment:true,requestURI:"http://friend."+XN.env.domain+"/ajax_request_friend.do"};
$extend(this.config,p);
};
XN.user.addFriendAction.prototype={getConfig:function(key){
return this.config[key];
},send:function(id,why,from,code,_764){
var code=code!=1?0:1;
var _764=_764||"";
var This=this;
if(this.getConfig("needComment")){
if(XN.STRING.isBlank(why)){
this.fireEvent("checkError","您输入的信息不能为空");
return;
}
}
if(why.length>this.getConfig("commentLength")){
this.fireEvent("checkError","您输入的信息不能超过"+this.getConfig("commentLength")+"个字符");
return;
}
var data="id="+id+"&why="+why+"&codeFlag="+code+"&code="+_764;
if(this.getConfig("matchmaker")){
data=data+"&matchmaker="+this.getConfig("matchmaker");
}
if(this.getConfig("groupname")){
data=data+"&groupname="+this.getConfig("groupname");
}
this.fireEvent("beforePost");
new XN.NET.xmlhttp({url:this.getConfig("requestURI")+"?from="+from,"data":data,onSuccess:function(r){
r=r.responseText;
if(r&&isJSON(r)){
var re=XN.JSON.parse(r);
}else{
This.fireEvent("error");
return;
}
if(re.result=="-1"){
This.fireEvent("flagError");
return;
}
This.fireEvent("success",id,r,from);
if(!window.currentUser){
return;
}
if(currentUser.fireEvent){
currentUser.fireEvent("addFriendSuccess",id,r,from);
}
if(currentUser.onaddFriendSuccess){
currentUser.onaddFriendSuccess(id,r);
}
},onError:function(){
This.fireEvent("error",id,from);
if(!window.currentUser){
return;
}
currentUser.fireEvent("addFriendError",id,r,from);
}});
}};
XN.EVENT.enableCustomEvent(XN.USER.addFriendAction.prototype);
XN.dynamicLoad({file:"http://s.xnimg.cn/jspro/xn.app.addFriend.js",funcs:["showRequestFriendDialog"]});
XN.DOM.readyDo(function(){
if(XN.get_check){
var _765=Sizzle("form");
for(var i=0;i<_765.length;i++){
try{
var _766=document.createElement("<input name=\"requestToken\" type=\"hidden\" value=\""+XN.get_check+"\"/>");
}
catch(e){
var _766=document.createElement("input");
_766.type="hidden";
_766.name="requestToken";
_766.value=XN.get_check;
}
_765[i].appendChild(_766);
try{
_766=document.createElement("<input name=\"_rtk\" type=\"hidden\" value=\""+XN.get_check_x+"\"/>");
}
catch(e){
_766=document.createElement("input");
_766.type="hidden";
_766.name="_rtk";
_766.value=XN.get_check_x;
}
_765[i].appendChild(_766);
}
}
});
XN.namespace("widgets");
XN.WIDGETS=XN.Widgets=XN.widgets;
function getImageType(_767,_768,_769,_76a){
var type="";
if(_767.naturalHeight!=undefined){
if(_767.naturalHeight*(_768/_767.naturalWidth)<=_769){
type="normal";
}else{
type="too-height";
}
_76a(type);
return;
}
if(XN.browser.IE&&parseInt(_767.height)==0){
var img=new Image();
img.onload=function(){
if(img.height<=_769){
type="normal";
}else{
type="too-height";
}
_76a(type);
img.parentNode.removeChild(img);
};
img.width=_767.getAttribute("width")||_768;
img.style.cssText="position:absolute;top:-9999em;left:-9999em;";
document.body.appendChild(img);
img.src=_767.src+"?"+new Date().getTime();
}else{
if(!_767.getAttribute("width")){
_767.width=_768;
}
if(_767.height<=_769){
type="normal";
}else{
type="too-height";
}
_76a(type);
}
};
function fixImage(_76b,_76c,_76d){
_76b.onload=null;
if(XN.browser.IE&&_76b.naturalHeight==undefined){
XN.dom.ready(function(){
getImageType(_76b,_76c,_76d,function(type){
if(type=="normal"){
return;
}else{
if(type=="too-height"){
clipImage2(_76b,_76c,_76d,"h");
}
}
});
});
}else{
getImageType(_76b,_76c,_76d,function(type){
if(type=="normal"){
_76b.width=_76c;
return;
}else{
if(type=="too-height"){
clipImage2(_76b,_76c,_76d,"h");
}
}
});
}
};
function clipImage2(_76e,w,h,type){
var _76f=document.createElement("span");
var _770=document.createElement("i");
_770.className=_76e.className;
var _771=_76e.parentNode;
if(!_771){
return;
}
_76f.style.cssText="display:block;zoom:1;overflow:hidden;width:"+w+"px;padding:0;margin:0;background:transparent none;";
var _772=new Image();
_772.onload=function(){
_772.onload=null;
if(type=="h"){
var _773=_772.height*(w/_772.width);
_772.height=_773;
_772.width=w;
if(_773>h){
_76f.style.height=h+"px";
}
}else{
if(type=="w"){
_772.width=_772.width*(h/_772.height);
_772.height=h;
}
}
_772.style.cssText="display:block;margin:0 auto;";
_76f.appendChild(_772);
_770.appendChild(_76f);
try{
_771.replaceChild(_770,_76e);
}
catch(e){
if(window.console&&console.log){
console.log(_76e.src);
}
}
_770.style.cursor="pointer";
_771.style.textDecoration="none";
if(XN.browser.IE){
_771.style.position="relative";
var _774=$element("div");
_774.style.cssText="position:absolute;top:0;left:0;cursor:pointer;width:"+_76f.style.width+";height:"+(_76f.style.height?_76f.style.height:h+"px")+";background:url(about:_blank);";
_771.insertBefore(_774,_771.firstChild);
}
};
_772.src=_76e.src;
};
function clipImage(_775){
if(!_775.getAttribute("width")||!_775.getAttribute("height")){
return;
}
var _776=parseInt(_775.getAttribute("width"));
var _777=parseInt(_775.getAttribute("height"));
if(_775.naturalWidth&&_775.naturalHeight&&_775.naturalWidth==_776&&_775.naturalHeight==_777){
return;
}
var _778=new Image();
_778.onload=function(){
if(_778.width==_776&&_778.height==_777){
return;
}
var _779=document.createElement("i");
var _77a=_775.parentNode;
if(!_77a){
return;
}
_77a.replaceChild(_779,_775);
_779.style.width=_776+"px";
_779.style.height=_777+"px";
if(!XN.browser.IE){
_779.style.display="inline-block";
_779.appendChild(_778);
_779.style.overflow="hidden";
if(_778.width>_776){
_778.style.marginLeft="-"+parseInt((_778.width-_776)/2)+"px";
}
if(_778.height>_777){
_778.style.marginTop="-"+parseInt((_778.height-_777)/2)+"px";
}
}else{
_779.style.zoom="1";
var top=parseInt((_778.height-_777)/2);
_779.style.background="url("+_775.src+") no-repeat -"+parseInt((_778.width-_776)/2)+"px -"+(top>0?top:0)+"px";
if(_779.parentNode.tagName=="A"){
_779.style.cursor="pointer";
}
}
};
_778.src=_775.src;
};
function roundify(_77b,_77c){
return;
};
XN.app.statsMaster={init:function(){
var j={ID:XN.cookie.get("id"),R:encodeURIComponent(location.href)};
var json=XN.JSON.build(j);
this.listener=function(e){
var e=e||window.event,_77d=XN.event.pointerX(e),Y=XN.event.pointerY(e),U,T,el=XN.event.element(e),_77e=$("dropmenuHolder");
xx=XN.element.realLeft(_77e);
if(!(el&&el.tagName)){
return;
}
T=el.tagName.toLowerCase();
if(T=="a"){
U=el.href;
}
var _77f=el.getAttribute("stats");
if(_77f){
T=_77f;
}
j.X=_77d-xx;
j.Y=Y;
if(U){
j.U=encodeURIComponent(U);
}
if(T){
j.T=T;
}
json=XN.JSON.build(j);
new Image().src="http://dj."+XN.env.domain+"/click?J="+json+"&t="+Math.random();
};
XN.event.addEvent(document,"mousedown",this.listener);
if(!window.statisFocusEventAdded){
XN.event.addEvent(window,"focus",function(){
new Image().src="http://dj."+XN.env.domain+"/focus?J="+json+"&t="+Math.random();
});
window.statisFocusEventAdded=true;
}
if(!window.statisBlurEventAdded){
XN.event.addEvent(window,"blur",function(){
new Image().src="http://dj."+XN.env.domain+"/unfocus?J="+json+"&t="+Math.random();
});
window.statisBlurEventAdded=true;
}
if(!window.statisBottomEventAdded){
XN.events.addEvent("scrollbottom",function(){
new Image().src="http://dj."+XN.env.domain+"/scrollbottom?J="+json+"&t="+Math.random();
});
window.statisBottomEventAdded=true;
}
},destroy:function(){
XN.event.delEvent(document,"mousedown",this.listener);
}};
XN.dom.ready(function(){
if(!XN.BROWSER.IE6){
if(window._developer_no_dj){
return;
}
XN.app.statsMaster.init();
}
});
XN.dom.ready(function(){
if(window._developer_no_guide){
return;
}
var _780=false;
var _781=true;
XN.event.addEvent(document,"mousedown",function(){
_781=false;
});
XN.event.addEvent(window,"blur",function(){
_781=true;
});
showConfirmDialog=function(){
var d=XN.DO.alert({title:"请领取您的"+XN.env.siteName+"通行证",modal:true,message:"<iframe id=\"frameactive\" width=\"410\" height=\"100%\" frameborder=\"no\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" src=\"about:blank\" ></iframe>",width:454,params:{showCloseButton:true},callBack:function(){
_780=false;
showConfirmDialog.fireEvent("close");
}});
arguments.callee.dialog=d;
d.footer.hide();
$("frameactive").src="http://channel."+XN.env.domain+"/confirm/show";
$("frameactive").contentWindow.location.href="http://channel."+XN.env.domain+"/confirm/show";
$("frameactive").addEvent("load",function(){
d.refresh();
});
};
XN.event.enableCustomEvent(showConfirmDialog);
if(!XN.cookie.get("noconfirm")){
return;
}
var _782=setInterval(function(){
if(_781||window.noConfirmWindow||_780||!XN.cookie.get("noconfirm")){
return;
}
_780=true;
XN.cookie.del("noconfirm","/",XN.env.domain);
XN.cookie.del("noconfirm","/",window.location.hostname);
showConfirmDialog();
},1000);
XN.log("未激活用户引导初始化over");
});
object.use("dom, ua",function(dom,ua){
dom.wrap(window);
dom.wrap(document);
dom.ready(function(){
document.delegate("a, a span","click",function(e){
if(e.button==2){
return;
}
var node=this;
if(this.tagName&&this.tagName.toLowerCase()=="span"){
node=dom.wrap(this).getParent("a");
}
if(!node){
return;
}
var href=node.getAttribute("href"),len;
if(!href){
return;
}
if(ua.ua.ie>=9){
if(href=="javascript:;"||href.indexOf("javascript:void(0)")!=-1){
node.setAttribute("href","#nogo");
e.preventDefault();
return;
}
}
len=href.length;
if(href=="#nogo"||href=="#"){
e.preventDefault();
return;
}
if(len>1&&href.slice(-1)=="#"||len>4&&href.slice(-5)=="#nogo"){
e.preventDefault();
}
});
});
});
(function(){
if(window._developer_no_webpager){
return;
}
var _783=0;
var _784=false;
var _785=0;
var _786="l4pager";
var _787=null;
if(XN.browser.IE6||window.location.host=="apps.renren.com"){
_784=true;
}
this.checkExpand=function(){
var cw,ch;
if(document.documentElement){
ch=document.documentElement.clientHeight;
cw=document.documentElement.clientWidth;
}
return {width:cw,height:ch,full:(cw>=1240)&&!_784,layout:_783,loading:_787};
};
var htag,i=0;
while(htag=document.childNodes[i]){
if(htag.tagName&&htag.tagName.toLowerCase()=="html"){
break;
}
i++;
}
this.frameLayout=function(i){
if(i==1){
htag.className=(htag.className||"")+" marginRightForPager";
}else{
if(i==0){
htag.className=htag.className.replace("marginRightForPager","");
}else{
return _783;
}
}
_783=i;
window.fireEvent("changeLayout",{layout:i});
};
this.saveStat=function(s){
var v=s?1:0;
XN.cookie.set(_786,v,365,"/","renren.com");
};
this.readStat=function(){
return _785;
};
this.noLoading=function(){
if(_787&&_787.parentNode){
document.body.removeChild(_787);
}
_787=null;
};
_785=XN.cookie.get(_786)=="1"?1:0;
if(_785&&this.checkExpand().full){
this.frameLayout(1);
XN.dom.ready(function(){
_787=document.createElement("div");
_787.id="wp-buddylist-placeholder";
document.body.appendChild(_787);
});
}
XN.smartyBuddy=this;
})();
(function(){
if(window.webpager&&window.webpager.addEvent){
return;
}
var _788=[];
window.webpager={addEvent:function(){
_788.push(XN.array.build(arguments));
}};
window.addEvent("webpagerReady",function(){
var _789;
while(_789=_788.shift()){
window.webpager.addEvent.apply(window.webpager,_789);
}
});
})();
object.use("dom",function(dom){
if(window._developer_no_webpager){
return;
}
function _78a(){
var _78b,_78c,_78d="imengine",_78e;
if(dom.id("bottombar")==null){
return;
}
if(/\((iPhone|iPad|iPod)/i.test(navigator.userAgent)||(!window.ActiveXObject&&!window.XMLHttpRequest)){
return;
}
if(dom.id(_78d)!=null){
return;
}
if(XN.disableWebpager){
return;
}
_78e="http://wpi.renren.com/wtalk/ime.htm?v="+(new Date()).getTime();
function _78f(){
if(dom.id(_78d)!=null){
return;
}
var _790=document.createElement("iframe");
_790.setAttribute("id",_78d);
_790.setAttribute("name",_78d);
_790.setAttribute("src",_78e);
_790.setAttribute("frameBorder","0");
_790.style.cssText="position:absolute;left:-1000pt;top:20pt;width:200pt;height:100pt";
document.body.appendChild(_790);
if(_78c){
clearTimeout(_78c);
_78c=null;
}
};
_78b=(XN.browser.IE?6:3)*1000;
_78c=null;
window.addEvent("load",function(){
if(_78c!=null){
clearTimeout(_78c);
_78c=null;
_78f();
}
});
_78c=setTimeout(_78f,_78b);
};
dom.ready(_78a);
});
XN.dom.ready(function(){
if(window._developer_no_backToTop){
return;
}
var _791=jxn("#bottombar");
var _792=jxn("#toolBackTo");
if(_792.length>0){
_792.bind("click",function(e){
var fix=Sizzle("#sidebar2 .ready-to-fix")[0];
setTimeout(function(){
window.scrollTo(0,0);
},0);
if(fix){
jxn(fix).removeClass("already-fixed");
}
XN.event.stop(e);
return false;
});
}
var _793=function(){
var btm=jxn(window).scrollTop()+jxn(window).height();
_791.css({"position":"absolute","top":btm+"px"}).show();
};
var _794=function(){
var stop=jxn(window).scrollTop();
if(stop<30){
_792.hide();
return;
}
var btm=stop+jxn(window).height();
var _795=5;
if(XN.BROWSER.IE6){
_795=10;
}
if(_792.length>0){
var _796=false;
var rw=1120;
if(jxn("#friends-panel .actived").length>0){
_796=true;
rw=1360;
}
var ww=jxn(window).width();
var w=0;
if(ww>rw){
w=(ww-(_796?250:0)-980)/2+10+980;
}else{
w=ww-60-(_796?250:0)-_795;
}
_792.css("left",w+"px").show();
if(XN.BROWSER.IE6){
_792.css({"position":"absolute","top":(btm-98)+"px"}).show();
}
}
if(stop==btm){
XN.events.fireEvent("scrollbottom");
}
};
_794();
var _797=false;
window.addEvent("changeLayout",function(e){
_794();
});
jxn(window).bind("resize",function(){
if(!_797){
_797=true;
if(XN.BROWSER.IE6){
_791.hide();
}
_792.hide();
setTimeout(function(){
_794();
if(XN.BROWSER.IE6){
_793();
}
_797=false;
},200);
}
});
var _798=false;
var _799=null;
if(XN.BROWSER.IE6){
jxn(window).bind("scroll",function(){
clearTimeout(_799);
if(!_798){
ishided=true;
_791.hide();
_792.hide();
}
_799=setTimeout(function(){
_793();
_794();
ishided=false;
},200);
});
}else{
jxn(window).bind("scroll",function(){
clearTimeout(_799);
_799=setTimeout(function(){
_794();
},10);
});
}
});
(function(){
XN.ui.positionFixedElement=function(_79a){
this.config={ele:null,holder:"dropmenuHolder",alignWith:null,alignType:"4-1",x:0,y:0};
XN.$extend(this.config,_79a);
this.init();
return this;
};
var dist="-9999px",unit="px",rl="realLeft",rt="realTop",ow="offsetWidth",oh="offsetHeight",ie6=XN.browser.IE6;
XN.ui.positionFixedElement.prototype={ele:null,holder:null,alignWith:null,alignType:null,x:0,y:0,init:function(){
this.ele=$(this.config.ele);
this.holder=$(this.config.holder);
this.alignWith=$(this.config.alignWith);
this.alignType=this.config.alignType;
this.x=this.config.x;
this.y=this.config.y;
this.ele.style.position=ie6?"absolute":"fixed";
this.ele.style.left=dist;
this.ele.style.top=dist;
this.holder.appendChild(this.ele);
var This=this;
XN.event.addEvent(window,"resize",function(){
This.refresh();
});
if(ie6){
XN.event.addEvent(window,"scroll",function(){
This.refresh();
});
}
},methods:{"1-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+unit;
},"1-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+unit;
},"1-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)-f[oh]+unit;
},"1-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)-f[oh]+unit;
},"2-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+unit;
},"2-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+unit;
},"2-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)-f[oh]+unit;
},"2-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)-f[oh]+unit;
},"3-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]+unit;
},"3-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]-f[ow]+unit;
f.style.top=y+el[rt]()+el[oh]+unit;
},"3-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]-f[oh]+unit;
},"3-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+el[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]-f[oh]+unit;
},"4-1":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]+unit;
},"4-2":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]+unit;
},"4-3":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)-f[ow]+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]-f[oh]+unit;
},"4-4":function(f,el,x,y,p){
f.style.left=x+el[rl]()-(ie6?p[rl]():0)+unit;
f.style.top=y+el[rt]()-(ie6?p[rt]():0)+el[oh]-f[oh]+unit;
}},show:function(){
if(this._isShow){
return;
}
this._isShow=true;
this.methods[this.alignType](this.ele,this.alignWith,this.x,this.y,this.holder);
},hide:function(){
if(!this._isShow){
return;
}
this._isShow=false;
this.ele.style.top=dist;
this.ele.style.left=dist;
},refresh:function(){
if(this._isShow){
this._isShow=false;
this.show();
}
}};
})();
XN.dom.ready(function(){
if(!$("moreWeb")){
return;
}
new XN.UI.menu({bar:"moreWeb",menu:"moredownWeb",fireOn:"click",alignType:"3-2",offsetX:1});
});
object.define("xn/site-nav/drop-menu-seed","dom",function(_79b,_79c,_79d){
if(window._developer_no_dropmenu){
return;
}
var dom=_79b("dom");
dom.ready(function(){
var btn=dom.id("profileMenuActive"),_79e=dom.id("showAppMenu"),_79f;
if(btn){
btn.addEvent("mouseover",function(){
btn.removeEvent("mouseover",arguments.callee);
btn.topNavhovered=true;
btn.addEvent("mouseleave",function(){
btn.topNavhovered=false;
btn.removeEvent("mouseleave",arguments.callee);
});
setTimeout(function(){
_79b.async("xn/site-nav/drop-menu-profile",function(dmp){
dmp.init();
});
},200);
});
}
if(_79e){
_79e.addEvent("mouseover",function(){
var _7a0=arguments.callee;
_79e.removeEvent("mouseover",_7a0);
_79e.topNavhovered=true;
_79e.addEvent("mouseleave",function(){
_79e.topNavhovered=false;
_79e.removeEvent("mouseleave",arguments.callee);
if(_79f){
clearTimeout(_79f);
_79f=null;
_79e.addEvent("mouseover",_7a0);
}
});
_79f=setTimeout(function(){
_79f=null;
_79b.async("xn/site-nav/drop-menu-app",function(dma){
dma.init();
});
},50);
});
}
});
});
object.execute("xn/site-nav/drop-menu-seed");
object.use("dom, events",function(dom,_7a1){
var _7a2="v6_header_notify",_7a3=["remind","apply","notice"];
function _7a4(type){
switch(type){
case "remind":
return 0;
break;
case "apply":
return 1;
break;
case "notice":
return 2;
break;
}
};
var _7a5={setNum:function(i,num){
var _7a6=this,_7a7=$("navMessage").getElementsByTagName("span");
num=num>=100?"99":num;
if(!dom.getElement("i",_7a7[i])){
var el=document.createElement("i");
el.style.display="none";
el.innerHTML="<u><b>&nbsp;</b><var>0</var></u><em>&nbsp;</em>";
_7a7[i].appendChild(el);
}
_7a7[i].getElementsByTagName("var")[0].innerHTML=num;
if(parseInt(num,10)>0&&!XN.element.hasClassName(_7a7[i],"click")){
var cur=_7a7[i].getElementsByTagName("i")[0];
if(!XN.element.visible(cur)){
cur.style.display="block";
_7a6.show(i);
}
}else{
_7a7[i].getElementsByTagName("i")[0].style.display="none";
}
},set:function(type,num){
var id=_7a4(type);
this.setNum(id,num);
},show:function(i){
var time,_7a8=this,tab=$("navMessage").getElementsByTagName("span")[i],obj=dom.getElement("i",tab);
setTimeout(function(){
obj.addClass("t");
},0);
},setUI:function(data){
this.set("remind",parseInt(data.remind,10));
this.set("apply",parseInt(data.apply,10));
this.set("notice",parseInt(data.notice,10));
},reset:function(type){
var id=_7a4(type);
this.setNum(id,0);
if(!window.webpager){
return;
}
var s=XN.json.parse(webpager.getItem(_7a2));
if(s){
s[type]=0;
}
webpager.setItem(_7a2,JSON.stringify(s));
},get:function(){
new XN.net.xmlhttp({url:"http://notify.renren.com/rmessage/getunreadcount?t="+new Date().getTime(),data:"",method:"get",onSuccess:function(r){
var res=XN.json.parse(r.responseText);
res.t=XN.cookie.get("t");
XN.cookie.del("first_login_flag","/","renren.com","false");
webpager.setItem(_7a2,JSON.stringify(res));
if(typeof (isHome)=="boolean"){
isHome=null;
}
},onError:function(){
XN.DO.showError("网络通信失败,请重试");
}});
}};
var _7a9={mouseover:function(item,i){
var flag=dom.getElement("i",item),type=_7a3[i];
if(flag&&XN.element.visible(flag)){
XN.element.addClass(item,"hover");
}else{
XN.element.addClass(item,"on");
}
XN.element.addClass(item,type+"-hover");
},mouseout:function(item,i){
var type=_7a3[i];
XN.element.delClass(item,"on");
XN.element.delClass(item,"hover");
XN.element.delClass(item,type+"-hover");
},click:function(item,i){
var type=_7a3[i];
XN.loadFile("http://s.xnimg.cn/a56606/n/core/js/message-center-all.js",function(){
MessageCenter.bubble=_7a5;
if(XN.element.hasClassName(item,"click")){
XN.element.delClass(item,"click");
$("showMessage").style.display="none";
MessageCenter.setDefault();
return;
}
MessageCenter.setDefault();
XN.element.addClass(item,"click");
MessageCenter.setIframePosition(item);
MessageCenter.init(type,_7a5);
XN.element.addClass(item,type+"-click");
_7a5.reset(type);
});
}};
function _7aa(){
Sizzle("#navMessage span").forEach(function(item,i){
XN.event.addEvent(item,"click",function(e){
_7a9.click(item,i);
e.stopPropagation();
});
XN.event.addEvent(item,"mouseover",function(){
_7a9.mouseover(item,i);
});
XN.event.addEvent(item,"mouseout",function(){
_7a9.mouseout(item,i);
});
});
};
dom.ready(function(){
_7aa();
var _7ab,_7ac=(XN.browser.IE?4:2)*1000;
if(XN.browser.IE6||XN.browser.IE7){
_7ac=12*1000;
}
function _7ad(){
_7ab=setTimeout(function(){
if(_7ab){
clearTimeout(_7ab);
_7ab=null;
}
_7a5.get();
},_7ac);
};
window.addEvent("webpagerReady",function(e){
var _7ae,s=webpager.getItem(_7a2),_7af=XN.cookie.get("first_login_flag");
var ts=["","remind","apply","notice"];
if(window.asyncHTMLManager){
window.asyncHTMLManager.addEvent("load",function(){
if(typeof (isHome)=="boolean"){
_7ad();
}
});
}
if(s){
s=JSON.parse(s);
if(!_7af){
_7ae=s;
}
}
if(!_7ae||typeof (isHome)=="boolean"){
_7ad();
}else{
_7a5.setUI(s);
}
webpager.addEvent("storage",function(e){
if(/v6_header_notify/.test(e.keys)){
var s=webpager.getItem(_7a2);
s=JSON.parse(s);
_7a5.setUI(s);
}
});
window.webpager.messager.addEvent("message",function(e){
if(e.service=="notify"&&e.source=="webpager"){
var msg=e.data;
setTimeout(function(){
if(webpager.isLocalConnect()){
window.imengine.imHelper.playSound();
}
var s=JSON.parse(webpager.getItem(_7a2));
s[ts[msg.bigtype]]++;
webpager.setItem(_7a2,JSON.stringify(s));
},1000*Math.random());
}
});
});
});
});
object.define("xn/site-nav/switch-account-seed",function(_7b0,_7b1,_7b2){
window.__logEvents=false;
_7b0.async("xn/site-nav/switch-account",function(sa){
sa.accMenu.show();
sa.fetch();
window.__logEvents=true;
});
});
XN.dom.ready(function(){
if(window._developer_no_account){
return;
}
var m=$("accountMenu");
if(!m){
return;
}
m.addEvent("mouseover",function(){
m.delEvent("mouseover",arguments.callee);
object.execute("xn/site-nav/switch-account-seed");
});
});
object.define("xn/site-nav/search-seed",function(_7b3,_7b4,_7b5){
window.__logEvents=false;
_7b3.async("xn/site-nav/search",function(){
var _7b6=$("navSearchInput");
_7b6.blur();
_7b6.focus();
window.__logEvents=true;
});
});
XN.dom.ready(function(){
if(window._developer_no_search){
return;
}
var _7b7=$("navSearchInput"),sb=$("searchBtnAC");
if(!_7b7||!sb){
return;
}
if(window.asyncHTMLManager){
sb.addEvent=function(type,_7b8,_7b9){
window.asyncHTMLManager.dom.Element.prototype.addEvent.call(sb,type,_7b8,_7b9);
};
}
if(_7b7.value==""){
_7b7.value=="找人、视频、日志、照片";
_7b7.setAttribute("defaultval","找人、视频、日志、照片");
}
window.g_searchFromHead=function(){
var val=_7b7.value;
if(val==="找人、视频、日志、照片"||XN.string.trim(val)===""){
val="";
}
window.location.href="http://browse.renren.com/s/all?from=opensearch&q="+encodeURIComponent(val);
};
sb.addEvent("click",function(e){
if(XN.browser.IE6){
setTimeout(function(){
window.g_searchFromHead();
},1);
}else{
window.g_searchFromHead();
}
});
_7b7.addEvent("focus",function(){
var val=_7b7.value;
defaultVal=_7b7.getAttribute("defaultval");
if(XN.string.trim(val)===XN.string.trim(defaultVal)){
_7b7.value="";
_7b7.style.color="#000";
_7b7.style.backgroundColor="#fff";
sb.style.backgroundColor="#fff";
}
if(!_7b7.hack4guide){
object.execute("xn/site-nav/search-seed");
if(XN.user.id){
var url="http://search.renren.com/LogSystem/cache?userid="+XN.user.id+"&from=2"+"&t="+Math.random();
new Image().src=url;
}
}
_7b7.hack4guide=true;
});
_7b7.addEvent("blur",function(){
var val=_7b7.value,_7ba=_7b7.getAttribute("defaultval");
if(XN.string.trim(val)===""){
_7b7.value=_7ba;
_7b7.style.color="#999";
_7b7.style.backgroundColor="#edf3f9";
sb.style.backgroundColor="#edf3f9";
}
});
});
XN.photoSeedHandler=(function(){
function _7bb(json){
var list,i,len,item;
try{
XN.getFileVersion(json.version);
}
catch(e){
}
for(list=json.preLoad,i=0,len=list.length;i<len;i+=1){
try{
if(list[i].path()){
item=new Image();
item.src=list[i].src;
}
}
catch(e){
}
}
for(list=json.exec,i=0,len=list.length;i<len;i+=1){
try{
if(list[i].path()){
XN.loadFile(list[i].src);
}
}
catch(e){
}
}
};
XN.dom.ready(function(){
if(window._developer_no_photo_all){
return;
}
var psrc="http://s.xnimg.cn/n/apps/photo/modules/seed/photoSeed.js?r="+(+new Date());
if(window.photoSeedSrc){
psrc=window.photoSeedSrc;
}
var _7bc=document.createElement("script");
_7bc.type="text/javascript";
_7bc.async=true;
_7bc.src=psrc;
document.getElementsByTagName("head")[0].appendChild(_7bc);
});
return _7bb;
})();
object.add("xn","./net",function(_7bd){
});
object.define("xn.net","sys, net",function(_7be,_7bf){
var sys=_7be("sys");
var net=_7be("net");
var _7c0=net.Request.prototype.send;
net.Request.set("send",function(self,data){
data=data||self.data||"";
if(self.method=="post"&&XN.get_check&&!/[\?|\&]requestToken=/.test(data)){
data+=(data?"&":"")+"requestToken="+XN.get_check;
}
if(self.method=="post"&&XN.get_check_x&&!/[\?|\&]_rtk=/.test(data)){
data+=(data?"&":"")+"_rtk="+XN.get_check_x;
}
_7c0.call(self,data);
});
this.Request=net.Request;
});
(function(){
function _7c1(e){
var _7c2=$(XN.event.element(e||window.event));
if(!_7c2){
return false;
}
if(!_7c2.hasClassName("share_new")){
return false;
}
if(!window.XNShareObject){
setTimeout(function(){
XN.loadFile("http://s.xnimg.cn/jspro/xn.app.share.js",function(){
XN.event.delEvent(document,"mouseover",_7c1);
XNShareObject._register({autoRegister:false,floatMode:true});
XNShareObject.forceShowFloat(_7c2);
});
},0);
}
};
XN.event.addEvent(document,"mouseover",_7c1);
})();
object.define("xn.mention","dom",function(_7c3,_7c4,_7c5){
var dom=_7c3("dom");
var _7c6=this.initMain=function(obj,item,cb){
if(obj.mentionInited){
return;
}
obj.mentionInited=true;
_7c3.async("xn/mentionMain",function(_7c7){
_7c7.Mention.init({obj:item.obj,ugcId:item.ugcId||"",ugcType:item.ugcType||"",ownerId:item.ownerId||"",scrollable:item.scrollable,popTop:item.popTop,whisper:(item.whisper===false?false:true),button:item.button||null,limit:item.limit||10,recentLimit:item.recentLimit||6});
if(cb){
cb();
}
});
};
var _7c8=function(obj,e){
if(e){
XN.event.stop(e);
}
dom.wrap(obj);
if(XN.browser.WebKit){
obj.focus();
obj.blur();
}
obj.focusToPosition(obj.get("selectionStart"));
var _7c9=function(){
var _7ca="@",_7cb=XN.form.help(obj).getRealValue();
var cpos=obj.get("selectionStart");
if(_7cb.slice(cpos-1,cpos)=="@"){
_7ca="";
}
obj.value=_7cb.slice(0,cpos)+_7ca+_7cb.slice(cpos);
obj.focusToPosition(cpos+_7ca.length);
obj.mention.check();
};
if(XN.browser.IE){
setTimeout(_7c9,0);
}else{
_7c9();
}
};
function _7cc(item){
var obj=item.obj;
if(obj.mention){
return;
}
obj=$(obj);
obj.addEvent("focus",function(){
_7c6(obj,item,function(){
if(item.initCallback){
item.initCallback(obj);
}
});
});
if(item.button){
XN.event.addEvent(item.button,"click",function(e){
if(obj.mention){
_7c8(obj,e);
}else{
_7c6(obj,item,function(){
_7c8(obj,e);
if(item.initCallback){
item.initCallback(obj);
}
});
}
});
}
};
this.Mention={init:function(list){
if(isArray(list)){
for(var i=0,l=list.length;i<l;i++){
_7cc(list[i]);
}
}else{
if(isObject(list)){
_7cc(list);
}
}
}};
});
object.use("xn.mention",function(xn){
window.Mention=xn.mention.Mention;
});
XN.dom.ready(function(){
if(showNamecardCondition()){
object.use("xn/namecard/seed",function(seed){
seed.loadNamecardMatrix();
});
}
});
function showNamecardCondition(){
if(XN.user&&XN.user.id){
return true;
}else{
return false;
}
};
object.define("xn/namecard/seed","dom",function(_7cd,_7ce){
_7ce.loadNamecardMatrix=function(){
var dom=_7cd("dom");
window.globalNamecard={"additionalY":0,"delRcd":false};
window.globalNamecard.addFriendCallback=function(_7cf){
if(!window.globalNamecard.delRcd){
return;
}
var id=window.globalNamecard.delRcd.id.substring(16),type=window.globalNamecard.delRcd.getAttribute("data-type");
if(!_7cf){
logRcd({action:"RecFcard_addFriendEnd",guest_id:id,type:type});
window.globalNamecard.delRcd.parentNode.removeChild(window.globalNamecard.delRcd);
}else{
logRcd({action:"RecFcard_addFriend",guest_id:id,type:type});
}
};
dom.wrap(document.body).delegate("*[namecard]","mouseover",function(ele){
dom.wrap(document.body).undelegate("*[namecard]","mouseover",arguments.callee);
_7cd.async("xn/namecard, xn/showShareFriend",function(_7d0){
window.globalNamecard.namecard=new _7d0.Namecard(window.globalNamecard.additionalY,ele);
});
});
};
});

