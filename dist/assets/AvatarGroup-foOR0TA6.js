import{$ as N,al as o,cY as w,c_ as k,X as z,r as i,an as U,ao as q,j as $,ap as f,aq as D,c$ as I}from"./index-cs8KH1Gj.js";import"./index-q81m-9gd.js";const T=["children","className","component","componentsProps","max","renderSurplus","slotProps","spacing","total","variant"],y={small:-16,medium:null},V=a=>{const{classes:t}=a;return D({root:["root"],avatar:["avatar"]},I,t)},W=N("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${w.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${k.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),X=N(z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),Y=i.forwardRef(function(t,g){var h;const c=U({props:t,name:"MuiAvatarGroup"}),{children:S,className:C,component:G="div",componentsProps:L={},max:p=5,renderSurplus:P,slotProps:M={},spacing:e="medium",total:R,variant:v="circular"}=c,j=q(c,T);let s=p<2?2:p;const d=o({},c,{max:p,spacing:e,component:G,variant:v}),m=V(d),u=i.Children.toArray(S).filter(r=>i.isValidElement(r)),l=R||u.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(u.length,s-1),A=Math.max(l-s,l-x,0),E=P?P(A):`+${A}`,b=e&&y[e]!==void 0?y[e]:-e,n=(h=M.additionalAvatar)!=null?h:L.additionalAvatar;return $.jsxs(W,o({as:G,ownerState:d,className:f(m.root,C),ref:g},j,{children:[A?$.jsx(X,o({ownerState:d,variant:v},n,{className:f(m.avatar,n==null?void 0:n.className),style:o({marginLeft:b},n==null?void 0:n.style),children:E})):null,u.slice(0,x).reverse().map((r,_)=>i.cloneElement(r,{className:f(r.props.className,m.avatar),style:o({marginLeft:_===x-1?void 0:b},r.props.style),variant:r.props.variant||v}))]}))}),H=Y;export{H as A};
