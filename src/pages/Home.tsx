import styles from "/src/scss/module/Home.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/fireBase";
import { BREAK_POINT } from "../utils/breakpoint";

interface AllUsers {
	email?: string;
	name?: string;
	password?: string;
	phone?: number;
}

const Home = () => {
	const navigate = useNavigate();
	const [isDisabled, setIsDisabled] = useState<boolean>(true);
	const [allUsers, setAllUsers] = useState<AllUsers[]>([{}]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const getUsers = async () => {
		const userCollection = collection(db, "users");
		const users = await getDocs(userCollection);
		const filteredData = users.docs.map(doc => doc.data());
		return filteredData;
	};

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
		isUserExist === undefined ? navigate("AuthOptions") : navigate("dupa");
	};

	useEffect(() => {
		const uploadAllUsers = async () => {
			setAllUsers(await getUsers());
			setIsDisabled(false);
		};
		uploadAllUsers();
	}, []);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{windowWidth > BREAK_POINT ? (
				<div className={styles.temporaryRwdError}>
					<h1 className={styles.temporaryRwdError__header}>Oops!</h1>
					<p className={styles.temporaryRwdError__solution}>
						"I'm sorry, but for now we're only working on responsiveness for
						small devices. Please open the Developer Tools and select whichever
						phone model you prefer."
					</p>
				</div>
			) : (
				<>
					<header className={styles.header}>
						<h1 className={styles["header__main--header"]}>Live Score</h1>
						<h2 className={styles["header__secondary--header"]}>
							Football score for free
						</h2>
						<button
							onClick={handleLink}
							disabled={isDisabled}
							className={
								isDisabled
									? styles["header__button--disabled"]
									: styles.header__button
							}>
							TRY IT
						</button>
					</header>
					<div className={styles.img} aria-label='Add page'></div>
				</>
			)}
		</>
	);
};
export { Home };
