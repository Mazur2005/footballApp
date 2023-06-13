import { SubmitHandler } from "react-hook-form";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleAuthProvider } from "../../../data/fireBase";
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
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		emailInUse: false,
	});
	const userCollection = collection(db, "users");
	const onSubmit: SubmitHandler<Inputs> = async data => {
		const { name, phone, password, email } = data;
		try {
			setFireBaseError({ emailInUse: false });
			await createUserWithEmailAndPassword(auth, email, password);
			await addDoc(userCollection, {
				name,
				phone: Number(phone),
				email,
				password,
			});
			setLocalStorage({ email });
		} catch (error: any) {
			if (
				error instanceof FirebaseError &&
				error.code === "auth/email-already-in-use"
			) {
				setFireBaseError({ emailInUse: true });
			}
		}
	};

	const handleGoogleProvider: () => Promise<void> = async () => {
		try {
			await signInWithPopup(auth, googleAuthProvider);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<SyntaxForm
			structure={structure}
			onSubmit={onSubmit}
			handleGoogleProvider={handleGoogleProvider}
			fireBaseError={fireBaseError}
		/>
	);
};
export { SingUp };
