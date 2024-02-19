import {
	LocationOnRounded,
	WifiRounded,
	VpnLockRounded,
} from "@mui/icons-material";

export const networkingTypes = [
	{
		id: "networking-card-1",
		className: "network-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-2 height-350",
		heading: "Local Area Network (LAN)",
		content:
			"A local area network (LAN) is a computer network that interconnects computers within a smaller geographic area, such as an office building. A LAN is typically confined to a single building or group of buildings, such as a campus or college.",
		icon: <LocationOnRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-pink",
		showReadMore: false,
	},
	{
		id: "networking-card-2",
		className: "network-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-2 height-350",
		heading: "Wireless LAN (WLAN)",
		content:
			"A wireless local area network (WLAN) is a wireless computer network that links two or more devices using a wireless distribution method within a limited area such as a home, school, computer laboratory, or office building.",
		icon: <WifiRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-yellow",
		showReadMore: false,
	},
	{
		id: "networking-card-3",
		className: "network-card mgtp-1-5 mgbtm-1-5 mgx-0-7-5 py-2 height-350",
		heading: "Virtual Private Network (VPN)",
		content:
			"A virtual private network (VPN) is a private network that extends across a public network. It enables users to send and receive data across shared or public networks as if their devices were directly connected to the private network.",
		icon: <VpnLockRounded fontSize="large" sx={{ color: "white" }} />,
		iconColor: "bg-red",
		showReadMore: false,
	},
];
