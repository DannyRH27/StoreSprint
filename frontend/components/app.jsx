import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'


const App = () => (
	<div style={{height: '100%'}}>
		<header>
			<ProtectedRoute path="/" component={NavBarContainer}/>
			{/* <ProtectedRoute path="/" component={SideDrawer}/> */}

		</header>
		<main style={{marginTop: '100px'}}>
			<h1>DannyDash lives on</h1>
		</main>
		<Switch>
			<Route exact path='/signup' component={SignupFormContainer}/>
			<Route exact path='/login' component={LoginFormContainer}/>
		</Switch>
	</div>
);

export default App;
