import React from "react";
import { StyledSwiperSlide } from "./styled";
import { Swiper } from "swiper/react";

export default function Slide({ className, children }) {
	return (
		<StyledSwiperSlide>
			<Swiper
				spaceBetween={50}
				slidesPerView={1}
				autoplay
				speed={1000}
				effect="fade"
				loop={true}
				className={className}
			>
				{children}
			</Swiper>
		</StyledSwiperSlide>
	);
}
