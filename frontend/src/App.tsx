import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
	return (
		<BrowserRouter>
			<div>
				<Navbar />
				<Routes>
					<Route
						path='/'
						element={<HomePage />}
					/>
					<Route
						path='/post/:id'
						element={<PostPage />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
