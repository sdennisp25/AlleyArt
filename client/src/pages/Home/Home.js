import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Card from "../../components/Card";
import "./home.css";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser, updateUser } from "../../redux/reducers/myReducer"

class Home extends Component {

	//REMOVE LOGGEDIN and USE REDUX FOR LOGGOUT INSTEAD//
	state = {
		loggedIn: true,
		artistSearch: "",
		locationSearch: "",
	}

	handleLogout = () => {
		API.logoutUser().then(response => {
			console.log("Logged Out");
			this.setState({ loggedIn: false });
		}).catch(error => {
			console.log("Logout Error: ");
			console.log(error);
		})
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
			console.log(art.data);
		}).catch(error => {
			console.log("SEARCH ERROR: ");
			console.log(error);
		})
	}


	render() {
		if (this.state.loggedIn === false) {
			return <Redirect to='/' />
		}

		return (
			<Container fluid>
				<div className="home-background">
					<button className="waves-effect grey darken-3 btn right" onClick={this.handleLogout}>Logout</button>
					<Row>
						<div className="row-container">
							<h1>Search</h1>
							<Search
								handleInputChange={this.handleInputChange}
								handleSearch={this.handleSearch}></Search>
						</div>
					</Row>
					<Row>
						<div className="row-container">
							<h1>Trending</h1>
							<Col size="md-4">
								<Card></Card>
							</Col>
						</div>
					</Row>
					<Row>
						<div className="row-container">
							<h1>Discover</h1>
							<Col size="md-4">
								<Card></Card>
							</Col>
						</div>
					</Row>
				</div>
			</Container>
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