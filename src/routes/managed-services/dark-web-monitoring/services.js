import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "dark-card-1",
		className: "dark-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Real-time monitoring",
		content:
			"Our team will monitor the dark web on a continuous basis, looking for any mentions of your organization or its assets.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		className: "dark-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		id: "dark-card-2",
		heading: "Alerts and notifications",
		content:
			"If we detect any potential threats or exposures, we'll immediately notify you so that you can take the necessary steps to protect yourself.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: false,
	},
	{
		id: "dark-card-3",
		className: "dark-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Detailed reports",
		content:
			"Our service includes regular reports that provide information on the threats and exposures we've detected, along with recommendations for mitigating those risks.",
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
		id: "dark-card-4",
		className: "dark-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Support and guidance",
		content:
			"Our team is available to provide support and guidance as needed to help you effectively respond to any threats or exposures that we detect.",
		href: "/solutions/endpoint-security",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
];
