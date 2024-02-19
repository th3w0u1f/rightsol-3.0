import React from "react";
import { StyledInfoHeading } from "./styled";
import Parallax from "../parallax/Parallax";

export default function InfoHeading({
	heading,
	subHeading,
	headingOrder,
	subHeadingOrder,
	id,
	className,
}) {
	return (
		<Parallax id={id}>
			<StyledInfoHeading className={id}>
				<div className={`info-heading-container ${className}`}>
					{heading && (
						<h3
							className="info-heading ptp-1"
							style={{ order: headingOrder ? headingOrder : 0 }}
						>
							{heading}
						</h3>
					)}
					{subHeading && (
						<p
							className="info-sub-heading ptp-1"
							style={{ order: subHeadingOrder ? subHeadingOrder : 1 }}
						>
							{subHeading}
						</p>
					)}
				</div>
			</StyledInfoHeading>
		</Parallax>
	);
}
