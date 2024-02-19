import styled from "styled-components";

export const StyledMobileHeader = styled.section`
	.mobile-header {
		width: 100%;
		height: 70px;
		padding: 1rem;
		position: fixed;
		top: 0;
		z-index: 999;
		background-color: #3bb3eb;
		box-shadow: 0px 5px 10px rgba(128, 128, 128, 0.193);
	}

	.mobile-header .logo-area img {
		width: 120px;
		height: auto;
	}
	.mobile-header .button-area span {
		color: #000000;
	}

	@media screen and (max-width: 480px) {
		.main-menu .mobile-logo {
			max-width: 150px;
		}
	}
`;
