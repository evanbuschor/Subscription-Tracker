import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { Route, Redirect } from "react-router-dom";

const PublicOnlyRoute = ({ component: Component, ...rest }) => {
	const { user } = useContext(AuthContext);

	console.log("🔓 Public only Route:", user);

	return (
		<Route
			{...rest}
			render={(props) => {
				return !user ? <Component {...props} /> : <Redirect to={"/"} />;
			}}
		/>
	);
};

export default PublicOnlyRoute;
