import{_ as t,e as s,n as o,j as a,a as r,d as g,i as l}from"./index.b8ed94a7.js";import{a as m,T as c}from"./Tag.b619c743.js";const p=t.div.withConfig({displayName:"RightSidePanel__Grid",componentId:"sc-1pvd4ze-0"})({margin:"0",width:"33.333333%",marginTop:"1rem",borderRadius:"0.125rem",display:"none","@media (min-width: 768px)":{display:"block"}}),h=t.h3.withConfig({displayName:"RightSidePanel__Heading",componentId:"sc-1pvd4ze-1"})({fontSize:"1.1rem",textAlign:"center",marginBottom:"1rem"}),_=()=>{const{notify:d}=s(),{data:i,loading:n}=o({onError:e=>{d(l(e),"error")}});return a(p,{children:r(y,{children:[a(h,{children:"Top Tags"}),n&&a(g,{size:"medium"}),!n&&i&&a(m,{col:!0,children:i.getAllTags.slice(0,10).map(e=>a(c,{label:e.tagName.length>13?e.tagName.slice(0,13)+"...":e.tagName,to:`/tags/${e.tagName}`,count:e.count},e.tagName))}),!n&&!(i!=null&&i.getAllTags)&&"No Tags created yet!"]})})};var y=t("div").withConfig({displayName:"RightSidePanel___StyledDiv",componentId:"sc-1pvd4ze-2"})({display:"none",minHeight:"45vh",padding:"1rem",borderRadius:"0.375rem","@media (min-width: 768px)":{display:"block"}});export{_ as default};