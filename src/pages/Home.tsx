import styles from "/src/scss/module/Home.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
import { allUsers, getUsers } from "../utils/allUsersInDataBase";

const Home = () => {
	const navigate = useNavigate();
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	const getRememberedFlag = async (): Promise<object | undefined> => {
		const filteredData = allUsers.find(user => {
			if (user.email === getLocalStorage("email")) {
				return user;
			}
		});

		return filteredData || undefined;
	};

	const handleLink = async (): Promise<void> => {
		setIsDisabled(true);
		const isUserExist = await getRememberedFlag();
		// isUserExist !== undefined ? navigate("dupa") : navigate("AuthOptions");
		isUserExist !== undefined ? navigate("AuthOptions") : navigate("dupa");
	};
	useEffect(() => {
		setIsDisabled(true);
		const uploadAllUsers = async () => {
			allUsers.push(...(await getUsers()));
			setIsDisabled(false);
		};
		uploadAllUsers();
	}, []);
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles["header__main--header"]}>Live Score</h1>
				<h2 className={styles["header__secondary--header"]}>
					Football score for free
				</h2>
				<button
					onClick={handleLink}
					disabled={isDisabled}
					className={styles.header__button}>
					TRY IT
				</button>
			</header>
			<div className={styles.img} aria-label='Add page'></div>
		</>
	);
};
export { Home };
