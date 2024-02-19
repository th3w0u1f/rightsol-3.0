import React, { useEffect } from "react";
import BackToTop from "../../lib/BackToTop";
import { StyledBackToTop } from "./styled";

function BacktoTopCom({ className }) {
	useEffect(() => {
		BackToTop(".scroll-top");
	});
	return (
		<StyledBackToTop>
			<button
				type="button"
				className={`scroll-top scroll-to-target ${className || ""}`}
			>
				<span className="fa fa-angle-up"></span>
			</button>
		</StyledBackToTop>
	);
}

export default BacktoTopCom;
