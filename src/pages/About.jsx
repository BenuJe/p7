import React from "react";
import Apropos from "../components/Apropos";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Section1 from "../components/Section1";

const About = () => {
	return (
		<div>
			<Header />
			{/* préciser le titre et le background a monter */}
			<Section1 background={"../BackgroundApropos.png"} titre={""} />
			<Apropos />
			<Footer />
		</div>
	);
};

export default About;
