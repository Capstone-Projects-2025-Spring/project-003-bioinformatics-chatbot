import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * PropTypes for the UserBubble component.
 *
 * @property {string} text - The user message to display.
 * @property {function} onEdit - Callback function to handle edits, which typically populates the input chat box.
 */
UserBubble.propTypes = {
	text: PropTypes.string.isRequired,
	onEdit: PropTypes.func.isRequired,
};

/**
 * UserBubble component renders a chat bubble for user messages with an edit option.
 *
 * When the message is longer than the visible area, it truncates with a "Show full message" toggle.
 *
 * @component
 * @param {object} props
 * @param {string} props.text
 * @param {function} props.onEdit
 * @returns {JSX.Element}
 */
export default function UserBubble({ text, onEdit }) {
	const [showFull, setShowFull] = useState(false);
	const [isTruncated, setIsTruncated] = useState(false);
	const [isCopied, setIsCopied] = useState(false); // State to track if text is copied
	const textRef = useRef(null);
	const fullMessageButtonRef = useRef(null);

	// Check if content is overflowed for truncation
	useEffect(() => {
		const el = textRef.current;
		if (el && el.scrollHeight > el.clientHeight) {
			setIsTruncated(true);
		} else {
			setIsTruncated(false);
		}
	}, [text]);

	// Scroll to the bottom when "Show full message" is clicked
	const handleShowFullMessage = () => {
		setShowFull(!showFull);
		// Scroll the button into view so the message appears at the bottom
		fullMessageButtonRef.current.scrollIntoView({
			behavior: "smooth",
			block: "end",
		});
	};

	// Handle copying text to clipboard
	const handleCopy = () => {
		navigator.clipboard.writeText(text).then(() => {
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 1000); // Reset the icon after 1 second
		});
	};

	return (
		<div className='flex flex-col items-end gap-2 max-w-md ml-auto group'>
			<div className='bg-primaryLight rounded-xl py-2 px-4 text-primary w-auto'>
				<p
					ref={textRef}
					className={`break-words whitespace-pre-wrap overflow-hidden ${
						showFull ? "" : "line-clamp-30"
					}`}>
					{text}
				</p>
				{isTruncated && (
					<button
						ref={fullMessageButtonRef}
						onClick={handleShowFullMessage}
						className='mt-1 text-sm font-semibold text-primary hover:text-accent'
						data-testid='toggle-full-message'>
						{showFull ? "Show less" : "Show full message"}
					</button>
				)}
			</div>
			<div className='flex items-center gap-2'>
				<button
					className='py-1  rounded-xl'
					onClick={handleCopy}
					data-testid='copy-button'>
					{isCopied ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4 text-primary hover:text-accent'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m4.5 12.75 6 6 9-13.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-4 text-primary hover:text-accent'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75'
							/>
						</svg>
					)}
				</button>
				<button
					className='py-1 pr-1 rounded-xl'
					onClick={onEdit}
					data-testid='edit-button'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-4 text-primary hover:text-accent'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
