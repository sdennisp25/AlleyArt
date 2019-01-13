import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
// import Card from "../../components/Card";
import "./profile.css";
import Gps from "../components/Geo";
import AddressForm from "../components/Address";
import UploadModal from "../components/Modal/UploadModal";
import { connect } from "react-redux";
import API from "../utils/api"
// import { Redirect } from "react-router-dom";
// import Nav from "../../components/Nav";

class Profile extends Component {

		state = {
			address: " ",
			cityName: " ",
			state: " ",
			zipCode: " ",
			showAddress: false,
			userAddressInfo: false,
			showUpload: false,
			// image: '',
			// imagePreviewUrl: ''
		};
	

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('handle uploading-', this.state.image);
		let data = new FormData();
		data.append("image", this.state.image);
		API.uploadImage(data)
			.then(res => {
				console.log("UPLOAD IMAGE: ", res);
			})
			.catch(error => {
				console.log("UPLOAD ERROR: ");
				console.log(error);
			})
	}

	handleImageChange = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			this.setState({
				image: file,
				imagePreviewUrl: reader.result
			});
		}

		reader.readAsDataURL(file)
	}

	showAddress = () => {
		this.setState({ showAddress: true });
	};

	hideAddress = () => {
		this.setState({ showAddress: false });
	};

	showUpload = () => {
		this.setState({ showUpload: true });
	};

	hideUpload = () => {
		this.setState({ showUpload: false });
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
		// if (this.props.user.loggedIn === false) {
		// 	// 	return <Redirect to='/' />
		// 	// }

		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<h6>Image Preview...</h6>);
		}

		return (
			<React.Fragment>
				<Container>
					<h1 className="title">Upload New Image</h1>
					<div className="userform">
						<Row>
							<form className="col 12">
								<Row>
									<div className="col s12">
										<div className="file-field input-field">
											<div className="btn blue darken-4">
												<span>Browse</span>
												<input type="file"
													onChange={(e) => this.handleImageChange(e)} />
											</div>
											<div className="file-path-wrapper">
												<input className="file-path validate" type="text"
													placeholder="Browse" />
											</div>
										</div>
									</div>
								</Row>

								<Row>
									<div className="col s12 grey lighten-3">
										{$imagePreview}
									</div>
								</Row>

								<Row>
									<div className="col s12">
										<button className="btn waves-effect waves-light blue darken-4" type="submit" name="action" onClick={(e) => this.handleSubmit(e)}>Upload Image{" "}<i className="large material-icons">file_upload</i>
										</button>
									</div>
								</Row>

								<Row>
									<button type="button" onClick={this.showUpload}>UPLOAD MODAL</button>
								</Row>
								<hr />
								<Row>
									<div className="col s12">
										<br />
										<h6 className="white-text">
											Submit Location By Current GPS or Manual Entry</h6>
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
									<div className="input-field col s12">
										<input id="input_text" type="text" name="artTitle" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="blue-text">Title</label>
									</div>
								</Row>

								<Row>
									<div className="input-field col s12">
										<input id="input_text" type="text" name="description" onChange={this.handleInputChange}></input>
										<label htmlFor="input_text" className="blue-text">Description of Artwork...</label>
									</div>
								</Row>
								<hr />
								<Row>
									<div className="col s12">
										<button id="submit" className="waves-effect waves-light btn green darken-2">
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
					userAddressInput={this.userAddressInput}
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