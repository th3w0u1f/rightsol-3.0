import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "training-card-1",
		className: "training-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Customized training materials",
		content:
			"We'll work with you to develop customized training materials and resources that are tailored to your organization's needs and industry.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: false,
	},
	{
		className: "training-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		id: "training-card-2",
		heading: "Online training modules",
		content:
			"Our service includes a range of online training modules that cover topics such as phishing, password security, and safe browsing practices.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
	{
		id: "training-card-3",
		className: "training-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Regular updates",
		content:
			"As the threat landscape evolves, we'll provide regular updates and new training materials to ensure that your team is always up to date on the latest threats and best practices.",
		icon: (
			<IntegrationInstructionsRounded
				fontSize="large"
				sx={{ color: "white" }}
			/>
		),
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		id: "training-card-4",
		className: "training-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Support and guidance",
		content:
			"Our team of security professionals is available to provide support and guidance as needed to help you implement your security awareness training program.",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: false,
	},
];
