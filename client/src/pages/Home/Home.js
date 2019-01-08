import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import Search from "../../components/Search";
import Card from "../../components/Card";
import "./home.css";
import API from "../../utils/api";
import { Redirect } from "react-router-dom";

class Home extends Component {

	state = {
		loggedIn: true
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

	render() {
		if (this.state.loggedIn === false) {
			return <Redirect to='/' />
		}

		return (
			<React.Fragment>
			<Nav></Nav>
			
			<Container fluid>
				<div className="home-background">
					<button className="waves-effect grey darken-3 btn right" onClick={this.handleLogout}>Logout</button>
					<Row>
						<div className="row-container">
							<h1>Search</h1>
							<Search></Search>
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
			</React.Fragment>
		)
	}
}

export default Home;