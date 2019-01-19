import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./upload_test.css";
import Gps from "../../components/Geo";
import AddressForm from "../../components/Address";
import UploadModal from "../../components/Modal/UploadModal";
import { connect } from "react-redux";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import MyMapContainer from "../../components/Map/google";

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: " ",
      cityName: "  ",
      state: " ",
      zipCode: " ",
      lat: 0,
      lng: 0,
      showAddress: false,
      userAddressInfo: false,
      showUpload: false,
      awsUrl: this.props.user.image,
      artTitle: "",
      description: " ",
      backToProfile: false
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

  hideUpload = e => {
    e.preventDefault();
    this.setState({ showUpload: false });
  };

  ///////////////ADDRESS INPUT FUNCTIONS- MOVE TO COMPONENT?////////////////
  userAddressSubmitForm = event => {
    event.preventDefault();
    let fullAddress =
      this.state.address +
      " " +
      this.state.cityName +
      " " +
      this.state.state +
      " " +
      this.state.zipCode;
    console.log("Full Address", fullAddress);
    let formattedAddress = fullAddress.split(" ").join("+");
    console.log(formattedAddress);
    API.getGeocode(formattedAddress)
      .then(location => {
        return (
          (console.log("RESULTS", location.data),
          this.setState({
            showAddress: false,
            lat: location.data.lat,
            lng: location.data.lng
          })),
          console.log("UPDATED STATE", this.state)
        );
      })
      .catch(error => {
        console.log("GEOCODE ERROR: ");
        console.log(error);
      });
  };

  ///////////////////SUBMIT UPLOAD FORM//////////////////
  handleInputChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = e => {
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
      lat: this.state.lat,
      lng: this.state.lng,
      description: this.state.description
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
          description: " ",
          backToProfile: true
        });
      })
      .catch(error => {
        console.log("ARTWORK SUBMISSION ERROR: ");
        console.log(error);
      });
  };

  render() {
    //////////////WE MAY NEED TO UNCOMMENT UNTIL FINISHED W/ PAGE SETUP BUT- DO NOT REMOVE//////
    // if (this.props.user.loggedIn === false || this.props.user.isArtist === false) {
    // 	return <Redirect to='/' />
    // }

    if (this.state.backToProfile === true) {
      return <Redirect to="/profile" />;
    }

    return (
      <React.Fragment>
        <Nav />
        <div className="uploadForm">
          <Container>
            <h1 className="title">Upload New Image</h1>
            <div className="row">
              <div className="col s12 m6">
                <div className="card card-frame blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Image Upload</span>
                    <form>
                      <button
                        className="waves-effect waves-light btn blue darken-4"
                        type="button"
                        onClick={this.showUpload}
                      >
                        Find Image
                        <i className="large material-icons right">
                          file_upload
                        </i>
                      </button>

                      <Gps />

                      <button
                        id="addAddress"
                        type="button"
                        className="waves-effect waves-light btn blue darken-4"
                        onClick={this.showAddress}
                      >
                        Address
                        <i className="large material-icons right">home</i>
                      </button>
                      <label>Title</label>
                      <input
                        id="input_text"
                        type="text"
                        name="artTitle"
                        onChange={this.handleInputChange}
                      />
                      <label>Description</label>
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                        name="description"
                        onChange={this.handleInputChange}
                      />
                      <button
                        id="submit"
                        className="waves-effect waves-light btn green darken-2"
                        onClick={e => {
                          this.submitForm(e);
                        }}
                      >
                        SAVE
                        <i className="large material-icons right">send</i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col s12 m6">
                <MyMapContainer />
              </div>
            </div>
          </Container>
        </div>
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
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(Upload);
