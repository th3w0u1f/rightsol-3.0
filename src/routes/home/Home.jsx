import React, { useEffect, useState } from "react";
import { StyledHome } from "./styled";
import Page from "../../components/page";
import Hero from "../../components/hero";
import InfoHeading from "../../components/infoHeading";
import Divider from "../../components/divider";
import { services } from "./services";
import Card from "../../components/card";

import hero1 from "./../../assets/banners/hero/hero-1.jpg";
import hero2 from "./../../assets/banners/hero/hero-2.jpg";
import hero3 from "./../../assets/banners/hero/hero-3.jpg";
import SlickSlider from "../../components/slickSlider/SlickSlider";
import Grid from "../../components/grid/Grid";
import Counter from "../../components/counter/Counter";
import { counters } from "./counters";

const images = [
	{
		image: hero1,
		alt: "hero1",
	},
	{
		image: hero2,
		alt: "hero2",
	},
	{
		image: hero3,
		alt: "hero3",
	},
];

export default function Home() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", updateWindowWidth);
		return () => window.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth]);

	return (
		<StyledHome>
			<Page pageTitle="Home">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We’re The <span className="highlight">Right Solution</span> For
							You
						</>
					}
					subTagLine={
						"Your one stop shop for modern and intelligent solutions!"
					}
				/>
				{/* <InfoHeading
					subHeading={
						"In today’s digital environment, your IT infrastructure dictates how well your businesses performs."
					}
					subHeadingOrder={0}
					heading={
						"Right Solutions helps businesses prepare for future innovations by providing and efficiently managing your business-critical IT infrastructure allowing you to focus on your core business."
					}
					headingOrder={1}
					className={"px-12 ptp-2 pbm-1"}
					id={"first-info-heading"}
				/>
				<Divider /> */}
				<InfoHeading
					heading={"We Have A Diverse Presence Across Various Industries"}
					id={"our-products "}
					className={"ptp-2 pbm-1"}
				/>
				<SlickSlider
					slidesToShow={windowWidth <= 960 ? 1 : 3}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"offering-slider"}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<Divider />
				<InfoHeading
					heading={"We serve many users and clients"}
					id={"users-clients"}
					className={"ptp-1 pbm-1"}
					subHeading={"Here is a brief summary"}
					headingOrder={0}
					subHeadingOrder={1}
				/>

				<Grid columns={3} id="counter-grid" className={"px-12 ptp-2 pbm-1"}>
					{counters.map((counter) => (
						<Counter key={counter.title} {...counter} />
					))}
				</Grid>
				{/* <Divider /> */}
				{/* <ExplanationSection
					id={"detailed-image"}
					image1={assets[0].src}
					image1Alt={"image1"}
					image2={assets[1].src}
					image2Alt={"image2"}
					image3={assets[2].src}
					image3Alt={"image3"}
					content={
						<div className="content-container">
							<h3 className="heading">We are here to help you</h3>
							<h5 className="sub-heading">We are here to help you</h5>
							<div className="content">
								<ul className="list">
									<li className="list-item">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li className="list-item">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li className="list-item">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li className="list-item">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
									<li className="list-item">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
									</li>
								</ul>
							</div>
							<p className="paragraph">and more.</p>
						</div>
					}
				/> */}
				<Divider />
			</Page>
		</StyledHome>
	);
}
