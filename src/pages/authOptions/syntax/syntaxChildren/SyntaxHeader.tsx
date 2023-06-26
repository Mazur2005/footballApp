import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";

interface Props {
	header: string;
}

const SyntaxHeader = ({ header }: Props) => {
	return (
		<header className={styles.form__header}>
			<h1 className={styles.form__header__primary}>{header}</h1>
		</header>
	);
};

export { SyntaxHeader };
