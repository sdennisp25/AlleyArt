import React, { Component } from "react";

class Gps extends Component {
	
	//will ask user to use current location
	// componentDidMount = () => {
	// 	this.gpsInit()
	// };

	//will locate your current position
  gpsInit = () => { 
    this.userGps = navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoError,
    );
  };

  geoSuccess = position => {
    console.log(position);
		console.log("Lat: ", position.coords.latitude);
    console.log("Long: ", position.coords.longitude);
  };

  geoError = () => {
    alert("No GPS available");
  };


  render() {
    return (
      <div className="home">
        {this.position && (
          <div>
            <p>Lat: {this.position.coords.latitude}</p>
            <p>Long: {this.position.coords.longitude}</p>
          </div>
        )}
      </div>
    );
	}
	
}

export default Gps;
