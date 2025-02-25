/**
 * @module ResponseBubble
 * This file exports the ResponseBubble component which displays a text message in a styled bubble.
 */

import PropTypes from "prop-types";

/**
 * PropTypes for the ResponseBubble component.
 *
 * @property {string} text - The text message to display in the response bubble.
 */

// Define PropTypes for validation
ResponseBubble.propTypes = {
	text: PropTypes.string.isRequired, // `text` is a required prop of type string
};

/**
 * ResponseBubble component renders a styled bubble displaying a text message.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.text - The text message to display.
 * @returns {JSX.Element} The rendered response bubble element.
 */

export default function ResponseBubble({ text }) {
	return <div className='p-2 bg-blue-400 rounded-lg max-w-md'>{text}</div>;
}
