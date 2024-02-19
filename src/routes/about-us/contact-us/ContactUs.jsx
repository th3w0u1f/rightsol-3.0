import React from "react";
import { StyledContactUs } from "./styled";
import Page from "../../../components/page";
import Hero from "../../../components/hero";
import { heroImages } from "./heroImages";

export default function ContactUs() {
	return (
		<Page pageTitle="Contact Us">
			<StyledContactUs>
				<Hero
					tagLine={
						<>
							Contact Us<span className="highlight">Today</span>
						</>
					}
					heroImages={heroImages}
				/>
			</StyledContactUs>
		</Page>
	);
}
