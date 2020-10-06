import React, { useContext } from "react";
import AuthContext from "./context/AuthContext.js";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useContext(AuthContext);
	const routeToRender = (props) => {
		return isAuthenticated ? (
			<Component {...props} />
		) : (
			<Redirect to="/login" />
		);
	};
	return <Route {...rest} render={routeToRender}></Route>;
};

export default PrivateRoute;
