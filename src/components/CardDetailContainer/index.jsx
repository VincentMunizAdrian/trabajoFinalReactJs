import { useEffect, useState } from "react";
// import { Navigate, useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Loading from '../Loading';
import { doc, getDoc} from 'firebase/firestore';
import CardDetail from "../CardDetail";
import db from "../../../db/firebase-config";


const CardDetailContainer = () => {
    const [items, setItems] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
		const queryDoc = doc(db, "items", itemId);
		getDoc(queryDoc).then((res) => setItems({ id: res.id, ...res.data()}));
    }, [itemId]);

return (
    <CardDetail items={items}/>
    );
};

export default CardDetailContainer;