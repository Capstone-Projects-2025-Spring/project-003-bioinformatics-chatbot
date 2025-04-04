---
sidebar_position: 6
---


# Development Environment 




Visual Studio Code (Version: 1.96.4)
     





### Frontend and Backend
#### Frontend:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.js (Version: 18.2.0)
- Library for web applications
- Creates user interfaces
- Reusable components for flexibility
- Easy to manage HTML, JavaScript, and CSS



#### Backend
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Python (Version: 3.12.3)
 - Flask (Version: 3.0.0)  
    - Used to handle API calls
    - Very flexible compared to other frameworks
    - Handles interactions with databases and user requests
 - CPython (Version 3.12.3)
    - Default interpreter for Python
 





#### Database
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PostgreSQL
- Holds relevant information for Chabot

---
## Large Language Model
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Large Language Model Meta AI (Llama)
- Autoregressive large language model developed by Meta AI
- Designed to understand and generate human-like responses
- Finetuned to chat with users


#### Technique for LLM
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Retrieval-Augmented Generation (RAG)
- Allows LLMs to make queries using external documentation and training data
  

---

#### Documentation

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Docusaurus (Version: 3.7.0)
- Creates a customizable documentation website
---
## Testing Tools
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Postman (Version 11.3.2)
- Used to test API calls

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pytest (Version 8.3.4)
- Great for unit testing Python code

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vitest (Version 3.0.5)
- Good for unit testing Reat.js code
## Hardware
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A computer with a modern operating system (Windows, MacOS, Linux)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;An up-to-date web browser, such as:
        - Google Chrome: Version 131 or later
        - Mozilla Firefox: Version 133 or later
        - Microsoft Edge: Version 131 or later 
        - Apple Safari: Version 18.0 or later

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Internet access

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
