import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import config from "./config";

firebase.initializeApp(config);

const fdb = firebase.firestore();
const rdb = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export { fdb, rdb, auth, storage };