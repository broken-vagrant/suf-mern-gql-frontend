import{_ as e,$ as C,r as a,L as I}from"./vendor.d37175de.js";import{i as x,a as i,j as t,k as h,u as N,n as z,L as b,D as d,g as D}from"./index.aa3f4cd4.js";const A=e.div.withConfig({displayName:"RecentQuestions__PointsBox",componentId:"sc-1ust9d2-0"})(()=>[{display:"inline-flex",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderWidth:"1px",borderStyle:"solid","--tw-border-opacity":"1",borderColor:"hsla(209, 100%, 26%, var(--tw-border-opacity))",borderRadius:"0.375rem",lineHeight:"1.2em"}]),p=({creedo:n})=>i(L,{children:[i(R,{children:[t(A,{children:n.points}),t(B,{to:`/questions/${n._id}`,children:n.title})]}),i(H,{children:[h(n.createdAt)," ago"]})]});var L=e("div").withConfig({displayName:"RecentQuestions___StyledDiv",componentId:"sc-1ust9d2-1"})({display:"flex",justifyContent:"space-between",paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.75rem",paddingBottom:"0.75rem",alignItems:"center"}),R=e("div").withConfig({displayName:"RecentQuestions___StyledDiv2",componentId:"sc-1ust9d2-2"})({display:"flex",alignItems:"center",flexBasis:"80%",flexGrow:"0",flexShrink:"0"}),B=e(x).withConfig({displayName:"RecentQuestions___StyledLink",componentId:"sc-1ust9d2-3"})({fontWeight:"400",marginLeft:"0.5rem"}),H=e("span").withConfig({displayName:"RecentQuestions___StyledSpan",componentId:"sc-1ust9d2-4"})({fontSize:".8125rem","@media (min-width: 768px)":{fontSize:".9375rem"}});const P=e.div.withConfig({displayName:"User__UserInfo",componentId:"sc-zeesr7-0"})(["",""],{display:"flex",gap:"2.5rem",color:"inherit",alignItems:"center"}),Q=e.div.withConfig({displayName:"User__UserActivity",componentId:"sc-zeesr7-1"})(["",""],{marginTop:"1rem"}),T=e.div.withConfig({displayName:"User__UserAvatar",componentId:"sc-zeesr7-2"})(["",""],{"--tw-bg-opacity":"0.5",backgroundColor:"rgba(190, 227, 248, var(--tw-bg-opacity))",height:"14rem",width:"12rem",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",borderRadius:"0.375rem",marginLeft:"auto",marginRight:"auto"}),k=e.div.withConfig({displayName:"User__UserCard",componentId:"sc-zeesr7-3"})(["",""],{width:"100%",marginTop:"1rem",marginBottom:"1rem",marginLeft:"0.25rem",marginRight:"0.25rem",fontSize:".9375rem","@media (min-width: 640px)":{marginLeft:"0.5rem"},"@media (min-width: 768px)":{fontSize:"1rem"}}),ie=()=>{const{notify:n}=N(),{username:s}=C(),[l,_]=a.exports.useState(null),[g,{data:o,loading:y}]=z({onError:r=>{n(D(r),"error")}});if(a.exports.useEffect(()=>{s&&g({variables:{username:s}})},[s]),a.exports.useEffect(()=>{o&&_(o.getUser)},[o]),y||!l)return t(b,{});const{_id:f,username:v,createdAt:S,rep:w,totalQuestions:u,totalAnswers:U,recentQuestions:m,recentAnswers:c}=l;return i(k,{children:[i(T,{children:[t(I,{to:`/user/${s}`,children:t("img",{src:`https://secure.gravatar.com/avatar/${f}?s=164&d=identicon`,alt:s})}),i($,{children:[w," ",t(j,{children:"REPUTATION"})]})]}),i(E,{children:[i(P,{children:[i("div",{children:[t(W,{children:v}),i(F,{children:["member for ",h(S)]})]}),i(G,{children:[i("div",{style:{marginRight:10},children:[t(M,{children:U}),t("span",{children:"answers"})]}),i("div",{children:[t(O,{children:u}),t("span",{children:"questions"})]})]})]}),i(Q,{children:[i(J,{children:[t(K,{children:"Last Asked Questions"}),t(d,{}),m.length!==0?m.map(r=>i("div",{children:[t(p,{creedo:r}),t(V,{})]},r==null?void 0:r._id)):t(X,{children:"No questions asked yet."})]}),i("div",{children:[t(Y,{children:"Last Answered Questions"}),t(d,{}),c.length!==0?c.map(r=>i("div",{children:[t(p,{creedo:r}),t(Z,{})]},r==null?void 0:r._id)):t(q,{children:"No questions answered yet."})]})]})]})]})};var $=e("p").withConfig({displayName:"User___StyledP",componentId:"sc-zeesr7-4"})({fontSize:"1.25rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),j=e("span").withConfig({displayName:"User___StyledSpan",componentId:"sc-zeesr7-5"})({fontSize:".9375rem"}),E=e("div").withConfig({displayName:"User___StyledDiv",componentId:"sc-zeesr7-6"})({flex:"1 1 0%",padding:"0.5rem","@media (min-width: 768px)":{padding:"1rem"}}),W=e("h1").withConfig({displayName:"User___StyledH",componentId:"sc-zeesr7-7"})({fontSize:"1.5rem","--tw-text-opacity":"1",color:"hsla(209, 100%, 32%, var(--tw-text-opacity))"}),F=e("span").withConfig({displayName:"User___StyledSpan2",componentId:"sc-zeesr7-8"})({color:"inherit"}),G=e("div").withConfig({displayName:"User___StyledDiv2",componentId:"sc-zeesr7-9"})({display:"flex",textAlign:"center"}),M=e("h2").withConfig({displayName:"User___StyledH2",componentId:"sc-zeesr7-10"})({marginTop:"0",marginBottom:"0"}),O=e("h2").withConfig({displayName:"User___StyledH3",componentId:"sc-zeesr7-11"})({marginTop:"0",marginBottom:"0"}),J=e("div").withConfig({displayName:"User___StyledDiv3",componentId:"sc-zeesr7-12"})({marginBottom:"1.25rem"}),K=e("h3").withConfig({displayName:"User___StyledH4",componentId:"sc-zeesr7-13"})({fontWeight:"700"}),V=e(d).withConfig({displayName:"User___StyledDivider",componentId:"sc-zeesr7-14"})({"--tw-border-opacity":"1",borderColor:"hsla(210, 8%, 90%, var(--tw-border-opacity))"}),X=e("p").withConfig({displayName:"User___StyledP2",componentId:"sc-zeesr7-15"})({marginTop:"0.5rem",marginBottom:"0.5rem",textAlign:"center"}),Y=e("h3").withConfig({displayName:"User___StyledH5",componentId:"sc-zeesr7-16"})({fontWeight:"700"}),Z=e(d).withConfig({displayName:"User___StyledDivider2",componentId:"sc-zeesr7-17"})({"--tw-border-opacity":"1",borderColor:"hsla(210, 8%, 90%, var(--tw-border-opacity))"}),q=e("p").withConfig({displayName:"User___StyledP3",componentId:"sc-zeesr7-18"})({marginTop:"0.5rem",marginBottom:"0.5rem",textAlign:"center"});export{ie as default};
