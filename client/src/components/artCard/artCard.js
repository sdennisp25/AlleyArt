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
			address: " ",
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
			<div className="col s12 m6 l4 artwork">
				{/* <div className="col s12 m4 l3">  ^col s4 */}

				<div className="card">
					<div className="card-image">
						<img src={this.props.url} alt="" />
					</div>

					<h5 className="center">{this.props.title}</h5>

					<p className="center p-center">{this.props.description}</p>

					{this.props.onProfile!==true &&
					
					<div className="center-align">

						{/* //ADD TO FAVORITES// */}

						{this.props.onFavorites !== true &&
							<button className="iconz hover-button" onClick={(id) => this.markAsFavorite(this.props.id)}><span class="hover-button--off"></span><i className="fas fa-heart"></i><span class='hover-button--on'>Favorites</span></button>
						}

						{/* //THUMBS UP// */}
						<button className="iconz hover-button" onClick={(id) => this.likeArt(this.props.id)}><span class="hover-button--off"></span><i className="fas fa-thumbs-up"></i><span class='hover-button--on'>Likes</span>{this.state.likes}</button>

						{/* //MAP IT// */}
						<button className="iconz hover-button" onClick={(id) => this.props.mapArt(this.props.id)}><span class="hover-button--off"></span><i className="fas fa-map-marked"></i><span class='hover-button--on'>Map it</span></button>

						{/* //VIEW ARTIST// */}


						<button className="iconz hover-button" onClick={(artistId) => this.viewArtist(this.props.artistId)}><span class="hover-button--off"></span><i className="fas fa-user"></i><span class='hover-button--on'>Artist</span></button>

					</div>
					}
				</div>
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