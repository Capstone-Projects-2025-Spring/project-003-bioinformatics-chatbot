[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17857751)
<div align="center">

# BioInformatics Software Tutorial Chatbot
[![Report Issue on Jira](https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software)](https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues)
[![Deploy Docs](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg)](https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml)
[![Documentation Website Link](https://img.shields.io/badge/-Documentation%20Website-brightgreen)](https://applebaumian.github.io/tu-cis-4398-docs-template/)
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
 


## Conceptual Design

The frontend user interface of this app will be built using **React.js, JavaScript, HTML, and CSS**. This will allow for the creation of a clean and lightweight application for UI components, a satisfying user interface, and one that can handle user interactions well. It will also be responsible for sending user queries to the AI system, holding the chat history for context, and allowing users to download their conversation so that the method tutorial can be saved. The backend will be built using **Python** and **Flask**. The chatbot will be powered by **Retrieval-Augmented Generation (RAG)** to retrieve the correct method for the problem given by the user, and an **LLM** to use the provided method from the RAG to create a tutorial for the user.

## Background

Bioinformatics is a rapidly growing field that is using breakthroughs in Computer Science and Machine Learning to study and solve biological problems. Multiple Nobel Prizes in the past few years have been won in the fields of Biology and Chemistry by computer scientists. However, given the differences between both the content and the people in the respective fields, clear and effective communication can be a challenge. With the breakthroughs in the AI field and the rise of Large Language Models, the ability to bridge this gap has never been easier, allowing researchers on both sides of the academic 'fence' to easily learn about and work in the field of Bioinformatics. With that in mind, this Chatbot is meant to help bridge that communication gap, with the ability to customize answers and answer specific questions surrounding bioinformatics.

## Required Resources
### Hardware Requirements
- A computer with a modern operating system (Windows, macOS, or Linux)
- At least **8 GB of RAM**
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
