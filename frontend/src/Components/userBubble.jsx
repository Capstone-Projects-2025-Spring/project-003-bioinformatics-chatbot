import PropTypes from "prop-types";

// Define PropTypes for validation
UserBubble.propTypes = {
	text: PropTypes.string.isRequired, // `text` is a required prop of type string
	onEdit: PropTypes.func.isRequired // callback function to handle edits
};

export default function UserBubble({ text, onEdit }) {
	return (
		<div className='flex items-center justify-end gap-2 bg-gray-100 rounded-lg max-w-md ml-auto text-left p-2'>
			{/* User's query text is displayed in flex container */}
			<p className='flex-1'>{text}</p>  

			{/* Edit button to trigger onEdit function and populate input chat box */}
			<button
				onClick={onEdit}
			>
				✏️
			</button>
		</div>
	);
}
