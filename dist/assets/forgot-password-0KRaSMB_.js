import{u as f,a as j,p as s,j as r,S as a,L as b,R as y,e as F,T as m,H as w}from"./index-ylP9gOtX.js";import{c as S,a as P}from"./index.esm-zJIoddKN.js";import{R as v}from"./rhf-autocomplete-Oo_pj7FO.js";import{u as R,F as L}from"./form-provider-BePwGsaR.js";import{P as k}from"./new-password-icon-cy-7JfnF.js";import{o as E}from"./yup-mXr7br9k.js";import{L as H}from"./LoadingButton-yaXiXIxn.js";import"./upload-avatar-p1mV0K83.js";import"./format-number-4qjwv98Z.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./image-Z_eQ9U-t.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./Chip-bKHDEzge.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./Autocomplete-dTg6AscC.js";import"./Close-TBHe2aFb.js";import"./CircularProgress-f92RqFnU.js";function I(){const{forgotPassword:t}=f(),n=j(),l=S().shape({email:P().required("Email is required").email("Email must be a valid email address")}),p={email:""},o=R({resolver:E(l),defaultValues:p}),{handleSubmit:c,formState:{isSubmitting:d}}=o,u=c(async i=>{try{await(t==null?void 0:t(i.email));const e=new URLSearchParams({email:i.email}).toString(),g=`${s.auth.supabase.verify}?${e}`;n.push(g)}catch(e){console.error(e)}}),h=r.jsxs(a,{spacing:3,alignItems:"center",children:[r.jsx(v,{name:"email",label:"Email address"}),r.jsx(H,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:d,children:"Send Request"}),r.jsxs(b,{component:y,href:s.auth.supabase.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[r.jsx(F,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),x=r.jsxs(r.Fragment,{children:[r.jsx(k,{sx:{height:96}}),r.jsxs(a,{spacing:1,sx:{mt:3,mb:5},children:[r.jsx(m,{variant:"h3",children:"Forgot your password?"}),r.jsx(m,{variant:"body2",sx:{color:"text.secondary"},children:"Please enter the email address associated with your account and We will email you a link to reset your password."})]})]});return r.jsxs(r.Fragment,{children:[x,r.jsx(L,{methods:o,onSubmit:u,children:h})]})}function ur(){return r.jsxs(r.Fragment,{children:[r.jsx(w,{children:r.jsx("title",{children:" Supabase: Forgot Password"})}),r.jsx(I,{})]})}export{ur as default};