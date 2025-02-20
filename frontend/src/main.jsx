import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Chat from "./Pages/chat.jsx";
import PageNotFound from "./Pages/404.jsx";
import Test from "./Pages/Test.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/chat' element={<Chat />} />
			<Route path='*' element={<PageNotFound />} />
			<Route path='/Test' element={<Test />} />
		</Routes>
	</BrowserRouter>
);
