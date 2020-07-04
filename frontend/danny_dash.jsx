import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import {login, logout, signup} from "./actions/session_actions";
import { openModal } from "./actions/modal_actions";
import { fetchCart, updateCart } from "./actions/cart_actions";
import { searchStores } from "./util/store_api_util";
import { filterStores } from "./actions/store_actions";
document.addEventListener("DOMContentLoaded", () => {
	let preloadedState = undefined;
	if (window.currentUser) {
		preloadedState = {
            entities: {
                stores: {}
            },
			session: {
				currentUser: window.currentUser
			},
			errors: {
				session: []
			}
		};
	}
	const store = configureStore(preloadedState);

	const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
  
})
