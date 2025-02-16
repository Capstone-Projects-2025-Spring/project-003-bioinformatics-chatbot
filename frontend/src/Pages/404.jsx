import { Link } from "react-router";

// 404 Page
export default function PageNotFound() {
	return (
		<main>
			<h1>404</h1>
			<div>Page Not Found</div>
			<button>
				<Link to='/'>Go Home</Link>
			</button>
		</main>
	);
}
