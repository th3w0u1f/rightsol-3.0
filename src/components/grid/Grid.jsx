import React, { useState, useEffect } from "react";
import { StyledGrid } from "./styled";
import Parallax from "../parallax/Parallax";

export default function Grid({ columns, children, id, className }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWindowWidth);

		return () => window.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth]);

	return (
		<Parallax id={id}>
			<StyledGrid columns={columns} className={`px-12 ${className}`}>
				{children}
			</StyledGrid>
		</Parallax>
	);
}
