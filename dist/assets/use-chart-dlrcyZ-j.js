import{s,A as l,w as n,dc as p}from"./index-cs8KH1Gj.js";function h(a){const e=s(),r=l("up","sm"),t={show:!0,label:"Total",color:e.palette.text.secondary,fontSize:e.typography.subtitle2.fontSize,fontWeight:e.typography.subtitle2.fontWeight,lineHeight:e.typography.subtitle2.lineHeight},o={offsetY:8,color:e.palette.text.primary,fontSize:e.typography.h3.fontSize,fontWeight:e.typography.h3.fontWeight,lineHeight:e.typography.h3.lineHeight},i={colors:[e.palette.primary.main,e.palette.warning.main,e.palette.info.main,e.palette.error.main,e.palette.success.main,e.palette.warning.dark,e.palette.success.darker,e.palette.info.dark,e.palette.info.darker],chart:{toolbar:{show:!1},zoom:{enabled:!1},foreColor:e.palette.text.disabled,fontFamily:e.typography.fontFamily},states:{hover:{filter:{type:"lighten",value:.04}},active:{filter:{type:"darken",value:.88}}},fill:{opacity:1,gradient:{type:"vertical",shadeIntensity:0,opacityFrom:.4,opacityTo:0,stops:[0,100]}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},grid:{strokeDashArray:3,borderColor:e.palette.divider,xaxis:{lines:{show:!1}}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1}},markers:{size:0,strokeColors:e.palette.background.paper},tooltip:{theme:!1,x:{show:!0}},legend:{show:!0,fontSize:13,position:"top",horizontalAlign:"right",markers:{radius:12},fontWeight:500,itemMargin:{horizontal:8},labels:{colors:e.palette.text.primary}},plotOptions:{bar:{borderRadius:r?3:1,columnWidth:"28%",borderRadiusApplication:"end",borderRadiusWhenStacked:"last"},pie:{donut:{labels:{show:!0,value:o,total:t}}},radialBar:{track:{strokeWidth:"100%",background:n(e.palette.grey[500],.16)},dataLabels:{value:o,total:t}},radar:{polygons:{fill:{colors:["transparent"]},strokeColors:e.palette.divider,connectorColors:e.palette.divider}},polarArea:{rings:{strokeColor:e.palette.divider},spokes:{connectorColors:e.palette.divider}}},responsive:[{breakpoint:e.breakpoints.values.sm,options:{plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:e.breakpoints.values.md,options:{plotOptions:{bar:{columnWidth:"32%"}}}}]};return p(i,a)}export{h as u};
