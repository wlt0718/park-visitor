import{aC as E,al as _,am as z,as as H,c as T,n as O,V as I,m as y,d as B,r as S,ar as A,P as D,l as b,a1 as C,a4 as N,b as v,at as V,f as F,g as j,ao as P,aw as m,a2 as K,ag as L,ah as M,ad as U,w as $,aD as W,t as Z,aE as q,I as G}from"./index-BurNYFqW.js";function J(t,r){if(!E||!window.IntersectionObserver)return;const l=new IntersectionObserver(e=>{r(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{t.value&&l.observe(t.value)},u=()=>{t.value&&l.unobserve(t.value)};_(u),z(u),H(n)}const[Q,X]=T("sticky"),Y={zIndex:O,position:I("top"),container:Object,offsetTop:y(0),offsetBottom:y(0)};var ee=B({name:Q,props:Y,emits:["scroll","change"],setup(t,{emit:r,slots:l}){const n=S(),u=A(n),e=D({fixed:!1,width:0,height:0,transform:0}),a=S(!1),i=b(()=>V(t.position==="top"?t.offsetTop:t.offsetBottom)),g=b(()=>{if(a.value)return;const{fixed:o,height:f,width:s}=e;if(o)return{width:`${s}px`,height:`${f}px`}}),x=b(()=>{if(!e.fixed||a.value)return;const o=F(j(t.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[t.position]:`${i.value}px`});return e.transform&&(o.transform=`translate3d(0, ${e.transform}px, 0)`),o}),w=o=>r("scroll",{scrollTop:o,isFixed:e.fixed}),d=()=>{if(!n.value||P(n))return;const{container:o,position:f}=t,s=m(n),R=U(window);if(e.width=s.width,e.height=s.height,f==="top")if(o){const c=m(o),h=c.bottom-i.value-e.height;e.fixed=i.value>s.top&&c.bottom>0,e.transform=h<0?h:0}else e.fixed=i.value>s.top;else{const{clientHeight:c}=document.documentElement;if(o){const h=m(o),p=c-h.top-i.value-e.height;e.fixed=c-i.value<s.bottom&&c>h.top,e.transform=p<0?-p:0}else e.fixed=c-i.value<s.bottom}w(R)};return C(()=>e.fixed,o=>r("change",o)),N("scroll",d,{target:u,passive:!0}),J(n,d),C([L,M],()=>{!n.value||P(n)||!e.fixed||(a.value=!0,K(()=>{const o=m(n);e.width=o.width,e.height=o.height,a.value=!1}))}),()=>{var o;return v("div",{ref:n,style:g.value},[v("div",{class:X({fixed:e.fixed&&!a.value}),style:x.value},[(o=l.default)==null?void 0:o.call(l)])])}}});const se=$(ee),[te,k]=T("tag"),oe={size:String,mark:Boolean,show:Z,type:I("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var ne=B({name:te,props:oe,emits:["close"],setup(t,{slots:r,emit:l}){const n=a=>{a.stopPropagation(),l("close",a)},u=()=>t.plain?{color:t.textColor||t.color,borderColor:t.color}:{color:t.textColor,background:t.color},e=()=>{var a;const{type:i,mark:g,plain:x,round:w,size:d,closeable:o}=t,f={mark:g,plain:x,round:w};d&&(f[d]=d);const s=o&&v(G,{name:"cross",class:[k("close"),q],onClick:n},null);return v("span",{style:u(),class:k([f,i])},[(a=r.default)==null?void 0:a.call(r),s])};return()=>v(W,{name:t.closeable?"van-fade":void 0},{default:()=>[t.show?e():null]})}});const ie=$(ne);export{se as S,ie as T,J as u};
