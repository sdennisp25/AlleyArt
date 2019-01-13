import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import "./Profile_Test.css";
import { connect } from "react-redux";
// import API from "../../utils/api"
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toUpload: false
		};
	}

	toUpload = () => {
		this.setState({ toUpload: true });
	};

	render() {

		if (this.state.toUpload === true) {
			return <Redirect to='/image' />
		}

		return (
			<React.Fragment>
				<Nav></Nav>

				<Container fluid>
					<h1>Artist Profile Page</h1>
					<Row>
						<div className="col s12">
							<button type="button" 
							className="waves-effect waves-light btn green darken-2" 
							onClick={this.toUpload}>
								Add New Art
					</button>
						</div>

					</Row>
				</Container>
			</React.Fragment>
		)
	}
}

function mapStateToProps(state) {
	return {
		user: state,
	}
}

export default connect(mapStateToProps)(Profile);