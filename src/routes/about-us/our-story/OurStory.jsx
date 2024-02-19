import React from "react";
import { StyledOurStory } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import Grid from "../../../components/grid/Grid";
import { serverImportance } from "./importance";
import Card from "../../../components/card";
import ExplainationSectionLeft from "../../../components/explanationSectionLeft";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";

export default function OurStory() {
	return (
		<Page pageTitle="Our Story">
			<StyledOurStory>
				<Hero
					tagLine={
						<>
							We Are <span className="highlight">Right Solutions</span>
						</>
					}
					subTagLine={
						"With over 20 years experience working across industries such as legal, financial, architecture, education, manufacturing, amongst many others."
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					heading=<span className="highlight">This is Our Story</span>
					className={"px-18 ptp-2 pbm-1"}
					id={"story-intro"}
				/>
				<ExplainationSectionLeft
					id={"right-sol-age"}
					className={"mgtp-2"}
					backgroundImage={
						"https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<p className="ptp-2 content-explaination">
							<span className="highlight">Right Solutions</span> has been
							providing end-to-end high-quality managed infrastructure and
							security services to clients based both on cloud and on-premises
							solutions. Assisting both small and medium enterprises with
							solutions to enhance their digital effectiveness and
							competitiveness with a key focus on security.
						</p>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<ExplanationSectionRight
					id={"our-pride"}
					backgroundImage={
						"https://images.unsplash.com/photo-1591742708307-ce49d19450d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<p className="ptp-2 content-explaination">
							We pride ourselves in forming long term lasting relationships with
							clients by taking the time to understand their business before
							taking a dedicated and proactive approach to suggest and implement
							the right solution that meets their requirements.
						</p>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<ExplainationSectionLeft
					id={"prooudly-sa"}
					backgroundImage={
						"https://images.unsplash.com/photo-1599407384144-77deae48a47a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<p className="ptp-2 content-explaination">
							<span className="highlight">Right Solutions</span> is a proudly
							South African company that is responsibility centred. We are
							committed to providing a positive working environment by
							transformation through skills training, opportunity creation and
							the procurement of goods and services.
						</p>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<Grid columns={2} className={" mgtp-2"} id={"infrastructure-grid"}>
					{serverImportance.map((card) => (
						<Card {...card} key={card.id} />
					))}
				</Grid>
				<Divider />
			</StyledOurStory>
		</Page>
	);
}
