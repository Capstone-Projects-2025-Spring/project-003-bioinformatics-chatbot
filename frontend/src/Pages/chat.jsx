import { useState, useRef, useEffect } from "react";
import ChatBox from "../Components/chatBox";
import UserBubble from "../Components/userBubble";
import ResponseBubble from "../Components/responseBubble";
import ErrorBox from "../Components/errorBox";

function Chat() {
	// State for managing the text input in the ChatBox
	const [input, setInput] = useState("");

	// State for storing the messages to display in the messages container
	const [messages, setMessages] = useState([]);

	// Ref to the bottom of the messages list for auto-scrolling
	const messagesEndRef = useRef(null);

	// State for managing any error messages that need to be shown
	const [error, setError] = useState({
		title: "",
		body: "",
	});

	// Load messages from sessionStorage on component mount
	useEffect(() => {
		const savedMessages = sessionStorage.getItem("messages");
		if (savedMessages) {
			setMessages(JSON.parse(savedMessages)); // Parse and set the messages
		}
	}, []);

	// Function to handle clicking the edit button
	const handleEdit = (index) => {
		setInput(messages[index].text); // Fills the input chat box with the text of the message being edited
	};

	// Handle form submission for adding new messages
	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior (which would reload the page)
		if (!input.trim()) {
			// Error handling: If the input is empty, set an error message (to be updated)
			setError({
				title: "Empty Query",
				body: "ChatBox cannot be empty during submission",
			});
			return;
		}

	// If input is valid, add new messages (a Question and a dummy Response)
		setMessages((prevMessages) => [
			...prevMessages,
			{ id: prevMessages.length, text: input, type: "Question" },
		]);

		// API call will go here

		setMessages((prevMessages) => [
			...prevMessages,
			{ id: prevMessages.length, text: "I am disconnected", type: "Response" },
		]);
	
		// Clear the input field after submission
		setInput("");
	};

	const download = () =>{
		// Error handling to make sure that the .txt file is not created if the user has not entered a message
		if (messages.length == 0){
			alert("Please have a conversation with the chatbot before downloading.")
		}

		else {
			// Converts the array from the session storage into a string
			const conversation  = messages.reduce((acc, curr) => `${acc}${curr.type}: ${curr.text}\n` ,'') 
			// Creates a file object
			const txtfile = new Blob([conversation], {type: 'text/plain'});
			// Anchor for the link for downloading
			const element = document.createElement("a");
			// Creats a URL so that the computer starts the download of the file when clicked
			element.href = URL.createObjectURL(txtfile);
			// Name of the file
			element.download = "ChatHistory.txt";
			// Allows the action of the download to happen when the button is clicked
			document.body.appendChild(element);
			// This actually triggers the download
			element.click();
		}

	}

	// Save messages to sessionStorage and auto-scroll to bottom whenever the messages state changes
	useEffect(() => {
		if (messages.length > 0) {
			sessionStorage.setItem("messages", JSON.stringify(messages));
		}
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	

	return (
		<div className='w-full h-screen flex flex-col'>
			{/* Conditionally render the ErrorBox if there is an error */}
			{error.title && (
				<ErrorBox title={error.title} body={error.body} setError={setError} />
			)}

			{/* Chat messages container */}
			<div className='flex-1 overflow-y-auto p-4 space-y-2 pb-20'>
				{/* Render messages dynamically based on their type */}
				{messages.map((msg, index) =>
					msg.type === "Question" ? (
						<UserBubble 
							key={msg.id} 
							text={msg.text} 
							onEdit={() => handleEdit(index)} 
						/>
					) : (
						<ResponseBubble key={msg.id} text={msg.text} />
					)
				)}
				{/* A dummy div to scroll into view */}
				<div ref={messagesEndRef} />
			</div>
			{/* Button for Download */}
			<button onClick={download}>
				Download Chat History
			</button>
            
			{/* Chat input form */}
			<div className='w-full'>
				<ChatBox
					input={input}
					setInput={setInput}
					handleSubmit={handleSubmit}
				/>
			</div>
		</div>
	);
}

export default Chat;
