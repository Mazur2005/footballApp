import { SyntaxForm } from "../syntax/SyntaxForm";

const structure = {
	inputs: ["Name", "Email", "Password", "Phone", "Address"],
	header: "Register",
	isLogIn: false,
};
const SingUp = () => {
	return <SyntaxForm structure={structure} />;
};
export { SingUp };
