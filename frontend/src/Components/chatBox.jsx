/**
 * @module ChatBox
 * This file exports the ChatBox component which renders a chat input form.
 */
import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import LoadingSpinner from "./loadingSpinner";
/**
 * PropTypes for the ChatBox component.
 *
 * @property {string} input - The current input value.
 * @property {function} setInput - Callback to update the input value.
 * @property {function} handleSubmit - Callback to handle form submission.
 */
ChatBox.propTypes = {
	input: PropTypes.string.isRequired, // 'input' must be a required prop of type string
	setInput: PropTypes.func.isRequired, // 'setInput' must be a required prop of type function
	handleSubmit: PropTypes.func.isRequired, // 'handleSubmit' must be a required prop of type function
};

/**
 * ChatBox component renders a chat input form with an input field and submit button.
 *
 * This component is used to capture the user's chat input and submit it via the provided
 * event handlers. The form is designed to update the input value on change and call the
 * submit handler when the form is submitted.
 *
 * @component
 * @param {object} props - The component props.
 * @param {string} props.input - The current text input.
 * @param {function} props.setInput - Callback to update the input value.
 * @param {function} props.handleSubmit - Callback to handle the form submission.
 * @returns {JSX.Element} The rendered chat input form.
 */
export default function ChatBox({
	input,
	setInput,
	handleSubmit,
	editIndex,
	cancelEdit,
	handleDownloadtxt,
	handleDownloadpdf,
	handleDownloaddoc,
	loading,
}) {
	const textareaRef = useRef(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // Reset height to auto
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
			textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
		}
	}, [input]);

	return (
		// The form is set to submit via the `handleSubmit` function defined in chat.jsx when the user presses Enter or clicks the submit button
		<div className='w-full max-w-full mx-auto px-4 relative transition-all duration-300 flex justify-center items-center gap-4'>
			{/* Exit button for if user changes their mind about editing a message */}

			<form
				data-testid='form'
				onSubmit={handleSubmit}
				className='relative flex-grow transition-all duration-300 max-w-7xl'>
				<div className='relative flex flex-col bg-bgLight rounded-xl shadow-[0_6px_30px_-14px_var(--color-primary)] px-3 pt-3 pb-2'>
					{editIndex !== null && (
						<div className='flex justify-between items-center w-full px-2 py-3 mb-2 bg-primaryLight rounded-t-lg rounded-b-sm'>
							<div className='flex'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2}
									stroke='currentColor'
									className='size-5 text-primary font-semibold'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
									/>
								</svg>
								<div className='text-semibold text-primary ml-2 font-semibold'>
									Editing Message
								</div>
							</div>
							<button
								onClick={(e) => {
									e.preventDefault(); // Prevent the default behavior
									cancelEdit();
								}}
								title='Cancel edit'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={2.5}
									stroke='currentColor'
									className='size-5 text-primary hover:text-accent'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18 18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
					)}
					<textarea
						ref={textareaRef}
						data-testid='input'
						type='text'
						placeholder="What's on your mind?..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						rows={1}
						className='w-full min-h-[2.5rem] max-h-[10rem] px-2 mt-1 text-primary bg-transparent resize-none overflow-auto focus:outline-none focus:ring-2 focus:ring-transparent transition-all duration-300 ease-in-out scrollbar-hide rounded-none'
					/>

					<div className='flex justify-between items-center w-full py-1'>
						<div className='flex items-center '>
							<svg
								width='32'
								height='32'
								viewBox='0 0 200 200'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M60 40 C100 60, 100 140, 60 160'
									stroke='oklch(60% 0.12 296)'
									strokeWidth='8'
									fill='none'
								/>
								<path
									d='M140 40 C100 60, 100 140, 140 160'
									stroke='oklch(60% 0.12 296)'
									strokeWidth='8'
									fill='none'
								/>
								<line
									x1='80'
									y1='60'
									x2='120'
									y2='60'
									stroke='oklch(70% 0.09 296)'
									strokeWidth='4'
								/>
								<line
									x1='80'
									y1='90'
									x2='120'
									y2='90'
									stroke='oklch(70% 0.09 296)'
									strokeWidth='4'
								/>
								<line
									x1='80'
									y1='120'
									x2='120'
									y2='120'
									stroke='oklch(70% 0.09 296)'
									strokeWidth='4'
								/>
							</svg>
							{!loading ? (
								<h1 className='text-sm sm:text-lg font-bold text-primary font-heading mr-1'>
									BioGenie
								</h1>
							) : (
								<LoadingSpinner />
							)}
						</div>

						<div className='flex items-center gap-2'>
							<button
								type='submit'
								data-testid='submitButton'
								className='bg-primary text-white hover:bg-accent p-2 rounded-full transition duration-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-5 text-white'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
									/>
								</svg>
							</button>
							{isDialogOpen && (
								<div className='flex items-center gap-2'>
									<button
										data-testid='downloadButtontxt'
										onClick={(e) => {
											e.preventDefault(); // Prevent the default behavior
											handleDownloadtxt();
										}}
										className='bg-primary text-white hover:bg-accent p-2 rounded-full transition duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 32 32'
											className='size-5 text-white'>
											<path
												fill='currentColor'
												d='M21 11h3v12h2V11h3V9h-8zm-1-2h-2l-2 6l-2-6h-2l2.75 7L12 23h2l2-6l2 6h2l-2.75-7zM3 11h3v12h2V11h3V9H3z'></path>
										</svg>
									</button>
									<button
										data-testid='downloadButtonpdf'
										onClick={(e) => {
											e.preventDefault(); // Prevent the default behavior
											handleDownloadpdf();
										}}
										className='bg-primary text-white hover:bg-accent p-2 rounded-full transition duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 32 32'
											className='size-5 text-white'>
											<path
												fill='currentColor'
												d='M30 11V9h-8v14h2v-6h5v-2h-5v-4zM8 9H2v14h2v-5h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m0 7H4v-5h4zm8 7h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2z'></path>
										</svg>
									</button>
									<button
										data-testid='downloadButtondoc'
										onClick={(e) => {
											e.preventDefault(); // Prevent the default behavior
											handleDownloaddoc();
										}}
										className='bg-primary text-white hover:bg-accent p-2 rounded-full transition duration-200'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 32 32'
											className='size-5 text-white'>
											<path
												fill='currentColor'
												d='M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h6zm-12 0h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2m-4-12v10h4V11zM6 23H2V9h4a4.005 4.005 0 0 1 4 4v6a4.005 4.005 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4z'></path>
										</svg>
									</button>
								</div>
							)}
							{isDialogOpen ? (
								<button
									data-testid='downloadButtontxt'
									onClick={(e) => {
										e.preventDefault(); // Prevent the default behavior
										setIsDialogOpen(false);
									}}
									className='bg-primary text-white hover:bg-accent p-2 rounded-full transition duration-200'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='size-5'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18 18 6M6 6l12 12'
										/>
									</svg>
								</button>
							) : (
								<button
									data-testid='downloadButton'
									onClick={(e) => {
										e.preventDefault(); // prevent form submission
										setIsDialogOpen(true); // or whatever this function does
									}}
									className='group relative flex items-center bg-primary text-white p-2 rounded-full overflow-hidden transition-all duration-300 hover:bg-accent'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='size-5 text-white'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25'
										/>
									</svg>

									<span className='text-sm max-w-0 overflow-hidden opacity-0 group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:ml-1 group-hover:mr-2'>
										Download Chat
									</span>
								</button>
							)}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
