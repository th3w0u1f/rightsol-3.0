import React from "react";
import { StyledHero } from "./styled";
import Button from "../button";
// import Slider from "react-slick";
import { SwiperSlide } from "swiper/react";
import CustomSwiper from "../customSwiper";

export default function Hero({ heroImages, tagLine, subTagLine }) {
	const scroll = () => {
		const element = document.querySelector("#contact-us");
		element.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<StyledHero>
			<div className="hero-container">
				<div className="hero-slides-container">
					{/* <Slider
						autoplay={true}
						autoplaySpeed={2000}
						infinite={true}
						speed={1000}
						loop={true}
						fade={true}
						arrows={false}
						dots={false}
						slidesToShow={1}
						slidesToScroll={1}
					>
						{heroImages?.map((heroImage, index) => (
							<div key={`${heroImage.alt}-${index}`} className={`hero-slide `}>
								<img src={heroImage.image} alt={heroImage.alt} />
							</div>
						))}
					</Slider> */}

					<CustomSwiper className="hero-swiper">
						{heroImages?.map((heroImage, index) => (
							<SwiperSlide
								key={`${heroImage.alt}-${index}`}
								className={`hero-slide `}
							>
								<img src={heroImage.image} alt={heroImage.alt} />
							</SwiperSlide>
						))}
					</CustomSwiper>
				</div>
				<div className="hero-content">
					<div className="hero-tag-line">{tagLine}</div>
					<div className="hero-tag-sub-line px-12">{subTagLine}</div>
					<Button
						className="hero-contact-button"
						text="Contact Us"
						buttonColor="button-blue"
						onClick={scroll}
					/>
				</div>
			</div>
		</StyledHero>
	);
}
