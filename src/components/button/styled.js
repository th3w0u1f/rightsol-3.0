import styled from "styled-components";

export const StyledButton = styled.div`
	.button {
		border: none;
		padding: 0.75rem 1.25rem;
		border-radius: 1rem;
		background-color: aliceblue;
		transition: all 0.3s ease-in-out;
		box-shadow: 0px 10px 25px #09679322;
		width: 100%;

		&:hover {
			transform: scale(1.05);
			animation: shadow-pulse 1.5s infinite;
		}
	}

	.button-blue {
		background-color: #3bb3eb;
	}

	.disabled {
		background-color: grey;
		pointer-events: none !important;
		cursor: not-allowed !important;
	}
`;
