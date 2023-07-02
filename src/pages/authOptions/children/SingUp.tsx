///hooks
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
///fire base
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../data/fireBase";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
/// syntax
import { SyntaxForm } from "../syntax/SyntaxForm";
/// types
import { BooleanDictionary, StringDictionary } from "../../../types/interface";
/// local storage
import { setLocalStorage } from "../../../utils/localStorage";

const structure = {
	inputs: ["name", "email", "password", "phone"],
	header: "Register",
	isValidate: true,
	isLogIn: false,
	isRemindPassword: false,
	textOnButton: "Sing up",
	changePath: {
		text: "Do have account?",
		link: "Sing In",
		path: "../SingIn",
	},
};
interface FireBaseError extends BooleanDictionary {
	emailInUse: boolean;
}
const SingUp = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [showAnimation, setShowAnimation] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		emailInUse: false,
	});

	const userRegistration = async (data: StringDictionary): Promise<void> => {
		const { name, phone, password, email } = data;
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			const userCollection = collection(db, "users");
			await addDoc(userCollection, {
				name,
				phone: Number(phone),
				email,
				password,
			});
			setIsDisableForm(false);
			setShowAnimation(false);
			setLocalStorage({ email });
		} catch (error: any) {
			setIsDisableForm(false);
			setShowAnimation(false);
			if (
				error instanceof FirebaseError &&
				error.code === "auth/email-already-in-use"
			) {
				setFireBaseError({ emailInUse: true });
				setIsDisableForm(false);
			}
		}
	};

	const onSubmit: SubmitHandler<StringDictionary> = async data => {
		setIsDisableForm(true);
		setShowAnimation(true);
		setFireBaseError({ emailInUse: false });
		setTimeout(() => {
			userRegistration(data);
		}, 2500);
	};

	return (
		<SyntaxForm
			structure={structure}
			onSubmit={onSubmit}
			fireBaseError={fireBaseError}
			isDisableForm={isDisableForm}
			showAnimation={showAnimation}
		/>
	);
};
export { SingUp };
