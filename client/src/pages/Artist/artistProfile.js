import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
// import ArtCard from "../../components/artCard";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./artistProfile.css";

class Artist extends Component {

	state = {
		artistName: " ",
		aboutArtist: " ",
		okToContact: false,
		artistEmail: " ",
		artistWorks: []
	}

	componentDidMount = () => {
		console.log('Current Props: ', this.props.user);
		API.artistProfile(this.props.user.artistId)
			.then(artist => {
				this.setState({
					artistName: artist.data.username,
					aboutArtist: artist.data.aboutArtist,
					okToContact: artist.data.contactArtist,
					artistEmail: artist.data.artistEmail,
					artistWorks: artist.data.artistWorks
				});
				console.log("ARTIST PROFILE RESPONSE", this.state);
			})
			.catch(err => console.log(err));
	}

	render() {

		//////////////WE MAY NEED TO UNCOMMENT UNTIL FINISHED W/ PAGE SETUP BUT- DO NOT REMOVE//////
		if (this.props.user.loggedIn === false) {
			return <Redirect to='/' />
		}

		return (
			<React.Fragment>
				<Nav></Nav>

				<Container fluid>
					<h1>Artist</h1>

					<div className="info-name center-align">
						<h6>{this.state.artistName}</h6>
					</div>
					<h6>ABOUT: </h6>
					<div className="info-about valign-wrapper">
						<p>{this.state.aboutArtist}</p>
					</div>
					<h6>CONTACT: </h6>
					<div className="info-contact">
						{this.state.okToContact === true && <p>OK to contact</p>}
						{this.state.okToContact === false && <p>Unable to contact </p>}
					</div>
					<h6>EMAIL: </h6>
					<div className="info-email">
						<p>{this.state.artistEmail}</p>
					</div>
					<h6>ARTWORK: </h6>
					




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

export default connect(mapStateToProps)(Artist);