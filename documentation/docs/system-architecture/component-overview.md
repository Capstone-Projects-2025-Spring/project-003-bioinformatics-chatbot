---
sidebar_position: 1
---

This document is a summary of the technologies used in the project

# Component and Technology Overview

This document provides an overview of the key components in the system and the technologies used.
## Frontend Application

### **Technology: React with React Router (JavaScript)**  
The frontend is built using React, offering a component-based architecture for interactive user interfaces. React Router enables seamless navigation within the application.  

#### **Key Features:**
- **Component-Based Design:** Modular and reusable components for maintainability and scalability.  
- **State Management:** Utilizes React Hooks like `useState`, `useEffect`, for efficient state handling.  
- **Dynamic Routing:** React Router enables smooth navigation between pages.  

## Server

### **Technology: Flask (Python)**
The backend processes user queries, retrieves relevant data, adds new documents, and communicates with the LLM.

#### **Key Features:**
- **Query Processing:** Parses and validates user queries before searching for relevant documents.  
- **Document Retrieval:** Interacts with the **Indexed Documents Database** to fetch relevant information.  
- **Response Handling:** Constructs a prompt for the **LLM** and returns the generated answer to the frontend.  
- **Error Handling & Logging:** Implements monitoring, logging, and error handling for reliability.  
- **Admin Controls:** Allows administrators to add new documents to the database, ensuring the system stays up to date.  

## Indexed Documents Database

### **Technology: PostgreSQL**
The database stores indexed documents and enables efficient retrieval based on user queries.  

#### **Key Features:**
- **Full-Text Search:** Quickly finds relevant documents based on query matching.  
- **Document Updates:** Allows continuous addition and modification of indexed documents.  

## Large Language Model (LLM)

### **Technology: DeepSeek / Llama**
The LLM generates answers by processing the prompt constructed using retrieved documents.  

#### **Key Features:**
- **Context-Aware Responses:** Uses relevant documents to improve the accuracy of answers.  
- **API-Based Access:** Communicates with the LLM hosted locally via API calls.  

## Hosting and Deployment

### **Technology: GitHub Pages (Frontend), Local Server (Backend, Database, LLM)**
The frontend is hosted on **GitHub Pages**, while the backend, database, and LLM run on a **local server**, ensuring full control over data processing and model execution.

#### **Key Features:**
- **CI/CD Pipelines:** Automates deployment from **GitHub** to ensure that the latest changes are live with minimal manual intervention.  
- **Self-Hosted Backend & Database:** Ensures data privacy, reduces third-party dependencies, and allows for fine-tuned optimization.  
- **LLM Hosting:** Runs locally on your own infrastructure, enabling fast and offline-capable inference without relying on external APIs. This setup is cost-effective, especially for smaller-scale applications, as it eliminates ongoing API costs. However, it may require significant local compute resources, especially for larger models.  

## Developer Tooling and Workflow

- **GitHub:** Manages version control and collaboration.  
- **Jira:** Used for project management and task tracking.  
- **ESLint & Prettier:** Enforces consistent code formatting and quality.  
- **Docker:** Containerizes services for easy deployment.  

## How Technologies Support System Requirements

This stack ensures a scalable, efficient, and high-performance system for answering user queries.

- **React + Flask + PostgreSQL:** React enables an interactive UI, while Flask handles backend queries and PostgreSQL efficiently stores and retrieves documents.
- **Indexed Documents + LLM:** PostgreSQL indexes documents for fast retrieval, and DeepSeek/Llama enhances response accuracy by incorporating document context.
- **Local Hosting:** Running the backend, database, and LLM locally provides cost-effective, fast processing without relying on external APIs, offering full control over infrastructure.
- **CI/CD + Docker:** GitHub integration with CI/CD pipelines and Docker ensures smooth deployment and scalability, maintaining up-to-date services.

This stack combines performance, flexibility, and cost-effectiveness for a responsive, evolving system.
