import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCJe0l2QrmIhsjsNI_hn-aKNF7oY0_ZnxE",
    authDomain: "crud-8adf5.firebaseapp.com",
    databaseURL: 'gs://crud-8adf5.appspot.com',
    projectId: "crud-8adf5",
    storageBucket: "crud-8adf5.appspot.com",
    messagingSenderId: "405629308956",
    appId: "1:405629308956:web:0b272898ea071b59c34fd9",
    measurementId: "G-QJX462K990"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
