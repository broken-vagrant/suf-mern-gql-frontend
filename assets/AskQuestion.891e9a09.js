var U=Object.defineProperty,Z=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var $=(t,e,a)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))R.call(e,a)&&$(t,a,e[a]);if(D)for(var a of D(e))Y.call(e,a)&&$(t,a,e[a]);return t},x=(t,e)=>Z(t,X(e));var M=(t,e)=>{var a={};for(var s in t)R.call(t,s)&&e.indexOf(s)<0&&(a[s]=t[s]);if(t!=null&&D)for(var s of D(t))e.indexOf(s)<0&&Y.call(t,s)&&(a[s]=t[s]);return a};import{a0 as J,_ as p,R as O,r as A,e as ee,H as te,q as ne}from"./vendor.d37175de.js";import{a as S,j as r,X as oe,F as ae,I as ie,u as re,Y as se,Z as le,i as de,T as P,q as j,_ as ce,c as ue,g as H}from"./index.aa3f4cd4.js";import{C as me}from"./index.c2b75f21.js";function pe(t){return J({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(t)}const ge={"--tw-bg-opacity":"1",backgroundColor:"rgba(190, 227, 248, var(--tw-bg-opacity))",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(209, 100%, 26%, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"},outlineColor:"darkorange",fontSize:".8125rem",opacity:"0.75",borderStyle:"solid",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"hsla(209, 100%, 32%, var(--tw-border-opacity))",borderRadius:"0.125rem",padding:".1rem .5rem",textDecoration:"none"},G=t=>{const d=t,{label:e,onDelete:a}=d,s=M(d,["label","onDelete"]);return S(he,x(f({},s),{$_css:[ge,{display:"flex",alignItems:"center",height:"1.5rem",boxSizing:"content-box",margin:"2px",paddingLeft:"0.75rem",paddingRight:"0.25rem"}],children:[e,r(oe,{tag:"button",onClick:a,"aria-label":`remove ${e} tag`,children:r(pe,{})})]}))};var he=p("span").withConfig({displayName:"Chips___StyledSpan",componentId:"sc-927izd-0"})(["",""],t=>t.$_css);const fe=O.forwardRef(function(F,k){var y=F,{disabled:e,value:a,inputValue:s,onInputChange:d,onChange:I,renderInput:g,renderTags:v,fullWidth:W,ChipProps:c}=y,Q=M(y,["disabled","value","inputValue","onInputChange","onChange","renderInput","renderTags","fullWidth","ChipProps"]);const N=!e&&(s||a.length>0),[u,E]=A.exports.useState(a),[_,b]=A.exports.useState(s||""),C=(n,i,h,B)=>{u!==i&&(I&&I(n,i,h,B),E(i))},T=n=>i=>{const h=u.slice();h.splice(n,1),C(i,h,"removeOption",{option:u[n]})},L=n=>{b(""),d&&d(n,"","clear"),C(n,[],"clear")},z=n=>{const i=n.target.value;_!==i&&(b(i),d&&d(n,i,"input"))},q=O.useCallback((n,i)=>{let h;i?h=i:h="",b(h),d&&d(n,i,"reset")},[b,d]),o=(n,i,h="selectOption")=>{let B=Array.isArray(u)?u.slice():[];u.findIndex(K=>K===i)===-1&&(B.push(i),C(n,B,h,{option:i})),q(n,"")},l=n=>{switch(n.key){case"Enter":if(n.preventDefault(),e||!_)return;o(n,_,"selectOption");break;default:return}},w=({index:n})=>({key:n,"data-tag-index":n,tabIndex:-1,onDelete:T(n)}),m=()=>({tabIndex:-1,onClick:L});let V;return u.length>0&&(v?V=v(u,w):V=u.map((n,i)=>r(G,f(f({label:n},w({index:i})),c)))),r(ae,{children:r("div",{onKeyDown:l,children:g(f({tag:"input",disabled:e,fullWidth:!0,ref:k,value:_,onChange:z,InputProps:{startAdornment:V,endAdornment:N?r(ye,x(f({},m()),{children:r(ee,{})})):null},styles:{input:{flexGrow:"1",width:"0",minWidth:"8em"},inputRoot:{flexWrap:"wrap"}}},Q))})})});var ye=p(ie).withConfig({displayName:"AutoComplete___StyledInputAdornment",componentId:"sc-6amhk0-0"})({cursor:"pointer",fontSize:"1.5em"});const De=()=>{var z,q;const t=te(),{editingQuestion:e,clearEdit:a,notify:s}=re(),[d,I]=A.exports.useState(""),[g,v]=A.exports.useState(e?e.tags:[]),[W,c]=A.exports.useState(""),{register:Q,handleSubmit:k,reset:F,formState:{errors:y}}=ne({defaultValues:{title:e?e.title:"",body:e?e.body:""},mode:"onChange"}),[N,{loading:u}]=se({onError:o=>{c(H(o))}}),[E,{loading:_}]=le({onError:o=>{c(H(o))}}),b=({title:o,body:l})=>{if(g.length===0)return c("Atleast one tag must be added.");N({variables:{title:o,body:l,tags:g},update:(w,{data:m})=>{t(`/questions/${m==null?void 0:m.postQuestion._id}`),F(),s("Question posted!")}})},C=({title:o,body:l})=>{if(g.length===0)return c("Atleast one tag must be added.");E({variables:{quesId:e.quesId,title:o,body:l,tags:g},update:(w,{data:m})=>{t(`/questions/${m==null?void 0:m.editQuestion._id}`),a(),s("Edit successful!")}})},T=o=>{const l=o.toLowerCase().trim();if(!/^[a-zA-Z0-9-]*$/.test(o))return c("Only alphanumeric characters & dash are allowed.");if(l.length>15)return c("A single tag can't have more than 15 characters.");I(l)},L=o=>{if(o.length<g.length){v(o);return}if(o.length>5){I(""),c("Max 5 tags can be added! Not more than that.");return}if(g.includes(d))return c("Duplicate tag found! You can't add the same tag twice.");v(o)};return S(me,{children:[S(de,{to:_?`/questions/${e.quesId}`:"/",children:[" ","< Back"]}),r(_e,{children:e?"Edit Your Question":"Ask a public question"}),S(Se,{onSubmit:k(e?C:b),children:[S(be,{children:[r(we,{children:"Be specific and imagine you\u2019re asking a question to another person"}),r(P,x(f({tag:"input",required:!0,fullWidth:!0},Q("title",j({name:"title",min:50}))),{placeholder:"Enter atleast 50 characters",type:"text",label:"Title",error:"title"in y,helperText:"title"in y?(z=y.title)==null?void 0:z.message:""}))]}),S(xe,{children:[r(Ie,{children:"Include all the information someone would need to answer your question"}),r(P,x(f({tag:"textarea",required:!0,rows:5,fullWidth:!0},Q("body",j({name:"body",min:100}))),{placeholder:"Enter atleast 100 characters",label:"Body",error:"body"in y,helperText:"body"in y?(q=y.body)==null?void 0:q.message:""}))]}),S(ve,{children:[r(Ce,{children:"Add up to 5 tags to describe what your question is about"}),r(fe,{value:g,inputValue:d,onInputChange:(o,l)=>{T(l)},onChange:(o,l)=>{L(l)},renderInput:o=>r(P,x(f({},o),{label:"Tags",placeholder:"press Enter to add tags",fullWidth:!0})),renderTags:(o,l)=>g.map((w,m)=>r(G,f({label:w,color:"primary",size:"small"},l({index:m}))))})]}),r(Ae,{type:"submit",disabled:u||_,children:e?"Update Your Question":"Post Your Question"}),r(ce,{errorMsg:W,clearErrorMsg:()=>c("")})]})]})};var _e=p("h1").withConfig({displayName:"AskQuestion___StyledH",componentId:"sc-1a45n54-0"})({fontSize:"1.25rem"}),Se=p("form").withConfig({displayName:"AskQuestion___StyledForm",componentId:"sc-1a45n54-1"})({marginTop:"1rem"}),be=p("div").withConfig({displayName:"AskQuestion___StyledDiv",componentId:"sc-1a45n54-2"})({marginBottom:"1rem"}),we=p("p").withConfig({displayName:"AskQuestion___StyledP",componentId:"sc-1a45n54-3"})({fontSize:".8125rem",marginBottom:"0.5rem","@media (min-width: 768px)":{fontSize:".9375rem"}}),xe=p("div").withConfig({displayName:"AskQuestion___StyledDiv2",componentId:"sc-1a45n54-4"})({marginBottom:"1rem"}),Ie=p("p").withConfig({displayName:"AskQuestion___StyledP2",componentId:"sc-1a45n54-5"})({fontSize:".8125rem",marginBottom:"0.5rem","@media (min-width: 768px)":{fontSize:".9375rem"}}),ve=p("div").withConfig({displayName:"AskQuestion___StyledDiv3",componentId:"sc-1a45n54-6"})({marginBottom:"1rem"}),Ce=p("p").withConfig({displayName:"AskQuestion___StyledP3",componentId:"sc-1a45n54-7"})({fontSize:".8125rem",marginBottom:"0.5rem","@media (min-width: 768px)":{fontSize:".9375rem"}}),Ae=p(ue).withConfig({displayName:"AskQuestion___StyledButton",componentId:"sc-1a45n54-8"})({fontSize:".9375rem","@media (min-width: 640px)":{fontSize:"1rem"}});export{De as default};
