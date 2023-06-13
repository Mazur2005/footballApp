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
	el: string;
}


const ShowFireBaseError = ({ el, fireBaseError }: Props) => {
	
	const getEmailError = () => {
		const { emailInUse, userNotFound } = fireBaseError;
		if (emailInUse) return EMAIL_IS_IN_USE;
		if (userNotFound) return USER_NOT_FOUND;
		return undefined;
	};
	const getPasswordError = () => {
		const { wrongPassword } = fireBaseError;
		if (wrongPassword) return WRONG_PASSWORD;
		return undefined;
	};
	const getFireBaseError = (): string | undefined => {
		switch (el) {
			case "email":
				return getEmailError();
			case "password":
				return getPasswordError();
		}
	};
	return <p className={styles.form__bodyInput__error}>{getFireBaseError()}</p>;
};
export { ShowFireBaseError };
