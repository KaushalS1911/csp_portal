import{ah as N,j as s,$ as g,aY as _,al as p,cr as P,ao as L,aw as U,ax as q,T as M,r as m,an as H,b9 as O,ap as W,aq as F,B as d,L as T,R as G,y as a,S as V}from"./index-cs8KH1Gj.js";import"./index-q81m-9gd.js";const Y=N(s.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),D=["slots","slotProps"],J=g(_)(({theme:e})=>p({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":p({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":p({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:P(e.palette.grey[200],.12)}:{backgroundColor:P(e.palette.grey[600],.12)})})),K=g(Y)({width:24,height:16});function Q(e){const{slots:r={},slotProps:n={}}=e,t=L(e,D),o=e;return s.jsx("li",{children:s.jsx(J,p({focusRipple:!0},t,{ownerState:o,children:s.jsx(K,p({as:r.CollapsedIcon,ownerState:o},n.collapsedIcon))}))})}function X(e){return q("MuiBreadcrumbs",e)}const Z=U("MuiBreadcrumbs",["root","ol","li","separator"]),ee=Z,se=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],re=e=>{const{classes:r}=e;return F({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},X,r)},oe=g(M,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,r)=>[{[`& .${ee.li}`]:r.li},r.root]})({}),te=g("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,r)=>r.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ae=g("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,r)=>r.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function ne(e,r,n,t){return e.reduce((o,u,i)=>(i<e.length-1?o=o.concat(u,s.jsx(ae,{"aria-hidden":!0,className:r,ownerState:t,children:n},`separator-${i}`)):o.push(u),o),[])}const le=m.forwardRef(function(r,n){const t=H({props:r,name:"MuiBreadcrumbs"}),{children:o,className:u,component:i="nav",slots:h={},slotProps:c={},expandText:S="Show path",itemsAfterCollapse:f=1,itemsBeforeCollapse:y=1,maxItems:C=8,separator:v="/"}=t,k=L(t,se),[R,z]=m.useState(!1),x=p({},t,{component:i,expanded:R,expandText:S,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:C,separator:v}),b=re(x),E=O({elementType:h.CollapsedIcon,externalSlotProps:c.collapsedIcon,ownerState:x}),w=m.useRef(null),A=l=>{const B=()=>{z(!0);const I=w.current.querySelector("a[href],button,[tabindex]");I&&I.focus()};return y+f>=l.length?l:[...l.slice(0,y),s.jsx(Q,{"aria-label":S,slots:{CollapsedIcon:h.CollapsedIcon},slotProps:{collapsedIcon:E},onClick:B},"ellipsis"),...l.slice(l.length-f,l.length)]},j=m.Children.toArray(o).filter(l=>m.isValidElement(l)).map((l,B)=>s.jsx("li",{className:b.li,children:l},`child-${B}`));return s.jsx(oe,p({ref:n,component:i,color:"text.secondary",className:W(b.root,u),ownerState:x},k,{children:s.jsx(te,{className:b.ol,ref:w,ownerState:x,children:ne(R||C&&j.length<=C?j:A(j),b.separator,v,x)})}))}),ce=le;function $({link:e,activeLast:r,disabled:n}){const t={typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex",...n&&!r&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}},o=s.jsxs(s.Fragment,{children:[e.icon&&s.jsx(d,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:e.icon}),e.name]});return e.href?s.jsx(T,{component:G,href:e.href,sx:t,children:o}):s.jsxs(d,{sx:t,children:[" ",o," "]})}$.propTypes={activeLast:a.bool,disabled:a.bool,link:a.shape({href:a.string,icon:a.node,name:a.string})};function ie({links:e,action:r,heading:n,moreLink:t,activeLast:o,sx:u,...i}){const h=e[e.length-1].name;return s.jsxs(d,{sx:{...u},children:[s.jsxs(V,{direction:"row",alignItems:"center",children:[s.jsxs(d,{sx:{flexGrow:1},children:[n&&s.jsx(M,{variant:"h4",gutterBottom:!0,children:n}),!!e.length&&s.jsx(ce,{separator:s.jsx(de,{}),...i,children:e.map(c=>s.jsx($,{link:c,activeLast:o,disabled:c.name===h},c.name||""))})]}),r&&s.jsxs(d,{sx:{flexShrink:0},children:[" ",r," "]})]}),!!t&&s.jsx(d,{sx:{mt:2},children:t.map(c=>s.jsx(T,{href:c,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:c},c))})]})}ie.propTypes={sx:a.object,action:a.node,links:a.array,heading:a.string,moreLink:a.array,activeLast:a.bool};function de(){return s.jsx(d,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}export{ce as B,ie as C};
