import { SubmitHandler } from "react-hook-form";
import { SyntaxForm } from "../syntax/SyntaxForm";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googleAuthProvider } from "../../../data/fireBase";
import { addDoc, collection } from "firebase/firestore";
import { setLocalStorage } from "../../../utils/localStorage";
type Inputs = {
	[key: string]: string;
};
const structure = {
	inputs: ["name", "email", "password", "phone"],
	header: "Register",
	isLogIn: false,
};
const SingUp = () => {
	const userCollection = collection(db, "users");

	const onSubmit: SubmitHandler<Inputs> = async data => {
		const { name, phone, password, email } = data;
		try {
			setLocalStorage({ email });
			await createUserWithEmailAndPassword(auth, email, password);
			await addDoc(userCollection, {
				name,
				phone: Number(phone),
				email,
				password,
			});
		} catch (error) {
			switch (error) {
				case "auth/email-already-in-use":
					console.log(`Email address ${email} already in use.`);
					break;
				case "auth/invalid-email":
					console.log(`Email address ${email} is invalid.`);
					break;
				case "auth/operation-not-allowed":
					console.log(`Error during sign up.`);
					break;
				case "auth/weak-password":
					console.log(
						"Password is not strong enough. Add additional characters including special characters and numbers."
					);
					break;
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
		/>
	);
};
export { SingUp };
