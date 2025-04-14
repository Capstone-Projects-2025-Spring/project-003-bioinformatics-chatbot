"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9685],{26193:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(74848),r=t(28453);const i={sidebar_position:3},s="Sequence Diagrams",c={id:"system-architecture/Sequence-Diagram",title:"Sequence-Diagram",description:"This document contains sequence diagrams",source:"@site/docs/system-architecture/Sequence-Diagram.md",sourceDirName:"system-architecture",slug:"/system-architecture/Sequence-Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Sequence-Diagram",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/system-architecture/Sequence-Diagram.md",tags:[],version:"current",lastUpdatedBy:"JustinTruong456",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Class Diagram",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Class Diagram"},next:{title:"Algorithm_Design",permalink:"/project-003-bioinformatics-chatbot/docs/system-architecture/Algorithm_Design"}},o={},d=[{value:"1: Question and Answer system",id:"1-question-and-answer-system",level:2},{value:"2: Downloading function",id:"2-downloading-function",level:2},{value:"3: Chat History",id:"3-chat-history",level:2},{value:"4: Edit queries / Resend queries",id:"4-edit-queries--resend-queries",level:2},{value:"5: New/clear Chat",id:"5-newclear-chat",level:2}];function u(e){const n={em:"em",h1:"h1",h2:"h2",mermaid:"mermaid",p:"p",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This document contains sequence diagrams"}),"\n",(0,a.jsx)(n.h1,{id:"sequence-diagrams",children:"Sequence Diagrams"}),"\n",(0,a.jsx)(n.h2,{id:"1-question-and-answer-system",children:"1: Question and Answer system"}),"\n",(0,a.jsx)(n.mermaid,{value:'sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Server\n    participant D as LLM\n    \n    \n    A->>B: Connect to the App\n    \n    activate B\n    B->>C: Starting backend\n    activate C\n    A->>B: Ask a question\n    B->>C: Queries data\n    alt data found\n        C->>D: Send retrieved documents\n        D--\x3e>C: Return generated answer\n        C--\x3e>B: Returns answer\n        B--\x3e>A: Sends reponse\n    else data not found\n        C->>D: Send not found documents signal\n        D--\x3e>C: Return generated "I don\'t know"\n        C--\x3e>B: Return "I don\'t know"\n        B--\x3e>A: Display "I dont know"\n    end    \n    deactivate C\n    deactivate B'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 1: ChatBot Question and Answer System Sequence Diagram"})}),"\n",(0,a.jsx)(n.h2,{id:"2-downloading-function",children:"2: Downloading function"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Server\n    participant D as LLM\n    \n    \n    A->>B: Connect to the App\n    \n    activate B\n    B->>C: Starting backend\n    activate C\n    A->>B: Ask a question\n    B->>C: Queries data\n    C->>D: Send retrieved document\n    D--\x3e>C: return generated answer\n    C--\x3e>B: Returns information\n    B--\x3e>A: Sends response\n\n    A->>B: Start download process\n    B--\x3e>A: display download link\n    deactivate B\n    deactivate C"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 2: ChatBot downloading system Sequence Diagram"})}),"\n",(0,a.jsx)(n.h2,{id:"3-chat-history",children:"3: Chat History"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Server\n    participant D as LLM\n    \n    \n    A->>B: Connect to the App\n    \n    activate B\n    B->>C: Starting backend\n    activate C\n    \n    A->>B: Ask a question\n    B->>C: Queries data\n    C->>D: Send retrieved document\n    D--\x3e>C: return generated answer\n    C--\x3e>B: Returns answer\n    B--\x3e>A: Sends response\n    \n\n    loop History chat interaction\n    A->>B: Ask a question\n    \n    B->>C: Queries data\n    C->>D: Send retrieved documents with chat history\n    D--\x3e>C: Return generated answer\n    C--\x3e>B: Return Answer\n    B--\x3e>A: display previous conversation\n    deactivate B\n    deactivate C\n    end\n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 3: ChatBot History System Sequence Diagram"})}),"\n",(0,a.jsx)(n.h2,{id:"4-edit-queries--resend-queries",children:"4: Edit queries / Resend queries"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Server\n    participant D as LLM\n    \n    A->>B: Connect to the App\n    \n    activate B\n    B->>C: Starting backend\n    activate C\n    A->>B: Ask a question\n    \n    B->>C: Queries data\n    C->>D: Send retrieved document\n    D--\x3e>C: return generated answer\n    C--\x3e>B: Returns answer\n    B--\x3e>A: Sends response\n    A->>B: Fixing entered entries\n    B->>C: Queries data\n    C->>D: Send retrieved document\n    D--\x3e>C: return generated answer\n    C--\x3e>B: Returns answer\n    B--\x3e>A: send response\n    Note over A,B: delete pre fixing entries and displaying new one\n    \n    deactivate B\n    deactivate C"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 4: ChatBot re-edit/ re-send queries System Sequence Diagram"})}),"\n",(0,a.jsx)(n.h2,{id:"5-newclear-chat",children:"5: New/clear Chat"}),"\n",(0,a.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Server\n    participant D as LLM\n    \n    \n    A->>B: Connect to the App\n    B->>C: Starting backend\n    activate B\n    activate C\n    loop interacting with bot\n        A->>B: Ask a question\n        B->>C: Queries data\n        C->>D: Send retrieved document\n        D--\x3e>C: return generated answer\n        C--\x3e>B: Returns answer\n        B--\x3e>A: Sends response\n    end\n    A->>B: New Chat button click\n    \n    deactivate C\n\n    B--\x3e>A: Reconnect confirmation text\n    \n    deactivate B\n    A->>B: Reconnect\n    activate B\n    \n    B->>C: Starting backend\n    activate C\n    deactivate C\n    deactivate B\n    "}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"Figure 5: ChatBot open new chat System Sequence Diagram"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var a=t(96540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);