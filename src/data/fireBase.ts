import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBnhy-u4-ICYmyOgVlMKr6Djh-1QvhXTHU",
	authDomain: "football-app-12c7b.firebaseapp.com",
	projectId: "football-app-12c7b",
	storageBucket: "football-app-12c7b.appspot.com",
	messagingSenderId: "351403970130",
	appId: "1:351403970130:web:421c68ad3f1ad297c9598b",
	measurementId: "G-3Y30BEVP50",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
