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

	viewComments = (id) => {
		console.log("VIEW COMMENTS", id);
	}

	render() {


		return (
			<div className="row">
				<div className="col s12 m4 l3">

					<div className="card deep-orange darken-4">
						<div className="card-image">
							<img src={this.props.url} alt="" />
						</div>

						<div className="card-action">
							<span className="card-title center"><h5>{this.props.title}</h5></span>
							<p className="center">{this.props.description}</p>
							<button className="icons" onClick={(id) => this.markAsFavorite(this.props.id)}><i className="material-icons">favorite</i></button>
							<button className="icons" onClick={(id) => this.likeArt(this.props.id)}><i className="material-icons">thumb_up</i>{this.state.likes}</button>
							<button className="icons" onClick={(id) => this.commentOnArt(this.props.id)}><i className="material-icons">comment</i></button>
						</div>
					</div>
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

export default connect(mapStateToProps)(ArtCard);