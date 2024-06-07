import{ax as S,aw as w,$ as M,T as m,aE as W,r as t,an as A,ao as B,j as e,al as T,ap as I,aq as L,c as d,f as s,cb as u,bx as k,K as C,X as D,e as F,Y as f,B as R,ae as x,E,G as P,d as G,D as U,eS as y,p as O,C as V,H as q}from"./index-cs8KH1Gj.js";import{C as H}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as N}from"./component-hero-dZ0JuJQy.js";import{D as h}from"./DialogTitle-qgtaNWae.js";import{D as j}from"./DialogContent-J5aQOW70.js";import{T as _}from"./TextField-z0heVHRm.js";import{D as p}from"./DialogActions-QLTPVjqO.js";import{F as $}from"./FormControl-aSSJzqHf.js";import{I as Y}from"./InputLabel-waUCNIWh.js";import{S as z}from"./Select-xqyf6Rlf.js";import{F as K}from"./FormControlLabel-MUxj2wHe.js";import{S as X}from"./Switch-MKSYeegN.js";import{C as c}from"./component-block-eWblxNY5.js";import{M as J}from"./Masonry-nmMLxsdh.js";import"./index-q81m-9gd.js";import"./dialogTitleClasses-TCv6NWT5.js";import"./isMuiElement-MbnxLTZm.js";import"./FormLabel-LFvC5gak.js";import"./Menu-gk9ZpIDp.js";import"./SwitchBase-PZN8fx1f.js";import"./CardHeader-QV_NYi3u.js";function Q(n){return S("MuiDialogContentText",n)}w("MuiDialogContentText",["root"]);const Z=["children","className"],ee=n=>{const{classes:o}=n,i=L({root:["root"]},Q,o);return T({},o,i)},ne=M(m,{shouldForwardProp:n=>W(n)||n==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(n,o)=>o.root})({}),oe=t.forwardRef(function(o,r){const i=A({props:o,name:"MuiDialogContentText"}),{className:l}=i,a=B(i,Z),g=ee(a);return e.jsx(ne,T({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:a,className:I(g.root,l)},i,{classes:g}))}),se=oe;function ie(){const n=d();return e.jsxs("div",{children:[e.jsx(s,{variant:"outlined",color:"warning",onClick:n.onTrue,children:"Form Dialogs"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,children:[e.jsx(h,{children:"Subscribe"}),e.jsxs(j,{children:[e.jsx(m,{sx:{mb:3},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),e.jsx(_,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),e.jsxs(p,{children:[e.jsx(s,{onClick:n.onFalse,variant:"outlined",color:"inherit",children:"Cancel"}),e.jsx(s,{onClick:n.onFalse,variant:"contained",children:"Subscribe"})]})]})]})}function te(){const n=d();return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"info",variant:"outlined",onClick:n.onTrue,children:"Open alert dialog"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,children:[e.jsx(h,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(p,{children:[e.jsx(s,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(s,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function le(){const n=d(),[o,r]=t.useState("paper"),i=t.useCallback(a=>()=>{n.onTrue(),r(a)},[n]),l=t.useRef(null);return t.useEffect(()=>{if(n.value){const{current:a}=l;a&&a.focus()}},[n.value]),e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:i("paper"),sx:{mr:2},children:"scroll=paper"}),e.jsx(s,{variant:"outlined",onClick:i("body"),children:"scroll=body"}),e.jsxs(u,{open:n.value,onClose:n.onFalse,scroll:o,children:[e.jsx(h,{sx:{pb:2},children:"Subscribe"}),e.jsx(j,{dividers:o==="paper",children:e.jsx(se,{ref:l,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),e.jsxs(p,{children:[e.jsx(s,{onClick:n.onFalse,children:"Cancel"}),e.jsx(s,{variant:"contained",onClick:n.onFalse,children:"Subscribe"})]})]})]})}const b=["username@gmail.com","user02@gmail.com"];function ae(){const n=d(),[o,r]=t.useState(b[1]),i=t.useCallback(l=>{n.onFalse(),r(l)},[n]);return e.jsxs(e.Fragment,{children:[e.jsxs(m,{variant:"subtitle1",children:["Selected: ",o]}),e.jsx("br",{}),e.jsx(s,{variant:"outlined",onClick:n.onTrue,children:"Open simple dialog"}),e.jsxs(u,{open:n.value,onClose:()=>i(o),children:[e.jsx(h,{children:"Set backup account"}),e.jsxs(k,{children:[b.map(l=>e.jsxs(C,{onClick:()=>i(l),children:[e.jsx(D,{sx:{mr:2,color:"info.lighter",bgcolor:"info.darker"},children:e.jsx(F,{icon:"solar:user-rounded-bold"})}),e.jsx(f,{primary:l})]},l)),e.jsxs(C,{autoFocus:!0,onClick:()=>i("addAccount"),children:[e.jsx(D,{sx:{mr:2},children:e.jsx(F,{icon:"mingcute:add-line"})}),e.jsx(f,{primary:"Add account"})]})]})]})]})}function re(){const n=d(),[o,r]=t.useState(!0),[i,l]=t.useState("sm"),a=t.useCallback(v=>{l(v.target.value)},[]),g=t.useCallback(v=>{r(v.target.checked)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:n.onTrue,children:"Max Width Dialog"}),e.jsxs(u,{open:n.value,maxWidth:i,onClose:n.onFalse,fullWidth:o,children:[e.jsx(h,{children:"Optional sizes"}),e.jsxs(j,{children:[e.jsx(m,{sx:{color:"text.secondary"},children:"You can set my maximum width and whether to adapt or not."}),e.jsxs(R,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[e.jsxs($,{sx:{my:3,minWidth:160},children:[e.jsx(Y,{htmlFor:"max-width",children:"maxWidth"}),e.jsxs(z,{autoFocus:!0,value:i,onChange:a,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[e.jsx(x,{value:!1,children:"false"}),e.jsx(x,{value:"xs",children:"xs"}),e.jsx(x,{value:"sm",children:"sm"}),e.jsx(x,{value:"md",children:"md"}),e.jsx(x,{value:"lg",children:"lg"}),e.jsx(x,{value:"xl",children:"xl"})]})]}),e.jsx(K,{control:e.jsx(X,{checked:o,onChange:g}),label:"Full width",sx:{mt:1}})]})]}),e.jsx(p,{children:e.jsx(s,{onClick:n.onFalse,variant:"contained",children:"Close"})})]})]})}const ce=t.forwardRef((n,o)=>e.jsx(y,{direction:"up",ref:o,...n}));function de(){const n=d();return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"error",onClick:n.onTrue,children:"Full Screen Dialogs"}),e.jsxs(u,{fullScreen:!0,open:n.value,onClose:n.onFalse,TransitionComponent:ce,children:[e.jsx(E,{position:"relative",color:"default",children:e.jsxs(P,{children:[e.jsx(G,{color:"inherit",edge:"start",onClick:n.onFalse,children:e.jsx(F,{icon:"mingcute:close-line"})}),e.jsx(m,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),e.jsx(s,{autoFocus:!0,color:"inherit",variant:"contained",onClick:n.onFalse,children:"Save"})]})}),e.jsxs(k,{children:[e.jsx(C,{children:e.jsx(f,{primary:"Phone ringtone",secondary:"Titania"})}),e.jsx(U,{}),e.jsx(C,{children:e.jsx(f,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}const ue=t.forwardRef((n,o)=>e.jsx(y,{direction:"up",ref:o,...n}));function xe(){const n=d();return e.jsxs("div",{children:[e.jsx(s,{variant:"outlined",color:"success",onClick:n.onTrue,children:"Transitions Dialogs"}),e.jsxs(u,{keepMounted:!0,open:n.value,TransitionComponent:ue,onClose:n.onFalse,children:[e.jsx(h,{children:"Use Google's location service?"}),e.jsx(j,{sx:{color:"text.secondary"},children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),e.jsxs(p,{children:[e.jsx(s,{variant:"outlined",onClick:n.onFalse,children:"Disagree"}),e.jsx(s,{variant:"contained",onClick:n.onFalse,autoFocus:!0,children:"Agree"})]})]})]})}function he(){return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsx(H,{heading:"Dialog",links:[{name:"Components",href:O.components},{name:"Dialog"}],moreLink:["https://mui.com/components/dialogs"]})}),e.jsx(V,{sx:{my:10},children:e.jsxs(J,{columns:{xs:1,md:3},spacing:3,children:[e.jsx(c,{title:"Simple",children:e.jsx(ae,{})}),e.jsx(c,{title:"Alerts",children:e.jsx(te,{})}),e.jsx(c,{title:"Transitions",children:e.jsx(xe,{})}),e.jsx(c,{title:"Form",children:e.jsx(ie,{})}),e.jsx(c,{title:"Full Screen",children:e.jsx(de,{})}),e.jsx(c,{title:"Max Width Dialog",children:e.jsx(re,{})}),e.jsx(c,{title:"Scrolling Content Dialogs",children:e.jsx(le,{})})]})})]})}function Re(){return e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:" MUI: Dialog"})}),e.jsx(he,{})]})}export{Re as default};
