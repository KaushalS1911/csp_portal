import{r as a}from"./index-cs8KH1Gj.js";function U(e,l,n){return e?Math.max(0,(1+e)*l-n):0}function r(e,l,n){return e[n]===null?1:l[n]===null||l[n]<e[n]?-1:l[n]>e[n]?1:0}function E(e,l){return e==="desc"?(n,c)=>r(n,c,l):(n,c)=>-r(n,c,l)}function T(e){const[l,n]=a.useState(!!(e!=null&&e.defaultDense)),[c,u]=a.useState((e==null?void 0:e.defaultCurrentPage)||0),[d,P]=a.useState((e==null?void 0:e.defaultOrderBy)||"name"),[C,S]=a.useState((e==null?void 0:e.defaultRowsPerPage)||5),[o,k]=a.useState((e==null?void 0:e.defaultOrder)||"asc"),[f,g]=a.useState((e==null?void 0:e.defaultSelected)||[]),w=a.useCallback(t=>{t!==""&&(k(d===t&&o==="asc"?"desc":"asc"),P(t))},[o,d]),b=a.useCallback(t=>{const s=f.includes(t)?f.filter(i=>i!==t):[...f,t];g(s)},[f]),h=a.useCallback(t=>{u(0),S(parseInt(t.target.value,10))},[]),m=a.useCallback(t=>{n(t.target.checked)},[]),R=a.useCallback((t,s)=>{if(t){g(s);return}g([])},[]),D=a.useCallback((t,s)=>{u(s)},[]),O=a.useCallback(()=>{u(0)},[]),x=a.useCallback(t=>{g([]),c&&t<2&&u(c-1)},[c]),A=a.useCallback(({totalRowsInPage:t,totalRowsFiltered:s})=>{const i=f.length;if(g([]),c){if(i===t)u(c-1);else if(i===s)u(0);else if(i>t){const v=Math.ceil((s-i)/C)-1;u(v)}}},[c,C,f.length]);return{dense:l,order:o,page:c,orderBy:d,rowsPerPage:C,selected:f,onSelectRow:b,onSelectAllRows:R,onSort:w,onChangePage:D,onChangeDense:m,onResetPage:O,onChangeRowsPerPage:h,onUpdatePageDeleteRow:x,onUpdatePageDeleteRows:A,setPage:u,setDense:n,setOrder:k,setOrderBy:P,setSelected:g,setRowsPerPage:S}}export{U as e,E as g,T as u};
