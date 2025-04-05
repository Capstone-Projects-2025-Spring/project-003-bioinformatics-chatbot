import { useState, useRef, useEffect } from "react";
import ChatBox from "../Components/chatBox";
import UserBubble from "../Components/userBubble";
import ResponseBubble from "../Components/responseBubble";
import ErrorBox from "../Components/errorBox";
import LoadingSpinner from "../Components/loadingSpinner";
import axios from "axios";
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from 'docx';
import { saveAs } from "file-saver";
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
	 * Ref to the setTimeout function in handleError.
	 */
	const timeoutRef = useRef(null);

	/**
	 * State for managing any error messages that need to be shown.
	 */
	const [error, setError] = useState({
		title: "",
		body: "",
	});

	/**
	 * State for managing if the different options for downloading is shown.
	 */

	const [isDialogOpen, setIsDialogOpen] = useState(false);

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

	/**
	 * Function to set error to be shown using the errorBox.jsx with timed reset
	 * @param {object} error - The error object.
	 * @param {string} error.title - The title of the error message.
	 * @param {string} error.body - The detailed error message.
	 */
	const handleError = (error) => {
		setError({ title: error.title, body: error.body });

		/**
		 * Clear any existing timeout to prevent multiple timeouts
		 */
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		/**
		 * Set a new timeout
		 */
		timeoutRef.current = setTimeout(() => {
			setError({ title: "", body: "" });
			timeoutRef.current = null; // Reset the ref after clearing the error
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

		// Remove all messages after the one the user is editing
		const updatedMessages = messages.slice(0, index);

		// Update state and sessionStorage
		setMessages(updatedMessages);
		sessionStorage.setItem("messages", JSON.stringify(updatedMessages));
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

    const userMessage = { 
      id: messages.length, 
      text: input,
	  time: new Date().toLocaleString(), 
      type: "Question",
      sender: "User",
    };
		
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    // setMessages((prevMessages) => [...prevMessages, userMessage]);
    

		/**
		 * Send message to Flask backend using axios
		 */
		setLoading(true);
		axios
			.post("http://localhost:444/chat", {
				message: input,
				conversationHistory: updatedMessages
			})
			.then((response) => {
				const botResponse = {
					id: messages.length + 1,
					text: response.data.response,
					type: "Response",
					sender: "Chatbot",
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
	 * If no messages were sent the the chatbot, an error message is sent instead.
	 */

	const handleDownloadtxt = () => {
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
				(acc, curr) => {
				  if (curr.type === "Response") { // if its a response do not include the time
					
					return `${acc}${curr.type}: ${curr.text}\n---------------------------\n\n`;
				  } else {
					
					return `${acc}${curr.time}\n\n${curr.type}: ${curr.text}\n\n`;
				  }
				},
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
	 * Download fucntion that allows the user to download the  chat history as a .doc file.
	 * If no messages were sent the the chatbot, an error message is sent instead.
	 */

	const handleDownloaddoc = async () => {

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
				(acc, curr) => {
				  if (curr.type === "Response") { // if its a response do not include the time
					// 
					return `${acc}${curr.type}: ${curr.text}\n\n---------------------------\n\n`;
				  } else {
					
					return `${acc}${curr.time}\n\n${curr.type}: ${curr.text}\n\n`;
				  }
				},
				""

			  );

			/**
			 * Splits the formatted string into an array of text.
			 * @type {string[]}
			 */
			const texts = conversation.split("\n\n");

			/**
			 * Creates a Word document with paragraphs.
			 * @type {Document}
			 */
			const doc = new Document({
				sections: [
					{
						children: texts.map(
							(text) =>
								/**
								 * Creates a paragraph for each message with spacing.
								 * @type {Paragraph}
								 */
								new Paragraph({
									children: [new TextRun(text)],
									spacing: {
										after: 100, // Adds space after each message
									},
								})
						),
					},
				],
			});

			/**
			 * Converts the document to a Blob and then starts the download.
			 */
			Packer.toBlob(doc).then((blob) => {
				saveAs(blob, "ChatHistory.docx");
			});
		}
	};

	/**
	 * Download fucntion that allows the user to download the  chat history as a .pdf file.
	 * If no messages were sent the the chatbot, an error message is sent instead.
	 */

	const handleDownloadpdf = () => {
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

			const conversation = messages.reduce((acc, curr) => {
				if (curr.type === "Response") { // if its a response do not include the time
					return `${acc}${curr.type}: ${curr.text}\n---------------------------\n\n`;
				} else {
					return `${acc}${curr.time}\n\n${curr.type}: ${curr.text}\n\n`;
				}
			}, "");
	

			/**
			 * Creates a new PDF document with automatic page handling.
			 *  @type {jsPDF}
			 */
			const doc = new jsPDF();

			doc.setFontSize(10);
			// margins for the page
			const marginLeft = 10;
			const marginTop = 10;
			const pageHeight = doc.internal.pageSize.height - 20; 
			const maxWidth = 180; 
			const lineSpacing = 5; 
	
			// This is to make sure that the words do not overflow
			const textLines = doc.splitTextToSize(conversation, maxWidth);
	
			let currentY = marginTop;
			// Manually move the line down when adding words and adding a new page if need be
			textLines.forEach((line) => {
				if (currentY + lineSpacing > pageHeight) { 
					doc.addPage(); 
					currentY = marginTop; 
				}
				doc.text(line, marginLeft, currentY);
				currentY += lineSpacing; // Move down for next line
			});
	
			/**
			 * Saves the PDF file
			 */
			doc.save("ChatHistory.pdf");
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
				<ErrorBox title={error.title} body={error.body} setError={setError} />
			)}

			<nav>
				<div className='flex justify-center bg-green-600 p-4'>
					<h1 className='text-2xl text-white'>Chatbot</h1>
				</div>
			</nav>

			{/** Chat messages container. */}
			<div className='flex-1 max-w-s overflow-y-auto px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 space-y-2 sm:space-y-3 md:space-y-5 lg:space-y-6 pb-20 bg-gray-800 break-words'>
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
					onClick={() => setIsDialogOpen(true)}
					className='py-2 pl-4 pr-4 border rounded-lg bg-green-600 hover:bg-green-400 hover:text-gray-200'>
					<img
						src='src\assets\downloads.png'
						alt='Download Icon'
						className='w-5 h-5'
					/>
				</button>
			</div>
			{/** Small container that allows the user to choose the format of the messages */}
			{isDialogOpen && (
				<div className="absolute bottom-16 right-4 z-50">
					<div className="p-4 border rounded-lg bg-gray-800 shadow-lg space-y-2">
						<h2 className="text-lg font-semibold text-white">Select the file type</h2>
						<button
							data-testid='downloadButtontxt'
							onClick={handleDownloadtxt}
							className="w-full p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
						>
							.txt
						</button>
						<button
							data-testid='downloadButtonpdf'
							onClick={handleDownloadpdf}
							className="w-full p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
						>
							.pdf
						</button>
						<button
							data-testid='downloadButtondoc'
							onClick={handleDownloaddoc}
							className="w-full p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
						>
							.doc
						</button>
						<button
							onClick={() => setIsDialogOpen(false)}
							className="w-full p-2 bg-red-500 rounded-lg text-white hover:bg-red-600"
						>
							Close
						</button>
					</div>
				</div>
			)}

		</div>
	);

}

export default Chat;
