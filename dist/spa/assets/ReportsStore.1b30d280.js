var R=Object.defineProperty;var g=(s,e,t)=>e in s?R(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var a=(s,e,t)=>(g(s,typeof e!="symbol"?e+"":e,t),t);import{O as h,r as p,w as v}from"./index.adcba8f6.js";import{a as i}from"./axios.bf56c3c5.js";const d="/",L="http://51.250.28.160:5005/api";var P={publicPath:d,serverURL:L};class f{constructor(){a(this,"serverURL",P.serverURL);a(this,"getReportsList",async e=>{let t;return await i.post(`${this.serverURL}/reports`,e).then(function(o){t=o.data}).catch(function(o){console.log(o)}),t});a(this,"getReportFile",e=>{i.post(`${this.serverURL}/report-file`,{id:e}).catch(t=>{console.log(t)})})}}const m=new f,y=h("reports",()=>{const s=p([]),e=p({searchQuery:"",sortOption:"",sortDescending:!0,page:1,perPage:7}),t=(r,l)=>{e.value.sortOption=r,e.value.sortDescending=l},o=r=>{e.value.searchQuery=r},c=()=>{s.value=[],m.getReportsList(e.value).then(r=>{r&&s.value.push(...r)})},u=()=>{};v(e,()=>{c()},{deep:!0});const n=p("");return{reportItems:s,listRequestParameters:e,setSortRequestParameters:t,getReportFile:u,setSearchRequestParameter:o,getReportsList:c,setSelectedReportPage:r=>{n.value=r},selectedReportPage:n}});export{P as a,y as u};
