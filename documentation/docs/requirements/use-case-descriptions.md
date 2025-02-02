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

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    activate B
    A->>B: Ask a question
    B->>C: Queries data
    alt data found
        C-->>B: Returns information
        B-->>A: Sends reponse
    else data not found
        C-->>B: return null
        B-->>A: display "I dont know"
    end    
    
    deactivate B
```


## Use Case 2 - Downloading Conversation

As a user, I should have the functionality of downloading the conversation between myself and the chatbot to refrence at a later date.

1. A conversation between the user and chatbot has finished.

2. The user selects the "Download Conversation" button and decides which format (.pdf, .txt, .md, etc) to save the file as.

3. A notification appears on the screen that the download is ready to be saved to the user's computer.

4. The user presses the "Save" button to save the history of the converstation with the chatbot file to their device.

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    activate B
    A->>B: Ask a question
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: Sends response

    A->>B: Start download process
    B->>C: initiate phrasing process
    C-->>B: Send back requested file to Chatbox
    B-->>A: display download link
    deactivate B
```

## Use Case 3 - Chat History

Users shoud be able view previous conversations with the chatbot.

1. The chatbot and the user are currently in conversation with one another.
2. The user navigates to the scroll bar.
3. He or she moves the bar up or down so that the past conversations are shown on the screen.

```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    activate B
    loop interacting with bot
        A->>B: Ask a question
        B->>C: Queries data
        C-->>B: Returns information
        B-->>A: Sends response
    end
    A->>B: close tab/ disconnect from session
    deactivate B

    A->>B: Reconnect
    activate B
    B->>C: retrieve previous queries
    C-->>B: return previous conversation related to account
    B-->>A: display previous conversation
    

    deactivate B
```
## Use Case 4 - Edit Queue/Resend

As a user, I should be allowed to modify previously sent messages or resend messages for another response.

1. The chatbot gave an answer that the user was unsatisfied with.
2. The user highlights over the question asked.
3. He or she selects the edit icon.
4. The user has the option to update the messaage before resending.
5. The user clicks send and the chatbot reanwers the question.
```mermaid
sequenceDiagram
    actor A as User
    participant B as ChatBot
    participant C as Database
    
    
    A->>B: Connect to the App
    activate B
    
    A->>B: Ask a question
    activate A
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: Sends response
    A->>B: Fixing entered entries
    B->>C: Queries data
    C-->>B: Returns information
    B-->>A: send response
    Note over A,B: delete pre fixing entries and displaying new one
    deactivate A
    A->>B: close tab/ disconnect from session
    deactivate B
```

## Use Case 5 - New/clear Chat

Users should have the ability to create a new chat with the chatbot.

1. The user selects the "New Chat" button.
2. An alert message pops up on the screen stating "Creating a new chat also clears the chat. Do you wish to continue?".
3. The user selects yes, and the chat is cleared to start a new conversation.
