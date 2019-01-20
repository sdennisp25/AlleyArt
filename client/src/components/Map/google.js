import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mStyle = {
	border: "1px solid black",
	width: "75%",
	height: "75%"
}

export class MyMapContainer extends Component {
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {},
		// latitudeState: " ",
		// longitudeState: " "
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
		const { center, zoom } = this.props;

		return (
			<div className="map">
				<Map
					google={this.props.google}
					style={mStyle}
					center={center}
					initialCenter={{
						lat: 40.7608,
						lng: -111.8910
					}}
					zoom={zoom}
					onClick={this.onMapClicked}
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
const LoadingContainer = (props) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
	apiKey: "AIzaSyCH-qhf7-LfJ52gOs_vqe_-_TiNlL30lww",
	LoadingContainer: LoadingContainer
})(MyMapContainer);
