import{_ as t}from"./vendor.d37175de.js";import{a as l,j as n,u as s,l as d,L as r,g as m}from"./index.aa3f4cd4.js";import{T as g}from"./Tag.63c78e0e.js";const c=t.span.withConfig({displayName:"Tags__Container",componentId:"sc-1wzpm7b-0"})({display:"inline-flex",alignItems:"center",height:"auto"}),p=({href:e,label:a,count:o})=>l(c,{children:[n(g,{tag:"a",href:e,label:a}),l(f,{children:["\xA0 \u2A2F ",o]})]}),h=t.div.withConfig({displayName:"Tags",componentId:"sc-1wzpm7b-1"})(e=>[`
	span + span {
    ${e.col&&e.col?"margin-top: .5em":"margin-left: .2em"}
	}
`,{display:"flex",flexWrap:"wrap"},e.col?{flexDirection:"column"}:{flexDirection:"row"},e.floatLeft&&{float:"left"}]);var f=t("span").withConfig({displayName:"Tags___StyledSpan",componentId:"sc-1wzpm7b-2"})({fontSize:".9375rem","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",display:"inline"});const y=t.div.withConfig({displayName:"RightSidePanel__Grid",componentId:"sc-1pvd4ze-0"})({margin:"0",width:"33.333333%",marginTop:"1rem",borderRadius:"0.125rem",display:"none","@media (min-width: 768px)":{display:"block"}}),u=t.h3.withConfig({displayName:"RightSidePanel__Heading",componentId:"sc-1pvd4ze-1"})({fontSize:"1.1rem",textAlign:"center",marginBottom:"1rem"}),v=()=>{const{notify:e}=s(),{data:a,loading:o}=d({variables:{limit:10},onError:i=>{e(m(i),"error")}});return n(y,{children:l(_,{children:[n(u,{children:"Top Tags"}),o&&n(r,{size:"medium"}),!o&&a&&n(h,{col:!0,children:a.getAllTags.tags.map(i=>n(p,{label:i.name,href:`/tags/${i.name}`,count:i==null?void 0:i.questionCount},i._id))}),!o&&!(a!=null&&a.getAllTags)&&"No Tags created yet!"]})})};var _=t("div").withConfig({displayName:"RightSidePanel___StyledDiv",componentId:"sc-1pvd4ze-2"})({display:"none",minHeight:"45vh",padding:"1rem",borderRadius:"0.375rem","@media (min-width: 768px)":{display:"block"}});export{v as default};
