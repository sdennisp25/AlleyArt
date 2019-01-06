import React, { Component } from "react";
import {Container } from "../../components/Grid";
import {Row } from "../../components/Grid";
import "./landing.css";
import API from "../../utils/api";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class Landing extends Component {

	state = {
		username: " ",
		password: " ",
		toHome: false
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleLogin = () => {
	console.log("You Clicked Me!");
	console.log(this.state);
	API.loginUser({
		email: this.state.username,
		password: this.state.password
	 }).then(response =>{
		 if(response.status===200){
			 this.setState({toHome: true});
		 } 
	 }).catch(error =>{
		 console.log("LOGIN ERROR: ");
		 console.log(error);
	 })
	}

	handleLogout = () => {
		console.log("You are logging out");
		API.logoutUser().then(response =>
			{
				console.log("Logged Out");
			}).catch(error => {
				console.log("Logout Error: ");
				console.log(error);
			})
	}

		render() {
			if (this.state.toHome === true) {
				return <Redirect to='/home'/>
			}

		return (
			// <React.Fragment>
			// 	<input/>
			// 	<p>TEST</p>
			// 	<Container>
			// 		<Jumbotron>
			// 		<h1>THIS IS THE LANDING PAGE {this.props.user.test}</h1>
			// 						</Jumbotron>
			// 	</Container>
			// </React.Fragment>
			<Container>
				<Row>
				<div className="landing-background">
					<div className="landing center-align card-panel">
						<h1>ALLEY ART</h1>
						<p>Beyond this is a street art community. Create a profile and contribute to the international art collections. If your looking for a discovery find the location and go see for yourself.</p>
						<div className="row">
							<form className="col s12">
							<div className="row">
								<div className="input-field col s6">
								<label htmlFor="input_text">Username</label>
								<input id="input_text" type="text" data-length="10" name="username" onChange={this.handleInputChange}>
								</input>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
								<textarea id="textarea2" className="materialize-textarea" data-length="120" name="password" onChange={this.handleInputChange}></textarea>
								<label htmlFor="textarea2">Password</label>
								</div>
							</div>
							</form>

							<button className="waves-effect grey darken-3 btn" onClick={this.handleLogin}>Login</button>

							<button className="waves-effect grey darken-3 btn" onClick={this.handleLogout}>Logout</button>

							{/* <a href="/" className="waves-effect grey darken-3 btn">Login</a> */}
							<a href="/" className="waves-effect grey darken-3 btn">Sign-up</a>
						</div>
					</div>
				</div>
				</Row>
			</Container>
		)
	} 
}

function mapStateToProps(state){
	return {
		user: state
	}
}

export default connect(mapStateToProps)(Landing);
