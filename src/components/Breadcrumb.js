// MODULES //

// COMPONENTS //
import Link from "next/link";

// STYLES //
import styles from "../styles/components/Breadcrumb.module.scss";

// PLUGINS //

// IMAGES //

// UTILS //

/** Bread Crumb Component */
const BreadCrumb = ({ breadcrumbData, black }) => {
	return (
		<div
			className={`${styles.breadcrumb} ${
				black && styles.color_black
			} breadcrumb text_xs`}
		>
			<div className="">
				<div className={`${styles.breadcrumb_inner} breadcrumb_inner`}>
					<div className={`${styles.pathItem} pathItem`}>
						<span className={styles.path}>
							<Link href="/">Home</Link>
						</span>
					</div>
					{/* Passing Props for Current Page Name */}
					{breadcrumbData?.map((item, ind) => (
						<div key={ind} className={`${styles.pathItem} pathItem`}>
							<span className={styles.path}>/</span>
							<span className={styles.path}>
								{/* Add link tag only if link exists else just add text */}
								{item.link ? <Link href={item.link}>{item.name}</Link> : item.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
