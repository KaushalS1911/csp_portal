import{r as a}from"./index-cs8KH1Gj.js";function c(){const[t,r]=a.useState(null);return{copiedText:t,copy:async o=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),r(o),!0}catch(e){return console.warn("Copy failed",e),r(null),!1}}}}export{c as u};
