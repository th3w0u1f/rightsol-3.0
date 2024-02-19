import styled from "styled-components";

export const StyledGrid = styled.div`
	display: grid;
	gap: 1.5rem;
	grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};

	@media screen and (max-width: 1220px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media screen and (max-width: 425px) {
		grid-template-columns: repeat(1, 1fr);
		gap: 0;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
