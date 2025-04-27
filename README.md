[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17857751)
<div align="center">

<img src="https://raw.githubusercontent.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/e631e760afa8739c8c61edf0687d2edffcf8e8b2/frontend/logo.svg" width="70" />

# BioInformatics Software Tutorial Chatbot
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://capstone-projects-2025-spring.github.io/project-003-bioinformatics-chatbot/)
[![CI Status](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/actions/workflows/ci-tests.yml/badge.svg)](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/actions/workflows/ci-tests.yml)


</div>


## Keywords

**Section 003, React.js, JavaScript, HTML, CSS, Python, Flask, Ollama, Retrieval-Augmented Generation (RAG), Generative AI, Large Language Model (LLM)**

## Project Overview

This project aims to create a chatbot powered by Generative AI and RAG to help bioinformatics researchers solve problems by providing accurate answers and tutorials using predefined methods.

## Project Abstract

The Bioinformatics Chatbot is a cutting-edge web application designed to assist bioinformatics researchers with complex problems more efficiently. The application enables users to ask the chatbot questions and receive relevant, accurate answers. Using innovative learning technology and human-like behavior, the chatbot guides the researchers with step-by-step tutorials (answers) for complex bioinformatics questions. The methods provided to the chatbot will serve as the foundation for generating precise responses, enabling users to save time and focus on advancing their research. By harnessing the strength of AI, the web application is transforming how researchers tackle heartfelt problems leading to rapid advancements. 


## High Level Requirement

Once the user accesses the link to our web application, they will come into view of our welcome page that briefly summarizes the application's purpose. The welcome page also details the users who have worked on bringing the Bioinformatics Chatbot to life. To begin using the chatbot, the user clicks on the "Begin New Chat" button which activates the interface for the chatbot.

The chat interface is the crux of our application. The user can ask the chatbot questions and receive answers that are based on user-provided documentation, which can be submitted by clicking the black paper plane icon. The interface also allows the user to edit their queries if they do not like the response from the chatbot, or if the user wants to change their question. This is done by clicking on the pencil icon. Additionally, once the user is done conversing with the chatbot, they have the option to download the conversation history for later reference by pressing the download button in the bottom right-hand corner.

For the chatbot to deliver quality answers tailored towards Bioinformatics, there is a backend application where users can upload relevant documentation. After logging in, users can navigate to the documentation upload page by clicking on the "Upload PDF" link. Once on the page, the user can upload their bioinformatics documentation which is stored inside of our database for the LLM to reference when producing accurate responses.  
 



## How to run this project in your own environment?

Note: You will need to add your own Document for the Chatbot to work

1. Install and Open Docker Desktop and Vscode
2. Download and unzip the source code in the most recent [project release](github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/releases/latest)
3. In Vscode open the project file after you unzip, in the backend folder create .env file and database.env
4. In the .env file put this
```
#database variables
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=database
POSTGRES_HOST_AUTH_METHOD=trust
```
5. In the database.env put this:
```
#database variables
POSTGRES_USER=admin
POSTGRES_PASSWORD=admin
POSTGRES_DB=database
POSTGRES_HOST_AUTH_METHOD=trust
```
6. If on Windows, update docker-entrypoint.sh in backend, and docker-compose.yml, to LF format from CRLF format in Vscode by hiting ctrl+shift+p and clicking on "Change End of Line Sequence" and LF. There won't be any noticeable changes but it will change the end of line sequence. Then save the files.
7. In vscode open the terminal and cd to the project from current release number because after you extract the file, the project is going be in a folder with the same name. 
- For example, release v1.0.0 `cd project-003-bioinformatics-chatbot-1.0.0` 
- or release v2.0.0 `cd project-003-bioinformatics-chatbot-2.0.0`
8. Run this command in the terminal, it may take a while to build due to LLM.  
`docker compose -f docker-compose.yml up --build`
9. Frontend host is http://localhost:5173/  
Backend host is http://localhost:444/  
Default Username is admin  
Default Password is admin  

## How to Host and port forward this project to use in your own lab?  
### (Please check Hardware requirement below before proceeding)

1. Click this link [Hosting](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/tree/Hosting) to access the branch purposely made for Hosting service 
2. Then read this [documentation](https://capstone-projects-2025-spring.github.io/project-003-bioinformatics-chatbot/Hosting) for more information.

## Required Resources
### Hardware Requirements for local development
- A computer with a modern operating system (Windows, macOS, or Linux)
- At least **8 GB of RAM**
- At least **2 GB of free disk space**

### Hardware Requirements for Hosting service 
- A computer with a modern operating system (Windows, macOS, or Linux)
- At least **8GB of RAM**
- At least **10 GB of VRAM** (Prefer 12GB NVIDIA GPU with CUDA support)
- At least **2 GB of free disk space**

### Software Requirements
- An up-to-date web browser:
  - **Google Chrome**: Version **131** or later
  - **Mozilla Firefox**: Version **133** or later
  - **Microsoft Edge**: Version **131** or later
  - **Apple Safari**: Version **18.0** or later
- **Docker Desktop** (handles all required dependencies for development)
- **Internet access**

## Collaborators

[//]: # ( readme: collaborators -start )
<table>
<tr>
    <td align="center">
        <a href="https://github.com/kBunn411">
            <img src="https://avatars.githubusercontent.com/u/117461180?s=88&v=4" width="100;" alt="kBunn411"/>
            <br />
            <sub><b>Keith C Bunn</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ahgoldmeer">
            <img src="https://avatars.githubusercontent.com/u/95256721?s=88&v=4" width="100;" alt="ahgoldmeer"/>
            <br />
            <sub><b>Amitai Goldmeer</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/ishmam02">
            <img src="https://avatars.githubusercontent.com/u/66305504?s=88&v=4" width="100;" alt="ishmam02"/>
            <br />
            <sub><b>Ishmam Kabir</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/khanhquocng2801">
            <img src="https://avatars.githubusercontent.com/u/102694034?s=88&v=4" width="100;" alt="khanhquocng2801"/>
            <br />
            <sub><b>Khanh Q Nguyen</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/korlovskiy">
            <img src="https://avatars.githubusercontent.com/u/117465477?s=88&v=4" width="100;" alt="korlovskiy"/>
            <br />
            <sub><b>Katerina Orlovskiy</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/JustinTruong456">
            <img src="https://avatars.githubusercontent.com/u/111546803?s=88&v=4" width="100;" alt="JustinTruong456"/>
            <br />
            <sub><b>Justin Truong</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/chroy2">
            <img src="https://avatars.githubusercontent.com/u/91856253?s=88&v=4" width="100;" alt="chroy2"/>
            <br />
            <sub><b>Troy K Witmer</b></sub>
        </a>
    </td>
</tr>
</table>

[//]: # ( readme: collaborators -end )
