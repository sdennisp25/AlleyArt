import React, { Component } from "react";
import {Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import {connect} from "react-redux";

class Landing extends Component {

		render() {
		return (
			<React.Fragment>
				<input/>
				<p>TEST</p>
				<Container>
					<Jumbotron>
					<h1>THIS IS THE LANDING PAGE {this.props.user.test}</h1>
									</Jumbotron>
				</Container>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state){
	return {
		user: state
	}
}

export default connect(mapStateToProps)(Landing);
