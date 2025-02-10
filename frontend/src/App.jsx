import { Link } from "react-router";

function App() {
	return (
		<div>
			<h1 className='text-3xl font-bold underline'>Home</h1>
			<Link to='/chat'>Chat</Link>
		</div>
	);
}

export default App;
