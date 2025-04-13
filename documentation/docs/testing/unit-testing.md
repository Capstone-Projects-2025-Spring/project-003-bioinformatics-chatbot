---
sidebar_position: 1
---
# Unit tests

# Testing Setup 
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
6. If on Windows, update docker-entrypoint.sh in backend, and docker-compose.yml, to LF format from CRLF format in Vscode by highlighting the text and on the bottom right click CRLF to LF and save the new file
7. In vscode open the terminal and `cd project-003-bioinformatics-chatbot-1.0.0`
8. Run this commands in the terminal one at a time, it may take a while to build due to LLM. 
- docker compose -f docker-compose.yml build
- docker compose -f docker-compose.yml up
9. Go to Docker Desktop for testing and follow the instrutions for each section listed below


   
## Backend
### Library

Pytest was chosen for backend testing due to its seamless integration with
Flask. For test coverage we are using Coverage.py in order to monitor pytest execution
and get insights regarding untested code paths. Each function and route will be tested 
via pytest on the backend, including unit tests for individual functions. 

To run tests, 
<br>
In Docker Desktop, open the backend container and go to exec tab and type this 

`python -m pytest -vv`
![image](https://github.com/user-attachments/assets/6827a63a-9ec0-44ab-8817-40c8e6921767)



## Frontend
### Library

We are using Vitest for frontend testing in React. Vitest was chosen due to its fast execution,
built-in support for React-Vite projects, and strong compatibility with component testing libraries.
Each component will have tests associated with it, thereby allowing us to test funtctional and UI aspects
of each component. 

To run tests 
<br>
In Docker Desktop, open the frontend container and go to exec tab and type this
<br>
`npm run test`
![image](https://github.com/user-attachments/assets/1f756f23-b9da-4cde-8c8a-e2f267b0908d)


Katerina: for my tests I selected pytest because it works with Flask’s built
in test client to simulate HTTP requests, and this was necessary for multiple
backend tests that I conducted. For instance, the test_chat_message_valid(client) 
test verifies that the /chat route correctly handles requests. Additionally,
pytest also enabled me to conduct error handling. In test_chat_message_missing(client), 
I test for a 400 bad request error when no message is provided, ensuring the API properly 
handles invalid input. Additionally, I used pytest with the libraries io 
and werkzeug to simulate uploading a pdf file in test_upload_pdf_valid(client, app).

Justin: For my testings, I chose pytest because how it easily and efficiently test variables
and support HTTP requests testing. For the testing of my parse_pdf, the test case test_parse_pdf(pdf)
accepts a PDF file, parses it into chunks, and store in a list. Test_parse_pdf is expected to return 
a list containing the parsed chunks. Futhermore, I use pytest to test the intergration of uploading,
parsing, and indexing. The test case test_integration(client, app) is testing for 400 bad request error after
invaild request is made. The test case test_integration(client, app) also verifies that a valid request
successfully completes the entire workflow—uploading, parsing, and indexing—and returns a 200 OK status code.

Keith: For my testing, I chose Vitest because of its seamless integration with testing libraries and its speed. My test's focus was to make sure that the Chat History's download button behaved properly under three different conditions. Those three conditions were that an error message arises when there are zero messages, allowing the user to download the conversation when there is at least one message, and the proper file format (.txt, .doc, or .pdf) is being downloaded. My testing was done under download.test.jsx, which is located in the tests folder in the frontend directory. All tests first simulate the user clicking the download button which allows them to select the file format. The first three tests verify that when the user clicks on the three different file formats, an error message arises since no conversation has been started. The next three tests verify that if there is at least one conversation started, then the chat history is downloaded with the correct file format.


Troy: Backend tests I have written consist of testing functionality for the User model for the database and sqlalchemy,
testing the testing configuration and client, testing the function to return the score for langchain with pg vector.
We have chosed pytest for the backend due to it being the defacto standard for flask testing due to its easily integration
of clients and mocking. Frontend tests I have written/ modified consist of the chat response testing, this was modified
for to ensure that upon submit the "spinner" is shown on the screen and is gone upon response or error.
