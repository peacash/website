import{o as d,c as _,a as e,r as y,F as m,b as x,d as $,w,e as k,t as u,f as r,p as v,g,h as L,i as P,j as E,k as T,V as A}from"./vendor.b570a9ae.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}};B();const O={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},R=e("g",{fill:"none"},[e("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),V=[R];function M(t,n){return d(),_("svg",O,V)}var G={name:"heroicons-outline-external-link",render:M};var f=(t,n)=>{for(const[a,i]of n)t[a]=i;return t};const q={data(){return{open:!1,links:{to:[{text:"Home",to:"/"}],href:[{text:"App",href:"https://app.pea.cash"},{text:"Github",href:"https://github.com/peacash"}]}}}},F={class:"relative select-none z-20"},H={class:"absolute sm:sticky w-full custom-header text-white sm:text-black"},z={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},D={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},W=["href"],Y={class:"mr-2"};function K(t,n,a,i,o,c){const l=y("router-link"),p=G;return d(),_("div",F,[e("header",H,[e("div",z,[e("nav",D,[(d(!0),_(m,null,x(o.links.to,s=>(d(),$(l,{key:s,to:s.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black"},{default:w(()=>[k(u(s.text),1)]),_:2},1032,["to"]))),128)),(d(!0),_(m,null,x(o.links.href,s=>(d(),_("a",{key:s,href:s.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black",rel:"noopener"},[e("span",Y,u(s.text),1),r(p,{class:"h-5 w-5"})],8,W))),128))])])])])}var Q=f(q,[["render",K],["__scopeId","data-v-68a820b0"]]),J="/logo.svg";const U={data(){return{open:!1,links:{to:[{text:"Home",to:"/"}],href:[{text:"Paper",href:"https://github.com/peacash/paper"},{text:"App",href:"https://app.pea.cash"},{text:"Github",href:"https://github.com/peacash"}]}}}},X=t=>(v("data-v-37a1747a"),t=t(),g(),t),Z={class:"pt-20 pb-40 bg-white"},ee={class:"flex justify-center"},te=X(()=>e("div",{class:"w-40 sm:w-80 py-2 px-3 flex"},[e("div",{class:"logo text-2xl sm:text-4xl my-auto"},"PeaCash"),e("img",{class:"w-8 sm:w-12 ml-2",src:J,alt:""})],-1)),se={class:"flex flex-col"},oe={class:"flex flex-col"},re=["href"],ae={class:"mr-2"};function ne(t,n,a,i,o,c){const l=y("router-link"),p=G;return d(),_("footer",Z,[e("div",ee,[te,e("div",se,[(d(!0),_(m,null,x(o.links.to,s=>(d(),$(l,{key:s,to:s.to,class:"w-20 sm:w-40 custom-button rounded-md py-2 px-3 inline-flex items-center"},{default:w(()=>[k(u(s.text),1)]),_:2},1032,["to"]))),128))]),e("div",oe,[(d(!0),_(m,null,x(o.links.href,s=>(d(),_("a",{key:s,href:s.href,class:"w-20 sm:w-40 custom-button rounded-md py-2 px-3 inline-flex items-center",rel:"noopener"},[e("span",ae,u(s.text),1),r(p,{class:"h-5 w-5"})],8,re))),128))])])])}var ie=f(U,[["render",ne],["__scopeId","data-v-37a1747a"]]);const ce={};function le(t,n){const a=Q,i=y("router-view"),o=ie;return d(),_(m,null,[r(a),r(i),r(o)],64)}var de=f(ce,[["render",le]]);const _e="modulepreload",C={},pe="/",N=function(n,a){return!a||a.length===0?n():Promise.all(a.map(i=>{if(i=`${pe}${i}`,i in C)return;C[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":_e,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((p,s)=>{l.addEventListener("load",p),l.addEventListener("error",s)})})).then(()=>n())},ue={},fe={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},me=L('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),he=[me];function xe(t,n){return d(),_("svg",fe,he)}var ve=f(ue,[["render",xe]]),ge="/github.png";const ye={props:{repo:String}},j=t=>(v("data-v-dde8eec2"),t=t(),g(),t),be=["href"],$e={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},we=j(()=>e("img",{class:"absolute w-3 lg:w-5 left-2 top-2 opacity-80",src:ge,alt:""},null,-1)),ke={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},Ge={class:"mx-auto"},Ce=j(()=>e("div",{class:"mx-auto opacity-60"},"peacash",-1));function Ne(t,n,a,i,o,c){return d(),_("a",{class:"relative",href:"https://github.com/peacash/"+a.repo},[e("button",$e,[we,e("div",ke,[e("b",Ge,u(a.repo),1),Ce])])],8,be)}var je=f(ye,[["render",Ne],["__scopeId","data-v-dde8eec2"]]),Ie="/crates.png";const Se={props:{crate:String,version:String}},Le=t=>(v("data-v-5201ccc2"),t=t(),g(),t),Pe=["href"],Ee={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},Te=Le(()=>e("img",{class:"absolute w-4 lg:w-6 left-1 top-1 opacity-80",src:Ie,alt:""},null,-1)),Ae={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},Be={class:"mx-auto"},Oe={class:"mx-auto opacity-60"};function Re(t,n,a,i,o,c){return d(),_("a",{class:"relative",href:"https://crates.io/crates/"+a.crate},[e("button",Ee,[Te,e("div",Ae,[e("b",Be,u(a.crate),1),e("div",Oe,"v"+u(a.version),1)])])],8,Pe)}var Ve=f(Se,[["render",Re],["__scopeId","data-v-5201ccc2"]]),Me="/peacash.svg";const qe={mounted(){document.title="Pea"}},h=t=>(v("data-v-fb394e88"),t=t(),g(),t),Fe={class:"sm:m-6"},He={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl relative"},ze={class:"sm:rounded flex justify-center shadow-lg bg-black select-none"},De=h(()=>e("img",{class:"user-select-none h-28 h-80 md:h-40 z-10 w-full px-6",src:Me,alt:""},null,-1)),We=h(()=>e("div",{class:"absolute z-10 w-full h-full"},null,-1)),Ye={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl my-12 lg:mb-40"},Ke={class:"flex flex-col gap-4 lg:gap-8"},Qe=h(()=>e("h2",{class:"mx-auto"},"Repositories",-1)),Je={class:"flex justify-center gap-6 lg:gap-12"},Ue={class:"flex justify-center gap-6 lg:gap-12"},Xe=h(()=>e("h2",{class:"mx-auto"},"Binary Crates",-1)),Ze={class:"flex justify-center gap-6 lg:gap-12"},et=h(()=>e("h2",{class:"mx-auto"},"Library Crates",-1)),tt={class:"flex justify-center gap-6 lg:gap-12"},st={class:"flex justify-center gap-6 lg:gap-12"},ot={class:"flex justify-center gap-6 lg:gap-12"},rt={class:"flex justify-center gap-6 lg:gap-12"};function at(t,n,a,i,o,c){const l=ve,p=je,s=Ve;return d(),_(m,null,[e("div",Fe,[e("div",He,[e("h1",ze,[r(l,{class:"absolute h-full w-full"}),De,We])])]),e("div",Ye,[e("div",Ke,[Qe,e("div",Je,[r(p,{repo:"peacash"}),r(p,{repo:"bot"}),r(p,{repo:"website"})]),e("div",Ue,[r(p,{repo:"explorer"})]),Xe,e("div",Ze,[r(s,{version:"0.6.0",crate:"pea"}),r(s,{version:"0.3.0",crate:"pea-wallet"}),r(s,{version:"0.2.0",crate:"pea-pay"})]),et,e("div",tt,[r(s,{version:"0.2.0",crate:"pea-core"}),r(s,{version:"0.2.0",crate:"pea-logger"}),r(s,{version:"0.2.0",crate:"pea-db"})]),e("div",st,[r(s,{version:"0.2.0",crate:"pea-address"}),r(s,{version:"0.2.0",crate:"pea-amount"}),r(s,{version:"0.2.0",crate:"pea-key"})]),e("div",ot,[r(s,{version:"0.2.0",crate:"pea-block"}),r(s,{version:"0.2.0",crate:"pea-transaction"}),r(s,{version:"0.3.0",crate:"pea-stake"})]),e("div",rt,[r(s,{version:"0.1.0",crate:"pea-pay-core"}),r(s,{version:"0.1.0",crate:"pea-pay-db"})])])])],64)}var nt=f(qe,[["render",at],["__scopeId","data-v-fb394e88"]]);const it=[{name:"blog-bytes",path:"/blog/bytes",component:()=>N(()=>import("./bytes.0636b409.js"),["assets/bytes.0636b409.js","assets/bytes.af2fc4fc.css","assets/vendor.b570a9ae.js"]),props:!0},{name:"index",path:"/",component:nt,props:!0},{name:"all",path:"/:all(.*)*",component:()=>N(()=>import("./[...all].7ed49523.js"),["assets/[...all].7ed49523.js","assets/vendor.b570a9ae.js"]),props:!0}],I=P({history:E(),routes:it});function S(t){return!!Object.keys(t.query).length}I.beforeEach((t,n,a)=>{!S(t)&&S(n)?a({...t,query:n.query}):a()});const b=T(de);b.use(I);b.use(A);b.mount("#app");export{f as _};
