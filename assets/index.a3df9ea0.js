(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))h(g);new MutationObserver(g=>{for(const m of g)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function d(g){const m={};return g.integrity&&(m.integrity=g.integrity),g.referrerpolicy&&(m.referrerPolicy=g.referrerpolicy),g.crossorigin==="use-credentials"?m.credentials="include":g.crossorigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function h(g){if(g.ep)return;g.ep=!0;const m=d(g);fetch(g.href,m)}})();function wc(o,l){const d=Object.create(null),h=o.split(",");for(let g=0;g<h.length;g++)d[h[g]]=!0;return l?g=>!!d[g.toLowerCase()]:g=>!!d[g]}const y4="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",x4=wc(y4),E4="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",S4=wc(E4);function vC(o){return!!o||o===""}function cs(o){if(xe(o)){const l={};for(let d=0;d<o.length;d++){const h=o[d],g=Dt(h)?T4(h):cs(h);if(g)for(const m in g)l[m]=g[m]}return l}else{if(Dt(o))return o;if(Pt(o))return o}}const D4=/;(?![^(]*\))/g,I4=/:(.+)/;function T4(o){const l={};return o.split(D4).forEach(d=>{if(d){const h=d.split(I4);h.length>1&&(l[h[0].trim()]=h[1].trim())}}),l}function Fn(o){let l="";if(Dt(o))l=o;else if(xe(o))for(let d=0;d<o.length;d++){const h=Fn(o[d]);h&&(l+=h+" ")}else if(Pt(o))for(const d in o)o[d]&&(l+=d+" ");return l.trim()}function _C(o){if(!o)return null;let{class:l,style:d}=o;return l&&!Dt(l)&&(o.class=Fn(l)),d&&(o.style=cs(d)),o}function M4(o,l){if(o.length!==l.length)return!1;let d=!0;for(let h=0;d&&h<o.length;h++)d=mi(o[h],l[h]);return d}function mi(o,l){if(o===l)return!0;let d=V0(o),h=V0(l);if(d||h)return d&&h?o.getTime()===l.getTime():!1;if(d=pa(o),h=pa(l),d||h)return o===l;if(d=xe(o),h=xe(l),d||h)return d&&h?M4(o,l):!1;if(d=Pt(o),h=Pt(l),d||h){if(!d||!h)return!1;const g=Object.keys(o).length,m=Object.keys(l).length;if(g!==m)return!1;for(const b in o){const _=o.hasOwnProperty(b),k=l.hasOwnProperty(b);if(_&&!k||!_&&k||!mi(o[b],l[b]))return!1}}return String(o)===String(l)}function vc(o,l){return o.findIndex(d=>mi(d,l))}const tn=o=>Dt(o)?o:o==null?"":xe(o)||Pt(o)&&(o.toString===AC||!Pe(o.toString))?JSON.stringify(o,CC,2):String(o),CC=(o,l)=>l&&l.__v_isRef?CC(o,l.value):Qr(l)?{[`Map(${l.size})`]:[...l.entries()].reduce((d,[h,g])=>(d[`${h} =>`]=g,d),{})}:ar(l)?{[`Set(${l.size})`]:[...l.values()]}:Pt(l)&&!xe(l)&&!yC(l)?String(l):l,st={},Yr=[],lo=()=>{},B4=()=>!1,N4=/^on[^a-z]/,Da=o=>N4.test(o),ag=o=>o.startsWith("onUpdate:"),Nt=Object.assign,lg=(o,l)=>{const d=o.indexOf(l);d>-1&&o.splice(d,1)},P4=Object.prototype.hasOwnProperty,Ye=(o,l)=>P4.call(o,l),xe=Array.isArray,Qr=o=>Ia(o)==="[object Map]",ar=o=>Ia(o)==="[object Set]",V0=o=>Ia(o)==="[object Date]",Pe=o=>typeof o=="function",Dt=o=>typeof o=="string",pa=o=>typeof o=="symbol",Pt=o=>o!==null&&typeof o=="object",cg=o=>Pt(o)&&Pe(o.then)&&Pe(o.catch),AC=Object.prototype.toString,Ia=o=>AC.call(o),z4=o=>Ia(o).slice(8,-1),yC=o=>Ia(o)==="[object Object]",dg=o=>Dt(o)&&o!=="NaN"&&o[0]!=="-"&&""+parseInt(o,10)===o,oa=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_c=o=>{const l=Object.create(null);return d=>l[d]||(l[d]=o(d))},L4=/-(\w)/g,gn=_c(o=>o.replace(L4,(l,d)=>d?d.toUpperCase():"")),O4=/\B([A-Z])/g,So=_c(o=>o.replace(O4,"-$1").toLowerCase()),ds=_c(o=>o.charAt(0).toUpperCase()+o.slice(1)),ia=_c(o=>o?`on${ds(o)}`:""),ts=(o,l)=>!Object.is(o,l),Zr=(o,l)=>{for(let d=0;d<o.length;d++)o[d](l)},ec=(o,l,d)=>{Object.defineProperty(o,l,{configurable:!0,enumerable:!1,value:d})},pi=o=>{const l=parseFloat(o);return isNaN(l)?o:l};let H0;const R4=()=>H0||(H0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pn;class ug{constructor(l=!1){this.active=!0,this.effects=[],this.cleanups=[],!l&&Pn&&(this.parent=Pn,this.index=(Pn.scopes||(Pn.scopes=[])).push(this)-1)}run(l){if(this.active){const d=Pn;try{return Pn=this,l()}finally{Pn=d}}}on(){Pn=this}off(){Pn=this.parent}stop(l){if(this.active){let d,h;for(d=0,h=this.effects.length;d<h;d++)this.effects[d].stop();for(d=0,h=this.cleanups.length;d<h;d++)this.cleanups[d]();if(this.scopes)for(d=0,h=this.scopes.length;d<h;d++)this.scopes[d].stop(!0);if(this.parent&&!l){const g=this.parent.scopes.pop();g&&g!==this&&(this.parent.scopes[this.index]=g,g.index=this.index)}this.active=!1}}}function us(o){return new ug(o)}function xC(o,l=Pn){l&&l.active&&l.effects.push(o)}function F4(){return Pn}function Ci(o){Pn&&Pn.cleanups.push(o)}const hg=o=>{const l=new Set(o);return l.w=0,l.n=0,l},EC=o=>(o.w&bi)>0,SC=o=>(o.n&bi)>0,j4=({deps:o})=>{if(o.length)for(let l=0;l<o.length;l++)o[l].w|=bi},V4=o=>{const{deps:l}=o;if(l.length){let d=0;for(let h=0;h<l.length;h++){const g=l[h];EC(g)&&!SC(g)?g.delete(o):l[d++]=g,g.w&=~bi,g.n&=~bi}l.length=d}},vh=new WeakMap;let ea=0,bi=1;const _h=30;let ro;const tr=Symbol(""),Ch=Symbol("");class Ta{constructor(l,d=null,h){this.fn=l,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,xC(this,h)}run(){if(!this.active)return this.fn();let l=ro,d=ui;for(;l;){if(l===this)return;l=l.parent}try{return this.parent=ro,ro=this,ui=!0,bi=1<<++ea,ea<=_h?j4(this):U0(this),this.fn()}finally{ea<=_h&&V4(this),bi=1<<--ea,ro=this.parent,ui=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ro===this?this.deferStop=!0:this.active&&(U0(this),this.onStop&&this.onStop(),this.active=!1)}}function U0(o){const{deps:l}=o;if(l.length){for(let d=0;d<l.length;d++)l[d].delete(o);l.length=0}}function H4(o,l){o.effect&&(o=o.effect.fn);const d=new Ta(o);l&&(Nt(d,l),l.scope&&xC(d,l.scope)),(!l||!l.lazy)&&d.run();const h=d.run.bind(d);return h.effect=d,h}function U4(o){o.effect.stop()}let ui=!0;const DC=[];function lr(){DC.push(ui),ui=!1}function cr(){const o=DC.pop();ui=o===void 0?!0:o}function jn(o,l,d){if(ui&&ro){let h=vh.get(o);h||vh.set(o,h=new Map);let g=h.get(d);g||h.set(d,g=hg()),IC(g)}}function IC(o,l){let d=!1;ea<=_h?SC(o)||(o.n|=bi,d=!EC(o)):d=!o.has(ro),d&&(o.add(ro),ro.deps.push(o))}function $o(o,l,d,h,g,m){const b=vh.get(o);if(!b)return;let _=[];if(l==="clear")_=[...b.values()];else if(d==="length"&&xe(o))b.forEach((k,A)=>{(A==="length"||A>=h)&&_.push(k)});else switch(d!==void 0&&_.push(b.get(d)),l){case"add":xe(o)?dg(d)&&_.push(b.get("length")):(_.push(b.get(tr)),Qr(o)&&_.push(b.get(Ch)));break;case"delete":xe(o)||(_.push(b.get(tr)),Qr(o)&&_.push(b.get(Ch)));break;case"set":Qr(o)&&_.push(b.get(tr));break}if(_.length===1)_[0]&&Ah(_[0]);else{const k=[];for(const A of _)A&&k.push(...A);Ah(hg(k))}}function Ah(o,l){const d=xe(o)?o:[...o];for(const h of d)h.computed&&$0(h);for(const h of d)h.computed||$0(h)}function $0(o,l){(o!==ro||o.allowRecurse)&&(o.scheduler?o.scheduler():o.run())}const $4=wc("__proto__,__v_isRef,__isVue"),TC=new Set(Object.getOwnPropertyNames(Symbol).filter(o=>o!=="arguments"&&o!=="caller").map(o=>Symbol[o]).filter(pa)),W4=Cc(),q4=Cc(!1,!0),G4=Cc(!0),K4=Cc(!0,!0),W0=Y4();function Y4(){const o={};return["includes","indexOf","lastIndexOf"].forEach(l=>{o[l]=function(...d){const h=qe(this);for(let m=0,b=this.length;m<b;m++)jn(h,"get",m+"");const g=h[l](...d);return g===-1||g===!1?h[l](...d.map(qe)):g}}),["push","pop","shift","unshift","splice"].forEach(l=>{o[l]=function(...d){lr();const h=qe(this)[l].apply(this,d);return cr(),h}}),o}function Cc(o=!1,l=!1){return function(h,g,m){if(g==="__v_isReactive")return!o;if(g==="__v_isReadonly")return o;if(g==="__v_isShallow")return l;if(g==="__v_raw"&&m===(o?l?OC:LC:l?zC:PC).get(h))return h;const b=xe(h);if(!o&&b&&Ye(W0,g))return Reflect.get(W0,g,m);const _=Reflect.get(h,g,m);return(pa(g)?TC.has(g):$4(g))||(o||jn(h,"get",g),l)?_:kt(_)?b&&dg(g)?_:_.value:Pt(_)?o?hs(_):Qt(_):_}}const Q4=MC(),Z4=MC(!0);function MC(o=!1){return function(d,h,g,m){let b=d[h];if(ns(b)&&kt(b)&&!kt(g))return!1;if(!o&&!ns(g)&&(tc(g)||(g=qe(g),b=qe(b)),!xe(d)&&kt(b)&&!kt(g)))return b.value=g,!0;const _=xe(d)&&dg(h)?Number(h)<d.length:Ye(d,h),k=Reflect.set(d,h,g,m);return d===qe(m)&&(_?ts(g,b)&&$o(d,"set",h,g):$o(d,"add",h,g)),k}}function J4(o,l){const d=Ye(o,l);o[l];const h=Reflect.deleteProperty(o,l);return h&&d&&$o(o,"delete",l,void 0),h}function X4(o,l){const d=Reflect.has(o,l);return(!pa(l)||!TC.has(l))&&jn(o,"has",l),d}function eB(o){return jn(o,"iterate",xe(o)?"length":tr),Reflect.ownKeys(o)}const BC={get:W4,set:Q4,deleteProperty:J4,has:X4,ownKeys:eB},NC={get:G4,set(o,l){return!0},deleteProperty(o,l){return!0}},tB=Nt({},BC,{get:q4,set:Z4}),nB=Nt({},NC,{get:K4}),gg=o=>o,Ac=o=>Reflect.getPrototypeOf(o);function zl(o,l,d=!1,h=!1){o=o.__v_raw;const g=qe(o),m=qe(l);d||(l!==m&&jn(g,"get",l),jn(g,"get",m));const{has:b}=Ac(g),_=h?gg:d?bg:ba;if(b.call(g,l))return _(o.get(l));if(b.call(g,m))return _(o.get(m));o!==g&&o.get(l)}function Ll(o,l=!1){const d=this.__v_raw,h=qe(d),g=qe(o);return l||(o!==g&&jn(h,"has",o),jn(h,"has",g)),o===g?d.has(o):d.has(o)||d.has(g)}function Ol(o,l=!1){return o=o.__v_raw,!l&&jn(qe(o),"iterate",tr),Reflect.get(o,"size",o)}function q0(o){o=qe(o);const l=qe(this);return Ac(l).has.call(l,o)||(l.add(o),$o(l,"add",o,o)),this}function G0(o,l){l=qe(l);const d=qe(this),{has:h,get:g}=Ac(d);let m=h.call(d,o);m||(o=qe(o),m=h.call(d,o));const b=g.call(d,o);return d.set(o,l),m?ts(l,b)&&$o(d,"set",o,l):$o(d,"add",o,l),this}function K0(o){const l=qe(this),{has:d,get:h}=Ac(l);let g=d.call(l,o);g||(o=qe(o),g=d.call(l,o)),h&&h.call(l,o);const m=l.delete(o);return g&&$o(l,"delete",o,void 0),m}function Y0(){const o=qe(this),l=o.size!==0,d=o.clear();return l&&$o(o,"clear",void 0,void 0),d}function Rl(o,l){return function(h,g){const m=this,b=m.__v_raw,_=qe(b),k=l?gg:o?bg:ba;return!o&&jn(_,"iterate",tr),b.forEach((A,y)=>h.call(g,k(A),k(y),m))}}function Fl(o,l,d){return function(...h){const g=this.__v_raw,m=qe(g),b=Qr(m),_=o==="entries"||o===Symbol.iterator&&b,k=o==="keys"&&b,A=g[o](...h),y=d?gg:l?bg:ba;return!l&&jn(m,"iterate",k?Ch:tr),{next(){const{value:x,done:v}=A.next();return v?{value:x,done:v}:{value:_?[y(x[0]),y(x[1])]:y(x),done:v}},[Symbol.iterator](){return this}}}}function oi(o){return function(...l){return o==="delete"?!1:this}}function oB(){const o={get(m){return zl(this,m)},get size(){return Ol(this)},has:Ll,add:q0,set:G0,delete:K0,clear:Y0,forEach:Rl(!1,!1)},l={get(m){return zl(this,m,!1,!0)},get size(){return Ol(this)},has:Ll,add:q0,set:G0,delete:K0,clear:Y0,forEach:Rl(!1,!0)},d={get(m){return zl(this,m,!0)},get size(){return Ol(this,!0)},has(m){return Ll.call(this,m,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Rl(!0,!1)},h={get(m){return zl(this,m,!0,!0)},get size(){return Ol(this,!0)},has(m){return Ll.call(this,m,!0)},add:oi("add"),set:oi("set"),delete:oi("delete"),clear:oi("clear"),forEach:Rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(m=>{o[m]=Fl(m,!1,!1),d[m]=Fl(m,!0,!1),l[m]=Fl(m,!1,!0),h[m]=Fl(m,!0,!0)}),[o,d,l,h]}const[iB,rB,sB,aB]=oB();function yc(o,l){const d=l?o?aB:sB:o?rB:iB;return(h,g,m)=>g==="__v_isReactive"?!o:g==="__v_isReadonly"?o:g==="__v_raw"?h:Reflect.get(Ye(d,g)&&g in h?d:h,g,m)}const lB={get:yc(!1,!1)},cB={get:yc(!1,!0)},dB={get:yc(!0,!1)},uB={get:yc(!0,!0)},PC=new WeakMap,zC=new WeakMap,LC=new WeakMap,OC=new WeakMap;function hB(o){switch(o){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gB(o){return o.__v_skip||!Object.isExtensible(o)?0:hB(z4(o))}function Qt(o){return ns(o)?o:xc(o,!1,BC,lB,PC)}function fg(o){return xc(o,!1,tB,cB,zC)}function hs(o){return xc(o,!0,NC,dB,LC)}function fB(o){return xc(o,!0,nB,uB,OC)}function xc(o,l,d,h,g){if(!Pt(o)||o.__v_raw&&!(l&&o.__v_isReactive))return o;const m=g.get(o);if(m)return m;const b=gB(o);if(b===0)return o;const _=new Proxy(o,b===2?h:d);return g.set(o,_),_}function nr(o){return ns(o)?nr(o.__v_raw):!!(o&&o.__v_isReactive)}function ns(o){return!!(o&&o.__v_isReadonly)}function tc(o){return!!(o&&o.__v_isShallow)}function mg(o){return nr(o)||ns(o)}function qe(o){const l=o&&o.__v_raw;return l?qe(l):o}function pg(o){return ec(o,"__v_skip",!0),o}const ba=o=>Pt(o)?Qt(o):o,bg=o=>Pt(o)?hs(o):o;function kg(o){ui&&ro&&(o=qe(o),IC(o.dep||(o.dep=hg())))}function Ec(o,l){o=qe(o),o.dep&&Ah(o.dep)}function kt(o){return!!(o&&o.__v_isRef===!0)}function we(o){return RC(o,!1)}function wg(o){return RC(o,!0)}function RC(o,l){return kt(o)?o:new mB(o,l)}class mB{constructor(l,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?l:qe(l),this._value=d?l:ba(l)}get value(){return kg(this),this._value}set value(l){l=this.__v_isShallow?l:qe(l),ts(l,this._rawValue)&&(this._rawValue=l,this._value=this.__v_isShallow?l:ba(l),Ec(this))}}function pB(o){Ec(o)}function Zt(o){return kt(o)?o.value:o}const bB={get:(o,l,d)=>Zt(Reflect.get(o,l,d)),set:(o,l,d,h)=>{const g=o[l];return kt(g)&&!kt(d)?(g.value=d,!0):Reflect.set(o,l,d,h)}};function vg(o){return nr(o)?o:new Proxy(o,bB)}class kB{constructor(l){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:h}=l(()=>kg(this),()=>Ec(this));this._get=d,this._set=h}get value(){return this._get()}set value(l){this._set(l)}}function wB(o){return new kB(o)}function _g(o){const l=xe(o)?new Array(o.length):{};for(const d in o)l[d]=Ve(o,d);return l}class vB{constructor(l,d,h){this._object=l,this._key=d,this._defaultValue=h,this.__v_isRef=!0}get value(){const l=this._object[this._key];return l===void 0?this._defaultValue:l}set value(l){this._object[this._key]=l}}function Ve(o,l,d){const h=o[l];return kt(h)?h:new vB(o,l,d)}class _B{constructor(l,d,h,g){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ta(l,()=>{this._dirty||(this._dirty=!0,Ec(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!g,this.__v_isReadonly=h}get value(){const l=qe(this);return kg(l),(l._dirty||!l._cacheable)&&(l._dirty=!1,l._value=l.effect.run()),l._value}set value(l){this._setter(l)}}function CB(o,l,d=!1){let h,g;const m=Pe(o);return m?(h=o,g=lo):(h=o.get,g=o.set),new _B(h,g,m||!g,d)}const ra=[];function Cg(o,...l){lr();const d=ra.length?ra[ra.length-1].component:null,h=d&&d.appContext.config.warnHandler,g=AB();if(h)Do(h,d,11,[o+l.join(""),d&&d.proxy,g.map(({vnode:m})=>`at <${SA(d,m.type)}>`).join(`
`),g]);else{const m=[`[Vue warn]: ${o}`,...l];g.length&&m.push(`
`,...yB(g)),console.warn(...m)}cr()}function AB(){let o=ra[ra.length-1];if(!o)return[];const l=[];for(;o;){const d=l[0];d&&d.vnode===o?d.recurseCount++:l.push({vnode:o,recurseCount:0});const h=o.component&&o.component.parent;o=h&&h.vnode}return l}function yB(o){const l=[];return o.forEach((d,h)=>{l.push(...h===0?[]:[`
`],...xB(d))}),l}function xB({vnode:o,recurseCount:l}){const d=l>0?`... (${l} recursive calls)`:"",h=o.component?o.component.parent==null:!1,g=` at <${SA(o.component,o.type,h)}`,m=">"+d;return o.props?[g,...EB(o.props),m]:[g+m]}function EB(o){const l=[],d=Object.keys(o);return d.slice(0,3).forEach(h=>{l.push(...FC(h,o[h]))}),d.length>3&&l.push(" ..."),l}function FC(o,l,d){return Dt(l)?(l=JSON.stringify(l),d?l:[`${o}=${l}`]):typeof l=="number"||typeof l=="boolean"||l==null?d?l:[`${o}=${l}`]:kt(l)?(l=FC(o,qe(l.value),!0),d?l:[`${o}=Ref<`,l,">"]):Pe(l)?[`${o}=fn${l.name?`<${l.name}>`:""}`]:(l=qe(l),d?l:[`${o}=`,l])}function Do(o,l,d,h){let g;try{g=h?o(...h):o()}catch(m){dr(m,l,d)}return g}function Rn(o,l,d,h){if(Pe(o)){const m=Do(o,l,d,h);return m&&cg(m)&&m.catch(b=>{dr(b,l,d)}),m}const g=[];for(let m=0;m<o.length;m++)g.push(Rn(o[m],l,d,h));return g}function dr(o,l,d,h=!0){const g=l?l.vnode:null;if(l){let m=l.parent;const b=l.proxy,_=d;for(;m;){const A=m.ec;if(A){for(let y=0;y<A.length;y++)if(A[y](o,b,_)===!1)return}m=m.parent}const k=l.appContext.config.errorHandler;if(k){Do(k,null,10,[o,b,_]);return}}SB(o,d,g,h)}function SB(o,l,d,h=!0){console.error(o)}let nc=!1,yh=!1;const Ln=[];let Vo=0;const sa=[];let ta=null,Wr=0;const aa=[];let ai=null,qr=0;const jC=Promise.resolve();let Ag=null,xh=null;function An(o){const l=Ag||jC;return o?l.then(this?o.bind(this):o):l}function DB(o){let l=Vo+1,d=Ln.length;for(;l<d;){const h=l+d>>>1;ka(Ln[h])<o?l=h+1:d=h}return l}function yg(o){(!Ln.length||!Ln.includes(o,nc&&o.allowRecurse?Vo+1:Vo))&&o!==xh&&(o.id==null?Ln.push(o):Ln.splice(DB(o.id),0,o),VC())}function VC(){!nc&&!yh&&(yh=!0,Ag=jC.then(UC))}function IB(o){const l=Ln.indexOf(o);l>Vo&&Ln.splice(l,1)}function HC(o,l,d,h){xe(o)?d.push(...o):(!l||!l.includes(o,o.allowRecurse?h+1:h))&&d.push(o),VC()}function TB(o){HC(o,ta,sa,Wr)}function xg(o){HC(o,ai,aa,qr)}function Sc(o,l=null){if(sa.length){for(xh=l,ta=[...new Set(sa)],sa.length=0,Wr=0;Wr<ta.length;Wr++)ta[Wr]();ta=null,Wr=0,xh=null,Sc(o,l)}}function oc(o){if(Sc(),aa.length){const l=[...new Set(aa)];if(aa.length=0,ai){ai.push(...l);return}for(ai=l,ai.sort((d,h)=>ka(d)-ka(h)),qr=0;qr<ai.length;qr++)ai[qr]();ai=null,qr=0}}const ka=o=>o.id==null?1/0:o.id;function UC(o){yh=!1,nc=!0,Sc(o),Ln.sort((d,h)=>ka(d)-ka(h));const l=lo;try{for(Vo=0;Vo<Ln.length;Vo++){const d=Ln[Vo];d&&d.active!==!1&&Do(d,null,14)}}finally{Vo=0,Ln.length=0,oc(),nc=!1,Ag=null,(Ln.length||sa.length||aa.length)&&UC(o)}}let Gr,jl=[];function $C(o,l){var d,h;Gr=o,Gr?(Gr.enabled=!0,jl.forEach(({event:g,args:m})=>Gr.emit(g,...m)),jl=[]):typeof window<"u"&&window.HTMLElement&&!(!((h=(d=window.navigator)===null||d===void 0?void 0:d.userAgent)===null||h===void 0)&&h.includes("jsdom"))?((l.__VUE_DEVTOOLS_HOOK_REPLAY__=l.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(m=>{$C(m,l)}),setTimeout(()=>{Gr||(l.__VUE_DEVTOOLS_HOOK_REPLAY__=null,jl=[])},3e3)):jl=[]}function MB(o,l,...d){if(o.isUnmounted)return;const h=o.vnode.props||st;let g=d;const m=l.startsWith("update:"),b=m&&l.slice(7);if(b&&b in h){const y=`${b==="modelValue"?"model":b}Modifiers`,{number:x,trim:v}=h[y]||st;v&&(g=d.map(E=>E.trim())),x&&(g=d.map(pi))}let _,k=h[_=ia(l)]||h[_=ia(gn(l))];!k&&m&&(k=h[_=ia(So(l))]),k&&Rn(k,o,6,g);const A=h[_+"Once"];if(A){if(!o.emitted)o.emitted={};else if(o.emitted[_])return;o.emitted[_]=!0,Rn(A,o,6,g)}}function WC(o,l,d=!1){const h=l.emitsCache,g=h.get(o);if(g!==void 0)return g;const m=o.emits;let b={},_=!1;if(!Pe(o)){const k=A=>{const y=WC(A,l,!0);y&&(_=!0,Nt(b,y))};!d&&l.mixins.length&&l.mixins.forEach(k),o.extends&&k(o.extends),o.mixins&&o.mixins.forEach(k)}return!m&&!_?(h.set(o,null),null):(xe(m)?m.forEach(k=>b[k]=null):Nt(b,m),h.set(o,b),b)}function Dc(o,l){return!o||!Da(l)?!1:(l=l.slice(2).replace(/Once$/,""),Ye(o,l[0].toLowerCase()+l.slice(1))||Ye(o,So(l))||Ye(o,l))}let nn=null,Ic=null;function wa(o){const l=nn;return nn=o,Ic=o&&o.type.__scopeId||null,l}function BB(o){Ic=o}function NB(){Ic=null}const PB=o=>Qe;function Qe(o,l=nn,d){if(!l||o._n)return o;const h=(...g)=>{h._d&&Nh(-1);const m=wa(l),b=o(...g);return wa(m),h._d&&Nh(1),b};return h._n=!0,h._c=!0,h._d=!0,h}function Zl(o){const{type:l,vnode:d,proxy:h,withProxy:g,props:m,propsOptions:[b],slots:_,attrs:k,emit:A,render:y,renderCache:x,data:v,setupState:E,ctx:N,inheritAttrs:P}=o;let j,M;const T=wa(o);try{if(d.shapeFlag&4){const G=g||h;j=zn(y.call(G,G,x,m,E,v,N)),M=k}else{const G=l;j=zn(G.length>1?G(m,{attrs:k,slots:_,emit:A}):G(m,null)),M=l.props?k:LB(k)}}catch(G){ca.length=0,dr(G,o,1),j=L(on)}let O=j;if(M&&P!==!1){const G=Object.keys(M),{shapeFlag:H}=O;G.length&&H&7&&(b&&G.some(ag)&&(M=OB(M,b)),O=co(O,M))}return d.dirs&&(O=co(O),O.dirs=O.dirs?O.dirs.concat(d.dirs):d.dirs),d.transition&&(O.transition=d.transition),j=O,wa(T),j}function zB(o){let l;for(let d=0;d<o.length;d++){const h=o[d];if(ki(h)){if(h.type!==on||h.children==="v-if"){if(l)return;l=h}}else return}return l}const LB=o=>{let l;for(const d in o)(d==="class"||d==="style"||Da(d))&&((l||(l={}))[d]=o[d]);return l},OB=(o,l)=>{const d={};for(const h in o)(!ag(h)||!(h.slice(9)in l))&&(d[h]=o[h]);return d};function RB(o,l,d){const{props:h,children:g,component:m}=o,{props:b,children:_,patchFlag:k}=l,A=m.emitsOptions;if(l.dirs||l.transition)return!0;if(d&&k>=0){if(k&1024)return!0;if(k&16)return h?Q0(h,b,A):!!b;if(k&8){const y=l.dynamicProps;for(let x=0;x<y.length;x++){const v=y[x];if(b[v]!==h[v]&&!Dc(A,v))return!0}}}else return(g||_)&&(!_||!_.$stable)?!0:h===b?!1:h?b?Q0(h,b,A):!0:!!b;return!1}function Q0(o,l,d){const h=Object.keys(l);if(h.length!==Object.keys(o).length)return!0;for(let g=0;g<h.length;g++){const m=h[g];if(l[m]!==o[m]&&!Dc(d,m))return!0}return!1}function Eg({vnode:o,parent:l},d){for(;l&&l.subTree===o;)(o=l.vnode).el=d,l=l.parent}const qC=o=>o.__isSuspense,FB={name:"Suspense",__isSuspense:!0,process(o,l,d,h,g,m,b,_,k,A){o==null?VB(l,d,h,g,m,b,_,k,A):HB(o,l,d,h,g,b,_,k,A)},hydrate:UB,create:Sg,normalize:$B},jB=FB;function va(o,l){const d=o.props&&o.props[l];Pe(d)&&d()}function VB(o,l,d,h,g,m,b,_,k){const{p:A,o:{createElement:y}}=k,x=y("div"),v=o.suspense=Sg(o,g,h,l,x,d,m,b,_,k);A(null,v.pendingBranch=o.ssContent,x,null,h,v,m,b),v.deps>0?(va(o,"onPending"),va(o,"onFallback"),A(null,o.ssFallback,l,d,h,null,m,b),Jr(v,o.ssFallback)):v.resolve()}function HB(o,l,d,h,g,m,b,_,{p:k,um:A,o:{createElement:y}}){const x=l.suspense=o.suspense;x.vnode=l,l.el=o.el;const v=l.ssContent,E=l.ssFallback,{activeBranch:N,pendingBranch:P,isInFallback:j,isHydrating:M}=x;if(P)x.pendingBranch=v,xo(v,P)?(k(P,v,x.hiddenContainer,null,g,x,m,b,_),x.deps<=0?x.resolve():j&&(k(N,E,d,h,g,null,m,b,_),Jr(x,E))):(x.pendingId++,M?(x.isHydrating=!1,x.activeBranch=P):A(P,g,x),x.deps=0,x.effects.length=0,x.hiddenContainer=y("div"),j?(k(null,v,x.hiddenContainer,null,g,x,m,b,_),x.deps<=0?x.resolve():(k(N,E,d,h,g,null,m,b,_),Jr(x,E))):N&&xo(v,N)?(k(N,v,d,h,g,x,m,b,_),x.resolve(!0)):(k(null,v,x.hiddenContainer,null,g,x,m,b,_),x.deps<=0&&x.resolve()));else if(N&&xo(v,N))k(N,v,d,h,g,x,m,b,_),Jr(x,v);else if(va(l,"onPending"),x.pendingBranch=v,x.pendingId++,k(null,v,x.hiddenContainer,null,g,x,m,b,_),x.deps<=0)x.resolve();else{const{timeout:T,pendingId:O}=x;T>0?setTimeout(()=>{x.pendingId===O&&x.fallback(E)},T):T===0&&x.fallback(E)}}function Sg(o,l,d,h,g,m,b,_,k,A,y=!1){const{p:x,m:v,um:E,n:N,o:{parentNode:P,remove:j}}=A,M=pi(o.props&&o.props.timeout),T={vnode:o,parent:l,parentComponent:d,isSVG:b,container:h,hiddenContainer:g,anchor:m,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:y,isUnmounted:!1,effects:[],resolve(O=!1){const{vnode:G,activeBranch:H,pendingBranch:Q,pendingId:R,effects:V,parentComponent:W,container:K}=T;if(T.isHydrating)T.isHydrating=!1;else if(!O){const ne=H&&Q.transition&&Q.transition.mode==="out-in";ne&&(H.transition.afterLeave=()=>{R===T.pendingId&&v(Q,K,ae,0)});let{anchor:ae}=T;H&&(ae=N(H),E(H,W,T,!0)),ne||v(Q,K,ae,0)}Jr(T,Q),T.pendingBranch=null,T.isInFallback=!1;let ee=T.parent,J=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...V),J=!0;break}ee=ee.parent}J||xg(V),T.effects=[],va(G,"onResolve")},fallback(O){if(!T.pendingBranch)return;const{vnode:G,activeBranch:H,parentComponent:Q,container:R,isSVG:V}=T;va(G,"onFallback");const W=N(H),K=()=>{!T.isInFallback||(x(null,O,R,W,Q,null,V,_,k),Jr(T,O))},ee=O.transition&&O.transition.mode==="out-in";ee&&(H.transition.afterLeave=K),T.isInFallback=!0,E(H,Q,null,!0),ee||K()},move(O,G,H){T.activeBranch&&v(T.activeBranch,O,G,H),T.container=O},next(){return T.activeBranch&&N(T.activeBranch)},registerDep(O,G){const H=!!T.pendingBranch;H&&T.deps++;const Q=O.vnode.el;O.asyncDep.catch(R=>{dr(R,O,0)}).then(R=>{if(O.isUnmounted||T.isUnmounted||T.pendingId!==O.suspenseId)return;O.asyncResolved=!0;const{vnode:V}=O;Ph(O,R,!1),Q&&(V.el=Q);const W=!Q&&O.subTree.el;G(O,V,P(Q||O.subTree.el),Q?null:N(O.subTree),T,b,k),W&&j(W),Eg(O,V.el),H&&--T.deps===0&&T.resolve()})},unmount(O,G){T.isUnmounted=!0,T.activeBranch&&E(T.activeBranch,d,O,G),T.pendingBranch&&E(T.pendingBranch,d,O,G)}};return T}function UB(o,l,d,h,g,m,b,_,k){const A=l.suspense=Sg(l,h,d,o.parentNode,document.createElement("div"),null,g,m,b,_,!0),y=k(o,A.pendingBranch=l.ssContent,d,A,m,b);return A.deps===0&&A.resolve(),y}function $B(o){const{shapeFlag:l,children:d}=o,h=l&32;o.ssContent=Z0(h?d.default:d),o.ssFallback=h?Z0(d.fallback):L(on)}function Z0(o){let l;if(Pe(o)){const d=sr&&o._c;d&&(o._d=!1,$e()),o=o(),d&&(o._d=!0,l=Cn,wA())}return xe(o)&&(o=zB(o)),o=zn(o),l&&!o.dynamicChildren&&(o.dynamicChildren=l.filter(d=>d!==o)),o}function GC(o,l){l&&l.pendingBranch?xe(o)?l.effects.push(...o):l.effects.push(o):xg(o)}function Jr(o,l){o.activeBranch=l;const{vnode:d,parentComponent:h}=o,g=d.el=l.el;h&&h.subTree===d&&(h.vnode.el=g,Eg(h,g))}function Ht(o,l){if(Vt){let d=Vt.provides;const h=Vt.parent&&Vt.parent.provides;h===d&&(d=Vt.provides=Object.create(h)),d[o]=l}}function et(o,l,d=!1){const h=Vt||nn;if(h){const g=h.parent==null?h.vnode.appContext&&h.vnode.appContext.provides:h.parent.provides;if(g&&o in g)return g[o];if(arguments.length>1)return d&&Pe(l)?l.call(h.proxy):l}}function Go(o,l){return Ma(o,null,l)}function KC(o,l){return Ma(o,null,{flush:"post"})}function WB(o,l){return Ma(o,null,{flush:"sync"})}const J0={};function Ze(o,l,d){return Ma(o,l,d)}function Ma(o,l,{immediate:d,deep:h,flush:g,onTrack:m,onTrigger:b}=st){const _=Vt;let k,A=!1,y=!1;if(kt(o)?(k=()=>o.value,A=tc(o)):nr(o)?(k=()=>o,h=!0):xe(o)?(y=!0,A=o.some(M=>nr(M)||tc(M)),k=()=>o.map(M=>{if(kt(M))return M.value;if(nr(M))return Xi(M);if(Pe(M))return Do(M,_,2)})):Pe(o)?l?k=()=>Do(o,_,2):k=()=>{if(!(_&&_.isUnmounted))return x&&x(),Rn(o,_,3,[v])}:k=lo,l&&h){const M=k;k=()=>Xi(M())}let x,v=M=>{x=j.onStop=()=>{Do(M,_,4)}};if(rs)return v=lo,l?d&&Rn(l,_,3,[k(),y?[]:void 0,v]):k(),lo;let E=y?[]:J0;const N=()=>{if(!!j.active)if(l){const M=j.run();(h||A||(y?M.some((T,O)=>ts(T,E[O])):ts(M,E)))&&(x&&x(),Rn(l,_,3,[M,E===J0?void 0:E,v]),E=M)}else j.run()};N.allowRecurse=!!l;let P;g==="sync"?P=N:g==="post"?P=()=>Yt(N,_&&_.suspense):P=()=>TB(N);const j=new Ta(k,P);return l?d?N():E=j.run():g==="post"?Yt(j.run.bind(j),_&&_.suspense):j.run(),()=>{j.stop(),_&&_.scope&&lg(_.scope.effects,j)}}function qB(o,l,d){const h=this.proxy,g=Dt(o)?o.includes(".")?YC(h,o):()=>h[o]:o.bind(h,h);let m;Pe(l)?m=l:(m=l.handler,d=l);const b=Vt;wi(this);const _=Ma(g,m.bind(h),d);return b?wi(b):gi(),_}function YC(o,l){const d=l.split(".");return()=>{let h=o;for(let g=0;g<d.length&&h;g++)h=h[d[g]];return h}}function Xi(o,l){if(!Pt(o)||o.__v_skip||(l=l||new Set,l.has(o)))return o;if(l.add(o),kt(o))Xi(o.value,l);else if(xe(o))for(let d=0;d<o.length;d++)Xi(o[d],l);else if(ar(o)||Qr(o))o.forEach(d=>{Xi(d,l)});else if(yC(o))for(const d in o)Xi(o[d],l);return o}function Dg(){const o={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Hn(()=>{o.isMounted=!0}),yn(()=>{o.isUnmounting=!0}),o}const Zn=[Function,Array],GB={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},setup(o,{slots:l}){const d=Io(),h=Dg();let g;return()=>{const m=l.default&&Tc(l.default(),!0);if(!m||!m.length)return;let b=m[0];if(m.length>1){for(const P of m)if(P.type!==on){b=P;break}}const _=qe(o),{mode:k}=_;if(h.isLeaving)return oh(b);const A=X0(b);if(!A)return oh(b);const y=os(A,_,h,d);rr(A,y);const x=d.subTree,v=x&&X0(x);let E=!1;const{getTransitionKey:N}=A.type;if(N){const P=N();g===void 0?g=P:P!==g&&(g=P,E=!0)}if(v&&v.type!==on&&(!xo(A,v)||E)){const P=os(v,_,h,d);if(rr(v,P),k==="out-in")return h.isLeaving=!0,P.afterLeave=()=>{h.isLeaving=!1,d.update()},oh(b);k==="in-out"&&A.type!==on&&(P.delayLeave=(j,M,T)=>{const O=QC(h,v);O[String(v.key)]=v,j._leaveCb=()=>{M(),j._leaveCb=void 0,delete y.delayedLeave},y.delayedLeave=T})}return b}}},Ig=GB;function QC(o,l){const{leavingVNodes:d}=o;let h=d.get(l.type);return h||(h=Object.create(null),d.set(l.type,h)),h}function os(o,l,d,h){const{appear:g,mode:m,persisted:b=!1,onBeforeEnter:_,onEnter:k,onAfterEnter:A,onEnterCancelled:y,onBeforeLeave:x,onLeave:v,onAfterLeave:E,onLeaveCancelled:N,onBeforeAppear:P,onAppear:j,onAfterAppear:M,onAppearCancelled:T}=l,O=String(o.key),G=QC(d,o),H=(V,W)=>{V&&Rn(V,h,9,W)},Q=(V,W)=>{const K=W[1];H(V,W),xe(V)?V.every(ee=>ee.length<=1)&&K():V.length<=1&&K()},R={mode:m,persisted:b,beforeEnter(V){let W=_;if(!d.isMounted)if(g)W=P||_;else return;V._leaveCb&&V._leaveCb(!0);const K=G[O];K&&xo(o,K)&&K.el._leaveCb&&K.el._leaveCb(),H(W,[V])},enter(V){let W=k,K=A,ee=y;if(!d.isMounted)if(g)W=j||k,K=M||A,ee=T||y;else return;let J=!1;const ne=V._enterCb=ae=>{J||(J=!0,ae?H(ee,[V]):H(K,[V]),R.delayedLeave&&R.delayedLeave(),V._enterCb=void 0)};W?Q(W,[V,ne]):ne()},leave(V,W){const K=String(o.key);if(V._enterCb&&V._enterCb(!0),d.isUnmounting)return W();H(x,[V]);let ee=!1;const J=V._leaveCb=ne=>{ee||(ee=!0,W(),ne?H(N,[V]):H(E,[V]),V._leaveCb=void 0,G[K]===o&&delete G[K])};G[K]=o,v?Q(v,[V,J]):J()},clone(V){return os(V,l,d,h)}};return R}function oh(o){if(Ba(o))return o=co(o),o.children=null,o}function X0(o){return Ba(o)?o.children?o.children[0]:void 0:o}function rr(o,l){o.shapeFlag&6&&o.component?rr(o.component.subTree,l):o.shapeFlag&128?(o.ssContent.transition=l.clone(o.ssContent),o.ssFallback.transition=l.clone(o.ssFallback)):o.transition=l}function Tc(o,l=!1,d){let h=[],g=0;for(let m=0;m<o.length;m++){let b=o[m];const _=d==null?b.key:String(d)+String(b.key!=null?b.key:m);b.type===We?(b.patchFlag&128&&g++,h=h.concat(Tc(b.children,l,_))):(l||b.type!==on)&&h.push(_!=null?co(b,{key:_}):b)}if(g>1)for(let m=0;m<h.length;m++)h[m].patchFlag=-2;return h}function ur(o){return Pe(o)?{setup:o,name:o.name}:o}const or=o=>!!o.type.__asyncLoader;function KB(o){Pe(o)&&(o={loader:o});const{loader:l,loadingComponent:d,errorComponent:h,delay:g=200,timeout:m,suspensible:b=!0,onError:_}=o;let k=null,A,y=0;const x=()=>(y++,k=null,v()),v=()=>{let E;return k||(E=k=l().catch(N=>{if(N=N instanceof Error?N:new Error(String(N)),_)return new Promise((P,j)=>{_(N,()=>P(x()),()=>j(N),y+1)});throw N}).then(N=>E!==k&&k?k:(N&&(N.__esModule||N[Symbol.toStringTag]==="Module")&&(N=N.default),A=N,N)))};return ur({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return A},setup(){const E=Vt;if(A)return()=>ih(A,E);const N=T=>{k=null,dr(T,E,13,!h)};if(b&&E.suspense||rs)return v().then(T=>()=>ih(T,E)).catch(T=>(N(T),()=>h?L(h,{error:T}):null));const P=we(!1),j=we(),M=we(!!g);return g&&setTimeout(()=>{M.value=!1},g),m!=null&&setTimeout(()=>{if(!P.value&&!j.value){const T=new Error(`Async component timed out after ${m}ms.`);N(T),j.value=T}},m),v().then(()=>{P.value=!0,E.parent&&Ba(E.parent.vnode)&&yg(E.parent.update)}).catch(T=>{N(T),j.value=T}),()=>{if(P.value&&A)return ih(A,E);if(j.value&&h)return L(h,{error:j.value});if(d&&!M.value)return L(d)}}})}function ih(o,{vnode:{ref:l,props:d,children:h,shapeFlag:g},parent:m}){const b=L(o,d,h);return b.ref=l,b}const Ba=o=>o.type.__isKeepAlive,YB={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(o,{slots:l}){const d=Io(),h=d.ctx;if(!h.renderer)return()=>{const T=l.default&&l.default();return T&&T.length===1?T[0]:T};const g=new Map,m=new Set;let b=null;const _=d.suspense,{renderer:{p:k,m:A,um:y,o:{createElement:x}}}=h,v=x("div");h.activate=(T,O,G,H,Q)=>{const R=T.component;A(T,O,G,0,_),k(R.vnode,T,O,G,R,_,H,T.slotScopeIds,Q),Yt(()=>{R.isDeactivated=!1,R.a&&Zr(R.a);const V=T.props&&T.props.onVnodeMounted;V&&_n(V,R.parent,T)},_)},h.deactivate=T=>{const O=T.component;A(T,v,null,1,_),Yt(()=>{O.da&&Zr(O.da);const G=T.props&&T.props.onVnodeUnmounted;G&&_n(G,O.parent,T),O.isDeactivated=!0},_)};function E(T){rh(T),y(T,d,_,!0)}function N(T){g.forEach((O,G)=>{const H=lc(O.type);H&&(!T||!T(H))&&P(G)})}function P(T){const O=g.get(T);!b||O.type!==b.type?E(O):b&&rh(b),g.delete(T),m.delete(T)}Ze(()=>[o.include,o.exclude],([T,O])=>{T&&N(G=>na(T,G)),O&&N(G=>!na(O,G))},{flush:"post",deep:!0});let j=null;const M=()=>{j!=null&&g.set(j,sh(d.subTree))};return Hn(M),Bc(M),yn(()=>{g.forEach(T=>{const{subTree:O,suspense:G}=d,H=sh(O);if(T.type===H.type){rh(H);const Q=H.component.da;Q&&Yt(Q,G);return}E(T)})}),()=>{if(j=null,!l.default)return null;const T=l.default(),O=T[0];if(T.length>1)return b=null,T;if(!ki(O)||!(O.shapeFlag&4)&&!(O.shapeFlag&128))return b=null,O;let G=sh(O);const H=G.type,Q=lc(or(G)?G.type.__asyncResolved||{}:H),{include:R,exclude:V,max:W}=o;if(R&&(!Q||!na(R,Q))||V&&Q&&na(V,Q))return b=G,O;const K=G.key==null?H:G.key,ee=g.get(K);return G.el&&(G=co(G),O.shapeFlag&128&&(O.ssContent=G)),j=K,ee?(G.el=ee.el,G.component=ee.component,G.transition&&rr(G,G.transition),G.shapeFlag|=512,m.delete(K),m.add(K)):(m.add(K),W&&m.size>parseInt(W,10)&&P(m.values().next().value)),G.shapeFlag|=256,b=G,qC(O.type)?O:G}}},QB=YB;function na(o,l){return xe(o)?o.some(d=>na(d,l)):Dt(o)?o.split(",").includes(l):o.test?o.test(l):!1}function Tg(o,l){ZC(o,"a",l)}function Mg(o,l){ZC(o,"da",l)}function ZC(o,l,d=Vt){const h=o.__wdc||(o.__wdc=()=>{let g=d;for(;g;){if(g.isDeactivated)return;g=g.parent}return o()});if(Mc(l,h,d),d){let g=d.parent;for(;g&&g.parent;)Ba(g.parent.vnode)&&ZB(h,l,d,g),g=g.parent}}function ZB(o,l,d,h){const g=Mc(l,o,h,!0);Nc(()=>{lg(h[l],g)},d)}function rh(o){let l=o.shapeFlag;l&256&&(l-=256),l&512&&(l-=512),o.shapeFlag=l}function sh(o){return o.shapeFlag&128?o.ssContent:o}function Mc(o,l,d=Vt,h=!1){if(d){const g=d[o]||(d[o]=[]),m=l.__weh||(l.__weh=(...b)=>{if(d.isUnmounted)return;lr(),wi(d);const _=Rn(l,d,o,b);return gi(),cr(),_});return h?g.unshift(m):g.push(m),m}}const Ko=o=>(l,d=Vt)=>(!rs||o==="sp")&&Mc(o,l,d),Na=Ko("bm"),Hn=Ko("m"),JC=Ko("bu"),Bc=Ko("u"),yn=Ko("bum"),Nc=Ko("um"),XC=Ko("sp"),eA=Ko("rtg"),tA=Ko("rtc");function nA(o,l=Vt){Mc("ec",o,l)}function Vn(o,l){const d=nn;if(d===null)return o;const h=zc(d)||d.proxy,g=o.dirs||(o.dirs=[]);for(let m=0;m<l.length;m++){let[b,_,k,A=st]=l[m];Pe(b)&&(b={mounted:b,updated:b}),b.deep&&Xi(_),g.push({dir:b,instance:h,value:_,oldValue:void 0,arg:k,modifiers:A})}return o}function yo(o,l,d,h){const g=o.dirs,m=l&&l.dirs;for(let b=0;b<g.length;b++){const _=g[b];m&&(_.oldValue=m[b].value);let k=_.dir[h];k&&(lr(),Rn(k,d,8,[o.el,_,o,l]),cr())}}const Bg="components",JB="directives";function Ng(o,l){return Pg(Bg,o,!0,l)||o}const oA=Symbol();function iA(o){return Dt(o)?Pg(Bg,o,!1)||o:o||oA}function Ai(o){return Pg(JB,o)}function Pg(o,l,d=!0,h=!1){const g=nn||Vt;if(g){const m=g.type;if(o===Bg){const _=lc(m,!1);if(_&&(_===l||_===gn(l)||_===ds(gn(l))))return m}const b=e_(g[o]||m[o],l)||e_(g.appContext[o],l);return!b&&h?m:b}}function e_(o,l){return o&&(o[l]||o[gn(l)]||o[ds(gn(l))])}function hi(o,l,d,h){let g;const m=d&&d[h];if(xe(o)||Dt(o)){g=new Array(o.length);for(let b=0,_=o.length;b<_;b++)g[b]=l(o[b],b,void 0,m&&m[b])}else if(typeof o=="number"){g=new Array(o);for(let b=0;b<o;b++)g[b]=l(b+1,b,void 0,m&&m[b])}else if(Pt(o))if(o[Symbol.iterator])g=Array.from(o,(b,_)=>l(b,_,void 0,m&&m[_]));else{const b=Object.keys(o);g=new Array(b.length);for(let _=0,k=b.length;_<k;_++){const A=b[_];g[_]=l(o[A],A,_,m&&m[_])}}else g=[];return d&&(d[h]=g),g}function rA(o,l){for(let d=0;d<l.length;d++){const h=l[d];if(xe(h))for(let g=0;g<h.length;g++)o[h[g].name]=h[g].fn;else h&&(o[h.name]=h.fn)}return o}function XB(o,l,d={},h,g){if(nn.isCE||nn.parent&&or(nn.parent)&&nn.parent.isCE)return L("slot",l==="default"?null:{name:l},h&&h());let m=o[l];m&&m._c&&(m._d=!1),$e();const b=m&&sA(m(d)),_=Jn(We,{key:d.key||`_${l}`},b||(h?h():[]),b&&o._===1?64:-2);return!g&&_.scopeId&&(_.slotScopeIds=[_.scopeId+"-s"]),m&&m._c&&(m._d=!0),_}function sA(o){return o.some(l=>ki(l)?!(l.type===on||l.type===We&&!sA(l.children)):!0)?o:null}function Eh(o){const l={};for(const d in o)l[ia(d)]=o[d];return l}const Sh=o=>o?AA(o)?zc(o)||o.proxy:Sh(o.parent):null,ic=Nt(Object.create(null),{$:o=>o,$el:o=>o.vnode.el,$data:o=>o.data,$props:o=>o.props,$attrs:o=>o.attrs,$slots:o=>o.slots,$refs:o=>o.refs,$parent:o=>Sh(o.parent),$root:o=>Sh(o.root),$emit:o=>o.emit,$options:o=>lA(o),$forceUpdate:o=>o.f||(o.f=()=>yg(o.update)),$nextTick:o=>o.n||(o.n=An.bind(o.proxy)),$watch:o=>qB.bind(o)}),Dh={get({_:o},l){const{ctx:d,setupState:h,data:g,props:m,accessCache:b,type:_,appContext:k}=o;let A;if(l[0]!=="$"){const E=b[l];if(E!==void 0)switch(E){case 1:return h[l];case 2:return g[l];case 4:return d[l];case 3:return m[l]}else{if(h!==st&&Ye(h,l))return b[l]=1,h[l];if(g!==st&&Ye(g,l))return b[l]=2,g[l];if((A=o.propsOptions[0])&&Ye(A,l))return b[l]=3,m[l];if(d!==st&&Ye(d,l))return b[l]=4,d[l];Ih&&(b[l]=0)}}const y=ic[l];let x,v;if(y)return l==="$attrs"&&jn(o,"get",l),y(o);if((x=_.__cssModules)&&(x=x[l]))return x;if(d!==st&&Ye(d,l))return b[l]=4,d[l];if(v=k.config.globalProperties,Ye(v,l))return v[l]},set({_:o},l,d){const{data:h,setupState:g,ctx:m}=o;return g!==st&&Ye(g,l)?(g[l]=d,!0):h!==st&&Ye(h,l)?(h[l]=d,!0):Ye(o.props,l)||l[0]==="$"&&l.slice(1)in o?!1:(m[l]=d,!0)},has({_:{data:o,setupState:l,accessCache:d,ctx:h,appContext:g,propsOptions:m}},b){let _;return!!d[b]||o!==st&&Ye(o,b)||l!==st&&Ye(l,b)||(_=m[0])&&Ye(_,b)||Ye(h,b)||Ye(ic,b)||Ye(g.config.globalProperties,b)},defineProperty(o,l,d){return d.get!=null?o._.accessCache[l]=0:Ye(d,"value")&&this.set(o,l,d.value,null),Reflect.defineProperty(o,l,d)}},eN=Nt({},Dh,{get(o,l){if(l!==Symbol.unscopables)return Dh.get(o,l,o)},has(o,l){return l[0]!=="_"&&!x4(l)}});let Ih=!0;function tN(o){const l=lA(o),d=o.proxy,h=o.ctx;Ih=!1,l.beforeCreate&&t_(l.beforeCreate,o,"bc");const{data:g,computed:m,methods:b,watch:_,provide:k,inject:A,created:y,beforeMount:x,mounted:v,beforeUpdate:E,updated:N,activated:P,deactivated:j,beforeDestroy:M,beforeUnmount:T,destroyed:O,unmounted:G,render:H,renderTracked:Q,renderTriggered:R,errorCaptured:V,serverPrefetch:W,expose:K,inheritAttrs:ee,components:J,directives:ne,filters:ae}=l;if(A&&nN(A,h,null,o.appContext.config.unwrapInjectedRef),b)for(const Ae in b){const Ee=b[Ae];Pe(Ee)&&(h[Ae]=Ee.bind(d))}if(g){const Ae=g.call(d,d);Pt(Ae)&&(o.data=Qt(Ae))}if(Ih=!0,m)for(const Ae in m){const Ee=m[Ae],He=Pe(Ee)?Ee.bind(d,d):Pe(Ee.get)?Ee.get.bind(d,d):lo,It=!Pe(Ee)&&Pe(Ee.set)?Ee.set.bind(d):lo,_t=q({get:He,set:It});Object.defineProperty(h,Ae,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Ne=>_t.value=Ne})}if(_)for(const Ae in _)aA(_[Ae],h,d,Ae);if(k){const Ae=Pe(k)?k.call(d):k;Reflect.ownKeys(Ae).forEach(Ee=>{Ht(Ee,Ae[Ee])})}y&&t_(y,o,"c");function he(Ae,Ee){xe(Ee)?Ee.forEach(He=>Ae(He.bind(d))):Ee&&Ae(Ee.bind(d))}if(he(Na,x),he(Hn,v),he(JC,E),he(Bc,N),he(Tg,P),he(Mg,j),he(nA,V),he(tA,Q),he(eA,R),he(yn,T),he(Nc,G),he(XC,W),xe(K))if(K.length){const Ae=o.exposed||(o.exposed={});K.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>d[Ee],set:He=>d[Ee]=He})})}else o.exposed||(o.exposed={});H&&o.render===lo&&(o.render=H),ee!=null&&(o.inheritAttrs=ee),J&&(o.components=J),ne&&(o.directives=ne)}function nN(o,l,d=lo,h=!1){xe(o)&&(o=Th(o));for(const g in o){const m=o[g];let b;Pt(m)?"default"in m?b=et(m.from||g,m.default,!0):b=et(m.from||g):b=et(m),kt(b)&&h?Object.defineProperty(l,g,{enumerable:!0,configurable:!0,get:()=>b.value,set:_=>b.value=_}):l[g]=b}}function t_(o,l,d){Rn(xe(o)?o.map(h=>h.bind(l.proxy)):o.bind(l.proxy),l,d)}function aA(o,l,d,h){const g=h.includes(".")?YC(d,h):()=>d[h];if(Dt(o)){const m=l[o];Pe(m)&&Ze(g,m)}else if(Pe(o))Ze(g,o.bind(d));else if(Pt(o))if(xe(o))o.forEach(m=>aA(m,l,d,h));else{const m=Pe(o.handler)?o.handler.bind(d):l[o.handler];Pe(m)&&Ze(g,m,o)}}function lA(o){const l=o.type,{mixins:d,extends:h}=l,{mixins:g,optionsCache:m,config:{optionMergeStrategies:b}}=o.appContext,_=m.get(l);let k;return _?k=_:!g.length&&!d&&!h?k=l:(k={},g.length&&g.forEach(A=>rc(k,A,b,!0)),rc(k,l,b)),m.set(l,k),k}function rc(o,l,d,h=!1){const{mixins:g,extends:m}=l;m&&rc(o,m,d,!0),g&&g.forEach(b=>rc(o,b,d,!0));for(const b in l)if(!(h&&b==="expose")){const _=oN[b]||d&&d[b];o[b]=_?_(o[b],l[b]):l[b]}return o}const oN={data:n_,props:Zi,emits:Zi,methods:Zi,computed:Zi,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Zi,directives:Zi,watch:rN,provide:n_,inject:iN};function n_(o,l){return l?o?function(){return Nt(Pe(o)?o.call(this,this):o,Pe(l)?l.call(this,this):l)}:l:o}function iN(o,l){return Zi(Th(o),Th(l))}function Th(o){if(xe(o)){const l={};for(let d=0;d<o.length;d++)l[o[d]]=o[d];return l}return o}function hn(o,l){return o?[...new Set([].concat(o,l))]:l}function Zi(o,l){return o?Nt(Nt(Object.create(null),o),l):l}function rN(o,l){if(!o)return l;if(!l)return o;const d=Nt(Object.create(null),o);for(const h in l)d[h]=hn(o[h],l[h]);return d}function sN(o,l,d,h=!1){const g={},m={};ec(m,Pc,1),o.propsDefaults=Object.create(null),cA(o,l,g,m);for(const b in o.propsOptions[0])b in g||(g[b]=void 0);d?o.props=h?g:fg(g):o.type.props?o.props=g:o.props=m,o.attrs=m}function aN(o,l,d,h){const{props:g,attrs:m,vnode:{patchFlag:b}}=o,_=qe(g),[k]=o.propsOptions;let A=!1;if((h||b>0)&&!(b&16)){if(b&8){const y=o.vnode.dynamicProps;for(let x=0;x<y.length;x++){let v=y[x];if(Dc(o.emitsOptions,v))continue;const E=l[v];if(k)if(Ye(m,v))E!==m[v]&&(m[v]=E,A=!0);else{const N=gn(v);g[N]=Mh(k,_,N,E,o,!1)}else E!==m[v]&&(m[v]=E,A=!0)}}}else{cA(o,l,g,m)&&(A=!0);let y;for(const x in _)(!l||!Ye(l,x)&&((y=So(x))===x||!Ye(l,y)))&&(k?d&&(d[x]!==void 0||d[y]!==void 0)&&(g[x]=Mh(k,_,x,void 0,o,!0)):delete g[x]);if(m!==_)for(const x in m)(!l||!Ye(l,x)&&!0)&&(delete m[x],A=!0)}A&&$o(o,"set","$attrs")}function cA(o,l,d,h){const[g,m]=o.propsOptions;let b=!1,_;if(l)for(let k in l){if(oa(k))continue;const A=l[k];let y;g&&Ye(g,y=gn(k))?!m||!m.includes(y)?d[y]=A:(_||(_={}))[y]=A:Dc(o.emitsOptions,k)||(!(k in h)||A!==h[k])&&(h[k]=A,b=!0)}if(m){const k=qe(d),A=_||st;for(let y=0;y<m.length;y++){const x=m[y];d[x]=Mh(g,k,x,A[x],o,!Ye(A,x))}}return b}function Mh(o,l,d,h,g,m){const b=o[d];if(b!=null){const _=Ye(b,"default");if(_&&h===void 0){const k=b.default;if(b.type!==Function&&Pe(k)){const{propsDefaults:A}=g;d in A?h=A[d]:(wi(g),h=A[d]=k.call(null,l),gi())}else h=k}b[0]&&(m&&!_?h=!1:b[1]&&(h===""||h===So(d))&&(h=!0))}return h}function dA(o,l,d=!1){const h=l.propsCache,g=h.get(o);if(g)return g;const m=o.props,b={},_=[];let k=!1;if(!Pe(o)){const y=x=>{k=!0;const[v,E]=dA(x,l,!0);Nt(b,v),E&&_.push(...E)};!d&&l.mixins.length&&l.mixins.forEach(y),o.extends&&y(o.extends),o.mixins&&o.mixins.forEach(y)}if(!m&&!k)return h.set(o,Yr),Yr;if(xe(m))for(let y=0;y<m.length;y++){const x=gn(m[y]);o_(x)&&(b[x]=st)}else if(m)for(const y in m){const x=gn(y);if(o_(x)){const v=m[y],E=b[x]=xe(v)||Pe(v)?{type:v}:v;if(E){const N=s_(Boolean,E.type),P=s_(String,E.type);E[0]=N>-1,E[1]=P<0||N<P,(N>-1||Ye(E,"default"))&&_.push(x)}}}const A=[b,_];return h.set(o,A),A}function o_(o){return o[0]!=="$"}function i_(o){const l=o&&o.toString().match(/^\s*function (\w+)/);return l?l[1]:o===null?"null":""}function r_(o,l){return i_(o)===i_(l)}function s_(o,l){return xe(l)?l.findIndex(d=>r_(d,o)):Pe(l)&&r_(l,o)?0:-1}const uA=o=>o[0]==="_"||o==="$stable",zg=o=>xe(o)?o.map(zn):[zn(o)],lN=(o,l,d)=>{if(l._n)return l;const h=Qe((...g)=>zg(l(...g)),d);return h._c=!1,h},hA=(o,l,d)=>{const h=o._ctx;for(const g in o){if(uA(g))continue;const m=o[g];if(Pe(m))l[g]=lN(g,m,h);else if(m!=null){const b=zg(m);l[g]=()=>b}}},gA=(o,l)=>{const d=zg(l);o.slots.default=()=>d},cN=(o,l)=>{if(o.vnode.shapeFlag&32){const d=l._;d?(o.slots=qe(l),ec(l,"_",d)):hA(l,o.slots={})}else o.slots={},l&&gA(o,l);ec(o.slots,Pc,1)},dN=(o,l,d)=>{const{vnode:h,slots:g}=o;let m=!0,b=st;if(h.shapeFlag&32){const _=l._;_?d&&_===1?m=!1:(Nt(g,l),!d&&_===1&&delete g._):(m=!l.$stable,hA(l,g)),b=l}else l&&(gA(o,l),b={default:1});if(m)for(const _ in g)!uA(_)&&!(_ in b)&&delete g[_]};function fA(){return{app:null,config:{isNativeTag:B4,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uN=0;function hN(o,l){return function(h,g=null){Pe(h)||(h=Object.assign({},h)),g!=null&&!Pt(g)&&(g=null);const m=fA(),b=new Set;let _=!1;const k=m.app={_uid:uN++,_component:h,_props:g,_container:null,_context:m,_instance:null,version:MA,get config(){return m.config},set config(A){},use(A,...y){return b.has(A)||(A&&Pe(A.install)?(b.add(A),A.install(k,...y)):Pe(A)&&(b.add(A),A(k,...y))),k},mixin(A){return m.mixins.includes(A)||m.mixins.push(A),k},component(A,y){return y?(m.components[A]=y,k):m.components[A]},directive(A,y){return y?(m.directives[A]=y,k):m.directives[A]},mount(A,y,x){if(!_){const v=L(h,g);return v.appContext=m,y&&l?l(v,A):o(v,A,x),_=!0,k._container=A,A.__vue_app__=k,zc(v.component)||v.component.proxy}},unmount(){_&&(o(null,k._container),delete k._container.__vue_app__)},provide(A,y){return m.provides[A]=y,k}};return k}}function sc(o,l,d,h,g=!1){if(xe(o)){o.forEach((v,E)=>sc(v,l&&(xe(l)?l[E]:l),d,h,g));return}if(or(h)&&!g)return;const m=h.shapeFlag&4?zc(h.component)||h.component.proxy:h.el,b=g?null:m,{i:_,r:k}=o,A=l&&l.r,y=_.refs===st?_.refs={}:_.refs,x=_.setupState;if(A!=null&&A!==k&&(Dt(A)?(y[A]=null,Ye(x,A)&&(x[A]=null)):kt(A)&&(A.value=null)),Pe(k))Do(k,_,12,[b,y]);else{const v=Dt(k),E=kt(k);if(v||E){const N=()=>{if(o.f){const P=v?y[k]:k.value;g?xe(P)&&lg(P,m):xe(P)?P.includes(m)||P.push(m):v?(y[k]=[m],Ye(x,k)&&(x[k]=y[k])):(k.value=[m],o.k&&(y[o.k]=k.value))}else v?(y[k]=b,Ye(x,k)&&(x[k]=b)):E&&(k.value=b,o.k&&(y[o.k]=b))};b?(N.id=-1,Yt(N,d)):N()}}}let ii=!1;const Vl=o=>/svg/.test(o.namespaceURI)&&o.tagName!=="foreignObject",Hl=o=>o.nodeType===8;function gN(o){const{mt:l,p:d,o:{patchProp:h,createText:g,nextSibling:m,parentNode:b,remove:_,insert:k,createComment:A}}=o,y=(M,T)=>{if(!T.hasChildNodes()){d(null,M,T),oc(),T._vnode=M;return}ii=!1,x(T.firstChild,M,null,null,null),oc(),T._vnode=M,ii&&console.error("Hydration completed but contains mismatches.")},x=(M,T,O,G,H,Q=!1)=>{const R=Hl(M)&&M.data==="[",V=()=>P(M,T,O,G,H,R),{type:W,ref:K,shapeFlag:ee,patchFlag:J}=T,ne=M.nodeType;T.el=M,J===-2&&(Q=!1,T.dynamicChildren=null);let ae=null;switch(W){case is:ne!==3?T.children===""?(k(T.el=g(""),b(M),M),ae=M):ae=V():(M.data!==T.children&&(ii=!0,M.data=T.children),ae=m(M));break;case on:ne!==8||R?ae=V():ae=m(M);break;case ir:if(ne!==1&&ne!==3)ae=V();else{ae=M;const be=!T.children.length;for(let he=0;he<T.staticCount;he++)be&&(T.children+=ae.nodeType===1?ae.outerHTML:ae.data),he===T.staticCount-1&&(T.anchor=ae),ae=m(ae);return ae}break;case We:R?ae=N(M,T,O,G,H,Q):ae=V();break;default:if(ee&1)ne!==1||T.type.toLowerCase()!==M.tagName.toLowerCase()?ae=V():ae=v(M,T,O,G,H,Q);else if(ee&6){T.slotScopeIds=H;const be=b(M);if(l(T,be,null,O,G,Vl(be),Q),ae=R?j(M):m(M),ae&&Hl(ae)&&ae.data==="teleport end"&&(ae=m(ae)),or(T)){let he;R?(he=L(We),he.anchor=ae?ae.previousSibling:be.lastChild):he=M.nodeType===3?Et(""):L("div"),he.el=M,T.component.subTree=he}}else ee&64?ne!==8?ae=V():ae=T.type.hydrate(M,T,O,G,H,Q,o,E):ee&128&&(ae=T.type.hydrate(M,T,O,G,Vl(b(M)),H,Q,o,x))}return K!=null&&sc(K,null,G,T),ae},v=(M,T,O,G,H,Q)=>{Q=Q||!!T.dynamicChildren;const{type:R,props:V,patchFlag:W,shapeFlag:K,dirs:ee}=T,J=R==="input"&&ee||R==="option";if(J||W!==-1){if(ee&&yo(T,null,O,"created"),V)if(J||!Q||W&48)for(const ae in V)(J&&ae.endsWith("value")||Da(ae)&&!oa(ae))&&h(M,ae,null,V[ae],!1,void 0,O);else V.onClick&&h(M,"onClick",null,V.onClick,!1,void 0,O);let ne;if((ne=V&&V.onVnodeBeforeMount)&&_n(ne,O,T),ee&&yo(T,null,O,"beforeMount"),((ne=V&&V.onVnodeMounted)||ee)&&GC(()=>{ne&&_n(ne,O,T),ee&&yo(T,null,O,"mounted")},G),K&16&&!(V&&(V.innerHTML||V.textContent))){let ae=E(M.firstChild,T,M,O,G,H,Q);for(;ae;){ii=!0;const be=ae;ae=ae.nextSibling,_(be)}}else K&8&&M.textContent!==T.children&&(ii=!0,M.textContent=T.children)}return M.nextSibling},E=(M,T,O,G,H,Q,R)=>{R=R||!!T.dynamicChildren;const V=T.children,W=V.length;for(let K=0;K<W;K++){const ee=R?V[K]:V[K]=zn(V[K]);if(M)M=x(M,ee,G,H,Q,R);else{if(ee.type===is&&!ee.children)continue;ii=!0,d(null,ee,O,null,G,H,Vl(O),Q)}}return M},N=(M,T,O,G,H,Q)=>{const{slotScopeIds:R}=T;R&&(H=H?H.concat(R):R);const V=b(M),W=E(m(M),T,V,O,G,H,Q);return W&&Hl(W)&&W.data==="]"?m(T.anchor=W):(ii=!0,k(T.anchor=A("]"),V,W),W)},P=(M,T,O,G,H,Q)=>{if(ii=!0,T.el=null,Q){const W=j(M);for(;;){const K=m(M);if(K&&K!==W)_(K);else break}}const R=m(M),V=b(M);return _(M),d(null,T,V,R,O,G,Vl(V),H),R},j=M=>{let T=0;for(;M;)if(M=m(M),M&&Hl(M)&&(M.data==="["&&T++,M.data==="]")){if(T===0)return m(M);T--}return M};return[y,x]}const Yt=GC;function mA(o){return bA(o)}function pA(o){return bA(o,gN)}function bA(o,l){const d=R4();d.__VUE__=!0;const{insert:h,remove:g,patchProp:m,createElement:b,createText:_,createComment:k,setText:A,setElementText:y,parentNode:x,nextSibling:v,setScopeId:E=lo,cloneNode:N,insertStaticContent:P}=o,j=(z,$,X,re=null,se=null,fe=null,Ce=!1,me=null,pe=!!$.dynamicChildren)=>{if(z===$)return;z&&!xo(z,$)&&(re=ie(z),Tt(z,se,fe,!0),z=null),$.patchFlag===-2&&(pe=!1,$.dynamicChildren=null);const{type:ue,ref:Se,shapeFlag:_e}=$;switch(ue){case is:M(z,$,X,re);break;case on:T(z,$,X,re);break;case ir:z==null&&O($,X,re,Ce);break;case We:ne(z,$,X,re,se,fe,Ce,me,pe);break;default:_e&1?Q(z,$,X,re,se,fe,Ce,me,pe):_e&6?ae(z,$,X,re,se,fe,Ce,me,pe):(_e&64||_e&128)&&ue.process(z,$,X,re,se,fe,Ce,me,pe,Ke)}Se!=null&&se&&sc(Se,z&&z.ref,fe,$||z,!$)},M=(z,$,X,re)=>{if(z==null)h($.el=_($.children),X,re);else{const se=$.el=z.el;$.children!==z.children&&A(se,$.children)}},T=(z,$,X,re)=>{z==null?h($.el=k($.children||""),X,re):$.el=z.el},O=(z,$,X,re)=>{[z.el,z.anchor]=P(z.children,$,X,re,z.el,z.anchor)},G=({el:z,anchor:$},X,re)=>{let se;for(;z&&z!==$;)se=v(z),h(z,X,re),z=se;h($,X,re)},H=({el:z,anchor:$})=>{let X;for(;z&&z!==$;)X=v(z),g(z),z=X;g($)},Q=(z,$,X,re,se,fe,Ce,me,pe)=>{Ce=Ce||$.type==="svg",z==null?R($,X,re,se,fe,Ce,me,pe):K(z,$,se,fe,Ce,me,pe)},R=(z,$,X,re,se,fe,Ce,me)=>{let pe,ue;const{type:Se,props:_e,shapeFlag:ye,transition:Ie,patchFlag:Ue,dirs:nt}=z;if(z.el&&N!==void 0&&Ue===-1)pe=z.el=N(z.el);else{if(pe=z.el=b(z.type,fe,_e&&_e.is,_e),ye&8?y(pe,z.children):ye&16&&W(z.children,pe,null,re,se,fe&&Se!=="foreignObject",Ce,me),nt&&yo(z,null,re,"created"),_e){for(const ht in _e)ht!=="value"&&!oa(ht)&&m(pe,ht,null,_e[ht],fe,z.children,re,se,de);"value"in _e&&m(pe,"value",null,_e.value),(ue=_e.onVnodeBeforeMount)&&_n(ue,re,z)}V(pe,z,z.scopeId,Ce,re)}nt&&yo(z,null,re,"beforeMount");const Fe=(!se||se&&!se.pendingBranch)&&Ie&&!Ie.persisted;Fe&&Ie.beforeEnter(pe),h(pe,$,X),((ue=_e&&_e.onVnodeMounted)||Fe||nt)&&Yt(()=>{ue&&_n(ue,re,z),Fe&&Ie.enter(pe),nt&&yo(z,null,re,"mounted")},se)},V=(z,$,X,re,se)=>{if(X&&E(z,X),re)for(let fe=0;fe<re.length;fe++)E(z,re[fe]);if(se){let fe=se.subTree;if($===fe){const Ce=se.vnode;V(z,Ce,Ce.scopeId,Ce.slotScopeIds,se.parent)}}},W=(z,$,X,re,se,fe,Ce,me,pe=0)=>{for(let ue=pe;ue<z.length;ue++){const Se=z[ue]=me?ci(z[ue]):zn(z[ue]);j(null,Se,$,X,re,se,fe,Ce,me)}},K=(z,$,X,re,se,fe,Ce)=>{const me=$.el=z.el;let{patchFlag:pe,dynamicChildren:ue,dirs:Se}=$;pe|=z.patchFlag&16;const _e=z.props||st,ye=$.props||st;let Ie;X&&Ki(X,!1),(Ie=ye.onVnodeBeforeUpdate)&&_n(Ie,X,$,z),Se&&yo($,z,X,"beforeUpdate"),X&&Ki(X,!0);const Ue=se&&$.type!=="foreignObject";if(ue?ee(z.dynamicChildren,ue,me,X,re,Ue,fe):Ce||He(z,$,me,null,X,re,Ue,fe,!1),pe>0){if(pe&16)J(me,$,_e,ye,X,re,se);else if(pe&2&&_e.class!==ye.class&&m(me,"class",null,ye.class,se),pe&4&&m(me,"style",_e.style,ye.style,se),pe&8){const nt=$.dynamicProps;for(let Fe=0;Fe<nt.length;Fe++){const ht=nt[Fe],Sn=_e[ht],Mo=ye[ht];(Mo!==Sn||ht==="value")&&m(me,ht,Sn,Mo,se,z.children,X,re,de)}}pe&1&&z.children!==$.children&&y(me,$.children)}else!Ce&&ue==null&&J(me,$,_e,ye,X,re,se);((Ie=ye.onVnodeUpdated)||Se)&&Yt(()=>{Ie&&_n(Ie,X,$,z),Se&&yo($,z,X,"updated")},re)},ee=(z,$,X,re,se,fe,Ce)=>{for(let me=0;me<$.length;me++){const pe=z[me],ue=$[me],Se=pe.el&&(pe.type===We||!xo(pe,ue)||pe.shapeFlag&70)?x(pe.el):X;j(pe,ue,Se,null,re,se,fe,Ce,!0)}},J=(z,$,X,re,se,fe,Ce)=>{if(X!==re){for(const me in re){if(oa(me))continue;const pe=re[me],ue=X[me];pe!==ue&&me!=="value"&&m(z,me,ue,pe,Ce,$.children,se,fe,de)}if(X!==st)for(const me in X)!oa(me)&&!(me in re)&&m(z,me,X[me],null,Ce,$.children,se,fe,de);"value"in re&&m(z,"value",X.value,re.value)}},ne=(z,$,X,re,se,fe,Ce,me,pe)=>{const ue=$.el=z?z.el:_(""),Se=$.anchor=z?z.anchor:_("");let{patchFlag:_e,dynamicChildren:ye,slotScopeIds:Ie}=$;Ie&&(me=me?me.concat(Ie):Ie),z==null?(h(ue,X,re),h(Se,X,re),W($.children,X,Se,se,fe,Ce,me,pe)):_e>0&&_e&64&&ye&&z.dynamicChildren?(ee(z.dynamicChildren,ye,X,se,fe,Ce,me),($.key!=null||se&&$===se.subTree)&&Lg(z,$,!0)):He(z,$,X,Se,se,fe,Ce,me,pe)},ae=(z,$,X,re,se,fe,Ce,me,pe)=>{$.slotScopeIds=me,z==null?$.shapeFlag&512?se.ctx.activate($,X,re,Ce,pe):be($,X,re,se,fe,Ce,pe):he(z,$,pe)},be=(z,$,X,re,se,fe,Ce)=>{const me=z.component=CA(z,re,se);if(Ba(z)&&(me.ctx.renderer=Ke),yA(me),me.asyncDep){if(se&&se.registerDep(me,Ae),!z.el){const pe=me.subTree=L(on);T(null,pe,$,X)}return}Ae(me,z,$,X,se,fe,Ce)},he=(z,$,X)=>{const re=$.component=z.component;if(RB(z,$,X))if(re.asyncDep&&!re.asyncResolved){Ee(re,$,X);return}else re.next=$,IB(re.update),re.update();else $.el=z.el,re.vnode=$},Ae=(z,$,X,re,se,fe,Ce)=>{const me=()=>{if(z.isMounted){let{next:Se,bu:_e,u:ye,parent:Ie,vnode:Ue}=z,nt=Se,Fe;Ki(z,!1),Se?(Se.el=Ue.el,Ee(z,Se,Ce)):Se=Ue,_e&&Zr(_e),(Fe=Se.props&&Se.props.onVnodeBeforeUpdate)&&_n(Fe,Ie,Se,Ue),Ki(z,!0);const ht=Zl(z),Sn=z.subTree;z.subTree=ht,j(Sn,ht,x(Sn.el),ie(Sn),z,se,fe),Se.el=ht.el,nt===null&&Eg(z,ht.el),ye&&Yt(ye,se),(Fe=Se.props&&Se.props.onVnodeUpdated)&&Yt(()=>_n(Fe,Ie,Se,Ue),se)}else{let Se;const{el:_e,props:ye}=$,{bm:Ie,m:Ue,parent:nt}=z,Fe=or($);if(Ki(z,!1),Ie&&Zr(Ie),!Fe&&(Se=ye&&ye.onVnodeBeforeMount)&&_n(Se,nt,$),Ki(z,!0),_e&&De){const ht=()=>{z.subTree=Zl(z),De(_e,z.subTree,z,se,null)};Fe?$.type.__asyncLoader().then(()=>!z.isUnmounted&&ht()):ht()}else{const ht=z.subTree=Zl(z);j(null,ht,X,re,z,se,fe),$.el=ht.el}if(Ue&&Yt(Ue,se),!Fe&&(Se=ye&&ye.onVnodeMounted)){const ht=$;Yt(()=>_n(Se,nt,ht),se)}($.shapeFlag&256||nt&&or(nt.vnode)&&nt.vnode.shapeFlag&256)&&z.a&&Yt(z.a,se),z.isMounted=!0,$=X=re=null}},pe=z.effect=new Ta(me,()=>yg(ue),z.scope),ue=z.update=()=>pe.run();ue.id=z.uid,Ki(z,!0),ue()},Ee=(z,$,X)=>{$.component=z;const re=z.vnode.props;z.vnode=$,z.next=null,aN(z,$.props,re,X),dN(z,$.children,X),lr(),Sc(void 0,z.update),cr()},He=(z,$,X,re,se,fe,Ce,me,pe=!1)=>{const ue=z&&z.children,Se=z?z.shapeFlag:0,_e=$.children,{patchFlag:ye,shapeFlag:Ie}=$;if(ye>0){if(ye&128){_t(ue,_e,X,re,se,fe,Ce,me,pe);return}else if(ye&256){It(ue,_e,X,re,se,fe,Ce,me,pe);return}}Ie&8?(Se&16&&de(ue,se,fe),_e!==ue&&y(X,_e)):Se&16?Ie&16?_t(ue,_e,X,re,se,fe,Ce,me,pe):de(ue,se,fe,!0):(Se&8&&y(X,""),Ie&16&&W(_e,X,re,se,fe,Ce,me,pe))},It=(z,$,X,re,se,fe,Ce,me,pe)=>{z=z||Yr,$=$||Yr;const ue=z.length,Se=$.length,_e=Math.min(ue,Se);let ye;for(ye=0;ye<_e;ye++){const Ie=$[ye]=pe?ci($[ye]):zn($[ye]);j(z[ye],Ie,X,null,se,fe,Ce,me,pe)}ue>Se?de(z,se,fe,!0,!1,_e):W($,X,re,se,fe,Ce,me,pe,_e)},_t=(z,$,X,re,se,fe,Ce,me,pe)=>{let ue=0;const Se=$.length;let _e=z.length-1,ye=Se-1;for(;ue<=_e&&ue<=ye;){const Ie=z[ue],Ue=$[ue]=pe?ci($[ue]):zn($[ue]);if(xo(Ie,Ue))j(Ie,Ue,X,null,se,fe,Ce,me,pe);else break;ue++}for(;ue<=_e&&ue<=ye;){const Ie=z[_e],Ue=$[ye]=pe?ci($[ye]):zn($[ye]);if(xo(Ie,Ue))j(Ie,Ue,X,null,se,fe,Ce,me,pe);else break;_e--,ye--}if(ue>_e){if(ue<=ye){const Ie=ye+1,Ue=Ie<Se?$[Ie].el:re;for(;ue<=ye;)j(null,$[ue]=pe?ci($[ue]):zn($[ue]),X,Ue,se,fe,Ce,me,pe),ue++}}else if(ue>ye)for(;ue<=_e;)Tt(z[ue],se,fe,!0),ue++;else{const Ie=ue,Ue=ue,nt=new Map;for(ue=Ue;ue<=ye;ue++){const ln=$[ue]=pe?ci($[ue]):zn($[ue]);ln.key!=null&&nt.set(ln.key,ue)}let Fe,ht=0;const Sn=ye-Ue+1;let Mo=!1,Fa=0;const Ii=new Array(Sn);for(ue=0;ue<Sn;ue++)Ii[ue]=0;for(ue=Ie;ue<=_e;ue++){const ln=z[ue];if(ht>=Sn){Tt(ln,se,fe,!0);continue}let Xt;if(ln.key!=null)Xt=nt.get(ln.key);else for(Fe=Ue;Fe<=ye;Fe++)if(Ii[Fe-Ue]===0&&xo(ln,$[Fe])){Xt=Fe;break}Xt===void 0?Tt(ln,se,fe,!0):(Ii[Xt-Ue]=ue+1,Xt>=Fa?Fa=Xt:Mo=!0,j(ln,$[Xt],X,null,se,fe,Ce,me,pe),ht++)}const Jt=Mo?fN(Ii):Yr;for(Fe=Jt.length-1,ue=Sn-1;ue>=0;ue--){const ln=Ue+ue,Xt=$[ln],Ti=ln+1<Se?$[ln+1].el:re;Ii[ue]===0?j(null,Xt,X,Ti,se,fe,Ce,me,pe):Mo&&(Fe<0||ue!==Jt[Fe]?Ne(Xt,X,Ti,2):Fe--)}}},Ne=(z,$,X,re,se=null)=>{const{el:fe,type:Ce,transition:me,children:pe,shapeFlag:ue}=z;if(ue&6){Ne(z.component.subTree,$,X,re);return}if(ue&128){z.suspense.move($,X,re);return}if(ue&64){Ce.move(z,$,X,Ke);return}if(Ce===We){h(fe,$,X);for(let _e=0;_e<pe.length;_e++)Ne(pe[_e],$,X,re);h(z.anchor,$,X);return}if(Ce===ir){G(z,$,X);return}if(re!==2&&ue&1&&me)if(re===0)me.beforeEnter(fe),h(fe,$,X),Yt(()=>me.enter(fe),se);else{const{leave:_e,delayLeave:ye,afterLeave:Ie}=me,Ue=()=>h(fe,$,X),nt=()=>{_e(fe,()=>{Ue(),Ie&&Ie()})};ye?ye(fe,Ue,nt):nt()}else h(fe,$,X)},Tt=(z,$,X,re=!1,se=!1)=>{const{type:fe,props:Ce,ref:me,children:pe,dynamicChildren:ue,shapeFlag:Se,patchFlag:_e,dirs:ye}=z;if(me!=null&&sc(me,null,X,z,!0),Se&256){$.ctx.deactivate(z);return}const Ie=Se&1&&ye,Ue=!or(z);let nt;if(Ue&&(nt=Ce&&Ce.onVnodeBeforeUnmount)&&_n(nt,$,z),Se&6)ce(z.component,X,re);else{if(Se&128){z.suspense.unmount(X,re);return}Ie&&yo(z,null,$,"beforeUnmount"),Se&64?z.type.remove(z,$,X,se,Ke,re):ue&&(fe!==We||_e>0&&_e&64)?de(ue,$,X,!1,!0):(fe===We&&_e&384||!se&&Se&16)&&de(pe,$,X),re&&fn(z)}(Ue&&(nt=Ce&&Ce.onVnodeUnmounted)||Ie)&&Yt(()=>{nt&&_n(nt,$,z),Ie&&yo(z,null,$,"unmounted")},X)},fn=z=>{const{type:$,el:X,anchor:re,transition:se}=z;if($===We){U(X,re);return}if($===ir){H(z);return}const fe=()=>{g(X),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(z.shapeFlag&1&&se&&!se.persisted){const{leave:Ce,delayLeave:me}=se,pe=()=>Ce(X,fe);me?me(z.el,fe,pe):pe()}else fe()},U=(z,$)=>{let X;for(;z!==$;)X=v(z),g(z),z=X;g($)},ce=(z,$,X)=>{const{bum:re,scope:se,update:fe,subTree:Ce,um:me}=z;re&&Zr(re),se.stop(),fe&&(fe.active=!1,Tt(Ce,z,$,X)),me&&Yt(me,$),Yt(()=>{z.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&z.asyncDep&&!z.asyncResolved&&z.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},de=(z,$,X,re=!1,se=!1,fe=0)=>{for(let Ce=fe;Ce<z.length;Ce++)Tt(z[Ce],$,X,re,se)},ie=z=>z.shapeFlag&6?ie(z.component.subTree):z.shapeFlag&128?z.suspense.next():v(z.anchor||z.el),Z=(z,$,X)=>{z==null?$._vnode&&Tt($._vnode,null,null,!0):j($._vnode||null,z,$,null,null,null,X),oc(),$._vnode=z},Ke={p:j,um:Tt,m:Ne,r:fn,mt:be,mc:W,pc:He,pbc:ee,n:ie,o};let ge,De;return l&&([ge,De]=l(Ke)),{render:Z,hydrate:ge,createApp:hN(Z,ge)}}function Ki({effect:o,update:l},d){o.allowRecurse=l.allowRecurse=d}function Lg(o,l,d=!1){const h=o.children,g=l.children;if(xe(h)&&xe(g))for(let m=0;m<h.length;m++){const b=h[m];let _=g[m];_.shapeFlag&1&&!_.dynamicChildren&&((_.patchFlag<=0||_.patchFlag===32)&&(_=g[m]=ci(g[m]),_.el=b.el),d||Lg(b,_))}}function fN(o){const l=o.slice(),d=[0];let h,g,m,b,_;const k=o.length;for(h=0;h<k;h++){const A=o[h];if(A!==0){if(g=d[d.length-1],o[g]<A){l[h]=g,d.push(h);continue}for(m=0,b=d.length-1;m<b;)_=m+b>>1,o[d[_]]<A?m=_+1:b=_;A<o[d[m]]&&(m>0&&(l[h]=d[m-1]),d[m]=h)}}for(m=d.length,b=d[m-1];m-- >0;)d[m]=b,b=l[b];return d}const mN=o=>o.__isTeleport,la=o=>o&&(o.disabled||o.disabled===""),a_=o=>typeof SVGElement<"u"&&o instanceof SVGElement,Bh=(o,l)=>{const d=o&&o.to;return Dt(d)?l?l(d):null:d},pN={__isTeleport:!0,process(o,l,d,h,g,m,b,_,k,A){const{mc:y,pc:x,pbc:v,o:{insert:E,querySelector:N,createText:P,createComment:j}}=A,M=la(l.props);let{shapeFlag:T,children:O,dynamicChildren:G}=l;if(o==null){const H=l.el=P(""),Q=l.anchor=P("");E(H,d,h),E(Q,d,h);const R=l.target=Bh(l.props,N),V=l.targetAnchor=P("");R&&(E(V,R),b=b||a_(R));const W=(K,ee)=>{T&16&&y(O,K,ee,g,m,b,_,k)};M?W(d,Q):R&&W(R,V)}else{l.el=o.el;const H=l.anchor=o.anchor,Q=l.target=o.target,R=l.targetAnchor=o.targetAnchor,V=la(o.props),W=V?d:Q,K=V?H:R;if(b=b||a_(Q),G?(v(o.dynamicChildren,G,W,g,m,b,_),Lg(o,l,!0)):k||x(o,l,W,K,g,m,b,_,!1),M)V||Ul(l,d,H,A,1);else if((l.props&&l.props.to)!==(o.props&&o.props.to)){const ee=l.target=Bh(l.props,N);ee&&Ul(l,ee,null,A,0)}else V&&Ul(l,Q,R,A,1)}},remove(o,l,d,h,{um:g,o:{remove:m}},b){const{shapeFlag:_,children:k,anchor:A,targetAnchor:y,target:x,props:v}=o;if(x&&m(y),(b||!la(v))&&(m(A),_&16))for(let E=0;E<k.length;E++){const N=k[E];g(N,l,d,!0,!!N.dynamicChildren)}},move:Ul,hydrate:bN};function Ul(o,l,d,{o:{insert:h},m:g},m=2){m===0&&h(o.targetAnchor,l,d);const{el:b,anchor:_,shapeFlag:k,children:A,props:y}=o,x=m===2;if(x&&h(b,l,d),(!x||la(y))&&k&16)for(let v=0;v<A.length;v++)g(A[v],l,d,2);x&&h(_,l,d)}function bN(o,l,d,h,g,m,{o:{nextSibling:b,parentNode:_,querySelector:k}},A){const y=l.target=Bh(l.props,k);if(y){const x=y._lpa||y.firstChild;if(l.shapeFlag&16)if(la(l.props))l.anchor=A(b(o),l,_(o),d,h,g,m),l.targetAnchor=x;else{l.anchor=b(o);let v=x;for(;v;)if(v=b(v),v&&v.nodeType===8&&v.data==="teleport anchor"){l.targetAnchor=v,y._lpa=l.targetAnchor&&b(l.targetAnchor);break}A(x,l,y,d,h,g,m)}}return l.anchor&&b(l.anchor)}const kA=pN,We=Symbol(void 0),is=Symbol(void 0),on=Symbol(void 0),ir=Symbol(void 0),ca=[];let Cn=null;function $e(o=!1){ca.push(Cn=o?null:[])}function wA(){ca.pop(),Cn=ca[ca.length-1]||null}let sr=1;function Nh(o){sr+=o}function vA(o){return o.dynamicChildren=sr>0?Cn||Yr:null,wA(),sr>0&&Cn&&Cn.push(o),o}function yt(o,l,d,h,g,m){return vA(Le(o,l,d,h,g,m,!0))}function Jn(o,l,d,h,g){return vA(L(o,l,d,h,g,!0))}function ki(o){return o?o.__v_isVNode===!0:!1}function xo(o,l){return o.type===l.type&&o.key===l.key}function kN(o){}const Pc="__vInternal",_A=({key:o})=>o!=null?o:null,Jl=({ref:o,ref_key:l,ref_for:d})=>o!=null?Dt(o)||kt(o)||Pe(o)?{i:nn,r:o,k:l,f:!!d}:o:null;function Le(o,l=null,d=null,h=0,g=null,m=o===We?0:1,b=!1,_=!1){const k={__v_isVNode:!0,__v_skip:!0,type:o,props:l,key:l&&_A(l),ref:l&&Jl(l),scopeId:Ic,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:m,patchFlag:h,dynamicProps:g,dynamicChildren:null,appContext:null};return _?(Rg(k,d),m&128&&o.normalize(k)):d&&(k.shapeFlag|=Dt(d)?8:16),sr>0&&!b&&Cn&&(k.patchFlag>0||m&6)&&k.patchFlag!==32&&Cn.push(k),k}const L=wN;function wN(o,l=null,d=null,h=0,g=null,m=!1){if((!o||o===oA)&&(o=on),ki(o)){const _=co(o,l,!0);return d&&Rg(_,d),sr>0&&!m&&Cn&&(_.shapeFlag&6?Cn[Cn.indexOf(o)]=_:Cn.push(_)),_.patchFlag|=-2,_}if(IN(o)&&(o=o.__vccOpts),l){l=Og(l);let{class:_,style:k}=l;_&&!Dt(_)&&(l.class=Fn(_)),Pt(k)&&(mg(k)&&!xe(k)&&(k=Nt({},k)),l.style=cs(k))}const b=Dt(o)?1:qC(o)?128:mN(o)?64:Pt(o)?4:Pe(o)?2:0;return Le(o,l,d,h,g,b,m,!0)}function Og(o){return o?mg(o)||Pc in o?Nt({},o):o:null}function co(o,l,d=!1){const{props:h,ref:g,patchFlag:m,children:b}=o,_=l?xt(h||{},l):h;return{__v_isVNode:!0,__v_skip:!0,type:o.type,props:_,key:_&&_A(_),ref:l&&l.ref?d&&g?xe(g)?g.concat(Jl(l)):[g,Jl(l)]:Jl(l):g,scopeId:o.scopeId,slotScopeIds:o.slotScopeIds,children:b,target:o.target,targetAnchor:o.targetAnchor,staticCount:o.staticCount,shapeFlag:o.shapeFlag,patchFlag:l&&o.type!==We?m===-1?16:m|16:m,dynamicProps:o.dynamicProps,dynamicChildren:o.dynamicChildren,appContext:o.appContext,dirs:o.dirs,transition:o.transition,component:o.component,suspense:o.suspense,ssContent:o.ssContent&&co(o.ssContent),ssFallback:o.ssFallback&&co(o.ssFallback),el:o.el,anchor:o.anchor}}function Et(o=" ",l=0){return L(is,null,o,l)}function vN(o,l){const d=L(ir,null,o);return d.staticCount=l,d}function so(o="",l=!1){return l?($e(),Jn(on,null,o)):L(on,null,o)}function zn(o){return o==null||typeof o=="boolean"?L(on):xe(o)?L(We,null,o.slice()):typeof o=="object"?ci(o):L(is,null,String(o))}function ci(o){return o.el===null||o.memo?o:co(o)}function Rg(o,l){let d=0;const{shapeFlag:h}=o;if(l==null)l=null;else if(xe(l))d=16;else if(typeof l=="object")if(h&65){const g=l.default;g&&(g._c&&(g._d=!1),Rg(o,g()),g._c&&(g._d=!0));return}else{d=32;const g=l._;!g&&!(Pc in l)?l._ctx=nn:g===3&&nn&&(nn.slots._===1?l._=1:(l._=2,o.patchFlag|=1024))}else Pe(l)?(l={default:l,_ctx:nn},d=32):(l=String(l),h&64?(d=16,l=[Et(l)]):d=8);o.children=l,o.shapeFlag|=d}function xt(...o){const l={};for(let d=0;d<o.length;d++){const h=o[d];for(const g in h)if(g==="class")l.class!==h.class&&(l.class=Fn([l.class,h.class]));else if(g==="style")l.style=cs([l.style,h.style]);else if(Da(g)){const m=l[g],b=h[g];b&&m!==b&&!(xe(m)&&m.includes(b))&&(l[g]=m?[].concat(m,b):b)}else g!==""&&(l[g]=h[g])}return l}function _n(o,l,d,h=null){Rn(o,l,7,[d,h])}const _N=fA();let CN=0;function CA(o,l,d){const h=o.type,g=(l?l.appContext:o.appContext)||_N,m={uid:CN++,vnode:o,type:h,parent:l,appContext:g,root:null,next:null,subTree:null,effect:null,update:null,scope:new ug(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:l?l.provides:Object.create(g.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dA(h,g),emitsOptions:WC(h,g),emit:null,emitted:null,propsDefaults:st,inheritAttrs:h.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return m.ctx={_:m},m.root=l?l.root:m,m.emit=MB.bind(null,m),o.ce&&o.ce(m),m}let Vt=null;const Io=()=>Vt||nn,wi=o=>{Vt=o,o.scope.on()},gi=()=>{Vt&&Vt.scope.off(),Vt=null};function AA(o){return o.vnode.shapeFlag&4}let rs=!1;function yA(o,l=!1){rs=l;const{props:d,children:h}=o.vnode,g=AA(o);sN(o,d,g,l),cN(o,h);const m=g?AN(o,l):void 0;return rs=!1,m}function AN(o,l){const d=o.type;o.accessCache=Object.create(null),o.proxy=pg(new Proxy(o.ctx,Dh));const{setup:h}=d;if(h){const g=o.setupContext=h.length>1?EA(o):null;wi(o),lr();const m=Do(h,o,0,[o.props,g]);if(cr(),gi(),cg(m)){if(m.then(gi,gi),l)return m.then(b=>{Ph(o,b,l)}).catch(b=>{dr(b,o,0)});o.asyncDep=m}else Ph(o,m,l)}else xA(o,l)}function Ph(o,l,d){Pe(l)?o.type.__ssrInlineRender?o.ssrRender=l:o.render=l:Pt(l)&&(o.setupState=vg(l)),xA(o,d)}let ac,zh;function yN(o){ac=o,zh=l=>{l.render._rc&&(l.withProxy=new Proxy(l.ctx,eN))}}const xN=()=>!ac;function xA(o,l,d){const h=o.type;if(!o.render){if(!l&&ac&&!h.render){const g=h.template;if(g){const{isCustomElement:m,compilerOptions:b}=o.appContext.config,{delimiters:_,compilerOptions:k}=h,A=Nt(Nt({isCustomElement:m,delimiters:_},b),k);h.render=ac(g,A)}}o.render=h.render||lo,zh&&zh(o)}wi(o),lr(),tN(o),cr(),gi()}function EN(o){return new Proxy(o.attrs,{get(l,d){return jn(o,"get","$attrs"),l[d]}})}function EA(o){const l=h=>{o.exposed=h||{}};let d;return{get attrs(){return d||(d=EN(o))},slots:o.slots,emit:o.emit,expose:l}}function zc(o){if(o.exposed)return o.exposeProxy||(o.exposeProxy=new Proxy(vg(pg(o.exposed)),{get(l,d){if(d in l)return l[d];if(d in ic)return ic[d](o)}}))}const SN=/(?:^|[-_])(\w)/g,DN=o=>o.replace(SN,l=>l.toUpperCase()).replace(/[-_]/g,"");function lc(o,l=!0){return Pe(o)?o.displayName||o.name:o.name||l&&o.__name}function SA(o,l,d=!1){let h=lc(l);if(!h&&l.__file){const g=l.__file.match(/([^/\\]+)\.\w+$/);g&&(h=g[1])}if(!h&&o&&o.parent){const g=m=>{for(const b in m)if(m[b]===l)return b};h=g(o.components||o.parent.type.components)||g(o.appContext.components)}return h?DN(h):d?"App":"Anonymous"}function IN(o){return Pe(o)&&"__vccOpts"in o}const q=(o,l)=>CB(o,l,rs);function TN(){return null}function MN(){return null}function BN(o){}function NN(o,l){return null}function PN(){return DA().slots}function zN(){return DA().attrs}function DA(){const o=Io();return o.setupContext||(o.setupContext=EA(o))}function LN(o,l){const d=xe(o)?o.reduce((h,g)=>(h[g]={},h),{}):o;for(const h in l){const g=d[h];g?xe(g)||Pe(g)?d[h]={type:g,default:l[h]}:g.default=l[h]:g===null&&(d[h]={default:l[h]})}return d}function ON(o,l){const d={};for(const h in o)l.includes(h)||Object.defineProperty(d,h,{enumerable:!0,get:()=>o[h]});return d}function RN(o){const l=Io();let d=o();return gi(),cg(d)&&(d=d.catch(h=>{throw wi(l),h})),[d,()=>wi(l)]}function To(o,l,d){const h=arguments.length;return h===2?Pt(l)&&!xe(l)?ki(l)?L(o,null,[l]):L(o,l):L(o,null,l):(h>3?d=Array.prototype.slice.call(arguments,2):h===3&&ki(d)&&(d=[d]),L(o,l,d))}const IA=Symbol(""),FN=()=>{{const o=et(IA);return o||Cg("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),o}};function jN(){}function VN(o,l,d,h){const g=d[h];if(g&&TA(g,o))return g;const m=l();return m.memo=o.slice(),d[h]=m}function TA(o,l){const d=o.memo;if(d.length!=l.length)return!1;for(let h=0;h<d.length;h++)if(ts(d[h],l[h]))return!1;return sr>0&&Cn&&Cn.push(o),!0}const MA="3.2.37",HN={createComponentInstance:CA,setupComponent:yA,renderComponentRoot:Zl,setCurrentRenderingInstance:wa,isVNode:ki,normalizeVNode:zn},UN=HN,$N=null,WN=null,qN="http://www.w3.org/2000/svg",Ji=typeof document<"u"?document:null,l_=Ji&&Ji.createElement("template"),GN={insert:(o,l,d)=>{l.insertBefore(o,d||null)},remove:o=>{const l=o.parentNode;l&&l.removeChild(o)},createElement:(o,l,d,h)=>{const g=l?Ji.createElementNS(qN,o):Ji.createElement(o,d?{is:d}:void 0);return o==="select"&&h&&h.multiple!=null&&g.setAttribute("multiple",h.multiple),g},createText:o=>Ji.createTextNode(o),createComment:o=>Ji.createComment(o),setText:(o,l)=>{o.nodeValue=l},setElementText:(o,l)=>{o.textContent=l},parentNode:o=>o.parentNode,nextSibling:o=>o.nextSibling,querySelector:o=>Ji.querySelector(o),setScopeId(o,l){o.setAttribute(l,"")},cloneNode(o){const l=o.cloneNode(!0);return"_value"in o&&(l._value=o._value),l},insertStaticContent(o,l,d,h,g,m){const b=d?d.previousSibling:l.lastChild;if(g&&(g===m||g.nextSibling))for(;l.insertBefore(g.cloneNode(!0),d),!(g===m||!(g=g.nextSibling)););else{l_.innerHTML=h?`<svg>${o}</svg>`:o;const _=l_.content;if(h){const k=_.firstChild;for(;k.firstChild;)_.appendChild(k.firstChild);_.removeChild(k)}l.insertBefore(_,d)}return[b?b.nextSibling:l.firstChild,d?d.previousSibling:l.lastChild]}};function KN(o,l,d){const h=o._vtc;h&&(l=(l?[l,...h]:[...h]).join(" ")),l==null?o.removeAttribute("class"):d?o.setAttribute("class",l):o.className=l}function YN(o,l,d){const h=o.style,g=Dt(d);if(d&&!g){for(const m in d)Lh(h,m,d[m]);if(l&&!Dt(l))for(const m in l)d[m]==null&&Lh(h,m,"")}else{const m=h.display;g?l!==d&&(h.cssText=d):l&&o.removeAttribute("style"),"_vod"in o&&(h.display=m)}}const c_=/\s*!important$/;function Lh(o,l,d){if(xe(d))d.forEach(h=>Lh(o,l,h));else if(d==null&&(d=""),l.startsWith("--"))o.setProperty(l,d);else{const h=QN(o,l);c_.test(d)?o.setProperty(So(h),d.replace(c_,""),"important"):o[h]=d}}const d_=["Webkit","Moz","ms"],ah={};function QN(o,l){const d=ah[l];if(d)return d;let h=gn(l);if(h!=="filter"&&h in o)return ah[l]=h;h=ds(h);for(let g=0;g<d_.length;g++){const m=d_[g]+h;if(m in o)return ah[l]=m}return l}const u_="http://www.w3.org/1999/xlink";function ZN(o,l,d,h,g){if(h&&l.startsWith("xlink:"))d==null?o.removeAttributeNS(u_,l.slice(6,l.length)):o.setAttributeNS(u_,l,d);else{const m=S4(l);d==null||m&&!vC(d)?o.removeAttribute(l):o.setAttribute(l,m?"":d)}}function JN(o,l,d,h,g,m,b){if(l==="innerHTML"||l==="textContent"){h&&b(h,g,m),o[l]=d==null?"":d;return}if(l==="value"&&o.tagName!=="PROGRESS"&&!o.tagName.includes("-")){o._value=d;const k=d==null?"":d;(o.value!==k||o.tagName==="OPTION")&&(o.value=k),d==null&&o.removeAttribute(l);return}let _=!1;if(d===""||d==null){const k=typeof o[l];k==="boolean"?d=vC(d):d==null&&k==="string"?(d="",_=!0):k==="number"&&(d=0,_=!0)}try{o[l]=d}catch{}_&&o.removeAttribute(l)}const[BA,XN]=(()=>{let o=Date.now,l=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(o=performance.now.bind(performance));const d=navigator.userAgent.match(/firefox\/(\d+)/i);l=!!(d&&Number(d[1])<=53)}return[o,l]})();let Oh=0;const eP=Promise.resolve(),tP=()=>{Oh=0},nP=()=>Oh||(eP.then(tP),Oh=BA());function Ho(o,l,d,h){o.addEventListener(l,d,h)}function oP(o,l,d,h){o.removeEventListener(l,d,h)}function iP(o,l,d,h,g=null){const m=o._vei||(o._vei={}),b=m[l];if(h&&b)b.value=h;else{const[_,k]=rP(l);if(h){const A=m[l]=sP(h,g);Ho(o,_,A,k)}else b&&(oP(o,_,b,k),m[l]=void 0)}}const h_=/(?:Once|Passive|Capture)$/;function rP(o){let l;if(h_.test(o)){l={};let d;for(;d=o.match(h_);)o=o.slice(0,o.length-d[0].length),l[d[0].toLowerCase()]=!0}return[So(o.slice(2)),l]}function sP(o,l){const d=h=>{const g=h.timeStamp||BA();(XN||g>=d.attached-1)&&Rn(aP(h,d.value),l,5,[h])};return d.value=o,d.attached=nP(),d}function aP(o,l){if(xe(l)){const d=o.stopImmediatePropagation;return o.stopImmediatePropagation=()=>{d.call(o),o._stopped=!0},l.map(h=>g=>!g._stopped&&h&&h(g))}else return l}const g_=/^on[a-z]/,lP=(o,l,d,h,g=!1,m,b,_,k)=>{l==="class"?KN(o,h,g):l==="style"?YN(o,d,h):Da(l)?ag(l)||iP(o,l,d,h,b):(l[0]==="."?(l=l.slice(1),!0):l[0]==="^"?(l=l.slice(1),!1):cP(o,l,h,g))?JN(o,l,h,m,b,_,k):(l==="true-value"?o._trueValue=h:l==="false-value"&&(o._falseValue=h),ZN(o,l,h,g))};function cP(o,l,d,h){return h?!!(l==="innerHTML"||l==="textContent"||l in o&&g_.test(l)&&Pe(d)):l==="spellcheck"||l==="draggable"||l==="translate"||l==="form"||l==="list"&&o.tagName==="INPUT"||l==="type"&&o.tagName==="TEXTAREA"||g_.test(l)&&Dt(d)?!1:l in o}function NA(o,l){const d=ur(o);class h extends Lc{constructor(m){super(d,m,l)}}return h.def=d,h}const dP=o=>NA(o,GA),uP=typeof HTMLElement<"u"?HTMLElement:class{};class Lc extends uP{constructor(l,d={},h){super(),this._def=l,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&h?h(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,An(()=>{this._connected||(Fh(null,this.shadowRoot),this._instance=null)})}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let h=0;h<this.attributes.length;h++)this._setAttr(this.attributes[h].name);new MutationObserver(h=>{for(const g of h)this._setAttr(g.attributeName)}).observe(this,{attributes:!0});const l=h=>{const{props:g,styles:m}=h,b=!xe(g),_=g?b?Object.keys(g):g:[];let k;if(b)for(const A in this._props){const y=g[A];(y===Number||y&&y.type===Number)&&(this._props[A]=pi(this._props[A]),(k||(k=Object.create(null)))[A]=!0)}this._numberProps=k;for(const A of Object.keys(this))A[0]!=="_"&&this._setProp(A,this[A],!0,!1);for(const A of _.map(gn))Object.defineProperty(this,A,{get(){return this._getProp(A)},set(y){this._setProp(A,y)}});this._applyStyles(m),this._update()},d=this._def.__asyncLoader;d?d().then(l):l(this._def)}_setAttr(l){let d=this.getAttribute(l);this._numberProps&&this._numberProps[l]&&(d=pi(d)),this._setProp(gn(l),d,!1)}_getProp(l){return this._props[l]}_setProp(l,d,h=!0,g=!0){d!==this._props[l]&&(this._props[l]=d,g&&this._instance&&this._update(),h&&(d===!0?this.setAttribute(So(l),""):typeof d=="string"||typeof d=="number"?this.setAttribute(So(l),d+""):d||this.removeAttribute(So(l))))}_update(){Fh(this._createVNode(),this.shadowRoot)}_createVNode(){const l=L(this._def,Nt({},this._props));return this._instance||(l.ce=d=>{this._instance=d,d.isCE=!0,d.emit=(g,...m)=>{this.dispatchEvent(new CustomEvent(g,{detail:m}))};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof Lc){d.parent=h._instance;break}}),l}_applyStyles(l){l&&l.forEach(d=>{const h=document.createElement("style");h.textContent=d,this.shadowRoot.appendChild(h)})}}function hP(o="$style"){{const l=Io();if(!l)return st;const d=l.type.__cssModules;if(!d)return st;const h=d[o];return h||st}}function gP(o){const l=Io();if(!l)return;const d=()=>Rh(l.subTree,o(l.proxy));KC(d),Hn(()=>{const h=new MutationObserver(d);h.observe(l.subTree.el.parentNode,{childList:!0}),Nc(()=>h.disconnect())})}function Rh(o,l){if(o.shapeFlag&128){const d=o.suspense;o=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{Rh(d.activeBranch,l)})}for(;o.component;)o=o.component.subTree;if(o.shapeFlag&1&&o.el)f_(o.el,l);else if(o.type===We)o.children.forEach(d=>Rh(d,l));else if(o.type===ir){let{el:d,anchor:h}=o;for(;d&&(f_(d,l),d!==h);)d=d.nextSibling}}function f_(o,l){if(o.nodeType===1){const d=o.style;for(const h in l)d.setProperty(`--${h}`,l[h])}}const ri="transition",Ys="animation",uo=(o,{slots:l})=>To(Ig,zA(o),l);uo.displayName="Transition";const PA={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fP=uo.props=Nt({},Ig.props,PA),Yi=(o,l=[])=>{xe(o)?o.forEach(d=>d(...l)):o&&o(...l)},m_=o=>o?xe(o)?o.some(l=>l.length>1):o.length>1:!1;function zA(o){const l={};for(const J in o)J in PA||(l[J]=o[J]);if(o.css===!1)return l;const{name:d="v",type:h,duration:g,enterFromClass:m=`${d}-enter-from`,enterActiveClass:b=`${d}-enter-active`,enterToClass:_=`${d}-enter-to`,appearFromClass:k=m,appearActiveClass:A=b,appearToClass:y=_,leaveFromClass:x=`${d}-leave-from`,leaveActiveClass:v=`${d}-leave-active`,leaveToClass:E=`${d}-leave-to`}=o,N=mP(g),P=N&&N[0],j=N&&N[1],{onBeforeEnter:M,onEnter:T,onEnterCancelled:O,onLeave:G,onLeaveCancelled:H,onBeforeAppear:Q=M,onAppear:R=T,onAppearCancelled:V=O}=l,W=(J,ne,ae)=>{li(J,ne?y:_),li(J,ne?A:b),ae&&ae()},K=(J,ne)=>{J._isLeaving=!1,li(J,x),li(J,E),li(J,v),ne&&ne()},ee=J=>(ne,ae)=>{const be=J?R:T,he=()=>W(ne,J,ae);Yi(be,[ne,he]),p_(()=>{li(ne,J?k:m),jo(ne,J?y:_),m_(be)||b_(ne,h,P,he)})};return Nt(l,{onBeforeEnter(J){Yi(M,[J]),jo(J,m),jo(J,b)},onBeforeAppear(J){Yi(Q,[J]),jo(J,k),jo(J,A)},onEnter:ee(!1),onAppear:ee(!0),onLeave(J,ne){J._isLeaving=!0;const ae=()=>K(J,ne);jo(J,x),OA(),jo(J,v),p_(()=>{!J._isLeaving||(li(J,x),jo(J,E),m_(G)||b_(J,h,j,ae))}),Yi(G,[J,ae])},onEnterCancelled(J){W(J,!1),Yi(O,[J])},onAppearCancelled(J){W(J,!0),Yi(V,[J])},onLeaveCancelled(J){K(J),Yi(H,[J])}})}function mP(o){if(o==null)return null;if(Pt(o))return[lh(o.enter),lh(o.leave)];{const l=lh(o);return[l,l]}}function lh(o){return pi(o)}function jo(o,l){l.split(/\s+/).forEach(d=>d&&o.classList.add(d)),(o._vtc||(o._vtc=new Set)).add(l)}function li(o,l){l.split(/\s+/).forEach(h=>h&&o.classList.remove(h));const{_vtc:d}=o;d&&(d.delete(l),d.size||(o._vtc=void 0))}function p_(o){requestAnimationFrame(()=>{requestAnimationFrame(o)})}let pP=0;function b_(o,l,d,h){const g=o._endId=++pP,m=()=>{g===o._endId&&h()};if(d)return setTimeout(m,d);const{type:b,timeout:_,propCount:k}=LA(o,l);if(!b)return h();const A=b+"end";let y=0;const x=()=>{o.removeEventListener(A,v),m()},v=E=>{E.target===o&&++y>=k&&x()};setTimeout(()=>{y<k&&x()},_+1),o.addEventListener(A,v)}function LA(o,l){const d=window.getComputedStyle(o),h=N=>(d[N]||"").split(", "),g=h(ri+"Delay"),m=h(ri+"Duration"),b=k_(g,m),_=h(Ys+"Delay"),k=h(Ys+"Duration"),A=k_(_,k);let y=null,x=0,v=0;l===ri?b>0&&(y=ri,x=b,v=m.length):l===Ys?A>0&&(y=Ys,x=A,v=k.length):(x=Math.max(b,A),y=x>0?b>A?ri:Ys:null,v=y?y===ri?m.length:k.length:0);const E=y===ri&&/\b(transform|all)(,|$)/.test(d[ri+"Property"]);return{type:y,timeout:x,propCount:v,hasTransform:E}}function k_(o,l){for(;o.length<l.length;)o=o.concat(o);return Math.max(...l.map((d,h)=>w_(d)+w_(o[h])))}function w_(o){return Number(o.slice(0,-1).replace(",","."))*1e3}function OA(){return document.body.offsetHeight}const RA=new WeakMap,FA=new WeakMap,bP={name:"TransitionGroup",props:Nt({},fP,{tag:String,moveClass:String}),setup(o,{slots:l}){const d=Io(),h=Dg();let g,m;return Bc(()=>{if(!g.length)return;const b=o.moveClass||`${o.name||"v"}-move`;if(!_P(g[0].el,d.vnode.el,b))return;g.forEach(kP),g.forEach(wP);const _=g.filter(vP);OA(),_.forEach(k=>{const A=k.el,y=A.style;jo(A,b),y.transform=y.webkitTransform=y.transitionDuration="";const x=A._moveCb=v=>{v&&v.target!==A||(!v||/transform$/.test(v.propertyName))&&(A.removeEventListener("transitionend",x),A._moveCb=null,li(A,b))};A.addEventListener("transitionend",x)})}),()=>{const b=qe(o),_=zA(b);let k=b.tag||We;g=m,m=l.default?Tc(l.default()):[];for(let A=0;A<m.length;A++){const y=m[A];y.key!=null&&rr(y,os(y,_,h,d))}if(g)for(let A=0;A<g.length;A++){const y=g[A];rr(y,os(y,_,h,d)),RA.set(y,y.el.getBoundingClientRect())}return L(k,null,m)}}},jA=bP;function kP(o){const l=o.el;l._moveCb&&l._moveCb(),l._enterCb&&l._enterCb()}function wP(o){FA.set(o,o.el.getBoundingClientRect())}function vP(o){const l=RA.get(o),d=FA.get(o),h=l.left-d.left,g=l.top-d.top;if(h||g){const m=o.el.style;return m.transform=m.webkitTransform=`translate(${h}px,${g}px)`,m.transitionDuration="0s",o}}function _P(o,l,d){const h=o.cloneNode();o._vtc&&o._vtc.forEach(b=>{b.split(/\s+/).forEach(_=>_&&h.classList.remove(_))}),d.split(/\s+/).forEach(b=>b&&h.classList.add(b)),h.style.display="none";const g=l.nodeType===1?l:l.parentNode;g.appendChild(h);const{hasTransform:m}=LA(h);return g.removeChild(h),m}const vi=o=>{const l=o.props["onUpdate:modelValue"]||!1;return xe(l)?d=>Zr(l,d):l};function CP(o){o.target.composing=!0}function v_(o){const l=o.target;l.composing&&(l.composing=!1,l.dispatchEvent(new Event("input")))}const cc={created(o,{modifiers:{lazy:l,trim:d,number:h}},g){o._assign=vi(g);const m=h||g.props&&g.props.type==="number";Ho(o,l?"change":"input",b=>{if(b.target.composing)return;let _=o.value;d&&(_=_.trim()),m&&(_=pi(_)),o._assign(_)}),d&&Ho(o,"change",()=>{o.value=o.value.trim()}),l||(Ho(o,"compositionstart",CP),Ho(o,"compositionend",v_),Ho(o,"change",v_))},mounted(o,{value:l}){o.value=l==null?"":l},beforeUpdate(o,{value:l,modifiers:{lazy:d,trim:h,number:g}},m){if(o._assign=vi(m),o.composing||document.activeElement===o&&o.type!=="range"&&(d||h&&o.value.trim()===l||(g||o.type==="number")&&pi(o.value)===l))return;const b=l==null?"":l;o.value!==b&&(o.value=b)}},Fg={deep:!0,created(o,l,d){o._assign=vi(d),Ho(o,"change",()=>{const h=o._modelValue,g=ss(o),m=o.checked,b=o._assign;if(xe(h)){const _=vc(h,g),k=_!==-1;if(m&&!k)b(h.concat(g));else if(!m&&k){const A=[...h];A.splice(_,1),b(A)}}else if(ar(h)){const _=new Set(h);m?_.add(g):_.delete(g),b(_)}else b(HA(o,m))})},mounted:__,beforeUpdate(o,l,d){o._assign=vi(d),__(o,l,d)}};function __(o,{value:l,oldValue:d},h){o._modelValue=l,xe(l)?o.checked=vc(l,h.props.value)>-1:ar(l)?o.checked=l.has(h.props.value):l!==d&&(o.checked=mi(l,HA(o,!0)))}const jg={created(o,{value:l},d){o.checked=mi(l,d.props.value),o._assign=vi(d),Ho(o,"change",()=>{o._assign(ss(o))})},beforeUpdate(o,{value:l,oldValue:d},h){o._assign=vi(h),l!==d&&(o.checked=mi(l,h.props.value))}},VA={deep:!0,created(o,{value:l,modifiers:{number:d}},h){const g=ar(l);Ho(o,"change",()=>{const m=Array.prototype.filter.call(o.options,b=>b.selected).map(b=>d?pi(ss(b)):ss(b));o._assign(o.multiple?g?new Set(m):m:m[0])}),o._assign=vi(h)},mounted(o,{value:l}){C_(o,l)},beforeUpdate(o,l,d){o._assign=vi(d)},updated(o,{value:l}){C_(o,l)}};function C_(o,l){const d=o.multiple;if(!(d&&!xe(l)&&!ar(l))){for(let h=0,g=o.options.length;h<g;h++){const m=o.options[h],b=ss(m);if(d)xe(l)?m.selected=vc(l,b)>-1:m.selected=l.has(b);else if(mi(ss(m),l)){o.selectedIndex!==h&&(o.selectedIndex=h);return}}!d&&o.selectedIndex!==-1&&(o.selectedIndex=-1)}}function ss(o){return"_value"in o?o._value:o.value}function HA(o,l){const d=l?"_trueValue":"_falseValue";return d in o?o[d]:l}const Vg={created(o,l,d){$l(o,l,d,null,"created")},mounted(o,l,d){$l(o,l,d,null,"mounted")},beforeUpdate(o,l,d,h){$l(o,l,d,h,"beforeUpdate")},updated(o,l,d,h){$l(o,l,d,h,"updated")}};function UA(o,l){switch(o){case"SELECT":return VA;case"TEXTAREA":return cc;default:switch(l){case"checkbox":return Fg;case"radio":return jg;default:return cc}}}function $l(o,l,d,h,g){const b=UA(o.tagName,d.props&&d.props.type)[g];b&&b(o,l,d,h)}function AP(){cc.getSSRProps=({value:o})=>({value:o}),jg.getSSRProps=({value:o},l)=>{if(l.props&&mi(l.props.value,o))return{checked:!0}},Fg.getSSRProps=({value:o},l)=>{if(xe(o)){if(l.props&&vc(o,l.props.value)>-1)return{checked:!0}}else if(ar(o)){if(l.props&&o.has(l.props.value))return{checked:!0}}else if(o)return{checked:!0}},Vg.getSSRProps=(o,l)=>{if(typeof l.type!="string")return;const d=UA(l.type.toUpperCase(),l.props&&l.props.type);if(d.getSSRProps)return d.getSSRProps(o,l)}}const yP=["ctrl","shift","alt","meta"],xP={stop:o=>o.stopPropagation(),prevent:o=>o.preventDefault(),self:o=>o.target!==o.currentTarget,ctrl:o=>!o.ctrlKey,shift:o=>!o.shiftKey,alt:o=>!o.altKey,meta:o=>!o.metaKey,left:o=>"button"in o&&o.button!==0,middle:o=>"button"in o&&o.button!==1,right:o=>"button"in o&&o.button!==2,exact:(o,l)=>yP.some(d=>o[`${d}Key`]&&!l.includes(d))},Hg=(o,l)=>(d,...h)=>{for(let g=0;g<l.length;g++){const m=xP[l[g]];if(m&&m(d,l))return}return o(d,...h)},EP={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},SP=(o,l)=>d=>{if(!("key"in d))return;const h=So(d.key);if(l.some(g=>g===h||EP[g]===h))return o(d)},yi={beforeMount(o,{value:l},{transition:d}){o._vod=o.style.display==="none"?"":o.style.display,d&&l?d.beforeEnter(o):Qs(o,l)},mounted(o,{value:l},{transition:d}){d&&l&&d.enter(o)},updated(o,{value:l,oldValue:d},{transition:h}){!l!=!d&&(h?l?(h.beforeEnter(o),Qs(o,!0),h.enter(o)):h.leave(o,()=>{Qs(o,!1)}):Qs(o,l))},beforeUnmount(o,{value:l}){Qs(o,l)}};function Qs(o,l){o.style.display=l?o._vod:"none"}function DP(){yi.getSSRProps=({value:o})=>{if(!o)return{style:{display:"none"}}}}const $A=Nt({patchProp:lP},GN);let da,A_=!1;function WA(){return da||(da=mA($A))}function qA(){return da=A_?da:pA($A),A_=!0,da}const Fh=(...o)=>{WA().render(...o)},GA=(...o)=>{qA().hydrate(...o)},KA=(...o)=>{const l=WA().createApp(...o),{mount:d}=l;return l.mount=h=>{const g=YA(h);if(!g)return;const m=l._component;!Pe(m)&&!m.render&&!m.template&&(m.template=g.innerHTML),g.innerHTML="";const b=d(g,!1,g instanceof SVGElement);return g instanceof Element&&(g.removeAttribute("v-cloak"),g.setAttribute("data-v-app","")),b},l},IP=(...o)=>{const l=qA().createApp(...o),{mount:d}=l;return l.mount=h=>{const g=YA(h);if(g)return d(g,!0,g instanceof SVGElement)},l};function YA(o){return Dt(o)?document.querySelector(o):o}let y_=!1;const TP=()=>{y_||(y_=!0,AP(),DP())},MP=()=>{},BP=Object.freeze(Object.defineProperty({__proto__:null,compile:MP,EffectScope:ug,ReactiveEffect:Ta,customRef:wB,effect:H4,effectScope:us,getCurrentScope:F4,isProxy:mg,isReactive:nr,isReadonly:ns,isRef:kt,isShallow:tc,markRaw:pg,onScopeDispose:Ci,proxyRefs:vg,reactive:Qt,readonly:hs,ref:we,shallowReactive:fg,shallowReadonly:fB,shallowRef:wg,stop:U4,toRaw:qe,toRef:Ve,toRefs:_g,triggerRef:pB,unref:Zt,camelize:gn,capitalize:ds,normalizeClass:Fn,normalizeProps:_C,normalizeStyle:cs,toDisplayString:tn,toHandlerKey:ia,BaseTransition:Ig,Comment:on,Fragment:We,KeepAlive:QB,Static:ir,Suspense:jB,Teleport:kA,Text:is,callWithAsyncErrorHandling:Rn,callWithErrorHandling:Do,cloneVNode:co,compatUtils:WN,computed:q,createBlock:Jn,createCommentVNode:so,createElementBlock:yt,createElementVNode:Le,createHydrationRenderer:pA,createPropsRestProxy:ON,createRenderer:mA,createSlots:rA,createStaticVNode:vN,createTextVNode:Et,createVNode:L,defineAsyncComponent:KB,defineComponent:ur,defineEmits:MN,defineExpose:BN,defineProps:TN,get devtools(){return Gr},getCurrentInstance:Io,getTransitionRawChildren:Tc,guardReactiveProps:Og,h:To,handleError:dr,initCustomFormatter:jN,inject:et,isMemoSame:TA,isRuntimeOnly:xN,isVNode:ki,mergeDefaults:LN,mergeProps:xt,nextTick:An,onActivated:Tg,onBeforeMount:Na,onBeforeUnmount:yn,onBeforeUpdate:JC,onDeactivated:Mg,onErrorCaptured:nA,onMounted:Hn,onRenderTracked:tA,onRenderTriggered:eA,onServerPrefetch:XC,onUnmounted:Nc,onUpdated:Bc,openBlock:$e,popScopeId:NB,provide:Ht,pushScopeId:BB,queuePostFlushCb:xg,registerRuntimeCompiler:yN,renderList:hi,renderSlot:XB,resolveComponent:Ng,resolveDirective:Ai,resolveDynamicComponent:iA,resolveFilter:$N,resolveTransitionHooks:os,setBlockTracking:Nh,setDevtoolsHook:$C,setTransitionHooks:rr,ssrContextKey:IA,ssrUtils:UN,toHandlers:Eh,transformVNodeArgs:kN,useAttrs:zN,useSSRContext:FN,useSlots:PN,useTransitionState:Dg,version:MA,warn:Cg,watch:Ze,watchEffect:Go,watchPostEffect:KC,watchSyncEffect:WB,withAsyncContext:RN,withCtx:Qe,withDefaults:NN,withDirectives:Vn,withMemo:VN,withScopeId:PB,Transition:uo,TransitionGroup:jA,VueElement:Lc,createApp:KA,createSSRApp:IP,defineCustomElement:NA,defineSSRCustomElement:dP,hydrate:GA,initDirectivesForSSR:TP,render:Fh,useCssModule:hP,useCssVars:gP,vModelCheckbox:Fg,vModelDynamic:Vg,vModelRadio:jg,vModelSelect:VA,vModelText:cc,vShow:yi,withKeys:SP,withModifiers:Hg},Symbol.toStringTag,{value:"Module"}));function x_(o,l,d){NP(o,l),l.set(o,d)}function NP(o,l){if(l.has(o))throw new TypeError("Cannot initialize the same private elements twice on an object")}function PP(o,l,d){var h=QA(o,l,"set");return zP(o,h,d),d}function zP(o,l,d){if(l.set)l.set.call(o,d);else{if(!l.writable)throw new TypeError("attempted to set read only private field");l.value=d}}function Qi(o,l){var d=QA(o,l,"get");return LP(o,d)}function QA(o,l,d){if(!l.has(o))throw new TypeError("attempted to "+d+" private field on non-instance");return l.get(o)}function LP(o,l){return l.get?l.get.call(o):l.value}function ZA(o,l,d){const h=l.length-1;if(h<0)return o===void 0?d:o;for(let g=0;g<h;g++){if(o==null)return d;o=o[l[g]]}return o==null||o[l[h]]===void 0?d:o[l[h]]}function Oc(o,l){if(o===l)return!0;if(o instanceof Date&&l instanceof Date&&o.getTime()!==l.getTime()||o!==Object(o)||l!==Object(l))return!1;const d=Object.keys(o);return d.length!==Object.keys(l).length?!1:d.every(h=>Oc(o[h],l[h]))}function jh(o,l,d){return o==null||!l||typeof l!="string"?d:o[l]!==void 0?o[l]:(l=l.replace(/\[(\w+)\]/g,".$1"),l=l.replace(/^\./,""),ZA(o,l.split("."),d))}function Uo(o,l,d){if(l==null)return o===void 0?d:o;if(o!==Object(o))return d;if(typeof l=="string")return jh(o,l,d);if(Array.isArray(l))return ZA(o,l,d);if(typeof l!="function")return d;const h=l(o,d);return typeof h>"u"?d:h}function OP(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:o},(d,h)=>l+h)}function Oe(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(o==null||o===""))return isNaN(+o)?String(o):isFinite(+o)?`${Number(o)}${l}`:void 0}function Vh(o){return o!==null&&typeof o=="object"&&!Array.isArray(o)}function RP(o){return o==null?void 0:o.$el}const E_=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function gs(o,l){const d=Object.create(null),h=Object.create(null);for(const g in o)l.some(m=>m instanceof RegExp?m.test(g):m===g)?d[g]=o[g]:h[g]=o[g];return[d,h]}function JA(o){return gs(o,["class","style","id",/^data-/])}function fi(o){return o==null?[]:Array.isArray(o)?o:[o]}function Hh(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(l,Math.min(d,o))}function Wo(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=arguments.length>2?arguments[2]:void 0;const h={};for(const g in o)h[g]=o[g];for(const g in l){const m=o[g],b=l[g];if(Vh(m)&&Vh(b)){h[g]=Wo(m,b,d);continue}if(Array.isArray(m)&&Array.isArray(b)&&d){h[g]=d(m,b);continue}h[g]=b}return h}function XA(o){return o.map(l=>l.type===We?XA(l.children):l).flat()}function Ug(){return(arguments.length>0&&arguments[0]!==void 0?arguments[0]:"").replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function ua(o,l){if(!l||typeof l!="object")return[];if(Array.isArray(l))return l.map(d=>ua(o,d)).flat(1);if(Array.isArray(l.children))return l.children.map(d=>ua(o,d)).flat(1);if(l.component){if(Object.getOwnPropertySymbols(l.component.provides).includes(o))return[l.component];if(l.component.subTree)return ua(o,l.component.subTree).flat(1)}return[]}var Wl=new WeakMap,Fr=new WeakMap;class FP{constructor(l){x_(this,Wl,{writable:!0,value:[]}),x_(this,Fr,{writable:!0,value:0}),this.size=l}push(l){Qi(this,Wl)[Qi(this,Fr)]=l,PP(this,Fr,(Qi(this,Fr)+1)%this.size)}values(){return Qi(this,Wl).slice(Qi(this,Fr)).concat(Qi(this,Wl).slice(0,Qi(this,Fr)))}}function $g(o){const l={},d=q(o);for(const h in d.value)l[h]=Ve(d.value,h);return Ze(d,h=>{for(const g in h)l[g].value=h[g]},{flush:"sync"}),l}function dc(o,l){return o.includes(l)}const ey=["top","bottom"],jP=["start","end","left","right"];function Uh(o,l){let[d,h]=o.split(" ");return h||(h=dc(ey,d)?"start":dc(jP,d)?"top":"center"),{side:$h(d,l),align:$h(h,l)}}function $h(o,l){return o==="start"?l?"right":"left":o==="end"?l?"left":"right":o}function ch(o){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.side],align:o.align}}function dh(o){return{side:o.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[o.align]}}function S_(o){return{side:o.align,align:o.side}}function D_(o){return dc(ey,o.side)?"y":"x"}class Xr{constructor(l){let{x:d,y:h,width:g,height:m}=l;this.x=d,this.y=h,this.width=g,this.height=m}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function I_(o,l){return{x:{before:Math.max(0,l.left-o.left),after:Math.max(0,o.right-l.right)},y:{before:Math.max(0,l.top-o.top),after:Math.max(0,o.bottom-l.bottom)}}}function Wg(o){const l=o.getBoundingClientRect(),d=getComputedStyle(o),h=d.transform;if(h){let g,m,b,_,k;if(h.startsWith("matrix3d("))g=h.slice(9,-1).split(/, /),m=+g[0],b=+g[5],_=+g[12],k=+g[13];else if(h.startsWith("matrix("))g=h.slice(7,-1).split(/, /),m=+g[0],b=+g[3],_=+g[4],k=+g[5];else return new Xr(l);const A=d.transformOrigin,y=l.x-_-(1-m)*parseFloat(A),x=l.y-k-(1-b)*parseFloat(A.slice(A.indexOf(" ")+1)),v=m?l.width/m:o.offsetWidth+1,E=b?l.height/b:o.offsetHeight+1;return new Xr({x:y,y:x,width:v,height:E})}else return new Xr(l)}function ty(o,l,d){if(d&&(l={_isVue:!0,$parent:d,$options:l}),l){if(l.$_alreadyWarned=l.$_alreadyWarned||[],l.$_alreadyWarned.includes(o))return;l.$_alreadyWarned.push(o)}return`[Vuetify] ${o}`+(l?UP(l):"")}function es(o,l,d){const h=ty(o,l,d);h!=null&&console.warn(h)}function Wh(o,l,d){const h=ty(o,l,d);h!=null&&console.error(h)}const VP=/(?:^|[-_])(\w)/g,HP=o=>o.replace(VP,l=>l.toUpperCase()).replace(/[-_]/g,"");function uh(o,l){if(o.$root===o)return"<Root>";const d=typeof o=="function"&&o.cid!=null?o.options:o._isVue?o.$options||o.constructor.options:o||{};let h=d.name||d._componentTag;const g=d.__file;if(!h&&g){const m=g.match(/([^/\\]+)\.vue$/);h=m==null?void 0:m[1]}return(h?`<${HP(h)}>`:"<Anonymous>")+(g&&l!==!1?` at ${g}`:"")}function UP(o){if(o._isVue&&o.$parent){const l=[];let d=0;for(;o;){if(l.length>0){const h=l[l.length-1];if(h.constructor===o.constructor){d++,o=o.$parent;continue}else d>0&&(l[l.length-1]=[h,d],d=0)}l.push(o),o=o.$parent}return`

found in

`+l.map((h,g)=>`${g===0?"---> ":" ".repeat(5+g*2)}${Array.isArray(h)?`${uh(h[0])}... (${h[1]} recursive calls)`:uh(h)}`).join(`
`)}else return`

(found in ${uh(o)})`}const $P=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],WP=o=>o<=.0031308?o*12.92:1.055*o**(1/2.4)-.055,qP=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],GP=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4;function ny(o){const l=Array(3),d=WP,h=$P;for(let g=0;g<3;++g)l[g]=Math.round(Hh(d(h[g][0]*o[0]+h[g][1]*o[1]+h[g][2]*o[2]))*255);return(l[0]<<16)+(l[1]<<8)+(l[2]<<0)}function qg(o){const l=[0,0,0],d=GP,h=qP,g=d((o>>16&255)/255),m=d((o>>8&255)/255),b=d((o>>0&255)/255);for(let _=0;_<3;++_)l[_]=h[_][0]*g+h[_][1]*m+h[_][2]*b;return l}const uc=.20689655172413793,KP=o=>o>uc**3?Math.cbrt(o):o/(3*uc**2)+4/29,YP=o=>o>uc?o**3:3*uc**2*(o-4/29);function oy(o){const l=KP,d=l(o[1]);return[116*d-16,500*(l(o[0]/.95047)-d),200*(d-l(o[2]/1.08883))]}function iy(o){const l=YP,d=(o[0]+16)/116;return[l(d+o[1]/500)*.95047,l(d),l(d-o[2]/200)*1.08883]}function T_(o){return!!o&&/^(#|var\(--|(rgb|hsl)a?\()/.test(o)}function hc(o){let l;if(typeof o=="number")l=o;else if(typeof o=="string"){let d=o.startsWith("#")?o.substring(1):o;d.length===3&&(d=d.split("").map(h=>h+h).join("")),d.length!==6&&d.length!==8&&es(`'${o}' is not a valid rgb color`),l=parseInt(d,16)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${o==null?o:o.constructor.name} instead`);return l<0?(es(`Colors cannot be negative: '${o}'`),l=0):(l>4294967295||isNaN(l))&&(es(`'${o}' is not a valid rgb color`),l=16777215),l}function QP(o){let l=o.toString(16);return l.length<6&&(l="0".repeat(6-l.length)+l),"#"+l}function ry(o){const l=hc(o);return{r:(l&16711680)>>16,g:(l&65280)>>8,b:l&255}}function ZP(o,l){const d=oy(qg(o));return d[0]=d[0]+l*10,ny(iy(d))}function JP(o,l){const d=oy(qg(o));return d[0]=d[0]-l*10,ny(iy(d))}function XP(o){const l=hc(o);return qg(l)[1]}function sn(o,l){const d=Io();if(!d)throw new Error(`[Vuetify] ${o} ${l||"must be called from inside a setup function"}`);return d}function Yo(){var o;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";return Ug((o=sn(l).type)==null?void 0:o.name)}let sy=0,Xl=new WeakMap;function go(){const o=sn("getUid");if(Xl.has(o))return Xl.get(o);{const l=sy++;return Xl.set(o,l),l}}go.reset=()=>{sy=0,Xl=new WeakMap};function ez(o){const{provides:l}=sn("injectSelf");if(l&&o in l)return l[o]}function tz(o,l){var d,h;return((d=o.props)==null?void 0:d.hasOwnProperty(l))||((h=o.props)==null?void 0:h.hasOwnProperty(Ug(l)))}const tt=function(l){var d;if(l._setup=(d=l._setup)!=null?d:l.setup,!l.name)return es("The component is missing an explicit name, unable to generate default prop value"),l;if(l._setup){var h;l.props=(h=l.props)!=null?h:{},l.props._as=String,l.setup=function(m,b){const _=Io(),k=cy(),A=wg(),y=fg({...qe(m)});Go(()=>{var E;const N=k.value.global,P=k.value[(E=m._as)!=null?E:l.name];if(P){const T=Object.entries(P).filter(O=>{let[G]=O;return G.startsWith("V")});T.length&&(A.value=Object.fromEntries(T))}for(const T of Object.keys(m)){let O;if(tz(_.vnode,T))O=m[T];else{var j,M;O=(j=(M=P==null?void 0:P[T])!=null?M:N==null?void 0:N[T])!=null?j:m[T]}y[T]!==O&&(y[T]=O)}});const x=l._setup(y,b);let v;return Ze(A,(E,N)=>{!E&&v?v.stop():E&&!N&&(v=us(),v.run(()=>{var P,j;fs(Wo((P=(j=ez(_a))==null?void 0:j.value)!=null?P:{},E))}))},{immediate:!0}),x}}return l};function Xn(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return l=>(o?tt:ur)(l)}function ay(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",d=arguments.length>2?arguments[2]:void 0;return tt({name:d!=null?d:ds(gn(o.replace(/__/g,"-"))),props:{tag:{type:String,default:l}},setup(h,g){let{slots:m}=g;return()=>{var b;return To(h.tag,{class:o},(b=m.default)==null?void 0:b.call(m))}}})}function ly(o){if(typeof o.getRootNode!="function"){for(;o.parentNode;)o=o.parentNode;return o!==document?null:document}const l=o.getRootNode();return l!==document&&l.getRootNode({composed:!0})!==document?null:l}const gc="cubic-bezier(0.4, 0, 0.2, 1)",nz="cubic-bezier(0.0, 0, 0.2, 1)",oz="cubic-bezier(0.4, 0, 1, 1)";function iz(o){for(;o;){if(Gg(o))return o;o=o.parentElement}return document.scrollingElement}function fc(o){const l=[];for(;o;)Gg(o)&&l.push(o),o=o.parentElement;return l}function Gg(o){if(!o||o.nodeType!==Node.ELEMENT_NODE)return!1;const l=window.getComputedStyle(o);return l.overflowY==="scroll"||l.overflowY==="auto"&&o.scrollHeight>o.clientHeight}const Bt=typeof window<"u",Kg=Bt&&"IntersectionObserver"in window,rz=Bt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),qh=Bt&&CSS.supports("selector(:focus-visible)");function sz(o){for(;o;){if(window.getComputedStyle(o).position==="fixed")return!0;o=o.offsetParent}return!1}function Ge(o,l){return d=>Object.keys(o).reduce((h,g)=>{const b=typeof o[g]=="object"&&o[g]!=null&&!Array.isArray(o[g])?o[g]:{type:o[g]};return d&&g in d?h[g]={...b,default:d[g]}:h[g]=b,l&&(h[g].source=l),h},{})}function rt(o){const l=sn("useRender");l.render=o}const _a=Symbol.for("vuetify:defaults");function az(o){return we(o!=null?o:{})}function cy(){const o=et(_a);if(!o)throw new Error("[Vuetify] Could not find defaults instance");return o}function fs(o,l){const d=cy(),h=we(o),g=q(()=>{const m=Zt(l==null?void 0:l.scoped),b=Zt(l==null?void 0:l.reset),_=Zt(l==null?void 0:l.root);let k=Wo(h.value,{prev:d.value});if(m)return k;if(b||_){const A=Number(b||1/0);for(let y=0;y<=A&&k.prev;y++)k=k.prev;return k}return Wo(k.prev,k)});return Ht(_a,g),g}const Gh=Symbol.for("vuetify:display"),M_={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},lz=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M_;return Wo(M_,o)};function B_(o){return Bt&&!o?window.innerWidth:0}function N_(o){return Bt&&!o?window.innerHeight:0}function cz(){const o=Bt?window.navigator.userAgent:"ssr";function l(N){return Boolean(o.match(N))}const d=l(/android/i),h=l(/iphone|ipad|ipod/i),g=l(/cordova/i),m=l(/electron/i),b=l(/chrome/i),_=l(/edge/i),k=l(/firefox/i),A=l(/opera/i),y=l(/win/i),x=l(/mac/i),v=l(/linux/i),E=l(/ssr/i);return{android:d,ios:h,cordova:g,electron:m,chrome:b,edge:_,firefox:k,opera:A,win:y,mac:x,linux:v,touch:rz,ssr:E}}function dz(o,l){const{thresholds:d,mobileBreakpoint:h}=lz(o),g=we(N_(l)),m=cz(),b=Qt({}),_=we(B_(l));function k(){g.value=N_(),_.value=B_()}return l&&An(()=>k()),Go(()=>{const A=_.value<d.sm,y=_.value<d.md&&!A,x=_.value<d.lg&&!(y||A),v=_.value<d.xl&&!(x||y||A),E=_.value<d.xxl&&!(v||x||y||A),N=_.value>=d.xxl,P=A?"xs":y?"sm":x?"md":v?"lg":E?"xl":"xxl",j=typeof h=="number"?h:d[h],M=m.ssr?m.android||m.ios||m.opera:_.value<j;b.xs=A,b.sm=y,b.md=x,b.lg=v,b.xl=E,b.xxl=N,b.smAndUp=!A,b.mdAndUp=!(A||y),b.lgAndUp=!(A||y||x),b.xlAndUp=!(A||y||x||v),b.smAndDown=!(x||v||E||N),b.mdAndDown=!(v||E||N),b.lgAndDown=!(E||N),b.xlAndDown=!N,b.name=P,b.height=g.value,b.width=_.value,b.mobile=M,b.mobileBreakpoint=h,b.platform=m,b.thresholds=d}),Bt&&window.addEventListener("resize",k,{passive:!0}),_g(b)}function uz(){const o=et(Gh);if(!o)throw new Error("Could not find Vuetify display injection");return o}const hz={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},gz={component:o=>To(dy,{...o,class:"mdi"})},vt=[String,Function,Object],Kh=Symbol.for("vuetify:icons"),Rc=Ge({icon:{type:vt,required:!0},tag:{type:String,required:!0}},"icon"),fz=tt({name:"VComponentIcon",props:Rc(),setup(o){return()=>L(o.tag,null,{default:()=>[L(o.icon,null,null)]})}}),mz=tt({name:"VSvgIcon",inheritAttrs:!1,props:Rc(),setup(o,l){let{attrs:d}=l;return()=>L(o.tag,xt(d,{style:null}),{default:()=>[L("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[L("path",{d:o.icon},null)])]})}});tt({name:"VLigatureIcon",props:Rc(),setup(o){return()=>L(o.tag,null,{default:()=>[o.icon]})}});const dy=tt({name:"VClassIcon",props:Rc(),setup(o){return()=>L(o.tag,{class:o.icon},null)}}),pz={svg:{component:mz},class:{component:dy}};function bz(o){return Wo({defaultSet:"mdi",sets:{...pz,mdi:gz},aliases:hz},o)}const kz=o=>{const l=et(Kh);if(!l)throw new Error("Missing Vuetify Icons provide!");return{iconData:q(()=>{const h=kt(o)?o.value:o.icon;if(!h)throw new Error("Icon value is undefined or null");let g=h;if(typeof h=="string"&&h.includes("$")){var m;g=(m=l.aliases)==null?void 0:m[h.slice(h.indexOf("$")+1)]}if(!g)throw new Error(`Could not find aliased icon "${h}"`);if(typeof g!="string")return{component:fz,icon:g};const b=Object.keys(l.sets).find(A=>typeof g=="string"&&g.startsWith(`${A}:`)),_=b?g.slice(b.length+1):g;return{component:l.sets[b!=null?b:l.defaultSet].component,icon:_}})}},wz={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}},vz={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Yg=Symbol.for("vuetify:rtl");function _z(o,l){var d;return Cz({rtl:{...vz,...(d=l==null?void 0:l.rtl)!=null?d:{}},isRtl:we(!1),rtlClasses:we("")},o)}function Cz(o,l,d){const h=q(()=>typeof(d==null?void 0:d.rtl)=="boolean"?d.rtl:l.current.value&&o.rtl.hasOwnProperty(l.current.value)?o.rtl[l.current.value]:o.isRtl.value);return{isRtl:h,rtl:o.rtl,rtlClasses:q(()=>`v-locale--is-${h.value?"rtl":"ltr"}`)}}function Pa(){const o=et(Yg);if(!o)throw new Error("[Vuetify] Could not find injected rtl instance");return o}const Yh=Symbol.for("vuetify:locale-adapter"),ql=Symbol.for("vuetify:locale");function Az(){const o=et(Yh);if(!o)throw new Error("[Vuetify] Could not find injected locale adapter");return o.getScope()}function yz(o){return!!o&&o.hasOwnProperty("getScope")&&o.hasOwnProperty("createScope")&&o.hasOwnProperty("createRoot")}function xz(o,l){const d=yz(l)?l:Dz(l),h=d.createRoot(o);return o==null||o.provide(Yg,_z(h,l)),d}const P_="$vuetify.",z_=(o,l)=>o.replace(/\{(\d+)\}/g,(d,h)=>String(l[+h])),Ez=(o,l,d)=>function(h){for(var g=arguments.length,m=new Array(g>1?g-1:0),b=1;b<g;b++)m[b-1]=arguments[b];if(!h.startsWith(P_))return z_(h,m);const _=h.replace(P_,""),k=o.value&&d.value[o.value],A=l.value&&d.value[l.value];let y=jh(k,_,null);return y||(es(`Translation key "${h}" not found in "${o.value}", trying fallback locale`),y=jh(A,_,null)),y||(Wh(`Translation key "${h}" not found in fallback`),y=h),typeof y!="string"&&(Wh(`Translation key "${h}" has a non-string value`),y=h),z_(y,m)};function Sz(o,l){return(d,h)=>new Intl.NumberFormat([o.value,l.value],h).format(d)}function Dz(o){const l=d=>{const h=we(d.current),g=we(d.fallback),m=we(d.messages);return{current:h,fallback:g,messages:m,t:Ez(h,g,m),n:Sz(h,g)}};return{createRoot:d=>{var h,g,m;const b=l({current:(h=o==null?void 0:o.defaultLocale)!=null?h:"en",fallback:(g=o==null?void 0:o.fallbackLocale)!=null?g:"en",messages:(m=o==null?void 0:o.messages)!=null?m:{en:wz}});if(!d)throw new Error("[Vuetify] Could not find default app instance");return d.provide(ql,b),b},getScope:()=>{const d=et(ql);if(!d)throw new Error("[Vuetify] Could not find injected locale instance");return d},createScope:d=>{const h=et(ql);if(!h)throw new Error("[Vuetify] Could not find injected locale instance");const g=l({current:q(()=>{var m;return(m=d==null?void 0:d.locale)!=null?m:h.current.value}),fallback:q(()=>{var m;return(m=d==null?void 0:d.locale)!=null?m:h.fallback.value}),messages:q(()=>{var m;return(m=d==null?void 0:d.messages)!=null?m:h.messages.value})});return Ht(ql,g),g}}}const jr=2.4,L_=.2126729,O_=.7151522,R_=.072175,Iz=.55,Tz=.58,Mz=.57,Bz=.62,Gl=.03,F_=1.45,Nz=5e-4,Pz=1.25,zz=1.25,j_=.078,V_=12.82051282051282,Kl=.06,H_=.001;function U_(o,l){const d=((o>>16&255)/255)**jr,h=((o>>8&255)/255)**jr,g=((o>>0&255)/255)**jr,m=((l>>16&255)/255)**jr,b=((l>>8&255)/255)**jr,_=((l>>0&255)/255)**jr;let k=d*L_+h*O_+g*R_,A=m*L_+b*O_+_*R_;if(k<=Gl&&(k+=(Gl-k)**F_),A<=Gl&&(A+=(Gl-A)**F_),Math.abs(A-k)<Nz)return 0;let y;if(A>k){const x=(A**Iz-k**Tz)*Pz;y=x<H_?0:x<j_?x-x*V_*Kl:x-Kl}else{const x=(A**Bz-k**Mz)*zz;y=x>-H_?0:x>-j_?x-x*V_*Kl:x+Kl}return y*100}const Ca=Symbol.for("vuetify:theme"),an=Ge({theme:String},"theme"),Zs={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#C2C2C2"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"kbd-background-color":"#212529","kbd-color":"#FFFFFF","code-background-color":"#B7B7B7"}}}};function Lz(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Zs;if(!o)return{...Zs,isDisabled:!0};const l={};for(const[m,b]of Object.entries((d=o.themes)!=null?d:{})){var d,h,g;const _=b.dark?(h=Zs.themes)==null?void 0:h.dark:(g=Zs.themes)==null?void 0:g.light;l[m]=Wo(_,b)}return Wo(Zs,{...o,themes:l})}function Oz(o,l){const d=o._context.provides.usehead,h=Qt(Lz(l)),g=we(h.defaultTheme),m=we(h.themes),b=q(()=>{const x={};for(const[v,E]of Object.entries(m.value)){const N=x[v]={...E,colors:{...E.colors}};if(h.variations)for(const P of h.variations.colors){const j=N.colors[P];for(const M of["lighten","darken"]){const T=M==="lighten"?ZP:JP;for(const O of OP(h.variations[M],1))N.colors[`${P}-${M}-${O}`]=QP(T(hc(j),O))}}for(const P of Object.keys(N.colors)){if(/^on-[a-z]/.test(P)||N.colors[`on-${P}`])continue;const j=`on-${P}`,M=hc(N.colors[P]),T=Math.abs(U_(0,M)),O=Math.abs(U_(16777215,M));N.colors[j]=O>Math.min(T,50)?"#fff":"#000"}}return x}),_=q(()=>b.value[g.value]),k=q(()=>{const x=[];_.value.dark&&Vr(x,":root",["color-scheme: dark"]);for(const[P,j]of Object.entries(b.value)){const{variables:M,dark:T}=j;Vr(x,`.v-theme--${P}`,[`color-scheme: ${T?"dark":"normal"}`,...Fz(j),...Object.keys(M).map(O=>{const G=M[O],H=typeof G=="string"&&G.startsWith("#")?ry(G):void 0,Q=H?`${H.r}, ${H.g}, ${H.b}`:void 0;return`--v-${O}: ${Q!=null?Q:G}`})])}const v=[],E=[],N=new Set(Object.values(b.value).flatMap(P=>Object.keys(P.colors)));for(const P of N)/^on-[a-z]/.test(P)?Vr(E,`.${P}`,[`color: rgb(var(--v-theme-${P})) !important`]):(Vr(v,`.bg-${P}`,[`--v-theme-overlay-multiplier: var(--v-theme-${P}-overlay-multiplier)`,`background: rgb(var(--v-theme-${P})) !important`,`color: rgb(var(--v-theme-on-${P})) !important`]),Vr(E,`.text-${P}`,[`color: rgb(var(--v-theme-${P})) !important`]),Vr(E,`.border-${P}`,[`--v-border-color: var(--v-theme-${P})`]));return x.push(...v,...E),x.map((P,j)=>j===0?P:`    ${P}`).join("")});if(d)d.addHeadObjs(q(()=>{const x={children:k.value,type:"text/css",id:"vuetify-theme-stylesheet"};return h.cspNonce&&(x.nonce=h.cspNonce),{style:[x]}})),Bt&&Go(()=>d.updateDOM());else{let v=function(){if(!h.isDisabled){if(typeof document<"u"&&!x){const E=document.createElement("style");E.type="text/css",E.id="vuetify-theme-stylesheet",h.cspNonce&&E.setAttribute("nonce",h.cspNonce),x=E,document.head.appendChild(x)}x&&(x.innerHTML=k.value)}};var y=v;let x=Bt?document.getElementById("vuetify-theme-stylesheet"):null;Ze(k,v,{immediate:!0})}const A=q(()=>h.isDisabled?void 0:`v-theme--${g.value}`);return{isDisabled:h.isDisabled,name:g,themes:m,current:_,computedThemes:b,themeClasses:A,styles:k,global:{name:g,current:_}}}function xn(o){sn("provideTheme");const l=et(Ca,null);if(!l)throw new Error("Could not find Vuetify theme injection");const d=q(()=>{var m;return(m=o.theme)!=null?m:l==null?void 0:l.name.value}),h=q(()=>l.isDisabled?void 0:`v-theme--${d.value}`),g={...l,name:d,themeClasses:h};return Ht(Ca,g),g}function Rz(){sn("useTheme");const o=et(Ca,null);if(!o)throw new Error("Could not find Vuetify theme injection");return o}function Vr(o,l,d){o.push(`${l} {
`,...d.map(h=>`  ${h};
`),`}
`)}function Fz(o){const l=o.dark?2:1,d=o.dark?1:2,h=[];for(const[g,m]of Object.entries(o.colors)){const b=ry(m);h.push(`--v-theme-${g}: ${b.r},${b.g},${b.b}`),g.startsWith("on-")||h.push(`--v-theme-${g}-overlay-multiplier: ${XP(m)>.18?l:d}`)}return h}function uy(o){const l=we(),d=we();if(Bt){const h=new ResizeObserver(g=>{o==null||o(g,h),g.length&&(d.value=g[0].contentRect)});yn(()=>{h.disconnect()}),Ze(l,(g,m)=>{m&&(h.unobserve(m),d.value=void 0),g&&h.observe(g)},{flush:"post"})}return{resizeRef:l,contentRect:hs(d)}}const mc=Symbol.for("vuetify:layout"),hy=Symbol.for("vuetify:layout-item"),$_=1e3,jz=Ge({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Vz=Ge({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Hz(){const o=et(mc);if(!o)throw new Error("Could not find injected Vuetify layout");return o}function Uz(o){var l;const d=et(mc);if(!d)throw new Error("Could not find injected Vuetify layout");const h=(l=o.id)!=null?l:`layout-item-${go()}`,g=sn("useLayoutItem");Ht(hy,{id:h});const m=we(!1);Mg(()=>m.value=!0),Tg(()=>m.value=!1);const{layoutItemStyles:b,layoutItemScrimStyles:_}=d.register(g,{...o,active:q(()=>m.value?!1:o.active.value),id:h});return yn(()=>d.unregister(h)),{layoutItemStyles:b,layoutRect:d.layoutRect,layoutItemScrimStyles:_}}const $z=(o,l,d,h)=>{let g={top:0,left:0,right:0,bottom:0};const m=[{id:"",layer:{...g}}];for(const b of o){const _=l.get(b),k=d.get(b),A=h.get(b);if(!_||!k||!A)continue;const y={...g,[_.value]:parseInt(g[_.value],10)+(A.value?parseInt(k.value,10):0)};m.push({id:b,layer:y}),g=y}return m};function Wz(o){const l=et(mc,null),d=q(()=>l?l.rootZIndex.value-100:$_),h=we([]),g=Qt(new Map),m=Qt(new Map),b=Qt(new Map),_=Qt(new Map),k=Qt(new Map),{resizeRef:A,contentRect:y}=uy(),x=q(()=>{var H;const Q=new Map,R=(H=o.overlaps)!=null?H:[];for(const V of R.filter(W=>W.includes(":"))){const[W,K]=V.split(":");if(!h.value.includes(W)||!h.value.includes(K))continue;const ee=g.get(W),J=g.get(K),ne=m.get(W),ae=m.get(K);!ee||!J||!ne||!ae||(Q.set(K,{position:ee.value,amount:parseInt(ne.value,10)}),Q.set(W,{position:J.value,amount:-parseInt(ae.value,10)}))}return Q}),v=q(()=>{const H=[...new Set([...b.values()].map(R=>R.value))].sort((R,V)=>R-V),Q=[];for(const R of H){const V=h.value.filter(W=>{var K;return((K=b.get(W))==null?void 0:K.value)===R});Q.push(...V)}return $z(Q,g,m,_)}),E=q(()=>!Array.from(k.values()).some(H=>H.value)),N=q(()=>{const H=v.value[v.value.length-1].layer;return{"--v-layout-left":Oe(H.left),"--v-layout-right":Oe(H.right),"--v-layout-top":Oe(H.top),"--v-layout-bottom":Oe(H.bottom),...E.value?void 0:{transition:"none"}}}),P=q(()=>v.value.slice(1).map((H,Q)=>{let{id:R}=H;const{layer:V}=v.value[Q],W=m.get(R);return{id:R,...V,size:Number(W.value)}})),j=H=>P.value.find(Q=>Q.id===H),M=sn("createLayout"),T=we(!1);Hn(()=>{T.value=!0}),Ht(mc,{register:(H,Q)=>{let{id:R,order:V,position:W,layoutSize:K,elementSize:ee,active:J,disableTransitions:ne,absolute:ae}=Q;b.set(R,V),g.set(R,W),m.set(R,K),_.set(R,J),ne&&k.set(R,ne);const he=ua(hy,M==null?void 0:M.vnode).indexOf(H);he>-1?h.value.splice(he,0,R):h.value.push(R);const Ae=q(()=>P.value.findIndex(_t=>_t.id===R)),Ee=q(()=>d.value+v.value.length*2-Ae.value*2),He=q(()=>{const _t=W.value==="left"||W.value==="right",Ne=W.value==="right",Tt=W.value==="bottom",fn={[W.value]:0,zIndex:Ee.value,transform:`translate${_t?"X":"Y"}(${(J.value?0:-110)*(Ne||Tt?-1:1)}%)`,position:ae.value||d.value!==$_?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!T.value)return fn;if(Ae.value<0)throw new Error(`Layout item "${R}" is missing`);const U=P.value[Ae.value];if(!U)throw new Error(`Could not find layout item "${R}`);const ce=x.value.get(R);return ce&&(U[ce.position]+=ce.amount),{...fn,height:_t?`calc(100% - ${U.top}px - ${U.bottom}px)`:ee.value?`${ee.value}px`:void 0,left:Ne?void 0:`${U.left}px`,right:Ne?`${U.right}px`:void 0,top:W.value!=="bottom"?`${U.top}px`:void 0,bottom:W.value!=="top"?`${U.bottom}px`:void 0,width:_t?ee.value?`${ee.value}px`:void 0:`calc(100% - ${U.left}px - ${U.right}px)`}}),It=q(()=>({zIndex:Ee.value-1}));return{layoutItemStyles:He,layoutItemScrimStyles:It,zIndex:Ee}},unregister:H=>{b.delete(H),g.delete(H),m.delete(H),_.delete(H),k.delete(H),h.value=h.value.filter(Q=>Q!==H)},mainStyles:N,getLayoutItem:j,items:P,layoutRect:y,rootZIndex:d});const O=q(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),G=q(()=>({zIndex:d.value,position:l?"relative":void 0,overflow:l?"hidden":void 0}));return{layoutClasses:O,layoutStyles:G,getLayoutItem:j,items:P,layoutRect:y,layoutRef:A}}const qz=function(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return{install:d=>{const{blueprint:h,...g}=o,m=Wo(h,g),{aliases:b={},components:_={},directives:k={}}=m;for(const v in k)d.directive(v,k[v]);for(const v in _)d.component(v,_[v]);for(const v in b)d.component(v,tt({...b[v],name:v}));function A(v){d.provide(_a,az(m.defaults)),d.provide(Gh,dz(m.display,v)),d.provide(Ca,Oz(d,m.theme)),d.provide(Kh,bz(m.icons)),d.provide(Yh,xz(d,m.locale))}Bt||A(),go.reset();const y=d.mount;d.mount=(v,E,N)=>{A(E);const P=y(v,E,N);return d.mount=y,P};function x(v){var E,N,P;const j=this.$,M=(E=(N=j.parent)==null?void 0:N.provides)!=null?E:(P=j.vnode.appContext)==null?void 0:P.provides;if(M&&v in M)return M[v]}d.mixin({computed:{$vuetify(){return Qt({defaults:x.call(this,_a),display:x.call(this,Gh),theme:x.call(this,Ca),icons:x.call(this,Kh),locale:x.call(this,Yh),rtl:x.call(this,Yg)})}}})}}};const Gz=["x-small","small","default","large","x-large"],za=Ge({size:{type:[String,Number],default:"default"}},"size");function La(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return $g(()=>{let d,h;return dc(Gz,o.size)?d=`${l}--size-${o.size}`:o.size&&(h={width:Oe(o.size),height:Oe(o.size)}),{sizeClasses:d,sizeStyles:h}})}const En=Ge({tag:{type:String,default:"div"}},"tag");function Qg(o){return $g(()=>{const l=[],d={};return o.value.background&&(T_(o.value.background)?d.backgroundColor=o.value.background:l.push(`bg-${o.value.background}`)),o.value.text&&(T_(o.value.text)?(d.color=o.value.text,d.caretColor=o.value.text):l.push(`text-${o.value.text}`)),{colorClasses:l,colorStyles:d}})}function _i(o,l){const d=q(()=>({text:kt(o)?o.value:l?o[l]:null})),{colorClasses:h,colorStyles:g}=Qg(d);return{textColorClasses:h,textColorStyles:g}}function qo(o,l){const d=q(()=>({background:kt(o)?o.value:l?o[l]:null})),{colorClasses:h,colorStyles:g}=Qg(d);return{backgroundColorClasses:h,backgroundColorStyles:g}}const Kz=Ge({color:String,start:Boolean,end:Boolean,icon:vt,...za(),...En({tag:"i"}),...an()},"v-icon"),it=tt({name:"VIcon",props:Kz(),setup(o,l){let{attrs:d,slots:h}=l,g;h.default&&(g=q(()=>{var y,x;const v=(y=h.default)==null?void 0:y.call(h);if(!!v)return(x=XA(v).filter(E=>E.children&&typeof E.children=="string")[0])==null?void 0:x.children}));const{themeClasses:m}=xn(o),{iconData:b}=kz(g||o),{sizeClasses:_}=La(o),{textColorClasses:k,textColorStyles:A}=_i(Ve(o,"color"));return rt(()=>L(b.value.component,{tag:o.tag,icon:b.value.icon,class:["v-icon","notranslate",m.value,_.value,k.value,{"v-icon--clickable":!!d.onClick,"v-icon--start":o.start,"v-icon--end":o.end}],style:[_.value?void 0:{fontSize:Oe(o.size),height:Oe(o.size),width:Oe(o.size)},A.value],"aria-hidden":"true"},null)),{}}});const Oa=Ge({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ra(o){return{dimensionStyles:q(()=>({height:Oe(o.height),maxHeight:Oe(o.maxHeight),maxWidth:Oe(o.maxWidth),minHeight:Oe(o.minHeight),minWidth:Oe(o.minWidth),width:Oe(o.width)}))}}function Yz(o){return{aspectStyles:q(()=>{const l=Number(o.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const Qz=tt({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Oa()},setup(o,l){let{slots:d}=l;const{aspectStyles:h}=Yz(o),{dimensionStyles:g}=Ra(o);return rt(()=>{var m;return L("div",{class:"v-responsive",style:g.value},[L("div",{class:"v-responsive__sizer",style:h.value},null),(m=d.additional)==null?void 0:m.call(d),d.default&&L("div",{class:["v-responsive__content",o.contentClass]},[d.default()])])}),{}}});function Zz(o,l){if(!Kg)return;const d=l.modifiers||{},h=l.value,{handler:g,options:m}=typeof h=="object"?h:{handler:h,options:{}},b=new IntersectionObserver(function(){var _;let k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],A=arguments.length>1?arguments[1]:void 0;const y=(_=o._observe)==null?void 0:_[l.instance.$.uid];if(!y)return;const x=k.some(v=>v.isIntersecting);g&&(!d.quiet||y.init)&&(!d.once||x||y.init)&&g(x,k,A),x&&d.once?gy(o,l):y.init=!0},m);o._observe=Object(o._observe),o._observe[l.instance.$.uid]={init:!1,observer:b},b.observe(o)}function gy(o,l){var d;const h=(d=o._observe)==null?void 0:d[l.instance.$.uid];!h||(h.observer.unobserve(o),delete o._observe[l.instance.$.uid])}const Jz={mounted:Zz,unmounted:gy},fy=Jz,ms=Ge({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:o=>o!==!0}},"transition"),er=(o,l)=>{var d;let{slots:h}=l;const{transition:g,...m}=o;if(!g||typeof g=="boolean")return(d=h.default)==null?void 0:d.call(h);const{component:b=uo,..._}=typeof g=="object"?g:{};return To(b,xt(typeof g=="string"?{name:g}:_,m),h)},Xz=tt({name:"VImg",directives:{intersect:fy},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ms()},emits:["loadstart","load","error"],setup(o,l){let{emit:d,slots:h}=l;const g=we(""),m=we(),b=we(o.eager?"loading":"idle"),_=we(),k=we(),A=q(()=>o.src&&typeof o.src=="object"?{src:o.src.src,srcset:o.srcset||o.src.srcset,lazySrc:o.lazySrc||o.src.lazySrc,aspect:Number(o.aspectRatio||o.src.aspect)}:{src:o.src,srcset:o.srcset,lazySrc:o.lazySrc,aspect:Number(o.aspectRatio||0)}),y=q(()=>A.value.aspect||_.value/k.value||0);Ze(()=>o.src,()=>{x(b.value!=="idle")}),Na(()=>x());function x(R){if(!(o.eager&&R)&&!(Kg&&!R&&!o.eager)){if(b.value="loading",A.value.lazySrc){const V=new Image;V.src=A.value.lazySrc,P(V,null)}!A.value.src||An(()=>{var V,W;if(d("loadstart",((V=m.value)==null?void 0:V.currentSrc)||A.value.src),(W=m.value)!=null&&W.complete){if(m.value.naturalWidth||E(),b.value==="error")return;y.value||P(m.value,null),v()}else y.value||P(m.value),N()})}}function v(){var R;N(),b.value="loaded",d("load",((R=m.value)==null?void 0:R.currentSrc)||A.value.src)}function E(){var R;b.value="error",d("error",((R=m.value)==null?void 0:R.currentSrc)||A.value.src)}function N(){const R=m.value;R&&(g.value=R.currentSrc||R.src)}function P(R){let V=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const W=()=>{const{naturalHeight:K,naturalWidth:ee}=R;K||ee?(_.value=ee,k.value=K):!R.complete&&b.value==="loading"&&V!=null?setTimeout(W,V):(R.currentSrc.endsWith(".svg")||R.currentSrc.startsWith("data:image/svg+xml"))&&(_.value=1,k.value=1)};W()}const j=q(()=>({"v-img__img--cover":o.cover,"v-img__img--contain":!o.cover})),M=q(()=>{var R;if(!A.value.src||b.value==="idle")return;const V=To("img",{class:["v-img__img",j.value],src:A.value.src,srcset:A.value.srcset,alt:"",sizes:o.sizes,ref:m,onLoad:v,onError:E}),W=(R=h.sources)==null?void 0:R.call(h);return L(er,{transition:o.transition,appear:!0},{default:()=>[Vn(W?L("picture",{class:"v-img__picture"},[W,V]):V,[[yi,b.value==="loaded"]])]})}),T=q(()=>L(er,{transition:o.transition},{default:()=>[A.value.lazySrc&&b.value!=="loaded"&&L("img",{class:["v-img__img","v-img__img--preload",j.value],src:A.value.lazySrc,alt:""},null)]})),O=q(()=>{if(!!h.placeholder)return L(er,{transition:o.transition,appear:!0},{default:()=>[(b.value==="loading"||b.value==="error"&&!h.error)&&L("div",{class:"v-img__placeholder"},[h.placeholder()])]})}),G=q(()=>{if(!!h.error)return L(er,{transition:o.transition,appear:!0},{default:()=>[b.value==="error"&&L("div",{class:"v-img__error"},[h.error()])]})}),H=q(()=>{if(!!o.gradient)return L("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${o.gradient})`}},null)}),Q=we(!1);{const R=Ze(y,V=>{V&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Q.value=!0})}),R())})}return rt(()=>Vn(L(Qz,{class:["v-img",{"v-img--booting":!Q.value}],style:{width:Oe(o.width==="auto"?_.value:o.width)},aspectRatio:y.value,"aria-label":o.alt,role:o.alt?"img":void 0},{additional:()=>[M.value,T.value,H.value,O.value,G.value],default:h.default}),[[Ai("intersect"),{handler:x,options:o.options},null,{once:!0}]])),{currentSrc:g,image:m,state:b,naturalWidth:_,naturalHeight:k}}}),e3=[null,"default","comfortable","compact"],xi=Ge({density:{type:String,default:"default",validator:o=>e3.includes(o)}},"density");function Ei(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return{densityClasses:q(()=>`${l}--density-${o.density}`)}}const Si=Ge({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Di(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return{roundedClasses:q(()=>{const h=kt(o)?o.value:o.rounded,g=[];if(h===!0||h==="")g.push(`${l}--rounded`);else if(typeof h=="string"||h===0)for(const m of String(h).split(" "))g.push(`rounded-${m}`);return g})}}const t3=Ge({color:String,start:Boolean,end:Boolean,icon:vt,image:String,...xi(),...Si(),...za(),...En()}),Aa=tt({name:"VAvatar",props:t3(),setup(o,l){let{slots:d}=l;const{backgroundColorClasses:h,backgroundColorStyles:g}=qo(Ve(o,"color")),{densityClasses:m}=Ei(o),{roundedClasses:b}=Di(o),{sizeClasses:_,sizeStyles:k}=La(o);return rt(()=>{var A;return L(o.tag,{class:["v-avatar",{"v-avatar--start":o.start,"v-avatar--end":o.end},h.value,m.value,b.value,_.value],style:[g.value,k.value]},{default:()=>[o.image?L(Xz,{src:o.image,alt:""},null):o.icon?L(it,{icon:o.icon},null):(A=d.default)==null?void 0:A.call(d)]})}),{}}});const ps=Ge({border:[Boolean,Number,String]},"border");function bs(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return{borderClasses:q(()=>{const h=kt(o)?o.value:o.border,g=[];if(h===!0||h==="")g.push(`${l}--border`);else if(typeof h=="string"||h===0)for(const m of String(h).split(" "))g.push(`border-${m}`);return g})}}const ks=Ge({elevation:{type:[Number,String],validator(o){const l=parseInt(o);return!isNaN(l)&&l>=0&&l<=24}}},"elevation");function ws(o){return{elevationClasses:q(()=>{const d=kt(o)?o.value:o.elevation,h=[];return d==null||h.push(`elevation-${d}`),h})}}const n3=["elevated","flat","tonal","outlined","text","plain"];function Zg(o,l){return L(We,null,[o&&L("span",{key:"overlay",class:`${l}__overlay`},null),L("span",{key:"underlay",class:`${l}__underlay`},null)])}const vs=Ge({color:String,variant:{type:String,default:"elevated",validator:o=>n3.includes(o)}},"variant");function Jg(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();const d=q(()=>{const{variant:m}=Zt(o);return`${l}--variant-${m}`}),{colorClasses:h,colorStyles:g}=Qg(q(()=>{const{variant:m,color:b}=Zt(o);return{[["elevated","flat"].includes(m)?"background":"text"]:b}}));return{colorClasses:h,colorStyles:g,variantClasses:d}}const o3=tt({name:"VBtnGroup",props:{divided:Boolean,...ps(),...xi(),...ks(),...Si(),...En(),...an(),...vs()},setup(o,l){let{slots:d}=l;const{themeClasses:h}=xn(o),{densityClasses:g}=Ei(o),{borderClasses:m}=bs(o),{elevationClasses:b}=ws(o),{roundedClasses:_}=Di(o);fs({VBtn:{height:"auto",color:Ve(o,"color"),density:Ve(o,"density"),flat:!0,variant:Ve(o,"variant")}}),rt(()=>L(o.tag,{class:["v-btn-group",{"v-btn-group--divided":o.divided},h.value,m.value,g.value,b.value,_.value]},d))}});function rn(o,l,d){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:k=>k,g=arguments.length>4&&arguments[4]!==void 0?arguments[4]:k=>k;const m=sn("useProxiedModel"),b=q(()=>{var k,A;return o[l],!!(m!=null&&(k=m.vnode.props)!=null&&k.hasOwnProperty(l)||m!=null&&(A=m.vnode.props)!=null&&A.hasOwnProperty(Ug(l)))}),_=we(h(o[l]));return q({get(){return b.value?h(o[l]):_.value},set(k){(b.value?h(o[l]):_.value)!==k&&(_.value=k,m==null||m.emit(`update:${l}`,g(k)))}})}const my=Ge({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),py=Ge({value:null,disabled:Boolean,selectedClass:String},"group-item");function by(o,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const h=sn("useGroupItem");if(!h)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const g=go();Ht(Symbol.for(`${l.description}:id`),g);const m=et(l,null);if(!m){if(!d)return m;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`)}const b=Ve(o,"value"),_=q(()=>m.disabled.value||o.disabled);m.register({id:g,value:b,disabled:_},h),yn(()=>{m.unregister(g)});const k=q(()=>m.isSelected(g)),A=q(()=>k.value&&[m.selectedClass.value,o.selectedClass]);return Ze(k,y=>{h.emit("group:selected",{value:y})}),{id:g,isSelected:k,toggle:()=>m.select(g,!k.value),select:y=>m.select(g,y),selectedClass:A,value:b,disabled:_,group:m}}function ky(o,l){let d=!1;const h=Qt([]),g=rn(o,"modelValue",[],v=>v==null?[]:wy(h,fi(v)),v=>{const E=r3(h,v);return o.multiple?E:E[0]}),m=sn("useGroup");function b(v,E){const N=v,P=Symbol.for(`${l.description}:id`),M=ua(P,m==null?void 0:m.vnode).indexOf(E);M>-1?h.splice(M,0,N):h.push(N)}function _(v){if(d)return;k();const E=h.findIndex(N=>N.id===v);h.splice(E,1)}function k(){const v=h.find(E=>!E.disabled);v&&o.mandatory==="force"&&!g.value.length&&(g.value=[v.id])}Hn(()=>{k()}),yn(()=>{d=!0});function A(v,E){const N=h.find(M=>M.id===v);if(!(E&&N!=null&&N.disabled))if(o.multiple){var P;const M=g.value.slice(),T=M.findIndex(G=>G===v),O=~T;if(E=(P=E)!=null?P:!O,O&&o.mandatory&&M.length<=1||!O&&o.max!=null&&M.length+1>o.max)return;T<0&&E?M.push(v):T>=0&&!E&&M.splice(T,1),g.value=M}else{var j;const M=g.value.includes(v);if(o.mandatory&&M)return;g.value=((j=E)!=null?j:!M)?[v]:[]}}function y(v){if(o.multiple&&es('This method is not supported when using "multiple" prop'),g.value.length){const E=g.value[0],N=h.findIndex(M=>M.id===E);let P=(N+v)%h.length,j=h[P];for(;j.disabled&&P!==N;)P=(P+v)%h.length,j=h[P];if(j.disabled)return;g.value=[h[P].id]}else{const E=h.find(N=>!N.disabled);E&&(g.value=[E.id])}}const x={register:b,unregister:_,selected:g,select:A,disabled:Ve(o,"disabled"),prev:()=>y(h.length-1),next:()=>y(1),isSelected:v=>g.value.includes(v),selectedClass:q(()=>o.selectedClass),items:q(()=>h),getItemIndex:v=>i3(h,v)};return Ht(l,x),x}function i3(o,l){const d=wy(o,[l]);return d.length?o.findIndex(h=>h.id===d[0]):-1}function wy(o,l){const d=[];for(let h=0;h<o.length;h++){const g=o[h];g.value!=null?l.find(m=>Oc(m,g.value))!=null&&d.push(g.id):l.includes(h)&&d.push(g.id)}return d}function r3(o,l){const d=[];for(let h=0;h<o.length;h++){const g=o[h];l.includes(g.id)&&d.push(g.value!=null?g.value:h)}return d}const vy=Symbol.for("vuetify:v-btn-toggle");Xn()({name:"VBtnToggle",props:my({selectedClass:"v-btn--selected"}),emits:{"update:modelValue":o=>!0},setup(o,l){let{slots:d}=l;const{isSelected:h,next:g,prev:m,select:b,selected:_}=ky(o,vy);return rt(()=>{var k;return L(o3,{class:"v-btn-toggle"},{default:()=>[(k=d.default)==null?void 0:k.call(d,{isSelected:h,next:g,prev:m,select:b,selected:_})]})}),{next:g,prev:m,select:b}}});const ao=ur({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(o,l){let{slots:d}=l;const{defaults:h,reset:g,root:m,scoped:b}=_g(o);return fs(h,{reset:g,root:m,scoped:b}),()=>{var _;return(_=d.default)==null?void 0:_.call(d)}}});function _y(o){const l=we(),d=we(!1);if(Kg){const h=new IntersectionObserver(g=>{o==null||o(g,h),d.value=!!g.find(m=>m.isIntersecting)});yn(()=>{h.disconnect()}),Ze(l,(g,m)=>{m&&(h.unobserve(m),d.value=!1),g&&h.observe(g)},{flush:"post"})}return{intersectionRef:l,isIntersecting:d}}const s3=tt({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...za(),...En({tag:"div"}),...an()},setup(o,l){let{slots:d}=l;const h=20,g=2*Math.PI*h,m=we(),{themeClasses:b}=xn(o),{sizeClasses:_,sizeStyles:k}=La(o),{textColorClasses:A,textColorStyles:y}=_i(Ve(o,"color")),{textColorClasses:x,textColorStyles:v}=_i(Ve(o,"bgColor")),{intersectionRef:E,isIntersecting:N}=_y(),{resizeRef:P,contentRect:j}=uy(),M=q(()=>Math.max(0,Math.min(100,parseFloat(o.modelValue)))),T=q(()=>Number(o.width)),O=q(()=>k.value?Number(o.size):j.value?j.value.width:Math.max(T.value,32)),G=q(()=>h/(1-T.value/O.value)*2),H=q(()=>T.value/O.value*G.value),Q=q(()=>Oe((100-M.value)/100*g));return Go(()=>{E.value=m.value,P.value=m.value}),rt(()=>L(o.tag,{ref:m,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!o.indeterminate,"v-progress-circular--visible":N.value,"v-progress-circular--disable-shrink":o.indeterminate==="disable-shrink"},b.value,_.value,A.value],style:[k.value,y.value],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":o.indeterminate?void 0:M.value},{default:()=>[L("svg",{style:{transform:`rotate(calc(-90deg + ${Number(o.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${G.value} ${G.value}`},[L("circle",{class:["v-progress-circular__underlay",x.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:h,"stroke-width":H.value,"stroke-dasharray":g,"stroke-dashoffset":0},null),L("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:h,"stroke-width":H.value,"stroke-dasharray":g,"stroke-dashoffset":Q.value},null)]),d.default&&L("div",{class:"v-progress-circular__content"},[d.default({value:M.value})])]})),{}}});const Qh=Symbol("rippleStop"),a3=80;function W_(o,l){o.style.transform=l,o.style.webkitTransform=l}function hh(o,l){o.style.opacity=`calc(${l} * var(--v-theme-overlay-multiplier))`}function Zh(o){return o.constructor.name==="TouchEvent"}function Cy(o){return o.constructor.name==="KeyboardEvent"}const l3=function(o,l){var d;let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=0,m=0;if(!Cy(o)){const v=l.getBoundingClientRect(),E=Zh(o)?o.touches[o.touches.length-1]:o;g=E.clientX-v.left,m=E.clientY-v.top}let b=0,_=.3;(d=l._ripple)!=null&&d.circle?(_=.15,b=l.clientWidth/2,b=h.center?b:b+Math.sqrt((g-b)**2+(m-b)**2)/4):b=Math.sqrt(l.clientWidth**2+l.clientHeight**2)/2;const k=`${(l.clientWidth-b*2)/2}px`,A=`${(l.clientHeight-b*2)/2}px`,y=h.center?k:`${g-b}px`,x=h.center?A:`${m-b}px`;return{radius:b,scale:_,x:y,y:x,centerX:k,centerY:A}},pc={show(o,l){var d;let h=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!(l!=null&&(d=l._ripple)!=null&&d.enabled))return;const g=document.createElement("span"),m=document.createElement("span");g.appendChild(m),g.className="v-ripple__container",h.class&&(g.className+=` ${h.class}`);const{radius:b,scale:_,x:k,y:A,centerX:y,centerY:x}=l3(o,l,h),v=`${b*2}px`;m.className="v-ripple__animation",m.style.width=v,m.style.height=v,l.appendChild(g);const E=window.getComputedStyle(l);E&&E.position==="static"&&(l.style.position="relative",l.dataset.previousPosition="static"),m.classList.add("v-ripple__animation--enter"),m.classList.add("v-ripple__animation--visible"),W_(m,`translate(${k}, ${A}) scale3d(${_},${_},${_})`),hh(m,0),m.dataset.activated=String(performance.now()),setTimeout(()=>{m.classList.remove("v-ripple__animation--enter"),m.classList.add("v-ripple__animation--in"),W_(m,`translate(${y}, ${x}) scale3d(1,1,1)`),hh(m,.08)},0)},hide(o){var l;if(!(o!=null&&(l=o._ripple)!=null&&l.enabled))return;const d=o.getElementsByClassName("v-ripple__animation");if(d.length===0)return;const h=d[d.length-1];if(h.dataset.isHiding)return;h.dataset.isHiding="true";const g=performance.now()-Number(h.dataset.activated),m=Math.max(250-g,0);setTimeout(()=>{h.classList.remove("v-ripple__animation--in"),h.classList.add("v-ripple__animation--out"),hh(h,0),setTimeout(()=>{o.getElementsByClassName("v-ripple__animation").length===1&&o.dataset.previousPosition&&(o.style.position=o.dataset.previousPosition,delete o.dataset.previousPosition),h.parentNode&&o.removeChild(h.parentNode)},300)},m)}};function Ay(o){return typeof o>"u"||!!o}function ya(o){const l={},d=o.currentTarget;if(!(!(d!=null&&d._ripple)||d._ripple.touched||o[Qh])){if(o[Qh]=!0,Zh(o))d._ripple.touched=!0,d._ripple.isTouch=!0;else if(d._ripple.isTouch)return;if(l.center=d._ripple.centered||Cy(o),d._ripple.class&&(l.class=d._ripple.class),Zh(o)){if(d._ripple.showTimerCommit)return;d._ripple.showTimerCommit=()=>{pc.show(o,d,l)},d._ripple.showTimer=window.setTimeout(()=>{var h;d!=null&&(h=d._ripple)!=null&&h.showTimerCommit&&(d._ripple.showTimerCommit(),d._ripple.showTimerCommit=null)},a3)}else pc.show(o,d,l)}}function q_(o){o[Qh]=!0}function On(o){const l=o.currentTarget;if(!(!l||!l._ripple)){if(window.clearTimeout(l._ripple.showTimer),o.type==="touchend"&&l._ripple.showTimerCommit){l._ripple.showTimerCommit(),l._ripple.showTimerCommit=null,l._ripple.showTimer=window.setTimeout(()=>{On(o)});return}window.setTimeout(()=>{l._ripple&&(l._ripple.touched=!1)}),pc.hide(l)}}function yy(o){const l=o.currentTarget;!l||!l._ripple||(l._ripple.showTimerCommit&&(l._ripple.showTimerCommit=null),window.clearTimeout(l._ripple.showTimer))}let xa=!1;function xy(o){!xa&&(o.keyCode===E_.enter||o.keyCode===E_.space)&&(xa=!0,ya(o))}function Ey(o){xa=!1,On(o)}function Sy(o){xa&&(xa=!1,On(o))}function Dy(o,l,d){var h;const{value:g,modifiers:m}=l,b=Ay(g);if(b||pc.hide(o),o._ripple=(h=o._ripple)!=null?h:{},o._ripple.enabled=b,o._ripple.centered=m.center,o._ripple.circle=m.circle,Vh(g)&&g.class&&(o._ripple.class=g.class),b&&!d){if(m.stop){o.addEventListener("touchstart",q_,{passive:!0}),o.addEventListener("mousedown",q_);return}o.addEventListener("touchstart",ya,{passive:!0}),o.addEventListener("touchend",On,{passive:!0}),o.addEventListener("touchmove",yy,{passive:!0}),o.addEventListener("touchcancel",On),o.addEventListener("mousedown",ya),o.addEventListener("mouseup",On),o.addEventListener("mouseleave",On),o.addEventListener("keydown",xy),o.addEventListener("keyup",Ey),o.addEventListener("blur",Sy),o.addEventListener("dragstart",On,{passive:!0})}else!b&&d&&Iy(o)}function Iy(o){o.removeEventListener("mousedown",ya),o.removeEventListener("touchstart",ya),o.removeEventListener("touchend",On),o.removeEventListener("touchmove",yy),o.removeEventListener("touchcancel",On),o.removeEventListener("mouseup",On),o.removeEventListener("mouseleave",On),o.removeEventListener("keydown",xy),o.removeEventListener("keyup",Ey),o.removeEventListener("dragstart",On),o.removeEventListener("blur",Sy)}function c3(o,l){Dy(o,l,!1)}function d3(o){delete o._ripple,Iy(o)}function u3(o,l){if(l.value===l.oldValue)return;const d=Ay(l.oldValue);Dy(o,l,d)}const Fc={mounted:c3,unmounted:d3,updated:u3};const h3=tt({name:"VProgressLinear",props:{active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Si(),...En(),...an()},emits:{"update:modelValue":o=>!0},setup(o,l){let{slots:d}=l;const h=rn(o,"modelValue"),{isRtl:g}=Pa(),{themeClasses:m}=xn(o),{textColorClasses:b,textColorStyles:_}=_i(o,"color"),{backgroundColorClasses:k,backgroundColorStyles:A}=qo(q(()=>o.bgColor||o.color)),{backgroundColorClasses:y,backgroundColorStyles:x}=qo(o,"color"),{roundedClasses:v}=Di(o),{intersectionRef:E,isIntersecting:N}=_y(),P=q(()=>parseInt(o.max,10)),j=q(()=>parseInt(o.height,10)),M=q(()=>parseFloat(o.bufferValue)/P.value*100),T=q(()=>parseFloat(h.value)/P.value*100),O=q(()=>g.value!==o.reverse),G=q(()=>o.indeterminate?"fade-transition":"slide-x-transition"),H=q(()=>o.bgOpacity==null?o.bgOpacity:parseFloat(o.bgOpacity));function Q(R){if(!E.value)return;const{left:V,right:W,width:K}=E.value.getBoundingClientRect(),ee=O.value?K-R.clientX+(W-K):R.clientX-V;h.value=Math.round(ee/K*P.value)}return rt(()=>L(o.tag,{ref:E,class:["v-progress-linear",{"v-progress-linear--active":o.active&&N.value,"v-progress-linear--reverse":O.value,"v-progress-linear--rounded":o.rounded,"v-progress-linear--rounded-bar":o.roundedBar,"v-progress-linear--striped":o.striped},v.value,m.value],style:{height:o.active?Oe(j.value):0,"--v-progress-linear-height":Oe(j.value)},role:"progressbar","aria-valuemin":"0","aria-valuemax":o.max,"aria-valuenow":o.indeterminate?void 0:T.value,onClick:o.clickable&&Q},{default:()=>[o.stream&&L("div",{key:"stream",class:["v-progress-linear__stream",b.value],style:{..._.value,[O.value?"left":"right"]:Oe(-j.value),borderTop:`${Oe(j.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${Oe(j.value/4)})`,width:Oe(100-M.value,"%"),"--v-progress-linear-stream-to":Oe(j.value*(O.value?1:-1))}},null),L("div",{class:["v-progress-linear__background",k.value],style:[A.value,{opacity:H.value,width:Oe(o.stream?M.value:100,"%")}]},null),L(uo,{name:G.value},{default:()=>[o.indeterminate?L("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(R=>L("div",{key:R,class:["v-progress-linear__indeterminate",R,y.value],style:x.value},null))]):L("div",{class:["v-progress-linear__determinate",y.value],style:[x.value,{width:Oe(T.value,"%")}]},null)]}),d.default&&L("div",{class:"v-progress-linear__content"},[d.default({value:T.value,buffer:M.value})])]})),{}}}),Ty=Ge({loading:Boolean},"loader");function My(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return{loaderClasses:q(()=>({[`${l}--loading`]:o.loading}))}}function g3(o,l){var d;let{slots:h}=l;return L("div",{class:`${o.name}__loader`},[((d=h.default)==null?void 0:d.call(h,{color:o.color,isActive:o.active}))||L(h3,{active:o.active,color:o.color,height:"2",indeterminate:!0},null)])}const G_={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},f3=Ge({location:String},"location");function m3(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,d=arguments.length>2?arguments[2]:void 0;const{isRtl:h}=Pa();return{locationStyles:q(()=>{if(!o.location)return{};const{side:m,align:b}=Uh(o.location.split(" ").length>1?o.location:`${o.location} center`,h.value);function _(A){return d?d(A):0}const k={};return m!=="center"&&(l?k[G_[m]]=`calc(100% - ${_(m)}px)`:k[m]=0),b!=="center"?l?k[G_[b]]=`calc(100% - ${_(b)}px)`:k[b]=0:(m==="center"?k.top=k.left="50%":k[{top:"left",bottom:"left",left:"top",right:"top"}[m]]="50%",k.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[m]),k})}}const p3=["static","relative","fixed","absolute","sticky"],b3=Ge({position:{type:String,validator:o=>p3.includes(o)}},"position");function k3(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();return{positionClasses:q(()=>o.position?`${l}--${o.position}`:void 0)}}function By(){var o,l;return(o=sn("useRouter"))==null||(l=o.proxy)==null?void 0:l.$router}function Xg(o,l){const d=iA("RouterLink"),h=q(()=>!!(o.href||o.to)),g=q(()=>(h==null?void 0:h.value)||!!(l.onClick||l.onClickOnce));if(typeof d=="string")return{isLink:h,isClickable:g,href:Ve(o,"href")};const m=o.to?d.useLink(o):void 0;return{...m,isLink:h,isClickable:g,href:q(()=>o.to?m==null?void 0:m.route.value.href:o.href)}}const ef=Ge({href:String,replace:Boolean,to:[String,Object]},"router");let gh=!1;function w3(o,l){let d=!1,h,g;Bt&&(An(()=>{window.addEventListener("popstate",m),h=o==null?void 0:o.beforeEach((b,_,k)=>{gh?d?l(k):k():setTimeout(()=>d?l(k):k()),gh=!0}),g=o==null?void 0:o.afterEach(()=>{gh=!1})}),Ci(()=>{var b,_;window.removeEventListener("popstate",m),(b=h)==null||b(),(_=g)==null||_()}));function m(b){var _;(_=b.state)!=null&&_.replaced||(d=!0,setTimeout(()=>d=!1))}}function v3(o,l){Ze(()=>{var d;return(d=o.isExactActive)==null?void 0:d.value},d=>{o.isLink.value&&d&&l&&An(()=>{l(!0)})},{immediate:!0})}const fh=tt({name:"VBtn",directives:{Ripple:Fc},props:{active:Boolean,symbol:{type:null,default:vy},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:vt,appendIcon:vt,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},...ps(),...Si(),...xi(),...Oa(),...ks(),...py(),...Ty(),...f3(),...b3(),...ef(),...za(),...En({tag:"button"}),...an(),...vs({variant:"elevated"})},emits:{"group:selected":o=>!0},setup(o,l){let{attrs:d,slots:h}=l;const{themeClasses:g}=xn(o),{borderClasses:m}=bs(o),{colorClasses:b,colorStyles:_,variantClasses:k}=Jg(o),{densityClasses:A}=Ei(o),{dimensionStyles:y}=Ra(o),{elevationClasses:x}=ws(o),{loaderClasses:v}=My(o),{locationStyles:E}=m3(o),{positionClasses:N}=k3(o),{roundedClasses:P}=Di(o),{sizeClasses:j}=La(o),M=by(o,o.symbol,!1),T=Xg(o,d),O=q(()=>(M==null?void 0:M.disabled.value)||o.disabled),G=q(()=>o.variant==="elevated"&&!(o.disabled||o.flat||o.border));return v3(T,M==null?void 0:M.select),rt(()=>{var H,Q,R,V,W,K,ee,J;const ne=T.isLink.value?"a":o.tag,ae=!M||M.isSelected.value,be=!!(o.prependIcon||h.prepend),he=!!(o.appendIcon||h.append);return Vn(L(ne,{type:ne==="a"?void 0:"button",class:["v-btn",M==null?void 0:M.selectedClass.value,{"v-btn--active":o.active,"v-btn--block":o.block,"v-btn--disabled":O.value,"v-btn--elevated":G.value,"v-btn--flat":o.flat,"v-btn--icon":!!o.icon,"v-btn--loading":o.loading,"v-btn--stacked":o.stacked},g.value,m.value,ae?b.value:void 0,A.value,x.value,v.value,N.value,P.value,j.value,k.value],style:[ae?_.value:void 0,y.value,E.value],disabled:O.value||void 0,href:T.href.value,onClick:Ae=>{var Ee;O.value||((Ee=T.navigate)==null||Ee.call(T,Ae),M==null||M.toggle())}},{default:()=>[Zg(!0,"v-btn"),!o.icon&&be&&L(ao,{key:"prepend",defaults:{VIcon:{icon:o.prependIcon}}},{default:()=>[L("span",{class:"v-btn__prepend"},[(H=(Q=h.prepend)==null?void 0:Q.call(h))!=null?H:L(it,null,null)])]}),L("span",{class:"v-btn__content","data-no-activator":""},[L(ao,{key:"content",defaults:{VIcon:{icon:typeof o.icon=="string"?o.icon:void 0}}},{default:()=>[(R=(V=h.default)==null?void 0:V.call(h))!=null?R:typeof o.icon=="string"&&L(it,{key:"icon"},null)]})]),!o.icon&&he&&L(ao,{key:"append",defaults:{VIcon:{icon:o.appendIcon}}},{default:()=>[L("span",{class:"v-btn__append"},[(W=(K=h.append)==null?void 0:K.call(h))!=null?W:L(it,null,null)])]}),!!o.loading&&L("span",{key:"loader",class:"v-btn__loader"},[(ee=(J=h.loader)==null?void 0:J.call(h))!=null?ee:L(s3,{color:typeof o.loading=="boolean"?void 0:o.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[Ai("ripple"),!O.value&&o.ripple,null]])}),{}}});const Ny=tt({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...an()},setup(o,l){let{attrs:d}=l;const{themeClasses:h}=xn(o),{backgroundColorClasses:g,backgroundColorStyles:m}=qo(Ve(o,"color")),b=q(()=>{const _={};return o.length&&(_[o.vertical?"maxHeight":"maxWidth"]=Oe(o.length)),o.thickness&&(_[o.vertical?"borderRightWidth":"borderTopWidth"]=Oe(o.thickness)),_});return rt(()=>L("hr",{class:[{"v-divider":!0,"v-divider--inset":o.inset,"v-divider--vertical":o.vertical},h.value,g.value],style:[b.value,m.value],"aria-orientation":!d.role||d.role==="separator"?o.vertical?"vertical":"horizontal":void 0,role:`${d.role||"separator"}`},null)),{}}});function Un(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top center 0",d=arguments.length>2?arguments[2]:void 0;return tt({name:o,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:d},origin:{type:String,default:l}},setup(h,g){let{slots:m}=g;return()=>{const b=h.group?jA:uo;return To(b,{name:o,mode:h.mode,onBeforeEnter(_){_.style.transformOrigin=h.origin},onLeave(_){if(h.leaveAbsolute){const{offsetTop:k,offsetLeft:A,offsetWidth:y,offsetHeight:x}=_;_._transitionInitialStyles={position:_.style.position,top:_.style.top,left:_.style.left,width:_.style.width,height:_.style.height},_.style.position="absolute",_.style.top=`${k}px`,_.style.left=`${A}px`,_.style.width=`${y}px`,_.style.height=`${x}px`}h.hideOnLeave&&_.style.setProperty("display","none","important")},onAfterLeave(_){if(h.leaveAbsolute&&_!=null&&_._transitionInitialStyles){const{position:k,top:A,left:y,width:x,height:v}=_._transitionInitialStyles;delete _._transitionInitialStyles,_.style.position=k||"",_.style.top=A||"",_.style.left=y||"",_.style.width=x||"",_.style.height=v||""}}},m.default)}}})}function Py(o,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return tt({name:o,props:{mode:{type:String,default:d}},setup(h,g){let{slots:m}=g;return()=>To(uo,{name:o,...l},m.default)}})}function zy(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const d=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",h=gn(`offset-${d}`);return{onBeforeEnter(b){b._parent=b.parentNode,b._initialStyle={transition:b.style.transition,overflow:b.style.overflow,[d]:b.style[d]}},onEnter(b){const _=b._initialStyle;b.style.setProperty("transition","none","important"),b.style.overflow="hidden";const k=`${b[h]}px`;b.style[d]="0",b.offsetHeight,b.style.transition=_.transition,o&&b._parent&&b._parent.classList.add(o),requestAnimationFrame(()=>{b.style[d]=k})},onAfterEnter:m,onEnterCancelled:m,onLeave(b){b._initialStyle={transition:"",overflow:b.style.overflow,[d]:b.style[d]},b.style.overflow="hidden",b.style[d]=`${b[h]}px`,b.offsetHeight,requestAnimationFrame(()=>b.style[d]="0")},onAfterLeave:g,onLeaveCancelled:g};function g(b){o&&b._parent&&b._parent.classList.remove(o),m(b)}function m(b){const _=b._initialStyle[d];b.style.overflow=b._initialStyle.overflow,_!=null&&(b.style[d]=_),delete b._initialStyle}}const Ly=tt({name:"VDialogTransition",props:{target:Object},setup(o,l){let{slots:d}=l;const h={onBeforeEnter(g){g.style.pointerEvents="none",g.style.visibility="hidden"},async onEnter(g,m){var b;await new Promise(E=>requestAnimationFrame(E)),await new Promise(E=>requestAnimationFrame(E)),g.style.visibility="";const{x:_,y:k,sx:A,sy:y,speed:x}=Y_(o.target,g),v=g.animate([{transform:`translate(${_}px, ${k}px) scale(${A}, ${y})`,opacity:0},{transform:""}],{duration:225*x,easing:nz});(b=K_(g))==null||b.forEach(E=>{E.animate([{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*x,easing:gc})}),v.finished.then(()=>m())},onAfterEnter(g){g.style.removeProperty("pointer-events")},onBeforeLeave(g){g.style.pointerEvents="none"},async onLeave(g,m){var b;await new Promise(E=>requestAnimationFrame(E));const{x:_,y:k,sx:A,sy:y,speed:x}=Y_(o.target,g);g.animate([{transform:""},{transform:`translate(${_}px, ${k}px) scale(${A}, ${y})`,opacity:0}],{duration:125*x,easing:oz}).finished.then(()=>m()),(b=K_(g))==null||b.forEach(E=>{E.animate([{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*x,easing:gc})})},onAfterLeave(g){g.style.removeProperty("pointer-events")}};return()=>o.target?L(uo,xt({name:"dialog-transition"},h,{css:!1}),d):L(uo,{name:"dialog-transition"},d)}});function K_(o){var l;const d=(l=o.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:l.children;return d&&[...d]}function Y_(o,l){const d=o.getBoundingClientRect(),h=Wg(l),[g,m]=getComputedStyle(l).transformOrigin.split(" ").map(M=>parseFloat(M)),[b,_]=getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");let k=d.left+d.width/2;b==="left"||_==="left"?k-=d.width/2:(b==="right"||_==="right")&&(k+=d.width/2);let A=d.top+d.height/2;b==="top"||_==="top"?A-=d.height/2:(b==="bottom"||_==="bottom")&&(A+=d.height/2);const y=d.width/h.width,x=d.height/h.height,v=Math.max(1,y,x),E=y/v,N=x/v,P=h.width*h.height/(window.innerWidth*window.innerHeight),j=P>.12?Math.min(1.5,(P-.12)*10+1):1;return{x:k-(g+h.left),y:A-(m+h.top),sx:E,sy:N,speed:j}}Un("fab-transition","center center","out-in");Un("dialog-bottom-transition");Un("dialog-top-transition");Un("fade-transition");Un("scale-transition");Un("scroll-x-transition");Un("scroll-x-reverse-transition");Un("scroll-y-transition");Un("scroll-y-reverse-transition");Un("slide-x-transition");Un("slide-x-reverse-transition");const Oy=Un("slide-y-transition");Un("slide-y-reverse-transition");const _3=Py("expand-transition",zy()),Ry=Py("expand-x-transition",zy("",!0)),Jh=Symbol.for("vuetify:list");function Fy(){const o=et(Jh,{hasPrepend:we(!1),updateHasPrepend:()=>null}),l={hasPrepend:we(!1),updateHasPrepend:d=>{d&&(l.hasPrepend.value=d)}};return Ht(Jh,l),o}function jy(){return et(Jh,null)}const C3={open:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(d){const m=new Set;m.add(l);let b=g.get(l);for(;b!=null;)m.add(b),b=g.get(b);return m}else return h.delete(l),h},select:()=>null},Vy={open:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(d){let m=g.get(l);for(h.add(l);m!=null&&m!==l;)h.add(m),m=g.get(m);return h}else h.delete(l);return h},select:()=>null},A3={open:Vy.open,select:o=>{let{id:l,value:d,opened:h,parents:g}=o;if(!d)return h;const m=[];let b=g.get(l);for(;b!=null;)m.push(b),b=g.get(b);return new Set(m)}},tf=o=>{const l={select:d=>{let{id:h,value:g,selected:m}=d;if(o&&!g){const b=Array.from(m.entries()).reduce((_,k)=>{let[A,y]=k;return y==="on"?[..._,A]:_},[]);if(b.length===1&&b[0]===h)return m}return m.set(h,g?"on":"off"),m},in:(d,h,g)=>{let m=new Map;for(const b of d||[])m=l.select({id:b,value:!0,selected:new Map(m),children:h,parents:g});return m},out:d=>{const h=[];for(const[g,m]of d.entries())m==="on"&&h.push(g);return h}};return l},Hy=o=>{const l=tf(o);return{select:h=>{let{selected:g,id:m,...b}=h;const _=g.has(m)?new Map([[m,g.get(m)]]):new Map;return l.select({...b,id:m,selected:_})},in:(h,g,m)=>{let b=new Map;return h!=null&&h.length&&(b=l.in(h.slice(0,1),g,m)),b},out:(h,g,m)=>l.out(h,g,m)}},y3=o=>{const l=tf(o);return{select:h=>{let{id:g,selected:m,children:b,..._}=h;return b.has(g)?m:l.select({id:g,selected:m,children:b,..._})},in:l.in,out:l.out}},x3=o=>{const l=Hy(o);return{select:h=>{let{id:g,selected:m,children:b,..._}=h;return b.has(g)?m:l.select({id:g,selected:m,children:b,..._})},in:l.in,out:l.out}},E3=o=>{const l={select:d=>{let{id:h,value:g,selected:m,children:b,parents:_}=d;const k=new Map(m),A=[h];for(;A.length;){const x=A.shift();m.set(x,g?"on":"off"),b.has(x)&&A.push(...b.get(x))}let y=_.get(h);for(;y;){const x=b.get(y),v=x.every(N=>m.get(N)==="on"),E=x.every(N=>!m.has(N)||m.get(N)==="off");m.set(y,v?"on":E?"off":"indeterminate"),y=_.get(y)}return o&&!g&&Array.from(m.entries()).reduce((v,E)=>{let[N,P]=E;return P==="on"?[...v,N]:v},[]).length===0?k:m},in:(d,h,g)=>{let m=new Map;for(const b of d||[])m=l.select({id:b,value:!0,selected:new Map(m),children:h,parents:g});return m},out:(d,h)=>{const g=[];for(const[m,b]of d.entries())b==="on"&&!h.has(m)&&g.push(m);return g}};return l},Ea=Symbol.for("vuetify:nested"),Uy={id:we(),root:{register:()=>null,unregister:()=>null,parents:we(new Map),children:we(new Map),open:()=>null,select:()=>null,opened:we(new Set),selected:we(new Map),selectedValues:we([])}},S3=Ge({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),D3=o=>{let l=!1;const d=we(new Map),h=we(new Map),g=rn(o,"opened",o.opened,x=>new Set(x),x=>[...x.values()]),m=q(()=>{if(typeof o.selectStrategy=="object")return o.selectStrategy;switch(o.selectStrategy){case"single-leaf":return x3(o.mandatory);case"leaf":return y3(o.mandatory);case"independent":return tf(o.mandatory);case"single-independent":return Hy(o.mandatory);case"classic":default:return E3(o.mandatory)}}),b=q(()=>{if(typeof o.openStrategy=="function")return o.openStrategy;switch(o.openStrategy){case"list":return A3;case"single":return C3;case"multiple":default:return Vy}}),_=rn(o,"selected",o.selected,x=>m.value.in(x,d.value,h.value),x=>m.value.out(x,d.value,h.value));yn(()=>{l=!0});function k(x){const v=[];let E=x;for(;E!=null;)v.unshift(E),E=h.value.get(E);return v}const A=sn("nested"),y={id:we(),root:{opened:g,selected:_,selectedValues:q(()=>{const x=[];for(const[v,E]of _.value.entries())E==="on"&&x.push(v);return x}),register:(x,v,E)=>{v&&x!==v&&h.value.set(x,v),E&&d.value.set(x,[]),v!=null&&d.value.set(v,[...d.value.get(v)||[],x])},unregister:x=>{if(l)return;d.value.delete(x);const v=h.value.get(x);if(v){var E;const N=(E=d.value.get(v))!=null?E:[];d.value.set(v,N.filter(P=>P!==x))}h.value.delete(x),g.value.delete(x)},open:(x,v,E)=>{A.emit("click:open",{id:x,value:v,path:k(x),event:E});const N=b.value.open({id:x,value:v,opened:new Set(g.value),children:d.value,parents:h.value,event:E});N&&(g.value=N)},select:(x,v,E)=>{A.emit("click:select",{id:x,value:v,path:k(x),event:E});const N=m.value.select({id:x,value:v,selected:new Map(_.value),children:d.value,parents:h.value,event:E});N&&(_.value=N);const P=b.value.select({id:x,value:v,selected:new Map(_.value),opened:new Set(g.value),children:d.value,parents:h.value,event:E});P&&(g.value=P)},children:d,parents:h}};return Ht(Ea,y),y.root},$y=(o,l)=>{const d=et(Ea,Uy),h=q(()=>{var m;return(m=o.value)!=null?m:go().toString()}),g={...d,id:h,open:(m,b)=>d.root.open(h.value,m,b),isOpen:q(()=>d.root.opened.value.has(h.value)),parent:q(()=>d.root.parents.value.get(h.value)),select:(m,b)=>d.root.select(h.value,m,b),isSelected:q(()=>d.root.selected.value.get(h.value)==="on"),isIndeterminate:q(()=>d.root.selected.value.get(h.value)==="indeterminate"),isLeaf:q(()=>!d.root.children.value.get(h.value)),isGroupActivator:d.isGroupActivator};return!d.isGroupActivator&&d.root.register(h.value,d.id.value,l),yn(()=>{!d.isGroupActivator&&d.root.unregister(h.value)}),l&&Ht(Ea,g),g},I3=()=>{const o=et(Ea,Uy);Ht(Ea,{...o,isGroupActivator:!0})},T3=tt({name:"VListGroupActivator",setup(o,l){let{slots:d}=l;return I3(),()=>{var h;return(h=d.default)==null?void 0:h.call(d)}}}),M3=Ge({activeColor:String,color:String,collapseIcon:{type:vt,default:"$collapse"},expandIcon:{type:vt,default:"$expand"},prependIcon:vt,appendIcon:vt,fluid:Boolean,subgroup:Boolean,value:null,...En()}),Wy=Xn()({name:"VListGroup",props:{title:String,...M3()},setup(o,l){let{slots:d}=l;const{isOpen:h,open:g}=$y(Ve(o,"value"),!0),m=jy(),b=A=>{g(!h.value,A)},_=q(()=>({onClick:b,class:"v-list-group__header"})),k=q(()=>h.value?o.collapseIcon:o.expandIcon);return rt(()=>{var A;return L(o.tag,{class:["v-list-group",{"v-list-group--prepend":m==null?void 0:m.hasPrepend.value,"v-list-group--fluid":o.fluid,"v-list-group--subgroup":o.subgroup}]},{default:()=>[d.activator&&L(ao,{defaults:{VListItem:{active:h.value,activeColor:o.activeColor,color:o.color,prependIcon:o.prependIcon||o.subgroup&&k.value,appendIcon:o.appendIcon||!o.subgroup&&k.value,title:o.title,value:o.value}}},{default:()=>[L(T3,null,{default:()=>[d.activator({props:_.value,isOpen:h})]})]}),L(_3,null,{default:()=>[Vn(L("div",{class:"v-list-group__items"},[(A=d.default)==null?void 0:A.call(d)]),[[yi,h.value]])]})]})}),{}}});function B3(o){return gs(o,Object.keys(Wy.props))}const N3=ay("v-list-item-subtitle"),qy=ay("v-list-item-title"),Eo=Xn()({name:"VListItem",directives:{Ripple:Fc},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:vt,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:vt,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,...ps(),...xi(),...Oa(),...ks(),...Si(),...ef(),...En(),...an(),...vs({variant:"text"})},setup(o,l){let{attrs:d,slots:h}=l;const g=Xg(o,d),m=q(()=>{var ne;return(ne=o.value)!=null?ne:g.href.value}),{select:b,isSelected:_,isIndeterminate:k,isGroupActivator:A,root:y,parent:x}=$y(m,!1),v=jy(),E=q(()=>{var ne;return o.active!==!1&&(o.active||((ne=g.isExactActive)==null?void 0:ne.value)||_.value)}),N=q(()=>o.link!==!1&&g.isLink.value),P=q(()=>!o.disabled&&o.link!==!1&&(o.link||g.isClickable.value||o.value!=null&&!!v)),j=q(()=>o.rounded||o.nav),M=q(()=>{var ne;return{color:E.value&&(ne=o.activeColor)!=null?ne:o.color,variant:o.variant}});Ze(()=>{var ne;return(ne=g.isExactActive)==null?void 0:ne.value},ne=>{ne&&x.value!=null&&y.open(x.value,!0)},{immediate:!0});const{themeClasses:T}=xn(o),{borderClasses:O}=bs(o),{colorClasses:G,colorStyles:H,variantClasses:Q}=Jg(M),{densityClasses:R}=Ei(o),{dimensionStyles:V}=Ra(o),{elevationClasses:W}=ws(o),{roundedClasses:K}=Di(j),ee=q(()=>o.lines?`v-list-item--${o.lines}-line`:void 0),J=q(()=>({isActive:E.value,select:b,isSelected:_.value,isIndeterminate:k.value}));return rt(()=>{var ne,ae,be,he,Ae,Ee,He;const It=N.value?"a":o.tag,_t=!v||_.value||E.value,Ne=h.title||o.title,Tt=h.subtitle||o.subtitle,fn=!!(h.append||o.appendAvatar||o.appendIcon),U=!!(h.prepend||o.prependAvatar||o.prependIcon);return v==null||v.updateHasPrepend(U),Vn(L(It,{class:["v-list-item",{"v-list-item--active":E.value,"v-list-item--disabled":o.disabled,"v-list-item--link":P.value,"v-list-item--nav":o.nav,"v-list-item--prepend":!U&&(v==null?void 0:v.hasPrepend.value),[`${o.activeClass}`]:E.value},T.value,O.value,_t?G.value:void 0,R.value,W.value,ee.value,K.value,Q.value],style:[_t?H.value:void 0,V.value],href:g.href.value,tabindex:P.value?0:void 0,onClick:P.value&&(ce=>{var de;A||((de=g.navigate)==null||de.call(g,ce),o.value!=null&&b(!_.value,ce))})},{default:()=>[Zg(P.value||E.value,"v-list-item"),U&&L(ao,{key:"prepend",defaults:{VAvatar:{density:o.density,image:o.prependAvatar},VIcon:{density:o.density,icon:o.prependIcon},VListItemAction:{start:!0}}},{default:()=>[L("div",{class:"v-list-item__prepend"},[o.prependAvatar&&L(Aa,{key:"prepend-avatar"},null),o.prependIcon&&L(it,{key:"prepend-icon"},null),(ne=h.prepend)==null?void 0:ne.call(h,J.value)])]}),L("div",{class:"v-list-item__content"},[Ne&&L(qy,{key:"title"},{default:()=>[(ae=(be=h.title)==null?void 0:be.call(h,{title:o.title}))!=null?ae:o.title]}),Tt&&L(N3,{key:"subtitle"},{default:()=>[(he=(Ae=h.subtitle)==null?void 0:Ae.call(h,{subtitle:o.subtitle}))!=null?he:o.subtitle]}),(Ee=h.default)==null?void 0:Ee.call(h,J.value)]),fn&&L(ao,{key:"append",defaults:{VAvatar:{density:o.density,image:o.appendAvatar},VIcon:{density:o.density,icon:o.appendIcon},VListItemAction:{end:!0}}},{default:()=>[L("div",{class:"v-list-item__append"},[(He=h.append)==null?void 0:He.call(h,J.value),o.appendIcon&&L(it,{key:"append-icon"},null),o.appendAvatar&&L(Aa,{key:"append-avatar"},null)])]})]}),[[Ai("ripple"),P.value]])}),{}}}),P3=tt({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...En()},setup(o,l){let{slots:d}=l;const{textColorClasses:h,textColorStyles:g}=_i(Ve(o,"color"));return rt(()=>{var m,b;const _=!!(d.default||o.title);return L(o.tag,{class:["v-list-subheader",{"v-list-subheader--inset":o.inset,"v-list-subheader--sticky":o.sticky},h.value],style:{textColorStyles:g}},{default:()=>[_&&L("div",{class:"v-list-subheader__text"},[(m=(b=d.default)==null?void 0:b.call(d))!=null?m:o.title])]})}),{}}}),Gy=Xn()({name:"VListChildren",props:{items:Array},setup(o,l){let{slots:d}=l;return Fy(),()=>{var h,g,m;return(h=(g=d.default)==null?void 0:g.call(d))!=null?h:(m=o.items)==null?void 0:m.map(b=>{let{children:_,props:k,type:A,raw:y}=b;if(A==="divider"){var x,v;return(x=(v=d.divider)==null?void 0:v.call(d,{props:k}))!=null?x:L(Ny,k,null)}if(A==="subheader"){var E,N;return(E=(N=d.subheader)==null?void 0:N.call(d,{props:k}))!=null?E:L(P3,k,{default:d.subheader})}const P={subtitle:d.subtitle?T=>{var O;return(O=d.subtitle)==null?void 0:O.call(d,{...T,item:y})}:void 0,prepend:d.prepend?T=>{var O;return(O=d.prepend)==null?void 0:O.call(d,{...T,item:y})}:void 0,append:d.append?T=>{var O;return(O=d.append)==null?void 0:O.call(d,{...T,item:y})}:void 0,default:d.default?T=>{var O;return(O=d.default)==null?void 0:O.call(d,{...T,item:y})}:void 0,title:d.title?T=>{var O;return(O=d.title)==null?void 0:O.call(d,{...T,item:y})}:void 0},[j,M]=B3(k);return _?L(Wy,xt({value:k==null?void 0:k.value},j),{activator:T=>{let{props:O}=T;return d.header?d.header({...k,...O}):L(Eo,xt(k,O),P)},default:()=>L(Gy,{items:_},d)}):d.item?d.item(k):L(Eo,k,P)})}}}),Ky=Ge({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Yy(o,l){const d=Uo(l,o.itemTitle,l),h=Uo(l,o.itemValue,d),g=Uo(l,o.itemChildren),m=o.itemProps===!0?gs(l,["children"])[1]:Uo(l,o.itemProps),b={title:d,value:h,...m};return{title:b.title,value:b.value,props:b,children:Array.isArray(g)?Qy(o,g):void 0,raw:l}}function Qy(o,l){const d=[];for(const h of l)d.push(Yy(o,h));return d}function z3(o){const l=q(()=>Qy(o,o.items));function d(g){return g.map(m=>Yy(o,m))}function h(g){return o.returnObject?g.map(m=>{let{raw:b}=m;return b}):g.map(m=>{let{props:b}=m;return b.value})}return{items:l,transformIn:d,transformOut:h}}function L3(o,l){const d=Uo(l,o.itemType,"item"),h=typeof l=="string"?l:Uo(l,o.itemTitle),g=Uo(l,o.itemValue,void 0),m=Uo(l,o.itemChildren),b=o.itemProps===!0?gs(l,["children"])[1]:Uo(l,o.itemProps),_={title:h,value:g,...b};return{type:d,title:_.title,value:_.value,props:_,children:d==="item"&&m?Zy(o,m):void 0,raw:l}}function Zy(o,l){const d=[];for(const h of l)d.push(L3(o,h));return d}function O3(o){return{items:q(()=>Zy(o,o.items))}}const ha=Xn()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...S3({selectStrategy:"single-leaf",openStrategy:"list"}),...ps(),...xi(),...Oa(),...ks(),itemType:{type:String,default:"type"},...Ky(),...Si(),...En(),...an(),...vs({variant:"text"})},emits:{"update:selected":o=>!0,"update:opened":o=>!0,"click:open":o=>!0,"click:select":o=>!0},setup(o,l){let{slots:d}=l;const{items:h}=O3(o),{themeClasses:g}=xn(o),{backgroundColorClasses:m,backgroundColorStyles:b}=qo(Ve(o,"bgColor")),{borderClasses:_}=bs(o),{densityClasses:k}=Ei(o),{dimensionStyles:A}=Ra(o),{elevationClasses:y}=ws(o),{roundedClasses:x}=Di(o),{open:v,select:E}=D3(o),N=q(()=>o.lines?`v-list--${o.lines}-line`:void 0),P=Ve(o,"activeColor"),j=Ve(o,"color");return Fy(),fs({VListGroup:{activeColor:P,color:j},VListItem:{activeClass:Ve(o,"activeClass"),activeColor:P,color:j,density:Ve(o,"density"),disabled:Ve(o,"disabled"),lines:Ve(o,"lines"),nav:Ve(o,"nav"),variant:Ve(o,"variant")}}),rt(()=>L(o.tag,{class:["v-list",{"v-list--disabled":o.disabled,"v-list--nav":o.nav},g.value,m.value,_.value,k.value,y.value,N.value,x.value],style:[b.value,A.value]},{default:()=>[L(Gy,{items:h.value},d)]})),{open:v,select:E}}});function Jy(){const o=we(!1);return Hn(()=>{window.requestAnimationFrame(()=>{o.value=!0})}),{ssrBootStyles:q(()=>o.value?void 0:{transition:"none !important"}),isBooted:hs(o)}}const R3=tt({name:"VMain",props:{scrollable:Boolean,...En({tag:"main"})},setup(o,l){let{slots:d}=l;const{mainStyles:h}=Hz(),{ssrBootStyles:g}=Jy();return rt(()=>{var m,b;return L(o.tag,{class:["v-main",{"v-main--scrollable":o.scrollable}],style:[h.value,g.value]},{default:()=>[o.scrollable?L("div",{class:"v-main__scroller"},[(m=d.default)==null?void 0:m.call(d)]):(b=d.default)==null?void 0:b.call(d)]})}),{}}});function F3(o){let{rootEl:l,isSticky:d,layoutItemStyles:h}=o;const g=we(!1),m=we(0),b=q(()=>{const A=typeof g.value=="boolean"?"top":g.value;return[d.value?{top:"auto",bottom:"auto",height:void 0}:void 0,g.value?{[A]:Oe(m.value)}:{top:h.value.top}]});Hn(()=>{Ze(d,A=>{A?window.addEventListener("scroll",k,{passive:!0}):window.removeEventListener("scroll",k)},{immediate:!0})}),yn(()=>{document.removeEventListener("scroll",k)});let _=0;function k(){var A;const y=_>window.scrollY?"up":"down",x=l.value.getBoundingClientRect(),v=parseFloat((A=h.value.top)!=null?A:0),E=window.scrollY-Math.max(0,m.value-v),N=x.height+Math.max(m.value,v)-window.scrollY-window.innerHeight;x.height<window.innerHeight-v?(g.value="top",m.value=v):y==="up"&&g.value==="bottom"||y==="down"&&g.value==="top"?(m.value=window.scrollY+x.top,g.value=!0):y==="down"&&N<=0?(m.value=0,g.value="bottom"):y==="up"&&E<=0&&(m.value=x.top+E,g.value="top"),_=window.scrollY}return{isStuck:g,stickyStyles:b}}const j3=100,V3=20;function Q_(o){const l=1.41421356237;return(o<0?-1:1)*Math.sqrt(Math.abs(o))*l}function Z_(o){if(o.length<2)return 0;if(o.length===2)return o[1].t===o[0].t?0:(o[1].d-o[0].d)/(o[1].t-o[0].t);let l=0;for(let d=o.length-1;d>0;d--){if(o[d].t===o[d-1].t)continue;const h=Q_(l),g=(o[d].d-o[d-1].d)/(o[d].t-o[d-1].t);l+=(g-h)*Math.abs(g),d===o.length-1&&(l*=.5)}return Q_(l)*1e3}function H3(){const o={};function l(g){Array.from(g.changedTouches).forEach(m=>{var b;((b=o[m.identifier])!=null?b:o[m.identifier]=new FP(V3)).push([g.timeStamp,m])})}function d(g){Array.from(g.changedTouches).forEach(m=>{delete o[m.identifier]})}function h(g){var m;const b=(m=o[g])==null?void 0:m.values().reverse();if(!b)throw new Error(`No samples for touch id ${g}`);const _=b[0],k=[],A=[];for(const y of b){if(_[0]-y[0]>j3)break;k.push({t:y[0],d:y[1].clientX}),A.push({t:y[0],d:y[1].clientY})}return{x:Z_(k),y:Z_(A),get direction(){const{x:y,y:x}=this,[v,E]=[Math.abs(y),Math.abs(x)];return v>E&&y>=0?"right":v>E&&y<=0?"left":E>v&&x>=0?"down":E>v&&x<=0?"up":U3()}}}return{addMovement:l,endTouch:d,getVelocity:h}}function U3(){throw new Error}function $3(o){let{isActive:l,isTemporary:d,width:h,touchless:g,position:m}=o;Hn(()=>{window.addEventListener("touchstart",M,{passive:!0}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",O,{passive:!0})}),yn(()=>{window.removeEventListener("touchstart",M),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",O)});const b=q(()=>m.value!=="bottom"),{addMovement:_,endTouch:k,getVelocity:A}=H3();let y=!1;const x=we(!1),v=we(0),E=we(0);let N;function P(H,Q){return(m.value==="left"?H:m.value==="right"?document.documentElement.clientWidth-H:m.value==="bottom"?document.documentElement.clientHeight-H:Hr())-(Q?h.value:0)}function j(H){let Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const R=m.value==="left"?(H-E.value)/h.value:m.value==="right"?(document.documentElement.clientWidth-H-E.value)/h.value:m.value==="bottom"?(document.documentElement.clientHeight-H-E.value)/h.value:Hr();return Q?Math.max(0,Math.min(1,R)):R}function M(H){if(g.value)return;const Q=H.changedTouches[0].clientX,R=H.changedTouches[0].clientY,V=25,W=m.value==="left"?Q<V:m.value==="right"?Q>document.documentElement.clientWidth-V:m.value==="bottom"?R>document.documentElement.clientHeight-V:Hr(),K=l.value&&(m.value==="left"?Q<h.value:m.value==="right"?Q>document.documentElement.clientWidth-h.value:m.value==="bottom"?R>document.documentElement.clientHeight-h.value:Hr());(W||K||l.value&&d.value)&&(y=!0,N=[Q,R],E.value=P(b.value?Q:R,l.value),v.value=j(b.value?Q:R),k(H),_(H))}function T(H){const Q=H.changedTouches[0].clientX,R=H.changedTouches[0].clientY;if(y){if(!H.cancelable){y=!1;return}const W=Math.abs(Q-N[0]),K=Math.abs(R-N[1]);(b.value?W>K&&W>3:K>W&&K>3)?(x.value=!0,y=!1):(b.value?K:W)>3&&(y=!1)}if(!x.value)return;H.preventDefault(),_(H);const V=j(b.value?Q:R,!1);v.value=Math.max(0,Math.min(1,V)),V>1?E.value=P(b.value?Q:R,!0):V<0&&(E.value=P(b.value?Q:R,!1))}function O(H){if(y=!1,!x.value)return;_(H),x.value=!1;const Q=A(H.changedTouches[0].identifier),R=Math.abs(Q.x),V=Math.abs(Q.y);(b.value?R>V&&R>400:V>R&&V>3)?l.value=Q.direction===({left:"right",right:"left",bottom:"up"}[m.value]||Hr()):l.value=v.value>.5}const G=q(()=>x.value?{transform:m.value==="left"?`translateX(calc(-100% + ${v.value*h.value}px))`:m.value==="right"?`translateX(calc(100% - ${v.value*h.value}px))`:m.value==="bottom"?`translateY(calc(100% - ${v.value*h.value}px))`:Hr(),transition:"none"}:void 0);return{isDragging:x,dragProgress:v,dragStyles:G}}function Hr(){throw new Error}const W3=["start","end","left","right","bottom"],q3=tt({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:o=>W3.includes(o)},sticky:Boolean,...ps(),...ks(),...Vz(),...Si(),...En({tag:"nav"}),...an()},emits:{"update:modelValue":o=>!0},setup(o,l){let{attrs:d,slots:h}=l;const{isRtl:g}=Pa(),{themeClasses:m}=xn(o),{borderClasses:b}=bs(o),{backgroundColorClasses:_,backgroundColorStyles:k}=qo(Ve(o,"color")),{elevationClasses:A}=ws(o),{mobile:y}=uz(),{roundedClasses:x}=Di(o),v=By(),E=rn(o,"modelValue",null,he=>!!he),{ssrBootStyles:N}=Jy(),P=we(),j=we(!1),M=q(()=>o.rail&&o.expandOnHover&&j.value?Number(o.width):Number(o.rail?o.railWidth:o.width)),T=q(()=>$h(o.location,g.value)),O=q(()=>!o.permanent&&(y.value||o.temporary)),G=q(()=>o.sticky&&!O.value&&T.value!=="bottom");o.disableResizeWatcher||Ze(O,he=>!o.permanent&&(E.value=!he)),!o.disableRouteWatcher&&v&&Ze(v.currentRoute,()=>O.value&&(E.value=!1)),Ze(()=>o.permanent,he=>{he&&(E.value=!0)}),Na(()=>{o.modelValue!=null||O.value||(E.value=o.permanent||!y.value)});const{isDragging:H,dragProgress:Q,dragStyles:R}=$3({isActive:E,isTemporary:O,width:M,touchless:Ve(o,"touchless"),position:T}),V=q(()=>{const he=O.value?0:o.rail&&o.expandOnHover?Number(o.railWidth):M.value;return H.value?he*Q.value:he}),{layoutItemStyles:W,layoutRect:K,layoutItemScrimStyles:ee}=Uz({id:o.name,order:q(()=>parseInt(o.order,10)),position:T,layoutSize:V,elementSize:M,active:q(()=>E.value||H.value),disableTransitions:q(()=>H.value),absolute:q(()=>o.absolute||G.value&&typeof J.value!="string")}),{isStuck:J,stickyStyles:ne}=F3({rootEl:P,isSticky:G,layoutItemStyles:W}),ae=qo(q(()=>typeof o.scrim=="string"?o.scrim:null)),be=q(()=>({...H.value?{opacity:Q.value*.2,transition:"none"}:void 0,...K.value?{left:Oe(K.value.left),right:Oe(K.value.right),top:Oe(K.value.top),bottom:Oe(K.value.bottom)}:void 0,...ee.value}));return fs({VList:{bgColor:"transparent"}}),rt(()=>{var he,Ae,Ee,He;const It=h.image||o.image;return L(We,null,[L(o.tag,xt({ref:P,onMouseenter:()=>j.value=!0,onMouseleave:()=>j.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${T.value}`,{"v-navigation-drawer--expand-on-hover":o.expandOnHover,"v-navigation-drawer--floating":o.floating,"v-navigation-drawer--is-hovering":j.value,"v-navigation-drawer--rail":o.rail,"v-navigation-drawer--temporary":O.value,"v-navigation-drawer--active":E.value,"v-navigation-drawer--sticky":G.value},m.value,_.value,b.value,A.value,x.value],style:[k.value,W.value,R.value,N.value,ne.value]},d),{default:()=>[It&&L("div",{key:"image",class:"v-navigation-drawer__img"},[h.image?(he=h.image)==null?void 0:he.call(h,{image:o.image}):L("img",{src:o.image,alt:""},null)]),h.prepend&&L("div",{class:"v-navigation-drawer__prepend"},[(Ae=h.prepend)==null?void 0:Ae.call(h)]),L("div",{class:"v-navigation-drawer__content"},[(Ee=h.default)==null?void 0:Ee.call(h)]),h.append&&L("div",{class:"v-navigation-drawer__append"},[(He=h.append)==null?void 0:He.call(h)])]}),L(uo,{name:"fade-transition"},{default:()=>[O.value&&(H.value||E.value)&&!!o.scrim&&L("div",{class:["v-navigation-drawer__scrim",ae.backgroundColorClasses.value],style:[be.value,ae.backgroundColorStyles.value],onClick:()=>E.value=!1},null)]})])}),{isStuck:J}}}),G3=Et("mdi-plus-circle"),K3=Et(" \u65B0\u589E\u7B46\u8A18 "),Y3=Le("span",{class:"mr-3"},"\u6A21\u5F0F",-1),Q3=Et(" Sandy "),Z3={__name:"Layout",setup(o){const l=Rz(),d=we([{href:"/",text:"\u6240\u6709\u7B46\u8A18",value:"all",icon:"mdi-file-document-outline"},{href:"/fav",text:"\u6377\u5F91",value:"fav",icon:"mdi-star"},{href:"/tag",text:"\u6A19\u7C64",value:"tag",icon:"mdi-tag"},{href:"/calendar",text:"\u6708\u66C6",value:"calendar",icon:"mdi-calendar-blank-outline"},{href:"/share",text:"\u8207\u6211\u5171\u7528",value:"share",icon:"mdi-account-multiple"},{href:"/trash",text:"\u5783\u573E\u6876",value:"delete",icon:"mdi-delete-outline"}]);Hn(()=>{l.global.name.value=window.localStorage.getItem("noteTheme")||"lightTheme"});const h=g=>{window.localStorage.setItem("noteTheme",g),l.global.name.value=g};return(g,m)=>{const b=Ng("router-view");return $e(),yt(We,null,[L(q3,{class:"a-drawer",permanent:""},{append:Qe(()=>[L(ha,null,{default:Qe(()=>[L(Eo,null,{default:Qe(()=>[Le("div",null,[Y3,L(fh,{icon:"mdi-weather-sunny",size:"x-small",class:Fn(["ml-3",{"mode-active":Zt(l).global.name.value==="lightTheme"}]),color:"#ffffff",variant:Zt(l).global.name.value==="darkTheme"?"outlined":"elevated",onClick:m[0]||(m[0]=_=>h("lightTheme"))},null,8,["class","variant"]),L(fh,{icon:"mdi-weather-night",size:"x-small",class:Fn(["ml-3",{"mode-active":Zt(l).global.name.value==="darkTheme"}]),color:"#ffffff",variant:Zt(l).global.name.value==="lightTheme"?"outlined":"elevated",onClick:m[1]||(m[1]=_=>h("darkTheme"))},null,8,["class","variant"])])]),_:1}),L(Eo,{class:"append-user"},{default:Qe(()=>[L(Aa,{class:"mr-3"},{default:Qe(()=>[L(it,{icon:"mdi-account-circle",size:"35"})]),_:1}),Q3]),_:1})]),_:1})]),default:Qe(()=>[L(ha,null,{default:Qe(()=>[L(Eo,{title:"FreeNote.",class:"drawer-title"}),L(Eo,null,{default:Qe(()=>[L(fh,{block:"",class:"mt-3 add-note"},{default:Qe(()=>[L(it,{class:"mr-2",size:"28"},{default:Qe(()=>[G3]),_:1}),K3]),_:1})]),_:1})]),_:1}),L(ha,{class:"router-list"},{default:Qe(()=>[($e(!0),yt(We,null,hi(d.value,_=>($e(),Jn(Eo,{to:_.href,"prepend-icon":_.icon,title:_.text,value:_.value},null,8,["to","prepend-icon","title","value"]))),256))]),_:1})]),_:1}),L(R3,null,{default:Qe(()=>[L(b)]),_:1})],64)}}};const J3=tt({name:"VApp",props:{...jz({fullHeight:!0}),...an()},setup(o,l){let{slots:d}=l;const h=xn(o),{layoutClasses:g,layoutStyles:m,getLayoutItem:b,items:_,layoutRef:k}=Wz(o),{rtlClasses:A}=Pa();return rt(()=>{var y;return L("div",{ref:k,class:["v-application",h.themeClasses.value,g.value,A.value],style:m.value},[L("div",{class:"v-application__wrap"},[(y=d.default)==null?void 0:y.call(d)])])}),{getLayoutItem:b,items:_,theme:h}}}),X3={__name:"App",setup(o){return(l,d)=>($e(),Jn(J3,null,{default:Qe(()=>[L(Z3)]),_:1}))}};const eL={dark:!1,colors:{primary:"#2F419B",drawerText:"#ffffff",text:"#555555",pageDrawerBg:"#F4F6F7",pageDrawerBorder:"#E6E6E6",background:"#FFFFFF",contentText:"#666666",tagBg:"#E9EBF4",tagText:"#2F419B",title:"#555555",cardAngle:"#E9EBF4",searchInputBg:"#E6E6E6",btnBg:"#FFFFFF",link:"#666666",listHover:"#E9EBF4"}},tL={dark:!0,colors:{primary:"#26252A",drawerText:"#ffffff",text:"#A3A3A3",pageDrawerBg:"#343338",pageDrawerBorder:"#666666",background:"#26252A",contentText:"#F2F2F2",tagBg:"#343338",tagText:"#FED32C",title:"#FFFFFF",cardAngle:"#FED32C",searchInputBg:"#26252A",btnBg:"#FED32C",listHover:"#26252A"}},nL=qz({theme:{defaultTheme:"lightTheme",themes:{lightTheme:eL,darkTheme:tL}}});/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof window<"u";function oL(o){return o.__esModule||o[Symbol.toStringTag]==="Module"}const ut=Object.assign;function mh(o,l){const d={};for(const h in l){const g=l[h];d[h]=ho(g)?g.map(o):o(g)}return d}const ga=()=>{},ho=Array.isArray,iL=/\/$/,rL=o=>o.replace(iL,"");function ph(o,l,d="/"){let h,g={},m="",b="";const _=l.indexOf("#");let k=l.indexOf("?");return _<k&&_>=0&&(k=-1),k>-1&&(h=l.slice(0,k),m=l.slice(k+1,_>-1?_:l.length),g=o(m)),_>-1&&(h=h||l.slice(0,_),b=l.slice(_,l.length)),h=cL(h!=null?h:l,d),{fullPath:h+(m&&"?")+m+b,path:h,query:g,hash:b}}function sL(o,l){const d=l.query?o(l.query):"";return l.path+(d&&"?")+d+(l.hash||"")}function J_(o,l){return!l||!o.toLowerCase().startsWith(l.toLowerCase())?o:o.slice(l.length)||"/"}function aL(o,l,d){const h=l.matched.length-1,g=d.matched.length-1;return h>-1&&h===g&&as(l.matched[h],d.matched[g])&&Xy(l.params,d.params)&&o(l.query)===o(d.query)&&l.hash===d.hash}function as(o,l){return(o.aliasOf||o)===(l.aliasOf||l)}function Xy(o,l){if(Object.keys(o).length!==Object.keys(l).length)return!1;for(const d in o)if(!lL(o[d],l[d]))return!1;return!0}function lL(o,l){return ho(o)?X_(o,l):ho(l)?X_(l,o):o===l}function X_(o,l){return ho(l)?o.length===l.length&&o.every((d,h)=>d===l[h]):o.length===1&&o[0]===l}function cL(o,l){if(o.startsWith("/"))return o;if(!o)return l;const d=l.split("/"),h=o.split("/");let g=d.length-1,m,b;for(m=0;m<h.length;m++)if(b=h[m],b!==".")if(b==="..")g>1&&g--;else break;return d.slice(0,g).join("/")+"/"+h.slice(m-(m===h.length?1:0)).join("/")}var Sa;(function(o){o.pop="pop",o.push="push"})(Sa||(Sa={}));var fa;(function(o){o.back="back",o.forward="forward",o.unknown=""})(fa||(fa={}));function dL(o){if(!o)if(Kr){const l=document.querySelector("base");o=l&&l.getAttribute("href")||"/",o=o.replace(/^\w+:\/\/[^\/]+/,"")}else o="/";return o[0]!=="/"&&o[0]!=="#"&&(o="/"+o),rL(o)}const uL=/^[^#]+#/;function hL(o,l){return o.replace(uL,"#")+l}function gL(o,l){const d=document.documentElement.getBoundingClientRect(),h=o.getBoundingClientRect();return{behavior:l.behavior,left:h.left-d.left-(l.left||0),top:h.top-d.top-(l.top||0)}}const jc=()=>({left:window.pageXOffset,top:window.pageYOffset});function fL(o){let l;if("el"in o){const d=o.el,h=typeof d=="string"&&d.startsWith("#"),g=typeof d=="string"?h?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!g)return;l=gL(g,o)}else l=o;"scrollBehavior"in document.documentElement.style?window.scrollTo(l):window.scrollTo(l.left!=null?l.left:window.pageXOffset,l.top!=null?l.top:window.pageYOffset)}function eC(o,l){return(history.state?history.state.position-l:-1)+o}const Xh=new Map;function mL(o,l){Xh.set(o,l)}function pL(o){const l=Xh.get(o);return Xh.delete(o),l}let bL=()=>location.protocol+"//"+location.host;function e1(o,l){const{pathname:d,search:h,hash:g}=l,m=o.indexOf("#");if(m>-1){let _=g.includes(o.slice(m))?o.slice(m).length:1,k=g.slice(_);return k[0]!=="/"&&(k="/"+k),J_(k,"")}return J_(d,o)+h+g}function kL(o,l,d,h){let g=[],m=[],b=null;const _=({state:v})=>{const E=e1(o,location),N=d.value,P=l.value;let j=0;if(v){if(d.value=E,l.value=v,b&&b===N){b=null;return}j=P?v.position-P.position:0}else h(E);g.forEach(M=>{M(d.value,N,{delta:j,type:Sa.pop,direction:j?j>0?fa.forward:fa.back:fa.unknown})})};function k(){b=d.value}function A(v){g.push(v);const E=()=>{const N=g.indexOf(v);N>-1&&g.splice(N,1)};return m.push(E),E}function y(){const{history:v}=window;!v.state||v.replaceState(ut({},v.state,{scroll:jc()}),"")}function x(){for(const v of m)v();m=[],window.removeEventListener("popstate",_),window.removeEventListener("beforeunload",y)}return window.addEventListener("popstate",_),window.addEventListener("beforeunload",y),{pauseListeners:k,listen:A,destroy:x}}function tC(o,l,d,h=!1,g=!1){return{back:o,current:l,forward:d,replaced:h,position:window.history.length,scroll:g?jc():null}}function wL(o){const{history:l,location:d}=window,h={value:e1(o,d)},g={value:l.state};g.value||m(h.value,{back:null,current:h.value,forward:null,position:l.length-1,replaced:!0,scroll:null},!0);function m(k,A,y){const x=o.indexOf("#"),v=x>-1?(d.host&&document.querySelector("base")?o:o.slice(x))+k:bL()+o+k;try{l[y?"replaceState":"pushState"](A,"",v),g.value=A}catch(E){console.error(E),d[y?"replace":"assign"](v)}}function b(k,A){const y=ut({},l.state,tC(g.value.back,k,g.value.forward,!0),A,{position:g.value.position});m(k,y,!0),h.value=k}function _(k,A){const y=ut({},g.value,l.state,{forward:k,scroll:jc()});m(y.current,y,!0);const x=ut({},tC(h.value,k,null),{position:y.position+1},A);m(k,x,!1),h.value=k}return{location:h,state:g,push:_,replace:b}}function vL(o){o=dL(o);const l=wL(o),d=kL(o,l.state,l.location,l.replace);function h(m,b=!0){b||d.pauseListeners(),history.go(m)}const g=ut({location:"",base:o,go:h,createHref:hL.bind(null,o)},l,d);return Object.defineProperty(g,"location",{enumerable:!0,get:()=>l.location.value}),Object.defineProperty(g,"state",{enumerable:!0,get:()=>l.state.value}),g}function _L(o){return o=location.host?o||location.pathname+location.search:"",o.includes("#")||(o+="#"),vL(o)}function CL(o){return typeof o=="string"||o&&typeof o=="object"}function t1(o){return typeof o=="string"||typeof o=="symbol"}const si={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},n1=Symbol("");var nC;(function(o){o[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated"})(nC||(nC={}));function ls(o,l){return ut(new Error,{type:o,[n1]:!0},l)}function Fo(o,l){return o instanceof Error&&n1 in o&&(l==null||!!(o.type&l))}const oC="[^/]+?",AL={sensitive:!1,strict:!1,start:!0,end:!0},yL=/[.+*?^${}()[\]/\\]/g;function xL(o,l){const d=ut({},AL,l),h=[];let g=d.start?"^":"";const m=[];for(const A of o){const y=A.length?[]:[90];d.strict&&!A.length&&(g+="/");for(let x=0;x<A.length;x++){const v=A[x];let E=40+(d.sensitive?.25:0);if(v.type===0)x||(g+="/"),g+=v.value.replace(yL,"\\$&"),E+=40;else if(v.type===1){const{value:N,repeatable:P,optional:j,regexp:M}=v;m.push({name:N,repeatable:P,optional:j});const T=M||oC;if(T!==oC){E+=10;try{new RegExp(`(${T})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${N}" (${T}): `+G.message)}}let O=P?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;x||(O=j&&A.length<2?`(?:/${O})`:"/"+O),j&&(O+="?"),g+=O,E+=20,j&&(E+=-8),P&&(E+=-20),T===".*"&&(E+=-50)}y.push(E)}h.push(y)}if(d.strict&&d.end){const A=h.length-1;h[A][h[A].length-1]+=.7000000000000001}d.strict||(g+="/?"),d.end?g+="$":d.strict&&(g+="(?:/|$)");const b=new RegExp(g,d.sensitive?"":"i");function _(A){const y=A.match(b),x={};if(!y)return null;for(let v=1;v<y.length;v++){const E=y[v]||"",N=m[v-1];x[N.name]=E&&N.repeatable?E.split("/"):E}return x}function k(A){let y="",x=!1;for(const v of o){(!x||!y.endsWith("/"))&&(y+="/"),x=!1;for(const E of v)if(E.type===0)y+=E.value;else if(E.type===1){const{value:N,repeatable:P,optional:j}=E,M=N in A?A[N]:"";if(ho(M)&&!P)throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);const T=ho(M)?M.join("/"):M;if(!T)if(j)v.length<2&&(y.endsWith("/")?y=y.slice(0,-1):x=!0);else throw new Error(`Missing required param "${N}"`);y+=T}}return y||"/"}return{re:b,score:h,keys:m,parse:_,stringify:k}}function EL(o,l){let d=0;for(;d<o.length&&d<l.length;){const h=l[d]-o[d];if(h)return h;d++}return o.length<l.length?o.length===1&&o[0]===40+40?-1:1:o.length>l.length?l.length===1&&l[0]===40+40?1:-1:0}function SL(o,l){let d=0;const h=o.score,g=l.score;for(;d<h.length&&d<g.length;){const m=EL(h[d],g[d]);if(m)return m;d++}if(Math.abs(g.length-h.length)===1){if(iC(h))return 1;if(iC(g))return-1}return g.length-h.length}function iC(o){const l=o[o.length-1];return o.length>0&&l[l.length-1]<0}const DL={type:0,value:""},IL=/[a-zA-Z0-9_]/;function TL(o){if(!o)return[[]];if(o==="/")return[[DL]];if(!o.startsWith("/"))throw new Error(`Invalid path "${o}"`);function l(E){throw new Error(`ERR (${d})/"${A}": ${E}`)}let d=0,h=d;const g=[];let m;function b(){m&&g.push(m),m=[]}let _=0,k,A="",y="";function x(){!A||(d===0?m.push({type:0,value:A}):d===1||d===2||d===3?(m.length>1&&(k==="*"||k==="+")&&l(`A repeatable param (${A}) must be alone in its segment. eg: '/:ids+.`),m.push({type:1,value:A,regexp:y,repeatable:k==="*"||k==="+",optional:k==="*"||k==="?"})):l("Invalid state to consume buffer"),A="")}function v(){A+=k}for(;_<o.length;){if(k=o[_++],k==="\\"&&d!==2){h=d,d=4;continue}switch(d){case 0:k==="/"?(A&&x(),b()):k===":"?(x(),d=1):v();break;case 4:v(),d=h;break;case 1:k==="("?d=2:IL.test(k)?v():(x(),d=0,k!=="*"&&k!=="?"&&k!=="+"&&_--);break;case 2:k===")"?y[y.length-1]=="\\"?y=y.slice(0,-1)+k:d=3:y+=k;break;case 3:x(),d=0,k!=="*"&&k!=="?"&&k!=="+"&&_--,y="";break;default:l("Unknown state");break}}return d===2&&l(`Unfinished custom RegExp for param "${A}"`),x(),b(),g}function ML(o,l,d){const h=xL(TL(o.path),d),g=ut(h,{record:o,parent:l,children:[],alias:[]});return l&&!g.record.aliasOf==!l.record.aliasOf&&l.children.push(g),g}function BL(o,l){const d=[],h=new Map;l=aC({strict:!1,end:!0,sensitive:!1},l);function g(y){return h.get(y)}function m(y,x,v){const E=!v,N=NL(y);N.aliasOf=v&&v.record;const P=aC(l,y),j=[N];if("alias"in y){const O=typeof y.alias=="string"?[y.alias]:y.alias;for(const G of O)j.push(ut({},N,{components:v?v.record.components:N.components,path:G,aliasOf:v?v.record:N}))}let M,T;for(const O of j){const{path:G}=O;if(x&&G[0]!=="/"){const H=x.record.path,Q=H[H.length-1]==="/"?"":"/";O.path=x.record.path+(G&&Q+G)}if(M=ML(O,x,P),v?v.alias.push(M):(T=T||M,T!==M&&T.alias.push(M),E&&y.name&&!sC(M)&&b(y.name)),N.children){const H=N.children;for(let Q=0;Q<H.length;Q++)m(H[Q],M,v&&v.children[Q])}v=v||M,k(M)}return T?()=>{b(T)}:ga}function b(y){if(t1(y)){const x=h.get(y);x&&(h.delete(y),d.splice(d.indexOf(x),1),x.children.forEach(b),x.alias.forEach(b))}else{const x=d.indexOf(y);x>-1&&(d.splice(x,1),y.record.name&&h.delete(y.record.name),y.children.forEach(b),y.alias.forEach(b))}}function _(){return d}function k(y){let x=0;for(;x<d.length&&SL(y,d[x])>=0&&(y.record.path!==d[x].record.path||!o1(y,d[x]));)x++;d.splice(x,0,y),y.record.name&&!sC(y)&&h.set(y.record.name,y)}function A(y,x){let v,E={},N,P;if("name"in y&&y.name){if(v=h.get(y.name),!v)throw ls(1,{location:y});P=v.record.name,E=ut(rC(x.params,v.keys.filter(T=>!T.optional).map(T=>T.name)),y.params&&rC(y.params,v.keys.map(T=>T.name))),N=v.stringify(E)}else if("path"in y)N=y.path,v=d.find(T=>T.re.test(N)),v&&(E=v.parse(N),P=v.record.name);else{if(v=x.name?h.get(x.name):d.find(T=>T.re.test(x.path)),!v)throw ls(1,{location:y,currentLocation:x});P=v.record.name,E=ut({},x.params,y.params),N=v.stringify(E)}const j=[];let M=v;for(;M;)j.unshift(M.record),M=M.parent;return{name:P,path:N,params:E,matched:j,meta:zL(j)}}return o.forEach(y=>m(y)),{addRoute:m,resolve:A,removeRoute:b,getRoutes:_,getRecordMatcher:g}}function rC(o,l){const d={};for(const h of l)h in o&&(d[h]=o[h]);return d}function NL(o){return{path:o.path,redirect:o.redirect,name:o.name,meta:o.meta||{},aliasOf:void 0,beforeEnter:o.beforeEnter,props:PL(o),children:o.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in o?o.components||null:o.component&&{default:o.component}}}function PL(o){const l={},d=o.props||!1;if("component"in o)l.default=d;else for(const h in o.components)l[h]=typeof d=="boolean"?d:d[h];return l}function sC(o){for(;o;){if(o.record.aliasOf)return!0;o=o.parent}return!1}function zL(o){return o.reduce((l,d)=>ut(l,d.meta),{})}function aC(o,l){const d={};for(const h in o)d[h]=h in l?l[h]:o[h];return d}function o1(o,l){return l.children.some(d=>d===o||o1(o,d))}const i1=/#/g,LL=/&/g,OL=/\//g,RL=/=/g,FL=/\?/g,r1=/\+/g,jL=/%5B/g,VL=/%5D/g,s1=/%5E/g,HL=/%60/g,a1=/%7B/g,UL=/%7C/g,l1=/%7D/g,$L=/%20/g;function nf(o){return encodeURI(""+o).replace(UL,"|").replace(jL,"[").replace(VL,"]")}function WL(o){return nf(o).replace(a1,"{").replace(l1,"}").replace(s1,"^")}function eg(o){return nf(o).replace(r1,"%2B").replace($L,"+").replace(i1,"%23").replace(LL,"%26").replace(HL,"`").replace(a1,"{").replace(l1,"}").replace(s1,"^")}function qL(o){return eg(o).replace(RL,"%3D")}function GL(o){return nf(o).replace(i1,"%23").replace(FL,"%3F")}function KL(o){return o==null?"":GL(o).replace(OL,"%2F")}function bc(o){try{return decodeURIComponent(""+o)}catch{}return""+o}function YL(o){const l={};if(o===""||o==="?")return l;const h=(o[0]==="?"?o.slice(1):o).split("&");for(let g=0;g<h.length;++g){const m=h[g].replace(r1," "),b=m.indexOf("="),_=bc(b<0?m:m.slice(0,b)),k=b<0?null:bc(m.slice(b+1));if(_ in l){let A=l[_];ho(A)||(A=l[_]=[A]),A.push(k)}else l[_]=k}return l}function lC(o){let l="";for(let d in o){const h=o[d];if(d=qL(d),h==null){h!==void 0&&(l+=(l.length?"&":"")+d);continue}(ho(h)?h.map(m=>m&&eg(m)):[h&&eg(h)]).forEach(m=>{m!==void 0&&(l+=(l.length?"&":"")+d,m!=null&&(l+="="+m))})}return l}function QL(o){const l={};for(const d in o){const h=o[d];h!==void 0&&(l[d]=ho(h)?h.map(g=>g==null?null:""+g):h==null?h:""+h)}return l}const ZL=Symbol(""),cC=Symbol(""),of=Symbol(""),c1=Symbol(""),tg=Symbol("");function Js(){let o=[];function l(h){return o.push(h),()=>{const g=o.indexOf(h);g>-1&&o.splice(g,1)}}function d(){o=[]}return{add:l,list:()=>o,reset:d}}function di(o,l,d,h,g){const m=h&&(h.enterCallbacks[g]=h.enterCallbacks[g]||[]);return()=>new Promise((b,_)=>{const k=x=>{x===!1?_(ls(4,{from:d,to:l})):x instanceof Error?_(x):CL(x)?_(ls(2,{from:l,to:x})):(m&&h.enterCallbacks[g]===m&&typeof x=="function"&&m.push(x),b())},A=o.call(h&&h.instances[g],l,d,k);let y=Promise.resolve(A);o.length<3&&(y=y.then(k)),y.catch(x=>_(x))})}function bh(o,l,d,h){const g=[];for(const m of o)for(const b in m.components){let _=m.components[b];if(!(l!=="beforeRouteEnter"&&!m.instances[b]))if(JL(_)){const A=(_.__vccOpts||_)[l];A&&g.push(di(A,d,h,m,b))}else{let k=_();g.push(()=>k.then(A=>{if(!A)return Promise.reject(new Error(`Couldn't resolve component "${b}" at "${m.path}"`));const y=oL(A)?A.default:A;m.components[b]=y;const v=(y.__vccOpts||y)[l];return v&&di(v,d,h,m,b)()}))}}return g}function JL(o){return typeof o=="object"||"displayName"in o||"props"in o||"__vccOpts"in o}function dC(o){const l=et(of),d=et(c1),h=q(()=>l.resolve(Zt(o.to))),g=q(()=>{const{matched:k}=h.value,{length:A}=k,y=k[A-1],x=d.matched;if(!y||!x.length)return-1;const v=x.findIndex(as.bind(null,y));if(v>-1)return v;const E=uC(k[A-2]);return A>1&&uC(y)===E&&x[x.length-1].path!==E?x.findIndex(as.bind(null,k[A-2])):v}),m=q(()=>g.value>-1&&nO(d.params,h.value.params)),b=q(()=>g.value>-1&&g.value===d.matched.length-1&&Xy(d.params,h.value.params));function _(k={}){return tO(k)?l[Zt(o.replace)?"replace":"push"](Zt(o.to)).catch(ga):Promise.resolve()}return{route:h,href:q(()=>h.value.href),isActive:m,isExactActive:b,navigate:_}}const XL=ur({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dC,setup(o,{slots:l}){const d=Qt(dC(o)),{options:h}=et(of),g=q(()=>({[hC(o.activeClass,h.linkActiveClass,"router-link-active")]:d.isActive,[hC(o.exactActiveClass,h.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const m=l.default&&l.default(d);return o.custom?m:To("a",{"aria-current":d.isExactActive?o.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:g.value},m)}}}),eO=XL;function tO(o){if(!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)&&!o.defaultPrevented&&!(o.button!==void 0&&o.button!==0)){if(o.currentTarget&&o.currentTarget.getAttribute){const l=o.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(l))return}return o.preventDefault&&o.preventDefault(),!0}}function nO(o,l){for(const d in l){const h=l[d],g=o[d];if(typeof h=="string"){if(h!==g)return!1}else if(!ho(g)||g.length!==h.length||h.some((m,b)=>m!==g[b]))return!1}return!0}function uC(o){return o?o.aliasOf?o.aliasOf.path:o.path:""}const hC=(o,l,d)=>o!=null?o:l!=null?l:d,oO=ur({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(o,{attrs:l,slots:d}){const h=et(tg),g=q(()=>o.route||h.value),m=et(cC,0),b=q(()=>{let A=Zt(m);const{matched:y}=g.value;let x;for(;(x=y[A])&&!x.components;)A++;return A}),_=q(()=>g.value.matched[b.value]);Ht(cC,q(()=>b.value+1)),Ht(ZL,_),Ht(tg,g);const k=we();return Ze(()=>[k.value,_.value,o.name],([A,y,x],[v,E,N])=>{y&&(y.instances[x]=A,E&&E!==y&&A&&A===v&&(y.leaveGuards.size||(y.leaveGuards=E.leaveGuards),y.updateGuards.size||(y.updateGuards=E.updateGuards))),A&&y&&(!E||!as(y,E)||!v)&&(y.enterCallbacks[x]||[]).forEach(P=>P(A))},{flush:"post"}),()=>{const A=g.value,y=o.name,x=_.value,v=x&&x.components[y];if(!v)return gC(d.default,{Component:v,route:A});const E=x.props[y],N=E?E===!0?A.params:typeof E=="function"?E(A):E:null,j=To(v,ut({},N,l,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(x.instances[y]=null)},ref:k}));return gC(d.default,{Component:j,route:A})||j}}});function gC(o,l){if(!o)return null;const d=o(l);return d.length===1?d[0]:d}const iO=oO;function rO(o){const l=BL(o.routes,o),d=o.parseQuery||YL,h=o.stringifyQuery||lC,g=o.history,m=Js(),b=Js(),_=Js(),k=wg(si);let A=si;Kr&&o.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=mh.bind(null,U=>""+U),x=mh.bind(null,KL),v=mh.bind(null,bc);function E(U,ce){let de,ie;return t1(U)?(de=l.getRecordMatcher(U),ie=ce):ie=U,l.addRoute(ie,de)}function N(U){const ce=l.getRecordMatcher(U);ce&&l.removeRoute(ce)}function P(){return l.getRoutes().map(U=>U.record)}function j(U){return!!l.getRecordMatcher(U)}function M(U,ce){if(ce=ut({},ce||k.value),typeof U=="string"){const De=ph(d,U,ce.path),z=l.resolve({path:De.path},ce),$=g.createHref(De.fullPath);return ut(De,z,{params:v(z.params),hash:bc(De.hash),redirectedFrom:void 0,href:$})}let de;if("path"in U)de=ut({},U,{path:ph(d,U.path,ce.path).path});else{const De=ut({},U.params);for(const z in De)De[z]==null&&delete De[z];de=ut({},U,{params:x(U.params)}),ce.params=x(ce.params)}const ie=l.resolve(de,ce),Z=U.hash||"";ie.params=y(v(ie.params));const Ke=sL(h,ut({},U,{hash:WL(Z),path:ie.path})),ge=g.createHref(Ke);return ut({fullPath:Ke,hash:Z,query:h===lC?QL(U.query):U.query||{}},ie,{redirectedFrom:void 0,href:ge})}function T(U){return typeof U=="string"?ph(d,U,k.value.path):ut({},U)}function O(U,ce){if(A!==U)return ls(8,{from:ce,to:U})}function G(U){return R(U)}function H(U){return G(ut(T(U),{replace:!0}))}function Q(U){const ce=U.matched[U.matched.length-1];if(ce&&ce.redirect){const{redirect:de}=ce;let ie=typeof de=="function"?de(U):de;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=T(ie):{path:ie},ie.params={}),ut({query:U.query,hash:U.hash,params:"path"in ie?{}:U.params},ie)}}function R(U,ce){const de=A=M(U),ie=k.value,Z=U.state,Ke=U.force,ge=U.replace===!0,De=Q(de);if(De)return R(ut(T(De),{state:typeof De=="object"?ut({},Z,De.state):Z,force:Ke,replace:ge}),ce||de);const z=de;z.redirectedFrom=ce;let $;return!Ke&&aL(h,ie,de)&&($=ls(16,{to:z,from:ie}),It(ie,ie,!0,!1)),($?Promise.resolve($):W(z,ie)).catch(X=>Fo(X)?Fo(X,2)?X:He(X):Ae(X,z,ie)).then(X=>{if(X){if(Fo(X,2))return R(ut({replace:ge},T(X.to),{state:typeof X.to=="object"?ut({},Z,X.to.state):Z,force:Ke}),ce||z)}else X=ee(z,ie,!0,ge,Z);return K(z,ie,X),X})}function V(U,ce){const de=O(U,ce);return de?Promise.reject(de):Promise.resolve()}function W(U,ce){let de;const[ie,Z,Ke]=sO(U,ce);de=bh(ie.reverse(),"beforeRouteLeave",U,ce);for(const De of ie)De.leaveGuards.forEach(z=>{de.push(di(z,U,ce))});const ge=V.bind(null,U,ce);return de.push(ge),Ur(de).then(()=>{de=[];for(const De of m.list())de.push(di(De,U,ce));return de.push(ge),Ur(de)}).then(()=>{de=bh(Z,"beforeRouteUpdate",U,ce);for(const De of Z)De.updateGuards.forEach(z=>{de.push(di(z,U,ce))});return de.push(ge),Ur(de)}).then(()=>{de=[];for(const De of U.matched)if(De.beforeEnter&&!ce.matched.includes(De))if(ho(De.beforeEnter))for(const z of De.beforeEnter)de.push(di(z,U,ce));else de.push(di(De.beforeEnter,U,ce));return de.push(ge),Ur(de)}).then(()=>(U.matched.forEach(De=>De.enterCallbacks={}),de=bh(Ke,"beforeRouteEnter",U,ce),de.push(ge),Ur(de))).then(()=>{de=[];for(const De of b.list())de.push(di(De,U,ce));return de.push(ge),Ur(de)}).catch(De=>Fo(De,8)?De:Promise.reject(De))}function K(U,ce,de){for(const ie of _.list())ie(U,ce,de)}function ee(U,ce,de,ie,Z){const Ke=O(U,ce);if(Ke)return Ke;const ge=ce===si,De=Kr?history.state:{};de&&(ie||ge?g.replace(U.fullPath,ut({scroll:ge&&De&&De.scroll},Z)):g.push(U.fullPath,Z)),k.value=U,It(U,ce,de,ge),He()}let J;function ne(){J||(J=g.listen((U,ce,de)=>{if(!fn.listening)return;const ie=M(U),Z=Q(ie);if(Z){R(ut(Z,{replace:!0}),ie).catch(ga);return}A=ie;const Ke=k.value;Kr&&mL(eC(Ke.fullPath,de.delta),jc()),W(ie,Ke).catch(ge=>Fo(ge,12)?ge:Fo(ge,2)?(R(ge.to,ie).then(De=>{Fo(De,20)&&!de.delta&&de.type===Sa.pop&&g.go(-1,!1)}).catch(ga),Promise.reject()):(de.delta&&g.go(-de.delta,!1),Ae(ge,ie,Ke))).then(ge=>{ge=ge||ee(ie,Ke,!1),ge&&(de.delta&&!Fo(ge,8)?g.go(-de.delta,!1):de.type===Sa.pop&&Fo(ge,20)&&g.go(-1,!1)),K(ie,Ke,ge)}).catch(ga)}))}let ae=Js(),be=Js(),he;function Ae(U,ce,de){He(U);const ie=be.list();return ie.length?ie.forEach(Z=>Z(U,ce,de)):console.error(U),Promise.reject(U)}function Ee(){return he&&k.value!==si?Promise.resolve():new Promise((U,ce)=>{ae.add([U,ce])})}function He(U){return he||(he=!U,ne(),ae.list().forEach(([ce,de])=>U?de(U):ce()),ae.reset()),U}function It(U,ce,de,ie){const{scrollBehavior:Z}=o;if(!Kr||!Z)return Promise.resolve();const Ke=!de&&pL(eC(U.fullPath,0))||(ie||!de)&&history.state&&history.state.scroll||null;return An().then(()=>Z(U,ce,Ke)).then(ge=>ge&&fL(ge)).catch(ge=>Ae(ge,U,ce))}const _t=U=>g.go(U);let Ne;const Tt=new Set,fn={currentRoute:k,listening:!0,addRoute:E,removeRoute:N,hasRoute:j,getRoutes:P,resolve:M,options:o,push:G,replace:H,go:_t,back:()=>_t(-1),forward:()=>_t(1),beforeEach:m.add,beforeResolve:b.add,afterEach:_.add,onError:be.add,isReady:Ee,install(U){const ce=this;U.component("RouterLink",eO),U.component("RouterView",iO),U.config.globalProperties.$router=ce,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(k)}),Kr&&!Ne&&k.value===si&&(Ne=!0,G(g.location).catch(Z=>{}));const de={};for(const Z in si)de[Z]=q(()=>k.value[Z]);U.provide(of,ce),U.provide(c1,Qt(de)),U.provide(tg,k);const ie=U.unmount;Tt.add(U),U.unmount=function(){Tt.delete(U),Tt.size<1&&(A=si,J&&J(),J=null,k.value=si,Ne=!1,he=!1),ie()}}};return fn}function Ur(o){return o.reduce((l,d)=>l.then(()=>d()),Promise.resolve())}function sO(o,l){const d=[],h=[],g=[],m=Math.max(l.matched.length,o.matched.length);for(let b=0;b<m;b++){const _=l.matched[b];_&&(o.matched.find(A=>as(A,_))?h.push(_):d.push(_));const k=o.matched[b];k&&(l.matched.find(A=>as(A,k))||g.push(k))}return[d,h,g]}const aO=(o,l)=>{const d=o.__vccOpts||o;for(const[h,g]of l)d[h]=g;return d};const d1=tt({name:"VLabel",props:{text:String,...an()},setup(o,l){let{slots:d}=l;return rt(()=>{var h;return L("label",{class:"v-label"},[o.text,(h=d.default)==null?void 0:h.call(d)])}),{}}}),Yl=tt({name:"VFieldLabel",props:{floating:Boolean},setup(o,l){let{slots:d}=l;return rt(()=>L(d1,{class:["v-field-label",{"v-field-label--floating":o.floating}],"aria-hidden":o.floating||void 0},d)),{}}}),lO=Ge({focused:Boolean},"focus");function cO(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo();const d=rn(o,"focused"),h=q(()=>({[`${l}--focused`]:d.value}));function g(){d.value=!0}function m(){d.value=!1}return{focusClasses:h,isFocused:d,focus:g,blur:m}}const dO=["underlined","outlined","filled","solo","plain"],u1=Ge({appendInnerIcon:vt,bgColor:String,clearable:Boolean,clearIcon:{type:vt,default:"$clear"},active:Boolean,color:String,dirty:Boolean,disabled:Boolean,error:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:vt,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:o=>dO.includes(o)},...an(),...Ty()},"v-field"),h1=Xn()({name:"VField",inheritAttrs:!1,props:{id:String,...lO(),...u1()},emits:{"click:clear":o=>!0,"click:control":o=>!0,"update:focused":o=>!0,"update:modelValue":o=>!0},setup(o,l){let{attrs:d,emit:h,slots:g}=l;const{themeClasses:m}=xn(o),{loaderClasses:b}=My(o),{focusClasses:_,isFocused:k,focus:A,blur:y}=cO(o),x=q(()=>o.dirty||o.active),v=q(()=>!o.singleLine&&!!(o.label||g.label)),E=go(),N=q(()=>o.id||`input-${E}`),P=we(),j=we(),M=we(),{backgroundColorClasses:T,backgroundColorStyles:O}=qo(Ve(o,"bgColor")),{textColorClasses:G,textColorStyles:H}=_i(q(()=>x.value&&k.value&&!o.error&&!o.disabled?o.color:void 0));Ze(x,V=>{if(v.value){const W=P.value.$el,K=j.value.$el,ee=Wg(W),J=K.getBoundingClientRect(),ne=J.x-ee.x,ae=J.y-ee.y-(ee.height/2-J.height/2),be=J.width/.75,he=Math.abs(be-ee.width)>1?{maxWidth:Oe(be)}:void 0,Ae=parseFloat(getComputedStyle(W).transitionDuration)*1e3||150,Ee=parseFloat(getComputedStyle(K).getPropertyValue("--v-field-label-scale"));W.style.visibility="visible",K.style.visibility="hidden",W.animate([{transform:"translate(0)"},{transform:`translate(${ne}px, ${ae}px) scale(${Ee})`,...he}],{duration:Ae,easing:gc,direction:V?"normal":"reverse"}).finished.then(()=>{W.style.removeProperty("visibility"),K.style.removeProperty("visibility")})}},{flush:"post"});const Q=q(()=>({isActive:x,isFocused:k,controlRef:M,blur:y,focus:A}));function R(V){V.target!==document.activeElement&&V.preventDefault(),h("click:control",V)}return rt(()=>{var V,W,K;const ee=o.variant==="outlined",J=g["prepend-inner"]||o.prependInnerIcon,ne=!!(o.clearable||g.clear),ae=!!(g["append-inner"]||o.appendInnerIcon||ne),be=g.label?g.label({label:o.label,props:{for:N.value}}):o.label;return L("div",xt({class:["v-field",{"v-field--active":x.value,"v-field--appended":ae,"v-field--disabled":o.disabled,"v-field--dirty":o.dirty,"v-field--error":o.error,"v-field--has-background":!!o.bgColor,"v-field--persistent-clear":o.persistentClear,"v-field--prepended":J,"v-field--reverse":o.reverse,"v-field--single-line":o.singleLine,"v-field--has-label":!!be,[`v-field--variant-${o.variant}`]:!0},m.value,T.value,_.value,b.value],style:[O.value,H.value],onClick:R},d),[L("div",{class:"v-field__overlay"},null),L(g3,{name:"v-field",active:o.loading,color:o.error?"error":o.color},{default:g.loader}),J&&L("div",{key:"prepend",class:"v-field__prepend-inner"},[o.prependInnerIcon&&L(it,{key:"prepend-icon",onClick:d["onClick:prependInner"],icon:o.prependInnerIcon},null),(V=g["prepend-inner"])==null?void 0:V.call(g,Q.value)]),L("div",{class:"v-field__field","data-no-activator":""},[["solo","filled"].includes(o.variant)&&v.value&&L(Yl,{key:"floating-label",ref:j,class:[G.value],floating:!0},{default:()=>[be]}),L(Yl,{ref:P,for:N.value},{default:()=>[be]}),(W=g.default)==null?void 0:W.call(g,{...Q.value,props:{id:N.value,class:"v-field__input"},focus:A,blur:y})]),ne&&L(Ry,{key:"clear"},{default:()=>[Vn(L("div",{class:"v-field__clearable"},[g.clear?g.clear():L(it,{onClick:he=>h("click:clear",he),icon:o.clearIcon},null)]),[[yi,o.dirty]])]}),ae&&L("div",{key:"append",class:"v-field__append-inner"},[(K=g["append-inner"])==null?void 0:K.call(g,Q.value),o.appendInnerIcon&&L(it,{key:"append-icon",onClick:d["onClick:appendInner"],icon:o.appendInnerIcon},null)]),L("div",{class:["v-field__outline",G.value]},[ee&&L(We,null,[L("div",{class:"v-field__outline__start"},null),v.value&&L("div",{class:"v-field__outline__notch"},[L(Yl,{ref:j,floating:!0},{default:()=>[be]})]),L("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(o.variant)&&v.value&&L(Yl,{ref:j,floating:!0},{default:()=>[be]})])])}),{controlRef:M}}});function uO(o){return gs(o,Object.keys(h1.props))}const hO=tt({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ms({transition:{component:Oy,leaveAbsolute:!0,group:!0}})},setup(o,l){let{slots:d}=l;const h=q(()=>fi(o.messages)),{textColorClasses:g,textColorStyles:m}=_i(q(()=>o.color));return rt(()=>L(er,{transition:o.transition,tag:"div",class:["v-messages",g.value],style:m.value},{default:()=>[o.active&&h.value.map((b,_)=>L("div",{class:"v-messages__message",key:`${_}-${h.value}`},[d.message?d.message({message:b}):b]))]})),{}}}),gO=Symbol.for("vuetify:form");function fO(){return et(gO,null)}const mO=Ge({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validationValue:null});function pO(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yo(),d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:go();const h=rn(o,"modelValue"),g=q(()=>{var O;return(O=o.validationValue)!=null?O:h.value}),m=fO(),b=we([]),_=we(!0),k=q(()=>!!(fi(h.value===""?null:h.value).length||fi(g.value===""?null:g.value).length)),A=q(()=>!!(o.disabled||m!=null&&m.isDisabled.value)),y=q(()=>!!(o.readonly||m!=null&&m.isReadonly.value)),x=q(()=>o.errorMessages.length?fi(o.errorMessages):b.value),v=q(()=>o.error||x.value.length?!1:o.rules.length&&_.value?null:!0),E=we(!1),N=q(()=>({[`${l}--error`]:v.value===!1,[`${l}--dirty`]:k.value,[`${l}--disabled`]:A.value,[`${l}--readonly`]:y.value})),P=q(()=>{var O;return(O=o.name)!=null?O:Zt(d)});Na(()=>{m==null||m.register({id:P.value,validate:T,reset:j,resetValidation:M})}),yn(()=>{m==null||m.unregister(P.value)}),Hn(()=>m==null?void 0:m.update(P.value,v.value,x.value)),Ze(g,()=>{g.value!=null&&T()}),Ze(v,()=>{m==null||m.update(P.value,v.value,x.value)});function j(){M(),h.value=null}function M(){_.value=!0,b.value=[]}async function T(){const O=[];E.value=!0;for(const G of o.rules){if(O.length>=(o.maxErrors||1))break;const Q=await(typeof G=="function"?G:()=>G)(g.value);if(Q!==!0){if(typeof Q!="string"){console.warn(`${Q} is not a valid value. Rule functions must return boolean true or a string.`);continue}O.push(Q)}}return b.value=O,E.value=!1,_.value=!1,b.value}return{errorMessages:x,isDirty:k,isDisabled:A,isReadonly:y,isPristine:_,isValid:v,isValidating:E,reset:j,resetValidation:M,validate:T,validationClasses:N}}const g1=Ge({id:String,appendIcon:vt,prependIcon:vt,hideDetails:[Boolean,String],messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:o=>["horizontal","vertical"].includes(o)},...xi(),...mO()}),f1=Xn()({name:"VInput",props:{...g1()},emits:{"update:modelValue":o=>!0},setup(o,l){let{attrs:d,slots:h,emit:g}=l;const{densityClasses:m}=Ei(o),b=go(),_=q(()=>o.id||`input-${b}`),{errorMessages:k,isDirty:A,isDisabled:y,isReadonly:x,isPristine:v,isValid:E,isValidating:N,reset:P,resetValidation:j,validate:M,validationClasses:T}=pO(o,"v-input",_),O=q(()=>({id:_,isDirty:A,isDisabled:y,isReadonly:x,isPristine:v,isValid:E,isValidating:N,reset:P,resetValidation:j,validate:M}));return rt(()=>{var G,H,Q,R,V;const W=!!(h.prepend||o.prependIcon),K=!!(h.append||o.appendIcon),ee=!!((G=o.messages)!=null&&G.length||k.value.length),J=!o.hideDetails||o.hideDetails==="auto"&&(ee||!!h.details);return L("div",{class:["v-input",`v-input--${o.direction}`,m.value,T.value]},[W&&L("div",{key:"prepend",class:"v-input__prepend"},[o.prependIcon&&L(it,{key:"prepend-icon",onClick:d["onClick:prepend"],icon:o.prependIcon},null),(H=h.prepend)==null?void 0:H.call(h,O.value)]),h.default&&L("div",{class:"v-input__control"},[(Q=h.default)==null?void 0:Q.call(h,O.value)]),K&&L("div",{key:"append",class:"v-input__append"},[(R=h.append)==null?void 0:R.call(h,O.value),o.appendIcon&&L(it,{key:"append-icon",onClick:d["onClick:append"],icon:o.appendIcon},null)]),J&&L("div",{class:"v-input__details"},[L(hO,{active:ee,messages:k.value.length>0?k.value:o.messages},{message:h.message}),(V=h.details)==null?void 0:V.call(h,O.value)])])}),{reset:P,resetValidation:j,validate:M}}});function bO(o){return gs(o,Object.keys(f1.props))}const kO=tt({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ms({transition:{component:Oy}})},setup(o,l){let{slots:d}=l;const h=q(()=>o.max?`${o.value} / ${o.max}`:String(o.value));return rt(()=>L(er,{transition:o.transition},{default:()=>[Vn(L("div",{class:"v-counter"},[d.default?d.default({counter:h.value,max:o.max,value:o.value}):h.value]),[[yi,o.active]])]})),{}}}),kh=Symbol("Forwarded refs");function rf(o){for(var l=arguments.length,d=new Array(l>1?l-1:0),h=1;h<l;h++)d[h-1]=arguments[h];return o[kh]=d,new Proxy(o,{get(g,m){if(Reflect.has(g,m))return Reflect.get(g,m);for(const b of d)if(b.value&&Reflect.has(b.value,m)){const _=Reflect.get(b.value,m);return typeof _=="function"?_.bind(b.value):_}},getOwnPropertyDescriptor(g,m){const b=Reflect.getOwnPropertyDescriptor(g,m);if(b)return b;if(!(typeof m=="symbol"||m.startsWith("__"))){for(const _ of d){if(!_.value)continue;const k=Reflect.getOwnPropertyDescriptor(_.value,m);if(k)return k;if("_"in _.value&&"setupState"in _.value._){const A=Reflect.getOwnPropertyDescriptor(_.value._.setupState,m);if(A)return A}}for(const _ of d){let k=_.value&&Object.getPrototypeOf(_.value);for(;k;){const A=Reflect.getOwnPropertyDescriptor(k,m);if(A)return A;k=Object.getPrototypeOf(k)}}for(const _ of d){const k=_.value&&_.value[kh];if(!k)continue;const A=k.slice();for(;A.length;){const y=A.shift(),x=Reflect.getOwnPropertyDescriptor(y.value,m);if(x)return x;const v=y.value&&y.value[kh];v&&A.push(...v)}}}}})}const wO=["color","file","time","date","datetime-local","week","month"],m1=Xn()({name:"VTextField",directives:{Intersect:fy},inheritAttrs:!1,props:{autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},...g1(),...u1()},emits:{"click:clear":o=>!0,"click:control":o=>!0,"click:input":o=>!0,"update:modelValue":o=>!0},setup(o,l){let{attrs:d,emit:h,slots:g}=l;const m=rn(o,"modelValue"),b=q(()=>{var T;return typeof o.counterValue=="function"?o.counterValue(m.value):((T=m.value)!=null?T:"").toString().length}),_=q(()=>{if(d.maxlength)return d.maxlength;if(!(!o.counter||typeof o.counter!="number"&&typeof o.counter!="string"))return o.counter});function k(T,O){var G,H;!o.autofocus||!T||(G=O[0].target)==null||(H=G.focus)==null||H.call(G)}const A=we(),y=we(),x=we(!1),v=we(),E=q(()=>wO.includes(o.type)||o.persistentPlaceholder||x.value),N=q(()=>o.messages.length?o.messages:x.value||o.persistentHint?o.hint:"");function P(){if(v.value!==document.activeElement){var T;(T=v.value)==null||T.focus()}x.value||(x.value=!0)}function j(T){P(),h("click:control",T)}function M(T){T.stopPropagation(),P(),An(()=>{m.value="",h("click:clear",T)})}return rt(()=>{const T=!!(g.counter||o.counter||o.counterValue),O=!!(T||g.details),[G,H]=JA(d),[{modelValue:Q,...R}]=bO(o),[V]=uO(o);return L(f1,xt({ref:A,modelValue:m.value,"onUpdate:modelValue":W=>m.value=W,class:["v-text-field",{"v-text-field--prefixed":o.prefix,"v-text-field--suffixed":o.suffix,"v-text-field--flush-details":["plain","underlined"].includes(o.variant)}],"onClick:prepend":d["onClick:prepend"],"onClick:append":d["onClick:append"]},G,R,{messages:N.value}),{...g,default:W=>{let{id:K,isDisabled:ee,isDirty:J,isReadonly:ne,isValid:ae}=W;return L(h1,xt({ref:y,onMousedown:be=>{be.target!==v.value&&be.preventDefault()},"onClick:control":j,"onClick:clear":M,"onClick:prependInner":d["onClick:prependInner"],"onClick:appendInner":d["onClick:appendInner"],role:"textbox"},V,{id:K.value,active:E.value||J.value,dirty:J.value||o.dirty,focused:x.value,error:ae.value===!1}),{...g,default:be=>{let{props:{class:he,...Ae}}=be;const Ee=Vn(L("input",xt({ref:v,"onUpdate:modelValue":He=>m.value=He,autofocus:o.autofocus,readonly:ne.value,disabled:ee.value,name:o.name,placeholder:o.placeholder,size:1,type:o.type,onFocus:P,onBlur:()=>x.value=!1},Ae,H),null),[[Vg,m.value],[Ai("intersect"),{handler:k},null,{once:!0}]]);return L(We,null,[o.prefix&&L("span",{class:"v-text-field__prefix"},[o.prefix]),g.default?L("div",{class:he,onClick:He=>h("click:input",He),"data-no-activator":""},[g.default(),Ee]):co(Ee,{class:he}),o.suffix&&L("span",{class:"v-text-field__suffix"},[o.suffix])])}})},details:O?W=>{var K;return L(We,null,[(K=g.details)==null?void 0:K.call(g,W),T&&L(We,null,[L("span",null,null),L(kO,{active:o.persistentCounter||x.value,value:b.value,max:_.value},g.counter)])])}:void 0})}),rf({},A,y,v)}}),vO={};function _O(o,l){return $e(),Jn(m1,{placeholder:"\u641C\u5C0B\u4F60\u7684\u7B46\u8A18","prepend-inner-icon":"mdi-magnify",class:"search-input",variant:"plain","bg-color":"searchInputBg","hide-details":"","single-line":""})}const CO=aO(vO,[["render",_O]]);const AO={class:"note-card"},yO={key:0,class:"note-card__active"},xO={class:"note-card__content"},EO={class:"note-card__content-header"},SO={class:"header-fav"},DO=["title"],IO=["innerHTML"],TO={class:"note-card__content-footer"},MO={class:"footer-tags"},BO={class:"tag-item"},NO={class:"footer-right"},PO={key:0,class:"footer-file"},zO=Et("mdi-paperclip"),LO={class:"footer-time"},OO={__name:"NoteCard",props:{data:Object,active:Boolean},setup(o){return(l,d)=>($e(),yt("div",AO,[o.active?($e(),yt("div",yO)):so("",!0),Le("div",{class:Fn(["note-card__bg",{active:o.active}])},[Le("div",{class:Fn(["note-card__mask",{active:o.active}])},null,2)],2),Le("div",xO,[Le("div",EO,[Le("div",SO,[L(it,{size:"22",color:"tagText",onClick:d[0]||(d[0]=Hg(h=>l.$emit("onClickFav",o.data.id),["stop"]))},{default:Qe(()=>[Et(tn(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1})]),Le("div",{class:"header-title",title:o.data.title},tn(o.data.title),9,DO)]),Le("div",{class:"note-card__content-body",innerHTML:o.data.content},null,8,IO),Le("div",TO,[Le("div",MO,[($e(!0),yt(We,null,hi(o.data.tags,h=>($e(),yt("div",BO,tn(h),1))),256))]),Le("div",NO,[o.data.file?($e(),yt("div",PO,[L(it,{size:"18"},{default:Qe(()=>[zO]),_:1})])):so("",!0),Le("div",LO,tn(o.data.time),1)])])])]))}};const RO={class:"note-summary__header"},FO=["title"],jO={class:"note-summary__content"},VO={class:"note-summary__footer"},HO={class:"footer-tags"},UO={class:"tag-item"},$O={class:"footer-right"},WO={key:0,class:"footer-file"},qO=Et("mdi-paperclip"),GO={class:"footer-time"},KO={__name:"NoteSummary",props:{data:Object,active:Boolean},setup(o){return(l,d)=>($e(),yt("div",{class:Fn(["note-summary",{active:o.active}])},[Le("div",RO,[L(it,{size:"22",color:"tagText",onClick:d[0]||(d[0]=Hg(h=>l.$emit("onClickFav",o.data.id),["stop"]))},{default:Qe(()=>[Et(tn(o.data.fav?"mdi-star":"mdi-star-outline"),1)]),_:1}),Le("div",{class:"header-title",title:o.data.title},tn(o.data.title),9,FO)]),Le("div",jO,tn(o.data.content),1),Le("div",VO,[Le("div",HO,[($e(!0),yt(We,null,hi(o.data.tags,h=>($e(),yt("div",UO,tn(h),1))),256))]),Le("div",$O,[o.data.file?($e(),yt("div",WO,[L(it,{size:"18"},{default:Qe(()=>[qO]),_:1})])):so("",!0),Le("div",GO,tn(o.data.time),1)])])],2))}};var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function p1(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function YO(o){var l=o.default;if(typeof l=="function"){var d=function(){return l.apply(this,arguments)};d.prototype=l.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(o).forEach(function(h){var g=Object.getOwnPropertyDescriptor(o,h);Object.defineProperty(d,h,g.get?g:{enumerable:!0,get:function(){return o[h]}})}),d}var ng={exports:{}};(function(o,l){(function(d){const h=d.en=d.en||{};h.dictionary=Object.assign(h.dictionary||{},{"%0 of %1":"%0 of %1","Align center":"Align center","Align left":"Align left","Align right":"Align right",Aquamarine:"Aquamarine",Big:"Big",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent",Default:"Default","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Disc:"Disc","Document colors":"Document colors",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Font Background Color":"Font Background Color","Font Color":"Font Color","Font Family":"Font Family","Font Size":"Font Size","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Huge:"Huge","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic",Justify:"Justify","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower\u2013roman":"Lower\u2013roman","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Original:"Original",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor","Rich Text Editor. Editing area: %0":"Rich Text Editor. Editing area: %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Small:"Small","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Table toolbar":"Table toolbar","Text alignment":"Text alignment","Text alignment toolbar":"Text alignment toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.",Tiny:"Tiny","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower\u2013latin list style":"Toggle the lower\u2013latin list style","Toggle the lower\u2013roman list style":"Toggle the lower\u2013roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper\u2013latin list style":"Toggle the upper\u2013latin list style","Toggle the upper\u2013roman list style":"Toggle the upper\u2013roman list style",Turquoise:"Turquoise",Underline:"Underline",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,h){o.exports=h()}(self,()=>(()=>{var d={3062:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},903:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4717:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},9315:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const E=v},1896:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-button.ck-color-table__remove-color{align-items:center;display:flex;width:100%}label.ck.ck-color-grid__label{font-weight:unset}.ck .ck-button.ck-color-table__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck .ck-button.ck-color-table__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-base-border)}[dir=ltr] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck .ck-button.ck-color-table__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontcolor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-font/fontcolor.css"],names:[],mappings:"AAKA,4CAEC,kBAAmB,CADnB,YAAa,CAEb,UACD,CAEA,8BACC,iBACD,CCNA,4CAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,wDACC,mDACD,CAEA,kEAEE,uCAMF,CARA,kEAME,sCAEF",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=v},6007:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content .text-tiny{font-size:.7em}.ck-content .text-small{font-size:.85em}.ck-content .text-big{font-size:1.4em}.ck-content .text-huge{font-size:1.8em}","",{version:3,sources:["webpack://./../ckeditor5-font/theme/fontsize.css"],names:[],mappings:"AAUC,uBACC,cACD,CAEA,wBACC,eACD,CAEA,sBACC,eACD,CAEA,uBACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},8733:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3508:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},2640:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6270:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAKA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},5083:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4036:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3773:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3689:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},1905:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},9773:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},2347:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},7754:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4721:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAFhB,eAAiB,CACjB,wDAAyD,CAFzD,UAmBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6082:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},2417:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4652:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},7442:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},9292:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},1613:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const E=v},6306:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3881:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6945:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4906:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6BD,CE/BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBA4BD,CAvBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,iEAEC,SAAU,CADV,kBAED,CAbA,yFACC,YACD,CC7BD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},5332:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6781:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},5485:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3949:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},7686:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},7339:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},9688:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},8847:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6574:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4879:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3662:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},2577:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},1046:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},8793:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4650:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},7676:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},5868:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},6764:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},9695:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},5542:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3332:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4793:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},3488:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},8506:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},4921:(b,_,k)=>{k.d(_,{Z:()=>E});var A=k(1799),y=k.n(A),x=k(2609),v=k.n(x)()(y());v.push([b.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const E=v},2609:b=>{b.exports=function(_){var k=[];return k.toString=function(){return this.map(function(A){var y=_(A);return A[2]?"@media ".concat(A[2]," {").concat(y,"}"):y}).join("")},k.i=function(A,y,x){typeof A=="string"&&(A=[[null,A,""]]);var v={};if(x)for(var E=0;E<this.length;E++){var N=this[E][0];N!=null&&(v[N]=!0)}for(var P=0;P<A.length;P++){var j=[].concat(A[P]);x&&v[j[0]]||(y&&(j[2]?j[2]="".concat(y," and ").concat(j[2]):j[2]=y),k.push(j))}},k}},1799:b=>{function _(A,y){return function(x){if(Array.isArray(x))return x}(A)||function(x,v){var E=x&&(typeof Symbol<"u"&&x[Symbol.iterator]||x["@@iterator"]);if(E!=null){var N,P,j=[],M=!0,T=!1;try{for(E=E.call(x);!(M=(N=E.next()).done)&&(j.push(N.value),!v||j.length!==v);M=!0);}catch(O){T=!0,P=O}finally{try{M||E.return==null||E.return()}finally{if(T)throw P}}return j}}(A,y)||function(x,v){if(!!x){if(typeof x=="string")return k(x,v);var E=Object.prototype.toString.call(x).slice(8,-1);if(E==="Object"&&x.constructor&&(E=x.constructor.name),E==="Map"||E==="Set")return Array.from(x);if(E==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))return k(x,v)}}(A,y)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function k(A,y){(y==null||y>A.length)&&(y=A.length);for(var x=0,v=new Array(y);x<y;x++)v[x]=A[x];return v}b.exports=function(A){var y=_(A,4),x=y[1],v=y[3];if(!v)return x;if(typeof btoa=="function"){var E=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(E),P="/*# ".concat(N," */"),j=v.sources.map(function(M){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(M," */")});return[x].concat(j).concat([P]).join(`
`)}return[x].join(`
`)}},6062:(b,_,k)=>{var A,y=function(){return A===void 0&&(A=Boolean(window&&document&&document.all&&!window.atob)),A},x=function(){var R={};return function(V){if(R[V]===void 0){var W=document.querySelector(V);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}R[V]=W}return R[V]}}(),v=[];function E(R){for(var V=-1,W=0;W<v.length;W++)if(v[W].identifier===R){V=W;break}return V}function N(R,V){for(var W={},K=[],ee=0;ee<R.length;ee++){var J=R[ee],ne=V.base?J[0]+V.base:J[0],ae=W[ne]||0,be="".concat(ne," ").concat(ae);W[ne]=ae+1;var he=E(be),Ae={css:J[1],media:J[2],sourceMap:J[3]};he!==-1?(v[he].references++,v[he].updater(Ae)):v.push({identifier:be,updater:Q(Ae,V),references:1}),K.push(be)}return K}function P(R){var V=document.createElement("style"),W=R.attributes||{};if(W.nonce===void 0){var K=k.nc;K&&(W.nonce=K)}if(Object.keys(W).forEach(function(J){V.setAttribute(J,W[J])}),typeof R.insert=="function")R.insert(V);else{var ee=x(R.insert||"head");if(!ee)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ee.appendChild(V)}return V}var j,M=(j=[],function(R,V){return j[R]=V,j.filter(Boolean).join(`
`)});function T(R,V,W,K){var ee=W?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(R.styleSheet)R.styleSheet.cssText=M(V,ee);else{var J=document.createTextNode(ee),ne=R.childNodes;ne[V]&&R.removeChild(ne[V]),ne.length?R.insertBefore(J,ne[V]):R.appendChild(J)}}function O(R,V,W){var K=W.css,ee=W.media,J=W.sourceMap;if(ee?R.setAttribute("media",ee):R.removeAttribute("media"),J&&typeof btoa<"u"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(J))))," */")),R.styleSheet)R.styleSheet.cssText=K;else{for(;R.firstChild;)R.removeChild(R.firstChild);R.appendChild(document.createTextNode(K))}}var G=null,H=0;function Q(R,V){var W,K,ee;if(V.singleton){var J=H++;W=G||(G=P(V)),K=T.bind(null,W,J,!1),ee=T.bind(null,W,J,!0)}else W=P(V),K=O.bind(null,W,V),ee=function(){(function(ne){if(ne.parentNode===null)return!1;ne.parentNode.removeChild(ne)})(W)};return K(R),function(ne){if(ne){if(ne.css===R.css&&ne.media===R.media&&ne.sourceMap===R.sourceMap)return;K(R=ne)}else ee()}}b.exports=function(R,V){(V=V||{}).singleton||typeof V.singleton=="boolean"||(V.singleton=y());var W=N(R=R||[],V);return function(K){if(K=K||[],Object.prototype.toString.call(K)==="[object Array]"){for(var ee=0;ee<W.length;ee++){var J=E(W[ee]);v[J].references--}for(var ne=N(K,V),ae=0;ae<W.length;ae++){var be=E(W[ae]);v[be].references===0&&(v[be].updater(),v.splice(be,1))}W=ne}}}}},h={};function g(b){var _=h[b];if(_!==void 0)return _.exports;var k=h[b]={id:b,exports:{}};return d[b](k,k.exports,g),k.exports}g.n=b=>{var _=b&&b.__esModule?()=>b.default:()=>b;return g.d(_,{a:_}),_},g.d=(b,_)=>{for(var k in _)g.o(_,k)&&!g.o(b,k)&&Object.defineProperty(b,k,{enumerable:!0,get:_[k]})},g.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),g.o=(b,_)=>Object.prototype.hasOwnProperty.call(b,_),g.nc=void 0;var m={};return(()=>{g.d(m,{default:()=>nh});const b=function(){return function r(){r.called=!0}};class _{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=b(),this.off=b()}}const k=new Array(256).fill("").map((r,e)=>("0"+e.toString(16)).slice(-2));function A(){const r=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+k[r>>0&255]+k[r>>8&255]+k[r>>16&255]+k[r>>24&255]+k[e>>0&255]+k[e>>8&255]+k[e>>16&255]+k[e>>24&255]+k[t>>0&255]+k[t>>8&255]+k[t>>16&255]+k[t>>24&255]+k[n>>0&255]+k[n>>8&255]+k[n>>16&255]+k[n>>24&255]}const y={get(r="normal"){return typeof r!="number"?this[r]||this.normal:r},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function x(r,e){const t=y.get(e.priority);for(let n=0;n<r.length;n++)if(y.get(r[n].priority)<t)return void r.splice(n,0,e);r.push(e)}class v extends Error{constructor(e,t,n){super(function(i,s){const a=new WeakSet,c=(p,w)=>{if(typeof w=="object"&&w!==null){if(a.has(w))return`[object ${w.constructor.name}]`;a.add(w)}return w},u=s?` ${JSON.stringify(s,c)}`:"",f=P(i);return i+u+f}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new v(e.message,t);throw n.stack=e.stack,n}}function E(r,e){console.warn(...j(r,e))}function N(r,e){console.error(...j(r,e))}function P(r){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${r}`}function j(r,e){const t=P(r);return e?[r,e,t]:[r,t]}const M="35.0.1",T=typeof window=="object"?window:g.g;if(T.CKEDITOR_VERSION)throw new v("ckeditor-duplicated-modules",null);T.CKEDITOR_VERSION=M;const O=Symbol("listeningTo"),G=Symbol("emitterId"),H=Symbol("delegations"),Q={on(r,e,t={}){this.listenTo(this,r,e,t)},once(r,e,t){let n=!1;this.listenTo(this,r,(i,...s)=>{n||(n=!0,i.off(),e.call(this,i,...s))},t)},off(r,e){this.stopListening(this,r,e)},listenTo(r,e,t,n={}){let i,s;this[O]||(this[O]={});const a=this[O];W(r)||V(r);const c=W(r);(i=a[c])||(i=a[c]={emitter:r,callbacks:{}}),(s=i.callbacks[e])||(s=i.callbacks[e]=[]),s.push(t),function(u,f,p,w,C){f._addEventListener?f._addEventListener(p,w,C):u._addEventListener.call(f,p,w,C)}(this,r,e,t,n)},stopListening(r,e,t){const n=this[O];let i=r&&W(r);const s=n&&i?n[i]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!n||r&&!s||e&&!a))if(t)ae(this,r,e,t),a.indexOf(t)!==-1&&(a.length===1?delete s.callbacks[e]:ae(this,r,e,t));else if(a){for(;t=a.pop();)ae(this,r,e,t);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(r,e);delete n[i]}else{for(i in n)this.stopListening(n[i].emitter);delete this[O]}},fire(r,...e){try{const t=r instanceof _?r:new _(this,r),n=t.name;let i=J(this,n);if(t.path.push(this),i){const a=[t,...e];i=Array.from(i);for(let c=0;c<i.length&&(i[c].callback.apply(this,a),t.off.called&&(delete t.off.called,this._removeEventListener(n,i[c].callback)),!t.stop.called);c++);}const s=this[H];if(s){const a=s.get(n),c=s.get("*");a&&ne(a,t,e),c&&ne(c,t,e)}return t.return}catch(t){v.rethrowUnexpectedError(t,this)}},delegate(...r){return{to:(e,t)=>{this[H]||(this[H]=new Map),r.forEach(n=>{const i=this[H].get(n);i?i.set(e,t):this[H].set(n,new Map([[e,t]]))})}}},stopDelegating(r,e){if(this[H])if(r)if(e){const t=this[H].get(r);t&&t.delete(e)}else this[H].delete(r);else this[H].clear()},_addEventListener(r,e,t){(function(s,a){const c=K(s);if(c[a])return;let u=a,f=null;const p=[];for(;u!==""&&!c[u];)c[u]={callbacks:[],childEvents:[]},p.push(c[u]),f&&c[u].childEvents.push(f),f=u,u=u.substr(0,u.lastIndexOf(":"));if(u!==""){for(const w of p)w.callbacks=c[u].callbacks.slice();c[u].childEvents.push(f)}})(this,r);const n=ee(this,r),i={callback:e,priority:y.get(t.priority)};for(const s of n)x(s,i)},_removeEventListener(r,e){const t=ee(this,r);for(const n of t)for(let i=0;i<n.length;i++)n[i].callback==e&&(n.splice(i,1),i--)}},R=Q;function V(r,e){r[G]||(r[G]=e||A())}function W(r){return r[G]}function K(r){return r._events||Object.defineProperty(r,"_events",{value:{}}),r._events}function ee(r,e){const t=K(r)[e];if(!t)return[];let n=[t.callbacks];for(let i=0;i<t.childEvents.length;i++){const s=ee(r,t.childEvents[i]);n=n.concat(s)}return n}function J(r,e){let t;return r._events&&(t=r._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?J(r,e.substr(0,e.lastIndexOf(":"))):null}function ne(r,e,t){for(let[n,i]of r){i?typeof i=="function"&&(i=i(e.name)):i=e.name;const s=new _(e.source,i);s.path=[...e.path],n.fire(s,...t)}}function ae(r,e,t,n){e._removeEventListener?e._removeEventListener(t,n):r._removeEventListener.call(e,t,n)}const be=function(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")},he=Symbol("observableProperties"),Ae=Symbol("boundObservables"),Ee=Symbol("boundProperties"),He=Symbol("decoratedMethods"),It=Symbol("decoratedOriginal"),_t={set(r,e){if(be(r))return void Object.keys(r).forEach(n=>{this.set(n,r[n])},this);Tt(this);const t=this[he];if(r in this&&!t.has(r))throw new v("observable-set-cannot-override",this);Object.defineProperty(this,r,{enumerable:!0,configurable:!0,get:()=>t.get(r),set(n){const i=t.get(r);let s=this.fire("set:"+r,r,n,i);s===void 0&&(s=n),i===s&&t.has(r)||(t.set(r,s),this.fire("change:"+r,r,s,i))}}),this[r]=e},bind(...r){if(!r.length||!ce(r))throw new v("observable-bind-wrong-properties",this);if(new Set(r).size!==r.length)throw new v("observable-bind-duplicate-properties",this);Tt(this);const e=this[Ee];r.forEach(n=>{if(e.has(n))throw new v("observable-bind-rebind",this)});const t=new Map;return r.forEach(n=>{const i={property:n,to:[]};e.set(n,i),t.set(n,i)}),{to:fn,toMany:U,_observable:this,_bindProperties:r,_to:[],_bindings:t}},unbind(...r){if(!this[he])return;const e=this[Ee],t=this[Ae];if(r.length){if(!ce(r))throw new v("observable-unbind-wrong-properties",this);r.forEach(n=>{const i=e.get(n);i&&(i.to.forEach(([s,a])=>{const c=t.get(s),u=c[a];u.delete(i),u.size||delete c[a],Object.keys(c).length||(t.delete(s),this.stopListening(s,"change"))}),e.delete(n))})}else t.forEach((n,i)=>{this.stopListening(i,"change")}),t.clear(),e.clear()},decorate(r){Tt(this);const e=this[r];if(!e)throw new v("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:r});this.on(r,(t,n)=>{t.return=e.apply(this,n)}),this[r]=function(...t){return this.fire(r,t)},this[r][It]=e,this[He]||(this[He]=[]),this[He].push(r)},...R};_t.stopListening=function(r,e,t){if(!r&&this[He]){for(const n of this[He])this[n]=this[n][It];delete this[He]}R.stopListening.call(this,r,e,t)};const Ne=_t;function Tt(r){r[he]||(Object.defineProperty(r,he,{value:new Map}),Object.defineProperty(r,Ae,{value:new Map}),Object.defineProperty(r,Ee,{value:new Map}))}function fn(...r){const e=function(...s){if(!s.length)throw new v("observable-bind-to-parse-error",null);const a={to:[]};let c;return typeof s[s.length-1]=="function"&&(a.callback=s.pop()),s.forEach(u=>{if(typeof u=="string")c.properties.push(u);else{if(typeof u!="object")throw new v("observable-bind-to-parse-error",null);c={observable:u,properties:[]},a.to.push(c)}}),a}(...r),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new v("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new v("observable-bind-to-extra-callback",this);var i;e.to.forEach(s=>{if(s.properties.length&&s.properties.length!==n)throw new v("observable-bind-to-properties-length",this);s.properties.length||(s.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),i=this._observable,this._to.forEach(s=>{const a=i[Ae];let c;a.get(s.observable)||i.listenTo(s.observable,"change",(u,f)=>{c=a.get(s.observable)[f],c&&c.forEach(p=>{de(i,p.property)})})}),function(s){let a;s._bindings.forEach((c,u)=>{s._to.forEach(f=>{a=f.properties[c.callback?0:s._bindProperties.indexOf(u)],c.to.push([f.observable,a]),function(p,w,C,S){const D=p[Ae],I=D.get(C),B=I||{};B[S]||(B[S]=new Set),B[S].add(w),I||D.set(C,B)}(s._observable,c,f.observable,a)})})}(this),this._bindProperties.forEach(s=>{de(this._observable,s)})}function U(r,e,t){if(this._bindings.size>1)throw new v("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const s=n.map(a=>[a,i]);return Array.prototype.concat.apply([],s)}(r,e),t)}function ce(r){return r.every(e=>typeof e=="string")}function de(r,e){const t=r[Ee].get(e);let n;t.callback?n=t.callback.apply(r,t.to.map(i=>i[0][i[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(r,e)?r[e]=n:r.set(e,n)}function ie(r,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),i=Object.getOwnPropertySymbols(t);n.concat(i).forEach(s=>{if(s in r.prototype)return;const a=Object.getOwnPropertyDescriptor(t,s);a.enumerable=!1,Object.defineProperty(r.prototype,s,a)})})}class Z{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Ke,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Ke),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ke(r){r.return=!1,r.stop()}ie(Z,Ne);class ge{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,i)=>{i&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",De,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",De),this.refresh())}execute(){}destroy(){this.stopListening()}}function De(r){r.return=!1,r.stop()}ie(ge,Ne);class z extends ge{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){x(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const $=typeof Ql=="object"&&Ql&&Ql.Object===Object&&Ql;var X=typeof self=="object"&&self&&self.Object===Object&&self;const re=$||X||Function("return this")(),se=re.Symbol;var fe=Object.prototype,Ce=fe.hasOwnProperty,me=fe.toString,pe=se?se.toStringTag:void 0;const ue=function(r){var e=Ce.call(r,pe),t=r[pe];try{r[pe]=void 0;var n=!0}catch{}var i=me.call(r);return n&&(e?r[pe]=t:delete r[pe]),i};var Se=Object.prototype.toString;const _e=function(r){return Se.call(r)};var ye=se?se.toStringTag:void 0;const Ie=function(r){return r==null?r===void 0?"[object Undefined]":"[object Null]":ye&&ye in Object(r)?ue(r):_e(r)},Ue=function(r,e){return function(t){return r(e(t))}},nt=Ue(Object.getPrototypeOf,Object),Fe=function(r){return r!=null&&typeof r=="object"};var ht=Function.prototype,Sn=Object.prototype,Mo=ht.toString,Fa=Sn.hasOwnProperty,Ii=Mo.call(Object);const Jt=function(r){if(!Fe(r)||Ie(r)!="[object Object]")return!1;var e=nt(r);if(e===null)return!0;var t=Fa.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Mo.call(t)==Ii},ln=function(){this.__data__=[],this.size=0},Xt=function(r,e){return r===e||r!=r&&e!=e},Ti=function(r,e){for(var t=r.length;t--;)if(Xt(r[t][0],e))return t;return-1};var S1=Array.prototype.splice;const D1=function(r){var e=this.__data__,t=Ti(e,r);return!(t<0)&&(t==e.length-1?e.pop():S1.call(e,t,1),--this.size,!0)},I1=function(r){var e=this.__data__,t=Ti(e,r);return t<0?void 0:e[t][1]},T1=function(r){return Ti(this.__data__,r)>-1},M1=function(r,e){var t=this.__data__,n=Ti(t,r);return n<0?(++this.size,t.push([r,e])):t[n][1]=e,this};function hr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}hr.prototype.clear=ln,hr.prototype.delete=D1,hr.prototype.get=I1,hr.prototype.has=T1,hr.prototype.set=M1;const ja=hr,B1=function(){this.__data__=new ja,this.size=0},N1=function(r){var e=this.__data__,t=e.delete(r);return this.size=e.size,t},P1=function(r){return this.__data__.get(r)},z1=function(r){return this.__data__.has(r)},_s=function(r){if(!be(r))return!1;var e=Ie(r);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Vc=re["__core-js_shared__"];var af=function(){var r=/[^.]+$/.exec(Vc&&Vc.keys&&Vc.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();const L1=function(r){return!!af&&af in r};var O1=Function.prototype.toString;const Mi=function(r){if(r!=null){try{return O1.call(r)}catch{}try{return r+""}catch{}}return""};var R1=/^\[object .+?Constructor\]$/,F1=Function.prototype,j1=Object.prototype,V1=F1.toString,H1=j1.hasOwnProperty,U1=RegExp("^"+V1.call(H1).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const $1=function(r){return!(!be(r)||L1(r))&&(_s(r)?U1:R1).test(Mi(r))},W1=function(r,e){return r==null?void 0:r[e]},Bi=function(r,e){var t=W1(r,e);return $1(t)?t:void 0},Cs=Bi(re,"Map"),As=Bi(Object,"create"),q1=function(){this.__data__=As?As(null):{},this.size=0},G1=function(r){var e=this.has(r)&&delete this.__data__[r];return this.size-=e?1:0,e};var K1=Object.prototype.hasOwnProperty;const Y1=function(r){var e=this.__data__;if(As){var t=e[r];return t==="__lodash_hash_undefined__"?void 0:t}return K1.call(e,r)?e[r]:void 0};var Q1=Object.prototype.hasOwnProperty;const Z1=function(r){var e=this.__data__;return As?e[r]!==void 0:Q1.call(e,r)},J1=function(r,e){var t=this.__data__;return this.size+=this.has(r)?0:1,t[r]=As&&e===void 0?"__lodash_hash_undefined__":e,this};function gr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}gr.prototype.clear=q1,gr.prototype.delete=G1,gr.prototype.get=Y1,gr.prototype.has=Z1,gr.prototype.set=J1;const lf=gr,X1=function(){this.size=0,this.__data__={hash:new lf,map:new(Cs||ja),string:new lf}},ex=function(r){var e=typeof r;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?r!=="__proto__":r===null},Va=function(r,e){var t=r.__data__;return ex(e)?t[typeof e=="string"?"string":"hash"]:t.map},tx=function(r){var e=Va(this,r).delete(r);return this.size-=e?1:0,e},nx=function(r){return Va(this,r).get(r)},ox=function(r){return Va(this,r).has(r)},ix=function(r,e){var t=Va(this,r),n=t.size;return t.set(r,e),this.size+=t.size==n?0:1,this};function fr(r){var e=-1,t=r==null?0:r.length;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}fr.prototype.clear=X1,fr.prototype.delete=tx,fr.prototype.get=nx,fr.prototype.has=ox,fr.prototype.set=ix;const Ha=fr,rx=function(r,e){var t=this.__data__;if(t instanceof ja){var n=t.__data__;if(!Cs||n.length<199)return n.push([r,e]),this.size=++t.size,this;t=this.__data__=new Ha(n)}return t.set(r,e),this.size=t.size,this};function mr(r){var e=this.__data__=new ja(r);this.size=e.size}mr.prototype.clear=B1,mr.prototype.delete=N1,mr.prototype.get=P1,mr.prototype.has=z1,mr.prototype.set=rx;const ys=mr,sx=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n&&e(r[t],t,r)!==!1;);return r},Ua=function(){try{var r=Bi(Object,"defineProperty");return r({},"",{}),r}catch{}}(),Hc=function(r,e,t){e=="__proto__"&&Ua?Ua(r,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):r[e]=t};var ax=Object.prototype.hasOwnProperty;const Uc=function(r,e,t){var n=r[e];ax.call(r,e)&&Xt(n,t)&&(t!==void 0||e in r)||Hc(r,e,t)},pr=function(r,e,t,n){var i=!t;t||(t={});for(var s=-1,a=e.length;++s<a;){var c=e[s],u=n?n(t[c],r[c],c,t,r):void 0;u===void 0&&(u=r[c]),i?Hc(t,c,u):Uc(t,c,u)}return t},lx=function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n},cf=function(r){return Fe(r)&&Ie(r)=="[object Arguments]"};var df=Object.prototype,cx=df.hasOwnProperty,dx=df.propertyIsEnumerable;const $c=cf(function(){return arguments}())?cf:function(r){return Fe(r)&&cx.call(r,"callee")&&!dx.call(r,"callee")},cn=Array.isArray,ux=function(){return!1};var uf=l&&!l.nodeType&&l,hf=uf&&!0&&o&&!o.nodeType&&o,gf=hf&&hf.exports===uf?re.Buffer:void 0;const xs=(gf?gf.isBuffer:void 0)||ux;var hx=/^(?:0|[1-9]\d*)$/;const Wc=function(r,e){var t=typeof r;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&hx.test(r))&&r>-1&&r%1==0&&r<e},ff=function(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=9007199254740991};var wt={};wt["[object Float32Array]"]=wt["[object Float64Array]"]=wt["[object Int8Array]"]=wt["[object Int16Array]"]=wt["[object Int32Array]"]=wt["[object Uint8Array]"]=wt["[object Uint8ClampedArray]"]=wt["[object Uint16Array]"]=wt["[object Uint32Array]"]=!0,wt["[object Arguments]"]=wt["[object Array]"]=wt["[object ArrayBuffer]"]=wt["[object Boolean]"]=wt["[object DataView]"]=wt["[object Date]"]=wt["[object Error]"]=wt["[object Function]"]=wt["[object Map]"]=wt["[object Number]"]=wt["[object Object]"]=wt["[object RegExp]"]=wt["[object Set]"]=wt["[object String]"]=wt["[object WeakMap]"]=!1;const gx=function(r){return Fe(r)&&ff(r.length)&&!!wt[Ie(r)]},qc=function(r){return function(e){return r(e)}};var mf=l&&!l.nodeType&&l,Es=mf&&!0&&o&&!o.nodeType&&o,Gc=Es&&Es.exports===mf&&$.process;const br=function(){try{var r=Es&&Es.require&&Es.require("util").types;return r||Gc&&Gc.binding&&Gc.binding("util")}catch{}}();var pf=br&&br.isTypedArray;const Kc=pf?qc(pf):gx;var fx=Object.prototype.hasOwnProperty;const bf=function(r,e){var t=cn(r),n=!t&&$c(r),i=!t&&!n&&xs(r),s=!t&&!n&&!i&&Kc(r),a=t||n||i||s,c=a?lx(r.length,String):[],u=c.length;for(var f in r)!e&&!fx.call(r,f)||a&&(f=="length"||i&&(f=="offset"||f=="parent")||s&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Wc(f,u))||c.push(f);return c};var mx=Object.prototype;const Yc=function(r){var e=r&&r.constructor;return r===(typeof e=="function"&&e.prototype||mx)},px=Ue(Object.keys,Object);var bx=Object.prototype.hasOwnProperty;const kx=function(r){if(!Yc(r))return px(r);var e=[];for(var t in Object(r))bx.call(r,t)&&t!="constructor"&&e.push(t);return e},$a=function(r){return r!=null&&ff(r.length)&&!_s(r)},Qc=function(r){return $a(r)?bf(r):kx(r)},wx=function(r,e){return r&&pr(e,Qc(e),r)},vx=function(r){var e=[];if(r!=null)for(var t in Object(r))e.push(t);return e};var _x=Object.prototype.hasOwnProperty;const Cx=function(r){if(!be(r))return vx(r);var e=Yc(r),t=[];for(var n in r)(n!="constructor"||!e&&_x.call(r,n))&&t.push(n);return t},kr=function(r){return $a(r)?bf(r,!0):Cx(r)},Ax=function(r,e){return r&&pr(e,kr(e),r)};var kf=l&&!l.nodeType&&l,wf=kf&&!0&&o&&!o.nodeType&&o,vf=wf&&wf.exports===kf?re.Buffer:void 0,_f=vf?vf.allocUnsafe:void 0;const Cf=function(r,e){if(e)return r.slice();var t=r.length,n=_f?_f(t):new r.constructor(t);return r.copy(n),n},Af=function(r,e){var t=-1,n=r.length;for(e||(e=Array(n));++t<n;)e[t]=r[t];return e},yx=function(r,e){for(var t=-1,n=r==null?0:r.length,i=0,s=[];++t<n;){var a=r[t];e(a,t,r)&&(s[i++]=a)}return s},yf=function(){return[]};var xx=Object.prototype.propertyIsEnumerable,xf=Object.getOwnPropertySymbols;const Zc=xf?function(r){return r==null?[]:(r=Object(r),yx(xf(r),function(e){return xx.call(r,e)}))}:yf,Ex=function(r,e){return pr(r,Zc(r),e)},Ef=function(r,e){for(var t=-1,n=e.length,i=r.length;++t<n;)r[i+t]=e[t];return r},Sf=Object.getOwnPropertySymbols?function(r){for(var e=[];r;)Ef(e,Zc(r)),r=nt(r);return e}:yf,Sx=function(r,e){return pr(r,Sf(r),e)},Df=function(r,e,t){var n=e(r);return cn(r)?n:Ef(n,t(r))},Jc=function(r){return Df(r,Qc,Zc)},Dx=function(r){return Df(r,kr,Sf)},Xc=Bi(re,"DataView"),ed=Bi(re,"Promise"),td=Bi(re,"Set"),nd=Bi(re,"WeakMap");var If="[object Map]",Tf="[object Promise]",Mf="[object Set]",Bf="[object WeakMap]",Nf="[object DataView]",Ix=Mi(Xc),Tx=Mi(Cs),Mx=Mi(ed),Bx=Mi(td),Nx=Mi(nd),Ni=Ie;(Xc&&Ni(new Xc(new ArrayBuffer(1)))!=Nf||Cs&&Ni(new Cs)!=If||ed&&Ni(ed.resolve())!=Tf||td&&Ni(new td)!=Mf||nd&&Ni(new nd)!=Bf)&&(Ni=function(r){var e=Ie(r),t=e=="[object Object]"?r.constructor:void 0,n=t?Mi(t):"";if(n)switch(n){case Ix:return Nf;case Tx:return If;case Mx:return Tf;case Bx:return Mf;case Nx:return Bf}return e});const Ss=Ni;var Px=Object.prototype.hasOwnProperty;const zx=function(r){var e=r.length,t=new r.constructor(e);return e&&typeof r[0]=="string"&&Px.call(r,"index")&&(t.index=r.index,t.input=r.input),t},Wa=re.Uint8Array,od=function(r){var e=new r.constructor(r.byteLength);return new Wa(e).set(new Wa(r)),e},Lx=function(r,e){var t=e?od(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)};var Ox=/\w*$/;const Rx=function(r){var e=new r.constructor(r.source,Ox.exec(r));return e.lastIndex=r.lastIndex,e};var Pf=se?se.prototype:void 0,zf=Pf?Pf.valueOf:void 0;const Fx=function(r){return zf?Object(zf.call(r)):{}},Lf=function(r,e){var t=e?od(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)},jx=function(r,e,t){var n=r.constructor;switch(e){case"[object ArrayBuffer]":return od(r);case"[object Boolean]":case"[object Date]":return new n(+r);case"[object DataView]":return Lx(r,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Lf(r,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(r);case"[object RegExp]":return Rx(r);case"[object Symbol]":return Fx(r)}};var Of=Object.create;const Vx=function(){function r(){}return function(e){if(!be(e))return{};if(Of)return Of(e);r.prototype=e;var t=new r;return r.prototype=void 0,t}}(),Rf=function(r){return typeof r.constructor!="function"||Yc(r)?{}:Vx(nt(r))},Hx=function(r){return Fe(r)&&Ss(r)=="[object Map]"};var Ff=br&&br.isMap;const Ux=Ff?qc(Ff):Hx,$x=function(r){return Fe(r)&&Ss(r)=="[object Set]"};var jf=br&&br.isSet;const Wx=jf?qc(jf):$x;var Vf="[object Arguments]",Hf="[object Function]",qx="[object Object]",pt={};pt[Vf]=pt["[object Array]"]=pt["[object ArrayBuffer]"]=pt["[object DataView]"]=pt["[object Boolean]"]=pt["[object Date]"]=pt["[object Float32Array]"]=pt["[object Float64Array]"]=pt["[object Int8Array]"]=pt["[object Int16Array]"]=pt["[object Int32Array]"]=pt["[object Map]"]=pt["[object Number]"]=pt["[object Object]"]=pt["[object RegExp]"]=pt["[object Set]"]=pt["[object String]"]=pt["[object Symbol]"]=pt["[object Uint8Array]"]=pt["[object Uint8ClampedArray]"]=pt["[object Uint16Array]"]=pt["[object Uint32Array]"]=!0,pt["[object Error]"]=pt[Hf]=pt["[object WeakMap]"]=!1;const id=function r(e,t,n,i,s,a){var c,u=1&t,f=2&t,p=4&t;if(n&&(c=s?n(e,i,s,a):n(e)),c!==void 0)return c;if(!be(e))return e;var w=cn(e);if(w){if(c=zx(e),!u)return Af(e,c)}else{var C=Ss(e),S=C==Hf||C=="[object GeneratorFunction]";if(xs(e))return Cf(e,u);if(C==qx||C==Vf||S&&!s){if(c=f||S?{}:Rf(e),!u)return f?Sx(e,Ax(c,e)):Ex(e,wx(c,e))}else{if(!pt[C])return s?e:{};c=jx(e,C,u)}}a||(a=new ys);var D=a.get(e);if(D)return D;a.set(e,c),Wx(e)?e.forEach(function(B){c.add(r(B,t,n,B,e,a))}):Ux(e)&&e.forEach(function(B,F){c.set(F,r(B,t,n,F,e,a))});var I=w?void 0:(p?f?Dx:Jc:f?kr:Qc)(e);return sx(I||e,function(B,F){I&&(B=e[F=B]),Uc(c,F,r(B,t,n,F,e,a))}),c},Uf=function(r,e){return id(r,5,e=typeof e=="function"?e:void 0)},Pi=function(r){return Fe(r)&&r.nodeType===1&&!Jt(r)};class $f{constructor(e,t){this._config={},t&&this.define(Wf(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,i=!1){if(Jt(t))return void this._setObjectToTarget(e,t,i);const s=t.split(".");t=s.pop();for(const a of s)Jt(e[a])||(e[a]={}),e=e[a];if(Jt(n))return Jt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,i);i&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const i of n){if(!Jt(e[i])){e=null;break}e=e[i]}return e?Wf(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(i=>{this._setToTarget(e,i,t[i],n)})}}function Wf(r){return Uf(r,Gx)}function Gx(r){return Pi(r)?r:void 0}function $n(r){return!(!r||!r[Symbol.iterator])}class qf{constructor(e={},t={}){const n=$n(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of e)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new v("collection-add-item-invalid-index",this);let n=0;for(const i of e){const s=this._getItemIdBeforeAdding(i),a=t+n;this._items.splice(a,0,i),this._itemMap.set(s,i),this.fire("add",i,a),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new v("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new v("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(i,s,a)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(s);if(c&&u)this._bindToExternalToInternalMap.set(s,u),this._bindToInternalToExternalMap.set(u,s);else{const f=e(s);if(!f)return void this._skippedIndexesFromExternal.push(a);let p=a;for(const w of this._skippedIndexesFromExternal)a>w&&p--;for(const w of t._skippedIndexesFromExternal)p>=w&&p++;this._bindToExternalToInternalMap.set(s,f),this._bindToInternalToExternalMap.set(f,s),this.add(f,p);for(let w=0;w<t._skippedIndexesFromExternal.length;w++)p<=t._skippedIndexesFromExternal[w]&&t._skippedIndexesFromExternal[w]++}};for(const i of t)n(0,i,t.getIndex(i));this.listenTo(t,"add",n),this.listenTo(t,"remove",(i,s,a)=>{const c=this._bindToExternalToInternalMap.get(s);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(a<f&&u.push(f-1),a>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new v("collection-add-invalid-id",this);if(this.get(n))throw new v("collection-add-item-already-exists",this)}else e[t]=n=A();return n}_remove(e){let t,n,i,s=!1;const a=this._idProperty;if(typeof e=="string"?(n=e,i=this._itemMap.get(n),s=!i,i&&(t=this._items.indexOf(i))):typeof e=="number"?(t=e,i=this._items[t],s=!i,i&&(n=i[a])):(i=e,n=i[a],t=this._items.indexOf(i),s=t==-1||!this._itemMap.get(n)),s)throw new v("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(c),this.fire("remove",i,t),[i,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}ie(qf,R);const dn=qf;class rd{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const i of t)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,s]of n)this._contextPlugins.set(i,s),this._contextPlugins.set(s,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new v("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const i=this,s=this._context;(function D(I,B=new Set){I.forEach(F=>{u(F)&&(B.has(F)||(B.add(F),F.pluginName&&!i._availablePlugins.has(F.pluginName)&&i._availablePlugins.set(F.pluginName,F),F.requires&&D(F.requires,B)))})})(e),C(e);const a=[...function D(I,B=new Set){return I.map(F=>u(F)?F:i._availablePlugins.get(F)).reduce((F,Y)=>B.has(Y)?F:(B.add(Y),Y.requires&&(C(Y.requires,Y),D(Y.requires,B).forEach(oe=>F.add(oe))),F.add(Y)),new Set)}(e.filter(D=>!p(D,t)))];(function(D,I){for(const B of I){if(typeof B!="function")throw new v("plugincollection-replace-plugin-invalid-type",null,{pluginItem:B});const F=B.pluginName;if(!F)throw new v("plugincollection-replace-plugin-missing-name",null,{pluginItem:B});if(B.requires&&B.requires.length)throw new v("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:F});const Y=i._availablePlugins.get(F);if(!Y)throw new v("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:F});const oe=D.indexOf(Y);if(oe===-1){if(i._contextPlugins.has(Y))return;throw new v("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:F})}if(Y.requires&&Y.requires.length)throw new v("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:F});D.splice(oe,1,B),i._availablePlugins.set(F,B)}})(a,n);const c=function(D){return D.map(I=>{const B=i._contextPlugins.get(I)||new I(s);return i._add(I,B),B})}(a);return S(c,"init").then(()=>S(c,"afterInit")).then(()=>c);function u(D){return typeof D=="function"}function f(D){return u(D)&&D.isContextPlugin}function p(D,I){return I.some(B=>B===D||w(D)===B||w(B)===D)}function w(D){return u(D)?D.pluginName||D.name:D}function C(D,I=null){D.map(B=>u(B)?B:i._availablePlugins.get(B)||B).forEach(B=>{(function(F,Y){if(!u(F))throw Y?new v("plugincollection-soft-required",s,{missingPlugin:F,requiredBy:w(Y)}):new v("plugincollection-plugin-not-found",s,{plugin:F})})(B,I),function(F,Y){if(!!f(Y)&&!f(F))throw new v("plugincollection-context-required",s,{plugin:w(F),requiredBy:w(Y)})}(B,I),function(F,Y){if(!!Y&&!!p(F,t))throw new v("plugincollection-required",s,{plugin:w(F),requiredBy:w(Y)})}(B,I)})}function S(D,I){return D.reduce((B,F)=>F[I]?i._contextPlugins.has(F)?B:B.then(F[I].bind(F)):B,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new v("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function Ut(r){return Array.isArray(r)?r:[r]}function Kx(r,e,t=1){if(typeof t!="number")throw new v("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(r=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const i=e.id||e.string;if(n===0||!function(u,f){return!!window.CKEDITOR_TRANSLATIONS[u]&&!!window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(r,i))return t!==1?e.plural:e.string;const s=window.CKEDITOR_TRANSLATIONS[r].dictionary,a=window.CKEDITOR_TRANSLATIONS[r].getPluralForm||(u=>u===1?0:1),c=s[i];return typeof c=="string"?c:c[Number(a(t))]}ie(rd,R),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Yx=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function Gf(r){return Yx.includes(r)?"rtl":"ltr"}class Qx{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=Gf(this.uiLanguage),this.contentLanguageDirection=Gf(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Ut(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(i,s){return i.replace(/%(\d+)/g,(a,c)=>c<s.length?s[c]:a)}(Kx(this.uiLanguage,e,n),t)}}class Zx{constructor(e){this.config=new $f(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new rd(this,t);const n=this.config.get("language")||{};this.locale=new Qx({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new dn,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new v("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new v("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new v("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Ds{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function en(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++)if(r[n]!=e[n])return n;return r.length==e.length?"same":r.length<e.length?"prefix":"extension"}ie(Ds,Ne);const Kf=function(r){return id(r,4)};class zi{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new v("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=en(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=Kf(this);return delete e.parent,e}is(e){return e==="node"||e==="view:node"}}ie(zi,R);class gt extends zi{constructor(e,t){super(e),this._textData=t}is(e){return e==="$text"||e==="view:$text"||e==="text"||e==="view:text"||e==="node"||e==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof gt&&(this===e||this.data===e.data)}_clone(){return new gt(this.document,this.data)}}class Bo{constructor(e,t,n){if(this.textNode=e,t<0||t>e.data.length)throw new v("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new v("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return e==="$textProxy"||e==="view:$textProxy"||e==="textProxy"||e==="view:textProxy"}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function fo(r){return $n(r)?new Map(r):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(r)}class mo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const i=Yf(t,n);if(i)return{element:t,pattern:n,match:i}}return null}matchAll(...e){const t=[];for(const n of e)for(const i of this._patterns){const s=Yf(n,i);s&&t.push({element:n,pattern:i,match:s})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Yf(r,e){if(typeof e=="function")return e(r);const t={};return e.name&&(t.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(e.name,r.name),!t.name)||e.attributes&&(t.attributes=function(n,i){const s=new Set(i.getAttributeKeys());return Jt(n)?(n.style!==void 0&&E("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&E("matcher-pattern-deprecated-attributes-class-key",n)):(s.delete("style"),s.delete("class")),sd(n,s,a=>i.getAttribute(a))}(e.attributes,r),!t.attributes)?null:!(e.classes&&(t.classes=function(n,i){return sd(n,i.getClassNames())}(e.classes,r),!t.classes))&&!(e.styles&&(t.styles=function(n,i){return sd(n,i.getStyleNames(!0),s=>i.getStyle(s))}(e.styles,r),!t.styles))&&t}function sd(r,e,t){const n=function(a){return Array.isArray(a)?a.map(c=>Jt(c)?(c.key!==void 0&&c.value!==void 0||E("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Jt(a)?Object.entries(a):[[a,!0]]}(r),i=Array.from(e),s=[];return n.forEach(([a,c])=>{i.forEach(u=>{(function(f,p){return f===!0||f===p||f instanceof RegExp&&p.match(f)})(a,u)&&function(f,p,w){if(f===!0)return!0;const C=w(p);return f===C||f instanceof RegExp&&!!String(C).match(f)}(c,u,t)&&s.push(u)})}),!n.length||s.length<n.length?null:s}const qa=function(r){return typeof r=="symbol"||Fe(r)&&Ie(r)=="[object Symbol]"};var Jx=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xx=/^\w*$/;const e2=function(r,e){if(cn(r))return!1;var t=typeof r;return!(t!="number"&&t!="symbol"&&t!="boolean"&&r!=null&&!qa(r))||Xx.test(r)||!Jx.test(r)||e!=null&&r in Object(e)};function ad(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,i=e?e.apply(this,n):n[0],s=t.cache;if(s.has(i))return s.get(i);var a=r.apply(this,n);return t.cache=s.set(i,a)||s,a};return t.cache=new(ad.Cache||Ha),t}ad.Cache=Ha;const t2=ad;var n2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o2=/\\(\\)?/g,i2=function(r){var e=t2(r,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(n2,function(t,n,i,s){e.push(i?s.replace(o2,"$1"):n||t)}),e});const r2=i2,s2=function(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i};var Qf=se?se.prototype:void 0,Zf=Qf?Qf.toString:void 0;const a2=function r(e){if(typeof e=="string")return e;if(cn(e))return s2(e,r)+"";if(qa(e))return Zf?Zf.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},ld=function(r){return r==null?"":a2(r)},cd=function(r,e){return cn(r)?r:e2(r,e)?[r]:r2(ld(r))},l2=function(r){var e=r==null?0:r.length;return e?r[e-1]:void 0},dd=function(r){if(typeof r=="string"||qa(r))return r;var e=r+"";return e=="0"&&1/r==-1/0?"-0":e},Jf=function(r,e){for(var t=0,n=(e=cd(e,r)).length;r!=null&&t<n;)r=r[dd(e[t++])];return t&&t==n?r:void 0},Xf=function(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),(t=t>i?i:t)<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=r[n+e];return s},c2=function(r,e){return e.length<2?r:Jf(r,Xf(e,0,-1))},d2=function(r,e){return e=cd(e,r),(r=c2(r,e))==null||delete r[dd(l2(e))]},u2=function(r,e){return r==null||d2(r,e)},Ga=function(r,e,t){var n=r==null?void 0:Jf(r,e);return n===void 0?t:n},ud=function(r,e,t){(t!==void 0&&!Xt(r[e],t)||t===void 0&&!(e in r))&&Hc(r,e,t)},h2=function(r){return function(e,t,n){for(var i=-1,s=Object(e),a=n(e),c=a.length;c--;){var u=a[r?c:++i];if(t(s[u],u,s)===!1)break}return e}}(),g2=function(r){return Fe(r)&&$a(r)},hd=function(r,e){if((e!=="constructor"||typeof r[e]!="function")&&e!="__proto__")return r[e]},f2=function(r){return pr(r,kr(r))},m2=function(r,e,t,n,i,s,a){var c=hd(r,t),u=hd(e,t),f=a.get(u);if(f)ud(r,t,f);else{var p=s?s(c,u,t+"",r,e,a):void 0,w=p===void 0;if(w){var C=cn(u),S=!C&&xs(u),D=!C&&!S&&Kc(u);p=u,C||S||D?cn(c)?p=c:g2(c)?p=Af(c):S?(w=!1,p=Cf(u,!0)):D?(w=!1,p=Lf(u,!0)):p=[]:Jt(u)||$c(u)?(p=c,$c(c)?p=f2(c):be(c)&&!_s(c)||(p=Rf(u))):w=!1}w&&(a.set(u,p),i(p,u,n,s,a),a.delete(u)),ud(r,t,p)}},p2=function r(e,t,n,i,s){e!==t&&h2(t,function(a,c){if(s||(s=new ys),be(a))m2(e,t,c,n,r,i,s);else{var u=i?i(hd(e,c),a,c+"",e,t,s):void 0;u===void 0&&(u=a),ud(e,c,u)}},kr)},Li=function(r){return r},b2=function(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)};var em=Math.max;const k2=function(r,e,t){return e=em(e===void 0?r.length-1:e,0),function(){for(var n=arguments,i=-1,s=em(n.length-e,0),a=Array(s);++i<s;)a[i]=n[e+i];i=-1;for(var c=Array(e+1);++i<e;)c[i]=n[i];return c[e]=t(a),b2(r,this,c)}},w2=function(r){return function(){return r}},v2=Ua?function(r,e){return Ua(r,"toString",{configurable:!0,enumerable:!1,value:w2(e),writable:!0})}:Li;var _2=Date.now;const C2=function(r){var e=0,t=0;return function(){var n=_2(),i=16-(n-t);if(t=n,i>0){if(++e>=800)return arguments[0]}else e=0;return r.apply(void 0,arguments)}}(v2),A2=function(r,e){return C2(k2(r,e,Li),r+"")},y2=function(r,e,t){if(!be(t))return!1;var n=typeof e;return!!(n=="number"?$a(t)&&Wc(e,t.length):n=="string"&&e in t)&&Xt(t[e],r)},tm=function(r){return A2(function(e,t){var n=-1,i=t.length,s=i>1?t[i-1]:void 0,a=i>2?t[2]:void 0;for(s=r.length>3&&typeof s=="function"?(i--,s):void 0,a&&y2(t[0],t[1],a)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var c=t[n];c&&r(e,c,n,s)}return e})},nm=tm(function(r,e,t){p2(r,e,t)}),x2=function(r,e,t,n){if(!be(r))return r;for(var i=-1,s=(e=cd(e,r)).length,a=s-1,c=r;c!=null&&++i<s;){var u=dd(e[i]),f=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return r;if(i!=a){var p=c[u];(f=n?n(p,u,c):void 0)===void 0&&(f=be(p)?p:Wc(e[i+1])?[]:{})}Uc(c,u,f),c=c[u]}return r},E2=function(r,e,t){return r==null?r:x2(r,e,t)};class S2{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let i=null,s=0,a=0,c=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const p=n.charAt(f);if(i===null)switch(p){case":":c||(c=n.substr(s,f-s),a=f+1);break;case'"':case"'":i=p;break;case";":{const w=n.substr(a,f-a);c&&u.set(c.trim(),w.trim()),c=null,s=f+1;break}}else p===i&&(i=null)}return u}(e).entries());for(const[n,i]of t)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(be(e))for(const[n,i]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=gd(e);u2(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!be(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),i=Ga(this._styles,n);!i||!Array.from(Object.keys(i)).length&&this.remove(n)}}class D2{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(be(t))fd(n,gd(e),t);else if(this._normalizers.has(e)){const i=this._normalizers.get(e),{path:s,value:a}=i(t);fd(n,s,a)}else fd(n,e,t)}getNormalized(e,t){if(!e)return nm({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Ga(t,n);const i=n(e,t);if(i)return i}return Ga(t,gd(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(i=>{const s=this.getNormalized(i,e);return s&&typeof s=="object"?Object.keys(s).length:s}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function gd(r){return r.replace("-",".")}function fd(r,e,t){let n=t;be(t)&&(n=nm({},Ga(r,e),t)),E2(r,e,n)}class Wn extends zi{constructor(e,t,n,i){if(super(e),this.name=t,this._attrs=function(s){s=fo(s);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const s=this._attrs.get("class");om(this._classes,s),this._attrs.delete("class")}this._styles=new S2(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="view:element"):e==="element"||e==="view:element"||e==="node"||e==="view:node"}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Wn))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new mo(...e);let n=this.parent;for(;n;){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const i of this.getChildren())t.push(i._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,a){return typeof a=="string"?[new gt(s,a)]:($n(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new gt(s,c):c instanceof Bo?new gt(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,s.document=this.document,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?om(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Ut(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Ut(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function om(r,e){const t=e.split(/\s+/);r.clear(),t.forEach(n=>r.add(n))}class Ka extends Wn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=im}is(e,t=null){return t?t===this.name&&(e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}}function im(){const r=[...this.getChildren()],e=r[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of r)if(!t.is("uiElement"))return null;return this.childCount}class Ya extends Ka{constructor(e,t,n,i){super(e,t,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",s=>s&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&(e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}destroy(){this.stopListening()}}ie(Ya,Ne);const rm=Symbol("rootName");class I2 extends Ya{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&(e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}get rootName(){return this.getCustomProperty(rm)}set rootName(e){this._setCustomProperty(rm,e)}set _name(e){this.name=e}}class Oi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new v("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=ke._createAt(e.startPosition):this.position=ke._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,i;do i=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let i;if(n instanceof gt){if(e.isAtEnd)return this.position=ke._createAfter(n),this._next();i=n.data[e.offset]}else i=n.getChild(e.offset);if(i instanceof Wn)return this.shallow?e.offset++:e=new ke(i,0),this.position=e,this._formatReturnValue("elementStart",i,t,e,1);if(i instanceof gt){if(this.singleCharacters)return e=new ke(i,0),this.position=e,this._next();{let s,a=i.data.length;return i==this._boundaryEndParent?(a=this.boundaries.end.offset,s=new Bo(i,0,a),e=ke._createAfter(s)):(s=new Bo(i,0,i.data.length),e.offset++),this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof i=="string"){let s;this.singleCharacters?s=1:s=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const a=new Bo(n,e.offset,s);return e.offset+=s,this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=ke._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let i;if(n instanceof gt){if(e.isAtStart)return this.position=ke._createBefore(n),this._previous();i=n.data[e.offset-1]}else i=n.getChild(e.offset-1);if(i instanceof Wn)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",i,t,e,1)):(e=new ke(i,i.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,t,e));if(i instanceof gt){if(this.singleCharacters)return e=new ke(i,i.data.length),this.position=e,this._previous();{let s,a=i.data.length;if(i==this._boundaryStartParent){const c=this.boundaries.start.offset;s=new Bo(i,c,i.data.length-c),a=s.data.length,e=ke._createBefore(s)}else s=new Bo(i,0,i.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",s,t,e,a)}}if(typeof i=="string"){let s;if(this.singleCharacters)s=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;s=e.offset-c}e.offset-=s;const a=new Bo(n,e.offset,s);return this.position=e,this._formatReturnValue("text",a,t,e,s)}return e=ke._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,i,s){return t instanceof Bo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ke._createAfter(t.textNode):(i=ke._createAfter(t.textNode),this.position=i)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ke._createBefore(t.textNode):(i=ke._createBefore(t.textNode),this.position=i))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:i,length:s}}}}class ke{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Ya);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ke._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Oi(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}is(e){return e==="position"||e==="view:position"}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const i=en(t,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return t[i]<n[i]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Oi(e)}clone(){return new ke(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ke)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new v("view-createpositionat-offset-required",n)}return new ke(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ke(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new v("view-position-after-root",e,{root:e});return new ke(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ke(e.textNode,e.offsetInText);if(!e.parent)throw new v("view-position-before-root",e,{root:e});return new ke(e.parent,e.index)}}class Be{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Oi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Qa,{direction:"backward"}),t=this.end.getLastMatchingPosition(Qa);return e.parent.is("$text")&&e.isAtStart&&(e=ke._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ke._createAfter(t.parent)),new Be(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Qa);if(e.isAfter(this.end)||e.isEqual(this.end))return new Be(e,e);let t=this.end.getLastMatchingPosition(Qa,{direction:"backward"});const n=e.nodeAfter,i=t.nodeBefore;return n&&n.is("$text")&&(e=new ke(n,0)),i&&i.is("$text")&&(t=new ke(i,i.data.length)),new Be(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Be(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Be(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Be(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Oi(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Be(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Oi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Oi(e);yield t.position;for(const n of t)yield n.nextPosition}is(e){return e==="range"||e==="view:range"}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,i){return new this(new ke(e,t),new ke(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ke._createBefore(e),t)}}function Qa(r){return!(!r.item.is("attributeElement")&&!r.item.is("uiElement"))}function md(r){let e=0;for(const t of r)e++;return e}class eo{constructor(e=null,t,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=md(this.getRanges());if(t!=md(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let s of e.getRanges())if(s=s.getTrimmed(),n.start.isEqual(s.start)&&n.end.isEqual(s.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(e,t,n){if(e===null)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof eo||e instanceof pd)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Be)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof ke)this._setRanges([new Be(e)]),this._setFakeOptions(t);else if(e instanceof zi){const i=!!n&&!!n.backward;let s;if(t===void 0)throw new v("view-selection-setto-required-second-parameter",this);s=t=="in"?Be._createIn(e):t=="on"?Be._createOn(e):new Be(ke._createAt(e,t)),this._setRanges([s],i),this._setFakeOptions(n)}else{if(!$n(e))throw new v("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new v("view-selection-setfocus-no-ranges",this);const n=ke._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Be(n,i),!0):this._addRange(new Be(i,n)),this.fire("change")}is(e){return e==="selection"||e==="view:selection"}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Be))throw new v("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new v("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Be(e.start,e.end))}}ie(eo,R);class pd{constructor(e=null,t,n){this._selection=new eo,this._selection.delegate("change").to(this),this._selection.setTo(e,t,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return e==="selection"||e=="documentSelection"||e=="view:selection"||e=="view:documentSelection"}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setFocus(e,t){this._selection.setFocus(e,t)}}ie(pd,R);class Is extends _{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const bd=Symbol("bubbling contexts"),T2={fire(r,...e){try{const t=r instanceof _?r:new _(this,r),n=kd(this);if(!n.size)return;if(Ts(t,"capturing",this),wr(n,"$capture",t,...e))return t.return;const i=t.startRange||this.selection.getFirstRange(),s=i?i.getContainedElement():null,a=!!s&&Boolean(sm(n,s));let c=s||function(u){if(!u)return null;const f=u.start.parent,p=u.end.parent,w=f.getPath(),C=p.getPath();return w.length>C.length?f:p}(i);if(Ts(t,"atTarget",c),!a){if(wr(n,"$text",t,...e))return t.return;Ts(t,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(wr(n,"$root",t,...e))return t.return}else if(c.is("element")&&wr(n,c.name,t,...e))return t.return;if(wr(n,c,t,...e))return t.return;c=c.parent,Ts(t,"bubbling",c)}return Ts(t,"bubbling",this),wr(n,"$document",t,...e),t.return}catch(t){v.rethrowUnexpectedError(t,this)}},_addEventListener(r,e,t){const n=Ut(t.context||"$document"),i=kd(this);for(const s of n){let a=i.get(s);a||(a=Object.create(R),i.set(s,a)),this.listenTo(a,r,e,t)}},_removeEventListener(r,e){const t=kd(this);for(const n of t.values())this.stopListening(n,r,e)}},M2=T2;function Ts(r,e,t){r instanceof Is&&(r._eventPhase=e,r._currentTarget=t)}function wr(r,e,t,...n){const i=typeof e=="string"?r.get(e):sm(r,e);return!!i&&(i.fire(t,...n),t.stop.called)}function sm(r,e){for(const[t,n]of r)if(typeof t=="function"&&t(e))return n;return null}function kd(r){return r[bd]||(r[bd]=new Map),r[bd]}class Ms{constructor(e){this.selection=new pd,this.roots=new dn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}ie(Ms,M2),ie(Ms,Ne);class vr extends Wn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=B2,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new v("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&(e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"):e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function B2(){if(wd(this))return null;let r=this.parent;for(;r&&r.is("attributeElement");){if(wd(r)>1)return null;r=r.parent}return!r||wd(r)>1?null:this.childCount}function wd(r){return Array.from(r.getChildren()).filter(e=>!e.is("uiElement")).length}vr.DEFAULT_PRIORITY=10;class am extends Wn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=N2}is(e,t=null){return t?t===this.name&&(e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"):e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof zi||Array.from(t).length>0))throw new v("view-emptyelement-cannot-add",[this,t])}}function N2(){return null}const Ri=navigator.userAgent.toLowerCase(),P2={isMac:lm(Ri),isWindows:function(r){return r.indexOf("windows")>-1}(Ri),isGecko:function(r){return!!r.match(/gecko\/\d+/)}(Ri),isSafari:function(r){return r.indexOf(" applewebkit/")>-1&&r.indexOf("chrome")===-1}(Ri),isiOS:function(r){return!!r.match(/iphone|ipad/i)||lm(r)&&navigator.maxTouchPoints>0}(Ri),isAndroid:function(r){return r.indexOf("android")>-1}(Ri),isBlink:function(r){return r.indexOf("chrome/")>-1&&r.indexOf("edge/")<0}(Ri),features:{isRegExpUnicodePropertySupported:function(){let r=!1;try{r="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return r}()}},at=P2;function lm(r){return r.indexOf("macintosh")>-1}const z2={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},L2={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},je=function(){const r={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);r[t.toLowerCase()]=e}for(let e=48;e<=57;e++)r[e-48]=e;for(let e=112;e<=123;e++)r["f"+(e-111)]=e;for(const e of"`-=[];',./\\")r[e]=e.charCodeAt(0);return r}(),O2=Object.fromEntries(Object.entries(je).map(([r,e])=>[e,r.charAt(0).toUpperCase()+r.slice(1)]));function po(r){let e;if(typeof r=="string"){if(e=je[r.toLowerCase()],!e)throw new v("keyboard-unknown-key",null,{key:r})}else e=r.keyCode+(r.altKey?je.alt:0)+(r.ctrlKey?je.ctrl:0)+(r.shiftKey?je.shift:0)+(r.metaKey?je.cmd:0);return e}function vd(r){return typeof r=="string"&&(r=function(e){return e.split("+").map(t=>t.trim())}(r)),r.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return po(t.slice(0,-1));const n=po(t);return at.isMac&&n==je.ctrl?je.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function cm(r){let e=vd(r);return Object.entries(at.isMac?z2:L2).reduce((t,[n,i])=>((e&je[n])!=0&&(e&=~je[n],t+=i),t),"")+(e?O2[e]:"")}function _d(r,e){const t=e==="ltr";switch(r){case je.arrowleft:return t?"left":"right";case je.arrowright:return t?"right":"left";case je.arrowup:return"up";case je.arrowdown:return"down"}}class Cd extends Wn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=F2}is(e,t=null){return t?t===this.name&&(e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"):e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof zi||Array.from(t).length>0))throw new v("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function R2(r){r.document.on("arrowKey",(e,t)=>function(n,i,s){if(i.keyCode==je.arrowright){const a=i.domTarget.ownerDocument.defaultView.getSelection(),c=a.rangeCount==1&&a.getRangeAt(0).collapsed;if(c||i.shiftKey){const u=a.focusNode,f=a.focusOffset,p=s.domPositionToView(u,f);if(p===null)return;let w=!1;const C=p.getLastMatchingPosition(S=>(S.item.is("uiElement")&&(w=!0),!(!S.item.is("uiElement")&&!S.item.is("attributeElement"))));if(w){const S=s.viewPositionToDom(C);c?a.collapse(S.parent,S.offset):a.extend(S.parent,S.offset)}}}}(0,t,r.domConverter),{priority:"low"})}function F2(){return null}class dm extends Wn{constructor(e,t,n,i){super(e,t,n,i),this.getFillerOffset=j2}is(e,t=null){return t?t===this.name&&(e==="rawElement"||e==="view:rawElement"||e==="element"||e==="view:element"):e==="rawElement"||e==="view:rawElement"||e===this.name||e==="view:"+this.name||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof zi||Array.from(t).length>0))throw new v("view-rawelement-cannot-add",[this,t])}}function j2(){return null}class Fi{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="view:documentFragment"}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const i=function(s,a){return typeof a=="string"?[new gt(s,a)]:($n(a)||(a=[a]),Array.from(a).map(c=>typeof c=="string"?new gt(s,c):c instanceof Bo?new gt(s,c.data):c))}(this.document,t);for(const s of i)s.parent!==null&&s._remove(),s.parent=this,this._children.splice(e,0,s),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}ie(Fi,R);class um{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(e,t,n){this.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Fi(this.document,e)}createText(e){return new gt(this.document,e)}createAttributeElement(e,t,n={}){const i=new vr(this.document,e,t);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(e,t,n={},i={}){let s=null;Jt(n)?i=n:s=n;const a=new Ka(this.document,e,t,s);return i.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),a}createEditableElement(e,t,n={}){const i=new Ya(this.document,e,t);return i._document=this.document,n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(e,t,n={}){const i=new am(this.document,e,t);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(e,t,n){const i=new Cd(this.document,e,t);return n&&(i.render=n),i}createRawElement(e,t,n,i={}){const s=new dm(this.document,e,t);return s.render=n||(()=>{}),i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Jt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ke?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new v("view-writer-break-non-container-element",this.document);if(!t.parent)throw new v("view-writer-break-root",this.document);if(e.isAtStart)return ke._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ke._createAfter(t),n);const i=new Be(e,ke._createAt(t,"end")),s=new ke(n,0);this.move(i,s)}return ke._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const a=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ke(a,c))}const i=n.getChild(t-1),s=n.getChild(t);if(!i||!s)return e;if(i.is("$text")&&s.is("$text"))return gm(i,s);if(i.is("attributeElement")&&s.is("attributeElement")&&i.isSimilar(s)){const a=i.childCount;return i._appendChild(s.getChildren()),s._remove(),this._removeFromClonedElementsGroup(s),this.mergeAttributes(new ke(i,a))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new v("view-writer-merge-containers-invalid-position",this.document);const i=t.getChild(t.childCount-1),s=i instanceof gt?ke._createAt(i,"end"):ke._createAt(t,"end");return this.move(Be._createIn(n),ke._createAt(t,"end")),this.remove(Be._createOn(n)),s}insert(e,t){fm(t=$n(t)?[...t]:[t],this.document);const n=t.reduce((a,c)=>{const u=a[a.length-1],f=!c.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(c):a.push({breakAttributes:f,nodes:[c]}),a},[]);let i=null,s=e;for(const{nodes:a,breakAttributes:c}of n){const u=this._insertNodes(s,a,c);i||(i=u.start),s=u.end}return i?new Be(i,s):new Be(e)}remove(e){const t=e instanceof Be?e:Be._createOn(e);if(Bs(t,this.document),t.isCollapsed)return new Fi(this.document);const{start:n,end:i}=this._breakAttributesRange(t,!0),s=n.parent,a=i.offset-n.offset,c=s._removeChildren(n.offset,a);for(const f of c)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Fi(this.document,c)}clear(e,t){Bs(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const s=i.item;let a;if(s.is("element")&&t.isSimilar(s))a=Be._createOn(s);else if(!i.nextPosition.isAfter(e.start)&&s.is("$textProxy")){const c=s.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(a=Be._createIn(c))}a&&(a.end.isAfter(e.end)&&(a.end=e.end),a.start.isBefore(e.start)&&(a.start=e.start),this.remove(a))}}move(e,t){let n;if(t.isAfter(e.end)){const i=(t=this._breakAttributes(t,!0)).parent,s=i.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=i.childCount-s}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof vr))throw new v("view-writer-wrap-invalid-attribute",this.document);if(Bs(e,this.document),e.isCollapsed){let i=e.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(a=>!a.is("uiElement")))&&(i=i.getLastMatchingPosition(a=>a.item.is("uiElement"))),i=this._wrapPosition(i,t);const s=this.document.selection;return s.isCollapsed&&s.getFirstPosition().isEqual(e.start)&&this.setSelection(i),new Be(i)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof vr))throw new v("view-writer-unwrap-invalid-attribute",this.document);if(Bs(e,this.document),e.isCollapsed)return e;const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,a=this._unwrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(c,u)}rename(e,t){const n=new Ka(this.document,e,t.getAttributes());return this.insert(ke._createAfter(t),n),this.move(Be._createIn(t),ke._createAt(n,0)),this.remove(Be._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ke._createAt(e,t)}createPositionAfter(e){return ke._createAfter(e)}createPositionBefore(e){return ke._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new eo(e,t,n)}createSlot(e){if(!this._slotFactory)throw new v("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let i,s;if(i=n?Ad(e):e.parent.is("$text")?e.parent.parent:e.parent,!i)throw new v("view-writer-invalid-position-container",this.document);s=n?this._breakAttributes(e,!0):e.parent.is("$text")?yd(e):e;const a=i._insertChild(s.offset,t);for(const p of t)this._addToClonedElementsGroup(p);const c=s.getShiftedBy(a),u=this.mergeAttributes(s);u.isEqual(s)||c.offset--;const f=this.mergeAttributes(c);return new Be(u,f)}_wrapChildren(e,t,n,i){let s=t;const a=[];for(;s<n;){const u=e.getChild(s),f=u.is("$text"),p=u.is("attributeElement");if(p&&this._wrapAttributeElement(i,u))a.push(new ke(e,s));else if(f||!p||V2(i,u)){const w=i._clone();u._remove(),w._appendChild(u),e._insertChild(s,w),this._addToClonedElementsGroup(w),a.push(new ke(e,s))}else this._wrapChildren(u,0,u.childCount,i);s++}let c=0;for(const u of a)u.offset-=c,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,i){let s=t;const a=[];for(;s<n;){const u=e.getChild(s);if(u.is("attributeElement"))if(u.isSimilar(i)){const f=u.getChildren(),p=u.childCount;u._remove(),e._insertChild(s,f),this._removeFromClonedElementsGroup(u),a.push(new ke(e,s),new ke(e,s+p)),s+=p,n+=p-1}else this._unwrapAttributeElement(i,u)?(a.push(new ke(e,s),new ke(e,s+1)),s++):(this._unwrapChildren(u,0,u.childCount,i),s++);else s++}let c=0;for(const u of a)u.offset-=c,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Be._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:i}=this._breakAttributesRange(e,!0),s=n.parent,a=this._wrapChildren(s,n.offset,i.offset,t),c=this.mergeAttributes(a.start);c.isEqual(a.start)||a.end.offset--;const u=this.mergeAttributes(a.end);return new Be(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return hm(e.clone());e.parent.is("$text")&&(e=yd(e));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const i=new Be(e,e.getShiftedBy(1));this.wrap(i,t);const s=new ke(n.parent,n.index);n._remove();const a=s.nodeBefore,c=s.nodeAfter;return a instanceof gt&&c instanceof gt?gm(a,c):hm(s)}_wrapAttributeElement(e,t){if(!mm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!mm(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,i=e.end;if(Bs(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new Be(u,u)}const s=this._breakAttributes(i,t),a=s.parent.childCount,c=this._breakAttributes(n,t);return s.offset+=s.parent.childCount-a,new Be(c,s)}_breakAttributes(e,t=!1){const n=e.offset,i=e.parent;if(e.parent.is("emptyElement"))throw new v("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new v("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new v("view-writer-cannot-break-raw-element",this.document);if(!t&&i.is("$text")&&xd(i.parent)||xd(i))return e.clone();if(i.is("$text"))return this._breakAttributes(yd(e),t);if(n==i.childCount){const s=new ke(i.parent,i.index+1);return this._breakAttributes(s,t)}if(n===0){const s=new ke(i.parent,i.index);return this._breakAttributes(s,t)}{const s=i.index+1,a=i._clone();i.parent._insertChild(s,a),this._addToClonedElementsGroup(a);const c=i.childCount-n,u=i._removeChildren(n,c);a._appendChild(u);const f=new ke(i.parent,s);return this._breakAttributes(f,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const i of e.getChildren())this._addToClonedElementsGroup(i);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const i of e.getChildren())this._removeFromClonedElementsGroup(i);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Ad(r){let e=r.parent;for(;!xd(e);){if(!e)return;e=e.parent}return e}function V2(r,e){return r.priority<e.priority||!(r.priority>e.priority)&&r.getIdentity()<e.getIdentity()}function hm(r){const e=r.nodeBefore;if(e&&e.is("$text"))return new ke(e,e.data.length);const t=r.nodeAfter;return t&&t.is("$text")?new ke(t,0):r}function yd(r){if(r.offset==r.parent.data.length)return new ke(r.parent.parent,r.parent.index+1);if(r.offset===0)return new ke(r.parent.parent,r.parent.index);const e=r.parent.data.slice(r.offset);return r.parent._data=r.parent.data.slice(0,r.offset),r.parent.parent._insertChild(r.parent.index+1,new gt(r.root.document,e)),new ke(r.parent.parent,r.parent.index+1)}function gm(r,e){const t=r.data.length;return r._data+=e.data,e._remove(),new ke(r,t)}function fm(r,e){for(const t of r){if(!H2.some(n=>t instanceof n))throw new v("view-writer-insert-invalid-node-type",e);t.is("$text")||fm(t.getChildren(),e)}}const H2=[gt,vr,Ka,am,dm,Cd];function xd(r){return r&&(r.is("containerElement")||r.is("documentFragment"))}function Bs(r,e){const t=Ad(r.start),n=Ad(r.end);if(!t||!n||t!==n)throw new v("view-writer-invalid-range-container",e)}function mm(r,e){return r.id===null&&e.id===null}function qt(r){return Object.prototype.toString.call(r)=="[object Text]"}const pm=r=>r.createTextNode("\xA0"),bm=r=>{const e=r.createElement("span");return e.dataset.ckeFiller=!0,e.innerText="\xA0",e},km=r=>{const e=r.createElement("br");return e.dataset.ckeFiller=!0,e},Za="\u2060".repeat(7);function Dn(r){return qt(r)&&r.data.substr(0,7)===Za}function Ja(r){return r.data.length==7&&Dn(r)}function Ed(r){return Dn(r)?r.data.slice(7):r.data}function U2(r,e){if(e.keyCode==je.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,i=t.getRangeAt(0).startOffset;Dn(n)&&i<=7&&t.collapse(n,0)}}}function wm(r,e,t,n=!1){t=t||function(c,u){return c===u};const i=Array.isArray(r)?r:Array.prototype.slice.call(r),s=Array.isArray(e)?e:Array.prototype.slice.call(e),a=function(c,u,f){const p=vm(c,u,f);if(p===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const w=_m(c,p),C=_m(u,p),S=vm(w,C,f),D=c.length-S,I=u.length-S;return{firstIndex:p,lastIndexOld:D,lastIndexNew:I}}(i,s,t);return n?function(c,u){const{firstIndex:f,lastIndexOld:p,lastIndexNew:w}=c;if(f===-1)return Array(u).fill("equal");let C=[];return f>0&&(C=C.concat(Array(f).fill("equal"))),w-f>0&&(C=C.concat(Array(w-f).fill("insert"))),p-f>0&&(C=C.concat(Array(p-f).fill("delete"))),w<u&&(C=C.concat(Array(u-w).fill("equal"))),C}(a,s.length):function(c,u){const f=[],{firstIndex:p,lastIndexOld:w,lastIndexNew:C}=u;return C-p>0&&f.push({index:p,type:"insert",values:c.slice(p,C)}),w-p>0&&f.push({index:p+(C-p),type:"delete",howMany:w-p}),f}(s,a)}function vm(r,e,t){for(let n=0;n<Math.max(r.length,e.length);n++)if(r[n]===void 0||e[n]===void 0||!t(r[n],e[n]))return n;return-1}function _m(r,e){return r.slice(e).reverse()}function Qo(r,e,t){t=t||function(I,B){return I===B};const n=r.length,i=e.length;if(n>200||i>200||n+i>300)return Qo.fastDiff(r,e,t,!0);let s,a;if(i<n){const I=r;r=e,e=I,s="delete",a="insert"}else s="insert",a="delete";const c=r.length,u=e.length,f=u-c,p={},w={};function C(I){const B=(w[I-1]!==void 0?w[I-1]:-1)+1,F=w[I+1]!==void 0?w[I+1]:-1,Y=B>F?-1:1;p[I+Y]&&(p[I]=p[I+Y].slice(0)),p[I]||(p[I]=[]),p[I].push(B>F?s:a);let oe=Math.max(B,F),ve=oe-I;for(;ve<c&&oe<u&&t(r[ve],e[oe]);)ve++,oe++,p[I].push("equal");return oe}let S,D=0;do{for(S=-D;S<f;S++)w[S]=C(S);for(S=f+D;S>f;S--)w[S]=C(S);w[f]=C(f),D++}while(w[f]!==u);return p[f].slice(1)}function Cm(r,e,t){r.insertBefore(t,r.childNodes[e]||null)}function Am(r){const e=r.parentNode;e&&e.removeChild(r)}function _r(r){return r&&r.nodeType===Node.COMMENT_NODE}function Cr(r){if(r){if(r.defaultView)return r instanceof r.defaultView.Document;if(r.ownerDocument&&r.ownerDocument.defaultView)return r instanceof r.ownerDocument.defaultView.Node}return!1}Qo.fastDiff=wm;var $2=g(6062),Me=g.n($2),ym=g(9315),W2={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(ym.Z,W2),ym.Z.locals;class xm{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),at.isBlink&&!at.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new v("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(at.isBlink&&!at.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ke._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),i=n.parent.ownerDocument;Dn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Em(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),i=this._diffNodeLists(t,n),s=this._findReplaceActions(i,t,n);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="replace"){const u=a.equal+a.insert,f=a.equal+a.delete,p=e.getChild(u);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,t[f]),Am(n[u]),a.equal++}else a[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ke._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&qt(t.parent)&&Dn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Dn(e))throw new v("view-renderer-filler-was-lost",this);Ja(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(a){if(a.getAttribute("contenteditable")=="false")return!1;const c=a.findAncestor(u=>u.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const i=e.nodeBefore,s=e.nodeAfter;return!(i instanceof gt||s instanceof gt)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),i=this.domConverter.viewToDom(e),s=n.data;let a=i.data;const c=t.inlineFillerPosition;if(c&&c.parent==e.parent&&c.offset==e.index&&(a=Za+a),s!=a){const u=wm(s,a);for(const f of u)f.type==="insert"?n.insertData(f.index,f.values.join("")):n.deleteData(f.index,f.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(s=>s.name),i=e.getAttributeKeys();for(const s of i)this.domConverter.setDomElementAttribute(t,s,e.getAttribute(s),e);for(const s of n)e.hasAttribute(s)||this.domConverter.removeDomElementAttribute(t,s)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const i=t.inlineFillerPosition,s=this.domConverter.mapViewToDom(e).childNodes,a=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));i&&i.parent===e&&Em(n.ownerDocument,a,i.offset);const c=this._diffNodeLists(s,a);let u=0;const f=new Set;for(const p of c)p==="delete"?(f.add(s[u]),Am(s[u])):p==="equal"&&u++;u=0;for(const p of c)p==="insert"?(Cm(n,u,a[u]),u++):p==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(a[u])),u++);for(const p of f)p.parentNode||this.domConverter.unbindDomElement(p)}_diffNodeLists(e,t){return Qo(e=function(n,i){const s=Array.from(n);return s.length==0||!i||s[s.length-1]==i&&s.pop(),s}(e,this._fakeSelectionContainer),t,q2.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let i=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const u of e)u==="insert"?a.push(n[c.equal+c.insert]):u==="delete"?s.push(t[c.equal+c.delete]):(i=i.concat(Qo(s,a,Sm).map(f=>f==="equal"?"replace":f)),i.push("equal"),s=[],a=[]),c[u]++;return i.concat(Qo(s,a,Sm).map(u=>u==="equal"?"replace":u))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(at.isBlink&&!at.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(a){const c=a.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent="\xA0",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const i=t.getSelection(),s=t.createRange();i.removeAllRanges(),s.selectNodeContents(n),i.addRange(s)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(i.parent,i.offset),at.isGecko&&function(s,a){const c=s.parent;if(c.nodeType!=Node.ELEMENT_NODE||s.offset!=c.childNodes.length-1)return;const u=c.childNodes[s.offset];u&&u.tagName=="BR"&&a.addRange(a.getRangeAt(0))}(i,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments)if(e.getSelection().rangeCount){const t=e.activeElement,n=this.domConverter.mapDomToView(t);t&&n&&e.getSelection().removeAllRanges()}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Em(r,e,t){const n=e instanceof Array?e:e.childNodes,i=n[t];if(qt(i))return i.data=Za+i.data,i;{const s=r.createTextNode(Za);return Array.isArray(e)?n.splice(t,0,s):Cm(e,t,s),s}}function Sm(r,e){return Cr(r)&&Cr(e)&&!qt(r)&&!qt(e)&&!_r(r)&&!_r(e)&&r.tagName.toLowerCase()===e.tagName.toLowerCase()}function q2(r,e,t){return e===t||(qt(e)&&qt(t)?e.data===t.data:!(!r.isBlockFiller(e)||!r.isBlockFiller(t)))}ie(xm,Ne);const Ct={window,document};function Sd(r){let e=0;for(;r.previousSibling;)r=r.previousSibling,e++;return e}function Dm(r){const e=[];let t=r;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}const G2=km(Ct.document),K2=pm(Ct.document),Y2=bm(Ct.document),Xa="data-ck-unsafe-attribute-",Im="data-ck-unsafe-element";class el{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ct.document:Ct.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new mo,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new eo(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),i=n.createDocumentFragment(),s=n.body.childNodes;for(;s.length>0;)i.appendChild(s[0]);const a=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=a.nextNode();)c.push(u);for(const f of c){for(const w of f.getAttributeNames())this.setDomElementAttribute(f,w,f.getAttribute(w));const p=f.tagName.toLowerCase();this._shouldRenameElement(p)&&(Bm(p),f.replaceWith(this._createReplacementDomElement(p,f)))}for(;e.firstChild;)e.firstChild.remove();e.append(i)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Bm(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const i of e.getAttributeKeys())this.setDomElementAttribute(n,i,e.getAttribute(i),e)}if(t.withChildren!==!1)for(const i of this.viewChildrenToDom(e,t))n.appendChild(i);return n}}setDomElementAttribute(e,t,n,i=null){const s=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(t);s||E("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!s?e.removeAttribute(t):e.hasAttribute(Xa+t)&&s&&e.removeAttribute(Xa+t),e.setAttribute(s?t:Xa+t,n)}removeDomElementAttribute(e,t){t!=Im&&(e.removeAttribute(t),e.removeAttribute(Xa+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let i=0;for(const s of e.getChildren()){n===i&&(yield this._getBlockFiller());const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t):(a&&E("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),i=this._domDocument.createRange();return i.setStart(t.parent,t.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let i=e.offset;return Dn(n)&&(i+=7),{parent:n,offset:i}}{let n,i,s;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;s=n.childNodes[0]}else{const a=e.nodeBefore;if(i=a.is("$text")?this.findCorrespondingDomText(a):this.mapViewToDom(e.nodeBefore),!i)return null;n=i.parentNode,s=i.nextSibling}return qt(s)&&Dn(s)?{parent:s,offset:7}:{parent:n,offset:i?Sd(i)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(_r(e)&&t.skipComments)return null;if(qt(e)){if(Ja(e))return null;{const i=this._processDataFromDomText(e);return i===""?null:new gt(this.document,i)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let i;if(this.isDocumentFragment(e))i=new Fi(this.document),t.bind&&this.bindDocumentFragments(e,i);else{i=this._createViewElement(e,t),t.bind&&this.bindElements(e,i);const s=e.attributes;if(s)for(let a=s.length,c=0;c<a;c++)i._setAttribute(s[c].name,s[c].value);if(this._isViewElementWithRawContent(i,t)||_r(e)){const a=_r(e)?e.data:e.innerHTML;return i._setCustomProperty("$rawContent",a),this._encounteredRawContentDomNodes.add(e),i}}if(t.withChildren!==!1)for(const s of this.domChildrenToView(e,t))i._appendChild(s);return i}}*domChildrenToView(e,t={}){for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n],s=this.domToView(i,t);s!==null&&(yield s)}}domSelectionToView(e){if(e.rangeCount===1){let i=e.getRangeAt(0).startContainer;qt(i)&&(i=i.parentNode);const s=this.fakeSelectionToView(i);if(s)return s}const t=this.isDomSelectionBackward(e),n=[];for(let i=0;i<e.rangeCount;i++){const s=e.getRangeAt(i),a=this.domRangeToView(s);a&&n.push(a)}return new eo(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Be(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Sd(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ke._createBefore(n);if(qt(e)){if(Ja(e))return this.domPositionToView(e.parentNode,Sd(e));const i=this.findCorrespondingViewText(e);let s=t;return i?(Dn(e)&&(s-=7,s=s<0?0:s),new ke(i,s)):null}if(t===0){const i=this.mapDomToView(e);if(i)return new ke(i,0)}else{const i=e.childNodes[t-1],s=qt(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(s&&s.parent)return new ke(s.parent,s.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(Ja(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i)return i.nextSibling instanceof gt?i.nextSibling:null}else{const i=this.mapDomToView(e.parentNode);if(i){const s=i.getChild(0);return s instanceof gt?s:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:i}=Ct.window,s=[];Tm(t,a=>{const{scrollLeft:c,scrollTop:u}=a;s.push([c,u])}),t.focus(),Tm(t,a=>{const[c,u]=s.shift();a.scrollLeft=c,a.scrollTop=u}),Ct.window.scrollTo(n,i)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(G2):!(e.tagName!=="BR"||!Mm(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(Y2)||function(t,n){return t.isEqualNode(K2)&&Mm(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Dm(e);for(t.pop();t.length;){const n=t.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return pm(this._domDocument);case"markedNbsp":return bm(this._domDocument);case"br":return km(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(qt(e)&&Dn(e)&&t<7||this.isElement(e)&&Dn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!i||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(f,p){return Dm(f).some(w=>w.tagName&&p.includes(w.tagName.toLowerCase()))}(e,this.preElements))return Ed(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),i=this._getTouchingInlineDomNode(e,!0),s=this._checkShouldLeftTrimDomText(e,n),a=this._checkShouldRightTrimDomText(e,i);s&&(t=t.replace(/^ /,"")),a&&(t=t.replace(/ $/,"")),t=Ed(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const c=i&&this.isElement(i)&&i.tagName!="BR",u=i&&qt(i)&&i.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!i||c||u)&&(t=t.replace(/\u00A0$/," ")),(s||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Dn(e)}_getTouchingInlineViewNode(e,t){const n=new Oi({startPosition:t?ke._createAfter(e):ke._createBefore(e),direction:t?"forward":"backward"});for(const i of n){if(i.item.is("element")&&this.inlineObjectElements.includes(i.item.name))return i.item;if(i.item.is("containerElement")||i.item.is("element","br"))return null;if(i.item.is("$textProxy"))return i.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",i=t?"nextSibling":"previousSibling";let s=!0;do if(!s&&e[n]?e=e[n]:e[i]?(e=e[i],s=!1):(e=e.parentNode,s=!0),!e||this._isBlockElement(e))return null;while(!qt(e)&&e.tagName!="BR"&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(_r(e))return new Cd(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Wn(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t=null){const n=this._domDocument.createElement("span");if(n.setAttribute(Im,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const i of t.getAttributeNames())n.setAttribute(i,t.getAttribute(i))}return n}}function Tm(r,e){for(;r&&r!=Ct.document;)e(r),r=r.parentNode}function Mm(r,e){const t=r.parentNode;return t&&t.tagName&&e.includes(t.tagName.toLowerCase())}function Bm(r){r==="script"&&E("domconverter-unsafe-script-element-detected"),r==="style"&&E("domconverter-unsafe-style-element-detected")}function tl(r){const e=Object.prototype.toString.apply(r);return e=="[object Window]"||e=="[object global]"}const Dd=tm(function(r,e){pr(e,kr(e),r)}),Q2=Dd({},R,{listenTo(r,e,t,n={}){if(Cr(r)||tl(r)){const i={capture:!!n.useCapture,passive:!!n.usePassive},s=this._getProxyEmitter(r,i)||new Nm(r,i);this.listenTo(s,e,t,n)}else R.listenTo.call(this,r,e,t,n)},stopListening(r,e,t){if(Cr(r)||tl(r)){const n=this._getAllProxyEmitters(r);for(const i of n)this.stopListening(i,e,t)}else R.stopListening.call(this,r,e,t)},_getProxyEmitter(r,e){return function(t,n){const i=t[O];return i&&i[n]?i[n].emitter:null}(this,Pm(r,e))},_getAllProxyEmitters(r){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(r,e)).filter(e=>!!e)}}),Ns=Q2;class Nm{constructor(e,t){V(this,Pm(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),R._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){R._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function Pm(r,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=A())}(r);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}ie(Nm,R);class bo{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}ie(bo,Ns);const Z2=function(r){return this.__data__.set(r,"__lodash_hash_undefined__"),this},J2=function(r){return this.__data__.has(r)};function nl(r){var e=-1,t=r==null?0:r.length;for(this.__data__=new Ha;++e<t;)this.add(r[e])}nl.prototype.add=nl.prototype.push=Z2,nl.prototype.has=J2;const X2=nl,eE=function(r,e){for(var t=-1,n=r==null?0:r.length;++t<n;)if(e(r[t],t,r))return!0;return!1},tE=function(r,e){return r.has(e)},zm=function(r,e,t,n,i,s){var a=1&t,c=r.length,u=e.length;if(c!=u&&!(a&&u>c))return!1;var f=s.get(r),p=s.get(e);if(f&&p)return f==e&&p==r;var w=-1,C=!0,S=2&t?new X2:void 0;for(s.set(r,e),s.set(e,r);++w<c;){var D=r[w],I=e[w];if(n)var B=a?n(I,D,w,e,r,s):n(D,I,w,r,e,s);if(B!==void 0){if(B)continue;C=!1;break}if(S){if(!eE(e,function(F,Y){if(!tE(S,Y)&&(D===F||i(D,F,t,n,s)))return S.push(Y)})){C=!1;break}}else if(D!==I&&!i(D,I,t,n,s)){C=!1;break}}return s.delete(r),s.delete(e),C},nE=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n,i){t[++e]=[i,n]}),t},oE=function(r){var e=-1,t=Array(r.size);return r.forEach(function(n){t[++e]=n}),t};var Lm=se?se.prototype:void 0,Id=Lm?Lm.valueOf:void 0;const iE=function(r,e,t,n,i,s,a){switch(t){case"[object DataView]":if(r.byteLength!=e.byteLength||r.byteOffset!=e.byteOffset)return!1;r=r.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(r.byteLength!=e.byteLength||!s(new Wa(r),new Wa(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Xt(+r,+e);case"[object Error]":return r.name==e.name&&r.message==e.message;case"[object RegExp]":case"[object String]":return r==e+"";case"[object Map]":var c=nE;case"[object Set]":var u=1&n;if(c||(c=oE),r.size!=e.size&&!u)return!1;var f=a.get(r);if(f)return f==e;n|=2,a.set(r,e);var p=zm(c(r),c(e),n,i,s,a);return a.delete(r),p;case"[object Symbol]":if(Id)return Id.call(r)==Id.call(e)}return!1};var rE=Object.prototype.hasOwnProperty;const sE=function(r,e,t,n,i,s){var a=1&t,c=Jc(r),u=c.length;if(u!=Jc(e).length&&!a)return!1;for(var f=u;f--;){var p=c[f];if(!(a?p in e:rE.call(e,p)))return!1}var w=s.get(r),C=s.get(e);if(w&&C)return w==e&&C==r;var S=!0;s.set(r,e),s.set(e,r);for(var D=a;++f<u;){var I=r[p=c[f]],B=e[p];if(n)var F=a?n(B,I,p,e,r,s):n(I,B,p,r,e,s);if(!(F===void 0?I===B||i(I,B,t,n,s):F)){S=!1;break}D||(D=p=="constructor")}if(S&&!D){var Y=r.constructor,oe=e.constructor;Y==oe||!("constructor"in r)||!("constructor"in e)||typeof Y=="function"&&Y instanceof Y&&typeof oe=="function"&&oe instanceof oe||(S=!1)}return s.delete(r),s.delete(e),S};var Om="[object Arguments]",Rm="[object Array]",ol="[object Object]",Fm=Object.prototype.hasOwnProperty;const aE=function(r,e,t,n,i,s){var a=cn(r),c=cn(e),u=a?Rm:Ss(r),f=c?Rm:Ss(e),p=(u=u==Om?ol:u)==ol,w=(f=f==Om?ol:f)==ol,C=u==f;if(C&&xs(r)){if(!xs(e))return!1;a=!0,p=!1}if(C&&!p)return s||(s=new ys),a||Kc(r)?zm(r,e,t,n,i,s):iE(r,e,u,t,n,i,s);if(!(1&t)){var S=p&&Fm.call(r,"__wrapped__"),D=w&&Fm.call(e,"__wrapped__");if(S||D){var I=S?r.value():r,B=D?e.value():e;return s||(s=new ys),i(I,B,t,n,s)}}return!!C&&(s||(s=new ys),sE(r,e,t,n,i,s))},jm=function r(e,t,n,i,s){return e===t||(e==null||t==null||!Fe(e)&&!Fe(t)?e!=e&&t!=t:aE(e,t,n,i,r,s))},lE=function(r,e,t){var n=(t=typeof t=="function"?t:void 0)?t(r,e):void 0;return n===void 0?jm(r,e,void 0,t):!!n};class Vm extends bo{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,i=new Set;for(const f of e)if(f.type==="childList"){const p=t.mapDomToView(f.target);if(p&&(p.is("uiElement")||p.is("rawElement")))continue;p&&!this._isBogusBrMutation(f)&&i.add(p)}for(const f of e){const p=t.mapDomToView(f.target);if((!p||!p.is("uiElement")&&!p.is("rawElement"))&&f.type==="characterData"){const w=t.findCorrespondingViewText(f.target);w&&!i.has(w.parent)?n.set(w,{type:"text",oldText:w.data,newText:Ed(f.target),node:w}):!w&&Dn(f.target)&&i.add(t.mapDomToView(f.target.parentNode))}}const s=[];for(const f of n.values())this.renderer.markToSync("text",f.node),s.push(f);for(const f of i){const p=t.mapViewToDom(f),w=Array.from(f.getChildren()),C=Array.from(t.domChildrenToView(p,{withChildren:!1}));lE(w,C,u)||(this.renderer.markToSync("children",f),s.push({type:"children",oldChildren:w,newChildren:C,node:f}))}const a=e[0].target.ownerDocument.getSelection();let c=null;if(a&&a.anchorNode){const f=t.domPositionToView(a.anchorNode,a.anchorOffset),p=t.domPositionToView(a.focusNode,a.focusOffset);f&&p&&(c=new eo(f),c.setFocus(p))}function u(f,p){if(!Array.isArray(f))return f===p||!(!f.is("$text")||!p.is("$text"))&&f.data===p.data}s.length&&(this.document.fire("mutations",s,c),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Td{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Dd(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Zo extends bo{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Td(this.view,t,n))}}class cE extends Zo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return po(this)}})}}const Md=function(){return re.Date.now()};var dE=/\s/;const uE=function(r){for(var e=r.length;e--&&dE.test(r.charAt(e)););return e};var hE=/^\s+/;const gE=function(r){return r&&r.slice(0,uE(r)+1).replace(hE,"")};var fE=/^[-+]0x[0-9a-f]+$/i,mE=/^0b[01]+$/i,pE=/^0o[0-7]+$/i,bE=parseInt;const Hm=function(r){if(typeof r=="number")return r;if(qa(r))return NaN;if(be(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=be(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=gE(r);var t=mE.test(r);return t||pE.test(r)?bE(r.slice(2),t?2:8):fE.test(r)?NaN:+r};var kE=Math.max,wE=Math.min;const il=function(r,e,t){var n,i,s,a,c,u,f=0,p=!1,w=!1,C=!0;if(typeof r!="function")throw new TypeError("Expected a function");function S(oe){var ve=n,Te=i;return n=i=void 0,f=oe,a=r.apply(Te,ve)}function D(oe){return f=oe,c=setTimeout(B,e),p?S(oe):a}function I(oe){var ve=oe-u;return u===void 0||ve>=e||ve<0||w&&oe-f>=s}function B(){var oe=Md();if(I(oe))return F(oe);c=setTimeout(B,function(ve){var Te=e-(ve-u);return w?wE(Te,s-(ve-f)):Te}(oe))}function F(oe){return c=void 0,C&&n?S(oe):(n=i=void 0,a)}function Y(){var oe=Md(),ve=I(oe);if(n=arguments,i=this,u=oe,ve){if(c===void 0)return D(u);if(w)return clearTimeout(c),c=setTimeout(B,e),S(u)}return c===void 0&&(c=setTimeout(B,e)),a}return e=Hm(e)||0,be(t)&&(p=!!t.leading,s=(w="maxWait"in t)?kE(Hm(t.maxWait)||0,e):s,C="trailing"in t?!!t.trailing:C),Y.cancel=function(){c!==void 0&&clearTimeout(c),f=0,n=u=i=c=void 0},Y.flush=function(){return c===void 0?a:F(Md())},Y};class vE extends bo{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=il(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new eo(t.getRanges(),{backward:t.isBackward,fake:!1});e!=je.arrowleft&&e!=je.arrowup||n.setTo(n.getFirstPosition()),e!=je.arrowright&&e!=je.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}class _E extends bo{constructor(e){super(e),this.mutationObserver=e.getObserver(Vm),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=il(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=il(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(i,s)=>{this._handleSelectionChange(s,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(i)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(i))this.view.forceRender();else{const s={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",s),this._fireSelectionChangeDoneDebounced(s)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class CE extends Zo{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,i)=>{const s=t.selection.editableElement;s!==null&&s!==i.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class AE extends Zo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class yE extends Zo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}const Um=function(r){return typeof r=="string"||!cn(r)&&Fe(r)&&Ie(r)=="[object String]"};function $m(r,e,t={},n=[]){const i=t&&t.xmlns,s=i?r.createElementNS(i,e):r.createElement(e);for(const a in t)s.setAttribute(a,t[a]);!Um(n)&&$n(n)||(n=[n]);for(let a of n)Um(a)&&(a=r.createTextNode(a)),s.appendChild(a);return s}class At{constructor(e,t){At._observerInstance||At._createObserver(),this._element=e,this._callback=t,At._addElementCallback(e,t),At._observerInstance.observe(e)}destroy(){At._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){At._elementCallbacks||(At._elementCallbacks=new Map);let n=At._elementCallbacks.get(e);n||(n=new Set,At._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=At._getElementCallbacks(e);n&&(n.delete(t),n.size||(At._elementCallbacks.delete(e),At._observerInstance.unobserve(e))),At._elementCallbacks&&!At._elementCallbacks.size&&(At._observerInstance=null,At._elementCallbacks=null)}static _getElementCallbacks(e){return At._elementCallbacks?At._elementCallbacks.get(e):null}static _createObserver(){At._observerInstance=new Ct.window.ResizeObserver(e=>{for(const t of e){const n=At._getElementCallbacks(t.target);if(n)for(const i of n)i(t)}})}}function Ft(r){const e=r.next();return e.done?null:e.value}At._observerInstance=null,At._elementCallbacks=null;class Bd{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new v("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}ie(Bd,Ns),ie(Bd,Ne);const In=Bd;class qn{constructor(){this._listener=Object.create(Ns)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+po(n),n)})}set(e,t,n={}){const i=vd(e),s=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(a,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),a.stop()}),a.return=!0},{priority:s})}press(e){return!!this._listener.fire("_keydown:"+po(e),e)}destroy(){this._listener.stopListening()}}class xE extends bo{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((i=n.keyCode)==je.arrowright||i==je.arrowleft||i==je.arrowup||i==je.arrowdown)){const s=new Is(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(s,n),s.stop.called&&t.stop()}var i})}observe(){}}class EE extends bo{constructor(e){super(e);const t=this.document;t.on("keydown",(n,i)=>{if(!this.isEnabled||i.keyCode!=je.tab||i.ctrlKey)return;const s=new Is(t,"tab",t.selection.getFirstRange());t.fire(s,i),s.stop.called&&n.stop()})}observe(){}}function rl(r){return Object.prototype.toString.apply(r)=="[object Range]"}function Wm(r){const e=r.ownerDocument.defaultView.getComputedStyle(r);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const qm=["top","right","bottom","left","width","height"];class ft{constructor(e){const t=rl(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),Km(e)||t)if(t){const n=ft.getDomRangeRects(e);sl(this,ft.getBoundingRect(n))}else sl(this,e.getBoundingClientRect());else if(tl(e)){const{innerWidth:n,innerHeight:i}=e;sl(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else sl(this,e)}clone(){return new ft(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new ft(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!Gm(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!Gm(n);){const i=new ft(n),s=t.getIntersection(i);if(!s)return null;s.getArea()<t.getArea()&&(t=s),n=n.parentNode}}return t}isEqual(e){for(const t of qm)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,i;if(tl(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,i=e.getComputedStyle(e.document.documentElement).direction;else{const s=Wm(e);t=e.offsetWidth-e.clientWidth-s.left-s.right,n=e.offsetHeight-e.clientHeight-s.top-s.bottom,i=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=s.left,this.top+=s.top,this.right-=s.right,this.bottom-=s.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,i==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const i of n)t.push(new ft(i));else{let i=e.startContainer;qt(i)&&(i=i.parentNode);const s=new ft(i.getBoundingClientRect());s.right=s.left,s.width=0,t.push(s)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of e)n++,t.left=Math.min(t.left,i.left),t.top=Math.min(t.top,i.top),t.right=Math.max(t.right,i.right),t.bottom=Math.max(t.bottom,i.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new ft(t))}}function sl(r,e){for(const t of qm)r[t]=e[t]}function Gm(r){return!!Km(r)&&r===r.ownerDocument.body}function Km(r){return Pi(r)}function SE(r,e,t){const n=e.clone().moveBy(0,t),i=e.clone().moveBy(0,-t),s=new ft(r).excludeScrollbarsAndBorders();if(![i,n].every(a=>s.contains(a))){let{scrollX:a,scrollY:c}=r;Qm(i,s)?c-=s.top-e.top+t:Ym(n,s)&&(c+=e.bottom-s.bottom+t),Zm(e,s)?a-=s.left-e.left+t:Jm(e,s)&&(a+=e.right-s.right+t),r.scrollTo(a,c)}}function DE(r,e){const t=Nd(r);let n,i;for(;r!=t.document.body;)i=e(),n=new ft(r).excludeScrollbarsAndBorders(),n.contains(i)||(Qm(i,n)?r.scrollTop-=n.top-i.top:Ym(i,n)&&(r.scrollTop+=i.bottom-n.bottom),Zm(i,n)?r.scrollLeft-=n.left-i.left:Jm(i,n)&&(r.scrollLeft+=i.right-n.right)),r=r.parentNode}function Ym(r,e){return r.bottom>e.bottom}function Qm(r,e){return r.top<e.top}function Zm(r,e){return r.left<e.left}function Jm(r,e){return r.right>e.right}function Nd(r){return rl(r)?r.startContainer.ownerDocument.defaultView:r.ownerDocument.defaultView}function IE(r){if(rl(r)){let e=r.commonAncestorContainer;return qt(e)&&(e=e.parentNode),e}return r.parentNode}function Xm(r,e){const t=Nd(r),n=new ft(r);if(t===e)return n;{let i=t;for(;i!=e;){const s=i.frameElement,a=new ft(s).excludeScrollbarsAndBorders();n.moveBy(a.left,a.top),i=i.parent}}return n}class ep{constructor(e){this.document=new Ms(e),this.domConverter=new el(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new xm(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new um(this.document),this.addObserver(Vm),this.addObserver(_E),this.addObserver(CE),this.addObserver(cE),this.addObserver(vE),this.addObserver(AE),this.addObserver(xE),this.addObserver(EE),at.isAndroid&&this.addObserver(yE),this.document.on("arrowKey",U2,{priority:"low"}),R2(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const i={};for(const{name:a,value:c}of Array.from(e.attributes))i[a]=c,a==="class"?this._writer.addClass(c.split(" "),n):this._writer.setAttribute(a,c,n);this._initialDomRootAttributes.set(e,i);const s=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};s(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(a,c)=>this._renderer.markToSync("children",c)),n.on("change:attributes",(a,c)=>this._renderer.markToSync("attributes",c)),n.on("change:text",(a,c)=>this._renderer.markToSync("text",c)),n.on("change:isReadOnly",()=>this.change(s)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const a of this._observers.values())a.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:i})=>t.removeAttribute(i));const n=this._initialDomRootAttributes.get(t);for(const i in n)t.setAttribute(i,n[i]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,i]of this.domRoots)t.observe(i,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&function({target:t,viewportOffset:n=0}){const i=Nd(t);let s=i,a=null;for(;s;){let c;c=IE(s==i?t:a),DE(c,()=>Xm(t,s));const u=Xm(t,s);if(SE(s,u,n),s.parent!=s){if(a=s.frameElement,s=s.parent,!a)return}else s=null}}({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new v("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){v.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return ke._createAt(e,t)}createPositionAfter(e){return ke._createAfter(e)}createPositionBefore(e){return ke._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new eo(e,t,n)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}ie(ep,Ne);class ji{constructor(e){this.parent=null,this._attrs=fo(e)}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new v("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),i=e.getAncestors(t);let s=0;for(;n[s]==i[s]&&n[s];)s++;return s===0?null:n[s-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),i=en(t,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return t[i]<n[i]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}is(e){return e==="node"||e==="model:node"}_clone(){return new ji(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=fo(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class mt extends ji{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return e==="$text"||e==="model:$text"||e==="text"||e==="model:text"||e==="node"||e==="model:node"}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new mt(this.data,this.getAttributes())}static fromJSON(e){return new mt(e.data,e.attributes)}}class ko{constructor(e,t,n){if(this.textNode=e,t<0||t>e.offsetSize)throw new v("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new v("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return e==="$textProxy"||e==="model:$textProxy"||e==="textProxy"||e==="model:textProxy"}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class Ar{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,i)=>n+i.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new v("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new v("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof ji))throw new v("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class lt extends ji{constructor(e,t,n){super(t),this.name=e,this._children=new Ar,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="model:element"):e==="element"||e==="model:element"||e==="node"||e==="model:node"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={includeSelf:!1}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):null;return new lt(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new mt(i)]:($n(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new mt(s):s instanceof ko?new mt(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}static fromJSON(e){let t=null;if(e.children){t=[];for(const n of e.children)n.name?t.push(lt.fromJSON(n)):t.push(mt.fromJSON(n))}return new lt(e.name,e.attributes,t)}}class wo{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new v("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new v("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=le._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,i,s;do i=this.position,s=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=i,this._visitedParent=s)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const i=Ps(t,n),s=i||tp(t,n,i);if(s instanceof lt)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=s),this.position=t,Vi("elementStart",s,e,t,1);if(s instanceof mt){let a;if(this.singleCharacters)a=1;else{let f=s.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<f&&(f=this.boundaries.end.offset),a=f-t.offset}const c=t.offset-s.startOffset,u=new ko(s,c,a);return t.offset+=a,this.position=t,Vi("text",u,e,t,a)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Vi("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const i=t.parent,s=Ps(t,i),a=s||np(t,i,s);if(a instanceof lt)return t.offset--,this.shallow?(this.position=t,Vi("elementStart",a,e,t,1)):(t.path.push(a.maxOffset),this.position=t,this._visitedParent=a,this.ignoreElementEnd?this._previous():Vi("elementEnd",a,e,t));if(a instanceof mt){let c;if(this.singleCharacters)c=1;else{let p=a.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>p&&(p=this.boundaries.start.offset),c=t.offset-p}const u=t.offset-a.startOffset,f=new ko(a,u-c,c);return t.offset-=c,this.position=t,Vi("text",f,e,t,c)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,Vi("elementStart",n,e,t,1)}}function Vi(r,e,t,n,i){return{done:!1,value:{type:r,item:e,previousPosition:t,nextPosition:n,length:i}}}class le{constructor(e,t,n="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new v("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new v("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new v("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new v("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Ps(this,this.parent)}get nodeAfter(){const e=this.parent;return tp(this,e,Ps(this,e))}get nodeBefore(){const e=this.parent;return np(this,e,Ps(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=en(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new wo(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=en(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let i=0;for(;t[i]==n[i]&&t[i];)i++;return i===0?null:t[i-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=le._createAt(this),n=le._createAt(e);break;case"after":t=le._createAt(e),n=le._createAt(this);break;default:return!1}let i=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==i.maxOffset)return!1;t.path=t.path.slice(0,-1),i=i.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(e){return e==="position"||e==="model:position"}hasSameParentAs(e){return this.root!==e.root?!1:en(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=le._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?le._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(en(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(en(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;if(e.offset<=this.path[i]){if(e.offset+t>this.path[i])return null;n.path[i]-=t}}return n}_getTransformedByInsertion(e,t){const n=le._createAt(this);if(this.root!=e.root)return n;if(en(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(en(e.getParentPath(),this.getParentPath())=="prefix"){const i=e.path.length-1;e.offset<=this.path[i]&&(n.path[i]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return le._createAt(this);const i=this._getTransformedByDeletion(e,n);return i===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):i._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,i=le._createAt(t);return i.stickiness=this.stickiness,i.offset=i.offset+this.path[n]-e.offset,i.path=[...i.path,...this.path.slice(n+1)],i}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof le)return new le(e.root,e.path,e.stickiness);{const i=e;if(t=="end")t=i.maxOffset;else{if(t=="before")return this._createBefore(i,n);if(t=="after")return this._createAfter(i,n);if(t!==0&&!t)throw new v("model-createpositionat-offset-required",[this,e])}if(!i.is("element")&&!i.is("documentFragment"))throw new v("model-position-parent-incorrect",[this,e]);const s=i.getPath();return s.push(t),new this(i.root,s,n)}}static _createAfter(e,t){if(!e.parent)throw new v("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new v("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new le(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new v("model-position-fromjson-no-root",t,{rootName:e.root});return new le(t.getRoot(e.root),e.path,e.stickiness)}}function Ps(r,e){const t=e.getChild(e.offsetToIndex(r.offset));return t&&t.is("$text")&&t.startOffset<r.offset?t:null}function tp(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset))}function np(r,e,t){return t!==null?null:e.getChild(e.offsetToIndex(r.offset)-1)}class te{constructor(e,t=null){this.start=le._createAt(e),this.end=t?le._createAt(t):le._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new wo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return en(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),i=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&i}containsItem(e){const t=le._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return e==="range"||e==="model:range"}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new te(this.start,e.start)),this.containsPosition(e.end)&&t.push(new te(e.end,this.end))):t.push(new te(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new te(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let i=this.start,s=this.end;return e.start.isBefore(i)&&(i=e.start),e.end.isAfter(s)&&(s=e.end),new te(i,s)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=le._createAt(this.start);let i=n.parent;for(;n.path.length>t+1;){const s=i.maxOffset-n.offset;s!==0&&e.push(new te(n,n.getShiftedBy(s))),n.path=n.path.slice(0,-1),n.offset++,i=i.parent}for(;n.path.length<=this.end.path.length;){const s=this.end.path[n.path.length-1],a=s-n.offset;a!==0&&e.push(new te(n,n.getShiftedBy(a))),n.offset=s,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new wo(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new wo(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new wo(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new te(this.start,this.end)]}getTransformedByOperations(e){const t=[new te(this.start,this.end)];for(const n of e)for(let i=0;i<t.length;i++){const s=t[i].getTransformedByOperation(n);t.splice(i,1,...s),i+=s.length-1}for(let n=0;n<t.length;n++){const i=t[n];for(let s=n+1;s<t.length;s++){const a=t[s];(i.containsRange(a)||a.containsRange(i)||i.isEqual(a))&&t.splice(s,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,i=e.howMany,s=e.targetPosition;return this._getTransformedByMove(n,s,i,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new te(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new te(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=le._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new te(t,n)):new te(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new te(this.start,e),new te(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const i=new te(this.start,this.end);return i.start=i.start._getTransformedByInsertion(e,t),i.end=i.end._getTransformedByInsertion(e,t),[i]}}_getTransformedByMove(e,t,n,i=!1){if(this.isCollapsed){const w=this.start._getTransformedByMove(e,t,n);return[new te(w)]}const s=te._createFromPositionAndShift(e,n),a=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!i&&(s.containsPosition(this.start)||s.containsPosition(this.end))){const w=this.start._getTransformedByMove(e,t,n),C=this.end._getTransformedByMove(e,t,n);return[new te(w,C)]}let c;const u=this.getDifference(s);let f=null;const p=this.getIntersection(s);if(u.length==1?f=new te(u[0].start._getTransformedByDeletion(e,n),u[0].end._getTransformedByDeletion(e,n)):u.length==2&&(f=new te(this.start,this.end._getTransformedByDeletion(e,n))),c=f?f._getTransformedByInsertion(a,n,p!==null||i):[],p){const w=new te(p.start._getCombined(s.start,a),p.end._getCombined(s.start,a));c.length==2?c.splice(1,0,w):c.push(w)}return c}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),i=this.end._getTransformedByDeletion(e,t);return n==null&&i==null?null:(n==null&&(n=e),i==null&&(i=e),new te(n,i))}static _createFromPositionAndShift(e,t){const n=e,i=e.getShiftedBy(t);return t>0?new this(n,i):new this(i,n)}static _createIn(e){return new this(le._createAt(e,0),le._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(le._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new v("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((s,a)=>s.start.isAfter(a.start)?1:-1);const n=e.indexOf(t),i=new this(t.start,t.end);if(n>0)for(let s=n-1;e[s].end.isEqual(i.start);s++)i.start=le._createAt(e[s].start);for(let s=n+1;s<e.length&&e[s].start.isEqual(i.end);s++)i.end=le._createAt(e[s].end);return i}static fromJSON(e,t){return new this(le.fromJSON(e.start,t),le.fromJSON(e.end,t))}}class Pd{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new v("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),i=this._viewToModelMapping.get(n),s=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=le._createAt(i,s)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const i of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(i);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const i=this._elementToMarkerNames.get(e)||new Set;i.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,i)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const i=this._elementToMarkerNames.get(e);i&&(i.delete(t),i.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new te(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new Be(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const i of t)if(i.is("attributeElement"))for(const s of i.getElementsWithSameId())n.add(s);else n.add(i);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let i=0;for(let s=0;s<t;s++)i+=this.getModelLength(e.getChild(s));return i}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,i=0,s=0,a=0;if(e.is("$text"))return new ke(e,t);for(;s<t;)n=e.getChild(a),i=this.getModelLength(n),s+=i,a++;return s==t?this._moveViewPositionToTextNode(new ke(e,a)):this.findPositionIn(n,t-(s-i))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof gt?new ke(t,t.data.length):n instanceof gt?new ke(n,0):e}}ie(Pd,R);class TE{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=al(t),e instanceof ko&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=al(t),e instanceof ko&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=al(t),e instanceof ko&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const i=n.get(t);return i===void 0?null:i}revert(e,t){t=al(t),e instanceof ko&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,i]of this._consumable)for(const[s,a]of i){const c=s.split(":")[0];a&&e==c&&t.push({event:s,item:n.name||n.description})}if(t.length)throw new v("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const i=n.get(e.endOffset);i&&(t=i.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,i=e.parent,s=Symbol("$textProxy:"+e.data);let a,c;return a=this._textProxyRegistry.get(t),a||(a=new Map,this._textProxyRegistry.set(t,a)),c=a.get(n),c||(c=new Map,a.set(n,c)),c.set(i,s),s}}function al(r){const e=r.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?r:e.length>1?e[0]+":"+e[1]:e[0]}class zd{constructor(e){this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const i=this._createConversionApi(n,e.getRefreshedItems());for(const a of e.getMarkersToRemove())this._convertMarkerRemove(a.name,a.range,i);const s=this._reduceChanges(e.getChanges());for(const a of s)a.type==="insert"?this._convertInsert(te._createFromPositionAndShift(a.position,a.length),i):a.type==="reinsert"?this._convertReinsert(te._createFromPositionAndShift(a.position,a.length),i):a.type==="remove"?this._convertRemove(a.position,a.length,a.name,i):this._convertAttribute(a.range,a.attributeKey,a.attributeOldValue,a.attributeNewValue,i);for(const a of i.mapper.flushUnboundMarkerNames()){const c=t.get(a).getRange();this._convertMarkerRemove(a,c,i),this._convertMarkerAdd(a,c,i)}for(const a of e.getMarkersToAdd())this._convertMarkerAdd(a.name,a.range,i);i.mapper.flushDeferredBindings(),i.consumable.verifyAllConsumed("insert")}convert(e,t,n,i={}){const s=this._createConversionApi(n,void 0,i);this._convertInsert(e,s);for(const[a,c]of t)this._convertMarkerAdd(a,c,s);s.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const i=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),s=this._createConversionApi(n);if(this._addConsumablesForSelection(s.consumable,e,i),this.fire("selection",{selection:e},s),e.isCollapsed){for(const a of i){const c=a.getRange();if(!ME(e.getFirstPosition(),a,s.mapper))continue;const u={item:e,markerName:a.name,markerRange:c};s.consumable.test(e,"addMarker:"+a.name)&&this.fire("addMarker:"+a.name,u,s)}for(const a of e.getAttributeKeys()){const c={item:e,range:e.getFirstRange(),attributeKey:a,attributeOldValue:null,attributeNewValue:e.getAttribute(a)};s.consumable.test(e,"attribute:"+c.attributeKey)&&this.fire("attribute:"+c.attributeKey+":$text",c,s)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const i of Array.from(e.getWalker({shallow:!0})).map(op))this._testAndFire("insert",i,t)}_convertRemove(e,t,n,i){this.fire("remove:"+n,{position:e,length:t},i)}_convertAttribute(e,t,n,i,s){this._addConsumablesForRange(s.consumable,e,`attribute:${t}`);for(const a of e){const c={item:a.item,range:te._createFromPositionAndShift(a.previousPosition,a.length),attributeKey:t,attributeOldValue:n,attributeNewValue:i};this._testAndFire(`attribute:${t}`,c,s)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const i of n.map(op))this._testAndFire("insert",{...i,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const i="addMarker:"+e;if(n.consumable.add(t,i),this.fire(i,{markerName:e,markerRange:t},n),n.consumable.consume(t,i)){this._addConsumablesForRange(n.consumable,t,i);for(const s of t.getItems()){if(!n.consumable.test(s,i))continue;const a={item:s,range:te._createOn(s),markerName:e,markerRange:t};this.fire(i,a,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire("removeMarker:"+e,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const i=n.item;if(e.test(i,"insert")===null){e.add(i,"insert");for(const s of i.getAttributeKeys())e.add(i,"attribute:"+s)}}return e}_addConsumablesForRange(e,t,n){for(const i of t.getItems())e.add(i,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const i of n)e.add(t,"addMarker:"+i.name);for(const i of t.getAttributeKeys())e.add(t,"attribute:"+i);return e}_testAndFire(e,t,n){const i=function(u,f){const p=f.item.name||"$text";return`${u}:${p}`}(e,t),s=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,a=this._firedEventsMap.get(n),c=a.get(s);if(c){if(c.has(i))return;c.add(i)}else a.set(s,new Set([i]));this.fire(i,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:te._createOn(e)};for(const i of n.item.getAttributeKeys())n.attributeKey=i,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(i),this._testAndFire(`attribute:${i}`,n,t)}_createConversionApi(e,t=new Set,n={}){const i={...this._conversionApi,consumable:new TE,writer:e,options:n,convertItem:s=>this._convertInsert(te._createOn(s),i),convertChildren:s=>this._convertInsert(te._createIn(s),i,{doNotAddConsumables:!0}),convertAttributes:s=>this._testAndFireAddAttributes(s,i),canReuseView:s=>!t.has(i.mapper.toModelElement(s))};return this._firedEventsMap.set(i,new Map),i}}function ME(r,e,t){const n=e.getRange(),i=Array.from(r.getAncestors());return i.shift(),i.reverse(),!i.some(s=>{if(n.containsItem(s))return!!t.toViewElement(s).getCustomProperty("addHighlight")})}function op(r){return{item:r.item,range:te._createFromPositionAndShift(r.previousPosition,r.length)}}ie(zd,R);class No{constructor(e,t,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,n)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const i of e._ranges)if(t.isEqual(i)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new te(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new te(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new te(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,n){if(e===null)this._setRanges([]);else if(e instanceof No)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof te)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof le)this._setRanges([new te(e)]);else if(e instanceof ji){const i=!!n&&!!n.backward;let s;if(t=="in")s=te._createIn(e);else if(t=="on")s=te._createOn(e);else{if(t===void 0)throw new v("model-selection-setto-required-second-parameter",[this,e]);s=new te(le._createAt(e,t))}this._setRanges([s],i)}else{if(!$n(e))throw new v("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const n=(e=Array.from(e)).some(i=>{if(!(i instanceof te))throw new v("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(s=>!s.isEqual(i))});if(e.length!==this._ranges.length||n){this._removeAllRanges();for(const i of e)this._pushRange(i);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(this.anchor===null)throw new v("model-selection-setfocus-no-ranges",[this,e]);const n=le._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(i)=="before"?(this._pushRange(new te(n,i)),this._lastRangeBackward=!0):(this._pushRange(new te(i,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(e){return e==="selection"||e==="model:selection"}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=rp(t.start,e);n&&Ld(n,t)&&(yield n);for(const s of t.getWalker()){const a=s.item;s.type=="elementEnd"&&BE(a,e,t)&&(yield a)}const i=rp(t.end,e);i&&!t.end.isTouching(le._createAt(i,0))&&Ld(i,t)&&(yield i)}}containsEntireContent(e=this.anchor.root){const t=le._createAt(e,0),n=le._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new te(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new v("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function ip(r,e){return!e.has(r)&&(e.add(r),r.root.document.model.schema.isBlock(r)&&r.parent)}function BE(r,e,t){return ip(r,e)&&Ld(r,t)}function rp(r,e){const t=r.parent.root.document.model.schema,n=r.parent.getAncestors({parentFirst:!0,includeSelf:!0});let i=!1;const s=n.find(a=>!i&&(i=t.isLimit(a),!i&&ip(a,e)));return n.forEach(a=>e.add(a)),s}function Ld(r,e){const t=function(n){const i=n.root.document.model.schema;let s=n.parent;for(;s;){if(i.isBlock(s))return s;s=s.parent}}(r);return t?!e.containsRange(te._createOn(t),!0):!0}ie(No,R);class vo extends te{constructor(e,t){super(e,t),NE.call(this)}detach(){this.stopListening()}is(e){return e==="liveRange"||e==="model:liveRange"||e=="range"||e==="model:range"}toRange(){return new te(this.start,this.end)}static fromRange(e){return new vo(e.start,e.end)}}function NE(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&PE.call(this,t)},{priority:"low"})}function PE(r){const e=this.getTransformedByOperation(r),t=te._createFromRanges(e),n=!t.isEqual(this),i=function(a,c){switch(c.type){case"insert":return a.containsPosition(c.position);case"move":case"remove":case"reinsert":case"merge":return a.containsPosition(c.sourcePosition)||a.start.isEqual(c.sourcePosition)||a.containsPosition(c.targetPosition);case"split":return a.containsPosition(c.splitPosition)||a.containsPosition(c.insertionPosition)}return!1}(this,r);let s=null;if(n){t.root.rootName=="$graveyard"&&(s=r.type=="remove"?r.sourcePosition:r.deletionPosition);const a=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",a,{deletionPosition:s})}else i&&this.fire("change:content",this.toRange(),{deletionPosition:s})}ie(vo,R);const zs="selection:";class to{constructor(e){this._selection=new zE(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return e==="selection"||e=="model:selection"||e=="documentSelection"||e=="model:documentSelection"}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return zs+e}static _isStoreAttributeKey(e){return e.startsWith(zs)}}ie(to,R);class zE extends No{constructor(e){super(),this.markers=new dn({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&i.type!="marker"&&i.type!="rename"&&i.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new v("document-selection-wrong-position",this,{range:t})}),this.listenTo(this._model.markers,"update",(t,n,i,s)=>{this._updateMarker(n,s)}),this.listenTo(this._document,"change",(t,n)=>{(function(i,s){const a=i.document.differ;for(const c of a.getChanges()){if(c.type!="insert")continue;const u=c.position.parent;c.length===u.maxOffset&&i.enqueueChange(s,f=>{const p=Array.from(u.getAttributeKeys()).filter(w=>w.startsWith(zs));for(const w of p)f.removeAttribute(w,u)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,n){super.setTo(e,t,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=A();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new v("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=vo.fromRange(e);return t.on("change:range",(n,i,s)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=s.deletionPosition;const a=this._ranges.indexOf(t);this._ranges.splice(a,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const i of this._model.markers){const s=i.name.split(":",1)[0];if(!this._observedMarkers.has(s))continue;const a=i.getRange();for(const c of this.getRanges())a.containsRange(c,!c.isCollapsed)&&e.push(i)}const n=Array.from(this.markers);for(const i of e)this.markers.has(i)||(this.markers.add(i),t=!0);for(const i of Array.from(this.markers))e.includes(i)||(this.markers.remove(i),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let i=!1;const s=Array.from(this.markers),a=this.markers.has(e);if(t){let c=!1;for(const u of this.getRanges())if(t.containsRange(u,!u.isCollapsed)){c=!0;break}c&&!a?(this.markers.add(e),i=!0):!c&&a&&(this.markers.remove(e),i=!0)}else a&&(this.markers.remove(e),i=!0);i&&this.fire("change:marker",{oldMarkers:s,directChange:!1})}_updateAttributes(e){const t=fo(this._getSurroundingAttributes()),n=fo(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[s,a]of this._attributePriority)a=="low"&&(this._attrs.delete(s),this._attributePriority.delete(s));this._setAttributesTo(t);const i=[];for(const[s,a]of this.getAttributes())n.has(s)&&n.get(s)===a||i.push(s);for(const[s]of n)this.hasAttribute(s)||i.push(s);i.length>0&&this.fire("change:attribute",{attributeKeys:i,directChange:!1})}_setAttribute(e,t,n=!0){const i=n?"normal":"low";return i=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,i),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,i]of this.getAttributes())e.get(n)!==i&&this._removeAttribute(n,!1);for(const[n,i]of e)this._setAttribute(n,i,!1)&&t.add(n);return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(zs)&&(yield[t.substr(zs.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const i=e.textNode?e.textNode:e.nodeBefore,s=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=ll(i)),n||(n=ll(s)),!this.isGravityOverridden&&!n){let a=i;for(;a&&!t.isInline(a)&&!n;)a=a.previousSibling,n=ll(a)}if(!n){let a=s;for(;a&&!t.isInline(a)&&!n;)a=a.nextSibling,n=ll(a)}n||(n=this._getStoredAttributes())}else{const i=this.getFirstRange();for(const s of i){if(s.item.is("element")&&t.isObject(s.item))break;if(s.type=="text"){n=s.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function ll(r){return r instanceof ko||r instanceof mt?r.getAttributes():null}class sp{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const no=function(r){return id(r,5)};class LE extends sp{elementToElement(e){return this.add(function(t){return(t=no(t)).model=cp(t.model),t.view=Ls(t.view,"container"),t.model.attributes.length&&(t.model.children=!0),n=>{n.on("insert:"+t.model.name,function(i,s=RE){return(a,c,u)=>{if(!s(c.item,u.consumable,{preflight:!0}))return;const f=i(c.item,u,c);if(!f)return;s(c.item,u.consumable);const p=u.mapper.toViewPosition(c.range.start);u.mapper.bindElements(c.item,f),u.writer.insert(p,f),u.convertAttributes(c.item),fp(f,c.item.getChildren(),u,{reconversion:c.reconversion})}}(t.view,gp(t.model)),{priority:t.converterPriority||"normal"}),(t.model.children||t.model.attributes.length)&&n.on("reduceChanges",hp(t.model),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){return(t=no(t)).model=cp(t.model),t.view=Ls(t.view,"container"),t.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(t.model.name,"$text"))throw new v("conversion-element-to-structure-disallowed-text",n,{elementName:t.model.name});var i,s;n.on("insert:"+t.model.name,(i=t.view,s=gp(t.model),(a,c,u)=>{if(!s(c.item,u.consumable,{preflight:!0}))return;const f=new Map;u.writer._registerSlotFactory(function(C,S,D){return(I,B="children")=>{const F=I.createContainerElement("$slot");let Y=null;if(B==="children")Y=Array.from(C.getChildren());else{if(typeof B!="function")throw new v("conversion-slot-mode-unknown",D.dispatcher,{modeOrFilter:B});Y=Array.from(C.getChildren()).filter(oe=>B(oe))}return S.set(F,Y),F}}(c.item,f,u));const p=i(c.item,u,c);if(u.writer._clearSlotFactory(),!p)return;(function(C,S,D){const I=Array.from(S.values()).flat(),B=new Set(I);if(B.size!=I.length)throw new v("conversion-slot-filter-overlap",D.dispatcher,{element:C});if(B.size!=C.childCount)throw new v("conversion-slot-filter-incomplete",D.dispatcher,{element:C})})(c.item,f,u),s(c.item,u.consumable);const w=u.mapper.toViewPosition(c.range.start);u.mapper.bindElements(c.item,p),u.writer.insert(w,p),u.convertAttributes(c.item),function(C,S,D,I){D.mapper.on("modelToViewPosition",Y,{priority:"highest"});let B=null,F=null;for([B,F]of S)fp(C,F,D,I),D.writer.move(D.writer.createRangeIn(B),D.writer.createPositionBefore(B)),D.writer.remove(B);function Y(oe,ve){const Te=ve.modelPosition.nodeAfter,ot=F.indexOf(Te);ot<0||(ve.viewPosition=ve.mapper.findPositionIn(B,ot))}D.mapper.off("modelToViewPosition",Y)}(p,f,u,{reconversion:c.reconversion})}),{priority:t.converterPriority||"normal"}),n.on("reduceChanges",hp(t.model),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=no(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=Ls(t.view[s],"attribute");else t.view=Ls(t.view,"attribute");const i=dp(t);return s=>{s.on(n,function(a){return(c,u,f)=>{if(!f.consumable.test(u.item,c.name))return;const p=a(u.attributeOldValue,f,u),w=a(u.attributeNewValue,f,u);if(!p&&!w)return;f.consumable.consume(u.item,c.name);const C=f.writer,S=C.document.selection;if(u.item instanceof No||u.item instanceof to)C.wrap(S.getFirstRange(),w);else{let D=f.mapper.toViewRange(u.range);u.attributeOldValue!==null&&p&&(D=C.unwrap(D,p)),u.attributeNewValue!==null&&w&&C.wrap(D,w)}}}(i),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=no(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const s of t.model.values)t.view[s]=up(t.view[s]);else t.view=up(t.view);const i=dp(t);return s=>{var a;s.on(n,(a=i,(c,u,f)=>{if(!f.consumable.test(u.item,c.name))return;const p=a(u.attributeOldValue,f,u),w=a(u.attributeNewValue,f,u);if(!p&&!w)return;f.consumable.consume(u.item,c.name);const C=f.mapper.toViewElement(u.item),S=f.writer;if(!C)throw new v("conversion-attribute-to-attribute-on-text",f.dispatcher,u);if(u.attributeOldValue!==null&&p)if(p.key=="class"){const D=Ut(p.value);for(const I of D)S.removeClass(I,C)}else if(p.key=="style"){const D=Object.keys(p.value);for(const I of D)S.removeStyle(I,C)}else S.removeAttribute(p.key,C);if(u.attributeNewValue!==null&&w)if(w.key=="class"){const D=Ut(w.value);for(const I of D)S.addClass(I,C)}else if(w.key=="style"){const D=Object.keys(w.value);for(const I of D)S.setStyle(I,w.value[I],C)}else S.setAttribute(w.key,w.value,C)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){return(t=no(t)).view=Ls(t.view,"ui"),n=>{var i;n.on("addMarker:"+t.model,(i=t.view,(s,a,c)=>{a.isOpening=!0;const u=i(a,c);a.isOpening=!1;const f=i(a,c);if(!u||!f)return;const p=a.markerRange;if(p.isCollapsed&&!c.consumable.consume(p,s.name))return;for(const S of p)if(!c.consumable.consume(S.item,s.name))return;const w=c.mapper,C=c.writer;C.insert(w.toViewPosition(p.start),u),c.mapper.bindElementToMarker(u,a.markerName),p.isCollapsed||(C.insert(w.toViewPosition(p.end),f),c.mapper.bindElementToMarker(f,a.markerName)),s.stop()}),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,(t.view,(s,a,c)=>{const u=c.mapper.markerNameToElements(a.markerName);if(u){for(const f of u)c.mapper.unbindElementFromMarkerName(f,a.markerName),c.writer.clear(c.writer.createRangeOn(f),f);c.writer.clearClonedElementsGroup(a.markerName),s.stop()}}),{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var i;n.on("addMarker:"+t.model,(i=t.view,(s,a,c)=>{if(!a.item||!(a.item instanceof No||a.item instanceof to||a.item.is("$textProxy")))return;const u=Od(i,a,c);if(!u||!c.consumable.consume(a.item,s.name))return;const f=c.writer,p=ap(f,u),w=f.document.selection;if(a.item instanceof No||a.item instanceof to)f.wrap(w.getFirstRange(),p,w);else{const C=c.mapper.toViewRange(a.range),S=f.wrap(C,p);for(const D of S.getItems())if(D.is("attributeElement")&&D.isSimilar(p)){c.mapper.bindElementToMarker(D,a.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on("addMarker:"+t.model,function(s){return(a,c,u)=>{if(!c.item||!(c.item instanceof lt))return;const f=Od(s,c,u);if(!f||!u.consumable.test(c.item,a.name))return;const p=u.mapper.toViewElement(c.item);if(p&&p.getCustomProperty("addHighlight")){u.consumable.consume(c.item,a.name);for(const w of te._createIn(c.item))u.consumable.consume(w.item,a.name);p.getCustomProperty("addHighlight")(p,f,u.writer),u.mapper.bindElementToMarker(p,c.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,function(s){return(a,c,u)=>{if(c.markerRange.isCollapsed)return;const f=Od(s,c,u);if(!f)return;const p=ap(u.writer,f),w=u.mapper.markerNameToElements(c.markerName);if(w){for(const C of w)u.mapper.unbindElementFromMarkerName(C,c.markerName),C.is("attributeElement")?u.writer.unwrap(u.writer.createRangeOn(C),p):C.getCustomProperty("removeHighlight")(C,f.id,u.writer);u.writer.clearClonedElementsGroup(c.markerName),a.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=no(t)).model;return t.view||(t.view=i=>({group:n,name:i.substr(t.model.length+1)})),i=>{var s;i.on("addMarker:"+n,(s=t.view,(a,c,u)=>{const f=s(c.markerName,u);if(!f)return;const p=c.markerRange;u.consumable.consume(p,a.name)&&(lp(p,!1,u,c,f),lp(p,!0,u,c,f),a.stop())}),{priority:t.converterPriority||"normal"}),i.on("removeMarker:"+n,function(a){return(c,u,f)=>{const p=a(u.markerName,f);if(!p)return;const w=f.mapper.markerNameToElements(u.markerName);if(w){for(const S of w)f.mapper.unbindElementFromMarkerName(S,u.markerName),S.is("containerElement")?(C(`data-${p.group}-start-before`,S),C(`data-${p.group}-start-after`,S),C(`data-${p.group}-end-before`,S),C(`data-${p.group}-end-after`,S)):f.writer.clear(f.writer.createRangeOn(S),S);f.writer.clearClonedElementsGroup(u.markerName),c.stop()}function C(S,D){if(D.hasAttribute(S)){const I=new Set(D.getAttribute(S).split(","));I.delete(p.name),I.size==0?f.writer.removeAttribute(S,D):f.writer.setAttribute(S,Array.from(I).join(","),D)}}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}}function ap(r,e){const t=r.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function lp(r,e,t,n,i){const s=e?r.start:r.end,a=s.nodeAfter&&s.nodeAfter.is("element")?s.nodeAfter:null,c=s.nodeBefore&&s.nodeBefore.is("element")?s.nodeBefore:null;if(a||c){let u,f;e&&a||!e&&!c?(u=a,f=!0):(u=c,f=!1);const p=t.mapper.toViewElement(u);if(p)return void function(w,C,S,D,I,B){const F=`data-${B.group}-${C?"start":"end"}-${S?"before":"after"}`,Y=w.hasAttribute(F)?w.getAttribute(F).split(","):[];Y.unshift(B.name),D.writer.setAttribute(F,Y.join(","),w),D.mapper.bindElementToMarker(w,I.markerName)}(p,e,f,t,n,i)}(function(u,f,p,w,C){const S=`${C.group}-${f?"start":"end"}`,D=C.name?{name:C.name}:null,I=p.writer.createUIElement(S,D);p.writer.insert(u,I),p.mapper.bindElementToMarker(I,w.markerName)})(t.mapper.toViewPosition(s),e,t,n,i)}function cp(r){return typeof r=="string"&&(r={name:r}),r.attributes?Array.isArray(r.attributes)||(r.attributes=[r.attributes]):r.attributes=[],r.children=!!r.children,r}function Ls(r,e){return typeof r=="function"?r:(t,n)=>function(i,s,a){typeof i=="string"&&(i={name:i});let c;const u=s.writer,f=Object.assign({},i.attributes);if(a=="container")c=u.createContainerElement(i.name,f);else if(a=="attribute"){const p={priority:i.priority||vr.DEFAULT_PRIORITY};c=u.createAttributeElement(i.name,f,p)}else c=u.createUIElement(i.name,f);if(i.styles){const p=Object.keys(i.styles);for(const w of p)u.setStyle(w,i.styles[w],c)}if(i.classes){const p=i.classes;if(typeof p=="string")u.addClass(p,c);else for(const w of p)u.addClass(w,c)}return c}(r,n,e)}function dp(r){return r.model.values?(e,t)=>{const n=r.view[e];return n?n(e,t):null}:r.view}function up(r){return typeof r=="string"?e=>({key:r,value:e}):typeof r=="object"?r.value?()=>r:e=>({key:r.key,value:e}):r}function Od(r,e,t){const n=typeof r=="function"?r(e,t):r;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function hp(r){const e=function(t){return(n,i)=>{if(!n.is("element",t.name))return!1;if(i.type=="attribute"){if(t.attributes.includes(i.attributeKey))return!0}else if(t.children)return!0;return!1}}(r);return(t,n)=>{const i=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const s of n.changes){const a=s.position?s.position.parent:s.range.start.nodeAfter;if(a&&e(a,s)){if(!n.reconvertedElements.has(a)){n.reconvertedElements.add(a);const c=le._createBefore(a);i.push({type:"remove",name:a.name,position:c,length:1},{type:"reinsert",name:a.name,position:c,length:1})}}else i.push(s)}n.changes=i}}function gp(r){return(e,t,n={})=>{const i=["insert"];for(const s of r.attributes)e.hasAttribute(s)&&i.push(`attribute:${s}`);return!!i.every(s=>t.test(e,s))&&(n.preflight||i.forEach(s=>t.consume(e,s)),!0)}}function fp(r,e,t,n){for(const i of e)OE(r.root,i,t,n)||t.convertItem(i)}function OE(r,e,t,n){const{writer:i,mapper:s}=t;if(!n.reconversion)return!1;const a=s.toViewElement(e);return!(!a||a.root==r)&&!!t.canReuseView(a)&&(i.move(i.createRangeOn(a),s.toViewPosition(le._createBefore(e))),!0)}function RE(r,e,{preflight:t}={}){return t?e.test(r,"insert"):e.consume(r,"insert")}function mp(r){const{schema:e,document:t}=r.model;for(const n of t.getRootNames()){const i=t.getRoot(n);if(i.isEmpty&&!e.checkChild(i,"$text")&&e.checkChild(i,"paragraph"))return r.insertElement("paragraph",i),!0}return!1}function pp(r,e,t){const n=t.createContext(r);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function bp(r,e){const t=e.createElement("paragraph");return e.insert(t,r),e.createPositionAt(t,0)}class FE extends sp{elementToElement(e){return this.add(kp(e))}elementToAttribute(e){return this.add(function(t){wp(t=no(t));const n=vp(t,!1),i=Rd(t.view),s=i?"element:"+i:"element";return a=>{a.on(s,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=no(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(s){typeof s.view=="string"&&(s.view={key:s.view});const a=s.view.key;let c;return a=="class"||a=="style"?c={[a=="class"?"classes":"styles"]:s.view.value}:c={attributes:{[a]:s.view.value===void 0?/[\s\S]*/:s.view.value}},s.view.name&&(c.name=s.view.name),s.view=c,a}(t)),wp(t,n);const i=vp(t,!0);return s=>{s.on("element",i,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){return function(n){const i=n.model;n.model=(s,a)=>{const c=typeof i=="string"?i:i(s,a);return a.writer.createElement("$marker",{"data-name":c})}}(t=no(t)),kp(t)}(e))}dataToMarker(e){return this.add(function(t){(t=no(t)).model||(t.model=s=>s?t.view+":"+s:t.view);const n=Fd(_p(t,"start")),i=Fd(_p(t,"end"));return s=>{s.on("element:"+t.view+"-start",n,{priority:t.converterPriority||"normal"}),s.on("element:"+t.view+"-end",i,{priority:t.converterPriority||"normal"});const a=y.get("low"),c=y.get("highest"),u=y.get(t.converterPriority)/c;s.on("element",function(f){return(p,w,C)=>{const S=`data-${f.view}`;function D(I,B){for(const F of B){const Y=f.model(F,C),oe=C.writer.createElement("$marker",{"data-name":Y});C.writer.insert(oe,I),w.modelCursor.isEqual(I)?w.modelCursor=w.modelCursor.getShiftedBy(1):w.modelCursor=w.modelCursor._getTransformedByInsertion(I,1),w.modelRange=w.modelRange._getTransformedByInsertion(I,1)[0]}}(C.consumable.test(w.viewItem,{attributes:S+"-end-after"})||C.consumable.test(w.viewItem,{attributes:S+"-start-after"})||C.consumable.test(w.viewItem,{attributes:S+"-end-before"})||C.consumable.test(w.viewItem,{attributes:S+"-start-before"}))&&(w.modelRange||Object.assign(w,C.convertChildren(w.viewItem,w.modelCursor)),C.consumable.consume(w.viewItem,{attributes:S+"-end-after"})&&D(w.modelRange.end,w.viewItem.getAttribute(S+"-end-after").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-start-after"})&&D(w.modelRange.end,w.viewItem.getAttribute(S+"-start-after").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-end-before"})&&D(w.modelRange.start,w.viewItem.getAttribute(S+"-end-before").split(",")),C.consumable.consume(w.viewItem,{attributes:S+"-start-before"})&&D(w.modelRange.start,w.viewItem.getAttribute(S+"-start-before").split(",")))}}(t),{priority:a+u})}}(e))}}function kp(r){const e=Fd(r=no(r)),t=Rd(r.view),n=t?"element:"+t:"element";return i=>{i.on(n,e,{priority:r.converterPriority||"normal"})}}function Rd(r){return typeof r=="string"?r:typeof r=="object"&&typeof r.name=="string"?r.name:null}function Fd(r){const e=new mo(r.view);return(t,n,i)=>{const s=e.match(n.viewItem);if(!s)return;const a=s.match;if(a.name=!0,!i.consumable.test(n.viewItem,a))return;const c=function(u,f,p){return u instanceof Function?u(f,p):p.writer.createElement(u)}(r.model,n.viewItem,i);c&&i.safeInsert(c,n.modelCursor)&&(i.consumable.consume(n.viewItem,a),i.convertChildren(n.viewItem,c),i.updateConversionResult(c,n))}}function wp(r,e=null){const t=e===null||(s=>s.getAttribute(e)),n=typeof r.model!="object"?r.model:r.model.key,i=typeof r.model!="object"||r.model.value===void 0?t:r.model.value;r.model={key:n,value:i}}function vp(r,e){const t=new mo(r.view);return(n,i,s)=>{if(!i.modelRange&&e)return;const a=t.match(i.viewItem);if(!a||(function(p,w){const C=typeof p=="function"?p(w):p;return typeof C=="object"&&!Rd(C)?!1:!C.classes&&!C.attributes&&!C.styles}(r.view,i.viewItem)?a.match.name=!0:delete a.match.name,!s.consumable.test(i.viewItem,a.match)))return;const c=r.model.key,u=typeof r.model.value=="function"?r.model.value(i.viewItem,s):r.model.value;if(u===null)return;i.modelRange||Object.assign(i,s.convertChildren(i.viewItem,i.modelCursor)),function(p,w,C,S){let D=!1;for(const I of Array.from(p.getItems({shallow:C})))S.schema.checkAttribute(I,w.key)&&(D=!0,I.hasAttribute(w.key)||S.writer.setAttribute(w.key,w.value,I));return D}(i.modelRange,{key:c,value:u},e,s)&&(s.consumable.test(i.viewItem,{name:!0})&&(a.match.name=!0),s.consumable.consume(i.viewItem,a.match))}}function _p(r,e){const t={};return t.view=r.view+"-"+e,t.model=(n,i)=>{const s=n.getAttribute("name"),a=r.model(s,i);return i.writer.createElement("$marker",{"data-name":a})},t}class Cp{constructor(e,t){this.model=e,this.view=new ep(t),this.mapper=new Pd,this.downcastDispatcher=new zd({mapper:this.mapper,schema:e.schema});const n=this.model.document,i=n.selection,s=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(a=>{this.downcastDispatcher.convertChanges(n.differ,s,a),this.downcastDispatcher.convertSelection(i,s,a)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(a,c){return(u,f)=>{const p=f.newSelection,w=[];for(const S of p.getRanges())w.push(c.toModelRange(S));const C=a.createSelection(w,{backward:p.isBackward});C.isEqual(a.document.selection)||a.change(S=>{S.setSelection(C)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(a,c,u)=>{if(!u.consumable.consume(c.item,a.name))return;const f=u.writer,p=u.mapper.toViewPosition(c.range.start),w=f.createText(c.item.data);f.insert(p,w)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(a,c,u)=>{u.convertAttributes(c.item),c.reconversion||!c.item.is("element")||c.item.isEmpty||u.convertChildren(c.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(a,c,u)=>{const f=u.mapper.toViewPosition(c.position),p=c.position.getShiftedBy(c.length),w=u.mapper.toViewPosition(p,{isPhantom:!0}),C=u.writer.createRange(f,w),S=u.writer.remove(C.getTrimmed());for(const D of u.writer.createRangeIn(S).getItems())u.mapper.unbindViewElement(D,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=u.writer,p=f.document.selection;for(const w of p.getRanges())w.isCollapsed&&w.end.parent.isAttached()&&u.writer.mergeAttributes(w.start);f.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=c.selection;if(f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=[];for(const w of f.getRanges()){const C=u.mapper.toViewRange(w);p.push(C)}u.writer.setSelection(p,{backward:f.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(a,c,u)=>{const f=c.selection;if(!f.isCollapsed||!u.consumable.consume(f,"selection"))return;const p=u.writer,w=f.getFirstPosition(),C=u.mapper.toViewPosition(w),S=p.breakAttributes(C);p.setSelection(S)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(a=>{if(a.rootName=="$graveyard")return null;const c=new I2(this.view.document,a.name);return c.rootName=a.rootName,this.mapper.bindElements(a,c),c})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new v("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}ie(Cp,Ne);class jE{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new v("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class Os{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new VE(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const a of n)a!="style"&&a!="class"&&t.attributes.push(a);const i=e.getClassNames();for(const a of i)t.classes.push(a);const s=e.getStyleNames();for(const a of s)t.styles.push(a);return t}static createFrom(e,t){if(t||(t=new Os(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,Os.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=Os.createFrom(n,t);return t}}class VE{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const n=cn(t)?t:[t],i=this._consumables[e];for(const s of n){if(e==="attributes"&&(s==="class"||s==="style"))throw new v("viewconsumable-invalid-attribute",this);if(i.set(s,!0),e==="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(a,!0)}}_test(e,t){const n=cn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){const a=i.get(s);if(a===void 0)return null;if(!a)return!1}else{const a=s=="class"?"classes":"styles",c=this._test(a,[...this._consumables[a].keys()]);if(c!==!0)return c}return!0}_consume(e,t){const n=cn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style"){if(i.set(s,!1),e=="styles")for(const a of this.element.document.stylesProcessor.getRelatedStyles(s))i.set(a,!1)}else{const a=s=="class"?"classes":"styles";this._consume(a,[...this._consumables[a].keys()])}}_revert(e,t){const n=cn(t)?t:[t],i=this._consumables[e];for(const s of n)if(e!=="attributes"||s!=="class"&&s!=="style")i.get(s)===!1&&i.set(s,!0);else{const a=s=="class"?"classes":"styles";this._revert(a,[...this._consumables[a].keys()])}}}class Ap{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Hi(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Hi(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new v("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new v("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof le){const n=e.nodeBefore,i=e.nodeAfter;if(!(n instanceof lt))throw new v("schema-check-merge-no-element-before",this);if(!(i instanceof lt))throw new v("schema-check-merge-no-element-after",this);return this.checkMerge(n,i)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,i])=>{if(!i)return;const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,i])=>{const s=e(n,i);typeof s=="boolean"&&(t.stop(),t.return=s)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof le?t=e.parent:t=(e instanceof te?[e]:Array.from(e.getRanges())).reduce((n,i)=>{const s=i.getCommonAncestor();return n?n.getCommonAncestor(s,{includeSelf:!0}):s},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new mt("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const i of n)for(const s of i)if(this.checkAttribute(s.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const i of n)yield*i.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new te(e);let n,i;const s=e.getAncestors().reverse().find(a=>this.isLimit(a))||e.root;t!="both"&&t!="backward"||(n=new wo({boundaries:te._createIn(s),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(i=new wo({boundaries:te._createIn(s),startPosition:e}));for(const a of function*(c,u){let f=!1;for(;!f;){if(f=!0,c){const p=c.next();p.done||(f=!1,yield{walker:c,value:p.value})}if(u){const p=u.next();p.done||(f=!1,yield{walker:u,value:p.value})}}}(n,i)){const c=a.walker==n?"elementEnd":"elementStart",u=a.value;if(u.type==c&&this.isObject(u.item))return te._createOn(u.item);if(this.checkChild(u.nextPosition,"$text"))return new te(u.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const i=n.model;for(const[s,a]of Object.entries(t))i.schema.checkAttribute(e,s)&&n.setAttribute(s,a,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))yp(this,n,t);else{const i=te._createIn(n).getPositions();for(const s of i)yp(this,s.nodeBefore||s.parent,t)}}getAttributesWithProperty(e,t,n){const i={};for(const[s,a]of e.getAttributes()){const c=this.getAttributeProperties(s);c[t]!==void 0&&(n!==void 0&&n!==c[t]||(i[s]=a))}return i}createContext(e){return new Hi(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const i of n)e[i]=HE(t[i],i);for(const i of n)UE(e,i);for(const i of n)$E(e,i);for(const i of n)WE(e,i);for(const i of n)qE(e,i),GE(e,i);for(const i of n)KE(e,i),YE(e,i),QE(e,i);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const i=t.getItem(n);if(e.allowIn.includes(i.name)){if(n==0)return!0;{const s=this.getDefinition(i);return this._checkContextMatch(s,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,i=e.start;for(const s of e.getItems({shallow:!0}))s.is("element")&&(yield*this._getValidRangesForRange(te._createIn(s),t)),this.checkAttribute(s,t)||(n.isEqual(i)||(yield new te(n,i)),n=le._createAfter(s)),i=le._createAfter(s);n.isEqual(i)||(yield new te(n,i))}}ie(Ap,Ne);class Hi{constructor(e){if(e instanceof Hi)return e;typeof e=="string"?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(JE)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Hi([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function HE(r,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,i){for(const s of n){const a=Object.keys(s).filter(c=>c.startsWith("is"));for(const c of a)i[c]=s[c]}}(r,t),Ui(r,t,"allowIn"),Ui(r,t,"allowContentOf"),Ui(r,t,"allowWhere"),Ui(r,t,"allowAttributes"),Ui(r,t,"allowAttributesOf"),Ui(r,t,"allowChildren"),Ui(r,t,"inheritTypesFrom"),function(n,i){for(const s of n){const a=s.inheritAllFrom;a&&(i.allowContentOf.push(a),i.allowWhere.push(a),i.allowAttributesOf.push(a),i.inheritTypesFrom.push(a))}}(r,t),t}function UE(r,e){const t=r[e];for(const n of t.allowChildren){const i=r[n];i&&i.allowIn.push(e)}t.allowChildren.length=0}function $E(r,e){for(const t of r[e].allowContentOf)r[t]&&ZE(r,t).forEach(n=>{n.allowIn.push(e)});delete r[e].allowContentOf}function WE(r,e){for(const t of r[e].allowWhere){const n=r[t];if(n){const i=n.allowIn;r[e].allowIn.push(...i)}}delete r[e].allowWhere}function qE(r,e){for(const t of r[e].allowAttributesOf){const n=r[t];if(n){const i=n.allowAttributes;r[e].allowAttributes.push(...i)}}delete r[e].allowAttributesOf}function GE(r,e){const t=r[e];for(const n of t.inheritTypesFrom){const i=r[n];if(i){const s=Object.keys(i).filter(a=>a.startsWith("is"));for(const a of s)a in t||(t[a]=i[a])}}delete t.inheritTypesFrom}function KE(r,e){const t=r[e],n=t.allowIn.filter(i=>r[i]);t.allowIn=Array.from(new Set(n))}function YE(r,e){const t=r[e];for(const n of t.allowIn)r[n].allowChildren.push(e)}function QE(r,e){const t=r[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function Ui(r,e,t){for(const n of r)typeof n[t]=="string"?e[t].push(n[t]):Array.isArray(n[t])&&e[t].push(...n[t])}function ZE(r,e){const t=r[e];return(n=r,Object.keys(n).map(i=>n[i])).filter(i=>i.allowIn.includes(t.name));var n}function JE(r){return typeof r=="string"||r.is("documentFragment")?{name:typeof r=="string"?r:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:r.is("element")?r.name:"$text",*getAttributeKeys(){yield*r.getAttributeKeys()},getAttribute:e=>r.getAttribute(e)}}function yp(r,e,t){for(const n of e.getAttributeKeys())r.checkAttribute(e,n)||t.removeAttribute(n,e)}class xp{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(a,c){let u;for(const f of new Hi(a)){const p={};for(const C of f.getAttributeKeys())p[C]=f.getAttribute(C);const w=c.createElement(f.name,p);u&&c.append(w,u),u=le._createAt(w,0)}return u}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=Os.createFrom(e),this.conversionApi.store={};const{modelRange:i}=this._convertItem(e,this._modelCursor),s=t.createDocumentFragment();if(i){this._removeEmptyElements();for(const a of Array.from(this._modelCursor.parent.getChildren()))t.append(a,s);s.markers=function(a,c){const u=new Set,f=new Map,p=te._createIn(a).getItems();for(const w of p)w.name=="$marker"&&u.add(w);for(const w of u){const C=w.getAttribute("data-name"),S=c.createPositionBefore(w);f.has(C)?f.get(C).end=S.clone():f.set(C,new te(S.clone())),c.remove(w)}return f}(s,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,s}_convertItem(e,t){const n=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof te))throw new v("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:le._createAt(t,0);const i=new te(n);for(const s of Array.from(e.getChildren())){const a=this._convertItem(s,n);a.modelRange instanceof te&&(i.end=a.modelRange.end,n=a.modelCursor)}return{modelRange:i,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),i=this.conversionApi.writer;t.modelRange||(t.modelRange=i.createRange(i.createPositionBefore(e),i.createPositionAfter(n[n.length-1])));const s=this._cursorParents.get(e);t.modelCursor=s?i.createPositionAt(s,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:i}=this.conversionApi;let s=n.findAllowedParent(t,e);if(s){if(s===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(s)&&(s=null)}if(!s)return pp(t,e,n)?{position:bp(t,i)}:null;const a=this.conversionApi.writer.split(t,s),c=[];for(const f of a.range.getWalker())if(f.type=="elementEnd")c.push(f.item);else{const p=c.pop(),w=f.item;this._registerSplitPair(p,w)}const u=a.range.end.parent;return this._cursorParents.set(e,u),{position:a.position,cursorParent:u}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}ie(xp,R);class XE{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class eS{constructor(e){this.domParser=new DOMParser,this.domConverter=new el(e,{renderingMode:"data"}),this.htmlWriter=new XE}toData(e){const t=this.domConverter.viewToDom(e);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),i=t.body.childNodes;for(;i.length>0;)n.appendChild(i[0]);return n}}class Ep{constructor(e,t){this.model=e,this.mapper=new Pd,this.downcastDispatcher=new zd({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,i,s)=>{if(!s.consumable.consume(i.item,n.name))return;const a=s.writer,c=s.mapper.toViewPosition(i.range.start),u=a.createText(i.item.data);a.insert(c,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,i,s)=>{s.convertAttributes(i.item),i.reconversion||!i.item.is("element")||i.item.isEmpty||s.convertChildren(i.item)},{priority:"lowest"}),this.upcastDispatcher=new xp({schema:e.schema}),this.viewDocument=new Ms(t),this.stylesProcessor=t,this.htmlProcessor=new eS(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new um(this.viewDocument),this.upcastDispatcher.on("text",(n,i,{schema:s,consumable:a,writer:c})=>{let u=i.modelCursor;if(!a.test(i.viewItem))return;if(!s.checkChild(u,"$text")){if(!pp(u,"$text",s)||i.viewItem.data.trim().length==0)return;u=bp(u,c)}a.consume(i.viewItem);const f=c.createText(i.viewItem.data);c.insert(f,u),i.modelRange=c.createRange(u,u.getShiftedBy(f.offsetSize)),i.modelCursor=i.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:a,modelCursor:c}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=a,i.modelCursor=c}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,i,s)=>{if(!i.modelRange&&s.consumable.consume(i.viewItem,{name:!0})){const{modelRange:a,modelCursor:c}=s.convertChildren(i.viewItem,i.modelCursor);i.modelRange=a,i.modelCursor=c}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},mp)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new v("datacontroller-get-non-existent-root",this);const i=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(i,{ignoreWhitespaces:!0})?this.stringify(i,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,i=this._viewWriter;this.mapper.clearBindings();const s=te._createIn(e),a=new Fi(n);this.mapper.bindElements(e,a);const c=e.is("documentFragment")?e.markers:function(u){const f=[],p=u.root.document;if(!p)return new Map;const w=te._createIn(u);for(const C of p.model.markers){const S=C.getRange(),D=S.isCollapsed,I=S.start.isEqual(w.start)||S.end.isEqual(w.end);if(D&&I)f.push([C.name,S]);else{const B=w.getIntersection(S);B&&f.push([C.name,B])}}return f.sort(([C,S],[D,I])=>{if(S.end.compareWith(I.start)!=="after")return 1;if(S.start.compareWith(I.end)!=="before")return-1;switch(S.start.compareWith(I.start)){case"before":return 1;case"after":return-1;default:switch(S.end.compareWith(I.end)){case"before":return 1;case"after":return-1;default:return D.localeCompare(C)}}}),new Map(f)}(e);return this.downcastDispatcher.convert(s,c,i,t),a}init(e){if(this.model.document.version)throw new v("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new v("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const i of Object.keys(t)){const s=this.model.document.getRoot(i);n.insert(this.parse(t[i],s),s,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new v("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},i=>{i.setSelection(null),i.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const s of Object.keys(n)){const a=this.model.document.getRoot(s);i.remove(i.createRangeIn(a)),i.insert(this.parse(n[s],a),a,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}ie(Ep,Ne);class tS{constructor(e,t){this._helpers=new Map,this._downcast=Ut(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=Ut(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new v("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new v("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of jd(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of jd(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of jd(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new v("conversion-group-exists",this);const i=n?new LE(t):new FE(t);this._helpers.set(e,i)}}function*jd(r){if(r.model.values)for(const e of r.model.values){const t={key:r.model.key,value:e},n=r.view[e],i=r.upcastAlso?r.upcastAlso[e]:void 0;yield*Sp(t,n,i)}else yield*Sp(r.model,r.view,r.upcastAlso)}function*Sp(r,e,t){if(yield{model:r,view:e},t)for(const n of Ut(t))yield{model:r,view:n}}class yr{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},E("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:i=!1,isTyping:s=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=i,this.isTyping=s}get type(){return E("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class Gn{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class Po{constructor(e){this.markers=new Map,this._children=new Ar,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="model:documentFragment"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(lt.fromJSON(n)):t.push(mt.fromJSON(n));return new Po(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(i){return typeof i=="string"?[new mt(i)]:($n(i)||(i=[i]),Array.from(i).map(s=>typeof s=="string"?new mt(s):s instanceof ko?new mt(s.data,s.getAttributes()):s))}(t);for(const i of n)i.parent!==null&&i._remove(),i.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const i of n)i.parent=null;return n}}function Vd(r,e){const t=(e=Ip(e)).reduce((s,a)=>s+a.offsetSize,0),n=r.parent;js(r);const i=r.index;return n._insertChild(i,e),Fs(n,i+e.length),Fs(n,i),new te(r,r.getShiftedBy(t))}function Dp(r){if(!r.isFlat)throw new v("operation-utils-remove-range-not-flat",this);const e=r.start.parent;js(r.start),js(r.end);const t=e._removeChildren(r.start.index,r.end.index-r.start.index);return Fs(e,r.start.index),t}function Rs(r,e){if(!r.isFlat)throw new v("operation-utils-move-range-not-flat",this);const t=Dp(r);return Vd(e=e._getTransformedByDeletion(r.start,r.end.offset-r.start.offset),t)}function Ip(r){const e=[];r instanceof Array||(r=[r]);for(let t=0;t<r.length;t++)if(typeof r[t]=="string")e.push(new mt(r[t]));else if(r[t]instanceof ko)e.push(new mt(r[t].data,r[t].getAttributes()));else if(r[t]instanceof Po||r[t]instanceof Ar)for(const n of r[t])e.push(n);else r[t]instanceof ji&&e.push(r[t]);for(let t=1;t<e.length;t++){const n=e[t],i=e[t-1];n instanceof mt&&i instanceof mt&&Tp(n,i)&&(e.splice(t-1,2,new mt(i.data+n.data,i.getAttributes())),t--)}return e}function Fs(r,e){const t=r.getChild(e-1),n=r.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&Tp(t,n)){const i=new mt(t.data+n.data,t.getAttributes());r._removeChildren(e-1,2),r._insertChild(e-1,i)}}function js(r){const e=r.textNode,t=r.parent;if(e){const n=r.offset-e.startOffset,i=e.index;t._removeChildren(i,1);const s=new mt(e.data.substr(0,n),e.getAttributes()),a=new mt(e.data.substr(n),e.getAttributes());t._insertChild(i,[s,a])}}function Tp(r,e){const t=r.getAttributes(),n=e.getAttributes();for(const i of t){if(i[1]!==e.getAttribute(i[0]))return!1;n.next()}return n.next().done}const Mp=function(r,e){return jm(r,e)};class zt extends Gn{constructor(e,t,n,i,s){super(s),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=i===void 0?null:i}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new zt(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new zt(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new v("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!Mp(e.getAttribute(this.key),this.oldValue))throw new v("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new v("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){Mp(this.oldValue,this.newValue)||function(e,t,n){js(e.start),js(e.end);for(const i of e.getItems({shallow:!0})){const s=i.is("$textProxy")?i.textNode:i;n!==null?s._setAttribute(t,n):s._removeAttribute(t),Fs(s.parent,s.index)}Fs(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new zt(te.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class nS extends Gn{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new v("detach-operation-on-document-node",this)}_execute(){Dp(te._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class ct extends Gn{constructor(e,t,n,i){super(i),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,i=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new v("move-operation-nodes-do-not-exist",this);if(e===t&&n<i&&i<n+this.howMany)throw new v("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&en(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const s=this.sourcePosition.path.length-1;if(this.targetPosition.path[s]>=n&&this.targetPosition.path[s]<n+this.howMany)throw new v("move-operation-node-into-itself",this)}}_execute(){Rs(te._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),i=le.fromJSON(e.targetPosition,t);return new this(n,e.howMany,i,e.baseVersion)}}class $t extends Gn{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new Ar(Ip(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new Ar([...this.nodes].map(n=>n._clone(!0))),t=new $t(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new le(e,[0]);return new ct(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new v("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new Ar([...e].map(t=>t._clone(!0))),Vd(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const s of e.nodes)s.name?n.push(lt.fromJSON(s)):n.push(mt.fromJSON(s));const i=new $t(le.fromJSON(e.position,t),n,e.baseVersion);return i.shouldReceiveAttributes=e.shouldReceiveAttributes,i}}class mn extends Gn{constructor(e,t,n,i,s,a){super(a),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=s,this._markers=i}get type(){return"marker"}clone(){return new mn(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new mn(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new mn(e.name,e.oldRange?te.fromJSON(e.oldRange,t):null,e.newRange?te.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class pn extends Gn{constructor(e,t,n,i){super(i),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new pn(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new pn(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof lt))throw new v("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new v("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new pn(le.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class zo extends Gn{constructor(e,t,n,i,s){super(s),this.root=e,this.key=t,this.oldValue=n,this.newValue=i}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new zo(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new zo(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new v("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new v("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new v("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new v("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new zo(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class jt extends Gn{constructor(e,t,n,i,s){super(s),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=i.clone()}get type(){return"merge"}get deletionPosition(){return new le(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new te(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new le(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new bt(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new v("merge-operation-source-position-invalid",this);if(!t.parent)throw new v("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new v("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;Rs(te._createIn(e),this.targetPosition),Rs(te._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=le.fromJSON(e.sourcePosition,t),i=le.fromJSON(e.targetPosition,t),s=le.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,i,s,e.baseVersion)}}class bt extends Gn{constructor(e,t,n,i,s){super(s),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=i?i.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new le(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new te(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new le(e,[0]);return new jt(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new v("split-operation-position-invalid",this);if(!e.parent)throw new v("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new v("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new v("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)Rs(te._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Vd(this.insertionPosition,t)}Rs(new te(le._createAt(e,this.splitPosition.offset),le._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new le(e.root,t,"toPrevious")}static fromJSON(e,t){const n=le.fromJSON(e.splitPosition,t),i=le.fromJSON(e.insertionPosition,t),s=e.graveyardPosition?le.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,i,s,e.baseVersion)}}class Hd extends lt{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}is(e,t){return t?t===this.name&&(e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"):e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"||e==="node"||e==="model:node"}toJSON(){return this.rootName}}class oS{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new mt(e,t)}createElement(e,t){return new lt(e,t)}createDocumentFragment(){return new Po}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof mt&&e.data=="")return;const i=le._createAt(t,n);if(e.parent){if(Pp(e.root,i.root))return void this.move(te._createOn(e),i);if(e.root.document)throw new v("model-writer-insert-forbidden-move",this);this.remove(e)}const s=i.root.document?i.root.document.version:null,a=new $t(i,e,s);if(e instanceof mt&&(a.shouldReceiveAttributes=!0),this.batch.addOperation(a),this.model.applyOperation(a),e instanceof Po)for(const[c,u]of e.markers){const f=le._createAt(u.root,0),p={range:new te(u.start._getCombined(f,i),u.end._getCombined(f,i)),usingOperation:!0,affectsData:!0};this.model.markers.has(c)?this.updateMarker(c,p):this.addMarker(c,p)}}insertText(e,t,n,i){t instanceof Po||t instanceof lt||t instanceof le?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,i)}insertElement(e,t,n,i){t instanceof Po||t instanceof lt||t instanceof le?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,i)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof Po||t instanceof lt?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof Po||t instanceof lt?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof te){const i=n.getMinimalFlatRanges();for(const s of i)Bp(this,e,t,s)}else Np(this,e,t,n)}setAttributes(e,t){for(const[n,i]of fo(e))this.setAttribute(n,i,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof te){const n=t.getMinimalFlatRanges();for(const i of n)Bp(this,e,null,i)}else Np(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const i of n.getAttributeKeys())this.removeAttribute(i,n)};if(e instanceof te)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof te))throw new v("writer-move-invalid-range",this);if(!e.isFlat)throw new v("writer-move-range-not-flat",this);const i=le._createAt(t,n);if(i.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!Pp(e.root,i.root))throw new v("writer-move-different-document",this);const s=e.root.document?e.root.document.version:null,a=new ct(e.start,e.end.offset-e.start.offset,i,s);this.batch.addOperation(a),this.model.applyOperation(a)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof te?e:te._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),iS(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof lt))throw new v("writer-merge-no-element-before",this);if(!(n instanceof lt))throw new v("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,n){return this.model.createSelection(e,t,n)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(te._createIn(n),le._createAt(t,"end")),this.remove(n)}_merge(e){const t=le._createAt(e.nodeBefore,"end"),n=le._createAt(e.nodeAfter,0),i=e.root.document.graveyard,s=new le(i,[0]),a=e.root.document.version,c=new jt(n,e.nodeAfter.maxOffset,t,s,a);this.batch.addOperation(c),this.model.applyOperation(c)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof lt))throw new v("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,i=new pn(le._createBefore(e),e.name,t,n);this.batch.addOperation(i),this.model.applyOperation(i)}split(e,t){this._assertWriterUsedCorrectly();let n,i,s=e.parent;if(!s.parent)throw new v("writer-split-element-no-parent",this);if(t||(t=s.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new v("writer-split-invalid-limit-element",this);do{const a=s.root.document?s.root.document.version:null,c=s.maxOffset-e.offset,u=bt.getInsertionPosition(e),f=new bt(e,c,u,null,a);this.batch.addOperation(f),this.model.applyOperation(f),n||i||(n=s,i=e.parent.nextSibling),s=(e=this.createPositionAfter(e.parent)).parent}while(s!==t);return{position:e,range:new te(le._createAt(n,"end"),le._createAt(i,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new v("writer-wrap-range-not-flat",this);const n=t instanceof lt?t:new lt(t);if(n.childCount>0)throw new v("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new v("writer-wrap-element-attached",this);this.insert(n,e.start);const i=new te(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(i,le._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new v("writer-unwrap-element-no-parent",this);this.move(te._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new v("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,i=t.range,s=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new v("writer-addmarker-marker-exists",this);if(!i)throw new v("writer-addmarker-no-range",this);return n?(Vs(this,e,null,i,s),this.model.markers.get(e)):this.model.markers._set(e,i,n,s)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,i=this.model.markers.get(n);if(!i)throw new v("writer-updatemarker-marker-not-exists",this);if(!t)return E("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(i);const s=typeof t.usingOperation=="boolean",a=typeof t.affectsData=="boolean",c=a?t.affectsData:i.affectsData;if(!s&&!t.range&&!a)throw new v("writer-updatemarker-wrong-options",this);const u=i.getRange(),f=t.range?t.range:u;s&&t.usingOperation!==i.managedUsingOperations?t.usingOperation?Vs(this,n,null,f,c):(Vs(this,n,u,null,c),this.model.markers._set(n,f,void 0,c)):i.managedUsingOperations?Vs(this,n,u,f,c):this.model.markers._set(n,f,void 0,c)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new v("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Vs(this,t,n.getRange(),null,n.affectsData)}setSelection(e,t,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,i]of fo(e))this._setSelectionAttribute(n,i)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const i=to._getStoreAttributeKey(e);this.setAttribute(i,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=to._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new v("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const i=n.getRange();let s=!1;if(e==="move")s=t.containsPosition(i.start)||t.start.isEqual(i.start)||t.containsPosition(i.end)||t.end.isEqual(i.end);else{const a=t.nodeBefore,c=t.nodeAfter,u=i.start.parent==a&&i.start.isAtEnd,f=i.end.parent==c&&i.end.offset==0,p=i.end.nodeAfter==c,w=i.start.nodeAfter==c;s=u||f||p||w}s&&this.updateMarker(n.name,{range:i})}}}function Bp(r,e,t,n){const i=r.model,s=i.document;let a,c,u,f=n.start;for(const w of n.getWalker({shallow:!0}))u=w.item.getAttribute(e),a&&c!=u&&(c!=t&&p(),f=a),a=w.nextPosition,c=u;function p(){const w=new te(f,a),C=w.root.document?s.version:null,S=new zt(w,e,c,t,C);r.batch.addOperation(S),i.applyOperation(S)}a instanceof le&&a!=f&&c!=t&&p()}function Np(r,e,t,n){const i=r.model,s=i.document,a=n.getAttribute(e);let c,u;if(a!=t){if(n.root===n){const f=n.document?s.version:null;u=new zo(n,e,a,t,f)}else{c=new te(le._createBefore(n),r.createPositionAfter(n));const f=c.root.document?s.version:null;u=new zt(c,e,a,t,f)}r.batch.addOperation(u),i.applyOperation(u)}}function Vs(r,e,t,n,i){const s=r.model,a=s.document,c=new mn(e,t,n,s.markers,i,a.version);r.batch.addOperation(c),s.applyOperation(c)}function iS(r,e,t,n){let i;if(r.root.document){const s=n.document,a=new le(s.graveyard,[0]);i=new ct(r,e,a,s.version)}else i=new nS(r,e);t.addOperation(i),n.applyOperation(i)}function Pp(r,e){return r===e||r instanceof Hd&&e instanceof Hd}class rS{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),n=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),n||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=te._createFromPositionAndShift(e.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const n=e.graveyardPosition.parent;this._markInsert(n,e.graveyardPosition.offset,1);const i=e.targetPosition.parent;this._isInInsertedElement(i)||this._markInsert(i,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const i=this._changedMarkers.get(e);i?(i.newMarkerData=n,i.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,i=!e.range&&t.range,s=e.range&&t.range&&!e.range.isEqual(t.range);if(n||i||s)return!0}}return!1}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const i=this._changesInElement.get(n).sort((p,w)=>p.offset===w.offset?p.type!=w.type?p.type=="remove"?-1:1:0:p.offset<w.offset?-1:1),s=this._elementSnapshots.get(n),a=zp(n.getChildren()),c=sS(s.length,i);let u=0,f=0;for(const p of c)if(p==="i")t.push(this._getInsertDiff(n,u,a[u])),u++;else if(p==="r")t.push(this._getRemoveDiff(n,u,s[f])),f++;else if(p==="a"){const w=a[u].attributes,C=s[f].attributes;let S;if(a[u].name=="$text")S=new te(le._createAt(n,u),le._createAt(n,u+1));else{const D=n.offsetToIndex(u);S=new te(le._createAt(n,u),le._createAt(n.getChild(D),0))}t.push(...this._getAttributesDiff(S,C,w)),u++,f++}else u++,f++}t.sort((n,i)=>n.position.root!=i.position.root?n.position.root.rootName<i.position.root.rootName?-1:1:n.position.isEqual(i.position)?n.changeCount-i.changeCount:n.position.isBefore(i.position)?-1:1);for(let n=1,i=0;n<t.length;n++){const s=t[i],a=t[n],c=s.type=="remove"&&a.type=="remove"&&s.name=="$text"&&a.name=="$text"&&s.position.isEqual(a.position),u=s.type=="insert"&&a.type=="insert"&&s.name=="$text"&&a.name=="$text"&&s.position.parent==a.position.parent&&s.position.offset+s.length==a.position.offset,f=s.type=="attribute"&&a.type=="attribute"&&s.position.parent==a.position.parent&&s.range.isFlat&&a.range.isFlat&&s.position.offset+s.length==a.position.offset&&s.attributeKey==a.attributeKey&&s.attributeOldValue==a.attributeOldValue&&s.attributeNewValue==a.attributeNewValue;c||u||f?(s.length++,f&&(s.range.end=s.range.end.getShiftedBy(1)),t[n]=null):i=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(aS),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=te._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const i=n.getData();this.bufferMarkerChange(n.name,i,i)}this._cachedChanges=null}_markInsert(e,t,n){const i={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i)}_markRemove(e,t,n){const i={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,i),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let i=0;i<n.length;i++)n[i].howMany<1&&(n.splice(i,1),i--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,zp(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const i=e.offset+e.howMany,s=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<s&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<s){const a=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:i,howMany:a-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(i<=n.offset)n.offset-=e.howMany;else if(i<=s)if(e.offset<n.offset){const a=i-n.offset;n.offset=e.offset,n.howMany-=a,e.nodesToHandle-=a}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<s){const a=s-e.offset;n.howMany-=a,e.nodesToHandle-=a}}if(n.type=="remove"&&(i<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(i<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const a=i-n.offset;n.offset=e.offset,n.howMany-=a}else if(e.offset<s)if(i<=s){const a=n.howMany;n.howMany=e.offset-n.offset;const c=a-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:c,count:this._changeCount++})}else n.howMany-=s-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&i>n.offset){if(i>s){const a={type:"attribute",offset:s,howMany:i-s,count:this._changeCount++};this._handleChange(a,t),t.push(a)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<s&&(i>s?(e.nodesToHandle=i-s,e.offset=s):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&i>n.offset){const a={type:"attribute",offset:n.offset,howMany:i-n.offset,count:this._changeCount++};this._handleChange(a,t),t.push(a),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&i<=s?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&i>=s&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:le._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const i=[];n=new Map(n);for(const[s,a]of t){const c=n.has(s)?n.get(s):null;c!==a&&i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:a,attributeNewValue:c,changeCount:this._changeCount++}),n.delete(s)}for(const[s,a]of n)i.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:s,attributeOldValue:null,attributeNewValue:a,changeCount:this._changeCount++});return i}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),i=e.startOffset;if(n){for(const s of n)if(s.type=="insert"&&i>=s.offset&&i<s.offset+s.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const i=new te(le._createAt(e,t),le._createAt(e,t+n));for(const s of i.getItems({shallow:!0}))s.is("element")&&(this._elementSnapshots.delete(s),this._changesInElement.delete(s),this._removeAllNestedChanges(s,0,s.maxOffset))}}function zp(r){const e=[];for(const t of r)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function sS(r,e){const t=[];let n=0,i=0;for(const s of e){if(s.offset>n){for(let a=0;a<s.offset-n;a++)t.push("e");i+=s.offset-n}if(s.type=="insert"){for(let a=0;a<s.howMany;a++)t.push("i");n=s.offset+s.howMany}else if(s.type=="remove"){for(let a=0;a<s.howMany;a++)t.push("r");n=s.offset,i+=s.howMany}else t.push(..."a".repeat(s.howMany).split("")),n=s.offset+s.howMany,i+=s.howMany}if(i<r)for(let s=0;s<r-i-n;s++)t.push("e");return t}function aS(r){const e=r.position&&r.position.root.rootName=="$graveyard",t=r.range&&r.range.root.rootName=="$graveyard";return!e&&!t}class lS{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new v("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let i=t-1;for(const[c,u]of this._gaps)e>c&&e<u&&(e=u),i>c&&i<u&&(i=c-1);if(i<n.baseVersion||e>this.lastOperation.baseVersion)return[];let s=this._baseVersionToOperationIndex.get(e);s===void 0&&(s=0);let a=this._baseVersionToOperationIndex.get(i);return a===void 0&&(a=this._operations.length-1),this._operations.slice(s,a+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function Lp(r,e){return!!(t=r.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(r.charAt(e));var t}function Op(r,e){return!!(t=r.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const cS=function(){const r=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${r}|${e}(?:\u200D${e})*`,"ug")}();function dS(r,e){const t=String(r).matchAll(cS);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Ud="$graveyard";class Rp{constructor(e){this.model=e,this.history=new lS,this.selection=new to(this),this.roots=new dn({idProperty:"rootName"}),this.differ=new rS(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Ud),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.differ.bufferOperation(i)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const i=n[0];i.isDocumentOperation&&this.history.addOperation(i)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,i,s,a)=>{const c={...n.getData(),range:s};this.differ.bufferMarkerChange(n.name,a,c),i===null&&n.on("change",(u,f)=>{const p=n.getData();this.differ.bufferMarkerChange(n.name,{...p,range:f},p)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Ud)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new v("model-document-createroot-name-exists",this,{name:t});const n=new Hd(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Ud)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=Kf(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,i=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(i)||t.createRange(i)}_validateSelectionRange(e){return Fp(e.start)&&Fp(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function Fp(r){const e=r.textNode;if(e){const t=e.data,n=r.offset-e.startOffset;return!Lp(t,n)&&!Op(t,n)}return!0}ie(Rp,R);class jp{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof xr?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,i=!1){const s=e instanceof xr?e.name:e;if(s.includes(","))throw new v("markercollection-incorrect-marker-name",this);const a=this._markers.get(s);if(a){const f=a.getData(),p=a.getRange();let w=!1;return p.isEqual(t)||(a._attachLiveRange(vo.fromRange(t)),w=!0),n!=a.managedUsingOperations&&(a._managedUsingOperations=n,w=!0),typeof i=="boolean"&&i!=a.affectsData&&(a._affectsData=i,w=!0),w&&this.fire("update:"+s,a,p,t,f),a}const c=vo.fromRange(t),u=new xr(s,c,n,i);return this._markers.set(s,u),this.fire("update:"+s,u,null,t,{...u.getData(),range:null}),u}_remove(e){const t=e instanceof xr?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire("update:"+t,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof xr?e.name:e,n=this._markers.get(t);if(!n)throw new v("markercollection-refresh-marker-not-exists",this);const i=n.getRange();this.fire("update:"+t,n,i,i,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}ie(jp,R);class xr{constructor(e,t,n,i){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=i}get managedUsingOperations(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new v("marker-destroyed",this);return this._liveRange.toRange()}is(e){return e==="marker"||e==="model:marker"}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}ie(xr,R);class Wt extends Gn{get type(){return"noop"}clone(){return new Wt(this.baseVersion)}getReversed(){return new Wt(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const oo={};oo[zt.className]=zt,oo[$t.className]=$t,oo[mn.className]=mn,oo[ct.className]=ct,oo[Wt.className]=Wt,oo[Gn.className]=Gn,oo[pn.className]=pn,oo[zo.className]=zo,oo[bt.className]=bt,oo[jt.className]=jt;class Gt extends le{constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new v("model-liveposition-root-not-rootelement",e);uS.call(this)}detach(){this.stopListening()}is(e){return e==="livePosition"||e==="model:livePosition"||e=="position"||e==="model:position"}toPosition(){return new le(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function uS(){this.listenTo(this.root.document.model,"applyOperation",(r,e)=>{const t=e[0];t.isDocumentOperation&&hS.call(this,t)},{priority:"low"})}function hS(r){const e=this.getTransformedByOperation(r);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}ie(Gt,R);class gS{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new v("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?te._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new te(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=Gt.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new v("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=Gt.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=Gt.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof lt)||!this._canMergeLeft(e))return;const t=Gt._createBefore(e);t.stickiness="toNext";const n=Gt.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=Gt._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=Gt._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof lt)||!this._canMergeRight(e))return;const t=Gt._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new v("insertcontent-invalid-insertion-position",this);this.position=le._createAt(t.nodeBefore,"end");const n=Gt.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=Gt._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=Gt._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof lt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof lt&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function Vp(r,e,t="auto"){const n=r.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return["before","after"].includes(t)?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const i=Ft(r.getSelectedBlocks());if(!i)return e.createRange(r.focus);if(i.isEmpty)return e.createRange(e.createPositionAt(i,0));const s=e.createPositionAfter(i);return r.focus.isTouching(s)?e.createRange(s):e.createRange(e.createPositionBefore(i))}function fS(r,e,t,n,i={}){if(!r.schema.isObject(e))throw new v("insertobject-element-not-an-object",r,{object:e});let s;s=t?t.is("selection")?t:r.createSelection(t,n):r.document.selection;let a=s;i.findOptimalPosition&&r.schema.isBlock(e)&&(a=r.createSelection(Vp(s,r,i.findOptimalPosition)));const c=Ft(s.getSelectedBlocks()),u={};return c&&Object.assign(u,r.schema.getAttributesWithProperty(c,"copyOnReplace",!0)),r.change(f=>{a.isCollapsed||r.deleteContent(a,{doNotAutoparagraph:!0});let p=e;const w=a.anchor.parent;!r.schema.checkChild(w,e)&&r.schema.checkChild(w,"paragraph")&&r.schema.checkChild("paragraph",e)&&(p=f.createElement("paragraph"),f.insert(e,p)),r.schema.setAllowedAttributes(p,u,f);const C=r.insertContent(p,a);return C.isCollapsed||i.setSelection&&function(S,D,I,B){const F=S.model;if(I=="after"){let Y=D.nextSibling;!(Y&&F.schema.checkChild(Y,"$text"))&&F.schema.checkChild(D.parent,"paragraph")&&(Y=S.createElement("paragraph"),F.schema.setAllowedAttributes(Y,B,S),F.insertContent(Y,S.createPositionAfter(D))),Y&&S.setSelection(Y,0)}else{if(I!="on")throw new v("insertobject-invalid-place-parameter-value",F);S.setSelection(D,"on")}}(f,e,i.setSelection,u),C})}function mS(r,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const i=r.schema;r.change(s=>{if(!t.doNotResetEntireContent&&function(f,p){const w=f.getLimitElement(p);if(!p.containsEntireContent(w))return!1;const C=p.getFirstRange();return C.start.parent==C.end.parent?!1:f.checkChild(w,"paragraph")}(i,e))return void function(f,p){const w=f.model.schema.getLimitElement(p);f.remove(f.createRangeIn(w)),$p(f,f.createPositionAt(w,0),p)}(s,e);const a={};if(!t.doNotAutoparagraph){const f=e.getSelectedElement();f&&Object.assign(a,i.getAttributesWithProperty(f,"copyOnReplace",!0))}const[c,u]=function(f){const p=f.root.document.model,w=f.start;let C=f.end;if(p.hasContent(f,{ignoreMarkers:!0})){const S=function(D){const I=D.parent,B=I.root.document.model.schema,F=I.getAncestors({parentFirst:!0,includeSelf:!0});for(const Y of F){if(B.isLimit(Y))return null;if(B.isBlock(Y))return Y}}(C);if(S&&C.isTouching(p.createPositionAt(S,0))){const D=p.createSelection(f);p.modifySelection(D,{direction:"backward"});const I=D.getLastPosition(),B=p.createRange(I,C);p.hasContent(B,{ignoreMarkers:!0})||(C=I)}}return[Gt.fromPosition(w,"toPrevious"),Gt.fromPosition(C,"toNext")]}(n);c.isTouching(u)||s.remove(s.createRange(c,u)),t.leaveUnmerged||(function(f,p,w){const C=f.model;if(!$d(f.model.schema,p,w))return;const[S,D]=function(I,B){const F=I.getAncestors(),Y=B.getAncestors();let oe=0;for(;F[oe]&&F[oe]==Y[oe];)oe++;return[F[oe],Y[oe]]}(p,w);!S||!D||(!C.hasContent(S,{ignoreMarkers:!0})&&C.hasContent(D,{ignoreMarkers:!0})?Up(f,p,w,S.parent):Hp(f,p,w,S.parent))}(s,c,u),i.removeDisallowedAttributes(c.parent.getChildren(),s)),Wp(s,e,c),!t.doNotAutoparagraph&&function(f,p){const w=f.checkChild(p,"$text"),C=f.checkChild(p,"paragraph");return!w&&C}(i,c)&&$p(s,c,e,a),c.detach(),u.detach()})}function Hp(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(s,e),r.merge(e);t.parent.isEmpty;){const a=t.parent;t=r.createPositionBefore(a),r.remove(a)}$d(r.model.schema,e,t)&&Hp(r,e,t,n)}}function Up(r,e,t,n){const i=e.parent,s=t.parent;if(i!=n&&s!=n){for(e=r.createPositionAfter(i),(t=r.createPositionBefore(s)).isEqual(e)||r.insert(i,t);e.parent.isEmpty;){const a=e.parent;e=r.createPositionBefore(a),r.remove(a)}t=r.createPositionBefore(s),function(a,c){const u=c.nodeBefore,f=c.nodeAfter;u.name!=f.name&&a.rename(u,f.name),a.clearAttributes(u),a.setAttributes(Object.fromEntries(f.getAttributes()),u),a.merge(c)}(r,t),$d(r.model.schema,e,t)&&Up(r,e,t,n)}}function $d(r,e,t){const n=e.parent,i=t.parent;return n!=i&&!r.isLimit(n)&&!r.isLimit(i)&&function(s,a,c){const u=new te(s,a);for(const f of u.getWalker())if(c.isLimit(f.item))return!1;return!0}(e,t,r)}function $p(r,e,t,n={}){const i=r.createElement("paragraph");r.model.schema.setAllowedAttributes(i,n,r),r.insert(i,e),Wp(r,t,r.createPositionAt(i,0))}function Wp(r,e,t){e instanceof to?r.setSelection(t):e.setTo(t)}const qp=' ,.?!:;"-()';function pS(r,e){const{isForward:t,walker:n,unit:i,schema:s,treatEmojiAsSingleUnit:a}=r,{type:c,item:u,nextPosition:f}=e;if(c=="text")return r.unit==="word"?function(p,w){let C=p.position.textNode;if(C){let S=p.position.offset-C.startOffset;for(;!kS(C.data,S,w)&&!wS(C,S,w);){p.next();const D=w?p.position.nodeAfter:p.position.nodeBefore;if(D&&D.is("$text")){const I=D.data.charAt(w?0:D.data.length-1);qp.includes(I)||(p.next(),C=p.position.textNode)}S=p.position.offset-C.startOffset}}return p.position}(n,t):function(p,w,C){const S=p.position.textNode;if(S){const D=S.data;let I=p.position.offset-S.startOffset;for(;Lp(D,I)||w=="character"&&Op(D,I)||C&&dS(D,I);)p.next(),I=p.position.offset-S.startOffset}return p.position}(n,i,a);if(c==(t?"elementStart":"elementEnd")){if(s.isSelectable(u))return le._createAt(u,t?"after":"before");if(s.checkChild(f,"$text"))return f}else{if(s.isLimit(u))return void n.skip(()=>!0);if(s.checkChild(f,"$text"))return f}}function bS(r,e){const t=r.root,n=le._createAt(t,e?"end":0);return e?new te(r,n):new te(n,r)}function kS(r,e,t){const n=e+(t?0:-1);return qp.includes(r.charAt(n))}function wS(r,e,t){return e===(t?r.endOffset:0)}function Gp(r,e){const t=[];Array.from(r.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(r.start)||n.start.isEqual(r.start))&&(n.end.isBefore(r.end)||n.end.isEqual(r.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let i=n;for(;i.parent&&i.isEmpty;){const s=e.createRangeOn(i);i=i.parent,e.remove(s)}})}function vS(r){r.document.registerPostFixer(e=>function(t,n){const i=n.document.selection,s=n.schema,a=[];let c=!1;for(const u of i.getRanges()){const f=_S(u,s);f&&!f.isEqual(u)?(a.push(f),c=!0):a.push(u)}c&&t.setSelection(function(u){const f=[...u],p=new Set;let w=1;for(;w<f.length;){const C=f[w],S=f.slice(0,w);for(const[D,I]of S.entries())if(!p.has(D)){if(C.isEqual(I))p.add(D);else if(C.isIntersecting(I)){p.add(D),p.add(w);const B=C.getJoined(I);f.push(B)}}w++}return f.filter((C,S)=>!p.has(S))}(a),{backward:i.isBackward})}(e,r))}function _S(r,e){return r.isCollapsed?function(t,n){const i=t.start,s=n.getNearestSelectionRange(i);if(!s){const c=i.getAncestors().reverse().find(u=>n.isObject(u));return c?te._createOn(c):null}if(!s.isCollapsed)return s;const a=s.start;return i.isEqual(a)?null:new te(a)}(r,e):function(t,n){const{start:i,end:s}=t,a=n.checkChild(i,"$text"),c=n.checkChild(s,"$text"),u=n.getLimitElement(i),f=n.getLimitElement(s);if(u===f){if(a&&c)return null;if(function(C,S,D){const I=C.nodeAfter&&!D.isLimit(C.nodeAfter)||D.checkChild(C,"$text"),B=S.nodeBefore&&!D.isLimit(S.nodeBefore)||D.checkChild(S,"$text");return I||B}(i,s,n)){const C=i.nodeAfter&&n.isSelectable(i.nodeAfter)?null:n.getNearestSelectionRange(i,"forward"),S=s.nodeBefore&&n.isSelectable(s.nodeBefore)?null:n.getNearestSelectionRange(s,"backward"),D=C?C.start:i,I=S?S.end:s;return new te(D,I)}}const p=u&&!u.is("rootElement"),w=f&&!f.is("rootElement");if(p||w){const C=i.nodeAfter&&s.nodeBefore&&i.nodeAfter.parent===s.nodeBefore.parent,S=p&&(!C||!Yp(i.nodeAfter,n)),D=w&&(!C||!Yp(s.nodeBefore,n));let I=i,B=s;return S&&(I=le._createBefore(Kp(u,n))),D&&(B=le._createAfter(Kp(f,n))),new te(I,B)}return null}(r,e)}function Kp(r,e){let t=r,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function Yp(r,e){return r&&e.isSelectable(r)}class Qp{constructor(){this.markers=new jp,this.document=new Rp(this),this.schema=new Ap,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),vS(this),this.document.registerPostFixer(mp)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new yr,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){v.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new yr):e instanceof yr||(e=new yr(e)):e=new yr,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){v.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(i,s,a,c){return i.change(u=>{let f;f=a?a instanceof No||a instanceof to?a:u.createSelection(a,c):i.document.selection,f.isCollapsed||i.deleteContent(f,{doNotAutoparagraph:!0});const p=new gS(i,u,f.anchor);let w;w=s.is("documentFragment")?s.getChildren():[s],p.handleNodes(w);const C=p.getSelectionRange();C&&(f instanceof to?u.setSelection(C):f.setTo(C));const S=p.getAffectedRange()||i.createRange(f.anchor);return p.destroy(),S})}(this,e,t,n)}insertObject(e,t,n,i){return fS(this,e,t,n,i)}deleteContent(e,t){mS(this,e,t)}modifySelection(e,t){(function(n,i,s={}){const a=n.schema,c=s.direction!="backward",u=s.unit?s.unit:"character",f=!!s.treatEmojiAsSingleUnit,p=i.focus,w=new wo({boundaries:bS(p,c),singleCharacters:!0,direction:c?"forward":"backward"}),C={walker:w,schema:a,isForward:c,unit:u,treatEmojiAsSingleUnit:f};let S;for(;S=w.next();){if(S.done)return;const D=pS(C,S.value);if(D)return void(i instanceof to?n.change(I=>{I.setSelectionFocus(D)}):i.setFocus(D))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(i=>{const s=i.createDocumentFragment(),a=n.getFirstRange();if(!a||a.isCollapsed)return s;const c=a.start.root,u=a.start.getCommonPath(a.end),f=c.getNodeByPath(u);let p;p=a.start.parent==a.end.parent?a:i.createRange(i.createPositionAt(f,a.start.path[u.length]),i.createPositionAt(f,a.end.path[u.length]+1));const w=p.end.offset-p.start.offset;for(const C of p.getItems({shallow:!0}))C.is("$textProxy")?i.appendText(C.data,C.getAttributes(),s):i.append(i.cloneElement(C,!0),s);if(p!=a){const C=a._getTransformedByMove(p.start,i.createPositionAt(s,0),w)[0],S=i.createRange(i.createPositionAt(s,0),C.start);Gp(i.createRange(C.end,i.createPositionAt(s,"end")),i),Gp(S,i)}return s})}(this,e)}hasContent(e,t={}){const n=e instanceof lt?te._createIn(e):e;if(n.isCollapsed)return!1;const{ignoreWhitespaces:i=!1,ignoreMarkers:s=!1}=t;if(!s){for(const a of this.markers.getMarkersIntersectingRange(n))if(a.affectsData)return!0}for(const a of n.getItems())if(this.schema.isContent(a)&&(!a.is("$textProxy")||!i||a.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new le(e,t,n)}createPositionAt(e,t){return le._createAt(e,t)}createPositionAfter(e){return le._createAfter(e)}createPositionBefore(e){return le._createBefore(e)}createRange(e,t){return new te(e,t)}createRangeIn(e){return te._createIn(e)}createRangeOn(e){return te._createOn(e)}createSelection(e,t,n){return new No(e,t,n)}createBatch(e){return new yr(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return oo[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new oS(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}ie(Qp,Ne);class CS extends qn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const i=t;t=(s,a)=>{this.editor.execute(i),a()}}super.set(e,t,n)}}class Zp{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new Zx({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new $f(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new rd(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new jE,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new Qp;const i=new D2;this.data=new Ep(this.model,i),this.editing=new Cp(this.model,i),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new tS([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new CS(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new v("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new v("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],i=e.get("extraPlugins")||[],s=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(i),n,s)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){v.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}ie(Zp,Ne);class AS{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(Wd(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new v("componentfactory-item-missing",this,{name:e});return this._components.get(Wd(e)).callback(this.editor.locale)}has(e){return this._components.has(Wd(e))}}function Wd(r){return String(r).toLowerCase()}class Jp{constructor(e){this.editor=e,this.componentFactory=new AS(e),this.focusTracker=new In,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}ie(Jp,Ne);const yS={setData(r){this.data.set(r)},getData(r){return this.data.get(r)}},xS=yS;function ES(r,e){r instanceof HTMLTextAreaElement&&(r.value=e),r.innerHTML=e}const SS={updateSourceElement(r=this.data.get()){if(!this.sourceElement)throw new v("editor-missing-sourceelement",this);const e=this.config.get("updateSourceElementOnDestroy"),t=this.sourceElement instanceof HTMLTextAreaElement;ES(this.sourceElement,e||t?r:"")}};class Xp extends Ds{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new dn({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new v("pendingactions-add-invalid-message",this);const t=Object.create(Ne);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const eb='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',Lt={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:eb};function qd({emitter:r,activator:e,callback:t,contextElements:n}){r.listenTo(document,"mousedown",(i,s)=>{if(!e())return;const a=typeof s.composedPath=="function"?s.composedPath():[];for(const c of n)if(c.contains(s.target)||a.includes(c))return;t()})}function Gd(r){r.set("_isCssTransitionsDisabled",!1),r.disableCssTransitions=()=>{r._isCssTransitionsDisabled=!0},r.enableCssTransitions=()=>{r._isCssTransitionsDisabled=!1},r.extendTemplate({attributes:{class:[r.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function Kd({view:r}){r.listenTo(r.element,"submit",(e,t)=>{t.preventDefault(),r.fire("submit")},{useCapture:!0})}class Jo extends dn{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,i)=>{this._renderViewIntoCollectionParent(n,i)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new v("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const i of e)n.delegate(i).to(t);this.on("add",(n,i)=>{for(const s of e)i.delegate(s).to(t)}),this.on("remove",(n,i)=>{for(const s of e)i.stopDelegating(s,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var tb=g(4793),DS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(tb.Z,DS),tb.Z.locals;class ze{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new dn,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Tn.bind(this,this)}createCollection(e){const t=new Jo(e);return this._viewCollections.add(t),t}registerChild(e){$n(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){$n(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Tn(e)}extendTemplate(e){Tn.extend(this.template,e)}render(){if(this.isRendered)throw new v("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}ie(ze,Ns),ie(ze,Ne);class Tn{constructor(e){Object.assign(this,rb(ib(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new v("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)dl(n)?yield n:Yd(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,i)=>new IS({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:i}),if:(n,i,s)=>new nb({observable:e,emitter:t,attribute:n,valueIfTrue:i,callback:s})}}static extend(e,t){if(e._isRendered)throw new v("template-extend-render",[this,e]);cb(e,rb(ib(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new v("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),cl(this.text)?this._bindToObservable({schema:this.text,updater:TS(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,i,s;if(!this.attributes)return;const a=e.node,c=e.revertData;for(t in this.attributes)if(i=a.getAttribute(t),n=this.attributes[t],c&&(c.attributes[t]=i),s=be(n[0])&&n[0].ns?n[0].ns:null,cl(n)){const u=s?n[0].value:n;c&&db(t)&&u.unshift(i),this._bindToObservable({schema:u,updater:MS(a,t,s),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(c&&i&&db(t)&&n.unshift(i),n=n.map(u=>u&&u.value||u).reduce((u,f)=>u.concat(f),[]).reduce(ab,""),Er(n)||a.setAttributeNS(s,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const i in e){const s=e[i];cl(s)?this._bindToObservable({schema:[s],updater:BS(n,i),data:t}):n.style[i]=s}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,i=e.isApplying;let s=0;for(const a of this.children)if(Qd(a)){if(!i){a.setParent(t);for(const c of a)n.appendChild(c.element)}}else if(dl(a))i||(a.isRendered||a.render(),n.appendChild(a.element));else if(Cr(a))n.appendChild(a);else if(i){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),a._renderNode({node:n.childNodes[s++],isApplying:!0,revertData:c})}else n.appendChild(a.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(i=>{const[s,a]=t.split("@");return i.activateDomEventListener(s,a,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const i=n.revertData;ob(e,t,n);const s=e.filter(a=>!Er(a)).filter(a=>a.observable).map(a=>a.activateAttributeListener(e,t,n));i&&i.bindings.push(s)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const i of n)i();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const i=t.attributes[n];i===null?e.removeAttribute(n):e.setAttribute(n,i)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}ie(Tn,R);class Hs{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const i=()=>ob(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,i),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,i)}}}class IS extends Hs{activateDomEventListener(e,t,n){const i=(s,a)=>{t&&!a.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(a):this.observable.fire(this.eventNameOrFunction,a))};return this.emitter.listenTo(n.node,e,i),()=>{this.emitter.stopListening(n.node,e,i)}}}class nb extends Hs{getValue(e){return!Er(super.getValue(e))&&(this.valueIfTrue||!0)}}function cl(r){return!!r&&(r.value&&(r=r.value),Array.isArray(r)?r.some(cl):r instanceof Hs)}function ob(r,e,{node:t}){let n=function(i,s){return i.map(a=>a instanceof Hs?a.getValue(s):a)}(r,t);n=r.length==1&&r[0]instanceof nb?n[0]:n.reduce(ab,""),Er(n)?e.remove():e.set(n)}function TS(r){return{set(e){r.textContent=e},remove(){r.textContent=""}}}function MS(r,e,t){return{set(n){r.setAttributeNS(t,e,n)},remove(){r.removeAttributeNS(t,e)}}}function BS(r,e){return{set(t){r.style[e]=t},remove(){r.style[e]=null}}}function ib(r){return Uf(r,e=>{if(e&&(e instanceof Hs||Yd(e)||dl(e)||Qd(e)))return e})}function rb(r){if(typeof r=="string"?r=function(e){return{text:[e]}}(r):r.text&&function(e){e.text=Ut(e.text)}(r),r.on&&(r.eventListeners=function(e){for(const t in e)sb(e,t);return e}(r.on),delete r.on),!r.text){r.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=Ut(t[n].value)),sb(t,n)}(r.attributes);const e=[];if(r.children)if(Qd(r.children))e.push(r.children);else for(const t of r.children)Yd(t)||dl(t)||Cr(t)?e.push(t):e.push(new Tn(t));r.children=e}return r}function sb(r,e){r[e]=Ut(r[e])}function ab(r,e){return Er(e)?r:Er(r)?e:`${r} ${e}`}function lb(r,e){for(const t in e)r[t]?r[t].push(...e[t]):r[t]=e[t]}function cb(r,e){if(e.attributes&&(r.attributes||(r.attributes={}),lb(r.attributes,e.attributes)),e.eventListeners&&(r.eventListeners||(r.eventListeners={}),lb(r.eventListeners,e.eventListeners)),e.text&&r.text.push(...e.text),e.children&&e.children.length){if(r.children.length!=e.children.length)throw new v("ui-template-extend-children-mismatch",r);let t=0;for(const n of e.children)cb(r.children[t++],n)}}function Er(r){return!r&&r!==0}function dl(r){return r instanceof ze}function Yd(r){return r instanceof Tn}function Qd(r){return r instanceof Jo}function db(r){return r=="class"||r=="style"}class NS extends Jo{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Tn({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=$m(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var ub=g(6574),PS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(ub.Z,PS),ub.Z.locals;class ul extends ze{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var hb=g(3332),zS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(hb.Z,zS),hb.Z.locals;class gb extends ze{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",n=>"ck-tooltip_"+n),t.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}var fb=g(4906),LS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(fb.Z,LS),fb.Z.locals;class Je extends ze{constructor(e){super(e);const t=this.bindTemplate,n=A();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new ul,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const i={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",s=>!s),t.if("isVisible","ck-hidden",s=>!s),t.to("isOn",s=>s?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",s=>s||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,s=>!s),"aria-pressed":t.to("isOn",s=>!!this.isToggleable&&String(!!s))},children:this.children,on:{click:t.to(s=>{this.isEnabled?this.fire("execute"):s.preventDefault()})}};at.isSafari&&(i.on.mousedown=t.to(s=>{this.focus(),s.preventDefault()})),this.setTemplate(i)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new gb;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new ze,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new ze;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>cm(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=cm(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var mb=g(5332),OS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(mb.Z,OS),mb.Z.locals;class Us extends Je{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new ze;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}function RS(r){return typeof r=="string"?{model:r,label:r,hasBorder:!1,view:{name:"span",styles:{color:r}}}:{model:r.color,label:r.label||r.color,hasBorder:r.hasBorder!==void 0&&r.hasBorder,view:{name:"span",styles:{color:`${r.color}`}}}}class pb extends Je{constructor(e){super(e);const t=this.bindTemplate;this.set("color"),this.set("hasBorder"),this.icon='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path class="ck-icon__fill" d="M16.935 5.328a2 2 0 0 1 0 2.829l-7.778 7.778a2 2 0 0 1-2.829 0L3.5 13.107a1.999 1.999 0 1 1 2.828-2.829l.707.707a1 1 0 0 0 1.414 0l5.658-5.657a2 2 0 0 1 2.828 0z"/><path d="M14.814 6.035 8.448 12.4a1 1 0 0 1-1.414 0l-1.413-1.415A1 1 0 1 0 4.207 12.4l2.829 2.829a1 1 0 0 0 1.414 0l7.778-7.778a1 1 0 1 0-1.414-1.415z"/></svg>',this.extendTemplate({attributes:{style:{backgroundColor:t.to("color")},class:["ck","ck-color-grid__tile",t.if("hasBorder","ck-color-table__color-tile_bordered")]}})}render(){super.render(),this.iconView.fillColor="hsl(0, 0%, 100%)"}}function bb(r){return!!(r&&r.getClientRects&&r.getClientRects().length)}class Lo{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const i of n)e.keystrokeHandler.set(i,(s,a)=>{this[t](),a()})}}get first(){return this.focusables.find(Zd)||null}get last(){return this.focusables.filter(Zd).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const i=t.element===this.focusTracker.focusedElement;return i&&(e=n),i}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let i=(t+n+e)%n;do{const s=this.focusables.get(i);if(Zd(s))return s;i=(i+n+e)%n}while(i!==t);return null}}function Zd(r){return!(!r.focus||!bb(r.element))}var kb=g(6781),FS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(kb.Z,FS),kb.Z.locals;class wb extends ze{constructor(e,t){super(e);const n=t&&t.colorDefinitions||[],i={};t&&t.columns&&(i.gridTemplateColumns=`repeat( ${t.columns}, 1fr)`),this.set("selectedColor"),this.items=this.createCollection(),this.focusTracker=new In,this.keystrokes=new qn,this._focusCycler=new Lo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowleft",focusNext:"arrowright"}}),this.items.on("add",(s,a)=>{a.isOn=a.color===this.selectedColor}),n.forEach(s=>{const a=new pb;a.set({color:s.color,label:s.label,tooltip:!0,hasBorder:s.options.hasBorder}),a.on("execute",()=>{this.fire("execute",{value:s.color,hasBorder:s.options.hasBorder,label:s.label})}),this.items.add(a)}),this.setTemplate({tag:"div",children:this.items,attributes:{class:["ck","ck-color-grid"],style:i}}),this.on("change:selectedColor",(s,a,c)=>{for(const u of this.items)u.isOn=u.color===c})}focus(){this.items.length&&this.items.first.focus()}focusLast(){this.items.length&&this.items.last.focus()}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}}const Jd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Xd extends Je{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new ul;return e.content=Jd,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var vb=g(7686),jS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(vb.Z,jS),vb.Z.locals;class eu extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new qn,this.focusTracker=new In,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new Je;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new Je,t=e.bindTemplate;return e.icon=Jd,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class VS extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&(typeof this.children.first.focus=="function"?this.children.first.focus():E("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this}))}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var _b=g(5485),HS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(_b.Z,HS),_b.Z.locals;function Cb({element:r,target:e,positions:t,limiter:n,fitInViewport:i,viewportOffsetConfig:s}){_s(e)&&(e=e()),_s(n)&&(n=n());const a=function(C){return C&&C.parentNode?C.offsetParent===Ct.document.body?null:C.offsetParent:null}(r),c=new ft(r),u=new ft(e);let f;const p=i&&function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const S=new ft(Ct.window);return S.top+=C.top,S.height-=C.top,S.bottom-=C.bottom,S.height-=C.bottom,S}(s)||null,w={targetRect:u,elementRect:c,positionedElementAncestor:a,viewportRect:p};if(n||i){const C=n&&new ft(n).getVisible();Object.assign(w,{limiterRect:C,viewportRect:p}),f=function(S,D){const{elementRect:I}=D,B=I.getArea(),F=S.map(ve=>new tu(ve,D)).filter(ve=>!!ve.name);let Y=0,oe=null;for(const ve of F){const{limiterIntersectionArea:Te,viewportIntersectionArea:ot}=ve;if(Te===B)return ve;const Re=ot**2+Te**2;Re>Y&&(Y=Re,oe=ve)}return oe}(t,w)||new tu(t[0],w)}else f=new tu(t[0],w);return f}function Ab(r){const{scrollX:e,scrollY:t}=Ct.window;return r.clone().moveBy(e,t)}class tu{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:i,top:s,name:a,config:c}=n;this.name=a,this.config=c,this._positioningFunctionCorrdinates={left:i,top:s},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Ab(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Ab(new ft(t)),i=Wm(t);let s=0,a=0;s-=n.left,a-=n.top,s+=t.scrollLeft,a+=t.scrollTop,s-=i.left,a-=i.top,e.moveBy(s,a)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class Sr extends ze{constructor(e,t,n){super(e);const i=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new qn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",i.to("class"),i.if("isEnabled","ck-disabled",s=>!s)],id:i.to("id"),"aria-describedby":i.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen?(this.panelPosition==="auto"?this.panelView.position=Sr._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition,this.panelView.focus()):this.focus()}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:i,northEast:s,northWest:a,southMiddleEast:c,southMiddleWest:u,northMiddleEast:f,northMiddleWest:p}=Sr.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,i,c,u,e,s,a,f,p,t]:[i,n,u,c,e,a,s,p,f,t]}}Sr.defaultPanelPositions={south:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/2,name:"s"}),southEast:r=>({top:r.bottom,left:r.left,name:"se"}),southWest:(r,e)=>({top:r.bottom,left:r.left-e.width+r.width,name:"sw"}),southMiddleEast:(r,e)=>({top:r.bottom,left:r.left-(e.width-r.width)/4,name:"sme"}),southMiddleWest:(r,e)=>({top:r.bottom,left:r.left-3*(e.width-r.width)/4,name:"smw"}),north:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/2,name:"n"}),northEast:(r,e)=>({top:r.top-e.height,left:r.left,name:"ne"}),northWest:(r,e)=>({top:r.top-e.height,left:r.left-e.width+r.width,name:"nw"}),northMiddleEast:(r,e)=>({top:r.top-e.height,left:r.left-(e.width-r.width)/4,name:"nme"}),northMiddleWest:(r,e)=>({top:r.top-e.height,left:r.left-3*(e.width-r.width)/4,name:"nmw"})},Sr._getOptimalPosition=Cb;class yb extends ze{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class US extends ze{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}var xb=g(5542),$S={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(xb.Z,$S),xb.Z.locals;class nu extends ze{constructor(e,t){super(e);const n=this.bindTemplate,i=this.t;this.options=t||{},this.set("ariaLabel",i("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new In,this.keystrokes=new qn,this.set("class"),this.set("isCompact",!1),this.itemsView=new WS(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const s=e.uiLanguageDirection==="rtl";this._focusCycler=new Lo({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[s?"arrowright":"arrowleft","arrowup"],focusNext:[s?"arrowleft":"arrowright","arrowdown"]}});const a=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var c;this.options.shouldGroupWhenFull&&this.options.isFloating&&a.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:a,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(c=this,c.bindTemplate.to(u=>{u.target===c.element&&u.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new GS(this):new qS(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=function(a){return Array.isArray(a)?{items:a,removeItems:[]}:a?Object.assign({items:[],removeItems:[]},a):{items:[],removeItems:[]}}(e),i=n.items.filter((a,c,u)=>a==="|"||n.removeItems.indexOf(a)===-1&&(a==="-"?!this.options.shouldGroupWhenFull||(E("toolbarview-line-break-ignored-when-grouping-items",u),!1):!!t.has(a)||(E("toolbarview-item-unavailable",{name:a}),!1))),s=this._cleanSeparators(i).map(a=>a==="|"?new yb:a==="-"?new US:t.create(a));this.items.addMany(s)}_cleanSeparators(e){const t=a=>a!=="-"&&a!=="|",n=e.length,i=e.findIndex(t),s=n-e.slice().reverse().findIndex(t);return e.slice(i,s).filter((a,c,u)=>t(a)?!0:!(c>0&&u[c-1]===a))}}class WS extends ze{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class qS{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class GS{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const i=n.index;for(const s of n.removed)i>=this.ungroupedItems.length?this.groupedItems.remove(s):this.ungroupedItems.remove(s);for(let s=i;s<i+n.added.length;s++){const a=n.added[s-i];s>this.ungroupedItems.length?this.groupedItems.add(a,s-this.ungroupedItems.length):this.ungroupedItems.add(a,s)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!bb(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new ft(e.lastChild),i=new ft(e);if(!this.cachedPadding){const s=Ct.window.getComputedStyle(e),a=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(s[a])}return t==="ltr"?n.right>i.right-this.cachedPadding:n.left<i.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new At(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new yb),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Mn(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",ou(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:eb}),n.toolbarView.items.bindTo(this.groupedItems).using(i=>i),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Eb=g(1046),KS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Eb.Z,KS),Eb.Z.locals;class YS extends ze{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new In,this.keystrokes=new qn,this._focusCycler=new Lo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class Sb extends ze{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class QS extends ze{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Db=g(7339),ZS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Db.Z,ZS),Db.Z.locals;var Ib=g(3949),JS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Ib.Z,JS),Ib.Z.locals;function Mn(r,e=Xd){const t=new e(r),n=new VS(r),i=new Sr(r,t,n);return t.bind("isEnabled").to(i),t instanceof Xd?t.bind("isOn").to(i,"isOpen"):t.arrowView.bind("isOn").to(i,"isOpen"),function(s){(function(a){a.on("render",()=>{qd({emitter:a,activator:()=>a.isOpen,callback:()=>{a.isOpen=!1},contextElements:[a.element]})})})(s),function(a){a.on("execute",c=>{c.source instanceof Us||(a.isOpen=!1)})}(s),function(a){a.keystrokes.set("arrowdown",(c,u)=>{a.isOpen&&(a.panelView.focus(),u())}),a.keystrokes.set("arrowup",(c,u)=>{a.isOpen&&(a.panelView.focusLast(),u())})}(s)}(i),i}function ou(r,e,t={}){const n=r.locale,i=n.t,s=r.toolbarView=new nu(n);s.set("ariaLabel",i("Dropdown toolbar")),r.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(a=>s.items.add(a)),t.enableActiveItemFocusOnDropdownOpen&&hl(r,()=>s.items.find(a=>a.isOn)),r.panelView.children.add(s),s.items.delegate("execute").to(r)}function $s(r,e){const t=r.locale,n=r.listView=new YS(t);n.items.bindTo(e).using(({type:i,model:s})=>{if(i==="separator")return new QS(t);if(i==="button"||i==="switchbutton"){const a=new Sb(t);let c;return c=i==="button"?new Je(t):new Us(t),c.bind(...Object.keys(s)).to(s),c.delegate("execute").to(a),a.children.add(c),a}}),r.panelView.children.add(n),n.items.delegate("execute").to(r),hl(r,()=>n.items.find(i=>i instanceof Sb&&i.children.first.isOn))}function hl(r,e){r.on("change:isOpen",()=>{if(!r.isOpen)return;const t=e();t&&(typeof t.focus=="function"?t.focus():E("ui-dropdown-focus-child-on-open-child-missing-focus",{view:t}))},{priority:"low"})}var Tb=g(9688),XS={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Tb.Z,XS),Tb.Z.locals;class eD extends ze{constructor(e){super(e),this.body=new NS(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var Mb=g(3662),tD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Mb.Z,tD),Mb.Z.locals;class Bb extends ze{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${A()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class nD extends ze{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(i=>{const s=e.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",s),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",s)})}e.isRenderingInProgress?function n(i){e.once("change:isRenderingInProgress",(s,a,c)=>{c?n(i):t(i)})}(this):t(this)}}class oD extends nD{constructor(e,t,n,i={}){super(e,t,n);const s=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>s("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}var Nb=g(8847),iD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Nb.Z,iD),Nb.Z.locals;var Pb=g(4879),rD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Pb.Z,rD),Pb.Z.locals;class zb extends ze{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new In,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class sD extends zb{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}class aD extends zb{constructor(e,{min:t,max:n,step:i}={}){super(e);const s=this.bindTemplate;this.set("min",t),this.set("max",n),this.set("step",i),this.extendTemplate({attributes:{type:"number",class:["ck-input-number"],min:s.to("min"),max:s.to("max"),step:s.to("step")}})}}var Lb=g(2577),lD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Lb.Z,lD),Lb.Z.locals;class gl extends ze{constructor(e,t){super(e);const n=`ck-labeled-field-view-${A()}`,i=`ck-labeled-field-view-status-${A()}`;this.fieldView=t(this,n,i),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(i),this.bind("_statusText").to(this,"errorText",this,"infoText",(a,c)=>a||c);const s=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",s.to("class"),s.if("isEnabled","ck-disabled",a=>!a),s.if("isEmpty","ck-labeled-field-view_empty"),s.if("isFocused","ck-labeled-field-view_focused"),s.if("placeholder","ck-labeled-field-view_placeholder"),s.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new Bb(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new ze(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",i=>!i)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function iu(r,e,t){const n=new sD(r.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}function cD(r,e,t){const n=new aD(r.locale);return n.set({id:e,ariaDescribedById:t,inputMode:"numeric"}),n.bind("isReadOnly").to(r,"isEnabled",i=>!i),n.bind("hasError").to(r,"errorText",i=>!!i),n.on("input",()=>{r.errorText=null}),r.bind("isEmpty","isFocused","placeholder").to(n),n}class ru extends Ds{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class Dr{constructor(e,t){t&&Dd(this,t),e&&this.set(e)}}function Ob(r){return e=>e+r}ie(Dr,Ne);var Rb=g(8793),dD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Rb.Z,dD),Rb.Z.locals;const Fb=Ob("px"),jb=Ct.document.body;class bn extends ze{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",Fb),left:t.to("left",Fb)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=bn.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:jb,fitInViewport:!0},e),i=bn._getOptimalPosition(n),s=parseInt(i.left),a=parseInt(i.top),{name:c,config:u={}}=i,{withArrow:f=!0}=u;Object.assign(this,{top:a,left:s,position:c,withArrow:f})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=su(e.target),n=e.limiter?su(e.limiter):jb;this.listenTo(Ct.document,"scroll",(i,s)=>{const a=s.target,c=t&&a.contains(t),u=n&&a.contains(n);!c&&!u&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(Ct.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(Ct.document,"scroll"),this.stopListening(Ct.window,"resize")}}function su(r){return Pi(r)?r:rl(r)?r.commonAncestorContainer:typeof r=="function"?su(r()):null}bn.arrowHorizontalOffset=25,bn.arrowVerticalOffset=10,bn.stickyVerticalOffset=20,bn._getOptimalPosition=Cb,bn.defaultPositions=function({horizontalOffset:r=bn.arrowHorizontalOffset,verticalOffset:e=bn.arrowVerticalOffset,stickyVerticalOffset:t=bn.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(a,c)=>({top:i(a,c),left:a.left-r,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.left-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(a,c)=>({top:i(a,c),left:a.left-c.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.left-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(a,c)=>({top:i(a,c),left:a.left-c.width+r,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(a,c)=>({top:i(a,c),left:a.left+a.width/2-r,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.left+a.width/2-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(a,c)=>({top:i(a,c),left:a.left+a.width/2-c.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.left+a.width/2-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(a,c)=>({top:i(a,c),left:a.left+a.width/2-c.width+r,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(a,c)=>({top:i(a,c),left:a.right-r,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(a,c)=>({top:i(a,c),left:a.right-.25*c.width-r,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(a,c)=>({top:i(a,c),left:a.right-c.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(a,c)=>({top:i(a,c),left:a.right-.75*c.width+r,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(a,c)=>({top:i(a,c),left:a.right-c.width+r,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(a,c)=>({top:s(a),left:a.left-r,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(a,c)=>({top:s(a),left:a.left-c.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(a,c)=>({top:s(a),left:a.left-c.width+r,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(a,c)=>({top:s(a),left:a.left+a.width/2-r,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.left+a.width/2-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.left+a.width/2-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(a,c)=>({top:s(a),left:a.left+a.width/2-c.width+r,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(a,c)=>({top:s(a),left:a.right-r,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(a,c)=>({top:s(a),left:a.right-.25*c.width-r,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(a,c)=>({top:s(a),left:a.right-c.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(a,c)=>({top:s(a),left:a.right-.75*c.width+r,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(a,c)=>({top:s(a),left:a.right-c.width+r,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(a,c,u)=>a.getIntersection(u)?{top:u.top+t,left:a.left+a.width/2-c.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function i(a,c){return a.top-c.height-e}function s(a){return a.bottom+e}}();var Vb=g(4650),uD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Vb.Z,uD),Vb.Z.locals;var Hb=g(7676),hD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Hb.Z,hD),Hb.Z.locals;const fl=Ob("px");class ml extends Z{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new bn(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new v("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new v("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new v("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new gD(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const s=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[s,i])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new fD(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class gD extends ze{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new In,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new Je(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class fD extends ze{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",fl),left:n.to("left",fl),width:n.to("width",fl),height:n.to("height",fl)}},children:this.content}),this.on("change:numberOfPanels",(i,s,a,c)=>{a>c?this._addPanels(a-c):this._removePanels(c-a),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ze;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:i}=new ft(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:i})}}}var Ub=g(5868),mD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Ub.Z,mD),Ub.Z.locals;var $b=g(9695),pD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()($b.Z,pD),$b.Z.locals;var Wb=g(4717),bD={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Me()(Wb.Z,bD),Wb.Z.locals;const pl=new WeakMap;function qb(r){const{view:e,element:t,text:n,isDirectHost:i=!0,keepOnFocus:s=!1}=r,a=e.document;pl.has(a)||(pl.set(a,new Map),a.registerPostFixer(c=>Gb(a,c))),pl.get(a).set(t,{text:n,isDirectHost:i,keepOnFocus:s,hostElement:i?t:null}),e.change(c=>Gb(a,c))}function kD(r,e){return!!e.hasClass("ck-placeholder")&&(r.removeClass("ck-placeholder",e),!0)}function Gb(r,e){const t=pl.get(r),n=[];let i=!1;for(const[s,a]of t)a.isDirectHost&&(n.push(s),Kb(e,s,a)&&(i=!0));for(const[s,a]of t){if(a.isDirectHost)continue;const c=wD(s);c&&(n.includes(c)||(a.hostElement=c,Kb(e,s,a)&&(i=!0)))}return i}function Kb(r,e,t){const{text:n,isDirectHost:i,hostElement:s}=t;let a=!1;return s.getAttribute("data-placeholder")!==n&&(r.setAttribute("data-placeholder",n,s),a=!0),(i||e.childCount==1)&&function(c,u){if(!c.isAttached()||Array.from(c.getChildren()).some(C=>!C.is("uiElement")))return!1;if(u)return!0;const p=c.document;if(!p.isFocused)return!0;const w=p.selection.anchor;return w&&w.parent!==c}(s,t.keepOnFocus)?function(c,u){return!u.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",u),!0)}(r,s)&&(a=!0):kD(r,s)&&(a=!0),a}function wD(r){if(r.childCount){const e=r.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const au=new Map;function Xe(r,e,t){let n=au.get(r);n||(n=new Map,au.set(r,n)),n.set(e,t)}function vD(r){return[r]}function Yb(r,e,t={}){const n=function(i,s){const a=au.get(i);return a&&a.has(s)?a.get(s):vD}(r.constructor,e.constructor);try{return n(r=r.clone(),e,t)}catch(i){throw i}}function _D(r,e,t){r=r.slice(),e=e.slice();const n=new CD(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(r),n.setOriginalOperations(e);const i=n.originalOperations;if(r.length==0||e.length==0)return{operationsA:r,operationsB:e,originalOperations:i};const s=new WeakMap;for(const u of r)s.set(u,0);const a={nextBaseVersionA:r[r.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:r.length,originalOperationsBCount:e.length};let c=0;for(;c<r.length;){const u=r[c],f=s.get(u);if(f==e.length){c++;continue}const p=e[f],w=Yb(u,p,n.getContext(u,p,!0)),C=Yb(p,u,n.getContext(p,u,!1));n.updateRelation(u,p),n.setOriginalOperations(w,u),n.setOriginalOperations(C,p);for(const S of w)s.set(S,f+C.length);r.splice(c,1,...w),e.splice(f,1,...C)}if(t.padWithNoOps){const u=r.length-a.originalOperationsACount,f=e.length-a.originalOperationsBCount;Zb(r,f-u),Zb(e,u-f)}return Qb(r,a.nextBaseVersionB),Qb(e,a.nextBaseVersionA),{operationsA:r,operationsB:e,originalOperations:i}}class CD{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const i of e)this.originalOperations.set(i,n||i)}updateRelation(e,t){switch(e.constructor){case ct:switch(t.constructor){case jt:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case ct:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case bt:switch(t.constructor){case jt:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case ct:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=te._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const i=n.end.offset-e.splitPosition.offset,s=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:i,offset:s})}}}break;case jt:switch(t.constructor){case jt:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case bt:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case mn:{const n=e.newRange;if(!n)return;switch(t.constructor){case ct:{const i=te._createFromPositionAndShift(t.sourcePosition,t.howMany),s=i.containsPosition(n.start)||i.start.isEqual(n.start),a=i.containsPosition(n.end)||i.end.isEqual(n.end);!s&&!a||i.containsRange(n)||this._setRelation(e,t,{side:s?"left":"right",path:s?n.start.path.slice():n.end.path.slice()});break}case jt:{const i=n.start.isEqual(t.targetPosition),s=n.start.isEqual(t.deletionPosition),a=n.end.isEqual(t.deletionPosition),c=n.end.isEqual(t.sourcePosition);(i||s||a||c)&&this._setRelation(e,t,{wasInLeftElement:i,wasStartBeforeMergedElement:s,wasEndBeforeMergedElement:a,wasInRightElement:c});break}}break}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),i=this._history.getUndoneOperation(n);if(!i)return null;const s=this.originalOperations.get(e),a=this._relations.get(s);return a&&a.get(i)||null}_setRelation(e,t,n){const i=this.originalOperations.get(e),s=this.originalOperations.get(t);let a=this._relations.get(i);a||(a=new Map,this._relations.set(i,a)),a.set(s,n)}}function Qb(r,e){for(const t of r)t.baseVersion=e++}function Zb(r,e){for(let t=0;t<e;t++)r.push(new Wt(0))}function Jb(r,e,t){const n=r.nodes.getNode(0).getAttribute(e);if(n==t)return null;const i=new te(r.position,r.position.getShiftedBy(r.howMany));return new zt(i,e,n,t,0)}function Xb(r,e){return r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function Ir(r,e){const t=[];for(let n=0;n<r.length;n++){const i=r[n],s=new ct(i.start,i.end.offset-i.start.offset,e,0);t.push(s);for(let a=n+1;a<r.length;a++)r[a]=r[a]._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)[0];e=e._getTransformedByMove(s.sourcePosition,s.targetPosition,s.howMany)}return t}Xe(zt,zt,(r,e,t)=>{if(r.key===e.key&&r.range.start.hasSameParentAs(e.range.start)){const n=r.range.getDifference(e.range).map(s=>new zt(s,r.key,r.oldValue,r.newValue,0)),i=r.range.getIntersection(e.range);return i&&t.aIsStrong&&n.push(new zt(i,e.key,e.newValue,r.newValue,0)),n.length==0?[new Wt(0)]:n}return[r]}),Xe(zt,$t,(r,e)=>{if(r.range.start.hasSameParentAs(e.position)&&r.range.containsPosition(e.position)){const t=r.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new zt(n,r.key,r.oldValue,r.newValue,r.baseVersion));if(e.shouldReceiveAttributes){const n=Jb(e,r.key,r.oldValue);n&&t.unshift(n)}return t}return r.range=r.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[r]}),Xe(zt,jt,(r,e)=>{const t=[];r.range.start.hasSameParentAs(e.deletionPosition)&&(r.range.containsPosition(e.deletionPosition)||r.range.start.isEqual(e.deletionPosition))&&t.push(te._createFromPositionAndShift(e.graveyardPosition,1));const n=r.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(i=>new zt(i,r.key,r.oldValue,r.newValue,r.baseVersion))}),Xe(zt,ct,(r,e)=>function(n,i){const s=te._createFromPositionAndShift(i.sourcePosition,i.howMany);let a=null,c=[];s.containsRange(n,!0)?a=n:n.start.hasSameParentAs(s.start)?(c=n.getDifference(s),a=n.getIntersection(s)):c=[n];const u=[];for(let f of c){f=f._getTransformedByDeletion(i.sourcePosition,i.howMany);const p=i.getMovedRangeStart(),w=f.start.hasSameParentAs(p);f=f._getTransformedByInsertion(p,i.howMany,w),u.push(...f)}return a&&u.push(a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany,!1)[0]),u}(r.range,e).map(n=>new zt(n,r.key,r.oldValue,r.newValue,r.baseVersion))),Xe(zt,bt,(r,e)=>{if(r.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.range.end.offset++,[r];if(r.range.start.hasSameParentAs(e.splitPosition)&&r.range.containsPosition(e.splitPosition)){const t=r.clone();return t.range=new te(e.moveTargetPosition.clone(),r.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),r.range.end=e.splitPosition.clone(),r.range.end.stickiness="toPrevious",[r,t]}return r.range=r.range._getTransformedBySplitOperation(e),[r]}),Xe($t,zt,(r,e)=>{const t=[r];if(r.shouldReceiveAttributes&&r.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(r.position)){const n=Jb(r,e.key,e.newValue);n&&t.push(n)}return t}),Xe($t,$t,(r,e,t)=>(r.position.isEqual(e.position)&&t.aIsStrong||(r.position=r.position._getTransformedByInsertOperation(e)),[r])),Xe($t,ct,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Xe($t,bt,(r,e)=>(r.position=r.position._getTransformedBySplitOperation(e),[r])),Xe($t,jt,(r,e)=>(r.position=r.position._getTransformedByMergeOperation(e),[r])),Xe(mn,$t,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByInsertOperation(e)[0]),r.newRange&&(r.newRange=r.newRange._getTransformedByInsertOperation(e)[0]),[r])),Xe(mn,mn,(r,e,t)=>{if(r.name==e.name){if(!t.aIsStrong)return[new Wt(0)];r.oldRange=e.newRange?e.newRange.clone():null}return[r]}),Xe(mn,jt,(r,e)=>(r.oldRange&&(r.oldRange=r.oldRange._getTransformedByMergeOperation(e)),r.newRange&&(r.newRange=r.newRange._getTransformedByMergeOperation(e)),[r])),Xe(mn,ct,(r,e,t)=>{if(r.oldRange&&(r.oldRange=te._createFromRanges(r.oldRange._getTransformedByMoveOperation(e))),r.newRange){if(t.abRelation){const n=te._createFromRanges(r.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(r.newRange.start))return r.newRange.start.path=t.abRelation.path,r.newRange.end=n.end,[r];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(r.newRange.end))return r.newRange.start=n.start,r.newRange.end.path=t.abRelation.path,[r]}r.newRange=te._createFromRanges(r.newRange._getTransformedByMoveOperation(e))}return[r]}),Xe(mn,bt,(r,e,t)=>{if(r.oldRange&&(r.oldRange=r.oldRange._getTransformedBySplitOperation(e)),r.newRange){if(t.abRelation){const n=r.newRange._getTransformedBySplitOperation(e);return r.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?r.newRange.start=le._createAt(e.insertionPosition):r.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(r.newRange.start=le._createAt(e.moveTargetPosition)),r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?r.newRange.end=le._createAt(e.moveTargetPosition):r.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?r.newRange.end=le._createAt(e.insertionPosition):r.newRange.end=n.end,[r]}r.newRange=r.newRange._getTransformedBySplitOperation(e)}return[r]}),Xe(jt,$t,(r,e)=>(r.sourcePosition.hasSameParentAs(e.position)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByInsertOperation(e),r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e),[r])),Xe(jt,jt,(r,e,t)=>{if(r.sourcePosition.isEqual(e.sourcePosition)&&r.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),r.sourcePosition=new le(e.graveyardPosition.root,n),r.howMany=0,[r]}return[new Wt(0)]}if(r.sourcePosition.isEqual(e.sourcePosition)&&!r.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=r.targetPosition.root.rootName=="$graveyard",i=e.targetPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const a=e.targetPosition._getTransformedByMergeOperation(e),c=r.targetPosition._getTransformedByMergeOperation(e);return[new ct(a,r.howMany,c,0)]}return[new Wt(0)]}return r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMergeOperation(e),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),r.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Xe(jt,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&r.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.sourcePosition)?[new Wt(0)]:(r.sourcePosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.sourcePosition.hasSameParentAs(e.sourcePosition)&&(r.howMany-=e.howMany),r.sourcePosition=r.sourcePosition._getTransformedByMoveOperation(e),r.targetPosition=r.targetPosition._getTransformedByMoveOperation(e),r.graveyardPosition.isEqual(e.targetPosition)||(r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)),[r])}),Xe(jt,bt,(r,e,t)=>{if(e.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),r.deletionPosition.isEqual(e.graveyardPosition)&&(r.howMany=e.howMany)),r.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,i=e.graveyardPosition&&r.deletionPosition.isEqual(e.graveyardPosition);if(n||i||t.abRelation=="mergeTargetNotMoved")return r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),[r]}if(r.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return r.howMany=0,r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r];if(t.abRelation=="mergeSameElement"||r.sourcePosition.offset>0)return r.sourcePosition=e.moveTargetPosition.clone(),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}return r.sourcePosition.hasSameParentAs(e.splitPosition)&&(r.howMany=e.splitPosition.offset),r.sourcePosition=r.sourcePosition._getTransformedBySplitOperation(e),r.targetPosition=r.targetPosition._getTransformedBySplitOperation(e),[r]}),Xe(ct,$t,(r,e)=>{const t=te._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByInsertOperation(e,!1)[0];return r.sourcePosition=t.start,r.howMany=t.end.offset-t.start.offset,r.targetPosition.isEqual(e.position)||(r.targetPosition=r.targetPosition._getTransformedByInsertOperation(e)),[r]}),Xe(ct,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(r.sourcePosition,r.howMany),i=te._createFromPositionAndShift(e.sourcePosition,e.howMany);let s,a=t.aIsStrong,c=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?c=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(c=!1),s=r.targetPosition.isEqual(e.targetPosition)&&c?r.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):r.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Xb(r,e)&&Xb(e,r))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(i,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ir([n],s);if(i.containsPosition(r.targetPosition)&&i.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),Ir([n],s);const u=en(r.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(u=="prefix"||u=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),Ir([n],s);r.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?r.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(a=!1):a=!0;const f=[],p=n.getDifference(i);for(const C of p){C.start=C.start._getTransformedByDeletion(e.sourcePosition,e.howMany),C.end=C.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const S=en(C.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",D=C._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,S);f.push(...D)}const w=n.getIntersection(i);return w!==null&&a&&(w.start=w.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),w.end=w.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),f.length===0?f.push(w):f.length==1?i.start.isBefore(n.start)||i.start.isEqual(n.start)?f.unshift(w):f.push(w):f.splice(1,0,w)),f.length===0?[new Wt(r.baseVersion)]:Ir(f,s)}),Xe(ct,bt,(r,e,t)=>{let n=r.targetPosition.clone();r.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=r.targetPosition._getTransformedBySplitOperation(e));const i=te._createFromPositionAndShift(r.sourcePosition,r.howMany);if(i.end.isEqual(e.insertionPosition))return e.graveyardPosition||r.howMany++,r.targetPosition=n,[r];if(i.start.hasSameParentAs(e.splitPosition)&&i.containsPosition(e.splitPosition)){let a=new te(e.splitPosition,i.end);return a=a._getTransformedBySplitOperation(e),Ir([new te(i.start,e.splitPosition),a],n)}r.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),r.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=r.targetPosition);const s=[i._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const a=i.start.isEqual(e.graveyardPosition)||i.containsPosition(e.graveyardPosition);r.howMany>1&&a&&!t.aWasUndone&&s.push(te._createFromPositionAndShift(e.insertionPosition,1))}return Ir(s,n)}),Xe(ct,jt,(r,e,t)=>{const n=te._createFromPositionAndShift(r.sourcePosition,r.howMany);if(e.deletionPosition.hasSameParentAs(r.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(r.type!="remove"||t.forceWeakRemove){if(r.howMany==1)return t.bWasUndone?(r.sourcePosition=e.graveyardPosition.clone(),r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]):[new Wt(0)]}else if(!t.aWasUndone){const s=[];let a=e.graveyardPosition.clone(),c=e.targetPosition._getTransformedByMergeOperation(e);r.howMany>1&&(s.push(new ct(r.sourcePosition,r.howMany-1,r.targetPosition,0)),a=a._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1),c=c._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany-1));const u=e.deletionPosition._getCombined(r.sourcePosition,r.targetPosition),f=new ct(a,1,u,0),p=f.getMovedRangeStart().path.slice();p.push(0);const w=new le(f.targetPosition.root,p);c=c._getTransformedByMove(a,u,1);const C=new ct(c,e.howMany,w,0);return s.push(f),s.push(C),s}}const i=te._createFromPositionAndShift(r.sourcePosition,r.howMany)._getTransformedByMergeOperation(e);return r.sourcePosition=i.start,r.howMany=i.end.offset-i.start.offset,r.targetPosition=r.targetPosition._getTransformedByMergeOperation(e),[r]}),Xe(pn,$t,(r,e)=>(r.position=r.position._getTransformedByInsertOperation(e),[r])),Xe(pn,jt,(r,e)=>r.position.isEqual(e.deletionPosition)?(r.position=e.graveyardPosition.clone(),r.position.stickiness="toNext",[r]):(r.position=r.position._getTransformedByMergeOperation(e),[r])),Xe(pn,ct,(r,e)=>(r.position=r.position._getTransformedByMoveOperation(e),[r])),Xe(pn,pn,(r,e,t)=>{if(r.position.isEqual(e.position)){if(!t.aIsStrong)return[new Wt(0)];r.oldName=e.newName}return[r]}),Xe(pn,bt,(r,e)=>{if(en(r.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new pn(r.position.getShiftedBy(1),r.oldName,r.newName,0);return[r,t]}return r.position=r.position._getTransformedBySplitOperation(e),[r]}),Xe(zo,zo,(r,e,t)=>{if(r.root===e.root&&r.key===e.key){if(!t.aIsStrong||r.newValue===e.newValue)return[new Wt(0)];r.oldValue=e.newValue}return[r]}),Xe(bt,$t,(r,e)=>(r.splitPosition.hasSameParentAs(e.position)&&r.splitPosition.offset<e.position.offset&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByInsertOperation(e),r.insertionPosition=r.insertionPosition._getTransformedByInsertOperation(e),[r])),Xe(bt,jt,(r,e,t)=>{if(!r.graveyardPosition&&!t.bWasUndone&&r.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const i=new le(e.graveyardPosition.root,n),s=bt.getInsertionPosition(new le(e.graveyardPosition.root,n)),a=new bt(i,0,s,null,0);return r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),r.graveyardPosition=a.insertionPosition.clone(),r.graveyardPosition.stickiness="toNext",[a,r]}return r.splitPosition.hasSameParentAs(e.deletionPosition)&&!r.splitPosition.isAfter(e.deletionPosition)&&r.howMany--,r.splitPosition.hasSameParentAs(e.targetPosition)&&(r.howMany+=e.howMany),r.splitPosition=r.splitPosition._getTransformedByMergeOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedByMergeOperation(e)),[r]}),Xe(bt,ct,(r,e,t)=>{const n=te._createFromPositionAndShift(e.sourcePosition,e.howMany);if(r.graveyardPosition){const s=n.start.isEqual(r.graveyardPosition)||n.containsPosition(r.graveyardPosition);if(!t.bWasUndone&&s){const a=r.splitPosition._getTransformedByMoveOperation(e),c=r.graveyardPosition._getTransformedByMoveOperation(e),u=c.path.slice();u.push(0);const f=new le(c.root,u);return[new ct(a,r.howMany,f,0)]}r.graveyardPosition=r.graveyardPosition._getTransformedByMoveOperation(e)}const i=r.splitPosition.isEqual(e.targetPosition);if(i&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return r.howMany+=e.howMany,r.splitPosition=r.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r];if(i&&t.abRelation&&t.abRelation.howMany){const{howMany:s,offset:a}=t.abRelation;return r.howMany+=s,r.splitPosition=r.splitPosition.getShiftedBy(a),[r]}if(r.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(r.splitPosition)){const s=e.howMany-(r.splitPosition.offset-e.sourcePosition.offset);return r.howMany-=s,r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany),r.splitPosition=e.sourcePosition.clone(),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]}return e.sourcePosition.isEqual(e.targetPosition)||(r.splitPosition.hasSameParentAs(e.sourcePosition)&&r.splitPosition.offset<=e.sourcePosition.offset&&(r.howMany-=e.howMany),r.splitPosition.hasSameParentAs(e.targetPosition)&&r.splitPosition.offset<e.targetPosition.offset&&(r.howMany+=e.howMany)),r.splitPosition.stickiness="toNone",r.splitPosition=r.splitPosition._getTransformedByMoveOperation(e),r.splitPosition.stickiness="toNext",r.graveyardPosition?r.insertionPosition=r.insertionPosition._getTransformedByMoveOperation(e):r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]}),Xe(bt,bt,(r,e,t)=>{if(r.splitPosition.isEqual(e.splitPosition)){if(!r.graveyardPosition&&!e.graveyardPosition)return[new Wt(0)];if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition))return[new Wt(0)];if(t.abRelation=="splitBefore")return r.howMany=0,r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e),[r]}if(r.graveyardPosition&&e.graveyardPosition&&r.graveyardPosition.isEqual(e.graveyardPosition)){const n=r.splitPosition.root.rootName=="$graveyard",i=e.splitPosition.root.rootName=="$graveyard";if(i&&!n||!(n&&!i)&&t.aIsStrong){const a=[];return e.howMany&&a.push(new ct(e.moveTargetPosition,e.howMany,e.splitPosition,0)),r.howMany&&a.push(new ct(r.splitPosition,r.howMany,r.moveTargetPosition,0)),a}return[new Wt(0)]}if(r.graveyardPosition&&(r.graveyardPosition=r.graveyardPosition._getTransformedBySplitOperation(e)),r.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return r.howMany++,[r];if(e.splitPosition.isEqual(r.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const i=new le(e.insertionPosition.root,n);return[r,new ct(r.insertionPosition,1,i,0)]}return r.splitPosition.hasSameParentAs(e.splitPosition)&&r.splitPosition.offset<e.splitPosition.offset&&(r.howMany-=e.howMany),r.splitPosition=r.splitPosition._getTransformedBySplitOperation(e),r.insertionPosition=bt.getInsertionPosition(r.splitPosition),[r]});class AD extends Zo{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class bl extends Zo{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class Tr{constructor(e){this.document=e}createDocumentFragment(e){return new Fi(this.document,e)}createElement(e,t,n){return new Wn(this.document,e,t,n)}createText(e){return new gt(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const i=n.getChildIndex(e);return this.removeChildren(i,1,n),this.insertChild(i,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Wn(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Jt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return ke._createAt(e,t)}createPositionAfter(e){return ke._createAfter(e)}createPositionBefore(e){return ke._createBefore(e)}createRange(e,t){return new Be(e,t)}createRangeOn(e){return Be._createOn(e)}createRangeIn(e){return Be._createIn(e)}createSelection(e,t,n){return new eo(e,t,n)}}const yD=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,xD=/^rgb\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}[0-9]{1,3}[ %]?\)$/i,ED=/^rgba\([ ]?([0-9]{1,3}[ %]?,[ ]?){3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,SD=/^hsl\([ ]?([0-9]{1,3}[ %]?[,]?[ ]*){3}(1|[0-9]+%|[0]?\.?[0-9]+)?\)$/i,DD=/^hsla\([ ]?([0-9]{1,3}[ %]?,[ ]?){2,3}(1|[0-9]+%|[0]?\.?[0-9]+)\)$/i,ID=new Set(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","orange","aliceblue","antiquewhite","aquamarine","azure","beige","bisque","blanchedalmond","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","gainsboro","ghostwhite","gold","goldenrod","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","limegreen","linen","magenta","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","oldlace","olivedrab","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","thistle","tomato","turquoise","violet","wheat","whitesmoke","yellowgreen","activeborder","activecaption","appworkspace","background","buttonface","buttonhighlight","buttonshadow","buttontext","captiontext","graytext","highlight","highlighttext","inactiveborder","inactivecaption","inactivecaptiontext","infobackground","infotext","menu","menutext","scrollbar","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","window","windowframe","windowtext","rebeccapurple","currentcolor","transparent"]);function TD(r){return r.startsWith("#")?yD.test(r):r.startsWith("rgb")?xD.test(r)||ED.test(r):r.startsWith("hsl")?SD.test(r)||DD.test(r):ID.has(r.toLowerCase())}const MD=/^([+-]?[0-9]*([.][0-9]+)?(px|cm|mm|in|pc|pt|ch|em|ex|rem|vh|vw|vmin|vmax)|0)$/,BD=/^[+-]?[0-9]*([.][0-9]+)?%$/,ND=["repeat-x","repeat-y","repeat","space","round","no-repeat"],PD=["center","top","bottom","left","right"];function zD(r){return PD.includes(r)}const LD=["fixed","scroll","local"];function OD(r){return LD.includes(r)}const RD=/^url\(/;function FD(r){return RD.test(r)}function jD(r=""){if(r==="")return{top:void 0,right:void 0,bottom:void 0,left:void 0};const e=ek(r),t=e[0],n=e[2]||t,i=e[1]||t;return{top:t,bottom:n,right:i,left:e[3]||i}}function VD({top:r,right:e,bottom:t,left:n}){const i=[];return n!==e?i.push(r,e,t,n):t!==r?i.push(r,e,t):e!==r?i.push(r,e):i.push(r),i.join(" ")}function ek(r){return r.replace(/, /g,",").split(" ").map(e=>e.replace(/,/g,", "))}function HD(r){r.setNormalizer("background",UD),r.setNormalizer("background-color",e=>({path:"background.color",value:e})),r.setReducer("background",e=>{const t=[];return t.push(["background-color",e.color]),t}),r.setStyleRelation("background",["background-color"])}function UD(r){const e={},t=ek(r);for(const i of t)n=i,ND.includes(n)?(e.repeat=e.repeat||[],e.repeat.push(i)):zD(i)?(e.position=e.position||[],e.position.push(i)):OD(i)?e.attachment=i:TD(i)?e.color=i:FD(i)&&(e.image=i);var n;return{path:"background",value:e}}function $D(r){var e,t;r.setNormalizer("margin",(e="margin",n=>({path:e,value:jD(n)}))),r.setNormalizer("margin-top",n=>({path:"margin.top",value:n})),r.setNormalizer("margin-right",n=>({path:"margin.right",value:n})),r.setNormalizer("margin-bottom",n=>({path:"margin.bottom",value:n})),r.setNormalizer("margin-left",n=>({path:"margin.left",value:n})),r.setReducer("margin",(t="margin",n=>{const{top:i,right:s,bottom:a,left:c}=n,u=[];return[i,s,c,a].every(f=>!!f)?u.push([t,VD(n)]):(i&&u.push([t+"-top",i]),s&&u.push([t+"-right",s]),a&&u.push([t+"-bottom",a]),c&&u.push([t+"-left",c])),u})),r.setStyleRelation("margin",["margin-top","margin-right","margin-bottom","margin-left"])}class WD extends Jp{constructor(e,t){super(e),this.view=t}init(){const e=this.editor,t=this.view,n=e.editing.view,i=t.editable,s=n.document.getRoot();t.editable.name=s.rootName,t.render();const a=i.element;this.setEditableElement(i.name,a),this.focusTracker.add(a),t.editable.bind("isFocused").to(this.focusTracker),n.attachDomRoot(a),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view;this.editor.editing.view.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view.toolbar;t.fillFromConfig(e.config.get("toolbar"),this.componentFactory),function({origin:n,originKeystrokeHandler:i,originFocusTracker:s,toolbar:a,beforeFocus:c,afterBlur:u}){s.add(a.element),i.set("Alt+F10",(f,p)=>{s.isFocused&&!a.focusTracker.isFocused&&(c&&c(),a.focus(),p())}),a.keystrokes.set("Esc",(f,p)=>{a.focusTracker.isFocused&&(n.focus(),u&&u(),p())})}({origin:e.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t})}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),i=e.sourceElement,s=e.config.get("placeholder")||i&&i.tagName.toLowerCase()==="textarea"&&i.getAttribute("placeholder");s&&qb({view:t,element:n,text:s,isDirectHost:!1,keepOnFocus:!0})}}class qD extends eD{constructor(e,t,n={}){super(e);const i=e.t;this.toolbar=new nu(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new oD(e,t,n.editableElement,{label:s=>i("Rich Text Editor. Editing area: %0",s.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:e.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}class lu extends Zp{constructor(e,t={}){if(!Pi(e)&&t.initialData!==void 0)throw new v("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Pi(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(e)),Pi(e)&&(this.sourceElement=e,function(s){const a=s.sourceElement;if(a){if(a.ckeditorInstance)throw new v("editor-source-element-already-used",s);a.ckeditorInstance=s,s.once("destroy",()=>{delete a.ckeditorInstance})}}(this)),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=new qD(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:n});this.ui=new WD(this,i)}destroy(){const e=this.getData();return this.ui.destroy(),super.destroy().then(()=>{this.sourceElement&&this.updateSourceElement(e)})}static create(e,t={}){return new Promise(n=>{if(Pi(e)&&e.tagName==="TEXTAREA")throw new v("editor-wrong-element",null);const i=new this(e,t);n(i.initPlugins().then(()=>i.ui.init()).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}ie(lu,SS),ie(lu,xS);class GD{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),i=Array.from(t.items||[]);return n.length?n:i.filter(s=>s.kind==="file").map(s=>s.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class cu extends Zo{constructor(e){super(e);const t=this.document;function n(i){return(s,a)=>{a.preventDefault();const c=a.dropRange?[a.dropRange]:null,u=new _(t,i);t.fire(u,{dataTransfer:a.dataTransfer,method:s.name,targetRanges:c,target:a.target}),u.stop.called&&a.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new GD(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,i){const s=i.target.ownerDocument,a=i.clientX,c=i.clientY;let u;return s.caretRangeFromPoint&&s.caretRangeFromPoint(a,c)?u=s.caretRangeFromPoint(a,c):i.rangeParent&&(u=s.createRange(),u.setStart(i.rangeParent,i.rangeOffset),u.collapse(!0)),u?n.domConverter.domRangeToView(u):null}(this.view,e)),this.fire(e.type,e,t)}}const tk=["figcaption","li"];function nk(r){let e="";if(r.is("$text")||r.is("$textProxy"))e=r.data;else if(r.is("element","img")&&r.hasAttribute("alt"))e=r.getAttribute("alt");else if(r.is("element","br"))e=`
`;else{let t=null;for(const n of r.getChildren()){const i=nk(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(tk.includes(t.name)||tk.includes(n.name)?e+=`
`:e+=`

 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(o,l){(function(d,h){o.exports=h(l6)})(window,function(d){return function(h){var g={};function m(b){if(g[b])return g[b].exports;var _=g[b]={i:b,l:!1,exports:{}};return h[b].call(_.exports,_,_.exports,m),_.l=!0,_.exports}return m.m=h,m.c=g,m.d=function(b,_,k){m.o(b,_)||Object.defineProperty(b,_,{enumerable:!0,get:k})},m.r=function(b){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},m.t=function(b,_){if(1&_&&(b=m(b)),8&_||4&_&&typeof b=="object"&&b&&b.__esModule)return b;var k=Object.create(null);if(m.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:b}),2&_&&typeof b!="string")for(var A in b)m.d(k,A,function(y){return b[y]}.bind(null,A));return k},m.n=function(b){var _=b&&b.__esModule?function(){return b.default}:function(){return b};return m.d(_,"a",_),_},m.o=function(b,_){return Object.prototype.hasOwnProperty.call(b,_)},m.p="",m(m.s=3)}([function(h,g){h.exports=d},function(h,g,m){(function(b){var _=typeof b=="object"&&b&&b.Object===Object&&b;g.a=_}).call(this,m(2))},function(h,g){var m;m=function(){return this}();try{m=m||new Function("return this")()}catch{typeof window=="object"&&(m=window)}h.exports=m},function(h,g,m){m.r(g);var b=m(0),_=m.n(b),k=function(U){var ce=typeof U;return U!=null&&(ce=="object"||ce=="function")},A=m(1),y=typeof self=="object"&&self&&self.Object===Object&&self,x=A.a||y||Function("return this")(),v=function(){return x.Date.now()},E=/\s/,N=function(U){for(var ce=U.length;ce--&&E.test(U.charAt(ce)););return ce},P=/^\s+/,j=function(U){return U&&U.slice(0,N(U)+1).replace(P,"")},M=x.Symbol,T=Object.prototype,O=T.hasOwnProperty,G=T.toString,H=M?M.toStringTag:void 0,Q=function(U){var ce=O.call(U,H),de=U[H];try{U[H]=void 0;var ie=!0}catch{}var Z=G.call(U);return ie&&(ce?U[H]=de:delete U[H]),Z},R=Object.prototype.toString,V=function(U){return R.call(U)},W=M?M.toStringTag:void 0,K=function(U){return U==null?U===void 0?"[object Undefined]":"[object Null]":W&&W in Object(U)?Q(U):V(U)},ee=function(U){return U!=null&&typeof U=="object"},J=function(U){return typeof U=="symbol"||ee(U)&&K(U)=="[object Symbol]"},ne=/^[-+]0x[0-9a-f]+$/i,ae=/^0b[01]+$/i,be=/^0o[0-7]+$/i,he=parseInt,Ae=function(U){if(typeof U=="number")return U;if(J(U))return NaN;if(k(U)){var ce=typeof U.valueOf=="function"?U.valueOf():U;U=k(ce)?ce+"":ce}if(typeof U!="string")return U===0?U:+U;U=j(U);var de=ae.test(U);return de||be.test(U)?he(U.slice(2),de?2:8):ne.test(U)?NaN:+U},Ee=Math.max,He=Math.min,It=function(U,ce,de){var ie,Z,Ke,ge,De,z,$=0,X=!1,re=!1,se=!0;if(typeof U!="function")throw new TypeError("Expected a function");function fe(_e){var ye=ie,Ie=Z;return ie=Z=void 0,$=_e,ge=U.apply(Ie,ye)}function Ce(_e){return $=_e,De=setTimeout(pe,ce),X?fe(_e):ge}function me(_e){var ye=_e-z;return z===void 0||ye>=ce||ye<0||re&&_e-$>=Ke}function pe(){var _e=v();if(me(_e))return ue(_e);De=setTimeout(pe,function(ye){var Ie=ce-(ye-z);return re?He(Ie,Ke-(ye-$)):Ie}(_e))}function ue(_e){return De=void 0,se&&ie?fe(_e):(ie=Z=void 0,ge)}function Se(){var _e=v(),ye=me(_e);if(ie=arguments,Z=this,z=_e,ye){if(De===void 0)return Ce(z);if(re)return clearTimeout(De),De=setTimeout(pe,ce),fe(z)}return De===void 0&&(De=setTimeout(pe,ce)),ge}return ce=Ae(ce)||0,k(de)&&(X=!!de.leading,Ke=(re="maxWait"in de)?Ee(Ae(de.maxWait)||0,ce):Ke,se="trailing"in de?!!de.trailing:se),Se.cancel=function(){De!==void 0&&clearTimeout(De),$=0,ie=z=Z=De=void 0},Se.flush=function(){return De===void 0?ge:ue(v())},Se},_t={name:"ckeditor",created(){const{CKEDITOR_VERSION:U}=window;if(U){const[ce]=U.split(".").map(Number);ce<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')},render(){return Object(b.h)(this.tagName)},model:{prop:"modelValue",event:"update:modelValue"},props:{editor:{type:Function,default:null},modelValue:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({instance:null,lastEditorData:{type:String,default:""}}),mounted(){const U=Object.assign({},this.config);this.modelValue&&(U.initialData=this.modelValue),this.editor.create(this.$el,U).then(ce=>{this.instance=Object(b.markRaw)(ce),this.setUpEditorEvents(),this.modelValue!==U.initialData&&ce.setData(this.modelValue),this.disabled&&ce.enableReadOnlyMode("Integration Sample"),this.$emit("ready",ce)}).catch(ce=>{console.error(ce)})},beforeUnmount(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance)},watch:{modelValue(U){this.instance&&U!==this.lastEditorData&&this.instance.setData(U)},disabled(U){U?this.instance.enableReadOnlyMode("Integration Sample"):this.instance.disableReadOnlyMode("Integration Sample")}},methods:{setUpEditorEvents(){const U=this.instance,ce=It(de=>{const ie=this.lastEditorData=U.getData();this.$emit("update:modelValue",ie,de,U),this.$emit("input",ie,de,U)},300,{leading:!0});U.model.document.on("change:data",ce),U.editing.view.document.on("focus",de=>{this.$emit("focus",de,U)}),U.editing.view.document.on("blur",de=>{this.$emit("blur",de,U)})}}};const Ne=_.a?_.a.version:b.version,[Tt]=Ne.split(".").map(U=>parseInt(U,10));if(Tt<3)throw new Error("The CKEditor plugin works only with Vue 3+. For more information, please refer to https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html");const fn={install(U){U.component("ckeditor",_t)},component:_t};g.default=fn}]).default})})(E1);const c6=p1(E1.exports),sf=KA(X3).use(xR).use(nL).use(c6);sf.component("icon-select",XR);sf.component("text-select",a6);sf.mount("#app");