import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { auth } from "../../../data/fireBase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { BooleanDictionary, StringDictionary } from "../../../types/interface";
import { Navigate } from "react-router";


const structure = {
	inputs: ["email", "password"],
	header: "Welcome",
	isValidate: false,
	isLogIn: true,
	isRemindPassword: false,
	textOnButton: "Sing in",
	changePath: {
		text: "Don't have account?",
		link: "Sing up",
		path: "../SingUp",
	},
	popupData: {
		dataName: "toManyRequest",
		header: "Error",
		text: "To many request. Try again later",
		link: "Home page",
		path: "/",
	},
};

interface FireBaseError extends BooleanDictionary {
	userNotFound: boolean,
	wrongPassword: boolean,
	tooManyRequests: boolean,
}

const SingIn = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [showAnimation, setShowAnimation] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
		wrongPassword: false,
		tooManyRequests: false,
	});
	const [isDisplayPopup, setIsDisplayPopup] = useState<boolean>(false);

	const findUsers = async (data: StringDictionary): Promise<void> => {
		const { email, password } = data;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setIsDisableForm(false);
			setShowAnimation(false);
			Navigate({ to: "feature page" });
		} catch (error: any) {
			setIsDisableForm(false);
			setShowAnimation(false);
			switch (error.code) {
				case "auth/too-many-requests":
					setFireBaseError(prevErrors => ({
						...prevErrors,
						tooManyRequests: true,
					}));
					setIsDisplayPopup(true);
					setIsDisableForm(true);
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

	const onSubmit: SubmitHandler<StringDictionary> = async data => {
		setIsDisableForm(true);
		setShowAnimation(true);
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
			isDisplayPopup={isDisplayPopup}
			showAnimation={showAnimation}
		/>
	);
};
export { SingIn };
