// MODULES //
import { useEffect } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import BreadCrumb from "../src/components/Breadcrumb";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/industry.module.scss";

// IMAGES //
import Banner from "../public/img/industry/banner.jpg";
import Industry1 from "../public/img/industry/industry1.jpg";
import Industry2 from "../public/img/industry/industry2.jpg";
import Industry3 from "../public/img/industry/industry3.jpg";
import Industry4 from "../public/img/industry/industry4.jpg";
import Industry5 from "../public/img/industry/industry5.jpg";
import Industry6 from "../public/img/industry/industry6.jpg";
import Industry7 from "../public/img/industry/industry7.jpg";
import Industry8 from "../public/img/industry/industry8.jpg";
import Industry9 from "../public/img/industry/industry9.jpg";
import Industry10 from "../public/img/industry/industry10.jpg";

// DATA //

/** Industry Page */
export default function IndustryPage() {
	const breadcrumbData = [{ name: "Industry", link: "/industry" }];
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Industry"} Desc={"Industry Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.IndustryPage} pt_80`}>
				<section className={`${styles.banner}`}>
					<div className={`${styles.industry_oem} BreadCrumb`}>
						<BreadCrumb breadcrumbData={breadcrumbData} />
					</div>
					<img src={Banner.src} className={`${styles.banner_img} img-responsive`} />
					<div className={`${styles.banner_title} toTop`} data-scroll>
						<h2 className="text_xxl">OEM Solutions</h2>
					</div>
				</section>
				<section>
					<div className="container">
						<div className={`${styles.industry}`}>
							<p
								className={`${styles.industry_para_info} text_xl ptb_50 toTop`}
								data-scroll
							>
								We engineer processes, services and designing support tailored to the
								requirements of our clients. We provide high-end customised services to
								all major OEMS.
							</p>
							<div className={`${styles.industry_cart_item} pt_20 pb_60`}>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry1.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Packing Industry</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry2.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Gearboxes & Drivers</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry3.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Cement Industry</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry4.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Oil & Gas</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry5.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Heavy Lifting</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry6.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Construction Equipmet</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry7.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Compressor & Pumps</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry8.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Agriculture & machinery</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry9.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Paper Machinery</h5>
								</div>
								<div className={`${styles.cart_item} toTop`} data-scroll>
									<img src={Industry10.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Steel Industry</h5>
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
