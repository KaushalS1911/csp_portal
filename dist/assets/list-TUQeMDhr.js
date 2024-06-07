import{r as c,j as e,p as B,C as D,k as a,bx as d,K as n,e as r,Y as s,D as C,bi as k,bL as T,X as u,d as F,H as A}from"./index-ylP9gOtX.js";import{C as E}from"./custom-breadcrumbs-nwVkFrxi.js";import{C as H}from"./component-hero-gSQgmVuD.js";import{C as x}from"./component-block-f1uZt_qe.js";import{M as J}from"./Masonry-48IVTIg4.js";import{L as t}from"./ListItemIcon-iDBs-mVA.js";import{L as f}from"./ListItemAvatar-rB3QdYHc.js";import{C as M}from"./Checkbox-48k92ct7.js";import{L as w}from"./ListItemSecondaryAction-tY1dxVm_.js";import{S as L}from"./Switch-PMXVVRTC.js";import"./index-q81m-9gd.js";import"./CardHeader-VpZWNMY4.js";import"./SwitchBase-iPcMGdah.js";function N(h){return e.jsx(n,{component:"a",...h})}function R(){const[h,I]=c.useState(!0),[j,g]=c.useState(1),[b,S]=c.useState([0]),[m,v]=c.useState(["wifi"]),O=c.useCallback(()=>{I(i=>!i)},[]),p=c.useCallback((i,l)=>{g(l)},[]),P=i=>()=>{const l=b.indexOf(i),o=[...b];l===-1?o.push(i):o.splice(l,1),S(o)},y=i=>()=>{const l=m.indexOf(i),o=[...m];l===-1?o.push(i):o.splice(l,1),v(o)};return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsx(E,{heading:"List",links:[{name:"Components",href:B.components},{name:"Lists"}],moreLink:["https://mui.com/components/lists"]})}),e.jsx(D,{sx:{my:10},children:e.jsxs(J,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(x,{title:"Simple",children:e.jsxs(a,{variant:"outlined",sx:{width:1},children:[e.jsxs(d,{component:"nav","aria-label":"main mailbox folders",children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(s,{primary:"Inbox"})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(s,{primary:"Drafts"})]})]}),e.jsx(C,{}),e.jsxs(d,{component:"nav","aria-label":"secondary mailbox folders",children:[e.jsx(n,{children:e.jsx(s,{primary:"Trash"})}),e.jsx(N,{href:"#simple-list",children:e.jsx(s,{primary:"Spam"})})]})]})}),e.jsx(x,{title:"Nested",children:e.jsx(a,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:e.jsx(k,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"iconamoon:send-fill",width:24})}),e.jsx(s,{primary:"Sent mail"})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(s,{primary:"Drafts"})]}),e.jsxs(n,{onClick:O,children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(s,{primary:"Inbox"}),h?e.jsx(r,{icon:"eva:arrow-ios-upward-fill"}):e.jsx(r,{icon:"eva:arrow-ios-downward-fill"})]}),e.jsx(T,{in:h,unmountOnExit:!0,children:e.jsx(d,{component:"div",disablePadding:!0,children:e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:round-star-border",width:24})}),e.jsx(s,{primary:"Starred"})]})})})]})})}),e.jsx(x,{title:"Folder",children:e.jsx(a,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:baseline-image",width:24})})}),e.jsx(s,{primary:"Photos",secondary:"Jan 9, 2014"})]}),e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:baseline-work",width:24})})}),e.jsx(s,{primary:"Work",secondary:"Jan 7, 2014"})]}),e.jsxs(n,{children:[e.jsx(f,{children:e.jsx(u,{children:e.jsx(r,{icon:"ic:round-beach-access",width:24})})}),e.jsx(s,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})}),e.jsx(x,{title:"Selected",children:e.jsxs(a,{variant:"outlined",sx:{width:1},children:[e.jsxs(d,{component:"nav","aria-label":"main mailbox folders",children:[e.jsxs(n,{selected:j===0,onClick:i=>p(i,0),children:[e.jsx(t,{children:e.jsx(r,{icon:"solar:inbox-in-bold",width:24})}),e.jsx(s,{primary:"Inbox"})]}),e.jsxs(n,{selected:j===1,onClick:i=>p(i,1),children:[e.jsx(t,{children:e.jsx(r,{icon:"fluent:mail-24-filled",width:24})}),e.jsx(s,{primary:"Drafts"})]})]}),e.jsx(C,{}),e.jsxs(d,{component:"nav","aria-label":"secondary mailbox folder",children:[e.jsx(n,{selected:j===2,onClick:i=>p(i,2),children:e.jsx(s,{primary:"Trash"})}),e.jsx(n,{selected:j===3,onClick:i=>p(i,3),children:e.jsx(s,{primary:"Spam"})})]})]})}),e.jsx(x,{title:"Controls",children:e.jsx(a,{variant:"outlined",sx:{width:1},children:e.jsx(d,{children:[0,1,2,3].map(i=>{const l=`checkbox-list-label-${i}`;return e.jsxs(n,{role:void 0,dense:!0,onClick:P(i),children:[e.jsx(t,{children:e.jsx(M,{edge:"start",checked:b.indexOf(i)!==-1,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":l}})}),e.jsx(s,{id:l,primary:`Line item ${i+1}`}),e.jsx(w,{children:e.jsx(F,{edge:"end",children:e.jsx(r,{icon:"solar:chat-round-dots-bold",width:24})})})]},i)})})})}),e.jsx(x,{title:"Switch",children:e.jsx(a,{variant:"outlined",sx:{width:1},children:e.jsxs(d,{subheader:e.jsx(k,{children:"Settings"}),children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:baseline-wifi",width:24})}),e.jsx(s,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),e.jsx(w,{children:e.jsx(L,{edge:"end",onChange:y("wifi"),checked:m.indexOf("wifi")!==-1,inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx(r,{icon:"ic:baseline-bluetooth",width:24})}),e.jsx(s,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),e.jsx(w,{children:e.jsx(L,{edge:"end",onChange:y("bluetooth"),checked:m.indexOf("bluetooth")!==-1,inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})]})})]})}function ee(){return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:" MUI: List"})}),e.jsx(R,{})]})}export{ee as default};