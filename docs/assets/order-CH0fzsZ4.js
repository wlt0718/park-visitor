import{aL as s}from"./index-CyvZJMuR.js";const r=s("useorderStore",{state:()=>({list:[],merchant:""}),actions:{SET_merchant(t){this.merchant=t},SET_list(t){this.list=t},SET_list_showMinus(t,e){this.list[t].showMinus=e},SET_list_showInput(t,e){this.list[t].showInput=e}},getters:{geshu:t=>{if(t.list.length===0)return"";{let e=0;for(let i=0;i<t.list.length;i++)t.list[i].value&&(e=e+1);return e}},amount:t=>{if(t.list.length===0)return"";{let e=0;for(let i=0;i<t.list.length;i++)t.list[i].value&&(e=e+t.list[i].value*t.list[i].amount);return e}}}});export{r as u};