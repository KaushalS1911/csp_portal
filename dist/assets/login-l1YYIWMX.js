import{u as b,a as f,r as y,b as C,P as w,j as r,C as P,B as p,l as F,f as S,S as R,T as v,L,R as q,p as _,H as T}from"./index-ylP9gOtX.js";import{c as B,a as s,b as H}from"./index.esm-zJIoddKN.js";import{u as M,F as D}from"./form-provider-BePwGsaR.js";import{Q as k}from"./react-toastify.esm-hW4jB9tT.js";import"./registration-page-view-hiETVeZS.js";import{o as E}from"./yup-mXr7br9k.js";import{R as a,b as G,c as N}from"./rhf-autocomplete-Oo_pj7FO.js";import{C as A}from"./Card-ecWVyrcr.js";import{C as I}from"./CardContent-KNMCihay.js";import{G as e}from"./Grid-VhfnNElr.js";import"./upload-avatar-p1mV0K83.js";import"./format-number-4qjwv98Z.js";import"./fade-LdTa7QD2.js";import"./file-thumbnail-v_vpdjZu.js";import"./index-aia48TT4.js";import"./image-Z_eQ9U-t.js";import"./TextField-nL73yr2I.js";import"./FormControl-2yV5rP3p.js";import"./isMuiElement-SI_eKqaz.js";import"./InputLabel-RKiYc6q9.js";import"./FormLabel-cbNQzjey.js";import"./Select-_rMe5vL_.js";import"./index-q81m-9gd.js";import"./Menu-Tm01f5kQ.js";import"./Checkbox-48k92ct7.js";import"./SwitchBase-iPcMGdah.js";import"./Chip-bKHDEzge.js";import"./FormControlLabel-Wp3NQ8oe.js";import"./FormGroup-H6gerepD.js";import"./Switch-PMXVVRTC.js";import"./editor-aS2o8UAE.js";import"./highlight-kZx-LDNs.js";import"./Slider-MYejY6Ng.js";import"./visuallyHidden-DVicuktI.js";import"./RadioGroup-NRE0RhDH.js";import"./Autocomplete-dTg6AscC.js";import"./Close-TBHe2aFb.js";function V(){const{login:o}=b(),c=f(),[$,l]=y.useState(""),u=C().get("returnTo"),x=B().shape({phone_number:s().required("Phone number is required"),password:s().required("Password is required"),confirmPassword:s().oneOf([H("password"),null],"Passwords must match").required("Confirm password is required"),category:s().required("Vendor category is required")}),d={phone_number:"",password:"",confirmPassword:"",category:""},n=M({resolver:E(x),defaultValues:d}),{reset:h,control:W,register:z,handleSubmit:j,formState:{isSubmitting:J}}=n,g=j(async i=>{const m={phone_number:i.phone_number,password:i.password,category:i.category};try{await(o==null?void 0:o(m)),c.push(u||w)}catch(t){console.error(t),h(),l(typeof t=="string"?t:t.message)}console.log("Data : ",m)});return r.jsx(r.Fragment,{children:r.jsxs(P,{maxWidth:"sm",children:[r.jsx(k,{}),r.jsx(p,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:r.jsx(A,{sx:{mt:5},children:r.jsxs(I,{sx:{pb:"70px !important",pt:"50px !important",px:"30px"},children:[r.jsx(p,{display:"flex",justifyContent:"center",mb:3,sx:{height:"130px",mb:"60px"},children:r.jsx("img",{src:F,alt:"BootstrapBrain Logo"})}),r.jsx(D,{onSubmit:g,methods:n,children:r.jsxs(e,{container:!0,spacing:2,children:[r.jsx(e,{item:!0,xs:12,children:r.jsx(a,{name:"phone_number",label:"Phone Number"})}),r.jsx(e,{item:!0,xs:12,sx:{my:"10px"},children:r.jsx(a,{name:"password",label:"Password"})}),r.jsx(e,{item:!0,xs:12,sx:{my:"10px"},children:r.jsx(a,{name:"confirmPassword",label:"Conform Password"})}),r.jsx(e,{item:!0,xs:12,children:r.jsx(G,{name:"category",row:!0,options:[{label:"Miller",value:"Miller"},{label:"Distributor",value:"Distributor"},{label:"Miller & Distributor",value:"Miller & Distributor"}]})}),r.jsx(e,{item:!0,xs:12,children:r.jsx(N,{name:"remember_me",label:"Keep me logged in"})}),r.jsx(e,{item:!0,xs:12,children:r.jsx(S,{variant:"contained",size:"large",color:"primary",fullWidth:!0,type:"submit",children:"Sign In"})}),r.jsx(e,{item:!0,xs:12,children:r.jsxs(R,{direction:"row",sx:{mt:2,justifyContent:"center"},spacing:1,children:[r.jsx(v,{variant:"subtitle2",children:"Become NCCF CSP?"}),r.jsx(L,{component:q,href:_.auth.jwt.register,variant:"subtitle2",children:"Create an account"})]})})]})})]})})})]})})}function Tr(){return r.jsxs(r.Fragment,{children:[r.jsx(T,{children:r.jsx("title",{children:" NCCF CSP Portal: Login"})}),r.jsx(V,{})]})}export{Tr as default};