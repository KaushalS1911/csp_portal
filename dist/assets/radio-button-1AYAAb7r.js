import{r as d,j as e,p as u,C as c,H as x}from"./index-cs8KH1Gj.js";import{C as j}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as p}from"./component-hero-dZ0JuJQy.js";import{C as r}from"./component-block-eWblxNY5.js";import{M as h}from"./Masonry-nmMLxsdh.js";import{F as i}from"./FormControl-aSSJzqHf.js";import{R as a,a as t}from"./RadioGroup-fWybfjqF.js";import{F as o}from"./FormControlLabel-MUxj2wHe.js";import"./index-q81m-9gd.js";import"./CardHeader-QV_NYi3u.js";import"./isMuiElement-MbnxLTZm.js";import"./SwitchBase-PZN8fx1f.js";import"./FormGroup-nEfyDjbV.js";const f=["default","primary","secondary","info","success","warning","error"],C=["top","start","bottom","end"];function b(){const[n,l]=d.useState("a1"),m=s=>{l(s.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx(j,{heading:"Radio Buttons",links:[{name:"Components",href:u.components},{name:"Radio Buttons"}],moreLink:["https://mui.com/components/radio-buttons"]})}),e.jsx(c,{sx:{my:10},children:e.jsxs(h,{columns:{xs:1,md:2},spacing:3,children:[e.jsx(r,{title:"Basic",children:e.jsx(i,{component:"fieldset",children:e.jsxs(a,{row:!0,defaultValue:"nn",children:[e.jsx(t,{size:"medium",value:"nn"}),e.jsx(t,{size:"medium",value:"gg"}),e.jsx(t,{size:"medium",disabled:!0,value:"hh"})]})})}),e.jsx(r,{title:"Sizes",children:e.jsxs(a,{row:!0,defaultValue:"g",children:[e.jsx(o,{value:"g",control:e.jsx(t,{size:"medium"}),label:"Normal"}),e.jsx(o,{value:"p",control:e.jsx(t,{size:"small"}),label:"Small"})]})}),e.jsx(r,{title:"Placement",children:e.jsx(i,{component:"fieldset",children:e.jsx(a,{row:!0,defaultValue:"top",children:C.map(s=>e.jsx(o,{value:s,label:s,labelPlacement:s,control:e.jsx(t,{size:"medium"}),sx:{textTransform:"capitalize"}},s))})})}),e.jsx(r,{title:"Colors",children:e.jsx(i,{component:"fieldset",children:e.jsxs(a,{value:n,onChange:m,children:[f.map(s=>e.jsx(o,{value:s,control:e.jsx(t,{size:"medium",color:s}),label:s,sx:{textTransform:"capitalize"}},s)),e.jsx(o,{disabled:!0,value:"a8",control:e.jsx(t,{size:"medium",color:"error"}),label:"Disabled"})]})})})]})})]})}function P(){return e.jsxs(e.Fragment,{children:[e.jsx(x,{children:e.jsx("title",{children:" MUI: Radio Button"})}),e.jsx(b,{})]})}export{P as default};
