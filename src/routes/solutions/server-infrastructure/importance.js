import {
	AutorenewRounded,
	ScaleRounded,
	VpnLockRounded,
} from "@mui/icons-material";

export const serverImportance = [
	{
		id: "importance-card-1",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "High Availability",
		content:
			"High availability is the ability of a system to continue operating without interruption when one or more of its components fail.",
		icon: <AutorenewRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: false,
	},
	{
		id: "importance-card-2",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "Scalability",
		content:
			"An intelligently designed server infrastructure can be scaled up or down to meet the changing needs of your business.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		id: "importance-card-3",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "Security",
		content:
			"Your server infrastructure is the backbone of your business. It needs to be secure and protected from outside threats.",
		icon: <VpnLockRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
];
