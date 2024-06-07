import{r as _,af as vt}from"./index-cs8KH1Gj.js";var Pt={exports:{}},Ut={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y=_;function Qt(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:Qt,te=Y.useState,ee=Y.useEffect,ne=Y.useLayoutEffect,se=Y.useDebugValue;function oe(t,e){var n=e(),r=te({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return ne(function(){s.value=n,s.getSnapshot=e,ft(s)&&i({inst:s})},[t,n,e]),ee(function(){return ft(s)&&i({inst:s}),t(function(){ft(s)&&i({inst:s})})},[t]),se(n),n}function ft(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function re(t,e){return e()}var ie=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?re:oe;Ut.useSyncExternalStore=Y.useSyncExternalStore!==void 0?Y.useSyncExternalStore:ie;Pt.exports=Ut;var ae=Pt.exports;const P=()=>{},O=P(),lt=Object,a=t=>t===O,M=t=>typeof t=="function",U=(t,e)=>({...t,...e}),ce=t=>M(t.then),rt=new WeakMap;let ue=0;const tt=t=>{const e=typeof t,n=t&&t.constructor,r=n==Date;let s,i;if(lt(t)===t&&!r&&n!=RegExp){if(s=rt.get(t),s)return s;if(s=++ue+"~",rt.set(t,s),n==Array){for(s="@",i=0;i<t.length;i++)s+=tt(t[i])+",";rt.set(t,s)}if(n==lt){s="#";const c=lt.keys(t).sort();for(;!a(i=c.pop());)a(t[i])||(s+=i+":"+tt(t[i])+",");rt.set(t,s)}}else s=r?t.toJSON():e=="symbol"?t.toString():e=="string"?JSON.stringify(t):""+t;return s},W=new WeakMap,dt={},it={},wt="undefined",at=typeof window!=wt,_t=typeof document!=wt,fe=()=>at&&typeof window.requestAnimationFrame!=wt,qt=(t,e)=>{const n=W.get(t);return[()=>!a(e)&&t.get(e)||dt,r=>{if(!a(e)){const s=t.get(e);e in it||(it[e]=s),n[5](e,U(s,r),s||dt)}},n[6],()=>!a(e)&&e in it?it[e]:!a(e)&&t.get(e)||dt]};let pt=!0;const le=()=>pt,[St,Tt]=at&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[P,P],de=()=>{const t=_t&&document.visibilityState;return a(t)||t!=="hidden"},Ee=t=>(_t&&document.addEventListener("visibilitychange",t),St("focus",t),()=>{_t&&document.removeEventListener("visibilitychange",t),Tt("focus",t)}),Re=t=>{const e=()=>{pt=!0,t()},n=()=>{pt=!1};return St("online",e),St("offline",n),()=>{Tt("online",e),Tt("offline",n)}},he={isOnline:le,isVisible:de},_e={initFocus:Ee,initReconnect:Re},xt=!vt.useId,et=!at||"Deno"in window,pe=t=>fe()?window.requestAnimationFrame(t):setTimeout(t,1),Et=et?_.useEffect:_.useLayoutEffect,Rt=typeof navigator<"u"&&navigator.connection,Ft=!et&&Rt&&(["slow-2g","2g"].includes(Rt.effectiveType)||Rt.saveData),gt=t=>{if(M(t))try{t=t()}catch{t=""}const e=t;return t=typeof t=="string"?t:(Array.isArray(t)?t.length:t)?tt(t):"",[t,e]};let Se=0;const mt=()=>++Se,Ht=0,jt=1,kt=2,Te=3;var Z={__proto__:null,ERROR_REVALIDATE_EVENT:Te,FOCUS_EVENT:Ht,MUTATE_EVENT:kt,RECONNECT_EVENT:jt};async function $t(...t){const[e,n,r,s]=t,i=U({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let c=i.populateCache;const E=i.rollbackOnError;let d=i.optimisticData;const V=i.revalidate!==!1,p=D=>typeof E=="function"?E(D):E!==!1,S=i.throwOnError;if(M(n)){const D=n,m=[],C=e.keys();for(const I of C)!/^\$(inf|sub)\$/.test(I)&&D(e.get(I)._k)&&m.push(I);return Promise.all(m.map(y))}return y(n);async function y(D){const[m]=gt(D);if(!m)return;const[C,I]=qt(e,m),[o,k,X,q]=W.get(e),H=()=>{const w=o[m];return V&&(delete X[m],delete q[m],w&&w[0])?w[0](kt).then(()=>C().data):C().data};if(t.length<3)return H();let v=r,b;const R=mt();k[m]=[R,0];const $=!a(d),L=C(),z=L.data,nt=L._c,j=a(nt)?z:nt;if($&&(d=M(d)?d(j,z):d,I({data:d,_c:j})),M(v))try{v=v(j)}catch(w){b=w}if(v&&ce(v))if(v=await v.catch(w=>{b=w}),R!==k[m][0]){if(b)throw b;return v}else b&&$&&p(b)&&(c=!0,I({data:j,_c:O}));if(c&&!b)if(M(c)){const w=c(v,j);I({data:w,error:O,_c:O})}else I({data:v,error:O,_c:O});if(k[m][1]=mt(),Promise.resolve(H()).then(()=>{I({_c:O})}),b){if(S)throw b;return}return v}}const Wt=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},me=(t,e)=>{if(!W.has(t)){const n=U(_e,e),r={},s=$t.bind(O,t);let i=P;const c={},E=(p,S)=>{const y=c[p]||[];return c[p]=y,y.push(S),()=>y.splice(y.indexOf(S),1)},d=(p,S,y)=>{t.set(p,S);const D=c[p];if(D)for(const m of D)m(S,y)},V=()=>{if(!W.has(t)&&(W.set(t,[r,{},{},{},s,d,E]),!et)){const p=n.initFocus(setTimeout.bind(O,Wt.bind(O,r,Ht))),S=n.initReconnect(setTimeout.bind(O,Wt.bind(O,r,jt)));i=()=>{p&&p(),S&&S(),W.delete(t)}}};return V(),[t,s,V,i]}return[t,W.get(t)[4]]},ve=(t,e,n,r,s)=>{const i=n.errorRetryCount,c=s.retryCount,E=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!a(i)&&c>i||setTimeout(r,E,s)},we=(t,e)=>tt(t)==tt(e),[zt,ge]=me(new Map),Oe=U({onLoadingSlow:P,onSuccess:P,onError:P,onErrorRetry:ve,onDiscarded:P,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ft?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ft?5e3:3e3,compare:we,isPaused:()=>!1,cache:zt,mutate:ge,fallback:{}},he),De=(t,e)=>{const n=U(t,e);if(e){const{use:r,fallback:s}=t,{use:i,fallback:c}=e;r&&i&&(n.use=r.concat(i)),s&&c&&(n.fallback=U(s,c))}return n},Ce=_.createContext({}),be="$inf$",Bt=at&&window.__SWR_DEVTOOLS_USE__,Ae=Bt?window.__SWR_DEVTOOLS_USE__:[],Ve=()=>{Bt&&(window.__SWR_DEVTOOLS_REACT__=vt)},ye=t=>M(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(t[1]===null?t[2]:t[1])||{}],Ie=()=>U(Oe,_.useContext(Ce)),Le=t=>(e,n,r)=>t(e,n&&((...i)=>{const[c]=gt(e),[,,,E]=W.get(zt);if(c.startsWith(be))return n(...i);const d=E[c];return a(d)?n(...i):(delete E[c],d)}),r),Ne=Ae.concat(Le),xe=t=>function(...n){const r=Ie(),[s,i,c]=ye(n),E=De(r,c);let d=t;const{use:V}=E,p=(V||[]).concat(Ne);for(let S=p.length;S--;)d=p[S](d);return d(s,i||E.fetcher||null,E)},Fe=(t,e,n)=>{const r=e[t]||(e[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s>=0&&(r[s]=r[r.length-1],r.pop())}};Ve();const Mt=vt.use||(t=>{if(t.status==="pending")throw t;if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e}),t)}),ht={dedupe:!0},We=(t,e,n)=>{const{cache:r,compare:s,suspense:i,fallbackData:c,revalidateOnMount:E,revalidateIfStale:d,refreshInterval:V,refreshWhenHidden:p,refreshWhenOffline:S,keepPreviousData:y}=n,[D,m,C,I]=W.get(r),[o,k]=gt(t),X=_.useRef(!1),q=_.useRef(!1),H=_.useRef(o),v=_.useRef(e),b=_.useRef(n),R=()=>b.current,$=()=>R().isVisible()&&R().isOnline(),[L,z,nt,j]=qt(r,o),w=_.useRef({}).current,Jt=a(c)?n.fallback[o]:c,Ot=(u,f)=>{for(const T in w){const l=T;if(l==="data"){if(!s(u[l],f[l])&&(!a(u[l])||!s(ot,f[l])))return!1}else if(f[l]!==u[l])return!1}return!0},Dt=_.useMemo(()=>{const u=!o||!e?!1:a(E)?R().isPaused()||i?!1:a(d)?!0:d:E,f=g=>{const x=U(g);return delete x._k,u?{isValidating:!0,isLoading:!0,...x}:x},T=L(),l=j(),N=f(T),G=T===l?N:f(l);let h=N;return[()=>{const g=f(L());return Ot(g,h)?(h.data=g.data,h.isLoading=g.isLoading,h.isValidating=g.isValidating,h.error=g.error,h):(h=g,g)},()=>G]},[r,o]),B=ae.useSyncExternalStore(_.useCallback(u=>nt(o,(f,T)=>{Ot(T,f)||u()}),[r,o]),Dt[0],Dt[1]),Ct=!X.current,Kt=D[o]&&D[o].length>0,J=B.data,K=a(J)?Jt:J,st=B.error,bt=_.useRef(K),ot=y?a(J)?bt.current:J:K,At=Kt&&!a(st)?!1:Ct&&!a(E)?E:R().isPaused()?!1:i?a(K)?!1:d:a(K)||d,Vt=!!(o&&e&&Ct&&At),Gt=a(B.isValidating)?Vt:B.isValidating,Yt=a(B.isLoading)?Vt:B.isLoading,Q=_.useCallback(async u=>{const f=v.current;if(!o||!f||q.current||R().isPaused())return!1;let T,l,N=!0;const G=u||{},h=!C[o]||!G.dedupe,g=()=>xt?!q.current&&o===H.current&&X.current:o===H.current,x={isValidating:!1,isLoading:!1},It=()=>{z(x)},Lt=()=>{const A=C[o];A&&A[1]===l&&delete C[o]},Nt={isValidating:!0};a(L().data)&&(Nt.isLoading=!0);try{if(h&&(z(Nt),n.loadingTimeout&&a(L().data)&&setTimeout(()=>{N&&g()&&R().onLoadingSlow(o,n)},n.loadingTimeout),C[o]=[f(k),mt()]),[T,l]=C[o],T=await T,h&&setTimeout(Lt,n.dedupingInterval),!C[o]||C[o][1]!==l)return h&&g()&&R().onDiscarded(o),!1;x.error=O;const A=m[o];if(!a(A)&&(l<=A[0]||l<=A[1]||A[1]===0))return It(),h&&g()&&R().onDiscarded(o),!1;const F=L().data;x.data=s(F,T)?F:T,h&&g()&&R().onSuccess(T,o,n)}catch(A){Lt();const F=R(),{shouldRetryOnError:ct}=F;F.isPaused()||(x.error=A,h&&g()&&(F.onError(A,o,F),(ct===!0||M(ct)&&ct(A))&&$()&&F.onErrorRetry(A,o,F,Xt=>{const ut=D[o];ut&&ut[0]&&ut[0](Z.ERROR_REVALIDATE_EVENT,Xt)},{retryCount:(G.retryCount||0)+1,dedupe:!0})))}return N=!1,It(),!0},[o,r]),yt=_.useCallback((...u)=>$t(r,H.current,...u),[]);if(Et(()=>{v.current=e,b.current=n,a(J)||(bt.current=J)}),Et(()=>{if(!o)return;const u=Q.bind(O,ht);let f=0;const l=Fe(o,D,(N,G={})=>{if(N==Z.FOCUS_EVENT){const h=Date.now();R().revalidateOnFocus&&h>f&&$()&&(f=h+R().focusThrottleInterval,u())}else if(N==Z.RECONNECT_EVENT)R().revalidateOnReconnect&&$()&&u();else{if(N==Z.MUTATE_EVENT)return Q();if(N==Z.ERROR_REVALIDATE_EVENT)return Q(G)}});return q.current=!1,H.current=o,X.current=!0,z({_k:k}),At&&(a(K)||et?u():pe(u)),()=>{q.current=!0,l()}},[o]),Et(()=>{let u;function f(){const l=M(V)?V(L().data):V;l&&u!==-1&&(u=setTimeout(T,l))}function T(){!L().error&&(p||R().isVisible())&&(S||R().isOnline())?Q(ht).then(f):f()}return f(),()=>{u&&(clearTimeout(u),u=-1)}},[V,p,S,o]),_.useDebugValue(ot),i&&a(K)&&o){if(!xt&&et)throw new Error("Fallback data is required when using suspense in SSR.");v.current=e,b.current=n,q.current=!1;const u=I[o];if(!a(u)){const f=yt(u);Mt(f)}if(a(st)){const f=Q(ht);a(ot)||(f.status="fulfilled",f.value=!0),Mt(f)}else throw st}return{mutate:yt,get data(){return w.data=!0,ot},get error(){return w.error=!0,st},get isValidating(){return w.isValidating=!0,Gt},get isLoading(){return w.isLoading=!0,Yt}}},Pe=xe(We);export{ge as m,ae as s,Pe as u};
