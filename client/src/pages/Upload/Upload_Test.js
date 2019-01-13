import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import "./upload_test.css";
import Gps from "../../components/Geo";
import AddressForm from "../../components/Address";
import UploadModal from "../../components/Modal/UploadModal";
import { connect } from "react-redux";
import API from "../../utils/api"
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			testUrl: "https://alleyart.s3.us-east-2.amazonaws.com/1547358624775-test.jpg",
			address: " ",
			cityName: " ",
			state: " ",
			zipCode: " ",
			showAddress: false,
			userAddressInfo: false,
			showUpload: false,
			awsUrl: this.props.user.image,
			artTitle: ""
		};
	}

	//////////////////MODAL SHOW OR HIDE FUNCTIONS///////////////
	showAddress = () => {
		this.setState({ showAddress: true });
	};

	hideAddress = () => {
		this.setState({ showAddress: false });
	};

	showUpload = () => {
		this.setState({ showUpload: true });
	};

	hideUpload = (e) => {
		e.preventDefault();
		this.setState({ showUpload: false });
	};

	///////////////ADDRESS INPUT FUNCTIONS- MOVE TO COMPONENT?////////////////
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

	///////////////////SUBMIT UPLOAD FORM//////////////////
	handleInputChange = event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	submitForm = (e, req) => {
		e.preventDefault();
		let imageUrl = this.props.user.image;
		let userName = this.props.user.username;
		let userId = this.props.user.userId;
		console.log("ON SUBMIT PROPS STATE: ", this.props);
		console.log("ON SUBMIT IMAGE: ", imageUrl);
		console.log("LOGGED IN USER", userName);
		console.log("LOGGED IN USER ID", userId);
		API.submitArt({
			artist: userName,
			artistID: userId,
			title: this.state.artTitle,
			url: imageUrl,
			address: this.state.address,
			city: this.state.cityName,
			state: this.state.state,
			zipCode: this.state.zipCode,
		})
			.then(response => {
				console.log(response);
				this.setState({
					title: " ",
					url: " ",
					address: " ",
					city: " ",
					state: " ",
					zipCode: " ",
				})
			})
			.catch(error => {
				console.log("ARTWORK SUBMISSION ERROR: ");
				console.log(error);
			})
	}

	render() {
		//////////////WE MAY NEED TO UNCOMMENT UNTIL FINISHED W/ PAGE SETUP BUT- DO NOT REMOVE//////
		if (this.props.user.loggedIn === false || this.props.user.isArtist === false) {
			return <Redirect to='/' />
		}

		return (
			<React.Fragment>
				<Nav></Nav>
				<Container>
					<h1 className="title">Upload New Image</h1>
					<div className="userform">
						<Row>
							<form className="col s12">

								<Row>
									<div className="col s12">
										<h5 className="white-text">
											Add An Image</h5>
										<button className="waves-effect waves-light btn blue darken-4" type="button" onClick={this.showUpload}>Find Image</button>
									</div>
								</Row>

								<Row>
									<div className="col s12">
										<hr />
										<h5 className="white-text">
											Add A Street Location</h5>
										<h6 className="white-text">
											Submit location by either current GPS location or manual entry</h6>
										<br />
										<Gps />
										<span className="white-text"> or </span>
										<button
											id="addAddress"
											type="button"
											className="waves-effect waves-light btn blue darken-4"
											onClick={this.showAddress}>
											Address
									<i className="large material-icons">location_on</i>
										</button>
									</div>
								</Row>

								<Row>
									<hr />
									<h5 className="white-text">
										Add A Title</h5>
									<div className="input-field col s12">
										<input id="input_text" type="text" name="artTitle" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="blue-text">Title</label>
									</div>
								</Row>

								<Row>
									<hr />
									<h5 className="white-text">
										Tell Us About It!</h5>
									<div className="input-field col s12">
										<textarea id="textarea1" className="materialize-textarea" name="description" onChange={this.handleInputChange}></textarea>
										<label htmlFor="textarea1" className="blue-text">Description of Artwork...</label>
										<input id="input_text" type="text" name="description" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="blue-text">Description of Artwork...</label>
									</div>
								</Row>
								<hr />
								<Row>
									<div className="col s12">
										<button id="submit" className="waves-effect waves-light btn green darken-2" onClick={(e) => { this.submitForm(e) }}>
											SAVE
										<i className="large material-icons">save</i>
										</button>
									</div>

								</Row>

							</form>
						</Row>
					</div>
				</Container>

				<AddressForm
					show={this.state.showAddress}
					userAddressClose={this.hideAddress}
					userAddressSubmitForm={this.userAddressSubmitForm}
					userAddressInput={this.handleInputChange}
				/>

				<UploadModal
					show={this.state.showUpload}
					handleClose={this.hideUpload}
				/>

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