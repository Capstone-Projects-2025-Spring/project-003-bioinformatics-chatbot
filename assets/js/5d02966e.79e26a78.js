"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4908],{58204:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>_,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var o=t(74848),r=t(28453);const s={sidebar_position:1},i=void 0,a={id:"system-architecture/Class_Diagram",title:"Class_Diagram",description:"Overview",source:"@site/docs/system-architecture/Class_Diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/Class_Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Class_Diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/Class_Diagram.md",tags:[],version:"current",lastUpdatedBy:"Amitai Goldmeer",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-003-bioinformatics-chatbot/docs/category/system-architecture"},next:{title:"Component and Technology Overview",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/component-overview"}},d={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Frontend</strong>",id:"frontend",level:2},{value:"Backend",id:"backend",level:2}];function l(n){const e={h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"overview",children:(0,o.jsx)(e.strong,{children:"Overview"})}),"\n",(0,o.jsx)(e.mermaid,{value:"classDiagram\ndirection TT\n\tnamespace Frontend {\n        class Homepage {\n\t        +display()\n        }\n\n        class Chatbot_frontend {\n\t        +String query_input\n\t        +String respone_output\n\t        +generate_respone_output()\n        }\n\n        class chat_history {\n\t        +String history\n\t        +add_history(User, Chatbot_frontend)\n        }\n\n        class User {\n\t        +String query_input\n\t        +String edit_query_input\n\t        +edit_query(query_input, edit_query_input)\n        }\n\n        class Textbox {\n\t        +String query\n\t        +get_query(User)\n        }\n\n        class send_button {\n\t        +get_query(Textbox)\n\t        +send_query(Chatbot_frontend)\n        }\n\n        class download_button {\n\t        +String history\n\t        +get_history(chat_history)\n\t        +download(history)\n        }\n\n\t}\n\tnamespace Backend {\n        class server {\n        }\n\n        class Chatbot_backend {\n\t        +String query_input\n\t        +String respone_output\n\t        +check_DB(DB_Bioinfo_Parsed)\n            +get_rag_respone(LLM, query_input)\n        }\n\n        class DB_Bioinfo{\n\t        +Doc Bioinfo\n\t        +String admin_login\n\t        +add_doc(User)\n        }\n\n        class DB_Bioinfo_Parsed{\n            +Array bag_of_words\n        }\n\n        class LLM {\n\t        +String rag_respone\n\t        +generate_rag_respone(DB_Bioinfo_Parsed)\n        }\n\n\t}\n\n    Homepage *-- User\n    Homepage *-- Textbox\n    Homepage *-- Chatbot_frontend\n    Homepage *-- chat_history\n    Textbox *-- send_button\n    Textbox *-- download_button\n\n    Chatbot_frontend --\x3e Chatbot_backend\n\n    server *-- Chatbot_backend\n    server *-- DB_Bioinfo\n    Chatbot_backend *-- LLM\n    DB_Bioinfo *-- DB_Bioinfo_Parsed\n    \n\n"}),"\n",(0,o.jsx)(e.p,{children:"The class diagram above demonstrates various relationships between different classes within the two components of frontend and backend in the Bioinformatics Chatbot system."}),"\n",(0,o.jsx)(e.h2,{id:"frontend",children:(0,o.jsx)(e.strong,{children:"Frontend"})}),"\n",(0,o.jsx)(e.mermaid,{value:"classDiagram\ndirection BT\n\tnamespace Frontend {\n        class Homepage {\n\t        +display()\n        }\n\n        class Chatbot_frontend {\n\t        +String query_input\n\t        +String respone_output\n\t        +generate_respone_output()\n        }\n\n        class chat_history {\n\t        +String history\n\t        +add_history(User, Chatbot_frontend)\n        }\n\n        class User {\n\t        +String query_input\n\t        +String edit_query_input\n\t        +edit_query(query_input, edit_query_input)\n        }\n\n        class Textbox {\n\t        +String query\n\t        +get_query(User)\n        }\n\n        class send_button {\n\t        +get_query(Textbox)\n\t        +send_query(Chatbot_frontend)\n        }\n\n        class download_button {\n\t        +String history\n\t        +get_history(chat_history)\n\t        +download(history)\n        }\n\n\t}\n    Homepage *-- User\n    Homepage *-- Textbox\n    Homepage *-- Chatbot_frontend\n    Homepage *-- chat_history\n    Textbox *-- send_button\n    Textbox *-- download_button"}),"\n",(0,o.jsx)(e.p,{children:"The frontend component shows the HomePage where everything will be displayed. The Homepage will be composed of the User, TextBox, Chatbot Frontend, ChatHistory."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Chat_history is going to store all the respones from Chatbot and User"}),"\n",(0,o.jsx)(e.li,{children:"Chatbot_frontend is going to receive the query and generate a response output"}),"\n",(0,o.jsx)(e.li,{children:"User is able to enter or edit a query"}),"\n",(0,o.jsxs)(e.li,{children:["TextBox is where the User's query will be shown","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Send_button will sent the query from textbox to Chatbot_frontend"}),"\n",(0,o.jsx)(e.li,{children:"download_button will download the chathistory"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"backend",children:"Backend"}),"\n",(0,o.jsx)(e.mermaid,{value:"classDiagram\ndirection BT\n\tnamespace Backend {\n        class server {\n        }\n\n        class Chatbot_backend {\n\t        +String query_input\n\t        +String respone_output\n\t        +check_DB(DB_Bioinfo_Parsed)\n            +get_rag_respone(LLM, query_input)\n        }\n\n        class DB_Bioinfo{\n\t        +Doc Bioinfo\n\t        +String admin_login\n\t        +add_doc(User)\n        }\n\n        class DB_Bioinfo_Parsed{\n            +Array bag_of_words\n        }\n\n        class LLM {\n\t        +String rag_respone\n\t        +generate_rag_respone(DB_Bioinfo_Parsed, Chatbot_backend)\n        }\n\n\t}\n    server *-- Chatbot_backend\n    server *-- DB_Bioinfo\n    Chatbot_backend *-- LLM\n    DB_Bioinfo *-- DB_Bioinfo_Parsed"}),"\n",(0,o.jsx)(e.p,{children:"The backend component shows the Server where a RAG(Retrieval-augmented generation) respone will be generated . The Server will be composed of the Chatbot_backend, BD_Bioinfo."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["BD_Bioinfo is going to be a database of Bioinformatics tutorials and lessons","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"BD_Bioinfo_Parsed is going to be a database that parses all the important information from the Bioinformatics tutorials and lessons into Bags of words"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Chatbot_backend is going to receive the query and check the BD_Bioinfo_Parsed for the information and then it going use LLM to generate a response","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"LLM (Large Language Model) is going to use the query, BD_Bioinfo_Parsed to generate a RAG(Retrieval-augmented generation) response."}),"\n"]}),"\n"]}),"\n"]})]})}function _(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);