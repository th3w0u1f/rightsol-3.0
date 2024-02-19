import React from "react";
import { StyledCoManagedIT } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import comanaged1 from "./../../../assets/banners/co-managed/co-managed1.jpg";
import comanaged2 from "./../../../assets/banners/co-managed/co-managed2.jpg";
import comanaged3 from "./../../../assets/banners/co-managed/co-managed3.jpg";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";
import ExplanationSectionLeft from "../../../components/explanationSectionLeft";

const images = [
	{
		image: comanaged1,
		alt: "co-managed1",
	},
	{
		image: comanaged2,
		alt: "co-managed2",
	},
	{
		image: comanaged3,
		alt: "co-managed3",
	},
];

export default function CoManagedIT() {
	return (
		<StyledCoManagedIT>
			<Page pageTitle="Co-Managed IT">
				<Hero
					heroImages={images}
					tagLine={
						<>
							We <span className="highlight">Bridge</span> The Gap Between
							In-House And Outsourced IT.
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Co-managed IT service is designed to provide organizations
							with <span className="highlight">comprehensive support</span> for
							all of their IT needs.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"co-managed-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a team of experienced IT
							professionals who will manage your organization's{" "}
							<span className="highlight">IT infrastructure</span>, including{" "}
							<span className="highlight">hardware</span>,{" "}
							<span className="highlight">software</span>, and{" "}
							<span className="highlight">networking</span>.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"co-management-improved"}
				/>
				<ExplanationSectionRight
					id={"co-management-explained"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1579389082714-c16c57fa7de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Our Offer To You</h3>
							<p className="ptp-2 content-explaination">
								Our team will provide ongoing maintenance and support to keep
								your systems running smoothly and efficiently, as well as
								troubleshooting any issues that may arise.
							</p>
							<p className="ptp-1 content-explaination">
								We'll also work with you to develop and implement IT strategies
								to support your business goals and needs.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<ExplanationSectionLeft
					id={"more-co-management-explained"}
					className={""}
					backgroundImage={
						"https://images.unsplash.com/photo-1579389082714-c16c57fa7de2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">There's More...</h3>
							<p className="ptp-2 content-explaination">
								In addition to technical support, our Outsourced IT service also
								includes security services to help protect your systems and
								data.
							</p>
							<p className="ptp-1 content-explaination">
								We'll monitor your systems 24/7, looking for potential threats
								and vulnerabilities, and take the necessary steps to prevent and
								mitigate any issues.
							</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<InfoHeading
					id={"co-managed-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our Co-managed IT service, you can have{" "}
							<span className="highlight">peace of mind</span> knowing that your
							organization's IT needs are being{" "}
							<span className="highlight"> expertly </span>managed by a team of
							professionals.
						</>
					}
				/>
				<Divider />
			</Page>
		</StyledCoManagedIT>
	);
}
