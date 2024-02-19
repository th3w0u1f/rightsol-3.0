import React from "react";
import { StyledPhishingSimulation } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import phishing1 from "./../../../assets/banners/phishing/phishing1.jpg";
import phishing2 from "./../../../assets/banners/phishing/phishing2.jpg";
import phishing3 from "./../../../assets/banners/phishing/phishing3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

const images = [
	{
		image: phishing1,
		alt: "phishing1",
	},
	{
		image: phishing2,
		alt: "phishing2",
	},
	{
		image: phishing3,
		alt: "phishing3",
	},
];

export default function PhishingSimulation() {
	return (
		<StyledPhishingSimulation>
			<Page pageTitle="Phishing Simulation">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We Don't Take Your Users On A{" "}
							<span className="highlight">Phishing Trip</span>
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Phishing Simulation service is designed to help organizations
							assess their employees'{" "}
							<span className="highlight">susceptibility</span> to{" "}
							<span className="highlight-red">phishing attacks</span> and{" "}
							<span className="highlight">train</span> them to recognize and
							prevent these types of attacks.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"phishing-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a team of experienced
							security professionals who will{" "}
							<span className="highlight">design</span> and{" "}
							<span className="highlight">execute</span> phishing simulations
							for your organization.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"phishing-simulations"}
				/>
				<InfoHeading
					heading={
						<span className="highlight">
							Our Phishing Simulation Service Includes
						</span>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"phishing-offering"}
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
					id={"phishing-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our Phishing Simulation service, you can have{" "}
							<span className="highlight">confidence </span> that your team is
							prepared to <span className="highlight">recognize</span> and{" "}
							<span className="highlight">prevent</span> phishing attacks, and
							that your organization is better protected from these types of
							threats.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledPhishingSimulation>
	);
}
