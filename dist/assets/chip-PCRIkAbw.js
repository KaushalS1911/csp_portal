import{j as e,S as o,k as c,X as a,eF as m,e as s,T as h,y as p,p as b,C as u,B as g,H as C}from"./index-cs8KH1Gj.js";import{C as y}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as k}from"./component-hero-dZ0JuJQy.js";import{C as i}from"./Chip-y3BMGgXZ.js";import{C as d}from"./Card-M8rezznV.js";import{C as x}from"./CardHeader-QV_NYi3u.js";import{C as j}from"./CardContent-V2Xejzlg.js";import"./index-q81m-9gd.js";function r({variant:l="filled"}){const n=()=>{console.info("You clicked the delete icon.")},t=f=>e.jsx(h,{variant:"overline",component:"div",sx:{color:"text.secondary",mb:1},children:f});return e.jsxs(o,{spacing:3,children:[e.jsxs(o,{spacing:1,flexWrap:"wrap",component:c,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,label:"Default deletable",avatar:e.jsx(a,{children:"M"}),onDelete:n}),e.jsx(i,{variant:l,clickable:!0,label:"Default clickable",avatar:e.jsx(a,{children:"M"})}),e.jsx(i,{variant:l,label:"Primary deletable",avatar:e.jsx(a,{alt:"Natacha",src:m.image.avatar(1)}),color:"primary",onDelete:n}),e.jsx(i,{variant:l,clickable:!0,label:"Primary clickable",avatar:e.jsx(a,{alt:"Natacha",src:m.image.avatar(1)}),color:"primary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary deletable",onDelete:n,color:"secondary"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Secondary clickable",color:"secondary"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info deletable",onDelete:n,color:"info"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Info clickable",color:"info"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success deletable",onDelete:n,color:"success"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Success clickable",color:"success"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning deletable",onDelete:n,color:"warning"}),e.jsx(i,{variant:l,clickable:!0,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Warning clickable",color:"warning"}),e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error deletable",onDelete:n,color:"error"}),e.jsx(i,{clickable:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Error clickable",color:"error"})]}),e.jsxs("div",{children:[t("Custom icon"),e.jsxs(o,{spacing:1,flexWrap:"wrap",component:c,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Custom icon",onDelete:n,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"})}),e.jsx(i,{variant:l,avatar:e.jsx(a,{children:"M"}),label:"Custom icon",onDelete:n,deleteIcon:e.jsx(s,{width:24,icon:"eva:checkmark-fill"}),color:"info"})]})]}),e.jsxs("div",{children:[t("Disabled"),e.jsxs(o,{spacing:1,flexWrap:"wrap",component:c,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{disabled:!0,variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Disabled",onDelete:n}),e.jsx(i,{disabled:!0,variant:l,avatar:e.jsx(a,{children:"M"}),label:"Disabled",onDelete:n,color:"info"})]})]}),e.jsxs("div",{children:[t("Sizes"),e.jsxs(o,{spacing:1,flexWrap:"wrap",component:c,variant:"outlined",alignItems:"center",justifyContent:"center",sx:{p:5,borderStyle:"dashed"},children:[e.jsx(i,{variant:l,icon:e.jsx(s,{width:24,icon:"eva:smiling-face-fill"}),label:"Normal",onDelete:n,color:"info"}),e.jsx(i,{variant:l,size:"small",avatar:e.jsx(a,{children:"M"}),label:"Small",onDelete:n,color:"info"})]})]})]})}r.propTypes={variant:p.string};function w(){return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(y,{heading:"Chip",links:[{name:"Components",href:b.components},{name:"Chip"}],moreLink:["https://mui.com/components/chips"]})}),e.jsx(u,{sx:{my:10},children:e.jsxs(g,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},children:[e.jsxs(d,{children:[e.jsx(x,{title:"Filled"}),e.jsx(j,{children:e.jsx(r,{})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Outlined"}),e.jsx(j,{children:e.jsx(r,{variant:"outlined"})})]}),e.jsxs(d,{children:[e.jsx(x,{title:"Soft"}),e.jsx(j,{children:e.jsx(r,{variant:"soft"})})]})]})})]})}function F(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{children:e.jsx("title",{children:" MUI: Chip"})}),e.jsx(w,{})]})}export{F as default};