import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "firewall-card-1",
		className: "firewall-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5",
		heading: "Configuration and maintenance",
		content:
			"We'll help you to configure and maintain your firewall systems to ensure that they are properly protecting your network and data.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
	{
		className: "firewall-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5",
		id: "firewall-card-2",
		heading: "Policy management",
		content:
			"We'll work with you to develop and maintain firewall policies that align with your organization's security needs and goals.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: false,
	},
	{
		id: "firewall-card-3",
		className: "firewall-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5",
		heading: "Monitoring and alerts",
		content:
			"Our team will continuously monitor your firewall systems for any potential threats or issues, and will provide alerts as needed.",
		icon: (
			<IntegrationInstructionsRounded
				fontSize="large"
				sx={{ color: "white" }}
			/>
		),
		iconColor: "bg-red",
		showReadMore: false,
	},
	{
		id: "firewall-card-4",
		className: "firewall-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5",
		heading: "Support and guidance",
		content:
			"Our team is available to provide support and guidance as needed to help you effectively manage your firewall systems.",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
];
