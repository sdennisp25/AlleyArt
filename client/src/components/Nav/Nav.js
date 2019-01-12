import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import API from "../../utils/api";
import { logOutUser } from "../../redux/reducers/myReducer";
import "./Nav.css";

class Nav extends Component {

	handleLogout = () => {
		API.logoutUser().then(response => {
			console.log("Logged Out");
			this.props.logOutUser();
		}).catch(error => {
			console.log("Logout Error: ");
			console.log(error);
		})
	}
	
	render() {

		return (
			<nav className="navbar navbar-expand-lg">
				<a className="navbar-brand" href="/home">
				ALLEY ART</a>
				<div className="navWide">
					<div className="wideDiv">
					<Link to={"/"} onClick={this.handleLogout}>Logout</Link>
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
function mapStateToProps(state) {
	return {
		user: state,
	}
}
function mapDispatchToProps(dispatch) {
	return {
		logOutUser: () => { dispatch(logOutUser()) },
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);
