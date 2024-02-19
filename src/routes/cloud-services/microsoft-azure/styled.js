import styled from "styled-components";

export const StyledMicrosoftAzure = styled.section`
	.azure-item {
		padding-left: 1rem;

		&:before {
			content: "•";
			color: #3bb3eb;
			font-weight: bold;
			display: inline-block;
			width: 1em;
			margin-left: -1em;
		}
	}

	.azure-card {
		height: 275px !important;
	}
`;
