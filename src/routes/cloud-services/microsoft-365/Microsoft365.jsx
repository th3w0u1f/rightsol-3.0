import React from "react";
import { StyledMicrosoft365 } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplainationSectionLeft from "../../../components/explanationSectionLeft";
import Card from "../../../components/card";
import { services } from "./services";
import SlickSlider from "../../../components/slickSlider/SlickSlider";

export default function Microsoft365() {
	return (
		<Page pageTitle="Microsoft 365">
			<StyledMicrosoft365>
				<Hero
					tagLine={
						<>
							Your Employees Will Collaborate Unlike{" "}
							<span className="highlight">Ever</span> Before With Microsoft 365
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Microsoft 365 service is designed to help organizations
							leverage the power of Microsoft's cloud-based{" "}
							<span className="highlight">productivity</span> and{" "}
							<span className="highlight">collaboration</span> tools to support
							their business needs.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"microsoft-365-intro"}
				/>
				<Divider />
				<InfoHeading
					subHeading={
						<>
							With this service, you'll have access to a range of Microsoft 365
							tools and technologies, as well as a team of experienced IT
							professionals who will help you to{" "}
							<span className="highlight">design</span>,{" "}
							<span className="highlight">implement</span> and{" "}
							<span className="highlight">manage</span> your Microsoft 365
							strategy.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"microsoft-365-features"}
				/>
				<ExplainationSectionLeft
					id={"microsoft-365-offering"}
					className={"mgtp-2"}
					backgroundImage={
						"https://images.unsplash.com/photo-1538370621607-4919ce7889b3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Our Microsoft 365 Service Includes:</h3>
							<p className="ptp-2 content-explaination">
								We'll provide you with access to a range of Microsoft 365 tools
								and technologies, such as
							</p>
							<ul className="ptp-1 microsoft-list content-explaination">
								<li className="microsoft-item">Microsoft Office 365</li>
								<li className="microsoft-item">Microsoft Teams</li>
								<li className="microsoft-item">Microsoft Exchange</li>
							</ul>
							<p className="ptp-2 content-explaination">
								to help you support your business needs.
							</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<InfoHeading
					heading={<span className="highlight">What we offer you</span>}
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
							With our Microsoft 365 service, you can have{" "}
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
			</StyledMicrosoft365>
		</Page>
	);
}
