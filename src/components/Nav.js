import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import Button from "@material-ui/core/Button";
//import firebaseApp from "../Utilities/fire.js";

const Nav = () => {
	const { user, setUser, firebaseApp } = useContext(AuthContext);

	const handleLogoutClick = () => {
		firebaseApp.auth().signOut();
	};

	const logoutButton = () =>
		!!user && <Button onClick={handleLogoutClick}>Log Out</Button>;

	return (
		<ul className="menu">
			<Link to="/">
				<li className="menu__title">Subscription Tracker</li>
			</Link>
			<Link to="/login">
				<li className="menu__link">Login</li>
			</Link>
			<Link to="/subscriptions">
				<li className="menu__link">Subscriptions</li>
			</Link>
			<li className="menu__button">{logoutButton()}</li>
		</ul>
	);
};

export default Nav;
