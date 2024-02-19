import styled from "styled-components";

export const StyledBackToTop = styled.div`
	.scroll-top {
		position: fixed;
		bottom: 30px;
		right: 30px;
		z-index: 99;
		width: 40px;
		height: 40px;
		color: white;
		display: none;
		cursor: pointer;
		border-radius: 5px;
		-webkit-animation: pulse 2s infinite;
		animation: pulse 2s infinite;
		background: #3bb3eb;
		animation: top-scroll 500ms ease-in-out;
	}

	@keyframes top-scroll {
		0% {
			opacity: 0;
			-webkit-transform: translateY(100px);
			transform: translateY(100px);
		}
		100% {
			opacity: 1;
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
`;
