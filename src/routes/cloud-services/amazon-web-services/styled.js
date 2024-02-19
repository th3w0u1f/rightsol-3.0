import styled from "styled-components";

export const StyledAmazonWebServices = styled.section`
	.aws-item {
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
`;
