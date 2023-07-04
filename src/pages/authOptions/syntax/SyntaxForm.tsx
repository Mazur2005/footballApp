import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { SearchingForContactsAnimation } from "./popups/SearchingForContactsAnimation";
import { SyntaxHeader } from "./syntaxChildren/SyntaxHeader";
import { SyntaxInputs } from "./syntaxChildren/SyntaxInputs";
import {
	StringDictionary,
	Structure,
	BooleanDictionary,
} from "../../../types/interface";
import { SyntaxRememberMeCheckbox } from "./syntaxChildren/SyntaxRememberMeCheckbox";
import { SyntaxSubmit } from "./syntaxChildren/SyntaxSubmit";
import { SyntaxOptionToChangePath } from "./syntaxChildren/SyntaxOptionToChangePath";
import { Popup } from "./popups/Popup";

interface Props {
	structure: Structure;
	onSubmit: SubmitHandler<StringDictionary>;
	handleGoogleProvider?: () => Promise<void>;
	fireBaseError: BooleanDictionary;
	isDisableForm: boolean;
	showAnimation: boolean;
	isDisplayPopup?: boolean;
}

const SyntaxForm = ({
	structure,
	onSubmit,
	fireBaseError,
	isDisableForm,
	isDisplayPopup,
	showAnimation,
}: Props) => {
	const {
		header,
		inputs,
		isLogIn,
		isValidate,
		isRemindPassword,
		textOnButton,
		changePath,
		popupData,
	} = structure;
	const { text, link, path } = changePath;
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StringDictionary>();

	return (
		<div aria-disabled={isDisableForm}>
			{showAnimation && <SearchingForContactsAnimation />}
			{isDisplayPopup && popupData && <Popup popupData={popupData} />}

			<div
				className={`${styles.background} 
				${isDisableForm && styles.blurBackground}`}
				aria-label='cover page'></div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${styles.form} ${isDisableForm && styles.blurForm}`}>
				<SyntaxHeader header={header} />
				<SyntaxInputs
					inputs={inputs}
					isValidate={isValidate}
					fireBaseError={fireBaseError}
					register={register}
					errors={errors}
				/>
				{isRemindPassword || (
					<SyntaxRememberMeCheckbox register={register} isLogIn={isLogIn} />
				)}
				<SyntaxSubmit textOnButton={textOnButton} />
				<SyntaxOptionToChangePath text={text} link={link} path={path} />
			</form>
		</div>
	);
};
export { SyntaxForm };
