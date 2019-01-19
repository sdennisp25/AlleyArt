import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import Wrapper from "../../components/Wrapper";
import ArtCard from "../../components/artCard";
import "./Profile_Test.css";
import { connect } from "react-redux";
import API from "../../utils/api"
import { Redirect } from "react-router-dom";
import Nav from "../../components/Nav";
// import { APIGateway } from "aws-sdk";

class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {
			favorites: [],
		};
	}

	componentDidMount () {
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

	render() {
			return (
			<React.Fragment>
				<Nav></Nav>

				<Container fluid>
					<h1>Favorites Page</h1>

					<Row>
						{this.state.favorites.length ? (
							<React.Fragment>
								<h1 className="white-text">{this.props.user.username}'s Favorites</h1>
								<Wrapper>
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
										/>
									))}
								</Wrapper>
							</React.Fragment>
						) : (
								<h3 className="center noResults">No Results to Display</h3>
							)}
					</Row>
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