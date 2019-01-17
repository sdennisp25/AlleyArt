import React from "react";
import "./artCard.css";
import API from "../../utils/api";
import { connect } from "react-redux";

class ArtCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			likes: this.props.likes
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
	}

	viewArtist = (id) => {
		console.log("Showing Artist Profile", id);
	} 


	render() {


		return (
			<div className="col s4 artwork">
				{/* <div className="col s12 m4 l3">  ^col s4 */}
				
					<div className="card">
						<div className="card-image">
							<img src={this.props.url} alt="" />
						</div>

						<div className="card-action">

								<span className="card-title center"><h5>{this.props.title}</h5></span>

								<p className="center">{this.props.description}</p>
							<div className="center-align">
								<button className="iconz" onClick={(id) => this.markAsFavorite(this.props.id)}><i className="fas fa-heart"></i></button>
								<button className="iconz" onClick={(id) => this.likeArt(this.props.id)}><i className="fas fa-thumbs-up"></i>{this.state.likes}</button>
								<button className="iconz" onClick={(id) => this.mapArt(this.props.id)}><i className="fas fa-map-marked"></i></button>
								<button className="iconz" onClick={(id) => this.viewArtist(this.props.id)}><i className="fas fa-user"></i></button>
							</div>	
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

export default connect(mapStateToProps)(ArtCard);