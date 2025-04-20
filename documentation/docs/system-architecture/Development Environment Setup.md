---
sidebar_position: 7
---


# Development Environment Setup 

This document shows to setup the Development Enviroment locally.

1. Install and Open Docker Desktop and Vscode 
2. Download and unzip the source code in the most recent project release [here](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/releases)
3. In Vscode open the project file, in the backend folder create .env file and database.env
4. In the .env file put this<br />
   DATABASE_URI=postgresql+psycopg://admin:admin@database:5432/database
   TEST_DATABASE_URI=postgresql+psycopg://admin:admin@test-database:5432/database
5. In the database.env put this<br />
   #database variabless<br />
   POSTGRES_USER=admins<br />
   POSTGRES_PASSWORD=admins<br />
   POSTGRES_DB=databases<br />
   POSTGRES_HOST_AUTH_METHOD=trust
7. If on Windows, update docker-entrypoint.sh in backend, and docker-compose.yml, to LF format from CRLF format in Vscode by hiting ctrl+shift+p and clicking on "Change End of Line Sequence" and LF. Then save the files.
8. In vscode open the terminal and `cd project-003-bioinformatics-chatbot-1.0.0`
9. Run this commands in the terminal one at a time, it may take a while to build due to LLM. 
- docker compose -f docker-compose.yml build
- docker compose -f docker-compose.yml up
9. Frontend host is http://localhost:5173/s<br />
   Backend host is http://localhost:444/s<br />
   Username is admins<br />
   Password is admin

