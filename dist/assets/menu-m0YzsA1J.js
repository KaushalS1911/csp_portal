import{r as s,j as e,p as I,C as O,B as H,f as S,ae as a,bx as v,K as B,Y as T,d as y,e as L,H as P}from"./index-cs8KH1Gj.js";import{C as E}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as w}from"./component-hero-dZ0JuJQy.js";import{C as o}from"./component-block-eWblxNY5.js";import{M as i}from"./Menu-gk9ZpIDp.js";import"./index-q81m-9gd.js";import"./CardHeader-QV_NYi3u.js";const C=["Show some love to Material-UI","Show all notification content","Hide sensitive notification content","Hide all notification content"],A=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function N(){const[r,j]=s.useState(1),[c,d]=s.useState(null),[m,u]=s.useState(null),[h,p]=s.useState(null),k=s.useCallback(n=>{p(n.currentTarget)},[]),g=s.useCallback(n=>{u(n.currentTarget)},[]),f=s.useCallback((n,t)=>{j(t),u(null)},[]),M=s.useCallback(n=>{d(n.currentTarget)},[]),l=s.useCallback(()=>{d(null)},[]),x=s.useCallback(()=>{p(null)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(w,{children:e.jsx(E,{heading:"Menu",links:[{name:"Components",href:I.components},{name:"Menu"}],moreLink:["https://mui.com/components/menus"]})}),e.jsx(O,{sx:{my:10},children:e.jsxs(H,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(o,{title:"Simple",children:[e.jsx(S,{variant:"outlined",onClick:M,children:"Open Menu"}),e.jsx(i,{id:"simple-menu",anchorEl:c,onClose:l,open:!!c,children:["Profile","My account","Logout"].map(n=>e.jsx(a,{selected:n==="Profile",onClick:l,children:n},n))})]}),e.jsxs(o,{title:"Selected",children:[e.jsx(v,{component:"nav","aria-label":"Device settings",children:e.jsx(B,{"aria-haspopup":"true","aria-controls":"lock-menu","aria-label":"when device is locked",onClick:g,children:e.jsx(T,{primary:"When device is locked",secondary:C[r]})})}),e.jsx(i,{id:"lock-menu",anchorEl:m,onClose:l,open:!!m,children:C.map((n,t)=>e.jsx(a,{disabled:t===0,selected:t===r,onClick:b=>f(b,t),children:n},n))})]}),e.jsxs(o,{title:"Max height",children:[e.jsx(y,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:k,children:e.jsx(L,{icon:"eva:more-vertical-fill"})}),e.jsx(i,{id:"long-menu",anchorEl:h,onClose:x,open:!!h,slotProps:{paper:{sx:{width:"20ch",maxHeight:48*4.5}}},children:A.map(n=>e.jsx(a,{selected:n==="Pyxis",onClick:x,children:n},n))})]})]})})]})}function W(){return e.jsxs(e.Fragment,{children:[e.jsx(P,{children:e.jsx("title",{children:" MUI: Accordion"})}),e.jsx(N,{})]})}export{W as default};