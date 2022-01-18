import "antd/dist/antd.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import User from "./pages/User";
import { useSelector } from "react-redux";

function App() {
	const isLogged = useSelector((state) => state.isLogged.value);

	return (
		<Router>
			<div className="App">
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								isLogged ? <Navigate to="/user" /> : <Navigate to="/login" />
							}
						></Route>
						<Route path="/user" element={<User />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
