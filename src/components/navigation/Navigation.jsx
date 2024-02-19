import { StyledNavigation } from "./styled";
import rsLogo from "./../../assets/logos/rs-logo-white.svg";
import Button from "../button";
import Drawer from "../drawer/Drawer";
import { useState } from "react";

function Navigation({ className }) {
	const [open, setOpen] = useState(false);

	function extractPath(url, section) {
		const parts = url.split("/");
		return parts[section];
	}

	const category = extractPath(window.location.href, 3);
	const page = extractPath(window.location.href, 4);

	/**
	 * @method swapOpenDrawer
	 */
	const swapOpenDrawer = () => {
		setOpen(!open);
	};

	return (
		<>
			<Drawer drawer={open} action={swapOpenDrawer} />
			<StyledNavigation className="navbar">
				<div className="logo-outer">
					<div className="logo">
						<a href="/">
							<img
								src={rsLogo}
								alt="Logo"
								title="Logo"
								className="logo-image"
							/>
						</a>
					</div>
				</div>
				<div className="nav-outer clearfix d-flex align-items-center">
					<div className={`header-main-menu ${className || ""} nav-home-six`}>
						<ul className="nav-links">
							<li>
								<a
									href="/"
									style={{
										color: `${category === "" ? "#000" : "white"}`,
									}}
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#solutions"
									style={{
										color: `${category === "solutions" ? "#000" : "white"}`,
									}}
								>
									Solutions <i className="fa fa-angle-down" />
								</a>
								<ul className="sub-menu">
									<li>
										<a
											href="/solutions/server-infrastructure"
											style={{
												color: `${
													page === "server-infrastructure" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Server Infrastructure
										</a>
									</li>
									<li>
										<a
											href="/solutions/endpoint-security"
											style={{
												color: `${
													page === "endpoint-security" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											End Point Security
										</a>
									</li>
									<li>
										<a
											href="/solutions/network-infrastructure"
											style={{
												color: `${
													page === "network-infrastructure"
														? "#3BB3EB"
														: "black"
												}`,
											}}
										>
											Network Infrastructure
										</a>
									</li>
									<li>
										<a
											href="/solutions/modern-workplace"
											style={{
												color: `${
													page === "modern-workplace" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Modern Workplace
										</a>
									</li>
									<li>
										<a
											href="/solutions/strategy-and-consulting"
											style={{
												color: `${
													page === "strategy-and-consulting"
														? "#3BB3EB"
														: "black"
												}`,
											}}
										>
											Strategy and Consulting
										</a>
									</li>
									<li>
										<a
											href="/solutions/voice-solutions"
											style={{
												color: `${
													page === "voice-solutions" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Voice Solutions
										</a>
									</li>
									<li>
										<a
											href="/solutions/backup-solutions"
											style={{
												color: `${
													page === "backup-solutions" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Backup Solutions
										</a>
									</li>
									<li>
										<a
											href="/solutions/email-security"
											style={{
												color: `${
													page === "email-security" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Email Security
										</a>
									</li>
									<li>
										<a
											href="/solutions/outsourced-it"
											style={{
												color: `${
													page === "outsourced-it" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Outsourced IT
										</a>
									</li>
									<li>
										<a
											href="/solutions/co-managed-it"
											style={{
												color: `${
													page === "co-managed-it" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Co-Managed IT
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									href="#services"
									style={{
										color: `${
											category === "managed-services" ? "#000" : "white"
										}`,
									}}
								>
									Managed Services <i className="fa fa-angle-down" />
								</a>
								<ul className="sub-menu">
									<li>
										<a
											href="/managed-services/pentesting"
											style={{
												color: `${page === "pentesting" ? "#3BB3EB" : "black"}`,
											}}
										>
											Pentesting
										</a>
									</li>
									<li>
										<a
											href="/managed-services/cyber-incident-response"
											style={{
												color: `${
													page === "cyber-incident-response"
														? "#3BB3EB"
														: "black"
												}`,
											}}
										>
											Cyber Incidient Response
										</a>
									</li>
									<li>
										<a
											href="/managed-services/managed-siem-and-soc"
											style={{
												color: `${
													page === "managed-siem-and-soc" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Managed SIEM and SOC
										</a>
									</li>
									<li>
										<a
											href="/managed-services/vulnerability-management"
											style={{
												color: `${
													page === "vulnerability-management"
														? "#3BB3EB"
														: "black"
												}`,
											}}
										>
											Vulnerability Management
										</a>
									</li>
									<li>
										<a
											href="/managed-services/cyber-security-awareness-training"
											style={{
												color: `${
													page === "cyber-security-awareness-training"
														? "#3BB3EB"
														: "black"
												}`,
											}}
										>
											Cyber Security Awareness Training
										</a>
									</li>
									<li>
										<a
											href="/managed-services/phishing-simulation"
											style={{
												color: `${
													page === "phishing-simulation" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Phishing Simulation
										</a>
									</li>
									<li>
										<a
											href="/managed-services/dark-web-monitoring"
											style={{
												color: `${
													page === "dark-web-monitoring" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Dark Web Monitoring
										</a>
									</li>
									<li>
										<a
											href="/managed-services/firewall-management"
											style={{
												color: `${
													page === "firewall-management" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Firewall Management
										</a>
									</li>
									<li>
										<a
											href="/managed-services/threat-hunting"
											style={{
												color: `${
													page === "threat-hunting" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Threat Hunting
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									href="#services"
									style={{
										color: `${
											category === "cloud-services" ? "#000" : "white"
										}`,
									}}
								>
									Cloud Services <i className="fa fa-angle-down" />
								</a>
								<ul className="sub-menu">
									<li>
										<a
											href="/cloud-services/microsoft-365"
											style={{
												color: `${
													page === "microsoft-365" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Microsoft 365
										</a>
									</li>
									<li>
										<a
											href="/cloud-services/microsoft-azure"
											style={{
												color: `${
													page === "microsoft-azure" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Microsoft Azure
										</a>
									</li>
									<li>
										<a
											href="/cloud-services/amazon-web-services"
											style={{
												color: `${
													page === "amazon-web-services" ? "#3BB3EB" : "black"
												}`,
											}}
										>
											Amazon Web Services
										</a>
									</li>
								</ul>
							</li>
							<li>
								<a
									href="#about"
									style={{
										color: `${category === "about" ? "#000" : "white"}`,
									}}
								>
									About <i className="fa fa-angle-down" />
								</a>
								<ul className="sub-menu">
									<li>
										<a
											href="/about-us/our-story"
											style={{
												color: `${page === "our-story" ? "#3BB3EB" : "black"}`,
											}}
										>
											About Us
										</a>
									</li>

									<li>
										<a
											href="/about-us/contact-us"
											style={{
												color: `${page === "contact-us" ? "#3BB3EB" : "black"}`,
											}}
										>
											Contact Us
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<Button
					text="Contact Us"
					className="contact-us-button"
					onClick={() => {
						const element = document.querySelector("#contact-us");
						element.scrollIntoView({ behavior: "smooth" });
					}}
				/>
				<div className="hamburger-button" onClick={swapOpenDrawer}>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							style={{ width: "40px", height: "40px" }}
							fill="none"
							viewBox="0 0 24 24"
							stroke="white"
							strokeWidth="2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</span>
				</div>
			</StyledNavigation>
		</>
	);
}

export default Navigation;
