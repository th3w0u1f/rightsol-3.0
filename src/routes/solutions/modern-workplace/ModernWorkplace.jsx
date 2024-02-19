import React from "react";
import { StyledModernWorkplace } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import ExplainationSectionLeft from "../../../components/explanationSectionLeft";

export default function ModernWorkplace() {
	return (
		<Page pageTitle="Modern Workplace">
			<StyledModernWorkplace>
				<Hero
					tagLine={
						<>
							Transform Your Operations With Our{" "}
							<span className="highlight">Modern Workplace</span> Solutions
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our <span className="highlight">Modern Workplace</span> solutions
							allow your employees to access data when and where they need it.
						</>
					}
					className={"px-18 ptp-2 pbm-1"}
					id={"modern-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							Employees can <span className="highlight">collaborate</span> and{" "}
							<span className="highlight">work</span> seamlessly and securely on
							any device, anywhere, thus allowing for the hybrid work
							environments that employees demand in current circumstances.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"modern-story"}
				/>
				<ExplainationSectionLeft
					id={"modern-benefits"}
					className={"mgtp-3"}
					backgroundImage={
						"https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					applyBackgroundClass
					content={
						<>
							<h3 className="highlight">
								Benefits Of Our Modern Workplace Solutions
							</h3>
							<p className="ptp-2 content-explaination">
								Modern Workplace applications and tools can:
							</p>
							<ul className="ptp-1 modern-list content-explaination">
								<li className="modern-item">
									Improve Employee Productivity And Collaboration
								</li>
								<li className="modern-item">
									Increase Employee Satisfaction And Engagement
								</li>
								<li className="modern-item">Reduce IT Costs And Complexity</li>
							</ul>
							<p>for your business.</p>
						</>
					}
					leftContainerOrder={0}
					rightContainerOrder={1}
				/>
				<InfoHeading
					subHeading={
						<>
							A modern workplace creates a{" "}
							<span className="highlight">secure</span> and{" "}
							<span className="highlight">productive</span> environment for your
							employees.
						</>
					}
					id={"modern-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledModernWorkplace>
		</Page>
	);
}
