import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";

const Nav = () => {
	const { user } = useContext(AuthContext);

	const logoutButton = () =>
		!!user && <button className="nav__logout-button">Log Out</button>;

	return (
		<div className="nav">
			<Link to="/">
				<h2 className="nav__title">Subscription Tracker</h2>
			</Link>
			{logoutButton()}
		</div>
	);
};

export default Nav;
