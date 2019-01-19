import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import ArtCard from "../../components/artCard";
import "./home.css";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../../redux/reducers/myReducer";

class Home extends Component {

	state = {
		artistSearch: "",
		locationSearch: "",
		results: []
	}

	handleInputChange = event => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSearchArtist = (event) => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state.artistSearch);
		API.searchArtist(this.state.artistSearch
		).then(art => {
			return (
				console.log("RESULTS", art.data),
				this.setState({ results: art.data, artistSearch: "", locationSearch: "" })
			)
		}
		).catch(error => {
			console.log("SEARCH ERROR: ");
			console.log(error);
		})
	}

	handleSearchCity = (event)=>{
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state.locationSearch);
		API.searchCity(this.state.locationSearch
		).then(art => {
			return (
				console.log("RESULTS", art.data),
				this.setState({ results: art.data, artistSearch: "", locationSearch: "" })
			)
		}
		).catch(error => {
			console.log("SEARCH ERROR: ");
			console.log(error);
		})
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
					<div className="home-background">
						<Row>
							<div className="row-container search-container">
								<h1>Discover</h1>
								<Search
									handleInputChange={this.handleInputChange}
									handleSearchArtist={this.handleSearchArtist}
									handleSearchCity={this.handleSearchCity}></Search>
							</div>
						</Row>
						{this.state.results.length ? (
							<React.Fragment>
								
								<div className="row text-center results">
									<h1>Results</h1>
									
									{this.state.results.map(art => (
										
										<ArtCard
											key={"card-" + art._id}
											id={art._id}
											fav={false}
											url={art.url}
											artistId={art.artistID}
											title={art.title}
											description={art.description}
											likes={art.likes}
										/>
									
									))}
									
								</div>
								
							</React.Fragment>
						) : (
								<h3 className="center noResults">No Results to Display</h3>
							)}
					</div>
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
function mapDispatchToProps(dispatch) {
	return {
		logInUser: () => { dispatch(logInUser()) },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);