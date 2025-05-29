(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Jf={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function vS(){if(f_)return Co;f_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Co.Fragment=e,Co.jsx=i,Co.jsxs=i,Co}var d_;function xS(){return d_||(d_=1,Jf.exports=vS()),Jf.exports}var H=xS(),$f={exports:{}},rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function SS(){if(h_)return rt;h_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(O,ee,Se){this.props=O,this.context=ee,this.refs=A,this.updater=Se||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function L(O,ee,Se){this.props=O,this.context=ee,this.refs=A,this.updater=Se||M}var U=L.prototype=new _;U.constructor=L,E(U,S.prototype),U.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function B(O,ee,Se,Me,J,me){return Se=me.ref,{$$typeof:s,type:O,key:ee,ref:Se!==void 0?Se:null,props:me}}function W(O,ee){return B(O.type,ee,void 0,void 0,void 0,O.props)}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function C(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return ee[Se]})}var G=/\/+/g;function le(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?C(""+O.key):ee.toString(36)}function re(){}function xe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(re,re):(O.status="pending",O.then(function(ee){O.status==="pending"&&(O.status="fulfilled",O.value=ee)},function(ee){O.status==="pending"&&(O.status="rejected",O.reason=ee)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function pe(O,ee,Se,Me,J){var me=typeof O;(me==="undefined"||me==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(me){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case s:case e:ye=!0;break;case g:return ye=O._init,pe(ye(O._payload),ee,Se,Me,J)}}if(ye)return J=J(O),ye=Me===""?"."+le(O,0):Me,w(J)?(Se="",ye!=null&&(Se=ye.replace(G,"$&/")+"/"),pe(J,ee,Se,"",function(ot){return ot})):J!=null&&(D(J)&&(J=W(J,Se+(J.key==null||O&&O.key===J.key?"":(""+J.key).replace(G,"$&/")+"/")+ye)),ee.push(J)),1;ye=0;var Re=Me===""?".":Me+":";if(w(O))for(var Ne=0;Ne<O.length;Ne++)Me=O[Ne],me=Re+le(Me,Ne),ye+=pe(Me,ee,Se,me,J);else if(Ne=v(O),typeof Ne=="function")for(O=Ne.call(O),Ne=0;!(Me=O.next()).done;)Me=Me.value,me=Re+le(Me,Ne++),ye+=pe(Me,ee,Se,me,J);else if(me==="object"){if(typeof O.then=="function")return pe(xe(O),ee,Se,Me,J);throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ye}function z(O,ee,Se){if(O==null)return O;var Me=[],J=0;return pe(O,Me,"","",function(me){return ee.call(Se,me,J++)}),Me}function K(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var j=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ee(){}return rt.Children={map:z,forEach:function(O,ee,Se){z(O,function(){ee.apply(this,arguments)},Se)},count:function(O){var ee=0;return z(O,function(){ee++}),ee},toArray:function(O){return z(O,function(ee){return ee})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},rt.Component=S,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=L,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return I.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cloneElement=function(O,ee,Se){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Me=E({},O.props),J=O.key,me=void 0;if(ee!=null)for(ye in ee.ref!==void 0&&(me=void 0),ee.key!==void 0&&(J=""+ee.key),ee)!V.call(ee,ye)||ye==="key"||ye==="__self"||ye==="__source"||ye==="ref"&&ee.ref===void 0||(Me[ye]=ee[ye]);var ye=arguments.length-2;if(ye===1)Me.children=Se;else if(1<ye){for(var Re=Array(ye),Ne=0;Ne<ye;Ne++)Re[Ne]=arguments[Ne+2];Me.children=Re}return B(O.type,J,void 0,void 0,me,Me)},rt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},rt.createElement=function(O,ee,Se){var Me,J={},me=null;if(ee!=null)for(Me in ee.key!==void 0&&(me=""+ee.key),ee)V.call(ee,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(J[Me]=ee[Me]);var ye=arguments.length-2;if(ye===1)J.children=Se;else if(1<ye){for(var Re=Array(ye),Ne=0;Ne<ye;Ne++)Re[Ne]=arguments[Ne+2];J.children=Re}if(O&&O.defaultProps)for(Me in ye=O.defaultProps,ye)J[Me]===void 0&&(J[Me]=ye[Me]);return B(O,me,void 0,void 0,null,J)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=D,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:K}},rt.memo=function(O,ee){return{$$typeof:p,type:O,compare:ee===void 0?null:ee}},rt.startTransition=function(O){var ee=I.T,Se={};I.T=Se;try{var Me=O(),J=I.S;J!==null&&J(Se,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(Ee,j)}catch(me){j(me)}finally{I.T=ee}},rt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},rt.use=function(O){return I.H.use(O)},rt.useActionState=function(O,ee,Se){return I.H.useActionState(O,ee,Se)},rt.useCallback=function(O,ee){return I.H.useCallback(O,ee)},rt.useContext=function(O){return I.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,ee){return I.H.useDeferredValue(O,ee)},rt.useEffect=function(O,ee,Se){var Me=I.H;if(typeof Se=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Me.useEffect(O,ee)},rt.useId=function(){return I.H.useId()},rt.useImperativeHandle=function(O,ee,Se){return I.H.useImperativeHandle(O,ee,Se)},rt.useInsertionEffect=function(O,ee){return I.H.useInsertionEffect(O,ee)},rt.useLayoutEffect=function(O,ee){return I.H.useLayoutEffect(O,ee)},rt.useMemo=function(O,ee){return I.H.useMemo(O,ee)},rt.useOptimistic=function(O,ee){return I.H.useOptimistic(O,ee)},rt.useReducer=function(O,ee,Se){return I.H.useReducer(O,ee,Se)},rt.useRef=function(O){return I.H.useRef(O)},rt.useState=function(O){return I.H.useState(O)},rt.useSyncExternalStore=function(O,ee,Se){return I.H.useSyncExternalStore(O,ee,Se)},rt.useTransition=function(){return I.H.useTransition()},rt.version="19.1.0",rt}var p_;function Mh(){return p_||(p_=1,$f.exports=SS()),$f.exports}var he=Mh(),ed={exports:{}},wo={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function yS(){return m_||(m_=1,function(s){function e(z,K){var j=z.length;z.push(K);e:for(;0<j;){var Ee=j-1>>>1,O=z[Ee];if(0<l(O,K))z[Ee]=K,z[j]=O,j=Ee;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],j=z.pop();if(j!==K){z[0]=j;e:for(var Ee=0,O=z.length,ee=O>>>1;Ee<ee;){var Se=2*(Ee+1)-1,Me=z[Se],J=Se+1,me=z[J];if(0>l(Me,j))J<O&&0>l(me,Me)?(z[Ee]=me,z[J]=j,Ee=J):(z[Ee]=Me,z[Se]=j,Ee=Se);else if(J<O&&0>l(me,j))z[Ee]=me,z[J]=j,Ee=J;else break e}}return K}function l(z,K){var j=z.sortIndex-K.sortIndex;return j!==0?j:z.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,v=3,M=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=z)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function I(z){if(A=!1,w(z),!E)if(i(m)!==null)E=!0,V||(V=!0,le());else{var K=i(p);K!==null&&pe(I,K.startTime-z)}}var V=!1,B=-1,W=5,D=-1;function C(){return S?!0:!(s.unstable_now()-D<W)}function G(){if(S=!1,V){var z=s.unstable_now();D=z;var K=!0;try{e:{E=!1,A&&(A=!1,L(B),B=-1),M=!0;var j=v;try{t:{for(w(z),x=i(m);x!==null&&!(x.expirationTime>z&&C());){var Ee=x.callback;if(typeof Ee=="function"){x.callback=null,v=x.priorityLevel;var O=Ee(x.expirationTime<=z);if(z=s.unstable_now(),typeof O=="function"){x.callback=O,w(z),K=!0;break t}x===i(m)&&r(m),w(z)}else r(m);x=i(m)}if(x!==null)K=!0;else{var ee=i(p);ee!==null&&pe(I,ee.startTime-z),K=!1}}break e}finally{x=null,v=j,M=!1}K=void 0}}finally{K?le():V=!1}}}var le;if(typeof U=="function")le=function(){U(G)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,xe=re.port2;re.port1.onmessage=G,le=function(){xe.postMessage(null)}}else le=function(){_(G,0)};function pe(z,K){B=_(function(){z(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var K=3;break;default:K=v}var j=v;v=K;try{return z()}finally{v=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=v;v=z;try{return K()}finally{v=j}},s.unstable_scheduleCallback=function(z,K,j){var Ee=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Ee+j:Ee):j=Ee,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=j+O,z={id:g++,callback:K,priorityLevel:z,startTime:j,expirationTime:O,sortIndex:-1},j>Ee?(z.sortIndex=j,e(p,z),i(m)===null&&z===i(p)&&(A?(L(B),B=-1):A=!0,pe(I,j-Ee))):(z.sortIndex=O,e(m,z),E||M||(E=!0,V||(V=!0,le()))),z},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(z){var K=v;return function(){var j=v;v=K;try{return z.apply(this,arguments)}finally{v=j}}}}(nd)),nd}var g_;function MS(){return g_||(g_=1,td.exports=yS()),td.exports}var id={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function ES(){if(__)return Rn;__=1;var s=Mh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Rn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Rn.requestFormReset=function(m){r.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var v_;function bS(){if(v_)return id.exports;v_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),id.exports=ES(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function TS(){if(x_)return wo;x_=1;var s=MS(),e=Mh(),i=bS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===o)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var y=!1,b=c.child;b;){if(b===a){y=!0,a=c,o=f;break}if(b===o){y=!0,o=c,a=f;break}b=b.sibling}if(!y){for(b=f.child;b;){if(b===a){y=!0,a=f,o=c;break}if(b===o){y=!0,o=f,a=c;break}b=b.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case V:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return(t.displayName||"Context")+".Provider";case L:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case W:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Ee=[],O=-1;function ee(t){return{current:t}}function Se(t){0>O||(t.current=Ee[O],Ee[O]=null,O--)}function Me(t,n){O++,Ee[O]=t.current,t.current=n}var J=ee(null),me=ee(null),ye=ee(null),Re=ee(null);function Ne(t,n){switch(Me(ye,n),Me(me,t),Me(J,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Fg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Fg(n),t=Hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Se(J),Me(J,t)}function ot(){Se(J),Se(me),Se(ye)}function Ke(t){t.memoizedState!==null&&Me(Re,t);var n=J.current,a=Hg(n,t.type);n!==a&&(Me(me,t),Me(J,a))}function Ht(t){me.current===t&&(Se(J),Se(me)),Re.current===t&&(Se(Re),Eo._currentValue=j)}var Bt=Object.prototype.hasOwnProperty,ft=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,Ln=s.unstable_shouldYield,_t=s.unstable_requestPaint,it=s.unstable_now,We=s.unstable_getCurrentPriorityLevel,Dt=s.unstable_ImmediatePriority,Ve=s.unstable_UserBlockingPriority,N=s.unstable_NormalPriority,T=s.unstable_LowPriority,te=s.unstable_IdlePriority,ge=s.log,be=s.unstable_setDisableYieldValue,fe=null,Pe=null;function Ce(t){if(typeof ge=="function"&&be(t),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Fe,$e=Math.log,Ae=Math.LN2;function Fe(t){return t>>>=0,t===0?32:31-($e(t)/Ae|0)|0}var je=256,Qe=4194304;function ze(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=ze(o):(y&=b,y!==0?c=ze(y):a||(a=b&~t,a!==0&&(c=ze(a))))):(b=o&~f,b!==0?c=ze(b):y!==0?c=ze(y):a||(a=o&~t,a!==0&&(c=ze(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function nt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ut(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var t=je;return je<<=1,(je&4194048)===0&&(je=256),t}function Le(){var t=Qe;return Qe<<=1,(Qe&62914560)===0&&(Qe=4194304),t}function ue(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _e(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Be(t,n,a,o,c,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var ce=31-Ge(a),ve=1<<ce;b[ce]=0,P[ce]=-1;var ne=$[ce];if(ne!==null)for($[ce]=null,ce=0;ce<ne.length;ce++){var ie=ne[ce];ie!==null&&(ie.lane&=-536870913)}a&=~ve}o!==0&&Oe(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function Oe(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function at(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Gt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function en(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Mt(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:r_(t.type))}function Gn(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var hn=Math.random().toString(36).slice(2),on="__reactFiber$"+hn,xn="__reactProps$"+hn,On="__reactContainer$"+hn,Ya="__reactEvents$"+hn,$o="__reactListeners$"+hn,el="__reactHandles$"+hn,ja="__reactResources$"+hn,fa="__reactMarker$"+hn;function da(t){delete t[on],delete t[xn],delete t[Ya],delete t[$o],delete t[el]}function Ui(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[On]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xg(t);t!==null;){if(a=t[on])return a;t=Xg(t)}return n}t=a,a=t.parentNode}return null}function Ni(t){if(t=t[on]||t[On]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Za(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ha(t){var n=t[ja];return n||(n=t[ja]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[fa]=!0}var tl=new Set,nl={};function Li(t,n){R(t,n),R(t+"Capture",n)}function R(t,n){for(nl[t]=n,t=0;t<n.length;t++)tl.add(n[t])}var Y=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},se={};function Z(t){return Bt.call(se,t)?!0:Bt.call(ae,t)?!1:Y.test(t)?se[t]=!0:(ae[t]=!0,!1)}function Te(t,n,a){if(Z(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function we(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function De(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var Ie,et;function qe(t){if(Ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ie=n&&n[1]||"",et=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ie+t+et}var Xe=!1;function ht(t,n){if(!t||Xe)return"";Xe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(ie){var ne=ie}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(ie){ne=ie}t.call(ve.prototype)}}else{try{throw Error()}catch(ie){ne=ie}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(ie){if(ie&&ne&&typeof ie.stack=="string")return[ie.stack,ne.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],b=f[1];if(y&&b){var P=y.split(`
`),$=b.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===$.length)for(o=P.length-1,c=$.length-1;1<=o&&0<=c&&P[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==$[c]){var ce=`
`+P[o].replace(" at new "," at ");return t.displayName&&ce.includes("<anonymous>")&&(ce=ce.replace("<anonymous>",t.displayName)),ce}while(1<=o&&0<=c);break}}}finally{Xe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qe(a):""}function Et(t){switch(t.tag){case 26:case 27:case 5:return qe(t.type);case 16:return qe("Lazy");case 13:return qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return qe("Activity");default:return""}}function Wt(t){try{var n="";do n+=Et(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function vt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t){var n=xt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){o=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jt(t){t._valueTracker||(t._valueTracker=Ye(t))}function yt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=xt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function bn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function Vt(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(t,n,a,o,c,f,y,b){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+vt(n)):t.value!==""+vt(n)&&(t.value=""+vt(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?Tn(t,y,vt(n)):a!=null?Tn(t,y,vt(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+vt(b):t.removeAttribute("name")}function It(t,n,a,o,c,f,y,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y)}function Tn(t,n,a){n==="number"&&bn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ln(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function pn(t,n,a){if(n!=null&&(n=""+vt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+vt(a):""}function Sn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(pe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=vt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function xi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Hh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Fh(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Fh(t,f,n[f])}function Ku(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var g0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(t){return _0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Qu=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dr=null,Ur=null;function Gh(t){var n=Ni(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Oi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(r(90));Oi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&yt(o)}break e;case"textarea":pn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ln(t,!!a.multiple,n,!1)}}}var $u=!1;function Vh(t,n,a){if($u)return t(n,a);$u=!0;try{var o=t(n);return o}finally{if($u=!1,(Dr!==null||Ur!==null)&&(Vl(),Dr&&(n=Dr,t=Ur,Ur=Dr=null,Gh(n),t)))for(n=0;n<t.length;n++)Gh(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ec=!1;if(zi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){ec=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{ec=!1}var ma=null,tc=null,al=null;function kh(){if(al)return al;var t,n=tc,a=n.length,o,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===c[f-o];o++);return al=c.slice(t,1<o?1-o:void 0)}function rl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function Xh(){return!1}function Pn(t){function n(a,o,c,f,y){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?sl:Xh,this.isPropagationStopped=Xh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ol=Pn(Ka),Bs=g({},Ka,{view:0,detail:0}),v0=Pn(Bs),nc,ic,Is,ll=g({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(nc=t.screenX-Is.screenX,ic=t.screenY-Is.screenY):ic=nc=0,Is=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:ic}}),Wh=Pn(ll),x0=g({},ll,{dataTransfer:0}),S0=Pn(x0),y0=g({},Bs,{relatedTarget:0}),ac=Pn(y0),M0=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=Pn(M0),b0=g({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T0=Pn(b0),A0=g({},Ka,{data:0}),qh=Pn(A0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=w0[t])?!!n[t]:!1}function rc(){return D0}var U0=g({},Bs,{key:function(t){if(t.key){var n=R0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N0=Pn(U0),L0=g({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Pn(L0),O0=g({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),P0=Pn(O0),z0=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Pn(z0),I0=g({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),F0=Pn(I0),H0=g({},Ka,{newState:0,oldState:0}),G0=Pn(H0),V0=[9,13,27,32],sc=zi&&"CompositionEvent"in window,Fs=null;zi&&"documentMode"in document&&(Fs=document.documentMode);var k0=zi&&"TextEvent"in window&&!Fs,jh=zi&&(!sc||Fs&&8<Fs&&11>=Fs),Zh=" ",Kh=!1;function Qh(t,n){switch(t){case"keyup":return V0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function X0(t,n){switch(t){case"compositionend":return Jh(n);case"keypress":return n.which!==32?null:(Kh=!0,Zh);case"textInput":return t=n.data,t===Zh&&Kh?null:t;default:return null}}function W0(t,n){if(Nr)return t==="compositionend"||!sc&&Qh(t,n)?(t=kh(),al=tc=ma=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jh&&n.locale!=="ko"?null:n.data;default:return null}}var q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!q0[t.type]:n==="textarea"}function ep(t,n,a,o){Dr?Ur?Ur.push(o):Ur=[o]:Dr=o,n=jl(n,"onChange"),0<n.length&&(a=new ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function Y0(t){Og(t,0)}function ul(t){var n=Za(t);if(yt(n))return t}function tp(t,n){if(t==="change")return n}var np=!1;if(zi){var oc;if(zi){var lc="oninput"in document;if(!lc){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),lc=typeof ip.oninput=="function"}oc=lc}else oc=!1;np=oc&&(!document.documentMode||9<document.documentMode)}function ap(){Hs&&(Hs.detachEvent("onpropertychange",rp),Gs=Hs=null)}function rp(t){if(t.propertyName==="value"&&ul(Gs)){var n=[];ep(n,Gs,t,Ju(t)),Vh(Y0,n)}}function j0(t,n,a){t==="focusin"?(ap(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",rp)):t==="focusout"&&ap()}function Z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ul(Gs)}function K0(t,n){if(t==="click")return ul(n)}function Q0(t,n){if(t==="input"||t==="change")return ul(n)}function J0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:J0;function Vs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Bt.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,n){var a=sp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function lp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?lp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=bn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=bn(t.document)}return n}function uc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var $0=zi&&"documentMode"in document&&11>=document.documentMode,Lr=null,cc=null,ks=null,fc=!1;function cp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||Lr==null||Lr!==bn(o)||(o=Lr,"selectionStart"in o&&uc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ks&&Vs(ks,o)||(ks=o,o=jl(cc,"onSelect"),0<o.length&&(n=new ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Lr)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Or={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},dc={},fp={};zi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Ja(t){if(dc[t])return dc[t];if(!Or[t])return t;var n=Or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return dc[t]=n[a];return t}var dp=Ja("animationend"),hp=Ja("animationiteration"),pp=Ja("animationstart"),ex=Ja("transitionrun"),tx=Ja("transitionstart"),nx=Ja("transitioncancel"),mp=Ja("transitionend"),gp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function oi(t,n){gp.set(t,n),Li(n,[t])}var _p=new WeakMap;function Jn(t,n){if(typeof t=="object"&&t!==null){var a=_p.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},_p.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var $n=[],Pr=0,pc=0;function cl(){for(var t=Pr,n=pc=Pr=0;n<t;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,o!==null&&c!==null){var y=o.pending;y===null?c.next=c:(c.next=y.next,y.next=c),o.pending=c}f!==0&&vp(a,c,f)}}function fl(t,n,a,o){$n[Pr++]=t,$n[Pr++]=n,$n[Pr++]=a,$n[Pr++]=o,pc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mc(t,n,a,o){return fl(t,n,a,o),dl(t)}function zr(t,n){return fl(t,null,null,n),dl(t)}function vp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ge(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function dl(t){if(50<mo)throw mo=0,Mf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Br={};function ix(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,o){return new ix(t,n,a,o)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function xp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function hl(t,n,a,o,c,f){var y=0;if(o=t,typeof t=="function")gc(t)&&(y=1);else if(typeof t=="string")y=rS(t,a,J.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=kn(31,a,n,c),t.elementType=D,t.lanes=f,t;case E:return $a(a.children,c,f,n);case A:y=8,c|=24;break;case S:return t=kn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case I:return t=kn(13,a,n,c),t.elementType=I,t.lanes=f,t;case V:return t=kn(19,a,n,c),t.elementType=V,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case U:y=10;break e;case L:y=9;break e;case w:y=11;break e;case B:y=14;break e;case W:y=16,o=null;break e}y=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=kn(y,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function $a(t,n,a,o){return t=kn(7,t,o,n),t.lanes=a,t}function _c(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function vc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ir=[],Fr=0,pl=null,ml=0,ei=[],ti=0,er=null,Ii=1,Fi="";function tr(t,n){Ir[Fr++]=ml,Ir[Fr++]=pl,pl=t,ml=n}function Sp(t,n,a){ei[ti++]=Ii,ei[ti++]=Fi,ei[ti++]=er,er=t;var o=Ii;t=Fi;var c=32-Ge(o)-1;o&=~(1<<c),a+=1;var f=32-Ge(n)+c;if(30<f){var y=c-c%5;f=(o&(1<<y)-1).toString(32),o>>=y,c-=y,Ii=1<<32-Ge(n)+c|a<<c|o,Fi=f+t}else Ii=1<<f|a<<c|o,Fi=t}function xc(t){t.return!==null&&(tr(t,1),Sp(t,1,0))}function Sc(t){for(;t===pl;)pl=Ir[--Fr],Ir[Fr]=null,ml=Ir[--Fr],Ir[Fr]=null;for(;t===er;)er=ei[--ti],ei[ti]=null,Fi=ei[--ti],ei[ti]=null,Ii=ei[--ti],ei[ti]=null}var Dn=null,Zt=null,At=!1,nr=null,Si=!1,yc=Error(r(519));function ir(t){var n=Error(r(418,""));throw qs(Jn(n,t)),yc}function yp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[xn]=o,a){case"dialog":mt("cancel",n),mt("close",n);break;case"iframe":case"object":case"embed":mt("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)mt(_o[a],n);break;case"source":mt("error",n);break;case"img":case"image":case"link":mt("error",n),mt("load",n);break;case"details":mt("toggle",n);break;case"input":mt("invalid",n),It(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),jt(n);break;case"select":mt("invalid",n);break;case"textarea":mt("invalid",n),Sn(n,o.value,o.defaultValue,o.children),jt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ig(n.textContent,a)?(o.popover!=null&&(mt("beforetoggle",n),mt("toggle",n)),o.onScroll!=null&&mt("scroll",n),o.onScrollEnd!=null&&mt("scrollend",n),o.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||ir(t)}function Mp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function Xs(t){if(t!==Dn)return!1;if(!At)return Mp(t),At=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||If(t.type,t.memoizedProps)),a=!a),a&&Zt&&ir(t),Mp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Zt=ui(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Zt=null}}else n===27?(n=Zt,Ua(t.type)?(t=Vf,Vf=null,Zt=t):Zt=n):Zt=Dn?ui(t.stateNode.nextSibling):null;return!0}function Ws(){Zt=Dn=null,At=!1}function Ep(){var t=nr;return t!==null&&(In===null?In=t:In.push.apply(In,t),nr=null),t}function qs(t){nr===null?nr=[t]:nr.push(t)}var Mc=ee(null),ar=null,Hi=null;function ga(t,n,a){Me(Mc,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=Mc.current,Se(Mc)}function Ec(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function bc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;e:for(;f!==null;){var b=f;f=c;for(var P=0;P<n.length;P++)if(b.context===n[P]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Ec(f.return,a,t),o||(y=null);break e}f=b.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ec(y,a,t),y=null}else y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===t){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Ys(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var b=c.type;Vn(c.pendingProps.value,y.value)||(t!==null?t.push(b):t=[b])}}else if(c===Re.current){if(y=c.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Eo):t=[Eo])}c=c.return}t!==null&&bc(n,t,a,o),n.flags|=262144}function gl(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return bp(ar,t)}function _l(t,n){return ar===null&&rr(t),bp(t,n)}function bp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},rx=s.unstable_scheduleCallback,sx=s.unstable_NormalPriority,un={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new ax,data:new Map,refCount:0}}function js(t){t.refCount--,t.refCount===0&&rx(sx,function(){t.controller.abort()})}var Zs=null,Ac=0,Hr=0,Gr=null;function ox(t,n){if(Zs===null){var a=Zs=[];Ac=0,Hr=wf(),Gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ac++,n.then(Tp,Tp),n}function Tp(){if(--Ac===0&&Zs!==null){Gr!==null&&(Gr.status="fulfilled");var t=Zs;Zs=null,Hr=0,Gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function lx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Ap=z.S;z.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&ox(t,n),Ap!==null&&Ap(t,n)};var sr=ee(null);function Rc(){var t=sr.current;return t!==null?t:kt.pooledCache}function vl(t,n){n===null?Me(sr,sr.current):Me(sr,n.pool)}function Rp(){var t=Rc();return t===null?null:{parent:un._currentValue,pool:t}}var Ks=Error(r(460)),Cp=Error(r(474)),xl=Error(r(542)),Cc={then:function(){}};function wp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Sl(){}function Dp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Np(t),t}throw Qs=n,Ks}}var Qs=null;function Up(){if(Qs===null)throw Error(r(459));var t=Qs;return Qs=null,t}function Np(t){if(t===Ks||t===xl)throw Error(r(483))}var _a=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ct&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=dl(t),vp(t,null,a),n}return fl(t,o,n,a),dl(t)}function Js(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}function Uc(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Nc=!1;function $s(){if(Nc){var t=Gr;if(t!==null)throw t}}function eo(t,n,a,o){Nc=!1;var c=t.updateQueue;_a=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var P=b,$=P.next;P.next=null,y===null?f=$:y.next=$,y=P;var ce=t.alternate;ce!==null&&(ce=ce.updateQueue,b=ce.lastBaseUpdate,b!==y&&(b===null?ce.firstBaseUpdate=$:b.next=$,ce.lastBaseUpdate=P))}if(f!==null){var ve=c.baseState;y=0,ce=$=P=null,b=f;do{var ne=b.lane&-536870913,ie=ne!==b.lane;if(ie?(St&ne)===ne:(o&ne)===ne){ne!==0&&ne===Hr&&(Nc=!0),ce!==null&&(ce=ce.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var tt=t,Ze=b;ne=n;var Ot=a;switch(Ze.tag){case 1:if(tt=Ze.payload,typeof tt=="function"){ve=tt.call(Ot,ve,ne);break e}ve=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=Ze.payload,ne=typeof tt=="function"?tt.call(Ot,ve,ne):tt,ne==null)break e;ve=g({},ve,ne);break e;case 2:_a=!0}}ne=b.callback,ne!==null&&(t.flags|=64,ie&&(t.flags|=8192),ie=c.callbacks,ie===null?c.callbacks=[ne]:ie.push(ne))}else ie={lane:ne,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ce===null?($=ce=ie,P=ve):ce=ce.next=ie,y|=ne;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ie=b,b=ie.next,ie.next=null,c.lastBaseUpdate=ie,c.shared.pending=null}}while(!0);ce===null&&(P=ve),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ce,f===null&&(c.shared.lanes=0),Ra|=y,t.lanes=y,t.memoizedState=ve}}function Lp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Op(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lp(a[t],n)}var Vr=ee(null),yl=ee(0);function Pp(t,n){t=ji,Me(yl,t),Me(Vr,n),ji=t|n.baseLanes}function Lc(){Me(yl,ji),Me(Vr,Vr.current)}function Oc(){ji=yl.current,Se(Vr),Se(yl)}var Sa=0,ct=null,Nt=null,nn=null,Ml=!1,kr=!1,or=!1,El=0,to=0,Xr=null,ux=0;function Qt(){throw Error(r(321))}function Pc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function zc(t,n,a,o,c,f){return Sa=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?vm:xm,or=!1,f=a(o,c),or=!1,kr&&(f=Bp(n,a,o,c)),zp(t),f}function zp(t){z.H=wl;var n=Nt!==null&&Nt.next!==null;if(Sa=0,nn=Nt=ct=null,Ml=!1,to=0,Xr=null,n)throw Error(r(300));t===null||mn||(t=t.dependencies,t!==null&&gl(t)&&(mn=!0))}function Bp(t,n,a,o){ct=t;var c=0;do{if(kr&&(Xr=null),to=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Nt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=gx,f=n(a,o)}while(kr);return f}function cx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?no(n):n,t=t.useState()[0],(Nt!==null?Nt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Bc(){var t=El!==0;return El=0,t}function Ic(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fc(t){if(Ml){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ml=!1}Sa=0,nn=Nt=ct=null,kr=!1,to=El=0,Xr=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?ct.memoizedState=nn=t:nn=nn.next=t,nn}function an(){if(Nt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var n=nn===null?ct.memoizedState:nn.next;if(n!==null)nn=n,Nt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},nn===null?ct.memoizedState=nn=t:nn=nn.next=t}return nn}function Hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(t){var n=to;return to+=1,Xr===null&&(Xr=[]),t=Dp(Xr,t,n),n=ct,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?vm:xm),t}function bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return no(t);if(t.$$typeof===U)return An(t)}throw Error(r(438,String(t)))}function Gc(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Hc(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Vi(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=an();return Vc(n,Nt,t)}function Vc(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=y=null,P=null,$=n,ce=!1;do{var ve=$.lane&-536870913;if(ve!==$.lane?(St&ve)===ve:(Sa&ve)===ve){var ne=$.revertLane;if(ne===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ve===Hr&&(ce=!0);else if((Sa&ne)===ne){$=$.next,ne===Hr&&(ce=!0);continue}else ve={lane:0,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ve,y=f):P=P.next=ve,ct.lanes|=ne,Ra|=ne;ve=$.action,or&&a(f,ve),f=$.hasEagerState?$.eagerState:a(f,ve)}else ne={lane:ve,revertLane:$.revertLane,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(b=P=ne,y=f):P=P.next=ne,ct.lanes|=ve,Ra|=ve;$=$.next}while($!==null&&$!==n);if(P===null?y=f:P.next=b,!Vn(f,t.memoizedState)&&(mn=!0,ce&&(a=Gr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=P,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function kc(t){var n=an(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=t(f,y.action),y=y.next;while(y!==c);Vn(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Ip(t,n,a){var o=ct,c=an(),f=At;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!Vn((Nt||c).memoizedState,a);y&&(c.memoizedState=a,mn=!0),c=c.queue;var b=Gp.bind(null,o,c,t);if(io(2048,8,b,[t]),c.getSnapshot!==n||y||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,Wr(9,Al(),Hp.bind(null,o,c,a,n),null),kt===null)throw Error(r(349));f||(Sa&124)!==0||Fp(o,n,a)}return a}function Fp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Hc(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hp(t,n,a,o){n.value=a,n.getSnapshot=o,Vp(n)&&kp(t)}function Gp(t,n,a){return a(function(){Vp(n)&&kp(t)})}function Vp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function kp(t){var n=zr(t,2);n!==null&&jn(n,t,2)}function Xc(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),or){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},n}function Xp(t,n,a,o){return t.baseState=a,Vc(t,Nt,typeof o=="function"?o:Vi)}function fx(t,n,a,o,c){if(Cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};z.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=z.T,y={};z.T=y;try{var b=a(c,o),P=z.S;P!==null&&P(y,b),qp(t,n,b)}catch($){Wc(t,n,$)}finally{z.T=f}}else try{f=a(c,o),qp(t,n,f)}catch($){Wc(t,n,$)}}function qp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Yp(t,n,o)},function(o){return Wc(t,n,o)}):Yp(t,n,a)}function Yp(t,n,a){n.status="fulfilled",n.value=a,jp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wp(t,a)))}function Wc(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jp(n),n=n.next;while(n!==o)}t.action=null}function jp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function Kp(t,n){if(At){var a=kt.formState;if(a!==null){e:{var o=ct;if(At){if(Zt){t:{for(var c=Zt,f=Si;c.nodeType!==8;){if(!f){c=null;break t}if(c=ui(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Zt=ui(c.nextSibling),o=c.data==="F!";break e}}ir(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=o,a=mm.bind(null,ct,o),o.dispatch=a,o=Xc(!1),f=Kc.bind(null,ct,!1,o.queue),o=zn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=fx.bind(null,ct,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Qp(t){var n=an();return Jp(n,Nt,t)}function Jp(t,n,a){if(n=Vc(t,n,Zp)[0],t=Tl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(y){throw y===Ks?xl:y}else o=n;n=an();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,Wr(9,Al(),dx.bind(null,c,a),null)),[o,f,t]}function dx(t,n){t.action=n}function $p(t){var n=an(),a=Nt;if(a!==null)return Jp(n,a,t);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Wr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Hc(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Al(){return{destroy:void 0,resource:void 0}}function em(){return an().memoizedState}function Rl(t,n,a,o){var c=zn();o=o===void 0?null:o,ct.flags|=t,c.memoizedState=Wr(1|n,Al(),a,o)}function io(t,n,a,o){var c=an();o=o===void 0?null:o;var f=c.memoizedState.inst;Nt!==null&&o!==null&&Pc(o,Nt.memoizedState.deps)?c.memoizedState=Wr(n,f,a,o):(ct.flags|=t,c.memoizedState=Wr(1|n,f,a,o))}function tm(t,n){Rl(8390656,8,t,n)}function nm(t,n){io(2048,8,t,n)}function im(t,n){return io(4,2,t,n)}function am(t,n){return io(4,4,t,n)}function rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sm(t,n,a){a=a!=null?a.concat([t]):null,io(4,4,rm.bind(null,n,t),a)}function qc(){}function om(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pc(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function lm(t,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pc(n,o[1]))return o[0];if(o=t(),or){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function Yc(t,n,a){return a===void 0||(Sa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=fg(),ct.lanes|=t,Ra|=t,a)}function um(t,n,a,o){return Vn(a,n)?a:Vr.current!==null?(t=Yc(t,a,o),Vn(t,n)||(mn=!0),t):(Sa&42)===0?(mn=!0,t.memoizedState=a):(t=fg(),ct.lanes|=t,Ra|=t,n)}function cm(t,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var y=z.T,b={};z.T=b,Kc(t,!1,n,a);try{var P=c(),$=z.S;if($!==null&&$(b,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ce=lx(P,o);ao(t,n,ce,Yn(t))}else ao(t,n,o,Yn(t))}catch(ve){ao(t,n,{then:function(){},status:"rejected",reason:ve},Yn())}finally{K.p=f,z.T=y}}function hx(){}function jc(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=fm(t).queue;cm(t,c,n,j,a===null?hx:function(){return dm(t),a(o)})}function fm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dm(t){var n=fm(t).next.queue;ao(t,n,{},Yn())}function Zc(){return An(Eo)}function hm(){return an().memoizedState}function pm(){return an().memoizedState}function px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=va(a);var o=xa(n,t,a);o!==null&&(jn(o,n,a),Js(o,n,a)),n={cache:Tc()},t.payload=n;return}n=n.return}}function mx(t,n,a){var o=Yn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(t)?gm(n,a):(a=mc(t,n,a,o),a!==null&&(jn(a,t,o),_m(a,n,o)))}function mm(t,n,a){var o=Yn();ao(t,n,a,o)}function ao(t,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(t))gm(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,b=f(y,a);if(c.hasEagerState=!0,c.eagerState=b,Vn(b,y))return fl(t,n,c,0),kt===null&&cl(),!1}catch{}finally{}if(a=mc(t,n,c,o),a!==null)return jn(a,t,o),_m(a,n,o),!0}return!1}function Kc(t,n,a,o){if(o={lane:2,revertLane:wf(),action:o,hasEagerState:!1,eagerState:null,next:null},Cl(t)){if(n)throw Error(r(479))}else n=mc(t,a,o,2),n!==null&&jn(n,t,2)}function Cl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function gm(t,n){kr=Ml=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _m(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,at(t,a)}}var wl={readContext:An,use:bl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt},vm={readContext:An,use:bl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Rl(4194308,4,rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Rl(4194308,4,t,n)},useInsertionEffect:function(t,n){Rl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(or){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var c=a(n);if(or){Ce(!0);try{a(n)}finally{Ce(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=mx.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Xc(t);var n=t.queue,a=mm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qc,useDeferredValue:function(t,n){var a=zn();return Yc(a,t,n)},useTransition:function(){var t=Xc(!1);return t=cm.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,c=zn();if(At){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),kt===null)throw Error(r(349));(St&124)!==0||Fp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,tm(Gp.bind(null,o,f,t),[t]),o.flags|=2048,Wr(9,Al(),Hp.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=kt.identifierPrefix;if(At){var a=Fi,o=Ii;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=El++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=ux++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Zc,useFormState:Kp,useActionState:Kp,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Kc.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Gc,useCacheRefresh:function(){return zn().memoizedState=px.bind(null,ct)}},xm={readContext:An,use:bl,useCallback:om,useContext:An,useEffect:nm,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:Tl,useRef:em,useState:function(){return Tl(Vi)},useDebugValue:qc,useDeferredValue:function(t,n){var a=an();return um(a,Nt.memoizedState,t,n)},useTransition:function(){var t=Tl(Vi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Zc,useFormState:Qp,useActionState:Qp,useOptimistic:function(t,n){var a=an();return Xp(a,Nt,t,n)},useMemoCache:Gc,useCacheRefresh:pm},gx={readContext:An,use:bl,useCallback:om,useContext:An,useEffect:nm,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:am,useMemo:lm,useReducer:kc,useRef:em,useState:function(){return kc(Vi)},useDebugValue:qc,useDeferredValue:function(t,n){var a=an();return Nt===null?Yc(a,t,n):um(a,Nt.memoizedState,t,n)},useTransition:function(){var t=kc(Vi)[0],n=an().memoizedState;return[typeof t=="boolean"?t:no(t),n]},useSyncExternalStore:Ip,useId:hm,useHostTransitionStatus:Zc,useFormState:$p,useActionState:$p,useOptimistic:function(t,n){var a=an();return Nt!==null?Xp(a,Nt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Gc,useCacheRefresh:pm},qr=null,ro=0;function Dl(t){var n=ro;return ro+=1,qr===null&&(qr=[]),Dp(qr,t,n)}function so(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Sm(t){var n=t._init;return n(t._payload)}function ym(t){function n(q,k){if(t){var Q=q.deletions;Q===null?(q.deletions=[k],q.flags|=16):Q.push(k)}}function a(q,k){if(!t)return null;for(;k!==null;)n(q,k),k=k.sibling;return null}function o(q){for(var k=new Map;q!==null;)q.key!==null?k.set(q.key,q):k.set(q.index,q),q=q.sibling;return k}function c(q,k){return q=Bi(q,k),q.index=0,q.sibling=null,q}function f(q,k,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<k?(q.flags|=67108866,k):Q):(q.flags|=67108866,k)):(q.flags|=1048576,k)}function y(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,k,Q,de){return k===null||k.tag!==6?(k=_c(Q,q.mode,de),k.return=q,k):(k=c(k,Q),k.return=q,k)}function P(q,k,Q,de){var He=Q.type;return He===E?ce(q,k,Q.props.children,de,Q.key):k!==null&&(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&Sm(He)===k.type)?(k=c(k,Q.props),so(k,Q),k.return=q,k):(k=hl(Q.type,Q.key,Q.props,null,q.mode,de),so(k,Q),k.return=q,k)}function $(q,k,Q,de){return k===null||k.tag!==4||k.stateNode.containerInfo!==Q.containerInfo||k.stateNode.implementation!==Q.implementation?(k=vc(Q,q.mode,de),k.return=q,k):(k=c(k,Q.children||[]),k.return=q,k)}function ce(q,k,Q,de,He){return k===null||k.tag!==7?(k=$a(Q,q.mode,de,He),k.return=q,k):(k=c(k,Q),k.return=q,k)}function ve(q,k,Q){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_c(""+k,q.mode,Q),k.return=q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return Q=hl(k.type,k.key,k.props,null,q.mode,Q),so(Q,k),Q.return=q,Q;case M:return k=vc(k,q.mode,Q),k.return=q,k;case W:var de=k._init;return k=de(k._payload),ve(q,k,Q)}if(pe(k)||le(k))return k=$a(k,q.mode,Q,null),k.return=q,k;if(typeof k.then=="function")return ve(q,Dl(k),Q);if(k.$$typeof===U)return ve(q,_l(q,k),Q);Ul(q,k)}return null}function ne(q,k,Q,de){var He=k!==null?k.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return He!==null?null:b(q,k,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:return Q.key===He?P(q,k,Q,de):null;case M:return Q.key===He?$(q,k,Q,de):null;case W:return He=Q._init,Q=He(Q._payload),ne(q,k,Q,de)}if(pe(Q)||le(Q))return He!==null?null:ce(q,k,Q,de,null);if(typeof Q.then=="function")return ne(q,k,Dl(Q),de);if(Q.$$typeof===U)return ne(q,k,_l(q,Q),de);Ul(q,Q)}return null}function ie(q,k,Q,de,He){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return q=q.get(Q)||null,b(k,q,""+de,He);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case v:return q=q.get(de.key===null?Q:de.key)||null,P(k,q,de,He);case M:return q=q.get(de.key===null?Q:de.key)||null,$(k,q,de,He);case W:var dt=de._init;return de=dt(de._payload),ie(q,k,Q,de,He)}if(pe(de)||le(de))return q=q.get(Q)||null,ce(k,q,de,He,null);if(typeof de.then=="function")return ie(q,k,Q,Dl(de),He);if(de.$$typeof===U)return ie(q,k,Q,_l(k,de),He);Ul(k,de)}return null}function tt(q,k,Q,de){for(var He=null,dt=null,ke=k,Je=k=0,_n=null;ke!==null&&Je<Q.length;Je++){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var bt=ne(q,ke,Q[Je],de);if(bt===null){ke===null&&(ke=_n);break}t&&ke&&bt.alternate===null&&n(q,ke),k=f(bt,k,Je),dt===null?He=bt:dt.sibling=bt,dt=bt,ke=_n}if(Je===Q.length)return a(q,ke),At&&tr(q,Je),He;if(ke===null){for(;Je<Q.length;Je++)ke=ve(q,Q[Je],de),ke!==null&&(k=f(ke,k,Je),dt===null?He=ke:dt.sibling=ke,dt=ke);return At&&tr(q,Je),He}for(ke=o(ke);Je<Q.length;Je++)_n=ie(ke,q,Je,Q[Je],de),_n!==null&&(t&&_n.alternate!==null&&ke.delete(_n.key===null?Je:_n.key),k=f(_n,k,Je),dt===null?He=_n:dt.sibling=_n,dt=_n);return t&&ke.forEach(function(za){return n(q,za)}),At&&tr(q,Je),He}function Ze(q,k,Q,de){if(Q==null)throw Error(r(151));for(var He=null,dt=null,ke=k,Je=k=0,_n=null,bt=Q.next();ke!==null&&!bt.done;Je++,bt=Q.next()){ke.index>Je?(_n=ke,ke=null):_n=ke.sibling;var za=ne(q,ke,bt.value,de);if(za===null){ke===null&&(ke=_n);break}t&&ke&&za.alternate===null&&n(q,ke),k=f(za,k,Je),dt===null?He=za:dt.sibling=za,dt=za,ke=_n}if(bt.done)return a(q,ke),At&&tr(q,Je),He;if(ke===null){for(;!bt.done;Je++,bt=Q.next())bt=ve(q,bt.value,de),bt!==null&&(k=f(bt,k,Je),dt===null?He=bt:dt.sibling=bt,dt=bt);return At&&tr(q,Je),He}for(ke=o(ke);!bt.done;Je++,bt=Q.next())bt=ie(ke,q,Je,bt.value,de),bt!==null&&(t&&bt.alternate!==null&&ke.delete(bt.key===null?Je:bt.key),k=f(bt,k,Je),dt===null?He=bt:dt.sibling=bt,dt=bt);return t&&ke.forEach(function(_S){return n(q,_S)}),At&&tr(q,Je),He}function Ot(q,k,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===E&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case v:e:{for(var He=Q.key;k!==null;){if(k.key===He){if(He=Q.type,He===E){if(k.tag===7){a(q,k.sibling),de=c(k,Q.props.children),de.return=q,q=de;break e}}else if(k.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===W&&Sm(He)===k.type){a(q,k.sibling),de=c(k,Q.props),so(de,Q),de.return=q,q=de;break e}a(q,k);break}else n(q,k);k=k.sibling}Q.type===E?(de=$a(Q.props.children,q.mode,de,Q.key),de.return=q,q=de):(de=hl(Q.type,Q.key,Q.props,null,q.mode,de),so(de,Q),de.return=q,q=de)}return y(q);case M:e:{for(He=Q.key;k!==null;){if(k.key===He)if(k.tag===4&&k.stateNode.containerInfo===Q.containerInfo&&k.stateNode.implementation===Q.implementation){a(q,k.sibling),de=c(k,Q.children||[]),de.return=q,q=de;break e}else{a(q,k);break}else n(q,k);k=k.sibling}de=vc(Q,q.mode,de),de.return=q,q=de}return y(q);case W:return He=Q._init,Q=He(Q._payload),Ot(q,k,Q,de)}if(pe(Q))return tt(q,k,Q,de);if(le(Q)){if(He=le(Q),typeof He!="function")throw Error(r(150));return Q=He.call(Q),Ze(q,k,Q,de)}if(typeof Q.then=="function")return Ot(q,k,Dl(Q),de);if(Q.$$typeof===U)return Ot(q,k,_l(q,Q),de);Ul(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,k!==null&&k.tag===6?(a(q,k.sibling),de=c(k,Q),de.return=q,q=de):(a(q,k),de=_c(Q,q.mode,de),de.return=q,q=de),y(q)):a(q,k)}return function(q,k,Q,de){try{ro=0;var He=Ot(q,k,Q,de);return qr=null,He}catch(ke){if(ke===Ks||ke===xl)throw ke;var dt=kn(29,ke,null,q.mode);return dt.lanes=de,dt.return=q,dt}finally{}}}var Yr=ym(!0),Mm=ym(!1),ni=ee(null),yi=null;function ya(t){var n=t.alternate;Me(cn,cn.current&1),Me(ni,t),yi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(yi=t)}function Em(t){if(t.tag===22){if(Me(cn,cn.current),Me(ni,t),yi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(yi=t)}}else Ma()}function Ma(){Me(cn,cn.current),Me(ni,ni.current)}function ki(t){Se(ni),yi===t&&(yi=null),Se(cn)}var cn=ee(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Gf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Qc(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Jc={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=va(o);c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,o),n!==null&&(jn(n,t,o),Js(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Yn(),c=va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(t,c,o),n!==null&&(jn(n,t,o),Js(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(t,o,a),n!==null&&(jn(n,t,a),Js(n,t,a))}};function bm(t,n,a,o,c,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,o)||!Vs(c,f):!0}function Tm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Jc.enqueueReplaceState(n,n.state,null)}function lr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Am(t){Ll(t)}function Rm(t){console.error(t)}function Cm(t){Ll(t)}function Ol(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function wm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function $c(t,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(t,n)},a}function Dm(t){return t=va(t),t.tag=3,t}function Um(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){wm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){wm(n,a,o),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function _x(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?bf():a.alternate===null&&Kt===0&&(Kt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(t,o,c)),!1;case 22:return a.flags|=65536,o===Cc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(t,o,c)),!1}throw Error(r(435,a.tag))}return Af(t,o,c),bf(),!1}if(At)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==yc&&(t=Error(r(422),{cause:o}),qs(Jn(t,a)))):(o!==yc&&(n=Error(r(423),{cause:o}),qs(Jn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=Jn(o,a),c=$c(t.stateNode,o,c),Uc(t,c),Kt!==4&&(Kt=2)),!1;var f=Error(r(520),{cause:o});if(f=Jn(f,a),po===null?po=[f]:po.push(f),Kt!==4&&(Kt=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=$c(a.stateNode,o,t),Uc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Dm(c),Um(c,t,a,o),Uc(a,c),!1}a=a.return}while(a!==null);return!1}var Nm=Error(r(461)),mn=!1;function yn(t,n,a,o){n.child=t===null?Mm(n,null,a,o):Yr(n,t.child,a,o)}function Lm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var b in o)b!=="ref"&&(y[b]=o[b])}else y=o;return rr(n),o=zc(t,n,a,y,f,c),b=Bc(),t!==null&&!mn?(Ic(t,n,c),Xi(t,n,c)):(At&&b&&xc(n),n.flags|=1,yn(t,n,o,c),n.child)}function Om(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!gc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pm(t,n,f,o,c)):(t=hl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!lf(t,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(y,o)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,o),t.ref=n.ref,t.return=n,n.child=t}function Pm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=f,lf(t,c))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return ef(t,n,a,o,c)}function zm(t,n,a){var o=n.pendingProps,c=o.children,f=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Bm(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&vl(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):Lc(),Em(n);else return n.lanes=n.childLanes=536870912,Bm(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(n,f.cachePool),Pp(n,f),Ma(),n.memoizedState=null):(t!==null&&vl(n,null),Lc(),Ma());return yn(t,n,c,a),n.child}function Bm(t,n,a,o){var c=Rc();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&vl(n,null),Lc(),Em(n),t!==null&&Ys(t,n,o,!0),null}function Pl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function ef(t,n,a,o,c){return rr(n),a=zc(t,n,a,o,void 0,c),o=Bc(),t!==null&&!mn?(Ic(t,n,c),Xi(t,n,c)):(At&&o&&xc(n),n.flags|=1,yn(t,n,a,c),n.child)}function Im(t,n,a,o,c,f){return rr(n),n.updateQueue=null,a=Bp(n,o,a,c),zp(t),o=Bc(),t!==null&&!mn?(Ic(t,n,f),Xi(t,n,f)):(At&&o&&xc(n),n.flags|=1,yn(t,n,a,f),n.child)}function Fm(t,n,a,o,c){if(rr(n),n.stateNode===null){var f=Br,y=a.contextType;typeof y=="object"&&y!==null&&(f=An(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Jc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wc(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?An(y):Br,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Qc(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Jc.enqueueReplaceState(f,f.state,null),eo(n,o,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,P=lr(a,b);f.props=P;var $=f.context,ce=a.contextType;y=Br,typeof ce=="object"&&ce!==null&&(y=An(ce));var ve=a.getDerivedStateFromProps;ce=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ce||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||$!==y)&&Tm(n,f,o,y),_a=!1;var ne=n.memoizedState;f.state=ne,eo(n,o,f,c),$s(),$=n.memoizedState,b||ne!==$||_a?(typeof ve=="function"&&(Qc(n,a,ve,o),$=n.memoizedState),(P=_a||bm(n,a,P,o,ne,$,y))?(ce||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=y,o=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Dc(t,n),y=n.memoizedProps,ce=lr(a,y),f.props=ce,ve=n.pendingProps,ne=f.context,$=a.contextType,P=Br,typeof $=="object"&&$!==null&&(P=An($)),b=a.getDerivedStateFromProps,($=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==ve||ne!==P)&&Tm(n,f,o,P),_a=!1,ne=n.memoizedState,f.state=ne,eo(n,o,f,c),$s();var ie=n.memoizedState;y!==ve||ne!==ie||_a||t!==null&&t.dependencies!==null&&gl(t.dependencies)?(typeof b=="function"&&(Qc(n,a,b,o),ie=n.memoizedState),(ce=_a||bm(n,a,ce,o,ne,ie,P)||t!==null&&t.dependencies!==null&&gl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ie,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ie,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ie),f.props=o,f.state=ie,f.context=P,o=ce):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&ne===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Pl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Yr(n,t.child,null,c),n.child=Yr(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function Hm(t,n,a,o){return Ws(),n.flags|=256,yn(t,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(t){return{baseLanes:t,cachePool:Rp()}}function af(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ii),t}function Gm(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(At){if(c?ya(n):Ma(),At){var b=Zt,P;if(P=b){e:{for(P=b,b=Si;P.nodeType!==8;){if(!b){b=null;break e}if(P=ui(P.nextSibling),P===null){b=null;break e}}b=P}b!==null?(n.memoizedState={dehydrated:b,treeContext:er!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},P=kn(18,null,null,0),P.stateNode=b,P.return=n,n.child=P,Dn=n,Zt=null,P=!0):P=!1}P||ir(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Gf(b)?n.lanes=32:n.lanes=536870912,null;ki(n)}return b=o.children,o=o.fallback,c?(Ma(),c=n.mode,b=zl({mode:"hidden",children:b},c),o=$a(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,c=n.child,c.memoizedState=nf(a),c.childLanes=af(t,y,a),n.memoizedState=tf,o):(ya(n),rf(n,b))}if(P=t.memoizedState,P!==null&&(b=P.dehydrated,b!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=sf(t,n,a)):n.memoizedState!==null?(Ma(),n.child=t.child,n.flags|=128,n=null):(Ma(),c=o.fallback,b=n.mode,o=zl({mode:"visible",children:o.children},b),c=$a(c,b,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Yr(n,t.child,null,a),o=n.child,o.memoizedState=nf(a),o.childLanes=af(t,y,a),n.memoizedState=tf,n=c);else if(ya(n),Gf(b)){if(y=b.nextSibling&&b.nextSibling.dataset,y)var $=y.dgst;y=$,o=Error(r(419)),o.stack="",o.digest=y,qs({value:o,source:null,stack:null}),n=sf(t,n,a)}else if(mn||Ys(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=kt,y!==null&&(o=a&-a,o=(o&42)!==0?1:Gt(o),o=(o&(y.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,zr(t,o),jn(y,t,o),Nm;b.data==="$?"||bf(),n=sf(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Zt=ui(b.nextSibling),Dn=n,At=!0,nr=null,Si=!1,t!==null&&(ei[ti++]=Ii,ei[ti++]=Fi,ei[ti++]=er,Ii=t.id,Fi=t.overflow,er=n),n=rf(n,o.children),n.flags|=4096);return n}return c?(Ma(),c=o.fallback,b=n.mode,P=t.child,$=P.sibling,o=Bi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,$!==null?c=Bi($,c):(c=$a(c,b,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,b=t.child.memoizedState,b===null?b=nf(a):(P=b.cachePool,P!==null?($=un._currentValue,P=P.parent!==$?{parent:$,pool:$}:P):P=Rp(),b={baseLanes:b.baseLanes|a,cachePool:P}),c.memoizedState=b,c.childLanes=af(t,y,a),n.memoizedState=tf,o):(ya(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function rf(t,n){return n=zl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function zl(t,n){return t=kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function sf(t,n,a){return Yr(n,t.child,null,a),t=rf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Ec(t.return,n,a)}function of(t,n,a,o,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function km(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(yn(t,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vm(t,a,n);else if(t.tag===19)Vm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(Me(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),of(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&Nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}of(n,!0,a,null,f);break;case"together":of(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ys(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function lf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&gl(t)))}function vx(t,n,a){switch(n.tag){case 3:Ne(n,n.stateNode.containerInfo),ga(n,un,t.memoizedState.cache),Ws();break;case 27:case 5:Ke(n);break;case 4:Ne(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gm(t,n,a):(ya(n),t=Xi(t,n,a),t!==null?t.sibling:null);ya(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ys(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return km(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Me(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,zm(t,n,a);case 24:ga(n,un,t.memoizedState.cache)}return Xi(t,n,a)}function Xm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!lf(t,a)&&(n.flags&128)===0)return mn=!1,vx(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,At&&(n.flags&1048576)!==0&&Sp(n,ml,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")gc(o)?(t=lr(o,t),n.tag=1,n=Fm(null,n,o,t,a)):(n.tag=0,n=ef(null,n,o,t,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=Lm(null,n,o,t,a);break e}else if(c===B){n.tag=14,n=Om(null,n,o,t,a);break e}}throw n=xe(o)||o,Error(r(306,n,""))}}return n;case 0:return ef(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=lr(o,n.pendingProps),Fm(t,n,o,c,a);case 3:e:{if(Ne(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Dc(t,n),eo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,ga(n,un,o),o!==f.cache&&bc(n,[un],a,!0),$s(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hm(t,n,o,a);break e}else if(o!==c){c=Jn(Error(r(424)),n),qs(c),n=Hm(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Zt=ui(t.firstChild),Dn=n,At=!0,nr=null,Si=!0,a=Mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ws(),o===c){n=Xi(t,n,a);break e}yn(t,n,o,a)}n=n.child}return n;case 26:return Pl(t,n),t===null?(a=jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:At||(a=n.type,t=n.pendingProps,o=Kl(ye.current).createElement(a),o[on]=n,o[xn]=t,En(o,a,t),tn(o),n.stateNode=o):n.memoizedState=jg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ke(n),t===null&&At&&(o=n.stateNode=Wg(n.type,n.pendingProps,ye.current),Dn=n,Si=!0,c=Zt,Ua(n.type)?(Vf=c,Zt=ui(o.firstChild)):Zt=c),yn(t,n,n.pendingProps.children,a),Pl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&At&&((c=o=Zt)&&(o=qx(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,Zt=ui(o.firstChild),Si=!1,c=!0):c=!1),c||ir(n)),Ke(n),c=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,o=f.children,If(c,f)?o=null:y!==null&&If(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=zc(t,n,cx,null,null,a),Eo._currentValue=c),Pl(t,n),yn(t,n,o,a),n.child;case 6:return t===null&&At&&((t=a=Zt)&&(a=Yx(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,Zt=null,t=!0):t=!1),t||ir(n)),null;case 13:return Gm(t,n,a);case 4:return Ne(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Yr(n,null,o,a):yn(t,n,o,a),n.child;case 11:return Lm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),yn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,rr(n),c=An(c),o=o(c),n.flags|=1,yn(t,n,o,a),n.child;case 14:return Om(t,n,n.type,n.pendingProps,a);case 15:return Pm(t,n,n.type,n.pendingProps,a);case 19:return km(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=zl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Bi(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return zm(t,n,a);case 24:return rr(n),o=An(un),t===null?(c=Rc(),c===null&&(c=kt,f=Tc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wc(n),ga(n,un,c)):((t.lanes&a)!==0&&(Dc(t,n),eo(n,null,null,a),$s()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,un,o)):(o=f.cache,ga(n,un,o),o!==c.cache&&bc(n,[un],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function Wm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!$g(n)){if(n=ni.current,n!==null&&((St&4194048)===St?yi!==null:(St&62914560)!==St&&(St&536870912)===0||n!==yi))throw Qs=Cc,Cp;t.flags|=8192}}function Bl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Qr|=n)}function oo(t,n){if(!At)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function xx(t,n,a){var o=n.pendingProps;switch(Sc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(un),ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ep())),qt(n),null;case 26:return a=n.memoizedState,t===null?(Wi(n),a!==null?(qt(n),Wm(n,a)):(qt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Wi(n),qt(n),Wm(n,a)):(qt(n),n.flags&=-16777217):(t.memoizedProps!==o&&Wi(n),qt(n),n.flags&=-16777217),null;case 27:Ht(n),a=ye.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}t=J.current,Xs(n)?yp(n):(t=Wg(c,o,a),n.stateNode=t,Wi(n))}return qt(n),null;case 5:if(Ht(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qt(n),null}if(t=J.current,Xs(n))yp(n);else{switch(c=Kl(ye.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}t[on]=n,t[xn]=o;e:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break e;for(;c.sibling===null;){if(c.return===null||c.return===n)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;e:switch(En(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&Wi(n)}}return qt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ye.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ig(t.nodeValue,a)),t||ir(n)}else t=Kl(t).createTextNode(o),t[on]=n,n.stateNode=t}return qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Ws(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),c=!1}else c=Ep(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ki(n),n):(ki(n),null)}if(ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),qt(n),null;case 4:return ot(),t===null&&Lf(n.stateNode.containerInfo),qt(n),null;case 10:return Gi(n.type),qt(n),null;case 19:if(Se(cn),c=n.memoizedState,c===null)return qt(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)oo(c,!1);else{if(Kt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Nl(t),f!==null){for(n.flags|=128,oo(c,!1),t=f.updateQueue,n.updateQueue=t,Bl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)xp(a,t),a=a.sibling;return Me(cn,cn.current&1|2),n.child}t=t.sibling}c.tail!==null&&it()>Hl&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304)}else{if(!o)if(t=Nl(f),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,Bl(n,t),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!At)return qt(n),null}else 2*it()-c.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,o=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=it(),n.sibling=null,t=cn.current,Me(cn,o?t&1|2:t&1),n):(qt(n),null);case 22:case 23:return ki(n),Oc(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Se(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(un),qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Sx(t,n){switch(Sc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(un),ot(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 13:if(ki(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ws()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Se(cn),null;case 4:return ot(),null;case 10:return Gi(n.type),null;case 22:case 23:return ki(n),Oc(),t!==null&&Se(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(un),null;case 25:return null;default:return null}}function qm(t,n){switch(Sc(n),n.tag){case 3:Gi(un),ot();break;case 26:case 27:case 5:Ht(n);break;case 4:ot();break;case 13:ki(n);break;case 19:Se(cn);break;case 10:Gi(n.type);break;case 22:case 23:ki(n),Oc(),t!==null&&Se(sr);break;case 24:Gi(un)}}function lo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==c)}}catch(b){Ft(n,n.return,b)}}function Ea(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var y=o.inst,b=y.destroy;if(b!==void 0){y.destroy=void 0,c=n;var P=a,$=b;try{$()}catch(ce){Ft(c,P,ce)}}}o=o.next}while(o!==f)}}catch(ce){Ft(n,n.return,ce)}}function Ym(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Op(n,a)}catch(o){Ft(t,t.return,o)}}}function jm(t,n,a){a.props=lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ft(t,n,o)}}function uo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Ft(t,n,c)}}function Mi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ft(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ft(t,n,c)}else a.current=null}function Zm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ft(t,t.return,c)}}function uf(t,n,a){try{var o=t.stateNode;Gx(o,t.type,a,n),o[xn]=n}catch(c){Ft(t,t.return,c)}}function Km(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ua(t.type)||t.tag===4}function cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ua(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ff(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ff(t,n,a),t=t.sibling;t!==null;)ff(t,n,a),t=t.sibling}function Il(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ua(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function Qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[on]=t,n[xn]=a}catch(f){Ft(t,t.return,f)}}var qi=!1,Jt=!1,df=!1,Jm=typeof WeakSet=="function"?WeakSet:Set,gn=null;function yx(t,n){if(t=t.containerInfo,zf=nu,t=up(t),uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var y=0,b=-1,P=-1,$=0,ce=0,ve=t,ne=null;t:for(;;){for(var ie;ve!==a||c!==0&&ve.nodeType!==3||(b=y+c),ve!==f||o!==0&&ve.nodeType!==3||(P=y+o),ve.nodeType===3&&(y+=ve.nodeValue.length),(ie=ve.firstChild)!==null;)ne=ve,ve=ie;for(;;){if(ve===t)break t;if(ne===a&&++$===c&&(b=y),ne===f&&++ce===o&&(P=y),(ie=ve.nextSibling)!==null)break;ve=ne,ne=ve.parentNode}ve=ie}a=b===-1||P===-1?null:{start:b,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:t,selectionRange:a},nu=!1,gn=n;gn!==null;)if(n=gn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,gn=t;else for(;gn!==null;){switch(n=gn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var tt=lr(a.type,c,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(tt,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(Ze){Ft(a,a.return,Ze)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,gn=t;break}gn=n.return}}function $m(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&lo(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ft(a,a.return,y)}else{var c=lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ft(a,a.return,y)}}o&64&&Ym(a),o&512&&uo(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Op(t,n)}catch(y){Ft(a,a.return,y)}}break;case 27:n===null&&o&4&&Qm(a);case 26:case 5:ba(t,a),n===null&&o&4&&Zm(a),o&512&&uo(a,a.return);break;case 12:ba(t,a);break;case 13:ba(t,a),o&4&&ng(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Dx.bind(null,a),jx(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||Jt,c=qi;var f=Jt;qi=o,(Jt=n)&&!f?Ta(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),qi=c,Jt=f}break;case 30:break;default:ba(t,a)}}function eg(t){var n=t.alternate;n!==null&&(t.alternate=null,eg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&da(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xt=null,Bn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)tg(t,n,a),a=a.sibling}function tg(t,n,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:Jt||Mi(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Jt||Mi(a,n);var o=Xt,c=Bn;Ua(a.type)&&(Xt=a.stateNode,Bn=!1),Yi(t,n,a),xo(a.stateNode),Xt=o,Bn=c;break;case 5:Jt||Mi(a,n);case 6:if(o=Xt,c=Bn,Xt=null,Yi(t,n,a),Xt=o,Bn=c,Xt!==null)if(Bn)try{(Xt.nodeType===9?Xt.body:Xt.nodeName==="HTML"?Xt.ownerDocument.body:Xt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Xt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Xt!==null&&(Bn?(t=Xt,kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ro(t)):kg(Xt,a.stateNode));break;case 4:o=Xt,c=Bn,Xt=a.stateNode.containerInfo,Bn=!0,Yi(t,n,a),Xt=o,Bn=c;break;case 0:case 11:case 14:case 15:Jt||Ea(2,a,n),Jt||Ea(4,a,n),Yi(t,n,a);break;case 1:Jt||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&jm(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:Jt=(o=Jt)||a.memoizedState!==null,Yi(t,n,a),Jt=o;break;default:Yi(t,n,a)}}function ng(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ro(t)}catch(a){Ft(n,n.return,a)}}function Mx(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jm),n;default:throw Error(r(435,t.tag))}}function hf(t,n){var a=Mx(t);n.forEach(function(o){var c=Ux.bind(null,t,o);a.has(o)||(a.add(o),o.then(c,c))})}function Xn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,y=n,b=y;e:for(;b!==null;){switch(b.tag){case 27:if(Ua(b.type)){Xt=b.stateNode,Bn=!1;break e}break;case 5:Xt=b.stateNode,Bn=!1;break e;case 3:case 4:Xt=b.stateNode.containerInfo,Bn=!0;break e}b=b.return}if(Xt===null)throw Error(r(160));tg(f,y,c),Xt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ig(n,t),n=n.sibling}var li=null;function ig(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(n,t),Wn(t),o&4&&(Ea(3,t,t.return),lo(3,t),Ea(5,t,t.return));break;case 1:Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=li;if(Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[fa]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),En(f,o,a),f[on]=t,tn(f),o=f;break e;case"link":var y=Qg("link","href",c).get(o+(a.href||""));if(y){for(var b=0;b<y.length;b++)if(f=y[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(b,1);break t}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;case"meta":if(y=Qg("meta","content",c).get(o+(a.content||""))){for(b=0;b<y.length;b++)if(f=y[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(b,1);break t}}f=c.createElement(o),En(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[on]=t,tn(f),o=f}t.stateNode=o}else Jg(c,t.type,t.stateNode);else t.stateNode=Kg(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Jg(c,t.type,t.stateNode):Kg(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&uf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),a!==null&&o&4&&uf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Xn(n,t),Wn(t),o&512&&(Jt||a===null||Mi(a,a.return)),t.flags&32){c=t.stateNode;try{xi(c,"")}catch(ie){Ft(t,t.return,ie)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,uf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(df=!0);break;case 6:if(Xn(n,t),Wn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ie){Ft(t,t.return,ie)}}break;case 3:if($l=null,c=li,li=Ql(n.containerInfo),Xn(n,t),li=c,Wn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(n.containerInfo)}catch(ie){Ft(t,t.return,ie)}df&&(df=!1,ag(t));break;case 4:o=li,li=Ql(t.stateNode.containerInfo),Xn(n,t),Wn(t),li=o;break;case 12:Xn(n,t),Wn(t);break;case 13:Xn(n,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xf=it()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hf(t,o)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=qi,ce=Jt;if(qi=$||c,Jt=ce||P,Xn(n,t),Jt=ce,qi=$,Wn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||qi||Jt||ur(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{b=P.stateNode;var ve=P.memoizedProps.style,ne=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;b.style.display=ne==null||typeof ne=="boolean"?"":(""+ne).trim()}}catch(ie){Ft(P,P.return,ie)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(ie){Ft(P,P.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hf(t,a))));break;case 19:Xn(n,t),Wn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hf(t,o)));break;case 30:break;case 21:break;default:Xn(n,t),Wn(t)}}function Wn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Km(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=cf(t);Il(t,f,c);break;case 5:var y=a.stateNode;a.flags&32&&(xi(y,""),a.flags&=-33);var b=cf(t);Il(t,b,y);break;case 3:case 4:var P=a.stateNode.containerInfo,$=cf(t);ff(t,$,P);break;default:throw Error(r(161))}}catch(ce){Ft(t,t.return,ce)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$m(t,n.alternate,n),n=n.sibling}function ur(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),ur(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jm(n,n.return,a),ur(n);break;case 27:xo(n.stateNode);case 26:case 5:Mi(n,n.return),ur(n);break;case 22:n.memoizedState===null&&ur(n);break;case 30:ur(n);break;default:ur(n)}t=t.sibling}}function Ta(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:Ta(c,f,a),lo(4,f);break;case 1:if(Ta(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Ft(o,o.return,$)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Lp(P[c],b)}catch($){Ft(o,o.return,$)}}a&&y&64&&Ym(f),uo(f,f.return);break;case 27:Qm(f);case 26:case 5:Ta(c,f,a),a&&o===null&&y&4&&Zm(f),uo(f,f.return);break;case 12:Ta(c,f,a);break;case 13:Ta(c,f,a),a&&y&4&&ng(c,f);break;case 22:f.memoizedState===null&&Ta(c,f,a),uo(f,f.return);break;case 30:break;default:Ta(c,f,a)}n=n.sibling}}function pf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&js(a))}function mf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&js(t))}function Ei(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rg(t,n,a,o),n=n.sibling}function rg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,o),c&2048&&lo(9,n);break;case 1:Ei(t,n,a,o);break;case 3:Ei(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&js(t)));break;case 12:if(c&2048){Ei(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,y=f.id,b=f.onPostCommit;typeof b=="function"&&b(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Ft(n,n.return,P)}}else Ei(t,n,a,o);break;case 13:Ei(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,o):co(t,n):f._visibility&2?Ei(t,n,a,o):(f._visibility|=2,jr(t,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&pf(y,n);break;case 24:Ei(t,n,a,o),c&2048&&mf(n.alternate,n);break;default:Ei(t,n,a,o)}}function jr(t,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,y=n,b=a,P=o,$=y.flags;switch(y.tag){case 0:case 11:case 15:jr(f,y,b,P,c),lo(8,y);break;case 23:break;case 22:var ce=y.stateNode;y.memoizedState!==null?ce._visibility&2?jr(f,y,b,P,c):co(f,y):(ce._visibility|=2,jr(f,y,b,P,c)),c&&$&2048&&pf(y.alternate,y);break;case 24:jr(f,y,b,P,c),c&&$&2048&&mf(y.alternate,y);break;default:jr(f,y,b,P,c)}n=n.sibling}}function co(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:co(a,o),c&2048&&pf(o.alternate,o);break;case 24:co(a,o),c&2048&&mf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var fo=8192;function Zr(t){if(t.subtreeFlags&fo)for(t=t.child;t!==null;)sg(t),t=t.sibling}function sg(t){switch(t.tag){case 26:Zr(t),t.flags&fo&&t.memoizedState!==null&&oS(li,t.memoizedState,t.memoizedProps);break;case 5:Zr(t);break;case 3:case 4:var n=li;li=Ql(t.stateNode.containerInfo),Zr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=fo,fo=16777216,Zr(t),fo=n):Zr(t));break;default:Zr(t)}}function og(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,t)}og(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)lg(t),t=t.sibling}function lg(t){switch(t.tag){case 0:case 11:case 15:ho(t),t.flags&2048&&Ea(9,t,t.return);break;case 3:ho(t);break;case 12:ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Fl(t)):ho(t);break;default:ho(t)}}function Fl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,ug(o,t)}og(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Fl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fl(n));break;default:Fl(n)}t=t.sibling}}function ug(t,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else e:for(a=t;gn!==null;){o=gn;var c=o.sibling,f=o.return;if(eg(o),o===a){gn=null;break e}if(c!==null){c.return=f,gn=c;break e}gn=f}}}var Ex={getCacheForType:function(t){var n=An(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},bx=typeof WeakMap=="function"?WeakMap:Map,Ct=0,kt=null,pt=null,St=0,wt=0,qn=null,Aa=!1,Kr=!1,gf=!1,ji=0,Kt=0,Ra=0,cr=0,_f=0,ii=0,Qr=0,po=null,In=null,vf=!1,xf=0,Hl=1/0,Gl=null,Ca=null,Mn=0,wa=null,Jr=null,$r=0,Sf=0,yf=null,cg=null,mo=0,Mf=null;function Yn(){if((Ct&2)!==0&&St!==0)return St&-St;if(z.T!==null){var t=Hr;return t!==0?t:wf()}return Mt()}function fg(){ii===0&&(ii=(St&536870912)===0||At?X():536870912);var t=ni.current;return t!==null&&(t.flags|=32),ii}function jn(t,n,a){(t===kt&&(wt===2||wt===9)||t.cancelPendingCommit!==null)&&(es(t,0),Da(t,St,ii,!1)),_e(t,a),((Ct&2)===0||t!==kt)&&(t===kt&&((Ct&2)===0&&(cr|=a),Kt===4&&Da(t,St,ii,!1)),bi(t))}function dg(t,n,a){if((Ct&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||nt(t,n),c=o?Rx(t,n):Tf(t,n,!0),f=o;do{if(c===0){Kr&&!o&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Tx(a)){c=Tf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var b=t;c=po;var P=b.current.memoizedState.isDehydrated;if(P&&(es(b,y).flags|=256),y=Tf(b,y,!1),y!==2){if(gf&&!P){b.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){es(t,0),Da(t,n,0,!0);break}e:{switch(o=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ii,!Aa);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=xf+300-it(),10<c)){if(Da(o,n,ii,!Aa),ut(o,0,!0)!==0)break e;o.timeoutHandle=Gg(hg.bind(null,o,a,In,Gl,vf,n,ii,cr,Qr,Aa,f,2,-0,0),c);break e}hg(o,a,In,Gl,vf,n,ii,cr,Qr,Aa,f,0,-0,0)}}break}while(!0);bi(t)}function hg(t,n,a,o,c,f,y,b,P,$,ce,ve,ne,ie){if(t.timeoutHandle=-1,ve=n.subtreeFlags,(ve&8192||(ve&16785408)===16785408)&&(Mo={stylesheets:null,count:0,unsuspend:sS},sg(n),ve=lS(),ve!==null)){t.cancelPendingCommit=ve(Sg.bind(null,t,n,f,a,o,c,y,b,P,ce,1,ne,ie)),Da(t,f,y,!$);return}Sg(t,n,f,a,o,c,y,b,P)}function Tx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,o){n&=~_f,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Ge(c),y=1<<f;o[f]=-1,c&=~y}a!==0&&Oe(t,a,n)}function Vl(){return(Ct&6)===0?(go(0),!1):!0}function Ef(){if(pt!==null){if(wt===0)var t=pt.return;else t=pt,Hi=ar=null,Fc(t),qr=null,ro=0,t=pt;for(;t!==null;)qm(t.alternate,t),t=t.return;pt=null}}function es(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,kx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ef(),kt=t,pt=a=Bi(t.current,null),St=n,wt=0,qn=null,Aa=!1,Kr=nt(t,n),gf=!1,Qr=ii=_f=cr=Ra=Kt=0,In=po=null,vf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ge(o),f=1<<c;n|=t[c],o&=~f}return ji=n,cl(),a}function pg(t,n){ct=null,z.H=wl,n===Ks||n===xl?(n=Up(),wt=3):n===Cp?(n=Up(),wt=4):wt=n===Nm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,pt===null&&(Kt=1,Ol(t,Jn(n,t.current)))}function mg(){var t=z.H;return z.H=wl,t===null?wl:t}function gg(){var t=z.A;return z.A=Ex,t}function bf(){Kt=4,Aa||(St&4194048)!==St&&ni.current!==null||(Kr=!0),(Ra&134217727)===0&&(cr&134217727)===0||kt===null||Da(kt,St,ii,!1)}function Tf(t,n,a){var o=Ct;Ct|=2;var c=mg(),f=gg();(kt!==t||St!==n)&&(Gl=null,es(t,n)),n=!1;var y=Kt;e:do try{if(wt!==0&&pt!==null){var b=pt,P=qn;switch(wt){case 8:Ef(),y=6;break e;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var $=wt;if(wt=0,qn=null,ts(t,b,P,$),a&&Kr){y=0;break e}break;default:$=wt,wt=0,qn=null,ts(t,b,P,$)}}Ax(),y=Kt;break}catch(ce){pg(t,ce)}while(!0);return n&&t.shellSuspendCounter++,Hi=ar=null,Ct=o,z.H=c,z.A=f,pt===null&&(kt=null,St=0,cl()),y}function Ax(){for(;pt!==null;)_g(pt)}function Rx(t,n){var a=Ct;Ct|=2;var o=mg(),c=gg();kt!==t||St!==n?(Gl=null,Hl=it()+500,es(t,n)):Kr=nt(t,n);e:do try{if(wt!==0&&pt!==null){n=pt;var f=qn;t:switch(wt){case 1:wt=0,qn=null,ts(t,n,f,1);break;case 2:case 9:if(wp(f)){wt=0,qn=null,vg(n);break}n=function(){wt!==2&&wt!==9||kt!==t||(wt=7),bi(t)},f.then(n,n);break e;case 3:wt=7;break e;case 4:wt=5;break e;case 7:wp(f)?(wt=0,qn=null,vg(n)):(wt=0,qn=null,ts(t,n,f,7));break;case 5:var y=null;switch(pt.tag){case 26:y=pt.memoizedState;case 5:case 27:var b=pt;if(!y||$g(y)){wt=0,qn=null;var P=b.sibling;if(P!==null)pt=P;else{var $=b.return;$!==null?(pt=$,kl($)):pt=null}break t}}wt=0,qn=null,ts(t,n,f,5);break;case 6:wt=0,qn=null,ts(t,n,f,6);break;case 8:Ef(),Kt=6;break e;default:throw Error(r(462))}}Cx();break}catch(ce){pg(t,ce)}while(!0);return Hi=ar=null,z.H=o,z.A=c,Ct=a,pt!==null?0:(kt=null,St=0,cl(),Kt)}function Cx(){for(;pt!==null&&!Ln();)_g(pt)}function _g(t){var n=Xm(t.alternate,t,ji);t.memoizedProps=t.pendingProps,n===null?kl(t):pt=n}function vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Im(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Im(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Fc(n);default:qm(a,n),n=pt=xp(n,ji),n=Xm(a,n,ji)}t.memoizedProps=t.pendingProps,n===null?kl(t):pt=n}function ts(t,n,a,o){Hi=ar=null,Fc(n),qr=null,ro=0;var c=n.return;try{if(_x(t,c,n,a,St)){Kt=1,Ol(t,Jn(a,t.current)),pt=null;return}}catch(f){if(c!==null)throw pt=c,f;Kt=1,Ol(t,Jn(a,t.current)),pt=null;return}n.flags&32768?(At||o===1?t=!0:Kr||(St&536870912)!==0?t=!1:(Aa=t=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),xg(n,t)):kl(n)}function kl(t){var n=t;do{if((n.flags&32768)!==0){xg(n,Aa);return}t=n.return;var a=xx(n.alternate,n,ji);if(a!==null){pt=a;return}if(n=n.sibling,n!==null){pt=n;return}pt=n=t}while(n!==null);Kt===0&&(Kt=5)}function xg(t,n){do{var a=Sx(t.alternate,t);if(a!==null){a.flags&=32767,pt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pt=t;return}pt=t=a}while(t!==null);Kt=6,pt=null}function Sg(t,n,a,o,c,f,y,b,P){t.cancelPendingCommit=null;do Xl();while(Mn!==0);if((Ct&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=pc,Be(t,a,f,y,b,P),t===kt&&(pt=kt=null,St=0),Jr=n,wa=t,$r=a,Sf=f,yf=c,cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nx(N,function(){return Tg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=K.p,K.p=2,y=Ct,Ct|=4;try{yx(t,n,a)}finally{Ct=y,K.p=c,z.T=o}}Mn=1,yg(),Mg(),Eg()}}function yg(){if(Mn===1){Mn=0;var t=wa,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Ct;Ct|=4;try{ig(n,t);var f=Bf,y=up(t.containerInfo),b=f.focusedElem,P=f.selectionRange;if(y!==b&&b&&b.ownerDocument&&lp(b.ownerDocument.documentElement,b)){if(P!==null&&uc(b)){var $=P.start,ce=P.end;if(ce===void 0&&(ce=$),"selectionStart"in b)b.selectionStart=$,b.selectionEnd=Math.min(ce,b.value.length);else{var ve=b.ownerDocument||document,ne=ve&&ve.defaultView||window;if(ne.getSelection){var ie=ne.getSelection(),tt=b.textContent.length,Ze=Math.min(P.start,tt),Ot=P.end===void 0?Ze:Math.min(P.end,tt);!ie.extend&&Ze>Ot&&(y=Ot,Ot=Ze,Ze=y);var q=op(b,Ze),k=op(b,Ot);if(q&&k&&(ie.rangeCount!==1||ie.anchorNode!==q.node||ie.anchorOffset!==q.offset||ie.focusNode!==k.node||ie.focusOffset!==k.offset)){var Q=ve.createRange();Q.setStart(q.node,q.offset),ie.removeAllRanges(),Ze>Ot?(ie.addRange(Q),ie.extend(k.node,k.offset)):(Q.setEnd(k.node,k.offset),ie.addRange(Q))}}}}for(ve=[],ie=b;ie=ie.parentNode;)ie.nodeType===1&&ve.push({element:ie,left:ie.scrollLeft,top:ie.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ve.length;b++){var de=ve[b];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}nu=!!zf,Bf=zf=null}finally{Ct=c,K.p=o,z.T=a}}t.current=n,Mn=2}}function Mg(){if(Mn===2){Mn=0;var t=wa,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=K.p;K.p=2;var c=Ct;Ct|=4;try{$m(t,n.alternate,n)}finally{Ct=c,K.p=o,z.T=a}}Mn=3}}function Eg(){if(Mn===4||Mn===3){Mn=0,_t();var t=wa,n=Jr,a=$r,o=cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Jr=wa=null,bg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),en(a),n=n.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=K.p,K.p=2,z.T=null;try{for(var f=t.onRecoverableError,y=0;y<o.length;y++){var b=o[y];f(b.value,{componentStack:b.stack})}}finally{z.T=n,K.p=c}}($r&3)!==0&&Xl(),bi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===Mf?mo++:(mo=0,Mf=t):mo=0,go(0)}}function bg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,js(n)))}function Xl(t){return yg(),Mg(),Eg(),Tg()}function Tg(){if(Mn!==5)return!1;var t=wa,n=Sf;Sf=0;var a=en($r),o=z.T,c=K.p;try{K.p=32>a?32:a,z.T=null,a=yf,yf=null;var f=wa,y=$r;if(Mn=0,Jr=wa=null,$r=0,(Ct&6)!==0)throw Error(r(331));var b=Ct;if(Ct|=4,lg(f.current),rg(f,f.current,y,a),Ct=b,go(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(fe,f)}catch{}return!0}finally{K.p=c,z.T=o,bg(t,n)}}function Ag(t,n,a){n=Jn(a,n),n=$c(t.stateNode,n,2),t=xa(t,n,2),t!==null&&(_e(t,2),bi(t))}function Ft(t,n,a){if(t.tag===3)Ag(t,t,a);else for(;n!==null;){if(n.tag===3){Ag(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){t=Jn(a,t),a=Dm(2),o=xa(n,a,2),o!==null&&(Um(a,o,n,t),_e(o,2),bi(o));break}}n=n.return}}function Af(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new bx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(gf=!0,c.add(a),t=wx.bind(null,t,n,a),n.then(t,t))}function wx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(St&a)===a&&(Kt===4||Kt===3&&(St&62914560)===St&&300>it()-xf?(Ct&2)===0&&es(t,0):_f|=a,Qr===St&&(Qr=0)),bi(t)}function Rg(t,n){n===0&&(n=Le()),t=zr(t,n),t!==null&&(_e(t,n),bi(t))}function Dx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Rg(t,a)}function Ux(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Rg(t,a)}function Nx(t,n){return ft(t,n)}var Wl=null,ns=null,Rf=!1,ql=!1,Cf=!1,fr=0;function bi(t){t!==ns&&t.next===null&&(ns===null?Wl=ns=t:ns=ns.next=t),ql=!0,Rf||(Rf=!0,Ox())}function go(t,n){if(!Cf&&ql){Cf=!0;do for(var a=!1,o=Wl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var y=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ge(42|t)+1)-1,f&=c&~(y&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ug(o,f))}else f=St,f=ut(o,o===kt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||nt(o,f)||(a=!0,Ug(o,f));o=o.next}while(a);Cf=!1}}function Lx(){Cg()}function Cg(){ql=Rf=!1;var t=0;fr!==0&&(Vx()&&(t=fr),fr=0);for(var n=it(),a=null,o=Wl;o!==null;){var c=o.next,f=wg(o,n);f===0?(o.next=null,a===null?Wl=c:a.next=c,c===null&&(ns=a)):(a=o,(t!==0||(f&3)!==0)&&(ql=!0)),o=c}go(t)}function wg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-Ge(f),b=1<<y,P=c[y];P===-1?((b&a)===0||(b&o)!==0)&&(c[y]=Ut(b,n)):P<=n&&(t.expiredLanes|=b),f&=~b}if(n=kt,a=St,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(wt===2||wt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||nt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&F(o),en(a)){case 2:case 8:a=Ve;break;case 32:a=N;break;case 268435456:a=te;break;default:a=N}return o=Dg.bind(null,t),a=ft(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&F(o),t.callbackPriority=2,t.callbackNode=null,2}function Dg(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Xl()&&t.callbackNode!==a)return null;var o=St;return o=ut(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(dg(t,o,n),wg(t,it()),t.callbackNode!=null&&t.callbackNode===a?Dg.bind(null,t):null)}function Ug(t,n){if(Xl())return null;dg(t,n,!0)}function Ox(){Xx(function(){(Ct&6)!==0?ft(Dt,Lx):Cg()})}function wf(){return fr===0&&(fr=X()),fr}function Ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:il(""+t)}function Lg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Px(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ng((c[xn]||null).action),y=o.submitter;y&&(n=(n=y[xn]||null)?Ng(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var b=new ol("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fr!==0){var P=y?Lg(c,y):new FormData(c);jc(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(b.preventDefault(),P=y?Lg(c,y):new FormData(c),jc(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var Df=0;Df<hc.length;Df++){var Uf=hc[Df],zx=Uf.toLowerCase(),Bx=Uf[0].toUpperCase()+Uf.slice(1);oi(zx,"on"+Bx)}oi(dp,"onAnimationEnd"),oi(hp,"onAnimationIteration"),oi(pp,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(ex,"onTransitionRun"),oi(tx,"onTransitionStart"),oi(nx,"onTransitionCancel"),oi(mp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Og(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var b=o[y],P=b.instance,$=b.currentTarget;if(b=b.listener,P!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=$;try{f(c)}catch(ce){Ll(ce)}c.currentTarget=null,f=P}else for(y=0;y<o.length;y++){if(b=o[y],P=b.instance,$=b.currentTarget,b=b.listener,P!==f&&c.isPropagationStopped())break e;f=b,c.currentTarget=$;try{f(c)}catch(ce){Ll(ce)}c.currentTarget=null,f=P}}}}function mt(t,n){var a=n[Ya];a===void 0&&(a=n[Ya]=new Set);var o=t+"__bubble";a.has(o)||(Pg(n,t,2,!1),a.add(o))}function Nf(t,n,a){var o=0;n&&(o|=4),Pg(a,t,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Lf(t){if(!t[Yl]){t[Yl]=!0,tl.forEach(function(a){a!=="selectionchange"&&(Ix.has(a)||Nf(a,!1,t),Nf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Nf("selectionchange",!1,n))}}function Pg(t,n,a,o){switch(r_(n)){case 2:var c=fS;break;case 8:c=dS;break;default:c=Yf}a=c.bind(null,n,a,t),c=void 0,!ec||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Of(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var b=o.stateNode.containerInfo;if(b===c)break;if(y===4)for(y=o.return;y!==null;){var P=y.tag;if((P===3||P===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;b!==null;){if(y=Ui(b),y===null)return;if(P=y.tag,P===5||P===6||P===26||P===27){o=f=y;continue e}b=b.parentNode}}o=o.return}Vh(function(){var $=f,ce=Ju(a),ve=[];e:{var ne=gp.get(t);if(ne!==void 0){var ie=ol,tt=t;switch(t){case"keypress":if(rl(a)===0)break e;case"keydown":case"keyup":ie=N0;break;case"focusin":tt="focus",ie=ac;break;case"focusout":tt="blur",ie=ac;break;case"beforeblur":case"afterblur":ie=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=P0;break;case dp:case hp:case pp:ie=E0;break;case mp:ie=B0;break;case"scroll":case"scrollend":ie=v0;break;case"wheel":ie=F0;break;case"copy":case"cut":case"paste":ie=T0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Yh;break;case"toggle":case"beforetoggle":ie=G0}var Ze=(n&4)!==0,Ot=!Ze&&(t==="scroll"||t==="scrollend"),q=Ze?ne!==null?ne+"Capture":null:ne;Ze=[];for(var k=$,Q;k!==null;){var de=k;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||q===null||(de=Ps(k,q),de!=null&&Ze.push(vo(k,de,Q))),Ot)break;k=k.return}0<Ze.length&&(ne=new ie(ne,tt,null,a,ce),ve.push({event:ne,listeners:Ze}))}}if((n&7)===0){e:{if(ne=t==="mouseover"||t==="pointerover",ie=t==="mouseout"||t==="pointerout",ne&&a!==Qu&&(tt=a.relatedTarget||a.fromElement)&&(Ui(tt)||tt[On]))break e;if((ie||ne)&&(ne=ce.window===ce?ce:(ne=ce.ownerDocument)?ne.defaultView||ne.parentWindow:window,ie?(tt=a.relatedTarget||a.toElement,ie=$,tt=tt?Ui(tt):null,tt!==null&&(Ot=u(tt),Ze=tt.tag,tt!==Ot||Ze!==5&&Ze!==27&&Ze!==6)&&(tt=null)):(ie=null,tt=$),ie!==tt)){if(Ze=Wh,de="onMouseLeave",q="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Ze=Yh,de="onPointerLeave",q="onPointerEnter",k="pointer"),Ot=ie==null?ne:Za(ie),Q=tt==null?ne:Za(tt),ne=new Ze(de,k+"leave",ie,a,ce),ne.target=Ot,ne.relatedTarget=Q,de=null,Ui(ce)===$&&(Ze=new Ze(q,k+"enter",tt,a,ce),Ze.target=Q,Ze.relatedTarget=Ot,de=Ze),Ot=de,ie&&tt)t:{for(Ze=ie,q=tt,k=0,Q=Ze;Q;Q=is(Q))k++;for(Q=0,de=q;de;de=is(de))Q++;for(;0<k-Q;)Ze=is(Ze),k--;for(;0<Q-k;)q=is(q),Q--;for(;k--;){if(Ze===q||q!==null&&Ze===q.alternate)break t;Ze=is(Ze),q=is(q)}Ze=null}else Ze=null;ie!==null&&zg(ve,ne,ie,Ze,!1),tt!==null&&Ot!==null&&zg(ve,Ot,tt,Ze,!0)}}e:{if(ne=$?Za($):window,ie=ne.nodeName&&ne.nodeName.toLowerCase(),ie==="select"||ie==="input"&&ne.type==="file")var He=tp;else if($h(ne))if(np)He=Q0;else{He=Z0;var dt=j0}else ie=ne.nodeName,!ie||ie.toLowerCase()!=="input"||ne.type!=="checkbox"&&ne.type!=="radio"?$&&Ku($.elementType)&&(He=tp):He=K0;if(He&&(He=He(t,$))){ep(ve,He,a,ce);break e}dt&&dt(t,ne,$),t==="focusout"&&$&&ne.type==="number"&&$.memoizedProps.value!=null&&Tn(ne,"number",ne.value)}switch(dt=$?Za($):window,t){case"focusin":($h(dt)||dt.contentEditable==="true")&&(Lr=dt,cc=$,ks=null);break;case"focusout":ks=cc=Lr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,cp(ve,a,ce);break;case"selectionchange":if($0)break;case"keydown":case"keyup":cp(ve,a,ce)}var ke;if(sc)e:{switch(t){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else Nr?Qh(t,a)&&(Je="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(jh&&a.locale!=="ko"&&(Nr||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&Nr&&(ke=kh()):(ma=ce,tc="value"in ma?ma.value:ma.textContent,Nr=!0)),dt=jl($,Je),0<dt.length&&(Je=new qh(Je,t,null,a,ce),ve.push({event:Je,listeners:dt}),ke?Je.data=ke:(ke=Jh(a),ke!==null&&(Je.data=ke)))),(ke=k0?X0(t,a):W0(t,a))&&(Je=jl($,"onBeforeInput"),0<Je.length&&(dt=new qh("onBeforeInput","beforeinput",null,a,ce),ve.push({event:dt,listeners:Je}),dt.data=ke)),Px(ve,t,$,a,ce)}Og(ve,n)})}function vo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function jl(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&o.unshift(vo(t,c,f)),c=Ps(t,n),c!=null&&o.push(vo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zg(t,n,a,o,c){for(var f=n._reactName,y=[];a!==null&&a!==o;){var b=a,P=b.alternate,$=b.stateNode;if(b=b.tag,P!==null&&P===o)break;b!==5&&b!==26&&b!==27||$===null||(P=$,c?($=Ps(a,f),$!=null&&y.unshift(vo(a,$,P))):c||($=Ps(a,f),$!=null&&y.push(vo(a,$,P)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Fx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Bg(t){return(typeof t=="string"?t:""+t).replace(Fx,`
`).replace(Hx,"")}function Ig(t,n){return n=Bg(n),Bg(t)===n}function Zl(){}function Lt(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(t,""+o);break;case"className":we(t,"class",o);break;case"tabIndex":we(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":we(t,a,o);break;case"style":Hh(t,o,f);break;case"data":if(n!=="object"){we(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Lt(t,n,"name",c.name,c,null),Lt(t,n,"formEncType",c.formEncType,c,null),Lt(t,n,"formMethod",c.formMethod,c,null),Lt(t,n,"formTarget",c.formTarget,c,null)):(Lt(t,n,"encType",c.encType,c,null),Lt(t,n,"method",c.method,c,null),Lt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=il(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Zl);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=il(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":mt("beforetoggle",t),mt("toggle",t),Te(t,"popover",o);break;case"xlinkActuate":De(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":De(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":De(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":De(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":De(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":De(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":De(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":De(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":De(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Te(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=g0.get(a)||a,Te(t,a,o))}}function Pf(t,n,a,o,c,f){switch(a){case"style":Hh(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?xi(t,o):(typeof o=="number"||typeof o=="bigint")&&xi(t,""+o);break;case"onScroll":o!=null&&mt("scroll",t);break;case"onScrollEnd":o!=null&&mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Te(t,a,o)}}}function En(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":mt("error",t),mt("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Lt(t,n,f,y,a,null)}}c&&Lt(t,n,"srcSet",a.srcSet,a,null),o&&Lt(t,n,"src",a.src,a,null);return;case"input":mt("invalid",t);var b=f=y=c=null,P=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var ce=a[o];if(ce!=null)switch(o){case"name":c=ce;break;case"type":y=ce;break;case"checked":P=ce;break;case"defaultChecked":$=ce;break;case"value":f=ce;break;case"defaultValue":b=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:Lt(t,n,o,ce,a,null)}}It(t,f,b,P,$,y,c,!1),jt(t);return;case"select":mt("invalid",t),o=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":y=b;break;case"multiple":o=b;default:Lt(t,n,c,b,a,null)}n=f,a=y,t.multiple=!!o,n!=null?ln(t,!!o,n,!1):a!=null&&ln(t,!!o,a,!0);return;case"textarea":mt("invalid",t),f=c=o=null;for(y in a)if(a.hasOwnProperty(y)&&(b=a[y],b!=null))switch(y){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Lt(t,n,y,b,a,null)}Sn(t,o,c,f),jt(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Lt(t,n,P,o,a,null)}return;case"dialog":mt("beforetoggle",t),mt("toggle",t),mt("cancel",t),mt("close",t);break;case"iframe":case"object":mt("load",t);break;case"video":case"audio":for(o=0;o<_o.length;o++)mt(_o[o],t);break;case"image":mt("error",t),mt("load",t);break;case"details":mt("toggle",t);break;case"embed":case"source":case"link":mt("error",t),mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Lt(t,n,$,o,a,null)}return;default:if(Ku(n)){for(ce in a)a.hasOwnProperty(ce)&&(o=a[ce],o!==void 0&&Pf(t,n,ce,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Lt(t,n,b,o,a,null))}function Gx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,b=null,P=null,$=null,ce=null;for(ie in a){var ve=a[ie];if(a.hasOwnProperty(ie)&&ve!=null)switch(ie){case"checked":break;case"value":break;case"defaultValue":P=ve;default:o.hasOwnProperty(ie)||Lt(t,n,ie,null,o,ve)}}for(var ne in o){var ie=o[ne];if(ve=a[ne],o.hasOwnProperty(ne)&&(ie!=null||ve!=null))switch(ne){case"type":f=ie;break;case"name":c=ie;break;case"checked":$=ie;break;case"defaultChecked":ce=ie;break;case"value":y=ie;break;case"defaultValue":b=ie;break;case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(r(137,n));break;default:ie!==ve&&Lt(t,n,ne,ie,o,ve)}}Oi(t,y,b,P,$,ce,f,c);return;case"select":ie=y=b=ne=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ie=P;default:o.hasOwnProperty(f)||Lt(t,n,f,null,o,P)}for(c in o)if(f=o[c],P=a[c],o.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":ne=f;break;case"defaultValue":b=f;break;case"multiple":y=f;default:f!==P&&Lt(t,n,c,f,o,P)}n=b,a=y,o=ie,ne!=null?ln(t,!!a,ne,!1):!!o!=!!a&&(n!=null?ln(t,!!a,n,!0):ln(t,!!a,a?[]:"",!1));return;case"textarea":ie=ne=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Lt(t,n,b,null,o,c)}for(y in o)if(c=o[y],f=a[y],o.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":ne=c;break;case"defaultValue":ie=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Lt(t,n,y,c,o,f)}pn(t,ne,ie);return;case"option":for(var tt in a)if(ne=a[tt],a.hasOwnProperty(tt)&&ne!=null&&!o.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:Lt(t,n,tt,null,o,ne)}for(P in o)if(ne=o[P],ie=a[P],o.hasOwnProperty(P)&&ne!==ie&&(ne!=null||ie!=null))switch(P){case"selected":t.selected=ne&&typeof ne!="function"&&typeof ne!="symbol";break;default:Lt(t,n,P,ne,o,ie)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ze in a)ne=a[Ze],a.hasOwnProperty(Ze)&&ne!=null&&!o.hasOwnProperty(Ze)&&Lt(t,n,Ze,null,o,ne);for($ in o)if(ne=o[$],ie=a[$],o.hasOwnProperty($)&&ne!==ie&&(ne!=null||ie!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(137,n));break;default:Lt(t,n,$,ne,o,ie)}return;default:if(Ku(n)){for(var Ot in a)ne=a[Ot],a.hasOwnProperty(Ot)&&ne!==void 0&&!o.hasOwnProperty(Ot)&&Pf(t,n,Ot,void 0,o,ne);for(ce in o)ne=o[ce],ie=a[ce],!o.hasOwnProperty(ce)||ne===ie||ne===void 0&&ie===void 0||Pf(t,n,ce,ne,o,ie);return}}for(var q in a)ne=a[q],a.hasOwnProperty(q)&&ne!=null&&!o.hasOwnProperty(q)&&Lt(t,n,q,null,o,ne);for(ve in o)ne=o[ve],ie=a[ve],!o.hasOwnProperty(ve)||ne===ie||ne==null&&ie==null||Lt(t,n,ve,ne,o,ie)}var zf=null,Bf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function Fg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Vx(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,kx=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(t){return Vg.resolve(null).then(t).catch(Wx)}:Gg;function Wx(t){setTimeout(function(){throw t})}function Ua(t){return t==="head"}function kg(t,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var y=t.ownerDocument;if(a&1&&xo(y.documentElement),a&2&&xo(y.body),a&4)for(a=y.head,xo(a),y=a.firstChild;y;){var b=y.nextSibling,P=y.nodeName;y[fa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&y.rel.toLowerCase()==="stylesheet"||a.removeChild(y),y=b}}if(c===0){t.removeChild(f),Ro(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Ro(n)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),da(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qx(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[fa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ui(t.nextSibling),t===null)break}return null}function Yx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ui(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function jx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Vf=null;function Xg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Wg(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);da(t)}var ai=new Map,qg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=K.d;K.d={f:Zx,r:Kx,D:Qx,C:Jx,L:$x,m:eS,X:nS,S:tS,M:iS};function Zx(){var t=Zi.f(),n=Vl();return t||n}function Kx(t){var n=Ni(t);n!==null&&n.tag===5&&n.type==="form"?dm(n):Zi.r(t)}var as=typeof document>"u"?null:document;function Yg(t,n,a){var o=as;if(o&&typeof n=="string"&&n){var c=Vt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),qg.has(c)||(qg.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function Qx(t){Zi.D(t),Yg("dns-prefetch",t,null)}function Jx(t,n){Zi.C(t,n),Yg("preconnect",t,n)}function $x(t,n,a){Zi.L(t,n,a);var o=as;if(o&&t&&n){var c='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Vt(a.imageSizes)+'"]')):c+='[href="'+Vt(t)+'"]';var f=c;switch(n){case"style":f=rs(t);break;case"script":f=ss(t)}ai.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ai.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(So(f))||n==="script"&&o.querySelector(yo(f))||(n=o.createElement("link"),En(n,"link",t),tn(n),o.head.appendChild(n)))}}function eS(t,n){Zi.m(t,n);var a=as;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ss(t)}if(!ai.has(f)&&(t=g({rel:"modulepreload",href:t},n),ai.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}o=a.createElement("link"),En(o,"link",t),tn(o),a.head.appendChild(o)}}}function tS(t,n,a){Zi.S(t,n,a);var o=as;if(o&&t){var c=ha(o).hoistableStyles,f=rs(t);n=n||"default";var y=c.get(f);if(!y){var b={loading:0,preload:null};if(y=o.querySelector(So(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ai.get(f))&&kf(t,a);var P=y=o.createElement("link");tn(P),En(P,"link",t),P._p=new Promise(function($,ce){P.onload=$,P.onerror=ce}),P.addEventListener("load",function(){b.loading|=1}),P.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Jl(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:b},c.set(f,y)}}}function nS(t,n){Zi.X(t,n);var a=as;if(a&&t){var o=ha(a).hoistableScripts,c=ss(t),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(t=g({src:t,async:!0},n),(n=ai.get(c))&&Xf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function iS(t,n){Zi.M(t,n);var a=as;if(a&&t){var o=ha(a).hoistableScripts,c=ss(t),f=o.get(c);f||(f=a.querySelector(yo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ai.get(c))&&Xf(t,n),f=a.createElement("script"),tn(f),En(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function jg(t,n,a,o){var c=(c=ye.current)?Ql(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=ha(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rs(a.href);var f=ha(c).hoistableStyles,y=f.get(t);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=c.querySelector(So(t)))&&!f._p&&(y.instance=f,y.state.loading=5),ai.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(t,a),f||aS(c,t,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=ha(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rs(t){return'href="'+Vt(t)+'"'}function So(t){return'link[rel="stylesheet"]['+t+"]"}function Zg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function aS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),tn(n),t.head.appendChild(n))}function ss(t){return'[src="'+Vt(t)+'"]'}function yo(t){return"script[async]"+t}function Kg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),En(o,"style",c),Jl(o,a.precedence,t),n.instance=o;case"stylesheet":c=rs(a.href);var f=t.querySelector(So(c));if(f)return n.state.loading|=4,n.instance=f,tn(f),f;o=Zg(a),(c=ai.get(c))&&kf(o,c),f=(t.ownerDocument||t).createElement("link"),tn(f);var y=f;return y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),En(f,"link",o),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=ss(a.src),(c=t.querySelector(yo(f)))?(n.instance=c,tn(c),c):(o=a,(c=ai.get(f))&&(o=g({},a),Xf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),tn(c),En(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,t));return n.instance}function Jl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,y=0;y<o.length;y++){var b=o[y];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Xf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function Qg(t,n,a){if($l===null){var o=new Map,c=$l=new Map;c.set(a,o)}else c=$l,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[fa]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var b=o.get(y);b?b.push(f):o.set(y,[f])}}return o}function Jg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function rS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Mo=null;function sS(){}function oS(t,n,a){if(Mo===null)throw Error(r(475));var o=Mo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=rs(a.href),f=t.querySelector(So(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=eu.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=f,tn(f);return}f=t.ownerDocument||t,a=Zg(a),(c=ai.get(c))&&kf(a,c),f=f.createElement("link"),tn(f);var y=f;y._p=new Promise(function(b,P){y.onload=b,y.onerror=P}),En(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=eu.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function lS(){if(Mo===null)throw Error(r(475));var t=Mo;return t.stylesheets&&t.count===0&&Wf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Wf(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function eu(){if(this.count--,this.count===0){if(this.stylesheets)Wf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var tu=null;function Wf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,tu=new Map,n.forEach(uS,t),tu=null,eu.call(t))}function uS(t,n){if(!(n.state.loading&4)){var a=tu.get(t);if(a)var o=a.get(null);else{a=new Map,tu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,c),a.set(y,c),this.count++,o=eu.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Eo={$$typeof:U,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function cS(t,n,a,o,c,f,y,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ue(0),this.hiddenUpdates=ue(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function e_(t,n,a,o,c,f,y,b,P,$,ce,ve){return t=new cS(t,n,a,y,b,P,$,ve),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=Tc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wc(f),t}function t_(t){return t?(t=Br,t):Br}function n_(t,n,a,o,c,f){c=t_(c),o.context===null?o.context=c:o.pendingContext=c,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=xa(t,o,n),a!==null&&(jn(a,t,n),Js(a,t,n))}function i_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function qf(t,n){i_(t,n),(t=t.alternate)&&i_(t,n)}function a_(t){if(t.tag===13){var n=zr(t,67108864);n!==null&&jn(n,t,67108864),qf(t,67108864)}}var nu=!0;function fS(t,n,a,o){var c=z.T;z.T=null;var f=K.p;try{K.p=2,Yf(t,n,a,o)}finally{K.p=f,z.T=c}}function dS(t,n,a,o){var c=z.T;z.T=null;var f=K.p;try{K.p=8,Yf(t,n,a,o)}finally{K.p=f,z.T=c}}function Yf(t,n,a,o){if(nu){var c=jf(o);if(c===null)Of(t,n,o,iu,a),s_(t,o);else if(pS(c,t,n,a,o))o.stopPropagation();else if(s_(t,o),n&4&&-1<hS.indexOf(t)){for(;c!==null;){var f=Ni(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=ze(f.pendingLanes);if(y!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;y;){var P=1<<31-Ge(y);b.entanglements[1]|=P,y&=~P}bi(f),(Ct&6)===0&&(Hl=it()+500,go(0))}}break;case 13:b=zr(f,2),b!==null&&jn(b,f,2),Vl(),qf(f,2)}if(f=jf(o),f===null&&Of(t,n,o,iu,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(t,n,o,null,a)}}function jf(t){return t=Ju(t),Zf(t)}var iu=null;function Zf(t){if(iu=null,t=Ui(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return iu=t,null}function r_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Dt:return 2;case Ve:return 8;case N:case T:return 32;case te:return 268435456;default:return 32}default:return 32}}var Kf=!1,Na=null,La=null,Oa=null,bo=new Map,To=new Map,Pa=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s_(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ni(n),n!==null&&a_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function pS(t,n,a,o,c){switch(n){case"focusin":return Na=Ao(Na,t,n,a,o,c),!0;case"dragenter":return La=Ao(La,t,n,a,o,c),!0;case"mouseover":return Oa=Ao(Oa,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Ao(bo.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,To.set(f,Ao(To.get(f)||null,t,n,a,o,c)),!0}return!1}function o_(t){var n=Ui(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Gn(t.priority,function(){if(a.tag===13){var o=Yn();o=Gt(o);var c=zr(a,o);c!==null&&jn(c,a,o),qf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function au(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=jf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Qu=o,a.target.dispatchEvent(o),Qu=null}else return n=Ni(a),n!==null&&a_(n),t.blockedOn=a,!1;n.shift()}return!0}function l_(t,n,a){au(t)&&a.delete(n)}function mS(){Kf=!1,Na!==null&&au(Na)&&(Na=null),La!==null&&au(La)&&(La=null),Oa!==null&&au(Oa)&&(Oa=null),bo.forEach(l_),To.forEach(l_)}function ru(t,n){t.blockedOn===n&&(t.blockedOn=null,Kf||(Kf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,mS)))}var su=null;function u_(t){su!==t&&(su=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){su===t&&(su=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Zf(o||a)===null)continue;break}var f=Ni(a);f!==null&&(t.splice(n,3),n-=3,jc(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Ro(t){function n(P){return ru(P,t)}Na!==null&&ru(Na,t),La!==null&&ru(La,t),Oa!==null&&ru(Oa,t),bo.forEach(n),To.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)o_(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],y=c[xn]||null;if(typeof f=="function")y||u_(a);else if(y){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[xn]||null)b=y.formAction;else if(Zf(c)!==null)continue}else b=y.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),u_(a)}}}function Qf(t){this._internalRoot=t}ou.prototype.render=Qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Yn();n_(a,o,t,n,null,null)},ou.prototype.unmount=Qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;n_(t.current,2,null,t,null,null),Vl(),n[On]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var n=Mt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&o_(t)}};var c_=e.version;if(c_!=="19.1.0")throw Error(r(527,c_,"19.1.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var gS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{fe=lu.inject(gS),Pe=lu}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Am,f=Rm,y=Cm,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=e_(t,1,!1,null,null,a,o,c,f,y,b,null),t[On]=n.current,Lf(t),new Qf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",f=Am,y=Rm,b=Cm,P=null,$=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&($=a.formState)),n=e_(t,1,!0,n,a??null,o,c,f,y,b,P,$),n.context=t_(null),a=n.current,o=Yn(),o=Gt(o),c=va(o),c.callback=null,xa(a,c,o),a=o,n.current.lanes=a,_e(n,a),bi(n),t[On]=n.current,Lf(t),new ou(n)},wo.version="19.1.0",wo}var S_;function AS(){if(S_)return ed.exports;S_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ed.exports=TS(),ed.exports}var RS=AS(),Do={},y_;function CS(){if(y_)return Do;y_=1,Object.defineProperty(Do,"__esModule",{value:!0}),Do.parse=d,Do.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function d(v,M){const E=new u,A=v.length;if(A<2)return E;const S=(M==null?void 0:M.decode)||g;let _=0;do{const L=v.indexOf("=",_);if(L===-1)break;const U=v.indexOf(";",_),w=U===-1?A:U;if(L>w){_=v.lastIndexOf(";",L-1)+1;continue}const I=h(v,_,L),V=m(v,L,I),B=v.slice(I,V);if(E[B]===void 0){let W=h(v,L+1,w),D=m(v,w,W);const C=S(v.slice(W,D));E[B]=C}_=w+1}while(_<A);return E}function h(v,M,E){do{const A=v.charCodeAt(M);if(A!==32&&A!==9)return M}while(++M<E);return E}function m(v,M,E){for(;M>E;){const A=v.charCodeAt(--M);if(A!==32&&A!==9)return M+1}return E}function p(v,M,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=A(M);if(!e.test(S))throw new TypeError(`argument val is invalid: ${M}`);let _=v+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Do}CS();var M_="popstate";function wS(s={}){function e(l,u){let{pathname:d="/",search:h="",hash:m=""}=Rr(l.location.hash.substring(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),Od("",{pathname:d,search:h,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let d=l.document.querySelector("base"),h="";if(d&&d.getAttribute("href")){let m=l.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof u=="string"?u:Fo(u))}function r(l,u){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return US(e,i,r,s)}function Yt(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function vi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function DS(){return Math.random().toString(36).substring(2,10)}function E_(s,e){return{usr:s.state,key:s.key,idx:e}}function Od(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Rr(e):e,state:i,key:e&&e.key||r||DS()}}function Fo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Rr(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function US(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,d=l.history,h="POP",m=null,p=g();p==null&&(p=0,d.replaceState({...d.state,idx:p},""));function g(){return(d.state||{idx:null}).idx}function x(){h="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:h,location:A.location,delta:_})}function v(S,_){h="PUSH";let L=Od(A.location,S,_);i&&i(L,S),p=g()+1;let U=E_(L,p),w=A.createHref(L);try{d.pushState(U,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(w)}u&&m&&m({action:h,location:A.location,delta:1})}function M(S,_){h="REPLACE";let L=Od(A.location,S,_);i&&i(L,S),p=g();let U=E_(L,p),w=A.createHref(L);d.replaceState(U,"",w),u&&m&&m({action:h,location:A.location,delta:0})}function E(S){return NS(S)}let A={get action(){return h},get location(){return s(l,d)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(M_,x),m=S,()=>{l.removeEventListener(M_,x),m=null}},createHref(S){return e(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:M,go(S){return d.go(S)}};return A}function NS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Yt(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Fo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function bv(s,e,i="/"){return LS(s,e,i,!1)}function LS(s,e,i,r){let l=typeof e=="string"?Rr(e):e,u=oa(l.pathname||"/",i);if(u==null)return null;let d=Tv(s);OS(d);let h=null;for(let m=0;h==null&&m<d.length;++m){let p=WS(u);h=kS(d[m],p,r)}return h}function Tv(s,e=[],i=[],r=""){let l=(u,d,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};m.relativePath.startsWith("/")&&(Yt(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=ra([r,m.relativePath]),g=i.concat(m);u.children&&u.children.length>0&&(Yt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Tv(u.children,e,g,p)),!(u.path==null&&!u.index)&&e.push({path:p,score:GS(p,u.index),routesMeta:g})};return s.forEach((u,d)=>{var h;if(u.path===""||!((h=u.path)!=null&&h.includes("?")))l(u,d);else for(let m of Av(u.path))l(u,d,m)}),e}function Av(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let d=Av(r.join("/")),h=[];return h.push(...d.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...d),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function OS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:VS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var PS=/^:[\w-]+$/,zS=3,BS=2,IS=1,FS=10,HS=-2,b_=s=>s==="*";function GS(s,e){let i=s.split("/"),r=i.length;return i.some(b_)&&(r+=HS),e&&(r+=BS),i.filter(l=>!b_(l)).reduce((l,u)=>l+(PS.test(u)?zS:u===""?IS:FS),r)}function VS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function kS(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",d=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",x=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&i&&!r[r.length-1].route.index&&(x=Gu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),d.push({params:l,pathname:ra([u,x.pathname]),pathnameBase:ZS(ra([u,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(u=ra([u,x.pathnameBase]))}return d}function Gu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=XS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let u=l[0],d=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=h[v]||"";d=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const M=h[v];return x&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:d,pattern:s}}function XS(s,e=!1,i=!0){vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function WS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function oa(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function qS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Rr(s):s;return{pathname:i?i.startsWith("/")?i:YS(i,e):e,search:KS(r),hash:QS(l)}}function YS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ad(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function jS(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Rv(s){let e=jS(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function Cv(s,e,i,r=!1){let l;typeof s=="string"?l=Rr(s):(l={...s},Yt(!l.pathname||!l.pathname.includes("?"),ad("?","pathname","search",l)),Yt(!l.pathname||!l.pathname.includes("#"),ad("#","pathname","hash",l)),Yt(!l.search||!l.search.includes("#"),ad("#","search","hash",l)));let u=s===""||l.pathname==="",d=u?"/":l.pathname,h;if(d==null)h=i;else{let x=e.length-1;if(!r&&d.startsWith("..")){let v=d.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}h=x>=0?e[x]:"/"}let m=qS(l,h),p=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ra=s=>s.join("/").replace(/\/\/+/g,"/"),ZS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),KS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,QS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function JS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var wv=["POST","PUT","PATCH","DELETE"];new Set(wv);var $S=["GET",...wv];new Set($S);var Us=he.createContext(null);Us.displayName="DataRouter";var Wu=he.createContext(null);Wu.displayName="DataRouterState";var Dv=he.createContext({isTransitioning:!1});Dv.displayName="ViewTransition";var ey=he.createContext(new Map);ey.displayName="Fetchers";var ty=he.createContext(null);ty.displayName="Await";var wi=he.createContext(null);wi.displayName="Navigation";var Wo=he.createContext(null);Wo.displayName="Location";var Di=he.createContext({outlet:null,matches:[],isDataRoute:!1});Di.displayName="Route";var Eh=he.createContext(null);Eh.displayName="RouteError";function ny(s,{relative:e}={}){Yt(qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=he.useContext(wi),{hash:l,pathname:u,search:d}=Yo(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:ra([i,u])),r.createHref({pathname:h,search:d,hash:l})}function qo(){return he.useContext(Wo)!=null}function Cr(){return Yt(qo(),"useLocation() may be used only in the context of a <Router> component."),he.useContext(Wo).location}var Uv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Nv(s){he.useContext(wi).static||he.useLayoutEffect(s)}function iy(){let{isDataRoute:s}=he.useContext(Di);return s?vy():ay()}function ay(){Yt(qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=he.useContext(Us),{basename:e,navigator:i}=he.useContext(wi),{matches:r}=he.useContext(Di),{pathname:l}=Cr(),u=JSON.stringify(Rv(r)),d=he.useRef(!1);return Nv(()=>{d.current=!0}),he.useCallback((m,p={})=>{if(vi(d.current,Uv),!d.current)return;if(typeof m=="number"){i.go(m);return}let g=Cv(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ra([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}var ry=he.createContext(null);function sy(s){let e=he.useContext(Di).outlet;return e&&he.createElement(ry.Provider,{value:s},e)}function Yo(s,{relative:e}={}){let{matches:i}=he.useContext(Di),{pathname:r}=Cr(),l=JSON.stringify(Rv(i));return he.useMemo(()=>Cv(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function oy(s,e){return Lv(s,e)}function Lv(s,e,i,r){var _;Yt(qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=he.useContext(wi),{matches:u}=he.useContext(Di),d=u[u.length-1],h=d?d.params:{},m=d?d.pathname:"/",p=d?d.pathnameBase:"/",g=d&&d.route;{let L=g&&g.path||"";Ov(m,!g||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let x=Cr(),v;if(e){let L=typeof e=="string"?Rr(e):e;Yt(p==="/"||((_=L.pathname)==null?void 0:_.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${L.pathname}" was given in the \`location\` prop.`),v=L}else v=x;let M=v.pathname||"/",E=M;if(p!=="/"){let L=p.replace(/^\//,"").split("/");E="/"+M.replace(/^\//,"").split("/").slice(L.length).join("/")}let A=bv(s,{pathname:E});vi(g||A!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),vi(A==null||A[A.length-1].route.element!==void 0||A[A.length-1].route.Component!==void 0||A[A.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=dy(A&&A.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:ra([p,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?p:ra([p,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),u,i,r);return e&&S?he.createElement(Wo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function ly(){let s=_y(),e=JS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",s),d=he.createElement(he.Fragment,null,he.createElement("p",null,"💿 Hey developer 👋"),he.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",he.createElement("code",{style:u},"ErrorBoundary")," or"," ",he.createElement("code",{style:u},"errorElement")," prop on your route.")),he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),i?he.createElement("pre",{style:l},i):null,d)}var uy=he.createElement(ly,null),cy=class extends he.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){console.error("React Router caught the following error during render",s,e)}render(){return this.state.error!==void 0?he.createElement(Di.Provider,{value:this.props.routeContext},he.createElement(Eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fy({routeContext:s,match:e,children:i}){let r=he.useContext(Us);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),he.createElement(Di.Provider,{value:s},i)}function dy(s,e=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let m=l.findIndex(p=>p.route.id&&(u==null?void 0:u[p.route.id])!==void 0);Yt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let d=!1,h=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=m),p.route.id){let{loaderData:g,errors:x}=i,v=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let x,v=!1,M=null,E=null;i&&(x=u&&p.route.id?u[p.route.id]:void 0,M=p.route.errorElement||uy,d&&(h<0&&g===0?(Ov("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):h===g&&(v=!0,E=p.route.hydrateFallbackElement||null)));let A=e.concat(l.slice(0,g+1)),S=()=>{let _;return x?_=M:v?_=E:p.route.Component?_=he.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,he.createElement(fy,{match:p,routeContext:{outlet:m,matches:A,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?he.createElement(cy,{location:i.location,revalidation:i.revalidation,component:M,error:x,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function bh(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hy(s){let e=he.useContext(Us);return Yt(e,bh(s)),e}function py(s){let e=he.useContext(Wu);return Yt(e,bh(s)),e}function my(s){let e=he.useContext(Di);return Yt(e,bh(s)),e}function Th(s){let e=my(s),i=e.matches[e.matches.length-1];return Yt(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function gy(){return Th("useRouteId")}function _y(){var r;let s=he.useContext(Eh),e=py("useRouteError"),i=Th("useRouteError");return s!==void 0?s:(r=e.errors)==null?void 0:r[i]}function vy(){let{router:s}=hy("useNavigate"),e=Th("useNavigate"),i=he.useRef(!1);return Nv(()=>{i.current=!0}),he.useCallback(async(l,u={})=>{vi(i.current,Uv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var T_={};function Ov(s,e,i){!e&&!T_[s]&&(T_[s]=!0,vi(!1,i))}he.memo(xy);function xy({routes:s,future:e,state:i}){return Lv(s,void 0,i,e)}function Sy(s){return sy(s.context)}function ys(s){Yt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function yy({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Yt(!qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=s.replace(/^\/*/,"/"),h=he.useMemo(()=>({basename:d,navigator:l,static:u,future:{}}),[d,l,u]);typeof i=="string"&&(i=Rr(i));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=i,M=he.useMemo(()=>{let E=oa(m,d);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:r}},[d,m,p,g,x,v,r]);return vi(M!=null,`<Router basename="${d}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:he.createElement(wi.Provider,{value:h},he.createElement(Wo.Provider,{children:e,value:M}))}function My({children:s,location:e}){return oy(Pd(s),e)}function Pd(s,e=[]){let i=[];return he.Children.forEach(s,(r,l)=>{if(!he.isValidElement(r))return;let u=[...e,l];if(r.type===he.Fragment){i.push.apply(i,Pd(r.props.children,u));return}Yt(r.type===ys,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Yt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Pd(r.props.children,u)),i.push(d)}),i}var Nu="get",Lu="application/x-www-form-urlencoded";function qu(s){return s!=null&&typeof s.tagName=="string"}function Ey(s){return qu(s)&&s.tagName.toLowerCase()==="button"}function by(s){return qu(s)&&s.tagName.toLowerCase()==="form"}function Ty(s){return qu(s)&&s.tagName.toLowerCase()==="input"}function Ay(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ry(s,e){return s.button===0&&(!e||e==="_self")&&!Ay(s)}var uu=null;function Cy(){if(uu===null)try{new FormData(document.createElement("form"),0),uu=!1}catch{uu=!0}return uu}var wy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function rd(s){return s!=null&&!wy.has(s)?(vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`),null):s}function Dy(s,e){let i,r,l,u,d;if(by(s)){let h=s.getAttribute("action");r=h?oa(h,e):null,i=s.getAttribute("method")||Nu,l=rd(s.getAttribute("enctype"))||Lu,u=new FormData(s)}else if(Ey(s)||Ty(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?oa(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Nu,l=rd(s.getAttribute("formenctype"))||rd(h.getAttribute("enctype"))||Lu,u=new FormData(h,s),!Cy()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else p&&u.append(p,x)}}else{if(qu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nu,r=null,l=Lu,d=s}return u&&l==="text/plain"&&(d=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:d}}function Ah(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}async function Uy(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ny(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Ly(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let d=await Uy(u,i);return d.links?d.links():[]}return[]}));return By(r.flat(1).filter(Ny).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function A_(s,e,i,r,l,u){let d=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,p)=>d(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{var x;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(d(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Oy(s,e,{includeHydrateFallback:i}={}){return Py(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Py(s){return[...new Set(s)]}function zy(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function By(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(zy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Iy=new Set([100,101,204,205]);function Fy(s,e){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":e&&oa(i.pathname,e)==="/"?i.pathname=`${e.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Pv(){let s=he.useContext(Us);return Ah(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Hy(){let s=he.useContext(Wu);return Ah(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Rh=he.createContext(void 0);Rh.displayName="FrameworkContext";function zv(){let s=he.useContext(Rh);return Ah(s,"You must render this element inside a <HydratedRouter> element"),s}function Gy(s,e){let i=he.useContext(Rh),[r,l]=he.useState(!1),[u,d]=he.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,v=he.useRef(null);he.useEffect(()=>{if(s==="render"&&d(!0),s==="viewport"){let A=_=>{_.forEach(L=>{d(L.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),he.useEffect(()=>{if(r){let A=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(A)}}},[r]);let M=()=>{l(!0)},E=()=>{l(!1),d(!1)};return i?s!=="intent"?[u,v,{}]:[u,v,{onFocus:Uo(h,M),onBlur:Uo(m,E),onMouseEnter:Uo(p,M),onMouseLeave:Uo(g,E),onTouchStart:Uo(x,M)}]:[!1,v,{}]}function Uo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function Vy({page:s,...e}){let{router:i}=Pv(),r=he.useMemo(()=>bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?he.createElement(Xy,{page:s,matches:r,...e}):null}function ky(s){let{manifest:e,routeModules:i}=zv(),[r,l]=he.useState([]);return he.useEffect(()=>{let u=!1;return Ly(s,e,i).then(d=>{u||l(d)}),()=>{u=!0}},[s,e,i]),r}function Xy({page:s,matches:e,...i}){let r=Cr(),{manifest:l,routeModules:u}=zv(),{basename:d}=Pv(),{loaderData:h,matches:m}=Hy(),p=he.useMemo(()=>A_(s,e,m,l,r,"data"),[s,e,m,l,r]),g=he.useMemo(()=>A_(s,e,m,l,r,"assets"),[s,e,m,l,r]),x=he.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(e.forEach(_=>{var U;let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(w=>w.route.id===_.route.id)&&_.route.id in h&&((U=u[_.route.id])!=null&&U.shouldRevalidate)||L.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=Fy(s,d);return A&&E.size>0&&S.searchParams.set("_routes",e.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[d,h,r,l,p,e,s,u]),v=he.useMemo(()=>Oy(g,l),[g,l]),M=ky(g);return he.createElement(he.Fragment,null,x.map(E=>he.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>he.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),M.map(({key:E,link:A})=>he.createElement("link",{key:E,...A})))}function Wy(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var Bv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bv&&(window.__reactRouterVersion="7.6.1")}catch{}function qy({basename:s,children:e,window:i}){let r=he.useRef();r.current==null&&(r.current=wS({window:i,v5Compat:!0}));let l=r.current,[u,d]=he.useState({action:l.action,location:l.location}),h=he.useCallback(m=>{he.startTransition(()=>d(m))},[d]);return he.useLayoutEffect(()=>l.listen(h),[l,h]),he.createElement(yy,{basename:s,children:e,location:u.location,navigationType:u.action,navigator:l})}var Iv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hi=he.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:d,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},M){let{basename:E}=he.useContext(wi),A=typeof p=="string"&&Iv.test(p),S,_=!1;if(typeof p=="string"&&A&&(S=p,Bv))try{let D=new URL(window.location.href),C=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=oa(C.pathname,E);C.origin===D.origin&&G!=null?p=G+C.search+C.hash:_=!0}catch{vi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=ny(p,{relative:l}),[U,w,I]=Gy(r,v),V=Ky(p,{replace:d,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:x});function B(D){e&&e(D),D.defaultPrevented||V(D)}let W=he.createElement("a",{...v,...I,href:S||L,onClick:_||u?e:B,ref:Wy(M,w),target:m,"data-discover":!A&&i==="render"?"true":void 0});return U&&!A?he.createElement(he.Fragment,null,W,he.createElement(Vy,{page:L})):W});hi.displayName="Link";var Yy=he.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:d,viewTransition:h,children:m,...p},g){let x=Yo(d,{relative:p.relative}),v=Cr(),M=he.useContext(Wu),{navigator:E,basename:A}=he.useContext(wi),S=M!=null&&tM(x)&&h===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,L=v.pathname,U=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&A&&(U=oa(U,A)||U);const w=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=L===_||!l&&L.startsWith(_)&&L.charAt(w)==="/",V=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),B={isActive:I,isPending:V,isTransitioning:S},W=I?e:void 0,D;typeof r=="function"?D=r(B):D=[r,I?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(B):u;return he.createElement(hi,{...p,"aria-current":W,className:D,ref:g,style:C,to:d,viewTransition:h},typeof m=="function"?m(B):m)});Yy.displayName="NavLink";var jy=he.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:d=Nu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},M)=>{let E=$y(),A=eM(h,{relative:p}),S=d.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&Iv.test(h),L=U=>{if(m&&m(U),U.defaultPrevented)return;U.preventDefault();let w=U.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||d;E(w||U.currentTarget,{fetcherKey:e,method:I,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:x})};return he.createElement("form",{ref:M,method:S,action:A,onSubmit:r?m:L,...v,"data-discover":!_&&s==="render"?"true":void 0})});jy.displayName="Form";function Zy(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Fv(s){let e=he.useContext(Us);return Yt(e,Zy(s)),e}function Ky(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:d}={}){let h=iy(),m=Cr(),p=Yo(s,{relative:u});return he.useCallback(g=>{if(Ry(g,e)){g.preventDefault();let x=i!==void 0?i:Fo(m)===Fo(p);h(s,{replace:x,state:r,preventScrollReset:l,relative:u,viewTransition:d})}},[m,h,p,i,r,e,s,l,u,d])}var Qy=0,Jy=()=>`__${String(++Qy)}__`;function $y(){let{router:s}=Fv("useSubmit"),{basename:e}=he.useContext(wi),i=gy();return he.useCallback(async(r,l={})=>{let{action:u,method:d,encType:h,formData:m,body:p}=Dy(r,e);if(l.navigate===!1){let g=l.fetcherKey||Jy();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||d,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function eM(s,{relative:e}={}){let{basename:i}=he.useContext(wi),r=he.useContext(Di);Yt(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Yo(s||".",{relative:e})},d=Cr();if(s==null){u.search=d.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ra([i,u.pathname])),Fo(u)}function tM(s,e={}){let i=he.useContext(Dv);Yt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Fv("useViewTransitionState"),l=Yo(s,{relative:e.relative});if(!i.isTransitioning)return!1;let u=oa(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=oa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Gu(l.pathname,d)!=null||Gu(l.pathname,u)!=null}[...Iy];const nM=()=>{const[s,e]=he.useState(!1);return H.jsxs("nav",{className:"bg-black text-white fixed w-full z-50 shadow-lg",children:[H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsxs("div",{className:"flex items-center justify-between h-16",children:[H.jsx("div",{className:"flex items-center",children:H.jsx(hi,{to:"/",className:"flex-shrink-0",children:H.jsx("span",{className:"text-2xl font-bold text-blue-500",children:"KTZ"})})}),H.jsx("div",{className:"hidden md:block",children:H.jsxs("div",{className:"ml-10 flex items-baseline space-x-4",children:[H.jsx(hi,{to:"/",className:"hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Home"}),H.jsx(hi,{to:"/about",className:"hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"About Us"}),H.jsx(hi,{to:"/team",className:"hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Team"}),H.jsx(hi,{to:"/contact",className:"hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors",children:"Contact"})]})}),H.jsx("div",{className:"md:hidden",children:H.jsxs("button",{onClick:()=>e(!s),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none",children:[H.jsx("span",{className:"sr-only",children:"Open main menu"}),s?H.jsx("svg",{className:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}):H.jsx("svg",{className:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:H.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),s&&H.jsx("div",{className:"md:hidden",children:H.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[H.jsx(hi,{to:"/",className:"hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium",children:"Home"}),H.jsx(hi,{to:"/about",className:"hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium",children:"About Us"}),H.jsx(hi,{to:"/team",className:"hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium",children:"Team"}),H.jsx(hi,{to:"/contact",className:"hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium",children:"Contact"})]})})]})},iM=()=>H.jsxs("div",{className:"min-h-screen bg-gray-50",children:[H.jsx(nM,{}),H.jsx("main",{className:"pt-16",children:H.jsx(Sy,{})}),H.jsx("footer",{className:"bg-gray-900 text-white py-8",children:H.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[H.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-semibold mb-4",children:"KTZ"}),H.jsx("p",{className:"text-gray-400",children:"Unlocking Alpha Through Data-Driven Innovation"})]}),H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact"}),H.jsx("p",{className:"text-gray-400",children:"Email: info@ktz.com"}),H.jsx("p",{className:"text-gray-400",children:"Phone: (555) 123-4567"})]}),H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Follow Us"}),H.jsxs("div",{className:"flex space-x-4",children:[H.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:"LinkedIn"}),H.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:"Twitter"})]})]})]}),H.jsx("div",{className:"mt-8 pt-8 border-t border-gray-800 text-center text-gray-400",children:H.jsxs("p",{children:["© ",new Date().getFullYear()," KTZ. All rights reserved."]})})]})})]});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ch="176",aM=0,R_=1,rM=2,Hv=1,sM=2,ta=3,qa=0,Fn=1,na=2,Xa=0,bs=1,C_=2,w_=3,D_=4,oM=5,Sr=100,lM=101,uM=102,cM=103,fM=104,dM=200,hM=201,pM=202,mM=203,zd=204,Bd=205,gM=206,_M=207,vM=208,xM=209,SM=210,yM=211,MM=212,EM=213,bM=214,Id=0,Fd=1,Hd=2,As=3,Gd=4,Vd=5,kd=6,Xd=7,Gv=0,TM=1,AM=2,Wa=0,RM=1,CM=2,wM=3,DM=4,UM=5,NM=6,LM=7,Vv=300,Rs=301,Cs=302,Wd=303,qd=304,Yu=306,Yd=1e3,Mr=1001,jd=1002,_i=1003,OM=1004,cu=1005,Ai=1006,sd=1007,Er=1008,la=1009,kv=1010,Xv=1011,Ho=1012,wh=1013,Tr=1014,ia=1015,jo=1016,Dh=1017,Uh=1018,Go=1020,Wv=35902,qv=1021,Yv=1022,gi=1023,Vo=1026,ko=1027,jv=1028,Nh=1029,Zv=1030,Lh=1031,Oh=1033,Ou=33776,Pu=33777,zu=33778,Bu=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,eh=37492,th=37496,nh=37808,ih=37809,ah=37810,rh=37811,sh=37812,oh=37813,lh=37814,uh=37815,ch=37816,fh=37817,dh=37818,hh=37819,ph=37820,mh=37821,Iu=36492,gh=36494,_h=36495,Kv=36283,vh=36284,xh=36285,Sh=36286,PM=3200,zM=3201,BM=0,IM=1,ka="",si="srgb",ws="srgb-linear",Vu="linear",Pt="srgb",os=7680,U_=519,FM=512,HM=513,GM=514,Qv=515,VM=516,kM=517,XM=518,WM=519,N_=35044,L_="300 es",aa=2e3,ku=2001;class Ns{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let O_=1234567;const Bo=Math.PI/180,Xo=180/Math.PI;function Ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function gt(s,e,i){return Math.max(e,Math.min(i,s))}function Ph(s,e){return(s%e+e)%e}function qM(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function YM(s,e,i){return s!==e?(i-s)/(e-s):0}function Io(s,e,i){return(1-i)*s+i*e}function jM(s,e,i,r){return Io(s,e,1-Math.exp(-i*r))}function ZM(s,e=1){return e-Math.abs(Ph(s,e*2)-e)}function KM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function QM(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function JM(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $M(s,e){return s+Math.random()*(e-s)}function eE(s){return s*(.5-Math.random())}function tE(s){s!==void 0&&(O_=s);let e=O_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nE(s){return s*Bo}function iE(s){return s*Xo}function aE(s){return(s&s-1)===0&&s!==0}function rE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oE(s,e,i,r,l){const u=Math.cos,d=Math.sin,h=u(i/2),m=d(i/2),p=u((e+r)/2),g=d((e+r)/2),x=u((e-r)/2),v=d((e-r)/2),M=u((r-e)/2),E=d((r-e)/2);switch(l){case"XYX":s.set(h*g,m*x,m*v,h*p);break;case"YZY":s.set(m*v,h*g,m*x,h*p);break;case"ZXZ":s.set(m*x,m*v,h*g,h*p);break;case"XZX":s.set(h*g,m*E,m*M,h*p);break;case"YXY":s.set(m*M,h*g,m*E,h*p);break;case"ZYZ":s.set(m*E,m*M,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ms(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const P_={DEG2RAD:Bo,RAD2DEG:Xo,generateUUID:Ls,clamp:gt,euclideanModulo:Ph,mapLinear:qM,inverseLerp:YM,lerp:Io,damp:jM,pingpong:ZM,smoothstep:KM,smootherstep:QM,randInt:JM,randFloat:$M,randFloatSpread:eE,seededRandom:tE,degToRad:nE,radToDeg:iE,isPowerOfTwo:aE,ceilPowerOfTwo:rE,floorPowerOfTwo:sE,setQuaternionFromProperEuler:oE,normalize:Un,denormalize:Ms};class Rt{constructor(e=0,i=0){Rt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,i,r,l,u,d,h,m,p){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],M=r[5],E=r[8],A=l[0],S=l[3],_=l[6],L=l[1],U=l[4],w=l[7],I=l[2],V=l[5],B=l[8];return u[0]=d*A+h*L+m*I,u[3]=d*S+h*U+m*V,u[6]=d*_+h*w+m*B,u[1]=p*A+g*L+x*I,u[4]=p*S+g*U+x*V,u[7]=p*_+g*w+x*B,u[2]=v*A+M*L+E*I,u[5]=v*S+M*U+E*V,u[8]=v*_+M*w+E*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,v=h*m-g*u,M=p*u-d*m,E=i*x+r*v+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(l*p-g*r)*A,e[2]=(h*r-l*d)*A,e[3]=v*A,e[4]=(g*i-l*m)*A,e[5]=(l*u-h*i)*A,e[6]=M*A,e[7]=(r*m-p*i)*A,e[8]=(d*i-r*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(od.makeScale(e,i)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,i){return this.premultiply(od.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new st;function Jv(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lE(){const s=Xu("canvas");return s.style.display="block",s}const z_={};function Fu(s){s in z_||(z_[s]=!0,console.warn(s))}function uE(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function cE(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fE(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const B_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const s={enabled:!0,workingColorSpace:ws,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Pt&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pt&&(l.r=Ts(l.r),l.g=Ts(l.g),l.b=Ts(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Vu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ws]:{primaries:e,whitePoint:r,transfer:Vu,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:r,transfer:Pt,toXYZ:B_,fromXYZ:I_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const Tt=dE();function sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ls;class hE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ls===void 0&&(ls=Xu("canvas")),ls.width=e.width,ls.height=e.height;const l=ls.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ls}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Xu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=sa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pE=0;class zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Ls(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ld(l[d].image)):u.push(ld(l[d]))}else u=ld(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mE=0;class Hn extends Ns{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Mr,l=Mr,u=Ai,d=Er,h=gi,m=la,p=Hn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Ls(),this.name="",this.source=new zh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yd:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yd:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Vv;Hn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,i=0,r=0,l=1){$t.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],M=m[5],E=m[9],A=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,I=(_+1)/2,V=(g+v)/4,B=(x+A)/4,W=(E+S)/4;return U>w&&U>I?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=V/r,u=B/r):w>I?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=V/l,u=W/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=B/u,l=W/u),this.set(r,l,u,i),this}let L=Math.sqrt((S-E)*(S-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(L)<.001&&(L=1),this.x=(S-E)/L,this.y=(x-A)/L,this.z=(v-g)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this.w=gt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this.w=gt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gE extends Ns{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new $t(0,0,e,i),this.scissorTest=!1,this.viewport=new $t(0,0,e,i);const l={width:e,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Hn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends gE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class $v extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _E extends Hn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[d+0],M=u[d+1],E=u[d+2],A=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h===1){e[i+0]=v,e[i+1]=M,e[i+2]=E,e[i+3]=A;return}if(x!==A||m!==v||p!==M||g!==E){let S=1-h;const _=m*v+p*M+g*E+x*A,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const I=Math.sqrt(U),V=Math.atan2(I,_*L);S=Math.sin(S*V)/I,h=Math.sin(h*V)/I}const w=h*L;if(m=m*S+v*w,p=p*S+M*w,g=g*S+E*w,x=x*S+A*w,S===1-h){const I=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=I,p*=I,g*=I,x*=I}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[d],v=u[d+1],M=u[d+2],E=u[d+3];return e[i]=h*E+g*x+m*M-p*v,e[i+1]=m*E+g*v+p*x-h*M,e[i+2]=p*E+g*M+h*v-m*x,e[i+3]=g*E-h*x-m*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(u/2),v=m(r/2),M=m(l/2),E=m(u/2);switch(d){case"XYZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"YXZ":this._x=v*g*x+p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"ZXY":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x-v*M*E;break;case"ZYX":this._x=v*g*x-p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x+v*M*E;break;case"YZX":this._x=v*g*x+p*M*E,this._y=p*M*x+v*g*E,this._z=p*g*E-v*M*x,this._w=p*g*x-v*M*E;break;case"XZY":this._x=v*g*x-p*M*E,this._y=p*M*x-v*g*E,this._z=p*g*E+v*M*x,this._w=p*g*x+v*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+h+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(r>h&&r>x){const M=2*Math.sqrt(1+r-h-x);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>x){const M=2*Math.sqrt(1+h-r-x);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+x-r-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=d*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,i=0,r=0){oe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*g,this.y=r+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new oe,F_=new Zo;class Ko{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ci):ci.fromBufferAttribute(u,d),ci.applyMatrix4(e.matrixWorld),this.expandByPoint(ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),du.subVectors(this.max,No),us.subVectors(e.a,No),cs.subVectors(e.b,No),fs.subVectors(e.c,No),Ba.subVectors(cs,us),Ia.subVectors(fs,cs),dr.subVectors(us,fs);let i=[0,-Ba.z,Ba.y,0,-Ia.z,Ia.y,0,-dr.z,dr.y,Ba.z,0,-Ba.x,Ia.z,0,-Ia.x,dr.z,0,-dr.x,-Ba.y,Ba.x,0,-Ia.y,Ia.x,0,-dr.y,dr.x,0];return!cd(i,us,cs,fs,du)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,us,cs,fs,du))?!1:(hu.crossVectors(Ba,Ia),i=[hu.x,hu.y,hu.z],cd(i,us,cs,fs,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],ci=new oe,fu=new Ko,us=new oe,cs=new oe,fs=new oe,Ba=new oe,Ia=new oe,dr=new oe,No=new oe,du=new oe,hu=new oe,hr=new oe;function cd(s,e,i,r,l){for(let u=0,d=s.length-3;u<=d;u+=3){hr.fromArray(s,u);const h=l.x*Math.abs(hr.x)+l.y*Math.abs(hr.y)+l.z*Math.abs(hr.z),m=e.dot(hr),p=i.dot(hr),g=r.dot(hr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const vE=new Ko,Lo=new oe,fd=new oe;class Bh{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):vE.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const i=Lo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Lo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(fd)),this.expandByPoint(Lo.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new oe,dd=new oe,pu=new oe,Fa=new oe,hd=new oe,mu=new oe,pd=new oe;class xE{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){dd.copy(e).add(i).multiplyScalar(.5),pu.copy(i).sub(e).normalize(),Fa.copy(this.origin).sub(dd);const u=e.distanceTo(i)*.5,d=-this.direction.dot(pu),h=Fa.dot(this.direction),m=-Fa.dot(pu),p=Fa.lengthSq(),g=Math.abs(1-d*d);let x,v,M,E;if(g>0)if(x=d*m-h,v=d*h-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,M=x*(x+d*v+2*h)+v*(d*x+v+2*m)+p}else v=u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-d*u+h)),v=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),M=v*(v+2*m)+p):(x=Math.max(0,-(d*u+h)),v=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+v*(v+2*m)+p);else v=d>0?-u:u,x=Math.max(0,-(d*v+h)),M=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(dd).addScaledVector(pu,v),M}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){hd.subVectors(i,e),mu.subVectors(r,e),pd.crossVectors(hd,mu);let d=this.direction.dot(pd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Fa.subVectors(this.origin,e);const m=h*this.direction.dot(mu.crossVectors(Fa,mu));if(m<0)return null;const p=h*this.direction.dot(hd.cross(Fa));if(p<0||m+p>d)return null;const g=-h*Fa.dot(pd);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,u,d,h,m,p,g,x,v,M,E,A,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,x,v,M,E,A,S)}set(e,i,r,l,u,d,h,m,p,g,x,v,M,E,A,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=M,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ds.setFromMatrixColumn(e,0).length(),u=1/ds.setFromMatrixColumn(e,1).length(),d=1/ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=d*g,M=d*x,E=h*g,A=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=M+E*p,i[5]=v-A*p,i[9]=-h*m,i[2]=A-v*p,i[6]=E+M*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v+A*h,i[4]=E*h-M,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=M*h-E,i[6]=A+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*g,M=m*x,E=p*g,A=p*x;i[0]=v-A*h,i[4]=-d*x,i[8]=E+M*h,i[1]=M+E*h,i[5]=d*g,i[9]=A-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*g,M=d*x,E=h*g,A=h*x;i[0]=m*g,i[4]=E*p-M,i[8]=v*p+A,i[1]=m*x,i[5]=A*p+v,i[9]=M*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,M=d*p,E=h*m,A=h*p;i[0]=m*g,i[4]=A-v*x,i[8]=E*x+M,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*x+E,i[10]=v-A*x}else if(e.order==="XZY"){const v=d*m,M=d*p,E=h*m,A=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+A,i[5]=d*g,i[9]=M*x-E,i[2]=E*x-M,i[6]=h*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SE,e,yE)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ha.crossVectors(r,Zn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ha.crossVectors(r,Zn)),Ha.normalize(),gu.crossVectors(Zn,Ha),l[0]=Ha.x,l[4]=gu.x,l[8]=Zn.x,l[1]=Ha.y,l[5]=gu.y,l[9]=Zn.y,l[2]=Ha.z,l[6]=gu.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],M=r[13],E=r[2],A=r[6],S=r[10],_=r[14],L=r[3],U=r[7],w=r[11],I=r[15],V=l[0],B=l[4],W=l[8],D=l[12],C=l[1],G=l[5],le=l[9],re=l[13],xe=l[2],pe=l[6],z=l[10],K=l[14],j=l[3],Ee=l[7],O=l[11],ee=l[15];return u[0]=d*V+h*C+m*xe+p*j,u[4]=d*B+h*G+m*pe+p*Ee,u[8]=d*W+h*le+m*z+p*O,u[12]=d*D+h*re+m*K+p*ee,u[1]=g*V+x*C+v*xe+M*j,u[5]=g*B+x*G+v*pe+M*Ee,u[9]=g*W+x*le+v*z+M*O,u[13]=g*D+x*re+v*K+M*ee,u[2]=E*V+A*C+S*xe+_*j,u[6]=E*B+A*G+S*pe+_*Ee,u[10]=E*W+A*le+S*z+_*O,u[14]=E*D+A*re+S*K+_*ee,u[3]=L*V+U*C+w*xe+I*j,u[7]=L*B+U*G+w*pe+I*Ee,u[11]=L*W+U*le+w*z+I*O,u[15]=L*D+U*re+w*K+I*ee,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],M=e[14],E=e[3],A=e[7],S=e[11],_=e[15];return E*(+u*m*x-l*p*x-u*h*v+r*p*v+l*h*M-r*m*M)+A*(+i*m*M-i*p*v+u*d*v-l*d*M+l*p*g-u*m*g)+S*(+i*p*x-i*h*M-u*d*x+r*d*M+u*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*v+l*d*x-r*d*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],M=e[11],E=e[12],A=e[13],S=e[14],_=e[15],L=x*S*p-A*v*p+A*m*M-h*S*M-x*m*_+h*v*_,U=E*v*p-g*S*p-E*m*M+d*S*M+g*m*_-d*v*_,w=g*A*p-E*x*p+E*h*M-d*A*M-g*h*_+d*x*_,I=E*x*m-g*A*m-E*h*v+d*A*v+g*h*S-d*x*S,V=i*L+r*U+l*w+u*I;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/V;return e[0]=L*B,e[1]=(A*v*u-x*S*u-A*l*M+r*S*M+x*l*_-r*v*_)*B,e[2]=(h*S*u-A*m*u+A*l*p-r*S*p-h*l*_+r*m*_)*B,e[3]=(x*m*u-h*v*u-x*l*p+r*v*p+h*l*M-r*m*M)*B,e[4]=U*B,e[5]=(g*S*u-E*v*u+E*l*M-i*S*M-g*l*_+i*v*_)*B,e[6]=(E*m*u-d*S*u-E*l*p+i*S*p+d*l*_-i*m*_)*B,e[7]=(d*v*u-g*m*u+g*l*p-i*v*p-d*l*M+i*m*M)*B,e[8]=w*B,e[9]=(E*x*u-g*A*u-E*r*M+i*A*M+g*r*_-i*x*_)*B,e[10]=(d*A*u-E*h*u+E*r*p-i*A*p-d*r*_+i*h*_)*B,e[11]=(g*h*u-d*x*u-g*r*p+i*x*p+d*r*M-i*h*M)*B,e[12]=I*B,e[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*S+i*x*S)*B,e[14]=(E*h*l-d*A*l-E*r*m+i*A*m+d*r*S-i*h*S)*B,e[15]=(d*x*l-g*h*l+g*r*m-i*x*m-d*r*v+i*h*v)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,v=u*p,M=u*g,E=u*x,A=d*g,S=d*x,_=h*x,L=m*p,U=m*g,w=m*x,I=r.x,V=r.y,B=r.z;return l[0]=(1-(A+_))*I,l[1]=(M+w)*I,l[2]=(E-U)*I,l[3]=0,l[4]=(M-w)*V,l[5]=(1-(v+_))*V,l[6]=(S+L)*V,l[7]=0,l[8]=(E+U)*B,l[9]=(S-L)*B,l[10]=(1-(v+A))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ds.set(l[0],l[1],l[2]).length();const d=ds.set(l[4],l[5],l[6]).length(),h=ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,g=1/d,x=1/h;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=x,fi.elements[9]*=x,fi.elements[10]*=x,i.setFromRotationMatrix(fi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=aa){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),v=(r+l)/(r-l);let M,E;if(h===aa)M=-(d+u)/(d-u),E=-2*d*u/(d-u);else if(h===ku)M=-d/(d-u),E=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=aa){const m=this.elements,p=1/(i-e),g=1/(r-l),x=1/(d-u),v=(i+e)*p,M=(r+l)*g;let E,A;if(h===aa)E=(d+u)*x,A=-2*x;else if(h===ku)E=u*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ds=new oe,fi=new sn,SE=new oe(0,0,0),yE=new oe(1,1,1),Ha=new oe,gu=new oe,Zn=new oe,H_=new sn,G_=new Zo;class ua{constructor(e=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class e0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ME=0;const V_=new oe,hs=new Zo,Ji=new sn,_u=new oe,Oo=new oe,EE=new oe,bE=new Zo,k_=new oe(1,0,0),X_=new oe(0,1,0),W_=new oe(0,0,1),q_={type:"added"},TE={type:"removed"},ps={type:"childadded",child:null},md={type:"childremoved",child:null};class Qn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qn.DEFAULT_UP.clone();const e=new oe,i=new ua,r=new Zo,l=new oe(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new st}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,i){return hs.setFromAxisAngle(e,i),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(k_,e)}rotateY(e){return this.rotateOnAxis(X_,e)}rotateZ(e){return this.rotateOnAxis(W_,e)}translateOnAxis(e,i){return V_.copy(e).applyQuaternion(this.quaternion),this.position.add(V_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(k_,e)}translateY(e){return this.translateOnAxis(X_,e)}translateZ(e){return this.translateOnAxis(W_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?_u.copy(e):_u.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Oo,_u,this.up):Ji.lookAt(_u,Oo,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(Ji),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(TE),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,EE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),v=d(e.skeletons),M=d(e.animations),E=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Qn.DEFAULT_UP=new oe(0,1,0);Qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new oe,$i=new oe,gd=new oe,ea=new oe,ms=new oe,gs=new oe,Y_=new oe,_d=new oe,vd=new oe,xd=new oe,Sd=new $t,yd=new $t,Md=new $t;class mi{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),di.subVectors(e,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){di.subVectors(l,i),$i.subVectors(r,i),gd.subVectors(e,i);const d=di.dot(di),h=di.dot($i),m=di.dot(gd),p=$i.dot($i),g=$i.dot(gd),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const v=1/x,M=(p*m-h*g)*v,E=(d*g-h*m)*v;return u.set(1-M-E,E,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ea.x),m.addScaledVector(d,ea.y),m.addScaledVector(h,ea.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return Sd.setScalar(0),yd.setScalar(0),Md.setScalar(0),Sd.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Sd,u.x),d.addScaledVector(yd,u.y),d.addScaledVector(Md,u.z),d}static isFrontFacing(e,i,r,l){return di.subVectors(r,i),$i.subVectors(e,i),di.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),di.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return mi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ms.subVectors(l,r),gs.subVectors(u,r),_d.subVectors(e,r);const m=ms.dot(_d),p=gs.dot(_d);if(m<=0&&p<=0)return i.copy(r);vd.subVectors(e,l);const g=ms.dot(vd),x=gs.dot(vd);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(ms,d);xd.subVectors(e,u);const M=ms.dot(xd),E=gs.dot(xd);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(gs,h);const S=g*E-M*x;if(S<=0&&x-g>=0&&M-E>=0)return Y_.subVectors(u,l),h=(x-g)/(x-g+(M-E)),i.copy(l).addScaledVector(Y_,h);const _=1/(S+A+v);return d=A*_,h=v*_,i.copy(r).addScaledVector(ms,d).addScaledVector(gs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},vu={h:0,s:0,l:0};function Ed(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class zt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Tt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Tt.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Tt.workingColorSpace){if(e=Ph(e,1),i=gt(i,0,1),r=gt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Ed(d,u,e+1/3),this.g=Ed(d,u,e),this.b=Ed(d,u,e-1/3)}return Tt.toWorkingColorSpace(this,l),this}setStyle(e,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=si){const r=t0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Tt.fromWorkingColorSpace(wn.copy(this),e),Math.round(gt(wn.r*255,0,255))*65536+Math.round(gt(wn.g*255,0,255))*256+Math.round(gt(wn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Tt.workingColorSpace){Tt.fromWorkingColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=si){Tt.fromWorkingColorSpace(wn.copy(this),e);const i=wn.r,r=wn.g,l=wn.b;return e!==si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+e,Ga.s+i,Ga.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ga),e.getHSL(vu);const r=Io(Ga.h,vu.h,i),l=Io(Ga.s,vu.s,i),u=Io(Ga.l,vu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new zt;zt.NAMES=t0;let AE=0;class ju extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=bs,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Bd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(r.stencilFail=this.stencilFail),this.stencilZFail!==os&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class n0 extends ju{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new oe,xu=new Rt;let RE=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=N_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)xu.fromBufferAttribute(this,i),xu.applyMatrix3(e),this.setXY(i,xu.x,xu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix3(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyMatrix4(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.applyNormalMatrix(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)rn.fromBufferAttribute(this,i),rn.transformDirection(e),this.setXYZ(i,rn.x,rn.y,rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ms(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ms(i,this.array)),i}setX(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ms(i,this.array)),i}setY(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ms(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ms(i,this.array)),i}setW(e,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array),l=Un(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Un(i,this.array),r=Un(r,this.array),l=Un(l,this.array),u=Un(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==N_&&(e.usage=this.usage),e}}class i0 extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class a0 extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class br extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let CE=0;const ri=new sn,bd=new Qn,_s=new oe,Kn=new Ko,Po=new Ko,vn=new oe;class wr extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?a0:i0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new br(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(vn.addVectors(Kn.min,Po.min),Kn.expandByPoint(vn),vn.addVectors(Kn.max,Po.max),Kn.expandByPoint(vn)):(Kn.expandByPoint(Po.min),Kn.expandByPoint(Po.max))}Kn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)vn.fromBufferAttribute(h,p),m&&(_s.fromBufferAttribute(e,p),vn.add(_s)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new oe,m[W]=new oe;const p=new oe,g=new oe,x=new oe,v=new Rt,M=new Rt,E=new Rt,A=new oe,S=new oe;function _(W,D,C){p.fromBufferAttribute(r,W),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),v.fromBufferAttribute(u,W),M.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),g.sub(p),x.sub(p),M.sub(v),E.sub(v);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(A),h[D].add(A),h[C].add(A),m[W].add(S),m[D].add(S),m[C].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let W=0,D=L.length;W<D;++W){const C=L[W],G=C.start,le=C.count;for(let re=G,xe=G+le;re<xe;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new oe,w=new oe,I=new oe,V=new oe;function B(W){I.fromBufferAttribute(l,W),V.copy(I);const D=h[W];U.copy(D),U.sub(I.multiplyScalar(I.dot(D))).normalize(),w.crossVectors(V,D);const G=w.dot(m[W])<0?-1:1;d.setXYZW(W,U.x,U.y,U.z,G)}for(let W=0,D=L.length;W<D;++W){const C=L[W],G=C.start,le=C.count;for(let re=G,xe=G+le;re<xe;re+=3)B(e.getX(re+0)),B(e.getX(re+1)),B(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new oe,u=new oe,d=new oe,h=new oe,m=new oe,p=new oe,g=new oe,x=new oe;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),A=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,S),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,v=new p.constructor(m.length*g);let M=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?M=m[A]*h.data.stride+h.offset:M=m[A]*g;for(let _=0;_<g;_++)v[E++]=p[M++]}return new Ci(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wr,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const v=p[g],M=e(v,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const M=p[x];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,M=x.length;v<M;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j_=new sn,pr=new xE,Su=new Bh,Z_=new oe,yu=new oe,Mu=new oe,Eu=new oe,Td=new oe,bu=new oe,K_=new oe,Tu=new oe;class Ri extends Qn{constructor(e=new wr,i=new n0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){bu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&(Td.fromBufferAttribute(x,e),d?bu.addScaledVector(Td,g):bu.addScaledVector(Td.sub(i),g))}i.add(bu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Su.copy(r.boundingSphere),Su.applyMatrix4(u),pr.copy(e.ray).recast(e.near),!(Su.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Su,Z_)===null||pr.origin.distanceToSquared(Z_)>(e.far-e.near)**2))&&(j_.copy(u).invert(),pr.copy(e.ray).applyMatrix4(j_),!(r.boundingBox!==null&&pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,pr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=d[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let w=L,I=U;w<I;w+=3){const V=h.getX(w),B=h.getX(w+1),W=h.getX(w+2);l=Au(this,_,e,r,p,g,x,V,B,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const L=h.getX(S),U=h.getX(S+1),w=h.getX(S+2);l=Au(this,d,e,r,p,g,x,L,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,A=v.length;E<A;E++){const S=v[E],_=d[S.materialIndex],L=Math.max(S.start,M.start),U=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=L,I=U;w<I;w+=3){const V=w,B=w+1,W=w+2;l=Au(this,_,e,r,p,g,x,V,B,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let S=E,_=A;S<_;S+=3){const L=S,U=S+1,w=S+2;l=Au(this,d,e,r,p,g,x,L,U,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function wE(s,e,i,r,l,u,d,h){let m;if(e.side===Fn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===qa,h),m===null)return null;Tu.copy(h),Tu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Tu);return p<i.near||p>i.far?null:{distance:p,point:Tu.clone(),object:s}}function Au(s,e,i,r,l,u,d,h,m,p){s.getVertexPosition(h,yu),s.getVertexPosition(m,Mu),s.getVertexPosition(p,Eu);const g=wE(s,e,i,r,yu,Mu,Eu,K_);if(g){const x=new oe;mi.getBarycoord(K_,yu,Mu,Eu,x),l&&(g.uv=mi.getInterpolatedAttribute(l,h,m,p,x,new Rt)),u&&(g.uv1=mi.getInterpolatedAttribute(u,h,m,p,x,new Rt)),d&&(g.normal=mi.getInterpolatedAttribute(d,h,m,p,x,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new oe,materialIndex:0};mi.getNormal(yu,Mu,Eu,v.normal),g.face=v,g.barycoord=x}return g}class Qo extends wr{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,r,i,e,d,u,0),E("z","y","x",1,-1,r,i,-e,d,u,1),E("x","z","y",1,1,e,r,i,l,d,2),E("x","z","y",1,-1,e,r,-i,l,d,3),E("x","y","z",1,-1,e,i,r,l,u,4),E("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new br(p,3)),this.setAttribute("normal",new br(g,3)),this.setAttribute("uv",new br(x,2));function E(A,S,_,L,U,w,I,V,B,W,D){const C=w/B,G=I/W,le=w/2,re=I/2,xe=V/2,pe=B+1,z=W+1;let K=0,j=0;const Ee=new oe;for(let O=0;O<z;O++){const ee=O*G-re;for(let Se=0;Se<pe;Se++){const Me=Se*C-le;Ee[A]=Me*L,Ee[S]=ee*U,Ee[_]=xe,p.push(Ee.x,Ee.y,Ee.z),Ee[A]=0,Ee[S]=0,Ee[_]=V>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),x.push(Se/B),x.push(1-O/W),K+=1}}for(let O=0;O<W;O++)for(let ee=0;ee<B;ee++){const Se=v+ee+pe*O,Me=v+ee+pe*(O+1),J=v+(ee+1)+pe*(O+1),me=v+(ee+1)+pe*O;m.push(Se,Me,me),m.push(Me,J,me),j+=6}h.addGroup(M,j,D),M+=j,v+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ds(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(s){const e={};for(let i=0;i<s.length;i++){const r=Ds(s[i]);for(const l in r)e[l]=r[l]}return e}function DE(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function r0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const UE={clone:Ds,merge:Nn};var NE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ca extends ju{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NE,this.fragmentShader=LE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=DE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class s0 extends Qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=aa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new oe,Q_=new Rt,J_=new Rt;class pi extends s0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-e/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-e/Va.z)}getViewSize(e,i){return this.getViewBounds(e,Q_,J_),i.subVectors(J_,Q_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,xs=1;class OE extends Qn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(vs,xs,e,i);l.layers=this.layers,this.add(l);const u=new pi(vs,xs,e,i);u.layers=this.layers,this.add(u);const d=new pi(vs,xs,e,i);d.layers=this.layers,this.add(d);const h=new pi(vs,xs,e,i);h.layers=this.layers,this.add(h);const m=new pi(vs,xs,e,i);m.layers=this.layers,this.add(m);const p=new pi(vs,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ku)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class o0 extends Hn{constructor(e=[],i=Rs,r,l,u,d,h,m,p,g){super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PE extends Ar{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new o0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Qo(5,5,5),u=new ca({name:"CubemapFromEquirect",uniforms:Ds(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Xa});u.uniforms.tEquirect.value=i;const d=new Ri(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=Ai),new OE(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class Ru extends Qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ru,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ru,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ru,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(p,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Ru;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class BE extends Qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rd=new oe,IE=new oe,FE=new st;class vr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Rd.subVectors(r,i).cross(IE.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Rd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||FE.getNormalMatrix(e),l=this.coplanarPoint(Rd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new Bh,Cu=new oe;class l0{constructor(e=new vr,i=new vr,r=new vr,l=new vr,u=new vr,d=new vr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=aa){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],M=l[8],E=l[9],A=l[10],S=l[11],_=l[12],L=l[13],U=l[14],w=l[15];if(r[0].setComponents(m-u,v-p,S-M,w-_).normalize(),r[1].setComponents(m+u,v+p,S+M,w+_).normalize(),r[2].setComponents(m+d,v+g,S+E,w+L).normalize(),r[3].setComponents(m-d,v-g,S-E,w-L).normalize(),r[4].setComponents(m-h,v-x,S-A,w-U).normalize(),i===aa)r[5].setComponents(m+h,v+x,S+A,w+U).normalize();else if(i===ku)r[5].setComponents(h,x,A,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Cu.x=l.normal.x>0?e.max.x:e.min.x,Cu.y=l.normal.y>0?e.max.y:e.min.y,Cu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Cu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class u0 extends Hn{constructor(e,i,r=Tr,l,u,d,h=_i,m=_i,p,g=Vo){if(g!==Vo&&g!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jo extends wr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,v=i/m,M=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const L=_*v-d;for(let U=0;U<p;U++){const w=U*x-u;E.push(w,-L,0),A.push(0,0,1),S.push(U/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const U=L+p*_,w=L+p*(_+1),I=L+1+p*(_+1),V=L+1+p*_;M.push(U,w,V),M.push(w,I,V)}this.setIndex(M),this.setAttribute("position",new br(E,3)),this.setAttribute("normal",new br(A,3)),this.setAttribute("uv",new br(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class HE extends ju{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GE extends ju{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class c0 extends s0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VE extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $_(s,e,i,r){const l=kE(r);switch(i){case qv:return s*e;case jv:return s*e/l.components*l.byteLength;case Nh:return s*e/l.components*l.byteLength;case Zv:return s*e*2/l.components*l.byteLength;case Lh:return s*e*2/l.components*l.byteLength;case Yv:return s*e*3/l.components*l.byteLength;case gi:return s*e*4/l.components*l.byteLength;case Oh:return s*e*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case zu:case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Jd:return Math.max(s,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(s,8)*Math.max(e,8)/2;case $d:case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ah:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Iu:case gh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kv:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xh:case Sh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kE(s){switch(s){case la:case kv:return{byteLength:1,components:1};case Ho:case Xv:case jo:return{byteLength:2,components:1};case Dh:case Uh:return{byteLength:2,components:4};case Tr:case wh:case ia:return{byteLength:4,components:1};case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ch}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ch);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f0(){let s=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function XE(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],A=x[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const A=x[M];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var WE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,eb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ib=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ab=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Lb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ob=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ib=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ST=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:WE,alphahash_pars_fragment:qE,alphamap_fragment:YE,alphamap_pars_fragment:jE,alphatest_fragment:ZE,alphatest_pars_fragment:KE,aomap_fragment:QE,aomap_pars_fragment:JE,batching_pars_vertex:$E,batching_vertex:eb,begin_vertex:tb,beginnormal_vertex:nb,bsdfs:ib,iridescence_fragment:ab,bumpmap_pars_fragment:rb,clipping_planes_fragment:sb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:lb,clipping_planes_vertex:ub,color_fragment:cb,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:hb,common:pb,cube_uv_reflection_fragment:mb,defaultnormal_vertex:gb,displacementmap_pars_vertex:_b,displacementmap_vertex:vb,emissivemap_fragment:xb,emissivemap_pars_fragment:Sb,colorspace_fragment:yb,colorspace_pars_fragment:Mb,envmap_fragment:Eb,envmap_common_pars_fragment:bb,envmap_pars_fragment:Tb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:Bb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:wb,fog_fragment:Db,fog_pars_fragment:Ub,gradientmap_pars_fragment:Nb,lightmap_pars_fragment:Lb,lights_lambert_fragment:Ob,lights_lambert_pars_fragment:Pb,lights_pars_begin:zb,lights_toon_fragment:Ib,lights_toon_pars_fragment:Fb,lights_phong_fragment:Hb,lights_phong_pars_fragment:Gb,lights_physical_fragment:Vb,lights_physical_pars_fragment:kb,lights_fragment_begin:Xb,lights_fragment_maps:Wb,lights_fragment_end:qb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:jb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Kb,map_fragment:Qb,map_pars_fragment:Jb,map_particle_fragment:$b,map_particle_pars_fragment:eT,metalnessmap_fragment:tT,metalnessmap_pars_fragment:nT,morphinstance_vertex:iT,morphcolor_vertex:aT,morphnormal_vertex:rT,morphtarget_pars_vertex:sT,morphtarget_vertex:oT,normal_fragment_begin:lT,normal_fragment_maps:uT,normal_pars_fragment:cT,normal_pars_vertex:fT,normal_vertex:dT,normalmap_pars_fragment:hT,clearcoat_normal_fragment_begin:pT,clearcoat_normal_fragment_maps:mT,clearcoat_pars_fragment:gT,iridescence_pars_fragment:_T,opaque_fragment:vT,packing:xT,premultiplied_alpha_fragment:ST,project_vertex:yT,dithering_fragment:MT,dithering_pars_fragment:ET,roughnessmap_fragment:bT,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:RT,shadowmap_vertex:CT,shadowmask_pars_fragment:wT,skinbase_vertex:DT,skinning_pars_vertex:UT,skinning_vertex:NT,skinnormal_vertex:LT,specularmap_fragment:OT,specularmap_pars_fragment:PT,tonemapping_fragment:zT,tonemapping_pars_fragment:BT,transmission_fragment:IT,transmission_pars_fragment:FT,uv_pars_fragment:HT,uv_pars_vertex:GT,uv_vertex:VT,worldpos_vertex:kT,background_vert:XT,background_frag:WT,backgroundCube_vert:qT,backgroundCube_frag:YT,cube_vert:jT,cube_frag:ZT,depth_vert:KT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:$T,equirect_vert:eA,equirect_frag:tA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:uA,meshnormal_vert:cA,meshnormal_frag:fA,meshphong_vert:dA,meshphong_frag:hA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:gA,meshtoon_frag:_A,points_vert:vA,points_frag:xA,shadow_vert:SA,shadow_frag:yA,sprite_vert:MA,sprite_frag:EA},Ue={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ti={basic:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new zt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Nn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Nn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Nn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new zt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Nn([Ue.points,Ue.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Nn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Nn([Ue.common,Ue.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Nn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Nn([Ue.sprite,Ue.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Nn([Ue.common,Ue.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Nn([Ue.lights,Ue.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Ti.physical={uniforms:Nn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const wu={r:0,b:0,g:0},gr=new ua,bA=new sn;function TA(s,e,i,r,l,u,d){const h=new zt(0);let m=u===!0?0:1,p,g,x=null,v=0,M=null;function E(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:e).get(w)),w}function A(U){let w=!1;const I=E(U);I===null?_(h,m):I&&I.isColor&&(_(I,1),w=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,d):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(U,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===Yu)?(g===void 0&&(g=new Ri(new Qo(1,1,1),new ca({name:"BackgroundCubeMaterial",uniforms:Ds(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,B,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),gr.copy(w.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(bA.makeRotationFromEuler(gr)),g.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Pt,(x!==I||v!==I.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,x=I,v=I.version,M=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Ri(new Jo(2,2),new ca({name:"BackgroundMaterial",uniforms:Ds(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(I.colorSpace)!==Pt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||v!==I.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,x=I,v=I.version,M=s.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(wu,r0(s)),r.buffers.color.setClear(wu.r,wu.g,wu.b,w,d)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,w=1){h.set(U),m=w,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:A,addToRenderList:S,dispose:L}}function AA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(C,G,le,re,xe){let pe=!1;const z=x(re,le,G);u!==z&&(u=z,p(u.object)),pe=M(C,re,le,xe),pe&&E(C,re,le,xe),xe!==null&&e.update(xe,s.ELEMENT_ARRAY_BUFFER),(pe||d)&&(d=!1,w(C,G,le,re),xe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,G,le){const re=le.wireframe===!0;let xe=r[C.id];xe===void 0&&(xe={},r[C.id]=xe);let pe=xe[G.id];pe===void 0&&(pe={},xe[G.id]=pe);let z=pe[re];return z===void 0&&(z=v(m()),pe[re]=z),z}function v(C){const G=[],le=[],re=[];for(let xe=0;xe<i;xe++)G[xe]=0,le[xe]=0,re[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:le,attributeDivisors:re,object:C,attributes:{},index:null}}function M(C,G,le,re){const xe=u.attributes,pe=G.attributes;let z=0;const K=le.getAttributes();for(const j in K)if(K[j].location>=0){const O=xe[j];let ee=pe[j];if(ee===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;z++}return u.attributesNum!==z||u.index!==re}function E(C,G,le,re){const xe={},pe=G.attributes;let z=0;const K=le.getAttributes();for(const j in K)if(K[j].location>=0){let O=pe[j];O===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(O=C.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),xe[j]=ee,z++}u.attributes=xe,u.attributesNum=z,u.index=re}function A(){const C=u.newAttributes;for(let G=0,le=C.length;G<le;G++)C[G]=0}function S(C){_(C,0)}function _(C,G){const le=u.newAttributes,re=u.enabledAttributes,xe=u.attributeDivisors;le[C]=1,re[C]===0&&(s.enableVertexAttribArray(C),re[C]=1),xe[C]!==G&&(s.vertexAttribDivisor(C,G),xe[C]=G)}function L(){const C=u.newAttributes,G=u.enabledAttributes;for(let le=0,re=G.length;le<re;le++)G[le]!==C[le]&&(s.disableVertexAttribArray(le),G[le]=0)}function U(C,G,le,re,xe,pe,z){z===!0?s.vertexAttribIPointer(C,G,le,xe,pe):s.vertexAttribPointer(C,G,le,re,xe,pe)}function w(C,G,le,re){A();const xe=re.attributes,pe=le.getAttributes(),z=G.defaultAttributeValues;for(const K in pe){const j=pe[K];if(j.location>=0){let Ee=xe[K];if(Ee===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor)),Ee!==void 0){const O=Ee.normalized,ee=Ee.itemSize,Se=e.get(Ee);if(Se===void 0)continue;const Me=Se.buffer,J=Se.type,me=Se.bytesPerElement,ye=J===s.INT||J===s.UNSIGNED_INT||Ee.gpuType===wh;if(Ee.isInterleavedBufferAttribute){const Re=Ee.data,Ne=Re.stride,ot=Ee.offset;if(Re.isInstancedInterleavedBuffer){for(let Ke=0;Ke<j.locationSize;Ke++)_(j.location+Ke,Re.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ke=0;Ke<j.locationSize;Ke++)S(j.location+Ke);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Ke=0;Ke<j.locationSize;Ke++)U(j.location+Ke,ee/j.locationSize,J,O,Ne*me,(ot+ee/j.locationSize*Ke)*me,ye)}else{if(Ee.isInstancedBufferAttribute){for(let Re=0;Re<j.locationSize;Re++)_(j.location+Re,Ee.meshPerAttribute);C.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Re=0;Re<j.locationSize;Re++)S(j.location+Re);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let Re=0;Re<j.locationSize;Re++)U(j.location+Re,ee/j.locationSize,J,O,ee*me,ee/j.locationSize*Re*me,ye)}}else if(z!==void 0){const O=z[K];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(j.location,O);break;case 3:s.vertexAttrib3fv(j.location,O);break;case 4:s.vertexAttrib4fv(j.location,O);break;default:s.vertexAttrib1fv(j.location,O)}}}}L()}function I(){W();for(const C in r){const G=r[C];for(const le in G){const re=G[le];for(const xe in re)g(re[xe].object),delete re[xe];delete G[le]}delete r[C]}}function V(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const le in G){const re=G[le];for(const xe in re)g(re[xe].object),delete re[xe];delete G[le]}delete r[C.id]}function B(C){for(const G in r){const le=r[G];if(le[C.id]===void 0)continue;const re=le[C.id];for(const xe in re)g(re[xe].object),delete re[xe];delete le[C.id]}}function W(){D(),d=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:V,releaseStatesOfProgram:B,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function RA(s,e,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let M=0;for(let E=0;E<x;E++)M+=g[E];i.update(M,r,1)}function m(p,g,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)d(p[E],g[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function CA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==gi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const W=B===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==la&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ia&&!W)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:I,maxSamples:V}}function wA(s){const e=this;let i=null,r=0,l=!1,u=!1;const d=new vr,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||r!==0||l;return l=v,r=x.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,A=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!S)u?g(null):p();else{const L=u?0:r,U=L*4;let w=_.clippingState||null;m.value=w,w=g(E,v,U,M);for(let I=0;I!==U;++I)w[I]=i[I];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,M,E){const A=x!==null?x.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const _=M+A*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let U=0,w=M;U!==A;++U,w+=4)d.copy(x[U]).applyMatrix4(L,h),d.normal.toArray(S,w),S[w+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function DA(s){let e=new WeakMap;function i(d,h){return h===Wd?d.mapping=Rs:h===qd&&(d.mapping=Cs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Wd||h===qd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new PE(m.height);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Es=4,ev=[.125,.215,.35,.446,.526,.582],yr=20,Cd=new c0,tv=new zt;let wd=null,Dd=0,Ud=0,Nd=!1;const xr=(1+Math.sqrt(5))/2,Ss=1/xr,nv=[new oe(-xr,Ss,0),new oe(xr,Ss,0),new oe(-Ss,0,xr),new oe(Ss,0,xr),new oe(0,xr,-Ss),new oe(0,xr,Ss),new oe(-1,1,-1),new oe(1,1,-1),new oe(-1,1,1),new oe(1,1,1)],UA=new oe;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=UA}=u;wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Dd,Ud),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:jo,format:gi,colorSpace:ws,depthBuffer:!1},l=av(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=NA(u)),this._blurMaterial=LA(u,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,Cd)}_sceneToCubeUV(e,i,r,l,u){const m=new pi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(tv),x.toneMapping=Wa,x.autoClear=!1;const E=new n0({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Ri(new Qo,E);let S=!1;const _=e.background;_?_.isColor&&(E.color.copy(_),e.background=null,S=!0):(E.color.copy(tv),S=!0);for(let L=0;L<6;L++){const U=L%3;U===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[L],u.y,u.z)):U===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[L]));const w=this._cubeSize;Du(l,U*w,L>2?w:0,w,w),x.setRenderTarget(l),S&&x.render(A,m),x.render(e,m)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=M,x.autoClear=v,e.background=_}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Rs||e.mapping===Cs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ri(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Cd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),h=nv[(l-u-1)%nv.length];this._blur(e,u-1,u,d,h)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Ri(this._lodPlanes[l],p),v=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*yr-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):yr;S>yr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yr}`);const _=[];let L=0;for(let B=0;B<yr;++B){const W=B/A,D=Math.exp(-W*W/2);_.push(D),B===0?L+=D:B<S&&(L+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const w=this._sizeLods[l],I=3*w*(l>U-Es?l-U+Es:0),V=4*(this._cubeSize-w);Du(i,I,V,3*w,2*w),m.setRenderTarget(i),m.render(x,Cd)}}function NA(s){const e=[],i=[],r=[];let l=s;const u=s-Es+1+ev.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>s-Es?m=ev[d-s+Es-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],M=6,E=6,A=3,S=2,_=1,L=new Float32Array(A*E*M),U=new Float32Array(S*E*M),w=new Float32Array(_*E*M);for(let V=0;V<M;V++){const B=V%3*2/3-1,W=V>2?0:-1,D=[B,W,0,B+2/3,W,0,B+2/3,W+1,0,B,W,0,B+2/3,W+1,0,B,W+1,0];L.set(D,A*E*V),U.set(v,S*E*V);const C=[V,V,V,V,V,V];w.set(C,_*E*V)}const I=new wr;I.setAttribute("position",new Ci(L,A)),I.setAttribute("uv",new Ci(U,S)),I.setAttribute("faceIndex",new Ci(w,_)),e.push(I),l>Es&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function av(s,e,i){const r=new Ar(s,e,i);return r.texture.mapping=Yu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Du(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function LA(s,e,i){const r=new Float32Array(yr),l=new oe(0,1,0);return new ca({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function rv(){return new ca({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function sv(){return new ca({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Wd||m===qd,g=m===Rs||m===Cs;if(p||g){let x=e.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new iv(s)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new iv(s)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function PA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function zA(s,e,i,r){const l={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",d),delete l[v.id];const M=u.get(v);M&&(e.remove(M),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const M in v)e.update(v[M],s.ARRAY_BUFFER)}function p(x){const v=[],M=x.index,E=x.attributes.position;let A=0;if(M!==null){const L=M.array;A=M.version;for(let U=0,w=L.length;U<w;U+=3){const I=L[U+0],V=L[U+1],B=L[U+2];v.push(I,V,V,B,B,I)}}else if(E!==void 0){const L=E.array;A=E.version;for(let U=0,w=L.length/3-1;U<w;U+=3){const I=U+0,V=U+1,B=U+2;v.push(I,V,V,B,B,I)}}else return;const S=new(Jv(v)?a0:i0)(v,1);S.version=A;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function g(x){const v=u.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function BA(s,e,i){let r;function l(v){r=v}let u,d;function h(v){u=v.type,d=v.bytesPerElement}function m(v,M){s.drawElements(r,M,u,v*d),i.update(M,r,1)}function p(v,M,E){E!==0&&(s.drawElementsInstanced(r,M,u,v*d,E),i.update(M,r,E))}function g(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,v,0,E);let S=0;for(let _=0;_<E;_++)S+=M[_];i.update(S,r,1)}function x(v,M,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)p(v[_]/d,M[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,u,v,0,A,0,E);let _=0;for(let L=0;L<E;L++)_+=M[L]*A[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function IA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function FA(s,e,i){const r=new WeakMap,l=new $t;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let C=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let I=h.attributes.position.count*w,V=1;I>e.maxTextureSize&&(V=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const B=new Float32Array(I*V*4*x),W=new $v(B,I,V,x);W.type=ia,W.needsUpdate=!0;const D=w*4;for(let G=0;G<x;G++){const le=_[G],re=L[G],xe=U[G],pe=I*V*4*G;for(let z=0;z<le.count;z++){const K=z*D;E===!0&&(l.fromBufferAttribute(le,z),B[pe+K+0]=l.x,B[pe+K+1]=l.y,B[pe+K+2]=l.z,B[pe+K+3]=0),A===!0&&(l.fromBufferAttribute(re,z),B[pe+K+4]=l.x,B[pe+K+5]=l.y,B[pe+K+6]=l.z,B[pe+K+7]=0),S===!0&&(l.fromBufferAttribute(xe,z),B[pe+K+8]=l.x,B[pe+K+9]=l.y,B[pe+K+10]=l.z,B[pe+K+11]=xe.itemSize===4?l.w:1)}}v={count:x,texture:W,size:new Rt(I,V)},r.set(h,v),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function HA(s,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const d0=new Hn,ov=new u0(1,1),h0=new $v,p0=new _E,m0=new o0,lv=[],uv=[],cv=new Float32Array(16),fv=new Float32Array(9),dv=new Float32Array(4);function Os(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=lv[l];if(u===void 0&&(u=new Float32Array(l),lv[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,s[d].toArray(u,h)}return u}function fn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Zu(s,e){let i=uv[e];i===void 0&&(i=new Int32Array(e),uv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function GA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function VA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2fv(this.addr,e),dn(i,e)}}function kA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;s.uniform3fv(this.addr,e),dn(i,e)}}function XA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4fv(this.addr,e),dn(i,e)}}function WA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;dv.set(r),s.uniformMatrix2fv(this.addr,!1,dv),dn(i,r)}}function qA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;fv.set(r),s.uniformMatrix3fv(this.addr,!1,fv),dn(i,r)}}function YA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(fn(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),dn(i,r)}}function jA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function ZA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2iv(this.addr,e),dn(i,e)}}function KA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3iv(this.addr,e),dn(i,e)}}function QA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4iv(this.addr,e),dn(i,e)}}function JA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function $A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;s.uniform2uiv(this.addr,e),dn(i,e)}}function e1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;s.uniform3uiv(this.addr,e),dn(i,e)}}function t1(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;s.uniform4uiv(this.addr,e),dn(i,e)}}function n1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(ov.compareFunction=Qv,u=ov):u=d0,i.setTexture2D(e||u,l)}function i1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||p0,l)}function a1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||m0,l)}function r1(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||h0,l)}function s1(s){switch(s){case 5126:return GA;case 35664:return VA;case 35665:return kA;case 35666:return XA;case 35674:return WA;case 35675:return qA;case 35676:return YA;case 5124:case 35670:return jA;case 35667:case 35671:return ZA;case 35668:case 35672:return KA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return e1;case 36296:return t1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return r1}}function o1(s,e){s.uniform1fv(this.addr,e)}function l1(s,e){const i=Os(e,this.size,2);s.uniform2fv(this.addr,i)}function u1(s,e){const i=Os(e,this.size,3);s.uniform3fv(this.addr,i)}function c1(s,e){const i=Os(e,this.size,4);s.uniform4fv(this.addr,i)}function f1(s,e){const i=Os(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function d1(s,e){const i=Os(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function h1(s,e){const i=Os(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function p1(s,e){s.uniform1iv(this.addr,e)}function m1(s,e){s.uniform2iv(this.addr,e)}function g1(s,e){s.uniform3iv(this.addr,e)}function _1(s,e){s.uniform4iv(this.addr,e)}function v1(s,e){s.uniform1uiv(this.addr,e)}function x1(s,e){s.uniform2uiv(this.addr,e)}function S1(s,e){s.uniform3uiv(this.addr,e)}function y1(s,e){s.uniform4uiv(this.addr,e)}function M1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||d0,u[d])}function E1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||p0,u[d])}function b1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||m0,u[d])}function T1(s,e,i){const r=this.cache,l=e.length,u=Zu(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),dn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||h0,u[d])}function A1(s){switch(s){case 5126:return o1;case 35664:return l1;case 35665:return u1;case 35666:return c1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return S1;case 36296:return y1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return T1}}class R1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=s1(i.type)}}class C1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=A1(i.type)}}class w1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Ld=/(\w+)(\])?(\[|\.)?/g;function hv(s,e){s.seq.push(e),s.map[e.id]=e}function D1(s,e,i){const r=s.name,l=r.length;for(Ld.lastIndex=0;;){const u=Ld.exec(r),d=Ld.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){hv(i,p===void 0?new R1(h,s,e):new C1(h,s,e));break}else{let x=i.map[h];x===void 0&&(x=new w1(h),hv(i,x)),i=x}}}class Hu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);D1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function pv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const U1=37297;let N1=0;function L1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const mv=new st;function O1(s){Tt._getMatrix(mv,Tt.workingColorSpace,s);const e=`mat3( ${mv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Vu:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+L1(s.getShaderSource(e),d)}else return l}function P1(s,e){const i=O1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function z1(s,e){let i;switch(e){case RM:i="Linear";break;case CM:i="Reinhard";break;case wM:i="Cineon";break;case DM:i="ACESFilmic";break;case NM:i="AgX";break;case LM:i="Neutral";break;case UM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uu=new oe;function B1(){Tt.getLuminanceCoefficients(Uu);const s=Uu.x.toFixed(4),e=Uu.y.toFixed(4),i=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function F1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function H1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),d=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:h}}return i}function zo(s){return s!==""}function _v(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(s){return s.replace(G1,k1)}const V1=new Map;function k1(s,e){let i=lt[e];if(i===void 0){const r=V1.get(e);if(r!==void 0)i=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yh(i)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(s){return s.replace(X1,W1)}function W1(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Sv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function q1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ta&&(e="SHADOWMAP_TYPE_VSM"),e}function Y1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Yu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function Z1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Gv:e="ENVMAP_BLENDING_MULTIPLY";break;case TM:e="ENVMAP_BLENDING_MIX";break;case AM:e="ENVMAP_BLENDING_ADD";break}return e}function K1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Q1(s,e,i,r){const l=s.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=q1(i),p=Y1(i),g=j1(i),x=Z1(i),v=K1(i),M=I1(i),E=F1(u),A=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(zo).join(`
`),_.length>0&&(_+=`
`)):(S=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),_=[Sv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?lt.tonemapping_pars_fragment:"",i.toneMapping!==Wa?z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,P1("linearToOutputTexel",i.outputColorSpace),B1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),d=yh(d),d=_v(d,i),d=vv(d,i),h=yh(h),h=_v(h,i),h=vv(h,i),d=xv(d),h=xv(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===L_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+S+d,w=L+_+h,I=pv(l,l.VERTEX_SHADER,U),V=pv(l,l.FRAGMENT_SHADER,w);l.attachShader(A,I),l.attachShader(A,V),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function B(G){if(s.debug.checkShaderErrors){const le=l.getProgramInfoLog(A).trim(),re=l.getShaderInfoLog(I).trim(),xe=l.getShaderInfoLog(V).trim();let pe=!0,z=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,V);else{const K=gv(l,I,"vertex"),j=gv(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+le+`
`+K+`
`+j)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(re===""||xe==="")&&(z=!1);z&&(G.diagnostics={runnable:pe,programLog:le,vertexShader:{log:re,prefix:S},fragmentShader:{log:xe,prefix:_}})}l.deleteShader(I),l.deleteShader(V),W=new Hu(l,A),D=H1(l,A)}let W;this.getUniforms=function(){return W===void 0&&B(this),W};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,U1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=V,this}let J1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new eR(e),i.set(e,r)),r}}class eR{constructor(e){this.id=J1++,this.code=e,this.usedTimes=0}}function tR(s,e,i,r,l,u,d){const h=new e0,m=new $1,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,G,le,re){const xe=le.fog,pe=re.geometry,z=D.isMeshStandardMaterial?le.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||z),j=K&&K.mapping===Yu?K.image.height:null,Ee=E[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const O=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,ee=O!==void 0?O.length:0;let Se=0;pe.morphAttributes.position!==void 0&&(Se=1),pe.morphAttributes.normal!==void 0&&(Se=2),pe.morphAttributes.color!==void 0&&(Se=3);let Me,J,me,ye;if(Ee){const Mt=Ti[Ee];Me=Mt.vertexShader,J=Mt.fragmentShader}else Me=D.vertexShader,J=D.fragmentShader,m.update(D),me=m.getVertexShaderID(D),ye=m.getFragmentShaderID(D);const Re=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),ot=re.isInstancedMesh===!0,Ke=re.isBatchedMesh===!0,Ht=!!D.map,Bt=!!D.matcap,ft=!!K,F=!!D.aoMap,Ln=!!D.lightMap,_t=!!D.bumpMap,it=!!D.normalMap,We=!!D.displacementMap,Dt=!!D.emissiveMap,Ve=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,te=D.clearcoat>0,ge=D.dispersion>0,be=D.iridescence>0,fe=D.sheen>0,Pe=D.transmission>0,Ce=T&&!!D.anisotropyMap,Ge=te&&!!D.clearcoatMap,$e=te&&!!D.clearcoatNormalMap,Ae=te&&!!D.clearcoatRoughnessMap,Fe=be&&!!D.iridescenceMap,je=be&&!!D.iridescenceThicknessMap,Qe=fe&&!!D.sheenColorMap,ze=fe&&!!D.sheenRoughnessMap,ut=!!D.specularMap,nt=!!D.specularColorMap,Ut=!!D.specularIntensityMap,X=Pe&&!!D.transmissionMap,Le=Pe&&!!D.thicknessMap,ue=!!D.gradientMap,_e=!!D.alphaMap,Be=D.alphaTest>0,Oe=!!D.alphaHash,at=!!D.extensions;let Gt=Wa;D.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Gt=s.toneMapping);const en={shaderID:Ee,shaderType:D.type,shaderName:D.name,vertexShader:Me,fragmentShader:J,defines:D.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Ke,batchingColor:Ke&&re._colorsTexture!==null,instancing:ot,instancingColor:ot&&re.instanceColor!==null,instancingMorph:ot&&re.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ws,alphaToCoverage:!!D.alphaToCoverage,map:Ht,matcap:Bt,envMap:ft,envMapMode:ft&&K.mapping,envMapCubeUVHeight:j,aoMap:F,lightMap:Ln,bumpMap:_t,normalMap:it,displacementMap:v&&We,emissiveMap:Dt,normalMapObjectSpace:it&&D.normalMapType===IM,normalMapTangentSpace:it&&D.normalMapType===BM,metalnessMap:Ve,roughnessMap:N,anisotropy:T,anisotropyMap:Ce,clearcoat:te,clearcoatMap:Ge,clearcoatNormalMap:$e,clearcoatRoughnessMap:Ae,dispersion:ge,iridescence:be,iridescenceMap:Fe,iridescenceThicknessMap:je,sheen:fe,sheenColorMap:Qe,sheenRoughnessMap:ze,specularMap:ut,specularColorMap:nt,specularIntensityMap:Ut,transmission:Pe,transmissionMap:X,thicknessMap:Le,gradientMap:ue,opaque:D.transparent===!1&&D.blending===bs&&D.alphaToCoverage===!1,alphaMap:_e,alphaTest:Be,alphaHash:Oe,combine:D.combine,mapUv:Ht&&A(D.map.channel),aoMapUv:F&&A(D.aoMap.channel),lightMapUv:Ln&&A(D.lightMap.channel),bumpMapUv:_t&&A(D.bumpMap.channel),normalMapUv:it&&A(D.normalMap.channel),displacementMapUv:We&&A(D.displacementMap.channel),emissiveMapUv:Dt&&A(D.emissiveMap.channel),metalnessMapUv:Ve&&A(D.metalnessMap.channel),roughnessMapUv:N&&A(D.roughnessMap.channel),anisotropyMapUv:Ce&&A(D.anisotropyMap.channel),clearcoatMapUv:Ge&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:$e&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:je&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(D.sheenRoughnessMap.channel),specularMapUv:ut&&A(D.specularMap.channel),specularColorMapUv:nt&&A(D.specularColorMap.channel),specularIntensityMapUv:Ut&&A(D.specularIntensityMap.channel),transmissionMapUv:X&&A(D.transmissionMap.channel),thicknessMapUv:Le&&A(D.thicknessMap.channel),alphaMapUv:_e&&A(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(it||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!pe.attributes.uv&&(Ht||_e),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ne,skinning:re.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Se,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Gt,decodeVideoTexture:Ht&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===Pt,decodeVideoTextureEmissive:Dt&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===Pt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===na,flipSided:D.side===Fn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:at&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&D.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(L(C,D),U(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function w(D){const C=E[D.type];let G;if(C){const le=Ti[C];G=UE.clone(le.uniforms)}else G=D.uniforms;return G}function I(D,C){let G;for(let le=0,re=g.length;le<re;le++){const xe=g[le];if(xe.cacheKey===C){G=xe,++G.usedTimes;break}}return G===void 0&&(G=new Q1(s,C,D,u),g.push(G)),G}function V(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:I,releaseProgram:V,releaseShaderCache:B,programs:g,dispose:W}}function nR(){let s=new WeakMap;function e(d){return s.has(d)}function i(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,m){s.get(d)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function iR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function yv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x,v,M,E,A,S){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:M,groupOrder:E,renderOrder:x.renderOrder,z:A,group:S},s[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=M,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=S),e++,_}function h(x,v,M,E,A,S){const _=d(x,v,M,E,A,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,v,M,E,A,S){const _=d(x,v,M,E,A,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||iR),r.length>1&&r.sort(v||yv),l.length>1&&l.sort(v||yv)}function g(){for(let x=e,v=s.length;x<v;x++){const M=s[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function aR(){let s=new WeakMap;function e(r,l){const u=s.get(r);let d;return u===void 0?(d=new Mv,s.set(r,[d])):l>=u.length?(d=new Mv,u.push(d)):d=u[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function rR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new zt};break;case"SpotLight":i={position:new oe,direction:new oe,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new zt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":i={color:new zt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function sR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let oR=0;function lR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uR(s){const e=new rR,i=sR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const l=new oe,u=new sn,d=new sn;function h(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,E=0,A=0,S=0,_=0,L=0,U=0,w=0,I=0,V=0,B=0;p.sort(lR);for(let D=0,C=p.length;D<C;D++){const G=p[D],le=G.color,re=G.intensity,xe=G.distance,pe=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=le.r*re,x+=le.g*re,v+=le.b*re;else if(G.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(G.sh.coefficients[z],re);B++}else if(G.isDirectionalLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,j=i.get(G);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=pe,r.directionalShadowMatrix[M]=G.shadow.matrix,L++}r.directional[M]=z,M++}else if(G.isSpotLight){const z=e.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(le).multiplyScalar(re),z.distance=xe,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,r.spot[A]=z;const K=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,K.updateMatrices(G),G.castShadow&&V++),r.spotLightMatrix[A]=K.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,r.spotShadow[A]=j,r.spotShadowMap[A]=pe,w++}A++}else if(G.isRectAreaLight){const z=e.get(G);z.color.copy(le).multiplyScalar(re),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=z,S++}else if(G.isPointLight){const z=e.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const K=G.shadow,j=i.get(G);j.shadowIntensity=K.intensity,j.shadowBias=K.bias,j.shadowNormalBias=K.normalBias,j.shadowRadius=K.radius,j.shadowMapSize=K.mapSize,j.shadowCameraNear=K.camera.near,j.shadowCameraFar=K.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=G.shadow.matrix,U++}r.point[E]=z,E++}else if(G.isHemisphereLight){const z=e.get(G);z.skyColor.copy(G.color).multiplyScalar(re),z.groundColor.copy(G.groundColor).multiplyScalar(re),r.hemi[_]=z,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==M||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==L||W.numPointShadows!==U||W.numSpotShadows!==w||W.numSpotMaps!==I||W.numLightProbes!==B)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=w+I-V,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=B,W.directionalLength=M,W.pointLength=E,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=L,W.numPointShadows=U,W.numSpotShadows=w,W.numSpotMaps=I,W.numLightProbes=B,r.version=oR++)}function m(p,g){let x=0,v=0,M=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const w=r.directional[x];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),x++}else if(U.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(U.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),d.identity(),u.copy(U.matrixWorld),u.premultiply(S),d.extractRotation(u),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(d),w.halfHeight.applyMatrix4(d),E++}else if(U.isPointLight){const w=r.point[v];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:r}}function Ev(s){const e=new uR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function cR(s){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new Ev(s),e.set(l,[h])):u>=d.length?(h=new Ev(s),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const fR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hR(s,e,i){let r=new l0;const l=new Rt,u=new Rt,d=new $t,h=new HE({depthPacking:zM}),m=new GE,p={},g=i.maxTextureSize,x={[qa]:Fn,[Fn]:qa,[na]:na},v=new ca({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:fR,fragmentShader:dR}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new wr;E.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ri(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let _=this.type;this.render=function(V,B,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Xa),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const re=_!==ta&&this.type===ta,xe=_===ta&&this.type!==ta;for(let pe=0,z=V.length;pe<z;pe++){const K=V[pe],j=K.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Ee=j.getFrameExtents();if(l.multiply(Ee),u.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Ee.x),l.x=u.x*Ee.x,j.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Ee.y),l.y=u.y*Ee.y,j.mapSize.y=u.y)),j.map===null||re===!0||xe===!0){const ee=this.type!==ta?{minFilter:_i,magFilter:_i}:{};j.map!==null&&j.map.dispose(),j.map=new Ar(l.x,l.y,ee),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const O=j.getViewportCount();for(let ee=0;ee<O;ee++){const Se=j.getViewport(ee);d.set(u.x*Se.x,u.y*Se.y,u.x*Se.z,u.y*Se.w),le.viewport(d),j.updateMatrices(K,ee),r=j.getFrustum(),w(B,W,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===ta&&L(j,W),j.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,C,G)};function L(V,B){const W=e.update(A);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ar(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(B,null,W,v,A,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(B,null,W,M,A,null)}function U(V,B,W,D){let C=null;const G=W.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:h,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const le=C.uuid,re=B.uuid;let xe=p[le];xe===void 0&&(xe={},p[le]=xe);let pe=xe[re];pe===void 0&&(pe=C.clone(),xe[re]=pe,B.addEventListener("dispose",I)),C=pe}if(C.visible=B.visible,C.wireframe=B.wireframe,D===ta?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:x[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const le=s.properties.get(C);le.light=W}return C}function w(V,B,W,D,C){if(V.visible===!1)return;if(V.layers.test(B.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===ta)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,V.matrixWorld);const re=e.update(V),xe=V.material;if(Array.isArray(xe)){const pe=re.groups;for(let z=0,K=pe.length;z<K;z++){const j=pe[z],Ee=xe[j.materialIndex];if(Ee&&Ee.visible){const O=U(V,Ee,D,C);V.onBeforeShadow(s,V,B,W,re,O,j),s.renderBufferDirect(W,null,re,O,V,j),V.onAfterShadow(s,V,B,W,re,O,j)}}}else if(xe.visible){const pe=U(V,xe,D,C);V.onBeforeShadow(s,V,B,W,re,pe,null),s.renderBufferDirect(W,null,re,pe,V,null),V.onAfterShadow(s,V,B,W,re,pe,null)}}const le=V.children;for(let re=0,xe=le.length;re<xe;re++)w(le[re],B,W,D,C)}function I(V){V.target.removeEventListener("dispose",I);for(const W in p){const D=p[W],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const pR={[Id]:Fd,[Hd]:kd,[Gd]:Xd,[As]:Vd,[Fd]:Id,[kd]:Hd,[Xd]:Gd,[Vd]:As};function mR(s,e){function i(){let X=!1;const Le=new $t;let ue=null;const _e=new $t(0,0,0,0);return{setMask:function(Be){ue!==Be&&!X&&(s.colorMask(Be,Be,Be,Be),ue=Be)},setLocked:function(Be){X=Be},setClear:function(Be,Oe,at,Gt,en){en===!0&&(Be*=Gt,Oe*=Gt,at*=Gt),Le.set(Be,Oe,at,Gt),_e.equals(Le)===!1&&(s.clearColor(Be,Oe,at,Gt),_e.copy(Le))},reset:function(){X=!1,ue=null,_e.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,ue=null,_e=null,Be=null;return{setReversed:function(Oe){if(Le!==Oe){const at=e.get("EXT_clip_control");Oe?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),Le=Oe;const Gt=Be;Be=null,this.setClear(Gt)}},getReversed:function(){return Le},setTest:function(Oe){Oe?Re(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Oe){ue!==Oe&&!X&&(s.depthMask(Oe),ue=Oe)},setFunc:function(Oe){if(Le&&(Oe=pR[Oe]),_e!==Oe){switch(Oe){case Id:s.depthFunc(s.NEVER);break;case Fd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Vd:s.depthFunc(s.GEQUAL);break;case kd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Oe}},setLocked:function(Oe){X=Oe},setClear:function(Oe){Be!==Oe&&(Le&&(Oe=1-Oe),s.clearDepth(Oe),Be=Oe)},reset:function(){X=!1,ue=null,_e=null,Be=null,Le=!1}}}function l(){let X=!1,Le=null,ue=null,_e=null,Be=null,Oe=null,at=null,Gt=null,en=null;return{setTest:function(Mt){X||(Mt?Re(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Mt){Le!==Mt&&!X&&(s.stencilMask(Mt),Le=Mt)},setFunc:function(Mt,Gn,hn){(ue!==Mt||_e!==Gn||Be!==hn)&&(s.stencilFunc(Mt,Gn,hn),ue=Mt,_e=Gn,Be=hn)},setOp:function(Mt,Gn,hn){(Oe!==Mt||at!==Gn||Gt!==hn)&&(s.stencilOp(Mt,Gn,hn),Oe=Mt,at=Gn,Gt=hn)},setLocked:function(Mt){X=Mt},setClear:function(Mt){en!==Mt&&(s.clearStencil(Mt),en=Mt)},reset:function(){X=!1,Le=null,ue=null,_e=null,Be=null,Oe=null,at=null,Gt=null,en=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,M=[],E=null,A=!1,S=null,_=null,L=null,U=null,w=null,I=null,V=null,B=new zt(0,0,0),W=0,D=!1,C=null,G=null,le=null,re=null,xe=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=K>=2);let Ee=null,O={};const ee=s.getParameter(s.SCISSOR_BOX),Se=s.getParameter(s.VIEWPORT),Me=new $t().fromArray(ee),J=new $t().fromArray(Se);function me(X,Le,ue,_e){const Be=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(X,Oe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ue;at++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Le+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Oe}const ye={};ye[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Re(s.DEPTH_TEST),d.setFunc(As),_t(!1),it(R_),Re(s.CULL_FACE),F(Xa);function Re(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ne(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function ot(X,Le){return x[X]!==Le?(s.bindFramebuffer(X,Le),x[X]=Le,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ke(X,Le){let ue=M,_e=!1;if(X){ue=v.get(Le),ue===void 0&&(ue=[],v.set(Le,ue));const Be=X.textures;if(ue.length!==Be.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,at=Be.length;Oe<at;Oe++)ue[Oe]=s.COLOR_ATTACHMENT0+Oe;ue.length=Be.length,_e=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ue)}function Ht(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Bt={[Sr]:s.FUNC_ADD,[lM]:s.FUNC_SUBTRACT,[uM]:s.FUNC_REVERSE_SUBTRACT};Bt[cM]=s.MIN,Bt[fM]=s.MAX;const ft={[dM]:s.ZERO,[hM]:s.ONE,[pM]:s.SRC_COLOR,[zd]:s.SRC_ALPHA,[SM]:s.SRC_ALPHA_SATURATE,[vM]:s.DST_COLOR,[gM]:s.DST_ALPHA,[mM]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[xM]:s.ONE_MINUS_DST_COLOR,[_M]:s.ONE_MINUS_DST_ALPHA,[yM]:s.CONSTANT_COLOR,[MM]:s.ONE_MINUS_CONSTANT_COLOR,[EM]:s.CONSTANT_ALPHA,[bM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(X,Le,ue,_e,Be,Oe,at,Gt,en,Mt){if(X===Xa){A===!0&&(Ne(s.BLEND),A=!1);return}if(A===!1&&(Re(s.BLEND),A=!0),X!==oM){if(X!==S||Mt!==D){if((_!==Sr||w!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,w=Sr),Mt)switch(X){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case C_:s.blendFunc(s.ONE,s.ONE);break;case w_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case D_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case C_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case w_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case D_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,I=null,V=null,B.set(0,0,0),W=0,S=X,D=Mt}return}Be=Be||Le,Oe=Oe||ue,at=at||_e,(Le!==_||Be!==w)&&(s.blendEquationSeparate(Bt[Le],Bt[Be]),_=Le,w=Be),(ue!==L||_e!==U||Oe!==I||at!==V)&&(s.blendFuncSeparate(ft[ue],ft[_e],ft[Oe],ft[at]),L=ue,U=_e,I=Oe,V=at),(Gt.equals(B)===!1||en!==W)&&(s.blendColor(Gt.r,Gt.g,Gt.b,en),B.copy(Gt),W=en),S=X,D=!1}function Ln(X,Le){X.side===na?Ne(s.CULL_FACE):Re(s.CULL_FACE);let ue=X.side===Fn;Le&&(ue=!ue),_t(ue),X.blending===bs&&X.transparent===!1?F(Xa):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const _e=X.stencilWrite;h.setTest(_e),_e&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Dt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Re(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function it(X){X!==aM?(Re(s.CULL_FACE),X!==G&&(X===R_?s.cullFace(s.BACK):X===rM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),G=X}function We(X){X!==le&&(z&&s.lineWidth(X),le=X)}function Dt(X,Le,ue){X?(Re(s.POLYGON_OFFSET_FILL),(re!==Le||xe!==ue)&&(s.polygonOffset(Le,ue),re=Le,xe=ue)):Ne(s.POLYGON_OFFSET_FILL)}function Ve(X){X?Re(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function N(X){X===void 0&&(X=s.TEXTURE0+pe-1),Ee!==X&&(s.activeTexture(X),Ee=X)}function T(X,Le,ue){ue===void 0&&(Ee===null?ue=s.TEXTURE0+pe-1:ue=Ee);let _e=O[ue];_e===void 0&&(_e={type:void 0,texture:void 0},O[ue]=_e),(_e.type!==X||_e.texture!==Le)&&(Ee!==ue&&(s.activeTexture(ue),Ee=ue),s.bindTexture(X,Le||ye[X]),_e.type=X,_e.texture=Le)}function te(){const X=O[Ee];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function ge(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function fe(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ce(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function je(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qe(X){Me.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Me.copy(X))}function ze(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function ut(X,Le){let ue=p.get(Le);ue===void 0&&(ue=new WeakMap,p.set(Le,ue));let _e=ue.get(X);_e===void 0&&(_e=s.getUniformBlockIndex(Le,X.name),ue.set(X,_e))}function nt(X,Le){const _e=p.get(Le).get(X);m.get(Le)!==_e&&(s.uniformBlockBinding(Le,_e,X.__bindingPointIndex),m.set(Le,_e))}function Ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ee=null,O={},x={},v=new WeakMap,M=[],E=null,A=!1,S=null,_=null,L=null,U=null,w=null,I=null,V=null,B=new zt(0,0,0),W=0,D=!1,C=null,G=null,le=null,re=null,xe=null,Me.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:Re,disable:Ne,bindFramebuffer:ot,drawBuffers:Ke,useProgram:Ht,setBlending:F,setMaterial:Ln,setFlipSided:_t,setCullFace:it,setLineWidth:We,setPolygonOffset:Dt,setScissorTest:Ve,activeTexture:N,bindTexture:T,unbindTexture:te,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:Fe,texImage3D:je,updateUBOMapping:ut,uniformBlockBinding:nt,texStorage2D:$e,texStorage3D:Ae,texSubImage2D:fe,texSubImage3D:Pe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ge,scissor:Qe,viewport:ze,reset:Ut}}function gR(s,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,g=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return M?new OffscreenCanvas(N,T):Xu("canvas")}function A(N,T,te){let ge=1;const be=Ve(N);if((be.width>te||be.height>te)&&(ge=te/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor(ge*be.width),Pe=Math.floor(ge*be.height);x===void 0&&(x=E(fe,Pe));const Ce=T?E(fe,Pe):x;return Ce.width=fe,Ce.height=Pe,Ce.getContext("2d").drawImage(N,0,0,fe,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+fe+"x"+Pe+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),N;return N}function S(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function L(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(N,T,te,ge,be=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=T;if(T===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),T===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const Pe=be?Vu:Tt.getTransfer(ge);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=Pe===Pt?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function w(N,T){let te;return N?T===null||T===Tr||T===Go?te=s.DEPTH24_STENCIL8:T===ia?te=s.DEPTH32F_STENCIL8:T===Ho&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Tr||T===Go?te=s.DEPTH_COMPONENT24:T===ia?te=s.DEPTH_COMPONENT32F:T===Ho&&(te=s.DEPTH_COMPONENT16),te}function I(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==_i&&N.minFilter!==Ai?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function V(N){const T=N.target;T.removeEventListener("dispose",V),W(T),T.isVideoTexture&&g.delete(T)}function B(N){const T=N.target;T.removeEventListener("dispose",B),C(T)}function W(N){const T=r.get(N);if(T.__webglInit===void 0)return;const te=N.source,ge=v.get(te);if(ge){const be=ge[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&D(N),Object.keys(ge).length===0&&v.delete(te)}r.remove(N)}function D(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const te=N.source,ge=v.get(te);delete ge[T.__cacheKey],d.memory.textures--}function C(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let be=0;be<T.__webglFramebuffer[ge].length;be++)s.deleteFramebuffer(T.__webglFramebuffer[ge][be]);else s.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ge]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const te=N.textures;for(let ge=0,be=te.length;ge<be;ge++){const fe=r.get(te[ge]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),d.memory.textures--),r.remove(te[ge])}r.remove(N)}let G=0;function le(){G=0}function re(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function xe(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function pe(N,T){const te=r.get(N);if(N.isVideoTexture&&We(N),N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){const ge=N.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(te,N,T);return}}i.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function z(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){J(te,N,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function K(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){J(te,N,T);return}i.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function j(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){me(te,N,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const Ee={[Yd]:s.REPEAT,[Mr]:s.CLAMP_TO_EDGE,[jd]:s.MIRRORED_REPEAT},O={[_i]:s.NEAREST,[OM]:s.NEAREST_MIPMAP_NEAREST,[cu]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[sd]:s.LINEAR_MIPMAP_NEAREST,[Er]:s.LINEAR_MIPMAP_LINEAR},ee={[FM]:s.NEVER,[WM]:s.ALWAYS,[HM]:s.LESS,[Qv]:s.LEQUAL,[GM]:s.EQUAL,[XM]:s.GEQUAL,[VM]:s.GREATER,[kM]:s.NOTEQUAL};function Se(N,T){if(T.type===ia&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ai||T.magFilter===sd||T.magFilter===cu||T.magFilter===Er||T.minFilter===Ai||T.minFilter===sd||T.minFilter===cu||T.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Ee[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Ee[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Ee[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,O[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,ee[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==cu&&T.minFilter!==Er||T.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Me(N,T){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",V));const ge=T.source;let be=v.get(ge);be===void 0&&(be={},v.set(ge,be));const fe=xe(T);if(fe!==N.__cacheKey){be[fe]===void 0&&(be[fe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,te=!0),be[fe].usedTimes++;const Pe=be[N.__cacheKey];Pe!==void 0&&(be[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(T)),N.__cacheKey=fe,N.__webglTexture=be[fe].texture}return te}function J(N,T,te){let ge=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ge=s.TEXTURE_3D);const be=Me(N,T),fe=T.source;i.bindTexture(ge,N.__webglTexture,s.TEXTURE0+te);const Pe=r.get(fe);if(fe.version!==Pe.__version||be===!0){i.activeTexture(s.TEXTURE0+te);const Ce=Tt.getPrimaries(Tt.workingColorSpace),Ge=T.colorSpace===ka?null:Tt.getPrimaries(T.colorSpace),$e=T.colorSpace===ka||Ce===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ae=A(T.image,!1,l.maxTextureSize);Ae=Dt(T,Ae);const Fe=u.convert(T.format,T.colorSpace),je=u.convert(T.type);let Qe=U(T.internalFormat,Fe,je,T.colorSpace,T.isVideoTexture);Se(ge,T);let ze;const ut=T.mipmaps,nt=T.isVideoTexture!==!0,Ut=Pe.__version===void 0||be===!0,X=fe.dataReady,Le=I(T,Ae);if(T.isDepthTexture)Qe=w(T.format===ko,T.type),Ut&&(nt?i.texStorage2D(s.TEXTURE_2D,1,Qe,Ae.width,Ae.height):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,je,null));else if(T.isDataTexture)if(ut.length>0){nt&&Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let ue=0,_e=ut.length;ue<_e;ue++)ze=ut[ue],nt?X&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,je,ze.data):i.texImage2D(s.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,Fe,je,ze.data);T.generateMipmaps=!1}else nt?(Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,Ae.width,Ae.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,Fe,je,Ae.data)):i.texImage2D(s.TEXTURE_2D,0,Qe,Ae.width,Ae.height,0,Fe,je,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){nt&&Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,ut[0].width,ut[0].height,Ae.depth);for(let ue=0,_e=ut.length;ue<_e;ue++)if(ze=ut[ue],T.format!==gi)if(Fe!==null)if(nt){if(X)if(T.layerUpdates.size>0){const Be=$_(ze.width,ze.height,T.format,T.type);for(const Oe of T.layerUpdates){const at=ze.data.subarray(Oe*Be/ze.data.BYTES_PER_ELEMENT,(Oe+1)*Be/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,Oe,ze.width,ze.height,1,Fe,at)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Ae.depth,Fe,ze.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,Qe,ze.width,ze.height,Ae.depth,0,ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ze.width,ze.height,Ae.depth,Fe,je,ze.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ue,Qe,ze.width,ze.height,Ae.depth,0,Fe,je,ze.data)}else{nt&&Ut&&i.texStorage2D(s.TEXTURE_2D,Le,Qe,ut[0].width,ut[0].height);for(let ue=0,_e=ut.length;ue<_e;ue++)ze=ut[ue],T.format!==gi?Fe!==null?nt?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,ze.data):i.compressedTexImage2D(s.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?X&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,ze.width,ze.height,Fe,je,ze.data):i.texImage2D(s.TEXTURE_2D,ue,Qe,ze.width,ze.height,0,Fe,je,ze.data)}else if(T.isDataArrayTexture)if(nt){if(Ut&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,Ae.width,Ae.height,Ae.depth),X)if(T.layerUpdates.size>0){const ue=$_(Ae.width,Ae.height,T.format,T.type);for(const _e of T.layerUpdates){const Be=Ae.data.subarray(_e*ue/Ae.data.BYTES_PER_ELEMENT,(_e+1)*ue/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,Ae.width,Ae.height,1,Fe,je,Be)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,je,Ae.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,je,Ae.data);else if(T.isData3DTexture)nt?(Ut&&i.texStorage3D(s.TEXTURE_3D,Le,Qe,Ae.width,Ae.height,Ae.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Fe,je,Ae.data)):i.texImage3D(s.TEXTURE_3D,0,Qe,Ae.width,Ae.height,Ae.depth,0,Fe,je,Ae.data);else if(T.isFramebufferTexture){if(Ut)if(nt)i.texStorage2D(s.TEXTURE_2D,Le,Qe,Ae.width,Ae.height);else{let ue=Ae.width,_e=Ae.height;for(let Be=0;Be<Le;Be++)i.texImage2D(s.TEXTURE_2D,Be,Qe,ue,_e,0,Fe,je,null),ue>>=1,_e>>=1}}else if(ut.length>0){if(nt&&Ut){const ue=Ve(ut[0]);i.texStorage2D(s.TEXTURE_2D,Le,Qe,ue.width,ue.height)}for(let ue=0,_e=ut.length;ue<_e;ue++)ze=ut[ue],nt?X&&i.texSubImage2D(s.TEXTURE_2D,ue,0,0,Fe,je,ze):i.texImage2D(s.TEXTURE_2D,ue,Qe,Fe,je,ze);T.generateMipmaps=!1}else if(nt){if(Ut){const ue=Ve(Ae);i.texStorage2D(s.TEXTURE_2D,Le,Qe,ue.width,ue.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,je,Ae)}else i.texImage2D(s.TEXTURE_2D,0,Qe,Fe,je,Ae);S(T)&&_(ge),Pe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function me(N,T,te){if(T.image.length!==6)return;const ge=Me(N,T),be=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+te);const fe=r.get(be);if(be.version!==fe.__version||ge===!0){i.activeTexture(s.TEXTURE0+te);const Pe=Tt.getPrimaries(Tt.workingColorSpace),Ce=T.colorSpace===ka?null:Tt.getPrimaries(T.colorSpace),Ge=T.colorSpace===ka||Pe===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Fe=[];for(let _e=0;_e<6;_e++)!$e&&!Ae?Fe[_e]=A(T.image[_e],!0,l.maxCubemapSize):Fe[_e]=Ae?T.image[_e].image:T.image[_e],Fe[_e]=Dt(T,Fe[_e]);const je=Fe[0],Qe=u.convert(T.format,T.colorSpace),ze=u.convert(T.type),ut=U(T.internalFormat,Qe,ze,T.colorSpace),nt=T.isVideoTexture!==!0,Ut=fe.__version===void 0||ge===!0,X=be.dataReady;let Le=I(T,je);Se(s.TEXTURE_CUBE_MAP,T);let ue;if($e){nt&&Ut&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,je.width,je.height);for(let _e=0;_e<6;_e++){ue=Fe[_e].mipmaps;for(let Be=0;Be<ue.length;Be++){const Oe=ue[Be];T.format!==gi?Qe!==null?nt?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,0,0,Oe.width,Oe.height,Qe,Oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,ut,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):nt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,0,0,Oe.width,Oe.height,Qe,ze,Oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be,ut,Oe.width,Oe.height,0,Qe,ze,Oe.data)}}}else{if(ue=T.mipmaps,nt&&Ut){ue.length>0&&Le++;const _e=Ve(Fe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ut,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(Ae){nt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe[_e].width,Fe[_e].height,Qe,ze,Fe[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,Fe[_e].width,Fe[_e].height,0,Qe,ze,Fe[_e].data);for(let Be=0;Be<ue.length;Be++){const at=ue[Be].image[_e].image;nt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,0,0,at.width,at.height,Qe,ze,at.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,ut,at.width,at.height,0,Qe,ze,at.data)}}else{nt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Qe,ze,Fe[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ut,Qe,ze,Fe[_e]);for(let Be=0;Be<ue.length;Be++){const Oe=ue[Be];nt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,0,0,Qe,ze,Oe.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Be+1,ut,Qe,ze,Oe.image[_e])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),fe.__version=be.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ye(N,T,te,ge,be,fe){const Pe=u.convert(te.format,te.colorSpace),Ce=u.convert(te.type),Ge=U(te.internalFormat,Pe,Ce,te.colorSpace),$e=r.get(T),Ae=r.get(te);if(Ae.__renderTarget=T,!$e.__hasExternalTextures){const Fe=Math.max(1,T.width>>fe),je=Math.max(1,T.height>>fe);be===s.TEXTURE_3D||be===s.TEXTURE_2D_ARRAY?i.texImage3D(be,fe,Ge,Fe,je,T.depth,0,Pe,Ce,null):i.texImage2D(be,fe,Ge,Fe,je,0,Pe,Ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),it(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,be,Ae.__webglTexture,0,_t(T)):(be===s.TEXTURE_2D||be>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,be,Ae.__webglTexture,fe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(N,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ge=T.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,fe=w(T.stencilBuffer,be),Pe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=_t(T);it(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,T.width,T.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,N)}else{const ge=T.textures;for(let be=0;be<ge.length;be++){const fe=ge[be],Pe=u.convert(fe.format,fe.colorSpace),Ce=u.convert(fe.type),Ge=U(fe.internalFormat,Pe,Ce,fe.colorSpace),$e=_t(T);te&&it(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ge,T.width,T.height):it(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ge,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const be=ge.__webglTexture,fe=_t(T);if(T.depthTexture.format===Vo)it(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,be,0);else if(T.depthTexture.format===ko)it(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,be,0);else throw new Error("Unknown depthTexture format")}function ot(N){const T=r.get(N),te=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ge=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ge){const be=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),T.__depthDisposeCallback=be}T.__boundDepthTexture=ge}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const ge=N.texture.mipmaps;ge&&ge.length>0?Ne(T.__webglFramebuffer[0],N):Ne(T.__webglFramebuffer,N)}else if(te){T.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ge]),T.__webglDepthbuffer[ge]===void 0)T.__webglDepthbuffer[ge]=s.createRenderbuffer(),Re(T.__webglDepthbuffer[ge],N,!1);else{const be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,fe)}}else{const ge=N.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Re(T.__webglDepthbuffer,N,!1);else{const be=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,fe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(N,T,te){const ge=r.get(N);T!==void 0&&ye(ge.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&ot(N)}function Ht(N){const T=N.texture,te=r.get(N),ge=r.get(T);N.addEventListener("dispose",B);const be=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Pe=be.length>1;if(Pe||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=T.version,d.memory.textures++),fe){te.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ce]=[];for(let Ge=0;Ge<T.mipmaps.length;Ge++)te.__webglFramebuffer[Ce][Ge]=s.createFramebuffer()}else te.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)te.__webglFramebuffer[Ce]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let Ce=0,Ge=be.length;Ce<Ge;Ce++){const $e=r.get(be[Ce]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),d.memory.textures++)}if(N.samples>0&&it(N)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ce=0;Ce<be.length;Ce++){const Ge=be[Ce];te.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce]);const $e=u.convert(Ge.format,Ge.colorSpace),Ae=u.convert(Ge.type),Fe=U(Ge.internalFormat,$e,Ae,Ge.colorSpace,N.isXRRenderTarget===!0),je=_t(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Fe,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,te.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(te.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Se(s.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)ye(te.__webglFramebuffer[Ce][Ge],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ge);else ye(te.__webglFramebuffer[Ce],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ce=0,Ge=be.length;Ce<Ge;Ce++){const $e=be[Ce],Ae=r.get($e);i.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),Se(s.TEXTURE_2D,$e),ye(te.__webglFramebuffer,N,$e,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),S($e)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ce,ge.__webglTexture),Se(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Ge=0;Ge<T.mipmaps.length;Ge++)ye(te.__webglFramebuffer[Ge],N,T,s.COLOR_ATTACHMENT0,Ce,Ge);else ye(te.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Ce,0);S(T)&&_(Ce),i.unbindTexture()}N.depthBuffer&&ot(N)}function Bt(N){const T=N.textures;for(let te=0,ge=T.length;te<ge;te++){const be=T[te];if(S(be)){const fe=L(N),Pe=r.get(be).__webglTexture;i.bindTexture(fe,Pe),_(fe),i.unbindTexture()}}}const ft=[],F=[];function Ln(N){if(N.samples>0){if(it(N)===!1){const T=N.textures,te=N.width,ge=N.height;let be=s.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(N),Ce=T.length>1;if(Ce)for(let $e=0;$e<T.length;$e++)i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Ge=N.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(be|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(be|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=r.get(T[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,te,ge,0,0,te,ge,be,s.NEAREST),m===!0&&(ft.length=0,F.length=0,ft.push(s.COLOR_ATTACHMENT0+$e),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ft.push(fe),F.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let $e=0;$e<T.length;$e++){i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[$e]);const Ae=r.get(T[$e]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Ae,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function _t(N){return Math.min(l.maxSamples,N.samples)}function it(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function We(N){const T=d.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Dt(N,T){const te=N.colorSpace,ge=N.format,be=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||te!==ws&&te!==ka&&(Tt.getTransfer(te)===Pt?(ge!==gi||be!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}function Ve(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=le,this.setTexture2D=pe,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=j,this.rebindTextures=Ke,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=it}function _R(s,e){function i(r,l=ka){let u;const d=Tt.getTransfer(l);if(r===la)return s.UNSIGNED_BYTE;if(r===Dh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Wv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===kv)return s.BYTE;if(r===Xv)return s.SHORT;if(r===Ho)return s.UNSIGNED_SHORT;if(r===wh)return s.INT;if(r===Tr)return s.UNSIGNED_INT;if(r===ia)return s.FLOAT;if(r===jo)return s.HALF_FLOAT;if(r===qv)return s.ALPHA;if(r===Yv)return s.RGB;if(r===gi)return s.RGBA;if(r===Vo)return s.DEPTH_COMPONENT;if(r===ko)return s.DEPTH_STENCIL;if(r===jv)return s.RED;if(r===Nh)return s.RED_INTEGER;if(r===Zv)return s.RG;if(r===Lh)return s.RG_INTEGER;if(r===Oh)return s.RGBA_INTEGER;if(r===Ou||r===Pu||r===zu||r===Bu)if(d===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Ou)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Ou)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Kd||r===Qd||r===Jd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Zd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Jd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===$d||r===eh||r===th)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===$d||r===eh)return d===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===th)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh||r===ph||r===mh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===nh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ah)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ch)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return d===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Iu||r===gh||r===_h)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Iu)return d===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kv||r===vh||r===xh||r===Sh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Iu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===vh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const vR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Hn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ca({vertexShader:vR,fragmentShader:xR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Jo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yR extends Ns{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,v=null,M=null,E=null;const A=new SR,S=i.getContextAttributes();let _=null,L=null;const U=[],w=[],I=new Rt;let V=null;const B=new pi;B.viewport=new $t;const W=new pi;W.viewport=new $t;const D=[B,W],C=new VE;let G=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let me=U[J];return me===void 0&&(me=new Ad,U[J]=me),me.getTargetRaySpace()},this.getControllerGrip=function(J){let me=U[J];return me===void 0&&(me=new Ad,U[J]=me),me.getGripSpace()},this.getHand=function(J){let me=U[J];return me===void 0&&(me=new Ad,U[J]=me),me.getHandSpace()};function re(J){const me=w.indexOf(J.inputSource);if(me===-1)return;const ye=U[me];ye!==void 0&&(ye.update(J.inputSource,J.frame,p||d),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function xe(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",xe),l.removeEventListener("inputsourceschange",pe);for(let J=0;J<U.length;J++){const me=w[J];me!==null&&(w[J]=null,U[J].disconnect(me))}G=null,le=null,A.reset(),e.setRenderTarget(_),M=null,v=null,x=null,l=null,L=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",xe),l.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Ne=null;S.depth&&(Ne=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=S.stencil?ko:Vo,Re=S.stencil?Go:Tr);const ot={colorFormat:i.RGBA8,depthFormat:Ne,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(ot),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new Ar(v.textureWidth,v.textureHeight,{format:gi,type:la,depthTexture:new u0(v.textureWidth,v.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ye={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Ar(M.framebufferWidth,M.framebufferHeight,{format:gi,type:la,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(J){for(let me=0;me<J.removed.length;me++){const ye=J.removed[me],Re=w.indexOf(ye);Re>=0&&(w[Re]=null,U[Re].disconnect(ye))}for(let me=0;me<J.added.length;me++){const ye=J.added[me];let Re=w.indexOf(ye);if(Re===-1){for(let ot=0;ot<U.length;ot++)if(ot>=w.length){w.push(ye),Re=ot;break}else if(w[ot]===null){w[ot]=ye,Re=ot;break}if(Re===-1)break}const Ne=U[Re];Ne&&Ne.connect(ye)}}const z=new oe,K=new oe;function j(J,me,ye){z.setFromMatrixPosition(me.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const Re=z.distanceTo(K),Ne=me.projectionMatrix.elements,ot=ye.projectionMatrix.elements,Ke=Ne[14]/(Ne[10]-1),Ht=Ne[14]/(Ne[10]+1),Bt=(Ne[9]+1)/Ne[5],ft=(Ne[9]-1)/Ne[5],F=(Ne[8]-1)/Ne[0],Ln=(ot[8]+1)/ot[0],_t=Ke*F,it=Ke*Ln,We=Re/(-F+Ln),Dt=We*-F;if(me.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(We),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ve=Ke+We,N=Ht+We,T=_t-Dt,te=it+(Re-Dt),ge=Bt*Ht/N*Ve,be=ft*Ht/N*Ve;J.projectionMatrix.makePerspective(T,te,ge,be,Ve,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ee(J,me){me===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(me.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let me=J.near,ye=J.far;A.texture!==null&&(A.depthNear>0&&(me=A.depthNear),A.depthFar>0&&(ye=A.depthFar)),C.near=W.near=B.near=me,C.far=W.far=B.far=ye,(G!==C.near||le!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),G=C.near,le=C.far),B.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,C.layers.mask=B.layers.mask|W.layers.mask;const Re=J.parent,Ne=C.cameras;Ee(C,Re);for(let ot=0;ot<Ne.length;ot++)Ee(Ne[ot],Re);Ne.length===2?j(C,B,W):C.projectionMatrix.copy(B.projectionMatrix),O(J,C,Re)};function O(J,me,ye){ye===null?J.matrix.copy(me.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(me.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(me.projectionMatrix),J.projectionMatrixInverse.copy(me.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Xo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let ee=null;function Se(J,me){if(g=me.getViewerPose(p||d),E=me,g!==null){const ye=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Re=!1;ye.length!==C.cameras.length&&(C.cameras.length=0,Re=!0);for(let Ke=0;Ke<ye.length;Ke++){const Ht=ye[Ke];let Bt=null;if(M!==null)Bt=M.getViewport(Ht);else{const F=x.getViewSubImage(v,Ht);Bt=F.viewport,Ke===0&&(e.setRenderTargetTextures(L,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(L))}let ft=D[Ke];ft===void 0&&(ft=new pi,ft.layers.enable(Ke),ft.viewport=new $t,D[Ke]=ft),ft.matrix.fromArray(Ht.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Ht.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),Ke===0&&(C.matrix.copy(ft.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Re===!0&&C.cameras.push(ft)}const Ne=l.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const Ke=x.getDepthInformation(ye[0]);Ke&&Ke.isValid&&Ke.texture&&A.init(e,Ke,l.renderState)}}for(let ye=0;ye<U.length;ye++){const Re=w[ye],Ne=U[ye];Re!==null&&Ne!==void 0&&Ne.update(Re,me,p||d)}ee&&ee(J,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),E=null}const Me=new f0;Me.setAnimationLoop(Se),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}}const _r=new ua,MR=new sn;function ER(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,r0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),v(S,_),_.isMeshPhysicalMaterial&&M(S,_,w)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,L,U):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),U=L.envMap,w=L.envMapRotation;U&&(S.envMap.value=U,_r.copy(w),_r.x*=-1,_r.y*=-1,_r.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),S.envMapRotation.value.setFromMatrix4(MR.makeRotationFromEuler(_r)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,U){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=U*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bR(s,e,i,r){let l={},u={},d=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const w=U.program;r.uniformBlockBinding(L,w)}function p(L,U){let w=l[L.id];w===void 0&&(E(L),w=g(L),l[L.id]=w,L.addEventListener("dispose",S));const I=U.program;r.updateUBOMapping(L,I);const V=e.render.frame;u[L.id]!==V&&(v(L),u[L.id]=V)}function g(L){const U=x();L.__bindingPointIndex=U;const w=s.createBuffer(),I=L.__size,V=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,w),w}function x(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const U=l[L.id],w=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let V=0,B=w.length;V<B;V++){const W=Array.isArray(w[V])?w[V]:[w[V]];for(let D=0,C=W.length;D<C;D++){const G=W[D];if(M(G,V,D,I)===!0){const le=G.__offset,re=Array.isArray(G.value)?G.value:[G.value];let xe=0;for(let pe=0;pe<re.length;pe++){const z=re[pe],K=A(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,le+xe,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,xe),xe+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,U,w,I){const V=L.value,B=U+"_"+w;if(I[B]===void 0)return typeof V=="number"||typeof V=="boolean"?I[B]=V:I[B]=V.clone(),!0;{const W=I[B];if(typeof V=="number"||typeof V=="boolean"){if(W!==V)return I[B]=V,!0}else if(W.equals(V)===!1)return W.copy(V),!0}return!1}function E(L){const U=L.uniforms;let w=0;const I=16;for(let B=0,W=U.length;B<W;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,G=D.length;C<G;C++){const le=D[C],re=Array.isArray(le.value)?le.value:[le.value];for(let xe=0,pe=re.length;xe<pe;xe++){const z=re[xe],K=A(z),j=w%I,Ee=j%K.boundary,O=j+Ee;w+=Ee,O!==0&&I-O<K.storage&&(w+=I-O),le.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=w,w+=K.storage}}}const V=w%I;return V>0&&(w+=I-V),L.__size=w,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const w=d.indexOf(U.__bindingPointIndex);d.splice(w,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class TR{constructor(e={}){const{canvas:i=lE(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=si;let V=0,B=0,W=null,D=-1,C=null;const G=new $t,le=new $t;let re=null;const xe=new zt(0);let pe=0,z=i.width,K=i.height,j=1,Ee=null,O=null;const ee=new $t(0,0,z,K),Se=new $t(0,0,z,K);let Me=!1;const J=new l0;let me=!1,ye=!1;const Re=new sn,Ne=new sn,ot=new oe,Ke=new $t,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function ft(){return W===null?j:1}let F=r;function Ln(R,Y){return i.getContext(R,Y)}try{const R={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ch}`),i.addEventListener("webglcontextlost",_e,!1),i.addEventListener("webglcontextrestored",Be,!1),i.addEventListener("webglcontextcreationerror",Oe,!1),F===null){const Y="webgl2";if(F=Ln(Y,R),F===null)throw Ln(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let _t,it,We,Dt,Ve,N,T,te,ge,be,fe,Pe,Ce,Ge,$e,Ae,Fe,je,Qe,ze,ut,nt,Ut,X;function Le(){_t=new PA(F),_t.init(),nt=new _R(F,_t),it=new CA(F,_t,e,nt),We=new mR(F,_t),it.reverseDepthBuffer&&v&&We.buffers.depth.setReversed(!0),Dt=new IA(F),Ve=new nR,N=new gR(F,_t,We,Ve,it,nt,Dt),T=new DA(w),te=new OA(w),ge=new XE(F),Ut=new AA(F,ge),be=new zA(F,ge,Dt,Ut),fe=new HA(F,be,ge,Dt),Qe=new FA(F,it,N),Ae=new wA(Ve),Pe=new tR(w,T,te,_t,it,Ut,Ae),Ce=new ER(w,Ve),Ge=new aR,$e=new cR(_t),je=new TA(w,T,te,We,fe,M,m),Fe=new hR(w,fe,it),X=new bR(F,Dt,it,We),ze=new RA(F,_t,Dt),ut=new BA(F,_t,Dt),Dt.programs=Pe.programs,w.capabilities=it,w.extensions=_t,w.properties=Ve,w.renderLists=Ge,w.shadowMap=Fe,w.state=We,w.info=Dt}Le();const ue=new yR(w,F);this.xr=ue,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(z,K,!1))},this.getSize=function(R){return R.set(z,K)},this.setSize=function(R,Y,ae=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,K=Y,i.width=Math.floor(R*j),i.height=Math.floor(Y*j),ae===!0&&(i.style.width=R+"px",i.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(z*j,K*j).floor()},this.setDrawingBufferSize=function(R,Y,ae){z=R,K=Y,j=ae,i.width=Math.floor(R*ae),i.height=Math.floor(Y*ae),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,Y,ae,se){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,Y,ae,se),We.viewport(G.copy(ee).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(Se)},this.setScissor=function(R,Y,ae,se){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,Y,ae,se),We.scissor(le.copy(Se).multiplyScalar(j).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){We.setScissorTest(Me=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){O=R},this.getClearColor=function(R){return R.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ae=!0){let se=0;if(R){let Z=!1;if(W!==null){const Te=W.texture.format;Z=Te===Oh||Te===Lh||Te===Nh}if(Z){const Te=W.texture.type,we=Te===la||Te===Tr||Te===Ho||Te===Go||Te===Dh||Te===Uh,De=je.getClearColor(),Ie=je.getClearAlpha(),et=De.r,qe=De.g,Xe=De.b;we?(E[0]=et,E[1]=qe,E[2]=Xe,E[3]=Ie,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=et,A[1]=qe,A[2]=Xe,A[3]=Ie,F.clearBufferiv(F.COLOR,0,A))}else se|=F.COLOR_BUFFER_BIT}Y&&(se|=F.DEPTH_BUFFER_BIT),ae&&(se|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_e,!1),i.removeEventListener("webglcontextrestored",Be,!1),i.removeEventListener("webglcontextcreationerror",Oe,!1),je.dispose(),Ge.dispose(),$e.dispose(),Ve.dispose(),T.dispose(),te.dispose(),fe.dispose(),Ut.dispose(),X.dispose(),Pe.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",on),ue.removeEventListener("sessionend",xn),On.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Be(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=Dt.autoReset,Y=Fe.enabled,ae=Fe.autoUpdate,se=Fe.needsUpdate,Z=Fe.type;Le(),Dt.autoReset=R,Fe.enabled=Y,Fe.autoUpdate=ae,Fe.needsUpdate=se,Fe.type=Z}function Oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function at(R){const Y=R.target;Y.removeEventListener("dispose",at),Gt(Y)}function Gt(R){en(R),Ve.remove(R)}function en(R){const Y=Ve.get(R).programs;Y!==void 0&&(Y.forEach(function(ae){Pe.releaseProgram(ae)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ae,se,Z,Te){Y===null&&(Y=Ht);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,De=Za(R,Y,ae,se,Z);We.setMaterial(se,we);let Ie=ae.index,et=1;if(se.wireframe===!0){if(Ie=be.getWireframeAttribute(ae),Ie===void 0)return;et=2}const qe=ae.drawRange,Xe=ae.attributes.position;let ht=qe.start*et,Et=(qe.start+qe.count)*et;Te!==null&&(ht=Math.max(ht,Te.start*et),Et=Math.min(Et,(Te.start+Te.count)*et)),Ie!==null?(ht=Math.max(ht,0),Et=Math.min(Et,Ie.count)):Xe!=null&&(ht=Math.max(ht,0),Et=Math.min(Et,Xe.count));const Wt=Et-ht;if(Wt<0||Wt===1/0)return;Ut.setup(Z,se,De,ae,Ie);let vt,xt=ze;if(Ie!==null&&(vt=ge.get(Ie),xt=ut,xt.setIndex(vt)),Z.isMesh)se.wireframe===!0?(We.setLineWidth(se.wireframeLinewidth*ft()),xt.setMode(F.LINES)):xt.setMode(F.TRIANGLES);else if(Z.isLine){let Ye=se.linewidth;Ye===void 0&&(Ye=1),We.setLineWidth(Ye*ft()),Z.isLineSegments?xt.setMode(F.LINES):Z.isLineLoop?xt.setMode(F.LINE_LOOP):xt.setMode(F.LINE_STRIP)}else Z.isPoints?xt.setMode(F.POINTS):Z.isSprite&&xt.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Fu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))xt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ye=Z._multiDrawStarts,jt=Z._multiDrawCounts,yt=Z._multiDrawCount,bn=Ie?ge.get(Ie).bytesPerElement:1,pa=Ve.get(se).currentProgram.getUniforms();for(let Vt=0;Vt<yt;Vt++)pa.setValue(F,"_gl_DrawID",Vt),xt.render(Ye[Vt]/bn,jt[Vt])}else if(Z.isInstancedMesh)xt.renderInstances(ht,Wt,Z.count);else if(ae.isInstancedBufferGeometry){const Ye=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,jt=Math.min(ae.instanceCount,Ye);xt.renderInstances(ht,Wt,jt)}else xt.render(ht,Wt)};function Mt(R,Y,ae){R.transparent===!0&&R.side===na&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,da(R,Y,ae),R.side=qa,R.needsUpdate=!0,da(R,Y,ae),R.side=na):da(R,Y,ae)}this.compile=function(R,Y,ae=null){ae===null&&(ae=R),_=$e.get(ae),_.init(Y),U.push(_),ae.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ae&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Y.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const se=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Te=Z.material;if(Te)if(Array.isArray(Te))for(let we=0;we<Te.length;we++){const De=Te[we];Mt(De,ae,Z),se.add(De)}else Mt(Te,ae,Z),se.add(Te)}),_=U.pop(),se},this.compileAsync=function(R,Y,ae=null){const se=this.compile(R,Y,ae);return new Promise(Z=>{function Te(){if(se.forEach(function(we){Ve.get(we).currentProgram.isReady()&&se.delete(we)}),se.size===0){Z(R);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Gn=null;function hn(R){Gn&&Gn(R)}function on(){On.stop()}function xn(){On.start()}const On=new f0;On.setAnimationLoop(hn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){Gn=R,ue.setAnimationLoop(R),R===null?On.stop():On.start()},ue.addEventListener("sessionstart",on),ue.addEventListener("sessionend",xn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(Y),Y=ue.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,Y,W),_=$e.get(R,U.length),_.init(Y),U.push(_),Ne.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),J.setFromProjectionMatrix(Ne),ye=this.localClippingEnabled,me=Ae.init(this.clippingPlanes,ye),S=Ge.get(R,L.length),S.init(),L.push(S),ue.enabled===!0&&ue.isPresenting===!0){const Te=w.xr.getDepthSensingMesh();Te!==null&&Ya(Te,Y,-1/0,w.sortObjects)}Ya(R,Y,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Ee,O),Bt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,Bt&&je.addToRenderList(S,R),this.info.render.frame++,me===!0&&Ae.beginShadows();const ae=_.state.shadowsArray;Fe.render(ae,R,Y),me===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=S.opaque,Z=S.transmissive;if(_.setupLights(),Y.isArrayCamera){const Te=Y.cameras;if(Z.length>0)for(let we=0,De=Te.length;we<De;we++){const Ie=Te[we];el(se,Z,R,Ie)}Bt&&je.render(R);for(let we=0,De=Te.length;we<De;we++){const Ie=Te[we];$o(S,R,Ie,Ie.viewport)}}else Z.length>0&&el(se,Z,R,Y),Bt&&je.render(R),$o(S,R,Y);W!==null&&B===0&&(N.updateMultisampleRenderTarget(W),N.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,Y),Ut.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],me===!0&&Ae.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ya(R,Y,ae,se){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){se&&Ke.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const we=fe.update(R),De=R.material;De.visible&&S.push(R,we,De,ae,Ke.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const we=fe.update(R),De=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ke.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ke.copy(we.boundingSphere.center)),Ke.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(De)){const Ie=we.groups;for(let et=0,qe=Ie.length;et<qe;et++){const Xe=Ie[et],ht=De[Xe.materialIndex];ht&&ht.visible&&S.push(R,we,ht,ae,Ke.z,Xe)}}else De.visible&&S.push(R,we,De,ae,Ke.z,null)}}const Te=R.children;for(let we=0,De=Te.length;we<De;we++)Ya(Te[we],Y,ae,se)}function $o(R,Y,ae,se){const Z=R.opaque,Te=R.transmissive,we=R.transparent;_.setupLightsView(ae),me===!0&&Ae.setGlobalState(w.clippingPlanes,ae),se&&We.viewport(G.copy(se)),Z.length>0&&ja(Z,Y,ae),Te.length>0&&ja(Te,Y,ae),we.length>0&&ja(we,Y,ae),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function el(R,Y,ae,se){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new Ar(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?jo:la,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[se.id],we=se.viewport||G;Te.setSize(we.z*w.transmissionResolutionScale,we.w*w.transmissionResolutionScale);const De=w.getRenderTarget();w.setRenderTarget(Te),w.getClearColor(xe),pe=w.getClearAlpha(),pe<1&&w.setClearColor(16777215,.5),w.clear(),Bt&&je.render(ae);const Ie=w.toneMapping;w.toneMapping=Wa;const et=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),me===!0&&Ae.setGlobalState(w.clippingPlanes,se),ja(R,ae,se),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Xe=0,ht=Y.length;Xe<ht;Xe++){const Et=Y[Xe],Wt=Et.object,vt=Et.geometry,xt=Et.material,Ye=Et.group;if(xt.side===na&&Wt.layers.test(se.layers)){const jt=xt.side;xt.side=Fn,xt.needsUpdate=!0,fa(Wt,ae,se,vt,xt,Ye),xt.side=jt,xt.needsUpdate=!0,qe=!0}}qe===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}w.setRenderTarget(De),w.setClearColor(xe,pe),et!==void 0&&(se.viewport=et),w.toneMapping=Ie}function ja(R,Y,ae){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Z=0,Te=R.length;Z<Te;Z++){const we=R[Z],De=we.object,Ie=we.geometry,et=we.group;let qe=we.material;qe.allowOverride===!0&&se!==null&&(qe=se),De.layers.test(ae.layers)&&fa(De,Y,ae,Ie,qe,et)}}function fa(R,Y,ae,se,Z,Te){R.onBeforeRender(w,Y,ae,se,Z,Te),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(w,Y,ae,se,R,Te),Z.transparent===!0&&Z.side===na&&Z.forceSinglePass===!1?(Z.side=Fn,Z.needsUpdate=!0,w.renderBufferDirect(ae,Y,se,Z,R,Te),Z.side=qa,Z.needsUpdate=!0,w.renderBufferDirect(ae,Y,se,Z,R,Te),Z.side=na):w.renderBufferDirect(ae,Y,se,Z,R,Te),R.onAfterRender(w,Y,ae,se,Z,Te)}function da(R,Y,ae){Y.isScene!==!0&&(Y=Ht);const se=Ve.get(R),Z=_.state.lights,Te=_.state.shadowsArray,we=Z.state.version,De=Pe.getParameters(R,Z.state,Te,Y,ae),Ie=Pe.getProgramCacheKey(De);let et=se.programs;se.environment=R.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(R.isMeshStandardMaterial?te:T).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",at),et=new Map,se.programs=et);let qe=et.get(Ie);if(qe!==void 0){if(se.currentProgram===qe&&se.lightsStateVersion===we)return Ni(R,De),qe}else De.uniforms=Pe.getUniforms(R),R.onBeforeCompile(De,w),qe=Pe.acquireProgram(De,Ie),et.set(Ie,qe),se.uniforms=De.uniforms;const Xe=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xe.clippingPlanes=Ae.uniform),Ni(R,De),se.needsLights=tn(R),se.lightsStateVersion=we,se.needsLights&&(Xe.ambientLightColor.value=Z.state.ambient,Xe.lightProbe.value=Z.state.probe,Xe.directionalLights.value=Z.state.directional,Xe.directionalLightShadows.value=Z.state.directionalShadow,Xe.spotLights.value=Z.state.spot,Xe.spotLightShadows.value=Z.state.spotShadow,Xe.rectAreaLights.value=Z.state.rectArea,Xe.ltc_1.value=Z.state.rectAreaLTC1,Xe.ltc_2.value=Z.state.rectAreaLTC2,Xe.pointLights.value=Z.state.point,Xe.pointLightShadows.value=Z.state.pointShadow,Xe.hemisphereLights.value=Z.state.hemi,Xe.directionalShadowMap.value=Z.state.directionalShadowMap,Xe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Xe.spotShadowMap.value=Z.state.spotShadowMap,Xe.spotLightMatrix.value=Z.state.spotLightMatrix,Xe.spotLightMap.value=Z.state.spotLightMap,Xe.pointShadowMap.value=Z.state.pointShadowMap,Xe.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=qe,se.uniformsList=null,qe}function Ui(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Hu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Ni(R,Y){const ae=Ve.get(R);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Za(R,Y,ae,se,Z){Y.isScene!==!0&&(Y=Ht),N.resetTextureUnits();const Te=Y.fog,we=se.isMeshStandardMaterial?Y.environment:null,De=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:ws,Ie=(se.isMeshStandardMaterial?te:T).get(se.envMap||we),et=se.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,qe=!!ae.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Xe=!!ae.morphAttributes.position,ht=!!ae.morphAttributes.normal,Et=!!ae.morphAttributes.color;let Wt=Wa;se.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Wt=w.toneMapping);const vt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,xt=vt!==void 0?vt.length:0,Ye=Ve.get(se),jt=_.state.lights;if(me===!0&&(ye===!0||R!==C)){const pn=R===C&&se.id===D;Ae.setState(se,R,pn)}let yt=!1;se.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==jt.state.version||Ye.outputColorSpace!==De||Z.isBatchedMesh&&Ye.batching===!1||!Z.isBatchedMesh&&Ye.batching===!0||Z.isBatchedMesh&&Ye.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ye.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ye.instancing===!1||!Z.isInstancedMesh&&Ye.instancing===!0||Z.isSkinnedMesh&&Ye.skinning===!1||!Z.isSkinnedMesh&&Ye.skinning===!0||Z.isInstancedMesh&&Ye.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ye.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ye.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ye.instancingMorph===!1&&Z.morphTexture!==null||Ye.envMap!==Ie||se.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==qe||Ye.morphTargets!==Xe||Ye.morphNormals!==ht||Ye.morphColors!==Et||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ye.__version=se.version);let bn=Ye.currentProgram;yt===!0&&(bn=da(se,Y,Z));let pa=!1,Vt=!1,Oi=!1;const It=bn.getUniforms(),Tn=Ye.uniforms;if(We.useProgram(bn.program)&&(pa=!0,Vt=!0,Oi=!0),se.id!==D&&(D=se.id,Vt=!0),pa||C!==R){We.buffers.depth.getReversed()?(Re.copy(R.projectionMatrix),cE(Re),fE(Re),It.setValue(F,"projectionMatrix",Re)):It.setValue(F,"projectionMatrix",R.projectionMatrix),It.setValue(F,"viewMatrix",R.matrixWorldInverse);const Sn=It.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,ot.setFromMatrixPosition(R.matrixWorld)),it.logarithmicDepthBuffer&&It.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Vt=!0,Oi=!0)}if(Z.isSkinnedMesh){It.setOptional(F,Z,"bindMatrix"),It.setOptional(F,Z,"bindMatrixInverse");const pn=Z.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),It.setValue(F,"boneTexture",pn.boneTexture,N))}Z.isBatchedMesh&&(It.setOptional(F,Z,"batchingTexture"),It.setValue(F,"batchingTexture",Z._matricesTexture,N),It.setOptional(F,Z,"batchingIdTexture"),It.setValue(F,"batchingIdTexture",Z._indirectTexture,N),It.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&It.setValue(F,"batchingColorTexture",Z._colorsTexture,N));const ln=ae.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qe.update(Z,ae,bn),(Vt||Ye.receiveShadow!==Z.receiveShadow)&&(Ye.receiveShadow=Z.receiveShadow,It.setValue(F,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Tn.envMap.value=Ie,Tn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Vt&&(It.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ye.needsLights&&ha(Tn,Oi),Te&&se.fog===!0&&Ce.refreshFogUniforms(Tn,Te),Ce.refreshMaterialUniforms(Tn,se,j,K,_.state.transmissionRenderTarget[R.id]),Hu.upload(F,Ui(Ye),Tn,N)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Hu.upload(F,Ui(Ye),Tn,N),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(F,"center",Z.center),It.setValue(F,"modelViewMatrix",Z.modelViewMatrix),It.setValue(F,"normalMatrix",Z.normalMatrix),It.setValue(F,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const pn=se.uniformsGroups;for(let Sn=0,xi=pn.length;Sn<xi;Sn++){const Pi=pn[Sn];X.update(Pi,bn),X.bind(Pi,bn)}}return bn}function ha(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function tn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,ae){const se=Ve.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),Ve.get(R.texture).__webglTexture=Y,Ve.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ae,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ae=Ve.get(R);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0};const tl=F.createFramebuffer();this.setRenderTarget=function(R,Y=0,ae=0){W=R,V=Y,B=ae;let se=!0,Z=null,Te=!1,we=!1;if(R){const Ie=Ve.get(R);if(Ie.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(F.FRAMEBUFFER,null),se=!1;else if(Ie.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Ie.__hasExternalTextures)N.rebindTextures(R,Ve.get(R.texture).__webglTexture,Ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&Ve.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(we=!0);const qe=Ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[Y])?Z=qe[Y][ae]:Z=qe[Y],Te=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Z=Ve.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?Z=qe[ae]:Z=qe,G.copy(R.viewport),le.copy(R.scissor),re=R.scissorTest}else G.copy(ee).multiplyScalar(j).floor(),le.copy(Se).multiplyScalar(j).floor(),re=Me;if(ae!==0&&(Z=tl),We.bindFramebuffer(F.FRAMEBUFFER,Z)&&se&&We.drawBuffers(R,Z),We.viewport(G),We.scissor(le),We.setScissorTest(re),Te){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,ae)}else if(we){const Ie=Ve.get(R.texture),et=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ie.__webglTexture,ae,et)}else if(R!==null&&ae!==0){const Ie=Ve.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ie.__webglTexture,ae)}D=-1},this.readRenderTargetPixels=function(R,Y,ae,se,Z,Te,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){We.bindFramebuffer(F.FRAMEBUFFER,De);try{const Ie=R.texture,et=Ie.format,qe=Ie.type;if(!it.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-se&&ae>=0&&ae<=R.height-Z&&F.readPixels(Y,ae,se,Z,nt.convert(et),nt.convert(qe),Te)}finally{const Ie=W!==null?Ve.get(W).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ae,se,Z,Te,we){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(Y>=0&&Y<=R.width-se&&ae>=0&&ae<=R.height-Z){We.bindFramebuffer(F.FRAMEBUFFER,De);const Ie=R.texture,et=Ie.format,qe=Ie.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),F.readPixels(Y,ae,se,Z,nt.convert(et),nt.convert(qe),0);const ht=W!==null?Ve.get(W).__webglFramebuffer:null;We.bindFramebuffer(F.FRAMEBUFFER,ht);const Et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await uE(F,Et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(Xe),F.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ae=0){const se=Math.pow(2,-ae),Z=Math.floor(R.image.width*se),Te=Math.floor(R.image.height*se),we=Y!==null?Y.x:0,De=Y!==null?Y.y:0;N.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,ae,0,0,we,De,Z,Te),We.unbindTexture()};const nl=F.createFramebuffer(),Li=F.createFramebuffer();this.copyTextureToTexture=function(R,Y,ae=null,se=null,Z=0,Te=null){Te===null&&(Z!==0?(Fu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Z,Z=0):Te=0);let we,De,Ie,et,qe,Xe,ht,Et,Wt;const vt=R.isCompressedTexture?R.mipmaps[Te]:R.image;if(ae!==null)we=ae.max.x-ae.min.x,De=ae.max.y-ae.min.y,Ie=ae.isBox3?ae.max.z-ae.min.z:1,et=ae.min.x,qe=ae.min.y,Xe=ae.isBox3?ae.min.z:0;else{const ln=Math.pow(2,-Z);we=Math.floor(vt.width*ln),De=Math.floor(vt.height*ln),R.isDataArrayTexture?Ie=vt.depth:R.isData3DTexture?Ie=Math.floor(vt.depth*ln):Ie=1,et=0,qe=0,Xe=0}se!==null?(ht=se.x,Et=se.y,Wt=se.z):(ht=0,Et=0,Wt=0);const xt=nt.convert(Y.format),Ye=nt.convert(Y.type);let jt;Y.isData3DTexture?(N.setTexture3D(Y,0),jt=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(N.setTexture2DArray(Y,0),jt=F.TEXTURE_2D_ARRAY):(N.setTexture2D(Y,0),jt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const yt=F.getParameter(F.UNPACK_ROW_LENGTH),bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pa=F.getParameter(F.UNPACK_SKIP_PIXELS),Vt=F.getParameter(F.UNPACK_SKIP_ROWS),Oi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,et),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const It=R.isDataArrayTexture||R.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const ln=Ve.get(R),pn=Ve.get(Y),Sn=Ve.get(ln.__renderTarget),xi=Ve.get(pn.__renderTarget);We.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<Ie;Pi++)It&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(R).__webglTexture,Z,Xe+Pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.get(Y).__webglTexture,Te,Wt+Pi)),F.blitFramebuffer(et,qe,we,De,ht,Et,we,De,F.DEPTH_BUFFER_BIT,F.NEAREST);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||Ve.has(R)){const ln=Ve.get(R),pn=Ve.get(Y);We.bindFramebuffer(F.READ_FRAMEBUFFER,nl),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,Li);for(let Sn=0;Sn<Ie;Sn++)It?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,Z,Xe+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,Z),Tn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,Te,Wt+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,Te),Z!==0?F.blitFramebuffer(et,qe,we,De,ht,Et,we,De,F.COLOR_BUFFER_BIT,F.NEAREST):Tn?F.copyTexSubImage3D(jt,Te,ht,Et,Wt+Sn,et,qe,we,De):F.copyTexSubImage2D(jt,Te,ht,Et,et,qe,we,De);We.bindFramebuffer(F.READ_FRAMEBUFFER,null),We.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(jt,Te,ht,Et,Wt,we,De,Ie,xt,Ye,vt.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(jt,Te,ht,Et,Wt,we,De,Ie,xt,vt.data):F.texSubImage3D(jt,Te,ht,Et,Wt,we,De,Ie,xt,Ye,vt):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,ht,Et,we,De,xt,Ye,vt.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,ht,Et,vt.width,vt.height,xt,vt.data):F.texSubImage2D(F.TEXTURE_2D,Te,ht,Et,we,De,xt,Ye,vt);F.pixelStorei(F.UNPACK_ROW_LENGTH,yt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Vt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),Te===0&&Y.generateMipmaps&&F.generateMipmap(jt),We.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,ae=null,se=null,Z=0){return Fu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,Y,ae,se,Z)},this.initRenderTarget=function(R){Ve.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){V=0,B=0,W=null,We.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Tt._getUnpackColorSpace()}}const AR=`
varying vec2 v_texcoord;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_texcoord = uv;
}
`,RR=`
varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

uniform float u_shapeSize;
uniform float u_roundness;
uniform float u_borderSize;
uniform float u_circleSize;
uniform float u_circleEdge;

#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

#ifndef VAR
#define VAR 0
#endif

#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}
float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}
float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}
float fill(in float x) { return 1.0 - aastep(0.0, x); }
float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

float strokeAA(float x, float size, float w, float edge) {
    float afwidth = length(vec2(dFdx(x), dFdy(x))) * 0.70710678;
    float d_orig = smoothstep(size - edge - afwidth, size + edge + afwidth, x + w * 0.5)
                 - smoothstep(size - edge - afwidth, size + edge + afwidth, x - w * 0.5);
    return clamp(d_orig, 0.0, 1.0);
}


void main() {
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;

    float shape_size_prop = u_shapeSize;
    float roundness = u_roundness;
    float border_size_prop = u_borderSize;
    float circle_size_prop = u_circleSize;
    float circle_edge_prop = u_circleEdge;

    float sdfCircleEffect = fill(
        sdCircle(st, posMouse),
        circle_size_prop,
        circle_edge_prop
    );

    float rawShapeDist;
    float strokeIntensity;

    if (VAR == 0) {
        rawShapeDist = sdRoundRect(st, vec2(shape_size_prop), roundness);
        strokeIntensity = strokeAA(rawShapeDist, 0.0, border_size_prop, sdfCircleEffect);
    } else if (VAR == 1) {
        rawShapeDist = sdCircle(st, vec2(0.5));
        strokeIntensity = fill(rawShapeDist, 0.6, sdfCircleEffect);
    } else if (VAR == 2) {
        rawShapeDist = sdCircle(st, vec2(0.5));
        strokeIntensity = strokeAA(rawShapeDist, 0.58, 0.02, sdfCircleEffect);
    } else if (VAR == 3) {
        rawShapeDist = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        strokeIntensity = fill(rawShapeDist, 0.05, sdfCircleEffect);
    } else {
        strokeIntensity = 0.0;
    }

    vec3 objectColor = vec3(1.0);

    float finalAlpha;
    if (VAR == 0) {
        finalAlpha = clamp(strokeIntensity * 4.0, 0.0, 1.0);
    } else if (VAR == 1) {
        finalAlpha = clamp(strokeIntensity * 1.2, 0.0, 1.0);
    } else if (VAR == 2) {
        finalAlpha = clamp(strokeIntensity * 4.0, 0.0, 1.0);
    } else if (VAR == 3) {
        finalAlpha = clamp(strokeIntensity * 1.4, 0.0, 1.0);
    } else {
        finalAlpha = clamp(strokeIntensity, 0.0, 1.0);
    }
    
    gl_FragColor = vec4(objectColor, finalAlpha);
}
`,CR=({className:s="",variation:e=0,pixelRatioProp:i=2,shapeSize:r=1.2,roundness:l=.4,borderSize:u=.05,circleSize:d=.3,circleEdge:h=.5})=>{const m=he.useRef(null);return he.useEffect(()=>{const p=m.current;if(!p)return;let g,x=0,v=0;const M=new Rt,E=new Rt,A=new Rt;let S=1,_=1;const L=new BE,U=new c0;U.position.z=1;const w=new TR({alpha:!0,antialias:!0});w.setClearColor(0,0),p.appendChild(w.domElement);const I=new Jo(1,1),V=new ca({vertexShader:AR,fragmentShader:RR,uniforms:{u_mouse:{value:E},u_resolution:{value:A},u_pixelRatio:{value:i},u_shapeSize:{value:r},u_roundness:{value:l},u_borderSize:{value:u},u_circleSize:{value:d},u_circleEdge:{value:h}},defines:{VAR:e},transparent:!0}),B=new Ri(I,V);L.add(B);const W=le=>{if(!p)return;const re=p.getBoundingClientRect();M.set(le.clientX-re.left,le.clientY-re.top)};document.addEventListener("mousemove",W),document.addEventListener("pointermove",W);const D=()=>{if(!m.current)return;const le=m.current;S=le.clientWidth,_=le.clientHeight;const re=Math.min(window.devicePixelRatio||1,2);w.setSize(S,_),w.setPixelRatio(re),U.left=-S/2,U.right=S/2,U.top=_/2,U.bottom=-_/2,U.updateProjectionMatrix(),B.scale.set(S,_,1),A.set(S,_).multiplyScalar(re),V.uniforms.u_pixelRatio.value=re};D(),window.addEventListener("resize",D);let C=null;typeof ResizeObserver<"u"&&m.current&&(C=new ResizeObserver(()=>D()),C.observe(m.current));const G=()=>{x=performance.now()*.001;const le=x-v;v=x,E.x=P_.damp(E.x,M.x,8,le),E.y=P_.damp(E.y,M.y,8,le),w.render(L,U),g=requestAnimationFrame(G)};return G(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",D),C&&C.disconnect(),document.removeEventListener("mousemove",W),document.removeEventListener("pointermove",W),p&&w.domElement.parentNode===p&&p.removeChild(w.domElement),w.dispose(),V.dispose(),I.dispose()}},[e,i,r,l,u,d,h]),H.jsx("div",{ref:m,className:`w-full h-full ${s}`})},wR=()=>{const[s,e]=he.useState(1),[i,r]=he.useState(!1);return he.useEffect(()=>{typeof window<"u"&&e(window.devicePixelRatio||1)},[]),H.jsx("div",{className:"flex w-full min-h-screen justify-center items-center bg-black p-4",children:H.jsxs("div",{className:"relative w-[1000px] h-[400px] sm:w-[1200px] sm:h-[500px] md:w-[1400px] md:h-[600px] flex justify-center items-center cursor-pointer",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[H.jsx("div",{className:"absolute inset-0 flex justify-center items-center z-0",children:H.jsx("h1",{className:`
              text-4xl sm:text-5xl font-bold select-none whitespace-nowrap
              transition-colors duration-200 ease-in-out
              ${i?"text-gray-100":"text-gray-400"} 
            `,children:"Redefining Markets Through Math."})}),H.jsx("div",{className:"absolute inset-0 z-10 pointer-events-none",children:H.jsx(CR,{variation:0,pixelRatioProp:s,shapeSize:1,roundness:.5,borderSize:.005,circleEdge:1})})]})})},DR=[{label:"Petabytes data processed",value:"100+"},{label:"AUM",value:"$10B+"},{label:"Proprietary Models",value:"50+"},{label:"PhDs",value:"40+"},{label:"Global Offices",value:"5"},{label:"Years of R&D",value:"20+"}],UR=()=>H.jsxs("div",{className:"bg-white",children:[H.jsx("section",{className:"relative w-full h-screen z-20",children:H.jsx(wR,{})}),H.jsxs("section",{className:"relative bg-gradient-to-r from-blue-900 to-blue-600 text-white min-h-[60vh] flex items-center",children:[H.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"}),H.jsxs("div",{className:"relative z-10 max-w-4xl mx-auto px-6 py-24 text-center",children:[H.jsx("h1",{className:"text-5xl font-extrabold tracking-tight mb-6",children:"Unlocking Alpha Through Data-Driven Innovation"}),H.jsx("p",{className:"text-xl mb-8 max-w-2xl mx-auto",children:"KTZ is a quantitative investment firm leveraging advanced machine learning and big data analytics to deliver superior risk-adjusted returns for institutional investors."}),H.jsx("a",{href:"#contact",className:"inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-md shadow hover:bg-blue-100 transition-colors",children:"Get in Touch"})]})]}),H.jsx("section",{className:"bg-white py-16",children:H.jsx("div",{className:"max-w-6xl mx-auto px-4",children:H.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center",children:DR.map(s=>H.jsxs("div",{className:"",children:[H.jsx("div",{className:"text-3xl font-bold text-blue-700 mb-2",children:s.value}),H.jsx("div",{className:"text-gray-600 text-sm font-medium",children:s.label})]},s.label))})})}),H.jsx("section",{className:"bg-gray-50 py-20",children:H.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[H.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-12 text-center",children:"Our Scientific Approach"}),H.jsxs("div",{className:"grid md:grid-cols-3 gap-10",children:[H.jsxs("div",{className:"bg-white rounded-lg shadow p-8 flex flex-col items-center text-center",children:[H.jsx("div",{className:"text-blue-600 text-4xl mb-4",children:"🔬"}),H.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Research-Driven"}),H.jsx("p",{className:"text-gray-600",children:"Our strategies are built on rigorous research, blending financial theory with modern data science and continuous innovation."})]}),H.jsxs("div",{className:"bg-white rounded-lg shadow p-8 flex flex-col items-center text-center",children:[H.jsx("div",{className:"text-blue-600 text-4xl mb-4",children:"📊"}),H.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Advanced Analytics"}),H.jsx("p",{className:"text-gray-600",children:"We leverage machine learning, big data, and proprietary algorithms to identify market inefficiencies and generate alpha."})]}),H.jsxs("div",{className:"bg-white rounded-lg shadow p-8 flex flex-col items-center text-center",children:[H.jsx("div",{className:"text-blue-600 text-4xl mb-4",children:"🛡️"}),H.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Risk Management"}),H.jsx("p",{className:"text-gray-600",children:"Sophisticated risk controls and real-time analytics ensure consistent performance and capital protection across market conditions."})]})]})]})})]}),NR=()=>H.jsxs("div",{className:"bg-white",children:[H.jsxs("div",{className:"relative bg-gray-900 text-white",children:[H.jsx("div",{className:"absolute inset-0",children:H.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"})}),H.jsxs("div",{className:"relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",children:[H.jsx("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:"About KTZ"}),H.jsx("p",{className:"mt-6 text-xl max-w-3xl",children:"Pioneering the future of quantitative investing through innovation, transparency, and excellence."})]})]}),H.jsx("div",{className:"py-16 bg-white",children:H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsxs("div",{className:"lg:text-center",children:[H.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Our Mission"}),H.jsx("p",{className:"mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto",children:"To deliver superior risk-adjusted returns through innovative quantitative strategies while maintaining the highest standards of transparency and client service."})]})})}),H.jsx("div",{className:"bg-gray-50 py-16",children:H.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[H.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-12 text-center",children:"Our Values"}),H.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-3",children:[H.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm",children:[H.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Innovation"}),H.jsx("p",{className:"text-gray-600",children:"We continuously push the boundaries of quantitative finance, leveraging cutting-edge technology and research to identify new opportunities."})]}),H.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm",children:[H.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Transparency"}),H.jsx("p",{className:"text-gray-600",children:"We believe in clear communication and full disclosure, ensuring our clients understand our strategies and performance."})]}),H.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-sm",children:[H.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Excellence"}),H.jsx("p",{className:"text-gray-600",children:"We maintain the highest standards in everything we do, from research and development to client service and risk management."})]})]})]})}),H.jsx("div",{className:"py-16 bg-white",children:H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsxs("div",{className:"lg:text-center",children:[H.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Our Journey"}),H.jsxs("div",{className:"mt-8 space-y-8",children:[H.jsxs("div",{className:"relative pl-8 border-l-2 border-blue-500",children:[H.jsx("div",{className:"absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"}),H.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"2023"}),H.jsx("p",{className:"mt-2 text-gray-600",children:"Founded with a vision to revolutionize quantitative investing through advanced machine learning and big data analytics."})]}),H.jsxs("div",{className:"relative pl-8 border-l-2 border-blue-500",children:[H.jsx("div",{className:"absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"}),H.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"2024"}),H.jsx("p",{className:"mt-2 text-gray-600",children:"Launched our flagship quantitative strategy, combining traditional financial theory with modern data science."})]})]})]})})})]}),LR=()=>{const s=[{name:"Pippin Kantakom",title:"Managing Partner",bio:"",image:"https://via.placeholder.com/400x400"},{name:"Albert Tsao",title:"Managing Partner",bio:"",image:"https://via.placeholder.com/400x400"},{name:"Ben Zhou",title:"Managing Partner",bio:"",image:"https://via.placeholder.com/400x400"},{name:"Tristan Furlow",title:"Senior Partner",bio:"",image:"https://via.placeholder.com/400x400"}];return H.jsxs("div",{className:"bg-white",children:[H.jsxs("div",{className:"relative bg-gray-900 text-white",children:[H.jsx("div",{className:"absolute inset-0",children:H.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"})}),H.jsxs("div",{className:"relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",children:[H.jsx("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:"Our Team"}),H.jsx("p",{className:"mt-6 text-xl max-w-3xl",children:"Meet the experts behind our innovative quantitative strategies."})]})]}),H.jsx("div",{className:"py-16 bg-white",children:H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsx("div",{className:"grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2",children:s.map((e,i)=>H.jsxs("div",{className:"bg-gray-50 rounded-lg overflow-hidden shadow-sm",children:[H.jsx("div",{className:"aspect-w-1 aspect-h-1",children:H.jsx("img",{src:e.image,alt:e.name,className:"w-full h-64 object-cover"})}),H.jsxs("div",{className:"p-6",children:[H.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:e.name}),H.jsx("p",{className:"mt-1 text-blue-600",children:e.title}),H.jsx("p",{className:"mt-4 text-gray-600",children:e.bio})]})]},i))})})}),H.jsx("div",{className:"bg-gray-50 py-16",children:H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsxs("div",{className:"text-center",children:[H.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Join Our Team"}),H.jsx("p",{className:"mt-4 max-w-2xl text-xl text-gray-600 mx-auto",children:"We're always looking for talented individuals who share our passion for innovation and excellence."}),H.jsx("div",{className:"mt-8",children:H.jsx("a",{href:"/contact",className:"inline-block bg-blue-600 text-white py-3 px-8 rounded-md font-medium hover:bg-blue-700 transition-colors",children:"Get in Touch"})})]})})})]})},OR=()=>H.jsxs("div",{className:"bg-white",children:[H.jsxs("div",{className:"relative bg-gray-900 text-white",children:[H.jsx("div",{className:"absolute inset-0",children:H.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 mix-blend-multiply"})}),H.jsxs("div",{className:"relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8",children:[H.jsx("h1",{className:"text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl",children:"Contact Us"}),H.jsx("p",{className:"mt-6 text-xl max-w-3xl",children:"Get in touch with our team to learn more about our investment strategies and opportunities."})]})]}),H.jsx("div",{className:"py-16 bg-white",children:H.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:H.jsxs("div",{className:"grid grid-cols-1 gap-12 lg:grid-cols-2",children:[H.jsxs("div",{children:[H.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-8",children:"Send us a message"}),H.jsxs("form",{className:"space-y-6",children:[H.jsxs("div",{children:[H.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Name"}),H.jsx("input",{type:"text",id:"name",name:"name",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),H.jsxs("div",{children:[H.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),H.jsx("input",{type:"email",id:"email",name:"email",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),H.jsxs("div",{children:[H.jsx("label",{htmlFor:"subject",className:"block text-sm font-medium text-gray-700",children:"Subject"}),H.jsx("input",{type:"text",id:"subject",name:"subject",className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),H.jsxs("div",{children:[H.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700",children:"Message"}),H.jsx("textarea",{id:"message",name:"message",rows:4,className:"mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"})]}),H.jsx("div",{children:H.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors",children:"Send Message"})})]})]}),H.jsxs("div",{children:[H.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-8",children:"Office Information"}),H.jsxs("div",{className:"space-y-8",children:[H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"New York Office"}),H.jsxs("p",{className:"mt-2 text-gray-600",children:["350 Fifth Avenue",H.jsx("br",{}),"New York, NY 10118",H.jsx("br",{}),"United States"]})]}),H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Contact Details"}),H.jsxs("p",{className:"mt-2 text-gray-600",children:["Email: info@ktz.com",H.jsx("br",{}),"Phone: +1 (212) 555-0123"]})]}),H.jsxs("div",{children:[H.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Business Hours"}),H.jsxs("p",{className:"mt-2 text-gray-600",children:["Monday - Friday: 9:00 AM - 6:00 PM EST",H.jsx("br",{}),"Saturday - Sunday: Closed"]})]})]})]})]})})})]});function PR(){return H.jsx(qy,{children:H.jsx(My,{children:H.jsxs(ys,{path:"/",element:H.jsx(iM,{}),children:[H.jsx(ys,{index:!0,element:H.jsx(UR,{})}),H.jsx(ys,{path:"about",element:H.jsx(NR,{})}),H.jsx(ys,{path:"team",element:H.jsx(LR,{})}),H.jsx(ys,{path:"contact",element:H.jsx(OR,{})})]})})})}RS.createRoot(document.getElementById("root")).render(H.jsx(he.StrictMode,{children:H.jsx(PR,{})}));
