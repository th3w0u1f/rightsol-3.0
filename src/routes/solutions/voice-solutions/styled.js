import styled from "styled-components";

export const StyledVoiceSolutions = styled.section`
	.voice-item {
		padding-left: 1rem;
		margin-bottom: 0.5rem;
		&:before {
			content: "•";
			color: #3bb3eb;
			font-weight: bold;
			display: inline-block;
			width: 1em;
			margin-left: -1em;
		}
	}
`;
