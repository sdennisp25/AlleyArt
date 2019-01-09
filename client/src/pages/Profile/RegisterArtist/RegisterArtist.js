import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import "./register.css";
import API from "../../../utils/api";
import {LoginModal} from "../../../components/Modal";
import { Redirect } from "react-router-dom";

class RegisterArtist extends Component {
	state = {
		artistName: "",
		artistEmail: "",
		artistPassword: "",
		aboutArtist: "",
		okToContact: false,
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
			isArtist: true,
			username: this.state.artistName,
			email: this.state.artistEmail,
			password: this.state.artistPassword,
			aboutArtist: this.state.aboutArtist,
			okToContact: this.state.okToContact
		}).then(response => {
			console.log(response);
			this.setState({
				artistName: "",
				artistEmail: "",
				artistPassword: "",
				aboutArtist: "",
				okToContact: false,
				showLogin: true
			})

		}).catch(error => {
			console.log("ARTIST REGISTRATION ERROR: ");
			console.log(error);
		})
	}

	render() {
		if (this.state.toHome === true) {
			return <Redirect to='/home' />
		}
		
		return (
			<React.Fragment>
				<Container>
				<h1 className="title">Register to set up Profile</h1>
					<div className="userform">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s6">
										<input id="name" type="text" className="validate" name="artistName" onChange={this.handleInputChange}></input>
										<label htmlFor="name">Artist Name</label>
									</div>
									<div className="input-field col s6">
										<input id="email" type="text" className="validate" name="artistEmail" onChange={this.handleInputChange}></input>
										<label htmlFor="email">Email</label>
									</div>
									<div className="input-field col s6">
										<input id="input_text" type="text" data-length="10" name="artistPassword" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text">Password</label>
									</div>
									<div className="input-field col s12">
										<textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
										<label htmlFor="textarea2" name="aboutArtist" onChange={this.handleInputChange}>About You As An Artist...</label>
          							</div>
									<div className="col s6">
										<h3>Do you want to be contacted?</h3>
										<div className="switch">
											<label>
											No
											<input type="checkbox"></input>
											<span className="lever"></span>
											Yes
											</label>
										</div>
									</div>	
									<div className="col s6">
										<button className="btn waves-effect waves-light right" type="submit" name="action" onClick={this.handleRegUser}>Submit
										</button>
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

export default RegisterArtist;
