import React from "react";
import { Helmet } from "react-helmet";
import { StyledLoading } from "./styled";
import { CircularProgress } from "@mui/material";

export default function Loading() {
	return (
		<>
			<Helmet title={`Right Solutions`} />
			<StyledLoading>
				<div className="loading">
					<CircularProgress fontSize="large" />
				</div>
			</StyledLoading>
		</>
	);
}
