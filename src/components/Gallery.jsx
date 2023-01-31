import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Gallery = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios
			.get("./logements.json")
			.then((res) => setData(res.data))
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
