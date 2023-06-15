import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/fireBase";

interface AllUsers {
	email?: string;
	name?: string;
	password?: string;
	phone?: number;
}

export const allUsers: AllUsers[] = [{}];

export const getUsers = async () => {
	const userCollection = collection(db, "users");
	const users = await getDocs(userCollection);
	const filteredData = users.docs.map(doc => doc.data());
	return filteredData;
};
