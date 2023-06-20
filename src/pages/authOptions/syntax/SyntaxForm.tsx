import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { SearchingForContactsAnimation } from "./SearchingForContactsAnimation";
import { SyntaxHeader } from "./syntaxChildren/SyntaxHeader";
import { Inputs } from "./syntaxChildren/Inputs";
import { StringDictionary } from "../../../types/interface";
import { RememberMeCheckbox } from "./syntaxChildren/RememberMeCheckbox";
import { Submit } from "./syntaxChildren/Submit";
import { ChangePath } from "./syntaxChildren/ChangePath";
import { PopupSendedPassword } from "./syntaxChildren/PopupSendedPassword";

interface ChangePath {
	text: string;
	link: string;
	path: string;
}
interface Header {
	primary: string;
	secondary?: string;
	link?: string;
}

interface Structure {
	inputs: string[];
	header: Header;
	isLogIn: boolean;
	isValidate: boolean;
	isRemindPassword: boolean;
	textOnButton: string;
	changePath: ChangePath;
}

interface FireBaseError {
	emailInUse?: boolean;
	userNotFound?: boolean;
	wrongPassword?: boolean;
	tooManyRequests?: boolean;
}
interface Props {
	structure: Structure;
	onSubmit: SubmitHandler<StringDictionary>;
	handleGoogleProvider?: () => Promise<void>;
	fireBaseError: FireBaseError;
	isDisableForm: boolean;
	isSendedMessageResetPassword?: boolean;
}

const SyntaxForm = ({
	structure,
	onSubmit,
	fireBaseError,
	isDisableForm,
	isSendedMessageResetPassword,
}: Props) => {
	const {
		header,
		inputs,
		isLogIn,
		isValidate,
		isRemindPassword,
		textOnButton,
		changePath,
	} = structure;
	const { text, link, path } = changePath;
	const { tooManyRequests } = fireBaseError;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StringDictionary>();

	const condition = {
		tooManyRequests,
		isSendedMessageResetPassword,
	};
	return (
		<div aria-disabled={isDisableForm}>
			{isSendedMessageResetPassword ||
				(isDisableForm && <SearchingForContactsAnimation />)}

			{isSendedMessageResetPassword && <PopupSendedPassword />}
			<div
				className={`${styles.background} 
				${isDisableForm && styles.blurBackground}`}
				aria-label='cover page'></div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${styles.form} ${isDisableForm && styles.blurForm}`}>
				<SyntaxHeader header={header} condition={condition} />
				<Inputs
					inputs={inputs}
					isValidate={isValidate}
					fireBaseError={fireBaseError}
					register={register}
					errors={errors}
				/>
				{isRemindPassword || (
					<RememberMeCheckbox register={register} isLogIn={isLogIn} />
				)}
				<Submit
					textOnButton={textOnButton}
					isDisabled={isSendedMessageResetPassword}
				/>
				<ChangePath text={text} link={link} path={path} />
			</form>
		</div>
	);
};
export { SyntaxForm };
