import{_ as u}from"./index.66a855dd.js";import{o as s,c as n,a as o,t as w,F as l,b as i,d,p as b,g as k,h as v,q as S,f,w as j,e as I}from"./vendor.7e584be3.js";const V={methods:{toHexString(t){return("0"+(t&255).toString(16)).slice(-2)}},props:{byte:Number}},M={class:"p-2"},z={style:{height:".8rem"},class:"flex rounded uppercase text-xs text-black"};function N(t,_,p,m,r,y){return s(),n("div",M,[o("div",z,w(y.toHexString(p.byte)),1)])}var h=u(V,[["render",N]]);const T={data(){return{amount:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.amount=[];for(let t=0;t<4;t++)this.amount.push(this.randomByte())}},mounted(){this.setBytes()}},x=t=>(b("data-v-ee766576"),t=t(),k(),t),F=x(()=>o("div",null,null,-1)),A=x(()=>o("div",{class:"flex flex-wrap justify-center my-4 text-black text-sm gap-2"},[o("div",{class:"px-2 py-1 rounded",style:{"background-color":"#f99"}},"significant figure"),o("div",{class:"px-2 py-1 rounded",style:{"background-color":"#9f9"}},"order of magnitude")],-1)),D={class:"flex flex-wrap justify-center"};function H(t,_,p,m,r,y){const a=h;return s(),n(l,null,[F,A,o("div",D,[(s(!0),n(l,null,i(r.amount.slice(0,3),e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.amount.slice(3),e=>(s(),d(a,{key:e,byte:e,style:{background:"linear-gradient(to right, #f99 50%, #9f9 50%)"}},null,8,["byte"]))),128))])],64)}var q=u(T,[["render",H],["__scopeId","data-v-ee766576"]]);const C={data(){return{previous_hash:[],timestamp:[],public_key:[],signature:[],transactions:[],stakes:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.previous_hash=[],this.timestamp=[],this.public_key=[],this.signature=[],this.transactions=[],this.stakes=[];for(let t=0;t<32;t++)this.previous_hash.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<32;t++)this.public_key.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte());for(let t=0;t<8;t++)this.transactions.push(this.randomByte());for(let t=0;t<8;t++)this.stakes.push(this.randomByte())}},mounted(){this.setBytes()}},E=v('<div data-v-713d4c3d></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-713d4c3d><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-713d4c3d>previous_hash</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-713d4c3d>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-713d4c3d>public_key</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-713d4c3d>signature</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-713d4c3d>transactions</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-713d4c3d>stakes</div></div>',2),L={class:"flex flex-wrap justify-center"};function P(t,_,p,m,r,y){const a=h;return s(),n(l,null,[E,o("div",L,[(s(!0),n(l,null,i(r.previous_hash,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.timestamp,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.public_key,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.signature,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.transactions,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.stakes,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var G=u(C,[["render",P],["__scopeId","data-v-713d4c3d"]]);const J={data(){return{public_key_input:[],public_key_output:[],amount:[],fee:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key_input=[],this.public_key_output=[],this.amount=[],this.fee=[],this.timestamp=[],this.signature=[];for(let t=0;t<32;t++)this.public_key_input.push(this.randomByte());for(let t=0;t<32;t++)this.public_key_output.push(this.randomByte());for(let t=0;t<4;t++)this.amount.push(this.randomByte());for(let t=0;t<4;t++)this.fee.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},K=v('<div data-v-deee6020></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-deee6020><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-deee6020>public_key_input</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-deee6020>public_key_output</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-deee6020>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-deee6020>fee</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-deee6020>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-deee6020>signature</div></div>',2),O={class:"flex flex-wrap justify-center"};function Q(t,_,p,m,r,y){const a=h;return s(),n(l,null,[K,o("div",O,[(s(!0),n(l,null,i(r.public_key_input,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.public_key_output,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.amount,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.fee,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.timestamp,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.signature,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var R=u(J,[["render",Q],["__scopeId","data-v-deee6020"]]);const U={data(){return{public_key:[],amount:[],fee:[],deposit:[],timestamp:[],signature:[]}},methods:{randomByte(){return Math.floor(Math.random()*256)},setBytes(){this.public_key=[],this.amount=[],this.deposit=[],this.fee=[],this.timestamp=[],this.signature=[];for(let t=0;t<32;t++)this.public_key.push(this.randomByte());for(let t=0;t<4;t++)this.amount.push(this.randomByte());for(let t=0;t<4;t++)this.fee.push(this.randomByte());for(let t=0;t<1;t++)this.deposit.push(this.randomByte());for(let t=0;t<4;t++)this.timestamp.push(this.randomByte());for(let t=0;t<64;t++)this.signature.push(this.randomByte())}},mounted(){this.setBytes()}},W=v('<div data-v-32b627a6></div><div class="flex flex-wrap justify-center my-4 text-black text-sm gap-2" data-v-32b627a6><div class="px-2 py-1 rounded" style="background-color:#f99;" data-v-32b627a6>public_key</div><div class="px-2 py-1 rounded" style="background-color:#9f9;" data-v-32b627a6>amount</div><div class="px-2 py-1 rounded" style="background-color:#ff9;" data-v-32b627a6>fee</div><div class="px-2 py-1 rounded" style="background-color:#99f;" data-v-32b627a6>deposit</div><div class="px-2 py-1 rounded" style="background-color:#f9f;" data-v-32b627a6>timestamp</div><div class="px-2 py-1 rounded" style="background-color:#9ff;" data-v-32b627a6>signature</div></div>',2),X={class:"flex flex-wrap justify-center"};function Y(t,_,p,m,r,y){const a=h;return s(),n(l,null,[W,o("div",X,[(s(!0),n(l,null,i(r.public_key,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f99"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.amount,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9f9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.fee,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#ff9"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.deposit,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#99f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.timestamp,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#f9f"}},null,8,["byte"]))),128)),(s(!0),n(l,null,i(r.signature,e=>(s(),d(a,{key:e,byte:e,style:{"background-color":"#9ff"}},null,8,["byte"]))),128))])],64)}var Z=u(U,[["render",Y],["__scopeId","data-v-32b627a6"]]);const tt={},et={class:"shadow-lg flex flex-col px-8 sm:px-12 py-4 bg-white xl:rounded"};function st(t,_){return s(),n("div",et,[S(t.$slots,"default")])}var ot=u(tt,[["render",st]]);const nt={mounted(){document.title="Pea"}},c=t=>(b("data-v-6c7bd086"),t=t(),k(),t),rt={class:"mx-auto w-full flex flex-col justify-center prose sm:prose-lg md:max-w-7xl lg:mb-20"},at=c(()=>o("div",{class:"my-10"},null,-1)),lt=c(()=>o("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Scientific notation",-1)),it=c(()=>o("p",{class:"md:mx-12 lg:mx-24"},[I(" Transaction amounts are compressed using scientific notation in order to save precious bytes. "),o("br"),o("i",null," Very rarely do we actually care about pennies when transacting millions. ")],-1)),dt=c(()=>o("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a compressed number (4 bytes). ",-1)),ct=c(()=>o("div",{class:"my-20"},null,-1)),ut=c(()=>o("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Block",-1)),_t={class:"md:mx-12 lg:mx-24"},pt=c(()=>o("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized block (148 bytes + transactions & stakes). ",-1)),yt=c(()=>o("div",{class:"my-20"},null,-1)),mt=c(()=>o("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Transaction",-1)),ft={class:"md:mx-12 lg:mx-24"},ht=c(()=>o("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized transaction (140 bytes). ",-1)),vt=c(()=>o("div",{class:"my-20"},null,-1)),bt=c(()=>o("h2",{class:"mx-auto",style:{"font-weight":"300"}},"Stake",-1)),kt={class:"md:mx-12 lg:mx-24"},xt=c(()=>o("p",{class:"md:mx-12 lg:mx-24 italic"}," Visualization of a serialized stake (109 bytes). ",-1)),gt=c(()=>o("div",{class:"my-80"},null,-1));function Bt(t,_,p,m,r,y){const a=q,e=G,g=R,B=Z,$=ot;return s(),n("div",rt,[f($,{class:"text-justify md:text-left"},{default:j(()=>[at,lt,it,f(a),dt,ct,ut,o("div",_t,[f(e)]),pt,yt,mt,o("div",ft,[f(g)]),ht,vt,bt,o("div",kt,[f(B)]),xt,gt]),_:1})])}var St=u(nt,[["render",Bt],["__scopeId","data-v-6c7bd086"]]);export{St as default};
