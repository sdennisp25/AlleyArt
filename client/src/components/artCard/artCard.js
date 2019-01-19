import React from "react";
import "./artCard.css";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { artistProfile } from "../../redux/reducers/myReducer";

class ArtCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			likes: this.props.likes,
			toProfile: false,
			toMap: false,
			lat: 0,
			lng: 0,
			address: " "
		}
	}
	markAsFavorite = (id) => {
		console.log("FAVORITE ART ID", id);
		API.addFavorites(id)
			.then(response => {
				console.log("ADD FAVORITES RESPONSE: ", response);
			})
			.catch(err => console.log("ADD FAVORITES Error: ", err));
	}

	likeArt = (id) => {
		console.log("LIKED ART ID", id);
		API.updateLikes(id)
			///STILL NEED TO PREVENT USER FROM MULTIPLE LIKES
			.then(response => {
				console.log("LIKES RESPONSE: ", response);
				this.setState({
					likes: response.data.likes
				});
			})
			.catch(err => console.log(err));
	}

	mapArt = (id) => {
		console.log("Showing Art Location", id);
		API.getLatLng(id)
			.then(response => {
				console.log("Coordinates Returned: ", response.data);
				this.setState({
					lat: response.data.lat,
					lng: response.data.lng,
					address: response.data.address
				})
			})
			.catch(err => console.log(err));
	}

	viewArtist = (id) => {
		console.log("Showing Artist Profile", id);
		this.props.artistProfile(id);
		this.setState(
			{ toProfile: true }
		)
	}

	render() {
		if (this.state.toProfile === true) {
			return <Redirect to='/artist' />
		}
		return (
			<div className="col s4 artwork">
				{/* <div className="col s12 m4 l3"> */}

				<div className="card deep-orange darken-4">
					<div className="card-image">
						<img src={this.props.url} alt="" />
					</div>

					<div className="card-action">

						<span className="card-title center"><h5>{this.props.title}</h5></span>

						<p className="center">{this.props.description}</p>

						<button className="icons" onClick={(id) => this.markAsFavorite(this.props.id)}><i className="material-icons">favorite</i></button>
						<button className="icons" onClick={(id) => this.likeArt(this.props.id)}><i className="material-icons">thumb_up</i>{this.state.likes}</button>
						<button className="icons" onClick={(id) => this.mapArt(this.props.id)}><i className="material-icons">room</i></button>
						<button className="icons" onClick={(artistId) => {
							this.viewArtist(this.props.artistId)
						}

						}
						><i className="material-icons">person</i></button>

					</div>
				</div>
				{/* </div> */}
			</div>

		);
	}
}

function mapStateToProps(state) {
	return {
		user: state,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		artistProfile: (artist) => { dispatch(artistProfile(artist)) },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtCard);