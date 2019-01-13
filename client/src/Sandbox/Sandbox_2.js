import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import "./profile.css";
import Gps from "../components/Geo";
import AddressForm from "../components/Address";
import { connect } from "react-redux";
import API from "../utils/api"
// import { Redirect } from "react-router-dom";
// import Nav from "../../components/Nav";

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = { image: '', imagePreviewUrl: '' };
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log('handle uploading-', this.state.image);
		console.log('Event', e);
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

	handleImageChange(e) {
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

	render() {
		let { imagePreviewUrl } = this.state;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}

		return (
			<div className="previewComponent">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<input className="fileInput"
						type="file"
						onChange={(e) => this.handleImageChange(e)} />
					<button className="submitButton"
						type="submit"
						onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
				</form>
				<div className="imgPreview">
					{$imagePreview}
				</div>
			</div>
		)
	}




	//////////////////////////////////////////
	// state = {
	// 	address: " ",
	// 	cityName: " ",
	// 	state: " ",
	// 	zipCode: " ",
	// 	showAddress: false,
	// 	userAddressInfo: false,
	// 	uploading: false,
	// 	images: []
	// };

	// onChange = e => {
	// 	console.log(e.target.files)
	//   const files = Array.from(e.target.files)
	//   this.setState({ uploading: true })

	//   const formData = new FormData()

	//   files.forEach((file, i) => {
	//     formData.append(i, file)
	// 	})
	// 	console.log("Form DATA: ", formData);

	//   // API.uploadImage({
	// 	// 	imageData: formData
	// 	// })
	//   // .then(res => res.json())
	//   // .then(images => {
	//   //   this.setState({ 
	//   //     uploading: false,
	//   //     images
	//   //   })
	//   // })
	// }

	// showAddress = () => {
	// 	this.setState({ showAddress: true });
	// };

	// hideAddress = () => {
	// 	this.setState({ showAddress: false });
	// };

	// userAddressInput = event => {
	// 	let { name, value } = event.target;
	// 	this.setState({
	// 		[name]: value
	// 	});
	// }; 

	// // uploadImage = (res) => {
	// // 	console.log("you clicked me");
	// // 	API.uploadImage
	// // 	.then(res=>{
	// // 		console.log("UPLOAD IMAGE: ", res);
	// // 	})
	// // 	.catch(error => {
	// // 		console.log("UPLOAD ERROR: ");
	// // 		console.log(error);
	// // 	})
	// // }

	// userAddressSubmitForm = (event) => {
	// 	event.preventDefault();
	// 	console.log("ADDRESS: ", this.state.address);
	// 	console.log("CITY: ", this.state.cityName);
	// 	console.log("STATE: ", this.state.state);
	// 	console.log("ZIP CODE: ", this.state.zipCode);
	// 	this.setState({
	// 		showAddress: false
	// 	})
	// };

	// render() {
	// 	// if (this.props.user.loggedIn === false) {
	// 	// 	return <Redirect to='/' />
	// 	// }

	// 	return (
	// 		<React.Fragment>
	// 			<Container>
	// 				<Row>
	// 					<div className="profile">
	// 						<p className="name">Name</p>
	// 						<p>
	// 							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
	//               neque velit, lobortis ut magna varius, blandit rhoncus sem.</p>
	// 						<form id="form">
	// 							<div className="upload-btn-wrapper">
	// 								<button className="btn" type="submit" onChange={this.onChange}>
	// 									Upload Image{" "}
	// 									<i className="large material-icons">file_upload</i>
	// 								</button>

	// 								<input id="save" type="file" />

	// 								<Gps />

	// 								<button
	// 									id="addAddress"
	// 									type="button"
	// 									className="waves-effect waves-light btn"
	// 									onClick={this.showAddress}
	// 								>
	// 									Address
	//                   <i className="large material-icons">location_on</i>
	// 								</button>

	// 								<button id="submit" className="waves-effect waves-light btn">
	// 									Save Image
	//                   <i className="large material-icons">save</i>
	// 								</button>
	// 							</div>
	// 						</form>
	// 					</div>
	// 				</Row>

	// 				<Col size="md-6">
	// 					<div>
	// 						<Card />
	// 					</div>
	// 				</Col>
	// 			</Container>
	// 			<AddressForm
	// 				show={this.state.showAddress}
	// 				userAddressClose={this.hideAddress}
	// 				userAddressSubmitForm={this.userAddressSubmitForm}
	// 				userAddressInput={this.userAddressInput}
	// 			/>
	// 		</React.Fragment>
	// 	);
	// }
}

function mapStateToProps(state) {
	return {
		user: state,
	}
}

export default connect(mapStateToProps)(Profile);