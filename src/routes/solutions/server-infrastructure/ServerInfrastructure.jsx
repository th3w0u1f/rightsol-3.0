import React from "react";
import { StyledServerInfrastructure } from "./styled";
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

export default function ServerInfrastructure() {
	return (
		<Page pageTitle="Server Infrastructure">
			<StyledServerInfrastructure>
				<Hero
					tagLine={
						<>
							<span className="highlight">Server Infrastructure</span> Made
							Simple And Seamless
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					heading="In today’s digital environment, your IT infrastructure dictates how well your businesses performs."
					subHeading={
						<>
							<span className="highlight">Right Solutions</span> helps
							businesses prepare for future innovations by providing and
							efficiently managing your business-critical IT infrastructure
							allowing you to focus on your core business.
						</>
					}
					subHeadingOrder={0}
					headingOrder={1}
					className={"px-18 ptp-2 pbm-1"}
					id={"server-intro"}
				/>
				<Divider />
				<InfoHeading
					subHeading={"Importance of Server Infrastructure"}
					className={"ptp-1 pbm-1"}
					id={"server-importance"}
				/>
				<Grid columns={3} className={"px-12"} id={"infrastructure-grid"}>
					{serverImportance.map((card) => (
						<Card {...card} key={card.id} />
					))}
				</Grid>

				<Divider className={"mgtp-3"} />
				<InfoHeading
					subHeading={"How We Do It"}
					id={"how-we-do-it"}
					className={"pbm-2"}
				/>
				<ExplainationSectionLeft
					id={"our-method"}
					backgroundImage={
						"https://images.unsplash.com/photo-1599394407175-b6da85464b90?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">
								We use a method called Virtualization
							</h3>
							<p className="ptp-2 content-explaination">
								Server virtualization is the process of creating virtual
								versions of a physical server, allowing multiple virtual servers
								to run on a single physical server. This results in higher
								utilization of physical resources, improved flexibility and
								scalability, and reduced costs for hardware, maintenance, and
								energy consumption.
							</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<ExplanationSectionRight
					id={"we-take-care"}
					backgroundImage={
						"https://images.unsplash.com/photo-1581092919535-7146ff1a590b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">
								We Take Care Of Your Servers, So You Don't Have To
							</h3>
							<p className="ptp-2 content-explaination">
								Server management is the process of maintaining and
								administrating servers in an IT infrastructure. It involves
								monitoring server performance, ensuring security, conducting
								regular backups, updating software and hardware, and developing
								disaster recovery plans.
							</p>
						</>
					}
					leftContainerOrder={1}
					rightContainerOrder={0}
				/>
				<InfoHeading
					subHeading={
						<>
							<span className="highlight">Right Solutions</span> offers the
							needed talent to <span className="highlight">design</span>,{" "}
							<span className="highlight">deploy</span> and{" "}
							<span className="highlight">manage</span> infrastructure solutions
							that are agile, efficient and secure. There by helping you to
							mitigate risk, protecting data and allowing you to meet the
							opportunities of today and tomorrow.
						</>
					}
					id={"server-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledServerInfrastructure>
		</Page>
	);
}
