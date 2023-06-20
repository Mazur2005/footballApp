import styles from "/src/scss/module/AuthOptions/syntaxForm/PopupSendedPassword.module.scss";

const PopupSendedPassword = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.overlay__popup}>
				<h2 className={styles.overlay__popup__header}>Sended</h2>
			</div>
		</div>
	);
};

export { PopupSendedPassword };
