import{_ as a}from"./vendor.d37175de.js";import{h as l,a as o,F as y,j as t,i as c,k as n}from"./index.aa3f4cd4.js";const p=a.div.withConfig({displayName:"PostedBy__Details",componentId:"sc-1ee8js3-0"})({fontSize:".8125rem",flexGrow:"0",wordBreak:"break-all","@media (min-width: 768px)":{fontSize:".9375rem"}}),j=({username:e,userId:d,postType:r="asked",createdAt:i,updatedAt:s})=>o(m,{children:[t(v,{children:`${r} ${n(i)} ago`}),s&&i!==s&&o(_,{children:[`updated ${n(s)} ago`,t("br",{})]}),o(h,{children:[t(w,{src:`https://secure.gravatar.com/avatar/${d}?s=164&d=identicon`,alt:e,to:`/user/${e}`}),t(p,{children:t(c,{to:`/user/${e}`,children:t("span",{children:e})})})]})]}),B=({username:e,userId:d,postType:r="asked",createdAt:i})=>o(y,{children:[t(f,{src:`https://secure.gravatar.com/avatar/${d}?s=164&d=identicon`,alt:e,to:`/user/${e}`}),t(c,{to:`/user/${e}`,children:t("span",{children:e})}),"\xA0",t(g,{children:`${r} ${n(i)} ago`})]});var m=a("div").withConfig({displayName:"PostedBy___StyledDiv",componentId:"sc-1ee8js3-1"})({float:"right",marginLeft:"auto",maxWidth:"175px","@media (min-width: 768px)":{maxWidth:"200px"}}),v=a("div").withConfig({displayName:"PostedBy___StyledDiv2",componentId:"sc-1ee8js3-2"})({overflowWrap:"break-word","--tw-text-opacity":"1",color:"rgba(74, 85, 104, var(--tw-text-opacity))",fontSize:".8125rem"}),_=a("div").withConfig({displayName:"PostedBy___StyledDiv3",componentId:"sc-1ee8js3-3"})({"--tw-text-opacity":"1",color:"rgba(74, 85, 104, var(--tw-text-opacity))",fontSize:".8125rem"}),h=a("div").withConfig({displayName:"PostedBy___StyledDiv4",componentId:"sc-1ee8js3-4"})({display:"flex",alignItems:"flex-start",marginTop:"0.25rem"}),w=a(l).withConfig({displayName:"PostedBy___StyledAvatar",componentId:"sc-1ee8js3-5"})({width:"2.5rem"}),f=a(l).withConfig({displayName:"PostedBy___StyledAvatar2",componentId:"sc-1ee8js3-6"})({width:"1rem"}),g=a("span").withConfig({displayName:"PostedBy___StyledSpan",componentId:"sc-1ee8js3-7"})({"--tw-text-opacity":"1",color:"hsla(210, 8%, 45%, var(--tw-text-opacity))"});export{B as M,j as P};
