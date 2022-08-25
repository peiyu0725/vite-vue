(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const p of g)if(p.type==="childList")for(const b of p.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function d(g){const p={};return g.integrity&&(p.integrity=g.integrity),g.referrerpolicy&&(p.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?p.credentials="include":g.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function h(g){if(g.ep)return;g.ep=!0;const p=d(g);fetch(g.href,p)}})();function kc(o,l){const d=Object.create(null),h=o.split(",");for(let g=0;g<h.length;g++)d[h[g]]=!0;return l?g=>!!d[g.toLowerCase()]:g=>!!d[g]}const A4="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",y4=kc(A4),x4="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",E4=kc(x4);function kC(o){return!!o||o===""}function ls(o){if(xe(o)){const l={};for(let d=0;d<o.length;d++){const h=o[d],g=It(h)?I4(h):ls(h);if(g)for(const p in g)l[p]=g[p]}return l}else{if(It(o))return o;if(Nt(o))return o}}const S4=/;(?![^(]*\))/g,D4=/:(.+)/;function I4(o){const l={};return o.split(S4).forEach(d=>{if(d){const h=d.split(D4);h.length>1&&(l[h[0].trim()]=h[1].trim())}}),l}function Rn(o){let l="";if(It(o))l=o;else if(xe(o))for(let d=0;d<o.length;d++){const h=Rn(o[d]);h&&(l+=h+" ")}else if(Nt(o))for(const d in o)o[d]&&(l+=d+" ");return l.trim()}function wC(o){if(!o)return null;let{class:l,style:d}=o;return l&&!It(l)&&(o.class=Rn(l)),d&&(o.style=ls(d)),o}function T4(o,l){if(o.length!==l.length)return!1;let d=!0;for(let h=0;d&&h<o.length;h++)d=fi(o[h],l[h]);return d}function fi(o,l){if(o===l)return!0;let d=V0(o),h=V0(l);if(d||h)return d&&h?o.getTime()===l.getTime():!1;if(d=ma(o),h=ma(l),d||h)return o===l;if(d=xe(o),h=xe(l),d||h)return d&&h?T4(o,l):!1;if(d=Nt(o),h=Nt(l),d||h){if(!d||!h)return!1;const g=Object.keys(o).length,p=Object.keys(l).length;if(g!==p)return!1;for(const b in o){const _=o.hasOwnProperty(b),k=l.hasOwnProperty(b);if(_&&!k||!_&&k||!fi(o[b],l[b]))return!1}}return String(o)===String(l)}function wc(o,l){return o.findIndex(d=>fi(d,l))}const Qt=o=>It(o)?o:o==null?"":xe(o)||Nt(o)&&(o.toString===_C||!Pe(o.toString))?JSON.stringify(o,vC,2):String(o),vC=(o,l)=>l&&l.__v_isRef?vC(o,l.value):Yr(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((d,[h,g])=>(d[`${h} =>`]=g,d),{})}:sr(l)?{[`Set(${l.size})`]:[...l.values()]}:Nt(l)&&!xe(l)&&!CC(l)?String(l):l,st={},Kr=[],ao=()=>{},M4=()=>!1,B4=/^on[^a-z]/,Sa=o=>B4.test(o),ag=o=>o.startsWith("onUpdate:"),Bt=Object.assign,lg=(o,l)=>{const d=o.indexOf(l);d>-1&&o.splice(d,1)},N4=Object.prototype.hasOwnProperty,Ye=(o,l)=>N4.call(o,l),xe=Array.isArray,Yr=o=>Da(o)==="[object Map]",sr=o=>Da(o)==="[object Set]",V0=o=>Da(o)==="[object Date]",Pe=o=>typeof o=="function",It=o=>typeof o=="string",ma=o=>typeof o=="symbol",Nt=o=>o!==null&&typeof o=="object",cg=o=>Nt(o)&&Pe(o.then)&&Pe(o.catch),_C=Object.prototype.toString,Da=o=>_C.call(o),P4=o=>Da(o).slice(8,-1),CC=o=>Da(o)==="[object Object]",dg=o=>It(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,na=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vc=o=>{const l=Object.create(null);return d=>l[d]||(l[d]=o(d))},z4=/-(\w)/g,fn=vc(o=>o.replace(z4,(l,d)=>d?d.toUpperCase():"")),L4=/\B([A-Z])/g,Eo=vc(o=>o.replace(L4,"-$1").toLowerCase()),cs=vc(o=>o.charAt(0).toUpperCase()+o.slice(1)),oa=vc(o=>o?`on${cs(o)}`:""),es=(o,l)=>!Object.is(o,l),Qr=(o,l)=>{for(let d=0;d<o.length;d++)o[d](l)},Xl=(o,l,d)=>{Object.defineProperty(o,l,{configurable:!0,enumerable:!1,value:d})},mi=o=>{const l=parseFloat(o);return isNaN(l)?o:l};let H0;const O4=()=>H0||(H0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nn;class ug{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&Nn&&(this.parent=Nn,this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}run(l){if(this.active){const d=Nn;try{return Nn=this,l()}finally{Nn=d}}}on(){Nn=this}off(){Nn=this.parent}stop(l){if(this.active){let d,h;for(d=0,h=this.effects.length;d<h;d++)this.effects[d].stop();for(d=0,h=this.cleanups.length;d<h;d++)this.cleanups[d]();if(this.scopes)for(d=0,h=this.scopes.length;d<h;d++)this.scopes[d].stop(!0);if(this.parent&&!l){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function ds(o){return new ug(o)}function AC(o,l=Nn){l&&l.active&&l.effects.push(o)}function R4(){return Nn}function _i(o){Nn&&Nn.cleanups.push(o)}const hg=o=>{const l=new Set(o);return l.w=0,l.n=0,l},yC=o=>(o.w&pi)>0,xC=o=>(o.n&pi)>0,F4=({deps:o})=>{if(o.length)for(let l=0;l<o.length;l++)o[l].w|=pi},j4=o=>{const{deps:l}=o;if(l.length){let d=0;for(let h=0;h<l.length;h++){const g=l[h];yC(g)&&!xC(g)?g.delete(o):l[d++]=g,g.w&=~pi,g.n&=~pi}l.length=d}},_h=new WeakMap;let Xs=0,pi=1;const Ch=30;let io;const er=Symbol(""),Ah=Symbol("");class Ia{constructor(l,d=null,h){this.fn=l,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,AC(this,h)}run(){if(!this.active)return this.fn();let l=io,d=di;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=io,io=this,di=!0,pi=1<<++Xs,Xs<=Ch?F4(this):U0(this),this.fn()}finally{Xs<=Ch&&j4(this),pi=1<<--Xs,io=this.parent,di=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){io===this?this.deferStop=!0:this.active&&(U0(this),this.onStop&&this.onStop(),this.active=!1)}}function U0(o){const{deps:l}=o;if(l.length){for(let d=0;d<l.length;d++)l[d].delete(o);l.length=0}}function V4(o,l){o.effect&&(o=o.effect.fn);const d=new Ia(o);l&&(Bt(d,l),l.scope&&AC(d,l.scope)),(!l||!l.lazy)&&d.run();const h=d.run.bind(d);return h.effect=d,h}function H4(o){o.effect.stop()}let di=!0;const EC=[];function ar(){EC.push(di),di=!1}function lr(){const o=EC.pop();di=o===void 0?!0:o}function Fn(o,l,d){if(di&&io){let h=_h.get(o);h||_h.set(o,h=new Map);let g=h.get(d);g||h.set(d,g=hg()),SC(g)}}function SC(o,l){let d=!1;Xs<=Ch?xC(o)||(o.n|=pi,d=!yC(o)):d=!o.has(io),d&&(o.add(io),io.deps.push(o))}function Ho(o,l,d,h,g,p){const b=_h.get(o);if(!b)return;let _=[];if(l==="clear")_=[...b.values()];else if(d==="length"&&xe(o))b.forEach((k,A)=>{(A==="length"||A>=h)&&_.push(k)});else switch(d!==void 0&&_.push(b.get(d)),l){case"add":xe(o)?dg(d)&&_.push(b.get("length")):(_.push(b.get(er)),Yr(o)&&_.push(b.get(Ah)));break;case"delete":xe(o)||(_.push(b.get(er)),Yr(o)&&_.push(b.get(Ah)));break;case"set":Yr(o)&&_.push(b.get(er));break}if(_.length===1)_[0]&&yh(_[0]);else{const k=[];for(const A of _)A&&k.push(...A);yh(hg(k))}}function yh(o,l){const d=xe(o)?o:[...o];for(const h of d)h.computed&&$0(h);for(const h of d)h.computed||$0(h)}function $0(o,l){(o!==io||o.allowRecurse)&&(o.scheduler?o.scheduler():o.run())}const U4=kc("__proto__,__v_isRef,__isVue"),DC=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(ma)),$4=_c(),W4=_c(!1,!0),q4=_c(!0),G4=_c(!0,!0),W0=K4();function K4(){const o={};return["includes","indexOf","lastIndexOf"].forEach(l=>{o[l]=function(...d){const h=We(this);for(let p=0,b=this.length;p<b;p++)Fn(h,"get",p+"");const g=h[l](...d);return g===-1||g===!1?h[l](...d.map(We)):g}}),["push","pop","shift","unshift","splice"].forEach(l=>{o[l]=function(...d){ar();const h=We(this)[l].apply(this,d);return lr(),h}}),o}function _c(o=!1,l=!1){return function(h,g,p){if(g==="__v_isReactive")return!o;if(g==="__v_isReadonly")return o;if(g==="__v_isShallow")return l;if(g==="__v_raw"&&p===(o?l?zC:PC:l?NC:BC).get(h))return h;const b=xe(h);if(!o&&b&&Ye(W0,g))return Reflect.get(W0,g,p);const _=Reflect.get(h,g,p);return(ma(g)?DC.has(g):U4(g))||(o||Fn(h,"get",g),l)?_:kt(_)?b&&dg(g)?_:_.value:Nt(_)?o?us(_):Zt(_):_}}const Y4=IC(),Q4=IC(!0);function IC(o=!1){return function(d,h,g,p){let b=d[h];if(ts(b)&&kt(b)&&!kt(g))return!1;if(!o&&!ts(g)&&(ec(g)||(g=We(g),b=We(b)),!xe(d)&&kt(b)&&!kt(g)))return b.value=g,!0;const _=xe(d)&&dg(h)?Number(h)<d.length:Ye(d,h),k=Reflect.set(d,h,g,p);return d===We(p)&&(_?es(g,b)&&Ho(d,"set",h,g):Ho(d,"add",h,g)),k}}function Z4(o,l){const d=Ye(o,l);o[l];const h=Reflect.deleteProperty(o,l);return h&&d&&Ho(o,"delete",l,void 0),h}function J4(o,l){const d=Reflect.has(o,l);return(!ma(l)||!DC.has(l))&&Fn(o,"has",l),d}function X4(o){return Fn(o,"iterate",xe(o)?"length":er),Reflect.ownKeys(o)}const TC={get:$4,set:Y4,deleteProperty:Z4,has:J4,ownKeys:X4},MC={get:q4,set(o,l){return!0},deleteProperty(o,l){return!0}},eB=Bt({},TC,{get:W4,set:Q4}),tB=Bt({},MC,{get:G4}),gg=o=>o,Cc=o=>Reflect.getPrototypeOf(o);function Pl(o,l,d=!1,h=!1){o=o.__v_raw;const g=We(o),p=We(l);d||(l!==p&&Fn(g,"get",l),Fn(g,"get",p));const{has:b}=Cc(g),_=h?gg:d?bg:pa;if(b.call(g,l))return _(o.get(l));if(b.call(g,p))return _(o.get(p));o!==g&&o.get(l)}function zl(o,l=!1){const d=this.__v_raw,h=We(d),g=We(o);return l||(o!==g&&Fn(h,"has",o),Fn(h,"has",g)),o===g?d.has(o):d.has(o)||d.has(g)}function Ll(o,l=!1){return o=o.__v_raw,!l&&Fn(We(o),"iterate",er),Reflect.get(o,"size",o)}function q0(o){o=We(o);const l=We(this);return Cc(l).has.call(l,o)||(l.add(o),Ho(l,"add",o,o)),this}function G0(o,l){l=We(l);const d=We(this),{has:h,get:g}=Cc(d);let p=h.call(d,o);p||(o=We(o),p=h.call(d,o));const b=g.call(d,o);return d.set(o,l),p?es(l,b)&&Ho(d,"set",o,l):Ho(d,"add",o,l),this}function K0(o){const l=We(this),{has:d,get:h}=Cc(l);let g=d.call(l,o);g||(o=We(o),g=d.call(l,o)),h&&h.call(l,o);const p=l.delete(o);return g&&Ho(l,"delete",o,void 0),p}function Y0(){const o=We(this),l=o.size!==0,d=o.clear();return l&&Ho(o,"clear",void 0,void 0),d}function Ol(o,l){return function(h,g){const p=this,b=p.__v_raw,_=We(b),k=l?gg:o?bg:pa;return!o&&Fn(_,"iterate",er),b.forEach((A,x)=>h.call(g,k(A),k(x),p))}}function Rl(o,l,d){return function(...h){const g=this.__v_raw,p=We(g),b=Yr(p),_=o==="entries"||o===Symbol.iterator&&b,k=o==="keys"&&b,A=g[o](...h),x=d?gg:l?bg:pa;return!l&&Fn(p,"iterate",k?Ah:er),{next(){const{value:y,done:v}=A.next();return v?{value:y,done:v}:{value:_?[x(y[0]),x(y[1])]:x(y),done:v}},[Symbol.iterator](){return this}}}}function ti(o){return function(...l){return o==="delete"?!1:this}}function nB(){const o={get(p){return Pl(this,p)},get size(){return Ll(this)},has:zl,add:q0,set:G0,delete:K0,clear:Y0,forEach:Ol(!1,!1)},l={get(p){return Pl(this,p,!1,!0)},get size(){return Ll(this)},has:zl,add:q0,set:G0,delete:K0,clear:Y0,forEach:Ol(!1,!0)},d={get(p){return Pl(this,p,!0)},get size(){return Ll(this,!0)},has(p){return zl.call(this,p,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Ol(!0,!1)},h={get(p){return Pl(this,p,!0,!0)},get size(){return Ll(this,!0)},has(p){return zl.call(this,p,!0)},add:ti("add"),set:ti("set"),delete:ti("delete"),clear:ti("clear"),forEach:Ol(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(p=>{o[p]=Rl(p,!1,!1),d[p]=Rl(p,!0,!1),l[p]=Rl(p,!1,!0),h[p]=Rl(p,!0,!0)}),[o,d,l,h]}const[oB,iB,rB,sB]=nB();function Ac(o,l){const d=l?o?sB:rB:o?iB:oB;return(h,g,p)=>g==="__v_isReactive"?!o:g==="__v_isReadonly"?o:g==="__v_raw"?h:Reflect.get(Ye(d,g)&&g in h?d:h,g,p)}const aB={get:Ac(!1,!1)},lB={get:Ac(!1,!0)},cB={get:Ac(!0,!1)},dB={get:Ac(!0,!0)},BC=new WeakMap,NC=new WeakMap,PC=new WeakMap,zC=new WeakMap;function uB(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hB(o){return o.__v_skip||!Object.isExtensible(o)?0:uB(P4(o))}function Zt(o){return ts(o)?o:yc(o,!1,TC,aB,BC)}function fg(o){return yc(o,!1,eB,lB,NC)}function us(o){return yc(o,!0,MC,cB,PC)}function gB(o){return yc(o,!0,tB,dB,zC)}function yc(o,l,d,h,g){if(!Nt(o)||o.__v_raw&&!(l&&o.__v_isReactive))return o;const p=g.get(o);if(p)return p;const b=hB(o);if(b===0)return o;const _=new Proxy(o,b===2?h:d);return g.set(o,_),_}function tr(o){return ts(o)?tr(o.__v_raw):!!(o&&o.__v_isReactive)}function ts(o){return!!(o&&o.__v_isReadonly)}function ec(o){return!!(o&&o.__v_isShallow)}function mg(o){return tr(o)||ts(o)}function We(o){const l=o&&o.__v_raw;return l?We(l):o}function pg(o){return Xl(o,"__v_skip",!0),o}const pa=o=>Nt(o)?Zt(o):o,bg=o=>Nt(o)?us(o):o;function kg(o){di&&io&&(o=We(o),SC(o.dep||(o.dep=hg())))}function xc(o,l){o=We(o),o.dep&&yh(o.dep)}function kt(o){return!!(o&&o.__v_isRef===!0)}function ve(o){return LC(o,!1)}function wg(o){return LC(o,!0)}function LC(o,l){return kt(o)?o:new fB(o,l)}class fB{constructor(l,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?l:We(l),this._value=d?l:pa(l)}get value(){return kg(this),this._value}set value(l){l=this.__v_isShallow?l:We(l),es(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:pa(l),xc(this))}}function mB(o){xc(o)}function nn(o){return kt(o)?o.value:o}const pB={get:(o,l,d)=>nn(Reflect.get(o,l,d)),set:(o,l,d,h)=>{const g=o[l];return kt(g)&&!kt(d)?(g.value=d,!0):Reflect.set(o,l,d,h)}};function vg(o){return tr(o)?o:new Proxy(o,pB)}class bB{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:h}=l(()=>kg(this),()=>xc(this));this._get=d,this._set=h}get value(){return this._get()}set value(l){this._set(l)}}function kB(o){return new bB(o)}function _g(o){const l=xe(o)?new Array(o.length):{};for(const d in o)l[d]=Fe(o,d);return l}class wB{constructor(l,d,h){this._object=l,this._key=d,this._defaultValue=h,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Fe(o,l,d){const h=o[l];return kt(h)?h:new wB(o,l,d)}class vB{constructor(l,d,h,g){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ia(l,()=>{this._dirty||(this._dirty=!0,xc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=h}get value(){const l=We(this);return kg(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function _B(o,l,d=!1){let h,g;const p=Pe(o);return p?(h=o,g=ao):(h=o.get,g=o.set),new vB(h,g,p||!g,d)}const ia=[];function Cg(o,...l){ar();const d=ia.length?ia[ia.length-1].component:null,h=d&&d.appContext.config.warnHandler,g=CB();if(h)So(h,d,11,[o+l.join(""),d&&d.proxy,g.map(({vnode:p})=>`at <${xA(d,p.type)}>`).join(`
`),g]);else{const p=[`[Vue warn]: ${o}`,...l];g.length&&p.push(`
`,...AB(g)),console.warn(...p)}lr()}function CB(){let o=ia[ia.length-1];if(!o)return[];const l=[];for(;o;){const d=l[0];d&&d.vnode===o?d.recurseCount++:l.push({vnode:o,recurseCount:0});const h=o.component&&o.component.parent;o=h&&h.vnode}return l}function AB(o){const l=[];return o.forEach((d,h)=>{l.push(...h===0?[]:[`
`],...yB(d))}),l}function yB({vnode:o,recurseCount:l}){const d=l>0?`... (${l} recursive calls)`:"",h=o.component?o.component.parent==null:!1,g=` at <${xA(o.component,o.type,h)}`,p=">"+d;return o.props?[g,...xB(o.props),p]:[g+p]}function xB(o){const l=[],d=Object.keys(o);return d.slice(0,3).forEach(h=>{l.push(...OC(h,o[h]))}),d.length>3&&l.push(" ..."),l}function OC(o,l,d){return It(l)?(l=JSON.stringify(l),d?l:[`${o}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?d?l:[`${o}=${l}`]:kt(l)?(l=OC(o,We(l.value),!0),d?l:[`${o}=Ref<`,l,">"]):Pe(l)?[`${o}=fn${l.name?`<${l.name}>`:""}`]:(l=We(l),d?l:[`${o}=`,l])}function So(o,l,d,h){let g;try{g=h?o(...h):o()}catch(p){cr(p,l,d)}return g}function On(o,l,d,h){if(Pe(o)){const p=So(o,l,d,h);return p&&cg(p)&&p.catch(b=>{cr(b,l,d)}),p}const g=[];for(let p=0;p<o.length;p++)g.push(On(o[p],l,d,h));return g}function cr(o,l,d,h=!0){const g=l?l.vnode:null;if(l){let p=l.parent;const b=l.proxy,_=d;for(;p;){const A=p.ec;if(A){for(let x=0;x<A.length;x++)if(A[x](o,b,_)===!1)return}p=p.parent}const k=l.appContext.config.errorHandler;if(k){So(k,null,10,[o,b,_]);return}}EB(o,d,g,h)}function EB(o,l,d,h=!0){console.error(o)}let tc=!1,xh=!1;const zn=[];let Fo=0;const ra=[];let ea=null,$r=0;const sa=[];let si=null,Wr=0;const RC=Promise.resolve();let Ag=null,Eh=null;function An(o){const l=Ag||RC;return o?l.then(this?o.bind(this):o):l}function SB(o){let l=Fo+1,d=zn.length;for(;l<d;){const h=l+d>>>1;ba(zn[h])<o?l=h+1:d=h}return l}function yg(o){(!zn.length||!zn.includes(o,tc&&o.allowRecurse?Fo+1:Fo))&&o!==Eh&&(o.id==null?zn.push(o):zn.splice(SB(o.id),0,o),FC())}function FC(){!tc&&!xh&&(xh=!0,Ag=RC.then(VC))}function DB(o){const l=zn.indexOf(o);l>Fo&&zn.splice(l,1)}function jC(o,l,d,h){xe(o)?d.push(...o):(!l||!l.includes(o,o.allowRecurse?h+1:h))&&d.push(o),FC()}function IB(o){jC(o,ea,ra,$r)}function xg(o){jC(o,si,sa,Wr)}function Ec(o,l=null){if(ra.length){for(Eh=l,ea=[...new Set(ra)],ra.length=0,$r=0;$r<ea.length;$r++)ea[$r]();ea=null,$r=0,Eh=null,Ec(o,l)}}function nc(o){if(Ec(),sa.length){const l=[...new Set(sa)];if(sa.length=0,si){si.push(...l);return}for(si=l,si.sort((d,h)=>ba(d)-ba(h)),Wr=0;Wr<si.length;Wr++)si[Wr]();si=null,Wr=0}}const ba=o=>o.id==null?1/0:o.id;function VC(o){xh=!1,tc=!0,Ec(o),zn.sort((d,h)=>ba(d)-ba(h));const l=ao;try{for(Fo=0;Fo<zn.length;Fo++){const d=zn[Fo];d&&d.active!==!1&&So(d,null,14)}}finally{Fo=0,zn.length=0,nc(),tc=!1,Ag=null,(zn.length||ra.length||sa.length)&&VC(o)}}let qr,Fl=[];function HC(o,l){var d,h;qr=o,qr?(qr.enabled=!0,Fl.forEach(({event:g,args:p})=>qr.emit(g,...p)),Fl=[]):typeof window<"u"&&window.HTMLElement&&!(!((h=(d=window.navigator)===null||d===void 0?void 0:d.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(p=>{HC(p,l)}),setTimeout(()=>{qr||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Fl=[])},3e3)):Fl=[]}function TB(o,l,...d){if(o.isUnmounted)return;const h=o.vnode.props||st;let g=d;const p=l.startsWith("update:"),b=p&&l.slice(7);if(b&&b in h){const x=`${b==="modelValue"?"model":b}Modifiers`,{number:y,trim:v}=h[x]||st;v&&(g=d.map(E=>E.trim())),y&&(g=d.map(mi))}let _,k=h[_=oa(l)]||h[_=oa(fn(l))];!k&&p&&(k=h[_=oa(Eo(l))]),k&&On(k,o,6,g);const A=h[_+"Once"];if(A){if(!o.emitted)o.emitted={};else if(o.emitted[_])return;o.emitted[_]=!0,On(A,o,6,g)}}function UC(o,l,d=!1){const h=l.emitsCache,g=h.get(o);if(g!==void 0)return g;const p=o.emits;let b={},_=!1;if(!Pe(o)){const k=A=>{const x=UC(A,l,!0);x&&(_=!0,Bt(b,x))};!d&&l.mixins.length&&l.mixins.forEach(k),o.extends&&k(o.extends),o.mixins&&o.mixins.forEach(k)}return!p&&!_?(h.set(o,null),null):(xe(p)?p.forEach(k=>b[k]=null):Bt(b,p),h.set(o,b),b)}function Sc(o,l){return!o||!Sa(l)?!1:(l=l.slice(2).replace(/Once$/,""),Ye(o,l[0].toLowerCase()+l.slice(1))||Ye(o,Eo(l))||Ye(o,l))}let on=null,Dc=null;function ka(o){const l=on;return on=o,Dc=o&&o.type.__scopeId||null,l}function MB(o){Dc=o}function BB(){Dc=null}const NB=o=>Qe;function Qe(o,l=on,d){if(!l||o._n)return o;const h=(...g)=>{h._d&&Ph(-1);const p=ka(l),b=o(...g);return ka(p),h._d&&Ph(1),b};return h._n=!0,h._c=!0,h._d=!0,h}function Ql(o){const{type:l,vnode:d,proxy:h,withProxy:g,props:p,propsOptions:[b],slots:_,attrs:k,emit:A,render:x,renderCache:y,data:v,setupState:E,ctx:N,inheritAttrs:F}=o;let j,M;const T=ka(o);try{if(d.shapeFlag&4){const G=g||h;j=Pn(x.call(G,G,y,p,E,v,N)),M=k}else{const G=l;j=Pn(G.length>1?G(p,{attrs:k,slots:_,emit:A}):G(p,null)),M=l.props?k:zB(k)}}catch(G){la.length=0,cr(G,o,1),j=z(rn)}let R=j;if(M&&F!==!1){const G=Object.keys(M),{shapeFlag:U}=R;G.length&&U&7&&(b&&G.some(ag)&&(M=LB(M,b)),R=lo(R,M))}return d.dirs&&(R=lo(R),R.dirs=R.dirs?R.dirs.concat(d.dirs):d.dirs),d.transition&&(R.transition=d.transition),j=R,ka(T),j}function PB(o){let l;for(let d=0;d<o.length;d++){const h=o[d];if(bi(h)){if(h.type!==rn||h.children==="v-if"){if(l)return;l=h}}else return}return l}const zB=o=>{let l;for(const d in o)(d==="class"||d==="style"||Sa(d))&&((l||(l={}))[d]=o[d]);return l},LB=(o,l)=>{const d={};for(const h in o)(!ag(h)||!(h.slice(9)in l))&&(d[h]=o[h]);return d};function OB(o,l,d){const{props:h,children:g,component:p}=o,{props:b,children:_,patchFlag:k}=l,A=p.emitsOptions;if(l.dirs||l.transition)return!0;if(d&&k>=0){if(k&1024)return!0;if(k&16)return h?Q0(h,b,A):!!b;if(k&8){const x=l.dynamicProps;for(let y=0;y<x.length;y++){const v=x[y];if(b[v]!==h[v]&&!Sc(A,v))return!0}}}else return(g||_)&&(!_||!_.$stable)?!0:h===b?!1:h?b?Q0(h,b,A):!0:!!b;return!1}function Q0(o,l,d){const h=Object.keys(l);if(h.length!==Object.keys(o).length)return!0;for(let g=0;g<h.length;g++){const p=h[g];if(l[p]!==o[p]&&!Sc(d,p))return!0}return!1}function Eg({vnode:o,parent:l},d){for(;l&&l.subTree===o;)(o=l.vnode).el=d,l=l.parent}const $C=o=>o.__isSuspense,RB={name:"Suspense",__isSuspense:!0,process(o,l,d,h,g,p,b,_,k,A){o==null?jB(l,d,h,g,p,b,_,k,A):VB(o,l,d,h,g,b,_,k,A)},hydrate:HB,create:Sg,normalize:UB},FB=RB;function wa(o,l){const d=o.props&&o.props[l];Pe(d)&&d()}function jB(o,l,d,h,g,p,b,_,k){const{p:A,o:{createElement:x}}=k,y=x("div"),v=o.suspense=Sg(o,g,h,l,y,d,p,b,_,k);A(null,v.pendingBranch=o.ssContent,y,null,h,v,p,b),v.deps>0?(wa(o,"onPending"),wa(o,"onFallback"),A(null,o.ssFallback,l,d,h,null,p,b),Zr(v,o.ssFallback)):v.resolve()}function VB(o,l,d,h,g,p,b,_,{p:k,um:A,o:{createElement:x}}){const y=l.suspense=o.suspense;y.vnode=l,l.el=o.el;const v=l.ssContent,E=l.ssFallback,{activeBranch:N,pendingBranch:F,isInFallback:j,isHydrating:M}=y;if(F)y.pendingBranch=v,yo(v,F)?(k(F,v,y.hiddenContainer,null,g,y,p,b,_),y.deps<=0?y.resolve():j&&(k(N,E,d,h,g,null,p,b,_),Zr(y,E))):(y.pendingId++,M?(y.isHydrating=!1,y.activeBranch=F):A(F,g,y),y.deps=0,y.effects.length=0,y.hiddenContainer=x("div"),j?(k(null,v,y.hiddenContainer,null,g,y,p,b,_),y.deps<=0?y.resolve():(k(N,E,d,h,g,null,p,b,_),Zr(y,E))):N&&yo(v,N)?(k(N,v,d,h,g,y,p,b,_),y.resolve(!0)):(k(null,v,y.hiddenContainer,null,g,y,p,b,_),y.deps<=0&&y.resolve()));else if(N&&yo(v,N))k(N,v,d,h,g,y,p,b,_),Zr(y,v);else if(wa(l,"onPending"),y.pendingBranch=v,y.pendingId++,k(null,v,y.hiddenContainer,null,g,y,p,b,_),y.deps<=0)y.resolve();else{const{timeout:T,pendingId:R}=y;T>0?setTimeout(()=>{y.pendingId===R&&y.fallback(E)},T):T===0&&y.fallback(E)}}function Sg(o,l,d,h,g,p,b,_,k,A,x=!1){const{p:y,m:v,um:E,n:N,o:{parentNode:F,remove:j}}=A,M=mi(o.props&&o.props.timeout),T={vnode:o,parent:l,parentComponent:d,isSVG:b,container:h,hiddenContainer:g,anchor:p,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:x,isUnmounted:!1,effects:[],resolve(R=!1){const{vnode:G,activeBranch:U,pendingBranch:Z,pendingId:L,effects:V,parentComponent:W,container:Y}=T;if(T.isHydrating)T.isHydrating=!1;else if(!R){const se=U&&Z.transition&&Z.transition.mode==="out-in";se&&(U.transition.afterLeave=()=>{L===T.pendingId&&v(Z,Y,ae,0)});let{anchor:ae}=T;U&&(ae=N(U),E(U,W,T,!0)),se||v(Z,Y,ae,0)}Zr(T,Z),T.pendingBranch=null,T.isInFallback=!1;let Q=T.parent,X=!1;for(;Q;){if(Q.pendingBranch){Q.effects.push(...V),X=!0;break}Q=Q.parent}X||xg(V),T.effects=[],wa(G,"onResolve")},fallback(R){if(!T.pendingBranch)return;const{vnode:G,activeBranch:U,parentComponent:Z,container:L,isSVG:V}=T;wa(G,"onFallback");const W=N(U),Y=()=>{!T.isInFallback||(y(null,R,L,W,Z,null,V,_,k),Zr(T,R))},Q=R.transition&&R.transition.mode==="out-in";Q&&(U.transition.afterLeave=Y),T.isInFallback=!0,E(U,Z,null,!0),Q||Y()},move(R,G,U){T.activeBranch&&v(T.activeBranch,R,G,U),T.container=R},next(){return T.activeBranch&&N(T.activeBranch)},registerDep(R,G){const U=!!T.pendingBranch;U&&T.deps++;const Z=R.vnode.el;R.asyncDep.catch(L=>{cr(L,R,0)}).then(L=>{if(R.isUnmounted||T.isUnmounted||T.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:V}=R;zh(R,L,!1),Z&&(V.el=Z);const W=!Z&&R.subTree.el;G(R,V,F(Z||R.subTree.el),Z?null:N(R.subTree),T,b,k),W&&j(W),Eg(R,V.el),U&&--T.deps===0&&T.resolve()})},unmount(R,G){T.isUnmounted=!0,T.activeBranch&&E(T.activeBranch,d,R,G),T.pendingBranch&&E(T.pendingBranch,d,R,G)}};return T}function HB(o,l,d,h,g,p,b,_,k){const A=l.suspense=Sg(l,h,d,o.parentNode,document.createElement("div"),null,g,p,b,_,!0),x=k(o,A.pendingBranch=l.ssContent,d,A,p,b);return A.deps===0&&A.resolve(),x}function UB(o){const{shapeFlag:l,children:d}=o,h=l&32;o.ssContent=Z0(h?d.default:d),o.ssFallback=h?Z0(d.fallback):z(rn)}function Z0(o){let l;if(Pe(o)){const d=rr&&o._c;d&&(o._d=!1,Ue()),o=o(),d&&(o._d=!0,l=Cn,bA())}return xe(o)&&(o=PB(o)),o=Pn(o),l&&!o.dynamicChildren&&(o.dynamicChildren=l.filter(d=>d!==o)),o}function WC(o,l){l&&l.pendingBranch?xe(o)?l.effects.push(...o):l.effects.push(o):xg(o)}function Zr(o,l){o.activeBranch=l;const{vnode:d,parentComponent:h}=o,g=d.el=l.el;h&&h.subTree===d&&(h.vnode.el=g,Eg(h,g))}function Ht(o,l){if(Vt){let d=Vt.provides;const h=Vt.parent&&Vt.parent.provides;h===d&&(d=Vt.provides=Object.create(h)),d[o]=l}}function Xe(o,l,d=!1){const h=Vt||on;if(h){const g=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(g&&o in g)return g[o];if(arguments.length>1)return d&&Pe(l)?l.call(h.proxy):l}}function Wo(o,l){return Ta(o,null,l)}function qC(o,l){return Ta(o,null,{flush:"post"})}function $B(o,l){return Ta(o,null,{flush:"sync"})}const J0={};function et(o,l,d){return Ta(o,l,d)}function Ta(o,l,{immediate:d,deep:h,flush:g,onTrack:p,onTrigger:b}=st){const _=Vt;let k,A=!1,x=!1;if(kt(o)?(k=()=>o.value,A=ec(o)):tr(o)?(k=()=>o,h=!0):xe(o)?(x=!0,A=o.some(M=>tr(M)||ec(M)),k=()=>o.map(M=>{if(kt(M))return M.value;if(tr(M))return Ji(M);if(Pe(M))return So(M,_,2)})):Pe(o)?l?k=()=>So(o,_,2):k=()=>{if(!(_&&_.isUnmounted))return y&&y(),On(o,_,3,[v])}:k=ao,l&&h){const M=k;k=()=>Ji(M())}let y,v=M=>{y=j.onStop=()=>{So(M,_,4)}};if(is)return v=ao,l?d&&On(l,_,3,[k(),x?[]:void 0,v]):k(),ao;let E=x?[]:J0;const N=()=>{if(!!j.active)if(l){const M=j.run();(h||A||(x?M.some((T,R)=>es(T,E[R])):es(M,E)))&&(y&&y(),On(l,_,3,[M,E===J0?void 0:E,v]),E=M)}else j.run()};N.allowRecurse=!!l;let F;g==="sync"?F=N:g==="post"?F=()=>Yt(N,_&&_.suspense):F=()=>IB(N);const j=new Ia(k,F);return l?d?N():E=j.run():g==="post"?Yt(j.run.bind(j),_&&_.suspense):j.run(),()=>{j.stop(),_&&_.scope&&lg(_.scope.effects,j)}}function WB(o,l,d){const h=this.proxy,g=It(o)?o.includes(".")?GC(h,o):()=>h[o]:o.bind(h,h);let p;Pe(l)?p=l:(p=l.handler,d=l);const b=Vt;ki(this);const _=Ta(g,p.bind(h),d);return b?ki(b):hi(),_}function GC(o,l){const d=l.split(".");return()=>{let h=o;for(let g=0;g<d.length&&h;g++)h=h[d[g]];return h}}function Ji(o,l){if(!Nt(o)||o.__v_skip||(l=l||new Set,l.has(o)))return o;if(l.add(o),kt(o))Ji(o.value,l);else if(xe(o))for(let d=0;d<o.length;d++)Ji(o[d],l);else if(sr(o)||Yr(o))o.forEach(d=>{Ji(d,l)});else if(CC(o))for(const d in o)Ji(o[d],l);return o}function Dg(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return uo(()=>{o.isMounted=!0}),Vn(()=>{o.isUnmounting=!0}),o}const Qn=[Function,Array],qB={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qn,onEnter:Qn,onAfterEnter:Qn,onEnterCancelled:Qn,onBeforeLeave:Qn,onLeave:Qn,onAfterLeave:Qn,onLeaveCancelled:Qn,onBeforeAppear:Qn,onAppear:Qn,onAfterAppear:Qn,onAppearCancelled:Qn},setup(o,{slots:l}){const d=Do(),h=Dg();let g;return()=>{const p=l.default&&Ic(l.default(),!0);if(!p||!p.length)return;let b=p[0];if(p.length>1){for(const F of p)if(F.type!==rn){b=F;break}}const _=We(o),{mode:k}=_;if(h.isLeaving)return oh(b);const A=X0(b);if(!A)return oh(b);const x=ns(A,_,h,d);ir(A,x);const y=d.subTree,v=y&&X0(y);let E=!1;const{getTransitionKey:N}=A.type;if(N){const F=N();g===void 0?g=F:F!==g&&(g=F,E=!0)}if(v&&v.type!==rn&&(!yo(A,v)||E)){const F=ns(v,_,h,d);if(ir(v,F),k==="out-in")return h.isLeaving=!0,F.afterLeave=()=>{h.isLeaving=!1,d.update()},oh(b);k==="in-out"&&A.type!==rn&&(F.delayLeave=(j,M,T)=>{const R=KC(h,v);R[String(v.key)]=v,j._leaveCb=()=>{M(),j._leaveCb=void 0,delete x.delayedLeave},x.delayedLeave=T})}return b}}},Ig=qB;function KC(o,l){const{leavingVNodes:d}=o;let h=d.get(l.type);return h||(h=Object.create(null),d.set(l.type,h)),h}function ns(o,l,d,h){const{appear:g,mode:p,persisted:b=!1,onBeforeEnter:_,onEnter:k,onAfterEnter:A,onEnterCancelled:x,onBeforeLeave:y,onLeave:v,onAfterLeave:E,onLeaveCancelled:N,onBeforeAppear:F,onAppear:j,onAfterAppear:M,onAppearCancelled:T}=l,R=String(o.key),G=KC(d,o),U=(V,W)=>{V&&On(V,h,9,W)},Z=(V,W)=>{const Y=W[1];U(V,W),xe(V)?V.every(Q=>Q.length<=1)&&Y():V.length<=1&&Y()},L={mode:p,persisted:b,beforeEnter(V){let W=_;if(!d.isMounted)if(g)W=F||_;else return;V._leaveCb&&V._leaveCb(!0);const Y=G[R];Y&&yo(o,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),U(W,[V])},enter(V){let W=k,Y=A,Q=x;if(!d.isMounted)if(g)W=j||k,Y=M||A,Q=T||x;else return;let X=!1;const se=V._enterCb=ae=>{X||(X=!0,ae?U(Q,[V]):U(Y,[V]),L.delayedLeave&&L.delayedLeave(),V._enterCb=void 0)};W?Z(W,[V,se]):se()},leave(V,W){const Y=String(o.key);if(V._enterCb&&V._enterCb(!0),d.isUnmounting)return W();U(y,[V]);let Q=!1;const X=V._leaveCb=se=>{Q||(Q=!0,W(),se?U(N,[V]):U(E,[V]),V._leaveCb=void 0,G[Y]===o&&delete G[Y])};G[Y]=o,v?Z(v,[V,X]):X()},clone(V){return ns(V,l,d,h)}};return L}function oh(o){if(Ma(o))return o=lo(o),o.children=null,o}function X0(o){return Ma(o)?o.children?o.children[0]:void 0:o}function ir(o,l){o.shapeFlag&6&&o.component?ir(o.component.subTree,l):o.shapeFlag&128?(o.ssContent.transition=l.clone(o.ssContent),o.ssFallback.transition=l.clone(o.ssFallback)):o.transition=l}function Ic(o,l=!1,d){let h=[],g=0;for(let p=0;p<o.length;p++){let b=o[p];const _=d==null?b.key:String(d)+String(b.key!=null?b.key:p);b.type===$e?(b.patchFlag&128&&g++,h=h.concat(Ic(b.children,l,_))):(l||b.type!==rn)&&h.push(_!=null?lo(b,{key:_}):b)}if(g>1)for(let p=0;p<h.length;p++)h[p].patchFlag=-2;return h}function dr(o){return Pe(o)?{setup:o,name:o.name}:o}const nr=o=>!!o.type.__asyncLoader;function GB(o){Pe(o)&&(o={loader:o});const{loader:l,loadingComponent:d,errorComponent:h,delay:g=200,timeout:p,suspensible:b=!0,onError:_}=o;let k=null,A,x=0;const y=()=>(x++,k=null,v()),v=()=>{let E;return k||(E=k=l().catch(N=>{if(N=N instanceof Error?N:new Error(String(N)),_)return new Promise((F,j)=>{_(N,()=>F(y()),()=>j(N),x+1)});throw N}).then(N=>E!==k&&k?k:(N&&(N.__esModule||N[Symbol.toStringTag]==="Module")&&(N=N.default),A=N,N)))};return dr({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return A},setup(){const E=Vt;if(A)return()=>ih(A,E);const N=T=>{k=null,cr(T,E,13,!h)};if(b&&E.suspense||is)return v().then(T=>()=>ih(T,E)).catch(T=>(N(T),()=>h?z(h,{error:T}):null));const F=ve(!1),j=ve(),M=ve(!!g);return g&&setTimeout(()=>{M.value=!1},g),p!=null&&setTimeout(()=>{if(!F.value&&!j.value){const T=new Error(`Async component timed out after ${p}ms.`);N(T),j.value=T}},p),v().then(()=>{F.value=!0,E.parent&&Ma(E.parent.vnode)&&yg(E.parent.update)}).catch(T=>{N(T),j.value=T}),()=>{if(F.value&&A)return ih(A,E);if(j.value&&h)return z(h,{error:j.value});if(d&&!M.value)return z(d)}}})}function ih(o,{vnode:{ref:l,props:d,children:h,shapeFlag:g},parent:p}){const b=z(o,d,h);return b.ref=l,b}const Ma=o=>o.type.__isKeepAlive,KB={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(o,{slots:l}){const d=Do(),h=d.ctx;if(!h.renderer)return()=>{const T=l.default&&l.default();return T&&T.length===1?T[0]:T};const g=new Map,p=new Set;let b=null;const _=d.suspense,{renderer:{p:k,m:A,um:x,o:{createElement:y}}}=h,v=y("div");h.activate=(T,R,G,U,Z)=>{const L=T.component;A(T,R,G,0,_),k(L.vnode,T,R,G,L,_,U,T.slotScopeIds,Z),Yt(()=>{L.isDeactivated=!1,L.a&&Qr(L.a);const V=T.props&&T.props.onVnodeMounted;V&&_n(V,L.parent,T)},_)},h.deactivate=T=>{const R=T.component;A(T,v,null,1,_),Yt(()=>{R.da&&Qr(R.da);const G=T.props&&T.props.onVnodeUnmounted;G&&_n(G,R.parent,T),R.isDeactivated=!0},_)};function E(T){rh(T),x(T,d,_,!0)}function N(T){g.forEach((R,G)=>{const U=ac(R.type);U&&(!T||!T(U))&&F(G)})}function F(T){const R=g.get(T);!b||R.type!==b.type?E(R):b&&rh(b),g.delete(T),p.delete(T)}et(()=>[o.include,o.exclude],([T,R])=>{T&&N(G=>ta(T,G)),R&&N(G=>!ta(R,G))},{flush:"post",deep:!0});let j=null;const M=()=>{j!=null&&g.set(j,sh(d.subTree))};return uo(M),Mc(M),Vn(()=>{g.forEach(T=>{const{subTree:R,suspense:G}=d,U=sh(R);if(T.type===U.type){rh(U);const Z=U.component.da;Z&&Yt(Z,G);return}E(T)})}),()=>{if(j=null,!l.default)return null;const T=l.default(),R=T[0];if(T.length>1)return b=null,T;if(!bi(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return b=null,R;let G=sh(R);const U=G.type,Z=ac(nr(G)?G.type.__asyncResolved||{}:U),{include:L,exclude:V,max:W}=o;if(L&&(!Z||!ta(L,Z))||V&&Z&&ta(V,Z))return b=G,R;const Y=G.key==null?U:G.key,Q=g.get(Y);return G.el&&(G=lo(G),R.shapeFlag&128&&(R.ssContent=G)),j=Y,Q?(G.el=Q.el,G.component=Q.component,G.transition&&ir(G,G.transition),G.shapeFlag|=512,p.delete(Y),p.add(Y)):(p.add(Y),W&&p.size>parseInt(W,10)&&F(p.values().next().value)),G.shapeFlag|=256,b=G,$C(R.type)?R:G}}},YB=KB;function ta(o,l){return xe(o)?o.some(d=>ta(d,l)):It(o)?o.split(",").includes(l):o.test?o.test(l):!1}function Tg(o,l){YC(o,"a",l)}function Mg(o,l){YC(o,"da",l)}function YC(o,l,d=Vt){const h=o.__wdc||(o.__wdc=()=>{let g=d;for(;g;){if(g.isDeactivated)return;g=g.parent}return o()});if(Tc(l,h,d),d){let g=d.parent;for(;g&&g.parent;)Ma(g.parent.vnode)&&QB(h,l,d,g),g=g.parent}}function QB(o,l,d,h){const g=Tc(l,o,h,!0);Bc(()=>{lg(h[l],g)},d)}function rh(o){let l=o.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),o.shapeFlag=l}function sh(o){return o.shapeFlag&128?o.ssContent:o}function Tc(o,l,d=Vt,h=!1){if(d){const g=d[o]||(d[o]=[]),p=l.__weh||(l.__weh=(...b)=>{if(d.isUnmounted)return;ar(),ki(d);const _=On(l,d,o,b);return hi(),lr(),_});return h?g.unshift(p):g.push(p),p}}const qo=o=>(l,d=Vt)=>(!is||o==="sp")&&Tc(o,l,d),Ba=qo("bm"),uo=qo("m"),QC=qo("bu"),Mc=qo("u"),Vn=qo("bum"),Bc=qo("um"),ZC=qo("sp"),JC=qo("rtg"),XC=qo("rtc");function eA(o,l=Vt){Tc("ec",o,l)}function jn(o,l){const d=on;if(d===null)return o;const h=Pc(d)||d.proxy,g=o.dirs||(o.dirs=[]);for(let p=0;p<l.length;p++){let[b,_,k,A=st]=l[p];Pe(b)&&(b={mounted:b,updated:b}),b.deep&&Ji(_),g.push({dir:b,instance:h,value:_,oldValue:void 0,arg:k,modifiers:A})}return o}function Ao(o,l,d,h){const g=o.dirs,p=l&&l.dirs;for(let b=0;b<g.length;b++){const _=g[b];p&&(_.oldValue=p[b].value);let k=_.dir[h];k&&(ar(),On(k,d,8,[o.el,_,o,l]),lr())}}const Bg="components",ZB="directives";function Ng(o,l){return Pg(Bg,o,!0,l)||o}const tA=Symbol();function nA(o){return It(o)?Pg(Bg,o,!1)||o:o||tA}function Ci(o){return Pg(ZB,o)}function Pg(o,l,d=!0,h=!1){const g=on||Vt;if(g){const p=g.type;if(o===Bg){const _=ac(p,!1);if(_&&(_===l||_===fn(l)||_===cs(fn(l))))return p}const b=e_(g[o]||p[o],l)||e_(g.appContext[o],l);return!b&&h?p:b}}function e_(o,l){return o&&(o[l]||o[fn(l)]||o[cs(fn(l))])}function ui(o,l,d,h){let g;const p=d&&d[h];if(xe(o)||It(o)){g=new Array(o.length);for(let b=0,_=o.length;b<_;b++)g[b]=l(o[b],b,void 0,p&&p[b])}else if(typeof o=="number"){g=new Array(o);for(let b=0;b<o;b++)g[b]=l(b+1,b,void 0,p&&p[b])}else if(Nt(o))if(o[Symbol.iterator])g=Array.from(o,(b,_)=>l(b,_,void 0,p&&p[_]));else{const b=Object.keys(o);g=new Array(b.length);for(let _=0,k=b.length;_<k;_++){const A=b[_];g[_]=l(o[A],A,_,p&&p[_])}}else g=[];return d&&(d[h]=g),g}function oA(o,l){for(let d=0;d<l.length;d++){const h=l[d];if(xe(h))for(let g=0;g<h.length;g++)o[h[g].name]=h[g].fn;else h&&(o[h.name]=h.fn)}return o}function JB(o,l,d={},h,g){if(on.isCE||on.parent&&nr(on.parent)&&on.parent.isCE)return z("slot",l==="default"?null:{name:l},h&&h());let p=o[l];p&&p._c&&(p._d=!1),Ue();const b=p&&iA(p(d)),_=Zn($e,{key:d.key||`_${l}`},b||(h?h():[]),b&&o._===1?64:-2);return!g&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),p&&p._c&&(p._d=!0),_}function iA(o){return o.some(l=>bi(l)?!(l.type===rn||l.type===$e&&!iA(l.children)):!0)?o:null}function Sh(o){const l={};for(const d in o)l[oa(d)]=o[d];return l}const Dh=o=>o?_A(o)?Pc(o)||o.proxy:Dh(o.parent):null,oc=Bt(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>o.props,$attrs:o=>o.attrs,$slots:o=>o.slots,$refs:o=>o.refs,$parent:o=>Dh(o.parent),$root:o=>Dh(o.root),$emit:o=>o.emit,$options:o=>sA(o),$forceUpdate:o=>o.f||(o.f=()=>yg(o.update)),$nextTick:o=>o.n||(o.n=An.bind(o.proxy)),$watch:o=>WB.bind(o)}),Ih={get({_:o},l){const{ctx:d,setupState:h,data:g,props:p,accessCache:b,type:_,appContext:k}=o;let A;if(l[0]!=="$"){const E=b[l];if(E!==void 0)switch(E){case 1:return h[l];case 2:return g[l];case 4:return d[l];case 3:return p[l]}else{if(h!==st&&Ye(h,l))return b[l]=1,h[l];if(g!==st&&Ye(g,l))return b[l]=2,g[l];if((A=o.propsOptions[0])&&Ye(A,l))return b[l]=3,p[l];if(d!==st&&Ye(d,l))return b[l]=4,d[l];Th&&(b[l]=0)}}const x=oc[l];let y,v;if(x)return l==="$attrs"&&Fn(o,"get",l),x(o);if((y=_.__cssModules)&&(y=y[l]))return y;if(d!==st&&Ye(d,l))return b[l]=4,d[l];if(v=k.config.globalProperties,Ye(v,l))return v[l]},set({_:o},l,d){const{data:h,setupState:g,ctx:p}=o;return g!==st&&Ye(g,l)?(g[l]=d,!0):h!==st&&Ye(h,l)?(h[l]=d,!0):Ye(o.props,l)||l[0]==="$"&&l.slice(1)in o?!1:(p[l]=d,!0)},has({_:{data:o,setupState:l,accessCache:d,ctx:h,appContext:g,propsOptions:p}},b){let _;return!!d[b]||o!==st&&Ye(o,b)||l!==st&&Ye(l,b)||(_=p[0])&&Ye(_,b)||Ye(h,b)||Ye(oc,b)||Ye(g.config.globalProperties,b)},defineProperty(o,l,d){return d.get!=null?o._.accessCache[l]=0:Ye(d,"value")&&this.set(o,l,d.value,null),Reflect.defineProperty(o,l,d)}},XB=Bt({},Ih,{get(o,l){if(l!==Symbol.unscopables)return Ih.get(o,l,o)},has(o,l){return l[0]!=="_"&&!y4(l)}});let Th=!0;function eN(o){const l=sA(o),d=o.proxy,h=o.ctx;Th=!1,l.beforeCreate&&t_(l.beforeCreate,o,"bc");const{data:g,computed:p,methods:b,watch:_,provide:k,inject:A,created:x,beforeMount:y,mounted:v,beforeUpdate:E,updated:N,activated:F,deactivated:j,beforeDestroy:M,beforeUnmount:T,destroyed:R,unmounted:G,render:U,renderTracked:Z,renderTriggered:L,errorCaptured:V,serverPrefetch:W,expose:Y,inheritAttrs:Q,components:X,directives:se,filters:ae}=l;if(A&&tN(A,h,null,o.appContext.config.unwrapInjectedRef),b)for(const Ae in b){const Ie=b[Ae];Pe(Ie)&&(h[Ae]=Ie.bind(d))}if(g){const Ae=g.call(d,d);Nt(Ae)&&(o.data=Zt(Ae))}if(Th=!0,p)for(const Ae in p){const Ie=p[Ae],Ke=Pe(Ie)?Ie.bind(d,d):Pe(Ie.get)?Ie.get.bind(d,d):ao,Rt=!Pe(Ie)&&Pe(Ie.set)?Ie.set.bind(d):ao,St=q({get:Ke,set:Rt});Object.defineProperty(h,Ae,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ne=>St.value=Ne})}if(_)for(const Ae in _)rA(_[Ae],h,d,Ae);if(k){const Ae=Pe(k)?k.call(d):k;Reflect.ownKeys(Ae).forEach(Ie=>{Ht(Ie,Ae[Ie])})}x&&t_(x,o,"c");function ke(Ae,Ie){xe(Ie)?Ie.forEach(Ke=>Ae(Ke.bind(d))):Ie&&Ae(Ie.bind(d))}if(ke(Ba,y),ke(uo,v),ke(QC,E),ke(Mc,N),ke(Tg,F),ke(Mg,j),ke(eA,V),ke(XC,Z),ke(JC,L),ke(Vn,T),ke(Bc,G),ke(ZC,W),xe(Y))if(Y.length){const Ae=o.exposed||(o.exposed={});Y.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>d[Ie],set:Ke=>d[Ie]=Ke})})}else o.exposed||(o.exposed={});U&&o.render===ao&&(o.render=U),Q!=null&&(o.inheritAttrs=Q),X&&(o.components=X),se&&(o.directives=se)}function tN(o,l,d=ao,h=!1){xe(o)&&(o=Mh(o));for(const g in o){const p=o[g];let b;Nt(p)?"default"in p?b=Xe(p.from||g,p.default,!0):b=Xe(p.from||g):b=Xe(p),kt(b)&&h?Object.defineProperty(l,g,{enumerable:!0,configurable:!0,get:()=>b.value,set:_=>b.value=_}):l[g]=b}}function t_(o,l,d){On(xe(o)?o.map(h=>h.bind(l.proxy)):o.bind(l.proxy),l,d)}function rA(o,l,d,h){const g=h.includes(".")?GC(d,h):()=>d[h];if(It(o)){const p=l[o];Pe(p)&&et(g,p)}else if(Pe(o))et(g,o.bind(d));else if(Nt(o))if(xe(o))o.forEach(p=>rA(p,l,d,h));else{const p=Pe(o.handler)?o.handler.bind(d):l[o.handler];Pe(p)&&et(g,p,o)}}function sA(o){const l=o.type,{mixins:d,extends:h}=l,{mixins:g,optionsCache:p,config:{optionMergeStrategies:b}}=o.appContext,_=p.get(l);let k;return _?k=_:!g.length&&!d&&!h?k=l:(k={},g.length&&g.forEach(A=>ic(k,A,b,!0)),ic(k,l,b)),p.set(l,k),k}function ic(o,l,d,h=!1){const{mixins:g,extends:p}=l;p&&ic(o,p,d,!0),g&&g.forEach(b=>ic(o,b,d,!0));for(const b in l)if(!(h&&b==="expose")){const _=nN[b]||d&&d[b];o[b]=_?_(o[b],l[b]):l[b]}return o}const nN={data:n_,props:Qi,emits:Qi,methods:Qi,computed:Qi,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Qi,directives:Qi,watch:iN,provide:n_,inject:oN};function n_(o,l){return l?o?function(){return Bt(Pe(o)?o.call(this,this):o,Pe(l)?l.call(this,this):l)}:l:o}function oN(o,l){return Qi(Mh(o),Mh(l))}function Mh(o){if(xe(o)){const l={};for(let d=0;d<o.length;d++)l[o[d]]=o[d];return l}return o}function gn(o,l){return o?[...new Set([].concat(o,l))]:l}function Qi(o,l){return o?Bt(Bt(Object.create(null),o),l):l}function iN(o,l){if(!o)return l;if(!l)return o;const d=Bt(Object.create(null),o);for(const h in l)d[h]=gn(o[h],l[h]);return d}function rN(o,l,d,h=!1){const g={},p={};Xl(p,Nc,1),o.propsDefaults=Object.create(null),aA(o,l,g,p);for(const b in o.propsOptions[0])b in g||(g[b]=void 0);d?o.props=h?g:fg(g):o.type.props?o.props=g:o.props=p,o.attrs=p}function sN(o,l,d,h){const{props:g,attrs:p,vnode:{patchFlag:b}}=o,_=We(g),[k]=o.propsOptions;let A=!1;if((h||b>0)&&!(b&16)){if(b&8){const x=o.vnode.dynamicProps;for(let y=0;y<x.length;y++){let v=x[y];if(Sc(o.emitsOptions,v))continue;const E=l[v];if(k)if(Ye(p,v))E!==p[v]&&(p[v]=E,A=!0);else{const N=fn(v);g[N]=Bh(k,_,N,E,o,!1)}else E!==p[v]&&(p[v]=E,A=!0)}}}else{aA(o,l,g,p)&&(A=!0);let x;for(const y in _)(!l||!Ye(l,y)&&((x=Eo(y))===y||!Ye(l,x)))&&(k?d&&(d[y]!==void 0||d[x]!==void 0)&&(g[y]=Bh(k,_,y,void 0,o,!0)):delete g[y]);if(p!==_)for(const y in p)(!l||!Ye(l,y)&&!0)&&(delete p[y],A=!0)}A&&Ho(o,"set","$attrs")}function aA(o,l,d,h){const[g,p]=o.propsOptions;let b=!1,_;if(l)for(let k in l){if(na(k))continue;const A=l[k];let x;g&&Ye(g,x=fn(k))?!p||!p.includes(x)?d[x]=A:(_||(_={}))[x]=A:Sc(o.emitsOptions,k)||(!(k in h)||A!==h[k])&&(h[k]=A,b=!0)}if(p){const k=We(d),A=_||st;for(let x=0;x<p.length;x++){const y=p[x];d[y]=Bh(g,k,y,A[y],o,!Ye(A,y))}}return b}function Bh(o,l,d,h,g,p){const b=o[d];if(b!=null){const _=Ye(b,"default");if(_&&h===void 0){const k=b.default;if(b.type!==Function&&Pe(k)){const{propsDefaults:A}=g;d in A?h=A[d]:(ki(g),h=A[d]=k.call(null,l),hi())}else h=k}b[0]&&(p&&!_?h=!1:b[1]&&(h===""||h===Eo(d))&&(h=!0))}return h}function lA(o,l,d=!1){const h=l.propsCache,g=h.get(o);if(g)return g;const p=o.props,b={},_=[];let k=!1;if(!Pe(o)){const x=y=>{k=!0;const[v,E]=lA(y,l,!0);Bt(b,v),E&&_.push(...E)};!d&&l.mixins.length&&l.mixins.forEach(x),o.extends&&x(o.extends),o.mixins&&o.mixins.forEach(x)}if(!p&&!k)return h.set(o,Kr),Kr;if(xe(p))for(let x=0;x<p.length;x++){const y=fn(p[x]);o_(y)&&(b[y]=st)}else if(p)for(const x in p){const y=fn(x);if(o_(y)){const v=p[x],E=b[y]=xe(v)||Pe(v)?{type:v}:v;if(E){const N=s_(Boolean,E.type),F=s_(String,E.type);E[0]=N>-1,E[1]=F<0||N<F,(N>-1||Ye(E,"default"))&&_.push(y)}}}const A=[b,_];return h.set(o,A),A}function o_(o){return o[0]!=="$"}function i_(o){const l=o&&o.toString().match(/^\s*function (\w+)/);return l?l[1]:o===null?"null":""}function r_(o,l){return i_(o)===i_(l)}function s_(o,l){return xe(l)?l.findIndex(d=>r_(d,o)):Pe(l)&&r_(l,o)?0:-1}const cA=o=>o[0]==="_"||o==="$stable",zg=o=>xe(o)?o.map(Pn):[Pn(o)],aN=(o,l,d)=>{if(l._n)return l;const h=Qe((...g)=>zg(l(...g)),d);return h._c=!1,h},dA=(o,l,d)=>{const h=o._ctx;for(const g in o){if(cA(g))continue;const p=o[g];if(Pe(p))l[g]=aN(g,p,h);else if(p!=null){const b=zg(p);l[g]=()=>b}}},uA=(o,l)=>{const d=zg(l);o.slots.default=()=>d},lN=(o,l)=>{if(o.vnode.shapeFlag&32){const d=l._;d?(o.slots=We(l),Xl(l,"_",d)):dA(l,o.slots={})}else o.slots={},l&&uA(o,l);Xl(o.slots,Nc,1)},cN=(o,l,d)=>{const{vnode:h,slots:g}=o;let p=!0,b=st;if(h.shapeFlag&32){const _=l._;_?d&&_===1?p=!1:(Bt(g,l),!d&&_===1&&delete g._):(p=!l.$stable,dA(l,g)),b=l}else l&&(uA(o,l),b={default:1});if(p)for(const _ in g)!cA(_)&&!(_ in b)&&delete g[_]};function hA(){return{app:null,config:{isNativeTag:M4,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dN=0;function uN(o,l){return function(h,g=null){Pe(h)||(h=Object.assign({},h)),g!=null&&!Nt(g)&&(g=null);const p=hA(),b=new Set;let _=!1;const k=p.app={_uid:dN++,_component:h,_props:g,_container:null,_context:p,_instance:null,version:IA,get config(){return p.config},set config(A){},use(A,...x){return b.has(A)||(A&&Pe(A.install)?(b.add(A),A.install(k,...x)):Pe(A)&&(b.add(A),A(k,...x))),k},mixin(A){return p.mixins.includes(A)||p.mixins.push(A),k},component(A,x){return x?(p.components[A]=x,k):p.components[A]},directive(A,x){return x?(p.directives[A]=x,k):p.directives[A]},mount(A,x,y){if(!_){const v=z(h,g);return v.appContext=p,x&&l?l(v,A):o(v,A,y),_=!0,k._container=A,A.__vue_app__=k,Pc(v.component)||v.component.proxy}},unmount(){_&&(o(null,k._container),delete k._container.__vue_app__)},provide(A,x){return p.provides[A]=x,k}};return k}}function rc(o,l,d,h,g=!1){if(xe(o)){o.forEach((v,E)=>rc(v,l&&(xe(l)?l[E]:l),d,h,g));return}if(nr(h)&&!g)return;const p=h.shapeFlag&4?Pc(h.component)||h.component.proxy:h.el,b=g?null:p,{i:_,r:k}=o,A=l&&l.r,x=_.refs===st?_.refs={}:_.refs,y=_.setupState;if(A!=null&&A!==k&&(It(A)?(x[A]=null,Ye(y,A)&&(y[A]=null)):kt(A)&&(A.value=null)),Pe(k))So(k,_,12,[b,x]);else{const v=It(k),E=kt(k);if(v||E){const N=()=>{if(o.f){const F=v?x[k]:k.value;g?xe(F)&&lg(F,p):xe(F)?F.includes(p)||F.push(p):v?(x[k]=[p],Ye(y,k)&&(y[k]=x[k])):(k.value=[p],o.k&&(x[o.k]=k.value))}else v?(x[k]=b,Ye(y,k)&&(y[k]=b)):E&&(k.value=b,o.k&&(x[o.k]=b))};b?(N.id=-1,Yt(N,d)):N()}}}let ni=!1;const jl=o=>/svg/.test(o.namespaceURI)&&o.tagName!=="foreignObject",Vl=o=>o.nodeType===8;function hN(o){const{mt:l,p:d,o:{patchProp:h,createText:g,nextSibling:p,parentNode:b,remove:_,insert:k,createComment:A}}=o,x=(M,T)=>{if(!T.hasChildNodes()){d(null,M,T),nc(),T._vnode=M;return}ni=!1,y(T.firstChild,M,null,null,null),nc(),T._vnode=M,ni&&console.error("Hydration completed but contains mismatches.")},y=(M,T,R,G,U,Z=!1)=>{const L=Vl(M)&&M.data==="[",V=()=>F(M,T,R,G,U,L),{type:W,ref:Y,shapeFlag:Q,patchFlag:X}=T,se=M.nodeType;T.el=M,X===-2&&(Z=!1,T.dynamicChildren=null);let ae=null;switch(W){case os:se!==3?T.children===""?(k(T.el=g(""),b(M),M),ae=M):ae=V():(M.data!==T.children&&(ni=!0,M.data=T.children),ae=p(M));break;case rn:se!==8||L?ae=V():ae=p(M);break;case or:if(se!==1&&se!==3)ae=V();else{ae=M;const pe=!T.children.length;for(let ke=0;ke<T.staticCount;ke++)pe&&(T.children+=ae.nodeType===1?ae.outerHTML:ae.data),ke===T.staticCount-1&&(T.anchor=ae),ae=p(ae);return ae}break;case $e:L?ae=N(M,T,R,G,U,Z):ae=V();break;default:if(Q&1)se!==1||T.type.toLowerCase()!==M.tagName.toLowerCase()?ae=V():ae=v(M,T,R,G,U,Z);else if(Q&6){T.slotScopeIds=U;const pe=b(M);if(l(T,pe,null,R,G,jl(pe),Z),ae=L?j(M):p(M),ae&&Vl(ae)&&ae.data==="teleport end"&&(ae=p(ae)),nr(T)){let ke;L?(ke=z($e),ke.anchor=ae?ae.previousSibling:pe.lastChild):ke=M.nodeType===3?Et(""):z("div"),ke.el=M,T.component.subTree=ke}}else Q&64?se!==8?ae=V():ae=T.type.hydrate(M,T,R,G,U,Z,o,E):Q&128&&(ae=T.type.hydrate(M,T,R,G,jl(b(M)),U,Z,o,y))}return Y!=null&&rc(Y,null,G,T),ae},v=(M,T,R,G,U,Z)=>{Z=Z||!!T.dynamicChildren;const{type:L,props:V,patchFlag:W,shapeFlag:Y,dirs:Q}=T,X=L==="input"&&Q||L==="option";if(X||W!==-1){if(Q&&Ao(T,null,R,"created"),V)if(X||!Z||W&48)for(const ae in V)(X&&ae.endsWith("value")||Sa(ae)&&!na(ae))&&h(M,ae,null,V[ae],!1,void 0,R);else V.onClick&&h(M,"onClick",null,V.onClick,!1,void 0,R);let se;if((se=V&&V.onVnodeBeforeMount)&&_n(se,R,T),Q&&Ao(T,null,R,"beforeMount"),((se=V&&V.onVnodeMounted)||Q)&&WC(()=>{se&&_n(se,R,T),Q&&Ao(T,null,R,"mounted")},G),Y&16&&!(V&&(V.innerHTML||V.textContent))){let ae=E(M.firstChild,T,M,R,G,U,Z);for(;ae;){ni=!0;const pe=ae;ae=ae.nextSibling,_(pe)}}else Y&8&&M.textContent!==T.children&&(ni=!0,M.textContent=T.children)}return M.nextSibling},E=(M,T,R,G,U,Z,L)=>{L=L||!!T.dynamicChildren;const V=T.children,W=V.length;for(let Y=0;Y<W;Y++){const Q=L?V[Y]:V[Y]=Pn(V[Y]);if(M)M=y(M,Q,G,U,Z,L);else{if(Q.type===os&&!Q.children)continue;ni=!0,d(null,Q,R,null,G,U,jl(R),Z)}}return M},N=(M,T,R,G,U,Z)=>{const{slotScopeIds:L}=T;L&&(U=U?U.concat(L):L);const V=b(M),W=E(p(M),T,V,R,G,U,Z);return W&&Vl(W)&&W.data==="]"?p(T.anchor=W):(ni=!0,k(T.anchor=A("]"),V,W),W)},F=(M,T,R,G,U,Z)=>{if(ni=!0,T.el=null,Z){const W=j(M);for(;;){const Y=p(M);if(Y&&Y!==W)_(Y);else break}}const L=p(M),V=b(M);return _(M),d(null,T,V,L,R,G,jl(V),U),L},j=M=>{let T=0;for(;M;)if(M=p(M),M&&Vl(M)&&(M.data==="["&&T++,M.data==="]")){if(T===0)return p(M);T--}return M};return[x,y]}const Yt=WC;function gA(o){return mA(o)}function fA(o){return mA(o,hN)}function mA(o,l){const d=O4();d.__VUE__=!0;const{insert:h,remove:g,patchProp:p,createElement:b,createText:_,createComment:k,setText:A,setElementText:x,parentNode:y,nextSibling:v,setScopeId:E=ao,cloneNode:N,insertStaticContent:F}=o,j=(P,$,ee,ie=null,re=null,ge=null,Ce=!1,fe=null,me=!!$.dynamicChildren)=>{if(P===$)return;P&&!yo(P,$)&&(ie=oe(P),_t(P,re,ge,!0),P=null),$.patchFlag===-2&&(me=!1,$.dynamicChildren=null);const{type:ue,ref:Ee,shapeFlag:_e}=$;switch(ue){case os:M(P,$,ee,ie);break;case rn:T(P,$,ee,ie);break;case or:P==null&&R($,ee,ie,Ce);break;case $e:se(P,$,ee,ie,re,ge,Ce,fe,me);break;default:_e&1?Z(P,$,ee,ie,re,ge,Ce,fe,me):_e&6?ae(P,$,ee,ie,re,ge,Ce,fe,me):(_e&64||_e&128)&&ue.process(P,$,ee,ie,re,ge,Ce,fe,me,Ge)}Ee!=null&&re&&rc(Ee,P&&P.ref,ge,$||P,!$)},M=(P,$,ee,ie)=>{if(P==null)h($.el=_($.children),ee,ie);else{const re=$.el=P.el;$.children!==P.children&&A(re,$.children)}},T=(P,$,ee,ie)=>{P==null?h($.el=k($.children||""),ee,ie):$.el=P.el},R=(P,$,ee,ie)=>{[P.el,P.anchor]=F(P.children,$,ee,ie,P.el,P.anchor)},G=({el:P,anchor:$},ee,ie)=>{let re;for(;P&&P!==$;)re=v(P),h(P,ee,ie),P=re;h($,ee,ie)},U=({el:P,anchor:$})=>{let ee;for(;P&&P!==$;)ee=v(P),g(P),P=ee;g($)},Z=(P,$,ee,ie,re,ge,Ce,fe,me)=>{Ce=Ce||$.type==="svg",P==null?L($,ee,ie,re,ge,Ce,fe,me):Y(P,$,re,ge,Ce,fe,me)},L=(P,$,ee,ie,re,ge,Ce,fe)=>{let me,ue;const{type:Ee,props:_e,shapeFlag:ye,transition:Se,patchFlag:He,dirs:nt}=P;if(P.el&&N!==void 0&&He===-1)me=P.el=N(P.el);else{if(me=P.el=b(P.type,ge,_e&&_e.is,_e),ye&8?x(me,P.children):ye&16&&W(P.children,me,null,ie,re,ge&&Ee!=="foreignObject",Ce,fe),nt&&Ao(P,null,ie,"created"),_e){for(const ut in _e)ut!=="value"&&!na(ut)&&p(me,ut,null,_e[ut],ge,P.children,ie,re,de);"value"in _e&&p(me,"value",null,_e.value),(ue=_e.onVnodeBeforeMount)&&_n(ue,ie,P)}V(me,P,P.scopeId,Ce,ie)}nt&&Ao(P,null,ie,"beforeMount");const je=(!re||re&&!re.pendingBranch)&&Se&&!Se.persisted;je&&Se.beforeEnter(me),h(me,$,ee),((ue=_e&&_e.onVnodeMounted)||je||nt)&&Yt(()=>{ue&&_n(ue,ie,P),je&&Se.enter(me),nt&&Ao(P,null,ie,"mounted")},re)},V=(P,$,ee,ie,re)=>{if(ee&&E(P,ee),ie)for(let ge=0;ge<ie.length;ge++)E(P,ie[ge]);if(re){let ge=re.subTree;if($===ge){const Ce=re.vnode;V(P,Ce,Ce.scopeId,Ce.slotScopeIds,re.parent)}}},W=(P,$,ee,ie,re,ge,Ce,fe,me=0)=>{for(let ue=me;ue<P.length;ue++){const Ee=P[ue]=fe?li(P[ue]):Pn(P[ue]);j(null,Ee,$,ee,ie,re,ge,Ce,fe)}},Y=(P,$,ee,ie,re,ge,Ce)=>{const fe=$.el=P.el;let{patchFlag:me,dynamicChildren:ue,dirs:Ee}=$;me|=P.patchFlag&16;const _e=P.props||st,ye=$.props||st;let Se;ee&&Gi(ee,!1),(Se=ye.onVnodeBeforeUpdate)&&_n(Se,ee,$,P),Ee&&Ao($,P,ee,"beforeUpdate"),ee&&Gi(ee,!0);const He=re&&$.type!=="foreignObject";if(ue?Q(P.dynamicChildren,ue,fe,ee,ie,He,ge):Ce||Ke(P,$,fe,null,ee,ie,He,ge,!1),me>0){if(me&16)X(fe,$,_e,ye,ee,ie,re);else if(me&2&&_e.class!==ye.class&&p(fe,"class",null,ye.class,re),me&4&&p(fe,"style",_e.style,ye.style,re),me&8){const nt=$.dynamicProps;for(let je=0;je<nt.length;je++){const ut=nt[je],En=_e[ut],To=ye[ut];(To!==En||ut==="value")&&p(fe,ut,En,To,re,P.children,ee,ie,de)}}me&1&&P.children!==$.children&&x(fe,$.children)}else!Ce&&ue==null&&X(fe,$,_e,ye,ee,ie,re);((Se=ye.onVnodeUpdated)||Ee)&&Yt(()=>{Se&&_n(Se,ee,$,P),Ee&&Ao($,P,ee,"updated")},ie)},Q=(P,$,ee,ie,re,ge,Ce)=>{for(let fe=0;fe<$.length;fe++){const me=P[fe],ue=$[fe],Ee=me.el&&(me.type===$e||!yo(me,ue)||me.shapeFlag&70)?y(me.el):ee;j(me,ue,Ee,null,ie,re,ge,Ce,!0)}},X=(P,$,ee,ie,re,ge,Ce)=>{if(ee!==ie){for(const fe in ie){if(na(fe))continue;const me=ie[fe],ue=ee[fe];me!==ue&&fe!=="value"&&p(P,fe,ue,me,Ce,$.children,re,ge,de)}if(ee!==st)for(const fe in ee)!na(fe)&&!(fe in ie)&&p(P,fe,ee[fe],null,Ce,$.children,re,ge,de);"value"in ie&&p(P,"value",ee.value,ie.value)}},se=(P,$,ee,ie,re,ge,Ce,fe,me)=>{const ue=$.el=P?P.el:_(""),Ee=$.anchor=P?P.anchor:_("");let{patchFlag:_e,dynamicChildren:ye,slotScopeIds:Se}=$;Se&&(fe=fe?fe.concat(Se):Se),P==null?(h(ue,ee,ie),h(Ee,ee,ie),W($.children,ee,Ee,re,ge,Ce,fe,me)):_e>0&&_e&64&&ye&&P.dynamicChildren?(Q(P.dynamicChildren,ye,ee,re,ge,Ce,fe),($.key!=null||re&&$===re.subTree)&&Lg(P,$,!0)):Ke(P,$,ee,Ee,re,ge,Ce,fe,me)},ae=(P,$,ee,ie,re,ge,Ce,fe,me)=>{$.slotScopeIds=fe,P==null?$.shapeFlag&512?re.ctx.activate($,ee,ie,Ce,me):pe($,ee,ie,re,ge,Ce,me):ke(P,$,me)},pe=(P,$,ee,ie,re,ge,Ce)=>{const fe=P.component=vA(P,ie,re);if(Ma(P)&&(fe.ctx.renderer=Ge),CA(fe),fe.asyncDep){if(re&&re.registerDep(fe,Ae),!P.el){const me=fe.subTree=z(rn);T(null,me,$,ee)}return}Ae(fe,P,$,ee,re,ge,Ce)},ke=(P,$,ee)=>{const ie=$.component=P.component;if(OB(P,$,ee))if(ie.asyncDep&&!ie.asyncResolved){Ie(ie,$,ee);return}else ie.next=$,DB(ie.update),ie.update();else $.el=P.el,ie.vnode=$},Ae=(P,$,ee,ie,re,ge,Ce)=>{const fe=()=>{if(P.isMounted){let{next:Ee,bu:_e,u:ye,parent:Se,vnode:He}=P,nt=Ee,je;Gi(P,!1),Ee?(Ee.el=He.el,Ie(P,Ee,Ce)):Ee=He,_e&&Qr(_e),(je=Ee.props&&Ee.props.onVnodeBeforeUpdate)&&_n(je,Se,Ee,He),Gi(P,!0);const ut=Ql(P),En=P.subTree;P.subTree=ut,j(En,ut,y(En.el),oe(En),P,re,ge),Ee.el=ut.el,nt===null&&Eg(P,ut.el),ye&&Yt(ye,re),(je=Ee.props&&Ee.props.onVnodeUpdated)&&Yt(()=>_n(je,Se,Ee,He),re)}else{let Ee;const{el:_e,props:ye}=$,{bm:Se,m:He,parent:nt}=P,je=nr($);if(Gi(P,!1),Se&&Qr(Se),!je&&(Ee=ye&&ye.onVnodeBeforeMount)&&_n(Ee,nt,$),Gi(P,!0),_e&&De){const ut=()=>{P.subTree=Ql(P),De(_e,P.subTree,P,re,null)};je?$.type.__asyncLoader().then(()=>!P.isUnmounted&&ut()):ut()}else{const ut=P.subTree=Ql(P);j(null,ut,ee,ie,P,re,ge),$.el=ut.el}if(He&&Yt(He,re),!je&&(Ee=ye&&ye.onVnodeMounted)){const ut=$;Yt(()=>_n(Ee,nt,ut),re)}($.shapeFlag&256||nt&&nr(nt.vnode)&&nt.vnode.shapeFlag&256)&&P.a&&Yt(P.a,re),P.isMounted=!0,$=ee=ie=null}},me=P.effect=new Ia(fe,()=>yg(ue),P.scope),ue=P.update=()=>me.run();ue.id=P.uid,Gi(P,!0),ue()},Ie=(P,$,ee)=>{$.component=P;const ie=P.vnode.props;P.vnode=$,P.next=null,sN(P,$.props,ie,ee),cN(P,$.children,ee),ar(),Ec(void 0,P.update),lr()},Ke=(P,$,ee,ie,re,ge,Ce,fe,me=!1)=>{const ue=P&&P.children,Ee=P?P.shapeFlag:0,_e=$.children,{patchFlag:ye,shapeFlag:Se}=$;if(ye>0){if(ye&128){St(ue,_e,ee,ie,re,ge,Ce,fe,me);return}else if(ye&256){Rt(ue,_e,ee,ie,re,ge,Ce,fe,me);return}}Se&8?(Ee&16&&de(ue,re,ge),_e!==ue&&x(ee,_e)):Ee&16?Se&16?St(ue,_e,ee,ie,re,ge,Ce,fe,me):de(ue,re,ge,!0):(Ee&8&&x(ee,""),Se&16&&W(_e,ee,ie,re,ge,Ce,fe,me))},Rt=(P,$,ee,ie,re,ge,Ce,fe,me)=>{P=P||Kr,$=$||Kr;const ue=P.length,Ee=$.length,_e=Math.min(ue,Ee);let ye;for(ye=0;ye<_e;ye++){const Se=$[ye]=me?li($[ye]):Pn($[ye]);j(P[ye],Se,ee,null,re,ge,Ce,fe,me)}ue>Ee?de(P,re,ge,!0,!1,_e):W($,ee,ie,re,ge,Ce,fe,me,_e)},St=(P,$,ee,ie,re,ge,Ce,fe,me)=>{let ue=0;const Ee=$.length;let _e=P.length-1,ye=Ee-1;for(;ue<=_e&&ue<=ye;){const Se=P[ue],He=$[ue]=me?li($[ue]):Pn($[ue]);if(yo(Se,He))j(Se,He,ee,null,re,ge,Ce,fe,me);else break;ue++}for(;ue<=_e&&ue<=ye;){const Se=P[_e],He=$[ye]=me?li($[ye]):Pn($[ye]);if(yo(Se,He))j(Se,He,ee,null,re,ge,Ce,fe,me);else break;_e--,ye--}if(ue>_e){if(ue<=ye){const Se=ye+1,He=Se<Ee?$[Se].el:ie;for(;ue<=ye;)j(null,$[ue]=me?li($[ue]):Pn($[ue]),ee,He,re,ge,Ce,fe,me),ue++}}else if(ue>ye)for(;ue<=_e;)_t(P[ue],re,ge,!0),ue++;else{const Se=ue,He=ue,nt=new Map;for(ue=He;ue<=ye;ue++){const cn=$[ue]=me?li($[ue]):Pn($[ue]);cn.key!=null&&nt.set(cn.key,ue)}let je,ut=0;const En=ye-He+1;let To=!1,Ra=0;const Di=new Array(En);for(ue=0;ue<En;ue++)Di[ue]=0;for(ue=Se;ue<=_e;ue++){const cn=P[ue];if(ut>=En){_t(cn,re,ge,!0);continue}let en;if(cn.key!=null)en=nt.get(cn.key);else for(je=He;je<=ye;je++)if(Di[je-He]===0&&yo(cn,$[je])){en=je;break}en===void 0?_t(cn,re,ge,!0):(Di[en-He]=ue+1,en>=Ra?Ra=en:To=!0,j(cn,$[en],ee,null,re,ge,Ce,fe,me),ut++)}const Xt=To?gN(Di):Kr;for(je=Xt.length-1,ue=En-1;ue>=0;ue--){const cn=He+ue,en=$[cn],Ii=cn+1<Ee?$[cn+1].el:ie;Di[ue]===0?j(null,en,ee,Ii,re,ge,Ce,fe,me):To&&(je<0||ue!==Xt[je]?Ne(en,ee,Ii,2):je--)}}},Ne=(P,$,ee,ie,re=null)=>{const{el:ge,type:Ce,transition:fe,children:me,shapeFlag:ue}=P;if(ue&6){Ne(P.component.subTree,$,ee,ie);return}if(ue&128){P.suspense.move($,ee,ie);return}if(ue&64){Ce.move(P,$,ee,Ge);return}if(Ce===$e){h(ge,$,ee);for(let _e=0;_e<me.length;_e++)Ne(me[_e],$,ee,ie);h(P.anchor,$,ee);return}if(Ce===or){G(P,$,ee);return}if(ie!==2&&ue&1&&fe)if(ie===0)fe.beforeEnter(ge),h(ge,$,ee),Yt(()=>fe.enter(ge),re);else{const{leave:_e,delayLeave:ye,afterLeave:Se}=fe,He=()=>h(ge,$,ee),nt=()=>{_e(ge,()=>{He(),Se&&Se()})};ye?ye(ge,He,nt):nt()}else h(ge,$,ee)},_t=(P,$,ee,ie=!1,re=!1)=>{const{type:ge,props:Ce,ref:fe,children:me,dynamicChildren:ue,shapeFlag:Ee,patchFlag:_e,dirs:ye}=P;if(fe!=null&&rc(fe,null,ee,P,!0),Ee&256){$.ctx.deactivate(P);return}const Se=Ee&1&&ye,He=!nr(P);let nt;if(He&&(nt=Ce&&Ce.onVnodeBeforeUnmount)&&_n(nt,$,P),Ee&6)ce(P.component,ee,ie);else{if(Ee&128){P.suspense.unmount(ee,ie);return}Se&&Ao(P,null,$,"beforeUnmount"),Ee&64?P.type.remove(P,$,ee,re,Ge,ie):ue&&(ge!==$e||_e>0&&_e&64)?de(ue,$,ee,!1,!0):(ge===$e&&_e&384||!re&&Ee&16)&&de(me,$,ee),ie&&Jt(P)}(He&&(nt=Ce&&Ce.onVnodeUnmounted)||Se)&&Yt(()=>{nt&&_n(nt,$,P),Se&&Ao(P,null,$,"unmounted")},ee)},Jt=P=>{const{type:$,el:ee,anchor:ie,transition:re}=P;if($===$e){H(ee,ie);return}if($===or){U(P);return}const ge=()=>{g(ee),re&&!re.persisted&&re.afterLeave&&re.afterLeave()};if(P.shapeFlag&1&&re&&!re.persisted){const{leave:Ce,delayLeave:fe}=re,me=()=>Ce(ee,ge);fe?fe(P.el,ge,me):me()}else ge()},H=(P,$)=>{let ee;for(;P!==$;)ee=v(P),g(P),P=ee;g($)},ce=(P,$,ee)=>{const{bum:ie,scope:re,update:ge,subTree:Ce,um:fe}=P;ie&&Qr(ie),re.stop(),ge&&(ge.active=!1,_t(Ce,P,$,ee)),fe&&Yt(fe,$),Yt(()=>{P.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},de=(P,$,ee,ie=!1,re=!1,ge=0)=>{for(let Ce=ge;Ce<P.length;Ce++)_t(P[Ce],$,ee,ie,re)},oe=P=>P.shapeFlag&6?oe(P.component.subTree):P.shapeFlag&128?P.suspense.next():v(P.anchor||P.el),J=(P,$,ee)=>{P==null?$._vnode&&_t($._vnode,null,null,!0):j($._vnode||null,P,$,null,null,null,ee),nc(),$._vnode=P},Ge={p:j,um:_t,m:Ne,r:Jt,mt:pe,mc:W,pc:Ke,pbc:Q,n:oe,o};let he,De;return l&&([he,De]=l(Ge)),{render:J,hydrate:he,createApp:uN(J,he)}}function Gi({effect:o,update:l},d){o.allowRecurse=l.allowRecurse=d}function Lg(o,l,d=!1){const h=o.children,g=l.children;if(xe(h)&&xe(g))for(let p=0;p<h.length;p++){const b=h[p];let _=g[p];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=g[p]=li(g[p]),_.el=b.el),d||Lg(b,_))}}function gN(o){const l=o.slice(),d=[0];let h,g,p,b,_;const k=o.length;for(h=0;h<k;h++){const A=o[h];if(A!==0){if(g=d[d.length-1],o[g]<A){l[h]=g,d.push(h);continue}for(p=0,b=d.length-1;p<b;)_=p+b>>1,o[d[_]]<A?p=_+1:b=_;A<o[d[p]]&&(p>0&&(l[h]=d[p-1]),d[p]=h)}}for(p=d.length,b=d[p-1];p-- >0;)d[p]=b,b=l[b];return d}const fN=o=>o.__isTeleport,aa=o=>o&&(o.disabled||o.disabled===""),a_=o=>typeof SVGElement<"u"&&o instanceof SVGElement,Nh=(o,l)=>{const d=o&&o.to;return It(d)?l?l(d):null:d},mN={__isTeleport:!0,process(o,l,d,h,g,p,b,_,k,A){const{mc:x,pc:y,pbc:v,o:{insert:E,querySelector:N,createText:F,createComment:j}}=A,M=aa(l.props);let{shapeFlag:T,children:R,dynamicChildren:G}=l;if(o==null){const U=l.el=F(""),Z=l.anchor=F("");E(U,d,h),E(Z,d,h);const L=l.target=Nh(l.props,N),V=l.targetAnchor=F("");L&&(E(V,L),b=b||a_(L));const W=(Y,Q)=>{T&16&&x(R,Y,Q,g,p,b,_,k)};M?W(d,Z):L&&W(L,V)}else{l.el=o.el;const U=l.anchor=o.anchor,Z=l.target=o.target,L=l.targetAnchor=o.targetAnchor,V=aa(o.props),W=V?d:Z,Y=V?U:L;if(b=b||a_(Z),G?(v(o.dynamicChildren,G,W,g,p,b,_),Lg(o,l,!0)):k||y(o,l,W,Y,g,p,b,_,!1),M)V||Hl(l,d,U,A,1);else if((l.props&&l.props.to)!==(o.props&&o.props.to)){const Q=l.target=Nh(l.props,N);Q&&Hl(l,Q,null,A,0)}else V&&Hl(l,Z,L,A,1)}},remove(o,l,d,h,{um:g,o:{remove:p}},b){const{shapeFlag:_,children:k,anchor:A,targetAnchor:x,target:y,props:v}=o;if(y&&p(x),(b||!aa(v))&&(p(A),_&16))for(let E=0;E<k.length;E++){const N=k[E];g(N,l,d,!0,!!N.dynamicChildren)}},move:Hl,hydrate:pN};function Hl(o,l,d,{o:{insert:h},m:g},p=2){p===0&&h(o.targetAnchor,l,d);const{el:b,anchor:_,shapeFlag:k,children:A,props:x}=o,y=p===2;if(y&&h(b,l,d),(!y||aa(x))&&k&16)for(let v=0;v<A.length;v++)g(A[v],l,d,2);y&&h(_,l,d)}function pN(o,l,d,h,g,p,{o:{nextSibling:b,parentNode:_,querySelector:k}},A){const x=l.target=Nh(l.props,k);if(x){const y=x._lpa||x.firstChild;if(l.shapeFlag&16)if(aa(l.props))l.anchor=A(b(o),l,_(o),d,h,g,p),l.targetAnchor=y;else{l.anchor=b(o);let v=y;for(;v;)if(v=b(v),v&&v.nodeType===8&&v.data==="teleport anchor"){l.targetAnchor=v,x._lpa=l.targetAnchor&&b(l.targetAnchor);break}A(y,l,x,d,h,g,p)}}return l.anchor&&b(l.anchor)}const pA=mN,$e=Symbol(void 0),os=Symbol(void 0),rn=Symbol(void 0),or=Symbol(void 0),la=[];let Cn=null;function Ue(o=!1){la.push(Cn=o?null:[])}function bA(){la.pop(),Cn=la[la.length-1]||null}let rr=1;function Ph(o){rr+=o}function kA(o){return o.dynamicChildren=rr>0?Cn||Kr:null,bA(),rr>0&&Cn&&Cn.push(o),o}function yt(o,l,d,h,g,p){return kA(Le(o,l,d,h,g,p,!0))}function Zn(o,l,d,h,g){return kA(z(o,l,d,h,g,!0))}function bi(o){return o?o.__v_isVNode===!0:!1}function yo(o,l){return o.type===l.type&&o.key===l.key}function bN(o){}const Nc="__vInternal",wA=({key:o})=>o!=null?o:null,Zl=({ref:o,ref_key:l,ref_for:d})=>o!=null?It(o)||kt(o)||Pe(o)?{i:on,r:o,k:l,f:!!d}:o:null;function Le(o,l=null,d=null,h=0,g=null,p=o===$e?0:1,b=!1,_=!1){const k={__v_isVNode:!0,__v_skip:!0,type:o,props:l,key:l&&wA(l),ref:l&&Zl(l),scopeId:Dc,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:p,patchFlag:h,dynamicProps:g,dynamicChildren:null,appContext:null};return _?(Rg(k,d),p&128&&o.normalize(k)):d&&(k.shapeFlag|=It(d)?8:16),rr>0&&!b&&Cn&&(k.patchFlag>0||p&6)&&k.patchFlag!==32&&Cn.push(k),k}const z=kN;function kN(o,l=null,d=null,h=0,g=null,p=!1){if((!o||o===tA)&&(o=rn),bi(o)){const _=lo(o,l,!0);return d&&Rg(_,d),rr>0&&!p&&Cn&&(_.shapeFlag&6?Cn[Cn.indexOf(o)]=_:Cn.push(_)),_.patchFlag|=-2,_}if(DN(o)&&(o=o.__vccOpts),l){l=Og(l);let{class:_,style:k}=l;_&&!It(_)&&(l.class=Rn(_)),Nt(k)&&(mg(k)&&!xe(k)&&(k=Bt({},k)),l.style=ls(k))}const b=It(o)?1:$C(o)?128:fN(o)?64:Nt(o)?4:Pe(o)?2:0;return Le(o,l,d,h,g,b,p,!0)}function Og(o){return o?mg(o)||Nc in o?Bt({},o):o:null}function lo(o,l,d=!1){const{props:h,ref:g,patchFlag:p,children:b}=o,_=l?xt(h||{},l):h;return{__v_isVNode:!0,__v_skip:!0,type:o.type,props:_,key:_&&wA(_),ref:l&&l.ref?d&&g?xe(g)?g.concat(Zl(l)):[g,Zl(l)]:Zl(l):g,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:b,target:o.target,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:l&&o.type!==$e?p===-1?16:p|16:p,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:o.transition,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&lo(o.ssContent),ssFallback:o.ssFallback&&lo(o.ssFallback),el:o.el,anchor:o.anchor}}function Et(o=" ",l=0){return z(os,null,o,l)}function wN(o,l){const d=z(or,null,o);return d.staticCount=l,d}function ro(o="",l=!1){return l?(Ue(),Zn(rn,null,o)):z(rn,null,o)}function Pn(o){return o==null||typeof o=="boolean"?z(rn):xe(o)?z($e,null,o.slice()):typeof o=="object"?li(o):z(os,null,String(o))}function li(o){return o.el===null||o.memo?o:lo(o)}function Rg(o,l){let d=0;const{shapeFlag:h}=o;if(l==null)l=null;else if(xe(l))d=16;else if(typeof l=="object")if(h&65){const g=l.default;g&&(g._c&&(g._d=!1),Rg(o,g()),g._c&&(g._d=!0));return}else{d=32;const g=l._;!g&&!(Nc in l)?l._ctx=on:g===3&&on&&(on.slots._===1?l._=1:(l._=2,o.patchFlag|=1024))}else Pe(l)?(l={default:l,_ctx:on},d=32):(l=String(l),h&64?(d=16,l=[Et(l)]):d=8);o.children=l,o.shapeFlag|=d}function xt(...o){const l={};for(let d=0;d<o.length;d++){const h=o[d];for(const g in h)if(g==="class")l.class!==h.class&&(l.class=Rn([l.class,h.class]));else if(g==="style")l.style=ls([l.style,h.style]);else if(Sa(g)){const p=l[g],b=h[g];b&&p!==b&&!(xe(p)&&p.includes(b))&&(l[g]=p?[].concat(p,b):b)}else g!==""&&(l[g]=h[g])}return l}function _n(o,l,d,h=null){On(o,l,7,[d,h])}const vN=hA();let _N=0;function vA(o,l,d){const h=o.type,g=(l?l.appContext:o.appContext)||vN,p={uid:_N++,vnode:o,type:h,parent:l,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new ug(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lA(h,g),emitsOptions:UC(h,g),emit:null,emitted:null,propsDefaults:st,inheritAttrs:h.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return p.ctx={_:p},p.root=l?l.root:p,p.emit=TB.bind(null,p),o.ce&&o.ce(p),p}let Vt=null;const Do=()=>Vt||on,ki=o=>{Vt=o,o.scope.on()},hi=()=>{Vt&&Vt.scope.off(),Vt=null};function _A(o){return o.vnode.shapeFlag&4}let is=!1;function CA(o,l=!1){is=l;const{props:d,children:h}=o.vnode,g=_A(o);rN(o,d,g,l),lN(o,h);const p=g?CN(o,l):void 0;return is=!1,p}function CN(o,l){const d=o.type;o.accessCache=Object.create(null),o.proxy=pg(new Proxy(o.ctx,Ih));const{setup:h}=d;if(h){const g=o.setupContext=h.length>1?yA(o):null;ki(o),ar();const p=So(h,o,0,[o.props,g]);if(lr(),hi(),cg(p)){if(p.then(hi,hi),l)return p.then(b=>{zh(o,b,l)}).catch(b=>{cr(b,o,0)});o.asyncDep=p}else zh(o,p,l)}else AA(o,l)}function zh(o,l,d){Pe(l)?o.type.__ssrInlineRender?o.ssrRender=l:o.render=l:Nt(l)&&(o.setupState=vg(l)),AA(o,d)}let sc,Lh;function AN(o){sc=o,Lh=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,XB))}}const yN=()=>!sc;function AA(o,l,d){const h=o.type;if(!o.render){if(!l&&sc&&!h.render){const g=h.template;if(g){const{isCustomElement:p,compilerOptions:b}=o.appContext.config,{delimiters:_,compilerOptions:k}=h,A=Bt(Bt({isCustomElement:p,delimiters:_},b),k);h.render=sc(g,A)}}o.render=h.render||ao,Lh&&Lh(o)}ki(o),ar(),eN(o),lr(),hi()}function xN(o){return new Proxy(o.attrs,{get(l,d){return Fn(o,"get","$attrs"),l[d]}})}function yA(o){const l=h=>{o.exposed=h||{}};let d;return{get attrs(){return d||(d=xN(o))},slots:o.slots,emit:o.emit,expose:l}}function Pc(o){if(o.exposed)return o.exposeProxy||(o.exposeProxy=new Proxy(vg(pg(o.exposed)),{get(l,d){if(d in l)return l[d];if(d in oc)return oc[d](o)}}))}const EN=/(?:^|[-_])(\w)/g,SN=o=>o.replace(EN,l=>l.toUpperCase()).replace(/[-_]/g,"");function ac(o,l=!0){return Pe(o)?o.displayName||o.name:o.name||l&&o.__name}function xA(o,l,d=!1){let h=ac(l);if(!h&&l.__file){const g=l.__file.match(/([^/\\]+)\.\w+$/);g&&(h=g[1])}if(!h&&o&&o.parent){const g=p=>{for(const b in p)if(p[b]===l)return b};h=g(o.components||o.parent.type.components)||g(o.appContext.components)}return h?SN(h):d?"App":"Anonymous"}function DN(o){return Pe(o)&&"__vccOpts"in o}const q=(o,l)=>_B(o,l,is);function IN(){return null}function TN(){return null}function MN(o){}function BN(o,l){return null}function NN(){return EA().slots}function PN(){return EA().attrs}function EA(){const o=Do();return o.setupContext||(o.setupContext=yA(o))}function zN(o,l){const d=xe(o)?o.reduce((h,g)=>(h[g]={},h),{}):o;for(const h in l){const g=d[h];g?xe(g)||Pe(g)?d[h]={type:g,default:l[h]}:g.default=l[h]:g===null&&(d[h]={default:l[h]})}return d}function LN(o,l){const d={};for(const h in o)l.includes(h)||Object.defineProperty(d,h,{enumerable:!0,get:()=>o[h]});return d}function ON(o){const l=Do();let d=o();return hi(),cg(d)&&(d=d.catch(h=>{throw ki(l),h})),[d,()=>ki(l)]}function Io(o,l,d){const h=arguments.length;return h===2?Nt(l)&&!xe(l)?bi(l)?z(o,null,[l]):z(o,l):z(o,null,l):(h>3?d=Array.prototype.slice.call(arguments,2):h===3&&bi(d)&&(d=[d]),z(o,l,d))}const SA=Symbol(""),RN=()=>{{const o=Xe(SA);return o||Cg("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),o}};function FN(){}function jN(o,l,d,h){const g=d[h];if(g&&DA(g,o))return g;const p=l();return p.memo=o.slice(),d[h]=p}function DA(o,l){const d=o.memo;if(d.length!=l.length)return!1;for(let h=0;h<d.length;h++)if(es(d[h],l[h]))return!1;return rr>0&&Cn&&Cn.push(o),!0}const IA="3.2.37",VN={createComponentInstance:vA,setupComponent:CA,renderComponentRoot:Ql,setCurrentRenderingInstance:ka,isVNode:bi,normalizeVNode:Pn},HN=VN,UN=null,$N=null,WN="http://www.w3.org/2000/svg",Zi=typeof document<"u"?document:null,l_=Zi&&Zi.createElement("template"),qN={insert:(o,l,d)=>{l.insertBefore(o,d||null)},remove:o=>{const l=o.parentNode;l&&l.removeChild(o)},createElement:(o,l,d,h)=>{const g=l?Zi.createElementNS(WN,o):Zi.createElement(o,d?{is:d}:void 0);return o==="select"&&h&&h.multiple!=null&&g.setAttribute("multiple",h.multiple),g},createText:o=>Zi.createTextNode(o),createComment:o=>Zi.createComment(o),setText:(o,l)=>{o.nodeValue=l},setElementText:(o,l)=>{o.textContent=l},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>Zi.querySelector(o),setScopeId(o,l){o.setAttribute(l,"")},cloneNode(o){const l=o.cloneNode(!0);return"_value"in o&&(l._value=o._value),l},insertStaticContent(o,l,d,h,g,p){const b=d?d.previousSibling:l.lastChild;if(g&&(g===p||g.nextSibling))for(;l.insertBefore(g.cloneNode(!0),d),!(g===p||!(g=g.nextSibling)););else{l_.innerHTML=h?`<svg>${o}</svg>`:o;const _=l_.content;if(h){const k=_.firstChild;for(;k.firstChild;)_.appendChild(k.firstChild);_.removeChild(k)}l.insertBefore(_,d)}return[b?b.nextSibling:l.firstChild,d?d.previousSibling:l.lastChild]}};function GN(o,l,d){const h=o._vtc;h&&(l=(l?[l,...h]:[...h]).join(" ")),l==null?o.removeAttribute("class"):d?o.setAttribute("class",l):o.className=l}function KN(o,l,d){const h=o.style,g=It(d);if(d&&!g){for(const p in d)Oh(h,p,d[p]);if(l&&!It(l))for(const p in l)d[p]==null&&Oh(h,p,"")}else{const p=h.display;g?l!==d&&(h.cssText=d):l&&o.removeAttribute("style"),"_vod"in o&&(h.display=p)}}const c_=/\s*!important$/;function Oh(o,l,d){if(xe(d))d.forEach(h=>Oh(o,l,h));else if(d==null&&(d=""),l.startsWith("--"))o.setProperty(l,d);else{const h=YN(o,l);c_.test(d)?o.setProperty(Eo(h),d.replace(c_,""),"important"):o[h]=d}}const d_=["Webkit","Moz","ms"],ah={};function YN(o,l){const d=ah[l];if(d)return d;let h=fn(l);if(h!=="filter"&&h in o)return ah[l]=h;h=cs(h);for(let g=0;g<d_.length;g++){const p=d_[g]+h;if(p in o)return ah[l]=p}return l}const u_="http://www.w3.org/1999/xlink";function QN(o,l,d,h,g){if(h&&l.startsWith("xlink:"))d==null?o.removeAttributeNS(u_,l.slice(6,l.length)):o.setAttributeNS(u_,l,d);else{const p=E4(l);d==null||p&&!kC(d)?o.removeAttribute(l):o.setAttribute(l,p?"":d)}}function ZN(o,l,d,h,g,p,b){if(l==="innerHTML"||l==="textContent"){h&&b(h,g,p),o[l]=d==null?"":d;return}if(l==="value"&&o.tagName!=="PROGRESS"&&!o.tagName.includes("-")){o._value=d;const k=d==null?"":d;(o.value!==k||o.tagName==="OPTION")&&(o.value=k),d==null&&o.removeAttribute(l);return}let _=!1;if(d===""||d==null){const k=typeof o[l];k==="boolean"?d=kC(d):d==null&&k==="string"?(d="",_=!0):k==="number"&&(d=0,_=!0)}try{o[l]=d}catch{}_&&o.removeAttribute(l)}const[TA,JN]=(()=>{let o=Date.now,l=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(o=performance.now.bind(performance));const d=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(d&&Number(d[1])<=53)}return[o,l]})();let Rh=0;const XN=Promise.resolve(),eP=()=>{Rh=0},tP=()=>Rh||(XN.then(eP),Rh=TA());function jo(o,l,d,h){o.addEventListener(l,d,h)}function nP(o,l,d,h){o.removeEventListener(l,d,h)}function oP(o,l,d,h,g=null){const p=o._vei||(o._vei={}),b=p[l];if(h&&b)b.value=h;else{const[_,k]=iP(l);if(h){const A=p[l]=rP(h,g);jo(o,_,A,k)}else b&&(nP(o,_,b,k),p[l]=void 0)}}const h_=/(?:Once|Passive|Capture)$/;function iP(o){let l;if(h_.test(o)){l={};let d;for(;d=o.match(h_);)o=o.slice(0,o.length-d[0].length),l[d[0].toLowerCase()]=!0}return[Eo(o.slice(2)),l]}function rP(o,l){const d=h=>{const g=h.timeStamp||TA();(JN||g>=d.attached-1)&&On(sP(h,d.value),l,5,[h])};return d.value=o,d.attached=tP(),d}function sP(o,l){if(xe(l)){const d=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{d.call(o),o._stopped=!0},l.map(h=>g=>!g._stopped&&h&&h(g))}else return l}const g_=/^on[a-z]/,aP=(o,l,d,h,g=!1,p,b,_,k)=>{l==="class"?GN(o,h,g):l==="style"?KN(o,d,h):Sa(l)?ag(l)||oP(o,l,d,h,b):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):lP(o,l,h,g))?ZN(o,l,h,p,b,_,k):(l==="true-value"?o._trueValue=h:l==="false-value"&&(o._falseValue=h),QN(o,l,h,g))};function lP(o,l,d,h){return h?!!(l==="innerHTML"||l==="textContent"||l in o&&g_.test(l)&&Pe(d)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&o.tagName==="INPUT"||l==="type"&&o.tagName==="TEXTAREA"||g_.test(l)&&It(d)?!1:l in o}function MA(o,l){const d=dr(o);class h extends zc{constructor(p){super(d,p,l)}}return h.def=d,h}const cP=o=>MA(o,WA),dP=typeof HTMLElement<"u"?HTMLElement:class{};class zc extends dP{constructor(l,d={},h){super(),this._def=l,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,An(()=>{this._connected||(jh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const g of h)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const l=h=>{const{props:g,styles:p}=h,b=!xe(g),_=g?b?Object.keys(g):g:[];let k;if(b)for(const A in this._props){const x=g[A];(x===Number||x&&x.type===Number)&&(this._props[A]=mi(this._props[A]),(k||(k=Object.create(null)))[A]=!0)}this._numberProps=k;for(const A of Object.keys(this))A[0]!=="_"&&this._setProp(A,this[A],!0,!1);for(const A of _.map(fn))Object.defineProperty(this,A,{get(){return this._getProp(A)},set(x){this._setProp(A,x)}});this._applyStyles(p),this._update()},d=this._def.__asyncLoader;d?d().then(l):l(this._def)}_setAttr(l){let d=this.getAttribute(l);this._numberProps&&this._numberProps[l]&&(d=mi(d)),this._setProp(fn(l),d,!1)}_getProp(l){return this._props[l]}_setProp(l,d,h=!0,g=!0){d!==this._props[l]&&(this._props[l]=d,g&&this._instance&&this._update(),h&&(d===!0?this.setAttribute(Eo(l),""):typeof d=="string"||typeof d=="number"?this.setAttribute(Eo(l),d+""):d||this.removeAttribute(Eo(l))))}_update(){jh(this._createVNode(),this.shadowRoot)}_createVNode(){const l=z(this._def,Bt({},this._props));return this._instance||(l.ce=d=>{this._instance=d,d.isCE=!0,d.emit=(g,...p)=>{this.dispatchEvent(new CustomEvent(g,{detail:p}))};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof zc){d.parent=h._instance;break}}),l}_applyStyles(l){l&&l.forEach(d=>{const h=document.createElement("style");h.textContent=d,this.shadowRoot.appendChild(h)})}}function uP(o="$style"){{const l=Do();if(!l)return st;const d=l.type.__cssModules;if(!d)return st;const h=d[o];return h||st}}function hP(o){const l=Do();if(!l)return;const d=()=>Fh(l.subTree,o(l.proxy));qC(d),uo(()=>{const h=new MutationObserver(d);h.observe(l.subTree.el.parentNode,{childList:!0}),Bc(()=>h.disconnect())})}function Fh(o,l){if(o.shapeFlag&128){const d=o.suspense;o=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{Fh(d.activeBranch,l)})}for(;o.component;)o=o.component.subTree;if(o.shapeFlag&1&&o.el)f_(o.el,l);else if(o.type===$e)o.children.forEach(d=>Fh(d,l));else if(o.type===or){let{el:d,anchor:h}=o;for(;d&&(f_(d,l),d!==h);)d=d.nextSibling}}function f_(o,l){if(o.nodeType===1){const d=o.style;for(const h in l)d.setProperty(`--${h}`,l[h])}}const oi="transition",Ks="animation",co=(o,{slots:l})=>Io(Ig,NA(o),l);co.displayName="Transition";const BA={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gP=co.props=Bt({},Ig.props,BA),Ki=(o,l=[])=>{xe(o)?o.forEach(d=>d(...l)):o&&o(...l)},m_=o=>o?xe(o)?o.some(l=>l.length>1):o.length>1:!1;function NA(o){const l={};for(const X in o)X in BA||(l[X]=o[X]);if(o.css===!1)return l;const{name:d="v",type:h,duration:g,enterFromClass:p=`${d}-enter-from`,enterActiveClass:b=`${d}-enter-active`,enterToClass:_=`${d}-enter-to`,appearFromClass:k=p,appearActiveClass:A=b,appearToClass:x=_,leaveFromClass:y=`${d}-leave-from`,leaveActiveClass:v=`${d}-leave-active`,leaveToClass:E=`${d}-leave-to`}=o,N=fP(g),F=N&&N[0],j=N&&N[1],{onBeforeEnter:M,onEnter:T,onEnterCancelled:R,onLeave:G,onLeaveCancelled:U,onBeforeAppear:Z=M,onAppear:L=T,onAppearCancelled:V=R}=l,W=(X,se,ae)=>{ai(X,se?x:_),ai(X,se?A:b),ae&&ae()},Y=(X,se)=>{X._isLeaving=!1,ai(X,y),ai(X,E),ai(X,v),se&&se()},Q=X=>(se,ae)=>{const pe=X?L:T,ke=()=>W(se,X,ae);Ki(pe,[se,ke]),p_(()=>{ai(se,X?k:p),Ro(se,X?x:_),m_(pe)||b_(se,h,F,ke)})};return Bt(l,{onBeforeEnter(X){Ki(M,[X]),Ro(X,p),Ro(X,b)},onBeforeAppear(X){Ki(Z,[X]),Ro(X,k),Ro(X,A)},onEnter:Q(!1),onAppear:Q(!0),onLeave(X,se){X._isLeaving=!0;const ae=()=>Y(X,se);Ro(X,y),zA(),Ro(X,v),p_(()=>{!X._isLeaving||(ai(X,y),Ro(X,E),m_(G)||b_(X,h,j,ae))}),Ki(G,[X,ae])},onEnterCancelled(X){W(X,!1),Ki(R,[X])},onAppearCancelled(X){W(X,!0),Ki(V,[X])},onLeaveCancelled(X){Y(X),Ki(U,[X])}})}function fP(o){if(o==null)return null;if(Nt(o))return[lh(o.enter),lh(o.leave)];{const l=lh(o);return[l,l]}}function lh(o){return mi(o)}function Ro(o,l){l.split(/\s+/).forEach(d=>d&&o.classList.add(d)),(o._vtc||(o._vtc=new Set)).add(l)}function ai(o,l){l.split(/\s+/).forEach(h=>h&&o.classList.remove(h));const{_vtc:d}=o;d&&(d.delete(l),d.size||(o._vtc=void 0))}function p_(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let mP=0;function b_(o,l,d,h){const g=o._endId=++mP,p=()=>{g===o._endId&&h()};if(d)return setTimeout(p,d);const{type:b,timeout:_,propCount:k}=PA(o,l);if(!b)return h();const A=b+"end";let x=0;const y=()=>{o.removeEventListener(A,v),p()},v=E=>{E.target===o&&++x>=k&&y()};setTimeout(()=>{x<k&&y()},_+1),o.addEventListener(A,v)}function PA(o,l){const d=window.getComputedStyle(o),h=N=>(d[N]||"").split(", "),g=h(oi+"Delay"),p=h(oi+"Duration"),b=k_(g,p),_=h(Ks+"Delay"),k=h(Ks+"Duration"),A=k_(_,k);let x=null,y=0,v=0;l===oi?b>0&&(x=oi,y=b,v=p.length):l===Ks?A>0&&(x=Ks,y=A,v=k.length):(y=Math.max(b,A),x=y>0?b>A?oi:Ks:null,v=x?x===oi?p.length:k.length:0);const E=x===oi&&/\b(transform|all)(,|$)/.test(d[oi+"Property"]);return{type:x,timeout:y,propCount:v,hasTransform:E}}function k_(o,l){for(;o.length<l.length;)o=o.concat(o);return Math.max(...l.map((d,h)=>w_(d)+w_(o[h])))}function w_(o){return Number(o.slice(0,-1).replace(",","."))*1e3}function zA(){return document.body.offsetHeight}const LA=new WeakMap,OA=new WeakMap,pP={name:"TransitionGroup",props:Bt({},gP,{tag:String,moveClass:String}),setup(o,{slots:l}){const d=Do(),h=Dg();let g,p;return Mc(()=>{if(!g.length)return;const b=o.moveClass||`${o.name||"v"}-move`;if(!vP(g[0].el,d.vnode.el,b))return;g.forEach(bP),g.forEach(kP);const _=g.filter(wP);zA(),_.forEach(k=>{const A=k.el,x=A.style;Ro(A,b),x.transform=x.webkitTransform=x.transitionDuration="";const y=A._moveCb=v=>{v&&v.target!==A||(!v||/transform$/.test(v.propertyName))&&(A.removeEventListener("transitionend",y),A._moveCb=null,ai(A,b))};A.addEventListener("transitionend",y)})}),()=>{const b=We(o),_=NA(b);let k=b.tag||$e;g=p,p=l.default?Ic(l.default()):[];for(let A=0;A<p.length;A++){const x=p[A];x.key!=null&&ir(x,ns(x,_,h,d))}if(g)for(let A=0;A<g.length;A++){const x=g[A];ir(x,ns(x,_,h,d)),LA.set(x,x.el.getBoundingClientRect())}return z(k,null,p)}}},RA=pP;function bP(o){const l=o.el;l._moveCb&&l._moveCb(),l._enterCb&&l._enterCb()}function kP(o){OA.set(o,o.el.getBoundingClientRect())}function wP(o){const l=LA.get(o),d=OA.get(o),h=l.left-d.left,g=l.top-d.top;if(h||g){const p=o.el.style;return p.transform=p.webkitTransform=`translate(${h}px,${g}px)`,p.transitionDuration="0s",o}}function vP(o,l,d){const h=o.cloneNode();o._vtc&&o._vtc.forEach(b=>{b.split(/\s+/).forEach(_=>_&&h.classList.remove(_))}),d.split(/\s+/).forEach(b=>b&&h.classList.add(b)),h.style.display="none";const g=l.nodeType===1?l:l.parentNode;g.appendChild(h);const{hasTransform:p}=PA(h);return g.removeChild(h),p}const wi=o=>{const l=o.props["onUpdate:modelValue"]||!1;return xe(l)?d=>Qr(l,d):l};function _P(o){o.target.composing=!0}function v_(o){const l=o.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const lc={created(o,{modifiers:{lazy:l,trim:d,number:h}},g){o._assign=wi(g);const p=h||g.props&&g.props.type==="number";jo(o,l?"change":"input",b=>{if(b.target.composing)return;let _=o.value;d&&(_=_.trim()),p&&(_=mi(_)),o._assign(_)}),d&&jo(o,"change",()=>{o.value=o.value.trim()}),l||(jo(o,"compositionstart",_P),jo(o,"compositionend",v_),jo(o,"change",v_))},mounted(o,{value:l}){o.value=l==null?"":l},beforeUpdate(o,{value:l,modifiers:{lazy:d,trim:h,number:g}},p){if(o._assign=wi(p),o.composing||document.activeElement===o&&o.type!=="range"&&(d||h&&o.value.trim()===l||(g||o.type==="number")&&mi(o.value)===l))return;const b=l==null?"":l;o.value!==b&&(o.value=b)}},Fg={deep:!0,created(o,l,d){o._assign=wi(d),jo(o,"change",()=>{const h=o._modelValue,g=rs(o),p=o.checked,b=o._assign;if(xe(h)){const _=wc(h,g),k=_!==-1;if(p&&!k)b(h.concat(g));else if(!p&&k){const A=[...h];A.splice(_,1),b(A)}}else if(sr(h)){const _=new Set(h);p?_.add(g):_.delete(g),b(_)}else b(jA(o,p))})},mounted:__,beforeUpdate(o,l,d){o._assign=wi(d),__(o,l,d)}};function __(o,{value:l,oldValue:d},h){o._modelValue=l,xe(l)?o.checked=wc(l,h.props.value)>-1:sr(l)?o.checked=l.has(h.props.value):l!==d&&(o.checked=fi(l,jA(o,!0)))}const jg={created(o,{value:l},d){o.checked=fi(l,d.props.value),o._assign=wi(d),jo(o,"change",()=>{o._assign(rs(o))})},beforeUpdate(o,{value:l,oldValue:d},h){o._assign=wi(h),l!==d&&(o.checked=fi(l,h.props.value))}},FA={deep:!0,created(o,{value:l,modifiers:{number:d}},h){const g=sr(l);jo(o,"change",()=>{const p=Array.prototype.filter.call(o.options,b=>b.selected).map(b=>d?mi(rs(b)):rs(b));o._assign(o.multiple?g?new Set(p):p:p[0])}),o._assign=wi(h)},mounted(o,{value:l}){C_(o,l)},beforeUpdate(o,l,d){o._assign=wi(d)},updated(o,{value:l}){C_(o,l)}};function C_(o,l){const d=o.multiple;if(!(d&&!xe(l)&&!sr(l))){for(let h=0,g=o.options.length;h<g;h++){const p=o.options[h],b=rs(p);if(d)xe(l)?p.selected=wc(l,b)>-1:p.selected=l.has(b);else if(fi(rs(p),l)){o.selectedIndex!==h&&(o.selectedIndex=h);return}}!d&&o.selectedIndex!==-1&&(o.selectedIndex=-1)}}function rs(o){return"_value"in o?o._value:o.value}function jA(o,l){const d=l?"_trueValue":"_falseValue";return d in o?o[d]:l}const Vg={created(o,l,d){Ul(o,l,d,null,"created")},mounted(o,l,d){Ul(o,l,d,null,"mounted")},beforeUpdate(o,l,d,h){Ul(o,l,d,h,"beforeUpdate")},updated(o,l,d,h){Ul(o,l,d,h,"updated")}};function VA(o,l){switch(o){case"SELECT":return FA;case"TEXTAREA":return lc;default:switch(l){case"checkbox":return Fg;case"radio":return jg;default:return lc}}}function Ul(o,l,d,h,g){const b=VA(o.tagName,d.props&&d.props.type)[g];b&&b(o,l,d,h)}function CP(){lc.getSSRProps=({value:o})=>({value:o}),jg.getSSRProps=({value:o},l)=>{if(l.props&&fi(l.props.value,o))return{checked:!0}},Fg.getSSRProps=({value:o},l)=>{if(xe(o)){if(l.props&&wc(o,l.props.value)>-1)return{checked:!0}}else if(sr(o)){if(l.props&&o.has(l.props.value))return{checked:!0}}else if(o)return{checked:!0}},Vg.getSSRProps=(o,l)=>{if(typeof l.type!="string")return;const d=VA(l.type.toUpperCase(),l.props&&l.props.type);if(d.getSSRProps)return d.getSSRProps(o,l)}}const AP=["ctrl","shift","alt","meta"],yP={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,l)=>AP.some(d=>o[`${d}Key`]&&!l.includes(d))},Hg=(o,l)=>(d,...h)=>{for(let g=0;g<l.length;g++){const p=yP[l[g]];if(p&&p(d,l))return}return o(d,...h)},xP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},EP=(o,l)=>d=>{if(!("key"in d))return;const h=Eo(d.key);if(l.some(g=>g===h||xP[g]===h))return o(d)},Ai={beforeMount(o,{value:l},{transition:d}){o._vod=o.style.display==="none"?"":o.style.display,d&&l?d.beforeEnter(o):Ys(o,l)},mounted(o,{value:l},{transition:d}){d&&l&&d.enter(o)},updated(o,{value:l,oldValue:d},{transition:h}){!l!=!d&&(h?l?(h.beforeEnter(o),Ys(o,!0),h.enter(o)):h.leave(o,()=>{Ys(o,!1)}):Ys(o,l))},beforeUnmount(o,{value:l}){Ys(o,l)}};function Ys(o,l){o.style.display=l?o._vod:"none"}function SP(){Ai.getSSRProps=({value:o})=>{if(!o)return{style:{display:"none"}}}}const HA=Bt({patchProp:aP},qN);let ca,A_=!1;function UA(){return ca||(ca=gA(HA))}function $A(){return ca=A_?ca:fA(HA),A_=!0,ca}const jh=(...o)=>{UA().render(...o)},WA=(...o)=>{$A().hydrate(...o)},qA=(...o)=>{const l=UA().createApp(...o),{mount:d}=l;return l.mount=h=>{const g=GA(h);if(!g)return;const p=l._component;!Pe(p)&&!p.render&&!p.template&&(p.template=g.innerHTML),g.innerHTML="";const b=d(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),b},l},DP=(...o)=>{const l=$A().createApp(...o),{mount:d}=l;return l.mount=h=>{const g=GA(h);if(g)return d(g,!0,g instanceof SVGElement)},l};function GA(o){return It(o)?document.querySelector(o):o}let y_=!1;const IP=()=>{y_||(y_=!0,CP(),SP())},TP=()=>{},MP=Object.freeze(Object.defineProperty({__proto__:null,compile:TP,EffectScope:ug,ReactiveEffect:Ia,customRef:kB,effect:V4,effectScope:ds,getCurrentScope:R4,isProxy:mg,isReactive:tr,isReadonly:ts,isRef:kt,isShallow:ec,markRaw:pg,onScopeDispose:_i,proxyRefs:vg,reactive:Zt,readonly:us,ref:ve,shallowReactive:fg,shallowReadonly:gB,shallowRef:wg,stop:H4,toRaw:We,toRef:Fe,toRefs:_g,triggerRef:mB,unref:nn,camelize:fn,capitalize:cs,normalizeClass:Rn,normalizeProps:wC,normalizeStyle:ls,toDisplayString:Qt,toHandlerKey:oa,BaseTransition:Ig,Comment:rn,Fragment:$e,KeepAlive:YB,Static:or,Suspense:FB,Teleport:pA,Text:os,callWithAsyncErrorHandling:On,callWithErrorHandling:So,cloneVNode:lo,compatUtils:$N,computed:q,createBlock:Zn,createCommentVNode:ro,createElementBlock:yt,createElementVNode:Le,createHydrationRenderer:fA,createPropsRestProxy:LN,createRenderer:gA,createSlots:oA,createStaticVNode:wN,createTextVNode:Et,createVNode:z,defineAsyncComponent:GB,defineComponent:dr,defineEmits:TN,defineExpose:MN,defineProps:IN,get devtools(){return qr},getCurrentInstance:Do,getTransitionRawChildren:Ic,guardReactiveProps:Og,h:Io,handleError:cr,initCustomFormatter:FN,inject:Xe,isMemoSame:DA,isRuntimeOnly:yN,isVNode:bi,mergeDefaults:zN,mergeProps:xt,nextTick:An,onActivated:Tg,onBeforeMount:Ba,onBeforeUnmount:Vn,onBeforeUpdate:QC,onDeactivated:Mg,onErrorCaptured:eA,onMounted:uo,onRenderTracked:XC,onRenderTriggered:JC,onServerPrefetch:ZC,onUnmounted:Bc,onUpdated:Mc,openBlock:Ue,popScopeId:BB,provide:Ht,pushScopeId:MB,queuePostFlushCb:xg,registerRuntimeCompiler:AN,renderList:ui,renderSlot:JB,resolveComponent:Ng,resolveDirective:Ci,resolveDynamicComponent:nA,resolveFilter:UN,resolveTransitionHooks:ns,setBlockTracking:Ph,setDevtoolsHook:HC,setTransitionHooks:ir,ssrContextKey:SA,ssrUtils:HN,toHandlers:Sh,transformVNodeArgs:bN,useAttrs:PN,useSSRContext:RN,useSlots:NN,useTransitionState:Dg,version:IA,warn:Cg,watch:et,watchEffect:Wo,watchPostEffect:qC,watchSyncEffect:$B,withAsyncContext:ON,withCtx:Qe,withDefaults:BN,withDirectives:jn,withMemo:jN,withScopeId:NB,Transition:co,TransitionGroup:RA,VueElement:zc,createApp:qA,createSSRApp:DP,defineCustomElement:MA,defineSSRCustomElement:cP,hydrate:WA,initDirectivesForSSR:IP,render:jh,useCssModule:uP,useCssVars:hP,vModelCheckbox:Fg,vModelDynamic:Vg,vModelRadio:jg,vModelSelect:FA,vModelText:lc,vShow:Ai,withKeys:EP,withModifiers:Hg},Symbol.toStringTag,{value:"Module"}));function x_(o,l,d){BP(o,l),l.set(o,d)}function BP(o,l){if(l.has(o))throw new TypeError("Cannot initialize the same private elements twice on an object")}function NP(o,l,d){var h=KA(o,l,"set");return PP(o,h,d),d}function PP(o,l,d){if(l.set)l.set.call(o,d);else{if(!l.writable)throw new TypeError("attempted to set read only private field");l.value=d}}function Yi(o,l){var d=KA(o,l,"get");return zP(o,d)}function KA(o,l,d){if(!l.has(o))throw new TypeError("attempted to "+d+" private field on non-instance");return l.get(o)}function zP(o,l){return l.get?l.get.call(o):l.value}function YA(o,l,d){const h=l.length-1;if(h<0)return o===void 0?d:o;for(let g=0;g<h;g++){if(o==null)return d;o=o[l[g]]}return o==null||o[l[h]]===void 0?d:o[l[h]]}function Lc(o,l){if(o===l)return!0;if(o instanceof Date&&l instanceof Date&&o.getTime()!==l.getTime()||o!==Object(o)||l!==Object(l))return!1;const d=Object.keys(o);return d.length!==Object.keys(l).length?!1:d.every(h=>Lc(o[h],l[h]))}function Vh(o,l,d){return o==null||!l||typeof l!="string"?d:o[l]!==void 0?o[l]:(l=l.replace(/\[(\w+)\]/g,".$1"),l=l.replace(/^\./,""),YA(o,l.split("."),d))}function Vo(o,l,d){if(l==null)return o===void 0?d:o;if(o!==Object(o))return d;if(typeof l=="string")return Vh(o,l,d);if(Array.isArray(l))return YA(o,l,d);if(typeof l!="function")return d;const h=l(o,d);return typeof h>"u"?d:h}function LP(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:o},(d,h)=>l+h)}function Re(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(o==null||o===""))return isNaN(+o)?String(o):isFinite(+o)?`${Number(o)}${l}`:void 0}function Hh(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)}function OP(o){return o==null?void 0:o.$el}const E_=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function hs(o,l){const d=Object.create(null),h=Object.create(null);for(const g in o)l.some(p=>p instanceof RegExp?p.test(g):p===g)?d[g]=o[g]:h[g]=o[g];return[d,h]}function QA(o){return hs(o,["class","style","id",/^data-/])}function gi(o){return o==null?[]:Array.isArray(o)?o:[o]}function Uh(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(l,Math.min(d,o))}function Uo(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=arguments.length>2?arguments[2]:void 0;const h={};for(const g in o)h[g]=o[g];for(const g in l){const p=o[g],b=l[g];if(Hh(p)&&Hh(b)){h[g]=Uo(p,b,d);continue}if(Array.isArray(p)&&Array.isArray(b)&&d){h[g]=d(p,b);continue}h[g]=b}return h}function ZA(o){return o.map(l=>l.type===$e?ZA(l.children):l).flat()}function Ug(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function da(o,l){if(!l||typeof l!="object")return[];if(Array.isArray(l))return l.map(d=>da(o,d)).flat(1);if(Array.isArray(l.children))return l.children.map(d=>da(o,d)).flat(1);if(l.component){if(Object.getOwnPropertySymbols(l.component.provides).includes(o))return[l.component];if(l.component.subTree)return da(o,l.component.subTree).flat(1)}return[]}var $l=new WeakMap,Rr=new WeakMap;class RP{constructor(l){x_(this,$l,{writable:!0,value:[]}),x_(this,Rr,{writable:!0,value:0}),this.size=l}push(l){Yi(this,$l)[Yi(this,Rr)]=l,NP(this,Rr,(Yi(this,Rr)+1)%this.size)}values(){return Yi(this,$l).slice(Yi(this,Rr)).concat(Yi(this,$l).slice(0,Yi(this,Rr)))}}function $g(o){const l={},d=q(o);for(const h in d.value)l[h]=Fe(d.value,h);return et(d,h=>{for(const g in h)l[g].value=h[g]},{flush:"sync"}),l}function cc(o,l){return o.includes(l)}const JA=["top","bottom"],FP=["start","end","left","right"];function $h(o,l){let[d,h]=o.split(" ");return h||(h=cc(JA,d)?"start":cc(FP,d)?"top":"center"),{side:S_(d,l),align:S_(h,l)}}function S_(o,l){return o==="start"?l?"right":"left":o==="end"?l?"left":"right":o}function ch(o){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.side],align:o.align}}function dh(o){return{side:o.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.align]}}function D_(o){return{side:o.align,align:o.side}}function I_(o){return cc(JA,o.side)?"y":"x"}class Jr{constructor(l){let{x:d,y:h,width:g,height:p}=l;this.x=d,this.y=h,this.width=g,this.height=p}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function T_(o,l){return{x:{before:Math.max(0,l.left-o.left),after:Math.max(0,o.right-l.right)},y:{before:Math.max(0,l.top-o.top),after:Math.max(0,o.bottom-l.bottom)}}}function Wg(o){const l=o.getBoundingClientRect(),d=getComputedStyle(o),h=d.transform;if(h){let g,p,b,_,k;if(h.startsWith("matrix3d("))g=h.slice(9,-1).split(/, /),p=+g[0],b=+g[5],_=+g[12],k=+g[13];else if(h.startsWith("matrix("))g=h.slice(7,-1).split(/, /),p=+g[0],b=+g[3],_=+g[4],k=+g[5];else return new Jr(l);const A=d.transformOrigin,x=l.x-_-(1-p)*parseFloat(A),y=l.y-k-(1-b)*parseFloat(A.slice(A.indexOf(" ")+1)),v=p?l.width/p:o.offsetWidth+1,E=b?l.height/b:o.offsetHeight+1;return new Jr({x,y,width:v,height:E})}else return new Jr(l)}function XA(o,l,d){if(d&&(l={_isVue:!0,$parent:d,$options:l}),l){if(l.$_alreadyWarned=l.$_alreadyWarned||[],l.$_alreadyWarned.includes(o))return;l.$_alreadyWarned.push(o)}return`[Vuetify] ${o}`+(l?HP(l):"")}function Xr(o,l,d){const h=XA(o,l,d);h!=null&&console.warn(h)}function Wh(o,l,d){const h=XA(o,l,d);h!=null&&console.error(h)}const jP=/(?:^|[-_])(\w)/g,VP=o=>o.replace(jP,l=>l.toUpperCase()).replace(/[-_]/g,"");function uh(o,l){if(o.$root===o)return"<Root>";const d=typeof o=="function"&&o.cid!=null?o.options:o._isVue?o.$options||o.constructor.options:o||{};let h=d.name||d._componentTag;const g=d.__file;if(!h&&g){const p=g.match(/([^/\\]+)\.vue$/);h=p==null?void 0:p[1]}return(h?`<${VP(h)}>`:"<Anonymous>")+(g&&l!==!1?` at ${g}`:"")}function HP(o){if(o._isVue&&o.$parent){const l=[];let d=0;for(;o;){if(l.length>0){const h=l[l.length-1];if(h.constructor===o.constructor){d++,o=o.$parent;continue}else d>0&&(l[l.length-1]=[h,d],d=0)}l.push(o),o=o.$parent}return`

found in

`+l.map((h,g)=>`${g===0?"---> ":" ".repeat(5+g*2)}${Array.isArray(h)?`${uh(h[0])}... (${h[1]} recursive calls)`:uh(h)}`).join(`
`)}else return`

(found in ${uh(o)})`}const UP=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],$P=o=>o<=.0031308?o*12.92:1.055*o**(1/2.4)-.055,WP=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],qP=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4;function ey(o){const l=Array(3),d=$P,h=UP;for(let g=0;g<3;++g)l[g]=Math.round(Uh(d(h[g][0]*o[0]+h[g][1]*o[1]+h[g][2]*o[2]))*255);return(l[0]<<16)+(l[1]<<8)+(l[2]<<0)}function qg(o){const l=[0,0,0],d=qP,h=WP,g=d((o>>16&255)/255),p=d((o>>8&255)/255),b=d((o>>0&255)/255);for(let _=0;_<3;++_)l[_]=h[_][0]*g+h[_][1]*p+h[_][2]*b;return l}const dc=.20689655172413793,GP=o=>o>dc**3?Math.cbrt(o):o/(3*dc**2)+4/29,KP=o=>o>dc?o**3:3*dc**2*(o-4/29);function ty(o){const l=GP,d=l(o[1]);return[116*d-16,500*(l(o[0]/.95047)-d),200*(d-l(o[2]/1.08883))]}function ny(o){const l=KP,d=(o[0]+16)/116;return[l(d+o[1]/500)*.95047,l(d),l(d-o[2]/200)*1.08883]}function M_(o){return!!o&&/^(#|var\(--|(rgb|hsl)a?\()/.test(o)}function uc(o){let l;if(typeof o=="number")l=o;else if(typeof o=="string"){let d=o.startsWith("#")?o.substring(1):o;d.length===3&&(d=d.split("").map(h=>h+h).join("")),d.length!==6&&Xr(`'${o}' is not a valid rgb color`),l=parseInt(d,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${o==null?o:o.constructor.name} instead`);return l<0?(Xr(`Colors cannot be negative: '${o}'`),l=0):(l>16777215||isNaN(l))&&(Xr(`'${o}' is not a valid rgb color`),l=16777215),l}function YP(o){let l=o.toString(16);return l.length<6&&(l="0".repeat(6-l.length)+l),"#"+l}function oy(o){const l=uc(o);return{r:(l&16711680)>>16,g:(l&65280)>>8,b:l&255}}function QP(o,l){const d=ty(qg(o));return d[0]=d[0]+l*10,ey(ny(d))}function ZP(o,l){const d=ty(qg(o));return d[0]=d[0]-l*10,ey(ny(d))}function JP(o){const l=uc(o);return qg(l)[1]}function an(o,l){const d=Do();if(!d)throw new Error(`[Vuetify] ${o} ${l||"must be called from inside a setup function"}`);return d}function Go(){var o;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Ug((o=an(l).type)==null?void 0:o.name)}let iy=0,Jl=new WeakMap;function ho(){const o=an("getUid");if(Jl.has(o))return Jl.get(o);{const l=iy++;return Jl.set(o,l),l}}ho.reset=()=>{iy=0,Jl=new WeakMap};function XP(o){const{provides:l}=an("injectSelf");if(l&&o in l)return l[o]}function ez(o,l){var d,h;return((d=o.props)==null?void 0:d.hasOwnProperty(l))||((h=o.props)==null?void 0:h.hasOwnProperty(Ug(l)))}const tt=function(l){var d;if(l._setup=(d=l._setup)!=null?d:l.setup,!l.name)return Xr("The component is missing an explicit name, unable to generate default prop value"),l;if(l._setup){var h;l.props=(h=l.props)!=null?h:{},l.props._as=String,l.setup=function(p,b){const _=Do(),k=ay(),A=wg(),x=fg({...We(p)});Wo(()=>{var E;const N=k.value.global,F=k.value[(E=p._as)!=null?E:l.name];if(F){const T=Object.entries(F).filter(R=>{let[G]=R;return G.startsWith("V")});T.length&&(A.value=Object.fromEntries(T))}for(const T of Object.keys(p)){let R;if(ez(_.vnode,T))R=p[T];else{var j,M;R=(j=(M=F==null?void 0:F[T])!=null?M:N==null?void 0:N[T])!=null?j:p[T]}x[T]!==R&&(x[T]=R)}});const y=l._setup(x,b);let v;return et(A,(E,N)=>{!E&&v?v.stop():E&&!N&&(v=ds(),v.run(()=>{var F,j;Na(Uo((F=(j=XP(va))==null?void 0:j.value)!=null?F:{},E))}))},{immediate:!0}),y}}return l};function Jn(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return l=>(o?tt:dr)(l)}function ry(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",d=arguments.length>2?arguments[2]:void 0;return tt({name:d!=null?d:cs(fn(o.replace(/__/g,"-"))),props:{tag:{type:String,default:l}},setup(h,g){let{slots:p}=g;return()=>{var b;return Io(h.tag,{class:o},(b=p.default)==null?void 0:b.call(p))}}})}function sy(o){if(typeof o.getRootNode!="function"){for(;o.parentNode;)o=o.parentNode;return o!==document?null:document}const l=o.getRootNode();return l!==document&&l.getRootNode({composed:!0})!==document?null:l}const hc="cubic-bezier(0.4, 0, 0.2, 1)",tz="cubic-bezier(0.0, 0, 0.2, 1)",nz="cubic-bezier(0.4, 0, 1, 1)";function oz(o){for(;o;){if(Gg(o))return o;o=o.parentElement}return document.scrollingElement}function gc(o){const l=[];for(;o;)Gg(o)&&l.push(o),o=o.parentElement;return l}function Gg(o){if(!o||o.nodeType!==Node.ELEMENT_NODE)return!1;const l=window.getComputedStyle(o);return l.overflowY==="scroll"||l.overflowY==="auto"&&o.scrollHeight>o.clientHeight}const Mt=typeof window<"u",Kg=Mt&&"IntersectionObserver"in window,iz=Mt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),qh=Mt&&CSS.supports("selector(:focus-visible)");function rz(o){for(;o;){if(window.getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}function qe(o,l){return d=>Object.keys(o).reduce((h,g)=>{const b=typeof o[g]=="object"&&o[g]!=null&&!Array.isArray(o[g])?o[g]:{type:o[g]};return d&&g in d?h[g]={...b,default:d[g]}:h[g]=b,l&&(h[g].source=l),h},{})}function rt(o){const l=an("useRender");l.render=o}const va=Symbol.for("vuetify:defaults");function sz(o){return ve(o!=null?o:{})}function ay(){const o=Xe(va);if(!o)throw new Error("[Vuetify] Could not find defaults instance");return o}function Na(o,l){const d=ay(),h=ve(o),g=q(()=>{const p=nn(l==null?void 0:l.scoped),b=nn(l==null?void 0:l.reset),_=nn(l==null?void 0:l.root);let k=Uo(h.value,{prev:d.value});if(p)return k;if(b||_){const A=Number(b||1/0);for(let x=0;x<=A&&k.prev;x++)k=k.prev;return k}return Uo(k.prev,k)});return Ht(va,g),g}const Gh=Symbol.for("vuetify:display"),B_={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},az=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:B_;return Uo(B_,o)};function N_(o){return Mt&&!o?window.innerWidth:0}function P_(o){return Mt&&!o?window.innerHeight:0}function lz(){const o=Mt?window.navigator.userAgent:"ssr";function l(N){return Boolean(o.match(N))}const d=l(/android/i),h=l(/iphone|ipad|ipod/i),g=l(/cordova/i),p=l(/electron/i),b=l(/chrome/i),_=l(/edge/i),k=l(/firefox/i),A=l(/opera/i),x=l(/win/i),y=l(/mac/i),v=l(/linux/i),E=l(/ssr/i);return{android:d,ios:h,cordova:g,electron:p,chrome:b,edge:_,firefox:k,opera:A,win:x,mac:y,linux:v,touch:iz,ssr:E}}function cz(o,l){const{thresholds:d,mobileBreakpoint:h}=az(o),g=ve(P_(l)),p=lz(),b=Zt({}),_=ve(N_(l));function k(){g.value=P_(),_.value=N_()}return l&&An(()=>k()),Wo(()=>{const A=_.value<d.sm,x=_.value<d.md&&!A,y=_.value<d.lg&&!(x||A),v=_.value<d.xl&&!(y||x||A),E=_.value<d.xxl&&!(v||y||x||A),N=_.value>=d.xxl,F=A?"xs":x?"sm":y?"md":v?"lg":E?"xl":"xxl",j=typeof h=="number"?h:d[h],M=p.ssr?p.android||p.ios||p.opera:_.value<j;b.xs=A,b.sm=x,b.md=y,b.lg=v,b.xl=E,b.xxl=N,b.smAndUp=!A,b.mdAndUp=!(A||x),b.lgAndUp=!(A||x||y),b.xlAndUp=!(A||x||y||v),b.smAndDown=!(y||v||E||N),b.mdAndDown=!(v||E||N),b.lgAndDown=!(E||N),b.xlAndDown=!N,b.name=F,b.height=g.value,b.width=_.value,b.mobile=M,b.mobileBreakpoint=h,b.platform=p,b.thresholds=d}),Mt&&window.addEventListener("resize",k,{passive:!0}),_g(b)}function dz(){const o=Xe(Gh);if(!o)throw new Error("Could not find Vuetify display injection");return o}const uz={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},hz={component:o=>Io(ly,{...o,class:"mdi"})},vt=[String,Function,Object],Kh=Symbol.for("vuetify:icons"),Oc=qe({icon:{type:vt,required:!0},tag:{type:String,required:!0}},"icon"),gz=tt({name:"VComponentIcon",props:Oc(),setup(o){return()=>z(o.tag,null,{default:()=>[z(o.icon,null,null)]})}}),fz=tt({name:"VSvgIcon",inheritAttrs:!1,props:Oc(),setup(o,l){let{attrs:d}=l;return()=>z(o.tag,xt(d,{style:null}),{default:()=>[z("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[z("path",{d:o.icon},null)])]})}});tt({name:"VLigatureIcon",props:Oc(),setup(o){return()=>z(o.tag,null,{default:()=>[o.icon]})}});const ly=tt({name:"VClassIcon",props:Oc(),setup(o){return()=>z(o.tag,{class:o.icon},null)}}),mz={svg:{component:fz},class:{component:ly}};function pz(o){return Uo({defaultSet:"mdi",sets:{...mz,mdi:hz},aliases:uz},o)}const bz=o=>{const l=Xe(Kh);if(!l)throw new Error("Missing Vuetify Icons provide!");return{iconData:q(()=>{const h=kt(o)?o.value:o.icon;if(!h)throw new Error("Icon value is undefined or null");let g=h;if(typeof h=="string"&&h.includes("$")){var p;g=(p=l.aliases)==null?void 0:p[h.slice(h.indexOf("$")+1)]}if(!g)throw new Error(`Could not find aliased icon "${h}"`);if(typeof g!="string")return{component:gz,icon:g};const b=Object.keys(l.sets).find(A=>typeof g=="string"&&g.startsWith(`${A}:`)),_=b?g.slice(b.length+1):g;return{component:l.sets[b!=null?b:l.defaultSet].component,icon:_}})}},kz={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},wz={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Yg=Symbol.for("vuetify:rtl");function vz(o,l){var d;return _z({rtl:{...wz,...(d=l==null?void 0:l.rtl)!=null?d:{}},isRtl:ve(!1),rtlClasses:ve("")},o)}function _z(o,l,d){const h=q(()=>typeof(d==null?void 0:d.rtl)=="boolean"?d.rtl:l.current.value&&o.rtl.hasOwnProperty(l.current.value)?o.rtl[l.current.value]:o.isRtl.value);return{isRtl:h,rtl:o.rtl,rtlClasses:q(()=>`v-locale--is-${h.value?"rtl":"ltr"}`)}}function Rc(){const o=Xe(Yg);if(!o)throw new Error("[Vuetify] Could not find injected rtl instance");return o}const Yh=Symbol.for("vuetify:locale-adapter"),Wl=Symbol.for("vuetify:locale");function Cz(){const o=Xe(Yh);if(!o)throw new Error("[Vuetify] Could not find injected locale adapter");return o.getScope()}function Az(o){return!!o&&o.hasOwnProperty("getScope")&&o.hasOwnProperty("createScope")&&o.hasOwnProperty("createRoot")}function yz(o,l){const d=Az(l)?l:Sz(l),h=d.createRoot(o);return o==null||o.provide(Yg,vz(h,l)),d}const z_="$vuetify.",L_=(o,l)=>o.replace(/\{(\d+)\}/g,(d,h)=>String(l[+h])),xz=(o,l,d)=>function(h){for(var g=arguments.length,p=new Array(g>1?g-1:0),b=1;b<g;b++)p[b-1]=arguments[b];if(!h.startsWith(z_))return L_(h,p);const _=h.replace(z_,""),k=o.value&&d.value[o.value],A=l.value&&d.value[l.value];let x=Vh(k,_,null);return x||(Xr(`Translation key "${h}" not found in "${o.value}", trying fallback locale`),x=Vh(A,_,null)),x||(Wh(`Translation key "${h}" not found in fallback`),x=h),typeof x!="string"&&(Wh(`Translation key "${h}" has a non-string value`),x=h),L_(x,p)};function Ez(o,l){return(d,h)=>new Intl.NumberFormat([o.value,l.value],h).format(d)}function Sz(o){const l=d=>{const h=ve(d.current),g=ve(d.fallback),p=ve(d.messages);return{current:h,fallback:g,messages:p,t:xz(h,g,p),n:Ez(h,g)}};return{createRoot:d=>{var h,g,p;const b=l({current:(h=o==null?void 0:o.defaultLocale)!=null?h:"en",fallback:(g=o==null?void 0:o.fallbackLocale)!=null?g:"en",messages:(p=o==null?void 0:o.messages)!=null?p:{en:kz}});if(!d)throw new Error("[Vuetify] Could not find default app instance");return d.provide(Wl,b),b},getScope:()=>{const d=Xe(Wl);if(!d)throw new Error("[Vuetify] Could not find injected locale instance");return d},createScope:d=>{const h=Xe(Wl);if(!h)throw new Error("[Vuetify] Could not find injected locale instance");const g=l({current:q(()=>{var p;return(p=d==null?void 0:d.locale)!=null?p:h.current.value}),fallback:q(()=>{var p;return(p=d==null?void 0:d.locale)!=null?p:h.fallback.value}),messages:q(()=>{var p;return(p=d==null?void 0:d.messages)!=null?p:h.messages.value})});return Ht(Wl,g),g}}}const Fr=2.4,O_=.2126729,R_=.7151522,F_=.072175,Dz=.55,Iz=.58,Tz=.57,Mz=.62,ql=.03,j_=1.45,Bz=5e-4,Nz=1.25,Pz=1.25,V_=.078,H_=12.82051282051282,Gl=.06,U_=.001;function $_(o,l){const d=((o>>16&255)/255)**Fr,h=((o>>8&255)/255)**Fr,g=((o>>0&255)/255)**Fr,p=((l>>16&255)/255)**Fr,b=((l>>8&255)/255)**Fr,_=((l>>0&255)/255)**Fr;let k=d*O_+h*R_+g*F_,A=p*O_+b*R_+_*F_;if(k<=ql&&(k+=(ql-k)**j_),A<=ql&&(A+=(ql-A)**j_),Math.abs(A-k)<Bz)return 0;let x;if(A>k){const y=(A**Dz-k**Iz)*Nz;x=y<U_?0:y<V_?y-y*H_*Gl:y-Gl}else{const y=(A**Mz-k**Tz)*Pz;x=y>-U_?0:y>-V_?y-y*H_*Gl:y+Gl}return x*100}const _a=Symbol.for("vuetify:theme"),ln=qe({theme:String},"theme"),Qs={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function zz(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qs;if(!o)return{...Qs,isDisabled:!0};const l={};for(const[p,b]of Object.entries((d=o.themes)!=null?d:{})){var d,h,g;const _=b.dark?(h=Qs.themes)==null?void 0:h.dark:(g=Qs.themes)==null?void 0:g.light;l[p]=Uo(_,b)}return Uo(Qs,{...o,themes:l})}function Lz(o,l){const d=o._context.provides.usehead,h=Zt(zz(l)),g=ve(h.defaultTheme),p=ve(h.themes),b=q(()=>{const y={};for(const[v,E]of Object.entries(p.value)){const N=y[v]={...E,colors:{...E.colors}};if(h.variations)for(const F of h.variations.colors){const j=N.colors[F];for(const M of["lighten","darken"]){const T=M==="lighten"?QP:ZP;for(const R of LP(h.variations[M],1))N.colors[`${F}-${M}-${R}`]=YP(T(uc(j),R))}}for(const F of Object.keys(N.colors)){if(/on-[a-z]/.test(F)||N.colors[`on-${F}`])continue;const j=`on-${F}`,M=uc(N.colors[F]),T=Math.abs($_(0,M)),R=Math.abs($_(16777215,M));N.colors[j]=R>Math.min(T,50)?"#fff":"#000"}}return y}),_=q(()=>b.value[g.value]),k=q(()=>{const y=[];_.value.dark&&jr(y,":root",["color-scheme: dark"]);for(const[E,N]of Object.entries(b.value)){const{variables:F,dark:j}=N;jr(y,`.v-theme--${E}`,[`color-scheme: ${j?"dark":"normal"}`,...Rz(N),...Object.keys(F).map(M=>{const T=F[M],R=typeof T=="string"&&T.startsWith("#")?oy(T):void 0,G=R?`${R.r}, ${R.g}, ${R.b}`:void 0;return`--v-${M}: ${G!=null?G:T}`})])}const v=new Set(Object.values(b.value).flatMap(E=>Object.keys(E.colors)));for(const E of v)/on-[a-z]/.test(E)?jr(y,`.${E}`,[`color: rgb(var(--v-theme-${E})) !important`]):(jr(y,`.bg-${E}`,[`--v-theme-overlay-multiplier: var(--v-theme-${E}-overlay-multiplier)`,`background: rgb(var(--v-theme-${E})) !important`,`color: rgb(var(--v-theme-on-${E})) !important`]),jr(y,`.text-${E}`,[`color: rgb(var(--v-theme-${E})) !important`]),jr(y,`.border-${E}`,[`--v-border-color: var(--v-theme-${E})`]));return y.map((E,N)=>N===0?E:`    ${E}`).join("")});if(d)d.addHeadObjs(q(()=>{const y={children:k.value,type:"text/css",id:"vuetify-theme-stylesheet"};return h.cspNonce&&(y.nonce=h.cspNonce),{style:[y]}})),Mt&&Wo(()=>d.updateDOM());else{let v=function(){if(!h.isDisabled){if(typeof document<"u"&&!y){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",h.cspNonce&&E.setAttribute("nonce",h.cspNonce),y=E,document.head.appendChild(y)}y&&(y.innerHTML=k.value)}};var x=v;let y=Mt?document.getElementById("vuetify-theme-stylesheet"):null;et(k,v,{immediate:!0})}const A=q(()=>h.isDisabled?void 0:`v-theme--${g.value}`);return{isDisabled:h.isDisabled,name:g,themes:p,current:_,computedThemes:b,themeClasses:A,styles:k,global:{name:g,current:_}}}function yn(o){an("provideTheme");const l=Xe(_a,null);if(!l)throw new Error("Could not find Vuetify theme injection");const d=q(()=>{var p;return(p=o.theme)!=null?p:l==null?void 0:l.name.value}),h=q(()=>l.isDisabled?void 0:`v-theme--${d.value}`),g={...l,name:d,themeClasses:h};return Ht(_a,g),g}function Oz(){an("useTheme");const o=Xe(_a,null);if(!o)throw new Error("Could not find Vuetify theme injection");return o}function jr(o,l,d){o.push(`${l} {
`,...d.map(h=>`  ${h};
`),`}
`)}function Rz(o){const l=o.dark?2:1,d=o.dark?1:2,h=[];for(const[g,p]of Object.entries(o.colors)){const b=oy(p);h.push(`--v-theme-${g}: ${b.r},${b.g},${b.b}`),g.startsWith("on-")||h.push(`--v-theme-${g}-overlay-multiplier: ${JP(p)>.18?l:d}`)}return h}function cy(o){const l=ve(),d=ve();if(Mt){const h=new ResizeObserver(g=>{o==null||o(g,h),g.length&&(d.value=g[0].contentRect)});Vn(()=>{h.disconnect()}),et(l,(g,p)=>{p&&(h.unobserve(p),d.value=void 0),g&&h.observe(g)},{flush:"post"})}return{resizeRef:l,contentRect:us(d)}}const fc=Symbol.for("vuetify:layout"),dy=Symbol.for("vuetify:layout-item"),hh=1e3,Fz=qe({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),jz=qe({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Vz(){const o=Xe(fc);if(!o)throw new Error("Could not find injected Vuetify layout");return o}function Hz(o){var l;const d=Xe(fc);if(!d)throw new Error("Could not find injected Vuetify layout");const h=(l=o.id)!=null?l:`layout-item-${ho()}`,g=an("useLayoutItem");Ht(dy,{id:h});const p=ve(!1);Mg(()=>p.value=!0),Tg(()=>p.value=!1);const{layoutItemStyles:b,layoutItemScrimStyles:_}=d.register(g,{...o,active:q(()=>p.value?!1:o.active.value),id:h});return Vn(()=>d.unregister(h)),{layoutItemStyles:b,layoutRect:d.layoutRect,layoutItemScrimStyles:_}}const Uz=(o,l,d,h)=>{let g={top:0,left:0,right:0,bottom:0};const p=[{id:"",layer:{...g}}];for(const b of o){const _=l.get(b),k=d.get(b),A=h.get(b);if(!_||!k||!A)continue;const x={...g,[_.value]:parseInt(g[_.value],10)+(A.value?parseInt(k.value,10):0)};p.push({id:b,layer:x}),g=x}return p};function $z(o){const l=Xe(fc,null),d=q(()=>l?l.rootZIndex.value-100:hh),h=ve([]),g=Zt(new Map),p=Zt(new Map),b=Zt(new Map),_=Zt(new Map),k=Zt(new Map),{resizeRef:A,contentRect:x}=cy(),y=q(()=>{var U;const Z=new Map,L=(U=o.overlaps)!=null?U:[];for(const V of L.filter(W=>W.includes(":"))){const[W,Y]=V.split(":");if(!h.value.includes(W)||!h.value.includes(Y))continue;const Q=g.get(W),X=g.get(Y),se=p.get(W),ae=p.get(Y);!Q||!X||!se||!ae||(Z.set(Y,{position:Q.value,amount:parseInt(se.value,10)}),Z.set(W,{position:X.value,amount:-parseInt(ae.value,10)}))}return Z}),v=q(()=>{const U=[...new Set([...b.values()].map(L=>L.value))].sort((L,V)=>L-V),Z=[];for(const L of U){const V=h.value.filter(W=>{var Y;return((Y=b.get(W))==null?void 0:Y.value)===L});Z.push(...V)}return Uz(Z,g,p,_)}),E=q(()=>!Array.from(k.values()).some(U=>U.value)),N=q(()=>{const U=v.value[v.value.length-1].layer;return{position:"relative",paddingLeft:Re(U.left),paddingRight:Re(U.right),paddingTop:Re(U.top),paddingBottom:Re(U.bottom),...E.value?void 0:{transition:"none"}}}),F=q(()=>v.value.slice(1).map((U,Z)=>{let{id:L}=U;const{layer:V}=v.value[Z],W=p.get(L);return{id:L,...V,size:Number(W.value)}})),j=U=>F.value.find(Z=>Z.id===U),M=an("createLayout"),T=ve(!1);uo(()=>{T.value=!0}),Ht(fc,{register:(U,Z)=>{let{id:L,order:V,position:W,layoutSize:Y,elementSize:Q,active:X,disableTransitions:se,absolute:ae}=Z;b.set(L,V),g.set(L,W),p.set(L,Y),_.set(L,X),se&&k.set(L,se);const ke=da(dy,M==null?void 0:M.vnode).indexOf(U);ke>-1?h.value.splice(ke,0,L):h.value.push(L);const Ae=q(()=>F.value.findIndex(St=>St.id===L)),Ie=q(()=>d.value+v.value.length*2-Ae.value*2),Ke=q(()=>{const St=W.value==="left"||W.value==="right",Ne=W.value==="right",_t=W.value==="bottom",Jt={[W.value]:0,zIndex:Ie.value,transform:`translate${St?"X":"Y"}(${(X.value?0:-110)*(Ne||_t?-1:1)}%)`,position:ae.value||d.value!==hh?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!T.value)return Jt;if(Ae.value<0)throw new Error(`Layout item "${L}" is missing`);const H=F.value[Ae.value];if(!H)throw new Error(`Could not find layout item "${L}`);const ce=y.value.get(L);return ce&&(H[ce.position]+=ce.amount),{...Jt,height:St?`calc(100% - ${H.top}px - ${H.bottom}px)`:Q.value?`${Q.value}px`:void 0,marginLeft:Ne?void 0:`${H.left}px`,marginRight:Ne?`${H.right}px`:void 0,marginTop:W.value!=="bottom"?`${H.top}px`:void 0,marginBottom:W.value!=="top"?`${H.bottom}px`:void 0,width:St?Q.value?`${Q.value}px`:void 0:`calc(100% - ${H.left}px - ${H.right}px)`}}),Rt=q(()=>({zIndex:Ie.value-1,position:d.value===hh?"fixed":"absolute"}));return{layoutItemStyles:Ke,layoutItemScrimStyles:Rt,zIndex:Ie}},unregister:U=>{b.delete(U),g.delete(U),p.delete(U),_.delete(U),k.delete(U),h.value=h.value.filter(Z=>Z!==U)},mainStyles:N,getLayoutItem:j,items:F,layoutRect:x,rootZIndex:d});const R=q(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),G=q(()=>({zIndex:d.value}));return{layoutClasses:R,layoutStyles:G,getLayoutItem:j,items:F,layoutRect:x,layoutRef:A}}const Wz=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:d=>{const{blueprint:h,...g}=o,p=Uo(h,g),{aliases:b={},components:_={},directives:k={}}=p;for(const v in k)d.directive(v,k[v]);for(const v in _)d.component(v,_[v]);for(const v in b)d.component(v,tt({...b[v],name:v}));function A(v){d.provide(va,sz(p.defaults)),d.provide(Gh,cz(p.display,v)),d.provide(_a,Lz(d,p.theme)),d.provide(Kh,pz(p.icons)),d.provide(Yh,yz(d,p.locale))}Mt||A(),ho.reset();const x=d.mount;d.mount=(v,E,N)=>{A(E);const F=x(v,E,N);return d.mount=x,F};function y(v){var E,N,F;const j=this.$,M=(E=(N=j.parent)==null?void 0:N.provides)!=null?E:(F=j.vnode.appContext)==null?void 0:F.provides;if(M&&v in M)return M[v]}d.mixin({computed:{$vuetify(){return Zt({defaults:y.call(this,va),display:y.call(this,Gh),theme:y.call(this,_a),icons:y.call(this,Kh),locale:y.call(this,Yh),rtl:y.call(this,Yg)})}}})}}};const qz=["x-small","small","default","large","x-large"],Pa=qe({size:{type:[String,Number],default:"default"}},"size");function za(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return $g(()=>{let d,h;return cc(qz,o.size)?d=`${l}--size-${o.size}`:o.size&&(h={width:Re(o.size),height:Re(o.size)}),{sizeClasses:d,sizeStyles:h}})}const xn=qe({tag:{type:String,default:"div"}},"tag");function Qg(o){return $g(()=>{const l=[],d={};return o.value.background&&(M_(o.value.background)?d.backgroundColor=o.value.background:l.push(`bg-${o.value.background}`)),o.value.text&&(M_(o.value.text)?(d.color=o.value.text,d.caretColor=o.value.text):l.push(`text-${o.value.text}`)),{colorClasses:l,colorStyles:d}})}function vi(o,l){const d=q(()=>({text:kt(o)?o.value:l?o[l]:null})),{colorClasses:h,colorStyles:g}=Qg(d);return{textColorClasses:h,textColorStyles:g}}function $o(o,l){const d=q(()=>({background:kt(o)?o.value:l?o[l]:null})),{colorClasses:h,colorStyles:g}=Qg(d);return{backgroundColorClasses:h,backgroundColorStyles:g}}const Gz=qe({color:String,start:Boolean,end:Boolean,icon:vt,...Pa(),...xn({tag:"i"}),...ln()},"v-icon"),it=tt({name:"VIcon",props:Gz(),setup(o,l){let{attrs:d,slots:h}=l,g;h.default&&(g=q(()=>{var x,y;const v=(x=h.default)==null?void 0:x.call(h);if(!!v)return(y=ZA(v).filter(E=>E.children&&typeof E.children=="string")[0])==null?void 0:y.children}));const{themeClasses:p}=yn(o),{iconData:b}=bz(g||o),{sizeClasses:_}=za(o),{textColorClasses:k,textColorStyles:A}=vi(Fe(o,"color"));return rt(()=>z(b.value.component,{tag:o.tag,icon:b.value.icon,class:["v-icon","notranslate",p.value,_.value,k.value,{"v-icon--clickable":!!d.onClick,"v-icon--start":o.start,"v-icon--end":o.end}],style:[_.value?void 0:{fontSize:Re(o.size),height:Re(o.size),width:Re(o.size)},A.value],"aria-hidden":"true"},null)),{}}});const La=qe({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Oa(o){return{dimensionStyles:q(()=>({height:Re(o.height),maxHeight:Re(o.maxHeight),maxWidth:Re(o.maxWidth),minHeight:Re(o.minHeight),minWidth:Re(o.minWidth),width:Re(o.width)}))}}function Kz(o){return{aspectStyles:q(()=>{const l=Number(o.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Yz=tt({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...La()},setup(o,l){let{slots:d}=l;const{aspectStyles:h}=Kz(o),{dimensionStyles:g}=Oa(o);return rt(()=>{var p;return z("div",{class:"v-responsive",style:g.value},[z("div",{class:"v-responsive__sizer",style:h.value},null),(p=d.additional)==null?void 0:p.call(d),d.default&&z("div",{class:["v-responsive__content",o.contentClass]},[d.default()])])}),{}}});function Qz(o,l){if(!Kg)return;const d=l.modifiers||{},h=l.value,{handler:g,options:p}=typeof h=="object"?h:{handler:h,options:{}},b=new IntersectionObserver(function(){var _;let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],A=arguments.length>1?arguments[1]:void 0;const x=(_=o._observe)==null?void 0:_[l.instance.$.uid];if(!x)return;const y=k.some(v=>v.isIntersecting);g&&(!d.quiet||x.init)&&(!d.once||y||x.init)&&g(y,k,A),y&&d.once?uy(o,l):x.init=!0},p);o._observe=Object(o._observe),o._observe[l.instance.$.uid]={init:!1,observer:b},b.observe(o)}function uy(o,l){var d;const h=(d=o._observe)==null?void 0:d[l.instance.$.uid];!h||(h.observer.unobserve(o),delete o._observe[l.instance.$.uid])}const Zz={mounted:Qz,unmounted:uy},hy=Zz,gs=qe({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:o=>o!==!0}},"transition"),Xi=(o,l)=>{var d;let{slots:h}=l;const{transition:g,...p}=o;if(!g||typeof g=="boolean")return(d=h.default)==null?void 0:d.call(h);const{component:b=co,..._}=typeof g=="object"?g:{};return Io(b,xt(typeof g=="string"?{name:g}:_,p),h)},Jz=tt({name:"VImg",directives:{intersect:hy},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...gs()},emits:["loadstart","load","error"],setup(o,l){let{emit:d,slots:h}=l;const g=ve(""),p=ve(),b=ve(o.eager?"loading":"idle"),_=ve(),k=ve(),A=q(()=>o.src&&typeof o.src=="object"?{src:o.src.src,srcset:o.srcset||o.src.srcset,lazySrc:o.lazySrc||o.src.lazySrc,aspect:Number(o.aspectRatio||o.src.aspect)}:{src:o.src,srcset:o.srcset,lazySrc:o.lazySrc,aspect:Number(o.aspectRatio||0)}),x=q(()=>A.value.aspect||_.value/k.value||0);et(()=>o.src,()=>{y(b.value!=="idle")}),Ba(()=>y());function y(L){if(!(o.eager&&L)&&!(Kg&&!L&&!o.eager)){if(b.value="loading",A.value.lazySrc){const V=new Image;V.src=A.value.lazySrc,F(V,null)}!A.value.src||An(()=>{var V,W;if(d("loadstart",((V=p.value)==null?void 0:V.currentSrc)||A.value.src),(W=p.value)!=null&&W.complete){if(p.value.naturalWidth||E(),b.value==="error")return;x.value||F(p.value,null),v()}else x.value||F(p.value),N()})}}function v(){var L;N(),b.value="loaded",d("load",((L=p.value)==null?void 0:L.currentSrc)||A.value.src)}function E(){var L;b.value="error",d("error",((L=p.value)==null?void 0:L.currentSrc)||A.value.src)}function N(){const L=p.value;L&&(g.value=L.currentSrc||L.src)}function F(L){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const W=()=>{const{naturalHeight:Y,naturalWidth:Q}=L;Y||Q?(_.value=Q,k.value=Y):!L.complete&&b.value==="loading"&&V!=null?setTimeout(W,V):(L.currentSrc.endsWith(".svg")||L.currentSrc.startsWith("data:image/svg+xml"))&&(_.value=1,k.value=1)};W()}const j=q(()=>({"v-img__img--cover":o.cover,"v-img__img--contain":!o.cover})),M=q(()=>{var L;if(!A.value.src||b.value==="idle")return;const V=Io("img",{class:["v-img__img",j.value],src:A.value.src,srcset:A.value.srcset,alt:"",sizes:o.sizes,ref:p,onLoad:v,onError:E}),W=(L=h.sources)==null?void 0:L.call(h);return z(Xi,{transition:o.transition,appear:!0},{default:()=>[jn(W?z("picture",{class:"v-img__picture"},[W,V]):V,[[Ai,b.value==="loaded"]])]})}),T=q(()=>z(Xi,{transition:o.transition},{default:()=>[A.value.lazySrc&&b.value!=="loaded"&&z("img",{class:["v-img__img","v-img__img--preload",j.value],src:A.value.lazySrc,alt:""},null)]})),R=q(()=>{if(!!h.placeholder)return z(Xi,{transition:o.transition,appear:!0},{default:()=>[(b.value==="loading"||b.value==="error"&&!h.error)&&z("div",{class:"v-img__placeholder"},[h.placeholder()])]})}),G=q(()=>{if(!!h.error)return z(Xi,{transition:o.transition,appear:!0},{default:()=>[b.value==="error"&&z("div",{class:"v-img__error"},[h.error()])]})}),U=q(()=>{if(!!o.gradient)return z("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${o.gradient})`}},null)}),Z=ve(!1);{const L=et(x,V=>{V&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Z.value=!0})}),L())})}return rt(()=>jn(z(Yz,{class:["v-img",{"v-img--booting":!Z.value}],style:{width:Re(o.width==="auto"?_.value:o.width)},aspectRatio:x.value,"aria-label":o.alt,role:o.alt?"img":void 0},{additional:()=>[M.value,T.value,U.value,R.value,G.value],default:h.default}),[[Ci("intersect"),{handler:y,options:o.options},null,{once:!0}]])),{currentSrc:g,image:p,state:b,naturalWidth:_,naturalHeight:k}}}),Xz=[null,"default","comfortable","compact"],yi=qe({density:{type:String,default:"default",validator:o=>Xz.includes(o)}},"density");function xi(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return{densityClasses:q(()=>`${l}--density-${o.density}`)}}const Ei=qe({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Si(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return{roundedClasses:q(()=>{const h=kt(o)?o.value:o.rounded,g=[];if(h===!0||h==="")g.push(`${l}--rounded`);else if(typeof h=="string"||h===0)for(const p of String(h).split(" "))g.push(`rounded-${p}`);return g})}}const e3=qe({color:String,start:Boolean,end:Boolean,icon:vt,image:String,...yi(),...Ei(),...Pa(),...xn()}),Ca=tt({name:"VAvatar",props:e3(),setup(o,l){let{slots:d}=l;const{backgroundColorClasses:h,backgroundColorStyles:g}=$o(Fe(o,"color")),{densityClasses:p}=xi(o),{roundedClasses:b}=Si(o),{sizeClasses:_,sizeStyles:k}=za(o);return rt(()=>{var A;return z(o.tag,{class:["v-avatar",{"v-avatar--start":o.start,"v-avatar--end":o.end},h.value,p.value,b.value,_.value],style:[g.value,k.value]},{default:()=>[o.image?z(Jz,{src:o.image,alt:""},null):o.icon?z(it,{icon:o.icon},null):(A=d.default)==null?void 0:A.call(d)]})}),{}}});const fs=qe({border:[Boolean,Number,String]},"border");function ms(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return{borderClasses:q(()=>{const h=kt(o)?o.value:o.border,g=[];if(h===!0||h==="")g.push(`${l}--border`);else if(typeof h=="string"||h===0)for(const p of String(h).split(" "))g.push(`border-${p}`);return g})}}const ps=qe({elevation:{type:[Number,String],validator(o){const l=parseInt(o);return!isNaN(l)&&l>=0&&l<=24}}},"elevation");function bs(o){return{elevationClasses:q(()=>{const d=kt(o)?o.value:o.elevation,h=[];return d==null||h.push(`elevation-${d}`),h})}}const t3=["elevated","flat","tonal","outlined","text","plain"];function Zg(o,l){return z($e,null,[o&&z("span",{key:"overlay",class:`${l}__overlay`},null),z("span",{key:"underlay",class:`${l}__underlay`},null)])}const ks=qe({color:String,variant:{type:String,default:"elevated",validator:o=>t3.includes(o)}},"variant");function Jg(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();const d=q(()=>{const{variant:p}=nn(o);return`${l}--variant-${p}`}),{colorClasses:h,colorStyles:g}=Qg(q(()=>{const{variant:p,color:b}=nn(o);return{[["elevated","flat"].includes(p)?"background":"text"]:b}}));return{colorClasses:h,colorStyles:g,variantClasses:d}}const n3=tt({name:"VBtnGroup",props:{divided:Boolean,...fs(),...yi(),...ps(),...Ei(),...xn(),...ln(),...ks()},setup(o,l){let{slots:d}=l;const{themeClasses:h}=yn(o),{densityClasses:g}=xi(o),{borderClasses:p}=ms(o),{elevationClasses:b}=bs(o),{roundedClasses:_}=Si(o);Na({VBtn:{height:"auto",color:Fe(o,"color"),density:Fe(o,"density"),flat:!0,variant:Fe(o,"variant")}}),rt(()=>z(o.tag,{class:["v-btn-group",{"v-btn-group--divided":o.divided},h.value,p.value,g.value,b.value,_.value]},d))}});function sn(o,l,d){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:k=>k,g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:k=>k;const p=an("useProxiedModel"),b=q(()=>{var k,A;return o[l],!!(p!=null&&(k=p.vnode.props)!=null&&k.hasOwnProperty(l)||p!=null&&(A=p.vnode.props)!=null&&A.hasOwnProperty(Ug(l)))}),_=ve(h(o[l]));return q({get(){return b.value?h(o[l]):_.value},set(k){(b.value?h(o[l]):_.value)!==k&&(_.value=k,p==null||p.emit(`update:${l}`,g(k)))}})}const gy=qe({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),fy=qe({value:null,disabled:Boolean,selectedClass:String},"group-item");function my(o,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=an("useGroupItem");if(!h)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const g=ho();Ht(Symbol.for(`${l.description}:id`),g);const p=Xe(l,null);if(!p){if(!d)return p;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`)}const b=Fe(o,"value"),_=q(()=>p.disabled.value||o.disabled);p.register({id:g,value:b,disabled:_},h),Vn(()=>{p.unregister(g)});const k=q(()=>p.isSelected(g)),A=q(()=>k.value&&[p.selectedClass.value,o.selectedClass]);return et(k,x=>{h.emit("group:selected",{value:x})}),{id:g,isSelected:k,toggle:()=>p.select(g,!k.value),select:x=>p.select(g,x),selectedClass:A,value:b,disabled:_,group:p}}function py(o,l){let d=!1;const h=Zt([]),g=sn(o,"modelValue",[],v=>v==null?[]:by(h,gi(v)),v=>{const E=i3(h,v);return o.multiple?E:E[0]}),p=an("useGroup");function b(v,E){const N=v,F=Symbol.for(`${l.description}:id`),M=da(F,p==null?void 0:p.vnode).indexOf(E);M>-1?h.splice(M,0,N):h.push(N)}function _(v){if(d)return;k();const E=h.findIndex(N=>N.id===v);h.splice(E,1)}function k(){const v=h.find(E=>!E.disabled);v&&o.mandatory==="force"&&!g.value.length&&(g.value=[v.id])}uo(()=>{k()}),Vn(()=>{d=!0});function A(v,E){const N=h.find(M=>M.id===v);if(!(E&&N!=null&&N.disabled))if(o.multiple){var F;const M=g.value.slice(),T=M.findIndex(G=>G===v),R=~T;if(E=(F=E)!=null?F:!R,R&&o.mandatory&&M.length<=1||!R&&o.max!=null&&M.length+1>o.max)return;T<0&&E?M.push(v):T>=0&&!E&&M.splice(T,1),g.value=M}else{var j;const M=g.value.includes(v);if(o.mandatory&&M)return;g.value=((j=E)!=null?j:!M)?[v]:[]}}function x(v){if(o.multiple&&Xr('This method is not supported when using "multiple" prop'),g.value.length){const E=g.value[0],N=h.findIndex(M=>M.id===E);let F=(N+v)%h.length,j=h[F];for(;j.disabled&&F!==N;)F=(F+v)%h.length,j=h[F];if(j.disabled)return;g.value=[h[F].id]}else{const E=h.find(N=>!N.disabled);E&&(g.value=[E.id])}}const y={register:b,unregister:_,selected:g,select:A,disabled:Fe(o,"disabled"),prev:()=>x(h.length-1),next:()=>x(1),isSelected:v=>g.value.includes(v),selectedClass:q(()=>o.selectedClass),items:q(()=>h),getItemIndex:v=>o3(h,v)};return Ht(l,y),y}function o3(o,l){const d=by(o,[l]);return d.length?o.findIndex(h=>h.id===d[0]):-1}function by(o,l){const d=[];for(let h=0;h<o.length;h++){const g=o[h];g.value!=null?l.find(p=>Lc(p,g.value))!=null&&d.push(g.id):l.includes(h)&&d.push(g.id)}return d}function i3(o,l){const d=[];for(let h=0;h<o.length;h++){const g=o[h];l.includes(g.id)&&d.push(g.value!=null?g.value:h)}return d}const ky=Symbol.for("vuetify:v-btn-toggle");Jn()({name:"VBtnToggle",props:gy({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":o=>!0},setup(o,l){let{slots:d}=l;const{isSelected:h,next:g,prev:p,select:b,selected:_}=py(o,ky);return rt(()=>{var k;return z(n3,{class:"v-btn-toggle"},{default:()=>[(k=d.default)==null?void 0:k.call(d,{isSelected:h,next:g,prev:p,select:b,selected:_})]})}),{next:g,prev:p,select:b}}});const so=dr({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(o,l){let{slots:d}=l;const{defaults:h,reset:g,root:p,scoped:b}=_g(o);return Na(h,{reset:g,root:p,scoped:b}),()=>{var _;return(_=d.default)==null?void 0:_.call(d)}}});function wy(o){const l=ve(),d=ve(!1);if(Kg){const h=new IntersectionObserver(g=>{o==null||o(g,h),d.value=!!g.find(p=>p.isIntersecting)});Vn(()=>{h.disconnect()}),et(l,(g,p)=>{p&&(h.unobserve(p),d.value=!1),g&&h.observe(g)},{flush:"post"})}return{intersectionRef:l,isIntersecting:d}}const r3=tt({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Pa(),...xn({tag:"div"}),...ln()},setup(o,l){let{slots:d}=l;const h=20,g=2*Math.PI*h,p=ve(),{themeClasses:b}=yn(o),{sizeClasses:_,sizeStyles:k}=za(o),{textColorClasses:A,textColorStyles:x}=vi(Fe(o,"color")),{textColorClasses:y,textColorStyles:v}=vi(Fe(o,"bgColor")),{intersectionRef:E,isIntersecting:N}=wy(),{resizeRef:F,contentRect:j}=cy(),M=q(()=>Math.max(0,Math.min(100,parseFloat(o.modelValue)))),T=q(()=>Number(o.width)),R=q(()=>k.value?Number(o.size):j.value?j.value.width:Math.max(T.value,32)),G=q(()=>h/(1-T.value/R.value)*2),U=q(()=>T.value/R.value*G.value),Z=q(()=>Re((100-M.value)/100*g));return Wo(()=>{E.value=p.value,F.value=p.value}),rt(()=>z(o.tag,{ref:p,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!o.indeterminate,"v-progress-circular--visible":N.value,"v-progress-circular--disable-shrink":o.indeterminate==="disable-shrink"},b.value,_.value,A.value],style:[k.value,x.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":o.indeterminate?void 0:M.value},{default:()=>[z("svg",{style:{transform:`rotate(calc(-90deg + ${Number(o.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${G.value} ${G.value}`},[z("circle",{class:["v-progress-circular__underlay",y.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:h,"stroke-width":U.value,"stroke-dasharray":g,"stroke-dashoffset":0},null),z("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:h,"stroke-width":U.value,"stroke-dasharray":g,"stroke-dashoffset":Z.value},null)]),d.default&&z("div",{class:"v-progress-circular__content"},[d.default({value:M.value})])]})),{}}});const Qh=Symbol("rippleStop"),s3=80;function W_(o,l){o.style.transform=l,o.style.webkitTransform=l}function gh(o,l){o.style.opacity=`calc(${l} * var(--v-theme-overlay-multiplier))`}function Zh(o){return o.constructor.name==="TouchEvent"}function vy(o){return o.constructor.name==="KeyboardEvent"}const a3=function(o,l){var d;let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=0,p=0;if(!vy(o)){const v=l.getBoundingClientRect(),E=Zh(o)?o.touches[o.touches.length-1]:o;g=E.clientX-v.left,p=E.clientY-v.top}let b=0,_=.3;(d=l._ripple)!=null&&d.circle?(_=.15,b=l.clientWidth/2,b=h.center?b:b+Math.sqrt((g-b)**2+(p-b)**2)/4):b=Math.sqrt(l.clientWidth**2+l.clientHeight**2)/2;const k=`${(l.clientWidth-b*2)/2}px`,A=`${(l.clientHeight-b*2)/2}px`,x=h.center?k:`${g-b}px`,y=h.center?A:`${p-b}px`;return{radius:b,scale:_,x,y,centerX:k,centerY:A}},mc={show(o,l){var d;let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(l!=null&&(d=l._ripple)!=null&&d.enabled))return;const g=document.createElement("span"),p=document.createElement("span");g.appendChild(p),g.className="v-ripple__container",h.class&&(g.className+=` ${h.class}`);const{radius:b,scale:_,x:k,y:A,centerX:x,centerY:y}=a3(o,l,h),v=`${b*2}px`;p.className="v-ripple__animation",p.style.width=v,p.style.height=v,l.appendChild(g);const E=window.getComputedStyle(l);E&&E.position==="static"&&(l.style.position="relative",l.dataset.previousPosition="static"),p.classList.add("v-ripple__animation--enter"),p.classList.add("v-ripple__animation--visible"),W_(p,`translate(${k}, ${A}) scale3d(${_},${_},${_})`),gh(p,0),p.dataset.activated=String(performance.now()),setTimeout(()=>{p.classList.remove("v-ripple__animation--enter"),p.classList.add("v-ripple__animation--in"),W_(p,`translate(${x}, ${y}) scale3d(1,1,1)`),gh(p,.08)},0)},hide(o){var l;if(!(o!=null&&(l=o._ripple)!=null&&l.enabled))return;const d=o.getElementsByClassName("v-ripple__animation");if(d.length===0)return;const h=d[d.length-1];if(h.dataset.isHiding)return;h.dataset.isHiding="true";const g=performance.now()-Number(h.dataset.activated),p=Math.max(250-g,0);setTimeout(()=>{h.classList.remove("v-ripple__animation--in"),h.classList.add("v-ripple__animation--out"),gh(h,0),setTimeout(()=>{o.getElementsByClassName("v-ripple__animation").length===1&&o.dataset.previousPosition&&(o.style.position=o.dataset.previousPosition,delete o.dataset.previousPosition),h.parentNode&&o.removeChild(h.parentNode)},300)},p)}};function _y(o){return typeof o>"u"||!!o}function Aa(o){const l={},d=o.currentTarget;if(!(!(d!=null&&d._ripple)||d._ripple.touched||o[Qh])){if(o[Qh]=!0,Zh(o))d._ripple.touched=!0,d._ripple.isTouch=!0;else if(d._ripple.isTouch)return;if(l.center=d._ripple.centered||vy(o),d._ripple.class&&(l.class=d._ripple.class),Zh(o)){if(d._ripple.showTimerCommit)return;d._ripple.showTimerCommit=()=>{mc.show(o,d,l)},d._ripple.showTimer=window.setTimeout(()=>{var h;d!=null&&(h=d._ripple)!=null&&h.showTimerCommit&&(d._ripple.showTimerCommit(),d._ripple.showTimerCommit=null)},s3)}else mc.show(o,d,l)}}function q_(o){o[Qh]=!0}function Ln(o){const l=o.currentTarget;if(!(!l||!l._ripple)){if(window.clearTimeout(l._ripple.showTimer),o.type==="touchend"&&l._ripple.showTimerCommit){l._ripple.showTimerCommit(),l._ripple.showTimerCommit=null,l._ripple.showTimer=window.setTimeout(()=>{Ln(o)});return}window.setTimeout(()=>{l._ripple&&(l._ripple.touched=!1)}),mc.hide(l)}}function Cy(o){const l=o.currentTarget;!l||!l._ripple||(l._ripple.showTimerCommit&&(l._ripple.showTimerCommit=null),window.clearTimeout(l._ripple.showTimer))}let ya=!1;function Ay(o){!ya&&(o.keyCode===E_.enter||o.keyCode===E_.space)&&(ya=!0,Aa(o))}function yy(o){ya=!1,Ln(o)}function xy(o){ya&&(ya=!1,Ln(o))}function Ey(o,l,d){var h;const{value:g,modifiers:p}=l,b=_y(g);if(b||mc.hide(o),o._ripple=(h=o._ripple)!=null?h:{},o._ripple.enabled=b,o._ripple.centered=p.center,o._ripple.circle=p.circle,Hh(g)&&g.class&&(o._ripple.class=g.class),b&&!d){if(p.stop){o.addEventListener("touchstart",q_,{passive:!0}),o.addEventListener("mousedown",q_);return}o.addEventListener("touchstart",Aa,{passive:!0}),o.addEventListener("touchend",Ln,{passive:!0}),o.addEventListener("touchmove",Cy,{passive:!0}),o.addEventListener("touchcancel",Ln),o.addEventListener("mousedown",Aa),o.addEventListener("mouseup",Ln),o.addEventListener("mouseleave",Ln),o.addEventListener("keydown",Ay),o.addEventListener("keyup",yy),o.addEventListener("blur",xy),o.addEventListener("dragstart",Ln,{passive:!0})}else!b&&d&&Sy(o)}function Sy(o){o.removeEventListener("mousedown",Aa),o.removeEventListener("touchstart",Aa),o.removeEventListener("touchend",Ln),o.removeEventListener("touchmove",Cy),o.removeEventListener("touchcancel",Ln),o.removeEventListener("mouseup",Ln),o.removeEventListener("mouseleave",Ln),o.removeEventListener("keydown",Ay),o.removeEventListener("keyup",yy),o.removeEventListener("dragstart",Ln),o.removeEventListener("blur",xy)}function l3(o,l){Ey(o,l,!1)}function c3(o){delete o._ripple,Sy(o)}function d3(o,l){if(l.value===l.oldValue)return;const d=_y(l.oldValue);Ey(o,l,d)}const Fc={mounted:l3,unmounted:c3,updated:d3};const u3=tt({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Ei(),...xn(),...ln()},emits:{"update:modelValue":o=>!0},setup(o,l){let{slots:d}=l;const h=sn(o,"modelValue"),{isRtl:g}=Rc(),{themeClasses:p}=yn(o),{textColorClasses:b,textColorStyles:_}=vi(o,"color"),{backgroundColorClasses:k,backgroundColorStyles:A}=$o(q(()=>o.bgColor||o.color)),{backgroundColorClasses:x,backgroundColorStyles:y}=$o(o,"color"),{roundedClasses:v}=Si(o),{intersectionRef:E,isIntersecting:N}=wy(),F=q(()=>parseInt(o.max,10)),j=q(()=>parseInt(o.height,10)),M=q(()=>parseFloat(o.bufferValue)/F.value*100),T=q(()=>parseFloat(h.value)/F.value*100),R=q(()=>g.value!==o.reverse),G=q(()=>o.indeterminate?"fade-transition":"slide-x-transition"),U=q(()=>o.bgOpacity==null?o.bgOpacity:parseFloat(o.bgOpacity));function Z(L){if(!E.value)return;const{left:V,right:W,width:Y}=E.value.getBoundingClientRect(),Q=R.value?Y-L.clientX+(W-Y):L.clientX-V;h.value=Math.round(Q/Y*F.value)}return rt(()=>z(o.tag,{ref:E,class:["v-progress-linear",{"v-progress-linear--active":o.active&&N.value,"v-progress-linear--reverse":R.value,"v-progress-linear--rounded":o.rounded,"v-progress-linear--rounded-bar":o.roundedBar,"v-progress-linear--striped":o.striped},v.value,p.value],style:{height:o.active?Re(j.value):0,"--v-progress-linear-height":Re(j.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":o.max,"aria-valuenow":o.indeterminate?void 0:T.value,onClick:o.clickable&&Z},{default:()=>[o.stream&&z("div",{key:"stream",class:["v-progress-linear__stream",b.value],style:{..._.value,[R.value?"left":"right"]:Re(-j.value),borderTop:`${Re(j.value/2)} dotted`,opacity:U.value,top:`calc(50% - ${Re(j.value/4)})`,width:Re(100-M.value,"%"),"--v-progress-linear-stream-to":Re(j.value*(R.value?1:-1))}},null),z("div",{class:["v-progress-linear__background",k.value],style:[A.value,{opacity:U.value,width:Re(o.stream?M.value:100,"%")}]},null),z(co,{name:G.value},{default:()=>[o.indeterminate?z("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(L=>z("div",{key:L,class:["v-progress-linear__indeterminate",L,x.value],style:y.value},null))]):z("div",{class:["v-progress-linear__determinate",x.value],style:[y.value,{width:Re(T.value,"%")}]},null)]}),d.default&&z("div",{class:"v-progress-linear__content"},[d.default({value:T.value,buffer:M.value})])]})),{}}}),Dy=qe({loading:Boolean},"loader");function Iy(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return{loaderClasses:q(()=>({[`${l}--loading`]:o.loading}))}}function h3(o,l){var d;let{slots:h}=l;return z("div",{class:`${o.name}__loader`},[((d=h.default)==null?void 0:d.call(h,{color:o.color,isActive:o.active}))||z(u3,{active:o.active,color:o.color,height:"2",indeterminate:!0},null)])}const G_={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},g3=qe({location:String},"location");function f3(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=arguments.length>2?arguments[2]:void 0;const{isRtl:h}=Rc();return{locationStyles:q(()=>{if(!o.location)return{};const{side:p,align:b}=$h(o.location.split(" ").length>1?o.location:`${o.location} center`,h.value);function _(A){return d?d(A):0}const k={};return p!=="center"&&(l?k[G_[p]]=`calc(100% - ${_(p)}px)`:k[p]=0),b!=="center"?l?k[G_[b]]=`calc(100% - ${_(b)}px)`:k[b]=0:(p==="center"?k.top=k.left="50%":k[{top:"left",bottom:"left",left:"top",right:"top"}[p]]="50%",k.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[p]),k})}}const m3=["static","relative","fixed","absolute","sticky"],p3=qe({position:{type:String,validator:o=>m3.includes(o)}},"position");function b3(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();return{positionClasses:q(()=>o.position?`${l}--${o.position}`:void 0)}}function Ty(){var o,l;return(o=an("useRouter"))==null||(l=o.proxy)==null?void 0:l.$router}function Xg(o,l){const d=nA("RouterLink"),h=q(()=>!!(o.href||o.to)),g=q(()=>(h==null?void 0:h.value)||!!(l.onClick||l.onClickOnce));if(typeof d=="string")return{isLink:h,isClickable:g,href:Fe(o,"href")};const p=o.to?d.useLink(o):void 0;return{...p,isLink:h,isClickable:g,href:q(()=>o.to?p==null?void 0:p.route.value.href:o.href)}}const ef=qe({href:String,replace:Boolean,to:[String,Object]},"router");let fh=!1;function k3(o,l){let d=!1,h,g;Mt&&(An(()=>{window.addEventListener("popstate",p),h=o==null?void 0:o.beforeEach((b,_,k)=>{fh?d?l(k):k():setTimeout(()=>d?l(k):k()),fh=!0}),g=o==null?void 0:o.afterEach(()=>{fh=!1})}),_i(()=>{var b,_;window.removeEventListener("popstate",p),(b=h)==null||b(),(_=g)==null||_()}));function p(b){var _;(_=b.state)!=null&&_.replaced||(d=!0,setTimeout(()=>d=!1))}}function w3(o,l){et(()=>{var d;return(d=o.isExactActive)==null?void 0:d.value},d=>{o.isLink.value&&d&&l&&An(()=>{l(!0)})},{immediate:!0})}const mh=tt({name:"VBtn",directives:{Ripple:Fc},props:{active:Boolean,symbol:{type:null,default:ky},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:vt,appendIcon:vt,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...fs(),...Ei(),...yi(),...La(),...ps(),...fy(),...Dy(),...g3(),...p3(),...ef(),...Pa(),...xn({tag:"button"}),...ln(),...ks({variant:"elevated"})},emits:{"group:selected":o=>!0},setup(o,l){let{attrs:d,slots:h}=l;const{themeClasses:g}=yn(o),{borderClasses:p}=ms(o),{colorClasses:b,colorStyles:_,variantClasses:k}=Jg(o),{densityClasses:A}=xi(o),{dimensionStyles:x}=Oa(o),{elevationClasses:y}=bs(o),{loaderClasses:v}=Iy(o),{locationStyles:E}=f3(o),{positionClasses:N}=b3(o),{roundedClasses:F}=Si(o),{sizeClasses:j}=za(o),M=my(o,o.symbol,!1),T=Xg(o,d),R=q(()=>(M==null?void 0:M.disabled.value)||o.disabled),G=q(()=>o.variant==="elevated"&&!(o.disabled||o.flat||o.border));return w3(T,M==null?void 0:M.select),rt(()=>{var U,Z,L,V,W,Y,Q,X;const se=T.isLink.value?"a":o.tag,ae=!M||M.isSelected.value,pe=!!(o.prependIcon||h.prepend),ke=!!(o.appendIcon||h.append);return jn(z(se,{type:se==="a"?void 0:"button",class:["v-btn",M==null?void 0:M.selectedClass.value,{"v-btn--active":o.active,"v-btn--block":o.block,"v-btn--disabled":R.value,"v-btn--elevated":G.value,"v-btn--flat":o.flat,"v-btn--icon":!!o.icon,"v-btn--loading":o.loading,"v-btn--stacked":o.stacked},g.value,p.value,ae?b.value:void 0,A.value,y.value,v.value,N.value,F.value,j.value,k.value],style:[ae?_.value:void 0,x.value,E.value],disabled:R.value||void 0,href:T.href.value,onClick:Ae=>{var Ie;R.value||((Ie=T.navigate)==null||Ie.call(T,Ae),M==null||M.toggle())}},{default:()=>[Zg(!0,"v-btn"),!o.icon&&pe&&z(so,{key:"prepend",defaults:{VIcon:{icon:o.prependIcon}}},{default:()=>[z("span",{class:"v-btn__prepend"},[(U=(Z=h.prepend)==null?void 0:Z.call(h))!=null?U:z(it,null,null)])]}),z("span",{class:"v-btn__content","data-no-activator":""},[z(so,{key:"content",defaults:{VIcon:{icon:typeof o.icon=="string"?o.icon:void 0}}},{default:()=>[(L=(V=h.default)==null?void 0:V.call(h))!=null?L:typeof o.icon=="string"&&z(it,{key:"icon"},null)]})]),!o.icon&&ke&&z(so,{key:"append",defaults:{VIcon:{icon:o.appendIcon}}},{default:()=>[z("span",{class:"v-btn__append"},[(W=(Y=h.append)==null?void 0:Y.call(h))!=null?W:z(it,null,null)])]}),!!o.loading&&z("span",{key:"loader",class:"v-btn__loader"},[(Q=(X=h.loader)==null?void 0:X.call(h))!=null?Q:z(r3,{color:typeof o.loading=="boolean"?void 0:o.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[Ci("ripple"),!R.value&&o.ripple,null]])}),{}}});const My=tt({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ln()},setup(o,l){let{attrs:d}=l;const{themeClasses:h}=yn(o),{backgroundColorClasses:g,backgroundColorStyles:p}=$o(Fe(o,"color")),b=q(()=>{const _={};return o.length&&(_[o.vertical?"maxHeight":"maxWidth"]=Re(o.length)),o.thickness&&(_[o.vertical?"borderRightWidth":"borderTopWidth"]=Re(o.thickness)),_});return rt(()=>z("hr",{class:[{"v-divider":!0,"v-divider--inset":o.inset,"v-divider--vertical":o.vertical},h.value,g.value],style:[b.value,p.value],"aria-orientation":!d.role||d.role==="separator"?o.vertical?"vertical":"horizontal":void 0,role:`${d.role||"separator"}`},null)),{}}});function Hn(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",d=arguments.length>2?arguments[2]:void 0;return tt({name:o,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:d},origin:{type:String,default:l}},setup(h,g){let{slots:p}=g;return()=>{const b=h.group?RA:co;return Io(b,{name:o,mode:h.mode,onBeforeEnter(_){_.style.transformOrigin=h.origin},onLeave(_){if(h.leaveAbsolute){const{offsetTop:k,offsetLeft:A,offsetWidth:x,offsetHeight:y}=_;_._transitionInitialStyles={position:_.style.position,top:_.style.top,left:_.style.left,width:_.style.width,height:_.style.height},_.style.position="absolute",_.style.top=`${k}px`,_.style.left=`${A}px`,_.style.width=`${x}px`,_.style.height=`${y}px`}h.hideOnLeave&&_.style.setProperty("display","none","important")},onAfterLeave(_){if(h.leaveAbsolute&&_!=null&&_._transitionInitialStyles){const{position:k,top:A,left:x,width:y,height:v}=_._transitionInitialStyles;delete _._transitionInitialStyles,_.style.position=k||"",_.style.top=A||"",_.style.left=x||"",_.style.width=y||"",_.style.height=v||""}}},p.default)}}})}function By(o,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return tt({name:o,props:{mode:{type:String,default:d}},setup(h,g){let{slots:p}=g;return()=>Io(co,{name:o,...l},p.default)}})}function Ny(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const d=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",h=fn(`offset-${d}`);return{onBeforeEnter(b){b._parent=b.parentNode,b._initialStyle={transition:b.style.transition,overflow:b.style.overflow,[d]:b.style[d]}},onEnter(b){const _=b._initialStyle;b.style.setProperty("transition","none","important"),b.style.overflow="hidden";const k=`${b[h]}px`;b.style[d]="0",b.offsetHeight,b.style.transition=_.transition,o&&b._parent&&b._parent.classList.add(o),requestAnimationFrame(()=>{b.style[d]=k})},onAfterEnter:p,onEnterCancelled:p,onLeave(b){b._initialStyle={transition:"",overflow:b.style.overflow,[d]:b.style[d]},b.style.overflow="hidden",b.style[d]=`${b[h]}px`,b.offsetHeight,requestAnimationFrame(()=>b.style[d]="0")},onAfterLeave:g,onLeaveCancelled:g};function g(b){o&&b._parent&&b._parent.classList.remove(o),p(b)}function p(b){const _=b._initialStyle[d];b.style.overflow=b._initialStyle.overflow,_!=null&&(b.style[d]=_),delete b._initialStyle}}const Py=tt({name:"VDialogTransition",props:{target:Object},setup(o,l){let{slots:d}=l;const h={onBeforeEnter(g){g.style.pointerEvents="none",g.style.visibility="hidden"},async onEnter(g,p){var b;await new Promise(E=>requestAnimationFrame(E)),await new Promise(E=>requestAnimationFrame(E)),g.style.visibility="";const{x:_,y:k,sx:A,sy:x,speed:y}=Y_(o.target,g),v=g.animate([{transform:`translate(${_}px, ${k}px) scale(${A}, ${x})`,opacity:0},{transform:""}],{duration:225*y,easing:tz});(b=K_(g))==null||b.forEach(E=>{E.animate([{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*y,easing:hc})}),v.finished.then(()=>p())},onAfterEnter(g){g.style.removeProperty("pointer-events")},onBeforeLeave(g){g.style.pointerEvents="none"},async onLeave(g,p){var b;await new Promise(E=>requestAnimationFrame(E));const{x:_,y:k,sx:A,sy:x,speed:y}=Y_(o.target,g);g.animate([{transform:""},{transform:`translate(${_}px, ${k}px) scale(${A}, ${x})`,opacity:0}],{duration:125*y,easing:nz}).finished.then(()=>p()),(b=K_(g))==null||b.forEach(E=>{E.animate([{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*y,easing:hc})})},onAfterLeave(g){g.style.removeProperty("pointer-events")}};return()=>o.target?z(co,xt({name:"dialog-transition"},h,{css:!1}),d):z(co,{name:"dialog-transition"},d)}});function K_(o){var l;const d=(l=o.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:l.children;return d&&[...d]}function Y_(o,l){const d=o.getBoundingClientRect(),h=Wg(l),[g,p]=getComputedStyle(l).transformOrigin.split(" ").map(M=>parseFloat(M)),[b,_]=getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");let k=d.left+d.width/2;b==="left"||_==="left"?k-=d.width/2:(b==="right"||_==="right")&&(k+=d.width/2);let A=d.top+d.height/2;b==="top"||_==="top"?A-=d.height/2:(b==="bottom"||_==="bottom")&&(A+=d.height/2);const x=d.width/h.width,y=d.height/h.height,v=Math.max(1,x,y),E=x/v,N=y/v,F=h.width*h.height/(window.innerWidth*window.innerHeight),j=F>.12?Math.min(1.5,(F-.12)*10+1):1;return{x:k-(g+h.left),y:A-(p+h.top),sx:E,sy:N,speed:j}}Hn("fab-transition","center center","out-in");Hn("dialog-bottom-transition");Hn("dialog-top-transition");Hn("fade-transition");Hn("scale-transition");Hn("scroll-x-transition");Hn("scroll-x-reverse-transition");Hn("scroll-y-transition");Hn("scroll-y-reverse-transition");Hn("slide-x-transition");Hn("slide-x-reverse-transition");const zy=Hn("slide-y-transition");Hn("slide-y-reverse-transition");const v3=By("expand-transition",Ny()),Ly=By("expand-x-transition",Ny("",!0)),Jh=Symbol.for("vuetify:list");function Oy(){const o=Xe(Jh,{hasPrepend:ve(!1),updateHasPrepend:()=>null}),l={hasPrepend:ve(!1),updateHasPrepend:d=>{d&&(l.hasPrepend.value=d)}};return Ht(Jh,l),o}function Ry(){return Xe(Jh,null)}const _3={open:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(d){const p=new Set;p.add(l);let b=g.get(l);for(;b!=null;)p.add(b),b=g.get(b);return p}else return h.delete(l),h},select:()=>null},Fy={open:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(d){let p=g.get(l);for(h.add(l);p!=null&&p!==l;)h.add(p),p=g.get(p);return h}else h.delete(l);return h},select:()=>null},C3={open:Fy.open,select:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(!d)return h;const p=[];let b=g.get(l);for(;b!=null;)p.push(b),b=g.get(b);return new Set(p)}},tf=o=>{const l={select:d=>{let{id:h,value:g,selected:p}=d;if(o&&!g){const b=Array.from(p.entries()).reduce((_,k)=>{let[A,x]=k;return x==="on"?[..._,A]:_},[]);if(b.length===1&&b[0]===h)return p}return p.set(h,g?"on":"off"),p},in:(d,h,g)=>{let p=new Map;for(const b of d||[])p=l.select({id:b,value:!0,selected:new Map(p),children:h,parents:g});return p},out:d=>{const h=[];for(const[g,p]of d.entries())p==="on"&&h.push(g);return h}};return l},jy=o=>{const l=tf(o);return{select:h=>{let{selected:g,id:p,...b}=h;const _=g.has(p)?new Map([[p,g.get(p)]]):new Map;return l.select({...b,id:p,selected:_})},in:(h,g,p)=>{let b=new Map;return h!=null&&h.length&&(b=l.in(h.slice(0,1),g,p)),b},out:(h,g,p)=>l.out(h,g,p)}},A3=o=>{const l=tf(o);return{select:h=>{let{id:g,selected:p,children:b,..._}=h;return b.has(g)?p:l.select({id:g,selected:p,children:b,..._})},in:l.in,out:l.out}},y3=o=>{const l=jy(o);return{select:h=>{let{id:g,selected:p,children:b,..._}=h;return b.has(g)?p:l.select({id:g,selected:p,children:b,..._})},in:l.in,out:l.out}},x3=o=>{const l={select:d=>{let{id:h,value:g,selected:p,children:b,parents:_}=d;const k=new Map(p),A=[h];for(;A.length;){const y=A.shift();p.set(y,g?"on":"off"),b.has(y)&&A.push(...b.get(y))}let x=_.get(h);for(;x;){const y=b.get(x),v=y.every(N=>p.get(N)==="on"),E=y.every(N=>!p.has(N)||p.get(N)==="off");p.set(x,v?"on":E?"off":"indeterminate"),x=_.get(x)}return o&&!g&&Array.from(p.entries()).reduce((v,E)=>{let[N,F]=E;return F==="on"?[...v,N]:v},[]).length===0?k:p},in:(d,h,g)=>{let p=new Map;for(const b of d||[])p=l.select({id:b,value:!0,selected:new Map(p),children:h,parents:g});return p},out:(d,h)=>{const g=[];for(const[p,b]of d.entries())b==="on"&&!h.has(p)&&g.push(p);return g}};return l},xa=Symbol.for("vuetify:nested"),Vy={id:ve(),root:{register:()=>null,unregister:()=>null,parents:ve(new Map),children:ve(new Map),open:()=>null,select:()=>null,opened:ve(new Set),selected:ve(new Map),selectedValues:ve([])}},E3=qe({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),S3=o=>{let l=!1;const d=ve(new Map),h=ve(new Map),g=sn(o,"opened",o.opened,y=>new Set(y),y=>[...y.values()]),p=q(()=>{if(typeof o.selectStrategy=="object")return o.selectStrategy;switch(o.selectStrategy){case"single-leaf":return y3(o.mandatory);case"leaf":return A3(o.mandatory);case"independent":return tf(o.mandatory);case"single-independent":return jy(o.mandatory);case"classic":default:return x3(o.mandatory)}}),b=q(()=>{if(typeof o.openStrategy=="function")return o.openStrategy;switch(o.openStrategy){case"list":return C3;case"single":return _3;case"multiple":default:return Fy}}),_=sn(o,"selected",o.selected,y=>p.value.in(y,d.value,h.value),y=>p.value.out(y,d.value,h.value));Vn(()=>{l=!0});function k(y){const v=[];let E=y;for(;E!=null;)v.unshift(E),E=h.value.get(E);return v}const A=an("nested"),x={id:ve(),root:{opened:g,selected:_,selectedValues:q(()=>{const y=[];for(const[v,E]of _.value.entries())E==="on"&&y.push(v);return y}),register:(y,v,E)=>{v&&y!==v&&h.value.set(y,v),E&&d.value.set(y,[]),v!=null&&d.value.set(v,[...d.value.get(v)||[],y])},unregister:y=>{if(l)return;d.value.delete(y);const v=h.value.get(y);if(v){var E;const N=(E=d.value.get(v))!=null?E:[];d.value.set(v,N.filter(F=>F!==y))}h.value.delete(y),g.value.delete(y)},open:(y,v,E)=>{A.emit("click:open",{id:y,value:v,path:k(y),event:E});const N=b.value.open({id:y,value:v,opened:new Set(g.value),children:d.value,parents:h.value,event:E});N&&(g.value=N)},select:(y,v,E)=>{A.emit("click:select",{id:y,value:v,path:k(y),event:E});const N=p.value.select({id:y,value:v,selected:new Map(_.value),children:d.value,parents:h.value,event:E});N&&(_.value=N);const F=b.value.select({id:y,value:v,selected:new Map(_.value),opened:new Set(g.value),children:d.value,parents:h.value,event:E});F&&(g.value=F)},children:d,parents:h}};return Ht(xa,x),x.root},Hy=(o,l)=>{const d=Xe(xa,Vy),h=q(()=>{var p;return(p=o.value)!=null?p:ho().toString()}),g={...d,id:h,open:(p,b)=>d.root.open(h.value,p,b),isOpen:q(()=>d.root.opened.value.has(h.value)),parent:q(()=>d.root.parents.value.get(h.value)),select:(p,b)=>d.root.select(h.value,p,b),isSelected:q(()=>d.root.selected.value.get(h.value)==="on"),isIndeterminate:q(()=>d.root.selected.value.get(h.value)==="indeterminate"),isLeaf:q(()=>!d.root.children.value.get(h.value)),isGroupActivator:d.isGroupActivator};return!d.isGroupActivator&&d.root.register(h.value,d.id.value,l),Vn(()=>{!d.isGroupActivator&&d.root.unregister(h.value)}),l&&Ht(xa,g),g},D3=()=>{const o=Xe(xa,Vy);Ht(xa,{...o,isGroupActivator:!0})},I3=tt({name:"VListGroupActivator",setup(o,l){let{slots:d}=l;return D3(),()=>{var h;return(h=d.default)==null?void 0:h.call(d)}}}),T3=qe({activeColor:String,color:String,collapseIcon:{type:vt,default:"$collapse"},expandIcon:{type:vt,default:"$expand"},prependIcon:vt,appendIcon:vt,fluid:Boolean,subgroup:Boolean,value:null,...xn()}),Uy=Jn()({name:"VListGroup",props:{title:String,...T3()},setup(o,l){let{slots:d}=l;const{isOpen:h,open:g}=Hy(Fe(o,"value"),!0),p=Ry(),b=A=>{g(!h.value,A)},_=q(()=>({onClick:b,class:"v-list-group__header"})),k=q(()=>h.value?o.collapseIcon:o.expandIcon);return rt(()=>{var A;return z(o.tag,{class:["v-list-group",{"v-list-group--prepend":p==null?void 0:p.hasPrepend.value,"v-list-group--fluid":o.fluid,"v-list-group--subgroup":o.subgroup}]},{default:()=>[d.activator&&z(so,{defaults:{VListItem:{active:h.value,activeColor:o.activeColor,color:o.color,prependIcon:o.prependIcon||o.subgroup&&k.value,appendIcon:o.appendIcon||!o.subgroup&&k.value,title:o.title,value:o.value}}},{default:()=>[z(I3,null,{default:()=>[d.activator({props:_.value,isOpen:h})]})]}),z(v3,null,{default:()=>[jn(z("div",{class:"v-list-group__items"},[(A=d.default)==null?void 0:A.call(d)]),[[Ai,h.value]])]})]})}),{}}});function M3(o){return hs(o,Object.keys(Uy.props))}const B3=ry("v-list-item-subtitle"),$y=ry("v-list-item-title"),xo=Jn()({name:"VListItem",directives:{Ripple:Fc},props:{active:Boolean,activeColor:String,activeClass:String,appendAvatar:String,appendIcon:vt,disabled:Boolean,lines:String,nav:Boolean,prependAvatar:String,prependIcon:vt,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,link:Boolean,...fs(),...yi(),...La(),...ps(),...Ei(),...ef(),...xn(),...ln(),...ks({variant:"text"})},setup(o,l){let{attrs:d,slots:h}=l;const g=Xg(o,d),p=q(()=>{var Q;return(Q=o.value)!=null?Q:g.href.value}),{select:b,isSelected:_,isIndeterminate:k,isGroupActivator:A,root:x,parent:y}=Hy(p,!1),v=Ry(),E=q(()=>{var Q;return o.active||((Q=g.isExactActive)==null?void 0:Q.value)||_.value}),N=q(()=>o.rounded||o.nav),F=q(()=>{var Q;return{color:E.value&&(Q=o.activeColor)!=null?Q:o.color,variant:o.variant}});et(()=>{var Q;return(Q=g.isExactActive)==null?void 0:Q.value},Q=>{Q&&y.value!=null&&x.open(y.value,!0)},{immediate:!0});const{themeClasses:j}=yn(o),{borderClasses:M}=ms(o),{colorClasses:T,colorStyles:R,variantClasses:G}=Jg(F),{densityClasses:U}=xi(o),{dimensionStyles:Z}=Oa(o),{elevationClasses:L}=bs(o),{roundedClasses:V}=Si(N),W=q(()=>o.lines?`v-list-item--${o.lines}-line`:void 0),Y=q(()=>({isActive:E.value,select:b,isSelected:_.value,isIndeterminate:k.value}));return rt(()=>{var Q,X,se,ae,pe,ke,Ae;const Ie=g.isLink.value?"a":o.tag,Ke=!v||_.value||E.value,Rt=h.title||o.title,St=h.subtitle||o.subtitle,Ne=!!(h.append||o.appendAvatar||o.appendIcon),_t=!!(h.prepend||o.prependAvatar||o.prependIcon),Jt=!o.disabled&&(o.link||g.isClickable.value||o.value!=null&&!!v);return v==null||v.updateHasPrepend(_t),jn(z(Ie,{class:["v-list-item",{"v-list-item--active":E.value,"v-list-item--disabled":o.disabled,"v-list-item--link":Jt,"v-list-item--nav":o.nav,"v-list-item--prepend":!_t&&(v==null?void 0:v.hasPrepend.value),[`${o.activeClass}`]:E.value},j.value,M.value,Ke?T.value:void 0,U.value,L.value,W.value,V.value,G.value],style:[Ke?R.value:void 0,Z.value],href:g.href.value,tabindex:Jt?0:void 0,onClick:Jt&&(H=>{var ce;A||((ce=g.navigate)==null||ce.call(g,H),o.value!=null&&b(!_.value,H))})},{default:()=>[Zg(Jt||E.value,"v-list-item"),_t&&z(so,{key:"prepend",defaults:{VAvatar:{density:o.density,image:o.prependAvatar},VIcon:{density:o.density,icon:o.prependIcon},VListItemAction:{start:!0}}},{default:()=>[z("div",{class:"v-list-item__prepend"},[o.prependAvatar&&z(Ca,{key:"prepend-avatar"},null),o.prependIcon&&z(it,{key:"prepend-icon"},null),(Q=h.prepend)==null?void 0:Q.call(h,Y.value)])]}),z("div",{class:"v-list-item__content"},[Rt&&z($y,{key:"title"},{default:()=>[(X=(se=h.title)==null?void 0:se.call(h,{title:o.title}))!=null?X:o.title]}),St&&z(B3,{key:"subtitle"},{default:()=>[(ae=(pe=h.subtitle)==null?void 0:pe.call(h,{subtitle:o.subtitle}))!=null?ae:o.subtitle]}),(ke=h.default)==null?void 0:ke.call(h,Y.value)]),Ne&&z(so,{key:"append",defaults:{VAvatar:{density:o.density,image:o.appendAvatar},VIcon:{density:o.density,icon:o.appendIcon},VListItemAction:{end:!0}}},{default:()=>[z("div",{class:"v-list-item__append"},[(Ae=h.append)==null?void 0:Ae.call(h,Y.value),o.appendIcon&&z(it,{key:"append-icon"},null),o.appendAvatar&&z(Ca,{key:"append-avatar"},null)])]})]}),[[Ci("ripple"),Jt]])}),{}}}),N3=tt({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...xn()},setup(o,l){let{slots:d}=l;const{textColorClasses:h,textColorStyles:g}=vi(Fe(o,"color"));return rt(()=>{var p,b;const _=!!(d.default||o.title);return z(o.tag,{class:["v-list-subheader",{"v-list-subheader--inset":o.inset,"v-list-subheader--sticky":o.sticky},h.value],style:{textColorStyles:g}},{default:()=>[_&&z("div",{class:"v-list-subheader__text"},[(p=(b=d.default)==null?void 0:b.call(d))!=null?p:o.title])]})}),{}}}),Wy=Jn()({name:"VListChildren",props:{items:Array},setup(o,l){let{slots:d}=l;return Oy(),()=>{var h,g,p;return(h=(g=d.default)==null?void 0:g.call(d))!=null?h:(p=o.items)==null?void 0:p.map(b=>{let{children:_,props:k,type:A,raw:x}=b;if(A==="divider"){var y,v;return(y=(v=d.divider)==null?void 0:v.call(d,{props:k}))!=null?y:z(My,k,null)}if(A==="subheader"){var E,N;return(E=(N=d.subheader)==null?void 0:N.call(d,{props:k}))!=null?E:z(N3,k,{default:d.subheader})}const F={subtitle:d.subtitle?T=>{var R;return(R=d.subtitle)==null?void 0:R.call(d,{...T,item:x})}:void 0,prepend:d.prepend?T=>{var R;return(R=d.prepend)==null?void 0:R.call(d,{...T,item:x})}:void 0,append:d.append?T=>{var R;return(R=d.append)==null?void 0:R.call(d,{...T,item:x})}:void 0,default:d.default?T=>{var R;return(R=d.default)==null?void 0:R.call(d,{...T,item:x})}:void 0,title:d.title?T=>{var R;return(R=d.title)==null?void 0:R.call(d,{...T,item:x})}:void 0},[j,M]=M3(k);return _?z(Uy,xt({value:k==null?void 0:k.value},j),{activator:T=>{let{props:R}=T;return d.header?d.header({...k,...R}):z(xo,xt(k,R),F)},default:()=>z(Wy,{items:_},d)}):d.item?d.item(k):z(xo,k,F)})}}}),qy=qe({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Gy(o,l){const d=Vo(l,o.itemTitle,l),h=Vo(l,o.itemValue,d),g=Vo(l,o.itemChildren),p=o.itemProps===!0?hs(l,["children"])[1]:Vo(l,o.itemProps),b={title:d,value:h,...p};return{title:b.title,value:b.value,props:b,children:Array.isArray(g)?Ky(o,g):void 0,raw:l}}function Ky(o,l){const d=[];for(const h of l)d.push(Gy(o,h));return d}function P3(o){const l=q(()=>Ky(o,o.items));function d(g){return g.map(p=>Gy(o,p))}function h(g){return o.returnObject?g.map(p=>{let{raw:b}=p;return b}):g.map(p=>{let{props:b}=p;return b.value})}return{items:l,transformIn:d,transformOut:h}}function z3(o,l){const d=Vo(l,o.itemType,"item"),h=typeof l=="string"?l:Vo(l,o.itemTitle),g=Vo(l,o.itemValue,void 0),p=Vo(l,o.itemChildren),b=o.itemProps===!0?hs(l,["children"])[1]:Vo(l,o.itemProps),_={title:h,value:g,...b};return{type:d,title:_.title,value:_.value,props:_,children:d==="item"&&p?Yy(o,p):void 0,raw:l}}function Yy(o,l){const d=[];for(const h of l)d.push(z3(o,h));return d}function L3(o){return{items:q(()=>Yy(o,o.items))}}const ua=Jn()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...E3({selectStrategy:"single-leaf",openStrategy:"list"}),...fs(),...yi(),...La(),...ps(),itemType:{type:String,default:"type"},...qy(),...Ei(),...xn(),...ln(),...ks({variant:"text"})},emits:{"update:selected":o=>!0,"update:opened":o=>!0,"click:open":o=>!0,"click:select":o=>!0},setup(o,l){let{slots:d}=l;const{items:h}=L3(o),{themeClasses:g}=yn(o),{backgroundColorClasses:p,backgroundColorStyles:b}=$o(Fe(o,"bgColor")),{borderClasses:_}=ms(o),{densityClasses:k}=xi(o),{dimensionStyles:A}=Oa(o),{elevationClasses:x}=bs(o),{roundedClasses:y}=Si(o),{open:v,select:E}=S3(o),N=q(()=>o.lines?`v-list--${o.lines}-line`:void 0),F=Fe(o,"activeColor"),j=Fe(o,"color");return Oy(),Na({VListGroup:{activeColor:F,color:j},VListItem:{activeClass:Fe(o,"activeClass"),activeColor:F,color:j,density:Fe(o,"density"),disabled:Fe(o,"disabled"),lines:Fe(o,"lines"),nav:Fe(o,"nav"),variant:Fe(o,"variant")}}),rt(()=>z(o.tag,{class:["v-list",{"v-list--disabled":o.disabled,"v-list--nav":o.nav},g.value,p.value,_.value,k.value,x.value,N.value,y.value],style:[b.value,A.value]},{default:()=>[z(Wy,{items:h.value},d)]})),{open:v,select:E}}});function Qy(){const o=ve(!1);return uo(()=>{window.requestAnimationFrame(()=>{o.value=!0})}),{ssrBootStyles:q(()=>o.value?void 0:{transition:"none !important"}),isBooted:us(o)}}const O3=tt({name:"VMain",props:xn({tag:"main"}),setup(o,l){let{slots:d}=l;const{mainStyles:h}=Vz(),{ssrBootStyles:g}=Qy();return rt(()=>{var p;return z(o.tag,{class:"v-main",style:[h.value,g.value]},{default:()=>[z("div",{class:"v-main__wrap"},[(p=d.default)==null?void 0:p.call(d)])]})}),{}}});const R3=100,F3=20;function Q_(o){const l=1.41421356237;return(o<0?-1:1)*Math.sqrt(Math.abs(o))*l}function Z_(o){if(o.length<2)return 0;if(o.length===2)return o[1].t===o[0].t?0:(o[1].d-o[0].d)/(o[1].t-o[0].t);let l=0;for(let d=o.length-1;d>0;d--){if(o[d].t===o[d-1].t)continue;const h=Q_(l),g=(o[d].d-o[d-1].d)/(o[d].t-o[d-1].t);l+=(g-h)*Math.abs(g),d===o.length-1&&(l*=.5)}return Q_(l)*1e3}function j3(){const o={};function l(g){Array.from(g.changedTouches).forEach(p=>{var b;((b=o[p.identifier])!=null?b:o[p.identifier]=new RP(F3)).push([g.timeStamp,p])})}function d(g){Array.from(g.changedTouches).forEach(p=>{delete o[p.identifier]})}function h(g){var p;const b=(p=o[g])==null?void 0:p.values().reverse();if(!b)throw new Error(`No samples for touch id ${g}`);const _=b[0],k=[],A=[];for(const x of b){if(_[0]-x[0]>R3)break;k.push({t:x[0],d:x[1].clientX}),A.push({t:x[0],d:x[1].clientY})}return{x:Z_(k),y:Z_(A),get direction(){const{x,y}=this,[v,E]=[Math.abs(x),Math.abs(y)];return v>E&&x>=0?"right":v>E&&x<=0?"left":E>v&&y>=0?"down":E>v&&y<=0?"up":V3()}}}return{addMovement:l,endTouch:d,getVelocity:h}}function V3(){throw new Error}function H3(o){let{isActive:l,isTemporary:d,width:h,touchless:g,position:p}=o;uo(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",R,{passive:!0})}),Vn(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",R)});const b=q(()=>p.value!=="bottom"),{addMovement:_,endTouch:k,getVelocity:A}=j3();let x=!1;const y=ve(!1),v=ve(0),E=ve(0);let N;function F(U,Z){return(p.value==="left"?U:p.value==="right"?document.documentElement.clientWidth-U:p.value==="bottom"?document.documentElement.clientHeight-U:Vr())-(Z?h.value:0)}function j(U){let Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const L=p.value==="left"?(U-E.value)/h.value:p.value==="right"?(document.documentElement.clientWidth-U-E.value)/h.value:p.value==="bottom"?(document.documentElement.clientHeight-U-E.value)/h.value:Vr();return Z?Math.max(0,Math.min(1,L)):L}function M(U){if(g.value)return;const Z=U.changedTouches[0].clientX,L=U.changedTouches[0].clientY,V=25,W=p.value==="left"?Z<V:p.value==="right"?Z>document.documentElement.clientWidth-V:p.value==="bottom"?L>document.documentElement.clientHeight-V:Vr(),Y=l.value&&(p.value==="left"?Z<h.value:p.value==="right"?Z>document.documentElement.clientWidth-h.value:p.value==="bottom"?L>document.documentElement.clientHeight-h.value:Vr());(W||Y||l.value&&d.value)&&(x=!0,N=[Z,L],E.value=F(b.value?Z:L,l.value),v.value=j(b.value?Z:L),k(U),_(U))}function T(U){const Z=U.changedTouches[0].clientX,L=U.changedTouches[0].clientY;if(x){if(!U.cancelable){x=!1;return}const W=Math.abs(Z-N[0]),Y=Math.abs(L-N[1]);(b.value?W>Y&&W>3:Y>W&&Y>3)?(y.value=!0,x=!1):(b.value?Y:W)>3&&(x=!1)}if(!y.value)return;U.preventDefault(),_(U);const V=j(b.value?Z:L,!1);v.value=Math.max(0,Math.min(1,V)),V>1?E.value=F(b.value?Z:L,!0):V<0&&(E.value=F(b.value?Z:L,!1))}function R(U){if(x=!1,!y.value)return;_(U),y.value=!1;const Z=A(U.changedTouches[0].identifier),L=Math.abs(Z.x),V=Math.abs(Z.y);(b.value?L>V&&L>400:V>L&&V>3)?l.value=Z.direction===({left:"right",right:"left",bottom:"up"}[p.value]||Vr()):l.value=v.value>.5}const G=q(()=>y.value?{transform:p.value==="left"?`translateX(calc(-100% + ${v.value*h.value}px))`:p.value==="right"?`translateX(calc(100% - ${v.value*h.value}px))`:p.value==="bottom"?`translateY(calc(100% - ${v.value*h.value}px))`:Vr(),transition:"none"}:void 0);return{isDragging:y,dragProgress:v,dragStyles:G}}function Vr(){throw new Error}const U3=tt({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:72},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"left",validator:o=>["left","right","bottom"].includes(o)},...fs(),...ps(),...jz(),...Ei(),...xn({tag:"nav"}),...ln()},emits:{"update:modelValue":o=>!0},setup(o,l){let{attrs:d,slots:h}=l;const{themeClasses:g}=yn(o),{borderClasses:p}=ms(o),{backgroundColorClasses:b,backgroundColorStyles:_}=$o(Fe(o,"color")),{elevationClasses:k}=bs(o),{mobile:A}=dz(),{roundedClasses:x}=Si(o),y=Ty(),v=sn(o,"modelValue",null,Q=>!!Q),E=ve(!1),{ssrBootStyles:N}=Qy(),F=q(()=>o.rail&&o.expandOnHover&&E.value?Number(o.width):Number(o.rail?o.railWidth:o.width)),j=q(()=>!o.permanent&&(A.value||o.temporary));o.disableResizeWatcher||et(j,Q=>!o.permanent&&(v.value=!Q)),!o.disableRouteWatcher&&y&&et(y.currentRoute,()=>j.value&&(v.value=!1)),et(()=>o.permanent,Q=>{Q&&(v.value=!0)}),Ba(()=>{o.modelValue!=null||j.value||(v.value=o.permanent||!A.value)});const M=ve(),{isDragging:T,dragProgress:R,dragStyles:G}=H3({isActive:v,isTemporary:j,width:F,touchless:Fe(o,"touchless"),position:Fe(o,"location")}),U=q(()=>{const Q=j.value?0:o.rail&&o.expandOnHover?Number(o.railWidth):F.value;return T.value?Q*R.value:Q}),{layoutItemStyles:Z,layoutRect:L,layoutItemScrimStyles:V}=Hz({id:o.name,order:q(()=>parseInt(o.order,10)),position:Fe(o,"location"),layoutSize:U,elementSize:F,active:q(()=>v.value||T.value),disableTransitions:q(()=>T.value),absolute:Fe(o,"absolute")}),W=$o(q(()=>typeof o.scrim=="string"?o.scrim:null)),Y=q(()=>({...T.value?{opacity:R.value*.2,transition:"none"}:void 0,...L.value?{left:Re(L.value.left),right:Re(L.value.right),top:Re(L.value.top),bottom:Re(L.value.bottom)}:void 0,...V.value}));return rt(()=>{var Q,X,se,ae;const pe=h.image||o.image;return z($e,null,[z(o.tag,xt({ref:M,onMouseenter:()=>E.value=!0,onMouseleave:()=>E.value=!1,class:["v-navigation-drawer",{"v-navigation-drawer--bottom":o.location==="bottom","v-navigation-drawer--end":o.location==="right","v-navigation-drawer--expand-on-hover":o.expandOnHover,"v-navigation-drawer--floating":o.floating,"v-navigation-drawer--is-hovering":E.value,"v-navigation-drawer--rail":o.rail,"v-navigation-drawer--start":o.location==="left","v-navigation-drawer--temporary":j.value,"v-navigation-drawer--active":v.value},g.value,b.value,p.value,k.value,x.value],style:[_.value,Z.value,G.value,N.value]},d),{default:()=>[pe&&z("div",{key:"image",class:"v-navigation-drawer__img"},[h.image?(Q=h.image)==null?void 0:Q.call(h,{image:o.image}):z("img",{src:o.image,alt:""},null)]),h.prepend&&z("div",{class:"v-navigation-drawer__prepend"},[(X=h.prepend)==null?void 0:X.call(h)]),z("div",{class:"v-navigation-drawer__content"},[(se=h.default)==null?void 0:se.call(h)]),h.append&&z("div",{class:"v-navigation-drawer__append"},[(ae=h.append)==null?void 0:ae.call(h)])]}),z(co,{name:"fade-transition"},{default:()=>[j.value&&(T.value||v.value)&&!!o.scrim&&z("div",{class:["v-navigation-drawer__scrim",W.backgroundColorClasses.value],style:[Y.value,W.backgroundColorStyles.value],onClick:()=>v.value=!1},null)]})])}),{}}}),$3=Et("mdi-plus-circle"),W3=Et(" \u65B0\u589E\u7B46\u8A18 "),q3=Le("span",{class:"mr-3"},"\u6A21\u5F0F",-1),G3=Et(" Sandy "),K3={__name:"Layout",setup(o){const l=Oz(),d=ve([{href:"/",text:"\u6240\u6709\u7B46\u8A18",value:"all",icon:"mdi-file-document-outline"},{href:"/fav",text:"\u6377\u5F91",value:"fav",icon:"mdi-star"},{href:"/tag",text:"\u6A19\u7C64",value:"tag",icon:"mdi-tag"},{href:"/calendar",text:"\u6708\u66C6",value:"calendar",icon:"mdi-calendar-blank-outline"},{href:"/share",text:"\u8207\u6211\u5171\u7528",value:"share",icon:"mdi-account-multiple"},{href:"/trash",text:"\u5783\u573E\u6876",value:"delete",icon:"mdi-delete-outline"}]);uo(()=>{l.global.name.value=window.localStorage.getItem("noteTheme")||"lightTheme"});const h=g=>{window.localStorage.setItem("noteTheme",g),l.global.name.value=g};return(g,p)=>{const b=Ng("router-view");return Ue(),yt($e,null,[z(U3,{class:"a-drawer",permanent:""},{append:Qe(()=>[z(ua,null,{default:Qe(()=>[z(xo,null,{default:Qe(()=>[Le("div",null,[q3,z(mh,{icon:"mdi-weather-sunny",size:"x-small",class:Rn(["ml-3",{"mode-active":nn(l).global.name.value==="lightTheme"}]),color:"#ffffff",variant:nn(l).global.name.value==="darkTheme"?"outlined":"elevated",onClick:p[0]||(p[0]=_=>h("lightTheme"))},null,8,["class","variant"]),z(mh,{icon:"mdi-weather-night",size:"x-small",class:Rn(["ml-3",{"mode-active":nn(l).global.name.value==="darkTheme"}]),color:"#ffffff",variant:nn(l).global.name.value==="lightTheme"?"outlined":"elevated",onClick:p[1]||(p[1]=_=>h("darkTheme"))},null,8,["class","variant"])])]),_:1}),z(xo,{class:"append-user"},{default:Qe(()=>[z(Ca,{class:"mr-3"},{default:Qe(()=>[z(it,{icon:"mdi-account-circle",size:"35"})]),_:1}),G3]),_:1})]),_:1})]),default:Qe(()=>[z(ua,null,{default:Qe(()=>[z(xo,{title:"FreeNote.",class:"drawer-title"}),z(xo,null,{default:Qe(()=>[z(mh,{block:"",class:"mt-3 add-note"},{default:Qe(()=>[z(it,{class:"mr-2",size:"28"},{default:Qe(()=>[$3]),_:1}),W3]),_:1})]),_:1})]),_:1}),z(ua,{class:"router-list"},{default:Qe(()=>[(Ue(!0),yt($e,null,ui(d.value,_=>(Ue(),Zn(xo,{to:_.href,"prepend-icon":_.icon,title:_.text,value:_.value},null,8,["to","prepend-icon","title","value"]))),256))]),_:1})]),_:1}),z(O3,null,{default:Qe(()=>[z(b)]),_:1})],64)}}};const Y3=tt({name:"VApp",props:{...Fz({fullHeight:!0}),...ln()},setup(o,l){let{slots:d}=l;const h=yn(o),{layoutClasses:g,layoutStyles:p,getLayoutItem:b,items:_,layoutRef:k}=$z(o),{rtlClasses:A}=Rc();return rt(()=>{var x;return z("div",{ref:k,class:["v-application",h.themeClasses.value,g.value,A.value],style:p.value},[z("div",{class:"v-application__wrap"},[(x=d.default)==null?void 0:x.call(d)])])}),{getLayoutItem:b,items:_,theme:h}}}),Q3={__name:"App",setup(o){return(l,d)=>(Ue(),Zn(Y3,null,{default:Qe(()=>[z(K3)]),_:1}))}};const Z3={dark:!1,colors:{primary:"#2F419B",drawerText:"#ffffff",text:"#555555",pageDrawerBg:"#F4F6F7",pageDrawerBorder:"#E6E6E6",background:"#FFFFFF",contentText:"#666666",tagBg:"#E9EBF4",tagText:"#2F419B",title:"#555555",cardAngle:"#E9EBF4",searchInputBg:"#E6E6E6",btnBg:"#FFFFFF",link:"#666666",listHover:"#E9EBF4"}},J3={dark:!0,colors:{primary:"#26252A",drawerText:"#ffffff",text:"#A3A3A3",pageDrawerBg:"#343338",pageDrawerBorder:"#666666",background:"#26252A",contentText:"#F2F2F2",tagBg:"#343338",tagText:"#FED32C",title:"#FFFFFF",cardAngle:"#FED32C",searchInputBg:"#26252A",btnBg:"#FED32C",listHover:"#26252A"}},X3=Wz({theme:{defaultTheme:"lightTheme",themes:{lightTheme:Z3,darkTheme:J3}}});/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zy=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ws=o=>Zy?Symbol(o):"_vr_"+o,eL=ws("rvlm"),J_=ws("rvd"),nf=ws("r"),Jy=ws("rl"),Xh=ws("rvl"),Gr=typeof window<"u";function tL(o){return o.__esModule||Zy&&o[Symbol.toStringTag]==="Module"}const mt=Object.assign;function ph(o,l){const d={};for(const h in l){const g=l[h];d[h]=Array.isArray(g)?g.map(o):o(g)}return d}const ha=()=>{},nL=/\/$/,oL=o=>o.replace(nL,"");function bh(o,l,d="/"){let h,g={},p="",b="";const _=l.indexOf("?"),k=l.indexOf("#",_>-1?_:0);return _>-1&&(h=l.slice(0,_),p=l.slice(_+1,k>-1?k:l.length),g=o(p)),k>-1&&(h=h||l.slice(0,k),b=l.slice(k,l.length)),h=aL(h!=null?h:l,d),{fullPath:h+(p&&"?")+p+b,path:h,query:g,hash:b}}function iL(o,l){const d=l.query?o(l.query):"";return l.path+(d&&"?")+d+(l.hash||"")}function X_(o,l){return!l||!o.toLowerCase().startsWith(l.toLowerCase())?o:o.slice(l.length)||"/"}function rL(o,l,d){const h=l.matched.length-1,g=d.matched.length-1;return h>-1&&h===g&&ss(l.matched[h],d.matched[g])&&Xy(l.params,d.params)&&o(l.query)===o(d.query)&&l.hash===d.hash}function ss(o,l){return(o.aliasOf||o)===(l.aliasOf||l)}function Xy(o,l){if(Object.keys(o).length!==Object.keys(l).length)return!1;for(const d in o)if(!sL(o[d],l[d]))return!1;return!0}function sL(o,l){return Array.isArray(o)?eC(o,l):Array.isArray(l)?eC(l,o):o===l}function eC(o,l){return Array.isArray(l)?o.length===l.length&&o.every((d,h)=>d===l[h]):o.length===1&&o[0]===l}function aL(o,l){if(o.startsWith("/"))return o;if(!o)return l;const d=l.split("/"),h=o.split("/");let g=d.length-1,p,b;for(p=0;p<h.length;p++)if(b=h[p],!(g===1||b==="."))if(b==="..")g--;else break;return d.slice(0,g).join("/")+"/"+h.slice(p-(p===h.length?1:0)).join("/")}var Ea;(function(o){o.pop="pop",o.push="push"})(Ea||(Ea={}));var ga;(function(o){o.back="back",o.forward="forward",o.unknown=""})(ga||(ga={}));function lL(o){if(!o)if(Gr){const l=document.querySelector("base");o=l&&l.getAttribute("href")||"/",o=o.replace(/^\w+:\/\/[^\/]+/,"")}else o="/";return o[0]!=="/"&&o[0]!=="#"&&(o="/"+o),oL(o)}const cL=/^[^#]+#/;function dL(o,l){return o.replace(cL,"#")+l}function uL(o,l){const d=document.documentElement.getBoundingClientRect(),h=o.getBoundingClientRect();return{behavior:l.behavior,left:h.left-d.left-(l.left||0),top:h.top-d.top-(l.top||0)}}const jc=()=>({left:window.pageXOffset,top:window.pageYOffset});function hL(o){let l;if("el"in o){const d=o.el,h=typeof d=="string"&&d.startsWith("#"),g=typeof d=="string"?h?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!g)return;l=uL(g,o)}else l=o;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function tC(o,l){return(history.state?history.state.position-l:-1)+o}const eg=new Map;function gL(o,l){eg.set(o,l)}function fL(o){const l=eg.get(o);return eg.delete(o),l}let mL=()=>location.protocol+"//"+location.host;function e1(o,l){const{pathname:d,search:h,hash:g}=l,p=o.indexOf("#");if(p>-1){let _=g.includes(o.slice(p))?o.slice(p).length:1,k=g.slice(_);return k[0]!=="/"&&(k="/"+k),X_(k,"")}return X_(d,o)+h+g}function pL(o,l,d,h){let g=[],p=[],b=null;const _=({state:v})=>{const E=e1(o,location),N=d.value,F=l.value;let j=0;if(v){if(d.value=E,l.value=v,b&&b===N){b=null;return}j=F?v.position-F.position:0}else h(E);g.forEach(M=>{M(d.value,N,{delta:j,type:Ea.pop,direction:j?j>0?ga.forward:ga.back:ga.unknown})})};function k(){b=d.value}function A(v){g.push(v);const E=()=>{const N=g.indexOf(v);N>-1&&g.splice(N,1)};return p.push(E),E}function x(){const{history:v}=window;!v.state||v.replaceState(mt({},v.state,{scroll:jc()}),"")}function y(){for(const v of p)v();p=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",x)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",x),{pauseListeners:k,listen:A,destroy:y}}function nC(o,l,d,h=!1,g=!1){return{back:o,current:l,forward:d,replaced:h,position:window.history.length,scroll:g?jc():null}}function bL(o){const{history:l,location:d}=window,h={value:e1(o,d)},g={value:l.state};g.value||p(h.value,{back:null,current:h.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function p(k,A,x){const y=o.indexOf("#"),v=y>-1?(d.host&&document.querySelector("base")?o:o.slice(y))+k:mL()+o+k;try{l[x?"replaceState":"pushState"](A,"",v),g.value=A}catch(E){console.error(E),d[x?"replace":"assign"](v)}}function b(k,A){const x=mt({},l.state,nC(g.value.back,k,g.value.forward,!0),A,{position:g.value.position});p(k,x,!0),h.value=k}function _(k,A){const x=mt({},g.value,l.state,{forward:k,scroll:jc()});p(x.current,x,!0);const y=mt({},nC(h.value,k,null),{position:x.position+1},A);p(k,y,!1),h.value=k}return{location:h,state:g,push:_,replace:b}}function kL(o){o=lL(o);const l=bL(o),d=pL(o,l.state,l.location,l.replace);function h(p,b=!0){b||d.pauseListeners(),history.go(p)}const g=mt({location:"",base:o,go:h,createHref:dL.bind(null,o)},l,d);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>l.state.value}),g}function wL(o){return o=location.host?o||location.pathname+location.search:"",o.includes("#")||(o+="#"),kL(o)}function vL(o){return typeof o=="string"||o&&typeof o=="object"}function t1(o){return typeof o=="string"||typeof o=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},n1=ws("nf");var oC;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(oC||(oC={}));function as(o,l){return mt(new Error,{type:o,[n1]:!0},l)}function ri(o,l){return o instanceof Error&&n1 in o&&(l==null||!!(o.type&l))}const iC="[^/]+?",_L={sensitive:!1,strict:!1,start:!0,end:!0},CL=/[.+*?^${}()[\]/\\]/g;function AL(o,l){const d=mt({},_L,l),h=[];let g=d.start?"^":"";const p=[];for(const A of o){const x=A.length?[]:[90];d.strict&&!A.length&&(g+="/");for(let y=0;y<A.length;y++){const v=A[y];let E=40+(d.sensitive?.25:0);if(v.type===0)y||(g+="/"),g+=v.value.replace(CL,"\\$&"),E+=40;else if(v.type===1){const{value:N,repeatable:F,optional:j,regexp:M}=v;p.push({name:N,repeatable:F,optional:j});const T=M||iC;if(T!==iC){E+=10;try{new RegExp(`(${T})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${N}" (${T}): `+G.message)}}let R=F?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;y||(R=j&&A.length<2?`(?:/${R})`:"/"+R),j&&(R+="?"),g+=R,E+=20,j&&(E+=-8),F&&(E+=-20),T===".*"&&(E+=-50)}x.push(E)}h.push(x)}if(d.strict&&d.end){const A=h.length-1;h[A][h[A].length-1]+=.7000000000000001}d.strict||(g+="/?"),d.end?g+="$":d.strict&&(g+="(?:/|$)");const b=new RegExp(g,d.sensitive?"":"i");function _(A){const x=A.match(b),y={};if(!x)return null;for(let v=1;v<x.length;v++){const E=x[v]||"",N=p[v-1];y[N.name]=E&&N.repeatable?E.split("/"):E}return y}function k(A){let x="",y=!1;for(const v of o){(!y||!x.endsWith("/"))&&(x+="/"),y=!1;for(const E of v)if(E.type===0)x+=E.value;else if(E.type===1){const{value:N,repeatable:F,optional:j}=E,M=N in A?A[N]:"";if(Array.isArray(M)&&!F)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const T=Array.isArray(M)?M.join("/"):M;if(!T)if(j)v.length<2&&(x.endsWith("/")?x=x.slice(0,-1):y=!0);else throw new Error(`Missing required param "${N}"`);x+=T}}return x}return{re:b,score:h,keys:p,parse:_,stringify:k}}function yL(o,l){let d=0;for(;d<o.length&&d<l.length;){const h=l[d]-o[d];if(h)return h;d++}return o.length<l.length?o.length===1&&o[0]===40+40?-1:1:o.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function xL(o,l){let d=0;const h=o.score,g=l.score;for(;d<h.length&&d<g.length;){const p=yL(h[d],g[d]);if(p)return p;d++}return g.length-h.length}const EL={type:0,value:""},SL=/[a-zA-Z0-9_]/;function DL(o){if(!o)return[[]];if(o==="/")return[[EL]];if(!o.startsWith("/"))throw new Error(`Invalid path "${o}"`);function l(E){throw new Error(`ERR (${d})/"${A}": ${E}`)}let d=0,h=d;const g=[];let p;function b(){p&&g.push(p),p=[]}let _=0,k,A="",x="";function y(){!A||(d===0?p.push({type:0,value:A}):d===1||d===2||d===3?(p.length>1&&(k==="*"||k==="+")&&l(`A repeatable param (${A}) must be alone in its segment. eg: '/:ids+.`),p.push({type:1,value:A,regexp:x,repeatable:k==="*"||k==="+",optional:k==="*"||k==="?"})):l("Invalid state to consume buffer"),A="")}function v(){A+=k}for(;_<o.length;){if(k=o[_++],k==="\\"&&d!==2){h=d,d=4;continue}switch(d){case 0:k==="/"?(A&&y(),b()):k===":"?(y(),d=1):v();break;case 4:v(),d=h;break;case 1:k==="("?d=2:SL.test(k)?v():(y(),d=0,k!=="*"&&k!=="?"&&k!=="+"&&_--);break;case 2:k===")"?x[x.length-1]=="\\"?x=x.slice(0,-1)+k:d=3:x+=k;break;case 3:y(),d=0,k!=="*"&&k!=="?"&&k!=="+"&&_--,x="";break;default:l("Unknown state");break}}return d===2&&l(`Unfinished custom RegExp for param "${A}"`),y(),b(),g}function IL(o,l,d){const h=AL(DL(o.path),d),g=mt(h,{record:o,parent:l,children:[],alias:[]});return l&&!g.record.aliasOf==!l.record.aliasOf&&l.children.push(g),g}function TL(o,l){const d=[],h=new Map;l=sC({strict:!1,end:!0,sensitive:!1},l);function g(x){return h.get(x)}function p(x,y,v){const E=!v,N=BL(x);N.aliasOf=v&&v.record;const F=sC(l,x),j=[N];if("alias"in x){const R=typeof x.alias=="string"?[x.alias]:x.alias;for(const G of R)j.push(mt({},N,{components:v?v.record.components:N.components,path:G,aliasOf:v?v.record:N}))}let M,T;for(const R of j){const{path:G}=R;if(y&&G[0]!=="/"){const U=y.record.path,Z=U[U.length-1]==="/"?"":"/";R.path=y.record.path+(G&&Z+G)}if(M=IL(R,y,F),v?v.alias.push(M):(T=T||M,T!==M&&T.alias.push(M),E&&x.name&&!rC(M)&&b(x.name)),"children"in N){const U=N.children;for(let Z=0;Z<U.length;Z++)p(U[Z],M,v&&v.children[Z])}v=v||M,k(M)}return T?()=>{b(T)}:ha}function b(x){if(t1(x)){const y=h.get(x);y&&(h.delete(x),d.splice(d.indexOf(y),1),y.children.forEach(b),y.alias.forEach(b))}else{const y=d.indexOf(x);y>-1&&(d.splice(y,1),x.record.name&&h.delete(x.record.name),x.children.forEach(b),x.alias.forEach(b))}}function _(){return d}function k(x){let y=0;for(;y<d.length&&xL(x,d[y])>=0&&(x.record.path!==d[y].record.path||!o1(x,d[y]));)y++;d.splice(y,0,x),x.record.name&&!rC(x)&&h.set(x.record.name,x)}function A(x,y){let v,E={},N,F;if("name"in x&&x.name){if(v=h.get(x.name),!v)throw as(1,{location:x});F=v.record.name,E=mt(ML(y.params,v.keys.filter(T=>!T.optional).map(T=>T.name)),x.params),N=v.stringify(E)}else if("path"in x)N=x.path,v=d.find(T=>T.re.test(N)),v&&(E=v.parse(N),F=v.record.name);else{if(v=y.name?h.get(y.name):d.find(T=>T.re.test(y.path)),!v)throw as(1,{location:x,currentLocation:y});F=v.record.name,E=mt({},y.params,x.params),N=v.stringify(E)}const j=[];let M=v;for(;M;)j.unshift(M.record),M=M.parent;return{name:F,path:N,params:E,matched:j,meta:PL(j)}}return o.forEach(x=>p(x)),{addRoute:p,resolve:A,removeRoute:b,getRoutes:_,getRecordMatcher:g}}function ML(o,l){const d={};for(const h of l)h in o&&(d[h]=o[h]);return d}function BL(o){return{path:o.path,redirect:o.redirect,name:o.name,meta:o.meta||{},aliasOf:void 0,beforeEnter:o.beforeEnter,props:NL(o),children:o.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in o?o.components||{}:{default:o.component}}}function NL(o){const l={},d=o.props||!1;if("component"in o)l.default=d;else for(const h in o.components)l[h]=typeof d=="boolean"?d:d[h];return l}function rC(o){for(;o;){if(o.record.aliasOf)return!0;o=o.parent}return!1}function PL(o){return o.reduce((l,d)=>mt(l,d.meta),{})}function sC(o,l){const d={};for(const h in o)d[h]=h in l?l[h]:o[h];return d}function o1(o,l){return l.children.some(d=>d===o||o1(o,d))}const i1=/#/g,zL=/&/g,LL=/\//g,OL=/=/g,RL=/\?/g,r1=/\+/g,FL=/%5B/g,jL=/%5D/g,s1=/%5E/g,VL=/%60/g,a1=/%7B/g,HL=/%7C/g,l1=/%7D/g,UL=/%20/g;function of(o){return encodeURI(""+o).replace(HL,"|").replace(FL,"[").replace(jL,"]")}function $L(o){return of(o).replace(a1,"{").replace(l1,"}").replace(s1,"^")}function tg(o){return of(o).replace(r1,"%2B").replace(UL,"+").replace(i1,"%23").replace(zL,"%26").replace(VL,"`").replace(a1,"{").replace(l1,"}").replace(s1,"^")}function WL(o){return tg(o).replace(OL,"%3D")}function qL(o){return of(o).replace(i1,"%23").replace(RL,"%3F")}function GL(o){return o==null?"":qL(o).replace(LL,"%2F")}function pc(o){try{return decodeURIComponent(""+o)}catch{}return""+o}function KL(o){const l={};if(o===""||o==="?")return l;const h=(o[0]==="?"?o.slice(1):o).split("&");for(let g=0;g<h.length;++g){const p=h[g].replace(r1," "),b=p.indexOf("="),_=pc(b<0?p:p.slice(0,b)),k=b<0?null:pc(p.slice(b+1));if(_ in l){let A=l[_];Array.isArray(A)||(A=l[_]=[A]),A.push(k)}else l[_]=k}return l}function aC(o){let l="";for(let d in o){const h=o[d];if(d=WL(d),h==null){h!==void 0&&(l+=(l.length?"&":"")+d);continue}(Array.isArray(h)?h.map(p=>p&&tg(p)):[h&&tg(h)]).forEach(p=>{p!==void 0&&(l+=(l.length?"&":"")+d,p!=null&&(l+="="+p))})}return l}function YL(o){const l={};for(const d in o){const h=o[d];h!==void 0&&(l[d]=Array.isArray(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return l}function Zs(){let o=[];function l(h){return o.push(h),()=>{const g=o.indexOf(h);g>-1&&o.splice(g,1)}}function d(){o=[]}return{add:l,list:()=>o,reset:d}}function ci(o,l,d,h,g){const p=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((b,_)=>{const k=y=>{y===!1?_(as(4,{from:d,to:l})):y instanceof Error?_(y):vL(y)?_(as(2,{from:l,to:y})):(p&&h.enterCallbacks[g]===p&&typeof y=="function"&&p.push(y),b())},A=o.call(h&&h.instances[g],l,d,k);let x=Promise.resolve(A);o.length<3&&(x=x.then(k)),x.catch(y=>_(y))})}function kh(o,l,d,h){const g=[];for(const p of o)for(const b in p.components){let _=p.components[b];if(!(l!=="beforeRouteEnter"&&!p.instances[b]))if(QL(_)){const A=(_.__vccOpts||_)[l];A&&g.push(ci(A,d,h,p,b))}else{let k=_();g.push(()=>k.then(A=>{if(!A)return Promise.reject(new Error(`Couldn't resolve component "${b}" at "${p.path}"`));const x=tL(A)?A.default:A;p.components[b]=x;const v=(x.__vccOpts||x)[l];return v&&ci(v,d,h,p,b)()}))}}return g}function QL(o){return typeof o=="object"||"displayName"in o||"props"in o||"__vccOpts"in o}function lC(o){const l=Xe(nf),d=Xe(Jy),h=q(()=>l.resolve(nn(o.to))),g=q(()=>{const{matched:k}=h.value,{length:A}=k,x=k[A-1],y=d.matched;if(!x||!y.length)return-1;const v=y.findIndex(ss.bind(null,x));if(v>-1)return v;const E=cC(k[A-2]);return A>1&&cC(x)===E&&y[y.length-1].path!==E?y.findIndex(ss.bind(null,k[A-2])):v}),p=q(()=>g.value>-1&&eO(d.params,h.value.params)),b=q(()=>g.value>-1&&g.value===d.matched.length-1&&Xy(d.params,h.value.params));function _(k={}){return XL(k)?l[nn(o.replace)?"replace":"push"](nn(o.to)).catch(ha):Promise.resolve()}return{route:h,href:q(()=>h.value.href),isActive:p,isExactActive:b,navigate:_}}const ZL=dr({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lC,setup(o,{slots:l}){const d=Zt(lC(o)),{options:h}=Xe(nf),g=q(()=>({[dC(o.activeClass,h.linkActiveClass,"router-link-active")]:d.isActive,[dC(o.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const p=l.default&&l.default(d);return o.custom?p:Io("a",{"aria-current":d.isExactActive?o.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:g.value},p)}}}),JL=ZL;function XL(o){if(!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)&&!o.defaultPrevented&&!(o.button!==void 0&&o.button!==0)){if(o.currentTarget&&o.currentTarget.getAttribute){const l=o.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return o.preventDefault&&o.preventDefault(),!0}}function eO(o,l){for(const d in l){const h=l[d],g=o[d];if(typeof h=="string"){if(h!==g)return!1}else if(!Array.isArray(g)||g.length!==h.length||h.some((p,b)=>p!==g[b]))return!1}return!0}function cC(o){return o?o.aliasOf?o.aliasOf.path:o.path:""}const dC=(o,l,d)=>o!=null?o:l!=null?l:d,tO=dr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(o,{attrs:l,slots:d}){const h=Xe(Xh),g=q(()=>o.route||h.value),p=Xe(J_,0),b=q(()=>g.value.matched[p]);Ht(J_,p+1),Ht(eL,b),Ht(Xh,g);const _=ve();return et(()=>[_.value,b.value,o.name],([k,A,x],[y,v,E])=>{A&&(A.instances[x]=k,v&&v!==A&&k&&k===y&&(A.leaveGuards.size||(A.leaveGuards=v.leaveGuards),A.updateGuards.size||(A.updateGuards=v.updateGuards))),k&&A&&(!v||!ss(A,v)||!y)&&(A.enterCallbacks[x]||[]).forEach(N=>N(k))},{flush:"post"}),()=>{const k=g.value,A=b.value,x=A&&A.components[o.name],y=o.name;if(!x)return uC(d.default,{Component:x,route:k});const v=A.props[o.name],E=v?v===!0?k.params:typeof v=="function"?v(k):v:null,F=Io(x,mt({},E,l,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(A.instances[y]=null)},ref:_}));return uC(d.default,{Component:F,route:k})||F}}});function uC(o,l){if(!o)return null;const d=o(l);return d.length===1?d[0]:d}const nO=tO;function oO(o){const l=TL(o.routes,o),d=o.parseQuery||KL,h=o.stringifyQuery||aC,g=o.history,p=Zs(),b=Zs(),_=Zs(),k=wg(ii);let A=ii;Gr&&o.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const x=ph.bind(null,H=>""+H),y=ph.bind(null,GL),v=ph.bind(null,pc);function E(H,ce){let de,oe;return t1(H)?(de=l.getRecordMatcher(H),oe=ce):oe=H,l.addRoute(oe,de)}function N(H){const ce=l.getRecordMatcher(H);ce&&l.removeRoute(ce)}function F(){return l.getRoutes().map(H=>H.record)}function j(H){return!!l.getRecordMatcher(H)}function M(H,ce){if(ce=mt({},ce||k.value),typeof H=="string"){const De=bh(d,H,ce.path),P=l.resolve({path:De.path},ce),$=g.createHref(De.fullPath);return mt(De,P,{params:v(P.params),hash:pc(De.hash),redirectedFrom:void 0,href:$})}let de;if("path"in H)de=mt({},H,{path:bh(d,H.path,ce.path).path});else{const De=mt({},H.params);for(const P in De)De[P]==null&&delete De[P];de=mt({},H,{params:y(H.params)}),ce.params=y(ce.params)}const oe=l.resolve(de,ce),J=H.hash||"";oe.params=x(v(oe.params));const Ge=iL(h,mt({},H,{hash:$L(J),path:oe.path})),he=g.createHref(Ge);return mt({fullPath:Ge,hash:J,query:h===aC?YL(H.query):H.query||{}},oe,{redirectedFrom:void 0,href:he})}function T(H){return typeof H=="string"?bh(d,H,k.value.path):mt({},H)}function R(H,ce){if(A!==H)return as(8,{from:ce,to:H})}function G(H){return L(H)}function U(H){return G(mt(T(H),{replace:!0}))}function Z(H){const ce=H.matched[H.matched.length-1];if(ce&&ce.redirect){const{redirect:de}=ce;let oe=typeof de=="function"?de(H):de;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=T(oe):{path:oe},oe.params={}),mt({query:H.query,hash:H.hash,params:H.params},oe)}}function L(H,ce){const de=A=M(H),oe=k.value,J=H.state,Ge=H.force,he=H.replace===!0,De=Z(de);if(De)return L(mt(T(De),{state:J,force:Ge,replace:he}),ce||de);const P=de;P.redirectedFrom=ce;let $;return!Ge&&rL(h,oe,de)&&($=as(16,{to:P,from:oe}),Rt(oe,oe,!0,!1)),($?Promise.resolve($):W(P,oe)).catch(ee=>ri(ee)?ri(ee,2)?ee:Ke(ee):Ae(ee,P,oe)).then(ee=>{if(ee){if(ri(ee,2))return L(mt(T(ee.to),{state:J,force:Ge,replace:he}),ce||P)}else ee=Q(P,oe,!0,he,J);return Y(P,oe,ee),ee})}function V(H,ce){const de=R(H,ce);return de?Promise.reject(de):Promise.resolve()}function W(H,ce){let de;const[oe,J,Ge]=iO(H,ce);de=kh(oe.reverse(),"beforeRouteLeave",H,ce);for(const De of oe)De.leaveGuards.forEach(P=>{de.push(ci(P,H,ce))});const he=V.bind(null,H,ce);return de.push(he),Hr(de).then(()=>{de=[];for(const De of p.list())de.push(ci(De,H,ce));return de.push(he),Hr(de)}).then(()=>{de=kh(J,"beforeRouteUpdate",H,ce);for(const De of J)De.updateGuards.forEach(P=>{de.push(ci(P,H,ce))});return de.push(he),Hr(de)}).then(()=>{de=[];for(const De of H.matched)if(De.beforeEnter&&!ce.matched.includes(De))if(Array.isArray(De.beforeEnter))for(const P of De.beforeEnter)de.push(ci(P,H,ce));else de.push(ci(De.beforeEnter,H,ce));return de.push(he),Hr(de)}).then(()=>(H.matched.forEach(De=>De.enterCallbacks={}),de=kh(Ge,"beforeRouteEnter",H,ce),de.push(he),Hr(de))).then(()=>{de=[];for(const De of b.list())de.push(ci(De,H,ce));return de.push(he),Hr(de)}).catch(De=>ri(De,8)?De:Promise.reject(De))}function Y(H,ce,de){for(const oe of _.list())oe(H,ce,de)}function Q(H,ce,de,oe,J){const Ge=R(H,ce);if(Ge)return Ge;const he=ce===ii,De=Gr?history.state:{};de&&(oe||he?g.replace(H.fullPath,mt({scroll:he&&De&&De.scroll},J)):g.push(H.fullPath,J)),k.value=H,Rt(H,ce,de,he),Ke()}let X;function se(){X=g.listen((H,ce,de)=>{const oe=M(H),J=Z(oe);if(J){L(mt(J,{replace:!0}),oe).catch(ha);return}A=oe;const Ge=k.value;Gr&&gL(tC(Ge.fullPath,de.delta),jc()),W(oe,Ge).catch(he=>ri(he,12)?he:ri(he,2)?(L(he.to,oe).then(De=>{ri(De,20)&&!de.delta&&de.type===Ea.pop&&g.go(-1,!1)}).catch(ha),Promise.reject()):(de.delta&&g.go(-de.delta,!1),Ae(he,oe,Ge))).then(he=>{he=he||Q(oe,Ge,!1),he&&(de.delta?g.go(-de.delta,!1):de.type===Ea.pop&&ri(he,20)&&g.go(-1,!1)),Y(oe,Ge,he)}).catch(ha)})}let ae=Zs(),pe=Zs(),ke;function Ae(H,ce,de){Ke(H);const oe=pe.list();return oe.length?oe.forEach(J=>J(H,ce,de)):console.error(H),Promise.reject(H)}function Ie(){return ke&&k.value!==ii?Promise.resolve():new Promise((H,ce)=>{ae.add([H,ce])})}function Ke(H){return ke||(ke=!H,se(),ae.list().forEach(([ce,de])=>H?de(H):ce()),ae.reset()),H}function Rt(H,ce,de,oe){const{scrollBehavior:J}=o;if(!Gr||!J)return Promise.resolve();const Ge=!de&&fL(tC(H.fullPath,0))||(oe||!de)&&history.state&&history.state.scroll||null;return An().then(()=>J(H,ce,Ge)).then(he=>he&&hL(he)).catch(he=>Ae(he,H,ce))}const St=H=>g.go(H);let Ne;const _t=new Set;return{currentRoute:k,addRoute:E,removeRoute:N,hasRoute:j,getRoutes:F,resolve:M,options:o,push:G,replace:U,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:p.add,beforeResolve:b.add,afterEach:_.add,onError:pe.add,isReady:Ie,install(H){const ce=this;H.component("RouterLink",JL),H.component("RouterView",nO),H.config.globalProperties.$router=ce,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(k)}),Gr&&!Ne&&k.value===ii&&(Ne=!0,G(g.location).catch(J=>{}));const de={};for(const J in ii)de[J]=q(()=>k.value[J]);H.provide(nf,ce),H.provide(Jy,Zt(de)),H.provide(Xh,k);const oe=H.unmount;_t.add(H),H.unmount=function(){_t.delete(H),_t.size<1&&(A=ii,X&&X(),k.value=ii,Ne=!1,ke=!1),oe()}}}}function Hr(o){return o.reduce((l,d)=>l.then(()=>d()),Promise.resolve())}function iO(o,l){const d=[],h=[],g=[],p=Math.max(l.matched.length,o.matched.length);for(let b=0;b<p;b++){const _=l.matched[b];_&&(o.matched.find(A=>ss(A,_))?h.push(_):d.push(_));const k=o.matched[b];k&&(l.matched.find(A=>ss(A,k))||g.push(k))}return[d,h,g]}const rO=(o,l)=>{const d=o.__vccOpts||o;for(const[h,g]of l)d[h]=g;return d};const c1=tt({name:"VLabel",props:{text:String,...ln()},setup(o,l){let{slots:d}=l;return rt(()=>{var h;return z("label",{class:"v-label"},[o.text,(h=d.default)==null?void 0:h.call(d)])}),{}}}),Kl=tt({name:"VFieldLabel",props:{floating:Boolean},setup(o,l){let{slots:d}=l;return rt(()=>z(c1,{class:["v-field-label",{"v-field-label--floating":o.floating}],"aria-hidden":o.floating||void 0},d)),{}}}),sO=qe({focused:Boolean},"focus");function aO(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go();const d=sn(o,"focused"),h=q(()=>({[`${l}--focused`]:d.value}));function g(){d.value=!0}function p(){d.value=!1}return{focusClasses:h,isFocused:d,focus:g,blur:p}}const lO=["underlined","outlined","filled","solo","plain"],d1=qe({appendInnerIcon:vt,bgColor:String,clearable:Boolean,clearIcon:{type:vt,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:vt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:o=>lO.includes(o)},...ln(),...Dy()},"v-field"),u1=Jn()({name:"VField",inheritAttrs:!1,props:{id:String,...sO(),...d1()},emits:{"click:clear":o=>!0,"click:control":o=>!0,"update:focused":o=>!0,"update:modelValue":o=>!0},setup(o,l){let{attrs:d,emit:h,slots:g}=l;const{themeClasses:p}=yn(o),{loaderClasses:b}=Iy(o),{focusClasses:_,isFocused:k,focus:A,blur:x}=aO(o),y=q(()=>o.dirty||o.active),v=q(()=>!o.singleLine&&!!(o.label||g.label)),E=ho(),N=q(()=>o.id||`input-${E}`),F=ve(),j=ve(),M=ve(),{backgroundColorClasses:T,backgroundColorStyles:R}=$o(Fe(o,"bgColor")),{textColorClasses:G,textColorStyles:U}=vi(q(()=>y.value&&k.value&&!o.error&&!o.disabled?o.color:void 0));et(y,V=>{if(v.value){const W=F.value.$el,Y=j.value.$el,Q=Wg(W),X=Y.getBoundingClientRect(),se=X.x-Q.x,ae=X.y-Q.y-(Q.height/2-X.height/2),pe=X.width/.75,ke=Math.abs(pe-Q.width)>1?{maxWidth:Re(pe)}:void 0,Ae=parseFloat(getComputedStyle(W).transitionDuration)*1e3||150,Ie=parseFloat(getComputedStyle(Y).getPropertyValue("--v-field-label-scale"));W.style.visibility="visible",Y.style.visibility="hidden",W.animate([{transform:"translate(0)"},{transform:`translate(${se}px, ${ae}px) scale(${Ie})`,...ke}],{duration:Ae,easing:hc,direction:V?"normal":"reverse"}).finished.then(()=>{W.style.removeProperty("visibility"),Y.style.removeProperty("visibility")})}},{flush:"post"});const Z=q(()=>({isActive:y,isFocused:k,controlRef:M,blur:x,focus:A}));function L(V){V.target!==document.activeElement&&V.preventDefault(),h("click:control",V)}return rt(()=>{var V,W,Y;const Q=o.variant==="outlined",X=g["prepend-inner"]||o.prependInnerIcon,se=!!(o.clearable||g.clear),ae=!!(g["append-inner"]||o.appendInnerIcon||se),pe=g.label?g.label({label:o.label,props:{for:N.value}}):o.label;return z("div",xt({class:["v-field",{"v-field--active":y.value,"v-field--appended":ae,"v-field--disabled":o.disabled,"v-field--dirty":o.dirty,"v-field--error":o.error,"v-field--has-background":!!o.bgColor,"v-field--persistent-clear":o.persistentClear,"v-field--prepended":X,"v-field--reverse":o.reverse,"v-field--single-line":o.singleLine,"v-field--has-label":!!pe,[`v-field--variant-${o.variant}`]:!0},p.value,T.value,_.value,b.value],style:[R.value,U.value],onClick:L},d),[z("div",{class:"v-field__overlay"},null),z(h3,{name:"v-field",active:o.loading,color:o.error?"error":o.color},{default:g.loader}),X&&z("div",{key:"prepend",class:"v-field__prepend-inner"},[o.prependInnerIcon&&z(it,{key:"prepend-icon",onClick:d["onClick:prependInner"],icon:o.prependInnerIcon},null),(V=g["prepend-inner"])==null?void 0:V.call(g,Z.value)]),z("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(o.variant)&&v.value&&z(Kl,{key:"floating-label",ref:j,class:[G.value],floating:!0},{default:()=>[pe]}),z(Kl,{ref:F,for:N.value},{default:()=>[pe]}),(W=g.default)==null?void 0:W.call(g,{...Z.value,props:{id:N.value,class:"v-field__input"},focus:A,blur:x})]),se&&z(Ly,{key:"clear"},{default:()=>[jn(z("div",{class:"v-field__clearable"},[g.clear?g.clear():z(it,{onClick:ke=>h("click:clear",ke),icon:o.clearIcon},null)]),[[Ai,o.dirty]])]}),ae&&z("div",{key:"append",class:"v-field__append-inner"},[(Y=g["append-inner"])==null?void 0:Y.call(g,Z.value),o.appendInnerIcon&&z(it,{key:"append-icon",onClick:d["onClick:appendInner"],icon:o.appendInnerIcon},null)]),z("div",{class:["v-field__outline",G.value]},[Q&&z($e,null,[z("div",{class:"v-field__outline__start"},null),v.value&&z("div",{class:"v-field__outline__notch"},[z(Kl,{ref:j,floating:!0},{default:()=>[pe]})]),z("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(o.variant)&&v.value&&z(Kl,{ref:j,floating:!0},{default:()=>[pe]})])])}),{controlRef:M}}});function cO(o){return hs(o,Object.keys(u1.props))}const dO=tt({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...gs({transition:{component:zy,leaveAbsolute:!0,group:!0}})},setup(o,l){let{slots:d}=l;const h=q(()=>gi(o.messages)),{textColorClasses:g,textColorStyles:p}=vi(q(()=>o.color));return rt(()=>z(Xi,{transition:o.transition,tag:"div",class:["v-messages",g.value],style:p.value},{default:()=>[o.active&&h.value.map((b,_)=>z("div",{class:"v-messages__message",key:`${_}-${h.value}`},[d.message?d.message({message:b}):b]))]})),{}}}),uO=Symbol.for("vuetify:form");function hO(){return Xe(uO,null)}const gO=qe({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function fO(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Go(),d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ho();const h=sn(o,"modelValue"),g=q(()=>{var R;return(R=o.validationValue)!=null?R:h.value}),p=hO(),b=ve([]),_=ve(!0),k=q(()=>!!(gi(h.value===""?null:h.value).length||gi(g.value===""?null:g.value).length)),A=q(()=>!!(o.disabled||p!=null&&p.isDisabled.value)),x=q(()=>!!(o.readonly||p!=null&&p.isReadonly.value)),y=q(()=>o.errorMessages.length?gi(o.errorMessages):b.value),v=q(()=>o.error||y.value.length?!1:o.rules.length&&_.value?null:!0),E=ve(!1),N=q(()=>({[`${l}--error`]:v.value===!1,[`${l}--dirty`]:k.value,[`${l}--disabled`]:A.value,[`${l}--readonly`]:x.value})),F=q(()=>{var R;return(R=o.name)!=null?R:nn(d)});Ba(()=>{p==null||p.register(F.value,T,j,M,v)}),Vn(()=>{p==null||p.unregister(F.value)}),et(g,()=>{g.value!=null&&T()});function j(){M(),h.value=null}function M(){_.value=!0,b.value=[]}async function T(){const R=[];E.value=!0;for(const G of o.rules){if(R.length>=(o.maxErrors||1))break;const Z=await(typeof G=="function"?G:()=>G)(g.value);if(Z!==!0){if(typeof Z!="string"){console.warn(`${Z} is not a valid value. Rule functions must return boolean true or a string.`);continue}R.push(Z)}}return b.value=R,E.value=!1,_.value=!1,b.value}return{errorMessages:y,isDirty:k,isDisabled:A,isReadonly:x,isPristine:_,isValid:v,isValidating:E,reset:j,resetValidation:M,validate:T,validationClasses:N}}const h1=qe({id:String,appendIcon:vt,prependIcon:vt,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:o=>["horizontal","vertical"].includes(o)},...yi(),...gO()}),g1=Jn()({name:"VInput",props:{...h1()},emits:{"update:modelValue":o=>!0},setup(o,l){let{attrs:d,slots:h,emit:g}=l;const{densityClasses:p}=xi(o),b=ho(),_=q(()=>o.id||`input-${b}`),{errorMessages:k,isDirty:A,isDisabled:x,isReadonly:y,isPristine:v,isValid:E,isValidating:N,reset:F,resetValidation:j,validate:M,validationClasses:T}=fO(o,"v-input",_),R=q(()=>({id:_,isDirty:A,isDisabled:x,isReadonly:y,isPristine:v,isValid:E,isValidating:N,reset:F,resetValidation:j,validate:M}));return rt(()=>{var G,U,Z,L,V;const W=!!(h.prepend||o.prependIcon),Y=!!(h.append||o.appendIcon),Q=!!((G=o.messages)!=null&&G.length||k.value.length),X=!o.hideDetails||o.hideDetails==="auto"&&(Q||!!h.details);return z("div",{class:["v-input",`v-input--${o.direction}`,p.value,T.value]},[W&&z("div",{key:"prepend",class:"v-input__prepend"},[o.prependIcon&&z(it,{key:"prepend-icon",onClick:d["onClick:prepend"],icon:o.prependIcon},null),(U=h.prepend)==null?void 0:U.call(h,R.value)]),h.default&&z("div",{class:"v-input__control"},[(Z=h.default)==null?void 0:Z.call(h,R.value)]),Y&&z("div",{key:"append",class:"v-input__append"},[(L=h.append)==null?void 0:L.call(h,R.value),o.appendIcon&&z(it,{key:"append-icon",onClick:d["onClick:append"],icon:o.appendIcon},null)]),X&&z("div",{class:"v-input__details"},[z(dO,{active:Q,messages:k.value.length>0?k.value:o.messages},{message:h.message}),(V=h.details)==null?void 0:V.call(h,R.value)])])}),{reset:F,resetValidation:j,validate:M}}});function mO(o){return hs(o,Object.keys(g1.props))}const pO=tt({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...gs({transition:{component:zy}})},setup(o,l){let{slots:d}=l;const h=q(()=>o.max?`${o.value} / ${o.max}`:String(o.value));return rt(()=>z(Xi,{transition:o.transition},{default:()=>[jn(z("div",{class:"v-counter"},[d.default?d.default({counter:h.value,max:o.max,value:o.value}):h.value]),[[Ai,o.active]])]})),{}}}),wh=Symbol("Forwarded refs");function rf(o){for(var l=arguments.length,d=new Array(l>1?l-1:0),h=1;h<l;h++)d[h-1]=arguments[h];return o[wh]=d,new Proxy(o,{get(g,p){if(Reflect.has(g,p))return Reflect.get(g,p);for(const b of d)if(b.value&&Reflect.has(b.value,p)){const _=Reflect.get(b.value,p);return typeof _=="function"?_.bind(b.value):_}},getOwnPropertyDescriptor(g,p){const b=Reflect.getOwnPropertyDescriptor(g,p);if(b)return b;if(!(typeof p=="symbol"||p.startsWith("__"))){for(const _ of d){if(!_.value)continue;const k=Reflect.getOwnPropertyDescriptor(_.value,p);if(k)return k;if("_"in _.value&&"setupState"in _.value._){const A=Reflect.getOwnPropertyDescriptor(_.value._.setupState,p);if(A)return A}}for(const _ of d){let k=_.value&&Object.getPrototypeOf(_.value);for(;k;){const A=Reflect.getOwnPropertyDescriptor(k,p);if(A)return A;k=Object.getPrototypeOf(k)}}for(const _ of d){const k=_.value&&_.value[wh];if(!k)continue;const A=k.slice();for(;A.length;){const x=A.shift(),y=Reflect.getOwnPropertyDescriptor(x.value,p);if(y)return y;const v=x.value&&x.value[wh];v&&A.push(...v)}}}}})}const bO=["color","file","time","date","datetime-local","week","month"],f1=Jn()({name:"VTextField",directives:{Intersect:hy},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...h1(),...d1()},emits:{"click:clear":o=>!0,"click:control":o=>!0,"click:input":o=>!0,"update:modelValue":o=>!0},setup(o,l){let{attrs:d,emit:h,slots:g}=l;const p=sn(o,"modelValue"),b=q(()=>{var T;return typeof o.counterValue=="function"?o.counterValue(p.value):((T=p.value)!=null?T:"").toString().length}),_=q(()=>{if(d.maxlength)return d.maxlength;if(!(!o.counter||typeof o.counter!="number"&&typeof o.counter!="string"))return o.counter});function k(T,R){var G,U;!o.autofocus||!T||(G=R[0].target)==null||(U=G.focus)==null||U.call(G)}const A=ve(),x=ve(),y=ve(!1),v=ve(),E=q(()=>bO.includes(o.type)||o.persistentPlaceholder||y.value),N=q(()=>o.messages.length?o.messages:y.value||o.persistentHint?o.hint:"");function F(){if(v.value!==document.activeElement){var T;(T=v.value)==null||T.focus()}y.value||(y.value=!0)}function j(T){F(),h("click:control",T)}function M(T){T.stopPropagation(),F(),An(()=>{p.value="",h("click:clear",T)})}return rt(()=>{const T=!!(g.counter||o.counter||o.counterValue),R=!!(T||g.details),[G,U]=QA(d),[{modelValue:Z,...L}]=mO(o),[V]=cO(o);return z(g1,xt({ref:A,modelValue:p.value,"onUpdate:modelValue":W=>p.value=W,class:["v-text-field",{"v-text-field--prefixed":o.prefix,"v-text-field--suffixed":o.suffix,"v-text-field--flush-details":["plain","underlined"].includes(o.variant)}],"onClick:prepend":d["onClick:prepend"],"onClick:append":d["onClick:append"]},G,L,{messages:N.value}),{...g,default:W=>{let{id:Y,isDisabled:Q,isDirty:X,isReadonly:se,isValid:ae}=W;return z(u1,xt({ref:x,onMousedown:pe=>{pe.target!==v.value&&pe.preventDefault()},"onClick:control":j,"onClick:clear":M,"onClick:prependInner":d["onClick:prependInner"],"onClick:appendInner":d["onClick:appendInner"],role:"textbox"},V,{id:Y.value,active:E.value||X.value,dirty:X.value||o.dirty,focused:y.value,error:ae.value===!1}),{...g,default:pe=>{let{props:{class:ke,...Ae}}=pe;const Ie=jn(z("input",xt({ref:v,"onUpdate:modelValue":Ke=>p.value=Ke,autofocus:o.autofocus,readonly:se.value,disabled:Q.value,name:o.name,placeholder:o.placeholder,size:1,type:o.type,onFocus:F,onBlur:()=>y.value=!1},Ae,U),null),[[Vg,p.value],[Ci("intersect"),{handler:k},null,{once:!0}]]);return z($e,null,[o.prefix&&z("span",{class:"v-text-field__prefix"},[o.prefix]),g.default?z("div",{class:ke,onClick:Ke=>h("click:input",Ke),"data-no-activator":""},[g.default(),Ie]):lo(Ie,{class:ke}),o.suffix&&z("span",{class:"v-text-field__suffix"},[o.suffix])])}})},details:R?W=>{var Y;return z($e,null,[(Y=g.details)==null?void 0:Y.call(g,W),T&&z($e,null,[z("span",null,null),z(pO,{active:o.persistentCounter||y.value,value:b.value,max:_.value},g.counter)])])}:void 0})}),rf({},A,x,v)}}),kO={};function wO(o,l){return Ue(),Zn(f1,{placeholder:"\u641C\u5C0B\u4F60\u7684\u7B46\u8A18","prepend-inner-icon":"mdi-magnify",class:"search-input",variant:"plain","bg-color":"searchInputBg","hide-details":"","single-line":""})}const vO=rO(kO,[["render",wO]]);const _O={class:"note-card"},CO={key:0,class:"note-card__active"},AO={class:"note-card__content"},yO={class:"note-card__content-header"},xO={class:"header-fav"},EO=["title"],SO={class:"note-card__content-body"},DO={class:"note-card__content-footer"},IO={class:"footer-tags"},TO={class:"tag-item"},MO={class:"footer-right"},BO={key:0,class:"footer-file"},NO=Et("mdi-paperclip"),PO={class:"footer-time"},zO={__name:"NoteCard",props:{data:Object,active:Boolean},setup(o){return(l,d)=>(Ue(),yt("div",_O,[o.active?(Ue(),yt("div",CO)):ro("",!0),Le("div",{class:Rn(["note-card__bg",{active:o.active}])},[Le("div",{class:Rn(["note-card__mask",{active:o.active}])},null,2)],2),Le("div",AO,[Le("div",yO,[Le("div",xO,[z(it,{size:"22",color:"tagText",onClick:d[0]||(d[0]=Hg(h=>l.$emit("onClickFav",o.data.id),["stop"]))},{default:Qe(()=>[Et(Qt(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1})]),Le("div",{class:"header-title",title:o.data.title},Qt(o.data.title),9,EO)]),Le("div",SO,Qt(o.data.content),1),Le("div",DO,[Le("div",IO,[(Ue(!0),yt($e,null,ui(o.data.tags,h=>(Ue(),yt("div",TO,Qt(h),1))),256))]),Le("div",MO,[o.data.file?(Ue(),yt("div",BO,[z(it,{size:"18"},{default:Qe(()=>[NO]),_:1})])):ro("",!0),Le("div",PO,Qt(o.data.time),1)])])])]))}};const LO={class:"note-summary__header"},OO=["title"],RO={class:"note-summary__content"},FO={class:"note-summary__footer"},jO={class:"footer-tags"},VO={class:"tag-item"},HO={class:"footer-right"},UO={key:0,class:"footer-file"},$O=Et("mdi-paperclip"),WO={class:"footer-time"},qO={__name:"NoteSummary",props:{data:Object,active:Boolean},setup(o){return(l,d)=>(Ue(),yt("div",{class:Rn(["note-summary",{active:o.active}])},[Le("div",LO,[z(it,{size:"22",color:"tagText",onClick:d[0]||(d[0]=Hg(h=>l.$emit("onClickFav",o.data.id),["stop"]))},{default:Qe(()=>[Et(Qt(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1}),Le("div",{class:"header-title",title:o.data.title},Qt(o.data.title),9,OO)]),Le("div",RO,Qt(o.data.content),1),Le("div",FO,[Le("div",jO,[(Ue(!0),yt($e,null,ui(o.data.tags,h=>(Ue(),yt("div",VO,Qt(h),1))),256))]),Le("div",HO,[o.data.file?(Ue(),yt("div",UO,[z(it,{size:"18"},{default:Qe(()=>[$O]),_:1})])):ro("",!0),Le("div",WO,Qt(o.data.time),1)])])],2))}};var Yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function m1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function GO(o){var l=o.default;if(typeof l=="function"){var d=function(){return l.apply(this,arguments)};d.prototype=l.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(o).forEach(function(h){var g=Object.getOwnPropertyDescriptor(o,h);Object.defineProperty(d,h,g.get?g:{enumerable:!0,get:function(){return o[h]}})}),d}var ng={exports:{}};(function(o,l){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Disc:"Disc","Document colors":"Document colors",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Huge:"Huge","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Small:"Small","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){o.exports=h()}(self,()=>(()=>{var d={3062:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const E=v},903:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const E=v},4717:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const E=v},9315:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=v},1896:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontcolor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CAEC,kBAAmB,CADnB,YAAa,CAEb,UACD,CAEA,8BACC,iBACD,CCNA,4CAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-button.ck-color-table__remove-color {
	display: flex;
	align-items: center;
	width: 100%;
}

label.ck.ck-color-grid__label {
	font-weight: unset;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck .ck-button.ck-color-table__remove-color {
	padding: calc(var(--ck-spacing-standard) / 2 ) var(--ck-spacing-standard);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;

	&:not(:focus) {
		border-bottom: 1px solid var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-standard);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-standard);
		}
	}
}

`],sourceRoot:""}]);const E=v},6007:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* The values should be synchronized with the "FONT_SIZE_PRESET_UNITS" object in the "/src/fontsize/utils.js" file. */

/* Styles should be prefixed with the \`.ck-content\` class.
See https://github.com/ckeditor/ckeditor5/issues/6636 */
.ck-content {
	& .text-tiny {
		font-size: .7em;
	}

	& .text-small {
		font-size: .85em;
	}

	& .text-big {
		font-size: 1.4em;
	}

	& .text-huge {
		font-size: 1.8em;
	}
}
`],sourceRoot:""}]);const E=v},8733:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const E=v},3508:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const E=v},2640:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const E=v},6270:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const E=v},5083:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},4036:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const E=v},3773:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const E=v},3689:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const E=v},1905:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},9773:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const E=v},2347:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},7754:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},4721:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAFhB,eAAiB,CACjB,wDAAyD,CAFzD,UAmBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const E=v},6082:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const E=v},2417:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const E=v},4652:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const E=v},7442:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},9292:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},1613:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const E=v},6306:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const E=v},3881:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const E=v},6945:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},4906:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover {
		@mixin ck-tooltip_visible;
	}

	/* Get rid of the native focus outline around the tooltip when focused (but not :hover). */
	&:focus:not(:hover) {
		@mixin ck-tooltip_disabled;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=v},5332:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const E=v},6781:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const E=v},5485:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},3949:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},7686:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},7339:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const E=v},9688:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},8847:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const E=v},6574:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const E=v},4879:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},3662:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const E=v},2577:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},1046:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},8793:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},4650:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const E=v},7676:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},5868:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},6764:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const E=v},9695:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const E=v},5542:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},3332:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const E=v},4793:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const E=v},3488:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const E=v},8506:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const E=v},4921:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),x=k.n(A),y=k(2609),v=k.n(y)()(x());v.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const E=v},2609:b=>{b.exports=function(_){var k=[];return k.toString=function(){return this.map(function(A){var x=_(A);return A[2]?"@media ".concat(A[2]," {").concat(x,"}"):x}).join("")},k.i=function(A,x,y){typeof A=="string"&&(A=[[null,A,""]]);var v={};if(y)for(var E=0;E<this.length;E++){var N=this[E][0];N!=null&&(v[N]=!0)}for(var F=0;F<A.length;F++){var j=[].concat(A[F]);y&&v[j[0]]||(x&&(j[2]?j[2]="".concat(x," and ").concat(j[2]):j[2]=x),k.push(j))}},k}},1799:b=>{function _(A,x){return function(y){if(Array.isArray(y))return y}(A)||function(y,v){var E=y&&(typeof Symbol<"u"&&y[Symbol.iterator]||y["@@iterator"]);if(E!=null){var N,F,j=[],M=!0,T=!1;try{for(E=E.call(y);!(M=(N=E.next()).done)&&(j.push(N.value),!v||j.length!==v);M=!0);}catch(R){T=!0,F=R}finally{try{M||E.return==null||E.return()}finally{if(T)throw F}}return j}}(A,x)||function(y,v){if(!!y){if(typeof y=="string")return k(y,v);var E=Object.prototype.toString.call(y).slice(8,-1);if(E==="Object"&&y.constructor&&(E=y.constructor.name),E==="Map"||E==="Set")return Array.from(y);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return k(y,v)}}(A,x)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(A,x){(x==null||x>A.length)&&(x=A.length);for(var y=0,v=new Array(x);y<x;y++)v[y]=A[y];return v}b.exports=function(A){var x=_(A,4),y=x[1],v=x[3];if(!v)return y;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),F="/*# ".concat(N," */"),j=v.sources.map(function(M){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(M," */")});return[y].concat(j).concat([F]).join(`
`)}return[y].join(`
`)}},6062:(b,_,k)=>{var A,x=function(){return A===void 0&&(A=Boolean(window&&document&&document.all&&!window.atob)),A},y=function(){var L={};return function(V){if(L[V]===void 0){var W=document.querySelector(V);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}L[V]=W}return L[V]}}(),v=[];function E(L){for(var V=-1,W=0;W<v.length;W++)if(v[W].identifier===L){V=W;break}return V}function N(L,V){for(var W={},Y=[],Q=0;Q<L.length;Q++){var X=L[Q],se=V.base?X[0]+V.base:X[0],ae=W[se]||0,pe="".concat(se," ").concat(ae);W[se]=ae+1;var ke=E(pe),Ae={css:X[1],media:X[2],sourceMap:X[3]};ke!==-1?(v[ke].references++,v[ke].updater(Ae)):v.push({identifier:pe,updater:Z(Ae,V),references:1}),Y.push(pe)}return Y}function F(L){var V=document.createElement("style"),W=L.attributes||{};if(W.nonce===void 0){var Y=k.nc;Y&&(W.nonce=Y)}if(Object.keys(W).forEach(function(X){V.setAttribute(X,W[X])}),typeof L.insert=="function")L.insert(V);else{var Q=y(L.insert||"head");if(!Q)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Q.appendChild(V)}return V}var j,M=(j=[],function(L,V){return j[L]=V,j.filter(Boolean).join(`
`)});function T(L,V,W,Y){var Q=W?"":Y.media?"@media ".concat(Y.media," {").concat(Y.css,"}"):Y.css;if(L.styleSheet)L.styleSheet.cssText=M(V,Q);else{var X=document.createTextNode(Q),se=L.childNodes;se[V]&&L.removeChild(se[V]),se.length?L.insertBefore(X,se[V]):L.appendChild(X)}}function R(L,V,W){var Y=W.css,Q=W.media,X=W.sourceMap;if(Q?L.setAttribute("media",Q):L.removeAttribute("media"),X&&typeof btoa<"u"&&(Y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(X))))," */")),L.styleSheet)L.styleSheet.cssText=Y;else{for(;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(document.createTextNode(Y))}}var G=null,U=0;function Z(L,V){var W,Y,Q;if(V.singleton){var X=U++;W=G||(G=F(V)),Y=T.bind(null,W,X,!1),Q=T.bind(null,W,X,!0)}else W=F(V),Y=R.bind(null,W,V),Q=function(){(function(se){if(se.parentNode===null)return!1;se.parentNode.removeChild(se)})(W)};return Y(L),function(se){if(se){if(se.css===L.css&&se.media===L.media&&se.sourceMap===L.sourceMap)return;Y(L=se)}else Q()}}b.exports=function(L,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=x());var W=N(L=L||[],V);return function(Y){if(Y=Y||[],Object.prototype.toString.call(Y)==="[object Array]"){for(var Q=0;Q<W.length;Q++){var X=E(W[Q]);v[X].references--}for(var se=N(Y,V),ae=0;ae<W.length;ae++){var pe=E(W[ae]);v[pe].references===0&&(v[pe].updater(),v.splice(pe,1))}W=se}}}}},h={};function g(b){var _=h[b];if(_!==void 0)return _.exports;var k=h[b]={id:b,exports:{}};return d[b](k,k.exports,g),k.exports}g.n=b=>{var _=b&&b.__esModule?()=>b.default:()=>b;return g.d(_,{a:_}),_},g.d=(b,_)=>{for(var k in _)g.o(_,k)&&!g.o(b,k)&&Object.defineProperty(b,k,{enumerable:!0,get:_[k]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(b,_)=>Object.prototype.hasOwnProperty.call(b,_),g.nc=void 0;var p={};return(()=>{g.d(p,{default:()=>nh});const b=function(){return function r(){r.called=!0}};class _{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=b(),this.off=b()}}const k=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function A(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+k[r>>0&255]+k[r>>8&255]+k[r>>16&255]+k[r>>24&255]+k[e>>0&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+k[t>>0&255]+k[t>>8&255]+k[t>>16&255]+k[t>>24&255]+k[n>>0&255]+k[n>>8&255]+k[n>>16&255]+k[n>>24&255]}const x={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function y(r,e){const t=x.get(e.priority);for(let n=0;n<r.length;n++)if(x.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}class v extends Error{constructor(e,t,n){super(function(i,s){const a=new WeakSet,c=(m,w)=>{if(typeof w=="object"&&w!==null){if(a.has(w))return`[object ${w.constructor.name}]`;a.add(w)}return w},u=s?` ${JSON.stringify(s,c)}`:"",f=F(i);return i+u+f}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new v(e.message,t);throw n.stack=e.stack,n}}function E(r,e){console.warn(...j(r,e))}function N(r,e){console.error(...j(r,e))}function F(r){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${r}`}function j(r,e){const t=F(r);return e?[r,e,t]:[r,t]}const M="35.0.1",T=typeof window=="object"?window:g.g;if(T.CKEDITOR_VERSION)throw new v("ckeditor-duplicated-modules",null);T.CKEDITOR_VERSION=M;const R=Symbol("listeningTo"),G=Symbol("emitterId"),U=Symbol("delegations"),Z={on(r,e,t={}){this.listenTo(this,r,e,t)},once(r,e,t){let n=!1;this.listenTo(this,r,(i,...s)=>{n||(n=!0,i.off(),e.call(this,i,...s))},t)},off(r,e){this.stopListening(this,r,e)},listenTo(r,e,t,n={}){let i,s;this[R]||(this[R]={});const a=this[R];W(r)||V(r);const c=W(r);(i=a[c])||(i=a[c]={emitter:r,callbacks:{}}),(s=i.callbacks[e])||(s=i.callbacks[e]=[]),s.push(t),function(u,f,m,w,C){f._addEventListener?f._addEventListener(m,w,C):u._addEventListener.call(f,m,w,C)}(this,r,e,t,n)},stopListening(r,e,t){const n=this[R];let i=r&&W(r);const s=n&&i?n[i]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!n||r&&!s||e&&!a))if(t)ae(this,r,e,t),a.indexOf(t)!==-1&&(a.length===1?delete s.callbacks[e]:ae(this,r,e,t));else if(a){for(;t=a.pop();)ae(this,r,e,t);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(r,e);delete n[i]}else{for(i in n)this.stopListening(n[i].emitter);delete this[R]}},fire(r,...e){try{const t=r instanceof _?r:new _(this,r),n=t.name;let i=X(this,n);if(t.path.push(this),i){const a=[t,...e];i=Array.from(i);for(let c=0;c<i.length&&(i[c].callback.apply(this,a),t.off.called&&(delete t.off.called,this._removeEventListener(n,i[c].callback)),!t.stop.called);c++);}const s=this[U];if(s){const a=s.get(n),c=s.get("*");a&&se(a,t,e),c&&se(c,t,e)}return t.return}catch(t){v.rethrowUnexpectedError(t,this)}},delegate(...r){return{to:(e,t)=>{this[U]||(this[U]=new Map),r.forEach(n=>{const i=this[U].get(n);i?i.set(e,t):this[U].set(n,new Map([[e,t]]))})}}},stopDelegating(r,e){if(this[U])if(r)if(e){const t=this[U].get(r);t&&t.delete(e)}else this[U].delete(r);else this[U].clear()},_addEventListener(r,e,t){(function(s,a){const c=Y(s);if(c[a])return;let u=a,f=null;const m=[];for(;u!==""&&!c[u];)c[u]={callbacks:[],childEvents:[]},m.push(c[u]),f&&c[u].childEvents.push(f),f=u,u=u.substr(0,u.lastIndexOf(":"));if(u!==""){for(const w of m)w.callbacks=c[u].callbacks.slice();c[u].childEvents.push(f)}})(this,r);const n=Q(this,r),i={callback:e,priority:x.get(t.priority)};for(const s of n)y(s,i)},_removeEventListener(r,e){const t=Q(this,r);for(const n of t)for(let i=0;i<n.length;i++)n[i].callback==e&&(n.splice(i,1),i--)}},L=Z;function V(r,e){r[G]||(r[G]=e||A())}function W(r){return r[G]}function Y(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function Q(r,e){const t=Y(r)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const s=Q(r,t.childEvents[i]);n=n.concat(s)}return n}function X(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?X(r,e.substr(0,e.lastIndexOf(":"))):null}function se(r,e,t){for(let[n,i]of r){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const s=new _(e.source,i);s.path=[...e.path],n.fire(s,...t)}}function ae(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}const pe=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},ke=Symbol("observableProperties"),Ae=Symbol("boundObservables"),Ie=Symbol("boundProperties"),Ke=Symbol("decoratedMethods"),Rt=Symbol("decoratedOriginal"),St={set(r,e){if(pe(r))return void Object.keys(r).forEach(n=>{this.set(n,r[n])},this);_t(this);const t=this[ke];if(r in this&&!t.has(r))throw new v("observable-set-cannot-override",this);Object.defineProperty(this,r,{enumerable:!0,configurable:!0,get:()=>t.get(r),set(n){const i=t.get(r);let s=this.fire("set:"+r,r,n,i);s===void 0&&(s=n),i===s&&t.has(r)||(t.set(r,s),this.fire("change:"+r,r,s,i))}}),this[r]=e},bind(...r){if(!r.length||!ce(r))throw new v("observable-bind-wrong-properties",this);if(new Set(r).size!==r.length)throw new v("observable-bind-duplicate-properties",this);_t(this);const e=this[Ie];r.forEach(n=>{if(e.has(n))throw new v("observable-bind-rebind",this)});const t=new Map;return r.forEach(n=>{const i={property:n,to:[]};e.set(n,i),t.set(n,i)}),{to:Jt,toMany:H,_observable:this,_bindProperties:r,_to:[],_bindings:t}},unbind(...r){if(!this[ke])return;const e=this[Ie],t=this[Ae];if(r.length){if(!ce(r))throw new v("observable-unbind-wrong-properties",this);r.forEach(n=>{const i=e.get(n);i&&(i.to.forEach(([s,a])=>{const c=t.get(s),u=c[a];u.delete(i),u.size||delete c[a],Object.keys(c).length||(t.delete(s),this.stopListening(s,"change"))}),e.delete(n))})}else t.forEach((n,i)=>{this.stopListening(i,"change")}),t.clear(),e.clear()},decorate(r){_t(this);const e=this[r];if(!e)throw new v("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:r});this.on(r,(t,n)=>{t.return=e.apply(this,n)}),this[r]=function(...t){return this.fire(r,t)},this[r][Rt]=e,this[Ke]||(this[Ke]=[]),this[Ke].push(r)},...L};St.stopListening=function(r,e,t){if(!r&&this[Ke]){for(const n of this[Ke])this[n]=this[n][Rt];delete this[Ke]}L.stopListening.call(this,r,e,t)};const Ne=St;function _t(r){r[ke]||(Object.defineProperty(r,ke,{value:new Map}),Object.defineProperty(r,Ae,{value:new Map}),Object.defineProperty(r,Ie,{value:new Map}))}function Jt(...r){const e=function(...s){if(!s.length)throw new v("observable-bind-to-parse-error",null);const a={to:[]};let c;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")c.properties.push(u);else{if(typeof u!="object")throw new v("observable-bind-to-parse-error",null);c={observable:u,properties:[]},a.to.push(c)}}),a}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new v("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new v("observable-bind-to-extra-callback",this);var i;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new v("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(s=>{const a=i[Ae];let c;a.get(s.observable)||i.listenTo(s.observable,"change",(u,f)=>{c=a.get(s.observable)[f],c&&c.forEach(m=>{de(i,m.property)})})}),function(s){let a;s._bindings.forEach((c,u)=>{s._to.forEach(f=>{a=f.properties[c.callback?0:s._bindProperties.indexOf(u)],c.to.push([f.observable,a]),function(m,w,C,S){const D=m[Ae],I=D.get(C),B=I||{};B[S]||(B[S]=new Set),B[S].add(w),I||D.set(C,B)}(s._observable,c,f.observable,a)})})}(this),this._bindProperties.forEach(s=>{de(this._observable,s)})}function H(r,e,t){if(this._bindings.size>1)throw new v("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const s=n.map(a=>[a,i]);return Array.prototype.concat.apply([],s)}(r,e),t)}function ce(r){return r.every(e=>typeof e=="string")}function de(r,e){const t=r[Ie].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}function oe(r,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);n.concat(i).forEach(s=>{if(s in r.prototype)return;const a=Object.getOwnPropertyDescriptor(t,s);a.enumerable=!1,Object.defineProperty(r.prototype,s,a)})})}class J{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ge,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ge),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ge(r){r.return=!1,r.stop()}oe(J,Ne);class he{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",De,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",De),this.refresh())}execute(){}destroy(){this.stopListening()}}function De(r){r.return=!1,r.stop()}oe(he,Ne);class P extends he{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){y(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const $=typeof Yl=="object"&&Yl&&Yl.Object===Object&&Yl;var ee=typeof self=="object"&&self&&self.Object===Object&&self;const ie=$||ee||Function("return this")(),re=ie.Symbol;var ge=Object.prototype,Ce=ge.hasOwnProperty,fe=ge.toString,me=re?re.toStringTag:void 0;const ue=function(r){var e=Ce.call(r,me),t=r[me];try{r[me]=void 0;var n=!0}catch{}var i=fe.call(r);return n&&(e?r[me]=t:delete r[me]),i};var Ee=Object.prototype.toString;const _e=function(r){return Ee.call(r)};var ye=re?re.toStringTag:void 0;const Se=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":ye&&ye in Object(r)?ue(r):_e(r)},He=function(r,e){return function(t){return r(e(t))}},nt=He(Object.getPrototypeOf,Object),je=function(r){return r!=null&&typeof r=="object"};var ut=Function.prototype,En=Object.prototype,To=ut.toString,Ra=En.hasOwnProperty,Di=To.call(Object);const Xt=function(r){if(!je(r)||Se(r)!="[object Object]")return!1;var e=nt(r);if(e===null)return!0;var t=Ra.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&To.call(t)==Di},cn=function(){this.__data__=[],this.size=0},en=function(r,e){return r===e||r!=r&&e!=e},Ii=function(r,e){for(var t=r.length;t--;)if(en(r[t][0],e))return t;return-1};var E1=Array.prototype.splice;const S1=function(r){var e=this.__data__,t=Ii(e,r);return!(t<0)&&(t==e.length-1?e.pop():E1.call(e,t,1),--this.size,!0)},D1=function(r){var e=this.__data__,t=Ii(e,r);return t<0?void 0:e[t][1]},I1=function(r){return Ii(this.__data__,r)>-1},T1=function(r,e){var t=this.__data__,n=Ii(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function ur(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}ur.prototype.clear=cn,ur.prototype.delete=S1,ur.prototype.get=D1,ur.prototype.has=I1,ur.prototype.set=T1;const Fa=ur,M1=function(){this.__data__=new Fa,this.size=0},B1=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},N1=function(r){return this.__data__.get(r)},P1=function(r){return this.__data__.has(r)},vs=function(r){if(!pe(r))return!1;var e=Se(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Vc=ie["__core-js_shared__"];var af=function(){var r=/[^.]+$/.exec(Vc&&Vc.keys&&Vc.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const z1=function(r){return!!af&&af in r};var L1=Function.prototype.toString;const Ti=function(r){if(r!=null){try{return L1.call(r)}catch{}try{return r+""}catch{}}return""};var O1=/^\[object .+?Constructor\]$/,R1=Function.prototype,F1=Object.prototype,j1=R1.toString,V1=F1.hasOwnProperty,H1=RegExp("^"+j1.call(V1).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const U1=function(r){return!(!pe(r)||z1(r))&&(vs(r)?H1:O1).test(Ti(r))},$1=function(r,e){return r==null?void 0:r[e]},Mi=function(r,e){var t=$1(r,e);return U1(t)?t:void 0},_s=Mi(ie,"Map"),Cs=Mi(Object,"create"),W1=function(){this.__data__=Cs?Cs(null):{},this.size=0},q1=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var G1=Object.prototype.hasOwnProperty;const K1=function(r){var e=this.__data__;if(Cs){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return G1.call(e,r)?e[r]:void 0};var Y1=Object.prototype.hasOwnProperty;const Q1=function(r){var e=this.__data__;return Cs?e[r]!==void 0:Y1.call(e,r)},Z1=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=Cs&&e===void 0?"__lodash_hash_undefined__":e,this};function hr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}hr.prototype.clear=W1,hr.prototype.delete=q1,hr.prototype.get=K1,hr.prototype.has=Q1,hr.prototype.set=Z1;const lf=hr,J1=function(){this.size=0,this.__data__={hash:new lf,map:new(_s||Fa),string:new lf}},X1=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},ja=function(r,e){var t=r.__data__;return X1(e)?t[typeof e=="string"?"string":"hash"]:t.map},ex=function(r){var e=ja(this,r).delete(r);return this.size-=e?1:0,e},tx=function(r){return ja(this,r).get(r)},nx=function(r){return ja(this,r).has(r)},ox=function(r,e){var t=ja(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function gr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}gr.prototype.clear=J1,gr.prototype.delete=ex,gr.prototype.get=tx,gr.prototype.has=nx,gr.prototype.set=ox;const Va=gr,ix=function(r,e){var t=this.__data__;if(t instanceof Fa){var n=t.__data__;if(!_s||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new Va(n)}return t.set(r,e),this.size=t.size,this};function fr(r){var e=this.__data__=new Fa(r);this.size=e.size}fr.prototype.clear=M1,fr.prototype.delete=B1,fr.prototype.get=N1,fr.prototype.has=P1,fr.prototype.set=ix;const As=fr,rx=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},Ha=function(){try{var r=Mi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Hc=function(r,e,t){e=="__proto__"&&Ha?Ha(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var sx=Object.prototype.hasOwnProperty;const Uc=function(r,e,t){var n=r[e];sx.call(r,e)&&en(n,t)&&(t!==void 0||e in r)||Hc(r,e,t)},mr=function(r,e,t,n){var i=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var c=e[s],u=n?n(t[c],r[c],c,t,r):void 0;u===void 0&&(u=r[c]),i?Hc(t,c,u):Uc(t,c,u)}return t},ax=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},cf=function(r){return je(r)&&Se(r)=="[object Arguments]"};var df=Object.prototype,lx=df.hasOwnProperty,cx=df.propertyIsEnumerable;const $c=cf(function(){return arguments}())?cf:function(r){return je(r)&&lx.call(r,"callee")&&!cx.call(r,"callee")},dn=Array.isArray,dx=function(){return!1};var uf=l&&!l.nodeType&&l,hf=uf&&!0&&o&&!o.nodeType&&o,gf=hf&&hf.exports===uf?ie.Buffer:void 0;const ys=(gf?gf.isBuffer:void 0)||dx;var ux=/^(?:0|[1-9]\d*)$/;const Wc=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&ux.test(r))&&r>-1&&r%1==0&&r<e},ff=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var wt={};wt["[object Float32Array]"]=wt["[object Float64Array]"]=wt["[object Int8Array]"]=wt["[object Int16Array]"]=wt["[object Int32Array]"]=wt["[object Uint8Array]"]=wt["[object Uint8ClampedArray]"]=wt["[object Uint16Array]"]=wt["[object Uint32Array]"]=!0,wt["[object Arguments]"]=wt["[object Array]"]=wt["[object ArrayBuffer]"]=wt["[object Boolean]"]=wt["[object DataView]"]=wt["[object Date]"]=wt["[object Error]"]=wt["[object Function]"]=wt["[object Map]"]=wt["[object Number]"]=wt["[object Object]"]=wt["[object RegExp]"]=wt["[object Set]"]=wt["[object String]"]=wt["[object WeakMap]"]=!1;const hx=function(r){return je(r)&&ff(r.length)&&!!wt[Se(r)]},qc=function(r){return function(e){return r(e)}};var mf=l&&!l.nodeType&&l,xs=mf&&!0&&o&&!o.nodeType&&o,Gc=xs&&xs.exports===mf&&$.process;const pr=function(){try{var r=xs&&xs.require&&xs.require("util").types;return r||Gc&&Gc.binding&&Gc.binding("util")}catch{}}();var pf=pr&&pr.isTypedArray;const Kc=pf?qc(pf):hx;var gx=Object.prototype.hasOwnProperty;const bf=function(r,e){var t=dn(r),n=!t&&$c(r),i=!t&&!n&&ys(r),s=!t&&!n&&!i&&Kc(r),a=t||n||i||s,c=a?ax(r.length,String):[],u=c.length;for(var f in r)!e&&!gx.call(r,f)||a&&(f=="length"||i&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Wc(f,u))||c.push(f);return c};var fx=Object.prototype;const Yc=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||fx)},mx=He(Object.keys,Object);var px=Object.prototype.hasOwnProperty;const bx=function(r){if(!Yc(r))return mx(r);var e=[];for(var t in Object(r))px.call(r,t)&&t!="constructor"&&e.push(t);return e},Ua=function(r){return r!=null&&ff(r.length)&&!vs(r)},Qc=function(r){return Ua(r)?bf(r):bx(r)},kx=function(r,e){return r&&mr(e,Qc(e),r)},wx=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var vx=Object.prototype.hasOwnProperty;const _x=function(r){if(!pe(r))return wx(r);var e=Yc(r),t=[];for(var n in r)(n!="constructor"||!e&&vx.call(r,n))&&t.push(n);return t},br=function(r){return Ua(r)?bf(r,!0):_x(r)},Cx=function(r,e){return r&&mr(e,br(e),r)};var kf=l&&!l.nodeType&&l,wf=kf&&!0&&o&&!o.nodeType&&o,vf=wf&&wf.exports===kf?ie.Buffer:void 0,_f=vf?vf.allocUnsafe:void 0;const Cf=function(r,e){if(e)return r.slice();var t=r.length,n=_f?_f(t):new r.constructor(t);return r.copy(n),n},Af=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},Ax=function(r,e){for(var t=-1,n=r==null?0:r.length,i=0,s=[];++t<n;){var a=r[t];e(a,t,r)&&(s[i++]=a)}return s},yf=function(){return[]};var yx=Object.prototype.propertyIsEnumerable,xf=Object.getOwnPropertySymbols;const Zc=xf?function(r){return r==null?[]:(r=Object(r),Ax(xf(r),function(e){return yx.call(r,e)}))}:yf,xx=function(r,e){return mr(r,Zc(r),e)},Ef=function(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r},Sf=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)Ef(e,Zc(r)),r=nt(r);return e}:yf,Ex=function(r,e){return mr(r,Sf(r),e)},Df=function(r,e,t){var n=e(r);return dn(r)?n:Ef(n,t(r))},Jc=function(r){return Df(r,Qc,Zc)},Sx=function(r){return Df(r,br,Sf)},Xc=Mi(ie,"DataView"),ed=Mi(ie,"Promise"),td=Mi(ie,"Set"),nd=Mi(ie,"WeakMap");var If="[object Map]",Tf="[object Promise]",Mf="[object Set]",Bf="[object WeakMap]",Nf="[object DataView]",Dx=Ti(Xc),Ix=Ti(_s),Tx=Ti(ed),Mx=Ti(td),Bx=Ti(nd),Bi=Se;(Xc&&Bi(new Xc(new ArrayBuffer(1)))!=Nf||_s&&Bi(new _s)!=If||ed&&Bi(ed.resolve())!=Tf||td&&Bi(new td)!=Mf||nd&&Bi(new nd)!=Bf)&&(Bi=function(r){var e=Se(r),t=e=="[object Object]"?r.constructor:void 0,n=t?Ti(t):"";if(n)switch(n){case Dx:return Nf;case Ix:return If;case Tx:return Tf;case Mx:return Mf;case Bx:return Bf}return e});const Es=Bi;var Nx=Object.prototype.hasOwnProperty;const Px=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Nx.call(r,"index")&&(t.index=r.index,t.input=r.input),t},$a=ie.Uint8Array,od=function(r){var e=new r.constructor(r.byteLength);return new $a(e).set(new $a(r)),e},zx=function(r,e){var t=e?od(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var Lx=/\w*$/;const Ox=function(r){var e=new r.constructor(r.source,Lx.exec(r));return e.lastIndex=r.lastIndex,e};var Pf=re?re.prototype:void 0,zf=Pf?Pf.valueOf:void 0;const Rx=function(r){return zf?Object(zf.call(r)):{}},Lf=function(r,e){var t=e?od(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},Fx=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return od(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return zx(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Lf(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return Ox(r);case"[object Symbol]":return Rx(r)}};var Of=Object.create;const jx=function(){function r(){}return function(e){if(!pe(e))return{};if(Of)return Of(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),Rf=function(r){return typeof r.constructor!="function"||Yc(r)?{}:jx(nt(r))},Vx=function(r){return je(r)&&Es(r)=="[object Map]"};var Ff=pr&&pr.isMap;const Hx=Ff?qc(Ff):Vx,Ux=function(r){return je(r)&&Es(r)=="[object Set]"};var jf=pr&&pr.isSet;const $x=jf?qc(jf):Ux;var Vf="[object Arguments]",Hf="[object Function]",Wx="[object Object]",pt={};pt[Vf]=pt["[object Array]"]=pt["[object ArrayBuffer]"]=pt["[object DataView]"]=pt["[object Boolean]"]=pt["[object Date]"]=pt["[object Float32Array]"]=pt["[object Float64Array]"]=pt["[object Int8Array]"]=pt["[object Int16Array]"]=pt["[object Int32Array]"]=pt["[object Map]"]=pt["[object Number]"]=pt["[object Object]"]=pt["[object RegExp]"]=pt["[object Set]"]=pt["[object String]"]=pt["[object Symbol]"]=pt["[object Uint8Array]"]=pt["[object Uint8ClampedArray]"]=pt["[object Uint16Array]"]=pt["[object Uint32Array]"]=!0,pt["[object Error]"]=pt[Hf]=pt["[object WeakMap]"]=!1;const id=function r(e,t,n,i,s,a){var c,u=1&t,f=2&t,m=4&t;if(n&&(c=s?n(e,i,s,a):n(e)),c!==void 0)return c;if(!pe(e))return e;var w=dn(e);if(w){if(c=Px(e),!u)return Af(e,c)}else{var C=Es(e),S=C==Hf||C=="[object GeneratorFunction]";if(ys(e))return Cf(e,u);if(C==Wx||C==Vf||S&&!s){if(c=f||S?{}:Rf(e),!u)return f?Ex(e,Cx(c,e)):xx(e,kx(c,e))}else{if(!pt[C])return s?e:{};c=Fx(e,C,u)}}a||(a=new As);var D=a.get(e);if(D)return D;a.set(e,c),$x(e)?e.forEach(function(B){c.add(r(B,t,n,B,e,a))}):Hx(e)&&e.forEach(function(B,O){c.set(O,r(B,t,n,O,e,a))});var I=w?void 0:(m?f?Sx:Jc:f?br:Qc)(e);return rx(I||e,function(B,O){I&&(B=e[O=B]),Uc(c,O,r(B,t,n,O,e,a))}),c},Uf=function(r,e){return id(r,5,e=typeof e=="function"?e:void 0)},Ni=function(r){return je(r)&&r.nodeType===1&&!Xt(r)};class $f{constructor(e,t){this._config={},t&&this.define(Wf(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Xt(t))return void this._setObjectToTarget(e,t,i);const s=t.split(".");t=s.pop();for(const a of s)Xt(e[a])||(e[a]={}),e=e[a];if(Xt(n))return Xt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Xt(e[i])){e=null;break}e=e[i]}return e?Wf(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Wf(r){return Uf(r,qx)}function qx(r){return Ni(r)?r:void 0}function Un(r){return!(!r||!r[Symbol.iterator])}class qf{constructor(e={},t={}){const n=Un(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new v("collection-add-item-invalid-index",this);let n=0;for(const i of e){const s=this._getItemIdBeforeAdding(i),a=t+n;this._items.splice(a,0,i),this._itemMap.set(s,i),this.fire("add",i,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new v("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new v("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,s,a)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(c&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const f=e(s);if(!f)return void this._skippedIndexesFromExternal.push(a);let m=a;for(const w of this._skippedIndexesFromExternal)a>w&&m--;for(const w of t._skippedIndexesFromExternal)m>=w&&m++;this._bindToExternalToInternalMap.set(s,f),this._bindToInternalToExternalMap.set(f,s),this.add(f,m);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)m<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,s,a)=>{const c=this._bindToExternalToInternalMap.get(s);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(a<f&&u.push(f-1),a>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new v("collection-add-invalid-id",this);if(this.get(n))throw new v("collection-add-item-already-exists",this)}else e[t]=n=A();return n}_remove(e){let t,n,i,s=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),s=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],s=!i,i&&(n=i[a])):(i=e,n=i[a],t=this._items.indexOf(i),s=t==-1||!this._itemMap.get(n)),s)throw new v("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}oe(qf,L);const un=qf;class rd{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,s]of n)this._contextPlugins.set(i,s),this._contextPlugins.set(s,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new v("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,s=this._context;(function D(I,B=new Set){I.forEach(O=>{u(O)&&(B.has(O)||(B.add(O),O.pluginName&&!i._availablePlugins.has(O.pluginName)&&i._availablePlugins.set(O.pluginName,O),O.requires&&D(O.requires,B)))})})(e),C(e);const a=[...function D(I,B=new Set){return I.map(O=>u(O)?O:i._availablePlugins.get(O)).reduce((O,K)=>B.has(K)?O:(B.add(K),K.requires&&(C(K.requires,K),D(K.requires,B).forEach(ne=>O.add(ne))),O.add(K)),new Set)}(e.filter(D=>!m(D,t)))];(function(D,I){for(const B of I){if(typeof B!="function")throw new v("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const O=B.pluginName;if(!O)throw new v("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new v("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:O});const K=i._availablePlugins.get(O);if(!K)throw new v("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:O});const ne=D.indexOf(K);if(ne===-1){if(i._contextPlugins.has(K))return;throw new v("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:O})}if(K.requires&&K.requires.length)throw new v("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:O});D.splice(ne,1,B),i._availablePlugins.set(O,B)}})(a,n);const c=function(D){return D.map(I=>{const B=i._contextPlugins.get(I)||new I(s);return i._add(I,B),B})}(a);return S(c,"init").then(()=>S(c,"afterInit")).then(()=>c);function u(D){return typeof D=="function"}function f(D){return u(D)&&D.isContextPlugin}function m(D,I){return I.some(B=>B===D||w(D)===B||w(B)===D)}function w(D){return u(D)?D.pluginName||D.name:D}function C(D,I=null){D.map(B=>u(B)?B:i._availablePlugins.get(B)||B).forEach(B=>{(function(O,K){if(!u(O))throw K?new v("plugincollection-soft-required",s,{missingPlugin:O,requiredBy:w(K)}):new v("plugincollection-plugin-not-found",s,{plugin:O})})(B,I),function(O,K){if(!!f(K)&&!f(O))throw new v("plugincollection-context-required",s,{plugin:w(O),requiredBy:w(K)})}(B,I),function(O,K){if(!!K&&!!m(O,t))throw new v("plugincollection-required",s,{plugin:w(O),requiredBy:w(K)})}(B,I)})}function S(D,I){return D.reduce((B,O)=>O[I]?i._contextPlugins.has(O)?B:B.then(O[I].bind(O)):B,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new v("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function Ut(r){return Array.isArray(r)?r:[r]}function Gx(r,e,t=1){if(typeof t!="number")throw new v("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(r=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!function(u,f){return!!window.CKEDITOR_TRANSLATIONS[u]&&!!window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(r,i))return t!==1?e.plural:e.string;const s=window.CKEDITOR_TRANSLATIONS[r].dictionary,a=window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(u=>u===1?0:1),c=s[i];return typeof c=="string"?c:c[Number(a(t))]}oe(rd,L),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Kx=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Gf(r){return Kx.includes(r)?"rtl":"ltr"}class Yx{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Gf(this.uiLanguage),this.contentLanguageDirection=Gf(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Ut(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,s){return i.replace(/%(\d+)/g,(a,c)=>c<s.length?s[c]:a)}(Gx(this.uiLanguage,e,n),t)}}class Qx{constructor(e){this.config=new $f(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new rd(this,t);const n=this.config.get("language")||{};this.locale=new Yx({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new un,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new v("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new v("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new v("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Ss{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function tn(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}oe(Ss,Ne);const Kf=function(r){return id(r,4)};class Pi{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new v("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=tn(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Kf(this);return delete e.parent,e}is(e){return e==="node"||e==="view:node"}}oe(Pi,L);class ht extends Pi{constructor(e,t){super(e),this._textData=t}is(e){return e==="$text"||e==="view:$text"||e==="text"||e==="view:text"||e==="node"||e==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof ht&&(this===e||this.data===e.data)}_clone(){return new ht(this.document,this.data)}}class Mo{constructor(e,t,n){if(this.textNode=e,t<0||t>e.data.length)throw new v("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new v("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return e==="$textProxy"||e==="view:$textProxy"||e==="textProxy"||e==="view:textProxy"}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function go(r){return Un(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}class fo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=Yf(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const s=Yf(n,i);s&&t.push({element:n,pattern:i,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Yf(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const s=new Set(i.getAttributeKeys());return Xt(n)?(n.style!==void 0&&E("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&E("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),sd(n,s,a=>i.getAttribute(a))}(e.attributes,r),!t.attributes)?null:!(e.classes&&(t.classes=function(n,i){return sd(n,i.getClassNames())}(e.classes,r),!t.classes))&&!(e.styles&&(t.styles=function(n,i){return sd(n,i.getStyleNames(!0),s=>i.getStyle(s))}(e.styles,r),!t.styles))&&t}function sd(r,e,t){const n=function(a){return Array.isArray(a)?a.map(c=>Xt(c)?(c.key!==void 0&&c.value!==void 0||E("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Xt(a)?Object.entries(a):[[a,!0]]}(r),i=Array.from(e),s=[];return n.forEach(([a,c])=>{i.forEach(u=>{(function(f,m){return f===!0||f===m||f instanceof RegExp&&m.match(f)})(a,u)&&function(f,m,w){if(f===!0)return!0;const C=w(m);return f===C||f instanceof RegExp&&!!String(C).match(f)}(c,u,t)&&s.push(u)})}),!n.length||s.length<n.length?null:s}const Wa=function(r){return typeof r=="symbol"||je(r)&&Se(r)=="[object Symbol]"};var Zx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jx=/^\w*$/;const Xx=function(r,e){if(dn(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!Wa(r))||Jx.test(r)||!Zx.test(r)||e!=null&&r in Object(e)};function ad(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var a=r.apply(this,n);return t.cache=s.set(i,a)||s,a};return t.cache=new(ad.Cache||Va),t}ad.Cache=Va;const e2=ad;var t2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n2=/\\(\\)?/g,o2=function(r){var e=e2(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(t2,function(t,n,i,s){e.push(i?s.replace(n2,"$1"):n||t)}),e});const i2=o2,r2=function(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i};var Qf=re?re.prototype:void 0,Zf=Qf?Qf.toString:void 0;const s2=function r(e){if(typeof e=="string")return e;if(dn(e))return r2(e,r)+"";if(Wa(e))return Zf?Zf.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},ld=function(r){return r==null?"":s2(r)},cd=function(r,e){return dn(r)?r:Xx(r,e)?[r]:i2(ld(r))},a2=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},dd=function(r){if(typeof r=="string"||Wa(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},Jf=function(r,e){for(var t=0,n=(e=cd(e,r)).length;r!=null&&t<n;)r=r[dd(e[t++])];return t&&t==n?r:void 0},Xf=function(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=r[n+e];return s},l2=function(r,e){return e.length<2?r:Jf(r,Xf(e,0,-1))},c2=function(r,e){return e=cd(e,r),(r=l2(r,e))==null||delete r[dd(a2(e))]},d2=function(r,e){return r==null||c2(r,e)},qa=function(r,e,t){var n=r==null?void 0:Jf(r,e);return n===void 0?t:n},ud=function(r,e,t){(t!==void 0&&!en(r[e],t)||t===void 0&&!(e in r))&&Hc(r,e,t)},u2=function(r){return function(e,t,n){for(var i=-1,s=Object(e),a=n(e),c=a.length;c--;){var u=a[r?c:++i];if(t(s[u],u,s)===!1)break}return e}}(),h2=function(r){return je(r)&&Ua(r)},hd=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},g2=function(r){return mr(r,br(r))},f2=function(r,e,t,n,i,s,a){var c=hd(r,t),u=hd(e,t),f=a.get(u);if(f)ud(r,t,f);else{var m=s?s(c,u,t+"",r,e,a):void 0,w=m===void 0;if(w){var C=dn(u),S=!C&&ys(u),D=!C&&!S&&Kc(u);m=u,C||S||D?dn(c)?m=c:h2(c)?m=Af(c):S?(w=!1,m=Cf(u,!0)):D?(w=!1,m=Lf(u,!0)):m=[]:Xt(u)||$c(u)?(m=c,$c(c)?m=g2(c):pe(c)&&!vs(c)||(m=Rf(u))):w=!1}w&&(a.set(u,m),i(m,u,n,s,a),a.delete(u)),ud(r,t,m)}},m2=function r(e,t,n,i,s){e!==t&&u2(t,function(a,c){if(s||(s=new As),pe(a))f2(e,t,c,n,r,i,s);else{var u=i?i(hd(e,c),a,c+"",e,t,s):void 0;u===void 0&&(u=a),ud(e,c,u)}},br)},zi=function(r){return r},p2=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var em=Math.max;const b2=function(r,e,t){return e=em(e===void 0?r.length-1:e,0),function(){for(var n=arguments,i=-1,s=em(n.length-e,0),a=Array(s);++i<s;)a[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(a),p2(r,this,c)}},k2=function(r){return function(){return r}},w2=Ha?function(r,e){return Ha(r,"toString",{configurable:!0,enumerable:!1,value:k2(e),writable:!0})}:zi;var v2=Date.now;const _2=function(r){var e=0,t=0;return function(){var n=v2(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(w2),C2=function(r,e){return _2(b2(r,e,zi),r+"")},A2=function(r,e,t){if(!pe(t))return!1;var n=typeof e;return!!(n=="number"?Ua(t)&&Wc(e,t.length):n=="string"&&e in t)&&en(t[e],r)},tm=function(r){return C2(function(e,t){var n=-1,i=t.length,s=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(s=r.length>3&&typeof s=="function"?(i--,s):void 0,a&&A2(t[0],t[1],a)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var c=t[n];c&&r(e,c,n,s)}return e})},nm=tm(function(r,e,t){m2(r,e,t)}),y2=function(r,e,t,n){if(!pe(r))return r;for(var i=-1,s=(e=cd(e,r)).length,a=s-1,c=r;c!=null&&++i<s;){var u=dd(e[i]),f=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return r;if(i!=a){var m=c[u];(f=n?n(m,u,c):void 0)===void 0&&(f=pe(m)?m:Wc(e[i+1])?[]:{})}Uc(c,u,f),c=c[u]}return r},x2=function(r,e,t){return r==null?r:y2(r,e,t)};class E2{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let i=null,s=0,a=0,c=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const m=n.charAt(f);if(i===null)switch(m){case":":c||(c=n.substr(s,f-s),a=f+1);break;case'"':case"'":i=m;break;case";":{const w=n.substr(a,f-a);c&&u.set(c.trim(),w.trim()),c=null,s=f+1;break}}else m===i&&(i=null)}return u}(e).entries());for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(pe(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=gd(e);d2(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!pe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=qa(this._styles,n);!i||!Array.from(Object.keys(i)).length&&this.remove(n)}}class S2{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(pe(t))fd(n,gd(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:s,value:a}=i(t);fd(n,s,a)}else fd(n,e,t)}getNormalized(e,t){if(!e)return nm({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return qa(t,n);const i=n(e,t);if(i)return i}return qa(t,gd(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const s=this.getNormalized(i,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function gd(r){return r.replace("-",".")}function fd(r,e,t){let n=t;pe(t)&&(n=nm({},qa(r,e),t)),x2(r,e,n)}class $n extends Pi{constructor(e,t,n,i){if(super(e),this.name=t,this._attrs=function(s){s=go(s);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");om(this._classes,s),this._attrs.delete("class")}this._styles=new E2(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="view:element"):e==="element"||e==="view:element"||e==="node"||e==="view:node"}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof $n))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new fo(...e);let n=this.parent;for(;n;){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,a){return typeof a=="string"?[new ht(s,a)]:(Un(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new ht(s,c):c instanceof Mo?new ht(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?om(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Ut(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function om(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}class Ga extends $n{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=im}is(e,t=null){return t?t===this.name&&(e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}}function im(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}class Ka extends Ga{constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&(e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}destroy(){this.stopListening()}}oe(Ka,Ne);const rm=Symbol("rootName");class D2 extends Ka{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&(e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}get rootName(){return this.getCustomProperty(rm)}set rootName(e){this._setCustomProperty(rm,e)}set _name(e){this.name=e}}class Li{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new v("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=be._createAt(e.startPosition):this.position=be._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,i;do i=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof ht){if(e.isAtEnd)return this.position=be._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof $n)return this.shallow?e.offset++:e=new be(i,0),this.position=e,this._formatReturnValue("elementStart",i,t,e,1);if(i instanceof ht){if(this.singleCharacters)return e=new be(i,0),this.position=e,this._next();{let s,a=i.data.length;return i==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new Mo(i,0,a),e=be._createAfter(s)):(s=new Mo(i,0,i.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof i=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new Mo(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=be._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof ht){if(e.isAtStart)return this.position=be._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof $n)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new be(i,i.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof ht){if(this.singleCharacters)return e=new be(i,i.data.length),this.position=e,this._previous();{let s,a=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;s=new Mo(i,c,i.data.length-c),a=s.data.length,e=be._createBefore(s)}else s=new Mo(i,0,i.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof i=="string"){let s;if(this.singleCharacters)s=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-c}e.offset-=s;const a=new Mo(n,e.offset,s);return this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=be._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,s){return t instanceof Mo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=be._createAfter(t.textNode):(i=be._createAfter(t.textNode),this.position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=be._createBefore(t.textNode):(i=be._createBefore(t.textNode),this.position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:s}}}}class be{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ka);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=be._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Li(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}is(e){return e==="position"||e==="view:position"}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=tn(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Li(e)}clone(){return new be(this.parent,this.offset)}static _createAt(e,t){if(e instanceof be)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new v("view-createpositionat-offset-required",n)}return new be(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new be(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new v("view-position-after-root",e,{root:e});return new be(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new be(e.textNode,e.offsetInText);if(!e.parent)throw new v("view-position-before-root",e,{root:e});return new be(e.parent,e.index)}}class Be{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Li({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Ya,{direction:"backward"}),t=this.end.getLastMatchingPosition(Ya);return e.parent.is("$text")&&e.isAtStart&&(e=be._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=be._createAfter(t.parent)),new Be(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Ya);if(e.isAfter(this.end)||e.isEqual(this.end))return new Be(e,e);let t=this.end.getLastMatchingPosition(Ya,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new be(n,0)),i&&i.is("$text")&&(t=new be(i,i.data.length)),new Be(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Be(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Be(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Be(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Li(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Be(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Li(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Li(e);yield t.position;for(const n of t)yield n.nextPosition}is(e){return e==="range"||e==="view:range"}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new be(e,t),new be(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(be._createBefore(e),t)}}function Ya(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}function md(r){let e=0;for(const t of r)e++;return e}class Xn{constructor(e=null,t,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=md(this.getRanges());if(t!=md(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(e,t,n){if(e===null)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Xn||e instanceof pd)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Be)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof be)this._setRanges([new Be(e)]),this._setFakeOptions(t);else if(e instanceof Pi){const i=!!n&&!!n.backward;let s;if(t===void 0)throw new v("view-selection-setto-required-second-parameter",this);s=t=="in"?Be._createIn(e):t=="on"?Be._createOn(e):new Be(be._createAt(e,t)),this._setRanges([s],i),this._setFakeOptions(n)}else{if(!Un(e))throw new v("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new v("view-selection-setfocus-no-ranges",this);const n=be._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Be(n,i),!0):this._addRange(new Be(i,n)),this.fire("change")}is(e){return e==="selection"||e==="view:selection"}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Be))throw new v("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new v("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Be(e.start,e.end))}}oe(Xn,L);class pd{constructor(e=null,t,n){this._selection=new Xn,this._selection.delegate("change").to(this),this._selection.setTo(e,t,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return e==="selection"||e=="documentSelection"||e=="view:selection"||e=="view:documentSelection"}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setFocus(e,t){this._selection.setFocus(e,t)}}oe(pd,L);class Ds extends _{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const bd=Symbol("bubbling contexts"),I2={fire(r,...e){try{const t=r instanceof _?r:new _(this,r),n=kd(this);if(!n.size)return;if(Is(t,"capturing",this),kr(n,"$capture",t,...e))return t.return;const i=t.startRange||this.selection.getFirstRange(),s=i?i.getContainedElement():null,a=!!s&&Boolean(sm(n,s));let c=s||function(u){if(!u)return null;const f=u.start.parent,m=u.end.parent,w=f.getPath(),C=m.getPath();return w.length>C.length?f:m}(i);if(Is(t,"atTarget",c),!a){if(kr(n,"$text",t,...e))return t.return;Is(t,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(kr(n,"$root",t,...e))return t.return}else if(c.is("element")&&kr(n,c.name,t,...e))return t.return;if(kr(n,c,t,...e))return t.return;c=c.parent,Is(t,"bubbling",c)}return Is(t,"bubbling",this),kr(n,"$document",t,...e),t.return}catch(t){v.rethrowUnexpectedError(t,this)}},_addEventListener(r,e,t){const n=Ut(t.context||"$document"),i=kd(this);for(const s of n){let a=i.get(s);a||(a=Object.create(L),i.set(s,a)),this.listenTo(a,r,e,t)}},_removeEventListener(r,e){const t=kd(this);for(const n of t.values())this.stopListening(n,r,e)}},T2=I2;function Is(r,e,t){r instanceof Ds&&(r._eventPhase=e,r._currentTarget=t)}function kr(r,e,t,...n){const i=typeof e=="string"?r.get(e):sm(r,e);return!!i&&(i.fire(t,...n),t.stop.called)}function sm(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function kd(r){return r[bd]||(r[bd]=new Map),r[bd]}class Ts{constructor(e){this.selection=new pd,this.roots=new un({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}oe(Ts,T2),oe(Ts,Ne);class wr extends $n{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=M2,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new v("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&(e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"):e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function M2(){if(wd(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(wd(r)>1)return null;r=r.parent}return!r||wd(r)>1?null:this.childCount}function wd(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}wr.DEFAULT_PRIORITY=10;class am extends $n{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=B2}is(e,t=null){return t?t===this.name&&(e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"):e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof Pi||Array.from(t).length>0))throw new v("view-emptyelement-cannot-add",[this,t])}}function B2(){return null}const Oi=navigator.userAgent.toLowerCase(),N2={isMac:lm(Oi),isWindows:function(r){return r.indexOf("windows")>-1}(Oi),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(Oi),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(Oi),isiOS:function(r){return!!r.match(/iphone|ipad/i)||lm(r)&&navigator.maxTouchPoints>0}(Oi),isAndroid:function(r){return r.indexOf("android")>-1}(Oi),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(Oi),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}},at=N2;function lm(r){return r.indexOf("macintosh")>-1}const P2={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},z2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Ve=function(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);r[t.toLowerCase()]=e}for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}(),L2=Object.fromEntries(Object.entries(Ve).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function mo(r){let e;if(typeof r=="string"){if(e=Ve[r.toLowerCase()],!e)throw new v("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?Ve.alt:0)+(r.ctrlKey?Ve.ctrl:0)+(r.shiftKey?Ve.shift:0)+(r.metaKey?Ve.cmd:0);return e}function vd(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return mo(t.slice(0,-1));const n=mo(t);return at.isMac&&n==Ve.ctrl?Ve.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function cm(r){let e=vd(r);return Object.entries(at.isMac?P2:z2).reduce((t,[n,i])=>((e&Ve[n])!=0&&(e&=~Ve[n],t+=i),t),"")+(e?L2[e]:"")}function _d(r,e){const t=e==="ltr";switch(r){case Ve.arrowleft:return t?"left":"right";case Ve.arrowright:return t?"right":"left";case Ve.arrowup:return"up";case Ve.arrowdown:return"down"}}class Cd extends $n{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=R2}is(e,t=null){return t?t===this.name&&(e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"):e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof Pi||Array.from(t).length>0))throw new v("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function O2(r){r.document.on("arrowKey",(e,t)=>function(n,i,s){if(i.keyCode==Ve.arrowright){const a=i.domTarget.ownerDocument.defaultView.getSelection(),c=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(c||i.shiftKey){const u=a.focusNode,f=a.focusOffset,m=s.domPositionToView(u,f);if(m===null)return;let w=!1;const C=m.getLastMatchingPosition(S=>(S.item.is("uiElement")&&(w=!0),!(!S.item.is("uiElement")&&!S.item.is("attributeElement"))));if(w){const S=s.viewPositionToDom(C);c?a.collapse(S.parent,S.offset):a.extend(S.parent,S.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function R2(){return null}class dm extends $n{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=F2}is(e,t=null){return t?t===this.name&&(e==="rawElement"||e==="view:rawElement"||e==="element"||e==="view:element"):e==="rawElement"||e==="view:rawElement"||e===this.name||e==="view:"+this.name||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof Pi||Array.from(t).length>0))throw new v("view-rawelement-cannot-add",[this,t])}}function F2(){return null}class Ri{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="view:documentFragment"}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,a){return typeof a=="string"?[new ht(s,a)]:(Un(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new ht(s,c):c instanceof Mo?new ht(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}oe(Ri,L);class um{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(e,t,n){this.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Ri(this.document,e)}createText(e){return new ht(this.document,e)}createAttributeElement(e,t,n={}){const i=new wr(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let s=null;Xt(n)?i=n:s=n;const a=new Ga(this.document,e,t,s);return i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const i=new Ka(this.document,e,t);return i._document=this.document,n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new am(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new Cd(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const s=new dm(this.document,e,t);return s.render=n||(()=>{}),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Xt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof be?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new v("view-writer-break-non-container-element",this.document);if(!t.parent)throw new v("view-writer-break-root",this.document);if(e.isAtStart)return be._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(be._createAfter(t),n);const i=new Be(e,be._createAt(t,"end")),s=new be(n,0);this.move(i,s)}return be._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new be(a,c))}const i=n.getChild(t-1),s=n.getChild(t);if(!i||!s)return e;if(i.is("$text")&&s.is("$text"))return gm(i,s);if(i.is("attributeElement")&&s.is("attributeElement")&&i.isSimilar(s)){const a=i.childCount;return i._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new be(i,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new v("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),s=i instanceof ht?be._createAt(i,"end"):be._createAt(t,"end");return this.move(Be._createIn(n),be._createAt(t,"end")),this.remove(Be._createOn(n)),s}insert(e,t){fm(t=Un(t)?[...t]:[t],this.document);const n=t.reduce((a,c)=>{const u=a[a.length-1],f=!c.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(c):a.push({breakAttributes:f,nodes:[c]}),a},[]);let i=null,s=e;for(const{nodes:a,breakAttributes:c}of n){const u=this._insertNodes(s,a,c);i||(i=u.start),s=u.end}return i?new Be(i,s):new Be(e)}remove(e){const t=e instanceof Be?e:Be._createOn(e);if(Ms(t,this.document),t.isCollapsed)return new Ri(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),s=n.parent,a=i.offset-n.offset,c=s._removeChildren(n.offset,a);for(const f of c)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Ri(this.document,c)}clear(e,t){Ms(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const s=i.item;let a;if(s.is("element")&&t.isSimilar(s))a=Be._createOn(s);else if(!i.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const c=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(a=Be._createIn(c))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,s=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof wr))throw new v("view-writer-wrap-invalid-attribute",this.document);if(Ms(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(i=i.getLastMatchingPosition(a=>a.item.is("uiElement"))),i=this._wrapPosition(i,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new Be(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof wr))throw new v("view-writer-unwrap-invalid-attribute",this.document);if(Ms(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(c,u)}rename(e,t){const n=new Ga(this.document,e,t.getAttributes());return this.insert(be._createAfter(t),n),this.move(Be._createIn(t),be._createAt(n,0)),this.remove(Be._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return be._createAt(e,t)}createPositionAfter(e){return be._createAfter(e)}createPositionBefore(e){return be._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Xn(e,t,n)}createSlot(e){if(!this._slotFactory)throw new v("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,s;if(i=n?Ad(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new v("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?yd(e):e;const a=i._insertChild(s.offset,t);for(const m of t)this._addToClonedElementsGroup(m);const c=s.getShiftedBy(a),u=this.mergeAttributes(s);u.isEqual(s)||c.offset--;const f=this.mergeAttributes(c);return new Be(u,f)}_wrapChildren(e,t,n,i){let s=t;const a=[];for(;s<n;){const u=e.getChild(s),f=u.is("$text"),m=u.is("attributeElement");if(m&&this._wrapAttributeElement(i,u))a.push(new be(e,s));else if(f||!m||j2(i,u)){const w=i._clone();u._remove(),w._appendChild(u),e._insertChild(s,w),this._addToClonedElementsGroup(w),a.push(new be(e,s))}else this._wrapChildren(u,0,u.childCount,i);s++}let c=0;for(const u of a)u.offset-=c,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let s=t;const a=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(i)){const f=u.getChildren(),m=u.childCount;u._remove(),e._insertChild(s,f),this._removeFromClonedElementsGroup(u),a.push(new be(e,s),new be(e,s+m)),s+=m,n+=m-1}else this._unwrapAttributeElement(i,u)?(a.push(new be(e,s),new be(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,i),s++);else s++}let c=0;for(const u of a)u.offset-=c,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,a=this._wrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return hm(e.clone());e.parent.is("$text")&&(e=yd(e));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new Be(e,e.getShiftedBy(1));this.wrap(i,t);const s=new be(n.parent,n.index);n._remove();const a=s.nodeBefore,c=s.nodeAfter;return a instanceof ht&&c instanceof ht?gm(a,c):hm(s)}_wrapAttributeElement(e,t){if(!mm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!mm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(Ms(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new Be(u,u)}const s=this._breakAttributes(i,t),a=s.parent.childCount,c=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-a,new Be(c,s)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new v("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new v("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new v("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&xd(i.parent)||xd(i))return e.clone();if(i.is("$text"))return this._breakAttributes(yd(e),t);if(n==i.childCount){const s=new be(i.parent,i.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new be(i.parent,i.index);return this._breakAttributes(s,t)}{const s=i.index+1,a=i._clone();i.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const c=i.childCount-n,u=i._removeChildren(n,c);a._appendChild(u);const f=new be(i.parent,s);return this._breakAttributes(f,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Ad(r){let e=r.parent;for(;!xd(e);){if(!e)return;e=e.parent}return e}function j2(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function hm(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new be(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new be(t,0):r}function yd(r){if(r.offset==r.parent.data.length)return new be(r.parent.parent,r.parent.index+1);if(r.offset===0)return new be(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new ht(r.root.document,e)),new be(r.parent.parent,r.parent.index+1)}function gm(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new be(r,t)}function fm(r,e){for(const t of r){if(!V2.some(n=>t instanceof n))throw new v("view-writer-insert-invalid-node-type",e);t.is("$text")||fm(t.getChildren(),e)}}const V2=[ht,wr,Ga,am,dm,Cd];function xd(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function Ms(r,e){const t=Ad(r.start),n=Ad(r.end);if(!t||!n||t!==n)throw new v("view-writer-invalid-range-container",e)}function mm(r,e){return r.id===null&&e.id===null}function qt(r){return Object.prototype.toString.call(r)=="[object Text]"}const pm=r=>r.createTextNode("\xA0"),bm=r=>{const e=r.createElement("span");return e.dataset.ckeFiller=!0,e.innerText="\xA0",e},km=r=>{const e=r.createElement("br");return e.dataset.ckeFiller=!0,e},Qa="\u2060".repeat(7);function Sn(r){return qt(r)&&r.data.substr(0,7)===Qa}function Za(r){return r.data.length==7&&Sn(r)}function Ed(r){return Sn(r)?r.data.slice(7):r.data}function H2(r,e){if(e.keyCode==Ve.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;Sn(n)&&i<=7&&t.collapse(n,0)}}}function wm(r,e,t,n=!1){t=t||function(c,u){return c===u};const i=Array.isArray(r)?r:Array.prototype.slice.call(r),s=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(c,u,f){const m=vm(c,u,f);if(m===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const w=_m(c,m),C=_m(u,m),S=vm(w,C,f),D=c.length-S,I=u.length-S;return{firstIndex:m,lastIndexOld:D,lastIndexNew:I}}(i,s,t);return n?function(c,u){const{firstIndex:f,lastIndexOld:m,lastIndexNew:w}=c;if(f===-1)return Array(u).fill("equal");let C=[];return f>0&&(C=C.concat(Array(f).fill("equal"))),w-f>0&&(C=C.concat(Array(w-f).fill("insert"))),m-f>0&&(C=C.concat(Array(m-f).fill("delete"))),w<u&&(C=C.concat(Array(u-w).fill("equal"))),C}(a,s.length):function(c,u){const f=[],{firstIndex:m,lastIndexOld:w,lastIndexNew:C}=u;return C-m>0&&f.push({index:m,type:"insert",values:c.slice(m,C)}),w-m>0&&f.push({index:m+(C-m),type:"delete",howMany:w-m}),f}(s,a)}function vm(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function _m(r,e){return r.slice(e).reverse()}function Ko(r,e,t){t=t||function(I,B){return I===B};const n=r.length,i=e.length;if(n>200||i>200||n+i>300)return Ko.fastDiff(r,e,t,!0);let s,a;if(i<n){const I=r;r=e,e=I,s="delete",a="insert"}else s="insert",a="delete";const c=r.length,u=e.length,f=u-c,m={},w={};function C(I){const B=(w[I-1]!==void 0?w[I-1]:-1)+1,O=w[I+1]!==void 0?w[I+1]:-1,K=B>O?-1:1;m[I+K]&&(m[I]=m[I+K].slice(0)),m[I]||(m[I]=[]),m[I].push(B>O?s:a);let ne=Math.max(B,O),we=ne-I;for(;we<c&&ne<u&&t(r[we],e[ne]);)we++,ne++,m[I].push("equal");return ne}let S,D=0;do{for(S=-D;S<f;S++)w[S]=C(S);for(S=f+D;S>f;S--)w[S]=C(S);w[f]=C(f),D++}while(w[f]!==u);return m[f].slice(1)}function Cm(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function Am(r){const e=r.parentNode;e&&e.removeChild(r)}function vr(r){return r&&r.nodeType===Node.COMMENT_NODE}function _r(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}Ko.fastDiff=wm;var U2=g(6062),Me=g.n(U2),ym=g(9315),$2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(ym.Z,$2),ym.Z.locals;class xm{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),at.isBlink&&!at.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new v("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(at.isBlink&&!at.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=be._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;Sn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Em(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),i=this._diffNodeLists(t,n),s=this._findReplaceActions(i,t,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="replace"){const u=a.equal+a.insert,f=a.equal+a.delete,m=e.getChild(u);!m||m.is("uiElement")||m.is("rawElement")||this._updateElementMappings(m,t[f]),Am(n[u]),a.equal++}else a[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?be._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&qt(t.parent)&&Sn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Sn(e))throw new v("view-renderer-filler-was-lost",this);Za(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const c=a.findAncestor(u=>u.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,s=e.nodeAfter;return!(i instanceof ht||s instanceof ht)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),i=this.domConverter.viewToDom(e),s=n.data;let a=i.data;const c=t.inlineFillerPosition;if(c&&c.parent==e.parent&&c.offset==e.index&&(a=Qa+a),s!=a){const u=wm(s,a);for(const f of u)f.type==="insert"?n.insertData(f.index,f.values.join("")):n.deleteData(f.index,f.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),i=e.getAttributeKeys();for(const s of i)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const i=t.inlineFillerPosition,s=this.domConverter.mapViewToDom(e).childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Em(n.ownerDocument,a,i.offset);const c=this._diffNodeLists(s,a);let u=0;const f=new Set;for(const m of c)m==="delete"?(f.add(s[u]),Am(s[u])):m==="equal"&&u++;u=0;for(const m of c)m==="insert"?(Cm(n,u,a[u]),u++):m==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[u])),u++);for(const m of f)m.parentNode||this.domConverter.unbindDomElement(m)}_diffNodeLists(e,t){return Ko(e=function(n,i){const s=Array.from(n);return s.length==0||!i||s[s.length-1]==i&&s.pop(),s}(e,this._fakeSelectionContainer),t,W2.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let i=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const u of e)u==="insert"?a.push(n[c.equal+c.insert]):u==="delete"?s.push(t[c.equal+c.delete]):(i=i.concat(Ko(s,a,Sm).map(f=>f==="equal"?"replace":f)),i.push("equal"),s=[],a=[]),c[u]++;return i.concat(Ko(s,a,Sm).map(u=>u==="equal"?"replace":u))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(at.isBlink&&!at.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const c=a.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent="\xA0",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const i=t.getSelection(),s=t.createRange();i.removeAllRanges(),s.selectNodeContents(n),i.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(i.parent,i.offset),at.isGecko&&function(s,a){const c=s.parent;if(c.nodeType!=Node.ELEMENT_NODE||s.offset!=c.childNodes.length-1)return;const u=c.childNodes[s.offset];u&&u.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments)if(e.getSelection().rangeCount){const t=e.activeElement,n=this.domConverter.mapDomToView(t);t&&n&&e.getSelection().removeAllRanges()}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Em(r,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(qt(i))return i.data=Qa+i.data,i;{const s=r.createTextNode(Qa);return Array.isArray(e)?n.splice(t,0,s):Cm(e,t,s),s}}function Sm(r,e){return _r(r)&&_r(e)&&!qt(r)&&!qt(e)&&!vr(r)&&!vr(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function W2(r,e,t){return e===t||(qt(e)&&qt(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}oe(xm,Ne);const Ct={window,document};function Sd(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function Dm(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const q2=km(Ct.document),G2=pm(Ct.document),K2=bm(Ct.document),Ja="data-ck-unsafe-attribute-",Im="data-ck-unsafe-element";class Xa{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ct.document:Ct.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new fo,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Xn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)i.appendChild(s[0]);const a=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=a.nextNode();)c.push(u);for(const f of c){for(const w of f.getAttributeNames())this.setDomElementAttribute(f,w,f.getAttribute(w));const m=f.tagName.toLowerCase();this._shouldRenameElement(m)&&(Bm(m),f.replaceWith(this._createReplacementDomElement(m,f)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Bm(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const i of e.getAttributeKeys())this.setDomElementAttribute(n,i,e.getAttribute(i),e)}if(t.withChildren!==!1)for(const i of this.viewChildrenToDom(e,t))n.appendChild(i);return n}}setDomElementAttribute(e,t,n,i=null){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);s||E("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Ja+t)&&s&&e.removeAttribute(Ja+t),e.setAttribute(s?t:Ja+t,n)}removeDomElementAttribute(e,t){t!=Im&&(e.removeAttribute(t),e.removeAttribute(Ja+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const s of e.getChildren()){n===i&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(a&&E("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return Sn(n)&&(i+=7),{parent:n,offset:i}}{let n,i,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(e.nodeBefore),!i)return null;n=i.parentNode,s=i.nextSibling}return qt(s)&&Sn(s)?{parent:s,offset:7}:{parent:n,offset:i?Sd(i)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(vr(e)&&t.skipComments)return null;if(qt(e)){if(Za(e))return null;{const i=this._processDataFromDomText(e);return i===""?null:new ht(this.document,i)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new Ri(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const s=e.attributes;if(s)for(let a=s.length,c=0;c<a;c++)i._setAttribute(s[c].name,s[c].value);if(this._isViewElementWithRawContent(i,t)||vr(e)){const a=vr(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),i}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))i._appendChild(s);return i}}*domChildrenToView(e,t={}){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n],s=this.domToView(i,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;qt(i)&&(i=i.parentNode);const s=this.fakeSelectionToView(i);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const s=e.getRangeAt(i),a=this.domRangeToView(s);a&&n.push(a)}return new Xn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Be(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Sd(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return be._createBefore(n);if(qt(e)){if(Za(e))return this.domPositionToView(e.parentNode,Sd(e));const i=this.findCorrespondingViewText(e);let s=t;return i?(Sn(e)&&(s-=7,s=s<0?0:s),new be(i,s)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new be(i,0)}else{const i=e.childNodes[t-1],s=qt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(s&&s.parent)return new be(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Za(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i)return i.nextSibling instanceof ht?i.nextSibling:null}else{const i=this.mapDomToView(e.parentNode);if(i){const s=i.getChild(0);return s instanceof ht?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=Ct.window,s=[];Tm(t,a=>{const{scrollLeft:c,scrollTop:u}=a;s.push([c,u])}),t.focus(),Tm(t,a=>{const[c,u]=s.shift();a.scrollLeft=c,a.scrollTop=u}),Ct.window.scrollTo(n,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(q2):!(e.tagName!=="BR"||!Mm(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(K2)||function(t,n){return t.isEqualNode(G2)&&Mm(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Dm(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return pm(this._domDocument);case"markedNbsp":return bm(this._domDocument);case"br":return km(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(qt(e)&&Sn(e)&&t<7||this.isElement(e)&&Sn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(f,m){return Dm(f).some(w=>w.tagName&&m.includes(w.tagName.toLowerCase()))}(e,this.preElements))return Ed(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),i=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,i);s&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Ed(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const c=i&&this.isElement(i)&&i.tagName!="BR",u=i&&qt(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!i||c||u)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Sn(e)}_getTouchingInlineViewNode(e,t){const n=new Li({startPosition:t?be._createAfter(e):be._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",i=t?"nextSibling":"previousSibling";let s=!0;do if(!s&&e[n]?e=e[n]:e[i]?(e=e[i],s=!1):(e=e.parentNode,s=!0),!e||this._isBlockElement(e))return null;while(!qt(e)&&e.tagName!="BR"&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(vr(e))return new Cd(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new $n(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t=null){const n=this._domDocument.createElement("span");if(n.setAttribute(Im,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function Tm(r,e){for(;r&&r!=Ct.document;)e(r),r=r.parentNode}function Mm(r,e){const t=r.parentNode;return t&&t.tagName&&e.includes(t.tagName.toLowerCase())}function Bm(r){r==="script"&&E("domconverter-unsafe-script-element-detected"),r==="style"&&E("domconverter-unsafe-style-element-detected")}function el(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}const Dd=tm(function(r,e){mr(e,br(e),r)}),Y2=Dd({},L,{listenTo(r,e,t,n={}){if(_r(r)||el(r)){const i={capture:!!n.useCapture,passive:!!n.usePassive},s=this._getProxyEmitter(r,i)||new Nm(r,i);this.listenTo(s,e,t,n)}else L.listenTo.call(this,r,e,t,n)},stopListening(r,e,t){if(_r(r)||el(r)){const n=this._getAllProxyEmitters(r);for(const i of n)this.stopListening(i,e,t)}else L.stopListening.call(this,r,e,t)},_getProxyEmitter(r,e){return function(t,n){const i=t[R];return i&&i[n]?i[n].emitter:null}(this,Pm(r,e))},_getAllProxyEmitters(r){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(r,e)).filter(e=>!!e)}}),Bs=Y2;class Nm{constructor(e,t){V(this,Pm(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),L._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){L._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Pm(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=A())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}oe(Nm,L);class po{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}oe(po,Bs);const Q2=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},Z2=function(r){return this.__data__.has(r)};function tl(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new Va;++e<t;)this.add(r[e])}tl.prototype.add=tl.prototype.push=Q2,tl.prototype.has=Z2;const J2=tl,X2=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},eE=function(r,e){return r.has(e)},zm=function(r,e,t,n,i,s){var a=1&t,c=r.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var f=s.get(r),m=s.get(e);if(f&&m)return f==e&&m==r;var w=-1,C=!0,S=2&t?new J2:void 0;for(s.set(r,e),s.set(e,r);++w<c;){var D=r[w],I=e[w];if(n)var B=a?n(I,D,w,e,r,s):n(D,I,w,r,e,s);if(B!==void 0){if(B)continue;C=!1;break}if(S){if(!X2(e,function(O,K){if(!eE(S,K)&&(D===O||i(D,O,t,n,s)))return S.push(K)})){C=!1;break}}else if(D!==I&&!i(D,I,t,n,s)){C=!1;break}}return s.delete(r),s.delete(e),C},tE=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,i){t[++e]=[i,n]}),t},nE=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var Lm=re?re.prototype:void 0,Id=Lm?Lm.valueOf:void 0;const oE=function(r,e,t,n,i,s,a){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!s(new $a(r),new $a(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return en(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var c=tE;case"[object Set]":var u=1&n;if(c||(c=nE),r.size!=e.size&&!u)return!1;var f=a.get(r);if(f)return f==e;n|=2,a.set(r,e);var m=zm(c(r),c(e),n,i,s,a);return a.delete(r),m;case"[object Symbol]":if(Id)return Id.call(r)==Id.call(e)}return!1};var iE=Object.prototype.hasOwnProperty;const rE=function(r,e,t,n,i,s){var a=1&t,c=Jc(r),u=c.length;if(u!=Jc(e).length&&!a)return!1;for(var f=u;f--;){var m=c[f];if(!(a?m in e:iE.call(e,m)))return!1}var w=s.get(r),C=s.get(e);if(w&&C)return w==e&&C==r;var S=!0;s.set(r,e),s.set(e,r);for(var D=a;++f<u;){var I=r[m=c[f]],B=e[m];if(n)var O=a?n(B,I,m,e,r,s):n(I,B,m,r,e,s);if(!(O===void 0?I===B||i(I,B,t,n,s):O)){S=!1;break}D||(D=m=="constructor")}if(S&&!D){var K=r.constructor,ne=e.constructor;K==ne||!("constructor"in r)||!("constructor"in e)||typeof K=="function"&&K instanceof K&&typeof ne=="function"&&ne instanceof ne||(S=!1)}return s.delete(r),s.delete(e),S};var Om="[object Arguments]",Rm="[object Array]",nl="[object Object]",Fm=Object.prototype.hasOwnProperty;const sE=function(r,e,t,n,i,s){var a=dn(r),c=dn(e),u=a?Rm:Es(r),f=c?Rm:Es(e),m=(u=u==Om?nl:u)==nl,w=(f=f==Om?nl:f)==nl,C=u==f;if(C&&ys(r)){if(!ys(e))return!1;a=!0,m=!1}if(C&&!m)return s||(s=new As),a||Kc(r)?zm(r,e,t,n,i,s):oE(r,e,u,t,n,i,s);if(!(1&t)){var S=m&&Fm.call(r,"__wrapped__"),D=w&&Fm.call(e,"__wrapped__");if(S||D){var I=S?r.value():r,B=D?e.value():e;return s||(s=new As),i(I,B,t,n,s)}}return!!C&&(s||(s=new As),rE(r,e,t,n,i,s))},jm=function r(e,t,n,i,s){return e===t||(e==null||t==null||!je(e)&&!je(t)?e!=e&&t!=t:sE(e,t,n,i,r,s))},aE=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?jm(r,e,void 0,t):!!n};class Vm extends po{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,i=new Set;for(const f of e)if(f.type==="childList"){const m=t.mapDomToView(f.target);if(m&&(m.is("uiElement")||m.is("rawElement")))continue;m&&!this._isBogusBrMutation(f)&&i.add(m)}for(const f of e){const m=t.mapDomToView(f.target);if((!m||!m.is("uiElement")&&!m.is("rawElement"))&&f.type==="characterData"){const w=t.findCorrespondingViewText(f.target);w&&!i.has(w.parent)?n.set(w,{type:"text",oldText:w.data,newText:Ed(f.target),node:w}):!w&&Sn(f.target)&&i.add(t.mapDomToView(f.target.parentNode))}}const s=[];for(const f of n.values())this.renderer.markToSync("text",f.node),s.push(f);for(const f of i){const m=t.mapViewToDom(f),w=Array.from(f.getChildren()),C=Array.from(t.domChildrenToView(m,{withChildren:!1}));aE(w,C,u)||(this.renderer.markToSync("children",f),s.push({type:"children",oldChildren:w,newChildren:C,node:f}))}const a=e[0].target.ownerDocument.getSelection();let c=null;if(a&&a.anchorNode){const f=t.domPositionToView(a.anchorNode,a.anchorOffset),m=t.domPositionToView(a.focusNode,a.focusOffset);f&&m&&(c=new Xn(f),c.setFocus(m))}function u(f,m){if(!Array.isArray(f))return f===m||!(!f.is("$text")||!m.is("$text"))&&f.data===m.data}s.length&&(this.document.fire("mutations",s,c),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Td{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Dd(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Yo extends po{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Td(this.view,t,n))}}class lE extends Yo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return mo(this)}})}}const Md=function(){return ie.Date.now()};var cE=/\s/;const dE=function(r){for(var e=r.length;e--&&cE.test(r.charAt(e)););return e};var uE=/^\s+/;const hE=function(r){return r&&r.slice(0,dE(r)+1).replace(uE,"")};var gE=/^[-+]0x[0-9a-f]+$/i,fE=/^0b[01]+$/i,mE=/^0o[0-7]+$/i,pE=parseInt;const Hm=function(r){if(typeof r=="number")return r;if(Wa(r))return NaN;if(pe(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=pe(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=hE(r);var t=fE.test(r);return t||mE.test(r)?pE(r.slice(2),t?2:8):gE.test(r)?NaN:+r};var bE=Math.max,kE=Math.min;const ol=function(r,e,t){var n,i,s,a,c,u,f=0,m=!1,w=!1,C=!0;if(typeof r!="function")throw new TypeError("Expected a function");function S(ne){var we=n,Te=i;return n=i=void 0,f=ne,a=r.apply(Te,we)}function D(ne){return f=ne,c=setTimeout(B,e),m?S(ne):a}function I(ne){var we=ne-u;return u===void 0||we>=e||we<0||w&&ne-f>=s}function B(){var ne=Md();if(I(ne))return O(ne);c=setTimeout(B,function(we){var Te=e-(we-u);return w?kE(Te,s-(we-f)):Te}(ne))}function O(ne){return c=void 0,C&&n?S(ne):(n=i=void 0,a)}function K(){var ne=Md(),we=I(ne);if(n=arguments,i=this,u=ne,we){if(c===void 0)return D(u);if(w)return clearTimeout(c),c=setTimeout(B,e),S(u)}return c===void 0&&(c=setTimeout(B,e)),a}return e=Hm(e)||0,pe(t)&&(m=!!t.leading,s=(w="maxWait"in t)?bE(Hm(t.maxWait)||0,e):s,C="trailing"in t?!!t.trailing:C),K.cancel=function(){c!==void 0&&clearTimeout(c),f=0,n=u=i=c=void 0},K.flush=function(){return c===void 0?a:O(Md())},K};class wE extends po{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=ol(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Xn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Ve.arrowleft&&e!=Ve.arrowup||n.setTo(n.getFirstPosition()),e!=Ve.arrowright&&e!=Ve.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class vE extends po{constructor(e){super(e),this.mutationObserver=e.getObserver(Vm),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=ol(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=ol(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(i,s)=>{this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(i))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class _E extends Yo{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,i)=>{const s=t.selection.editableElement;s!==null&&s!==i.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class CE extends Yo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class AE extends Yo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}const Um=function(r){return typeof r=="string"||!dn(r)&&je(r)&&Se(r)=="[object String]"};function $m(r,e,t={},n=[]){const i=t&&t.xmlns,s=i?r.createElementNS(i,e):r.createElement(e);for(const a in t)s.setAttribute(a,t[a]);!Um(n)&&Un(n)||(n=[n]);for(let a of n)Um(a)&&(a=r.createTextNode(a)),s.appendChild(a);return s}class At{constructor(e,t){At._observerInstance||At._createObserver(),this._element=e,this._callback=t,At._addElementCallback(e,t),At._observerInstance.observe(e)}destroy(){At._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){At._elementCallbacks||(At._elementCallbacks=new Map);let n=At._elementCallbacks.get(e);n||(n=new Set,At._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=At._getElementCallbacks(e);n&&(n.delete(t),n.size||(At._elementCallbacks.delete(e),At._observerInstance.unobserve(e))),At._elementCallbacks&&!At._elementCallbacks.size&&(At._observerInstance=null,At._elementCallbacks=null)}static _getElementCallbacks(e){return At._elementCallbacks?At._elementCallbacks.get(e):null}static _createObserver(){At._observerInstance=new Ct.window.ResizeObserver(e=>{for(const t of e){const n=At._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}}function Ft(r){const e=r.next();return e.done?null:e.value}At._observerInstance=null,At._elementCallbacks=null;class Bd{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new v("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}oe(Bd,Bs),oe(Bd,Ne);const Dn=Bd;class Wn{constructor(){this._listener=Object.create(Bs)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+mo(n),n)})}set(e,t,n={}){const i=vd(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(a,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+mo(e),e)}destroy(){this._listener.stopListening()}}class yE extends po{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((i=n.keyCode)==Ve.arrowright||i==Ve.arrowleft||i==Ve.arrowup||i==Ve.arrowdown)){const s=new Ds(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var i})}observe(){}}class xE extends po{constructor(e){super(e);const t=this.document;t.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=Ve.tab||i.ctrlKey)return;const s=new Ds(t,"tab",t.selection.getFirstRange());t.fire(s,i),s.stop.called&&n.stop()})}observe(){}}function il(r){return Object.prototype.toString.apply(r)=="[object Range]"}function Wm(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const qm=["top","right","bottom","left","width","height"];class gt{constructor(e){const t=il(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Km(e)||t)if(t){const n=gt.getDomRangeRects(e);rl(this,gt.getBoundingRect(n))}else rl(this,e.getBoundingClientRect());else if(el(e)){const{innerWidth:n,innerHeight:i}=e;rl(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else rl(this,e)}clone(){return new gt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new gt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Gm(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Gm(n);){const i=new gt(n),s=t.getIntersection(i);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of qm)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(el(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const s=Wm(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new gt(i));else{let i=e.startContainer;qt(i)&&(i=i.parentNode);const s=new gt(i.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new gt(t))}}function rl(r,e){for(const t of qm)r[t]=e[t]}function Gm(r){return!!Km(r)&&r===r.ownerDocument.body}function Km(r){return Ni(r)}function EE(r,e,t){const n=e.clone().moveBy(0,t),i=e.clone().moveBy(0,-t),s=new gt(r).excludeScrollbarsAndBorders();if(![i,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:c}=r;Qm(i,s)?c-=s.top-e.top+t:Ym(n,s)&&(c+=e.bottom-s.bottom+t),Zm(e,s)?a-=s.left-e.left+t:Jm(e,s)&&(a+=e.right-s.right+t),r.scrollTo(a,c)}}function SE(r,e){const t=Nd(r);let n,i;for(;r!=t.document.body;)i=e(),n=new gt(r).excludeScrollbarsAndBorders(),n.contains(i)||(Qm(i,n)?r.scrollTop-=n.top-i.top:Ym(i,n)&&(r.scrollTop+=i.bottom-n.bottom),Zm(i,n)?r.scrollLeft-=n.left-i.left:Jm(i,n)&&(r.scrollLeft+=i.right-n.right)),r=r.parentNode}function Ym(r,e){return r.bottom>e.bottom}function Qm(r,e){return r.top<e.top}function Zm(r,e){return r.left<e.left}function Jm(r,e){return r.right>e.right}function Nd(r){return il(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function DE(r){if(il(r)){let e=r.commonAncestorContainer;return qt(e)&&(e=e.parentNode),e}return r.parentNode}function Xm(r,e){const t=Nd(r),n=new gt(r);if(t===e)return n;{let i=t;for(;i!=e;){const s=i.frameElement,a=new gt(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),i=i.parent}}return n}class ep{constructor(e){this.document=new Ts(e),this.domConverter=new Xa(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new xm(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new um(this.document),this.addObserver(Vm),this.addObserver(vE),this.addObserver(_E),this.addObserver(lE),this.addObserver(wE),this.addObserver(CE),this.addObserver(yE),this.addObserver(xE),at.isAndroid&&this.addObserver(AE),this.document.on("arrowKey",H2,{priority:"low"}),O2(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const i={};for(const{name:a,value:c}of Array.from(e.attributes))i[a]=c,a==="class"?this._writer.addClass(c.split(" "),n):this._writer.setAttribute(a,c,n);this._initialDomRootAttributes.set(e,i);const s=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(a,c)=>this._renderer.markToSync("children",c)),n.on("change:attributes",(a,c)=>this._renderer.markToSync("attributes",c)),n.on("change:text",(a,c)=>this._renderer.markToSync("text",c)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:i})=>t.removeAttribute(i));const n=this._initialDomRootAttributes.get(t);for(const i in n)t.setAttribute(i,n[i]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,i]of this.domRoots)t.observe(i,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const i=Nd(t);let s=i,a=null;for(;s;){let c;c=DE(s==i?t:a),SE(c,()=>Xm(t,s));const u=Xm(t,s);if(EE(s,u,n),s.parent!=s){if(a=s.frameElement,s=s.parent,!a)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new v("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){v.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return be._createAt(e,t)}createPositionAfter(e){return be._createAfter(e)}createPositionBefore(e){return be._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Xn(e,t,n)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}oe(ep,Ne);class Fi{constructor(e){this.parent=null,this._attrs=go(e)}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=tn(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}is(e){return e==="node"||e==="model:node"}_clone(){return new Fi(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=go(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class ft extends Fi{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return e==="$text"||e==="model:$text"||e==="text"||e==="model:text"||e==="node"||e==="model:node"}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new ft(this.data,this.getAttributes())}static fromJSON(e){return new ft(e.data,e.attributes)}}class bo{constructor(e,t,n){if(this.textNode=e,t<0||t>e.offsetSize)throw new v("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new v("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return e==="$textProxy"||e==="model:$textProxy"||e==="textProxy"||e==="model:textProxy"}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Cr{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new v("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new v("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Fi))throw new v("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class lt extends Fi{constructor(e,t,n){super(t),this.name=e,this._children=new Cr,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="model:element"):e==="element"||e==="model:element"||e==="node"||e==="model:node"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={includeSelf:!1}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):null;return new lt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new ft(i)]:(Un(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new ft(s):s instanceof bo?new ft(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}static fromJSON(e){let t=null;if(e.children){t=[];for(const n of e.children)n.name?t.push(lt.fromJSON(n)):t.push(ft.fromJSON(n))}return new lt(e.name,e.attributes,t)}}class ko{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new v("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=le._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,i,s;do i=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const i=Ns(t,n),s=i||tp(t,n,i);if(s instanceof lt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,ji("elementStart",s,e,t,1);if(s instanceof ft){let a;if(this.singleCharacters)a=1;else{let f=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<f&&(f=this.boundaries.end.offset),a=f-t.offset}const c=t.offset-s.startOffset,u=new bo(s,c,a);return t.offset+=a,this.position=t,ji("text",u,e,t,a)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():ji("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const i=t.parent,s=Ns(t,i),a=s||np(t,i,s);if(a instanceof lt)return t.offset--,this.shallow?(this.position=t,ji("elementStart",a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():ji("elementEnd",a,e,t));if(a instanceof ft){let c;if(this.singleCharacters)c=1;else{let m=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>m&&(m=this.boundaries.start.offset),c=t.offset-m}const u=t.offset-a.startOffset,f=new bo(a,u-c,c);return t.offset-=c,this.position=t,ji("text",f,e,t,c)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,ji("elementStart",n,e,t,1)}}function ji(r,e,t,n,i){return{done:!1,value:{type:r,item:e,previousPosition:t,nextPosition:n,length:i}}}class le{constructor(e,t,n="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new v("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new v("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new v("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new v("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Ns(this,this.parent)}get nodeAfter(){const e=this.parent;return tp(this,e,Ns(this,e))}get nodeBefore(){const e=this.parent;return np(this,e,Ns(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=tn(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new ko(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=tn(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=le._createAt(this),n=le._createAt(e);break;case"after":t=le._createAt(e),n=le._createAt(this);break;default:return!1}let i=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==i.maxOffset)return!1;t.path=t.path.slice(0,-1),i=i.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(e){return e==="position"||e==="model:position"}hasSameParentAs(e){return this.root!==e.root?!1:tn(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=le._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?le._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(tn(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(tn(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;if(e.offset<=this.path[i]){if(e.offset+t>this.path[i])return null;n.path[i]-=t}}return n}_getTransformedByInsertion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(tn(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(tn(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;e.offset<=this.path[i]&&(n.path[i]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return le._createAt(this);const i=this._getTransformedByDeletion(e,n);return i===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):i._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,i=le._createAt(t);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-e.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof le)return new le(e.root,e.path,e.stickiness);{const i=e;if(t=="end")t=i.maxOffset;else{if(t=="before")return this._createBefore(i,n);if(t=="after")return this._createAfter(i,n);if(t!==0&&!t)throw new v("model-createpositionat-offset-required",[this,e])}if(!i.is("element")&&!i.is("documentFragment"))throw new v("model-position-parent-incorrect",[this,e]);const s=i.getPath();return s.push(t),new this(i.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new v("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new v("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new le(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new v("model-position-fromjson-no-root",t,{rootName:e.root});return new le(t.getRoot(e.root),e.path,e.stickiness)}}function Ns(r,e){const t=e.getChild(e.offsetToIndex(r.offset));return t&&t.is("$text")&&t.startOffset<r.offset?t:null}function tp(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset))}function np(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset)-1)}class te{constructor(e,t=null){this.start=le._createAt(e),this.end=t?le._createAt(t):le._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new ko({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return tn(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}containsItem(e){const t=le._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return e==="range"||e==="model:range"}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new te(this.start,e.start)),this.containsPosition(e.end)&&t.push(new te(e.end,this.end))):t.push(new te(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new te(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let i=this.start,s=this.end;return e.start.isBefore(i)&&(i=e.start),e.end.isAfter(s)&&(s=e.end),new te(i,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=le._createAt(this.start);let i=n.parent;for(;n.path.length>t+1;){const s=i.maxOffset-n.offset;s!==0&&e.push(new te(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],a=s-n.offset;a!==0&&e.push(new te(n,n.getShiftedBy(a))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new ko(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new ko(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new ko(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new te(this.start,this.end)]}getTransformedByOperations(e){const t=[new te(this.start,this.end)];for(const n of e)for(let i=0;i<t.length;i++){const s=t[i].getTransformedByOperation(n);t.splice(i,1,...s),i+=s.length-1}for(let n=0;n<t.length;n++){const i=t[n];for(let s=n+1;s<t.length;s++){const a=t[s];(i.containsRange(a)||a.containsRange(i)||i.isEqual(a))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,i=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,i,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new te(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new te(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=le._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new te(t,n)):new te(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new te(this.start,e),new te(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new te(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,n,i=!1){if(this.isCollapsed){const w=this.start._getTransformedByMove(e,t,n);return[new te(w)]}const s=te._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!i&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const w=this.start._getTransformedByMove(e,t,n),C=this.end._getTransformedByMove(e,t,n);return[new te(w,C)]}let c;const u=this.getDifference(s);let f=null;const m=this.getIntersection(s);if(u.length==1?f=new te(u[0].start._getTransformedByDeletion(e,n),u[0].end._getTransformedByDeletion(e,n)):u.length==2&&(f=new te(this.start,this.end._getTransformedByDeletion(e,n))),c=f?f._getTransformedByInsertion(a,n,m!==null||i):[],m){const w=new te(m.start._getCombined(s.start,a),m.end._getCombined(s.start,a));c.length==2?c.splice(1,0,w):c.push(w)}return c}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),i=this.end._getTransformedByDeletion(e,t);return n==null&&i==null?null:(n==null&&(n=e),i==null&&(i=e),new te(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return new this(le._createAt(e,0),le._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(le._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new v("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,a)=>s.start.isAfter(a.start)?1:-1);const n=e.indexOf(t),i=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(i.start);s++)i.start=le._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(i.end);s++)i.end=le._createAt(e[s].end);return i}static fromJSON(e,t){return new this(le.fromJSON(e.start,t),le.fromJSON(e.end,t))}}class Pd{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new v("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),i=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=le._createAt(i,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const i of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(i);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const i=this._elementToMarkerNames.get(e)||new Set;i.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,i)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const i=this._elementToMarkerNames.get(e);i&&(i.delete(t),i.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new te(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Be(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const i of t)if(i.is("attributeElement"))for(const s of i.getElementsWithSameId())n.add(s);else n.add(i);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let i=0;for(let s=0;s<t;s++)i+=this.getModelLength(e.getChild(s));return i}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,i=0,s=0,a=0;if(e.is("$text"))return new be(e,t);for(;s<t;)n=e.getChild(a),i=this.getModelLength(n),s+=i,a++;return s==t?this._moveViewPositionToTextNode(new be(e,a)):this.findPositionIn(n,t-(s-i))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof ht?new be(t,t.data.length):n instanceof ht?new be(n,0):e}}oe(Pd,L);class IE{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=sl(t),e instanceof bo&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=sl(t),e instanceof bo&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=sl(t),e instanceof bo&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const i=n.get(t);return i===void 0?null:i}revert(e,t){t=sl(t),e instanceof bo&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,i]of this._consumable)for(const[s,a]of i){const c=s.split(":")[0];a&&e==c&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new v("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const i=n.get(e.endOffset);i&&(t=i.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,i=e.parent,s=Symbol("$textProxy:"+e.data);let a,c;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),c=a.get(n),c||(c=new Map,a.set(n,c)),c.set(i,s),s}}function sl(r){const e=r.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?r:e.length>1?e[0]+":"+e[1]:e[0]}class zd{constructor(e){this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const i=this._createConversionApi(n,e.getRefreshedItems());for(const a of e.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,i);const s=this._reduceChanges(e.getChanges());for(const a of s)a.type==="insert"?this._convertInsert(te._createFromPositionAndShift(a.position,a.length),i):a.type==="reinsert"?this._convertReinsert(te._createFromPositionAndShift(a.position,a.length),i):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,i):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,i);for(const a of i.mapper.flushUnboundMarkerNames()){const c=t.get(a).getRange();this._convertMarkerRemove(a,c,i),this._convertMarkerAdd(a,c,i)}for(const a of e.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(e,t,n,i={}){const s=this._createConversionApi(n,void 0,i);this._convertInsert(e,s);for(const[a,c]of t)this._convertMarkerAdd(a,c,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const i=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,i),this.fire("selection",{selection:e},s),e.isCollapsed){for(const a of i){const c=a.getRange();if(!TE(e.getFirstPosition(),a,s.mapper))continue;const u={item:e,markerName:a.name,markerRange:c};s.consumable.test(e,"addMarker:"+a.name)&&this.fire("addMarker:"+a.name,u,s)}for(const a of e.getAttributeKeys()){const c={item:e,range:e.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:e.getAttribute(a)};s.consumable.test(e,"attribute:"+c.attributeKey)&&this.fire("attribute:"+c.attributeKey+":$text",c,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const i of Array.from(e.getWalker({shallow:!0})).map(op))this._testAndFire("insert",i,t)}_convertRemove(e,t,n,i){this.fire("remove:"+n,{position:e,length:t},i)}_convertAttribute(e,t,n,i,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const a of e){const c={item:a.item,range:te._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${t}`,c,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const i of n.map(op))this._testAndFire("insert",{...i,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const i="addMarker:"+e;if(n.consumable.add(t,i),this.fire(i,{markerName:e,markerRange:t},n),n.consumable.consume(t,i)){this._addConsumablesForRange(n.consumable,t,i);for(const s of t.getItems()){if(!n.consumable.test(s,i))continue;const a={item:s,range:te._createOn(s),markerName:e,markerRange:t};this.fire(i,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire("removeMarker:"+e,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const i=n.item;if(e.test(i,"insert")===null){e.add(i,"insert");for(const s of i.getAttributeKeys())e.add(i,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const i of t.getItems())e.add(i,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const i of n)e.add(t,"addMarker:"+i.name);for(const i of t.getAttributeKeys())e.add(t,"attribute:"+i);return e}_testAndFire(e,t,n){const i=function(u,f){const m=f.item.name||"$text";return`${u}:${m}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),c=a.get(s);if(c){if(c.has(i))return;c.add(i)}else a.set(s,new Set([i]));this.fire(i,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:te._createOn(e)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,t)}_createConversionApi(e,t=new Set,n={}){const i={...this._conversionApi,consumable:new IE,writer:e,options:n,convertItem:s=>this._convertInsert(te._createOn(s),i),convertChildren:s=>this._convertInsert(te._createIn(s),i,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,i),canReuseView:s=>!t.has(i.mapper.toModelElement(s))};return this._firedEventsMap.set(i,new Map),i}}function TE(r,e,t){const n=e.getRange(),i=Array.from(r.getAncestors());return i.shift(),i.reverse(),!i.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function op(r){return{item:r.item,range:te._createFromPositionAndShift(r.previousPosition,r.length)}}oe(zd,L);class Bo{constructor(e,t,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,n)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new te(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new te(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new te(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,n){if(e===null)this._setRanges([]);else if(e instanceof Bo)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof te)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof le)this._setRanges([new te(e)]);else if(e instanceof Fi){const i=!!n&&!!n.backward;let s;if(t=="in")s=te._createIn(e);else if(t=="on")s=te._createOn(e);else{if(t===void 0)throw new v("model-selection-setto-required-second-parameter",[this,e]);s=new te(le._createAt(e,t))}this._setRanges([s],i)}else{if(!Un(e))throw new v("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const n=(e=Array.from(e)).some(i=>{if(!(i instanceof te))throw new v("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(i))});if(e.length!==this._ranges.length||n){this._removeAllRanges();for(const i of e)this._pushRange(i);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(this.anchor===null)throw new v("model-selection-setfocus-no-ranges",[this,e]);const n=le._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new te(n,i)),this._lastRangeBackward=!0):(this._pushRange(new te(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(e){return e==="selection"||e==="model:selection"}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=rp(t.start,e);n&&Ld(n,t)&&(yield n);for(const s of t.getWalker()){const a=s.item;s.type=="elementEnd"&&ME(a,e,t)&&(yield a)}const i=rp(t.end,e);i&&!t.end.isTouching(le._createAt(i,0))&&Ld(i,t)&&(yield i)}}containsEntireContent(e=this.anchor.root){const t=le._createAt(e,0),n=le._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new te(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new v("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ip(r,e){return!e.has(r)&&(e.add(r),r.root.document.model.schema.isBlock(r)&&r.parent)}function ME(r,e,t){return ip(r,e)&&Ld(r,t)}function rp(r,e){const t=r.parent.root.document.model.schema,n=r.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const s=n.find(a=>!i&&(i=t.isLimit(a),!i&&ip(a,e)));return n.forEach(a=>e.add(a)),s}function Ld(r,e){const t=function(n){const i=n.root.document.model.schema;let s=n.parent;for(;s;){if(i.isBlock(s))return s;s=s.parent}}(r);return t?!e.containsRange(te._createOn(t),!0):!0}oe(Bo,L);class wo extends te{constructor(e,t){super(e,t),BE.call(this)}detach(){this.stopListening()}is(e){return e==="liveRange"||e==="model:liveRange"||e=="range"||e==="model:range"}toRange(){return new te(this.start,this.end)}static fromRange(e){return new wo(e.start,e.end)}}function BE(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&NE.call(this,t)},{priority:"low"})}function NE(r){const e=this.getTransformedByOperation(r),t=te._createFromRanges(e),n=!t.isEqual(this),i=function(a,c){switch(c.type){case"insert":return a.containsPosition(c.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(c.sourcePosition)||a.start.isEqual(c.sourcePosition)||a.containsPosition(c.targetPosition);case"split":return a.containsPosition(c.splitPosition)||a.containsPosition(c.insertionPosition)}return!1}(this,r);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=r.type=="remove"?r.sourcePosition:r.deletionPosition);const a=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",a,{deletionPosition:s})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:s})}oe(wo,L);const Ps="selection:";class eo{constructor(e){this._selection=new PE(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return e==="selection"||e=="model:selection"||e=="documentSelection"||e=="model:documentSelection"}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Ps+e}static _isStoreAttributeKey(e){return e.startsWith(Ps)}}oe(eo,L);class PE extends Bo{constructor(e){super(),this.markers=new un({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new v("document-selection-wrong-position",this,{range:t})}),this.listenTo(this._model.markers,"update",(t,n,i,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(i,s){const a=i.document.differ;for(const c of a.getChanges()){if(c.type!="insert")continue;const u=c.position.parent;c.length===u.maxOffset&&i.enqueueChange(s,f=>{const m=Array.from(u.getAttributeKeys()).filter(w=>w.startsWith(Ps));for(const w of m)f.removeAttribute(w,u)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,n){super.setTo(e,t,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=A();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new v("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=wo.fromRange(e);return t.on("change:range",(n,i,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const a=this._ranges.indexOf(t);this._ranges.splice(a,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const i of this._model.markers){const s=i.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const a=i.getRange();for(const c of this.getRanges())a.containsRange(c,!c.isCollapsed)&&e.push(i)}const n=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const s=Array.from(this.markers),a=this.markers.has(e);if(t){let c=!1;for(const u of this.getRanges())if(t.containsRange(u,!u.isCollapsed)){c=!0;break}c&&!a?(this.markers.add(e),i=!0):!c&&a&&(this.markers.remove(e),i=!0)}else a&&(this.markers.remove(e),i=!0);i&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=go(this._getSurroundingAttributes()),n=go(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,a]of this._attributePriority)a=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const i=[];for(const[s,a]of this.getAttributes())n.has(s)&&n.get(s)===a||i.push(s);for(const[s]of n)this.hasAttribute(s)||i.push(s);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(e,t,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,i),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,i]of this.getAttributes())e.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of e)this._setAttribute(n,i,!1)&&t.add(n);return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(Ps)&&(yield[t.substr(Ps.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const i=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=al(i)),n||(n=al(s)),!this.isGravityOverridden&&!n){let a=i;for(;a&&!t.isInline(a)&&!n;)a=a.previousSibling,n=al(a)}if(!n){let a=s;for(;a&&!t.isInline(a)&&!n;)a=a.nextSibling,n=al(a)}n||(n=this._getStoredAttributes())}else{const i=this.getFirstRange();for(const s of i){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function al(r){return r instanceof bo||r instanceof ft?r.getAttributes():null}class sp{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const to=function(r){return id(r,5)};class zE extends sp{elementToElement(e){return this.add(function(t){return(t=to(t)).model=cp(t.model),t.view=zs(t.view,"container"),t.model.attributes.length&&(t.model.children=!0),n=>{n.on("insert:"+t.model.name,function(i,s=OE){return(a,c,u)=>{if(!s(c.item,u.consumable,{preflight:!0}))return;const f=i(c.item,u,c);if(!f)return;s(c.item,u.consumable);const m=u.mapper.toViewPosition(c.range.start);u.mapper.bindElements(c.item,f),u.writer.insert(m,f),u.convertAttributes(c.item),fp(f,c.item.getChildren(),u,{reconversion:c.reconversion})}}(t.view,gp(t.model)),{priority:t.converterPriority||"normal"}),(t.model.children||t.model.attributes.length)&&n.on("reduceChanges",hp(t.model),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){return(t=to(t)).model=cp(t.model),t.view=zs(t.view,"container"),t.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(t.model.name,"$text"))throw new v("conversion-element-to-structure-disallowed-text",n,{elementName:t.model.name});var i,s;n.on("insert:"+t.model.name,(i=t.view,s=gp(t.model),(a,c,u)=>{if(!s(c.item,u.consumable,{preflight:!0}))return;const f=new Map;u.writer._registerSlotFactory(function(C,S,D){return(I,B="children")=>{const O=I.createContainerElement("$slot");let K=null;if(B==="children")K=Array.from(C.getChildren());else{if(typeof B!="function")throw new v("conversion-slot-mode-unknown",D.dispatcher,{modeOrFilter:B});K=Array.from(C.getChildren()).filter(ne=>B(ne))}return S.set(O,K),O}}(c.item,f,u));const m=i(c.item,u,c);if(u.writer._clearSlotFactory(),!m)return;(function(C,S,D){const I=Array.from(S.values()).flat(),B=new Set(I);if(B.size!=I.length)throw new v("conversion-slot-filter-overlap",D.dispatcher,{element:C});if(B.size!=C.childCount)throw new v("conversion-slot-filter-incomplete",D.dispatcher,{element:C})})(c.item,f,u),s(c.item,u.consumable);const w=u.mapper.toViewPosition(c.range.start);u.mapper.bindElements(c.item,m),u.writer.insert(w,m),u.convertAttributes(c.item),function(C,S,D,I){D.mapper.on("modelToViewPosition",K,{priority:"highest"});let B=null,O=null;for([B,O]of S)fp(C,O,D,I),D.writer.move(D.writer.createRangeIn(B),D.writer.createPositionBefore(B)),D.writer.remove(B);function K(ne,we){const Te=we.modelPosition.nodeAfter,ot=O.indexOf(Te);ot<0||(we.viewPosition=we.mapper.findPositionIn(B,ot))}D.mapper.off("modelToViewPosition",K)}(m,f,u,{reconversion:c.reconversion})}),{priority:t.converterPriority||"normal"}),n.on("reduceChanges",hp(t.model),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=to(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=zs(t.view[s],"attribute");else t.view=zs(t.view,"attribute");const i=dp(t);return s=>{s.on(n,function(a){return(c,u,f)=>{if(!f.consumable.test(u.item,c.name))return;const m=a(u.attributeOldValue,f,u),w=a(u.attributeNewValue,f,u);if(!m&&!w)return;f.consumable.consume(u.item,c.name);const C=f.writer,S=C.document.selection;if(u.item instanceof Bo||u.item instanceof eo)C.wrap(S.getFirstRange(),w);else{let D=f.mapper.toViewRange(u.range);u.attributeOldValue!==null&&m&&(D=C.unwrap(D,m)),u.attributeNewValue!==null&&w&&C.wrap(D,w)}}}(i),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=to(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=up(t.view[s]);else t.view=up(t.view);const i=dp(t);return s=>{var a;s.on(n,(a=i,(c,u,f)=>{if(!f.consumable.test(u.item,c.name))return;const m=a(u.attributeOldValue,f,u),w=a(u.attributeNewValue,f,u);if(!m&&!w)return;f.consumable.consume(u.item,c.name);const C=f.mapper.toViewElement(u.item),S=f.writer;if(!C)throw new v("conversion-attribute-to-attribute-on-text",f.dispatcher,u);if(u.attributeOldValue!==null&&m)if(m.key=="class"){const D=Ut(m.value);for(const I of D)S.removeClass(I,C)}else if(m.key=="style"){const D=Object.keys(m.value);for(const I of D)S.removeStyle(I,C)}else S.removeAttribute(m.key,C);if(u.attributeNewValue!==null&&w)if(w.key=="class"){const D=Ut(w.value);for(const I of D)S.addClass(I,C)}else if(w.key=="style"){const D=Object.keys(w.value);for(const I of D)S.setStyle(I,w.value[I],C)}else S.setAttribute(w.key,w.value,C)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){return(t=to(t)).view=zs(t.view,"ui"),n=>{var i;n.on("addMarker:"+t.model,(i=t.view,(s,a,c)=>{a.isOpening=!0;const u=i(a,c);a.isOpening=!1;const f=i(a,c);if(!u||!f)return;const m=a.markerRange;if(m.isCollapsed&&!c.consumable.consume(m,s.name))return;for(const S of m)if(!c.consumable.consume(S.item,s.name))return;const w=c.mapper,C=c.writer;C.insert(w.toViewPosition(m.start),u),c.mapper.bindElementToMarker(u,a.markerName),m.isCollapsed||(C.insert(w.toViewPosition(m.end),f),c.mapper.bindElementToMarker(f,a.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,(t.view,(s,a,c)=>{const u=c.mapper.markerNameToElements(a.markerName);if(u){for(const f of u)c.mapper.unbindElementFromMarkerName(f,a.markerName),c.writer.clear(c.writer.createRangeOn(f),f);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}),{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var i;n.on("addMarker:"+t.model,(i=t.view,(s,a,c)=>{if(!a.item||!(a.item instanceof Bo||a.item instanceof eo||a.item.is("$textProxy")))return;const u=Od(i,a,c);if(!u||!c.consumable.consume(a.item,s.name))return;const f=c.writer,m=ap(f,u),w=f.document.selection;if(a.item instanceof Bo||a.item instanceof eo)f.wrap(w.getFirstRange(),m,w);else{const C=c.mapper.toViewRange(a.range),S=f.wrap(C,m);for(const D of S.getItems())if(D.is("attributeElement")&&D.isSimilar(m)){c.mapper.bindElementToMarker(D,a.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on("addMarker:"+t.model,function(s){return(a,c,u)=>{if(!c.item||!(c.item instanceof lt))return;const f=Od(s,c,u);if(!f||!u.consumable.test(c.item,a.name))return;const m=u.mapper.toViewElement(c.item);if(m&&m.getCustomProperty("addHighlight")){u.consumable.consume(c.item,a.name);for(const w of te._createIn(c.item))u.consumable.consume(w.item,a.name);m.getCustomProperty("addHighlight")(m,f,u.writer),u.mapper.bindElementToMarker(m,c.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,function(s){return(a,c,u)=>{if(c.markerRange.isCollapsed)return;const f=Od(s,c,u);if(!f)return;const m=ap(u.writer,f),w=u.mapper.markerNameToElements(c.markerName);if(w){for(const C of w)u.mapper.unbindElementFromMarkerName(C,c.markerName),C.is("attributeElement")?u.writer.unwrap(u.writer.createRangeOn(C),m):C.getCustomProperty("removeHighlight")(C,f.id,u.writer);u.writer.clearClonedElementsGroup(c.markerName),a.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=to(t)).model;return t.view||(t.view=i=>({group:n,name:i.substr(t.model.length+1)})),i=>{var s;i.on("addMarker:"+n,(s=t.view,(a,c,u)=>{const f=s(c.markerName,u);if(!f)return;const m=c.markerRange;u.consumable.consume(m,a.name)&&(lp(m,!1,u,c,f),lp(m,!0,u,c,f),a.stop())}),{priority:t.converterPriority||"normal"}),i.on("removeMarker:"+n,function(a){return(c,u,f)=>{const m=a(u.markerName,f);if(!m)return;const w=f.mapper.markerNameToElements(u.markerName);if(w){for(const S of w)f.mapper.unbindElementFromMarkerName(S,u.markerName),S.is("containerElement")?(C(`data-${m.group}-start-before`,S),C(`data-${m.group}-start-after`,S),C(`data-${m.group}-end-before`,S),C(`data-${m.group}-end-after`,S)):f.writer.clear(f.writer.createRangeOn(S),S);f.writer.clearClonedElementsGroup(u.markerName),c.stop()}function C(S,D){if(D.hasAttribute(S)){const I=new Set(D.getAttribute(S).split(","));I.delete(m.name),I.size==0?f.writer.removeAttribute(S,D):f.writer.setAttribute(S,Array.from(I).join(","),D)}}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}}function ap(r,e){const t=r.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function lp(r,e,t,n,i){const s=e?r.start:r.end,a=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,c=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(a||c){let u,f;e&&a||!e&&!c?(u=a,f=!0):(u=c,f=!1);const m=t.mapper.toViewElement(u);if(m)return void function(w,C,S,D,I,B){const O=`data-${B.group}-${C?"start":"end"}-${S?"before":"after"}`,K=w.hasAttribute(O)?w.getAttribute(O).split(","):[];K.unshift(B.name),D.writer.setAttribute(O,K.join(","),w),D.mapper.bindElementToMarker(w,I.markerName)}(m,e,f,t,n,i)}(function(u,f,m,w,C){const S=`${C.group}-${f?"start":"end"}`,D=C.name?{name:C.name}:null,I=m.writer.createUIElement(S,D);m.writer.insert(u,I),m.mapper.bindElementToMarker(I,w.markerName)})(t.mapper.toViewPosition(s),e,t,n,i)}function cp(r){return typeof r=="string"&&(r={name:r}),r.attributes?Array.isArray(r.attributes)||(r.attributes=[r.attributes]):r.attributes=[],r.children=!!r.children,r}function zs(r,e){return typeof r=="function"?r:(t,n)=>function(i,s,a){typeof i=="string"&&(i={name:i});let c;const u=s.writer,f=Object.assign({},i.attributes);if(a=="container")c=u.createContainerElement(i.name,f);else if(a=="attribute"){const m={priority:i.priority||wr.DEFAULT_PRIORITY};c=u.createAttributeElement(i.name,f,m)}else c=u.createUIElement(i.name,f);if(i.styles){const m=Object.keys(i.styles);for(const w of m)u.setStyle(w,i.styles[w],c)}if(i.classes){const m=i.classes;if(typeof m=="string")u.addClass(m,c);else for(const w of m)u.addClass(w,c)}return c}(r,n,e)}function dp(r){return r.model.values?(e,t)=>{const n=r.view[e];return n?n(e,t):null}:r.view}function up(r){return typeof r=="string"?e=>({key:r,value:e}):typeof r=="object"?r.value?()=>r:e=>({key:r.key,value:e}):r}function Od(r,e,t){const n=typeof r=="function"?r(e,t):r;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function hp(r){const e=function(t){return(n,i)=>{if(!n.is("element",t.name))return!1;if(i.type=="attribute"){if(t.attributes.includes(i.attributeKey))return!0}else if(t.children)return!0;return!1}}(r);return(t,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const a=s.position?s.position.parent:s.range.start.nodeAfter;if(a&&e(a,s)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const c=le._createBefore(a);i.push({type:"remove",name:a.name,position:c,length:1},{type:"reinsert",name:a.name,position:c,length:1})}}else i.push(s)}n.changes=i}}function gp(r){return(e,t,n={})=>{const i=["insert"];for(const s of r.attributes)e.hasAttribute(s)&&i.push(`attribute:${s}`);return!!i.every(s=>t.test(e,s))&&(n.preflight||i.forEach(s=>t.consume(e,s)),!0)}}function fp(r,e,t,n){for(const i of e)LE(r.root,i,t,n)||t.convertItem(i)}function LE(r,e,t,n){const{writer:i,mapper:s}=t;if(!n.reconversion)return!1;const a=s.toViewElement(e);return!(!a||a.root==r)&&!!t.canReuseView(a)&&(i.move(i.createRangeOn(a),s.toViewPosition(le._createBefore(e))),!0)}function OE(r,e,{preflight:t}={}){return t?e.test(r,"insert"):e.consume(r,"insert")}function mp(r){const{schema:e,document:t}=r.model;for(const n of t.getRootNames()){const i=t.getRoot(n);if(i.isEmpty&&!e.checkChild(i,"$text")&&e.checkChild(i,"paragraph"))return r.insertElement("paragraph",i),!0}return!1}function pp(r,e,t){const n=t.createContext(r);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function bp(r,e){const t=e.createElement("paragraph");return e.insert(t,r),e.createPositionAt(t,0)}class RE extends sp{elementToElement(e){return this.add(kp(e))}elementToAttribute(e){return this.add(function(t){wp(t=to(t));const n=vp(t,!1),i=Rd(t.view),s=i?"element:"+i:"element";return a=>{a.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=to(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const a=s.view.key;let c;return a=="class"||a=="style"?c={[a=="class"?"classes":"styles"]:s.view.value}:c={attributes:{[a]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(c.name=s.view.name),s.view=c,a}(t)),wp(t,n);const i=vp(t,!0);return s=>{s.on("element",i,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){return function(n){const i=n.model;n.model=(s,a)=>{const c=typeof i=="string"?i:i(s,a);return a.writer.createElement("$marker",{"data-name":c})}}(t=to(t)),kp(t)}(e))}dataToMarker(e){return this.add(function(t){(t=to(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n=Fd(_p(t,"start")),i=Fd(_p(t,"end"));return s=>{s.on("element:"+t.view+"-start",n,{priority:t.converterPriority||"normal"}),s.on("element:"+t.view+"-end",i,{priority:t.converterPriority||"normal"});const a=x.get("low"),c=x.get("highest"),u=x.get(t.converterPriority)/c;s.on("element",function(f){return(m,w,C)=>{const S=`data-${f.view}`;function D(I,B){for(const O of B){const K=f.model(O,C),ne=C.writer.createElement("$marker",{"data-name":K});C.writer.insert(ne,I),w.modelCursor.isEqual(I)?w.modelCursor=w.modelCursor.getShiftedBy(1):w.modelCursor=w.modelCursor._getTransformedByInsertion(I,1),w.modelRange=w.modelRange._getTransformedByInsertion(I,1)[0]}}(C.consumable.test(w.viewItem,{attributes:S+"-end-after"})||C.consumable.test(w.viewItem,{attributes:S+"-start-after"})||C.consumable.test(w.viewItem,{attributes:S+"-end-before"})||C.consumable.test(w.viewItem,{attributes:S+"-start-before"}))&&(w.modelRange||Object.assign(w,C.convertChildren(w.viewItem,w.modelCursor)),C.consumable.consume(w.viewItem,{attributes:S+"-end-after"})&&D(w.modelRange.end,w.viewItem.getAttribute(S+"-end-after").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-start-after"})&&D(w.modelRange.end,w.viewItem.getAttribute(S+"-start-after").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-end-before"})&&D(w.modelRange.start,w.viewItem.getAttribute(S+"-end-before").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-start-before"})&&D(w.modelRange.start,w.viewItem.getAttribute(S+"-start-before").split(",")))}}(t),{priority:a+u})}}(e))}}function kp(r){const e=Fd(r=to(r)),t=Rd(r.view),n=t?"element:"+t:"element";return i=>{i.on(n,e,{priority:r.converterPriority||"normal"})}}function Rd(r){return typeof r=="string"?r:typeof r=="object"&&typeof r.name=="string"?r.name:null}function Fd(r){const e=new fo(r.view);return(t,n,i)=>{const s=e.match(n.viewItem);if(!s)return;const a=s.match;if(a.name=!0,!i.consumable.test(n.viewItem,a))return;const c=function(u,f,m){return u instanceof Function?u(f,m):m.writer.createElement(u)}(r.model,n.viewItem,i);c&&i.safeInsert(c,n.modelCursor)&&(i.consumable.consume(n.viewItem,a),i.convertChildren(n.viewItem,c),i.updateConversionResult(c,n))}}function wp(r,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof r.model!="object"?r.model:r.model.key,i=typeof r.model!="object"||r.model.value===void 0?t:r.model.value;r.model={key:n,value:i}}function vp(r,e){const t=new fo(r.view);return(n,i,s)=>{if(!i.modelRange&&e)return;const a=t.match(i.viewItem);if(!a||(function(m,w){const C=typeof m=="function"?m(w):m;return typeof C=="object"&&!Rd(C)?!1:!C.classes&&!C.attributes&&!C.styles}(r.view,i.viewItem)?a.match.name=!0:delete a.match.name,!s.consumable.test(i.viewItem,a.match)))return;const c=r.model.key,u=typeof r.model.value=="function"?r.model.value(i.viewItem,s):r.model.value;if(u===null)return;i.modelRange||Object.assign(i,s.convertChildren(i.viewItem,i.modelCursor)),function(m,w,C,S){let D=!1;for(const I of Array.from(m.getItems({shallow:C})))S.schema.checkAttribute(I,w.key)&&(D=!0,I.hasAttribute(w.key)||S.writer.setAttribute(w.key,w.value,I));return D}(i.modelRange,{key:c,value:u},e,s)&&(s.consumable.test(i.viewItem,{name:!0})&&(a.match.name=!0),s.consumable.consume(i.viewItem,a.match))}}function _p(r,e){const t={};return t.view=r.view+"-"+e,t.model=(n,i)=>{const s=n.getAttribute("name"),a=r.model(s,i);return i.writer.createElement("$marker",{"data-name":a})},t}class Cp{constructor(e,t){this.model=e,this.view=new ep(t),this.mapper=new Pd,this.downcastDispatcher=new zd({mapper:this.mapper,schema:e.schema});const n=this.model.document,i=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,s,a),this.downcastDispatcher.convertSelection(i,s,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,c){return(u,f)=>{const m=f.newSelection,w=[];for(const S of m.getRanges())w.push(c.toModelRange(S));const C=a.createSelection(w,{backward:m.isBackward});C.isEqual(a.document.selection)||a.change(S=>{S.setSelection(C)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,c,u)=>{if(!u.consumable.consume(c.item,a.name))return;const f=u.writer,m=u.mapper.toViewPosition(c.range.start),w=f.createText(c.item.data);f.insert(m,w)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,c,u)=>{u.convertAttributes(c.item),c.reconversion||!c.item.is("element")||c.item.isEmpty||u.convertChildren(c.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,c,u)=>{const f=u.mapper.toViewPosition(c.position),m=c.position.getShiftedBy(c.length),w=u.mapper.toViewPosition(m,{isPhantom:!0}),C=u.writer.createRange(f,w),S=u.writer.remove(C.getTrimmed());for(const D of u.writer.createRangeIn(S).getItems())u.mapper.unbindViewElement(D,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=u.writer,m=f.document.selection;for(const w of m.getRanges())w.isCollapsed&&w.end.parent.isAttached()&&u.writer.mergeAttributes(w.start);f.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=c.selection;if(f.isCollapsed||!u.consumable.consume(f,"selection"))return;const m=[];for(const w of f.getRanges()){const C=u.mapper.toViewRange(w);m.push(C)}u.writer.setSelection(m,{backward:f.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=c.selection;if(!f.isCollapsed||!u.consumable.consume(f,"selection"))return;const m=u.writer,w=f.getFirstPosition(),C=u.mapper.toViewPosition(w),S=m.breakAttributes(C);m.setSelection(S)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const c=new D2(this.view.document,a.name);return c.rootName=a.rootName,this.mapper.bindElements(a,c),c})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new v("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}oe(Cp,Ne);class FE{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new v("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Ls{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new jE(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&t.attributes.push(a);const i=e.getClassNames();for(const a of i)t.classes.push(a);const s=e.getStyleNames();for(const a of s)t.styles.push(a);return t}static createFrom(e,t){if(t||(t=new Ls(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Ls.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Ls.createFrom(n,t);return t}}class jE{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const n=dn(t)?t:[t],i=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new v("viewconsumable-invalid-attribute",this);if(i.set(s,!0),e==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(a,!0)}}_test(e,t){const n=dn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const a=i.get(s);if(a===void 0)return null;if(!a)return!1}else{const a=s=="class"?"classes":"styles",c=this._test(a,[...this._consumables[a].keys()]);if(c!==!0)return c}return!0}_consume(e,t){const n=dn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(i.set(s,!1),e=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(a,!1)}else{const a=s=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(e,t){const n=dn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")i.get(s)===!1&&i.set(s,!0);else{const a=s=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class Ap{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Vi(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Vi(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new v("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new v("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof le){const n=e.nodeBefore,i=e.nodeAfter;if(!(n instanceof lt))throw new v("schema-check-merge-no-element-before",this);if(!(i instanceof lt))throw new v("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,i])=>{if(!i)return;const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,i])=>{const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof le?t=e.parent:t=(e instanceof te?[e]:Array.from(e.getRanges())).reduce((n,i)=>{const s=i.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new ft("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const i of n)for(const s of i)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new te(e);let n,i;const s=e.getAncestors().reverse().find(a=>this.isLimit(a))||e.root;t!="both"&&t!="backward"||(n=new ko({boundaries:te._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(i=new ko({boundaries:te._createIn(s),startPosition:e}));for(const a of function*(c,u){let f=!1;for(;!f;){if(f=!0,c){const m=c.next();m.done||(f=!1,yield{walker:c,value:m.value})}if(u){const m=u.next();m.done||(f=!1,yield{walker:u,value:m.value})}}}(n,i)){const c=a.walker==n?"elementEnd":"elementStart",u=a.value;if(u.type==c&&this.isObject(u.item))return te._createOn(u.item);if(this.checkChild(u.nextPosition,"$text"))return new te(u.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const i=n.model;for(const[s,a]of Object.entries(t))i.schema.checkAttribute(e,s)&&n.setAttribute(s,a,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))yp(this,n,t);else{const i=te._createIn(n).getPositions();for(const s of i)yp(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const i={};for(const[s,a]of e.getAttributes()){const c=this.getAttributeProperties(s);c[t]!==void 0&&(n!==void 0&&n!==c[t]||(i[s]=a))}return i}createContext(e){return new Vi(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const i of n)e[i]=VE(t[i],i);for(const i of n)HE(e,i);for(const i of n)UE(e,i);for(const i of n)$E(e,i);for(const i of n)WE(e,i),qE(e,i);for(const i of n)GE(e,i),KE(e,i),YE(e,i);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const i=t.getItem(n);if(e.allowIn.includes(i.name)){if(n==0)return!0;{const s=this.getDefinition(i);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,i=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(te._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(i)||(yield new te(n,i)),n=le._createAfter(s)),i=le._createAfter(s);n.isEqual(i)||(yield new te(n,i))}}oe(Ap,Ne);class Vi{constructor(e){if(e instanceof Vi)return e;typeof e=="string"?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(ZE)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Vi([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function VE(r,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const s of n){const a=Object.keys(s).filter(c=>c.startsWith("is"));for(const c of a)i[c]=s[c]}}(r,t),Hi(r,t,"allowIn"),Hi(r,t,"allowContentOf"),Hi(r,t,"allowWhere"),Hi(r,t,"allowAttributes"),Hi(r,t,"allowAttributesOf"),Hi(r,t,"allowChildren"),Hi(r,t,"inheritTypesFrom"),function(n,i){for(const s of n){const a=s.inheritAllFrom;a&&(i.allowContentOf.push(a),i.allowWhere.push(a),i.allowAttributesOf.push(a),i.inheritTypesFrom.push(a))}}(r,t),t}function HE(r,e){const t=r[e];for(const n of t.allowChildren){const i=r[n];i&&i.allowIn.push(e)}t.allowChildren.length=0}function UE(r,e){for(const t of r[e].allowContentOf)r[t]&&QE(r,t).forEach(n=>{n.allowIn.push(e)});delete r[e].allowContentOf}function $E(r,e){for(const t of r[e].allowWhere){const n=r[t];if(n){const i=n.allowIn;r[e].allowIn.push(...i)}}delete r[e].allowWhere}function WE(r,e){for(const t of r[e].allowAttributesOf){const n=r[t];if(n){const i=n.allowAttributes;r[e].allowAttributes.push(...i)}}delete r[e].allowAttributesOf}function qE(r,e){const t=r[e];for(const n of t.inheritTypesFrom){const i=r[n];if(i){const s=Object.keys(i).filter(a=>a.startsWith("is"));for(const a of s)a in t||(t[a]=i[a])}}delete t.inheritTypesFrom}function GE(r,e){const t=r[e],n=t.allowIn.filter(i=>r[i]);t.allowIn=Array.from(new Set(n))}function KE(r,e){const t=r[e];for(const n of t.allowIn)r[n].allowChildren.push(e)}function YE(r,e){const t=r[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function Hi(r,e,t){for(const n of r)typeof n[t]=="string"?e[t].push(n[t]):Array.isArray(n[t])&&e[t].push(...n[t])}function QE(r,e){const t=r[e];return(n=r,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(t.name));var n}function ZE(r){return typeof r=="string"||r.is("documentFragment")?{name:typeof r=="string"?r:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:r.is("element")?r.name:"$text",*getAttributeKeys(){yield*r.getAttributeKeys()},getAttribute:e=>r.getAttribute(e)}}function yp(r,e,t){for(const n of e.getAttributeKeys())r.checkAttribute(e,n)||t.removeAttribute(n,e)}class xp{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(a,c){let u;for(const f of new Vi(a)){const m={};for(const C of f.getAttributeKeys())m[C]=f.getAttribute(C);const w=c.createElement(f.name,m);u&&c.append(w,u),u=le._createAt(w,0)}return u}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Ls.createFrom(e),this.conversionApi.store={};const{modelRange:i}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(i){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))t.append(a,s);s.markers=function(a,c){const u=new Set,f=new Map,m=te._createIn(a).getItems();for(const w of m)w.name=="$marker"&&u.add(w);for(const w of u){const C=w.getAttribute("data-name"),S=c.createPositionBefore(w);f.has(C)?f.get(C).end=S.clone():f.set(C,new te(S.clone())),c.remove(w)}return f}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof te))throw new v("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:le._createAt(t,0);const i=new te(n);for(const s of Array.from(e.getChildren())){const a=this._convertItem(s,n);a.modelRange instanceof te&&(i.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),i=this.conversionApi.writer;t.modelRange||(t.modelRange=i.createRange(i.createPositionBefore(e),i.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?i.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:i}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return pp(t,e,n)?{position:bp(t,i)}:null;const a=this.conversionApi.writer.split(t,s),c=[];for(const f of a.range.getWalker())if(f.type=="elementEnd")c.push(f.item);else{const m=c.pop(),w=f.item;this._registerSplitPair(m,w)}const u=a.range.end.parent;return this._cursorParents.set(e,u),{position:a.position,cursorParent:u}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}oe(xp,L);class JE{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class XE{constructor(e){this.domParser=new DOMParser,this.domConverter=new Xa(e,{renderingMode:"data"}),this.htmlWriter=new JE}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class Ep{constructor(e,t){this.model=e,this.mapper=new Pd,this.downcastDispatcher=new zd({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,i,s)=>{if(!s.consumable.consume(i.item,n.name))return;const a=s.writer,c=s.mapper.toViewPosition(i.range.start),u=a.createText(i.item.data);a.insert(c,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,s)=>{s.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||s.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new xp({schema:e.schema}),this.viewDocument=new Ts(t),this.stylesProcessor=t,this.htmlProcessor=new XE(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new um(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:s,consumable:a,writer:c})=>{let u=i.modelCursor;if(!a.test(i.viewItem))return;if(!s.checkChild(u,"$text")){if(!pp(u,"$text",s)||i.viewItem.data.trim().length==0)return;u=bp(u,c)}a.consume(i.viewItem);const f=c.createText(i.viewItem.data);c.insert(f,u),i.modelRange=c.createRange(u,u.getShiftedBy(f.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:a,modelCursor:c}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=a,i.modelCursor=c}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:a,modelCursor:c}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=a,i.modelCursor=c}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},mp)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new v("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const s=te._createIn(e),a=new Ri(n);this.mapper.bindElements(e,a);const c=e.is("documentFragment")?e.markers:function(u){const f=[],m=u.root.document;if(!m)return new Map;const w=te._createIn(u);for(const C of m.model.markers){const S=C.getRange(),D=S.isCollapsed,I=S.start.isEqual(w.start)||S.end.isEqual(w.end);if(D&&I)f.push([C.name,S]);else{const B=w.getIntersection(S);B&&f.push([C.name,B])}}return f.sort(([C,S],[D,I])=>{if(S.end.compareWith(I.start)!=="after")return 1;if(S.start.compareWith(I.end)!=="before")return-1;switch(S.start.compareWith(I.start)){case"before":return 1;case"after":return-1;default:switch(S.end.compareWith(I.end)){case"before":return 1;case"after":return-1;default:return D.localeCompare(C)}}}),new Map(f)}(e);return this.downcastDispatcher.convert(s,c,i,t),a}init(e){if(this.model.document.version)throw new v("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new v("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(t)){const s=this.model.document.getRoot(i);n.insert(this.parse(t[i],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new v("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const a=this.model.document.getRoot(s);i.remove(i.createRangeIn(a)),i.insert(this.parse(n[s],a),a,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}oe(Ep,Ne);class eS{constructor(e,t){this._helpers=new Map,this._downcast=Ut(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Ut(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new v("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new v("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of jd(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of jd(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of jd(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new v("conversion-group-exists",this);const i=n?new zE(t):new RE(t);this._helpers.set(e,i)}}function*jd(r){if(r.model.values)for(const e of r.model.values){const t={key:r.model.key,value:e},n=r.view[e],i=r.upcastAlso?r.upcastAlso[e]:void 0;yield*Sp(t,n,i)}else yield*Sp(r.model,r.view,r.upcastAlso)}function*Sp(r,e,t){if(yield{model:r,view:e},t)for(const n of Ut(t))yield{model:r,view:n}}class Ar{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},E("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:i=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=i,this.isTyping=s}get type(){return E("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class qn{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class No{constructor(e){this.markers=new Map,this._children=new Cr,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="model:documentFragment"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(lt.fromJSON(n)):t.push(ft.fromJSON(n));return new No(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new ft(i)]:(Un(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new ft(s):s instanceof bo?new ft(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}}function Vd(r,e){const t=(e=Ip(e)).reduce((s,a)=>s+a.offsetSize,0),n=r.parent;Fs(r);const i=r.index;return n._insertChild(i,e),Rs(n,i+e.length),Rs(n,i),new te(r,r.getShiftedBy(t))}function Dp(r){if(!r.isFlat)throw new v("operation-utils-remove-range-not-flat",this);const e=r.start.parent;Fs(r.start),Fs(r.end);const t=e._removeChildren(r.start.index,r.end.index-r.start.index);return Rs(e,r.start.index),t}function Os(r,e){if(!r.isFlat)throw new v("operation-utils-move-range-not-flat",this);const t=Dp(r);return Vd(e=e._getTransformedByDeletion(r.start,r.end.offset-r.start.offset),t)}function Ip(r){const e=[];r instanceof Array||(r=[r]);for(let t=0;t<r.length;t++)if(typeof r[t]=="string")e.push(new ft(r[t]));else if(r[t]instanceof bo)e.push(new ft(r[t].data,r[t].getAttributes()));else if(r[t]instanceof No||r[t]instanceof Cr)for(const n of r[t])e.push(n);else r[t]instanceof Fi&&e.push(r[t]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof ft&&i instanceof ft&&Tp(n,i)&&(e.splice(t-1,2,new ft(i.data+n.data,i.getAttributes())),t--)}return e}function Rs(r,e){const t=r.getChild(e-1),n=r.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Tp(t,n)){const i=new ft(t.data+n.data,t.getAttributes());r._removeChildren(e-1,2),r._insertChild(e-1,i)}}function Fs(r){const e=r.textNode,t=r.parent;if(e){const n=r.offset-e.startOffset,i=e.index;t._removeChildren(i,1);const s=new ft(e.data.substr(0,n),e.getAttributes()),a=new ft(e.data.substr(n),e.getAttributes());t._insertChild(i,[s,a])}}function Tp(r,e){const t=r.getAttributes(),n=e.getAttributes();for(const i of t){if(i[1]!==e.getAttribute(i[0]))return!1;n.next()}return n.next().done}const Mp=function(r,e){return jm(r,e)};class Pt extends qn{constructor(e,t,n,i,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Pt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Pt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new v("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Mp(e.getAttribute(this.key),this.oldValue))throw new v("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new v("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Mp(this.oldValue,this.newValue)||function(e,t,n){Fs(e.start),Fs(e.end);for(const i of e.getItems({shallow:!0})){const s=i.is("$textProxy")?i.textNode:i;n!==null?s._setAttribute(t,n):s._removeAttribute(t),Rs(s.parent,s.index)}Rs(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Pt(te.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class tS extends qn{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new v("detach-operation-on-document-node",this)}_execute(){Dp(te._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ct extends qn{constructor(e,t,n,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new v("move-operation-nodes-do-not-exist",this);if(e===t&&n<i&&i<n+this.howMany)throw new v("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&tn(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new v("move-operation-node-into-itself",this)}}_execute(){Os(te._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),i=le.fromJSON(e.targetPosition,t);return new this(n,e.howMany,i,e.baseVersion)}}class $t extends qn{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Cr(Ip(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Cr([...this.nodes].map(n=>n._clone(!0))),t=new $t(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new le(e,[0]);return new ct(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new v("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Cr([...e].map(t=>t._clone(!0))),Vd(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(lt.fromJSON(s)):n.push(ft.fromJSON(s));const i=new $t(le.fromJSON(e.position,t),n,e.baseVersion);return i.shouldReceiveAttributes=e.shouldReceiveAttributes,i}}class mn extends qn{constructor(e,t,n,i,s,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=i}get type(){return"marker"}clone(){return new mn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new mn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new mn(e.name,e.oldRange?te.fromJSON(e.oldRange,t):null,e.newRange?te.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class pn extends qn{constructor(e,t,n,i){super(i),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new pn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new pn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof lt))throw new v("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new v("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new pn(le.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class Po extends qn{constructor(e,t,n,i,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new Po(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Po(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new v("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new v("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new v("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new v("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new Po(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class jt extends qn{constructor(e,t,n,i,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new le(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new te(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new le(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new bt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new v("merge-operation-source-position-invalid",this);if(!t.parent)throw new v("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new v("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;Os(te._createIn(e),this.targetPosition),Os(te._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),i=le.fromJSON(e.targetPosition,t),s=le.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,i,s,e.baseVersion)}}class bt extends qn{constructor(e,t,n,i,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new le(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new te(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new le(e,[0]);return new jt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new v("split-operation-position-invalid",this);if(!e.parent)throw new v("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new v("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new v("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)Os(te._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Vd(this.insertionPosition,t)}Os(new te(le._createAt(e,this.splitPosition.offset),le._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new le(e.root,t,"toPrevious")}static fromJSON(e,t){const n=le.fromJSON(e.splitPosition,t),i=le.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?le.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,i,s,e.baseVersion)}}class Hd extends lt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}is(e,t){return t?t===this.name&&(e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"):e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"||e==="node"||e==="model:node"}toJSON(){return this.rootName}}class nS{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new ft(e,t)}createElement(e,t){return new lt(e,t)}createDocumentFragment(){return new No}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof ft&&e.data=="")return;const i=le._createAt(t,n);if(e.parent){if(Pp(e.root,i.root))return void this.move(te._createOn(e),i);if(e.root.document)throw new v("model-writer-insert-forbidden-move",this);this.remove(e)}const s=i.root.document?i.root.document.version:null,a=new $t(i,e,s);if(e instanceof ft&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),e instanceof No)for(const[c,u]of e.markers){const f=le._createAt(u.root,0),m={range:new te(u.start._getCombined(f,i),u.end._getCombined(f,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(c)?this.updateMarker(c,m):this.addMarker(c,m)}}insertText(e,t,n,i){t instanceof No||t instanceof lt||t instanceof le?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,i)}insertElement(e,t,n,i){t instanceof No||t instanceof lt||t instanceof le?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,i)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof No||t instanceof lt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof No||t instanceof lt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof te){const i=n.getMinimalFlatRanges();for(const s of i)Bp(this,e,t,s)}else Np(this,e,t,n)}setAttributes(e,t){for(const[n,i]of go(e))this.setAttribute(n,i,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof te){const n=t.getMinimalFlatRanges();for(const i of n)Bp(this,e,null,i)}else Np(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(e instanceof te)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof te))throw new v("writer-move-invalid-range",this);if(!e.isFlat)throw new v("writer-move-range-not-flat",this);const i=le._createAt(t,n);if(i.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Pp(e.root,i.root))throw new v("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,a=new ct(e.start,e.end.offset-e.start.offset,i,s);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof te?e:te._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),oS(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof lt))throw new v("writer-merge-no-element-before",this);if(!(n instanceof lt))throw new v("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,n){return this.model.createSelection(e,t,n)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(te._createIn(n),le._createAt(t,"end")),this.remove(n)}_merge(e){const t=le._createAt(e.nodeBefore,"end"),n=le._createAt(e.nodeAfter,0),i=e.root.document.graveyard,s=new le(i,[0]),a=e.root.document.version,c=new jt(n,e.nodeAfter.maxOffset,t,s,a);this.batch.addOperation(c),this.model.applyOperation(c)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof lt))throw new v("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,i=new pn(le._createBefore(e),e.name,t,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let n,i,s=e.parent;if(!s.parent)throw new v("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new v("writer-split-invalid-limit-element",this);do{const a=s.root.document?s.root.document.version:null,c=s.maxOffset-e.offset,u=bt.getInsertionPosition(e),f=new bt(e,c,u,null,a);this.batch.addOperation(f),this.model.applyOperation(f),n||i||(n=s,i=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new te(le._createAt(n,"end"),le._createAt(i,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new v("writer-wrap-range-not-flat",this);const n=t instanceof lt?t:new lt(t);if(n.childCount>0)throw new v("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new v("writer-wrap-element-attached",this);this.insert(n,e.start);const i=new te(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(i,le._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new v("writer-unwrap-element-no-parent",this);this.move(te._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new v("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,i=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new v("writer-addmarker-marker-exists",this);if(!i)throw new v("writer-addmarker-no-range",this);return n?(js(this,e,null,i,s),this.model.markers.get(e)):this.model.markers._set(e,i,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,i=this.model.markers.get(n);if(!i)throw new v("writer-updatemarker-marker-not-exists",this);if(!t)return E("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const s=typeof t.usingOperation=="boolean",a=typeof t.affectsData=="boolean",c=a?t.affectsData:i.affectsData;if(!s&&!t.range&&!a)throw new v("writer-updatemarker-wrong-options",this);const u=i.getRange(),f=t.range?t.range:u;s&&t.usingOperation!==i.managedUsingOperations?t.usingOperation?js(this,n,null,f,c):(js(this,n,u,null,c),this.model.markers._set(n,f,void 0,c)):i.managedUsingOperations?js(this,n,u,f,c):this.model.markers._set(n,f,void 0,c)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new v("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);js(this,t,n.getRange(),null,n.affectsData)}setSelection(e,t,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,i]of go(e))this._setSelectionAttribute(n,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=eo._getStoreAttributeKey(e);this.setAttribute(i,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=eo._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new v("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let s=!1;if(e==="move")s=t.containsPosition(i.start)||t.start.isEqual(i.start)||t.containsPosition(i.end)||t.end.isEqual(i.end);else{const a=t.nodeBefore,c=t.nodeAfter,u=i.start.parent==a&&i.start.isAtEnd,f=i.end.parent==c&&i.end.offset==0,m=i.end.nodeAfter==c,w=i.start.nodeAfter==c;s=u||f||m||w}s&&this.updateMarker(n.name,{range:i})}}}function Bp(r,e,t,n){const i=r.model,s=i.document;let a,c,u,f=n.start;for(const w of n.getWalker({shallow:!0}))u=w.item.getAttribute(e),a&&c!=u&&(c!=t&&m(),f=a),a=w.nextPosition,c=u;function m(){const w=new te(f,a),C=w.root.document?s.version:null,S=new Pt(w,e,c,t,C);r.batch.addOperation(S),i.applyOperation(S)}a instanceof le&&a!=f&&c!=t&&m()}function Np(r,e,t,n){const i=r.model,s=i.document,a=n.getAttribute(e);let c,u;if(a!=t){if(n.root===n){const f=n.document?s.version:null;u=new Po(n,e,a,t,f)}else{c=new te(le._createBefore(n),r.createPositionAfter(n));const f=c.root.document?s.version:null;u=new Pt(c,e,a,t,f)}r.batch.addOperation(u),i.applyOperation(u)}}function js(r,e,t,n,i){const s=r.model,a=s.document,c=new mn(e,t,n,s.markers,i,a.version);r.batch.addOperation(c),s.applyOperation(c)}function oS(r,e,t,n){let i;if(r.root.document){const s=n.document,a=new le(s.graveyard,[0]);i=new ct(r,e,a,s.version)}else i=new tS(r,e);t.addOperation(i),n.applyOperation(i)}function Pp(r,e){return r===e||r instanceof Hd&&e instanceof Hd}class iS{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),n=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),n||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=te._createFromPositionAndShift(e.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const n=e.graveyardPosition.parent;this._markInsert(n,e.graveyardPosition.offset,1);const i=e.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const i=this._changedMarkers.get(e);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,i=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||i||s)return!0}}return!1}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((m,w)=>m.offset===w.offset?m.type!=w.type?m.type=="remove"?-1:1:0:m.offset<w.offset?-1:1),s=this._elementSnapshots.get(n),a=zp(n.getChildren()),c=rS(s.length,i);let u=0,f=0;for(const m of c)if(m==="i")t.push(this._getInsertDiff(n,u,a[u])),u++;else if(m==="r")t.push(this._getRemoveDiff(n,u,s[f])),f++;else if(m==="a"){const w=a[u].attributes,C=s[f].attributes;let S;if(a[u].name=="$text")S=new te(le._createAt(n,u),le._createAt(n,u+1));else{const D=n.offsetToIndex(u);S=new te(le._createAt(n,u),le._createAt(n.getChild(D),0))}t.push(...this._getAttributesDiff(S,C,w)),u++,f++}else u++,f++}t.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<t.length;n++){const s=t[i],a=t[n],c=s.type=="remove"&&a.type=="remove"&&s.name=="$text"&&a.name=="$text"&&s.position.isEqual(a.position),u=s.type=="insert"&&a.type=="insert"&&s.name=="$text"&&a.name=="$text"&&s.position.parent==a.position.parent&&s.position.offset+s.length==a.position.offset,f=s.type=="attribute"&&a.type=="attribute"&&s.position.parent==a.position.parent&&s.range.isFlat&&a.range.isFlat&&s.position.offset+s.length==a.position.offset&&s.attributeKey==a.attributeKey&&s.attributeOldValue==a.attributeOldValue&&s.attributeNewValue==a.attributeNewValue;c||u||f?(s.length++,f&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):i=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(sS),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=te._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(e,t,n){const i={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i)}_markRemove(e,t,n){const i={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,zp(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const i=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const a=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:i,howMany:a-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=e.howMany;else if(i<=s)if(e.offset<n.offset){const a=i-n.offset;n.offset=e.offset,n.howMany-=a,e.nodesToHandle-=a}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const a=s-e.offset;n.howMany-=a,e.nodesToHandle-=a}}if(n.type=="remove"&&(i<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const a=i-n.offset;n.offset=e.offset,n.howMany-=a}else if(e.offset<s)if(i<=s){const a=n.howMany;n.howMany=e.offset-n.offset;const c=a-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:c,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&i>n.offset){if(i>s){const a={type:"attribute",offset:s,howMany:i-s,count:this._changeCount++};this._handleChange(a,t),t.push(a)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(i>s?(e.nodesToHandle=i-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&i>n.offset){const a={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(a,t),t.push(a),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&i<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&i>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const i=[];n=new Map(n);for(const[s,a]of t){const c=n.has(s)?n.get(s):null;c!==a&&i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:a,attributeNewValue:c,changeCount:this._changeCount++}),n.delete(s)}for(const[s,a]of n)i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return i}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),i=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&i>=s.offset&&i<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const i=new te(le._createAt(e,t),le._createAt(e,t+n));for(const s of i.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function zp(r){const e=[];for(const t of r)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function rS(r,e){const t=[];let n=0,i=0;for(const s of e){if(s.offset>n){for(let a=0;a<s.offset-n;a++)t.push("e");i+=s.offset-n}if(s.type=="insert"){for(let a=0;a<s.howMany;a++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let a=0;a<s.howMany;a++)t.push("r");n=s.offset,i+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,i+=s.howMany}if(i<r)for(let s=0;s<r-i-n;s++)t.push("e");return t}function sS(r){const e=r.position&&r.position.root.rootName=="$graveyard",t=r.range&&r.range.root.rootName=="$graveyard";return!e&&!t}class aS{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new v("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let i=t-1;for(const[c,u]of this._gaps)e>c&&e<u&&(e=u),i>c&&i<u&&(i=c-1);if(i<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let a=this._baseVersionToOperationIndex.get(i);return a===void 0&&(a=this._operations.length-1),this._operations.slice(s,a+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function Lp(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Op(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const lS=function(){const r=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${r}|${e}(?:\u200D${e})*`,"ug")}();function cS(r,e){const t=String(r).matchAll(lS);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Ud="$graveyard";class Rp{constructor(e){this.model=e,this.history=new aS,this.selection=new eo(this),this.roots=new un({idProperty:"rootName"}),this.differ=new iS(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Ud),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,i,s,a)=>{const c={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,a,c),i===null&&n.on("change",(u,f)=>{const m=n.getData();this.differ.bufferMarkerChange(n.name,{...m,range:f},m)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Ud)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new v("model-document-createroot-name-exists",this,{name:t});const n=new Hd(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Ud)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Kf(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,i=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(i)||t.createRange(i)}_validateSelectionRange(e){return Fp(e.start)&&Fp(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Fp(r){const e=r.textNode;if(e){const t=e.data,n=r.offset-e.startOffset;return!Lp(t,n)&&!Op(t,n)}return!0}oe(Rp,L);class jp{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof yr?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,i=!1){const s=e instanceof yr?e.name:e;if(s.includes(","))throw new v("markercollection-incorrect-marker-name",this);const a=this._markers.get(s);if(a){const f=a.getData(),m=a.getRange();let w=!1;return m.isEqual(t)||(a._attachLiveRange(wo.fromRange(t)),w=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,w=!0),typeof i=="boolean"&&i!=a.affectsData&&(a._affectsData=i,w=!0),w&&this.fire("update:"+s,a,m,t,f),a}const c=wo.fromRange(t),u=new yr(s,c,n,i);return this._markers.set(s,u),this.fire("update:"+s,u,null,t,{...u.getData(),range:null}),u}_remove(e){const t=e instanceof yr?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire("update:"+t,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof yr?e.name:e,n=this._markers.get(t);if(!n)throw new v("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire("update:"+t,n,i,i,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}oe(jp,L);class yr{constructor(e,t,n,i){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.toRange()}is(e){return e==="marker"||e==="model:marker"}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}oe(yr,L);class Wt extends qn{get type(){return"noop"}clone(){return new Wt(this.baseVersion)}getReversed(){return new Wt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const no={};no[Pt.className]=Pt,no[$t.className]=$t,no[mn.className]=mn,no[ct.className]=ct,no[Wt.className]=Wt,no[qn.className]=qn,no[pn.className]=pn,no[Po.className]=Po,no[bt.className]=bt,no[jt.className]=jt;class Gt extends le{constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new v("model-liveposition-root-not-rootelement",e);dS.call(this)}detach(){this.stopListening()}is(e){return e==="livePosition"||e==="model:livePosition"||e=="position"||e==="model:position"}toPosition(){return new le(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function dS(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&uS.call(this,t)},{priority:"low"})}function uS(r){const e=this.getTransformedByOperation(r);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}oe(Gt,L);class hS{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new v("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?te._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new te(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Gt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new v("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Gt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Gt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof lt)||!this._canMergeLeft(e))return;const t=Gt._createBefore(e);t.stickiness="toNext";const n=Gt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Gt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Gt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof lt)||!this._canMergeRight(e))return;const t=Gt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new v("insertcontent-invalid-insertion-position",this);this.position=le._createAt(t.nodeBefore,"end");const n=Gt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Gt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Gt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof lt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof lt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Vp(r,e,t="auto"){const n=r.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return["before","after"].includes(t)?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const i=Ft(r.getSelectedBlocks());if(!i)return e.createRange(r.focus);if(i.isEmpty)return e.createRange(e.createPositionAt(i,0));const s=e.createPositionAfter(i);return r.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(i))}function gS(r,e,t,n,i={}){if(!r.schema.isObject(e))throw new v("insertobject-element-not-an-object",r,{object:e});let s;s=t?t.is("selection")?t:r.createSelection(t,n):r.document.selection;let a=s;i.findOptimalPosition&&r.schema.isBlock(e)&&(a=r.createSelection(Vp(s,r,i.findOptimalPosition)));const c=Ft(s.getSelectedBlocks()),u={};return c&&Object.assign(u,r.schema.getAttributesWithProperty(c,"copyOnReplace",!0)),r.change(f=>{a.isCollapsed||r.deleteContent(a,{doNotAutoparagraph:!0});let m=e;const w=a.anchor.parent;!r.schema.checkChild(w,e)&&r.schema.checkChild(w,"paragraph")&&r.schema.checkChild("paragraph",e)&&(m=f.createElement("paragraph"),f.insert(e,m)),r.schema.setAllowedAttributes(m,u,f);const C=r.insertContent(m,a);return C.isCollapsed||i.setSelection&&function(S,D,I,B){const O=S.model;if(I=="after"){let K=D.nextSibling;!(K&&O.schema.checkChild(K,"$text"))&&O.schema.checkChild(D.parent,"paragraph")&&(K=S.createElement("paragraph"),O.schema.setAllowedAttributes(K,B,S),O.insertContent(K,S.createPositionAfter(D))),K&&S.setSelection(K,0)}else{if(I!="on")throw new v("insertobject-invalid-place-parameter-value",O);S.setSelection(D,"on")}}(f,e,i.setSelection,u),C})}function fS(r,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=r.schema;r.change(s=>{if(!t.doNotResetEntireContent&&function(f,m){const w=f.getLimitElement(m);if(!m.containsEntireContent(w))return!1;const C=m.getFirstRange();return C.start.parent==C.end.parent?!1:f.checkChild(w,"paragraph")}(i,e))return void function(f,m){const w=f.model.schema.getLimitElement(m);f.remove(f.createRangeIn(w)),$p(f,f.createPositionAt(w,0),m)}(s,e);const a={};if(!t.doNotAutoparagraph){const f=e.getSelectedElement();f&&Object.assign(a,i.getAttributesWithProperty(f,"copyOnReplace",!0))}const[c,u]=function(f){const m=f.root.document.model,w=f.start;let C=f.end;if(m.hasContent(f,{ignoreMarkers:!0})){const S=function(D){const I=D.parent,B=I.root.document.model.schema,O=I.getAncestors({parentFirst:!0,includeSelf:!0});for(const K of O){if(B.isLimit(K))return null;if(B.isBlock(K))return K}}(C);if(S&&C.isTouching(m.createPositionAt(S,0))){const D=m.createSelection(f);m.modifySelection(D,{direction:"backward"});const I=D.getLastPosition(),B=m.createRange(I,C);m.hasContent(B,{ignoreMarkers:!0})||(C=I)}}return[Gt.fromPosition(w,"toPrevious"),Gt.fromPosition(C,"toNext")]}(n);c.isTouching(u)||s.remove(s.createRange(c,u)),t.leaveUnmerged||(function(f,m,w){const C=f.model;if(!$d(f.model.schema,m,w))return;const[S,D]=function(I,B){const O=I.getAncestors(),K=B.getAncestors();let ne=0;for(;O[ne]&&O[ne]==K[ne];)ne++;return[O[ne],K[ne]]}(m,w);!S||!D||(!C.hasContent(S,{ignoreMarkers:!0})&&C.hasContent(D,{ignoreMarkers:!0})?Up(f,m,w,S.parent):Hp(f,m,w,S.parent))}(s,c,u),i.removeDisallowedAttributes(c.parent.getChildren(),s)),Wp(s,e,c),!t.doNotAutoparagraph&&function(f,m){const w=f.checkChild(m,"$text"),C=f.checkChild(m,"paragraph");return!w&&C}(i,c)&&$p(s,c,e,a),c.detach(),u.detach()})}function Hp(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(s,e),r.merge(e);t.parent.isEmpty;){const a=t.parent;t=r.createPositionBefore(a),r.remove(a)}$d(r.model.schema,e,t)&&Hp(r,e,t,n)}}function Up(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(i,t);e.parent.isEmpty;){const a=e.parent;e=r.createPositionBefore(a),r.remove(a)}t=r.createPositionBefore(s),function(a,c){const u=c.nodeBefore,f=c.nodeAfter;u.name!=f.name&&a.rename(u,f.name),a.clearAttributes(u),a.setAttributes(Object.fromEntries(f.getAttributes()),u),a.merge(c)}(r,t),$d(r.model.schema,e,t)&&Up(r,e,t,n)}}function $d(r,e,t){const n=e.parent,i=t.parent;return n!=i&&!r.isLimit(n)&&!r.isLimit(i)&&function(s,a,c){const u=new te(s,a);for(const f of u.getWalker())if(c.isLimit(f.item))return!1;return!0}(e,t,r)}function $p(r,e,t,n={}){const i=r.createElement("paragraph");r.model.schema.setAllowedAttributes(i,n,r),r.insert(i,e),Wp(r,t,r.createPositionAt(i,0))}function Wp(r,e,t){e instanceof eo?r.setSelection(t):e.setTo(t)}const qp=' ,.?!:;"-()';function mS(r,e){const{isForward:t,walker:n,unit:i,schema:s,treatEmojiAsSingleUnit:a}=r,{type:c,item:u,nextPosition:f}=e;if(c=="text")return r.unit==="word"?function(m,w){let C=m.position.textNode;if(C){let S=m.position.offset-C.startOffset;for(;!bS(C.data,S,w)&&!kS(C,S,w);){m.next();const D=w?m.position.nodeAfter:m.position.nodeBefore;if(D&&D.is("$text")){const I=D.data.charAt(w?0:D.data.length-1);qp.includes(I)||(m.next(),C=m.position.textNode)}S=m.position.offset-C.startOffset}}return m.position}(n,t):function(m,w,C){const S=m.position.textNode;if(S){const D=S.data;let I=m.position.offset-S.startOffset;for(;Lp(D,I)||w=="character"&&Op(D,I)||C&&cS(D,I);)m.next(),I=m.position.offset-S.startOffset}return m.position}(n,i,a);if(c==(t?"elementStart":"elementEnd")){if(s.isSelectable(u))return le._createAt(u,t?"after":"before");if(s.checkChild(f,"$text"))return f}else{if(s.isLimit(u))return void n.skip(()=>!0);if(s.checkChild(f,"$text"))return f}}function pS(r,e){const t=r.root,n=le._createAt(t,e?"end":0);return e?new te(r,n):new te(n,r)}function bS(r,e,t){const n=e+(t?0:-1);return qp.includes(r.charAt(n))}function kS(r,e,t){return e===(t?r.endOffset:0)}function Gp(r,e){const t=[];Array.from(r.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(r.start)||n.start.isEqual(r.start))&&(n.end.isBefore(r.end)||n.end.isEqual(r.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const s=e.createRangeOn(i);i=i.parent,e.remove(s)}})}function wS(r){r.document.registerPostFixer(e=>function(t,n){const i=n.document.selection,s=n.schema,a=[];let c=!1;for(const u of i.getRanges()){const f=vS(u,s);f&&!f.isEqual(u)?(a.push(f),c=!0):a.push(u)}c&&t.setSelection(function(u){const f=[...u],m=new Set;let w=1;for(;w<f.length;){const C=f[w],S=f.slice(0,w);for(const[D,I]of S.entries())if(!m.has(D)){if(C.isEqual(I))m.add(D);else if(C.isIntersecting(I)){m.add(D),m.add(w);const B=C.getJoined(I);f.push(B)}}w++}return f.filter((C,S)=>!m.has(S))}(a),{backward:i.isBackward})}(e,r))}function vS(r,e){return r.isCollapsed?function(t,n){const i=t.start,s=n.getNearestSelectionRange(i);if(!s){const c=i.getAncestors().reverse().find(u=>n.isObject(u));return c?te._createOn(c):null}if(!s.isCollapsed)return s;const a=s.start;return i.isEqual(a)?null:new te(a)}(r,e):function(t,n){const{start:i,end:s}=t,a=n.checkChild(i,"$text"),c=n.checkChild(s,"$text"),u=n.getLimitElement(i),f=n.getLimitElement(s);if(u===f){if(a&&c)return null;if(function(C,S,D){const I=C.nodeAfter&&!D.isLimit(C.nodeAfter)||D.checkChild(C,"$text"),B=S.nodeBefore&&!D.isLimit(S.nodeBefore)||D.checkChild(S,"$text");return I||B}(i,s,n)){const C=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),S=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),D=C?C.start:i,I=S?S.end:s;return new te(D,I)}}const m=u&&!u.is("rootElement"),w=f&&!f.is("rootElement");if(m||w){const C=i.nodeAfter&&s.nodeBefore&&i.nodeAfter.parent===s.nodeBefore.parent,S=m&&(!C||!Yp(i.nodeAfter,n)),D=w&&(!C||!Yp(s.nodeBefore,n));let I=i,B=s;return S&&(I=le._createBefore(Kp(u,n))),D&&(B=le._createAfter(Kp(f,n))),new te(I,B)}return null}(r,e)}function Kp(r,e){let t=r,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Yp(r,e){return r&&e.isSelectable(r)}class Qp{constructor(){this.markers=new jp,this.document=new Rp(this),this.schema=new Ap,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),wS(this),this.document.registerPostFixer(mp)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new Ar,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){v.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new Ar):e instanceof Ar||(e=new Ar(e)):e=new Ar,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){v.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(i,s,a,c){return i.change(u=>{let f;f=a?a instanceof Bo||a instanceof eo?a:u.createSelection(a,c):i.document.selection,f.isCollapsed||i.deleteContent(f,{doNotAutoparagraph:!0});const m=new hS(i,u,f.anchor);let w;w=s.is("documentFragment")?s.getChildren():[s],m.handleNodes(w);const C=m.getSelectionRange();C&&(f instanceof eo?u.setSelection(C):f.setTo(C));const S=m.getAffectedRange()||i.createRange(f.anchor);return m.destroy(),S})}(this,e,t,n)}insertObject(e,t,n,i){return gS(this,e,t,n,i)}deleteContent(e,t){fS(this,e,t)}modifySelection(e,t){(function(n,i,s={}){const a=n.schema,c=s.direction!="backward",u=s.unit?s.unit:"character",f=!!s.treatEmojiAsSingleUnit,m=i.focus,w=new ko({boundaries:pS(m,c),singleCharacters:!0,direction:c?"forward":"backward"}),C={walker:w,schema:a,isForward:c,unit:u,treatEmojiAsSingleUnit:f};let S;for(;S=w.next();){if(S.done)return;const D=mS(C,S.value);if(D)return void(i instanceof eo?n.change(I=>{I.setSelectionFocus(D)}):i.setFocus(D))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(i=>{const s=i.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return s;const c=a.start.root,u=a.start.getCommonPath(a.end),f=c.getNodeByPath(u);let m;m=a.start.parent==a.end.parent?a:i.createRange(i.createPositionAt(f,a.start.path[u.length]),i.createPositionAt(f,a.end.path[u.length]+1));const w=m.end.offset-m.start.offset;for(const C of m.getItems({shallow:!0}))C.is("$textProxy")?i.appendText(C.data,C.getAttributes(),s):i.append(i.cloneElement(C,!0),s);if(m!=a){const C=a._getTransformedByMove(m.start,i.createPositionAt(s,0),w)[0],S=i.createRange(i.createPositionAt(s,0),C.start);Gp(i.createRange(C.end,i.createPositionAt(s,"end")),i),Gp(S,i)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof lt?te._createIn(e):e;if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:s=!1}=t;if(!s){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!i||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new le(e,t,n)}createPositionAt(e,t){return le._createAt(e,t)}createPositionAfter(e){return le._createAfter(e)}createPositionBefore(e){return le._createBefore(e)}createRange(e,t){return new te(e,t)}createRangeIn(e){return te._createIn(e)}createRangeOn(e){return te._createOn(e)}createSelection(e,t,n){return new Bo(e,t,n)}createBatch(e){return new Ar(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return no[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new nS(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}oe(Qp,Ne);class _S extends Wn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(s,a)=>{this.editor.execute(i),a()}}super.set(e,t,n)}}class Zp{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new Qx({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new $f(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new rd(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new FE,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new Qp;const i=new S2;this.data=new Ep(this.model,i),this.editing=new Cp(this.model,i),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new eS([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new _S(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new v("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],i=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(i),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){v.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}oe(Zp,Ne);class CS{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Wd(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new v("componentfactory-item-missing",this,{name:e});return this._components.get(Wd(e)).callback(this.editor.locale)}has(e){return this._components.has(Wd(e))}}function Wd(r){return String(r).toLowerCase()}class Jp{constructor(e){this.editor=e,this.componentFactory=new CS(e),this.focusTracker=new Dn,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}oe(Jp,Ne);const AS={setData(r){this.data.set(r)},getData(r){return this.data.get(r)}},yS=AS;function xS(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}const ES={updateSourceElement(r=this.data.get()){if(!this.sourceElement)throw new v("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;xS(this.sourceElement,e||t?r:"")}};class Xp extends Ss{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new un({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new v("pendingactions-add-invalid-message",this);const t=Object.create(Ne);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const eb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',zt={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:eb};function qd({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(i,s)=>{if(!e())return;const a=typeof s.composedPath=="function"?s.composedPath():[];for(const c of n)if(c.contains(s.target)||a.includes(c))return;t()})}function Gd(r){r.set("_isCssTransitionsDisabled",!1),r.disableCssTransitions=()=>{r._isCssTransitionsDisabled=!0},r.enableCssTransitions=()=>{r._isCssTransitionsDisabled=!1},r.extendTemplate({attributes:{class:[r.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Kd({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}class Qo extends un{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new v("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const s of e)i.delegate(s).to(t)}),this.on("remove",(n,i)=>{for(const s of e)i.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var tb=g(4793),SS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(tb.Z,SS),tb.Z.locals;class ze{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new un,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=In.bind(this,this)}createCollection(e){const t=new Qo(e);return this._viewCollections.add(t),t}registerChild(e){Un(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){Un(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new In(e)}extendTemplate(e){In.extend(this.template,e)}render(){if(this.isRendered)throw new v("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}oe(ze,Bs),oe(ze,Ne);class In{constructor(e){Object.assign(this,rb(ib(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new v("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)cl(n)?yield n:Yd(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new DS({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,s)=>new nb({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:s})}}static extend(e,t){if(e._isRendered)throw new v("template-extend-render",[this,e]);cb(e,rb(ib(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new v("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),ll(this.text)?this._bindToObservable({schema:this.text,updater:IS(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,i,s;if(!this.attributes)return;const a=e.node,c=e.revertData;for(t in this.attributes)if(i=a.getAttribute(t),n=this.attributes[t],c&&(c.attributes[t]=i),s=pe(n[0])&&n[0].ns?n[0].ns:null,ll(n)){const u=s?n[0].value:n;c&&db(t)&&u.unshift(i),this._bindToObservable({schema:u,updater:TS(a,t,s),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(c&&i&&db(t)&&n.unshift(i),n=n.map(u=>u&&u.value||u).reduce((u,f)=>u.concat(f),[]).reduce(ab,""),xr(n)||a.setAttributeNS(s,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const s=e[i];ll(s)?this._bindToObservable({schema:[s],updater:MS(n,i),data:t}):n.style[i]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let s=0;for(const a of this.children)if(Qd(a)){if(!i){a.setParent(t);for(const c of a)n.appendChild(c.element)}}else if(cl(a))i||(a.isRendered||a.render(),n.appendChild(a.element));else if(_r(a))n.appendChild(a);else if(i){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),a._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:c})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[s,a]=t.split("@");return i.activateDomEventListener(s,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;ob(e,t,n);const s=e.filter(a=>!xr(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));i&&i.bindings.push(s)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const i of n)i();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const i=t.attributes[n];i===null?e.removeAttribute(n):e.setAttribute(n,i)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}oe(In,L);class Vs{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>ob(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class DS extends Vs{activateDomEventListener(e,t,n){const i=(s,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class nb extends Vs{getValue(e){return!xr(super.getValue(e))&&(this.valueIfTrue||!0)}}function ll(r){return!!r&&(r.value&&(r=r.value),Array.isArray(r)?r.some(ll):r instanceof Vs)}function ob(r,e,{node:t}){let n=function(i,s){return i.map(a=>a instanceof Vs?a.getValue(s):a)}(r,t);n=r.length==1&&r[0]instanceof nb?n[0]:n.reduce(ab,""),xr(n)?e.remove():e.set(n)}function IS(r){return{set(e){r.textContent=e},remove(){r.textContent=""}}}function TS(r,e,t){return{set(n){r.setAttributeNS(t,e,n)},remove(){r.removeAttributeNS(t,e)}}}function MS(r,e){return{set(t){r.style[e]=t},remove(){r.style[e]=null}}}function ib(r){return Uf(r,e=>{if(e&&(e instanceof Vs||Yd(e)||cl(e)||Qd(e)))return e})}function rb(r){if(typeof r=="string"?r=function(e){return{text:[e]}}(r):r.text&&function(e){e.text=Ut(e.text)}(r),r.on&&(r.eventListeners=function(e){for(const t in e)sb(e,t);return e}(r.on),delete r.on),!r.text){r.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Ut(t[n].value)),sb(t,n)}(r.attributes);const e=[];if(r.children)if(Qd(r.children))e.push(r.children);else for(const t of r.children)Yd(t)||cl(t)||_r(t)?e.push(t):e.push(new In(t));r.children=e}return r}function sb(r,e){r[e]=Ut(r[e])}function ab(r,e){return xr(e)?r:xr(r)?e:`${r} ${e}`}function lb(r,e){for(const t in e)r[t]?r[t].push(...e[t]):r[t]=e[t]}function cb(r,e){if(e.attributes&&(r.attributes||(r.attributes={}),lb(r.attributes,e.attributes)),e.eventListeners&&(r.eventListeners||(r.eventListeners={}),lb(r.eventListeners,e.eventListeners)),e.text&&r.text.push(...e.text),e.children&&e.children.length){if(r.children.length!=e.children.length)throw new v("ui-template-extend-children-mismatch",r);let t=0;for(const n of e.children)cb(r.children[t++],n)}}function xr(r){return!r&&r!==0}function cl(r){return r instanceof ze}function Yd(r){return r instanceof In}function Qd(r){return r instanceof Qo}function db(r){return r=="class"||r=="style"}class BS extends Qo{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new In({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=$m(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var ub=g(6574),NS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(ub.Z,NS),ub.Z.locals;class dl extends ze{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var hb=g(3332),PS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(hb.Z,PS),hb.Z.locals;class gb extends ze{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",n=>"ck-tooltip_"+n),t.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}var fb=g(4906),zS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(fb.Z,zS),fb.Z.locals;class Ze extends ze{constructor(e){super(e);const t=this.bindTemplate,n=A();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new dl,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s))},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};at.isSafari&&(i.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new gb;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new ze,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new ze;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>cm(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=cm(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var mb=g(5332),LS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(mb.Z,LS),mb.Z.locals;class Hs extends Ze{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new ze;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}function OS(r){return typeof r=="string"?{model:r,label:r,hasBorder:!1,view:{name:"span",styles:{color:r}}}:{model:r.color,label:r.label||r.color,hasBorder:r.hasBorder!==void 0&&r.hasBorder,view:{name:"span",styles:{color:`${r.color}`}}}}class pb extends Ze{constructor(e){super(e);const t=this.bindTemplate;this.set("color"),this.set("hasBorder"),this.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',this.extendTemplate({attributes:{style:{backgroundColor:t.to("color")},class:["ck","ck-color-grid__tile",t.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}function bb(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}class zo{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(s,a)=>{this[t](),a()})}}get first(){return this.focusables.find(Zd)||null}get last(){return this.focusables.filter(Zd).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let i=(t+n+e)%n;do{const s=this.focusables.get(i);if(Zd(s))return s;i=(i+n+e)%n}while(i!==t);return null}}function Zd(r){return!(!r.focus||!bb(r.element))}var kb=g(6781),RS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(kb.Z,RS),kb.Z.locals;class wb extends ze{constructor(e,t){super(e);const n=t&&t.colorDefinitions||[],i={};t&&t.columns&&(i.gridTemplateColumns=`repeat( ${t.columns}, 1fr)`),this.set("selectedColor"),this.items=this.createCollection(),this.focusTracker=new Dn,this.keystrokes=new Wn,this._focusCycler=new zo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowleft",focusNext:"arrowright"}}),this.items.on("add",(s,a)=>{a.isOn=a.color===this.selectedColor}),n.forEach(s=>{const a=new pb;a.set({color:s.color,label:s.label,tooltip:!0,hasBorder:s.options.hasBorder}),a.on("execute",()=>{this.fire("execute",{value:s.color,hasBorder:s.options.hasBorder,label:s.label})}),this.items.add(a)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(s,a,c)=>{for(const u of this.items)u.isOn=u.color===c})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}}const Jd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Xd extends Ze{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new dl;return e.content=Jd,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var vb=g(7686),FS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(vb.Z,FS),vb.Z.locals;class eu extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new Wn,this.focusTracker=new Dn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new Ze;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new Ze,t=e.bindTemplate;return e.icon=Jd,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class jS extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():E("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var _b=g(5485),VS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(_b.Z,VS),_b.Z.locals;function Cb({element:r,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:s}){vs(e)&&(e=e()),vs(n)&&(n=n());const a=function(C){return C&&C.parentNode?C.offsetParent===Ct.document.body?null:C.offsetParent:null}(r),c=new gt(r),u=new gt(e);let f;const m=i&&function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const S=new gt(Ct.window);return S.top+=C.top,S.height-=C.top,S.bottom-=C.bottom,S.height-=C.bottom,S}(s)||null,w={targetRect:u,elementRect:c,positionedElementAncestor:a,viewportRect:m};if(n||i){const C=n&&new gt(n).getVisible();Object.assign(w,{limiterRect:C,viewportRect:m}),f=function(S,D){const{elementRect:I}=D,B=I.getArea(),O=S.map(we=>new tu(we,D)).filter(we=>!!we.name);let K=0,ne=null;for(const we of O){const{limiterIntersectionArea:Te,viewportIntersectionArea:ot}=we;if(Te===B)return we;const Oe=ot**2+Te**2;Oe>K&&(K=Oe,ne=we)}return ne}(t,w)||new tu(t[0],w)}else f=new tu(t[0],w);return f}function Ab(r){const{scrollX:e,scrollY:t}=Ct.window;return r.clone().moveBy(e,t)}class tu{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:i,top:s,name:a,config:c}=n;this.name=a,this.config=c,this._positioningFunctionCorrdinates={left:i,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Ab(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Ab(new gt(t)),i=Wm(t);let s=0,a=0;s-=n.left,a-=n.top,s+=t.scrollLeft,a+=t.scrollTop,s-=i.left,a-=i.top,e.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class Er extends ze{constructor(e,t,n){super(e);const i=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new Wn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",s=>!s)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=Er._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:i,northEast:s,northWest:a,southMiddleEast:c,southMiddleWest:u,northMiddleEast:f,northMiddleWest:m}=Er.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,c,u,e,s,a,f,m,t]:[i,n,u,c,e,a,s,m,f,t]}}Er.defaultPanelPositions={south:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/2,name:"s"}),southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),southMiddleEast:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/4,name:"sme"}),southMiddleWest:(r,e)=>({top:r.bottom,left:r.left-3*(e.width-r.width)/4,name:"smw"}),north:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/2,name:"n"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),northMiddleEast:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/4,name:"nme"}),northMiddleWest:(r,e)=>({top:r.top-e.height,left:r.left-3*(e.width-r.width)/4,name:"nmw"})},Er._getOptimalPosition=Cb;class yb extends ze{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class HS extends ze{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var xb=g(5542),US={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(xb.Z,US),xb.Z.locals;class nu extends ze{constructor(e,t){super(e);const n=this.bindTemplate,i=this.t;this.options=t||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Dn,this.keystrokes=new Wn,this.set("class"),this.set("isCompact",!1),this.itemsView=new $S(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new zo({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var c;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(c=this,c.bindTemplate.to(u=>{u.target===c.element&&u.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new qS(this):new WS(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=function(a){return Array.isArray(a)?{items:a,removeItems:[]}:a?Object.assign({items:[],removeItems:[]},a):{items:[],removeItems:[]}}(e),i=n.items.filter((a,c,u)=>a==="|"||n.removeItems.indexOf(a)===-1&&(a==="-"?!this.options.shouldGroupWhenFull||(E("toolbarview-line-break-ignored-when-grouping-items",u),!1):!!t.has(a)||(E("toolbarview-item-unavailable",{name:a}),!1))),s=this._cleanSeparators(i).map(a=>a==="|"?new yb:a==="-"?new HS:t.create(a));this.items.addMany(s)}_cleanSeparators(e){const t=a=>a!=="-"&&a!=="|",n=e.length,i=e.findIndex(t),s=n-e.slice().reverse().findIndex(t);return e.slice(i,s).filter((a,c,u)=>t(a)?!0:!(c>0&&u[c-1]===a))}}class $S extends ze{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class WS{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class qS{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const i=n.index;for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+n.added.length;s++){const a=n.added[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!bb(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new gt(e.lastChild),i=new gt(e);if(!this.cachedPadding){const s=Ct.window.getComputedStyle(e),a=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[a])}return t==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new At(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new yb),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Tn(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",ou(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:eb}),n.toolbarView.items.bindTo(this.groupedItems).using(i=>i),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Eb=g(1046),GS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Eb.Z,GS),Eb.Z.locals;class KS extends ze{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Dn,this.keystrokes=new Wn,this._focusCycler=new zo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Sb extends ze{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class YS extends ze{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Db=g(7339),QS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Db.Z,QS),Db.Z.locals;var Ib=g(3949),ZS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Ib.Z,ZS),Ib.Z.locals;function Tn(r,e=Xd){const t=new e(r),n=new jS(r),i=new Er(r,t,n);return t.bind("isEnabled").to(i),t instanceof Xd?t.bind("isOn").to(i,"isOpen"):t.arrowView.bind("isOn").to(i,"isOpen"),function(s){(function(a){a.on("render",()=>{qd({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(s),function(a){a.on("execute",c=>{c.source instanceof Hs||(a.isOpen=!1)})}(s),function(a){a.keystrokes.set("arrowdown",(c,u)=>{a.isOpen&&(a.panelView.focus(),u())}),a.keystrokes.set("arrowup",(c,u)=>{a.isOpen&&(a.panelView.focusLast(),u())})}(s)}(i),i}function ou(r,e,t={}){const n=r.locale,i=n.t,s=r.toolbarView=new nu(n);s.set("ariaLabel",i("Dropdown toolbar")),r.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(a=>s.items.add(a)),t.enableActiveItemFocusOnDropdownOpen&&ul(r,()=>s.items.find(a=>a.isOn)),r.panelView.children.add(s),s.items.delegate("execute").to(r)}function Us(r,e){const t=r.locale,n=r.listView=new KS(t);n.items.bindTo(e).using(({type:i,model:s})=>{if(i==="separator")return new YS(t);if(i==="button"||i==="switchbutton"){const a=new Sb(t);let c;return c=i==="button"?new Ze(t):new Hs(t),c.bind(...Object.keys(s)).to(s),c.delegate("execute").to(a),a.children.add(c),a}}),r.panelView.children.add(n),n.items.delegate("execute").to(r),ul(r,()=>n.items.find(i=>i instanceof Sb&&i.children.first.isOn))}function ul(r,e){r.on("change:isOpen",()=>{if(!r.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():E("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:"low"})}var Tb=g(9688),JS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Tb.Z,JS),Tb.Z.locals;class XS extends ze{constructor(e){super(e),this.body=new BS(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Mb=g(3662),eD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Mb.Z,eD),Mb.Z.locals;class Bb extends ze{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${A()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class tD extends ze{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const s=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",s),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(s,a,c)=>{c?n(i):t(i)})}(this):t(this)}}class nD extends tD{constructor(e,t,n,i={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var Nb=g(8847),oD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Nb.Z,oD),Nb.Z.locals;var Pb=g(4879),iD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Pb.Z,iD),Pb.Z.locals;class zb extends ze{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Dn,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class rD extends zb{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}class sD extends zb{constructor(e,{min:t,max:n,step:i}={}){super(e);const s=this.bindTemplate;this.set("min",t),this.set("max",n),this.set("step",i),this.extendTemplate({attributes:{type:"number",class:["ck-input-number"],min:s.to("min"),max:s.to("max"),step:s.to("step")}})}}var Lb=g(2577),aD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Lb.Z,aD),Lb.Z.locals;class hl extends ze{constructor(e,t){super(e);const n=`ck-labeled-field-view-${A()}`,i=`ck-labeled-field-view-status-${A()}`;this.fieldView=t(this,n,i),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,c)=>a||c);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",a=>!a),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new Bb(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new ze(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function iu(r,e,t){const n=new rD(r.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}function lD(r,e,t){const n=new sD(r.locale);return n.set({id:e,ariaDescribedById:t,inputMode:"numeric"}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}class ru extends Ss{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Sr{constructor(e,t){t&&Dd(this,t),e&&this.set(e)}}function Ob(r){return e=>e+r}oe(Sr,Ne);var Rb=g(8793),cD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Rb.Z,cD),Rb.Z.locals;const Fb=Ob("px"),jb=Ct.document.body;class bn extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Fb),left:t.to("left",Fb)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=bn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:jb,fitInViewport:!0},e),i=bn._getOptimalPosition(n),s=parseInt(i.left),a=parseInt(i.top),{name:c,config:u={}}=i,{withArrow:f=!0}=u;Object.assign(this,{top:a,left:s,position:c,withArrow:f})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=su(e.target),n=e.limiter?su(e.limiter):jb;this.listenTo(Ct.document,"scroll",(i,s)=>{const a=s.target,c=t&&a.contains(t),u=n&&a.contains(n);!c&&!u&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Ct.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Ct.document,"scroll"),this.stopListening(Ct.window,"resize")}}function su(r){return Ni(r)?r:il(r)?r.commonAncestorContainer:typeof r=="function"?su(r()):null}bn.arrowHorizontalOffset=25,bn.arrowVerticalOffset=10,bn.stickyVerticalOffset=20,bn._getOptimalPosition=Cb,bn.defaultPositions=function({horizontalOffset:r=bn.arrowHorizontalOffset,verticalOffset:e=bn.arrowVerticalOffset,stickyVerticalOffset:t=bn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(a,c)=>({top:i(a,c),left:a.left-r,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.left-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(a,c)=>({top:i(a,c),left:a.left-c.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.left-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(a,c)=>({top:i(a,c),left:a.left-c.width+r,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(a,c)=>({top:i(a,c),left:a.left+a.width/2-r,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.left+a.width/2-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(a,c)=>({top:i(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.left+a.width/2-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(a,c)=>({top:i(a,c),left:a.left+a.width/2-c.width+r,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(a,c)=>({top:i(a,c),left:a.right-r,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.right-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(a,c)=>({top:i(a,c),left:a.right-c.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.right-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(a,c)=>({top:i(a,c),left:a.right-c.width+r,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(a,c)=>({top:s(a),left:a.left-r,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+r,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(a,c)=>({top:s(a),left:a.left+a.width/2-r,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+r,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(a,c)=>({top:s(a),left:a.right-r,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+r,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(a,c,u)=>a.getIntersection(u)?{top:u.top+t,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function i(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}();var Vb=g(4650),dD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Vb.Z,dD),Vb.Z.locals;var Hb=g(7676),uD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Hb.Z,uD),Hb.Z.locals;const gl=Ob("px");class fl extends J{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new bn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new v("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new v("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new v("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new hD(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new gD(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class hD extends ze{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Dn,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Ze(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class gD extends ze{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",gl),left:n.to("left",gl),width:n.to("width",gl),height:n.to("height",gl)}},children:this.content}),this.on("change:numberOfPanels",(i,s,a,c)=>{a>c?this._addPanels(a-c):this._removePanels(c-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ze;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new gt(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Ub=g(5868),fD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Ub.Z,fD),Ub.Z.locals;var $b=g(9695),mD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()($b.Z,mD),$b.Z.locals;var Wb=g(4717),pD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Wb.Z,pD),Wb.Z.locals;const ml=new WeakMap;function qb(r){const{view:e,element:t,text:n,isDirectHost:i=!0,keepOnFocus:s=!1}=r,a=e.document;ml.has(a)||(ml.set(a,new Map),a.registerPostFixer(c=>Gb(a,c))),ml.get(a).set(t,{text:n,isDirectHost:i,keepOnFocus:s,hostElement:i?t:null}),e.change(c=>Gb(a,c))}function bD(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function Gb(r,e){const t=ml.get(r),n=[];let i=!1;for(const[s,a]of t)a.isDirectHost&&(n.push(s),Kb(e,s,a)&&(i=!0));for(const[s,a]of t){if(a.isDirectHost)continue;const c=kD(s);c&&(n.includes(c)||(a.hostElement=c,Kb(e,s,a)&&(i=!0)))}return i}function Kb(r,e,t){const{text:n,isDirectHost:i,hostElement:s}=t;let a=!1;return s.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,s),a=!0),(i||e.childCount==1)&&function(c,u){if(!c.isAttached()||Array.from(c.getChildren()).some(C=>!C.is("uiElement")))return!1;if(u)return!0;const m=c.document;if(!m.isFocused)return!0;const w=m.selection.anchor;return w&&w.parent!==c}(s,t.keepOnFocus)?function(c,u){return!u.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",u),!0)}(r,s)&&(a=!0):bD(r,s)&&(a=!0),a}function kD(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const au=new Map;function Je(r,e,t){let n=au.get(r);n||(n=new Map,au.set(r,n)),n.set(e,t)}function wD(r){return[r]}function Yb(r,e,t={}){const n=function(i,s){const a=au.get(i);return a&&a.has(s)?a.get(s):wD}(r.constructor,e.constructor);try{return n(r=r.clone(),e,t)}catch(i){throw i}}function vD(r,e,t){r=r.slice(),e=e.slice();const n=new _D(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(r),n.setOriginalOperations(e);const i=n.originalOperations;if(r.length==0||e.length==0)return{operationsA:r,operationsB:e,originalOperations:i};const s=new WeakMap;for(const u of r)s.set(u,0);const a={nextBaseVersionA:r[r.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:r.length,originalOperationsBCount:e.length};let c=0;for(;c<r.length;){const u=r[c],f=s.get(u);if(f==e.length){c++;continue}const m=e[f],w=Yb(u,m,n.getContext(u,m,!0)),C=Yb(m,u,n.getContext(m,u,!1));n.updateRelation(u,m),n.setOriginalOperations(w,u),n.setOriginalOperations(C,m);for(const S of w)s.set(S,f+C.length);r.splice(c,1,...w),e.splice(f,1,...C)}if(t.padWithNoOps){const u=r.length-a.originalOperationsACount,f=e.length-a.originalOperationsBCount;Zb(r,f-u),Zb(e,u-f)}return Qb(r,a.nextBaseVersionB),Qb(e,a.nextBaseVersionA),{operationsA:r,operationsB:e,originalOperations:i}}class _D{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const i of e)this.originalOperations.set(i,n||i)}updateRelation(e,t){switch(e.constructor){case ct:switch(t.constructor){case jt:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case ct:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case bt:switch(t.constructor){case jt:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case ct:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=te._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:i,offset:s})}}}break;case jt:switch(t.constructor){case jt:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case bt:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case mn:{const n=e.newRange;if(!n)return;switch(t.constructor){case ct:{const i=te._createFromPositionAndShift(t.sourcePosition,t.howMany),s=i.containsPosition(n.start)||i.start.isEqual(n.start),a=i.containsPosition(n.end)||i.end.isEqual(n.end);!s&&!a||i.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()});break}case jt:{const i=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),c=n.end.isEqual(t.sourcePosition);(i||s||a||c)&&this._setRelation(e,t,{wasInLeftElement:i,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:a,wasInRightElement:c});break}}break}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),i=this._history.getUndoneOperation(n);if(!i)return null;const s=this.originalOperations.get(e),a=this._relations.get(s);return a&&a.get(i)||null}_setRelation(e,t,n){const i=this.originalOperations.get(e),s=this.originalOperations.get(t);let a=this._relations.get(i);a||(a=new Map,this._relations.set(i,a)),a.set(s,n)}}function Qb(r,e){for(const t of r)t.baseVersion=e++}function Zb(r,e){for(let t=0;t<e;t++)r.push(new Wt(0))}function Jb(r,e,t){const n=r.nodes.getNode(0).getAttribute(e);if(n==t)return null;const i=new te(r.position,r.position.getShiftedBy(r.howMany));return new Pt(i,e,n,t,0)}function Xb(r,e){return r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Dr(r,e){const t=[];for(let n=0;n<r.length;n++){const i=r[n],s=new ct(i.start,i.end.offset-i.start.offset,e,0);t.push(s);for(let a=n+1;a<r.length;a++)r[a]=r[a]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}Je(Pt,Pt,(r,e,t)=>{if(r.key===e.key&&r.range.start.hasSameParentAs(e.range.start)){const n=r.range.getDifference(e.range).map(s=>new Pt(s,r.key,r.oldValue,r.newValue,0)),i=r.range.getIntersection(e.range);return i&&t.aIsStrong&&n.push(new Pt(i,e.key,e.newValue,r.newValue,0)),n.length==0?[new Wt(0)]:n}return[r]}),Je(Pt,$t,(r,e)=>{if(r.range.start.hasSameParentAs(e.position)&&r.range.containsPosition(e.position)){const t=r.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Pt(n,r.key,r.oldValue,r.newValue,r.baseVersion));if(e.shouldReceiveAttributes){const n=Jb(e,r.key,r.oldValue);n&&t.unshift(n)}return t}return r.range=r.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[r]}),Je(Pt,jt,(r,e)=>{const t=[];r.range.start.hasSameParentAs(e.deletionPosition)&&(r.range.containsPosition(e.deletionPosition)||r.range.start.isEqual(e.deletionPosition))&&t.push(te._createFromPositionAndShift(e.graveyardPosition,1));const n=r.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(i=>new Pt(i,r.key,r.oldValue,r.newValue,r.baseVersion))}),Je(Pt,ct,(r,e)=>function(n,i){const s=te._createFromPositionAndShift(i.sourcePosition,i.howMany);let a=null,c=[];s.containsRange(n,!0)?a=n:n.start.hasSameParentAs(s.start)?(c=n.getDifference(s),a=n.getIntersection(s)):c=[n];const u=[];for(let f of c){f=f._getTransformedByDeletion(i.sourcePosition,i.howMany);const m=i.getMovedRangeStart(),w=f.start.hasSameParentAs(m);f=f._getTransformedByInsertion(m,i.howMany,w),u.push(...f)}return a&&u.push(a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),u}(r.range,e).map(n=>new Pt(n,r.key,r.oldValue,r.newValue,r.baseVersion))),Je(Pt,bt,(r,e)=>{if(r.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.range.end.offset++,[r];if(r.range.start.hasSameParentAs(e.splitPosition)&&r.range.containsPosition(e.splitPosition)){const t=r.clone();return t.range=new te(e.moveTargetPosition.clone(),r.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),r.range.end=e.splitPosition.clone(),r.range.end.stickiness="toPrevious",[r,t]}return r.range=r.range._getTransformedBySplitOperation(e),[r]}),Je($t,Pt,(r,e)=>{const t=[r];if(r.shouldReceiveAttributes&&r.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(r.position)){const n=Jb(r,e.key,e.newValue);n&&t.push(n)}return t}),Je($t,$t,(r,e,t)=>(r.position.isEqual(e.position)&&t.aIsStrong||(r.position=r.position._getTransformedByInsertOperation(e)),[r])),Je($t,ct,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Je($t,bt,(r,e)=>(r.position=r.position._getTransformedBySplitOperation(e),[r])),Je($t,jt,(r,e)=>(r.position=r.position._getTransformedByMergeOperation(e),[r])),Je(mn,$t,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByInsertOperation(e)[0]),r.newRange&&(r.newRange=r.newRange._getTransformedByInsertOperation(e)[0]),[r])),Je(mn,mn,(r,e,t)=>{if(r.name==e.name){if(!t.aIsStrong)return[new Wt(0)];r.oldRange=e.newRange?e.newRange.clone():null}return[r]}),Je(mn,jt,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByMergeOperation(e)),r.newRange&&(r.newRange=r.newRange._getTransformedByMergeOperation(e)),[r])),Je(mn,ct,(r,e,t)=>{if(r.oldRange&&(r.oldRange=te._createFromRanges(r.oldRange._getTransformedByMoveOperation(e))),r.newRange){if(t.abRelation){const n=te._createFromRanges(r.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(r.newRange.start))return r.newRange.start.path=t.abRelation.path,r.newRange.end=n.end,[r];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(r.newRange.end))return r.newRange.start=n.start,r.newRange.end.path=t.abRelation.path,[r]}r.newRange=te._createFromRanges(r.newRange._getTransformedByMoveOperation(e))}return[r]}),Je(mn,bt,(r,e,t)=>{if(r.oldRange&&(r.oldRange=r.oldRange._getTransformedBySplitOperation(e)),r.newRange){if(t.abRelation){const n=r.newRange._getTransformedBySplitOperation(e);return r.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?r.newRange.start=le._createAt(e.insertionPosition):r.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(r.newRange.start=le._createAt(e.moveTargetPosition)),r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?r.newRange.end=le._createAt(e.moveTargetPosition):r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?r.newRange.end=le._createAt(e.insertionPosition):r.newRange.end=n.end,[r]}r.newRange=r.newRange._getTransformedBySplitOperation(e)}return[r]}),Je(jt,$t,(r,e)=>(r.sourcePosition.hasSameParentAs(e.position)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByInsertOperation(e),r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e),[r])),Je(jt,jt,(r,e,t)=>{if(r.sourcePosition.isEqual(e.sourcePosition)&&r.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),r.sourcePosition=new le(e.graveyardPosition.root,n),r.howMany=0,[r]}return[new Wt(0)]}if(r.sourcePosition.isEqual(e.sourcePosition)&&!r.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=r.targetPosition.root.rootName=="$graveyard",i=e.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const a=e.targetPosition._getTransformedByMergeOperation(e),c=r.targetPosition._getTransformedByMergeOperation(e);return[new ct(a,r.howMany,c,0)]}return[new Wt(0)]}return r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMergeOperation(e),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),r.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Je(jt,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&r.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.sourcePosition)?[new Wt(0)]:(r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition.hasSameParentAs(e.sourcePosition)&&(r.howMany-=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMoveOperation(e),r.targetPosition=r.targetPosition._getTransformedByMoveOperation(e),r.graveyardPosition.isEqual(e.targetPosition)||(r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)),[r])}),Je(jt,bt,(r,e,t)=>{if(e.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),r.deletionPosition.isEqual(e.graveyardPosition)&&(r.howMany=e.howMany)),r.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,i=e.graveyardPosition&&r.deletionPosition.isEqual(e.graveyardPosition);if(n||i||t.abRelation=="mergeTargetNotMoved")return r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),[r]}if(r.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return r.howMany=0,r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r];if(t.abRelation=="mergeSameElement"||r.sourcePosition.offset>0)return r.sourcePosition=e.moveTargetPosition.clone(),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}return r.sourcePosition.hasSameParentAs(e.splitPosition)&&(r.howMany=e.splitPosition.offset),r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}),Je(ct,$t,(r,e)=>{const t=te._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByInsertOperation(e,!1)[0];return r.sourcePosition=t.start,r.howMany=t.end.offset-t.start.offset,r.targetPosition.isEqual(e.position)||(r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e)),[r]}),Je(ct,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(r.sourcePosition,r.howMany),i=te._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,a=t.aIsStrong,c=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?c=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(c=!1),s=r.targetPosition.isEqual(e.targetPosition)&&c?r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):r.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Xb(r,e)&&Xb(e,r))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Dr([n],s);if(i.containsPosition(r.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Dr([n],s);const u=tn(r.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(u=="prefix"||u=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Dr([n],s);r.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?r.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(a=!1):a=!0;const f=[],m=n.getDifference(i);for(const C of m){C.start=C.start._getTransformedByDeletion(e.sourcePosition,e.howMany),C.end=C.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const S=tn(C.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",D=C._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,S);f.push(...D)}const w=n.getIntersection(i);return w!==null&&a&&(w.start=w.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),w.end=w.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),f.length===0?f.push(w):f.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?f.unshift(w):f.push(w):f.splice(1,0,w)),f.length===0?[new Wt(r.baseVersion)]:Dr(f,s)}),Je(ct,bt,(r,e,t)=>{let n=r.targetPosition.clone();r.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=r.targetPosition._getTransformedBySplitOperation(e));const i=te._createFromPositionAndShift(r.sourcePosition,r.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.howMany++,r.targetPosition=n,[r];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let a=new te(e.splitPosition,i.end);return a=a._getTransformedBySplitOperation(e),Dr([new te(i.start,e.splitPosition),a],n)}r.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),r.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=r.targetPosition);const s=[i._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=i.start.isEqual(e.graveyardPosition)||i.containsPosition(e.graveyardPosition);r.howMany>1&&a&&!t.aWasUndone&&s.push(te._createFromPositionAndShift(e.insertionPosition,1))}return Dr(s,n)}),Je(ct,jt,(r,e,t)=>{const n=te._createFromPositionAndShift(r.sourcePosition,r.howMany);if(e.deletionPosition.hasSameParentAs(r.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(r.type!="remove"||t.forceWeakRemove){if(r.howMany==1)return t.bWasUndone?(r.sourcePosition=e.graveyardPosition.clone(),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]):[new Wt(0)]}else if(!t.aWasUndone){const s=[];let a=e.graveyardPosition.clone(),c=e.targetPosition._getTransformedByMergeOperation(e);r.howMany>1&&(s.push(new ct(r.sourcePosition,r.howMany-1,r.targetPosition,0)),a=a._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1),c=c._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1));const u=e.deletionPosition._getCombined(r.sourcePosition,r.targetPosition),f=new ct(a,1,u,0),m=f.getMovedRangeStart().path.slice();m.push(0);const w=new le(f.targetPosition.root,m);c=c._getTransformedByMove(a,u,1);const C=new ct(c,e.howMany,w,0);return s.push(f),s.push(C),s}}const i=te._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByMergeOperation(e);return r.sourcePosition=i.start,r.howMany=i.end.offset-i.start.offset,r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]}),Je(pn,$t,(r,e)=>(r.position=r.position._getTransformedByInsertOperation(e),[r])),Je(pn,jt,(r,e)=>r.position.isEqual(e.deletionPosition)?(r.position=e.graveyardPosition.clone(),r.position.stickiness="toNext",[r]):(r.position=r.position._getTransformedByMergeOperation(e),[r])),Je(pn,ct,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Je(pn,pn,(r,e,t)=>{if(r.position.isEqual(e.position)){if(!t.aIsStrong)return[new Wt(0)];r.oldName=e.newName}return[r]}),Je(pn,bt,(r,e)=>{if(tn(r.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new pn(r.position.getShiftedBy(1),r.oldName,r.newName,0);return[r,t]}return r.position=r.position._getTransformedBySplitOperation(e),[r]}),Je(Po,Po,(r,e,t)=>{if(r.root===e.root&&r.key===e.key){if(!t.aIsStrong||r.newValue===e.newValue)return[new Wt(0)];r.oldValue=e.newValue}return[r]}),Je(bt,$t,(r,e)=>(r.splitPosition.hasSameParentAs(e.position)&&r.splitPosition.offset<e.position.offset&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByInsertOperation(e),r.insertionPosition=r.insertionPosition._getTransformedByInsertOperation(e),[r])),Je(bt,jt,(r,e,t)=>{if(!r.graveyardPosition&&!t.bWasUndone&&r.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new le(e.graveyardPosition.root,n),s=bt.getInsertionPosition(new le(e.graveyardPosition.root,n)),a=new bt(i,0,s,null,0);return r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),r.graveyardPosition=a.insertionPosition.clone(),r.graveyardPosition.stickiness="toNext",[a,r]}return r.splitPosition.hasSameParentAs(e.deletionPosition)&&!r.splitPosition.isAfter(e.deletionPosition)&&r.howMany--,r.splitPosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Je(bt,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(e.sourcePosition,e.howMany);if(r.graveyardPosition){const s=n.start.isEqual(r.graveyardPosition)||n.containsPosition(r.graveyardPosition);if(!t.bWasUndone&&s){const a=r.splitPosition._getTransformedByMoveOperation(e),c=r.graveyardPosition._getTransformedByMoveOperation(e),u=c.path.slice();u.push(0);const f=new le(c.root,u);return[new ct(a,r.howMany,f,0)]}r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)}const i=r.splitPosition.isEqual(e.targetPosition);if(i&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return r.howMany+=e.howMany,r.splitPosition=r.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r];if(i&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:a}=t.abRelation;return r.howMany+=s,r.splitPosition=r.splitPosition.getShiftedBy(a),[r]}if(r.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.splitPosition)){const s=e.howMany-(r.splitPosition.offset-e.sourcePosition.offset);return r.howMany-=s,r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany),r.splitPosition=e.sourcePosition.clone(),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]}return e.sourcePosition.isEqual(e.targetPosition)||(r.splitPosition.hasSameParentAs(e.sourcePosition)&&r.splitPosition.offset<=e.sourcePosition.offset&&(r.howMany-=e.howMany),r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany)),r.splitPosition.stickiness="toNone",r.splitPosition=r.splitPosition._getTransformedByMoveOperation(e),r.splitPosition.stickiness="toNext",r.graveyardPosition?r.insertionPosition=r.insertionPosition._getTransformedByMoveOperation(e):r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]}),Je(bt,bt,(r,e,t)=>{if(r.splitPosition.isEqual(e.splitPosition)){if(!r.graveyardPosition&&!e.graveyardPosition)return[new Wt(0)];if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition))return[new Wt(0)];if(t.abRelation=="splitBefore")return r.howMany=0,r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e),[r]}if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition)){const n=r.splitPosition.root.rootName=="$graveyard",i=e.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const a=[];return e.howMany&&a.push(new ct(e.moveTargetPosition,e.howMany,e.splitPosition,0)),r.howMany&&a.push(new ct(r.splitPosition,r.howMany,r.moveTargetPosition,0)),a}return[new Wt(0)]}if(r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e)),r.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return r.howMany++,[r];if(e.splitPosition.isEqual(r.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const i=new le(e.insertionPosition.root,n);return[r,new ct(r.insertionPosition,1,i,0)]}return r.splitPosition.hasSameParentAs(e.splitPosition)&&r.splitPosition.offset<e.splitPosition.offset&&(r.howMany-=e.howMany),r.splitPosition=r.splitPosition._getTransformedBySplitOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]});class CD extends Yo{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class pl extends Yo{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Ir{constructor(e){this.document=e}createDocumentFragment(e){return new Ri(this.document,e)}createElement(e,t,n){return new $n(this.document,e,t,n)}createText(e){return new ht(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const i=n.getChildIndex(e);return this.removeChildren(i,1,n),this.insertChild(i,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new $n(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Xt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return be._createAt(e,t)}createPositionAfter(e){return be._createAfter(e)}createPositionBefore(e){return be._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new Xn(e,t,n)}}const AD=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,yD=/^rgb\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}[0-9]{1,3}[ %]?\)$/i,xD=/^rgba\([ ]?([0-9]{1,3}[ %]?,[ ]?){3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,ED=/^hsl\([ ]?([0-9]{1,3}[ %]?[,]?[ ]*){3}(1|[0-9]+%|[0]?\.?[0-9]+)?\)$/i,SD=/^hsla\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,DD=new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","activeborder","activecaption","appworkspace","background","buttonface","buttonhighlight","buttonshadow","buttontext","captiontext","graytext","highlight","highlighttext","inactiveborder","inactivecaption","inactivecaptiontext","infobackground","infotext","menu","menutext","scrollbar","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","window","windowframe","windowtext","rebeccapurple","currentcolor","transparent"]);function ID(r){return r.startsWith("#")?AD.test(r):r.startsWith("rgb")?yD.test(r)||xD.test(r):r.startsWith("hsl")?ED.test(r)||SD.test(r):DD.has(r.toLowerCase())}const TD=/^([+-]?[0-9]*([.][0-9]+)?(px|cm|mm|in|pc|pt|ch|em|ex|rem|vh|vw|vmin|vmax)|0)$/,MD=/^[+-]?[0-9]*([.][0-9]+)?%$/,BD=["repeat-x","repeat-y","repeat","space","round","no-repeat"],ND=["center","top","bottom","left","right"];function PD(r){return ND.includes(r)}const zD=["fixed","scroll","local"];function LD(r){return zD.includes(r)}const OD=/^url\(/;function RD(r){return OD.test(r)}function FD(r=""){if(r==="")return{top:void 0,right:void 0,bottom:void 0,left:void 0};const e=ek(r),t=e[0],n=e[2]||t,i=e[1]||t;return{top:t,bottom:n,right:i,left:e[3]||i}}function jD({top:r,right:e,bottom:t,left:n}){const i=[];return n!==e?i.push(r,e,t,n):t!==r?i.push(r,e,t):e!==r?i.push(r,e):i.push(r),i.join(" ")}function ek(r){return r.replace(/, /g,",").split(" ").map(e=>e.replace(/,/g,", "))}function VD(r){r.setNormalizer("background",HD),r.setNormalizer("background-color",e=>({path:"background.color",value:e})),r.setReducer("background",e=>{const t=[];return t.push(["background-color",e.color]),t}),r.setStyleRelation("background",["background-color"])}function HD(r){const e={},t=ek(r);for(const i of t)n=i,BD.includes(n)?(e.repeat=e.repeat||[],e.repeat.push(i)):PD(i)?(e.position=e.position||[],e.position.push(i)):LD(i)?e.attachment=i:ID(i)?e.color=i:RD(i)&&(e.image=i);var n;return{path:"background",value:e}}function UD(r){var e,t;r.setNormalizer("margin",(e="margin",n=>({path:e,value:FD(n)}))),r.setNormalizer("margin-top",n=>({path:"margin.top",value:n})),r.setNormalizer("margin-right",n=>({path:"margin.right",value:n})),r.setNormalizer("margin-bottom",n=>({path:"margin.bottom",value:n})),r.setNormalizer("margin-left",n=>({path:"margin.left",value:n})),r.setReducer("margin",(t="margin",n=>{const{top:i,right:s,bottom:a,left:c}=n,u=[];return[i,s,c,a].every(f=>!!f)?u.push([t,jD(n)]):(i&&u.push([t+"-top",i]),s&&u.push([t+"-right",s]),a&&u.push([t+"-bottom",a]),c&&u.push([t+"-left",c])),u})),r.setStyleRelation("margin",["margin-top","margin-right","margin-bottom","margin-left"])}class $D extends Jp{constructor(e,t){super(e),this.view=t}init(){const e=this.editor,t=this.view,n=e.editing.view,i=t.editable,s=n.document.getRoot();t.editable.name=s.rootName,t.render();const a=i.element;this.setEditableElement(i.name,a),this.focusTracker.add(a),t.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(a),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view.toolbar;t.fillFromConfig(e.config.get("toolbar"),this.componentFactory),function({origin:n,originKeystrokeHandler:i,originFocusTracker:s,toolbar:a,beforeFocus:c,afterBlur:u}){s.add(a.element),i.set("Alt+F10",(f,m)=>{s.isFocused&&!a.focusTracker.isFocused&&(c&&c(),a.focus(),m())}),a.keystrokes.set("Esc",(f,m)=>{a.focusTracker.isFocused&&(n.focus(),u&&u(),m())})}({origin:e.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t})}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement,s=e.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");s&&qb({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}class WD extends XS{constructor(e,t,n={}){super(e);const i=e.t;this.toolbar=new nu(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new nD(e,t,n.editableElement,{label:s=>i("Rich Text Editor. Editing area: %0",s.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:e.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}class lu extends Zp{constructor(e,t={}){if(!Ni(e)&&t.initialData!==void 0)throw new v("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Ni(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(e)),Ni(e)&&(this.sourceElement=e,function(s){const a=s.sourceElement;if(a){if(a.ckeditorInstance)throw new v("editor-source-element-already-used",s);a.ckeditorInstance=s,s.once("destroy",()=>{delete a.ckeditorInstance})}}(this)),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new WD(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:n});this.ui=new $D(this,i)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(n=>{if(Ni(e)&&e.tagName==="TEXTAREA")throw new v("editor-wrong-element",null);const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init()).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}oe(lu,ES),oe(lu,yS);class qD{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),i=Array.from(t.items||[]);return n.length?n:i.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class cu extends Yo{constructor(e){super(e);const t=this.document;function n(i){return(s,a)=>{a.preventDefault();const c=a.dropRange?[a.dropRange]:null,u=new _(t,i);t.fire(u,{dataTransfer:a.dataTransfer,method:s.name,targetRanges:c,target:a.target}),u.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new qD(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,i){const s=i.target.ownerDocument,a=i.clientX,c=i.clientY;let u;return s.caretRangeFromPoint&&s.caretRangeFromPoint(a,c)?u=s.caretRangeFromPoint(a,c):i.rangeParent&&(u=s.createRange(),u.setStart(i.rangeParent,i.rangeOffset),u.collapse(!0)),u?n.domConverter.domRangeToView(u):null}(this.view,e)),this.fire(e.type,e,t)}}const tk=["figcaption","li"];function nk(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const i=nk(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(tk.includes(t.name)||tk.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(o,l){(function(d,h){o.exports=h(s6)})(window,function(d){return function(h){var g={};function p(b){if(g[b])return g[b].exports;var _=g[b]={i:b,l:!1,exports:{}};return h[b].call(_.exports,_,_.exports,p),_.l=!0,_.exports}return p.m=h,p.c=g,p.d=function(b,_,k){p.o(b,_)||Object.defineProperty(b,_,{enumerable:!0,get:k})},p.r=function(b){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},p.t=function(b,_){if(1&_&&(b=p(b)),8&_||4&_&&typeof b=="object"&&b&&b.__esModule)return b;var k=Object.create(null);if(p.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:b}),2&_&&typeof b!="string")for(var A in b)p.d(k,A,function(x){return b[x]}.bind(null,A));return k},p.n=function(b){var _=b&&b.__esModule?function(){return b.default}:function(){return b};return p.d(_,"a",_),_},p.o=function(b,_){return Object.prototype.hasOwnProperty.call(b,_)},p.p="",p(p.s=3)}([function(h,g){h.exports=d},function(h,g,p){(function(b){var _=typeof b=="object"&&b&&b.Object===Object&&b;g.a=_}).call(this,p(2))},function(h,g){var p;p=function(){return this}();try{p=p||new Function("return this")()}catch{typeof window=="object"&&(p=window)}h.exports=p},function(h,g,p){p.r(g);var b=p(0),_=p.n(b),k=function(H){var ce=typeof H;return H!=null&&(ce=="object"||ce=="function")},A=p(1),x=typeof self=="object"&&self&&self.Object===Object&&self,y=A.a||x||Function("return this")(),v=function(){return y.Date.now()},E=/\s/,N=function(H){for(var ce=H.length;ce--&&E.test(H.charAt(ce)););return ce},F=/^\s+/,j=function(H){return H&&H.slice(0,N(H)+1).replace(F,"")},M=y.Symbol,T=Object.prototype,R=T.hasOwnProperty,G=T.toString,U=M?M.toStringTag:void 0,Z=function(H){var ce=R.call(H,U),de=H[U];try{H[U]=void 0;var oe=!0}catch{}var J=G.call(H);return oe&&(ce?H[U]=de:delete H[U]),J},L=Object.prototype.toString,V=function(H){return L.call(H)},W=M?M.toStringTag:void 0,Y=function(H){return H==null?H===void 0?"[object Undefined]":"[object Null]":W&&W in Object(H)?Z(H):V(H)},Q=function(H){return H!=null&&typeof H=="object"},X=function(H){return typeof H=="symbol"||Q(H)&&Y(H)=="[object Symbol]"},se=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,ke=parseInt,Ae=function(H){if(typeof H=="number")return H;if(X(H))return NaN;if(k(H)){var ce=typeof H.valueOf=="function"?H.valueOf():H;H=k(ce)?ce+"":ce}if(typeof H!="string")return H===0?H:+H;H=j(H);var de=ae.test(H);return de||pe.test(H)?ke(H.slice(2),de?2:8):se.test(H)?NaN:+H},Ie=Math.max,Ke=Math.min,Rt=function(H,ce,de){var oe,J,Ge,he,De,P,$=0,ee=!1,ie=!1,re=!0;if(typeof H!="function")throw new TypeError("Expected a function");function ge(_e){var ye=oe,Se=J;return oe=J=void 0,$=_e,he=H.apply(Se,ye)}function Ce(_e){return $=_e,De=setTimeout(me,ce),ee?ge(_e):he}function fe(_e){var ye=_e-P;return P===void 0||ye>=ce||ye<0||ie&&_e-$>=Ge}function me(){var _e=v();if(fe(_e))return ue(_e);De=setTimeout(me,function(ye){var Se=ce-(ye-P);return ie?Ke(Se,Ge-(ye-$)):Se}(_e))}function ue(_e){return De=void 0,re&&oe?ge(_e):(oe=J=void 0,he)}function Ee(){var _e=v(),ye=fe(_e);if(oe=arguments,J=this,P=_e,ye){if(De===void 0)return Ce(P);if(ie)return clearTimeout(De),De=setTimeout(me,ce),ge(P)}return De===void 0&&(De=setTimeout(me,ce)),he}return ce=Ae(ce)||0,k(de)&&(ee=!!de.leading,Ge=(ie="maxWait"in de)?Ie(Ae(de.maxWait)||0,ce):Ge,re="trailing"in de?!!de.trailing:re),Ee.cancel=function(){De!==void 0&&clearTimeout(De),$=0,oe=P=J=De=void 0},Ee.flush=function(){return De===void 0?he:ue(v())},Ee},St={name:"ckeditor",created(){const{CKEDITOR_VERSION:H}=window;if(H){const[ce]=H.split(".").map(Number);ce<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(b.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const H=Object.assign({},this.config);this.modelValue&&(H.initialData=this.modelValue),this.editor.create(this.$el,H).then(ce=>{this.instance=Object(b.markRaw)(ce),this.setUpEditorEvents(),this.modelValue!==H.initialData&&ce.setData(this.modelValue),this.disabled&&ce.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ce)}).catch(ce=>{console.error(ce)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(H){this.instance&&H!==this.lastEditorData&&this.instance.setData(H)},disabled(H){H?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const H=this.instance,ce=Rt(de=>{const oe=this.lastEditorData=H.getData();this.$emit("update:modelValue",oe,de,H),this.$emit("input",oe,de,H)},300,{leading:!0});H.model.document.on("change:data",ce),H.editing.view.document.on("focus",de=>{this.$emit("focus",de,H)}),H.editing.view.document.on("blur",de=>{this.$emit("blur",de,H)})}}};const Ne=_.a?_.a.version:b.version,[_t]=Ne.split(".").map(H=>parseInt(H,10));if(_t<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const Jt={install(H){H.component("ckeditor",St)},component:St};g.default=Jt}]).default})})(x1);const a6=m1(x1.exports),sf=qA(Q3).use(AR).use(X3).use(a6);sf.component("icon-select",ZR);sf.component("text-select",r6);sf.mount("#app");