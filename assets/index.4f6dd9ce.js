import{o as c,c as _,a as e,r as v,F as h,b as g,d as b,w as $,e as k,t as f,f as i,p as y,g as w,h as H,i as R,j as N,k as A,u as O,l as Y,m as q,n as D,V as F}from"./vendor.7e584be3.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};z();const U={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},W=e("g",{fill:"none"},[e("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),X=[W];function K(t,n){return c(),_("svg",U,X)}var j={name:"heroicons-outline-external-link",render:K};var m=(t,n)=>{for(const[s,a]of n)t[s]=a;return t};const Q={data(){return{open:!1,links:{to:[{text:"Home",to:"/"}],href:[{text:"Github",href:"https://github.com/peacash"},{text:"Discord",href:"https://discord.com/invite/dEHY4PMVUX"}]}}}},J={class:"relative select-none z-20"},Z={class:"absolute sm:sticky w-full custom-header text-white sm:text-black"},ee={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},te={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},oe=["href"],se={class:"mr-2"};function re(t,n,s,a,o,l){const d=v("router-link"),p=j;return c(),_("div",J,[e("header",Z,[e("div",ee,[e("nav",te,[(c(!0),_(h,null,g(o.links.to,r=>(c(),b(d,{key:r,to:r.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black"},{default:$(()=>[k(f(r.text),1)]),_:2},1032,["to"]))),128)),(c(!0),_(h,null,g(o.links.href,r=>(c(),_("a",{key:r,href:r.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black",rel:"noopener"},[e("span",se,f(r.text),1),i(p,{class:"h-5 w-5"})],8,oe))),128))])])])])}var ne=m(Q,[["render",re],["__scopeId","data-v-8bb57964"]]),ae="/logo.svg";const ie={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Blog",to:"/"},{text:"Guide",to:"/"},{text:"Paper",to:"/"}],href:[{text:"Explorer",href:"https://explorer.pea.cash"},{text:"Github",href:"https://github.com/peacash"},{text:"Discord",href:"https://discord.com/invite/dEHY4PMVUX"}]}}}},ce=t=>(y("data-v-a292512a"),t=t(),w(),t),le={class:"py-20 lg:py-40 pb-60 sm:pb-20 bg-white"},de={class:"flex justify-center"},_e=ce(()=>e("div",{class:"w-40 sm:w-80 py-2 px-3 flex"},[e("div",{class:"logo text-2xl sm:text-4xl my-auto"},"Peacash"),e("img",{class:"w-8 sm:w-12 ml-2",src:ae,alt:""})],-1)),pe={class:"flex flex-col"},ue={class:"flex flex-col"},fe=["href"],me={class:"mr-2"};function he(t,n,s,a,o,l){const d=v("router-link"),p=j;return c(),_("footer",le,[e("div",de,[_e,e("div",pe,[(c(!0),_(h,null,g(o.links.to,r=>(c(),b(d,{key:r,to:r.to,class:"w-20 sm:w-40 custom-button rounded-md py-2 px-3 inline-flex items-center"},{default:$(()=>[k(f(r.text),1)]),_:2},1032,["to"]))),128))]),e("div",ue,[(c(!0),_(h,null,g(o.links.href,r=>(c(),_("a",{key:r,href:r.href,class:"w-20 sm:w-40 custom-button rounded-md py-2 px-3 inline-flex items-center",rel:"noopener"},[e("span",me,f(r.text),1),i(p,{class:"h-5 w-5"})],8,fe))),128))])])])}var xe=m(ie,[["render",he],["__scopeId","data-v-a292512a"]]);const ve={};function ge(t,n){const s=ne,a=v("router-view"),o=xe;return c(),_(h,null,[i(s),i(a),i(o)],64)}var be=m(ve,[["render",ge]]);const ye="modulepreload",M={},we="/",I=function(n,s){return!s||s.length===0?n():Promise.all(s.map(a=>{if(a=`${we}${a}`,a in M)return;M[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const d=document.createElement("link");if(d.rel=o?"stylesheet":ye,o||(d.as="script",d.crossOrigin=""),d.href=a,document.head.appendChild(d),o)return new Promise((p,r)=>{d.addEventListener("load",p),d.addEventListener("error",r)})})).then(()=>n())},$e={},ke={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},Ce=H('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),Ge=[Ce];function Ne(t,n){return c(),_("svg",ke,Ge)}var je=m($e,[["render",Ne]]);const Me={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Ie=e("g",{fill:"none"},[e("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Se=[Ie];function Te(t,n){return c(),_("svg",Me,Se)}var Ee={name:"heroicons-outline-clipboard-copy",render:Te};const Pe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Be=e("g",{fill:"none"},[e("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Le=[Be];function Ve(t,n){return c(),_("svg",Pe,Le)}var He={name:"heroicons-outline-clipboard-check",render:Ve};const Re={class:"text-white p-4 sm:p-5 sm:px-7 lg:p-6 lg:px-10 text-xs sm:text-sm lg:text-lg rounded-md shadow-lg flex items-center"},Ae={style:{"white-space":"nowrap"},class:"select-all text-white block overflow-hidden font-bold w-auto mr-2"},Oe=R({props:{text:null},setup(t){const n=t,s=N(),a=N(!1),o=A(r=>{r(),a.value=!1},1e3),{show:l,hide:d}=O(s,{content:"Copied",trigger:"manual",hideOnClick:!1}),p=async()=>{try{await navigator.clipboard.writeText(n.text),l()}catch{}a.value=!0,o(d)};return(r,u)=>{const P=Ee,B=He,L=v("router-link");return c(),_("div",Re,[e("span",Ae,f(n.text),1),i(L,{to:""},{default:$(()=>[e("button",{ref:(G,V)=>{V.copyButton=G,s.value=G},class:"focus:outline-none","aria-label":"Copy install command"},[a.value?(c(),b(B,{key:1,class:"inline-block fill-current text-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:p})):(c(),b(P,{key:0,class:"inline-block fill-current cursor-pointer text-white hover:text-black mb-1","aria-hidden":"true",onClick:p}))],512)]),_:1})])}}});var Ye=m(Oe,[["__scopeId","data-v-16f84af6"]]),qe="/github.png";const De={props:{repo:String}},S=t=>(y("data-v-dde8eec2"),t=t(),w(),t),Fe=["href"],ze={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},Ue=S(()=>e("img",{class:"absolute w-3 lg:w-5 left-2 top-2 opacity-80",src:qe,alt:""},null,-1)),We={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},Xe={class:"mx-auto"},Ke=S(()=>e("div",{class:"mx-auto opacity-60"},"peacash",-1));function Qe(t,n,s,a,o,l){return c(),_("a",{class:"relative",href:"https://github.com/peacash/"+s.repo},[e("button",ze,[Ue,e("div",We,[e("b",Xe,f(s.repo),1),Ke])])],8,Fe)}var Je=m(De,[["render",Qe],["__scopeId","data-v-dde8eec2"]]),Ze="/crates.png";const et={props:{crate:String,version:String}},tt=t=>(y("data-v-5201ccc2"),t=t(),w(),t),ot=["href"],st={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},rt=tt(()=>e("img",{class:"absolute w-4 lg:w-6 left-1 top-1 opacity-80",src:Ze,alt:""},null,-1)),nt={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},at={class:"mx-auto"},it={class:"mx-auto opacity-60"};function ct(t,n,s,a,o,l){return c(),_("a",{class:"relative",href:"https://crates.io/crates/"+s.crate},[e("button",st,[rt,e("div",nt,[e("b",at,f(s.crate),1),e("div",it,"v"+f(s.version),1)])])],8,ot)}var lt=m(et,[["render",ct],["__scopeId","data-v-5201ccc2"]]),dt="/peacash.svg";const _t={mounted(){document.title="Pea"}},x=t=>(y("data-v-7490bf82"),t=t(),w(),t),pt={class:"sm:m-6"},ut={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl relative"},ft={class:"sm:rounded flex justify-center shadow-lg bg-black select-none"},mt=x(()=>e("img",{class:"user-select-none h-28 h-80 md:h-40 z-10 w-full px-6",src:dt,alt:""},null,-1)),ht=x(()=>e("div",{class:"absolute z-10 w-full h-full"},null,-1)),xt={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl mb-20 lg:mb-40"},vt={class:"py-12 flex flex-col"},gt=x(()=>e("h2",{class:"mx-auto pb-8"},[k("Install using "),e("a",{href:"https://doc.rust-lang.org/cargo/"},"Cargo")],-1)),bt={class:"mx-auto flex flex-col sm:flex-row justify-center gap-6 md:gap-12 lg:gap-24"},yt={class:"flex flex-col gap-4 lg:gap-8"},wt=x(()=>e("h2",{class:"mx-auto"},"Repositories",-1)),$t={class:"flex justify-center gap-6 lg:gap-12"},kt={class:"flex justify-center gap-6 lg:gap-12"},Ct=x(()=>e("h2",{class:"mx-auto"},"Crates",-1)),Gt={class:"flex justify-center gap-6 lg:gap-12"},Nt={class:"flex justify-center gap-6 lg:gap-12"},jt={class:"flex justify-center gap-6 lg:gap-12"};function Mt(t,n,s,a,o,l){const d=je,p=Ye,r=Je,u=lt;return c(),_(h,null,[e("div",pt,[e("div",ut,[e("h1",ft,[i(d,{class:"absolute h-full w-full"}),mt,ht])])]),e("div",xt,[e("div",vt,[gt,e("div",bt,[i(p,{text:"cargo install pea-node"}),i(p,{text:"cargo install pea-wallet"})])]),e("div",yt,[wt,e("div",$t,[i(r,{repo:"pea"}),i(r,{repo:"bot"}),i(r,{repo:"website"})]),e("div",kt,[i(r,{repo:"explorer"})]),Ct,e("div",Gt,[i(u,{version:"0.5.0",crate:"pea"}),i(u,{version:"0.1.1",crate:"pea-core"}),i(u,{version:"0.1.1",crate:"pea-address"})]),e("div",Nt,[i(u,{version:"0.1.1",crate:"pea-amount"}),i(u,{version:"0.1.1",crate:"pea-tree"}),i(u,{version:"0.2.0",crate:"pea-db"})]),e("div",jt,[i(u,{version:"0.3.0",crate:"pea-node"}),i(u,{version:"0.2.3",crate:"pea-wallet"}),i(u,{version:"0.1.1",crate:"pea-api"})])])])],64)}var It=m(_t,[["render",Mt],["__scopeId","data-v-7490bf82"]]);const St=[{name:"blog-bytes",path:"/blog/bytes",component:()=>I(()=>import("./bytes.cacdb682.js"),["assets/bytes.cacdb682.js","assets/bytes.118eb169.css","assets/vendor.7e584be3.js"]),props:!0},{name:"index",path:"/",component:It,props:!0},{name:"all",path:"/:all(.*)*",component:()=>I(()=>import("./[...all].94f381e7.js"),["assets/[...all].94f381e7.js","assets/vendor.7e584be3.js"]),props:!0}],T=Y({history:q(),routes:St});function E(t){return!!Object.keys(t.query).length}T.beforeEach((t,n,s)=>{!E(t)&&E(n)?s({...t,query:n.query}):s()});const C=D(be);C.use(T);C.use(F);C.mount("#app");export{m as _};
