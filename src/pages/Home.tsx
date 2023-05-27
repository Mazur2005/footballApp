import { Link } from "react-router-dom";
import styles from "/src/scss/module/Home.module.scss";

const Home = () => {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles["header__main--header"]}>Live Score</h1>
				<h2 className={styles["header__secondary--header"]}>
					Football score for free
				</h2>
				<Link to={"/AuthOptions"} className={styles.header__button}>
					TRY IT
				</Link>
			</header>
			<div className={styles.img} aria-label='Add page'></div>
		</>
	);
};
export { Home };
