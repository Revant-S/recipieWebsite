"use strict";this.default_IdentityRotateCookiesHttp=this.default_IdentityRotateCookiesHttp||{};(function(_){var window=this;
try{
_._F_toggles_initialize=function(a){(typeof globalThis!=="undefined"?globalThis:typeof self!=="undefined"?self:this)._F_toggles=a||[]};(0,_._F_toggles_initialize)([0xc30, ]);
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q=function(a){return aa?p?p.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1},v=function(a){var b;a:{if(b=u.navigator)if(b=b.userAgent)break a;b=""}return b.indexOf(a)!=-1},w=function(){return aa?!!p&&p.brands.length>0:!1},x=function(){return w()?q("Chromium"):(v("Chrome")||v("CriOS"))&&!(w()?0:v("Edge"))||v("Silk")},y=function(){return typeof BigInt==="function"},D=function(a){var b=a<0;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=z(A(c,a)),b=c.next().value,
a=c.next().value,c=b);B=c>>>0;C=a>>>0},ea=function(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else y()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=Math.floor(a/1E7),a%=1E7),c>=1E7&&(b+=Math.floor(c/1E7),c%=1E7),c=b+da(c)+da(a));return c},da=function(a){a=String(a);return"0000000".slice(a.length)+a},fa=function(){var a=B,b=C;b&2147483648?y()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):
(b=z(A(a,b)),a=b.next().value,b=b.next().value,a="-"+ea(a,b)):a=ea(a,b);return a},A=function(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]},ha=function(a){a=a>>14&1023;return a===0?536870912:a},ja=function(a){return!(!a||typeof a!=="object"||a.g!==ia)},E=function(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object},H=function(a,b,c){if(!Array.isArray(a)||a.length)return!1;var e=F(a);if(e&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;G(a,e|1);return!0},
I=function(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a},la=function(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:ka.test(a)},ma=function(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337},na=function(a){a=Math.trunc(a);if(!Number.isSafeInteger(a)){D(a);var b=B,c=C;
if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a},oa=function(a){var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));if(!ma(a)){if(a.length<16)D(Number(a));else if(y())a=BigInt(a),B=Number(a&BigInt(4294967295))>>>0,C=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");C=B=0;for(var c=a.length,e=b,f=(c-b)%6+b;f<=c;e=f,f+=6)e=Number(a.slice(e,f)),C*=1E6,B=B*1E6+e,B>=4294967296&&
(C+=Math.trunc(B/4294967296),C>>>=0,B>>>=0);b&&(b=z(A(B,C)),a=b.next().value,b=b.next().value,B=a,C=b)}a=fa()}return a},K=function(a,b,c){a==null&&(a=J);J=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("i");e=F(a);if(e&2048)throw Error("j");if(e&64)return a;e|=64;if(c&&(e|=512,c!==a[0]))throw Error("k");a:{c=a;var f=c.length;if(f){var k=f-1;if(E(c[k])){e|=256;b=k-(+!!(e&512)-1);if(b>=1024)throw Error("l");e=e&-16760833|(b&1023)<<
14;break a}}if(b){b=Math.max(b,f-(+!!(e&512)-1));if(b>1024)throw Error("m");e=e&-16760833|(b&1023)<<14}}}G(a,e);return a},qa=function(a,b){return pa(b)},pa=function(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(H(a,void 0,0))return}else if(ra&&a!=null&&a instanceof Uint8Array){if(sa){for(var b="",c=0,e=a.length-10240;c<e;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,
c?a.subarray(c):a);a=btoa(b)}else{b===void 0&&(b=0);if(!L){L={};c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");e=["+/=","+/","-_=","-_.","-_"];for(var f=0;f<5;f++){var k=c.concat(e[f].split(""));ta[f]=k;for(var d=0;d<k.length;d++){var g=k[d];L[g]===void 0&&(L[g]=d)}}}b=ta[b];c=Array(Math.floor(a.length/3));e=b[64]||"";for(f=k=0;k<a.length-2;k+=3){var h=a[k],l=a[k+1];g=a[k+2];d=b[h>>2];h=b[(h&3)<<4|l>>4];l=b[(l&15)<<2|g>>6];g=b[g&63];c[f++]=d+h+l+g}d=0;g=e;switch(a.length-
k){case 2:d=a[k+1],g=b[(d&15)<<2]||e;case 1:a=a[k],c[f]=b[a>>2]+b[(a&3)<<4|d>>4]+g+e}a=c.join("")}return a}}return a},va=function(a,b,c,e,f){if(a!=null){if(Array.isArray(a))a=H(a,void 0,0)?void 0:f&&F(a)&2?a:ua(a,b,c,e!==void 0,f);else if(E(a)){var k={},d;for(d in a)k[d]=va(a[d],b,c,e,f);a=k}else a=b(a,e);return a}},ua=function(a,b,c,e,f){var k=e||c?F(a):0;e=e?!!(k&32):void 0;a=Array.prototype.slice.call(a);for(var d=0;d<a.length;d++)a[d]=va(a[d],b,c,e,f);c&&c(k,a);return a},xa=function(a){return a.G===
wa?a.toJSON():pa(a)},O=function(a){var b=M?a.l:ua(a.l,xa,void 0,void 0,!1);var c=!M;var e=ya?void 0:a.constructor.J;var f=N(c?a.l:b);if(a=b.length){var k=b[a-1],d=E(k);d?a--:k=void 0;f=+!!(f&512)-1;var g=b;if(d){b:{var h=k;var l={};d=!1;if(h)for(var m in h)if(isNaN(+m))l[m]=h[m];else{var r=h[m];Array.isArray(r)&&(H(r,e,+m)||ja(r)&&r.size===0)&&(r=null);r==null&&(d=!0);r!=null&&(l[m]=r)}if(d){for(var n in l)break b;l=null}else l=h}h=l==null?k!=null:l!==k}for(var t;a>0;a--){n=a-1;m=g[n];n-=f;if(!(m==
null||H(m,e,n)||ja(m)&&m.size===0))break;t=!0}if(g!==b||h||t){if(!c)g=Array.prototype.slice.call(g,0,a);else if(t||h||l)g.length=a;l&&g.push(l)}b=g}return b},za=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},Aa=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},Ba=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,
"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("a");},P=Ba(this),Q=function(a,b){if(b)a:{var c=P;a=a.split(".");for(var e=0;e<a.length-1;e++){var f=a[e];if(!(f in c))break a;c=c[f]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&b!=null&&Aa(c,a,{configurable:!0,writable:!0,value:b})}},z=function(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:za(a)};
throw Error("b`"+String(a));},Ca=typeof Object.create=="function"?Object.create:function(a){var b=function(){};b.prototype=a;return new b},R;if(typeof Object.setPrototypeOf=="function")R=Object.setPrototypeOf;else{var Da;a:{var Ea={a:!0},Fa={};try{Fa.__proto__=Ea;Da=Fa.a;break a}catch(a){}Da=!1}R=Da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError("c`"+a);return a}:null}
var Ga=R,Ha=function(a,b){a.prototype=Ca(b.prototype);a.prototype.constructor=a;if(Ga)Ga(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.K=b.prototype};
Q("Promise",function(a){function b(){this.g=null}function c(d){return d instanceof f?d:new f(function(g){g(d)})}if(a)return a;b.prototype.h=function(d){if(this.g==null){this.g=[];var g=this;this.i(function(){g.m()})}this.g.push(d)};var e=P.setTimeout;b.prototype.i=function(d){e(d,0)};b.prototype.m=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var g=0;g<d.length;++g){var h=d[g];d[g]=null;try{h()}catch(l){this.j(l)}}}this.g=null};b.prototype.j=function(d){this.i(function(){throw d;
})};var f=function(d){this.h=0;this.i=void 0;this.g=[];this.u=!1;var g=this.j();try{d(g.resolve,g.reject)}catch(h){g.reject(h)}};f.prototype.j=function(){function d(l){return function(m){h||(h=!0,l.call(g,m))}}var g=this,h=!1;return{resolve:d(this.B),reject:d(this.m)}};f.prototype.B=function(d){if(d===this)this.m(new TypeError("d"));else if(d instanceof f)this.D(d);else{a:switch(typeof d){case "object":var g=d!=null;break a;case "function":g=!0;break a;default:g=!1}g?this.A(d):this.s(d)}};f.prototype.A=
function(d){var g=void 0;try{g=d.then}catch(h){this.m(h);return}typeof g=="function"?this.F(g,d):this.s(d)};f.prototype.m=function(d){this.v(2,d)};f.prototype.s=function(d){this.v(1,d)};f.prototype.v=function(d,g){if(this.h!=0)throw Error("e`"+d+"`"+g+"`"+this.h);this.h=d;this.i=g;this.h===2&&this.C();this.H()};f.prototype.C=function(){var d=this;e(function(){if(d.I()){var g=P.console;typeof g!=="undefined"&&g.error(d.i)}},1)};f.prototype.I=function(){if(this.u)return!1;var d=P.CustomEvent,g=P.Event,
h=P.dispatchEvent;if(typeof h==="undefined")return!0;typeof d==="function"?d=new d("unhandledrejection",{cancelable:!0}):typeof g==="function"?d=new g("unhandledrejection",{cancelable:!0}):(d=P.document.createEvent("CustomEvent"),d.initCustomEvent("unhandledrejection",!1,!0,d));d.promise=this;d.reason=this.i;return h(d)};f.prototype.H=function(){if(this.g!=null){for(var d=0;d<this.g.length;++d)k.h(this.g[d]);this.g=null}};var k=new b;f.prototype.D=function(d){var g=this.j();d.o(g.resolve,g.reject)};
f.prototype.F=function(d,g){var h=this.j();try{d.call(g,h.resolve,h.reject)}catch(l){h.reject(l)}};f.prototype.then=function(d,g){function h(n,t){return typeof n=="function"?function(ba){try{l(n(ba))}catch(ca){m(ca)}}:t}var l,m,r=new f(function(n,t){l=n;m=t});this.o(h(d,l),h(g,m));return r};f.prototype.catch=function(d){return this.then(void 0,d)};f.prototype.o=function(d,g){function h(){switch(l.h){case 1:d(l.i);break;case 2:g(l.i);break;default:throw Error("f`"+l.h);}}var l=this;this.g==null?k.h(h):
this.g.push(h);this.u=!0};f.resolve=c;f.reject=function(d){return new f(function(g,h){h(d)})};f.race=function(d){return new f(function(g,h){for(var l=z(d),m=l.next();!m.done;m=l.next())c(m.value).o(g,h)})};f.all=function(d){var g=z(d),h=g.next();return h.done?c([]):new f(function(l,m){function r(ba){return function(ca){n[ba]=ca;t--;t==0&&l(n)}}var n=[],t=0;do n.push(void 0),t++,c(h.value).o(r(n.length-1),m),h=g.next();while(!h.done)})};return f});Q("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
Q("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});Q("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});Q("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
Q("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});Q("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});Q("Array.prototype.includes",function(a){return a?a:function(b,c){var e=this;e instanceof String&&(e=String(e));var f=e.length;c=c||0;for(c<0&&(c=Math.max(c+f,0));c<f;c++){var k=e[c];if(k===b||Object.is(k,b))return!0}return!1}});
Q("String.prototype.includes",function(a){return a?a:function(b,c){if(this==null)throw new TypeError("g`includes");if(b instanceof RegExp)throw new TypeError("h`includes");return this.indexOf(b,c||0)!==-1}});Q("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});var u=this||self,Ia=function(a,b){a:{var c=["WIZ_global_data","oxN3nb"];for(var e=u,f=0;f<c.length;f++)if(e=e[c[f]],e==null){c=null;break a}c=e}a=c&&c[a];return a!=null?a:b},S=u._F_toggles||[];var Ja=!!(S[0]&2048),Ka=!!(S[0]&64),La=!!(S[0]&4096),Ma=!!(S[0]&32);var Na=Ia(1,!0),aa=Ja?La:Ia(610401301,!1),ya=Ja?Ka||!Ma:Ia(188588736,Na);var p,Oa=u.navigator;p=Oa?Oa.userAgentData||null:null;var Pa=w()?!1:v("Trident")||v("MSIE");!v("Android")||x();x();v("Safari")&&(x()||(w()?0:v("Coast"))||(w()?0:v("Opera"))||(w()?0:v("Edge"))||(w()?q("Microsoft Edge"):v("Edg/"))||w()&&q("Opera"));var ta={},L=null;var ra=typeof Uint8Array!=="undefined",sa=!Pa&&typeof btoa==="function";var B=0,C=0;var T=typeof Symbol==="function"&&typeof Symbol()==="symbol",U;U=typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():void 0;var Qa=T?function(a,b){a[U]|=b}:function(a,b){a.g!==void 0?a.g|=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})},F=T?function(a){return a[U]|0}:function(a){return a.g|0},N=T?function(a){return a[U]}:function(a){return a.g},G=T?function(a,b){a[U]=b}:function(a,b){a.g!==void 0?a.g=b:Object.defineProperties(a,{g:{value:b,configurable:!0,writable:!0,enumerable:!1}})};var wa={},ia={},Ra=function(){};Object.freeze(new function(){});Object.freeze(new Ra);Object.freeze(new Ra);var ka=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;var J;var Sa=function(a,b,c){var e=a.l,f=N(e);if(f&2)throw Error();a:{var k=ha(f);if(b>=k){var d=f;if(f&256)var g=e[e.length-1];else{if(c==null)break a;g=e[k+(+!!(f&512)-1)]={};d|=256}g[b]=c;b<k&&(e[b+(+!!(f&512)-1)]=void 0);d!==f&&G(e,d)}else e[b+(+!!(f&512)-1)]=c,f&256&&(c=e[e.length-1],b in c&&delete c[b])}return a},Ta=function(a){var b=b===void 0?0:b;a=a.l;var c=N(a),e=ha(c);1>=e?a=c&256?a[a.length-1][1]:void 0:(c=1+(+!!(c&512)-1),a=c<0||c>=a.length||c>=e?void 0:a[c]);a=a==null?a:la(a)?typeof a==="number"?
na(a):oa(a):void 0;return a!=null?a:b},Ua=function(a,b,c){if(c!=null){if(typeof c!=="number")throw I("int32");if(!Number.isFinite(c))throw I("int32");c|=0}Sa(a,b,c)};var M,V=function(a,b,c){this.l=K(a,b,c)};V.prototype.toJSON=function(){return O(this)};var Va=function(a){try{return M=!0,JSON.stringify(O(a),qa)}finally{M=!1}};V.prototype.G=wa;V.prototype.toString=function(){try{return M=!0,O(this).toString()}finally{M=!1}};var Wa=function(a){this.l=K(a)};Ha(Wa,V);var Xa=function(a){this.l=K(a,0,"identity.hfcr")};Ha(Xa,V);var Ya=function(a){return function(b){if(b==null||b=="")b=new a;else{b=JSON.parse(b);if(!Array.isArray(b))throw Error("n");Qa(b,32);J=b;b=new a(b);J=void 0}return b}}(Xa);var Za=function(a,b,c,e,f){this.m=a;this.i=b;this.j=c;this.h=e;this.g=f};Za.prototype.start=function(){var a=this;if(typeof fetch!=="undefined")if($a()){var b=ab(),c=Date.now();b&&b>c+this.g*1E3&&(b=Date.now()+this.g*1E3,W(b));var e=function(){bb(a).then(function(){setTimeout(e,a.g*1E3)})};setTimeout(function(){e()},b&&b>c?b-c:0)}else cb(this)};
var cb=function(a){db(a).then(function(){var b=function(){db(a).then(function(){setTimeout(b,a.g*1E3)})};setTimeout(function(){b()},a.g*1E3)})},db=function(a){var b=eb(a);return fb(b).then(function(c){c=gb(Ta(c));c!==a.g&&(a.g=c)}).catch(function(){a.g*=2})},bb=function(a){var b=ab();if(!b||Date.now()>=b){var c=Math.floor(Math.random()*1E3);return new Promise(function(e){setTimeout(function(){var f=ab();!f||Date.now()>=f?e(hb(a)):e()},c)})}return Promise.resolve()},fb=function(a){a={method:"POST",
credentials:"same-origin",cache:"no-store",mode:"same-origin",headers:{"Content-Type":"application/json"},body:Va(a)};if(typeof AbortController!=="undefined"){var b=new AbortController;setTimeout(function(){b.abort()},3E4);a.signal=b.signal}return fetch(new Request("/RotateCookies",a)).then(function(c){return c.text()}).then(function(c){return Ya(JSON.stringify(JSON.parse(c.substring(5))[0]))})},eb=function(a){var b=new Wa;var c=a.m;if(c!=null){var e=!!e;if(!la(c))throw I("int64");typeof c==="string"?
c=oa(c):e?(c=Math.trunc(c),Number.isSafeInteger(c)?c=String(c):(e=String(c),ma(e)?c=e:(D(c),c=fa()))):c=na(c)}b=Sa(b,2,c);a.i!==0&&Ua(b,1,a.i);a.j!==0&&Ua(b,3,a.j);a.h!==0&&Ua(b,4,a.h);return b},hb=function(a){W(Date.now()+a.g*1E3);var b=eb(a);return fb(b).then(function(c){c=gb(Ta(c));c!==a.g&&(W(Date.now()+c*1E3),a.g=c)}).catch(function(){a.g*=2;W(Date.now()+a.g*1E3)})},$a=function(){try{var a=window.localStorage;if(!a)return!1;a.setItem("cookieRotationStorageAccessTest","1");a.removeItem("cookieRotationStorageAccessTest");
return!0}catch(b){return!1}},gb=function(a){a<60&&(a=60);return a},ab=function(){try{var a=window.localStorage.getItem("nextRotationAttemptTs");if(!a)return null;var b=Math.floor(Number(a));return Number.isNaN(b)?null:b}catch(c){return null}},W=function(a){try{window.localStorage.setItem("nextRotationAttemptTs",a.toString())}catch(b){}};var ib=function(a,b,c,e,f){(new Za(a,b,c,e,f)).start()},X=["init"],Y=u;X[0]in Y||typeof Y.execScript=="undefined"||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||ib===void 0?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=ib;
}catch(e){_._DumpException(e)}
}).call(this,this.default_IdentityRotateCookiesHttp);
// Google Inc.
