import styles from "/src/scss/module/AuthOptions/SearchingForContactsAnimation.module.scss";

const SearchingForContactsAnimation = () => {
	return (
		<div className={styles.container}>
			<div className={styles["container__contact-card"]}>
				<div className={styles["container__contact-card__avatar"]}></div>
				<div className={styles["container__contact-card__text"]}></div>
			</div>
			<div className={styles["container__contact-card"]}>
				<div className={styles["container__contact-card__avatar"]}></div>
				<div className={styles["container__contact-card__text"]}></div>
			</div>
			<div className={styles["container__magnifying-glass"]}>
				<div className={styles["container__magnifying-glass__glass"]}></div>
				<div className={styles["container__magnifying-glass__handle"]}>
					<div className={styles["container__magnifying-glass__handle__handle-inner"]}></div>
				</div>
			</div>
		</div>
	);
};
export { SearchingForContactsAnimation };
