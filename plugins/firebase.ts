import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp

    const firebaseConfig = {
        apiKey: "AIzaSyDl-8gwDUPTSX4HVq_GCD79-Nrh3XYzAgA",
        authDomain: "dalyo-dalyo.firebaseapp.com",
        projectId: "dalyo-dalyo",
        storageBucket: "dalyo-dalyo.appspot.com",
        messagingSenderId: "556730108935",
        appId: "1:556730108935:web:a6a7e434ed191e3928eea2"
    };

    const app = initializeApp(firebaseConfig);
})