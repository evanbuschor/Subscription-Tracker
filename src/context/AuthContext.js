import React, { useEffect, useState } from "react";
import firebaseApp from "../Utilities/fire.js";

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		firebaseApp.auth().onAuthStateChanged((user) => {
			console.log("🌸, AuthContext.js user changed to: ", user);
			setUser(user);
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user, setUser, firebaseApp }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContextProvider, AuthContext };

// TODO: add firebase app to this context and remove it from the auth component
// TODO: don't expose the set user method
// TODO: expose methods/properties for loging in and loging out and use them in the auth component.
// TODO: update the user any time it changes. what is the est way to do this?
