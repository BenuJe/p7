import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("../logements.json")
			.then((response) => response.json())
			.then((res) => {
				setData(res);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className="Gallery ">
			{data.map((donnee, index) => (
				<Card key={index} donnee={donnee} />
			))}
		</div>
	);
};

export default Gallery;
