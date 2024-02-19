import React from "react";
import { StyledEmailSecurity } from "./styled";
import Page from "../../../components/page";
import InfoHeading from "../../../components/infoHeading";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";
import Divider from "../../../components/divider";
import { services } from "./services";
import SlickSlider from "../../../components/slickSlider/SlickSlider";
import Card from "../../../components/card";

export default function EmailSecurity() {
	return (
		<Page pageTitle="Email Security">
			<StyledEmailSecurity>
				<Hero
					tagLine={
						<>
							Securing Your Inbox, Securing Your{" "}
							<span className="highlight">Business</span>
						</>
					}
					heroImages={heroImages}
				/>
				<InfoHeading
					subHeading={
						<>
							Our Email Security service is designed to help organizations
							protect their employees and data from the{" "}
							<span className="highlight-red">growing threat</span> of
							email-based attacks.
						</>
					}
					subHeadingOrder={0}
					headingOrder={1}
					className={"px-18 ptp-2 pbm-1"}
					id={"email-intro"}
				/>
				<Divider />
				<InfoHeading
					heading={
						<>
							With this service, you'll have access to a range of advanced
							security features that will help to{" "}
							<span className="highlight">block spam</span>,{" "}
							<span className="highlight">phishing attacks</span>, and{" "}
							<span className="highlight">other malicious emails</span> before
							they can reach your inbox.
						</>
					}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
					id={"email-blocks"}
				/>
				<InfoHeading
					subHeading={"We can manage them all"}
					id={"email-solutions"}
					className={"pbm-2 mgbm-2 mgtp-2"}
				/>
				<SlickSlider
					slidesToShow={3}
					slidesToScroll={1}
					dots={false}
					fade={false}
					className={"px-12 ptp-2 pbm-2"}
					pauseOnHover
					id={"email-slider"}
				>
					{services.map((card) => (
						<Card key={card.id} {...card} />
					))}
				</SlickSlider>
				<InfoHeading
					subHeading={
						<>
							With our Email Security service, you can have confidence that your
							organization's email systems are{" "}
							<span className="highlight">secure</span> and your data is{" "}
							<span className="highlight">protected </span> from email-based
							threats.
						</>
					}
					id={"email-conclusion"}
					className={"ptp-1 pbm-1 px-18 mgtp-1"}
				/>
				<Divider />
			</StyledEmailSecurity>
		</Page>
	);
}
