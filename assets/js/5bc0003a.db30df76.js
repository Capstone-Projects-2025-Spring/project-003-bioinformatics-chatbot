"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[635],{29122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(74848),s=n(28453);const a={sidebar_position:2},i="System Block Diagram",o={id:"requirements/system-block-diagram",title:"System Block Diagram",description:"The block diagram illustrates a system designed to answer user questions. The system consists of four main components: Frontend Application, Server, Indexed Documents Database, and Large Language Model (LLM).",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/system-block-diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"ahgoldmeer",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/general-requirements"}},d={},c=[{value:"Diagram",id:"diagram",level:2},{value:"Frontend Application",id:"frontend-application",level:2},{value:"Server",id:"server",level:2},{value:"Indexed Documents Database",id:"indexed-documents-database",level:2},{value:"Large Language Model (LLM)",id:"large-language-model-llm",level:2}];function l(e){const t={em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"system-block-diagram",children:"System Block Diagram"}),"\n",(0,r.jsxs)(t.p,{children:["The block diagram illustrates a system designed to answer user questions. The system consists of four main components: ",(0,r.jsx)(t.strong,{children:"Frontend Application"}),", ",(0,r.jsx)(t.strong,{children:"Server"}),", ",(0,r.jsx)(t.strong,{children:"Indexed Documents Database"}),", and ",(0,r.jsx)(t.strong,{children:"Large Language Model (LLM)"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"diagram",children:"Diagram"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.img,{alt:"Figure 1: System Block Diagram",src:n(36706).A+"",width:"1437",height:"335"}),"\n",(0,r.jsx)(t.em,{children:"Figure 1: System Block Diagram"})]}),"\n",(0,r.jsx)(t.h2,{id:"frontend-application",children:"Frontend Application"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Frontend Application"})," serves as the user interface for interacting with the system. Users submit their queries through this interface, which then forwards the requests to the ",(0,r.jsx)(t.strong,{children:"Server"}),". Once a response is generated, the Frontend Application displays the answer to the user."]}),"\n",(0,r.jsx)(t.h2,{id:"server",children:"Server"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Server"})," acts as the central processing unit of the system. It receives queries from the Frontend Application and determines how to handle them."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The Server first checks the ",(0,r.jsx)(t.strong,{children:"Indexed Documents Database"})," for relevant documents.","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["If relevant documents are found, they are retrieved and used to construct a prompt for the ",(0,r.jsx)(t.strong,{children:"Large Language Model (LLM)"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"If no relevant documents are found, the Server responds with \u201cI don\u2019t know.\u201d"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"After the LLM generates an answer, the Server forwards the response to the Frontend Application."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"indexed-documents-database",children:"Indexed Documents Database"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Indexed Documents Database"})," stores and organizes documents in a way that allows efficient retrieval. When a query is received, the Server searches this database to find relevant documents. These documents are then used to enrich the LLM\u2019s prompt, improving the quality and accuracy of the generated response."]}),"\n",(0,r.jsx)(t.h2,{id:"large-language-model-llm",children:"Large Language Model (LLM)"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"Large Language Model (LLM)"})," is responsible for generating answers based on the retrieved documents. When prompted by the Server, the LLM processes the input and produces a response. The generated answer is then sent back to the Server for delivery to the user via the Frontend Application. If no relevant documents are available, the LLM is not prompted."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},36706:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/Block Diagram-e2e8dcb8d8bf5812caab545a3ded1f07.png"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);