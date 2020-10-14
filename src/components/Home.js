import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
const Home = () => {
	const { user } = useContext(AuthContext);
	console.log("home:", user);
	return <div>Home, protected</div>;
};

export default Home;
