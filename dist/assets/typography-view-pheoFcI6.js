import{s as C,r as w,j as e,p as g,C as b,S as d,T as a,k as u,$ as L,cg as G,B as p,w as v,eL as H,y as m}from"./index-cs8KH1Gj.js";import{C as j}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as y}from"./component-hero-dZ0JuJQy.js";import{C as x}from"./component-block-eWblxNY5.js";import{G as c}from"./Grid2-0IK39fyY.js";import{R as T,a as z}from"./RadioGroup-fWybfjqF.js";import{F as k}from"./FormControlLabel-MUxj2wHe.js";import{u as $}from"./use-copy-to-clipboard-XBF5EyyD.js";import{u as E}from"./text-max-line-rVnCVCHH.js";const F=["1col","2col","3col","4col","6col","12col"],q=L(u)(({theme:t})=>({padding:t.spacing(5),border:`solid 1px ${t.palette.divider}`,borderRadius:t.shape.borderRadius*1.5,backgroundColor:t.palette.grey[t.palette.mode==="light"?100:800]}));function U(){const t=C(),[r,l]=w.useState(2),[i,s]=w.useState(3),o=n=>{l(Number(n.target.value))},S=n=>{s(Number(n.target.value))};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(j,{heading:"Grid",links:[{name:"Components",href:g.components},{name:"Grid"}]})}),e.jsx(b,{sx:{my:10},children:e.jsxs(d,{spacing:5,children:[e.jsx(x,{title:"Spacing",children:e.jsxs(q,{variant:"outlined",children:[e.jsxs(a,{variant:"body2",sx:{mb:3,textAlign:"center"},children:["Spacing: ",e.jsx("strong",{children:t.spacing(Number(r))})]}),e.jsx(c,{container:!0,spacing:r,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(c,{xs:1,children:e.jsx(u,{sx:{height:80,boxShadow:t.customShadows.z8}})},n))}),e.jsx(T,{row:!0,name:"spacing",value:r.toString(),onChange:o,sx:{mt:3,display:"flex",justifyContent:"center"},children:[0,1,2,3,4,5,6,7,8,9,10].map(n=>e.jsx(k,{value:n.toString(),label:n.toString(),control:e.jsx(z,{})},n))})]})}),e.jsx(x,{title:"Column",children:e.jsxs(q,{variant:"outlined",children:[e.jsx(c,{container:!0,spacing:3,children:[0,1,2,3,4,5,6,7,8,9,10,11].map(n=>e.jsx(c,{xs:i,children:e.jsxs(u,{sx:{py:3,textAlign:"center",boxShadow:t.customShadows.z8},children:["xs = ",i]})},n))}),e.jsx(T,{row:!0,name:"column",value:i.toString(),onChange:S,sx:{mt:3,display:"flex",justifyContent:"center"},children:[12,6,4,3,2,1].map((n,B)=>e.jsx(k,{value:n.toString(),label:F[B],control:e.jsx(z,{})},n))})]})})]})})]})}const A=["primary","secondary","info","success","warning","error"],P=["lighter","light","main","dark","darker"],V=["100","200","300","400","500","600","700","800","900"];function X(){const t=C(),{enqueueSnackbar:r}=G(),{copy:l}=$(),i=s=>{s&&(r(`Copied! ${s}`),l(s))};return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(j,{heading:"Color",links:[{name:"Components",href:g.components},{name:"Color"}],moreLink:["https://mui.com/customization/color","https://colors.eva.design"]})}),e.jsx(b,{sx:{my:10},children:e.jsxs(p,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)",md:"repeat(3, 1fr)"},children:[A.map(s=>e.jsxs(d,{sx:{borderRadius:1,overflow:"hidden",boxShadow:t.customShadows.card},children:[e.jsx(a,{variant:"h5",sx:{textTransform:"capitalize",p:2.5,pb:0},children:s}),e.jsx(d,{spacing:1,sx:{p:2.5},children:P.map(o=>e.jsx(f,{variation:o,hexColor:t.palette[s][o],onCopy:()=>i(t.palette[s][o])},o))})]},s)),e.jsxs(d,{sx:{borderRadius:1,overflow:"hidden",boxShadow:t.customShadows.card},children:[e.jsx(a,{variant:"h5",sx:{textTransform:"capitalize",p:2.5,pb:0},children:"Grey"}),e.jsx(d,{spacing:1,sx:{p:2.5},children:V.map(s=>e.jsx(f,{variation:s,hexColor:t.palette.grey[s],onCopy:()=>i(t.palette.grey[s])},s))})]})]})})]})}function f({hexColor:t,variation:r,onCopy:l}){return e.jsxs(d,{spacing:1,onClick:l,sx:{px:2,py:1.5,borderRadius:1,cursor:"pointer",overflow:"hidden",position:"relative",bgcolor:t,color:i=>i.palette.getContrastText(t),border:i=>`solid 1px ${v(i.palette.grey[500],.08)}`,transition:i=>i.transitions.create(["background-color"],{duration:i.transitions.duration.shorter}),"&:hover":{bgcolor:v(t,.8)}},children:[e.jsx(a,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:r}),e.jsxs(p,{gap:2.5,display:"grid",gridTemplateColumns:"repeat(2, 1fr)",sx:{typography:"caption"},children:[e.jsxs(p,{children:[e.jsx(p,{component:"span",children:"Hex "}),t]}),e.jsxs(p,{children:[e.jsx(p,{component:"span",children:"Rgb "}),H(t).replace("rgb(","").replace(")","")]})]})]})}f.propTypes={onCopy:m.func,hexColor:m.string,variation:m.string};function Z(){const t=C(),r=t.shadows.slice(1,t.shadows.length),l=[["z1",t.customShadows.z1],["z4",t.customShadows.z4],["z8",t.customShadows.z8],["z12",t.customShadows.z12],["z16",t.customShadows.z16],["z20",t.customShadows.z20],["z24",t.customShadows.z24],["card",t.customShadows.card],["dropdown",t.customShadows.dropdown],["dialog",t.customShadows.dialog]],i=["primary","secondary","info","success","warning","error"];return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(j,{heading:"Shadows",links:[{name:"Components",href:g.components},{name:"Shadows"}]})}),e.jsx(b,{sx:{my:10},children:e.jsxs(d,{spacing:5,children:[e.jsx(x,{title:"System",children:r.map((s,o)=>e.jsx(h,{title:`z${o+1}`,sx:{boxShadow:s}},s))}),e.jsx(x,{title:"Customs",children:l.map(s=>e.jsx(h,{title:s[0],sx:{boxShadow:s[1]}},s[0]))}),e.jsx(x,{title:"Colors",children:i.map(s=>e.jsx(h,{title:s,sx:{color:t.palette[s].contrastText,bgcolor:t.palette[s].main,boxShadow:t.customShadows[s]}},s))})]})})]})}function h({sx:t,title:r}){return e.jsx(u,{sx:{padding:3,margin:1.5,display:"flex",alignItems:"center",justifyContent:"center",width:{xs:"calc((100%/2) - 24px)",sm:"calc((100%/4) - 24px)",md:"calc((100%/6) - 24px)"},...t},children:e.jsx(a,{variant:"subtitle2",sx:{textTransform:"capitalize"},children:r})})}h.propTypes={sx:m.object,title:m.string};const N=[{label:"h1. Heading",variant:"h1"},{label:"h2. Heading",variant:"h2"},{label:"h3. Heading",variant:"h3"},{label:"h4. Heading",variant:"h4"},{label:"h5. Heading",variant:"h5"},{label:"h6. Heading",variant:"h6"},{label:"subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle1"},{label:"subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",variant:"subtitle2"},{label:"body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body1"},{label:"body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",variant:"body2"},{label:"caption text",variant:"caption"},{label:"overline text",variant:"overline"},{label:"Button",variant:"button"}];function _(){return e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(j,{heading:"Typography",links:[{name:"Components",href:g.components},{name:"Typography"}],moreLink:["https://mui.com/components/typography"]})}),e.jsx(b,{sx:{my:10},children:e.jsxs(c,{container:!0,rowSpacing:5,children:[e.jsx(c,{xs:12,md:3,children:e.jsx(a,{variant:"h6",children:"Default Text"})}),e.jsx(c,{xs:12,md:9,children:e.jsx(d,{spacing:3,children:N.map(t=>e.jsx(R,{font:t},t.variant))})}),e.jsx(c,{xs:12,md:3,children:e.jsx(a,{variant:"h6",children:"Colors Text"})}),e.jsx(c,{xs:12,md:9,children:e.jsxs(d,{spacing:3,children:[["primary","secondary","disabled"].map(t=>e.jsxs(u,{variant:"outlined",sx:{p:3,borderRadius:1},children:[e.jsxs(a,{gutterBottom:!0,variant:"subtitle1",sx:{color:`text.${t}`},children:["text ",t]}),e.jsx(a,{gutterBottom:!0,variant:"body2",sx:{color:`text.${t}`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},t)),["primary","secondary","info","warning","error"].map(t=>e.jsxs(u,{variant:"outlined",sx:{p:3,borderRadius:1},children:[e.jsx(a,{gutterBottom:!0,variant:"subtitle1",sx:{color:`${t}.main`},children:t}),e.jsx(a,{gutterBottom:!0,variant:"body2",sx:{color:`${t}.main`},children:"Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus."})]},t))]})})]})})]})}function R({font:t}){const{variant:r,label:l}=t,{fontSize:i,lineHeight:s,fontWeight:o,letterSpacing:S=0}=E(r);return e.jsxs(u,{variant:"outlined",sx:{p:3,borderRadius:1},children:[e.jsx(a,{variant:r,gutterBottom:!0,children:l}),e.jsxs(a,{variant:"body2",sx:{color:"text.secondary"},children:["size: ",i," / l-height: ",s," / weight:",o," / letterSpacing: ",S]})]})}R.propTypes={font:m.object};export{X as C,U as G,Z as S,_ as T};
