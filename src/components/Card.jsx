import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ donnee }) => {
	return (
		<div className="boiteGallery">
			<NavLink to={"fiche/" + donnee.id} search={donnee.id}>
				<div className="textGallery">
					<p>{donnee.title}</p>
				</div>
				<div className="backgroundGallery">
					<img src={donnee.cover} alt="" />
				</div>
			</NavLink>
		</div>
	);
};

export default Card;
