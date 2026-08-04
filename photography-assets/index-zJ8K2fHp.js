(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Ad={exports:{}},Wo={};var g_;function Wy(){if(g_)return Wo;g_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var __;function qy(){return __||(__=1,Ad.exports=Wy()),Ad.exports}var qe=qy(),Rd={exports:{}},rt={};var v_;function Yy(){if(v_)return rt;v_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function y(N,Q,Ee){this.props=N,this.context=Q,this.refs=S,this.updater=Ee||T}y.prototype.isReactComponent={},y.prototype.setState=function(N,Q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Q,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function F(){}F.prototype=y.prototype;function I(N,Q,Ee){this.props=N,this.context=Q,this.refs=S,this.updater=Ee||T}var w=I.prototype=new F;w.constructor=I,C(w,y.prototype),w.isPureReactComponent=!0;var P=Array.isArray;function O(){}var D={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(N,Q,Ee){var Ce=Ee.ref;return{$$typeof:s,type:N,key:Q,ref:Ce!==void 0?Ce:null,props:Ee}}function q(N,Q){return L(N.type,Q,N.props)}function G(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function Z(N){var Q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ee){return Q[Ee]})}var he=/\/+/g;function ge(N,Q){return typeof N=="object"&&N!==null&&N.key!=null?Z(""+N.key):Q.toString(36)}function Y(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(Q){N.status==="pending"&&(N.status="fulfilled",N.value=Q)},function(Q){N.status==="pending"&&(N.status="rejected",N.reason=Q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function B(N,Q,Ee,Ce,Fe){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var Se=!1;if(N===null)Se=!0;else switch(ie){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(N.$$typeof){case s:case e:Se=!0;break;case g:return Se=N._init,B(Se(N._payload),Q,Ee,Ce,Fe)}}if(Se)return Fe=Fe(N),Se=Ce===""?"."+ge(N,0):Ce,P(Fe)?(Ee="",Se!=null&&(Ee=Se.replace(he,"$&/")+"/"),B(Fe,Q,Ee,"",function(nt){return nt})):Fe!=null&&(G(Fe)&&(Fe=q(Fe,Ee+(Fe.key==null||N&&N.key===Fe.key?"":(""+Fe.key).replace(he,"$&/")+"/")+Se)),Q.push(Fe)),1;Se=0;var Me=Ce===""?".":Ce+":";if(P(N))for(var He=0;He<N.length;He++)Ce=N[He],ie=Me+ge(Ce,He),Se+=B(Ce,Q,Ee,ie,Fe);else if(He=M(N),typeof He=="function")for(N=He.call(N),He=0;!(Ce=N.next()).done;)Ce=Ce.value,ie=Me+ge(Ce,He++),Se+=B(Ce,Q,Ee,ie,Fe);else if(ie==="object"){if(typeof N.then=="function")return B(Y(N),Q,Ee,Ce,Fe);throw Q=String(N),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Se}function H(N,Q,Ee){if(N==null)return N;var Ce=[],Fe=0;return B(N,Ce,"","",function(ie){return Q.call(Ee,ie,Fe++)}),Ce}function ee(N){if(N._status===-1){var Q=N._result;Q=Q(),Q.then(function(Ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ee)},function(Ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ee)}),N._status===-1&&(N._status=0,N._result=Q)}if(N._status===1)return N._result.default;throw N._result}var _e=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},be={map:H,forEach:function(N,Q,Ee){H(N,function(){Q.apply(this,arguments)},Ee)},count:function(N){var Q=0;return H(N,function(){Q++}),Q},toArray:function(N){return H(N,function(Q){return Q})||[]},only:function(N){if(!G(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return rt.Activity=v,rt.Children=be,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=I,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,rt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},rt.cache=function(N){return function(){return N.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(N,Q,Ee){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var Ce=C({},N.props),Fe=N.key;if(Q!=null)for(ie in Q.key!==void 0&&(Fe=""+Q.key),Q)!b.call(Q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&Q.ref===void 0||(Ce[ie]=Q[ie]);var ie=arguments.length-2;if(ie===1)Ce.children=Ee;else if(1<ie){for(var Se=Array(ie),Me=0;Me<ie;Me++)Se[Me]=arguments[Me+2];Ce.children=Se}return L(N.type,Fe,Ce)},rt.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},rt.createElement=function(N,Q,Ee){var Ce,Fe={},ie=null;if(Q!=null)for(Ce in Q.key!==void 0&&(ie=""+Q.key),Q)b.call(Q,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Fe[Ce]=Q[Ce]);var Se=arguments.length-2;if(Se===1)Fe.children=Ee;else if(1<Se){for(var Me=Array(Se),He=0;He<Se;He++)Me[He]=arguments[He+2];Fe.children=Me}if(N&&N.defaultProps)for(Ce in Se=N.defaultProps,Se)Fe[Ce]===void 0&&(Fe[Ce]=Se[Ce]);return L(N,ie,Fe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(N){return{$$typeof:h,render:N}},rt.isValidElement=G,rt.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ee}},rt.memo=function(N,Q){return{$$typeof:p,type:N,compare:Q===void 0?null:Q}},rt.startTransition=function(N){var Q=D.T,Ee={};D.T=Ee;try{var Ce=N(),Fe=D.S;Fe!==null&&Fe(Ee,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(O,_e)}catch(ie){_e(ie)}finally{Q!==null&&Ee.types!==null&&(Q.types=Ee.types),D.T=Q}},rt.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},rt.use=function(N){return D.H.use(N)},rt.useActionState=function(N,Q,Ee){return D.H.useActionState(N,Q,Ee)},rt.useCallback=function(N,Q){return D.H.useCallback(N,Q)},rt.useContext=function(N){return D.H.useContext(N)},rt.useDebugValue=function(){},rt.useDeferredValue=function(N,Q){return D.H.useDeferredValue(N,Q)},rt.useEffect=function(N,Q){return D.H.useEffect(N,Q)},rt.useEffectEvent=function(N){return D.H.useEffectEvent(N)},rt.useId=function(){return D.H.useId()},rt.useImperativeHandle=function(N,Q,Ee){return D.H.useImperativeHandle(N,Q,Ee)},rt.useInsertionEffect=function(N,Q){return D.H.useInsertionEffect(N,Q)},rt.useLayoutEffect=function(N,Q){return D.H.useLayoutEffect(N,Q)},rt.useMemo=function(N,Q){return D.H.useMemo(N,Q)},rt.useOptimistic=function(N,Q){return D.H.useOptimistic(N,Q)},rt.useReducer=function(N,Q,Ee){return D.H.useReducer(N,Q,Ee)},rt.useRef=function(N){return D.H.useRef(N)},rt.useState=function(N){return D.H.useState(N)},rt.useSyncExternalStore=function(N,Q,Ee){return D.H.useSyncExternalStore(N,Q,Ee)},rt.useTransition=function(){return D.H.useTransition()},rt.version="19.2.3",rt}var x_;function lp(){return x_||(x_=1,Rd.exports=Yy()),Rd.exports}var ue=lp(),Cd={exports:{}},qo={},wd={exports:{}},Dd={};var S_;function Zy(){return S_||(S_=1,(function(s){function e(B,H){var ee=B.length;B.push(H);e:for(;0<ee;){var _e=ee-1>>>1,be=B[_e];if(0<l(be,H))B[_e]=H,B[ee]=be,ee=_e;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var H=B[0],ee=B.pop();if(ee!==H){B[0]=ee;e:for(var _e=0,be=B.length,N=be>>>1;_e<N;){var Q=2*(_e+1)-1,Ee=B[Q],Ce=Q+1,Fe=B[Ce];if(0>l(Ee,ee))Ce<be&&0>l(Fe,Ee)?(B[_e]=Fe,B[Ce]=ee,_e=Ce):(B[_e]=Ee,B[Q]=ee,_e=Q);else if(Ce<be&&0>l(Fe,ee))B[_e]=Fe,B[Ce]=ee,_e=Ce;else break e}}return H}function l(B,H){var ee=B.sortIndex-H.sortIndex;return ee!==0?ee:B.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,_=3,M=!1,T=!1,C=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=B)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function P(B){if(C=!1,w(B),!T)if(i(m)!==null)T=!0,O||(O=!0,Z());else{var H=i(p);H!==null&&Y(P,H.startTime-B)}}var O=!1,D=-1,b=5,L=-1;function q(){return S?!0:!(s.unstable_now()-L<b)}function G(){if(S=!1,O){var B=s.unstable_now();L=B;var H=!0;try{e:{T=!1,C&&(C=!1,F(D),D=-1),M=!0;var ee=_;try{t:{for(w(B),v=i(m);v!==null&&!(v.expirationTime>B&&q());){var _e=v.callback;if(typeof _e=="function"){v.callback=null,_=v.priorityLevel;var be=_e(v.expirationTime<=B);if(B=s.unstable_now(),typeof be=="function"){v.callback=be,w(B),H=!0;break t}v===i(m)&&r(m),w(B)}else r(m);v=i(m)}if(v!==null)H=!0;else{var N=i(p);N!==null&&Y(P,N.startTime-B),H=!1}}break e}finally{v=null,_=ee,M=!1}H=void 0}}finally{H?Z():O=!1}}}var Z;if(typeof I=="function")Z=function(){I(G)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,ge=he.port2;he.port1.onmessage=G,Z=function(){ge.postMessage(null)}}else Z=function(){y(G,0)};function Y(B,H){D=y(function(){B(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(B){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var ee=_;_=H;try{return B()}finally{_=ee}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=_;_=B;try{return H()}finally{_=ee}},s.unstable_scheduleCallback=function(B,H,ee){var _e=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?_e+ee:_e):ee=_e,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,B={id:g++,callback:H,priorityLevel:B,startTime:ee,expirationTime:be,sortIndex:-1},ee>_e?(B.sortIndex=ee,e(p,B),i(m)===null&&B===i(p)&&(C?(F(D),D=-1):C=!0,Y(P,ee-_e))):(B.sortIndex=be,e(m,B),T||M||(T=!0,O||(O=!0,Z()))),B},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(B){var H=_;return function(){var ee=_;_=H;try{return B.apply(this,arguments)}finally{_=ee}}}})(Dd)),Dd}var y_;function Ky(){return y_||(y_=1,wd.exports=Zy()),wd.exports}var Ud={exports:{}},On={};var M_;function Qy(){if(M_)return On;M_=1;var s=lp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,On.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},On.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:_,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},On.requestFormReset=function(m){r.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},On.useFormStatus=function(){return f.H.useHostTransitionStatus()},On.version="19.2.3",On}var E_;function Jy(){if(E_)return Ud.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ud.exports=Qy(),Ud.exports}var b_;function jy(){if(b_)return qo;b_=1;var s=Ky(),e=lp(),i=Jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return m(c),t;if(d===o)return m(c),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=d;else{for(var x=!1,R=c.child;R;){if(R===a){x=!0,a=c,o=d;break}if(R===o){x=!0,o=c,a=d;break}R=R.sibling}if(!x){for(R=d.child;R;){if(R===a){x=!0,a=d,o=c;break}if(R===o){x=!0,o=d,a=c;break}R=R.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),F=Symbol.for("react.consumer"),I=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var he=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===he?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case P:return"Suspense";case O:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case I:return t.displayName||"Context";case F:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var Y=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},_e=[],be=-1;function N(t){return{current:t}}function Q(t){0>be||(t.current=_e[be],_e[be]=null,be--)}function Ee(t,n){be++,_e[be]=t.current,t.current=n}var Ce=N(null),Fe=N(null),ie=N(null),Se=N(null);function Me(t,n){switch(Ee(ie,n),Ee(Fe,t),Ee(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?z0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=z0(n),t=H0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(Ce),Ee(Ce,t)}function He(){Q(Ce),Q(Fe),Q(ie)}function nt(t){t.memoizedState!==null&&Ee(Se,t);var n=Ce.current,a=H0(n,t.type);n!==a&&(Ee(Fe,t),Ee(Ce,a))}function Je(t){Fe.current===t&&(Q(Ce),Q(Fe)),Se.current===t&&(Q(Se),Go._currentValue=ee)}var Yt,ft;function xt(t){if(Yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Yt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yt+t+ft}var St=!1;function ht(t,n){if(!t||St)return"";St=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(le){var se=le}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(le){se=le}t.call(xe.prototype)}}else{try{throw Error()}catch(le){se=le}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(le){if(le&&se&&typeof le.stack=="string")return[le.stack,se.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],R=d[1];if(x&&R){var z=x.split(`
`),$=R.split(`
`);for(c=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(o===z.length||c===$.length)for(o=z.length-1,c=$.length-1;1<=o&&0<=c&&z[o]!==$[c];)c--;for(;1<=o&&0<=c;o--,c--)if(z[o]!==$[c]){if(o!==1||c!==1)do if(o--,c--,0>c||z[o]!==$[c]){var pe=`
`+z[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=c);break}}}finally{St=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ht(t.type,!1);case 11:return ht(t.type.render,!1);case 1:return ht(t.type,!0);case 31:return xt("Activity");default:return""}}function tn(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var nn=Object.prototype.hasOwnProperty,ln=s.unstable_scheduleCallback,qt=s.unstable_cancelCallback,an=s.unstable_shouldYield,W=s.unstable_requestPaint,Ht=s.unstable_now,wt=s.unstable_getCurrentPriorityLevel,U=s.unstable_ImmediatePriority,E=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,ae=s.unstable_LowPriority,fe=s.unstable_IdlePriority,Te=s.log,De=s.unstable_setDisableYieldValue,ce=null,de=null;function Re(t){if(typeof Te=="function"&&De(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(ce,t)}catch{}}var Be=Math.clz32?Math.clz32:Qe,Ne=Math.log,Ue=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ne(t)/Ue|0)|0}var je=256,at=262144,k=4194304;function Ae(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~d,o!==0?c=Ae(o):(x&=R,x!==0?c=Ae(x):a||(a=R&~t,a!==0&&(c=Ae(a))))):(R=o&~d,R!==0?c=Ae(R):x!==0?c=Ae(x):a||(a=o&~t,a!==0&&(c=Ae(a)))),c===0?0:n!==0&&n!==c&&(n&d)===0&&(d=c&-c,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ye(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qt(t,n,a,o,c,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var pe=31-Be(a),xe=1<<pe;R[pe]=0,z[pe]=-1;var se=$[pe];if(se!==null)for($[pe]=null,pe=0;pe<se.length;pe++){var le=se[pe];le!==null&&(le.lane&=-536870913)}a&=~xe}o!==0&&Nt(t,o,0),d!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Be(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Kn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Be(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Qn(t,n){var a=n&-n;return a=(a&42)!==0?1:eo(a),(a&(t.suspendedLanes|n))!==0?0:a}function eo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function to(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function no(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:u_(t.type))}function Qr(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Oi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Oi,An="__reactProps$"+Oi,Hn="__reactContainer$"+Oi,_r="__reactEvents$"+Oi,gl="__reactListeners$"+Oi,_l="__reactHandles$"+Oi,vr="__reactResources$"+Oi,Na="__reactMarker$"+Oi;function Oa(t){delete t[dn],delete t[An],delete t[_r],delete t[gl],delete t[_l]}function ji(t){var n=t[dn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Hn]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Y0(t);t!==null;){if(a=t[dn])return a;t=Y0(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[dn]||t[Hn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function xr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Pa(t){var n=t[vr];return n||(n=t[vr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Na]=!0}var vl=new Set,A={};function X(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)vl.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},Oe={};function Ge(t){return nn.call(Oe,t)?!0:nn.call(ne,t)?!1:te.test(t)?Oe[t]=!0:(ne[t]=!0,!1)}function Le(t,n,a){if(Ge(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ot(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tt(t){if(!t._valueTracker){var n=ot(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function Jt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ot(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ze(t,n,a,o,c,d,x,R){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?pt(t,x,$e(n)):a!=null?pt(t,x,$e(a)):o!=null&&t.removeAttribute("value"),c==null&&d!=null&&(t.defaultChecked=!!d),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+$e(R):t.removeAttribute("name")}function Nn(t,n,a,o,c,d,x,R){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Tt(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Tt(t)}function pt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function xn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Jn(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Mi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(Y(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Tt(t)}function jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ft=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Ft.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ei(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&jt(t,c,o)}else for(var d in n)n.hasOwnProperty(d)&&jt(t,d,n[d])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sr(t){return Fa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Mc=null;function Ec(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,jr=null;function Bp(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[An]||null;if(!c)throw Error(r(90));ze(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Jt(o)}break e;case"textarea":Jn(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&xn(t,!!a.multiple,n,!1)}}}var bc=!1;function zp(t,n,a){if(bc)return t(n,a);bc=!0;try{var o=t(n);return o}finally{if(bc=!1,(Jr!==null||jr!==null)&&(ru(),Jr&&(n=Jr,t=jr,jr=Jr=null,Bp(n),t)))for(n=0;n<t.length;n++)Bp(t[n])}}function io(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=!1;if(ta)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Tc=!1}var Ia=null,Ac=null,xl=null;function Hp(){if(xl)return xl;var t,n=Ac,a=n.length,o,c="value"in Ia?Ia.value:Ia.textContent,d=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===c[d-o];o++);return xl=c.slice(t,1<o?1-o:void 0)}function Sl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function Gp(){return!1}function Gn(t){function n(a,o,c,d,x){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(d):d[R]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Gp,this.isPropagationStopped=Gp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=Gn(yr),ro=v({},yr,{view:0,detail:0}),kx=Gn(ro),Rc,Cc,so,El=v({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(Rc=t.screenX-so.screenX,Cc=t.screenY-so.screenY):Cc=Rc=0,so=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),Vp=Gn(El),Xx=v({},El,{dataTransfer:0}),Wx=Gn(Xx),qx=v({},ro,{relatedTarget:0}),wc=Gn(qx),Yx=v({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Gn(Yx),Kx=v({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qx=Gn(Kx),Jx=v({},yr,{data:0}),kp=Gn(Jx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=eS[t])?!!n[t]:!1}function Dc(){return tS}var nS=v({},ro,{key:function(t){if(t.key){var n=jx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Sl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?Sl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iS=Gn(nS),aS=v({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Gn(aS),rS=v({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),sS=Gn(rS),oS=v({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lS=Gn(oS),uS=v({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cS=Gn(uS),fS=v({},yr,{newState:0,oldState:0}),dS=Gn(fS),hS=[9,13,27,32],Uc=ta&&"CompositionEvent"in window,oo=null;ta&&"documentMode"in document&&(oo=document.documentMode);var pS=ta&&"TextEvent"in window&&!oo,Wp=ta&&(!Uc||oo&&8<oo&&11>=oo),qp=" ",Yp=!1;function Zp(t,n){switch(t){case"keyup":return hS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function mS(t,n){switch(t){case"compositionend":return Kp(n);case"keypress":return n.which!==32?null:(Yp=!0,qp);case"textInput":return t=n.data,t===qp&&Yp?null:t;default:return null}}function gS(t,n){if($r)return t==="compositionend"||!Uc&&Zp(t,n)?(t=Hp(),xl=Ac=Ia=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wp&&n.locale!=="ko"?null:n.data;default:return null}}var _S={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_S[t.type]:n==="textarea"}function Jp(t,n,a,o){Jr?jr?jr.push(o):jr=[o]:Jr=o,n=du(n,"onChange"),0<n.length&&(a=new Ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var lo=null,uo=null;function vS(t){N0(t,0)}function bl(t){var n=xr(t);if(Jt(n))return t}function jp(t,n){if(t==="change")return n}var $p=!1;if(ta){var Lc;if(ta){var Nc="oninput"in document;if(!Nc){var em=document.createElement("div");em.setAttribute("oninput","return;"),Nc=typeof em.oninput=="function"}Lc=Nc}else Lc=!1;$p=Lc&&(!document.documentMode||9<document.documentMode)}function tm(){lo&&(lo.detachEvent("onpropertychange",nm),uo=lo=null)}function nm(t){if(t.propertyName==="value"&&bl(uo)){var n=[];Jp(n,uo,t,Ec(t)),zp(vS,n)}}function xS(t,n,a){t==="focusin"?(tm(),lo=n,uo=a,lo.attachEvent("onpropertychange",nm)):t==="focusout"&&tm()}function SS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(uo)}function yS(t,n){if(t==="click")return bl(n)}function MS(t,n){if(t==="input"||t==="change")return bl(n)}function ES(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:ES;function co(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!nn.call(n,c)||!$n(t[c],n[c]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function am(t,n){var a=im(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=im(a)}}function rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function Oc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var bS=ta&&"documentMode"in document&&11>=document.documentMode,es=null,Pc=null,fo=null,Fc=!1;function om(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||es==null||es!==Xt(o)||(o=es,"selectionStart"in o&&Oc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),fo&&co(fo,o)||(fo=o,o=du(Pc,"onSelect"),0<o.length&&(n=new Ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=es)))}function Mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ts={animationend:Mr("Animation","AnimationEnd"),animationiteration:Mr("Animation","AnimationIteration"),animationstart:Mr("Animation","AnimationStart"),transitionrun:Mr("Transition","TransitionRun"),transitionstart:Mr("Transition","TransitionStart"),transitioncancel:Mr("Transition","TransitionCancel"),transitionend:Mr("Transition","TransitionEnd")},Ic={},lm={};ta&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function Er(t){if(Ic[t])return Ic[t];if(!ts[t])return t;var n=ts[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in lm)return Ic[t]=n[a];return t}var um=Er("animationend"),cm=Er("animationiteration"),fm=Er("animationstart"),TS=Er("transitionrun"),AS=Er("transitionstart"),RS=Er("transitioncancel"),dm=Er("transitionend"),hm=new Map,Bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bc.push("scrollEnd");function bi(t,n){hm.set(t,n),X(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],ns=0,zc=0;function Al(){for(var t=ns,n=zc=ns=0;n<t;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var c=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&c!==null){var x=o.pending;x===null?c.next=c:(c.next=x.next,x.next=c),o.pending=c}d!==0&&pm(a,c,d)}}function Rl(t,n,a,o){ci[ns++]=t,ci[ns++]=n,ci[ns++]=a,ci[ns++]=o,zc|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Hc(t,n,a,o){return Rl(t,n,a,o),Cl(t)}function br(t,n){return Rl(t,null,null,n),Cl(t)}function pm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(c=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,c&&n!==null&&(c=31-Be(a),t=d.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),d):null}function Cl(t){if(50<Oo)throw Oo=0,Qf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var is={};function CS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new CS(t,n,a,o)}function Gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function mm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,c,d){var x=0;if(o=t,typeof t=="function")Gc(t)&&(x=1);else if(typeof t=="string")x=Ny(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ei(31,a,n,c),t.elementType=L,t.lanes=d,t;case C:return Tr(a.children,c,d,n);case S:x=8,c|=24;break;case y:return t=ei(12,a,n,c|2),t.elementType=y,t.lanes=d,t;case P:return t=ei(13,a,n,c),t.elementType=P,t.lanes=d,t;case O:return t=ei(19,a,n,c),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:x=10;break e;case F:x=9;break e;case w:x=11;break e;case D:x=14;break e;case b:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=ei(x,a,n,c),n.elementType=t,n.type=o,n.lanes=d,n}function Tr(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function Vc(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function gm(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function kc(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var _m=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=_m.get(t);return a!==void 0?a:(n={value:t,source:n,stack:tn(n)},_m.set(t,n),n)}return{value:t,source:n,stack:tn(n)}}var as=[],rs=0,Dl=null,ho=0,di=[],hi=0,Ba=null,Fi=1,Ii="";function ia(t,n){as[rs++]=ho,as[rs++]=Dl,Dl=t,ho=n}function vm(t,n,a){di[hi++]=Fi,di[hi++]=Ii,di[hi++]=Ba,Ba=t;var o=Fi;t=Ii;var c=32-Be(o)-1;o&=~(1<<c),a+=1;var d=32-Be(n)+c;if(30<d){var x=c-c%5;d=(o&(1<<x)-1).toString(32),o>>=x,c-=x,Fi=1<<32-Be(n)+c|a<<c|o,Ii=d+t}else Fi=1<<d|a<<c|o,Ii=t}function Xc(t){t.return!==null&&(ia(t,1),vm(t,1,0))}function Wc(t){for(;t===Dl;)Dl=as[--rs],as[rs]=null,ho=as[--rs],as[rs]=null;for(;t===Ba;)Ba=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null,Fi=di[--hi],di[hi]=null}function xm(t,n){di[hi++]=Fi,di[hi++]=Ii,di[hi++]=Ba,Fi=n.id,Ii=n.overflow,Ba=t}var Rn=null,Zt=null,yt=!1,za=null,pi=!1,qc=Error(r(519));function Ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw po(fi(n,t)),qc}function Sm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[dn]=t,n[An]=o,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)gt(Fo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||I0(n.textContent,a)?(o.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),o.onScroll!=null&&gt("scroll",n),o.onScrollEnd!=null&&gt("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Ha(t,!0)}function ym(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function ss(t){if(t!==Rn)return!1;if(!yt)return ym(t),yt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||fd(t.type,t.memoizedProps)),a=!a),a&&Zt&&Ha(t),ym(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=q0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Zt=q0(t)}else n===27?(n=Zt,er(t.type)?(t=gd,gd=null,Zt=t):Zt=n):Zt=Rn?gi(t.stateNode.nextSibling):null;return!0}function Ar(){Zt=Rn=null,yt=!1}function Yc(){var t=za;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),za=null),t}function po(t){za===null?za=[t]:za.push(t)}var Zc=N(null),Rr=null,aa=null;function Ga(t,n,a){Ee(Zc,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Zc.current,Q(Zc)}function Kc(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Qc(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var d=c.dependencies;if(d!==null){var x=c.child;d=d.firstContext;e:for(;d!==null;){var R=d;d=c;for(var z=0;z<n.length;z++)if(R.context===n[z]){d.lanes|=a,R=d.alternate,R!==null&&(R.lanes|=a),Kc(d.return,a,t),o||(x=null);break e}d=R.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Kc(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function os(t,n,a,o){t=null;for(var c=n,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var R=c.type;$n(c.pendingProps.value,x.value)||(t!==null?t.push(R):t=[R])}}else if(c===Se.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Go):t=[Go])}c=c.return}t!==null&&Qc(n,t,a,o),n.flags|=262144}function Ul(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Rr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Mm(Rr,t)}function Ll(t,n){return Rr===null&&Cr(t),Mm(t,n)}function Mm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var wS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},DS=s.unstable_scheduleCallback,US=s.unstable_NormalPriority,pn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new wS,data:new Map,refCount:0}}function mo(t){t.refCount--,t.refCount===0&&DS(US,function(){t.controller.abort()})}var go=null,jc=0,ls=0,us=null;function LS(t,n){if(go===null){var a=go=[];jc=0,ls=nd(),us={status:"pending",value:void 0,then:function(o){a.push(o)}}}return jc++,n.then(Em,Em),n}function Em(){if(--jc===0&&go!==null){us!==null&&(us.status="fulfilled");var t=go;go=null,ls=0,us=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function NS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var bm=B.S;B.S=function(t,n){o0=Ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&LS(t,n),bm!==null&&bm(t,n)};var wr=N(null);function $c(){var t=wr.current;return t!==null?t:Wt.pooledCache}function Nl(t,n){n===null?Ee(wr,wr.current):Ee(wr,n.pool)}function Tm(){var t=$c();return t===null?null:{parent:pn._currentValue,pool:t}}var cs=Error(r(460)),ef=Error(r(474)),Ol=Error(r(542)),Pl={then:function(){}};function Am(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Rm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t;default:if(typeof n.status=="string")n.then(ea,ea);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,wm(t),t}throw Ur=n,cs}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,cs):a}}var Ur=null;function Cm(){if(Ur===null)throw Error(r(459));var t=Ur;return Ur=null,t}function wm(t){if(t===cs||t===Ol)throw Error(r(483))}var fs=null,_o=0;function Fl(t){var n=_o;return _o+=1,fs===null&&(fs=[]),Rm(fs,t,n)}function vo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Il(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dm(t){function n(K,V){if(t){var j=K.deletions;j===null?(K.deletions=[V],K.flags|=16):j.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function o(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=na(K,V),K.index=0,K.sibling=null,K}function d(K,V,j){return K.index=j,t?(j=K.alternate,j!==null?(j=j.index,j<V?(K.flags|=67108866,V):j):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function x(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,j,ve){return V===null||V.tag!==6?(V=Vc(j,K.mode,ve),V.return=K,V):(V=c(V,j),V.return=K,V)}function z(K,V,j,ve){var et=j.type;return et===C?pe(K,V,j.props.children,ve,j.key):V!==null&&(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Dr(et)===V.type)?(V=c(V,j.props),vo(V,j),V.return=K,V):(V=wl(j.type,j.key,j.props,null,K.mode,ve),vo(V,j),V.return=K,V)}function $(K,V,j,ve){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=kc(j,K.mode,ve),V.return=K,V):(V=c(V,j.children||[]),V.return=K,V)}function pe(K,V,j,ve,et){return V===null||V.tag!==7?(V=Tr(j,K.mode,ve,et),V.return=K,V):(V=c(V,j),V.return=K,V)}function xe(K,V,j){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Vc(""+V,K.mode,j),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return j=wl(V.type,V.key,V.props,null,K.mode,j),vo(j,V),j.return=K,j;case T:return V=kc(V,K.mode,j),V.return=K,V;case b:return V=Dr(V),xe(K,V,j)}if(Y(V)||Z(V))return V=Tr(V,K.mode,j,null),V.return=K,V;if(typeof V.then=="function")return xe(K,Fl(V),j);if(V.$$typeof===I)return xe(K,Ll(K,V),j);Il(K,V)}return null}function se(K,V,j,ve){var et=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return et!==null?null:R(K,V,""+j,ve);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return j.key===et?z(K,V,j,ve):null;case T:return j.key===et?$(K,V,j,ve):null;case b:return j=Dr(j),se(K,V,j,ve)}if(Y(j)||Z(j))return et!==null?null:pe(K,V,j,ve,null);if(typeof j.then=="function")return se(K,V,Fl(j),ve);if(j.$$typeof===I)return se(K,V,Ll(K,j),ve);Il(K,j)}return null}function le(K,V,j,ve,et){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return K=K.get(j)||null,R(V,K,""+ve,et);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case M:return K=K.get(ve.key===null?j:ve.key)||null,z(V,K,ve,et);case T:return K=K.get(ve.key===null?j:ve.key)||null,$(V,K,ve,et);case b:return ve=Dr(ve),le(K,V,j,ve,et)}if(Y(ve)||Z(ve))return K=K.get(j)||null,pe(V,K,ve,et,null);if(typeof ve.then=="function")return le(K,V,j,Fl(ve),et);if(ve.$$typeof===I)return le(K,V,j,Ll(V,ve),et);Il(V,ve)}return null}function We(K,V,j,ve){for(var et=null,At=null,Ze=V,ut=V=0,vt=null;Ze!==null&&ut<j.length;ut++){Ze.index>ut?(vt=Ze,Ze=null):vt=Ze.sibling;var Rt=se(K,Ze,j[ut],ve);if(Rt===null){Ze===null&&(Ze=vt);break}t&&Ze&&Rt.alternate===null&&n(K,Ze),V=d(Rt,V,ut),At===null?et=Rt:At.sibling=Rt,At=Rt,Ze=vt}if(ut===j.length)return a(K,Ze),yt&&ia(K,ut),et;if(Ze===null){for(;ut<j.length;ut++)Ze=xe(K,j[ut],ve),Ze!==null&&(V=d(Ze,V,ut),At===null?et=Ze:At.sibling=Ze,At=Ze);return yt&&ia(K,ut),et}for(Ze=o(Ze);ut<j.length;ut++)vt=le(Ze,K,ut,j[ut],ve),vt!==null&&(t&&vt.alternate!==null&&Ze.delete(vt.key===null?ut:vt.key),V=d(vt,V,ut),At===null?et=vt:At.sibling=vt,At=vt);return t&&Ze.forEach(function(rr){return n(K,rr)}),yt&&ia(K,ut),et}function tt(K,V,j,ve){if(j==null)throw Error(r(151));for(var et=null,At=null,Ze=V,ut=V=0,vt=null,Rt=j.next();Ze!==null&&!Rt.done;ut++,Rt=j.next()){Ze.index>ut?(vt=Ze,Ze=null):vt=Ze.sibling;var rr=se(K,Ze,Rt.value,ve);if(rr===null){Ze===null&&(Ze=vt);break}t&&Ze&&rr.alternate===null&&n(K,Ze),V=d(rr,V,ut),At===null?et=rr:At.sibling=rr,At=rr,Ze=vt}if(Rt.done)return a(K,Ze),yt&&ia(K,ut),et;if(Ze===null){for(;!Rt.done;ut++,Rt=j.next())Rt=xe(K,Rt.value,ve),Rt!==null&&(V=d(Rt,V,ut),At===null?et=Rt:At.sibling=Rt,At=Rt);return yt&&ia(K,ut),et}for(Ze=o(Ze);!Rt.done;ut++,Rt=j.next())Rt=le(Ze,K,ut,Rt.value,ve),Rt!==null&&(t&&Rt.alternate!==null&&Ze.delete(Rt.key===null?ut:Rt.key),V=d(Rt,V,ut),At===null?et=Rt:At.sibling=Rt,At=Rt);return t&&Ze.forEach(function(Xy){return n(K,Xy)}),yt&&ia(K,ut),et}function kt(K,V,j,ve){if(typeof j=="object"&&j!==null&&j.type===C&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case M:e:{for(var et=j.key;V!==null;){if(V.key===et){if(et=j.type,et===C){if(V.tag===7){a(K,V.sibling),ve=c(V,j.props.children),ve.return=K,K=ve;break e}}else if(V.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===b&&Dr(et)===V.type){a(K,V.sibling),ve=c(V,j.props),vo(ve,j),ve.return=K,K=ve;break e}a(K,V);break}else n(K,V);V=V.sibling}j.type===C?(ve=Tr(j.props.children,K.mode,ve,j.key),ve.return=K,K=ve):(ve=wl(j.type,j.key,j.props,null,K.mode,ve),vo(ve,j),ve.return=K,K=ve)}return x(K);case T:e:{for(et=j.key;V!==null;){if(V.key===et)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){a(K,V.sibling),ve=c(V,j.children||[]),ve.return=K,K=ve;break e}else{a(K,V);break}else n(K,V);V=V.sibling}ve=kc(j,K.mode,ve),ve.return=K,K=ve}return x(K);case b:return j=Dr(j),kt(K,V,j,ve)}if(Y(j))return We(K,V,j,ve);if(Z(j)){if(et=Z(j),typeof et!="function")throw Error(r(150));return j=et.call(j),tt(K,V,j,ve)}if(typeof j.then=="function")return kt(K,V,Fl(j),ve);if(j.$$typeof===I)return kt(K,V,Ll(K,j),ve);Il(K,j)}return typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint"?(j=""+j,V!==null&&V.tag===6?(a(K,V.sibling),ve=c(V,j),ve.return=K,K=ve):(a(K,V),ve=Vc(j,K.mode,ve),ve.return=K,K=ve),x(K)):a(K,V)}return function(K,V,j,ve){try{_o=0;var et=kt(K,V,j,ve);return fs=null,et}catch(Ze){if(Ze===cs||Ze===Ol)throw Ze;var At=ei(29,Ze,null,K.mode);return At.lanes=ve,At.return=K,At}}}var Lr=Dm(!0),Um=Dm(!1),Va=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Dt&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Cl(t),pm(t,null,a),n}return Rl(t,o,n,a),Cl(t)}function xo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}function af(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?c=d=n:d=d.next=n}else c=d=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var rf=!1;function So(){if(rf){var t=us;if(t!==null)throw t}}function yo(t,n,a,o){rf=!1;var c=t.updateQueue;Va=!1;var d=c.firstBaseUpdate,x=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var z=R,$=z.next;z.next=null,x===null?d=$:x.next=$,x=z;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==x&&(R===null?pe.firstBaseUpdate=$:R.next=$,pe.lastBaseUpdate=z))}if(d!==null){var xe=c.baseState;x=0,pe=$=z=null,R=d;do{var se=R.lane&-536870913,le=se!==R.lane;if(le?(_t&se)===se:(o&se)===se){se!==0&&se===ls&&(rf=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var We=t,tt=R;se=n;var kt=a;switch(tt.tag){case 1:if(We=tt.payload,typeof We=="function"){xe=We.call(kt,xe,se);break e}xe=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=tt.payload,se=typeof We=="function"?We.call(kt,xe,se):We,se==null)break e;xe=v({},xe,se);break e;case 2:Va=!0}}se=R.callback,se!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[se]:le.push(se))}else le={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?($=pe=le,z=xe):pe=pe.next=le,x|=se;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;le=R,R=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);pe===null&&(z=xe),c.baseState=z,c.firstBaseUpdate=$,c.lastBaseUpdate=pe,d===null&&(c.shared.lanes=0),Ka|=x,t.lanes=x,t.memoizedState=xe}}function Lm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Nm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Lm(a[t],n)}var ds=N(null),Bl=N(0);function Om(t,n){t=pa,Ee(Bl,t),Ee(ds,n),pa=t|n.baseLanes}function sf(){Ee(Bl,pa),Ee(ds,ds.current)}function of(){pa=Bl.current,Q(ds),Q(Bl)}var ti=N(null),mi=null;function Wa(t){var n=t.alternate;Ee(un,un.current&1),Ee(ti,t),mi===null&&(n===null||ds.current!==null||n.memoizedState!==null)&&(mi=t)}function lf(t){Ee(un,un.current),Ee(ti,t),mi===null&&(mi=t)}function Pm(t){t.tag===22?(Ee(un,un.current),Ee(ti,t),mi===null&&(mi=t)):qa()}function qa(){Ee(un,un.current),Ee(ti,ti.current)}function ni(t){Q(ti),mi===t&&(mi=null),Q(un)}var un=N(0);function zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pd(a)||md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,lt=null,Gt=null,mn=null,Hl=!1,hs=!1,Nr=!1,Gl=0,Mo=0,ps=null,OS=0;function rn(){throw Error(r(321))}function uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function cf(t,n,a,o,c,d){return sa=d,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?vg:Tf,Nr=!1,d=a(o,c),Nr=!1,hs&&(d=Im(n,a,o,c)),Fm(t),d}function Fm(t){B.H=To;var n=Gt!==null&&Gt.next!==null;if(sa=0,mn=Gt=lt=null,Hl=!1,Mo=0,ps=null,n)throw Error(r(300));t===null||gn||(t=t.dependencies,t!==null&&Ul(t)&&(gn=!0))}function Im(t,n,a,o){lt=t;var c=0;do{if(hs&&(ps=null),Mo=0,hs=!1,25<=c)throw Error(r(301));if(c+=1,mn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=xg,d=n(a,o)}while(hs);return d}function PS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function ff(){var t=Gl!==0;return Gl=0,t}function df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hf(t){if(Hl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Hl=!1}sa=0,mn=Gt=lt=null,hs=!1,Mo=Gl=0,ps=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?lt.memoizedState=mn=t:mn=mn.next=t,mn}function cn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=mn===null?lt.memoizedState:mn.next;if(n!==null)mn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},mn===null?lt.memoizedState=mn=t:mn=mn.next=t}return mn}function Vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=Mo;return Mo+=1,ps===null&&(ps=[]),t=Rm(ps,t,n),n=lt,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?vg:Tf),t}function kl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===I)return Cn(t)}throw Error(r(438,String(t)))}function pf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Vl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function oa(t,n){return typeof n=="function"?n(t):n}function Xl(t){var n=cn();return mf(n,Gt,t)}function mf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=t.baseQueue,d=o.pending;if(d!==null){if(c!==null){var x=c.next;c.next=d.next,d.next=x}n.baseQueue=c=d,o.pending=null}if(d=t.baseState,c===null)t.memoizedState=d;else{n=c.next;var R=x=null,z=null,$=n,pe=!1;do{var xe=$.lane&-536870913;if(xe!==$.lane?(_t&xe)===xe:(sa&xe)===xe){var se=$.revertLane;if(se===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xe===ls&&(pe=!0);else if((sa&se)===se){$=$.next,se===ls&&(pe=!0);continue}else xe={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=xe,x=d):z=z.next=xe,lt.lanes|=se,Ka|=se;xe=$.action,Nr&&a(d,xe),d=$.hasEagerState?$.eagerState:a(d,xe)}else se={lane:xe,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(R=z=se,x=d):z=z.next=se,lt.lanes|=xe,Ka|=xe;$=$.next}while($!==null&&$!==n);if(z===null?x=d:z.next=R,!$n(d,t.memoizedState)&&(gn=!0,pe&&(a=us,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=z,o.lastRenderedState=d}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function gf(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,d=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do d=t(d,x.action),x=x.next;while(x!==c);$n(d,n.memoizedState)||(gn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Bm(t,n,a){var o=lt,c=cn(),d=yt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!$n((Gt||c).memoizedState,a);if(x&&(c.memoizedState=a,gn=!0),c=c.queue,xf(Gm.bind(null,o,c,t),[t]),c.getSnapshot!==n||x||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,ms(9,{destroy:void 0},Hm.bind(null,o,c,a,n),null),Wt===null)throw Error(r(349));d||(sa&127)!==0||zm(o,n,a)}return a}function zm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Vl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Hm(t,n,a,o){n.value=a,n.getSnapshot=o,Vm(n)&&km(t)}function Gm(t,n,a){return a(function(){Vm(n)&&km(t)})}function Vm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function km(t){var n=br(t,2);n!==null&&qn(n,t,2)}function _f(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Nr){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},n}function Xm(t,n,a,o){return t.baseState=a,mf(t,Gt,typeof o=="function"?o:oa)}function FS(t,n,a,o,c){if(Yl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Wm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Wm(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var d=B.T,x={};B.T=x;try{var R=a(c,o),z=B.S;z!==null&&z(x,R),qm(t,n,R)}catch($){vf(t,n,$)}finally{d!==null&&x.types!==null&&(d.types=x.types),B.T=d}}else try{d=a(c,o),qm(t,n,d)}catch($){vf(t,n,$)}}function qm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ym(t,n,o)},function(o){return vf(t,n,o)}):Ym(t,n,a)}function Ym(t,n,a){n.status="fulfilled",n.value=a,Zm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Wm(t,a)))}function vf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Zm(n),n=n.next;while(n!==o)}t.action=null}function Zm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Km(t,n){return n}function Qm(t,n){if(yt){var a=Wt.formState;if(a!==null){e:{var o=lt;if(yt){if(Zt){t:{for(var c=Zt,d=pi;c.nodeType!==8;){if(!d){c=null;break t}if(c=gi(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Zt=gi(c.nextSibling),o=c.data==="F!";break e}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Km,lastRenderedState:n},a.queue=o,a=mg.bind(null,lt,o),o.dispatch=a,o=_f(!1),d=bf.bind(null,lt,!1,o.queue),o=Bn(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=FS.bind(null,lt,c,d,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function Jm(t){var n=cn();return jm(n,Gt,t)}function jm(t,n,a){if(n=mf(t,n,Km)[0],t=Xl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(x){throw x===cs?Ol:x}else o=n;n=cn();var c=n.queue,d=c.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ms(9,{destroy:void 0},IS.bind(null,c,a),null)),[o,d,t]}function IS(t,n){t.action=n}function $m(t){var n=cn(),a=Gt;if(a!==null)return jm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ms(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Vl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function eg(){return cn().memoizedState}function Wl(t,n,a,o){var c=Bn();lt.flags|=t,c.memoizedState=ms(1|n,{destroy:void 0},a,o===void 0?null:o)}function ql(t,n,a,o){var c=cn();o=o===void 0?null:o;var d=c.memoizedState.inst;Gt!==null&&o!==null&&uf(o,Gt.memoizedState.deps)?c.memoizedState=ms(n,d,a,o):(lt.flags|=t,c.memoizedState=ms(1|n,d,a,o))}function tg(t,n){Wl(8390656,8,t,n)}function xf(t,n){ql(2048,8,t,n)}function BS(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Vl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ng(t){var n=cn().memoizedState;return BS({ref:n,nextImpl:t}),function(){if((Dt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ig(t,n){return ql(4,2,t,n)}function ag(t,n){return ql(4,4,t,n)}function rg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function sg(t,n,a){a=a!=null?a.concat([t]):null,ql(4,4,rg.bind(null,n,t),a)}function Sf(){}function og(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function lg(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=t(),Nr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o}function yf(t,n,a){return a===void 0||(sa&1073741824)!==0&&(_t&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=u0(),lt.lanes|=t,Ka|=t,a)}function ug(t,n,a,o){return $n(a,n)?a:ds.current!==null?(t=yf(t,a,o),$n(t,n)||(gn=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(_t&261930)===0?(gn=!0,t.memoizedState=a):(t=u0(),lt.lanes|=t,Ka|=t,n)}function cg(t,n,a,o,c){var d=H.p;H.p=d!==0&&8>d?d:8;var x=B.T,R={};B.T=R,bf(t,!1,n,a);try{var z=c(),$=B.S;if($!==null&&$(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var pe=NS(z,o);bo(t,n,pe,ri(t))}else bo(t,n,o,ri(t))}catch(xe){bo(t,n,{then:function(){},status:"rejected",reason:xe},ri())}finally{H.p=d,x!==null&&R.types!==null&&(x.types=R.types),B.T=x}}function zS(){}function Mf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var c=fg(t).queue;cg(t,c,n,ee,a===null?zS:function(){return dg(t),a(o)})}function fg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dg(t){var n=fg(t);n.next===null&&(n=t.alternate.memoizedState),bo(t,n.next.queue,{},ri())}function Ef(){return Cn(Go)}function hg(){return cn().memoizedState}function pg(){return cn().memoizedState}function HS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=ka(a);var o=Xa(n,t,a);o!==null&&(qn(o,n,a),xo(o,n,a)),n={cache:Jc()},t.payload=n;return}n=n.return}}function GS(t,n,a){var o=ri();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yl(t)?gg(n,a):(a=Hc(t,n,a,o),a!==null&&(qn(a,t,o),_g(a,n,o)))}function mg(t,n,a){var o=ri();bo(t,n,a,o)}function bo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yl(t))gg(n,c);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,R=d(x,a);if(c.hasEagerState=!0,c.eagerState=R,$n(R,x))return Rl(t,n,c,0),Wt===null&&Al(),!1}catch{}if(a=Hc(t,n,c,o),a!==null)return qn(a,t,o),_g(a,n,o),!0}return!1}function bf(t,n,a,o){if(o={lane:2,revertLane:nd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Yl(t)){if(n)throw Error(r(479))}else n=Hc(t,a,o,2),n!==null&&qn(n,t,2)}function Yl(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function gg(t,n){hs=Hl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function _g(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Kn(t,a)}}var To={readContext:Cn,use:kl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};To.useEffectEvent=rn;var vg={readContext:Cn,use:kl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:tg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Wl(4194308,4,rg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Wl(4194308,4,t,n)},useInsertionEffect:function(t,n){Wl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(Nr){Re(!0);try{t()}finally{Re(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var c=a(n);if(Nr){Re(!0);try{a(n)}finally{Re(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=GS.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=_f(t);var n=t.queue,a=mg.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(t,n){var a=Bn();return yf(a,t,n)},useTransition:function(){var t=_f(!1);return t=cg.bind(null,lt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,c=Bn();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(_t&127)!==0||zm(o,n,a)}c.memoizedState=a;var d={value:a,getSnapshot:n};return c.queue=d,tg(Gm.bind(null,o,d,t),[t]),o.flags|=2048,ms(9,{destroy:void 0},Hm.bind(null,o,d,a,n),null),a},useId:function(){var t=Bn(),n=Wt.identifierPrefix;if(yt){var a=Ii,o=Fi;a=(o&~(1<<32-Be(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=OS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ef,useFormState:Qm,useActionState:Qm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:pf,useCacheRefresh:function(){return Bn().memoizedState=HS.bind(null,lt)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Tf={readContext:Cn,use:kl,useCallback:og,useContext:Cn,useEffect:xf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:Xl,useRef:eg,useState:function(){return Xl(oa)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=cn();return ug(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Xl(oa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Ef,useFormState:Jm,useActionState:Jm,useOptimistic:function(t,n){var a=cn();return Xm(a,Gt,t,n)},useMemoCache:pf,useCacheRefresh:pg};Tf.useEffectEvent=ng;var xg={readContext:Cn,use:kl,useCallback:og,useContext:Cn,useEffect:xf,useImperativeHandle:sg,useInsertionEffect:ig,useLayoutEffect:ag,useMemo:lg,useReducer:gf,useRef:eg,useState:function(){return gf(oa)},useDebugValue:Sf,useDeferredValue:function(t,n){var a=cn();return Gt===null?yf(a,t,n):ug(a,Gt.memoizedState,t,n)},useTransition:function(){var t=gf(oa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:Bm,useId:hg,useHostTransitionStatus:Ef,useFormState:$m,useActionState:$m,useOptimistic:function(t,n){var a=cn();return Gt!==null?Xm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:pg};xg.useEffectEvent=ng;function Af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Rf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ri(),c=ka(o);c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,o),n!==null&&(qn(n,t,o),xo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ri(),c=ka(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Xa(t,c,o),n!==null&&(qn(n,t,o),xo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(t,o,a),n!==null&&(qn(n,t,a),xo(n,t,a))}};function Sg(t,n,a,o,c,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(c,d):!0}function yg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Rf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Mg(t){Tl(t)}function Eg(t){console.error(t)}function bg(t){Tl(t)}function Zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Tg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Cf(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(t,n)},a}function Ag(t){return t=ka(t),t.tag=3,t}function Rg(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;t.payload=function(){return c(d)},t.callback=function(){Tg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Tg(n,a,o),typeof c!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function VS(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&os(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?su():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$f(t,o,c)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$f(t,o,c)),!1}throw Error(r(435,a.tag))}return $f(t,o,c),su(),!1}if(yt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==qc&&(t=Error(r(422),{cause:o}),po(fi(t,a)))):(o!==qc&&(n=Error(r(423),{cause:o}),po(fi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=fi(o,a),c=Cf(t.stateNode,o,c),af(t,c),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=fi(d,a),No===null?No=[d]:No.push(d),sn!==4&&(sn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Cf(a.stateNode,o,t),af(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Qa===null||!Qa.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Ag(c),Rg(c,t,a,o),af(a,c),!1}a=a.return}while(a!==null);return!1}var wf=Error(r(461)),gn=!1;function wn(t,n,a,o){n.child=t===null?Um(n,null,a,o):Lr(n,t.child,a,o)}function Cg(t,n,a,o,c){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var R in o)R!=="ref"&&(x[R]=o[R])}else x=o;return Cr(n),o=cf(t,n,a,x,d,c),R=ff(),t!==null&&!gn?(df(t,n,c),la(t,n,c)):(yt&&R&&Xc(n),n.flags|=1,wn(t,n,o,c),n.child)}function wg(t,n,a,o,c){if(t===null){var d=a.type;return typeof d=="function"&&!Gc(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Dg(t,n,d,o,c)):(t=wl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!If(t,c)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(x,o)&&t.ref===n.ref)return la(t,n,c)}return n.flags|=1,t=na(d,o),t.ref=n.ref,t.return=n,n.child=t}function Dg(t,n,a,o,c){if(t!==null){var d=t.memoizedProps;if(co(d,o)&&t.ref===n.ref)if(gn=!1,n.pendingProps=o=d,If(t,c))(t.flags&131072)!==0&&(gn=!0);else return n.lanes=t.lanes,la(t,n,c)}return Df(t,n,a,o,c)}function Ug(t,n,a,o){var c=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~d}else o=0,n.child=null;return Lg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Nl(n,d!==null?d.cachePool:null),d!==null?Om(n,d):sf(),Pm(n);else return o=n.lanes=536870912,Lg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Nl(n,d.cachePool),Om(n,d),qa(),n.memoizedState=null):(t!==null&&Nl(n,null),sf(),qa());return wn(t,n,c,a),n.child}function Ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Lg(t,n,a,o,c){var d=$c();return d=d===null?null:{parent:pn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Nl(n,null),sf(),Pm(n),t!==null&&os(t,n,o,!0),n.childLanes=c,null}function Kl(t,n){return n=Jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ng(t,n,a){return Lr(n,t.child,null,a),t=Kl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function kS(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(yt){if(o.mode==="hidden")return t=Kl(n,o),n.lanes=536870912,Ao(null,t);if(lf(n),(t=Zt)?(t=W0(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,Rn=n,Zt=null)):t=null,t===null)throw Ha(n);return n.lanes=536870912,null}return Kl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(lf(n),c)if(n.flags&256)n.flags&=-257,n=Ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(gn||os(t,n,a,!1),c=(a&t.childLanes)!==0,gn||c){if(o=Wt,o!==null&&(x=Qn(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,br(t,x),qn(o,t,x),wf;su(),n=Ng(t,n,a)}else t=d.treeContext,Zt=gi(x.nextSibling),Rn=n,yt=!0,za=null,pi=!1,t!==null&&xm(n,t),n=Kl(n,o),n.flags|=4096;return n}return t=na(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,c){return Cr(n),a=cf(t,n,a,o,void 0,c),o=ff(),t!==null&&!gn?(df(t,n,c),la(t,n,c)):(yt&&o&&Xc(n),n.flags|=1,wn(t,n,a,c),n.child)}function Og(t,n,a,o,c,d){return Cr(n),n.updateQueue=null,a=Im(n,o,a,c),Fm(t),o=ff(),t!==null&&!gn?(df(t,n,d),la(t,n,d)):(yt&&o&&Xc(n),n.flags|=1,wn(t,n,a,d),n.child)}function Pg(t,n,a,o,c){if(Cr(n),n.stateNode===null){var d=is,x=a.contextType;typeof x=="object"&&x!==null&&(d=Cn(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},tf(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Cn(x):is,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Af(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&Rf.enqueueReplaceState(d,d.state,null),yo(n,o,d,c),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var R=n.memoizedProps,z=Or(a,R);d.props=z;var $=d.context,pe=a.contextType;x=is,typeof pe=="object"&&pe!==null&&(x=Cn(pe));var xe=a.getDerivedStateFromProps;pe=typeof xe=="function"||typeof d.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(R||$!==x)&&yg(n,d,o,x),Va=!1;var se=n.memoizedState;d.state=se,yo(n,o,d,c),So(),$=n.memoizedState,R||se!==$||Va?(typeof xe=="function"&&(Af(n,a,xe,o),$=n.memoizedState),(z=Va||Sg(n,a,z,o,se,$,x))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),d.props=o,d.state=$,d.context=x,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,nf(t,n),x=n.memoizedProps,pe=Or(a,x),d.props=pe,xe=n.pendingProps,se=d.context,$=a.contextType,z=is,typeof $=="object"&&$!==null&&(z=Cn($)),R=a.getDerivedStateFromProps,($=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==xe||se!==z)&&yg(n,d,o,z),Va=!1,se=n.memoizedState,d.state=se,yo(n,o,d,c),So();var le=n.memoizedState;x!==xe||se!==le||Va||t!==null&&t.dependencies!==null&&Ul(t.dependencies)?(typeof R=="function"&&(Af(n,a,R,o),le=n.memoizedState),(pe=Va||Sg(n,a,pe,o,se,le,z)||t!==null&&t.dependencies!==null&&Ul(t.dependencies))?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,le,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,le,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),d.props=o,d.state=le,d.context=z,o=pe):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&se===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&se===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Ql(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Lr(n,t.child,null,c),n.child=Lr(n,null,a,c)):wn(t,n,a,c),n.memoizedState=d.state,t=n.child):t=la(t,n,c),t}function Fg(t,n,a,o){return Ar(),n.flags|=256,wn(t,n,a,o),n.child}var Uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lf(t){return{baseLanes:t,cachePool:Tm()}}function Nf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Ig(t,n,a){var o=n.pendingProps,c=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(yt){if(c?Wa(n):qa(),(t=Zt)?(t=W0(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ba!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=gm(t),a.return=n,n.child=a,Rn=n,Zt=null)):t=null,t===null)throw Ha(n);return md(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,c?(qa(),c=n.mode,R=Jl({mode:"hidden",children:R},c),o=Tr(o,c,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Lf(a),o.childLanes=Nf(t,x,a),n.memoizedState=Uf,Ao(null,o)):(Wa(n),Of(n,R))}var z=t.memoizedState;if(z!==null&&(R=z.dehydrated,R!==null)){if(d)n.flags&256?(Wa(n),n.flags&=-257,n=Pf(t,n,a)):n.memoizedState!==null?(qa(),n.child=t.child,n.flags|=128,n=null):(qa(),R=o.fallback,c=n.mode,o=Jl({mode:"visible",children:o.children},c),R=Tr(R,c,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Lr(n,t.child,null,a),o=n.child,o.memoizedState=Lf(a),o.childLanes=Nf(t,x,a),n.memoizedState=Uf,n=Ao(null,o));else if(Wa(n),md(R)){if(x=R.nextSibling&&R.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,po({value:o,source:null,stack:null}),n=Pf(t,n,a)}else if(gn||os(t,n,a,!1),x=(a&t.childLanes)!==0,gn||x){if(x=Wt,x!==null&&(o=Qn(x,a),o!==0&&o!==z.retryLane))throw z.retryLane=o,br(t,o),qn(x,t,o),wf;pd(R)||su(),n=Pf(t,n,a)}else pd(R)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Zt=gi(R.nextSibling),Rn=n,yt=!0,za=null,pi=!1,t!==null&&xm(n,t),n=Of(n,o.children),n.flags|=4096);return n}return c?(qa(),R=o.fallback,c=n.mode,z=t.child,$=z.sibling,o=na(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,$!==null?R=na($,R):(R=Tr(R,c,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Ao(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Lf(a):(c=R.cachePool,c!==null?(z=pn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Tm(),R={baseLanes:R.baseLanes|a,cachePool:c}),o.memoizedState=R,o.childLanes=Nf(t,x,a),n.memoizedState=Uf,Ao(t.child,o)):(Wa(n),a=t.child,t=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function Pf(t,n,a){return Lr(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Kc(t.return,n,a)}function Ff(t,n,a,o,c,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=c,x.treeForkCount=d)}function zg(t,n,a){var o=n.pendingProps,c=o.revealOrder,d=o.tail;o=o.children;var x=un.current,R=(x&2)!==0;if(R?(x=x&1|2,n.flags|=128):x&=1,Ee(un,x),wn(t,n,o,a),o=yt?ho:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bg(t,a,n);else if(t.tag===19)Bg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&zl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ff(n,!1,c,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&zl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ff(n,!0,a,null,d,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(os(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=na(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=na(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function If(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ul(t)))}function XS(t,n,a){switch(n.tag){case 3:Me(n,n.stateNode.containerInfo),Ga(n,pn,t.memoizedState.cache),Ar();break;case 27:case 5:nt(n);break;case 4:Me(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ig(t,n,a):(Wa(n),t=la(t,n,a),t!==null?t.sibling:null);Wa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(os(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return zg(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ee(un,un.current),o)break;return null;case 22:return n.lanes=0,Ug(t,n,a,n.pendingProps);case 24:Ga(n,pn,t.memoizedState.cache)}return la(t,n,a)}function Hg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)gn=!0;else{if(!If(t,a)&&(n.flags&128)===0)return gn=!1,XS(t,n,a);gn=(t.flags&131072)!==0}else gn=!1,yt&&(n.flags&1048576)!==0&&vm(n,ho,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")Gc(t)?(o=Or(t,o),n.tag=1,n=Pg(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===w){n.tag=11,n=Cg(null,n,t,o,a);break e}else if(c===D){n.tag=14,n=wg(null,n,t,o,a);break e}}throw n=ge(t)||t,Error(r(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Or(o,n.pendingProps),Pg(t,n,o,c,a);case 3:e:{if(Me(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;c=d.element,nf(t,n),yo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ga(n,pn,o),o!==d.cache&&Qc(n,[pn],a,!0),So(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Fg(t,n,o,a);break e}else if(o!==c){c=fi(Error(r(424)),n),po(c),n=Fg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Zt=gi(t.firstChild),Rn=n,yt=!0,za=null,pi=!0,a=Um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ar(),o===c){n=la(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return Ql(t,n),t===null?(a=J0(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,t=n.pendingProps,o=hu(ie.current).createElement(a),o[dn]=n,o[An]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=J0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&yt&&(o=n.stateNode=Z0(n.type,n.pendingProps,ie.current),Rn=n,pi=!0,c=Zt,er(n.type)?(gd=c,Zt=gi(o.firstChild)):Zt=c),wn(t,n,n.pendingProps.children,a),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&yt&&((c=o=Zt)&&(o=Sy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,Zt=gi(o.firstChild),pi=!1,c=!0):c=!1),c||Ha(n)),nt(n),c=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,fd(c,d)?o=null:x!==null&&fd(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=cf(t,n,PS,null,null,a),Go._currentValue=c),Ql(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&yt&&((t=a=Zt)&&(a=yy(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,Zt=null,t=!0):t=!1),t||Ha(n)),null;case 13:return Ig(t,n,a);case 4:return Me(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Lr(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Cg(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Cr(n),c=Cn(c),o=o(c),n.flags|=1,wn(t,n,o,a),n.child;case 14:return wg(t,n,n.type,n.pendingProps,a);case 15:return Dg(t,n,n.type,n.pendingProps,a);case 19:return zg(t,n,a);case 31:return kS(t,n,a);case 22:return Ug(t,n,a,n.pendingProps);case 24:return Cr(n),o=Cn(pn),t===null?(c=$c(),c===null&&(c=Wt,d=Jc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),n.memoizedState={parent:o,cache:c},tf(n),Ga(n,pn,c)):((t.lanes&a)!==0&&(nf(t,n),yo(n,null,null,a),So()),c=t.memoizedState,d=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ga(n,pn,o)):(o=d.cache,Ga(n,pn,o),o!==c.cache&&Qc(n,[pn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(t){t.flags|=4}function Bf(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(h0())t.flags|=8192;else throw Ur=Pl,ef}else t.flags&=-16777217}function Gg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!n_(n))if(h0())t.flags|=8192;else throw Ur=Pl,ef}function jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ye():536870912,t.lanes|=n,xs|=n)}function Ro(t,n){if(!yt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Kt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function WS(t,n,a){var o=n.pendingProps;switch(Wc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(n),null;case 1:return Kt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(pn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ss(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Yc())),Kt(n),null;case 26:var c=n.type,d=n.memoizedState;return t===null?(ua(n),d!==null?(Kt(n),Gg(n,d)):(Kt(n),Bf(n,c,null,o,a))):d?d!==t.memoizedState?(ua(n),Kt(n),Gg(n,d)):(Kt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),Kt(n),Bf(n,c,t,o,a)),null;case 27:if(Je(n),a=ie.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}t=Ce.current,ss(n)?Sm(n):(t=Z0(c,o,a),n.stateNode=t,ua(n))}return Kt(n),null;case 5:if(Je(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Kt(n),null}if(d=Ce.current,ss(n))Sm(n);else{var x=hu(ie.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(c,{is:o.is}):x.createElement(c)}}d[dn]=n,d[An]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(Dn(d,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return Kt(n),Bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ie.current,ss(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[dn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||I0(t.nodeValue,a)),t||Ha(n,!0)}else t=hu(t).createTextNode(o),t[dn]=n,n.stateNode=t}return Kt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ss(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[dn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),t=!1}else a=Yc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Kt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ss(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[dn]=n}else Ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Kt(n),c=!1}else c=Yc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),jl(n,n.updateQueue),Kt(n),null);case 4:return He(),t===null&&sd(n.stateNode.containerInfo),Kt(n),null;case 10:return ra(n.type),Kt(n),null;case 19:if(Q(un),o=n.memoizedState,o===null)return Kt(n),null;if(c=(n.flags&128)!==0,d=o.rendering,d===null)if(c)Ro(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=zl(t),d!==null){for(n.flags|=128,Ro(o,!1),t=d.updateQueue,n.updateQueue=t,jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)mm(a,t),a=a.sibling;return Ee(un,un.current&1|2),yt&&ia(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ht()>iu&&(n.flags|=128,c=!0,Ro(o,!1),n.lanes=4194304)}else{if(!c)if(t=zl(d),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,jl(n,t),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!yt)return Kt(n),null}else 2*Ht()-o.renderingStartTime>iu&&a!==536870912&&(n.flags|=128,c=!0,Ro(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ht(),t.sibling=null,a=un.current,Ee(un,c?a&1|2:a&1),yt&&ia(n,o.treeForkCount),t):(Kt(n),null);case 22:case 23:return ni(n),of(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Kt(n),n.subtreeFlags&6&&(n.flags|=8192)):Kt(n),a=n.updateQueue,a!==null&&jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(pn),Kt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function qS(t,n){switch(Wc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(pn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Je(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ar()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(un),null;case 4:return He(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),of(),t!==null&&Q(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(pn),null;case 25:return null;default:return null}}function Vg(t,n){switch(Wc(n),n.tag){case 3:ra(pn),He();break;case 26:case 27:case 5:Je(n);break;case 4:He();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:Q(un);break;case 10:ra(n.type);break;case 22:case 23:ni(n),of(),t!==null&&Q(wr);break;case 24:ra(pn)}}function Co(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==c)}}catch(R){Bt(n,n.return,R)}}function Ya(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&t)===t){var x=o.inst,R=x.destroy;if(R!==void 0){x.destroy=void 0,c=n;var z=a,$=R;try{$()}catch(pe){Bt(c,z,pe)}}}o=o.next}while(o!==d)}}catch(pe){Bt(n,n.return,pe)}}function kg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Nm(n,a)}catch(o){Bt(t,t.return,o)}}}function Xg(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function wo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Bt(t,n,c)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Bt(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(t,n,c)}else a.current=null}function Wg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Bt(t,t.return,c)}}function zf(t,n,a){try{var o=t.stateNode;py(o,t.type,a,n),o[An]=n}catch(c){Bt(t,t.return,c)}}function qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Gf(t,n,a),t=t.sibling;t!==null;)Gf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&er(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function Yg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,o,a),n[dn]=t,n[An]=a}catch(d){Bt(t,t.return,d)}}var ca=!1,_n=!1,Vf=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,bn=null;function YS(t,n){if(t=t.containerInfo,ud=Su,t=sm(t),Oc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,R=-1,z=-1,$=0,pe=0,xe=t,se=null;t:for(;;){for(var le;xe!==a||c!==0&&xe.nodeType!==3||(R=x+c),xe!==d||o!==0&&xe.nodeType!==3||(z=x+o),xe.nodeType===3&&(x+=xe.nodeValue.length),(le=xe.firstChild)!==null;)se=xe,xe=le;for(;;){if(xe===t)break t;if(se===a&&++$===c&&(R=x),se===d&&++pe===o&&(z=x),(le=xe.nextSibling)!==null)break;xe=se,se=xe.parentNode}xe=le}a=R===-1||z===-1?null:{start:R,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:t,selectionRange:a},Su=!1,bn=n;bn!==null;)if(n=bn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,bn=t;else for(;bn!==null;){switch(n=bn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=Or(a.type,c);t=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Bt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,bn=t;break}bn=n.return}}function Kg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(t,a),o&4&&Co(5,a);break;case 1:if(da(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Bt(a,a.return,x)}else{var c=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Bt(a,a.return,x)}}o&64&&kg(a),o&512&&wo(a,a.return);break;case 3:if(da(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Nm(t,n)}catch(x){Bt(a,a.return,x)}}break;case 27:n===null&&o&4&&Yg(a);case 26:case 5:da(t,a),n===null&&o&4&&Wg(a),o&512&&wo(a,a.return);break;case 12:da(t,a);break;case 31:da(t,a),o&4&&jg(t,a);break;case 13:da(t,a),o&4&&$g(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),My(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||_n,c=ca;var d=_n;ca=o,(_n=n)&&!d?ha(t,a,(a.subtreeFlags&8772)!==0):da(t,a),ca=c,_n=d}break;case 30:break;default:da(t,a)}}function Qg(t){var n=t.alternate;n!==null&&(t.alternate=null,Qg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Oa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Vn=!1;function fa(t,n,a){for(a=a.child;a!==null;)Jg(t,n,a),a=a.sibling}function Jg(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(ce,a)}catch{}switch(a.tag){case 26:_n||Bi(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||Bi(a,n);var o=$t,c=Vn;er(a.type)&&($t=a.stateNode,Vn=!1),fa(t,n,a),Bo(a.stateNode),$t=o,Vn=c;break;case 5:_n||Bi(a,n);case 6:if(o=$t,c=Vn,$t=null,fa(t,n,a),$t=o,Vn=c,$t!==null)if(Vn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{$t.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:$t!==null&&(Vn?(t=$t,k0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rs(t)):k0($t,a.stateNode));break;case 4:o=$t,c=Vn,$t=a.stateNode.containerInfo,Vn=!0,fa(t,n,a),$t=o,Vn=c;break;case 0:case 11:case 14:case 15:Ya(2,a,n),_n||Ya(4,a,n),fa(t,n,a);break;case 1:_n||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Xg(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:_n=(o=_n)||a.memoizedState!==null,fa(t,n,a),_n=o;break;default:fa(t,n,a)}}function jg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rs(t)}catch(a){Bt(n,n.return,a)}}}function $g(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rs(t)}catch(a){Bt(n,n.return,a)}}function ZS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Zg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Zg),n;default:throw Error(r(435,t.tag))}}function eu(t,n){var a=ZS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=iy.bind(null,t,o);o.then(c,c)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=t,x=n,R=x;e:for(;R!==null;){switch(R.tag){case 27:if(er(R.type)){$t=R.stateNode,Vn=!1;break e}break;case 5:$t=R.stateNode,Vn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,Vn=!0;break e}R=R.return}if($t===null)throw Error(r(160));Jg(d,x,c),$t=null,Vn=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)e0(n,t),n=n.sibling}var Ti=null;function e0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),o&4&&(Ya(3,t,t.return),Co(3,t),Ya(5,t,t.return));break;case 1:kn(n,t),Xn(t),o&512&&(_n||a===null||Bi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ti;if(kn(n,t),Xn(t),o&512&&(_n||a===null||Bi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Na]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),Dn(d,o,a),d[dn]=t,hn(d),o=d;break e;case"link":var x=e_("link","href",c).get(o+(a.href||""));if(x){for(var R=0;R<x.length;R++)if(d=x[R],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(R,1);break t}}d=c.createElement(o),Dn(d,o,a),c.head.appendChild(d);break;case"meta":if(x=e_("meta","content",c).get(o+(a.content||""))){for(R=0;R<x.length;R++)if(d=x[R],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(R,1);break t}}d=c.createElement(o),Dn(d,o,a),c.head.appendChild(d);break;default:throw Error(r(468,o))}d[dn]=t,hn(d),o=d}t.stateNode=o}else t_(c,t.type,t.stateNode);else t.stateNode=$0(c,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?t_(c,t.type,t.stateNode):$0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&zf(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),o&512&&(_n||a===null||Bi(a,a.return)),a!==null&&o&4&&zf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),o&512&&(_n||a===null||Bi(a,a.return)),t.flags&32){c=t.stateNode;try{jn(c,"")}catch(We){Bt(t,t.return,We)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,zf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(Vf=!0);break;case 6:if(kn(n,t),Xn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Bt(t,t.return,We)}}break;case 3:if(gu=null,c=Ti,Ti=pu(n.containerInfo),kn(n,t),Ti=c,Xn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rs(n.containerInfo)}catch(We){Bt(t,t.return,We)}Vf&&(Vf=!1,t0(t));break;case 4:o=Ti,Ti=pu(t.stateNode.containerInfo),kn(n,t),Xn(t),Ti=o;break;case 12:kn(n,t),Xn(t);break;case 31:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,eu(t,o)));break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nu=Ht()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,eu(t,o)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=ca,pe=_n;if(ca=$||c,_n=pe||z,kn(n,t),_n=pe,ca=$,Xn(t),o&8192)e:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||ca||_n||Pr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,c)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{R=z.stateNode;var xe=z.memoizedProps.style,se=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(We){Bt(z,z.return,We)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(We){Bt(z,z.return,We)}}}else if(n.tag===18){if(a===null){z=n;try{var le=z.stateNode;c?X0(le,!0):X0(z.stateNode,!1)}catch(We){Bt(z,z.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,eu(t,a))));break;case 19:kn(n,t),Xn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,eu(t,o)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(qg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,d=Hf(t);$l(t,d,c);break;case 5:var x=a.stateNode;a.flags&32&&(jn(x,""),a.flags&=-33);var R=Hf(t);$l(t,R,x);break;case 3:case 4:var z=a.stateNode.containerInfo,$=Hf(t);Gf(t,$,z);break;default:throw Error(r(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function t0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;t0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function da(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Kg(t,n.alternate,n),n=n.sibling}function Pr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Pr(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xg(n,n.return,a),Pr(n);break;case 27:Bo(n.stateNode);case 26:case 5:Bi(n,n.return),Pr(n);break;case 22:n.memoizedState===null&&Pr(n);break;case 30:Pr(n);break;default:Pr(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:ha(c,d,a),Co(4,d);break;case 1:if(ha(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){Bt(o,o.return,$)}if(o=d,c=o.updateQueue,c!==null){var R=o.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Lm(z[c],R)}catch($){Bt(o,o.return,$)}}a&&x&64&&kg(d),wo(d,d.return);break;case 27:Yg(d);case 26:case 5:ha(c,d,a),a&&o===null&&x&4&&Wg(d),wo(d,d.return);break;case 12:ha(c,d,a);break;case 31:ha(c,d,a),a&&x&4&&jg(c,d);break;case 13:ha(c,d,a),a&&x&4&&$g(c,d);break;case 22:d.memoizedState===null&&ha(c,d,a),wo(d,d.return);break;case 30:break;default:ha(c,d,a)}n=n.sibling}}function kf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&mo(a))}function Xf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)n0(t,n,a,o),n=n.sibling}function n0(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),c&2048&&Co(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&mo(t)));break;case 12:if(c&2048){Ai(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,R=d.onPostCommit;typeof R=="function"&&R(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Bt(n,n.return,z)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ai(t,n,a,o):Do(t,n):d._visibility&2?Ai(t,n,a,o):(d._visibility|=2,gs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&kf(x,n);break;case 24:Ai(t,n,a,o),c&2048&&Xf(n.alternate,n);break;default:Ai(t,n,a,o)}}function gs(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,R=a,z=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:gs(d,x,R,z,c),Co(8,x);break;case 23:break;case 22:var pe=x.stateNode;x.memoizedState!==null?pe._visibility&2?gs(d,x,R,z,c):Do(d,x):(pe._visibility|=2,gs(d,x,R,z,c)),c&&$&2048&&kf(x.alternate,x);break;case 24:gs(d,x,R,z,c),c&&$&2048&&Xf(x.alternate,x);break;default:gs(d,x,R,z,c)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:Do(a,o),c&2048&&kf(o.alternate,o);break;case 24:Do(a,o),c&2048&&Xf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function _s(t,n,a){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)i0(t,n,a),t=t.sibling}function i0(t,n,a){switch(t.tag){case 26:_s(t,n,a),t.flags&Uo&&t.memoizedState!==null&&Oy(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:_s(t,n,a);break;case 3:case 4:var o=Ti;Ti=pu(t.stateNode.containerInfo),_s(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,_s(t,n,a),Uo=o):_s(t,n,a));break;default:_s(t,n,a)}}function a0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,s0(o,t)}a0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)r0(t),t=t.sibling}function r0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Ya(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tu(t)):Lo(t);break;default:Lo(t)}}function tu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];bn=o,s0(o,t)}a0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),tu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tu(n));break;default:tu(n)}t=t.sibling}}function s0(t,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,bn=o;else e:for(a=t;bn!==null;){o=bn;var c=o.sibling,d=o.return;if(Qg(o),o===a){bn=null;break e}if(c!==null){c.return=d,bn=c;break e}bn=d}}}var KS={getCacheForType:function(t){var n=Cn(pn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(pn).controller.signal}},QS=typeof WeakMap=="function"?WeakMap:Map,Dt=0,Wt=null,mt=null,_t=0,It=0,ii=null,Za=!1,vs=!1,Wf=!1,pa=0,sn=0,Ka=0,Fr=0,qf=0,ai=0,xs=0,No=null,Wn=null,Yf=!1,nu=0,o0=0,iu=1/0,au=null,Qa=null,Sn=0,Ja=null,Ss=null,ma=0,Zf=0,Kf=null,l0=null,Oo=0,Qf=null;function ri(){return(Dt&2)!==0&&_t!==0?_t&-_t:B.T!==null?nd():no()}function u0(){if(ai===0)if((_t&536870912)===0||yt){var t=at;at<<=1,(at&3932160)===0&&(at=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function qn(t,n,a){(t===Wt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(ys(t,0),ja(t,_t,ai,!1)),Ve(t,a),((Dt&2)===0||t!==Wt)&&(t===Wt&&((Dt&2)===0&&(Fr|=a),sn===4&&ja(t,_t,ai,!1)),zi(t))}function c0(t,n,a){if((Dt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),c=o?$S(t,n):jf(t,n,!0),d=o;do{if(c===0){vs&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!JS(a)){c=jf(t,n,!1),d=!1;continue}if(c===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var R=t;c=No;var z=R.current.memoizedState.isDehydrated;if(z&&(ys(R,x).flags|=256),x=jf(R,x,!1),x!==2){if(Wf&&!z){R.errorRecoveryDisabledLanes|=d,Fr|=d,c=4;break e}d=Wn,Wn=c,d!==null&&(Wn===null?Wn=d:Wn.push.apply(Wn,d))}c=x}if(d=!1,c!==2)continue}}if(c===1){ys(t,0),ja(t,n,0,!0);break}e:{switch(o=t,d=c,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ai,!Za);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=nu+300-Ht(),10<c)){if(ja(o,n,ai,!Za),me(o,0,!0)!==0)break e;ma=n,o.timeoutHandle=G0(f0.bind(null,o,a,Wn,au,Yf,n,ai,Fr,xs,Za,d,"Throttled",-0,0),c);break e}f0(o,a,Wn,au,Yf,n,ai,Fr,xs,Za,d,null,-0,0)}}break}while(!0);zi(t)}function f0(t,n,a,o,c,d,x,R,z,$,pe,xe,se,le){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},i0(n,d,xe);var We=(d&62914560)===d?nu-Ht():(d&4194048)===d?o0-Ht():0;if(We=Py(xe,We),We!==null){ma=d,t.cancelPendingCommit=We(x0.bind(null,t,n,d,a,o,c,x,R,z,pe,xe,null,se,le)),ja(t,d,x,!$);return}}x0(t,n,d,a,o,c,x,R,z)}function JS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!$n(d(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~qf,n&=~Fr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var d=31-Be(c),x=1<<d;o[d]=-1,c&=~x}a!==0&&Nt(t,a,n)}function ru(){return(Dt&6)===0?(Po(0),!1):!0}function Jf(){if(mt!==null){if(It===0)var t=mt.return;else t=mt,aa=Rr=null,hf(t),fs=null,_o=0,t=mt;for(;t!==null;)Vg(t.alternate,t),t=t.return;mt=null}}function ys(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ma=0,Jf(),Wt=t,mt=a=na(t.current,null),_t=n,It=0,ii=null,Za=!1,vs=we(t,n),Wf=!1,xs=ai=qf=Fr=Ka=sn=0,Wn=No=null,Yf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Be(o),d=1<<c;n|=t[c],o&=~d}return pa=n,Al(),a}function d0(t,n){lt=null,B.H=To,n===cs||n===Ol?(n=Cm(),It=3):n===ef?(n=Cm(),It=4):It=n===wf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,mt===null&&(sn=1,Zl(t,fi(n,t.current)))}function h0(){var t=ti.current;return t===null?!0:(_t&4194048)===_t?mi===null:(_t&62914560)===_t||(_t&536870912)!==0?t===mi:!1}function p0(){var t=B.H;return B.H=To,t===null?To:t}function m0(){var t=B.A;return B.A=KS,t}function su(){sn=4,Za||(_t&4194048)!==_t&&ti.current!==null||(vs=!0),(Ka&134217727)===0&&(Fr&134217727)===0||Wt===null||ja(Wt,_t,ai,!1)}function jf(t,n,a){var o=Dt;Dt|=2;var c=p0(),d=m0();(Wt!==t||_t!==n)&&(au=null,ys(t,n)),n=!1;var x=sn;e:do try{if(It!==0&&mt!==null){var R=mt,z=ii;switch(It){case 8:Jf(),x=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var $=It;if(It=0,ii=null,Ms(t,R,z,$),a&&vs){x=0;break e}break;default:$=It,It=0,ii=null,Ms(t,R,z,$)}}jS(),x=sn;break}catch(pe){d0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,aa=Rr=null,Dt=o,B.H=c,B.A=d,mt===null&&(Wt=null,_t=0,Al()),x}function jS(){for(;mt!==null;)g0(mt)}function $S(t,n){var a=Dt;Dt|=2;var o=p0(),c=m0();Wt!==t||_t!==n?(au=null,iu=Ht()+500,ys(t,n)):vs=we(t,n);e:do try{if(It!==0&&mt!==null){n=mt;var d=ii;t:switch(It){case 1:It=0,ii=null,Ms(t,n,d,1);break;case 2:case 9:if(Am(d)){It=0,ii=null,_0(n);break}n=function(){It!==2&&It!==9||Wt!==t||(It=7),zi(t)},d.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Am(d)?(It=0,ii=null,_0(n)):(It=0,ii=null,Ms(t,n,d,7));break;case 5:var x=null;switch(mt.tag){case 26:x=mt.memoizedState;case 5:case 27:var R=mt;if(x?n_(x):R.stateNode.complete){It=0,ii=null;var z=R.sibling;if(z!==null)mt=z;else{var $=R.return;$!==null?(mt=$,ou($)):mt=null}break t}}It=0,ii=null,Ms(t,n,d,5);break;case 6:It=0,ii=null,Ms(t,n,d,6);break;case 8:Jf(),sn=6;break e;default:throw Error(r(462))}}ey();break}catch(pe){d0(t,pe)}while(!0);return aa=Rr=null,B.H=o,B.A=c,Dt=a,mt!==null?0:(Wt=null,_t=0,Al(),sn)}function ey(){for(;mt!==null&&!an();)g0(mt)}function g0(t){var n=Hg(t.alternate,t,pa);t.memoizedProps=t.pendingProps,n===null?ou(t):mt=n}function _0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Og(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=Og(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:hf(n);default:Vg(a,n),n=mt=mm(n,pa),n=Hg(a,n,pa)}t.memoizedProps=t.pendingProps,n===null?ou(t):mt=n}function Ms(t,n,a,o){aa=Rr=null,hf(n),fs=null,_o=0;var c=n.return;try{if(VS(t,c,n,a,_t)){sn=1,Zl(t,fi(a,t.current)),mt=null;return}}catch(d){if(c!==null)throw mt=c,d;sn=1,Zl(t,fi(a,t.current)),mt=null;return}n.flags&32768?(yt||o===1?t=!0:vs||(_t&536870912)!==0?t=!1:(Za=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),v0(n,t)):ou(n)}function ou(t){var n=t;do{if((n.flags&32768)!==0){v0(n,Za);return}t=n.return;var a=WS(n.alternate,n,pa);if(a!==null){mt=a;return}if(n=n.sibling,n!==null){mt=n;return}mt=n=t}while(n!==null);sn===0&&(sn=5)}function v0(t,n){do{var a=qS(t.alternate,t);if(a!==null){a.flags&=32767,mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){mt=t;return}mt=t=a}while(t!==null);sn=6,mt=null}function x0(t,n,a,o,c,d,x,R,z){t.cancelPendingCommit=null;do lu();while(Sn!==0);if((Dt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=zc,Qt(t,a,d,x,R,z),t===Wt&&(mt=Wt=null,_t=0),Ss=n,Ja=t,ma=a,Zf=d,Kf=c,l0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(J,function(){return b0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=H.p,H.p=2,x=Dt,Dt|=4;try{YS(t,n,a)}finally{Dt=x,H.p=c,B.T=o}}Sn=1,S0(),y0(),M0()}}function S0(){if(Sn===1){Sn=0;var t=Ja,n=Ss,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var c=Dt;Dt|=4;try{e0(n,t);var d=cd,x=sm(t.containerInfo),R=d.focusedElem,z=d.selectionRange;if(x!==R&&R&&R.ownerDocument&&rm(R.ownerDocument.documentElement,R)){if(z!==null&&Oc(R)){var $=z.start,pe=z.end;if(pe===void 0&&(pe=$),"selectionStart"in R)R.selectionStart=$,R.selectionEnd=Math.min(pe,R.value.length);else{var xe=R.ownerDocument||document,se=xe&&xe.defaultView||window;if(se.getSelection){var le=se.getSelection(),We=R.textContent.length,tt=Math.min(z.start,We),kt=z.end===void 0?tt:Math.min(z.end,We);!le.extend&&tt>kt&&(x=kt,kt=tt,tt=x);var K=am(R,tt),V=am(R,kt);if(K&&V&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var j=xe.createRange();j.setStart(K.node,K.offset),le.removeAllRanges(),tt>kt?(le.addRange(j),le.extend(V.node,V.offset)):(j.setEnd(V.node,V.offset),le.addRange(j))}}}}for(xe=[],le=R;le=le.parentNode;)le.nodeType===1&&xe.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<xe.length;R++){var ve=xe[R];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Su=!!ud,cd=ud=null}finally{Dt=c,H.p=o,B.T=a}}t.current=n,Sn=2}}function y0(){if(Sn===2){Sn=0;var t=Ja,n=Ss,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var c=Dt;Dt|=4;try{Kg(t,n.alternate,n)}finally{Dt=c,H.p=o,B.T=a}}Sn=3}}function M0(){if(Sn===4||Sn===3){Sn=0,W();var t=Ja,n=Ss,a=ma,o=l0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,Ss=Ja=null,E0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Qa=null),to(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=H.p,H.p=2,B.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var R=o[x];d(R.value,{componentStack:R.stack})}}finally{B.T=n,H.p=c}}(ma&3)!==0&&lu(),zi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Qf?Oo++:(Oo=0,Qf=t):Oo=0,Po(0)}}function E0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,mo(n)))}function lu(){return S0(),y0(),M0(),b0()}function b0(){if(Sn!==5)return!1;var t=Ja,n=Zf;Zf=0;var a=to(ma),o=B.T,c=H.p;try{H.p=32>a?32:a,B.T=null,a=Kf,Kf=null;var d=Ja,x=ma;if(Sn=0,Ss=Ja=null,ma=0,(Dt&6)!==0)throw Error(r(331));var R=Dt;if(Dt|=4,r0(d.current),n0(d,d.current,x,a),Dt=R,Po(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(ce,d)}catch{}return!0}finally{H.p=c,B.T=o,E0(t,n)}}function T0(t,n,a){n=fi(a,n),n=Cf(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(Ve(t,2),zi(t))}function Bt(t,n,a){if(t.tag===3)T0(t,t,a);else for(;n!==null;){if(n.tag===3){T0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){t=fi(a,t),a=Ag(2),o=Xa(n,a,2),o!==null&&(Rg(a,o,n,t),Ve(o,2),zi(o));break}}n=n.return}}function $f(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new QS;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Wf=!0,c.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(_t&a)===a&&(sn===4||sn===3&&(_t&62914560)===_t&&300>Ht()-nu?(Dt&2)===0&&ys(t,0):qf|=a,xs===_t&&(xs=0)),zi(t)}function A0(t,n){n===0&&(n=ye()),t=br(t,n),t!==null&&(Ve(t,n),zi(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),A0(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),A0(t,a)}function ay(t,n){return ln(t,n)}var uu=null,Es=null,ed=!1,cu=!1,td=!1,$a=0;function zi(t){t!==Es&&t.next===null&&(Es===null?uu=Es=t:Es=Es.next=t),cu=!0,ed||(ed=!0,sy())}function Po(t,n){if(!td&&cu){td=!0;do for(var a=!1,o=uu;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var x=o.suspendedLanes,R=o.pingedLanes;d=(1<<31-Be(42|t)+1)-1,d&=c&~(x&~R),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,D0(o,d))}else d=_t,d=me(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||we(o,d)||(a=!0,D0(o,d));o=o.next}while(a);td=!1}}function ry(){R0()}function R0(){cu=ed=!1;var t=0;$a!==0&&gy()&&(t=$a);for(var n=Ht(),a=null,o=uu;o!==null;){var c=o.next,d=C0(o,n);d===0?(o.next=null,a===null?uu=c:a.next=c,c===null&&(Es=a)):(a=o,(t!==0||(d&3)!==0)&&(cu=!0)),o=c}Sn!==0&&Sn!==5||Po(t),$a!==0&&($a=0)}function C0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Be(d),R=1<<x,z=c[x];z===-1?((R&a)===0||(R&o)!==0)&&(c[x]=Ie(R,n)):z<=n&&(t.expiredLanes|=R),d&=~R}if(n=Wt,a=_t,a=me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(It===2||It===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&qt(o),to(a)){case 2:case 8:a=E;break;case 32:a=J;break;case 268435456:a=fe;break;default:a=J}return o=w0.bind(null,t),a=ln(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&qt(o),t.callbackPriority=2,t.callbackNode=null,2}function w0(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lu()&&t.callbackNode!==a)return null;var o=_t;return o=me(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(c0(t,o,n),C0(t,Ht()),t.callbackNode!=null&&t.callbackNode===a?w0.bind(null,t):null)}function D0(t,n){if(lu())return null;c0(t,n,!0)}function sy(){vy(function(){(Dt&6)!==0?ln(U,ry):R0()})}function nd(){if($a===0){var t=ls;t===0&&(t=je,je<<=1,(je&261888)===0&&(je=256)),$a=t}return $a}function U0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sr(""+t)}function L0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var d=U0((c[An]||null).action),x=o.submitter;x&&(n=(n=x[An]||null)?U0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var R=new Ml("action","action",null,o,c);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var z=x?L0(c,x):new FormData(c);Mf(a,{pending:!0,data:z,method:c.method,action:d},null,z)}}else typeof d=="function"&&(R.preventDefault(),z=x?L0(c,x):new FormData(c),Mf(a,{pending:!0,data:z,method:c.method,action:d},d,z))},currentTarget:c}]})}}for(var id=0;id<Bc.length;id++){var ad=Bc[id],ly=ad.toLowerCase(),uy=ad[0].toUpperCase()+ad.slice(1);bi(ly,"on"+uy)}bi(um,"onAnimationEnd"),bi(cm,"onAnimationIteration"),bi(fm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(TS,"onTransitionRun"),bi(AS,"onTransitionStart"),bi(RS,"onTransitionCancel"),bi(dm,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),X("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),X("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),X("onBeforeInput",["compositionend","keypress","textInput","paste"]),X("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),X("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function N0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var R=o[x],z=R.instance,$=R.currentTarget;if(R=R.listener,z!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=$;try{d(c)}catch(pe){Tl(pe)}c.currentTarget=null,d=z}else for(x=0;x<o.length;x++){if(R=o[x],z=R.instance,$=R.currentTarget,R=R.listener,z!==d&&c.isPropagationStopped())break e;d=R,c.currentTarget=$;try{d(c)}catch(pe){Tl(pe)}c.currentTarget=null,d=z}}}}function gt(t,n){var a=n[_r];a===void 0&&(a=n[_r]=new Set);var o=t+"__bubble";a.has(o)||(O0(n,t,2,!1),a.add(o))}function rd(t,n,a){var o=0;n&&(o|=4),O0(a,t,o,n)}var fu="_reactListening"+Math.random().toString(36).slice(2);function sd(t){if(!t[fu]){t[fu]=!0,vl.forEach(function(a){a!=="selectionchange"&&(cy.has(a)||rd(a,!1,t),rd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fu]||(n[fu]=!0,rd("selectionchange",!1,n))}}function O0(t,n,a,o){switch(u_(n)){case 2:var c=By;break;case 8:c=zy;break;default:c=yd}a=c.bind(null,n,a,t),c=void 0,!Tc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function od(t,n,a,o,c){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var R=o.stateNode.containerInfo;if(R===c)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;R!==null;){if(x=ji(R),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=d=x;continue e}R=R.parentNode}}o=o.return}zp(function(){var $=d,pe=Ec(a),xe=[];e:{var se=hm.get(t);if(se!==void 0){var le=Ml,We=t;switch(t){case"keypress":if(Sl(a)===0)break e;case"keydown":case"keyup":le=iS;break;case"focusin":We="focus",le=wc;break;case"focusout":We="blur",le=wc;break;case"beforeblur":case"afterblur":le=wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=sS;break;case um:case cm:case fm:le=Zx;break;case dm:le=lS;break;case"scroll":case"scrollend":le=kx;break;case"wheel":le=cS;break;case"copy":case"cut":case"paste":le=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=Xp;break;case"toggle":case"beforetoggle":le=dS}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),K=tt?se!==null?se+"Capture":null:se;tt=[];for(var V=$,j;V!==null;){var ve=V;if(j=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||j===null||K===null||(ve=io(V,K),ve!=null&&tt.push(Io(V,ve,j))),kt)break;V=V.return}0<tt.length&&(se=new le(se,We,null,a,pe),xe.push({event:se,listeners:tt}))}}if((n&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",se&&a!==Mc&&(We=a.relatedTarget||a.fromElement)&&(ji(We)||We[Hn]))break e;if((le||se)&&(se=pe.window===pe?pe:(se=pe.ownerDocument)?se.defaultView||se.parentWindow:window,le?(We=a.relatedTarget||a.toElement,le=$,We=We?ji(We):null,We!==null&&(kt=u(We),tt=We.tag,We!==kt||tt!==5&&tt!==27&&tt!==6)&&(We=null)):(le=null,We=$),le!==We)){if(tt=Vp,ve="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=Xp,ve="onPointerLeave",K="onPointerEnter",V="pointer"),kt=le==null?se:xr(le),j=We==null?se:xr(We),se=new tt(ve,V+"leave",le,a,pe),se.target=kt,se.relatedTarget=j,ve=null,ji(pe)===$&&(tt=new tt(K,V+"enter",We,a,pe),tt.target=j,tt.relatedTarget=kt,ve=tt),kt=ve,le&&We)t:{for(tt=fy,K=le,V=We,j=0,ve=K;ve;ve=tt(ve))j++;ve=0;for(var et=V;et;et=tt(et))ve++;for(;0<j-ve;)K=tt(K),j--;for(;0<ve-j;)V=tt(V),ve--;for(;j--;){if(K===V||V!==null&&K===V.alternate){tt=K;break t}K=tt(K),V=tt(V)}tt=null}else tt=null;le!==null&&P0(xe,se,le,tt,!1),We!==null&&kt!==null&&P0(xe,kt,We,tt,!0)}}e:{if(se=$?xr($):window,le=se.nodeName&&se.nodeName.toLowerCase(),le==="select"||le==="input"&&se.type==="file")var At=jp;else if(Qp(se))if($p)At=MS;else{At=SS;var Ze=xS}else le=se.nodeName,!le||le.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?$&&Lt($.elementType)&&(At=jp):At=yS;if(At&&(At=At(t,$))){Jp(xe,At,a,pe);break e}Ze&&Ze(t,se,$),t==="focusout"&&$&&se.type==="number"&&$.memoizedProps.value!=null&&pt(se,"number",se.value)}switch(Ze=$?xr($):window,t){case"focusin":(Qp(Ze)||Ze.contentEditable==="true")&&(es=Ze,Pc=$,fo=null);break;case"focusout":fo=Pc=es=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,om(xe,a,pe);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":om(xe,a,pe)}var ut;if(Uc)e:{switch(t){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else $r?Zp(t,a)&&(vt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(Wp&&a.locale!=="ko"&&($r||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&$r&&(ut=Hp()):(Ia=pe,Ac="value"in Ia?Ia.value:Ia.textContent,$r=!0)),Ze=du($,vt),0<Ze.length&&(vt=new kp(vt,t,null,a,pe),xe.push({event:vt,listeners:Ze}),ut?vt.data=ut:(ut=Kp(a),ut!==null&&(vt.data=ut)))),(ut=pS?mS(t,a):gS(t,a))&&(vt=du($,"onBeforeInput"),0<vt.length&&(Ze=new kp("onBeforeInput","beforeinput",null,a,pe),xe.push({event:Ze,listeners:vt}),Ze.data=ut)),oy(xe,t,$,a,pe)}N0(xe,n)})}function Io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function du(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=io(t,a),c!=null&&o.unshift(Io(t,c,d)),c=io(t,n),c!=null&&o.push(Io(t,c,d))),t.tag===3)return o;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function P0(t,n,a,o,c){for(var d=n._reactName,x=[];a!==null&&a!==o;){var R=a,z=R.alternate,$=R.stateNode;if(R=R.tag,z!==null&&z===o)break;R!==5&&R!==26&&R!==27||$===null||(z=$,c?($=io(a,d),$!=null&&x.unshift(Io(a,$,z))):c||($=io(a,d),$!=null&&x.push(Io(a,$,z)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var dy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function F0(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(hy,"")}function I0(t,n){return n=F0(n),F0(t)===n}function Vt(t,n,a,o,c,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||jn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&jn(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ei(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Sr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",c.name,c,null),Vt(t,n,"formEncType",c.formEncType,c,null),Vt(t,n,"formMethod",c.formMethod,c,null),Vt(t,n,"formTarget",c.formTarget,c,null)):(Vt(t,n,"encType",c.encType,c,null),Vt(t,n,"method",c.method,c,null),Vt(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Sr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ea);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Sr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":gt("beforetoggle",t),gt("toggle",t),Le(t,"popover",o);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Le(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pi.get(a)||a,Le(t,a,o))}}function ld(t,n,a,o,c,d){switch(a){case"style":Ei(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?jn(t,o):(typeof o=="number"||typeof o=="bigint")&&jn(t,""+o);break;case"onScroll":o!=null&&gt("scroll",t);break;case"onScrollEnd":o!=null&&gt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),d=t[An]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Le(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,d,x,a,null)}}c&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":gt("invalid",t);var R=d=x=c=null,z=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":c=pe;break;case"type":x=pe;break;case"checked":z=pe;break;case"defaultChecked":$=pe;break;case"value":d=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:Vt(t,n,o,pe,a,null)}}Nn(t,d,R,z,$,x,c,!1);return;case"select":gt("invalid",t),o=x=d=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":d=R;break;case"defaultValue":x=R;break;case"multiple":o=R;default:Vt(t,n,c,R,a,null)}n=d,a=x,t.multiple=!!o,n!=null?xn(t,!!o,n,!1):a!=null&&xn(t,!!o,a,!0);return;case"textarea":gt("invalid",t),d=c=o=null;for(x in a)if(a.hasOwnProperty(x)&&(R=a[x],R!=null))switch(x){case"value":o=R;break;case"defaultValue":c=R;break;case"children":d=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,n,x,R,a,null)}Mi(t,o,c,d);return;case"option":for(z in a)a.hasOwnProperty(z)&&(o=a[z],o!=null)&&(z==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,z,o,a,null));return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(o=0;o<Fo.length;o++)gt(Fo[o],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,$,o,a,null)}return;default:if(Lt(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&ld(t,n,pe,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function py(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,x=null,R=null,z=null,$=null,pe=null;for(le in a){var xe=a[le];if(a.hasOwnProperty(le)&&xe!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":z=xe;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,xe)}}for(var se in o){var le=o[se];if(xe=a[se],o.hasOwnProperty(se)&&(le!=null||xe!=null))switch(se){case"type":d=le;break;case"name":c=le;break;case"checked":$=le;break;case"defaultChecked":pe=le;break;case"value":x=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==xe&&Vt(t,n,se,le,o,xe)}}ze(t,x,R,z,$,pe,d,c);return;case"select":le=x=R=se=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":le=z;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,z)}for(c in o)if(d=o[c],z=a[c],o.hasOwnProperty(c)&&(d!=null||z!=null))switch(c){case"value":se=d;break;case"defaultValue":R=d;break;case"multiple":x=d;default:d!==z&&Vt(t,n,c,d,o,z)}n=R,a=x,o=le,se!=null?xn(t,!!a,se,!1):!!o!=!!a&&(n!=null?xn(t,!!a,n,!0):xn(t,!!a,a?[]:"",!1));return;case"textarea":le=se=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,c)}for(x in o)if(c=o[x],d=a[x],o.hasOwnProperty(x)&&(c!=null||d!=null))switch(x){case"value":se=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==d&&Vt(t,n,x,c,o,d)}Jn(t,se,le);return;case"option":for(var We in a)se=a[We],a.hasOwnProperty(We)&&se!=null&&!o.hasOwnProperty(We)&&(We==="selected"?t.selected=!1:Vt(t,n,We,null,o,se));for(z in o)se=o[z],le=a[z],o.hasOwnProperty(z)&&se!==le&&(se!=null||le!=null)&&(z==="selected"?t.selected=se&&typeof se!="function"&&typeof se!="symbol":Vt(t,n,z,se,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)se=a[tt],a.hasOwnProperty(tt)&&se!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,se);for($ in o)if(se=o[$],le=a[$],o.hasOwnProperty($)&&se!==le&&(se!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:Vt(t,n,$,se,o,le)}return;default:if(Lt(n)){for(var kt in a)se=a[kt],a.hasOwnProperty(kt)&&se!==void 0&&!o.hasOwnProperty(kt)&&ld(t,n,kt,void 0,o,se);for(pe in o)se=o[pe],le=a[pe],!o.hasOwnProperty(pe)||se===le||se===void 0&&le===void 0||ld(t,n,pe,se,o,le);return}}for(var K in a)se=a[K],a.hasOwnProperty(K)&&se!=null&&!o.hasOwnProperty(K)&&Vt(t,n,K,null,o,se);for(xe in o)se=o[xe],le=a[xe],!o.hasOwnProperty(xe)||se===le||se==null&&le==null||Vt(t,n,xe,se,o,le)}function B0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],d=c.transferSize,x=c.initiatorType,R=c.duration;if(d&&R&&B0(x)){for(x=0,R=c.responseEnd,o+=1;o<a.length;o++){var z=a[o],$=z.startTime;if($>R)break;var pe=z.transferSize,xe=z.initiatorType;pe&&B0(xe)&&(z=z.responseEnd,x+=pe*(z<R?1:(R-$)/(z-$)))}if(--o,n+=8*(d+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var ud=null,cd=null;function hu(t){return t.nodeType===9?t:t.ownerDocument}function z0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dd=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===dd?!1:(dd=t,!0):(dd=null,!1)}var G0=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,V0=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof V0<"u"?function(t){return V0.resolve(null).then(t).catch(xy)}:G0;function xy(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function k0(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),Rs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,R=d.nodeName;d[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Bo(t.ownerDocument.body);a=c}while(a);Rs(n)}function X0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),Oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Sy(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function yy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function W0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function pd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function My(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function q0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Y0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Z0(t,n,a){switch(n=hu(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Oa(t)}var _i=new Map,K0=new Set;function pu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=H.d;H.d={f:Ey,r:by,D:Ty,C:Ay,L:Ry,m:Cy,X:Dy,S:wy,M:Uy};function Ey(){var t=ga.f(),n=ru();return t||n}function by(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?dg(n):ga.r(t)}var bs=typeof document>"u"?null:document;function Q0(t,n,a){var o=bs;if(o&&typeof n=="string"&&n){var c=Pt(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),K0.has(c)||(K0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function Ty(t){ga.D(t),Q0("dns-prefetch",t,null)}function Ay(t,n){ga.C(t,n),Q0("preconnect",t,n)}function Ry(t,n,a){ga.L(t,n,a);var o=bs;if(o&&t&&n){var c='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Pt(a.imageSizes)+'"]')):c+='[href="'+Pt(t)+'"]';var d=c;switch(n){case"style":d=Ts(t);break;case"script":d=As(t)}_i.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(d,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(zo(d))||n==="script"&&o.querySelector(Ho(d))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function Cy(t,n){ga.m(t,n);var a=bs;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=As(t)}if(!_i.has(d)&&(t=v({rel:"modulepreload",href:t},n),_i.set(d,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ho(d)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function wy(t,n,a){ga.S(t,n,a);var o=bs;if(o&&t){var c=Pa(o).hoistableStyles,d=Ts(t);n=n||"default";var x=c.get(d);if(!x){var R={loading:0,preload:null};if(x=o.querySelector(zo(d)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(d))&&_d(t,a);var z=x=o.createElement("link");hn(z),Dn(z,"link",t),z._p=new Promise(function($,pe){z.onload=$,z.onerror=pe}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,mu(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:R},c.set(d,x)}}}function Dy(t,n){ga.X(t,n);var a=bs;if(a&&t){var o=Pa(a).hoistableScripts,c=As(t),d=o.get(c);d||(d=a.querySelector(Ho(c)),d||(t=v({src:t,async:!0},n),(n=_i.get(c))&&vd(t,n),d=a.createElement("script"),hn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function Uy(t,n){ga.M(t,n);var a=bs;if(a&&t){var o=Pa(a).hoistableScripts,c=As(t),d=o.get(c);d||(d=a.querySelector(Ho(c)),d||(t=v({src:t,async:!0,type:"module"},n),(n=_i.get(c))&&vd(t,n),d=a.createElement("script"),hn(d),Dn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function J0(t,n,a,o){var c=(c=ie.current)?pu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ts(a.href),a=Pa(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ts(a.href);var d=Pa(c).hoistableStyles,x=d.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=c.querySelector(zo(t)))&&!d._p&&(x.instance=d,x.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),d||Ly(c,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=As(a),a=Pa(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ts(t){return'href="'+Pt(t)+'"'}function zo(t){return'link[rel="stylesheet"]['+t+"]"}function j0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function Ly(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function As(t){return'[src="'+Pt(t)+'"]'}function Ho(t){return"script[async]"+t}function $0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",c),mu(o,a.precedence,t),n.instance=o;case"stylesheet":c=Ts(a.href);var d=t.querySelector(zo(c));if(d)return n.state.loading|=4,n.instance=d,hn(d),d;o=j0(a),(c=_i.get(c))&&_d(o,c),d=(t.ownerDocument||t).createElement("link"),hn(d);var x=d;return x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),Dn(d,"link",o),n.state.loading|=4,mu(d,a.precedence,t),n.instance=d;case"script":return d=As(a.src),(c=t.querySelector(Ho(d)))?(n.instance=c,hn(c),c):(o=a,(c=_i.get(d))&&(o=v({},a),vd(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),hn(c),Dn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mu(o,a.precedence,t));return n.instance}function mu(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,x=0;x<o.length;x++){var R=o[x];if(R.dataset.precedence===n)d=R;else if(d!==c)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function vd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gu=null;function e_(t,n,a){if(gu===null){var o=new Map,c=gu=new Map;c.set(a,o)}else c=gu,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var d=a[c];if(!(d[Na]||d[dn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var R=o.get(x);R?R.push(d):o.set(x,[d])}}return o}function t_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ny(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ts(o.href),d=n.querySelector(zo(c));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=_u.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,hn(d);return}d=n.ownerDocument||n,o=j0(o),(c=_i.get(c))&&_d(o,c),d=d.createElement("link"),hn(d);var x=d;x._p=new Promise(function(R,z){x.onload=R,x.onerror=z}),Dn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=_u.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var xd=0;function Py(t,n){return t.stylesheets&&t.count===0&&xu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&xu(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&xd===0&&(xd=62500*my());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&xu(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>xd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function _u(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var vu=null;function xu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,vu=new Map,n.forEach(Fy,t),vu=null,_u.call(t))}function Fy(t,n){if(!(n.state.loading&4)){var a=vu.get(t);if(a)var o=a.get(null);else{a=new Map,vu.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var x=c[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}c=n.instance,x=c.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,c),a.set(x,c),this.count++,o=_u.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Go={$$typeof:I,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Iy(t,n,a,o,c,d,x,R,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function i_(t,n,a,o,c,d,x,R,z,$,pe,xe){return t=new Iy(t,n,a,x,z,$,pe,xe,R),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=Jc(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},tf(d),t}function a_(t){return t?(t=is,t):is}function r_(t,n,a,o,c,d){c=a_(c),o.context===null?o.context=c:o.pendingContext=c,o=ka(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Xa(t,o,n),a!==null&&(qn(a,t,n),xo(a,t,n))}function s_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Sd(t,n){s_(t,n),(t=t.alternate)&&s_(t,n)}function o_(t){if(t.tag===13||t.tag===31){var n=br(t,67108864);n!==null&&qn(n,t,67108864),Sd(t,67108864)}}function l_(t){if(t.tag===13||t.tag===31){var n=ri();n=eo(n);var a=br(t,n);a!==null&&qn(a,t,n),Sd(t,n)}}var Su=!0;function By(t,n,a,o){var c=B.T;B.T=null;var d=H.p;try{H.p=2,yd(t,n,a,o)}finally{H.p=d,B.T=c}}function zy(t,n,a,o){var c=B.T;B.T=null;var d=H.p;try{H.p=8,yd(t,n,a,o)}finally{H.p=d,B.T=c}}function yd(t,n,a,o){if(Su){var c=Md(o);if(c===null)od(t,n,o,yu,a),c_(t,o);else if(Gy(c,t,n,a,o))o.stopPropagation();else if(c_(t,o),n&4&&-1<Hy.indexOf(t)){for(;c!==null;){var d=$i(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ae(d.pendingLanes);if(x!==0){var R=d;for(R.pendingLanes|=2,R.entangledLanes|=2;x;){var z=1<<31-Be(x);R.entanglements[1]|=z,x&=~z}zi(d),(Dt&6)===0&&(iu=Ht()+500,Po(0))}}break;case 31:case 13:R=br(d,2),R!==null&&qn(R,d,2),ru(),Sd(d,2)}if(d=Md(o),d===null&&od(t,n,o,yu,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else od(t,n,o,null,a)}}function Md(t){return t=Ec(t),Ed(t)}var yu=null;function Ed(t){if(yu=null,t=ji(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yu=t,null}function u_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wt()){case U:return 2;case E:return 8;case J:case ae:return 32;case fe:return 268435456;default:return 32}default:return 32}}var bd=!1,tr=null,nr=null,ir=null,Vo=new Map,ko=new Map,ar=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(t,n){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Vo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,c,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},n!==null&&(n=$i(n),n!==null&&o_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Gy(t,n,a,o,c){switch(n){case"focusin":return tr=Xo(tr,t,n,a,o,c),!0;case"dragenter":return nr=Xo(nr,t,n,a,o,c),!0;case"mouseover":return ir=Xo(ir,t,n,a,o,c),!0;case"pointerover":var d=c.pointerId;return Vo.set(d,Xo(Vo.get(d)||null,t,n,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,ko.set(d,Xo(ko.get(d)||null,t,n,a,o,c)),!0}return!1}function f_(t){var n=ji(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){l_(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){l_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Md(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Mc=o,a.target.dispatchEvent(o),Mc=null}else return n=$i(a),n!==null&&o_(n),t.blockedOn=a,!1;n.shift()}return!0}function d_(t,n,a){Mu(t)&&a.delete(n)}function Vy(){bd=!1,tr!==null&&Mu(tr)&&(tr=null),nr!==null&&Mu(nr)&&(nr=null),ir!==null&&Mu(ir)&&(ir=null),Vo.forEach(d_),ko.forEach(d_)}function Eu(t,n){t.blockedOn===n&&(t.blockedOn=null,bd||(bd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Vy)))}var bu=null;function h_(t){bu!==t&&(bu=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){bu===t&&(bu=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Ed(o||a)===null)continue;break}var d=$i(a);d!==null&&(t.splice(n,3),n-=3,Mf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Rs(t){function n(z){return Eu(z,t)}tr!==null&&Eu(tr,t),nr!==null&&Eu(nr,t),ir!==null&&Eu(ir,t),Vo.forEach(n),ko.forEach(n);for(var a=0;a<ar.length;a++){var o=ar[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&ar.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],x=c[An]||null;if(typeof d=="function")x||h_(a);else if(x){var R=null;if(d&&d.hasAttribute("formAction")){if(c=d,x=d[An]||null)R=x.formAction;else if(Ed(c)!==null)continue}else R=x.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),h_(a)}}}function p_(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Td(t){this._internalRoot=t}Tu.prototype.render=Td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ri();r_(a,o,t,n,null,null)},Tu.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r_(t.current,2,null,t,null,null),ru(),n[Hn]=null}};function Tu(t){this._internalRoot=t}Tu.prototype.unstable_scheduleHydration=function(t){if(t){var n=no();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,t),a===0&&f_(t)}};var m_=e.version;if(m_!=="19.2.3")throw Error(r(527,m_,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Au.isDisabled&&Au.supportsFiber)try{ce=Au.inject(ky),de=Au}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",c=Mg,d=Eg,x=bg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=i_(t,1,!1,null,null,a,o,null,c,d,x,p_),t[Hn]=n.current,sd(t),new Td(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,c="",d=Mg,x=Eg,R=bg,z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=i_(t,1,!0,n,a??null,o,c,z,d,x,R,p_),n.context=a_(null),a=n.current,o=ri(),o=eo(o),c=ka(o),c.callback=null,Xa(a,c,o),a=o,n.current.lanes=a,Ve(n,a),zi(n),t[Hn]=n.current,sd(t),new Tu(n)},qo.version="19.2.3",qo}var T_;function $y(){if(T_)return Cd.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Cd.exports=jy(),Cd.exports}var eM=$y();var up=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,zv=/^[\\/]{2}/;function tM(s,e){return e+s.replace(/\\/g,"/")}var A_="popstate";function R_(s){return typeof s=="object"&&s!=null&&"pathname"in s&&"search"in s&&"hash"in s&&"state"in s&&"key"in s}function nM(s={}){function e(r,l){let u=l.state?.masked,{pathname:f,search:h,hash:m}=u||r.location;return gh("",{pathname:f,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default",u?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,l){return typeof l=="string"?l:al(l)}return aM(e,i,null,s)}function yn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Zi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function iM(){return Math.random().toString(36).substring(2,10)}function C_(s,e){return{usr:s.state,key:s.key,idx:e,masked:s.mask?{pathname:s.pathname,search:s.search,hash:s.hash}:void 0}}function gh(s,e,i=null,r,l){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?ul(e):e,state:i,key:e&&e.key||r||iM(),mask:l}}function al({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ul(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function aM(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),y=S==null?null:S-p;p=S,m&&m({action:h,location:C.location,delta:y})}function _(S,y){h="PUSH";let F=R_(S)?S:gh(C.location,S,y);p=g()+1;let I=C_(F,p),w=C.createHref(F.mask||F);try{f.pushState(I,"",w)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(w)}u&&m&&m({action:h,location:C.location,delta:1})}function M(S,y){h="REPLACE";let F=R_(S)?S:gh(C.location,S,y);p=g();let I=C_(F,p),w=C.createHref(F.mask||F);f.replaceState(I,"",w),u&&m&&m({action:h,location:C.location,delta:0})}function T(S){return rM(l,S)}let C={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(A_,v),m=S,()=>{l.removeEventListener(A_,v),m=null}},createHref(S){return e(l,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:M,go(S){return f.go(S)}};return C}function rM(s,e,i=!1){let r="http://localhost";s&&(r=s.location.origin!=="null"?s.location.origin:s.location.href),yn(r,"No window.location.(origin|href) available to create URL");let l=typeof e=="string"?e:al(e);return l=l.replace(/ $/,"%20"),!i&&zv.test(l)&&(l=r+l),new URL(l,r)}function Hv(s,e,i="/"){return sM(s,e,i,!1)}function sM(s,e,i,r,l){let u=typeof e=="string"?ul(e):e,f=Ra(u.pathname||"/",i);if(f==null)return null;let h=oM(s),m=null,p=vM(f);for(let g=0;m==null&&g<h.length;++g)m=_M(h[g],p,r);return m}function oM(s){let e=Gv(s);return lM(e),e}function Gv(s,e=[],i=[],r="",l=!1){let u=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;yn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=Ni([r,g.relativePath]),_=i.concat(g);f.children&&f.children.length>0&&(yn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Gv(f.children,e,_,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:mM(v,f.index),routesMeta:_.map((M,T)=>{let[C,S]=Xv(M.relativePath,M.caseSensitive,T===_.length-1);return{...M,matcher:C,compiledParams:S}})})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))u(f,h);else for(let m of Vv(f.path))u(f,h,!0,m)}),e}function Vv(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Vv(r.join("/")),h=[];return h.push(...f.map(m=>m===""?u:[u,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function lM(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:gM(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var uM=/^:[\w-]+$/,cM=3,fM=2,dM=1,hM=10,pM=-2,w_=s=>s==="*";function mM(s,e){let i=s.split("/"),r=i.length;return i.some(w_)&&(r+=pM),e&&(r+=fM),i.filter(l=>!w_(l)).reduce((l,u)=>l+(uM.test(u)?cM:u===""?dM:hM),r)}function gM(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function _M(s,e,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",v={path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_=m.matcher&&m.compiledParams?kv(v,g,m.matcher,m.compiledParams):rc(v,g),M=m.route;if(!_&&p&&i&&!r[r.length-1].route.index&&(_=rc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(l,_.params),f.push({params:l,pathname:Ni([u,_.pathname]),pathnameBase:yM(Ni([u,_.pathnameBase])),route:M}),_.pathnameBase!=="/"&&(u=Ni([u,_.pathnameBase]))}return f}function rc(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=Xv(s.path,s.caseSensitive,s.end);return kv(s,e,i,r)}function kv(s,e,i,r){let l=e.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},_)=>{if(g==="*"){let T=h[_]||"";f=u.slice(0,u.length-T.length).replace(/(.)\/+$/,"$1")}const M=h[_];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:u,pathnameBase:f,pattern:s}}function Xv(s,e=!1,i=!0){Zi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m,p,g)=>{if(r.push({paramName:h,isOptional:m!=null}),m){let v=g.charAt(p+f.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function vM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ra(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function xM(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?ul(s):s,u;return i?(i=qv(i),i.startsWith("/")?u=D_(i.substring(1),"/"):u=D_(i,e)):u=e,{pathname:u,search:MM(r),hash:EM(l)}}function D_(s,e){let i=sc(e).split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ld(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function SM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Wv(s){let e=SM(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function cp(s,e,i,r=!1){let l;typeof s=="string"?l=ul(s):(l={...s},yn(!l.pathname||!l.pathname.includes("?"),Ld("?","pathname","search",l)),yn(!l.pathname||!l.pathname.includes("#"),Ld("#","pathname","hash",l)),yn(!l.search||!l.search.includes("#"),Ld("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}h=v>=0?e[v]:"/"}let m=xM(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var qv=s=>s.replace(/[\\/]{2,}/g,"/"),Ni=s=>qv(s.join("/")),sc=s=>s.replace(/\/+$/,""),yM=s=>sc(s).replace(/^\/*/,"/"),MM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,EM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s,bM=class{constructor(s,e,i,r=!1){this.status=s,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function TM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}function AM(s){let e=s.map(i=>i.route.path).filter(Boolean);return Ni(e)||"/"}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Zv(s,e){let i=s;if(typeof i!="string"||!up.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,l=!1;if(Yv)try{let u=new URL(window.location.href),f=zv.test(i)?new URL(tM(i,u.protocol)):new URL(i),h=Ra(f.pathname,e);f.origin===u.origin&&h!=null?i=h+f.search+f.hash:l=!0}catch{Zi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Kv=["POST","PUT","PATCH","DELETE"];new Set(Kv);var RM=["GET",...Kv];new Set(RM);var CM=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function wM(s){try{return CM.includes(new URL(s).protocol)}catch{return!1}}var Js=ue.createContext(null);Js.displayName="DataRouter";var pc=ue.createContext(null);pc.displayName="DataRouterState";var Qv=ue.createContext(!1);function DM(){return ue.useContext(Qv)}var Jv=ue.createContext({isTransitioning:!1});Jv.displayName="ViewTransition";var UM=ue.createContext(new Map);UM.displayName="Fetchers";var LM=ue.createContext(null);LM.displayName="Await";var yi=ue.createContext(null);yi.displayName="Navigation";var mc=ue.createContext(null);mc.displayName="Location";var Da=ue.createContext({outlet:null,matches:[],isDataRoute:!1});Da.displayName="Route";var fp=ue.createContext(null);fp.displayName="RouteError";var jv="REACT_ROUTER_ERROR",NM="REDIRECT",OM="ROUTE_ERROR_RESPONSE";function PM(s){if(s.startsWith(`${jv}:${NM}:{`))try{let e=JSON.parse(s.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function FM(s){if(s.startsWith(`${jv}:${OM}:{`))try{let e=JSON.parse(s.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new bM(e.status,e.statusText,e.data)}catch{}}function IM(s,{relative:e}={}){yn(cl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ue.useContext(yi),{hash:l,pathname:u,search:f}=fl(s,{relative:e}),h=u;return i!=="/"&&(h=u==="/"?i:Ni([i,u])),r.createHref({pathname:h,search:f,hash:l})}function cl(){return ue.useContext(mc)!=null}function Ua(){return yn(cl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(mc).location}var $v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ex(s){ue.useContext(yi).static||ue.useLayoutEffect(s)}function BM(){let{isDataRoute:s}=ue.useContext(Da);return s?JM():zM()}function zM(){yn(cl(),"useNavigate() may be used only in the context of a <Router> component.");let s=ue.useContext(Js),{basename:e,navigator:i}=ue.useContext(yi),{matches:r}=ue.useContext(Da),{pathname:l}=Ua(),u=JSON.stringify(Wv(r)),f=ue.useRef(!1);return ex(()=>{f.current=!0}),ue.useCallback((m,p={})=>{if(Zi(f.current,$v),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=cp(m,JSON.parse(u),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Ni([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,u,l,s])}ue.createContext(null);function fl(s,{relative:e}={}){let{matches:i}=ue.useContext(Da),{pathname:r}=Ua(),l=JSON.stringify(Wv(i));return ue.useMemo(()=>cp(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function HM(s,e,i){yn(cl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=ue.useContext(yi),{matches:l}=ue.useContext(Da),u=l[l.length-1],f=u?u.params:{},h=u?u.pathname:"/",m=u?u.pathnameBase:"/",p=u&&u.route;{let S=p&&p.path||"";nx(h,!p||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=Ua(),v;v=g;let _=v.pathname||"/",M=_;if(m!=="/"){let S=m.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=i&&i.state.matches.length?i.state.matches.map(S=>Object.assign(S,{route:i.manifest[S.route.id]||S.route})):Hv(s,{pathname:M});return Zi(p||T!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Zi(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),WM(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},f,S.params),pathname:Ni([m,r.encodeLocation?r.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?m:Ni([m,r.encodeLocation?r.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),l,i)}function GM(){let s=QM(),e=TM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:u},"ErrorBoundary")," or"," ",ue.createElement("code",{style:u},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),i?ue.createElement("pre",{style:l},i):null,f)}var VM=ue.createElement(GM,null),tx=class extends ue.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){let s=this.state.error;if(this.context&&typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){const i=FM(s.digest);i&&(s=i)}let e=s!==void 0?ue.createElement(Da.Provider,{value:this.props.routeContext},ue.createElement(fp.Provider,{value:s,children:this.props.component})):this.props.children;return this.context?ue.createElement(kM,{error:s},e):e}};tx.contextType=Qv;var Nd=new WeakMap;function kM({children:s,error:e}){let{basename:i}=ue.useContext(yi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=PM(e.digest);if(r){let l=Nd.get(e);if(l)throw l;let u=Zv(r.location,i),f=u.absoluteURL||u.to;if(wM(f))throw new Error("Invalid redirect location");if(Yv&&!Nd.get(e))if(u.isExternal||r.reloadDocument)window.location.href=f;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Nd.set(e,h),h}return ue.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return s}function XM({routeContext:s,match:e,children:i}){let r=ue.useContext(Js);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(Da.Provider,{value:s},i)}function WM(s,e=[],i){let r=i?.state;if(s==null){if(!r)return null;if(r.errors)s=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let l=s,u=r?.errors;if(u!=null){let g=l.findIndex(v=>v.route.id&&u?.[v.route.id]!==void 0);yn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,g+1))}let f=!1,h=-1;if(i&&r){f=r.renderFallback;for(let g=0;g<l.length;g++){let v=l[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=g),v.route.id){let{loaderData:_,errors:M}=r,T=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!M||M[v.route.id]===void 0);if(v.route.lazy||T){i.isStatic&&(f=!0),h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}}let m=i?.onError,p=r&&m?(g,v)=>{m(g,{location:r.location,params:r.matches?.[0]?.params??{},pattern:AM(r.matches),errorInfo:v})}:void 0;return l.reduceRight((g,v,_)=>{let M,T=!1,C=null,S=null;r&&(M=u&&v.route.id?u[v.route.id]:void 0,C=v.route.errorElement||VM,f&&(h<0&&_===0?(nx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,S=null):h===_&&(T=!0,S=v.route.hydrateFallbackElement||null)));let y=e.concat(l.slice(0,_+1)),F=()=>{let I;return M?I=C:T?I=S:v.route.Component?I=ue.createElement(v.route.Component,null):v.route.element?I=v.route.element:I=g,ue.createElement(XM,{match:v,routeContext:{outlet:g,matches:y,isDataRoute:r!=null},children:I})};return r&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?ue.createElement(tx,{location:r.location,revalidation:r.revalidation,component:C,error:M,children:F(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):F()},null)}function dp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qM(s){let e=ue.useContext(Js);return yn(e,dp(s)),e}function YM(s){let e=ue.useContext(pc);return yn(e,dp(s)),e}function ZM(s){let e=ue.useContext(Da);return yn(e,dp(s)),e}function hp(s){let e=ZM(s),i=e.matches[e.matches.length-1];return yn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function KM(){return hp("useRouteId")}function QM(){let s=ue.useContext(fp),e=YM("useRouteError"),i=hp("useRouteError");return s!==void 0?s:e.errors?.[i]}function JM(){let{router:s}=qM("useNavigate"),e=hp("useNavigate"),i=ue.useRef(!1);return ex(()=>{i.current=!0}),ue.useCallback(async(l,u={})=>{Zi(i.current,$v),i.current&&(typeof l=="number"?await s.navigate(l):await s.navigate(l,{fromRouteId:e,...u}))},[s,e])}var U_={};function nx(s,e,i){!e&&!U_[s]&&(U_[s]=!0,Zi(!1,i))}ue.memo(jM);function jM({routes:s,manifest:e,future:i,state:r,isStatic:l,onError:u}){return HM(s,void 0,{manifest:e,state:r,isStatic:l,onError:u})}function $M({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:u=!1,useTransitions:f}){yn(!cl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=s.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:h,navigator:l,static:u,useTransitions:f,future:{}}),[h,l,u,f]);typeof i=="string"&&(i=ul(i));let{pathname:p="/",search:g="",hash:v="",state:_=null,key:M="default",mask:T}=i,C=ue.useMemo(()=>{let S=Ra(p,h);return S==null?null:{location:{pathname:S,search:g,hash:v,state:_,key:M,mask:T},navigationType:r}},[h,p,g,v,_,M,r,T]);return Zi(C!=null,`<Router basename="${h}"> is not able to match the URL "${p}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:ue.createElement(yi.Provider,{value:m},ue.createElement(mc.Provider,{children:e,value:C}))}var Ju="get",ju="application/x-www-form-urlencoded";function gc(s){return typeof HTMLElement<"u"&&s instanceof HTMLElement}function eE(s){return gc(s)&&s.tagName.toLowerCase()==="button"}function tE(s){return gc(s)&&s.tagName.toLowerCase()==="form"}function nE(s){return gc(s)&&s.tagName.toLowerCase()==="input"}function iE(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function aE(s,e){return s.button===0&&(!e||e==="_self")&&!iE(s)}var Ru=null;function rE(){if(Ru===null)try{new FormData(document.createElement("form"),0),Ru=!1}catch{Ru=!0}return Ru}var sE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Od(s){return s!=null&&!sE.has(s)?(Zi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):s}function oE(s,e){let i,r,l,u,f;if(tE(s)){let h=s.getAttribute("action");r=h?Ra(h,e):null,i=s.getAttribute("method")||Ju,l=Od(s.getAttribute("enctype"))||ju,u=new FormData(s)}else if(eE(s)||nE(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?Ra(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Ju,l=Od(s.getAttribute("formenctype"))||Od(h.getAttribute("enctype"))||ju,u=new FormData(h,s),!rE()){let{name:p,type:g,value:v}=s;if(g==="image"){let _=p?`${p}.`:"";u.append(`${_}x`,"0"),u.append(`${_}y`,"0")}else p&&u.append(p,v)}}else{if(gc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ju,r=null,l=ju,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function pp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function ix(s,e,i,r){let l=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${r}`:l.pathname=`${l.pathname}.${r}`:l.pathname==="/"?l.pathname=`_root.${r}`:e&&Ra(l.pathname,e)==="/"?l.pathname=`${sc(e)}/_root.${r}`:l.pathname=`${sc(l.pathname)}.${r}`,l}async function lE(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function uE(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function cE(s,e,i){let r=await Promise.all(s.map(async l=>{let u=e.routes[l.route.id];if(u){let f=await lE(u,i);return f.links?f.links():[]}return[]}));return pE(r.flat(1).filter(uE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function L_(s,e,i,r,l,u){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return u==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):u==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function fE(s,e,{includeHydrateFallback:i}={}){return dE(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function dE(s){return[...new Set(s)]}function hE(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function pE(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let u=JSON.stringify(hE(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}function mp(){let s=ue.useContext(Js);return pp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function mE(){let s=ue.useContext(pc);return pp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var gp=ue.createContext(void 0);gp.displayName="FrameworkContext";function _c(){let s=ue.useContext(gp);return pp(s,"You must render this element inside a <HydratedRouter> element"),s}function gE(s,e){let i=ue.useContext(gp),[r,l]=ue.useState(!1),[u,f]=ue.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,_=ue.useRef(null);ue.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let C=y=>{y.forEach(F=>{f(F.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return _.current&&S.observe(_.current),()=>{S.disconnect()}}},[s]),ue.useEffect(()=>{if(r){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[r]);let M=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,_,{}]:[u,_,{onFocus:Yo(h,M),onBlur:Yo(m,T),onMouseEnter:Yo(p,M),onMouseLeave:Yo(g,T),onTouchStart:Yo(v,M)}]:[!1,_,{}]}function Yo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function _E({page:s,...e}){let i=DM(),{nonce:r}=_c(),{router:l}=mp(),u=ue.useMemo(()=>Hv(l.routes,s,l.basename),[l.routes,s,l.basename]);return u?(e.nonce==null&&r&&(e={...e,nonce:r}),i?ue.createElement(xE,{page:s,matches:u,...e}):ue.createElement(SE,{page:s,matches:u,...e})):null}function vE(s){let{manifest:e,routeModules:i}=_c(),[r,l]=ue.useState([]);return ue.useEffect(()=>{let u=!1;return cE(s,e,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,e,i]),r}function xE({page:s,matches:e,...i}){let r=Ua(),{future:l}=_c(),{basename:u}=mp(),f=ue.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let h=ix(s,u,l.v8_trailingSlashAwareDataRequests,"rsc"),m=!1,p=[];for(let g of e)typeof g.route.shouldRevalidate=="function"?m=!0:p.push(g.route.id);return m&&p.length>0&&h.searchParams.set("_routes",p.join(",")),[h.pathname+h.search]},[u,l.v8_trailingSlashAwareDataRequests,s,r,e]);return ue.createElement(ue.Fragment,null,f.map(h=>ue.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function SE({page:s,matches:e,...i}){let r=Ua(),{future:l,manifest:u,routeModules:f}=_c(),{basename:h}=mp(),{loaderData:m,matches:p}=mE(),g=ue.useMemo(()=>L_(s,e,p,u,r,"data"),[s,e,p,u,r]),v=ue.useMemo(()=>L_(s,e,p,u,r,"assets"),[s,e,p,u,r]),_=ue.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let C=new Set,S=!1;if(e.forEach(F=>{let I=u.routes[F.route.id];!I||!I.hasLoader||(!g.some(w=>w.route.id===F.route.id)&&F.route.id in m&&f[F.route.id]?.shouldRevalidate||I.hasClientLoader?S=!0:C.add(F.route.id))}),C.size===0)return[];let y=ix(s,h,l.v8_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&y.searchParams.set("_routes",e.filter(F=>C.has(F.route.id)).map(F=>F.route.id).join(",")),[y.pathname+y.search]},[h,l.v8_trailingSlashAwareDataRequests,m,r,u,g,e,s,f]),M=ue.useMemo(()=>fE(v,u),[v,u]),T=vE(v);return ue.createElement(ue.Fragment,null,_.map(C=>ue.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),M.map(C=>ue.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:S})=>ue.createElement("link",{key:C,nonce:i.nonce,...S,crossOrigin:S.crossOrigin??i.crossOrigin})))}function yE(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var ME=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ME&&(window.__reactRouterVersion="7.18.1")}catch{}function EE({basename:s,children:e,useTransitions:i,window:r}){let l=ue.useRef();l.current==null&&(l.current=nM({window:r,v5Compat:!0}));let u=l.current,[f,h]=ue.useState({action:u.action,location:u.location}),m=ue.useCallback(p=>{i===!1?h(p):ue.startTransition(()=>h(p))},[i]);return ue.useLayoutEffect(()=>u.listen(m),[u,m]),ue.createElement($M,{basename:s,children:e,location:f.location,navigationType:f.action,navigator:u,useTransitions:i})}var ax=ue.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,mask:h,state:m,target:p,to:g,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:M,...T},C){let{basename:S,navigator:y,useTransitions:F}=ue.useContext(yi),I=typeof g=="string"&&up.test(g),w=Zv(g,S);g=w.to;let P=IM(g,{relative:l}),O=Ua(),D=null;if(h){let Y=cp(h,[],O.mask?O.mask.pathname:"/",!0);S!=="/"&&(Y.pathname=Y.pathname==="/"?S:Ni([S,Y.pathname])),D=y.createHref(Y)}let[b,L,q]=gE(r,T),G=RE(g,{replace:f,mask:h,state:m,target:p,preventScrollReset:v,relative:l,viewTransition:_,defaultShouldRevalidate:M,useTransitions:F});function Z(Y){e&&e(Y),Y.defaultPrevented||G(Y)}let he=!(w.isExternal||u),ge=ue.createElement("a",{...T,...q,href:(he?D:void 0)||w.absoluteURL||P,onClick:he?Z:e,ref:yE(C,L),target:p,"data-discover":!I&&i==="render"?"true":void 0});return b&&!I?ue.createElement(ue.Fragment,null,ge,ue.createElement(_E,{page:P})):ge});ax.displayName="Link";var bE=ue.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:h,children:m,...p},g){let v=fl(f,{relative:p.relative}),_=Ua(),M=ue.useContext(pc),{navigator:T,basename:C}=ue.useContext(yi),S=M!=null&&LE(v)&&h===!0,y=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,F=_.pathname,I=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(F=F.toLowerCase(),I=I?I.toLowerCase():null,y=y.toLowerCase()),I&&C&&(I=Ra(I,C)||I);const w=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let P=F===y||!l&&F.startsWith(y)&&F.charAt(w)==="/",O=I!=null&&(I===y||!l&&I.startsWith(y)&&I.charAt(y.length)==="/"),D={isActive:P,isPending:O,isTransitioning:S},b=P?e:void 0,L;typeof r=="function"?L=r(D):L=[r,P?"active":null,O?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let q=typeof u=="function"?u(D):u;return ue.createElement(ax,{...p,"aria-current":b,className:L,ref:g,style:q,to:f,viewTransition:h},typeof m=="function"?m(D):m)});bE.displayName="NavLink";var TE=ue.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Ju,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_,...M},T)=>{let{useTransitions:C}=ue.useContext(yi),S=DE(),y=UE(h,{relative:p}),F=f.toLowerCase()==="get"?"get":"post",I=typeof h=="string"&&up.test(h),w=P=>{if(m&&m(P),P.defaultPrevented)return;P.preventDefault();let O=P.nativeEvent.submitter,D=O?.getAttribute("formmethod")||f,b=()=>S(O||P.currentTarget,{fetcherKey:e,method:D,navigate:i,replace:l,state:u,relative:p,preventScrollReset:g,viewTransition:v,defaultShouldRevalidate:_});C&&i!==!1?ue.startTransition(()=>b()):b()};return ue.createElement("form",{ref:T,method:F,action:y,onSubmit:r?m:w,...M,"data-discover":!I&&s==="render"?"true":void 0})});TE.displayName="Form";function AE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(s){let e=ue.useContext(Js);return yn(e,AE(s)),e}function RE(s,{target:e,replace:i,mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,defaultShouldRevalidate:m,useTransitions:p}={}){let g=BM(),v=Ua(),_=fl(s,{relative:f});return ue.useCallback(M=>{if(aE(M,e)){M.preventDefault();let T=i!==void 0?i:al(v)===al(_),C=()=>g(s,{replace:T,mask:r,state:l,preventScrollReset:u,relative:f,viewTransition:h,defaultShouldRevalidate:m});p?ue.startTransition(()=>C()):C()}},[v,g,_,i,r,l,e,s,u,f,h,m,p])}var CE=0,wE=()=>`__${String(++CE)}__`;function DE(){let{router:s}=rx("useSubmit"),{basename:e}=ue.useContext(yi),i=KM(),r=s.fetch,l=s.navigate;return ue.useCallback(async(u,f={})=>{let{action:h,method:m,encType:p,formData:g,body:v}=oE(u,e);if(f.navigate===!1){let _=f.fetcherKey||wE();await r(_,i,f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||h,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:v,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,l,e,i])}function UE(s,{relative:e}={}){let{basename:i}=ue.useContext(yi),r=ue.useContext(Da);yn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...fl(s||".",{relative:e})},f=Ua();if(s==null){u.search=f.search;let h=new URLSearchParams(u.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Ni([i,u.pathname])),al(u)}function LE(s,{relative:e}={}){let i=ue.useContext(Jv);yn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=rx("useViewTransitionState"),l=fl(s,{relative:e});if(!i.isTransitioning)return!1;let u=Ra(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=Ra(i.nextLocation.pathname,r)||i.nextLocation.pathname;return rc(l.pathname,f)!=null||rc(l.pathname,u)!=null}const _p="185",NE=0,N_=1,OE=2,$u=1,PE=2,tl=3,gr=0,Zn=1,Ma=2,ba=0,Xs=1,O_=2,P_=3,F_=4,FE=5,Vr=100,IE=101,BE=102,zE=103,HE=104,GE=200,VE=201,kE=202,XE=203,_h=204,vh=205,WE=206,qE=207,YE=208,ZE=209,KE=210,QE=211,JE=212,jE=213,$E=214,xh=0,Sh=1,yh=2,Ys=3,Mh=4,Eh=5,bh=6,Th=7,sx=0,eb=1,tb=2,Wi=0,ox=1,lx=2,ux=3,cx=4,fx=5,dx=6,hx=7,px=300,qr=301,Zs=302,Pd=303,Fd=304,vc=306,Ah=1e3,Ea=1001,Rh=1002,Un=1003,nb=1004,Cu=1005,Ln=1006,Id=1007,hr=1008,Si=1009,mx=1010,gx=1011,rl=1012,vp=1013,Ki=1014,ki=1015,Ca=1016,xp=1017,Sp=1018,sl=1020,_x=35902,vx=35899,xx=1021,Sx=1022,Li=1023,wa=1026,Xr=1027,yx=1028,yp=1029,Yr=1030,Mp=1031,Ep=1033,ec=33776,tc=33777,nc=33778,ic=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Lh=36196,Nh=37492,Oh=37496,Ph=37488,Fh=37489,oc=37490,Ih=37491,Bh=37808,zh=37809,Hh=37810,Gh=37811,Vh=37812,kh=37813,Xh=37814,Wh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,jh=36492,$h=36494,ep=36495,tp=36283,np=36284,lc=36285,ip=36286,ib=3200,I_=0,ab=1,dr="",li="srgb",uc="srgb-linear",cc="linear",zt="srgb",Cs=7680,B_=519,rb=512,sb=513,ob=514,bp=515,lb=516,ub=517,Tp=518,cb=519,z_=35044,H_="300 es",Xi=2e3,fc=2001;function fb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function db(){const s=ol("canvas");return s.style.display="block",s}const G_={};function V_(...s){const e="THREE."+s.shift();console.log(e,...s)}function Mx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=s[1];i&&i.isStackTrace?s[0]+=" "+i.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=Mx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...s)}}function bt(...s){s=Mx(s);const e="THREE."+s.shift();{const i=s[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...s)}}function Ws(...s){const e=s.join(" ");e in G_||(G_[e]=!0,it(...s))}function hb(s,e,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const pb={[xh]:Sh,[yh]:bh,[Mh]:Th,[Ys]:Eh,[Sh]:xh,[bh]:yh,[Th]:Mh,[Eh]:Ys};class Kr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,ap=180/Math.PI;function dl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Et(s,e,i){return Math.max(e,Math.min(i,s))}function mb(s,e){return(s%e+e)%e}function zd(s,e,i){return(1-i)*s+i*e}function Zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Np=class Np{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*l+e.x,this.y=u*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Np.prototype.isVector2=!0;let Ct=Np;class js{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3],_=u[f+0],M=u[f+1],T=u[f+2],C=u[f+3];if(v!==C||m!==_||p!==M||g!==T){let S=m*_+p*M+g*T+v*C;S<0&&(_=-_,M=-M,T=-T,C=-C,S=-S);let y=1-h;if(S<.9995){const F=Math.acos(S),I=Math.sin(F);y=Math.sin(y*F)/I,h=Math.sin(h*F)/I,m=m*y+_*h,p=p*y+M*h,g=g*y+T*h,v=v*y+C*h}else{m=m*y+_*h,p=p*y+M*h,g=g*y+T*h,v=v*y+C*h;const F=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=F,p*=F,g*=F,v*=F}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,u,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=u[f],_=u[f+1],M=u[f+2],T=u[f+3];return e[i]=h*T+g*v+m*M-p*_,e[i+1]=m*T+g*_+p*v-h*M,e[i+2]=p*T+g*M+h*_-m*v,e[i+3]=g*T-h*v-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(u/2),_=m(r/2),M=m(l/2),T=m(u/2);switch(f){case"XYZ":this._x=_*g*v+p*M*T,this._y=p*M*v-_*g*T,this._z=p*g*T+_*M*v,this._w=p*g*v-_*M*T;break;case"YXZ":this._x=_*g*v+p*M*T,this._y=p*M*v-_*g*T,this._z=p*g*T-_*M*v,this._w=p*g*v+_*M*T;break;case"ZXY":this._x=_*g*v-p*M*T,this._y=p*M*v+_*g*T,this._z=p*g*T+_*M*v,this._w=p*g*v-_*M*T;break;case"ZYX":this._x=_*g*v-p*M*T,this._y=p*M*v+_*g*T,this._z=p*g*T-_*M*v,this._w=p*g*v+_*M*T;break;case"YZX":this._x=_*g*v+p*M*T,this._y=p*M*v+_*g*T,this._z=p*g*T-_*M*v,this._w=p*g*v-_*M*T;break;case"XZY":this._x=_*g*v-p*M*T,this._y=p*M*v-_*g*T,this._z=p*g*T+_*M*v,this._w=p*g*v+_*M*T;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],_=r+h+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(f-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(u+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(u-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(f-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-u*m,this._y=l*g+f*m+u*h-r*p,this._z=u*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,u=e._z,f=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Op=class Op{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(k_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-u*l),v=2*(u*r-f*i);return this.x=i+m*p+f*v-h*g,this.y=r+m*g+h*p-u*v,this.z=l+m*v+u*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Op.prototype.isVector3=!0;let oe=Op;const Hd=new oe,k_=new js,Pp=class Pp{constructor(e,i,r,l,u,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p)}set(e,i,r,l,u,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],_=r[2],M=r[5],T=r[8],C=l[0],S=l[3],y=l[6],F=l[1],I=l[4],w=l[7],P=l[2],O=l[5],D=l[8];return u[0]=f*C+h*F+m*P,u[3]=f*S+h*I+m*O,u[6]=f*y+h*w+m*D,u[1]=p*C+g*F+v*P,u[4]=p*S+g*I+v*O,u[7]=p*y+g*w+v*D,u[2]=_*C+M*F+T*P,u[5]=_*S+M*I+T*O,u[8]=_*y+M*w+T*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*u*g+r*h*m+l*u*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,_=h*m-g*u,M=p*u-f*m,T=i*v+r*_+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*p-g*r)*C,e[2]=(h*r-l*f)*C,e[3]=_*C,e[4]=(g*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(f*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,f,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(e,i)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-e)),this}translate(e,i){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pp.prototype.isMatrix3=!0;let st=Pp;const Gd=new st,X_=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),W_=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gb(){const s={enabled:!0,workingColorSpace:uc,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===zt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=qs(l.r),l.g=qs(l.g),l.b=qs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===dr?cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[uc]:{primaries:e,whitePoint:r,transfer:cc,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:X_,fromXYZ:W_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),s}const Mt=gb();function Ta(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class _b{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=ol("canvas")),ws.width=e.width,ws.height=e.height;const l=ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ol("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Ta(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ta(i[r]/255)*255):i[r]=Ta(i[r]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vb=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?u.push(Vd(l[f].image)):u.push(Vd(l[f]))}else u=Vd(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Vd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_b.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let xb=0;const kd=new oe;class In extends Kr{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ea,l=Ea,u=Ln,f=hr,h=Li,m=Si,p=In.DEFAULT_ANISOTROPY,g=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=dl(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kd).x}get height(){return this.source.getSize(kd).y}get depth(){return this.source.getSize(kd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ah:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case Rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ah:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case Rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=px;In.DEFAULT_ANISOTROPY=1;const Fp=class Fp{constructor(e=0,i=0,r=0,l=1){this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],v=m[8],_=m[1],M=m[5],T=m[9],C=m[2],S=m[6],y=m[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,w=(M+1)/2,P=(y+1)/2,O=(g+_)/4,D=(v+C)/4,b=(T+S)/4;return I>w&&I>P?I<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(I),l=O/r,u=D/r):w>P?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=O/l,u=b/l):P<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),r=D/u,l=b/u),this.set(r,l,u,i),this}let F=Math.sqrt((S-T)*(S-T)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(F)<.001&&(F=1),this.x=(S-T)/F,this.y=(v-C)/F,this.z=(_-g)/F,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Et(this.x,e.x,i.x),this.y=Et(this.y,e.y,i.y),this.z=Et(this.z,e.z,i.z),this.w=Et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Et(this.x,e,i),this.y=Et(this.y,e,i),this.z=Et(this.z,e,i),this.w=Et(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fp.prototype.isVector4=!0;let on=Fp;class Sb extends Kr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},u=new In(l),f=r.count;for(let h=0;h<f;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ap(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Sb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ex extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yb extends In{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hc=class hc{constructor(e,i,r,l,u,f,h,m,p,g,v,_,M,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,f,h,m,p,g,v,_,M,T,C,S)}set(e,i,r,l,u,f,h,m,p,g,v,_,M,T,C,S){const y=this.elements;return y[0]=e,y[4]=i,y[8]=r,y[12]=l,y[1]=u,y[5]=f,y[9]=h,y[13]=m,y[2]=p,y[6]=g,y[10]=v,y[14]=_,y[3]=M,y[7]=T,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hc().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),u=1/Ds.setFromMatrixColumn(e,1).length(),f=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const _=f*g,M=f*v,T=h*g,C=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+T*p,i[5]=_-C*p,i[9]=-h*m,i[2]=C-_*p,i[6]=T+M*p,i[10]=f*m}else if(e.order==="YXZ"){const _=m*g,M=m*v,T=p*g,C=p*v;i[0]=_+C*h,i[4]=T*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=M*h-T,i[6]=C+_*h,i[10]=f*m}else if(e.order==="ZXY"){const _=m*g,M=m*v,T=p*g,C=p*v;i[0]=_-C*h,i[4]=-f*v,i[8]=T+M*h,i[1]=M+T*h,i[5]=f*g,i[9]=C-_*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const _=f*g,M=f*v,T=h*g,C=h*v;i[0]=m*g,i[4]=T*p-M,i[8]=_*p+C,i[1]=m*v,i[5]=C*p+_,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const _=f*m,M=f*p,T=h*m,C=h*p;i[0]=m*g,i[4]=C-_*v,i[8]=T*v+M,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+T,i[10]=_-C*v}else if(e.order==="XZY"){const _=f*m,M=f*p,T=h*m,C=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=_*v+C,i[5]=f*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=h*g,i[10]=C*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mb,e,Eb)}lookAt(e,i,r){const l=this.elements;return si.subVectors(e,i),si.lengthSq()===0&&(si.z=1),si.normalize(),sr.crossVectors(r,si),sr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),sr.crossVectors(r,si)),sr.normalize(),wu.crossVectors(si,sr),l[0]=sr.x,l[4]=wu.x,l[8]=si.x,l[1]=sr.y,l[5]=wu.y,l[9]=si.y,l[2]=sr.z,l[6]=wu.z,l[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],_=r[9],M=r[13],T=r[2],C=r[6],S=r[10],y=r[14],F=r[3],I=r[7],w=r[11],P=r[15],O=l[0],D=l[4],b=l[8],L=l[12],q=l[1],G=l[5],Z=l[9],he=l[13],ge=l[2],Y=l[6],B=l[10],H=l[14],ee=l[3],_e=l[7],be=l[11],N=l[15];return u[0]=f*O+h*q+m*ge+p*ee,u[4]=f*D+h*G+m*Y+p*_e,u[8]=f*b+h*Z+m*B+p*be,u[12]=f*L+h*he+m*H+p*N,u[1]=g*O+v*q+_*ge+M*ee,u[5]=g*D+v*G+_*Y+M*_e,u[9]=g*b+v*Z+_*B+M*be,u[13]=g*L+v*he+_*H+M*N,u[2]=T*O+C*q+S*ge+y*ee,u[6]=T*D+C*G+S*Y+y*_e,u[10]=T*b+C*Z+S*B+y*be,u[14]=T*L+C*he+S*H+y*N,u[3]=F*O+I*q+w*ge+P*ee,u[7]=F*D+I*G+w*Y+P*_e,u[11]=F*b+I*Z+w*B+P*be,u[15]=F*L+I*he+w*H+P*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],_=e[10],M=e[14],T=e[3],C=e[7],S=e[11],y=e[15],F=m*M-p*_,I=h*M-p*v,w=h*_-m*v,P=f*M-p*g,O=f*_-m*g,D=f*v-h*g;return i*(C*F-S*I+y*w)-r*(T*F-S*P+y*O)+l*(T*I-C*P+y*D)-u*(T*w-C*O+S*D)}determinantAffine(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[1],f=e[5],h=e[9],m=e[2],p=e[6],g=e[10];return i*(f*g-h*p)-r*(u*g-h*m)+l*(u*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],_=e[10],M=e[11],T=e[12],C=e[13],S=e[14],y=e[15],F=i*h-r*f,I=i*m-l*f,w=i*p-u*f,P=r*m-l*h,O=r*p-u*h,D=l*p-u*m,b=g*C-v*T,L=g*S-_*T,q=g*y-M*T,G=v*S-_*C,Z=v*y-M*C,he=_*y-M*S,ge=F*he-I*Z+w*G+P*q-O*L+D*b;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/ge;return e[0]=(h*he-m*Z+p*G)*Y,e[1]=(l*Z-r*he-u*G)*Y,e[2]=(C*D-S*O+y*P)*Y,e[3]=(_*O-v*D-M*P)*Y,e[4]=(m*q-f*he-p*L)*Y,e[5]=(i*he-l*q+u*L)*Y,e[6]=(S*w-T*D-y*I)*Y,e[7]=(g*D-_*w+M*I)*Y,e[8]=(f*Z-h*q+p*b)*Y,e[9]=(r*q-i*Z-u*b)*Y,e[10]=(T*O-C*w+y*F)*Y,e[11]=(v*w-g*O-M*F)*Y,e[12]=(h*L-f*G-m*b)*Y,e[13]=(i*G-r*L+l*b)*Y,e[14]=(C*I-T*P-S*F)*Y,e[15]=(g*P-v*I+_*F)*Y,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=e.x,h=e.y,m=e.z,p=u*f,g=u*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,f){return this.set(1,r,u,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,f=i._y,h=i._z,m=i._w,p=u+u,g=f+f,v=h+h,_=u*p,M=u*g,T=u*v,C=f*g,S=f*v,y=h*v,F=m*p,I=m*g,w=m*v,P=r.x,O=r.y,D=r.z;return l[0]=(1-(C+y))*P,l[1]=(M+w)*P,l[2]=(T-I)*P,l[3]=0,l[4]=(M-w)*O,l[5]=(1-(_+y))*O,l[6]=(S+F)*O,l[7]=0,l[8]=(T+I)*D,l[9]=(S-F)*D,l[10]=(1-(_+C))*D,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),i.identity(),this;let f=Ds.set(l[0],l[1],l[2]).length();const h=Ds.set(l[4],l[5],l[6]).length(),m=Ds.set(l[8],l[9],l[10]).length();u<0&&(f=-f),Ri.copy(this);const p=1/f,g=1/h,v=1/m;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=f,r.y=h,r.z=m,this}makePerspective(e,i,r,l,u,f,h=Xi,m=!1){const p=this.elements,g=2*u/(i-e),v=2*u/(r-l),_=(i+e)/(i-e),M=(r+l)/(r-l);let T,C;if(m)T=u/(f-u),C=f*u/(f-u);else if(h===Xi)T=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(h===fc)T=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,f,h=Xi,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),_=-(i+e)/(i-e),M=-(r+l)/(r-l);let T,C;if(m)T=1/(f-u),C=f/(f-u);else if(h===Xi)T=-2/(f-u),C=-(f+u)/(f-u);else if(h===fc)T=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}};hc.prototype.isMatrix4=!0;let fn=hc;const Ds=new oe,Ri=new fn,Mb=new oe(0,0,0),Eb=new oe(1,1,1),sr=new oe,wu=new oe,si=new oe,q_=new fn,Y_=new js;class Zr{constructor(e=0,i=0,r=0,l=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class Rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bb=0;const Z_=new oe,Us=new js,_a=new fn,Du=new oe,Ko=new oe,Tb=new oe,Ab=new js,K_=new oe(1,0,0),Q_=new oe(0,1,0),J_=new oe(0,0,1),j_={type:"added"},Rb={type:"removed"},Ls={type:"childadded",child:null},Xd={type:"childremoved",child:null};class ui extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new oe,i=new Zr,r=new js,l=new oe(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new st}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(K_,e)}rotateY(e){return this.rotateOnAxis(Q_,e)}rotateZ(e){return this.rotateOnAxis(J_,e)}translateOnAxis(e,i){return Z_.copy(e).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(K_,e)}translateY(e){return this.translateOnAxis(Q_,e)}translateZ(e){return this.translateOnAxis(J_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Du.copy(e):Du.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(Ko,Du,this.up):_a.lookAt(Du,Ko,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Us.setFromRotationMatrix(_a),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(j_),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Rb),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(j_),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,Tb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Ab,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,u=this.matrix.elements;u[12]+=i-u[0]*i-u[4]*r-u[8]*l,u[13]+=r-u[1]*i-u[5]*r-u[9]*l,u[14]+=l-u[2]*i-u[6]*r-u[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0,r)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];u(e.shapes,v)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),_=f(e.skeletons),M=f(e.animations),T=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ui.DEFAULT_UP=new oe(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nl extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const C of e.hand.values()){const S=i.getJointPose(C,r),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,T=.005;p.inputState.pinching&&_>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new nl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const bx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ut{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Mt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Mt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Mt.workingColorSpace){if(e=mb(e,1),i=Et(i,0,1),r=Et(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=qd(f,u,e+1/3),this.g=qd(f,u,e),this.b=qd(f,u,e-1/3)}return Mt.colorSpaceToWorking(this,l),this}setStyle(e,i=li){function r(u){u!==void 0&&parseFloat(u)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=li){const r=bx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Mt.workingToColorSpace(Fn.copy(this),e),Math.round(Et(Fn.r*255,0,255))*65536+Math.round(Et(Fn.g*255,0,255))*256+Math.round(Et(Fn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Mt.workingColorSpace){Mt.workingToColorSpace(Fn.copy(this),i);const r=Fn.r,l=Fn.g,u=Fn.b,f=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-u)/v+(l<u?6:0);break;case l:m=(u-r)/v+2;break;case u:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Mt.workingColorSpace){return Mt.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=li){Mt.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,r=Fn.g,l=Fn.b;return e!==li?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(or),this.setHSL(or.h+e,or.s+i,or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(or),e.getHSL(Uu);const r=zd(or.h,Uu.h,i),l=zd(or.s,Uu.s,i),u=zd(or.l,Uu.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ut;Ut.NAMES=bx;class Cp{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ut(e),this.near=i,this.far=r}clone(){return new Cp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wb extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ci=new oe,va=new oe,Yd=new oe,xa=new oe,Ns=new oe,Os=new oe,$_=new oe,Zd=new oe,Kd=new oe,Qd=new oe,Jd=new on,jd=new on,$d=new on;class Ui{constructor(e=new oe,i=new oe,r=new oe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){Ci.subVectors(l,i),va.subVectors(r,i),Yd.subVectors(e,i);const f=Ci.dot(Ci),h=Ci.dot(va),m=Ci.dot(Yd),p=va.dot(va),g=va.dot(Yd),v=f*p-h*h;if(v===0)return u.set(0,0,0),null;const _=1/v,M=(p*m-h*g)*_,T=(f*g-h*m)*_;return u.set(1-M-T,T,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(e,i,r,l,u,f,h,m){return this.getBarycoord(e,i,r,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,xa.x),m.addScaledVector(f,xa.y),m.addScaledVector(h,xa.z),m)}static getInterpolatedAttribute(e,i,r,l,u,f){return Jd.setScalar(0),jd.setScalar(0),$d.setScalar(0),Jd.fromBufferAttribute(e,i),jd.fromBufferAttribute(e,r),$d.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Jd,u.x),f.addScaledVector(jd,u.y),f.addScaledVector($d,u.z),f}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),va.subVectors(e,i),Ci.cross(va).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ci.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ui.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ui.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let f,h;Ns.subVectors(l,r),Os.subVectors(u,r),Zd.subVectors(e,r);const m=Ns.dot(Zd),p=Os.dot(Zd);if(m<=0&&p<=0)return i.copy(r);Kd.subVectors(e,l);const g=Ns.dot(Kd),v=Os.dot(Kd);if(g>=0&&v<=g)return i.copy(l);const _=m*v-g*p;if(_<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ns,f);Qd.subVectors(e,u);const M=Ns.dot(Qd),T=Os.dot(Qd);if(T>=0&&M<=T)return i.copy(u);const C=M*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(Os,h);const S=g*T-M*v;if(S<=0&&v-g>=0&&M-T>=0)return $_.subVectors(u,l),h=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector($_,h);const y=1/(S+C+_);return f=C*y,h=_*y,i.copy(r).addScaledVector(Ns,f).addScaledVector(Os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hl{constructor(e=new oe(1/0,1/0,1/0),i=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=u.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,wi):wi.fromBufferAttribute(u,f),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lu.copy(r.boundingBox)),Lu.applyMatrix4(e.matrixWorld),this.union(Lu)}const l=e.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Nu.subVectors(this.max,Qo),Ps.subVectors(e.a,Qo),Fs.subVectors(e.b,Qo),Is.subVectors(e.c,Qo),lr.subVectors(Fs,Ps),ur.subVectors(Is,Fs),Ir.subVectors(Ps,Is);let i=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!eh(i,Ps,Fs,Is,Nu)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,Ps,Fs,Is,Nu))?!1:(Ou.crossVectors(lr,ur),i=[Ou.x,Ou.y,Ou.z],eh(i,Ps,Fs,Is,Nu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],wi=new oe,Lu=new hl,Ps=new oe,Fs=new oe,Is=new oe,lr=new oe,ur=new oe,Ir=new oe,Qo=new oe,Nu=new oe,Ou=new oe,Br=new oe;function eh(s,e,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){Br.fromArray(s,u);const h=l.x*Math.abs(Br.x)+l.y*Math.abs(Br.y)+l.z*Math.abs(Br.z),m=e.dot(Br),p=i.dot(Br),g=r.dot(Br);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const vn=new oe,Pu=new Ct;let Db=0;class Yi extends Kr{constructor(e,i,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=z_,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Pu.fromBufferAttribute(this,i),Pu.applyMatrix3(e),this.setXY(i,Pu.x,Pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Zo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Yn(i,this.array),r=Yn(r,this.array),l=Yn(l,this.array),u=Yn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tx extends Yi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ax extends Yi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Aa extends Yi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const Ub=new hl,Jo=new oe,th=new oe;class wp{constructor(e=new oe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Ub.setFromPoints(e).getCenter(r);let l=0;for(let u=0,f=e.length;u<f;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Jo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(th)),this.expandByPoint(Jo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Lb=0;const vi=new fn,nh=new ui,Bs=new oe,oi=new hl,jo=new hl,Tn=new oe;class La extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fb(e)?Ax:Tx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new st().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,r){return vi.makeTranslation(e,i,r),this.applyMatrix4(vi),this}scale(e,i,r){return vi.makeScale(e,i,r),this.applyMatrix4(vi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Aa(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];oi.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let u=0,f=i.length;u<f;u++){const h=i[u];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(oi.min,jo.min),oi.expandByPoint(Tn),Tn.addVectors(oi.max,jo.max),oi.expandByPoint(Tn)):(oi.expandByPoint(jo.min),oi.expandByPoint(jo.max))}oi.getCenter(r);let l=0;for(let u=0,f=e.count;u<f;u++)Tn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let u=0,f=i.length;u<f;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Tn.fromBufferAttribute(h,p),m&&(Bs.fromBufferAttribute(e,p),Tn.add(Bs)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==r.count)&&(f=new Yi(new Float32Array(4*r.count),4),this.setAttribute("tangent",f));const h=[],m=[];for(let b=0;b<r.count;b++)h[b]=new oe,m[b]=new oe;const p=new oe,g=new oe,v=new oe,_=new Ct,M=new Ct,T=new Ct,C=new oe,S=new oe;function y(b,L,q){p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,L),v.fromBufferAttribute(r,q),_.fromBufferAttribute(u,b),M.fromBufferAttribute(u,L),T.fromBufferAttribute(u,q),g.sub(p),v.sub(p),M.sub(_),T.sub(_);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(G),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(G),h[b].add(C),h[L].add(C),h[q].add(C),m[b].add(S),m[L].add(S),m[q].add(S))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let b=0,L=F.length;b<L;++b){const q=F[b],G=q.start,Z=q.count;for(let he=G,ge=G+Z;he<ge;he+=3)y(e.getX(he+0),e.getX(he+1),e.getX(he+2))}const I=new oe,w=new oe,P=new oe,O=new oe;function D(b){P.fromBufferAttribute(l,b),O.copy(P);const L=h[b];I.copy(L),I.sub(P.multiplyScalar(P.dot(L))).normalize(),w.crossVectors(O,L);const G=w.dot(m[b])<0?-1:1;f.setXYZW(b,I.x,I.y,I.z,G)}for(let b=0,L=F.length;b<L;++b){const q=F[b],G=q.start,Z=q.count;for(let he=G,ge=G+Z;he<ge;he+=3)D(e.getX(he+0)),D(e.getX(he+1)),D(e.getX(he+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const l=new oe,u=new oe,f=new oe,h=new oe,m=new oe,p=new oe,g=new oe,v=new oe;if(e)for(let _=0,M=e.count;_<M;_+=3){const T=e.getX(_+0),C=e.getX(_+1),S=e.getX(_+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,_=new p.constructor(m.length*g);let M=0,T=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*g;for(let y=0;y<g;y++)_[T++]=p[M++]}return new Yi(_,g,v)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new La,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,v=p.length;g<v;g++){const _=p[g],M=e(_,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,_=p.length;v<_;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],v=u[p];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Nb=0;class xc extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=dl(),this.name="",this.type="Material",this.blending=Xs,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_h&&(r.blendSrc=this.blendSrc),this.blendDst!==vh&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const h in u){const m=u[h];delete m.metadata,f.push(m)}return f}if(i){const u=l(e.textures),f=l(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ct().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ya=new oe,ih=new oe,Fu=new oe,cr=new oe,ah=new oe,Iu=new oe,rh=new oe;class Rx{constructor(e=new oe,i=new oe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ya)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ya.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ih.copy(e).add(i).multiplyScalar(.5),Fu.copy(i).sub(e).normalize(),cr.copy(this.origin).sub(ih);const u=e.distanceTo(i)*.5,f=-this.direction.dot(Fu),h=cr.dot(this.direction),m=-cr.dot(Fu),p=cr.lengthSq(),g=Math.abs(1-f*f);let v,_,M,T;if(g>0)if(v=f*m-h,_=f*h-m,T=u*g,v>=0)if(_>=-T)if(_<=T){const C=1/g;v*=C,_*=C,M=v*(v+f*_+2*h)+_*(f*v+_+2*m)+p}else _=u,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;else _=-u,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;else _<=-T?(v=Math.max(0,-(-f*u+h)),_=v>0?-u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+p):_<=T?(v=0,_=Math.min(Math.max(-u,-m),u),M=_*(_+2*m)+p):(v=Math.max(0,-(f*u+h)),_=v>0?u:Math.min(Math.max(-u,-m),u),M=-v*v+_*(_+2*m)+p);else _=f>0?-u:u,v=Math.max(0,-(f*_+h)),M=-v*v+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(ih).addScaledVector(Fu,_),M}intersectSphere(e,i){ya.subVectors(e.center,this.origin);const r=ya.dot(this.direction),l=ya.dot(ya)-r*r,u=e.radius*e.radius;if(l>u)return null;const f=Math.sqrt(u-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(u=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-_.z)*v,m=(e.max.z-_.z)*v):(h=(e.max.z-_.z)*v,m=(e.min.z-_.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ya)!==null}intersectTriangle(e,i,r,l,u){ah.subVectors(i,e),Iu.subVectors(r,e),rh.crossVectors(ah,Iu);let f=this.direction.dot(rh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;cr.subVectors(this.origin,e);const m=h*this.direction.dot(Iu.crossVectors(cr,Iu));if(m<0)return null;const p=h*this.direction.dot(ah.cross(cr));if(p<0||m+p>f)return null;const g=-h*cr.dot(rh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dp extends xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ev=new fn,zr=new Rx,Bu=new wp,tv=new oe,zu=new oe,Hu=new oe,Gu=new oe,sh=new oe,Vu=new oe,nv=new oe,ku=new oe;class Qi extends ui{constructor(e=new La,i=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Vu.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],v=u[m];g!==0&&(sh.fromBufferAttribute(v,e),f?Vu.addScaledVector(sh,g):Vu.addScaledVector(sh.sub(i),g))}i.add(Vu)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Bu.copy(r.boundingSphere),Bu.applyMatrix4(u),zr.copy(e.ray).recast(e.near),!(Bu.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Bu,tv)===null||zr.origin.distanceToSquared(tv)>(e.far-e.near)**2))&&(ev.copy(u).invert(),zr.copy(e.ray).applyMatrix4(ev),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,zr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,f=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,_=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const S=_[T],y=f[S.materialIndex],F=Math.max(S.start,M.start),I=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let w=F,P=I;w<P;w+=3){const O=h.getX(w),D=h.getX(w+1),b=h.getX(w+2);l=Xu(this,y,e,r,p,g,v,O,D,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const F=h.getX(S),I=h.getX(S+1),w=h.getX(S+2);l=Xu(this,f,e,r,p,g,v,F,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const S=_[T],y=f[S.materialIndex],F=Math.max(S.start,M.start),I=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let w=F,P=I;w<P;w+=3){const O=w,D=w+1,b=w+2;l=Xu(this,y,e,r,p,g,v,O,D,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const F=S,I=S+1,w=S+2;l=Xu(this,f,e,r,p,g,v,F,I,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Ob(s,e,i,r,l,u,f,h){let m;if(e.side===Zn?m=r.intersectTriangle(f,u,l,!0,h):m=r.intersectTriangle(l,u,f,e.side===gr,h),m===null)return null;ku.copy(h),ku.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(ku);return p<i.near||p>i.far?null:{distance:p,point:ku.clone(),object:s}}function Xu(s,e,i,r,l,u,f,h,m,p){s.getVertexPosition(h,zu),s.getVertexPosition(m,Hu),s.getVertexPosition(p,Gu);const g=Ob(s,e,i,r,zu,Hu,Gu,nv);if(g){const v=new oe;Ui.getBarycoord(nv,zu,Hu,Gu,v),l&&(g.uv=Ui.getInterpolatedAttribute(l,h,m,p,v,new Ct)),u&&(g.uv1=Ui.getInterpolatedAttribute(u,h,m,p,v,new Ct)),f&&(g.normal=Ui.getInterpolatedAttribute(f,h,m,p,v,new oe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new oe,materialIndex:0};Ui.getNormal(zu,Hu,Gu,_.normal),g.face=_,g.barycoord=v}return g}class Pb extends In{constructor(e=null,i=1,r=1,l,u,f,h,m,p=Un,g=Un,v,_){super(null,f,h,m,p,g,l,u,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new oe,Fb=new oe,Ib=new st;class Gr{constructor(e=new oe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=oh.subVectors(r,i).cross(Fb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,r=!0){const l=e.delta(oh),u=this.normal.dot(l);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Ib.getNormalMatrix(e),l=this.coplanarPoint(oh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new wp,Bb=new Ct(.5,.5),Wu=new oe;class Cx{constructor(e=new Gr,i=new Gr,r=new Gr,l=new Gr,u=new Gr,f=new Gr){this.planes=[e,i,r,l,u,f]}set(e,i,r,l,u,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Xi,r=!1){const l=this.planes,u=e.elements,f=u[0],h=u[1],m=u[2],p=u[3],g=u[4],v=u[5],_=u[6],M=u[7],T=u[8],C=u[9],S=u[10],y=u[11],F=u[12],I=u[13],w=u[14],P=u[15];if(l[0].setComponents(p-f,M-g,y-T,P-F).normalize(),l[1].setComponents(p+f,M+g,y+T,P+F).normalize(),l[2].setComponents(p+h,M+v,y+C,P+I).normalize(),l[3].setComponents(p-h,M-v,y-C,P-I).normalize(),r)l[4].setComponents(m,_,S,w).normalize(),l[5].setComponents(p-m,M-_,y-S,P-w).normalize();else if(l[4].setComponents(p-m,M-_,y-S,P-w).normalize(),i===Xi)l[5].setComponents(p+m,M+_,y+S,P+w).normalize();else if(i===fc)l[5].setComponents(m,_,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const i=Bb.distanceTo(e.center);return Hr.radius=.7071067811865476+i,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Wu.x=l.normal.x>0?e.max.x:e.min.x,Wu.y=l.normal.y>0?e.max.y:e.min.y,Wu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Wu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wx extends In{constructor(e=[],i=qr,r,l,u,f,h,m,p,g){super(e,i,r,l,u,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends In{constructor(e,i,r=Ki,l,u,f,h=Un,m=Un,p,g=wa,v=1){if(g!==wa&&g!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,u,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zb extends Ks{constructor(e,i=Ki,r=qr,l,u,f=Un,h=Un,m,p=wa){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,l,u,f,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dx extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pl extends La{constructor(e=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const h=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],g=[],v=[];let _=0,M=0;T("z","y","x",-1,-1,r,i,e,f,u,0),T("z","y","x",1,-1,r,i,-e,f,u,1),T("x","z","y",1,1,e,r,i,l,f,2),T("x","z","y",1,-1,e,r,-i,l,f,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Aa(p,3)),this.setAttribute("normal",new Aa(g,3)),this.setAttribute("uv",new Aa(v,2));function T(C,S,y,F,I,w,P,O,D,b,L){const q=w/D,G=P/b,Z=w/2,he=P/2,ge=O/2,Y=D+1,B=b+1;let H=0,ee=0;const _e=new oe;for(let be=0;be<B;be++){const N=be*G-he;for(let Q=0;Q<Y;Q++){const Ee=Q*q-Z;_e[C]=Ee*F,_e[S]=N*I,_e[y]=ge,p.push(_e.x,_e.y,_e.z),_e[C]=0,_e[S]=0,_e[y]=O>0?1:-1,g.push(_e.x,_e.y,_e.z),v.push(Q/D),v.push(1-be/b),H+=1}}for(let be=0;be<b;be++)for(let N=0;N<D;N++){const Q=_+N+Y*be,Ee=_+N+Y*(be+1),Ce=_+(N+1)+Y*(be+1),Fe=_+(N+1)+Y*be;m.push(Q,Ee,Fe),m.push(Ee,Ce,Fe),ee+=6}h.addGroup(M,ee,L),M+=ee,_+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ml extends La{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,_=i/m,M=[],T=[],C=[],S=[];for(let y=0;y<g;y++){const F=y*_-f;for(let I=0;I<p;I++){const w=I*v-u;T.push(w,-F,0),C.push(0,0,1),S.push(I/h),S.push(1-y/m)}}for(let y=0;y<m;y++)for(let F=0;F<h;F++){const I=F+p*y,w=F+p*(y+1),P=F+1+p*(y+1),O=F+1+p*y;M.push(I,w,O),M.push(w,P,O)}this.setIndex(M),this.setAttribute("position",new Aa(T,3)),this.setAttribute("normal",new Aa(C,3)),this.setAttribute("uv",new Aa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];if(iv(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone();else if(Array.isArray(l))if(iv(l[0])){const u=[];for(let f=0,h=l.length;f<h;f++)u[f]=l[f].clone();e[i][r]=u}else e[i][r]=l.slice();else e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=Qs(s[i]);for(const l in r)e[l]=r[l]}return e}function iv(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Hb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function Ux(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Gb={clone:Qs,merge:zn};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Ut().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ct().fromArray(l.value);break;case"v3":this.uniforms[r].value=new oe().fromArray(l.value);break;case"v4":this.uniforms[r].value=new on().fromArray(l.value);break;case"m3":this.uniforms[r].value=new st().fromArray(l.value);break;case"m4":this.uniforms[r].value=new fn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Xb extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wb extends xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lh={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(av(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!av(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function av(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Yb{constructor(e,i,r){const l=this;let u=!1,f=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){h++,u===!1&&l.onStart!==void 0&&l.onStart(g,f,h),u=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,h),f===h&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return g=g.normalize("NFC"),m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=p.length;v<_;v+=2){const M=p[v],T=p[v+1];if(M.global&&(M.lastIndex=0),M.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zb=new Yb;class Up{constructor(e){this.manager=e!==void 0?e:Zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Up.DEFAULT_MATERIAL_NAME="__DEFAULT";const zs=new WeakMap;class Kb extends Up{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,f=lh.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)u.manager.itemStart(e),setTimeout(function(){i&&i(f),u.manager.itemEnd(e)},0);else{let v=zs.get(f);v===void 0&&(v=[],zs.set(f,v)),v.push({onLoad:i,onError:l})}return f}const h=ol("img");function m(){g(),i&&i(this);const v=zs.get(this)||[];for(let _=0;_<v.length;_++){const M=v[_];M.onLoad&&M.onLoad(this)}zs.delete(this),u.manager.itemEnd(e)}function p(v){g(),l&&l(v),lh.remove(`image:${e}`);const _=zs.get(this)||[];for(let M=0;M<_.length;M++){const T=_[M];T.onError&&T.onError(v)}zs.delete(this),u.manager.itemError(e),u.manager.itemEnd(e)}function g(){h.removeEventListener("load",m,!1),h.removeEventListener("error",p,!1)}return h.addEventListener("load",m,!1),h.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),lh.add(`image:${e}`,h),u.manager.itemStart(e),h.src=e,h}}class Qb extends Up{constructor(e){super(e)}load(e,i,r,l){const u=new In,f=new Kb(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(h){u.image=h,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}const qu=new oe,Yu=new js,Hi=new oe;class Lx extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qu,Yu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qu,Yu,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,i,r=!1){super.updateWorldMatrix(e,i,r),this.matrixWorld.decompose(qu,Yu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qu,Yu,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new oe,rv=new Ct,sv=new Ct;class xi extends Lx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ap*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,i){return this.getViewBounds(e,rv,sv),i.subVectors(sv,rv)}setViewOffset(e,i,r,l,u,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Bd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Nx extends Lx{constructor(e=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Hs=-90,Gs=1;class Jb extends ui{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(Hs,Gs,e,i);l.layers=this.layers,this.add(l);const u=new xi(Hs,Gs,e,i);u.layers=this.layers,this.add(u);const f=new xi(Hs,Gs,e,i);f.layers=this.layers,this.add(f);const h=new xi(Hs,Gs,e,i);h.layers=this.layers,this.add(h);const m=new xi(Hs,Gs,e,i);m.layers=this.layers,this.add(m);const p=new xi(Hs,Gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,h,m]=i;for(const p of i)this.remove(p);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,h,m,p,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,u),e.setRenderTarget(r,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(r,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(r,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(v,_,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class jb extends xi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ov=new fn;class $b{constructor(e,i,r=0,l=1/0){this.ray=new Rx(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):bt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return ov.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ov),this}intersectObject(e,i=!0,r=[]){return rp(e,this,r,i),r.sort(lv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,u=e.length;l<u;l++)rp(e[l],this,r,i);return r.sort(lv),r}}function lv(s,e){return s.distance-e.distance}function rp(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const u=s.children;for(let f=0,h=u.length;f<h;f++)rp(u[f],e,i,!0)}}class eT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Ip=class Ip{constructor(e,i,r,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,l){const u=this.elements;return u[0]=e,u[2]=i,u[1]=r,u[3]=l,this}};Ip.prototype.isMatrix2=!0;let uv=Ip;function cv(s,e,i,r){const l=tT(r);switch(i){case xx:return s*e;case yx:return s*e/l.components*l.byteLength;case yp:return s*e/l.components*l.byteLength;case Yr:return s*e*2/l.components*l.byteLength;case Mp:return s*e*2/l.components*l.byteLength;case Sx:return s*e*3/l.components*l.byteLength;case Li:return s*e*4/l.components*l.byteLength;case Ep:return s*e*4/l.components*l.byteLength;case ec:case tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wh:case Uh:return Math.max(s,16)*Math.max(e,8)/4;case Ch:case Dh:return Math.max(s,8)*Math.max(e,8)/2;case Lh:case Nh:case Ph:case Fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Oh:case oc:case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jh:case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tp:case np:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case ip:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tT(s){switch(s){case Si:case mx:return{byteLength:1,components:1};case rl:case gx:case Ca:return{byteLength:2,components:1};case xp:case Sp:return{byteLength:2,components:4};case Ki:case vp:case ki:return{byteLength:4,components:1};case _x:case vx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_p}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_p);function Ox(){let s=null,e=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function nT(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<v.length;M++){const T=v[_],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];s.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:f}}var iT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aT=`#ifdef USE_ALPHAHASH
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
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gT=`#ifdef USE_IRIDESCENCE
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
#endif`,_T=`#ifdef USE_BUMPMAP
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,RT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,CT=`vec3 transformedNormal = objectNormal;
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",OT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XT=`#ifdef USE_GRADIENTMAP
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
}`,WT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZT=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,KT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,QT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,t1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,n1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,h1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,E1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,N1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,V1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,k1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j1=`#ifdef USE_TRANSMISSION
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#define LAMBERT
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
}`,SA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,yA=`#define MATCAP
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
}`,MA=`#define MATCAP
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
}`,EA=`#define NORMAL
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
}`,bA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TA=`#define PHONG
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
}`,AA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,RA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,wA=`#define TOON
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
}`,DA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,UA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,OA=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,PA=`uniform float rotation;
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
}`,FA=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:iT,alphahash_pars_fragment:aT,alphamap_fragment:rT,alphamap_pars_fragment:sT,alphatest_fragment:oT,alphatest_pars_fragment:lT,aomap_fragment:uT,aomap_pars_fragment:cT,batching_pars_vertex:fT,batching_vertex:dT,begin_vertex:hT,beginnormal_vertex:pT,bsdfs:mT,iridescence_fragment:gT,bumpmap_pars_fragment:_T,clipping_planes_fragment:vT,clipping_planes_pars_fragment:xT,clipping_planes_pars_vertex:ST,clipping_planes_vertex:yT,color_fragment:MT,color_pars_fragment:ET,color_pars_vertex:bT,color_vertex:TT,common:AT,cube_uv_reflection_fragment:RT,defaultnormal_vertex:CT,displacementmap_pars_vertex:wT,displacementmap_vertex:DT,emissivemap_fragment:UT,emissivemap_pars_fragment:LT,colorspace_fragment:NT,colorspace_pars_fragment:OT,envmap_fragment:PT,envmap_common_pars_fragment:FT,envmap_pars_fragment:IT,envmap_pars_vertex:BT,envmap_physical_pars_fragment:KT,envmap_vertex:zT,fog_vertex:HT,fog_pars_vertex:GT,fog_fragment:VT,fog_pars_fragment:kT,gradientmap_pars_fragment:XT,lightmap_pars_fragment:WT,lights_lambert_fragment:qT,lights_lambert_pars_fragment:YT,lights_pars_begin:ZT,lights_toon_fragment:QT,lights_toon_pars_fragment:JT,lights_phong_fragment:jT,lights_phong_pars_fragment:$T,lights_physical_fragment:e1,lights_physical_pars_fragment:t1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,lightprobes_pars_fragment:r1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:u1,map_fragment:c1,map_pars_fragment:f1,map_particle_fragment:d1,map_particle_pars_fragment:h1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:_1,morphnormal_vertex:v1,morphtarget_pars_vertex:x1,morphtarget_vertex:S1,normal_fragment_begin:y1,normal_fragment_maps:M1,normal_pars_fragment:E1,normal_pars_vertex:b1,normal_vertex:T1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:C1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:D1,opaque_fragment:U1,packing:L1,premultiplied_alpha_fragment:N1,project_vertex:O1,dithering_fragment:P1,dithering_pars_fragment:F1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:z1,shadowmap_pars_vertex:H1,shadowmap_vertex:G1,shadowmask_pars_fragment:V1,skinbase_vertex:k1,skinning_pars_vertex:X1,skinning_vertex:W1,skinnormal_vertex:q1,specularmap_fragment:Y1,specularmap_pars_fragment:Z1,tonemapping_fragment:K1,tonemapping_pars_fragment:Q1,transmission_fragment:J1,transmission_pars_fragment:j1,uv_pars_fragment:$1,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:lA,depth_vert:uA,depth_frag:cA,distance_vert:fA,distance_frag:dA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:_A,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:SA,meshmatcap_vert:yA,meshmatcap_frag:MA,meshnormal_vert:EA,meshnormal_frag:bA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:wA,meshtoon_frag:DA,points_vert:UA,points_frag:LA,shadow_vert:NA,shadow_frag:OA,sprite_vert:PA,sprite_frag:FA},Pe={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new oe},probesMax:{value:new oe},probesResolution:{value:new oe}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Vi={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ut(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Vi.physical={uniforms:zn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Zu={r:0,b:0,g:0},IA=new fn,Px=new st;Px.set(-1,0,0,0,1,0,0,0,1);function BA(s,e,i,r,l,u){const f=new Ut(0);let h=l===!0?0:1,m,p,g=null,v=0,_=null;function M(F){let I=F.isScene===!0?F.background:null;if(I&&I.isTexture){const w=F.backgroundBlurriness>0;I=e.get(I,w)}return I}function T(F){let I=!1;const w=M(F);w===null?S(f,h):w&&w.isColor&&(S(w,1),I=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(F,I){const w=M(I);w&&(w.isCubeTexture||w.mapping===vc)?(p===void 0&&(p=new Qi(new pl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Qs(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,O,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=w,p.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(IA.makeRotationFromEuler(I.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Px),p.material.toneMapped=Mt.getTransfer(w.colorSpace)!==zt,(g!==w||v!==w.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Qi(new ml(2,2),new Ji({name:"BackgroundMaterial",uniforms:Qs(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(w.colorSpace)!==zt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(g!==w||v!==w.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,g=w,v=w.version,_=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function S(F,I){F.getRGB(Zu,Ux(s)),i.buffers.color.setClear(Zu.r,Zu.g,Zu.b,I,u)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(F,I=1){f.set(F),h=I,S(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,S(f,h)},render:T,addToRenderList:C,dispose:y}}function zA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,f=!1;function h(G,Z,he,ge,Y){let B=!1;const H=v(G,ge,he,Z);u!==H&&(u=H,p(u.object)),B=M(G,ge,he,Y),B&&T(G,ge,he,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,w(G,Z,he,ge),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function m(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function g(G){return s.deleteVertexArray(G)}function v(G,Z,he,ge){const Y=ge.wireframe===!0;let B=r[Z.id];B===void 0&&(B={},r[Z.id]=B);const H=G.isInstancedMesh===!0?G.id:0;let ee=B[H];ee===void 0&&(ee={},B[H]=ee);let _e=ee[he.id];_e===void 0&&(_e={},ee[he.id]=_e);let be=_e[Y];return be===void 0&&(be=_(m()),_e[Y]=be),be}function _(G){const Z=[],he=[],ge=[];for(let Y=0;Y<i;Y++)Z[Y]=0,he[Y]=0,ge[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:he,attributeDivisors:ge,object:G,attributes:{},index:null}}function M(G,Z,he,ge){const Y=u.attributes,B=Z.attributes;let H=0;const ee=he.getAttributes();for(const _e in ee)if(ee[_e].location>=0){const N=Y[_e];let Q=B[_e];if(Q===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(Q=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(Q=G.instanceColor)),N===void 0||N.attribute!==Q||Q&&N.data!==Q.data)return!0;H++}return u.attributesNum!==H||u.index!==ge}function T(G,Z,he,ge){const Y={},B=Z.attributes;let H=0;const ee=he.getAttributes();for(const _e in ee)if(ee[_e].location>=0){let N=B[_e];N===void 0&&(_e==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),_e==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const Q={};Q.attribute=N,N&&N.data&&(Q.data=N.data),Y[_e]=Q,H++}u.attributes=Y,u.attributesNum=H,u.index=ge}function C(){const G=u.newAttributes;for(let Z=0,he=G.length;Z<he;Z++)G[Z]=0}function S(G){y(G,0)}function y(G,Z){const he=u.newAttributes,ge=u.enabledAttributes,Y=u.attributeDivisors;he[G]=1,ge[G]===0&&(s.enableVertexAttribArray(G),ge[G]=1),Y[G]!==Z&&(s.vertexAttribDivisor(G,Z),Y[G]=Z)}function F(){const G=u.newAttributes,Z=u.enabledAttributes;for(let he=0,ge=Z.length;he<ge;he++)Z[he]!==G[he]&&(s.disableVertexAttribArray(he),Z[he]=0)}function I(G,Z,he,ge,Y,B,H){H===!0?s.vertexAttribIPointer(G,Z,he,Y,B):s.vertexAttribPointer(G,Z,he,ge,Y,B)}function w(G,Z,he,ge){C();const Y=ge.attributes,B=he.getAttributes(),H=Z.defaultAttributeValues;for(const ee in B){const _e=B[ee];if(_e.location>=0){let be=Y[ee];if(be===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const N=be.normalized,Q=be.itemSize,Ee=e.get(be);if(Ee===void 0)continue;const Ce=Ee.buffer,Fe=Ee.type,ie=Ee.bytesPerElement,Se=Fe===s.INT||Fe===s.UNSIGNED_INT||be.gpuType===vp;if(be.isInterleavedBufferAttribute){const Me=be.data,He=Me.stride,nt=be.offset;if(Me.isInstancedInterleavedBuffer){for(let Je=0;Je<_e.locationSize;Je++)y(_e.location+Je,Me.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Je=0;Je<_e.locationSize;Je++)S(_e.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Je=0;Je<_e.locationSize;Je++)I(_e.location+Je,Q/_e.locationSize,Fe,N,He*ie,(nt+Q/_e.locationSize*Je)*ie,Se)}else{if(be.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)y(_e.location+Me,be.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Me=0;Me<_e.locationSize;Me++)S(_e.location+Me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Me=0;Me<_e.locationSize;Me++)I(_e.location+Me,Q/_e.locationSize,Fe,N,Q*ie,Q/_e.locationSize*Me*ie,Se)}}else if(H!==void 0){const N=H[ee];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(_e.location,N);break;case 3:s.vertexAttrib3fv(_e.location,N);break;case 4:s.vertexAttrib4fv(_e.location,N);break;default:s.vertexAttrib1fv(_e.location,N)}}}}F()}function P(){L();for(const G in r){const Z=r[G];for(const he in Z){const ge=Z[he];for(const Y in ge){const B=ge[Y];for(const H in B)g(B[H].object),delete B[H];delete ge[Y]}}delete r[G]}}function O(G){if(r[G.id]===void 0)return;const Z=r[G.id];for(const he in Z){const ge=Z[he];for(const Y in ge){const B=ge[Y];for(const H in B)g(B[H].object),delete B[H];delete ge[Y]}}delete r[G.id]}function D(G){for(const Z in r){const he=r[Z];for(const ge in he){const Y=he[ge];if(Y[G.id]===void 0)continue;const B=Y[G.id];for(const H in B)g(B[H].object),delete B[H];delete Y[G.id]}}}function b(G){for(const Z in r){const he=r[Z],ge=G.isInstancedMesh===!0?G.id:0,Y=he[ge];if(Y!==void 0){for(const B in Y){const H=Y[B];for(const ee in H)g(H[ee].object),delete H[ee];delete Y[B]}delete he[ge],Object.keys(he).length===0&&delete r[Z]}}}function L(){q(),f=!0,u!==l&&(u=l,p(u.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:L,resetDefaultState:q,dispose:P,releaseStatesOfGeometry:O,releaseStatesOfObject:b,releaseStatesOfProgram:D,initAttributes:C,enableAttribute:S,disableUnusedAttributes:F}}function HA(s,e,i){let r;function l(m){r=m}function u(m,p){s.drawArrays(r,m,p),i.update(p,r,1)}function f(m,p,g){g!==0&&(s.drawArraysInstanced(r,m,p,g),i.update(p,r,g))}function h(m,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,g);let _=0;for(let M=0;M<g;M++)_+=p[M];i.update(_,r,1)}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function GA(s,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(D){return!(D!==Li&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(D){const b=D===Ca&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Si&&r.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ki&&!b)}function m(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(it("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&_===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:F,maxVaryings:I,maxFragmentUniforms:w,maxSamples:P,samples:O}}function VA(s){const e=this;let i=null,r=0,l=!1,u=!1;const f=new Gr,h=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||l;return l=_,r=v.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,_){i=g(v,_,0)},this.setState=function(v,_,M){const T=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,y=s.get(v);if(!l||T===null||T.length===0||u&&!S)u?g(null):p();else{const F=u?0:r,I=F*4;let w=y.clippingState||null;m.value=w,w=g(T,_,I,M);for(let P=0;P!==I;++P)w[P]=i[P];y.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,T){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const y=M+C*4,F=_.matrixWorldInverse;h.getNormalMatrix(F),(S===null||S.length<y)&&(S=new Float32Array(y));for(let I=0,w=M;I!==C;++I,w+=4)f.copy(v[I]).applyMatrix4(F,h),f.normal.toArray(S,w),S[w+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const pr=4,fv=[.125,.215,.35,.446,.526,.582],kr=20,kA=256,$o=new Nx,dv=new Ut;let uh=null,ch=0,fh=0,dh=!1;const XA=new oe;class hv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:f=256,position:h=XA}=u;uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,ch,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===qr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ca,format:Li,colorSpace:uc,depthBuffer:!1},l=pv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pv(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WA(u)),this._blurMaterial=YA(u,e,i),this._ggxMaterial=qA(u,e,i)}return l}_compileMaterial(e){const i=new Qi(new La,e);this._renderer.compile(i,$o)}_sceneToCubeUV(e,i,r,l,u){const m=new xi(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(dv),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new pl,new Dp({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const F=e.background;F?F.isColor&&(S.color.copy(F),e.background=null,y=!0):(S.color.copy(dv),y=!0);for(let I=0;I<6;I++){const w=I%3;w===0?(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[I],u.y,u.z)):w===1?(m.up.set(0,0,p[I]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[I],u.z)):(m.up.set(0,p[I],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[I]));const P=this._cubeSize;Vs(l,w*P,I>2?P:0,P,P),v.setRenderTarget(l),y&&v.render(C,m),v.render(e,m)}v.toneMapping=M,v.autoClear=_,e.background=F}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===qr||e.mapping===Zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;Vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,$o)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[r];h.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-g*g),_=0+p*1.25,M=v*_,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-pr?r-T+pr:0),y=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Vs(u,S,y,3*C,2*C),l.setRenderTarget(u),l.render(h,$o),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,Vs(e,S,y,3*C,2*C),l.setRenderTarget(e),l.render(h,$o)}_blur(e,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",u),this._halfBlur(f,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&bt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=p;const _=p.uniforms,M=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*kr-1),C=u/T,S=isFinite(u)?1+Math.floor(g*C):kr;S>kr&&it(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${kr}`);const y=[];let F=0;for(let D=0;D<kr;++D){const b=D/C,L=Math.exp(-b*b/2);y.push(L),D===0?F+=L:D<S&&(F+=2*L)}for(let D=0;D<y.length;D++)y[D]=y[D]/F;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:I}=this;_.dTheta.value=T,_.mipInt.value=I-r;const w=this._sizeLods[l],P=3*w*(l>I-pr?l-I+pr:0),O=4*(this._cubeSize-w);Vs(i,P,O,3*w,2*w),m.setRenderTarget(i),m.render(v,$o)}}function WA(s){const e=[],i=[],r=[];let l=s;const u=s-pr+1+fv.length;for(let f=0;f<u;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>s-pr?m=fv[f-s+pr-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,v=1+p,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,C=3,S=2,y=1,F=new Float32Array(C*T*M),I=new Float32Array(S*T*M),w=new Float32Array(y*T*M);for(let O=0;O<M;O++){const D=O%3*2/3-1,b=O>2?0:-1,L=[D,b,0,D+2/3,b,0,D+2/3,b+1,0,D,b,0,D+2/3,b+1,0,D,b+1,0];F.set(L,C*T*O),I.set(_,S*T*O);const q=[O,O,O,O,O,O];w.set(q,y*T*O)}const P=new La;P.setAttribute("position",new Yi(F,C)),P.setAttribute("uv",new Yi(I,S)),P.setAttribute("faceIndex",new Yi(w,y)),r.push(new Qi(P,null)),l>pr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function pv(s,e,i){const r=new qi(s,e,i);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function qA(s,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function YA(s,e,i){const r=new Float32Array(kr),l=new oe(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function mv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

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
		`,blending:ba,depthTest:!1,depthWrite:!1})}function gv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function Sc(){return`

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
	`}class Fx extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new wx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new pl(5,5,5),u=new Ji({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:ba});u.uniforms.tEquirect.value=i;const f=new Qi(l,u),h=i.minFilter;return i.minFilter===hr&&(i.minFilter=Ln),new Jb(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(u)}}function ZA(s){let e=new WeakMap,i=new WeakMap,r=null;function l(_,M=!1){return _==null?null:M?f(_):u(_)}function u(_){if(_&&_.isTexture){const M=_.mapping;if(M===Pd||M===Fd)if(e.has(_)){const T=e.get(_).texture;return h(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new Fx(T.height);return C.fromEquirectangularTexture(s,_),e.set(_,C),_.addEventListener("dispose",p),h(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,T=M===Pd||M===Fd,C=M===qr||M===Zs;if(T||C){let S=i.get(_);const y=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new hv(s)),S=T?r.fromEquirectangular(_,S):r.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),S.texture;if(S!==void 0)return S.texture;{const F=_.image;return T&&F&&F.height>0||C&&F&&m(F)?(r===null&&(r=new hv(s)),S=T?r.fromEquirectangular(_):r.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,i.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function h(_,M){return M===Pd?_.mapping=qr:M===Fd&&(_.mapping=Zs),_}function m(_){let M=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&M++;return M===T}function p(_){const M=_.target;M.removeEventListener("dispose",p);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:v}}function KA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ws("WebGLRenderer: "+r+" extension not supported."),l}}}function QA(s,e,i,r){const l={},u=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const M=u.get(_);M&&(e.remove(M),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(v){const _=v.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function p(v){const _=[],M=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const F=M.array;C=M.version;for(let I=0,w=F.length;I<w;I+=3){const P=F[I+0],O=F[I+1],D=F[I+2];_.push(P,O,O,D,D,P)}}else{const F=T.array;C=T.version;for(let I=0,w=F.length/3-1;I<w;I+=3){const P=I+0,O=I+1,D=I+2;_.push(P,O,O,D,D,P)}}const S=new(T.count>=65535?Ax:Tx)(_,1);S.version=C;const y=u.get(v);y&&e.remove(y),u.set(v,S)}function g(v){const _=u.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&p(v)}else p(v);return u.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function JA(s,e,i){let r;function l(v){r=v}let u,f;function h(v){u=v.type,f=v.bytesPerElement}function m(v,_){s.drawElements(r,_,u,v*f),i.update(_,r,1)}function p(v,_,M){M!==0&&(s.drawElementsInstanced(r,_,u,v*f,M),i.update(_,r,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,u,v,0,M);let C=0;for(let S=0;S<M;S++)C+=_[S];i.update(C,r,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function jA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(u/3);break;case s.LINES:i.lines+=h*(u/2);break;case s.LINE_STRIP:i.lines+=h*(u-1);break;case s.LINE_LOOP:i.lines+=h*u;break;case s.POINTS:i.points+=h*u;break;default:bt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function $A(s,e,i){const r=new WeakMap,l=new on;function u(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==v){let q=function(){b.dispose(),r.delete(h),h.removeEventListener("dispose",q)};var M=q;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],F=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),S===!0&&(w=3);let P=h.attributes.position.count*w,O=1;P>e.maxTextureSize&&(O=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*O*4*v),b=new Ex(D,P,O,v);b.type=ki,b.needsUpdate=!0;const L=w*4;for(let G=0;G<v;G++){const Z=y[G],he=F[G],ge=I[G],Y=P*O*4*G;for(let B=0;B<Z.count;B++){const H=B*L;T===!0&&(l.fromBufferAttribute(Z,B),D[Y+H+0]=l.x,D[Y+H+1]=l.y,D[Y+H+2]=l.z,D[Y+H+3]=0),C===!0&&(l.fromBufferAttribute(he,B),D[Y+H+4]=l.x,D[Y+H+5]=l.y,D[Y+H+6]=l.z,D[Y+H+7]=0),S===!0&&(l.fromBufferAttribute(ge,B),D[Y+H+8]=l.x,D[Y+H+9]=l.y,D[Y+H+10]=l.z,D[Y+H+11]=ge.itemSize===4?l.w:1)}}_={count:v,texture:b,size:new Ct(P,O)},r.set(h,_),h.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(s,"morphTargetBaseInfluence",C),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:u}}function eR(s,e,i,r,l){let u=new WeakMap;function f(p){const g=l.render.frame,v=p.geometry,_=e.get(p,v);if(u.get(_)!==g&&(e.update(_),u.set(_,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),u.get(p)!==g&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),u.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;u.get(M)!==g&&(M.update(),u.set(M,g))}return _}function h(){u=new WeakMap}function m(p){const g=p.target;g.removeEventListener("dispose",m),r.releaseStatesOfObject(g),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const tR={[ox]:"LINEAR_TONE_MAPPING",[lx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[cx]:"ACES_FILMIC_TONE_MAPPING",[dx]:"AGX_TONE_MAPPING",[hx]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function nR(s,e,i,r,l,u){const f=new qi(e,i,{type:s,depthBuffer:l,stencilBuffer:u,samples:r?4:0,depthTexture:l?new Ks(e,i):void 0}),h=new qi(e,i,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),m=new La;m.setAttribute("position",new Aa([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Aa([0,2,0,0,2,0],2));const p=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Qi(m,p),v=new Nx(-1,1,1,-1,0,1);let _=null,M=null,T=!1,C,S=null,y=[],F=!1;this.setSize=function(I,w){f.setSize(I,w),h.setSize(I,w);for(let P=0;P<y.length;P++){const O=y[P];O.setSize&&O.setSize(I,w)}},this.setEffects=function(I){y=I,F=y.length>0&&y[0].isRenderPass===!0;const w=f.width,P=f.height;for(let O=0;O<y.length;O++){const D=y[O];D.setSize&&D.setSize(w,P)}},this.begin=function(I,w){if(T||I.toneMapping===Wi&&y.length===0)return!1;if(S=w,w!==null){const P=w.width,O=w.height;(f.width!==P||f.height!==O)&&this.setSize(P,O)}return F===!1&&I.setRenderTarget(f),C=I.toneMapping,I.toneMapping=Wi,!0},this.hasRenderPass=function(){return F},this.end=function(I,w){I.toneMapping=C,T=!0;let P=f,O=h;for(let D=0;D<y.length;D++){const b=y[D];if(b.enabled!==!1&&(b.render(I,O,P,w),b.needsSwap!==!1)){const L=P;P=O,O=L}}if(_!==I.outputColorSpace||M!==I.toneMapping){_=I.outputColorSpace,M=I.toneMapping,p.defines={},Mt.getTransfer(_)===zt&&(p.defines.SRGB_TRANSFER="");const D=tR[M];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,I.setRenderTarget(S),I.render(g,v),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Ix=new In,sp=new Ks(1,1),Bx=new Ex,zx=new yb,Hx=new wx,_v=[],vv=[],xv=new Float32Array(16),Sv=new Float32Array(9),yv=new Float32Array(4);function $s(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let u=_v[l];if(u===void 0&&(u=new Float32Array(l),_v[l]=u),e!==0){r.toArray(u,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(u,h)}return u}function Mn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function En(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function yc(s,e){let i=vv[e];i===void 0&&(i=new Int32Array(e),vv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function iR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function aR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2fv(this.addr,e),En(i,e)}}function rR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Mn(i,e))return;s.uniform3fv(this.addr,e),En(i,e)}}function sR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4fv(this.addr,e),En(i,e)}}function oR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;yv.set(r),s.uniformMatrix2fv(this.addr,!1,yv),En(i,r)}}function lR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;Sv.set(r),s.uniformMatrix3fv(this.addr,!1,Sv),En(i,r)}}function uR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Mn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(i,e)}else{if(Mn(i,r))return;xv.set(r),s.uniformMatrix4fv(this.addr,!1,xv),En(i,r)}}function cR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function fR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2iv(this.addr,e),En(i,e)}}function dR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3iv(this.addr,e),En(i,e)}}function hR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4iv(this.addr,e),En(i,e)}}function pR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function mR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Mn(i,e))return;s.uniform2uiv(this.addr,e),En(i,e)}}function gR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Mn(i,e))return;s.uniform3uiv(this.addr,e),En(i,e)}}function _R(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Mn(i,e))return;s.uniform4uiv(this.addr,e),En(i,e)}}function vR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(sp.compareFunction=i.isReversedDepthBuffer()?Tp:bp,u=sp):u=Ix,i.setTexture2D(e||u,l)}function xR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||zx,l)}function SR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Hx,l)}function yR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Bx,l)}function MR(s){switch(s){case 5126:return iR;case 35664:return aR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return lR;case 35676:return uR;case 5124:case 35670:return cR;case 35667:case 35671:return fR;case 35668:case 35672:return dR;case 35669:case 35673:return hR;case 5125:return pR;case 36294:return mR;case 36295:return gR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return vR;case 35679:case 36299:case 36307:return xR;case 35680:case 36300:case 36308:case 36293:return SR;case 36289:case 36303:case 36311:case 36292:return yR}}function ER(s,e){s.uniform1fv(this.addr,e)}function bR(s,e){const i=$s(e,this.size,2);s.uniform2fv(this.addr,i)}function TR(s,e){const i=$s(e,this.size,3);s.uniform3fv(this.addr,i)}function AR(s,e){const i=$s(e,this.size,4);s.uniform4fv(this.addr,i)}function RR(s,e){const i=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function CR(s,e){const i=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function wR(s,e){const i=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function DR(s,e){s.uniform1iv(this.addr,e)}function UR(s,e){s.uniform2iv(this.addr,e)}function LR(s,e){s.uniform3iv(this.addr,e)}function NR(s,e){s.uniform4iv(this.addr,e)}function OR(s,e){s.uniform1uiv(this.addr,e)}function PR(s,e){s.uniform2uiv(this.addr,e)}function FR(s,e){s.uniform3uiv(this.addr,e)}function IR(s,e){s.uniform4uiv(this.addr,e)}function BR(s,e,i){const r=this.cache,l=e.length,u=yc(i,l);Mn(r,u)||(s.uniform1iv(this.addr,u),En(r,u));let f;this.type===s.SAMPLER_2D_SHADOW?f=sp:f=Ix;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,u[h])}function zR(s,e,i){const r=this.cache,l=e.length,u=yc(i,l);Mn(r,u)||(s.uniform1iv(this.addr,u),En(r,u));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||zx,u[f])}function HR(s,e,i){const r=this.cache,l=e.length,u=yc(i,l);Mn(r,u)||(s.uniform1iv(this.addr,u),En(r,u));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||Hx,u[f])}function GR(s,e,i){const r=this.cache,l=e.length,u=yc(i,l);Mn(r,u)||(s.uniform1iv(this.addr,u),En(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Bx,u[f])}function VR(s){switch(s){case 5126:return ER;case 35664:return bR;case 35665:return TR;case 35666:return AR;case 35674:return RR;case 35675:return CR;case 35676:return wR;case 5124:case 35670:return DR;case 35667:case 35671:return UR;case 35668:case 35672:return LR;case 35669:case 35673:return NR;case 5125:return OR;case 36294:return PR;case 36295:return FR;case 36296:return IR;case 35678:case 36198:case 36298:case 36306:case 35682:return BR;case 35679:case 36299:case 36307:return zR;case 35680:case 36300:case 36308:case 36293:return HR;case 36289:case 36303:case 36311:case 36292:return GR}}class kR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=MR(i.type)}}class XR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=VR(i.type)}}class WR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function Mv(s,e){s.seq.push(e),s.map[e.id]=e}function qR(s,e,i){const r=s.name,l=r.length;for(hh.lastIndex=0;;){const u=hh.exec(r),f=hh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Mv(i,p===void 0?new kR(h,s,e):new XR(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new WR(h),Mv(i,v)),i=v}}}class ac{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);qR(h,m,this)}const l=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,f=i.length;u!==f;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function Ev(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const YR=37297;let ZR=0;function KR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let f=l;f<u;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const bv=new st;function QR(s){Mt._getMatrix(bv,Mt.workingColorSpace,s);const e=`mat3( ${bv.elements.map(i=>i.toFixed(4))} )`;switch(Mt.getTransfer(s)){case cc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+KR(s.getShaderSource(e),h)}else return u}function JR(s,e){const i=QR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const jR={[ox]:"Linear",[lx]:"Reinhard",[ux]:"Cineon",[cx]:"ACESFilmic",[dx]:"AgX",[hx]:"Neutral",[fx]:"Custom"};function $R(s,e){const i=jR[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ku=new oe;function eC(){Mt.getLuminanceCoefficients(Ku);const s=Ku.x.toFixed(4),e=Ku.y.toFixed(4),i=Ku.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function nC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function iC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(e,l),f=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),i[f]={type:u.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function il(s){return s!==""}function Av(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aC=/^[ \t]*#include +<([\w\d./]+)>/gm;function op(s){return s.replace(aC,sC)}const rC=new Map;function sC(s,e){let i=ct[e];if(i===void 0){const r=rC.get(e);if(r!==void 0)i=ct[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return op(i)}const oC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(s){return s.replace(oC,lC)}function lC(s,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function wv(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const uC={[$u]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function cC(s){return uC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fC={[qr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function dC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":fC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const hC={[Zs]:"ENVMAP_MODE_REFRACTION"};function pC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":hC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mC={[sx]:"ENVMAP_BLENDING_MULTIPLY",[eb]:"ENVMAP_BLENDING_MIX",[tb]:"ENVMAP_BLENDING_ADD"};function gC(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":mC[s.combine]||"ENVMAP_BLENDING_NONE"}function _C(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function vC(s,e,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=cC(i),p=dC(i),g=pC(i),v=gC(i),_=_C(i),M=tC(i),T=nC(u),C=l.createProgram();let S,y,F=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(il).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(il).join(`
`),y.length>0&&(y+=`
`)):(S=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),y=[wv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ct.tonemapping_pars_fragment:"",i.toneMapping!==Wi?$R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,JR("linearToOutputTexel",i.outputColorSpace),eC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(il).join(`
`)),f=op(f),f=Av(f,i),f=Rv(f,i),h=op(h),h=Av(h,i),h=Rv(h,i),f=Cv(f),h=Cv(h),i.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const I=F+S+f,w=F+y+h,P=Ev(l,l.VERTEX_SHADER,I),O=Ev(l,l.FRAGMENT_SHADER,w);l.attachShader(C,P),l.attachShader(C,O),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function D(G){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",he=l.getShaderInfoLog(P)||"",ge=l.getShaderInfoLog(O)||"",Y=Z.trim(),B=he.trim(),H=ge.trim();let ee=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,C,P,O);else{const be=Tv(l,P,"vertex"),N=Tv(l,O,"fragment");bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Y+`
`+be+`
`+N)}else Y!==""?it("WebGLProgram: Program Info Log:",Y):(B===""||H==="")&&(_e=!1);_e&&(G.diagnostics={runnable:ee,programLog:Y,vertexShader:{log:B,prefix:S},fragmentShader:{log:H,prefix:y}})}l.deleteShader(P),l.deleteShader(O),b=new ac(l,C),L=iC(l,C)}let b;this.getUniforms=function(){return b===void 0&&D(this),b};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(C,YR)),q},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=O,this}let xC=0;class SC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,r){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new yC(e),i.set(e,r)),r}}class yC{constructor(e){this.id=xC++,this.code=e,this.usedTimes=0}}function MC(s){return s===Yr||s===oc||s===lc}function EC(s,e,i,r,l,u){const f=new Rp,h=new SC,m=new Set,p=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,L,q,G,Z,he){const ge=G.fog,Y=Z.geometry,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,H=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ee=e.get(b.envMap||B,H),_e=ee&&ee.mapping===vc?ee.image.height:null,be=M[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&it("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Q=N!==void 0?N.length:0;let Ee=0;Y.morphAttributes.position!==void 0&&(Ee=1),Y.morphAttributes.normal!==void 0&&(Ee=2),Y.morphAttributes.color!==void 0&&(Ee=3);let Ce,Fe,ie,Se;if(be){const Ve=Vi[be];Ce=Ve.vertexShader,Fe=Ve.fragmentShader}else{Ce=b.vertexShader,Fe=b.fragmentShader;const Ve=h.getVertexShaderStage(b),Qt=h.getFragmentShaderStage(b);h.update(b,Ve,Qt),ie=Ve.id,Se=Qt.id}const Me=s.getRenderTarget(),He=s.state.buffers.depth.getReversed(),nt=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Yt=!!b.map,ft=!!b.matcap,xt=!!ee,St=!!b.aoMap,ht=!!b.lightMap,en=!!b.bumpMap&&b.wireframe===!1,tn=!!b.normalMap,nn=!!b.displacementMap,ln=!!b.emissiveMap,qt=!!b.metalnessMap,an=!!b.roughnessMap,W=b.anisotropy>0,Ht=b.clearcoat>0,wt=b.dispersion>0,U=b.iridescence>0,E=b.sheen>0,J=b.transmission>0,ae=W&&!!b.anisotropyMap,fe=Ht&&!!b.clearcoatMap,Te=Ht&&!!b.clearcoatNormalMap,De=Ht&&!!b.clearcoatRoughnessMap,ce=U&&!!b.iridescenceMap,de=U&&!!b.iridescenceThicknessMap,Re=E&&!!b.sheenColorMap,Be=E&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Ue=!!b.specularColorMap,Qe=!!b.specularIntensityMap,je=J&&!!b.transmissionMap,at=J&&!!b.thicknessMap,k=!!b.gradientMap,Ae=!!b.alphaMap,me=b.alphaTest>0,we=!!b.alphaHash,Ie=!!b.extensions;let ye=Wi;b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Ye={shaderID:be,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Fe,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:nt,instancingColor:nt&&Z.instanceColor!==null,instancingMorph:nt&&Z.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Yt,matcap:ft,envMap:xt,envMapMode:xt&&ee.mapping,envMapCubeUVHeight:_e,aoMap:St,lightMap:ht,bumpMap:en,normalMap:tn,displacementMap:nn,emissiveMap:ln,normalMapObjectSpace:tn&&b.normalMapType===ab,normalMapTangentSpace:tn&&b.normalMapType===I_,packedNormalMap:tn&&b.normalMapType===I_&&MC(b.normalMap.format),metalnessMap:qt,roughnessMap:an,anisotropy:W,anisotropyMap:ae,clearcoat:Ht,clearcoatMap:fe,clearcoatNormalMap:Te,clearcoatRoughnessMap:De,dispersion:wt,iridescence:U,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:E,sheenColorMap:Re,sheenRoughnessMap:Be,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:Qe,transmission:J,transmissionMap:je,thicknessMap:at,gradientMap:k,opaque:b.transparent===!1&&b.blending===Xs&&b.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:we,combine:b.combine,mapUv:Yt&&T(b.map.channel),aoMapUv:St&&T(b.aoMap.channel),lightMapUv:ht&&T(b.lightMap.channel),bumpMapUv:en&&T(b.bumpMap.channel),normalMapUv:tn&&T(b.normalMap.channel),displacementMapUv:nn&&T(b.displacementMap.channel),emissiveMapUv:ln&&T(b.emissiveMap.channel),metalnessMapUv:qt&&T(b.metalnessMap.channel),roughnessMapUv:an&&T(b.roughnessMap.channel),anisotropyMapUv:ae&&T(b.anisotropyMap.channel),clearcoatMapUv:fe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&T(b.sheenRoughnessMap.channel),specularMapUv:Ne&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:Qe&&T(b.specularIntensityMap.channel),transmissionMapUv:je&&T(b.transmissionMap.channel),thicknessMapUv:at&&T(b.thicknessMap.channel),alphaMapUv:Ae&&T(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(tn||W),vertexNormals:!!Y.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!Y.attributes.uv&&(Yt||Ae),fog:!!ge,useFog:b.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||Y.attributes.normal===void 0&&tn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:He,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:he.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Yt&&b.map.isVideoTexture===!0&&Mt.getTransfer(b.map.colorSpace)===zt,decodeVideoTextureEmissive:ln&&b.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(b.emissiveMap.colorSpace)===zt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ma,flipSided:b.side===Zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||Je)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function S(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)L.push(q),L.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(y(L,b),F(L,b),L.push(s.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function y(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function F(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),L.packedNormalMap&&f.enable(22),L.vertexNormals&&f.enable(23),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),L.numLightProbeGrids>0&&f.enable(22),L.hasPositionAttribute&&f.enable(23),b.push(f.mask)}function I(b){const L=M[b.type];let q;if(L){const G=Vi[L];q=Gb.clone(G.uniforms)}else q=b.uniforms;return q}function w(b,L){let q=g.get(L);return q!==void 0?++q.usedTimes:(q=new vC(s,L,b,l),p.push(q),g.set(L,q)),q}function P(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),g.delete(b.cacheKey),b.destroy()}}function O(b){h.remove(b)}function D(){h.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:I,acquireProgram:w,releaseProgram:P,releaseShaderCache:O,programs:p,dispose:D}}function bC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function u(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function TC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Dv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Uv(){const s=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function h(_,M,T,C,S,y){let F=s[e];return F===void 0?(F={id:_.id,object:_,geometry:M,material:T,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:S,group:y},s[e]=F):(F.id=_.id,F.object=_,F.geometry=M,F.material=T,F.materialVariant=f(_),F.groupOrder=C,F.renderOrder=_.renderOrder,F.z=S,F.group=y),e++,F}function m(_,M,T,C,S,y){const F=h(_,M,T,C,S,y);T.transmission>0?r.push(F):T.transparent===!0?l.push(F):i.push(F)}function p(_,M,T,C,S,y){const F=h(_,M,T,C,S,y);T.transmission>0?r.unshift(F):T.transparent===!0?l.unshift(F):i.unshift(F)}function g(_,M,T){i.length>1&&i.sort(_||TC),r.length>1&&r.sort(M||Dv),l.length>1&&l.sort(M||Dv),T&&(i.reverse(),r.reverse(),l.reverse())}function v(){for(let _=e,M=s.length;_<M;_++){const T=s[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:m,unshift:p,finish:v,sort:g}}function AC(){let s=new WeakMap;function e(r,l){const u=s.get(r);let f;return u===void 0?(f=new Uv,s.set(r,[f])):l>=u.length?(f=new Uv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function RC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new oe,color:new Ut};break;case"SpotLight":i={position:new oe,direction:new oe,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new oe,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":i={direction:new oe,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":i={color:new Ut,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return s[e.id]=i,i}}}function CC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let wC=0;function DC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UC(s){const e=new RC,i=CC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new oe);const l=new oe,u=new fn,f=new fn;function h(p){let g=0,v=0,_=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,T=0,C=0,S=0,y=0,F=0,I=0,w=0,P=0,O=0,D=0;p.sort(DC);for(let L=0,q=p.length;L<q;L++){const G=p[L],Z=G.color,he=G.intensity,ge=G.distance;let Y=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Yr?Y=G.shadow.map.texture:Y=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)g+=Z.r*he,v+=Z.g*he,_+=Z.b*he;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],he);D++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[M]=ee,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=G.shadow.matrix,F++}r.directional[M]=B,M++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Z).multiplyScalar(he),B.distance=ge,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[C]=B;const H=G.shadow;if(G.map&&(r.spotLightMap[P]=G.map,P++,H.updateMatrices(G),G.castShadow&&O++),r.spotLightMatrix[C]=H.matrix,G.castShadow){const ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[C]=ee,r.spotShadowMap[C]=Y,w++}C++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(Z).multiplyScalar(he),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=B,S++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const H=G.shadow,ee=i.get(G);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[T]=ee,r.pointShadowMap[T]=Y,r.pointShadowMatrix[T]=G.shadow.matrix,I++}r.point[T]=B,T++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(he),B.groundColor.copy(G.groundColor).multiplyScalar(he),r.hemi[y]=B,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==M||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==S||b.hemiLength!==y||b.numDirectionalShadows!==F||b.numPointShadows!==I||b.numSpotShadows!==w||b.numSpotMaps!==P||b.numLightProbes!==D)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=w+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=D,b.directionalLength=M,b.pointLength=T,b.spotLength=C,b.rectAreaLength=S,b.hemiLength=y,b.numDirectionalShadows=F,b.numPointShadows=I,b.numSpotShadows=w,b.numSpotMaps=P,b.numLightProbes=D,r.version=wC++)}function m(p,g){let v=0,_=0,M=0,T=0,C=0;const S=g.matrixWorldInverse;for(let y=0,F=p.length;y<F;y++){const I=p[y];if(I.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(I.isSpotLight){const w=r.spot[M];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),M++}else if(I.isRectAreaLight){const w=r.rectArea[T];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),f.identity(),u.copy(I.matrixWorld),u.premultiply(S),f.extractRotation(u),w.halfWidth.set(I.width*.5,0,0),w.halfHeight.set(0,I.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),T++}else if(I.isPointLight){const w=r.point[_];w.position.setFromMatrixPosition(I.matrixWorld),w.position.applyMatrix4(S),_++}else if(I.isHemisphereLight){const w=r.hemi[C];w.direction.setFromMatrixPosition(I.matrixWorld),w.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:r}}function Lv(s){const e=new UC(s),i=[],r=[],l=[];function u(_){v.camera=_,i.length=0,r.length=0,l.length=0}function f(_){i.push(_)}function h(_){r.push(_)}function m(_){l.push(_)}function p(){e.setup(i)}function g(_){e.setupView(i,_)}const v={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:v,setupLights:p,setupLightsView:g,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function LC(s){let e=new WeakMap;function i(l,u=0){const f=e.get(l);let h;return f===void 0?(h=new Lv(s),e.set(l,[h])):u>=f.length?(h=new Lv(s),f.push(h)):h=f[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const NC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PC=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],FC=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Nv=new fn,el=new oe,ph=new oe;function IC(s,e,i){let r=new Cx;const l=new Ct,u=new Ct,f=new on,h=new Wb,m=new qb,p={},g=i.maxTextureSize,v={[gr]:Zn,[Zn]:gr,[Ma]:Ma},_=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:NC,fragmentShader:OC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new La;T.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Qi(T,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$u;let y=this.type;this.render=function(O,D,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===PE&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$u);const L=s.getRenderTarget(),q=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(ba),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const he=y!==this.type;he&&D.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(Y=>Y.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,Y=O.length;ge<Y;ge++){const B=O[ge],H=B.shadow;if(H===void 0){it("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),u.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/ee.x),l.x=u.x*ee.x,H.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/ee.y),l.y=u.y*ee.y,H.mapSize.y=u.y));const _e=s.state.buffers.depth.getReversed();if(H.camera._reversedDepth=_e,H.map===null||he===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===tl){if(B.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(l.x,l.y,{format:Yr,type:Ca,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new Ks(l.x,l.y,ki),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=wa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else B.isPointLight?(H.map=new Fx(l.x),H.map.depthTexture=new zb(l.x,Ki)):(H.map=new qi(l.x,l.y),H.map.depthTexture=new Ks(l.x,l.y,Ki)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=wa,this.type===$u?(H.map.depthTexture.compareFunction=_e?Tp:bp,H.map.depthTexture.minFilter=Ln,H.map.depthTexture.magFilter=Ln):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un);H.camera.updateProjectionMatrix()}const be=H.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<be;N++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,N),s.clear();else{N===0&&(s.setRenderTarget(H.map),s.clear());const Q=H.getViewport(N);f.set(u.x*Q.x,u.y*Q.y,u.x*Q.z,u.y*Q.w),Z.viewport(f)}if(B.isPointLight){const Q=H.camera,Ee=H.matrix,Ce=B.distance||Q.far;Ce!==Q.far&&(Q.far=Ce,Q.updateProjectionMatrix()),el.setFromMatrixPosition(B.matrixWorld),Q.position.copy(el),ph.copy(Q.position),ph.add(PC[N]),Q.up.copy(FC[N]),Q.lookAt(ph),Q.updateMatrixWorld(),Ee.makeTranslation(-el.x,-el.y,-el.z),Nv.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Nv,Q.coordinateSystem,Q.reversedDepth)}else H.updateMatrices(B);r=H.getFrustum(),w(D,b,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===tl&&F(H,b),H.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(L,q,G)};function F(O,D){const b=e.update(C);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new qi(l.x,l.y,{format:Yr,type:Ca})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(D,null,b,_,C,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(D,null,b,M,C,null)}function I(O,D,b,L){let q=null;const G=b.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)q=G;else if(q=b.isPointLight===!0?m:h,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const Z=q.uuid,he=D.uuid;let ge=p[Z];ge===void 0&&(ge={},p[Z]=ge);let Y=ge[he];Y===void 0&&(Y=q.clone(),ge[he]=Y,D.addEventListener("dispose",P)),q=Y}if(q.visible=D.visible,q.wireframe=D.wireframe,L===tl?q.side=D.shadowSide!==null?D.shadowSide:D.side:q.side=D.shadowSide!==null?D.shadowSide:v[D.side],q.alphaMap=D.alphaMap,q.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,q.map=D.map,q.clipShadows=D.clipShadows,q.clippingPlanes=D.clippingPlanes,q.clipIntersection=D.clipIntersection,q.displacementMap=D.displacementMap,q.displacementScale=D.displacementScale,q.displacementBias=D.displacementBias,q.wireframeLinewidth=D.wireframeLinewidth,q.linewidth=D.linewidth,b.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Z=s.properties.get(q);Z.light=b}return q}function w(O,D,b,L,q){if(O.visible===!1)return;if(O.layers.test(D.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&q===tl)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,O.matrixWorld);const he=e.update(O),ge=O.material;if(Array.isArray(ge)){const Y=he.groups;for(let B=0,H=Y.length;B<H;B++){const ee=Y[B],_e=ge[ee.materialIndex];if(_e&&_e.visible){const be=I(O,_e,L,q);O.onBeforeShadow(s,O,D,b,he,be,ee),s.renderBufferDirect(b,null,he,be,O,ee),O.onAfterShadow(s,O,D,b,he,be,ee)}}}else if(ge.visible){const Y=I(O,ge,L,q);O.onBeforeShadow(s,O,D,b,he,Y,null),s.renderBufferDirect(b,null,he,Y,O,null),O.onAfterShadow(s,O,D,b,he,Y,null)}}const Z=O.children;for(let he=0,ge=Z.length;he<ge;he++)w(Z[he],D,b,L,q)}function P(O){O.target.removeEventListener("dispose",P);for(const b in p){const L=p[b],q=O.target.uuid;q in L&&(L[q].dispose(),delete L[q])}}}function BC(s,e){function i(){let k=!1;const Ae=new on;let me=null;const we=new on(0,0,0,0);return{setMask:function(Ie){me!==Ie&&!k&&(s.colorMask(Ie,Ie,Ie,Ie),me=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,ye,Ye,Ve,Qt){Qt===!0&&(Ie*=Ve,ye*=Ve,Ye*=Ve),Ae.set(Ie,ye,Ye,Ve),we.equals(Ae)===!1&&(s.clearColor(Ie,ye,Ye,Ve),we.copy(Ae))},reset:function(){k=!1,me=null,we.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,me=null,we=null,Ie=null;return{setReversed:function(ye){if(Ae!==ye){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ae=ye;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(ye){ye?Me(s.DEPTH_TEST):He(s.DEPTH_TEST)},setMask:function(ye){me!==ye&&!k&&(s.depthMask(ye),me=ye)},setFunc:function(ye){if(Ae&&(ye=pb[ye]),we!==ye){switch(ye){case xh:s.depthFunc(s.NEVER);break;case Sh:s.depthFunc(s.ALWAYS);break;case yh:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case Mh:s.depthFunc(s.EQUAL);break;case Eh:s.depthFunc(s.GEQUAL);break;case bh:s.depthFunc(s.GREATER);break;case Th:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Ie!==ye&&(Ie=ye,Ae&&(ye=1-ye),s.clearDepth(ye))},reset:function(){k=!1,me=null,we=null,Ie=null,Ae=!1}}}function l(){let k=!1,Ae=null,me=null,we=null,Ie=null,ye=null,Ye=null,Ve=null,Qt=null;return{setTest:function(Nt){k||(Nt?Me(s.STENCIL_TEST):He(s.STENCIL_TEST))},setMask:function(Nt){Ae!==Nt&&!k&&(s.stencilMask(Nt),Ae=Nt)},setFunc:function(Nt,Kn,Qn){(me!==Nt||we!==Kn||Ie!==Qn)&&(s.stencilFunc(Nt,Kn,Qn),me=Nt,we=Kn,Ie=Qn)},setOp:function(Nt,Kn,Qn){(ye!==Nt||Ye!==Kn||Ve!==Qn)&&(s.stencilOp(Nt,Kn,Qn),ye=Nt,Ye=Kn,Ve=Qn)},setLocked:function(Nt){k=Nt},setClear:function(Nt){Qt!==Nt&&(s.clearStencil(Nt),Qt=Nt)},reset:function(){k=!1,Ae=null,me=null,we=null,Ie=null,ye=null,Ye=null,Ve=null,Qt=null}}}const u=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},_={},M=new WeakMap,T=[],C=null,S=!1,y=null,F=null,I=null,w=null,P=null,O=null,D=null,b=new Ut(0,0,0),L=0,q=!1,G=null,Z=null,he=null,ge=null,Y=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const _e=s.getParameter(s.VERSION);_e.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(_e)[1]),H=ee>=1):_e.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(_e)[1]),H=ee>=2);let be=null,N={};const Q=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Ce=new on().fromArray(Q),Fe=new on().fromArray(Ee);function ie(k,Ae,me,we){const Ie=new Uint8Array(4),ye=s.createTexture();s.bindTexture(k,ye),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<me;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Ae+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return ye}const Se={};Se[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Me(s.DEPTH_TEST),f.setFunc(Ys),en(!1),tn(N_),Me(s.CULL_FACE),St(ba);function Me(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function He(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function nt(k,Ae){return _[k]!==Ae?(s.bindFramebuffer(k,Ae),_[k]=Ae,k===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ae),k===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(k,Ae){let me=T,we=!1;if(k){me=M.get(Ae),me===void 0&&(me=[],M.set(Ae,me));const Ie=k.textures;if(me.length!==Ie.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ye=Ie.length;ye<Ye;ye++)me[ye]=s.COLOR_ATTACHMENT0+ye;me.length=Ie.length,we=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,we=!0);we&&s.drawBuffers(me)}function Yt(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const ft={[Vr]:s.FUNC_ADD,[IE]:s.FUNC_SUBTRACT,[BE]:s.FUNC_REVERSE_SUBTRACT};ft[zE]=s.MIN,ft[HE]=s.MAX;const xt={[GE]:s.ZERO,[VE]:s.ONE,[kE]:s.SRC_COLOR,[_h]:s.SRC_ALPHA,[KE]:s.SRC_ALPHA_SATURATE,[YE]:s.DST_COLOR,[WE]:s.DST_ALPHA,[XE]:s.ONE_MINUS_SRC_COLOR,[vh]:s.ONE_MINUS_SRC_ALPHA,[ZE]:s.ONE_MINUS_DST_COLOR,[qE]:s.ONE_MINUS_DST_ALPHA,[QE]:s.CONSTANT_COLOR,[JE]:s.ONE_MINUS_CONSTANT_COLOR,[jE]:s.CONSTANT_ALPHA,[$E]:s.ONE_MINUS_CONSTANT_ALPHA};function St(k,Ae,me,we,Ie,ye,Ye,Ve,Qt,Nt){if(k===ba){S===!0&&(He(s.BLEND),S=!1);return}if(S===!1&&(Me(s.BLEND),S=!0),k!==FE){if(k!==y||Nt!==q){if((F!==Vr||P!==Vr)&&(s.blendEquation(s.FUNC_ADD),F=Vr,P=Vr),Nt)switch(k){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case O_:s.blendFunc(s.ONE,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case F_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:bt("WebGLState: Invalid blending: ",k);break}else switch(k){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case O_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case P_:bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F_:bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bt("WebGLState: Invalid blending: ",k);break}I=null,w=null,O=null,D=null,b.set(0,0,0),L=0,y=k,q=Nt}return}Ie=Ie||Ae,ye=ye||me,Ye=Ye||we,(Ae!==F||Ie!==P)&&(s.blendEquationSeparate(ft[Ae],ft[Ie]),F=Ae,P=Ie),(me!==I||we!==w||ye!==O||Ye!==D)&&(s.blendFuncSeparate(xt[me],xt[we],xt[ye],xt[Ye]),I=me,w=we,O=ye,D=Ye),(Ve.equals(b)===!1||Qt!==L)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Qt),b.copy(Ve),L=Qt),y=k,q=!1}function ht(k,Ae){k.side===Ma?He(s.CULL_FACE):Me(s.CULL_FACE);let me=k.side===Zn;Ae&&(me=!me),en(me),k.blending===Xs&&k.transparent===!1?St(ba):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const we=k.stencilWrite;h.setTest(we),we&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ln(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):He(s.SAMPLE_ALPHA_TO_COVERAGE)}function en(k){G!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),G=k)}function tn(k){k!==NE?(Me(s.CULL_FACE),k!==Z&&(k===N_?s.cullFace(s.BACK):k===OE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):He(s.CULL_FACE),Z=k}function nn(k){k!==he&&(H&&s.lineWidth(k),he=k)}function ln(k,Ae,me){k?(Me(s.POLYGON_OFFSET_FILL),(ge!==Ae||Y!==me)&&(ge=Ae,Y=me,f.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):He(s.POLYGON_OFFSET_FILL)}function qt(k){k?Me(s.SCISSOR_TEST):He(s.SCISSOR_TEST)}function an(k){k===void 0&&(k=s.TEXTURE0+B-1),be!==k&&(s.activeTexture(k),be=k)}function W(k,Ae,me){me===void 0&&(be===null?me=s.TEXTURE0+B-1:me=be);let we=N[me];we===void 0&&(we={type:void 0,texture:void 0},N[me]=we),(we.type!==k||we.texture!==Ae)&&(be!==me&&(s.activeTexture(me),be=me),s.bindTexture(k,Ae||Se[k]),we.type=k,we.texture=Ae)}function Ht(){const k=N[be];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function E(){try{s.texSubImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function J(){try{s.texSubImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function Te(){try{s.texStorage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function De(){try{s.texStorage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function ce(){try{s.texImage2D(...arguments)}catch(k){bt("WebGLState:",k)}}function de(){try{s.texImage3D(...arguments)}catch(k){bt("WebGLState:",k)}}function Re(k){return v[k]!==void 0?v[k]:s.getParameter(k)}function Be(k,Ae){v[k]!==Ae&&(s.pixelStorei(k,Ae),v[k]=Ae)}function Ne(k){Ce.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ce.copy(k))}function Ue(k){Fe.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Fe.copy(k))}function Qe(k,Ae){let me=p.get(Ae);me===void 0&&(me=new WeakMap,p.set(Ae,me));let we=me.get(k);we===void 0&&(we=s.getUniformBlockIndex(Ae,k.name),me.set(k,we))}function je(k,Ae){const we=p.get(Ae).get(k);m.get(Ae)!==we&&(s.uniformBlockBinding(Ae,we,k.__bindingPointIndex),m.set(Ae,we))}function at(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),g={},v={},be=null,N={},_={},M=new WeakMap,T=[],C=null,S=!1,y=null,F=null,I=null,w=null,P=null,O=null,D=null,b=new Ut(0,0,0),L=0,q=!1,G=null,Z=null,he=null,ge=null,Y=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),h.reset()}return{buffers:{color:u,depth:f,stencil:h},enable:Me,disable:He,bindFramebuffer:nt,drawBuffers:Je,useProgram:Yt,setBlending:St,setMaterial:ht,setFlipSided:en,setCullFace:tn,setLineWidth:nn,setPolygonOffset:ln,setScissorTest:qt,activeTexture:an,bindTexture:W,unbindTexture:Ht,compressedTexImage2D:wt,compressedTexImage3D:U,texImage2D:ce,texImage3D:de,pixelStorei:Be,getParameter:Re,updateUBOMapping:Qe,uniformBlockBinding:je,texStorage2D:Te,texStorage3D:De,texSubImage2D:E,texSubImage3D:J,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Ne,viewport:Ue,reset:at}}function zC(s,e,i,r,l,u,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ct,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return T?new OffscreenCanvas(U,E):ol("canvas")}function S(U,E,J){let ae=1;const fe=wt(U);if((fe.width>J||fe.height>J)&&(ae=J/Math.max(fe.width,fe.height)),ae<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Te=Math.floor(ae*fe.width),De=Math.floor(ae*fe.height);_===void 0&&(_=C(Te,De));const ce=E?C(Te,De):_;return ce.width=Te,ce.height=De,ce.getContext("2d").drawImage(U,0,0,Te,De),it("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Te+"x"+De+")."),ce}else return"data"in U&&it("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),U;return U}function y(U){return U.generateMipmaps}function F(U){s.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,E,J,ae,fe,Te=!1){if(U!==null){if(s[U]!==void 0)return s[U];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let De;ae&&(De=e.get("EXT_texture_norm16"),De||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===s.RED&&(J===s.FLOAT&&(ce=s.R32F),J===s.HALF_FLOAT&&(ce=s.R16F),J===s.UNSIGNED_BYTE&&(ce=s.R8),J===s.UNSIGNED_SHORT&&De&&(ce=De.R16_EXT),J===s.SHORT&&De&&(ce=De.R16_SNORM_EXT)),E===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.R8UI),J===s.UNSIGNED_SHORT&&(ce=s.R16UI),J===s.UNSIGNED_INT&&(ce=s.R32UI),J===s.BYTE&&(ce=s.R8I),J===s.SHORT&&(ce=s.R16I),J===s.INT&&(ce=s.R32I)),E===s.RG&&(J===s.FLOAT&&(ce=s.RG32F),J===s.HALF_FLOAT&&(ce=s.RG16F),J===s.UNSIGNED_BYTE&&(ce=s.RG8),J===s.UNSIGNED_SHORT&&De&&(ce=De.RG16_EXT),J===s.SHORT&&De&&(ce=De.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RG8UI),J===s.UNSIGNED_SHORT&&(ce=s.RG16UI),J===s.UNSIGNED_INT&&(ce=s.RG32UI),J===s.BYTE&&(ce=s.RG8I),J===s.SHORT&&(ce=s.RG16I),J===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),J===s.UNSIGNED_INT&&(ce=s.RGB32UI),J===s.BYTE&&(ce=s.RGB8I),J===s.SHORT&&(ce=s.RGB16I),J===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),J===s.UNSIGNED_INT&&(ce=s.RGBA32UI),J===s.BYTE&&(ce=s.RGBA8I),J===s.SHORT&&(ce=s.RGBA16I),J===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(J===s.UNSIGNED_SHORT&&De&&(ce=De.RGB16_EXT),J===s.SHORT&&De&&(ce=De.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const de=Te?cc:Mt.getTransfer(fe);J===s.FLOAT&&(ce=s.RGBA32F),J===s.HALF_FLOAT&&(ce=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ce=de===zt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&De&&(ce=De.RGBA16_EXT),J===s.SHORT&&De&&(ce=De.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(U,E){let J;return U?E===null||E===Ki||E===sl?J=s.DEPTH24_STENCIL8:E===ki?J=s.DEPTH32F_STENCIL8:E===rl&&(J=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ki||E===sl?J=s.DEPTH_COMPONENT24:E===ki?J=s.DEPTH_COMPONENT32F:E===rl&&(J=s.DEPTH_COMPONENT16),J}function O(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function D(U){const E=U.target;E.removeEventListener("dispose",D),L(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&v.delete(E)}function b(U){const E=U.target;E.removeEventListener("dispose",b),G(E)}function L(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,ae=M.get(J);if(ae){const fe=ae[E.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&q(U),Object.keys(ae).length===0&&M.delete(J)}r.remove(U)}function q(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const J=U.source,ae=M.get(J);delete ae[E.__cacheKey],f.memory.textures--}function G(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let fe=0;fe<E.__webglFramebuffer[ae].length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[ae][fe]);else s.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)s.deleteFramebuffer(E.__webglFramebuffer[ae]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let ae=0,fe=J.length;ae<fe;ae++){const Te=r.get(J[ae]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),f.memory.textures--),r.remove(J[ae])}r.remove(U)}let Z=0;function he(){Z=0}function ge(){return Z}function Y(U){Z=U}function B(){const U=Z;return U>=l.maxTextures&&it("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Z+=1,U}function H(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ee(U,E){const J=r.get(U);if(U.isVideoTexture&&W(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const ae=U.image;if(ae===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{He(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+E)}function _e(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){He(J,U,E);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+E)}function be(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){He(J,U,E);return}i.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+E)}function N(U,E){const J=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&J.__version!==U.version){nt(J,U,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+E)}const Q={[Ah]:s.REPEAT,[Ea]:s.CLAMP_TO_EDGE,[Rh]:s.MIRRORED_REPEAT},Ee={[Un]:s.NEAREST,[nb]:s.NEAREST_MIPMAP_NEAREST,[Cu]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Id]:s.LINEAR_MIPMAP_NEAREST,[hr]:s.LINEAR_MIPMAP_LINEAR},Ce={[rb]:s.NEVER,[cb]:s.ALWAYS,[sb]:s.LESS,[bp]:s.LEQUAL,[ob]:s.EQUAL,[Tp]:s.GEQUAL,[lb]:s.GREATER,[ub]:s.NOTEQUAL};function Fe(U,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Id||E.magFilter===Cu||E.magFilter===hr||E.minFilter===Ln||E.minFilter===Id||E.minFilter===Cu||E.minFilter===hr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,Q[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,Q[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,Q[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Ee[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Ee[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Cu&&E.minFilter!==hr||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ie(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",D));const ae=E.source;let fe=M.get(ae);fe===void 0&&(fe={},M.set(ae,fe));const Te=H(E);if(Te!==U.__cacheKey){fe[Te]===void 0&&(fe[Te]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,J=!0),fe[Te].usedTimes++;const De=fe[U.__cacheKey];De!==void 0&&(fe[U.__cacheKey].usedTimes--,De.usedTimes===0&&q(E)),U.__cacheKey=Te,U.__webglTexture=fe[Te].texture}return J}function Se(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Me(U,E,J,ae){const Te=U.updateRanges;if(Te.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,J,ae,E.data);else{Te.sort((Be,Ne)=>Be.start-Ne.start);let De=0;for(let Be=1;Be<Te.length;Be++){const Ne=Te[De],Ue=Te[Be],Qe=Ne.start+Ne.count,je=Se(Ue.start,E.width,4),at=Se(Ne.start,E.width,4);Ue.start<=Qe+1&&je===at&&Se(Ue.start+Ue.count-1,E.width,4)===je?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++De,Te[De]=Ue)}Te.length=De+1;const ce=i.getParameter(s.UNPACK_ROW_LENGTH),de=i.getParameter(s.UNPACK_SKIP_PIXELS),Re=i.getParameter(s.UNPACK_SKIP_ROWS);i.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Be=0,Ne=Te.length;Be<Ne;Be++){const Ue=Te[Be],Qe=Math.floor(Ue.start/4),je=Math.ceil(Ue.count/4),at=Qe%E.width,k=Math.floor(Qe/E.width),Ae=je,me=1;i.pixelStorei(s.UNPACK_SKIP_PIXELS,at),i.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,at,k,Ae,me,J,ae,E.data)}U.clearUpdateRanges(),i.pixelStorei(s.UNPACK_ROW_LENGTH,ce),i.pixelStorei(s.UNPACK_SKIP_PIXELS,de),i.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function He(U,E,J){let ae=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=s.TEXTURE_3D);const fe=ie(U,E),Te=E.source;i.bindTexture(ae,U.__webglTexture,s.TEXTURE0+J);const De=r.get(Te);if(Te.version!==De.__version||fe===!0){if(i.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),we=E.colorSpace===dr?null:Mt.getPrimaries(E.colorSpace),Ie=E.colorSpace===dr||me===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let de=S(E.image,!1,l.maxTextureSize);de=Ht(E,de);const Re=u.convert(E.format,E.colorSpace),Be=u.convert(E.type);let Ne=w(E.internalFormat,Re,Be,E.normalized,E.colorSpace,E.isVideoTexture);Fe(ae,E);let Ue;const Qe=E.mipmaps,je=E.isVideoTexture!==!0,at=De.__version===void 0||fe===!0,k=Te.dataReady,Ae=O(E,de);if(E.isDepthTexture)Ne=P(E.format===Xr,E.type),at&&(je?i.texStorage2D(s.TEXTURE_2D,1,Ne,de.width,de.height):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,null));else if(E.isDataTexture)if(Qe.length>0){je&&at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data);E.generateMipmaps=!1}else je?(at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height),k&&Me(E,de,Re,Be)):i.texImage2D(s.TEXTURE_2D,0,Ne,de.width,de.height,0,Re,Be,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){je&&at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,Qe[0].width,Qe[0].height,de.depth);for(let me=0,we=Qe.length;me<we;me++)if(Ue=Qe[me],E.format!==Li)if(Re!==null)if(je){if(k)if(E.layerUpdates.size>0){const Ie=cv(Ue.width,Ue.height,E.format,E.type);for(const ye of E.layerUpdates){const Ye=Ue.data.subarray(ye*Ie/Ue.data.BYTES_PER_ELEMENT,(ye+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ye,Ue.width,Ue.height,1,Re,Ye)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Ue.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else je?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ue.width,Ue.height,de.depth,Re,Be,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,me,Ne,Ue.width,Ue.height,de.depth,0,Re,Be,Ue.data)}else{je&&at&&i.texStorage2D(s.TEXTURE_2D,Ae,Ne,Qe[0].width,Qe[0].height);for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],E.format!==Li?Re!==null?je?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Ue.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Ue.width,Ue.height,Re,Be,Ue.data):i.texImage2D(s.TEXTURE_2D,me,Ne,Ue.width,Ue.height,0,Re,Be,Ue.data)}else if(E.isDataArrayTexture)if(je){if(at&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ne,de.width,de.height,de.depth),k)if(E.layerUpdates.size>0){const me=cv(de.width,de.height,E.format,E.type);for(const we of E.layerUpdates){const Ie=de.data.subarray(we*me/de.data.BYTES_PER_ELEMENT,(we+1)*me/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,de.width,de.height,1,Re,Be,Ie)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(E.isData3DTexture)je?(at&&i.texStorage3D(s.TEXTURE_3D,Ae,Ne,de.width,de.height,de.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Re,Be,de.data)):i.texImage3D(s.TEXTURE_3D,0,Ne,de.width,de.height,de.depth,0,Re,Be,de.data);else if(E.isFramebufferTexture){if(at)if(je)i.texStorage2D(s.TEXTURE_2D,Ae,Ne,de.width,de.height);else{let me=de.width,we=de.height;for(let Ie=0;Ie<Ae;Ie++)i.texImage2D(s.TEXTURE_2D,Ie,Ne,me,we,0,Re,Be,null),me>>=1,we>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),de.parentNode!==me){me.appendChild(de),v.add(E),me.onpaint=we=>{const Ie=we.changedElements;for(const ye of v)Ie.includes(ye.image)&&(ye.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,de);else{const Ie=s.RGBA,ye=s.RGBA,Ye=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,ye,Ye,de)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(je&&at){const me=wt(Qe[0]);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}for(let me=0,we=Qe.length;me<we;me++)Ue=Qe[me],je?k&&i.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Be,Ue):i.texImage2D(s.TEXTURE_2D,me,Ne,Re,Be,Ue);E.generateMipmaps=!1}else if(je){if(at){const me=wt(de);i.texStorage2D(s.TEXTURE_2D,Ae,Ne,me.width,me.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Be,de)}else i.texImage2D(s.TEXTURE_2D,0,Ne,Re,Be,de);y(E)&&F(ae),De.__version=Te.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function nt(U,E,J){if(E.image.length!==6)return;const ae=ie(U,E),fe=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+J);const Te=r.get(fe);if(fe.version!==Te.__version||ae===!0){i.activeTexture(s.TEXTURE0+J);const De=Mt.getPrimaries(Mt.workingColorSpace),ce=E.colorSpace===dr?null:Mt.getPrimaries(E.colorSpace),de=E.colorSpace===dr||De===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;i.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Be=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let ye=0;ye<6;ye++)!Re&&!Be?Ne[ye]=S(E.image[ye],!0,l.maxCubemapSize):Ne[ye]=Be?E.image[ye].image:E.image[ye],Ne[ye]=Ht(E,Ne[ye]);const Ue=Ne[0],Qe=u.convert(E.format,E.colorSpace),je=u.convert(E.type),at=w(E.internalFormat,Qe,je,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Ae=Te.__version===void 0||ae===!0,me=fe.dataReady;let we=O(E,Ue);Fe(s.TEXTURE_CUBE_MAP,E);let Ie;if(Re){k&&Ae&&i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,Ue.width,Ue.height);for(let ye=0;ye<6;ye++){Ie=Ne[ye].mipmaps;for(let Ye=0;Ye<Ie.length;Ye++){const Ve=Ie[Ye];E.format!==Li?Qe!==null?k?me&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ve.width,Ve.height,Qe,Ve.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,at,Ve.width,Ve.height,0,Ve.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,Ve.width,Ve.height,Qe,je,Ve.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,at,Ve.width,Ve.height,0,Qe,je,Ve.data)}}}else{if(Ie=E.mipmaps,k&&Ae){Ie.length>0&&we++;const ye=wt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,we,at,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Be){k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ne[ye].width,Ne[ye].height,Qe,je,Ne[ye].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Ne[ye].width,Ne[ye].height,0,Qe,je,Ne[ye].data);for(let Ye=0;Ye<Ie.length;Ye++){const Qt=Ie[Ye].image[ye].image;k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Qt.width,Qt.height,Qe,je,Qt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,at,Qt.width,Qt.height,0,Qe,je,Qt.data)}}else{k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Qe,je,Ne[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,at,Qe,je,Ne[ye]);for(let Ye=0;Ye<Ie.length;Ye++){const Ve=Ie[Ye];k?me&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Qe,je,Ve.image[ye]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,at,Qe,je,Ve.image[ye])}}}y(E)&&F(s.TEXTURE_CUBE_MAP),Te.__version=fe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Je(U,E,J,ae,fe,Te){const De=u.convert(J.format,J.colorSpace),ce=u.convert(J.type),de=w(J.internalFormat,De,ce,J.normalized,J.colorSpace),Re=r.get(E),Be=r.get(J);if(Be.__renderTarget=E,!Re.__hasExternalTextures){const Ne=Math.max(1,E.width>>Te),Ue=Math.max(1,E.height>>Te);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?i.texImage3D(fe,Te,de,Ne,Ue,E.depth,0,De,ce,null):i.texImage2D(fe,Te,de,Ne,Ue,0,De,ce,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),an(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ae,fe,Be.__webglTexture,0,qt(E)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ae,fe,Be.__webglTexture,Te),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(U,E,J){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const ae=E.depthTexture,fe=ae&&ae.isDepthTexture?ae.type:null,Te=P(E.stencilBuffer,fe),De=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;an(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(E),Te,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(E),Te,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Te,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,U)}else{const ae=E.textures;for(let fe=0;fe<ae.length;fe++){const Te=ae[fe],De=u.convert(Te.format,Te.colorSpace),ce=u.convert(Te.type),de=w(Te.internalFormat,De,ce,Te.normalized,Te.colorSpace);an(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt(E),de,E.width,E.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(U,E,J){const ae=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(E.depthTexture);if(fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E.depthTexture);const Re=u.convert(E.depthTexture.format),Be=u.convert(E.depthTexture.type);let Ne;E.depthTexture.format===wa?Ne=s.DEPTH_COMPONENT24:E.depthTexture.format===Xr&&(Ne=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,E.width,E.height,0,Re,Be,null)}}else ee(E.depthTexture,0);const Te=fe.__webglTexture,De=qt(E),ce=ae?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,de=E.depthTexture.format===Xr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===wa)an(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ce,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ce,Te,0);else if(E.depthTexture.format===Xr)an(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,ce,Te,0,De):s.framebufferTexture2D(s.FRAMEBUFFER,de,ce,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ae=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const fe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",fe)};ae.addEventListener("dispose",fe),E.__depthDisposeCallback=fe}E.__boundDepthTexture=ae}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(J)for(let ae=0;ae<6;ae++)ft(E.__webglFramebuffer[ae],U,ae);else{const ae=U.texture.mipmaps;ae&&ae.length>0?ft(E.__webglFramebuffer[0],U,0):ft(E.__webglFramebuffer,U,0)}else if(J){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=s.createRenderbuffer(),Yt(E.__webglDepthbuffer[ae],U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[ae];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}else{const ae=U.texture.mipmaps;if(ae&&ae.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Yt(E.__webglDepthbuffer,U,!1);else{const fe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Te)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function St(U,E,J){const ae=r.get(U);E!==void 0&&Je(ae.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&xt(U)}function ht(U){const E=U.texture,J=r.get(U),ae=r.get(E);U.addEventListener("dispose",b);const fe=U.textures,Te=U.isWebGLCubeRenderTarget===!0,De=fe.length>1;if(De||(ae.__webglTexture===void 0&&(ae.__webglTexture=s.createTexture()),ae.__version=E.version,f.memory.textures++),Te){J.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[ce]=[];for(let de=0;de<E.mipmaps.length;de++)J.__webglFramebuffer[ce][de]=s.createFramebuffer()}else J.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)J.__webglFramebuffer[ce]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(De)for(let ce=0,de=fe.length;ce<de;ce++){const Re=r.get(fe[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),f.memory.textures++)}if(U.samples>0&&an(U)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ce=0;ce<fe.length;ce++){const de=fe[ce];J.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[ce]);const Re=u.convert(de.format,de.colorSpace),Be=u.convert(de.type),Ne=w(de.internalFormat,Re,Be,de.normalized,de.colorSpace,U.isXRRenderTarget===!0),Ue=qt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ne,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,J.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){i.bindTexture(s.TEXTURE_CUBE_MAP,ae.__webglTexture),Fe(s.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(J.__webglFramebuffer[ce][de],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else Je(J.__webglFramebuffer[ce],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(E)&&F(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ce=0,de=fe.length;ce<de;ce++){const Re=fe[ce],Be=r.get(Re);let Ne=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Be.__webglTexture),Fe(Ne,Re),Je(J.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+ce,Ne,0),y(Re)&&F(Ne)}i.unbindTexture()}else{let ce=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(ce,ae.__webglTexture),Fe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Je(J.__webglFramebuffer[de],U,E,s.COLOR_ATTACHMENT0,ce,de);else Je(J.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,ce,0);y(E)&&F(ce),i.unbindTexture()}U.depthBuffer&&xt(U)}function en(U){const E=U.textures;for(let J=0,ae=E.length;J<ae;J++){const fe=E[J];if(y(fe)){const Te=I(U),De=r.get(fe).__webglTexture;i.bindTexture(Te,De),F(Te),i.unbindTexture()}}}const tn=[],nn=[];function ln(U){if(U.samples>0){if(an(U)===!1){const E=U.textures,J=U.width,ae=U.height;let fe=s.COLOR_BUFFER_BIT;const Te=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(U),ce=E.length>1;if(ce)for(let Re=0;Re<E.length;Re++)i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const de=U.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(E[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,J,ae,0,0,J,ae,fe,s.NEAREST),m===!0&&(tn.length=0,nn.length=0,tn.push(s.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tn.push(Te),nn.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,tn))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<E.length;Re++){i.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Be=r.get(E[Re]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function qt(U){return Math.min(l.maxSamples,U.samples)}function an(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(U){const E=f.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Ht(U,E){const J=U.colorSpace,ae=U.format,fe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==uc&&J!==dr&&(Mt.getTransfer(J)===zt?(ae!==Li||fe!==Si)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bt("WebGLTextures: Unsupported texture color space:",J)),E}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=he,this.getTextureUnits=ge,this.setTextureUnits=Y,this.setTexture2D=ee,this.setTexture2DArray=_e,this.setTexture3D=be,this.setTextureCube=N,this.rebindTextures=St,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=an,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function HC(s,e){function i(r,l=dr){let u;const f=Mt.getTransfer(l);if(r===Si)return s.UNSIGNED_BYTE;if(r===xp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Sp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_x)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===mx)return s.BYTE;if(r===gx)return s.SHORT;if(r===rl)return s.UNSIGNED_SHORT;if(r===vp)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===Ca)return s.HALF_FLOAT;if(r===xx)return s.ALPHA;if(r===Sx)return s.RGB;if(r===Li)return s.RGBA;if(r===wa)return s.DEPTH_COMPONENT;if(r===Xr)return s.DEPTH_STENCIL;if(r===yx)return s.RED;if(r===yp)return s.RED_INTEGER;if(r===Yr)return s.RG;if(r===Mp)return s.RG_INTEGER;if(r===Ep)return s.RGBA_INTEGER;if(r===ec||r===tc||r===nc||r===ic)if(f===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===ec)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ic)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===ec)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===tc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ic)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ch||r===wh||r===Dh||r===Uh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Ch)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Uh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph||r===Fh||r===oc||r===Ih)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Lh||r===Nh)return f===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Oh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ph)return u.COMPRESSED_R11_EAC;if(r===Fh)return u.COMPRESSED_SIGNED_R11_EAC;if(r===oc)return u.COMPRESSED_RG11_EAC;if(r===Ih)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Bh||r===zh||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Bh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Vh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Xh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Yh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jh||r===$h||r===ep)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===jh)return f===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ep)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===tp||r===np||r===lc||r===ip)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===tp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===np)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ip)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VC=`
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

}`;class kC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ji({vertexShader:GC,fragmentShader:VC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new ml(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XC extends Kr{constructor(e,i){super();const r=this;let l=null,u=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,_=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new kC,y={},F=i.getContextAttributes();let I=null,w=null;const P=[],O=[],D=new Ct;let b=null;const L=new xi;L.viewport=new on;const q=new xi;q.viewport=new on;const G=[L,q],Z=new jb;let he=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let Se=P[ie];return Se===void 0&&(Se=new Wd,P[ie]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ie){let Se=P[ie];return Se===void 0&&(Se=new Wd,P[ie]=Se),Se.getGripSpace()},this.getHand=function(ie){let Se=P[ie];return Se===void 0&&(Se=new Wd,P[ie]=Se),Se.getHandSpace()};function Y(ie){const Se=O.indexOf(ie.inputSource);if(Se===-1)return;const Me=P[Se];Me!==void 0&&(Me.update(ie.inputSource,ie.frame,p||f),Me.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){l.removeEventListener("select",Y),l.removeEventListener("selectstart",Y),l.removeEventListener("selectend",Y),l.removeEventListener("squeeze",Y),l.removeEventListener("squeezestart",Y),l.removeEventListener("squeezeend",Y),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let ie=0;ie<P.length;ie++){const Se=O[ie];Se!==null&&(O[ie]=null,P[ie].disconnect(Se))}he=null,ge=null,S.reset();for(const ie in y)delete y[ie];e.setRenderTarget(I),M=null,_=null,v=null,l=null,w=null,Fe.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(D.width,D.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){u=ie,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){h=ie,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ie){if(l=ie,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",Y),l.addEventListener("selectstart",Y),l.addEventListener("selectend",Y),l.addEventListener("squeeze",Y),l.addEventListener("squeezestart",Y),l.addEventListener("squeezeend",Y),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),F.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(D),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,He=null,nt=null;F.depth&&(nt=F.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Me=F.stencil?Xr:wa,He=F.stencil?sl:Ki);const Je={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:u};v=this.getBinding(),_=v.createProjectionLayer(Je),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),w=new qi(_.textureWidth,_.textureHeight,{format:Li,type:Si,depthTexture:new Ks(_.textureWidth,_.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Me),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new qi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Fe.setContext(l),Fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function H(ie){for(let Se=0;Se<ie.removed.length;Se++){const Me=ie.removed[Se],He=O.indexOf(Me);He>=0&&(O[He]=null,P[He].disconnect(Me))}for(let Se=0;Se<ie.added.length;Se++){const Me=ie.added[Se];let He=O.indexOf(Me);if(He===-1){for(let Je=0;Je<P.length;Je++)if(Je>=O.length){O.push(Me),He=Je;break}else if(O[Je]===null){O[Je]=Me,He=Je;break}if(He===-1)break}const nt=P[He];nt&&nt.connect(Me)}}const ee=new oe,_e=new oe;function be(ie,Se,Me){ee.setFromMatrixPosition(Se.matrixWorld),_e.setFromMatrixPosition(Me.matrixWorld);const He=ee.distanceTo(_e),nt=Se.projectionMatrix.elements,Je=Me.projectionMatrix.elements,Yt=nt[14]/(nt[10]-1),ft=nt[14]/(nt[10]+1),xt=(nt[9]+1)/nt[5],St=(nt[9]-1)/nt[5],ht=(nt[8]-1)/nt[0],en=(Je[8]+1)/Je[0],tn=Yt*ht,nn=Yt*en,ln=He/(-ht+en),qt=ln*-ht;if(Se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(qt),ie.translateZ(ln),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),nt[10]===-1)ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const an=Yt+ln,W=ft+ln,Ht=tn-qt,wt=nn+(He-qt),U=xt*ft/W*an,E=St*ft/W*an;ie.projectionMatrix.makePerspective(Ht,wt,U,E,an,W),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function N(ie,Se){Se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(Se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(l===null)return;let Se=ie.near,Me=ie.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(Me=S.depthFar)),Z.near=q.near=L.near=Se,Z.far=q.far=L.far=Me,(he!==Z.near||ge!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),he=Z.near,ge=Z.far),Z.layers.mask=ie.layers.mask|6,L.layers.mask=Z.layers.mask&-5,q.layers.mask=Z.layers.mask&-3;const He=ie.parent,nt=Z.cameras;N(Z,He);for(let Je=0;Je<nt.length;Je++)N(nt[Je],He);nt.length===2?be(Z,L,q):Z.projectionMatrix.copy(L.projectionMatrix),Q(ie,Z,He)};function Q(ie,Se,Me){Me===null?ie.matrix.copy(Se.matrixWorld):(ie.matrix.copy(Me.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(Se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(Se.projectionMatrix),ie.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ap*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ie){m=ie,_!==null&&(_.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ie){return y[ie]};let Ee=null;function Ce(ie,Se){if(g=Se.getViewerPose(p||f),T=Se,g!==null){const Me=g.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let He=!1;Me.length!==Z.cameras.length&&(Z.cameras.length=0,He=!0);for(let ft=0;ft<Me.length;ft++){const xt=Me[ft];let St=null;if(M!==null)St=M.getViewport(xt);else{const en=v.getViewSubImage(_,xt);St=en.viewport,ft===0&&(e.setRenderTargetTextures(w,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(w))}let ht=G[ft];ht===void 0&&(ht=new xi,ht.layers.enable(ft),ht.viewport=new on,G[ft]=ht),ht.matrix.fromArray(xt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(xt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(St.x,St.y,St.width,St.height),ft===0&&(Z.matrix.copy(ht.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),He===!0&&Z.cameras.push(ht)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const ft=v.getDepthInformation(Me[0]);ft&&ft.isValid&&ft.texture&&S.init(ft,l.renderState)}if(nt&&nt.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let ft=0;ft<Me.length;ft++){const xt=Me[ft].camera;if(xt){let St=y[xt];St||(St=new Dx,y[xt]=St);const ht=v.getCameraImage(xt);St.sourceTexture=ht}}}}for(let Me=0;Me<P.length;Me++){const He=O[Me],nt=P[Me];He!==null&&nt!==void 0&&nt.update(He,Se,p||f)}Ee&&Ee(ie,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Fe=new Ox;Fe.setAnimationLoop(Ce),this.setAnimationLoop=function(ie){Ee=ie},this.dispose=function(){}}}const WC=new fn,Gx=new st;Gx.set(-1,0,0,0,1,0,0,0,1);function qC(s,e){function i(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Ux(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function l(S,y,F,I,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(S,y):y.isMeshLambertMaterial?(u(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(S,y),v(S,y)):y.isMeshPhongMaterial?(u(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(S,y),_(S,y),y.isMeshPhysicalMaterial&&M(S,y,w)):y.isMeshMatcapMaterial?(u(S,y),T(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),C(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(f(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?m(S,y,F,I):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,i(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Zn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,i(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Zn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,i(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,i(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const F=e.get(y),I=F.envMap,w=F.envMapRotation;I&&(S.envMap.value=I,S.envMapRotation.value.setFromMatrix4(WC.makeRotationFromEuler(w)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Gx),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,S.aoMapTransform))}function f(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function m(S,y,F,I){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*F,S.scale.value=I*.5,y.map&&(S.map.value=y.map,i(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,i(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,i(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,F){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=F.texture,S.transmissionSamplerSize.value.set(F.width,F.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const F=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(F.matrixWorld),S.nearDistance.value=F.shadow.camera.near,S.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function YC(s,e,i,r){let l={},u={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,P){const O=P.program;r.uniformBlockBinding(w,O)}function p(w,P){let O=l[w.id];O===void 0&&(S(w),O=g(w),l[w.id]=O,w.addEventListener("dispose",F));const D=P.program;r.updateUBOMapping(w,D);const b=e.render.frame;u[w.id]!==b&&(_(w),u[w.id]=b)}function g(w){const P=v();w.__bindingPointIndex=P;const O=s.createBuffer(),D=w.__size,b=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,D,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,O),O}function v(){for(let w=0;w<h;w++)if(f.indexOf(w)===-1)return f.push(w),w;return bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const P=l[w.id],O=w.uniforms,D=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let b=0,L=O.length;b<L;b++){const q=O[b];if(Array.isArray(q))for(let G=0,Z=q.length;G<Z;G++)M(q[G],b,G,D);else M(q,b,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(w,P,O,D){if(C(w,P,O,D)===!0){const b=w.__offset,L=w.value;if(Array.isArray(L)){let q=0;for(let G=0;G<L.length;G++){const Z=L[G],he=y(Z);T(Z,w.__data,q),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(q+=he.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,w.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,w.__data)}}function T(w,P,O){typeof w=="number"||typeof w=="boolean"?P[0]=w:w.isMatrix3?(P[0]=w.elements[0],P[1]=w.elements[1],P[2]=w.elements[2],P[3]=0,P[4]=w.elements[3],P[5]=w.elements[4],P[6]=w.elements[5],P[7]=0,P[8]=w.elements[6],P[9]=w.elements[7],P[10]=w.elements[8],P[11]=0):ArrayBuffer.isView(w)?P.set(new w.constructor(w.buffer,w.byteOffset,P.length)):w.toArray(P,O)}function C(w,P,O,D){const b=w.value,L=P+"_"+O;if(D[L]===void 0)return typeof b=="number"||typeof b=="boolean"?D[L]=b:ArrayBuffer.isView(b)?D[L]=b.slice():D[L]=b.clone(),!0;{const q=D[L];if(typeof b=="number"||typeof b=="boolean"){if(q!==b)return D[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(q.equals(b)===!1)return q.copy(b),!0}}return!1}function S(w){const P=w.uniforms;let O=0;const D=16;for(let L=0,q=P.length;L<q;L++){const G=Array.isArray(P[L])?P[L]:[P[L]];for(let Z=0,he=G.length;Z<he;Z++){const ge=G[Z],Y=Array.isArray(ge.value)?ge.value:[ge.value];for(let B=0,H=Y.length;B<H;B++){const ee=Y[B],_e=y(ee),be=O%D,N=be%_e.boundary,Q=be+N;O+=N,Q!==0&&D-Q<_e.storage&&(O+=D-Q),ge.__data=new Float32Array(_e.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=O,O+=_e.storage}}}const b=O%D;return b>0&&(O+=D-b),w.__size=O,w.__cache={},this}function y(w){const P={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(P.boundary=4,P.storage=4):w.isVector2?(P.boundary=8,P.storage=8):w.isVector3||w.isColor?(P.boundary=16,P.storage=12):w.isVector4?(P.boundary=16,P.storage=16):w.isMatrix3?(P.boundary=48,P.storage=48):w.isMatrix4?(P.boundary=64,P.storage=64):w.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(P.boundary=16,P.storage=w.byteLength):it("WebGLRenderer: Unsupported uniform value type.",w),P}function F(w){const P=w.target;P.removeEventListener("dispose",F);const O=f.indexOf(P.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete u[P.id]}function I(){for(const w in l)s.deleteBuffer(l[w]);f=[],l={},u={}}return{bind:m,update:p,dispose:I}}const ZC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function KC(){return Gi===null&&(Gi=new Pb(ZC,16,16,Yr,Ca),Gi.name="DFG_LUT",Gi.minFilter=Ln,Gi.magFilter=Ln,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class QC{constructor(e={}){const{canvas:i=db(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Si}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=f;const C=M,S=new Set([Ep,Mp,yp]),y=new Set([Si,Ki,rl,sl,xp,Sp]),F=new Uint32Array(4),I=new Int32Array(4),w=new oe;let P=null,O=null;const D=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,Z=null,he=null,ge=null,Y=null;this._outputColorSpace=li;let B=0,H=0,ee=null,_e=-1,be=null;const N=new on,Q=new on;let Ee=null;const Ce=new Ut(0);let Fe=0,ie=i.width,Se=i.height,Me=1,He=null,nt=null;const Je=new on(0,0,ie,Se),Yt=new on(0,0,ie,Se);let ft=!1;const xt=new Cx;let St=!1,ht=!1;const en=new fn,tn=new oe,nn=new on,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function an(){return ee===null?Me:1}let W=r;function Ht(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${_p}`),i.addEventListener("webglcontextlost",Qt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",Kn,!1),W===null){const X="webgl2";if(W=Ht(X,A),W===null)throw Ht(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw bt("WebGLRenderer: "+A.message),A}let wt,U,E,J,ae,fe,Te,De,ce,de,Re,Be,Ne,Ue,Qe,je,at,k,Ae,me,we,Ie,ye;function Ye(){wt=new KA(W),wt.init(),we=new HC(W,wt),U=new GA(W,wt,e,we),E=new BC(W,wt),U.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),he=W.createFramebuffer(),ge=W.createFramebuffer(),Y=W.createFramebuffer(),J=new jA(W),ae=new bC,fe=new zC(W,wt,E,ae,U,we,J),Te=new ZA(q),De=new nT(W),Ie=new zA(W,De),ce=new QA(W,De,J,Ie),de=new eR(W,ce,De,Ie,J),k=new $A(W,U,fe),Qe=new VA(ae),Re=new EC(q,Te,wt,U,Ie,Qe),Be=new qC(q,ae),Ne=new AC,Ue=new LC(wt),at=new BA(q,Te,E,de,T,m),je=new IC(q,de,U),ye=new YC(W,J,U,E),Ae=new HA(W,wt,J),me=new JA(W,wt,J),J.programs=Re.programs,q.capabilities=U,q.extensions=wt,q.properties=ae,q.renderLists=Ne,q.shadowMap=je,q.state=E,q.info=J}Ye(),C!==Si&&(L=new nR(C,i.width,i.height,h,l,u));const Ve=new XC(q,W);this.xr=Ve,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(A){A!==void 0&&(Me=A,this.setSize(ie,Se,!1))},this.getSize=function(A){return A.set(ie,Se)},this.setSize=function(A,X,re=!0){if(Ve.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=A,Se=X,i.width=Math.floor(A*Me),i.height=Math.floor(X*Me),re===!0&&(i.style.width=A+"px",i.style.height=X+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ie*Me,Se*Me).floor()},this.setDrawingBufferSize=function(A,X,re){ie=A,Se=X,Me=re,i.width=Math.floor(A*re),i.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===Si){bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,X,re,te){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,X,re,te),E.viewport(N.copy(Je).multiplyScalar(Me).round())},this.getScissor=function(A){return A.copy(Yt)},this.setScissor=function(A,X,re,te){A.isVector4?Yt.set(A.x,A.y,A.z,A.w):Yt.set(A,X,re,te),E.scissor(Q.copy(Yt).multiplyScalar(Me).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(A){E.setScissorTest(ft=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){nt=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let te=0;if(A){let ne=!1;if(ee!==null){const Oe=ee.texture.format;ne=S.has(Oe)}if(ne){const Oe=ee.texture.type,Ge=y.has(Oe),Le=at.getClearColor(),Xe=at.getClearAlpha(),ke=Le.r,$e=Le.g,ot=Le.b;Ge?(F[0]=ke,F[1]=$e,F[2]=ot,F[3]=Xe,W.clearBufferuiv(W.COLOR,0,F)):(I[0]=ke,I[1]=$e,I[2]=ot,I[3]=Xe,W.clearBufferiv(W.COLOR,0,I))}else te|=W.COLOR_BUFFER_BIT}X&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Qt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",Kn,!1),at.dispose(),Ne.dispose(),Ue.dispose(),ae.dispose(),Te.dispose(),de.dispose(),Ie.dispose(),ye.dispose(),Re.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",dn),Ve.removeEventListener("sessionend",An),Hn.stop()};function Qt(A){A.preventDefault(),V_("WebGLRenderer: Context Lost."),G=!0}function Nt(){V_("WebGLRenderer: Context Restored."),G=!1;const A=J.autoReset,X=je.enabled,re=je.autoUpdate,te=je.needsUpdate,ne=je.type;Ye(),J.autoReset=A,je.enabled=X,je.autoUpdate=re,je.needsUpdate=te,je.type=ne}function Kn(A){bt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Qn(A){const X=A.target;X.removeEventListener("dispose",Qn),eo(X)}function eo(A){to(A),ae.remove(A)}function to(A){const X=ae.get(A).programs;X!==void 0&&(X.forEach(function(re){Re.releaseProgram(re)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,te,ne,Oe){X===null&&(X=ln);const Ge=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Le=Pa(A,X,re,te,ne);E.setMaterial(te,Ge);let Xe=re.index,ke=1;if(te.wireframe===!0){if(Xe=ce.getWireframeAttribute(re),Xe===void 0)return;ke=2}const $e=re.drawRange,ot=re.attributes.position;let Ke=$e.start*ke,Tt=($e.start+$e.count)*ke;Oe!==null&&(Ke=Math.max(Ke,Oe.start*ke),Tt=Math.min(Tt,(Oe.start+Oe.count)*ke)),Xe!==null?(Ke=Math.max(Ke,0),Tt=Math.min(Tt,Xe.count)):ot!=null&&(Ke=Math.max(Ke,0),Tt=Math.min(Tt,ot.count));const Jt=Tt-Ke;if(Jt<0||Jt===1/0)return;Ie.setup(ne,te,Le,re,Xe);let Xt,Ot=Ae;if(Xe!==null&&(Xt=De.get(Xe),Ot=me,Ot.setIndex(Xt)),ne.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*an()),Ot.setMode(W.LINES)):Ot.setMode(W.TRIANGLES);else if(ne.isLine){let Pt=te.linewidth;Pt===void 0&&(Pt=1),E.setLineWidth(Pt*an()),ne.isLineSegments?Ot.setMode(W.LINES):ne.isLineLoop?Ot.setMode(W.LINE_LOOP):Ot.setMode(W.LINE_STRIP)}else ne.isPoints?Ot.setMode(W.POINTS):ne.isSprite&&Ot.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Pt=ne._multiDrawStarts,ze=ne._multiDrawCounts,Nn=ne._multiDrawCount,pt=Xe?De.get(Xe).bytesPerElement:1,xn=ae.get(te).currentProgram.getUniforms();for(let Jn=0;Jn<Nn;Jn++)xn.setValue(W,"_gl_DrawID",Jn),Ot.render(Pt[Jn]/pt,ze[Jn])}else if(ne.isInstancedMesh)Ot.renderInstances(Ke,Jt,ne.count);else if(re.isInstancedBufferGeometry){const Pt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ze=Math.min(re.instanceCount,Pt);Ot.renderInstances(Ke,Jt,ze)}else Ot.render(Ke,Jt)};function no(A,X,re){A.transparent===!0&&A.side===Ma&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,Oa(A,X,re),A.side=gr,A.needsUpdate=!0,Oa(A,X,re),A.side=Ma):Oa(A,X,re)}this.compile=function(A,X,re=null){re===null&&(re=A),O=Ue.get(re),O.init(X),b.push(O),re.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),A!==re&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(O.pushLight(ne),ne.castShadow&&O.pushShadow(ne))}),O.setupLights();const te=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Oe=ne.material;if(Oe)if(Array.isArray(Oe))for(let Ge=0;Ge<Oe.length;Ge++){const Le=Oe[Ge];no(Le,re,ne),te.add(Le)}else no(Oe,re,ne),te.add(Oe)}),O=b.pop(),te},this.compileAsync=function(A,X,re=null){const te=this.compile(A,X,re);return new Promise(ne=>{function Oe(){if(te.forEach(function(Ge){ae.get(Ge).currentProgram.isReady()&&te.delete(Ge)}),te.size===0){ne(A);return}setTimeout(Oe,10)}wt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Qr=null;function Oi(A){Qr&&Qr(A)}function dn(){Hn.stop()}function An(){Hn.start()}const Hn=new Ox;Hn.setAnimationLoop(Oi),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(A){Qr=A,Ve.setAnimationLoop(A),A===null?Hn.stop():Hn.start()},Ve.addEventListener("sessionstart",dn),Ve.addEventListener("sessionend",An),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(A,X);const re=Ve.enabled===!0&&Ve.isPresenting===!0,te=L!==null&&(ee===null||re)&&L.begin(q,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(X),X=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,X,ee),O=Ue.get(A,b.length),O.init(X),O.state.textureUnits=fe.getTextureUnits(),b.push(O),en.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),xt.setFromProjectionMatrix(en,Xi,X.reversedDepth),ht=this.localClippingEnabled,St=Qe.init(this.clippingPlanes,ht),P=Ne.get(A,D.length),P.init(),D.push(P),Ve.enabled===!0&&Ve.isPresenting===!0){const Ge=q.xr.getDepthSensingMesh();Ge!==null&&_r(Ge,X,-1/0,q.sortObjects)}_r(A,X,0,q.sortObjects),P.finish(),q.sortObjects===!0&&P.sort(He,nt,X.reversedDepth),qt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,qt&&at.addToRenderList(P,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),St===!0&&Qe.beginShadows();const ne=O.state.shadowsArray;if(je.render(ne,A,X),St===!0&&Qe.endShadows(),(te&&L.hasRenderPass())===!1){const Ge=P.opaque,Le=P.transmissive;if(O.setupLights(),X.isArrayCamera){const Xe=X.cameras;if(Le.length>0)for(let ke=0,$e=Xe.length;ke<$e;ke++){const ot=Xe[ke];_l(Ge,Le,A,ot)}qt&&at.render(A);for(let ke=0,$e=Xe.length;ke<$e;ke++){const ot=Xe[ke];gl(P,A,ot,ot.viewport)}}else Le.length>0&&_l(Ge,Le,A,X),qt&&at.render(A),gl(P,A,X)}ee!==null&&H===0&&(fe.updateMultisampleRenderTarget(ee),fe.updateRenderTargetMipmap(ee)),te&&L.end(q),A.isScene===!0&&A.onAfterRender(q,A,X),Ie.resetDefaultState(),_e=-1,be=null,b.pop(),b.length>0?(O=b[b.length-1],fe.setTextureUnits(O.state.textureUnits),St===!0&&Qe.setGlobalState(q.clippingPlanes,O.state.camera)):O=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,Z!==null&&Z.renderEnd()};function _r(A,X,re,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)O.pushLightProbeGrid(A);else if(A.isLight)O.pushLight(A),A.castShadow&&O.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||xt.intersectsSprite(A)){te&&nn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(en);const Ge=de.update(A),Le=A.material;Le.visible&&P.push(A,Ge,Le,re,nn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||xt.intersectsObject(A))){const Ge=de.update(A),Le=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),nn.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),nn.copy(Ge.boundingSphere.center)),nn.applyMatrix4(A.matrixWorld).applyMatrix4(en)),Array.isArray(Le)){const Xe=Ge.groups;for(let ke=0,$e=Xe.length;ke<$e;ke++){const ot=Xe[ke],Ke=Le[ot.materialIndex];Ke&&Ke.visible&&P.push(A,Ge,Ke,re,nn.z,ot)}}else Le.visible&&P.push(A,Ge,Le,re,nn.z,null)}}const Oe=A.children;for(let Ge=0,Le=Oe.length;Ge<Le;Ge++)_r(Oe[Ge],X,re,te)}function gl(A,X,re,te){const{opaque:ne,transmissive:Oe,transparent:Ge}=A;O.setupLightsView(re),St===!0&&Qe.setGlobalState(q.clippingPlanes,re),te&&E.viewport(N.copy(te)),ne.length>0&&vr(ne,X,re),Oe.length>0&&vr(Oe,X,re),Ge.length>0&&vr(Ge,X,re),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function _l(A,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[te.id]===void 0){const Ke=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[te.id]=new qi(1,1,{generateMipmaps:!0,type:Ke?Ca:Si,minFilter:hr,samples:Math.max(4,U.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Oe=O.state.transmissionRenderTarget[te.id],Ge=te.viewport||N;Oe.setSize(Ge.z*q.transmissionResolutionScale,Ge.w*q.transmissionResolutionScale);const Le=q.getRenderTarget(),Xe=q.getActiveCubeFace(),ke=q.getActiveMipmapLevel();q.setRenderTarget(Oe),q.getClearColor(Ce),Fe=q.getClearAlpha(),Fe<1&&q.setClearColor(16777215,.5),q.clear(),qt&&at.render(re);const $e=q.toneMapping;q.toneMapping=Wi;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),O.setupLightsView(te),St===!0&&Qe.setGlobalState(q.clippingPlanes,te),vr(A,re,te),fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Tt=0,Jt=X.length;Tt<Jt;Tt++){const Xt=X[Tt],{object:Ot,geometry:Pt,material:ze,group:Nn}=Xt;if(ze.side===Ma&&Ot.layers.test(te.layers)){const pt=ze.side;ze.side=Zn,ze.needsUpdate=!0,Na(Ot,re,te,Pt,ze,Nn),ze.side=pt,ze.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(Oe),fe.updateRenderTargetMipmap(Oe))}q.setRenderTarget(Le,Xe,ke),q.setClearColor(Ce,Fe),ot!==void 0&&(te.viewport=ot),q.toneMapping=$e}function vr(A,X,re){const te=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Oe=A.length;ne<Oe;ne++){const Ge=A[ne],{object:Le,geometry:Xe,group:ke}=Ge;let $e=Ge.material;$e.allowOverride===!0&&te!==null&&($e=te),Le.layers.test(re.layers)&&Na(Le,X,re,Xe,$e,ke)}}function Na(A,X,re,te,ne,Oe){A.onBeforeRender(q,X,re,te,ne,Oe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(q,X,re,te,A,Oe),ne.transparent===!0&&ne.side===Ma&&ne.forceSinglePass===!1?(ne.side=Zn,ne.needsUpdate=!0,q.renderBufferDirect(re,X,te,ne,A,Oe),ne.side=gr,ne.needsUpdate=!0,q.renderBufferDirect(re,X,te,ne,A,Oe),ne.side=Ma):q.renderBufferDirect(re,X,te,ne,A,Oe),A.onAfterRender(q,X,re,te,ne,Oe)}function Oa(A,X,re){X.isScene!==!0&&(X=ln);const te=ae.get(A),ne=O.state.lights,Oe=O.state.shadowsArray,Ge=ne.state.version,Le=Re.getParameters(A,ne.state,Oe,X,re,O.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(Le);let ke=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const $e=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Te.get(A.envMap||te.environment,$e),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",Qn),ke=new Map,te.programs=ke);let ot=ke.get(Xe);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===Ge)return $i(A,Le),ot}else Le.uniforms=Re.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,re,Le),A.onBeforeCompile(Le,q),ot=Re.acquireProgram(Le,Xe),ke.set(Xe,ot),te.uniforms=Le.uniforms;const Ke=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Qe.uniform),$i(A,Le),te.needsLights=vl(A),te.lightsStateVersion=Ge,te.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=O.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function ji(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=ac.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function $i(A,X){const re=ae.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function xr(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=A.length;re<te;re++){const ne=A[re];if(ne.texture!==null&&ne.boundingBox.containsPoint(w))return ne}return null}function Pa(A,X,re,te,ne){X.isScene!==!0&&(X=ln),fe.resetTextureUnits();const Oe=X.fog,Ge=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Le=ee===null?q.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Mt.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ke=Te.get(te.envMap||Ge,Xe),$e=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!re.morphAttributes.position,Tt=!!re.morphAttributes.normal,Jt=!!re.morphAttributes.color;let Xt=Wi;te.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xt=q.toneMapping);const Ot=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,ze=ae.get(te),Nn=O.state.lights;if(St===!0&&(ht===!0||A!==be)){const Lt=A===be&&te.id===_e;Qe.setState(te,A,Lt)}let pt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Nn.state.version||ze.outputColorSpace!==Le||ne.isBatchedMesh&&ze.batching===!1||!ne.isBatchedMesh&&ze.batching===!0||ne.isBatchedMesh&&ze.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&ze.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&ze.instancing===!1||!ne.isInstancedMesh&&ze.instancing===!0||ne.isSkinnedMesh&&ze.skinning===!1||!ne.isSkinnedMesh&&ze.skinning===!0||ne.isInstancedMesh&&ze.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&ze.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&ze.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&ze.instancingMorph===!1&&ne.morphTexture!==null||ze.envMap!==ke||te.fog===!0&&ze.fog!==Oe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Qe.numPlanes||ze.numIntersection!==Qe.numIntersection)||ze.vertexAlphas!==$e||ze.vertexTangents!==ot||ze.morphTargets!==Ke||ze.morphNormals!==Tt||ze.morphColors!==Jt||ze.toneMapping!==Xt||ze.morphTargetsCount!==Pt||!!ze.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ze.__version=te.version);let xn=ze.currentProgram;pt===!0&&(xn=Oa(te,X,ne),Z&&te.isNodeMaterial&&Z.onUpdateProgram(te,xn,ze));let Jn=!1,Mi=!1,jn=!1;const Ft=xn.getUniforms(),jt=ze.uniforms;if(E.useProgram(xn.program)&&(Jn=!0,Mi=!0,jn=!0),te.id!==_e&&(_e=te.id,Mi=!0),ze.needsLights){const Lt=xr(O.state.lightProbeGridArray,ne);ze.lightProbeGrid!==Lt&&(ze.lightProbeGrid=Lt,Mi=!0)}if(Jn||be!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(W,"projectionMatrix",A.projectionMatrix),Ft.setValue(W,"viewMatrix",A.matrixWorldInverse);const Pi=Ft.map.cameraPosition;Pi!==void 0&&Pi.setValue(W,tn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&Ft.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ft.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),be!==A&&(be=A,Mi=!0,jn=!0)}if(ze.needsLights&&(Nn.state.directionalShadowMap.length>0&&Ft.setValue(W,"directionalShadowMap",Nn.state.directionalShadowMap,fe),Nn.state.spotShadowMap.length>0&&Ft.setValue(W,"spotShadowMap",Nn.state.spotShadowMap,fe),Nn.state.pointShadowMap.length>0&&Ft.setValue(W,"pointShadowMap",Nn.state.pointShadowMap,fe)),ne.isSkinnedMesh){Ft.setOptional(W,ne,"bindMatrix"),Ft.setOptional(W,ne,"bindMatrixInverse");const Lt=ne.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ft.setValue(W,"boneTexture",Lt.boneTexture,fe))}ne.isBatchedMesh&&(Ft.setOptional(W,ne,"batchingTexture"),Ft.setValue(W,"batchingTexture",ne._matricesTexture,fe),Ft.setOptional(W,ne,"batchingIdTexture"),Ft.setValue(W,"batchingIdTexture",ne._indirectTexture,fe),Ft.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(W,"batchingColorTexture",ne._colorsTexture,fe));const Ei=re.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&k.update(ne,re,xn),(Mi||ze.receiveShadow!==ne.receiveShadow)&&(ze.receiveShadow=ne.receiveShadow,Ft.setValue(W,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=KC()),Mi){if(Ft.setValue(W,"toneMappingExposure",q.toneMappingExposure),ze.needsLights&&hn(jt,jn),Oe&&te.fog===!0&&Be.refreshFogUniforms(jt,Oe),Be.refreshMaterialUniforms(jt,te,Me,Se,O.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Lt=ze.lightProbeGrid;jt.probesSH.value=Lt.texture,jt.probesMin.value.copy(Lt.boundingBox.min),jt.probesMax.value.copy(Lt.boundingBox.max),jt.probesResolution.value.copy(Lt.resolution)}ac.upload(W,ji(ze),jt,fe)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ac.upload(W,ji(ze),jt,fe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ft.setValue(W,"center",ne.center),Ft.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(W,"normalMatrix",ne.normalMatrix),Ft.setValue(W,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){const Lt=te.uniformsGroups;for(let Pi=0,Fa=Lt.length;Pi<Fa;Pi++){const Sr=Lt[Pi];ye.update(Sr,xn),ye.bind(Sr,xn)}}return xn}function hn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,X,re){const te=ae.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=X,ae.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const re=ae.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,re=0){ee=A,B=X,H=re;let te=null,ne=!1,Oe=!1;if(A){const Le=ae.get(A);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Le.__webglFramebuffer),N.copy(A.viewport),Q.copy(A.scissor),Ee=A.scissorTest,E.viewport(N),E.scissor(Q),E.setScissorTest(Ee),_e=-1;return}else if(Le.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Le.__hasExternalTextures)fe.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Le.__boundDepthTexture!==$e){if($e!==null&&ae.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const ke=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ke[X])?te=ke[X][re]:te=ke[X],ne=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?te=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[re]:te=ke,N.copy(A.viewport),Q.copy(A.scissor),Ee=A.scissorTest}else N.copy(Je).multiplyScalar(Me).floor(),Q.copy(Yt).multiplyScalar(Me).floor(),Ee=ft;if(re!==0&&(te=he),E.bindFramebuffer(W.FRAMEBUFFER,te)&&E.drawBuffers(A,te),E.viewport(N),E.scissor(Q),E.setScissorTest(Ee),ne){const Le=ae.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Le.__webglTexture,re)}else if(Oe){const Le=X;for(let Xe=0;Xe<A.textures.length;Xe++){const ke=ae.get(A.textures[Xe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Xe,ke.__webglTexture,re,Le)}}else if(A!==null&&re!==0){const Le=ae.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Le.__webglTexture,re)}_e=-1},this.readRenderTargetPixels=function(A,X,re,te,ne,Oe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){E.bindFramebuffer(W.FRAMEBUFFER,Xe);try{const ke=A.textures[Le],$e=ke.format,ot=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable($e)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ot)){bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&re>=0&&re<=A.height-ne&&W.readPixels(X,re,te,ne,we.convert($e),we.convert(ot),Oe)}finally{const ke=ee!==null?ae.get(ee).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,te,ne,Oe,Ge,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe)if(X>=0&&X<=A.width-te&&re>=0&&re<=A.height-ne){E.bindFramebuffer(W.FRAMEBUFFER,Xe);const ke=A.textures[Le],$e=ke.format,ot=ke.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels(X,re,te,ne,we.convert($e),we.convert(ot),0);const Tt=ee!==null?ae.get(ee).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Tt);const Jt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await hb(W,Jt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.deleteBuffer(Ke),W.deleteSync(Jt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){const te=Math.pow(2,-re),ne=Math.floor(A.image.width*te),Oe=Math.floor(A.image.height*te),Ge=X!==null?X.x:0,Le=X!==null?X.y:0;fe.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,re,0,0,Ge,Le,ne,Oe),E.unbindTexture()},this.copyTextureToTexture=function(A,X,re=null,te=null,ne=0,Oe=0){let Ge,Le,Xe,ke,$e,ot,Ke,Tt,Jt;const Xt=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(re!==null)Ge=re.max.x-re.min.x,Le=re.max.y-re.min.y,Xe=re.isBox3?re.max.z-re.min.z:1,ke=re.min.x,$e=re.min.y,ot=re.isBox3?re.min.z:0;else{const jt=Math.pow(2,-ne);Ge=Math.floor(Xt.width*jt),Le=Math.floor(Xt.height*jt),A.isDataArrayTexture?Xe=Xt.depth:A.isData3DTexture?Xe=Math.floor(Xt.depth*jt):Xe=1,ke=0,$e=0,ot=0}te!==null?(Ke=te.x,Tt=te.y,Jt=te.z):(Ke=0,Tt=0,Jt=0);const Ot=we.convert(X.format),Pt=we.convert(X.type);let ze;X.isData3DTexture?(fe.setTexture3D(X,0),ze=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(fe.setTexture2DArray(X,0),ze=W.TEXTURE_2D_ARRAY):(fe.setTexture2D(X,0),ze=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const Nn=E.getParameter(W.UNPACK_ROW_LENGTH),pt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),xn=E.getParameter(W.UNPACK_SKIP_PIXELS),Jn=E.getParameter(W.UNPACK_SKIP_ROWS),Mi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Xt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Xt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(W.UNPACK_SKIP_ROWS,$e),E.pixelStorei(W.UNPACK_SKIP_IMAGES,ot);const jn=A.isDataArrayTexture||A.isData3DTexture,Ft=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const jt=ae.get(A),Ei=ae.get(X),Lt=ae.get(jt.__renderTarget),Pi=ae.get(Ei.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Lt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Fa=0;Fa<Xe;Fa++)jn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ne,ot+Fa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ae.get(X).__webglTexture,Oe,Jt+Fa)),W.blitFramebuffer(ke,$e,Ge,Le,Ke,Tt,Ge,Le,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||ae.has(A)){const jt=ae.get(A),Ei=ae.get(X);E.bindFramebuffer(W.READ_FRAMEBUFFER,ge),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,Y);for(let Lt=0;Lt<Xe;Lt++)jn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.__webglTexture,ne,ot+Lt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jt.__webglTexture,ne),Ft?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ei.__webglTexture,Oe,Jt+Lt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ei.__webglTexture,Oe),ne!==0?W.blitFramebuffer(ke,$e,Ge,Le,Ke,Tt,Ge,Le,W.COLOR_BUFFER_BIT,W.NEAREST):Ft?W.copyTexSubImage3D(ze,Oe,Ke,Tt,Jt+Lt,ke,$e,Ge,Le):W.copyTexSubImage2D(ze,Oe,Ke,Tt,ke,$e,Ge,Le);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(ze,Oe,Ke,Tt,Jt,Ge,Le,Xe,Ot,Pt,Xt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(ze,Oe,Ke,Tt,Jt,Ge,Le,Xe,Ot,Xt.data):W.texSubImage3D(ze,Oe,Ke,Tt,Jt,Ge,Le,Xe,Ot,Pt,Xt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,Ke,Tt,Ge,Le,Ot,Pt,Xt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,Ke,Tt,Xt.width,Xt.height,Ot,Xt.data):W.texSubImage2D(W.TEXTURE_2D,Oe,Ke,Tt,Ge,Le,Ot,Pt,Xt);E.pixelStorei(W.UNPACK_ROW_LENGTH,Nn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,xn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Jn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,Mi),Oe===0&&X.generateMipmaps&&W.generateMipmap(ze),E.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,E.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Mt._getUnpackColorSpace()}}const dt=s=>`./photos/${s}`,Lp=[{src:dt("bw_tree.jpg"),w:640,h:853,tone:"bw"},{src:dt("bw_crosswalk.jpg"),w:640,h:480,tone:"bw"},{src:dt("bw_stairs.jpg"),w:640,h:1137,tone:"bw"},{src:dt("bw_alley.jpg"),w:640,h:853,tone:"bw"},{src:dt("bw_window.jpg"),w:640,h:480,tone:"bw"},{src:dt("color_plane.jpg"),w:640,h:480,tone:"color"},{src:dt("color_diner.jpg"),w:640,h:557,tone:"color"},{src:dt("color_beach.jpg"),w:640,h:959,tone:"color"},{src:dt("color_jump.jpg"),w:640,h:424,tone:"color"},{src:dt("pol_woman.jpg"),w:736,h:969,tone:"polaroid"},{src:dt("pol_man.jpg"),w:736,h:969,tone:"polaroid"},{src:dt("pol_child.jpg"),w:736,h:969,tone:"polaroid"},{src:dt("xhs_graduation_01.jpg"),w:1920,h:2560,tone:"color"},{src:dt("xhs_city_01.jpg"),w:1440,h:1920,tone:"color"},{src:dt("xhs_city_02.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_city_03.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_city_04.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_city_05.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_city_06.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_journal_01.jpg"),w:1080,h:1440,tone:"polaroid"},{src:dt("xhs_journal_02.jpg"),w:1440,h:1080,tone:"polaroid"},{src:dt("xhs_journal_03.jpg"),w:1440,h:1080,tone:"polaroid"},{src:dt("xhs_journal_04.jpg"),w:1080,h:1440,tone:"polaroid"},{src:dt("xhs_journal_05.jpg"),w:1080,h:1289,tone:"polaroid"},{src:dt("xhs_journal_06.jpg"),w:1080,h:1440,tone:"polaroid"},{src:dt("xhs_journal_07.jpg"),w:1080,h:1440,tone:"polaroid"},{src:dt("xhs_bus_01.jpg"),w:1920,h:2560,tone:"polaroid"},{src:dt("xhs_telescope_01.jpg"),w:946,h:1262,tone:"polaroid"},{src:dt("xhs_tropical_01.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_tropical_03.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_tropical_05.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_tropical_06.jpg"),w:1080,h:1440,tone:"color"},{src:dt("xhs_tropical_08.jpg"),w:1536,h:2048,tone:"color"}],Di=[{id:"top",index:"00",title:"TOP",works:"",start:0,end:.1,card:[0,0],sweep:[.015,.105]},{id:"bw",index:"01",title:"SCENE EXPERIENCE",works:"68 WORKS",start:.1,end:.4,card:[.135,.215],sweep:[.115,.225]},{id:"color",index:"02",title:"HUMANISTIC MAPPING",works:"27 WORKS",start:.4,end:.72,card:[.435,.515],sweep:[.415,.525]},{id:"polaroid",index:"03",title:"STREAM OF CONSCIOUSNESS",works:"01 WORKS",start:.72,end:1,card:[.745,.815],sweep:[.725,.83]}],Vx=[{p:.56,src:dt("xhs_graduation_01.jpg"),caption:"COLOR 03"},{p:.615,src:dt("xhs_tropical_05.jpg"),caption:"COLOR 11"},{p:.67,src:dt("xhs_tropical_06.jpg"),caption:"COLOR 18"},{p:.845,src:dt("xhs_journal_01.jpg"),caption:"POLAROID 02"},{p:.885,src:dt("xhs_journal_05.jpg"),caption:"POLAROID 16"},{p:.925,src:dt("xhs_journal_07.jpg"),caption:"POLAROID 63"}],Ov=.026,Qu=.095,Pv=.955,JC=s=>{for(const e of Vx)if(s>=e.p-Ov&&s<=e.p+Ov)return e;return null},jC=s=>Di.find(e=>s>=e.start&&s<e.end)??Di[Di.length-1],ll=(s,e,i)=>Math.min(1,Math.max(0,(s-e)/(i-e))),$C=(s,e,i,r=.25)=>{if(s<=e||s>=i)return 0;const l=(s-e)/(i-e);return l<r?l/r:l>1-r?(1-l)/r:1},mr={x:0,y:0};let Fv=!1;function e3(){Fv||(Fv=!0,window.addEventListener("mousemove",s=>{mr.x=s.clientX/window.innerWidth*2-1,mr.y=s.clientY/window.innerHeight*2-1},{passive:!0}),window.addEventListener("touchmove",s=>{const e=s.touches[0];e&&(mr.x=e.clientX/window.innerWidth*2-1,mr.y=e.clientY/window.innerHeight*2-1)},{passive:!0}))}const t3=96,ks=s=>{const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)};function n3(){const s=[];let e=1;const i=(f,h,m,p=1)=>{e+=1;const g=(ks(e*3.3)-.5)*2.6,v=ks(e*7.1)*1.1;s.push({photo:f,x:h*(3.15+v),y:g,z:m,scale:p*(.85+ks(e*5.7)*.4),rotY:-h*(.08+ks(e*9.3)*.14),rotZ:(ks(e*11.9)-.5)*.09,phase:ks(e*13.7)*Math.PI*2})},r=[0,1,2,3,4],l=[13,14,15,16,17,18,29],u=[20,21,22,24];return i(28,-1,-6.5,1.05),i(32,-1,-9,.9),i(26,1,-7,1.05),i(27,1,-9.5,.9),r.forEach((f,h)=>i(f,h%2===0?-1:1,-12.5-h*5.7)),l.forEach((f,h)=>i(f,h%2===0?1:-1,-40-h*4.4)),u.forEach((f,h)=>i(f,h%2===0?-1:1,-70.5-h*6.4,.9)),s}function i3({progressRef:s,trackingRef:e,onPhotoClick:i}){const r=ue.useRef(null);return ue.useEffect(()=>{e3();const l=r.current;if(!l)return;const u=new QC({antialias:!0,alpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setSize(window.innerWidth,window.innerHeight),u.setClearColor(0,1),l.appendChild(u.domElement);const f=new wb;f.fog=new Cp(0,5.5,24);const h=new xi(58,window.innerWidth/window.innerHeight,.1,60);h.position.set(0,0,0);const m=new Qb,p=new nl;f.add(p);const g=[],v=[];for(const D of n3()){const b=Lp[D.photo],L=m.load(b.src);L.colorSpace=li,L.anisotropy=u.capabilities.getMaxAnisotropy(),L.minFilter=hr,L.magFilter=Ln,L.generateMipmaps=!0;const q=b.w/b.h,G=3.3*D.scale,Z=G/q,he=new ml(G,Z),ge=new Dp({map:L,toneMapped:!1,fog:!0}),Y=new Qi(he,ge);Y.position.set(D.x,D.y,D.z),Y.rotation.set(0,D.rotY,D.rotZ),Y.userData={photoIndex:D.photo,baseY:D.y,phase:D.phase,baseRotZ:D.rotZ},p.add(Y),g.push(Y),v.push(he,ge,L)}const _=new $b,M=new Ct;let T=0,C=0;const S=D=>{T=D.clientX,C=D.clientY},y=D=>{if(Math.hypot(D.clientX-T,D.clientY-C)>6)return;M.set(D.clientX/window.innerWidth*2-1,-(D.clientY/window.innerHeight)*2+1),_.setFromCamera(M,h);const b=_.intersectObjects(g,!1)[0];b&&i(b.object.userData.photoIndex)};u.domElement.addEventListener("pointerdown",S),u.domElement.addEventListener("pointerup",y);const F=()=>{h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",F);let I=0;const w=new eT,P={x:0,y:0,z:0},O=()=>{I=requestAnimationFrame(O);const D=w.getElapsedTime(),b=-s.current*t3,L=e.current,q=L?mr.x*1.05:0,G=L?-mr.y*.65:0;P.z+=(b-P.z)*.075,P.x+=(q-P.x)*.055,P.y+=(G-P.y)*.055,h.position.set(P.x,P.y,P.z),h.lookAt(P.x*.55,P.y*.55,P.z-9);for(const Z of g)Z.position.y=Z.userData.baseY+Math.sin(D*.45+Z.userData.phase)*.13,Z.rotation.z=Z.userData.baseRotZ+Math.sin(D*.3+Z.userData.phase)*.012;u.render(f,h)};return O(),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",F),u.domElement.removeEventListener("pointerdown",S),u.domElement.removeEventListener("pointerup",y),v.forEach(D=>D.dispose()),u.dispose(),l.removeChild(u.domElement)}},[s,e,i]),qe.jsx("div",{ref:r,className:"fixed inset-0 z-0","aria-hidden":!0})}let Iv=!1;function a3(){if(!Iv){Iv=!0;for(const s of Vx){const e=new Image;e.src=s.src}}}function r3({stop:s}){const e=ue.useRef(null);ue.useEffect(a3,[]),ue.useEffect(()=>{let l=0;const u={x:0,y:0},f=()=>{l=requestAnimationFrame(f),u.x+=(mr.x*-14-u.x)*.06,u.y+=(mr.y*-9-u.y)*.06,e.current&&(e.current.style.transform=`translate3d(${u.x.toFixed(2)}px, ${u.y.toFixed(2)}px, 0)`)};return f(),()=>cancelAnimationFrame(l)},[]);const i=ue.useMemo(()=>s?Lp.find(l=>l.src===s.src)??null:null,[s]);if(!s||!i)return null;const r=i.w/i.h;return qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 flex flex-col items-center justify-center",children:qe.jsxs("div",{ref:e,className:"will-change-transform",children:[qe.jsx("img",{src:i.src,alt:"",draggable:!1,className:"block object-contain",style:{aspectRatio:`${i.w} / ${i.h}`,width:`min(30vw, calc(44vh * ${r}))`}}),qe.jsxs("div",{className:"mt-4 flex items-center justify-center gap-3",children:[qe.jsx("span",{className:"h-px w-8 bg-white/40"}),qe.jsx("p",{className:"text-[10px] font-medium uppercase text-white/80",style:{letterSpacing:"0.42em"},children:s.caption}),qe.jsx("span",{className:"h-px w-8 bg-white/40"})]})]})})}function s3({text:s,range:e,progress:i}){const[r,l]=e;if(i<=r-.01||i>=l+.01)return null;const u=ll(i,r,l),f=(.5-u)*170,h=u<.12?u/.12:u>.88?(1-u)/.12:1;return qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-10 overflow-hidden",children:qe.jsx("h2",{className:"absolute left-1/2 top-1/2 whitespace-nowrap font-black text-white",style:{fontFamily:"'Archivo', sans-serif",fontSize:"clamp(76px, 13.5vw, 250px)",letterSpacing:"0.05em",lineHeight:1,transform:`translate(calc(-50% + ${f.toFixed(2)}vw), -50%)`,opacity:h*.36},children:s})})}const mh=ue.memo(s3),Bv={fontFamily:"'Space Grotesk', sans-serif"},o3={fontFamily:"'Archivo', sans-serif"};function l3({progress:s}){const e=jC(s),i=r=>{const l=document.documentElement.scrollHeight-window.innerHeight;window.scrollTo({top:r*l+2,behavior:"smooth"})};return qe.jsxs(qe.Fragment,{children:[qe.jsx("div",{className:"grain pointer-events-none fixed inset-0 z-30"}),qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-30",style:{background:"radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,0.55) 100%)"}}),qe.jsxs("header",{className:"fixed left-6 top-6 z-40 flex items-baseline gap-4 md:left-8 md:top-7",children:[qe.jsx("span",{className:"text-sm font-bold uppercase text-white",style:{...o3,letterSpacing:"0.32em"},children:"Yilin Lu"}),qe.jsx("span",{className:"hidden text-[9px] uppercase text-white/45 sm:inline",style:{...Bv,letterSpacing:"0.34em"},children:"A gallery of light and shadow"})]}),qe.jsx("nav",{className:"fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 md:right-8 md:flex",children:Di.map(r=>{const l=e.id===r.id;return qe.jsxs("button",{onClick:()=>i(r.start),className:"group flex items-center gap-3",children:[qe.jsxs("span",{className:"text-[9px] uppercase transition-all duration-300",style:{...Bv,letterSpacing:"0.26em",color:l?"rgba(255,255,255,0.95)":"rgba(255,255,255,0.32)"},children:[r.index," · ",r.title]}),qe.jsx("span",{className:"rounded-full transition-all duration-300",style:{width:l?7:5,height:l?7:5,background:l?"#fff":"rgba(255,255,255,0.3)",boxShadow:l?"0 0 10px rgba(255,255,255,0.7)":"none"}})]},r.id)})})]})}const u3=ue.memo(l3);function c3({photoIndex:s,onClose:e}){if(ue.useEffect(()=>{if(s===null)return;const r=l=>l.key==="Escape"&&e();return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[s,e]),s===null)return null;const i=Lp[s];return qe.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-6 backdrop-blur-sm",onClick:e,style:{animation:"lb-fade 0.28s ease both"},children:qe.jsxs("figure",{className:"max-h-full",onClick:r=>r.stopPropagation(),children:[qe.jsx("img",{src:i.src,alt:"gallery photo",className:"mx-auto max-h-[80vh] max-w-[88vw] border border-white/15 object-contain shadow-2xl shadow-black",style:{animation:"lb-zoom 0.35s cubic-bezier(0.22, 1, 0.36, 1) both"}}),qe.jsxs("figcaption",{className:"mt-4 flex items-center justify-center gap-3",children:[qe.jsx("span",{className:"h-px w-8 bg-white/40"}),qe.jsxs("span",{className:"text-[10px] font-medium uppercase text-white/75",style:{letterSpacing:"0.42em",fontFamily:"'Space Grotesk', sans-serif"},children:[i.tone==="bw"?"Black & White":i.tone==="color"?"Color":"Polaroid"," — click anywhere to close"]}),qe.jsx("span",{className:"h-px w-8 bg-white/40"})]})]})})}const dc={fontFamily:"'Archivo', sans-serif"},Wr={fontFamily:"'Space Grotesk', sans-serif"},f3=ue.memo(function({progress:e}){if(e>Qu)return null;const i=1-ll(e,Qu*.55,Qu),r=ll(e,0,Qu)*-40;return qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 flex items-center justify-center",style:{opacity:i},children:qe.jsxs("div",{className:"text-center",style:{transform:`translateY(${r.toFixed(1)}px)`},children:[qe.jsx("p",{className:"mb-6 text-[10px] font-medium uppercase text-white/55",style:{...Wr,letterSpacing:"0.62em"},children:"Photography"}),qe.jsx("h1",{className:"font-black uppercase leading-[0.95] text-white",style:{...dc,fontSize:"clamp(36px, 5.6vw, 88px)",letterSpacing:"0.04em",opacity:.72},children:"My Life"}),qe.jsx("p",{className:"mt-3 text-sm font-medium uppercase text-white/85",style:{...dc,letterSpacing:"0.55em"},children:"Photography"}),qe.jsx("div",{className:"mx-auto mt-7 h-px w-24 bg-white/35"}),qe.jsx("p",{className:"mt-7 text-[10px] uppercase text-white/55",style:{...Wr,letterSpacing:"0.5em"},children:"A gallery of light and shadow"}),qe.jsx("p",{className:"mt-2 text-[9px] uppercase text-white/30",style:{...Wr,letterSpacing:"0.4em"},children:"Three.js × scroll experiment"})]})})}),d3=ue.memo(function({progress:e}){return qe.jsx(qe.Fragment,{children:Di.filter(i=>i.id!=="top").map(i=>{const r=$C(e,i.card[0],i.card[1],.28);if(r<=0)return null;const l=ll(e,i.card[0],i.card[1]);return qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 flex items-center justify-center",style:{opacity:r*.62},children:qe.jsxs("div",{className:"text-center",style:{transform:`translateY(${(.5-l)*46}px)`},children:[qe.jsx("p",{className:"mb-5 text-[11px] font-medium text-white/60",style:{...Wr,letterSpacing:"0.6em"},children:i.index}),qe.jsx("h2",{className:"font-black uppercase leading-none text-white",style:{...dc,fontSize:i.title.length>20?"clamp(20px, 2.5vw, 42px)":i.title.length>16?"clamp(22px, 2.9vw, 48px)":"clamp(26px, 3.4vw, 56px)",letterSpacing:"0.08em"},children:i.title}),qe.jsx("div",{className:"mx-auto mt-6 h-px w-16 bg-white/35"}),qe.jsx("p",{className:"mt-6 text-[10px] uppercase text-white/55",style:{...Wr,letterSpacing:"0.5em"},children:i.works})]})},i.id)})})}),h3=ue.memo(function({progress:e}){if(e<Pv)return null;const i=ll(e,Pv,1);return qe.jsx("div",{className:"pointer-events-none fixed inset-0 z-20 flex items-center justify-center",style:{opacity:i},children:qe.jsxs("div",{className:"text-center",children:[qe.jsx("h2",{className:"font-black uppercase leading-[0.95] text-white",style:{...dc,fontSize:"clamp(34px, 5.2vw, 82px)",letterSpacing:"0.04em",opacity:.72},children:"My Life"}),qe.jsx("p",{className:"mt-4 text-[11px] uppercase text-white/60",style:{...Wr,letterSpacing:"0.5em"},children:"A gallery of light and shadow"}),qe.jsx("div",{className:"mx-auto mt-8 h-px w-16 bg-white/30"}),qe.jsx("p",{className:"mt-8 text-[9px] uppercase text-white/30",style:{...Wr,letterSpacing:"0.42em"},children:"© MMXXVI — end of gallery — scroll back to revisit"})]})})}),p3=1400;function m3(){const[s,e]=ue.useState(0),[i,r]=ue.useState(null),l=ue.useRef(0),u=ue.useRef(!0);ue.useEffect(()=>{const p=()=>{const M=document.documentElement.scrollHeight-window.innerHeight,T=M>0?Math.min(1,Math.max(0,window.scrollY/M)):0;l.current=T};p();let g=-1,v=0;const _=()=>{v=requestAnimationFrame(_),p();const M=l.current;(Math.abs(M-g)>6e-4||M===0&&g!==0||M===1&&g!==1)&&(g=M,e(M))};return _(),window.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{cancelAnimationFrame(v),window.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[]);const f=ue.useCallback(p=>r(p),[]),h=ue.useCallback(()=>r(null),[]),m=JC(s);return qe.jsxs("div",{className:"bg-black text-white antialiased",children:[qe.jsx("div",{style:{height:`${p3}vh`},"aria-hidden":!0}),qe.jsx(i3,{progressRef:l,trackingRef:u,onPhotoClick:f}),qe.jsx(mh,{text:Di[1].title,range:Di[1].sweep,progress:s}),qe.jsx(mh,{text:Di[2].title,range:Di[2].sweep,progress:s}),qe.jsx(mh,{text:Di[3].title,range:Di[3].sweep,progress:s}),qe.jsx(f3,{progress:s}),qe.jsx(d3,{progress:s}),qe.jsx(h3,{progress:s}),qe.jsx(r3,{stop:m}),qe.jsx(u3,{progress:s}),qe.jsx(c3,{photoIndex:i,onClose:h})]})}eM.createRoot(document.getElementById("root")).render(qe.jsx(ue.StrictMode,{children:qe.jsx(EE,{children:qe.jsx(m3,{})})}));
