import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import NoMatch from "./pages/NoMatch/NoMatch";
import Nav from "./components/Nav";
import RegisterUser from "./pages/Profile/RegisterUser";
import RegisterArtist from "./pages/Profile/RegisterArtist";


class App extends Component {
	render() {

		return (
			<Router>
				<div>
					<Nav />
					<div><br></br><br></br><br></br>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/home" component={Home} />
							<Route exact path="/profile" component={Profile} />
							<Route exact path="/register/user" component={RegisterUser} />
							<Route exact path="/register/artist" component={RegisterArtist} />
							<Route component={NoMatch} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
