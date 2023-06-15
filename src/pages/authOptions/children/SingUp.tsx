import { SubmitHandler } from "react-hook-form";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../data/fireBase";
import { addDoc, collection } from "firebase/firestore";
import { setLocalStorage } from "../../../utils/localStorage";
import { FirebaseError } from "firebase/app";
import { useState } from "react";
type Inputs = {
	[key: string]: string;
};
const structure = {
	inputs: ["name", "email", "password", "phone"],
	header: "Register",
	isLogIn: false,
};
interface FireBaseError {
	emailInUse: boolean;
}
const SingUp = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		emailInUse: false,
	});

	const userRegistration = async (data: Inputs): Promise<void> => {
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
			setLocalStorage({ email });
		} catch (error: any) {
			if (
				error instanceof FirebaseError &&
				error.code === "auth/email-already-in-use"
			) {
				setFireBaseError({ emailInUse: true });
				setIsDisableForm(false);
			}
		}
	};

	const onSubmit: SubmitHandler<Inputs> = async data => {
		setIsDisableForm(true);
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
		/>
	);
};
export { SingUp };
