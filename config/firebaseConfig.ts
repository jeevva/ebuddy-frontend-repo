import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import firebaseEnv from "../firebase.json";

const serviceAccount = firebaseEnv;

const app = initializeApp(serviceAccount);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      Cookies.set("userEmail", user.email ?? "", { expires: 7 });
    }

    return user.email;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return null;
  }
};
