import {
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "microsoft-card-1",
		className: "microsoft-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "customized cloud strategy",
		content:
			"We'll work with you to design a customized cloud strategy that aligns with your organization's specific needs and goals.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: false,
	},
	{
		className: "microsoft-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		id: "microsoft-card-2",
		heading: "Implementation and management support",
		content:
			"Our team of IT professionals will help you to implement and manage your cloud strategy, including tasks such as data migration, security, and compliance.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		id: "microsoft-card-3",
		className: "microsoft-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Support and training",
		content:
			"Our team is available to provide support and training as needed to help you effectively leverage the power of the cloud.",
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
