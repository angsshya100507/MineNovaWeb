(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const x of h.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&d(x)}).observe(document,{childList:!0,subtree:!0});function s(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=s(p);fetch(p.href,h)}})();function Dc(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var na={exports:{}},Dr={},ra={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function pf(){if(xc)return ce;xc=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),x=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),j=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function L(w){return w===null||typeof w!="object"?null:(w=R&&w[R]||w["@@iterator"],typeof w=="function"?w:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,M={};function I(w,C,ie){this.props=w,this.context=C,this.refs=M,this.updater=ie||V}I.prototype.isReactComponent={},I.prototype.setState=function(w,C){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,C,"setState")},I.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function P(){}P.prototype=I.prototype;function G(w,C,ie){this.props=w,this.context=C,this.refs=M,this.updater=ie||V}var X=G.prototype=new P;X.constructor=G,_(X,I.prototype),X.isPureReactComponent=!0;var ne=Array.isArray,le=Object.prototype.hasOwnProperty,se={current:null},xe={key:!0,ref:!0,__self:!0,__source:!0};function $(w,C,ie){var ue,pe={},fe=null,ye=null;if(C!=null)for(ue in C.ref!==void 0&&(ye=C.ref),C.key!==void 0&&(fe=""+C.key),C)le.call(C,ue)&&!xe.hasOwnProperty(ue)&&(pe[ue]=C[ue]);var ge=arguments.length-2;if(ge===1)pe.children=ie;else if(1<ge){for(var Ee=Array(ge),D=0;D<ge;D++)Ee[D]=arguments[D+2];pe.children=Ee}if(w&&w.defaultProps)for(ue in ge=w.defaultProps,ge)pe[ue]===void 0&&(pe[ue]=ge[ue]);return{$$typeof:a,type:w,key:fe,ref:ye,props:pe,_owner:se.current}}function U(w,C){return{$$typeof:a,type:w.type,key:C,ref:w.ref,props:w.props,_owner:w._owner}}function ae(w){return typeof w=="object"&&w!==null&&w.$$typeof===a}function Ie(w){var C={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ie){return C[ie]})}var Se=/\/+/g;function Re(w,C){return typeof w=="object"&&w!==null&&w.key!=null?Ie(""+w.key):C.toString(36)}function ee(w,C,ie,ue,pe){var fe=typeof w;(fe==="undefined"||fe==="boolean")&&(w=null);var ye=!1;if(w===null)ye=!0;else switch(fe){case"string":case"number":ye=!0;break;case"object":switch(w.$$typeof){case a:case c:ye=!0}}if(ye)return ye=w,pe=pe(ye),w=ue===""?"."+Re(ye,0):ue,ne(pe)?(ie="",w!=null&&(ie=w.replace(Se,"$&/")+"/"),ee(pe,C,ie,"",function(D){return D})):pe!=null&&(ae(pe)&&(pe=U(pe,ie+(!pe.key||ye&&ye.key===pe.key?"":(""+pe.key).replace(Se,"$&/")+"/")+w)),C.push(pe)),1;if(ye=0,ue=ue===""?".":ue+":",ne(w))for(var ge=0;ge<w.length;ge++){fe=w[ge];var Ee=ue+Re(fe,ge);ye+=ee(fe,C,ie,Ee,pe)}else if(Ee=L(w),typeof Ee=="function")for(w=Ee.call(w),ge=0;!(fe=w.next()).done;)fe=fe.value,Ee=ue+Re(fe,ge++),ye+=ee(fe,C,ie,Ee,pe);else if(fe==="object")throw C=String(w),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return ye}function te(w,C,ie){if(w==null)return w;var ue=[],pe=0;return ee(w,ue,"","",function(fe){return C.call(ie,fe,pe++)}),ue}function Pe(w){if(w._status===-1){var C=w._result;C=C(),C.then(function(ie){(w._status===0||w._status===-1)&&(w._status=1,w._result=ie)},function(ie){(w._status===0||w._status===-1)&&(w._status=2,w._result=ie)}),w._status===-1&&(w._status=0,w._result=C)}if(w._status===1)return w._result.default;throw w._result}var be={current:null},F={transition:null},q={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:F,ReactCurrentOwner:se};function W(){throw Error("act(...) is not supported in production builds of React.")}return ce.Children={map:te,forEach:function(w,C,ie){te(w,function(){C.apply(this,arguments)},ie)},count:function(w){var C=0;return te(w,function(){C++}),C},toArray:function(w){return te(w,function(C){return C})||[]},only:function(w){if(!ae(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},ce.Component=I,ce.Fragment=s,ce.Profiler=p,ce.PureComponent=G,ce.StrictMode=d,ce.Suspense=k,ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,ce.act=W,ce.cloneElement=function(w,C,ie){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var ue=_({},w.props),pe=w.key,fe=w.ref,ye=w._owner;if(C!=null){if(C.ref!==void 0&&(fe=C.ref,ye=se.current),C.key!==void 0&&(pe=""+C.key),w.type&&w.type.defaultProps)var ge=w.type.defaultProps;for(Ee in C)le.call(C,Ee)&&!xe.hasOwnProperty(Ee)&&(ue[Ee]=C[Ee]===void 0&&ge!==void 0?ge[Ee]:C[Ee])}var Ee=arguments.length-2;if(Ee===1)ue.children=ie;else if(1<Ee){ge=Array(Ee);for(var D=0;D<Ee;D++)ge[D]=arguments[D+2];ue.children=ge}return{$$typeof:a,type:w.type,key:pe,ref:fe,props:ue,_owner:ye}},ce.createContext=function(w){return w={$$typeof:x,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:h,_context:w},w.Consumer=w},ce.createElement=$,ce.createFactory=function(w){var C=$.bind(null,w);return C.type=w,C},ce.createRef=function(){return{current:null}},ce.forwardRef=function(w){return{$$typeof:v,render:w}},ce.isValidElement=ae,ce.lazy=function(w){return{$$typeof:E,_payload:{_status:-1,_result:w},_init:Pe}},ce.memo=function(w,C){return{$$typeof:j,type:w,compare:C===void 0?null:C}},ce.startTransition=function(w){var C=F.transition;F.transition={};try{w()}finally{F.transition=C}},ce.unstable_act=W,ce.useCallback=function(w,C){return be.current.useCallback(w,C)},ce.useContext=function(w){return be.current.useContext(w)},ce.useDebugValue=function(){},ce.useDeferredValue=function(w){return be.current.useDeferredValue(w)},ce.useEffect=function(w,C){return be.current.useEffect(w,C)},ce.useId=function(){return be.current.useId()},ce.useImperativeHandle=function(w,C,ie){return be.current.useImperativeHandle(w,C,ie)},ce.useInsertionEffect=function(w,C){return be.current.useInsertionEffect(w,C)},ce.useLayoutEffect=function(w,C){return be.current.useLayoutEffect(w,C)},ce.useMemo=function(w,C){return be.current.useMemo(w,C)},ce.useReducer=function(w,C,ie){return be.current.useReducer(w,C,ie)},ce.useRef=function(w){return be.current.useRef(w)},ce.useState=function(w){return be.current.useState(w)},ce.useSyncExternalStore=function(w,C,ie){return be.current.useSyncExternalStore(w,C,ie)},ce.useTransition=function(){return be.current.useTransition()},ce.version="18.3.1",ce}var vc;function ga(){return vc||(vc=1,ra.exports=pf()),ra.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc;function ff(){if(yc)return Dr;yc=1;var a=ga(),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,p=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function x(v,k,j){var E,R={},L=null,V=null;j!==void 0&&(L=""+j),k.key!==void 0&&(L=""+k.key),k.ref!==void 0&&(V=k.ref);for(E in k)d.call(k,E)&&!h.hasOwnProperty(E)&&(R[E]=k[E]);if(v&&v.defaultProps)for(E in k=v.defaultProps,k)R[E]===void 0&&(R[E]=k[E]);return{$$typeof:c,type:v,key:L,ref:V,props:R,_owner:p.current}}return Dr.Fragment=s,Dr.jsx=x,Dr.jsxs=x,Dr}var wc;function hf(){return wc||(wc=1,na.exports=ff()),na.exports}var i=hf(),y=ga();const kn=Dc(y);var Jo={},oa={exports:{}},ot={},la={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc;function mf(){return kc||(kc=1,(function(a){function c(F,q){var W=F.length;F.push(q);e:for(;0<W;){var w=W-1>>>1,C=F[w];if(0<p(C,q))F[w]=q,F[W]=C,W=w;else break e}}function s(F){return F.length===0?null:F[0]}function d(F){if(F.length===0)return null;var q=F[0],W=F.pop();if(W!==q){F[0]=W;e:for(var w=0,C=F.length,ie=C>>>1;w<ie;){var ue=2*(w+1)-1,pe=F[ue],fe=ue+1,ye=F[fe];if(0>p(pe,W))fe<C&&0>p(ye,pe)?(F[w]=ye,F[fe]=W,w=fe):(F[w]=pe,F[ue]=W,w=ue);else if(fe<C&&0>p(ye,W))F[w]=ye,F[fe]=W,w=fe;else break e}}return q}function p(F,q){var W=F.sortIndex-q.sortIndex;return W!==0?W:F.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;a.unstable_now=function(){return h.now()}}else{var x=Date,v=x.now();a.unstable_now=function(){return x.now()-v}}var k=[],j=[],E=1,R=null,L=3,V=!1,_=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function X(F){for(var q=s(j);q!==null;){if(q.callback===null)d(j);else if(q.startTime<=F)d(j),q.sortIndex=q.expirationTime,c(k,q);else break;q=s(j)}}function ne(F){if(M=!1,X(F),!_)if(s(k)!==null)_=!0,Pe(le);else{var q=s(j);q!==null&&be(ne,q.startTime-F)}}function le(F,q){_=!1,M&&(M=!1,P($),$=-1),V=!0;var W=L;try{for(X(q),R=s(k);R!==null&&(!(R.expirationTime>q)||F&&!Ie());){var w=R.callback;if(typeof w=="function"){R.callback=null,L=R.priorityLevel;var C=w(R.expirationTime<=q);q=a.unstable_now(),typeof C=="function"?R.callback=C:R===s(k)&&d(k),X(q)}else d(k);R=s(k)}if(R!==null)var ie=!0;else{var ue=s(j);ue!==null&&be(ne,ue.startTime-q),ie=!1}return ie}finally{R=null,L=W,V=!1}}var se=!1,xe=null,$=-1,U=5,ae=-1;function Ie(){return!(a.unstable_now()-ae<U)}function Se(){if(xe!==null){var F=a.unstable_now();ae=F;var q=!0;try{q=xe(!0,F)}finally{q?Re():(se=!1,xe=null)}}else se=!1}var Re;if(typeof G=="function")Re=function(){G(Se)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=Se,Re=function(){te.postMessage(null)}}else Re=function(){I(Se,0)};function Pe(F){xe=F,se||(se=!0,Re())}function be(F,q){$=I(function(){F(a.unstable_now())},q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(F){F.callback=null},a.unstable_continueExecution=function(){_||V||(_=!0,Pe(le))},a.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<F?Math.floor(1e3/F):5},a.unstable_getCurrentPriorityLevel=function(){return L},a.unstable_getFirstCallbackNode=function(){return s(k)},a.unstable_next=function(F){switch(L){case 1:case 2:case 3:var q=3;break;default:q=L}var W=L;L=q;try{return F()}finally{L=W}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(F,q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=L;L=F;try{return q()}finally{L=W}},a.unstable_scheduleCallback=function(F,q,W){var w=a.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?w+W:w):W=w,F){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=W+C,F={id:E++,callback:q,priorityLevel:F,startTime:W,expirationTime:C,sortIndex:-1},W>w?(F.sortIndex=W,c(j,F),s(k)===null&&F===s(j)&&(M?(P($),$=-1):M=!0,be(ne,W-w))):(F.sortIndex=C,c(k,F),_||V||(_=!0,Pe(le))),F},a.unstable_shouldYield=Ie,a.unstable_wrapCallback=function(F){var q=L;return function(){var W=L;L=q;try{return F.apply(this,arguments)}finally{L=W}}}})(ia)),ia}var bc;function gf(){return bc||(bc=1,la.exports=mf()),la.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec;function xf(){if(Ec)return ot;Ec=1;var a=ga(),c=gf();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,p={};function h(e,t){x(e,t),x(e+"Capture",t)}function x(e,t){for(p[e]=t,e=0;e<t.length;e++)d.add(t[e])}var v=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,j=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},R={};function L(e){return k.call(R,e)?!0:k.call(E,e)?!1:j.test(e)?R[e]=!0:(E[e]=!0,!1)}function V(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _(e,t,n,r){if(t===null||typeof t>"u"||V(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function M(e,t,n,r,o,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){I[e]=new M(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];I[t]=new M(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){I[e]=new M(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){I[e]=new M(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){I[e]=new M(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){I[e]=new M(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){I[e]=new M(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){I[e]=new M(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){I[e]=new M(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function G(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,G);I[t]=new M(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,G);I[t]=new M(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,G);I[t]=new M(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!1,!1)}),I.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){I[e]=new M(e,1,!1,e.toLowerCase(),null,!0,!0)});function X(e,t,n,r){var o=I.hasOwnProperty(t)?I[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_(t,n,o,r)&&(n=null),r||o===null?L(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ne=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,le=Symbol.for("react.element"),se=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),F=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,w;function C(e){if(w===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);w=t&&t[1]||""}return`
`+w+e}var ie=!1;function ue(e,t){if(!e||ie)return"";ie=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(S){var r=S}Reflect.construct(e,[],t)}else{try{t.call()}catch(S){r=S}e.call(t.prototype)}else{try{throw Error()}catch(S){r=S}e()}}catch(S){if(S&&r&&typeof S.stack=="string"){for(var o=S.stack.split(`
`),l=r.stack.split(`
`),u=o.length-1,f=l.length-1;1<=u&&0<=f&&o[u]!==l[f];)f--;for(;1<=u&&0<=f;u--,f--)if(o[u]!==l[f]){if(u!==1||f!==1)do if(u--,f--,0>f||o[u]!==l[f]){var m=`
`+o[u].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=u&&0<=f);break}}}finally{ie=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function pe(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=ue(e.type,!1),e;case 11:return e=ue(e.type.render,!1),e;case 1:return e=ue(e.type,!0),e;default:return""}}function fe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xe:return"Fragment";case se:return"Portal";case U:return"Profiler";case $:return"StrictMode";case Re:return"Suspense";case ee:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case ae:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(t);case 8:return t===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ge(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ee(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function D(e){var t=Ee(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function re(e){e._valueTracker||(e._valueTracker=D(e))}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ee(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ke(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ze(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tt(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ge(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zn(e,t){t=t.checked,t!=null&&X(e,"checked",t,!1)}function cl(e,t){Zn(e,t);var n=ge(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,ge(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ra(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||ke(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ge(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ja(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(s(92));if(Jn(n)){if(1<n.length)throw Error(s(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ge(n)}}function Ca(e,t){var n=ge(t.value),r=ge(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ta(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ta(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Wr,La=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Wr=Wr||document.createElement("div"),Wr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Wr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},md=["Webkit","ms","Moz","O"];Object.keys(tr).forEach(function(e){md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tr[t]=tr[e]})});function Ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||tr.hasOwnProperty(e)&&tr[e]?(""+t).trim():t+"px"}function za(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hl(e,t){if(t){if(gd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,Nn=null,Sn=null;function Ia(e){if(e=Er(e)){if(typeof vl!="function")throw Error(s(280));var t=e.stateNode;t&&(t=ho(t),vl(e.stateNode,e.type,t))}}function Pa(e){Nn?Sn?Sn.push(e):Sn=[e]:Nn=e}function Aa(){if(Nn){var e=Nn,t=Sn;if(Sn=Nn=null,Ia(e),t)for(e=0;e<t.length;e++)Ia(t[e])}}function _a(e,t){return e(t)}function Da(){}var yl=!1;function Ua(e,t,n){if(yl)return e(t,n);yl=!0;try{return _a(e,t,n)}finally{yl=!1,(Nn!==null||Sn!==null)&&(Da(),Aa())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var wl=!1;if(v)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){wl=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{wl=!1}function xd(e,t,n,r,o,l,u,f,m){var S=Array.prototype.slice.call(arguments,3);try{t.apply(n,S)}catch(T){this.onError(T)}}var or=!1,Br=null,Yr=!1,kl=null,vd={onError:function(e){or=!0,Br=e}};function yd(e,t,n,r,o,l,u,f,m){or=!1,Br=null,xd.apply(vd,arguments)}function wd(e,t,n,r,o,l,u,f,m){if(yd.apply(this,arguments),or){if(or){var S=Br;or=!1,Br=null}else throw Error(s(198));Yr||(Yr=!0,kl=S)}}function sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Va(e){if(sn(e)!==e)throw Error(s(188))}function kd(e){var t=e.alternate;if(!t){if(t=sn(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Va(o),e;if(l===r)return Va(o),t;l=l.sibling}throw Error(s(188))}if(n.return!==r.return)n=o,r=l;else{for(var u=!1,f=o.child;f;){if(f===n){u=!0,n=o,r=l;break}if(f===r){u=!0,r=o,n=l;break}f=f.sibling}if(!u){for(f=l.child;f;){if(f===n){u=!0,n=l,r=o;break}if(f===r){u=!0,r=l,n=o;break}f=f.sibling}if(!u)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function $a(e){return e=kd(e),e!==null?Ha(e):null}function Ha(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ha(e);if(t!==null)return t;e=e.sibling}return null}var Wa=c.unstable_scheduleCallback,Ba=c.unstable_cancelCallback,bd=c.unstable_shouldYield,Ed=c.unstable_requestPaint,Ae=c.unstable_now,Nd=c.unstable_getCurrentPriorityLevel,bl=c.unstable_ImmediatePriority,Ya=c.unstable_UserBlockingPriority,Gr=c.unstable_NormalPriority,Sd=c.unstable_LowPriority,Ga=c.unstable_IdlePriority,Kr=null,Nt=null;function Rd(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Kr,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Od,jd=Math.log,Cd=Math.LN2;function Od(e){return e>>>=0,e===0?32:31-(jd(e)/Cd|0)|0}var Qr=64,Xr=4194304;function lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function qr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~o;f!==0?r=lr(f):(l&=u,l!==0&&(r=lr(l)))}else u=n&~o,u!==0?r=lr(u):l!==0&&(r=lr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Td(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-gt(l),f=1<<u,m=o[u];m===-1?((f&n)===0||(f&r)!==0)&&(o[u]=Td(f,t)):m<=t&&(e.expiredLanes|=f),l&=~f}}function El(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ka(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ir(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Md(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-gt(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Sl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ve=0;function Qa(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Xa,Rl,qa,Za,Ja,jl=!1,Zr=[],$t=null,Ht=null,Wt=null,ar=new Map,sr=new Map,Bt=[],zd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ar.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function ur(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&Rl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Id(e,t,n,r,o){switch(t){case"focusin":return $t=ur($t,e,t,n,r,o),!0;case"dragenter":return Ht=ur(Ht,e,t,n,r,o),!0;case"mouseover":return Wt=ur(Wt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return ar.set(l,ur(ar.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,sr.set(l,ur(sr.get(l)||null,e,t,n,r,o)),!0}return!1}function ts(e){var t=un(e.target);if(t!==null){var n=sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Fa(n),t!==null){e.blockedOn=t,Ja(e.priority,function(){qa(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=Er(n),t!==null&&Rl(t),e.blockedOn=n,!1;t.shift()}return!0}function ns(e,t,n){Jr(e)&&n.delete(t)}function Pd(){jl=!1,$t!==null&&Jr($t)&&($t=null),Ht!==null&&Jr(Ht)&&(Ht=null),Wt!==null&&Jr(Wt)&&(Wt=null),ar.forEach(ns),sr.forEach(ns)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Pd)))}function dr(e){function t(o){return cr(o,e)}if(0<Zr.length){cr(Zr[0],e);for(var n=1;n<Zr.length;n++){var r=Zr[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&cr($t,e),Ht!==null&&cr(Ht,e),Wt!==null&&cr(Wt,e),ar.forEach(t),sr.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)ts(n),n.blockedOn===null&&Bt.shift()}var Rn=ne.ReactCurrentBatchConfig,eo=!0;function Ad(e,t,n,r){var o=ve,l=Rn.transition;Rn.transition=null;try{ve=1,Cl(e,t,n,r)}finally{ve=o,Rn.transition=l}}function _d(e,t,n,r){var o=ve,l=Rn.transition;Rn.transition=null;try{ve=4,Cl(e,t,n,r)}finally{ve=o,Rn.transition=l}}function Cl(e,t,n,r){if(eo){var o=Ol(e,t,n,r);if(o===null)Yl(e,t,r,to,n),es(e,r);else if(Id(o,e,t,n,r))r.stopPropagation();else if(es(e,r),t&4&&-1<zd.indexOf(e)){for(;o!==null;){var l=Er(o);if(l!==null&&Xa(l),l=Ol(e,t,n,r),l===null&&Yl(e,t,r,to,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Yl(e,t,r,null,n)}}var to=null;function Ol(e,t,n,r){if(to=null,e=xl(r),e=un(e),e!==null)if(t=sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function rs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nd()){case bl:return 1;case Ya:return 4;case Gr:case Sd:return 16;case Ga:return 536870912;default:return 16}default:return 16}}var Yt=null,Tl=null,no=null;function os(){if(no)return no;var e,t=Tl,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var u=n-e;for(r=1;r<=u&&t[n-r]===o[l-r];r++);return no=o.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function ls(){return!1}function lt(e){function t(n,r,o,l,u){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?oo:ls,this.isPropagationStopped=ls,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ll=lt(jn),pr=W({},jn,{view:0,detail:0}),Dd=lt(pr),Ml,zl,fr,lo=W({},pr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Ml=e.screenX-fr.screenX,zl=e.screenY-fr.screenY):zl=Ml=0,fr=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),is=lt(lo),Ud=W({},lo,{dataTransfer:0}),Fd=lt(Ud),Vd=W({},pr,{relatedTarget:0}),Il=lt(Vd),$d=W({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=lt($d),Wd=W({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bd=lt(Wd),Yd=W({},jn,{data:0}),as=lt(Yd),Gd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qd[e])?!!t[e]:!1}function Pl(){return Xd}var qd=W({},pr,{key:function(e){if(e.key){var t=Gd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pl,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=lt(qd),Jd=W({},lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ss=lt(Jd),ep=W({},pr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pl}),tp=lt(ep),np=W({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),rp=lt(np),op=W({},lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lp=lt(op),ip=[9,13,27,32],Al=v&&"CompositionEvent"in window,hr=null;v&&"documentMode"in document&&(hr=document.documentMode);var ap=v&&"TextEvent"in window&&!hr,us=v&&(!Al||hr&&8<hr&&11>=hr),cs=" ",ds=!1;function ps(e,t){switch(e){case"keyup":return ip.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function sp(e,t){switch(e){case"compositionend":return fs(t);case"keypress":return t.which!==32?null:(ds=!0,cs);case"textInput":return e=t.data,e===cs&&ds?null:e;default:return null}}function up(e,t){if(Cn)return e==="compositionend"||!Al&&ps(e,t)?(e=os(),no=Tl=Yt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return us&&t.locale!=="ko"?null:t.data;default:return null}}var cp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cp[e.type]:t==="textarea"}function ms(e,t,n,r){Pa(r),t=co(t,"onChange"),0<t.length&&(n=new Ll("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var mr=null,gr=null;function dp(e){zs(e,0)}function io(e){var t=zn(e);if(we(t))return e}function pp(e,t){if(e==="change")return t}var gs=!1;if(v){var _l;if(v){var Dl="oninput"in document;if(!Dl){var xs=document.createElement("div");xs.setAttribute("oninput","return;"),Dl=typeof xs.oninput=="function"}_l=Dl}else _l=!1;gs=_l&&(!document.documentMode||9<document.documentMode)}function vs(){mr&&(mr.detachEvent("onpropertychange",ys),gr=mr=null)}function ys(e){if(e.propertyName==="value"&&io(gr)){var t=[];ms(t,gr,e,xl(e)),Ua(dp,t)}}function fp(e,t,n){e==="focusin"?(vs(),mr=t,gr=n,mr.attachEvent("onpropertychange",ys)):e==="focusout"&&vs()}function hp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return io(gr)}function mp(e,t){if(e==="click")return io(t)}function gp(e,t){if(e==="input"||e==="change")return io(t)}function xp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:xp;function xr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!k.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ks(e,t){var n=ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ws(n)}}function bs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Es(){for(var e=window,t=ke();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ke(e.document)}return t}function Ul(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vp(e){var t=Es(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bs(n.ownerDocument.documentElement,n)){if(r!==null&&Ul(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=ks(n,l);var u=ks(n,r);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yp=v&&"documentMode"in document&&11>=document.documentMode,On=null,Fl=null,vr=null,Vl=!1;function Ns(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vl||On==null||On!==ke(r)||(r=On,"selectionStart"in r&&Ul(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&xr(vr,r)||(vr=r,r=co(Fl,"onSelect"),0<r.length&&(t=new Ll("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Tn={animationend:ao("Animation","AnimationEnd"),animationiteration:ao("Animation","AnimationIteration"),animationstart:ao("Animation","AnimationStart"),transitionend:ao("Transition","TransitionEnd")},$l={},Ss={};v&&(Ss=document.createElement("div").style,"AnimationEvent"in window||(delete Tn.animationend.animation,delete Tn.animationiteration.animation,delete Tn.animationstart.animation),"TransitionEvent"in window||delete Tn.transitionend.transition);function so(e){if($l[e])return $l[e];if(!Tn[e])return e;var t=Tn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ss)return $l[e]=t[n];return e}var Rs=so("animationend"),js=so("animationiteration"),Cs=so("animationstart"),Os=so("transitionend"),Ts=new Map,Ls="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){Ts.set(e,t),h(t,[e])}for(var Hl=0;Hl<Ls.length;Hl++){var Wl=Ls[Hl],wp=Wl.toLowerCase(),kp=Wl[0].toUpperCase()+Wl.slice(1);Gt(wp,"on"+kp)}Gt(Rs,"onAnimationEnd"),Gt(js,"onAnimationIteration"),Gt(Cs,"onAnimationStart"),Gt("dblclick","onDoubleClick"),Gt("focusin","onFocus"),Gt("focusout","onBlur"),Gt(Os,"onTransitionEnd"),x("onMouseEnter",["mouseout","mouseover"]),x("onMouseLeave",["mouseout","mouseover"]),x("onPointerEnter",["pointerout","pointerover"]),x("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wd(r,t,void 0,e),e.currentTarget=null}function zs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var u=r.length-1;0<=u;u--){var f=r[u],m=f.instance,S=f.currentTarget;if(f=f.listener,m!==l&&o.isPropagationStopped())break e;Ms(o,f,S),l=m}else for(u=0;u<r.length;u++){if(f=r[u],m=f.instance,S=f.currentTarget,f=f.listener,m!==l&&o.isPropagationStopped())break e;Ms(o,f,S),l=m}}}if(Yr)throw e=kl,Yr=!1,kl=null,e}function je(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var r=e+"__bubble";n.has(r)||(Is(t,e,2,!1),n.add(r))}function Bl(e,t,n){var r=0;t&&(r|=4),Is(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function wr(e){if(!e[uo]){e[uo]=!0,d.forEach(function(n){n!=="selectionchange"&&(bp.has(n)||Bl(n,!1,e),Bl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Bl("selectionchange",!1,t))}}function Is(e,t,n,r){switch(rs(t)){case 1:var o=Ad;break;case 4:o=_d;break;default:o=Cl}n=o.bind(null,t,n,e),o=void 0,!wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Yl(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var f=r.stateNode.containerInfo;if(f===o||f.nodeType===8&&f.parentNode===o)break;if(u===4)for(u=r.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===o||m.nodeType===8&&m.parentNode===o))return;u=u.return}for(;f!==null;){if(u=un(f),u===null)return;if(m=u.tag,m===5||m===6){r=l=u;continue e}f=f.parentNode}}r=r.return}Ua(function(){var S=l,T=xl(n),z=[];e:{var O=Ts.get(e);if(O!==void 0){var H=Ll,Y=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":H=Zd;break;case"focusin":Y="focus",H=Il;break;case"focusout":Y="blur",H=Il;break;case"beforeblur":case"afterblur":H=Il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=tp;break;case Rs:case js:case Cs:H=Hd;break;case Os:H=rp;break;case"scroll":H=Dd;break;case"wheel":H=lp;break;case"copy":case"cut":case"paste":H=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=ss}var K=(t&4)!==0,_e=!K&&e==="scroll",b=K?O!==null?O+"Capture":null:O;K=[];for(var g=S,N;g!==null;){N=g;var A=N.stateNode;if(N.tag===5&&A!==null&&(N=A,b!==null&&(A=nr(g,b),A!=null&&K.push(kr(g,A,N)))),_e)break;g=g.return}0<K.length&&(O=new H(O,Y,null,n,T),z.push({event:O,listeners:K}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",O&&n!==gl&&(Y=n.relatedTarget||n.fromElement)&&(un(Y)||Y[Lt]))break e;if((H||O)&&(O=T.window===T?T:(O=T.ownerDocument)?O.defaultView||O.parentWindow:window,H?(Y=n.relatedTarget||n.toElement,H=S,Y=Y?un(Y):null,Y!==null&&(_e=sn(Y),Y!==_e||Y.tag!==5&&Y.tag!==6)&&(Y=null)):(H=null,Y=S),H!==Y)){if(K=is,A="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(K=ss,A="onPointerLeave",b="onPointerEnter",g="pointer"),_e=H==null?O:zn(H),N=Y==null?O:zn(Y),O=new K(A,g+"leave",H,n,T),O.target=_e,O.relatedTarget=N,A=null,un(T)===S&&(K=new K(b,g+"enter",Y,n,T),K.target=N,K.relatedTarget=_e,A=K),_e=A,H&&Y)t:{for(K=H,b=Y,g=0,N=K;N;N=Ln(N))g++;for(N=0,A=b;A;A=Ln(A))N++;for(;0<g-N;)K=Ln(K),g--;for(;0<N-g;)b=Ln(b),N--;for(;g--;){if(K===b||b!==null&&K===b.alternate)break t;K=Ln(K),b=Ln(b)}K=null}else K=null;H!==null&&Ps(z,O,H,K,!1),Y!==null&&_e!==null&&Ps(z,_e,Y,K,!0)}}e:{if(O=S?zn(S):window,H=O.nodeName&&O.nodeName.toLowerCase(),H==="select"||H==="input"&&O.type==="file")var Q=pp;else if(hs(O))if(gs)Q=gp;else{Q=hp;var Z=fp}else(H=O.nodeName)&&H.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(Q=mp);if(Q&&(Q=Q(e,S))){ms(z,Q,n,T);break e}Z&&Z(e,O,S),e==="focusout"&&(Z=O._wrapperState)&&Z.controlled&&O.type==="number"&&dl(O,"number",O.value)}switch(Z=S?zn(S):window,e){case"focusin":(hs(Z)||Z.contentEditable==="true")&&(On=Z,Fl=S,vr=null);break;case"focusout":vr=Fl=On=null;break;case"mousedown":Vl=!0;break;case"contextmenu":case"mouseup":case"dragend":Vl=!1,Ns(z,n,T);break;case"selectionchange":if(yp)break;case"keydown":case"keyup":Ns(z,n,T)}var J;if(Al)e:{switch(e){case"compositionstart":var oe="onCompositionStart";break e;case"compositionend":oe="onCompositionEnd";break e;case"compositionupdate":oe="onCompositionUpdate";break e}oe=void 0}else Cn?ps(e,n)&&(oe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(oe="onCompositionStart");oe&&(us&&n.locale!=="ko"&&(Cn||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Cn&&(J=os()):(Yt=T,Tl="value"in Yt?Yt.value:Yt.textContent,Cn=!0)),Z=co(S,oe),0<Z.length&&(oe=new as(oe,e,null,n,T),z.push({event:oe,listeners:Z}),J?oe.data=J:(J=fs(n),J!==null&&(oe.data=J)))),(J=ap?sp(e,n):up(e,n))&&(S=co(S,"onBeforeInput"),0<S.length&&(T=new as("onBeforeInput","beforeinput",null,n,T),z.push({event:T,listeners:S}),T.data=J))}zs(z,t)})}function kr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function co(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=nr(e,n),l!=null&&r.unshift(kr(e,l,o)),l=nr(e,t),l!=null&&r.push(kr(e,l,o))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ps(e,t,n,r,o){for(var l=t._reactName,u=[];n!==null&&n!==r;){var f=n,m=f.alternate,S=f.stateNode;if(m!==null&&m===r)break;f.tag===5&&S!==null&&(f=S,o?(m=nr(n,l),m!=null&&u.unshift(kr(n,m,f))):o||(m=nr(n,l),m!=null&&u.push(kr(n,m,f)))),n=n.return}u.length!==0&&e.push({event:t,listeners:u})}var Ep=/\r\n?/g,Np=/\u0000|\uFFFD/g;function As(e){return(typeof e=="string"?e:""+e).replace(Ep,`
`).replace(Np,"")}function po(e,t,n){if(t=As(t),As(e)!==t&&n)throw Error(s(425))}function fo(){}var Gl=null,Kl=null;function Ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xl=typeof setTimeout=="function"?setTimeout:void 0,Sp=typeof clearTimeout=="function"?clearTimeout:void 0,_s=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof _s<"u"?function(e){return _s.resolve(null).then(e).catch(jp)}:Xl;function jp(e){setTimeout(function(){throw e})}function ql(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);dr(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ds(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),St="__reactFiber$"+Mn,br="__reactProps$"+Mn,Lt="__reactContainer$"+Mn,Zl="__reactEvents$"+Mn,Cp="__reactListeners$"+Mn,Op="__reactHandles$"+Mn;function un(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ds(e);e!==null;){if(n=e[St])return n;e=Ds(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[St]||e[Lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function ho(e){return e[br]||null}var Jl=[],In=-1;function Qt(e){return{current:e}}function Ce(e){0>In||(e.current=Jl[In],Jl[In]=null,In--)}function Ne(e,t){In++,Jl[In]=e.current,e.current=t}var Xt={},Ye=Qt(Xt),Je=Qt(!1),cn=Xt;function Pn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function mo(){Ce(Je),Ce(Ye)}function Us(e,t,n){if(Ye.current!==Xt)throw Error(s(168));Ne(Ye,t),Ne(Je,n)}function Fs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(s(108,ye(e)||"Unknown",o));return W({},n,r)}function go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=Ye.current,Ne(Ye,e),Ne(Je,Je.current),!0}function Vs(e,t,n){var r=e.stateNode;if(!r)throw Error(s(169));n?(e=Fs(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Ce(Je),Ce(Ye),Ne(Ye,e)):Ce(Je),Ne(Je,n)}var Mt=null,xo=!1,ei=!1;function $s(e){Mt===null?Mt=[e]:Mt.push(e)}function Tp(e){xo=!0,$s(e)}function qt(){if(!ei&&Mt!==null){ei=!0;var e=0,t=ve;try{var n=Mt;for(ve=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,xo=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),Wa(bl,qt),o}finally{ve=t,ei=!1}}return null}var An=[],_n=0,vo=null,yo=0,ut=[],ct=0,dn=null,zt=1,It="";function pn(e,t){An[_n++]=yo,An[_n++]=vo,vo=e,yo=t}function Hs(e,t,n){ut[ct++]=zt,ut[ct++]=It,ut[ct++]=dn,dn=e;var r=zt;e=It;var o=32-gt(r)-1;r&=~(1<<o),n+=1;var l=32-gt(t)+o;if(30<l){var u=o-o%5;l=(r&(1<<u)-1).toString(32),r>>=u,o-=u,zt=1<<32-gt(t)+o|n<<o|r,It=l+e}else zt=1<<l|n<<o|r,It=e}function ti(e){e.return!==null&&(pn(e,1),Hs(e,1,0))}function ni(e){for(;e===vo;)vo=An[--_n],An[_n]=null,yo=An[--_n],An[_n]=null;for(;e===dn;)dn=ut[--ct],ut[ct]=null,It=ut[--ct],ut[ct]=null,zt=ut[--ct],ut[ct]=null}var it=null,at=null,Oe=!1,vt=null;function Ws(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,at=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:zt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,it=e,at=null,!0):!1;default:return!1}}function ri(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oi(e){if(Oe){var t=at;if(t){var n=t;if(!Bs(e,t)){if(ri(e))throw Error(s(418));t=Kt(n.nextSibling);var r=it;t&&Bs(e,t)?Ws(r,n):(e.flags=e.flags&-4097|2,Oe=!1,it=e)}}else{if(ri(e))throw Error(s(418));e.flags=e.flags&-4097|2,Oe=!1,it=e}}}function Ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function wo(e){if(e!==it)return!1;if(!Oe)return Ys(e),Oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ql(e.type,e.memoizedProps)),t&&(t=at)){if(ri(e))throw Gs(),Error(s(418));for(;t;)Ws(e,t),t=Kt(t.nextSibling)}if(Ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=it?Kt(e.stateNode.nextSibling):null;return!0}function Gs(){for(var e=at;e;)e=Kt(e.nextSibling)}function Dn(){at=it=null,Oe=!1}function li(e){vt===null?vt=[e]:vt.push(e)}var Lp=ne.ReactCurrentBatchConfig;function Nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(s(309));var r=n.stateNode}if(!r)throw Error(s(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var f=o.refs;u===null?delete f[l]:f[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(s(284));if(!n._owner)throw Error(s(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ks(e){var t=e._init;return t(e._payload)}function Qs(e){function t(b,g){if(e){var N=b.deletions;N===null?(b.deletions=[g],b.flags|=16):N.push(g)}}function n(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function o(b,g){return b=ln(b,g),b.index=0,b.sibling=null,b}function l(b,g,N){return b.index=N,e?(N=b.alternate,N!==null?(N=N.index,N<g?(b.flags|=2,g):N):(b.flags|=2,g)):(b.flags|=1048576,g)}function u(b){return e&&b.alternate===null&&(b.flags|=2),b}function f(b,g,N,A){return g===null||g.tag!==6?(g=Xi(N,b.mode,A),g.return=b,g):(g=o(g,N),g.return=b,g)}function m(b,g,N,A){var Q=N.type;return Q===xe?T(b,g,N.props.children,A,N.key):g!==null&&(g.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Pe&&Ks(Q)===g.type)?(A=o(g,N.props),A.ref=Nr(b,g,N),A.return=b,A):(A=Bo(N.type,N.key,N.props,null,b.mode,A),A.ref=Nr(b,g,N),A.return=b,A)}function S(b,g,N,A){return g===null||g.tag!==4||g.stateNode.containerInfo!==N.containerInfo||g.stateNode.implementation!==N.implementation?(g=qi(N,b.mode,A),g.return=b,g):(g=o(g,N.children||[]),g.return=b,g)}function T(b,g,N,A,Q){return g===null||g.tag!==7?(g=wn(N,b.mode,A,Q),g.return=b,g):(g=o(g,N),g.return=b,g)}function z(b,g,N){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Xi(""+g,b.mode,N),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case le:return N=Bo(g.type,g.key,g.props,null,b.mode,N),N.ref=Nr(b,null,g),N.return=b,N;case se:return g=qi(g,b.mode,N),g.return=b,g;case Pe:var A=g._init;return z(b,A(g._payload),N)}if(Jn(g)||q(g))return g=wn(g,b.mode,N,null),g.return=b,g;ko(b,g)}return null}function O(b,g,N,A){var Q=g!==null?g.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return Q!==null?null:f(b,g,""+N,A);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case le:return N.key===Q?m(b,g,N,A):null;case se:return N.key===Q?S(b,g,N,A):null;case Pe:return Q=N._init,O(b,g,Q(N._payload),A)}if(Jn(N)||q(N))return Q!==null?null:T(b,g,N,A,null);ko(b,N)}return null}function H(b,g,N,A,Q){if(typeof A=="string"&&A!==""||typeof A=="number")return b=b.get(N)||null,f(g,b,""+A,Q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case le:return b=b.get(A.key===null?N:A.key)||null,m(g,b,A,Q);case se:return b=b.get(A.key===null?N:A.key)||null,S(g,b,A,Q);case Pe:var Z=A._init;return H(b,g,N,Z(A._payload),Q)}if(Jn(A)||q(A))return b=b.get(N)||null,T(g,b,A,Q,null);ko(g,A)}return null}function Y(b,g,N,A){for(var Q=null,Z=null,J=g,oe=g=0,He=null;J!==null&&oe<N.length;oe++){J.index>oe?(He=J,J=null):He=J.sibling;var me=O(b,J,N[oe],A);if(me===null){J===null&&(J=He);break}e&&J&&me.alternate===null&&t(b,J),g=l(me,g,oe),Z===null?Q=me:Z.sibling=me,Z=me,J=He}if(oe===N.length)return n(b,J),Oe&&pn(b,oe),Q;if(J===null){for(;oe<N.length;oe++)J=z(b,N[oe],A),J!==null&&(g=l(J,g,oe),Z===null?Q=J:Z.sibling=J,Z=J);return Oe&&pn(b,oe),Q}for(J=r(b,J);oe<N.length;oe++)He=H(J,b,oe,N[oe],A),He!==null&&(e&&He.alternate!==null&&J.delete(He.key===null?oe:He.key),g=l(He,g,oe),Z===null?Q=He:Z.sibling=He,Z=He);return e&&J.forEach(function(an){return t(b,an)}),Oe&&pn(b,oe),Q}function K(b,g,N,A){var Q=q(N);if(typeof Q!="function")throw Error(s(150));if(N=Q.call(N),N==null)throw Error(s(151));for(var Z=Q=null,J=g,oe=g=0,He=null,me=N.next();J!==null&&!me.done;oe++,me=N.next()){J.index>oe?(He=J,J=null):He=J.sibling;var an=O(b,J,me.value,A);if(an===null){J===null&&(J=He);break}e&&J&&an.alternate===null&&t(b,J),g=l(an,g,oe),Z===null?Q=an:Z.sibling=an,Z=an,J=He}if(me.done)return n(b,J),Oe&&pn(b,oe),Q;if(J===null){for(;!me.done;oe++,me=N.next())me=z(b,me.value,A),me!==null&&(g=l(me,g,oe),Z===null?Q=me:Z.sibling=me,Z=me);return Oe&&pn(b,oe),Q}for(J=r(b,J);!me.done;oe++,me=N.next())me=H(J,b,oe,me.value,A),me!==null&&(e&&me.alternate!==null&&J.delete(me.key===null?oe:me.key),g=l(me,g,oe),Z===null?Q=me:Z.sibling=me,Z=me);return e&&J.forEach(function(df){return t(b,df)}),Oe&&pn(b,oe),Q}function _e(b,g,N,A){if(typeof N=="object"&&N!==null&&N.type===xe&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case le:e:{for(var Q=N.key,Z=g;Z!==null;){if(Z.key===Q){if(Q=N.type,Q===xe){if(Z.tag===7){n(b,Z.sibling),g=o(Z,N.props.children),g.return=b,b=g;break e}}else if(Z.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Pe&&Ks(Q)===Z.type){n(b,Z.sibling),g=o(Z,N.props),g.ref=Nr(b,Z,N),g.return=b,b=g;break e}n(b,Z);break}else t(b,Z);Z=Z.sibling}N.type===xe?(g=wn(N.props.children,b.mode,A,N.key),g.return=b,b=g):(A=Bo(N.type,N.key,N.props,null,b.mode,A),A.ref=Nr(b,g,N),A.return=b,b=A)}return u(b);case se:e:{for(Z=N.key;g!==null;){if(g.key===Z)if(g.tag===4&&g.stateNode.containerInfo===N.containerInfo&&g.stateNode.implementation===N.implementation){n(b,g.sibling),g=o(g,N.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else t(b,g);g=g.sibling}g=qi(N,b.mode,A),g.return=b,b=g}return u(b);case Pe:return Z=N._init,_e(b,g,Z(N._payload),A)}if(Jn(N))return Y(b,g,N,A);if(q(N))return K(b,g,N,A);ko(b,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,g!==null&&g.tag===6?(n(b,g.sibling),g=o(g,N),g.return=b,b=g):(n(b,g),g=Xi(N,b.mode,A),g.return=b,b=g),u(b)):n(b,g)}return _e}var Un=Qs(!0),Xs=Qs(!1),bo=Qt(null),Eo=null,Fn=null,ii=null;function ai(){ii=Fn=Eo=null}function si(e){var t=bo.current;Ce(bo),e._currentValue=t}function ui(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Vn(e,t){Eo=e,ii=Fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(tt=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(ii!==e)if(e={context:e,memoizedValue:t,next:null},Fn===null){if(Eo===null)throw Error(s(308));Fn=e,Eo.dependencies={lanes:0,firstContext:e}}else Fn=Fn.next=e;return t}var fn=null;function ci(e){fn===null?fn=[e]:fn.push(e)}function qs(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ci(t)):(n.next=o.next,o.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function At(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(he&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Pt(e,n)}return o=r.interleaved,o===null?(t.next=t,ci(r)):(t.next=o.next,o.next=t),r.interleaved=t,Pt(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}function Js(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function So(e,t,n,r){var o=e.updateQueue;Zt=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var m=f,S=m.next;m.next=null,u===null?l=S:u.next=S,u=m;var T=e.alternate;T!==null&&(T=T.updateQueue,f=T.lastBaseUpdate,f!==u&&(f===null?T.firstBaseUpdate=S:f.next=S,T.lastBaseUpdate=m))}if(l!==null){var z=o.baseState;u=0,T=S=m=null,f=l;do{var O=f.lane,H=f.eventTime;if((r&O)===O){T!==null&&(T=T.next={eventTime:H,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var Y=e,K=f;switch(O=t,H=n,K.tag){case 1:if(Y=K.payload,typeof Y=="function"){z=Y.call(H,z,O);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=K.payload,O=typeof Y=="function"?Y.call(H,z,O):Y,O==null)break e;z=W({},z,O);break e;case 2:Zt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,O=o.effects,O===null?o.effects=[f]:O.push(f))}else H={eventTime:H,lane:O,tag:f.tag,payload:f.payload,callback:f.callback,next:null},T===null?(S=T=H,m=z):T=T.next=H,u|=O;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;O=f,f=O.next,O.next=null,o.lastBaseUpdate=O,o.shared.pending=null}}while(!0);if(T===null&&(m=z),o.baseState=m,o.firstBaseUpdate=S,o.lastBaseUpdate=T,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);gn|=u,e.lanes=u,e.memoizedState=z}}function eu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(s(191,o));o.call(r)}}}var Sr={},Rt=Qt(Sr),Rr=Qt(Sr),jr=Qt(Sr);function hn(e){if(e===Sr)throw Error(s(174));return e}function pi(e,t){switch(Ne(jr,t),Ne(Rr,e),Ne(Rt,Sr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fl(t,e)}Ce(Rt),Ne(Rt,t)}function $n(){Ce(Rt),Ce(Rr),Ce(jr)}function tu(e){hn(jr.current);var t=hn(Rt.current),n=fl(t,e.type);t!==n&&(Ne(Rr,e),Ne(Rt,n))}function fi(e){Rr.current===e&&(Ce(Rt),Ce(Rr))}var Te=Qt(0);function Ro(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function mi(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var jo=ne.ReactCurrentDispatcher,gi=ne.ReactCurrentBatchConfig,mn=0,Le=null,Ue=null,Ve=null,Co=!1,Cr=!1,Or=0,Mp=0;function Ge(){throw Error(s(321))}function xi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function vi(e,t,n,r,o,l){if(mn=l,Le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?Ap:_p,e=n(r,o),Cr){l=0;do{if(Cr=!1,Or=0,25<=l)throw Error(s(301));l+=1,Ve=Ue=null,t.updateQueue=null,jo.current=Dp,e=n(r,o)}while(Cr)}if(jo.current=Lo,t=Ue!==null&&Ue.next!==null,mn=0,Ve=Ue=Le=null,Co=!1,t)throw Error(s(300));return e}function yi(){var e=Or!==0;return Or=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Le.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function pt(){if(Ue===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var t=Ve===null?Le.memoizedState:Ve.next;if(t!==null)Ve=t,Ue=e;else{if(e===null)throw Error(s(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ve===null?Le.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Tr(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=pt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=Ue,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var f=u=null,m=null,S=l;do{var T=S.lane;if((mn&T)===T)m!==null&&(m=m.next={lane:0,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null}),r=S.hasEagerState?S.eagerState:e(r,S.action);else{var z={lane:T,action:S.action,hasEagerState:S.hasEagerState,eagerState:S.eagerState,next:null};m===null?(f=m=z,u=r):m=m.next=z,Le.lanes|=T,gn|=T}S=S.next}while(S!==null&&S!==l);m===null?u=r:m.next=f,xt(r,t.memoizedState)||(tt=!0),t.memoizedState=r,t.baseState=u,t.baseQueue=m,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Le.lanes|=l,gn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=pt(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);xt(l,t.memoizedState)||(tt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function nu(){}function ru(e,t){var n=Le,r=pt(),o=t(),l=!xt(r.memoizedState,o);if(l&&(r.memoizedState=o,tt=!0),r=r.queue,bi(iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Lr(9,lu.bind(null,n,r,o,t),void 0,null),$e===null)throw Error(s(349));(mn&30)!==0||ou(n,t,o)}return o}function ou(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lu(e,t,n,r){t.value=n,t.getSnapshot=r,au(t)&&su(e)}function iu(e,t,n){return n(function(){au(t)&&su(e)})}function au(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function su(e){var t=Pt(e,1);t!==null&&bt(t,e,1,-1)}function uu(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tr,lastRenderedState:e},t.queue=e,e=e.dispatch=Pp.bind(null,Le,e),[t.memoizedState,e]}function Lr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Le.updateQueue,t===null?(t={lastEffect:null,stores:null},Le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cu(){return pt().memoizedState}function Oo(e,t,n,r){var o=jt();Le.flags|=e,o.memoizedState=Lr(1|t,n,void 0,r===void 0?null:r)}function To(e,t,n,r){var o=pt();r=r===void 0?null:r;var l=void 0;if(Ue!==null){var u=Ue.memoizedState;if(l=u.destroy,r!==null&&xi(r,u.deps)){o.memoizedState=Lr(t,n,l,r);return}}Le.flags|=e,o.memoizedState=Lr(1|t,n,l,r)}function du(e,t){return Oo(8390656,8,e,t)}function bi(e,t){return To(2048,8,e,t)}function pu(e,t){return To(4,2,e,t)}function fu(e,t){return To(4,4,e,t)}function hu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function mu(e,t,n){return n=n!=null?n.concat([e]):null,To(4,4,hu.bind(null,t,e),n)}function Ei(){}function gu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xu(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vu(e,t,n){return(mn&21)===0?(e.baseState&&(e.baseState=!1,tt=!0),e.memoizedState=n):(xt(n,t)||(n=Ka(),Le.lanes|=n,gn|=n,e.baseState=!0),t)}function zp(e,t){var n=ve;ve=n!==0&&4>n?n:4,e(!0);var r=gi.transition;gi.transition={};try{e(!1),t()}finally{ve=n,gi.transition=r}}function yu(){return pt().memoizedState}function Ip(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wu(e))ku(t,n);else if(n=qs(e,t,n,r),n!==null){var o=qe();bt(n,e,r,o),bu(n,t,r)}}function Pp(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wu(e))ku(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,f=l(u,n);if(o.hasEagerState=!0,o.eagerState=f,xt(f,u)){var m=t.interleaved;m===null?(o.next=o,ci(t)):(o.next=m.next,m.next=o),t.interleaved=o;return}}catch{}finally{}n=qs(e,t,o,r),n!==null&&(o=qe(),bt(n,e,r,o),bu(n,t,r))}}function wu(e){var t=e.alternate;return e===Le||t!==null&&t===Le}function ku(e,t){Cr=Co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bu(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sl(e,n)}}var Lo={readContext:dt,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},Ap={readContext:dt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,hu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ip.bind(null,Le,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:Ei,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=zp.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Le,o=jt();if(Oe){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),$e===null)throw Error(s(349));(mn&30)!==0||ou(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,du(iu.bind(null,r,l,e),[e]),r.flags|=2048,Lr(9,lu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=jt(),t=$e.identifierPrefix;if(Oe){var n=It,r=zt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Or++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_p={readContext:dt,useCallback:gu,useContext:dt,useEffect:bi,useImperativeHandle:mu,useInsertionEffect:pu,useLayoutEffect:fu,useMemo:xu,useReducer:wi,useRef:cu,useState:function(){return wi(Tr)},useDebugValue:Ei,useDeferredValue:function(e){var t=pt();return vu(t,Ue.memoizedState,e)},useTransition:function(){var e=wi(Tr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:yu,unstable_isNewReconciler:!1},Dp={readContext:dt,useCallback:gu,useContext:dt,useEffect:bi,useImperativeHandle:mu,useInsertionEffect:pu,useLayoutEffect:fu,useMemo:xu,useReducer:ki,useRef:cu,useState:function(){return ki(Tr)},useDebugValue:Ei,useDeferredValue:function(e){var t=pt();return Ue===null?t.memoizedState=e:vu(t,Ue.memoizedState,e)},useTransition:function(){var e=ki(Tr)[0],t=pt().memoizedState;return[e,t]},useMutableSource:nu,useSyncExternalStore:ru,useId:yu,unstable_isNewReconciler:!1};function yt(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ni(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mo={isMounted:function(e){return(e=e._reactInternals)?sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),o=rn(e),l=At(r,o);l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,o),t!==null&&(bt(t,e,o,r),No(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),o=rn(e),l=At(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Jt(e,l,o),t!==null&&(bt(t,e,o,r),No(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=rn(e),o=At(n,r);o.tag=2,t!=null&&(o.callback=t),t=Jt(e,o,r),t!==null&&(bt(t,e,r,n),No(t,e,r))}};function Eu(e,t,n,r,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,u):t.prototype&&t.prototype.isPureReactComponent?!xr(n,r)||!xr(o,l):!0}function Nu(e,t,n){var r=!1,o=Xt,l=t.contextType;return typeof l=="object"&&l!==null?l=dt(l):(o=et(t)?cn:Ye.current,r=t.contextTypes,l=(r=r!=null)?Pn(e,o):Xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Mo.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},di(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=dt(l):(l=et(t)?cn:Ye.current,o.context=Pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ni(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mo.enqueueReplaceState(o,o.state,null),So(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hn(e,t){try{var n="",r=t;do n+=pe(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Ri(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ji(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Up=typeof WeakMap=="function"?WeakMap:Map;function Ru(e,t,n){n=At(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Uo||(Uo=!0,$i=r),ji(e,t)},n}function ju(e,t,n){n=At(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){ji(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ji(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),n}function Cu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Up;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Jp.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=At(-1,1),t.tag=2,Jt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Fp=ne.ReactCurrentOwner,tt=!1;function Xe(e,t,n,r){t.child=e===null?Xs(t,null,n,r):Un(t,e.child,n,r)}function Lu(e,t,n,r,o){n=n.render;var l=t.ref;return Vn(t,o),r=vi(e,t,n,r,l,o),n=yi(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(Oe&&n&&ti(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Mu(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Qi(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,zu(e,t,l,r,o)):(e=Bo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:xr,n(u,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=ln(l,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(xr(l,r)&&e.ref===t.ref)if(tt=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(tt=!0);else return t.lanes=e.lanes,_t(e,t,o)}return Ci(e,t,n,r,o)}function Iu(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Bn,st),st|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Bn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Ne(Bn,st),st|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ne(Bn,st),st|=r;return Xe(e,t,o,n),t.child}function Pu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ci(e,t,n,r,o){var l=et(n)?cn:Ye.current;return l=Pn(t,l),Vn(t,o),n=vi(e,t,n,r,l,o),r=yi(),e!==null&&!tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(Oe&&r&&ti(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(et(n)){var l=!0;go(t)}else l=!1;if(Vn(t,o),t.stateNode===null)Io(e,t),Nu(t,n,r),Si(t,n,r,o),r=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var m=u.context,S=n.contextType;typeof S=="object"&&S!==null?S=dt(S):(S=et(n)?cn:Ye.current,S=Pn(t,S));var T=n.getDerivedStateFromProps,z=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function";z||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==r||m!==S)&&Su(t,u,r,S),Zt=!1;var O=t.memoizedState;u.state=O,So(t,r,u,o),m=t.memoizedState,f!==r||O!==m||Je.current||Zt?(typeof T=="function"&&(Ni(t,n,T,r),m=t.memoizedState),(f=Zt||Eu(t,n,f,r,O,m,S))?(z||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=m),u.props=r,u.state=m,u.context=S,r=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Zs(e,t),f=t.memoizedProps,S=t.type===t.elementType?f:yt(t.type,f),u.props=S,z=t.pendingProps,O=u.context,m=n.contextType,typeof m=="object"&&m!==null?m=dt(m):(m=et(n)?cn:Ye.current,m=Pn(t,m));var H=n.getDerivedStateFromProps;(T=typeof H=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==z||O!==m)&&Su(t,u,r,m),Zt=!1,O=t.memoizedState,u.state=O,So(t,r,u,o);var Y=t.memoizedState;f!==z||O!==Y||Je.current||Zt?(typeof H=="function"&&(Ni(t,n,H,r),Y=t.memoizedState),(S=Zt||Eu(t,n,S,r,O,Y,m)||!1)?(T||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,Y,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,Y,m)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Y),u.props=r,u.state=Y,u.context=m,r=S):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),r=!1)}return Oi(e,t,n,r,l,o)}function Oi(e,t,n,r,o,l){Pu(e,t);var u=(t.flags&128)!==0;if(!r&&!u)return o&&Vs(t,n,!1),_t(e,t,l);r=t.stateNode,Fp.current=t;var f=u&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&u?(t.child=Un(t,e.child,null,l),t.child=Un(t,null,f,l)):Xe(e,t,f,l),t.memoizedState=r.state,o&&Vs(t,n,!0),t.child}function _u(e){var t=e.stateNode;t.pendingContext?Us(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Us(e,t.context,!1),pi(e,t.containerInfo)}function Du(e,t,n,r,o){return Dn(),li(o),t.flags|=256,Xe(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function Li(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,n){var r=t.pendingProps,o=Te.current,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(o&2)!==0),f?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Ne(Te,o&1),e===null)return oi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(u=r.children,e=r.fallback,l?(r=t.mode,l=t.child,u={mode:"hidden",children:u},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=Yo(u,r,0,null),e=wn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Li(n),t.memoizedState=Ti,e):Mi(t,u));if(o=e.memoizedState,o!==null&&(f=o.dehydrated,f!==null))return Vp(e,t,u,r,f,o,n);if(l){l=r.fallback,u=t.mode,o=e.child,f=o.sibling;var m={mode:"hidden",children:r.children};return(u&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=m,t.deletions=null):(r=ln(o,m),r.subtreeFlags=o.subtreeFlags&14680064),f!==null?l=ln(f,l):(l=wn(l,u,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,u=e.child.memoizedState,u=u===null?Li(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return l=e.child,e=l.sibling,r=ln(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mi(e,t){return t=Yo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function zo(e,t,n,r){return r!==null&&li(r),Un(t,e.child,null,n),e=Mi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vp(e,t,n,r,o,l,u){if(n)return t.flags&256?(t.flags&=-257,r=Ri(Error(s(422))),zo(e,t,u,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Yo({mode:"visible",children:r.children},o,0,null),l=wn(l,o,u,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&Un(t,e.child,null,u),t.child.memoizedState=Li(u),t.memoizedState=Ti,l);if((t.mode&1)===0)return zo(e,t,u,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var f=r.dgst;return r=f,l=Error(s(419)),r=Ri(l,r,void 0),zo(e,t,u,r)}if(f=(u&e.childLanes)!==0,tt||f){if(r=$e,r!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|u))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,Pt(e,o),bt(r,e,o,-1))}return Ki(),r=Ri(Error(s(421))),zo(e,t,u,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ef.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,at=Kt(o.nextSibling),it=t,Oe=!0,vt=null,e!==null&&(ut[ct++]=zt,ut[ct++]=It,ut[ct++]=dn,zt=e.id,It=e.overflow,dn=t),t=Mi(t,r.children),t.flags|=4096,t)}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ui(e.return,t,n)}function zi(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Vu(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(Xe(e,t,r.children,n),r=Te.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fu(e,n,t);else if(e.tag===19)Fu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ne(Te,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ro(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),zi(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ro(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}zi(t,!0,n,null,l);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Io(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $p(e,t,n){switch(t.tag){case 3:_u(t),Dn();break;case 5:tu(t);break;case 1:et(t.type)&&go(t);break;case 4:pi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Ne(bo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Te,Te.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Uu(e,t,n):(Ne(Te,Te.current&1),e=_t(e,t,n),e!==null?e.sibling:null);Ne(Te,Te.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Vu(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Ne(Te,Te.current),r)break;return null;case 22:case 23:return t.lanes=0,Iu(e,t,n)}return _t(e,t,n)}var $u,Ii,Hu,Wu;$u=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ii=function(){},Hu=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,hn(Rt.current);var l=null;switch(n){case"input":o=Ze(e,o),r=Ze(e,r),l=[];break;case"select":o=W({},o,{value:void 0}),r=W({},r,{value:void 0}),l=[];break;case"textarea":o=pl(e,o),r=pl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=fo)}hl(n,r);var u;n=null;for(S in o)if(!r.hasOwnProperty(S)&&o.hasOwnProperty(S)&&o[S]!=null)if(S==="style"){var f=o[S];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else S!=="dangerouslySetInnerHTML"&&S!=="children"&&S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(p.hasOwnProperty(S)?l||(l=[]):(l=l||[]).push(S,null));for(S in r){var m=r[S];if(f=o!=null?o[S]:void 0,r.hasOwnProperty(S)&&m!==f&&(m!=null||f!=null))if(S==="style")if(f){for(u in f)!f.hasOwnProperty(u)||m&&m.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in m)m.hasOwnProperty(u)&&f[u]!==m[u]&&(n||(n={}),n[u]=m[u])}else n||(l||(l=[]),l.push(S,n)),n=m;else S==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(l=l||[]).push(S,m)):S==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(S,""+m):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&(p.hasOwnProperty(S)?(m!=null&&S==="onScroll"&&je("scroll",e),l||f===m||(l=[])):(l=l||[]).push(S,m))}n&&(l=l||[]).push("style",n);var S=l;(t.updateQueue=S)&&(t.flags|=4)}},Wu=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mr(e,t){if(!Oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hp(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return et(t.type)&&mo(),Ke(t),null;case 3:return r=t.stateNode,$n(),Ce(Je),Ce(Ye),mi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(Bi(vt),vt=null))),Ii(e,t),Ke(t),null;case 5:fi(t);var o=hn(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Hu(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(s(166));return Ke(t),null}if(e=hn(Rt.current),wo(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[St]=t,r[br]=l,e=(t.mode&1)!==0,n){case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":case"embed":je("load",r);break;case"video":case"audio":for(o=0;o<yr.length;o++)je(yr[o],r);break;case"source":je("error",r);break;case"img":case"image":case"link":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"input":Tt(r,l),je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},je("invalid",r);break;case"textarea":ja(r,l),je("invalid",r)}hl(n,l),o=null;for(var u in l)if(l.hasOwnProperty(u)){var f=l[u];u==="children"?typeof f=="string"?r.textContent!==f&&(l.suppressHydrationWarning!==!0&&po(r.textContent,f,e),o=["children",f]):typeof f=="number"&&r.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&po(r.textContent,f,e),o=["children",""+f]):p.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&je("scroll",r)}switch(n){case"input":re(r),Ra(r,l,!0);break;case"textarea":re(r),Oa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=fo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ta(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=u.createElement(n,{is:r.is}):(e=u.createElement(n),n==="select"&&(u=e,r.multiple?u.multiple=!0:r.size&&(u.size=r.size))):e=u.createElementNS(e,n),e[St]=t,e[br]=r,$u(e,t,!1,!1),t.stateNode=e;e:{switch(u=ml(n,r),n){case"dialog":je("cancel",e),je("close",e),o=r;break;case"iframe":case"object":case"embed":je("load",e),o=r;break;case"video":case"audio":for(o=0;o<yr.length;o++)je(yr[o],e);o=r;break;case"source":je("error",e),o=r;break;case"img":case"image":case"link":je("error",e),je("load",e),o=r;break;case"details":je("toggle",e),o=r;break;case"input":Tt(e,r),o=Ze(e,r),je("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=W({},r,{value:void 0}),je("invalid",e);break;case"textarea":ja(e,r),o=pl(e,r),je("invalid",e);break;default:o=r}hl(n,o),f=o;for(l in f)if(f.hasOwnProperty(l)){var m=f[l];l==="style"?za(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&La(e,m)):l==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&er(e,m):typeof m=="number"&&er(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?m!=null&&l==="onScroll"&&je("scroll",e):m!=null&&X(e,l,m,u))}switch(n){case"input":re(e),Ra(e,r,!1);break;case"textarea":re(e),Oa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ge(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?En(e,!!r.multiple,l,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Wu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(s(166));if(n=hn(jr.current),hn(Rt.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(l=r.nodeValue!==n)&&(e=it,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Ke(t),null;case 13:if(Ce(Te),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gs(),Dn(),t.flags|=98560,l=!1;else if(l=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[St]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ke(t),l=!1}else vt!==null&&(Bi(vt),vt=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Fe===0&&(Fe=3):Ki())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return $n(),Ii(e,t),e===null&&wr(t.stateNode.containerInfo),Ke(t),null;case 10:return si(t.type._context),Ke(t),null;case 17:return et(t.type)&&mo(),Ke(t),null;case 19:if(Ce(Te),l=t.memoizedState,l===null)return Ke(t),null;if(r=(t.flags&128)!==0,u=l.rendering,u===null)if(r)Mr(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Ro(e),u!==null){for(t.flags|=128,Mr(l,!1),r=u.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ne(Te,Te.current&1|2),t.child}e=e.sibling}l.tail!==null&&Ae()>Yn&&(t.flags|=128,r=!0,Mr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Ro(u),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Oe)return Ke(t),null}else 2*Ae()-l.renderingStartTime>Yn&&n!==1073741824&&(t.flags|=128,r=!0,Mr(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(n=l.last,n!==null?n.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Ae(),t.sibling=null,n=Te.current,Ne(Te,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return Gi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(st&1073741824)!==0&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Wp(e,t){switch(ni(t),t.tag){case 1:return et(t.type)&&mo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),Ce(Je),Ce(Ye),mi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return fi(t),null;case 13:if(Ce(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ce(Te),null;case 4:return $n(),null;case 10:return si(t.type._context),null;case 22:case 23:return Gi(),null;case 24:return null;default:return null}}var Po=!1,Qe=!1,Bp=typeof WeakSet=="function"?WeakSet:Set,B=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Pi(e,t,n){try{n()}catch(r){ze(e,t,r)}}var Bu=!1;function Yp(e,t){if(Gl=eo,e=Es(),Ul(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,f=-1,m=-1,S=0,T=0,z=e,O=null;t:for(;;){for(var H;z!==n||o!==0&&z.nodeType!==3||(f=u+o),z!==l||r!==0&&z.nodeType!==3||(m=u+r),z.nodeType===3&&(u+=z.nodeValue.length),(H=z.firstChild)!==null;)O=z,z=H;for(;;){if(z===e)break t;if(O===n&&++S===o&&(f=u),O===l&&++T===r&&(m=u),(H=z.nextSibling)!==null)break;z=O,O=z.parentNode}z=H}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:e,selectionRange:n},eo=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var Y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(Y!==null){var K=Y.memoizedProps,_e=Y.memoizedState,b=t.stateNode,g=b.getSnapshotBeforeUpdate(t.elementType===t.type?K:yt(t.type,K),_e);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(A){ze(t,t.return,A)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return Y=Bu,Bu=!1,Y}function zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Pi(t,n,l)}o=o.next}while(o!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ai(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[br],delete t[Zl],delete t[Cp],delete t[Op])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=fo));else if(r!==4&&(e=e.child,e!==null))for(_i(e,t,n),e=e.sibling;e!==null;)_i(e,t,n),e=e.sibling}function Di(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Di(e,t,n),e=e.sibling;e!==null;)Di(e,t,n),e=e.sibling}var We=null,wt=!1;function en(e,t,n){for(n=n.child;n!==null;)Qu(e,t,n),n=n.sibling}function Qu(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Kr,n)}catch{}switch(n.tag){case 5:Qe||Wn(n,t);case 6:var r=We,o=wt;We=null,en(e,t,n),We=r,wt=o,We!==null&&(wt?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(wt?(e=We,n=n.stateNode,e.nodeType===8?ql(e.parentNode,n):e.nodeType===1&&ql(e,n),dr(e)):ql(We,n.stateNode));break;case 4:r=We,o=wt,We=n.stateNode.containerInfo,wt=!0,en(e,t,n),We=r,wt=o;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&Pi(n,t,u),o=o.next}while(o!==r)}en(e,t,n);break;case 1:if(!Qe&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(f){ze(n,t,f)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,en(e,t,n),Qe=r):en(e,t,n);break;default:en(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bp),t.forEach(function(r){var o=tf.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:We=f.stateNode,wt=!1;break e;case 3:We=f.stateNode.containerInfo,wt=!0;break e;case 4:We=f.stateNode.containerInfo,wt=!0;break e}f=f.return}if(We===null)throw Error(s(160));Qu(l,u,o),We=null,wt=!1;var m=o.alternate;m!==null&&(m.return=null),o.return=null}catch(S){ze(o,t,S)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Ct(e),r&4){try{zr(3,e,e.return),Ao(3,e)}catch(K){ze(e,e.return,K)}try{zr(5,e,e.return)}catch(K){ze(e,e.return,K)}}break;case 1:kt(t,e),Ct(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(kt(t,e),Ct(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var o=e.stateNode;try{er(o,"")}catch(K){ze(e,e.return,K)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&Zn(o,l),ml(f,u);var S=ml(f,l);for(u=0;u<m.length;u+=2){var T=m[u],z=m[u+1];T==="style"?za(o,z):T==="dangerouslySetInnerHTML"?La(o,z):T==="children"?er(o,z):X(o,T,z,S)}switch(f){case"input":cl(o,l);break;case"textarea":Ca(o,l);break;case"select":var O=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var H=l.value;H!=null?En(o,!!l.multiple,H,!1):O!==!!l.multiple&&(l.defaultValue!=null?En(o,!!l.multiple,l.defaultValue,!0):En(o,!!l.multiple,l.multiple?[]:"",!1))}o[br]=l}catch(K){ze(e,e.return,K)}}break;case 6:if(kt(t,e),Ct(e),r&4){if(e.stateNode===null)throw Error(s(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(K){ze(e,e.return,K)}}break;case 3:if(kt(t,e),Ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{dr(t.containerInfo)}catch(K){ze(e,e.return,K)}break;case 4:kt(t,e),Ct(e);break;case 13:kt(t,e),Ct(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Vi=Ae())),r&4&&Xu(e);break;case 22:if(T=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(S=Qe)||T,kt(t,e),Qe=S):kt(t,e),Ct(e),r&8192){if(S=e.memoizedState!==null,(e.stateNode.isHidden=S)&&!T&&(e.mode&1)!==0)for(B=e,T=e.child;T!==null;){for(z=B=T;B!==null;){switch(O=B,H=O.child,O.tag){case 0:case 11:case 14:case 15:zr(4,O,O.return);break;case 1:Wn(O,O.return);var Y=O.stateNode;if(typeof Y.componentWillUnmount=="function"){r=O,n=O.return;try{t=r,Y.props=t.memoizedProps,Y.state=t.memoizedState,Y.componentWillUnmount()}catch(K){ze(r,n,K)}}break;case 5:Wn(O,O.return);break;case 22:if(O.memoizedState!==null){ec(z);continue}}H!==null?(H.return=O,B=H):ec(z)}T=T.sibling}e:for(T=null,z=e;;){if(z.tag===5){if(T===null){T=z;try{o=z.stateNode,S?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=z.stateNode,m=z.memoizedProps.style,u=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Ma("display",u))}catch(K){ze(e,e.return,K)}}}else if(z.tag===6){if(T===null)try{z.stateNode.nodeValue=S?"":z.memoizedProps}catch(K){ze(e,e.return,K)}}else if((z.tag!==22&&z.tag!==23||z.memoizedState===null||z===e)&&z.child!==null){z.child.return=z,z=z.child;continue}if(z===e)break e;for(;z.sibling===null;){if(z.return===null||z.return===e)break e;T===z&&(T=null),z=z.return}T===z&&(T=null),z.sibling.return=z.return,z=z.sibling}}break;case 19:kt(t,e),Ct(e),r&4&&Xu(e);break;case 21:break;default:kt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(s(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(er(o,""),r.flags&=-33);var l=Ku(e);Di(e,l,o);break;case 3:case 4:var u=r.stateNode.containerInfo,f=Ku(e);_i(e,f,u);break;default:throw Error(s(161))}}catch(m){ze(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gp(e,t,n){B=e,Zu(e)}function Zu(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,l=o.child;if(o.tag===22&&r){var u=o.memoizedState!==null||Po;if(!u){var f=o.alternate,m=f!==null&&f.memoizedState!==null||Qe;f=Po;var S=Qe;if(Po=u,(Qe=m)&&!S)for(B=o;B!==null;)u=B,m=u.child,u.tag===22&&u.memoizedState!==null?tc(o):m!==null?(m.return=u,B=m):tc(o);for(;l!==null;)B=l,Zu(l),l=l.sibling;B=o,Po=f,Qe=S}Ju(e)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,B=l):Ju(e)}}function Ju(e){for(;B!==null;){var t=B;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Qe||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&eu(t,l,r);break;case 3:var u=t.updateQueue;if(u!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eu(t,u,n)}break;case 5:var f=t.stateNode;if(n===null&&t.flags&4){n=f;var m=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var S=t.alternate;if(S!==null){var T=S.memoizedState;if(T!==null){var z=T.dehydrated;z!==null&&dr(z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Qe||t.flags&512&&Ai(t)}catch(O){ze(t,t.return,O)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function ec(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function tc(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(m){ze(t,n,m)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(m){ze(t,o,m)}}var l=t.return;try{Ai(t)}catch(m){ze(t,l,m)}break;case 5:var u=t.return;try{Ai(t)}catch(m){ze(t,u,m)}}}catch(m){ze(t,t.return,m)}if(t===e){B=null;break}var f=t.sibling;if(f!==null){f.return=t.return,B=f;break}B=t.return}}var Kp=Math.ceil,_o=ne.ReactCurrentDispatcher,Ui=ne.ReactCurrentOwner,ft=ne.ReactCurrentBatchConfig,he=0,$e=null,De=null,Be=0,st=0,Bn=Qt(0),Fe=0,Ir=null,gn=0,Do=0,Fi=0,Pr=null,nt=null,Vi=0,Yn=1/0,Dt=null,Uo=!1,$i=null,tn=null,Fo=!1,nn=null,Vo=0,Ar=0,Hi=null,$o=-1,Ho=0;function qe(){return(he&6)!==0?Ae():$o!==-1?$o:$o=Ae()}function rn(e){return(e.mode&1)===0?1:(he&2)!==0&&Be!==0?Be&-Be:Lp.transition!==null?(Ho===0&&(Ho=Ka()),Ho):(e=ve,e!==0||(e=window.event,e=e===void 0?16:rs(e.type)),e)}function bt(e,t,n,r){if(50<Ar)throw Ar=0,Hi=null,Error(s(185));ir(e,n,r),((he&2)===0||e!==$e)&&(e===$e&&((he&2)===0&&(Do|=n),Fe===4&&on(e,Be)),rt(e,r),n===1&&he===0&&(t.mode&1)===0&&(Yn=Ae()+500,xo&&qt()))}function rt(e,t){var n=e.callbackNode;Ld(e,t);var r=qr(e,e===$e?Be:0);if(r===0)n!==null&&Ba(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ba(n),t===1)e.tag===0?Tp(rc.bind(null,e)):$s(rc.bind(null,e)),Rp(function(){(he&6)===0&&qt()}),n=null;else{switch(Qa(r)){case 1:n=bl;break;case 4:n=Ya;break;case 16:n=Gr;break;case 536870912:n=Ga;break;default:n=Gr}n=dc(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if($o=-1,Ho=0,(he&6)!==0)throw Error(s(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=qr(e,e===$e?Be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Wo(e,r);else{t=r;var o=he;he|=2;var l=lc();($e!==e||Be!==t)&&(Dt=null,Yn=Ae()+500,vn(e,t));do try{qp();break}catch(f){oc(e,f)}while(!0);ai(),_o.current=l,he=o,De!==null?t=0:($e=null,Be=0,t=Fe)}if(t!==0){if(t===2&&(o=El(e),o!==0&&(r=o,t=Wi(e,o))),t===1)throw n=Ir,vn(e,0),on(e,r),rt(e,Ae()),n;if(t===6)on(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Qp(o)&&(t=Wo(e,r),t===2&&(l=El(e),l!==0&&(r=l,t=Wi(e,l))),t===1))throw n=Ir,vn(e,0),on(e,r),rt(e,Ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(s(345));case 2:yn(e,nt,Dt);break;case 3:if(on(e,r),(r&130023424)===r&&(t=Vi+500-Ae(),10<t)){if(qr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Xl(yn.bind(null,e,nt,Dt),t);break}yn(e,nt,Dt);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var u=31-gt(r);l=1<<u,u=t[u],u>o&&(o=u),r&=~l}if(r=o,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Kp(r/1960))-r,10<r){e.timeoutHandle=Xl(yn.bind(null,e,nt,Dt),r);break}yn(e,nt,Dt);break;case 5:yn(e,nt,Dt);break;default:throw Error(s(329))}}}return rt(e,Ae()),e.callbackNode===n?nc.bind(null,e):null}function Wi(e,t){var n=Pr;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Wo(e,t),e!==2&&(t=nt,nt=n,t!==null&&Bi(t)),e}function Bi(e){nt===null?nt=e:nt.push.apply(nt,e)}function Qp(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!xt(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Fi,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if((he&6)!==0)throw Error(s(327));Gn();var t=qr(e,0);if((t&1)===0)return rt(e,Ae()),null;var n=Wo(e,t);if(e.tag!==0&&n===2){var r=El(e);r!==0&&(t=r,n=Wi(e,r))}if(n===1)throw n=Ir,vn(e,0),on(e,t),rt(e,Ae()),n;if(n===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,yn(e,nt,Dt),rt(e,Ae()),null}function Yi(e,t){var n=he;he|=1;try{return e(t)}finally{he=n,he===0&&(Yn=Ae()+500,xo&&qt())}}function xn(e){nn!==null&&nn.tag===0&&(he&6)===0&&Gn();var t=he;he|=1;var n=ft.transition,r=ve;try{if(ft.transition=null,ve=1,e)return e()}finally{ve=r,ft.transition=n,he=t,(he&6)===0&&qt()}}function Gi(){st=Bn.current,Ce(Bn)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Sp(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mo();break;case 3:$n(),Ce(Je),Ce(Ye),mi();break;case 5:fi(r);break;case 4:$n();break;case 13:Ce(Te);break;case 19:Ce(Te);break;case 10:si(r.type._context);break;case 22:case 23:Gi()}n=n.return}if($e=e,De=e=ln(e.current,null),Be=st=t,Fe=0,Ir=null,Fi=Do=gn=0,nt=Pr=null,fn!==null){for(t=0;t<fn.length;t++)if(n=fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var u=l.next;l.next=o,r.next=u}n.pending=r}fn=null}return e}function oc(e,t){do{var n=De;try{if(ai(),jo.current=Lo,Co){for(var r=Le.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Co=!1}if(mn=0,Ve=Ue=Le=null,Cr=!1,Or=0,Ui.current=null,n===null||n.return===null){Fe=1,Ir=t,De=null;break}e:{var l=e,u=n.return,f=n,m=t;if(t=Be,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var S=m,T=f,z=T.tag;if((T.mode&1)===0&&(z===0||z===11||z===15)){var O=T.alternate;O?(T.updateQueue=O.updateQueue,T.memoizedState=O.memoizedState,T.lanes=O.lanes):(T.updateQueue=null,T.memoizedState=null)}var H=Ou(u);if(H!==null){H.flags&=-257,Tu(H,u,f,l,t),H.mode&1&&Cu(l,S,t),t=H,m=S;var Y=t.updateQueue;if(Y===null){var K=new Set;K.add(m),t.updateQueue=K}else Y.add(m);break e}else{if((t&1)===0){Cu(l,S,t),Ki();break e}m=Error(s(426))}}else if(Oe&&f.mode&1){var _e=Ou(u);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),Tu(_e,u,f,l,t),li(Hn(m,f));break e}}l=m=Hn(m,f),Fe!==4&&(Fe=2),Pr===null?Pr=[l]:Pr.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var b=Ru(l,m,t);Js(l,b);break e;case 1:f=m;var g=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(tn===null||!tn.has(N)))){l.flags|=65536,t&=-t,l.lanes|=t;var A=ju(l,f,t);Js(l,A);break e}}l=l.return}while(l!==null)}ac(n)}catch(Q){t=Q,De===n&&n!==null&&(De=n=n.return);continue}break}while(!0)}function lc(){var e=_o.current;return _o.current=Lo,e===null?Lo:e}function Ki(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),$e===null||(gn&268435455)===0&&(Do&268435455)===0||on($e,Be)}function Wo(e,t){var n=he;he|=2;var r=lc();($e!==e||Be!==t)&&(Dt=null,vn(e,t));do try{Xp();break}catch(o){oc(e,o)}while(!0);if(ai(),he=n,_o.current=r,De!==null)throw Error(s(261));return $e=null,Be=0,Fe}function Xp(){for(;De!==null;)ic(De)}function qp(){for(;De!==null&&!bd();)ic(De)}function ic(e){var t=cc(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?ac(e):De=t,Ui.current=null}function ac(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Hp(n,t,st),n!==null){De=n;return}}else{if(n=Wp(n,t),n!==null){n.flags&=32767,De=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,De=null;return}}if(t=t.sibling,t!==null){De=t;return}De=t=e}while(t!==null);Fe===0&&(Fe=5)}function yn(e,t,n){var r=ve,o=ft.transition;try{ft.transition=null,ve=1,Zp(e,t,n,r)}finally{ft.transition=o,ve=r}return null}function Zp(e,t,n,r){do Gn();while(nn!==null);if((he&6)!==0)throw Error(s(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Md(e,l),e===$e&&(De=$e=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Fo||(Fo=!0,dc(Gr,function(){return Gn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=ft.transition,ft.transition=null;var u=ve;ve=1;var f=he;he|=4,Ui.current=null,Yp(e,n),qu(n,e),vp(Kl),eo=!!Gl,Kl=Gl=null,e.current=n,Gp(n),Ed(),he=f,ve=u,ft.transition=l}else e.current=n;if(Fo&&(Fo=!1,nn=e,Vo=o),l=e.pendingLanes,l===0&&(tn=null),Rd(n.stateNode),rt(e,Ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Uo)throw Uo=!1,e=$i,$i=null,e;return(Vo&1)!==0&&e.tag!==0&&Gn(),l=e.pendingLanes,(l&1)!==0?e===Hi?Ar++:(Ar=0,Hi=e):Ar=0,qt(),null}function Gn(){if(nn!==null){var e=Qa(Vo),t=ft.transition,n=ve;try{if(ft.transition=null,ve=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Vo=0,(he&6)!==0)throw Error(s(331));var o=he;for(he|=4,B=e.current;B!==null;){var l=B,u=l.child;if((B.flags&16)!==0){var f=l.deletions;if(f!==null){for(var m=0;m<f.length;m++){var S=f[m];for(B=S;B!==null;){var T=B;switch(T.tag){case 0:case 11:case 15:zr(8,T,l)}var z=T.child;if(z!==null)z.return=T,B=z;else for(;B!==null;){T=B;var O=T.sibling,H=T.return;if(Yu(T),T===S){B=null;break}if(O!==null){O.return=H,B=O;break}B=H}}}var Y=l.alternate;if(Y!==null){var K=Y.child;if(K!==null){Y.child=null;do{var _e=K.sibling;K.sibling=null,K=_e}while(K!==null)}}B=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,B=u;else e:for(;B!==null;){if(l=B,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:zr(9,l,l.return)}var b=l.sibling;if(b!==null){b.return=l.return,B=b;break e}B=l.return}}var g=e.current;for(B=g;B!==null;){u=B;var N=u.child;if((u.subtreeFlags&2064)!==0&&N!==null)N.return=u,B=N;else e:for(u=g;B!==null;){if(f=B,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Ao(9,f)}}catch(Q){ze(f,f.return,Q)}if(f===u){B=null;break e}var A=f.sibling;if(A!==null){A.return=f.return,B=A;break e}B=f.return}}if(he=o,qt(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Kr,e)}catch{}r=!0}return r}finally{ve=n,ft.transition=t}}return!1}function sc(e,t,n){t=Hn(n,t),t=Ru(e,t,1),e=Jt(e,t,1),t=qe(),e!==null&&(ir(e,1,t),rt(e,t))}function ze(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=Hn(n,e),e=ju(t,e,1),t=Jt(t,e,1),e=qe(),t!==null&&(ir(t,1,e),rt(t,e));break}}t=t.return}}function Jp(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,$e===e&&(Be&n)===n&&(Fe===4||Fe===3&&(Be&130023424)===Be&&500>Ae()-Vi?vn(e,0):Fi|=n),rt(e,t)}function uc(e,t){t===0&&((e.mode&1)===0?t=1:(t=Xr,Xr<<=1,(Xr&130023424)===0&&(Xr=4194304)));var n=qe();e=Pt(e,t),e!==null&&(ir(e,t,n),rt(e,n))}function ef(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uc(e,n)}function tf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(s(314))}r!==null&&r.delete(t),uc(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)tt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return tt=!1,$p(e,t,n);tt=(e.flags&131072)!==0}else tt=!1,Oe&&(t.flags&1048576)!==0&&Hs(t,yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Io(e,t),e=t.pendingProps;var o=Pn(t,Ye.current);Vn(t,n),o=vi(null,t,r,e,o,n);var l=yi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(l=!0,go(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,di(t),o.updater=Mo,t.stateNode=o,o._reactInternals=t,Si(t,r,e,n),t=Oi(null,t,r,!0,l,n)):(t.tag=0,Oe&&l&&ti(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rf(r),e=yt(r,e),o){case 0:t=Ci(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Lu(null,t,r,e,n);break e;case 14:t=Mu(null,t,r,yt(r.type,e),n);break e}throw Error(s(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Ci(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Au(e,t,r,o,n);case 3:e:{if(_u(t),e===null)throw Error(s(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Zs(e,t),So(t,r,null,n);var u=t.memoizedState;if(r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Hn(Error(s(423)),t),t=Du(e,t,r,n,o);break e}else if(r!==o){o=Hn(Error(s(424)),t),t=Du(e,t,r,n,o);break e}else for(at=Kt(t.stateNode.containerInfo.firstChild),it=t,Oe=!0,vt=null,n=Xs(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===o){t=_t(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return tu(t),e===null&&oi(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,u=o.children,Ql(r,o)?u=null:l!==null&&Ql(r,l)&&(t.flags|=32),Pu(e,t),Xe(e,t,u,n),t.child;case 6:return e===null&&oi(t),null;case 13:return Uu(e,t,n);case 4:return pi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Un(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Lu(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,u=o.value,Ne(bo,r._currentValue),r._currentValue=u,l!==null)if(xt(l.value,u)){if(l.children===o.children&&!Je.current){t=_t(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var f=l.dependencies;if(f!==null){u=l.child;for(var m=f.firstContext;m!==null;){if(m.context===r){if(l.tag===1){m=At(-1,n&-n),m.tag=2;var S=l.updateQueue;if(S!==null){S=S.shared;var T=S.pending;T===null?m.next=m:(m.next=T.next,T.next=m),S.pending=m}}l.lanes|=n,m=l.alternate,m!==null&&(m.lanes|=n),ui(l.return,n,t),f.lanes|=n;break}m=m.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(s(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),ui(u,n,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Vn(t,n),o=dt(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=yt(r,t.pendingProps),o=yt(r.type,o),Mu(e,t,r,o,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:yt(r,o),Io(e,t),t.tag=1,et(r)?(e=!0,go(t)):e=!1,Vn(t,n),Nu(t,r,o),Si(t,r,o,n),Oi(null,t,r,!0,e,n);case 19:return Vu(e,t,n);case 22:return Iu(e,t,n)}throw Error(s(156,t.tag))};function dc(e,t){return Wa(e,t)}function nf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new nf(e,t,n,r)}function Qi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rf(e){if(typeof e=="function")return Qi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===te)return 14}return 2}function ln(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,o,l){var u=2;if(r=e,typeof e=="function")Qi(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case xe:return wn(n.children,o,l,t);case $:u=8,o|=8;break;case U:return e=ht(12,n,t,o|2),e.elementType=U,e.lanes=l,e;case Re:return e=ht(13,n,t,o),e.elementType=Re,e.lanes=l,e;case ee:return e=ht(19,n,t,o),e.elementType=ee,e.lanes=l,e;case be:return Yo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ae:u=10;break e;case Ie:u=9;break e;case Se:u=11;break e;case te:u=14;break e;case Pe:u=16,r=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=ht(u,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function wn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function Yo(e,t,n,r){return e=ht(22,e,r,t),e.elementType=be,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function qi(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function of(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zi(e,t,n,r,o,l,u,f,m){return e=new of(e,t,n,f,m),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ht(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},di(l),e}function lf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:se,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function pc(e){if(!e)return Xt;e=e._reactInternals;e:{if(sn(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var n=e.type;if(et(n))return Fs(e,n,t)}return t}function fc(e,t,n,r,o,l,u,f,m){return e=Zi(n,r,!0,e,o,l,u,f,m),e.context=pc(null),n=e.current,r=qe(),o=rn(n),l=At(r,o),l.callback=t??null,Jt(n,l,o),e.current.lanes=o,ir(e,o,r),rt(e,r),e}function Go(e,t,n,r){var o=t.current,l=qe(),u=rn(o);return n=pc(n),t.context===null?t.context=n:t.pendingContext=n,t=At(l,u),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Jt(o,t,u),e!==null&&(bt(e,o,u,l),No(e,o,u)),u}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ji(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function af(){return null}var mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function ea(e){this._internalRoot=e}Qo.prototype.render=ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Go(e,t,null,null)},Qo.prototype.unmount=ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xn(function(){Go(null,e,null,null)}),t[Lt]=null}};function Qo(e){this._internalRoot=e}Qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&ts(e)}};function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gc(){}function sf(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var S=Ko(u);l.call(S)}}var u=fc(t,r,e,0,null,!1,!1,"",gc);return e._reactRootContainer=u,e[Lt]=u.current,wr(e.nodeType===8?e.parentNode:e),xn(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var f=r;r=function(){var S=Ko(m);f.call(S)}}var m=Zi(e,0,!1,null,null,!1,!1,"",gc);return e._reactRootContainer=m,e[Lt]=m.current,wr(e.nodeType===8?e.parentNode:e),xn(function(){Go(t,m,n,r)}),m}function qo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var u=l;if(typeof o=="function"){var f=o;o=function(){var m=Ko(u);f.call(m)}}Go(t,u,e,o)}else u=sf(n,t,e,o,r);return Ko(u)}Xa=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=lr(t.pendingLanes);n!==0&&(Sl(t,n|1),rt(t,Ae()),(he&6)===0&&(Yn=Ae()+500,qt()))}break;case 13:xn(function(){var r=Pt(e,1);if(r!==null){var o=qe();bt(r,e,1,o)}}),Ji(e,1)}},Rl=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=qe();bt(t,e,134217728,n)}Ji(e,134217728)}},qa=function(e){if(e.tag===13){var t=rn(e),n=Pt(e,t);if(n!==null){var r=qe();bt(n,e,t,r)}Ji(e,t)}},Za=function(){return ve},Ja=function(e,t){var n=ve;try{return ve=e,t()}finally{ve=n}},vl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ho(r);if(!o)throw Error(s(90));we(r),cl(r,o)}}}break;case"textarea":Ca(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}},_a=Yi,Da=xn;var uf={usingClientEntryPoint:!1,Events:[Er,zn,ho,Pa,Aa,Yi]},_r={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cf={bundleType:_r.bundleType,version:_r.version,rendererPackageName:_r.rendererPackageName,rendererConfig:_r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$a(e),e===null?null:e.stateNode},findFiberByHostInstance:_r.findFiberByHostInstance||af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zo.isDisabled&&Zo.supportsFiber)try{Kr=Zo.inject(cf),Nt=Zo}catch{}}return ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf,ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ta(t))throw Error(s(200));return lf(e,t,null,n)},ot.createRoot=function(e,t){if(!ta(e))throw Error(s(299));var n=!1,r="",o=mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zi(e,1,!1,null,null,n,!1,r,o),e[Lt]=t.current,wr(e.nodeType===8?e.parentNode:e),new ea(t)},ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=$a(t),e=e===null?null:e.stateNode,e},ot.flushSync=function(e){return xn(e)},ot.hydrate=function(e,t,n){if(!Xo(t))throw Error(s(200));return qo(null,e,t,!0,n)},ot.hydrateRoot=function(e,t,n){if(!ta(e))throw Error(s(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",u=mc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),t=fc(t,null,e,1,n??null,o,!1,l,u),e[Lt]=t.current,wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Qo(t)},ot.render=function(e,t,n){if(!Xo(t))throw Error(s(200));return qo(null,e,t,!1,n)},ot.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(s(40));return e._reactRootContainer?(xn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[Lt]=null})}),!0):!1},ot.unstable_batchedUpdates=Yi,ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xo(n))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return qo(e,t,n,!1,r)},ot.version="18.3.1-next-f1338f8080-20240426",ot}var Nc;function vf(){if(Nc)return oa.exports;Nc=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),oa.exports=xf(),oa.exports}var Sc;function yf(){if(Sc)return Jo;Sc=1;var a=vf();return Jo.createRoot=a.createRoot,Jo.hydrateRoot=a.hydrateRoot,Jo}var wf=yf();const kf=Dc(wf);/**
 * react-router v7.18.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xa=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Uc=/^[\\/]{2}/;function bf(a,c){return c+a.replace(/\\/g,"/")}var Rc="popstate";function jc(a){return typeof a=="object"&&a!=null&&"pathname"in a&&"search"in a&&"hash"in a&&"state"in a&&"key"in a}function Ef(a={}){function c(d,p){var j;let h=(j=p.state)==null?void 0:j.masked,{pathname:x,search:v,hash:k}=h||d.location;return fa("",{pathname:x,search:v,hash:k},p.state&&p.state.usr||null,p.state&&p.state.key||"default",h?{pathname:d.location.pathname,search:d.location.search,hash:d.location.hash}:void 0)}function s(d,p){return typeof p=="string"?p:Kn(p)}return Sf(c,s,null,a)}function Me(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function Ot(a,c){if(!a){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Nf(){return Math.random().toString(36).substring(2,10)}function Cc(a,c){return{usr:a.state,key:a.key,idx:c,masked:a.mask?{pathname:a.pathname,search:a.search,hash:a.hash}:void 0}}function fa(a,c,s=null,d,p){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof c=="string"?Xn(c):c,state:s,key:c&&c.key||d||Nf(),mask:p}}function Kn({pathname:a="/",search:c="",hash:s=""}){return c&&c!=="?"&&(a+=c.charAt(0)==="?"?c:"?"+c),s&&s!=="#"&&(a+=s.charAt(0)==="#"?s:"#"+s),a}function Xn(a){let c={};if(a){let s=a.indexOf("#");s>=0&&(c.hash=a.substring(s),a=a.substring(0,s));let d=a.indexOf("?");d>=0&&(c.search=a.substring(d),a=a.substring(0,d)),a&&(c.pathname=a)}return c}function Sf(a,c,s,d={}){let{window:p=document.defaultView,v5Compat:h=!1}=d,x=p.history,v="POP",k=null,j=E();j==null&&(j=0,x.replaceState({...x.state,idx:j},""));function E(){return(x.state||{idx:null}).idx}function R(){v="POP";let I=E(),P=I==null?null:I-j;j=I,k&&k({action:v,location:M.location,delta:P})}function L(I,P){v="PUSH";let G=jc(I)?I:fa(M.location,I,P);j=E()+1;let X=Cc(G,j),ne=M.createHref(G.mask||G);try{x.pushState(X,"",ne)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(ne)}h&&k&&k({action:v,location:M.location,delta:1})}function V(I,P){v="REPLACE";let G=jc(I)?I:fa(M.location,I,P);j=E();let X=Cc(G,j),ne=M.createHref(G.mask||G);x.replaceState(X,"",ne),h&&k&&k({action:v,location:M.location,delta:0})}function _(I){return Rf(p,I)}let M={get action(){return v},get location(){return a(p,x)},listen(I){if(k)throw new Error("A history only accepts one active listener");return p.addEventListener(Rc,R),k=I,()=>{p.removeEventListener(Rc,R),k=null}},createHref(I){return c(p,I)},createURL:_,encodeLocation(I){let P=_(I);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:L,replace:V,go(I){return x.go(I)}};return M}function Rf(a,c,s=!1){let d="http://localhost";a&&(d=a.location.origin!=="null"?a.location.origin:a.location.href),Me(d,"No window.location.(origin|href) available to create URL");let p=typeof c=="string"?c:Kn(c);return p=p.replace(/ $/,"%20"),!s&&Uc.test(p)&&(p=d+p),new URL(p,d)}function Fc(a,c,s="/"){return jf(a,c,s,!1)}function jf(a,c,s,d,p){let h=typeof c=="string"?Xn(c):c,x=Ut(h.pathname||"/",s);if(x==null)return null;let v=Cf(a),k=null,j=Uf(x);for(let E=0;k==null&&E<v.length;++E)k=Df(v[E],j,d);return k}function Cf(a){let c=Vc(a);return Of(c),c}function Vc(a,c=[],s=[],d="",p=!1){let h=(x,v,k=p,j)=>{let E={relativePath:j===void 0?x.path||"":j,caseSensitive:x.caseSensitive===!0,childrenIndex:v,route:x};if(E.relativePath.startsWith("/")){if(!E.relativePath.startsWith(d)&&k)return;Me(E.relativePath.startsWith(d),`Absolute route path "${E.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),E.relativePath=E.relativePath.slice(d.length)}let R=Et([d,E.relativePath]),L=s.concat(E);x.children&&x.children.length>0&&(Me(x.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${R}".`),Vc(x.children,c,L,R,k)),!(x.path==null&&!x.index)&&c.push({path:R,score:Af(R,x.index),routesMeta:L.map((V,_)=>{let[M,I]=Wc(V.relativePath,V.caseSensitive,_===L.length-1);return{...V,matcher:M,compiledParams:I}})})};return a.forEach((x,v)=>{var k;if(x.path===""||!((k=x.path)!=null&&k.includes("?")))h(x,v);else for(let j of $c(x.path))h(x,v,!0,j)}),c}function $c(a){let c=a.split("/");if(c.length===0)return[];let[s,...d]=c,p=s.endsWith("?"),h=s.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let x=$c(d.join("/")),v=[];return v.push(...x.map(k=>k===""?h:[h,k].join("/"))),p&&v.push(...x),v.map(k=>a.startsWith("/")&&k===""?"/":k)}function Of(a){a.sort((c,s)=>c.score!==s.score?s.score-c.score:_f(c.routesMeta.map(d=>d.childrenIndex),s.routesMeta.map(d=>d.childrenIndex)))}var Tf=/^:[\w-]+$/,Lf=3,Mf=2,zf=1,If=10,Pf=-2,Oc=a=>a==="*";function Af(a,c){let s=a.split("/"),d=s.length;return s.some(Oc)&&(d+=Pf),c&&(d+=Mf),s.filter(p=>!Oc(p)).reduce((p,h)=>p+(Tf.test(h)?Lf:h===""?zf:If),d)}function _f(a,c){return a.length===c.length&&a.slice(0,-1).every((d,p)=>d===c[p])?a[a.length-1]-c[c.length-1]:0}function Df(a,c,s=!1){let{routesMeta:d}=a,p={},h="/",x=[];for(let v=0;v<d.length;++v){let k=d[v],j=v===d.length-1,E=h==="/"?c:c.slice(h.length)||"/",R={path:k.relativePath,caseSensitive:k.caseSensitive,end:j},L=k.matcher&&k.compiledParams?Hc(R,E,k.matcher,k.compiledParams):ll(R,E),V=k.route;if(!L&&j&&s&&!d[d.length-1].route.index&&(L=ll({path:k.relativePath,caseSensitive:k.caseSensitive,end:!1},E)),!L)return null;Object.assign(p,L.params),x.push({params:p,pathname:Et([h,L.pathname]),pathnameBase:$f(Et([h,L.pathnameBase])),route:V}),L.pathnameBase!=="/"&&(h=Et([h,L.pathnameBase]))}return x}function ll(a,c){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[s,d]=Wc(a.path,a.caseSensitive,a.end);return Hc(a,c,s,d)}function Hc(a,c,s,d){let p=c.match(s);if(!p)return null;let h=p[0],x=Qn(h,1),v=p.slice(1);return{params:d.reduce((j,{paramName:E,isOptional:R},L)=>{if(E==="*"){let _=v[L]||"";x=Qn(h.slice(0,h.length-_.length),1)}const V=v[L];return R&&!V?j[E]=void 0:j[E]=(V||"").replace(/%2F/g,"/"),j},{}),pathname:h,pathnameBase:x,pattern:a}}function Wc(a,c=!1,s=!0){Ot(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let d=[],p="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,v,k,j,E)=>{if(d.push({paramName:v,isOptional:k!=null}),k){let R=E.charAt(j+x.length);return R&&R!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(d.push({paramName:"*"}),p+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?p+="\\/*$":a!==""&&a!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,c?void 0:"i"),d]}function Uf(a){try{return a.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ot(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`),a}}function Ut(a,c){if(c==="/")return a;if(!a.toLowerCase().startsWith(c.toLowerCase()))return null;let s=c.endsWith("/")?c.length-1:c.length,d=a.charAt(s);return d&&d!=="/"?null:a.slice(s)||"/"}function Ff(a,c="/"){let{pathname:s,search:d="",hash:p=""}=typeof a=="string"?Xn(a):a,h;return s?(s=Yc(s),s.startsWith("/")||s.startsWith("\\")?h=Tc(s.substring(1),"/"):h=Tc(s,c)):h=c,{pathname:h,search:Hf(d),hash:Wf(p)}}function Tc(a,c){let s=Qn(c).split("/");return a.split("/").forEach(p=>{p===".."?s.length>1&&s.pop():p!=="."&&s.push(p)}),s.length>1?s.join("/"):"/"}function aa(a,c,s,d){return`Cannot include a '${a}' character in a manually specified \`to.${c}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vf(a){return a.filter((c,s)=>s===0||c.route.path&&c.route.path.length>0)}function Bc(a){let c=Vf(a);return c.map((s,d)=>d===c.length-1?s.pathname:s.pathnameBase)}function va(a,c,s,d=!1){let p;typeof a=="string"?p=Xn(a):(p={...a},Me(!p.pathname||!p.pathname.includes("?"),aa("?","pathname","search",p)),Me(!p.pathname||!p.pathname.includes("#"),aa("#","pathname","hash",p)),Me(!p.search||!p.search.includes("#"),aa("#","search","hash",p)));let h=a===""||p.pathname==="",x=h?"/":p.pathname,v;if(x==null)v=s;else{let R=c.length-1;if(!d&&x.startsWith("..")){let L=x.split("/");for(;L[0]==="..";)L.shift(),R-=1;p.pathname=L.join("/")}v=R>=0?c[R]:"/"}let k=Ff(p,v),j=x&&x!=="/"&&x.endsWith("/"),E=(h||x===".")&&s.endsWith("/");return!k.pathname.endsWith("/")&&(j||E)&&(k.pathname+="/"),k}var Yc=a=>a.replace(/[\\/]{2,}/g,"/"),Et=a=>Yc(a.join("/"));function Qn(a,c=0){let s=a.length;for(;s>c&&a.charCodeAt(s-1)===47;)s--;return s===a.length?a:a.slice(0,s)}var $f=a=>Qn(a).replace(/^\/*/,"/"),Hf=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,Wf=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,Bf=class{constructor(a,c,s,d=!1){this.status=a,this.statusText=c||"",this.internal=d,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function Yf(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function Gf(a){let c=a.map(s=>s.route.path).filter(Boolean);return Et(c)||"/"}var Gc=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Kc(a,c){let s=a;if(typeof s!="string"||!xa.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let d=s,p=!1;if(Gc)try{let h=new URL(window.location.href),x=Uc.test(s)?new URL(bf(s,h.protocol)):new URL(s),v=Ut(x.pathname,c);x.origin===h.origin&&v!=null?s=v+x.search+x.hash:p=!0}catch{Ot(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:d,isExternal:p,to:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Lc=new URL("http://localhost");function Qc(a){if(a.createURL)return a.createURL("/");try{return new URL(a.createHref("/"),Lc)}catch{return Lc}}function sa(a,c){return a.origin===c.origin&&(a.origin!=="null"||a.protocol===c.protocol&&a.host===c.host)}function Kf(a,c){if(a.startsWith("//"))return!0;let s=c.protocol.toLowerCase();return a.toLowerCase().startsWith(s)?c.host===""||a.slice(s.length).startsWith("//"):!1}function Xc(a,c,s,d){let p=null;try{p=a==null?null:new URL(a,s)}catch{}let h=new URL(c,s),x=p!=null&&!sa(p,s),v=!sa(h,s);if(d==="reject"){if(x||v)throw new Error("External navigation is not allowed")}else if(v&&(p==null||!Kf(a,p)||!sa(p,h)))throw new Error("External navigation is not allowed")}var qc=["POST","PUT","PATCH","DELETE"];new Set(qc);var Qf=["GET",...qc];new Set(Qf);var Xf=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function qf(a){try{return Xf.includes(new URL(a).protocol)}catch{return!1}}var qn=y.createContext(null);qn.displayName="DataRouter";var al=y.createContext(null);al.displayName="DataRouterState";var Zc=y.createContext(!1);function Zf(){return y.useContext(Zc)}var Jc=y.createContext({isTransitioning:!1});Jc.displayName="ViewTransition";var Jf=y.createContext(new Map);Jf.displayName="Fetchers";var eh=y.createContext(null);eh.displayName="Await";var mt=y.createContext(null);mt.displayName="Navigation";var Vr=y.createContext(null);Vr.displayName="Location";var Ft=y.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var ya=y.createContext(null);ya.displayName="RouteError";var ed="REACT_ROUTER_ERROR",th="REDIRECT",nh="ROUTE_ERROR_RESPONSE";function rh(a){if(a.startsWith(`${ed}:${th}:{`))try{let c=JSON.parse(a.slice(28));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string"&&typeof c.location=="string"&&typeof c.reloadDocument=="boolean"&&typeof c.replace=="boolean")return c}catch{}}function oh(a){if(a.startsWith(`${ed}:${nh}:{`))try{let c=JSON.parse(a.slice(40));if(typeof c=="object"&&c&&typeof c.status=="number"&&typeof c.statusText=="string")return new Bf(c.status,c.statusText,c.data)}catch{}}function lh(a,{relative:c}={}){Me($r(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:d}=y.useContext(mt),{hash:p,pathname:h,search:x}=Hr(a,{relative:c}),v=h;return s!=="/"&&(v=h==="/"?s:Et([s,h])),d.createHref({pathname:v,search:x,hash:p})}function $r(){return y.useContext(Vr)!=null}function Vt(){return Me($r(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Vr).location}var td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nd(a){y.useContext(mt).static||y.useLayoutEffect(a)}function ih(){let{isDataRoute:a}=y.useContext(Ft);return a?yh():ah()}function ah(){Me($r(),"useNavigate() may be used only in the context of a <Router> component.");let a=y.useContext(qn),{basename:c,navigator:s}=y.useContext(mt),{matches:d}=y.useContext(Ft),{pathname:p}=Vt(),h=JSON.stringify(Bc(d)),x=y.useRef(!1);return nd(()=>{x.current=!0}),y.useCallback((k,j={})=>{if(Ot(x.current,td),!x.current)return;if(typeof k=="number"){s.go(k);return}let E=va(k,JSON.parse(h),p,j.relative==="path");a==null&&c!=="/"&&(E.pathname=E.pathname==="/"?c:Et([c,E.pathname])),Xc(typeof k=="string"?k:Kn(k),s.createHref(E),Qc(s),"reject"),(j.replace?s.replace:s.push)(E,j.state,j)},[c,s,h,p,a])}y.createContext(null);function Hr(a,{relative:c}={}){let{matches:s}=y.useContext(Ft),{pathname:d}=Vt(),p=JSON.stringify(Bc(s));return y.useMemo(()=>va(a,JSON.parse(p),d,c==="path"),[a,p,d,c])}function sh(a,c){return rd(a,c)}function rd(a,c,s){var I;Me($r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=y.useContext(mt),{matches:p}=y.useContext(Ft),h=p[p.length-1],x=h?h.params:{},v=h?h.pathname:"/",k=h?h.pathnameBase:"/",j=h&&h.route;{let P=j&&j.path||"";ld(v,!j||P.endsWith("*")||P.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P==="/"?"*":`${P}/*`}">.`)}let E=Vt(),R;if(c){let P=typeof c=="string"?Xn(c):c;Me(k==="/"||((I=P.pathname)==null?void 0:I.startsWith(k)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${k}" but pathname "${P.pathname}" was given in the \`location\` prop.`),R=P}else R=E;let L=R.pathname||"/",V=L;if(k!=="/"){let P=k.replace(/^\//,"").split("/");V="/"+L.replace(/^\//,"").split("/").slice(P.length).join("/")}let _=s&&s.state.matches.length?s.state.matches.map(P=>Object.assign(P,{route:s.manifest[P.route.id]||P.route})):Fc(a,{pathname:V});Ot(j||_!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),Ot(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=fh(_&&_.map(P=>Object.assign({},P,{params:Object.assign({},x,P.params),pathname:Et([k,d.encodeLocation?d.encodeLocation(P.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?k:Et([k,d.encodeLocation?d.encodeLocation(P.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:P.pathnameBase])})),p,s);return c&&M?y.createElement(Vr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...R},navigationType:"POP"}},M):M}function uh(){let a=vh(),c=Yf(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),s=a instanceof Error?a.stack:null,d="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:d},h={padding:"2px 4px",backgroundColor:d},x=null;return console.error("Error handled by React Router default ErrorBoundary:",a),x=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:h},"ErrorBoundary")," or"," ",y.createElement("code",{style:h},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},c),s?y.createElement("pre",{style:p},s):null,x)}var ch=y.createElement(uh,null),od=class extends y.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,c){return c.location!==a.location||c.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:c.error,location:c.location,revalidation:a.revalidation||c.revalidation}}componentDidCatch(a,c){this.props.onError?this.props.onError(a,c):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const s=oh(a.digest);s&&(a=s)}let c=a!==void 0?y.createElement(Ft.Provider,{value:this.props.routeContext},y.createElement(ya.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?y.createElement(dh,{error:a},c):c}};od.contextType=Zc;var ua=new WeakMap;function dh({children:a,error:c}){let{basename:s,navigator:d}=y.useContext(mt);if(typeof c=="object"&&c&&"digest"in c&&typeof c.digest=="string"){let p=rh(c.digest);if(p){let h=ua.get(c);if(h)throw h;let x=Kc(p.location,s),v=x.absoluteURL||x.to;if(Xc(p.location,v,Qc(d),"allow-explicit"),qf(v))throw new Error("Invalid redirect location");if(Gc&&!ua.get(c))if(x.isExternal||p.reloadDocument)window.location.href=v;else{const k=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(x.to,{replace:p.replace}));throw ua.set(c,k),k}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${v}`})}}return a}function ph({routeContext:a,match:c,children:s}){let d=y.useContext(qn);return d&&d.static&&d.staticContext&&(c.route.errorElement||c.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=c.route.id),y.createElement(Ft.Provider,{value:a},s)}function fh(a,c=[],s){let d=s==null?void 0:s.state;if(a==null){if(!d)return null;if(d.errors)a=d.matches;else if(c.length===0&&!d.initialized&&d.matches.length>0)a=d.matches;else return null}let p=a,h=d==null?void 0:d.errors;if(h!=null){let E=p.findIndex(R=>R.route.id&&(h==null?void 0:h[R.route.id])!==void 0);Me(E>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),p=p.slice(0,Math.min(p.length,E+1))}let x=!1,v=-1;if(s&&d){x=d.renderFallback;for(let E=0;E<p.length;E++){let R=p[E];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(v=E),R.route.id){let{loaderData:L,errors:V}=d,_=R.route.loader&&!L.hasOwnProperty(R.route.id)&&(!V||V[R.route.id]===void 0);if(R.route.lazy||_){s.isStatic&&(x=!0),v>=0?p=p.slice(0,v+1):p=[p[0]];break}}}}let k=s==null?void 0:s.onError,j=d&&k?(E,R)=>{var L,V;k(E,{location:d.location,params:((V=(L=d.matches)==null?void 0:L[0])==null?void 0:V.params)??{},pattern:Gf(d.matches),errorInfo:R})}:void 0;return p.reduceRight((E,R,L)=>{let V,_=!1,M=null,I=null;d&&(V=h&&R.route.id?h[R.route.id]:void 0,M=R.route.errorElement||ch,x&&(v<0&&L===0?(ld("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,I=null):v===L&&(_=!0,I=R.route.hydrateFallbackElement||null)));let P=c.concat(p.slice(0,L+1)),G=()=>{let X;return V?X=M:_?X=I:R.route.Component?X=y.createElement(R.route.Component,null):R.route.element?X=R.route.element:X=E,y.createElement(ph,{match:R,routeContext:{outlet:E,matches:P,isDataRoute:d!=null},children:X})};return d&&(R.route.ErrorBoundary||R.route.errorElement||L===0)?y.createElement(od,{location:d.location,revalidation:d.revalidation,component:M,error:V,children:G(),routeContext:{outlet:null,matches:P,isDataRoute:!0},onError:j}):G()},null)}function wa(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hh(a){let c=y.useContext(qn);return Me(c,wa(a)),c}function mh(a){let c=y.useContext(al);return Me(c,wa(a)),c}function gh(a){let c=y.useContext(Ft);return Me(c,wa(a)),c}function ka(a){let c=gh(a),s=c.matches[c.matches.length-1];return Me(s.route.id,`${a} can only be used on routes that contain a unique "id"`),s.route.id}function xh(){return ka("useRouteId")}function vh(){var d;let a=y.useContext(ya),c=mh("useRouteError"),s=ka("useRouteError");return a!==void 0?a:(d=c.errors)==null?void 0:d[s]}function yh(){let{router:a}=hh("useNavigate"),c=ka("useNavigate"),s=y.useRef(!1);return nd(()=>{s.current=!0}),y.useCallback(async(p,h={})=>{Ot(s.current,td),s.current&&(typeof p=="number"?await a.navigate(p):await a.navigate(p,{fromRouteId:c,...h}))},[a,c])}var Mc={};function ld(a,c,s){!c&&!Mc[a]&&(Mc[a]=!0,Ot(!1,s))}y.memo(wh);function wh({routes:a,manifest:c,future:s,state:d,isStatic:p,onError:h}){return rd(a,void 0,{manifest:c,state:d,isStatic:p,onError:h})}function bn(a){Me(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kh({basename:a="/",children:c=null,location:s,navigationType:d="POP",navigator:p,static:h=!1,useTransitions:x}){Me(!$r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=a.replace(/^\/*/,"/"),k=y.useMemo(()=>({basename:v,navigator:p,static:h,useTransitions:x,future:{}}),[v,p,h,x]);typeof s=="string"&&(s=Xn(s));let{pathname:j="/",search:E="",hash:R="",state:L=null,key:V="default",mask:_}=s,M=y.useMemo(()=>{let I=Ut(j,v);return I==null?null:{location:{pathname:I,search:E,hash:R,state:L,key:V,mask:_},navigationType:d}},[v,j,E,R,L,V,d,_]);return Ot(M!=null,`<Router basename="${v}"> is not able to match the URL "${j}${E}${R}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:y.createElement(mt.Provider,{value:k},y.createElement(Vr.Provider,{children:c,value:M}))}function bh({children:a,location:c}){return sh(ha(a),c)}function ha(a,c=[]){let s=[];return y.Children.forEach(a,(d,p)=>{if(!y.isValidElement(d))return;let h=[...c,p];if(d.type===y.Fragment){s.push.apply(s,ha(d.props.children,h));return}Me(d.type===bn,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Me(!d.props.index||!d.props.children,"An index route cannot have child routes.");let x={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(x.children=ha(d.props.children,h)),s.push(x)}),s}var nl="get",rl="application/x-www-form-urlencoded";function sl(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function Eh(a){return sl(a)&&a.tagName.toLowerCase()==="button"}function Nh(a){return sl(a)&&a.tagName.toLowerCase()==="form"}function Sh(a){return sl(a)&&a.tagName.toLowerCase()==="input"}function Rh(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function jh(a,c){return a.button===0&&(!c||c==="_self")&&!Rh(a)}var el=null;function Ch(){if(el===null)try{new FormData(document.createElement("form"),0),el=!1}catch{el=!0}return el}var Oh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ca(a){return a!=null&&!Oh.has(a)?(Ot(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rl}"`),null):a}function Th(a,c){let s,d,p,h,x;if(Nh(a)){let v=a.getAttribute("action");d=v?Ut(v,c):null,s=a.getAttribute("method")||nl,p=ca(a.getAttribute("enctype"))||rl,h=new FormData(a)}else if(Eh(a)||Sh(a)&&(a.type==="submit"||a.type==="image")){let v=a.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let k=a.getAttribute("formaction")||v.getAttribute("action");if(d=k?Ut(k,c):null,s=a.getAttribute("formmethod")||v.getAttribute("method")||nl,p=ca(a.getAttribute("formenctype"))||ca(v.getAttribute("enctype"))||rl,h=new FormData(v,a),!Ch()){let{name:j,type:E,value:R}=a;if(E==="image"){let L=j?`${j}.`:"";h.append(`${L}x`,"0"),h.append(`${L}y`,"0")}else j&&h.append(j,R)}}else{if(sl(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=nl,d=null,p=rl,x=a}return h&&p==="text/plain"&&(x=h,h=void 0),{action:d,method:s.toLowerCase(),encType:p,formData:h,body:x}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ba(a,c){if(a===!1||a===null||typeof a>"u")throw new Error(c)}function id(a,c,s,d){let p=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return s?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${d}`:p.pathname=`${p.pathname}.${d}`:p.pathname==="/"?p.pathname=`_root.${d}`:c&&Ut(p.pathname,c)==="/"?p.pathname=`${Qn(c)}/_root.${d}`:p.pathname=`${Qn(p.pathname)}.${d}`,p}async function Lh(a,c){if(a.id in c)return c[a.id];try{let s=await import(a.module);return c[a.id]=s,s}catch(s){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mh(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function zh(a,c,s){let d=await Promise.all(a.map(async p=>{let h=c.routes[p.route.id];if(h){let x=await Lh(h,s);return x.links?x.links():[]}return[]}));return _h(d.flat(1).filter(Mh).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function zc(a,c,s,d,p,h){let x=(k,j)=>s[j]?k.route.id!==s[j].route.id:!0,v=(k,j)=>{var E;return s[j].pathname!==k.pathname||((E=s[j].route.path)==null?void 0:E.endsWith("*"))&&s[j].params["*"]!==k.params["*"]};return h==="assets"?c.filter((k,j)=>x(k,j)||v(k,j)):h==="data"?c.filter((k,j)=>{var R;let E=d.routes[k.route.id];if(!E||!E.hasLoader)return!1;if(x(k,j)||v(k,j))return!0;if(k.route.shouldRevalidate){let L=k.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((R=s[0])==null?void 0:R.params)||{},nextUrl:new URL(a,window.origin),nextParams:k.params,defaultShouldRevalidate:!0});if(typeof L=="boolean")return L}return!0}):[]}function Ih(a,c,{includeHydrateFallback:s}={}){return Ph(a.map(d=>{let p=c.routes[d.route.id];if(!p)return[];let h=[p.module];return p.clientActionModule&&(h=h.concat(p.clientActionModule)),p.clientLoaderModule&&(h=h.concat(p.clientLoaderModule)),s&&p.hydrateFallbackModule&&(h=h.concat(p.hydrateFallbackModule)),p.imports&&(h=h.concat(p.imports)),h}).flat(1))}function Ph(a){return[...new Set(a)]}function Ah(a){let c={},s=Object.keys(a).sort();for(let d of s)c[d]=a[d];return c}function _h(a,c){let s=new Set;return new Set(c),a.reduce((d,p)=>{let h=JSON.stringify(Ah(p));return s.has(h)||(s.add(h),d.push({key:h,link:p})),d},[])}function Ea(){let a=y.useContext(qn);return ba(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Dh(){let a=y.useContext(al);return ba(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Na=y.createContext(void 0);Na.displayName="FrameworkContext";function ul(){let a=y.useContext(Na);return ba(a,"You must render this element inside a <HydratedRouter> element"),a}function Uh(a,c){let s=y.useContext(Na),[d,p]=y.useState(!1),[h,x]=y.useState(!1),{onFocus:v,onBlur:k,onMouseEnter:j,onMouseLeave:E,onTouchStart:R}=c,L=y.useRef(null);y.useEffect(()=>{if(a==="render"&&x(!0),a==="viewport"){let M=P=>{P.forEach(G=>{x(G.isIntersecting)})},I=new IntersectionObserver(M,{threshold:.5});return L.current&&I.observe(L.current),()=>{I.disconnect()}}},[a]),y.useEffect(()=>{if(d){let M=setTimeout(()=>{x(!0)},100);return()=>{clearTimeout(M)}}},[d]);let V=()=>{p(!0)},_=()=>{p(!1),x(!1)};return s?a!=="intent"?[h,L,{}]:[h,L,{onFocus:Ur(v,V),onBlur:Ur(k,_),onMouseEnter:Ur(j,V),onMouseLeave:Ur(E,_),onTouchStart:Ur(R,V)}]:[!1,L,{}]}function Ur(a,c){return s=>{a&&a(s),s.defaultPrevented||c(s)}}function Fh({page:a,...c}){let s=Zf(),{nonce:d}=ul(),{router:p}=Ea(),h=y.useMemo(()=>Fc(p.routes,a,p.basename),[p.routes,a,p.basename]);return h?(c.nonce==null&&d&&(c={...c,nonce:d}),s?y.createElement($h,{page:a,matches:h,...c}):y.createElement(Hh,{page:a,matches:h,...c})):null}function Vh(a){let{manifest:c,routeModules:s}=ul(),[d,p]=y.useState([]);return y.useEffect(()=>{let h=!1;return zh(a,c,s).then(x=>{h||p(x)}),()=>{h=!0}},[a,c,s]),d}function $h({page:a,matches:c,...s}){let d=Vt(),{future:p}=ul(),{basename:h}=Ea(),x=y.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let v=id(a,h,p.v8_trailingSlashAwareDataRequests,"rsc"),k=!1,j=[];for(let E of c)typeof E.route.shouldRevalidate=="function"?k=!0:j.push(E.route.id);return k&&j.length>0&&v.searchParams.set("_routes",j.join(",")),[v.pathname+v.search]},[h,p.v8_trailingSlashAwareDataRequests,a,d,c]);return y.createElement(y.Fragment,null,x.map(v=>y.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...s})))}function Hh({page:a,matches:c,...s}){let d=Vt(),{future:p,manifest:h,routeModules:x}=ul(),{basename:v}=Ea(),{loaderData:k,matches:j}=Dh(),E=y.useMemo(()=>zc(a,c,j,h,d,"data"),[a,c,j,h,d]),R=y.useMemo(()=>zc(a,c,j,h,d,"assets"),[a,c,j,h,d]),L=y.useMemo(()=>{if(a===d.pathname+d.search+d.hash)return[];let M=new Set,I=!1;if(c.forEach(G=>{var ne;let X=h.routes[G.route.id];!X||!X.hasLoader||(!E.some(le=>le.route.id===G.route.id)&&G.route.id in k&&((ne=x[G.route.id])!=null&&ne.shouldRevalidate)||X.hasClientLoader?I=!0:M.add(G.route.id))}),M.size===0)return[];let P=id(a,v,p.v8_trailingSlashAwareDataRequests,"data");return I&&M.size>0&&P.searchParams.set("_routes",c.filter(G=>M.has(G.route.id)).map(G=>G.route.id).join(",")),[P.pathname+P.search]},[v,p.v8_trailingSlashAwareDataRequests,k,d,h,E,c,a,x]),V=y.useMemo(()=>Ih(R,h),[R,h]),_=Vh(R);return y.createElement(y.Fragment,null,L.map(M=>y.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...s})),V.map(M=>y.createElement("link",{key:M,rel:"modulepreload",href:M,...s})),_.map(({key:M,link:I})=>y.createElement("link",{key:M,nonce:s.nonce,...I,crossOrigin:I.crossOrigin??s.crossOrigin})))}function Wh(...a){return c=>{a.forEach(s=>{typeof s=="function"?s(c):s!=null&&(s.current=c)})}}var Bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Bh&&(window.__reactRouterVersion="7.18.3")}catch{}function Yh({basename:a,children:c,useTransitions:s,window:d}){let p=y.useRef();p.current==null&&(p.current=Ef({window:d,v5Compat:!0}));let h=p.current,[x,v]=y.useState({action:h.action,location:h.location}),k=y.useCallback(j=>{s===!1?v(j):y.startTransition(()=>v(j))},[s]);return y.useLayoutEffect(()=>h.listen(k),[h,k]),y.createElement(kh,{basename:a,children:c,location:x.location,navigationType:x.action,navigator:h,useTransitions:s})}var ad=y.forwardRef(function({onClick:c,discover:s="render",prefetch:d="none",relative:p,reloadDocument:h,replace:x,mask:v,state:k,target:j,to:E,preventScrollReset:R,viewTransition:L,defaultShouldRevalidate:V,..._},M){let{basename:I,navigator:P,useTransitions:G}=y.useContext(mt),X=typeof E=="string"&&xa.test(E),ne=Kc(E,I);E=ne.to;let le=lh(E,{relative:p}),se=Vt(),xe=null;if(v){let te=va(v,[],se.mask?se.mask.pathname:"/",!0);I!=="/"&&(te.pathname=te.pathname==="/"?I:Et([I,te.pathname])),xe=P.createHref(te)}let[$,U,ae]=Uh(d,_),Ie=Qh(E,{replace:x,mask:v,state:k,target:j,preventScrollReset:R,relative:p,viewTransition:L,defaultShouldRevalidate:V,useTransitions:G});function Se(te){c&&c(te),te.defaultPrevented||Ie(te)}let Re=!(ne.isExternal||h),ee=y.createElement("a",{..._,...ae,href:(Re?xe:void 0)||ne.absoluteURL||le,onClick:Re?Se:c,ref:Wh(M,U),target:j,"data-discover":!X&&s==="render"?"true":void 0});return $&&!X?y.createElement(y.Fragment,null,ee,y.createElement(Fh,{page:le})):ee});ad.displayName="Link";var ma=y.forwardRef(function({"aria-current":c="page",caseSensitive:s=!1,className:d="",end:p=!1,style:h,to:x,viewTransition:v,children:k,...j},E){let R=Hr(x,{relative:j.relative}),L=Vt(),V=y.useContext(al),{navigator:_,basename:M}=y.useContext(mt),I=V!=null&&em(R)&&v===!0,P=_.encodeLocation?_.encodeLocation(R).pathname:R.pathname,G=L.pathname,X=V&&V.navigation&&V.navigation.location?V.navigation.location.pathname:null;s||(G=G.toLowerCase(),X=X?X.toLowerCase():null,P=P.toLowerCase()),X&&M&&(X=Ut(X,M)||X);const ne=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let le=G===P||!p&&G.startsWith(P)&&G.charAt(ne)==="/",se=X!=null&&(X===P||!p&&X.startsWith(P)&&X.charAt(P.length)==="/"),xe={isActive:le,isPending:se,isTransitioning:I},$=le?c:void 0,U;typeof d=="function"?U=d(xe):U=[d,le?"active":null,se?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let ae=typeof h=="function"?h(xe):h;return y.createElement(ad,{...j,"aria-current":$,className:U,ref:E,style:ae,to:x,viewTransition:v},typeof k=="function"?k(xe):k)});ma.displayName="NavLink";var Gh=y.forwardRef(({discover:a="render",fetcherKey:c,navigate:s,reloadDocument:d,replace:p,state:h,method:x=nl,action:v,onSubmit:k,relative:j,preventScrollReset:E,viewTransition:R,defaultShouldRevalidate:L,...V},_)=>{let{useTransitions:M}=y.useContext(mt),I=Zh(),P=Jh(v,{relative:j}),G=x.toLowerCase()==="get"?"get":"post",X=typeof v=="string"&&xa.test(v),ne=le=>{if(k&&k(le),le.defaultPrevented)return;le.preventDefault();let se=le.nativeEvent.submitter,xe=(se==null?void 0:se.getAttribute("formmethod"))||x,$=()=>I(se||le.currentTarget,{fetcherKey:c,method:xe,navigate:s,replace:p,state:h,relative:j,preventScrollReset:E,viewTransition:R,defaultShouldRevalidate:L});M&&s!==!1?y.startTransition(()=>$()):$()};return y.createElement("form",{ref:_,method:G,action:P,onSubmit:d?k:ne,...V,"data-discover":!X&&a==="render"?"true":void 0})});Gh.displayName="Form";function Kh(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sd(a){let c=y.useContext(qn);return Me(c,Kh(a)),c}function Qh(a,{target:c,replace:s,mask:d,state:p,preventScrollReset:h,relative:x,viewTransition:v,defaultShouldRevalidate:k,useTransitions:j}={}){let E=ih(),R=Vt(),L=Hr(a,{relative:x});return y.useCallback(V=>{if(jh(V,c)){V.preventDefault();let _=s!==void 0?s:Kn(R)===Kn(L),M=()=>E(a,{replace:_,mask:d,state:p,preventScrollReset:h,relative:x,viewTransition:v,defaultShouldRevalidate:k});j?y.startTransition(()=>M()):M()}},[R,E,L,s,d,p,c,a,h,x,v,k,j])}var Xh=0,qh=()=>`__${String(++Xh)}__`;function Zh(){let{router:a}=sd("useSubmit"),{basename:c}=y.useContext(mt),s=xh(),d=a.fetch,p=a.navigate;return y.useCallback(async(h,x={})=>{let{action:v,method:k,encType:j,formData:E,body:R}=Th(h,c);if(x.navigate===!1){let L=x.fetcherKey||qh();await d(L,s,x.action||v,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:E,body:R,formMethod:x.method||k,formEncType:x.encType||j,flushSync:x.flushSync})}else await p(x.action||v,{defaultShouldRevalidate:x.defaultShouldRevalidate,preventScrollReset:x.preventScrollReset,formData:E,body:R,formMethod:x.method||k,formEncType:x.encType||j,replace:x.replace,state:x.state,fromRouteId:s,flushSync:x.flushSync,viewTransition:x.viewTransition})},[d,p,c,s])}function Jh(a,{relative:c}={}){let{basename:s}=y.useContext(mt),d=y.useContext(Ft);Me(d,"useFormAction must be used inside a RouteContext");let[p]=d.matches.slice(-1),h={...Hr(a||".",{relative:c})},x=Vt();if(a==null){h.search=x.search;let v=new URLSearchParams(h.search),k=v.getAll("index");if(k.some(E=>E==="")){v.delete("index"),k.filter(R=>R).forEach(R=>v.append("index",R));let E=v.toString();h.search=E?`?${E}`:""}}return(!a||a===".")&&p.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(h.pathname=h.pathname==="/"?s:Et([s,h.pathname])),Kn(h)}function em(a,{relative:c}={}){let s=y.useContext(Jc);Me(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=sd("useViewTransitionState"),p=Hr(a,{relative:c});if(!s.isTransitioning)return!1;let h=Ut(s.currentLocation.pathname,d)||s.currentLocation.pathname,x=Ut(s.nextLocation.pathname,d)||s.nextLocation.pathname;return ll(p.pathname,x)!=null||ll(p.pathname,h)!=null}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ud=(...a)=>a.filter((c,s,d)=>!!c&&c.trim()!==""&&d.indexOf(c)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=y.forwardRef(({color:a="currentColor",size:c=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:x,...v},k)=>y.createElement("svg",{ref:k,...nm,width:c,height:c,stroke:a,strokeWidth:d?Number(s)*24/Number(c):s,className:ud("lucide",p),...v},[...x.map(([j,E])=>y.createElement(j,E)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=(a,c)=>{const s=y.forwardRef(({className:d,...p},h)=>y.createElement(rm,{ref:h,iconNode:c,className:ud(`lucide-${tm(a)}`,d),...p}));return s.displayName=`${a}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=de("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=de("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=de("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=de("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=de("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=de("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=de("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=de("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=de("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=de("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=de("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=de("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=de("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=de("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=de("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=de("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=de("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=de("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=de("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=de("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=de("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=de("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=de("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=de("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=de("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=de("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=de("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=de("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=de("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=de("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=de("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=de("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=de("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),Em=[{to:"/",label:"HOME",icon:sm},{to:"/mine-map",label:"MINE MAP",icon:pm},{to:"/rover-control",label:"ROVER CONTROL",icon:am},{to:"/communication",label:"COMMUNICATION",icon:Fr},{to:"/live-view",label:"LIVE VIEW",icon:wm},{to:"/network",label:"NETWORK",icon:dd}],Nm=[{id:"hazards",title:"DETECT HAZARDS",description:"Monitor underground gases and environmental conditions to identify dangerous situations.",icon:il},{id:"survivors",title:"LOCATE SURVIVORS",description:"Identify and display possible survivor locations to support rescue operations.",icon:hd},{id:"routes",title:"PLAN SAFE ROUTES",description:"Use underground condition data to identify safer paths for rover and rescue movement.",icon:pd},{id:"rescue",title:"SUPPORT RESCUE",description:"Provide live underground information, rover status and communication support to rescue teams.",icon:um}];function Sm(){const[a,c]=y.useState(!1);return i.jsxs("div",{className:"app",children:[i.jsxs("header",{className:"topbar",children:[i.jsxs(ma,{to:"/",className:"brand",children:[i.jsx("div",{className:"brand-symbol",children:"M"}),i.jsxs("div",{children:[i.jsxs("div",{className:"brand-name",children:["MINE",i.jsx("span",{children:"NOVA"})]}),i.jsx("div",{className:"brand-subtitle",children:"AI MINE RESCUE ROVER"})]})]}),i.jsx("nav",{className:"main-nav",children:Em.map(({to:s,label:d,icon:p})=>i.jsxs(ma,{to:s,className:({isActive:h})=>`nav-item ${h?"active":""}`,children:[i.jsx(p,{size:16}),i.jsx("span",{children:d})]},s))}),i.jsxs("div",{className:"system-area",children:[i.jsxs("div",{className:"system-status",children:[i.jsx("span",{className:"status-dot"}),i.jsxs("div",{children:[i.jsx("strong",{children:"SYSTEM ONLINE"}),i.jsx("small",{children:"ROVER-01 • LIVE SIMULATION"})]})]}),i.jsxs("button",{className:"emergency-button",onClick:()=>c(!0),children:[i.jsx(Ac,{size:17}),"EMERGENCY STOP"]})]})]}),a&&i.jsx("div",{className:"modal-backdrop",children:i.jsxs("div",{className:"modal emergency-modal",children:[i.jsx("button",{className:"modal-close",onClick:()=>c(!1),children:i.jsx(Sa,{size:20})}),i.jsx(Ac,{size:44}),i.jsx("span",{className:"eyebrow",children:"CRITICAL COMMAND"}),i.jsx("h2",{children:"EMERGENCY STOP"}),i.jsx("p",{children:"Stop ROVER-01 immediately?"}),i.jsxs("div",{style:{display:"flex",gap:10,marginTop:20},children:[i.jsx("button",{className:"confirm-stop",onClick:()=>c(!1),children:"CONFIRM STOP"}),i.jsx("button",{className:"secondary-action",onClick:()=>c(!1),children:"CANCEL"})]})]})}),i.jsx("main",{children:i.jsxs(bh,{children:[i.jsx(bn,{path:"/",element:i.jsx(Rm,{})}),i.jsx(bn,{path:"/mine-map",element:i.jsx(Cm,{})}),i.jsx(bn,{path:"/rover-control",element:i.jsx(Om,{})}),i.jsx(bn,{path:"/communication",element:i.jsx(Tm,{})}),i.jsx(bn,{path:"/live-view",element:i.jsx(Lm,{})}),i.jsx(bn,{path:"/network",element:i.jsx(Mm,{})})]})})]})}function Rm(){const[a,c]=y.useState(null);return i.jsxs("div",{className:"home-page",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("section",{className:"hero",children:[i.jsx("div",{className:"hero-overlay"}),i.jsxs("div",{className:"hero-content",children:[i.jsxs("div",{className:"hero-label",children:[i.jsx(mm,{size:15}),"AUTONOMOUS RESCUE TECHNOLOGY"]}),i.jsxs("h1",{children:["SAFER MINES.",i.jsx("br",{}),i.jsx("span",{children:"BRIGHTER TOMORROWS."})]}),i.jsx("p",{children:"MineNova is an AI-powered underground mine rescue rover designed to explore hazardous zones, detect dangers, locate survivors and support rescue teams."}),i.jsxs("div",{className:"hero-stats",children:[i.jsxs("div",{children:[i.jsx("strong",{children:"AI"}),i.jsx("span",{children:"HAZARD ANALYSIS"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"24/7"}),i.jsx("span",{children:"MONITORING"})]}),i.jsxs("div",{children:[i.jsx("strong",{children:"REAL-TIME"}),i.jsx("span",{children:"RESCUE SUPPORT"})]})]})]}),i.jsx("div",{className:"features-section",children:i.jsx("div",{className:"feature-grid",children:Nm.map(s=>{const d=s.icon;return i.jsxs("button",{className:"feature-card",onClick:()=>c(s),children:[i.jsx("div",{className:"feature-icon",children:i.jsx(d,{size:23})}),i.jsxs("div",{className:"feature-text",children:[i.jsx("h3",{children:s.title}),i.jsx("p",{children:s.description})]}),i.jsx(om,{className:"feature-arrow",size:19})]},s.id)})})}),a&&i.jsx(jm,{feature:a,onClose:()=>c(null)})]})]})}function jm({feature:a,onClose:c}){const s=a.icon,d={hazards:["Sensors continuously scan the underground atmosphere.","AI checks readings against dangerous-condition patterns.","Risky zones are detected before rescue teams enter.","Hazard locations are highlighted on the mine map."],survivors:["Camera and onboard sensing search for human presence.","AI analyses movement, heat and visual clues.","Possible survivor locations are marked on the map.","Rescue teams receive the location for faster response."],routes:["The rover evaluates tunnels and known hazard zones.","Blocked or dangerous sections are avoided.","A safer route is calculated from available paths.","The route can guide the rover and rescue team."],rescue:["Live rover information is shared with the rescue team.","Mine conditions help teams understand the danger ahead.","Map markers show hazards, survivors and rover position.","The system supports faster and safer rescue decisions."]}[a.id];return i.jsx("div",{className:"modal-backdrop",children:i.jsxs("div",{className:"modal feature-modal",children:[i.jsx("button",{className:"modal-close",onClick:c,children:i.jsx(Sa,{size:20})}),i.jsx("div",{className:"feature-icon large",children:i.jsx(s,{size:30})}),i.jsx("span",{className:"eyebrow",children:"MINENOVA SYSTEM"}),i.jsx("h2",{children:a.title}),i.jsx("p",{children:a.description}),i.jsx("div",{className:"how-grid",children:d.map((p,h)=>i.jsxs("div",{className:"how-card",children:[i.jsxs("span",{children:["0",h+1]}),i.jsx("p",{children:p})]},p))})]})})}function Cm(){const[a,c]=y.useState(null),[s,d]=y.useState(0);y.useEffect(()=>{const v=setInterval(()=>{d(k=>(k+1)%8)},1400);return()=>clearInterval(v)},[]);const h=[{left:30.5,top:18.5},{left:34.5,top:21},{left:39,top:22.5},{left:43.5,top:20.5},{left:48,top:17.8},{left:51.5,top:18.8},{left:47,top:21.8},{left:40.5,top:23}][s],x=[{id:"hazard",type:"HAZARD",title:"TOXIC GAS ZONE",shortTitle:"DANGER",text:"AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed.",detail:"Gas risk: HIGH • Danger level: 78%",left:75,top:31.5,className:"hazard-marker",icon:i.jsx(ol,{size:18})},{id:"survivor",type:"SURVIVOR",title:"SURVIVOR LOCATION",shortTitle:"SURVIVOR",text:"Possible survivor presence detected at this point. Rescue teams can use this location as the current search target.",detail:"1 person detected • Search confidence: 78%",left:57,top:46,className:"survivor-marker",icon:i.jsx(hd,{size:18})},{id:"network",type:"NETWORK",title:"RELAY NODE 03",shortTitle:"NETWORK",text:"This relay node maintains the communication link between the rover and the surface gateway.",detail:"Signal: Strong • Link quality: 92%",left:82,top:29,className:"network-marker",icon:i.jsx(fd,{size:18})},{id:"water",type:"ENVIRONMENT",title:"WATER ZONE",shortTitle:"WATER",text:"Water accumulation has been detected in the lower tunnel area. The rover is monitoring this zone for changes.",detail:"Water level: Moderate",left:30,top:63,className:"water-marker",icon:i.jsx(il,{size:18})}];return i.jsxs("section",{className:"mine-map-page",children:[i.jsx("style",{children:`
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
            url(/minenova/mine-map.png);
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
      `}),i.jsx("div",{className:"mine-map-bg"}),i.jsx("div",{className:"mine-map-vignette"}),i.jsxs("div",{className:"map-title",children:[i.jsx("span",{className:"eyebrow",children:"LIVE UNDERGROUND OPERATIONS"}),i.jsx("h1",{children:"MINE MAP"}),i.jsx("p",{children:"ROVER POSITION • HAZARDS • SURVIVOR LOCATIONS • NETWORK"})]}),x.map(v=>i.jsxs("div",{className:`map-marker-wrap ${v.className}`,style:{left:`${v.left}%`,top:`${v.top}%`},children:[i.jsx("button",{className:"map-marker-button",title:v.title,onClick:()=>c(v),children:v.icon}),i.jsxs("div",{className:"marker-label",children:[i.jsx("strong",{children:v.shortTitle}),i.jsx("span",{children:v.detail})]})]},v.id)),i.jsxs("div",{className:"rover-sim",style:{left:`${h.left}%`,top:`${h.top}%`},children:[i.jsx("div",{className:"rover-beam"}),i.jsx("button",{className:"rover-button",title:"Open ROVER-01 information",onClick:()=>c({type:"ROVER",title:"ROVER-01",shortTitle:"ROVER",detail:"AUTONOMOUS • MOVING",text:"ROVER-01 is moving along the mapped tunnel route and continuously updating its position for the rescue team."}),children:i.jsx(cd,{size:22})}),i.jsx("div",{className:"rover-name",children:"ROVER-01"})]}),i.jsxs("div",{className:"map-info-card",children:[a&&i.jsx("button",{className:"selected-close",onClick:()=>c(null),children:i.jsx(Sa,{size:14})}),a?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"info-type",children:a.type}),i.jsx("h3",{children:a.title}),i.jsx("p",{children:a.text}),i.jsx("div",{className:"info-detail",children:a.detail})]}):i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"info-type",children:"HAZARD ALERT"}),i.jsx("h3",{children:"TOXIC GAS ZONE"}),i.jsx("p",{children:"AI has detected a potentially dangerous gas condition in this tunnel section. Rescue teams should avoid direct entry until the area is assessed."}),i.jsx("div",{className:"info-detail",children:"DANGER LEVEL: HIGH • RISK: 78%"})]})]}),i.jsxs("div",{className:"map-legend",children:[i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot rover"}),"ROVER"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot hazard"}),"HAZARD"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot survivor"}),"SURVIVOR"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot network"}),"NETWORK"]}),i.jsxs("div",{className:"legend-item",children:[i.jsx("span",{className:"legend-dot water"}),"WATER"]})]})]})}function Om(){const[a,c]=y.useState(86.4),[s,d]=y.useState(32.4),[p,h]=y.useState(41.8),[x,v]=y.useState(0),[k,j]=y.useState(18),[E,R]=y.useState(!1),[L,V]=y.useState("MANUAL"),[_,M]=y.useState("STOPPED"),[I,P]=y.useState("NORMAL"),[G,X]=y.useState("UNDERGROUND SURVEY"),[ne,le]=y.useState({co:23.4,methane:.42,h2s:2.1,oxygen:20.6,humidity:67.8,pressure:100.8,network:92}),[se,xe]=y.useState(["System ready • MNR-01 online"]),$=(ee=I)=>ee==="SLOW"?.35:ee==="FAST"?1.2:.75;y.useEffect(()=>{const ee=setInterval(()=>{j(te=>te+1),c(te=>Math.max(0,+(te-(_==="STOPPED"?.0015:E?.01:.007)).toFixed(2))),d(te=>+Math.max(27,Math.min(39,te+(Math.random()-.5)*.16)).toFixed(1)),le(te=>({co:+Math.max(15,Math.min(35,te.co+(Math.random()-.5)*.18)).toFixed(1),methane:+Math.max(.18,Math.min(.85,te.methane+(Math.random()-.5)*.012)).toFixed(2),h2s:+Math.max(.8,Math.min(4.8,te.h2s+(Math.random()-.5)*.08)).toFixed(1),oxygen:+Math.max(19.7,Math.min(21,te.oxygen+(Math.random()-.5)*.015)).toFixed(1),humidity:+Math.max(60,Math.min(76,te.humidity+(Math.random()-.5)*.22)).toFixed(1),pressure:+Math.max(99.2,Math.min(102.2,te.pressure+(Math.random()-.5)*.05)).toFixed(1),network:Math.round(Math.max(84,Math.min(99,te.network+(Math.random()-.5)*2.4)))})),_==="FORWARD"?h(te=>+Math.min(250,te+.025).toFixed(1)):_==="REVERSE"&&h(te=>+Math.max(0,te-.02).toFixed(1))},1e3);return()=>clearInterval(ee)},[_,E]);const U=ee=>{xe(te=>[`${ee} • ${new Date().toLocaleTimeString()}`,...te].slice(0,5))},ae=ee=>{M(ee),v(ee==="STOPPED"?0:ee==="TURN LEFT"||ee==="TURN RIGHT"?.22:$()),U(`${ee} command`)},Ie=ee=>{P(ee),(_==="FORWARD"||_==="REVERSE")&&v($(ee)),U(`SPEED ${ee}`)},Se=()=>{const ee=Math.floor(k/3600),te=Math.floor(k%3600/60),Pe=k%60;return`${String(ee).padStart(2,"0")}:${String(te).padStart(2,"0")}:${String(Pe).padStart(2,"0")}`},Re=[["CARBON MONOXIDE",ne.co.toFixed(1),"ppm"],["METHANE",ne.methane.toFixed(2),"%LEL"],["HYDROGEN SULFIDE",ne.h2s.toFixed(1),"ppm"],["OXYGEN",ne.oxygen.toFixed(1),"%"],["TEMPERATURE",s.toFixed(1),"°C"],["HUMIDITY",ne.humidity.toFixed(1),"%"],["PRESSURE",ne.pressure.toFixed(1),"kPa"],["NETWORK",ne.network,"%"]];return i.jsxs("section",{className:"rover-control-page",children:[i.jsx("style",{children:`
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
          width:125%;height:125%;object-fit:cover;object-position:center;
          transform:scale(1.14);filter:drop-shadow(0 18px 17px rgba(0,0,0,.70));
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
      `}),i.jsxs("div",{className:"rc-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"rc-kicker",children:"MINENOVA • AUTONOMOUS RESCUE TECHNOLOGY"}),i.jsx("h1",{children:"ROVER CONTROL"}),i.jsx("p",{children:"REMOTE OPERATION • TELEMETRY • ENVIRONMENT MONITORING"})]}),i.jsxs("div",{className:"rc-mode",children:[i.jsx("button",{className:L==="MANUAL"?"active":"",onClick:()=>{V("MANUAL"),U("MANUAL MODE")},children:"MANUAL"}),i.jsx("button",{className:L==="AUTONOMOUS"?"active":"",onClick:()=>{V("AUTONOMOUS"),U("AUTONOMOUS MODE")},children:"AUTONOMOUS"})]})]}),i.jsxs("div",{className:"rc-grid",children:[i.jsxs("div",{className:"rc-column",children:[i.jsxs("div",{className:"rc-card rc-status",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"ROVER STATUS"}),i.jsx("small",{children:"LIVE TELEMETRY"})]}),i.jsx("div",{className:`rc-rover-visual ${E?"light-on":""}`,children:i.jsx("img",{src:"/minenova/RoverC.png",alt:"MNR-01 Rover"})}),i.jsxs("div",{className:"rc-identity",children:[i.jsxs("div",{className:"rc-id",children:[i.jsx("strong",{children:"MNR-01"}),i.jsx("small",{children:"AI MINE RESCUE ROVER"})]}),i.jsxs("div",{className:"rc-online",children:[i.jsx("i",{className:"rc-dot"})," ONLINE"]})]}),i.jsxs("div",{className:"rc-battery",children:[i.jsxs("div",{className:"rc-battery-row",children:[i.jsx("span",{children:"BATTERY LEVEL"}),i.jsxs("strong",{children:[a.toFixed(1),"%"]})]}),i.jsx("div",{className:"rc-bar",children:i.jsx("i",{style:{width:`${a}%`}})})]}),i.jsxs("div",{className:"rc-metrics",children:[i.jsxs("div",{className:"rc-metric",children:[i.jsx("span",{children:"TEMPERATURE"}),i.jsxs("strong",{children:[s.toFixed(1),"°C"]})]}),i.jsxs("div",{className:"rc-metric",children:[i.jsx("span",{children:"DEPTH"}),i.jsxs("strong",{children:[p.toFixed(1)," m"]})]}),i.jsxs("div",{className:"rc-metric",children:[i.jsx("span",{children:"SPEED"}),i.jsxs("strong",{children:[x.toFixed(2)," m/s"]})]}),i.jsxs("div",{className:"rc-metric",children:[i.jsx("span",{children:"UPTIME"}),i.jsx("strong",{children:Se()})]})]})]}),i.jsxs("div",{className:"rc-card",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"MISSION INFO"}),i.jsx("small",{children:"ACTIVE"})]}),i.jsxs("div",{className:"rc-info-grid",children:[i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"CURRENT MISSION"}),i.jsx("strong",{children:G})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"MODE"}),i.jsx("strong",{children:L})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"DIRECTION"}),i.jsx("strong",{children:_})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"CONNECTION"}),i.jsx("strong",{style:{color:"#65d7a7"},children:"ONLINE"})]})]})]})]}),i.jsxs("div",{className:"rc-column",children:[i.jsxs("div",{className:"rc-card rc-manual",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"MANUAL NAVIGATION"}),i.jsx("small",{children:L==="MANUAL"?"CONTROL ENABLED":"AUTO ACTIVE"})]}),i.jsxs("div",{className:"rc-control-area",children:[i.jsxs("div",{className:"rc-direction",children:["CURRENT: ",_," • ",x.toFixed(2)," m/s"]}),i.jsxs("div",{className:"rc-pad",children:[i.jsx("button",{className:"empty","aria-hidden":"true"}),i.jsx("button",{className:_==="FORWARD"?"active-control":"",onClick:()=>ae("FORWARD"),children:"▲"}),i.jsx("button",{className:"empty","aria-hidden":"true"}),i.jsx("button",{className:_==="TURN LEFT"?"active-control":"",onClick:()=>ae("TURN LEFT"),children:"◀"}),i.jsx("button",{className:"stop",onClick:()=>ae("STOPPED"),children:"STOP"}),i.jsx("button",{className:_==="TURN RIGHT"?"active-control":"",onClick:()=>ae("TURN RIGHT"),children:"▶"}),i.jsx("button",{className:"empty","aria-hidden":"true"}),i.jsx("button",{className:_==="REVERSE"?"active-control":"",onClick:()=>ae("REVERSE"),children:"▼"}),i.jsx("button",{className:"empty","aria-hidden":"true"})]}),i.jsxs("div",{className:"rc-speed",children:[i.jsxs("div",{className:"rc-speed-head",children:[i.jsx("span",{children:"SPEED CONTROL"}),i.jsxs("strong",{children:[x.toFixed(2)," m/s"]})]}),i.jsx("div",{className:"rc-speed-options",children:["SLOW","NORMAL","FAST"].map(ee=>i.jsx("button",{className:I===ee?"active":"",onClick:()=>Ie(ee),children:ee},ee))})]})]})]}),i.jsxs("div",{className:"rc-card",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"QUICK ACTIONS"}),i.jsx("small",{children:"ROVER SYSTEM"})]}),i.jsxs("div",{className:"rc-actions",children:[i.jsxs("button",{className:`rc-action ${E?"active":""}`,onClick:()=>{const ee=!E;R(ee),U(`CAMERA LIGHT ${ee?"ON":"OFF"}`)},children:["CAMERA LIGHT: ",E?"ON":"OFF"]}),i.jsx("button",{className:"rc-action",onClick:()=>{X("RETURN TO BASE"),V("AUTONOMOUS"),ae("REVERSE"),U("RETURN TO BASE")},children:"RETURN TO BASE"}),i.jsx("button",{className:"rc-action",onClick:()=>{X("RESCUE SUPPORT"),V("AUTONOMOUS"),ae("FORWARD"),U("RESCUE MISSION")},children:"RESCUE MISSION"}),i.jsx("button",{className:"rc-action",onClick:()=>{X("UNDERGROUND SURVEY"),V("MANUAL"),ae("STOPPED"),U("SYSTEM READY")},children:"RESET / READY"})]})]}),i.jsxs("div",{className:"rc-card rc-log",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"SYSTEM LOG"}),i.jsx("small",{children:"RECENT EVENTS"})]}),i.jsx("div",{className:"rc-log-list",children:se.map((ee,te)=>i.jsxs("div",{className:"rc-log-line",children:[i.jsx("b",{children:"●"}),i.jsx("span",{children:ee})]},`${ee}-${te}`))})]})]}),i.jsxs("div",{className:"rc-column",children:[i.jsxs("div",{className:"rc-card rc-env",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"ENVIRONMENT MONITORING"}),i.jsx("small",{children:"LIVE SIMULATION"})]}),i.jsx("div",{className:"rc-env-grid",children:Re.map(([ee,te,Pe])=>i.jsxs("div",{className:"rc-env-item",children:[i.jsx("span",{children:ee}),i.jsxs("strong",{children:[te," ",i.jsx("em",{children:Pe})]})]},ee))})]}),i.jsxs("div",{className:"rc-card",children:[i.jsxs("div",{className:"rc-card-title",children:[i.jsx("span",{children:"OPERATION STATUS"}),i.jsx("small",{children:"CONTROL LINK"})]}),i.jsxs("div",{className:"rc-info-grid",children:[i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"CONTROL LINK"}),i.jsx("strong",{style:{color:"#65d7a7"},children:"STABLE"})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"SENSOR LINK"}),i.jsx("strong",{style:{color:"#65d7a7"},children:"ACTIVE"})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"CAMERA LIGHT"}),i.jsx("strong",{style:{color:E?"#ffd08a":"#9aa5aa"},children:E?"ON":"OFF"})]}),i.jsxs("div",{className:"rc-info-box",children:[i.jsx("span",{children:"SAFETY"}),i.jsx("strong",{style:{color:"#65d7a7"},children:"NORMAL"})]})]})]})]})]}),i.jsxs("div",{className:"rc-footer",children:[i.jsx("span",{children:"LIVE SIMULATION • TELEMETRY UPDATING"}),i.jsx("span",{children:"MNR-01 • MINENOVA"})]})]})}function Tm(){const[a,c]=y.useState([{id:1,from:"rover",type:"voice",text:"Communication link established. I am ready.",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]),[s,d]=y.useState(""),[p,h]=y.useState(!1),[x,v]=y.useState(!1),[k,j]=y.useState(.8),[E,R]=y.useState(!1),[L,V]=y.useState(68),[_,M]=y.useState("READY"),[I,P]=y.useState("Tap the microphone and speak to Rover."),G=($,U,ae)=>{c(Ie=>[...Ie,{id:Date.now()+Math.random(),from:$,type:U,text:ae,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}].slice(-30))},X=$=>{if(E||!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const U=new SpeechSynthesisUtterance($);U.rate=.92,U.pitch=.82,U.volume=k,U.onstart=()=>v(!0),U.onend=()=>v(!1),U.onerror=()=>v(!1),window.speechSynthesis.speak(U)},ne=$=>{const U=$.toLowerCase();return U.includes("battery")?"Battery status is stable. I am continuing the current mission.":U.includes("temperature")||U.includes("hot")?"Temperature is within the current operating range.":U.includes("gas")||U.includes("air")?"Atmosphere readings are being monitored continuously. No new critical change detected.":U.includes("stop")?"Stop command acknowledged. Rover is holding position.":U.includes("return")||U.includes("base")?"Return to base command received. Preparing the route.":U.includes("photo")||U.includes("image")||U.includes("camera")?"Camera request received. I am checking the area ahead.":"Message received. I understand and will report the latest underground status."},le=($=s)=>{const U=$.trim();U&&(G("you","text",U),d(""),P(`You: ${U}`),M("SENDING"),window.setTimeout(()=>{const ae=ne(U);G("rover","voice",ae),P(`Rover: ${ae}`),M("ROVER REPLY"),X(ae)},650))},se=()=>{const $=window.SpeechRecognition||window.webkitSpeechRecognition;if(!$){M("MIC NOT SUPPORTED"),P("Voice recognition is not supported in this browser. Use Chrome or Edge.");return}if(p)return;const U=new $;U.lang="en-IN",U.interimResults=!0,U.continuous=!1,U.onstart=()=>{h(!0),M("LISTENING"),P("Listening… speak to Rover.")},U.onresult=ae=>{const Ie=ae.results[ae.results.length-1],Se=Ie[0].transcript.trim();Se&&(P(`You: ${Se}`),V(72+Math.round(Math.random()*22)),Ie.isFinal&&(G("you","voice",Se),M("ROVER REPLY"),window.setTimeout(()=>{const Re=ne(Se);G("rover","voice",Re),P(`Rover: ${Re}`),X(Re)},500)))},U.onerror=()=>{h(!1),M("READY"),P("Microphone input stopped. Tap the microphone to try again.")},U.onend=()=>{h(!1),M(ae=>ae==="LISTENING"?"READY":ae)},U.start()},xe=()=>{var $;($=window.speechSynthesis)==null||$.cancel(),v(!1),c([]),P("Communication log cleared."),M("READY")};return y.useEffect(()=>{const $=window.setInterval(()=>{const U=["Rover status update: underground link is stable.","I am monitoring the tunnel conditions ahead.","No new survivor signal detected in the current section.","Network relay is stable. Communication remains active."],ae=U[Math.floor(Math.random()*U.length)];G("rover","voice",ae),P(`Rover: ${ae}`),M("INCOMING MESSAGE")},22e3);return()=>{var U;window.clearInterval($),(U=window.speechSynthesis)==null||U.cancel()}},[E,k]),i.jsxs("section",{className:"communication-page",children:[i.jsx("style",{children:`
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
`}),i.jsxs("div",{className:"cm-head",children:[i.jsxs("div",{children:[i.jsx("div",{className:"cm-kicker",children:"MINENOVA • TWO-WAY ROVER COMMUNICATION"}),i.jsx("h1",{children:"COMMUNICATION"}),i.jsx("p",{children:"TALK • TYPE • LISTEN • SEND • RECEIVE"})]}),i.jsxs("div",{className:"cm-live",children:[i.jsx("i",{})," COMMUNICATION LINK ACTIVE"]})]}),i.jsxs("div",{className:"cm-layout",children:[i.jsxs("div",{className:"cm-main",children:[i.jsxs("div",{className:"cm-card",children:[i.jsxs("div",{className:"cm-title",children:[i.jsxs("div",{className:"cm-title-left",children:[i.jsx(Fr,{size:15}),i.jsx("span",{children:"VOICE COMMUNICATION"})]}),i.jsx("small",{children:_})]}),i.jsxs("div",{className:"cm-voice-body",children:[i.jsxs("div",{className:"cm-voice-panel",children:[i.jsx("div",{className:"cm-voice-label",children:"YOUR MICROPHONE"}),i.jsx("button",{className:`cm-orb ${p?"active":""}`,onClick:se,title:"Tap to speak to Rover",children:p?i.jsx(Fr,{size:30}):i.jsx(Pc,{size:30})}),i.jsx("div",{className:`cm-wave ${p?"active":""}`,children:Array.from({length:28}).map(($,U)=>i.jsx("i",{style:{height:`${6+U*7%17}px`}},U))}),i.jsx("div",{className:"cm-status",children:p?"LISTENING…":"TAP TO SPEAK"}),i.jsx("button",{className:`cm-voice-btn ${p?"stop":""}`,onClick:se,children:p?"LISTENING…":"START VOICE MESSAGE"})]}),i.jsxs("div",{className:"cm-voice-panel",children:[i.jsx("div",{className:"cm-voice-label",children:"ROVER SPEAKER / PLAYBACK"}),i.jsx("div",{className:`cm-orb rover ${x?"active":""}`,children:i.jsx(tl,{size:30})}),i.jsx("div",{className:`cm-wave blue ${x?"active":""}`,children:Array.from({length:28}).map(($,U)=>i.jsx("i",{style:{height:`${5+U*9%18}px`}},U))}),i.jsx("div",{className:"cm-status blue",children:x?"ROVER SPEAKING…":"READY TO PLAY"}),i.jsx("button",{className:"cm-voice-btn",onClick:()=>{const $="Rover communication test successful. Audio output is working.";G("rover","voice",$),P(`Rover: ${$}`),X($)},children:"TEST ROVER SPEAKER"})]})]})]}),i.jsxs("div",{className:"cm-card",children:[i.jsxs("div",{className:"cm-title",children:[i.jsxs("div",{className:"cm-title-left",children:[i.jsx(pa,{size:14}),i.jsx("span",{children:"TEXT TO SPEECH"})]}),i.jsx("small",{children:"TYPE → ROVER VOICE"})]}),i.jsxs("div",{className:"cm-tts-body",children:[i.jsx("textarea",{className:"cm-textbox",value:s,maxLength:200,onChange:$=>d($.target.value),onKeyDown:$=>{$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),le())},placeholder:"Type a message for Rover…"}),i.jsxs("div",{className:"cm-text-bottom",children:[i.jsxs("span",{className:"cm-char",children:[s.length,"/200 • ",I]}),i.jsxs("button",{className:"cm-send",onClick:()=>le(),children:[i.jsx(gm,{size:13})," CONVERT & SEND"]})]})]})]}),i.jsxs("div",{className:"cm-card",children:[i.jsxs("div",{className:"cm-title",children:[i.jsxs("div",{className:"cm-title-left",children:[i.jsx(pa,{size:13}),i.jsx("span",{children:"QUICK MESSAGES"})]}),i.jsx("small",{children:"ONE-TAP COMMANDS"})]}),i.jsx("div",{className:"cm-quick",children:["Status Update","Are you okay?","Check temperature","Scan the area","Return to base"].map($=>i.jsx("button",{onClick:()=>le($),children:$},$))})]})]}),i.jsxs("div",{className:"cm-side",children:[i.jsxs("div",{className:"cm-card cm-log",children:[i.jsxs("div",{className:"cm-title",children:[i.jsxs("div",{className:"cm-title-left",children:[i.jsx(Ic,{size:15}),i.jsx("span",{children:"COMMUNICATION LOG"})]}),i.jsxs("button",{className:"cm-clear",onClick:xe,children:[i.jsx(ym,{size:12})," CLEAR"]})]}),i.jsx("div",{className:"cm-log-list",children:a.length===0?i.jsx("div",{className:"cm-log-empty",children:"NO MESSAGES YET"}):a.map($=>i.jsxs("div",{className:`cm-msg ${$.from}`,children:[i.jsx("div",{className:"cm-avatar",children:$.from==="you"?$.type==="voice"?i.jsx(Fr,{size:14}):i.jsx(pa,{size:14}):i.jsx(Ic,{size:14})}),i.jsxs("div",{className:"cm-bubble-wrap",children:[i.jsxs("div",{className:"cm-msg-meta",children:[i.jsx("strong",{children:$.from==="you"?`YOU (${$.type.toUpperCase()})`:"ROVER (VOICE)"}),i.jsx("span",{children:$.time})]}),i.jsx("div",{className:"cm-bubble",children:$.text})]})]},$.id))})]}),i.jsxs("div",{className:"cm-card",children:[i.jsxs("div",{className:"cm-title",children:[i.jsxs("div",{className:"cm-title-left",children:[i.jsx(tl,{size:14}),i.jsx("span",{children:"AUDIO CONTROLS"})]}),i.jsx("small",{children:E?"MUTED":`${Math.round(k*100)}%`})]}),i.jsxs("div",{className:"cm-audio",children:[i.jsxs("div",{className:"cm-slider-row",children:[i.jsx(tl,{size:12}),"VOLUME",i.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:k,onChange:$=>j(Number($.target.value))})]}),i.jsxs("div",{className:"cm-audio-actions",children:[i.jsx("button",{className:E?"active":"",onClick:()=>R($=>!$),title:E?"Unmute rover speaker":"Mute rover speaker",children:E?i.jsx(km,{size:14}):i.jsx(tl,{size:14})}),i.jsx("button",{onClick:()=>{var $;($=window.speechSynthesis)==null||$.cancel(),v(!1),M("READY")},title:"Stop rover speech",children:i.jsx(Pc,{size:14})})]})]})]})]})]}),i.jsxs("div",{className:"cm-footer",children:[i.jsx("span",{children:"SIMULATION • BROWSER MICROPHONE + SPEAKER"}),i.jsx("span",{children:"MNR-01 • MINENOVA"})]})]})}function Lm(){const a=kn.useRef(null),c=kn.useRef(null),s=kn.useRef(null),d=kn.useRef(null),p=kn.useRef([]),h=kn.useRef(null),[x,v]=y.useState(!1),[k,j]=y.useState(!1),[E,R]=y.useState(""),[L,V]=y.useState(1),[_,M]=y.useState(!1),[I,P]=y.useState(!1),[G,X]=y.useState(!1),[ne,le]=y.useState(""),[se,xe]=y.useState("NORMAL"),[$,U]=y.useState(!1),[ae,Ie]=y.useState(!1),[Se,Re]=y.useState(null),[ee,te]=y.useState(!1),[Pe,be]=y.useState(!1),[F,q]=y.useState(!1),W=se==="GRAYSCALE"?"grayscale(1)":se==="NIGHT VISION"?"sepia(1) hue-rotate(70deg) saturate(2.2) brightness(.72) contrast(1.12)":se==="THERMAL"?"hue-rotate(150deg) saturate(2.4) contrast(1.18) brightness(1.02)":"none",w=async D=>{const re=a.current;if(re){re.srcObject=D,re.muted=!0,re.autoplay=!0,re.playsInline=!0;try{await re.play()}catch{}}},C=async()=>{var D;if(R(""),j(!1),te(!1),!((D=navigator.mediaDevices)!=null&&D.getUserMedia)){R("Camera access is not supported in this browser. Please use Chrome or Edge.");return}try{s.current&&s.current.getTracks().forEach(ke=>ke.stop());const re=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720},frameRate:{ideal:30,max:30}},audio:!1});if(!re.getVideoTracks()[0])throw re.getTracks().forEach(ke=>ke.stop()),new Error("NO_VIDEO_TRACK");s.current=re,v(!0),requestAnimationFrame(()=>{w(re)})}catch(re){v(!1),j(!1),(re==null?void 0:re.name)==="NotAllowedError"?R("Camera permission was denied. Click the camera icon and choose Allow."):(re==null?void 0:re.name)==="NotFoundError"?R("No webcam was found. Check that the laptop camera is available."):(re==null?void 0:re.name)==="NotReadableError"?R("The webcam is busy in another app. Close Camera/Teams/Zoom and try again."):R("Unable to access the laptop camera. Check browser camera permission and try again.")}};y.useEffect(()=>{if(!x)return;const D=a.current,re=s.current;if(!D||!re)return;D.srcObject=re,D.muted=!0,D.autoplay=!0,D.playsInline=!0;const we=async()=>{j(D.readyState>=2&&D.videoWidth>0&&D.videoHeight>0);try{await D.play()}catch{}};return D.addEventListener("loadedmetadata",we),D.addEventListener("canplay",we),D.addEventListener("playing",we),we(),()=>{D.removeEventListener("loadedmetadata",we),D.removeEventListener("canplay",we),D.removeEventListener("playing",we)}},[x]);const ie=()=>{var D;d.current&&d.current.state!=="inactive"&&d.current.stop(),(D=s.current)==null||D.getTracks().forEach(re=>re.stop()),s.current=null,a.current&&(a.current.pause(),a.current.srcObject=null),v(!1),j(!1),X(!1)};y.useEffect(()=>()=>{var D,re;(D=s.current)==null||D.getTracks().forEach(we=>we.stop()),(re=h.current)==null||re.stop(),d.current&&d.current.state!=="inactive"&&d.current.stop()},[]);const ue=()=>{if(!x||!k||!a.current||!c.current){R("Camera is not ready yet. Wait for the LIVE indicator, then try Snapshot.");return}const D=a.current;if(!D.videoWidth||!D.videoHeight){R("Camera frame is not ready yet. Please wait a moment and try again.");return}const re=c.current;re.width=D.videoWidth,re.height=D.videoHeight;const we=re.getContext("2d");we.filter=W,we.drawImage(D,0,0,re.width,re.height);const ke=re.toDataURL("image/jpeg",.92);Re(ke),te(!1)},pe=()=>{if(!Se)return;const D=document.createElement("a");D.href=Se,D.download=`minenova-snapshot-${Date.now()}.jpg`,D.click(),te(!0)},fe=async()=>{var re;if(I){(re=h.current)==null||re.stop(),h.current=null,P(!1);return}const D=window.SpeechRecognition||window.webkitSpeechRecognition;if(!D){le("Voice control is not supported here. Use Chrome or Edge.");return}try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Ze=>Ze.stop());const ke=new D;ke.lang="en-IN",ke.interimResults=!0,ke.continuous=!1,h.current=ke,ke.onstart=()=>{P(!0),le("Listening… speak your rover instruction.")},ke.onresult=Ze=>{const Tt=Ze.results[Ze.results.length-1],Zn=Tt[0].transcript.trim();Zn&&le(`ROVER INSTRUCTION • ${Zn}`),Tt.isFinal&&P(!1)},ke.onerror=()=>{P(!1),le("Microphone input could not be captured. Try again.")},ke.onend=()=>{h.current=null,P(!1)},ke.start()}catch(we){P(!1),le((we==null?void 0:we.name)==="NotAllowedError"?"Microphone permission was denied.":"Unable to access the microphone.")}},ye=()=>{if(!(!x||!k||!s.current)){if(G){d.current&&d.current.state!=="inactive"&&d.current.stop();return}try{const re=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(ke=>MediaRecorder.isTypeSupported(ke))||"",we=new MediaRecorder(s.current,re?{mimeType:re}:void 0);p.current=[],d.current=we,q(!1),we.ondataavailable=ke=>{var Ze;(Ze=ke.data)!=null&&Ze.size&&p.current.push(ke.data)},we.onstop=()=>{const ke=new Blob(p.current,{type:we.mimeType||"video/webm"}),Ze=URL.createObjectURL(ke),Tt=document.createElement("a");Tt.href=Ze,Tt.download=`minenova-live-recording-${Date.now()}.webm`,Tt.click(),window.setTimeout(()=>URL.revokeObjectURL(Ze),1500),p.current=[],d.current=null,X(!1),q(!0)},we.start(200),X(!0)}catch{X(!1),R("Video recording is not supported by this browser.")}}},ge=async()=>{const D=document.querySelector(".live-view-page");try{!document.fullscreenElement&&(D!=null&&D.requestFullscreen)?(await D.requestFullscreen(),be(!0)):document.fullscreenElement&&(await document.exitFullscreen(),be(!1))}catch{be(!1)}},Ee=se==="NORMAL"?"NORMAL":se==="NIGHT VISION"?"NIGHT":se==="GRAYSCALE"?"GRAY":"THERMAL";return i.jsxs("section",{className:"live-view-page",children:[i.jsx("style",{children:`
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
      `}),i.jsxs("div",{className:"lv-camera-stage",style:{"--lv-zoom":L,"--lv-filter":W},children:[x?i.jsx("video",{ref:a,className:"lv-video",autoPlay:!0,playsInline:!0,muted:!0}):i.jsx("div",{className:"lv-placeholder",children:i.jsxs("div",{className:"lv-placeholder-inner",children:[i.jsx("div",{className:"cam-icon",children:i.jsx(da,{size:34})}),i.jsx("h2",{children:"LIVE VIDEO FEED"}),i.jsx("p",{children:"Tap the camera icon to connect the laptop camera for the prototype. The same view can later receive the rover camera stream."}),i.jsx("button",{className:"lv-connect",onClick:C,children:"CONNECT CAMERA"})]})}),_&&x&&i.jsx("div",{className:"lv-light-glow"}),i.jsx("div",{className:"lv-overlay"}),i.jsxs("div",{className:"lv-top",children:[i.jsxs("div",{className:"lv-live",children:[i.jsx("span",{className:"lv-live-dot"}),x?k?"LIVE":"CONNECTING":"STANDBY",G&&i.jsx("span",{style:{color:"#ff7068",marginLeft:4},children:"• REC"})]}),i.jsxs("div",{className:"lv-top-right",children:[i.jsxs("div",{className:"lv-chip",children:["MODE ",i.jsx("strong",{children:Ee})]}),i.jsx("div",{className:"lv-chip",children:x?k?"CAMERA ACTIVE":"CAMERA STARTING":"CAMERA READY"}),i.jsx("button",{className:"lv-fullscreen",onClick:ge,title:Pe?"Exit fullscreen":"Fullscreen",children:i.jsx(fm,{size:17})})]})]}),E&&i.jsx("div",{className:"lv-error",children:E}),i.jsxs("div",{className:"lv-bottom-status",children:[i.jsx("span",{children:"FEED"}),i.jsx("strong",{children:x?k?"LIVE":"CONNECTING":"STANDBY"}),i.jsx("span",{children:"•"}),i.jsx("span",{children:"ROVER-01 READY"})]}),ne&&i.jsxs("div",{className:"lv-voice-status",children:["🎙 ",ne]}),i.jsxs("div",{className:"lv-side-controls",children:[i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:I?"active":"",onClick:fe,title:"Microphone",children:i.jsx(Fr,{size:18})}),i.jsx("div",{className:"lv-control-label",children:I?"STOP MIC":"MIC"})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:x?"active":"",onClick:x?ie:C,title:x?"Disconnect camera":"Connect camera",children:i.jsx(da,{size:18})}),i.jsx("div",{className:"lv-control-label",children:x?"DISCONNECT":"CONNECT CAMERA"})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{onClick:ue,title:"Take snapshot",disabled:!k,style:{opacity:k?1:.42},children:i.jsx(da,{size:17})}),i.jsx("div",{className:"lv-control-label",children:"SNAPSHOT"})]}),i.jsxs("div",{className:"lv-control record",children:[i.jsx("button",{className:G?"active":"",onClick:ye,title:G?"Stop recording":"Start recording",disabled:!k,style:{opacity:k?1:.42},children:i.jsx(im,{size:18,fill:G?"currentColor":"none"})}),i.jsx("div",{className:"lv-control-label",children:G?"STOP RECORDING":"RECORD"})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:_?"active":"",onClick:()=>M(D=>!D),title:"Camera light",children:i.jsx(cm,{size:18})}),i.jsxs("div",{className:"lv-control-label",children:["LIGHT ",_?"ON":"OFF"]})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:L!==1?"active":"",onClick:()=>V(D=>D>=3?1:+(D+.25).toFixed(2)),title:"Zoom",children:i.jsx(_c,{size:18})}),i.jsxs("div",{className:"lv-control-label",children:["ZOOM ",L.toFixed(2),"x"]})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:$?"active":"",onClick:()=>{U(D=>!D),Ie(!1)},title:"Camera modes",children:i.jsx(hm,{size:18})}),i.jsx("div",{className:"lv-control-label",children:"MODE"}),$&&i.jsxs("div",{className:"lv-popup",children:[i.jsx("h4",{children:"CAMERA MODE"}),["NORMAL","GRAYSCALE","NIGHT VISION","THERMAL"].map(D=>i.jsx("button",{className:se===D?"active":"",onClick:()=>{xe(D),U(!1)},children:D},D))]})]}),i.jsxs("div",{className:"lv-control",children:[i.jsx("button",{className:ae?"active":"",onClick:()=>{Ie(D=>!D),U(!1)},title:"More controls",children:i.jsx(xm,{size:18})}),i.jsx("div",{className:"lv-control-label",children:"MORE"}),ae&&i.jsxs("div",{className:"lv-popup",children:[i.jsx("h4",{children:"VIEW CONTROLS"}),i.jsxs("button",{onClick:()=>V(D=>Math.max(1,+(D-.25).toFixed(2))),children:[i.jsx(bm,{size:12,style:{verticalAlign:"middle",marginRight:5}}),"ZOOM OUT"]}),i.jsxs("button",{onClick:()=>V(D=>Math.min(3,+(D+.25).toFixed(2))),children:[i.jsx(_c,{size:12,style:{verticalAlign:"middle",marginRight:5}}),"ZOOM IN"]}),i.jsx("button",{onClick:()=>{V(1),xe("NORMAL"),M(!1),Ie(!1)},children:"RESET VIEW"}),i.jsx("button",{onClick:()=>{Ie(!1),R("ROVER CAMERA • HARDWARE STREAM READY")},children:"ROVER CAMERA • READY"})]})]})]}),Se&&i.jsxs("div",{className:"lv-capture",children:[i.jsxs("div",{className:"lv-capture-title",children:[i.jsx("span",{children:"SNAPSHOT CAPTURED"}),ee&&i.jsx("strong",{children:"SAVED"})]}),i.jsx("img",{src:Se,alt:"Latest MineNova snapshot"}),i.jsxs("div",{className:"lv-capture-actions",children:[i.jsx("button",{onClick:pe,children:ee?"SAVED":"SAVE PHOTO"}),i.jsx("button",{onClick:()=>{Re(null),te(!1)},children:"CLOSE"})]})]}),F&&!Se&&i.jsx("div",{style:{position:"absolute",left:20,top:78,zIndex:12,padding:"9px 12px",border:"1px solid rgba(101,215,167,.32)",borderRadius:8,background:"rgba(4,14,11,.9)",color:"#65d7a7",fontSize:8,fontWeight:900,letterSpacing:1},children:"✓ LIVE RECORDING SAVED"})]}),i.jsx("canvas",{ref:c,style:{display:"none"}})]})}function Mm(){const[a,c]=y.useState(null),[s,d]=y.useState(0),p=[["N01",7,55,"NORMAL"],["N02",17,42,"NORMAL"],["N03",27,45,"NORMAL"],["N04",37,36,"NORMAL"],["N05",46,23,"NORMAL"],["N06",57,31,"WEAK"],["N07",68,20,"NORMAL"],["N08",79,34,"NORMAL"],["N09",89,50,"NORMAL"],["N10",29,61,"NORMAL"],["N11",36,72,"NORMAL"],["N12",47,78,"WEAK"],["N13",55,64,"NORMAL"],["N14",61,75,"CRITICAL"],["N15",70,69,"NORMAL"],["N16",80,58,"NORMAL"],["N17",87,43,"NORMAL"],["N18",94,68,"NORMAL"],["N19",75,84,"NORMAL"],["N20",48,88,"NORMAL"]];y.useEffect(()=>{const E=setInterval(()=>d(R=>R+1),2200);return()=>clearInterval(E)},[]);const h=p.map(([E,R,L,V],_)=>{let M=V;E!=="N14"&&E!=="N06"&&E!=="N12"&&(s+_*3)%23===0&&(M="WEAK"),E!=="N14"&&M==="WEAK"&&(s+_)%9===0&&(M="NORMAL");const I=M==="CRITICAL"?18+s*3%7:M==="WEAK"?48+(s+_)%15:87+(s+_*2)%12,P=Math.max(42,96-(s+_*5)%31),G=(31+(s+_)%7*.8).toFixed(1),X=Math.round(120+_*15+(s+_)%5);return{id:E,left:R,top:L,status:M,signal:I,battery:P,temperature:G,depth:X,issue:M==="CRITICAL"?"Methane concentration high":M==="WEAK"?"Signal strength unstable":"Relay connection stable"}}),x={normal:h.filter(E=>E.status==="NORMAL").length,weak:h.filter(E=>E.status==="WEAK").length,critical:h.filter(E=>E.status==="CRITICAL").length},v=a?h.find(E=>E.id===a.id)||a:h.find(E=>E.id==="N14"),k=["M 7 55 C 12 42, 14 42, 17 42 S 23 45, 27 45 S 33 37, 37 36 S 42 25, 46 23","M 46 23 C 51 19, 53 27, 57 31 S 63 23, 68 20 S 75 29, 79 34 S 85 44, 89 50","M 27 45 C 30 52, 29 57, 29 61 S 33 69, 36 72 S 42 76, 47 78","M 37 36 C 42 42, 43 57, 47 58 S 51 62, 55 64 S 58 70, 61 75","M 57 31 C 60 39, 61 52, 55 64 S 63 69, 70 69 S 77 60, 80 58","M 79 34 C 82 42, 84 45, 89 50 S 91 61, 94 68","M 61 75 C 66 80, 69 84, 75 84 S 83 72, 87 72","M 47 78 C 47 83, 47 85, 48 88 S 57 88, 61 75"],j=(v.status==="CRITICAL","/minenova/mine-map.png");return i.jsxs("section",{className:"network-page",children:[i.jsx("style",{children:`
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
            url(/minenova/mine-map.png);
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
          background-image:linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.32)),url(/minenova/mine-map.png);
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
      `}),i.jsxs("div",{className:"net-head",children:[i.jsxs("div",{className:"net-title-wrap",children:[i.jsx("div",{className:"net-title-icon",children:i.jsx(dd,{size:25})}),i.jsxs("div",{children:[i.jsx("div",{className:"net-kicker",children:"MINENOVA • UNDERGROUND CONNECTIVITY"}),i.jsx("h1",{children:"UNDERGROUND NETWORK"}),i.jsx("p",{children:"Live node status and mission connectivity"})]})]}),i.jsxs("div",{className:"net-quote",children:["“Every connection brings",i.jsx("br",{}),"someone closer to safety.”"]}),i.jsxs("div",{className:"net-live",children:[i.jsx("i",{})," NETWORK ONLINE"]})]}),i.jsxs("div",{className:"net-layout",children:[i.jsxs("div",{className:"net-card net-map",children:[i.jsxs("div",{className:"net-map-label",children:[i.jsx("strong",{children:"MINE MAP — NODE NETWORK"}),i.jsx("span",{children:"LIVE UNDERGROUND ROUTES • SIMULATION"})]}),i.jsxs("div",{className:"net-gateway",children:[i.jsx("i",{})," SURFACE GATEWAY • ONLINE"]}),i.jsx("svg",{className:"net-routes",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:k.map((E,R)=>i.jsxs("g",{children:[i.jsx("path",{className:`route-base ${R===5?"route-danger":R===1?"route-warning":""}`,d:E,vectorEffect:"non-scaling-stroke"}),i.jsx("path",{className:`route-core ${R===5?"route-danger":R===1?"route-warning":""}`,d:E,vectorEffect:"non-scaling-stroke"})]},R))}),h.map(E=>i.jsxs("div",{className:`net-node ${E.status.toLowerCase()} ${(a==null?void 0:a.id)===E.id?"selected":""}`,style:{left:`${E.left}%`,top:`${E.top}%`},onClick:()=>c(E),title:`Open ${E.id} details`,children:[i.jsx("div",{className:"net-node-dot"}),i.jsx("div",{className:"net-node-label",children:E.id})]},E.id)),i.jsxs("div",{className:"net-danger-callout",children:[i.jsxs("strong",{children:[i.jsx(ol,{size:15})," DANGER"]}),i.jsxs("p",{children:["Methane level high",i.jsx("br",{}),"Signal unstable",i.jsx("br",{}),"Inspect immediately"]}),i.jsx("span",{children:"NODE 14 • CRITICAL"})]}),i.jsxs("div",{className:"net-legend",children:[i.jsx("div",{className:"net-legend-title",children:"NETWORK LEGEND"}),i.jsxs("div",{className:"net-legend-row",children:[i.jsx("i",{className:"g"}),"Normal Node"]}),i.jsxs("div",{className:"net-legend-row",children:[i.jsx("i",{className:"y"}),"Weak Signal"]}),i.jsxs("div",{className:"net-legend-row",children:[i.jsx("i",{className:"r"}),"Danger / Critical"]})]}),i.jsxs("div",{className:"net-map-tools",children:[i.jsx("button",{children:"3D VIEW"}),i.jsx("button",{children:"RESET VIEW"})]})]}),i.jsxs("aside",{className:"net-card net-details",children:[i.jsxs("div",{className:"net-details-head",children:[i.jsxs("h2",{children:[i.jsx("span",{children:v.id})," — DETAILS"]}),i.jsx("div",{className:"net-status-badge",children:v.status})]}),i.jsx("div",{className:"net-node-photo",style:{backgroundImage:`linear-gradient(rgba(4,8,10,.18),rgba(4,8,10,.34)),url('${j}')`}}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(il,{size:14}),i.jsx("span",{children:"Status"}),i.jsx("strong",{className:v.status==="CRITICAL"?"red":"",children:v.status==="CRITICAL"?"High Risk":v.status==="WEAK"?"Weak Signal":"Normal"})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(fd,{size:14}),i.jsx("span",{children:"Signal Strength"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[i.jsx("div",{className:`net-progress ${v.status==="CRITICAL"?"danger":""}`,children:i.jsx("i",{style:{width:`${v.signal}%`}})}),i.jsxs("strong",{children:[v.signal,"%"]})]})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(lm,{size:14}),i.jsx("span",{children:"Battery Level"}),i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[i.jsx("div",{className:"net-progress",children:i.jsx("i",{style:{width:`${v.battery}%`}})}),i.jsxs("strong",{children:[v.battery,"%"]})]})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(dm,{size:14}),i.jsx("span",{children:"Depth"}),i.jsxs("strong",{children:[v.depth," m"]})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(vm,{size:14}),i.jsx("span",{children:"Temperature"}),i.jsxs("strong",{children:[v.temperature,"°C"]})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(ol,{size:14}),i.jsx("span",{children:"Methane (CH₄)"}),i.jsx("strong",{className:v.status==="CRITICAL"?"red":"",children:v.status==="CRITICAL"?"High":"Normal"})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(il,{size:14}),i.jsx("span",{children:"Last Contact"}),i.jsx("strong",{children:v.status==="CRITICAL"?"3 min ago":"Just now"})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(ol,{size:14}),i.jsx("span",{children:"Possible Cause"}),i.jsx("strong",{children:v.status==="CRITICAL"?"Gas Leak":v.status==="WEAK"?"Relay Distance":"—"})]}),i.jsxs("div",{className:"net-detail-row",children:[i.jsx(pd,{size:14}),i.jsx("span",{children:"Recommended Action"}),i.jsx("strong",{children:v.status==="CRITICAL"?"Inspect node":"Continue monitoring"})]}),i.jsxs("button",{className:"net-locate",onClick:()=>c(h.find(E=>E.id==="N14")),children:[i.jsx(cd,{size:13})," LOCATE NODE ON MAP"]})]}),i.jsxs("div",{className:"net-bottom-wide",children:[i.jsxs("div",{className:"net-card net-bottom-card",children:[i.jsxs("div",{className:"net-bottom-title",children:[i.jsx("strong",{children:"NETWORK OVERVIEW"}),i.jsx("span",{children:"LIVE SIMULATION"})]}),i.jsxs("div",{className:"net-overview-grid",children:[i.jsxs("div",{className:"net-overview-box",children:[i.jsx("span",{children:"TOTAL NODES"}),i.jsx("strong",{children:h.length}),i.jsx("small",{children:"DEPLOYED"})]}),i.jsxs("div",{className:"net-overview-box green",children:[i.jsx("span",{children:"ACTIVE NODES"}),i.jsx("strong",{children:x.normal}),i.jsx("small",{children:"CONNECTED"})]}),i.jsxs("div",{className:"net-overview-box yellow",children:[i.jsx("span",{children:"WEAK NODES"}),i.jsx("strong",{children:x.weak}),i.jsx("small",{children:"CHECK SIGNAL"})]}),i.jsxs("div",{className:"net-overview-box red",children:[i.jsx("span",{children:"CRITICAL NODES"}),i.jsx("strong",{children:x.critical}),i.jsx("small",{children:"IMMEDIATE ACTION"})]})]})]}),i.jsxs("div",{className:"net-card net-bottom-card",children:[i.jsxs("div",{className:"net-bottom-title",children:[i.jsx("strong",{children:"ENVIRONMENT OVERVIEW"}),i.jsx("span",{children:"UNDERGROUND"})]}),i.jsxs("div",{className:"net-env-grid",children:[i.jsxs("div",{className:"net-env-box gas",children:[i.jsx("span",{children:"GAS LEVEL"}),i.jsx("strong",{children:v.status==="CRITICAL"?"HIGH":"NORMAL"})]}),i.jsxs("div",{className:"net-env-box temp",children:[i.jsx("span",{children:"TEMPERATURE"}),i.jsxs("strong",{children:[v.temperature,"°C"]})]}),i.jsxs("div",{className:"net-env-box humidity",children:[i.jsx("span",{children:"HUMIDITY"}),i.jsxs("strong",{children:[68+(s+3)%4,"%"]})]}),i.jsxs("div",{className:"net-env-box collapse",children:[i.jsx("span",{children:"COLLAPSE RISK"}),i.jsx("strong",{children:v.status==="CRITICAL"?"HIGH":"MODERATE"})]})]})]})]})]})]})}kf.createRoot(document.getElementById("root")).render(i.jsx(kn.StrictMode,{children:i.jsx(Yh,{children:i.jsx(Sm,{})})}));
