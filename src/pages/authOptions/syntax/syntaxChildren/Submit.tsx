import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";

interface Props {
	textOnButton: string;
	isDisabled?: boolean;
}
const Submit = ({ textOnButton, isDisabled }: Props) => {
	return (
		<button
			disabled={isDisabled}
			type='submit'
			className={styles.form__loginOrRegisterButton}>
			{textOnButton}
		</button>
	);
};
export { Submit };
