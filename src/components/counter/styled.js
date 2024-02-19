import styled from "styled-components";

export const StyledCounter = styled.section`
	.success-item .count-text {
		font-weight: 600;
	}

	.counter-title {
		color: #343434ff;
	}

	.success-item.circle-style {
		margin-left: auto;
		margin-right: auto;
		width: 180px;
		height: 180px;
		background: white;
		line-height: 180px;
		border-radius: 50%;
		text-align: center;
		padding: 45px 0;
		line-height: 1;
		border: 10px solid rgba(231, 231, 233, 0.56);
		transition: all 0.3s ease-in-out;
		animation: shadow-pulse 1.5s infinite;

		&:hover {
			transform: scale(1.1);
		}
	}
	.success-item.circle-style .count-text {
		display: block;
		font-size: 36px;
		font-weight: 600;
		margin-bottom: 15px;
		font-family: "Montserrat", sans-serif;
	}

	.success-item .count-text.plus:after {
		content: "+";
	}
	.success-item .count-text.k:after {
		content: "k";
	}
	.success-item p {
		font-size: 22px;
		font-weight: 500;
		margin-bottom: 0;
	}
	.success-item.style-three {
		margin-bottom: 0;
		padding-top: 80px;
		padding-bottom: 80px;
		border-left: 1px solid #285ec1;
		border-bottom: 1px solid #285ec1;
	}
`;
