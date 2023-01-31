import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailLogement from "./DetailLogement";
import ImageSlider from "./ImageSlider";
import Erreur from "./Erreur";

const FindOne = () => {
	let location = useParams();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch("../logements.json")
			.then((response) => response.json())
			.then((res) => {
				setData(res.filter((donnee) => donnee.id === location.numero));
				setLoading(true);
			})
			.catch((error) => {
				return <Erreur />;
			});
	}, [location]);

	if (loading === false) {
		return <div>Chargement en cours</div>;
	} else {
		if (!data.length) {
			return <Erreur />;
		}
	}
	return (
		<div>
			<div className="Carrousel">
				{data.map((donnee) => (
					<ImageSlider donnee={donnee} key={donnee.id} />
				))}
			</div>

			<div className="Content">
				{data.map((donnee) => (
					<DetailLogement donnee={donnee} key={donnee.id} />
				))}
			</div>
		</div>
	);
};

export default FindOne;
