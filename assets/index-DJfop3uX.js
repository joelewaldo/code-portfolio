(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Cc={exports:{}},Do={},bc={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function Tv(){if(zp)return ft;zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,ne,Ue){this.props=O,this.context=ne,this.refs=E,this.updater=Ue||v}S.prototype.isReactComponent={},S.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=S.prototype;function P(O,ne,Ue){this.props=O,this.context=ne,this.refs=E,this.updater=Ue||v}var b=P.prototype=new _;b.constructor=P,M(b,S.prototype),b.isPureReactComponent=!0;var A=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function k(O,ne,Ue){var J,de={},we=null,Se=null;if(ne!=null)for(J in ne.ref!==void 0&&(Se=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)F.call(ne,J)&&!U.hasOwnProperty(J)&&(de[J]=ne[J]);var Ae=arguments.length-2;if(Ae===1)de.children=Ue;else if(1<Ae){for(var Ke=Array(Ae),We=0;We<Ae;We++)Ke[We]=arguments[We+2];de.children=Ke}if(O&&O.defaultProps)for(J in Ae=O.defaultProps,Ae)de[J]===void 0&&(de[J]=Ae[J]);return{$$typeof:s,type:O,key:we,ref:Se,props:de,_owner:N.current}}function D(O,ne){return{$$typeof:s,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function V(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ue){return ne[Ue]})}var ie=/\/+/g;function Z(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):ne.toString(36)}function ce(O,ne,Ue,J,de){var we=typeof O;(we==="undefined"||we==="boolean")&&(O=null);var Se=!1;if(O===null)Se=!0;else switch(we){case"string":case"number":Se=!0;break;case"object":switch(O.$$typeof){case s:case e:Se=!0}}if(Se)return Se=O,de=de(Se),O=J===""?"."+Z(Se,0):J,A(de)?(Ue="",O!=null&&(Ue=O.replace(ie,"$&/")+"/"),ce(de,ne,Ue,"",function(We){return We})):de!=null&&(R(de)&&(de=D(de,Ue+(!de.key||Se&&Se.key===de.key?"":(""+de.key).replace(ie,"$&/")+"/")+O)),ne.push(de)),1;if(Se=0,J=J===""?".":J+":",A(O))for(var Ae=0;Ae<O.length;Ae++){we=O[Ae];var Ke=J+Z(we,Ae);Se+=ce(we,ne,Ue,Ke,de)}else if(Ke=m(O),typeof Ke=="function")for(O=Ke.call(O),Ae=0;!(we=O.next()).done;)we=we.value,Ke=J+Z(we,Ae++),Se+=ce(we,ne,Ue,Ke,de);else if(we==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Se}function fe(O,ne,Ue){if(O==null)return O;var J=[],de=0;return ce(O,J,"","",function(we){return ne.call(Ue,we,de++)}),J}function se(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ue)},function(Ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ue)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var le={current:null},H={transition:null},ae={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:H,ReactCurrentOwner:N};function re(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:fe,forEach:function(O,ne,Ue){fe(O,function(){ne.apply(this,arguments)},Ue)},count:function(O){var ne=0;return fe(O,function(){ne++}),ne},toArray:function(O){return fe(O,function(ne){return ne})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ft.Component=S,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=P,ft.StrictMode=r,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ft.act=re,ft.cloneElement=function(O,ne,Ue){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var J=M({},O.props),de=O.key,we=O.ref,Se=O._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,Se=N.current),ne.key!==void 0&&(de=""+ne.key),O.type&&O.type.defaultProps)var Ae=O.type.defaultProps;for(Ke in ne)F.call(ne,Ke)&&!U.hasOwnProperty(Ke)&&(J[Ke]=ne[Ke]===void 0&&Ae!==void 0?Ae[Ke]:ne[Ke])}var Ke=arguments.length-2;if(Ke===1)J.children=Ue;else if(1<Ke){Ae=Array(Ke);for(var We=0;We<Ke;We++)Ae[We]=arguments[We+2];J.children=Ae}return{$$typeof:s,type:O.type,key:de,ref:we,props:J,_owner:Se}},ft.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},ft.createElement=k,ft.createFactory=function(O){var ne=k.bind(null,O);return ne.type=O,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(O){return{$$typeof:f,render:O}},ft.isValidElement=R,ft.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:se}},ft.memo=function(O,ne){return{$$typeof:g,type:O,compare:ne===void 0?null:ne}},ft.startTransition=function(O){var ne=H.transition;H.transition={};try{O()}finally{H.transition=ne}},ft.unstable_act=re,ft.useCallback=function(O,ne){return le.current.useCallback(O,ne)},ft.useContext=function(O){return le.current.useContext(O)},ft.useDebugValue=function(){},ft.useDeferredValue=function(O){return le.current.useDeferredValue(O)},ft.useEffect=function(O,ne){return le.current.useEffect(O,ne)},ft.useId=function(){return le.current.useId()},ft.useImperativeHandle=function(O,ne,Ue){return le.current.useImperativeHandle(O,ne,Ue)},ft.useInsertionEffect=function(O,ne){return le.current.useInsertionEffect(O,ne)},ft.useLayoutEffect=function(O,ne){return le.current.useLayoutEffect(O,ne)},ft.useMemo=function(O,ne){return le.current.useMemo(O,ne)},ft.useReducer=function(O,ne,Ue){return le.current.useReducer(O,ne,Ue)},ft.useRef=function(O){return le.current.useRef(O)},ft.useState=function(O){return le.current.useState(O)},ft.useSyncExternalStore=function(O,ne,Ue){return le.current.useSyncExternalStore(O,ne,Ue)},ft.useTransition=function(){return le.current.useTransition()},ft.version="18.3.1",ft}var Vp;function Xi(){return Vp||(Vp=1,bc.exports=Tv()),bc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function wv(){if(Hp)return Do;Hp=1;var s=Xi(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,g){var y,x={},m=null,v=null;g!==void 0&&(m=""+g),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(v=h.ref);for(y in h)r.call(h,y)&&!l.hasOwnProperty(y)&&(x[y]=h[y]);if(f&&f.defaultProps)for(y in h=f.defaultProps,h)x[y]===void 0&&(x[y]=h[y]);return{$$typeof:e,type:f,key:m,ref:v,props:x,_owner:a.current}}return Do.Fragment=n,Do.jsx=c,Do.jsxs=c,Do}var Gp;function Av(){return Gp||(Gp=1,Cc.exports=wv()),Cc.exports}var xe=Av(),Sr=Xi();const Qr=dg(Sr);var il={},Pc={exports:{}},Dn={},Dc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function Rv(){return Wp||(Wp=1,function(s){function e(H,ae){var re=H.length;H.push(ae);e:for(;0<re;){var O=re-1>>>1,ne=H[O];if(0<a(ne,ae))H[O]=ae,H[re]=ne,re=O;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ae=H[0],re=H.pop();if(re!==ae){H[0]=re;e:for(var O=0,ne=H.length,Ue=ne>>>1;O<Ue;){var J=2*(O+1)-1,de=H[J],we=J+1,Se=H[we];if(0>a(de,re))we<ne&&0>a(Se,de)?(H[O]=Se,H[we]=re,O=we):(H[O]=de,H[J]=re,O=J);else if(we<ne&&0>a(Se,re))H[O]=Se,H[we]=re,O=we;else break e}}return ae}function a(H,ae){var re=H.sortIndex-ae.sortIndex;return re!==0?re:H.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],g=[],y=1,x=null,m=3,v=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(H){for(var ae=n(g);ae!==null;){if(ae.callback===null)r(g);else if(ae.startTime<=H)r(g),ae.sortIndex=ae.expirationTime,e(h,ae);else break;ae=n(g)}}function A(H){if(E=!1,b(H),!M)if(n(h)!==null)M=!0,se(F);else{var ae=n(g);ae!==null&&le(A,ae.startTime-H)}}function F(H,ae){M=!1,E&&(E=!1,_(k),k=-1),v=!0;var re=m;try{for(b(ae),x=n(h);x!==null&&(!(x.expirationTime>ae)||H&&!V());){var O=x.callback;if(typeof O=="function"){x.callback=null,m=x.priorityLevel;var ne=O(x.expirationTime<=ae);ae=s.unstable_now(),typeof ne=="function"?x.callback=ne:x===n(h)&&r(h),b(ae)}else r(h);x=n(h)}if(x!==null)var Ue=!0;else{var J=n(g);J!==null&&le(A,J.startTime-ae),Ue=!1}return Ue}finally{x=null,m=re,v=!1}}var N=!1,U=null,k=-1,D=5,R=-1;function V(){return!(s.unstable_now()-R<D)}function ie(){if(U!==null){var H=s.unstable_now();R=H;var ae=!0;try{ae=U(!0,H)}finally{ae?Z():(N=!1,U=null)}}else N=!1}var Z;if(typeof P=="function")Z=function(){P(ie)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,fe=ce.port2;ce.port1.onmessage=ie,Z=function(){fe.postMessage(null)}}else Z=function(){S(ie,0)};function se(H){U=H,N||(N=!0,Z())}function le(H,ae){k=S(function(){H(s.unstable_now())},ae)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){M||v||(M=!0,se(F))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var re=m;m=ae;try{return H()}finally{m=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ae){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var re=m;m=H;try{return ae()}finally{m=re}},s.unstable_scheduleCallback=function(H,ae,re){var O=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,H={id:y++,callback:ae,priorityLevel:H,startTime:re,expirationTime:ne,sortIndex:-1},re>O?(H.sortIndex=re,e(g,H),n(h)===null&&H===n(g)&&(E?(_(k),k=-1):E=!0,le(A,re-O))):(H.sortIndex=ne,e(h,H),M||v||(M=!0,se(F))),H},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(H){var ae=m;return function(){var re=m;m=ae;try{return H.apply(this,arguments)}finally{m=re}}}}(Lc)),Lc}var Xp;function Cv(){return Xp||(Xp=1,Dc.exports=Rv()),Dc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function bv(){if(jp)return Dn;jp=1;var s=Xi(),e=Cv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function m(t){return h.call(x,t)?!0:h.call(y,t)?!1:g.test(t)?x[t]=!0:(y[t]=!0,!1)}function v(t,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function M(t,i,o,u){if(i===null||typeof i>"u"||v(t,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(t,i,o,u,d,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new E(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new E(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new E(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new E(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new E(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new E(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new E(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new E(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new E(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function P(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,P);S[i]=new E(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,P);S[i]=new E(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,P);S[i]=new E(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new E(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new E(t,1,!1,t.toLowerCase(),null,!0,!0)});function b(t,i,o,u){var d=S.hasOwnProperty(i)?S[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?m(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?t.setAttributeNS(u,i,o):t.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),V=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),H=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,O;function ne(t){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Ue=!1;function J(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){u=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}t()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),p=u.stack.split(`
`),T=d.length-1,I=p.length-1;1<=T&&0<=I&&d[T]!==p[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==p[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==p[I]){var z=`
`+d[T].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=T&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function de(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=J(t.type,!1),t;case 11:return t=J(t.type.render,!1),t;case 1:return t=J(t.type,!0),t;default:return""}}function we(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case N:return"Portal";case D:return"Profiler";case k:return"StrictMode";case Z:return"Suspense";case ce:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fe:return i=t.displayName||null,i!==null?i:we(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return we(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===k?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(t){var i=Ke(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Ct(t){t._valueTracker||(t._valueTracker=We(t))}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return t&&(u=Ke(t)?t.checked?"true":"false":t.value),t=u,t!==o?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function tn(t,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),t._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(t,i){i=i.checked,i!=null&&b(t,"checked",i,!1)}function Tt(t,i){_t(t,i);var o=Ae(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?pt(t,i.type,o):i.hasOwnProperty("defaultValue")&&pt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Xe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function pt(t,i,o){(i!=="number"||ht(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var $e=Array.isArray;function st(t,i,o,u){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&u&&(t[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,u&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function zt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function L(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if($e(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Ae(o)}}function w(t,i){var o=Ae(i.value),u=Ae(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),u!=null&&(t.defaultValue=""+u)}function K(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oe,qe=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,u,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Re(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ye=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(t){Ye.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Be[i]=Be[t]})});function _e(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Be.hasOwnProperty(t)&&Be[t]?(""+i).trim():i+"px"}function Ne(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=_e(o,i[o],u);o==="float"&&(o="cssFloat"),u?t.setProperty(o,d):t[o]=d}}var nt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(t,i){if(i){if(nt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ce(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var be=null,ge=null,Le=null;function Me(t){if(t=go(t)){if(typeof be!="function")throw Error(n(280));var i=t.stateNode;i&&(i=va(i),be(t.stateNode,t.type,i))}}function he(t){ge?Le?Le.push(t):Le=[t]:ge=t}function Ve(){if(ge){var t=ge,i=Le;if(Le=ge=null,Me(t),i)for(t=0;t<i.length;t++)Me(i[t])}}function at(t,i){return t(i)}function bt(){}var xt=!1;function wn(t,i,o){if(xt)return t(i,o);xt=!0;try{return at(t,i,o)}finally{xt=!1,(ge!==null||Le!==null)&&(bt(),Ve())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var u=va(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var ns=!1;if(f)try{var ji={};Object.defineProperty(ji,"passive",{get:function(){ns=!0}}),window.addEventListener("test",ji,ji),window.removeEventListener("test",ji,ji)}catch{ns=!1}function Mi(t,i,o,u,d,p,T,I,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ve){this.onError(ve)}}var Ei=!1,Ar=null,Rr=!1,qi=null,Ko={onError:function(t){Ei=!0,Ar=t}};function is(t,i,o,u,d,p,T,I,z){Ei=!1,Ar=null,Mi.apply(Ko,arguments)}function Zo(t,i,o,u,d,p,T,I,z){if(is.apply(this,arguments),Ei){if(Ei){var ee=Ar;Ei=!1,Ar=null}else throw Error(n(198));Rr||(Rr=!0,qi=ee)}}function fi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function Qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Jo(t){if(fi(t)!==t)throw Error(n(188))}function Zl(t){var i=t.alternate;if(!i){if(i=fi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Jo(d),t;if(p===u)return Jo(d),i;p=p.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=p;else{for(var T=!1,I=d.child;I;){if(I===o){T=!0,o=d,u=p;break}if(I===u){T=!0,u=d,o=p;break}I=I.sibling}if(!T){for(I=p.child;I;){if(I===o){T=!0,o=p,u=d;break}if(I===u){T=!0,u=p,o=d;break}I=I.sibling}if(!T)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function ea(t){return t=Zl(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var na=e.unstable_scheduleCallback,C=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,Y=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,Pe=e.unstable_UserBlockingPriority,Oe=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,ze=null;function dt(t){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(tt,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:vt,Ut=Math.log,kt=Math.LN2;function vt(t){return t>>>=0,t===0?32:31-(Ut(t)/kt|0)|0}var Ze=64,Wt=4194304;function mt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dn(t,i){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,p=t.pingedLanes,T=o&268435455;if(T!==0){var I=T&~d;I!==0?u=mt(I):(p&=T,p!==0&&(u=mt(p)))}else T=o&~d,T!==0?u=mt(T):p!==0&&(u=mt(p));if(u===0)return 0;if(i!==0&&i!==u&&!(i&d)&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if(u&4&&(u|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)o=31-lt(i),d=1<<o,u|=t[o],i&=~d;return u}function Yi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var o=t.suspendedLanes,u=t.pingedLanes,d=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-lt(p),I=1<<T,z=d[T];z===-1?(!(I&o)||I&u)&&(d[T]=Yi(I,i)):z<=i&&(t.expiredLanes|=I),p&=~I}}function Ti(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lt(){var t=Ze;return Ze<<=1,!(Ze&4194240)&&(Ze=64),t}function hn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function nn(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-lt(i),t[i]=o}function un(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-lt(o),p=1<<d;i[d]=0,u[d]=-1,t[d]=-1,o&=~p}}function rn(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var u=31-lt(o),d=1<<u;d&i|t[u]&i&&(t[u]|=i),o&=~d}}var St=0;function di(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xd,Ql,Sd,yd,Md,Jl=!1,ia=[],$i=null,Ki=null,Zi=null,Js=new Map,eo=new Map,Qi=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ed(t,i){switch(t){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Zi=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(t,i,o,u,d,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=go(i),i!==null&&Ql(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function Yg(t,i,o,u,d){switch(i){case"focusin":return $i=to($i,t,i,o,u,d),!0;case"dragenter":return Ki=to(Ki,t,i,o,u,d),!0;case"mouseover":return Zi=to(Zi,t,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return Js.set(p,to(Js.get(p)||null,t,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,eo.set(p,to(eo.get(p)||null,t,i,o,u,d)),!0}return!1}function Td(t){var i=Cr(t.target);if(i!==null){var o=fi(i);if(o!==null){if(i=o.tag,i===13){if(i=Qo(o),i!==null){t.blockedOn=i,Md(t.priority,function(){Sd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=tu(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var u=new o.constructor(o.type,o);rt=u,o.target.dispatchEvent(u),rt=null}else return i=go(o),i!==null&&Ql(i),t.blockedOn=o,!1;i.shift()}return!0}function wd(t,i,o){ra(t)&&o.delete(i)}function $g(){Jl=!1,$i!==null&&ra($i)&&($i=null),Ki!==null&&ra(Ki)&&(Ki=null),Zi!==null&&ra(Zi)&&(Zi=null),Js.forEach(wd),eo.forEach(wd)}function no(t,i){t.blockedOn===i&&(t.blockedOn=null,Jl||(Jl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$g)))}function io(t){function i(d){return no(d,t)}if(0<ia.length){no(ia[0],t);for(var o=1;o<ia.length;o++){var u=ia[o];u.blockedOn===t&&(u.blockedOn=null)}}for($i!==null&&no($i,t),Ki!==null&&no(Ki,t),Zi!==null&&no(Zi,t),Js.forEach(i),eo.forEach(i),o=0;o<Qi.length;o++)u=Qi[o],u.blockedOn===t&&(u.blockedOn=null);for(;0<Qi.length&&(o=Qi[0],o.blockedOn===null);)Td(o),o.blockedOn===null&&Qi.shift()}var rs=A.ReactCurrentBatchConfig,sa=!0;function Kg(t,i,o,u){var d=St,p=rs.transition;rs.transition=null;try{St=1,eu(t,i,o,u)}finally{St=d,rs.transition=p}}function Zg(t,i,o,u){var d=St,p=rs.transition;rs.transition=null;try{St=4,eu(t,i,o,u)}finally{St=d,rs.transition=p}}function eu(t,i,o,u){if(sa){var d=tu(t,i,o,u);if(d===null)vu(t,i,u,oa,o),Ed(t,u);else if(Yg(d,t,i,o,u))u.stopPropagation();else if(Ed(t,u),i&4&&-1<qg.indexOf(t)){for(;d!==null;){var p=go(d);if(p!==null&&xd(p),p=tu(t,i,o,u),p===null&&vu(t,i,u,oa,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else vu(t,i,u,null,o)}}var oa=null;function tu(t,i,o,u){if(oa=null,t=G(u),t=Cr(t),t!==null)if(i=fi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=Qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return oa=t,null}function Ad(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case Ee:return 1;case Pe:return 4;case Oe:case Fe:return 16;case it:return 536870912;default:return 16}default:return 16}}var Ji=null,nu=null,aa=null;function Rd(){if(aa)return aa;var t,i=nu,o=i.length,u,d="value"in Ji?Ji.value:Ji.textContent,p=d.length;for(t=0;t<o&&i[t]===d[t];t++);var T=o-t;for(u=1;u<=T&&i[o-u]===d[p-u];u++);return aa=d.slice(t,1<u?1-u:void 0)}function la(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ua(){return!0}function Cd(){return!1}function Fn(t){function i(o,u,d,p,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ua:Cd,this.isPropagationStopped=Cd,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Fn(ss),ro=re({},ss,{view:0,detail:0}),Qg=Fn(ro),ru,su,so,ca=re({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(ru=t.screenX-so.screenX,su=t.screenY-so.screenY):su=ru=0,so=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),bd=Fn(ca),Jg=re({},ca,{dataTransfer:0}),e_=Fn(Jg),t_=re({},ro,{relatedTarget:0}),ou=Fn(t_),n_=re({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=Fn(n_),r_=re({},ss,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s_=Fn(r_),o_=re({},ss,{data:0}),Pd=Fn(o_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=u_[t])?!!i[t]:!1}function au(){return c_}var f_=re({},ro,{key:function(t){if(t.key){var i=a_[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d_=Fn(f_),h_=re({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=Fn(h_),p_=re({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),m_=Fn(p_),g_=re({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Fn(g_),v_=re({},ca,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Fn(v_),S_=[9,13,27,32],lu=f&&"CompositionEvent"in window,oo=null;f&&"documentMode"in document&&(oo=document.documentMode);var y_=f&&"TextEvent"in window&&!oo,Ld=f&&(!lu||oo&&8<oo&&11>=oo),Id=" ",Nd=!1;function Ud(t,i){switch(t){case"keyup":return S_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function M_(t,i){switch(t){case"compositionend":return Fd(i);case"keypress":return i.which!==32?null:(Nd=!0,Id);case"textInput":return t=i.data,t===Id&&Nd?null:t;default:return null}}function E_(t,i){if(os)return t==="compositionend"||!lu&&Ud(t,i)?(t=Rd(),aa=nu=Ji=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ld&&i.locale!=="ko"?null:i.data;default:return null}}var T_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!T_[t.type]:i==="textarea"}function kd(t,i,o,u){he(u),i=ma(i,"onChange"),0<i.length&&(o=new iu("onChange","change",null,o,u),t.push({event:o,listeners:i}))}var ao=null,lo=null;function w_(t){nh(t,0)}function fa(t){var i=fs(t);if(It(i))return t}function A_(t,i){if(t==="change")return i}var Bd=!1;if(f){var uu;if(f){var cu="oninput"in document;if(!cu){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),cu=typeof zd.oninput=="function"}uu=cu}else uu=!1;Bd=uu&&(!document.documentMode||9<document.documentMode)}function Vd(){ao&&(ao.detachEvent("onpropertychange",Hd),lo=ao=null)}function Hd(t){if(t.propertyName==="value"&&fa(lo)){var i=[];kd(i,lo,t,G(t)),wn(w_,i)}}function R_(t,i,o){t==="focusin"?(Vd(),ao=i,lo=o,ao.attachEvent("onpropertychange",Hd)):t==="focusout"&&Vd()}function C_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fa(lo)}function b_(t,i){if(t==="click")return fa(i)}function P_(t,i){if(t==="input"||t==="change")return fa(i)}function D_(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Qn=typeof Object.is=="function"?Object.is:D_;function uo(t,i){if(Qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!Qn(t[d],i[d]))return!1}return!0}function Gd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wd(t,i){var o=Gd(t);t=0;for(var u;o;){if(o.nodeType===3){if(u=t+o.textContent.length,t<=i&&u>=i)return{node:o,offset:i-t};t=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Gd(o)}}function Xd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Xd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function jd(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ht(t.document)}return i}function fu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function L_(t){var i=jd(),o=t.focusedElem,u=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Xd(o.ownerDocument.documentElement,o)){if(u!==null&&fu(o)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!t.extend&&p>u&&(d=u,u=p,p=d),d=Wd(o,p);var T=Wd(o,u);d&&T&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I_=f&&"documentMode"in document&&11>=document.documentMode,as=null,du=null,co=null,hu=!1;function qd(t,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;hu||as==null||as!==ht(u)||(u=as,"selectionStart"in u&&fu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),co&&uo(co,u)||(co=u,u=ma(du,"onSelect"),0<u.length&&(i=new iu("onSelect","select",null,i,o),t.push({event:i,listeners:u}),i.target=as)))}function da(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var ls={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},pu={},Yd={};f&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ha(t){if(pu[t])return pu[t];if(!ls[t])return t;var i=ls[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Yd)return pu[t]=i[o];return t}var $d=ha("animationend"),Kd=ha("animationiteration"),Zd=ha("animationstart"),Qd=ha("transitionend"),Jd=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,i){Jd.set(t,i),l(i,[t])}for(var mu=0;mu<eh.length;mu++){var gu=eh[mu],N_=gu.toLowerCase(),U_=gu[0].toUpperCase()+gu.slice(1);er(N_,"on"+U_)}er($d,"onAnimationEnd"),er(Kd,"onAnimationIteration"),er(Zd,"onAnimationStart"),er("dblclick","onDoubleClick"),er("focusin","onFocus"),er("focusout","onBlur"),er(Qd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function th(t,i,o){var u=t.type||"unknown-event";t.currentTarget=o,Zo(u,i,void 0,t),t.currentTarget=null}function nh(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var u=t[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var T=u.length-1;0<=T;T--){var I=u[T],z=I.instance,ee=I.currentTarget;if(I=I.listener,z!==p&&d.isPropagationStopped())break e;th(d,I,ee),p=z}else for(T=0;T<u.length;T++){if(I=u[T],z=I.instance,ee=I.currentTarget,I=I.listener,z!==p&&d.isPropagationStopped())break e;th(d,I,ee),p=z}}}if(Rr)throw t=qi,Rr=!1,qi=null,t}function Ft(t,i){var o=i[Tu];o===void 0&&(o=i[Tu]=new Set);var u=t+"__bubble";o.has(u)||(ih(i,t,2,!1),o.add(u))}function _u(t,i,o){var u=0;i&&(u|=4),ih(o,t,u,i)}var pa="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[pa]){t[pa]=!0,r.forEach(function(o){o!=="selectionchange"&&(F_.has(o)||_u(o,!1,t),_u(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[pa]||(i[pa]=!0,_u("selectionchange",!1,i))}}function ih(t,i,o,u){switch(Ad(i)){case 1:var d=Kg;break;case 4:d=Zg;break;default:d=eu}o=d.bind(null,i,o,t),d=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function vu(t,i,o,u,d){var p=u;if(!(i&1)&&!(i&2)&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Cr(I),T===null)return;if(z=T.tag,z===5||z===6){u=p=T;continue e}I=I.parentNode}}u=u.return}wn(function(){var ee=p,ve=G(o),ye=[];e:{var me=Jd.get(t);if(me!==void 0){var Ie=iu,He=t;switch(t){case"keypress":if(la(o)===0)break e;case"keydown":case"keyup":Ie=d_;break;case"focusin":He="focus",Ie=ou;break;case"focusout":He="blur",Ie=ou;break;case"beforeblur":case"afterblur":Ie=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=m_;break;case $d:case Kd:case Zd:Ie=i_;break;case Qd:Ie=__;break;case"scroll":Ie=Qg;break;case"wheel":Ie=x_;break;case"copy":case"cut":case"paste":Ie=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Dd}var Ge=(i&4)!==0,jt=!Ge&&t==="scroll",q=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var W=ee,$;W!==null;){$=W;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=Sn(W,q),Te!=null&&Ge.push(po(W,Te,$)))),jt)break;W=W.return}0<Ge.length&&(me=new Ie(me,He,null,o,ve),ye.push({event:me,listeners:Ge}))}}if(!(i&7)){e:{if(me=t==="mouseover"||t==="pointerover",Ie=t==="mouseout"||t==="pointerout",me&&o!==rt&&(He=o.relatedTarget||o.fromElement)&&(Cr(He)||He[wi]))break e;if((Ie||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Ie?(He=o.relatedTarget||o.toElement,Ie=ee,He=He?Cr(He):null,He!==null&&(jt=fi(He),He!==jt||He.tag!==5&&He.tag!==6)&&(He=null)):(Ie=null,He=ee),Ie!==He)){if(Ge=bd,Te="onMouseLeave",q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ge=Dd,Te="onPointerLeave",q="onPointerEnter",W="pointer"),jt=Ie==null?me:fs(Ie),$=He==null?me:fs(He),me=new Ge(Te,W+"leave",Ie,o,ve),me.target=jt,me.relatedTarget=$,Te=null,Cr(ve)===ee&&(Ge=new Ge(q,W+"enter",He,o,ve),Ge.target=$,Ge.relatedTarget=jt,Te=Ge),jt=Te,Ie&&He)t:{for(Ge=Ie,q=He,W=0,$=Ge;$;$=us($))W++;for($=0,Te=q;Te;Te=us(Te))$++;for(;0<W-$;)Ge=us(Ge),W--;for(;0<$-W;)q=us(q),$--;for(;W--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=us(Ge),q=us(q)}Ge=null}else Ge=null;Ie!==null&&rh(ye,me,Ie,Ge,!1),He!==null&&jt!==null&&rh(ye,jt,He,Ge,!0)}}e:{if(me=ee?fs(ee):window,Ie=me.nodeName&&me.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&me.type==="file")var je=A_;else if(Od(me))if(Bd)je=P_;else{je=C_;var Je=R_}else(Ie=me.nodeName)&&Ie.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=b_);if(je&&(je=je(t,ee))){kd(ye,je,o,ve);break e}Je&&Je(t,me,ee),t==="focusout"&&(Je=me._wrapperState)&&Je.controlled&&me.type==="number"&&pt(me,"number",me.value)}switch(Je=ee?fs(ee):window,t){case"focusin":(Od(Je)||Je.contentEditable==="true")&&(as=Je,du=ee,co=null);break;case"focusout":co=du=as=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,qd(ye,o,ve);break;case"selectionchange":if(I_)break;case"keydown":case"keyup":qd(ye,o,ve)}var et;if(lu)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else os?Ud(t,o)&&(ot="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Ld&&o.locale!=="ko"&&(os||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&os&&(et=Rd()):(Ji=ve,nu="value"in Ji?Ji.value:Ji.textContent,os=!0)),Je=ma(ee,ot),0<Je.length&&(ot=new Pd(ot,t,null,o,ve),ye.push({event:ot,listeners:Je}),et?ot.data=et:(et=Fd(o),et!==null&&(ot.data=et)))),(et=y_?M_(t,o):E_(t,o))&&(ee=ma(ee,"onBeforeInput"),0<ee.length&&(ve=new Pd("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:ee}),ve.data=et))}nh(ye,i)})}function po(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ma(t,i){for(var o=i+"Capture",u=[];t!==null;){var d=t,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Sn(t,o),p!=null&&u.unshift(po(t,p,d)),p=Sn(t,i),p!=null&&u.push(po(t,p,d))),t=t.return}return u}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rh(t,i,o,u,d){for(var p=i._reactName,T=[];o!==null&&o!==u;){var I=o,z=I.alternate,ee=I.stateNode;if(z!==null&&z===u)break;I.tag===5&&ee!==null&&(I=ee,d?(z=Sn(o,p),z!=null&&T.unshift(po(o,z,I))):d||(z=Sn(o,p),z!=null&&T.push(po(o,z,I)))),o=o.return}T.length!==0&&t.push({event:i,listeners:T})}var O_=/\r\n?/g,k_=/\u0000|\uFFFD/g;function sh(t){return(typeof t=="string"?t:""+t).replace(O_,`
`).replace(k_,"")}function ga(t,i,o){if(i=sh(i),sh(t)!==i&&o)throw Error(n(425))}function _a(){}var xu=null,Su=null;function yu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,oh=typeof Promise=="function"?Promise:void 0,z_=typeof queueMicrotask=="function"?queueMicrotask:typeof oh<"u"?function(t){return oh.resolve(null).then(t).catch(V_)}:Mu;function V_(t){setTimeout(function(){throw t})}function Eu(t,i){var o=i,u=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){t.removeChild(d),io(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);io(i)}function tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function ah(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var cs=Math.random().toString(36).slice(2),hi="__reactFiber$"+cs,mo="__reactProps$"+cs,wi="__reactContainer$"+cs,Tu="__reactEvents$"+cs,H_="__reactListeners$"+cs,G_="__reactHandles$"+cs;function Cr(t){var i=t[hi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[hi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=ah(t);t!==null;){if(o=t[hi])return o;t=ah(t)}return i}t=o,o=t.parentNode}return null}function go(t){return t=t[hi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function fs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function va(t){return t[mo]||null}var wu=[],ds=-1;function nr(t){return{current:t}}function Ot(t){0>ds||(t.current=wu[ds],wu[ds]=null,ds--)}function Nt(t,i){ds++,wu[ds]=t.current,t.current=i}var ir={},pn=nr(ir),An=nr(!1),br=ir;function hs(t,i){var o=t.type.contextTypes;if(!o)return ir;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(t){return t=t.childContextTypes,t!=null}function xa(){Ot(An),Ot(pn)}function lh(t,i,o){if(pn.current!==ir)throw Error(n(168));Nt(pn,i),Nt(An,o)}function uh(t,i,o){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(n(108,Se(t)||"Unknown",d));return re({},o,u)}function Sa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,br=pn.current,Nt(pn,t),Nt(An,An.current),!0}function ch(t,i,o){var u=t.stateNode;if(!u)throw Error(n(169));o?(t=uh(t,i,br),u.__reactInternalMemoizedMergedChildContext=t,Ot(An),Ot(pn),Nt(pn,t)):Ot(An),Nt(An,o)}var Ai=null,ya=!1,Au=!1;function fh(t){Ai===null?Ai=[t]:Ai.push(t)}function W_(t){ya=!0,fh(t)}function rr(){if(!Au&&Ai!==null){Au=!0;var t=0,i=St;try{var o=Ai;for(St=1;t<o.length;t++){var u=o[t];do u=u(!0);while(u!==null)}Ai=null,ya=!1}catch(d){throw Ai!==null&&(Ai=Ai.slice(t+1)),na(Ee,rr),d}finally{St=i,Au=!1}}return null}var ps=[],ms=0,Ma=null,Ea=0,Gn=[],Wn=0,Pr=null,Ri=1,Ci="";function Dr(t,i){ps[ms++]=Ea,ps[ms++]=Ma,Ma=t,Ea=i}function dh(t,i,o){Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=Pr,Pr=t;var u=Ri;t=Ci;var d=32-lt(u)-1;u&=~(1<<d),o+=1;var p=32-lt(i)+d;if(30<p){var T=d-d%5;p=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Ri=1<<32-lt(i)+d|o<<d|u,Ci=p+t}else Ri=1<<p|o<<d|u,Ci=t}function Ru(t){t.return!==null&&(Dr(t,1),dh(t,1,0))}function Cu(t){for(;t===Ma;)Ma=ps[--ms],ps[ms]=null,Ea=ps[--ms],ps[ms]=null;for(;t===Pr;)Pr=Gn[--Wn],Gn[Wn]=null,Ci=Gn[--Wn],Gn[Wn]=null,Ri=Gn[--Wn],Gn[Wn]=null}var On=null,kn=null,Bt=!1,Jn=null;function hh(t,i){var o=Yn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function ph(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,On=t,kn=tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,On=t,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Yn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,On=t,kn=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pu(t){if(Bt){var i=kn;if(i){var o=i;if(!ph(t,i)){if(bu(t))throw Error(n(418));i=tr(o.nextSibling);var u=On;i&&ph(t,i)?hh(u,o):(t.flags=t.flags&-4097|2,Bt=!1,On=t)}}else{if(bu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Bt=!1,On=t}}}function mh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Ta(t){if(t!==On)return!1;if(!Bt)return mh(t),Bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!yu(t.type,t.memoizedProps)),i&&(i=kn)){if(bu(t))throw gh(),Error(n(418));for(;i;)hh(t,i),i=tr(i.nextSibling)}if(mh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){kn=tr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}kn=null}}else kn=On?tr(t.stateNode.nextSibling):null;return!0}function gh(){for(var t=kn;t;)t=tr(t.nextSibling)}function gs(){kn=On=null,Bt=!1}function Du(t){Jn===null?Jn=[t]:Jn.push(t)}var X_=A.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var u=o.stateNode}if(!u)throw Error(n(147,t));var d=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var I=d.refs;T===null?delete I[p]:I[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function wa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function _h(t){var i=t._init;return i(t._payload)}function vh(t){function i(q,W){if(t){var $=q.deletions;$===null?(q.deletions=[W],q.flags|=16):$.push(W)}}function o(q,W){if(!t)return null;for(;W!==null;)i(q,W),W=W.sibling;return null}function u(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function d(q,W){return q=dr(q,W),q.index=0,q.sibling=null,q}function p(q,W,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<W?(q.flags|=2,W):$):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return t&&q.alternate===null&&(q.flags|=2),q}function I(q,W,$,Te){return W===null||W.tag!==6?(W=Mc($,q.mode,Te),W.return=q,W):(W=d(W,$),W.return=q,W)}function z(q,W,$,Te){var je=$.type;return je===U?ve(q,W,$.props.children,Te,$.key):W!==null&&(W.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&_h(je)===W.type)?(Te=d(W,$.props),Te.ref=_o(q,W,$),Te.return=q,Te):(Te=$a($.type,$.key,$.props,null,q.mode,Te),Te.ref=_o(q,W,$),Te.return=q,Te)}function ee(q,W,$,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=Ec($,q.mode,Te),W.return=q,W):(W=d(W,$.children||[]),W.return=q,W)}function ve(q,W,$,Te,je){return W===null||W.tag!==7?(W=Br($,q.mode,Te,je),W.return=q,W):(W=d(W,$),W.return=q,W)}function ye(q,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Mc(""+W,q.mode,$),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return $=$a(W.type,W.key,W.props,null,q.mode,$),$.ref=_o(q,null,W),$.return=q,$;case N:return W=Ec(W,q.mode,$),W.return=q,W;case se:var Te=W._init;return ye(q,Te(W._payload),$)}if($e(W)||ae(W))return W=Br(W,q.mode,$,null),W.return=q,W;wa(q,W)}return null}function me(q,W,$,Te){var je=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return je!==null?null:I(q,W,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case F:return $.key===je?z(q,W,$,Te):null;case N:return $.key===je?ee(q,W,$,Te):null;case se:return je=$._init,me(q,W,je($._payload),Te)}if($e($)||ae($))return je!==null?null:ve(q,W,$,Te,null);wa(q,$)}return null}function Ie(q,W,$,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,I(W,q,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case F:return q=q.get(Te.key===null?$:Te.key)||null,z(W,q,Te,je);case N:return q=q.get(Te.key===null?$:Te.key)||null,ee(W,q,Te,je);case se:var Je=Te._init;return Ie(q,W,$,Je(Te._payload),je)}if($e(Te)||ae(Te))return q=q.get($)||null,ve(W,q,Te,je,null);wa(W,Te)}return null}function He(q,W,$,Te){for(var je=null,Je=null,et=W,ot=W=0,an=null;et!==null&&ot<$.length;ot++){et.index>ot?(an=et,et=null):an=et.sibling;var Mt=me(q,et,$[ot],Te);if(Mt===null){et===null&&(et=an);break}t&&et&&Mt.alternate===null&&i(q,et),W=p(Mt,W,ot),Je===null?je=Mt:Je.sibling=Mt,Je=Mt,et=an}if(ot===$.length)return o(q,et),Bt&&Dr(q,ot),je;if(et===null){for(;ot<$.length;ot++)et=ye(q,$[ot],Te),et!==null&&(W=p(et,W,ot),Je===null?je=et:Je.sibling=et,Je=et);return Bt&&Dr(q,ot),je}for(et=u(q,et);ot<$.length;ot++)an=Ie(et,q,ot,$[ot],Te),an!==null&&(t&&an.alternate!==null&&et.delete(an.key===null?ot:an.key),W=p(an,W,ot),Je===null?je=an:Je.sibling=an,Je=an);return t&&et.forEach(function(hr){return i(q,hr)}),Bt&&Dr(q,ot),je}function Ge(q,W,$,Te){var je=ae($);if(typeof je!="function")throw Error(n(150));if($=je.call($),$==null)throw Error(n(151));for(var Je=je=null,et=W,ot=W=0,an=null,Mt=$.next();et!==null&&!Mt.done;ot++,Mt=$.next()){et.index>ot?(an=et,et=null):an=et.sibling;var hr=me(q,et,Mt.value,Te);if(hr===null){et===null&&(et=an);break}t&&et&&hr.alternate===null&&i(q,et),W=p(hr,W,ot),Je===null?je=hr:Je.sibling=hr,Je=hr,et=an}if(Mt.done)return o(q,et),Bt&&Dr(q,ot),je;if(et===null){for(;!Mt.done;ot++,Mt=$.next())Mt=ye(q,Mt.value,Te),Mt!==null&&(W=p(Mt,W,ot),Je===null?je=Mt:Je.sibling=Mt,Je=Mt);return Bt&&Dr(q,ot),je}for(et=u(q,et);!Mt.done;ot++,Mt=$.next())Mt=Ie(et,q,ot,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&et.delete(Mt.key===null?ot:Mt.key),W=p(Mt,W,ot),Je===null?je=Mt:Je.sibling=Mt,Je=Mt);return t&&et.forEach(function(Ev){return i(q,Ev)}),Bt&&Dr(q,ot),je}function jt(q,W,$,Te){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case F:e:{for(var je=$.key,Je=W;Je!==null;){if(Je.key===je){if(je=$.type,je===U){if(Je.tag===7){o(q,Je.sibling),W=d(Je,$.props.children),W.return=q,q=W;break e}}else if(Je.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===se&&_h(je)===Je.type){o(q,Je.sibling),W=d(Je,$.props),W.ref=_o(q,Je,$),W.return=q,q=W;break e}o(q,Je);break}else i(q,Je);Je=Je.sibling}$.type===U?(W=Br($.props.children,q.mode,Te,$.key),W.return=q,q=W):(Te=$a($.type,$.key,$.props,null,q.mode,Te),Te.ref=_o(q,W,$),Te.return=q,q=Te)}return T(q);case N:e:{for(Je=$.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){o(q,W.sibling),W=d(W,$.children||[]),W.return=q,q=W;break e}else{o(q,W);break}else i(q,W);W=W.sibling}W=Ec($,q.mode,Te),W.return=q,q=W}return T(q);case se:return Je=$._init,jt(q,W,Je($._payload),Te)}if($e($))return He(q,W,$,Te);if(ae($))return Ge(q,W,$,Te);wa(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(o(q,W.sibling),W=d(W,$),W.return=q,q=W):(o(q,W),W=Mc($,q.mode,Te),W.return=q,q=W),T(q)):o(q,W)}return jt}var _s=vh(!0),xh=vh(!1),Aa=nr(null),Ra=null,vs=null,Lu=null;function Iu(){Lu=vs=Ra=null}function Nu(t){var i=Aa.current;Ot(Aa),t._currentValue=i}function Uu(t,i,o){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===o)break;t=t.return}}function xs(t,i){Ra=t,Lu=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Cn=!0),t.firstContext=null)}function Xn(t){var i=t._currentValue;if(Lu!==t)if(t={context:t,memoizedValue:i,next:null},vs===null){if(Ra===null)throw Error(n(308));vs=t,Ra.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return i}var Lr=null;function Fu(t){Lr===null?Lr=[t]:Lr.push(t)}function Sh(t,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Fu(i)):(o.next=d.next,d.next=o),i.interleaved=o,bi(t,u)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var sr=!1;function Ou(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function or(t,i,o){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,yt&2){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,bi(t,o)}return d=u.interleaved,d===null?(i.next=i,Fu(u)):(i.next=d.next,d.next=i),u.interleaved=i,bi(t,o)}function Ca(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}function Mh(t,i){var o=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=T:p=p.next=T,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function ba(t,i,o,u){var d=t.updateQueue;sr=!1;var p=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,ee=z.next;z.next=null,T===null?p=ee:T.next=ee,T=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==T&&(I===null?ve.firstBaseUpdate=ee:I.next=ee,ve.lastBaseUpdate=z))}if(p!==null){var ye=d.baseState;T=0,ve=ee=z=null,I=p;do{var me=I.lane,Ie=I.eventTime;if((u&me)===me){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var He=t,Ge=I;switch(me=i,Ie=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(Ie,ye,me);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,me=typeof He=="function"?He.call(Ie,ye,me):He,me==null)break e;ye=re({},ye,me);break e;case 2:sr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,me=d.effects,me===null?d.effects=[I]:me.push(I))}else Ie={eventTime:Ie,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ee=ve=Ie,z=ye):ve=ve.next=Ie,T|=me;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;me=I,I=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ve===null&&(z=ye),d.baseState=z,d.firstBaseUpdate=ee,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Ur|=T,t.lanes=T,t.memoizedState=ye}}function Eh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(n(191,d));d.call(u)}}}var vo={},pi=nr(vo),xo=nr(vo),So=nr(vo);function Ir(t){if(t===vo)throw Error(n(174));return t}function ku(t,i){switch(Nt(So,i),Nt(xo,t),Nt(pi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Ot(pi),Nt(pi,i)}function Ss(){Ot(pi),Ot(xo),Ot(So)}function Th(t){Ir(So.current);var i=Ir(pi.current),o=pe(i,t.type);i!==o&&(Nt(xo,t),Nt(pi,o))}function Bu(t){xo.current===t&&(Ot(pi),Ot(xo))}var Vt=nr(0);function Pa(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var zu=[];function Vu(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var Da=A.ReactCurrentDispatcher,Hu=A.ReactCurrentBatchConfig,Nr=0,Ht=null,Zt=null,sn=null,La=!1,yo=!1,Mo=0,j_=0;function mn(){throw Error(n(321))}function Gu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Qn(t[o],i[o]))return!1;return!0}function Wu(t,i,o,u,d,p){if(Nr=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Da.current=t===null||t.memoizedState===null?K_:Z_,t=o(u,d),yo){p=0;do{if(yo=!1,Mo=0,25<=p)throw Error(n(301));p+=1,sn=Zt=null,i.updateQueue=null,Da.current=Q_,t=o(u,d)}while(yo)}if(Da.current=Ua,i=Zt!==null&&Zt.next!==null,Nr=0,sn=Zt=Ht=null,La=!1,i)throw Error(n(300));return t}function Xu(){var t=Mo!==0;return Mo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ht.memoizedState=sn=t:sn=sn.next=t,sn}function jn(){if(Zt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var i=sn===null?Ht.memoizedState:sn.next;if(i!==null)sn=i,Zt=t;else{if(t===null)throw Error(n(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Ht.memoizedState=sn=t:sn=sn.next=t}return sn}function Eo(t,i){return typeof i=="function"?i(t):i}function ju(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=Zt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var T=d.next;d.next=p.next,p.next=T}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var I=T=null,z=null,ee=p;do{var ve=ee.lane;if((Nr&ve)===ve)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:t(u,ee.action);else{var ye={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(I=z=ye,T=u):z=z.next=ye,Ht.lanes|=ve,Ur|=ve}ee=ee.next}while(ee!==null&&ee!==p);z===null?T=u:z.next=I,Qn(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=z,o.lastRenderedState=u}if(t=o.interleaved,t!==null){d=t;do p=d.lane,Ht.lanes|=p,Ur|=p,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function qu(t){var i=jn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do p=t(p,T.action),T=T.next;while(T!==d);Qn(p,i.memoizedState)||(Cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function wh(){}function Ah(t,i){var o=Ht,u=jn(),d=i(),p=!Qn(u.memoizedState,d);if(p&&(u.memoizedState=d,Cn=!0),u=u.queue,Yu(bh.bind(null,o,u,t),[t]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,To(9,Ch.bind(null,o,u,d,i),void 0,null),on===null)throw Error(n(349));Nr&30||Rh(o,i,d)}return d}function Rh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Ch(t,i,o,u){i.value=o,i.getSnapshot=u,Ph(i)&&Dh(t)}function bh(t,i,o){return o(function(){Ph(i)&&Dh(t)})}function Ph(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Qn(t,o)}catch{return!0}}function Dh(t){var i=bi(t,1);i!==null&&ii(i,t,1,-1)}function Lh(t){var i=mi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=$_.bind(null,Ht,t),[i.memoizedState,t]}function To(t,i,o,u){return t={tag:t,create:i,destroy:o,deps:u,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(u=o.next,o.next=t,t.next=u,i.lastEffect=t)),t}function Ih(){return jn().memoizedState}function Ia(t,i,o,u){var d=mi();Ht.flags|=t,d.memoizedState=To(1|i,o,void 0,u===void 0?null:u)}function Na(t,i,o,u){var d=jn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var T=Zt.memoizedState;if(p=T.destroy,u!==null&&Gu(u,T.deps)){d.memoizedState=To(i,o,p,u);return}}Ht.flags|=t,d.memoizedState=To(1|i,o,p,u)}function Nh(t,i){return Ia(8390656,8,t,i)}function Yu(t,i){return Na(2048,8,t,i)}function Uh(t,i){return Na(4,2,t,i)}function Fh(t,i){return Na(4,4,t,i)}function Oh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function kh(t,i,o){return o=o!=null?o.concat([t]):null,Na(4,4,Oh.bind(null,i,t),o)}function $u(){}function Bh(t,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(o.memoizedState=[t,i],t)}function zh(t,i){var o=jn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Gu(i,u[1])?u[0]:(t=t(),o.memoizedState=[t,i],t)}function Vh(t,i,o){return Nr&21?(Qn(o,i)||(o=Lt(),Ht.lanes|=o,Ur|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o)}function q_(t,i){var o=St;St=o!==0&&4>o?o:4,t(!0);var u=Hu.transition;Hu.transition={};try{t(!1),i()}finally{St=o,Hu.transition=u}}function Hh(){return jn().memoizedState}function Y_(t,i,o){var u=cr(t);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Gh(t))Wh(i,o);else if(o=Sh(t,i,o,u),o!==null){var d=En();ii(o,t,u,d),Xh(o,i,u)}}function $_(t,i,o){var u=cr(t),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Gh(t))Wh(i,d);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,I=p(T,o);if(d.hasEagerState=!0,d.eagerState=I,Qn(I,T)){var z=i.interleaved;z===null?(d.next=d,Fu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}o=Sh(t,i,d,u),o!==null&&(d=En(),ii(o,t,u,d),Xh(o,i,u))}}function Gh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Wh(t,i){yo=La=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Xh(t,i,o){if(o&4194240){var u=i.lanes;u&=t.pendingLanes,o|=u,i.lanes=o,rn(t,o)}}var Ua={readContext:Xn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},K_={readContext:Xn,useCallback:function(t,i){return mi().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:Nh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ia(4194308,4,Oh.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ia(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ia(4,2,t,i)},useMemo:function(t,i){var o=mi();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var u=mi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=Y_.bind(null,Ht,t),[u.memoizedState,t]},useRef:function(t){var i=mi();return t={current:t},i.memoizedState=t},useState:Lh,useDebugValue:$u,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Lh(!1),i=t[0];return t=q_.bind(null,t[1]),mi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var u=Ht,d=mi();if(Bt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),on===null)throw Error(n(349));Nr&30||Rh(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Nh(bh.bind(null,u,p,t),[t]),u.flags|=2048,To(9,Ch.bind(null,u,p,o,i),void 0,null),o},useId:function(){var t=mi(),i=on.identifierPrefix;if(Bt){var o=Ci,u=Ri;o=(u&~(1<<32-lt(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=j_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Z_={readContext:Xn,useCallback:Bh,useContext:Xn,useEffect:Yu,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:ju,useRef:Ih,useState:function(){return ju(Eo)},useDebugValue:$u,useDeferredValue:function(t){var i=jn();return Vh(i,Zt.memoizedState,t)},useTransition:function(){var t=ju(Eo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1},Q_={readContext:Xn,useCallback:Bh,useContext:Xn,useEffect:Yu,useImperativeHandle:kh,useInsertionEffect:Uh,useLayoutEffect:Fh,useMemo:zh,useReducer:qu,useRef:Ih,useState:function(){return qu(Eo)},useDebugValue:$u,useDeferredValue:function(t){var i=jn();return Zt===null?i.memoizedState=t:Vh(i,Zt.memoizedState,t)},useTransition:function(){var t=qu(Eo)[0],i=jn().memoizedState;return[t,i]},useMutableSource:wh,useSyncExternalStore:Ah,useId:Hh,unstable_isNewReconciler:!1};function ei(t,i){if(t&&t.defaultProps){i=re({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Ku(t,i,o,u){i=t.memoizedState,o=o(u,i),o=o==null?i:re({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Fa={isMounted:function(t){return(t=t._reactInternals)?fi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var u=En(),d=cr(t),p=Pi(u,d);p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(ii(i,t,d,u),Ca(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var u=En(),d=cr(t),p=Pi(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=or(t,p,d),i!==null&&(ii(i,t,d,u),Ca(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=En(),u=cr(t),d=Pi(o,u);d.tag=2,i!=null&&(d.callback=i),i=or(t,d,u),i!==null&&(ii(i,t,u,o),Ca(i,t,u))}};function jh(t,i,o,u,d,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,T):i.prototype&&i.prototype.isPureReactComponent?!uo(o,u)||!uo(d,p):!0}function qh(t,i,o){var u=!1,d=ir,p=i.contextType;return typeof p=="object"&&p!==null?p=Xn(p):(d=Rn(i)?br:pn.current,u=i.contextTypes,p=(u=u!=null)?hs(t,d):ir),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Fa,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=p),i}function Yh(t,i,o,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==t&&Fa.enqueueReplaceState(i,i.state,null)}function Zu(t,i,o,u){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},Ou(t);var p=i.contextType;typeof p=="object"&&p!==null?d.context=Xn(p):(p=Rn(i)?br:pn.current,d.context=hs(t,p)),d.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ku(t,i,p,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Fa.enqueueReplaceState(d,d.state,null),ba(t,o,d,u),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,i){try{var o="",u=i;do o+=de(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:d,digest:null}}function Qu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Ju(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function $h(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){Ga||(Ga=!0,pc=u),Ju(t,i)},o}function Kh(t,i,o){o=Pi(-1,o),o.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Ju(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Ju(t,i),typeof u!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function Zh(t,i,o){var u=t.pingCache;if(u===null){u=t.pingCache=new J_;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),t=hv.bind(null,t,i,o),i.then(t,t))}function Qh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Jh(t,i,o,u,d){return t.mode&1?(t.flags|=65536,t.lanes=d,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,or(o,i,1))),o.lanes|=1),t)}var ev=A.ReactCurrentOwner,Cn=!1;function Mn(t,i,o,u){i.child=t===null?xh(i,null,o,u):_s(i,t.child,o,u)}function ep(t,i,o,u,d){o=o.render;var p=i.ref;return xs(i,d),u=Wu(t,i,o,u,p,d),o=Xu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Di(t,i,d)):(Bt&&o&&Ru(i),i.flags|=1,Mn(t,i,u,d),i.child)}function tp(t,i,o,u,d){if(t===null){var p=o.type;return typeof p=="function"&&!yc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,np(t,i,p,u,d)):(t=$a(o.type,null,u,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!(t.lanes&d)){var T=p.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(T,u)&&t.ref===i.ref)return Di(t,i,d)}return i.flags|=1,t=dr(p,u),t.ref=i.ref,t.return=i,i.child=t}function np(t,i,o,u,d){if(t!==null){var p=t.memoizedProps;if(uo(p,u)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=u=p,(t.lanes&d)!==0)t.flags&131072&&(Cn=!0);else return i.lanes=t.lanes,Di(t,i,d)}return ec(t,i,o,u,d)}function ip(t,i,o){var u=i.pendingProps,d=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Es,Bn),Bn|=o;else{if(!(o&1073741824))return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(Es,Bn),Bn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,Nt(Es,Bn),Bn|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,Nt(Es,Bn),Bn|=u;return Mn(t,i,d,o),i.child}function rp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ec(t,i,o,u,d){var p=Rn(o)?br:pn.current;return p=hs(i,p),xs(i,d),o=Wu(t,i,o,u,p,d),u=Xu(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,Di(t,i,d)):(Bt&&u&&Ru(i),i.flags|=1,Mn(t,i,o,d),i.child)}function sp(t,i,o,u,d){if(Rn(o)){var p=!0;Sa(i)}else p=!1;if(xs(i,d),i.stateNode===null)ka(t,i),qh(i,o,u),Zu(i,o,u,d),u=!0;else if(t===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var z=T.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=Xn(ee):(ee=Rn(o)?br:pn.current,ee=hs(i,ee));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||z!==ee)&&Yh(i,T,u,ee),sr=!1;var me=i.memoizedState;T.state=me,ba(i,u,T,d),z=i.memoizedState,I!==u||me!==z||An.current||sr?(typeof ve=="function"&&(Ku(i,o,ve,u),z=i.memoizedState),(I=sr||jh(i,o,I,u,me,z,ee))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),T.props=u,T.state=z,T.context=ee,u=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,yh(t,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ei(i.type,I),T.props=ee,ye=i.pendingProps,me=T.context,z=o.contextType,typeof z=="object"&&z!==null?z=Xn(z):(z=Rn(o)?br:pn.current,z=hs(i,z));var Ie=o.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==z)&&Yh(i,T,u,z),sr=!1,me=i.memoizedState,T.state=me,ba(i,u,T,d);var He=i.memoizedState;I!==ye||me!==He||An.current||sr?(typeof Ie=="function"&&(Ku(i,o,Ie,u),He=i.memoizedState),(ee=sr||jh(i,o,ee,u,me,He,z)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,He,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,He,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),T.props=u,T.state=He,T.context=z,u=ee):(typeof T.componentDidUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),u=!1)}return tc(t,i,o,u,p,d)}function tc(t,i,o,u,d,p){rp(t,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&ch(i,o,!1),Di(t,i,p);u=i.stateNode,ev.current=i;var I=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&T?(i.child=_s(i,t.child,null,p),i.child=_s(i,null,I,p)):Mn(t,i,I,p),i.memoizedState=u.state,d&&ch(i,o,!0),i.child}function op(t){var i=t.stateNode;i.pendingContext?lh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&lh(t,i.context,!1),ku(t,i.containerInfo)}function ap(t,i,o,u,d){return gs(),Du(d),i.flags|=256,Mn(t,i,o,u),i.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function lp(t,i,o){var u=i.pendingProps,d=Vt.current,p=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=t!==null&&t.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Nt(Vt,d&1),t===null)return Pu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(T=u.children,t=u.fallback,p?(u=i.mode,p=i.child,T={mode:"hidden",children:T},!(u&1)&&p!==null?(p.childLanes=0,p.pendingProps=T):p=Ka(T,u,0,null),t=Br(t,u,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ic(o),i.memoizedState=nc,t):rc(i,T));if(d=t.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return tv(t,i,T,u,I,d,o);if(p){p=u.fallback,T=i.mode,d=t.child,I=d.sibling;var z={mode:"hidden",children:u.children};return!(T&1)&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=dr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=dr(I,p):(p=Br(p,T,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,T=t.child.memoizedState,T=T===null?ic(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~o,i.memoizedState=nc,u}return p=t.child,t=p.sibling,u=dr(p,{mode:"visible",children:u.children}),!(i.mode&1)&&(u.lanes=o),u.return=i,u.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=u,i.memoizedState=null,u}function rc(t,i){return i=Ka({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Oa(t,i,o,u){return u!==null&&Du(u),_s(i,t.child,null,o),t=rc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function tv(t,i,o,u,d,p,T){if(o)return i.flags&256?(i.flags&=-257,u=Qu(Error(n(422))),Oa(t,i,T,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Ka({mode:"visible",children:u.children},d,0,null),p=Br(p,d,T,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,i.mode&1&&_s(i,t.child,null,T),i.child.memoizedState=ic(T),i.memoizedState=nc,p);if(!(i.mode&1))return Oa(t,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,p=Error(n(419)),u=Qu(p,u,void 0),Oa(t,i,T,u)}if(I=(T&t.childLanes)!==0,Cn||I){if(u=on,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(u.suspendedLanes|T)?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,bi(t,d),ii(u,t,d,-1))}return Sc(),u=Qu(Error(n(421))),Oa(t,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=pv.bind(null,t),d._reactRetry=i,null):(t=p.treeContext,kn=tr(d.nextSibling),On=i,Bt=!0,Jn=null,t!==null&&(Gn[Wn++]=Ri,Gn[Wn++]=Ci,Gn[Wn++]=Pr,Ri=t.id,Ci=t.overflow,Pr=i),i=rc(i,u.children),i.flags|=4096,i)}function up(t,i,o){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Uu(t.return,i,o)}function sc(t,i,o,u,d){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function cp(t,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Mn(t,i,u.children,o),u=Vt.current,u&2)u=u&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&up(t,o,i);else if(t.tag===19)up(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Nt(Vt,u),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Pa(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),sc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Pa(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}sc(i,!0,o,null,p);break;case"together":sc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ka(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=dr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=dr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function nv(t,i,o){switch(i.tag){case 3:op(i),gs();break;case 5:Th(i);break;case 1:Rn(i.type)&&Sa(i);break;case 4:ku(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Nt(Aa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Vt,Vt.current&1),i.flags|=128,null):o&i.child.childLanes?lp(t,i,o):(Nt(Vt,Vt.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Nt(Vt,Vt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,t.flags&128){if(u)return cp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Vt,Vt.current),u)break;return null;case 22:case 23:return i.lanes=0,ip(t,i,o)}return Di(t,i,o)}var fp,oc,dp,hp;fp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},oc=function(){},dp=function(t,i,o,u){var d=t.memoizedProps;if(d!==u){t=i.stateNode,Ir(pi.current);var p=null;switch(o){case"input":d=B(t,d),u=B(t,u),p=[];break;case"select":d=re({},d,{value:void 0}),u=re({},u,{value:void 0}),p=[];break;case"textarea":d=zt(t,d),u=zt(t,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=_a)}Qe(o,u);var T;o=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var I=d[ee];for(T in I)I.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in u){var z=u[ee];if(I=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&z!==I&&(z!=null||I!=null))if(ee==="style")if(I){for(T in I)!I.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in z)z.hasOwnProperty(T)&&I[T]!==z[T]&&(o||(o={}),o[T]=z[T])}else o||(p||(p=[]),p.push(ee,o)),o=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(p=p||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Ft("scroll",t),p||I===z||(p=[])):(p=p||[]).push(ee,z))}o&&(p=p||[]).push("style",o);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},hp=function(t,i,o,u){o!==u&&(i.flags|=4)};function wo(t,i){if(!Bt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,u=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=u,t.childLanes=o,i}function iv(t,i,o){var u=i.pendingProps;switch(Cu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&xa(),gn(i),null;case 3:return u=i.stateNode,Ss(),Ot(An),Ot(pn),Vu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Ta(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Jn!==null&&(_c(Jn),Jn=null))),oc(t,i),gn(i),null;case 5:Bu(i);var d=Ir(So.current);if(o=i.type,t!==null&&i.stateNode!=null)dp(t,i,o,u,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Ir(pi.current),Ta(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[hi]=i,u[mo]=p,t=(i.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<fo.length;d++)Ft(fo[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":tn(u,p),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",u);break;case"textarea":L(u,p),Ft("invalid",u)}Qe(o,p),d=null;for(var T in p)if(p.hasOwnProperty(T)){var I=p[T];T==="children"?typeof I=="string"?u.textContent!==I&&(p.suppressHydrationWarning!==!0&&ga(u.textContent,I,t),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&ga(u.textContent,I,t),d=["children",""+I]):a.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ft("scroll",u)}switch(o){case"input":Ct(u),Xe(u,p,!0);break;case"textarea":Ct(u),K(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=_a)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=T.createElement(o,{is:u.is}):(t=T.createElement(o),o==="select"&&(T=t,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):t=T.createElementNS(t,o),t[hi]=i,t[mo]=u,fp(t,i,!1,!1),i.stateNode=t;e:{switch(T=Ce(o,u),o){case"dialog":Ft("cancel",t),Ft("close",t),d=u;break;case"iframe":case"object":case"embed":Ft("load",t),d=u;break;case"video":case"audio":for(d=0;d<fo.length;d++)Ft(fo[d],t);d=u;break;case"source":Ft("error",t),d=u;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),d=u;break;case"details":Ft("toggle",t),d=u;break;case"input":tn(t,u),d=B(t,u),Ft("invalid",t);break;case"option":d=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},d=re({},u,{value:void 0}),Ft("invalid",t);break;case"textarea":L(t,u),d=zt(t,u),Ft("invalid",t);break;default:d=u}Qe(o,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var z=I[p];p==="style"?Ne(t,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&qe(t,z)):p==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Re(t,z):typeof z=="number"&&Re(t,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?z!=null&&p==="onScroll"&&Ft("scroll",t):z!=null&&b(t,p,z,T))}switch(o){case"input":Ct(t),Xe(t,u,!1);break;case"textarea":Ct(t),K(t);break;case"option":u.value!=null&&t.setAttribute("value",""+Ae(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?st(t,!!u.multiple,p,!1):u.defaultValue!=null&&st(t,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=_a)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)hp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(o=Ir(So.current),Ir(pi.current),Ta(i)){if(u=i.stateNode,o=i.memoizedProps,u[hi]=i,(p=u.nodeValue!==o)&&(t=On,t!==null))switch(t.tag){case 3:ga(u.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ga(u.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[hi]=i,i.stateNode=u}return gn(i),null;case 13:if(Ot(Vt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Bt&&kn!==null&&i.mode&1&&!(i.flags&128))gh(),gs(),i.flags|=98560,p=!1;else if(p=Ta(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[hi]=i}else gs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else Jn!==null&&(_c(Jn),Jn=null),p=!0;if(!p)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,i.mode&1&&(t===null||Vt.current&1?Qt===0&&(Qt=3):Sc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ss(),oc(t,i),t===null&&ho(i.stateNode.containerInfo),gn(i),null;case 10:return Nu(i.type._context),gn(i),null;case 17:return Rn(i.type)&&xa(),gn(i),null;case 19:if(Ot(Vt),p=i.memoizedState,p===null)return gn(i),null;if(u=(i.flags&128)!==0,T=p.rendering,T===null)if(u)wo(p,!1);else{if(Qt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(T=Pa(t),T!==null){for(i.flags|=128,wo(p,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,t=u,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Nt(Vt,Vt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Y()>Ts&&(i.flags|=128,u=!0,wo(p,!1),i.lanes=4194304)}else{if(!u)if(t=Pa(T),t!==null){if(i.flags|=128,u=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),wo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!Bt)return gn(i),null}else 2*Y()-p.renderingStartTime>Ts&&o!==1073741824&&(i.flags|=128,u=!0,wo(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(o=p.last,o!==null?o.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Y(),i.sibling=null,o=Vt.current,Nt(Vt,u?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return xc(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&i.mode&1?Bn&1073741824&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function rv(t,i){switch(Cu(i),i.tag){case 1:return Rn(i.type)&&xa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ss(),Ot(An),Ot(pn),Vu(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Bu(i),null;case 13:if(Ot(Vt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));gs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return Ss(),null;case 10:return Nu(i.type._context),null;case 22:case 23:return xc(),null;case 24:return null;default:return null}}var Ba=!1,_n=!1,sv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ms(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Xt(t,i,u)}else o.current=null}function ac(t,i,o){try{o()}catch(u){Xt(t,i,u)}}var pp=!1;function ov(t,i){if(xu=sa,t=jd(),fu(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var T=0,I=-1,z=-1,ee=0,ve=0,ye=t,me=null;t:for(;;){for(var Ie;ye!==o||d!==0&&ye.nodeType!==3||(I=T+d),ye!==p||u!==0&&ye.nodeType!==3||(z=T+u),ye.nodeType===3&&(T+=ye.nodeValue.length),(Ie=ye.firstChild)!==null;)me=ye,ye=Ie;for(;;){if(ye===t)break t;if(me===o&&++ee===d&&(I=T),me===p&&++ve===u&&(z=T),(Ie=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Ie}o=I===-1||z===-1?null:{start:I,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Su={focusedElem:t,selectionRange:o},sa=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var He=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,jt=He.memoizedState,q=i.stateNode,W=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:ei(i.type,Ge),jt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Xt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return He=pp,pp=!1,He}function Ao(t,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&t)===t){var p=d.destroy;d.destroy=void 0,p!==void 0&&ac(i,o,p)}d=d.next}while(d!==u)}}function za(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function lc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function mp(t){var i=t.alternate;i!==null&&(t.alternate=null,mp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[hi],delete i[mo],delete i[Tu],delete i[H_],delete i[G_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gp(t){return t.tag===5||t.tag===3||t.tag===4}function _p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=_a));else if(u!==4&&(t=t.child,t!==null))for(uc(t,i,o),t=t.sibling;t!==null;)uc(t,i,o),t=t.sibling}function cc(t,i,o){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(cc(t,i,o),t=t.sibling;t!==null;)cc(t,i,o),t=t.sibling}var cn=null,ti=!1;function ar(t,i,o){for(o=o.child;o!==null;)vp(t,i,o),o=o.sibling}function vp(t,i,o){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 5:_n||Ms(o,i);case 6:var u=cn,d=ti;cn=null,ar(t,i,o),cn=u,ti=d,cn!==null&&(ti?(t=cn,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):cn.removeChild(o.stateNode));break;case 18:cn!==null&&(ti?(t=cn,o=o.stateNode,t.nodeType===8?Eu(t.parentNode,o):t.nodeType===1&&Eu(t,o),io(t)):Eu(cn,o.stateNode));break;case 4:u=cn,d=ti,cn=o.stateNode.containerInfo,ti=!0,ar(t,i,o),cn=u,ti=d;break;case 0:case 11:case 14:case 15:if(!_n&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,T=p.destroy;p=p.tag,T!==void 0&&(p&2||p&4)&&ac(o,i,T),d=d.next}while(d!==u)}ar(t,i,o);break;case 1:if(!_n&&(Ms(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(I){Xt(o,i,I)}ar(t,i,o);break;case 21:ar(t,i,o);break;case 22:o.mode&1?(_n=(u=_n)||o.memoizedState!==null,ar(t,i,o),_n=u):ar(t,i,o);break;default:ar(t,i,o)}}function xp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new sv),i.forEach(function(u){var d=mv.bind(null,t,u);o.has(u)||(o.add(u),u.then(d,d))})}}function ni(t,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=t,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ti=!1;break e;case 3:cn=I.stateNode.containerInfo,ti=!0;break e;case 4:cn=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(cn===null)throw Error(n(160));vp(p,T,d),cn=null,ti=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ee){Xt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Sp(i,t),i=i.sibling}function Sp(t,i){var o=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(i,t),gi(t),u&4){try{Ao(3,t,t.return),za(3,t)}catch(Ge){Xt(t,t.return,Ge)}try{Ao(5,t,t.return)}catch(Ge){Xt(t,t.return,Ge)}}break;case 1:ni(i,t),gi(t),u&512&&o!==null&&Ms(o,o.return);break;case 5:if(ni(i,t),gi(t),u&512&&o!==null&&Ms(o,o.return),t.flags&32){var d=t.stateNode;try{Re(d,"")}catch(Ge){Xt(t,t.return,Ge)}}if(u&4&&(d=t.stateNode,d!=null)){var p=t.memoizedProps,T=o!==null?o.memoizedProps:p,I=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&_t(d,p),Ce(I,T);var ee=Ce(I,p);for(T=0;T<z.length;T+=2){var ve=z[T],ye=z[T+1];ve==="style"?Ne(d,ye):ve==="dangerouslySetInnerHTML"?qe(d,ye):ve==="children"?Re(d,ye):b(d,ve,ye,ee)}switch(I){case"input":Tt(d,p);break;case"textarea":w(d,p);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?st(d,!!p.multiple,Ie,!1):me!==!!p.multiple&&(p.defaultValue!=null?st(d,!!p.multiple,p.defaultValue,!0):st(d,!!p.multiple,p.multiple?[]:"",!1))}d[mo]=p}catch(Ge){Xt(t,t.return,Ge)}}break;case 6:if(ni(i,t),gi(t),u&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,p=t.memoizedProps;try{d.nodeValue=p}catch(Ge){Xt(t,t.return,Ge)}}break;case 3:if(ni(i,t),gi(t),u&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch(Ge){Xt(t,t.return,Ge)}break;case 4:ni(i,t),gi(t);break;case 13:ni(i,t),gi(t),d=t.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(hc=Y())),u&4&&xp(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(ee=_n)||ve,ni(i,t),_n=ee):ni(i,t),gi(t),u&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!ve&&t.mode&1)for(ke=t,ve=t.child;ve!==null;){for(ye=ke=ve;ke!==null;){switch(me=ke,Ie=me.child,me.tag){case 0:case 11:case 14:case 15:Ao(4,me,me.return);break;case 1:Ms(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){u=me,o=me.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Xt(u,o,Ge)}}break;case 5:Ms(me,me.return);break;case 22:if(me.memoizedState!==null){Ep(ye);continue}}Ie!==null?(Ie.return=me,ke=Ie):Ep(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ee?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=ye.stateNode,z=ye.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=_e("display",T))}catch(Ge){Xt(t,t.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ge){Xt(t,t.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ni(i,t),gi(t),u&4&&xp(t);break;case 21:break;default:ni(i,t),gi(t)}}function gi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(gp(o)){var u=o;break e}o=o.return}throw Error(n(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Re(d,""),u.flags&=-33);var p=_p(t);cc(t,p,d);break;case 3:case 4:var T=u.stateNode.containerInfo,I=_p(t);uc(t,I,T);break;default:throw Error(n(161))}}catch(z){Xt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function av(t,i,o){ke=t,yp(t)}function yp(t,i,o){for(var u=(t.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Ba;if(!T){var I=d.alternate,z=I!==null&&I.memoizedState!==null||_n;I=Ba;var ee=_n;if(Ba=T,(_n=z)&&!ee)for(ke=d;ke!==null;)T=ke,z=T.child,T.tag===22&&T.memoizedState!==null?Tp(d):z!==null?(z.return=T,ke=z):Tp(d);for(;p!==null;)ke=p,yp(p),p=p.sibling;ke=d,Ba=I,_n=ee}Mp(t)}else d.subtreeFlags&8772&&p!==null?(p.return=d,ke=p):Mp(t)}}function Mp(t){for(;ke!==null;){var i=ke;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:_n||za(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ei(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Eh(i,p,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Eh(i,T,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&io(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&lc(i)}catch(me){Xt(i,i.return,me)}}if(i===t){ke=null;break}if(o=i.sibling,o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Ep(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ke=o;break}ke=i.return}}function Tp(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{za(4,i)}catch(z){Xt(i,o,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){Xt(i,d,z)}}var p=i.return;try{lc(i)}catch(z){Xt(i,p,z)}break;case 5:var T=i.return;try{lc(i)}catch(z){Xt(i,T,z)}}}catch(z){Xt(i,i.return,z)}if(i===t){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var lv=Math.ceil,Va=A.ReactCurrentDispatcher,fc=A.ReactCurrentOwner,qn=A.ReactCurrentBatchConfig,yt=0,on=null,$t=null,fn=0,Bn=0,Es=nr(0),Qt=0,Ro=null,Ur=0,Ha=0,dc=0,Co=null,bn=null,hc=0,Ts=1/0,Li=null,Ga=!1,pc=null,lr=null,Wa=!1,ur=null,Xa=0,bo=0,mc=null,ja=-1,qa=0;function En(){return yt&6?Y():ja!==-1?ja:ja=Y()}function cr(t){return t.mode&1?yt&2&&fn!==0?fn&-fn:X_.transition!==null?(qa===0&&(qa=Lt()),qa):(t=St,t!==0||(t=window.event,t=t===void 0?16:Ad(t.type)),t):1}function ii(t,i,o,u){if(50<bo)throw bo=0,mc=null,Error(n(185));nn(t,o,u),(!(yt&2)||t!==on)&&(t===on&&(!(yt&2)&&(Ha|=o),Qt===4&&fr(t,fn)),Pn(t,u),o===1&&yt===0&&!(i.mode&1)&&(Ts=Y()+500,ya&&rr()))}function Pn(t,i){var o=t.callbackNode;yn(t,i);var u=dn(t,t===on?fn:0);if(u===0)o!==null&&C(o),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(o!=null&&C(o),i===1)t.tag===0?W_(Ap.bind(null,t)):fh(Ap.bind(null,t)),z_(function(){!(yt&6)&&rr()}),o=null;else{switch(di(u)){case 1:o=Ee;break;case 4:o=Pe;break;case 16:o=Oe;break;case 536870912:o=it;break;default:o=Oe}o=Np(o,wp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function wp(t,i){if(ja=-1,qa=0,yt&6)throw Error(n(327));var o=t.callbackNode;if(ws()&&t.callbackNode!==o)return null;var u=dn(t,t===on?fn:0);if(u===0)return null;if(u&30||u&t.expiredLanes||i)i=Ya(t,u);else{i=u;var d=yt;yt|=2;var p=Cp();(on!==t||fn!==i)&&(Li=null,Ts=Y()+500,Or(t,i));do try{fv();break}catch(I){Rp(t,I)}while(!0);Iu(),Va.current=p,yt=d,$t!==null?i=0:(on=null,fn=0,i=Qt)}if(i!==0){if(i===2&&(d=Ti(t),d!==0&&(u=d,i=gc(t,d))),i===1)throw o=Ro,Or(t,0),fr(t,u),Pn(t,Y()),o;if(i===6)fr(t,u);else{if(d=t.current.alternate,!(u&30)&&!uv(d)&&(i=Ya(t,u),i===2&&(p=Ti(t),p!==0&&(u=p,i=gc(t,p))),i===1))throw o=Ro,Or(t,0),fr(t,u),Pn(t,Y()),o;switch(t.finishedWork=d,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:kr(t,bn,Li);break;case 3:if(fr(t,u),(u&130023424)===u&&(i=hc+500-Y(),10<i)){if(dn(t,0)!==0)break;if(d=t.suspendedLanes,(d&u)!==u){En(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Mu(kr.bind(null,t,bn,Li),i);break}kr(t,bn,Li);break;case 4:if(fr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,d=-1;0<u;){var T=31-lt(u);p=1<<T,T=i[T],T>d&&(d=T),u&=~p}if(u=d,u=Y()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*lv(u/1960))-u,10<u){t.timeoutHandle=Mu(kr.bind(null,t,bn,Li),u);break}kr(t,bn,Li);break;case 5:kr(t,bn,Li);break;default:throw Error(n(329))}}}return Pn(t,Y()),t.callbackNode===o?wp.bind(null,t):null}function gc(t,i){var o=Co;return t.current.memoizedState.isDehydrated&&(Or(t,i).flags|=256),t=Ya(t,i),t!==2&&(i=bn,bn=o,i!==null&&_c(i)),t}function _c(t){bn===null?bn=t:bn.push.apply(bn,t)}function uv(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Qn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(t,i){for(i&=~dc,i&=~Ha,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-lt(i),u=1<<o;t[o]=-1,i&=~u}}function Ap(t){if(yt&6)throw Error(n(327));ws();var i=dn(t,0);if(!(i&1))return Pn(t,Y()),null;var o=Ya(t,i);if(t.tag!==0&&o===2){var u=Ti(t);u!==0&&(i=u,o=gc(t,u))}if(o===1)throw o=Ro,Or(t,0),fr(t,i),Pn(t,Y()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,bn,Li),Pn(t,Y()),null}function vc(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(Ts=Y()+500,ya&&rr())}}function Fr(t){ur!==null&&ur.tag===0&&!(yt&6)&&ws();var i=yt;yt|=1;var o=qn.transition,u=St;try{if(qn.transition=null,St=1,t)return t()}finally{St=u,qn.transition=o,yt=i,!(yt&6)&&rr()}}function xc(){Bn=Es.current,Ot(Es)}function Or(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,B_(o)),$t!==null)for(o=$t.return;o!==null;){var u=o;switch(Cu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&xa();break;case 3:Ss(),Ot(An),Ot(pn),Vu();break;case 5:Bu(u);break;case 4:Ss();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Nu(u.type._context);break;case 22:case 23:xc()}o=o.return}if(on=t,$t=t=dr(t.current,null),fn=Bn=i,Qt=0,Ro=null,dc=Ha=Ur=0,bn=Co=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var T=p.next;p.next=d,u.next=T}o.pending=u}Lr=null}return t}function Rp(t,i){do{var o=$t;try{if(Iu(),Da.current=Ua,La){for(var u=Ht.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}La=!1}if(Nr=0,sn=Zt=Ht=null,yo=!1,Mo=0,fc.current=null,o===null||o.return===null){Qt=1,Ro=i,$t=null;break}e:{var p=t,T=o.return,I=o,z=i;if(i=fn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,ve=I,ye=ve.tag;if(!(ve.mode&1)&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Qh(T);if(Ie!==null){Ie.flags&=-257,Jh(Ie,T,I,p,i),Ie.mode&1&&Zh(p,ee,i),i=Ie,z=ee;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(z),i.updateQueue=Ge}else He.add(z);break e}else{if(!(i&1)){Zh(p,ee,i),Sc();break e}z=Error(n(426))}}else if(Bt&&I.mode&1){var jt=Qh(T);if(jt!==null){!(jt.flags&65536)&&(jt.flags|=256),Jh(jt,T,I,p,i),Du(ys(z,I));break e}}p=z=ys(z,I),Qt!==4&&(Qt=2),Co===null?Co=[p]:Co.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=$h(p,z,i);Mh(p,q);break e;case 1:I=z;var W=p.type,$=p.stateNode;if(!(p.flags&128)&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(lr===null||!lr.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Kh(p,I,i);Mh(p,Te);break e}}p=p.return}while(p!==null)}Pp(o)}catch(je){i=je,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function Cp(){var t=Va.current;return Va.current=Ua,t===null?Ua:t}function Sc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||!(Ur&268435455)&&!(Ha&268435455)||fr(on,fn)}function Ya(t,i){var o=yt;yt|=2;var u=Cp();(on!==t||fn!==i)&&(Li=null,Or(t,i));do try{cv();break}catch(d){Rp(t,d)}while(!0);if(Iu(),yt=o,Va.current=u,$t!==null)throw Error(n(261));return on=null,fn=0,Qt}function cv(){for(;$t!==null;)bp($t)}function fv(){for(;$t!==null&&!X();)bp($t)}function bp(t){var i=Ip(t.alternate,t,Bn);t.memoizedProps=t.pendingProps,i===null?Pp(t):$t=i,fc.current=null}function Pp(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=rv(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qt=6,$t=null;return}}else if(o=iv(o,i,Bn),o!==null){$t=o;return}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);Qt===0&&(Qt=5)}function kr(t,i,o){var u=St,d=qn.transition;try{qn.transition=null,St=1,dv(t,i,o,u)}finally{qn.transition=d,St=u}return null}function dv(t,i,o,u){do ws();while(ur!==null);if(yt&6)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(un(t,p),t===on&&($t=on=null,fn=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Wa||(Wa=!0,Np(Oe,function(){return ws(),null})),p=(o.flags&15990)!==0,o.subtreeFlags&15990||p){p=qn.transition,qn.transition=null;var T=St;St=1;var I=yt;yt|=4,fc.current=null,ov(t,o),Sp(o,t),L_(Su),sa=!!xu,Su=xu=null,t.current=o,av(o),te(),yt=I,St=T,qn.transition=p}else t.current=o;if(Wa&&(Wa=!1,ur=t,Xa=d),p=t.pendingLanes,p===0&&(lr=null),dt(o.stateNode),Pn(t,Y()),i!==null)for(u=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(Ga)throw Ga=!1,t=pc,pc=null,t;return Xa&1&&t.tag!==0&&ws(),p=t.pendingLanes,p&1?t===mc?bo++:(bo=0,mc=t):bo=0,rr(),null}function ws(){if(ur!==null){var t=di(Xa),i=qn.transition,o=St;try{if(qn.transition=null,St=16>t?16:t,ur===null)var u=!1;else{if(t=ur,ur=null,Xa=0,yt&6)throw Error(n(331));var d=yt;for(yt|=4,ke=t.current;ke!==null;){var p=ke,T=p.child;if(ke.flags&16){var I=p.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ee=I[z];for(ke=ee;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Ao(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,ke=ye;else for(;ke!==null;){ve=ke;var me=ve.sibling,Ie=ve.return;if(mp(ve),ve===ee){ke=null;break}if(me!==null){me.return=Ie,ke=me;break}ke=Ie}}}var He=p.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var jt=Ge.sibling;Ge.sibling=null,Ge=jt}while(Ge!==null)}}ke=p}}if(p.subtreeFlags&2064&&T!==null)T.return=p,ke=T;else e:for(;ke!==null;){if(p=ke,p.flags&2048)switch(p.tag){case 0:case 11:case 15:Ao(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,ke=q;break e}ke=p.return}}var W=t.current;for(ke=W;ke!==null;){T=ke;var $=T.child;if(T.subtreeFlags&2064&&$!==null)$.return=T,ke=$;else e:for(T=W;ke!==null;){if(I=ke,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:za(9,I)}}catch(je){Xt(I,I.return,je)}if(I===T){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(yt=d,rr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(tt,t)}catch{}u=!0}return u}finally{St=o,qn.transition=i}}return!1}function Dp(t,i,o){i=ys(o,i),i=$h(t,i,1),t=or(t,i,1),i=En(),t!==null&&(nn(t,1,i),Pn(t,i))}function Xt(t,i,o){if(t.tag===3)Dp(t,t,o);else for(;i!==null;){if(i.tag===3){Dp(i,t,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(lr===null||!lr.has(u))){t=ys(o,t),t=Kh(i,t,1),i=or(i,t,1),t=En(),i!==null&&(nn(i,1,t),Pn(i,t));break}}i=i.return}}function hv(t,i,o){var u=t.pingCache;u!==null&&u.delete(i),i=En(),t.pingedLanes|=t.suspendedLanes&o,on===t&&(fn&o)===o&&(Qt===4||Qt===3&&(fn&130023424)===fn&&500>Y()-hc?Or(t,0):dc|=o),Pn(t,i)}function Lp(t,i){i===0&&(t.mode&1?(i=Wt,Wt<<=1,!(Wt&130023424)&&(Wt=4194304)):i=1);var o=En();t=bi(t,i),t!==null&&(nn(t,i,o),Pn(t,o))}function pv(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Lp(t,o)}function mv(t,i){var o=0;switch(t.tag){case 13:var u=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Lp(t,o)}var Ip;Ip=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||An.current)Cn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Cn=!1,nv(t,i,o);Cn=!!(t.flags&131072)}else Cn=!1,Bt&&i.flags&1048576&&dh(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ka(t,i),t=i.pendingProps;var d=hs(i,pn.current);xs(i,o),d=Wu(null,i,u,t,d,o);var p=Xu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,Sa(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ou(i),d.updater=Fa,i.stateNode=d,d._reactInternals=i,Zu(i,u,t,o),i=tc(null,i,u,!0,p,o)):(i.tag=0,Bt&&p&&Ru(i),Mn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ka(t,i),t=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=_v(u),t=ei(u,t),d){case 0:i=ec(null,i,u,t,o);break e;case 1:i=sp(null,i,u,t,o);break e;case 11:i=ep(null,i,u,t,o);break e;case 14:i=tp(null,i,u,ei(u.type,t),o);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ec(t,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),sp(t,i,u,d,o);case 3:e:{if(op(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,d=p.element,yh(t,i),ba(i,u,null,o);var T=i.memoizedState;if(u=T.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ys(Error(n(423)),i),i=ap(t,i,u,o,d);break e}else if(u!==d){d=ys(Error(n(424)),i),i=ap(t,i,u,o,d);break e}else for(kn=tr(i.stateNode.containerInfo.firstChild),On=i,Bt=!0,Jn=null,o=xh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),u===d){i=Di(t,i,o);break e}Mn(t,i,u,o)}i=i.child}return i;case 5:return Th(i),t===null&&Pu(i),u=i.type,d=i.pendingProps,p=t!==null?t.memoizedProps:null,T=d.children,yu(u,d)?T=null:p!==null&&yu(u,p)&&(i.flags|=32),rp(t,i),Mn(t,i,T,o),i.child;case 6:return t===null&&Pu(i),null;case 13:return lp(t,i,o);case 4:return ku(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=_s(i,null,u,o):Mn(t,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ep(t,i,u,d,o);case 7:return Mn(t,i,i.pendingProps,o),i.child;case 8:return Mn(t,i,i.pendingProps.children,o),i.child;case 12:return Mn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,T=d.value,Nt(Aa,u._currentValue),u._currentValue=T,p!==null)if(Qn(p.value,T)){if(p.children===d.children&&!An.current){i=Di(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){T=p.child;for(var z=I.firstContext;z!==null;){if(z.context===u){if(p.tag===1){z=Pi(-1,o&-o),z.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ee.pending=z}}p.lanes|=o,z=p.alternate,z!==null&&(z.lanes|=o),Uu(p.return,o,i),I.lanes|=o;break}z=z.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=o,I=T.alternate,I!==null&&(I.lanes|=o),Uu(T,o,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}Mn(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,xs(i,o),d=Xn(d),u=u(d),i.flags|=1,Mn(t,i,u,o),i.child;case 14:return u=i.type,d=ei(u,i.pendingProps),d=ei(u.type,d),tp(t,i,u,d,o);case 15:return np(t,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ei(u,d),ka(t,i),i.tag=1,Rn(u)?(t=!0,Sa(i)):t=!1,xs(i,o),qh(i,u,d),Zu(i,u,d,o),tc(null,i,u,!0,t,o);case 19:return cp(t,i,o);case 22:return ip(t,i,o)}throw Error(n(156,i.tag))};function Np(t,i){return na(t,i)}function gv(t,i,o,u){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(t,i,o,u){return new gv(t,i,o,u)}function yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _v(t){if(typeof t=="function")return yc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===fe)return 14}return 2}function dr(t,i){var o=t.alternate;return o===null?(o=Yn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function $a(t,i,o,u,d,p){var T=2;if(u=t,typeof t=="function")yc(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case U:return Br(o.children,d,p,i);case k:T=8,d|=8;break;case D:return t=Yn(12,o,i,d|2),t.elementType=D,t.lanes=p,t;case Z:return t=Yn(13,o,i,d),t.elementType=Z,t.lanes=p,t;case ce:return t=Yn(19,o,i,d),t.elementType=ce,t.lanes=p,t;case le:return Ka(o,d,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:T=10;break e;case V:T=9;break e;case ie:T=11;break e;case fe:T=14;break e;case se:T=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Yn(T,o,i,d),i.elementType=t,i.type=u,i.lanes=p,i}function Br(t,i,o,u){return t=Yn(7,t,u,i),t.lanes=o,t}function Ka(t,i,o,u){return t=Yn(22,t,u,i),t.elementType=le,t.lanes=o,t.stateNode={isHidden:!1},t}function Mc(t,i,o){return t=Yn(6,t,null,i),t.lanes=o,t}function Ec(t,i,o){return i=Yn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function vv(t,i,o,u,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Tc(t,i,o,u,d,p,T,I,z){return t=new vv(t,i,o,I,z),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Yn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(p),t}function xv(t,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:t,containerInfo:i,implementation:o}}function Up(t){if(!t)return ir;t=t._reactInternals;e:{if(fi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Rn(o))return uh(t,o,i)}return i}function Fp(t,i,o,u,d,p,T,I,z){return t=Tc(o,u,!0,t,d,p,T,I,z),t.context=Up(null),o=t.current,u=En(),d=cr(o),p=Pi(u,d),p.callback=i??null,or(o,p,d),t.current.lanes=d,nn(t,d,u),Pn(t,u),t}function Za(t,i,o,u){var d=i.current,p=En(),T=cr(d);return o=Up(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,T),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=or(d,i,T),t!==null&&(ii(t,d,T,p),Ca(t,d,T)),T}function Qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Op(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function wc(t,i){Op(t,i),(t=t.alternate)&&Op(t,i)}var kp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ac(t){this._internalRoot=t}Ja.prototype.render=Ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Za(t,i,null,null)},Ja.prototype.unmount=Ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Fr(function(){Za(null,t,null,null)}),i[wi]=null}};function Ja(t){this._internalRoot=t}Ja.prototype.unstable_scheduleHydration=function(t){if(t){var i=yd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Qi.length&&i!==0&&i<Qi[o].priority;o++);Qi.splice(o,0,t),o===0&&Td(t)}};function Rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function el(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bp(){}function Sv(t,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var ee=Qa(T);p.call(ee)}}var T=Fp(i,u,t,0,null,!1,!1,"",Bp);return t._reactRootContainer=T,t[wi]=T.current,ho(t.nodeType===8?t.parentNode:t),Fr(),T}for(;d=t.lastChild;)t.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ee=Qa(z);I.call(ee)}}var z=Tc(t,0,!1,null,null,!1,!1,"",Bp);return t._reactRootContainer=z,t[wi]=z.current,ho(t.nodeType===8?t.parentNode:t),Fr(function(){Za(i,z,o,u)}),z}function tl(t,i,o,u,d){var p=o._reactRootContainer;if(p){var T=p;if(typeof d=="function"){var I=d;d=function(){var z=Qa(T);I.call(z)}}Za(i,T,t,d)}else T=Sv(o,i,t,d,u);return Qa(T)}xd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=mt(i.pendingLanes);o!==0&&(rn(i,o|1),Pn(i,Y()),!(yt&6)&&(Ts=Y()+500,rr()))}break;case 13:Fr(function(){var u=bi(t,1);if(u!==null){var d=En();ii(u,t,1,d)}}),wc(t,1)}},Ql=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=En();ii(i,t,134217728,o)}wc(t,134217728)}},Sd=function(t){if(t.tag===13){var i=cr(t),o=bi(t,i);if(o!==null){var u=En();ii(o,t,i,u)}wc(t,i)}},yd=function(){return St},Md=function(t,i){var o=St;try{return St=t,i()}finally{St=o}},be=function(t,i,o){switch(i){case"input":if(Tt(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==t&&u.form===t.form){var d=va(u);if(!d)throw Error(n(90));It(u),Tt(u,d)}}}break;case"textarea":w(t,o);break;case"select":i=o.value,i!=null&&st(t,!!o.multiple,i,!1)}},at=vc,bt=Fr;var yv={usingClientEntryPoint:!1,Events:[go,fs,va,he,Ve,vc]},Po={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ea(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{tt=nl.inject(Mv),ze=nl}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv,Dn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rc(i))throw Error(n(200));return xv(t,i,null,o)},Dn.createRoot=function(t,i){if(!Rc(t))throw Error(n(299));var o=!1,u="",d=kp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Tc(t,1,!1,null,null,o,!1,u,d),t[wi]=i.current,ho(t.nodeType===8?t.parentNode:t),new Ac(i)},Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ea(i),t=t===null?null:t.stateNode,t},Dn.flushSync=function(t){return Fr(t)},Dn.hydrate=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!0,o)},Dn.hydrateRoot=function(t,i,o){if(!Rc(t))throw Error(n(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",T=kp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Fp(i,null,t,1,o??null,d,!1,p,T),t[wi]=i.current,ho(t),u)for(t=0;t<u.length;t++)o=u[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Ja(i)},Dn.render=function(t,i,o){if(!el(i))throw Error(n(200));return tl(null,t,i,!1,o)},Dn.unmountComponentAtNode=function(t){if(!el(t))throw Error(n(40));return t._reactRootContainer?(Fr(function(){tl(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Dn.unstable_batchedUpdates=vc,Dn.unstable_renderSubtreeIntoContainer=function(t,i,o,u){if(!el(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return tl(t,i,o,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var qp;function Pv(){if(qp)return Pc.exports;qp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pc.exports=bv(),Pc.exports}var Yp;function Dv(){if(Yp)return il;Yp=1;var s=Pv();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var Lv=Dv(),hg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$p=Qr.createContext&&Qr.createContext(hg),Iv=["attr","size","title"];function Nv(s,e){if(s==null)return{};var n=Uv(s,e),r,a;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(s);for(a=0;a<l.length;a++)r=l[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function Uv(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function Hl(){return Hl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Hl.apply(this,arguments)}function Kp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Gl(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Kp(Object(n),!0).forEach(function(r){Fv(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Kp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function Fv(s,e,n){return e=Ov(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function Ov(s){var e=kv(s,"string");return typeof e=="symbol"?e:e+""}function kv(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function pg(s){return s&&s.map((e,n)=>Qr.createElement(e.tag,Gl({key:n},e.attr),pg(e.child)))}function sd(s){return e=>Qr.createElement(Bv,Hl({attr:Gl({},s.attr)},e),pg(s.child))}function Bv(s){var e=n=>{var{attr:r,size:a,title:l}=s,c=Nv(s,Iv),f=a||n.size||"1em",h;return n.className&&(h=n.className),s.className&&(h=(h?h+" ":"")+s.className),Qr.createElement("svg",Hl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,c,{className:h,style:Gl(Gl({color:s.color||n.color},n.style),s.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Qr.createElement("title",null,l),s.children)};return $p!==void 0?Qr.createElement($p.Consumer,null,n=>e(n)):e(hg)}function mf(s){return sd({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function gf(s){return sd({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function zv(s){return sd({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"},child:[]}]})(s)}const wt=s=>`/code-portfolio${s}`,Pt={name:"Joel Ewaldo",title:"Full Stack Software Engineer",email:"jewaldo03@gmail.com",github:"https://github.com/joelewaldo",linkedin:"https://linkedin.com/in/joel-ewaldo-291523201",location:"Irvine, California",degree:"B.S. Software Engineering",school:"University of California, Irvine",graduation:"2025",startups:[{name:"Typo",description:["Served as Backend Developer for crypto coin project on Solana blockchain","Designed internal web platform to control AI-driven Twitter bot interactions","Enabled mass-reply functionality with distinct bot personalities for social media automation","Leveraged Docker for deployment with scalable Vercel frontend and Railway backend architecture","Showcased innovation in AI, blockchain, and social media automation technologies"],images:[wt("/assets/typo/typo-bot-network-1.png"),wt("/assets/typo/typo-bot-network-2.png"),wt("/assets/typo/typo-dashboard-1.png"),wt("/assets/typo/typo-dashboard-2.png"),wt("/assets/typo/typo-tweet-example-1.png")],link:"https://typo.bot/whitepaper"},{name:"Statpass",description:["Co-founded and led full-stack development for React Native iOS app","Designed scalable backend APIs using Firebase and Algolia for efficient search functionality","Built compelling landing page with Next.js and Tailwind CSS boosting user engagement","Successfully launched on iOS App Store with continuous feature updates","Delivered polished user experience focused on intuitive design and performance"],images:[wt("/assets/statpass/statpass-website-1.png"),wt("/assets/statpass/statpass-app-1.png"),wt("/assets/statpass/statpass-app-2.png")],link:"https://statpass.app"}],projects:[{name:"Custom File Server",description:["Developed robust file server using Flask for secure storage and retrieval of media files","Deployed on AWS with WireGuard VPN tunnel for encrypted data transmission","Implemented hashing mechanisms for unique file identification and optimized caching","Designed 24/7 operational setup with RAID 1 configuration using dual 8TB drives","Ensured data redundancy and reliability for personal file management"],images:[wt("/assets/file_server/file-server-1.png"),wt("/assets/file_server/file-server-2.png"),wt("/assets/file_server/file-server-3.png"),wt("/assets/file_server/file-server-4.png"),wt("/assets/file_server/file-server-5.png")],link:"https://github.com/joelewaldo/file-server"},{name:"Minesweeper on the Web",description:["Built modern interactive Minesweeper game using React, TypeScript, HTML, and CSS","Implemented Depth First Search algorithm for optimized gameplay logic and performance","Managed project with GitHub showcasing maintainable and collaborative coding practices","Designed seamless user experience with responsive interface and smooth interactions","Consistently refined game design and functionality for enhanced player engagement"],images:[wt("/assets/minesweeper/minesweeper-1.png"),wt("/assets/minesweeper/minesweeper-2.png"),wt("/assets/minesweeper/minesweeper-3.png")],link:"https://github.com/joelewaldo/minesweeper"},{name:"Manga Crawler",description:["Created versatile manga crawler using Python for content scraping from multiple websites","Consolidated scraped content into organized PDF files by chapter for easy reading","Enhanced efficiency through multithreading for simultaneous chapter scraping","Designed modular code architecture for future updates and website compatibility","Ensured adaptability to different website structures and formats"],images:[wt("/assets/manga_crawler/manga-crawler-1.png"),wt("/assets/manga_crawler/manga-crawler-2.png"),wt("/assets/manga_crawler/manga-crawler-3.png"),wt("/assets/manga_crawler/manga-crawler-4.png")],link:"https://github.com/joelewaldo/manga-crawler"},{name:"Captcha Solver",description:["Designed captcha solver using TensorFlow machine learning models with 90%+ accuracy","Manually labeled 1,511 images using LabelImg to create robust training dataset","Experimented with TensorFlow Model Zoo architectures, selecting Faster RCNN Inception V2","Successfully trained and deployed model with detection graph for real-world applications","Achieved optimal balance of accuracy and efficiency for automated captcha solving"],images:[wt("/assets/captcha_solver/unsolved_captcha_1.png"),wt("/assets/captcha_solver/unsolved_captcha_2.png"),wt("/assets/captcha_solver/solved_captcha_1.jpg")]}],experience:[{name:"Language and Learning Analytics Lab - UCI",description:["Developed interactive web dashboard using Next.js, Bun, React, and Tailwind CSS for AI-collaboration experiment management","Engineered real-time chat rooms with Flask and Socket.IO for participant and AI agent interactions","Built Django API endpoints with Clerk authentication and PostgreSQL for secure data storage","Implemented dynamic experiment workflows assigning participants to control and AI-augmented groups","Deployed on AWS using 3 EC2 instances and RDS database with Terraform and Ansible automation"],images:[wt("/assets/lala/lala-1.png"),wt("/assets/lala/lala-2.png"),wt("/assets/lala/lala-3.png")],link:"https://sites.uci.edu/lalalab/"}],freelancing:[{name:"Snowbliss Cafe",description:["Delivered fully functional catering website within tight 2-day deadline","Built responsive frontend using Next.js, React, TypeScript, and Tailwind CSS","Set up PostgreSQL backend on Supabase with comprehensive SQL tables and queries","Integrated Stripe for secure online payment processing and pre-orders","Deployed on Railway with real-time menu updates and boosted weekend customer engagement"],images:[wt("/assets/snowbliss/snowbliss-1.png"),wt("/assets/snowbliss/snowbliss-2.png"),wt("/assets/snowbliss/snowbliss-3.png"),wt("/assets/snowbliss/snowbliss-4.png")],link:"https://snowbliss.cafe/"}]},Vv=()=>xe.jsxs("div",{className:"relative",children:[xe.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-sm"}),xe.jsx("header",{className:"relative bg-gray-900/40 backdrop-blur-md border-b border-gray-700/30 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300",children:xe.jsxs("div",{className:"flex justify-between items-center p-4 sm:p-6",children:[xe.jsx("h1",{className:"text-xl sm:text-2xl font-bold truncate pr-4",children:Pt.name}),xe.jsxs("div",{className:"flex items-center gap-3 sm:gap-4 flex-shrink-0",children:[xe.jsx("a",{href:Pt.github,target:"_blank",rel:"noopener noreferrer",children:xe.jsx(mf,{className:"text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-200"})}),xe.jsx("a",{href:Pt.linkedin,target:"_blank",rel:"noopener noreferrer",children:xe.jsx(gf,{className:"text-xl sm:text-2xl hover:text-blue-400 transition-colors duration-200"})})]})]})})]}),Zp=s=>`/code-portfolio${s}`,Hv=()=>xe.jsxs("section",{className:"relative","aria-label":"About Joel Ewaldo",children:[xe.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"}),xe.jsxs("div",{className:"relative bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-4 sm:p-6 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300",children:[xe.jsxs("div",{className:"flex flex-col sm:hidden space-y-4",children:[xe.jsxs("div",{className:"flex flex-col items-center text-center",children:[xe.jsx("img",{src:Zp("/assets/extra/pfp.jpg"),alt:"Joel Ewaldo - Full Stack Software Engineer",className:"rounded-full w-24 h-24 object-cover mb-3"}),xe.jsx("h1",{className:"text-xl font-bold",children:Pt.name}),xe.jsx("p",{className:"text-gray-300 text-sm",children:Pt.title})]}),xe.jsxs("address",{className:"space-y-2 text-center not-italic",children:[xe.jsxs("p",{className:"text-gray-300 text-sm",children:["📍 ",Pt.location]}),xe.jsxs("p",{className:"text-gray-300 text-sm",children:["🎓 ",Pt.degree," @ ",Pt.school]})]}),xe.jsxs("div",{className:"text-center",children:[xe.jsx("h2",{className:"text-sm font-semibold",children:"Looking to hire me? 💼"}),xe.jsxs("p",{className:"text-gray-300 text-sm break-all",children:["Email me @"," ",xe.jsx("a",{href:`mailto:${Pt.email}`,className:"hover:text-blue-400 transition-colors",children:Pt.email})]})]}),xe.jsxs("nav",{className:"flex gap-4 justify-center","aria-label":"Social media links",children:[xe.jsx("a",{href:Pt.github,target:"_blank",rel:"noopener noreferrer","aria-label":"Joel Ewaldo's GitHub Profile",children:xe.jsx(mf,{className:"text-xl hover:text-blue-400 transition-colors duration-200"})}),xe.jsx("a",{href:Pt.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"Joel Ewaldo's LinkedIn Profile",children:xe.jsx(gf,{className:"text-xl hover:text-blue-400 transition-colors duration-200"})})]})]}),xe.jsxs("div",{className:"hidden sm:flex justify-between items-center relative",children:[xe.jsxs("div",{className:"flex items-center",children:[xe.jsx("img",{src:Zp("/assets/extra/pfp.jpg"),alt:"Joel Ewaldo - Full Stack Software Engineer",className:"rounded-full mr-4 w-32 h-32 object-cover"}),xe.jsxs("div",{children:[xe.jsxs("div",{className:"flex items-center flex-wrap",children:[xe.jsx("h1",{className:"text-2xl font-bold",children:Pt.name}),xe.jsx("div",{className:"mx-4 h-6 border-l border-gray-700 hidden lg:block"}),xe.jsx("p",{className:"text-gray-300 lg:inline block w-full lg:w-auto mt-1 lg:mt-0",children:Pt.title})]}),xe.jsx("address",{className:"mt-2 flex items-center not-italic",children:xe.jsxs("p",{className:"text-gray-300",children:["📍 ",Pt.location]})}),xe.jsx("div",{className:"mb-2 flex items-center",children:xe.jsxs("p",{className:"text-gray-300",children:["🎓 ",Pt.degree," @ ",Pt.school]})}),xe.jsxs("div",{className:"mt-4",children:[xe.jsx("h2",{className:"text-m font-semibold",children:"Looking to hire me? 💼"}),xe.jsxs("p",{className:"text-gray-300",children:["Email me @"," ",xe.jsx("a",{href:`mailto:${Pt.email}`,className:"hover:text-blue-400 transition-colors",children:Pt.email})]})]})]})]}),xe.jsxs("nav",{className:"flex gap-4 items-center flex-shrink-0","aria-label":"Social media links",children:[xe.jsx("a",{href:Pt.github,target:"_blank",rel:"noopener noreferrer","aria-label":"Joel Ewaldo's GitHub Profile",children:xe.jsx(mf,{className:"text-2xl hover:text-blue-400 transition-colors duration-200"})}),xe.jsx("a",{href:Pt.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"Joel Ewaldo's LinkedIn Profile",children:xe.jsx(gf,{className:"text-2xl hover:text-blue-400 transition-colors duration-200"})})]})]})]})]}),Gv=({title:s,children:e})=>xe.jsxs("section",{className:"mb-12",children:[xe.jsx("h2",{className:"text-2xl sm:text-3xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent",children:s}),e]});var rl={},Lo={},Gt={},Ic={},Qp;function od(){return Qp||(Qp=1,function(s){function e(c,f,h){var g=f.slidesToShow,y=f.currentSlide;return h.length>2*g?c+2*g:y>=h.length?h.length+c:c}function n(c,f){if(f.length>2*c){for(var h={},g=f.length-2*c,y=f.length-g,x=g,m=0;m<y;m++)h[m]=x,x++;var v=f.length+y,M=v+f.slice(0,2*c).length,E=0;for(m=v;m<=M;m++)h[m]=E,E++;var S=v,_=0;for(m=y;m<S;m++)h[m]=_,_++;return h}h={};var P=3*f.length,b=0;for(m=0;m<P;m++)h[m]=b,++b===f.length&&(b=0);return h}function r(c,f){return f.length<c?f:f.length>2*c?f.slice(f.length-2*c,f.length).concat(f,f.slice(0,2*c)):f.concat(f,f)}function a(c,f){return f.length>2*c?2*c:f.length}function l(c,f,h){var g,y=c.currentSlide,x=c.slidesToShow,m=c.itemWidth,v=c.totalItems,M=0,E=0,S=y===0,_=f.length-(f.length-2*x);return f.length<x?(E=M=0,S=g=!1):f.length>2*x?((g=y>=_+f.length)&&(E=-m*(M=y-f.length)),S&&(E=-m*(M=_+(f.length-2*x)))):((g=y>=2*f.length)&&(E=-m*(M=y-f.length)),S&&(E=h.showDots?-m*(M=f.length):-m*(M=v/3))),{isReachingTheEnd:g,isReachingTheStart:S,nextSlide:M,nextPosition:E}}Object.defineProperty(s,"__esModule",{value:!0}),s.getOriginalCounterPart=e,s.getOriginalIndexLookupTableByClones=n,s.getClones=r,s.getInitialSlideInInfiniteMode=a,s.checkClonesPosition=l}(Ic)),Ic}var As={},Jp;function mg(){if(Jp)return As;Jp=1,Object.defineProperty(As,"__esModule",{value:!0});function s(r,a,l,c){var f=0,h=c||l;return a&&h&&(f=r[h].partialVisibilityGutter||r[h].paritialVisibilityGutter),f}function e(r,a){var l;return a[r]&&(l=(100/a[r].items).toFixed(1)),l}function n(r,a,l){return Math.round(l/(a+(r.centerMode?1:0)))}return As.getPartialVisibilityGutter=s,As.getWidthFromDeviceType=e,As.getItemClientSideWidth=n,As}var zn={},em;function Jr(){if(em)return zn;em=1,Object.defineProperty(zn,"__esModule",{value:!0});var s=mg();function e(x){var m=x.slidesToShow;return x.totalItems<m}function n(x,m){var v,M=x.domLoaded,E=x.slidesToShow,S=x.containerWidth,_=x.itemWidth,P=m.deviceType,b=m.responsive,A=m.ssr,F=m.partialVisbile,N=m.partialVisible,U=!!(M&&E&&S&&_);A&&P&&!U&&(v=s.getWidthFromDeviceType(P,b));var k=!!(A&&P&&!U&&v);return{shouldRenderOnSSR:k,flexBisis:v,domFullyLoaded:U,partialVisibilityGutter:s.getPartialVisibilityGutter(b,F||N,P,x.deviceType),shouldRenderAtAll:k||U}}function r(x,m){var v=m.currentSlide,M=m.slidesToShow;return v<=x&&x<v+M}function a(x,m,v){var M=v||x.transform;return!m.infinite&&x.currentSlide===0||e(x)?M:M+x.itemWidth/2}function l(x){return!(0<x.currentSlide)}function c(x){var m=x.currentSlide,v=x.totalItems;return!(m+x.slidesToShow<v)}function f(x,m,v,M){m===void 0&&(m=0);var E=x.currentSlide,S=x.slidesToShow,_=c(x),P=!v.infinite&&_,b=M||x.transform;if(e(x))return b;var A=b+E*m;return P?A+(x.containerWidth-(x.itemWidth-m)*S):A}function h(x,m){return x.rtl?-1*m:m}function g(x,m,v){var M=m.partialVisbile,E=m.partialVisible,S=m.responsive,_=m.deviceType,P=m.centerMode,b=v||x.transform,A=s.getPartialVisibilityGutter(S,M||E,_,x.deviceType);return h(m,E||M?f(x,A,m,v):P?a(x,m,v):b)}function y(x,m){var v=x.domLoaded,M=x.slidesToShow,E=x.containerWidth,S=x.itemWidth,_=m.deviceType,P=m.responsive,b=m.slidesToSlide||1,A=!!(v&&M&&E&&S);return m.ssr&&m.deviceType&&!A&&Object.keys(P).forEach(function(F){var N=P[F].slidesToSlide;_===F&&N&&(b=N)}),A&&Object.keys(P).forEach(function(F){var N=P[F],U=N.breakpoint,k=N.slidesToSlide,D=U.max,R=U.min;k&&window.innerWidth>=R&&window.innerWidth<=D&&(b=k)}),b}return zn.notEnoughChildren=e,zn.getInitialState=n,zn.getIfSlideIsVisbile=r,zn.getTransformForCenterMode=a,zn.isInLeftEnd=l,zn.isInRightEnd=c,zn.getTransformForPartialVsibile=f,zn.parsePosition=h,zn.getTransform=g,zn.getSlidesToSlide=y,zn}var sl={},tm;function Wv(){if(tm)return sl;tm=1,Object.defineProperty(sl,"__esModule",{value:!0});var s=function(e,n,r){var a;return function(){var l=arguments;a||(e.apply(this,l),a=!0,typeof r=="function"&&r(!0),setTimeout(function(){a=!1,typeof r=="function"&&r(!1)},n))}};return sl.default=s,sl}var Nc={},nm;function Xv(){return nm||(nm=1,function(s){function e(n,r){var a=r.partialVisbile,l=r.partialVisible,c=r.centerMode,f=r.ssr,h=r.responsive;if((a||l)&&c)throw new Error("center mode can not be used at the same time with partialVisible");if(!h)throw f?new Error("ssr mode need to be used in conjunction with responsive prop"):new Error("Responsive prop is needed for deciding the amount of items to show on the screen");if(h&&typeof h!="object")throw new Error("responsive prop must be an object")}Object.defineProperty(s,"__esModule",{value:!0}),s.default=e}(Nc)),Nc}var ol={},im;function jv(){if(im)return ol;im=1,Object.defineProperty(ol,"__esModule",{value:!0});var s=Jr();function e(n,r,a){a===void 0&&(a=0);var l,c,f=n.slidesToShow,h=n.currentSlide,g=n.itemWidth,y=n.totalItems,x=s.getSlidesToSlide(n,r),m=h+1+a+f+(0<a?0:x);return c=m<=y?-g*(l=h+a+(0<a?0:x)):y<m&&h!==y-f?-g*(l=y-f):l=void 0,{nextSlides:l,nextPosition:c}}return ol.populateNextSlides=e,ol}var al={},rm;function qv(){if(rm)return al;rm=1,Object.defineProperty(al,"__esModule",{value:!0});var s=Xi(),e=Jr(),n=Jr();function r(a,l,c){c===void 0&&(c=0);var f,h,g=a.currentSlide,y=a.itemWidth,x=a.slidesToShow,m=l.children,v=l.showDots,M=l.infinite,E=e.getSlidesToSlide(a,l),S=g-c-(0<c?0:E),_=(s.Children.toArray(m).length-x)%E;return h=0<=S?(f=S,v&&!M&&0<_&&n.isInRightEnd(a)&&(f=g-_),-y*f):f=S<0&&g!==0?0:void 0,{nextSlides:f,nextPosition:h}}return al.populatePreviousSlides=r,al}var Uc={},sm;function Yv(){return sm||(sm=1,function(s){function e(n,r,a,l,c,f){var h,g,y=n.itemWidth,x=n.slidesToShow,m=n.totalItems,v=n.currentSlide,M=r.infinite,E=!1,S=Math.round((a-l)/y),_=Math.round((l-a)/y),P=a<c;if(c<a&&S<=x){h="right";var b=Math.abs(-y*(m-x)),A=f-(l-c),F=v===m-x;(Math.abs(A)<=b||F&&M)&&(g=A,E=!0)}return P&&_<=x&&(h="left",((A=f+(c-l))<=0||v===0&&M)&&(E=!0,g=A)),{direction:h,nextPosition:g,canContinue:E}}Object.defineProperty(s,"__esModule",{value:!0}),s.populateSlidesOnMouseTouchMove=e}(Uc)),Uc}var om;function gg(){if(om)return Gt;om=1,Object.defineProperty(Gt,"__esModule",{value:!0});var s=od();Gt.getOriginalCounterPart=s.getOriginalCounterPart,Gt.getClones=s.getClones,Gt.checkClonesPosition=s.checkClonesPosition,Gt.getInitialSlideInInfiniteMode=s.getInitialSlideInInfiniteMode;var e=mg();Gt.getWidthFromDeviceType=e.getWidthFromDeviceType,Gt.getPartialVisibilityGutter=e.getPartialVisibilityGutter,Gt.getItemClientSideWidth=e.getItemClientSideWidth;var n=Jr();Gt.getInitialState=n.getInitialState,Gt.getIfSlideIsVisbile=n.getIfSlideIsVisbile,Gt.getTransformForCenterMode=n.getTransformForCenterMode,Gt.getTransformForPartialVsibile=n.getTransformForPartialVsibile,Gt.isInLeftEnd=n.isInLeftEnd,Gt.isInRightEnd=n.isInRightEnd,Gt.notEnoughChildren=n.notEnoughChildren,Gt.getSlidesToSlide=n.getSlidesToSlide;var r=Wv();Gt.throttle=r.default;var a=Xv();Gt.throwError=a.default;var l=jv();Gt.populateNextSlides=l.populateNextSlides;var c=qv();Gt.populatePreviousSlides=c.populatePreviousSlides;var f=Yv();return Gt.populateSlidesOnMouseTouchMove=f.populateSlidesOnMouseTouchMove,Gt}var Rs={},am;function $v(){if(am)return Rs;am=1;var s=Rs.__extends||function(){var a=function(l,c){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,h){f.__proto__=h}||function(f,h){for(var g in h)h.hasOwnProperty(g)&&(f[g]=h[g])})(l,c)};return function(l,c){function f(){this.constructor=l}a(l,c),l.prototype=c===null?Object.create(c):(f.prototype=c.prototype,new f)}}();Object.defineProperty(Rs,"__esModule",{value:!0});var e=Xi();function n(a){return"clientY"in a}Rs.isMouseMoveEvent=n;var r=function(a){function l(){return a!==null&&a.apply(this,arguments)||this}return s(l,a),l}(e.Component);return Rs.default=r,Rs}var ll={},ul={},lm;function Kv(){if(lm)return ul;lm=1,Object.defineProperty(ul,"__esModule",{value:!0});var s=od(),e=Jr();function n(r,a,l,c){var f={},h=e.getSlidesToSlide(a,l);return Array(r).fill(0).forEach(function(g,y){var x=s.getOriginalCounterPart(y,a,c);if(y===0)f[0]=x;else{var m=f[y-1]+h;f[y]=m}}),f}return ul.getLookupTableForNextSlides=n,ul}var um;function Zv(){if(um)return ll;um=1,Object.defineProperty(ll,"__esModule",{value:!0});var s=Xi(),e=od(),n=Kv(),r=Jr(),a=function(l){var c=l.props,f=l.state,h=l.goToSlide,g=l.getState,y=c.showDots,x=c.customDot,m=c.dotListClass,v=c.infinite,M=c.children;if(!y||r.notEnoughChildren(f))return null;var E,S=f.currentSlide,_=f.slidesToShow,P=r.getSlidesToSlide(f,c),b=s.Children.toArray(M);E=v?Math.ceil(b.length/P):Math.ceil((b.length-_)/P)+1;var A=n.getLookupTableForNextSlides(E,f,c,b),F=e.getOriginalIndexLookupTableByClones(_,b),N=F[S];return s.createElement("ul",{className:"react-multi-carousel-dot-list "+m},Array(E).fill(0).map(function(U,k){var D,R;if(v){R=A[k];var V=F[R];D=N===V||V<=N&&N<V+P}else{var ie=b.length-_,Z=k*P;D=(R=ie<Z?ie:Z)===S||R<S&&S<R+P&&S<b.length-_}return x?s.cloneElement(x,{index:k,active:D,key:k,onClick:function(){return h(R)},carouselState:g()}):s.createElement("li",{"data-index":k,key:k,className:"react-multi-carousel-dot "+(D?"react-multi-carousel-dot--active":"")},s.createElement("button",{"aria-label":"Go to slide "+(k+1),onClick:function(){return h(R)}}))}))};return ll.default=a,ll}var Io={},cm;function Qv(){if(cm)return Io;cm=1,Object.defineProperty(Io,"__esModule",{value:!0});var s=Xi(),e=function(r){var a=r.customLeftArrow,l=r.getState,c=r.previous,f=r.disabled,h=r.rtl;if(a)return s.cloneElement(a,{onClick:function(){return c()},carouselState:l(),disabled:f,rtl:h});var g=h?"rtl":"";return s.createElement("button",{"aria-label":"Go to previous slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--left "+g,onClick:function(){return c()},type:"button",disabled:f})};Io.LeftArrow=e;var n=function(r){var a=r.customRightArrow,l=r.getState,c=r.next,f=r.disabled,h=r.rtl;if(a)return s.cloneElement(a,{onClick:function(){return c()},carouselState:l(),disabled:f,rtl:h});var g=h?"rtl":"";return s.createElement("button",{"aria-label":"Go to next slide",className:"react-multiple-carousel__arrow react-multiple-carousel__arrow--right "+g,onClick:function(){return c()},type:"button",disabled:f})};return Io.RightArrow=n,Io}var cl={},fm;function Jv(){if(fm)return cl;fm=1,Object.defineProperty(cl,"__esModule",{value:!0});var s=Xi(),e=gg(),n=function(r){var a=r.props,l=r.state,c=r.goToSlide,f=r.clones,h=r.notEnoughChildren,g=l.itemWidth,y=a.children,x=a.infinite,m=a.itemClass,v=a.itemAriaLabel,M=a.partialVisbile,E=a.partialVisible,S=e.getInitialState(l,a),_=S.flexBisis,P=S.shouldRenderOnSSR,b=S.domFullyLoaded,A=S.partialVisibilityGutter;return S.shouldRenderAtAll?(M&&console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'),s.createElement(s.Fragment,null,(x?f:s.Children.toArray(y)).map(function(F,N){return s.createElement("li",{key:N,"data-index":N,onClick:function(){a.focusOnSelect&&c(N)},"aria-hidden":e.getIfSlideIsVisbile(N,l)?"false":"true","aria-label":v||(F.props.ariaLabel?F.props.ariaLabel:null),style:{flex:P?"1 0 "+_+"%":"auto",position:"relative",width:b?((M||E)&&A&&!h?g-A:g)+"px":"auto"},className:"react-multi-carousel-item "+(e.getIfSlideIsVisbile(N,l)?"react-multi-carousel-item--active":"")+" "+m},F)}))):null};return cl.default=n,cl}var dm;function e0(){if(dm)return Lo;dm=1;var s=Lo.__extends||function(){var x=function(m,v){return(x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(M,E){M.__proto__=E}||function(M,E){for(var S in E)E.hasOwnProperty(S)&&(M[S]=E[S])})(m,v)};return function(m,v){function M(){this.constructor=m}x(m,v),m.prototype=v===null?Object.create(v):(M.prototype=v.prototype,new M)}}();Object.defineProperty(Lo,"__esModule",{value:!0});var e=Xi(),n=gg(),r=$v(),a=Zv(),l=Qv(),c=Jv(),f=Jr(),h=400,g="transform 400ms ease-in-out",y=function(x){function m(v){var M=x.call(this,v)||this;return M.containerRef=e.createRef(),M.listRef=e.createRef(),M.state={itemWidth:0,slidesToShow:0,currentSlide:0,totalItems:e.Children.count(v.children),deviceType:"",domLoaded:!1,transform:0,containerWidth:0},M.onResize=M.onResize.bind(M),M.handleDown=M.handleDown.bind(M),M.handleMove=M.handleMove.bind(M),M.handleOut=M.handleOut.bind(M),M.onKeyUp=M.onKeyUp.bind(M),M.handleEnter=M.handleEnter.bind(M),M.setIsInThrottle=M.setIsInThrottle.bind(M),M.next=n.throttle(M.next.bind(M),v.transitionDuration||h,M.setIsInThrottle),M.previous=n.throttle(M.previous.bind(M),v.transitionDuration||h,M.setIsInThrottle),M.goToSlide=n.throttle(M.goToSlide.bind(M),v.transitionDuration||h,M.setIsInThrottle),M.onMove=!1,M.initialX=0,M.lastX=0,M.isAnimationAllowed=!1,M.direction="",M.initialY=0,M.isInThrottle=!1,M.transformPlaceHolder=0,M}return s(m,x),m.prototype.resetTotalItems=function(){var v=this,M=e.Children.count(this.props.children),E=n.notEnoughChildren(this.state)?0:Math.max(0,Math.min(this.state.currentSlide,M));this.setState({totalItems:M,currentSlide:E},function(){v.setContainerAndItemWidth(v.state.slidesToShow,!0)})},m.prototype.setIsInThrottle=function(v){v===void 0&&(v=!1),this.isInThrottle=v},m.prototype.setTransformDirectly=function(v,M){var E=this.props.additionalTransfrom;this.transformPlaceHolder=v;var S=f.getTransform(this.state,this.props,this.transformPlaceHolder);this.listRef&&this.listRef.current&&(this.setAnimationDirectly(M),this.listRef.current.style.transform="translate3d("+(S+E)+"px,0,0)")},m.prototype.setAnimationDirectly=function(v){this.listRef&&this.listRef.current&&(this.listRef.current.style.transition=v?this.props.customTransition||g:"none")},m.prototype.componentDidMount=function(){this.setState({domLoaded:!0}),this.setItemsToShow(),window.addEventListener("resize",this.onResize),this.onResize(!0),this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),this.props.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},m.prototype.setClones=function(v,M,E,S){var _=this;S===void 0&&(S=!1),this.isAnimationAllowed=!1;var P=e.Children.toArray(this.props.children),b=n.getInitialSlideInInfiniteMode(v||this.state.slidesToShow,P),A=n.getClones(this.state.slidesToShow,P),F=P.length<this.state.slidesToShow?0:this.state.currentSlide;this.setState({totalItems:A.length,currentSlide:E&&!S?F:b},function(){_.correctItemsPosition(M||_.state.itemWidth)})},m.prototype.setItemsToShow=function(v,M){var E=this,S=this.props.responsive;Object.keys(S).forEach(function(_){var P=S[_],b=P.breakpoint,A=P.items,F=b.max,N=b.min,U=[window.innerWidth];window.screen&&window.screen.width&&U.push(window.screen.width);var k=Math.min.apply(Math,U);N<=k&&k<=F&&(E.setState({slidesToShow:A,deviceType:_}),E.setContainerAndItemWidth(A,v,M))})},m.prototype.setContainerAndItemWidth=function(v,M,E){var S=this;if(this.containerRef&&this.containerRef.current){var _=this.containerRef.current.offsetWidth,P=n.getItemClientSideWidth(this.props,v,_);this.setState({containerWidth:_,itemWidth:P},function(){S.props.infinite&&S.setClones(v,P,M,E)}),M&&this.correctItemsPosition(P)}},m.prototype.correctItemsPosition=function(v,M,E){M&&(this.isAnimationAllowed=!0),!M&&this.isAnimationAllowed&&(this.isAnimationAllowed=!1);var S=this.state.totalItems<this.state.slidesToShow?0:-v*this.state.currentSlide;E&&this.setTransformDirectly(S,!0),this.setState({transform:S})},m.prototype.onResize=function(v){var M;M=!!this.props.infinite&&(typeof v!="boolean"||!v),this.setItemsToShow(M)},m.prototype.componentDidUpdate=function(v,M){var E=this,S=v.keyBoardControl,_=v.autoPlay,P=v.children,b=M.containerWidth,A=M.domLoaded,F=M.currentSlide;if(this.containerRef&&this.containerRef.current&&this.containerRef.current.offsetWidth!==b&&(this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),this.itemsToShowTimeout=setTimeout(function(){E.setItemsToShow(!0)},this.props.transitionDuration||h)),S&&!this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),!S&&this.props.keyBoardControl&&window.addEventListener("keyup",this.onKeyUp),_&&!this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),_||!this.props.autoPlay||this.autoPlay||(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed)),P.length!==this.props.children.length?m.clonesTimeout=setTimeout(function(){E.props.infinite?E.setClones(E.state.slidesToShow,E.state.itemWidth,!0,!0):E.resetTotalItems()},this.props.transitionDuration||h):this.props.infinite&&this.state.currentSlide!==F&&this.correctClonesPosition({domLoaded:A}),this.transformPlaceHolder!==this.state.transform&&(this.transformPlaceHolder=this.state.transform),this.props.autoPlay&&this.props.rewind&&!this.props.infinite&&n.isInRightEnd(this.state)){var N=this.props.transitionDuration||h;m.isInThrottleTimeout=setTimeout(function(){E.setIsInThrottle(!1),E.resetAutoplayInterval(),E.goToSlide(0,void 0,!!E.props.rewindWithAnimation)},N+this.props.autoPlaySpeed)}},m.prototype.correctClonesPosition=function(v){var M=this,E=v.domLoaded,S=e.Children.toArray(this.props.children),_=n.checkClonesPosition(this.state,S,this.props),P=_.isReachingTheEnd,b=_.isReachingTheStart,A=_.nextSlide,F=_.nextPosition;this.state.domLoaded&&E&&(P||b)&&(this.isAnimationAllowed=!1,m.transformTimeout=setTimeout(function(){M.setState({transform:F,currentSlide:A})},this.props.transitionDuration||h))},m.prototype.next=function(v){var M=this;v===void 0&&(v=0);var E=this.props,S=E.afterChange,_=E.beforeChange;if(!n.notEnoughChildren(this.state)){var P=n.populateNextSlides(this.state,this.props,v),b=P.nextSlides,A=P.nextPosition,F=this.state.currentSlide;b!==void 0&&A!==void 0&&(typeof _=="function"&&_(b,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:A,currentSlide:b},function(){typeof S=="function"&&(m.afterChangeTimeout=setTimeout(function(){S(F,M.getState())},M.props.transitionDuration||h))}))}},m.prototype.previous=function(v){var M=this;v===void 0&&(v=0);var E=this.props,S=E.afterChange,_=E.beforeChange;if(!n.notEnoughChildren(this.state)){var P=n.populatePreviousSlides(this.state,this.props,v),b=P.nextSlides,A=P.nextPosition;if(b!==void 0&&A!==void 0){var F=this.state.currentSlide;typeof _=="function"&&_(b,this.getState()),this.isAnimationAllowed=!0,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({transform:A,currentSlide:b},function(){typeof S=="function"&&(m.afterChangeTimeout2=setTimeout(function(){S(F,M.getState())},M.props.transitionDuration||h))})}}},m.prototype.resetAutoplayInterval=function(){this.props.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed))},m.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.props.keyBoardControl&&window.removeEventListener("keyup",this.onKeyUp),this.props.autoPlay&&this.autoPlay&&(clearInterval(this.autoPlay),this.autoPlay=void 0),this.itemsToShowTimeout&&clearTimeout(this.itemsToShowTimeout),m.clonesTimeout&&clearTimeout(m.clonesTimeout),m.isInThrottleTimeout&&clearTimeout(m.isInThrottleTimeout),m.transformTimeout&&clearTimeout(m.transformTimeout),m.afterChangeTimeout&&clearTimeout(m.afterChangeTimeout),m.afterChangeTimeout2&&clearTimeout(m.afterChangeTimeout2),m.afterChangeTimeout3&&clearTimeout(m.afterChangeTimeout3)},m.prototype.resetMoveStatus=function(){this.onMove=!1,this.initialX=0,this.lastX=0,this.direction="",this.initialY=0},m.prototype.getCords=function(v){var M=v.clientX,E=v.clientY;return{clientX:f.parsePosition(this.props,M),clientY:f.parsePosition(this.props,E)}},m.prototype.handleDown=function(v){if(!(!r.isMouseMoveEvent(v)&&!this.props.swipeable||r.isMouseMoveEvent(v)&&!this.props.draggable||this.isInThrottle)){var M=this.getCords(r.isMouseMoveEvent(v)?v:v.touches[0]),E=M.clientX,S=M.clientY;this.onMove=!0,this.initialX=E,this.initialY=S,this.lastX=E,this.isAnimationAllowed=!1}},m.prototype.handleMove=function(v){if(!(!r.isMouseMoveEvent(v)&&!this.props.swipeable||r.isMouseMoveEvent(v)&&!this.props.draggable||n.notEnoughChildren(this.state))){var M=this.getCords(r.isMouseMoveEvent(v)?v:v.touches[0]),E=M.clientX,S=M.clientY,_=this.initialX-E,P=this.initialY-S;if(this.onMove){if(!(Math.abs(_)>Math.abs(P)))return;var b=n.populateSlidesOnMouseTouchMove(this.state,this.props,this.initialX,this.lastX,E,this.transformPlaceHolder),A=b.direction,F=b.nextPosition,N=b.canContinue;A&&(this.direction=A,N&&F!==void 0&&this.setTransformDirectly(F)),this.lastX=E}}},m.prototype.handleOut=function(v){this.props.autoPlay&&!this.autoPlay&&(this.autoPlay=setInterval(this.next,this.props.autoPlaySpeed));var M=v.type==="touchend"&&!this.props.swipeable,E=(v.type==="mouseleave"||v.type==="mouseup")&&!this.props.draggable;if(!M&&!E&&this.onMove){if(this.setAnimationDirectly(!0),this.direction==="right")if(this.initialX-this.lastX>=this.props.minimumTouchDrag){var S=Math.round((this.initialX-this.lastX)/this.state.itemWidth);this.next(S)}else this.correctItemsPosition(this.state.itemWidth,!0,!0);this.direction==="left"&&(this.lastX-this.initialX>this.props.minimumTouchDrag?(S=Math.round((this.lastX-this.initialX)/this.state.itemWidth),this.previous(S)):this.correctItemsPosition(this.state.itemWidth,!0,!0)),this.resetMoveStatus()}},m.prototype.isInViewport=function(v){var M=v.getBoundingClientRect(),E=M.top,S=E===void 0?0:E,_=M.left,P=_===void 0?0:_,b=M.bottom,A=b===void 0?0:b,F=M.right,N=F===void 0?0:F;return 0<=S&&0<=P&&A<=(window.innerHeight||document.documentElement.clientHeight)&&N<=(window.innerWidth||document.documentElement.clientWidth)},m.prototype.isChildOfCarousel=function(v){return!!(v instanceof Element&&this.listRef&&this.listRef.current)&&this.listRef.current.contains(v)},m.prototype.onKeyUp=function(v){var M=v.target;switch(v.keyCode){case 37:if(this.isChildOfCarousel(M))return this.previous();break;case 39:if(this.isChildOfCarousel(M))return this.next();break;case 9:if(this.isChildOfCarousel(M)&&M instanceof HTMLInputElement&&this.isInViewport(M))return this.next()}},m.prototype.handleEnter=function(v){r.isMouseMoveEvent(v)&&this.autoPlay&&this.props.autoPlay&&this.props.pauseOnHover&&(clearInterval(this.autoPlay),this.autoPlay=void 0)},m.prototype.goToSlide=function(v,M,E){var S=this;if(E===void 0&&(E=!0),!this.isInThrottle){var _=this.state.itemWidth,P=this.props,b=P.afterChange,A=P.beforeChange,F=this.state.currentSlide;typeof A!="function"||M&&(typeof M!="object"||M.skipBeforeChange)||A(v,this.getState()),this.isAnimationAllowed=E,this.props.shouldResetAutoplay&&this.resetAutoplayInterval(),this.setState({currentSlide:v,transform:-_*v},function(){S.props.infinite&&S.correctClonesPosition({domLoaded:!0}),typeof b!="function"||M&&(typeof M!="object"||M.skipAfterChange)||(m.afterChangeTimeout3=setTimeout(function(){b(F,S.getState())},S.props.transitionDuration||h))})}},m.prototype.getState=function(){return this.state},m.prototype.renderLeftArrow=function(v){var M=this,E=this.props,S=E.customLeftArrow,_=E.rtl;return e.createElement(l.LeftArrow,{customLeftArrow:S,getState:function(){return M.getState()},previous:this.previous,disabled:v,rtl:_})},m.prototype.renderRightArrow=function(v){var M=this,E=this.props,S=E.customRightArrow,_=E.rtl;return e.createElement(l.RightArrow,{customRightArrow:S,getState:function(){return M.getState()},next:this.next,disabled:v,rtl:_})},m.prototype.renderButtonGroups=function(){var v=this,M=this.props.customButtonGroup;return M?e.cloneElement(M,{previous:function(){return v.previous()},next:function(){return v.next()},goToSlide:function(E,S){return v.goToSlide(E,S)},carouselState:this.getState()}):null},m.prototype.renderDotsList=function(){var v=this;return e.createElement(a.default,{state:this.state,props:this.props,goToSlide:this.goToSlide,getState:function(){return v.getState()}})},m.prototype.renderCarouselItems=function(){var v=[];if(this.props.infinite){var M=e.Children.toArray(this.props.children);v=n.getClones(this.state.slidesToShow,M)}return e.createElement(c.default,{clones:v,goToSlide:this.goToSlide,state:this.state,notEnoughChildren:n.notEnoughChildren(this.state),props:this.props})},m.prototype.render=function(){var v=this.props,M=v.deviceType,E=v.arrows,S=v.renderArrowsWhenDisabled,_=v.removeArrowOnDeviceType,P=v.infinite,b=v.containerClass,A=v.sliderClass,F=v.customTransition,N=v.additionalTransfrom,U=v.renderDotsOutside,k=v.renderButtonGroupOutside,D=v.className,R=v.rtl,V=n.getInitialState(this.state,this.props),ie=V.shouldRenderOnSSR,Z=V.shouldRenderAtAll,ce=n.isInLeftEnd(this.state),fe=n.isInRightEnd(this.state),se=E&&!(_&&(M&&-1<_.indexOf(M)||this.state.deviceType&&-1<_.indexOf(this.state.deviceType)))&&!n.notEnoughChildren(this.state)&&Z,le=!P&&ce,H=!P&&fe,ae=f.getTransform(this.state,this.props);return e.createElement(e.Fragment,null,e.createElement("div",{className:"react-multi-carousel-list "+b+" "+D,dir:R?"rtl":"ltr",ref:this.containerRef},e.createElement("ul",{ref:this.listRef,className:"react-multi-carousel-track "+A,style:{transition:this.isAnimationAllowed?F||g:"none",overflow:ie?"hidden":"unset",transform:"translate3d("+(ae+N)+"px,0,0)"},onMouseMove:this.handleMove,onMouseDown:this.handleDown,onMouseUp:this.handleOut,onMouseEnter:this.handleEnter,onMouseLeave:this.handleOut,onTouchStart:this.handleDown,onTouchMove:this.handleMove,onTouchEnd:this.handleOut},this.renderCarouselItems()),se&&(!le||S)&&this.renderLeftArrow(le),se&&(!H||S)&&this.renderRightArrow(H),Z&&!k&&this.renderButtonGroups(),Z&&!U&&this.renderDotsList()),Z&&U&&this.renderDotsList(),Z&&k&&this.renderButtonGroups())},m.defaultProps={slidesToSlide:1,infinite:!1,draggable:!0,swipeable:!0,arrows:!0,renderArrowsWhenDisabled:!1,containerClass:"",sliderClass:"",itemClass:"",keyBoardControl:!0,autoPlaySpeed:3e3,showDots:!1,renderDotsOutside:!1,renderButtonGroupOutside:!1,minimumTouchDrag:80,className:"",dotListClass:"",focusOnSelect:!1,centerMode:!1,additionalTransfrom:0,pauseOnHover:!0,shouldResetAutoplay:!0,rewind:!1,rtl:!1,rewindWithAnimation:!1},m}(e.Component);return Lo.default=y,Lo}var hm;function t0(){if(hm)return rl;hm=1,Object.defineProperty(rl,"__esModule",{value:!0});var s=e0();return rl.default=s.default,rl}var Fc,pm;function n0(){return pm||(pm=1,Fc=t0()),Fc}var i0=n0();const r0=dg(i0),s0=({project:s,isLeft:e})=>{const n={desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}};return xe.jsxs("div",{className:`project space-y-4 mb-8 flex flex-col md:flex-row ${e?"md:flex-row":"md:flex-row-reverse"}`,children:[xe.jsx("div",{className:"md:w-1/2 flex flex-col justify-center space-y-3",children:xe.jsxs("div",{className:"relative",children:[xe.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-sm"}),xe.jsxs("div",{className:"relative bg-gray-900/40 backdrop-blur-md border border-gray-700/30 rounded-xl p-6 shadow-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300",children:[xe.jsx("div",{className:`flex ${e?"justify-start":"md:justify-end justify-start"} mb-4`,children:xe.jsxs("h3",{className:"text-lg sm:text-xl font-semibold flex items-center",children:[s.name,s.link&&xe.jsx("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"ml-2 hover:text-blue-400 transition-colors duration-200",children:xe.jsx("div",{className:"flex justify-between items-center space-x-2 text-sm",children:xe.jsx(zv,{})})})]})}),xe.jsx("div",{className:"text-sm sm:text-base text-gray-300 leading-relaxed",children:xe.jsx("ul",{className:"space-y-3 list-none",children:s.description.map((r,a)=>xe.jsxs("li",{className:"flex items-center group",children:[xe.jsxs("div",{className:"relative flex-shrink-0 mr-3",children:[xe.jsx("div",{className:"w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg transform transition-transform duration-200 group-hover:scale-125"}),xe.jsx("div",{className:"absolute inset-0 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-pulse"})]}),xe.jsx("span",{className:"transition-colors duration-200 group-hover:text-white",children:r})]},a))})})]})]})}),s.images.length>0&&xe.jsx("div",{className:`md:w-1/2 mt-6 md:mt-0 ${e?"md:ml-6":"md:mr-6"}`,children:xe.jsxs("div",{className:"relative group",children:[xe.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),xe.jsxs("div",{className:"relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-500/30",children:[xe.jsx(r0,{responsive:n,swipeable:!0,draggable:!1,infinite:!1,centerMode:!1,containerClass:"rounded-lg overflow-hidden",itemClass:"px-2",children:s.images.map((r,a)=>xe.jsxs("div",{className:"relative overflow-hidden rounded-lg",children:[xe.jsx("img",{src:r,alt:`${s.name} ${a+1}`,className:"max-h-[300px] sm:max-h-[400px] md:max-h-[500px] w-full object-contain transition-transform duration-300 hover:scale-105"}),xe.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"})]},a))}),xe.jsx("div",{className:"absolute top-3 right-3",children:xe.jsxs("div",{className:"bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/80",children:[s.images.length," image",s.images.length!==1?"s":""]})})]})]})})]})},fl=s=>xe.jsx(Gv,{title:s.title,children:xe.jsx("div",{className:"container mx-auto px-4",children:s.works.map((e,n)=>xe.jsx(s0,{project:e,isLeft:(n+(s.indexOffset||0))%2===0},n))})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ad="177",o0=0,mm=1,a0=2,_g=1,l0=2,ki=3,Tr=0,In=1,Bi=2,Mr=0,Gs=1,gm=2,_m=3,vm=4,u0=5,Yr=100,c0=101,f0=102,d0=103,h0=104,p0=200,m0=201,g0=202,_0=203,_f=204,vf=205,v0=206,x0=207,S0=208,y0=209,M0=210,E0=211,T0=212,w0=213,A0=214,xf=0,Sf=1,yf=2,js=3,Mf=4,Ef=5,Tf=6,wf=7,vg=0,R0=1,C0=2,Er=0,b0=1,P0=2,D0=3,L0=4,I0=5,N0=6,U0=7,xg=300,qs=301,Ys=302,Af=303,Rf=304,ql=306,Cf=1e3,Kr=1001,bf=1002,ui=1003,F0=1004,dl=1005,vi=1006,Oc=1007,Zr=1008,Gi=1009,Sg=1010,yg=1011,zo=1012,ld=1013,es=1014,zi=1015,Wo=1016,ud=1017,cd=1018,Vo=1020,Mg=35902,Eg=1021,Tg=1022,li=1023,Ho=1026,Go=1027,wg=1028,fd=1029,Ag=1030,dd=1031,hd=1033,Fl=33776,Ol=33777,kl=33778,Bl=33779,Pf=35840,Df=35841,Lf=35842,If=35843,Nf=36196,Uf=37492,Ff=37496,Of=37808,kf=37809,Bf=37810,zf=37811,Vf=37812,Hf=37813,Gf=37814,Wf=37815,Xf=37816,jf=37817,qf=37818,Yf=37819,$f=37820,Kf=37821,zl=36492,Zf=36494,Qf=36495,Rg=36283,Jf=36284,ed=36285,td=36286,O0=3200,k0=3201,B0=0,z0=1,yr="",Kn="srgb",$s="srgb-linear",Wl="linear",Dt="srgb",Cs=7680,xm=519,V0=512,H0=513,G0=514,Cg=515,W0=516,X0=517,j0=518,q0=519,Sm=35044,ym="300 es",Vi=2e3,Xl=2001;class Zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(n);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=Math.PI/180,nd=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function Y0(s,e){return(s%e+e)%e}function Bc(s,e,n){return(1-n)*s+n*e}function No(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,n=0){At.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,l,c,f){let h=r[a+0],g=r[a+1],y=r[a+2],x=r[a+3];const m=l[c+0],v=l[c+1],M=l[c+2],E=l[c+3];if(f===0){e[n+0]=h,e[n+1]=g,e[n+2]=y,e[n+3]=x;return}if(f===1){e[n+0]=m,e[n+1]=v,e[n+2]=M,e[n+3]=E;return}if(x!==E||h!==m||g!==v||y!==M){let S=1-f;const _=h*m+g*v+y*M+x*E,P=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const F=Math.sqrt(b),N=Math.atan2(F,_*P);S=Math.sin(S*N)/F,f=Math.sin(f*N)/F}const A=f*P;if(h=h*S+m*A,g=g*S+v*A,y=y*S+M*A,x=x*S+E*A,S===1-f){const F=1/Math.sqrt(h*h+g*g+y*y+x*x);h*=F,g*=F,y*=F,x*=F}}e[n]=h,e[n+1]=g,e[n+2]=y,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,a,l,c){const f=r[a],h=r[a+1],g=r[a+2],y=r[a+3],x=l[c],m=l[c+1],v=l[c+2],M=l[c+3];return e[n]=f*M+y*x+h*v-g*m,e[n+1]=h*M+y*m+g*x-f*v,e[n+2]=g*M+y*v+f*m-h*x,e[n+3]=y*M-f*x-h*m-g*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,g=f(r/2),y=f(a/2),x=f(l/2),m=h(r/2),v=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=m*y*x+g*v*M,this._y=g*v*x-m*y*M,this._z=g*y*M+m*v*x,this._w=g*y*x-m*v*M;break;case"YXZ":this._x=m*y*x+g*v*M,this._y=g*v*x-m*y*M,this._z=g*y*M-m*v*x,this._w=g*y*x+m*v*M;break;case"ZXY":this._x=m*y*x-g*v*M,this._y=g*v*x+m*y*M,this._z=g*y*M+m*v*x,this._w=g*y*x-m*v*M;break;case"ZYX":this._x=m*y*x-g*v*M,this._y=g*v*x+m*y*M,this._z=g*y*M-m*v*x,this._w=g*y*x+m*v*M;break;case"YZX":this._x=m*y*x+g*v*M,this._y=g*v*x+m*y*M,this._z=g*y*M-m*v*x,this._w=g*y*x-m*v*M;break;case"XZY":this._x=m*y*x-g*v*M,this._y=g*v*x-m*y*M,this._z=g*y*M+m*v*x,this._w=g*y*x+m*v*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],l=n[8],c=n[1],f=n[5],h=n[9],g=n[2],y=n[6],x=n[10],m=r+f+x;if(m>0){const v=.5/Math.sqrt(m+1);this._w=.25/v,this._x=(y-h)*v,this._y=(l-g)*v,this._z=(c-a)*v}else if(r>f&&r>x){const v=2*Math.sqrt(1+r-f-x);this._w=(y-h)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(l+g)/v}else if(f>x){const v=2*Math.sqrt(1+f-r-x);this._w=(l-g)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(h+y)/v}else{const v=2*Math.sqrt(1+x-r-f);this._w=(c-a)/v,this._x=(l+g)/v,this._y=(h+y)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,l=e._z,c=e._w,f=n._x,h=n._y,g=n._z,y=n._w;return this._x=r*y+c*f+a*g-l*h,this._y=a*y+c*h+l*f-r*g,this._z=l*y+c*g+r*h-a*f,this._w=c*y-r*f-a*h-l*g,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const v=1-n;return this._w=v*c+n*this._w,this._x=v*r+n*this._x,this._y=v*a+n*this._y,this._z=v*l+n*this._z,this.normalize(),this}const g=Math.sqrt(h),y=Math.atan2(g,f),x=Math.sin((1-n)*y)/g,m=Math.sin(n*y)/g;return this._w=c*x+this._w*m,this._x=r*x+this._x*m,this._y=a*x+this._y*m,this._z=l*x+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,n=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*a,this.y=l[1]*n+l[4]*r+l[7]*a,this.z=l[2]*n+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,g=2*(c*a-f*r),y=2*(f*n-l*a),x=2*(l*r-c*n);return this.x=n+h*g+c*x-f*y,this.y=r+h*y+f*g-l*x,this.z=a+h*x+l*y-c*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*a,this.y=l[1]*n+l[5]*r+l[9]*a,this.z=l[2]*n+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,l=e.z,c=n.x,f=n.y,h=n.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new Q,Mm=new jo;class ut{constructor(e,n,r,a,l,c,f,h,g){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,g)}set(e,n,r,a,l,c,f,h,g){const y=this.elements;return y[0]=e,y[1]=a,y[2]=f,y[3]=n,y[4]=l,y[5]=h,y[6]=r,y[7]=c,y[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[3],h=r[6],g=r[1],y=r[4],x=r[7],m=r[2],v=r[5],M=r[8],E=a[0],S=a[3],_=a[6],P=a[1],b=a[4],A=a[7],F=a[2],N=a[5],U=a[8];return l[0]=c*E+f*P+h*F,l[3]=c*S+f*b+h*N,l[6]=c*_+f*A+h*U,l[1]=g*E+y*P+x*F,l[4]=g*S+y*b+x*N,l[7]=g*_+y*A+x*U,l[2]=m*E+v*P+M*F,l[5]=m*S+v*b+M*N,l[8]=m*_+v*A+M*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],y=e[8];return n*c*y-n*f*g-r*l*y+r*f*h+a*l*g-a*c*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],y=e[8],x=y*c-f*g,m=f*h-y*l,v=g*l-c*h,M=n*x+r*m+a*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=x*E,e[1]=(a*g-y*r)*E,e[2]=(f*r-a*c)*E,e[3]=m*E,e[4]=(y*n-a*h)*E,e[5]=(a*l-f*n)*E,e[6]=v*E,e[7]=(r*h-g*n)*E,e[8]=(c*n-r*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,l,c,f){const h=Math.cos(l),g=Math.sin(l);return this.set(r*h,r*g,-r*(h*c+g*f)+c+e,-a*g,a*h,-a*(-g*c+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Vc.makeScale(e,n)),this}rotate(e){return this.premultiply(Vc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Vc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vc=new ut;function bg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $0(){const s=jl("canvas");return s.style.display="block",s}const Em={};function Ws(s){s in Em||(Em[s]=!0,console.warn(s))}function K0(s,e,n){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}function Z0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Q0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tm=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(a.r=Hi(a.r),a.g=Hi(a.g),a.b=Hi(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(a.r=Xs(a.r),a.g=Xs(a.g),a.b=Xs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===yr?Wl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Et=J0();function Hi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class ex{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{bs===void 0&&(bs=jl("canvas")),bs.width=e.width,bs.height=e.height;const a=bs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=bs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=Hi(l[c]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Hi(n[r]/255)*255):n[r]=Hi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tx=0;class pd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Hc(a[c].image)):l.push(Hc(a[c]))}else l=Hc(a);r.url=l}return n||(e.images[this.uuid]=r),r}}function Hc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ex.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nx=0;const Gc=new Q;class Nn extends Zs{constructor(e=Nn.DEFAULT_IMAGE,n=Nn.DEFAULT_MAPPING,r=Kr,a=Kr,l=vi,c=Zr,f=li,h=Gi,g=Nn.DEFAULT_ANISOTROPY,y=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Xo(),this.name="",this.source=new pd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=g,this.format=f,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=xg;Nn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,r=0,a=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,l;const h=e.elements,g=h[0],y=h[4],x=h[8],m=h[1],v=h[5],M=h[9],E=h[2],S=h[6],_=h[10];if(Math.abs(y-m)<.01&&Math.abs(x-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(y+m)<.1&&Math.abs(x+E)<.1&&Math.abs(M+S)<.1&&Math.abs(g+v+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(g+1)/2,A=(v+1)/2,F=(_+1)/2,N=(y+m)/4,U=(x+E)/4,k=(M+S)/4;return b>A&&b>F?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=N/r,l=U/r):A>F?A<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),r=N/a,l=k/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=U/l,a=k/l),this.set(r,a,l,n),this}let P=Math.sqrt((S-M)*(S-M)+(x-E)*(x-E)+(m-y)*(m-y));return Math.abs(P)<.001&&(P=1),this.x=(S-M)/P,this.y=(x-E)/P,this.z=(m-y)/P,this.w=Math.acos((g+v+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ix extends Zs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const a={width:e,height:n,depth:r.depth},l=new Nn(a);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new pd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends ix{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Pg extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rx extends Nn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=ui,this.minFilter=ui,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(e=new Q(1/0,1/0,1/0),n=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,ri):ri.fromBufferAttribute(l,c),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),pl.subVectors(this.max,Uo),Ps.subVectors(e.a,Uo),Ds.subVectors(e.b,Uo),Ls.subVectors(e.c,Uo),pr.subVectors(Ds,Ps),mr.subVectors(Ls,Ds),zr.subVectors(Ps,Ls);let n=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-zr.z,zr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,zr.z,0,-zr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-zr.y,zr.x,0];return!Wc(n,Ps,Ds,Ls,pl)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Ps,Ds,Ls,pl))?!1:(ml.crossVectors(pr,mr),n=[ml.x,ml.y,ml.z],Wc(n,Ps,Ds,Ls,pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],ri=new Q,hl=new qo,Ps=new Q,Ds=new Q,Ls=new Q,pr=new Q,mr=new Q,zr=new Q,Uo=new Q,pl=new Q,ml=new Q,Vr=new Q;function Wc(s,e,n,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){Vr.fromArray(s,l);const f=a.x*Math.abs(Vr.x)+a.y*Math.abs(Vr.y)+a.z*Math.abs(Vr.z),h=e.dot(Vr),g=n.dot(Vr),y=r.dot(Vr);if(Math.max(-Math.max(h,g,y),Math.min(h,g,y))>f)return!1}return!0}const sx=new qo,Fo=new Q,Xc=new Q;class Yl{constructor(e=new Q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):sx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);const n=Fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Fo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(Xc)),this.expandByPoint(Fo.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ni=new Q,jc=new Q,gl=new Q,gr=new Q,qc=new Q,_l=new Q,Yc=new Q;class Dg{constructor(e=new Q,n=new Q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){jc.copy(e).add(n).multiplyScalar(.5),gl.copy(n).sub(e).normalize(),gr.copy(this.origin).sub(jc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(gl),f=gr.dot(this.direction),h=-gr.dot(gl),g=gr.lengthSq(),y=Math.abs(1-c*c);let x,m,v,M;if(y>0)if(x=c*h-f,m=c*f-h,M=l*y,x>=0)if(m>=-M)if(m<=M){const E=1/y;x*=E,m*=E,v=x*(x+c*m+2*f)+m*(c*x+m+2*h)+g}else m=l,x=Math.max(0,-(c*m+f)),v=-x*x+m*(m+2*h)+g;else m=-l,x=Math.max(0,-(c*m+f)),v=-x*x+m*(m+2*h)+g;else m<=-M?(x=Math.max(0,-(-c*l+f)),m=x>0?-l:Math.min(Math.max(-l,-h),l),v=-x*x+m*(m+2*h)+g):m<=M?(x=0,m=Math.min(Math.max(-l,-h),l),v=m*(m+2*h)+g):(x=Math.max(0,-(c*l+f)),m=x>0?l:Math.min(Math.max(-l,-h),l),v=-x*x+m*(m+2*h)+g);else m=c>0?-l:l,x=Math.max(0,-(c*m+f)),v=-x*x+m*(m+2*h)+g;return r&&r.copy(this.origin).addScaledVector(this.direction,x),a&&a.copy(jc).addScaledVector(gl,m),v}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const r=Ni.dot(this.direction),a=Ni.dot(Ni)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,l,c,f,h;const g=1/this.direction.x,y=1/this.direction.y,x=1/this.direction.z,m=this.origin;return g>=0?(r=(e.min.x-m.x)*g,a=(e.max.x-m.x)*g):(r=(e.max.x-m.x)*g,a=(e.min.x-m.x)*g),y>=0?(l=(e.min.y-m.y)*y,c=(e.max.y-m.y)*y):(l=(e.max.y-m.y)*y,c=(e.min.y-m.y)*y),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),x>=0?(f=(e.min.z-m.z)*x,h=(e.max.z-m.z)*x):(f=(e.max.z-m.z)*x,h=(e.min.z-m.z)*x),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,r,a,l){qc.subVectors(n,e),_l.subVectors(r,e),Yc.crossVectors(qc,_l);let c=this.direction.dot(Yc),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;gr.subVectors(this.origin,e);const h=f*this.direction.dot(_l.crossVectors(gr,_l));if(h<0)return null;const g=f*this.direction.dot(qc.cross(gr));if(g<0||h+g>c)return null;const y=-f*gr.dot(Yc);return y<0?null:this.at(y/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(e,n,r,a,l,c,f,h,g,y,x,m,v,M,E,S){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,l,c,f,h,g,y,x,m,v,M,E,S)}set(e,n,r,a,l,c,f,h,g,y,x,m,v,M,E,S){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=g,_[6]=y,_[10]=x,_[14]=m,_[3]=v,_[7]=M,_[11]=E,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),g=Math.sin(a),y=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const m=c*y,v=c*x,M=f*y,E=f*x;n[0]=h*y,n[4]=-h*x,n[8]=g,n[1]=v+M*g,n[5]=m-E*g,n[9]=-f*h,n[2]=E-m*g,n[6]=M+v*g,n[10]=c*h}else if(e.order==="YXZ"){const m=h*y,v=h*x,M=g*y,E=g*x;n[0]=m+E*f,n[4]=M*f-v,n[8]=c*g,n[1]=c*x,n[5]=c*y,n[9]=-f,n[2]=v*f-M,n[6]=E+m*f,n[10]=c*h}else if(e.order==="ZXY"){const m=h*y,v=h*x,M=g*y,E=g*x;n[0]=m-E*f,n[4]=-c*x,n[8]=M+v*f,n[1]=v+M*f,n[5]=c*y,n[9]=E-m*f,n[2]=-c*g,n[6]=f,n[10]=c*h}else if(e.order==="ZYX"){const m=c*y,v=c*x,M=f*y,E=f*x;n[0]=h*y,n[4]=M*g-v,n[8]=m*g+E,n[1]=h*x,n[5]=E*g+m,n[9]=v*g-M,n[2]=-g,n[6]=f*h,n[10]=c*h}else if(e.order==="YZX"){const m=c*h,v=c*g,M=f*h,E=f*g;n[0]=h*y,n[4]=E-m*x,n[8]=M*x+v,n[1]=x,n[5]=c*y,n[9]=-f*y,n[2]=-g*y,n[6]=v*x+M,n[10]=m-E*x}else if(e.order==="XZY"){const m=c*h,v=c*g,M=f*h,E=f*g;n[0]=h*y,n[4]=-x,n[8]=g*y,n[1]=m*x+E,n[5]=c*y,n[9]=v*x-M,n[2]=M*x-v,n[6]=f*y,n[10]=E*x+m}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ox,e,ax)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),_r.crossVectors(r,Vn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),_r.crossVectors(r,Vn)),_r.normalize(),vl.crossVectors(Vn,_r),a[0]=_r.x,a[4]=vl.x,a[8]=Vn.x,a[1]=_r.y,a[5]=vl.y,a[9]=Vn.y,a[2]=_r.z,a[6]=vl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,l=this.elements,c=r[0],f=r[4],h=r[8],g=r[12],y=r[1],x=r[5],m=r[9],v=r[13],M=r[2],E=r[6],S=r[10],_=r[14],P=r[3],b=r[7],A=r[11],F=r[15],N=a[0],U=a[4],k=a[8],D=a[12],R=a[1],V=a[5],ie=a[9],Z=a[13],ce=a[2],fe=a[6],se=a[10],le=a[14],H=a[3],ae=a[7],re=a[11],O=a[15];return l[0]=c*N+f*R+h*ce+g*H,l[4]=c*U+f*V+h*fe+g*ae,l[8]=c*k+f*ie+h*se+g*re,l[12]=c*D+f*Z+h*le+g*O,l[1]=y*N+x*R+m*ce+v*H,l[5]=y*U+x*V+m*fe+v*ae,l[9]=y*k+x*ie+m*se+v*re,l[13]=y*D+x*Z+m*le+v*O,l[2]=M*N+E*R+S*ce+_*H,l[6]=M*U+E*V+S*fe+_*ae,l[10]=M*k+E*ie+S*se+_*re,l[14]=M*D+E*Z+S*le+_*O,l[3]=P*N+b*R+A*ce+F*H,l[7]=P*U+b*V+A*fe+F*ae,l[11]=P*k+b*ie+A*se+F*re,l[15]=P*D+b*Z+A*le+F*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],g=e[13],y=e[2],x=e[6],m=e[10],v=e[14],M=e[3],E=e[7],S=e[11],_=e[15];return M*(+l*h*x-a*g*x-l*f*m+r*g*m+a*f*v-r*h*v)+E*(+n*h*v-n*g*m+l*c*m-a*c*v+a*g*y-l*h*y)+S*(+n*g*x-n*f*v-l*c*x+r*c*v+l*f*y-r*g*y)+_*(-a*f*y-n*h*x+n*f*m+a*c*x-r*c*m+r*h*y)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],g=e[7],y=e[8],x=e[9],m=e[10],v=e[11],M=e[12],E=e[13],S=e[14],_=e[15],P=x*S*g-E*m*g+E*h*v-f*S*v-x*h*_+f*m*_,b=M*m*g-y*S*g-M*h*v+c*S*v+y*h*_-c*m*_,A=y*E*g-M*x*g+M*f*v-c*E*v-y*f*_+c*x*_,F=M*x*h-y*E*h-M*f*m+c*E*m+y*f*S-c*x*S,N=n*P+r*b+a*A+l*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/N;return e[0]=P*U,e[1]=(E*m*l-x*S*l-E*a*v+r*S*v+x*a*_-r*m*_)*U,e[2]=(f*S*l-E*h*l+E*a*g-r*S*g-f*a*_+r*h*_)*U,e[3]=(x*h*l-f*m*l-x*a*g+r*m*g+f*a*v-r*h*v)*U,e[4]=b*U,e[5]=(y*S*l-M*m*l+M*a*v-n*S*v-y*a*_+n*m*_)*U,e[6]=(M*h*l-c*S*l-M*a*g+n*S*g+c*a*_-n*h*_)*U,e[7]=(c*m*l-y*h*l+y*a*g-n*m*g-c*a*v+n*h*v)*U,e[8]=A*U,e[9]=(M*x*l-y*E*l-M*r*v+n*E*v+y*r*_-n*x*_)*U,e[10]=(c*E*l-M*f*l+M*r*g-n*E*g-c*r*_+n*f*_)*U,e[11]=(y*f*l-c*x*l-y*r*g+n*x*g+c*r*v-n*f*v)*U,e[12]=F*U,e[13]=(y*E*a-M*x*a+M*r*m-n*E*m-y*r*S+n*x*S)*U,e[14]=(M*f*a-c*E*a-M*r*h+n*E*h+c*r*S-n*f*S)*U,e[15]=(c*x*a-y*f*a+y*r*h-n*x*h-c*r*m+n*f*m)*U,this}scale(e){const n=this.elements,r=e.x,a=e.y,l=e.z;return n[0]*=r,n[4]*=a,n[8]*=l,n[1]*=r,n[5]*=a,n[9]*=l,n[2]*=r,n[6]*=a,n[10]*=l,n[3]*=r,n[7]*=a,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),l=1-r,c=e.x,f=e.y,h=e.z,g=l*c,y=l*f;return this.set(g*c+r,g*f-a*h,g*h+a*f,0,g*f+a*h,y*f+r,y*h-a*c,0,g*h-a*f,y*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,l=n._x,c=n._y,f=n._z,h=n._w,g=l+l,y=c+c,x=f+f,m=l*g,v=l*y,M=l*x,E=c*y,S=c*x,_=f*x,P=h*g,b=h*y,A=h*x,F=r.x,N=r.y,U=r.z;return a[0]=(1-(E+_))*F,a[1]=(v+A)*F,a[2]=(M-b)*F,a[3]=0,a[4]=(v-A)*N,a[5]=(1-(m+_))*N,a[6]=(S+P)*N,a[7]=0,a[8]=(M+b)*U,a[9]=(S-P)*U,a[10]=(1-(m+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let l=Is.set(a[0],a[1],a[2]).length();const c=Is.set(a[4],a[5],a[6]).length(),f=Is.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],si.copy(this);const g=1/l,y=1/c,x=1/f;return si.elements[0]*=g,si.elements[1]*=g,si.elements[2]*=g,si.elements[4]*=y,si.elements[5]*=y,si.elements[6]*=y,si.elements[8]*=x,si.elements[9]*=x,si.elements[10]*=x,n.setFromRotationMatrix(si),r.x=l,r.y=c,r.z=f,this}makePerspective(e,n,r,a,l,c,f=Vi){const h=this.elements,g=2*l/(n-e),y=2*l/(r-a),x=(n+e)/(n-e),m=(r+a)/(r-a);let v,M;if(f===Vi)v=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Xl)v=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=y,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,l,c,f=Vi){const h=this.elements,g=1/(n-e),y=1/(r-a),x=1/(c-l),m=(n+e)*g,v=(r+a)*y;let M,E;if(f===Vi)M=(c+l)*x,E=-2*x;else if(f===Xl)M=l*x,E=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-m,h[1]=0,h[5]=2*y,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Is=new Q,si=new Yt,ox=new Q(0,0,0),ax=new Q(1,1,1),_r=new Q,vl=new Q,Vn=new Q,Am=new Yt,Rm=new jo;class Wi{constructor(e=0,n=0,r=0,a=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],g=a[5],y=a[9],x=a[2],m=a[6],v=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(m,g),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-x,v),this._z=Math.atan2(-c,g)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(m,v),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,g));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,g),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,g),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Lg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lx=0;const Cm=new Q,Ns=new jo,Ui=new Yt,xl=new Q,Oo=new Q,ux=new Q,cx=new jo,bm=new Q(1,0,0),Pm=new Q(0,1,0),Dm=new Q(0,0,1),Lm={type:"added"},fx={type:"removed"},Us={type:"childadded",child:null},$c={type:"childremoved",child:null};class Un extends Zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const e=new Q,n=new Wi,r=new jo,a=new Q(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Yt},normalMatrix:{value:new ut}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Oo,xl,this.up):Ui.lookAt(xl,Oo,this.up),this.quaternion.setFromRotationMatrix(Ui),a&&(Ui.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Ui),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),Us.child=e,this.dispatchEvent(Us),Us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fx),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,ux),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let g=0,y=h.length;g<y;g++){const x=h[g];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,g=this.material.length;h<g;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(n){const f=c(e.geometries),h=c(e.materials),g=c(e.textures),y=c(e.images),x=c(e.shapes),m=c(e.skeletons),v=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),g.length>0&&(r.textures=g),y.length>0&&(r.images=y),x.length>0&&(r.shapes=x),m.length>0&&(r.skeletons=m),v.length>0&&(r.animations=v),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const g in f){const y=f[g];delete y.metadata,h.push(y)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Un.DEFAULT_UP=new Q(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Q,Fi=new Q,Kc=new Q,Oi=new Q,Fs=new Q,Os=new Q,Im=new Q,Zc=new Q,Qc=new Q,Jc=new Q,ef=new qt,tf=new qt,nf=new qt;class ai{constructor(e=new Q,n=new Q,r=new Q){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),oi.subVectors(e,n),a.cross(oi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,n,r,a,l){oi.subVectors(a,n),Fi.subVectors(r,n),Kc.subVectors(e,n);const c=oi.dot(oi),f=oi.dot(Fi),h=oi.dot(Kc),g=Fi.dot(Fi),y=Fi.dot(Kc),x=c*g-f*f;if(x===0)return l.set(0,0,0),null;const m=1/x,v=(g*h-f*y)*m,M=(c*y-f*h)*m;return l.set(1-v-M,M,v)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,n,r,a,l,c,f,h){return this.getBarycoord(e,n,r,a,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Oi.x),h.addScaledVector(c,Oi.y),h.addScaledVector(f,Oi.z),h)}static getInterpolatedAttribute(e,n,r,a,l,c){return ef.setScalar(0),tf.setScalar(0),nf.setScalar(0),ef.fromBufferAttribute(e,n),tf.fromBufferAttribute(e,r),nf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(ef,l.x),c.addScaledVector(tf,l.y),c.addScaledVector(nf,l.z),c}static isFrontFacing(e,n,r,a){return oi.subVectors(r,n),Fi.subVectors(e,n),oi.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),oi.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,l){return ai.getInterpolation(e,this.a,this.b,this.c,n,r,a,l)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,l=this.c;let c,f;Fs.subVectors(a,r),Os.subVectors(l,r),Zc.subVectors(e,r);const h=Fs.dot(Zc),g=Os.dot(Zc);if(h<=0&&g<=0)return n.copy(r);Qc.subVectors(e,a);const y=Fs.dot(Qc),x=Os.dot(Qc);if(y>=0&&x<=y)return n.copy(a);const m=h*x-y*g;if(m<=0&&h>=0&&y<=0)return c=h/(h-y),n.copy(r).addScaledVector(Fs,c);Jc.subVectors(e,l);const v=Fs.dot(Jc),M=Os.dot(Jc);if(M>=0&&v<=M)return n.copy(l);const E=v*g-h*M;if(E<=0&&g>=0&&M<=0)return f=g/(g-M),n.copy(r).addScaledVector(Os,f);const S=y*M-v*x;if(S<=0&&x-y>=0&&v-M>=0)return Im.subVectors(l,a),f=(x-y)/(x-y+(v-M)),n.copy(a).addScaledVector(Im,f);const _=1/(S+E+m);return c=E*_,f=m*_,n.copy(r).addScaledVector(Fs,c).addScaledVector(Os,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function rf(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Rt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,n),this}setRGB(e,n,r,a=Et.workingColorSpace){return this.r=e,this.g=n,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,n,r,a=Et.workingColorSpace){if(e=Y0(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=rf(c,l,e+1/3),this.g=rf(c,l,e),this.b=rf(c,l,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,n=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Kn){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Et.workingToColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Et.workingColorSpace){Et.workingToColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,l=xn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,g;const y=(f+c)/2;if(f===c)h=0,g=0;else{const x=c-f;switch(g=y<=.5?x/(c+f):x/(2-c-f),c){case r:h=(a-l)/x+(a<l?6:0);break;case a:h=(l-r)/x+2;break;case l:h=(r-a)/x+4;break}h/=6}return e.h=h,e.s=g,e.l=y,e}getRGB(e,n=Et.workingColorSpace){return Et.workingToColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Kn){Et.workingToColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Kn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(Sl);const r=Bc(vr.h,Sl.h,n),a=Bc(vr.s,Sl.s,n),l=Bc(vr.l,Sl.l,n);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*a,this.g=l[1]*n+l[4]*r+l[7]*a,this.b=l[2]*n+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Rt;Rt.NAMES=Ig;let dx=0;class Yo extends Zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Gs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_f,this.blendDst=vf,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_f&&(r.blendSrc=this.blendSrc),this.blendDst!==vf&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(n){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class md extends Yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new Q,yl=new At;let hx=0;class ci{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Sm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix3(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyMatrix4(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.applyNormalMatrix(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Kt.fromBufferAttribute(this,n),Kt.transformDirection(e),this.setXYZ(n,Kt.x,Kt.y,Kt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=No(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=No(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=No(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=No(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=No(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,l){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),l=Ln(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}}class Ng extends ci{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Ug extends ci{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Si extends ci{constructor(e,n,r){super(new Float32Array(e),n,r)}}let px=0;const $n=new Yt,sf=new Un,ks=new Q,Hn=new qo,ko=new qo,ln=new Q;class yi extends Zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Ug:Ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,r){return $n.makeTranslation(e,n,r),this.applyMatrix4($n),this}scale(e,n,r){return $n.makeScale(e,n,r),this.applyMatrix4($n),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Si(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const l=e[a];n.setXYZ(a,l.x,l.y,l.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const l=n[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Hn.min,ko.min),Hn.expandByPoint(ln),ln.addVectors(Hn.max,ko.max),Hn.expandByPoint(ln)):(Hn.expandByPoint(ko.min),Hn.expandByPoint(ko.max))}Hn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],h=this.morphTargetsRelative;for(let g=0,y=f.count;g<y;g++)ln.fromBufferAttribute(f,g),h&&(ks.fromBufferAttribute(e,g),ln.add(ks)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ci(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let k=0;k<r.count;k++)f[k]=new Q,h[k]=new Q;const g=new Q,y=new Q,x=new Q,m=new At,v=new At,M=new At,E=new Q,S=new Q;function _(k,D,R){g.fromBufferAttribute(r,k),y.fromBufferAttribute(r,D),x.fromBufferAttribute(r,R),m.fromBufferAttribute(l,k),v.fromBufferAttribute(l,D),M.fromBufferAttribute(l,R),y.sub(g),x.sub(g),v.sub(m),M.sub(m);const V=1/(v.x*M.y-M.x*v.y);isFinite(V)&&(E.copy(y).multiplyScalar(M.y).addScaledVector(x,-v.y).multiplyScalar(V),S.copy(x).multiplyScalar(v.x).addScaledVector(y,-M.x).multiplyScalar(V),f[k].add(E),f[D].add(E),f[R].add(E),h[k].add(S),h[D].add(S),h[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let k=0,D=P.length;k<D;++k){const R=P[k],V=R.start,ie=R.count;for(let Z=V,ce=V+ie;Z<ce;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new Q,A=new Q,F=new Q,N=new Q;function U(k){F.fromBufferAttribute(a,k),N.copy(F);const D=f[k];b.copy(D),b.sub(F.multiplyScalar(F.dot(D))).normalize(),A.crossVectors(N,D);const V=A.dot(h[k])<0?-1:1;c.setXYZW(k,b.x,b.y,b.z,V)}for(let k=0,D=P.length;k<D;++k){const R=P[k],V=R.start,ie=R.count;for(let Z=V,ce=V+ie;Z<ce;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ci(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let m=0,v=r.count;m<v;m++)r.setXYZ(m,0,0,0);const a=new Q,l=new Q,c=new Q,f=new Q,h=new Q,g=new Q,y=new Q,x=new Q;if(e)for(let m=0,v=e.count;m<v;m+=3){const M=e.getX(m+0),E=e.getX(m+1),S=e.getX(m+2);a.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,S),y.subVectors(c,l),x.subVectors(a,l),y.cross(x),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),f.add(y),h.add(y),g.add(y),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(S,g.x,g.y,g.z)}else for(let m=0,v=n.count;m<v;m+=3)a.fromBufferAttribute(n,m+0),l.fromBufferAttribute(n,m+1),c.fromBufferAttribute(n,m+2),y.subVectors(c,l),x.subVectors(a,l),y.cross(x),r.setXYZ(m+0,y.x,y.y,y.z),r.setXYZ(m+1,y.x,y.y,y.z),r.setXYZ(m+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const g=f.array,y=f.itemSize,x=f.normalized,m=new g.constructor(h.length*y);let v=0,M=0;for(let E=0,S=h.length;E<S;E++){f.isInterleavedBufferAttribute?v=h[E]*f.data.stride+f.offset:v=h[E]*y;for(let _=0;_<y;_++)m[M++]=g[v++]}return new ci(m,y,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],g=e(h,r);n.setAttribute(f,g)}const l=this.morphAttributes;for(const f in l){const h=[],g=l[f];for(let y=0,x=g.length;y<x;y++){const m=g[y],v=e(m,r);h.push(v)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const g=c[f];n.addGroup(g.start,g.count,g.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const g=r[h];e.data.attributes[h]=g.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],y=[];for(let x=0,m=g.length;x<m;x++){const v=g[x];y.push(v.toJSON(e.data))}y.length>0&&(a[h]=y,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const g in a){const y=a[g];this.setAttribute(g,y.clone(n))}const l=e.morphAttributes;for(const g in l){const y=[],x=l[g];for(let m=0,v=x.length;m<v;m++)y.push(x[m].clone(n));this.morphAttributes[g]=y}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let g=0,y=c.length;g<y;g++){const x=c[g];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new Yt,Hr=new Dg,Ml=new Yl,Um=new Q,El=new Q,Tl=new Q,wl=new Q,of=new Q,Al=new Q,Fm=new Q,Rl=new Q;class xi extends Un{constructor(e=new yi,n=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Al.set(0,0,0);for(let h=0,g=l.length;h<g;h++){const y=f[h],x=l[h];y!==0&&(of.fromBufferAttribute(x,e),c?Al.addScaledVector(of,y):Al.addScaledVector(of.sub(n),y))}n.add(Al)}return n}raycast(e,n){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ml.copy(r.boundingSphere),Ml.applyMatrix4(l),Hr.copy(e.ray).recast(e.near),!(Ml.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ml,Um)===null||Hr.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),Hr.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,g=l.attributes.uv,y=l.attributes.uv1,x=l.attributes.normal,m=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const S=m[M],_=c[S.materialIndex],P=Math.max(S.start,v.start),b=Math.min(f.count,Math.min(S.start+S.count,v.start+v.count));for(let A=P,F=b;A<F;A+=3){const N=f.getX(A),U=f.getX(A+1),k=f.getX(A+2);a=Cl(this,_,e,r,g,y,x,N,U,k),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const M=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let S=M,_=E;S<_;S+=3){const P=f.getX(S),b=f.getX(S+1),A=f.getX(S+2);a=Cl(this,c,e,r,g,y,x,P,b,A),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const S=m[M],_=c[S.materialIndex],P=Math.max(S.start,v.start),b=Math.min(h.count,Math.min(S.start+S.count,v.start+v.count));for(let A=P,F=b;A<F;A+=3){const N=A,U=A+1,k=A+2;a=Cl(this,_,e,r,g,y,x,N,U,k),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=S.materialIndex,n.push(a))}}else{const M=Math.max(0,v.start),E=Math.min(h.count,v.start+v.count);for(let S=M,_=E;S<_;S+=3){const P=S,b=S+1,A=S+2;a=Cl(this,c,e,r,g,y,x,P,b,A),a&&(a.faceIndex=Math.floor(S/3),n.push(a))}}}}function mx(s,e,n,r,a,l,c,f){let h;if(e.side===In?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===Tr,f),h===null)return null;Rl.copy(f),Rl.applyMatrix4(s.matrixWorld);const g=n.ray.origin.distanceTo(Rl);return g<n.near||g>n.far?null:{distance:g,point:Rl.clone(),object:s}}function Cl(s,e,n,r,a,l,c,f,h,g){s.getVertexPosition(f,El),s.getVertexPosition(h,Tl),s.getVertexPosition(g,wl);const y=mx(s,e,n,r,El,Tl,wl,Fm);if(y){const x=new Q;ai.getBarycoord(Fm,El,Tl,wl,x),a&&(y.uv=ai.getInterpolatedAttribute(a,f,h,g,x,new At)),l&&(y.uv1=ai.getInterpolatedAttribute(l,f,h,g,x,new At)),c&&(y.normal=ai.getInterpolatedAttribute(c,f,h,g,x,new Q),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const m={a:f,b:h,c:g,normal:new Q,materialIndex:0};ai.getNormal(El,Tl,wl,m.normal),y.face=m,y.barycoord=x}return y}class $o extends yi{constructor(e=1,n=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],g=[],y=[],x=[];let m=0,v=0;M("z","y","x",-1,-1,r,n,e,c,l,0),M("z","y","x",1,-1,r,n,-e,c,l,1),M("x","z","y",1,1,e,r,n,a,c,2),M("x","z","y",1,-1,e,r,-n,a,c,3),M("x","y","z",1,-1,e,n,r,a,l,4),M("x","y","z",-1,-1,e,n,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Si(g,3)),this.setAttribute("normal",new Si(y,3)),this.setAttribute("uv",new Si(x,2));function M(E,S,_,P,b,A,F,N,U,k,D){const R=A/U,V=F/k,ie=A/2,Z=F/2,ce=N/2,fe=U+1,se=k+1;let le=0,H=0;const ae=new Q;for(let re=0;re<se;re++){const O=re*V-Z;for(let ne=0;ne<fe;ne++){const Ue=ne*R-ie;ae[E]=Ue*P,ae[S]=O*b,ae[_]=ce,g.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[_]=N>0?1:-1,y.push(ae.x,ae.y,ae.z),x.push(ne/U),x.push(1-re/k),le+=1}}for(let re=0;re<k;re++)for(let O=0;O<U;O++){const ne=m+O+fe*re,Ue=m+O+fe*(re+1),J=m+(O+1)+fe*(re+1),de=m+(O+1)+fe*re;h.push(ne,Ue,de),h.push(Ue,J,de),H+=6}f.addGroup(v,H,D),v+=H,m+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function Tn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function gx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const _x={clone:Ks,merge:Tn};var vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wr extends Yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vx,this.fragmentShader=xx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?n.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[a]={type:"m4",value:c.toArray()}:n.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Og extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new Q,Om=new At,km=new At;class Zn extends Og{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=nd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nd*2*Math.atan(Math.tan(kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,n){return this.getViewBounds(e,Om,km),n.subVectors(km,Om)}setViewOffset(e,n,r,a,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,g=c.fullHeight;l+=c.offsetX*a/h,n-=c.offsetY*r/g,a*=c.width/h,r*=c.height/g}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,zs=1;class Sx extends Un{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Zn(Bs,zs,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Bs,zs,e,n);l.layers=this.layers,this.add(l);const c=new Zn(Bs,zs,e,n);c.layers=this.layers,this.add(c);const f=new Zn(Bs,zs,e,n);f.layers=this.layers,this.add(f);const h=new Zn(Bs,zs,e,n);h.layers=this.layers,this.add(h);const g=new Zn(Bs,zs,e,n);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,l,c,f,h]=n;for(const g of n)this.remove(g);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of n)this.add(g),g.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,g,y]=this.children,x=e.getRenderTarget(),m=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,l),e.setRenderTarget(r,1,a),e.render(n,c),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,g),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(n,y),e.setRenderTarget(x,m,v),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class kg extends Nn{constructor(e=[],n=qs,r,a,l,c,f,h,g,y){super(e,n,r,a,l,c,f,h,g,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yx extends ts{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new kg(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $o(5,5,5),l=new wr({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Mr});l.uniforms.tEquirect.value=n;const c=new xi(a,l),f=n.minFilter;return n.minFilter===Zr&&(n.minFilter=vi),new Sx(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,a);e.setRenderTarget(l)}}class bl extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,g=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(g&&e.hand){c=!0;for(const E of e.hand.values()){const S=n.getJointPose(E,r),_=this._getHandJoint(g,E);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const y=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],m=y.position.distanceTo(x.position),v=.02,M=.005;g.inputState.pinching&&m>v+M?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&m<=v-M&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),g!==null&&(g.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new bl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Ex extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const lf=new Q,Tx=new Q,wx=new ut;class jr{constructor(e=new Q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=lf.subVectors(r,n).cross(Tx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(lf),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||wx.getNormalMatrix(e),a=this.coplanarPoint(lf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Yl,Pl=new Q;class Bg{constructor(e=new jr,n=new jr,r=new jr,a=new jr,l=new jr,c=new jr){this.planes=[e,n,r,a,l,c]}set(e,n,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Vi){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],g=a[4],y=a[5],x=a[6],m=a[7],v=a[8],M=a[9],E=a[10],S=a[11],_=a[12],P=a[13],b=a[14],A=a[15];if(r[0].setComponents(h-l,m-g,S-v,A-_).normalize(),r[1].setComponents(h+l,m+g,S+v,A+_).normalize(),r[2].setComponents(h+c,m+y,S+M,A+P).normalize(),r[3].setComponents(h-c,m-y,S-M,A-P).normalize(),r[4].setComponents(h-f,m-x,S-E,A-b).normalize(),n===Vi)r[5].setComponents(h+f,m+x,S+E,A+b).normalize();else if(n===Xl)r[5].setComponents(f,x,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(Pl.x=a.normal.x>0?e.max.x:e.min.x,Pl.y=a.normal.y>0?e.max.y:e.min.y,Pl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zg extends Yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bm=new Yt,id=new Dg,Dl=new Yl,Ll=new Q;class Ax extends Un{constructor(e=new yi,n=new zg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Dl.copy(r.boundingSphere),Dl.applyMatrix4(a),Dl.radius+=l,e.ray.intersectsSphere(Dl)===!1)return;Bm.copy(a).invert(),id.copy(e.ray).applyMatrix4(Bm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,g=r.index,x=r.attributes.position;if(g!==null){const m=Math.max(0,c.start),v=Math.min(g.count,c.start+c.count);for(let M=m,E=v;M<E;M++){const S=g.getX(M);Ll.fromBufferAttribute(x,S),zm(Ll,S,h,a,e,n,this)}}else{const m=Math.max(0,c.start),v=Math.min(x.count,c.start+c.count);for(let M=m,E=v;M<E;M++)Ll.fromBufferAttribute(x,M),zm(Ll,M,h,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function zm(s,e,n,r,a,l,c){const f=id.distanceSqToPoint(s);if(f<n){const h=new Q;id.closestPointToPoint(s,h),h.applyMatrix4(r);const g=a.ray.origin.distanceTo(h);if(g<a.near||g>a.far)return;l.push({distance:g,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Vg extends Nn{constructor(e,n,r=es,a,l,c,f=ui,h=ui,g,y=Ho,x=1){if(y!==Ho&&y!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:n,depth:x};super(m,a,l,c,f,h,y,r,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gd extends yi{constructor(e=[],n=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:a};const l=[],c=[];f(a),g(r),y(),this.setAttribute("position",new Si(l,3)),this.setAttribute("normal",new Si(l.slice(),3)),this.setAttribute("uv",new Si(c,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function f(P){const b=new Q,A=new Q,F=new Q;for(let N=0;N<n.length;N+=3)v(n[N+0],b),v(n[N+1],A),v(n[N+2],F),h(b,A,F,P)}function h(P,b,A,F){const N=F+1,U=[];for(let k=0;k<=N;k++){U[k]=[];const D=P.clone().lerp(A,k/N),R=b.clone().lerp(A,k/N),V=N-k;for(let ie=0;ie<=V;ie++)ie===0&&k===N?U[k][ie]=D:U[k][ie]=D.clone().lerp(R,ie/V)}for(let k=0;k<N;k++)for(let D=0;D<2*(N-k)-1;D++){const R=Math.floor(D/2);D%2===0?(m(U[k][R+1]),m(U[k+1][R]),m(U[k][R])):(m(U[k][R+1]),m(U[k+1][R+1]),m(U[k+1][R]))}}function g(P){const b=new Q;for(let A=0;A<l.length;A+=3)b.x=l[A+0],b.y=l[A+1],b.z=l[A+2],b.normalize().multiplyScalar(P),l[A+0]=b.x,l[A+1]=b.y,l[A+2]=b.z}function y(){const P=new Q;for(let b=0;b<l.length;b+=3){P.x=l[b+0],P.y=l[b+1],P.z=l[b+2];const A=S(P)/2/Math.PI+.5,F=_(P)/Math.PI+.5;c.push(A,1-F)}M(),x()}function x(){for(let P=0;P<c.length;P+=6){const b=c[P+0],A=c[P+2],F=c[P+4],N=Math.max(b,A,F),U=Math.min(b,A,F);N>.9&&U<.1&&(b<.2&&(c[P+0]+=1),A<.2&&(c[P+2]+=1),F<.2&&(c[P+4]+=1))}}function m(P){l.push(P.x,P.y,P.z)}function v(P,b){const A=P*3;b.x=e[A+0],b.y=e[A+1],b.z=e[A+2]}function M(){const P=new Q,b=new Q,A=new Q,F=new Q,N=new At,U=new At,k=new At;for(let D=0,R=0;D<l.length;D+=9,R+=6){P.set(l[D+0],l[D+1],l[D+2]),b.set(l[D+3],l[D+4],l[D+5]),A.set(l[D+6],l[D+7],l[D+8]),N.set(c[R+0],c[R+1]),U.set(c[R+2],c[R+3]),k.set(c[R+4],c[R+5]),F.copy(P).add(b).add(A).divideScalar(3);const V=S(F);E(N,R+0,P,V),E(U,R+2,b,V),E(k,R+4,A,V)}}function E(P,b,A,F){F<0&&P.x===1&&(c[b]=P.x-1),A.x===0&&A.z===0&&(c[b]=F/2/Math.PI+.5)}function S(P){return Math.atan2(P.z,-P.x)}function _(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gd(e.vertices,e.indices,e.radius,e.details)}}class _d extends gd{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,l,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new _d(e.radius,e.detail)}}class $l extends yi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const l=e/2,c=n/2,f=Math.floor(r),h=Math.floor(a),g=f+1,y=h+1,x=e/f,m=n/h,v=[],M=[],E=[],S=[];for(let _=0;_<y;_++){const P=_*m-c;for(let b=0;b<g;b++){const A=b*x-l;M.push(A,-P,0),E.push(0,0,1),S.push(b/f),S.push(1-_/h)}}for(let _=0;_<h;_++)for(let P=0;P<f;P++){const b=P+g*_,A=P+g*(_+1),F=P+1+g*(_+1),N=P+1+g*_;v.push(b,A,N),v.push(A,F,N)}this.setIndex(v),this.setAttribute("position",new Si(M,3)),this.setAttribute("normal",new Si(E,3)),this.setAttribute("uv",new Si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rx extends Yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cx extends Yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bx extends Og{constructor(e=-1,n=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=g*this.view.offsetX,c=l+g*this.view.width,f-=y*this.view.offsetY,h=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Px extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vm(s,e,n,r){const a=Dx(r);switch(n){case Eg:return s*e;case wg:return s*e/a.components*a.byteLength;case fd:return s*e/a.components*a.byteLength;case Ag:return s*e*2/a.components*a.byteLength;case dd:return s*e*2/a.components*a.byteLength;case Tg:return s*e*3/a.components*a.byteLength;case li:return s*e*4/a.components*a.byteLength;case hd:return s*e*4/a.components*a.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case kl:case Bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Df:case If:return Math.max(s,16)*Math.max(e,8)/4;case Pf:case Lf:return Math.max(s,8)*Math.max(e,8)/2;case Nf:case Uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Of:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $f:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case Zf:case Qf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rg:case Jf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ed:case td:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Dx(s){switch(s){case Gi:case Sg:return{byteLength:1,components:1};case zo:case yg:case Wo:return{byteLength:2,components:1};case ud:case cd:return{byteLength:2,components:4};case es:case ld:case zi:return{byteLength:4,components:1};case Mg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hg(){let s=null,e=!1,n=null,r=null;function a(l,c){n(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Lx(s){const e=new WeakMap;function n(f,h){const g=f.array,y=f.usage,x=g.byteLength,m=s.createBuffer();s.bindBuffer(h,m),s.bufferData(h,g,y),f.onUploadCallback();let v;if(g instanceof Float32Array)v=s.FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(g instanceof Int16Array)v=s.SHORT;else if(g instanceof Uint32Array)v=s.UNSIGNED_INT;else if(g instanceof Int32Array)v=s.INT;else if(g instanceof Int8Array)v=s.BYTE;else if(g instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:m,type:v,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,g){const y=h.array,x=h.updateRanges;if(s.bindBuffer(g,f),x.length===0)s.bufferSubData(g,0,y);else{x.sort((v,M)=>v.start-M.start);let m=0;for(let v=1;v<x.length;v++){const M=x[m],E=x[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,x[m]=E)}x.length=m+1;for(let v=0,M=x.length;v<M;v++){const E=x[v];s.bufferSubData(g,E.start*y.BYTES_PER_ELEMENT,y,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=e.get(f);if(g===void 0)e.set(f,n(f,h));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(g.buffer,f,h),g.version=f.version}}return{get:a,remove:l,update:c}}var Ix=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
#endif`,Hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jx=`#ifdef USE_IRIDESCENCE
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
#endif`,qx=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nS=`#define PI 3.141592653589793
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
} // validated`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rS=`vec3 transformedNormal = objectNormal;
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
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",cS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
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
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hS=`#ifdef USE_ENVMAP
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
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SS=`#ifdef USE_GRADIENTMAP
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
}`,yS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TS=`uniform bool receiveShadow;
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
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PS=`PhysicalMaterial material;
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
#endif`,DS=`struct PhysicalMaterial {
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
}`,LS=`
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
#endif`,IS=`#if defined( RE_IndirectDiffuse )
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
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HS=`#if defined( USE_POINTS_UV )
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
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YS=`#ifdef USE_MORPHTARGETS
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
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_y=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,Sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iy=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`#include <common>
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
}`,By=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Vy=`#define DISTANCE
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
}`,Hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,qy=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Qy=`#define NORMAL
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
}`,Jy=`#define NORMAL
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
}`,eM=`#define PHONG
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
}`,tM=`#define PHONG
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
}`,nM=`#define STANDARD
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
}`,iM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,sM=`#define TOON
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
}`,oM=`uniform float size;
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
}`,aM=`uniform vec3 diffuse;
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
}`,lM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,cM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Ix,alphahash_pars_fragment:Nx,alphamap_fragment:Ux,alphamap_pars_fragment:Fx,alphatest_fragment:Ox,alphatest_pars_fragment:kx,aomap_fragment:Bx,aomap_pars_fragment:zx,batching_pars_vertex:Vx,batching_vertex:Hx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:jx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Zx,color_fragment:Qx,color_pars_fragment:Jx,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:oS,emissivemap_fragment:aS,emissivemap_pars_fragment:lS,colorspace_fragment:uS,colorspace_pars_fragment:cS,envmap_fragment:fS,envmap_common_pars_fragment:dS,envmap_pars_fragment:hS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:wS,envmap_vertex:mS,fog_vertex:gS,fog_pars_vertex:_S,fog_fragment:vS,fog_pars_fragment:xS,gradientmap_pars_fragment:SS,lightmap_pars_fragment:yS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:ES,lights_pars_begin:TS,lights_toon_fragment:AS,lights_toon_pars_fragment:RS,lights_phong_fragment:CS,lights_phong_pars_fragment:bS,lights_physical_fragment:PS,lights_physical_pars_fragment:DS,lights_fragment_begin:LS,lights_fragment_maps:IS,lights_fragment_end:NS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:FS,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:kS,map_fragment:BS,map_pars_fragment:zS,map_particle_fragment:VS,map_particle_pars_fragment:HS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:WS,morphinstance_vertex:XS,morphcolor_vertex:jS,morphnormal_vertex:qS,morphtarget_pars_vertex:YS,morphtarget_vertex:$S,normal_fragment_begin:KS,normal_fragment_maps:ZS,normal_pars_fragment:QS,normal_pars_vertex:JS,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:ry,iridescence_pars_fragment:sy,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:uy,dithering_fragment:cy,dithering_pars_fragment:fy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:_y,skinbase_vertex:vy,skinning_pars_vertex:xy,skinning_vertex:Sy,skinnormal_vertex:yy,specularmap_fragment:My,specularmap_pars_fragment:Ey,tonemapping_fragment:Ty,tonemapping_pars_fragment:wy,transmission_fragment:Ay,transmission_pars_fragment:Ry,uv_pars_fragment:Cy,uv_pars_vertex:by,uv_vertex:Py,worldpos_vertex:Dy,background_vert:Ly,background_frag:Iy,backgroundCube_vert:Ny,backgroundCube_frag:Uy,cube_vert:Fy,cube_frag:Oy,depth_vert:ky,depth_frag:By,distanceRGBA_vert:zy,distanceRGBA_frag:Vy,equirect_vert:Hy,equirect_frag:Gy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:jy,meshbasic_frag:qy,meshlambert_vert:Yy,meshlambert_frag:$y,meshmatcap_vert:Ky,meshmatcap_frag:Zy,meshnormal_vert:Qy,meshnormal_frag:Jy,meshphong_vert:eM,meshphong_frag:tM,meshphysical_vert:nM,meshphysical_frag:iM,meshtoon_vert:rM,meshtoon_frag:sM,points_vert:oM,points_frag:aM,shadow_vert:lM,shadow_frag:uM,sprite_vert:cM,sprite_frag:fM},De={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Tn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Tn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Tn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Tn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Tn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Tn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Tn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Tn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Tn([De.common,De.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Tn([De.lights,De.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Il={r:0,b:0,g:0},Wr=new Wi,dM=new Yt;function hM(s,e,n,r,a,l,c){const f=new Rt(0);let h=l===!0?0:1,g,y,x=null,m=0,v=null;function M(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?n:e).get(A)),A}function E(b){let A=!1;const F=M(b);F===null?_(f,h):F&&F.isColor&&(_(F,1),A=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(b,A){const F=M(A);F&&(F.isCubeTexture||F.mapping===ql)?(y===void 0&&(y=new xi(new $o(1,1,1),new wr({name:"BackgroundCubeMaterial",uniforms:Ks(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(N,U,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(y)),Wr.copy(A.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.material.uniforms.envMap.value=F,y.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,y.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Wr)),y.material.toneMapped=Et.getTransfer(F.colorSpace)!==Dt,(x!==F||m!==F.version||v!==s.toneMapping)&&(y.material.needsUpdate=!0,x=F,m=F.version,v=s.toneMapping),y.layers.enableAll(),b.unshift(y,y.geometry,y.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new xi(new $l(2,2),new wr({name:"BackgroundMaterial",uniforms:Ks(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.toneMapped=Et.getTransfer(F.colorSpace)!==Dt,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(x!==F||m!==F.version||v!==s.toneMapping)&&(g.material.needsUpdate=!0,x=F,m=F.version,v=s.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null))}function _(b,A){b.getRGB(Il,Fg(s)),r.buffers.color.setClear(Il.r,Il.g,Il.b,A,c)}function P(){y!==void 0&&(y.geometry.dispose(),y.material.dispose(),y=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,A=1){f.set(b),h=A,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,_(f,h)},render:E,addToRenderList:S,dispose:P}}function pM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=m(null);let l=a,c=!1;function f(R,V,ie,Z,ce){let fe=!1;const se=x(Z,ie,V);l!==se&&(l=se,g(l.object)),fe=v(R,Z,ie,ce),fe&&M(R,Z,ie,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,A(R,V,ie,Z),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function h(){return s.createVertexArray()}function g(R){return s.bindVertexArray(R)}function y(R){return s.deleteVertexArray(R)}function x(R,V,ie){const Z=ie.wireframe===!0;let ce=r[R.id];ce===void 0&&(ce={},r[R.id]=ce);let fe=ce[V.id];fe===void 0&&(fe={},ce[V.id]=fe);let se=fe[Z];return se===void 0&&(se=m(h()),fe[Z]=se),se}function m(R){const V=[],ie=[],Z=[];for(let ce=0;ce<n;ce++)V[ce]=0,ie[ce]=0,Z[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ie,attributeDivisors:Z,object:R,attributes:{},index:null}}function v(R,V,ie,Z){const ce=l.attributes,fe=V.attributes;let se=0;const le=ie.getAttributes();for(const H in le)if(le[H].location>=0){const re=ce[H];let O=fe[H];if(O===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),re===void 0||re.attribute!==O||O&&re.data!==O.data)return!0;se++}return l.attributesNum!==se||l.index!==Z}function M(R,V,ie,Z){const ce={},fe=V.attributes;let se=0;const le=ie.getAttributes();for(const H in le)if(le[H].location>=0){let re=fe[H];re===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const O={};O.attribute=re,re&&re.data&&(O.data=re.data),ce[H]=O,se++}l.attributes=ce,l.attributesNum=se,l.index=Z}function E(){const R=l.newAttributes;for(let V=0,ie=R.length;V<ie;V++)R[V]=0}function S(R){_(R,0)}function _(R,V){const ie=l.newAttributes,Z=l.enabledAttributes,ce=l.attributeDivisors;ie[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),ce[R]!==V&&(s.vertexAttribDivisor(R,V),ce[R]=V)}function P(){const R=l.newAttributes,V=l.enabledAttributes;for(let ie=0,Z=V.length;ie<Z;ie++)V[ie]!==R[ie]&&(s.disableVertexAttribArray(ie),V[ie]=0)}function b(R,V,ie,Z,ce,fe,se){se===!0?s.vertexAttribIPointer(R,V,ie,ce,fe):s.vertexAttribPointer(R,V,ie,Z,ce,fe)}function A(R,V,ie,Z){E();const ce=Z.attributes,fe=ie.getAttributes(),se=V.defaultAttributeValues;for(const le in fe){const H=fe[le];if(H.location>=0){let ae=ce[le];if(ae===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,O=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ue=ne.buffer,J=ne.type,de=ne.bytesPerElement,we=J===s.INT||J===s.UNSIGNED_INT||ae.gpuType===ld;if(ae.isInterleavedBufferAttribute){const Se=ae.data,Ae=Se.stride,Ke=ae.offset;if(Se.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)_(H.location+We,Se.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let We=0;We<H.locationSize;We++)S(H.location+We);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let We=0;We<H.locationSize;We++)b(H.location+We,O/H.locationSize,J,re,Ae*de,(Ke+O/H.locationSize*We)*de,we)}else{if(ae.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)_(H.location+Se,ae.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Se=0;Se<H.locationSize;Se++)b(H.location+Se,O/H.locationSize,J,re,O*de,O/H.locationSize*Se*de,we)}}else if(se!==void 0){const re=se[le];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(H.location,re);break;case 3:s.vertexAttrib3fv(H.location,re);break;case 4:s.vertexAttrib4fv(H.location,re);break;default:s.vertexAttrib1fv(H.location,re)}}}}P()}function F(){k();for(const R in r){const V=r[R];for(const ie in V){const Z=V[ie];for(const ce in Z)y(Z[ce].object),delete Z[ce];delete V[ie]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ie in V){const Z=V[ie];for(const ce in Z)y(Z[ce].object),delete Z[ce];delete V[ie]}delete r[R.id]}function U(R){for(const V in r){const ie=r[V];if(ie[R.id]===void 0)continue;const Z=ie[R.id];for(const ce in Z)y(Z[ce].object),delete Z[ce];delete ie[R.id]}}function k(){D(),c=!0,l!==a&&(l=a,g(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:k,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:P}}function mM(s,e,n){let r;function a(g){r=g}function l(g,y){s.drawArrays(r,g,y),n.update(y,r,1)}function c(g,y,x){x!==0&&(s.drawArraysInstanced(r,g,y,x),n.update(y,r,x))}function f(g,y,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,y,0,x);let v=0;for(let M=0;M<x;M++)v+=y[M];n.update(v,r,1)}function h(g,y,x,m){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<g.length;M++)c(g[M],y[M],m[M]);else{v.multiDrawArraysInstancedWEBGL(r,g,0,y,0,m,0,x);let M=0;for(let E=0;E<x;E++)M+=y[E]*m[E];n.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function gM(s,e,n,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(U){return!(U!==li&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const k=U===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Gi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==zi&&!k)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=n.precision!==void 0?n.precision:"highp";const y=h(g);y!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",y,"instead."),g=y);const x=n.logarithmicDepthBuffer===!0,m=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:m,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:F,maxSamples:N}}function _M(s){const e=this;let n=null,r=0,a=!1,l=!1;const c=new jr,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,m){const v=x.length!==0||m||r!==0||a;return a=m,r=x.length,v},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,m){n=y(x,m,0)},this.setState=function(x,m,v){const M=x.clippingPlanes,E=x.clipIntersection,S=x.clipShadows,_=s.get(x);if(!a||M===null||M.length===0||l&&!S)l?y(null):g();else{const P=l?0:r,b=P*4;let A=_.clippingState||null;h.value=A,A=y(M,m,b,v);for(let F=0;F!==b;++F)A[F]=n[F];_.clippingState=A,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function g(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(x,m,v,M){const E=x!==null?x.length:0;let S=null;if(E!==0){if(S=h.value,M!==!0||S===null){const _=v+E*4,P=m.matrixWorldInverse;f.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let b=0,A=v;b!==E;++b,A+=4)c.copy(x[b]).applyMatrix4(P,f),c.normal.toArray(S,A),S[A+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function vM(s){let e=new WeakMap;function n(c,f){return f===Af?c.mapping=qs:f===Rf&&(c.mapping=Ys),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Af||f===Rf)if(e.has(c)){const h=e.get(c).texture;return n(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const g=new yx(h.height);return g.fromEquirectangularTexture(s,c),e.set(c,g),c.addEventListener("dispose",a),n(g.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,Hm=[.125,.215,.35,.446,.526,.582],$r=20,uf=new bx,Gm=new Rt;let cf=null,ff=0,df=0,hf=!1;const qr=(1+Math.sqrt(5))/2,Vs=1/qr,Wm=[new Q(-qr,Vs,0),new Q(qr,Vs,0),new Q(-Vs,0,qr),new Q(Vs,0,qr),new Q(0,qr,-Vs),new Q(0,qr,Vs),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],xM=new Q;class Xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,l={}){const{size:c=256,position:f=xM}=l;cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ym(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,ff,df),this._renderer.xr.enabled=hf,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qs||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),ff=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:Wo,format:li,colorSpace:$s,depthBuffer:!1},a=jm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,n,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SM(l)),this._blurMaterial=yM(l,e,n)}return a}_compileMaterial(e){const n=new xi(this._lodPlanes[0],e);this._renderer.compile(n,uf)}_sceneToCubeUV(e,n,r,a,l){const h=new Zn(90,1,n,r),g=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],x=this._renderer,m=x.autoClear,v=x.toneMapping;x.getClearColor(Gm),x.toneMapping=Er,x.autoClear=!1;const M=new md({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new xi(new $o,M);let S=!1;const _=e.background;_?_.isColor&&(M.color.copy(_),e.background=null,S=!0):(M.color.copy(Gm),S=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(h.up.set(0,g[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+y[P],l.y,l.z)):b===1?(h.up.set(0,0,g[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+y[P],l.z)):(h.up.set(0,g[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+y[P]));const A=this._cubeSize;Nl(a,b*A,P>2?A:0,A,A),x.setRenderTarget(a),S&&x.render(E,h),x.render(e,h)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=v,x.autoClear=m,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===qs||e.mapping===Ys;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ym()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new xi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Nl(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,uf)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Wm[(a-l-1)%Wm.length];this._blur(e,l-1,l,c,f)}n.autoClear=r}_blur(e,n,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,n,r,a,l,c,f){const h=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,x=new xi(this._lodPlanes[a],g),m=g.uniforms,v=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*$r-1),E=l/M,S=isFinite(l)?1+Math.floor(y*E):$r;S>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${$r}`);const _=[];let P=0;for(let U=0;U<$r;++U){const k=U/E,D=Math.exp(-k*k/2);_.push(D),U===0?P+=D:U<S&&(P+=2*D)}for(let U=0;U<_.length;U++)_[U]=_[U]/P;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=_,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:b}=this;m.dTheta.value=M,m.mipInt.value=b-r;const A=this._sizeLods[a],F=3*A*(a>b-Hs?a-b+Hs:0),N=4*(this._cubeSize-A);Nl(n,F,N,3*A,2*A),h.setRenderTarget(n),h.render(x,uf)}}function SM(s){const e=[],n=[],r=[];let a=s;const l=s-Hs+1+Hm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);n.push(f);let h=1/f;c>s-Hs?h=Hm[c-s+Hs-1]:c===0&&(h=0),r.push(h);const g=1/(f-2),y=-g,x=1+g,m=[y,y,x,y,x,x,y,y,x,x,y,x],v=6,M=6,E=3,S=2,_=1,P=new Float32Array(E*M*v),b=new Float32Array(S*M*v),A=new Float32Array(_*M*v);for(let N=0;N<v;N++){const U=N%3*2/3-1,k=N>2?0:-1,D=[U,k,0,U+2/3,k,0,U+2/3,k+1,0,U,k,0,U+2/3,k+1,0,U,k+1,0];P.set(D,E*M*N),b.set(m,S*M*N);const R=[N,N,N,N,N,N];A.set(R,_*M*N)}const F=new yi;F.setAttribute("position",new ci(P,E)),F.setAttribute("uv",new ci(b,S)),F.setAttribute("faceIndex",new ci(A,_)),e.push(F),a>Hs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function jm(s,e,n){const r=new ts(s,e,n);return r.texture.mapping=ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function yM(s,e,n){const r=new Float32Array($r),a=new Q(0,1,0);return new wr({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function qm(){return new wr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vd(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ym(){return new wr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function vd(){return`

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
	`}function MM(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,g=h===Af||h===Rf,y=h===qs||h===Ys;if(g||y){let x=e.get(f);const m=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Xm(s)),x=g?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),x.texture;if(x!==void 0)return x.texture;{const v=f.image;return g&&v&&v.height>0||y&&v&&a(v)?(n===null&&(n=new Xm(s)),x=g?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,e.set(f,x),f.addEventListener("dispose",l),x.texture):null}}}return f}function a(f){let h=0;const g=6;for(let y=0;y<g;y++)f[y]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function EM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Ws("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function TM(s,e,n,r){const a={},l=new WeakMap;function c(x){const m=x.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete a[m.id];const v=l.get(m);v&&(e.remove(v),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,n.memory.geometries--}function f(x,m){return a[m.id]===!0||(m.addEventListener("dispose",c),a[m.id]=!0,n.memory.geometries++),m}function h(x){const m=x.attributes;for(const v in m)e.update(m[v],s.ARRAY_BUFFER)}function g(x){const m=[],v=x.index,M=x.attributes.position;let E=0;if(v!==null){const P=v.array;E=v.version;for(let b=0,A=P.length;b<A;b+=3){const F=P[b+0],N=P[b+1],U=P[b+2];m.push(F,N,N,U,U,F)}}else if(M!==void 0){const P=M.array;E=M.version;for(let b=0,A=P.length/3-1;b<A;b+=3){const F=b+0,N=b+1,U=b+2;m.push(F,N,N,U,U,F)}}else return;const S=new(bg(m)?Ug:Ng)(m,1);S.version=E;const _=l.get(x);_&&e.remove(_),l.set(x,S)}function y(x){const m=l.get(x);if(m){const v=x.index;v!==null&&m.version<v.version&&g(x)}else g(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:y}}function wM(s,e,n){let r;function a(m){r=m}let l,c;function f(m){l=m.type,c=m.bytesPerElement}function h(m,v){s.drawElements(r,v,l,m*c),n.update(v,r,1)}function g(m,v,M){M!==0&&(s.drawElementsInstanced(r,v,l,m*c,M),n.update(v,r,M))}function y(m,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,l,m,0,M);let S=0;for(let _=0;_<M;_++)S+=v[_];n.update(S,r,1)}function x(m,v,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<m.length;_++)g(m[_]/c,v[_],E[_]);else{S.multiDrawElementsInstancedWEBGL(r,v,0,l,m,0,E,0,M);let _=0;for(let P=0;P<M;P++)_+=v[P]*E[P];n.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=g,this.renderMultiDraw=y,this.renderMultiDrawInstances=x}function AM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=f*(l/3);break;case s.LINES:n.lines+=f*(l/2);break;case s.LINE_STRIP:n.lines+=f*(l-1);break;case s.LINE_LOOP:n.lines+=f*l;break;case s.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function RM(s,e,n){const r=new WeakMap,a=new qt;function l(c,f,h){const g=c.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=y!==void 0?y.length:0;let m=r.get(f);if(m===void 0||m.count!==x){let R=function(){k.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var v=R;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),E===!0&&(A=2),S===!0&&(A=3);let F=f.attributes.position.count*A,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const U=new Float32Array(F*N*4*x),k=new Pg(U,F,N,x);k.type=zi,k.needsUpdate=!0;const D=A*4;for(let V=0;V<x;V++){const ie=_[V],Z=P[V],ce=b[V],fe=F*N*4*V;for(let se=0;se<ie.count;se++){const le=se*D;M===!0&&(a.fromBufferAttribute(ie,se),U[fe+le+0]=a.x,U[fe+le+1]=a.y,U[fe+le+2]=a.z,U[fe+le+3]=0),E===!0&&(a.fromBufferAttribute(Z,se),U[fe+le+4]=a.x,U[fe+le+5]=a.y,U[fe+le+6]=a.z,U[fe+le+7]=0),S===!0&&(a.fromBufferAttribute(ce,se),U[fe+le+8]=a.x,U[fe+le+9]=a.y,U[fe+le+10]=a.z,U[fe+le+11]=ce.itemSize===4?a.w:1)}}m={count:x,texture:k,size:new At(F,N)},r.set(f,m),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let M=0;for(let S=0;S<g.length;S++)M+=g[S];const E=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",g)}h.getUniforms().setValue(s,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function CM(s,e,n,r){let a=new WeakMap;function l(h){const g=r.render.frame,y=h.geometry,x=e.get(h,y);if(a.get(x)!==g&&(e.update(x),a.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==g&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const m=h.skeleton;a.get(m)!==g&&(m.update(),a.set(m,g))}return x}function c(){a=new WeakMap}function f(h){const g=h.target;g.removeEventListener("dispose",f),n.remove(g.instanceMatrix),g.instanceColor!==null&&n.remove(g.instanceColor)}return{update:l,dispose:c}}const Gg=new Nn,$m=new Vg(1,1),Wg=new Pg,Xg=new rx,jg=new kg,Km=[],Zm=[],Qm=new Float32Array(16),Jm=new Float32Array(9),eg=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let l=Km[a];if(l===void 0&&(l=new Float32Array(a),Km[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,s[c].toArray(l,f)}return l}function Jt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function en(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Kl(s,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function bM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function PM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2fv(this.addr,e),en(n,e)}}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Jt(n,e))return;s.uniform3fv(this.addr,e),en(n,e)}}function LM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4fv(this.addr,e),en(n,e)}}function IM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;eg.set(r),s.uniformMatrix2fv(this.addr,!1,eg),en(n,r)}}function NM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Jm.set(r),s.uniformMatrix3fv(this.addr,!1,Jm),en(n,r)}}function UM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Jt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),en(n,e)}else{if(Jt(n,r))return;Qm.set(r),s.uniformMatrix4fv(this.addr,!1,Qm),en(n,r)}}function FM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function OM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2iv(this.addr,e),en(n,e)}}function kM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3iv(this.addr,e),en(n,e)}}function BM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4iv(this.addr,e),en(n,e)}}function zM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Jt(n,e))return;s.uniform2uiv(this.addr,e),en(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Jt(n,e))return;s.uniform3uiv(this.addr,e),en(n,e)}}function GM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Jt(n,e))return;s.uniform4uiv(this.addr,e),en(n,e)}}function WM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?($m.compareFunction=Cg,l=$m):l=Gg,n.setTexture2D(e||l,a)}function XM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Xg,a)}function jM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||jg,a)}function qM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Wg,a)}function YM(s){switch(s){case 5126:return bM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return NM;case 35676:return UM;case 5124:case 35670:return FM;case 35667:case 35671:return OM;case 35668:case 35672:return kM;case 35669:case 35673:return BM;case 5125:return zM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return qM}}function $M(s,e){s.uniform1fv(this.addr,e)}function KM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function ZM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function QM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function JM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function eE(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function tE(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function nE(s,e){s.uniform1iv(this.addr,e)}function iE(s,e){s.uniform2iv(this.addr,e)}function rE(s,e){s.uniform3iv(this.addr,e)}function sE(s,e){s.uniform4iv(this.addr,e)}function oE(s,e){s.uniform1uiv(this.addr,e)}function aE(s,e){s.uniform2uiv(this.addr,e)}function lE(s,e){s.uniform3uiv(this.addr,e)}function uE(s,e){s.uniform4uiv(this.addr,e)}function cE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2D(e[c]||Gg,l[c])}function fE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture3D(e[c]||Xg,l[c])}function dE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTextureCube(e[c]||jg,l[c])}function hE(s,e,n){const r=this.cache,a=e.length,l=Kl(n,a);Jt(r,l)||(s.uniform1iv(this.addr,l),en(r,l));for(let c=0;c!==a;++c)n.setTexture2DArray(e[c]||Wg,l[c])}function pE(s){switch(s){case 5126:return $M;case 35664:return KM;case 35665:return ZM;case 35666:return QM;case 35674:return JM;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return aE;case 36295:return lE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return fE;case 35680:case 36300:case 36308:case 36293:return dE;case 36289:case 36303:case 36311:case 36292:return hE}}class mE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=YM(n.type)}}class gE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pE(n.type)}}class _E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,n[f.id],r)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function tg(s,e){s.seq.push(e),s.map[e.id]=e}function vE(s,e,n){const r=s.name,a=r.length;for(pf.lastIndex=0;;){const l=pf.exec(r),c=pf.lastIndex;let f=l[1];const h=l[2]==="]",g=l[3];if(h&&(f=f|0),g===void 0||g==="["&&c+2===a){tg(n,g===void 0?new mE(f,s,e):new gE(f,s,e));break}else{let x=n.map[f];x===void 0&&(x=new _E(f),tg(n,x)),n=x}}}class Vl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);vE(l,c,this)}}setValue(e,n,r,a){const l=this.map[n];l!==void 0&&l.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let l=0,c=n.length;l!==c;++l){const f=n[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in n&&r.push(c)}return r}}function ng(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const xE=37297;let SE=0;function yE(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return r.join(`
`)}const ig=new ut;function ME(s){Et._getMatrix(ig,Et.workingColorSpace,s);const e=`mat3( ${ig.elements.map(n=>n.toFixed(4))} )`;switch(Et.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function rg(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return n.toUpperCase()+`

`+a+`

`+yE(s.getShaderSource(e),c)}else return a}function EE(s,e){const n=ME(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function TE(s,e){let n;switch(e){case b0:n="Linear";break;case P0:n="Reinhard";break;case D0:n="Cineon";break;case L0:n="ACESFilmic";break;case N0:n="AgX";break;case U0:n="Neutral";break;case I0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new Q;function wE(){Et.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function RE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function CE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return n}function Bo(s){return s!==""}function sg(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function og(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(s){return s.replace(bE,DE)}const PE=new Map;function DE(s,e){let n=ct[e];if(n===void 0){const r=PE.get(e);if(r!==void 0)n=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(n)}const LE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(s){return s.replace(LE,IE)}function IE(s,e,n,r){let a="";for(let l=parseInt(e);l<parseInt(n);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function lg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function NE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===l0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function UE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ys:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ys:e="ENVMAP_MODE_REFRACTION";break}return e}function OE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case R0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function kE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function BE(s,e,n,r){const a=s.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const h=NE(n),g=UE(n),y=FE(n),x=OE(n),m=kE(n),v=AE(n),M=RE(l),E=a.createProgram();let S,_,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Bo).join(`
`),_.length>0&&(_+=`
`)):(S=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),_=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.envMap?"#define "+y:"",n.envMap?"#define "+x:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Er?"#define TONE_MAPPING":"",n.toneMapping!==Er?ct.tonemapping_pars_fragment:"",n.toneMapping!==Er?TE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,EE("linearToOutputTexel",n.outputColorSpace),wE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bo).join(`
`)),c=rd(c),c=sg(c,n),c=og(c,n),f=rd(f),f=sg(f,n),f=og(f,n),c=ag(c),f=ag(f),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",n.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=P+S+c,A=P+_+f,F=ng(a,a.VERTEX_SHADER,b),N=ng(a,a.FRAGMENT_SHADER,A);a.attachShader(E,F),a.attachShader(E,N),n.index0AttributeName!==void 0?a.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function U(V){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(E).trim(),Z=a.getShaderInfoLog(F).trim(),ce=a.getShaderInfoLog(N).trim();let fe=!0,se=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,F,N);else{const le=rg(a,F,"vertex"),H=rg(a,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ie+`
`+le+`
`+H)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Z===""||ce==="")&&(se=!1);se&&(V.diagnostics={runnable:fe,programLog:ie,vertexShader:{log:Z,prefix:S},fragmentShader:{log:ce,prefix:_}})}a.deleteShader(F),a.deleteShader(N),k=new Vl(a,E),D=CE(a,E)}let k;this.getUniforms=function(){return k===void 0&&U(this),k};let D;this.getAttributes=function(){return D===void 0&&U(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(E,xE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SE++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=N,this}let zE=0;class VE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new HE(e),n.set(e,r)),r}}class HE{constructor(e){this.id=zE++,this.code=e,this.usedTimes=0}}function GE(s,e,n,r,a,l,c){const f=new Lg,h=new VE,g=new Set,y=[],x=a.logarithmicDepthBuffer,m=a.vertexTextures;let v=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return g.add(D),D===0?"uv":`uv${D}`}function S(D,R,V,ie,Z){const ce=ie.fog,fe=Z.geometry,se=D.isMeshStandardMaterial?ie.environment:null,le=(D.isMeshStandardMaterial?n:e).get(D.envMap||se),H=le&&le.mapping===ql?le.image.height:null,ae=M[D.type];D.precision!==null&&(v=a.getMaxPrecision(D.precision),v!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",v,"instead."));const re=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,O=re!==void 0?re.length:0;let ne=0;fe.morphAttributes.position!==void 0&&(ne=1),fe.morphAttributes.normal!==void 0&&(ne=2),fe.morphAttributes.color!==void 0&&(ne=3);let Ue,J,de,we;if(ae){const xt=_i[ae];Ue=xt.vertexShader,J=xt.fragmentShader}else Ue=D.vertexShader,J=D.fragmentShader,h.update(D),de=h.getVertexShaderID(D),we=h.getFragmentShaderID(D);const Se=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ke=Z.isInstancedMesh===!0,We=Z.isBatchedMesh===!0,Ct=!!D.map,It=!!D.matcap,ht=!!le,B=!!D.aoMap,tn=!!D.lightMap,_t=!!D.bumpMap,Tt=!!D.normalMap,Xe=!!D.displacementMap,pt=!!D.emissiveMap,$e=!!D.metalnessMap,st=!!D.roughnessMap,zt=D.anisotropy>0,L=D.clearcoat>0,w=D.dispersion>0,K=D.iridescence>0,ue=D.sheen>0,pe=D.transmission>0,oe=zt&&!!D.anisotropyMap,qe=L&&!!D.clearcoatMap,Re=L&&!!D.clearcoatNormalMap,Be=L&&!!D.clearcoatRoughnessMap,Ye=K&&!!D.iridescenceMap,_e=K&&!!D.iridescenceThicknessMap,Ne=ue&&!!D.sheenColorMap,nt=ue&&!!D.sheenRoughnessMap,Qe=!!D.specularMap,Ce=!!D.specularColorMap,rt=!!D.specularIntensityMap,G=pe&&!!D.transmissionMap,be=pe&&!!D.thicknessMap,ge=!!D.gradientMap,Le=!!D.alphaMap,Me=D.alphaTest>0,he=!!D.alphaHash,Ve=!!D.extensions;let at=Er;D.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(at=s.toneMapping);const bt={shaderID:ae,shaderType:D.type,shaderName:D.name,vertexShader:Ue,fragmentShader:J,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:v,batching:We,batchingColor:We&&Z._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Z.instanceColor!==null,instancingMorph:Ke&&Z.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Se===null?s.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:$s,alphaToCoverage:!!D.alphaToCoverage,map:Ct,matcap:It,envMap:ht,envMapMode:ht&&le.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:tn,bumpMap:_t,normalMap:Tt,displacementMap:m&&Xe,emissiveMap:pt,normalMapObjectSpace:Tt&&D.normalMapType===z0,normalMapTangentSpace:Tt&&D.normalMapType===B0,metalnessMap:$e,roughnessMap:st,anisotropy:zt,anisotropyMap:oe,clearcoat:L,clearcoatMap:qe,clearcoatNormalMap:Re,clearcoatRoughnessMap:Be,dispersion:w,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:_e,sheen:ue,sheenColorMap:Ne,sheenRoughnessMap:nt,specularMap:Qe,specularColorMap:Ce,specularIntensityMap:rt,transmission:pe,transmissionMap:G,thicknessMap:be,gradientMap:ge,opaque:D.transparent===!1&&D.blending===Gs&&D.alphaToCoverage===!1,alphaMap:Le,alphaTest:Me,alphaHash:he,combine:D.combine,mapUv:Ct&&E(D.map.channel),aoMapUv:B&&E(D.aoMap.channel),lightMapUv:tn&&E(D.lightMap.channel),bumpMapUv:_t&&E(D.bumpMap.channel),normalMapUv:Tt&&E(D.normalMap.channel),displacementMapUv:Xe&&E(D.displacementMap.channel),emissiveMapUv:pt&&E(D.emissiveMap.channel),metalnessMapUv:$e&&E(D.metalnessMap.channel),roughnessMapUv:st&&E(D.roughnessMap.channel),anisotropyMapUv:oe&&E(D.anisotropyMap.channel),clearcoatMapUv:qe&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:nt&&E(D.sheenRoughnessMap.channel),specularMapUv:Qe&&E(D.specularMap.channel),specularColorMapUv:Ce&&E(D.specularColorMap.channel),specularIntensityMapUv:rt&&E(D.specularIntensityMap.channel),transmissionMapUv:G&&E(D.transmissionMap.channel),thicknessMapUv:be&&E(D.thicknessMap.channel),alphaMapUv:Le&&E(D.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Tt||zt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!fe.attributes.uv&&(Ct||Le),fog:!!ce,useFog:D.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Ae,skinning:Z.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Ct&&D.map.isVideoTexture===!0&&Et.getTransfer(D.map.colorSpace)===Dt,decodeVideoTextureEmissive:pt&&D.emissiveMap.isVideoTexture===!0&&Et.getTransfer(D.emissiveMap.colorSpace)===Dt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Bi,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ve&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&D.extensions.multiDraw===!0||We)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return bt.vertexUv1s=g.has(1),bt.vertexUv2s=g.has(2),bt.vertexUv3s=g.has(3),g.clear(),bt}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)R.push(V),R.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(R,D),b(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function b(D,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),D.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),D.push(f.mask)}function A(D){const R=M[D.type];let V;if(R){const ie=_i[R];V=_x.clone(ie.uniforms)}else V=D.uniforms;return V}function F(D,R){let V;for(let ie=0,Z=y.length;ie<Z;ie++){const ce=y[ie];if(ce.cacheKey===R){V=ce,++V.usedTimes;break}}return V===void 0&&(V=new BE(s,R,D,l),y.push(V)),V}function N(D){if(--D.usedTimes===0){const R=y.indexOf(D);y[R]=y[y.length-1],y.pop(),D.destroy()}}function U(D){h.remove(D)}function k(){h.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:A,acquireProgram:F,releaseProgram:N,releaseShaderCache:U,programs:y,dispose:k}}function WE(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:l}}function XE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ug(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function cg(){const s=[];let e=0;const n=[],r=[],a=[];function l(){e=0,n.length=0,r.length=0,a.length=0}function c(x,m,v,M,E,S){let _=s[e];return _===void 0?(_={id:x.id,object:x,geometry:m,material:v,groupOrder:M,renderOrder:x.renderOrder,z:E,group:S},s[e]=_):(_.id=x.id,_.object=x,_.geometry=m,_.material=v,_.groupOrder=M,_.renderOrder=x.renderOrder,_.z=E,_.group=S),e++,_}function f(x,m,v,M,E,S){const _=c(x,m,v,M,E,S);v.transmission>0?r.push(_):v.transparent===!0?a.push(_):n.push(_)}function h(x,m,v,M,E,S){const _=c(x,m,v,M,E,S);v.transmission>0?r.unshift(_):v.transparent===!0?a.unshift(_):n.unshift(_)}function g(x,m){n.length>1&&n.sort(x||XE),r.length>1&&r.sort(m||ug),a.length>1&&a.sort(m||ug)}function y(){for(let x=e,m=s.length;x<m;x++){const v=s[x];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:r,transparent:a,init:l,push:f,unshift:h,finish:y,sort:g}}function jE(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new cg,s.set(r,[c])):a>=l.length?(c=new cg,l.push(c)):c=l[a],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Q,color:new Rt};break;case"SpotLight":n={position:new Q,direction:new Q,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Q,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Q,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=n,n}}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let $E=0;function KE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZE(s){const e=new qE,n=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)r.probe.push(new Q);const a=new Q,l=new Yt,c=new Yt;function f(g){let y=0,x=0,m=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let v=0,M=0,E=0,S=0,_=0,P=0,b=0,A=0,F=0,N=0,U=0;g.sort(KE);for(let D=0,R=g.length;D<R;D++){const V=g[D],ie=V.color,Z=V.intensity,ce=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)y+=ie.r*Z,x+=ie.g*Z,m+=ie.b*Z;else if(V.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(V.sh.coefficients[se],Z);U++}else if(V.isDirectionalLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const le=V.shadow,H=n.get(V);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.directionalShadow[v]=H,r.directionalShadowMap[v]=fe,r.directionalShadowMatrix[v]=V.shadow.matrix,P++}r.directional[v]=se,v++}else if(V.isSpotLight){const se=e.get(V);se.position.setFromMatrixPosition(V.matrixWorld),se.color.copy(ie).multiplyScalar(Z),se.distance=ce,se.coneCos=Math.cos(V.angle),se.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),se.decay=V.decay,r.spot[E]=se;const le=V.shadow;if(V.map&&(r.spotLightMap[F]=V.map,F++,le.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[E]=le.matrix,V.castShadow){const H=n.get(V);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,r.spotShadow[E]=H,r.spotShadowMap[E]=fe,A++}E++}else if(V.isRectAreaLight){const se=e.get(V);se.color.copy(ie).multiplyScalar(Z),se.halfWidth.set(V.width*.5,0,0),se.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=se,S++}else if(V.isPointLight){const se=e.get(V);if(se.color.copy(V.color).multiplyScalar(V.intensity),se.distance=V.distance,se.decay=V.decay,V.castShadow){const le=V.shadow,H=n.get(V);H.shadowIntensity=le.intensity,H.shadowBias=le.bias,H.shadowNormalBias=le.normalBias,H.shadowRadius=le.radius,H.shadowMapSize=le.mapSize,H.shadowCameraNear=le.camera.near,H.shadowCameraFar=le.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=fe,r.pointShadowMatrix[M]=V.shadow.matrix,b++}r.point[M]=se,M++}else if(V.isHemisphereLight){const se=e.get(V);se.skyColor.copy(V.color).multiplyScalar(Z),se.groundColor.copy(V.groundColor).multiplyScalar(Z),r.hemi[_]=se,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=x,r.ambient[2]=m;const k=r.hash;(k.directionalLength!==v||k.pointLength!==M||k.spotLength!==E||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==P||k.numPointShadows!==b||k.numSpotShadows!==A||k.numSpotMaps!==F||k.numLightProbes!==U)&&(r.directional.length=v,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=U,k.directionalLength=v,k.pointLength=M,k.spotLength=E,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=P,k.numPointShadows=b,k.numSpotShadows=A,k.numSpotMaps=F,k.numLightProbes=U,r.version=$E++)}function h(g,y){let x=0,m=0,v=0,M=0,E=0;const S=y.matrixWorldInverse;for(let _=0,P=g.length;_<P;_++){const b=g[_];if(b.isDirectionalLight){const A=r.directional[x];A.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),x++}else if(b.isSpotLight){const A=r.spot[v];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(S),v++}else if(b.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),c.identity(),l.copy(b.matrixWorld),l.premultiply(S),c.extractRotation(l),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const A=r.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(S),m++}else if(b.isHemisphereLight){const A=r.hemi[E];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(S),E++}}}return{setup:f,setupView:h,state:r}}function fg(s){const e=new ZE(s),n=[],r=[];function a(y){g.camera=y,n.length=0,r.length=0}function l(y){n.push(y)}function c(y){r.push(y)}function f(){e.setup(n)}function h(y){e.setupView(n,y)}const g={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function QE(s){let e=new WeakMap;function n(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new fg(s),e.set(a,[f])):l>=c.length?(f=new fg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const JE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
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
}`;function tT(s,e,n){let r=new Bg;const a=new At,l=new At,c=new qt,f=new Rx({depthPacking:k0}),h=new Cx,g={},y=n.maxTextureSize,x={[Tr]:In,[In]:Tr,[Bi]:Bi},m=new wr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:JE,fragmentShader:eT}),v=m.clone();v.defines.HORIZONTAL_PASS=1;const M=new yi;M.setAttribute("position",new ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xi(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let _=this.type;this.render=function(N,U,k){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Mr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Z=_!==ki&&this.type===ki,ce=_===ki&&this.type!==ki;for(let fe=0,se=N.length;fe<se;fe++){const le=N[fe],H=le.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ae=H.getFrameExtents();if(a.multiply(ae),l.copy(H.mapSize),(a.x>y||a.y>y)&&(a.x>y&&(l.x=Math.floor(y/ae.x),a.x=l.x*ae.x,H.mapSize.x=l.x),a.y>y&&(l.y=Math.floor(y/ae.y),a.y=l.y*ae.y,H.mapSize.y=l.y)),H.map===null||Z===!0||ce===!0){const O=this.type!==ki?{minFilter:ui,magFilter:ui}:{};H.map!==null&&H.map.dispose(),H.map=new ts(a.x,a.y,O),H.map.texture.name=le.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const re=H.getViewportCount();for(let O=0;O<re;O++){const ne=H.getViewport(O);c.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ie.viewport(c),H.updateMatrices(le,O),r=H.getFrustum(),A(U,k,H.camera,le,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&P(H,k),H.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(D,R,V)};function P(N,U){const k=e.update(E);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ts(a.x,a.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(U,null,k,m,E,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(U,null,k,v,E,null)}function b(N,U,k,D){let R=null;const V=k.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=k.isPointLight===!0?h:f,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const ie=R.uuid,Z=U.uuid;let ce=g[ie];ce===void 0&&(ce={},g[ie]=ce);let fe=ce[Z];fe===void 0&&(fe=R.clone(),ce[Z]=fe,U.addEventListener("dispose",F)),R=fe}if(R.visible=U.visible,R.wireframe=U.wireframe,D===ki?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:x[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=s.properties.get(R);ie.light=k}return R}function A(N,U,k,D,R){if(N.visible===!1)return;if(N.layers.test(U.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ki)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),ce=N.material;if(Array.isArray(ce)){const fe=Z.groups;for(let se=0,le=fe.length;se<le;se++){const H=fe[se],ae=ce[H.materialIndex];if(ae&&ae.visible){const re=b(N,ae,D,R);N.onBeforeShadow(s,N,U,k,Z,re,H),s.renderBufferDirect(k,null,Z,re,N,H),N.onAfterShadow(s,N,U,k,Z,re,H)}}}else if(ce.visible){const fe=b(N,ce,D,R);N.onBeforeShadow(s,N,U,k,Z,fe,null),s.renderBufferDirect(k,null,Z,fe,N,null),N.onAfterShadow(s,N,U,k,Z,fe,null)}}const ie=N.children;for(let Z=0,ce=ie.length;Z<ce;Z++)A(ie[Z],U,k,D,R)}function F(N){N.target.removeEventListener("dispose",F);for(const k in g){const D=g[k],R=N.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const nT={[xf]:Sf,[yf]:Tf,[Mf]:wf,[js]:Ef,[Sf]:xf,[Tf]:yf,[wf]:Mf,[Ef]:js};function iT(s,e){function n(){let G=!1;const be=new qt;let ge=null;const Le=new qt(0,0,0,0);return{setMask:function(Me){ge!==Me&&!G&&(s.colorMask(Me,Me,Me,Me),ge=Me)},setLocked:function(Me){G=Me},setClear:function(Me,he,Ve,at,bt){bt===!0&&(Me*=at,he*=at,Ve*=at),be.set(Me,he,Ve,at),Le.equals(be)===!1&&(s.clearColor(Me,he,Ve,at),Le.copy(be))},reset:function(){G=!1,ge=null,Le.set(-1,0,0,0)}}}function r(){let G=!1,be=!1,ge=null,Le=null,Me=null;return{setReversed:function(he){if(be!==he){const Ve=e.get("EXT_clip_control");he?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),be=he;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return be},setTest:function(he){he?Se(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(he){ge!==he&&!G&&(s.depthMask(he),ge=he)},setFunc:function(he){if(be&&(he=nT[he]),Le!==he){switch(he){case xf:s.depthFunc(s.NEVER);break;case Sf:s.depthFunc(s.ALWAYS);break;case yf:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Mf:s.depthFunc(s.EQUAL);break;case Ef:s.depthFunc(s.GEQUAL);break;case Tf:s.depthFunc(s.GREATER);break;case wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=he}},setLocked:function(he){G=he},setClear:function(he){Me!==he&&(be&&(he=1-he),s.clearDepth(he),Me=he)},reset:function(){G=!1,ge=null,Le=null,Me=null,be=!1}}}function a(){let G=!1,be=null,ge=null,Le=null,Me=null,he=null,Ve=null,at=null,bt=null;return{setTest:function(xt){G||(xt?Se(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(xt){be!==xt&&!G&&(s.stencilMask(xt),be=xt)},setFunc:function(xt,wn,Sn){(ge!==xt||Le!==wn||Me!==Sn)&&(s.stencilFunc(xt,wn,Sn),ge=xt,Le=wn,Me=Sn)},setOp:function(xt,wn,Sn){(he!==xt||Ve!==wn||at!==Sn)&&(s.stencilOp(xt,wn,Sn),he=xt,Ve=wn,at=Sn)},setLocked:function(xt){G=xt},setClear:function(xt){bt!==xt&&(s.clearStencil(xt),bt=xt)},reset:function(){G=!1,be=null,ge=null,Le=null,Me=null,he=null,Ve=null,at=null,bt=null}}}const l=new n,c=new r,f=new a,h=new WeakMap,g=new WeakMap;let y={},x={},m=new WeakMap,v=[],M=null,E=!1,S=null,_=null,P=null,b=null,A=null,F=null,N=null,U=new Rt(0,0,0),k=0,D=!1,R=null,V=null,ie=null,Z=null,ce=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,le=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=le>=1):H.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=le>=2);let ae=null,re={};const O=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ue=new qt().fromArray(O),J=new qt().fromArray(ne);function de(G,be,ge,Le){const Me=new Uint8Array(4),he=s.createTexture();s.bindTexture(G,he),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ge;Ve++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(be+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return he}const we={};we[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Se(s.DEPTH_TEST),c.setFunc(js),_t(!1),Tt(mm),Se(s.CULL_FACE),B(Mr);function Se(G){y[G]!==!0&&(s.enable(G),y[G]=!0)}function Ae(G){y[G]!==!1&&(s.disable(G),y[G]=!1)}function Ke(G,be){return x[G]!==be?(s.bindFramebuffer(G,be),x[G]=be,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=be),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=be),!0):!1}function We(G,be){let ge=v,Le=!1;if(G){ge=m.get(be),ge===void 0&&(ge=[],m.set(be,ge));const Me=G.textures;if(ge.length!==Me.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ve=Me.length;he<Ve;he++)ge[he]=s.COLOR_ATTACHMENT0+he;ge.length=Me.length,Le=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ge)}function Ct(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const It={[Yr]:s.FUNC_ADD,[c0]:s.FUNC_SUBTRACT,[f0]:s.FUNC_REVERSE_SUBTRACT};It[d0]=s.MIN,It[h0]=s.MAX;const ht={[p0]:s.ZERO,[m0]:s.ONE,[g0]:s.SRC_COLOR,[_f]:s.SRC_ALPHA,[M0]:s.SRC_ALPHA_SATURATE,[S0]:s.DST_COLOR,[v0]:s.DST_ALPHA,[_0]:s.ONE_MINUS_SRC_COLOR,[vf]:s.ONE_MINUS_SRC_ALPHA,[y0]:s.ONE_MINUS_DST_COLOR,[x0]:s.ONE_MINUS_DST_ALPHA,[E0]:s.CONSTANT_COLOR,[T0]:s.ONE_MINUS_CONSTANT_COLOR,[w0]:s.CONSTANT_ALPHA,[A0]:s.ONE_MINUS_CONSTANT_ALPHA};function B(G,be,ge,Le,Me,he,Ve,at,bt,xt){if(G===Mr){E===!0&&(Ae(s.BLEND),E=!1);return}if(E===!1&&(Se(s.BLEND),E=!0),G!==u0){if(G!==S||xt!==D){if((_!==Yr||A!==Yr)&&(s.blendEquation(s.FUNC_ADD),_=Yr,A=Yr),xt)switch(G){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.ONE,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}P=null,b=null,F=null,N=null,U.set(0,0,0),k=0,S=G,D=xt}return}Me=Me||be,he=he||ge,Ve=Ve||Le,(be!==_||Me!==A)&&(s.blendEquationSeparate(It[be],It[Me]),_=be,A=Me),(ge!==P||Le!==b||he!==F||Ve!==N)&&(s.blendFuncSeparate(ht[ge],ht[Le],ht[he],ht[Ve]),P=ge,b=Le,F=he,N=Ve),(at.equals(U)===!1||bt!==k)&&(s.blendColor(at.r,at.g,at.b,bt),U.copy(at),k=bt),S=G,D=!1}function tn(G,be){G.side===Bi?Ae(s.CULL_FACE):Se(s.CULL_FACE);let ge=G.side===In;be&&(ge=!ge),_t(ge),G.blending===Gs&&G.transparent===!1?B(Mr):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const Le=G.stencilWrite;f.setTest(Le),Le&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),pt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function Tt(G){G!==o0?(Se(s.CULL_FACE),G!==V&&(G===mm?s.cullFace(s.BACK):G===a0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),V=G}function Xe(G){G!==ie&&(se&&s.lineWidth(G),ie=G)}function pt(G,be,ge){G?(Se(s.POLYGON_OFFSET_FILL),(Z!==be||ce!==ge)&&(s.polygonOffset(be,ge),Z=be,ce=ge)):Ae(s.POLYGON_OFFSET_FILL)}function $e(G){G?Se(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function st(G){G===void 0&&(G=s.TEXTURE0+fe-1),ae!==G&&(s.activeTexture(G),ae=G)}function zt(G,be,ge){ge===void 0&&(ae===null?ge=s.TEXTURE0+fe-1:ge=ae);let Le=re[ge];Le===void 0&&(Le={type:void 0,texture:void 0},re[ge]=Le),(Le.type!==G||Le.texture!==be)&&(ae!==ge&&(s.activeTexture(ge),ae=ge),s.bindTexture(G,be||we[G]),Le.type=G,Le.texture=be)}function L(){const G=re[ae];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function nt(G){J.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function Qe(G,be){let ge=g.get(be);ge===void 0&&(ge=new WeakMap,g.set(be,ge));let Le=ge.get(G);Le===void 0&&(Le=s.getUniformBlockIndex(be,G.name),ge.set(G,Le))}function Ce(G,be){const Le=g.get(be).get(G);h.get(be)!==Le&&(s.uniformBlockBinding(be,Le,G.__bindingPointIndex),h.set(be,Le))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),y={},ae=null,re={},x={},m=new WeakMap,v=[],M=null,E=!1,S=null,_=null,P=null,b=null,A=null,F=null,N=null,U=new Rt(0,0,0),k=0,D=!1,R=null,V=null,ie=null,Z=null,ce=null,Ue.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Se,disable:Ae,bindFramebuffer:Ke,drawBuffers:We,useProgram:Ct,setBlending:B,setMaterial:tn,setFlipSided:_t,setCullFace:Tt,setLineWidth:Xe,setPolygonOffset:pt,setScissorTest:$e,activeTexture:st,bindTexture:zt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:Ye,texImage3D:_e,updateUBOMapping:Qe,uniformBlockBinding:Ce,texStorage2D:Re,texStorage3D:Be,texSubImage2D:ue,texSubImage3D:pe,compressedTexSubImage2D:oe,compressedTexSubImage3D:qe,scissor:Ne,viewport:nt,reset:rt}}function rT(s,e,n,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new At,y=new WeakMap;let x;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return v?new OffscreenCanvas(L,w):jl("canvas")}function E(L,w,K){let ue=1;const pe=zt(L);if((pe.width>K||pe.height>K)&&(ue=K/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(ue*pe.width),qe=Math.floor(ue*pe.height);x===void 0&&(x=M(oe,qe));const Re=w?M(oe,qe):x;return Re.width=oe,Re.height=qe,Re.getContext("2d").drawImage(L,0,0,oe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+oe+"x"+qe+")."),Re}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,w,K,ue,pe=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=w;if(w===s.RED&&(K===s.FLOAT&&(oe=s.R32F),K===s.HALF_FLOAT&&(oe=s.R16F),K===s.UNSIGNED_BYTE&&(oe=s.R8)),w===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.R8UI),K===s.UNSIGNED_SHORT&&(oe=s.R16UI),K===s.UNSIGNED_INT&&(oe=s.R32UI),K===s.BYTE&&(oe=s.R8I),K===s.SHORT&&(oe=s.R16I),K===s.INT&&(oe=s.R32I)),w===s.RG&&(K===s.FLOAT&&(oe=s.RG32F),K===s.HALF_FLOAT&&(oe=s.RG16F),K===s.UNSIGNED_BYTE&&(oe=s.RG8)),w===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RG8UI),K===s.UNSIGNED_SHORT&&(oe=s.RG16UI),K===s.UNSIGNED_INT&&(oe=s.RG32UI),K===s.BYTE&&(oe=s.RG8I),K===s.SHORT&&(oe=s.RG16I),K===s.INT&&(oe=s.RG32I)),w===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),K===s.UNSIGNED_INT&&(oe=s.RGB32UI),K===s.BYTE&&(oe=s.RGB8I),K===s.SHORT&&(oe=s.RGB16I),K===s.INT&&(oe=s.RGB32I)),w===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),K===s.UNSIGNED_INT&&(oe=s.RGBA32UI),K===s.BYTE&&(oe=s.RGBA8I),K===s.SHORT&&(oe=s.RGBA16I),K===s.INT&&(oe=s.RGBA32I)),w===s.RGB&&K===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),w===s.RGBA){const qe=pe?Wl:Et.getTransfer(ue);K===s.FLOAT&&(oe=s.RGBA32F),K===s.HALF_FLOAT&&(oe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(oe=qe===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function A(L,w){let K;return L?w===null||w===es||w===Vo?K=s.DEPTH24_STENCIL8:w===zi?K=s.DEPTH32F_STENCIL8:w===zo&&(K=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Vo?K=s.DEPTH_COMPONENT24:w===zi?K=s.DEPTH_COMPONENT32F:w===zo&&(K=s.DEPTH_COMPONENT16),K}function F(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==vi?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=L.target;w.removeEventListener("dispose",N),k(w),w.isVideoTexture&&y.delete(w)}function U(L){const w=L.target;w.removeEventListener("dispose",U),R(w)}function k(L){const w=r.get(L);if(w.__webglInit===void 0)return;const K=L.source,ue=m.get(K);if(ue){const pe=ue[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(L),Object.keys(ue).length===0&&m.delete(K)}r.remove(L)}function D(L){const w=r.get(L);s.deleteTexture(w.__webglTexture);const K=L.source,ue=m.get(K);delete ue[w.__cacheKey],c.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let pe=0;pe<w.__webglFramebuffer[ue].length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[ue][pe]);else s.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)s.deleteFramebuffer(w.__webglFramebuffer[ue]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=L.textures;for(let ue=0,pe=K.length;ue<pe;ue++){const oe=r.get(K[ue]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),c.memory.textures--),r.remove(K[ue])}r.remove(L)}let V=0;function ie(){V=0}function Z(){const L=V;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),V+=1,L}function ce(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function fe(L,w){const K=r.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ue=L.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(K,L,w);return}}n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+w)}function se(L,w){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,w);return}n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+w)}function le(L,w){const K=r.get(L);if(L.version>0&&K.__version!==L.version){we(K,L,w);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+w)}function H(L,w){const K=r.get(L);if(L.version>0&&K.__version!==L.version){Se(K,L,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+w)}const ae={[Cf]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[bf]:s.MIRRORED_REPEAT},re={[ui]:s.NEAREST,[F0]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[vi]:s.LINEAR,[Oc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},O={[V0]:s.NEVER,[q0]:s.ALWAYS,[H0]:s.LESS,[Cg]:s.LEQUAL,[G0]:s.EQUAL,[j0]:s.GEQUAL,[W0]:s.GREATER,[X0]:s.NOTEQUAL};function ne(L,w){if(w.type===zi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===vi||w.magFilter===Oc||w.magFilter===dl||w.magFilter===Zr||w.minFilter===vi||w.minFilter===Oc||w.minFilter===dl||w.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ae[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ui||w.minFilter!==dl&&w.minFilter!==Zr||w.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(L,w){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const ue=w.source;let pe=m.get(ue);pe===void 0&&(pe={},m.set(ue,pe));const oe=ce(w);if(oe!==L.__cacheKey){pe[oe]===void 0&&(pe[oe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,K=!0),pe[oe].usedTimes++;const qe=pe[L.__cacheKey];qe!==void 0&&(pe[L.__cacheKey].usedTimes--,qe.usedTimes===0&&D(w)),L.__cacheKey=oe,L.__webglTexture=pe[oe].texture}return K}function J(L,w,K){return Math.floor(Math.floor(L/K)/w)}function de(L,w,K,ue){const oe=L.updateRanges;if(oe.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,K,ue,w.data);else{oe.sort((_e,Ne)=>_e.start-Ne.start);let qe=0;for(let _e=1;_e<oe.length;_e++){const Ne=oe[qe],nt=oe[_e],Qe=Ne.start+Ne.count,Ce=J(nt.start,w.width,4),rt=J(Ne.start,w.width,4);nt.start<=Qe+1&&Ce===rt&&J(nt.start+nt.count-1,w.width,4)===Ce?Ne.count=Math.max(Ne.count,nt.start+nt.count-Ne.start):(++qe,oe[qe]=nt)}oe.length=qe+1;const Re=s.getParameter(s.UNPACK_ROW_LENGTH),Be=s.getParameter(s.UNPACK_SKIP_PIXELS),Ye=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let _e=0,Ne=oe.length;_e<Ne;_e++){const nt=oe[_e],Qe=Math.floor(nt.start/4),Ce=Math.ceil(nt.count/4),rt=Qe%w.width,G=Math.floor(Qe/w.width),be=Ce,ge=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),n.texSubImage2D(s.TEXTURE_2D,0,rt,G,be,ge,K,ue,w.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Be),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ye)}}function we(L,w,K){let ue=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=s.TEXTURE_3D);const pe=Ue(L,w),oe=w.source;n.bindTexture(ue,L.__webglTexture,s.TEXTURE0+K);const qe=r.get(oe);if(oe.version!==qe.__version||pe===!0){n.activeTexture(s.TEXTURE0+K);const Re=Et.getPrimaries(Et.workingColorSpace),Be=w.colorSpace===yr?null:Et.getPrimaries(w.colorSpace),Ye=w.colorSpace===yr||Re===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let _e=E(w.image,!1,a.maxTextureSize);_e=st(w,_e);const Ne=l.convert(w.format,w.colorSpace),nt=l.convert(w.type);let Qe=b(w.internalFormat,Ne,nt,w.colorSpace,w.isVideoTexture);ne(ue,w);let Ce;const rt=w.mipmaps,G=w.isVideoTexture!==!0,be=qe.__version===void 0||pe===!0,ge=oe.dataReady,Le=F(w,_e);if(w.isDepthTexture)Qe=A(w.format===Go,w.type),be&&(G?n.texStorage2D(s.TEXTURE_2D,1,Qe,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,nt,null));else if(w.isDataTexture)if(rt.length>0){G&&be&&n.texStorage2D(s.TEXTURE_2D,Le,Qe,rt[0].width,rt[0].height);for(let Me=0,he=rt.length;Me<he;Me++)Ce=rt[Me],G?ge&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Ne,nt,Ce.data):n.texImage2D(s.TEXTURE_2D,Me,Qe,Ce.width,Ce.height,0,Ne,nt,Ce.data);w.generateMipmaps=!1}else G?(be&&n.texStorage2D(s.TEXTURE_2D,Le,Qe,_e.width,_e.height),ge&&de(w,_e,Ne,nt)):n.texImage2D(s.TEXTURE_2D,0,Qe,_e.width,_e.height,0,Ne,nt,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,rt[0].width,rt[0].height,_e.depth);for(let Me=0,he=rt.length;Me<he;Me++)if(Ce=rt[Me],w.format!==li)if(Ne!==null)if(G){if(ge)if(w.layerUpdates.size>0){const Ve=Vm(Ce.width,Ce.height,w.format,w.type);for(const at of w.layerUpdates){const bt=Ce.data.subarray(at*Ve/Ce.data.BYTES_PER_ELEMENT,(at+1)*Ve/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,at,Ce.width,Ce.height,1,Ne,bt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,_e.depth,Ne,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Qe,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?ge&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Ce.width,Ce.height,_e.depth,Ne,nt,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Me,Qe,Ce.width,Ce.height,_e.depth,0,Ne,nt,Ce.data)}else{G&&be&&n.texStorage2D(s.TEXTURE_2D,Le,Qe,rt[0].width,rt[0].height);for(let Me=0,he=rt.length;Me<he;Me++)Ce=rt[Me],w.format!==li?Ne!==null?G?ge&&n.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Ne,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,Me,Qe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?ge&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce.width,Ce.height,Ne,nt,Ce.data):n.texImage2D(s.TEXTURE_2D,Me,Qe,Ce.width,Ce.height,0,Ne,nt,Ce.data)}else if(w.isDataArrayTexture)if(G){if(be&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Qe,_e.width,_e.height,_e.depth),ge)if(w.layerUpdates.size>0){const Me=Vm(_e.width,_e.height,w.format,w.type);for(const he of w.layerUpdates){const Ve=_e.data.subarray(he*Me/_e.data.BYTES_PER_ELEMENT,(he+1)*Me/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,_e.width,_e.height,1,Ne,nt,Ve)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Qe,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(w.isData3DTexture)G?(be&&n.texStorage3D(s.TEXTURE_3D,Le,Qe,_e.width,_e.height,_e.depth),ge&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,nt,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Qe,_e.width,_e.height,_e.depth,0,Ne,nt,_e.data);else if(w.isFramebufferTexture){if(be)if(G)n.texStorage2D(s.TEXTURE_2D,Le,Qe,_e.width,_e.height);else{let Me=_e.width,he=_e.height;for(let Ve=0;Ve<Le;Ve++)n.texImage2D(s.TEXTURE_2D,Ve,Qe,Me,he,0,Ne,nt,null),Me>>=1,he>>=1}}else if(rt.length>0){if(G&&be){const Me=zt(rt[0]);n.texStorage2D(s.TEXTURE_2D,Le,Qe,Me.width,Me.height)}for(let Me=0,he=rt.length;Me<he;Me++)Ce=rt[Me],G?ge&&n.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ne,nt,Ce):n.texImage2D(s.TEXTURE_2D,Me,Qe,Ne,nt,Ce);w.generateMipmaps=!1}else if(G){if(be){const Me=zt(_e);n.texStorage2D(s.TEXTURE_2D,Le,Qe,Me.width,Me.height)}ge&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,nt,_e)}else n.texImage2D(s.TEXTURE_2D,0,Qe,Ne,nt,_e);S(w)&&_(ue),qe.__version=oe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,K){if(w.image.length!==6)return;const ue=Ue(L,w),pe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+K);const oe=r.get(pe);if(pe.version!==oe.__version||ue===!0){n.activeTexture(s.TEXTURE0+K);const qe=Et.getPrimaries(Et.workingColorSpace),Re=w.colorSpace===yr?null:Et.getPrimaries(w.colorSpace),Be=w.colorSpace===yr||qe===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!Ye&&!_e?Ne[he]=E(w.image[he],!0,a.maxCubemapSize):Ne[he]=_e?w.image[he].image:w.image[he],Ne[he]=st(w,Ne[he]);const nt=Ne[0],Qe=l.convert(w.format,w.colorSpace),Ce=l.convert(w.type),rt=b(w.internalFormat,Qe,Ce,w.colorSpace),G=w.isVideoTexture!==!0,be=oe.__version===void 0||ue===!0,ge=pe.dataReady;let Le=F(w,nt);ne(s.TEXTURE_CUBE_MAP,w);let Me;if(Ye){G&&be&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,nt.width,nt.height);for(let he=0;he<6;he++){Me=Ne[he].mipmaps;for(let Ve=0;Ve<Me.length;Ve++){const at=Me[Ve];w.format!==li?Qe!==null?G?ge&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,at.width,at.height,Qe,at.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,0,0,at.width,at.height,Qe,Ce,at.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve,rt,at.width,at.height,0,Qe,Ce,at.data)}}}else{if(Me=w.mipmaps,G&&be){Me.length>0&&Le++;const he=zt(Ne[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Le,rt,he.width,he.height)}for(let he=0;he<6;he++)if(_e){G?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ne[he].width,Ne[he].height,Qe,Ce,Ne[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Ne[he].width,Ne[he].height,0,Qe,Ce,Ne[he].data);for(let Ve=0;Ve<Me.length;Ve++){const bt=Me[Ve].image[he].image;G?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,bt.width,bt.height,Qe,Ce,bt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,rt,bt.width,bt.height,0,Qe,Ce,bt.data)}}else{G?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Qe,Ce,Ne[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Qe,Ce,Ne[he]);for(let Ve=0;Ve<Me.length;Ve++){const at=Me[Ve];G?ge&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,0,0,Qe,Ce,at.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ve+1,rt,Qe,Ce,at.image[he])}}}S(w)&&_(s.TEXTURE_CUBE_MAP),oe.__version=pe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Ae(L,w,K,ue,pe,oe){const qe=l.convert(K.format,K.colorSpace),Re=l.convert(K.type),Be=b(K.internalFormat,qe,Re,K.colorSpace),Ye=r.get(w),_e=r.get(K);if(_e.__renderTarget=w,!Ye.__hasExternalTextures){const Ne=Math.max(1,w.width>>oe),nt=Math.max(1,w.height>>oe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,oe,Be,Ne,nt,w.depth,0,qe,Re,null):n.texImage2D(pe,oe,Be,Ne,nt,0,qe,Re,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),pt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,pe,_e.__webglTexture,0,Xe(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,pe,_e.__webglTexture,oe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(L,w,K){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const ue=w.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,oe=A(w.stencilBuffer,pe),qe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=Xe(w);pt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Re,oe,w.width,w.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,oe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,oe,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const ue=w.textures;for(let pe=0;pe<ue.length;pe++){const oe=ue[pe],qe=l.convert(oe.format,oe.colorSpace),Re=l.convert(oe.type),Be=b(oe.internalFormat,qe,Re,oe.colorSpace),Ye=Xe(w);K&&pt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Be,w.width,w.height):pt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=r.get(w.depthTexture);ue.__renderTarget=w,(!ue.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),fe(w.depthTexture,0);const pe=ue.__webglTexture,oe=Xe(w);if(w.depthTexture.format===Ho)pt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Go)pt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ct(L){const w=r.get(L),K=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ue=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=ue}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ue=L.texture.mipmaps;ue&&ue.length>0?We(w.__webglFramebuffer[0],L):We(w.__webglFramebuffer,L)}else if(K){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ke(w.__webglDepthbuffer[ue],L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}else{const ue=L.texture.mipmaps;if(ue&&ue.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ke(w.__webglDepthbuffer,L,!1);else{const pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,oe)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function It(L,w,K){const ue=r.get(L);w!==void 0&&Ae(ue.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Ct(L)}function ht(L){const w=L.texture,K=r.get(L),ue=r.get(w);L.addEventListener("dispose",U);const pe=L.textures,oe=L.isWebGLCubeRenderTarget===!0,qe=pe.length>1;if(qe||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=w.version,c.memory.textures++),oe){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Be=0;Be<w.mipmaps.length;Be++)K.__webglFramebuffer[Re][Be]=s.createFramebuffer()}else K.__webglFramebuffer[Re]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<w.mipmaps.length;Re++)K.__webglFramebuffer[Re]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Re=0,Be=pe.length;Re<Be;Re++){const Ye=r.get(pe[Re]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&pt(L)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<pe.length;Re++){const Be=pe[Re];K.__webglColorRenderbuffer[Re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const Ye=l.convert(Be.format,Be.colorSpace),_e=l.convert(Be.type),Ne=b(Be.internalFormat,Ye,_e,Be.colorSpace,L.isXRRenderTarget===!0),nt=Xe(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(K.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ne(s.TEXTURE_CUBE_MAP,w);for(let Re=0;Re<6;Re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Ae(K.__webglFramebuffer[Re][Be],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Be);else Ae(K.__webglFramebuffer[Re],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);S(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qe){for(let Re=0,Be=pe.length;Re<Be;Re++){const Ye=pe[Re],_e=r.get(Ye);n.bindTexture(s.TEXTURE_2D,_e.__webglTexture),ne(s.TEXTURE_2D,Ye),Ae(K.__webglFramebuffer,L,Ye,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,0),S(Ye)&&_(s.TEXTURE_2D)}n.unbindTexture()}else{let Re=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,ue.__webglTexture),ne(Re,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Ae(K.__webglFramebuffer[Be],L,w,s.COLOR_ATTACHMENT0,Re,Be);else Ae(K.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,Re,0);S(w)&&_(Re),n.unbindTexture()}L.depthBuffer&&Ct(L)}function B(L){const w=L.textures;for(let K=0,ue=w.length;K<ue;K++){const pe=w[K];if(S(pe)){const oe=P(L),qe=r.get(pe).__webglTexture;n.bindTexture(oe,qe),_(oe),n.unbindTexture()}}}const tn=[],_t=[];function Tt(L){if(L.samples>0){if(pt(L)===!1){const w=L.textures,K=L.width,ue=L.height;let pe=s.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(L),Re=w.length>1;if(Re)for(let Ye=0;Ye<w.length;Ye++)n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Be=L.texture.mipmaps;Be&&Be.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const _e=r.get(w[Ye]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,K,ue,0,0,K,ue,pe,s.NEAREST),h===!0&&(tn.length=0,_t.length=0,tn.push(s.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(tn.push(oe),_t.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tn))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Re)for(let Ye=0;Ye<w.length;Ye++){n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Ye]);const _e=r.get(w[Ye]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ye,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Xe(L){return Math.min(a.maxSamples,L.samples)}function pt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $e(L){const w=c.render.frame;y.get(L)!==w&&(y.set(L,w),L.update())}function st(L,w){const K=L.colorSpace,ue=L.format,pe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==$s&&K!==yr&&(Et.getTransfer(K)===Dt?(ue!==li||pe!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function zt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=fe,this.setTexture2DArray=se,this.setTexture3D=le,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=pt}function sT(s,e){function n(r,a=yr){let l;const c=Et.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===ud)return s.UNSIGNED_SHORT_4_4_4_4;if(r===cd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Mg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Sg)return s.BYTE;if(r===yg)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===ld)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===Wo)return s.HALF_FLOAT;if(r===Eg)return s.ALPHA;if(r===Tg)return s.RGB;if(r===li)return s.RGBA;if(r===Ho)return s.DEPTH_COMPONENT;if(r===Go)return s.DEPTH_STENCIL;if(r===wg)return s.RED;if(r===fd)return s.RED_INTEGER;if(r===Ag)return s.RG;if(r===dd)return s.RG_INTEGER;if(r===hd)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===kl||r===Bl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pf||r===Df||r===Lf||r===If)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Df)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Lf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===If)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nf||r===Uf||r===Ff)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Nf||r===Uf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ff)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Of||r===kf||r===Bf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf||r===jf||r===qf||r===Yf||r===$f||r===Kf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Of)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$f)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Kf)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===Zf||r===Qf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rg||r===Jf||r===ed||r===td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Jf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const oT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aT=`
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

}`;class lT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new Nn,l=e.properties.get(a);l.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new wr({vertexShader:oT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new $l(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends Zs{constructor(e,n){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,g=null,y=null,x=null,m=null,v=null,M=null;const E=new lT,S=n.getContextAttributes();let _=null,P=null;const b=[],A=[],F=new At;let N=null;const U=new Zn;U.viewport=new qt;const k=new Zn;k.viewport=new qt;const D=[U,k],R=new Px;let V=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=b[J];return de===void 0&&(de=new af,b[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=b[J];return de===void 0&&(de=new af,b[J]=de),de.getGripSpace()},this.getHand=function(J){let de=b[J];return de===void 0&&(de=new af,b[J]=de),de.getHandSpace()};function Z(J){const de=A.indexOf(J.inputSource);if(de===-1)return;const we=b[de];we!==void 0&&(we.update(J.inputSource,J.frame,g||c),we.dispatchEvent({type:J.type,data:J.inputSource}))}function ce(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",ce),a.removeEventListener("inputsourceschange",fe);for(let J=0;J<b.length;J++){const de=A[J];de!==null&&(A[J]=null,b[J].disconnect(de))}V=null,ie=null,E.reset(),e.setRenderTarget(_),v=null,m=null,x=null,a=null,P=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(J){g=J},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(_=e.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",ce),a.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await n.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Se=null,Ae=null;S.depth&&(Ae=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,we=S.stencil?Go:Ho,Se=S.stencil?Vo:es);const Ke={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:l};x=new XRWebGLBinding(a,n),m=x.createProjectionLayer(Ke),a.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new ts(m.textureWidth,m.textureHeight,{format:li,type:Gi,depthTexture:new Vg(m.textureWidth,m.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const we={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(a,n,we),a.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new ts(v.framebufferWidth,v.framebufferHeight,{format:li,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),g=null,c=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function fe(J){for(let de=0;de<J.removed.length;de++){const we=J.removed[de],Se=A.indexOf(we);Se>=0&&(A[Se]=null,b[Se].disconnect(we))}for(let de=0;de<J.added.length;de++){const we=J.added[de];let Se=A.indexOf(we);if(Se===-1){for(let Ke=0;Ke<b.length;Ke++)if(Ke>=A.length){A.push(we),Se=Ke;break}else if(A[Ke]===null){A[Ke]=we,Se=Ke;break}if(Se===-1)break}const Ae=b[Se];Ae&&Ae.connect(we)}}const se=new Q,le=new Q;function H(J,de,we){se.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(we.matrixWorld);const Se=se.distanceTo(le),Ae=de.projectionMatrix.elements,Ke=we.projectionMatrix.elements,We=Ae[14]/(Ae[10]-1),Ct=Ae[14]/(Ae[10]+1),It=(Ae[9]+1)/Ae[5],ht=(Ae[9]-1)/Ae[5],B=(Ae[8]-1)/Ae[0],tn=(Ke[8]+1)/Ke[0],_t=We*B,Tt=We*tn,Xe=Se/(-B+tn),pt=Xe*-B;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(pt),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const $e=We+Xe,st=Ct+Xe,zt=_t-pt,L=Tt+(Se-pt),w=It*Ct/st*$e,K=ht*Ct/st*$e;J.projectionMatrix.makePerspective(zt,L,w,K,$e,st),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ae(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let de=J.near,we=J.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(we=E.depthFar)),R.near=k.near=U.near=de,R.far=k.far=U.far=we,(V!==R.near||ie!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ie=R.far),U.layers.mask=J.layers.mask|2,k.layers.mask=J.layers.mask|4,R.layers.mask=U.layers.mask|k.layers.mask;const Se=J.parent,Ae=R.cameras;ae(R,Se);for(let Ke=0;Ke<Ae.length;Ke++)ae(Ae[Ke],Se);Ae.length===2?H(R,U,k):R.projectionMatrix.copy(U.projectionMatrix),re(J,R,Se)};function re(J,de,we){we===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=nd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(m===null&&v===null))return h},this.setFoveation=function(J){h=J,m!==null&&(m.fixedFoveation=J),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let O=null;function ne(J,de){if(y=de.getViewerPose(g||c),M=de,y!==null){const we=y.views;v!==null&&(e.setRenderTargetFramebuffer(P,v.framebuffer),e.setRenderTarget(P));let Se=!1;we.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let We=0;We<we.length;We++){const Ct=we[We];let It=null;if(v!==null)It=v.getViewport(Ct);else{const B=x.getViewSubImage(m,Ct);It=B.viewport,We===0&&(e.setRenderTargetTextures(P,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(P))}let ht=D[We];ht===void 0&&(ht=new Zn,ht.layers.enable(We),ht.viewport=new qt,D[We]=ht),ht.matrix.fromArray(Ct.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Ct.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(It.x,It.y,It.width,It.height),We===0&&(R.matrix.copy(ht.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(ht)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){const We=x.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&E.init(e,We,a.renderState)}}for(let we=0;we<b.length;we++){const Se=A[we],Ae=b[we];Se!==null&&Ae!==void 0&&Ae.update(Se,de,g||c)}O&&O(J,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ue=new Hg;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(J){O=J},this.dispose=function(){}}}const Xr=new Wi,cT=new Yt;function fT(s,e){function n(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Fg(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function a(S,_,P,b,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(S,_):_.isMeshToonMaterial?(l(S,_),x(S,_)):_.isMeshPhongMaterial?(l(S,_),y(S,_)):_.isMeshStandardMaterial?(l(S,_),m(S,_),_.isMeshPhysicalMaterial&&v(S,_,A)):_.isMeshMatcapMaterial?(l(S,_),M(S,_)):_.isMeshDepthMaterial?l(S,_):_.isMeshDistanceMaterial?(l(S,_),E(S,_)):_.isMeshNormalMaterial?l(S,_):_.isLineBasicMaterial?(c(S,_),_.isLineDashedMaterial&&f(S,_)):_.isPointsMaterial?h(S,_,P,b):_.isSpriteMaterial?g(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,n(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===In&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,n(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===In&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,n(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,n(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=e.get(_),b=P.envMap,A=P.envMapRotation;b&&(S.envMap.value=b,Xr.copy(A),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),S.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Xr)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,S.aoMapTransform))}function c(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform))}function f(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function h(S,_,P,b){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=b*.5,_.map&&(S.map.value=_.map,n(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,n(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,n(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function y(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function m(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function v(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function E(S,_){const P=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function dT(s,e,n,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,b){const A=b.program;r.uniformBlockBinding(P,A)}function g(P,b){let A=a[P.id];A===void 0&&(M(P),A=y(P),a[P.id]=A,P.addEventListener("dispose",S));const F=b.program;r.updateUBOMapping(P,F);const N=e.render.frame;l[P.id]!==N&&(m(P),l[P.id]=N)}function y(P){const b=x();P.__bindingPointIndex=b;const A=s.createBuffer(),F=P.__size,N=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,F,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,A),A}function x(){for(let P=0;P<f;P++)if(c.indexOf(P)===-1)return c.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(P){const b=a[P.id],A=P.uniforms,F=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let N=0,U=A.length;N<U;N++){const k=Array.isArray(A[N])?A[N]:[A[N]];for(let D=0,R=k.length;D<R;D++){const V=k[D];if(v(V,N,D,F)===!0){const ie=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let ce=0;for(let fe=0;fe<Z.length;fe++){const se=Z[fe],le=E(se);typeof se=="number"||typeof se=="boolean"?(V.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ie+ce,V.__data)):se.isMatrix3?(V.__data[0]=se.elements[0],V.__data[1]=se.elements[1],V.__data[2]=se.elements[2],V.__data[3]=0,V.__data[4]=se.elements[3],V.__data[5]=se.elements[4],V.__data[6]=se.elements[5],V.__data[7]=0,V.__data[8]=se.elements[6],V.__data[9]=se.elements[7],V.__data[10]=se.elements[8],V.__data[11]=0):(se.toArray(V.__data,ce),ce+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(P,b,A,F){const N=P.value,U=b+"_"+A;if(F[U]===void 0)return typeof N=="number"||typeof N=="boolean"?F[U]=N:F[U]=N.clone(),!0;{const k=F[U];if(typeof N=="number"||typeof N=="boolean"){if(k!==N)return F[U]=N,!0}else if(k.equals(N)===!1)return k.copy(N),!0}return!1}function M(P){const b=P.uniforms;let A=0;const F=16;for(let U=0,k=b.length;U<k;U++){const D=Array.isArray(b[U])?b[U]:[b[U]];for(let R=0,V=D.length;R<V;R++){const ie=D[R],Z=Array.isArray(ie.value)?ie.value:[ie.value];for(let ce=0,fe=Z.length;ce<fe;ce++){const se=Z[ce],le=E(se),H=A%F,ae=H%le.boundary,re=H+ae;A+=ae,re!==0&&F-re<le.storage&&(A+=F-re),ie.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=A,A+=le.storage}}}const N=A%F;return N>0&&(A+=F-N),P.__size=A,P.__cache={},this}function E(P){const b={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(b.boundary=4,b.storage=4):P.isVector2?(b.boundary=8,b.storage=8):P.isVector3||P.isColor?(b.boundary=16,b.storage=12):P.isVector4?(b.boundary=16,b.storage=16):P.isMatrix3?(b.boundary=48,b.storage=48):P.isMatrix4?(b.boundary=64,b.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),b}function S(P){const b=P.target;b.removeEventListener("dispose",S);const A=c.indexOf(b.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function _(){for(const P in a)s.deleteBuffer(a[P]);c=[],a={},l={}}return{bind:h,update:g,dispose:_}}class hT{constructor(e={}){const{canvas:n=$0(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let v;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=r.getContextAttributes().alpha}else v=c;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,_=null;const P=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let F=!1;this._outputColorSpace=Kn;let N=0,U=0,k=null,D=-1,R=null;const V=new qt,ie=new qt;let Z=null;const ce=new Rt(0);let fe=0,se=n.width,le=n.height,H=1,ae=null,re=null;const O=new qt(0,0,se,le),ne=new qt(0,0,se,le);let Ue=!1;const J=new Bg;let de=!1,we=!1;const Se=new Yt,Ae=new Yt,Ke=new Q,We=new qt,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function ht(){return k===null?H:1}let B=r;function tn(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:y,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ad}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",he,!1),B===null){const X="webgl2";if(B=tn(X,C),B===null)throw tn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let _t,Tt,Xe,pt,$e,st,zt,L,w,K,ue,pe,oe,qe,Re,Be,Ye,_e,Ne,nt,Qe,Ce,rt,G;function be(){_t=new EM(B),_t.init(),Ce=new sT(B,_t),Tt=new gM(B,_t,e,Ce),Xe=new iT(B,_t),Tt.reverseDepthBuffer&&m&&Xe.buffers.depth.setReversed(!0),pt=new AM(B),$e=new WE,st=new rT(B,_t,Xe,$e,Tt,Ce,pt),zt=new vM(A),L=new MM(A),w=new Lx(B),rt=new pM(B,w),K=new TM(B,w,pt,rt),ue=new CM(B,K,w,pt),Ne=new RM(B,Tt,st),Be=new _M($e),pe=new GE(A,zt,L,_t,Tt,rt,Be),oe=new fT(A,$e),qe=new jE,Re=new QE(_t),_e=new hM(A,zt,L,Xe,ue,v,h),Ye=new tT(A,ue,Tt),G=new dT(B,pt,Tt,Xe),nt=new mM(B,_t,pt),Qe=new wM(B,_t,pt),pt.programs=pe.programs,A.capabilities=Tt,A.extensions=_t,A.properties=$e,A.renderLists=qe,A.shadowMap=Ye,A.state=Xe,A.info=pt}be();const ge=new uT(A,B);this.xr=ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=_t.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=_t.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(se,le,!1))},this.getSize=function(C){return C.set(se,le)},this.setSize=function(C,X,te=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,le=X,n.width=Math.floor(C*H),n.height=Math.floor(X*H),te===!0&&(n.style.width=C+"px",n.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(se*H,le*H).floor()},this.setDrawingBufferSize=function(C,X,te){se=C,le=X,H=te,n.width=Math.floor(C*te),n.height=Math.floor(X*te),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(V)},this.getViewport=function(C){return C.copy(O)},this.setViewport=function(C,X,te,Y){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,X,te,Y),Xe.viewport(V.copy(O).multiplyScalar(H).round())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,X,te,Y){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,X,te,Y),Xe.scissor(ie.copy(ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(C){Xe.setScissorTest(Ue=C)},this.setOpaqueSort=function(C){ae=C},this.setTransparentSort=function(C){re=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,te=!0){let Y=0;if(C){let j=!1;if(k!==null){const Ee=k.texture.format;j=Ee===hd||Ee===dd||Ee===fd}if(j){const Ee=k.texture.type,Pe=Ee===Gi||Ee===es||Ee===zo||Ee===Vo||Ee===ud||Ee===cd,Oe=_e.getClearColor(),Fe=_e.getClearAlpha(),it=Oe.r,tt=Oe.g,ze=Oe.b;Pe?(M[0]=it,M[1]=tt,M[2]=ze,M[3]=Fe,B.clearBufferuiv(B.COLOR,0,M)):(E[0]=it,E[1]=tt,E[2]=ze,E[3]=Fe,B.clearBufferiv(B.COLOR,0,E))}else Y|=B.COLOR_BUFFER_BIT}X&&(Y|=B.DEPTH_BUFFER_BIT),te&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),qe.dispose(),Re.dispose(),$e.dispose(),zt.dispose(),L.dispose(),ue.dispose(),rt.dispose(),G.dispose(),pe.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",ns),ge.removeEventListener("sessionend",ji),Mi.stop()};function Le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=pt.autoReset,X=Ye.enabled,te=Ye.autoUpdate,Y=Ye.needsUpdate,j=Ye.type;be(),pt.autoReset=C,Ye.enabled=X,Ye.autoUpdate=te,Ye.needsUpdate=Y,Ye.type=j}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ve(C){const X=C.target;X.removeEventListener("dispose",Ve),at(X)}function at(C){bt(C),$e.remove(C)}function bt(C){const X=$e.get(C).programs;X!==void 0&&(X.forEach(function(te){pe.releaseProgram(te)}),C.isShaderMaterial&&pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,te,Y,j,Ee){X===null&&(X=Ct);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Oe=Qo(C,X,te,Y,j);Xe.setMaterial(Y,Pe);let Fe=te.index,it=1;if(Y.wireframe===!0){if(Fe=K.getWireframeAttribute(te),Fe===void 0)return;it=2}const tt=te.drawRange,ze=te.attributes.position;let dt=tt.start*it,lt=(tt.start+tt.count)*it;Ee!==null&&(dt=Math.max(dt,Ee.start*it),lt=Math.min(lt,(Ee.start+Ee.count)*it)),Fe!==null?(dt=Math.max(dt,0),lt=Math.min(lt,Fe.count)):ze!=null&&(dt=Math.max(dt,0),lt=Math.min(lt,ze.count));const Ut=lt-dt;if(Ut<0||Ut===1/0)return;rt.setup(j,Y,Oe,te,Fe);let kt,vt=nt;if(Fe!==null&&(kt=w.get(Fe),vt=Qe,vt.setIndex(kt)),j.isMesh)Y.wireframe===!0?(Xe.setLineWidth(Y.wireframeLinewidth*ht()),vt.setMode(B.LINES)):vt.setMode(B.TRIANGLES);else if(j.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*ht()),j.isLineSegments?vt.setMode(B.LINES):j.isLineLoop?vt.setMode(B.LINE_LOOP):vt.setMode(B.LINE_STRIP)}else j.isPoints?vt.setMode(B.POINTS):j.isSprite&&vt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))vt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ze=j._multiDrawStarts,Wt=j._multiDrawCounts,mt=j._multiDrawCount,dn=Fe?w.get(Fe).bytesPerElement:1,Yi=$e.get(Y).currentProgram.getUniforms();for(let yn=0;yn<mt;yn++)Yi.setValue(B,"_gl_DrawID",yn),vt.render(Ze[yn]/dn,Wt[yn])}else if(j.isInstancedMesh)vt.renderInstances(dt,Ut,j.count);else if(te.isInstancedBufferGeometry){const Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,Ze);vt.renderInstances(dt,Ut,Wt)}else vt.render(dt,Ut)};function xt(C,X,te){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,is(C,X,te),C.side=Tr,C.needsUpdate=!0,is(C,X,te),C.side=Bi):is(C,X,te)}this.compile=function(C,X,te=null){te===null&&(te=C),_=Re.get(te),_.init(X),b.push(_),te.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),C!==te&&C.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const Y=new Set;return C.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ee=j.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const Oe=Ee[Pe];xt(Oe,te,j),Y.add(Oe)}else xt(Ee,te,j),Y.add(Ee)}),_=b.pop(),Y},this.compileAsync=function(C,X,te=null){const Y=this.compile(C,X,te);return new Promise(j=>{function Ee(){if(Y.forEach(function(Pe){$e.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){j(C);return}setTimeout(Ee,10)}_t.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let wn=null;function Sn(C){wn&&wn(C)}function ns(){Mi.stop()}function ji(){Mi.start()}const Mi=new Hg;Mi.setAnimationLoop(Sn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){wn=C,ge.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},ge.addEventListener("sessionstart",ns),ge.addEventListener("sessionend",ji),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(X),X=ge.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,k),_=Re.get(C,b.length),_.init(X),b.push(_),Ae.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),J.setFromProjectionMatrix(Ae),we=this.localClippingEnabled,de=Be.init(this.clippingPlanes,we),S=qe.get(C,P.length),S.init(),P.push(S),ge.enabled===!0&&ge.isPresenting===!0){const Ee=A.xr.getDepthSensingMesh();Ee!==null&&Ei(Ee,X,-1/0,A.sortObjects)}Ei(C,X,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(ae,re),It=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,It&&_e.addToRenderList(S,C),this.info.render.frame++,de===!0&&Be.beginShadows();const te=_.state.shadowsArray;Ye.render(te,C,X),de===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=S.opaque,j=S.transmissive;if(_.setupLights(),X.isArrayCamera){const Ee=X.cameras;if(j.length>0)for(let Pe=0,Oe=Ee.length;Pe<Oe;Pe++){const Fe=Ee[Pe];Rr(Y,j,C,Fe)}It&&_e.render(C);for(let Pe=0,Oe=Ee.length;Pe<Oe;Pe++){const Fe=Ee[Pe];Ar(S,C,Fe,Fe.viewport)}}else j.length>0&&Rr(Y,j,C,X),It&&_e.render(C),Ar(S,C,X);k!==null&&U===0&&(st.updateMultisampleRenderTarget(k),st.updateRenderTargetMipmap(k)),C.isScene===!0&&C.onAfterRender(A,C,X),rt.resetDefaultState(),D=-1,R=null,b.pop(),b.length>0?(_=b[b.length-1],de===!0&&Be.setGlobalState(A.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ei(C,X,te,Y){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||J.intersectsSprite(C)){Y&&We.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const Pe=ue.update(C),Oe=C.material;Oe.visible&&S.push(C,Pe,Oe,te,We.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||J.intersectsObject(C))){const Pe=ue.update(C),Oe=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),We.copy(C.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),We.copy(Pe.boundingSphere.center)),We.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Oe)){const Fe=Pe.groups;for(let it=0,tt=Fe.length;it<tt;it++){const ze=Fe[it],dt=Oe[ze.materialIndex];dt&&dt.visible&&S.push(C,Pe,dt,te,We.z,ze)}}else Oe.visible&&S.push(C,Pe,Oe,te,We.z,null)}}const Ee=C.children;for(let Pe=0,Oe=Ee.length;Pe<Oe;Pe++)Ei(Ee[Pe],X,te,Y)}function Ar(C,X,te,Y){const j=C.opaque,Ee=C.transmissive,Pe=C.transparent;_.setupLightsView(te),de===!0&&Be.setGlobalState(A.clippingPlanes,te),Y&&Xe.viewport(V.copy(Y)),j.length>0&&qi(j,X,te),Ee.length>0&&qi(Ee,X,te),Pe.length>0&&qi(Pe,X,te),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Rr(C,X,te,Y){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Y.id]===void 0&&(_.state.transmissionRenderTarget[Y.id]=new ts(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Wo:Gi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const Ee=_.state.transmissionRenderTarget[Y.id],Pe=Y.viewport||V;Ee.setSize(Pe.z*A.transmissionResolutionScale,Pe.w*A.transmissionResolutionScale);const Oe=A.getRenderTarget();A.setRenderTarget(Ee),A.getClearColor(ce),fe=A.getClearAlpha(),fe<1&&A.setClearColor(16777215,.5),A.clear(),It&&_e.render(te);const Fe=A.toneMapping;A.toneMapping=Er;const it=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),_.setupLightsView(Y),de===!0&&Be.setGlobalState(A.clippingPlanes,Y),qi(C,te,Y),st.updateMultisampleRenderTarget(Ee),st.updateRenderTargetMipmap(Ee),_t.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ze=0,dt=X.length;ze<dt;ze++){const lt=X[ze],Ut=lt.object,kt=lt.geometry,vt=lt.material,Ze=lt.group;if(vt.side===Bi&&Ut.layers.test(Y.layers)){const Wt=vt.side;vt.side=In,vt.needsUpdate=!0,Ko(Ut,te,Y,kt,vt,Ze),vt.side=Wt,vt.needsUpdate=!0,tt=!0}}tt===!0&&(st.updateMultisampleRenderTarget(Ee),st.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Oe),A.setClearColor(ce,fe),it!==void 0&&(Y.viewport=it),A.toneMapping=Fe}function qi(C,X,te){const Y=X.isScene===!0?X.overrideMaterial:null;for(let j=0,Ee=C.length;j<Ee;j++){const Pe=C[j],Oe=Pe.object,Fe=Pe.geometry,it=Pe.group;let tt=Pe.material;tt.allowOverride===!0&&Y!==null&&(tt=Y),Oe.layers.test(te.layers)&&Ko(Oe,X,te,Fe,tt,it)}}function Ko(C,X,te,Y,j,Ee){C.onBeforeRender(A,X,te,Y,j,Ee),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),j.onBeforeRender(A,X,te,Y,C,Ee),j.transparent===!0&&j.side===Bi&&j.forceSinglePass===!1?(j.side=In,j.needsUpdate=!0,A.renderBufferDirect(te,X,Y,j,C,Ee),j.side=Tr,j.needsUpdate=!0,A.renderBufferDirect(te,X,Y,j,C,Ee),j.side=Bi):A.renderBufferDirect(te,X,Y,j,C,Ee),C.onAfterRender(A,X,te,Y,j,Ee)}function is(C,X,te){X.isScene!==!0&&(X=Ct);const Y=$e.get(C),j=_.state.lights,Ee=_.state.shadowsArray,Pe=j.state.version,Oe=pe.getParameters(C,j.state,Ee,X,te),Fe=pe.getProgramCacheKey(Oe);let it=Y.programs;Y.environment=C.isMeshStandardMaterial?X.environment:null,Y.fog=X.fog,Y.envMap=(C.isMeshStandardMaterial?L:zt).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",Ve),it=new Map,Y.programs=it);let tt=it.get(Fe);if(tt!==void 0){if(Y.currentProgram===tt&&Y.lightsStateVersion===Pe)return fi(C,Oe),tt}else Oe.uniforms=pe.getUniforms(C),C.onBeforeCompile(Oe,A),tt=pe.acquireProgram(Oe,Fe),it.set(Fe,tt),Y.uniforms=Oe.uniforms;const ze=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ze.clippingPlanes=Be.uniform),fi(C,Oe),Y.needsLights=Zl(C),Y.lightsStateVersion=Pe,Y.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.currentProgram=tt,Y.uniformsList=null,tt}function Zo(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=Vl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function fi(C,X){const te=$e.get(C);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Qo(C,X,te,Y,j){X.isScene!==!0&&(X=Ct),st.resetTextureUnits();const Ee=X.fog,Pe=Y.isMeshStandardMaterial?X.environment:null,Oe=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:$s,Fe=(Y.isMeshStandardMaterial?L:zt).get(Y.envMap||Pe),it=Y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!te.morphAttributes.position,dt=!!te.morphAttributes.normal,lt=!!te.morphAttributes.color;let Ut=Er;Y.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ut=A.toneMapping);const kt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,vt=kt!==void 0?kt.length:0,Ze=$e.get(Y),Wt=_.state.lights;if(de===!0&&(we===!0||C!==R)){const un=C===R&&Y.id===D;Be.setState(Y,C,un)}let mt=!1;Y.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Wt.state.version||Ze.outputColorSpace!==Oe||j.isBatchedMesh&&Ze.batching===!1||!j.isBatchedMesh&&Ze.batching===!0||j.isBatchedMesh&&Ze.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ze.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ze.instancing===!1||!j.isInstancedMesh&&Ze.instancing===!0||j.isSkinnedMesh&&Ze.skinning===!1||!j.isSkinnedMesh&&Ze.skinning===!0||j.isInstancedMesh&&Ze.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ze.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ze.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ze.instancingMorph===!1&&j.morphTexture!==null||Ze.envMap!==Fe||Y.fog===!0&&Ze.fog!==Ee||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Be.numPlanes||Ze.numIntersection!==Be.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==tt||Ze.morphTargets!==ze||Ze.morphNormals!==dt||Ze.morphColors!==lt||Ze.toneMapping!==Ut||Ze.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,Ze.__version=Y.version);let dn=Ze.currentProgram;mt===!0&&(dn=is(Y,X,j));let Yi=!1,yn=!1,Ti=!1;const Lt=dn.getUniforms(),hn=Ze.uniforms;if(Xe.useProgram(dn.program)&&(Yi=!0,yn=!0,Ti=!0),Y.id!==D&&(D=Y.id,yn=!0),Yi||R!==C){Xe.buffers.depth.getReversed()?(Se.copy(C.projectionMatrix),Z0(Se),Q0(Se),Lt.setValue(B,"projectionMatrix",Se)):Lt.setValue(B,"projectionMatrix",C.projectionMatrix),Lt.setValue(B,"viewMatrix",C.matrixWorldInverse);const rn=Lt.map.cameraPosition;rn!==void 0&&rn.setValue(B,Ke.setFromMatrixPosition(C.matrixWorld)),Tt.logarithmicDepthBuffer&&Lt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Lt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,yn=!0,Ti=!0)}if(j.isSkinnedMesh){Lt.setOptional(B,j,"bindMatrix"),Lt.setOptional(B,j,"bindMatrixInverse");const un=j.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(B,"boneTexture",un.boneTexture,st))}j.isBatchedMesh&&(Lt.setOptional(B,j,"batchingTexture"),Lt.setValue(B,"batchingTexture",j._matricesTexture,st),Lt.setOptional(B,j,"batchingIdTexture"),Lt.setValue(B,"batchingIdTexture",j._indirectTexture,st),Lt.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(B,"batchingColorTexture",j._colorsTexture,st));const nn=te.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Ne.update(j,te,dn),(yn||Ze.receiveShadow!==j.receiveShadow)&&(Ze.receiveShadow=j.receiveShadow,Lt.setValue(B,"receiveShadow",j.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hn.envMap.value=Fe,hn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&X.environment!==null&&(hn.envMapIntensity.value=X.environmentIntensity),yn&&(Lt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Ze.needsLights&&Jo(hn,Ti),Ee&&Y.fog===!0&&oe.refreshFogUniforms(hn,Ee),oe.refreshMaterialUniforms(hn,Y,H,le,_.state.transmissionRenderTarget[C.id]),Vl.upload(B,Zo(Ze),hn,st)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vl.upload(B,Zo(Ze),hn,st),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Lt.setValue(B,"center",j.center),Lt.setValue(B,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(B,"normalMatrix",j.normalMatrix),Lt.setValue(B,"modelMatrix",j.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const un=Y.uniformsGroups;for(let rn=0,St=un.length;rn<St;rn++){const di=un[rn];G.update(di,dn),G.bind(di,dn)}}return dn}function Jo(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function Zl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(C,X,te){const Y=$e.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$e.get(C.texture).__webglTexture=X,$e.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:te,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const te=$e.get(C);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const ea=B.createFramebuffer();this.setRenderTarget=function(C,X=0,te=0){k=C,N=X,U=te;let Y=!0,j=null,Ee=!1,Pe=!1;if(C){const Fe=$e.get(C);if(Fe.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(B.FRAMEBUFFER,null),Y=!1;else if(Fe.__webglFramebuffer===void 0)st.setupRenderTarget(C);else if(Fe.__hasExternalTextures)st.rebindTextures(C,$e.get(C.texture).__webglTexture,$e.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ze=C.depthTexture;if(Fe.__boundDepthTexture!==ze){if(ze!==null&&$e.has(ze)&&(C.width!==ze.image.width||C.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Pe=!0);const tt=$e.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?j=tt[X][te]:j=tt[X],Ee=!0):C.samples>0&&st.useMultisampledRTT(C)===!1?j=$e.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?j=tt[te]:j=tt,V.copy(C.viewport),ie.copy(C.scissor),Z=C.scissorTest}else V.copy(O).multiplyScalar(H).floor(),ie.copy(ne).multiplyScalar(H).floor(),Z=Ue;if(te!==0&&(j=ea),Xe.bindFramebuffer(B.FRAMEBUFFER,j)&&Y&&Xe.drawBuffers(C,j),Xe.viewport(V),Xe.scissor(ie),Xe.setScissorTest(Z),Ee){const Fe=$e.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,te)}else if(Pe){const Fe=$e.get(C.texture),it=X;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,te,it)}else if(C!==null&&te!==0){const Fe=$e.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Fe.__webglTexture,te)}D=-1},this.readRenderTargetPixels=function(C,X,te,Y,j,Ee,Pe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Xe.bindFramebuffer(B.FRAMEBUFFER,Fe);try{const it=C.textures[Oe],tt=it.format,ze=it.type;if(!Tt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-Y&&te>=0&&te<=C.height-j&&(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe),B.readPixels(X,te,Y,j,Ce.convert(tt),Ce.convert(ze),Ee))}finally{const it=k!==null?$e.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,X,te,Y,j,Ee,Pe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=$e.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(X>=0&&X<=C.width-Y&&te>=0&&te<=C.height-j){Xe.bindFramebuffer(B.FRAMEBUFFER,Fe);const it=C.textures[Oe],tt=it.format,ze=it.type;if(!Tt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe),B.readPixels(X,te,Y,j,Ce.convert(tt),Ce.convert(ze),0);const lt=k!==null?$e.get(k).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,lt);const Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await K0(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,dt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(dt),B.deleteSync(Ut),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,te=0){const Y=Math.pow(2,-te),j=Math.floor(C.image.width*Y),Ee=Math.floor(C.image.height*Y),Pe=X!==null?X.x:0,Oe=X!==null?X.y:0;st.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Pe,Oe,j,Ee),Xe.unbindTexture()};const ta=B.createFramebuffer(),na=B.createFramebuffer();this.copyTextureToTexture=function(C,X,te=null,Y=null,j=0,Ee=null){Ee===null&&(j!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=j,j=0):Ee=0);let Pe,Oe,Fe,it,tt,ze,dt,lt,Ut;const kt=C.isCompressedTexture?C.mipmaps[Ee]:C.image;if(te!==null)Pe=te.max.x-te.min.x,Oe=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,tt=te.min.y,ze=te.isBox3?te.min.z:0;else{const nn=Math.pow(2,-j);Pe=Math.floor(kt.width*nn),Oe=Math.floor(kt.height*nn),C.isDataArrayTexture?Fe=kt.depth:C.isData3DTexture?Fe=Math.floor(kt.depth*nn):Fe=1,it=0,tt=0,ze=0}Y!==null?(dt=Y.x,lt=Y.y,Ut=Y.z):(dt=0,lt=0,Ut=0);const vt=Ce.convert(X.format),Ze=Ce.convert(X.type);let Wt;X.isData3DTexture?(st.setTexture3D(X,0),Wt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(st.setTexture2DArray(X,0),Wt=B.TEXTURE_2D_ARRAY):(st.setTexture2D(X,0),Wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const mt=B.getParameter(B.UNPACK_ROW_LENGTH),dn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yi=B.getParameter(B.UNPACK_SKIP_PIXELS),yn=B.getParameter(B.UNPACK_SKIP_ROWS),Ti=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,kt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,kt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,it),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const Lt=C.isDataArrayTexture||C.isData3DTexture,hn=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const nn=$e.get(C),un=$e.get(X),rn=$e.get(nn.__renderTarget),St=$e.get(un.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,rn.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let di=0;di<Fe;di++)Lt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(C).__webglTexture,j,ze+di),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,Ee,Ut+di)),B.blitFramebuffer(it,tt,Pe,Oe,dt,lt,Pe,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||C.isRenderTargetTexture||$e.has(C)){const nn=$e.get(C),un=$e.get(X);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,ta),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,na);for(let rn=0;rn<Fe;rn++)Lt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nn.__webglTexture,j,ze+rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nn.__webglTexture,j),hn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,Ee,Ut+rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,Ee),j!==0?B.blitFramebuffer(it,tt,Pe,Oe,dt,lt,Pe,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):hn?B.copyTexSubImage3D(Wt,Ee,dt,lt,Ut+rn,it,tt,Pe,Oe):B.copyTexSubImage2D(Wt,Ee,dt,lt,it,tt,Pe,Oe);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else hn?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Wt,Ee,dt,lt,Ut,Pe,Oe,Fe,vt,Ze,kt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Wt,Ee,dt,lt,Ut,Pe,Oe,Fe,vt,kt.data):B.texSubImage3D(Wt,Ee,dt,lt,Ut,Pe,Oe,Fe,vt,Ze,kt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,dt,lt,Pe,Oe,vt,Ze,kt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,dt,lt,kt.width,kt.height,vt,kt.data):B.texSubImage2D(B.TEXTURE_2D,Ee,dt,lt,Pe,Oe,vt,Ze,kt);B.pixelStorei(B.UNPACK_ROW_LENGTH,mt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yi),B.pixelStorei(B.UNPACK_SKIP_ROWS,yn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ti),Ee===0&&X.generateMipmaps&&B.generateMipmap(Wt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(C,X,te=null,Y=null,j=0){return Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,X,te,Y,j)},this.initRenderTarget=function(C){$e.get(C).__webglFramebuffer===void 0&&st.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?st.setTextureCube(C,0):C.isData3DTexture?st.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?st.setTexture2DArray(C,0):st.setTexture2D(C,0),Xe.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,Xe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),n.unpackColorSpace=Et._getUnpackColorSpace()}}const pT=()=>{const s=Sr.useRef(null),e=Sr.useRef(),n=Sr.useRef(),r=Sr.useRef(),a=Sr.useRef();return Sr.useEffect(()=>{if(!s.current)return;const l=new Ex;e.current=l;const c=new Zn(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=5;const f=new hT({alpha:!0,antialias:!0});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setClearColor(0,0),n.current=f,s.current.appendChild(f.domElement);const h=new _d(2,1),g=new md({color:3900150,wireframe:!0,transparent:!0,opacity:.6}),y=new xi(h,g);l.add(y),r.current=y;const x=new yi,m=2e3,v=new Float32Array(m*3);for(let b=0;b<m*3;b++)v[b]=(Math.random()-.5)*20;x.setAttribute("position",new ci(v,3));const M=new zg({color:9133302,size:.02,transparent:!0,opacity:.8}),E=new Ax(x,M);l.add(E);const S=()=>{if(r.current){const b=window.pageYOffset||document.documentElement.scrollTop,A=document.documentElement.scrollHeight-window.innerHeight,F=b/A;r.current.rotation.x=F*Math.PI*2,r.current.rotation.y=F*Math.PI*3,r.current.rotation.z=F*Math.PI;const N=1+Math.sin(F*Math.PI*4)*.1;r.current.scale.setScalar(N)}},_=()=>{c&&f&&(c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight))},P=()=>{r.current&&(r.current.rotation.x+=.002,r.current.rotation.y+=.003,E&&(E.rotation.x+=5e-4,E.rotation.y+=.001)),f&&l&&c&&f.render(l,c),a.current=requestAnimationFrame(P)};return window.addEventListener("scroll",S),window.addEventListener("resize",_),P(),()=>{a.current&&cancelAnimationFrame(a.current),window.removeEventListener("scroll",S),window.removeEventListener("resize",_),s.current&&f.domElement&&s.current.removeChild(f.domElement),h.dispose(),g.dispose(),x.dispose(),M.dispose(),f.dispose()}},[]),xe.jsx("div",{ref:s,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:1,pointerEvents:"none"}})},mT=()=>{const s=Pt.experience.length,e=Pt.freelancing.length,n=Pt.startups.length;return xe.jsxs("div",{className:"bg-gray-900 text-white flex flex-col min-h-screen relative",children:[xe.jsx(pT,{}),xe.jsxs("div",{className:"relative z-10",children:[xe.jsx(Vv,{}),xe.jsx("div",{className:"container mx-auto p-4 sm:p-6 max-w-4xl",children:xe.jsx(Hv,{})}),xe.jsxs("div",{className:"container mx-auto p-4 sm:p-6",children:[xe.jsx(fl,{title:"experience 🎓",works:Pt.experience,indexOffset:0}),xe.jsx("div",{className:"my-6 sm:my-8"}),xe.jsx(fl,{title:"freelancing 💼",works:Pt.freelancing,indexOffset:s}),xe.jsx("div",{className:"my-6 sm:my-8"}),xe.jsx(fl,{title:"startups 🚀",works:Pt.startups,indexOffset:s+e}),xe.jsx("div",{className:"my-6 sm:my-8"}),xe.jsx(fl,{title:"projects 🛠",works:Pt.projects,indexOffset:s+e+n})]})]})]})};Lv.createRoot(document.getElementById("root")).render(xe.jsx(Sr.StrictMode,{children:xe.jsx(mT,{})}));
