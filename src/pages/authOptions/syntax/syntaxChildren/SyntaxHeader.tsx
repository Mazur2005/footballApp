import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/syntaxForm/SyntaxForm.module.scss";

interface Condition {
	tooManyRequest?: boolean;
	isSendedMessageResetPassword?: boolean;
}
interface Header {
	primary: string;
	secondary?: string;
	link?: string;
}

interface Props {
	header: Header;
	condition: Condition;
}

const SyntaxHeader = ({ header, condition }: Props) => {
	const { primary, secondary, link } = header;
	const { tooManyRequest, isSendedMessageResetPassword } = condition;

	const getLink = (): JSX.Element => {
		return <Link to='../SingIn'>{link}</Link>;
	};
	const getSubtitle = (): JSX.Element => {
		return <h2 className={styles.form__header__secondary}>{secondary}</h2>;
	};

	const getInformation = (): JSX.Element | undefined => {
		if (tooManyRequest) return getSubtitle();
		if (isSendedMessageResetPassword)
			return (
				<>
					{getSubtitle()} {getLink()}
				</>
			);
	};

	return (
		<header className={styles.form__header}>
			<h1 className={styles.form__header__primary}>{primary}</h1>
			{getInformation()}
		</header>
	);
};

export { SyntaxHeader };
