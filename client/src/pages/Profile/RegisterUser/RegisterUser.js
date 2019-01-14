import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import "./register.css";
import API from "../../../utils/api";
import {LoginModal} from "../../../components/Modal";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/Nav";

class RegisterUser extends Component {

	state = {
		userName: "",
		userEmail: "",
		userPassword: "",
		showLogin: false,
		toHome: false,
	}

	showLogin = () => {
		this.setState({ showLogin: true });
	};
	
	hideLogin = () => {
		this.setState({ showLogin: false });
	};
	
	handleInputChange = event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	
	handleLogin = (event) => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state);
		API.loginUser({
			email: this.state.username,
			password: this.state.password
		}).then(response => {
			if (response.status === 200) {
				this.setState({ toHome: true });
			}
		}).catch(error => {
			console.log("LOGIN ERROR: ");
			console.log(error);
		})
	}

	handleRegUser = (event) => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state);
		API.registerUser({
			username: this.state.userName,
			email: this.state.userEmail,
			password: this.state.userPassword
		}).then(response => {
			console.log(response);
			this.setState({
				userName: "",
				userEmail: "",
				userPassword: "",
				showLogin: true
			})

		}).catch(error => {
			console.log("USER REGISTRATION ERROR: ");
			console.log(error);
		})
	}

	render() {
	if (this.state.toHome === true) {
			return <Redirect to='/home' />
		}

		return (
			<React.Fragment>
			<Nav></Nav>
				<Container>
					<h1 className="title">Register USER Profile</h1>
					<div className="userform cyan darken-2">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<input id="name" type="text" className="validate" name="userName" onChange={this.handleInputChange}></input>
										<label htmlFor="name" className="black-text">Name</label>
									</div>
									<div className="input-field col s12">
										<input id="email" type="text" className="validate" name="userEmail" onChange={this.handleInputChange}></input>
										<label htmlFor="email" className="black-text">Email</label>
									</div>
									<div className="input-field col s12">
										<input id="input_text" type="text" data-length="10" name="userPassword" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="black-text">Password</label>
									</div>
									<div className="col s12">
										<div className="center-align">
										<button className="btn waves-effect waves-light green darken-2" type="submit" name="action" onClick={this.handleRegUser}>Submit
  									</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</Container>

				<LoginModal
					show={this.state.showLogin}
					handleClose={this.hideLogin}
					handleLogin={this.handleLogin}
					handleInputChange={this.handleInputChange}
				></LoginModal>

			</React.Fragment>
		)

			}
}
export default RegisterUser;
