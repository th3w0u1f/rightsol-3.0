import styled from "styled-components";

export const StyledPage = styled.section`
	.content-container {
		width: 100%;
		height: 100%;
	}

	.scroll-indicator-container {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		background-color: #333;
		z-index: 1000;
	}

	.scroll-indicator {
		height: 0;
		background-color: #3bb3eb;
		width: 2px;
		transition: height 0.3s;
	}
`;
