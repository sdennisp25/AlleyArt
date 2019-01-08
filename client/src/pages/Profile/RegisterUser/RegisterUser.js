import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import Jumbotron from "../../../components/Jumbotron";
import "./register.css";

class RegisterUser extends Component {

	render() {

		return (
			<React.Fragment>
				<Container>
					<Jumbotron>
						<h2>THIS IS THE USER REGISTERATION PAGE</h2>
					</Jumbotron>
				</Container>
			</React.Fragment>
		)
	}
}
export default RegisterUser;
