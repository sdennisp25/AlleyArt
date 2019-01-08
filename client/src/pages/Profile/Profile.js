import React, { Component } from "react";
import {Col, Row, Container} from "../../components/Grid";
import Card from "../../components/Card";
import "./profile.css";
// import Nav from "../../components/Nav";

class Profile extends Component {

		render() {
		return (
			<Container>
                <Row>
                <div className="profile">
                <p className="name">Name</p>
                <p>      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
                varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
                Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
                imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
                in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit.
                Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
                consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                fames ac ante ipsum primis in faucibus.</p>
                </div>
                </Row>
                <Row>
                <Col size="s4">
                <div>
                    <Card></Card>
                </div>
                </Col>
                <Col size="s4">
                <div>
                    <Card></Card>
                </div>
                </Col>
                <Col size="s4">
                <div>
                    <Card></Card>
                </div>
                </Col>
                </Row>
            </Container>
		)
	} 
}

export default Profile;