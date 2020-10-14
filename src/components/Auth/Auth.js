import React, { useState, useEffect, useContext } from "react";
import "./Auth.css";
import { AuthContext } from "../../context/AuthContext.js";

const Auth = () => {
	const { firebaseApp } = useContext(AuthContext);
	const [user, setUser] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [hasAccount, setHasAccount] = useState(true);

	const clearInputs = () => {
		setEmail("");
		setPassword("");
	};

	const clearErrors = () => {
		setEmailError("");
		setPasswordError("");
	};

	const toggleHasAccount = () => {
		setHasAccount(!hasAccount);
	};

	const handleLogin = () => {
		clearErrors();
		firebaseApp
			.auth()
			.signInWithEmailAndPassword(email, password)
			.catch((error) => {
				console.log(error);
				// eslint-disable-next-line default-case
				switch (error.code) {
					case "auth/invalid-email":
					case "auth/user-disabled":
					case "auth/user-not-found":
						setEmailError(error.message);
						break;
					case "auth/wrong-password":
						setPasswordError(error.message);
						break;
				}
			});
		clearInputs();
	};

	const handleSignup = () => {
		clearErrors();
		firebaseApp
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.catch((error) => {
				// eslint-disable-next-line default-case
				switch (error.code) {
					case "auth/email-already-in-use":
					case "auth/invalid-email":
						setEmailError(error.message);
						break;
					case "auth/weak-password":
						setPasswordError(error.message);
						break;
				}
			});
		clearInputs();
	};

	return (
		<div className="Auth">
			<label>Email:</label>

			<input
				className="Auth__input"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				type="email"></input>
			<p>{emailError}</p>

			<label>Password:</label>

			<input
				className="Auth__input"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				type="password"></input>
			<p>{passwordError}</p>

			<div className="Auth__button-group">
				<button
					className="Auth__button"
					onClick={(e) => {
						hasAccount ? handleLogin() : handleSignup();
					}}>
					{hasAccount ? "Log in" : "Sign Up"}
				</button>
			</div>

			<p className="Auth__prompt">
				{hasAccount ? "Not a user? " : "Already a user? "}
				<span className="Auth__link-span" onClick={toggleHasAccount}>
					{hasAccount ? "Sign up" : "Log in"}
				</span>
			</p>
		</div>
	);
};

export default Auth;
