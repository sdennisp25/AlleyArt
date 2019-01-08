import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import Jumbotron from "../../../components/Jumbotron";
import "./register.css";

class RegisterUser extends Component {

	render() {

		return (
			<React.Fragment>
				<Container>
					<h1 className="title">Register to set up Profile</h1>
					<div className="userform">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s6">
										<input id="first_name" type="text" className="validate"></input>
										<label for="first_name">User Name</label>
									</div>
									<div className="input-field col s6">
										<input id="last_name" type="text" className="validate"></input>
										<label for="last_name">Email</label>
									</div>
									<div className="input-field col s6">
										<input id="input_text" type="text" data-length="10"></input>
										<label for="input_text">Password</label>
									</div>
									<div className="col s6">
									<button className="btn waves-effect waves-light center" type="submit" name="action">Submit
  									</button>
									</div>
								</div>
							</form>	
						</div>
					</div>
				</Container>
			</React.Fragment>
		)
	}
}
export default RegisterUser;
