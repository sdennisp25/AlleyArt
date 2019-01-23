import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Container } from "../../components/Grid";
import ArtCard from "../../components/artCard";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Artist extends Component {

	state = {
		artistName: " ",
		aboutArtist: " ",
		okToContact: false,
		artistEmail: " ",
		artistWorks: [],
		onProfile: true,
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
					<h1>Artist Profile</h1>

					<h6>ARTIST NAME: </h6>
					<p>{this.state.artistName}</p>

					<h6>ABOUT: </h6>
					<p>{this.state.aboutArtist}</p>

					<h6>OK TO CONTACT: </h6>
					{this.state.okToContact === true && <p>OK to contact</p>}
					{this.state.okToContact === false && <p>Unable to contact </p>}

					<h6>EMAIL: </h6>
					<p>{this.state.artistEmail}</p>

					<h6>ARTWORK: </h6>

					{this.state.artistWorks.length ? (
						<React.Fragment>

							<div className="row text-center results col s12 m6 l4">
								<h1 id="title">Results</h1>

								{this.state.artistWorks.map(art => (

									<ArtCard
										key={"card-" + art._id}
										id={art._id}
										fav={false}
										url={art.url}
										artistId={art.artistID}
										title={art.title}
										description={art.description}
										likes={art.likes}
										onProfile={this.state.onProfile}
									/>

								))}

							</div>
						</React.Fragment>
					) : (
							<h3 className="center noResults col s12 m6 l4">No Results to Display</h3>
						)}





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