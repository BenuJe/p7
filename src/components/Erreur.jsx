import React from "react";
import { NavLink } from "react-router-dom";

const Erreur = () => {
	return (
		<div className="erreur">
			<h2>404</h2>
			<p>Oups! La page que vous demandez nexiste pas.</p>
			<NavLink to="/">Retourner sur la page d'accueil</NavLink>
		</div>
	);
};

export default Erreur;
