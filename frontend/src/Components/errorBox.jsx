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
			className='fixed top-4 left-1/2 transform -translate-x-1/2 bg-errorBg text-orange-700 p-4 rounded-lg shadow-lg z-50 max-w-md w-full'
			role='alert'
			data-testid='errorBox'>
			{/* Top row: title + close button */}
			<div className='flex items-center justify-between'>
				<p className='font-bold'>{title}</p>
				<button
					className='text-orange-700 hover:text-orange-900 ml-4 mt-1'
					data-testid='closeButton'
					onClick={() => setError({ title: "", body: "" })}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={2.5}
						stroke='currentColor'
						className='size-5'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6 18 18 6M6 6l12 12'
						/>
					</svg>
				</button>
			</div>

			{/* Body message */}
			<p className='mt-1'>{body}</p>
		</div>
	);
}
