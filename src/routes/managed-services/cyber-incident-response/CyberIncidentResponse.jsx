import React from "react";
import { StyledCyberIncidentResponse } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import cyber1 from "./../../../assets/banners/cyber/cyber1.jpg";
import cyber2 from "./../../../assets/banners/cyber/cyber2.jpg";
import cyber3 from "./../../../assets/banners/cyber/cyber3.jpg";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";

const images = [
	{
		image: cyber1,
		alt: "cyber1",
	},
	{
		image: cyber2,
		alt: "cyber2",
	},
	{
		image: cyber3,
		alt: "cyber3",
	},
];

export default function CyberIncidentResponse() {
	return (
		<StyledCyberIncidentResponse>
			<Page pageTitle="Cyber Incident Response">
				<Hero
					heroImages={images}
					tagLine={
						<>
							Your Trusted Partner, <span className="highlight">We</span> Are
							There For You When Cyber Incidents Strikes.
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							In life, bad things happen, but don’t let a{" "}
							<span className="highlight">security breach</span> ruin your
							company.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"cyber-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							Right Solutions offers{" "}
							<span className="highlight">incident response</span> services that
							provide companies with solutions that can{" "}
							<span className="highlight">thwart attacks</span>,{" "}
							<span className="highlight">remove sources of attack</span>, and{" "}
							<span className="highlight">minimize the damage</span> that can be
							done to your business and reputation as a result of these
							breaches.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"cyber-additional"}
				/>
				<ExplanationSectionRight
					id={"cyber-offering"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1586470202424-a6f766679b45?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">
								Our Incident Response Service Includes:
							</h3>
							<ul className="ptp-1 incident-list content-explaination">
								<li className="incident-item">
									Immediate Notification And Assessment Of The Incident
								</li>
								<li className="incident-item">
									Identification And Containment Of The Problem
								</li>
								<li className="incident-item">Analysis Of The Root Cause</li>
								<li className="incident-item">
									Determination Of Appropriate Remediation Steps
								</li>
								<li className="incident-item">
									Coordination Of The Response With Relevant Parties
								</li>
								<li className="incident-item">
									Restoration Of Normal Operations
								</li>
								<li className="incident-item">
									Post-Incident Review And Improvement Recommendations
								</li>
							</ul>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					id={"cyber-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our Incident Response service, you can count on a{" "}
							<span className="highlight">fast </span> and{" "}
							<span className="highlight">effective</span> response to any
							security incident, helping to{" "}
							<span className="highlight">minimize the impact</span> on your
							organization and get you back to business as quickly as possible.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledCyberIncidentResponse>
	);
}
