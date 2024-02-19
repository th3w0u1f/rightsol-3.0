import {
	HeadphonesRounded,
	IntegrationInstructionsRounded,
	PhoneAndroidRounded,
	ScaleRounded,
} from "@mui/icons-material";

export const services = [
	{
		id: "phishing-card-1",
		className: "phishing-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "Customized simulations",
		content:
			"We'll work with you to design customized phishing simulations that test your employees' awareness of phishing threats and their ability to recognize and report them.",
		icon: <ScaleRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		className: "phishing-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		id: "phishing-card-2",
		heading: "Detailed reporting",
		content:
			"After each simulation, we'll provide detailed reports that include information on the success rate of the simulation, the types of phishing emails that were most successful, and the employees who were most susceptible to phishing attacks.",
		icon: <PhoneAndroidRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
	{
		id: "phishing-card-3",
		className: "phishing-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "Remediation resources",
		content:
			"Our service includes a range of resources and materials to help you educate your employees about phishing threats and best practices for preventing them.",
		icon: (
			<IntegrationInstructionsRounded
				fontSize="large"
				sx={{ color: "white" }}
			/>
		),
		iconColor: "bg-yellow",
		showReadMore: false,
	},
	{
		id: "phishing-card-4",
		className: "phishing-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-300",
		heading: "Ongoing support",
		content:
			"Our team is available to provide ongoing support and guidance as needed to help you effectively implement and maintain your phishing simulation program.",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: false,
	},
];
