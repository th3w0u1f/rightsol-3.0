import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "threat-card-1",
		className: "threat-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Proactive threat hunting",
		content:
			"Our team will use a variety of tools and techniques to search for and investigate potential threats to your systems and data.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
	{
		className: "threat-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		id: "threat-card-2",
		heading: "Customized approach",
		content:
			"We'll work with you to develop a customized threat hunting plan that aligns with your organization's specific security needs and goals.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
	{
		id: "threat-card-3",
		className: "threat-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Threat intelligence",
		content:
			"Our service includes access to a range of threat intelligence resources to help our team stay up to date on the latest threats and trends.",
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
		id: "threat-card-4",
		className: "threat-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-250",
		heading: "Support and guidance",
		content:
			"Our team is available to provide support and guidance as needed to help you effectively respond to any threats that we detect.",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
];
