import PropTypes from "prop-types";

// Define PropTypes for validation
ChatBox.propTypes = {
	input: PropTypes.string.isRequired, // 'input' must be a required prop of type string
	setInput: PropTypes.func.isRequired, // 'setInput' must be a required prop of type function
	handleSubmit: PropTypes.func.isRequired, // 'handleSubmit' must be a required prop of type function
};

export default function ChatBox({ input, setInput, handleSubmit }) {
	return (
		// The form is set to submit via the `handleSubmit` function defined in chat.jsx when the user presses Enter or clicks the submit button
		<form
			className='flex items-center gap-2 w-full'
			onSubmit={handleSubmit}
			data-testid='form' // This attribute is for testing to identify the form
		>
			{/* Input field for the user to type their message or question */}
			<input
				data-testid='input' // This attribute is for testing to identify the input
				type='text'
				placeholder='Ask a question'
				value={input} // The value of the input field is controlled by the `input` prop
				onChange={(e) => setInput(e.target.value)} // Calls `setInput` to update the input state as the user types
				className='w-full py-2 pl-4 pr-10 border rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
			/>
			<button
				className='py-2 pl-4 pr-4 border rounded-lg bg-green-600 hover:bg-green-400 hover:text-gray-200'
				type='submit'
				data-testid='submitButton' // This attribute is for testing to identify the submit button
			>
				<img src="src\assets\send.png" alt="Send Icon" className="w-5 h-5" />
			</button>
		</form>
	);
}
