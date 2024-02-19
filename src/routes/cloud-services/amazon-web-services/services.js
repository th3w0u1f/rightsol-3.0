import {
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "aws-card-1",
		className: "aws-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Customized AWS strategy",
		content:
			"We'll work with you to design a customized AWS strategy that aligns with your organization's specific needs and goals.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		className: "aws-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		id: "aws-card-2",
		heading: "Implementation and management support",
		content:
			"Our team of IT professionals will help you to implement and manage your AWS strategy, including tasks such as data migration, security, and compliance.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-red",
		showReadMore: false,
	},
	{
		id: "aws-card-3",
		className: "aws-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Support and training",
		content:
			"Our team is available to provide support and training as needed to help you effectively leverage the power of AWS.",
		icon: (
			<IntegrationInstructionsRounded
				fontSize="large"
				sx={{ color: "white" }}
			/>
		),
		iconColor: "bg-purple",
		showReadMore: false,
	},
];
