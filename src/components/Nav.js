import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
//import firebaseApp from "../Utilities/fire.js";

const Nav = () => {
	const { user, setUser, firebaseApp } = useContext(AuthContext);

	const handleClick = () => {
		console.log("Nav.js handleClick sign out button clicked");
		firebaseApp.auth().signOut();
	};

	const logoutButton = () =>
		!!user && (
			<button className="nav__logout-button" onClick={handleClick}>
				Log Out
			</button>
		);

	return (
		<div className="nav">
			<Link to="/">
				<h2 className="nav__title">Subscription Tracker</h2>
			</Link>
			<Link to="/">Home</Link>
			<Link to="/login">auth</Link>

			{logoutButton()}
		</div>
	);
};

export default Nav;
