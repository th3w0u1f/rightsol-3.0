import styled from "styled-components";

export const StyledContactUs = styled.section`
	position: relative;
	z-index: 20;
	scroll-margin-top: 5rem;

	.label-icon {
		margin-right: 0.5rem;
	}

	.fas {
		margin-right: 0.5rem;
	}

	.bgs-cover {
		background-size: cover;
		background-position: center;
	}

	.contact-location {
		font-weight: 600;

		.fas {
			margin-right: 0.75rem;
		}
	}

	.contact-form-left {
		z-index: 1;
		position: relative;
		min-height: 400px;
		border-radius: 1rem;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		@media screen and (max-width: 425px) {
			width: 100%;
			height: fit-content;
			justify-content: center !important;
		}

		@media screen and (max-width: 768px) {
			width: 100%;
			height: fit-content;
		}
	}

	.contact-form-left-content {
		margin: auto 0;
		width: 100%;
	}

	.contact-form-left .contact-tag-line {
		width: 80%;
		left: 10%;
		color: white;
		bottom: 40px;
		font-size: 40px;
		padding-left: 30px;
		position: absolute;
		border-left: 5px solid white;
	}

	@media screen and (max-width: 375px) {
		.contact-form-left .contact-tag-line {
			font-size: 35px;
		}
	}

	.contact-logo {
		width: 90%;
		display: flex;
		justify-content: flex-start;
		align-items: center;

		@media screen and (max-width: 425px) {
			width: 100% !important;
			justify-content: center;

			img {
				width: 100% !important;
			}
		}

		@media screen and (max-width: 768px) {
			width: 100%;
			justify-content: flex-start !important;

			img {
				width: 75%;
			}
		}

		@media screen and (max-width: 1024px) {
			width: 100%;
			justify-content: center;

			img {
				width: 75%;
			}
		}
	}

	.tag-line-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.contact-left-tag-line {
		margin-top: 1.25rem;
		margin-bottom: 0;

		@media screen and (max-width: 425px) {
			text-align: center;
			margin-top: 2rem;
			font-size: 2rem;
		}
	}

	.contact-info-container {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1.25rem;

		@media screen and (max-width: 425px) {
			text-align: center;
		}
	}

	.contact-form-right {
		margin: auto;
		box-sizing: border-box;
		width: 100%;

		@media screen and (max-width: 425px) {
			width: 100%;
		}

		.email-form {
			@media screen and (max-width: 425px) {
				margin-top: 1rem;
			}
		}
	}

	.contact-button-container {
		width: 100%;
	}

	.contact-button {
		margin-top: 1rem;

		background-color: #3bb3eb;
		color: #fff;
		margin-left: auto;
		padding-left: 3rem;
		padding-right: 3rem;
		width: 100% !important;
	}

	.contact-submit-container {
		display: flex;
		justify-content: flex-end;
	}

	.contact-input,
	.contact-message-label {
		margin-top: 0.5rem;
	}

	.contact-message-label {
		margin-top: 1rem;
	}

	.contact-input {
		padding: 0.75rem 1.5rem;
		border-radius: 0.75rem;
		/* border-color: #3bb3eb; */
		outline: 1px solid #00aaff;
		font-size: 0.85rem;

		&:focus {
			outline: 2px solid #00aaff;
			box-shadow: 0px 10px 25px #09679322;
			background-color: #3bb3eb16;
		}
	}

	.contact-title {
		margin-bottom: 2rem;
		position: relative;
		font-size: 1.25rem;
	}

	.contact-title::after {
		content: "";
		width: 100px;
		height: 2px;
		left: 0px;
		position: absolute;
		top: calc(100% + 14px);
		background: #3bb3eb;

		@media screen and (max-width: 425px) {
			width: 100px;
			left: 90px;
		}
	}

	.contact-title::before {
		content: "";
		width: 15px;
		height: 2px;
		left: 60px;
		z-index: 1;
		background: white;
		position: absolute;
		top: calc(100% + 14px);

		@media screen and (max-width: 425px) {
			width: 10px;
			left: 110px;
		}
	}

	.contact-title,
	.contact-sub-text {
		@media screen and (max-width: 425px) {
			text-align: center;
		}
	}

	.contact-sub-text {
		font-size: 1rem;
	}

	.contact-label {
		font-size: 0.85rem;
	}

	.contact-row {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 3rem;

		@media screen and (max-width: 1024px) {
			flex-direction: row;
		}

		@media screen and (max-width: 768px) {
			flex-direction: row;
		}

		@media screen and (max-width: 425px) {
			flex-direction: column;
		}

		@media screen and (max-width: 375px) {
			flex-direction: column;
		}

		@media screen and (max-width: 360px) {
			flex-direction: column;
		}

		@media screen and (max-width: 320px) {
			flex-direction: column;
		}
	}

	.web-creator {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;

		p {
			margin: 0;
		}

		@media screen and (max-width: 425px) {
			text-align: center;
		}

		@media screen and (max-width: 1024px) {
			text-align: center;
		}
	}

	.web-creator-tag {
		a {
			color: black;
		}
	}
`;
