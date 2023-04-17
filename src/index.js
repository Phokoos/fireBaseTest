// import "./js/galleryCreater";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJl6Ad8jyFnNkdyvWS-vuWG1MshoteFzQ",
  authDomain: "fir-test-66ebf.firebaseapp.com",
  projectId: "fir-test-66ebf",
  storageBucket: "fir-test-66ebf.appspot.com",
  messagingSenderId: "523632472781",
  appId: "1:523632472781:web:4fa322122471b6e0be2f84",
  measurementId: "G-VSQ4DDXZKJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const email = "hulkovskyi@gmail.com";
const password = "123456";


const loginEmailPassword = async () => {
	const loginEmail = email;
	const loginPassword = password;

	
	try {
		const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
		console.log(userCredential.user);	
	} catch (error) {
		console.log(error);
	}
}

const createAccount = async () => {
	const loginEmail = email;
	const loginPassword = password;

	
	try {
		const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
		console.log(userCredential.user);	
	} catch (error) {
		console.log(error);
	}
}
// createAccount();
// loginEmailPassword();
