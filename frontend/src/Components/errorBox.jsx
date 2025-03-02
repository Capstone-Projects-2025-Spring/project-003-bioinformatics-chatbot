
/**
 * @module ErrorBox
 * This file exports the ErrorBox component which displays an error message alert.
 */
import PropTypes from "prop-types";
/**
 * PropTypes for the ErrorBox component.
 *
 * @property {string} title - The title of the error message.
 * @property {string} body - The detailed error message.
 * @property {function} setError - Callback to reset the error state.
 */

ErrorBox.propTypes = {
	title: PropTypes.string.isRequired, // `title` must be a required prop of type string
	body: PropTypes.string.isRequired, // `body` must be a required prop of type string
	setError: PropTypes.func.isRequired, // `setError` must be a required prop of type function
};


/**
 * ErrorBox component displays an error message with a title and a body.
 *
 * This component renders a fixed alert box at the top of the page that provides feedback
 * about an error. It includes a button that allows the user to dismiss the error message by
 * resetting the error state.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.title - The title of the error message.
 * @param {string} props.body - The detailed error message.
 * @param {function} props.setError - Callback function to reset the error state.
 * @returns {JSX.Element} The rendered error alert box.
 */
export default function ErrorBox({ title, body, setError }) {
	return (
		<div
			className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-errorBg text-orange-700 p-4 rounded-lg shadow-lg z-50'
			role='alert'>
			<div className='flex items-center justify-between'>
				<div>
					<p className='font-bold'>{title}</p> {/* Displays the error title */}
					<p>{body}</p> {/* Displays the error body */}
				</div>
				{/* Button to dismiss the error message */}
				<button
					className='text-orange-700 hover:text-orange-900'
					data-testid='closeButton' // This attribute is for testing to identify the close Button
					onClick={() => setError({ title: "", body: "" })} // When clicked, reset the error state
				>
					&times; {/* The "×" symbol for the close button */}
				</button>
			</div>
		</div>
	);
}
