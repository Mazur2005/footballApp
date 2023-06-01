import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import toggle from "/src/scss/module/toggle.module.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { selectTypeInput, selectIcon } from "./selectValue";

///icons
const show = "/src/assets/icon/show.svg";
const hide = "/src/assets/icon/hide.svg";
///

interface Structure {
	inputs: string[];
	header: string;
	isLogIn: boolean;
}
interface Props {
	structure: Structure;
}
type FormData = {
	[key: string]: string;
};

const SyntaxForm = ({ structure }: Props) => {
	const { header, inputs, isLogIn } = structure;
	const [isVisibilityPassword, setIsVisibilityPassword] =
		useState<boolean>(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		password: "",
		phone: "",
		address: "",
	});

	const sendTheForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className={styles.background} aria-label='cover page'></div>
			<form onSubmit={sendTheForm} className={styles.form}>
				<h1 className={styles.form__header}>{header}</h1>
				{inputs.map((el: string) => (
					<div key={el}>
						<div className={styles.form__bodyInput}>
							<img
								src={selectIcon(el)}
								alt={`${el} icon`}
								className={styles.form__bodyInput__icon}
							/>
							<input
								required
								placeholder={el}
								className={styles.form__bodyInput__input}
								type={selectTypeInput(el, isVisibilityPassword)}
								value={formData[el.toLowerCase()]}
								onChange={(e: ChangeEvent<HTMLInputElement>) =>
									setFormData(prevFormData => ({
										...prevFormData,
										[el.toLowerCase()]: e.target.value,
									}))
								}
							/>

							{el === "Password" && (
								<img
									src={isVisibilityPassword ? show : hide}
									alt='toggle watch icon'
									className={styles.form__bodyInput__icon}
									onClick={() =>
										setIsVisibilityPassword((prevState: boolean) => !prevState)
									}
								/>
							)}
						</div>
						<div className={`${styles.form__error} ${toggle.hidden}`}>
							errorMessage
						</div>
					</div>
				))}

				<div className={styles["form__checkbox--button"]}>
					<label
						htmlFor='rememberMe'
						className={styles["form__checkbox--button__label"]}>
						<input
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
