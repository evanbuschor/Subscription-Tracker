import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Nav from "./Nav.js";
import Auth from "./Auth/Auth.js";
import Home from "./Home.js";
import Subscriptions from "./Subscriptions/Subscriptions.js";
import PrivateRoute from "./PrivateRoute.js";
import { AuthContext } from "../context/AuthContext";
import PublicOnlyRoute from "./PublicOnlyRoute";

function App() {
	const { user } = useContext(AuthContext);
	console.log("app", user);
	return (
		<Router>
			<div className="app">
				<Nav />
				<PrivateRoute exact path="/" component={Home}></PrivateRoute>
				<PrivateRoute
					path="/subscriptions"
					component={Subscriptions}></PrivateRoute>
				<PublicOnlyRoute
					path="/login"
					component={Auth}></PublicOnlyRoute>
			</div>
		</Router>
	);
}

export default App;
