"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3579],{4529:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var t=s(74848),i=s(28453);const a={sidebar_position:5},o="Use-Case Descriptions",r={id:"requirements/use-case-descriptions",title:"Use-Case Descriptions",description:"Use Case 1 - ChatBot Question and Answer System",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/use-case-descriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"JustinTruong456",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/features-and-requirements"},next:{title:"System Architecture",permalink:"/project-003-bioinformatics-chatbot/docs/category/system-architecture"}},c={},h=[{value:"Use Case 1 - ChatBot Question and Answer System",id:"use-case-1---chatbot-question-and-answer-system",level:2},{value:"Use Case 2 - Downloading Conversation",id:"use-case-2---downloading-conversation",level:2},{value:"Use Case 3 - Chat History",id:"use-case-3---chat-history",level:2},{value:"Use Case 4 - Edit Queue/Resend",id:"use-case-4---edit-queueresend",level:2},{value:"Use Case 5 - New/clear Chat",id:"use-case-5---newclear-chat",level:2}];function d(e){const n={h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-case-descriptions",children:"Use-Case Descriptions"}),"\n",(0,t.jsx)(n.h2,{id:"use-case-1---chatbot-question-and-answer-system",children:"Use Case 1 - ChatBot Question and Answer System"}),"\n",(0,t.jsx)(n.p,{children:"Users should have the ability to ask the chatbot questions related to bioinformatics and receive adequate responses."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The user clicks on the web link to access the front page."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A question is inputted into the chatbox."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The chatbot processes the question to understand how to answer."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The chatbot determines the answer using the following criteria:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the answer is found in the documentation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A tutorial will pop up with the method of choice for the user to use for his or her Bioinformatics Research."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If the answer is not found in the documentation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'The chatbot will say "I don\'t know" as an answer for the user.'}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:'sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Database\n    \n    \n    A->>B: Connect to the App\n    activate B\n    A->>B: Ask a question\n    B->>C: Queries data\n    alt data found\n        C--\x3e>B: Returns information\n        B--\x3e>A: Sends reponse\n    else data not found\n        C--\x3e>B: return null\n        B--\x3e>A: display "I dont know"\n    end    \n    \n    deactivate B'}),"\n",(0,t.jsx)(n.h2,{id:"use-case-2---downloading-conversation",children:"Use Case 2 - Downloading Conversation"}),"\n",(0,t.jsx)(n.p,{children:"The user should have the functionality of downloading the conversation between her and the chatbot to reference at a later date."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A conversation between the user and the chatbot has finished."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'The user selects the "Download Conversation" button and decides which format (.pdf, .txt, .md, etc) to save the file in.'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"A notification appears on the screen that the download is ready to be saved to the user's computer."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'The user presses the "Save" button to save the history of the conversation with the chatbot file to his device.'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Database\n    \n    \n    A->>B: Connect to the App\n    activate B\n    A->>B: Ask a question\n    B->>C: Queries data\n    C--\x3e>B: Returns information\n    B--\x3e>A: Sends response\n\n    A->>B: Start download process\n    B->>C: initiate phrasing process\n    C--\x3e>B: Send back requested file to Chatbox\n    B--\x3e>A: display download link\n    deactivate B"}),"\n",(0,t.jsx)(n.h2,{id:"use-case-3---chat-history",children:"Use Case 3 - Chat History"}),"\n",(0,t.jsx)(n.p,{children:"Users should be able to view previous conversations with the chatbot."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The chatbot and the user are currently in conversation with one another."}),"\n",(0,t.jsx)(n.li,{children:"The user navigates to the scroll bar."}),"\n",(0,t.jsx)(n.li,{children:"He or she moves the bar up or down so that the past conversations are shown on the screen."}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Database\n    \n    \n    A->>B: Connect to the App\n    activate B\n    loop interacting with bot\n        A->>B: Ask a question\n        B->>C: Queries data\n        C--\x3e>B: Returns information\n        B--\x3e>A: Sends response\n    end\n    A->>B: close tab/ disconnect from session\n    deactivate B\n\n    A->>B: Reconnect\n    activate B\n    B->>C: retrieve previous queries\n    C--\x3e>B: return previous conversation related to account\n    B--\x3e>A: display previous conversation\n    \n\n    deactivate B"}),"\n",(0,t.jsx)(n.h2,{id:"use-case-4---edit-queueresend",children:"Use Case 4 - Edit Queue/Resend"}),"\n",(0,t.jsx)(n.p,{children:"Users should be able to modify previously sent messages or resend messages for another response."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The chatbot gave an answer that the user was unsatisfied with."}),"\n",(0,t.jsx)(n.li,{children:"The user highlights the question asked."}),"\n",(0,t.jsx)(n.li,{children:"He or she selects the edit icon."}),"\n",(0,t.jsx)(n.li,{children:"The user has the option to update the message before resending."}),"\n",(0,t.jsx)(n.li,{children:"The user clicks send and the chatbot answers the question."}),"\n"]}),"\n",(0,t.jsx)(n.mermaid,{value:"sequenceDiagram\n    actor A as User\n    participant B as ChatBot\n    participant C as Database\n    \n    \n    A->>B: Connect to the App\n    activate B\n    \n    A->>B: Ask a question\n    activate A\n    B->>C: Queries data\n    C--\x3e>B: Returns information\n    B--\x3e>A: Sends response\n    A->>B: Fixing entered entries\n    B->>C: Queries data\n    C--\x3e>B: Returns information\n    B--\x3e>A: send response\n    Note over A,B: delete pre fixing entries and displaying new one\n    deactivate A\n    A->>B: close tab/ disconnect from session\n    deactivate B"}),"\n",(0,t.jsx)(n.h2,{id:"use-case-5---newclear-chat",children:"Use Case 5 - New/clear Chat"}),"\n",(0,t.jsx)(n.p,{children:"Users should have the ability to create a new chat with the chatbot."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'The user selects the "New Chat" button.'}),"\n",(0,t.jsx)(n.li,{children:'An alert message pops up on the screen stating "Creating a new chat also clears the chat. Do you wish to continue?".'}),"\n",(0,t.jsx)(n.li,{children:"The user selects yes, and the chat is cleared to start a new conversation."}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);