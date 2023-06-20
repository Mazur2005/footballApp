import { useState } from "react";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { auth } from "../../../data/fireBase";
import { sendPasswordResetEmail } from "firebase/auth";

const structure = {
	inputs: ["email"],
	header: {
		primary: "Remind password",
		secondary: "Back to",
		link: "../SingIn",
	},
	isValidate: false,
	isLogIn: false,
	isRemindPassword: true,
	textOnButton: "Send message",
	changePath: { text: "Bact to", link: "Sing in", path: "../SingIn" },
};

interface FireBaseError {
	userNotFound: boolean;
}

type Inputs = {
	[key: string]: string;
};

const RemindPassword = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [isSendedMessageResetPassword, setIsSendedMessageResetPassword] =
		useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
	});

	const sendEmail = async (data: Inputs): Promise<void> => {
		const { email } = data;
		try {
			await sendPasswordResetEmail(auth, email);
			setIsDisableForm(false);
			setIsSendedMessageResetPassword(true);
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
			isSendedMessageResetPassword={isSendedMessageResetPassword}
		/>
	);
};
export { RemindPassword };
