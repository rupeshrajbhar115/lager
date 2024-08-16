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
import Banner from "../public/img/industrymro/banner.jpg";
import Industry1 from "../public/img/industrymro/industry1.jpg";
import Industry2 from "../public/img/industrymro/industry2.jpg";
import Industry3 from "../public/img/industrymro/industry3.jpg";
import Industry4 from "../public/img/industrymro/industry4.jpg";
import Industry5 from "../public/img/industrymro/industry5.jpg";
import Industry6 from "../public/img/industrymro/industry6.jpg";

// DATA //

/** Industry Page */
export default function IndustryPage() {
	const breadcrumbData = [{ name: "MRO Solutions", link: "/industryMRO" }];
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
					<div className={`${styles.industry_mro} BreadCrumb`}>
						<BreadCrumb breadcrumbData={breadcrumbData} />
					</div>
					<img src={Banner.src} className={`${styles.banner_img} img-responsive`} />
					<div className={`${styles.banner_title}`}>
						<h2 className="text_xxl">MRO Solutions </h2>
					</div>
				</section>
				<section>
					<div className="container">
						<div className={`${styles.industry}`}>
							<p className={`${styles.industry_para_info} text_xl ptb_50`}>
								The replacement of ball bearings is part of typical maintenance
								schedules and keeping things smooth. We provide high-end customised
								services to all major MROs.
							</p>
							<div className={`${styles.industry_cart_item} pt_20 pb_60`}>
								<div className={`${styles.cart_item}`}>
									<img src={Industry1.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Energy Industry</h5>
								</div>
								<div className={`${styles.cart_item}`}>
									<img src={Industry2.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Mining Industry</h5>
								</div>
								<div className={`${styles.cart_item}`}>
									<img src={Industry3.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Steel Industry</h5>
								</div>
								<div className={`${styles.cart_item}`}>
									<img src={Industry4.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Sugar Industry</h5>
								</div>
								<div className={`${styles.cart_item}`}>
									<img src={Industry5.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Aggregate & Quarrying</h5>
								</div>
								<div className={`${styles.cart_item}`}>
									<img src={Industry6.src} className="img-responsive" alt="Industry1" />
									<h5 className="text_lg pt_10">Pulp & Paper Equipment</h5>
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
