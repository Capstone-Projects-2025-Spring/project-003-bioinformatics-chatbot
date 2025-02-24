"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8657],{64748:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=i(74848),s=i(28453);const t={sidebar_position:2},a="Backend API",o={id:"api-specification/Backend-API",title:"Backend-API",description:"Chatbot_backend",source:"@site/docs/api-specification/Backend-API.md",sourceDirName:"api-specification",slug:"/api-specification/Backend-API",permalink:"/project-003-bioinformatics-chatbot/docs/api-specification/Backend-API",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/api-specification/Backend-API.md",tags:[],version:"current",lastUpdatedBy:"JustinTruong456",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Frontend-API",permalink:"/project-003-bioinformatics-chatbot/docs/api-specification/Frontend-API"},next:{title:"Test Procedures",permalink:"/project-003-bioinformatics-chatbot/docs/category/test-procedures"}},d={},l=[{value:"<strong>Chatbot_backend</strong>",id:"chatbot_backend",level:2},{value:"<strong>Rag_model</strong>",id:"rag_model",level:2},{value:"<strong>Sorted Database</strong>",id:"sorted-database",level:2},{value:"<strong>Admin</strong>",id:"admin",level:2}];function c(n){const e={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"backend-api",children:"Backend API"}),"\n",(0,r.jsx)(e.mermaid,{value:"classDiagram\ndirection BT\n\tnamespace Backend {\n        class server {\n        }\n\n        class chatbot_backend {\n\t        +String query_input\n\t        +String respone_output\n\t        +check_database(sorted_bioinformatics_database)\n                +get_rag_respone(rag_model, query_input)\n        }\n\n        class bioinformatics_database{\n\t        +Doc bioinformatics_pdfs\n\t        +String admin_login\n\t        +add_doc(admin)\n        }\n\n        class sorted_bioinformatics_database{\n            +Array bag_of_words\n            +sort_database(database_bioinformatics)\n        }\n\n        class rag_model {\n\t        +String rag_respone\n          +String query\n          +String relevant_information\n\t        +retrieve_and_generate(generator_llm, retriever, chatbot_backend)\n        }\n\n        class retriever {\n\t        +Doc retrieved_pdf\n                +String query\n\t        +retrieve_pdf(sorted_bioinformatics_database, chatbot_backend)\n        }\n\n\n        class generator_llm {\n\t        +String generated_response\n\t\t+String query\n\t        +generate_response(retriever, chatbot_backend)\n        }\n\n\n        class admin {\n          +String Username \n          +String Password \n\t        +Doc bioinformatics_pdfs\n\t        +add_bioinformatics_pdf(bioinformatics_database)\n        }\n\n\t}\n\n\n\n    server *-- chatbot_backend\n    server *-- sorted_bioinformatics_database\n    server *-- rag_model\n    rag_model *-- retriever\n    rag_model *-- generator_llm\n    server *-- admin\n    sorted_bioinformatics_database *-- bioinformatics_database\n    "}),"\n",(0,r.jsx)(e.h2,{id:"chatbot_backend",children:(0,r.jsx)(e.strong,{children:"Chatbot_backend"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Class Purpose: To receive query from the user and generate a RAG(Retrieval-augmented generation) response"}),"\n",(0,r.jsxs)(e.li,{children:["Datafields:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"query_input (String): Store the user query"}),"\n",(0,r.jsx)(e.li,{children:"response_output (String): Store the RAG-generated response"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Methods:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["check_database()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Checks for relevant information in the database."}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: A parsed user query"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"query_input (String) : The user query"}),"\n",(0,r.jsx)(e.li,{children:"database (Object) : The sourced of stored information"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Return value: True if relevant data exists, False otherwise (Boolean)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["generate_response()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:'Purpose: Generate RAG(Retrieval-augmented generation) response or a message stating "I don\'t know"'}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: A boolean from check_database()"}),"\n",(0,r.jsx)(e.li,{children:"Post-Conditon: A response for the Chatbot to display"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"relevant_info(Boolean) : Boolean that checks for relevant information in the database"}),"\n",(0,r.jsx)(e.li,{children:"rag_model(Object) : The RAG class object that generate RAG(Retrieval-augmented generation) response"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:'Return value: RAG response if boolean true, "I don\'t know" message if boolean false (String)'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"rag_model",children:(0,r.jsx)(e.strong,{children:"Rag_model"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Class Purpose: Generate a respone for the chatbot query from retrieval infomation and a LLM (Large Language Model)"}),"\n",(0,r.jsxs)(e.li,{children:["Datafields:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"query_input (String): Store the user query"}),"\n",(0,r.jsx)(e.li,{children:"response_output (String): Store the RAG-generated response"}),"\n",(0,r.jsx)(e.li,{children:"relevant_information(String): Relevant information from the database"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Methods:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["retrieve_information()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Retrieve relevant information in the database based on the user query."}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: A index database"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"query_input (String) : The user query"}),"\n",(0,r.jsx)(e.li,{children:"sorted_database (Object) : The sorted database containing all the information"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Return value: only containing relevant information (String)"}),"\n",(0,r.jsxs)(e.li,{children:["generate_rag_response()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Generates a RAG response using LLM and the relevant information."}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: Relevant information recieved"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"relevant_information(String): Relevant information from the database"}),"\n",(0,r.jsx)(e.li,{children:"LLM (Object) : Large language model use to generate RAG response from relevant information"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Return value: RAG response from the LLM (String)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"sorted-database",children:(0,r.jsx)(e.strong,{children:"Sorted Database"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Class Purpose: Parsed and index Bioinformatics pdfs files"}),"\n",(0,r.jsxs)(e.li,{children:["Datafields:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"File (Object)"}),"\n",(0,r.jsx)(e.li,{children:"Unsorted_database (Object): Unsorted database contain files added by Admin."}),"\n",(0,r.jsx)(e.li,{children:"Sorted_database (Object): After parsing and indexing the information into a sorted database."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Methods:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["parse_information()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Parse infomation from the files."}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: Files has to be pdfs"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"File (String) : Bioinformatics pdf file"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:"Return value: Information from Bioinformatics pdf file (String)"}),"\n",(0,r.jsxs)(e.li,{children:["index_information()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Index the information into a sorted database."}),"\n",(0,r.jsx)(e.li,{children:"Post-Condtion: Sorted database"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"parsed_info (String) : Information from Bioinformatics pdf file"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Sorted_database (Object) : The reference of the sorted_database"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"admin",children:(0,r.jsx)(e.strong,{children:"Admin"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Class Purpose: A safe and secure place to add Bioinformatics pdfs files for Database"}),"\n",(0,r.jsxs)(e.li,{children:["Datafields:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Username (String)"}),"\n",(0,r.jsx)(e.li,{children:"Password (String)"}),"\n",(0,r.jsx)(e.li,{children:"File (Object)"}),"\n",(0,r.jsx)(e.li,{children:"Unsorted_database (Object): Unsorted database contain files added by Admin."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["Methods:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["add_files()","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Purpose: Add Bioinformatics pdfs files for Database"}),"\n",(0,r.jsx)(e.li,{children:"Pre-Conditon: Files has to be pdfs"}),"\n",(0,r.jsx)(e.li,{children:"Post-Conditon: Database filled with Bioinformatics pdfs files"}),"\n",(0,r.jsxs)(e.li,{children:["Parameters:","\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"File (Object) : Bioinformatics pdfs files"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Unsorted_database (Object) : The reference of the unsorted_database"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function a(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);