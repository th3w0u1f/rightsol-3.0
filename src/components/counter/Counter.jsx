import React from "react";
import { StyledCounter } from "./styled";
import CounterUp from "../counterUp/CounterUp";
import Parallax from "../parallax/Parallax";

export default function Counter({
	id,
	dataSpeed,
	dataStop,
	endValue,
	title,
	color,
}) {
	return (
		<Parallax id={id}>
			<StyledCounter id={id}>
				<div className="counter-content-container mgtp-3 mgbtm-3">
					<div className={`success-item circle-style ${color}`}>
						<span
							className="count-text plus"
							data-speed={dataSpeed}
							data-stop={dataStop}
						>
							<CounterUp endValue={endValue} sectionSelect={id} />
						</span>
						<span className="counter-title">{title}</span>
					</div>
				</div>
			</StyledCounter>
		</Parallax>
	);
}
