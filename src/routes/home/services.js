import {
	LanRounded,
	LaptopChromebookRounded,
	SecurityRounded,
	WorkRounded,
} from "@mui/icons-material";
import { DnsRounded } from "@mui/icons-material";
import { CloudDownloadRounded } from "@mui/icons-material";

export const services = [
	{
		id: "card-1",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Cyber Security",
		content:
			"We provide cyber security training to protect your business from cyber threats.",
		href: "/managed-services/cyber-security-awareness-training",
		icon: <SecurityRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-green",
		showReadMore: true,
	},
	{
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		id: "card-2",
		heading: "Server Infrastructure",
		content:
			"We provide server infrastructure services to protect aid your day-to-day business.",
		href: "/solutions/server-infrastructure",
		icon: <DnsRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-orange",
		showReadMore: true,
	},
	{
		id: "card-3",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Backup Solutions",
		content:
			"We provide backup solutions to protect your business from any data loss.",
		href: "/solutions/backup-solutions",
		icon: <CloudDownloadRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-red",
		showReadMore: true,
	},
	{
		id: "card-4",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "End Point Security",
		content:
			"We provide end point security services to protect your users from cyber threats.",
		href: "/solutions/endpoint-security",
		icon: <LaptopChromebookRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-purple",
		showReadMore: true,
	},
	{
		id: "card-5",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Network Infrastructure",
		content:
			"We provide network infrastructure services to keep your network secure.",
		href: "/solutions/network-infrastructure",
		icon: <LanRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-blue",
		showReadMore: true,
	},
	{
		id: "card-6",
		className: "mgtp-1-5 mgbtm-1-5 mgx-0-7-5 height-275",
		heading: "Modern Workplace",
		content:
			"We provide modern workplace solutions to keep your users working anywhere.",
		href: "/solutions/modern-workplace",
		icon: <WorkRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-yellow",
		showReadMore: true,
	},
];
