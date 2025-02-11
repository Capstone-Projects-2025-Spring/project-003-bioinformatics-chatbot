import { Link } from "react-router";
import './App.css';
import BioGPTImage from './images/BioGPT.png'; // Correctly import the image

function App() {
	return (
		<div className="Container">
			<div className="LeftHalf">
				<h1 className='Home'>Bioinformatics RAG Chatbot</h1>
				<div className="Chat">
					<Link to='/chat'>Begin New Chat</Link>
				</div>
			</div>
			<div className="RightHalf">
				<img src={BioGPTImage} alt="Description" className="CenteredImage" />
			</div>
		</div>
	);
}

export default App;
