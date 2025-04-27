---
sidebar_position: 2
---

<!--Overview Section-->
# Backend API 

Doucumentation of Backend API From Flask Server

### `GET /index`
<details open="True"> 

- Renders the index page. 
- Methods: `GET`, `POST` 
    - Handles login form submission. 
	- Redirects to the admin page if credentials are correct. 
	- Displays an error message on failed login. 

</details> 


### `GET/POST /admin`
<details open="true"> 
	
- Admin dashboard with document list UI and file upload functionality.
- **Parameters:** 
  - No URL parameters.
  - On `POST`: Expects a form upload with a PDF file under the field name `pdf_file`.
- **Returns:** 
  - On `GET`: Renders the admin dashboard with a list of documents.
  - On `POST` success (valid PDF upload): 
    ```json
    {
      "message": "File '{filename}' uploaded successfully!",
      "document": {
        "id": document_id,
        "name": document_name,
        "type": document_type,
        "size": file_size_in_bytes
      }
    }
    ```
  - If no file is uploaded: 
    ```json
    { "error": "No file uploaded" }
    ```
  - If file type is invalid (not PDF): 
    ```json
    { "error": "Invalid file type. Only PDFs are allowed." }
    ```
  - If a document with the same name and type already exists:
    ```json
    { "error": "A document named '{filename}' already exists." }
    ```
  - If form data is invalid:
    ```json
    { "error": "Invalid form data. Please ensure all fields are filled correctly." }
    ```

</details>

### `DELETE /delete/{item_id}`
<details open="True"> 
	
- Deletes a document from the database. 
- Parameters: - `item_id` (int): The ID of the document to delete. 
- Returns: 
  - if deletion is successful: `{ "success": true, "message": "Item {item_id} deleted successfully" }` 
  - if an error occurs:  `{ "success": false, "message": "Failed to delete item", "error": "error details" }`
 
</details>

### `GET /download/{item_id}`
<details open="true"> 
	
- Downloads a document from the database.
- **Parameters:** 
  - `item_id` (int): The ID of the document to download.
- **Returns:** 
  - If download is successful: The PDF file as a downloadable attachment.
  - If the document is not found: `{ "success": false, "message": "Item {item_id} not found" }`
  - If an error occurs: `{ "success": false, "message": "Failed to download document", "error": "error details" }`
 
</details>


### `POST /chat`
<details open="True"> 
	
- Handles chat messages and retrieves relevant document information. 
- Methods: `POST` 
- Parameters:
  - `message` (str): The user's input message. 
  - `conversationHistory` (list): Previous messages in the conversation. 
- Functionality: 
	- Queries the database for relevant documents based on user input. - Filters documents with a similarity score of ≥ 0.90. - Constructs a prompt using the retrieved documents and chat history. - Sends the formatted prompt to an LLM (`llama3.1`) for response generation. 
    - Returns the LLM-generated response. 
- Returns: 
   - if successful: `{ "response": "<LLM-generated response>" }` 
   - if no relevant documents are found: `{ "response": "No document found", "message": "No relevant information available." }`  
   - if no message is provided: `{ "error": "Message is required" }` 
   - if no conversation history is provided: `{ "error": "conversationHistory is required" }` 
   - if an exception occurs: `{ "error": "An error occurred: <error details>" }`


### `socket.on("chat")`
<details open="true"> 
	
- Handles incoming chat messages from the client, streams an AI-generated response based on retrieved documents.
- **Parameters:** 
  - `data` (JSON object):
    - `message` (string): The user's query.
    - `conversationHistory` (list of objects): Previous conversation history, with each object containing:
      - `sender` (string): Either `"User"` or `"Chatbot"`.
      - `text` (string): The message content.
- **Emits:** 
  - On missing fields:
    - `"error"` with `{ "error": "Message is required" }`
    - `"error"` with `{ "error": "conversationHistory is required" }`
  - If no documents found:
    - `"chunk"` with `{ "chunk": "No document found" }`
    - `"done"` with `{ "status": "complete" }`
  - On success:
    - Streams `"chunk"` events containing parts of the AI's generated markdown response.
    - Emits `"done"` event with `{ "status": "complete" }` at the end.
  - On error:
    - `"error"` with `{ "error": "error details" }`

</details>

### `socket.on("cancel")`
<details open="true"> 
	
- Cancels an ongoing chat session.
- **Parameters:** 
  - No additional parameters (uses session ID automatically).
- **Effect:** 
  - Marks the current session as cancelled, stopping any ongoing response streaming.

</details>


### `GET /change_password`
<details open="true"> 
	
- Displays the change password form.
- **Parameters:** 
  - No parameters.
- **Returns:** 
  - Renders the `changepassword.html` page containing the password change form.

</details>

### `POST /change_password`
<details open="true"> 
	
- Handles password change request.
- **Parameters:** 
  - Form data:
    - `current_password` (string): The user's current password.
    - `new_password` (string): The new password the user wants to set.
    - `confirm_password` (string): Confirmation of the new password.
- **Returns:** 
  - On success: Redirects to the admin dashboard with a success message: `"Password changed successfully."`
  - On missing fields:
    - Flash message: `"Missing required fields."`
  - On password mismatch (new and confirm):
    - Flash message: `"New password and confirmation do not match."`
  - On incorrect current password:
    - Flash message: `"Current password is incorrect."`
  - If the new password is the same as the current:
    - Flash message: `"New password cannot be the same as the current password."`
  - All errors redirect back to the password change form.

</details>

</details>
		
### `GET /logout`
<details open="True"> 
	
- Logs the user out by redirecting to the login page. 
- Method: `GET` 
- Returns:
  - Redirects to `/index`
 
</details>
