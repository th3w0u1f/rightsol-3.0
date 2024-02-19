import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailImage from "./../../assets/email/hello.png";
import phoneImage from "./../../assets/email/phone.png";
import logo from "./../../assets/logos/rs-logo.svg";
import StickyMenu from "../../lib/StickyMenu";
import { StyledDrawer } from "./styled";

function Drawer({ drawer, action }) {
	const [itemSize, setSize] = useState("0px");
	const [item, setItem] = useState("");
	const handler = (e, value) => {
		e.preventDefault();
		const getItems = document.querySelectorAll(`#${value} li`).length;
		if (getItems > 0) {
			if (item !== value) {
				setSize(`${45 * getItems}px`);
				setItem(value);
			} else {
				setItem("");
			}
		}
	};

	const drawerRef = useRef(null);

	useEffect(() => {
		StickyMenu(".off_canvars_overlay");
	});

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (drawerRef.current && !drawerRef.current.contains(event.target)) {
				const drawerElement = document.querySelector(".offcanvas_menu_wrapper");

				drawerElement.classList.remove("active");
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [drawerRef]);

	return (
		<StyledDrawer ref={drawerRef}>
			<div
				onClick={(e) => action(e)}
				className={`off_canvars_overlay ${drawer ? "active" : ""}`}
			></div>
			<div className="offcanvas_menu">
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div
								className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
							>
								<a
									href="/"
									className="offcanvas-brand text-center mb-40 d-block"
								>
									<img src={logo} alt="" />
								</a>
								<div id="menu" className="text-left ">
									<ul className="offcanvas_main_menu">
										<li
											onClick={(e) => handler(e, "home")}
											id="home"
											className="menu-item-has-children active"
										>
											<span className="menu-expand"></span>
											<Link to="/">Home</Link>
										</li>
										<li
											onClick={(e) => handler(e, "Services")}
											id="Services"
											className="menu-item-has-children active"
										>
											<span className="menu-expand">
												<i className="fa fa-angle-down"></i>
											</span>
											<a href="/solutions/server-infrastructure">Solutions</a>
											<ul
												className="sub-menu"
												style={{
													height: item === "Services" ? itemSize : "0px",
												}}
											>
												<li>
													<Link
														preventScrollReset={false}
														to="/solutions/server-infrastructure"
													>
														Server Infrastructure
													</Link>
												</li>
												<li>
													<Link to="/solutions/endpoint-security">
														End Point Security
													</Link>
												</li>
												<li>
													<Link to="/solutions/network-infrastructure">
														Network Infrastructure
													</Link>
												</li>
												<li>
													<Link to="/solutions/modern-workplace">
														Modern Workplace
													</Link>
												</li>
												<li>
													<Link to="/solutions/strategy-and-consulting">
														Strategy and Consulting
													</Link>
												</li>
												<li>
													<Link to="/solutions/voice-solutions">
														Voice Solutions
													</Link>
												</li>
												<li>
													<Link to="/solutions/backup-solutions">
														Backup Solutions
													</Link>
												</li>
												<li>
													<Link to="/solutions/email-security">
														Email Security
													</Link>
												</li>
												<li>
													<Link to="/solutions/outsourced-it">
														Outsourced IT
													</Link>
												</li>
												<li>
													<Link to="/solutions/co-managed-it">
														Co-Managed IT
													</Link>
												</li>
											</ul>
										</li>
										<li
											onClick={(e) => handler(e, "ManagedServices")}
											id="ManagedServices"
											className="menu-item-has-children active"
										>
											<span className="menu-expand">
												<i className="fa fa-angle-down"></i>
											</span>
											<a href="/managed-services/pentesting">
												Managed Services
											</a>
											<ul
												className="sub-menu"
												style={{
													height: item === "ManagedServices" ? itemSize : "0px",
												}}
											>
												<li>
													<Link to="/managed-services/pentesting">
														Pentesting
													</Link>
												</li>
												<li>
													<Link to="/managed-services/cyber-incident-response">
														Cyber Incidient Response
													</Link>
												</li>
												<li>
													<Link to="/managed-services/managed-siem-and-soc">
														Managed SIEM and SOC
													</Link>
												</li>
												<li>
													<Link to="/managed-services/vulnerability-management">
														Vulnerability Management
													</Link>
												</li>
												<li>
													<Link to="/managed-services/cyber-security-awareness-training">
														Cyber Security Awareness Training
													</Link>
												</li>
												<li>
													<Link to="/managed-services/phishing-simulation">
														Phishing Simulation
													</Link>
												</li>
												<li>
													<Link to="/managed-services/dark-web-monitoring">
														Dark Web Monitoring
													</Link>
												</li>
												<li>
													<Link to="/managed-services/firewall-management">
														Firewall Management
													</Link>
												</li>
												<li>
													<Link to="/managed-services/threat-hunting">
														Threat Hunting
													</Link>
												</li>
											</ul>
										</li>
										<li
											onClick={(e) => handler(e, "cloud-services")}
											id="cloud-services"
											className="menu-item-has-children active"
										>
											<span className="menu-expand">
												<i className="fa fa-angle-down"></i>
											</span>
											<a href="/cloud-services/microsoft-365">Cloud Services</a>
											<ul
												className="sub-menu"
												style={{
													height: item === "cloud-services" ? itemSize : "0px",
												}}
											>
												<li>
													<Link to="/cloud-services/microsoft-365">
														Microsoft 365
													</Link>
												</li>
												<li>
													<Link to="/cloud-services/microsoft-azure">
														Microsoft Azure
													</Link>
												</li>
												<li>
													<Link to="/cloud-services/amazon-web-services">
														Amazon Web Services
													</Link>
												</li>
											</ul>
										</li>
										<li
											onClick={(e) => handler(e, "About")}
											id="About"
											className="menu-item-has-children active"
										>
											<span className="menu-expand">
												<i className="fa fa-angle-down"></i>
											</span>
											<a href="/about/our-story">About</a>
											<ul
												className="sub-menu"
												style={{
													height: item === "About" ? itemSize : "0px",
												}}
											>
												<li>
													<Link to="/about-us/our-story">About Us</Link>
												</li>

												<li>
													<Link to="/about-us/contact-us">Contact Us</Link>
												</li>
											</ul>
										</li>
									</ul>
								</div>

								<div className="footer-widget-info">
									<ul>
										<li className="mb-1">
											<i className="fa fa-envelope mr-2"></i>
											<img
												src={emailImage}
												style={{ width: "10rem" }}
												alt="Right Solutions Contact Email"
											/>
										</li>
										<li className="mb-1">
											<i className="fa fa-phone mr-2"></i>
											<img
												src={phoneImage}
												style={{ width: "8.25rem" }}
												alt="Right Solutions Contact Email"
											/>
										</li>
										<li className="mb-1">
											<div style={{ fontWeight: 600 }}>
												<i className="fa fa-map-marker-alt mr-2"></i> Cape Town
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</StyledDrawer>
	);
}

export default Drawer;
