import React from "react";
import { StyledExplanationSectionRight } from "./styled";
import Parallax from "../parallax/Parallax";

export default function ExplanationSectionRight({
	content,
	images,
	id,
	leftContainerOrder,
	rightContainerOrder,
	backgroundImage,
	applyBackgroundClass,
	className,
}) {
	return (
		<StyledExplanationSectionRight
			className={` mgb-3 ${id} ${
				applyBackgroundClass && "bgs-fixed"
			} ${className}`}
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundAttachment: "fixed",
			}}
		>
			<div className="detailed-content-container ">
				<div
					className="detailed-right-container"
					style={{ order: rightContainerOrder ? rightContainerOrder : 1 }}
				>
					{images &&
						images.map((image) => (
							<div
								className={`image-container ${image.imageClass}`}
								key={image.alt}
							>
								<img
									src={image.image}
									alt={image.alt}
									className="detailed-image"
								/>
							</div>
						))}
				</div>
				<div
					className={`detailed-left-container ptp-6 pbm-6 `}
					style={{
						order: leftContainerOrder ? leftContainerOrder : 0,
					}}
				>
					<Parallax id={id}>
						<div className="detailed-left-content mg-l-2 ptp-2 pbm-2 pr-12 pl-2">
							{content}
						</div>
					</Parallax>
				</div>
			</div>
		</StyledExplanationSectionRight>
	);
}
