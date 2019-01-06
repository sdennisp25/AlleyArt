import React, { Component } from "react";
import {Container } from "../../components/Grid";
import {Row } from "../../components/Grid";
import "./landing.css";

class Landing extends Component {

		render() {
		return (
			<Container>
				<Row>
				<div className="landing-background">
					<div className="landing center-align card-panel">
						<h1>ALLEY ART</h1>
						<p>Beyond this is a street art community. Create a profile and contribute to the international art collections. If your looking for a discovery find the location and go see for yourself.</p>
						<div className="row">
							<form className="col s12">
							<div className="row">
								<div className="input-field col s6">
								<label htmlFor="input_text">Username</label>
								<input id="input_text" type="text" data-length="10">
								</input>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
								<textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
								<label htmlFor="textarea2">Password</label>
								</div>
							</div>
							</form>
							<a href="/home" className="waves-effect grey darken-3 btn">Login</a>
							<a href="/" className="waves-effect grey darken-3 btn modal-trigger">Sign-up</a>
						</div>
					</div>
				</div>
				</Row>
			</Container>
		)
	} 
}

export default Landing;
