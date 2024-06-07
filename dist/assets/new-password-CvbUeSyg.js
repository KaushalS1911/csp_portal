import{a as v,r as F,u as A,c as I,p as N,j as r,S as i,T as n,I as d,d as m,e as p,H as C}from"./index-ylP9gOtX.js";import{c as T,a as c,b as q}from"./index.esm-zJIoddKN.js";import{R as l}from"./rhf-autocomplete-Oo_pj7FO.js";import{u as H,F as R}from"./form-provider-BePwGsaR.js";import{N as k}from"./new-password-icon-cy-7JfnF.js";import{o as B}from"./yup-mXr7br9k.js";import{A as E}from"./Alert-cRoXQ0-e.js";import{L as $}from"./LoadingButton-yaXiXIxn.js";import"./upload-avatar-p1mV0K83.js";import"./format-number-4qjwv98Z.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./image-Z_eQ9U-t.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./Chip-bKHDEzge.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./Autocomplete-dTg6AscC.js";import"./Close-TBHe2aFb.js";import"./CircularProgress-f92RqFnU.js";function L(){const u=v(),[t,x]=F.useState(""),{updatePassword:e}=A(),s=I(),h=T().shape({password:c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:c().required("Confirm password is required").oneOf([q("password")],"Passwords must match")}),w={password:"",confirmPassword:""},a=H({mode:"onChange",resolver:B(h),defaultValues:w}),{reset:g,handleSubmit:f,formState:{isSubmitting:j}}=a,b=f(async S=>{try{await(e==null?void 0:e(S.password)),u.push(N.dashboard.root)}catch(o){console.error(o),g(),x(typeof o=="string"?o:o.message)}}),P=r.jsxs(r.Fragment,{children:[r.jsx(k,{sx:{height:96}}),r.jsxs(i,{spacing:1,sx:{mt:3,mb:5},children:[r.jsx(n,{variant:"h3",children:"New Password"}),r.jsx(n,{variant:"body2",sx:{color:"text.secondary"},children:"Successful updates enable access using the new password"})]})]}),y=r.jsxs(i,{spacing:3,children:[r.jsx(l,{name:"password",label:"Confirm Password",type:s.value?"text":"password",InputProps:{endAdornment:r.jsx(d,{position:"end",children:r.jsx(m,{onClick:s.onToggle,edge:"end",children:r.jsx(p,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),r.jsx(l,{name:"confirmPassword",label:"Password",type:s.value?"text":"password",InputProps:{endAdornment:r.jsx(d,{position:"end",children:r.jsx(m,{onClick:s.onToggle,edge:"end",children:r.jsx(p,{icon:s.value?"solar:eye-bold":"solar:eye-closed-bold"})})})}}),r.jsx($,{fullWidth:!0,type:"submit",size:"large",variant:"contained",loading:j,children:"Update Password"})]});return r.jsxs(r.Fragment,{children:[P,!!t&&r.jsx(E,{severity:"error",sx:{textAlign:"left",mb:3},children:t}),r.jsx(R,{methods:a,onSubmit:b,children:y})]})}function Pr(){return r.jsxs(r.Fragment,{children:[r.jsx(C,{children:r.jsx("title",{children:" Supabase: New Password"})}),r.jsx(L,{})]})}export{Pr as default};