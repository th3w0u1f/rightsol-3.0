import styled from "styled-components";

export const StyledExplanationSectionLeft = styled.section`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	color: white;
	overflow-y: auto;

	.detailed-parallax {
		width: 100%;
		height: 100%;
	}

	.detailed-background-image {
		position: relative;

		img {
			width: 100%;
			height: auto;
		}
	}

	.content-container {
		text-align: right;
	}

	.detailed-content-container {
		/* position: absolute;
		top: 0;
		z-index: 15; */
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: row;

		position: relative;

		@media screen and (max-width: 425px) {
			flex-direction: column;
		}
	}

	.detailed-left-container {
		background-color: #000000a8;
		width: 50%;
		height: 100%;

		.content-explaination {
			font-size: 1.25rem;
		}

		@media screen and (max-width: 425px) {
			width: 100%;
		}
	}

	.detailed-right-container {
		/* background-color: #3bb3eb39; */
		width: 50%;
		height: 100%;
		position: relative;
		padding-left: 5rem;

		@media screen and (max-width: 425px) {
			width: 100%;
			padding-left: 0;
		}
	}

	.detailed-image {
		width: 16.5rem;
		height: 16.5rem;
		border-radius: 20rem;
		object-fit: cover;

		@media screen and (min-width: 1600px) {
			width: 14rem;
			height: 14rem;
		}
	}

	.image-container {
		width: fit-content;
		border-radius: 20rem;

		position: absolute;
		box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.2);
	}

	.image-1 {
		top: 0px;
		left: 200px;

		@media screen and (min-width: 1600px) {
			top: 20px;
			left: 200px;
		}
	}

	.image-2 {
		top: 150px;
		left: 50px;

		@media screen and (min-width: 1600px) {
			top: 150px;
			left: 50px;
		}
	}

	.image-3 {
		top: 225px;
		left: 275px;

		@media screen and (min-width: 1600px) {
			top: 200px;
			left: 260px;
		}
	}
`;
