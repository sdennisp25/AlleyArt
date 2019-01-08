import React, { Component } from "react";

class Gps extends Component {
	
	componentDidMount = () => {
		this.gpsInit()
	};
	
  gpsInit = () => {


    this.userGps = navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoError,
    );
  };

  geoSuccess = position => {
    console.log(position);
  };

  geoError = () => {
    alert("No GPS available");
  };


  render() {
    return (
      <div className="home">
        {this.position && (
          <div>
            <p>Lat: {this.position.latitude}</p>
            <p>Long: {this.position.longitude}</p>
          </div>
        )}
      </div>
    );
	}
	
}

export default Gps;
