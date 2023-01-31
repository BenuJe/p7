import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Section1 from "../components/Section1";

const Home = () => {
	return (
		<div>
			<Header />
			{/* préciser le titre et le background a monter */}
			<Section1
				background={"../BackgroundAccueil.png"}
				titre={"Chez vous, partout et ailleurs"}
			/>
			<Gallery />
			<Footer />
		</div>
	);
};

export default Home;
