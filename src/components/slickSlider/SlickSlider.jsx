import React, { useEffect, useState } from "react";
import { StyledSlickSlider } from "./styled";
import Slider from "react-slick";
import Parallax from "../parallax/Parallax";

export default function SlickSlider({
	slidesToShow,
	slidesToScroll,
	children,
	fade,
	dots,
	className,
	pauseOnHover,
	id,
	direction,
}) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWindowWidth);

		return () => window.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth]);

	/**
	 * @method calculateSlidesToShow
	 * @returns {number} - Number of slides to show
	 */
	const calculateSlidesToShow = () => {
		if (windowWidth < 426) {
			return 1;
		} else if (windowWidth < 769) {
			return 1;
		} else if (windowWidth < 1025) {
			return 1;
		} else if (windowWidth < 1221) {
			return 2;
		} else if (windowWidth > 1440) {
			return slidesToShow;
		} else {
			return slidesToShow;
		}
	};

	return (
		<Parallax id={id}>
			<StyledSlickSlider>
				<Slider
					autoplay={true}
					autoplaySpeed={3000}
					infinite={true}
					speed={1500}
					fade={fade}
					arrows={false}
					dots={dots}
					pauseOnHover={pauseOnHover}
					slidesToShow={calculateSlidesToShow()}
					slidesToScroll={slidesToScroll}
					className={className}
					rtl={direction ? true : false}
				>
					{children}
				</Slider>
			</StyledSlickSlider>
		</Parallax>
	);
}
