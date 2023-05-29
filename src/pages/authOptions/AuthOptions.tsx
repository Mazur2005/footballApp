import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/AuthOptions.module.scss";
const AuthOptions = () => {
	return (
		<div className={styles.authOptions}>
			<div className={styles.authOptions__cover} aria-label='cover page'></div>
			<div className={styles.authOptions__boxTexts}>
				<h1 className={styles.authOptions__boxTexts__header}>
					Discover all about sport
				</h1>
				<p className={styles.authOptions__boxTexts__description}>
					Search millions of jobs and get the inside scoop on companies. Wait
					for what? Let’s get start it!
				</p>
			</div>
			<div className={styles.authOptions__buttons}>
				<Link
					to={"/AuthOptions/SingIn"}
					className={styles.authOptions__buttons__singIn}>
					Sing in
				</Link>
				<Link
					to={"/AuthOptions/SingUp"}
					className={styles.authOptions__buttons__singUp}>
					Sing up
				</Link>
			</div>
		</div>
	);
};
export { AuthOptions };
