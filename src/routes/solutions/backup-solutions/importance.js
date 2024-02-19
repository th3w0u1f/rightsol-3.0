import {
	AutoModeRounded,
	EngineeringRounded,
	HeadphonesRounded,
	SecurityUpdateGoodRounded,
} from "@mui/icons-material";

export const serverImportance = [
	{
		id: "backup-card-1",
		className: "backup-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Customized Backup Plans",
		content:
			"We'll work with you to develop a backup plan that meets the unique needs of your organization, taking into account factors such as the type of data being backed up, the frequency of backups, and the required recovery time.",
		icon: <EngineeringRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: false,
	},
	{
		id: "backup-card-2",
		className: "backup-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Automatic Backups",
		content:
			"Our service includes automatic backup capabilities, ensuring that your data is regularly backed up without requiring any manual intervention.",
		icon: <AutoModeRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: false,
	},
	{
		id: "backup-card-3",
		className: "backup-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Secure Storage",
		content:
			"Your data will be stored in secure, offsite locations, protected by state-of-the-art security measures.",
		icon: (
			<SecurityUpdateGoodRounded fontSize="large" sx={{ color: "white" }} />
		),
		iconColor: "bg-purple",
		showReadMore: false,
	},
	{
		id: "backup-card-4",
		className: "backup-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "24/7 Monitoring and Support",
		content:
			"Our team of IT professionals is available around the clock to monitor your backup systems and provide support as needed.",
		icon: <HeadphonesRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
];
