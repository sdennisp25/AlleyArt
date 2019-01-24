import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import "./register.css";
import API from "../../../utils/api";
import { LoginModal } from "../../../components/Modal";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/Nav";

class RegisterArtist extends Component {
	state = {
		artistName: "",
		artistEmail: "",
		artistPassword: "",
		artistEmailError: "",
		artistPasswordError: "",
		aboutArtist: "",
		okToContact: false,
		showLogin: false,
		toHome: false
	};

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
		var pass = event.target.value;
		var reg = /^[A-Z]*$/;
		var test = reg.test(pass);
		if (test) {
			// alert("pass");
			this.setState({ value: pass });
		}
	};
	// ---------------------------------------------

	validate = () => {
		let isError = false;
		let emailVal = this.state.artistEmail;
		let passwordVal = this.state.artistPassword;
		// const errors = {};

		for (let i = 0; i < emailVal.length; i++) {
			// ============== VALIDATE EMAIL FORMAT ========================
			if (emailVal[i].indexOf("@") && emailVal[i].indexOf(".") === -1) {
				isError = true;
				this.setState({
					artistEmailError: "Must contain an @ and . symbol"
				});
				console.log("Needs to be valid email!");
			}
			// ================== VALIDATE PASSWORD =========================
		}
		for (let i = 0; i < passwordVal.length; i++) {
			if (passwordVal.length < 8) {
				isError = true;
				this.setState({
					artistPasswordError: "Needs to be at least 8 characters long!"
				});
				console.log("Not long enough!");
			}
		}
		return isError;
		// for (let i = 0; i < passwordVal.length; i++) {
		//   isError = true;
		//   if ("A" <= passwordVal[i] && passwordVal[i] <= "Z") {
		//     // check if you have an uppercase
		//     console.log("CAP LETTER FOUND");
		//   } else {
		//     this.setState({
		//       artistPasswordError: "Needs a uppercase letter!"
		//     });
		//   }
		//   if ("a" <= passwordVal[i] && passwordVal[i] <= "z") {
		//     // check if you have a lowercase
		//     console.log("LOWER LETTER FOUND");
		//   } else {
		//     this.setState({
		//       artistPasswordError: "Needs a lowercase letter!"
		//     });
		//   }
		//   if ("0" <= passwordVal[i] && passwordVal[i] <= "9") {
		//     //checks if you have a number
		//     console.log("NUMBER FOUND");
		//   } else {
		//     this.setState({
		//       artistPasswordError: "Needs a number!"
		//     });
		//   }
		// }
	};

	// ---------------------------------------------

	handleLogin = event => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state);

		API.loginUser({
			email: this.state.username,
			password: this.state.password
		})
			.then(response => {
				if (response.status === 200) {
					this.setState({ toHome: true });
				}
			})
			.catch(error => {
				console.log("LOGIN ERROR: ");
				console.log(error);
			});
	};

	handleRegUser = event => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state);

		const err = this.validate();
		if (!err) {
			this.setState({
				artistEmail: "",
				artistPassword: ""
			});
		}

		API.registerUser({
			isArtist: true,
			username: this.state.artistName,
			email: this.state.artistEmail,
			password: this.state.artistPassword,
			aboutArtist: this.state.aboutArtist,
			okToContact: this.state.okToContact
		})
			.then(response => {
				console.log(response);
				this.setState({
					artistName: "",
					artistEmail: "",
					artistPassword: "",
					aboutArtist: "",
					okToContact: false,
					showLogin: true
				});
			})
			.catch(error => {
				console.log("ARTIST REGISTRATION ERROR: ");
				console.log(error);
			});
	};

	switchStatus = () => {
		this.setState({
			okToContact: true
		});
	};

	render() {
		if (this.state.toHome === true) {
			return <Redirect to="/home" />;
		}

		return (
			<React.Fragment>
				<Nav />
				<div className="userform cyan darken-2">
					<Container>
						<div className="row">
							<form className="register">
								<h1 className="title-register">ARTIST REGISTRATION</h1>

								<div className="row">
									<div className="input-field col s12">
										<i className="material-icons prefix">wc</i>
										<input
											id="input-text"
											type="text"
											className="validate"
											name="artistName"
											value={this.state.artistName}
											onChange={this.handleInputChange}
										/>
										<label htmlFor="input-text">Artist Name</label>
									</div>

									{/* =============================== */}
									{/* ========= EMAIL =============== */}
									<div className="input-field col s12">
										<i className="material-icons prefix">email</i>
										<input
											id="email"
											type="email"
											className="validate"
											name="artistEmail"
											value={this.state.artistEmail}
											onChange={this.handleInputChange}
											errortext={this.state.artistEmailError}
											floatinglabeltext="Name"
										/>
										<label htmlFor="email">Email</label>
										<span
											className="helper-text"
											data-error={this.state.artistEmailError}
											// data-error="Please Enter a valid Email Address"
											data-success=""
										/>
									</div>

									{/* ============================== */}
									{/* ========= PASSWORD =========== */}

									<div className="input-field col s12">
										<i className="material-icons prefix">lock</i>
										<input
											id="input_text"
											type="password"
											className="validate"
											data-length="10"
											name="artistPassword"
											value={this.state.artistPassword}
											onChange={this.handleInputChange}
											errortext={this.state.artistPasswordError}
										/>

										<label htmlFor="input_text">Password</label>
										<span
											className="helper-text"
											// data-error="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
											data-error={this.state.artistPasswordError}
											data-success=""
										/>
									</div>
									{/* ============================== */}
									<div className="input-field commentBox col s12">
										<i className="tiny material-icons prefix">comment</i>
										<textarea
											id="textarea2"
											type="text"
											className="materialize-textarea"
											data-length="120"
										/>
										<label
											htmlFor="textarea2"
											name="aboutArtist"
											onChange={this.handleInputChange}
										>
											About You As An Artist...
                    </label>
									</div>

                  <div className="col s12">
                    <h3 className="white-text contact-q">Do you want to be contacted?</h3>
                    <div className="switch">
                      <label className="white-text">
                        No
                        <input
													type="checkbox"
													defaultValue={this.state.okToContact}
													onChange={this.switchStatus}
												/>
												<span className="lever green darken-2" />
												Yes
                      </label>
										</div>
									</div>

									<div className="col s12">
										<div className="center-align">
											<button
												className="btn waves-effect waves-light green darken-2"
												type="submit"
												name="action"
												onClick={this.handleRegUser}
											>
												Register
                      </button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</Container>
				</div>

				<LoginModal
					show={this.state.showLogin}
					handleClose={this.hideLogin}
					handleLogin={this.handleLogin}
					handleInputChange={this.handleInputChange}
				/>
			</React.Fragment>
		);
	}
}

export default RegisterArtist;
