"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var a=r(7462),o=(r(7294),r(3905));const n={title:"Introduction",sidebar_position:1,description:"Intro to the Subspace Network Protocol",keywords:["Introduction","Welcome"]},i="The Subspace Protocol",c={unversionedId:"intro",id:"intro",title:"Introduction",description:"Intro to the Subspace Network Protocol",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"Intro to the Subspace Network Protocol",keywords:["Introduction","Welcome"]},sidebar:"tutorialSidebar",next:{title:"Architecture Overview",permalink:"/docs/overview"}},s={},l=[{value:"Scope",id:"scope",level:2},{value:"Learn About the Subspace Network",id:"learn-about-the-subspace-network",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-subspace-protocol"},"The Subspace Protocol"),(0,o.kt)("p",null,"Subspace is the first layer-one blockchain that is able to fully resolve the blockchain trilemma.\n",(0,o.kt)("img",{alt:"Trilemma",src:r(3702).Z,width:"500",height:"433"})),(0,o.kt)("p",null,"We have built Subspace from first principles to achieve scalability, security and decentralization simultaneously. At its core, Subspace introduces a novel storage-based consensus protocol that separates consensus from execution. This allows Subspace to scale transaction throughput and storage requirements independently while maintaining a fully decentralized blockchain."),(0,o.kt)("h2",{id:"scope"},"Scope"),(0,o.kt)("p",null,"Subnomicon provides a comprehensive overview of the Subspace Protocol, covering the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/overview"},"Architecture Overview")," - ",(0,o.kt)("em",{parentName:"li"},"The Subspace modular architecture.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/advancements"},"Advancing Blockchain")," - ",(0,o.kt)("em",{parentName:"li"},"How Subspace advances the state of blockchain technology.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/category/dilithium-consensus"},"Consensus Mechanism")," - ",(0,o.kt)("em",{parentName:"li"},"How Subspace achieves consensus through its storage-based design.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/category/network-architecture"},"Network Architecture")," - ",(0,o.kt)("em",{parentName:"li"},"How Subspace is structured as a decentralized network.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/category/decoupled-execution"},"Decoupled Execution")," - ",(0,o.kt)("em",{parentName:"li"},"How Subspace separates consensus and computation.")),(0,o.kt)("li",{parentName:"ol"},"Scalability (Coming soon) - ",(0,o.kt)("em",{parentName:"li"},"How Subspace achieves unprecedented scale.")),(0,o.kt)("li",{parentName:"ol"},"Blockspace Marketplace (Coming soon) - ",(0,o.kt)("em",{parentName:"li"},"How Subspace prices blockspace through a two-sided marketplace.")),(0,o.kt)("li",{parentName:"ol"},"Governance (Coming soon) - ",(0,o.kt)("em",{parentName:"li"},"How Subspace protocol is governed by the community."))),(0,o.kt)("h2",{id:"learn-about-the-subspace-network"},"Learn About the Subspace Network"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://subspace.network/technology"},"What is the Subspace Network")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://subspace.network/faq"},"Frequently Asked Questions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://subspace.network/news/subspace-network-whitepaper"},"Whitepaper - ",(0,o.kt)("em",{parentName:"a"},"Summarized"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://assets.website-files.com/61526a2af87a54e565b0ae92/617759c00edd0e3bd279aa29_Subspace_%20A%20solution%20to%20the%20farmer%27s%20dilemma.pdf"},"Whitepaper - ",(0,o.kt)("em",{parentName:"a"},"Full Length")))))}u.isMDXComponent=!0},3702:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Trilemma-8fd0e2c7f9c45aface119f9120fc71d5.png"}}]);