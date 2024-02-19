import React from "react";
import { StyledCyberSecurityAwarenessTraining } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import training1 from "./../../../assets/banners/training/training1.jpg";
import training2 from "./../../../assets/banners/training/training2.jpg";
import training3 from "./../../../assets/banners/training/training3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

const images = [
	{
		image: training1,
		alt: "training1",
	},
	{
		image: training2,
		alt: "training2",
	},
	{
		image: training3,
		alt: "training3",
	},
];

export default function CyberSecurityAwarenessTraining() {
	return (
		<StyledCyberSecurityAwarenessTraining>
			<Page pageTitle="Cyber Security Awareness Training">
				<Hero
					heroImages={images}
					tagLine={
						<>
							Your Employees, <span className="highlight">Trained </span>To Stay
							Safe Online
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Security Awareness Training service is designed to help
							organizations educate their employees about{" "}
							<span className="highlight-red">cyber threats</span> and how to{" "}
							<span className="highlight">protect</span> themselves and the
							organization from them.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"training-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a range of{" "}
							<span className="highlight">training materials</span> and{" "}
							<span className="highlight">resources</span> that will help you to
							raise awareness of cyber security risks and best practices.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"training-materials"}
				/>
				<InfoHeading
					heading={
						<span className="highlight">
							Our Security Awareness Training Service Includes
						</span>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"vulnerability-offering"}
				/>
				<SlickSlider
					slidesToShow={2}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"voice-slider"}
					direction={true}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<InfoHeading
					id={"training-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our Security Awareness Training service, you can help your
							team stay <span className="highlight">safe</span> and{" "}
							<span className="highlight">secure</span> online and{" "}
							<span className="highlight">protect</span> your organization from
							cyber threats.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledCyberSecurityAwarenessTraining>
	);
}
