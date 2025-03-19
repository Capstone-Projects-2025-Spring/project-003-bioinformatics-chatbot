"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[2634],{35093:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var i=s(74848);function n(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return(0,i.jsxs)("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{},children:[e.children,e.src?(0,i.jsx)("img",{src:e.src,alt:e.alt}):(0,i.jsx)(i.Fragment,{}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"},children:e.caption}),(0,i.jsx)("figcaption",{align:e.align?e.align:"center",style:{},children:e.subcaption})]})}},97385:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(96540);var i=s(34164),n=s(28774),r=s(44586),o=s(28244),a=s(74848),c=s(28453);function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=17857751",children:(0,a.jsx)(t.img,{src:"https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg",alt:"Open in Codespaces"})})}),"\n",(0,a.jsxs)("div",{align:"center",children:[(0,a.jsx)(t.h1,{id:"bioinformatics-software-tutorial-chatbot",children:"BioInformatics Software Tutorial Chatbot"}),(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml",children:(0,a.jsx)(t.img,{src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})}),"\n",(0,a.jsx)(t.a,{href:"https://applebaumian.github.io/tu-cis-4398-docs-template/",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})}),"\n",(0,a.jsx)(t.a,{href:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/actions/workflows/ci-tests.yml",children:(0,a.jsx)(t.img,{src:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/actions/workflows/ci-tests.yml/badge.svg",alt:"CI Status"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Section 003, React.js, JavaScript, HTML, CSS, Python, Flask, Ollama, Retrieval-Augmented Generation (RAG), Generative AI, Large Language Model (LLM)"})}),"\n",(0,a.jsx)(t.h2,{id:"project-overview",children:"Project Overview"}),"\n",(0,a.jsx)(t.p,{children:"This project aims to create a chatbot powered by Generative AI and RAG to help bioinformatics researchers solve problems by providing accurate answers and tutorials using predefined methods."}),"\n",(0,a.jsx)(t.h2,{id:"project-abstract",children:"Project Abstract"}),"\n",(0,a.jsx)(t.p,{children:"The Bioinformatics Chatbot is a cutting-edge web application designed to assist bioinformatics researchers with complex problems more efficiently. The application enables users to ask the chatbot questions and receive relevant, accurate answers. Using innovative learning technology and human-like behavior, the chatbot guides the researchers with step-by-step tutorials (answers) for complex bioinformatics questions. The methods provided to the chatbot will serve as the foundation for generating precise responses, enabling users to save time and focus on advancing their research. By harnessing the strength of AI, the web application is transforming how researchers tackle heartfelt problems leading to rapid advancements."}),"\n",(0,a.jsx)(t.h2,{id:"high-level-requirement",children:"High Level Requirement"}),"\n",(0,a.jsx)(t.p,{children:'Once the user accesses the link to our web application, they will come into view of our welcome page that briefly summarizes the application\'s purpose. The welcome page also details the users who have worked on bringing the Bioinformatics Chatbot to life. To begin using the chatbot, the user clicks on the "Begin New Chat" button which activates the interface for the chatbot.'}),"\n",(0,a.jsx)(t.p,{children:"The chat interface is the crux of our application. The user can ask the chatbot questions and receive answers that are based on user-provided documentation, which can be submitted by clicking the black paper plane icon. The interface also allows the user to edit their queries if they do not like the response from the chatbot, or if the user wants to change their question. This is done by clicking on the pencil icon. Additionally, once the user is done conversing with the chatbot, they have the option to download the conversation history for later reference by pressing the download button in the bottom right-hand corner."}),"\n",(0,a.jsx)(t.p,{children:'For the chatbot to deliver quality answers tailored towards Bioinformatics, there is a backend application where users can upload relevant documentation. After logging in, users can navigate to the documentation upload page by clicking on the "Upload PDF" link. Once on the page, the user can upload their bioinformatics documentation which is stored inside of our database for the LLM to reference when producing accurate responses.'}),"\n",(0,a.jsx)(t.h2,{id:"conceptual-design",children:"Conceptual Design"}),"\n",(0,a.jsxs)(t.p,{children:["The frontend user interface of this app will be built using ",(0,a.jsx)(t.strong,{children:"React.js, JavaScript, HTML, and CSS"}),". This will allow for the creation of a clean and lightweight application for UI components, a satisfying user interface, and one that can handle user interactions well. It will also be responsible for sending user queries to the AI system, holding the chat history for context, and allowing users to download their conversation so that the method tutorial can be saved. The backend will be built using ",(0,a.jsx)(t.strong,{children:"Python"})," and ",(0,a.jsx)(t.strong,{children:"Flask"}),". The chatbot will be powered by ",(0,a.jsx)(t.strong,{children:"Retrieval-Augmented Generation (RAG)"})," to retrieve the correct method for the problem given by the user, and an ",(0,a.jsx)(t.strong,{children:"LLM"})," to use the provided method from the RAG to create a tutorial for the user."]}),"\n",(0,a.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,a.jsx)(t.p,{children:"Bioinformatics is a rapidly growing field that is using breakthroughs in Computer Science and Machine Learning to study and solve biological problems. Multiple Nobel Prizes in the past few years have been won in the fields of Biology and Chemistry by computer scientists. However, given the differences between both the content and the people in the respective fields, clear and effective communication can be a challenge. With the breakthroughs in the AI field and the rise of Large Language Models, the ability to bridge this gap has never been easier, allowing researchers on both sides of the academic 'fence' to easily learn about and work in the field of Bioinformatics. With that in mind, this Chatbot is meant to help bridge that communication gap, with the ability to customize answers and answer specific questions surrounding bioinformatics."}),"\n",(0,a.jsx)(t.h2,{id:"required-resources",children:"Required Resources"}),"\n",(0,a.jsx)(t.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A computer with a modern operating system (Windows, macOS, or Linux)"}),"\n",(0,a.jsxs)(t.li,{children:["At least ",(0,a.jsx)(t.strong,{children:"8 GB of RAM"})]}),"\n",(0,a.jsxs)(t.li,{children:["At least ",(0,a.jsx)(t.strong,{children:"2 GB of free disk space"})]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"software-requirements",children:"Software Requirements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["An up-to-date web browser:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Google Chrome"}),": Version ",(0,a.jsx)(t.strong,{children:"131"})," or later"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Mozilla Firefox"}),": Version ",(0,a.jsx)(t.strong,{children:"133"})," or later"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Microsoft Edge"}),": Version ",(0,a.jsx)(t.strong,{children:"131"})," or later"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Apple Safari"}),": Version ",(0,a.jsx)(t.strong,{children:"18.0"})," or later"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Docker Desktop"})," (handles all required dependencies for development)"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.strong,{children:"Internet access"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"collaborators",children:"Collaborators"}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/kBunn411",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/117461180?s=88&v=4",width:"100;",alt:"kBunn411"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Keith C Bunn"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/ahgoldmeer",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/95256721?s=88&v=4",width:"100;",alt:"ahgoldmeer"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Amitai Goldmeer"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/ishmam02",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/66305504?s=88&v=4",width:"100;",alt:"ishmam02"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Ishmam Kabir"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/khanhquocng2801",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/102694034?s=88&v=4",width:"100;",alt:"khanhquocng2801"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Khanh Q Nguyen"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/korlovskiy",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/117465477?s=88&v=4",width:"100;",alt:"korlovskiy"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Katerina Orlovskiy"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/JustinTruong456",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/111546803?s=88&v=4",width:"100;",alt:"JustinTruong456"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Justin Truong"})})]})}),(0,a.jsx)("td",{align:"center",children:(0,a.jsxs)("a",{href:"https://github.com/chroy2",children:[(0,a.jsx)("img",{src:"https://avatars.githubusercontent.com/u/91856253?s=88&v=4",width:"100;",alt:"chroy2"}),(0,a.jsx)("br",{}),(0,a.jsx)("sub",{children:(0,a.jsx)("b",{children:"Troy K Witmer"})})]})})]})})]})}function l(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}function d(){return(0,a.jsx)("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"},children:(0,a.jsx)(l,{})})}const u={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var g=s(76902);function b(){const{siteConfig:e}=(0,r.A)();return(0,a.jsx)("header",{className:(0,i.A)("hero hero--primary",u.heroBanner),children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("h1",{className:"hero__title",children:e.title}),(0,a.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,a.jsx)("div",{className:u.buttons,children:(0,a.jsx)(n.A,{className:"button button--secondary button--lg",to:"/tutorial/intro",children:"Docusaurus Tutorial - 5min \u23f1\ufe0f"})})]})})}function m(){const{siteConfig:e}=(0,r.A)();return(0,a.jsxs)(o.A,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,a.jsx)(b,{}),(0,a.jsx)("main",{children:(0,a.jsx)(g.A,{children:(0,a.jsx)(d,{})})})]})}},76902:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var i=s(20360),n=s(74848);function r(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.A,{...e})})}},51433:(e,t,s)=>{s.d(t,{A:()=>o});var i=s(96540),n=s(35093),r=s(74966);const o={React:i,...i,Figure:n.A,dinosaur:r.A}},74966:(e,t,s)=>{s.d(t,{A:()=>i});const i="data:image/png;base64,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"}}]);