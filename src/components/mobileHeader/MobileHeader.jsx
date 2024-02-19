import { useEffect, useState } from "react";
import Drawer from "../drawer";
import { StyledMobileHeader } from "./styled";

export default function MobileHeader({ logo, className }) {
	const [open, setOpen] = useState(false);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		document.addEventListener("resize", updateWindowWidth);

		return () => document.removeEventListener("resize", updateWindowWidth);
	}, [windowWidth]);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	return (
		<StyledMobileHeader>
			<Drawer drawer={open} action={() => setOpen(!open)} />
			{/* <div
				className={`mobile-header d-block d-md-none ${className || ""}`}
				style={{ width: windowWidth }}
			>
				<div
					className="d-flex justify-content-between"
					style={{ alignItems: "center", height: "100%" }}
				>
					<a href="/" className="logo-area">
						<img src={logo} alt="" />
					</a>
					<div className="button-area">
						<span onClick={() => setOpen(!open)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								style={{ width: "40px", height: "40px" }}
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</span>
					</div>
				</div>
			</div> */}
		</StyledMobileHeader>
	);
}
