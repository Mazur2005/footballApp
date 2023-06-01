import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBnhy-u4-ICYmyOgVlMKr6Djh-1QvhXTHU",
	authDomain: "football-app-12c7b.firebaseapp.com",
	projectId: "football-app-12c7b",
	storageBucket: "football-app-12c7b.appspot.com",
	messagingSenderId: "351403970130",
	appId: "1:351403970130:web:421c68ad3f1ad297c9598b",
	measurementId: "G-3Y30BEVP50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
