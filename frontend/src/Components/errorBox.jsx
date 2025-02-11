import PropTypes from "prop-types";

// Define PropTypes for validation
ErrorBox.propTypes = {
	title: PropTypes.string.isRequired, // `title` must be a required prop of type string
	body: PropTypes.string.isRequired, // `body` must be a required prop of type string
	setError: PropTypes.func.isRequired, // `setError` must be a required prop of type function
};

export default function ErrorBox({ title, body, setError }) {
	return (
		<div
			className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded-lg shadow-lg z-50'
			role='alert'>
			<div className='flex items-center justify-between'>
				<div>
					<p className='font-bold'>{title}</p> {/* Displays the error title */}
					<p>{body}</p> {/* Displays the error body */}
				</div>
				{/* Button to dismiss the error message */}
				<button
					className='text-orange-700 hover:text-orange-900'
					onClick={() => setError({ title: "", body: "" })} // When clicked, reset the error state
				>
					&times; {/* The "×" symbol for the close button */}
				</button>
			</div>
		</div>
	);
}
