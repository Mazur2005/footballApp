import { SyntaxForm } from "../syntax/SyntaxForm";
import { SubmitHandler } from "react-hook-form";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth, db, googleAuthProvider } from "../../../data/fireBase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const structure = {
	inputs: ["email", "password"],
	header: "Welcome",
	isLogIn: true,
};
type Inputs = {
	[key: string]: string;
};

const SingIn = () => {
	const onSubmit: SubmitHandler<Inputs> = async data => {
		const { email, password } = data;
		try {
			const uidExists = await signInWithEmailAndPassword(auth, email, password);
			const userCollection = collection(db, "users");
			const users = await getDocs(userCollection);
			const filteredData = users.docs.find(doc => {
				if (doc.data().email === uidExists.user.email) {
					console.log(doc.data());
				}
			});
			// console.log(filteredData);
			// console.log(uidExists.user.email);
		} catch (error) {
			console.error(error);
		}
	};
	return <SyntaxForm structure={structure} onSubmit={onSubmit} />;
};
export { SingIn };
