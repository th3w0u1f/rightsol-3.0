import React from "react";
import { StyledStrategyAndConsulting } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";

export default function StrategyAndConsulting() {
	return (
		<Page pageTitle="Strategy and Consulting">
			<StyledStrategyAndConsulting>
				<Hero
					tagLine={
						<>
							Transforming Businesses To{" "}
							<span className="highlight">Thrive</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							In today's business environment information technology is a{" "}
							<span className="highlight">critical function</span>. IT is no
							longer a supporting function but has become an enabler for
							business.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"strategy-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							Our consultants have experience in both business and technology
							and can help deliver a strategic IT roadmap.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"consulting-and-strategy"}
				/>
				<ExplanationSectionRight
					id={"modern-benefits"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Growing Business</h3>
							<p className="ptp-2 content-explaination">
								As businesses reinvent themselves through digital transformation
								it has become more important than ever that business leaders
								stop managing IT as a technical function and align it with the
								company strategy, if not it could affect the long-term growth of
								the business or result in sudden changes in business direction.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					subHeading={
						<>
							Utilize a smart and modern strategy to{" "}
							<span className="highlight">optimize</span> your IT infrastructure
							and operations.
						</>
					}
					id={"endpoint-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledStrategyAndConsulting>
		</Page>
	);
}
