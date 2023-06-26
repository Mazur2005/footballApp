import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";
import { Link } from "react-router-dom";

interface Props {
	text: string;
	link: string;
	path: string;
}
const OptionToChangePath = ({ text, link, path }: Props) => {
	return (
		<p className={styles.form__question}>
			{text}
			<Link className={styles.form__question__singUpOrLogIn} to={path}>
				{link}
			</Link>
		</p>
	);
};

export { OptionToChangePath };
