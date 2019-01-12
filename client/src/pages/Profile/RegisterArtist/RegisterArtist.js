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

	switchStatus = ()=>{
			this.setState({
				okToContact: true
			});
					}

		render() {
		if (this.state.toHome === true) {
			return <Redirect to='/home' />
		}
		
		return (
			<React.Fragment>
				<Container>
				<h1 className="title">Register ARTIST Profile</h1>
					<div className="userform cyan darken-2">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<input id="input-text" type="text" className="validate" name="artistName" onChange={this.handleInputChange}></input>
										<label htmlFor="input-text" className="black-text">Artist Name</label>
									</div>
									<div className="input-field col s12">
										<input id="email" type="email" className="validate" name="artistEmail" onChange={this.handleInputChange}></input>
										<label htmlFor="email" className="black-text">Email</label>
										<span className="helper-text" data-error="Please Enter an Email Address" data-success=""></span>
									</div>
									<div className="input-field col s12">
										<input id="input_text" type="text" data-length="10" name="artistPassword" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="black-text">Password</label>
									</div>
									<div className="input-field col s12">
										<textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
										<label htmlFor="textarea2" className="black-text"name="aboutArtist" onChange={this.handleInputChange}>About You As An Artist...</label>
          							</div>
									<div className="col s12">
										<h3 className="white-text">Do you want to be contacted?</h3>
										<div className="switch">
											<label className="white-text">
											No
											<input type="checkbox" defaultValue={this.state.okToContact} onChange={this.switchStatus}></input>
											<span className="lever green darken-2"></span>
											Yes
											</label>
										</div>
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

export default RegisterArtist;
