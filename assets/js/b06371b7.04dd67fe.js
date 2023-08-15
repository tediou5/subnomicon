"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=o,m=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={title:"Terminology",sidebar_position:2,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"]},a=void 0,s={unversionedId:"intro/terminology",id:"intro/terminology",title:"Terminology",description:"Definitions for all things Subspace",source:"@site/docs/intro/terminology.md",sourceDirName:"intro",slug:"/intro/terminology",permalink:"/docs/intro/terminology",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Terminology",sidebar_position:2,description:"Definitions for all things Subspace",keywords:["Terminology","Definitions","Glossary"]},sidebar:"tutorialSidebar",previous:{title:"Motivation",permalink:"/docs/intro/motivation"},next:{title:"Architecture Overview",permalink:"/docs/overview"}},c={},l=[{value:"Subspace",id:"subspace",level:2},{value:"Subspace Network",id:"subspace-network",level:2},{value:"Blockchain History",id:"blockchain-history",level:2},{value:"Blockchain State",id:"blockchain-state",level:2},{value:"Dilithium",id:"dilithium",level:2},{value:"Consensus Chain",id:"consensus-chain",level:2},{value:"DSN",id:"dsn",level:2},{value:"Domain",id:"domain",level:2},{value:"Domain Chain",id:"domain-chain",level:2},{value:"Domain Epoch",id:"domain-epoch",level:2},{value:"Node",id:"node",level:2},{value:"Farmer",id:"farmer",level:2},{value:"Domain Operator",id:"domain-operator",level:2},{value:"Timekeeper",id:"timekeeper",level:2},{value:"Client",id:"client",level:2},{value:"Archiving",id:"archiving",level:2},{value:"Archived History",id:"archived-history",level:2},{value:"Plotting",id:"plotting",level:2},{value:"Farming",id:"farming",level:2},{value:"Segment",id:"segment",level:2},{value:"Segment Header",id:"segment-header",level:2},{value:"Raw Record",id:"raw-record",level:2},{value:"Record",id:"record",level:2},{value:"Piece",id:"piece",level:2},{value:"Sector",id:"sector",level:2},{value:"Plot",id:"plot",level:2},{value:"Commitment",id:"commitment",level:2},{value:"Reconstruction",id:"reconstruction",level:2},{value:"SSC",id:"ssc",level:2},{value:"Subspace CLI",id:"subspace-cli",level:2}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"subspace"},"Subspace"),(0,o.kt)("p",null,"Typically encapsulates everything about the project and is not limited in scope just to the blockchain or any other component specifically. Often can be clarified to something more specific but is used interchangeably for simplicity"),(0,o.kt)("h2",{id:"subspace-network"},"Subspace Network"),(0,o.kt)("p",null,"Typically means a combination of Subspace consensus chain, domain chains and Distributed Storage Network as a whole system."),(0,o.kt)("h2",{id:"blockchain-history"},"Blockchain History"),(0,o.kt)("p",null,"An ordered collection of blocks of the blockchain, specifically in Subspace, means SCALE-encoded blocks of the blockchain. "),(0,o.kt)("h2",{id:"blockchain-state"},"Blockchain State"),(0,o.kt)("p",null,"The result of executing transactions on a blockchain (like state of account balances, smart contracts, etc.)"),(0,o.kt)("h2",{id:"dilithium"},"Dilithium"),(0,o.kt)("p",null,"The Subspace Network Proof-of-Archival-Storage consensus mechanism that describes Archiving, Plotting, Audit, Proving and Verificatio, including Proof-of-Space and Proof-of-Time components."),(0,o.kt)("h2",{id:"consensus-chain"},"Consensus Chain"),(0,o.kt)("p",null,"A blockchain over which farmers achieve consensus. A lightweight, quick to sync chain, free from most of the computation to reduce the storage and computation overhead for Farmers."),(0,o.kt)("h2",{id:"dsn"},"DSN"),(0,o.kt)("p",null,"Short for Distributed Storage Network, a network of Farmers that have plotted pieces of Archival History and serve them to Clients. The DSN handles data storage, retrieval and replication across the network."),(0,o.kt)("h2",{id:"domain"},"Domain"),(0,o.kt)("p",null,"An application-specific blockchain anchored and validated by the Subspace Network. Domains allow arbitrary computation and state transitions tailored to the needs of a specific application or use case. Each domain has its own gossip network (domain subnet) and a configurable runtime. Staked executors can opt-in to operate a domain as Domain Operators, collect compute fees from domain users, and challenge invalid state commitments."),(0,o.kt)("h2",{id:"domain-chain"},"Domain Chain"),(0,o.kt)("p",null,"An application-specific blockchain that operators use to run the state transitions over transaction bundles, that blindly follows the consensus of the Consensus Chain and deterministically executes transaction bundles in the order defined by the Consensus Chain."),(0,o.kt)("h2",{id:"domain-epoch"},"Domain Epoch"),(0,o.kt)("p",null,"An interval, in domain chain blocks, between each stake allocation re-adjustment. Operator stakes are fixed at the start of the epoch for its duration. At the end of each epoch, the stake distribution is adjusted based on new stake deposits, withdrawal requests and slashing events."),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("p",null,"A participant in the P2P network. A node connects to other nodes on the P2P network, maintains history and state, can do block production for consensus, all things around execution, serve as an endpoint for client or farmer, etc. Encompasses the various roles like Farmer, Domain Operator, Timekeeper, etc."),(0,o.kt)("h2",{id:"farmer"},"Farmer"),(0,o.kt)("p",null,"A role on the Subspace Network that is responsible for maintaining consensus (safety of the Consensus Chain). A Farmer plots pieces of Archival History to disk, farms the created plot for block rewards, joins the DSN as a node for data retrieval (for syncing nodes, other farmers and returning data to various Clients)."),(0,o.kt)("h2",{id:"domain-operator"},"Domain Operator"),(0,o.kt)("p",null,"A role on the Subspace Network that is responsible for running arbitrary computation on Domains, state transitions, maintaining state (liveness of the Execution Chain)."),(0,o.kt)("h2",{id:"timekeeper"},"Timekeeper"),(0,o.kt)("p",null,"A role on the Subspace Network that is responsible for running Proof-of-Time chain and maintaining the randomness beacon for the Consensus Chain."),(0,o.kt)("h2",{id:"client"},"Client"),(0,o.kt)("p",null,"A user of the Subspace Network that interacts with it through a light client like Substrate Connect or other frontend applications. Clients can submit transactions, query state, but don't participate directly in consensus or run full nodes. They rely on nodes like farmers for data retrieval."),(0,o.kt)("h2",{id:"archiving"},"Archiving"),(0,o.kt)("p",null,"An integral part of Dilithium consensus, a process of transforming Blockchain History into Archived History."),(0,o.kt)("h2",{id:"archived-history"},"Archived History"),(0,o.kt)("p",null,"The immutable ordered collection of blocks that have been archived and permanently stored in a redundant, verifiable and retrievable way across the DSN. Archived History is the result of the Archiving of blocks that are at a particular depth from the tip of the chain."),(0,o.kt)("h2",{id:"plotting"},"Plotting"),(0,o.kt)("p",null,"An integral part of Dilithium consensus, a process of creating and maintaining plots on disk by Farmers from Archived History. Plots allow efficient proofs of possession and retrievability of Archived History."),(0,o.kt)("h2",{id:"farming"},"Farming"),(0,o.kt)("p",null,"An integral part of Dilithium consensus, a process of participation in the consensus by solving a puzzle based on the previously created plot (during Plotting). Farmers compete to farm blocks and earn rewards by being the first to solve the puzzle and submit a valid proof."),(0,o.kt)("h2",{id:"segment"},"Segment"),(0,o.kt)("p",null,"A collection of (potentially partial) blocks of the blockchain history\nSpecifically in Subspace means two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recorded History Segment"),": a fixed-size portion of the Blockchain History in a buffer before Archiving. A Recorded History Segment consists of Raw Records."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Archived History Segment"),": a fixed-size portion of the Archived History. An Archived History Segment is a Recorded History Segment transformed by the Archiving process. An Archived History Segment consists of Pieces. An Archived History Segment can be later turned back into a Recorded History Segment History with Reconstructing process")),(0,o.kt)("h2",{id:"segment-header"},"Segment Header"),(0,o.kt)("p",null,"A compact header in an Archived History Segment containing the segment index, segment commitment, a pointer to the previous segment header and information about the progress of block archiving."),(0,o.kt)("h2",{id:"raw-record"},"Raw Record"),(0,o.kt)("p",null,"A fragment of Blockchain History, the \u201cuseful data\u201d for the PoAS consensus protocols before being archived."),(0,o.kt)("h2",{id:"record"},"Record"),(0,o.kt)("p",null,"A Raw Record that was transformed and prepared for Archiving."),(0,o.kt)("h2",{id:"piece"},"Piece"),(0,o.kt)("p",null,"The unit of measurement of Archived History, conceptually a piece of Archived History from which Archived History Segments are composed. Each Piece is composed of Record + Commitment + Witness"),(0,o.kt)("h2",{id:"sector"},"Sector"),(0,o.kt)("p",null,"A collection of encoded Pieces written to disk during Plotting that can be used for Farming. A sector contains encoded Record data from pieces, original piece commitments and witnesses and other metadata about stored pieces. A collection of Sectors comprises a Plot."),(0,o.kt)("h2",{id:"plot"},"Plot"),(0,o.kt)("p",null,"A collection of Sectors written to disk that can be used for Farming"),(0,o.kt)("h2",{id:"commitment"},"Commitment"),(0,o.kt)("p",null,"Specifically in Subspace in the context of Archiving implementation means two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Record Commitment:")," a KZG commitment to blockchain data in a Raw Record"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Segment Commitment:")," a KZG commitment to hashes of all Record Commitments in an Archived History Segment")),(0,o.kt)("h2",{id:"reconstruction"},"Reconstruction"),(0,o.kt)("p",null,"A process of transforming Archived History back into Blockchain History. Specifically, a process of transforming pieces of Archived History, one Archived History Segment at a time, back into blocks of the blockchain history that can be used for starting a new Full Node from genesis."),(0,o.kt)("h2",{id:"ssc"},"SSC"),(0,o.kt)("p",null,"Short for Subspace Credit, the native token of Subspace Network. SSC is used to pay transaction fees, participate in staking/farming, and more."),(0,o.kt)("h2",{id:"subspace-cli"},"Subspace CLI"),(0,o.kt)("p",null,"A Command Line Interface application automates the tasks of Subspace Farmers and Executors by running an instance of Farmer and Full Node within the same terminal instance"))}h.isMDXComponent=!0}}]);