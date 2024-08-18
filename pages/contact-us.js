// MODULES //
import { useEffect } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "../src/components/Breadcrumb";
import PrimaryButton from "../src/components/primary-button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Contact.module.scss";

// IMAGES //
import BtnArrow from "../public/img/home/btn_arrow.svg";
import Loction from "../public/img/services/lac.png";
import Mail from "../public/img/services/mail.png";
import Phone from "../public/img/services/phone.png";

// DATA //

/** Industry Page */
export default function ContactPage() {
	const breadcrumbData = [{ name: "Contact", link: "/contact-us" }];
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Contact"} Desc={"Contact Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.ContactPage} pt_80`}>
				<div className={`${styles.product} BreadCrumb1`}>
					<BreadCrumb breadcrumbData={breadcrumbData} black />
				</div>
				<section>
					<div className="container">
						<h2 className="text_xxl pb_10">Get in touch</h2>
						<p className="text_lg pb_60">
							Contact us for any enquiry, support, feedback or friction.
						</p>
						<div className={`${styles.contact_section} pb_80`}>
							<div className={`${styles.contact_info}`}>
								<ul className="pb_40">
									<li className="pb_10">
										<img src={Loction.src} className="img-responsive" alt="loaction" />
										<span>Lager, Germany</span>
									</li>
									<li>Special bearing manufacturing facility & Technical team unit</li>
								</ul>
								<ul className="pb_40">
									<li className="pb_10">
										<img src={Loction.src} className="img-responsive" alt="loaction" />
										<span>Lager, India</span>
									</li>
									<li>Global warehouse & logistical hub</li>
								</ul>
								<ul className="pb_40">
									<li className="pb_10">
										<img src={Loction.src} className="img-responsive" alt="loaction" />
										<span>Lager, China</span>
									</li>
									<li>
										P1 & P2 manufacturing
										<br /> facilities
									</li>
								</ul>
							</div>
							<div className={`${styles.contact_form}`}>
								<ul className="pb_30">
									<li>
										<a href="mailto:info@lagerbearings.com">
											<img src={Mail.src} className="img-responsive" alt="Mail" />
											info@lagerbearings.com
										</a>
									</li>
									<li>
										<a href="tel:+91 70219 76314 ">
											<img src={Phone.src} className="img-responsive" alt="Mail" />
											<span>+91 70219 76314</span>
										</a>
									</li>
								</ul>
								<div className={`${styles.form}`}>
									<form className={`${styles.form_main}`}>
										<div className={`${styles.form_group}`}>
											<div className={`${styles.form_field}`}>
												<input className="" type="text" name="Name" placeholder="Name*" />
											</div>
											<div className={`${styles.form_field}`}>
												<input
													className=""
													type="text"
													name="Country"
													placeholder="Country*"
												/>
											</div>

											<div className={`${styles.form_field}`}>
												<input
													className=""
													type="text"
													name="Company"
													placeholder="Company*"
												/>
											</div>
											<div className={`${styles.form_field}`}>
												<input
													className=""
													type="text"
													name="url"
													placeholder="Website URL*"
												/>
											</div>
											<div className={`${styles.form_field}`}>
												<input
													className=""
													type="email"
													name="Email"
													placeholder="Email*"
												/>
											</div>
											<div className={`${styles.form_field}`}>
												<input
													className=""
													type="text"
													name="contact"
													placeholder="Contact Number*"
												/>
											</div>
											<div className={`${styles.form_field_text}`}>
												<textarea
													className=""
													type="text"
													name="msg"
													placeholder="Message"
												></textarea>
											</div>
										</div>
										<div className={`${styles.submit_button} pt_20`}>
											<button>
												<PrimaryButton download={BtnArrow.src} title="Submit" />
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
