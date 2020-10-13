import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Nav from "./Nav.js";
import Auth from "./Auth/Auth.js";
import Home from "./Home.js";
import PrivateRoute from "./PrivateRoute.js";

function App() {
	return (
		<Router>
			<div className="app">
				<Nav />
				<PrivateRoute exact path="/" component={Home}></PrivateRoute>
				<Route exact path="/login" component={Auth}></Route>
			</div>
		</Router>
	);
}

export default App;
