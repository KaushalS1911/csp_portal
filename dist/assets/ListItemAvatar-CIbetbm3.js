import{ax as x,aw as I,$ as u,al as o,r as n,an as p,ao as g,d3 as v,j as L,ap as d,aq as f}from"./index-cs8KH1Gj.js";function A(t){return x("MuiListItemAvatar",t)}I("MuiListItemAvatar",["root","alignItemsFlexStart"]);const C=["className"],S=t=>{const{alignItems:s,classes:e}=t;return f({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},A,e)},h=u("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:e}=t;return[s.root,e.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>o({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),R=n.forwardRef(function(s,e){const a=p({props:s,name:"MuiListItemAvatar"}),{className:i}=a,l=g(a,C),m=n.useContext(v),r=o({},a,{alignItems:m.alignItems}),c=S(r);return L.jsx(h,o({className:d(c.root,i),ownerState:r,ref:e},l))}),w=R;export{w as L};
