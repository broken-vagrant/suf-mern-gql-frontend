var D=Object.defineProperty,T=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var Q=(n,e,i)=>e in n?D(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,w=(n,e)=>{for(var i in e||(e={}))E.call(e,i)&&Q(n,i,e[i]);if(x)for(var i of x(e))H.call(e,i)&&Q(n,i,e[i]);return n},L=(n,e)=>T(n,z(e));import{_ as o,L as k,Z as j,$,r as p}from"./vendor.d37175de.js";import{j as t,a,B as A,b as g,c as I,L as N,u as M,d as P,Q as q,e as W,f as R,A as O,D as V,g as G}from"./index.aa3f4cd4.js";import{M as U}from"./PostedBy.4f29a0a9.js";import{T as Z}from"./Tag.63c78e0e.js";const F=({sortBy:n,setSortBy:e})=>{const i=r=>{e(r.target.innerText.toUpperCase())};return t(J,{children:a(A,{children:[t(g,{active:n==="HOT",onClick:i,children:"Hot"}),t(g,{active:n==="VOTES",onClick:i,children:"Votes"}),t(g,{active:n==="VIEWS",onClick:i,children:"Views"}),t(g,{active:n==="NEWEST",onClick:i,children:"Newest"}),t(g,{active:n==="OLDEST",onClick:i,children:"Oldest"})]})})};var J=o("div").withConfig({displayName:"SortQuesButtonGroup___StyledDiv",componentId:"sc-12swsdt-0"})({display:"flex",justifyContent:"flex-end",marginTop:"1rem",marginBottom:"1rem",fontSize:".9375rem","@media (min-width: 640px)":{fontSize:"1rem"}});const K=o.div.withConfig({displayName:"QuestionCard__StatsContainer",componentId:"sc-1yatyyk-0"})({marginLeft:"0",marginRight:"0.25rem",textAlign:"center",fontSize:".8125rem","@media (min-width: 640px)":{marginLeft:"0.5rem",marginRight:"0.75rem"}}),X=o.div.withConfig({displayName:"QuestionCard__QuestionContainer",componentId:"sc-1yatyyk-1"})({width:"100%"}),Y=o.div.withConfig({displayName:"QuestionCard__Container",componentId:"sc-1yatyyk-2"})({display:"flex",padding:"0.25rem","@media (min-width: 640px)":{padding:"0.5rem"}}),tt=o.h3.withConfig({displayName:"QuestionCard__Question",componentId:"sc-1yatyyk-3"})({margin:"0",marginBottom:"0.5rem"}),et=({question:n})=>{const{_id:e,title:i,author:r,body:h,tags:f,points:_,views:d,answerCount:u,createdAt:l}=n;return a(Y,{children:[a(K,{children:[a("div",{children:[t(it,{children:_}),t("div",{children:"votes"})]}),a(nt,{children:[t(ot,{children:u}),t("div",{children:"answers"})]}),a("div",{children:[d," views"]})]}),a(X,{children:[t(tt,{children:t(at,{to:`/questions/${e}`,children:i})}),t(st,{children:h}),a(rt,{children:[t(dt,{children:f.map(y=>t(Z,{tag:"a",href:`/tags/${y}`,styles:{link:{margin:"0 .25em .25em"}},label:y},y))}),t(lt,{children:t(U,{username:r.username,userId:r._id,createdAt:l})})]})]})]})};var it=o("span").withConfig({displayName:"QuestionCard___StyledSpan",componentId:"sc-1yatyyk-4"})({display:"block","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",fontSize:".9375rem"}),nt=o("div").withConfig({displayName:"QuestionCard___StyledDiv",componentId:"sc-1yatyyk-5"})({marginTop:"0.5rem",marginBottom:"0.5rem"}),ot=o("span").withConfig({displayName:"QuestionCard___StyledSpan2",componentId:"sc-1yatyyk-6"})({display:"block","--tw-text-opacity":"1",color:"rgba(113, 128, 150, var(--tw-text-opacity))",fontSize:".9375rem"}),at=o(k).withConfig({displayName:"QuestionCard___StyledLink",componentId:"sc-1yatyyk-7"})({textDecoration:"none","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",fontWeight:"400",":hover":{"--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"},fontSize:"1.125rem"}),st=o("p").withConfig({displayName:"QuestionCard___StyledP",componentId:"sc-1yatyyk-8"})({margin:"0",paddingBottom:"0.25rem",fontSize:".9375rem"}),rt=o("div").withConfig({displayName:"QuestionCard___StyledDiv2",componentId:"sc-1yatyyk-9"})({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}),dt=o("div").withConfig({displayName:"QuestionCard___StyledDiv3",componentId:"sc-1yatyyk-10"})({float:"left",display:"flex",flexWrap:"wrap",alignItems:"center",gap:"0.5rem"}),lt=o("div").withConfig({displayName:"QuestionCard___StyledDiv4",componentId:"sc-1yatyyk-11"})({marginLeft:"auto",display:"flex",alignItems:"center",justifyContent:"flex-end",fontSize:".9375rem"});const ct=({handleLoadPosts:n,loading:e})=>t(mt,{children:a(yt,{onClick:n,disabled:e,children:[!e&&t(j,{}),e&&t(N,{size:"small",styles:{loaderIconWrapper:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",marginRight:"0.5rem"}}}),e?"Loading...":"Load More"]})});var mt=o("div").withConfig({displayName:"LoadMore___StyledDiv",componentId:"sc-1tombnz-0"})({display:"flex",justifyContent:"center",marginTop:"0.75rem",marginBottom:"0.75rem"}),yt=o(I).withConfig({displayName:"LoadMore___StyledButton",componentId:"sc-1tombnz-1"})({display:"flex",alignItems:"center",justifyContent:"center",paddingLeft:"1.5rem",paddingRight:"1.5rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",width:"50%","--tw-bg-opacity":"1",backgroundColor:"rgba(255, 255, 255, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"hsla(206, 100%, 40%, var(--tw-text-opacity))",border:"1px solid lightgray",":hover":{"--tw-bg-opacity":"1",backgroundColor:"hsla(206, 100%, 52%, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}});const pt=o.div.withConfig({displayName:"QuesList__QuestionListContainer",componentId:"sc-1tmwif6-0"})(["",""],{position:"relative",width:"100%",marginLeft:"0.25rem",marginRight:"0.25rem",marginTop:"1.5rem","@media (min-width: 640px)":{marginLeft:"0.75rem",marginRight:"0.75rem"}}),gt=o.div.withConfig({displayName:"QuesList__QuestionListHeader",componentId:"sc-1tmwif6-1"})(["",""],{display:"flex",justifyContent:"space-between",alignItems:"center"}),ut=o.div.withConfig({displayName:"QuesList__QuestionListBody",componentId:"sc-1tmwif6-2"})({minHeight:"80vh"}),xt=({tagFilterActive:n,searchFilterActive:e})=>{const{tagName:i,query:r}=$(),{clearEdit:h,notify:f}=M(),{user:_}=P(),[d,u]=p.exports.useState(null),[l,y]=p.exports.useState(q.Hot),[c,v]=p.exports.useState(1),[b,{data:m,loading:C}]=W({fetchPolicy:"network-only",onError:s=>{f(G(s),"error")}}),S=s=>{b({variables:w({},s)})};p.exports.useEffect(()=>{S({sortBy:l,page:1,limit:12,filterByTag:i,filterBySearch:r}),v(1),window.scrollTo(0,0)},[l,i,r]),p.exports.useEffect(()=>{m&&c===1&&u(m.getQuestions),m&&c!==1&&u(s=>L(w({},m.getQuestions),{questions:s.questions.concat(R(s.questions,m.getQuestions.questions))}))},[m]);const B=()=>{S({sortBy:l,page:c+1,limit:12,filterByTag:i,filterBySearch:r}),v(c+1)};return a(pt,{children:[a(gt,{children:[t(ht,{children:n?`Questions tagged [${i}]`:e?`Search results for "${r}"`:"All Questions"}),_?t(k,{to:"/ask",onClick:()=>h(),children:t(I,{children:"Ask Question"})}):t(O,{buttonType:"ask"})]}),t(F,{sortBy:l,setSortBy:y}),t(V,{}),a(ut,{children:[C&&c===1&&t(N,{}),d&&(d.questions.length!==0?d.questions.map(s=>t(et,{question:s},s==null?void 0:s._id)):t(ft,{children:n?`There are no questions tagged "${i}".`:e?`No matches found for your search "${r}".`:"No questions found."}))]}),d&&d.next&&t(ct,{loading:c!==1&&C,handleLoadPosts:B})]})};var ht=o("h2").withConfig({displayName:"QuesList___StyledH",componentId:"sc-1tmwif6-3"})({fontSize:"1.125rem",fontWeight:"400",margin:"0","@media (min-width: 640px)":{fontSize:"1.25rem"}}),ft=o("h3").withConfig({displayName:"QuesList___StyledH2",componentId:"sc-1tmwif6-4"})({textAlign:"center",marginTop:"2.5rem"});export{xt as default};
