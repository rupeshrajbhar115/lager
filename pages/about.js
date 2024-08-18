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
import styles from "@/styles/pages/about.module.scss";

// IMAGES //
import AboutPage from "../public/img/about/about_page.jpg";

// DATA //

/** Industry Page */
export default function AboutUsPage() {
	const breadcrumbData = [{ name: "About", link: "/about" }];
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
			<main className={`${styles.aboutUsPage} pt_80`}>
				<img src={AboutPage.src} className="img-responsive" alt="AboutPage" />
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
