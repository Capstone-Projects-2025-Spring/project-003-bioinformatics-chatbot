import { useState } from "react";
import ChatBox from "../Components/chatBox";
import UserBubble from "../Components/userBubble";
import ResponseBubble from "../Components/responseBubble";
import ErrorBox from "../Components/errorBox";

function Chat() {
	// State for managing the text input in the ChatBox
	const [input, setInput] = useState("");

	// State for storing the messages to display in the messages container
	const [messages, setMessages] = useState([]);

	// State for managing any error messages that need to be shown
	const [error, setError] = useState({
		title: "", // The title of the error
		body: "", // The body of the error message
	});

	// handleSubmit function will be triggered when the user submits the form (by pressing Enter or clicking the send button)
	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submit behavior (which would reload the page)

		// Error handling: Check if the input is empty (Sample Example for now)
		if (!input.trim()) {
			// Set an error message if the input is empty
			setError({
				title: "Empty Query",
				body: "ChatBox cannot be empty during submission",
			});
			return;
		}
		// Api call will go here
		// If there is no error (i.e., input is valid), proceed with adding the new messages
		setMessages([
			...messages, // Spread the previous messages
			{ id: Date.now(), text: input, type: "Question" }, // Add the user's input as a "Question" message
			{ id: Date.now(), text: "I am disconnected", type: "Response" }, // Add a dummy "Response" message as a placeholder
		]);

		// Clear the input field after submitting the message
		setInput("");
	};

	return (
		<div className='w-full h-screen flex flex-col'>
			{/* Conditionally render the ErrorBox component if there's an error */}
			{error.title && (
				<ErrorBox title={error.title} body={error.body} setError={setError} />
			)}

			{/* Chat messages container */}
			<div className='flex-1 overflow-y-auto p-4 space-y-2 pb-20'>
				{/* Render the messages dynamically based on their type */}
				{messages.map((msg) =>
					msg.type === "Question" ? (
						// If the message type is "Question", display it using the UserBubble component
						<UserBubble key={msg.id} text={msg.text} />
					) : (
						// If the message type is "Response", display it using the ResponseBubble component
						<ResponseBubble key={msg.id} text={msg.text} />
					)
				)}
			</div>

			{/* Chat input form */}
			<div className='w-full'>
				<ChatBox
					input={input} // Current value of the input field
					setInput={setInput} // Function to update the input field
					handleSubmit={handleSubmit} // Function to handle message submission
				/>
			</div>
		</div>
	);
}

export default Chat;
