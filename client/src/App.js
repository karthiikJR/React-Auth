import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import Auth from "./pages/auth";
import Home from "./pages/home";
import FrontPage from "./pages/frontpage";
function App() {
	const [cookies] = useCookies(["access_token"]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route
						path="/"
						element={cookies.access_token ? <Home /> : <FrontPage />}
					/>
					<Route path="/auth" element={<Auth />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
