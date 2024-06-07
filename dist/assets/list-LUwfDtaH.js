import{a5 as y,r as e,j as s,C as k,p,f as F,R as T,e as w,S as v,a1 as B,H as I}from"./index-ylP9gOtX.js";import{o as c}from"./orderBy-jZ3Uzxp5.js";import{u as O}from"./use-debounce-wTbmT-1j.js";import{u as R,a as H,P as Q,b as z,c as A,f as E}from"./post-details-home-view-RS774Uwe.js";import{C as N}from"./custom-breadcrumbs-nwVkFrxi.js";import{T as V,a as _}from"./Tabs-uw_-qHeT.js";import"./_baseToString-NsyIlPy3.js";import"./index-9Plt95OV.js";import"./_baseIteratee-SWd0TUBs.js";import"./_baseEach-nNuSVvs8.js";import"./Autocomplete-dTg6AscC.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Close-TBHe2aFb.js";import"./Chip-bKHDEzge.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./format-time-IsJsg76X.js";import"./format-number-4qjwv98Z.js";import"./image-Z_eQ9U-t.js";import"./text-max-line-ZnnYxdFV.js";import"./Card-ecWVyrcr.js";import"./Pagination-Y2qt7bEk.js";import"./FirstPage-O7c3I5o0.js";import"./index.esm-zJIoddKN.js";import"./form-provider-BePwGsaR.js";import"./yup-mXr7br9k.js";import"./rhf-autocomplete-Oo_pj7FO.js";import"./upload-avatar-p1mV0K83.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./markdown-2wxhxQ8K.js";import"./empty-content-pShBjnDz.js";import"./DialogActions--bcAhgxi.js";import"./LoadingButton-yaXiXIxn.js";import"./CircularProgress-f92RqFnU.js";import"./Grid2-4Cxolu1e.js";import"./CardHeader-VpZWNMY4.js";import"./AvatarGroup-IiAoRrfd.js";import"./CardContent-KNMCihay.js";import"./Skeleton-TLvuDQXm.js";import"./ListItem-XNTvoQrG.js";import"./ListItemSecondaryAction-tY1dxVm_.js";import"./Fab-1Rc6O6Hl.js";import"./Zoom-ss6KAFwU.js";import"./KeyboardArrowRight-Iau3j8JW.js";const q={publish:"all"};function G(){const o=y(),[m,a]=e.useState("latest"),[i,n]=e.useState(q),[u,f]=e.useState(""),d=O(u),{posts:l,postsLoading:x}=R(),{searchResults:b,searchLoading:S}=H(d),g=W({inputData:l,filters:i,sortBy:m}),j=e.useCallback(t=>{a(t)},[]),h=e.useCallback((t,r)=>{n(L=>({...L,[t]:r}))},[]),P=e.useCallback(t=>{f(t)},[]),C=e.useCallback((t,r)=>{h("publish",r)},[h]);return s.jsxs(k,{maxWidth:o.themeStretch?!1:"lg",children:[s.jsx(N,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"Blog",href:p.dashboard.post.root},{name:"List"}],action:s.jsx(F,{component:T,href:p.dashboard.post.new,variant:"contained",startIcon:s.jsx(w,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(v,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(Q,{query:d,results:b,onSearch:P,loading:S,hrefItem:t=>p.dashboard.post.details(t)}),s.jsx(z,{sort:m,onSort:j,sortOptions:A})]}),s.jsx(V,{value:i.publish,onChange:C,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(t=>s.jsx(_,{iconPosition:"end",value:t,label:t,icon:s.jsxs(B,{variant:(t==="all"||t===i.publish)&&"filled"||"soft",color:t==="published"&&"info"||"default",children:[t==="all"&&l.length,t==="published"&&l.filter(r=>r.publish==="published").length,t==="draft"&&l.filter(r=>r.publish==="draft").length]}),sx:{textTransform:"capitalize"}},t))}),s.jsx(E,{posts:g,loading:x})]})}const W=({inputData:o,filters:m,sortBy:a})=>{const{publish:i}=m;return a==="latest"&&(o=c(o,["createdAt"],["desc"])),a==="oldest"&&(o=c(o,["createdAt"],["asc"])),a==="popular"&&(o=c(o,["totalViews"],["desc"])),i!=="all"&&(o=o.filter(n=>n.publish===i)),o};function $t(){return s.jsxs(s.Fragment,{children:[s.jsx(I,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(G,{})]})}export{$t as default};