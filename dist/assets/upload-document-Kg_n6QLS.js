import{a5 as _,r as a,g as R,j as e,C as k,T as i,B as m,H as T,S as d,ae as E}from"./index-cs8KH1Gj.js";import{Q as w,B as p}from"./react-toastify.esm-nWnK002_.js";import{u as I,F as A,C as B}from"./form-provider-AB30yPNG.js";import{a as G}from"./upload-avatar-ZcmlmDZJ.js";import{C as L}from"./Card-M8rezznV.js";import{F as M}from"./FormControl-aSSJzqHf.js";import{I as O}from"./InputLabel-waUCNIWh.js";import{S as V}from"./Select-xqyf6Rlf.js";import"./format-number-DkNQnIoZ.js";import"./fade-YsdWEJJe.js";import"./file-thumbnail-NE2uG7uc.js";import"./index-nuAYcRns.js";import"./image--etRdOrW.js";import"./isMuiElement-MbnxLTZm.js";import"./FormLabel-LFvC5gak.js";import"./index-q81m-9gd.js";import"./Menu-gk9ZpIDp.js";function re(){const u=_(),[h,f]=a.useState(""),[r,n]=a.useState([]),x=()=>p.success("Documents Uploaded"),j=()=>p.error("Failed to Upload"),g=a.useMemo(()=>({doc_type:"",csp_code:""}),[]),l=I({defaultValues:g}),{handleSubmit:b,control:y}=l,C=sessionStorage.getItem("vendor");a.useEffect(()=>{f(C||"")},[]);const c=b(async s=>{const t=new FormData;t.append("doc_type",s.doc_type),t.append("csp_code",h),r.forEach(o=>{t.append("file",o)});try{const o=await R.post("http://ec2-54-173-125-80.compute-1.amazonaws.com:8080/nccf/csp/upload_document",t,{headers:{"Content-Type":"multipart/form-data"}});o.data.status=="201"?x():j(),console.log("Form submitted successfully:",o.data)}catch(o){console.error("Error submitting form:",o)}}),F=[{label:"Aadhar",key:"aadhar"},{label:"Certificates",key:"certificates"},{label:"Gst Number",key:"gst_number"},{label:"Pan Number",key:"pan_number"}],D=a.useCallback(s=>{n([...r,...s.map(t=>Object.assign(t,{preview:URL.createObjectURL(t)}))])},[r]),v=s=>{const t=r.filter(o=>o!==s);n(t)},S=()=>{n([])},U=e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Dashboard | Upload Documents"})}),e.jsx(L,{children:e.jsx(d,{spacing:3,sx:{p:3},children:e.jsxs(d,{spacing:1.5,children:[e.jsx(m,{rowGap:3,columnGap:2,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(2, 1fr)"},children:e.jsx(B,{name:"doc_type",control:y,render:({field:s})=>e.jsxs(M,{fullWidth:!0,children:[e.jsx(O,{children:"Document Type"}),e.jsx(V,{...s,label:"Document Type",children:F.map(t=>e.jsx(E,{value:t.key,children:t.label},t))})]})})}),e.jsx(i,{variant:"subtitle2",children:"Upload Your Document"}),e.jsx(G,{multiple:!0,accept:{"image/jpeg":[],"image/jpg":[],"image/png":[]},thumbnail:!0,files:r,onDrop:D,onRemove:v,onRemoveAll:S,onUpload:c})]})})})]});return e.jsxs(e.Fragment,{children:[e.jsx(w,{}),e.jsxs(k,{maxWidth:u.themeStretch?!1:"xl",children:[e.jsx(i,{variant:"h4",children:"Upload Documents"}),e.jsx(m,{sx:{mt:5,width:1,height:320,borderRadius:2},children:e.jsx(A,{methods:l,onSubmit:c,children:U})})]})]})}export{re as default};