import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { formErrorsMessage } from "../../../utils/errorMessage";

const { EMAIL_IS_IN_USE, USER_NOT_FOUND, WRONG_PASSWORD } = formErrorsMessage;

interface FireBaseError {
	emailInUse?: boolean;
	userNotFound?: boolean;
	wrongPassword?: boolean;
	tooManyRequests?: boolean;
}

interface Props {
	fireBaseError: FireBaseError;
	el: string;
}

const ShowFireBaseError = ({ fireBaseError, el }: Props) => {
	const getFireBaseError = (): string | undefined => {
		const { emailInUse, userNotFound, wrongPassword } = fireBaseError;
		if (emailInUse && el === "email") return EMAIL_IS_IN_USE;
		if (userNotFound && el === "email") return USER_NOT_FOUND;
		if (wrongPassword && el === "password") return WRONG_PASSWORD;
		return undefined;
	};
	return <p className={styles.form__bodyInput__error}>{getFireBaseError()}</p>;
};
export { ShowFireBaseError };
