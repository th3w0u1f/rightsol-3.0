import React from "react";
import { StyledCustomSwiper } from "./styled";
import { Swiper } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

export default function CustomSwiper({ children, className }) {
	return (
		<StyledCustomSwiper>
			<Swiper
				autoplay={{ delay: 3000 }}
				loop={true}
				speed={1500}
				effect={"fade"}
				modules={[EffectFade, Autoplay]}
				className={className}
				pagination={{
					clickable: true,
				}}
				slidesPerView={1}
			>
				{children}
			</Swiper>
		</StyledCustomSwiper>
	);
}
