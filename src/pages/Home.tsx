import { Link } from "react-router-dom";
import styles from "/src/scss/module/Home.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../data/fireBase";

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const userCollection = collection(db, "users");
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const getUsers = async (): Promise<object | undefined> => {
		try {
			const users = await getDocs(userCollection);
			const filteredData = users.docs.map(doc => ({ ...doc.data() }));
			console.log("dupa1");
			return filteredData;
		} catch (error) {}
	};

	const Link = async (): Promise<void> => {
		// getUsers();
		console.log("ghv");
		setIsDisabled(true);
		navigate("AuthOptions");
	};
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles["header__main--header"]}>Live Score</h1>
				<h2 className={styles["header__secondary--header"]}>
					Football score for free
				</h2>
				<button
					onClick={Link}
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
