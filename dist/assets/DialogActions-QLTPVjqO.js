import{ax as g,aw as p,$ as u,al as e,r as d,an as m,ao as x,j as f,ap as D,aq as A}from"./index-cs8KH1Gj.js";function y(s){return g("MuiDialogActions",s)}p("MuiDialogActions",["root","spacing"]);const S=["className","disableSpacing"],b=s=>{const{classes:o,disableSpacing:t}=s;return A({root:["root",!t&&"spacing"]},y,o)},C=u("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(s,o)=>{const{ownerState:t}=s;return[o.root,!t.disableSpacing&&o.spacing]}})(({ownerState:s})=>e({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!s.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),j=d.forwardRef(function(o,t){const a=m({props:o,name:"MuiDialogActions"}),{className:n,disableSpacing:l=!1}=a,c=x(a,S),i=e({},a,{disableSpacing:l}),r=b(i);return f.jsx(C,e({className:D(r.root,n),ownerState:i,ref:t},c))}),w=j;export{w as D};