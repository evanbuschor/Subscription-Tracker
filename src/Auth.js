import React, { useState, useEffect } from "react";
import "./Auth.css";
import fire from "./fire";

const Auth = () => {
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
		console.log(email, password);
		clearErrors();
		fire.auth()
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
		console.log(fire.auth.user);
	};

	const handleSignup = () => {
		clearErrors();
		fire.auth()
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
	};

	const authListener = () => {
		fire.auth().onAuthStateChanged((user) => {
			if (user) {
				clearInputs();
				setUser(user);
			} else {
				setUser("");
			}
		});

		console.log("user", user);
	};

	useEffect(() => {
		authListener();
	});

	const handleLogout = () => {
		fire.auth().signOut();
	};

	return (
		<div className="Auth">
			<label>Email:</label>

			<input
				className="log-in__input"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				type="email"></input>
			<p>{emailError}</p>

			<label>Password:</label>

			<input
				className="log-in__input"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
				type="password"></input>
			<p>{passwordError}</p>

			<div className="log-in__button-group">
				{hasAccount ? (
					<button
						className="log-in__button"
						onClick={(e) => {
							handleLogin();
						}}>
						Log In
					</button>
				) : (
					<button
						className="log-in__button"
						onClick={(e) => {
							handleSignup();
						}}>
						Sign Up
					</button>
				)}
			</div>

			{hasAccount ? (
				<p className="log-in__prompt">
					Not a User?{" "}
					<span
						className="log-in__link-span"
						onClick={toggleHasAccount}>
						Sign up
					</span>
				</p>
			) : (
				<p className="log-in__prompt">
					Already a user?{" "}
					<span
						className="log-in__link-span"
						onClick={toggleHasAccount}>
						Log in
					</span>
				</p>
			)}

			<button className="log-in__button" onClick={handleLogout}>
				Log Out
			</button>
			<span>log in status: {user.email}</span>
		</div>
	);
};

export default Auth;
