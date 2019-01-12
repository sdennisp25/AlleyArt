import React, { Component } from "react";
import Nav from "../../components/Nav";
import {Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Card from "../../components/Card";
import ArtCard from "../../components/artCard";
import Wrapper from "../../components/Wrapper";
import "./home.css";
import API from "../../utils/api";
// import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser, updateUser } from "../../redux/reducers/myReducer";

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

	handleSearch = (event) => {
		event.preventDefault();
		console.log("You Clicked Me!");
		console.log(this.state.artistSearch);
		API.searchArt(this.state.artistSearch
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
		// if (this.props.user.loggedIn === false) {
		// 	return <Redirect to='/' />
		// }

		return (
			<React.Fragment>
				<Nav></Nav>

				<Container fluid>
					<div className="home-background">
									<Row>
							<div className="row-container search-container">
								<h1>Search</h1>
								<Search
									handleInputChange={this.handleInputChange}
									handleSearch={this.handleSearch}></Search>
							</div>
						</Row>
						<Row>
							<div className="text-center row-results">
								<h1>Results</h1>
								{this.state.results.length ? (
									<Wrapper>
										{this.state.results.map(art => (
											<ArtCard
												key={"card-" + art._id}
												url={art.url}
												id={art._id}
												title={art.title}
												likes={art.likes}
											/>
										))}
									</Wrapper>

								) : (
										<h3 className="center noResults">No Results to Display</h3>
									)}

							</div>
						</Row>
						<Row>
							<div className="row-container">
								<h1>Discover</h1>

								<Card></Card>

							</div>
						</Row>
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
		updateUser: () => { dispatch(updateUser()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);