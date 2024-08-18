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
								<h2>Angular Contact Ball Bearings </h2>
								<p>
									Angular contact ball bearings have inner and outer ring raceways that
									are displaced relative to each other in the direction of the bearing
									axis. This means that these bearings are designed to accommodate
									combined loads, i.e. simultaneously acting radial and axial loads.
								</p>
								<h6>
									Lager produces a wide range of standard and custom designs to offer
									advantages for applications with specific performance needs.
									<br /> Single Row Series – 70 , 72 , 73 , 74.
									<br /> Double Row Series – 70 , 72 , 73 , 74.
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
								Angular contact ball bearings have raceways in the inner and outer rings
								that are displaced with respect to each other in the direction of the
								bearing axis. This means that they are designed to accommodate combined
								loads, i.e. simultaneously acting radial and axial loads. The axial load
								carrying capacity of angular contact ball bearings increases with
								increasing contact angle. However, in any case minimal loads are
								necessary to perform properly. The contact angle α is defined as the
								angle between the line joining the points of contact of the ball and the
								raceways in the radial plane, along which the load is transmitted from
								one raceway to another, and a line perpendicular to the bearing axis.
							</p>
							<p>
								Single row angular contact ball bearings can accommodate axial loads
								acting in one direction only. The bearings are non-separable and the
								bearing rings have one high and one low shoulder. The low shoulder
								enables a large number of balls to be incorporated in the bearing,
								giving it a relatively high load carrying capacity.
							</p>
							<ul>
								<li>
									It is resistant to high axial loads with special pressure angles.
								</li>
								<li>
									Alternative cage materials can meet all application requirements.
								</li>
								<li>Able to accommodate both radial and thrust loads</li>
								<li>Suitable for high speed operation</li>
								<li>Open and sealed versions available</li>
								<li>Highly rigid</li>
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
