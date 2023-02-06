import React, { useState } from "react";

const Collapse = ({ titre, text }) => {
	const [selected, setSelected] = useState(false);

	const toggle = () => {
		if (selected === true) {
			return setSelected(false);
		}

		setSelected(true);
	};

	return (
		<div className="WrapDiv" onClick={() => toggle(true)}>
			<div className="bulle flexRow">
				<h2>{titre}</h2>
				<span>
					{selected === true ? (
						<img
							src="../ArrowDown.svg"
							alt="Le logo de l'entreprise KASA"
							className="arrow"
						/>
					) : (
						<img
							src="../ArrowUp.svg"
							alt="Le logo de l'entreprise KASA"
							className="arrow"
						/>
					)}
				</span>
			</div>
			<div className={selected === true ? "content show" : "content"}>
				<div className="BulleDescriEquip">
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default Collapse;
