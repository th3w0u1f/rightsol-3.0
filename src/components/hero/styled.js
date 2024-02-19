import styled from "styled-components";

export const StyledHero = styled.section`
	width: 100%;
	height: 100%;
	position: relative;

	* {
		text-align: center;
		color: white;
	}

	.hero-slides-container {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	@keyframes zoom-in {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.2);
		}
	}

	.hero-slide {
		width: 100vw !important;
		height: 100%;
		position: relative;
		overflow: hidden;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			animation: zoom-in 15s infinite alternate;

			@media screen and (max-width: 425px) {
				height: 100vh;
			}
		}

		&:before {
			content: "";
			position: absolute;
			z-index: 10;
			background-color: #000000a8;
			width: 100%;
			height: 99.2%;
			top: 0;
			left: 0;

			@media screen and (max-width: 425px) {
				height: 100%;
			}
		}
	}

	.hero-content {
		position: absolute;
		z-index: 50;
	}

	.swiper-wrapper {
		width: 100%;
		height: 100%;
	}

	.hero-container {
		width: 100vw;
		height: 92vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 425px) {
			height: 90vh;
		}
	}

	.hero-tag-line {
		font-size: 2rem;
		margin-bottom: 1rem;
		font-weight: 600;

		@media screen and (max-width: 425px) {
			font-size: 1.5rem;
			padding: 0 2rem;
		}
	}

	.hero-tag-sub-line {
		font-size: 1.5rem;

		@media screen and (max-width: 425px) {
			font-size: 1rem;
		}
	}

	.hero-contact-button {
		font-size: 1rem;
		width: fit-content;
		margin-top: 1.5rem;

		@media screen and (max-width: 425px) {
			font-size: 0.8rem;
		}
	}

	.hero-swiper {
		overflow: hidden;
	}
`;
