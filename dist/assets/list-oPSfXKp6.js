import{a5 as y,r as e,j as s,C as k,p,f as F,R as T,e as w,S as v,a1 as B,H as I}from"./index-cs8KH1Gj.js";import{o as c}from"./orderBy-NP5Mcp7K.js";import{u as O}from"./use-debounce-L-IljVpL.js";import{u as R,a as H,P as Q,b as z,c as A,f as E}from"./post-details-home-view-FSb1MNhC.js";import{C as N}from"./custom-breadcrumbs-xf4gSwnQ.js";import{T as V,a as _}from"./Tabs-z1Y5XGJ8.js";import"./_baseToString-WXJc698Q.js";import"./index-UdAIyAOi.js";import"./_baseIteratee-KsFiz7iq.js";import"./_baseEach-u09ndht5.js";import"./Autocomplete-yaQcgRwv.js";import"./Select-xqyf6Rlf.js";import"./index-q81m-9gd.js";import"./Menu-gk9ZpIDp.js";import"./Close-MW_tufCV.js";import"./Chip-y3BMGgXZ.js";import"./TextField-z0heVHRm.js";import"./FormControl-aSSJzqHf.js";import"./isMuiElement-MbnxLTZm.js";import"./InputLabel-waUCNIWh.js";import"./FormLabel-LFvC5gak.js";import"./format-time-GAH0CY8i.js";import"./format-number-DkNQnIoZ.js";import"./image--etRdOrW.js";import"./text-max-line-rVnCVCHH.js";import"./Card-M8rezznV.js";import"./Pagination-v0nFvUiL.js";import"./FirstPage-u-FDu5UE.js";import"./index.esm-skc3IiOM.js";import"./form-provider-AB30yPNG.js";import"./yup-GNAImRWC.js";import"./rhf-autocomplete-BqIl6E2I.js";import"./upload-avatar-ZcmlmDZJ.js";import"./fade-YsdWEJJe.js";import"./file-thumbnail-NE2uG7uc.js";import"./index-nuAYcRns.js";import"./Checkbox-AiUxbF_6.js";import"./SwitchBase-PZN8fx1f.js";import"./FormControlLabel-MUxj2wHe.js";import"./FormGroup-nEfyDjbV.js";import"./Switch-MKSYeegN.js";import"./editor-nhnT59he.js";import"./highlight-3QAqHvw2.js";import"./Slider-NQg_Rm46.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-fWybfjqF.js";import"./markdown-vVk34PJL.js";import"./empty-content-XjJCMadM.js";import"./DialogActions-QLTPVjqO.js";import"./LoadingButton-LNe3v39O.js";import"./CircularProgress-8U-eASlb.js";import"./Grid2-0IK39fyY.js";import"./CardHeader-QV_NYi3u.js";import"./AvatarGroup-foOR0TA6.js";import"./CardContent-V2Xejzlg.js";import"./Skeleton-A6jQXjxo.js";import"./ListItem-0o5QvI5j.js";import"./ListItemSecondaryAction-1KwuladM.js";import"./Fab-S7HKeK8O.js";import"./Zoom-bfL0EqPw.js";import"./KeyboardArrowRight-SEABOkxc.js";const q={publish:"all"};function G(){const o=y(),[m,a]=e.useState("latest"),[i,n]=e.useState(q),[u,f]=e.useState(""),d=O(u),{posts:l,postsLoading:x}=R(),{searchResults:b,searchLoading:S}=H(d),g=W({inputData:l,filters:i,sortBy:m}),j=e.useCallback(t=>{a(t)},[]),h=e.useCallback((t,r)=>{n(L=>({...L,[t]:r}))},[]),P=e.useCallback(t=>{f(t)},[]),C=e.useCallback((t,r)=>{h("publish",r)},[h]);return s.jsxs(k,{maxWidth:o.themeStretch?!1:"lg",children:[s.jsx(N,{heading:"List",links:[{name:"Dashboard",href:p.dashboard.root},{name:"Blog",href:p.dashboard.post.root},{name:"List"}],action:s.jsx(F,{component:T,href:p.dashboard.post.new,variant:"contained",startIcon:s.jsx(w,{icon:"mingcute:add-line"}),children:"New Post"}),sx:{mb:{xs:3,md:5}}}),s.jsxs(v,{spacing:3,justifyContent:"space-between",alignItems:{xs:"flex-end",sm:"center"},direction:{xs:"column",sm:"row"},sx:{mb:{xs:3,md:5}},children:[s.jsx(Q,{query:d,results:b,onSearch:P,loading:S,hrefItem:t=>p.dashboard.post.details(t)}),s.jsx(z,{sort:m,onSort:j,sortOptions:A})]}),s.jsx(V,{value:i.publish,onChange:C,sx:{mb:{xs:3,md:5}},children:["all","published","draft"].map(t=>s.jsx(_,{iconPosition:"end",value:t,label:t,icon:s.jsxs(B,{variant:(t==="all"||t===i.publish)&&"filled"||"soft",color:t==="published"&&"info"||"default",children:[t==="all"&&l.length,t==="published"&&l.filter(r=>r.publish==="published").length,t==="draft"&&l.filter(r=>r.publish==="draft").length]}),sx:{textTransform:"capitalize"}},t))}),s.jsx(E,{posts:g,loading:x})]})}const W=({inputData:o,filters:m,sortBy:a})=>{const{publish:i}=m;return a==="latest"&&(o=c(o,["createdAt"],["desc"])),a==="oldest"&&(o=c(o,["createdAt"],["asc"])),a==="popular"&&(o=c(o,["totalViews"],["desc"])),i!=="all"&&(o=o.filter(n=>n.publish===i)),o};function $t(){return s.jsxs(s.Fragment,{children:[s.jsx(I,{children:s.jsx("title",{children:" Dashboard: Post List"})}),s.jsx(G,{})]})}export{$t as default};