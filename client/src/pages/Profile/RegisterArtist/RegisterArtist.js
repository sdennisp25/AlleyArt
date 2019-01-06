import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import Jumbotron from "../../../components/Jumbotron";
import "./register.css";

class RegisterArtist extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
					<Jumbotron >
						<h2>THIS IS THE ARTIST REGISTERATION PAGE</h2>
					</Jumbotron>
				</Container>
			</React.Fragment>
		)
	}
}

export default RegisterArtist;
