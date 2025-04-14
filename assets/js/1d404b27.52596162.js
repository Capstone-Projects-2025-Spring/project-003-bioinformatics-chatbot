"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2427],{55679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(74848),r=t(28453);const a={sidebar_position:2},o="Class Diagram",i={id:"system-architecture/Class Diagram",title:"Class Diagram",description:"This document is a summary of the classes used for the project",source:"@site/docs/system-architecture/Class Diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/Class Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Class Diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/Class Diagram.md",tags:[],version:"current",lastUpdatedBy:"JustinTruong456",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"component-overview",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/component-overview"},next:{title:"Sequence-Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Sequence-Diagram"}},d={},c=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"<strong>Frontend</strong>",id:"frontend",level:2},{value:"<strong>Technology: React with React Router (JavaScript)</strong>",id:"technology-react-with-react-router-javascript",level:3},{value:"<strong>Key Features:</strong>",id:"key-features",level:4},{value:"Backend",id:"backend",level:2},{value:"<strong>Technology: Flask (Python)</strong>",id:"technology-flask-python",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-1",level:4},{value:"Indexed Documents Database",id:"indexed-documents-database",level:2},{value:"<strong>Technology: PostgreSQL</strong>",id:"technology-postgresql",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-2",level:4},{value:"Large Language Model (LLM)",id:"large-language-model-llm",level:2},{value:"<strong>Technology: DeepSeek / Llama</strong>",id:"technology-deepseek--llama",level:3},{value:"<strong>Key Features:</strong>",id:"key-features-3",level:4}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This document is a summary of the classes used for the project"}),"\n",(0,s.jsx)(n.h1,{id:"class-diagram",children:"Class Diagram"}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:(0,s.jsx)(n.strong,{children:"Overview"})}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\ndirection TB\n\tnamespace Frontend {\n        class homepage {\n\t        \n        }\n\n        class chat_history {\n\t        \n        }\n\n\n\n        class user {\n\n        }\n\n        class textbox {\n\n        }\n\n\n\n        class chatbot_frontend {\n        }\n\n\t}\n\tnamespace Backend {\n        class server {\n        }\n\n        class chatbot_backend {\n\n        }\n\n\n        class rag_model {\n        }\n\n\n\n\n        class sorted_bioinformatics_database{\n\n        }\n\n\n        class admin {\n\n        }\n\n\t}\n\n    homepage *-- user\n    homepage *-- textbox\n    homepage *-- chatbot_frontend\n    homepage *-- chat_history\n\n\n     \n    chatbot_frontend *-- chatbot_backend\n\n    server *-- chatbot_backend\n    server *--sorted_bioinformatics_database\n    server *-- rag_model\n    server *-- admin\n  \n    \n\n"}),"\n",(0,s.jsx)(n.p,{children:"The class diagram above demonstrates various relationships between different classes within the two components of Frontend and Backend in the bioinformatics chatbot system. The frontend is connected to the backend through the chatbot component."}),"\n",(0,s.jsx)(n.h2,{id:"frontend",children:(0,s.jsx)(n.strong,{children:"Frontend"})}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\ndirection BT\n\tnamespace Frontend {\n        class homepage {\n\t        +display()\n        }\n\n        class chat_history {\n\t        +String history\n\t        +add_history(user, chatbot_frontend)\n        }\n\n\tclass user_textbubble {\n\t        +String user_response\n\t\t+get_user_response(user)\n        }\n\n        class chatbot_textbubble {\n\t        +String chatbot_response\n\t\t+get_chatbot_response(chatbot)\n        }\n\n        class user {\n\t        +String query_input\n\t        +String edit_query_input\n\t        +edit_query(query_input, edit_query_input)\n        }\n\n        class textbox {\n\t        +String query\n\t        +get_query(user)\n        }\n\n        class send_button {\n\t        +get_query(textbox)\n\t        +send_query(chatbot_frontend)\n        }\n\n        class download_button {\n\t        +String history\n\t        +get_history(chat_history)\n\t        +download(history)\n        }\n\n        class chatbot_frontend {\n\t        +String query_input\n\t        +String respone_output\n\t        +generate_rag_respone()\n        }\n\n\t}\n\t\n    homepage *-- chat_history\t\n\n    homepage *-- user\n\n    homepage *-- textbox\n    homepage *-- chatbot_frontend\n    chat_history *-- user_textbubble\n    chat_history *-- chatbot_textbubble\n    textbox *-- send_button\n    textbox *-- download_button"}),"\n",(0,s.jsx)(n.p,{children:"The frontend component shows the homepage where everything will be displayed. The homepage will be composed of the chat_history, user, textbox, and chatbot_frontend."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chat_history is going to store all the respones from user and chatbot","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"User_textbubble will display the user response"}),"\n",(0,s.jsx)(n.li,{children:"Chatbot_textbubble will display the chatbot response"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"User is able to enter or edit a query"}),"\n",(0,s.jsxs)(n.li,{children:["TextBox is where the User's query will be shown","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Send_button will sent the query from textbox to chatbot_frontend"}),"\n",(0,s.jsx)(n.li,{children:"Download_button will download the chat_history"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Chatbot_frontend is going to receive the query and generate a response output"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"technology-react-with-react-router-javascript",children:(0,s.jsx)(n.strong,{children:"Technology: React with React Router (JavaScript)"})}),"\n",(0,s.jsx)(n.p,{children:"The frontend is built using React, offering a component-based architecture for interactive user interfaces. React Router enables seamless navigation within the application."}),"\n",(0,s.jsx)(n.h4,{id:"key-features",children:(0,s.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component-Based Design:"})," Modular and reusable components for maintainability and scalability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"State Management:"})," Utilizes React Hooks like ",(0,s.jsx)(n.code,{children:"useState"}),", ",(0,s.jsx)(n.code,{children:"useEffect"}),", for efficient state handling."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Dynamic Routing:"})," React Router enables smooth navigation between pages."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"backend",children:"Backend"}),"\n",(0,s.jsx)(n.mermaid,{value:"classDiagram\ndirection BT\n\tnamespace Backend {\n        class server {\n        }\n\n        class chatbot_backend {\n\t        +String query_input\n\t        +String respone_output\n\t        +check_database(parsed_bioinformatics_database)\n                +get_rag_respone(rag_model, query_input)\n        }\n\n        class bioinformatics_database{\n\t        +Doc bioinformatics_pdfs\n\t        +String admin_login\n\t        +add_doc(admin)\n        }\n\n        class sorted_bioinformatics_database{\n            +Array bag_of_words\n            +parsed_database(database_bioinformatics)\n        }\n\n        class rag_model {\n\t        +String rag_respone\n                +String query\n\t        +retrieve_and_generate(generator_llm, retriever, chatbot_backend)\n        }\n\n        class retriever {\n\t        +Doc retrieved_pdf\n                +String query\n\t        +retrieve_pdf(parsed_bioinformatics_database, chatbot_backend)\n        }\n\n\n        class generator_llm {\n\t        +String generated_response\n\t\t+String query\n\t        +generate_response(retriever, chatbot_backend)\n        }\n\n\n        class admin {\n\t        +Doc bioinformatics_pdfs\n\t        +add_bioinformatics_pdf(bioinformatics_database)\n        }\n\n\t}\n\n\n\n    server *-- chatbot_backend\n    server *--sorted_bioinformatics_database\n    server *-- rag_model\n    rag_model *-- retriever\n    rag_model *-- generator_llm\n    server *-- admin\n   sorted_bioinformatics_database *-- bioinformatics_database\n    "}),"\n",(0,s.jsx)(n.p,{children:"The backend component shows the server where the chatbot response are going to be generated and data stored . The server will be composed of the chatbot_backend, rag_model,sorted_bioinformatics_database, and admin."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Chatbot_backend is going to receive the query and check the bioinformatics_database_parsed for relevant information","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"if there's no relevant information, chatbot will respone \"I don't know\""}),"\n",(0,s.jsx)(n.li,{children:"if there's relevant information, chatbot will generate a RAG respone using the RAG(Retrieval-augmented generation) model and query_input"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["RAG(Retrieval-augmented generation) model going to generate a respone for the chatbot query from retrieval infomation and a LLM (Large Language Model)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Retriever will retrieve the relevant information from thesorted_bioinformatics_database based on the query prompt and stored in."}),"\n",(0,s.jsx)(n.li,{children:"Generator_llm is going use LLM (Large Language Model) to generate responses based on retrieved information and query prompt."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["sorted_bioinformatics_database is going to be a database that parses all the important information from the bioinformatics_database pdfs of tutorials and lessons into bags of words","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Bioinformatics_database is going to be a database of bioinformatics pdfs tutorials and lessons"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Admin is going to add the bioinformatics pdfs tutorials and lessons into bioinformatics_database"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"technology-flask-python",children:(0,s.jsx)(n.strong,{children:"Technology: Flask (Python)"})}),"\n",(0,s.jsx)(n.p,{children:"The backend processes user queries, retrieves relevant data, adds new documents, and communicates with the LLM."}),"\n",(0,s.jsx)(n.h4,{id:"key-features-1",children:(0,s.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Query Processing:"})," Parses and validates user queries before searching for relevant documents."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document Retrieval:"})," Interacts with the ",(0,s.jsx)(n.strong,{children:"Indexed Documents Database"})," to fetch relevant information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Response Handling:"})," Constructs a prompt for the ",(0,s.jsx)(n.strong,{children:"LLM"})," and returns the generated answer to the frontend."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling & Logging:"})," Implements monitoring, logging, and error handling for reliability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Admin Controls:"})," Allows administrators to add new documents to the database, ensuring the system stays up to date."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"indexed-documents-database",children:"Indexed Documents Database"}),"\n",(0,s.jsx)(n.h3,{id:"technology-postgresql",children:(0,s.jsx)(n.strong,{children:"Technology: PostgreSQL"})}),"\n",(0,s.jsx)(n.p,{children:"The database stores indexed documents and enables efficient retrieval based on user queries."}),"\n",(0,s.jsx)(n.h4,{id:"key-features-2",children:(0,s.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Text Search:"})," Quickly finds relevant documents based on query matching."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Document Updates:"})," Allows continuous addition and modification of indexed documents."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"large-language-model-llm",children:"Large Language Model (LLM)"}),"\n",(0,s.jsx)(n.h3,{id:"technology-deepseek--llama",children:(0,s.jsx)(n.strong,{children:"Technology: DeepSeek / Llama"})}),"\n",(0,s.jsx)(n.p,{children:"The LLM generates answers by processing the prompt constructed using retrieved documents."}),"\n",(0,s.jsx)(n.h4,{id:"key-features-3",children:(0,s.jsx)(n.strong,{children:"Key Features:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Context-Aware Responses:"})," Uses relevant documents to improve the accuracy of answers."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"API-Based Access:"})," Communicates with the LLM hosted locally via API calls."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);