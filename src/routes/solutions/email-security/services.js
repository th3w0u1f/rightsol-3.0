import {
	HeadphonesRounded,
	VerifiedUserRounded,
	ArchiveRounded,
	EnhancedEncryptionRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "email-card-1",
		className: " email-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-325",
		heading: "Advanced spam and phishing protection",
		content:
			"Our systems use advanced machine learning and artificial intelligence to identify and block spam and phishing emails before they can reach your inbox.",
		icon: <VerifiedUserRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		className: " email-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-325",
		id: "email-card-2",
		heading: "Email encryption",
		content:
			"Our service includes email encryption capabilities, allowing you to securely send and receive sensitive information over email.",
		icon: (
			<EnhancedEncryptionRounded fontSize="large" sx={{ color: "white" }} />
		),
		iconColor: "bg-orange",
		showReadMore: false,
	},
	{
		id: "email-card-3",
		className: " email-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-325",
		heading: "Email archiving",
		content:
			"Our service includes email archiving capabilities, allowing you to store and retrieve emails for compliance purposes or for later reference.",
		icon: <ArchiveRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-red",
		showReadMore: false,
	},
	{
		id: "email-card-4",
		className: " email-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-325",
		heading: "24/7 support",
		content:
			"Our team of security professionals is available around the clock to monitor your email systems and respond to any potential threats.",
		href: "/solutions/endpoint-security",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: false,
	},
];
