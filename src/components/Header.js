/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Link from "next/link";
import PrimaryButton from "../components/primary-button";
import styles from "../styles/components/Header.module.scss";
import csml_logo from "../../public/img/csml_logo.svg";
import mobile_logo from "../../public/img/csml_logo.svg";
import close from "../../public/img/close.svg";

import BlackLogo from "../../public/img/home/black_logo.svg";
import download_img from "../../public/img/home/download.svg";

/** Header */
const Header = () => {
	const router = useRouter(); // Initialize useRouter
	const [sidebarActive, setSidebarActive] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [toggleState, settoggleState] = useState(0);

	/** toggleTab */
	const toggleTab = (index) => {
		if (toggleState === index) {
			return settoggleState(null);
		}
		settoggleState(index);
	};

	useEffect(() => {
		if (router.pathname === "/") {
			// Home page logic
			let hamburger = document.getElementById("hamburger");
			window.addEventListener("scroll", () => {
				setScroll(window.scrollY > 50);
				if (window.scrollY > 50) {
					hamburger.classList.add(`${styles.ham_style}`);
				} else {
					hamburger.classList.remove(`${styles.ham_style}`);
				}
			});
		} else {
			setScroll(false); // Disable scroll effect on inside pages
		}

		let calHeight = document.querySelector("header");
		setTimeout(function () {
			calHeight.classList.add(`${styles.zIndex}`);
		}, 2400);
		let height = calHeight.offsetHeight + "px";

		document.documentElement.style.setProperty("--headerHeight", height);

		// Cleanup event listener on component unmount
		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, [router.pathname]);

	// Determine if the current page is the home page
	const isHomePage = router.pathname === "/";
	const isInsidePage = router.pathname !== "/";

	return (
		<header
			id="hamburger"
			className={`${styles.main_header} ${scroll ? styles.scrolled_bg : " "} ${
				isInsidePage ? styles.inside_page_header : ""
			}`}
		>
			<div className="container">
				<div className={`${styles.header_box}`}>
					{/* Conditionally Render Header Logo for Home Page Only */}
					{isHomePage &&
						(scroll ? (
							<div className={`${styles.header_logo}`}>
								<a href="/">
									<img
										src={BlackLogo.src}
										className={`${styles.noscroll_logo}`}
										alt="csml logo"
									/>
									<img
										src={BlackLogo.src}
										className={`${styles.scrolled_logo}`}
										alt="csml logo"
									/>
								</a>
							</div>
						) : (
							<div className={`${styles.header_logo}`}>
								<a href="/">
									<img
										src={csml_logo.src}
										className={`${styles.noscroll_logo}`}
										alt="csml logo"
									/>
									<img
										src={mobile_logo.src}
										className={`${styles.scrolled_logo}`}
										alt="csml logo"
									/>
								</a>
							</div>
						))}

					{isInsidePage &&
						(isInsidePage ? (
							<div className={`${styles.header_logo}`}>
								<a href="/">
									<img
										src={BlackLogo.src}
										className={`${styles.noscroll_logo}`}
										alt="csml logo"
									/>
									<img
										src={mobile_logo.src}
										className={`${styles.scrolled_logo}`}
										alt="csml logo"
									/>
								</a>
							</div>
						) : (
							""
						))}

					{/* Rest of the header content */}
					<div className={`${styles.header_list} ${styles.header_list_mobile}`}>
						{isInsidePage &&
							(isInsidePage ? (
								<div className={styles.menu_title}>
									<div className={styles.title}>
										<Link href="/img/Lager-Company-Profile.pdf" download>
											<a target="_blank">
												<PrimaryButton
													download={download_img.src}
													title="Download Brochure"
												/>
											</a>
										</Link>
									</div>
									<div
										onClick={() => setSidebarActive(!sidebarActive)}
										className={`${styles.humberg_black} ${
											sidebarActive ? styles.close_icon : ""
										}`}
									>
										<p>
											<span></span>
											<span></span>
											<span></span>
										</p>
									</div>
								</div>
							) : (
								""
							))}
						{isHomePage &&
							(scroll ? (
								<div className={styles.menu_title}>
									<div className={styles.title}>
										<Link href="/img/Lager-Company-Profile.pdf" download>
											<a target="_blank">
												<PrimaryButton
													download={download_img.src}
													title="Download Brochure"
												/>
											</a>
										</Link>
									</div>
									<div
										onClick={() => setSidebarActive(!sidebarActive)}
										className={`${styles.humberg_black} ${
											sidebarActive ? styles.close_icon : ""
										}`}
									>
										<p>
											<span></span>
											<span></span>
											<span></span>
										</p>
									</div>
								</div>
							) : (
								<div className={styles.menu_title}>
									<div className={styles.title}>
										<Link href="/img/Lager-Company-Profile.pdf" download>
											<a target="_blank">
												<PrimaryButton
													light
													download={download_img.src}
													title="Download Brochure"
												/>
											</a>
										</Link>
									</div>
									<div
										onClick={() => setSidebarActive(!sidebarActive)}
										className={`${styles.humberg} ${
											sidebarActive ? styles.close_icon : ""
										}`}
									>
										<p>
											<span></span>
											<span></span>
											<span></span>
										</p>
									</div>
								</div>
							))}
					</div>

					<div
						className={`${styles.menu_right_open} ${
							sidebarActive ? styles.active : ""
						}`}
					>
						<div className={`${styles.menu_list}`}>
							<div
								onClick={() => setSidebarActive(!sidebarActive)}
								className={`${styles.close_box}`}
							>
								<img src={close.src} className={`${styles.close_arrow}`} alt="close" />
							</div>
							<ul className={`${styles.list_ul}`}>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/about">
										<a className="text_lg l_r">About Us</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/production">
										<a className="text_lg l_r">Production</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/product/industrial-bearings">
										<a className="text_lg l_r">Our Products</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/industry">
										<a className="text_lg l_r">OEM Solution</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/industryMRO">
										<a className="text_lg l_r">MRO Solution</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/services">
										<a className="text_lg l_r">Service Support</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/contact-us">
										<a className="text_lg l_r">Contact Us</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
