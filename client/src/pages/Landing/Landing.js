import React, { Component } from "react";
import {Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class Landing extends Component {

		render() {
		return (
			<Container>
				<Jumbotron>
				<h1>THIS IS THE LANDING PAGE</h1>
				</Jumbotron>
			</Container>
		)
	}
}

export default Landing;
