import { useState } from "react";
import { SyntaxForm } from "../syntax/SyntaxForm";

const structure = {
	inputs: ["email"],
	header: "Remind password",
	isValidate: false,
	isLogIn: false,
	isRemindPassword: true,
};

interface FireBaseError {
	userNotFound: boolean;
}

const RemindPassword = () => {
	const [isDisableForm, setIsDisableForm] = useState<boolean>(false);
	const [fireBaseError, setFireBaseError] = useState<FireBaseError>({
		userNotFound: false,
	});
	const onSubmit = () => {
		console.log("dupa");
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
export { RemindPassword };
