import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: ["Roboto"],
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App></App>
	</React.StrictMode>,
	document.getElementById("root")
);
