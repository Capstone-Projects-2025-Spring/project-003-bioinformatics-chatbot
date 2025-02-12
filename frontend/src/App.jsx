import { Link } from "react-router";
import BioGPTImage from './images/BioGPT.png'; // Correctly import the image

function App() {
	return (
		// flex display, background color = white
		<div className="flex h-screen relative bg-[#fdfbef]">
			{/* flex-1 = 1/2 length screen, justify-center = center horizontally */} 
			<div className="flex-1 flex justify-center items-center relative">
				{/* absolute = fixed position, top-4 = 4px from top, text-3xl = text size, font-bold = bold, underline = underline */} 
				<h1 className="absolute top-4 text-3xl font-bold underline">
					Bioinformatics RAG Chatbot
				</h1>
				{/* flex display, flex-col = column direction, justify-center = center horizontally, items-center = center vertically, bg-[#44c755] = green color, rounded-2xl = rounded corners, border-2 = 2px border, border-black = black border, p-4 = padding 4px */}
				<div className="flex justify-center items-center bg-[#44c755] rounded-2xl border-2 border-black p-4">
					<Link to='/chat'>Begin New Chat</Link>
				</div>
			</div>
			{/* flex-1 = 1/2 length screen, justify-center = center horizontally, items-center = center vertically, relative = relative position */}
			<div className="flex-1 flex justify-center items-center relative bg-[#44c755] rounded-2xl m-4">
				<img src={BioGPTImage} alt="Description" className="max-w-[90%] max-h-[90%]" />
			</div>
		</div>
	);
}

export default App;
