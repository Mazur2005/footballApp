import { SyntaxForm } from "../syntax/SyntaxForm";

const structure = {
	inputs: ["name", "email", "password", "phone"],
	header: "Register",
	isLogIn: false,
};
const SingUp = () => {
	return <SyntaxForm structure={structure} />;
};
export { SingUp };
