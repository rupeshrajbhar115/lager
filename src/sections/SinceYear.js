// MODULES //

// COMPONENTS //
import PrimaryButton from "../components/primary-button";

// SECTIONS //

// IMAGE //
import Since from "../../public/img/home/since.png";
import download_img from "../../public/img/home/btn_arrow.svg";

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Since.module.scss";

/** Since Component */
export default function SinceYear() {
	return (
		<div className={`${styles.since} pb_100`}>
			<div className="container">
				<div className={`${styles.since_section} toTop`} data-scroll>
					<div className={`${styles.since_box}`}>
						<div className={`${styles.left_box} toTop`} data-scroll>
							{/* <h6 className="pb_10">Since 1907</h6> */}
							<div className="text_xxl pb_30">
								Imagine a <br />
								frictionless world -
							</div>
							<a href="/about">
								<PrimaryButton download={download_img.src} title="Know More" />
							</a>
						</div>
						<div className={`${styles.right_box} toTop`} data-scroll>
							<p className="text_reg toTop" data-scroll>
								No grinding gears, no sluggish machines. Thats the Lager promise. For
								years, we’ve been the scientists of smooth, crafting bearings with
								time-tested methods and cutting-edge German technology. Our expertise
								translates into a world-class portfolio, ensuring smooth operation in
								countless industries. With Lager, get ready to experience a world that
								stays in perpetual motion.
							</p>
						</div>
					</div>
					<div className={`${styles.since_img}`}>
						<img
							src={Since.src}
							className="img-responsive toZoom"
							alt="Since Image"
							data-scroll
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
