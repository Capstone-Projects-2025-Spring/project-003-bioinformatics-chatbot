import { useState, useRef, useEffect } from "react";
import ChatBox from "../Components/chatBox";
import UserBubble from "../Components/userBubble";
import ResponseBubble from "../Components/responseBubble";
import ErrorBox from "../Components/errorBox";
import LoadingSpinner from "../Components/loadingSpinner";
import axios from "axios";
import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
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

	/**
	 * State for managing which message is being edited
	 */

	const [editIndex, setEditIndex] = useState(null);

	const [position, setPosition] = useState({ x: 50, y: 50 });

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
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			setPosition({ x, y });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const gradient = `radial-gradient(
		2500px circle at ${position.x}% ${position.y}%,
		color-mix(in oklab, var(--color-primary) 20%, transparent) 0%,
		color-mix(in oklab, var(--color-accent) 10%, transparent) 50%,
		var(--color-bgLight) 100%
	  )`;
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

		/**
		 * Stores index of the message being edited.
		 */
		setEditIndex(index);
	};

	/**
	 * Cancel editing and reset input and edit state.
	 */
	const cancelEdit = () => {
		setInput("");
		setEditIndex(null);
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
		 * If editing, trim the conversation up to the message being edited
		 */
		let updatedMessages = messages;
		if (editIndex !== null) {
			updatedMessages = messages.slice(0, editIndex); // Remove everything after the edited message
			setEditIndex(null); // Reset edit index to null
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

		updatedMessages = [...updatedMessages, userMessage];
		setMessages(updatedMessages);

		/**
		 * Send message to Flask backend using axios
		 */
		setLoading(true);
		axios
			.post("http://localhost:444/chat", {
				message: input,
				conversationHistory: updatedMessages,
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
			const conversation = messages.reduce((acc, curr) => {
				if (curr.type === "Response") {
					// if its a response do not include the time

					return `${acc}${curr.type}: ${curr.text}\n---------------------------\n\n`;
				} else {
					return `${acc}${curr.time}\n\n${curr.type}: ${curr.text}\n\n`;
				}
			}, "");
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
			const conversation = messages.reduce((acc, curr) => {
				if (curr.type === "Response") {
					// if its a response do not include the time
					//
					return `${acc}${curr.type}: ${curr.text}\n\n---------------------------\n\n`;
				} else {
					return `${acc}${curr.time}\n\n${curr.type}: ${curr.text}\n\n`;
				}
			}, "");

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
				if (curr.type === "Response") {
					// if its a response do not include the time
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

	// Default style for Capability and Limitations cards
	const sectionStyle = "text-primary p-4 rounded-2xl bg-bgLight font-body";

	// Example-specific style that changes background color on hover using a custom variable.
	const exampleCardStyle =
		"text-primary p-4 rounded-2xl bg-bgLight transition hover:bg-[var(--color-primaryLight)] font-body";

	const examples = [
		'🧬 "Summarize recent studies on CRISPR-Cas9 in humans"',
		'🧪 "What are the key genes in Alzheimer\'s pathology?"',
		'📚 "Explain the role of RNA-seq in cancer research"',
	];

	const capabilities = [
		"🔍 Searches PubMed & other bio databases using RAG",
		"🧠 Summarizes papers with domain-specific language",
		"💬 Supports follow-up questions & interactive exploration",
	];

	const limitations = [
		"❗ May miss context or misinterpreting of results",
		"🧪 Not a substitute for expert review of literature",
		"📅 May not always access the very latest research",
	];

	// Modified renderCards accepts a style parameter
	const renderCards = (items, style) =>
		items.map((text, index) => (
			<div
				key={index}
				className={style}
				onClick={
					items === examples
						? () => {
								setInput(text);
						  }
						: undefined
				}>
				{text}
			</div>
		));

	return (
		<div
			className='flex flex-col h-screen overflow-hidden transition duration-300'
			style={{ background: gradient }}>
			{/* ─── Error (stays static) ───────────────────────── */}
			{error.title && (
				<ErrorBox title={error.title} body={error.body} setError={setError} />
			)}

			{messages.length == 0 ? (
				<main className='flex flex-1 flex-col justify-center items-center font-body h-full overflow-y-auto'>
					<div className='pt-8 flex flex-col justify-center items-center mb-12'>
						<svg
							width='180'
							height='180'
							viewBox='0 0 200 200'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							{/* DNA Helix */}
							<path
								d='M60 40 C100 60, 100 140, 60 160'
								stroke='oklch(60% 0.12 296)'
								strokeWidth='6'
								fill='none'
							/>
							<path
								d='M140 40 C100 60, 100 140, 140 160'
								stroke='oklch(60% 0.12 296)'
								strokeWidth='6'
								fill='none'
							/>

							{/* Connecting Rungs */}
							<line
								x1='80'
								y1='60'
								x2='120'
								y2='60'
								stroke='oklch(70% 0.09 296)'
								strokeWidth='3'
							/>
							<line
								x1='80'
								y1='90'
								x2='120'
								y2='90'
								stroke='oklch(70% 0.09 296)'
								strokeWidth='3'
							/>
							<line
								x1='80'
								y1='120'
								x2='120'
								y2='120'
								stroke='oklch(70% 0.09 296)'
								strokeWidth='3'
							/>
						</svg>
						<h1 className='text-3xl font-bold text-primary font-heading'>
							BioGenie
						</h1>
						{/* Description */}
						<p className='mt-4 max-w-2xl text-center text-lg text-primary'>
							An advanced chatbot designed to assist researchers in
							bioinformatics by retrieving and summarizing relevant scientific
							literature using a retrieval-augmented generation (RAG) model.
						</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-primary pb-16 max-w-6xl mx-auto w-full'>
						{/* Examples with hoverable color change */}
						<div>
							<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
								💡 Examples
							</h2>
							<div className='flex flex-col gap-4'>
								{renderCards(examples, exampleCardStyle)}
							</div>
						</div>

						{/* Capabilities */}
						<div>
							<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
								🚀 Capabilities
							</h2>
							<div className='flex flex-col gap-4'>
								{renderCards(capabilities, sectionStyle)}
							</div>
						</div>

						{/* Limitations */}
						<div>
							<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
								⚠️ Limitations
							</h2>
							<div className='flex flex-col gap-4'>
								{renderCards(limitations, sectionStyle)}
							</div>
						</div>
					</div>
				</main>
			) : (
				<div className='flex justify-center h-full overflow-y-auto '>
					<div className='w-full py-2 px-4 max-w-7xl mx-auto mt-7'>
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
						<div ref={messagesEndRef} />
						<div className='pb-5'></div>
					</div>
				</div>
			)}

			{/* ─── Messages (only this scrolls) ───────────────── */}

			{/* ─── Input (static at bottom) ───────────────────── */}

			<div className='w-full flex items-center space-x-2 pb-4 bg-transparent break-words'>
				<ChatBox
					input={input}
					setInput={setInput}
					handleSubmit={handleSubmit}
					handleDownloadtxt={handleDownloadtxt}
					handleDownloadpdf={handleDownloadpdf}
					handleDownloaddoc={handleDownloaddoc}
					cancelEdit={cancelEdit}
					editIndex={editIndex}
					loading={loading}
					className='flex-1'
				/>
			</div>
		</div>
	);
}

export default Chat;
