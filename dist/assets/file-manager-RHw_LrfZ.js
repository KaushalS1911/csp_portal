import{s as te,cg as H,r as h,c as k,ca as K,w as B,j as e,cU as Ce,cW as G,S as T,T as z,Y as fe,cY as se,X as ae,e as p,d as N,cc as _,ae as O,D as Y,f as R,y as r,B as S,bq as Q,I as ye,a1 as ve,k as re,ep as we,bL as Z,a5 as ke,eq as Te,er as De,C as Fe,H as Re}from"./index-cs8KH1Gj.js";import{f as Se,a as Ie,c as Pe,i as Ae,d as Le}from"./format-time-GAH0CY8i.js";import{E as Ee}from"./empty-content-XjJCMadM.js";import{F as V,a as Oe}from"./file-thumbnail-NE2uG7uc.js";import{C as X}from"./confirm-dialog-2jI2zAgO.js";import{u as Be,g as Me}from"./use-table-Oz6bJM4o.js";import{T as ze,c as $e,a as Ne,e as We,b as Ue}from"./table-pagination-custom-kL214XXs.js";import{u as Ge}from"./use-double-click-vQSXGGBG.js";import{u as le}from"./use-copy-to-clipboard-XBF5EyyD.js";import{a as ie}from"./format-number-DkNQnIoZ.js";import{F as ce,a as J,b as ee,c as qe,d as q}from"./file-manager-folder-item-N2-5Dvvy.js";import{T as E,t as He}from"./TablePagination-TKKuccHp.js";import{C as M}from"./Checkbox-AiUxbF_6.js";import{A as de}from"./AvatarGroup-foOR0TA6.js";import{T as Ke,a as _e,b as Ye}from"./TableContainer-FCfxN62s.js";import{s as pe,C as Ve}from"./custom-date-range-picker-JbZ20nUB.js";import{T as Xe}from"./TextField-z0heVHRm.js";import{C as Je}from"./CardActionArea-6LeTO_dD.js";import{T as Qe}from"./text-max-line-rVnCVCHH.js";import{C as U}from"./Chip-y3BMGgXZ.js";import{T as Ze,a as oe}from"./ToggleButtonGroup-zb7vytqF.js";import"./DialogTitle-qgtaNWae.js";import"./dialogTitleClasses-TCv6NWT5.js";import"./DialogContent-J5aQOW70.js";import"./DialogActions-QLTPVjqO.js";import"./FormControlLabel-MUxj2wHe.js";import"./Switch-MKSYeegN.js";import"./SwitchBase-PZN8fx1f.js";import"./ListItem-0o5QvI5j.js";import"./isMuiElement-MbnxLTZm.js";import"./ListItemSecondaryAction-1KwuladM.js";import"./Autocomplete-yaQcgRwv.js";import"./Select-xqyf6Rlf.js";import"./index-q81m-9gd.js";import"./Menu-gk9ZpIDp.js";import"./Close-MW_tufCV.js";import"./upload-avatar-ZcmlmDZJ.js";import"./fade-YsdWEJJe.js";import"./index-nuAYcRns.js";import"./image--etRdOrW.js";import"./KeyboardArrowRight-SEABOkxc.js";import"./FirstPage-u-FDu5UE.js";import"./DatePicker-9CnsiDtP.js";import"./FormControl-aSSJzqHf.js";import"./InputLabel-waUCNIWh.js";import"./FormLabel-LFvC5gak.js";function he({row:o,selected:n,onSelectRow:g,onDeleteRow:t}){const a=te(),{name:j,size:C,type:i,modifiedAt:f,shared:c,isFavorited:l}=o,{enqueueSnackbar:b}=H(),{copy:v}=le(),[x,y]=h.useState(""),u=k(l),w=k(),d=k(),m=k(),s=K(),P=h.useCallback(F=>{y(F.target.value)},[]),I=Ge({click:()=>{w.onTrue()},doubleClick:()=>console.info("DOUBLE CLICK")}),A=h.useCallback(()=>{b("Copied!"),v(o.url)},[v,b,o.url]),D={borderTop:`solid 1px ${B(a.palette.grey[500],.16)}`,borderBottom:`solid 1px ${B(a.palette.grey[500],.16)}`,"&:first-of-type":{borderTopLeftRadius:16,borderBottomLeftRadius:16,borderLeft:`solid 1px ${B(a.palette.grey[500],.16)}`},"&:last-of-type":{borderTopRightRadius:16,borderBottomRightRadius:16,borderRight:`solid 1px ${B(a.palette.grey[500],.16)}`}};return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{selected:n,sx:{borderRadius:2,[`&.${Ce.selected}, &:hover`]:{backgroundColor:"background.paper",boxShadow:a.customShadows.z20,transition:a.transitions.create(["background-color","box-shadow"],{duration:a.transitions.duration.shortest}),"&:hover":{backgroundColor:"background.paper",boxShadow:a.customShadows.z20}},[`& .${G.root}`]:{...D},...w.value&&{[`& .${G.root}`]:{...D}}},children:[e.jsx(E,{padding:"checkbox",children:e.jsx(M,{checked:n,onDoubleClick:()=>console.info("ON DOUBLE CLICK"),onClick:g})}),e.jsx(E,{onClick:I,children:e.jsxs(T,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(V,{file:i,sx:{width:36,height:36}}),e.jsx(z,{noWrap:!0,variant:"inherit",sx:{maxWidth:360,cursor:"pointer",...w.value&&{fontWeight:"fontWeightBold"}},children:j})]})}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:ie(C)}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:i}),e.jsx(E,{onClick:I,sx:{whiteSpace:"nowrap"},children:e.jsx(fe,{primary:Se(f),secondary:Ie(f),primaryTypographyProps:{typography:"body2"},secondaryTypographyProps:{mt:.5,component:"span",typography:"caption"}})}),e.jsx(E,{align:"right",onClick:I,children:e.jsx(de,{max:4,sx:{display:"inline-flex",[`& .${se.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:c&&c.map(F=>e.jsx(ae,{alt:F.name,src:F.avatarUrl},F.id))})}),e.jsxs(E,{align:"right",sx:{px:1,whiteSpace:"nowrap"},children:[e.jsx(M,{color:"warning",icon:e.jsx(p,{icon:"eva:star-outline"}),checkedIcon:e.jsx(p,{icon:"eva:star-fill"}),checked:u.value,onChange:u.onToggle,sx:{p:.75}}),e.jsx(N,{color:s.open?"inherit":"default",onClick:s.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]})]}),e.jsxs(_,{open:s.open,onClose:s.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(O,{onClick:()=>{s.onClose(),A()},children:[e.jsx(p,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(O,{onClick:()=>{s.onClose(),d.onTrue()},children:[e.jsx(p,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsxs(O,{onClick:()=>{m.onTrue(),s.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ce,{item:o,favorited:u.value,onFavorite:u.onToggle,onCopyLink:A,open:w.value,onClose:w.onFalse,onDelete:t}),e.jsx(J,{open:d.value,shared:c,inviteEmail:x,onChangeInvite:P,onCopyLink:A,onClose:()=>{d.onFalse(),y("")}}),e.jsx(X,{open:m.value,onClose:m.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}he.propTypes={row:r.object,selected:r.bool,onDeleteRow:r.func,onSelectRow:r.func};const eo=[{id:"name",label:"Name"},{id:"size",label:"Size",width:120},{id:"type",label:"Type",width:120},{id:"modifiedAt",label:"Modified",width:140},{id:"shared",label:"Shared",align:"right",width:140},{id:"",width:88}];function xe({table:o,notFound:n,onDeleteRow:g,dataFiltered:t,onOpenConfirm:a}){const j=te(),{dense:C,page:i,order:f,orderBy:c,rowsPerPage:l,selected:b,onSelectRow:v,onSelectAllRows:x,onSort:y,onChangeDense:u,onChangePage:w,onChangeRowsPerPage:d}=o;return e.jsxs(e.Fragment,{children:[e.jsxs(S,{sx:{position:"relative",m:j.spacing(-2,-3,-3,-3)},children:[e.jsx($e,{dense:C,numSelected:b.length,rowCount:t.length,onSelectAllRows:m=>x(m,t.map(s=>s.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(Q,{title:"Share",children:e.jsx(N,{color:"primary",children:e.jsx(p,{icon:"solar:share-bold"})})}),e.jsx(Q,{title:"Delete",children:e.jsx(N,{color:"primary",onClick:a,children:e.jsx(p,{icon:"solar:trash-bin-trash-bold"})})})]}),sx:{pl:1,pr:2,top:16,left:24,right:24,width:"auto",borderRadius:1.5}}),e.jsx(Ke,{sx:{p:j.spacing(0,3,3,3)},children:e.jsxs(_e,{size:C?"small":"medium",sx:{minWidth:960,borderCollapse:"separate",borderSpacing:"0 16px"},children:[e.jsx(Ne,{order:f,orderBy:c,headLabel:eo,rowCount:t.length,numSelected:b.length,onSort:y,onSelectAllRows:m=>x(m,t.map(s=>s.id)),sx:{[`& .${G.head}`]:{"&:first-of-type":{borderTopLeftRadius:12,borderBottomLeftRadius:12},"&:last-of-type":{borderTopRightRadius:12,borderBottomRightRadius:12}}}}),e.jsxs(Ye,{children:[t.slice(i*l,i*l+l).map(m=>e.jsx(he,{row:m,selected:b.includes(m.id),onSelectRow:()=>v(m.id),onDeleteRow:()=>g(m.id)},m.id)),e.jsx(We,{notFound:n,sx:{m:-2,borderRadius:1.5,border:`dashed 1px ${j.palette.divider}`}})]})]})})]}),e.jsx(Ue,{count:t.length,page:i,rowsPerPage:l,onPageChange:w,onRowsPerPageChange:d,dense:C,onChangeDense:u,sx:{[`& .${He.toolbar}`]:{borderTopColor:"transparent"}}})]})}xe.propTypes={dataFiltered:r.array,notFound:r.bool,onDeleteRow:r.func,onOpenConfirm:r.func,table:r.object};function me({openDateRange:o,onCloseDateRange:n,onOpenDateRange:g,filters:t,onFilters:a,dateError:j,typeOptions:C}){const i=K(),f=t.type.length?t.type.slice(0,2).join(","):"All type",c=h.useCallback(d=>{a("name",d.target.value)},[a]),l=h.useCallback(d=>{a("startDate",d)},[a]),b=h.useCallback(d=>{a("endDate",d)},[a]),v=h.useCallback(d=>{const m=t.type.includes(d)?t.type.filter(s=>s!==d):[...t.type,d];a("type",m)},[t.type,a]),x=h.useCallback(()=>{i.onClose(),a("type",[])},[a,i]),y=e.jsx(Xe,{value:t.name,onChange:c,placeholder:"Search...",InputProps:{startAdornment:e.jsx(ye,{position:"start",children:e.jsx(p,{icon:"eva:search-fill",sx:{color:"text.disabled"}})})},sx:{width:{xs:1,md:260}}}),u=e.jsxs(e.Fragment,{children:[e.jsxs(R,{color:"inherit",onClick:i.onOpen,endIcon:e.jsx(p,{icon:i.open?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:[f,t.type.length>2&&e.jsxs(ve,{color:"info",sx:{ml:1},children:["+",t.type.length-2]})]}),e.jsx(_,{open:i.open,onClose:i.onClose,sx:{p:2.5},children:e.jsxs(T,{spacing:2.5,children:[e.jsx(S,{gap:1,display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(4, 1fr)"},children:C.map(d=>{const m=t.type.includes(d);return e.jsx(Je,{onClick:()=>v(d),sx:{p:1,borderRadius:1,cursor:"pointer",border:s=>`solid 1px ${B(s.palette.grey[500],.08)}`,...m&&{bgcolor:"action.selected"}},children:e.jsxs(T,{spacing:1,direction:"row",alignItems:"center",children:[e.jsx(V,{file:d}),e.jsx(z,{variant:m?"subtitle2":"body2",children:d})]})},d)})}),e.jsxs(T,{spacing:1.5,direction:"row",alignItems:"center",justifyContent:"flex-end",children:[e.jsx(R,{variant:"outlined",color:"inherit",onClick:x,children:"Clear"}),e.jsx(R,{variant:"contained",onClick:i.onClose,children:"Apply"})]})]})})]}),w=e.jsxs(e.Fragment,{children:[e.jsx(R,{color:"inherit",onClick:g,endIcon:e.jsx(p,{icon:o?"eva:arrow-ios-upward-fill":"eva:arrow-ios-downward-fill",sx:{ml:-.5}}),children:t.startDate&&t.endDate?pe(t.startDate,t.endDate):"Select Date"}),e.jsx(Ve,{variant:"calendar",startDate:t.startDate,endDate:t.endDate,onChangeStartDate:l,onChangeEndDate:b,open:o,onClose:n,selected:!!t.startDate&&!!t.endDate,error:j})]});return e.jsxs(T,{spacing:1,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},sx:{width:1},children:[y,e.jsxs(T,{spacing:1,direction:"row",alignItems:"center",justifyContent:"flex-end",flexGrow:1,children:[w,u]})]})}me.propTypes={dateError:r.bool,filters:r.object,onCloseDateRange:r.func,onFilters:r.func,onOpenDateRange:r.func,openDateRange:r.bool,typeOptions:r.array};function ue({file:o,selected:n,onSelect:g,onDelete:t,sx:a,...j}){var A;const{enqueueSnackbar:C}=H(),{copy:i}=le(),[f,c]=h.useState(""),l=k(),b=k(),v=k(),x=k(),y=k(o.isFavorited),u=K(),w=h.useCallback(D=>{c(D.target.value)},[]),d=h.useCallback(()=>{C("Copied!"),i(o.url)},[i,C,o.url]),m=(l.value||n)&&g?e.jsx(M,{size:"medium",checked:n,onClick:g,icon:e.jsx(p,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(p,{icon:"eva:checkmark-circle-2-fill"}),sx:{p:.75}}):e.jsx(V,{file:o.type,sx:{width:36,height:36}}),s=e.jsxs(T,{direction:"row",alignItems:"center",sx:{top:8,right:8,position:"absolute"},children:[e.jsx(M,{color:"warning",icon:e.jsx(p,{icon:"eva:star-outline"}),checkedIcon:e.jsx(p,{icon:"eva:star-fill"}),checked:y.value,onChange:y.onToggle}),e.jsx(N,{color:u.open?"inherit":"default",onClick:u.onOpen,children:e.jsx(p,{icon:"eva:more-vertical-fill"})})]}),P=e.jsxs(e.Fragment,{children:[e.jsx(Qe,{persistent:!0,variant:"subtitle2",onClick:x.onTrue,sx:{width:1,mt:2,mb:.5},children:o.name}),e.jsxs(T,{direction:"row",alignItems:"center",sx:{maxWidth:.99,whiteSpace:"nowrap",typography:"caption",color:"text.disabled"},children:[ie(o.size),e.jsx(S,{component:"span",sx:{mx:.75,width:2,height:2,flexShrink:0,borderRadius:"50%",bgcolor:"currentColor"}}),e.jsx(z,{noWrap:!0,component:"span",variant:"caption",children:Pe(o.modifiedAt)})]})]}),I=e.jsx(de,{max:3,sx:{mt:1,[`& .${se.avatar}`]:{width:24,height:24,"&:first-of-type":{fontSize:12}}},children:(A=o.shared)==null?void 0:A.map(D=>e.jsx(ae,{alt:D.name,src:D.avatarUrl},D.id))});return e.jsxs(e.Fragment,{children:[e.jsxs(T,{component:re,variant:"outlined",alignItems:"flex-start",sx:{p:2.5,borderRadius:2,bgcolor:"unset",cursor:"pointer",position:"relative",...(l.value||n)&&{bgcolor:"background.paper",boxShadow:D=>D.customShadows.z20},...a},...j,children:[e.jsx(S,{onMouseEnter:l.onTrue,onMouseLeave:l.onFalse,children:m}),P,I,s]}),e.jsxs(_,{open:u.open,onClose:u.onClose,arrow:"right-top",sx:{width:160},children:[e.jsxs(O,{onClick:()=>{u.onClose(),d()},children:[e.jsx(p,{icon:"eva:link-2-fill"}),"Copy Link"]}),e.jsxs(O,{onClick:()=>{u.onClose(),b.onTrue()},children:[e.jsx(p,{icon:"solar:share-bold"}),"Share"]}),e.jsx(Y,{sx:{borderStyle:"dashed"}}),e.jsxs(O,{onClick:()=>{v.onTrue(),u.onClose()},sx:{color:"error.main"},children:[e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),"Delete"]})]}),e.jsx(ce,{item:o,favorited:y.value,onFavorite:y.onToggle,onCopyLink:d,open:x.value,onClose:x.onFalse,onDelete:()=>{x.onFalse(),t()}}),e.jsx(J,{open:b.value,shared:o.shared,inviteEmail:f,onChangeInvite:w,onCopyLink:d,onClose:()=>{b.onFalse(),c("")}}),e.jsx(X,{open:v.value,onClose:v.onFalse,title:"Delete",content:"Are you sure want to delete?",action:e.jsx(R,{variant:"contained",color:"error",onClick:t,children:"Delete"})})]})}ue.propTypes={file:r.oneOfType([r.string,r.object]),onDelete:r.func,onSelect:r.func,selected:r.bool,sx:r.object};function ge({action:o,selected:n,rowCount:g,numSelected:t,onSelectAllItems:a,sx:j,...C}){return e.jsx(we,{children:e.jsxs(S,{sx:{right:0,zIndex:9,bottom:0,display:"flex",borderRadius:1.5,position:"fixed",alignItems:"center",bgcolor:"text.primary",p:i=>i.spacing(1.5,2,1.5,1),boxShadow:i=>i.customShadows.z20,m:{xs:2,md:3},...j},...C,children:[e.jsx(M,{indeterminate:!!t&&t<g,checked:!!g&&t===g,onChange:i=>a(i.target.checked),icon:e.jsx(p,{icon:"eva:radio-button-off-fill"}),checkedIcon:e.jsx(p,{icon:"eva:checkmark-circle-2-fill"}),indeterminateIcon:e.jsx(p,{icon:"eva:minus-circle-fill"})}),n&&e.jsxs(z,{variant:"subtitle2",sx:{mr:2,color:i=>i.palette.mode==="light"?"common.white":"grey.800"},children:[n.length," Items selected"]}),o&&o]})})}ge.propTypes={action:r.node,numSelected:r.number,onSelectAllItems:r.func,rowCount:r.number,selected:r.array,sx:r.object};function je({table:o,dataFiltered:n,onDeleteItem:g,onOpenConfirm:t}){const{selected:a,onSelectRow:j,onSelectAllRows:C}=o,i=h.useRef(null),[f,c]=h.useState(""),[l,b]=h.useState(""),v=k(),x=k(),y=k(),u=k(),w=k(),d=h.useCallback(s=>{b(s.target.value)},[]),m=h.useCallback(s=>{c(s.target.value)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs(S,{ref:i,children:[e.jsx(ee,{title:"Folders",subTitle:`${n.filter(s=>s.type==="folder").length} folders`,onOpen:x.onTrue,collapse:w.value,onCollapse:w.onToggle}),e.jsx(Z,{in:!w.value,unmountOnExit:!0,children:e.jsx(S,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},children:n.filter(s=>s.type==="folder").map(s=>e.jsx(qe,{folder:s,selected:a.includes(s.id),onSelect:()=>j(s.id),onDelete:()=>g(s.id),sx:{maxWidth:"auto"}},s.id))})}),e.jsx(Y,{sx:{my:5,borderStyle:"dashed"}}),e.jsx(ee,{title:"Files",subTitle:`${n.filter(s=>s.type!=="folder").length} files`,onOpen:y.onTrue,collapse:u.value,onCollapse:u.onToggle}),e.jsx(Z,{in:!u.value,unmountOnExit:!0,children:e.jsx(S,{display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)",lg:"repeat(4, 1fr)"},gap:3,children:n.filter(s=>s.type!=="folder").map(s=>e.jsx(ue,{file:s,selected:a.includes(s.id),onSelect:()=>j(s.id),onDelete:()=>g(s.id),sx:{maxWidth:"auto"}},s.id))})}),!!(a!=null&&a.length)&&e.jsx(ge,{numSelected:a.length,rowCount:n.length,selected:a,onSelectAllItems:s=>C(s,n.map(P=>P.id)),action:e.jsxs(e.Fragment,{children:[e.jsx(R,{size:"small",color:"error",variant:"contained",startIcon:e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),onClick:t,sx:{mr:1},children:"Delete"}),e.jsx(R,{color:"primary",size:"small",variant:"contained",startIcon:e.jsx(p,{icon:"solar:share-bold"}),onClick:v.onTrue,children:"Share"})]})})]}),e.jsx(J,{open:v.value,inviteEmail:l,onChangeInvite:d,onClose:()=>{v.onFalse(),b("")}}),e.jsx(q,{open:y.value,onClose:y.onFalse}),e.jsx(q,{open:x.value,onClose:x.onFalse,title:"New Folder",onCreate:()=>{x.onFalse(),c(""),console.info("CREATE NEW FOLDER",f)},folderName:f,onChangeFolderName:m})]})}je.propTypes={dataFiltered:r.array,onDeleteItem:r.func,onOpenConfirm:r.func,table:r.object};function be({filters:o,onFilters:n,canReset:g,onResetFilters:t,results:a,...j}){const C=pe(o.startDate,o.endDate),i=h.useCallback(()=>{n("name","")},[n]),f=h.useCallback(l=>{const b=o.type.filter(v=>v!==l);n("type",b)},[o.type,n]),c=h.useCallback(()=>{n("startDate",null),n("endDate",null)},[n]);return e.jsxs(T,{spacing:1.5,...j,children:[e.jsxs(S,{sx:{typography:"body2"},children:[e.jsx("strong",{children:a}),e.jsx(S,{component:"span",sx:{color:"text.secondary",ml:.25},children:"results found"})]}),e.jsxs(T,{flexGrow:1,spacing:1,direction:"row",flexWrap:"wrap",alignItems:"center",children:[!!o.type.length&&e.jsx($,{label:"Types:",children:o.type.map(l=>e.jsx(U,{label:l,size:"small",onDelete:()=>f(l)},l))}),o.startDate&&o.endDate&&e.jsx($,{label:"Date:",children:e.jsx(U,{size:"small",label:C,onDelete:c})}),!!o.name&&e.jsx($,{label:"Keyword:",children:e.jsx(U,{label:o.name,size:"small",onDelete:i})}),g&&e.jsx(R,{color:"error",onClick:t,startIcon:e.jsx(p,{icon:"solar:trash-bin-trash-bold"}),children:"Clear"})]})]})}be.propTypes={canReset:r.bool,filters:r.object,onFilters:r.func,onResetFilters:r.func,results:r.number};function $({label:o,children:n,sx:g,...t}){return e.jsxs(T,{component:re,variant:"outlined",spacing:1,direction:"row",sx:{p:1,borderRadius:1,overflow:"hidden",borderStyle:"dashed",...g},...t,children:[e.jsx(S,{component:"span",sx:{typography:"subtitle2"},children:o}),e.jsx(T,{spacing:1,direction:"row",flexWrap:"wrap",children:n})]})}$.propTypes={children:r.node,label:r.string,sx:r.object};const ne={name:"",type:[],startDate:null,endDate:null};function oo(){const{enqueueSnackbar:o}=H(),n=Be({defaultRowsPerPage:10}),g=ke(),t=k(),a=k(),j=k(),[C,i]=h.useState("list"),[f,c]=h.useState(Te),[l,b]=h.useState(ne),v=Ae(l.startDate,l.endDate),x=no({inputData:f,comparator:Me(n.order,n.orderBy),filters:l,dateError:v}),y=x.slice(n.page*n.rowsPerPage,n.page*n.rowsPerPage+n.rowsPerPage),u=!!l.name||!!l.type.length||!!l.startDate&&!!l.endDate,w=!x.length&&u||!x.length,d=h.useCallback((F,L)=>{L!==null&&i(L)},[]),m=h.useCallback((F,L)=>{n.onResetPage(),b(W=>({...W,[F]:L}))},[n]),s=h.useCallback(()=>{b(ne)},[]),P=h.useCallback(F=>{const L=f.filter(W=>W.id!==F);o("Delete success!"),c(L),n.onUpdatePageDeleteRow(y.length)},[y.length,o,n,f]),I=h.useCallback(()=>{const F=f.filter(L=>!n.selected.includes(L.id));o("Delete success!"),c(F),n.onUpdatePageDeleteRows({totalRowsInPage:y.length,totalRowsFiltered:x.length})},[x.length,y.length,o,n,f]),A=e.jsxs(T,{spacing:2,direction:{xs:"column",md:"row"},alignItems:{xs:"flex-end",md:"center"},children:[e.jsx(me,{openDateRange:t.value,onCloseDateRange:t.onFalse,onOpenDateRange:t.onTrue,filters:l,onFilters:m,dateError:v,typeOptions:De}),e.jsxs(Ze,{size:"small",value:C,exclusive:!0,onChange:d,children:[e.jsx(oe,{value:"list",children:e.jsx(p,{icon:"solar:list-bold"})}),e.jsx(oe,{value:"grid",children:e.jsx(p,{icon:"mingcute:dot-grid-fill"})})]})]}),D=e.jsx(be,{filters:l,onResetFilters:s,canReset:u,onFilters:m,results:x.length});return e.jsxs(e.Fragment,{children:[e.jsxs(Fe,{maxWidth:g.themeStretch?!1:"lg",children:[e.jsxs(T,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[e.jsx(z,{variant:"h4",children:"File Manager"}),e.jsx(R,{variant:"contained",startIcon:e.jsx(p,{icon:"eva:cloud-upload-fill"}),onClick:j.onTrue,children:"Upload"})]}),e.jsxs(T,{spacing:2.5,sx:{my:{xs:3,md:5}},children:[A,u&&D]}),w?e.jsx(Ee,{filled:!0,title:"No Data",sx:{py:10}}):e.jsx(e.Fragment,{children:C==="list"?e.jsx(xe,{table:n,dataFiltered:x,onDeleteRow:P,notFound:w,onOpenConfirm:a.onTrue}):e.jsx(je,{table:n,dataFiltered:x,onDeleteItem:P,onOpenConfirm:a.onTrue})})]}),e.jsx(q,{open:j.value,onClose:j.onFalse}),e.jsx(X,{open:a.value,onClose:a.onFalse,title:"Delete",content:e.jsxs(e.Fragment,{children:["Are you sure want to delete ",e.jsxs("strong",{children:[" ",n.selected.length," "]})," items?"]}),action:e.jsx(R,{variant:"contained",color:"error",onClick:()=>{I(),a.onFalse()},children:"Delete"})})]})}function no({inputData:o,comparator:n,filters:g,dateError:t}){const{name:a,type:j,startDate:C,endDate:i}=g,f=o.map((c,l)=>[c,l]);return f.sort((c,l)=>{const b=n(c[0],l[0]);return b!==0?b:c[1]-l[1]}),o=f.map(c=>c[0]),a&&(o=o.filter(c=>c.name.toLowerCase().indexOf(a.toLowerCase())!==-1)),j.length&&(o=o.filter(c=>j.includes(Oe(c.type)))),t||C&&i&&(o=o.filter(c=>Le(c.createdAt,C,i))),o}function Xo(){return e.jsxs(e.Fragment,{children:[e.jsx(Re,{children:e.jsx("title",{children:" Dashboard: File Manager"})}),e.jsx(oo,{})]})}export{Xo as default};
