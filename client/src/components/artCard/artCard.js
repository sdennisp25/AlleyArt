import React from "react";
import "./artCard.css";

const ArtCard = props => (
	<div  className="row display-cards">
	<div className="col">
    <div className="artDiv img-container">
      <img className="artImage" src={props.url} alt="" />
    </div>
		</div>
	</div>
	 );

export default ArtCard;
