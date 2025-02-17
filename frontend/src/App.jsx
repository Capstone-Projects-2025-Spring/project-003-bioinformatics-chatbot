import { Link } from "react-router";
import BioGPTImage from './images/BioGPT.png';

function App() {
	return (
		
		<div className="flex h-screen relative bg-gray-800">

			{/* Left Side */}
			{/* flex-1 = Take up 1/2 the screen, flex-col allows for items in the column to stack, justify-center & items-center centers items */} 
			<div className="flex-1 flex flex-col justify-center items-center space-y-10">
				{/* absolute = fixed position, top-6 = 6px from top, text-3xl = text size*/} 
				<h1 className="absolute top-8 text-3xl font-bold underline text-white">
					Bioinformatics RAG Chatbot
				</h1>

				{/* Color and Text definitions, Border creation, Mouse hover color change*/}
				<div className="bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded-2xl border-2 border-white shadow-md hover:bg-green-700 transition duration-300">
					<Link to='/chat'>Begin New Chat</Link>
				</div>

				{/* Product Description */}
				{/* Text definition, max width definition, text centering */}
				<p className="text-lg text-gray-300 max-w-md text-center">
          			An advanced chatbot designed to assist researchers in bioinformatics by retrieving and summarizing relevant scientific literature using a retrieval-augmented generation (RAG) model.
        		</p>

        		{/* Authors Section */}
				{/* Text color and size definition, max width definition, line break / line wrapping*/}
				<div className="text-white text-sm text-center max-w-[60%] mx-auto">
					<p>Created by: <span className="font-semibold break-words">Amitai Goldmeer, Ishmam Kabir, Justin Truong, Katerina Orlovskiy, Keith Bunn, Khanh Nguyen & Troy Witmer</span></p>
				</div>
			</div>

			{/* Right Side*/}
			{/* Flex boxing for image, centering of image, creation of border and color inside of border*/}
			<div className="flex-1 flex justify-center items-center relative bg-green-600 rounded-2xl m-4 border-2 border-white">
				<img src={BioGPTImage} alt="Description" className="max-w-[90%] max-h-[90%]" />
			</div>
		</div>
	);
}

export default App;
