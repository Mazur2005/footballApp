import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/SyntaxForm.module.scss";

interface Props {
	signIn: boolean;
}

const logIn = ["Email", "Password"];

const SyntaxForm = (props: Props) => {
	const { signIn } = props;
	const selectIcon = (input: string) => {
		switch (input) {
			case "Email":
				return "/src/assets/icon/message.svg";
			case "Password":
				return "/src/assets/icon/password.svg";
		}
	};
	return (
		<div>
			<div className={styles.background} aria-label='cover page'></div>
			<form action='' className={styles.form}>
				<h1 className={styles.form__header}>Welcome</h1>
				{logIn.map((el, i) => (
					<div className={styles.form__bodyInput}>
						<img
							src={selectIcon(el)}
							alt='icon'
							className={styles.form__bodyInput__icon}
						/>
						<input
							key={i}
							placeholder={el}
							className={styles.form__bodyInput__input}
							type={el}
						/>
						{el === "Password" && (
							<img
								src={"/src/assets/icon/hide.svg"}
								alt='un watch icon'
								className={styles.form__bodyInput__icon}
							/>
						)}
					</div>
				))}
				<div>
					<label htmlFor='rememberMe'>
						<input type='checkbox' value='rememberMe' />
						Remember me
					</label>
					<button>Forgot Password</button>
				</div>
				<button>Sing in</button>
				<p>
					Don't have account? <Link to='../SingUp'>Sing UP</Link>
				</p>
			</form>
		</div>
	);
};
export { SyntaxForm };
