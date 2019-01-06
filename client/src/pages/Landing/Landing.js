import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Row } from "../../components/Grid";
import "./landing.css";
import API from "../../utils/api";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginModal from "../../components/Modal";

class Landing extends Component {

	state = {
		username: " ",
		password: " ",
		toHome: false,
		showLogin: false
	}

	showLogin = () => {
		this.setState({ showLogin: true });
	};

	hideLogin = () => {
		this.setState({ showLogin: false });
	};

	handleInputChange = event => {
		const { name, value } = event.target;
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

	render() {
		if (this.state.toHome === true) {
			return <Redirect to='/home' />
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
								<button className="waves-effect grey darken-3 btn" type="button" onClick={this.showLogin}>LOGIN</button>
								<br /><br />
								<button className="waves-effect grey darken-3 btn" type="button" onClick={this.showRegister}>REGISTER </button>
							</div>
						</div>
					</div>
				</Row>


				<LoginModal
					show={this.state.showLogin}
					handleClose={this.hideLogin}
					handleLogin={this.handleLogin}
				>
					<div className="modal-content">
						<h4 className="center">Please Sign In</h4>
						<label htmlFor="input_text">Username</label>
						<input id="input_text" type="text" data-length="10" name="username" onChange={this.handleInputChange}>
						</input>
					</div>
					<div className="modal-content">
						<input id="input-text" data-length="120" name="password" onChange={this.handleInputChange}></input>
						<label htmlFor="input_text">Password</label>
					</div>
				</LoginModal>


			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state
	}
}

export default connect(mapStateToProps)(Landing);
