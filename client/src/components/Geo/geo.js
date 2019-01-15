import React, { Component } from "react";

class Gps extends Component {

  // will ask user to use current location
  // componentDidMount = () => {
  //   this.gpsInit();
  // };

  //will locate your current position
  gpsInit = () => {
    this.userGps = navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoError
    );
  };

  geoSuccess = position => {
		alert("Obtained Geo Location!");
    console.log("Latitude: ", position.coords.latitude);
    console.log("Longitude: ", position.coords.longitude);
  };

  geoError = () => {
    alert("No GPS available");
  };

  render() {
    return (
      <button
        type="button"
        className="waves-effect waves-light btn"
        onClick={this.gpsInit}
      >
        Location <i className="large material-icons right">location_on</i>
      </button>
    );
  }
}

export default Gps;
