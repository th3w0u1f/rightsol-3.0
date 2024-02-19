import React from "react";
import { Styled404 } from "./styled";
import Button from "../../components/button";
import { Helmet } from "react-helmet";

export default function NotFound() {
	const navigateHome = () => {
		window.location.href = "/";
	};

	return (
		<>
			<Helmet title={`404 | Right Solutions`} />
			<Styled404>
				<div className="not-found-container">
					<h3>Page Not Found</h3>
					<Button
						text="Navigate Home"
						buttonColor="button-blue"
						onClick={() => navigateHome()}
					/>
				</div>
			</Styled404>
		</>
	);
}
