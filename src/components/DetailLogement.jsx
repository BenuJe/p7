import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const DetailLogement = ({ donnee }) => {
	const [selected, setSelectedEquip] = useState(false);

	const toggleEquip = () => {
		if (selected === true) {
			return setSelectedEquip(false);
		}

		setSelectedEquip(true);
	};

	const [selectedDes, setSelectedDes] = useState(false);

	const toggleDes = () => {
		if (selectedDes === true) {
			return setSelectedDes(false);
		}

		setSelectedDes(true);
	};

	return (
		<div className="body">
			<div className="container flexRow">
				<div className="premierBloc flexCol">
					<div className="title">
						<h1>{donnee.title}</h1>
						<p>{donnee.location}</p>
					</div>
					<div className="tags">
						{donnee.tags.map((tags, index) => (
							<p key={index}>{tags}</p>
						))}
					</div>
				</div>

				<div className="deuxiemeBloc flexCol">
					<div className="host">
						<p>{donnee.host.name}</p>
						<img
							src={donnee.host.picture}
							alt={"Photo de " + donnee.host.name}
						/>
					</div>

					<div className="rating">
						<AiFillStar className={1 > donnee.rating ? "togrey" : "topink"} />
						<AiFillStar className={2 > donnee.rating ? "togrey" : "topink"} />
						<AiFillStar className={3 > donnee.rating ? "togrey" : "topink"} />
						<AiFillStar className={4 > donnee.rating ? "togrey" : "topink"} />
						<AiFillStar className={5 > donnee.rating ? "togrey" : "topink"} />
					</div>
				</div>
			</div>
			<div className="DescriEquip flexRow">
				<div className="WrapDiv Descri" onClick={() => toggleDes(true)}>
					<div className="containerdefil flexRow">
						<h2>Description</h2>
						<span>
							{selectedDes === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div className={selectedDes === true ? "content show" : "content"}>
						<div className="BulleDescriEquip">
							<p>{donnee.description}</p>
						</div>
					</div>
				</div>
				<div className="WrapDiv Equi" onClick={() => toggleEquip(true)}>
					<div className="containerdefil flexRow">
						<h2>Equipements</h2>
						<span>
							{selected === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div className={selected === true ? "content show" : "content"}>
						<div className="BulleDescriEquip">
							{donnee.equipments.map((equipement, index) => (
								<p key={index}> {equipement}</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailLogement;
