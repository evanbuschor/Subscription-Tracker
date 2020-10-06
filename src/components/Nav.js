import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="nav">
			<Link to="/">
				<h2 className="nav__title">Subscription Tracker</h2>
			</Link>
		</div>
	);
};

export default Nav;
