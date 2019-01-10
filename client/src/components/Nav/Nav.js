import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
	
	render() {

		return (
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/home">
				ALLEY ART</a>
				<div className="navWide">
					<div className="wideDiv">
					<Link to={"/"}>Logout</Link>
					<Link to={"/home"}>Home</Link>
					<Link to={"/profile"}>Profile</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
					<div className="narrowLinks">
						<a href="/landing" onClick={this.burgerToggle}>Logout</a>
						<a href="/home" onClick={this.burgerToggle}>Home</a>
						<a href="/profile" onClick={this.burgerToggle}>Profile</a>
					</div>
				</div>
			</nav>
		);	
	}
	
	burgerToggle = () => {
		let linksEl = document.querySelector('.narrowLinks');
		if (linksEl.style.display === 'block') {
				  linksEl.style.display = 'none';
			  } else {
				  linksEl.style.display = 'block';
			  }
	  }
}

export default Nav;
