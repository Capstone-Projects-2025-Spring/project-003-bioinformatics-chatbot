
/**
 * @module 404
 */

import { Link } from "react-router";

/**
 * A functional component that renders a 404 "Page Not Found" error page.
 *
 * This component displays a 404 error code along with a message and a button that navigates
 * the user back to the home page.
 *
 * @component
 * @returns {JSX.Element} The rendered 404 page.
 */
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
