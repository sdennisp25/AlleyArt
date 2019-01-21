import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import "./register.css";
import API from "../../../utils/api";
import { LoginModal } from "../../../components/Modal";
import { Redirect } from "react-router-dom";
import Nav from "../../../components/Nav";

class RegisterArtist extends Component {
  state = {
    artistName: "",
    artistEmail: "",
    artistEmailError: "",
    artistPassword: "",
    artistPasswordError: "",
    aboutArtist: "",
    okToContact: false,
    showLogin: false,
    toHome: false
  };

  showLogin = () => {
    this.setState({ showLogin: true });
  };

  hideLogin = () => {
    this.setState({ showLogin: false });
  };

  handleInputChange = event => {
    // this.setState({
    // 	[event.target.name]: event.target.value
    // });
    // this.props.onChange({
    // 	[event.target.name]: event.targe.value
    // });
    let { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // ---------------------------------------------

  validate = () => {
    let isError = false;
    let emailVal = this.state.artistEmail;
    let passwordVal = this.state.artistPassword;
    // let special = "!@#$%^&*()+=-[]';,./{}|\":<>?";
    let special2 = "/^[A-Za-z]+$/";
    console.log(special2);
    const errors = {};

		// ============== EMAIL VALIDATE ========================
		
		//checks for @ sign
    if (emailVal.indexOf("@") === -1) {
			isError = true;
      errors.artistPasswordError = "Must contain required info";
      console.log("Needs to be valid email!");
		}
		// checks for period 
    if (emailVal.indexOf(".") === -1) {
			isError = true;
      errors.artistPasswordError = "Must be a valid email";
      console.log("Needs a period");
    }
		// ============== PASSWORD VALIDATE ========================
		

    for (let i = 0; i < passwordVal.length; i++) {
      if ("A" <= passwordVal[i] && passwordVal[i] <= "Z")
        // check if you have an uppercase
        console.log("CAP LETTER");
      if ("a" <= passwordVal[i] && passwordVal[i] <= "z")
        // check if you have a lowercase
        console.log("LOWER LETTER");
      if ("0" <= passwordVal[i] && passwordVal[i] <= "9") {
				//checks if you have a number
        console.log("NUMBER");
      }
      // check if you have a numeric
      if (passwordVal[i] === "!") console.log("GOT IT!!!!!");
    }

    // if (this.state.artistPassword.length < 8) {
    //   isError = true;
    //   this.setState({
    //     artistPasswordError: "Needs to be at least 8 characters long!"
    //   });
    //   console.log("INVALID PASSWORD");
    // }

    // if (this.state.artistPassword.indexOf("A") === -1) {
    //   isError = true;
    //   this.setState({
    //     artistPasswordError: "Needs UPPER CASE!"
    //   });
    //   console.log("Needs UPPER CASE");
    // }
    // if (
    //   this.state.artistPasswordError.indexOf(
    //     "~`!#$%^&*+=-[]\\';,/{}|\":<>?"
    //   ) === -1
    // ) {
    //   isError = true;
    //   this.setState({
    //     artistPasswordError: "Needs Special Character!"
    //   });
    //   console.log("Needs Special Character");
    // }

    return isError;
  };

  // ---------------------------------------------

  handleLogin = event => {
    event.preventDefault();
    console.log("You Clicked Me!");
    console.log(this.state);

    API.loginUser({
      email: this.state.username,
      password: this.state.password
    })
      .then(response => {
        if (response.status === 200) {
          this.setState({ toHome: true });
        }
      })
      .catch(error => {
        console.log("LOGIN ERROR: ");
        console.log(error);
      });
  };

  handleRegUser = event => {
    event.preventDefault();
    console.log("You Clicked Me!");
    console.log(this.state);

    const err = this.validate();
    if (!err) {
      this.setState({
        artistEmail: "",
        artistPassword: ""
      });
    }

    API.registerUser({
      isArtist: true,
      username: this.state.artistName,
      email: this.state.artistEmail,
      password: this.state.artistPassword,
      aboutArtist: this.state.aboutArtist,
      okToContact: this.state.okToContact
    })
      .then(response => {
        console.log(response);
        this.setState({
          artistName: "",
          artistEmail: "",
          artistPassword: "",
          aboutArtist: "",
          okToContact: false,
          showLogin: true
        });
      })
      .catch(error => {
        console.log("ARTIST REGISTRATION ERROR: ");
        console.log(error);
      });
  };

  switchStatus = () => {
    this.setState({
      okToContact: true
    });
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/home" />;
    }

    return (
      <React.Fragment>
        <Nav />
        <Container>
          <h1 className="title">Register ARTIST Profile</h1>
          <div className="userform cyan darken-2">
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      id="input-text"
                      type="text"
                      className="validate"
                      name="artistName"
                      value={this.state.artistName}
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-text">Artist Name</label>
                  </div>

                  {/* =============================== */}
                  {/* ========= EMAIL =============== */}
                  <div className="input-field col s12">
                    <input
                      id="email"
                      type="email"
                      className="validate"
                      name="artistEmail"
                      value={this.state.artistEmail}
                      onChange={this.handleInputChange}
                      errortext={this.state.artistEmailError}
                      floatinglabeltext="Name"
                    />
                    <label htmlFor="email">Email</label>
                    <span
                      className="helper-text"
                      data-error="Please Enter a valid Email Address"
                      data-success=""
                    />
                  </div>

                  {/* ============================== */}
                  {/* ========= PASSWORD =========== */}

                  <div className="input-field col s12">
                    <input
                      id="input_text"
                      type="email"
                      className="validate"
                      data-length="10"
                      name="artistPassword"
                      value={this.state.artistPassword}
                      onChange={this.handleInputChange}
                      errortext={this.state.artistPasswordError}
                    />

                    <label htmlFor="input_text">Password</label>
                    <span
                      className="helper-text"
                      // data-error="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                      data-error={this.state.artistPasswordError}
                      data-success=""
                    />
                  </div>
                  {/* ============================== */}
                  <div className="input-field col s12">
                    <textarea
                      id="textarea2"
                      className="materialize-textarea"
                      data-length="120"
                    />
                    <label
                      htmlFor="textarea2"
                      name="aboutArtist"
                      onChange={this.handleInputChange}
                    >
                      About You As An Artist...
                    </label>
                  </div>
                  <div className="col s12">
                    <h3 className="white-text">Do you want to be contacted?</h3>
                    <div className="switch">
                      <label className="white-text">
                        No
                        <input
                          type="checkbox"
                          defaultValue={this.state.okToContact}
                          onChange={this.switchStatus}
                        />
                        <span className="lever green darken-2" />
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="col s12">
                    <div className="center-align">
                      <button
                        className="btn waves-effect waves-light green darken-2"
                        type="submit"
                        name="action"
                        onClick={this.handleRegUser}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>

        <LoginModal
          show={this.state.showLogin}
          handleClose={this.hideLogin}
          handleLogin={this.handleLogin}
          handleInputChange={this.handleInputChange}
        />
      </React.Fragment>
    );
  }
}

export default RegisterArtist;
