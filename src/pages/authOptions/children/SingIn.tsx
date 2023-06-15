import { SyntaxForm } from "../syntax/SyntaxForm";
import { SubmitHandler } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../data/fireBase";
import { useState } from "react";

const structure = {
	inputs: ["email", "password"],
	header: "Welcome",
	isLogIn: true,
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
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
		wrongPassword: false,
		tooManyRequests: false,
	});
	const onSubmit: SubmitHandler<Inputs> = async data => {
		const { email, password } = data;
		try {
			setFireBaseError({
				userNotFound: false,
				wrongPassword: false,
				tooManyRequests: false,
			});
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error: any) {
			switch (error.code) {
				case "auth/too-many-requests":
					console.log(error.code);
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
	return (
		<SyntaxForm
			structure={structure}
			onSubmit={onSubmit}
			fireBaseError={fireBaseError}
		/>
	);
};
export { SingIn };
