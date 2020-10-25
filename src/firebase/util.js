import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import config from "./config";

firebase.initializeApp(config);
firebase.analytics();

export default firebase;