import React from "react";
import { StyledNetworkInfrastructure } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import Grid from "../../../components/grid/Grid";
import { networkingTypes } from "./importance";
import Card from "../../../components/card";
import ExplanationSectionRight from "../../../components/explanationSectionRight/ExplanationSectionRight";

export default function NetworkInfrastructure() {
	return (
		<Page pageTitle="Network Infrastructure">
			<StyledNetworkInfrastructure>
				<Hero
					tagLine={
						<>
							Transform Your Operations With Our{" "}
							<span className="highlight">Network Solutions</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading="We offer industry-leading, scalable networking solutions to a wide variety of industries."
					className={"px-18 ptp-2 pbm-1"}
					id={"networking-intro"}
				/>

				<InfoHeading
					heading={
						<>
							Our range of advanced network infrastructure solutions provides
							your business with a <span className="highlight">high-speed</span>{" "}
							and <span className="highlight">reliable</span> network that
							allows for smoother operations and better optimal uptime.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"networking-offering"}
				/>

				<Divider />
				<InfoHeading
					heading={"We Can Manage Them All"}
					className={"ptp-1 pbm-1"}
					id={"networking-management"}
				/>

				<Grid columns={3} className={"px-12 mgtp-1"} id={"infrastructure-grid"}>
					{networkingTypes.map((card) => (
						<Card {...card} key={card.id} />
					))}
				</Grid>
				<ExplanationSectionRight
					id={"advanced-networking"}
					backgroundImage={
						"https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					className={"mgtp-2"}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">Advanced Network Technology</h3>
							<p className="ptp-2 content-explaination">
								Adopting advanced network technology will allow your business
								flexibility by enhancing network virtualization capabilities and
								simplifying network management for greater efficiency. Therefore
								enhancing security by allowing the monitoring and responding to
								network security threats in real-time.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					heading={
						<>
							<span className="highlight">Networking</span> is the backbone of a
							modern business and is essential for the smooth running of your
							operations.
						</>
					}
					id={"server-conclusion"}
					className={"ptp-1 pbm-1 mgtp-1 px-18"}
				/>
				<Divider />
			</StyledNetworkInfrastructure>
		</Page>
	);
}
