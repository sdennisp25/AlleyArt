import React, { Component } from "react";
import { Container } from "../../../components/Grid";
import "./register.css";

class RegisterArtist extends Component {
	render() {
		return (
			<React.Fragment>
				<Container>
				<h1 className="title">Register to set up Profile</h1>
					<div className="userform">
						<div className="row">
							<form className="col s12">
								<div className="row">
									<div className="input-field col s6">
										<input id="first_name" type="text" className="validate"></input>
										<label for="first_name">User Name</label>
									</div>
									<div className="input-field col s6">
										<input id="last_name" type="text" className="validate"></input>
										<label for="last_name">Email</label>
									</div>
									<div className="input-field col s6">
										<input id="input_text" type="text" data-length="10"></input>
										<label for="input_text">Password</label>
									</div>
									<div className="input-field col s12">
										<textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
										<label for="textarea2">Description of Work</label>
          							</div>
									<div className="col s6">
										<h3>Do you want to be contacted?</h3>
										<div className="switch">
											<label>
											No
											<input type="checkbox"></input>
											<span className="lever"></span>
											Yes
											</label>
										</div>
									</div>	
									<div className="col s6">
										<button className="btn waves-effect waves-light right" type="submit" name="action">Submit
										</button>
									</div>
								</div>
							</form>	
						</div>
					</div>
				</Container>
			</React.Fragment>
		)
	}
}

export default RegisterArtist;
