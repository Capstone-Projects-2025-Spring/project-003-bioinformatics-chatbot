---
sidebar_position: 1
---
# Unit tests

Katerina: for my tests I selected pytest because it works with Flask’s built
in test client to simulate HTTP requests, and this was necessary for multiple
backend tests that I conducted. For instance, the test_chat_message_valid(client) 
test verifies that the /chat route correctly handles requests. Additionally,
pytest also enabled me to conduct error handling. In test_chat_message_missing(client), 
I test for a 400 bad request error when no message is provided, ensuring the API properly 
handles invalid input. Additionally, I used pytest with the libraries io 
and werkzeug to simulate uploading a pdf file in test_upload_pdf_valid(client, app).

## Backend
### Library

Pytest was chosen for backend testing due to its seamless integration with
Flask. For test coverage we are using Coverage.py in order to monitor pytest execution
and get insights regarding untested code paths. Each function and route will be tested 
via pytest on the backend, including unit tests for individual functions. 

To run tests
`python -m pytest -vv`

## Frontend
### Library

We are using Vitest for frontend testing in React. Vitest was chosen due to its fast execution,
built-in support for React-Vite projects, and strong compatibility with component testing libraries.
Each component will have tests associated with it, thereby allowing us to test funtctional and UI aspects
of each component. 

To run tests 
`cd frontend && npm run test`
