import{u as R,r as P,a as q,c as L,p as d,j as e,S as t,T as m,L as l,R as N,I as A,d as E,e as I,H as T}from"./index-cs8KH1Gj.js";import{c as k,a as i}from"./index.esm-skc3IiOM.js";import{R as o}from"./rhf-autocomplete-BqIl6E2I.js";import{u as B,F as H}from"./form-provider-AB30yPNG.js";import"./new-password-icon-VA6XtizP.js";import{o as $}from"./yup-GNAImRWC.js";import{A as C}from"./Alert-RCC6ZrSo.js";import{L as M}from"./LoadingButton-LNe3v39O.js";import"./upload-avatar-ZcmlmDZJ.js";import"./format-number-DkNQnIoZ.js";import"./fade-YsdWEJJe.js";import"./file-thumbnail-NE2uG7uc.js";import"./index-nuAYcRns.js";import"./image--etRdOrW.js";import"./TextField-z0heVHRm.js";import"./FormControl-aSSJzqHf.js";import"./isMuiElement-MbnxLTZm.js";import"./InputLabel-waUCNIWh.js";import"./FormLabel-LFvC5gak.js";import"./Select-xqyf6Rlf.js";import"./index-q81m-9gd.js";import"./Menu-gk9ZpIDp.js";import"./Checkbox-AiUxbF_6.js";import"./SwitchBase-PZN8fx1f.js";import"./Chip-y3BMGgXZ.js";import"./FormControlLabel-MUxj2wHe.js";import"./FormGroup-nEfyDjbV.js";import"./Switch-MKSYeegN.js";import"./editor-nhnT59he.js";import"./highlight-3QAqHvw2.js";import"./Slider-NQg_Rm46.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-fWybfjqF.js";import"./Autocomplete-yaQcgRwv.js";import"./Close-MW_tufCV.js";import"./CircularProgress-8U-eASlb.js";function V(){const{register:a}=R(),[c,u]=P.useState(""),x=q(),n=L(),h=k().shape({firstName:i().required("First name required"),lastName:i().required("Last name required"),email:i().required("Email is required").email("Email must be a valid email address"),password:i().required("Password is required")}),g={firstName:"",lastName:"",email:"",password:""},p=B({resolver:$(h),defaultValues:g}),{reset:j,handleSubmit:y,formState:{isSubmitting:f}}=p,b=y(async s=>{try{await(a==null?void 0:a(s.email,s.password,s.firstName,s.lastName));const r=new URLSearchParams({email:s.email}).toString(),F=`${d.auth.supabase.verify}?${r}`;x.push(F)}catch(r){console.error(r),j(),u(typeof r=="string"?r:r.message)}}),v=e.jsxs(t,{spacing:2,sx:{mb:5,position:"relative"},children:[e.jsx(m,{variant:"h4",children:"Get started absolutely free"}),e.jsxs(t,{direction:"row",spacing:.5,children:[e.jsx(m,{variant:"body2",children:" Already have an account? "}),e.jsx(l,{href:d.auth.supabase.login,component:N,variant:"subtitle2",children:"Sign in"})]})]}),w=e.jsxs(m,{component:"div",sx:{mt:2.5,textAlign:"center",typography:"caption",color:"text.secondary"},children:["By signing up, I agree to ",e.jsx(l,{underline:"always",color:"text.primary",children:"Terms of Service"})," and ",e.jsx(l,{underline:"always",color:"text.primary",children:"Privacy Policy"}),"."]}),S=e.jsxs(t,{spacing:2.5,children:[e.jsxs(t,{direction:{xs:"column",sm:"row"},spacing:2,children:[e.jsx(o,{name:"firstName",label:"First name"}),e.jsx(o,{name:"lastName",label:"Last name"})]}),e.jsx(o,{name:"email",label:"Email address"}),e.jsx(o,{name:"password",label:"Password",type:n.value?"text":"password",InputProps:{endAdornment:e.jsx(A,{position:"end",children:e.jsx(E,{onClick:n.onToggle,edge:"end",children:e.jsx(I,{icon:n.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),e.jsx(M,{fullWidth:!0,color:"inherit",size:"large",type:"submit",variant:"contained",loading:f,children:"Create account"})]});return e.jsxs(e.Fragment,{children:[v,!!c&&e.jsx(C,{severity:"error",sx:{mb:3},children:c}),e.jsx(H,{methods:p,onSubmit:b,children:S}),w]})}function Se(){return e.jsxs(e.Fragment,{children:[e.jsx(T,{children:e.jsx("title",{children:" Supabase: Register"})}),e.jsx(V,{})]})}export{Se as default};