import{ax as x,aw as p,$ as u,T as f,r as j,an as T,ao as g,j as t,al as A,ap as v,aq as C,p as y,C as w,f as n,w as k,H as M}from"./index-cs8KH1Gj.js";import{C as U}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as z}from"./component-hero-dZ0JuJQy.js";import{C as r}from"./component-block-eWblxNY5.js";import{M as R}from"./Masonry-nmMLxsdh.js";import{A as e}from"./Alert-RCC6ZrSo.js";import"./index-q81m-9gd.js";import"./CardHeader-QV_NYi3u.js";import"./Close-MW_tufCV.js";function b(s){return x("MuiAlertTitle",s)}p("MuiAlertTitle",["root"]);const F=["className"],B=s=>{const{classes:i}=s;return C({root:["root"]},b,i)},H=u(f,{name:"MuiAlertTitle",slot:"Root",overridesResolver:(s,i)=>i.root})(({theme:s})=>({fontWeight:s.typography.fontWeightMedium,marginTop:-2})),L=j.forwardRef(function(i,l){const a=T({props:i,name:"MuiAlertTitle"}),{className:d}=a,h=g(a,F),c=a,m=B(c);return t.jsx(H,A({gutterBottom:!0,component:"div",ownerState:c,ref:l,className:v(m.root,d)},h))}),N=L,o=["info","success","warning","error"];function O(){return t.jsxs(t.Fragment,{children:[t.jsx(z,{children:t.jsx(U,{heading:"Alert",links:[{name:"Components",href:y.components},{name:"Alert"}],moreLink:["https://mui.com/components/alert"]})}),t.jsx(w,{sx:{my:10},children:t.jsxs(R,{columns:{xs:1,sm:2},spacing:3,children:[t.jsx(r,{title:"Standard",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Filled",children:o.map(s=>t.jsxs(e,{severity:s,variant:"filled",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Outlined",children:o.map(s=>t.jsxs(e,{severity:s,variant:"outlined",onClose:()=>{},sx:{width:1},children:["This is an ",s," alert — check it out!"]},s))}),t.jsx(r,{title:"Description",children:o.map(s=>t.jsxs(e,{severity:s,onClose:()=>{},sx:{width:1},children:[t.jsxs(N,{sx:{textTransform:"capitalize"},children:[" ",s," "]}),"This is an ",s," alert — ",t.jsx("strong",{children:"check it out!"})]},s))}),t.jsxs(r,{title:"Actions",children:[t.jsx(e,{severity:"info",sx:{width:1},action:t.jsx(n,{color:"info",size:"small",variant:"soft",children:"Action"}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"filled",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"inherit",size:"small",variant:"outlined",sx:{mr:1,border:s=>`1px solid ${k(s.palette.common.white,.48)}`},children:"Undo"}),t.jsx(n,{size:"small",color:"info",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"}),t.jsx(e,{severity:"info",variant:"outlined",sx:{width:1},action:t.jsxs(t.Fragment,{children:[t.jsx(n,{color:"info",size:"small",variant:"outlined",sx:{mr:1},children:"Undo"}),t.jsx(n,{color:"info",size:"small",variant:"contained",sx:{bgcolor:"info.dark"},children:"Action"})]}),children:"This is an info alert — check it out!"})]})]})})]})}function V(){return t.jsxs(t.Fragment,{children:[t.jsx(M,{children:t.jsx("title",{children:" MUI: Alert"})}),t.jsx(O,{})]})}export{V as default};
