import styled from "styled-components";

export const StyledCard = styled.div`
	* {
		padding: 0;
		margin: 0;
	}

	height: 100%;
	/* margin: 0 1rem; */

	@keyframes appear {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.card-container {
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0px 10px 25px #09679322;
		height: 100%;

		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		justify-content: space-around;
		align-items: center;
		perspective: 1000px;

		transition: all 0.3s ease-in-out;

		&:hover {
			transform: translateY(-10px) scale(1.05);
			background-color: #00202eff;
			animation: spin 0.5 ease-in-out;

			.card-icon {
				background-color: #3bb3eb;
			}

			.card-heading,
			.card-content {
				color: #fff;
			}

			.card-heading {
				font-weight: 600;
			}

			.card-read-more {
				font-weight: 600;
			}
		}
	}

	.card-heading,
	.card-content,
	.card-read-more {
		transition: all 0.3s ease-in-out;
		text-align: center;
	}

	.card-heading {
		font-size: 1.2rem;
		font-weight: 500;
		text-align: center;
		margin-bottom: 0.25rem;
	}

	.card-content {
		font-size: 0.9rem;
		font-weight: 400;
	}

	.card-read-more {
		font-size: 1rem;
		font-weight: 500;
		color: #3bb3eb;
		text-decoration: none;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			width: 0%;
			height: 2px;
			background-color: #3bb3eb;
			bottom: -2px;
			left: 0;
			transition: all 0.3s ease-in-out;
		}

		&:hover:after {
			width: 100%;
		}
	}

	.card-icon {
		padding: 1rem;
		border-radius: 2rem;
	}
`;
