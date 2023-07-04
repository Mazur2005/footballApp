import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";

interface Props {
	textOnButton: string;
	isDisabled?: boolean;
}
const SyntaxSubmit = ({ textOnButton, isDisabled }: Props) => {
	console.log(isDisabled);
	return (
		<button
			disabled={isDisabled}
			type='submit'
			className={`
			${styles.form__loginOrRegisterButton} 
			${isDisabled && styles.displayBtn}`}>
			{textOnButton}
		</button>
	);
};
export { SyntaxSubmit };
