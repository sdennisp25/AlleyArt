import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import "./profile.css";
import Gps from "../../components/Geo";
import AddressForm from "../../components/Address";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Nav from "../../components/Nav";

class Profile extends Component {
	state = {
		address: " ",
		cityName: " ",
		state: " ",
		zipCode: " ",
		showAddress: false,
		userAddressInfo: false
	};

	showAddress = () => {
		this.setState({ showAddress: true });
	};

	hideAddress = () => {
		this.setState({ showAddress: false });
	};

	userAddressInput = event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	userAddressSubmitForm = (event) => {
		event.preventDefault();
		console.log("ADDRESS: ", this.state.address);
		console.log("CITY: ", this.state.cityName);
		console.log("STATE: ", this.state.state);
		console.log("ZIP CODE: ", this.state.zipCode);
		this.setState({
			showAddress: false
		})
	};

	render() {
		if (this.props.user.loggedIn === false) {
			return <Redirect to='/' />
		}

		return (
			<React.Fragment>
				<Container>
					<Row>
						<div className="profile">
							<p className="name">Name</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                neque velit, lobortis ut magna varius, blandit rhoncus sem.</p>
							<form id="form">
								<div className="upload-btn-wrapper">
									<button className="btn" type="button">
										Upload Image{" "}
										<i className="large material-icons">file_upload</i>
									</button>

									<input id="save" type="file" />

									<Gps />

									<button
										id="addAddress"
										type="button"
										className="waves-effect waves-light btn"
										onClick={this.showAddress}
									>
										Address
                    <i className="large material-icons">location_on</i>
									</button>

									<button id="submit" className="waves-effect waves-light btn">
										Save Image
                    <i className="large material-icons">save</i>
									</button>
								</div>
							</form>
						</div>
					</Row>

					<Col size="md-6">
						<div>
							<Card />
						</div>
					</Col>
				</Container>
				<AddressForm
					show={this.state.showAddress}
					userAddressClose={this.hideAddress}
					userAddressSubmitForm={this.userAddressSubmitForm}
					userAddressInput={this.userAddressInput}
				/>
			</React.Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state,
	}
}

export default connect(mapStateToProps)(Profile);