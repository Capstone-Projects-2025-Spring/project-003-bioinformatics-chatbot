"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[961],{81435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(74848),s=n(28453);const i={sidebar_position:7},r="Development Environment Setup",c={id:"system-architecture/Development Environment Setup",title:"Development Environment Setup",description:"This document shows to setup the Development Enviroment locally.",source:"@site/docs/system-architecture/Development Environment Setup.md",sourceDirName:"system-architecture",slug:"/system-architecture/Development Environment Setup",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Development Environment Setup",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/Development Environment Setup.md",tags:[],version:"current",lastUpdatedBy:"JustinTruong456",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/development-environment"},next:{title:"API Specification",permalink:"/project-003-bioinformatics-chatbot/docs/category/api-specification"}},a={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"development-environment-setup",children:"Development Environment Setup"}),"\n",(0,o.jsx)(t.p,{children:"This document shows to setup the Development Enviroment locally."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Install and Open Docker Desktop and Vscode"}),"\n",(0,o.jsxs)(t.li,{children:["Download and unzip the source code in the most recent project release ",(0,o.jsx)(t.a,{href:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/releases",children:"here"})]}),"\n",(0,o.jsx)(t.li,{children:"In Vscode open the project file, in the backend folder create .env file and database.env"}),"\n",(0,o.jsxs)(t.li,{children:["In the .env file put this",(0,o.jsx)("br",{}),"\nDATABASE_URI=postgresql+psycopg://admin",":admin","@database:5432/database\nTEST_DATABASE_URI=postgresql+psycopg://admin",":admin","@test-database:5432/database"]}),"\n",(0,o.jsxs)(t.li,{children:["In the database.env put this",(0,o.jsx)("br",{}),"\n#database variabless",(0,o.jsx)("br",{}),"\nPOSTGRES_USER=admins",(0,o.jsx)("br",{}),"\nPOSTGRES_PASSWORD=admins",(0,o.jsx)("br",{}),"\nPOSTGRES_DB=databases",(0,o.jsx)("br",{}),"\nPOSTGRES_HOST_AUTH_METHOD=trust"]}),"\n",(0,o.jsx)(t.li,{children:'If on Windows, update docker-entrypoint.sh in backend, and docker-compose.yml, to LF format from CRLF format in Vscode by hiting ctrl+shift+p and clicking on "Change End of Line Sequence" and LF. Then save the files.'}),"\n",(0,o.jsxs)(t.li,{children:["In vscode open the terminal and ",(0,o.jsx)(t.code,{children:"cd project-003-bioinformatics-chatbot-1.0.0"})]}),"\n",(0,o.jsx)(t.li,{children:"Run this commands in the terminal one at a time, it may take a while to build due to LLM."}),"\n"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"docker compose -f docker-compose.yml build"}),"\n",(0,o.jsx)(t.li,{children:"docker compose -f docker-compose.yml up"}),"\n"]}),"\n",(0,o.jsxs)(t.ol,{start:"9",children:["\n",(0,o.jsxs)(t.li,{children:["Frontend host is ",(0,o.jsx)(t.a,{href:"http://localhost:5173/s",children:"http://localhost:5173/s"}),(0,o.jsx)("br",{}),"\nBackend host is ",(0,o.jsx)(t.a,{href:"http://localhost:444/s",children:"http://localhost:444/s"}),(0,o.jsx)("br",{}),"\nUsername is admins",(0,o.jsx)("br",{}),"\nPassword is admin"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(96540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);