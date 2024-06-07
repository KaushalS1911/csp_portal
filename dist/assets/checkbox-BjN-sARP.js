import{r as u,j as e,p as j,C,e as l,H as f}from"./index-ylP9gOtX.js";import{C as p}from"./custom-breadcrumbs-nwVkFrxi.js";import{C as b}from"./component-hero-gSQgmVuD.js";import{C as i}from"./component-block-f1uZt_qe.js";import{M as k}from"./Masonry-48IVTIg4.js";import{C as t}from"./Checkbox-48k92ct7.js";import{F as r}from"./FormControlLabel-Wp3NQ8oe.js";import{F as c}from"./FormControl-2yV5rP3p.js";import{F as a}from"./FormGroup-H6gerepD.js";import"./index-q81m-9gd.js";import"./CardHeader-VpZWNMY4.js";import"./SwitchBase-iPcMGdah.js";import"./isMuiElement-SI_eKqaz.js";const d=["default","primary","secondary","info","success","warning","error"],z=["top","start","bottom","end"];function g(){const[o,n]=u.useState([!0,!1]),m=s=>{n([s.target.checked,s.target.checked])},x=s=>{n([s.target.checked,o[1]])},h=s=>{n([o[0],s.target.checked])};return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx(p,{heading:"Checkboxes",links:[{name:"Components",href:j.components},{name:"Checkboxes"}],moreLink:["https://mui.com/components/checkboxes"]})}),e.jsx(C,{sx:{my:10},children:e.jsxs(k,{columns:{xs:1,md:2},spacing:3,children:[e.jsxs(i,{title:"Basic",children:[e.jsx(t,{size:"medium"}),e.jsx(t,{size:"medium",defaultChecked:!0}),e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0}),e.jsx(t,{size:"medium",disabled:!0}),e.jsx(t,{size:"medium",disabled:!0,defaultChecked:!0}),e.jsx(t,{size:"medium",disabled:!0,indeterminate:!0})]}),e.jsxs(i,{title:"Size & Custom Icon",children:[e.jsx(r,{label:"Normal",control:e.jsx(t,{size:"medium",defaultChecked:!0})}),e.jsx(r,{label:"Small",control:e.jsx(t,{size:"small",defaultChecked:!0})}),e.jsx(r,{control:e.jsx(t,{color:"info",size:"small",icon:e.jsx(l,{icon:"solar:heart-bold"}),checkedIcon:e.jsx(l,{icon:"solar:heart-bold"})}),label:"Custom icon"}),e.jsx(r,{control:e.jsx(t,{color:"error",size:"small",icon:e.jsx(l,{icon:"eva:award-fill"}),checkedIcon:e.jsx(l,{icon:"eva:award-fill"})}),label:"Custom icon"})]}),e.jsx(i,{title:"Placement",children:e.jsx(c,{component:"fieldset",children:e.jsx(a,{"aria-label":"position",row:!0,children:z.map(s=>e.jsx(r,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})}),e.jsxs(i,{title:"Colors",children:[e.jsxs(a,{children:[d.map(s=>e.jsx(r,{control:e.jsx(t,{size:"medium",defaultChecked:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(r,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,color:"error"}),label:"Disabled"})]}),e.jsx(c,{component:"fieldset",children:e.jsxs(a,{children:[d.map(s=>e.jsx(r,{control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(r,{disabled:!0,control:e.jsx(t,{size:"medium",defaultChecked:!0,indeterminate:!0,color:"error"}),label:"Disabled"})]})})]}),e.jsx(i,{title:"Indeterminate",children:e.jsxs("div",{children:[e.jsx(r,{label:"Parent",control:e.jsx(t,{size:"medium",checked:o[0]&&o[1],indeterminate:o[0]!==o[1],onChange:m})}),e.jsxs("div",{children:[e.jsx(r,{label:"Child 1",control:e.jsx(t,{size:"medium",checked:o[0],onChange:x})}),e.jsx(r,{label:"Child 2",control:e.jsx(t,{size:"medium",checked:o[1],onChange:h})})]})]})})]})})]})}function D(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:e.jsx("title",{children:" MUI: Checkbox"})}),e.jsx(g,{})]})}export{D as default};