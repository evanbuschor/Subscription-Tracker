import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";

function App() {
	return (
		<div className="app">
			<Nav />
			<Router>
				<Route></Route>
			</Router>
			<Main />
		</div>
	);
}

export default App;
