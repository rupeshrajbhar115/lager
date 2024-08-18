// MODULES //
import { useState, useEffect } from "react";
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
import styles from "@/styles/pages/services.module.scss";

// IMAGES //
import BtnArrow from "../public/img/home/btn_arrow.svg";
import Close from "../public/img/services/close.png";
import Banner from "../public/img/services/banner.jpg";
import Services1 from "../public/img/services/services1.jpg";
import Services2 from "../public/img/services/services2.jpg";
import Services3 from "../public/img/services/services3.jpg";
import Services4 from "../public/img/services/services4.jpg";
import Services5 from "../public/img/services/services5.jpg";
import Services6 from "../public/img/services/services6.jpg";
import Services7 from "../public/img/services/services7.jpg";
import Services8 from "../public/img/services/services8.jpg";
import Services9 from "../public/img/services/services9.jpg";

// DATA //

/** Industry Page */
export default function ServicesPage() {
	const [openPopup, setOpenPopup] = useState(null);

	/** handleButtonClick */
	const handleButtonClick = (popupId) => {
		setOpenPopup(popupId);
		document.body.style.overflow = "hidden"; // Disable page scroll
	};

	/** closePopup */
	const closePopup = () => {
		setOpenPopup(null);
		document.body.style.overflow = ""; // Re-enable page scroll
	};
	const breadcrumbData = [{ name: "Service Support", link: "/services" }];
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Service Support"}
				Desc={"Service Support Desc"}
				OgImg={""}
				Url={"/"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.ServicesPage} pt_80`}>
				<section className={`${styles.banner}`}>
					<div className={`${styles.services_b} BreadCrumb`}>
						<BreadCrumb breadcrumbData={breadcrumbData} />
					</div>
					<img src={Banner.src} className={`${styles.banner_img} img-responsive`} />
					<div className={`${styles.banner_title}`}>
						<h2 className="text_xxl">Service Support</h2>
					</div>
				</section>
				<section>
					<div className="container">
						<div className={`${styles.services}`}>
							<p
								className={`${styles.services_para_info} text_xl pt_50 pb_20 toTop`}
								data-scroll
							>
								Welcome to LAGER, your ultimate destination for unrivalled technical
								support for all your bearing needs. Our team of German engineers
								operates within our very core, ready to tackle any technical issue you
								may encounter.
							</p>
							<p className="text_reg pb_50 toTop" data-scroll>
								We take pride in offering comprehensive training and consultancy
								services to our valued customers. Whether its guiding you through
								engaging bearing seminars, helping you make the right bearing
								selections, conducting thorough bearing damage analysis, or devising
								ingenious solutions to any bearing challenges, weve got you covered.
								Additionally, our focus on lubrication techniques aims to enlighten and
								empower bearing users, fostering greater awareness within the industry.
							</p>
							<h2 className="text_xxl toTop" data-scroll>
								Categories of services
							</h2>
							<div className={`${styles.services_cart_item} pt_20 pb_60`}>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services1.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title_btn}`}>
										<div className={`${styles.title}`}>
											<h5 className="text_lg pt_10">
												Co-engineering
												<br />
												activities
											</h5>
										</div>
										<div className={`${styles.btn}`}>
											<a onClick={() => handleButtonClick(1)}>
												<PrimaryButton download={BtnArrow.src} withoutAnimaction />
											</a>
										</div>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services2.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title_btn}`}>
										<div className={`${styles.title}`}>
											<h5 className="text_lg pt_10">
												Application <br />
												engineering
											</h5>
										</div>
										<div className={`${styles.btn}`}>
											<a onClick={() => handleButtonClick(2)}>
												<PrimaryButton download={BtnArrow.src} withoutAnimaction />
											</a>
										</div>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services3.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title_btn}`}>
										<div className={`${styles.title}`}>
											<h5 className="text_lg pt_10">
												Advanced calculation <br />
												capabilities
											</h5>
										</div>
										<div className={`${styles.btn}`}>
											<a onClick={() => handleButtonClick(3)}>
												<PrimaryButton download={BtnArrow.src} withoutAnimaction />
											</a>
										</div>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services4.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title_btn}`}>
										<div className={`${styles.title}`}>
											<h5 className="text_lg pt_10">
												Technical training and <br />
												development
											</h5>
										</div>
										<div className={`${styles.btn}`}>
											<a onClick={() => handleButtonClick(4)}>
												<PrimaryButton download={BtnArrow.src} withoutAnimaction />
											</a>
										</div>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services5.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title_btn}`}>
										<div className={`${styles.title}`}>
											<h5 className="text_lg pt_10">
												<div className={`${styles.title_btn}`}>
													<div className={`${styles.title}`}>
														<h5 className="text_lg pt_10">
															Innovative solutions / <br />
															Customised bearing products
														</h5>
													</div>
													<div className={`${styles.btn}`}>
														<a onClick={() => handleButtonClick(5)}>
															<PrimaryButton download={BtnArrow.src} withoutAnimaction />
														</a>
													</div>
												</div>
											</h5>
										</div>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services6.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title}`}>
										<h5 className="text_lg pt_10">
											<div className={`${styles.title_btn}`}>
												<div className={`${styles.title}`}>
													<h5 className="text_lg pt_10">
														New material <br />
														coating technology
													</h5>
												</div>
												<div className={`${styles.btn}`}>
													<a onClick={() => handleButtonClick(6)}>
														<PrimaryButton download={BtnArrow.src} withoutAnimaction />
													</a>
												</div>
											</div>
										</h5>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services7.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title}`}>
										<h5 className="text_lg pt_10">
											<div className={`${styles.title_btn}`}>
												<div className={`${styles.title}`}>
													<h5 className="text_lg pt_10">
														Life prediction and <br />
														application analysis
													</h5>
												</div>
												<div className={`${styles.btn}`}>
													<a onClick={() => handleButtonClick(7)}>
														<PrimaryButton download={BtnArrow.src} withoutAnimaction />
													</a>
												</div>
											</div>
										</h5>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services8.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title}`}>
										<h5 className="text_lg pt_10">
											<div className={`${styles.title_btn}`}>
												<div className={`${styles.title}`}>
													<h5 className="text_lg pt_10">
														Maintenance <br />
														solutions
													</h5>
												</div>
												<div className={`${styles.btn}`}>
													<a onClick={() => handleButtonClick(8)}>
														<PrimaryButton download={BtnArrow.src} withoutAnimaction />
													</a>
												</div>
											</div>
										</h5>
									</div>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Services9.src} className="img-responsive" alt="Industry1" />
									<div className={`${styles.title}`}>
										<h5 className="text_lg pt_10">
											<div className={`${styles.title_btn}`}>
												<div className={`${styles.title}`}>
													<h5 className="text_lg pt_10">
														Intelligent <br />
														bearing service
													</h5>
												</div>
												<div className={`${styles.btn}`}>
													<a onClick={() => handleButtonClick(9)}>
														<PrimaryButton download={BtnArrow.src} withoutAnimaction />
													</a>
												</div>
											</div>
										</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{openPopup === 1 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Co-engineering activities </h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 2 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Application engineering</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 3 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Advanced calculation capabilities</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 4 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Technical training and development</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 5 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">
									Innovative solutions / Customised bearing products
								</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 6 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">New material coating technology</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 7 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Life prediction and application analysis</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 8 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Maintenance solutions</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}

				{openPopup === 9 && (
					<div className={styles.popup}>
						<div className={styles.popup_wrapper}>
							<div className={styles.popup_content}>
								<h2 className="text_xxl">Intelligent bearing service</h2>
								<p className="text_reg ptb_20">
									Lager’s technical department enthusiastically engages in co-engineering
									and co-designing with customers - for new greenfield projects as well
									as existing applications. The collaboration is centred around
									leveraging the diverse domains of knowledge and expertise between both
									teams, fostering the opportunity to create valuable synergies.
									Together, we embrace the chance to combine our strengths and jointly
									achieve exceptional results in every endeavour. For new applications,
									we can offer technical advice regarding:
								</p>
								<ul>
									<li>
										Selection of bearing type, size, arrangement, fit with conjugate
										parts, internal clearance or preload, seals, and lubricant
									</li>
									<li>
										Calculation of actual bearing loads, residual internal clearance or
										preload after mounting and in operation, bearing starting and
										operating torque, operating temperature, etc.
									</li>
									<li>
										For machinery that’s already in operation, Lager can provide
										value-added suggestions for :
									</li>
									<li>
										Lubrication system and lubricants, in order to favour
										elastohydrodynamic conditions and decrease overall operating
										temperature.
									</li>
									<li>Regreasing intervals and grease amount to be used.</li>
									<li>Bearing handling and maintenance.</li>
								</ul>
								<div onClick={closePopup} className={`${styles.close}`}>
									<img src={Close.src} className="img-responsive" alt="close" />
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
