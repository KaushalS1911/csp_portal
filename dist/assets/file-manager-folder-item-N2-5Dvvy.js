import{r as d,ca as H,j as e,X as J,Y as X,bq as ie,f as C,e as s,cc as _,ae as S,D as B,y as n,cb as $,I as ae,cp as K,bx as te,c as y,S as c,d as P,B as w,T as L,J as le,R as ce,cg as de,cY as pe,k as xe}from"./index-cs8KH1Gj.js";import{u as he}from"./use-copy-to-clipboard-XBF5EyyD.js";import{a as Q}from"./format-number-DkNQnIoZ.js";import{C as me}from"./confirm-dialog-2jI2zAgO.js";import{L as ue}from"./ListItem-0o5QvI5j.js";import{D as Z}from"./DialogTitle-qgtaNWae.js";import{D as ee}from"./DialogContent-J5aQOW70.js";import{T as G}from"./TextField-z0heVHRm.js";import{D as oe}from"./DialogActions-QLTPVjqO.js";import{c as je}from"./format-time-GAH0CY8i.js";import{a as ge,F as fe}from"./file-thumbnail-NE2uG7uc.js";import{A as ve}from"./Autocomplete-yaQcgRwv.js";import{C as Ce}from"./Chip-y3BMGgXZ.js";import{C as N}from"./Checkbox-AiUxbF_6.js";import{a as be}from"./upload-avatar-ZcmlmDZJ.js";import{A as ye}from"./AvatarGroup-foOR0TA6.js";function V({person:o}){const[a,p]=d.useState(o.permission),r=H(),x=d.useCallback(h=>{p(h)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(ue,{sx:{px:0,py:1},children:[e.jsx(J,{alt:o.name,src:o.avatarUrl,sx:{mr:2}}),e.jsx(X,{primary:o.name,secondary:e.jsx(ie,{title:o.email,children:e.jsx("span",{children:o.email})}),primaryTypographyProps:{noWrap:!0,typography:"subtitle2"},secondaryTypographyProps:{noWrap:!0,component:"span"},sx:{flexGrow:1,pr:1}}),e.jsxs(C,{size:"small",color:"inherit",endIcon:e.jsx(s,{width:20,icon:r.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-1}}),onClick:r.onOpen,sx:{flexShrink:0,...r.open&&{bgcolor:"action.selected"}},children:["Can ",a]})]}),e.jsx(_,{open:r.open,onClose:r.onClose,sx:{width:160},children:e.jsxs(e.Fragment,{children:[e.jsxs(S,{selected:a==="view",onClick:()=>{r.onClose(),x("view")},children:[e.jsx(s,{icon:"solar:eye-bold"}),"Can view"]}),e.jsxs(S,{selected:a==="edit",onClick:()=>{r.onClose(),x("edit")},children:[e.jsx(s,{icon:"solar:pen-bold"}),"Can edit"]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsxs(S,{onClick:()=>{r.onClose()},sx:{color:"error.main"},children:[e.jsx(s,{icon:"solar:trash-bin-trash-bold"}),"Remove"]})]})})]})}V.propTypes={person:n.object};function q({shared:o,inviteEmail:a,onCopyLink:p,onChangeInvite:r,open:x,onClose:h,...f}){const v=o&&!!o.length;return e.jsxs($,{fullWidth:!0,maxWidth:"xs",open:x,onClose:h,...f,children:[e.jsx(Z,{children:" Invite "}),e.jsxs(ee,{sx:{overflow:"unset"},children:[r&&e.jsx(G,{fullWidth:!0,value:a,placeholder:"Email",onChange:r,InputProps:{endAdornment:e.jsx(ae,{position:"end",children:e.jsx(C,{color:"inherit",variant:"contained",disabled:!a,sx:{mr:-.75},children:"Send Invite"})})},sx:{mb:2}}),v&&e.jsx(K,{sx:{maxHeight:60*6},children:e.jsx(te,{disablePadding:!0,children:o.map(m=>e.jsx(V,{person:m},m.id))})})]}),e.jsxs(oe,{sx:{justifyContent:"space-between"},children:[p&&e.jsx(C,{startIcon:e.jsx(s,{icon:"eva:link-2-fill"}),onClick:p,children:"Copy link"}),h&&e.jsx(C,{variant:"outlined",color:"inherit",onClick:h,children:"Close"})]})]})}q.propTypes={inviteEmail:n.string,onChangeInvite:n.func,onClose:n.func,onCopyLink:n.func,open:n.bool,shared:n.array};function ne({item:o,open:a,favorited:p,onFavorite:r,onCopyLink:x,onClose:h,onDelete:f,...v}){const{name:m,size:b,url:I,type:k,shared:j,modifiedAt:F}=o,g=j&&!!j.length,t=y(!0),u=y(),T=y(!0),[D,A]=d.useState(""),[R,z]=d.useState(o.tags.slice(0,3)),W=d.useCallback(i=>{A(i.target.value)},[]),M=d.useCallback(i=>{z(i)},[]),O=e.jsxs(c,{spacing:1.5,children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Tags",e.jsx(P,{size:"small",onClick:t.onToggle,children:e.jsx(s,{icon:t.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),t.value&&e.jsx(ve,{multiple:!0,freeSolo:!0,options:o.tags.map(i=>i),getOptionLabel:i=>i,defaultValue:o.tags.slice(0,3),value:R,onChange:(i,l)=>{M(l)},renderOption:(i,l)=>d.createElement("li",{...i,key:l},l),renderTags:(i,l)=>i.map((Y,re)=>d.createElement(Ce,{...l({index:re}),size:"small",variant:"soft",label:Y,key:Y})),renderInput:i=>e.jsx(G,{...i,placeholder:"#Add a tags"})})]}),U=e.jsxs(c,{spacing:1.5,children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{typography:"subtitle2"},children:["Properties",e.jsx(P,{size:"small",onClick:T.onToggle,children:e.jsx(s,{icon:T.value?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill"})})]}),T.value&&e.jsxs(e.Fragment,{children:[e.jsxs(c,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(w,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Size"}),Q(b)]}),e.jsxs(c,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(w,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Modified"}),je(F)]}),e.jsxs(c,{direction:"row",sx:{typography:"caption",textTransform:"capitalize"},children:[e.jsx(w,{component:"span",sx:{width:80,color:"text.secondary",mr:2},children:"Type"}),ge(k)]})]})]}),E=e.jsxs(e.Fragment,{children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[e.jsx(L,{variant:"subtitle2",children:" File Share With "}),e.jsx(P,{size:"small",color:"primary",onClick:u.onTrue,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:e.jsx(s,{icon:"mingcute:add-line"})})]}),g&&e.jsx(w,{sx:{pl:2.5,pr:1},children:j.map(i=>e.jsx(V,{person:i},i.id))})]});return e.jsxs(e.Fragment,{children:[e.jsxs(le,{open:a,onClose:h,anchor:"right",slotProps:{backdrop:{invisible:!0}},PaperProps:{sx:{width:320}},...v,children:[e.jsxs(K,{sx:{height:1},children:[e.jsxs(c,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{p:2.5},children:[e.jsx(L,{variant:"h6",children:" Info "}),e.jsx(N,{color:"warning",icon:e.jsx(s,{icon:"eva:star-outline"}),checkedIcon:e.jsx(s,{icon:"eva:star-fill"}),checked:p,onChange:r})]}),e.jsxs(c,{spacing:2.5,justifyContent:"center",sx:{p:2.5,bgcolor:"background.neutral"},children:[e.jsx(fe,{imageView:!0,file:k==="folder"?k:I,sx:{width:64,height:64},imgSx:{borderRadius:1}}),e.jsx(L,{variant:"subtitle1",sx:{wordBreak:"break-all"},children:m}),e.jsx(B,{sx:{borderStyle:"dashed"}}),O,U]}),E]}),e.jsx(w,{sx:{p:2.5},children:e.jsx(C,{fullWidth:!0,variant:"soft",color:"error",size:"large",startIcon:e.jsx(s,{icon:"solar:trash-bin-trash-bold"}),onClick:f,children:"Delete"})})]}),e.jsx(q,{open:u.value,shared:j,inviteEmail:D,onChangeInvite:W,onCopyLink:x,onClose:()=>{u.onFalse(),A("")}})]})}ne.propTypes={open:n.bool,item:n.object,onClose:n.func,onDelete:n.func,favorited:n.bool,onCopyLink:n.func,onFavorite:n.func};function we({title:o,subTitle:a,link:p,onOpen:r,collapse:x,onCollapse:h,sx:f,...v}){return e.jsxs(c,{direction:"row",alignItems:"center",sx:{mb:3,...f},...v,children:[e.jsxs(c,{flexGrow:1,children:[e.jsxs(c,{direction:"row",alignItems:"center",spacing:1,flexGrow:1,children:[e.jsxs(L,{variant:"h6",children:[" ",o," "]}),e.jsx(P,{size:"small",color:"primary",onClick:r,sx:{width:24,height:24,bgcolor:"primary.main",color:"primary.contrastText","&:hover":{bgcolor:"primary.dark"}},children:e.jsx(s,{icon:"mingcute:add-line"})})]}),e.jsx(w,{sx:{typography:"body2",color:"text.disabled",mt:.5},children:a})]}),p&&e.jsx(C,{href:p,component:ce,size:"small",color:"inherit",endIcon:e.jsx(s,{icon:"eva:arrow-ios-forward-fill",width:18,sx:{ml:-.5}}),children:"View All"}),h&&e.jsx(P,{onClick:h,children:e.jsx(s,{icon:x?"eva:arrow-ios-downward-fill":"eva:arrow-ios-upward-fill"})})]})}we.propTypes={collapse:n.bool,link:n.string,onCollapse:n.func,onOpen:n.func,subTitle:n.string,sx:n.object,title:n.string};function se({title:o="Upload Files",open:a,onClose:p,onCreate:r,onUpdate:x,folderName:h,onChangeFolderName:f,...v}){const[m,b]=d.useState([]);d.useEffect(()=>{a||b([])},[a]);const I=d.useCallback(g=>{const t=g.map(u=>Object.assign(u,{preview:URL.createObjectURL(u)}));b([...m,...t])},[m]),k=()=>{p(),console.info("ON UPLOAD")},j=g=>{const t=m.filter(u=>u!==g);b(t)},F=()=>{b([])};return e.jsxs($,{fullWidth:!0,maxWidth:"sm",open:a,onClose:p,...v,children:[e.jsxs(Z,{sx:{p:g=>g.spacing(3,3,2,3)},children:[" ",o," "]}),e.jsxs(ee,{dividers:!0,sx:{pt:1,pb:0,border:"none"},children:[(r||x)&&e.jsx(G,{fullWidth:!0,label:"Folder name",value:h,onChange:f,sx:{mb:3}}),e.jsx(be,{multiple:!0,files:m,onDrop:I,onRemove:j})]}),e.jsxs(oe,{children:[e.jsx(C,{variant:"contained",startIcon:e.jsx(s,{icon:"eva:cloud-upload-fill"}),onClick:k,children:"Upload"}),!!m.length&&e.jsx(C,{variant:"outlined",color:"inherit",onClick:F,children:"Remove all"}),(r||x)&&e.jsx(c,{direction:"row",justifyContent:"flex-end",flexGrow:1,children:e.jsx(C,{variant:"soft",onClick:r||x,children:x?"Save":"Create"})})]})]})}se.propTypes={folderName:n.string,onChangeFolderName:n.func,onClose:n.func,onCreate:n.func,onUpdate:n.func,open:n.bool,title:n.string};function ke({folder:o,selected:a,onSelect:p,onDelete:r,sx:x,...h}){var E,i;const{enqueueSnackbar:f}=de(),{copy:v}=he(),[m,b]=d.useState(""),[I,k]=d.useState(o.name),j=y(),F=y(),g=y(),t=H(),u=y(),T=y(),D=y(o.isFavorited),A=d.useCallback(l=>{b(l.target.value)},[]),R=d.useCallback(l=>{k(l.target.value)},[]),z=d.useCallback(()=>{f("Copied!"),v(o.url)},[v,f,o.url]),W=e.jsxs(c,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[e.jsx(N,{color:"warning",icon:e.jsx(s,{icon:"eva:star-outline"}),checkedIcon:e.jsx(s,{icon:"eva:star-fill"}),checked:D.value,onChange:D.onToggle}),e.jsx(P,{color:t.open?"inherit":"default",onClick:t.onOpen,children:e.jsx(s,{icon:"eva:more-vertical-fill"})})]}),M=(F.value||a)&&p?e.jsx(N,{size:"medium",checked:a,onClick:p,icon:e.jsx(s,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(s,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):e.jsx(w,{component:"img",src:"/assets/icons/files/ic_folder.svg",sx:{width:36,height:36}}),O=e.jsx(X,{onClick:T.onTrue,primary:o.name,secondary:e.jsxs(e.Fragment,{children:[Q(o.size),e.jsx(w,{component:"span",sx:{mx:.75,width:2,height:2,borderRadius:"50%",bgcolor:"currentColor"}}),o.totalFiles," files"]}),primaryTypographyProps:{noWrap:!0,typography:"subtitle1"},secondaryTypographyProps:{mt:.5,component:"span",alignItems:"center",typography:"caption",color:"text.disabled",display:"inline-flex"}}),U=e.jsx(ye,{max:3,sx:{[`& .${pe.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(E=o.shared)==null?void 0:E.map(l=>e.jsx(J,{alt:l.name,src:l.avatarUrl},l.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(c,{component:xe,variant:"outlined",spacing:1,alignItems:"flex-start",sx:{p:2.5,maxWidth:222,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(F.value||a)&&{bgcolor:"background.paper",boxShadow:l=>l.customShadows.z20},...x},...h,children:[e.jsx(w,{onMouseEnter:F.onTrue,onMouseLeave:F.onFalse,children:M}),W,O,!!((i=o==null?void 0:o.shared)!=null&&i.length)&&U]}),e.jsxs(_,{open:t.open,onClose:t.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(S,{onClick:()=>{t.onClose(),z()},children:[e.jsx(s,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(S,{onClick:()=>{t.onClose(),g.onTrue()},children:[e.jsx(s,{icon:"solar:share-bold"}),"Share"]}),e.jsxs(S,{onClick:()=>{t.onClose(),j.onTrue()},children:[e.jsx(s,{icon:"solar:pen-bold"}),"Edit"]}),e.jsx(B,{sx:{borderStyle:"dashed"}}),e.jsxs(S,{onClick:()=>{u.onTrue(),t.onClose()},sx:{color:"error.main"},children:[e.jsx(s,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ne,{item:o,favorited:D.value,onFavorite:D.onToggle,onCopyLink:z,open:T.value,onClose:T.onFalse,onDelete:()=>{T.onFalse(),r()}}),e.jsx(q,{open:g.value,shared:o.shared,inviteEmail:m,onChangeInvite:A,onCopyLink:z,onClose:()=>{g.onFalse(),b("")}}),e.jsx(se,{open:j.value,onClose:j.onFalse,title:"Edit Folder",onUpdate:()=>{j.onFalse(),k(I),console.info("UPDATE FOLDER",I)},folderName:I,onChangeFolderName:R}),e.jsx(me,{open:u.value,onClose:u.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(C,{variant:"contained",color:"error",onClick:r,children:"Delete"})})]})}ke.propTypes={folder:n.object,onDelete:n.func,onSelect:n.func,selected:n.bool,sx:n.object};export{ne as F,q as a,we as b,ke as c,se as d};