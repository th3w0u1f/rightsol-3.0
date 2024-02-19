import styled from "styled-components";

export const StyledInfoHeading = styled.section`
	text-align: center;

	@media screen and (max-width: 768px) {
		padding: 2rem 5rem;
	}

	@media screen and (max-width: 425px) {
		padding: 2rem 2rem;
	}

	.info-heading {
		font-size: 1.5rem;
	}

	.info-sub-heading {
		font-size: 1.25rem;
	}
`;
