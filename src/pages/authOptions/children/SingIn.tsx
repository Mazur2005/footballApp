import { SyntaxForm } from "../syntax/SyntaxForm";
import { SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../data/fireBase";
import { useState } from "react";

const structure = {
	inputs: ["email", "password"],
	header: {
		primary: "Welcome",
		secondary: "Too many requests. Try again later.",
	},

	isValidate: false,
	isLogIn: true,
	isRemindPassword: false,
	textOnButton: "Sing in",
	changePath: {
		text: "Don't have account?",
		link: "Sing up",
		path: "../SingUp",
	},
};
type Inputs = {
	[key: string]: string;
};
interface FireBaseError {
	userNotFound: boolean;
	wrongPassword: boolean;
	tooManyRequests: boolean;
}

const SingIn = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
		wrongPassword: false,
		tooManyRequests: false,
	});

	const findUsers = async (data: Inputs): Promise<void> => {
		const { email, password } = data;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setIsDisableForm(false);
		} catch (error: any) {
			setIsDisableForm(false);
			switch (error.code) {
				case "auth/too-many-requests":
					setFireBaseError(prevErrors => ({
						...prevErrors,
						tooManyRequests: true,
					}));
					break;
				case "auth/user-not-found":
					setFireBaseError(prevErrors => ({
						...prevErrors,
						userNotFound: true,
					}));
					break;
				case "auth/wrong-password":
					setFireBaseError(prevErrors => ({
						...prevErrors,
						wrongPassword: true,
					}));
					break;
			}
		}
	};

	const onSubmit: SubmitHandler<Inputs> = async data => {
		setIsDisableForm(true);
		setFireBaseError({
			userNotFound: false,
			wrongPassword: false,
			tooManyRequests: false,
		});
		setTimeout(() => {
			findUsers(data);
		}, 2500);
	};
	return (
		<SyntaxForm
			structure={structure}
			onSubmit={onSubmit}
			fireBaseError={fireBaseError}
			isDisableForm={isDisableForm}
		/>
	);
};
export { SingIn };
