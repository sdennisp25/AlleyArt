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
			<nav className="navbar">
				<a className="navbar-brand" href="/home">
				ALLEY ART</a>
				<div className="navWide">
					<div className="wideDiv">
					<Link to={"/home"}>Find Art</Link>
					<Link to={"/profile"}>Favorites</Link>
					{this.props.user.isArtist === true && <Link to={"/image"}>Upload New Art</Link>}
					<Link to={"/"} onClick={this.handleLogout}>Logout</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}></i>
                    <div className="narrowLinks">
                        <Link to={"/home"} onClick={this.burgerToggle}><i className="fas fa-search"></i></Link>
                        	<Link to={"/profile"} onClick={this.burgerToggle}><i className="fas fa-heart"></i></Link>
                        {this.props.user.isArtist === true && <a href="/image">Upload New Art</a>}
                        
						<span class="hover-button--off"></span>
						<a href="/" onClick={this.burgerToggle}><i className="fas fa-sign-out-alt"></i></a>
						<span class='hover-button--on'>Sign out</span>
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
