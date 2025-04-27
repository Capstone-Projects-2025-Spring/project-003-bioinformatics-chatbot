---
sidebar_position: 2
---
# Integration tests

## Backend 
Pytest and Flask provide easy integration testing by providing test clients to
make API calls on a built application. Python makes it easy to mock any data we
might need to test via the unittest module.

## Frontend
Vitest allows us to test components in a way that ensures their functionality when
interacting with the backend. With Axios we can make real API requests to the backend using front
end components and validate that the frontend correctly processes and displays the received data.


## Integration Test for Use Case 1
Users wants to ask the chatbot questions related to bioinformatics.

1. The user clicks on the weblink and is brought to our website's front page.
2. A question is inputted into the chatbox.
3. The chatbot processes the question to understand how to answer.
4. The chatbot determines the answer by the following criteria:

    - If the answer is found from the documentation:
        - A tutorial will pop up with the method of choice for the user to use for his or her Bioinformatics Research.

    - If the answer is not found in the documentation:
        - The chatbot will say "I don't know" as an answer for the user.

<details open="True">
- Runs `Frontend / Renders chat input and messages container` unit test.
- Runs `Frontend / Allows user to type in chat input` unit test.
- Runs `Frontend/ Submits a message and adds response` unit test.
- Runs `Frontend/ Displays error when submitting empty input` unit test.
- Runs `Frontend / Error message resets after 5 seconds` unit test.
- Runs `Frontend / Renders input field and submit button` unit test. 
- Runs `Frontend/ Renders with the correct input value` unit test.
- Runs `Frontend/ Updates input value when user types` unit test.
- Runs `Frontend / Calls handleSubmit when form is submitted` unit test.
- Runs `Backend/ Test_chat_message_valid` unit test.
- Runs `Backend/ Test_chat_message_missing` unit test.
- Runs `Backend/ Test_query_vector_db_with_doc` unit test.
- Runs `Backend/ Test_query_vector_db_no_doc` unit test.
- Runs `Backend/ Test_testing` unit test. 
- Runs `Backend/ Test_handle_chat_with__message_and_history_doc` unit test.
- Runs `Backend/ Test_handle_chat_with_no_message` unit test.
- Runs `Backend/ Test_handle_chat_with_no_conversation` unit test.  
- Runs `Backend/ Test_handle_chat_with__message_and_history_no_doc` unit test.


- Passes if all tests pass.
</details>


## Integration Test for Use Case 2
User wants to download conversation.


1. A conversation between the user and chatbot has finished.

2. The user selects the "Download Conversation" button and decides which format (.pdf, .txt, .doc, etc) to save the file as.

3. A notification appears on the screen that the download is ready to be saved to the user's computer.

4. The user presses the "Save" button to save the history of the converstation with the chatbot file to their device.
<details open="True">
- Runs `Frontend / Displays error when downloading empty conversation for txt` unit test.
- Runs `Frontend / Displays error when downloading empty conversation for pdf` unit test.
- Runs `Frontend/ Displays error when downloading empty conversation for doc` unit test.
- Runs `Frontend/ Downloads chatbot conversation when there is at least one message for .txt` unit test.
- Runs `Frontend / Downloads chatbot conversation when there is at least one message for .pdf` unit test.
- Runs `Frontend/ Downloads chatbot conversation when there is at least one message for .doc` unit test.
- Passes if all tests pass.
</details>


## Integration Test for Use Case 3
Users wants to view previous messages sent.

1. The chatbot and the user are currently in conversation with one another.
2. The user navigates to the scroll bar.
3. He or she moves the bar up or down so that the past conversations are shown on the screen.


<details open="True">
- Runs `Frontend/ Stores messages in sessionStorage` unit test.
- Runs `Frontend / Renders previous messages from sessionStorage` unit test.
- Runs `Frontend/ Calls scrollIntoView when messages state updates` unit test.
- Runs `Frontend/ Renders with text (User Bubble)` unit test.
- Runs `Frontend/ Renders with text (Response Bubble)` unit test.
- Passes if all tests pass.
</details>

## Integration Test for Use Case 4
A user wants to to edit and resend a message.

1. The chatbot gave an answer that the user was unsatisfied with.
2. The user highlights over the question asked.
3. He or she selects the edit icon.
4. The user has the option to update the message before resending.
5. The user clicks send and the chatbot reanwers the question.


<details open="True">
- Runs `Frontend/ Calls onEdit function when edit button is clicked` unit test.


- Passes if all tests pass.
</details>

## Integration Test for Use Case 5
The user wants to create a new chat.

1. The user clicks on the + button in the type right-hand corner.
2. He or she notices the chat is cleared.
<details open="True">
- Runs `Frontend / Renders previous messages from sessionStorage` unit test.
- Runs `Frontend / Clears state and stops loading when New Chat is clicked` unit test.
- Passes if all tests pass. 
</details>

## Integration Test for Use Case 6
An admin wants to upload a document for the chatbot to use.

1. The user signs into the backend and then gets redirect to admin dashboard.
2. The user then selects  the upload option and gets redirected to the upload page.
3. The user selects ONLY pdf files to be loaded to the database.

<details open="True">
- Runs `Backend/ Test_upload_pdf_valid` unit test.
- Runs `Backend/ Test_upload_pdf_dup` unit test.
- Runs `Backend/ Test_validation` unit test.
- Runs `Backend/ Test_content_file` unit test. 
- Runs `Backend/ Test_parse_pdf` unit test.
- Runs `Backend/ Test_index_doc` unit test.
- Runs `Backend/ Test_duplicate_chunks_ignored` unit test.  
- Runs `Backend/ Test_empty_file` unit test. 
- Passes if all tests pass.
</details>

## Integration Test for Use Case 7
An admin wants to delete a document from the database.

1. The user signs into the backend and then gets redirect to admin dashboard.
2. User will see red color delete option in PDF UI table.
3. User clicks on delete and PDF will be instantly deleted from Database.

<details open="True">
- Runs `Backend/ Test_delete_valid_document` unit test.
- Runs `Backend/ Test_delete_non_existent_document` unit test.
- Runs `Backend/ Test_delete_database_error` unit test.
- Passes if all tests pass.
</details>

## Integration Test for Use Case 8
A user wants to download a document from the database.

1. The user sees the red download button on the front page of the backend (no need to sign in).
2. The user clicks the download button to retrieve the document.

<details open="True">
- Runs `Backend/ Test_download_valid_document` unit test.
- Runs `Backend/ Test_download_non_existent_document` unit test.
- Runs `Backend/ Test_download_database_error` unit test.
- Passes if all tests pass.
</details>

## Integration Test for Use Case 9
An admin should be able to log in and perform admin-only actions.

1. The user signs into the backend and then gets redirect to admin dashboard.

<details open="True">
- Runs `Backend/ Login_user` unit test.
- Runs `Backend/ Test_user_table` unit test.
- Runs `Backend/ Test_user_table_with_user` unit test.
- Runs `Backend/ Test_user_table_password` unit test.
- Runs `Backend/ Test_testing` unit test.
- Passes if all tests pass.
</details>
