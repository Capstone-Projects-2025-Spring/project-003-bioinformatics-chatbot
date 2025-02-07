---
sidebar_position: 5
---

# Use-Case Descriptions

## Use Case 1 - ChatBot Question and Answer System

Users should have the ability to ask the chatbot questions related to bioinformatics for adequate responces.

1. The user clicks on the weblink and is brought to our website's front page.
2. A question is inputted into the chatbox.
3. The chatbot processes the question to understand how to answer.
4. The chatbot determines the answer by the following criteria:

    - If the answer is found from the documentation:
        - A tutorial will pop up with the method of choice for the user to use for his or her Bioinformatics Research.

    - If the answer is not found in the documentation:
        - The chatbot will say "I don't know" as an answer for the user.
### Diagrams      

![Figure 1: ChatBot Question and Answer System](../../static/img/Send_reedit.png)  
*Figure 1: ChatBot Question and Answer System*

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    B->>C: Queries data
    alt data found
        C-->>B: Returns information
        B-->>A: Sends reponse
    else data not found
        C-->>B: return null
        B-->>A: display "I dont know"
    end    
    deactivate C
    deactivate B
```
*Figure 2: ChatBot Question and Answer System Sequence Diagram*


## Use Case 2 - Downloading Conversation

As a user, I should have the functionality of downloading the conversation between myself and the chatbot to refrence at a later date.

1. A conversation between the user and chatbot has finished.

2. The user selects the "Download Conversation" button and decides which format (.pdf, .txt, .md, etc) to save the file as.

3. A notification appears on the screen that the download is ready to be saved to the user's computer.

4. The user presses the "Save" button to save the history of the converstation with the chatbot file to their device.
### Diagrams   
![Figure 3: ChatBot downloading conversation System](../../static/img/download.png)  
*Figure 3: ChatBot Question and Answer System*
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: Sends response

    A->>B: Start download process
    B->>C: initiate phrasing process
    C-->>B: Send back requested file to Chatbox
    B-->>A: display download link
    deactivate B
    deactivate C
```
*Figure 4: ChatBot Question and Answer System Sequence Diagram*
## Use Case 3 - Chat History

Users shoud be able view previous conversations with the chatbot.

1. The chatbot and the user are currently in conversation with one another.
2. The user navigates to the scroll bar.
3. He or she moves the bar up or down so that the past conversations are shown on the screen.
### Diagrams   
![Figure 5: ChatBot downloading conversation System](../../static/img/history.png)  
*Figure 5: ChatBot viewing history System*
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    loop interacting with bot
        A->>B: Ask a question
        B->>C: Queries data
        C-->>B: Returns information
        B-->>A: Sends response
    end
    A->>B: Scroll upward
    
    B->>C: retrieve previous queries
    C-->>B: return previous conversation in current session
    B-->>A: display previous conversation
    deactivate B
    deactivate C
```
*Figure 6: ChatBot Question and Answer System Sequence Diagram*
## Use Case 4 - Edit Queue/Resend

As a user, I should be allowed to modify previously sent messages or resend messages for another response.

1. The chatbot gave an answer that the user was unsatisfied with.
2. The user highlights over the question asked.
3. He or she selects the edit icon.
4. The user has the option to update the message before resending.
5. The user clicks send and the chatbot reanwers the question.
### Diagrams   
![Figure 7: ChatBot re-edit/ re-send queries System](../../static/img/resending.png)  
*Figure 7: ChatBot re-edit/ re-send queries System*
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    
    activate B
    B->>C: Starting backend
    activate C
    A->>B: Ask a question
    
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: Sends response
    A->>B: Fixing entered entries
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: send response
    Note over A,B: delete pre fixing entries and displaying new one
    
    deactivate B
    deactivate C
```
*Figure 8: ChatBot re-edit/ re-send queries System Sequence Diagram*

## Use Case 5 - New/clear Chat

Users should have the ability to create a new chat with the chatbot.

1. The user selects the "New Chat" button.
2. An alert message pops up on the screen stating "Creating a new chat also clears the chat. Do you wish to continue?".
3. The user selects yes, and the chat is cleared to start a new conversation.

### Diagrams   
![Figure 9: ChatBot downloading conversation System](../../static/img/history.png)  
*Figure 9: ChatBot viewing history System*
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    B->>C: Starting backend
    activate B
    activate C
    loop interacting with bot
        A->>B: Ask a question
        B->>C: Queries data
        C-->>B: Returns information
        B-->>A: Sends response
    end
    A->>B: New Chat button click
    B->>C: Disconnecting Signal
    deactivate C

    B-->>A: Reconnect confirmation text
    
    deactivate B
    A->>B: Reconnect
    activate B
    deactivate B
    B->>C: Starting backend
    activate C
    deactivate C
    
```
*Figure 10: ChatBot Question and Answer System Sequence Diagram*