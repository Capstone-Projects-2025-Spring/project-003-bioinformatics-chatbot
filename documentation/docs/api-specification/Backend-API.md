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


### `GET /admin`
<details open="True"> 

- Renders the admin dashboard. 
	- Fetches and displays a list of documents. 
	- Ensures an admin user exists, creating one if necessary. 

</details>

### `DELETE /delete/{item_id}`
<details open="True"> 
	
- Deletes a document from the database. 
- Parameters: - `item_id` (int): The ID of the document to delete. 
- Returns: 
  - if deletion is successful: `{ "success": true, "message": "Item {item_id} deleted successfully" }` 
  - if an error occurs:  `{ "success": false, "message": "Failed to delete item", "error": "error details" }`
 
</details>

### `GET /upload`

<details open="True">
	
- Renders the PDF upload form.
- Method: `GET` 
- Returns: 
  - Renders the `upload.html` template with the upload form. 
  
</details>

### `POST /upload`

<details open="True"> 
	
- Handles PDF file uploads. 
- Validates file type to ensure only PDFs are uploaded. 
- Stores uploaded files in the database. 
- Processes uploaded documents and sends them to a parser. 
- Returns: 
   - On success: `{ "message": "File '{filename}' uploaded successfully!" }` 
   - if no file is provided: `{ "error": "No file uploaded" }` if no file is provided. 
   - if form validation fails: `{ "error": "Invalid form data. Please ensure all fields are filled correctly." }` 
 
</details>


### `POST /chat`
<details open="True"> 
	
- Handles chat messages and retrieves relevant document information. 
- Methods: `POST` 
- Parameters:
  - `message` (str): The user's input message. 
  - `conversationHistory` (list): Previous messages in the conversation. 
- Functionality: 
	- Queries the database for relevant documents based on user input. - Filters documents with a similarity score of ≥ 0.90. - Constructs a prompt using the retrieved documents and chat history. - Sends the formatted prompt to an LLM (`llama3.2`) for response generation. 
    - Returns the LLM-generated response. 
- Returns: 
   - if successful: `{ "response": "<LLM-generated response>" }` 
   - if no relevant documents are found: `{ "response": "No document found", "message": "No relevant information available." }`  
   - if no message is provided: `{ "error": "Message is required" }` 
   - if no conversation history is provided: `{ "error": "conversationHistory is required" }` 
   - if an exception occurs: `{ "error": "An error occurred: <error details>" }` 
   
</details>
		
### `GET /logout`
<details open="True"> 
	
- Logs the user out by redirecting to the login page. 
- Method: `GET` 
- Returns:
  - Redirects to `/index`
 
</details>