import{cC as h,cD as y,cE as b,cF as l,cv as g}from"./index-cs8KH1Gj.js";function v(r,e){for(var a=-1,t=r==null?0:r.length,n=Array(t);++a<t;)n[a]=e(r[a],a,r);return n}var _=v,d=h,T=y,C="[object Symbol]";function S(r){return typeof r=="symbol"||T(r)&&d(r)==C}var E=S,u=b,z="Expected a function";function o(r,e){if(typeof r!="function"||e!=null&&typeof e!="function")throw new TypeError(z);var a=function(){var t=arguments,n=e?e.apply(this,t):t[0],i=a.cache;if(i.has(n))return i.get(n);var c=r.apply(this,t);return a.cache=i.set(n,c)||i,c};return a.cache=new(o.Cache||u),a}o.Cache=u;var M=o,$=M,A=500;function I(r){var e=$(r,function(t){return a.size===A&&a.clear(),t}),a=e.cache;return e}var w=I,N=w,O=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,P=/\\(\\)?/g,j=N(function(r){var e=[];return r.charCodeAt(0)===46&&e.push(""),r.replace(O,function(a,t,n,i){e.push(n?i.replace(P,"$1"):t||a)}),e}),L=j,s=l,k=_,x=g,F=E,R=1/0,p=s?s.prototype:void 0,m=p?p.toString:void 0;function f(r){if(typeof r=="string")return r;if(x(r))return k(r,f)+"";if(F(r))return m?m.call(r):"";var e=r+"";return e=="0"&&1/r==-R?"-0":e}var X=f;export{_,X as a,L as b,E as i};
