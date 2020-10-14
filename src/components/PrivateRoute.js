import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { user } = useContext(AuthContext);

	console.log("🔏 Private Route:", user);

	return (
		<Route
			{...rest}
			render={(props) => {
				return !!user ? (
					<Component {...props} />
				) : (
					<Redirect to={"/login"} />
				);
			}}
		/>
	);
};

export default PrivateRoute;
