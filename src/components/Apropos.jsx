import React, { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const DetailLogement = () => {
	const [selectedFiabilite, setSelectedFiabilite] = useState(false);
	const [selectedRespect, setSelectedRespect] = useState(false);
	const [selectedService, setSelectedService] = useState(false);
	const [selectedSecurite, setSelectedSecurite] = useState(false);

	const toggleFiabilite = () => {
		if (selectedFiabilite === true) {
			return setSelectedFiabilite(false);
		}

		setSelectedFiabilite(true);
	};

	const toggleRespect = () => {
		if (selectedRespect === true) {
			return setSelectedRespect(false);
		}

		setSelectedRespect(true);
	};

	const toggleService = () => {
		if (selectedService === true) {
			return setSelectedService(false);
		}

		setSelectedService(true);
	};

	const toggleSecurite = () => {
		if (selectedSecurite === true) {
			return setSelectedSecurite(false);
		}

		setSelectedSecurite(true);
	};

	return (
		<div className="body">
			<div className="Apropos">
				<div className="WrapDiv" onClick={() => toggleFiabilite(true)}>
					<div className="bulle flexRow">
						<h2>Fiabilité</h2>
						<span>
							{selectedFiabilite === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div
						className={selectedFiabilite === true ? "content show" : "content"}
					>
						<div className="BulleDescriEquip">
							<p>
								Les annonces postées sur Kasa garantissent une fiabilité totale.
								Les photos sont conformes aux logements, et toutes les
								informations sont régulièrement vérifiées par nos équipes.
							</p>
						</div>
					</div>
				</div>
				<div className="WrapDiv" onClick={() => toggleRespect(true)}>
					<div className="bulle flexRow">
						<h2>Respect</h2>
						<span>
							{selectedRespect === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div
						className={selectedRespect === true ? "content show" : "content"}
					>
						<div className="BulleDescriEquip">
							<p>
								La bienveillance fait partie des valeurs fondatrices de Kasa.
								Tout comportement discriminatoire ou de perturbation du
								voisinage entraînera une exclusion de notre plateforme.
							</p>
						</div>
					</div>
				</div>
				<div className="WrapDiv" onClick={() => toggleService(true)}>
					<div className="bulle flexRow">
						<h2>Service</h2>
						<span>
							{selectedService === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div
						className={selectedService === true ? "content show" : "content"}
					>
						<div className="BulleDescriEquip">
							<p>
								Nos équipes se tiennent à votre disposition pour vous fournir
								une expérience parfaite. N'hésitez pas à nous contacter si vous
								avez la moindre question.
							</p>
						</div>
					</div>
				</div>
				<div className="WrapDiv" onClick={() => toggleSecurite(true)}>
					<div className="bulle flexRow">
						<h2>Responsabilité</h2>
						<span>
							{selectedSecurite === true ? (
								<FaArrowCircleUp className="icone" />
							) : (
								<FaArrowCircleDown className="icone" />
							)}
						</span>
					</div>
					<div
						className={selectedSecurite === true ? "content show" : "content"}
					>
						<div className="BulleDescriEquip">
							<p>
								La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
								que pour les voyageurs, chaque logement correspond aux critères
								de sécurité établis par nos services. En laissant une note aussi
								bien à l'hôte qu'au locataire, cela permet à nos équipes de
								vérifier que les standards sont bien respectés. Nous organisons
								également des ateliers sur la sécurité domestique pour nos
								hôtes.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailLogement;
