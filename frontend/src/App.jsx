import { useState, useEffect } from "react";
import { Link } from "react-router";

/**
 * App component renders the landing page for the Bioinformatics RAG Chatbot.
 *
 * The layout is divided into:
 * - **Header:** Displays the application title.
 * - **Description:** A short, beautifully styled description of the chatbot.
 * - **Main Content:** Contains the grid of Examples, Capabilities, and Limitations.
 * - **Footer:** Contains the "Begin New Chat" button.
 *
 * @component
 * @returns {JSX.Element} The rendered landing page component.
 */
function App() {
	const [position, setPosition] = useState({ x: 50, y: 50 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			const x = (e.clientX / window.innerWidth) * 100;
			const y = (e.clientY / window.innerHeight) * 100;
			setPosition({ x, y });
		};
		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const gradient = `radial-gradient(
	  2500px circle at ${position.x}% ${position.y}%,
	  color-mix(in oklab, var(--color-primary) 20%, transparent) 0%,
	  color-mix(in oklab, var(--color-accent) 10%, transparent) 50%,
	  var(--color-bgLight) 100%
	)`;

	// Default style for Capability and Limitations cards
	const sectionStyle = "text-primary p-4 rounded-2xl bg-bgLight font-body";

	// Example-specific style that changes background color on hover using a custom variable.
	const exampleCardStyle =
		"text-primary p-4 rounded-2xl bg-bgLight transition hover:bg-[var(--color-primaryLight)] font-body";

	const examples = [
		'🧬 "Summarize recent studies on CRISPR-Cas9 in humans"',
		'🧪 "What are the key genes in Alzheimer\'s pathology?"',
		'📚 "Explain the role of RNA-seq in cancer research"',
	];

	const capabilities = [
		"🔍 Searches PubMed & other bio databases using RAG",
		"🧠 Summarizes papers with domain-specific language",
		"💬 Supports follow-up questions & interactive exploration",
	];

	const limitations = [
		"❗ May miss context or misinterpret results",
		"🧪 Not a substitute for expert review of literature",
		"📅 May not always access the very latest research",
	];

	// Modified renderCards accepts a style parameter
	const renderCards = (items, style) =>
		items.map((text, index) => (
			<div key={index} className={style}>
				{text}
			</div>
		));
	return (
		<div
			className='flex flex-col min-h-screen relative transition duration-300 px-4'
			style={{ background: gradient }}>
			{/* Main Content */}
			<main className='flex flex-1 flex-col justify-center items-center font-body'>
				<div className='pt-8 flex flex-col justify-center items-center mb-12'>
					<svg
						width='180'
						height='180'
						viewBox='0 0 200 200'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						{/* DNA Helix */}
						<path
							d='M60 40 C100 60, 100 140, 60 160'
							stroke='oklch(60% 0.12 296)'
							strokeWidth='6'
							fill='none'
						/>
						<path
							d='M140 40 C100 60, 100 140, 140 160'
							stroke='oklch(60% 0.12 296)'
							strokeWidth='6'
							fill='none'
						/>

						{/* Connecting Rungs */}
						<line
							x1='80'
							y1='60'
							x2='120'
							y2='60'
							stroke='oklch(70% 0.09 296)'
							strokeWidth='3'
						/>
						<line
							x1='80'
							y1='90'
							x2='120'
							y2='90'
							stroke='oklch(70% 0.09 296)'
							strokeWidth='3'
						/>
						<line
							x1='80'
							y1='120'
							x2='120'
							y2='120'
							stroke='oklch(70% 0.09 296)'
							strokeWidth='3'
						/>
					</svg>
					<h1 className='text-3xl font-bold text-primary font-heading'>
						BioGenie
					</h1>
					{/* Description */}
					<p className='mt-4 max-w-2xl text-center text-lg text-primary font-semibold'>
						An advanced chatbot designed to assist researchers in bioinformatics
						by retrieving and summarizing relevant scientific literature using a
						retrieval-augmented generation (RAG) model.
					</p>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-primary pb-16 max-w-6xl mx-auto w-full'>
					{/* Examples with hoverable color change */}
					<div>
						<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
							💡 Examples
						</h2>
						<div className='flex flex-col gap-4'>
							{renderCards(examples, exampleCardStyle)}
						</div>
					</div>

					{/* Capabilities */}
					<div>
						<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
							🚀 Capabilities
						</h2>
						<div className='flex flex-col gap-4'>
							{renderCards(capabilities, sectionStyle)}
						</div>
					</div>

					{/* Limitations */}
					<div>
						<h2 className='text-xl font-semibold mb-4 text-center font-heading'>
							⚠️ Limitations
						</h2>
						<div className='flex flex-col gap-4'>
							{renderCards(limitations, sectionStyle)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
