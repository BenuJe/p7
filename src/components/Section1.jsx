import React from "react";

const Section1 = ({ titre, background }) => {
	return (
		<div className="Section1">
			<div className="SectionTitre">
				<div
					className="SectionBackground"
					style={{ backgroundImage: `url("${background}")` }}
				></div>

				<h1>{titre}</h1>
			</div>
		</div>
	);
};

export default Section1;
