import React, { Component } from "react";
import { Container } from "../../components/Grid";
import { Row } from "../../components/Grid";
import "./landing.css";
import API from "../../utils/api";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { LoginModal, UserTypeModal } from "../../components/Modal";
import { logInUser } from "../../redux/reducers/myReducer"

class Landing extends Component {

	state = {
		username: " ",
		password: " ",
		toHome: false,
		showLogin: false,
		showRegister: false,
		toArtistReg: false,
		toUserReg: false,
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
				console.log("LOGIN RESPONSE", response.data);
				let name = response.data.username;
				let userId = response.data.userId;
				let isArtist = response.data.isArtist;
				console.log("LOGIN Username", name);
				console.log("LOGIN User ID", userId);
				console.log("LOGIN is Artist", isArtist);
				let user = {
					username: name,
					userId: userId,
					isArtist: isArtist,
					loggedIn: true
				}
				console.log(user);
				this.props.logInUser(user);
				this.setState({ toHome: true });
			}
		})
			.catch(error => {
				console.log("LOGIN ERROR: ");
				console.log(error);
			})
	}

	handleArtist = () => {
		this.setState({ toArtistReg: true });
	}

	handleUser = () => {
		this.setState({ toUserReg: true });
	}

	showRegister = () => {
		this.setState({ showRegister: true });
	}

	hideRegister = () => {
		this.setState({ showRegister: false })
	}

	render() {
		// console.log(this.props);
		if (this.state.toHome === true) {
			return <Redirect to='/home' />
		}
		if (this.state.toUserReg === true) {
			return <Redirect to='/register/user' />
		}
		if (this.state.toArtistReg === true) {
			return <Redirect to='/register/artist' />
		}

		return (
			<Container>
				<Row>
					<div className="landing-background">
						{/* <h2>TESTING!!! THIS IS THE CURRENT STATE:  {this.props.user.image}</h2> */}
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
					handleInputChange={this.handleInputChange}
				></LoginModal>

				<UserTypeModal
					show={this.state.showRegister}
					handleClose={this.hideRegister}
					handleUser={this.handleUser}
					handleArtist={this.handleArtist}
				></UserTypeModal>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		logInUser: (user) => { dispatch(logInUser(user)) },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
