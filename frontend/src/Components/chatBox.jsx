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
			data-testid='form'>
			{/* Input field for the user to type their message or question */}
			<input
				data-testid='input'
				type='text'
				placeholder='Ask a question'
				value={input} // The value of the input field is controlled by the `input` prop
				onChange={(e) => setInput(e.target.value)} // Calls `setInput` to update the input state as the user types
				className='w-full py-2 pl-4 pr-10 border rounded-lg'
			/>
			<button type='submit' data-testid='submitButton'>
				🚀
			</button>
		</form>
	);
}
