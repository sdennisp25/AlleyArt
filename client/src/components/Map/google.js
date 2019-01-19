import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mStyle = {
	border: "1px solid black",
	width: "35%",
	height: "65%"
}

export class MyMapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		latitudeState: " ",
		longitudeState: " "
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};


	render() {
		// console.log(this.props.google);
		// console.log(this.state);

		return (
			<div className="map">
				<Map
					google={this.props.google}
					onClick={this.onMapClicked}
					style={mStyle}
					initialCenter={{
						lat: this.props.lat,
						lng: this.props.lng
					}}
				>
					<Marker onClick={this.onMarkerClick} name={"Current location"} />

					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
					>
						<div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div>
					</InfoWindow>
				</Map>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyCH-qhf7-LfJ52gOs_vqe_-_TiNlL30lww"
})(MyMapContainer);
