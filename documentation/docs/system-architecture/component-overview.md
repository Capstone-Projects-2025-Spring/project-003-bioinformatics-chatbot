---
sidebar_position: 1
---

# Component and Technology Overview

This document provides an overview of the key components in the system and the technologies used.
## Frontend Application

#### **Technology: React with React Router (JavaScript)**  
The frontend is built using React, offering a component-based architecture for interactive user interfaces. React Router enables seamless navigation within the application.  

#### **Key Features:**
- **Component-Based Design:** Modular and reusable components for maintainability and scalability.  
- **State Management:** Utilizes React Hooks like `useState`, `useEffect`, for efficient state handling.  
- **Dynamic Routing:** React Router enables smooth navigation between pages.  

## Server

#### **Technology: Flask (Python)**
The backend processes user queries, retrieves relevant data, adds new documents, and communicates with the LLM.

#### **Key Features:**
- **Query Processing:** Parses and validates user queries before searching for relevant documents.  
- **Document Retrieval:** Interacts with the **Indexed Documents Database** to fetch relevant information.  
- **Response Handling:** Constructs a prompt for the **LLM** and returns the generated answer to the frontend.  
- **Error Handling & Logging:** Implements monitoring, logging, and error handling for reliability.  
- **Admin Controls:** Allows administrators to add new documents to the database, ensuring the system stays up to date.  

## SQL Database and Vector Database

#### **Technology Stack: PostgreSQL with PGVector**

The system utilizes PostgreSQL for structured data management and PGVector for efficient vector-based searches.  

#### **Database Functions:**
- **SQL Database:**  
  - Stores admin user credentials for secure backend dashboard access.  
  - Manages metadata and binary data of uploaded documents.  
- **Vector Database:**  
  - Stores vectorized chunks of uploaded documents for similarity search.  
  - Ensures efficient indexing and retrieval of relevant content.  

#### **Key Features:**
- **Full-Text Search:**  
  - Enables rapid retrieval of relevant documents based on query matching.  
- **Document Updates:**  
  - Supports continuous addition and deletion of documents.
 
  
## Large Language Model (LLM)

#### **Technology: DeepSeek / Llama**
The LLM generates answers by processing the prompt constructed using retrieved documents.  

#### **Key Features:**
- **Context-Aware Responses:** Uses relevant documents to improve the accuracy of answers.  
- **API-Based Access:** Communicates with the LLM hosted locally via API calls.  

## How Technologies Support System Requirements

This stack ensures a scalable, efficient, and high-performance system for answering user queries.

- **React + Flask + PostgreSQL:** React enables an interactive UI, while Flask handles backend queries and PostgreSQL efficiently stores and retrieves documents.
- **Vector Database + LLM:** PGVector stores vectorized documents for fast retrieval, and DeepSeek/Llama enhances response accuracy by incorporating document context.

This stack combines performance, flexibility, and cost-effectiveness for a responsive, evolving system.
