"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4171],{71788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const r={sidebar_position:5},o="Database Design",a={id:"system-architecture/Database-Design",title:"Database Design",description:"This Document is a summary of the database design for the project",source:"@site/docs/system-architecture/Database-Design.md",sourceDirName:"system-architecture",slug:"/system-architecture/Database-Design",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Database-Design",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/Database-Design.md",tags:[],version:"current",lastUpdatedBy:"kBunn411",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Algorithm Description",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Algorithm_Design"},next:{title:"Development Environment",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/development-environment"}},d={},l=[{value:"Entity-Relation Diagram",id:"entity-relation-diagram",level:2},{value:"User Table",id:"user-table",level:3},{value:"Role Table",id:"role-table",level:3},{value:"Document Table",id:"document-table",level:3},{value:"Bag of Words Table",id:"bag-of-words-table",level:3}];function c(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"database-design",children:"Database Design"}),"\n",(0,i.jsx)(n.p,{children:"This Document is a summary of the database design for the project"}),"\n",(0,i.jsx)(n.h2,{id:"entity-relation-diagram",children:"Entity-Relation Diagram"}),"\n",(0,i.jsx)(n.mermaid,{value:"erDiagram\n    USER ||--|{ ROLE: has\n    USER {\n        int id PK\n        string username\n        string password_hash\n    }\n    ROLE\n    ROLE {\n        int id PK\n        int user_id FK\n        string role\n    }\n\n    DOCUMENT ||--|{ BAG-OF-WORDS : contains\n    DOCUMENT {\n        int id PK\n        string document_name\n        string file_type\n        BLOB file_contents\n    }\n    BAG-OF-WORDS {\n        int id PK\n        int document_id FK\n        string word\n        int count\n    }"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Figure: Entity-Relation diagram"})}),"\n",(0,i.jsx)(n.h3,{id:"user-table",children:"User Table"}),"\n",(0,i.jsx)(n.p,{children:"Used to store admin users which will be able to upload documents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"id: int - primary key"}),"\n",(0,i.jsx)(n.li,{children:"username: string : unique username for user"}),"\n",(0,i.jsx)(n.li,{children:"password_hash: string : password stored as a hash"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"role-table",children:"Role Table"}),"\n",(0,i.jsx)(n.p,{children:"Used to store roles of Users"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"id: int - primary key"}),"\n",(0,i.jsx)(n.li,{children:"user_id: int - foreign key (User: id) : contains a relation to a user"}),"\n",(0,i.jsx)(n.li,{children:"role: string : the role of a user which brings permissions"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"document-table",children:"Document Table"}),"\n",(0,i.jsx)(n.p,{children:"Stores uploaded documents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"id: int - primary key"}),"\n",(0,i.jsx)(n.li,{children:"document_name: string: name of uploaded document"}),"\n",(0,i.jsx)(n.li,{children:"document_type: string: file extension of the document"}),"\n",(0,i.jsx)(n.li,{children:"file_contents: BLOB: the uploaded file"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bag-of-words-table",children:"Bag of Words Table"}),"\n",(0,i.jsx)(n.p,{children:"Holds the bag of words for document searching"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"id: int - primary key"}),"\n",(0,i.jsx)(n.li,{children:"document_id: int - foreign key (Document: id) : contains a relation to an uploaded document"}),"\n",(0,i.jsx)(n.li,{children:"word: string: one of the words in the related documents bag"}),"\n",(0,i.jsx)(n.li,{children:"count: int: the number of times word shows up in the related document"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);