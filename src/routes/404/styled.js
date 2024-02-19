import styled from "styled-components";

export const Styled404 = styled.section`
	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	.not-found-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		h3 {
			margin: 0;
		}
	}

	.button-blue {
		color: white;
	}
`;
