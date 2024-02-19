import React from "react";
import { StyledMicrosoftAzure } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

export default function MicrosoftAzure() {
	return (
		<Page pageTitle="Microsoft Azure">
			<StyledMicrosoftAzure>
				<Hero
					tagLine={
						<>
							The Full Potential Of The Cloud{" "}
							<span className="highlight">Unleashed</span> With Microsoft Azure
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Cloud service is designed to help organizations leverage the{" "}
							<span className="highlight">power</span> and{" "}
							<span className="highlight">scalability</span> of the cloud to
							support their business needs.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"azure-intro"}
				/>
				<Divider />
				<InfoHeading
					subHeading={
						<>
							With this service, you'll have access to a range of cloud-based
							tools and technologies, as well as a team of experienced IT
							professionals who will help you to{" "}
							<span className="highlight">design</span>,{" "}
							<span className="highlight">implement</span> and{" "}
							<span className="highlight">manage</span> your cloud strategy.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"azure-features"}
				/>
				<ExplanationSectionRight
					id={"azure-offering"}
					className={"mgtp-2"}
					backgroundImage={
						"https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">
								Our Range Of Cloud-Based Tools And Technologies
							</h3>
							<p className="ptp-2 content-explaination">
								We'll provide you with access to a range of cloud-based tools
								and technologies, such as:
							</p>
							<ul className="ptp-1 azure-list content-explaination">
								<li className="azure-item">Microsoft Azure</li>
								<li className="azure-item">Microsoft 365</li>
								<li className="azure-item">Amazon Web Services</li>
								<li className="azure-item">Google Cloud Platform</li>
							</ul>
							<p className="ptp-2 content-explaination">
								to help you support your business needs.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					heading={<span className="highlight">What We Offer You</span>}
					className={"px-18 ptp-2 pbm-1"}
					id={"azure-offering"}
				/>
				<SlickSlider
					slidesToShow={2}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"microsoft-azure-slider"}
					direction={true}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<InfoHeading
					subHeading={
						<>
							With our Cloud service, you can have{" "}
							<span className="highlight">confidence</span> that your
							organization is leveraging the{" "}
							<span className="highlight">full potential</span> of the cloud to
							support its business needs.
						</>
					}
					id={"microsoft-365-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledMicrosoftAzure>
		</Page>
	);
}
