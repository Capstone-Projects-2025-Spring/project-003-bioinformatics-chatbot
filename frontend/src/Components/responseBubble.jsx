import PropTypes from "prop-types";

// Define PropTypes for validation
ResponseBubble.propTypes = {
	text: PropTypes.string.isRequired, // `text` is a required prop of type string
};

export default function ResponseBubble({ text }) {
	return <div className='p-2 bg-blue-400 rounded-lg max-w-md'>{text}</div>;
}
