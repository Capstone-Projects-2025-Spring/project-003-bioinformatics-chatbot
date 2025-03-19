import { useState, useRef, useEffect } from "react";
import ChatBox from "../Components/chatBox";
import UserBubble from "../Components/userBubble";
import ResponseBubble from "../Components/responseBubble";
import ErrorBox from "../Components/errorBox";
import LoadingSpinner from "../Components/loadingSpinner";
import axios from "axios";

/**
 * Chat component renders a chat interface with messaging capabilities.
 *
 * @component
 * @returns {JSX.Element} The rendered Chat component.
 */
function Chat() {
	/**
	 * State for managing the text input in the ChatBox.
	 */
	const [input, setInput] = useState("");
	/*
	 * The state for the loading dots to appear
	 * */
	const [loading, setLoading] = useState(false);

	/**
	 * State for storing the messages to display in the messages container.
	 */
	const [messages, setMessages] = useState([]);

	/**
	 * Ref to the bottom of the messages list for auto-scrolling.
	 */
	const messagesEndRef = useRef(null);

	/**
	 * State for managing any error messages that need to be shown.
	 */
	const [error, setError] = useState({
		title: "",
		body: "",
	});

	/**
	 * Load messages from sessionStorage on component mount.
	 */
	useEffect(() => {
		const savedMessages = sessionStorage.getItem("messages");
		if (savedMessages) {
			/**
			 * Parse and set the messages.
			 */
			setMessages(JSON.parse(savedMessages));
		}
	}, []);

	const handleError = (error) => {
		setError({ title: error.title, body: error.body });
		setInterval(() => {
			setError({ title: "", body: "" });
		}, 5000);
	};

	/**
	 * Function to handle clicking the edit button.
	 * @param {number} index - The index of the message to edit.
	 */
	const handleEdit = (index) => {
		/**
		 * Fills the input chat box with the text of the message being edited.
		 */
		setInput(messages[index].text);
	};

	/**
	 * Handle form submission for adding new messages.
	 * @param {Event} e - The event object.
	 */
	const handleSubmit = async (e) => {
		/**
		 * Prevent the default form submission behavior (which would reload the page).
		 */
		e.preventDefault();
		if (!input.trim()) {
			/**
			 * Error handling: If the input is empty, set an error message.
			 */
			handleError({
				title: "Empty Query",
				body: "ChatBox cannot be empty during submission",
			});
			return;
		}

		/**
		 * Add user's message to chat
		 */
		const userMessage = { id: messages.length, text: input, type: "Question" };
		setMessages((prevMessages) => [...prevMessages, userMessage]);

		/**
		 * Send message to Flask backend using axios
		 */
		setLoading(true);
		axios
			.post("http://localhost:444/chat", {
				message: input,
			})
			.then((response) => {
				const botResponse = {
					id: messages.length + 1,
					text: response.data.response,
					type: "Response",
				};
				setMessages((prevMessages) => [...prevMessages, botResponse]);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching chatbot response:", error);
				handleError({
					title: "Chatbot Error",
					body: "Failed to fetch response from the chatbot.",
				});
				setLoading(false);
			});
		/**
		 * Clear the input field after submission
		 */
		setInput("");
	};

	/**
	 * Download fucntion that allows the user to download the  chat history as a .txt file.
	 * If no messages were sent the the chatbot, an error message is send instead.
	 */

	const handleDownload = () => {
		if (messages.length == 0) {
			handleError({
				title: "Empty Conversation",
				body: "Please send at least one message",
			});
		} else {
			/**
			 * Converts the messages array into a formatted string.
			 * @type {string}
			 */
			const conversation = messages.reduce(
				(acc, curr) => `${acc}${curr.type}: ${curr.text}\n\n`,
				""
			);
			/**
			 * Creates a Blob object for the formatted string.
			 * @type {Blob}
			 */
			const txtfile = new Blob([conversation], { type: "text/plain" });

			/**
			 * Anchor for the link for downloading
			 * @type {element}
			 */
			const element = document.createElement("a");

			element.href = URL.createObjectURL(txtfile); // Creates a URL so that the computer starts the download of the file when clicked

			element.download = "ChatHistory.txt"; // Name of the file

			document.body.appendChild(element); // Allows the action of the download to happen when the button is clicked

			element.click(); // This actually triggers the download
		}
	};

	/**
	 * Save messages to sessionStorage and auto-scroll to bottom whenever the messages state changes.
	 */
	useEffect(() => {
		if (messages.length > 0) {
			sessionStorage.setItem("messages", JSON.stringify(messages));
		}
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<div className='w-full h-screen flex flex-col'>
			{/** Conditionally render the ErrorBox if there is an error. */}
			{error.title && (
				<ErrorBox
					title={error.title}
					body={error.body}
					handleError={handleError}
				/>
			)}

			<nav>
				<div className='flex justify-center bg-green-600 p-4'>
					<h1 className='text-2xl text-white'>Chatbot</h1>
				</div>
			</nav>

			{/** Chat messages container. */}
			<div className='flex-1 max-w-s overflow-y-auto p-3 space-y-2 pb-20 bg-gray-800 break-words'>
				{/** Render messages dynamically based on their type. */}
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
				{/** A dummy div to scroll into view. */}
				<div ref={messagesEndRef} />
			</div>

			{loading && <LoadingSpinner />}
			{/** Chat input form. */}
			<div className='w-full flex items-center space-x-2 p-3 bg-gray-800 break-words'>
				<ChatBox
					input={input}
					setInput={setInput}
					handleSubmit={handleSubmit}
					className='flex-1 '
				/>
				<button
					data-testid='downloadButton'
					onClick={handleDownload}
					className='py-2 pl-4 pr-4 border rounded-lg bg-green-600 hover:bg-green-400 hover:text-gray-200'>
					<img
						src='src\assets\downloads.png'
						alt='Download Icon'
						className='w-5 h-5'
					/>
				</button>
			</div>
		</div>
	);
}

export default Chat;
