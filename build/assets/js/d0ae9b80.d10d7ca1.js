"use strict";(self.webpackChunkportal=self.webpackChunkportal||[]).push([[410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=m(n),u=r,d=h["".concat(c,".").concat(u)]||h[u]||l[u]||s;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const s={title:"Archiving",sidebar_position:2,description:"Archiving Phase",keywords:["Consensus","Archiving"]},o=void 0,i={unversionedId:"consensus/consensus/archiving",id:"consensus/consensus/archiving",title:"Archiving",description:"Archiving Phase",source:"@site/docs/consensus/consensus/archiving.md",sourceDirName:"consensus/consensus",slug:"/consensus/consensus/archiving",permalink:"/docs/consensus/consensus/archiving",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Archiving",sidebar_position:2,description:"Archiving Phase",keywords:["Consensus","Archiving"]},sidebar:"tutorialSidebar",previous:{title:"Cryptographic Primitives",permalink:"/docs/consensus/consensus/crypto_primitives"},next:{title:"Plotting",permalink:"/docs/consensus/consensus/plotting"}},c={},m=[{value:"Background",id:"background",level:2},{value:"Workflow",id:"workflow",level:2}],p={toc:m};function l(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Archiving")," is one of the three core processes in the Subspace consensus. It transforms the chain blocks at a configured depth (currently 100 blocks) from the tip of the chain into a canonical history ready to be distributed to farmers for storage."),(0,r.kt)("p",null,"The Archiving construction is primarily based on the paper ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://eprint.iacr.org/2021/1544"},"Information Dispersal with Provable Retrievability for Rollups")),". The key ideas we inherit from this paper is to view the data to be archived as a matrix and a \u201c1.5D approach\u201d with column-wise erasure coding and row-wise KZG commitment."),(0,r.kt)("p",null,"Combining the polynomial nature of the Reed-Solomon erasure code and KZG with the homomorphic properties of KZG guarantees consistency, retrievability, and efficient verifiability of the archived data."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"When a block reaches confirmation depth, its contents are added to a raw chain history buffer. Then, the buffer is sliced into ",(0,r.kt)("em",{parentName:"p"},"records"),". "),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"record")," of blockchain history is a vector of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mn",{parentName:"msup"},"15"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{15}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"15")))))))))))))," ",(0,r.kt)("em",{parentName:"p"},"chunks"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"chunk")," is the smallest atomic unit of data measurement in Subspace. A ",(0,r.kt)("em",{parentName:"p"},"chunk")," is a field element for KZG and is 254 bits in size. In most cases, we round it up to 32 bytes by padding with zero for convenience. "),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"piece")," is a ",(0,r.kt)("em",{parentName:"p"},"record")," concatenated with a ",(0,r.kt)("em",{parentName:"p"},"KZG commitment")," and a ",(0,r.kt)("em",{parentName:"p"},"witness")," of inclusion in a specific ",(0,r.kt)("em",{parentName:"p"},"segment"),".\n",(0,r.kt)("img",{alt:"Piece",src:n(9897).Z,width:"1258",height:"350"})),(0,r.kt)("p",null,"The Archiving process produces ",(0,r.kt)("em",{parentName:"p"},"segments")," of ",(0,r.kt)("em",{parentName:"p"},"pieces"),"."),(0,r.kt)("h2",{id:"workflow"},"Workflow"),(0,r.kt)("p",null,"The blockchain history data is eligible for archiving when it reaches the confirmation depth to ensure no forks and reorganizations. We currently archive segments of raw blockchain history of size 128 MiB, and the archiving process is triggered as soon as there are enough blocks at the current confirmation depth of at least 100 blocks from the tip to fill a segment. The Archiver performs the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Slice the Recorded History Segment into 128 source records, stacked on top of one another into a matrix (each row is a record)."),(0,r.kt)("li",{parentName:"ol"},"Commit to chunks of each source record (each row) under the KZG vector commitment scheme."),(0,r.kt)("li",{parentName:"ol"},"Erasure code each column by interpolating a polynomial over the source record chunks in that column and evaluating that polynomial on twice as many points. As a result, the matrix now has twice as many rows - 256 and consists of 128 source and 128 extended (parity) records."),(0,r.kt)("li",{parentName:"ol"},"Erasure code the source record commitments similarly: by interpolating a polynomial over the source record commitments in that column and evaluating that polynomial on twice as many points.")),(0,r.kt)("p",null,"Step 4 allows us to show that the erasure coding of data was performed correctly: the secret ingredient is the homomorphic property of KZG. As a result, the extended commitments (the yellow ones on the diagram below) obtained by erasure-coding the source commitments are the same as if we were to commit to the extended rows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Segment",src:n(123).Z,width:"1119",height:"680"})),(0,r.kt)("p",null,"After step 4, the Archiver has produced 256 records and 256 commitments to those records. "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"To tie them together into a segment, commit to the record commitments, and obtain the segment commitment. "),(0,r.kt)("li",{parentName:"ol"},"Compute a witness for each record commitment inclusion in the segment commitment.")),(0,r.kt)("p",null,"With this two-tier commitment, we can later show that a given chunk belongs to a specific record and that record belongs to an archived segment and, thus, to the canonical history of the chain."),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Build 256 pieces: each ",(0,r.kt)("em",{parentName:"li"},"piece")," consists of a ",(0,r.kt)("em",{parentName:"li"},"record")," of 1 MiB, a 48-byte commitment to record data and a 48-byte witness of inclusion in a segment."),(0,r.kt)("li",{parentName:"ol"},"Append the new pieces to the canonical history, and store the segment commitment in the chain state. ")),(0,r.kt)("p",null,"Once a segment has been archived and the pieces are ready for the farmers to store, the next phase is Plotting."),(0,r.kt)("p",null,"The segment commitment is also included in the successive segment to link back to the last segment and form the chain of segments that represent the canonical history of the blockchain."))}l.isMDXComponent=!0},123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Archived_Segment-19b06efa15e3d917e417187b87f12aca.png"},9897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Piece-14f5261dcf030e1a0f4e9810b5953148.png"}}]);