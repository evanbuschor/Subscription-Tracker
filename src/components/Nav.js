import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";

const Nav = () => {
	const { user } = useContext(AuthContext);

	function logoutButton() {
		return !user ? <button className></button> : <div>hello</div>;
	}
	return (
		<div className="nav">
			<Link to="/">
				<h2 className="nav__title">Subscription Tracker</h2>
			</Link>
			{logoutButton}
		</div>
	);
};

export default Nav;
