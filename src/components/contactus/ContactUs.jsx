import React, { useState, useRef } from "react";
import { StyledContactUs } from "./styled";
// import contactImage from "./../../assets/contact.jpg";
import rsLogo from "./../../assets/logos/rs-logo.svg";
import phoneImage from "./../../assets/email/phone.png";
import emailImage from "./../../assets/email/hello.png";

import Button from "../button";
import Divider from "../divider";
import Parallax from "../parallax/Parallax";

export default function ContactUs() {
	const [email, setEmail] = useState({});

	const form = useRef();

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		console.log(e.target);
		setEmail({ ...email, [name]: value });
	};

	const year = new Date().getFullYear();

	return (
		<Parallax id="contact-us">
			<StyledContactUs>
				<section
					id="contact-us"
					style={{ backgroundColor: "white" }}
					className="contact-page ptp-3 pbm-2 px-12 bottom-spacer"
				>
					<div className="contact-row">
						<div className="contact-form-left">
							<div className="contact-form-left-content">
								<Parallax id={"tag-line-container"}>
									<div className="tag-line-container">
										<div className="contact-logo">
											<img
												src={rsLogo}
												alt="Right Solutions Logo"
												loading="lazy"
											/>
										</div>
										<h3 className="contact-left-tag-line">Let us secure IT!</h3>
										<div className="contact-info-container">
											<div className="contact-phone">
												<i className="fas fa-phone-alt"></i>{" "}
												<img
													src={phoneImage}
													className="ml-10"
													style={{ width: "8.5rem" }}
													alt="Right Solutions Phone Number"
												/>
											</div>
											<div className="contact-email">
												<i className="fas fa-envelope"></i>{" "}
												<img
													src={emailImage}
													className="ml-10"
													style={{ width: "10rem" }}
													alt="Right Solutions Contact Email"
												/>
											</div>
											<div className="contact-location">
												<i className="fas fa-map-marker-alt mr-10"></i> Cape
												Town
											</div>
										</div>
									</div>
								</Parallax>
							</div>
						</div>
						<div className="contact-form-right">
							<Parallax id={"contact-form-area"}>
								<div className="contact-form-area ml-40 rml-0 rmt-55">
									<h3 className="contact-title">Contact Us Today</h3>
									<p className="contact-sub-text">
										We're here to help. Contact us now!
									</p>
									<form
										ref={form}
										id="email-form"
										className="comment-form mt-35"
										name="email-form"
										// action="#"
										method="post"
										// onSubmit={onSubmitHandler}
									>
										<div className="row clearfix justify-content-center">
											<div className="col-sm-6">
												<div className="form-group name-form">
													<label
														htmlFor="full-name"
														className="contact-label contact-name-label"
													>
														Your Full Name
													</label>
													<input
														type="text"
														id="full-name"
														name="user_name"
														onChange={onChangeHandler}
														className="form-control contact-input"
														value={email.user_name || ""}
														placeholder="John Doe"
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group email-form">
													<label
														htmlFor="email"
														className="contact-label contact-email-label"
													>
														Your Email Address
													</label>
													<input
														type="email"
														id="email"
														name="user_email"
														onChange={onChangeHandler}
														className="form-control contact-input"
														value={email.user_email || ""}
														placeholder="john.doe@email.com"
														required
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-group message-form">
													<label
														htmlFor="message"
														className="contact-label contact-message-label"
													>
														Your Message
													</label>
													<textarea
														name="message"
														id="message"
														className="form-control contact-input"
														rows="4"
														value={email.message || ""}
														onChange={onChangeHandler}
														placeholder="Hi, I'm Jack."
														required
														type="text"
													></textarea>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-group mb-0">
													{/* <ReCAPTCHA sitekey={siteKey} onChange={onChange} /> */}
													<div className="contact-submit-container">
														<Button
															className="contact-button"
															text="Send Message"
															buttonColor="button-blue"
															buttonContainer="contact-button-container"
															// disabled={!captcha}
															type="submit"
														>
															Send Message
														</Button>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</Parallax>
						</div>
					</div>
					<Divider />
					<div className="web-creator">
						<p className="web-creator-tag">
							Copyright @ {year} Right Solutions All Rights Reserved | Designed
							and developed by &copy;{" "}
							<a
								href="https://woulfdigitalstudio.co.za"
								target="_blank"
								rel="noreferrer"
							>
								Woulf Digital Studio
							</a>
						</p>
					</div>
				</section>
			</StyledContactUs>
		</Parallax>
	);
}
