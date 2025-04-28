---
sidebar_position: 7
---


# Development Environment Setup 

This document shows to setup the Development Enviroment locally.

Note: You will need to add your own Document for the Chatbot to work

1. Install and Open Docker Desktop and your prefered text editor (i.e VsCode)
2. Download and unzip the source code in the most recent [project release](https://github.com/Capstone-Projects-2025-Spring/project-003-bioinformatics-chatbot/releases/latest).
3. In your text editor open the project file after you unzip, in the backend folder create .env file and database.env
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
6. If on Windows, update docker-entrypoint.sh in backend, and docker-compose.yml, to LF format 
from CRLF format in Vscode by hiting ctrl+shift+p and clicking on "Change End of Line Sequence" 
and LF. If you do not use Vscode you must change the end of line sequence another way.
There won't be any noticeable changes but it will change the end of line sequence. Then 
save the files.
7. In your terminal and cd to the project from current release number because after you extract
the file, the project is going be in a folder with the same name. 
- For example, release v1.0.0 `cd project-003-bioinformatics-chatbot-1.0.0` 
- or release v2.0.0 `cd project-003-bioinformatics-chatbot-2.0.0`
8. Run this command in the terminal, it may take a while to build due to LLM.  
`docker compose -f docker-compose.yml up --build`
9. Frontend host is http://localhost:5173/  
Backend host is http://localhost:444/  
Default Username is admin  
Default Password is admin  

