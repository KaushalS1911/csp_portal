import{ax as p,aw as w,$ as x,al as e,r as f,an as F,ao as G,ay as d,az as C,j as y,ap as R,aq as j}from"./index-cs8KH1Gj.js";function M(o){return p("MuiFormGroup",o)}w("MuiFormGroup",["root","row","error"]);const U=["className","row"],g=o=>{const{classes:r,row:t,error:s}=o;return j({root:["root",t&&"row",s&&"error"]},M,r)},h=x("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(o,r)=>{const{ownerState:t}=o;return[r.root,t.row&&r.row]}})(({ownerState:o})=>e({display:"flex",flexDirection:"column",flexWrap:"wrap"},o.row&&{flexDirection:"row"})),v=f.forwardRef(function(r,t){const s=F({props:r,name:"MuiFormGroup"}),{className:a,row:l=!1}=s,c=G(s,U),u=d(),i=C({props:s,muiFormControl:u,states:["error"]}),n=e({},s,{row:l,error:i.error}),m=g(n);return y.jsx(h,e({className:R(m.root,a),ownerState:n,ref:t},c))}),S=v;export{S as F};
