import React from "react";
import { StyledManagedSiemAndSoc } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import siem1 from "./../../../assets/banners/siem/siem1.jpg";
import siem2 from "./../../../assets/banners/siem/siem2.jpg";
import siem3 from "./../../../assets/banners/siem/siem3.jpg";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";
import ExplanationSectionLeft from "../../../components/explanationSectionLeft";

const images = [
	{
		image: siem1,
		alt: "siem1",
	},
	{
		image: siem2,
		alt: "siem2",
	},
	{
		image: siem3,
		alt: "siem3",
	},
];

export default function ManagedSiemAndSoc() {
	return (
		<StyledManagedSiemAndSoc>
			<Page pageTitle="Managed SIEM and SOC">
				<Hero
					heroImages={images}
					tagLine={
						<>
							Security <span className="highlight">Simplified</span> With Our
							Managed SIEM And SOC Service
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Managed SIEM and SOC service is designed to provide your
							organization with a{" "}
							<span className="highlight">comprehensive security solution</span>
							.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"managed-siem-and-soc-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With our service, you'll have access to a team of{" "}
							<span className="highlight">experienced security analysts</span>{" "}
							analysts who will monitor your systems around the clock, looking
							for potential <span className="highlight-red">threats</span>, and{" "}
							<span className="highlight-red">vulnerablilities</span>.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"experienced-security"}
				/>
				<ExplanationSectionLeft
					id={"state-of-the-art"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<p className="ptp-2 content-explaination">
								Using state-of-the-art technology, our analysts will analyze
								logs and events from your network, servers, and applications to
								identify security breaches, cyber attacks, and other malicious
								activity.
							</p>
							<p className="ptp-2 content-explaination">
								When a potential threat is detected, our team will immediately
								investigate and take the necessary steps to protect your systems
								and data.
							</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<ExplanationSectionRight
					id={"additionally"}
					className={""}
					backgroundImage={
						"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<p className="ptp-2 content-explaination ">
								In addition to real-time monitoring and response, our service
								also includes regular reporting, vulnerability assessments, and
								security assessments to ensure that your security posture is
								always up to date and effective.
							</p>
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
							With our Managed SIEM and SOC service, you can have{" "}
							<span className="highlight">peace of mind </span> knowing that
							your organization's security is in the hands of{" "}
							<span className="highlight">experts</span>.
						</>
					}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledManagedSiemAndSoc>
	);
}
