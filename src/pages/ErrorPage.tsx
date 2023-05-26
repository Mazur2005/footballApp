import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import styles from "../scss/module/ErrorPage.module.scss";

const ErrorPage = () => {
	const error: any = useRouteError();

	const errorMessage = (error: unknown): string => {
		if (isRouteErrorResponse(error)) {
			return `${error.status} ${error.statusText}`;
		} else if (error instanceof Error) {
			return error.message;
		} else if (typeof error === "string") {
			return error;
		} else {
			console.error(error);
			return "Unknown error";
		}
	};

	return (
		<div className={styles.errorPage}>
			<h1 className={styles.errorPage__header}>Oops!</h1>
			<p className={styles.errorPage__apology}>
				Sorry, an unexpected error has occurred.
			</p>
			<p>
				<i className={styles.errorPage__errorMessage}>{errorMessage(error)}</i>
			</p>
			<Link to={"/"} className={styles.errorPage__homeButton}>
				Home page
			</Link>
		</div>
	);
};
export { ErrorPage };
