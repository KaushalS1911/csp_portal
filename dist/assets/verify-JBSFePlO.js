import{a as k,b as E,u as R,p as c,r as P,j as e,S as l,T as i,L as d,R as V,e as I,H as L}from"./index-ylP9gOtX.js";import{c as H,a as p}from"./index.esm-zJIoddKN.js";import{R as q,a as A}from"./rhf-autocomplete-Oo_pj7FO.js";import{u as T,F as $}from"./form-provider-BePwGsaR.js";import{o as W}from"./yup-mXr7br9k.js";import{u as z}from"./use-countdown-OedAQvaf.js";import{E as B}from"./new-password-icon-cy-7JfnF.js";import{L as D}from"./LoadingButton-yaXiXIxn.js";import"./upload-avatar-p1mV0K83.js";import"./format-number-4qjwv98Z.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./image-Z_eQ9U-t.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./Chip-bKHDEzge.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./Autocomplete-dTg6AscC.js";import"./Close-TBHe2aFb.js";import"./CircularProgress-f92RqFnU.js";function G(){const u=k(),h=E().get("email"),{confirmRegister:t,resendCodeRegister:r}=R(),{countdown:x,counting:a,startCountdown:s}=z(60),f=H().shape({code:p().min(6,"Code must be at least 6 characters").required("Code is required"),email:p().required("Email is required").email("Email must be a valid email address")}),y={code:"",email:h||""},n=T({mode:"onChange",resolver:W(f),defaultValues:y}),{watch:b,handleSubmit:j,formState:{isSubmitting:g}}=n,m=b(),v=j(async o=>{try{await(t==null?void 0:t(o.email,o.code)),u.push(c.auth.amplify.login)}catch(C){console.error(C)}}),w=P.useCallback(async()=>{try{s(),await(r==null?void 0:r(m.email))}catch(o){console.error(o)}},[r,s,m.email]),F=e.jsxs(l,{spacing:3,alignItems:"center",children:[e.jsx(q,{name:"email",label:"Email",placeholder:"example@gmail.com",InputLabelProps:{shrink:!0}}),e.jsx(A,{name:"code"}),e.jsx(D,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:g,children:"Verify"}),e.jsxs(i,{variant:"body2",children:["Don’t have a code? ",e.jsxs(d,{variant:"subtitle2",onClick:w,sx:{cursor:"pointer",...a&&{color:"text.disabled",pointerEvents:"none"}},children:["Resend code ",a&&`(${x}s)`]})]}),e.jsxs(d,{component:V,href:c.auth.amplify.login,color:"inherit",variant:"subtitle2",sx:{alignItems:"center",display:"inline-flex"},children:[e.jsx(I,{icon:"eva:arrow-ios-back-fill",width:16}),"Return to sign in"]})]}),S=e.jsxs(e.Fragment,{children:[e.jsx(B,{sx:{height:96}}),e.jsxs(l,{spacing:1,sx:{mt:3,mb:5},children:[e.jsx(i,{variant:"h3",children:"Please check your email!"}),e.jsx(i,{variant:"body2",sx:{color:"text.secondary"},children:"We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify your email."})]})]});return e.jsxs(e.Fragment,{children:[S,e.jsx($,{methods:n,onSubmit:v,children:F})]})}function ke(){return e.jsxs(e.Fragment,{children:[e.jsx(L,{children:e.jsx("title",{children:" Amplify: Verify"})}),e.jsx(G,{})]})}export{ke as default};