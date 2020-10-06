import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Nav from "./Nav.js";
import Auth from "./Auth.js";
import Home from "./Home.js";
import PrivateRoute from "./PrivateRoute.js";

import AuthContext from "./context/AuthContext.js";

function App() {
	return (
		<AuthContext.Provider value={{ isAuthenticated: false }}>
			<div className="app">
				<Nav />
				<Router>
					<PrivateRoute
						exact
						path="/"
						component={Home}></PrivateRoute>
					<Route exact path="/login" component={Auth}></Route>
				</Router>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
