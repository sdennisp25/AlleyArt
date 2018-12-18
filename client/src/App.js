import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import NoMatch from "./pages/NoMatch/NoMatch";
import Nav from "./components/Nav";

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
