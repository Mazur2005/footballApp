import { useState } from "react";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { auth } from "../../../data/fireBase";
import { sendPasswordResetEmail } from "firebase/auth";

const structure = {
	inputs: ["email"],
	header: "Remind password",
	isValidate: false,
	isLogIn: false,
	isRemindPassword: true,
	textOnButton: "Send message",
	changePath: { text: "Bact to", link: "Sing in", path: "../SingIn" },
	popupData: {
		dataName: "remindPassword",
		header: "Success",
		text: "Check your email and back to",
		link: "Sing in",
		path: "../SingIn",
	},
};

interface FireBaseError {
	userNotFound: boolean;
}

type Inputs = {
	[key: string]: string;
};

const RemindPassword = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
	});
	const [isDisplayPopup, setIsDisplayPopup] = useState<boolean>(false);
	const [showAnimation, setShowAnimation] = useState<boolean>(false);

	const sendEmail = async (data: Inputs): Promise<void> => {
		const { email } = data;
		try {
			setShowAnimation(false);
			// await sendPasswordResetEmail(auth, email);
			setIsDisplayPopup(true);
		} catch (error: any) {
			setIsDisableForm(false);
			switch (error.code) {
				case "auth/user-not-found":
					setFireBaseError({
						userNotFound: true,
					});
					break;
			}
		}
	};
	const onSubmit = async (data: Inputs): Promise<void> => {
		setIsDisableForm(true);
		setShowAnimation(true);
		setFireBaseError({
			userNotFound: false,
		});
		setTimeout(() => {
			sendEmail(data);
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
export { RemindPassword };
