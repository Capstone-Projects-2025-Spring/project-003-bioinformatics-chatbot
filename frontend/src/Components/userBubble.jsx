
/**
 * @module UserBubble
 * This file exports the UserBubble component which renders a user message bubble along with an edit button.
 */

import PropTypes from "prop-types";

/**
 * PropTypes for the UserBubble component.
 *
 * @property {string} text - The user message to display.
 * @property {function} onEdit - Callback function to handle edits, which typically populates the input chat box.
 */

// Define PropTypes for validation
UserBubble.propTypes = {
	text: PropTypes.string.isRequired, // `text` is a required prop of type string
	onEdit: PropTypes.func.isRequired // callback function to handle edits
};

/**
 * UserBubble component renders a chat bubble for user messages with an edit option.
 *
 * This component displays the user's message in a styled bubble and provides an edit button.
 * When the edit button is clicked, the `onEdit` callback is triggered.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.text - The message text to display.
 * @param {function} props.onEdit - Callback function to be called when the edit button is clicked.
 * @returns {JSX.Element} The rendered user message bubble.
 */

export default function UserBubble({ text, onEdit }) {
	return (
		<div className='flex items-center justify-end gap-2 bg-blue-400 rounded-lg max-w-md ml-auto text-left p-2'>
			{/* User's query text is displayed in flex container */}
			<p className='flex-1'>{text}</p>  

			{/* Edit button to trigger onEdit function and populate input chat box */}
			<button
				className = 'py-1 pl-2 pr-2 border rounded-xl bg-blue-500 hover:bg-blue-600 hover:text-gray-200'
				onClick={onEdit}
				data-testid="edit-button" 
			>
				✏️
			</button>
		</div>
	);
}
