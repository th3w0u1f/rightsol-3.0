import React from "react";
import { StyledButton } from "./styled";

export default function Button({
	text = "Button",
	className = "",
	type = "",
	onClick = () => {},
	buttonColor = "",
	buttonContainer = "",
}) {
	return (
		<StyledButton className={buttonContainer}>
			<button
				className={`button ${className} ${buttonColor}`}
				type={type}
				onClick={onClick}
			>
				{text}
			</button>
		</StyledButton>
	);
}
