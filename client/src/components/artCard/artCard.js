import React from "react";
import "./artCard.css";

const ArtCard = props => (
	<div className="row">
		<div className="col s12 m4 l3">

			<div className="card deep-orange darken-4">
				<div className="card-image">
					<img src={props.url} alt="" />
				</div>
				<div className="card-action">
					<span className="card-title center"><h5>{props.title}</h5></span>
					<p className="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eos ex necessitatibus nemo saepe distinctio, expedita dignissimos suscipit, quasi temporibus harum, architecto sit ad voluptatibus omnis quod aperiam. Consequuntur, vitae.</p>
					<button className="icons"><i className="material-icons">favorite</i></button>
					<button className="icons"><i className="material-icons">thumb_up</i></button>
					<button className="icons"><i className="material-icons">comment</i></button>
					{/* <i className="material-icons">favorite</i>
					<i className="material-icons">thumb_up</i>
					<i className="material-icons">comment</i> */}
				</div>
			</div>
		</div>
	</div>





);

export default ArtCard;
