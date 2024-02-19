import React from "react";
import { StyledThreatHunting } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import threat1 from "./../../../assets/banners/threat/threat1.jpg";
import threat2 from "./../../../assets/banners/threat/threat2.jpg";
import threat3 from "./../../../assets/banners/threat/threat3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

const images = [
	{
		image: threat1,
		alt: "threat1",
	},
	{
		image: threat2,
		alt: "threat2",
	},
	{
		image: threat3,
		alt: "threat3",
	},
];

export default function ThreatHunting() {
	return (
		<StyledThreatHunting>
			<Page pageTitle="Threat Hunting">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We Will Find <span className="highlight">Threats</span> Before You
							Can Say 'Oops!'
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Threat Hunting service is designed to help organizations{" "}
							<span className="highlight">proactively identify</span> and
							<span className="highlight">address</span> potential
							<span className="highlight-red">threats</span> to their systems
							and data.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"threat-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a team of experienced
							security professionals who will use a variety of tools and
							techniques to <span className="highlight">search for</span> and{" "}
							<span className="highlight">investigate </span> potential threats
							that may not have been detected by traditional security systems.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"threat-service"}
				/>
				<InfoHeading
					heading={
						<span className="highlight">
							Our Threat Hunting Service Includes
						</span>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"firewall-offering"}
				/>
				<SlickSlider
					slidesToShow={2}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"threat-slider"}
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
							With our Threat Hunting service, you can have{" "}
							<span className="highlight">confidence</span> that your
							organization is proactively{" "}
							<span className="highlight">protecting</span> itself against
							potential <span className="highlight-red">threats </span> to its
							systems and data.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledThreatHunting>
	);
}
