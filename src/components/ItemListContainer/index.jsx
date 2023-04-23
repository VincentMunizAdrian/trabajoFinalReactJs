import { useEffect, useState } from "react"
import db from "../../../db/firebase-config"
import { getDocs, collection, query, where } from "firebase/firestore"
import styles from "./itemListContainer.module.css";
import { useParams } from "react-router-dom"
import ItemList from "../ItemList"

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()


  useEffect(() => {
    const queryCollection = collection(db, "items");

    if (categoryId) {
      const queryFilter = query(queryCollection, 
        where("pais", "==", categoryId)
        )
      getDocs(queryFilter).then((res) => 
        setItems(
          res.docs.map((item) => ({id: item.id, ...item.data() })),
        )
      );
    } else {
        getDocs(queryCollection).then((res) => 
        setItems(
          res.docs.map((item) => ({ id: item.id, ...item.data(), })),
          ),
        );
      }
    }, [categoryId]);

  return (
    <div>
      <div className={styles.contenedorHome}>
        <img src="https://i.imgur.com/jNT4tQj.png" alt="banner" className={styles.banner}/>
      </div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer