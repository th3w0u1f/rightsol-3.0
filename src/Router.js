import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./routes/loading/Loading";

export default function Routers() {
	const Home = lazy(() => import("./routes/home"));
	const ServerInfrastructure = lazy(() =>
		import("./routes/solutions/server-infrastructure")
	);
	const NotFound = lazy(() => import("./routes/404"));
	const EndpointSecurity = lazy(() =>
		import("./routes/solutions/endpoint-security")
	);
	const NetworkInfrastructure = lazy(() =>
		import("./routes/solutions/network-infrastructure")
	);
	const ModernWorkplace = lazy(() =>
		import("./routes/solutions/modern-workplace")
	);
	const StrategyAndConsulting = lazy(() =>
		import("./routes/solutions/strategy-and-consulting")
	);
	const VoiceSolutions = lazy(() =>
		import("./routes/solutions/voice-solutions")
	);
	const BackupSolutions = lazy(() =>
		import("./routes/solutions/backup-solutions")
	);
	const EmailSecurity = lazy(() => import("./routes/solutions/email-security"));
	const OutsourcedIT = lazy(() => import("./routes/solutions/outsourced-it"));
	const CoManagedIT = lazy(() => import("./routes/solutions/co-managed-it"));
	const Pentesting = lazy(() => import("./routes/managed-services/pentesting"));
	const CyberIncidentResponse = lazy(() =>
		import("./routes/managed-services/cyber-incident-response")
	);
	const ManagedSiemAndSoc = lazy(() =>
		import("./routes/managed-services/managed-siem-and-soc")
	);
	const VulnerabilityManagement = lazy(() =>
		import("./routes/managed-services/vulnerability-management")
	);
	const CyberSecurityAwarenessTraining = lazy(() =>
		import("./routes/managed-services/cyber-security-awareness-training")
	);
	const PhishingSimulation = lazy(() =>
		import("./routes/managed-services/phishing-simulation")
	);
	const DarkWebMonitoring = lazy(() =>
		import("./routes/managed-services/dark-web-monitoring")
	);
	const FirewallManagement = lazy(() =>
		import("./routes/managed-services/firewall-management")
	);
	const ThreatHunting = lazy(() =>
		import("./routes/managed-services/threat-hunting")
	);
	const Microsoft365 = lazy(() =>
		import("./routes/cloud-services/microsoft-365")
	);
	const MicrosoftAzure = lazy(() =>
		import("./routes/cloud-services/microsoft-azure")
	);
	const AmazonWebServices = lazy(() =>
		import("./routes/cloud-services/amazon-web-services")
	);
	const OurStory = lazy(() => import("./routes/about-us/our-story"));
	const ContactUs = lazy(() => import("./routes/about-us/contact-us"));

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/solutions/server-infrastructure"
					element={<ServerInfrastructure />}
				/>
				<Route
					path="/solutions/endpoint-security"
					element={<EndpointSecurity />}
				/>
				<Route
					path="/solutions/network-infrastructure"
					element={<NetworkInfrastructure />}
				/>
				<Route
					path="/solutions/modern-workplace"
					element={<ModernWorkplace />}
				/>
				<Route
					path="/solutions/strategy-and-consulting"
					element={<StrategyAndConsulting />}
				/>
				<Route path="/solutions/voice-solutions" element={<VoiceSolutions />} />
				<Route
					path="/solutions/backup-solutions"
					element={<BackupSolutions />}
				/>
				<Route path="/solutions/email-security" element={<EmailSecurity />} />
				<Route path="/solutions/outsourced-it" element={<OutsourcedIT />} />
				<Route path="/solutions/co-managed-it" element={<CoManagedIT />} />
				<Route path="/managed-services/pentesting" element={<Pentesting />} />
				<Route
					path="/managed-services/cyber-incident-response"
					element={<CyberIncidentResponse />}
				/>
				<Route
					path="/managed-services/managed-siem-and-soc"
					element={<ManagedSiemAndSoc />}
				/>
				<Route
					path="/managed-services/vulnerability-management"
					element={<VulnerabilityManagement />}
				/>
				<Route
					path="/managed-services/cyber-security-awareness-training"
					element={<CyberSecurityAwarenessTraining />}
				/>
				<Route
					path="/managed-services/phishing-simulation"
					element={<PhishingSimulation />}
				/>
				<Route
					path="/managed-services/dark-web-monitoring"
					element={<DarkWebMonitoring />}
				/>
				<Route
					path="/managed-services/firewall-management"
					element={<FirewallManagement />}
				/>
				<Route
					path="/managed-services/threat-hunting"
					element={<ThreatHunting />}
				/>
				<Route
					path="/cloud-services/microsoft-365"
					element={<Microsoft365 />}
				/>
				<Route
					path="/cloud-services/microsoft-azure"
					element={<MicrosoftAzure />}
				/>
				<Route
					path="/cloud-services/amazon-web-services"
					element={<AmazonWebServices />}
				/>
				<Route path="/about-us/our-story" element={<OurStory />} />
				<Route path="/about-us/contact-us" element={<ContactUs />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/loading" element={<Loading />} />
			</Routes>
		</Suspense>
	);
}
