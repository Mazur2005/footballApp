import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { UseFormRegister } from "react-hook-form";
import { StringDictionary } from "../../../../types/interface";

interface Props {
	register: UseFormRegister<StringDictionary>;
	isLogIn: boolean;
}

const SyntaxRememberMeCheckbox = ({ register, isLogIn }: Props) => {
	return (
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
					to='../RemindPassword'
					className={styles["form__checkbox--button__button"]}>
					Forgot Password
				</Link>
			)}
		</div>
	);
};
export { SyntaxRememberMeCheckbox };
