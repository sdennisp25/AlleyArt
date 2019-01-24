import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
// import Wrapper from "../../components/Wrapper";
import ArtCard from "../../components/artCard";
import "./Profile_Test.css";
import { connect } from "react-redux";
import API from "../../utils/api"
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
import MapModal from "../../components/Map/Modal/mapModal";

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			favorites: [],
			title: " ",
			address: " ",
			city: " ",
			onFavorites: true,
			showMap: false
		};
	}

	componentDidMount() {
		API.getFavorites()
			.then(response => {
				console.log("LOAD FAVORITES: ", response);
				this.setState({
					favorites: response.data
				});
				console.log("NEW FAV ARRAY: ", this.state.favorites);
			})
			.catch(err => console.log(err));
	}


	showMap = () => {
		this.setState({
			showMap: true
		})
	}

	hideMap = () => {
		this.setState({
			showMap: false
		})
	}

	mapArt = (id) => {
		console.log("Showing Art Location", id);
		API.getLatLng(id)
			.then(response => {
				console.log("Coordinates Returned: ", response.data);
				this.setState({
					center: {
						lat: response.data.lat,
						lng: response.data.lng
					},
					title: response.data.title,
					address: response.data.address,
					city: response.data.city
				});
			})
			.then(this.showMap())


			.catch(err => console.log(err));
	}

	render() {
		if (this.props.user.loggedIn === false) {
			return <Redirect to='/' />
		}

		return (
			<React.Fragment>
				<Nav></Nav>

				<Container fluid>

					<Row>
						{this.state.favorites.length ? (
							<React.Fragment>
								<div className="row text-center">
									<h1 id="title-artp" className="white-text">{this.props.user.username}'s Favorites</h1>
									{this.state.favorites.map(art => (
										<ArtCard
											key={"card-" + art._id}
											id={art._id}
											fav={true}
											url={art.url}
											artistId={art.artistID}
											title={art.title}
											description={art.description}
											likes={art.likes}
											mapArt={this.mapArt}
											onFavorites={this.state.onFavorites}
										/>
									))}
								</div>
							</React.Fragment>
						) : (
								<h3 className="center noResults">No Results to Display</h3>
							)}
					</Row>

					<MapModal
						show={this.state.showMap}
						handleClose={this.hideMap}
						center={this.state.center}
						title={this.state.title}
						address={this.state.address}
						city={this.state.city}
						mapAPI={this.props.user.mapAPI}
					/>

				</Container>
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