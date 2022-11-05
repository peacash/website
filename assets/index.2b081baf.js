import{o,c as a,a as t,r as w,F as l,b as f,d as h,w as $,e as B,t as x,f as u,p as g,g as b,h as C,i as L,j as T,k as R,u as O,l as F,m as q,n as Y,q as D,V as U}from"./vendor.d822759b.js";const W=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const _ of n)if(_.type==="childList")for(const r of _.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const _={};return n.integrity&&(_.integrity=n.integrity),n.referrerpolicy&&(_.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?_.credentials="include":n.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function d(n){if(n.ep)return;n.ep=!0;const _=i(n);fetch(n.href,_)}};W();const X={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},K=t("g",{fill:"none"},[t("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Q=[K];function J(e,c){return o(),a("svg",X,Q)}var V={name:"heroicons-outline-external-link",render:J};var y=(e,c)=>{for(const[i,d]of c)e[i]=d;return e};const Z={data(){return{open:!1,links:{to:[],href:[{text:"Explorer",href:"https://explorer.pea.cash"},{text:"Github",href:"https://github.com/peacash"},{text:"Discord",href:"https://discord.com/invite/dEHY4PMVUX"}]}}}},ee={class:"relative select-none z-20"},te={class:"absolute sm:sticky w-full custom-header text-white sm:text-black"},se={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},oe={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},ne=["href"],re={class:"mr-2"};function ae(e,c,i,d,n,_){const r=w("router-link"),s=V;return o(),a("div",ee,[t("header",te,[t("div",se,[t("nav",oe,[(o(!0),a(l,null,f(n.links.to,p=>(o(),h(r,{key:p,to:p.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black"},{default:$(()=>[B(x(p.text),1)]),_:2},1032,["to"]))),128)),(o(!0),a(l,null,f(n.links.href,p=>(o(),a("a",{key:p,href:p.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black",rel:"noopener"},[t("span",re,x(p.text),1),u(s,{class:"h-5 w-5"})],8,ne))),128))])])])])}var ie=y(Z,[["render",ae],["__scopeId","data-v-7f73eb7a"]]),ce="/logo.svg";const le={data(){return{open:!1,links:{to:[{text:"Home",to:"/"},{text:"Blog",to:"/"},{text:"Guide",to:"/"},{text:"Paper",to:"/"}],href:[{text:"Explorer",href:"https://explorer.pea.cash"},{text:"Github",href:"https://github.com/peacash"},{text:"Discord",href:"https://discord.com/invite/dEHY4PMVUX"}]}}}},de=e=>(g("data-v-4e3885da"),e=e(),b(),e),ue={class:"py-20 lg:py-40 bg-white"},_e={class:"flex justify-center"},pe=de(()=>t("div",{class:"w-80 py-2 px-3 flex"},[t("div",{class:"logo text-4xl my-auto"},"Peacash"),t("img",{class:"w-12 ml-2",src:ce,alt:""})],-1)),fe={class:"flex flex-col"},he={class:"flex flex-col"},me=["href"],ye={class:"mr-2"};function ve(e,c,i,d,n,_){const r=w("router-link"),s=V;return o(),a("footer",ue,[t("div",_e,[pe,t("div",fe,[(o(!0),a(l,null,f(n.links.to,p=>(o(),h(r,{key:p,to:p.to,class:"w-40 custom-button rounded-md py-2 px-3 inline-flex items-center"},{default:$(()=>[B(x(p.text),1)]),_:2},1032,["to"]))),128))]),t("div",he,[(o(!0),a(l,null,f(n.links.href,p=>(o(),a("a",{key:p,href:p.href,class:"w-40 custom-button rounded-md py-2 px-3 inline-flex items-center",rel:"noopener"},[t("span",ye,x(p.text),1),u(s,{class:"h-5 w-5"})],8,me))),128))])])])}var xe=y(le,[["render",ve],["__scopeId","data-v-4e3885da"]]);const ge={};function be(e,c){const i=ie,d=w("router-view"),n=xe;return o(),a(l,null,[u(i),u(d),u(n)],64)}var ke=y(ge,[["render",be]]);const we="modulepreload",E={},$e="/",Be=function(c,i){return!i||i.length===0?c():Promise.all(i.map(d=>{if(d=`${$e}${d}`,d in E)return;E[d]=!0;const n=d.endsWith(".css"),_=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${_}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":we,n||(r.as="script",r.crossOrigin=""),r.href=d,document.head.appendChild(r),n)return new Promise((s,p)=>{r.addEventListener("load",s),r.addEventListener("error",p)})})).then(()=>c())},Ce={},je={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},Ge=C('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),Me=[Ge];function Ne(e,c){return o(),a("svg",je,Me)}var Se=y(Ce,[["render",Ne]]);const Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},Te=t("g",{fill:"none"},[t("path",{d:"M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0l3-3m-3 3l3 3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ve=[Te];function Ee(e,c){return o(),a("svg",Ie,Ve)}var Pe={name:"heroicons-outline-clipboard-copy",render:Ee};const He={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ze=t("g",{fill:"none"},[t("path",{d:"M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2l4-4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ae=[ze];function Le(e,c){return o(),a("svg",He,Ae)}var Re={name:"heroicons-outline-clipboard-check",render:Le};const Oe={class:"text-white p-4 sm:p-5 sm:px-7 lg:p-6 lg:px-10 text-xs sm:text-sm lg:text-lg rounded-md shadow-lg flex items-center"},Fe={style:{"white-space":"nowrap"},class:"select-all text-white block overflow-hidden font-bold w-auto mr-2"},qe=L({props:{text:null},setup(e){const c=e,i=T(),d=T(!1),n=R(p=>{p(),d.value=!1},1e3),{show:_,hide:r}=O(i,{content:"Copied",trigger:"manual",hideOnClick:!1}),s=async()=>{try{await navigator.clipboard.writeText(c.text),_()}catch{}d.value=!0,n(r)};return(p,v)=>{const G=Pe,M=Re,N=w("router-link");return o(),a("div",Oe,[t("span",Fe,x(c.text),1),u(N,{to:""},{default:$(()=>[t("button",{ref:(k,S)=>{S.copyButton=k,i.value=k},class:"focus:outline-none","aria-label":"Copy install command"},[d.value?(o(),h(M,{key:1,class:"inline-block fill-current text-green-500 cursor-pointer mb-1","aria-hidden":"true",onClick:s})):(o(),h(G,{key:0,class:"inline-block fill-current cursor-pointer text-white hover:text-black mb-1","aria-hidden":"true",onClick:s}))],512)]),_:1})])}}});var Ye=y(qe,[["__scopeId","data-v-16f84af6"]]),De="/github.png";const Ue={props:{repo:String}},P=e=>(g("data-v-dde8eec2"),e=e(),b(),e),We=["href"],Xe={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},Ke=P(()=>t("img",{class:"absolute w-3 lg:w-5 left-2 top-2 opacity-80",src:De,alt:""},null,-1)),Qe={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},Je={class:"mx-auto"},Ze=P(()=>t("div",{class:"mx-auto opacity-60"},"peacash",-1));function et(e,c,i,d,n,_){return o(),a("a",{class:"relative",href:"https://github.com/peacash/"+i.repo},[t("button",Xe,[Ke,t("div",Qe,[t("b",Je,x(i.repo),1),Ze])])],8,We)}var tt=y(Ue,[["render",et],["__scopeId","data-v-dde8eec2"]]),st="/crates.png";const ot={props:{crate:String,version:String}},nt=e=>(g("data-v-5201ccc2"),e=e(),b(),e),rt=["href"],at={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},it=nt(()=>t("img",{class:"absolute w-4 lg:w-6 left-1 top-1 opacity-80",src:st,alt:""},null,-1)),ct={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},lt={class:"mx-auto"},dt={class:"mx-auto opacity-60"};function ut(e,c,i,d,n,_){return o(),a("a",{class:"relative",href:"https://crates.io/crates/"+i.crate},[t("button",at,[it,t("div",ct,[t("b",lt,x(i.crate),1),t("div",dt,"v"+x(i.version),1)])])],8,rt)}var _t=y(ot,[["render",ut],["__scopeId","data-v-5201ccc2"]]);const pt={methods:{toHexString(e){return("0"+(e&255).toString(16)).slice(-2)}},props:{byte:Number}},ft={class:"p-2"},ht={style:{height:".8rem"},class:"flex rounded uppercase text-xs text-black"};function mt(e,c,i,d,n,_){return o(),a("div",ft,[t("div",ht,x(_.toHexString(i.byte)),1)])}var j=y(pt,[["render",mt]]);const yt={data(){return{amount:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.amount=[];for(let e=0;e<4;e++)this.amount.push(this.randomByte())}},mounted(){this.setBytes()}},H=e=>(g("data-v-3e6ba842"),e=e(),b(),e),vt=H(()=>t("div",null,null,-1)),xt=H(()=>t("div",{class:"flex flex-wrap justify-center my-4 text-black text-sm gap-2"},[t("div",{class:"px-2 py-1 rounded",style:{"background-color":"#f99"}},"significant figure"),t("div",{class:"px-2 py-1 rounded",style:{"background-color":"#9f9"}},"order of magnitude")],-1)),gt={class:"flex flex-wrap justify-center"};function bt(e,c,i,d,n,_){const r=j;return o(),a(l,null,[vt,xt,t("div",gt,[(o(!0),a(l,null,f(n.amount.slice(0,3),s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.amount.slice(3),s=>(o(),h(r,{key:s,byte:s,style:{background:"linear-gradient(to right, #f99 50%, #9f9 50%)"}},null,8,["byte"]))),128))])],64)}var kt=y(yt,[["render",bt],["__scopeId","data-v-3e6ba842"]]);const wt={data(){return{previous_hash:[],timestamp:[],public_key:[],signature:[],transactions:[],stakes:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.previous_hash=[],this.timestamp=[],this.public_key=[],this.signature=[],this.transactions=[],this.stakes=[];for(let e=0;e<32;e++)this.previous_hash.push(this.randomByte());for(let e=0;e<4;e++)this.timestamp.push(this.randomByte());for(let e=0;e<32;e++)this.public_key.push(this.randomByte());for(let e=0;e<64;e++)this.signature.push(this.randomByte());for(let e=0;e<8;e++)this.transactions.push(this.randomByte());for(let e=0;e<8;e++)this.stakes.push(this.randomByte())}},mounted(){this.setBytes()}},$t=C('<div data-v-248f29d0></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-248f29d0><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-248f29d0>previous_hash</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-248f29d0>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-248f29d0>public_key</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-248f29d0>signature</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-248f29d0>transactions</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-248f29d0>stakes</div></div>',2),Bt={class:"flex flex-wrap justify-center"};function Ct(e,c,i,d,n,_){const r=j;return o(),a(l,null,[$t,t("div",Bt,[(o(!0),a(l,null,f(n.previous_hash,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.timestamp,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.public_key,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.signature,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.transactions,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.stakes,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var jt=y(wt,[["render",Ct],["__scopeId","data-v-248f29d0"]]);const Gt={data(){return{public_key_input:[],public_key_output:[],amount:[],fee:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key_input=[],this.public_key_output=[],this.amount=[],this.fee=[],this.timestamp=[],this.signature=[];for(let e=0;e<32;e++)this.public_key_input.push(this.randomByte());for(let e=0;e<32;e++)this.public_key_output.push(this.randomByte());for(let e=0;e<4;e++)this.amount.push(this.randomByte());for(let e=0;e<4;e++)this.fee.push(this.randomByte());for(let e=0;e<4;e++)this.timestamp.push(this.randomByte());for(let e=0;e<64;e++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},Mt=C('<div data-v-226b4dff></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-226b4dff><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-226b4dff>public_key_input</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-226b4dff>public_key_output</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-226b4dff>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-226b4dff>fee</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-226b4dff>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-226b4dff>signature</div></div>',2),Nt={class:"flex flex-wrap justify-center"};function St(e,c,i,d,n,_){const r=j;return o(),a(l,null,[Mt,t("div",Nt,[(o(!0),a(l,null,f(n.public_key_input,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.public_key_output,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.amount,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.fee,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.timestamp,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.signature,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var It=y(Gt,[["render",St],["__scopeId","data-v-226b4dff"]]);const Tt={data(){return{public_key:[],amount:[],fee:[],deposit:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key=[],this.amount=[],this.deposit=[],this.fee=[],this.timestamp=[],this.signature=[];for(let e=0;e<32;e++)this.public_key.push(this.randomByte());for(let e=0;e<4;e++)this.amount.push(this.randomByte());for(let e=0;e<4;e++)this.fee.push(this.randomByte());for(let e=0;e<1;e++)this.deposit.push(this.randomByte());for(let e=0;e<4;e++)this.timestamp.push(this.randomByte());for(let e=0;e<64;e++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},Vt=C('<div data-v-129cf7da></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-129cf7da><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-129cf7da>public_key</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-129cf7da>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-129cf7da>fee</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-129cf7da>deposit</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-129cf7da>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-129cf7da>signature</div></div>',2),Et={class:"flex flex-wrap justify-center"};function Pt(e,c,i,d,n,_){const r=j;return o(),a(l,null,[Vt,t("div",Et,[(o(!0),a(l,null,f(n.public_key,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.amount,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.fee,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.deposit,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.timestamp,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(l,null,f(n.signature,s=>(o(),h(r,{key:s,byte:s,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var Ht=y(Tt,[["render",Pt],["__scopeId","data-v-129cf7da"]]);const zt={},At={class:"shadow-lg flex flex-col px-8 sm:px-12 py-4 bg-white xl:rounded"};function Lt(e,c){return o(),a("div",At,[F(e.$slots,"default")])}var Rt=y(zt,[["render",Lt]]),Ot="/peacash.svg";const Ft={mounted(){document.title="Pea"}},m=e=>(g("data-v-e4ea79aa"),e=e(),b(),e),qt={class:"sm:m-6"},Yt={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl relative"},Dt={class:"sm:rounded flex justify-center shadow-lg bg-black select-none"},Ut=m(()=>t("img",{class:"user-select-none h-28 h-80 md:h-40 z-10 w-full px-6",src:Ot,alt:""},null,-1)),Wt=m(()=>t("div",{class:"absolute z-10 w-full h-full"},null,-1)),Xt={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl mb-10 lg:mb-20"},Kt={class:"py-12 flex flex-col"},Qt=m(()=>t("h2",{class:"mx-auto pb-8"},[B("Install using "),t("a",{href:"https://doc.rust-lang.org/cargo/"},"Cargo")],-1)),Jt={class:"mx-auto flex flex-col sm:flex-row justify-center gap-6 md:gap-12 lg:gap-24"},Zt={class:"flex flex-col gap-4 lg:gap-8"},es=m(()=>t("h2",{class:"mx-auto"},"Repositories",-1)),ts={class:"flex justify-center gap-6 lg:gap-12"},ss={class:"flex justify-center gap-6 lg:gap-12"},os=m(()=>t("h2",{class:"mx-auto"},"Crates",-1)),ns={class:"flex justify-center gap-6 lg:gap-12"},rs={class:"flex justify-center gap-6 lg:gap-12"},as={class:"flex justify-center gap-6 lg:gap-12"},is=m(()=>t("div",{class:"py-12"},null,-1)),cs=m(()=>t("div",{class:"my-10"},null,-1)),ls=m(()=>t("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Scientific notation",-1)),ds=m(()=>t("p",{class:"md:mx-12 lg:mx-24"},[B(" Transaction amounts are compressed using scientific notation in order to save precious bytes. "),t("br"),t("i",null," Very rarely do we actually care about pennies when transacting millions. ")],-1)),us=m(()=>t("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a compressed number (4 bytes). ",-1)),_s=m(()=>t("div",{class:"my-20"},null,-1)),ps=m(()=>t("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Block",-1)),fs={class:"md:mx-12 lg:mx-24"},hs=m(()=>t("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized block (148 bytes + transactions & stakes). ",-1)),ms=m(()=>t("div",{class:"my-20"},null,-1)),ys=m(()=>t("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Transaction",-1)),vs={class:"md:mx-12 lg:mx-24"},xs=m(()=>t("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized transaction (140 bytes). ",-1)),gs=m(()=>t("div",{class:"my-20"},null,-1)),bs=m(()=>t("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Stake",-1)),ks={class:"md:mx-12 lg:mx-24"},ws=m(()=>t("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized stake (109 bytes). ",-1)),$s=m(()=>t("div",{class:"my-80"},null,-1));function Bs(e,c,i,d,n,_){const r=Se,s=Ye,p=tt,v=_t,G=kt,M=jt,N=It,k=Ht,S=Rt;return o(),a(l,null,[t("div",qt,[t("div",Yt,[t("h1",Dt,[u(r,{class:"absolute h-full w-full"}),Ut,Wt])])]),t("div",Xt,[t("div",Kt,[Qt,t("div",Jt,[u(s,{text:"cargo install pea-node"}),u(s,{text:"cargo install pea-wallet"})])]),t("div",Zt,[es,t("div",ts,[u(p,{repo:"pea"}),u(p,{repo:"bot"}),u(p,{repo:"website"})]),t("div",ss,[u(p,{repo:"explorer"})]),os,t("div",ns,[u(v,{version:"0.5.0",crate:"pea"}),u(v,{version:"0.1.1",crate:"pea-core"}),u(v,{version:"0.1.1",crate:"pea-address"})]),t("div",rs,[u(v,{version:"0.1.1",crate:"pea-amount"}),u(v,{version:"0.1.1",crate:"pea-tree"}),u(v,{version:"0.2.0",crate:"pea-db"})]),t("div",as,[u(v,{version:"0.3.0",crate:"pea-node"}),u(v,{version:"0.2.3",crate:"pea-wallet"}),u(v,{version:"0.1.1",crate:"pea-api"})])]),is,u(S,{class:"text-justify md:text-left"},{default:$(()=>[cs,ls,ds,u(G),us,_s,ps,t("div",fs,[u(M)]),hs,ms,ys,t("div",vs,[u(N)]),xs,gs,bs,t("div",ks,[u(k)]),ws,$s]),_:1})])],64)}var Cs=y(Ft,[["render",Bs],["__scopeId","data-v-e4ea79aa"]]);const js=[{name:"index",path:"/",component:Cs,props:!0},{name:"all",path:"/:all(.*)*",component:()=>Be(()=>import("./[...all].b823992b.js"),["assets/[...all].b823992b.js","assets/vendor.d822759b.js"]),props:!0}],z=q({history:Y(),routes:js});function A(e){return!!Object.keys(e.query).length}z.beforeEach((e,c,i)=>{!A(e)&&A(c)?i({...e,query:c.query}):i()});const I=D(ke);I.use(z);I.use(U);I.mount("#app");export{y as _};
