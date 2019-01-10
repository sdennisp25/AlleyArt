import React from "react";
import "./artCard.css";

const ArtCard = props => (
	<div className="row">
		<div className="col s12 m7">
			<div className="card">
				<div className="card-image">
					<img src={props.url} alt=""/>
					<span className="card-title">{props.title}</span>
				</div>
				<div className="card-content">
					<p>I am an image of street art</p>
				</div>
				<div className="card-action">
					<button>Favorites</button>
				</div>
			</div>
		</div>
	</div>


);

export default ArtCard;
