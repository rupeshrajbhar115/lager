// MODULES //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import styles from "@/styles/pages/product.module.scss";

// IMAGES //
import prev_arrow from "../../public/img/arrow_left.png";
import next_arrow from "../../public/img/arrow_right.png";
import BtnArrow from "../../public/img/home/btn_arrow.svg";
import Bearings from "../../public/img/product/bearing.png";
import DownloadImg from "../../public/img/home/download.svg";
import Industry1 from "../../public/img/product/industry1.jpg";
import Industry2 from "../../public/img/product/industry2.jpg";
import Industry3 from "../../public/img/product/industry3.jpg";
import Industry4 from "../../public/img/product/industry4.jpg";
import Industry5 from "../../public/img/product/industry5.jpg";
import Industry6 from "../../public/img/product/industry6.jpg";
import Industry7 from "../../public/img/product/industry7.jpg";
import Industry8 from "../../public/img/product/industry8.jpg";
import Industry9 from "../../public/img/product/industry9.jpg";
import Industry10 from "../../public/img/product/industry10.jpg";
import Prduct1 from "../../public/img/product/prduct1.png";
import Prduct2 from "../../public/img/product/prduct2.png";
import Prduct3 from "../../public/img/product/prduct3.png";
import Prduct4 from "../../public/img/product/prduct4.png";
import Prduct5 from "../../public/img/product/prduct5.png";

// DATA //

gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function ProductPage() {
	const breadcrumbData = [
		{ name: "Our Products" },
		{ name: " Industrial Bearings" },
		{ name: " Ball Bearings" },
		{ name: "Deep Groove Ball Bearings", link: "/industry" },
	];
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

	var otherProducts = {
		// slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
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
			<MetaTags Title={"Product"} Desc={"Product Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.ProductPage} pt_80`}>
				<div className={`${styles.product} BreadCrumb1`}>
					<BreadCrumb breadcrumbData={breadcrumbData} black />
				</div>
				<section className={`${styles.ball_bearings}`}>
					<div className="container">
						<div className={`${styles.ball_bearings_section} ptb_80`}>
							<div className={`${styles.ball_bearings_info} toTop`} data-scroll>
								<h5>Ball Bearings</h5>
								<h2>Single & Double Row Angular Contact Ball Bearings</h2>
								<p>
									Deep groove ball bearings are the most widely used bearing type and are
									particularly versatile. They have low friction and are optimized for
									low noise and low vibration which enables high rotational speeds. They
									accommodate radial and axial loads in both directions, are easy to
									mount, and require less maintenance than other bearing types.
								</p>
								<h6>
									Lager produces a wide range of standard and custom designs to offer
									advantages for applications with specific performance needs. Series –
									60, 62, 63, 64, 622, 623, 160, 618, 619.
								</h6>
								<div className={`${styles.btn_section} pt_20`}>
									<div className={`${styles.btn}`}>
										<a href="#">
											<PrimaryButton download={BtnArrow.src} title="Get a Quote" />
										</a>
									</div>
									<div className={`${styles.btn}`}>
										<a href="#">
											<PrimaryButton
												download={DownloadImg.src}
												title="Download Brochure"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className={`${styles.ball_bearings_img} toTop`} data-scroll>
								<img src={Bearings.src} className="img-responsive" />
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.features} ptb_80`}>
					<div className="container">
						<div className={`${styles.features_section} toTop`} data-scroll>
							<h2>Features</h2>
							<p>
								Single row deep groove ball bearings are the most frequently used
								bearing type. They are versatile, self-retaining bearings with solid
								outer rings, inner rings and ball and cage assemblies. Due to their low
								frictional torque, they are suitable for high and even very high speeds
								and are robust in operation, with little maintenance. Due to the raceway
								geometry and the balls used as rolling elements, deep groove ball
								bearings can support relatively high radial loads, as well as small
								axial loads.
							</p>
							<ul>
								<li>
									It is suitable for radial and axial loads in both directions and high
									speed conditions.
								</li>
								<li>Improved cover design with low friction and quiet operation.</li>
								<li>
									It has a longer service life thanks to its high temperature resistant
									and long life grease.
								</li>
								<li>
									Various seals and grease variants available for different operating
									conditions
								</li>
								<li>
									Numerous clearance and tolerance classes available for different
									operating conditions
								</li>
								<li>Standard: DIN 625 </li>
							</ul>
						</div>
					</div>
				</section>
				<section
					className={`${styles.industrial} ptb_80 industrial toTop`}
					data-scroll
				>
					<div className="container">
						<h2>Industrial Application</h2>
						<div className={`${styles.industrial_section}`}>
							<Slider {...settings}>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry1.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry2.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry3.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry4.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry5.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry6.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry7.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry8.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry9.src} className="img-responsive" />
									</div>
								</div>
								<div className={`${styles.CardItem}`}>
									<div className={`${styles.overlay}`}>
										<h4>
											Gearboxes
											<br /> & Drivers
										</h4>
									</div>
									<div className={`${styles.cardImg}`}>
										<img src={Industry10.src} className="img-responsive" />
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</section>
				<section className={`${styles.other_products} ptb_80 toTop`} data-scroll>
					<h2>Other Products</h2>
					<div className={`${styles.other_products_section}`}>
						<Slider {...otherProducts}>
							<div className={`${styles.CardItem}`}>
								<div className={`${styles.productImg} pb_20`}>
									<img src={Prduct1.src} className="img-responsive" />
								</div>
								<h3>
									Angular Contact
									<br /> Ball Bearings
								</h3>
								<div className={`${styles.btn} pt_20`}>
									<a href="#">
										<PrimaryButton download={BtnArrow.src} title="Know More" />
									</a>
								</div>
							</div>
							<div className={`${styles.CardItem}`}>
								<div className={`${styles.productImg} pb_20`}>
									<img src={Prduct2.src} className="img-responsive" />
								</div>
								<h3>
									Spherical Ball <br /> Bearings
								</h3>
								<div className={`${styles.btn} pt_20`}>
									<a href="#">
										<PrimaryButton download={BtnArrow.src} title="Know More" />
									</a>
								</div>
							</div>
							<div className={`${styles.CardItem}`}>
								<div className={`${styles.productImg} pb_20`}>
									<img src={Prduct3.src} className="img-responsive" />
								</div>
								<h3>
									Thrust Ball <br /> Bearings
								</h3>
								<div className={`${styles.btn} pt_20`}>
									<a href="#">
										<PrimaryButton download={BtnArrow.src} title="Know More" />
									</a>
								</div>
							</div>
							<div className={`${styles.CardItem}`}>
								<div className={`${styles.productImg} pb_20`}>
									<img src={Prduct4.src} className="img-responsive" />
								</div>
								<h3>
									Super Precision <br /> Ball Bearings
								</h3>
								<div className={`${styles.btn} pt_20`}>
									<a href="#">
										<PrimaryButton download={BtnArrow.src} title="Know More" />
									</a>
								</div>
							</div>
							<div className={`${styles.CardItem}`}>
								<div className={`${styles.productImg} pb_20`}>
									<img src={Prduct5.src} className="img-responsive" />
								</div>
								<h3>
									Small and Miniature <br /> ball bearings
								</h3>
								<div className={`${styles.btn} pt_20`}>
									<a href="#">
										<PrimaryButton download={BtnArrow.src} title="Know More" />
									</a>
								</div>
							</div>
						</Slider>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
