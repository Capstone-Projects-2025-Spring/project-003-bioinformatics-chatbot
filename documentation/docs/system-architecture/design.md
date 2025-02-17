---
sidebar_position: 1
---
# Sequence Diagrams 

## 1: Question and Answer system

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Server
    participant D as LLM
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    B->>C: Queries data
    alt data found
        C->>D: Send retrieved documents
        D-->>C: Return generated answer
        C-->>B: Returns answer
        B-->>A: Sends reponse
    else data not found
        C->>D: Send not found documents signal
        D-->>C: Return generated "I don't know"
        C-->>B: Return "I don't know"
        B-->>A: Display "I dont know"
    end    
    deactivate C
    deactivate B
```
*Figure 1: ChatBot Question and Answer System Sequence Diagram*


## 2: Downloading function

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Server
    participant D as LLM
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    B->>C: Queries data
    C->>D: Send retrieved document
    D-->>C: return generated answer
    C-->>B: Returns information
    B-->>A: Sends response

    A->>B: Start download process
    B-->>A: display download link
    deactivate B
    deactivate C
```
*Figure 2: ChatBot downloading system Sequence Diagram*

## 3: Chat History

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Server
    participant D as LLM
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    
    A->>B: Ask a question
    B->>C: Queries data
    C->>D: Send retrieved document
    D-->>C: return generated answer
    C-->>B: Returns answer
    B-->>A: Sends response
    

    loop History chat interaction
    A->>B: Ask a question
    
    B->>C: Queries data
    C->>D: Send retrieved documents with chat history
    D-->>C: Return generated answer
    C-->>B: Return Answer
    B-->>A: display previous conversation
    deactivate B
    deactivate C
    end

```
*Figure 3: ChatBot History System Sequence Diagram*

## 4: Edit queries / Resend queries
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Server
    participant D as LLM
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    
    B->>C: Queries data
    C->>D: Send retrieved document
    D-->>C: return generated answer
    C-->>B: Returns answer
    B-->>A: Sends response
    A->>B: Fixing entered entries
    B->>C: Queries data
    C->>D: Send retrieved document
    D-->>C: return generated answer
    C-->>B: Returns answer
    B-->>A: send response
    Note over A,B: delete pre fixing entries and displaying new one
    
    deactivate B
    deactivate C
```
*Figure 4: ChatBot re-edit/ re-send queries System Sequence Diagram*

## 5: New/clear Chat

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Server
    participant D as LLM
    
    
    A->>B: Connect to the App
    B->>C: Starting backend
    activate B
    activate C
    loop interacting with bot
        A->>B: Ask a question
        B->>C: Queries data
        C->>D: Send retrieved document
        D-->>C: return generated answer
        C-->>B: Returns answer
        B-->>A: Sends response
    end
    A->>B: New Chat button click
    
    deactivate C

    B-->>A: Reconnect confirmation text
    
    deactivate B
    A->>B: Reconnect
    activate B
    
    B->>C: Starting backend
    activate C
    deactivate C
    deactivate B
    
```
*Figure 5: ChatBot open new chat System Sequence Diagram*