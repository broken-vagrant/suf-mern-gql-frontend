var x=Object.defineProperty,_=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var s=(a,t,n)=>t in a?x(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,d=(a,t)=>{for(var n in t||(t={}))r.call(t,n)&&s(a,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&s(a,n,t[n]);return a},p=(a,t)=>_(a,h(t));var g=(a,t)=>{var n={};for(var e in a)r.call(a,e)&&t.indexOf(e)<0&&(n[e]=a[e]);if(a!=null&&o)for(var e of o(a))t.indexOf(e)<0&&c.call(a,e)&&(n[e]=a[e]);return n};import{_ as i,L as w,a as m,j as y}from"./index.b8ed94a7.js";const T=i.span.withConfig({displayName:"Tag__Container",componentId:"sc-s6tnp3-0"})({display:"inline-flex",alignItems:"center",height:"auto"}),C=i.span.withConfig({displayName:"Tag__TagWord",componentId:"sc-s6tnp3-1"})({display:"inline-flex",alignItems:"center",height:"auto",borderRadius:"0.375rem","--tw-bg-opacity":"0.75",backgroundColor:"rgba(190, 227, 248, var(--tw-bg-opacity))"}),u=b=>{var l=b,{to:a,children:t,label:n,count:e}=l,f=g(l,["to","children","label","count"]);return m(T,p(d({},f),{children:[y(C,{children:y(S,{to:a,children:n})}),e&&m(I,{children:["\xA0 ",` \xD7 ${e}`]})]}))},L=i.div.withConfig({displayName:"Tag__Tags",componentId:"sc-s6tnp3-2"})(a=>[`
	span + span {
    ${a.col&&a.col?"margin-top: .5em":"margin-left: .2em"}
	}
`,{display:"flex",flexWrap:"wrap"},a.col?{flexDirection:"column"}:{flexDirection:"row"},a.floatLeft&&{float:"left"}]);var S=i(w).withConfig({displayName:"Tag___StyledLink",componentId:"sc-s6tnp3-3"})({"--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",textDecoration:"none",fontSize:"0.75rem",padding:".2rem .5rem",outlineColor:"darkorange"}),I=i("span").withConfig({displayName:"Tag___StyledSpan",componentId:"sc-s6tnp3-4"})({fontSize:"0.875rem","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",display:"inline"});export{u as T,L as a};