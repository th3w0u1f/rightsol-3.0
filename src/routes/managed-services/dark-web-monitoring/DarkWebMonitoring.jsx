import React from "react";
import { StyledDarkWebMonitoring } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import darkweb1 from "./../../../assets/banners/darkweb/darkweb1.jpg";
import darkweb2 from "./../../../assets/banners/darkweb/darkweb2.jpg";
import darkweb3 from "./../../../assets/banners/darkweb/darkweb3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

const images = [
	{
		image: darkweb1,
		alt: "darkweb1",
	},
	{
		image: darkweb2,
		alt: "darkweb2",
	},
	{
		image: darkweb3,
		alt: "darkweb3",
	},
];

export default function DarkWebMonitoring() {
	return (
		<StyledDarkWebMonitoring>
			<Page pageTitle="Dark Web Monitoring">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We Monitor The <span className="highlight">Dark Web</span> So You
							Don't Have To
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Dark Web Monitoring service is designed to help organizations
							protect their{" "}
							<span className="highlight-red">sensitive data</span> and{" "}
							<span className="highlight">asset</span> from exposure on the{" "}
							<span className="highlight-red">dark web</span>.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"dark-web-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a range of advanced
							security features that will help to{" "}
							<span className="highlight">block spam</span> and{" "}
							<span className="highlight">phishing attacks</span> phishing
							simulations for your organization.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"dark-web-service"}
				/>
				<InfoHeading
					heading={
						<span className="highlight">
							Our Dark Web Monitoring Service Includes
						</span>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"dark-web-offering"}
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
							With our Dark Web Monitoring service, you can have{" "}
							<span className="highlight">peace of mind</span> knowing that your
							organization's{" "}
							<span className="highlight-red">sensitive data</span> and{" "}
							<span className="highlight-red">assets</span> are being
							continuously monitored and protected.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledDarkWebMonitoring>
	);
}
