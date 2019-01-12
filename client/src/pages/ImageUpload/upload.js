import React, { Component } from "react";
import "./upload.css";
import Gps from "../../components/Geo";
import AddressForm from "../../components/Address";
// import Camera from "../../components/Camera/camera";
import { Container } from "../../components/Grid";
import { Redirect } from "react-router-dom";

class Upload extends Component {
  state = {
    address: " ",
    cityName: " ",
    state: " ",
    zipCode: " ",
    showAddress: false,
		userAddressInfo: false,
		gotoCamera: false
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
	
	gotoCamera = () => {
		this.setState({ gotoCamera: true });
	}

  userAddressSubmitForm = event => {
    event.preventDefault();
    console.log("ADDRESS: ", this.state.address);
    console.log("CITY: ", this.state.cityName);
    console.log("STATE: ", this.state.state);
    console.log("ZIP CODE: ", this.state.zipCode);
    this.setState({
      showAddress: false
    });
  };

  render() {
    // if (this.props.user.loggedIn === false) {
		// 	return <Redirect to="/" />;
		
		if (this.state.gotoCamera === true) {
      return <Redirect to="/camera" />;
    }

    return (
      <Container>
        <div className="row">
          <div className="col s12 m12">
            <div className="card-box blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Upload Your Image!</span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively. I am a very simple card. I am good at
                  containing small bits of information. I am coÎnvenient because
                  I require little markup to use effectively. I am a very simple
                  card. I am good at containing small bits of information. I am
                  convenient because I require little markup to use effectively.
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action">
                <form id="form">
                  <div className="upload-btn-wrapper">
                    <button className="btn" type="button">
                      Upload Image{" "}
                      <i className="large material-icons right">file_upload</i>
                    </button>

                    <input id="save" type="file" />

                    <Gps />

                    <button
                      id="addAddress"
                      className="btn waves-effect waves-light"
                      type="button"
                      name="action"
                      onClick={this.showAddress}
                    >
                      Address
                      <i className="material-icons right">location_city</i>
                    </button>

                    <button
                      className="btn waves-effect waves-light"
                      type="button"
                      onClick={this.gotoCamera}
                    >
                      Access Camera
                      <i className="material-icons right">location_city</i>
                    </button>

                    <label className="commentLabel">Add a Comment</label>
                    <div className="commentBox waves-effect waves-light">
                      <input className="text" />
                    </div>

                    <button
                      id="submit"
                      className="btn waves-effect waves-light"
                      type="submit"
                    >
                      Submit
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <AddressForm
          show={this.state.showAddress}
          userAddressClose={this.hideAddress}
          userAddressSubmitForm={this.userAddressSubmitForm}
          userAddressInput={this.userAddressInput}
        />
      </Container>
    );
  }
}

export default Upload;
