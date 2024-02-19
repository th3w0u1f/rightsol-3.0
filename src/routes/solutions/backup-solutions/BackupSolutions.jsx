import React from "react";
import { StyledBackupSolutions } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import Grid from "../../../components/grid/Grid";
import { serverImportance } from "./importance";
import Card from "../../../components/card";

export default function BackupSolutions() {
	return (
		<Page pageTitle="Backup Solutions">
			<StyledBackupSolutions>
				<Hero
					tagLine={
						<>
							Your Backups Will Be Running Smoother Than{" "}
							<span className="highlight">Ever!</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Managed Backup solution is designed to provide organizations
							with a <span className="highlight">reliable</span> and{" "}
							<span className="highlight">secure</span> way to protect their
							data.
						</>
					}
					subHeadingOrder={0}
					headingOrder={1}
					className={"px-18 ptp-2 pbm-1"}
					id={"backup-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a team of{" "}
							<span className="highlight">experienced</span> IT professionals
							who will help you to implement and manage a robust backup strategy
							that meets the specific needs of your organization.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"backup-experience"}
				/>
				<InfoHeading
					subHeading={"Our managed backup solution includes"}
					id={"backup-solutions"}
					className={"pbm-2 mgbm-2 mgtp-2"}
				/>
				<Grid columns={2} className={"px-18"} id={"backup-grid"}>
					{serverImportance.map((card) => (
						<Card {...card} key={card.id} />
					))}
				</Grid>
				<InfoHeading
					subHeading={
						<>
							With our Managed Backup Solution, you can have peace of mind
							knowing that your organization's data is being{" "}
							<span className="highlight">properly protected</span> and is{" "}
							<span className="highlight">always available</span> when needed.
						</>
					}
					id={"backup-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledBackupSolutions>
		</Page>
	);
}
