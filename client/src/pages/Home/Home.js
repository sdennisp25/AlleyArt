import React, { Component } from "react";
import {Col, Row, Container} from "../../components/Grid";
import Search from "../../components/Search";
import Card from "../../components/Card";
import "./home.css";
import Nav from "../../components/Nav";

class Home extends Component {

		render() {
		return (
			<Container fluid>
                <div className="home-background">
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
		)
	} 
}

export default Home;