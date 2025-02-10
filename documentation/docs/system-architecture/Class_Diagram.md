---
sidebar_position: 1
---

<!--Overview Section-->

## __Overview__
```mermaid
classDiagram
direction TT
	namespace Frontend {
        class Homepage {
	        +display()
        }

        class Chatbot_frontend {
	        +String query_input
	        +String respone_output
	        +generate_respone_output()
        }

        class chat_history {
	        +String history
	        +add_history(User, Chatbot_frontend)
        }

        class User {
	        +String query_input
	        +String edit_query_input
	        +edit_query(query_input, edit_query_input)
        }

        class Textbox {
	        +String query
	        +get_query(User)
        }

        class send_button {
	        +get_query(Textbox)
	        +send_query(Chatbot_frontend)
        }

        class download_button {
	        +String history
	        +get_history(chat_history)
	        +download(history)
        }

	}
	namespace Backend {
        class server {
        }

        class Chatbot_backend {
	        +String query_input
	        +String respone_output
	        +check_DB(DB_Bioinfo_Parsed)
            +get_rag_respone(LLM, query_input)
        }

        class DB_Bioinfo{
	        +Doc Bioinfo
	        +String admin_login
	        +add_doc(User)
        }

        class DB_Bioinfo_Parsed{
            +Array bag_of_words
        }

        class LLM {
	        +String rag_respone
	        +generate_rag_respone(DB_Bioinfo_Parsed)
        }

	}

    Homepage *-- User
    Homepage *-- Textbox
    Homepage *-- Chatbot_frontend
    Homepage *-- chat_history
    Textbox *-- send_button
    Textbox *-- download_button

    Chatbot_frontend --> Chatbot_backend

    server *-- Chatbot_backend
    server *-- DB_Bioinfo
    Chatbot_backend *-- LLM
    DB_Bioinfo *-- DB_Bioinfo_Parsed
    


```
The class diagram above demonstrates various relationships between different classes within the two components of frontend and backend in the Bioinformatics Chatbot system. 

<!-- Frontend section -->
## __Frontend__
```mermaid
classDiagram
direction BT
	namespace Frontend {
        class Homepage {
	        +display()
        }

        class Chatbot_frontend {
	        +String query_input
	        +String respone_output
	        +generate_respone_output()
        }

        class chat_history {
	        +String history
	        +add_history(User, Chatbot_frontend)
        }

        class User {
	        +String query_input
	        +String edit_query_input
	        +edit_query(query_input, edit_query_input)
        }

        class Textbox {
	        +String query
	        +get_query(User)
        }

        class send_button {
	        +get_query(Textbox)
	        +send_query(Chatbot_frontend)
        }

        class download_button {
	        +String history
	        +get_history(chat_history)
	        +download(history)
        }

	}
    Homepage *-- User
    Homepage *-- Textbox
    Homepage *-- Chatbot_frontend
    Homepage *-- chat_history
    Textbox *-- send_button
    Textbox *-- download_button
```

The frontend component shows the HomePage where everything will be displayed. The Homepage will be composed of the User, TextBox, Chatbot Frontend, ChatHistory. 
+ Chat_history is going to store all the respones from Chatbot and User
+ Chatbot_frontend is going to receive the query and generate a response output
+ User is able to enter or edit a query
+ TextBox is where the User's query will be shown
  + Send_button will sent the query from textbox to Chatbot_frontend
  + download_button will download the chathistory   



<!--Backend section -->
## Backend
```mermaid
classDiagram
direction BT
	namespace Backend {
        class server {
        }

        class Chatbot_backend {
	        +String query_input
	        +String respone_output
	        +check_DB(DB_Bioinfo_Parsed)
            +get_rag_respone(LLM, query_input)
        }

        class DB_Bioinfo{
	        +Doc Bioinfo
	        +String admin_login
	        +add_doc(User)
        }

        class DB_Bioinfo_Parsed{
            +Array bag_of_words
        }

        class LLM {
	        +String rag_respone
	        +generate_rag_respone(DB_Bioinfo_Parsed, Chatbot_backend)
        }

	}
    server *-- Chatbot_backend
    server *-- DB_Bioinfo
    Chatbot_backend *-- LLM
    DB_Bioinfo *-- DB_Bioinfo_Parsed
```

The backend component shows the Server where a RAG(Retrieval-augmented generation) respone will be generated . The Server will be composed of the Chatbot_backend, BD_Bioinfo. 
+ BD_Bioinfo is going to be a database of Bioinformatics tutorials and lessons
  + BD_Bioinfo_Parsed is going to be a database that parses all the important information from the Bioinformatics tutorials and lessons into Bags of words	
+ Chatbot_backend is going to receive the query and check the BD_Bioinfo_Parsed for the information and then it going use LLM to generate a response 
  + LLM (Large Language Model) is going to use the query, BD_Bioinfo_Parsed to generate a RAG(Retrieval-augmented generation) response.
