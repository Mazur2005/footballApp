import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { useState, KeyboardEvent } from "react";
import { getHideOrShow, selectIcon } from "../selectIcon";
import { selectTypeInput } from "../selectType";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ShowFireBaseError } from "../ShowFireBaseError";
import { preventDefaultInput, regexValidation } from "../validate";
import { StringDictionary } from "../../../../types/interface";

interface FireBaseError {
	emailInUse?: boolean;
	userNotFound?: boolean;
	wrongPassword?: boolean;
	tooManyRequests?: boolean;
}

interface Props {
	inputs: string[];
	isValidate: boolean;
	fireBaseError: FireBaseError;
	register: UseFormRegister<StringDictionary>;
	errors: FieldErrors<StringDictionary>;
}

const Inputs = (props: Props) => {
	const [isVisibilityPassword, setIsVisibilityPassword] =
		useState<boolean>(false);
	const { inputs, isValidate, fireBaseError, register, errors } = props;
	const getFirstCapitalLetter = (el: string): string => {
		return el.charAt(0).toUpperCase() + el.slice(1);
	};

	return (
		<>
			{inputs.map((el: string) => (
				<div key={el} className={styles.form__bodyInput}>
					<img
						src={selectIcon(el)}
						alt={`${el} icon`}
						className={styles.form__bodyInput__icon}
					/>
					<input
						{...register(el, {
							required: "Required",
							validate: isValidate ? regexValidation(el) : () => true,
						})}
						onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
							el === "phone" && preventDefaultInput(e)
						}
						placeholder={getFirstCapitalLetter(el)}
						className={styles.form__bodyInput__input}
						type={selectTypeInput(el, isVisibilityPassword)}
					/>
					{el !== "phone" && el !== "name" && (
						<ShowFireBaseError fireBaseError={fireBaseError} />
					)}

					<p className={styles.form__bodyInput__error}>{errors[el]?.message}</p>

					{el === "password" && (
						<img
							src={getHideOrShow(isVisibilityPassword)}
							alt='toggle watch icon'
							className={styles.form__bodyInput__icon}
							onClick={() =>
								setIsVisibilityPassword((prevState: boolean) => !prevState)
							}
						/>
					)}
				</div>
			))}
		</>
	);
};
export { Inputs };
