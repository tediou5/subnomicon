"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Architecture Overview",sidebar_position:2,description:"Overview the Subspace Network",keywords:["Architecture","Overview"]},o="The Subspace Network Stack",s={unversionedId:"overview",id:"overview",title:"Architecture Overview",description:"Overview the Subspace Network",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/docs/overview",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Architecture Overview",sidebar_position:2,description:"Overview the Subspace Network",keywords:["Architecture","Overview"]},sidebar:"tutorialSidebar",previous:{title:"Terminology",permalink:"/docs/intro/terminology"},next:{title:"Dilithium Consensus",permalink:"/docs/category/dilithium-consensus"}},l={},c=[{value:"Permissionless Peer-to-peer Network",id:"permissionless-peer-to-peer-network",level:2},{value:"Data Availability",id:"data-availability",level:2},{value:"EVM",id:"evm",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-subspace-network-stack"},"The Subspace Network Stack"),(0,a.kt)("p",null,"Subspace is a modular blockchain network, divided into a base-layer root chain, known as the core protocol, and a nearly unlimited number of secondary execution chains, known as domains. The core protocol manages consensus, data availability, and settlement for transaction bundles, which are executed on their respective domains by operators. Domains are essentially enshrined rollups that can support any conceivable state transition framework and smart contract execution environment."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ModularStack",src:r(1587).Z,width:"2299",height:"2389"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"App layer allows to build any conceivable application fostering new opportunities in automated transactions and agreements, governance, gaming, and virtual economies.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Domains support any state transition framework and smart contract execution environment enabling the App layer and integration and interoperability across different blockchains.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Consensus layer promotes decentralized security and fairness with the Dilithium protocol allowing anyone with an SSD to participate. Designed with scalability in mind it supports high-throughput transaction processing."))),(0,a.kt)("h2",{id:"permissionless-peer-to-peer-network"},"Permissionless Peer-to-peer Network"),(0,a.kt)("p",null,"The Subspace Netwok is a permissionless peer-to-peer network where any peer can participate as a farmer by storing data and proposing new blocks or as an operator by executing transactions."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.subspace.network/docs/protocol/cli#system-requirements"},"hardware requirements")," for farmers are minimal, requiring only an SSD drive and commodity CPU to participate, making it one of the most decentralized blockchain networks."),(0,a.kt)("p",null,"Operators are free to choose any infrastructure that meets their performance and cost requirements to run their domains."),(0,a.kt)("h2",{id:"data-availability"},"Data Availability"),(0,a.kt)("p",null,"The DSN ensures all chain is stored in a load-balanced, fault-tolerant, and efficiently retrievable manner across all farmers."),(0,a.kt)("p",null,"Farmers are incentivized to store data through block rewards and fees. They do not have to store the blockchain history alongside their plot and can dedicate all of the available space to farming."),(0,a.kt)("h2",{id:"evm"},"EVM"),(0,a.kt)("p",null,"As the first execution domain launched with Subspace Network, the EVM domain supports running Ethereum smart contracts and executing Ethereum transactions. This allows Ethereum dApps and DeFi protocols to run on Subspace with significantly higher throughput, lower costs, and improved scalability."))}u.isMDXComponent=!0},1587:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Modular_Stack-94b3adc45bd666e4d021f14b223b9be3.png"}}]);