import{j as e,y as i,S,T as m,s as b,B as c,$ as B,W as D,d as O,w as v,e as P,k as N,t as w,M as V,n as y,f as X,r as G,X as Z,L as q,p as J,C as K,eF as f,H as Q}from"./index-cs8KH1Gj.js";import{C as Y}from"./custom-breadcrumbs-xf4gSwnQ.js";import{C as ee}from"./component-hero-dZ0JuJQy.js";import{I as j}from"./image--etRdOrW.js";import{u as d,a as x,b as g,c as re,C as T}from"./carousel-arrow-index-SpPRRttl.js";import{C as a}from"./Card-M8rezznV.js";import{C as l}from"./CardContent-V2Xejzlg.js";import{v as I}from"./fade-YsdWEJJe.js";import{T as te}from"./text-max-line-rVnCVCHH.js";import{C as u}from"./CardHeader-QV_NYi3u.js";import"./index-q81m-9gd.js";function k({data:t}){const r=d({autoplay:!0});return e.jsxs(a,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(j,{alt:s.title,src:s.coverUrl,ratio:"1/1"},s.id))}),e.jsx(g,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev})]})}k.propTypes={data:i.array};function R({data:t}){const r=d({fade:!0,autoplay:!0,initialSlide:2});return e.jsxs(a,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsxs(S,{children:[e.jsx(j,{alt:s.title,src:s.coverUrl,ratio:"4/3"}),e.jsxs(l,{sx:{textAlign:"left"},children:[e.jsx(m,{variant:"h6",noWrap:!0,gutterBottom:!0,children:s.title}),e.jsx(m,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:s.description})]})]},s.id))}),e.jsx(g,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev,sx:{bottom:120}})]})}R.propTypes={data:i.array};function $({data:t}){const r=b(),s=d({autoplay:!0,...re({rounded:!0,sx:{mt:3}})});return e.jsx(c,{sx:{position:"relative","& .slick-list":{borderRadius:2,boxShadow:r.customShadows.z16}},children:e.jsx(T,{filled:!0,shape:"rounded",onNext:s.onNext,onPrev:s.onPrev,children:e.jsx(x,{ref:s.carouselRef,...s.carouselSettings,children:t.map(o=>e.jsx(M,{item:o},o.id))})})})}$.propTypes={data:i.array};function M({item:t}){const{coverUrl:r,title:s}=t;return e.jsx(j,{alt:s,src:r,ratio:"1/1"})}M.propTypes={item:i.object};const se=B("div")(({theme:t})=>({...D({color:t.palette.grey[900]}),bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:t.spacing(3),borderBottomLeftRadius:16,borderBottomRightRadius:16,justifyContent:"space-between",flexDirection:t.direction==="rtl"?"row-reverse":"row"}));function U({data:t}){const r=d({autoplay:!0,fade:!0});return e.jsx(a,{children:e.jsx(T,{filled:!0,shape:"rounded",onNext:r.onNext,onPrev:r.onPrev,children:e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(W,{item:s},s.id))})})})}U.propTypes={data:i.array};function W({item:t}){const{coverUrl:r,title:s}=t;return e.jsxs(c,{sx:{position:"relative",zIndex:0},children:[e.jsx(j,{alt:s,src:r,ratio:"1/1"}),e.jsxs(se,{children:[e.jsx(m,{variant:"h6",sx:{color:"common.white"},children:t.title}),e.jsx(O,{onClick:()=>{},sx:{color:"common.white","&:hover":{bgcolor:o=>v(o.palette.common.white,o.palette.action.hoverOpacity)}},children:e.jsx(P,{icon:"eva:more-horizontal-fill"})})]})]})}W.propTypes={item:i.object};function A({data:t}){const r=d({speed:800,autoplay:!0});return e.jsxs(a,{children:[e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map((s,o)=>e.jsx(L,{item:s,active:o===r.currentIndex},s.id))}),e.jsx(g,{index:r.currentIndex,total:t.length,onNext:r.onNext,onPrev:r.onPrev})]})}A.propTypes={data:i.array};function L({item:t,active:r}){const s=b(),{coverUrl:o,title:C}=t,n=s.direction==="rtl"?I().inLeft:I().inRight;return e.jsxs(N,{sx:{position:"relative"},children:[e.jsx(j,{dir:"ltr",alt:C,src:o,ratio:"16/9"}),e.jsx(c,{sx:{top:0,width:1,height:1,position:"absolute",...w({direction:"to top",startColor:`${s.palette.grey[900]} 0%`,endColor:`${v(s.palette.grey[900],0)} 100%`})}}),e.jsxs(l,{component:V,animate:r,action:!0,sx:{left:0,bottom:0,maxWidth:720,textAlign:"left",position:"absolute",color:"common.white"},children:[e.jsx(y.div,{variants:n,children:e.jsx(m,{variant:"h3",gutterBottom:!0,children:t.title})}),e.jsx(y.div,{variants:n,children:e.jsx(m,{variant:"body2",noWrap:!0,gutterBottom:!0,children:t.description})}),e.jsx(y.div,{variants:n,children:e.jsx(X,{variant:"contained",sx:{mt:3},children:"View More"})})]})]})}L.propTypes={active:i.bool,item:i.object};const h=64,oe=B("div")(({length:t,theme:r})=>({position:"relative",margin:r.spacing(0,"auto"),"& .slick-slide":{lineHeight:0},...t===1&&{maxWidth:h*1+16},...t===2&&{maxWidth:h*2+32},...(t===3||t===4)&&{maxWidth:h*3+48},...t>=5&&{maxWidth:h*6},...t>3&&{"&:before, &:after":{...w({direction:"to left",startColor:`${v(r.palette.background.default,0)} 0%`,endColor:`${r.palette.background.default} 100%`}),top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:h*2/3},"&:after":{right:0,transform:"scaleX(-1)"}}}));function H({data:t}){const r=d({rtl:!1,draggable:!1,adaptiveHeight:!0}),s=d({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:t.length>3?3:t.length});G.useEffect(()=>{r.onSetNav(),s.onSetNav()},[r,s]);const o=e.jsxs(c,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(x,{...r.carouselSettings,asNavFor:s.nav,ref:r.carouselRef,children:t.map(n=>e.jsx(j,{alt:n.title,src:n.coverUrl,ratio:"16/9"},n.id))}),e.jsx(g,{index:r.currentIndex,total:t.length,onNext:s.onNext,onPrev:s.onPrev})]}),C=e.jsx(oe,{length:t.length,children:e.jsx(x,{...s.carouselSettings,asNavFor:r.nav,ref:s.carouselRef,children:t.map((n,E)=>e.jsx(c,{sx:{px:.5},children:e.jsx(Z,{variant:"rounded",alt:n.title,src:n.coverUrl,sx:{width:h,height:h,opacity:.48,cursor:"pointer",...r.currentIndex===E&&{opacity:1,border:_=>`solid 2.5px ${_.palette.primary.main}`}}})},n.id))})});return e.jsxs(c,{sx:{"& .slick-slide":{float:n=>n.direction==="rtl"?"right":"left"}},children:[o,C]})}H.propTypes={data:i.array};function z({data:t}){const r=d({slidesToShow:3,centerMode:!0,centerPadding:"60px",responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]});return e.jsx(c,{sx:{overflow:"hidden",position:"relative"},children:e.jsx(T,{filled:!0,icon:"noto:rightwards-hand",onNext:r.onNext,onPrev:r.onPrev,children:e.jsx(x,{ref:r.carouselRef,...r.carouselSettings,children:t.map(s=>e.jsx(c,{sx:{px:1},children:e.jsx(F,{item:s})},s.id))})})})}z.propTypes={data:i.array};function F({item:t}){const r=b(),{coverUrl:s,title:o}=t;return e.jsxs(N,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[e.jsx(j,{alt:o,src:s,ratio:"3/4"}),e.jsxs(l,{sx:{bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white",...w({direction:"to top",startColor:`${r.palette.grey[900]} 25%`,endColor:`${v(r.palette.grey[900],0)} 100%`})},children:[e.jsx(te,{variant:"h4",sx:{mb:2},children:o}),e.jsxs(q,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:r.transitions.create(["opacity"]),"&:hover":{opacity:1}},children:["learn More",e.jsx(P,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})]})]})}F.propTypes={item:i.object};const p=[...Array(20)].map((t,r)=>({id:f.id(r),title:f.postTitle(r),coverUrl:f.image.cover(r),description:f.description(r)}));function ne(){return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:e.jsx(Y,{heading:"Carousel",links:[{name:"Components",href:J.components},{name:"Carousel"}],moreLink:["https://react-slick.neostack.com"]})}),e.jsxs(K,{sx:{my:10},children:[e.jsxs(c,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3,alignItems:"flex-start"},children:[e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Basic 1"}),e.jsx(l,{children:e.jsx(k,{data:p.slice(0,4)})})]}),e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Basic 2"}),e.jsx(l,{children:e.jsx(R,{data:p.slice(4,8)})})]}),e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Basic 3"}),e.jsx(l,{children:e.jsx($,{data:p.slice(8,12)})})]}),e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Basic 4"}),e.jsx(l,{children:e.jsx(U,{data:p.slice(12,16)})})]})]}),e.jsxs(S,{spacing:3,children:[e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Thumbnail"}),e.jsx(l,{children:e.jsx(H,{data:p.slice(0,8)})})]}),e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Center Mode",subheader:"Customs shape & icon button"}),e.jsx(l,{children:e.jsx(z,{data:p.slice(8,16)})})]}),e.jsxs(a,{children:[e.jsx(u,{title:"Carousel Animation"}),e.jsx(l,{children:e.jsx(A,{data:p.slice(12,16)})})]})]})]})]})}function fe(){return e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:e.jsx("title",{children:" Components: Carousel"})}),e.jsx(ne,{})]})}export{fe as default};