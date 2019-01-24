import React from "react";
import "./Modal.css";

export const UserTypeModal = ({ show, handleClose, handleUser, handleArtist }) => {
	return (
		<div className={`${show ? "modal display-block" : "modal display-none"} modal`}>
			<form>
				<button onClick={handleClose} className='modal-close right green-text'><i className='material-icons small'>X</i></button>
				<br></br>
				<div className="center-align">
					<p className="select-title">SELECT YOUR PROFILE</p>
					<button className="waves-effect grey darken-3 btn center-align" onClick={handleUser}>USER</button>
					<p className="select">To to find, view, and favorite on amazing street art!</p>
					<br></br>
					<button className="waves-effect grey darken-3 btn center-align" onClick={handleArtist}>ARTIST</button>
					<p className="select">With additional features to contribute your individual work(s).</p>
				</div>
			</form>
		</div>
	);
};


