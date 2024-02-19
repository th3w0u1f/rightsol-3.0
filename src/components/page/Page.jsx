import React, { useEffect, useState } from "react";
import { StyledPage } from "./styled";
import Navigation from "../navigation";
import ContactUs from "../contactus";
import BacktoTopCom from "../backToTop";
import { Helmet } from "react-helmet";

export default function Page({ children, pageTitle = "" }) {
	const [nav, setNav] = useState();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		setNav(document.querySelector(".navbar"));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [nav]);

	useEffect(() => {
		window.addEventListener("resize", updateWindowWidth);

		return () => window.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth]);

	useEffect(() => {
		document.addEventListener("DOMContentLoaded", updateScrollIndicator);

		return () =>
			document.removeEventListener("DOMContentLoaded", updateScrollIndicator);
	}, [windowWidth]);

	const updateScrollIndicator = () => {
		console.log("hello");
		var indicator = document.getElementById("scrollIndicator");
		var totalHeight = document.body.scrollHeight - window.innerHeight;
		console.log(indicator);

		window.onscroll = function () {
			var progress = (window.scrollY / totalHeight) * 100;
			indicator.style.height = progress + "%";
		};
	};

	const updateWindowWidth = () => {
		console.log("hello");

		setWindowWidth(window.innerWidth);
	};

	return (
		<StyledPage>
			<Helmet title={`${pageTitle} ${pageTitle && "|"} Right Solutions`} />
			<Navigation />
			<div className="scroll-indicator-container">
				<div id="scroll-indicator" className="scroll-indicator"></div>
			</div>
			<div
				className="content-container"
				style={{ marginTop: nav?.offsetHeight }}
			>
				{children}
			</div>
			<ContactUs />
			<BacktoTopCom className={".main-header"} />
		</StyledPage>
	);
}
