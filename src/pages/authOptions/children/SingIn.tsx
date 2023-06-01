import { SyntaxForm } from "../syntax/SyntaxForm";
const structure = {
	inputs: ["Email", "Password"],
	header: "Welcome",
	isLogIn: true,
};
const SingIn = () => {
	return <SyntaxForm structure={structure} />;
};
export { SingIn };
