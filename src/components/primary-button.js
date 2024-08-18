import styles from "../styles/components/primary-button.module.scss";

/** btn component */
const PrimaryButton = ({
	title,
	dark,
	light,
	download,
	withoutAnimaction,
	smallarrow,
}) => {
	return (
		<div className={`${styles.button} `}>
			<p
				className={`${styles.primary_btn} ${dark && styles.color_black}
       ${light && styles.color_white}`}
			>
				<span className={`${styles.arrows_main} `}>
					<span
						className={`${styles.arrow} ${
							withoutAnimaction && styles.no_animaction
						} ${smallarrow && styles.small_arrow}`}
					>
						{download && <img src={download} className={`${styles.arrow}`} />}
					</span>
				</span>
				{title}
			</p>
		</div>
	);
};

export default PrimaryButton;
