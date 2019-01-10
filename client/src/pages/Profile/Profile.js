import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Card from "../../components/Card";
import "./profile.css";
import Gps from "../../components/Geo";
import AddressForm from "../../components/Address";
// import Nav from "../../components/Nav";

class Profile extends Component {
  state = {
		address: " ",
		cityName: " ",
		state: " ",
		zipCode: " ",
    showAddress: false
  };

  showAddress = () => {
    this.setState({ showAddress: true });
	};
	
	hideAddress = () => {
		this.setState({ showAddress: false });
	}

	userAddressInput = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		})
	};

	userAddressSubmit = (event) => {
		event.preventDefault();
		console.log("EVENT: ", event);
		console.log("STATE: ", this.state);
	}

  render() {
    return (
      <Container>
        <Row>
          <div className="profile">
            <p className="name">Name</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              velit, lobortis ut magna varius, blandit rhoncus sem. Morbi
              lacinia nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut
              feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut
              aliquet urna imperdiet ac. Sed nec nulla aliquam, bibendum odio
              eget, vestibulum tortor. Cras rutrum ligula in tincidunt commodo.
              Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
              elit. Donec blandit est sed risus feugiat porttitor. Vestibulum
              molestie hendrerit massa non consequat. Vestibulum vitae lorem
              tortor. In elementum ultricies tempus. Interdum et malesuada fames
              ac ante ipsum primis in faucibus.
            </p>

            <form id="form">
              <div className="upload-btn-wrapper">
                <button className="btn" type="button">
                  Upload Image{" "}
                  <i className="large material-icons">file_upload</i>
                </button>

                <input id="save" type="file" />

                <Gps />

                <button id="submit" className="waves-effect waves-light btn">
                  Save Image <i className="large material-icons">save</i>
                </button>
                <button id="addAddress" type="button" onClick={this.showAddress}>Address
                </button>
              </div>

              <div className="commentBox">
                <label>Enter a comment</label>
                <textarea />
              </div>
            </form>
          </div>
        </Row>

        <Col size="md-6">
          <div>
            <Card />
          </div>
        </Col>

				<AddressForm 
					show={this.state.showAddress}
					userAddressClose={this.state.hideAddress}
					userAddressSubmit={this.state.userAddressSubmit}
					userAddressInput={this.state.userAddressInput}
					/>
      </Container>
    );
  }
}

export default Profile;
