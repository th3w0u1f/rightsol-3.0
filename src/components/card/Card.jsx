import React from "react";
import { StyledCard } from "./styled";
import Parallax from "../parallax/Parallax";

export default function Card({
	icon,
	heading,
	content,
	iconColor,
	id,
	showReadMore,
	readMoreLink,
	className,
}) {
	return (
		<Parallax id={id}>
			<StyledCard className={`${id}`}>
				<div className={`card-container ${className}`}>
					{icon && <div className={`card-icon ${iconColor}`}>{icon}</div>}
					{heading && <h3 className="card-heading">{heading}</h3>}
					{content && <p className="card-content">{content}</p>}
					{showReadMore && (
						<a className="card-read-more" href={readMoreLink}>
							Read More
						</a>
					)}
				</div>
			</StyledCard>
		</Parallax>
	);
}
