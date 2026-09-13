(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const v of m.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function s(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(p){if(p.ep)return;p.ep=!0;const m=s(p);fetch(p.href,m)}})();function zc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var ei={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fc;function of(){if(fc)return ce;fc=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),v=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),R=Symbol.iterator;function I(E){return E===null||typeof E!="object"?null:(E=R&&E[R]||E["@@iterator"],typeof E=="function"?E:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,L={};function P(E,T,oe){this.props=E,this.context=T,this.refs=L,this.updater=oe||$}P.prototype.isReactComponent={},P.prototype.setState=function(E,T){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,T,"setState")},P.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function A(){}A.prototype=P.prototype;function G(E,T,oe){this.props=E,this.context=T,this.refs=L,this.updater=oe||$}var X=G.prototype=new A;X.constructor=G,D(X,P.prototype),X.isPureReactComponent=!0;var ne=Array.isArray,ae=Object.prototype.hasOwnProperty,se={current:null},ve={key:!0,ref:!0,__self:!0,__source:!0};function j(E,T,oe){var ue,pe={},fe=null,xe=null;if(T!=null)for(ue in T.ref!==void 0&&(xe=T.ref),T.key!==void 0&&(fe=""+T.key),T)ae.call(T,ue)&&!ve.hasOwnProperty(ue)&&(pe[ue]=T[ue]);var he=arguments.length-2;if(he===1)pe.children=oe;else if(1<he){for(var be=Array(he),U=0;U<he;U++)be[U]=arguments[U+2];pe.children=be}if(E&&E.defaultProps)for(ue in he=E.defaultProps,he)pe[ue]===void 0&&(pe[ue]=he[ue]);return{$$typeof:i,type:E,key:fe,ref:xe,props:pe,_owner:se.current}}function F(E,T){return{$$typeof:i,type:E.type,key:T,ref:E.ref,props:E.props,_owner:E._owner}}function ie(E){return typeof E=="object"&&E!==null&&E.$$typeof===i}function Pe(E){var T={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(oe){return T[oe]})}var Se=/\/+/g;function Re(E,T){return typeof E=="object"&&E!==null&&E.key!=null?Pe(""+E.key):T.toString(36)}function ee(E,T,oe,ue,pe){var fe=typeof E;(fe==="undefined"||fe==="boolean")&&(E=null);var xe=!1;if(E===null)xe=!0;else switch(fe){case"string":case"number":xe=!0;break;case"object":switch(E.$$typeof){case i:case c:xe=!0}}if(xe)return xe=E,pe=pe(xe),E=ue===""?"."+Re(xe,0):ue,ne(pe)?(oe="",E!=null&&(oe=E.replace(Se,"$&/")+"/"),ee(pe,T,oe,"",function(U){return U})):pe!=null&&(ie(pe)&&(pe=F(pe,oe+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(Se,"$&/")+"/")+E)),T.push(pe)),1;if(xe=0,ue=ue===""?".":ue+":",ne(E))for(var he=0;he<E.length;he++){fe=E[he];var be=ue+Re(fe,he);xe+=ee(fe,T,oe,be,pe)}else if(be=I(E),typeof be=="function")for(E=be.call(E),he=0;!(fe=E.next()).done;)fe=fe.value,be=ue+Re(fe,he++),xe+=ee(fe,T,oe,be,pe);else if(fe==="object")throw T=String(E),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return xe}function te(E,T,oe){if(E==null)return E;var ue=[],pe=0;return ee(E,ue,"","",function(fe){return T.call(oe,fe,pe++)}),ue}function Ae(E){if(E._status===-1){var T=E._result;T=T(),T.then(function(oe){(E._status===0||E._status===-1)&&(E._status=1,E._result=oe)},function(oe){(E._status===0||E._status===-1)&&(E._status=2,E._result=oe)}),E._status===-1&&(E._status=0,E._result=T)}if(E._status===1)return E._result.default;throw E._result}var ke={current:null},V={transition:null},Z={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:V,ReactCurrentOwner:se};function W(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:te,forEach:function(E,T,oe){te(E,function(){T.apply(this,arguments)},oe)},count:function(E){var T=0;return te(E,function(){T++}),T},toArray:function(E){return te(E,function(T){return T})||[]},only:function(E){if(!ie(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},ce.Component=P,ce.Fragment=s,ce.Profiler=p,ce.PureComponent=G,ce.StrictMode=d,ce.Suspense=k,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,ce.act=W,ce.cloneElement=function(E,T,oe){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ue=D({},E.props),pe=E.key,fe=E.ref,xe=E._owner;if(T!=null){if(T.ref!==void 0&&(fe=T.ref,xe=se.current),T.key!==void 0&&(pe=""+T.key),E.type&&E.type.defaultProps)var he=E.type.defaultProps;for(be in T)ae.call(T,be)&&!ve.hasOwnProperty(be)&&(ue[be]=T[be]===void 0&&he!==void 0?he[be]:T[be])}var be=arguments.length-2;if(be===1)ue.children=oe;else if(1<be){he=Array(be);for(var U=0;U<be;U++)he[U]=arguments[U+2];ue.children=he}return{$$typeof:i,type:E.type,key:pe,ref:fe,props:ue,_owner:xe}},ce.createContext=function(E){return E={$$typeof:v,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:m,_context:E},E.Consumer=E},ce.createElement=j,ce.createFactory=function(E){var T=j.bind(null,E);return T.type=E,T},ce.createRef=function(){return{current:null}},ce.forwardRef=function(E){return{$$typeof:y,render:E}},ce.isValidElement=ie,ce.lazy=function(E){return{$$typeof:N,_payload:{_status:-1,_result:E},_init:Ae}},ce.memo=function(E,T){return{$$typeof:C,type:E,compare:T===void 0?null:T}},ce.startTransition=function(E){var T=V.transition;V.transition={};try{E()}finally{V.transition=T}},ce.unstable_act=W,ce.useCallback=function(E,T){return ke.current.useCallback(E,T)},ce.useContext=function(E){return ke.current.useContext(E)},ce.useDebugValue=function(){},ce.useDeferredValue=function(E){return ke.current.useDeferredValue(E)},ce.useEffect=function(E,T){return ke.current.useEffect(E,T)},ce.useId=function(){return ke.current.useId()},ce.useImperativeHandle=function(E,T,oe){return ke.current.useImperativeHandle(E,T,oe)},ce.useInsertionEffect=function(E,T){return ke.current.useInsertionEffect(E,T)},ce.useLayoutEffect=function(E,T){return ke.current.useLayoutEffect(E,T)},ce.useMemo=function(E,T){return ke.current.useMemo(E,T)},ce.useReducer=function(E,T,oe){return ke.current.useReducer(E,T,oe)},ce.useRef=function(E){return ke.current.useRef(E)},ce.useState=function(E){return ke.current.useState(E)},ce.useSyncExternalStore=function(E,T,oe){return ke.current.useSyncExternalStore(E,T,oe)},ce.useTransition=function(){return ke.current.useTransition()},ce.version="18.3.1",ce}var mc;function Ic(){return mc||(mc=1,ei.exports=of()),ei.exports}var x=Ic();const o=zc(x);var Xl={},ti={exports:{}},lt={},ni={exports:{}},ri={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc;function sf(){return gc||(gc=1,(function(i){function c(V,Z){var W=V.length;V.push(Z);e:for(;0<W;){var E=W-1>>>1,T=V[E];if(0<p(T,Z))V[E]=Z,V[W]=T,W=E;else break e}}function s(V){return V.length===0?null:V[0]}function d(V){if(V.length===0)return null;var Z=V[0],W=V.pop();if(W!==Z){V[0]=W;e:for(var E=0,T=V.length,oe=T>>>1;E<oe;){var ue=2*(E+1)-1,pe=V[ue],fe=ue+1,xe=V[fe];if(0>p(pe,W))fe<T&&0>p(xe,pe)?(V[E]=xe,V[fe]=W,E=fe):(V[E]=pe,V[ue]=W,E=ue);else if(fe<T&&0>p(xe,W))V[E]=xe,V[fe]=W,E=fe;else break e}}return Z}function p(V,Z){var W=V.sortIndex-Z.sortIndex;return W!==0?W:V.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var m=performance;i.unstable_now=function(){return m.now()}}else{var v=Date,y=v.now();i.unstable_now=function(){return v.now()-y}}var k=[],C=[],N=1,R=null,I=3,$=!1,D=!1,L=!1,P=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(V){for(var Z=s(C);Z!==null;){if(Z.callback===null)d(C);else if(Z.startTime<=V)d(C),Z.sortIndex=Z.expirationTime,c(k,Z);else break;Z=s(C)}}function ne(V){if(L=!1,X(V),!D)if(s(k)!==null)D=!0,Ae(ae);else{var Z=s(C);Z!==null&&ke(ne,Z.startTime-V)}}function ae(V,Z){D=!1,L&&(L=!1,A(j),j=-1),$=!0;var W=I;try{for(X(Z),R=s(k);R!==null&&(!(R.expirationTime>Z)||V&&!Pe());){var E=R.callback;if(typeof E=="function"){R.callback=null,I=R.priorityLevel;var T=E(R.expirationTime<=Z);Z=i.unstable_now(),typeof T=="function"?R.callback=T:R===s(k)&&d(k),X(Z)}else d(k);R=s(k)}if(R!==null)var oe=!0;else{var ue=s(C);ue!==null&&ke(ne,ue.startTime-Z),oe=!1}return oe}finally{R=null,I=W,$=!1}}var se=!1,ve=null,j=-1,F=5,ie=-1;function Pe(){return!(i.unstable_now()-ie<F)}function Se(){if(ve!==null){var V=i.unstable_now();ie=V;var Z=!0;try{Z=ve(!0,V)}finally{Z?Re():(se=!1,ve=null)}}else se=!1}var Re;if(typeof G=="function")Re=function(){G(Se)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=Se,Re=function(){te.postMessage(null)}}else Re=function(){P(Se,0)};function Ae(V){ve=V,se||(se=!0,Re())}function ke(V,Z){j=P(function(){V(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_continueExecution=function(){D||$||(D=!0,Ae(ae))},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return I},i.unstable_getFirstCallbackNode=function(){return s(k)},i.unstable_next=function(V){switch(I){case 1:case 2:case 3:var Z=3;break;default:Z=I}var W=I;I=Z;try{return V()}finally{I=W}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(V,Z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var W=I;I=V;try{return Z()}finally{I=W}},i.unstable_scheduleCallback=function(V,Z,W){var E=i.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?E+W:E):W=E,V){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,V={id:N++,callback:Z,priorityLevel:V,startTime:W,expirationTime:T,sortIndex:-1},W>E?(V.sortIndex=W,c(C,V),s(k)===null&&V===s(C)&&(L?(A(j),j=-1):L=!0,ke(ne,W-E))):(V.sortIndex=T,c(k,V),D||$||(D=!0,Ae(ae))),V},i.unstable_shouldYield=Pe,i.unstable_wrapCallback=function(V){var Z=I;return function(){var W=I;I=Z;try{return V.apply(this,arguments)}finally{I=W}}}})(ri)),ri}var hc;function uf(){return hc||(hc=1,ni.exports=sf()),ni.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function cf(){if(vc)return lt;vc=1;var i=Ic(),c=uf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function m(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var y=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N={},R={};function I(e){return k.call(R,e)?!0:k.call(N,e)?!1:C.test(e)?R[e]=!0:(N[e]=!0,!1)}function $(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,n,r){if(t===null||typeof t>"u"||$(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function L(e,t,n,r,l,a,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=u}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){P[e]=new L(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];P[t]=new L(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){P[e]=new L(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){P[e]=new L(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){P[e]=new L(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){P[e]=new L(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){P[e]=new L(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){P[e]=new L(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){P[e]=new L(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(A,G);P[t]=new L(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(A,G);P[t]=new L(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(A,G);P[t]=new L(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){P[e]=new L(e,1,!1,e.toLowerCase(),null,!1,!1)}),P.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){P[e]=new L(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var l=P.hasOwnProperty(t)?P[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,n,l,r)&&(n=null),r||l===null?I(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=Symbol.for("react.element"),se=Symbol.for("react.portal"),ve=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),ie=Symbol.for("react.provider"),Pe=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),V=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,E;function T(e){if(E===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);E=t&&t[1]||""}return`
`+E+e}var oe=!1;function ue(e,t){if(!e||oe)return"";oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var l=S.stack.split(`
`),a=r.stack.split(`
`),u=l.length-1,f=a.length-1;1<=u&&0<=f&&l[u]!==a[f];)f--;for(;1<=u&&0<=f;u--,f--)if(l[u]!==a[f]){if(u!==1||f!==1)do if(u--,f--,0>f||l[u]!==a[f]){var g=`
`+l[u].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=u&&0<=f);break}}}finally{oe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?T(e):""}function pe(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ve:return"Fragment";case se:return"Portal";case F:return"Profiler";case j:return"StrictMode";case Re:return"Suspense";case ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pe:return(e.displayName||"Context")+".Consumer";case ie:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function xe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function U(e){var t=be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(u){r=""+u,a.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function re(e){e._valueTracker||(e._valueTracker=U(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=be(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function we(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qe(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mt(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=he(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zn(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function ia(e,t){Zn(e,t);var n=he(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?sa(e,t.type,n):t.hasOwnProperty("defaultValue")&&sa(e,t.type,he(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ki(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function sa(e,t,n){(t!=="number"||we(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+he(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function bi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(qn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:he(n)}}function Ni(e,t){var n=he(t.value),r=he(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Si(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ri(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ca(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ri(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,Ci=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Jn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cd=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){cd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Ti(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Oi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ti(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var dd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function da(e,t){if(t){if(dd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fa=null;function ma(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ga=null,bn=null,Nn=null;function Mi(e){if(e=kr(e)){if(typeof ga!="function")throw Error(s(280));var t=e.stateNode;t&&(t=dl(t),ga(e.stateNode,e.type,t))}}function Li(e){bn?Nn?Nn.push(e):Nn=[e]:bn=e}function zi(){if(bn){var e=bn,t=Nn;if(Nn=bn=null,Mi(e),t)for(e=0;e<t.length;e++)Mi(t[e])}}function Ii(e,t){return e(t)}function Pi(){}var ha=!1;function Ai(e,t,n){if(ha)return e(t,n);ha=!0;try{return Ii(e,t,n)}finally{ha=!1,(bn!==null||Nn!==null)&&(Pi(),zi())}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var va=!1;if(y)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){va=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{va=!1}function pd(e,t,n,r,l,a,u,f,g){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(M){this.onError(M)}}var rr=!1,Hr=null,Wr=!1,ya=null,fd={onError:function(e){rr=!0,Hr=e}};function md(e,t,n,r,l,a,u,f,g){rr=!1,Hr=null,pd.apply(fd,arguments)}function gd(e,t,n,r,l,a,u,f,g){if(md.apply(this,arguments),rr){if(rr){var S=Hr;rr=!1,Hr=null}else throw Error(s(198));Wr||(Wr=!0,ya=S)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _i(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Di(e){if(sn(e)!==e)throw Error(s(188))}function hd(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return Di(l),e;if(a===r)return Di(l),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=l,r=a;else{for(var u=!1,f=l.child;f;){if(f===n){u=!0,n=l,r=a;break}if(f===r){u=!0,r=l,n=a;break}f=f.sibling}if(!u){for(f=a.child;f;){if(f===n){u=!0,n=a,r=l;break}if(f===r){u=!0,r=a,n=l;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function Ui(e){return e=hd(e),e!==null?Fi(e):null}function Fi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fi(e);if(t!==null)return t;e=e.sibling}return null}var Vi=c.unstable_scheduleCallback,ji=c.unstable_cancelCallback,vd=c.unstable_shouldYield,yd=c.unstable_requestPaint,_e=c.unstable_now,xd=c.unstable_getCurrentPriorityLevel,xa=c.unstable_ImmediatePriority,$i=c.unstable_UserBlockingPriority,Br=c.unstable_NormalPriority,Ed=c.unstable_LowPriority,Hi=c.unstable_IdlePriority,Yr=null,Nt=null;function wd(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Yr,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Nd,kd=Math.log,bd=Math.LN2;function Nd(e){return e>>>=0,e===0?32:31-(kd(e)/bd|0)|0}var Gr=64,Kr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~l;f!==0?r=lr(f):(a&=u,a!==0&&(r=lr(a)))}else u=n&~l,u!==0?r=lr(u):a!==0&&(r=lr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,a=t&-t,l>=a||l===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),l=1<<n,r|=e[n],t&=~l;return r}function Sd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes;0<a;){var u=31-ht(a),f=1<<u,g=l[u];g===-1?((f&n)===0||(f&r)!==0)&&(l[u]=Sd(f,t)):g<=t&&(e.expiredLanes|=f),a&=~f}}function Ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wi(){var e=Gr;return Gr<<=1,(Gr&4194240)===0&&(Gr=64),e}function wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ar(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function Cd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ht(n),a=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~a}}function ka(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ye=0;function Bi(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yi,ba,Gi,Ki,Qi,Na=!1,Xr=[],$t=null,Ht=null,Wt=null,or=new Map,ir=new Map,Bt=[],Td="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ir.delete(t.pointerId)}}function sr(e,t,n,r,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[l]},t!==null&&(t=kr(t),t!==null&&ba(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Od(e,t,n,r,l){switch(t){case"focusin":return $t=sr($t,e,t,n,r,l),!0;case"dragenter":return Ht=sr(Ht,e,t,n,r,l),!0;case"mouseover":return Wt=sr(Wt,e,t,n,r,l),!0;case"pointerover":var a=l.pointerId;return or.set(a,sr(or.get(a)||null,e,t,n,r,l)),!0;case"gotpointercapture":return a=l.pointerId,ir.set(a,sr(ir.get(a)||null,e,t,n,r,l)),!0}return!1}function Zi(e){var t=un(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=_i(n),t!==null){e.blockedOn=t,Qi(e.priority,function(){Gi(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fa=r,n.target.dispatchEvent(r),fa=null}else return t=kr(n),t!==null&&ba(t),e.blockedOn=n,!1;t.shift()}return!0}function qi(e,t,n){Zr(e)&&n.delete(t)}function Md(){Na=!1,$t!==null&&Zr($t)&&($t=null),Ht!==null&&Zr(Ht)&&(Ht=null),Wt!==null&&Zr(Wt)&&(Wt=null),or.forEach(qi),ir.forEach(qi)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Na||(Na=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Md)))}function cr(e){function t(l){return ur(l,e)}if(0<Xr.length){ur(Xr[0],e);for(var n=1;n<Xr.length;n++){var r=Xr[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&ur($t,e),Ht!==null&&ur(Ht,e),Wt!==null&&ur(Wt,e),or.forEach(t),ir.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Zi(n),n.blockedOn===null&&Bt.shift()}var Sn=ne.ReactCurrentBatchConfig,qr=!0;function Ld(e,t,n,r){var l=ye,a=Sn.transition;Sn.transition=null;try{ye=1,Sa(e,t,n,r)}finally{ye=l,Sn.transition=a}}function zd(e,t,n,r){var l=ye,a=Sn.transition;Sn.transition=null;try{ye=4,Sa(e,t,n,r)}finally{ye=l,Sn.transition=a}}function Sa(e,t,n,r){if(qr){var l=Ra(e,t,n,r);if(l===null)Ha(e,t,r,Jr,n),Xi(e,r);else if(Od(l,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<Td.indexOf(e)){for(;l!==null;){var a=kr(l);if(a!==null&&Yi(a),a=Ra(e,t,n,r),a===null&&Ha(e,t,r,Jr,n),a===l)break;l=a}l!==null&&r.stopPropagation()}else Ha(e,t,r,null,n)}}var Jr=null;function Ra(e,t,n,r){if(Jr=null,e=ma(r),e=un(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_i(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function Ji(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xd()){case xa:return 1;case $i:return 4;case Br:case Ed:return 16;case Hi:return 536870912;default:return 16}default:return 16}}var Yt=null,Ca=null,el=null;function es(){if(el)return el;var e,t=Ca,n=t.length,r,l="value"in Yt?Yt.value:Yt.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===l[a-r];r++);return el=l.slice(e,1<r?1-r:void 0)}function tl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function ts(){return!1}function at(e){function t(n,r,l,a,u){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=a,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?nl:ts,this.isPropagationStopped=ts,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),t}var Rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ta=at(Rn),dr=W({},Rn,{view:0,detail:0}),Id=at(dr),Oa,Ma,pr,rl=W({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pr&&(pr&&e.type==="mousemove"?(Oa=e.screenX-pr.screenX,Ma=e.screenY-pr.screenY):Ma=Oa=0,pr=e),Oa)},movementY:function(e){return"movementY"in e?e.movementY:Ma}}),ns=at(rl),Pd=W({},rl,{dataTransfer:0}),Ad=at(Pd),_d=W({},dr,{relatedTarget:0}),La=at(_d),Dd=W({},Rn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ud=at(Dd),Fd=W({},Rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vd=at(Fd),jd=W({},Rn,{data:0}),rs=at(jd),$d={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wd[e])?!!t[e]:!1}function za(){return Bd}var Yd=W({},dr,{key:function(e){if(e.key){var t=$d[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=at(Yd),Kd=W({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ls=at(Kd),Qd=W({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Xd=at(Qd),Zd=W({},Rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),qd=at(Zd),Jd=W({},rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ep=at(Jd),tp=[9,13,27,32],Ia=y&&"CompositionEvent"in window,fr=null;y&&"documentMode"in document&&(fr=document.documentMode);var np=y&&"TextEvent"in window&&!fr,as=y&&(!Ia||fr&&8<fr&&11>=fr),os=" ",is=!1;function ss(e,t){switch(e){case"keyup":return tp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function us(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function rp(e,t){switch(e){case"compositionend":return us(t);case"keypress":return t.which!==32?null:(is=!0,os);case"textInput":return e=t.data,e===os&&is?null:e;default:return null}}function lp(e,t){if(Cn)return e==="compositionend"||!Ia&&ss(e,t)?(e=es(),el=Ca=Yt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return as&&t.locale!=="ko"?null:t.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ap[e.type]:t==="textarea"}function ds(e,t,n,r){Li(r),t=sl(t,"onChange"),0<t.length&&(n=new Ta("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,gr=null;function op(e){Os(e,0)}function ll(e){var t=zn(e);if(Ee(t))return e}function ip(e,t){if(e==="change")return t}var ps=!1;if(y){var Pa;if(y){var Aa="oninput"in document;if(!Aa){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),Aa=typeof fs.oninput=="function"}Pa=Aa}else Pa=!1;ps=Pa&&(!document.documentMode||9<document.documentMode)}function ms(){mr&&(mr.detachEvent("onpropertychange",gs),gr=mr=null)}function gs(e){if(e.propertyName==="value"&&ll(gr)){var t=[];ds(t,gr,e,ma(e)),Ai(op,t)}}function sp(e,t,n){e==="focusin"?(ms(),mr=t,gr=n,mr.attachEvent("onpropertychange",gs)):e==="focusout"&&ms()}function up(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(gr)}function cp(e,t){if(e==="click")return ll(t)}function dp(e,t){if(e==="input"||e==="change")return ll(t)}function pp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:pp;function hr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!k.call(t,l)||!vt(e[l],t[l]))return!1}return!0}function hs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vs(e,t){var n=hs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hs(n)}}function ys(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ys(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xs(){for(var e=window,t=we();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=we(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=xs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ys(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,a=Math.min(r.start,l);r=r.end===void 0?a:Math.min(r.end,l),!e.extend&&a>r&&(l=r,r=a,a=l),l=vs(n,a);var u=vs(n,r);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mp=y&&"documentMode"in document&&11>=document.documentMode,Tn=null,Da=null,vr=null,Ua=!1;function Es(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ua||Tn==null||Tn!==we(r)||(r=Tn,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&hr(vr,r)||(vr=r,r=sl(Da,"onSelect"),0<r.length&&(t=new Ta("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function al(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var On={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},Fa={},ws={};y&&(ws=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function ol(e){if(Fa[e])return Fa[e];if(!On[e])return e;var t=On[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ws)return Fa[e]=t[n];return e}var ks=ol("animationend"),bs=ol("animationiteration"),Ns=ol("animationstart"),Ss=ol("transitionend"),Rs=new Map,Cs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Rs.set(e,t),m(t,[e])}for(var Va=0;Va<Cs.length;Va++){var ja=Cs[Va],gp=ja.toLowerCase(),hp=ja[0].toUpperCase()+ja.slice(1);Gt(gp,"on"+hp)}Gt(ks,"onAnimationEnd"),Gt(bs,"onAnimationIteration"),Gt(Ns,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Ss,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),m("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),m("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),m("onBeforeInput",["compositionend","keypress","textInput","paste"]),m("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),m("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vp=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Ts(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gd(r,t,void 0,e),e.currentTarget=null}function Os(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],g=f.instance,S=f.currentTarget;if(f=f.listener,g!==a&&l.isPropagationStopped())break e;Ts(l,f,S),a=g}else for(u=0;u<r.length;u++){if(f=r[u],g=f.instance,S=f.currentTarget,f=f.listener,g!==a&&l.isPropagationStopped())break e;Ts(l,f,S),a=g}}}if(Wr)throw e=ya,Wr=!1,ya=null,e}function Ce(e,t){var n=t[Qa];n===void 0&&(n=t[Qa]=new Set);var r=e+"__bubble";n.has(r)||(Ms(t,e,2,!1),n.add(r))}function $a(e,t,n){var r=0;t&&(r|=4),Ms(n,e,r,t)}var il="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[il]){e[il]=!0,d.forEach(function(n){n!=="selectionchange"&&(vp.has(n)||$a(n,!1,e),$a(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[il]||(t[il]=!0,$a("selectionchange",!1,t))}}function Ms(e,t,n,r){switch(Ji(t)){case 1:var l=Ld;break;case 4:l=zd;break;default:l=Sa}n=l.bind(null,t,n,e),l=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ha(e,t,n,r,l){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=r.return;u!==null;){var g=u.tag;if((g===3||g===4)&&(g=u.stateNode.containerInfo,g===l||g.nodeType===8&&g.parentNode===l))return;u=u.return}for(;f!==null;){if(u=un(f),u===null)return;if(g=u.tag,g===5||g===6){r=a=u;continue e}f=f.parentNode}}r=r.return}Ai(function(){var S=a,M=ma(n),z=[];e:{var O=Rs.get(e);if(O!==void 0){var H=Ta,Y=e;switch(e){case"keypress":if(tl(n)===0)break e;case"keydown":case"keyup":H=Gd;break;case"focusin":Y="focus",H=La;break;case"focusout":Y="blur",H=La;break;case"beforeblur":case"afterblur":H=La;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Ad;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=Xd;break;case ks:case bs:case Ns:H=Ud;break;case Ss:H=qd;break;case"scroll":H=Id;break;case"wheel":H=ep;break;case"copy":case"cut":case"paste":H=Vd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ls}var K=(t&4)!==0,De=!K&&e==="scroll",w=K?O!==null?O+"Capture":null:O;K=[];for(var h=S,b;h!==null;){b=h;var _=b.stateNode;if(b.tag===5&&_!==null&&(b=_,w!==null&&(_=tr(h,w),_!=null&&K.push(Er(h,_,b)))),De)break;h=h.return}0<K.length&&(O=new H(O,Y,null,n,M),z.push({event:O,listeners:K}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",O&&n!==fa&&(Y=n.relatedTarget||n.fromElement)&&(un(Y)||Y[Lt]))break e;if((H||O)&&(O=M.window===M?M:(O=M.ownerDocument)?O.defaultView||O.parentWindow:window,H?(Y=n.relatedTarget||n.toElement,H=S,Y=Y?un(Y):null,Y!==null&&(De=sn(Y),Y!==De||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(H=null,Y=S),H!==Y)){if(K=ns,_="onMouseLeave",w="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(K=ls,_="onPointerLeave",w="onPointerEnter",h="pointer"),De=H==null?O:zn(H),b=Y==null?O:zn(Y),O=new K(_,h+"leave",H,n,M),O.target=De,O.relatedTarget=b,_=null,un(M)===S&&(K=new K(w,h+"enter",Y,n,M),K.target=b,K.relatedTarget=De,_=K),De=_,H&&Y)t:{for(K=H,w=Y,h=0,b=K;b;b=Mn(b))h++;for(b=0,_=w;_;_=Mn(_))b++;for(;0<h-b;)K=Mn(K),h--;for(;0<b-h;)w=Mn(w),b--;for(;h--;){if(K===w||w!==null&&K===w.alternate)break t;K=Mn(K),w=Mn(w)}K=null}else K=null;H!==null&&Ls(z,O,H,K,!1),Y!==null&&De!==null&&Ls(z,De,Y,K,!0)}}e:{if(O=S?zn(S):window,H=O.nodeName&&O.nodeName.toLowerCase(),H==="select"||H==="input"&&O.type==="file")var Q=ip;else if(cs(O))if(ps)Q=dp;else{Q=up;var q=sp}else(H=O.nodeName)&&H.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(Q=cp);if(Q&&(Q=Q(e,S))){ds(z,Q,n,M);break e}q&&q(e,O,S),e==="focusout"&&(q=O._wrapperState)&&q.controlled&&O.type==="number"&&sa(O,"number",O.value)}switch(q=S?zn(S):window,e){case"focusin":(cs(q)||q.contentEditable==="true")&&(Tn=q,Da=S,vr=null);break;case"focusout":vr=Da=Tn=null;break;case"mousedown":Ua=!0;break;case"contextmenu":case"mouseup":case"dragend":Ua=!1,Es(z,n,M);break;case"selectionchange":if(mp)break;case"keydown":case"keyup":Es(z,n,M)}var J;if(Ia)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Cn?ss(e,n)&&(le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(le="onCompositionStart");le&&(as&&n.locale!=="ko"&&(Cn||le!=="onCompositionStart"?le==="onCompositionEnd"&&Cn&&(J=es()):(Yt=M,Ca="value"in Yt?Yt.value:Yt.textContent,Cn=!0)),q=sl(S,le),0<q.length&&(le=new rs(le,e,null,n,M),z.push({event:le,listeners:q}),J?le.data=J:(J=us(n),J!==null&&(le.data=J)))),(J=np?rp(e,n):lp(e,n))&&(S=sl(S,"onBeforeInput"),0<S.length&&(M=new rs("onBeforeInput","beforeinput",null,n,M),z.push({event:M,listeners:S}),M.data=J))}Os(z,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=tr(e,n),a!=null&&r.unshift(Er(e,a,l)),a=tr(e,t),a!=null&&r.push(Er(e,a,l))),e=e.return}return r}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ls(e,t,n,r,l){for(var a=t._reactName,u=[];n!==null&&n!==r;){var f=n,g=f.alternate,S=f.stateNode;if(g!==null&&g===r)break;f.tag===5&&S!==null&&(f=S,l?(g=tr(n,a),g!=null&&u.unshift(Er(n,g,f))):l||(g=tr(n,a),g!=null&&u.push(Er(n,g,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var yp=/\r\n?/g,xp=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(yp,`
`).replace(xp,"")}function ul(e,t,n){if(t=zs(t),zs(e)!==t&&n)throw Error(s(425))}function cl(){}var Wa=null,Ba=null;function Ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ga=typeof setTimeout=="function"?setTimeout:void 0,Ep=typeof clearTimeout=="function"?clearTimeout:void 0,Is=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof Is<"u"?function(e){return Is.resolve(null).then(e).catch(kp)}:Ga;function kp(e){setTimeout(function(){throw e})}function Ka(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);cr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ps(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),St="__reactFiber$"+Ln,wr="__reactProps$"+Ln,Lt="__reactContainer$"+Ln,Qa="__reactEvents$"+Ln,bp="__reactListeners$"+Ln,Np="__reactHandles$"+Ln;function un(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ps(e);e!==null;){if(n=e[St])return n;e=Ps(e)}return t}e=n,n=e.parentNode}return null}function kr(e){return e=e[St]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function dl(e){return e[wr]||null}var Xa=[],In=-1;function Qt(e){return{current:e}}function Te(e){0>In||(e.current=Xa[In],Xa[In]=null,In--)}function Ne(e,t){In++,Xa[In]=e.current,e.current=t}var Xt={},Ye=Qt(Xt),Je=Qt(!1),cn=Xt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in n)l[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function et(e){return e=e.childContextTypes,e!=null}function pl(){Te(Je),Te(Ye)}function As(e,t,n){if(Ye.current!==Xt)throw Error(s(168));Ne(Ye,t),Ne(Je,n)}function _s(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(s(108,xe(e)||"Unknown",l));return W({},n,r)}function fl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=Ye.current,Ne(Ye,e),Ne(Je,Je.current),!0}function Ds(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=_s(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Te(Je),Te(Ye),Ne(Ye,e)):Te(Je),Ne(Je,n)}var zt=null,ml=!1,Za=!1;function Us(e){zt===null?zt=[e]:zt.push(e)}function Sp(e){ml=!0,Us(e)}function Zt(){if(!Za&&zt!==null){Za=!0;var e=0,t=ye;try{var n=zt;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ml=!1}catch(l){throw zt!==null&&(zt=zt.slice(e+1)),Vi(xa,Zt),l}finally{ye=t,Za=!1}}return null}var An=[],_n=0,gl=null,hl=0,ut=[],ct=0,dn=null,It=1,Pt="";function pn(e,t){An[_n++]=hl,An[_n++]=gl,gl=e,hl=t}function Fs(e,t,n){ut[ct++]=It,ut[ct++]=Pt,ut[ct++]=dn,dn=e;var r=It;e=Pt;var l=32-ht(r)-1;r&=~(1<<l),n+=1;var a=32-ht(t)+l;if(30<a){var u=l-l%5;a=(r&(1<<u)-1).toString(32),r>>=u,l-=u,It=1<<32-ht(t)+l|n<<l|r,Pt=a+e}else It=1<<a|n<<l|r,Pt=e}function qa(e){e.return!==null&&(pn(e,1),Fs(e,1,0))}function Ja(e){for(;e===gl;)gl=An[--_n],An[_n]=null,hl=An[--_n],An[_n]=null;for(;e===dn;)dn=ut[--ct],ut[ct]=null,Pt=ut[--ct],ut[ct]=null,It=ut[--ct],ut[ct]=null}var ot=null,it=null,Oe=!1,yt=null;function Vs(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function js(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,it=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:It,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,it=null,!0):!1;default:return!1}}function eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function to(e){if(Oe){var t=it;if(t){var n=t;if(!js(e,t)){if(eo(e))throw Error(s(418));t=Kt(n.nextSibling);var r=ot;t&&js(e,t)?Vs(r,n):(e.flags=e.flags&-4097|2,Oe=!1,ot=e)}}else{if(eo(e))throw Error(s(418));e.flags=e.flags&-4097|2,Oe=!1,ot=e}}}function $s(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function vl(e){if(e!==ot)return!1;if(!Oe)return $s(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ya(e.type,e.memoizedProps)),t&&(t=it)){if(eo(e))throw Hs(),Error(s(418));for(;t;)Vs(e,t),t=Kt(t.nextSibling)}if($s(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=ot?Kt(e.stateNode.nextSibling):null;return!0}function Hs(){for(var e=it;e;)e=Kt(e.nextSibling)}function Dn(){it=ot=null,Oe=!1}function no(e){yt===null?yt=[e]:yt.push(e)}var Rp=ne.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var l=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(u){var f=l.refs;u===null?delete f[a]:f[a]=u},t._stringRef=a,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function yl(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ws(e){var t=e._init;return t(e._payload)}function Bs(e){function t(w,h){if(e){var b=w.deletions;b===null?(w.deletions=[h],w.flags|=16):b.push(h)}}function n(w,h){if(!e)return null;for(;h!==null;)t(w,h),h=h.sibling;return null}function r(w,h){for(w=new Map;h!==null;)h.key!==null?w.set(h.key,h):w.set(h.index,h),h=h.sibling;return w}function l(w,h){return w=an(w,h),w.index=0,w.sibling=null,w}function a(w,h,b){return w.index=b,e?(b=w.alternate,b!==null?(b=b.index,b<h?(w.flags|=2,h):b):(w.flags|=2,h)):(w.flags|=1048576,h)}function u(w){return e&&w.alternate===null&&(w.flags|=2),w}function f(w,h,b,_){return h===null||h.tag!==6?(h=Ko(b,w.mode,_),h.return=w,h):(h=l(h,b),h.return=w,h)}function g(w,h,b,_){var Q=b.type;return Q===ve?M(w,h,b.props.children,_,b.key):h!==null&&(h.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ae&&Ws(Q)===h.type)?(_=l(h,b.props),_.ref=br(w,h,b),_.return=w,_):(_=$l(b.type,b.key,b.props,null,w.mode,_),_.ref=br(w,h,b),_.return=w,_)}function S(w,h,b,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=Qo(b,w.mode,_),h.return=w,h):(h=l(h,b.children||[]),h.return=w,h)}function M(w,h,b,_,Q){return h===null||h.tag!==7?(h=En(b,w.mode,_,Q),h.return=w,h):(h=l(h,b),h.return=w,h)}function z(w,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ko(""+h,w.mode,b),h.return=w,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ae:return b=$l(h.type,h.key,h.props,null,w.mode,b),b.ref=br(w,null,h),b.return=w,b;case se:return h=Qo(h,w.mode,b),h.return=w,h;case Ae:var _=h._init;return z(w,_(h._payload),b)}if(qn(h)||Z(h))return h=En(h,w.mode,b,null),h.return=w,h;yl(w,h)}return null}function O(w,h,b,_){var Q=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return Q!==null?null:f(w,h,""+b,_);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ae:return b.key===Q?g(w,h,b,_):null;case se:return b.key===Q?S(w,h,b,_):null;case Ae:return Q=b._init,O(w,h,Q(b._payload),_)}if(qn(b)||Z(b))return Q!==null?null:M(w,h,b,_,null);yl(w,b)}return null}function H(w,h,b,_,Q){if(typeof _=="string"&&_!==""||typeof _=="number")return w=w.get(b)||null,f(h,w,""+_,Q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ae:return w=w.get(_.key===null?b:_.key)||null,g(h,w,_,Q);case se:return w=w.get(_.key===null?b:_.key)||null,S(h,w,_,Q);case Ae:var q=_._init;return H(w,h,b,q(_._payload),Q)}if(qn(_)||Z(_))return w=w.get(b)||null,M(h,w,_,Q,null);yl(h,_)}return null}function Y(w,h,b,_){for(var Q=null,q=null,J=h,le=h=0,He=null;J!==null&&le<b.length;le++){J.index>le?(He=J,J=null):He=J.sibling;var ge=O(w,J,b[le],_);if(ge===null){J===null&&(J=He);break}e&&J&&ge.alternate===null&&t(w,J),h=a(ge,h,le),q===null?Q=ge:q.sibling=ge,q=ge,J=He}if(le===b.length)return n(w,J),Oe&&pn(w,le),Q;if(J===null){for(;le<b.length;le++)J=z(w,b[le],_),J!==null&&(h=a(J,h,le),q===null?Q=J:q.sibling=J,q=J);return Oe&&pn(w,le),Q}for(J=r(w,J);le<b.length;le++)He=H(J,w,le,b[le],_),He!==null&&(e&&He.alternate!==null&&J.delete(He.key===null?le:He.key),h=a(He,h,le),q===null?Q=He:q.sibling=He,q=He);return e&&J.forEach(function(on){return t(w,on)}),Oe&&pn(w,le),Q}function K(w,h,b,_){var Q=Z(b);if(typeof Q!="function")throw Error(s(150));if(b=Q.call(b),b==null)throw Error(s(151));for(var q=Q=null,J=h,le=h=0,He=null,ge=b.next();J!==null&&!ge.done;le++,ge=b.next()){J.index>le?(He=J,J=null):He=J.sibling;var on=O(w,J,ge.value,_);if(on===null){J===null&&(J=He);break}e&&J&&on.alternate===null&&t(w,J),h=a(on,h,le),q===null?Q=on:q.sibling=on,q=on,J=He}if(ge.done)return n(w,J),Oe&&pn(w,le),Q;if(J===null){for(;!ge.done;le++,ge=b.next())ge=z(w,ge.value,_),ge!==null&&(h=a(ge,h,le),q===null?Q=ge:q.sibling=ge,q=ge);return Oe&&pn(w,le),Q}for(J=r(w,J);!ge.done;le++,ge=b.next())ge=H(J,w,le,ge.value,_),ge!==null&&(e&&ge.alternate!==null&&J.delete(ge.key===null?le:ge.key),h=a(ge,h,le),q===null?Q=ge:q.sibling=ge,q=ge);return e&&J.forEach(function(af){return t(w,af)}),Oe&&pn(w,le),Q}function De(w,h,b,_){if(typeof b=="object"&&b!==null&&b.type===ve&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ae:e:{for(var Q=b.key,q=h;q!==null;){if(q.key===Q){if(Q=b.type,Q===ve){if(q.tag===7){n(w,q.sibling),h=l(q,b.props.children),h.return=w,w=h;break e}}else if(q.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ae&&Ws(Q)===q.type){n(w,q.sibling),h=l(q,b.props),h.ref=br(w,q,b),h.return=w,w=h;break e}n(w,q);break}else t(w,q);q=q.sibling}b.type===ve?(h=En(b.props.children,w.mode,_,b.key),h.return=w,w=h):(_=$l(b.type,b.key,b.props,null,w.mode,_),_.ref=br(w,h,b),_.return=w,w=_)}return u(w);case se:e:{for(q=b.key;h!==null;){if(h.key===q)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){n(w,h.sibling),h=l(h,b.children||[]),h.return=w,w=h;break e}else{n(w,h);break}else t(w,h);h=h.sibling}h=Qo(b,w.mode,_),h.return=w,w=h}return u(w);case Ae:return q=b._init,De(w,h,q(b._payload),_)}if(qn(b))return Y(w,h,b,_);if(Z(b))return K(w,h,b,_);yl(w,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(n(w,h.sibling),h=l(h,b),h.return=w,w=h):(n(w,h),h=Ko(b,w.mode,_),h.return=w,w=h),u(w)):n(w,h)}return De}var Un=Bs(!0),Ys=Bs(!1),xl=Qt(null),El=null,Fn=null,ro=null;function lo(){ro=Fn=El=null}function ao(e){var t=xl.current;Te(xl),e._currentValue=t}function oo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){El=e,ro=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(ro!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(El===null)throw Error(s(308));Fn=e,El.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function io(e){fn===null?fn=[e]:fn.push(e)}function Gs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,io(t)):(n.next=l.next,l.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ks(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(me&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,At(e,n)}return l=r.interleaved,l===null?(t.next=t,io(r)):(t.next=l.next,l.next=t),r.interleaved=t,At(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?l=a=u:a=a.next=u,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function kl(e,t,n,r){var l=e.updateQueue;qt=!1;var a=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var g=f,S=g.next;g.next=null,u===null?a=S:u.next=S,u=g;var M=e.alternate;M!==null&&(M=M.updateQueue,f=M.lastBaseUpdate,f!==u&&(f===null?M.firstBaseUpdate=S:f.next=S,M.lastBaseUpdate=g))}if(a!==null){var z=l.baseState;u=0,M=S=g=null,f=a;do{var O=f.lane,H=f.eventTime;if((r&O)===O){M!==null&&(M=M.next={eventTime:H,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Y=e,K=f;switch(O=t,H=n,K.tag){case 1:if(Y=K.payload,typeof Y=="function"){z=Y.call(H,z,O);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,O=typeof Y=="function"?Y.call(H,z,O):Y,O==null)break e;z=W({},z,O);break e;case 2:qt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,O=l.effects,O===null?l.effects=[f]:O.push(f))}else H={eventTime:H,lane:O,tag:f.tag,payload:f.payload,callback:f.callback,next:null},M===null?(S=M=H,g=z):M=M.next=H,u|=O;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;O=f,f=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);if(M===null&&(g=z),l.baseState=g,l.firstBaseUpdate=S,l.lastBaseUpdate=M,t=l.shared.interleaved,t!==null){l=t;do u|=l.lane,l=l.next;while(l!==t)}else a===null&&(l.shared.lanes=0);hn|=u,e.lanes=u,e.memoizedState=z}}function Xs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(s(191,l));l.call(r)}}}var Nr={},Rt=Qt(Nr),Sr=Qt(Nr),Rr=Qt(Nr);function mn(e){if(e===Nr)throw Error(s(174));return e}function uo(e,t){switch(Ne(Rr,t),Ne(Sr,e),Ne(Rt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ca(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ca(t,e)}Te(Rt),Ne(Rt,t)}function jn(){Te(Rt),Te(Sr),Te(Rr)}function Zs(e){mn(Rr.current);var t=mn(Rt.current),n=ca(t,e.type);t!==n&&(Ne(Sr,e),Ne(Rt,n))}function co(e){Sr.current===e&&(Te(Rt),Te(Sr))}var Me=Qt(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var po=[];function fo(){for(var e=0;e<po.length;e++)po[e]._workInProgressVersionPrimary=null;po.length=0}var Nl=ne.ReactCurrentDispatcher,mo=ne.ReactCurrentBatchConfig,gn=0,Le=null,Fe=null,je=null,Sl=!1,Cr=!1,Tr=0,Cp=0;function Ge(){throw Error(s(321))}function go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,l,a){if(gn=a,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?Lp:zp,e=n(r,l),Cr){a=0;do{if(Cr=!1,Tr=0,25<=a)throw Error(s(301));a+=1,je=Fe=null,t.updateQueue=null,Nl.current=Ip,e=n(r,l)}while(Cr)}if(Nl.current=Tl,t=Fe!==null&&Fe.next!==null,gn=0,je=Fe=Le=null,Sl=!1,t)throw Error(s(300));return e}function vo(){var e=Tr!==0;return Tr=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Le.memoizedState=je=e:je=je.next=e,je}function pt(){if(Fe===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var t=je===null?Le.memoizedState:je.next;if(t!==null)je=t,Fe=e;else{if(e===null)throw Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},je===null?Le.memoizedState=je=e:je=je.next=e}return je}function Or(e,t){return typeof t=="function"?t(e):t}function yo(e){var t=pt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Fe,l=r.baseQueue,a=n.pending;if(a!==null){if(l!==null){var u=l.next;l.next=a.next,a.next=u}r.baseQueue=l=a,n.pending=null}if(l!==null){a=l.next,r=r.baseState;var f=u=null,g=null,S=a;do{var M=S.lane;if((gn&M)===M)g!==null&&(g=g.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var z={lane:M,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};g===null?(f=g=z,u=r):g=g.next=z,Le.lanes|=M,hn|=M}S=S.next}while(S!==null&&S!==a);g===null?u=r:g.next=f,vt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=g,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do a=l.lane,Le.lanes|=a,hn|=a,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function xo(e){var t=pt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var u=l=l.next;do a=e(a,u.action),u=u.next;while(u!==l);vt(a,t.memoizedState)||(tt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function qs(){}function Js(e,t){var n=Le,r=pt(),l=t(),a=!vt(r.memoizedState,l);if(a&&(r.memoizedState=l,tt=!0),r=r.queue,Eo(nu.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Mr(9,tu.bind(null,n,r,l,t),void 0,null),$e===null)throw Error(s(349));(gn&30)!==0||eu(n,t,l)}return l}function eu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tu(e,t,n,r){t.value=n,t.getSnapshot=r,ru(t)&&lu(e)}function nu(e,t,n){return n(function(){ru(t)&&lu(e)})}function ru(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function lu(e){var t=At(e,1);t!==null&&kt(t,e,1,-1)}function au(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=Mp.bind(null,Le,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ou(){return pt().memoizedState}function Rl(e,t,n,r){var l=Ct();Le.flags|=e,l.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function Cl(e,t,n,r){var l=pt();r=r===void 0?null:r;var a=void 0;if(Fe!==null){var u=Fe.memoizedState;if(a=u.destroy,r!==null&&go(r,u.deps)){l.memoizedState=Mr(t,n,a,r);return}}Le.flags|=e,l.memoizedState=Mr(1|t,n,a,r)}function iu(e,t){return Rl(8390656,8,e,t)}function Eo(e,t){return Cl(2048,8,e,t)}function su(e,t){return Cl(4,2,e,t)}function uu(e,t){return Cl(4,4,e,t)}function cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function du(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4,4,cu.bind(null,t,e),n)}function wo(){}function pu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&go(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function mu(e,t,n){return(gn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(vt(n,t)||(n=Wi(),Le.lanes|=n,hn|=n,e.baseState=!0),t)}function Tp(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=mo.transition;mo.transition={};try{e(!1),t()}finally{ye=n,mo.transition=r}}function gu(){return pt().memoizedState}function Op(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hu(e))vu(t,n);else if(n=Gs(e,t,n,r),n!==null){var l=Ze();kt(n,e,r,l),yu(n,t,r)}}function Mp(e,t,n){var r=rn(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(e))vu(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var u=t.lastRenderedState,f=a(u,n);if(l.hasEagerState=!0,l.eagerState=f,vt(f,u)){var g=t.interleaved;g===null?(l.next=l,io(t)):(l.next=g.next,g.next=l),t.interleaved=l;return}}catch{}finally{}n=Gs(e,t,l,r),n!==null&&(l=Ze(),kt(n,e,r,l),yu(n,t,r))}}function hu(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function vu(e,t){Cr=Sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ka(e,n)}}var Tl={readContext:dt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Lp={readContext:dt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:iu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Rl(4194308,4,cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Rl(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Op.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:au,useDebugValue:wo,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=au(!1),t=e[0];return e=Tp.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,l=Ct();if(Oe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),$e===null)throw Error(s(349));(gn&30)!==0||eu(r,t,n)}l.memoizedState=n;var a={value:n,getSnapshot:t};return l.queue=a,iu(nu.bind(null,r,a,e),[e]),r.flags|=2048,Mr(9,tu.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ct(),t=$e.identifierPrefix;if(Oe){var n=Pt,r=It;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Tr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Cp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:dt,useCallback:pu,useContext:dt,useEffect:Eo,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:uu,useMemo:fu,useReducer:yo,useRef:ou,useState:function(){return yo(Or)},useDebugValue:wo,useDeferredValue:function(e){var t=pt();return mu(t,Fe.memoizedState,e)},useTransition:function(){var e=yo(Or)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qs,useSyncExternalStore:Js,useId:gu,unstable_isNewReconciler:!1},Ip={readContext:dt,useCallback:pu,useContext:dt,useEffect:Eo,useImperativeHandle:du,useInsertionEffect:su,useLayoutEffect:uu,useMemo:fu,useReducer:xo,useRef:ou,useState:function(){return xo(Or)},useDebugValue:wo,useDeferredValue:function(e){var t=pt();return Fe===null?t.memoizedState=e:mu(t,Fe.memoizedState,e)},useTransition:function(){var e=xo(Or)[0],t=pt().memoizedState;return[e,t]},useMutableSource:qs,useSyncExternalStore:Js,useId:gu,unstable_isNewReconciler:!1};function xt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ko(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ol={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=rn(e),a=_t(r,l);a.payload=t,n!=null&&(a.callback=n),t=Jt(e,a,l),t!==null&&(kt(t,e,l,r),wl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),l=rn(e),a=_t(r,l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Jt(e,a,l),t!==null&&(kt(t,e,l,r),wl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=rn(e),l=_t(n,r);l.tag=2,t!=null&&(l.callback=t),t=Jt(e,l,r),t!==null&&(kt(t,e,r,n),wl(t,e,r))}};function xu(e,t,n,r,l,a,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,u):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(l,a):!0}function Eu(e,t,n){var r=!1,l=Xt,a=t.contextType;return typeof a=="object"&&a!==null?a=dt(a):(l=et(t)?cn:Ye.current,r=t.contextTypes,a=(r=r!=null)?Pn(e,l):Xt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ol,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=a),t}function wu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ol.enqueueReplaceState(t,t.state,null)}function bo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},so(e);var a=t.contextType;typeof a=="object"&&a!==null?l.context=dt(a):(a=et(t)?cn:Ye.current,l.context=Pn(e,a)),l.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(ko(e,t,a,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Ol.enqueueReplaceState(l,l.state,null),kl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",r=t;do n+=pe(r),r=r.return;while(r);var l=n}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:l,digest:null}}function No(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function So(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Pp=typeof WeakMap=="function"?WeakMap:Map;function ku(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){_l||(_l=!0,Vo=r),So(e,t)},n}function bu(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){So(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){So(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Pp;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Kp.bind(null,e,t,n),t.then(e,e))}function Su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ru(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Ap=ne.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?Ys(t,null,n,r):Un(t,e.child,n,r)}function Cu(e,t,n,r,l){n=n.render;var a=t.ref;return Vn(t,l),r=ho(e,t,n,r,a,l),n=vo(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(Oe&&n&&qa(t),t.flags|=1,Xe(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var a=n.type;return typeof a=="function"&&!Go(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Ou(e,t,a,r,l)):(e=$l(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&l)===0){var u=a.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(u,r)&&e.ref===t.ref)return Dt(e,t,l)}return t.flags|=1,e=an(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,n,r,l){if(e!==null){var a=e.memoizedProps;if(hr(a,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=a,(e.lanes&l)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,Dt(e,t,l)}return Ro(e,t,n,r,l)}function Mu(e,t,n){var r=t.pendingProps,l=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Wn,st),st|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Wn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,Ne(Wn,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ne(Wn,st),st|=r;return Xe(e,t,l,n),t.child}function Lu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ro(e,t,n,r,l){var a=et(n)?cn:Ye.current;return a=Pn(t,a),Vn(t,l),n=ho(e,t,n,r,a,l),r=vo(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Dt(e,t,l)):(Oe&&r&&qa(t),t.flags|=1,Xe(e,t,n,l),t.child)}function zu(e,t,n,r,l){if(et(n)){var a=!0;fl(t)}else a=!1;if(Vn(t,l),t.stateNode===null)Ll(e,t),Eu(t,n,r),bo(t,n,r,l),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var g=u.context,S=n.contextType;typeof S=="object"&&S!==null?S=dt(S):(S=et(n)?cn:Ye.current,S=Pn(t,S));var M=n.getDerivedStateFromProps,z=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function";z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||g!==S)&&wu(t,u,r,S),qt=!1;var O=t.memoizedState;u.state=O,kl(t,r,u,l),g=t.memoizedState,f!==r||O!==g||Je.current||qt?(typeof M=="function"&&(ko(t,n,M,r),g=t.memoizedState),(f=qt||xu(t,n,f,r,O,g,S))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=g),u.props=r,u.state=g,u.context=S,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Ks(e,t),f=t.memoizedProps,S=t.type===t.elementType?f:xt(t.type,f),u.props=S,z=t.pendingProps,O=u.context,g=n.contextType,typeof g=="object"&&g!==null?g=dt(g):(g=et(n)?cn:Ye.current,g=Pn(t,g));var H=n.getDerivedStateFromProps;(M=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==z||O!==g)&&wu(t,u,r,g),qt=!1,O=t.memoizedState,u.state=O,kl(t,r,u,l);var Y=t.memoizedState;f!==z||O!==Y||Je.current||qt?(typeof H=="function"&&(ko(t,n,H,r),Y=t.memoizedState),(S=qt||xu(t,n,S,r,O,Y,g)||!1)?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,Y,g),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,Y,g)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Y),u.props=r,u.state=Y,u.context=g,r=S):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),r=!1)}return Co(e,t,n,r,a,l)}function Co(e,t,n,r,l,a){Lu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return l&&Ds(t,n,!1),Dt(e,t,a);r=t.stateNode,Ap.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Un(t,e.child,null,a),t.child=Un(t,null,f,a)):Xe(e,t,f,a),t.memoizedState=r.state,l&&Ds(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?As(e,t.pendingContext,t.pendingContext!==t.context):t.context&&As(e,t.context,!1),uo(e,t.containerInfo)}function Pu(e,t,n,r,l){return Dn(),no(l),t.flags|=256,Xe(e,t,n,r),t.child}var To={dehydrated:null,treeContext:null,retryLane:0};function Oo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Au(e,t,n){var r=t.pendingProps,l=Me.current,a=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(l&2)!==0),f?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),Ne(Me,l&1),e===null)return to(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,a?(r=t.mode,a=t.child,u={mode:"hidden",children:u},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=u):a=Hl(u,r,0,null),e=En(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Oo(n),t.memoizedState=To,e):Mo(t,u));if(l=e.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return _p(e,t,u,r,f,l,n);if(a){a=r.fallback,u=t.mode,l=e.child,f=l.sibling;var g={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=g,t.deletions=null):(r=an(l,g),r.subtreeFlags=l.subtreeFlags&14680064),f!==null?a=an(f,a):(a=En(a,u,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,u=e.child.memoizedState,u=u===null?Oo(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},a.memoizedState=u,a.childLanes=e.childLanes&~n,t.memoizedState=To,r}return a=e.child,e=a.sibling,r=an(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mo(e,t){return t=Hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ml(e,t,n,r){return r!==null&&no(r),Un(t,e.child,null,n),e=Mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _p(e,t,n,r,l,a,u){if(n)return t.flags&256?(t.flags&=-257,r=No(Error(s(422))),Ml(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,l=t.mode,r=Hl({mode:"visible",children:r.children},l,0,null),a=En(a,l,u,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Un(t,e.child,null,u),t.child.memoizedState=Oo(u),t.memoizedState=To,a);if((t.mode&1)===0)return Ml(e,t,u,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var f=r.dgst;return r=f,a=Error(s(419)),r=No(a,r,void 0),Ml(e,t,u,r)}if(f=(u&e.childLanes)!==0,tt||f){if(r=$e,r!==null){switch(u&-u){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|u))!==0?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,At(e,l),kt(r,e,l,-1))}return Yo(),r=No(Error(s(421))),Ml(e,t,u,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Qp.bind(null,e),l._reactRetry=t,null):(e=a.treeContext,it=Kt(l.nextSibling),ot=t,Oe=!0,yt=null,e!==null&&(ut[ct++]=It,ut[ct++]=Pt,ut[ct++]=dn,It=e.id,Pt=e.overflow,dn=t),t=Mo(t,r.children),t.flags|=4096,t)}function _u(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oo(e.return,t,n)}function Lo(e,t,n,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=l)}function Du(e,t,n){var r=t.pendingProps,l=r.revealOrder,a=r.tail;if(Xe(e,t,r.children,n),r=Me.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_u(e,n,t);else if(e.tag===19)_u(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Me,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Lo(t,!1,l,n,a);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&bl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Lo(t,!0,n,null,a);break;case"together":Lo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ll(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=an(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=an(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dp(e,t,n){switch(t.tag){case 3:Iu(t),Dn();break;case 5:Zs(t);break;case 1:et(t.type)&&fl(t);break;case 4:uo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;Ne(xl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Me,Me.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Au(e,t,n):(Ne(Me,Me.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);Ne(Me,Me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Du(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ne(Me,Me.current),r)break;return null;case 22:case 23:return t.lanes=0,Mu(e,t,n)}return Dt(e,t,n)}var Uu,zo,Fu,Vu;Uu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zo=function(){},Fu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,mn(Rt.current);var a=null;switch(n){case"input":l=qe(e,l),r=qe(e,r),a=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),a=[];break;case"textarea":l=ua(e,l),r=ua(e,r),a=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=cl)}da(n,r);var u;n=null;for(S in l)if(!r.hasOwnProperty(S)&&l.hasOwnProperty(S)&&l[S]!=null)if(S==="style"){var f=l[S];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(p.hasOwnProperty(S)?a||(a=[]):(a=a||[]).push(S,null));for(S in r){var g=r[S];if(f=l!=null?l[S]:void 0,r.hasOwnProperty(S)&&g!==f&&(g!=null||f!=null))if(S==="style")if(f){for(u in f)!f.hasOwnProperty(u)||g&&g.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in g)g.hasOwnProperty(u)&&f[u]!==g[u]&&(n||(n={}),n[u]=g[u])}else n||(a||(a=[]),a.push(S,n)),n=g;else S==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,f=f?f.__html:void 0,g!=null&&f!==g&&(a=a||[]).push(S,g)):S==="children"?typeof g!="string"&&typeof g!="number"||(a=a||[]).push(S,""+g):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(p.hasOwnProperty(S)?(g!=null&&S==="onScroll"&&Ce("scroll",e),a||f===g||(a=[])):(a=a||[]).push(S,g))}n&&(a=a||[]).push("style",n);var S=a;(t.updateQueue=S)&&(t.flags|=4)}},Vu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Up(e,t,n){var r=t.pendingProps;switch(Ja(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return et(t.type)&&pl(),Ke(t),null;case 3:return r=t.stateNode,jn(),Te(Je),Te(Ye),fo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,yt!==null&&(Ho(yt),yt=null))),zo(e,t),Ke(t),null;case 5:co(t);var l=mn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(e=mn(Rt.current),vl(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[St]=t,r[wr]=a,e=(t.mode&1)!==0,n){case"dialog":Ce("cancel",r),Ce("close",r);break;case"iframe":case"object":case"embed":Ce("load",r);break;case"video":case"audio":for(l=0;l<yr.length;l++)Ce(yr[l],r);break;case"source":Ce("error",r);break;case"img":case"image":case"link":Ce("error",r),Ce("load",r);break;case"details":Ce("toggle",r);break;case"input":Mt(r,a),Ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Ce("invalid",r);break;case"textarea":bi(r,a),Ce("invalid",r)}da(n,a),l=null;for(var u in a)if(a.hasOwnProperty(u)){var f=a[u];u==="children"?typeof f=="string"?r.textContent!==f&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,f,e),l=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&ul(r.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Ce("scroll",r)}switch(n){case"input":re(r),ki(r,a,!0);break;case"textarea":re(r),Si(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=cl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ri(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[St]=t,e[wr]=r,Uu(e,t,!1,!1),t.stateNode=e;e:{switch(u=pa(n,r),n){case"dialog":Ce("cancel",e),Ce("close",e),l=r;break;case"iframe":case"object":case"embed":Ce("load",e),l=r;break;case"video":case"audio":for(l=0;l<yr.length;l++)Ce(yr[l],e);l=r;break;case"source":Ce("error",e),l=r;break;case"img":case"image":case"link":Ce("error",e),Ce("load",e),l=r;break;case"details":Ce("toggle",e),l=r;break;case"input":Mt(e,r),l=qe(e,r),Ce("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),Ce("invalid",e);break;case"textarea":bi(e,r),l=ua(e,r),Ce("invalid",e);break;default:l=r}da(n,l),f=l;for(a in f)if(f.hasOwnProperty(a)){var g=f[a];a==="style"?Oi(e,g):a==="dangerouslySetInnerHTML"?(g=g?g.__html:void 0,g!=null&&Ci(e,g)):a==="children"?typeof g=="string"?(n!=="textarea"||g!=="")&&Jn(e,g):typeof g=="number"&&Jn(e,""+g):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(p.hasOwnProperty(a)?g!=null&&a==="onScroll"&&Ce("scroll",e):g!=null&&X(e,a,g,u))}switch(n){case"input":re(e),ki(e,r,!1);break;case"textarea":re(e),Si(e);break;case"option":r.value!=null&&e.setAttribute("value",""+he(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?kn(e,!!r.multiple,a,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=cl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Vu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=mn(Rr.current),mn(Rt.current),vl(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(a=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ul(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ke(t),null;case 13:if(Te(Me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&it!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Hs(),Dn(),t.flags|=98560,a=!1;else if(a=vl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(s(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[St]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),a=!1}else yt!==null&&(Ho(yt),yt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ve===0&&(Ve=3):Yo())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return jn(),zo(e,t),e===null&&xr(t.stateNode.containerInfo),Ke(t),null;case 10:return ao(t.type._context),Ke(t),null;case 17:return et(t.type)&&pl(),Ke(t),null;case 19:if(Te(Me),a=t.memoizedState,a===null)return Ke(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)Lr(a,!1);else{if(Ve!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=bl(e),u!==null){for(t.flags|=128,Lr(a,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,u=a.alternate,u===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=u.childLanes,a.lanes=u.lanes,a.child=u.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=u.memoizedProps,a.memoizedState=u.memoizedState,a.updateQueue=u.updateQueue,a.type=u.type,e=u.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Me,Me.current&1|2),t.child}e=e.sibling}a.tail!==null&&_e()>Bn&&(t.flags|=128,r=!0,Lr(a,!1),t.lanes=4194304)}else{if(!r)if(e=bl(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Oe)return Ke(t),null}else 2*_e()-a.renderingStartTime>Bn&&n!==1073741824&&(t.flags|=128,r=!0,Lr(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(n=a.last,n!==null?n.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=_e(),t.sibling=null,n=Me.current,Ne(Me,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Bo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Fp(e,t){switch(Ja(t),t.tag){case 1:return et(t.type)&&pl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(),Te(Je),Te(Ye),fo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return co(t),null;case 13:if(Te(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Te(Me),null;case 4:return jn(),null;case 10:return ao(t.type._context),null;case 22:case 23:return Bo(),null;case 24:return null;default:return null}}var zl=!1,Qe=!1,Vp=typeof WeakSet=="function"?WeakSet:Set,B=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function Io(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var ju=!1;function jp(e,t){if(Wa=qr,e=xs(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var u=0,f=-1,g=-1,S=0,M=0,z=e,O=null;t:for(;;){for(var H;z!==n||l!==0&&z.nodeType!==3||(f=u+l),z!==a||r!==0&&z.nodeType!==3||(g=u+r),z.nodeType===3&&(u+=z.nodeValue.length),(H=z.firstChild)!==null;)O=z,z=H;for(;;){if(z===e)break t;if(O===n&&++S===l&&(f=u),O===a&&++M===r&&(g=u),(H=z.nextSibling)!==null)break;z=O,O=z.parentNode}z=H}n=f===-1||g===-1?null:{start:f,end:g}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ba={focusedElem:e,selectionRange:n},qr=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var Y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var K=Y.memoizedProps,De=Y.memoizedState,w=t.stateNode,h=w.getSnapshotBeforeUpdate(t.elementType===t.type?K:xt(t.type,K),De);w.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(_){Ie(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return Y=ju,ju=!1,Y}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var a=l.destroy;l.destroy=void 0,a!==void 0&&Io(t,n,a)}l=l.next}while(l!==r)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Po(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $u(e){var t=e.alternate;t!==null&&(e.alternate=null,$u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[wr],delete t[Qa],delete t[bp],delete t[Np])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Hu(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cl));else if(r!==4&&(e=e.child,e!==null))for(Ao(e,t,n),e=e.sibling;e!==null;)Ao(e,t,n),e=e.sibling}function _o(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_o(e,t,n),e=e.sibling;e!==null;)_o(e,t,n),e=e.sibling}var We=null,Et=!1;function en(e,t,n){for(n=n.child;n!==null;)Bu(e,t,n),n=n.sibling}function Bu(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Yr,n)}catch{}switch(n.tag){case 5:Qe||Hn(n,t);case 6:var r=We,l=Et;We=null,en(e,t,n),We=r,Et=l,We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Et?(e=We,n=n.stateNode,e.nodeType===8?Ka(e.parentNode,n):e.nodeType===1&&Ka(e,n),cr(e)):Ka(We,n.stateNode));break;case 4:r=We,l=Et,We=n.stateNode.containerInfo,Et=!0,en(e,t,n),We=r,Et=l;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var a=l,u=a.destroy;a=a.tag,u!==void 0&&((a&2)!==0||(a&4)!==0)&&Io(n,t,u),l=l.next}while(l!==r)}en(e,t,n);break;case 1:if(!Qe&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){Ie(n,t,f)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,en(e,t,n),Qe=r):en(e,t,n);break;default:en(e,t,n)}}function Yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Vp),t.forEach(function(r){var l=Xp.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var a=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,Et=!1;break e;case 3:We=f.stateNode.containerInfo,Et=!0;break e;case 4:We=f.stateNode.containerInfo,Et=!0;break e}f=f.return}if(We===null)throw Error(s(160));Bu(a,u,l),We=null,Et=!1;var g=l.alternate;g!==null&&(g.return=null),l.return=null}catch(S){Ie(l,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Gu(t,e),t=t.sibling}function Gu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Tt(e),r&4){try{zr(3,e,e.return),Il(3,e)}catch(K){Ie(e,e.return,K)}try{zr(5,e,e.return)}catch(K){Ie(e,e.return,K)}}break;case 1:wt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(wt(t,e),Tt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var l=e.stateNode;try{Jn(l,"")}catch(K){Ie(e,e.return,K)}}if(r&4&&(l=e.stateNode,l!=null)){var a=e.memoizedProps,u=n!==null?n.memoizedProps:a,f=e.type,g=e.updateQueue;if(e.updateQueue=null,g!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&Zn(l,a),pa(f,u);var S=pa(f,a);for(u=0;u<g.length;u+=2){var M=g[u],z=g[u+1];M==="style"?Oi(l,z):M==="dangerouslySetInnerHTML"?Ci(l,z):M==="children"?Jn(l,z):X(l,M,z,S)}switch(f){case"input":ia(l,a);break;case"textarea":Ni(l,a);break;case"select":var O=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var H=a.value;H!=null?kn(l,!!a.multiple,H,!1):O!==!!a.multiple&&(a.defaultValue!=null?kn(l,!!a.multiple,a.defaultValue,!0):kn(l,!!a.multiple,a.multiple?[]:"",!1))}l[wr]=a}catch(K){Ie(e,e.return,K)}}break;case 6:if(wt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,a=e.memoizedProps;try{l.nodeValue=a}catch(K){Ie(e,e.return,K)}}break;case 3:if(wt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{cr(t.containerInfo)}catch(K){Ie(e,e.return,K)}break;case 4:wt(t,e),Tt(e);break;case 13:wt(t,e),Tt(e),l=e.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(Fo=_e())),r&4&&Yu(e);break;case 22:if(M=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(S=Qe)||M,wt(t,e),Qe=S):wt(t,e),Tt(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!M&&(e.mode&1)!==0)for(B=e,M=e.child;M!==null;){for(z=B=M;B!==null;){switch(O=B,H=O.child,O.tag){case 0:case 11:case 14:case 15:zr(4,O,O.return);break;case 1:Hn(O,O.return);var Y=O.stateNode;if(typeof Y.componentWillUnmount=="function"){r=O,n=O.return;try{t=r,Y.props=t.memoizedProps,Y.state=t.memoizedState,Y.componentWillUnmount()}catch(K){Ie(r,n,K)}}break;case 5:Hn(O,O.return);break;case 22:if(O.memoizedState!==null){Xu(z);continue}}H!==null?(H.return=O,B=H):Xu(z)}M=M.sibling}e:for(M=null,z=e;;){if(z.tag===5){if(M===null){M=z;try{l=z.stateNode,S?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=z.stateNode,g=z.memoizedProps.style,u=g!=null&&g.hasOwnProperty("display")?g.display:null,f.style.display=Ti("display",u))}catch(K){Ie(e,e.return,K)}}}else if(z.tag===6){if(M===null)try{z.stateNode.nodeValue=S?"":z.memoizedProps}catch(K){Ie(e,e.return,K)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;M===z&&(M=null),z=z.return}M===z&&(M=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:wt(t,e),Tt(e),r&4&&Yu(e);break;case 21:break;default:wt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Hu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Jn(l,""),r.flags&=-33);var a=Wu(e);_o(e,a,l);break;case 3:case 4:var u=r.stateNode.containerInfo,f=Wu(e);Ao(e,f,u);break;default:throw Error(s(161))}}catch(g){Ie(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $p(e,t,n){B=e,Ku(e)}function Ku(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var l=B,a=l.child;if(l.tag===22&&r){var u=l.memoizedState!==null||zl;if(!u){var f=l.alternate,g=f!==null&&f.memoizedState!==null||Qe;f=zl;var S=Qe;if(zl=u,(Qe=g)&&!S)for(B=l;B!==null;)u=B,g=u.child,u.tag===22&&u.memoizedState!==null?Zu(l):g!==null?(g.return=u,B=g):Zu(l);for(;a!==null;)B=a,Ku(a),a=a.sibling;B=l,zl=f,Qe=S}Qu(e)}else(l.subtreeFlags&8772)!==0&&a!==null?(a.return=l,B=a):Qu(e)}}function Qu(e){for(;B!==null;){var t=B;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Xs(t,a,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xs(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var g=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":g.autoFocus&&n.focus();break;case"img":g.src&&(n.src=g.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var M=S.memoizedState;if(M!==null){var z=M.dehydrated;z!==null&&cr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Qe||t.flags&512&&Po(t)}catch(O){Ie(t,t.return,O)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Xu(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Zu(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Il(4,t)}catch(g){Ie(t,n,g)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(g){Ie(t,l,g)}}var a=t.return;try{Po(t)}catch(g){Ie(t,a,g)}break;case 5:var u=t.return;try{Po(t)}catch(g){Ie(t,u,g)}}}catch(g){Ie(t,t.return,g)}if(t===e){B=null;break}var f=t.sibling;if(f!==null){f.return=t.return,B=f;break}B=t.return}}var Hp=Math.ceil,Pl=ne.ReactCurrentDispatcher,Do=ne.ReactCurrentOwner,ft=ne.ReactCurrentBatchConfig,me=0,$e=null,Ue=null,Be=0,st=0,Wn=Qt(0),Ve=0,Ir=null,hn=0,Al=0,Uo=0,Pr=null,nt=null,Fo=0,Bn=1/0,Ut=null,_l=!1,Vo=null,tn=null,Dl=!1,nn=null,Ul=0,Ar=0,jo=null,Fl=-1,Vl=0;function Ze(){return(me&6)!==0?_e():Fl!==-1?Fl:Fl=_e()}function rn(e){return(e.mode&1)===0?1:(me&2)!==0&&Be!==0?Be&-Be:Rp.transition!==null?(Vl===0&&(Vl=Wi()),Vl):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Ji(e.type)),e)}function kt(e,t,n,r){if(50<Ar)throw Ar=0,jo=null,Error(s(185));ar(e,n,r),((me&2)===0||e!==$e)&&(e===$e&&((me&2)===0&&(Al|=n),Ve===4&&ln(e,Be)),rt(e,r),n===1&&me===0&&(t.mode&1)===0&&(Bn=_e()+500,ml&&Zt()))}function rt(e,t){var n=e.callbackNode;Rd(e,t);var r=Qr(e,e===$e?Be:0);if(r===0)n!==null&&ji(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ji(n),t===1)e.tag===0?Sp(Ju.bind(null,e)):Us(Ju.bind(null,e)),wp(function(){(me&6)===0&&Zt()}),n=null;else{switch(Bi(r)){case 1:n=xa;break;case 4:n=$i;break;case 16:n=Br;break;case 536870912:n=Hi;break;default:n=Br}n=ic(n,qu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function qu(e,t){if(Fl=-1,Vl=0,(me&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=Qr(e,e===$e?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=jl(e,r);else{t=r;var l=me;me|=2;var a=tc();($e!==e||Be!==t)&&(Ut=null,Bn=_e()+500,yn(e,t));do try{Yp();break}catch(f){ec(e,f)}while(!0);lo(),Pl.current=a,me=l,Ue!==null?t=0:($e=null,Be=0,t=Ve)}if(t!==0){if(t===2&&(l=Ea(e),l!==0&&(r=l,t=$o(e,l))),t===1)throw n=Ir,yn(e,0),ln(e,r),rt(e,_e()),n;if(t===6)ln(e,r);else{if(l=e.current.alternate,(r&30)===0&&!Wp(l)&&(t=jl(e,r),t===2&&(a=Ea(e),a!==0&&(r=a,t=$o(e,a))),t===1))throw n=Ir,yn(e,0),ln(e,r),rt(e,_e()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:xn(e,nt,Ut);break;case 3:if(ln(e,r),(r&130023424)===r&&(t=Fo+500-_e(),10<t)){if(Qr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ga(xn.bind(null,e,nt,Ut),t);break}xn(e,nt,Ut);break;case 4:if(ln(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var u=31-ht(r);a=1<<u,u=t[u],u>l&&(l=u),r&=~a}if(r=l,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hp(r/1960))-r,10<r){e.timeoutHandle=Ga(xn.bind(null,e,nt,Ut),r);break}xn(e,nt,Ut);break;case 5:xn(e,nt,Ut);break;default:throw Error(s(329))}}}return rt(e,_e()),e.callbackNode===n?qu.bind(null,e):null}function $o(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=jl(e,t),e!==2&&(t=nt,nt=n,t!==null&&Ho(t)),e}function Ho(e){nt===null?nt=e:nt.push.apply(nt,e)}function Wp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],a=l.getSnapshot;l=l.value;try{if(!vt(a(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t){for(t&=~Uo,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Ju(e){if((me&6)!==0)throw Error(s(327));Yn();var t=Qr(e,0);if((t&1)===0)return rt(e,_e()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var r=Ea(e);r!==0&&(t=r,n=$o(e,r))}if(n===1)throw n=Ir,yn(e,0),ln(e,t),rt(e,_e()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,nt,Ut),rt(e,_e()),null}function Wo(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Bn=_e()+500,ml&&Zt())}}function vn(e){nn!==null&&nn.tag===0&&(me&6)===0&&Yn();var t=me;me|=1;var n=ft.transition,r=ye;try{if(ft.transition=null,ye=1,e)return e()}finally{ye=r,ft.transition=n,me=t,(me&6)===0&&Zt()}}function Bo(){st=Wn.current,Te(Wn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ep(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(Ja(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&pl();break;case 3:jn(),Te(Je),Te(Ye),fo();break;case 5:co(r);break;case 4:jn();break;case 13:Te(Me);break;case 19:Te(Me);break;case 10:ao(r.type._context);break;case 22:case 23:Bo()}n=n.return}if($e=e,Ue=e=an(e.current,null),Be=st=t,Ve=0,Ir=null,Uo=Al=hn=0,nt=Pr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,a=n.pending;if(a!==null){var u=a.next;a.next=l,r.next=u}n.pending=r}fn=null}return e}function ec(e,t){do{var n=Ue;try{if(lo(),Nl.current=Tl,Sl){for(var r=Le.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Sl=!1}if(gn=0,je=Fe=Le=null,Cr=!1,Tr=0,Do.current=null,n===null||n.return===null){Ve=1,Ir=t,Ue=null;break}e:{var a=e,u=n.return,f=n,g=t;if(t=Be,f.flags|=32768,g!==null&&typeof g=="object"&&typeof g.then=="function"){var S=g,M=f,z=M.tag;if((M.mode&1)===0&&(z===0||z===11||z===15)){var O=M.alternate;O?(M.updateQueue=O.updateQueue,M.memoizedState=O.memoizedState,M.lanes=O.lanes):(M.updateQueue=null,M.memoizedState=null)}var H=Su(u);if(H!==null){H.flags&=-257,Ru(H,u,f,a,t),H.mode&1&&Nu(a,S,t),t=H,g=S;var Y=t.updateQueue;if(Y===null){var K=new Set;K.add(g),t.updateQueue=K}else Y.add(g);break e}else{if((t&1)===0){Nu(a,S,t),Yo();break e}g=Error(s(426))}}else if(Oe&&f.mode&1){var De=Su(u);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),Ru(De,u,f,a,t),no($n(g,f));break e}}a=g=$n(g,f),Ve!==4&&(Ve=2),Pr===null?Pr=[a]:Pr.push(a),a=u;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var w=ku(a,g,t);Qs(a,w);break e;case 1:f=g;var h=a.type,b=a.stateNode;if((a.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(tn===null||!tn.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var _=bu(a,f,t);Qs(a,_);break e}}a=a.return}while(a!==null)}rc(n)}catch(Q){t=Q,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function tc(){var e=Pl.current;return Pl.current=Tl,e===null?Tl:e}function Yo(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),$e===null||(hn&268435455)===0&&(Al&268435455)===0||ln($e,Be)}function jl(e,t){var n=me;me|=2;var r=tc();($e!==e||Be!==t)&&(Ut=null,yn(e,t));do try{Bp();break}catch(l){ec(e,l)}while(!0);if(lo(),me=n,Pl.current=r,Ue!==null)throw Error(s(261));return $e=null,Be=0,Ve}function Bp(){for(;Ue!==null;)nc(Ue)}function Yp(){for(;Ue!==null&&!vd();)nc(Ue)}function nc(e){var t=oc(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?rc(e):Ue=t,Do.current=null}function rc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Up(n,t,st),n!==null){Ue=n;return}}else{if(n=Fp(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,Ue=null;return}}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);Ve===0&&(Ve=5)}function xn(e,t,n){var r=ye,l=ft.transition;try{ft.transition=null,ye=1,Gp(e,t,n,r)}finally{ft.transition=l,ye=r}return null}function Gp(e,t,n,r){do Yn();while(nn!==null);if((me&6)!==0)throw Error(s(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Cd(e,a),e===$e&&(Ue=$e=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Dl||(Dl=!0,ic(Br,function(){return Yn(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=ft.transition,ft.transition=null;var u=ye;ye=1;var f=me;me|=4,Do.current=null,jp(e,n),Gu(n,e),fp(Ba),qr=!!Wa,Ba=Wa=null,e.current=n,$p(n),yd(),me=f,ye=u,ft.transition=a}else e.current=n;if(Dl&&(Dl=!1,nn=e,Ul=l),a=e.pendingLanes,a===0&&(tn=null),wd(n.stateNode),rt(e,_e()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(_l)throw _l=!1,e=Vo,Vo=null,e;return(Ul&1)!==0&&e.tag!==0&&Yn(),a=e.pendingLanes,(a&1)!==0?e===jo?Ar++:(Ar=0,jo=e):Ar=0,Zt(),null}function Yn(){if(nn!==null){var e=Bi(Ul),t=ft.transition,n=ye;try{if(ft.transition=null,ye=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Ul=0,(me&6)!==0)throw Error(s(331));var l=me;for(me|=4,B=e.current;B!==null;){var a=B,u=a.child;if((B.flags&16)!==0){var f=a.deletions;if(f!==null){for(var g=0;g<f.length;g++){var S=f[g];for(B=S;B!==null;){var M=B;switch(M.tag){case 0:case 11:case 15:zr(8,M,a)}var z=M.child;if(z!==null)z.return=M,B=z;else for(;B!==null;){M=B;var O=M.sibling,H=M.return;if($u(M),M===S){B=null;break}if(O!==null){O.return=H,B=O;break}B=H}}}var Y=a.alternate;if(Y!==null){var K=Y.child;if(K!==null){Y.child=null;do{var De=K.sibling;K.sibling=null,K=De}while(K!==null)}}B=a}}if((a.subtreeFlags&2064)!==0&&u!==null)u.return=a,B=u;else e:for(;B!==null;){if(a=B,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:zr(9,a,a.return)}var w=a.sibling;if(w!==null){w.return=a.return,B=w;break e}B=a.return}}var h=e.current;for(B=h;B!==null;){u=B;var b=u.child;if((u.subtreeFlags&2064)!==0&&b!==null)b.return=u,B=b;else e:for(u=h;B!==null;){if(f=B,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Il(9,f)}}catch(Q){Ie(f,f.return,Q)}if(f===u){B=null;break e}var _=f.sibling;if(_!==null){_.return=f.return,B=_;break e}B=f.return}}if(me=l,Zt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Yr,e)}catch{}r=!0}return r}finally{ye=n,ft.transition=t}}return!1}function lc(e,t,n){t=$n(n,t),t=ku(e,t,1),e=Jt(e,t,1),t=Ze(),e!==null&&(ar(e,1,t),rt(e,t))}function Ie(e,t,n){if(e.tag===3)lc(e,e,n);else for(;t!==null;){if(t.tag===3){lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=$n(n,e),e=bu(t,e,1),t=Jt(t,e,1),e=Ze(),t!==null&&(ar(t,1,e),rt(t,e));break}}t=t.return}}function Kp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Be&n)===n&&(Ve===4||Ve===3&&(Be&130023424)===Be&&500>_e()-Fo?yn(e,0):Uo|=n),rt(e,t)}function ac(e,t){t===0&&((e.mode&1)===0?t=1:(t=Kr,Kr<<=1,(Kr&130023424)===0&&(Kr=4194304)));var n=Ze();e=At(e,t),e!==null&&(ar(e,t,n),rt(e,n))}function Qp(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ac(e,n)}function Xp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),ac(e,n)}var oc;oc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,Dp(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Oe&&(t.flags&1048576)!==0&&Fs(t,hl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ll(e,t),e=t.pendingProps;var l=Pn(t,Ye.current);Vn(t,n),l=ho(null,t,r,e,l,n);var a=vo();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(a=!0,fl(t)):a=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,so(t),l.updater=Ol,t.stateNode=l,l._reactInternals=t,bo(t,r,e,n),t=Co(null,t,r,!0,a,n)):(t.tag=0,Oe&&a&&qa(t),Xe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ll(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=qp(r),e=xt(r,e),l){case 0:t=Ro(null,t,r,e,n);break e;case 1:t=zu(null,t,r,e,n);break e;case 11:t=Cu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,xt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:xt(r,l),Ro(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:xt(r,l),zu(e,t,r,l,n);case 3:e:{if(Iu(t),e===null)throw Error(s(387));r=t.pendingProps,a=t.memoizedState,l=a.element,Ks(e,t),kl(t,r,null,n);var u=t.memoizedState;if(r=u.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){l=$n(Error(s(423)),t),t=Pu(e,t,r,n,l);break e}else if(r!==l){l=$n(Error(s(424)),t),t=Pu(e,t,r,n,l);break e}else for(it=Kt(t.stateNode.containerInfo.firstChild),ot=t,Oe=!0,yt=null,n=Ys(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===l){t=Dt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Zs(t),e===null&&to(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,u=l.children,Ya(r,l)?u=null:a!==null&&Ya(r,a)&&(t.flags|=32),Lu(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&to(t),null;case 13:return Au(e,t,n);case 4:return uo(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:xt(r,l),Cu(e,t,r,l,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,a=t.memoizedProps,u=l.value,Ne(xl,r._currentValue),r._currentValue=u,a!==null)if(vt(a.value,u)){if(a.children===l.children&&!Je.current){t=Dt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var f=a.dependencies;if(f!==null){u=a.child;for(var g=f.firstContext;g!==null;){if(g.context===r){if(a.tag===1){g=_t(-1,n&-n),g.tag=2;var S=a.updateQueue;if(S!==null){S=S.shared;var M=S.pending;M===null?g.next=g:(g.next=M.next,M.next=g),S.pending=g}}a.lanes|=n,g=a.alternate,g!==null&&(g.lanes|=n),oo(a.return,n,t),f.lanes|=n;break}g=g.next}}else if(a.tag===10)u=a.type===t.type?null:a.child;else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),oo(u,n,t),u=a.sibling}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}Xe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Vn(t,n),l=dt(l),r=r(l),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,l=xt(r,t.pendingProps),l=xt(r.type,l),Tu(e,t,r,l,n);case 15:return Ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:xt(r,l),Ll(e,t),t.tag=1,et(r)?(e=!0,fl(t)):e=!1,Vn(t,n),Eu(t,r,l),bo(t,r,l,n),Co(null,t,r,!0,e,n);case 19:return Du(e,t,n);case 22:return Mu(e,t,n)}throw Error(s(156,t.tag))};function ic(e,t){return Vi(e,t)}function Zp(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Zp(e,t,n,r)}function Go(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qp(e){if(typeof e=="function")return Go(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===te)return 14}return 2}function an(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $l(e,t,n,r,l,a){var u=2;if(r=e,typeof e=="function")Go(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case ve:return En(n.children,l,a,t);case j:u=8,l|=8;break;case F:return e=mt(12,n,t,l|2),e.elementType=F,e.lanes=a,e;case Re:return e=mt(13,n,t,l),e.elementType=Re,e.lanes=a,e;case ee:return e=mt(19,n,t,l),e.elementType=ee,e.lanes=a,e;case ke:return Hl(n,l,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ie:u=10;break e;case Pe:u=9;break e;case Se:u=11;break e;case te:u=14;break e;case Ae:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=mt(u,n,t,l),t.elementType=e,t.type=r,t.lanes=a,t}function En(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=mt(22,e,r,t),e.elementType=ke,e.lanes=n,e.stateNode={isHidden:!1},e}function Ko(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Qo(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jp(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Xo(e,t,n,r,l,a,u,f,g){return e=new Jp(e,t,n,f,g),t===1?(t=1,a===!0&&(t|=8)):t=0,a=mt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function ef(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return Xt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(et(n))return _s(e,n,t)}return t}function uc(e,t,n,r,l,a,u,f,g){return e=Xo(n,r,!0,e,l,a,u,f,g),e.context=sc(null),n=e.current,r=Ze(),l=rn(n),a=_t(r,l),a.callback=t??null,Jt(n,a,l),e.current.lanes=l,ar(e,l,r),rt(e,r),e}function Wl(e,t,n,r){var l=t.current,a=Ze(),u=rn(l);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(a,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(l,t,u),e!==null&&(kt(e,l,u,a),wl(e,l,u)),u}function Bl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zo(e,t){cc(e,t),(e=e.alternate)&&cc(e,t)}function tf(){return null}var dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function qo(e){this._internalRoot=e}Yl.prototype.render=qo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Wl(e,t,null,null)},Yl.prototype.unmount=qo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Wl(null,e,null,null)}),t[Lt]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ki();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Zi(e)}};function Jo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pc(){}function nf(e,t,n,r,l){if(l){if(typeof r=="function"){var a=r;r=function(){var S=Bl(u);a.call(S)}}var u=uc(t,r,e,0,null,!1,!1,"",pc);return e._reactRootContainer=u,e[Lt]=u.current,xr(e.nodeType===8?e.parentNode:e),vn(),u}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var f=r;r=function(){var S=Bl(g);f.call(S)}}var g=Xo(e,0,!1,null,null,!1,!1,"",pc);return e._reactRootContainer=g,e[Lt]=g.current,xr(e.nodeType===8?e.parentNode:e),vn(function(){Wl(t,g,n,r)}),g}function Kl(e,t,n,r,l){var a=n._reactRootContainer;if(a){var u=a;if(typeof l=="function"){var f=l;l=function(){var g=Bl(u);f.call(g)}}Wl(t,u,e,l)}else u=nf(n,t,e,l,r);return Bl(u)}Yi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(ka(t,n|1),rt(t,_e()),(me&6)===0&&(Bn=_e()+500,Zt()))}break;case 13:vn(function(){var r=At(e,1);if(r!==null){var l=Ze();kt(r,e,1,l)}}),Zo(e,1)}},ba=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Ze();kt(t,e,134217728,n)}Zo(e,134217728)}},Gi=function(e){if(e.tag===13){var t=rn(e),n=At(e,t);if(n!==null){var r=Ze();kt(n,e,t,r)}Zo(e,t)}},Ki=function(){return ye},Qi=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}},ga=function(e,t,n){switch(t){case"input":if(ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(s(90));Ee(r),ia(r,l)}}}break;case"textarea":Ni(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}},Ii=Wo,Pi=vn;var rf={usingClientEntryPoint:!1,Events:[kr,zn,dl,Li,zi,Wo]},_r={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lf={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ui(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||tf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Yr=Ql.inject(lf),Nt=Ql}catch{}}return lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf,lt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jo(t))throw Error(s(200));return ef(e,t,null,n)},lt.createRoot=function(e,t){if(!Jo(e))throw Error(s(299));var n=!1,r="",l=dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Xo(e,1,!1,null,null,n,!1,r,l),e[Lt]=t.current,xr(e.nodeType===8?e.parentNode:e),new qo(t)},lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ui(t),e=e===null?null:e.stateNode,e},lt.flushSync=function(e){return vn(e)},lt.hydrate=function(e,t,n){if(!Gl(t))throw Error(s(200));return Kl(null,e,t,!0,n)},lt.hydrateRoot=function(e,t,n){if(!Jo(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,l=!1,a="",u=dc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=uc(t,null,e,1,n??null,l,!1,a,u),e[Lt]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Yl(t)},lt.render=function(e,t,n){if(!Gl(t))throw Error(s(200));return Kl(null,e,t,!1,n)},lt.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(s(40));return e._reactRootContainer?(vn(function(){Kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},lt.unstable_batchedUpdates=Wo,lt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Kl(e,t,n,!1,r)},lt.version="18.3.1-next-f1338f8080-20240426",lt}var yc;function df(){if(yc)return ti.exports;yc=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),ti.exports=cf(),ti.exports}var xc;function pf(){if(xc)return Xl;xc=1;var i=df();return Xl.createRoot=i.createRoot,Xl.hydrateRoot=i.hydrateRoot,Xl}var ff=pf();const mf=zc(ff);/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fi=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Pc=/^[\\/]{2}/;function gf(i,c){return c+i.replace(/\\/g,"/")}var Ec="popstate";function wc(i){return typeof i=="object"&&i!=null&&"pathname"in i&&"search"in i&&"hash"in i&&"state"in i&&"key"in i}function hf(i={}){function c(d,p){var C;let m=(C=p.state)==null?void 0:C.masked,{pathname:v,search:y,hash:k}=m||d.location;return ci("",{pathname:v,search:y,hash:k},p.state&&p.state.usr||null,p.state&&p.state.key||"default",m?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function s(d,p){return typeof p=="string"?p:Gn(p)}return yf(c,s,null,i)}function ze(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function Ot(i,c){if(!i){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function vf(){return Math.random().toString(36).substring(2,10)}function kc(i,c){return{usr:i.state,key:i.key,idx:c,masked:i.mask?{pathname:i.pathname,search:i.search,hash:i.hash}:void 0}}function ci(i,c,s=null,d,p){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof c=="string"?Qn(c):c,state:s,key:c&&c.key||d||vf(),mask:p}}function Gn({pathname:i="/",search:c="",hash:s=""}){return c&&c!=="?"&&(i+=c.charAt(0)==="?"?c:"?"+c),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function Qn(i){let c={};if(i){let s=i.indexOf("#");s>=0&&(c.hash=i.substring(s),i=i.substring(0,s));let d=i.indexOf("?");d>=0&&(c.search=i.substring(d),i=i.substring(0,d)),i&&(c.pathname=i)}return c}function yf(i,c,s,d={}){let{window:p=document.defaultView,v5Compat:m=!1}=d,v=p.history,y="POP",k=null,C=N();C==null&&(C=0,v.replaceState({...v.state,idx:C},""));function N(){return(v.state||{idx:null}).idx}function R(){y="POP";let P=N(),A=P==null?null:P-C;C=P,k&&k({action:y,location:L.location,delta:A})}function I(P,A){y="PUSH";let G=wc(P)?P:ci(L.location,P,A);C=N()+1;let X=kc(G,C),ne=L.createHref(G.mask||G);try{v.pushState(X,"",ne)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;p.location.assign(ne)}m&&k&&k({action:y,location:L.location,delta:1})}function $(P,A){y="REPLACE";let G=wc(P)?P:ci(L.location,P,A);C=N();let X=kc(G,C),ne=L.createHref(G.mask||G);v.replaceState(X,"",ne),m&&k&&k({action:y,location:L.location,delta:0})}function D(P){return xf(p,P)}let L={get action(){return y},get location(){return i(p,v)},listen(P){if(k)throw new Error("A history only accepts one active listener");return p.addEventListener(Ec,R),k=P,()=>{p.removeEventListener(Ec,R),k=null}},createHref(P){return c(p,P)},createURL:D,encodeLocation(P){let A=D(P);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:I,replace:$,go(P){return v.go(P)}};return L}function xf(i,c,s=!1){let d="http://localhost";i&&(d=i.location.origin!=="null"?i.location.origin:i.location.href),ze(d,"No window.location.(origin|href) available to create URL");let p=typeof c=="string"?c:Gn(c);return p=p.replace(/ $/,"%20"),!s&&Pc.test(p)&&(p=d+p),new URL(p,d)}function Ac(i,c,s="/"){return Ef(i,c,s,!1)}function Ef(i,c,s,d,p){let m=typeof c=="string"?Qn(c):c,v=Ft(m.pathname||"/",s);if(v==null)return null;let y=wf(i),k=null,C=zf(v);for(let N=0;k==null&&N<y.length;++N)k=Lf(y[N],C,d);return k}function wf(i){let c=_c(i);return kf(c),c}function _c(i,c=[],s=[],d="",p=!1){let m=(v,y,k=p,C)=>{let N={relativePath:C===void 0?v.path||"":C,caseSensitive:v.caseSensitive===!0,childrenIndex:y,route:v};if(N.relativePath.startsWith("/")){if(!N.relativePath.startsWith(d)&&k)return;ze(N.relativePath.startsWith(d),`Absolute route path "${N.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),N.relativePath=N.relativePath.slice(d.length)}let R=bt([d,N.relativePath]),I=s.concat(N);v.children&&v.children.length>0&&(ze(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),_c(v.children,c,I,R,k)),!(v.path==null&&!v.index)&&c.push({path:R,score:Of(R,v.index),routesMeta:I.map(($,D)=>{let[L,P]=Fc($.relativePath,$.caseSensitive,D===I.length-1);return{...$,matcher:L,compiledParams:P}})})};return i.forEach((v,y)=>{var k;if(v.path===""||!((k=v.path)!=null&&k.includes("?")))m(v,y);else for(let C of Dc(v.path))m(v,y,!0,C)}),c}function Dc(i){let c=i.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),m=s.replace(/\?$/,"");if(d.length===0)return p?[m,""]:[m];let v=Dc(d.join("/")),y=[];return y.push(...v.map(k=>k===""?m:[m,k].join("/"))),p&&y.push(...v),y.map(k=>i.startsWith("/")&&k===""?"/":k)}function kf(i){i.sort((c,s)=>c.score!==s.score?s.score-c.score:Mf(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}var bf=/^:[\w-]+$/,Nf=3,Sf=2,Rf=1,Cf=10,Tf=-2,bc=i=>i==="*";function Of(i,c){let s=i.split("/"),d=s.length;return s.some(bc)&&(d+=Tf),c&&(d+=Sf),s.filter(p=>!bc(p)).reduce((p,m)=>p+(bf.test(m)?Nf:m===""?Rf:Cf),d)}function Mf(i,c){return i.length===c.length&&i.slice(0,-1).every((d,p)=>d===c[p])?i[i.length-1]-c[c.length-1]:0}function Lf(i,c,s=!1){let{routesMeta:d}=i,p={},m="/",v=[];for(let y=0;y<d.length;++y){let k=d[y],C=y===d.length-1,N=m==="/"?c:c.slice(m.length)||"/",R={path:k.relativePath,caseSensitive:k.caseSensitive,end:C},I=k.matcher&&k.compiledParams?Uc(R,N,k.matcher,k.compiledParams):na(R,N),$=k.route;if(!I&&C&&s&&!d[d.length-1].route.index&&(I=na({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},N)),!I)return null;Object.assign(p,I.params),v.push({params:p,pathname:bt([m,I.pathname]),pathnameBase:Af(bt([m,I.pathnameBase])),route:$}),I.pathnameBase!=="/"&&(m=bt([m,I.pathnameBase]))}return v}function na(i,c){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,d]=Fc(i.path,i.caseSensitive,i.end);return Uc(i,c,s,d)}function Uc(i,c,s,d){let p=c.match(s);if(!p)return null;let m=p[0],v=Kn(m,1),y=p.slice(1);return{params:d.reduce((C,{paramName:N,isOptional:R},I)=>{if(N==="*"){let D=y[I]||"";v=Kn(m.slice(0,m.length-D.length),1)}const $=y[I];return R&&!$?C[N]=void 0:C[N]=($||"").replace(/%2F/g,"/"),C},{}),pathname:m,pathnameBase:v,pattern:i}}function Fc(i,c=!1,s=!0){Ot(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let d=[],p="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,y,k,C,N)=>{if(d.push({paramName:y,isOptional:k!=null}),k){let R=N.charAt(C+v.length);return R&&R!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(d.push({paramName:"*"}),p+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":i!==""&&i!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function zf(i){try{return i.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ot(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),i}}function Ft(i,c){if(c==="/")return i;if(!i.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=i.charAt(s);return d&&d!=="/"?null:i.slice(s)||"/"}function If(i,c="/"){let{pathname:s,search:d="",hash:p=""}=typeof i=="string"?Qn(i):i,m;return s?(s=jc(s),s.startsWith("/")||s.startsWith("\\")?m=Nc(s.substring(1),"/"):m=Nc(s,c)):m=c,{pathname:m,search:_f(d),hash:Df(p)}}function Nc(i,c){let s=Kn(c).split("/");return i.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function li(i,c,s,d){return`Cannot include a '${i}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pf(i){return i.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Vc(i){let c=Pf(i);return c.map((s,d)=>d===c.length-1?s.pathname:s.pathnameBase)}function mi(i,c,s,d=!1){let p;typeof i=="string"?p=Qn(i):(p={...i},ze(!p.pathname||!p.pathname.includes("?"),li("?","pathname","search",p)),ze(!p.pathname||!p.pathname.includes("#"),li("#","pathname","hash",p)),ze(!p.search||!p.search.includes("#"),li("#","search","hash",p)));let m=i===""||p.pathname==="",v=m?"/":p.pathname,y;if(v==null)y=s;else{let R=c.length-1;if(!d&&v.startsWith("..")){let I=v.split("/");for(;I[0]==="..";)I.shift(),R-=1;p.pathname=I.join("/")}y=R>=0?c[R]:"/"}let k=If(p,y),C=v&&v!=="/"&&v.endsWith("/"),N=(m||v===".")&&s.endsWith("/");return!k.pathname.endsWith("/")&&(C||N)&&(k.pathname+="/"),k}var jc=i=>i.replace(/[\\/]{2,}/g,"/"),bt=i=>jc(i.join("/"));function Kn(i,c=0){let s=i.length;for(;s>c&&i.charCodeAt(s-1)===47;)s--;return s===i.length?i:i.slice(0,s)}var Af=i=>Kn(i).replace(/^\/*/,"/"),_f=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Df=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,Uf=class{constructor(i,c,s,d=!1){this.status=i,this.statusText=c||"",this.internal=d,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Ff(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function Vf(i){let c=i.map(s=>s.route.path).filter(Boolean);return bt(c)||"/"}var $c=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hc(i,c){let s=i;if(typeof s!="string"||!fi.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let d=s,p=!1;if($c)try{let m=new URL(window.location.href),v=Pc.test(s)?new URL(gf(s,m.protocol)):new URL(s),y=Ft(v.pathname,c);v.origin===m.origin&&y!=null?s=y+v.search+v.hash:p=!0}catch{Ot(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:p,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sc=new URL("http://localhost");function Wc(i){if(i.createURL)return i.createURL("/");try{return new URL(i.createHref("/"),Sc)}catch{return Sc}}function ai(i,c){return i.origin===c.origin&&(i.origin!=="null"||i.protocol===c.protocol&&i.host===c.host)}function jf(i,c){if(i.startsWith("//"))return!0;let s=c.protocol.toLowerCase();return i.toLowerCase().startsWith(s)?c.host===""||i.slice(s.length).startsWith("//"):!1}function Bc(i,c,s,d){let p=null;try{p=i==null?null:new URL(i,s)}catch{}let m=new URL(c,s),v=p!=null&&!ai(p,s),y=!ai(m,s);if(d==="reject"){if(v||y)throw new Error("External navigation is not allowed")}else if(y&&(p==null||!jf(i,p)||!ai(p,m)))throw new Error("External navigation is not allowed")}var Yc=["POST","PUT","PATCH","DELETE"];new Set(Yc);var $f=["GET",...Yc];new Set($f);var Hf=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Wf(i){try{return Hf.includes(new URL(i).protocol)}catch{return!1}}var Xn=x.createContext(null);Xn.displayName="DataRouter";var la=x.createContext(null);la.displayName="DataRouterState";var Gc=x.createContext(!1);function Bf(){return x.useContext(Gc)}var Kc=x.createContext({isTransitioning:!1});Kc.displayName="ViewTransition";var Yf=x.createContext(new Map);Yf.displayName="Fetchers";var Gf=x.createContext(null);Gf.displayName="Await";var gt=x.createContext(null);gt.displayName="Navigation";var Fr=x.createContext(null);Fr.displayName="Location";var Vt=x.createContext({outlet:null,matches:[],isDataRoute:!1});Vt.displayName="Route";var gi=x.createContext(null);gi.displayName="RouteError";var Qc="REACT_ROUTER_ERROR",Kf="REDIRECT",Qf="ROUTE_ERROR_RESPONSE";function Xf(i){if(i.startsWith(`${Qc}:${Kf}:{`))try{let c=JSON.parse(i.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function Zf(i){if(i.startsWith(`${Qc}:${Qf}:{`))try{let c=JSON.parse(i.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Uf(c.status,c.statusText,c.data)}catch{}}function qf(i,{relative:c}={}){ze(Vr(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:d}=x.useContext(gt),{hash:p,pathname:m,search:v}=jr(i,{relative:c}),y=m;return s!=="/"&&(y=m==="/"?s:bt([s,m])),d.createHref({pathname:y,search:v,hash:p})}function Vr(){return x.useContext(Fr)!=null}function jt(){return ze(Vr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Fr).location}var Xc="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zc(i){x.useContext(gt).static||x.useLayoutEffect(i)}function Jf(){let{isDataRoute:i}=x.useContext(Vt);return i?pm():em()}function em(){ze(Vr(),"useNavigate() may be used only in the context of a <Router> component.");let i=x.useContext(Xn),{basename:c,navigator:s}=x.useContext(gt),{matches:d}=x.useContext(Vt),{pathname:p}=jt(),m=JSON.stringify(Vc(d)),v=x.useRef(!1);return Zc(()=>{v.current=!0}),x.useCallback((k,C={})=>{if(Ot(v.current,Xc),!v.current)return;if(typeof k=="number"){s.go(k);return}let N=mi(k,JSON.parse(m),p,C.relative==="path");i==null&&c!=="/"&&(N.pathname=N.pathname==="/"?c:bt([c,N.pathname])),Bc(typeof k=="string"?k:Gn(k),s.createHref(N),Wc(s),"reject"),(C.replace?s.replace:s.push)(N,C.state,C)},[c,s,m,p,i])}x.createContext(null);function jr(i,{relative:c}={}){let{matches:s}=x.useContext(Vt),{pathname:d}=jt(),p=JSON.stringify(Vc(s));return x.useMemo(()=>mi(i,JSON.parse(p),d,c==="path"),[i,p,d,c])}function tm(i,c){return qc(i,c)}function qc(i,c,s){var P;ze(Vr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=x.useContext(gt),{matches:p}=x.useContext(Vt),m=p[p.length-1],v=m?m.params:{},y=m?m.pathname:"/",k=m?m.pathnameBase:"/",C=m&&m.route;{let A=C&&C.path||"";ed(y,!C||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let N=jt(),R;if(c){let A=typeof c=="string"?Qn(c):c;ze(k==="/"||((P=A.pathname)==null?void 0:P.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${A.pathname}" was given in the \`location\` prop.`),R=A}else R=N;let I=R.pathname||"/",$=I;if(k!=="/"){let A=k.replace(/^\//,"").split("/");$="/"+I.replace(/^\//,"").split("/").slice(A.length).join("/")}let D=s&&s.state.matches.length?s.state.matches.map(A=>Object.assign(A,{route:s.manifest[A.route.id]||A.route})):Ac(i,{pathname:$});Ot(C||D!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Ot(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let L=om(D&&D.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:bt([k,d.encodeLocation?d.encodeLocation(A.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?k:bt([k,d.encodeLocation?d.encodeLocation(A.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),p,s);return c&&L?x.createElement(Fr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...R},navigationType:"POP"}},L):L}function nm(){let i=dm(),c=Ff(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},m={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:m},"ErrorBoundary")," or"," ",x.createElement("code",{style:m},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},c),s?x.createElement("pre",{style:p},s):null,v)}var rm=x.createElement(nm,null),Jc=class extends x.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,c){return c.location!==i.location||c.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:c.error,location:c.location,revalidation:i.revalidation||c.revalidation}}componentDidCatch(i,c){this.props.onError?this.props.onError(i,c):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const s=Zf(i.digest);s&&(i=s)}let c=i!==void 0?x.createElement(Vt.Provider,{value:this.props.routeContext},x.createElement(gi.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?x.createElement(lm,{error:i},c):c}};Jc.contextType=Gc;var oi=new WeakMap;function lm({children:i,error:c}){let{basename:s,navigator:d}=x.useContext(gt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let p=Xf(c.digest);if(p){let m=oi.get(c);if(m)throw m;let v=Hc(p.location,s),y=v.absoluteURL||v.to;if(Bc(p.location,y,Wc(d),"allow-explicit"),Wf(y))throw new Error("Invalid redirect location");if($c&&!oi.get(c))if(v.isExternal||p.reloadDocument)window.location.href=y;else{const k=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(v.to,{replace:p.replace}));throw oi.set(c,k),k}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${y}`})}}return i}function am({routeContext:i,match:c,children:s}){let d=x.useContext(Xn);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),x.createElement(Vt.Provider,{value:i},s)}function om(i,c=[],s){let d=s==null?void 0:s.state;if(i==null){if(!d)return null;if(d.errors)i=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)i=d.matches;else return null}let p=i,m=d==null?void 0:d.errors;if(m!=null){let N=p.findIndex(R=>R.route.id&&(m==null?void 0:m[R.route.id])!==void 0);ze(N>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(m).join(",")}`),p=p.slice(0,Math.min(p.length,N+1))}let v=!1,y=-1;if(s&&d){v=d.renderFallback;for(let N=0;N<p.length;N++){let R=p[N];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(y=N),R.route.id){let{loaderData:I,errors:$}=d,D=R.route.loader&&!I.hasOwnProperty(R.route.id)&&(!$||$[R.route.id]===void 0);if(R.route.lazy||D){s.isStatic&&(v=!0),y>=0?p=p.slice(0,y+1):p=[p[0]];break}}}}let k=s==null?void 0:s.onError,C=d&&k?(N,R)=>{var I,$;k(N,{location:d.location,params:(($=(I=d.matches)==null?void 0:I[0])==null?void 0:$.params)??{},pattern:Vf(d.matches),errorInfo:R})}:void 0;return p.reduceRight((N,R,I)=>{let $,D=!1,L=null,P=null;d&&($=m&&R.route.id?m[R.route.id]:void 0,L=R.route.errorElement||rm,v&&(y<0&&I===0?(ed("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,P=null):y===I&&(D=!0,P=R.route.hydrateFallbackElement||null)));let A=c.concat(p.slice(0,I+1)),G=()=>{let X;return $?X=L:D?X=P:R.route.Component?X=x.createElement(R.route.Component,null):R.route.element?X=R.route.element:X=N,x.createElement(am,{match:R,routeContext:{outlet:N,matches:A,isDataRoute:d!=null},children:X})};return d&&(R.route.ErrorBoundary||R.route.errorElement||I===0)?x.createElement(Jc,{location:d.location,revalidation:d.revalidation,component:L,error:$,children:G(),routeContext:{outlet:null,matches:A,isDataRoute:!0},onError:C}):G()},null)}function hi(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function im(i){let c=x.useContext(Xn);return ze(c,hi(i)),c}function sm(i){let c=x.useContext(la);return ze(c,hi(i)),c}function um(i){let c=x.useContext(Vt);return ze(c,hi(i)),c}function vi(i){let c=um(i),s=c.matches[c.matches.length-1];return ze(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function cm(){return vi("useRouteId")}function dm(){var d;let i=x.useContext(gi),c=sm("useRouteError"),s=vi("useRouteError");return i!==void 0?i:(d=c.errors)==null?void 0:d[s]}function pm(){let{router:i}=im("useNavigate"),c=vi("useNavigate"),s=x.useRef(!1);return Zc(()=>{s.current=!0}),x.useCallback(async(p,m={})=>{Ot(s.current,Xc),s.current&&(typeof p=="number"?await i.navigate(p):await i.navigate(p,{fromRouteId:c,...m}))},[i,c])}var Rc={};function ed(i,c,s){!c&&!Rc[i]&&(Rc[i]=!0,Ot(!1,s))}x.memo(fm);function fm({routes:i,manifest:c,future:s,state:d,isStatic:p,onError:m}){return qc(i,void 0,{manifest:c,state:d,isStatic:p,onError:m})}function wn(i){ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mm({basename:i="/",children:c=null,location:s,navigationType:d="POP",navigator:p,static:m=!1,useTransitions:v}){ze(!Vr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=i.replace(/^\/*/,"/"),k=x.useMemo(()=>({basename:y,navigator:p,static:m,useTransitions:v,future:{}}),[y,p,m,v]);typeof s=="string"&&(s=Qn(s));let{pathname:C="/",search:N="",hash:R="",state:I=null,key:$="default",mask:D}=s,L=x.useMemo(()=>{let P=Ft(C,y);return P==null?null:{location:{pathname:P,search:N,hash:R,state:I,key:$,mask:D},navigationType:d}},[y,C,N,R,I,$,d,D]);return Ot(L!=null,`<Router basename="${y}"> is not able to match the URL "${C}${N}${R}" because it does not start with the basename, so the <Router> won't render anything.`),L==null?null:x.createElement(gt.Provider,{value:k},x.createElement(Fr.Provider,{children:c,value:L}))}function gm({children:i,location:c}){return tm(di(i),c)}function di(i,c=[]){let s=[];return x.Children.forEach(i,(d,p)=>{if(!x.isValidElement(d))return;let m=[...c,p];if(d.type===x.Fragment){s.push.apply(s,di(d.props.children,m));return}ze(d.type===wn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ze(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=di(d.props.children,m)),s.push(v)}),s}var Jl="get",ea="application/x-www-form-urlencoded";function aa(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function hm(i){return aa(i)&&i.tagName.toLowerCase()==="button"}function vm(i){return aa(i)&&i.tagName.toLowerCase()==="form"}function ym(i){return aa(i)&&i.tagName.toLowerCase()==="input"}function xm(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function Em(i,c){return i.button===0&&(!c||c==="_self")&&!xm(i)}var Zl=null;function wm(){if(Zl===null)try{new FormData(document.createElement("form"),0),Zl=!1}catch{Zl=!0}return Zl}var km=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ii(i){return i!=null&&!km.has(i)?(Ot(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ea}"`),null):i}function bm(i,c){let s,d,p,m,v;if(vm(i)){let y=i.getAttribute("action");d=y?Ft(y,c):null,s=i.getAttribute("method")||Jl,p=ii(i.getAttribute("enctype"))||ea,m=new FormData(i)}else if(hm(i)||ym(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=i.getAttribute("formaction")||y.getAttribute("action");if(d=k?Ft(k,c):null,s=i.getAttribute("formmethod")||y.getAttribute("method")||Jl,p=ii(i.getAttribute("formenctype"))||ii(y.getAttribute("enctype"))||ea,m=new FormData(y,i),!wm()){let{name:C,type:N,value:R}=i;if(N==="image"){let I=C?`${C}.`:"";m.append(`${I}x`,"0"),m.append(`${I}y`,"0")}else C&&m.append(C,R)}}else{if(aa(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=Jl,d=null,p=ea,v=i}return m&&p==="text/plain"&&(v=m,m=void 0),{action:d,method:s.toLowerCase(),encType:p,formData:m,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yi(i,c){if(i===!1||i===null||typeof i>"u")throw new Error(c)}function td(i,c,s,d){let p=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${d}`:p.pathname=`${p.pathname}.${d}`:p.pathname==="/"?p.pathname=`_root.${d}`:c&&Ft(p.pathname,c)==="/"?p.pathname=`${Kn(c)}/_root.${d}`:p.pathname=`${Kn(p.pathname)}.${d}`,p}async function Nm(i,c){if(i.id in c)return c[i.id];try{let s=await import(i.module);return c[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sm(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function Rm(i,c,s){let d=await Promise.all(i.map(async p=>{let m=c.routes[p.route.id];if(m){let v=await Nm(m,s);return v.links?v.links():[]}return[]}));return Mm(d.flat(1).filter(Sm).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function Cc(i,c,s,d,p,m){let v=(k,C)=>s[C]?k.route.id!==s[C].route.id:!0,y=(k,C)=>{var N;return s[C].pathname!==k.pathname||((N=s[C].route.path)==null?void 0:N.endsWith("*"))&&s[C].params["*"]!==k.params["*"]};return m==="assets"?c.filter((k,C)=>v(k,C)||y(k,C)):m==="data"?c.filter((k,C)=>{var R;let N=d.routes[k.route.id];if(!N||!N.hasLoader)return!1;if(v(k,C)||y(k,C))return!0;if(k.route.shouldRevalidate){let I=k.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((R=s[0])==null?void 0:R.params)||{},nextUrl:new URL(i,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function Cm(i,c,{includeHydrateFallback:s}={}){return Tm(i.map(d=>{let p=c.routes[d.route.id];if(!p)return[];let m=[p.module];return p.clientActionModule&&(m=m.concat(p.clientActionModule)),p.clientLoaderModule&&(m=m.concat(p.clientLoaderModule)),s&&p.hydrateFallbackModule&&(m=m.concat(p.hydrateFallbackModule)),p.imports&&(m=m.concat(p.imports)),m}).flat(1))}function Tm(i){return[...new Set(i)]}function Om(i){let c={},s=Object.keys(i).sort();for(let d of s)c[d]=i[d];return c}function Mm(i,c){let s=new Set;return new Set(c),i.reduce((d,p)=>{let m=JSON.stringify(Om(p));return s.has(m)||(s.add(m),d.push({key:m,link:p})),d},[])}function xi(){let i=x.useContext(Xn);return yi(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Lm(){let i=x.useContext(la);return yi(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var Ei=x.createContext(void 0);Ei.displayName="FrameworkContext";function oa(){let i=x.useContext(Ei);return yi(i,"You must render this element inside a <HydratedRouter> element"),i}function zm(i,c){let s=x.useContext(Ei),[d,p]=x.useState(!1),[m,v]=x.useState(!1),{onFocus:y,onBlur:k,onMouseEnter:C,onMouseLeave:N,onTouchStart:R}=c,I=x.useRef(null);x.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let L=A=>{A.forEach(G=>{v(G.isIntersecting)})},P=new IntersectionObserver(L,{threshold:.5});return I.current&&P.observe(I.current),()=>{P.disconnect()}}},[i]),x.useEffect(()=>{if(d){let L=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(L)}}},[d]);let $=()=>{p(!0)},D=()=>{p(!1),v(!1)};return s?i!=="intent"?[m,I,{}]:[m,I,{onFocus:Dr(y,$),onBlur:Dr(k,D),onMouseEnter:Dr(C,$),onMouseLeave:Dr(N,D),onTouchStart:Dr(R,$)}]:[!1,I,{}]}function Dr(i,c){return s=>{i&&i(s),s.defaultPrevented||c(s)}}function Im({page:i,...c}){let s=Bf(),{nonce:d}=oa(),{router:p}=xi(),m=x.useMemo(()=>Ac(p.routes,i,p.basename),[p.routes,i,p.basename]);return m?(c.nonce==null&&d&&(c={...c,nonce:d}),s?x.createElement(Am,{page:i,matches:m,...c}):x.createElement(_m,{page:i,matches:m,...c})):null}function Pm(i){let{manifest:c,routeModules:s}=oa(),[d,p]=x.useState([]);return x.useEffect(()=>{let m=!1;return Rm(i,c,s).then(v=>{m||p(v)}),()=>{m=!0}},[i,c,s]),d}function Am({page:i,matches:c,...s}){let d=jt(),{future:p}=oa(),{basename:m}=xi(),v=x.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let y=td(i,m,p.v8_trailingSlashAwareDataRequests,"rsc"),k=!1,C=[];for(let N of c)typeof N.route.shouldRevalidate=="function"?k=!0:C.push(N.route.id);return k&&C.length>0&&y.searchParams.set("_routes",C.join(",")),[y.pathname+y.search]},[m,p.v8_trailingSlashAwareDataRequests,i,d,c]);return x.createElement(x.Fragment,null,v.map(y=>x.createElement("link",{key:y,rel:"prefetch",as:"fetch",href:y,...s})))}function _m({page:i,matches:c,...s}){let d=jt(),{future:p,manifest:m,routeModules:v}=oa(),{basename:y}=xi(),{loaderData:k,matches:C}=Lm(),N=x.useMemo(()=>Cc(i,c,C,m,d,"data"),[i,c,C,m,d]),R=x.useMemo(()=>Cc(i,c,C,m,d,"assets"),[i,c,C,m,d]),I=x.useMemo(()=>{if(i===d.pathname+d.search+d.hash)return[];let L=new Set,P=!1;if(c.forEach(G=>{var ne;let X=m.routes[G.route.id];!X||!X.hasLoader||(!N.some(ae=>ae.route.id===G.route.id)&&G.route.id in k&&((ne=v[G.route.id])!=null&&ne.shouldRevalidate)||X.hasClientLoader?P=!0:L.add(G.route.id))}),L.size===0)return[];let A=td(i,y,p.v8_trailingSlashAwareDataRequests,"data");return P&&L.size>0&&A.searchParams.set("_routes",c.filter(G=>L.has(G.route.id)).map(G=>G.route.id).join(",")),[A.pathname+A.search]},[y,p.v8_trailingSlashAwareDataRequests,k,d,m,N,c,i,v]),$=x.useMemo(()=>Cm(R,m),[R,m]),D=Pm(R);return x.createElement(x.Fragment,null,I.map(L=>x.createElement("link",{key:L,rel:"prefetch",as:"fetch",href:L,...s})),$.map(L=>x.createElement("link",{key:L,rel:"modulepreload",href:L,...s})),D.map(({key:L,link:P})=>x.createElement("link",{key:L,nonce:s.nonce,...P,crossOrigin:P.crossOrigin??s.crossOrigin})))}function Dm(...i){return c=>{i.forEach(s=>{typeof s=="function"?s(c):s!=null&&(s.current=c)})}}var Um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Um&&(window.__reactRouterVersion="7.18.3")}catch{}function Fm({basename:i,children:c,useTransitions:s,window:d}){let p=x.useRef();p.current==null&&(p.current=hf({window:d,v5Compat:!0}));let m=p.current,[v,y]=x.useState({action:m.action,location:m.location}),k=x.useCallback(C=>{s===!1?y(C):x.startTransition(()=>y(C))},[s]);return x.useLayoutEffect(()=>m.listen(k),[m,k]),x.createElement(mm,{basename:i,children:c,location:v.location,navigationType:v.action,navigator:m,useTransitions:s})}var nd=x.forwardRef(function({onClick:c,discover:s="render",prefetch:d="none",relative:p,reloadDocument:m,replace:v,mask:y,state:k,target:C,to:N,preventScrollReset:R,viewTransition:I,defaultShouldRevalidate:$,...D},L){let{basename:P,navigator:A,useTransitions:G}=x.useContext(gt),X=typeof N=="string"&&fi.test(N),ne=Hc(N,P);N=ne.to;let ae=qf(N,{relative:p}),se=jt(),ve=null;if(y){let te=mi(y,[],se.mask?se.mask.pathname:"/",!0);P!=="/"&&(te.pathname=te.pathname==="/"?P:bt([P,te.pathname])),ve=A.createHref(te)}let[j,F,ie]=zm(d,D),Pe=$m(N,{replace:v,mask:y,state:k,target:C,preventScrollReset:R,relative:p,viewTransition:I,defaultShouldRevalidate:$,useTransitions:G});function Se(te){c&&c(te),te.defaultPrevented||Pe(te)}let Re=!(ne.isExternal||m),ee=x.createElement("a",{...D,...ie,href:(Re?ve:void 0)||ne.absoluteURL||ae,onClick:Re?Se:c,ref:Dm(L,F),target:C,"data-discover":!X&&s==="render"?"true":void 0});return j&&!X?x.createElement(x.Fragment,null,ee,x.createElement(Im,{page:ae})):ee});nd.displayName="Link";var pi=x.forwardRef(function({"aria-current":c="page",caseSensitive:s=!1,className:d="",end:p=!1,style:m,to:v,viewTransition:y,children:k,...C},N){let R=jr(v,{relative:C.relative}),I=jt(),$=x.useContext(la),{navigator:D,basename:L}=x.useContext(gt),P=$!=null&&Gm(R)&&y===!0,A=D.encodeLocation?D.encodeLocation(R).pathname:R.pathname,G=I.pathname,X=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;s||(G=G.toLowerCase(),X=X?X.toLowerCase():null,A=A.toLowerCase()),X&&L&&(X=Ft(X,L)||X);const ne=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let ae=G===A||!p&&G.startsWith(A)&&G.charAt(ne)==="/",se=X!=null&&(X===A||!p&&X.startsWith(A)&&X.charAt(A.length)==="/"),ve={isActive:ae,isPending:se,isTransitioning:P},j=ae?c:void 0,F;typeof d=="function"?F=d(ve):F=[d,ae?"active":null,se?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let ie=typeof m=="function"?m(ve):m;return x.createElement(nd,{...C,"aria-current":j,className:F,ref:N,style:ie,to:v,viewTransition:y},typeof k=="function"?k(ve):k)});pi.displayName="NavLink";var Vm=x.forwardRef(({discover:i="render",fetcherKey:c,navigate:s,reloadDocument:d,replace:p,state:m,method:v=Jl,action:y,onSubmit:k,relative:C,preventScrollReset:N,viewTransition:R,defaultShouldRevalidate:I,...$},D)=>{let{useTransitions:L}=x.useContext(gt),P=Bm(),A=Ym(y,{relative:C}),G=v.toLowerCase()==="get"?"get":"post",X=typeof y=="string"&&fi.test(y),ne=ae=>{if(k&&k(ae),ae.defaultPrevented)return;ae.preventDefault();let se=ae.nativeEvent.submitter,ve=(se==null?void 0:se.getAttribute("formmethod"))||v,j=()=>P(se||ae.currentTarget,{fetcherKey:c,method:ve,navigate:s,replace:p,state:m,relative:C,preventScrollReset:N,viewTransition:R,defaultShouldRevalidate:I});L&&s!==!1?x.startTransition(()=>j()):j()};return x.createElement("form",{ref:D,method:G,action:A,onSubmit:d?k:ne,...$,"data-discover":!X&&i==="render"?"true":void 0})});Vm.displayName="Form";function jm(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rd(i){let c=x.useContext(Xn);return ze(c,jm(i)),c}function $m(i,{target:c,replace:s,mask:d,state:p,preventScrollReset:m,relative:v,viewTransition:y,defaultShouldRevalidate:k,useTransitions:C}={}){let N=Jf(),R=jt(),I=jr(i,{relative:v});return x.useCallback($=>{if(Em($,c)){$.preventDefault();let D=s!==void 0?s:Gn(R)===Gn(I),L=()=>N(i,{replace:D,mask:d,state:p,preventScrollReset:m,relative:v,viewTransition:y,defaultShouldRevalidate:k});C?x.startTransition(()=>L()):L()}},[R,N,I,s,d,p,c,i,m,v,y,k,C])}var Hm=0,Wm=()=>`__${String(++Hm)}__`;function Bm(){let{router:i}=rd("useSubmit"),{basename:c}=x.useContext(gt),s=cm(),d=i.fetch,p=i.navigate;return x.useCallback(async(m,v={})=>{let{action:y,method:k,encType:C,formData:N,body:R}=bm(m,c);if(v.navigate===!1){let I=v.fetcherKey||Wm();await d(I,s,v.action||y,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:N,body:R,formMethod:v.method||k,formEncType:v.encType||C,flushSync:v.flushSync})}else await p(v.action||y,{defaultShouldRevalidate:v.defaultShouldRevalidate,preventScrollReset:v.preventScrollReset,formData:N,body:R,formMethod:v.method||k,formEncType:v.encType||C,replace:v.replace,state:v.state,fromRouteId:s,flushSync:v.flushSync,viewTransition:v.viewTransition})},[d,p,c,s])}function Ym(i,{relative:c}={}){let{basename:s}=x.useContext(gt),d=x.useContext(Vt);ze(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),m={...jr(i||".",{relative:c})},v=jt();if(i==null){m.search=v.search;let y=new URLSearchParams(m.search),k=y.getAll("index");if(k.some(N=>N==="")){y.delete("index"),k.filter(R=>R).forEach(R=>y.append("index",R));let N=y.toString();m.search=N?`?${N}`:""}}return(!i||i===".")&&p.route.index&&(m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(m.pathname=m.pathname==="/"?s:bt([s,m.pathname])),Gn(m)}function Gm(i,{relative:c}={}){let s=x.useContext(Kc);ze(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=rd("useViewTransitionState"),p=jr(i,{relative:c});if(!s.isTransitioning)return!1;let m=Ft(s.currentLocation.pathname,d)||s.currentLocation.pathname,v=Ft(s.nextLocation.pathname,d)||s.nextLocation.pathname;return na(p.pathname,v)!=null||na(p.pathname,m)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ld=(...i)=>i.filter((c,s,d)=>!!c&&c.trim()!==""&&d.indexOf(c)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=x.forwardRef(({color:i="currentColor",size:c=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:p="",children:m,iconNode:v,...y},k)=>x.createElement("svg",{ref:k,...Qm,width:c,height:c,stroke:i,strokeWidth:d?Number(s)*24/Number(c):s,className:ld("lucide",p),...y},[...v.map(([C,N])=>x.createElement(C,N)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(i,c)=>{const s=x.forwardRef(({className:d,...p},m)=>x.createElement(Xm,{ref:m,iconNode:c,className:ld(`lucide-${Km(i)}`,d),...p}));return s.displayName=`${i}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=de("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=de("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=de("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=de("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=de("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=de("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=de("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=de("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=de("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=de("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=de("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=de("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=de("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=de("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=de("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=de("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=de("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=de("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=de("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=de("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=de("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=de("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=de("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=de("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=de("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=de("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=de("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=de("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=de("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=de("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=de("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=de("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),hg=[{to:"/",label:"HOME",icon:tg},{to:"/mine-map",label:"MINE MAP",icon:ag},{to:"/rover-control",label:"ROVER CONTROL",icon:eg},{to:"/communication",label:"COMMUNICATION",icon:Ur},{to:"/live-view",label:"LIVE VIEW",icon:fg},{to:"/network",label:"NETWORK",icon:od}],vg=[{id:"hazards",title:"DETECT HAZARDS",description:"Monitor underground gases and environmental conditions to identify dangerous situations.",icon:ra},{id:"survivors",title:"LOCATE SURVIVORS",description:"Identify and display possible survivor locations to support rescue operations.",icon:ud},{id:"routes",title:"PLAN SAFE ROUTES",description:"Use underground condition data to identify safer paths for rover and rescue movement.",icon:id},{id:"rescue",title:"SUPPORT RESCUE",description:"Provide live underground information, rover status and communication support to rescue teams.",icon:ng}];function yg(){const[i,c]=x.useState(!1);return o.createElement("div",{className:"app"},o.createElement("header",{className:"topbar"},o.createElement(pi,{to:"/",className:"brand"},o.createElement("div",{className:"brand-symbol"},"M"),o.createElement("div",null,o.createElement("div",{className:"brand-name"},"MINE",o.createElement("span",null,"NOVA")),o.createElement("div",{className:"brand-subtitle"},"AI MINE RESCUE ROVER"))),o.createElement("nav",{className:"main-nav"},hg.map(({to:s,label:d,icon:p})=>o.createElement(pi,{key:s,to:s,className:({isActive:m})=>`nav-item ${m?"active":""}`},o.createElement(p,{size:16}),o.createElement("span",null,d)))),o.createElement("div",{className:"system-area"},o.createElement("div",{className:"system-status"},o.createElement("span",{className:"status-dot"}),o.createElement("div",null,o.createElement("strong",null,"SYSTEM ONLINE"),o.createElement("small",null,"ROVER-01 • LIVE SIMULATION"))),o.createElement("button",{className:"emergency-button",onClick:()=>c(!0)},o.createElement(Mc,{size:17}),"EMERGENCY STOP"))),i&&o.createElement("div",{className:"modal-backdrop"},o.createElement("div",{className:"modal emergency-modal"},o.createElement("button",{className:"modal-close",onClick:()=>c(!1)},o.createElement(wi,{size:20})),o.createElement(Mc,{size:44}),o.createElement("span",{className:"eyebrow"},"CRITICAL COMMAND"),o.createElement("h2",null,"EMERGENCY STOP"),o.createElement("p",null,"Stop ROVER-01 immediately?"),o.createElement("div",{style:{display:"flex",gap:10,marginTop:20}},o.createElement("button",{className:"confirm-stop",onClick:()=>c(!1)},"CONFIRM STOP"),o.createElement("button",{className:"secondary-action",onClick:()=>c(!1)},"CANCEL")))),o.createElement("main",null,o.createElement(gm,null,o.createElement(wn,{path:"/",element:o.createElement(xg,null)}),o.createElement(wn,{path:"/mine-map",element:o.createElement(wg,null)}),o.createElement(wn,{path:"/rover-control",element:o.createElement(kg,null)}),o.createElement(wn,{path:"/communication",element:o.createElement(bg,null)}),o.createElement(wn,{path:"/live-view",element:o.createElement(Ng,null)}),o.createElement(wn,{path:"/network",element:o.createElement(Sg,null)}))))}function xg(){const[i,c]=x.useState(null);return o.createElement("div",{className:"home-page"},o.createElement("style",null,`
        /* HOME ONLY: move the four feature cards slightly downward */
        .home-page .features-section {
          transform: translateY(62px);
        }

        /* HOME FEATURE POPUP ONLY: four clean cards in a 2 x 2 layout */
        .home-page .feature-modal .how-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .home-page .feature-modal .how-card {
          min-height: 82px;
          padding: 14px 15px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 10px;
          background: rgba(255,255,255,.035);
          display: flex;
          align-items: flex-start;
          gap: 12px;
          box-sizing: border-box;
        }

        .home-page .feature-modal .how-card > span {
          flex: 0 0 34px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(242,132,45,.75);
          border-radius: 7px;
          color: #f5a04f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .5px;
        }

        .home-page .feature-modal .how-card p {
          margin: 1px 0 0;
          font-size: 11px;
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255,255,255,.78);
        }

        @media (max-width: 720px) {
          .home-page .feature-modal .how-grid {
            grid-template-columns: 1fr;
          }
        }
      `),o.createElement("section",{className:"hero"},o.createElement("div",{className:"hero-overlay"}),o.createElement("div",{className:"hero-content"},o.createElement("div",{className:"hero-label"},o.createElement(sg,{size:15}),"AUTONOMOUS RESCUE TECHNOLOGY"),o.createElement("h1",null,"SAFER MINES.",o.createElement("br",null),o.createElement("span",null,"BRIGHTER TOMORROWS.")),o.createElement("p",null,"MineNova is an AI-powered underground mine rescue rover designed to explore hazardous zones, detect dangers, locate survivors and support rescue teams."),o.createElement("div",{className:"hero-stats"},o.createElement("div",null,o.createElement("strong",null,"AI"),o.createElement("span",null,"HAZARD ANALYSIS")),o.createElement("div",null,o.createElement("strong",null,"24/7"),o.createElement("span",null,"MONITORING")),o.createElement("div",null,o.createElement("strong",null,"REAL-TIME"),o.createElement("span",null,"RESCUE SUPPORT")))),o.createElement("div",{className:"features-section"},o.createElement("div",{className:"feature-grid"},vg.map(s=>{const d=s.icon;return o.createElement("button",{key:s.id,className:"feature-card",onClick:()=>c(s)},o.createElement("div",{className:"feature-icon"},o.createElement(d,{size:23})),o.createElement("div",{className:"feature-text"},o.createElement("h3",null,s.title),o.createElement("p",null,s.description)),o.createElement(Zm,{className:"feature-arrow",size:19}))}))),i&&o.createElement(Eg,{feature:i,onClose:()=>c(null)})))}function Eg({feature:i,onClose:c}){const s=i.icon,d={hazards:["Sensors continuously scan the underground atmosphere.","AI checks readings against dangerous-condition patterns.","Risky zones are detected before rescue teams enter.","Hazard locations are highlighted on the mine map."],survivors:["Camera and onboard sensing search for human presence.","AI analyses movement, heat and visual clues.","Possible survivor locations are marked on the map.","Rescue teams receive the location for faster response."],routes:["The rover evaluates tunnels and known hazard zones.","Blocked or dangerous sections are avoided.","A safer route is calculated from available paths.","The route can guide the rover and rescue team."],rescue:["Live rover information is shared with the rescue team.","Mine conditions help teams understand the danger ahead.","Map markers show hazards, survivors and rover position.","The system supports faster and safer rescue decisions."]}[i.id];return o.createElement("div",{className:"modal-backdrop"},o.createElement("div",{className:"modal feature-modal"},o.createElement("button",{className:"modal-close",onClick:c},o.createElement(wi,{size:20})),o.createElement("div",{className:"feature-icon large"},o.createElement(s,{size:30})),o.createElement("span",{className:"eyebrow"},"MINENOVA SYSTEM"),o.createElement("h2",null,i.title),o.createElement("p",null,i.description),o.createElement("div",{className:"how-grid"},d.map((p,m)=>o.createElement("div",{className:"how-card",key:p},o.createElement("span",null,"0",m+1),o.createElement("p",null,p))))))}function wg(){const[i,c]=x.useState(null),[s,d]=x.useState(0);x.useEffect(()=>{const y=setInterval(()=>{d(k=>(k+1)%8)},1400);return()=>clearInterval(y)},[]);const m=[{left:30.5,top:18.5},{left:34.5,top:21},{left:39,top:22.5},{left:43.5,top:20.5},{left:48,top:17.8},{left:51.5,top:18.8},{left:47,top:21.8},{left:40.5,top:23}][s],v=[{id:"hazard",type:"HAZARD",title:"TOXIC GAS ZONE",shortTitle:"DANGER",text:"AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed.",detail:"Gas risk: HIGH • Danger level: 78%",left:75,top:31.5,className:"hazard-marker",icon:o.createElement(ta,{size:18})},{id:"survivor",type:"SURVIVOR",title:"SURVIVOR LOCATION",shortTitle:"SURVIVOR",text:"Possible survivor presence detected at this point. Rescue teams can use this location as the current search target.",detail:"1 person detected • Search confidence: 78%",left:57,top:46,className:"survivor-marker",icon:o.createElement(ud,{size:18})},{id:"network",type:"NETWORK",title:"RELAY NODE 03",shortTitle:"NETWORK",text:"This relay node maintains the communication link between the rover and the surface gateway.",detail:"Signal: Strong • Link quality: 92%",left:82,top:29,className:"network-marker",icon:o.createElement(sd,{size:18})},{id:"water",type:"ENVIRONMENT",title:"WATER ZONE",shortTitle:"WATER",text:"Water accumulation has been detected in the lower tunnel area. The rover is monitoring this zone for changes.",detail:"Water level: Moderate",left:30,top:63,className:"water-marker",icon:o.createElement(ra,{size:18})}];return o.createElement("section",{className:"mine-map-page"},o.createElement("style",null,`
        .mine-map-page{
          height:calc(100vh - 72px);
          min-height:620px;
          position:relative;
          overflow:hidden;
          background:#050709;
          color:#f4f5f6;
        }
        .mine-map-bg{
          position:absolute;
          inset:0;
          background-image:
            linear-gradient(180deg,rgba(3,5,7,.22),rgba(3,5,7,.08) 45%,rgba(3,5,7,.38)),
            url('/mine-map.png');
          background-size:cover;
          background-position:center center;
          background-repeat:no-repeat;
        }
        .mine-map-vignette{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:radial-gradient(circle at 52% 43%,transparent 28%,rgba(0,0,0,.18) 67%,rgba(0,0,0,.58) 100%);
        }
        .map-title{
          position:absolute;
          left:24px;
          top:20px;
          z-index:12;
          pointer-events:none;
        }
        .map-title .eyebrow{
          color:#f08a32;
          font-size:9px;
          letter-spacing:2px;
          font-weight:800;
        }
        .map-title h1{
          margin:4px 0 3px;
          font-size:25px;
          line-height:1;
          letter-spacing:1px;
        }
        .map-title p{
          margin:0;
          color:#c1c6ca;
          font-size:9px;
          letter-spacing:1px;
        }
        .map-marker-wrap{
          position:absolute;
          transform:translate(-50%,-50%);
          z-index:15;
        }
        .map-marker-button{
          width:42px;
          height:42px;
          border-radius:50%;
          border:2px solid rgba(255,255,255,.9);
          display:grid;
          place-items:center;
          color:#fff;
          cursor:pointer;
          transition:transform .2s ease,filter .2s ease;
          box-shadow:0 0 0 6px rgba(0,0,0,.25),0 0 22px rgba(255,255,255,.16);
        }
        .map-marker-button:hover{transform:scale(1.1);filter:brightness(1.15)}
        .hazard-marker .map-marker-button{background:#d53232;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(213,50,50,.65);animation:dangerPulse 1.6s infinite}
        .survivor-marker .map-marker-button{background:#d9a72f;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(217,167,47,.5)}
        .network-marker .map-marker-button{background:#16a77d;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(22,167,125,.55);animation:networkPulse 2s infinite}
        .water-marker .map-marker-button{background:#139ed1;box-shadow:0 0 0 6px rgba(0,0,0,.28),0 0 24px rgba(19,158,209,.55);animation:waterPulse 2s infinite}
        .marker-label{
          position:absolute;
          left:31px;
          top:3px;
          min-width:108px;
          padding:7px 9px;
          border-radius:7px;
          background:rgba(6,9,11,.86);
          border:1px solid rgba(255,255,255,.2);
          backdrop-filter:blur(8px);
          pointer-events:none;
          box-shadow:0 8px 18px rgba(0,0,0,.28);
        }
        .marker-label strong{display:block;font-size:9px;letter-spacing:1px}
        .marker-label span{display:block;margin-top:3px;font-size:8px;color:#c7c9cb;white-space:nowrap}
        .hazard-marker .marker-label{border-color:rgba(213,50,50,.65)}
        .hazard-marker .marker-label strong{color:#ff5a5a}
        .survivor-marker .marker-label{border-color:rgba(217,167,47,.6)}
        .survivor-marker .marker-label strong{color:#ffd35a}
        .network-marker .marker-label{border-color:rgba(22,167,125,.6)}
        .network-marker .marker-label strong{color:#53e3b4}
        .water-marker .marker-label{border-color:rgba(19,158,209,.6)}
        .water-marker .marker-label strong{color:#55d6ff}
        .water-marker .marker-label{left:30px;top:-4px}
        .rover-sim{
          position:absolute;
          transform:translate(-50%,-50%);
          z-index:20;
          transition:left 1.35s ease-in-out,top 1.35s ease-in-out;
        }
        .rover-button{
          width:44px;
          height:44px;
          border-radius:11px;
          border:2px solid #fff;
          background:#15191c;
          color:#55c9ff;
          display:grid;
          place-items:center;
          cursor:pointer;
          box-shadow:0 0 0 5px rgba(0,0,0,.28),0 0 26px rgba(39,174,239,.65);
        }
        .rover-name{
          position:absolute;
          left:50%;
          bottom:51px;
          transform:translateX(-50%);
          padding:5px 8px;
          border:1px solid rgba(39,174,239,.7);
          border-radius:6px;
          background:rgba(5,10,14,.9);
          color:#dff6ff;
          font-size:9px;
          font-weight:800;
          letter-spacing:1px;
          white-space:nowrap;
          pointer-events:none;
        }
        .rover-beam{
          position:absolute;
          width:85px;
          height:34px;
          right:29px;
          top:5px;
          transform:skewX(-20deg);
          background:linear-gradient(90deg,rgba(55,194,255,.42),transparent);
          filter:blur(2px);
          pointer-events:none;
        }
        .map-info-card{
          position:absolute;
          left:22px;
          bottom:20px;
          width:300px;
          z-index:22;
          padding:14px 16px 15px 18px;
          border:1px solid rgba(255,255,255,.15);
          border-radius:11px;
          background:rgba(5,8,10,.86);
          backdrop-filter:blur(12px);
          box-shadow:0 14px 30px rgba(0,0,0,.3);
        }
        .map-info-card:before{
          content:"";
          position:absolute;
          left:0;
          top:13px;
          bottom:13px;
          width:3px;
          border-radius:4px;
          background:#e54848;
        }
        .map-info-card .info-type{font-size:8px;letter-spacing:1.7px;color:#ff5b5b;font-weight:800}
        .map-info-card h3{margin:5px 0 5px;font-size:14px;letter-spacing:.5px}
        .map-info-card p{margin:0;color:#bfc4c7;font-size:10px;line-height:1.55}
        .map-info-card .info-detail{margin-top:8px;color:#fff;font-size:9px;font-weight:700;letter-spacing:.5px}
        .selected-close{position:absolute;right:9px;top:9px;width:25px;height:25px;border:1px solid rgba(255,255,255,.14);border-radius:6px;background:transparent;color:#aaa;display:grid;place-items:center;cursor:pointer}
        .selected-close:hover{color:#fff;border-color:rgba(255,255,255,.4)}
        .map-legend{
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          bottom:20px;
          z-index:22;
          display:flex;
          align-items:center;
          gap:18px;
          padding:9px 15px;
          border:1px solid rgba(255,255,255,.16);
          border-radius:9px;
          background:rgba(5,8,10,.82);
          backdrop-filter:blur(10px);
        }
        .legend-item{display:flex;align-items:center;gap:6px;color:#cdd0d2;font-size:8px;letter-spacing:1px;font-weight:700;white-space:nowrap}
        .legend-dot{width:8px;height:8px;border-radius:50%}
        .legend-dot.rover{background:#49c8ff}.legend-dot.hazard{background:#ef4b4b}.legend-dot.survivor{background:#e7b83c}.legend-dot.network{background:#28d49d}.legend-dot.water{background:#20b7ed}
        @keyframes dangerPulse{0%,100%{box-shadow:0 0 0 6px rgba(213,50,50,.18),0 0 22px rgba(213,50,50,.5)}50%{box-shadow:0 0 0 12px rgba(213,50,50,.04),0 0 34px rgba(213,50,50,.75)}}
        @keyframes networkPulse{50%{box-shadow:0 0 0 10px rgba(22,167,125,.05),0 0 30px rgba(22,167,125,.7)}}
        @keyframes waterPulse{50%{box-shadow:0 0 0 10px rgba(19,158,209,.05),0 0 30px rgba(19,158,209,.7)}}
        @media(max-width:1000px){.map-title{left:18px}.map-title p{display:none}.map-info-card{width:270px}.map-legend{gap:10px}.legend-item{font-size:7px}}
      `),o.createElement("div",{className:"mine-map-bg"}),o.createElement("div",{className:"mine-map-vignette"}),o.createElement("div",{className:"map-title"},o.createElement("span",{className:"eyebrow"},"LIVE UNDERGROUND OPERATIONS"),o.createElement("h1",null,"MINE MAP"),o.createElement("p",null,"ROVER POSITION • HAZARDS • SURVIVOR LOCATIONS • NETWORK")),v.map(y=>o.createElement("div",{key:y.id,className:`map-marker-wrap ${y.className}`,style:{left:`${y.left}%`,top:`${y.top}%`}},o.createElement("button",{className:"map-marker-button",title:y.title,onClick:()=>c(y)},y.icon),o.createElement("div",{className:"marker-label"},o.createElement("strong",null,y.shortTitle),o.createElement("span",null,y.detail)))),o.createElement("div",{className:"rover-sim",style:{left:`${m.left}%`,top:`${m.top}%`}},o.createElement("div",{className:"rover-beam"}),o.createElement("button",{className:"rover-button",title:"Open ROVER-01 information",onClick:()=>c({type:"ROVER",title:"ROVER-01",shortTitle:"ROVER",detail:"AUTONOMOUS • MOVING",text:"ROVER-01 is moving along the mapped tunnel route and continuously updating its position for the rescue team."})},o.createElement(ad,{size:22})),o.createElement("div",{className:"rover-name"},"ROVER-01")),o.createElement("div",{className:"map-info-card"},i&&o.createElement("button",{className:"selected-close",onClick:()=>c(null)},o.createElement(wi,{size:14})),i?o.createElement(o.Fragment,null,o.createElement("span",{className:"info-type"},i.type),o.createElement("h3",null,i.title),o.createElement("p",null,i.text),o.createElement("div",{className:"info-detail"},i.detail)):o.createElement(o.Fragment,null,o.createElement("span",{className:"info-type"},"HAZARD ALERT"),o.createElement("h3",null,"TOXIC GAS ZONE"),o.createElement("p",null,"AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed."),o.createElement("div",{className:"info-detail"},"DANGER LEVEL: HIGH • RISK: 78%"))),o.createElement("div",{className:"map-legend"},o.createElement("div",{className:"legend-item"},o.createElement("span",{className:"legend-dot rover"}),"ROVER"),o.createElement("div",{className:"legend-item"},o.createElement("span",{className:"legend-dot hazard"}),"HAZARD"),o.createElement("div",{className:"legend-item"},o.createElement("span",{className:"legend-dot survivor"}),"SURVIVOR"),o.createElement("div",{className:"legend-item"},o.createElement("span",{className:"legend-dot network"}),"NETWORK"),o.createElement("div",{className:"legend-item"},o.createElement("span",{className:"legend-dot water"}),"WATER")))}function kg(){const[i,c]=x.useState(86.4),[s,d]=x.useState(32.4),[p,m]=x.useState(41.8),[v,y]=x.useState(0),[k,C]=x.useState(18),[N,R]=x.useState(!1),[I,$]=x.useState("MANUAL"),[D,L]=x.useState("STOPPED"),[P,A]=x.useState("NORMAL"),[G,X]=x.useState("UNDERGROUND SURVEY"),[ne,ae]=x.useState({co:23.4,methane:.42,h2s:2.1,oxygen:20.6,humidity:67.8,pressure:100.8,network:92}),[se,ve]=x.useState(["System ready • MNR-01 online"]),j=(ee=P)=>ee==="SLOW"?.35:ee==="FAST"?1.2:.75;x.useEffect(()=>{const ee=setInterval(()=>{C(te=>te+1),c(te=>Math.max(0,+(te-(D==="STOPPED"?.0015:N?.01:.007)).toFixed(2))),d(te=>+Math.max(27,Math.min(39,te+(Math.random()-.5)*.16)).toFixed(1)),ae(te=>({co:+Math.max(15,Math.min(35,te.co+(Math.random()-.5)*.18)).toFixed(1),methane:+Math.max(.18,Math.min(.85,te.methane+(Math.random()-.5)*.012)).toFixed(2),h2s:+Math.max(.8,Math.min(4.8,te.h2s+(Math.random()-.5)*.08)).toFixed(1),oxygen:+Math.max(19.7,Math.min(21,te.oxygen+(Math.random()-.5)*.015)).toFixed(1),humidity:+Math.max(60,Math.min(76,te.humidity+(Math.random()-.5)*.22)).toFixed(1),pressure:+Math.max(99.2,Math.min(102.2,te.pressure+(Math.random()-.5)*.05)).toFixed(1),network:Math.round(Math.max(84,Math.min(99,te.network+(Math.random()-.5)*2.4)))})),D==="FORWARD"?m(te=>+Math.min(250,te+.025).toFixed(1)):D==="REVERSE"&&m(te=>+Math.max(0,te-.02).toFixed(1))},1e3);return()=>clearInterval(ee)},[D,N]);const F=ee=>{ve(te=>[`${ee} • ${new Date().toLocaleTimeString()}`,...te].slice(0,5))},ie=ee=>{L(ee),y(ee==="STOPPED"?0:ee==="TURN LEFT"||ee==="TURN RIGHT"?.22:j()),F(`${ee} command`)},Pe=ee=>{A(ee),(D==="FORWARD"||D==="REVERSE")&&y(j(ee)),F(`SPEED ${ee}`)},Se=()=>{const ee=Math.floor(k/3600),te=Math.floor(k%3600/60),Ae=k%60;return`${String(ee).padStart(2,"0")}:${String(te).padStart(2,"0")}:${String(Ae).padStart(2,"0")}`},Re=[["CARBON MONOXIDE",ne.co.toFixed(1),"ppm"],["METHANE",ne.methane.toFixed(2),"%LEL"],["HYDROGEN SULFIDE",ne.h2s.toFixed(1),"ppm"],["OXYGEN",ne.oxygen.toFixed(1),"%"],["TEMPERATURE",s.toFixed(1),"°C"],["HUMIDITY",ne.humidity.toFixed(1),"%"],["PRESSURE",ne.pressure.toFixed(1),"kPa"],["NETWORK",ne.network,"%"]];return o.createElement("section",{className:"rover-control-page"},o.createElement("style",null,`
        .rover-control-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:12px 16px 10px;
          color:#eef6fa;
          background:
            radial-gradient(circle at 50% 8%,rgba(0,178,255,.13),transparent 32%),
            radial-gradient(circle at 12% 70%,rgba(255,137,36,.10),transparent 30%),
            radial-gradient(circle at 88% 25%,rgba(0,214,184,.06),transparent 28%),
            linear-gradient(135deg,#030a10 0%,#07131c 48%,#02070b 100%);
        }
        .rc-head{
          display:flex;justify-content:space-between;align-items:center;
          margin-bottom:10px;padding:0 3px;
        }
        .rc-kicker{font-size:8px;letter-spacing:2.4px;color:#ff9b43;font-weight:900;text-shadow:0 0 10px rgba(255,145,55,.18)}
        .rc-head h1{margin:3px 0 0;font-size:23px;letter-spacing:1.5px;color:#f7fbfd}
        .rc-head p{margin:3px 0 0;color:#76909e;font-size:8px;letter-spacing:1.1px}
        .rc-mode{display:flex;gap:6px;align-items:center}
        .rc-mode button{
          border:1px solid rgba(67,191,235,.22);background:linear-gradient(145deg,rgba(20,53,70,.72),rgba(5,18,26,.82));
          color:#8fa7b3;padding:8px 13px;border-radius:7px;font-size:8px;
          font-weight:900;letter-spacing:1px;cursor:pointer;transition:.2s;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.035);
        }
        .rc-mode button:hover{transform:translateY(-1px);border-color:rgba(255,151,65,.65);color:#ffd0a4}
        .rc-mode button.active{
          border-color:rgba(255,151,65,.9);background:linear-gradient(135deg,rgba(255,137,36,.22),rgba(0,176,255,.08));
          color:#ffb66f;box-shadow:0 0 20px rgba(255,137,36,.12),inset 0 1px 0 rgba(255,255,255,.05);
        }
        .rc-grid{
          display:grid;grid-template-columns:1.05fr 1.72fr 1.08fr;gap:10px;
          height:calc(100% - 47px);
        }
        .rc-column{display:flex;flex-direction:column;gap:10px;min-width:0;min-height:0}
        .rc-card{
          position:relative;border:1px solid rgba(67,191,235,.22);border-radius:12px;
          background:
            linear-gradient(145deg,rgba(10,31,42,.94),rgba(3,12,18,.97) 72%),
            radial-gradient(circle at 100% 0%,rgba(0,190,255,.08),transparent 35%);
          box-shadow:
            0 18px 38px rgba(0,0,0,.40),
            0 0 24px rgba(0,145,190,.035),
            inset 0 1px 0 rgba(255,255,255,.045);
          overflow:hidden;
        }
        .rc-card:before{
          content:"";position:absolute;left:0;top:0;width:34%;height:2px;
          background:linear-gradient(90deg,#ff8b2c,#16c8ff,transparent);
          opacity:.9;pointer-events:none;
        }
        .rc-card:after{
          content:"";position:absolute;inset:0;pointer-events:none;
          background:
            linear-gradient(120deg,rgba(255,255,255,.028),transparent 32%),
            radial-gradient(circle at 90% 10%,rgba(0,193,255,.045),transparent 28%);
        }
        .rc-card-title{
          display:flex;justify-content:space-between;align-items:center;
          padding:10px 13px 8px;border-bottom:1px solid rgba(70,181,220,.12);
          background:linear-gradient(90deg,rgba(10,49,65,.26),transparent);
        }
        .rc-card-title span{font-size:8px;font-weight:900;letter-spacing:1.7px;color:#e6f1f5}
        .rc-card-title small{font-size:7px;letter-spacing:1px;color:#6f8b98}
        .rc-status{flex:1;min-height:0}
        .rc-rover-visual{
          height:205px;margin:8px 9px 7px;border-radius:10px;
          background:
            radial-gradient(circle at 50% 52%,rgba(0,169,230,.22),transparent 43%),
            linear-gradient(145deg,rgba(3,14,20,.40),rgba(12,35,45,.90));
          display:flex;align-items:center;justify-content:center;overflow:hidden;
          border:1px solid rgba(42,187,235,.18);
          box-shadow:inset 0 0 35px rgba(0,0,0,.34),0 0 18px rgba(0,166,220,.04);
        }
        .rc-rover-visual img{
          width:108%;height:108%;object-fit:cover;object-position:center;
          transform:scale(1.05);filter:drop-shadow(0 18px 17px rgba(0,0,0,.70));
          transition:filter .35s,transform .35s;
        }
        .rc-rover-visual.light-on{
          border-color:rgba(255,180,85,.45);
          box-shadow:inset 0 0 35px rgba(0,0,0,.25),0 0 22px rgba(255,158,62,.10);
        }
        .rc-rover-visual.light-on img{
          filter:drop-shadow(0 0 18px rgba(255,184,91,.38)) drop-shadow(0 18px 17px rgba(0,0,0,.65));
        }
        .rc-identity{display:flex;justify-content:space-between;align-items:center;padding:0 13px 8px}
        .rc-id strong{display:block;font-size:13px;letter-spacing:.8px;color:#f4f8fa}
        .rc-id small{display:block;margin-top:2px;color:#66808d;font-size:7px;letter-spacing:1px}
        .rc-online{display:flex;align-items:center;gap:5px;color:#48e2aa;font-size:7px;font-weight:900;letter-spacing:1px}
        .rc-dot{width:7px;height:7px;border-radius:50%;background:#35e2a2;box-shadow:0 0 11px #35e2a2;animation:onlinePulse 1.8s infinite}
        .rc-battery{padding:0 13px 10px}
        .rc-battery-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
        .rc-battery-row span{font-size:7px;color:#7f99a5;letter-spacing:1.2px}
        .rc-battery-row strong{font-size:17px;color:#f5fbfd;text-shadow:0 0 12px rgba(255,255,255,.08)}
        .rc-bar{height:7px;border-radius:8px;background:#10232c;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,.6);border:1px solid rgba(53,176,215,.10)}
        .rc-bar i{
          display:block;height:100%;border-radius:8px;
          background:linear-gradient(90deg,#ff8b2c,#ffb45e,#24c9ff);
          transition:width 1s linear;
          box-shadow:0 0 12px rgba(255,143,54,.35);
        }
        .rc-metrics{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(66,181,220,.11)}
        .rc-metric{padding:9px 11px;border-right:1px solid rgba(66,181,220,.10);border-bottom:1px solid rgba(66,181,220,.10);background:rgba(3,17,24,.22)}
        .rc-metric:nth-child(2n){border-right:0}
        .rc-metric span{display:block;color:#63808d;font-size:6.5px;letter-spacing:1.2px}
        .rc-metric strong{display:block;margin-top:4px;font-size:12px;font-weight:800;color:#e7f5fa}
        .rc-manual{flex:1;min-height:0}
        .rc-control-area{padding:12px 16px}
        .rc-direction{
          height:26px;display:flex;align-items:center;justify-content:center;margin-bottom:7px;
          color:#ffb06b;font-size:8px;font-weight:900;letter-spacing:1.8px;
          text-shadow:0 0 13px rgba(255,145,55,.28);
        }
        .rc-pad{
          width:205px;height:175px;margin:0 auto;display:grid;
          grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr);gap:7px;
        }
        .rc-pad button{
          border:1px solid rgba(67,191,235,.26);border-radius:10px;
          background:linear-gradient(145deg,#103044,#07151d);color:#dcecf2;
          font-size:19px;cursor:pointer;
          box-shadow:0 7px 16px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.045);
          transition:transform .15s,box-shadow .15s,border-color .15s,color .15s,background .15s;
        }
        .rc-pad button:hover{
          transform:translateY(-2px);border-color:rgba(255,154,68,.82);color:#ffd0a5;
          background:linear-gradient(145deg,#173d50,#0a1b24);
          box-shadow:0 9px 22px rgba(0,0,0,.42),0 0 20px rgba(0,177,240,.10);
        }
        .rc-pad button:active{transform:translateY(2px);box-shadow:inset 0 4px 10px rgba(0,0,0,.5)}
        .rc-pad button.active-control{
          border-color:rgba(39,222,177,.85);color:#72f0c6;
          background:linear-gradient(145deg,#10473d,#071b18);
          box-shadow:0 0 22px rgba(39,222,177,.18),inset 0 1px 0 rgba(255,255,255,.05);
        }
        .rc-pad .stop{
          background:radial-gradient(circle,#a83b35,#4b1719);border-color:rgba(255,91,82,.82);
          color:#ffaaa3;font-size:9px;font-weight:900;letter-spacing:1px;
          box-shadow:0 0 22px rgba(227,70,62,.18),inset 0 1px 0 rgba(255,255,255,.08);
        }
        .rc-pad .stop:hover{border-color:#ff766d;color:#fff;box-shadow:0 0 30px rgba(227,70,62,.32)}
        .rc-pad .empty{visibility:hidden}
        .rc-speed{margin-top:12px}
        .rc-speed-head{display:flex;justify-content:space-between;font-size:7px;color:#78919c;letter-spacing:1px}
        .rc-speed-head strong{color:#dcecf1}
        .rc-speed-options{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:7px}
        .rc-speed-options button{
          padding:8px 4px;border:1px solid rgba(67,191,235,.18);background:rgba(6,26,36,.62);
          border-radius:6px;color:#77909b;font-size:7px;font-weight:900;cursor:pointer;transition:.18s;
        }
        .rc-speed-options button:hover{border-color:rgba(255,151,65,.55);color:#ffbc83}
        .rc-speed-options button.active{
          color:#ffd0a4;border-color:rgba(255,151,65,.82);background:linear-gradient(90deg,rgba(255,137,36,.16),rgba(0,184,255,.08));
          box-shadow:0 0 16px rgba(255,137,36,.10);
        }
        .rc-info-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;padding:9px}
        .rc-info-box{
          padding:9px;border:1px solid rgba(67,191,235,.13);border-radius:8px;
          background:linear-gradient(145deg,rgba(13,48,63,.52),rgba(5,20,28,.50));
          box-shadow:inset 0 1px 0 rgba(255,255,255,.025);
        }
        .rc-info-box span{display:block;color:#63818d;font-size:6.5px;letter-spacing:1px}
        .rc-info-box strong{display:block;margin-top:4px;font-size:9px;letter-spacing:.3px;color:#dcecf1}
        .rc-env{flex:1;min-height:0}
        .rc-env-grid{display:grid;grid-template-columns:1fr 1fr;padding:7px}
        .rc-env-item{
          padding:11px 10px;border-bottom:1px solid rgba(67,191,235,.09);
          position:relative;transition:background .2s;
        }
        .rc-env-item:hover{background:linear-gradient(90deg,rgba(0,180,240,.06),rgba(255,145,55,.025))}
        .rc-env-item:nth-child(odd){border-right:1px solid rgba(67,191,235,.09)}
        .rc-env-item span{display:block;color:#64818c;font-size:6.5px;letter-spacing:1.05px}
        .rc-env-item strong{display:block;margin-top:5px;font-size:13px;color:#e7f5f8}
        .rc-env-item em{font-style:normal;color:#76909b;font-size:6.5px;margin-left:3px}
        .rc-env-item:last-child strong{color:#54e2af;text-shadow:0 0 12px rgba(52,224,171,.14)}
        .rc-actions{padding:9px;display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .rc-action{
          padding:10px 7px;border:1px solid rgba(67,191,235,.15);border-radius:7px;
          background:linear-gradient(145deg,rgba(15,51,66,.58),rgba(5,20,28,.62));
          color:#b8ccd4;font-size:7px;font-weight:900;letter-spacing:.7px;cursor:pointer;transition:.18s;
        }
        .rc-action:hover{transform:translateY(-1px);border-color:rgba(255,151,65,.66);color:#ffd0a4;box-shadow:0 5px 16px rgba(0,0,0,.27),0 0 14px rgba(255,137,36,.06)}
        .rc-action.active{
          border-color:rgba(53,226,169,.72);color:#72edc2;background:linear-gradient(145deg,rgba(20,88,72,.36),rgba(5,35,28,.40));
          box-shadow:0 0 18px rgba(53,226,169,.09);
        }
        .rc-log{min-height:103px}
        .rc-log-list{padding:6px 10px 8px}
        .rc-log-line{display:flex;gap:7px;padding:4px 0;color:#7e98a3;font-size:7px;line-height:1.3;border-bottom:1px solid rgba(67,191,235,.055)}
        .rc-log-line:last-child{border-bottom:0}
        .rc-log-line b{color:#3ee0a5;font-size:7px;text-shadow:0 0 8px rgba(62,224,165,.4)}
        .rc-footer{
          height:16px;margin-top:4px;display:flex;justify-content:space-between;align-items:center;
          color:#506a76;font-size:6.5px;letter-spacing:1px;
        }
        .rc-footer strong{color:#8ba1aa}
        @keyframes onlinePulse{50%{opacity:.45;box-shadow:0 0 5px #35e2a2}}
        @media(max-width:1050px){
          .rover-control-page{overflow:auto;height:auto;min-height:100vh}
          .rc-grid{height:auto;grid-template-columns:1fr}
          .rc-status{min-height:480px}.rc-manual{min-height:390px}.rc-env{min-height:330px}
          .rc-footer{margin-bottom:10px}
        }
      `),o.createElement("div",{className:"rc-head"},o.createElement("div",null,o.createElement("div",{className:"rc-kicker"},"MINENOVA • AUTONOMOUS RESCUE TECHNOLOGY"),o.createElement("h1",null,"ROVER CONTROL"),o.createElement("p",null,"REMOTE OPERATION • TELEMETRY • ENVIRONMENT MONITORING")),o.createElement("div",{className:"rc-mode"},o.createElement("button",{className:I==="MANUAL"?"active":"",onClick:()=>{$("MANUAL"),F("MANUAL MODE")}},"MANUAL"),o.createElement("button",{className:I==="AUTONOMOUS"?"active":"",onClick:()=>{$("AUTONOMOUS"),F("AUTONOMOUS MODE")}},"AUTONOMOUS"))),o.createElement("div",{className:"rc-grid"},o.createElement("div",{className:"rc-column"},o.createElement("div",{className:"rc-card rc-status"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"ROVER STATUS"),o.createElement("small",null,"LIVE TELEMETRY")),o.createElement("div",{className:`rc-rover-visual ${N?"light-on":""}`},o.createElement("img",{src:"/RoverC.png",alt:"MNR-01 Rover"})),o.createElement("div",{className:"rc-identity"},o.createElement("div",{className:"rc-id"},o.createElement("strong",null,"MNR-01"),o.createElement("small",null,"AI MINE RESCUE ROVER")),o.createElement("div",{className:"rc-online"},o.createElement("i",{className:"rc-dot"})," ONLINE")),o.createElement("div",{className:"rc-battery"},o.createElement("div",{className:"rc-battery-row"},o.createElement("span",null,"BATTERY LEVEL"),o.createElement("strong",null,i.toFixed(1),"%")),o.createElement("div",{className:"rc-bar"},o.createElement("i",{style:{width:`${i}%`}}))),o.createElement("div",{className:"rc-metrics"},o.createElement("div",{className:"rc-metric"},o.createElement("span",null,"TEMPERATURE"),o.createElement("strong",null,s.toFixed(1),"°C")),o.createElement("div",{className:"rc-metric"},o.createElement("span",null,"DEPTH"),o.createElement("strong",null,p.toFixed(1)," m")),o.createElement("div",{className:"rc-metric"},o.createElement("span",null,"SPEED"),o.createElement("strong",null,v.toFixed(2)," m/s")),o.createElement("div",{className:"rc-metric"},o.createElement("span",null,"UPTIME"),o.createElement("strong",null,Se())))),o.createElement("div",{className:"rc-card"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"MISSION INFO"),o.createElement("small",null,"ACTIVE")),o.createElement("div",{className:"rc-info-grid"},o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"CURRENT MISSION"),o.createElement("strong",null,G)),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"MODE"),o.createElement("strong",null,I)),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"DIRECTION"),o.createElement("strong",null,D)),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"CONNECTION"),o.createElement("strong",{style:{color:"#65d7a7"}},"ONLINE"))))),o.createElement("div",{className:"rc-column"},o.createElement("div",{className:"rc-card rc-manual"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"MANUAL NAVIGATION"),o.createElement("small",null,I==="MANUAL"?"CONTROL ENABLED":"AUTO ACTIVE")),o.createElement("div",{className:"rc-control-area"},o.createElement("div",{className:"rc-direction"},"CURRENT: ",D," • ",v.toFixed(2)," m/s"),o.createElement("div",{className:"rc-pad"},o.createElement("button",{className:"empty","aria-hidden":"true"}),o.createElement("button",{className:D==="FORWARD"?"active-control":"",onClick:()=>ie("FORWARD")},"▲"),o.createElement("button",{className:"empty","aria-hidden":"true"}),o.createElement("button",{className:D==="TURN LEFT"?"active-control":"",onClick:()=>ie("TURN LEFT")},"◀"),o.createElement("button",{className:"stop",onClick:()=>ie("STOPPED")},"STOP"),o.createElement("button",{className:D==="TURN RIGHT"?"active-control":"",onClick:()=>ie("TURN RIGHT")},"▶"),o.createElement("button",{className:"empty","aria-hidden":"true"}),o.createElement("button",{className:D==="REVERSE"?"active-control":"",onClick:()=>ie("REVERSE")},"▼"),o.createElement("button",{className:"empty","aria-hidden":"true"})),o.createElement("div",{className:"rc-speed"},o.createElement("div",{className:"rc-speed-head"},o.createElement("span",null,"SPEED CONTROL"),o.createElement("strong",null,v.toFixed(2)," m/s")),o.createElement("div",{className:"rc-speed-options"},["SLOW","NORMAL","FAST"].map(ee=>o.createElement("button",{key:ee,className:P===ee?"active":"",onClick:()=>Pe(ee)},ee)))))),o.createElement("div",{className:"rc-card"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"QUICK ACTIONS"),o.createElement("small",null,"ROVER SYSTEM")),o.createElement("div",{className:"rc-actions"},o.createElement("button",{className:`rc-action ${N?"active":""}`,onClick:()=>{const ee=!N;R(ee),F(`CAMERA LIGHT ${ee?"ON":"OFF"}`)}},"CAMERA LIGHT: ",N?"ON":"OFF"),o.createElement("button",{className:"rc-action",onClick:()=>{X("RETURN TO BASE"),$("AUTONOMOUS"),ie("REVERSE"),F("RETURN TO BASE")}},"RETURN TO BASE"),o.createElement("button",{className:"rc-action",onClick:()=>{X("RESCUE SUPPORT"),$("AUTONOMOUS"),ie("FORWARD"),F("RESCUE MISSION")}},"RESCUE MISSION"),o.createElement("button",{className:"rc-action",onClick:()=>{X("UNDERGROUND SURVEY"),$("MANUAL"),ie("STOPPED"),F("SYSTEM READY")}},"RESET / READY"))),o.createElement("div",{className:"rc-card rc-log"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"SYSTEM LOG"),o.createElement("small",null,"RECENT EVENTS")),o.createElement("div",{className:"rc-log-list"},se.map((ee,te)=>o.createElement("div",{className:"rc-log-line",key:`${ee}-${te}`},o.createElement("b",null,"●"),o.createElement("span",null,ee)))))),o.createElement("div",{className:"rc-column"},o.createElement("div",{className:"rc-card rc-env"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"ENVIRONMENT MONITORING"),o.createElement("small",null,"LIVE SIMULATION")),o.createElement("div",{className:"rc-env-grid"},Re.map(([ee,te,Ae])=>o.createElement("div",{className:"rc-env-item",key:ee},o.createElement("span",null,ee),o.createElement("strong",null,te," ",o.createElement("em",null,Ae)))))),o.createElement("div",{className:"rc-card"},o.createElement("div",{className:"rc-card-title"},o.createElement("span",null,"OPERATION STATUS"),o.createElement("small",null,"CONTROL LINK")),o.createElement("div",{className:"rc-info-grid"},o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"CONTROL LINK"),o.createElement("strong",{style:{color:"#65d7a7"}},"STABLE")),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"SENSOR LINK"),o.createElement("strong",{style:{color:"#65d7a7"}},"ACTIVE")),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"CAMERA LIGHT"),o.createElement("strong",{style:{color:N?"#ffd08a":"#9aa5aa"}},N?"ON":"OFF")),o.createElement("div",{className:"rc-info-box"},o.createElement("span",null,"SAFETY"),o.createElement("strong",{style:{color:"#65d7a7"}},"NORMAL")))))),o.createElement("div",{className:"rc-footer"},o.createElement("span",null,"LIVE SIMULATION • TELEMETRY UPDATING"),o.createElement("span",null,"MNR-01 • MINENOVA")))}function bg(){const[i,c]=x.useState([{id:1,from:"rover",type:"voice",text:"Communication link established. I am ready.",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[s,d]=x.useState(""),[p,m]=x.useState(!1),[v,y]=x.useState(!1),[k,C]=x.useState(.8),[N,R]=x.useState(!1),[I,$]=x.useState(68),[D,L]=x.useState("READY"),[P,A]=x.useState("Tap the microphone and speak to Rover."),G=(j,F,ie)=>{c(Pe=>[...Pe,{id:Date.now()+Math.random(),from:j,type:F,text:ie,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}].slice(-30))},X=j=>{if(N||!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const F=new SpeechSynthesisUtterance(j);F.rate=.92,F.pitch=.82,F.volume=k,F.onstart=()=>y(!0),F.onend=()=>y(!1),F.onerror=()=>y(!1),window.speechSynthesis.speak(F)},ne=j=>{const F=j.toLowerCase();return F.includes("battery")?"Battery status is stable. I am continuing the current mission.":F.includes("temperature")||F.includes("hot")?"Temperature is within the current operating range.":F.includes("gas")||F.includes("air")?"Atmosphere readings are being monitored continuously. No new critical change detected.":F.includes("stop")?"Stop command acknowledged. Rover is holding position.":F.includes("return")||F.includes("base")?"Return to base command received. Preparing the route.":F.includes("photo")||F.includes("image")||F.includes("camera")?"Camera request received. I am checking the area ahead.":"Message received. I understand and will report the latest underground status."},ae=(j=s)=>{const F=j.trim();F&&(G("you","text",F),d(""),A(`You: ${F}`),L("SENDING"),window.setTimeout(()=>{const ie=ne(F);G("rover","voice",ie),A(`Rover: ${ie}`),L("ROVER REPLY"),X(ie)},650))},se=()=>{const j=window.SpeechRecognition||window.webkitSpeechRecognition;if(!j){L("MIC NOT SUPPORTED"),A("Voice recognition is not supported in this browser. Use Chrome or Edge.");return}if(p)return;const F=new j;F.lang="en-IN",F.interimResults=!0,F.continuous=!1,F.onstart=()=>{m(!0),L("LISTENING"),A("Listening… speak to Rover.")},F.onresult=ie=>{const Pe=ie.results[ie.results.length-1],Se=Pe[0].transcript.trim();Se&&(A(`You: ${Se}`),$(72+Math.round(Math.random()*22)),Pe.isFinal&&(G("you","voice",Se),L("ROVER REPLY"),window.setTimeout(()=>{const Re=ne(Se);G("rover","voice",Re),A(`Rover: ${Re}`),X(Re)},500)))},F.onerror=()=>{m(!1),L("READY"),A("Microphone input stopped. Tap the microphone to try again.")},F.onend=()=>{m(!1),L(ie=>ie==="LISTENING"?"READY":ie)},F.start()},ve=()=>{var j;(j=window.speechSynthesis)==null||j.cancel(),y(!1),c([]),A("Communication log cleared."),L("READY")};return x.useEffect(()=>{const j=window.setInterval(()=>{const F=["Rover status update: underground link is stable.","I am monitoring the tunnel conditions ahead.","No new survivor signal detected in the current section.","Network relay is stable. Communication remains active."],ie=F[Math.floor(Math.random()*F.length)];G("rover","voice",ie),A(`Rover: ${ie}`),L("INCOMING MESSAGE")},22e3);return()=>{var F;window.clearInterval(j),(F=window.speechSynthesis)==null||F.cancel()}},[N,k]),o.createElement("section",{className:"communication-page"},o.createElement("style",null,`
        .communication-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:16px 18px 12px;
          color:#eef3f5;
          background:
            radial-gradient(circle at 48% 12%,rgba(38,92,105,.18),transparent 34%),
            radial-gradient(circle at 18% 75%,rgba(232,122,42,.07),transparent 30%),
            linear-gradient(135deg,#05090b,#0a1317 52%,#05080a);
        }
        .cm-head{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          margin:0 2px 11px;
        }
        .cm-kicker{
          color:#f09a4b;
          font-size:8px;
          font-weight:900;
          letter-spacing:2.4px;
        }
        .cm-head h1{
          margin:4px 0 2px;
          font-size:25px;
          letter-spacing:1.7px;
        }
        .cm-head p{
          margin:0;
          color:#829097;
          font-size:8px;
          letter-spacing:1.3px;
        }
        .cm-live{
          display:flex;
          align-items:center;
          gap:7px;
          padding:8px 11px;
          border:1px solid rgba(72,211,165,.2);
          border-radius:8px;
          background:rgba(72,211,165,.045);
          color:#67dfb0;
          font-size:8px;
          font-weight:900;
          letter-spacing:1.2px;
        }
        .cm-live i{
          width:7px;height:7px;border-radius:50%;
          background:#45d7a2;
          box-shadow:0 0 12px #45d7a2;
          animation:cmPulse 1.6s infinite;
        }
        .cm-layout{
          display:grid;
          grid-template-columns:1.42fr 1fr;
          gap:11px;
          height:calc(100% - 55px);
          min-height:0;
        }
        .cm-main{
          display:grid;
          grid-template-rows:minmax(270px,1.18fr) minmax(145px,.72fr) 78px;
          gap:10px;
          min-height:0;
        }
        .cm-side{
          display:grid;
          grid-template-rows:minmax(0,1fr) 105px;
          gap:10px;
          min-height:0;
        }
        .cm-card{
          position:relative;
          min-width:0;
          min-height:0;
          border:1px solid rgba(255,255,255,.1);
          border-radius:12px;
          overflow:hidden;
          background:linear-gradient(145deg,rgba(16,29,34,.96),rgba(5,11,14,.97));
          box-shadow:0 16px 35px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,255,255,.035);
        }
        .cm-card:after{
          content:"";
          position:absolute;
          inset:0;
          pointer-events:none;
          background:linear-gradient(120deg,rgba(255,255,255,.025),transparent 34%);
        }
        .cm-title{
          height:37px;
          box-sizing:border-box;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 13px;
          border-bottom:1px solid rgba(255,255,255,.07);
        }
        .cm-title-left{
          display:flex;
          align-items:center;
          gap:9px;
        }
        .cm-title-left svg{color:#75dfff}
        .cm-title span{
          font-size:8px;
          font-weight:900;
          letter-spacing:1.7px;
        }
        .cm-title small{
          color:#68777e;
          font-size:7px;
          letter-spacing:1px;
        }
        .cm-voice-body{
          height:calc(100% - 37px);
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:0;
        }
        .cm-voice-panel{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          padding:14px;
          border-right:1px solid rgba(255,255,255,.07);
        }
        .cm-voice-panel:last-child{border-right:0}
        .cm-voice-label{
          color:#9ba8ae;
          font-size:7px;
          font-weight:900;
          letter-spacing:1.4px;
          margin-bottom:10px;
        }
        .cm-orb{
          width:82px;
          height:82px;
          border-radius:50%;
          display:grid;
          place-items:center;
          border:1px solid rgba(73,220,188,.7);
          background:radial-gradient(circle,rgba(46,185,162,.2),rgba(7,17,19,.92) 67%);
          color:#80f2d1;
          box-shadow:0 0 0 7px rgba(73,220,188,.035),0 0 30px rgba(73,220,188,.16);
          transition:.25s;
        }
        .cm-orb.rover{
          border-color:rgba(70,196,255,.7);
          color:#86dcff;
          background:radial-gradient(circle,rgba(47,152,199,.2),rgba(7,17,20,.92) 67%);
          box-shadow:0 0 0 7px rgba(70,196,255,.035),0 0 30px rgba(70,196,255,.17);
        }
        .cm-orb.active{
          transform:scale(1.06);
          box-shadow:0 0 0 12px rgba(73,220,188,.05),0 0 40px rgba(73,220,188,.35);
          animation:cmOrb 1.1s infinite;
        }
        .cm-orb.rover.active{
          box-shadow:0 0 0 12px rgba(70,196,255,.05),0 0 40px rgba(70,196,255,.34);
        }
        .cm-wave{
          width:190px;
          height:30px;
          margin:10px 0 4px;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:3px;
        }
        .cm-wave i{
          display:block;
          width:3px;
          height:8px;
          border-radius:4px;
          background:#39dcb8;
          opacity:.7;
          animation:cmWave .9s ease-in-out infinite alternate;
        }
        .cm-wave.blue i{background:#38bfff}
        .cm-wave i:nth-child(2n){animation-delay:.15s}
        .cm-wave i:nth-child(3n){animation-delay:.3s}
        .cm-wave i:nth-child(4n){animation-delay:.45s}
        .cm-wave i:nth-child(5n){animation-delay:.6s}
        .cm-wave:not(.active) i{animation-play-state:paused;height:3px;opacity:.35}
        .cm-status{
          height:17px;
          color:#67dfb0;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
        }
        .cm-status.blue{color:#71d9ff}
        .cm-voice-btn{
          width:205px;
          padding:10px;
          border-radius:7px;
          border:1px solid rgba(73,220,188,.48);
          background:linear-gradient(135deg,rgba(43,164,143,.14),rgba(255,255,255,.025));
          color:#cceee5;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
          cursor:pointer;
          transition:.18s;
        }
        .cm-voice-btn:hover{
          transform:translateY(-1px);
          border-color:#67dfc1;
          box-shadow:0 0 18px rgba(73,220,188,.12);
        }
        .cm-voice-btn.stop{
          border-color:rgba(255,89,79,.58);
          color:#ffaaa3;
          background:rgba(205,57,51,.09);
        }
        .cm-tts-body{padding:10px 12px}
        .cm-textbox{
          width:100%;
          height:69px;
          box-sizing:border-box;
          resize:none;
          border:1px solid rgba(83,190,225,.35);
          border-radius:9px;
          outline:none;
          background:rgba(3,10,13,.78);
          color:#e8eef0;
          padding:11px 12px;
          font:inherit;
          font-size:10px;
        }
        .cm-textbox:focus{
          border-color:rgba(83,210,246,.72);
          box-shadow:0 0 18px rgba(83,190,225,.08);
        }
        .cm-text-bottom{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:7px;
        }
        .cm-char{
          color:#65757d;
          font-size:7px;
          letter-spacing:.7px;
        }
        .cm-send{
          display:flex;
          align-items:center;
          gap:7px;
          padding:9px 18px;
          border:1px solid rgba(44,191,255,.68);
          border-radius:7px;
          background:linear-gradient(135deg,rgba(28,153,211,.2),rgba(28,92,124,.1));
          color:#9ce5ff;
          font-size:8px;
          font-weight:900;
          letter-spacing:1px;
          cursor:pointer;
        }
        .cm-send:hover{box-shadow:0 0 20px rgba(44,191,255,.14);transform:translateY(-1px)}
        .cm-quick{
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:6px;
          padding:10px;
        }
        .cm-quick button{
          min-width:0;
          border:1px solid rgba(255,255,255,.09);
          border-radius:7px;
          background:rgba(255,255,255,.025);
          color:#9ca9ae;
          font-size:7px;
          font-weight:800;
          letter-spacing:.4px;
          cursor:pointer;
          transition:.18s;
        }
        .cm-quick button:hover{
          color:#f2a461;
          border-color:rgba(239,145,64,.5);
          background:rgba(239,145,64,.06);
        }
        .cm-log{
          display:flex;
          flex-direction:column;
        }
        .cm-log-list{
          flex:1;
          min-height:0;
          overflow:auto;
          padding:8px 10px;
          scrollbar-width:thin;
          scrollbar-color:#33464d transparent;
        }
        .cm-msg{
          display:flex;
          gap:8px;
          margin:0 0 9px;
          align-items:flex-start;
        }
        .cm-msg.you{flex-direction:row-reverse}
        .cm-avatar{
          flex:0 0 27px;
          width:27px;height:27px;
          display:grid;place-items:center;
          border-radius:8px;
          border:1px solid rgba(62,191,243,.35);
          background:rgba(28,111,150,.13);
          color:#71d9ff;
        }
        .cm-msg.rover .cm-avatar{
          border-color:rgba(239,145,64,.4);
          background:rgba(190,95,31,.1);
          color:#f0a05b;
        }
        .cm-bubble-wrap{max-width:78%;min-width:0}
        .cm-msg.you .cm-bubble-wrap{text-align:right}
        .cm-msg-meta{
          display:flex;
          gap:6px;
          align-items:center;
          margin:0 2px 3px;
          color:#65757d;
          font-size:6.5px;
          letter-spacing:.5px;
        }
        .cm-msg.you .cm-msg-meta{justify-content:flex-end}
        .cm-msg-meta strong{color:#7ddcff}
        .cm-msg.rover .cm-msg-meta strong{color:#f1a35f}
        .cm-bubble{
          display:inline-block;
          padding:8px 10px;
          border-radius:9px 9px 9px 3px;
          border:1px solid rgba(69,183,231,.2);
          background:linear-gradient(145deg,rgba(31,70,91,.42),rgba(11,24,30,.72));
          color:#cbd5d9;
          font-size:8px;
          line-height:1.45;
          text-align:left;
        }
        .cm-msg.you .cm-bubble{
          border-radius:9px 9px 3px 9px;
          border-color:rgba(71,207,168,.2);
          background:linear-gradient(145deg,rgba(28,82,71,.34),rgba(10,25,22,.72));
        }
        .cm-log-empty{
          height:100%;
          display:grid;
          place-items:center;
          color:#58686f;
          font-size:8px;
          letter-spacing:1px;
        }
        .cm-clear{
          display:flex;
          align-items:center;
          gap:5px;
          border:0;
          background:none;
          color:#738188;
          font-size:7px;
          cursor:pointer;
        }
        .cm-clear:hover{color:#ff8d84}
        .cm-audio{
          padding:10px 12px;
          display:grid;
          grid-template-columns:1fr auto;
          gap:10px;
          align-items:center;
        }
        .cm-slider-row{
          display:flex;
          align-items:center;
          gap:8px;
          color:#8a979d;
          font-size:7px;
          letter-spacing:.7px;
        }
        .cm-slider-row input{
          width:120px;
          accent-color:#f09a4b;
        }
        .cm-audio-actions{
          display:flex;
          gap:6px;
        }
        .cm-audio-actions button{
          width:30px;height:30px;
          display:grid;place-items:center;
          border:1px solid rgba(255,255,255,.1);
          border-radius:7px;
          background:rgba(255,255,255,.025);
          color:#b8c2c6;
          cursor:pointer;
        }
        .cm-audio-actions button.active{
          color:#71dfba;
          border-color:rgba(71,208,157,.45);
          background:rgba(71,208,157,.07);
        }
        .cm-footer{
          position:absolute;
          left:18px;
          right:18px;
          bottom:3px;
          display:flex;
          justify-content:space-between;
          color:#4f5d63;
          font-size:6.5px;
          letter-spacing:1px;
          pointer-events:none;
        }
        @keyframes cmPulse{50%{opacity:.4;box-shadow:0 0 4px #45d7a2}}
        @keyframes cmOrb{50%{box-shadow:0 0 0 15px rgba(73,220,188,.025),0 0 48px rgba(73,220,188,.45)}}
        @keyframes cmWave{from{height:5px}to{height:24px}}
        @media(max-width:950px){
          .communication-page{height:auto;min-height:100vh;overflow:auto;padding-bottom:30px}
          .cm-layout{height:auto;grid-template-columns:1fr}
          .cm-main,.cm-side{grid-template-rows:auto}
          .cm-card{min-height:150px}
          .cm-voice-body{min-height:310px}
          .cm-footer{position:static;margin-top:10px}
        }
      
        /* COMMUNICATION ONLY: COLOR / VISUAL RESTYLE — layout and functionality unchanged */
        .communication-page{
          color:#edf7ff;
          background:
            radial-gradient(circle at 18% 24%,rgba(0,191,255,.10),transparent 28%),
            radial-gradient(circle at 82% 68%,rgba(255,125,45,.09),transparent 30%),
            radial-gradient(circle at 52% 100%,rgba(0,119,180,.10),transparent 38%),
            linear-gradient(135deg,#030b12 0%,#071a27 48%,#040a10 100%);
        }
        .communication-page .cm-kicker{color:#ff963f}
        .communication-page .cm-head p{color:#91a8b7}
        .communication-page .cm-live{
          border-color:rgba(52,220,181,.32);
          background:linear-gradient(135deg,rgba(24,178,151,.10),rgba(20,111,145,.06));
          color:#66e6c2;
          box-shadow:0 0 22px rgba(34,205,178,.06);
        }
        .communication-page .cm-card{
          border-color:rgba(42,185,235,.22);
          background:
            linear-gradient(145deg,rgba(6,29,43,.97),rgba(3,12,19,.98));
          box-shadow:
            0 16px 35px rgba(0,0,0,.38),
            inset 0 1px 0 rgba(103,220,255,.045),
            0 0 22px rgba(0,145,210,.035);
        }
        .communication-page .cm-card:after{
          background:
            radial-gradient(circle at 15% 25%,rgba(255,126,48,.055),transparent 25%),
            linear-gradient(120deg,rgba(61,207,255,.035),transparent 38%);
        }
        .communication-page .cm-title{
          border-bottom-color:rgba(49,190,239,.14);
        }
        .communication-page .cm-title-left svg{color:#48d5ff}
        .communication-page .cm-title small{color:#7893a2}
        .communication-page .cm-voice-panel{
          border-right-color:rgba(44,185,235,.15);
        }
        .communication-page .cm-voice-label{color:#9fc0cf}
        .communication-page .cm-orb{
          border-color:rgba(255,116,86,.82);
          background:radial-gradient(circle,rgba(255,101,70,.18),rgba(5,18,25,.94) 67%);
          color:#ff9b83;
          box-shadow:0 0 0 7px rgba(255,92,70,.045),0 0 32px rgba(255,92,70,.18);
        }
        .communication-page .cm-orb.rover{
          border-color:rgba(37,205,255,.86);
          background:radial-gradient(circle,rgba(0,155,224,.22),rgba(4,18,27,.94) 67%);
          color:#72ddff;
          box-shadow:0 0 0 7px rgba(37,205,255,.045),0 0 32px rgba(37,205,255,.22);
        }
        .communication-page .cm-orb.active{
          box-shadow:0 0 0 12px rgba(255,101,70,.055),0 0 44px rgba(255,101,70,.34);
        }
        .communication-page .cm-orb.rover.active{
          box-shadow:0 0 0 12px rgba(37,205,255,.055),0 0 44px rgba(37,205,255,.38);
        }
        .communication-page .cm-wave i{background:#ff765e}
        .communication-page .cm-wave.blue i{background:#25cfff}
        .communication-page .cm-status{color:#65e5c0}
        .communication-page .cm-status.blue{color:#6bdcff}
        .communication-page .cm-voice-btn{
          border-color:rgba(255,112,76,.62);
          background:linear-gradient(135deg,rgba(218,74,42,.16),rgba(255,255,255,.025));
          color:#ffe0d6;
        }
        .communication-page .cm-voice-btn:hover{
          border-color:#ff835f;
          box-shadow:0 0 20px rgba(255,105,70,.16);
        }
        .communication-page .cm-voice-btn.stop{
          border-color:rgba(255,83,76,.72);
          color:#ffaaa4;
          background:rgba(210,49,43,.11);
        }
        .communication-page .cm-textbox{
          border-color:rgba(38,194,246,.46);
          background:rgba(2,15,23,.86);
          color:#edf8ff;
          box-shadow:inset 0 0 20px rgba(0,115,170,.035);
        }
        .communication-page .cm-textbox:focus{
          border-color:rgba(51,211,255,.85);
          box-shadow:0 0 20px rgba(38,194,246,.13),inset 0 0 18px rgba(0,115,170,.05);
        }
        .communication-page .cm-char{color:#708895}
        .communication-page .cm-send{
          border-color:rgba(39,202,255,.78);
          background:linear-gradient(135deg,rgba(0,154,222,.32),rgba(0,78,119,.18));
          color:#b8efff;
          box-shadow:0 0 16px rgba(0,168,235,.08);
        }
        .communication-page .cm-send:hover{box-shadow:0 0 24px rgba(0,185,255,.20)}
        .communication-page .cm-quick button{
          border-color:rgba(46,163,210,.25);
          background:linear-gradient(145deg,rgba(12,47,65,.42),rgba(255,255,255,.018));
          color:#a9c0cb;
        }
        .communication-page .cm-quick button:hover{
          color:#ffad69;
          border-color:rgba(255,143,65,.68);
          background:rgba(239,112,42,.09);
          box-shadow:0 0 16px rgba(239,112,42,.08);
        }
        .communication-page .cm-log-list{scrollbar-color:#23657d transparent}
        .communication-page .cm-avatar{
          border-color:rgba(37,202,255,.46);
          background:rgba(0,119,171,.16);
          color:#70dcff;
        }
        .communication-page .cm-msg.rover .cm-avatar{
          border-color:rgba(255,139,65,.52);
          background:rgba(190,76,25,.13);
          color:#ffad69;
        }
        .communication-page .cm-msg-meta{color:#718896}
        .communication-page .cm-msg-meta strong{color:#7fe3ff}
        .communication-page .cm-msg.rover .cm-msg-meta strong{color:#ffad69}
        .communication-page .cm-bubble{
          border-color:rgba(37,177,232,.28);
          background:linear-gradient(145deg,rgba(12,61,84,.55),rgba(4,21,30,.82));
          color:#d2e3eb;
        }
        .communication-page .cm-msg.you .cm-bubble{
          border-color:rgba(51,212,174,.28);
          background:linear-gradient(145deg,rgba(10,79,70,.42),rgba(4,25,23,.82));
        }
        .communication-page .cm-clear:hover{color:#ff8e82}
        .communication-page .cm-slider-row{color:#91a6b0}
        .communication-page .cm-slider-row input{accent-color:#ff9947}
        .communication-page .cm-audio-actions button{
          border-color:rgba(49,177,224,.24);
          background:rgba(10,36,48,.48);
          color:#b9d2dc;
        }
        .communication-page .cm-audio-actions button:hover{
          border-color:rgba(45,205,255,.65);
          color:#6cddff;
          box-shadow:0 0 16px rgba(0,176,238,.10);
        }
        .communication-page .cm-audio-actions button.active{
          color:#71e6c0;
          border-color:rgba(71,208,157,.55);
          background:rgba(23,126,103,.11);
        }
        .communication-page .cm-footer{color:#607783}
`),o.createElement("div",{className:"cm-head"},o.createElement("div",null,o.createElement("div",{className:"cm-kicker"},"MINENOVA • TWO-WAY ROVER COMMUNICATION"),o.createElement("h1",null,"COMMUNICATION"),o.createElement("p",null,"TALK • TYPE • LISTEN • SEND • RECEIVE")),o.createElement("div",{className:"cm-live"},o.createElement("i",null)," COMMUNICATION LINK ACTIVE")),o.createElement("div",{className:"cm-layout"},o.createElement("div",{className:"cm-main"},o.createElement("div",{className:"cm-card"},o.createElement("div",{className:"cm-title"},o.createElement("div",{className:"cm-title-left"},o.createElement(Ur,{size:15}),o.createElement("span",null,"VOICE COMMUNICATION")),o.createElement("small",null,D)),o.createElement("div",{className:"cm-voice-body"},o.createElement("div",{className:"cm-voice-panel"},o.createElement("div",{className:"cm-voice-label"},"YOUR MICROPHONE"),o.createElement("button",{className:`cm-orb ${p?"active":""}`,onClick:se,title:"Tap to speak to Rover"},p?o.createElement(Ur,{size:30}):o.createElement(Oc,{size:30})),o.createElement("div",{className:`cm-wave ${p?"active":""}`},Array.from({length:28}).map((j,F)=>o.createElement("i",{key:F,style:{height:`${6+F*7%17}px`}}))),o.createElement("div",{className:"cm-status"},p?"LISTENING…":"TAP TO SPEAK"),o.createElement("button",{className:`cm-voice-btn ${p?"stop":""}`,onClick:se},p?"LISTENING…":"START VOICE MESSAGE")),o.createElement("div",{className:"cm-voice-panel"},o.createElement("div",{className:"cm-voice-label"},"ROVER SPEAKER / PLAYBACK"),o.createElement("div",{className:`cm-orb rover ${v?"active":""}`},o.createElement(ql,{size:30})),o.createElement("div",{className:`cm-wave blue ${v?"active":""}`},Array.from({length:28}).map((j,F)=>o.createElement("i",{key:F,style:{height:`${5+F*9%18}px`}}))),o.createElement("div",{className:"cm-status blue"},v?"ROVER SPEAKING…":"READY TO PLAY"),o.createElement("button",{className:"cm-voice-btn",onClick:()=>{const j="Rover communication test successful. Audio output is working.";G("rover","voice",j),A(`Rover: ${j}`),X(j)}},"TEST ROVER SPEAKER")))),o.createElement("div",{className:"cm-card"},o.createElement("div",{className:"cm-title"},o.createElement("div",{className:"cm-title-left"},o.createElement(ui,{size:14}),o.createElement("span",null,"TEXT TO SPEECH")),o.createElement("small",null,"TYPE → ROVER VOICE")),o.createElement("div",{className:"cm-tts-body"},o.createElement("textarea",{className:"cm-textbox",value:s,maxLength:200,onChange:j=>d(j.target.value),onKeyDown:j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),ae())},placeholder:"Type a message for Rover…"}),o.createElement("div",{className:"cm-text-bottom"},o.createElement("span",{className:"cm-char"},s.length,"/200 • ",P),o.createElement("button",{className:"cm-send",onClick:()=>ae()},o.createElement(ug,{size:13})," CONVERT & SEND")))),o.createElement("div",{className:"cm-card"},o.createElement("div",{className:"cm-title"},o.createElement("div",{className:"cm-title-left"},o.createElement(ui,{size:13}),o.createElement("span",null,"QUICK MESSAGES")),o.createElement("small",null,"ONE-TAP COMMANDS")),o.createElement("div",{className:"cm-quick"},["Status Update","Are you okay?","Check temperature","Scan the area","Return to base"].map(j=>o.createElement("button",{key:j,onClick:()=>ae(j)},j))))),o.createElement("div",{className:"cm-side"},o.createElement("div",{className:"cm-card cm-log"},o.createElement("div",{className:"cm-title"},o.createElement("div",{className:"cm-title-left"},o.createElement(Tc,{size:15}),o.createElement("span",null,"COMMUNICATION LOG")),o.createElement("button",{className:"cm-clear",onClick:ve},o.createElement(pg,{size:12})," CLEAR")),o.createElement("div",{className:"cm-log-list"},i.length===0?o.createElement("div",{className:"cm-log-empty"},"NO MESSAGES YET"):i.map(j=>o.createElement("div",{className:`cm-msg ${j.from}`,key:j.id},o.createElement("div",{className:"cm-avatar"},j.from==="you"?j.type==="voice"?o.createElement(Ur,{size:14}):o.createElement(ui,{size:14}):o.createElement(Tc,{size:14})),o.createElement("div",{className:"cm-bubble-wrap"},o.createElement("div",{className:"cm-msg-meta"},o.createElement("strong",null,j.from==="you"?`YOU (${j.type.toUpperCase()})`:"ROVER (VOICE)"),o.createElement("span",null,j.time)),o.createElement("div",{className:"cm-bubble"},j.text)))))),o.createElement("div",{className:"cm-card"},o.createElement("div",{className:"cm-title"},o.createElement("div",{className:"cm-title-left"},o.createElement(ql,{size:14}),o.createElement("span",null,"AUDIO CONTROLS")),o.createElement("small",null,N?"MUTED":`${Math.round(k*100)}%`)),o.createElement("div",{className:"cm-audio"},o.createElement("div",{className:"cm-slider-row"},o.createElement(ql,{size:12}),"VOLUME",o.createElement("input",{type:"range",min:"0",max:"1",step:"0.05",value:k,onChange:j=>C(Number(j.target.value))})),o.createElement("div",{className:"cm-audio-actions"},o.createElement("button",{className:N?"active":"",onClick:()=>R(j=>!j),title:N?"Unmute rover speaker":"Mute rover speaker"},N?o.createElement(mg,{size:14}):o.createElement(ql,{size:14})),o.createElement("button",{onClick:()=>{var j;(j=window.speechSynthesis)==null||j.cancel(),y(!1),L("READY")},title:"Stop rover speech"},o.createElement(Oc,{size:14}))))))),o.createElement("div",{className:"cm-footer"},o.createElement("span",null,"SIMULATION • BROWSER MICROPHONE + SPEAKER"),o.createElement("span",null,"MNR-01 • MINENOVA")))}function Ng(){const i=o.useRef(null),c=o.useRef(null),s=o.useRef(null),d=o.useRef(null),p=o.useRef([]),m=o.useRef(null),[v,y]=x.useState(!1),[k,C]=x.useState(!1),[N,R]=x.useState(""),[I,$]=x.useState(1),[D,L]=x.useState(!1),[P,A]=x.useState(!1),[G,X]=x.useState(!1),[ne,ae]=x.useState(""),[se,ve]=x.useState("NORMAL"),[j,F]=x.useState(!1),[ie,Pe]=x.useState(!1),[Se,Re]=x.useState(null),[ee,te]=x.useState(!1),[Ae,ke]=x.useState(!1),[V,Z]=x.useState(!1),W=se==="GRAYSCALE"?"grayscale(1)":se==="NIGHT VISION"?"sepia(1) hue-rotate(70deg) saturate(2.2) brightness(.72) contrast(1.12)":se==="THERMAL"?"hue-rotate(150deg) saturate(2.4) contrast(1.18) brightness(1.02)":"none",E=async U=>{const re=i.current;if(re){re.srcObject=U,re.muted=!0,re.autoplay=!0,re.playsInline=!0;try{await re.play()}catch{}}},T=async()=>{var U;if(R(""),C(!1),te(!1),!((U=navigator.mediaDevices)!=null&&U.getUserMedia)){R("Camera access is not supported in this browser. Please use Chrome or Edge.");return}try{s.current&&s.current.getTracks().forEach(we=>we.stop());const re=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}},audio:!1});if(!re.getVideoTracks()[0])throw re.getTracks().forEach(we=>we.stop()),new Error("NO_VIDEO_TRACK");s.current=re,y(!0),requestAnimationFrame(()=>{E(re)})}catch(re){y(!1),C(!1),(re==null?void 0:re.name)==="NotAllowedError"?R("Camera permission was denied. Click the camera icon and choose Allow."):(re==null?void 0:re.name)==="NotFoundError"?R("No webcam was found. Check that the laptop camera is available."):(re==null?void 0:re.name)==="NotReadableError"?R("The webcam is busy in another app. Close Camera/Teams/Zoom and try again."):R("Unable to access the laptop camera. Check browser camera permission and try again.")}};x.useEffect(()=>{if(!v)return;const U=i.current,re=s.current;if(!U||!re)return;U.srcObject=re,U.muted=!0,U.autoplay=!0,U.playsInline=!0;const Ee=async()=>{C(U.readyState>=2&&U.videoWidth>0&&U.videoHeight>0);try{await U.play()}catch{}};return U.addEventListener("loadedmetadata",Ee),U.addEventListener("canplay",Ee),U.addEventListener("playing",Ee),Ee(),()=>{U.removeEventListener("loadedmetadata",Ee),U.removeEventListener("canplay",Ee),U.removeEventListener("playing",Ee)}},[v]);const oe=()=>{var U;d.current&&d.current.state!=="inactive"&&d.current.stop(),(U=s.current)==null||U.getTracks().forEach(re=>re.stop()),s.current=null,i.current&&(i.current.pause(),i.current.srcObject=null),y(!1),C(!1),X(!1)};x.useEffect(()=>()=>{var U,re;(U=s.current)==null||U.getTracks().forEach(Ee=>Ee.stop()),(re=m.current)==null||re.stop(),d.current&&d.current.state!=="inactive"&&d.current.stop()},[]);const ue=()=>{if(!v||!k||!i.current||!c.current){R("Camera is not ready yet. Wait for the LIVE indicator, then try Snapshot.");return}const U=i.current;if(!U.videoWidth||!U.videoHeight){R("Camera frame is not ready yet. Please wait a moment and try again.");return}const re=c.current;re.width=U.videoWidth,re.height=U.videoHeight;const Ee=re.getContext("2d");Ee.filter=W,Ee.drawImage(U,0,0,re.width,re.height);const we=re.toDataURL("image/jpeg",.92);Re(we),te(!1)},pe=()=>{if(!Se)return;const U=document.createElement("a");U.href=Se,U.download=`minenova-snapshot-${Date.now()}.jpg`,U.click(),te(!0)},fe=async()=>{var re;if(P){(re=m.current)==null||re.stop(),m.current=null,A(!1);return}const U=window.SpeechRecognition||window.webkitSpeechRecognition;if(!U){ae("Voice control is not supported here. Use Chrome or Edge.");return}try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(qe=>qe.stop());const we=new U;we.lang="en-IN",we.interimResults=!0,we.continuous=!1,m.current=we,we.onstart=()=>{A(!0),ae("Listening… speak your rover instruction.")},we.onresult=qe=>{const Mt=qe.results[qe.results.length-1],Zn=Mt[0].transcript.trim();Zn&&ae(`ROVER INSTRUCTION • ${Zn}`),Mt.isFinal&&A(!1)},we.onerror=()=>{A(!1),ae("Microphone input could not be captured. Try again.")},we.onend=()=>{m.current=null,A(!1)},we.start()}catch(Ee){A(!1),ae((Ee==null?void 0:Ee.name)==="NotAllowedError"?"Microphone permission was denied.":"Unable to access the microphone.")}},xe=()=>{if(!(!v||!k||!s.current)){if(G){d.current&&d.current.state!=="inactive"&&d.current.stop();return}try{const re=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(we=>MediaRecorder.isTypeSupported(we))||"",Ee=new MediaRecorder(s.current,re?{mimeType:re}:void 0);p.current=[],d.current=Ee,Z(!1),Ee.ondataavailable=we=>{var qe;(qe=we.data)!=null&&qe.size&&p.current.push(we.data)},Ee.onstop=()=>{const we=new Blob(p.current,{type:Ee.mimeType||"video/webm"}),qe=URL.createObjectURL(we),Mt=document.createElement("a");Mt.href=qe,Mt.download=`minenova-live-recording-${Date.now()}.webm`,Mt.click(),window.setTimeout(()=>URL.revokeObjectURL(qe),1500),p.current=[],d.current=null,X(!1),Z(!0)},Ee.start(200),X(!0)}catch{X(!1),R("Video recording is not supported by this browser.")}}},he=async()=>{const U=document.querySelector(".live-view-page");try{!document.fullscreenElement&&(U!=null&&U.requestFullscreen)?(await U.requestFullscreen(),ke(!0)):document.fullscreenElement&&(await document.exitFullscreen(),ke(!1))}catch{ke(!1)}},be=se==="NORMAL"?"NORMAL":se==="NIGHT VISION"?"NIGHT":se==="GRAYSCALE"?"GRAY":"THERMAL";return o.createElement("section",{className:"live-view-page"},o.createElement("style",null,`
        .live-view-page{
          height:calc(100vh - 72px);
          min-height:560px;
          position:relative;
          overflow:hidden;
          background:#020406;
          color:#eef3f5;
        }

        .lv-camera-stage{
          position:absolute;
          inset:0;
          background:#010304;
          overflow:hidden;
        }

        .lv-video,
        .lv-placeholder{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
        }

        .lv-video{
          transform:scale(var(--lv-zoom,1));
          transition:transform .25s ease,filter .25s ease;
          filter:var(--lv-filter,none);
          background:#05090b;
        }

        .lv-placeholder{
          display:grid;
          place-items:center;
          background:
            radial-gradient(circle at 50% 45%,rgba(41,67,76,.28),transparent 36%),
            linear-gradient(135deg,#071014,#020406 65%);
        }

        .lv-placeholder-inner{
          text-align:center;
          max-width:420px;
          padding:28px;
        }

        .lv-placeholder .cam-icon{
          width:74px;
          height:74px;
          border-radius:20px;
          border:1px solid rgba(95,194,238,.35);
          display:grid;
          place-items:center;
          margin:0 auto 18px;
          background:rgba(17,39,47,.72);
          color:#66d5ff;
          box-shadow:0 0 40px rgba(60,190,240,.12);
        }

        .lv-placeholder h2{
          margin:0 0 8px;
          font-size:22px;
          letter-spacing:1.2px;
        }

        .lv-placeholder p{
          margin:0;
          color:#8e9ca2;
          font-size:10px;
          line-height:1.7;
          letter-spacing:.7px;
        }

        .lv-connect{
          margin-top:18px;
          padding:11px 18px;
          border-radius:8px;
          border:1px solid rgba(239,145,64,.65);
          background:linear-gradient(135deg,rgba(239,145,64,.22),rgba(239,145,64,.06));
          color:#ffb273;
          font-size:9px;
          font-weight:900;
          letter-spacing:1.3px;
          cursor:pointer;
        }

        .lv-overlay{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:
            linear-gradient(180deg,rgba(0,0,0,.48),transparent 23%,transparent 75%,rgba(0,0,0,.58)),
            radial-gradient(circle at center,transparent 48%,rgba(0,0,0,.26) 100%);
        }

        .lv-top{
          position:absolute;
          left:20px;
          right:20px;
          top:16px;
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          z-index:5;
        }

        .lv-live{
          display:flex;
          align-items:center;
          gap:9px;
          padding:8px 12px;
          border:1px solid rgba(255,80,70,.55);
          border-radius:8px;
          background:rgba(3,8,10,.72);
          backdrop-filter:blur(10px);
          font-size:10px;
          font-weight:900;
          letter-spacing:1.4px;
        }

        .lv-live-dot{
          width:8px;
          height:8px;
          border-radius:50%;
          background:#ff4b45;
          box-shadow:0 0 14px #ff4b45;
          animation:lvPulse 1.3s infinite;
        }

        .lv-top-right{
          display:flex;
          align-items:center;
          gap:7px;
        }

        .lv-chip{
          padding:8px 10px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:7px;
          background:rgba(3,8,10,.70);
          backdrop-filter:blur(10px);
          color:#b9c4c9;
          font-size:7px;
          letter-spacing:1px;
          font-weight:800;
        }

        .lv-chip strong{
          color:#65d7a7;
        }

        .lv-fullscreen{
          width:36px;
          height:36px;
          border:1px solid rgba(255,255,255,.18);
          border-radius:8px;
          background:rgba(3,8,10,.76);
          color:#dce8ed;
          display:grid;
          place-items:center;
          cursor:pointer;
        }

        .lv-side-controls{
          position:absolute;
          right:18px;
          top:50%;
          transform:translateY(-50%);
          z-index:10;
          display:flex;
          flex-direction:column;
          gap:7px;
          padding:8px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:14px;
          background:rgba(3,8,10,.76);
          backdrop-filter:blur(16px);
          box-shadow:0 18px 45px rgba(0,0,0,.45);
        }

        .lv-control{
          position:relative;
        }

        .lv-control button{
          width:43px;
          height:43px;
          border-radius:10px;
          border:1px solid rgba(90,190,238,.38);
          background:linear-gradient(145deg,#10212a,#071014);
          color:#dbeef4;
          display:grid;
          place-items:center;
          cursor:pointer;
          transition:.18s;
          box-shadow:0 5px 16px rgba(0,0,0,.3);
        }

        .lv-control button:hover{
          transform:translateX(-2px);
          border-color:rgba(100,210,255,.85);
          color:#6edaff;
          box-shadow:0 0 20px rgba(74,190,240,.14);
        }

        .lv-control button.active{
          border-color:#63d5ff;
          color:#6edaff;
          background:linear-gradient(145deg,#153541,#08151a);
          box-shadow:0 0 20px rgba(74,190,240,.22);
        }

        .lv-control button:disabled{
          cursor:not-allowed;
        }

        .lv-control.record button{
          border-color:rgba(255,76,69,.62);
          color:#ff726d;
        }

        .lv-control.record button.active{
          background:#441719;
          color:#ff8a84;
          box-shadow:0 0 22px rgba(255,70,62,.25);
        }

        .lv-control-label{
          position:absolute;
          right:52px;
          top:50%;
          transform:translateY(-50%);
          opacity:0;
          pointer-events:none;
          white-space:nowrap;
          padding:7px 9px;
          border:1px solid rgba(255,255,255,.13);
          border-radius:6px;
          background:rgba(4,9,11,.94);
          color:#dce5e8;
          font-size:7px;
          font-weight:900;
          letter-spacing:1px;
          transition:.18s;
        }

        .lv-control:hover .lv-control-label{
          opacity:1;
        }

        .lv-popup{
          position:absolute;
          right:52px;
          top:0;
          width:180px;
          padding:10px;
          border:1px solid rgba(94,190,238,.28);
          border-radius:10px;
          background:rgba(4,10,13,.96);
          backdrop-filter:blur(16px);
          box-shadow:0 16px 35px rgba(0,0,0,.45);
        }

        .lv-popup h4{
          margin:0 0 8px;
          font-size:8px;
          letter-spacing:1.2px;
          color:#dce5e9;
        }

        .lv-popup button{
          width:100%;
          height:31px;
          margin:3px 0;
          border:1px solid rgba(255,255,255,.09);
          border-radius:6px;
          background:rgba(255,255,255,.035);
          color:#9ca9ae;
          font-size:7px;
          font-weight:800;
          letter-spacing:.8px;
          cursor:pointer;
        }

        .lv-popup button.active{
          border-color:rgba(82,199,247,.6);
          color:#68d6ff;
          background:rgba(53,166,214,.10);
        }

        .lv-error{
          position:absolute;
          left:50%;
          top:50%;
          transform:translate(-50%,-50%);
          z-index:20;
          width:min(420px,80vw);
          padding:14px;
          border:1px solid rgba(255,88,79,.42);
          border-radius:9px;
          background:rgba(22,7,8,.9);
          color:#ffaaa5;
          font-size:9px;
          line-height:1.6;
          text-align:center;
        }

        .lv-bottom-status{
          position:absolute;
          left:20px;
          bottom:18px;
          z-index:8;
          display:flex;
          align-items:center;
          gap:7px;
          padding:8px 11px;
          border:1px solid rgba(255,255,255,.12);
          border-radius:7px;
          background:rgba(4,9,11,.72);
          backdrop-filter:blur(10px);
          color:#9aa7ac;
          font-size:7px;
          letter-spacing:1px;
          font-weight:800;
        }

        .lv-bottom-status strong{
          color:#65d7a7;
        }

        .lv-voice-status{
          position:absolute;
          left:50%;
          bottom:18px;
          transform:translateX(-50%);
          z-index:9;
          max-width:min(650px,70vw);
          padding:9px 14px;
          border:1px solid rgba(98,210,255,.26);
          border-radius:8px;
          background:rgba(3,10,13,.82);
          backdrop-filter:blur(10px);
          color:#b9dce7;
          font-size:8px;
          letter-spacing:.5px;
          text-align:center;
          box-shadow:0 12px 28px rgba(0,0,0,.25);
        }

        .lv-capture{
          position:absolute;
          left:20px;
          top:78px;
          z-index:12;
          width:210px;
          padding:8px;
          border:1px solid rgba(255,255,255,.14);
          border-radius:9px;
          background:rgba(4,9,11,.92);
          backdrop-filter:blur(12px);
          box-shadow:0 14px 30px rgba(0,0,0,.4);
        }

        .lv-capture img{
          display:block;
          width:100%;
          border-radius:6px;
          margin-bottom:7px;
        }

        .lv-capture-title{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px;
          color:#dce5e8;
          font-size:7px;
          font-weight:900;
          letter-spacing:1px;
        }

        .lv-capture-title strong{
          color:#65d7a7;
        }

        .lv-capture-actions{
          display:flex;
          gap:5px;
        }

        .lv-capture-actions button{
          flex:1;
          padding:7px;
          border:1px solid rgba(255,255,255,.12);
          border-radius:5px;
          background:rgba(255,255,255,.04);
          color:#d8e1e4;
          font-size:7px;
          font-weight:800;
          cursor:pointer;
        }

        .lv-capture-actions button:hover{
          border-color:rgba(99,213,255,.5);
          color:#69d9ff;
        }

        .lv-light-glow{
          position:absolute;
          inset:0;
          pointer-events:none;
          background:radial-gradient(circle at 52% 58%,rgba(255,214,126,.16),transparent 30%);
          mix-blend-mode:screen;
        }

        @keyframes lvPulse{
          50%{opacity:.45;transform:scale(.8)}
        }

        @media(max-width:850px){
          .lv-side-controls{
            right:10px;
            gap:5px;
            padding:6px;
          }

          .lv-control button{
            width:39px;
            height:39px;
          }

          .lv-chip{
            display:none;
          }

          .lv-bottom-status{
            bottom:10px;
            left:10px;
          }

          .lv-voice-status{
            bottom:10px;
            max-width:62vw;
          }

          .lv-capture{
            top:70px;
            left:10px;
            width:170px;
          }
        }
      `),o.createElement("div",{className:"lv-camera-stage",style:{"--lv-zoom":I,"--lv-filter":W}},v?o.createElement("video",{ref:i,className:"lv-video",autoPlay:!0,playsInline:!0,muted:!0}):o.createElement("div",{className:"lv-placeholder"},o.createElement("div",{className:"lv-placeholder-inner"},o.createElement("div",{className:"cam-icon"},o.createElement(si,{size:34})),o.createElement("h2",null,"LIVE VIDEO FEED"),o.createElement("p",null,"Tap the camera icon to connect the laptop camera for the prototype. The same view can later receive the rover camera stream."),o.createElement("button",{className:"lv-connect",onClick:T},"CONNECT CAMERA"))),D&&v&&o.createElement("div",{className:"lv-light-glow"}),o.createElement("div",{className:"lv-overlay"}),o.createElement("div",{className:"lv-top"},o.createElement("div",{className:"lv-live"},o.createElement("span",{className:"lv-live-dot"}),v?k?"LIVE":"CONNECTING":"STANDBY",G&&o.createElement("span",{style:{color:"#ff7068",marginLeft:4}},"• REC")),o.createElement("div",{className:"lv-top-right"},o.createElement("div",{className:"lv-chip"},"MODE ",o.createElement("strong",null,be)),o.createElement("div",{className:"lv-chip"},v?k?"CAMERA ACTIVE":"CAMERA STARTING":"CAMERA READY"),o.createElement("button",{className:"lv-fullscreen",onClick:he,title:Ae?"Exit fullscreen":"Fullscreen"},o.createElement(og,{size:17})))),N&&o.createElement("div",{className:"lv-error"},N),o.createElement("div",{className:"lv-bottom-status"},o.createElement("span",null,"FEED"),o.createElement("strong",null,v?k?"LIVE":"CONNECTING":"STANDBY"),o.createElement("span",null,"•"),o.createElement("span",null,"ROVER-01 READY")),ne&&o.createElement("div",{className:"lv-voice-status"},"🎙 ",ne),o.createElement("div",{className:"lv-side-controls"},o.createElement("div",{className:"lv-control"},o.createElement("button",{className:P?"active":"",onClick:fe,title:"Microphone"},o.createElement(Ur,{size:18})),o.createElement("div",{className:"lv-control-label"},P?"STOP MIC":"MIC")),o.createElement("div",{className:"lv-control"},o.createElement("button",{className:v?"active":"",onClick:v?oe:T,title:v?"Disconnect camera":"Connect camera"},o.createElement(si,{size:18})),o.createElement("div",{className:"lv-control-label"},v?"DISCONNECT":"CONNECT CAMERA")),o.createElement("div",{className:"lv-control"},o.createElement("button",{onClick:ue,title:"Take snapshot",disabled:!k,style:{opacity:k?1:.42}},o.createElement(si,{size:17})),o.createElement("div",{className:"lv-control-label"},"SNAPSHOT")),o.createElement("div",{className:"lv-control record"},o.createElement("button",{className:G?"active":"",onClick:xe,title:G?"Stop recording":"Start recording",disabled:!k,style:{opacity:k?1:.42}},o.createElement(Jm,{size:18,fill:G?"currentColor":"none"})),o.createElement("div",{className:"lv-control-label"},G?"STOP RECORDING":"RECORD")),o.createElement("div",{className:"lv-control"},o.createElement("button",{className:D?"active":"",onClick:()=>L(U=>!U),title:"Camera light"},o.createElement(rg,{size:18})),o.createElement("div",{className:"lv-control-label"},"LIGHT ",D?"ON":"OFF")),o.createElement("div",{className:"lv-control"},o.createElement("button",{className:I!==1?"active":"",onClick:()=>$(U=>U>=3?1:+(U+.25).toFixed(2)),title:"Zoom"},o.createElement(Lc,{size:18})),o.createElement("div",{className:"lv-control-label"},"ZOOM ",I.toFixed(2),"x")),o.createElement("div",{className:"lv-control"},o.createElement("button",{className:j?"active":"",onClick:()=>{F(U=>!U),Pe(!1)},title:"Camera modes"},o.createElement(ig,{size:18})),o.createElement("div",{className:"lv-control-label"},"MODE"),j&&o.createElement("div",{className:"lv-popup"},o.createElement("h4",null,"CAMERA MODE"),["NORMAL","GRAYSCALE","NIGHT VISION","THERMAL"].map(U=>o.createElement("button",{key:U,className:se===U?"active":"",onClick:()=>{ve(U),F(!1)}},U)))),o.createElement("div",{className:"lv-control"},o.createElement("button",{className:ie?"active":"",onClick:()=>{Pe(U=>!U),F(!1)},title:"More controls"},o.createElement(cg,{size:18})),o.createElement("div",{className:"lv-control-label"},"MORE"),ie&&o.createElement("div",{className:"lv-popup"},o.createElement("h4",null,"VIEW CONTROLS"),o.createElement("button",{onClick:()=>$(U=>Math.max(1,+(U-.25).toFixed(2)))},o.createElement(gg,{size:12,style:{verticalAlign:"middle",marginRight:5}}),"ZOOM OUT"),o.createElement("button",{onClick:()=>$(U=>Math.min(3,+(U+.25).toFixed(2)))},o.createElement(Lc,{size:12,style:{verticalAlign:"middle",marginRight:5}}),"ZOOM IN"),o.createElement("button",{onClick:()=>{$(1),ve("NORMAL"),L(!1),Pe(!1)}},"RESET VIEW"),o.createElement("button",{onClick:()=>{Pe(!1),R("ROVER CAMERA • HARDWARE STREAM READY")}},"ROVER CAMERA • READY")))),Se&&o.createElement("div",{className:"lv-capture"},o.createElement("div",{className:"lv-capture-title"},o.createElement("span",null,"SNAPSHOT CAPTURED"),ee&&o.createElement("strong",null,"SAVED")),o.createElement("img",{src:Se,alt:"Latest MineNova snapshot"}),o.createElement("div",{className:"lv-capture-actions"},o.createElement("button",{onClick:pe},ee?"SAVED":"SAVE PHOTO"),o.createElement("button",{onClick:()=>{Re(null),te(!1)}},"CLOSE"))),V&&!Se&&o.createElement("div",{style:{position:"absolute",left:20,top:78,zIndex:12,padding:"9px 12px",border:"1px solid rgba(101,215,167,.32)",borderRadius:8,background:"rgba(4,14,11,.9)",color:"#65d7a7",fontSize:8,fontWeight:900,letterSpacing:1}},"✓ LIVE RECORDING SAVED")),o.createElement("canvas",{ref:c,style:{display:"none"}}))}function Sg(){const[i,c]=x.useState(null),[s,d]=x.useState(0),p=[["N01",7,55,"NORMAL"],["N02",17,42,"NORMAL"],["N03",27,45,"NORMAL"],["N04",37,36,"NORMAL"],["N05",46,23,"NORMAL"],["N06",57,31,"WEAK"],["N07",68,20,"NORMAL"],["N08",79,34,"NORMAL"],["N09",89,50,"NORMAL"],["N10",29,61,"NORMAL"],["N11",36,72,"NORMAL"],["N12",47,78,"WEAK"],["N13",55,64,"NORMAL"],["N14",61,75,"CRITICAL"],["N15",70,69,"NORMAL"],["N16",80,58,"NORMAL"],["N17",87,43,"NORMAL"],["N18",94,68,"NORMAL"],["N19",75,84,"NORMAL"],["N20",48,88,"NORMAL"]];x.useEffect(()=>{const N=setInterval(()=>d(R=>R+1),2200);return()=>clearInterval(N)},[]);const m=p.map(([N,R,I,$],D)=>{let L=$;N!=="N14"&&N!=="N06"&&N!=="N12"&&(s+D*3)%23===0&&(L="WEAK"),N!=="N14"&&L==="WEAK"&&(s+D)%9===0&&(L="NORMAL");const P=L==="CRITICAL"?18+s*3%7:L==="WEAK"?48+(s+D)%15:87+(s+D*2)%12,A=Math.max(42,96-(s+D*5)%31),G=(31+(s+D)%7*.8).toFixed(1),X=Math.round(120+D*15+(s+D)%5);return{id:N,left:R,top:I,status:L,signal:P,battery:A,temperature:G,depth:X,issue:L==="CRITICAL"?"Methane concentration high":L==="WEAK"?"Signal strength unstable":"Relay connection stable"}}),v={normal:m.filter(N=>N.status==="NORMAL").length,weak:m.filter(N=>N.status==="WEAK").length,critical:m.filter(N=>N.status==="CRITICAL").length},y=i?m.find(N=>N.id===i.id)||i:m.find(N=>N.id==="N14"),k=["M 7 55 C 12 42, 14 42, 17 42 S 23 45, 27 45 S 33 37, 37 36 S 42 25, 46 23","M 46 23 C 51 19, 53 27, 57 31 S 63 23, 68 20 S 75 29, 79 34 S 85 44, 89 50","M 27 45 C 30 52, 29 57, 29 61 S 33 69, 36 72 S 42 76, 47 78","M 37 36 C 42 42, 43 57, 47 58 S 51 62, 55 64 S 58 70, 61 75","M 57 31 C 60 39, 61 52, 55 64 S 63 69, 70 69 S 77 60, 80 58","M 79 34 C 82 42, 84 45, 89 50 S 91 61, 94 68","M 61 75 C 66 80, 69 84, 75 84 S 83 72, 87 72","M 47 78 C 47 83, 47 85, 48 88 S 57 88, 61 75"],C=(y.status==="CRITICAL","/mine-map.png");return o.createElement("section",{className:"network-page"},o.createElement("style",null,`
        .network-page{
          min-height:calc(100vh - 72px);
          height:calc(100vh - 72px);
          overflow:hidden;
          box-sizing:border-box;
          padding:12px 16px 10px;
          color:#edf5f6;
          background:
            radial-gradient(circle at 62% 10%,rgba(35,104,116,.18),transparent 35%),
            linear-gradient(135deg,#030709 0%,#081218 52%,#030608 100%);
        }

        .net-head{
          height:54px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:9px;
          padding:0 2px;
        }

        .net-title-wrap{display:flex;align-items:center;gap:12px}
        .net-title-icon{
          width:42px;height:42px;border-radius:10px;
          display:grid;place-items:center;
          color:#43d8ff;
          border:1px solid rgba(53,205,239,.28);
          background:rgba(26,119,141,.10);
          box-shadow:0 0 24px rgba(44,194,231,.08);
        }
        .net-kicker{
          color:#5fdcff;
          font-size:7px;font-weight:900;letter-spacing:2.2px;
        }
        .net-head h1{
          margin:3px 0 2px;font-size:23px;line-height:1;letter-spacing:1.2px;
        }
        .net-head p{
          margin:0;color:#7f9198;font-size:7px;letter-spacing:1px;
        }
        .net-quote{
          color:#a8b7bc;font-size:9px;font-style:italic;line-height:1.45;
          text-align:right;margin-right:14px;
        }
        .net-live{
          display:flex;align-items:center;gap:7px;
          padding:8px 11px;border:1px solid rgba(74,209,162,.28);
          border-radius:7px;background:rgba(74,209,162,.05);
          color:#69dfad;font-size:7px;font-weight:900;letter-spacing:1px;
        }
        .net-live i{
          width:7px;height:7px;border-radius:50%;background:#4fd89c;
          box-shadow:0 0 11px #4fd89c;animation:netOnlinePulse 1.7s infinite;
        }

        .net-layout{
          height:calc(100% - 63px);
          display:grid;
          grid-template-columns:minmax(0,2.25fr) minmax(285px,.82fr);
          grid-template-rows:minmax(0,1fr) 142px;
          gap:10px;
        }

        .net-card{
          position:relative;
          border:1px solid rgba(70,188,219,.30);
          border-radius:11px;
          background:linear-gradient(145deg,rgba(12,25,31,.96),rgba(4,10,13,.98));
          box-shadow:0 18px 38px rgba(0,0,0,.36),inset 0 1px 0 rgba(255,255,255,.035);
          overflow:hidden;
        }

        .net-map{
          position:relative;
          min-height:0;
          border-color:rgba(57,197,230,.38);
          background:
            linear-gradient(180deg,rgba(2,8,11,.14),rgba(2,8,11,.28)),
            url('/mine-map.png');
          background-size:cover;
          background-position:center;
        }

        .net-map:after{
          content:"";
          position:absolute;inset:0;pointer-events:none;
          background:
            radial-gradient(circle at 50% 48%,transparent 26%,rgba(0,0,0,.12) 65%,rgba(0,0,0,.52) 100%),
            linear-gradient(180deg,rgba(2,7,9,.08),rgba(2,7,9,.26));
        }

        .net-map-label{
          position:absolute;left:15px;top:13px;z-index:12;
          padding:8px 11px;border:1px solid rgba(85,208,235,.25);
          border-radius:7px;background:rgba(3,10,13,.82);
          backdrop-filter:blur(9px);
        }
        .net-map-label strong{display:block;font-size:8px;letter-spacing:1.4px}
        .net-map-label span{display:block;margin-top:3px;color:#71868e;font-size:6.5px;letter-spacing:.9px}

        .net-gateway{
          position:absolute;left:15px;bottom:16px;z-index:12;
          display:flex;align-items:center;gap:7px;
          padding:7px 9px;border:1px solid rgba(45,226,171,.38);
          border-radius:7px;background:rgba(2,11,12,.86);
          color:#66dfb1;font-size:7px;font-weight:900;letter-spacing:1px;
        }
        .net-gateway i{width:7px;height:7px;border-radius:50%;background:#39dfa8;box-shadow:0 0 10px #39dfa8}

        .net-routes{
          position:absolute;inset:0;width:100%;height:100%;z-index:4;pointer-events:none;
        }
        .route-base{
          fill:none;stroke:rgba(3,10,12,.96);stroke-width:5.4;
          stroke-linecap:round;stroke-linejoin:round;
          filter:drop-shadow(0 3px 4px rgba(0,0,0,.65));
        }
        .route-core{
          fill:none;stroke:rgba(52,211,228,.72);stroke-width:1.7;
          stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:2.5 4.5;
          filter:drop-shadow(0 0 4px rgba(50,211,232,.48));
          animation:routeFlow 5s linear infinite;
        }
        .route-warning{stroke:rgba(239,182,66,.78)}
        .route-danger{stroke:rgba(238,65,65,.86)}

        .net-node{
          position:absolute;z-index:10;transform:translate(-50%,-50%);
          cursor:pointer;
        }
        .net-node-dot{
          width:25px;height:25px;border-radius:50%;
          display:grid;place-items:center;
          border:2px solid rgba(220,255,250,.96);
          transition:.2s;
          box-sizing:border-box;
        }
        .net-node-dot:before{
          content:"";width:7px;height:7px;border-radius:50%;background:#fff;
        }
        .net-node:hover .net-node-dot{transform:scale(1.13)}
        .net-node.normal .net-node-dot{
          background:#14b982;
          box-shadow:0 0 0 4px rgba(0,0,0,.34),0 0 18px rgba(20,220,164,.72);
        }
        .net-node.weak .net-node-dot{
          background:#e2a82d;
          box-shadow:0 0 0 4px rgba(0,0,0,.34),0 0 20px rgba(226,168,45,.82);
        }
        .net-node.critical .net-node-dot{
          width:34px;height:34px;background:#e63838;
          box-shadow:0 0 0 7px rgba(232,56,56,.13),0 0 31px rgba(232,56,56,.95);
          animation:netDanger 1.2s infinite;
        }
        .net-node.critical .net-node-dot:before{width:9px;height:9px}
        .net-node.selected .net-node-dot{outline:2px solid #fff;outline-offset:2px}

        .net-node-label{
          position:absolute;left:17px;top:-9px;
          min-width:27px;padding:3px 5px;
          border-radius:4px;background:rgba(2,8,10,.88);
          border:1px solid rgba(255,255,255,.13);
          color:#d8e3e5;font-size:6.5px;font-weight:900;letter-spacing:.6px;
          white-space:nowrap;pointer-events:none;
        }
        .net-node.weak .net-node-label{color:#ffd263;border-color:rgba(226,168,45,.45)}
        .net-node.critical .net-node-label{color:#ff6b6b;border-color:rgba(238,65,65,.62)}

        .net-danger-callout{
          position:absolute;z-index:13;
          left:48%;top:51%;
          width:190px;padding:11px 12px;
          border:1px solid rgba(242,68,68,.82);
          border-radius:8px;
          background:rgba(8,12,14,.95);
          box-shadow:0 12px 28px rgba(0,0,0,.56),0 0 22px rgba(235,53,53,.10);
        }
        .net-danger-callout:after{
          content:"";position:absolute;left:20px;bottom:-21px;
          width:2px;height:22px;background:#ed4444;transform:rotate(35deg);
          transform-origin:top;
        }
        .net-danger-callout strong{
          display:flex;align-items:center;gap:7px;color:#ff5555;
          font-size:11px;letter-spacing:1px;
        }
        .net-danger-callout p{
          margin:6px 0 0;color:#d4d9db;font-size:8px;line-height:1.55;
        }
        .net-danger-callout span{
          display:block;margin-top:6px;color:#ff7777;font-size:6.5px;font-weight:900;letter-spacing:1px;
        }

        .net-legend{
          position:absolute;right:13px;top:13px;z-index:12;
          width:143px;padding:9px 10px;
          border:1px solid rgba(102,211,235,.27);border-radius:7px;
          background:rgba(3,10,13,.82);backdrop-filter:blur(8px);
        }
        .net-legend-title{font-size:6.5px;color:#7e949c;letter-spacing:1px;margin-bottom:7px}
        .net-legend-row{
          display:flex;align-items:center;gap:7px;margin:5px 0;
          color:#bdc9cd;font-size:7px;
        }
        .net-legend-row i{width:10px;height:10px;border-radius:50%}
        .net-legend-row .g{background:#20d096;box-shadow:0 0 8px rgba(32,208,150,.6)}
        .net-legend-row .y{background:#e6b536;box-shadow:0 0 8px rgba(230,181,54,.5)}
        .net-legend-row .r{background:#ef4848;box-shadow:0 0 10px rgba(239,72,72,.65)}

        .net-map-tools{
          position:absolute;right:13px;bottom:14px;z-index:12;
          display:flex;gap:6px;
        }
        .net-map-tools button{
          border:1px solid rgba(63,199,230,.35);border-radius:6px;
          padding:7px 9px;background:rgba(3,11,14,.84);color:#83dfff;
          font-size:6.5px;font-weight:900;letter-spacing:.7px;cursor:pointer;
        }
        .net-map-tools button:hover{background:rgba(30,107,125,.25);border-color:#4fdcff}

        .net-details{
          padding:11px 12px 12px;
          display:flex;flex-direction:column;
        }
        .net-details-head{
          display:flex;align-items:center;justify-content:space-between;
          padding-bottom:9px;border-bottom:1px solid rgba(255,255,255,.07);
        }
        .net-details-head h2{margin:0;font-size:15px;letter-spacing:.8px}
        .net-details-head h2 span{color:#ff4f4f}
        .net-status-badge{
          padding:6px 8px;border:1px solid rgba(239,65,65,.62);border-radius:6px;
          color:#ff6767;background:rgba(239,65,65,.09);font-size:6.5px;font-weight:900;letter-spacing:1px;
        }
        .net-node-photo{
          height:88px;margin:9px 0 8px;border-radius:7px;
          border:1px solid rgba(255,255,255,.10);
          background-image:linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.32)),url('/mine-map.png');
          background-size:cover;background-position:center;
          box-shadow:inset 0 0 25px rgba(0,0,0,.45);
        }
        .net-detail-row{
          display:grid;grid-template-columns:18px 1fr auto;
          align-items:center;gap:7px;
          min-height:25px;border-bottom:1px solid rgba(255,255,255,.055);
          color:#9eafb5;font-size:7px;
        }
        .net-detail-row svg{color:#7d969f}
        .net-detail-row strong{color:#eef4f5;font-size:8px;font-weight:800}
        .net-detail-row strong.red{color:#ff5a5a}
        .net-progress{
          width:72px;height:6px;border-radius:5px;background:#15242a;overflow:hidden;
          border:1px solid rgba(255,255,255,.06);
        }
        .net-progress i{display:block;height:100%;border-radius:5px;background:#36d89e;transition:width .5s}
        .net-progress.danger i{background:#ef3f48}
        .net-locate{
          margin-top:9px;width:100%;padding:9px;
          border:1px solid rgba(241,66,66,.75);border-radius:7px;
          background:linear-gradient(135deg,rgba(207,49,49,.88),rgba(119,22,25,.86));
          color:#fff;font-size:7px;font-weight:900;letter-spacing:.8px;cursor:pointer;
          box-shadow:0 0 17px rgba(226,53,53,.15);
        }
        .net-locate:hover{filter:brightness(1.08)}

        .net-bottom-card{padding:11px 12px}
        .net-bottom-title{
          display:flex;align-items:center;justify-content:space-between;
          margin-bottom:9px;
        }
        .net-bottom-title strong{font-size:9px;letter-spacing:1.2px}
        .net-bottom-title span{font-size:6.5px;color:#6e828a;letter-spacing:.8px}
        .net-overview-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
        .net-overview-box{
          min-width:0;padding:10px 9px;border-radius:7px;
          border:1px solid rgba(255,255,255,.07);
          background:linear-gradient(145deg,rgba(255,255,255,.04),rgba(255,255,255,.012));
        }
        .net-overview-box span{display:block;color:#71838a;font-size:6px;letter-spacing:.8px}
        .net-overview-box strong{display:block;margin-top:5px;font-size:17px}
        .net-overview-box small{display:block;margin-top:3px;color:#61737b;font-size:6px}
        .net-overview-box.green strong{color:#4fe1a6}
        .net-overview-box.yellow strong{color:#eec050}
        .net-overview-box.red strong{color:#ff5555}

        .net-env-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px}
        .net-env-box{
          padding:9px;border-radius:7px;border:1px solid rgba(67,186,220,.13);
          background:linear-gradient(145deg,rgba(18,58,69,.27),rgba(7,17,21,.5));
        }
        .net-env-box span{display:block;color:#789099;font-size:6px;letter-spacing:.8px}
        .net-env-box strong{display:block;margin-top:5px;font-size:13px}
        .net-env-box.gas strong{color:#4fe1a6}
        .net-env-box.temp strong{color:#55cfff}
        .net-env-box.humidity strong{color:#55bfff}
        .net-env-box.collapse strong{color:#e8b13d}

        .net-bottom-wide{grid-column:1;display:grid;grid-template-columns:1.15fr .85fr;gap:10px}
        .net-bottom-side{grid-column:2;grid-row:2;display:none}

        @keyframes netDanger{
          50%{
            box-shadow:0 0 0 11px rgba(239,70,70,.035),0 0 38px rgba(239,70,70,.98);
          }
        }
        @keyframes routeFlow{
          to{stroke-dashoffset:-36}
        }
        @keyframes netOnlinePulse{50%{opacity:.45}}

        @media(max-width:1050px){
          .network-page{height:auto;min-height:100vh;overflow:auto}
          .net-head{height:auto;min-height:58px}
          .net-quote{display:none}
          .net-layout{height:auto;grid-template-columns:1fr;grid-template-rows:560px auto auto}
          .net-bottom-wide{grid-column:1;grid-row:auto}
          .net-details{min-height:390px}
        }

        @media(max-width:700px){
          .network-page{padding:10px}
          .net-title-icon{display:none}
          .net-head h1{font-size:18px}
          .net-layout{grid-template-rows:480px auto auto}
          .net-overview-grid{grid-template-columns:1fr 1fr}
          .net-map-tools{display:none}
          .net-danger-callout{left:37%;top:54%;width:155px}
        }
      `),o.createElement("div",{className:"net-head"},o.createElement("div",{className:"net-title-wrap"},o.createElement("div",{className:"net-title-icon"},o.createElement(od,{size:25})),o.createElement("div",null,o.createElement("div",{className:"net-kicker"},"MINENOVA • UNDERGROUND CONNECTIVITY"),o.createElement("h1",null,"UNDERGROUND NETWORK"),o.createElement("p",null,"Live node status and mission connectivity"))),o.createElement("div",{className:"net-quote"},"“Every connection brings",o.createElement("br",null),"someone closer to safety.”"),o.createElement("div",{className:"net-live"},o.createElement("i",null)," NETWORK ONLINE")),o.createElement("div",{className:"net-layout"},o.createElement("div",{className:"net-card net-map"},o.createElement("div",{className:"net-map-label"},o.createElement("strong",null,"MINE MAP — NODE NETWORK"),o.createElement("span",null,"LIVE UNDERGROUND ROUTES • SIMULATION")),o.createElement("div",{className:"net-gateway"},o.createElement("i",null)," SURFACE GATEWAY • ONLINE"),o.createElement("svg",{className:"net-routes",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true"},k.map((N,R)=>o.createElement("g",{key:R},o.createElement("path",{className:`route-base ${R===5?"route-danger":R===1?"route-warning":""}`,d:N,vectorEffect:"non-scaling-stroke"}),o.createElement("path",{className:`route-core ${R===5?"route-danger":R===1?"route-warning":""}`,d:N,vectorEffect:"non-scaling-stroke"})))),m.map(N=>o.createElement("div",{key:N.id,className:`net-node ${N.status.toLowerCase()} ${(i==null?void 0:i.id)===N.id?"selected":""}`,style:{left:`${N.left}%`,top:`${N.top}%`},onClick:()=>c(N),title:`Open ${N.id} details`},o.createElement("div",{className:"net-node-dot"}),o.createElement("div",{className:"net-node-label"},N.id))),o.createElement("div",{className:"net-danger-callout"},o.createElement("strong",null,o.createElement(ta,{size:15})," DANGER"),o.createElement("p",null,"Methane level high",o.createElement("br",null),"Signal unstable",o.createElement("br",null),"Inspect immediately"),o.createElement("span",null,"NODE 14 • CRITICAL")),o.createElement("div",{className:"net-legend"},o.createElement("div",{className:"net-legend-title"},"NETWORK LEGEND"),o.createElement("div",{className:"net-legend-row"},o.createElement("i",{className:"g"}),"Normal Node"),o.createElement("div",{className:"net-legend-row"},o.createElement("i",{className:"y"}),"Weak Signal"),o.createElement("div",{className:"net-legend-row"},o.createElement("i",{className:"r"}),"Danger / Critical")),o.createElement("div",{className:"net-map-tools"},o.createElement("button",null,"3D VIEW"),o.createElement("button",null,"RESET VIEW"))),o.createElement("aside",{className:"net-card net-details"},o.createElement("div",{className:"net-details-head"},o.createElement("h2",null,o.createElement("span",null,y.id)," — DETAILS"),o.createElement("div",{className:"net-status-badge"},y.status)),o.createElement("div",{className:"net-node-photo",style:{backgroundImage:`linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.34)),url('${C}')`}}),o.createElement("div",{className:"net-detail-row"},o.createElement(ra,{size:14}),o.createElement("span",null,"Status"),o.createElement("strong",{className:y.status==="CRITICAL"?"red":""},y.status==="CRITICAL"?"High Risk":y.status==="WEAK"?"Weak Signal":"Normal")),o.createElement("div",{className:"net-detail-row"},o.createElement(sd,{size:14}),o.createElement("span",null,"Signal Strength"),o.createElement("div",{style:{display:"flex",alignItems:"center",gap:7}},o.createElement("div",{className:`net-progress ${y.status==="CRITICAL"?"danger":""}`},o.createElement("i",{style:{width:`${y.signal}%`}})),o.createElement("strong",null,y.signal,"%"))),o.createElement("div",{className:"net-detail-row"},o.createElement(qm,{size:14}),o.createElement("span",null,"Battery Level"),o.createElement("div",{style:{display:"flex",alignItems:"center",gap:7}},o.createElement("div",{className:"net-progress"},o.createElement("i",{style:{width:`${y.battery}%`}})),o.createElement("strong",null,y.battery,"%"))),o.createElement("div",{className:"net-detail-row"},o.createElement(lg,{size:14}),o.createElement("span",null,"Depth"),o.createElement("strong",null,y.depth," m")),o.createElement("div",{className:"net-detail-row"},o.createElement(dg,{size:14}),o.createElement("span",null,"Temperature"),o.createElement("strong",null,y.temperature,"°C")),o.createElement("div",{className:"net-detail-row"},o.createElement(ta,{size:14}),o.createElement("span",null,"Methane (CH₄)"),o.createElement("strong",{className:y.status==="CRITICAL"?"red":""},y.status==="CRITICAL"?"High":"Normal")),o.createElement("div",{className:"net-detail-row"},o.createElement(ra,{size:14}),o.createElement("span",null,"Last Contact"),o.createElement("strong",null,y.status==="CRITICAL"?"3 min ago":"Just now")),o.createElement("div",{className:"net-detail-row"},o.createElement(ta,{size:14}),o.createElement("span",null,"Possible Cause"),o.createElement("strong",null,y.status==="CRITICAL"?"Gas Leak":y.status==="WEAK"?"Relay Distance":"—")),o.createElement("div",{className:"net-detail-row"},o.createElement(id,{size:14}),o.createElement("span",null,"Recommended Action"),o.createElement("strong",null,y.status==="CRITICAL"?"Inspect node":"Continue monitoring")),o.createElement("button",{className:"net-locate",onClick:()=>c(m.find(N=>N.id==="N14"))},o.createElement(ad,{size:13})," LOCATE NODE ON MAP")),o.createElement("div",{className:"net-bottom-wide"},o.createElement("div",{className:"net-card net-bottom-card"},o.createElement("div",{className:"net-bottom-title"},o.createElement("strong",null,"NETWORK OVERVIEW"),o.createElement("span",null,"LIVE SIMULATION")),o.createElement("div",{className:"net-overview-grid"},o.createElement("div",{className:"net-overview-box"},o.createElement("span",null,"TOTAL NODES"),o.createElement("strong",null,m.length),o.createElement("small",null,"DEPLOYED")),o.createElement("div",{className:"net-overview-box green"},o.createElement("span",null,"ACTIVE NODES"),o.createElement("strong",null,v.normal),o.createElement("small",null,"CONNECTED")),o.createElement("div",{className:"net-overview-box yellow"},o.createElement("span",null,"WEAK NODES"),o.createElement("strong",null,v.weak),o.createElement("small",null,"CHECK SIGNAL")),o.createElement("div",{className:"net-overview-box red"},o.createElement("span",null,"CRITICAL NODES"),o.createElement("strong",null,v.critical),o.createElement("small",null,"IMMEDIATE ACTION")))),o.createElement("div",{className:"net-card net-bottom-card"},o.createElement("div",{className:"net-bottom-title"},o.createElement("strong",null,"ENVIRONMENT OVERVIEW"),o.createElement("span",null,"UNDERGROUND")),o.createElement("div",{className:"net-env-grid"},o.createElement("div",{className:"net-env-box gas"},o.createElement("span",null,"GAS LEVEL"),o.createElement("strong",null,y.status==="CRITICAL"?"HIGH":"NORMAL")),o.createElement("div",{className:"net-env-box temp"},o.createElement("span",null,"TEMPERATURE"),o.createElement("strong",null,y.temperature,"°C")),o.createElement("div",{className:"net-env-box humidity"},o.createElement("span",null,"HUMIDITY"),o.createElement("strong",null,68+(s+3)%4,"%")),o.createElement("div",{className:"net-env-box collapse"},o.createElement("span",null,"COLLAPSE RISK"),o.createElement("strong",null,y.status==="CRITICAL"?"HIGH":"MODERATE")))))))}mf.createRoot(document.getElementById("root")).render(o.createElement(o.StrictMode,null,o.createElement(Fm,null,o.createElement(yg,null))));
