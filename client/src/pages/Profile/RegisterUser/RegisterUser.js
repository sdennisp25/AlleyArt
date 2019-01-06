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
						<h1>THIS IS THE USER REGISTERATION PAGE</h1>
					</Jumbotron>
				</Container>
			</React.Fragment>
		)
	}
}
export default RegisterUser;
