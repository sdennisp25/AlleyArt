import React from "react";
import "./Modal.css";

export const UserTypeModal = ({ show, handleClose, handleUser, handleArtist }) => {
	return (
		<div className={`${show ? "modal display-block" : "modal display-none"} modal`}>
			<form className="center-align">
				<div className="modal-content">
					<button onClick={handleClose} className='modal-close right green-text'><i className='material-icons small'>X</i></button>
					<br /><br />
					<h5>SELECT YOUR PROFILE SETTINGS:</h5>
					<br />
					<button className="waves-effect grey darken-3 btn" onClick={handleUser}>USER</button>
					<p>To to find, view, and comment on amazing street art!</p>
					<p>OR</p>
					<button className="waves-effect grey darken-3 btn" onClick={handleArtist}>ARTIST</button>
					<p>With additional features to contribute your individual work(s).</p>
				</div>
			</form>
		</div>
	);
};


