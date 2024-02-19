import React from "react";
import { StyledParallax } from "./styled";
import Plx from "react-plx";

export default function Parallax({ children, id }) {
	const parallaxData = [
		{
			start: `.${id}`,
			duration: 300,
			properties: [
				{
					startValue: 0.25,
					endValue: 1,
					property: "scale",
				},
			],
		},
		{
			start: `.${id}`,
			duration: 500,
			properties: [
				{
					startValue: 0,
					endValue: 1,
					property: "opacity",
				},
			],
		},
	];

	return (
		<Plx className="parallax" parallaxData={parallaxData}>
			<StyledParallax className={id}>{children}</StyledParallax>
		</Plx>
	);
}
