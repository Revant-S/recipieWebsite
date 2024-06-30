this._s=this._s||{};(function(_){var window=this;
try{
_.v_s=_.A("KSk4yc",[]);
}catch(e){_._DumpException(e)}
try{
var Mqh;Mqh=RegExp("tw-data-text|tw-data-placeholder");_.Nqh=new function(){this.ka=!1};_.MO=function(a,b){this.pre=a;this.ka=this.pre.firstElementChild;this.textarea=b||null};
_.MO.prototype.kc=function(a){_.Zl(this.ka,a);this.pre.className=this.pre.className.replace(Mqh,"tw-data-text");this.pre.className.indexOf("tw-data-placeholder")>=0||this.ka.innerHTML.length!=0||(_.Zl(this.ka,this.UW()),this.pre.className=this.pre.className.replace(Mqh,"tw-data-placeholder"));this.textarea&&this.textarea.value!=a&&(this.textarea.value=a)};_.MO.prototype.Zb=function(){return this.textarea?this.textarea.value:this.pre.className.indexOf("tw-data-text")>=0?_.sBa(this.ka):""};
_.MO.prototype.UW=function(){return this.pre.getAttribute("data-placeholder")||""};_.MO.prototype.y_=function(a){this.pre.setAttribute("data-placeholder",a);this.pre.className.indexOf("tw-data-placeholder")>=0&&_.Zl(this.ka,a)};
}catch(e){_._DumpException(e)}
try{
var NFb,LFb,MFb;
_.OFb=function(){var a=_.bh?_.wl("center_col"):_.wl("rcnt");if(a===null)return[];for(var b=new Set,c=_.$a(LFb),d=c.next();!d.done;d=c.next()){d=d.value;var e=Array.prototype.slice.call(a.querySelectorAll(d[0]),0);e=_.$a(e);for(var f=e.next();!f.done;f=e.next())if(f=f.value,d.length===2&&d[1]==="PARENT")f=f.parentElement,f!==null&&b.add(f);else if(d.length===2&&d[1]==="DESCENDANTS"){if(f=f.childNodes,f!==null){f=_.$a(f);for(var g=f.next();!g.done;g=f.next())b.add(g.value)}}else b.add(f)}a=Array.from(b);
b=[];for(c=0;c<a.length;c++)if(a[c]instanceof HTMLElement){d=a[c];e=!0;f=d.getBoundingClientRect();if(d.offsetParent===null||f.width===0||f.height===0)e=!1;if(e)for(f=0;f<a.length;f++)if(c!==f&&_.of(a[f],d)){e=!1;break}if(e)for(f=_.$a(MFb),g=f.next();!g.done;g=f.next()){g=g.value;if(g.length===2&&g[1]==="ANCESTORS")d.querySelector(g[0])!==null&&(e=!1);else if(g.length===2&&g[1]==="DESCENDANTS")for(var h=d.parentElement;h;){if(h.matches(g[0])){e=!1;break}h=h.parentElement}else if(g.length===2&&g[1]===
"PARENT"){if(h=d.childNodes,h!==null){h=_.$a(h);for(var l=h.next();!l.done;l=h.next())if(l.value.matches(g[0])){e=!1;break}}}else if(d.matches(g[0])){e=!1;break}if(!e)break}e&&b.push(d)}return NFb(b)};NFb=function(a){var b=[].concat(_.od(_.yl("*")));return a.sort(function(c,d){return b.indexOf(c)-b.indexOf(d)})};
LFb=[["#rso > div:not(.ULSxyf):not([jsname='TlEBqd']):not(.MjjYud):not(.hlcw0c)[class]"],["#rso div.ULSxyf:not(:only-of-type):not(:last-of-type)"],["#rso div.MjjYud:not(:only-of-type):not(:last-of-type)"],["#rso div.hlcw0c:not(:only-of-type):not(:last-of-type)"],["#rso div.ULSxyf:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#rso div.MjjYud:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#rso div.hlcw0c:not(:only-of-type):last-of-type:not(:nth-of-type(2))"],["#bres"],["[jsname='xQjRM']"],
[".g-blk"],["[jsname='GDPwke'] div.MjjYud"],[".e6hL7d","DESCENDANTS"],[".kkCXT"],[".cu-container"],["#tvcap"],["#bottomads"]];MFb=[];
}catch(e){_._DumpException(e)}
try{
_.y("KSk4yc");
var P9w=function(a){return new _.Gm(a.top,a.right,a.bottom,a.left)},Q9w=function(a){var b=Object.values(a.getClientRects()).filter(function(d){return d.width>0});if(b.length===0)return P9w(a.range.getBoundingClientRect());a=P9w(b[0]);b=_.$a(b.slice(1));for(var c=b.next();!c.done;c=b.next())c=c.value,a.bottom!==c.bottom?a=P9w(c):a.right=c.right;return a},R9w=function(a){var b=Object.values(a.getClientRects()).filter(function(d){return d.width>0});if(b.length===0)return P9w(a.range.getBoundingClientRect());
a=P9w(b[0]);b=_.$a(b.slice(1));for(var c=b.next();!c.done;c=b.next()){c=c.value;if(a.top!==c.top)break;a.right=c.right}return a};var S9w=function(a){this.range=a;for(var b=[],c=a.startContainer;c;){a:{try{if(c.nodeType!==3||!_.ke(c.parentNode)){var d=!1;break a}}catch(f){d=!1;break a}d=c.parentNode;var e;if(e=d.tagName!=="STYLE".toString())e=_.Pe().getComputedStyle(d),e=!(e.getPropertyValue("position")!=="fixed"&&!d.offsetParent)&&e.getPropertyValue("display")!=="none"&&e.getPropertyValue("visibility")!=="hidden"&&e.getPropertyValue("user-select")!=="none"&&e.getPropertyValue("-moz-user-select")!=="none"&&e.getPropertyValue("-ms-user-select")!==
"none"&&e.getPropertyValue("-webkit-user-select")!=="none";d=e}d&&c.nodeValue.trim()&&b.push(c);if(c===a.endContainer)break;c=_.iBa(c)}this.ka=b};S9w.prototype.toString=function(){var a=this;return this.ka.length===0?"":this.ka.map(function(b){var c=0,d=b.nodeValue.length;b===a.range.startContainer&&(c=a.range.startOffset);b===a.range.endContainer&&(d=a.range.endOffset);return b.nodeValue.substring(c,d).trim()}).filter(Boolean).join(" ")};
S9w.prototype.getClientRects=function(){var a=document.createRange(),b=this.ka[0],c=b===this.range.startContainer?this.range.startOffset:0;if(typeof b!=="object")return a.getClientRects();a.setStart(b,c);b=this.ka[this.ka.length-1];a.setEnd(b,b===this.range.endContainer?this.range.endOffset:b.nodeValue.length);return a.getClientRects()};var T9w=function(a){_.D.call(this,a.La);var b=this;this.yk=[];this.Ra=this.Ta=this.Aa=!1;this.wa=null;this.Pa=!1;this.ka=null;this.Ba=!1;this.Ok=a.Ed.snackbar;this.tooltip=this.Wa("suEOdc");this.tooltip.isEmpty()&&_.ogb(this,"suEOdc").then(function(c){return b.tooltip=c});this.Ka=this.Wa("ojBOCb");this.Ga=this.Wa("GV5nwf");this.oa=this.Wa("V4zgDf");this.oa.isEmpty()&&_.ogb(this,"V4zgDf").then(function(c){return b.oa=c});this.Eb=this.getData("mcl").number(0);this.Ua=this.getData("mwl").number(-1);
this.Ab=this.getData("dl").number(0);this.Ib=_.wl("result-stats");this.Kb=function(c){return new S9w(c)};this.Cb=this.getData("cf").Hb();this.Va=this.getData("ath").Hb();a=_.Pe();this.yk.push(_.Ud(a,"mousedown",function(c){b.onMouseDown(c)},!1,this));this.yk.push(_.Ud(a,"keydown",function(c){b.onKeyDown(c)},!1,this));this.yk.push(_.Ud(a,"mouseup",function(c){b.onMouseUp(c)},!1,this));this.yk.push(_.Ud(a,"keyup",function(){b.onKeyUp()},!1,this));this.yk.push(_.Ud(document,"selectionchange",function(){b.eEa()},
!1,this))};_.E(T9w,_.D);T9w.Ia=function(){return{Ed:{snackbar:"m3HYFd"}}};_.k=T9w.prototype;_.k.Ob=function(){this.yk.forEach(function(a){return a&&_.Tk(a)});this.yk.length=0};_.k.MFe=function(){this.Wa("neDtlb").isEmpty()||(this.Wa("ZmkZfc").hide(),this.Om())};
_.k.szg=function(a){var b=this.Wa("ZmkZfc");if(!b.isEmpty()&&!b.Sd()&&this.tooltip!==null){b.show();this.tooltip.addClass("lSNMte");this.Wa("YljVCc").hide();var c=U9w(this);c&&V9w(this,c,!0);W9w(this);this.Ba=!1;a=a.targetElement.el();_.Au([new _.yn(b.el(),"show")],{triggerElement:a})}};_.k.OFe=function(a){if(a.data.TE()==="context_actions_dictionary"||a.data.TE()==="context_actions_translate")this.Ra=!0};_.k.NFe=function(){this.Ra=!1};
var X9w=function(a,b){if(a.split(" ").length===1){var c=_.Pe().getSelection();if(c&&c.anchorNode&&c.focusNode&&c.anchorNode===c.focusNode){var d=c.anchorNode;a=null;d.textContent&&(b.set("ctif",d.textContent),(d=d.parentElement)&&d.textContent&&(b.set("ctif",d.textContent),a=d,(d.tagName==="B"||d.tagName==="EM")&&(d=d.parentElement)&&d.textContent&&(b.set("ctif",d.textContent),a=d)));a!==null&&c.rangeCount>0?(c=c.getRangeAt(0),d=c.cloneRange(),d.selectNodeContents(a),d.setEnd(c.startContainer,c.startOffset),
a=d.toString().length,d.setEnd(c.endContainer,c.endOffset),c=d.toString().length,b.set("slst",a),b.set("sled",c)):isNaN(c.anchorOffset)||isNaN(c.focusOffset)||(a=Math.max(c.anchorOffset,c.focusOffset),b.set("slst",Math.min(c.anchorOffset,c.focusOffset)),b.set("sled",a))}}};_.k=T9w.prototype;_.k.onMouseDown=function(a){this.Ta=a=_.of(this.tooltip.el(),a.target);!a&&this.tooltip.Sd()&&this.Om()};
_.k.onKeyDown=function(a){a.keyCode===27&&(this.Pa=!0,this.Om());var b;if(b=a.shiftKey)b=a.keyCode,b=b===38||b===40||b===37||b===39;b&&(this.Pa=!1,this.Om());a.ctrlKey&&a.shiftKey&&a.key==="X"&&this.tooltip.Sd()&&W9w(this)};_.k.onMouseUp=function(a){var b=_.of(this.tooltip.el(),a.target);this.Ta=b;b||(this.wa=a.clientX&&a.clientY?new _.hl(a.clientX,a.clientY):null,Y9w(this,!1))};_.k.onKeyUp=function(){var a=!this.tooltip.Sd()&&!this.ka;!this.Pa&&a&&(this.wa=null,Y9w(this,!0))};
_.k.eEa=function(){this.Aa=!0;(_.Pe().getSelection()||"").toString()===""&&!this.Ta&&this.tooltip.Sd()&&(this.Om(),this.Aa=!1)};
var Z9w=function(a,b,c){if(!b||c.has(b))return!1;c.add(b);if(!a.Va&&b.tagName==="A".toString()||_.zDa(b)==="button"||b===a.Ib||b.id==="tw-container")return!0;var d=_.I.nsf(b);return d&&d.toString()!=="auto"&&d.toString()!=="0"?!0:Z9w(a,_.ie(b),c)},$9w=function(a,b){var c=new Set;b=b.getRangeAt(0);for(var d=b.startContainer;d;){try{if(d.nodeType!==3&&d.nodeType!==1)return!1}catch(e){return!1}if(d.parentElement&&Z9w(a,d.parentElement,c))return!1;if(d===b.endContainer)break;d=_.iBa(d)}return!0},Y9w=
function(a,b){if(a.Aa){a.Aa=!1;var c=U9w(a),d=c?c.toString().slice(0,a.Eb).trim():null;a.Fa("Uo0pef").toggle(b);d&&(a.Ua===-1||d.split(" ").length<=a.Ua)?a$w(a,function(){return b$w(a,c,d)}):a.tooltip.Sd()&&a.Om()}},a$w=function(a,b){a.ka&&((0,_.En)(a.ka),a.ka=null);a.ka=(0,_.Dn)(b,a.Ab)},b$w=function(a,b,c){if(a.oa!==null&&a.oa.el()!==null){var d=new Map;d.set("rt","tc");d.set("sltx",c);X9w(c,d);_.mw(a.oa.el(),{context:d}).then(function(e){a.showTooltip(e,b);(0,_.Dn)(function(){return _.cg()},200)})}};
T9w.prototype.showTooltip=function(a,b){a&&!this.Wa("YljVCc").isEmpty()&&this.tooltip!==null&&this.tooltip.el()!==null&&(this.Cb||this.tooltip===null||(this.tooltip.show(),V9w(this,b,!1),this.tooltip.setStyle("opacity",.999),this.tooltip.setStyle("transform","scale(1)")),this.Ba||(_.Au([new _.yn(this.tooltip.el(),"show")],{}),this.Ba=!0))};
var V9w=function(a,b,c){if(a.tooltip!==null&&a.tooltip.yb()!==null){var d=a.tooltip.yb().offsetWidth,e=a.tooltip.yb().offsetHeight,f=_.Pe(),g=Q9w(b),h=R9w(b);b=!1;a.wa&&a.wa.y+20<g.bottom&&(b=!0);g.bottom+8+a.tooltip.yb().offsetHeight>f.innerHeight&&(b=!0);h.top+8+a.tooltip.yb().offsetHeight<f.innerHeight&&(b=!1);b?e=f.pageYOffset+h.top-8-e:(e=f.pageYOffset+g.bottom+8,h=g);a.tooltip.setStyle("top",Math.round(e)+"px");g=_.Pe();e=g.innerWidth-16;f=h.left;var l=h.right,m=a.wa;h=f+8;var q=l-8;!m||h>=
q?f=(f+l)/2:(f=m.x,f=f<h?h:f>q?q:f);h=f;f=h-d/2;f<16?f=Math.min(16,h-12):f+d>e&&(f=Math.max(e-d,h+12-d));d=h-f;f+=g.pageXOffset;c||a.tooltip.setStyle("left",Math.round(f)+"px");g=b;c=c?null:Math.round(d-6);a.Ka.isEmpty()||a.Ga.isEmpty()||(e=g?a.Ga:a.Ka,g=g?a.Ka:a.Ga,c&&e.setStyle("left",c+"px"),e.show(),g.hide());a.tooltip.setStyle("transform-origin",d+"px "+(b?"bottom":"top"));a.ka=null}};
T9w.prototype.Om=function(){this.tooltip!==null&&this.oa!==null&&this.oa.el()!==null&&this.Ra!==!0&&(this.ka&&((0,_.En)(this.ka),this.ka=null),this.tooltip.setStyle("top",0),this.tooltip.setStyle("left",0),this.tooltip.hide(),this.tooltip.setStyle("opacity",.001),this.tooltip.setStyle("transform","scale(0.1)"),this.tooltip.removeClass("lSNMte"),_.nw(this.oa.el()),this.Ba=!1)};
var U9w=function(a){var b=_.Pe().getSelection();return b&&b.rangeCount!==0&&$9w(a,b)?a.Kb(b.getRangeAt(0)):(a.tooltip.Sd()&&a.Om(),null)};T9w.prototype.hb=function(a){document.execCommand("copy")&&this.Ok&&this.Ok.show();_.Bu(a.targetElement.el());this.Om()};var W9w=function(a){var b=a.Wa("YljVCc");(b.Sd()?_.Zn(b,'[role="button"], button, a'):_.Zn(a.Wa("ZmkZfc"),'[role="button"], button, a')).focus()};_.J(T9w.prototype,"dK6tkc",function(){return this.hb});_.J(T9w.prototype,"VvZoSb",function(){return this.NFe});
_.J(T9w.prototype,"MlP2je",function(){return this.OFe});_.J(T9w.prototype,"v9xSwd",function(){return this.szg});_.J(T9w.prototype,"Geh74d",function(){return this.MFe});_.J(T9w.prototype,"k4Iseb",function(){return this.Ob});_.tr(_.v_s,T9w);

_.z();
}catch(e){_._DumpException(e)}
try{
_.Ybc=_.A("UBXHI",[]);
}catch(e){_._DumpException(e)}
try{
_.y("UBXHI");
_.Zbc=function(a){_.D.call(this,a.La);this.loaded=!1;this.root=this.getRoot()};_.E(_.Zbc,_.D);_.Zbc.Ia=_.D.Ia;_.Zbc.prototype.ka=function(){if(!this.loaded){var a=_.vm(this.root.getData("src"));a&&(a!==this.root.Uc("src")&&_.bo(this.root,"src",a),this.root.setData("src",null));this.loaded=!0}};_.J(_.Zbc.prototype,"QT8fkf",function(){return this.ka});_.tr(_.Ybc,_.Zbc);
_.z();
}catch(e){_._DumpException(e)}
try{
_.$bc=_.A("R3fhkb",[_.Mn,_.Ybc]);
}catch(e){_._DumpException(e)}
try{
_.y("R3fhkb");
var acc=function(a){_.Zbc.call(this,a.La);this.window=a.service.window;this.oa()};_.E(acc,_.Zbc);acc.Ia=function(){return{service:{window:_.Qn}}};
acc.prototype.oa=function(){if(!this.loaded){var a=this.root.yb();if((a.offsetHeight!==0||a.offsetWidth!==0)&&_.I.getComputedStyle(a,"visibility")!=="hidden"&&_.I.S0(a.parentElement)){var b;(a=(b=a.parentElement)==null?void 0:b.getBoundingClientRect())&&(a.left>this.window.get().scrollX+this.window.get().innerWidth||a.left+a.width<this.window.get().scrollX)||this.ka()}}};_.J(acc.prototype,"iSvHDf",function(){return this.oa});_.tr(_.$bc,acc);
_.z();
}catch(e){_._DumpException(e)}
try{
_.vle=_.A("b1c25c",[]);
}catch(e){_._DumpException(e)}
try{
_.tle=_.A("yceHgb",[]);
}catch(e){_._DumpException(e)}
try{
_.Loe=_.A("xSkvYe",[_.kyb,_.gq,_.pq,_.tle,_.UVa,_.MVa,_.vle,_.vq,_.qq]);
}catch(e){_._DumpException(e)}
try{
_.y("Tia57b");
var Moe=function(a){_.Pn.call(this,a.La)};_.E(Moe,_.Pn);Moe.nb=_.Pn.nb;Moe.Ia=_.Pn.Ia;_.k=Moe.prototype;_.k.q6c=function(a,b){(b===void 0?0:b)&&_.Lc(location,_.oc(a));return!1};_.k.Sla=function(){};_.k.Dua=function(){var a=this;this.ka||(this.ka=new Promise(function(b){_.jg(_.qf(a,{service:{Rxa:_.Loe}}).addCallback(function(c){return b(c.service.Rxa)}),function(){return b(a)})}));return this.ka};
_.k.Hma=function(a,b){b=b===void 0?{}:b;b.replace?(_.Mc(location,_.oc(a)),location.reload()):_.Lc(location,_.oc(a));return Promise.resolve(null)};_.k.prefetch=function(){return Promise.resolve(null)};_.Rn(_.RVa,Moe);
_.z();
}catch(e){_._DumpException(e)}
try{
_.y("KpRAue");
_.Tpe=new _.Id(_.SVa);
_.z();
}catch(e){_._DumpException(e)}
try{
_.Noe=function(a){if(!a.match(/.*com\/search|^\/search/))return _.ld(new _.Rd("url invalid not /search")),{LSa:!1,iId:!0};var b,c=(b=_.tm(a,"tbm"))!=null?b:"web";return c!=="web"?(_.ld(new _.Rd("url invalid mode: "+c)),{LSa:!1,iId:!0}):_.tm(a,"q")||_.bRb&&_.tm(a,"vsrid")?{LSa:!0}:(_.ld(new _.Rd("url invalid missing query: "+a)),{LSa:!1,reload:!0})};
}catch(e){_._DumpException(e)}
try{
_.y("NyeqM");
_.VO=function(a){_.Pn.call(this,a.La);this.wa=!1;this.oa=new Map;this.rr=a.service.rr};_.E(_.VO,_.Pn);_.VO.nb=_.Pn.nb;_.VO.Ia=function(){return{service:{rr:_.Tpe}}};_.VO.prototype.ka=function(){};_.rzh=function(a,b){b=b===void 0?{}:b;pzh(a);b.fxh&&_.qzh(a);b.feature&&a.rr.Sla(b);if(b.E_){var c=b.E_;c=Array.isArray(c)?c:[c];c=_.$a(c);for(var d=c.next();!d.done;d=c.next())a.oa.set(d.value,b)}};_.qzh=function(a){return _.Ig(function(b){return b.return(a.rr.Dua().then(function(c){a.rr=c}))})};
_.VO.prototype.transition=function(a,b){return this.rr.Hma(a,b)};
var pzh=function(a){a.wa||(a.wa=!0,document.addEventListener("click",function(b){try{var c=b.target.closest("a");if(c&&!b.defaultPrevented){var d=szh(a,c);if(d){var e,f=(e=d.onClick)==null?void 0:e.call(d,b,c),g=Object.assign({},d,f);if(_.Noe(c.href).LSa){if(!g.triggerElement){for(d=c;d&&!d.getAttribute("jslog")&&!d.getAttribute("data-ved");)d=d.parentElement;d||_.ld(Error("hm"));g.triggerElement=d}a.transition(c.href,g);b.preventDefault()}}}}catch(h){_.ld(Error("fm`"+h))}}))},szh=function(a,b){try{var c=
tzh(a,b),d=c?a.oa.get(c):void 0;return((d==null?0:d.omit)?uzh(d.omit):[]).find(function(e){return typeof e==="function"?e(b):a.isMatch(b,e)||typeof e==="string"&&b.closest(e)})?void 0:d}catch(e){_.ld(Error("gm`"+e))}},tzh=function(a,b){return Array.from(a.oa.keys()).find(function(c){return a.isMatch(b,c)})};_.VO.prototype.isMatch=function(a,b){return b instanceof Element?a.isEqualNode(b):a.matches(b)||a.closest(b)};var uzh=function(a){return Array.isArray(a)?a:[a]};_.Rn(_.D1a,_.VO);

_.z();
}catch(e){_._DumpException(e)}
try{
_.Xzh=_.A("O9SqHb",[_.qq,_.D1a]);
}catch(e){_._DumpException(e)}
try{
_.Tzh=!!(_.Lg[37]>>21&1);_.Uzh=!!(_.Lg[37]>>22&1);_.Vzh=!!(_.Lg[37]>>23&1);_.Wzh=!!(_.Lg[37]>>24&1);
}catch(e){_._DumpException(e)}
try{
_.y("O9SqHb");
var Yzh=function(a){_.D.call(this,a.La);this.Hc=a.service.Hc;_.Uzh&&(this.ZI=a.service.ZI)};_.E(Yzh,_.D);Yzh.Ia=function(){return{service:{Hc:_.pv,ZI:_.VO}}};Yzh.prototype.navigate=function(a){var b=this,c,d,e;return _.Ig(function(f){switch(f.ka){case 1:c=!!a&&a.data||{};d=c.url;if(!b.ZI){f.Gb(2);break}_.xg(f,3);return f.yield(b.ZI.transition(d.toString()),5);case 5:return f.return();case 3:e=_.Bg(f),_.ld(Error("km`"+e));case 2:b.Hc.dh(d,!1),_.wg(f)}})};_.J(Yzh.prototype,"RySO6d",function(){return this.navigate});
_.tr(_.Xzh,Yzh);
_.z();
}catch(e){_._DumpException(e)}
})(this._s);
// Google Inc.
