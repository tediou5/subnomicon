"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9912:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Taxonomy",sidebar_position:2,description:"Domains Taxonomy",keywords:["DecEx","Domains"]},i=void 0,s={unversionedId:"decex/domains/taxonomy",id:"decex/domains/taxonomy",title:"Taxonomy",description:"Domains Taxonomy",source:"@site/docs/decex/domains/taxonomy.md",sourceDirName:"decex/domains",slug:"/decex/domains/taxonomy",permalink:"/docs/decex/domains/taxonomy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Taxonomy",sidebar_position:2,description:"Domains Taxonomy",keywords:["DecEx","Domains"]},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/decex/domains/overview"},next:{title:"Core EVM",permalink:"/docs/decex/domains/core_evm"}},l={},c=[{value:"Enshrined Rollups",id:"enshrined-rollups",level:2},{value:"Standard Rollups",id:"standard-rollups",level:2},{value:"Sovereign Rollups",id:"sovereign-rollups",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When compared to other ecosystems, domains are best understood along a spectrum of possible rollup architectures."),(0,o.kt)("h2",{id:"enshrined-rollups"},"Enshrined Rollups"),(0,o.kt)("p",null,"Domains are effectively enshrined rollups. An enshrined rollup is a special type of rollup that is directly supported and integrated into the base protocol of the underlying blockchain, ensuring that the rollup's features and functionality are maintained and enforced by the network's consensus rules. This built-in support enhances the rollup's security, interoperability, and adoption while still providing the benefits of a typical rollup, such as increased throughput and reduced transaction fees. "),(0,o.kt)("h2",{id:"standard-rollups"},"Standard Rollups"),(0,o.kt)("p",null,"While regular rollups on Ethereum are validated through smart contracts, domains are validated by the subspace core protocol itself, making them more similar to parachains on Polkadot. Unlike parachains, which have a monolithic validation model and a permissioned deployment system, domains support a modular validation framework and permissionless deployment process. Unlike Cosmos zones and Avalanche subnets, domains have shared-security and trust-minimized interoperability, since they all settle on the root chain. "),(0,o.kt)("h2",{id:"sovereign-rollups"},"Sovereign Rollups"),(0,o.kt)("p",null,"Similar to sovereign rollups on Celestia, domains also leverage the base layer protocol for consensus and data availability, but further extend this model to include a shared settlement layer as the default pattern. This is made possible by allowing operators to re-stake, as originally proposed by Free2Shard and later implemented within the EigenLayer protocol on Ethereum. Unlike Eigenlayer, which is implemented through smart contracts, Subspace enshrines the re-staking model within the semantics of the core protocol."))}p.isMDXComponent=!0}}]);