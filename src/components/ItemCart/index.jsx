import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from "./itemCart.module.css"

const ItemCart = ({ items }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className={styles.itemCart}>
            <img src={items.imagen} alt={items.nombre} />
            <div>
                <p>Título: {items.nombre}</p>
                <p>Cantidad: {items.quantity}</p>
                <p>Precio u.: {items.precio}</p>
                <p>Subtotal: ${items.quantity * items.precio}</p>
                <button onClick={() => removeProduct(items.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart