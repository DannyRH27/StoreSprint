import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {login, logout, signup} from './actions/session_actions'



document.addEventListener("DOMContentLoaded", () => {
	let preloadedState = undefined;
	if (window.currentUser) {
		preloadedState = {
			session: {
				currentUser: window.currentUser
			},
			errors: {
				session: []
			}

		};
	}
	const store = configureStore();

	const root = document.getElementById("root");
	ReactDOM.render(<Root store={store}/>, root);

	
	// test
	window.dispatch = store.dispatch
	window.store = store
	window.login = login
	window.logout = logout
	window.signup = signup
	
})
