import React, { useState } from "react";

const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export { AuthContextProvider, AuthContext };
