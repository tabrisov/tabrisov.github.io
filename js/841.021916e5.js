"use strict";(self["webpackChunkulam"]=self["webpackChunkulam"]||[]).push([[841],{3841:(e,l,a)=>{a.r(l),a.d(l,{default:()=>w});var s=a(3673),t=a(8880),n=a(2323);const r={class:"q-mt-xl text-center"},u={class:"map"};function i(e,l,a,i,c,o){const p=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(p,null,{default:(0,s.w5)((()=>[(0,s._)("div",r,[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":l[0]||(l[0]=l=>e.size=l),type:"number",min:"3",max:"201",step:"2"},null,512),[[t.nr,e.size]])]),(0,s._)("div",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.size,(l=>((0,s.wg)(),(0,s.iD)("div",{class:"row",key:`row-${l}-of-${e.size}`},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.size,(a=>((0,s.wg)(),(0,s.iD)("span",{key:`cell-${l}-${a}-of-${e.size}`,class:(0,n.C_)(["cell",{"cell--mark":e.isSimple(e.getCell(l,a))}])},null,2)))),128))])))),128))])])),_:1})}var c=a(1959);const o=(0,s.aZ)({name:"PageIndex",setup:function(){const e=(0,c.iH)(123),l=(0,c.iH)([]),a=(a,s)=>l.value[s*e.value+a],t=(a,s,t)=>{l.value[s*e.value+a]=t};(0,s.bv)((()=>{n(e.value)})),(0,s.YP)(e,(e=>{n(e)}));const n=e=>{let l=0,a=1,s=0,n=0,r=Math.floor(e/2)+1,u=Math.floor(e/2)+1;for(let i=1;i<=e*e;i++){switch(t(r,u,i),l){case 0:r++;break;case 1:u--;break;case 2:r--;break;case 3:u++;break}s++,s>=a&&(s=0,n=(n+1)%2,l=(l+1)%4,0===n&&a++)}},r=e=>{let l=!0;for(let a=3;a<e;a++)if(e%a===0){l=!1;break}return l};return{size:e,map:l,getCell:a,setCell:t,generateMap:n,isSimple:r}}});var p=a(4260),m=a(4379),f=a(7518),k=a.n(f);const v=(0,p.Z)(o,[["render",i]]),w=v;k()(o,"components",{QPage:m.Z})}}]);