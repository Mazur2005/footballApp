import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { useState, KeyboardEvent } from "react";
import { getHideOrShow, selectIcon } from "./selectIcon";
import { selectTypeInput } from "./selectType";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShowFireBaseError } from "./ShowFireBaseError";

import {
	// getFairBaseError,
	maxLength,
	minLength,
	preventInputE,
	// regexValidation,
	validation,
} from "./validate";

interface Structure {
	inputs: string[];
	header: string;
	isLogIn: boolean;
}
type Inputs = {
	[key: string]: string;
};
interface FireBaseError {
	emailInUse?: boolean;
	userNotFound?: boolean;
	wrongPassword?: boolean;
	tooManyRequests?: boolean;
}
interface Props {
	structure: Structure;
	onSubmit: SubmitHandler<Inputs>;
	handleGoogleProvider?: () => Promise<void>;
	fireBaseError: FireBaseError;
}

const SyntaxForm = ({
	structure,
	onSubmit,
	handleGoogleProvider,
	fireBaseError,
}: Props) => {
	const { header, inputs, isLogIn } = structure;
	const [isVisibilityPassword, setIsVisibilityPassword] =
		useState<boolean>(false);
	const [isDisableForm, setIsDisableForm] = useState<boolean>(true);
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>();

	const getFirstCapitalLetter = (el: string): string => {
		return el.charAt(0).toUpperCase() + el.slice(1);
	};

	return (
		<div>
			<div className={styles.background} aria-label='cover page'></div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className={styles.form__header}>{header}</h1>
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
								validate: isLogIn ? () => true : validation(el),
								minLength: isLogIn ? undefined : minLength(el),
								maxLength: isLogIn ? undefined : maxLength(el),
							})}
							onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
								preventInputE(el, e)
							}
							placeholder={getFirstCapitalLetter(el)}
							className={styles.form__bodyInput__input}
							type={selectTypeInput(el, isVisibilityPassword)}
						/>
						{el !== "phone" && el !== "name" && (
							<ShowFireBaseError el={el} fireBaseError={fireBaseError} />
						)}

						<p className={styles.form__bodyInput__error}>
							{errors[el]?.message}
						</p>

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

				<div className={styles["form__checkbox--button"]}>
					<label
						htmlFor='rememberMe'
						className={styles["form__checkbox--button__label"]}>
						<input
							{...register("checkbox")}
							type='checkbox'
							value='rememberMe'
							id='rememberMe'
							className={styles["form__checkbox--button__checkbox"]}
						/>
						Remember me
					</label>
					{isLogIn && (
						<Link
							to={".."}
							className={styles["form__checkbox--button__button"]}>
							Forgot Password
						</Link>
					)}
				</div>

				<button type='submit' className={styles.form__loginOrRegisterButton}>
					{isLogIn ? "Sing in" : "Sing up"}
				</button>
				<button onClick={handleGoogleProvider}>sing in with google</button>

				<p className={styles.form__question}>
					{isLogIn ? `Don't have account?` : "Do have account?"}

					<Link
						className={styles.form__question__singUpOrLogIn}
						to={isLogIn ? "../SingUp" : "../SingIn"}>
						{isLogIn ? "Sing Up" : "Sing In"}
					</Link>
				</p>
			</form>
		</div>
	);
};
export { SyntaxForm };
