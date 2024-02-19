import React from "react";
import { StyledEndPointSecurity } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplainationSectionLeft from "../../../components/explanationSectionLeft";

export default function EndPointSecurity() {
	return (
		<Page pageTitle="Endpoint-Security">
			<StyledEndPointSecurity>
				<Hero
					tagLine={
						<>
							Round The Clock Security For Your{" "}
							<span className="highlight">Endpoints</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							It has become more important than ever to have a resilient
							security framework as cyber attacks have become more advanced and
							frequent in recent years.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"endpoint-intro"}
				/>
				<Divider />
				<InfoHeading
					subHeading={
						<>
							Traditional security architecture is not enough anymore. To{" "}
							<span className="highlight">protect</span> your business you not
							only need to know and secure all your digital assets but it is
							critical to continuously monitor them for a breach and plan for
							business continuity in case of one.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"endpoint-security"}
				/>
				<ExplainationSectionLeft
					id={"what-is-an-endpoint"}
					backgroundImage={
						"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					className={"mgtp-2"}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">What Is An Endpoint?</h3>
							<p className="ptp-2 content-explaination">
								An endpoint, also known as a client or host, is any device that
								can be connected to a network and is capable of sending or
								receiving data. This includes:
							</p>
							<ul className="ptp-1 endpoint-list content-explaination">
								<li className="endpoint-item">Desktops</li>
								<li className="endpoint-item">Laptops</li>
								<li className="endpoint-item">Mobile Phones</li>
								<li className="endpoint-item">Servers</li>
								<li className="endpoint-item">Virtual Machines</li>
								<li className="endpoint-item">IoT Devices</li>
							</ul>
							<p>and more.</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<InfoHeading
					subHeading={
						<>
							In today's digital environment there is little more important than
							keeping your users safe, so let us help you secure your endpoints.
						</>
					}
					id={"endpoint-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledEndPointSecurity>
		</Page>
	);
}
