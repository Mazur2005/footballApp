import { Link } from "react-router-dom";
import styles from "/src/scss/module/AuthOptions/syntaxForm/Popup.module.scss";

interface PopupData {
	dataName: string;
	header: string;
	text: string;
	link: string;
	path: string;
}
interface Props {
	popupData: PopupData;
}

const Popup = ({
	popupData: { dataName, header, text, link, path },
}: Props) => {
	return (
		<div className={styles.container}>
			<h2
				className={`${styles.container__header} ${
					dataName === "toManyRequest" && styles.colorRed
				}`}>
				{header}
			</h2>
			<p className={styles.container__paragraph}>{text}</p>
			<Link className={styles.container__link} to={path}>
				{dataName === "remindPassword" && `(☞ﾟヮﾟ)☞ ${link}`}
				{dataName === "toManyRequest" && `＞﹏＜ ${link}`}
			</Link>
		</div>
	);
};

export { Popup };
