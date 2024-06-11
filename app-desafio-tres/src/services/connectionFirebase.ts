import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAD-9IcVMVm3SYdm-tAcNFkHMXyLX0sPE",
  authDomain: "pb-desafio3.firebaseapp.com",
  projectId: "pb-desafio3",
  storageBucket: "pb-desafio3.appspot.com",
  messagingSenderId: "275985839066",
  appId: "1:275985839066:web:4c45df1cb306e5425486e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
