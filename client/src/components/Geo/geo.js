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
		alert("Obtained Geolocation!\n\n" +
		"Latitude: " + position.coords.latitude + "\n" +
		"Longitude: " + position.coords.longitude);
    console.log("Lat: ", position.coords.latitude);
    console.log("Long: ", position.coords.longitude);
  };

  geoError = () => {
    alert("No GPS available");
  };

  render() {
    return (
      <button
        type="button"
        className="waves-effect waves-light btn blue darken-4"
        onClick={this.gpsInit}
      >
        GPS<i className="large material-icons right">location_on</i>
      </button>
    );
  }
}

export default Gps;
