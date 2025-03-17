"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4260],{18837:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=s(74848),r=s(28453);const o={sidebar_position:1},i="Component and Technology Overview",a={id:"system-architecture/component-overview",title:"Component and Technology Overview",description:"This document provides an overview of the key components in the system and the technologies used.",source:"@site/docs/system-architecture/component-overview.md",sourceDirName:"system-architecture",slug:"/system-architecture/component-overview",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/component-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/component-overview.md",tags:[],version:"current",lastUpdatedBy:"Ishmam Kabir",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-003-bioinformatics-chatbot/docs/category/system-architecture"},next:{title:"Class Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Class Diagram"}},l={},c=[{value:"Frontend Application",id:"frontend-application",level:2},{value:"<strong>Technology: React with React Router (JavaScript)</strong>",id:"technology-react-with-react-router-javascript",level:3},{value:"<strong>Key Features:</strong>",id:"key-features",level:4},{value:"Server",id:"server",level:2},{value:"<strong>Technology: Flask (Python)</strong>",id:"technology-flask-python",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-1",level:4},{value:"Indexed Documents Database",id:"indexed-documents-database",level:2},{value:"<strong>Technology: PostgreSQL</strong>",id:"technology-postgresql",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-2",level:4},{value:"Large Language Model (LLM)",id:"large-language-model-llm",level:2},{value:"<strong>Technology: DeepSeek / Llama</strong>",id:"technology-deepseek--llama",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-3",level:4},{value:"Hosting and Deployment",id:"hosting-and-deployment",level:2},{value:"<strong>Technology: GitHub Pages (Frontend), Local Server (Backend, Database, LLM)</strong>",id:"technology-github-pages-frontend-local-server-backend-database-llm",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-4",level:4},{value:"Developer Tooling and Workflow",id:"developer-tooling-and-workflow",level:2},{value:"How Technologies Support System Requirements",id:"how-technologies-support-system-requirements",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"component-and-technology-overview",children:"Component and Technology Overview"}),"\n",(0,t.jsx)(n.p,{children:"This document provides an overview of the key components in the system and the technologies used."}),"\n",(0,t.jsx)(n.h2,{id:"frontend-application",children:"Frontend Application"}),"\n",(0,t.jsx)(n.h3,{id:"technology-react-with-react-router-javascript",children:(0,t.jsx)(n.strong,{children:"Technology: React with React Router (JavaScript)"})}),"\n",(0,t.jsx)(n.p,{children:"The frontend is built using React, offering a component-based architecture for interactive user interfaces. React Router enables seamless navigation within the application."}),"\n",(0,t.jsx)(n.h4,{id:"key-features",children:(0,t.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Component-Based Design:"})," Modular and reusable components for maintainability and scalability."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"State Management:"})," Utilizes React Hooks like ",(0,t.jsx)(n.code,{children:"useState"}),", ",(0,t.jsx)(n.code,{children:"useEffect"}),", for efficient state handling."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Routing:"})," React Router enables smooth navigation between pages."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"server",children:"Server"}),"\n",(0,t.jsx)(n.h3,{id:"technology-flask-python",children:(0,t.jsx)(n.strong,{children:"Technology: Flask (Python)"})}),"\n",(0,t.jsx)(n.p,{children:"The backend processes user queries, retrieves relevant data, adds new documents, and communicates with the LLM."}),"\n",(0,t.jsx)(n.h4,{id:"key-features-1",children:(0,t.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Query Processing:"})," Parses and validates user queries before searching for relevant documents."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Document Retrieval:"})," Interacts with the ",(0,t.jsx)(n.strong,{children:"Indexed Documents Database"})," to fetch relevant information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Response Handling:"})," Constructs a prompt for the ",(0,t.jsx)(n.strong,{children:"LLM"})," and returns the generated answer to the frontend."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Error Handling & Logging:"})," Implements monitoring, logging, and error handling for reliability."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Admin Controls:"})," Allows administrators to add new documents to the database, ensuring the system stays up to date."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"indexed-documents-database",children:"Indexed Documents Database"}),"\n",(0,t.jsx)(n.h3,{id:"technology-postgresql",children:(0,t.jsx)(n.strong,{children:"Technology: PostgreSQL"})}),"\n",(0,t.jsx)(n.p,{children:"The database stores indexed documents and enables efficient retrieval based on user queries."}),"\n",(0,t.jsx)(n.h4,{id:"key-features-2",children:(0,t.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Text Search:"})," Quickly finds relevant documents based on query matching."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Document Updates:"})," Allows continuous addition and modification of indexed documents."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"large-language-model-llm",children:"Large Language Model (LLM)"}),"\n",(0,t.jsx)(n.h3,{id:"technology-deepseek--llama",children:(0,t.jsx)(n.strong,{children:"Technology: DeepSeek / Llama"})}),"\n",(0,t.jsx)(n.p,{children:"The LLM generates answers by processing the prompt constructed using retrieved documents."}),"\n",(0,t.jsx)(n.h4,{id:"key-features-3",children:(0,t.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Context-Aware Responses:"})," Uses relevant documents to improve the accuracy of answers."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"API-Based Access:"})," Communicates with the LLM hosted locally via API calls."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"hosting-and-deployment",children:"Hosting and Deployment"}),"\n",(0,t.jsx)(n.h3,{id:"technology-github-pages-frontend-local-server-backend-database-llm",children:(0,t.jsx)(n.strong,{children:"Technology: GitHub Pages (Frontend), Local Server (Backend, Database, LLM)"})}),"\n",(0,t.jsxs)(n.p,{children:["The frontend is hosted on ",(0,t.jsx)(n.strong,{children:"GitHub Pages"}),", while the backend, database, and LLM run on a ",(0,t.jsx)(n.strong,{children:"local server"}),", ensuring full control over data processing and model execution."]}),"\n",(0,t.jsx)(n.h4,{id:"key-features-4",children:(0,t.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CI/CD Pipelines:"})," Automates deployment from ",(0,t.jsx)(n.strong,{children:"GitHub"})," to ensure that the latest changes are live with minimal manual intervention."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Self-Hosted Backend & Database:"})," Ensures data privacy, reduces third-party dependencies, and allows for fine-tuned optimization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"LLM Hosting:"})," Runs locally on your own infrastructure, enabling fast and offline-capable inference without relying on external APIs. This setup is cost-effective, especially for smaller-scale applications, as it eliminates ongoing API costs. However, it may require significant local compute resources, especially for larger models."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"developer-tooling-and-workflow",children:"Developer Tooling and Workflow"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"GitHub:"})," Manages version control and collaboration."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Jira:"})," Used for project management and task tracking."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ESLint & Prettier:"})," Enforces consistent code formatting and quality."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Docker:"})," Containerizes services for easy deployment."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-technologies-support-system-requirements",children:"How Technologies Support System Requirements"}),"\n",(0,t.jsx)(n.p,{children:"This stack ensures a scalable, efficient, and high-performance system for answering user queries."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"React + Flask + PostgreSQL:"})," React enables an interactive UI, while Flask handles backend queries and PostgreSQL efficiently stores and retrieves documents."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Indexed Documents + LLM:"})," PostgreSQL indexes documents for fast retrieval, and DeepSeek/Llama enhances response accuracy by incorporating document context."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Local Hosting:"})," Running the backend, database, and LLM locally provides cost-effective, fast processing without relying on external APIs, offering full control over infrastructure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CI/CD + Docker:"})," GitHub integration with CI/CD pipelines and Docker ensures smooth deployment and scalability, maintaining up-to-date services."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This stack combines performance, flexibility, and cost-effectiveness for a responsive, evolving system."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);