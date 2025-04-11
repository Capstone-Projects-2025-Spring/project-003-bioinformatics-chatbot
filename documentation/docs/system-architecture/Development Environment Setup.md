---
sidebar_position: 7
---


# Development Environment Setup 

This document shows to setup the Development Enviroment locally.

1. Install and Open Docker Desktop and Vscode 
2. Download and unzip the source code in the most recent project release [here](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/releases)
3. In Vscode open the project file, in the backend folder create .env file and database.env
4. In the .env file put this
    <br> 
   DATABASE_URI=postgresql+psycopg://admin:admin@database:5432/database
   TEST_DATABASE_URI=postgresql+psycopg://admin:admin@test-database:5432/database
5. In the database.env put this
    <br> 
   #database variables
   <br>
   POSTGRES_USER=admin
   <br>
   POSTGRES_PASSWORD=admin
   <br>
   POSTGRES_DB=database
   <br>
   POSTGRES_HOST_AUTH_METHOD=trust
6. If on Windows, update docker-entrypoint.sh in frontend & backend, and docker-compose.yml, to LF format from CRLF format in Vscode 
7. In vscode open the terminal and run:
- docker compose -f docker-compose.yml build
- docker compose -f docker-compose.yml up
