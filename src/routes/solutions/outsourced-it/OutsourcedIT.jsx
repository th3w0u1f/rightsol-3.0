import React from "react";
import { StyledOutsourcedIT } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import InfoHeading from "../../../components/infoHeading";
import Divider from "../../../components/divider";
import outsourced1 from "./../../../assets/banners/outsourced/outsourced1.jpg";
import outsourced2 from "./../../../assets/banners/outsourced/outsourced2.jpg";
import outsourced3 from "./../../../assets/banners/outsourced/outsourced3.jpg";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";
import ExplanationSectionLeft from "../../../components/explanationSectionLeft";

const images = [
	{
		image: outsourced1,
		alt: "outsourced1",
	},
	{
		image: outsourced2,
		alt: "outsourced2",
	},
	{
		image: outsourced3,
		alt: "outsourced3",
	},
];

export default function OutsourcedIT() {
	return (
		<StyledOutsourcedIT>
			<Page pageTitle="Outsourced IT">
				<Hero
					heroImages={images}
					tagLine={
						<>
							Reliable <span className="highlight">Solutions</span>, Outsourced
							To Perfection
						</>
					}
				/>
				<InfoHeading
					subHeading={
						<>
							Our outsourcing service allows you to focus on your{" "}
							<span className="highlight">core business</span> while our team
							takes care of all of your{" "}
							<span className="highlight"> ICT needs</span>.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"outsourced-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							We have a range of service offerings from a{" "}
							<span className="highlight">
								flat fee Service Level Agreement
							</span>{" "}
							or a{" "}
							<span className="highlight">
								bundle of hours per month Service Level Agreement
							</span>{" "}
							that caters to your unique business needs.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"voice-improved"}
				/>
				<ExplanationSectionLeft
					id={"outsourced-explained"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Our Outsourced IT Service</h3>
							<p className="ptp-2 content-explaination">
								Our Outsourced IT service is designed to provide organizations
								with comprehensive support for all of their IT needs.
							</p>
							<p className="ptp-1 content-explaination">
								With this service, you'll have access to a team of experienced
								IT professionals who will manage your organization's IT
								infrastructure, including hardware, software, and networking.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<ExplanationSectionRight
					id={"more-explained"}
					className={""}
					backgroundImage={
						"https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">There's More...</h3>
							<p className="ptp-2 content-explaination">
								Our team will provide ongoing maintenance and support to keep
								your systems running smoothly and efficiently, as well as
								troubleshoot any issues that may arise.
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
					id={"more-explained"}
					className={""}
					backgroundImage={
						"https://images.unsplash.com/photo-1585435465945-bef5a93f8849?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Almost There</h3>
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
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					id={"outsourced-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
					subHeading={
						<>
							With our Outsourced IT service, you can have{" "}
							<span className="highlight">peace of mind</span> knowing that your
							organization's IT needs are being{" "}
							<span className="highlight"> expertly </span>managed by a team of
							professionals.
						</>
					}
					headingOrder={0}
					subHeadingOrder={1}
				/>
				<Divider />
			</Page>
		</StyledOutsourcedIT>
	);
}
