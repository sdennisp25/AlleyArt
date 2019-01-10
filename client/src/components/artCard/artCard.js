import React from "react";
import "./artCard.css";

const ArtCard = props => (
	<div className="row">
		<div className="col s12 m6">
			<div className="card">
			<div className="card-image">
				<img src={props.url} alt="" />
				<span className="card-title">Title</span>
				<a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">Save</i></a>
				<div className="card-content">
					<p>{props.title}</p>
				</div>
			</div>
		</div>

			</div>
	</div>
);

export default ArtCard;
