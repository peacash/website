import{o,c as a,a as s,r as k,F as i,b as _,d as p,w as $,e as w,t as y,f,g as v,p as g,h as b,i as V,j as E,k as A,l as P}from"./vendor.053adb08.js";const O=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function c(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function d(r){if(r.ep)return;r.ep=!0;const u=c(r);fetch(r.href,u)}};O();const H={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},R=s("g",{fill:"none"},[s("path",{d:"M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),q=[R];function F(t,l){return o(),a("svg",H,q)}var D={name:"heroicons-outline-external-link",render:F};var h=(t,l)=>{for(const[c,d]of l)t[c]=d;return t};const W={data(){return{open:!1,links:{to:[{text:"Home",to:"/"}],href:[{text:"Explorer",href:"https://explorer.pea.cash"},{text:"Github",href:"https://github.com/peacash"}]}}}},Y={class:"relative select-none z-20"},K={class:"absolute sm:sticky w-full custom-header text-white sm:text-black"},Q={class:"max-w-7xl mx-auto px-4 flex justify-between lg:px-8"},J={class:"flex py-2 space-x-4 lg:space-x-8","aria-label":"Global navigation"},U=["href"],X={class:"mr-2"};function Z(t,l,c,d,r,u){const n=k("router-link"),e=D;return o(),a("div",Y,[s("header",K,[s("div",Q,[s("nav",J,[(o(!0),a(i,null,_(r.links.to,m=>(o(),p(n,{key:m,to:m.to,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black"},{default:$(()=>[w(y(m.text),1)]),_:2},1032,["to"]))),128)),(o(!0),a(i,null,_(r.links.href,m=>(o(),a("a",{key:m,href:m.href,class:"custom-button rounded-md py-2 px-3 inline-flex items-center focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white sm:focus:ring-black hover:outline-none hover:ring-1 hover:ring-outset hover:ring-white sm:hover:ring-black",rel:"noopener"},[s("span",X,y(m.text),1),f(e,{class:"h-5 w-5"})],8,U))),128))])])])])}var tt=h(W,[["render",Z],["__scopeId","data-v-5ccd3805"]]);const et={};function st(t,l){const c=tt,d=k("router-view");return o(),a(i,null,[f(c),f(d)],64)}var ot=h(et,[["render",st]]);const rt="modulepreload",B={},nt="/",at=function(l,c){return!c||c.length===0?l():Promise.all(c.map(d=>{if(d=`${nt}${d}`,d in B)return;B[d]=!0;const r=d.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${u}`))return;const n=document.createElement("link");if(n.rel=r?"stylesheet":rt,r||(n.as="script",n.crossOrigin=""),n.href=d,document.head.appendChild(n),r)return new Promise((e,m)=>{n.addEventListener("load",e),n.addEventListener("error",m)})})).then(()=>l())},it={},ct={viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},lt=v('<defs><radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient><radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient><radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient><radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient><radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient></defs><rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect><rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect><rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>',4),dt=[lt];function ut(t,l){return o(),a("svg",ct,dt)}var _t=h(it,[["render",ut]]),pt="/github.png";const ft={props:{repo:String}},G=t=>(g("data-v-dde8eec2"),t=t(),b(),t),mt=["href"],ht={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},yt=G(()=>s("img",{class:"absolute w-3 lg:w-5 left-2 top-2 opacity-80",src:pt,alt:""},null,-1)),vt={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},xt={class:"mx-auto"},gt=G(()=>s("div",{class:"mx-auto opacity-60"},"peacash",-1));function bt(t,l,c,d,r,u){return o(),a("a",{class:"relative",href:"https://github.com/peacash/"+c.repo},[s("button",ht,[yt,s("div",vt,[s("b",xt,y(c.repo),1),gt])])],8,mt)}var kt=h(ft,[["render",bt],["__scopeId","data-v-dde8eec2"]]),$t="/crates.png";const wt={props:{crate:String,version:String}},Bt=t=>(g("data-v-5201ccc2"),t=t(),b(),t),Gt=["href"],Nt={class:"w-24 sm:w-28 md:w-32 lg:w-40 px-5 md:px-10 h-16 md:h-20 xl:h-24",role:"button"},jt=Bt(()=>s("img",{class:"absolute w-4 lg:w-6 left-1 top-1 opacity-80",src:$t,alt:""},null,-1)),Ct={class:"flex flex-col text-xs sm:text-sm xl:text-lg"},St={class:"mx-auto"},It={class:"mx-auto opacity-60"};function Mt(t,l,c,d,r,u){return o(),a("a",{class:"relative",href:"https://crates.io/crates/"+c.crate},[s("button",Nt,[jt,s("div",Ct,[s("b",St,y(c.crate),1),s("div",It,"v"+y(c.version),1)])])],8,Gt)}var Tt=h(wt,[["render",Mt],["__scopeId","data-v-5201ccc2"]]);const zt={methods:{toHexString(t){return("0"+(t&255).toString(16)).slice(-2)}},props:{byte:Number}},Lt={class:"p-2"},Vt={style:{height:".8rem"},class:"flex rounded uppercase text-xs text-black"};function Et(t,l,c,d,r,u){return o(),a("div",Lt,[s("div",Vt,y(u.toHexString(c.byte)),1)])}var x=h(zt,[["render",Et]]);const At={data(){return{amount:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.amount=[];for(let t=0;t<4;t++)this.amount.push(this.randomByte())}},mounted(){this.setBytes()}},N=t=>(g("data-v-3e6ba842"),t=t(),b(),t),Pt=N(()=>s("div",null,null,-1)),Ot=N(()=>s("div",{class:"flex flex-wrap justify-center my-4 text-black text-sm gap-2"},[s("div",{class:"px-2 py-1 rounded",style:{"background-color":"#f99"}},"significant figure"),s("div",{class:"px-2 py-1 rounded",style:{"background-color":"#9f9"}},"order of magnitude")],-1)),Ht={class:"flex flex-wrap justify-center"};function Rt(t,l,c,d,r,u){const n=x;return o(),a(i,null,[Pt,Ot,s("div",Ht,[(o(!0),a(i,null,_(r.amount.slice(0,3),e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.amount.slice(3),e=>(o(),p(n,{key:e,byte:e,style:{background:"linear-gradient(to right, #f99 50%, #9f9 50%)"}},null,8,["byte"]))),128))])],64)}var qt=h(At,[["render",Rt],["__scopeId","data-v-3e6ba842"]]);const Ft={data(){return{previous_hash:[],timestamp:[],public_key:[],signature:[],transactions:[],stakes:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.previous_hash=[],this.timestamp=[],this.public_key=[],this.signature=[],this.transactions=[],this.stakes=[];for(let t=0;t<32;t++)this.previous_hash.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<32;t++)this.public_key.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte());for(let t=0;t<8;t++)this.transactions.push(this.randomByte());for(let t=0;t<8;t++)this.stakes.push(this.randomByte())}},mounted(){this.setBytes()}},Dt=v('<div data-v-248f29d0></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-248f29d0><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-248f29d0>previous_hash</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-248f29d0>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-248f29d0>public_key</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-248f29d0>signature</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-248f29d0>transactions</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-248f29d0>stakes</div></div>',2),Wt={class:"flex flex-wrap justify-center"};function Yt(t,l,c,d,r,u){const n=x;return o(),a(i,null,[Dt,s("div",Wt,[(o(!0),a(i,null,_(r.previous_hash,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.timestamp,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.public_key,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.signature,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.transactions,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.stakes,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var Kt=h(Ft,[["render",Yt],["__scopeId","data-v-248f29d0"]]);const Qt={data(){return{public_key_input:[],public_key_output:[],amount:[],fee:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key_input=[],this.public_key_output=[],this.amount=[],this.fee=[],this.timestamp=[],this.signature=[];for(let t=0;t<32;t++)this.public_key_input.push(this.randomByte());for(let t=0;t<32;t++)this.public_key_output.push(this.randomByte());for(let t=0;t<4;t++)this.amount.push(this.randomByte());for(let t=0;t<4;t++)this.fee.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},Jt=v('<div data-v-226b4dff></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-226b4dff><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-226b4dff>public_key_input</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-226b4dff>public_key_output</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-226b4dff>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-226b4dff>fee</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-226b4dff>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-226b4dff>signature</div></div>',2),Ut={class:"flex flex-wrap justify-center"};function Xt(t,l,c,d,r,u){const n=x;return o(),a(i,null,[Jt,s("div",Ut,[(o(!0),a(i,null,_(r.public_key_input,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.public_key_output,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.amount,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.fee,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.timestamp,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.signature,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var Zt=h(Qt,[["render",Xt],["__scopeId","data-v-226b4dff"]]);const te={data(){return{public_key:[],amount:[],fee:[],deposit:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key=[],this.amount=[],this.deposit=[],this.fee=[],this.timestamp=[],this.signature=[];for(let t=0;t<32;t++)this.public_key.push(this.randomByte());for(let t=0;t<4;t++)this.amount.push(this.randomByte());for(let t=0;t<4;t++)this.fee.push(this.randomByte());for(let t=0;t<1;t++)this.deposit.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},ee=v('<div data-v-129cf7da></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-129cf7da><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-129cf7da>public_key</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-129cf7da>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-129cf7da>fee</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-129cf7da>deposit</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-129cf7da>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-129cf7da>signature</div></div>',2),se={class:"flex flex-wrap justify-center"};function oe(t,l,c,d,r,u){const n=x;return o(),a(i,null,[ee,s("div",se,[(o(!0),a(i,null,_(r.public_key,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.amount,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.fee,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.deposit,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.timestamp,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(o(!0),a(i,null,_(r.signature,e=>(o(),p(n,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var re=h(te,[["render",oe],["__scopeId","data-v-129cf7da"]]);const ne={},ae={class:"shadow-lg flex flex-col px-8 sm:px-12 py-4 bg-white xl:rounded"};function ie(t,l){return o(),a("div",ae,[V(t.$slots,"default")])}var ce=h(ne,[["render",ie]]),le="/peacash.svg";const de={mounted(){document.title="Pea"}},ue={class:"sm:m-6"},_e={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl relative"},pe={class:"sm:rounded flex justify-center shadow-lg bg-black select-none"},fe=s("img",{class:"user-select-none h-28 h-80 md:h-40 z-10 w-full px-6",src:le,alt:""},null,-1),me=s("div",{class:"absolute z-10 w-full h-full"},null,-1),he={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl"},ye=s("div",{class:"py-6 lg:py-12"},null,-1),ve={class:"flex flex-col gap-4 lg:gap-8"},xe={class:"flex justify-center gap-6 lg:gap-12"},ge={class:"flex justify-center gap-6 lg:gap-12"},be={class:"flex justify-center gap-6 lg:gap-12"},ke={class:"flex justify-center gap-6 lg:gap-12"},$e={class:"flex justify-center gap-6 lg:gap-12"},we=s("div",{class:"py-6 lg:py-12"},null,-1),Be=s("div",{class:"my-10"},null,-1),Ge=s("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Scientific notation",-1),Ne=s("p",{class:"md:mx-12 lg:mx-24"},[w(" Transaction amounts are compressed using scientific notation in order to save precious bytes. "),s("br"),s("i",null," Very rarely do we actually care about pennies when transacting millions. ")],-1),je=s("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a compressed number (4 bytes). ",-1),Ce=s("div",{class:"my-20"},null,-1),Se=s("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Block",-1),Ie={class:"md:mx-12 lg:mx-24"},Me=s("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized block (148 bytes + transactions & stakes). ",-1),Te=s("div",{class:"my-20"},null,-1),ze=s("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Transaction",-1),Le={class:"md:mx-12 lg:mx-24"},Ve=s("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized transaction (140 bytes). ",-1),Ee=s("div",{class:"my-20"},null,-1),Ae=s("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Stake",-1),Pe={class:"md:mx-12 lg:mx-24"},Oe=s("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized stake (109 bytes). ",-1),He=s("div",{class:"my-80"},null,-1);function Re(t,l,c,d,r,u){const n=_t,e=kt,m=Tt,I=qt,M=Kt,T=Zt,z=re,L=ce;return o(),a(i,null,[s("div",ue,[s("div",_e,[s("h1",pe,[f(n,{class:"absolute h-full w-full"}),fe,me])])]),s("div",he,[ye,s("div",ve,[s("div",xe,[f(e,{repo:"pea"}),f(e,{repo:"bot"}),f(e,{repo:"website"})]),s("div",ge,[f(e,{repo:"explorer"})]),s("div",be,[f(m,{version:"0.4.0",crate:"pea"}),f(m,{version:"0.1.0",crate:"pea-core"}),f(m,{version:"0.1.0",crate:"pea-address"})]),s("div",ke,[f(m,{version:"0.1.0",crate:"pea-amount"}),f(m,{version:"0.1.0",crate:"pea-tree"}),f(m,{version:"0.1.0",crate:"pea-node"})]),s("div",$e,[f(m,{version:"0.1.0",crate:"pea-wallet"}),f(m,{version:"0.1.0",crate:"pea-db"})])]),we,f(L,{class:"text-justify md:text-left"},{default:$(()=>[Be,Ge,Ne,f(I),je,Ce,Se,s("div",Ie,[f(M)]),Me,Te,ze,s("div",Le,[f(T)]),Ve,Ee,Ae,s("div",Pe,[f(z)]),Oe,He]),_:1})])],64)}var qe=h(de,[["render",Re]]);const Fe=[{name:"index",path:"/",component:qe,props:!0},{name:"all",path:"/:all(.*)*",component:()=>at(()=>import("./[...all].376cf4ce.js"),["assets/[...all].376cf4ce.js","assets/vendor.053adb08.js"]),props:!0}],j=E({history:A(),routes:Fe});function C(t){return!!Object.keys(t.query).length}j.beforeEach((t,l,c)=>{!C(t)&&C(l)?c({...t,query:l.query}):c()});const S=P(ot);S.use(j);S.mount("#app");export{h as _};