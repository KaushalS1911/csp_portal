import{cg as C,r as s,j as e,C as c,p as x,B as h,S as u,T as i,I as j,bq as g,d as b,e as f,H as y}from"./index-ylP9gOtX.js";import{u as k}from"./use-double-click-nGsJHoqU.js";import{u as T}from"./use-copy-to-clipboard-2xeDZM1L.js";import{C as v}from"./custom-breadcrumbs-nwVkFrxi.js";import{C as q}from"./Card-ecWVyrcr.js";import{T as S}from"./TextField-nL73yr2I.js";import"./index-q81m-9gd.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./Menu-Tm01f5kQ.js";function P(){const{enqueueSnackbar:r}=C(),{copy:t}=T(),[a,p]=s.useState("https://www.npmjs.com/package/"),n=`Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
  Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat
  dolor lectus quis orci. Cras non dolor. Praesent egestas neque eu enim. Ut varius
  tincidunt libero. Fusce fermentum odio nec arcu. Etiam rhoncus. Nulla sit amet est.
  Donec posuere vulputate arcu. Vestibulum ullamcorper mauris at ligula. Praesent ut
  ligula non mi varius sagittis. Pellentesque posuere. Praesent adipiscing. Sed
  libero. Duis leo. Nulla porta dolor.`,l=s.useCallback(o=>{o&&(r("Copied!"),t(o))},[t,r]),d=k({doubleClick:()=>l(n)}),m=s.useCallback(o=>{p(o.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx(v,{heading:"Copy To Clipboard",links:[{name:"Components",href:x.components},{name:"Copy To Clipboard"}]})}),e.jsx(c,{sx:{my:10},children:e.jsx(q,{sx:{p:5},children:e.jsxs(h,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},gap:5,children:[e.jsxs(u,{spacing:2,children:[e.jsx(i,{variant:"overline",sx:{color:"text.secondary"},children:"on Change"}),e.jsx(S,{fullWidth:!0,value:a,onChange:m,InputProps:{endAdornment:e.jsx(j,{position:"end",children:e.jsx(g,{title:"Copy",children:e.jsx(b,{onClick:()=>l(a),children:e.jsx(f,{icon:"eva:copy-fill",width:24})})})})}})]}),e.jsxs(u,{spacing:2,children:[e.jsx(i,{variant:"overline",sx:{color:"text.secondary"},children:"on Double Click"}),e.jsx(i,{onClick:d,children:n})]})]})})})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx("title",{children:" Components: to Clipboard"})}),e.jsx(P,{})]})}export{W as default};