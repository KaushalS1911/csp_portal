import{cg as U,a5 as k,a as D,c as L,r as i,e1 as A,a7 as B,p as g,j as t,C as E,f as j,R as I,e as P,w as N,a1 as O,e4 as _,bq as H,d as q,cp as z,e2 as W,H as V}from"./index-ylP9gOtX.js";import{e as $,f as G,g as J}from"./profile-followers-hRUQneab.js";import{C as K}from"./confirm-dialog-cJHS76Pm.js";import{C as M}from"./custom-breadcrumbs-nwVkFrxi.js";import{u as Q,g as X,e as Y}from"./use-table-n8u793S6.js";import{c as Z,a as ee,d as te,e as se,b as oe}from"./table-pagination-custom-PMdOlWse.js";import{C as ae}from"./Card-ecWVyrcr.js";import{T as re,a as le}from"./Tabs-uw_-qHeT.js";import{T as ne,a as ie,b as de}from"./TableContainer-Hpqh9ELm.js";import"./index.esm-zJIoddKN.js";import"./form-provider-BePwGsaR.js";import"./yup-mXr7br9k.js";import"./format-number-4qjwv98Z.js";import"./rhf-autocomplete-Oo_pj7FO.js";import"./upload-avatar-p1mV0K83.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./image-Z_eQ9U-t.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./Chip-bKHDEzge.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./Autocomplete-dTg6AscC.js";import"./Close-TBHe2aFb.js";import"./Grid2-4Cxolu1e.js";import"./LoadingButton-yaXiXIxn.js";import"./CircularProgress-f92RqFnU.js";import"./DialogTitle-hOzIj-Yd.js";import"./dialogTitleClasses-MQ0ehrVy.js";import"./DialogContent-03g2-VNx.js";import"./Alert-cRoXQ0-e.js";import"./DialogActions--bcAhgxi.js";import"./TablePagination-XgtPFnNO.js";import"./KeyboardArrowRight-Iau3j8JW.js";import"./FirstPage-O7c3I5o0.js";import"./format-time-IsJsg76X.js";import"./CardHeader-VpZWNMY4.js";import"./AvatarGroup-IiAoRrfd.js";import"./Fab-1Rc6O6Hl.js";import"./use-light-box-FjDYotIv.js";import"./empty-content-pShBjnDz.js";const ce=[{value:"all",label:"All"},...W],me=[{id:"name",label:"Name"},{id:"phoneNumber",label:"Phone Number",width:180},{id:"company",label:"Company",width:220},{id:"role",label:"Role",width:180},{id:"status",label:"Status",width:100},{id:"",width:88}],w={name:"",role:[],status:"all"};function pe(){const{enqueueSnackbar:r}=U(),e=Q(),x=k(),m=D(),d=L(),[n,p]=i.useState(A),[o,c]=i.useState(w),a=he({inputData:n,comparator:X(e.order,e.orderBy),filters:o}),h=a.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage),C=e.dense?56:76,f=!B(w,o),R=!a.length&&f||!a.length,u=i.useCallback((s,l)=>{e.onResetPage(),c(b=>({...b,[s]:l}))},[e]),S=i.useCallback(()=>{c(w)},[]),T=i.useCallback(s=>{const l=n.filter(b=>b.id!==s);r("Delete success!"),p(l),e.onUpdatePageDeleteRow(h.length)},[h.length,r,e,n]),v=i.useCallback(()=>{const s=n.filter(l=>!e.selected.includes(l.id));r("Delete success!"),p(s),e.onUpdatePageDeleteRows({totalRowsInPage:h.length,totalRowsFiltered:a.length})},[a.length,h.length,r,e,n]),F=i.useCallback(s=>{m.push(g.dashboard.user.edit(s))},[m]),y=i.useCallback((s,l)=>{u("status",l)},[u]);return t.jsxs(t.Fragment,{children:[t.jsxs(E,{maxWidth:x.themeStretch?!1:"lg",children:[t.jsx(M,{heading:"List",links:[{name:"Dashboard",href:g.dashboard.root},{name:"User",href:g.dashboard.user.root},{name:"List"}],action:t.jsx(j,{component:I,href:g.dashboard.user.new,variant:"contained",startIcon:t.jsx(P,{icon:"mingcute:add-line"}),children:"New User"}),sx:{mb:{xs:3,md:5}}}),t.jsxs(ae,{children:[t.jsx(re,{value:o.status,onChange:y,sx:{px:2.5,boxShadow:s=>`inset 0 -2px 0 0 ${N(s.palette.grey[500],.08)}`},children:ce.map(s=>t.jsx(le,{iconPosition:"end",value:s.value,label:s.label,icon:t.jsx(O,{variant:(s.value==="all"||s.value===o.status)&&"filled"||"soft",color:s.value==="active"&&"success"||s.value==="pending"&&"warning"||s.value==="banned"&&"error"||"default",children:["active","pending","banned","rejected"].includes(s.value)?n.filter(l=>l.status===s.value).length:n.length})},s.value))}),t.jsx($,{filters:o,onFilters:u,roleOptions:_}),f&&t.jsx(G,{filters:o,onFilters:u,onResetFilters:S,results:a.length,sx:{p:2.5,pt:0}}),t.jsxs(ne,{sx:{position:"relative",overflow:"unset"},children:[t.jsx(Z,{dense:e.dense,numSelected:e.selected.length,rowCount:a.length,onSelectAllRows:s=>e.onSelectAllRows(s,a.map(l=>l.id)),action:t.jsx(H,{title:"Delete",children:t.jsx(q,{color:"primary",onClick:d.onTrue,children:t.jsx(P,{icon:"solar:trash-bin-trash-bold"})})})}),t.jsx(z,{children:t.jsxs(ie,{size:e.dense?"small":"medium",sx:{minWidth:960},children:[t.jsx(ee,{order:e.order,orderBy:e.orderBy,headLabel:me,rowCount:a.length,numSelected:e.selected.length,onSort:e.onSort,onSelectAllRows:s=>e.onSelectAllRows(s,a.map(l=>l.id))}),t.jsxs(de,{children:[a.slice(e.page*e.rowsPerPage,e.page*e.rowsPerPage+e.rowsPerPage).map(s=>t.jsx(J,{row:s,selected:e.selected.includes(s.id),onSelectRow:()=>e.onSelectRow(s.id),onDeleteRow:()=>T(s.id),onEditRow:()=>F(s.id)},s.id)),t.jsx(te,{height:C,emptyRows:Y(e.page,e.rowsPerPage,a.length)}),t.jsx(se,{notFound:R})]})]})})]}),t.jsx(oe,{count:a.length,page:e.page,rowsPerPage:e.rowsPerPage,onPageChange:e.onChangePage,onRowsPerPageChange:e.onChangeRowsPerPage,dense:e.dense,onChangeDense:e.onChangeDense})]})]}),t.jsx(K,{open:d.value,onClose:d.onFalse,title:"Delete",content:t.jsxs(t.Fragment,{children:["Are you sure want to delete ",t.jsxs("strong",{children:[" ",e.selected.length," "]})," items?"]}),action:t.jsx(j,{variant:"contained",color:"error",onClick:()=>{v(),d.onFalse()},children:"Delete"})})]})}function he({inputData:r,comparator:e,filters:x}){const{name:m,status:d,role:n}=x,p=r.map((o,c)=>[o,c]);return p.sort((o,c)=>{const a=e(o[0],c[0]);return a!==0?a:o[1]-c[1]}),r=p.map(o=>o[0]),m&&(r=r.filter(o=>o.name.toLowerCase().indexOf(m.toLowerCase())!==-1)),d!=="all"&&(r=r.filter(o=>o.status===d)),n.length&&(r=r.filter(o=>n.includes(o.role))),r}function bt(){return t.jsxs(t.Fragment,{children:[t.jsx(V,{children:t.jsx("title",{children:" Dashboard: User List"})}),t.jsx(pe,{})]})}export{bt as default};