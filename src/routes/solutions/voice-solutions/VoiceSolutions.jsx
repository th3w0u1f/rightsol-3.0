import React from "react";
import { StyledVoiceSolutions } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import { services } from "./services";
import Card from "../../../components/card";

import voice1 from "./../../../assets/banners/voice/voice1.jpg";
import voice2 from "./../../../assets/banners/voice/voice2.jpg";
import voice3 from "./../../../assets/banners/voice/voice3.jpg";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";

const images = [
	{
		image: voice1,
		alt: "voice1",
	},
	{
		image: voice2,
		alt: "voice2",
	},
	{
		image: voice3,
		alt: "voice3",
	},
];

export default function VoiceSolutions() {
	return (
		<StyledVoiceSolutions>
			<Page pageTitle="Voice Solutions">
				<Hero
					heroImages={images}
					tagLine={
						<>
							Imagine Being Able To Take Your{" "}
							<span className="highlight"> Business Phone System</span> On The
							Go
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							We assist companies with{" "}
							<span className="highlight">on-premises</span> and{" "}
							<span className="highlight"> cloud-based VOIP</span> (Voice Over
							Internet Protocol) solutions.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"voice-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							Improved customer services, work from anywhere, better
							manageability, and cost savings are a few drivers for many of our
							customers who opt for our solutions.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"voice-improved"}
				/>
				<ExplanationSectionRight
					id={"modern-benefits"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Our VOIP Features</h3>
							<p className="ptp-2 content-explaination">
								We offer features like:
							</p>
							<ul className="ptp-1 voice-list content-explaination">
								<li className="voice-item">Voicemail</li>
								<li className="voice-item">Conference Calling</li>
								<li className="voice-item">Call Forwarding</li>
							</ul>
							<p>
								for a much lower cost than traditional phone systems without
								sacrificing any traditional features.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					heading={<>Our VOIP Solution Includes</>}
					className={"px-18 ptp-2 pbm-1"}
					id={"voice-solution"}
				/>
				<SlickSlider
					slidesToShow={2}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"voice-slider"}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<InfoHeading
					id={"voice-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our VOIP Solution, you can have{" "}
							<span className="highlight">confidence</span> that your
							organization's business communications are{" "}
							<span className="highlight"> reliable</span>,{" "}
							<span className="highlight"> flexible</span> and{" "}
							<span className="highlight"> cost-effective</span>.
						</>
					}
					headingOrder={0}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledVoiceSolutions>
	);
}
