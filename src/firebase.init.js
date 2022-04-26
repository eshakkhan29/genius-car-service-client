import {  } from "@testing-library/user-event/dist/utils";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVF_e7QAt08jsjY4dR8x-uCNaOVHyCnvc",
  authDomain: "genius-car-service-client.firebaseapp.com",
  projectId: "genius-car-service-client",
  storageBucket: "genius-car-service-client.appspot.com",
  messagingSenderId: "987134319773",
  appId: "1:987134319773:web:4bffd00c32ae5744518874"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
