import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const auth = getAuth();
        if(!auth?.currentUser?.uid){
            return abortNavigation()
        }
    })
})