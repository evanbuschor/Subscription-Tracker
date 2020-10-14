import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import WebFont from "webfontloader";
import { AuthContextProvider } from "./context/AuthContext.js";

WebFont.load({
	google: {
		families: ["Roboto"],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<App></App>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
