import{a5 as u,r as i,j as r,C as x,p as l,dY as a,dZ as b,d_ as j,d$ as g,e0 as C,e as t,db as v,H as w}from"./index-cs8KH1Gj.js";import{P as F,a as P,b as y,c as U,d as S}from"./profile-followers-sfd80u9B.js";import"./confirm-dialog-2jI2zAgO.js";import{C as T}from"./custom-breadcrumbs-xf4gSwnQ.js";import"./table-pagination-custom-kL214XXs.js";import{C as _}from"./Card-M8rezznV.js";import{T as k,t as G,a as H}from"./Tabs-z1Y5XGJ8.js";import"./index.esm-skc3IiOM.js";import"./form-provider-AB30yPNG.js";import"./yup-GNAImRWC.js";import"./format-number-DkNQnIoZ.js";import"./rhf-autocomplete-BqIl6E2I.js";import"./upload-avatar-ZcmlmDZJ.js";import"./fade-YsdWEJJe.js";import"./file-thumbnail-NE2uG7uc.js";import"./index-nuAYcRns.js";import"./image--etRdOrW.js";import"./TextField-z0heVHRm.js";import"./FormControl-aSSJzqHf.js";import"./isMuiElement-MbnxLTZm.js";import"./InputLabel-waUCNIWh.js";import"./FormLabel-LFvC5gak.js";import"./Select-xqyf6Rlf.js";import"./index-q81m-9gd.js";import"./Menu-gk9ZpIDp.js";import"./Checkbox-AiUxbF_6.js";import"./SwitchBase-PZN8fx1f.js";import"./Chip-y3BMGgXZ.js";import"./FormControlLabel-MUxj2wHe.js";import"./FormGroup-nEfyDjbV.js";import"./Switch-MKSYeegN.js";import"./editor-nhnT59he.js";import"./highlight-3QAqHvw2.js";import"./Slider-NQg_Rm46.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-fWybfjqF.js";import"./Autocomplete-yaQcgRwv.js";import"./Close-MW_tufCV.js";import"./Grid2-0IK39fyY.js";import"./LoadingButton-LNe3v39O.js";import"./CircularProgress-8U-eASlb.js";import"./DialogTitle-qgtaNWae.js";import"./dialogTitleClasses-TCv6NWT5.js";import"./DialogContent-J5aQOW70.js";import"./Alert-RCC6ZrSo.js";import"./DialogActions-QLTPVjqO.js";import"./TablePagination-TKKuccHp.js";import"./KeyboardArrowRight-SEABOkxc.js";import"./FirstPage-u-FDu5UE.js";import"./format-time-GAH0CY8i.js";import"./CardHeader-QV_NYi3u.js";import"./AvatarGroup-foOR0TA6.js";import"./Fab-S7HKeK8O.js";import"./use-light-box-Dmbs0PQf.js";import"./empty-content-XjJCMadM.js";const A=[{value:"profile",label:"Profile",icon:r.jsx(t,{icon:"solar:user-id-bold",width:24})},{value:"followers",label:"Followers",icon:r.jsx(t,{icon:"solar:heart-bold",width:24})},{value:"friends",label:"Friends",icon:r.jsx(t,{icon:"solar:users-group-rounded-bold",width:24})},{value:"gallery",label:"Gallery",icon:r.jsx(t,{icon:"solar:gallery-wide-bold",width:24})}];function B(){const m=u(),{user:o}=v(),[n,p]=i.useState(""),[s,d]=i.useState("profile"),c=i.useCallback((e,h)=>{d(h)},[]),f=i.useCallback(e=>{p(e.target.value)},[]);return r.jsxs(x,{maxWidth:m.themeStretch?!1:"lg",children:[r.jsx(T,{heading:"Profile",links:[{name:"Dashboard",href:l.dashboard.root},{name:"User",href:l.dashboard.user.root},{name:o==null?void 0:o.displayName}],sx:{mb:{xs:3,md:5}}}),r.jsxs(_,{sx:{mb:3,height:290},children:[r.jsx(F,{role:a.role,name:o==null?void 0:o.displayName,avatarUrl:o==null?void 0:o.photoURL,coverUrl:a.coverUrl}),r.jsx(k,{value:s,onChange:c,sx:{width:1,bottom:0,zIndex:9,position:"absolute",bgcolor:"background.paper",[`& .${G.flexContainer}`]:{pr:{md:3},justifyContent:{sm:"center",md:"flex-end"}}},children:A.map(e=>r.jsx(H,{value:e.value,icon:e.icon,label:e.label},e.value))})]}),s==="profile"&&r.jsx(P,{info:a,posts:b}),s==="followers"&&r.jsx(y,{followers:j}),s==="friends"&&r.jsx(U,{friends:g,searchFriends:n,onSearchFriends:f}),s==="gallery"&&r.jsx(S,{gallery:C})]})}function Er(){return r.jsxs(r.Fragment,{children:[r.jsx(w,{children:r.jsx("title",{children:" Dashboard: User Profile"})}),r.jsx(B,{})]})}export{Er as default};