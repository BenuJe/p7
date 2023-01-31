import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header flexRow">
			<div className="Kasa">
				<img src="../LOGO.png" alt="Le logo de l'entreprise KASA" />
			</div>
			<div className="Hlink flexRow">
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					Accueil
				</NavLink>
				<NavLink
					to="/about"
					className={(nav) => (nav.isActive ? "nav-active" : "")}
				>
					A propos
				</NavLink>
			</div>
		</div>
	);
};

export default Header;
