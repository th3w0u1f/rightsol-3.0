import React from "react";
import { StyledFirewallManagement } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import firewall1 from "./../../../assets/banners/firewall/firewall1.jpg";
import firewall2 from "./../../../assets/banners/firewall/firewall2.jpg";
import firewall3 from "./../../../assets/banners/firewall/firewall3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

const images = [
	{
		image: firewall1,
		alt: "firewall1",
	},
	{
		image: firewall2,
		alt: "firewall2",
	},
	{
		image: firewall3,
		alt: "firewall3",
	},
];

export default function FirewallManagement() {
	return (
		<StyledFirewallManagement>
			<Page pageTitle="Firewall Management">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We Will Protect Your <span className="highlight">Network</span>{" "}
							Using Our Cutting Edge Firewall Service
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Firewall Management service is designed to help organizations
							effectively manage their{" "}
							<span className="highlight">firewall systems</span> to protect
							their networks and data.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"firewall-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a team of experienced
							security professionals who will help you to{" "}
							<span className="highlight">configure</span>,{" "}
							<span className="highlight">maintain</span> and{" "}
							<span className="highlight">monitor </span> your firewall systems.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"firewall-service"}
				/>
				<InfoHeading
					heading={
						<span className="highlight">
							Our Firewall Management Service Includes
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
							With our Firewall Management service, you can have{" "}
							<span className="highlight">confidence</span> that your
							organization's <span className="highlight">network </span> and{" "}
							<span className="highlight">data</span> are being properly
							protected by your firewall systems.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledFirewallManagement>
	);
}
