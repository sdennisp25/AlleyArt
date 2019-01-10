import React from "react";
import "./artCard.css";

const ArtCard = props => (
<div className="row">
	<div className="col s12 m4 l3">
		<div className="card teal darken-3">
		
				<div className="card-image">
					<img src={props.url} alt=""/>
				</div>
				{/* <div className="card-content">
				</div> */}
				<div className="card-action">
					<span className="card-title"><h5>{props.title}</h5></span>
					<p>I am an image of street art</p>
					<button>Favorites</button>
				</div>
			</div>
		</div>
	</div>
	




);

export default ArtCard;
