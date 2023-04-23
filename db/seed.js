import { collection, addDoc } from "firebase/firestore"
import db from "./firebase-config.js"
import products from "../products.js";

const itemsListado = collection(db, "items");

const promises = products.map(product => addDoc(itemsListado, product))

Promise.all(promises)
    .then(() => {
        console.log("done");
        process.exit(0);
    })