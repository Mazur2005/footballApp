import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { errorMessage } from "./errorMessage";
const { EMAIL_IS_IN_USE, USER_NOT_FOUND, WRONG_PASSWORD } = errorMessage;

interface FireBaseError {
	emailInUse?: boolean;
	userNotFound?: boolean;
	wrongPassword?: boolean;
	tooManyRequests?: boolean;
}

interface Props {
	fireBaseError: FireBaseError;
}

const ShowFireBaseError = ({ fireBaseError }: Props) => {

	const getFireBaseError = (): string | undefined => {
		const { emailInUse, userNotFound, wrongPassword } = fireBaseError;
		if (emailInUse) return EMAIL_IS_IN_USE;
		if (userNotFound) return USER_NOT_FOUND;
		if (wrongPassword) return WRONG_PASSWORD;
		return undefined;
	};
	return <p className={styles.form__bodyInput__error}>{getFireBaseError()}</p>;
};
export { ShowFireBaseError };
