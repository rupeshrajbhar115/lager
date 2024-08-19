// MODULES //
import { useEffect } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "../src/components/Breadcrumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrimaryButton from "../src/components/primary-button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/production.module.scss";

// IMAGES //
import prev_arrow from "../public/img/arrow_left.png";
import next_arrow from "../public/img/arrow_right.png";
import BtnArrow from "../public/img/home/btn_arrow.svg";
import Banner from "../public/img/production/banner.jpg";
import ResearchImg from "../public/img/production/research_img.jpg";
import ProcessImg1 from "../public/img/production/process_img_1.jpg";
import ProcessImg2 from "../public/img/production/process_img_2.jpg";
import ProcessImg3 from "../public/img/production/process_img_3.jpg";
import ProcessImg4 from "../public/img/production/process_img_4.jpg";
import ProcessImg5 from "../public/img/production/process_img_5.jpg";
import ProcessImg6 from "../public/img/production/process_img_6.jpg";
import ProcessImg7 from "../public/img/production/process_img_7.jpg";
import Technology from "../public/img/production/technology.jpg";

import Industry1 from "../public/img/production/industry1.jpg";
import Industry2 from "../public/img/production/industry2.jpg";
import Industry3 from "../public/img/production/industry3.jpg";
import Industry4 from "../public/img/production/industry4.jpg";
import Industry5 from "../public/img/production/industry5.jpg";
import Industry6 from "../public/img/production/industry6.jpg";
import Industry7 from "../public/img/production/industry7.jpg";
import Industry8 from "../public/img/production/industry8.jpg";
import Industry9 from "../public/img/production/industry9.jpg";
import Industry10 from "../public/img/production/industry10.jpg";

import QualityImg1 from "../public/img/production/quality_img_1.jpg";
import QualityImg2 from "../public/img/production/quality_img_2.jpg";
import Link from "next/link";

// DATA //

/** Production Page */
export default function ProductionPage() {
	const breadcrumbData = [{ name: "Production", link: "/production" }];
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	var settings = {
		// slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: true,
		// onEdge: true,

		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
		],
		// prevArrow: (
		// 	<button className={`${styles.prevarrow} slick-arrow`}>
		// 		<img src={prev_arrow.src} alt="arrow" />
		// 	</button>
		// ),
		// nextArrow: (
		// 	<button className={`${styles.nextarrow} slick-arrow`}>
		// 		<img src={next_arrow.src} alt="arrow" />
		// 	</button>
		// ),
	};

	var settings1 = {
		// slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: false,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: true,
		// onEdge: true,

		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				},
			},
		],
		prevArrow: (
			<button className={`${styles.prevarrow} slick-arrow`}>
				<img src={prev_arrow.src} alt="arrow" />
			</button>
		),
		nextArrow: (
			<button className={`${styles.nextarrow} slick-arrow`}>
				<img src={next_arrow.src} alt="arrow" />
			</button>
		),
	};

	return (
		<div>
			{/* Metatags */}
			<MetaTags
				Title={"Production"}
				Desc={"Production Desc"}
				OgImg={""}
				Url={"/"}
			/>

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.ProductionPage} pt_80`}>
				<section className={`${styles.banner}`}>
					<div className={`${styles.industry_mro} BreadCrumb`}>
						<BreadCrumb breadcrumbData={breadcrumbData} />
					</div>
					<img src={Banner.src} className={`${styles.banner_img} img-responsive`} />
					<div className={`${styles.banner_title}`}>
						<h2 className="text_xxl">Production</h2>
					</div>
				</section>
				<section>
					<div className="container">
						<p
							className={`${styles.industry_para_info} text_xl ptb_50 toTop`}
							data-scroll
						>
							We at Lager, maintain an in-house production process to ensure product
							quality, manage orders flexibly, and respond promptly to customer needs.
							Our technical department oversees each project from development,
							leveraging the expertise of German design and engineering. Our strength
							lies in adopting lean production, reflecting our commitment to meeting
							all your needs.
						</p>
					</div>
				</section>
				<section>
					<div className="container">
						<div className={`${styles.research_dev}`}>
							<h2 className="text_xxl toTop" data-scroll>
								Research & Development
							</h2>
							<p
								className={`${styles.research_para} text_reg pt_10 toTop`}
								data-scroll
							>
								Our state-of-the-art Technical Centre is a testament to our commitment
								to pushing the boundaries of bearing technology. With a team of 300
								expert engineers, weve generated over 170 patents, including 10
								groundbreaking inventions. Our specialised institutes collaborate to
								deliver unparalleled performance. With cutting-edge labs and rigorous
								testing, we ensure the bearings excel in durability, efficiency, and
								precision.
							</p>
							<div className={`${styles.research_dev_section} pt_40 pb_100`}>
								<div className={`${styles.research_img} toTop`} data-scroll>
									<img
										src={ResearchImg.src}
										className="img-responsive"
										alt="ResearchImg"
									/>
								</div>
								<div className={`${styles.research_info}`}>
									<div className={`${styles.research_row_1}`}>
										<h5 className="toTop" data-scroll>
											5 Specialised Institutes
										</h5>
										<ul className="toTop" data-scroll>
											<li> Bearing Design</li>
											<li> Process Research</li>
											<li> Material Research</li>
											<li>Equipment</li>
											<li> Application Software Research</li>
										</ul>

										<h5 className="pt_50 toTop" data-scroll>
											1 Library
										</h5>
										<ul className="toTop" data-scroll>
											<li> Science Library</li>
										</ul>
									</div>
									<div className={`${styles.research_row_1}`}>
										<h5 className="toTop" data-scroll>
											4 Research Labs
										</h5>
										<ul className="toTop" data-scroll>
											<li> Material Inspection</li>
											<li> Heat Treatment Lab</li>
											<li> Bearing Test Lab</li>
											<li> Bearing Failure Analysis</li>
										</ul>

										<h5 className="pt_80 toTop" data-scroll>
											Advanced engineering
										</h5>
										<ul className="toTop" data-scroll>
											<li> ANSYS and Romax</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.process} pb_100`}>
					<div className="container">
						<h2 className="text_xxl pb_40 toTop" data-scroll>
							The process
						</h2>
					</div>
					<div className={`${styles.process_wrapper} toTop`} data-scroll>
						<Slider {...settings}>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg1.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">Raw material</h5>
									<h6 className="text_lg">Selection of high-quality materials.</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg2.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">Forging</h5>
									<h6 className="text_lg">Shaping and softening the material.</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg3.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">CNC turning</h5>
									<h6 className="text_lg">
										Precision machining for accurate dimensions.
									</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg4.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">Heat treatment</h5>
									<h6 className="text_lg">Enhancing hardness and durability.</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg5.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">CNC grinding</h5>
									<h6 className="text_lg">Fine-tuning for perfect surface finish.</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg6.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">Lapping</h5>
									<h6 className="text_lg">
										For applications demanding exceptional micro geometric surface
										roughness.
									</h6>
								</div>
							</div>
							<div className={`${styles.process_section}`}>
								<div className={`${styles.process_img}`}>
									<img
										src={ProcessImg7.src}
										className="img-responsive"
										alt="ProcessImg1"
									/>
								</div>
								<div className={`${styles.process_info}`}>
									<h5 className="text_xl pb_20">Assembly</h5>
									<h6 className="text_lg">Final assembly of bearing components.</h6>
								</div>
							</div>
						</Slider>
					</div>
				</section>
				<section>
					<div className="container">
						<div className={`${styles.technology} pt_50 pb_100`}>
							<div className={`${styles.technology_img} toTop`} data-scroll>
								<img src={Technology.src} className="img-responsive" alt="Technology" />
							</div>
							<div className={`${styles.technology_info} `}>
								<h2 className="text_xxl pb_20 toTop" data-scroll>
									Process technology
								</h2>
								<p className="text_reg pb_10 toTop" data-scroll>
									Lager utilises advanced vertical grinding mills from Germany and Japan,
									ensuring economic batch sizes, high machining accuracy, and component
									interchangeability. The streamlined process enables one-clamping
									grinding, reducing alignment and clamping while maximising high-speed
									grinding efficiency. World-class heat treatment equipment supports
									carburizing, martensite, and bainite quenching. We prioritise
									human-machine engineering standards, form efficient production lines,
									and employ online data collection and measurement for fast,
									energy-saving, and safe operations.
								</p>
								<p className="text_reg toTop pb_20" data-scroll>
									Our enclosed and air-conditioned workshop employs oil mist dust
									collection, promoting a clean environment. With self-processed
									spherical, cylindrical, and tapered rollers, we prioritise security,
									efficiency, and energy-saving factors through variable frequency motors
									and energy-saving air conditioners, achieving a unified approach to
									energy efficiency and environmental protection. Our focus on delivery
									time, competitive pricing, and overall cost-performance maximises
									customer value.
								</p>
								<Link href="#">
									<a>
										<PrimaryButton download={BtnArrow.src} title=" Read More" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section
					className={`${styles.industrial} ptb_80 industrial toTop`}
					data-scroll
				>
					<div className="container">
						<h2 className="toTop" data-scroll>
							Production equipment
						</h2>
						<div className={`${styles.industrial_section} toTop`} data-scroll>
							<Slider {...settings1}>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry1.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Japanese vertical <br /> grinder 6T
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry2.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Japanese vertical
										<br />
										grinder 12T
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry3.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										German kehren <br />
										vertical grinder
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry4.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Roundness
										<br />
										metre Taylor
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry5.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Ultrasonic
										<br />
										inspection GE
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry6.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Roughness <br />
										metre Tokyo
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry7.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Germany Zeiss <br />
										microscopes
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry8.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Length measuring <br />
										instrument Swiss trimos
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry9.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										Coordinates <br />
										measuring machine
									</h4>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.cardImg}`}>
										<img src={Industry10.src} className="img-responsive" />
									</div>
									<h4 className="text_lg">
										American hot
										<br />
										spot spectrometer
									</h4>
								</div>
							</Slider>
						</div>
					</div>
				</section>

				<section className={`${styles.quality} ptb_100`}>
					<div className="container">
						<h2 className="text_xxl pb_10 toTop" data-scroll>
							Quality control
						</h2>
						<p className="text_reg pb_40 toTop" data-scroll>
							With continuous innovation and improvement, we provide
							<br /> customers with world-class products and value services.
						</p>
						<div className={`${styles.quality_section}`}>
							<div className={`${styles.quality_img} toTop`} data-scroll>
								<img
									src={QualityImg1.src}
									className="img-responsive"
									alt="QualityImg1"
								/>
							</div>
							<div className={`${styles.quality_info} toTop`} data-scroll>
								<h5 className="text_xl pb_20">
									Constant temperature and
									<br /> humidity metrology room
								</h5>
								<p className="text_reg">
									To meet the high processing accuracy demands in bearing manufacturing,
									a constant temperature and humidity metrology room is crucial. Metal
									materials thermal expansion and cold shrinkage affect accuracy, causing
									temperature errors in measurements. The room, equipped with a HAIRF
									constant temperature and humidity machine, maintains a controlled
									temperature of 20 ℃± 1 ℃ and humidity of 40% - 50%. This minimises the
									impact of ambient temperature on measurements, ensuring Hanking
									precision bearings achieve world-class product status.
								</p>
							</div>
						</div>
						<div className={`${styles.quality_section} pt_80`}>
							<div className={`${styles.quality_info} toTop`} data-scroll>
								<h5 className="text_xl pb_20">Self-made process control</h5>
								<p className="text_reg">
									Through self-inspection and self-control, we ensure that the whole
									staff can participate and achieve the following purposes:
								</p>
								<ul>
									<li>
										Make the production staff fully understand the product control scope.
									</li>
									<li>
										Make the production staff respond immediately to the abnormality.
									</li>
									<li>
										Make the production staff fully understand the current product quality
										situation.
									</li>
									<li>Make improvement proposals according to the current situation.</li>
								</ul>
							</div>
							<div className={`${styles.quality_img} toTop`} data-scroll>
								<img
									src={QualityImg2.src}
									className="img-responsive"
									alt="QualityImg1"
								/>
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
