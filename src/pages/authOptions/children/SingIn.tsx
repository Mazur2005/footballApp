import { SyntaxForm } from "../syntax/SyntaxForm";
const structure = {
	inputs: ["email", "password"],
	header: "Welcome",
	isLogIn: true,
};
const SingIn = () => {
	return <SyntaxForm structure={structure} />;
};
export { SingIn };
