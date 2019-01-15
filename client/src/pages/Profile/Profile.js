import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import "./profile.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Nav from "../../components/Nav";

class Profile extends Component {
  state = {
    goToUpload: false
  };

  goToUpload = () => {
    this.setState({ goToUpload: true });
  };

  render() {
    // if (this.props.user.loggedIn === false) {
    //   return <Redirect to="/" />;
    // }
    if (this.state.goToUpload === true) {
      return <Redirect to="/upload" />;
    }

    return (
      <Container>
        <Row>
          <div className="profile">
            <p className="name">Name</p>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am a very simple card. I am good at containing
              small bits of information. I am coÎnvenient because I require
              little markup to use effectively. I am a very simple card. I am
              good at containing small bits of information. I am convenient
              because I require little markup to use effectively. I am a very
              simple card. I am good at containing small bits of information. I
              am convenient because I require little markup to use effectively.
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively. I am a very simple card. I am good at containing
              small bits of information. I am coÎnvenient because I require
              little markup to use effectively. I am a very simple card. I am
              good at containing small bits of information. I am convenient
              because I require little markup to use effectively. I am a very
              simple card. I am good at containing small bits of information. I
              am convenient because I require little markup to use effectively.
            </p>

            <button
              className="btn waves-effect waves-light"
              onClick={this.goToUpload}
            >
              Upload Image
              <i className="material-icons right" />
            </button>
          </div>
        </Row>

        <div className="imageContainer">
          <Col size="md-6">
            <div>
              <Card />
            </div>
          </Col>
        </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state
  };
}

export default connect(mapStateToProps)(Profile);
