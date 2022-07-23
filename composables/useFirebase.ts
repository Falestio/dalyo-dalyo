import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
  } from "firebase/auth";

export const useCreateUser = async (email, password) => {
    const auth = getAuth();

    const credentials = createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

    return credentials;
}

export const useLogin = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        console.log(error)
      });
    
      return credentials
}

export const signOut = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    console.log(result)
}

export const initUser = async () => {

}