import{aw as F,ax as L,$ as b,al as i,r as x,an as y,ao as C,ay as v,az as q,j as m,ap as $,ai as k,aq as g}from"./index-cs8KH1Gj.js";function R(r){return L("MuiFormLabel",r)}const j=F("MuiFormLabel",["root","colorSecondary","focused","disabled","error","filled","required","asterisk"]),t=j,M=["children","className","color","component","disabled","error","filled","focused","required"],N=r=>{const{classes:o,color:c,focused:s,disabled:d,error:a,filled:l,required:n}=r,u={root:["root",`color${k(c)}`,d&&"disabled",a&&"error",l&&"filled",s&&"focused",n&&"required"],asterisk:["asterisk",a&&"error"]};return g(u,R,o)},U=b("label",{name:"MuiFormLabel",slot:"Root",overridesResolver:({ownerState:r},o)=>i({},o.root,r.color==="secondary"&&o.colorSecondary,r.filled&&o.filled)})(({theme:r,ownerState:o})=>i({color:(r.vars||r).palette.text.secondary},r.typography.body1,{lineHeight:"1.4375em",padding:0,position:"relative",[`&.${t.focused}`]:{color:(r.vars||r).palette[o.color].main},[`&.${t.disabled}`]:{color:(r.vars||r).palette.text.disabled},[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),S=b("span",{name:"MuiFormLabel",slot:"Asterisk",overridesResolver:(r,o)=>o.asterisk})(({theme:r})=>({[`&.${t.error}`]:{color:(r.vars||r).palette.error.main}})),_=x.forwardRef(function(o,c){const s=y({props:o,name:"MuiFormLabel"}),{children:d,className:a,component:l="label"}=s,n=C(s,M),u=v(),e=q({props:s,muiFormControl:u,states:["color","required","focused","disabled","error","filled"]}),p=i({},s,{color:e.color||"primary",component:l,disabled:e.disabled,error:e.error,filled:e.filled,focused:e.focused,required:e.required}),f=N(p);return m.jsxs(U,i({as:l,ownerState:p,className:$(f.root,a),ref:c},n,{children:[d,e.required&&m.jsxs(S,{ownerState:p,"aria-hidden":!0,className:f.asterisk,children:[" ","*"]})]}))}),z=_;export{z as F,t as f};
