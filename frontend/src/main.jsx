/**
 * @module main.jsx
 * This is the entry point for the React application. It initializes the React DOM rendering,
 * sets up the routing using BrowserRouter, and defines the application routes including the main App component,
 * the Chat page, and a fallback 404 page.
 */

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import PageNotFound from "./Pages/404.jsx";

const root = document.getElementById("root");
/**
 * Creates a root React node and renders the application wrapped in a BrowserRouter with defined routes.
 * The routes include:
 * - `/` which renders the App component.
 * - `/chat` which renders the Chat component.
 * - `*` which renders the PageNotFound component for undefined paths.
 */

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='*' element={<PageNotFound />} />
		</Routes>
	</BrowserRouter>
);
