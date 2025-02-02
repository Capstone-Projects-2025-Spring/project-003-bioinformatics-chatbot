"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6024],{39553:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(74848),t=i(28453);const r={sidebar_position:4},l="Features and Requirements",a={id:"requirements/features-and-requirements",title:"Features and Requirements",description:"Functional Requirements",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/features-and-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"Amitai Goldmeer",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/general-requirements"},next:{title:"Use-Case Descriptions",permalink:"/project-003-bioinformatics-chatbot/docs/requirements/use-case-descriptions"}},o={},c=[{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Features",id:"features",level:3},{value:"1. New chat",id:"1-new-chat",level:4},{value:"2. Chat History",id:"2-chat-history",level:4},{value:"3. Edit Query / Resend",id:"3-edit-query--resend",level:4},{value:"4. Download Chat",id:"4-download-chat",level:4},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:2},{value:"1. Performance",id:"1-performance",level:4},{value:"2. Scalability",id:"2-scalability",level:4},{value:"3. Availability &amp; Reliability",id:"3-availability--reliability",level:4},{value:"4. Usability",id:"4-usability",level:4},{value:"5. Maintanability",id:"5-maintanability",level:4}];function d(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"features-and-requirements",children:"Features and Requirements"}),"\n",(0,s.jsx)(n.h2,{id:"functional-requirements",children:"Functional Requirements"}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsx)(n.h4,{id:"1-new-chat",children:"1. New chat"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Allows users to start a fresh conversation or clear the existing chat."}),"\n",(0,s.jsxs)(n.li,{children:["Requirements:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'A "New Chat" button to reset the conversation.'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prompt confirmation before clearing chat history."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Backend support to clear session data."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-chat-history",children:"2. Chat History"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Description: Users can view past conversations and revisit previous messages."}),"\n",(0,s.jsxs)(n.li,{children:["Requirements:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Store conversation history in database."}),"\n",(0,s.jsx)(n.li,{children:"Display a list of past chats with timestamps."}),"\n",(0,s.jsx)(n.li,{children:"Allow users to click and restore previous sessions."}),"\n",(0,s.jsx)(n.li,{children:"Implement pagination or search functionality for long histories."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"3-edit-query--resend",children:"3. Edit Query / Resend"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Description: Users can modify and resend a previous message instead of typing it again."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Edit button next to each sent message."}),"\n",(0,s.jsx)(n.li,{children:"Allow inline editing and resending of the modified query."}),"\n",(0,s.jsx)(n.li,{children:"Maintain conversation context after editing a message."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4-download-chat",children:"4. Download Chat"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Description: Users can download their chat history for future reference."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Requirements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Provide an option to download the chat in TXT, PDF, or CSV format."}),"\n",(0,s.jsx)(n.li,{children:"Format conversations neatly with timestamps."}),"\n",(0,s.jsx)(n.li,{children:"Ensure proper encoding and file naming conventions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"non-functional-requirements",children:"Non-Functional Requirements"}),"\n",(0,s.jsx)(n.h4,{id:"1-performance",children:"1. Performance"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The chat box should load messages instantly without noticeable delay."}),"\n",(0,s.jsx)(n.li,{children:"Support at least 100,000 messages stored without performance degradation."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-scalability",children:"2. Scalability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The system should handle concurrent users without server overload.'"}),"\n",(0,s.jsx)(n.li,{children:"Ensure cloud or database scaling for large user bases."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"3-availability--reliability",children:"3. Availability & Reliability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The chat service should maintain 99.9% uptime."}),"\n",(0,s.jsx)(n.li,{children:"Implement auto-recovery mechanisms for server failures."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"4-usability",children:"4. Usability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure mobile/ website -friendly and responsive design."}),"\n",(0,s.jsx)(n.li,{children:"Provide accessibility features such as screen reader compatibility."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"5-maintanability",children:"5. Maintanability"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use modular and well-documented code for easy updates."}),"\n",(0,s.jsx)(n.li,{children:"Ensure backward compatibility when upgrading features."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);