import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ donnee }) => {
	const [current, setCurrent] = useState(0);
	const length = donnee.pictures.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(donnee.pictures) || donnee.pictures.length <= 0) {
		return null;
	}

	return (
		<div className="slider">
			<div>
				<p className="compteur">
					{current + 1} / {length}
				</p>
			</div>
			<IoIosArrowBack className="left-arrow fleche" onClick={prevSlide} />
			<IoIosArrowForward className="right-arrow fleche" onClick={nextSlide} />
			{donnee.pictures.map((image, index) => {
				return (
					<div
						className={index === current ? "slide active" : "slide"}
						key={index}
					>
						{index === current && <img src={image} alt="" className="image" />}
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;
