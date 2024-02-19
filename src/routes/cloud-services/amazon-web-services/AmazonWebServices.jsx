import React from "react";
import { StyledAmazonWebServices } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplainationSectionLeft from "../../../components/explanationSectionLeft";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";
import { services } from "./services";

export default function AmazonWebServices() {
	return (
		<Page pageTitle="Amazon Web Services">
			<StyledAmazonWebServices>
				<Hero
					tagLine={
						<>
							Let Us Transform Your Business Through The Power Of{" "}
							<span className="highlight">AWS</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Amazon Web Services (AWS) service is designed to help
							organizations leverage the power of Amazon's cloud platform to{" "}
							<span className="highlight">support</span> their business needs.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"aws-intro"}
				/>
				<Divider />
				<InfoHeading
					subHeading={
						<>
							With this service, you'll have access to a range of AWS{" "}
							<span className="highlight">tools</span> and{" "}
							<span className="highlight">technologies</span>, as well as a team
							of experienced IT professionals who will help you to
							<span className="highlight">design</span>,{" "}
							<span className="highlight">implement</span> and{" "}
							<span className="highlight">manage</span> your AWS strategy.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"aws-features"}
				/>
				<ExplainationSectionLeft
					id={"aws-offering"}
					className={"mgtp-2"}
					backgroundImage={
						"https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=2096&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">What Our AWS Service Includes</h3>
							<p className="ptp-2 content-explaination">
								We'll provide you with access to a range of AWS tools and
								technologies, such as:
							</p>
							<ul className="ptp-1 aws-list content-explaination">
								<li className="aws-item">Virtual Machinese</li>
								<li className="aws-item">Storage</li>
								<li className="aws-item">Networking</li>
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
					heading={<span className="highlight">What We Offer You</span>}
					className={"px-18 ptp-2 pbm-1"}
					id={"aws-offering"}
				/>
				<SlickSlider
					slidesToShow={2}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"aws-slider"}
					direction={true}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<InfoHeading
					subHeading={
						<>
							With our AWS service, you can have{" "}
							<span className="highlight">confidence</span> that your
							organization is leveraging the{" "}
							<span className="highlight">full potential</span> of the cloud to
							support its business needs.
						</>
					}
					id={"aws-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledAmazonWebServices>
		</Page>
	);
}
