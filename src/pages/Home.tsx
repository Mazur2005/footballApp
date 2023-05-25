import styles from "../scss/module/Home.module.scss";

const Home = () => {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles["header__main--header"]}>Live Score</h1>
				<h2 className={styles["header__secondary--header"]}>
					Football score for free
				</h2>
				<button className={styles.header__button}>TRY IT</button>
			</header>
			<div className={styles.img}></div>
		</>
	);
};
export { Home };
