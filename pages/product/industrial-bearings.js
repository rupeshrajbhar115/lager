// MODULES //
import { useEffect, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "../../src/components/Breadcrumb";
import PrimaryButton from "../../src/components/primary-button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/product-listing-page.module.scss";

// IMAGES //

import BtnArrow from "../../public/img/home/btn_arrow.svg";
import download_img from "../../public/img/home/download.svg";
import BallBearings1 from "../../public/img//listing_page/ball_bearings_1.png";
import BallBearings2 from "../../public/img//listing_page/ball_bearings_2.png";
import BallBearings3 from "../../public/img//listing_page/ball_bearings_3.png";
import BallBearings4 from "../../public/img//listing_page/ball_bearings_4.png";
import BallBearings5 from "../../public/img//listing_page/ball_bearings_5.png";
import BallBearings6 from "../../public/img//listing_page/ball_bearings_6.png";
import BallBearings7 from "../../public/img//listing_page/ball_bearings_7.png";
import BallBearings8 from "../../public/img//listing_page/ball_bearings_8.png";

// DATA //

/** product listing Page */
export default function ProductListingPage() {
	const [activeTab, setActiveTab] = useState("tab1");
	const [activeIndex, setActiveIndex] = useState(0);

	/** handleToggle */
	const handleToggle = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};
	const breadcrumbData = [
		{ name: "Our Products" },
		{ name: "Industrial Bearing", link: "/product/industrial-bearings" },
	];
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Product"} Desc={"Product Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.ProductListingPage} pt_80`}>
				<div className={`${styles.product} BreadCrumb1`}>
					<BreadCrumb breadcrumbData={breadcrumbData} black />
				</div>
				<section className={`${styles.product_section} pt_50`}>
					<div className="container">
						<h2 className="text_xxl">Multi-dimensional bearing for all Industries</h2>
						<div className={`${styles.product_tab_btn} ptb_40`}>
							<div className={`${styles.tab_headers}`}>
								<div
									className={`${styles.tab_button} ${
										activeTab === "tab1" ? "active_tab" : ""
									}`}
									onClick={() => setActiveTab("tab1")}
								>
									Industrial Bearings
								</div>
								<div
									className={`${styles.tab_button} ${
										activeTab === "tab2" ? "active_tab" : ""
									}`}
									onClick={() => setActiveTab("tab2")}
								>
									Automotive Bearings
								</div>
								<div
									className={`${styles.tab_button} ${
										activeTab === "tab3" ? "active_tab" : ""
									}`}
									onClick={() => setActiveTab("tab3")}
								>
									Oil Seals
								</div>
							</div>
						</div>
						<h6 className={`${styles.sub_titlt} text_xl pb_50`}>
							Best-in-class bearings for all your industrial needs.
						</h6>
					</div>
					<div className={`${styles.product_tab_content} ptb_80`}>
						<div className="container">
							<div className={`${styles.tab_content}`}>
								{activeTab === "tab1" && (
									<div className={`${styles.accordion_section}`}>
										<div className={`${styles.accordion}`}>
											<div className="accordion">
												{/* Accordion Item 1 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(0)}>
														<h2 className={`add_dots ${activeIndex === 0 ? "active" : ""}`}>
															Ball Bearings
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 0 ? "active" : ""
														}`}
													>
														<p>Deep Groove Ball Bearings</p>
														<p>Single & Double Row Angular Contact Ball Bearings</p>
														<p>Spherical Ball Bearings</p>
														<p>Thrust Ball Bearings</p>
														<p>Super Precision Ball Bearings</p>
														<p>Small and Miniature ball bearings</p>
														<p>DSelf Aligning Ball Bearingseep</p>
														<p>Double Row Beairngs Deep Groove Ball Beairngs </p>
													</div>
												</div>

												{/* Accordion Item 2 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(1)}>
														<h2 className={`add_dots ${activeIndex === 1 ? "active" : ""}`}>
															Roller Bearings
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 1 ? "active" : ""
														}`}
													>
														<p>Spherical Roller Bearings</p>
														<p>Cylindrical Roller Bearings</p>
														<p>Tapered Roller Bearings</p>
														<p>Super Precision Roller Bearings</p>
														<p>Thrust Roller Bearings</p>
														<p>Needle Roller Bearings</p>
													</div>
												</div>

												{/* Accordion Item 3 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(2)}>
														<h2 className={`add_dots ${activeIndex === 2 ? "active" : ""}`}>
															Bearing Units
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 2 ? "active" : ""
														}`}
													>
														<p>Radial Insert beairngs</p>
														<p>Radial Insert Block Units</p>
													</div>
												</div>
												{/* Accordion Item 4 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(3)}>
														<h2 className={`add_dots ${activeIndex === 3 ? "active" : ""}`}>
															Stainless steel Ball bearings units
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 3 ? "active" : ""
														}`}
													>
														<p>Stainless Steel radial insert ball bearings</p>
														<p>Stainless steel radial insert Units</p>
													</div>
												</div>
												{/* Accordion Item 5 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(4)}>
														<h2 className={`add_dots ${activeIndex === 4 ? "active" : ""}`}>
															High Temperature Bearings & Units
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 4 ? "active" : ""
														}`}
													>
														<p>High-temp Deep Groove Ball Bearings</p>
														<p>Deep Groove Ball Bearings for high speeds</p>
														<p>Stainless Steel Deep Groove Ball Bearings</p>
														<p>Stainless Steel Thin Section Ball Bearings</p>
														<p>Open Spherical Roller Bearings</p>
														<p>Sealed Spherical Roller Bearings</p>
														<p>High-temp Radial Insert Ball Bearings</p>
														<p>Radial Insert Ball Bearings for high speeds</p>
													</div>
												</div>
												{/* Accordion Item 6 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(5)}>
														<h2 className={`add_dots ${activeIndex === 5 ? "active" : ""}`}>
															Linear Bearings
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 5 ? "active" : ""
														}`}
													>
														<p>Ballscrew Bearing</p>
														<p>Crossed Roller Bearing CRB Standard Type</p>
														<p>CRB Thin type Crossed Roller Bearing</p>
														<p>Linear Bearing</p>
														<p>Support Unit</p>
													</div>
												</div>
												{/* Accordion Item 7 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(6)}>
														<h2 className={`add_dots ${activeIndex === 6 ? "active" : ""}`}>
															Cam Followers / ROD Ends
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 6 ? "active" : ""
														}`}
													>
														<p>Standard Cam Followers</p>
														<p>Solid Eccentric Stud Cam Followers</p>
														<p>Eccentric Cam Followers</p>
														<p>Thrust Disk Cam Followers</p>
														<p>Centralized Lubrication Cam Followers</p>
														<p>Easy Mounting Cam Followers</p>
														<p>C-Lube Cam Followers</p>
														<p>Miniature Cam Followers</p>
														<p>Miniature Cam Followers With Thrust Washers</p>
														<p>Inch Series Cam Followers</p>
														<p>Heavy Duty Cam Followers</p>
														<p>C-Lube Units</p>
													</div>
												</div>
												{/* Accordion Item 8 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(7)}>
														<h2 className={`add_dots ${activeIndex === 7 ? "active" : ""}`}>
															Linear Guideways & Rails
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 7 ? "active" : ""
														}`}
													>
														<p>AG Series AG series Angle Linear Guideway</p>
														<p>
															CG Series Superior Rolling Moment with Cover Strip Linear
															Guideway
														</p>
														<p>HG Series Heavy Load Ball Type Linear Guideway</p>
														<p>EG Series Low Profile Ball Type Linear Guideway</p>
														<p>WE Series Four Row Wide Rail Type Linear Guideway</p>
														<p>MG Series Miniature Linear Guideway</p>
														<p>RG Series High rigidity Roller Type Linear Guideway</p>
														<p>
															QH Series Quiet Linear Guideway, with SynchMotion Technology
														</p>
														<p>QE Series Quiet Linear Guideway</p>
														<p>QW Series Wide Rail Linear Guideway</p>
														<p>QR Series Quiet Roller Type Linear Guideway</p>
														<p>E2 Series Self lubrication Kit for Linear Guideway</p>
														<p>PG Series Positioning Linear Guideway</p>
														<p>StanSE Series Metallic End Cap Linear Guidewaydard</p>
													</div>
												</div>
												{/* Accordion Item 9 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(8)}>
														<h2 className={`add_dots ${activeIndex === 8 ? "active" : ""}`}>
															Ball Nuts & Screws
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 8 ? "active" : ""
														}`}
													>
														<p>https://www.hiwin.tw</p>
													</div>
												</div>
												{/* Accordion Item 10 */}
												<div className="accordion-item">
													<div className="accordion-header" onClick={() => handleToggle(9)}>
														<h2 className={`add_dots ${activeIndex === 9 ? "active" : ""}`}>
															Assembly & Maintenance Products
														</h2>
													</div>
													<div
														className={`accordion-content ${
															activeIndex === 9 ? "active" : ""
														}`}
													>
														<p>Induction Heating Devices</p>
														<p>Bearings Fastening Sets</p>
														<p>Greases</p>
														<p>Spray Products</p>
													</div>
												</div>
											</div>
										</div>
										<div className={`${styles.accordion_info}`}>
											<h2 className="text_xxl">Ball Bearings</h2>
											<div className={`${styles.para_btn} pt_20 pb_40`}>
												<div className={`${styles.para}`}>
													<p className="text_reg">
														Ball Bearings use balls as rolling elements. They are
														characterised by point contact between the balls and the raceways.
														As a rule, ball bearings can rotate very quickly but cannot
														support substantial loads.
													</p>
												</div>
												<div className={`${styles.btn}`}>
													<a>
														<PrimaryButton
															download={download_img.src}
															title="Download Catalogue"
														/>
													</a>
												</div>
											</div>
											<div className={`${styles.product_section}`}>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings1.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Deep Groove Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a href="/product/product-inside1">
															<PrimaryButton
																download={BtnArrow.src}
																withoutAnimaction
																smallarrow
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																withoutAnimaction
																smallarrow
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings2.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Single & Double Row Angular Contact Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a href="/product/product-inside2">
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings3.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Spherical Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a href="/product/product-inside3">
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings4.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Thrust Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a href="/product/product-inside4">
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings5.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Super Precision Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a href="/product/product-inside5">
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings6.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Small and Miniature ball bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a>
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings7.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Self Aligning Ball Bearings</h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a>
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
												<div className={`${styles.product_box}`}>
													<div className={`${styles.product_img}`}>
														<img
															src={BallBearings8.src}
															className="img-responsive"
															alt="BallBearings1"
														/>
													</div>
													<h6>Double Row Beairngs Deep Groove Ball Beairngs </h6>
													<div className={`${styles.btn_section} pt_20`}>
														<a>
															<PrimaryButton
																download={BtnArrow.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
														<a>
															<PrimaryButton
																download={download_img.src}
																smallarrow
																withoutAnimaction
															/>
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								)}
								{activeTab === "tab2" && (
									<div className="tab-pane">
										<h2>Content for Tab 2</h2>
										<p>This is the content for Tab 2.</p>
									</div>
								)}
								{activeTab === "tab3" && (
									<div className="tab-pane">
										<h2>Content for Tab 3</h2>
										<p>This is the content for Tab 3.</p>
									</div>
								)}
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
