import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	LanRounded,
	PhoneAndroidRounded,
	WorkRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "voip-card-1",
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		heading: "Advanced Call Features",
		content:
			"Our service includes a range of advanced call features, such as call forwarding, voicemail, call waiting, and caller ID.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		id: "voip-card-2",
		heading: "Softphone support",
		content:
			"Our service includes support for softphones, allowing you to make and receive calls using your computer or mobile device.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: false,
	},
	{
		id: "voip-card-3",
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		heading: "Integration with popular business tools",
		content:
			"Our service can be easily integrated with popular business tools such as Microsoft Office, Google Suite, and Salesforce.",
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
		id: "voip-card-4",
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		heading: "24/7 support",
		content:
			"Our team of support professionals is available around the clock to help you with any questions or issues you may have.",
		href: "/solutions/endpoint-security",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
	{
		id: "voip-card-5",
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		heading: "Network Infrastructure",
		content:
			"We provide network infrastructure services to keep your network secure.",
		href: "/solutions/network-infrastructure",
		icon: <LanRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: false,
	},
	{
		id: "voip-card-6",
		className: "voice-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-4 height-250",
		heading: "Modern Workplace",
		content:
			"We provide modern workplace solutions to keep your users working anywhere.",
		href: "/solutions/modern-workplace",
		icon: <WorkRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-yellow",
		showReadMore: false,
	},
];
