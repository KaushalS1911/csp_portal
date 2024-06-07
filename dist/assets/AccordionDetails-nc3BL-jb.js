import{r as c,$ as g,k as P,bJ as R,al as n,an as S,ao as M,aR as T,j as l,ap as v,aq as j,bK as U,bL as V,aY as E,bM as m,bN as W,ax as q,aw as L}from"./index-cs8KH1Gj.js";import"./index-q81m-9gd.js";const _=c.createContext({}),w=_,H=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],J=o=>{const{classes:s,square:e,expanded:a,disabled:r,disableGutters:i}=o;return j({root:["root",!e&&"rounded",a&&"expanded",r&&"disabled",!i&&"gutters"],region:["region"]},U,s)},K=g(P,{name:"MuiAccordion",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:e}=o;return[{[`& .${R.region}`]:s.region},s.root,!e.square&&s.rounded,!e.disableGutters&&s.gutters]}})(({theme:o})=>{const s={duration:o.transitions.duration.shortest};return{position:"relative",transition:o.transitions.create(["margin"],s),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(o.vars||o).palette.divider,transition:o.transitions.create(["opacity","background-color"],s)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${R.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${R.disabled}`]:{backgroundColor:(o.vars||o).palette.action.disabledBackground}}},({theme:o,ownerState:s})=>n({},!s.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(o.vars||o).shape.borderRadius,borderTopRightRadius:(o.vars||o).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(o.vars||o).shape.borderRadius,borderBottomRightRadius:(o.vars||o).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!s.disableGutters&&{[`&.${R.expanded}`]:{margin:"16px 0"}})),O=c.forwardRef(function(s,e){const a=S({props:s,name:"MuiAccordion"}),{children:r,className:i,defaultExpanded:d=!1,disabled:p=!1,disableGutters:b=!1,expanded:h,onChange:x,square:y=!1,TransitionComponent:C=V,TransitionProps:A}=a,$=M(a,H),[t,u]=T({controlled:h,default:d,name:"Accordion",state:"expanded"}),f=c.useCallback(I=>{u(!t),x&&x(I,!t)},[t,x,u]),[N,...D]=c.Children.toArray(r),B=c.useMemo(()=>({expanded:t,disabled:p,disableGutters:b,toggle:f}),[t,p,b,f]),k=n({},a,{square:y,disabled:p,disableGutters:b,expanded:t}),G=J(k);return l.jsxs(K,n({className:v(G.root,i),ref:e,ownerState:k,square:y},$,{children:[l.jsx(w.Provider,{value:B,children:N}),l.jsx(C,n({in:t,timeout:"auto"},A,{children:l.jsx("div",{"aria-labelledby":N.props.id,id:N.props["aria-controls"],role:"region",className:G.region,children:D})}))]}))}),io=O,Y=["children","className","expandIcon","focusVisibleClassName","onClick"],z=o=>{const{classes:s,expanded:e,disabled:a,disableGutters:r}=o;return j({root:["root",e&&"expanded",a&&"disabled",!r&&"gutters"],focusVisible:["focusVisible"],content:["content",e&&"expanded",!r&&"contentGutters"],expandIconWrapper:["expandIconWrapper",e&&"expanded"]},W,s)},F=g(E,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o,ownerState:s})=>{const e={duration:o.transitions.duration.shortest};return n({display:"flex",minHeight:48,padding:o.spacing(0,2),transition:o.transitions.create(["min-height","background-color"],e),[`&.${m.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`&.${m.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity},[`&:hover:not(.${m.disabled})`]:{cursor:"pointer"}},!s.disableGutters&&{[`&.${m.expanded}`]:{minHeight:64}})}),Q=g("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(o,s)=>s.content})(({theme:o,ownerState:s})=>n({display:"flex",flexGrow:1,margin:"12px 0"},!s.disableGutters&&{transition:o.transitions.create(["margin"],{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{margin:"20px 0"}})),X=g("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(o,s)=>s.expandIconWrapper})(({theme:o})=>({display:"flex",color:(o.vars||o).palette.action.active,transform:"rotate(0deg)",transition:o.transitions.create("transform",{duration:o.transitions.duration.shortest}),[`&.${m.expanded}`]:{transform:"rotate(180deg)"}})),Z=c.forwardRef(function(s,e){const a=S({props:s,name:"MuiAccordionSummary"}),{children:r,className:i,expandIcon:d,focusVisibleClassName:p,onClick:b}=a,h=M(a,Y),{disabled:x=!1,disableGutters:y,expanded:C,toggle:A}=c.useContext(w),$=f=>{A&&A(f),b&&b(f)},t=n({},a,{expanded:C,disabled:x,disableGutters:y}),u=z(t);return l.jsxs(F,n({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":C,className:v(u.root,i),focusVisibleClassName:v(u.focusVisible,p),onClick:$,ref:e,ownerState:t},h,{children:[l.jsx(Q,{className:u.content,ownerState:t,children:r}),d&&l.jsx(X,{className:u.expandIconWrapper,ownerState:t,children:d})]}))}),co=Z;function oo(o){return q("MuiAccordionDetails",o)}L("MuiAccordionDetails",["root"]);const so=["className"],eo=o=>{const{classes:s}=o;return j({root:["root"]},oo,s)},ao=g("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(o,s)=>s.root})(({theme:o})=>({padding:o.spacing(1,2,2)})),to=c.forwardRef(function(s,e){const a=S({props:s,name:"MuiAccordionDetails"}),{className:r}=a,i=M(a,so),d=a,p=eo(d);return l.jsx(ao,n({className:v(p.root,r),ref:e,ownerState:d},i))}),lo=to;export{io as A,co as a,lo as b};
