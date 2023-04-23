import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart";
import styles from "./cart.module.css"

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	if (cart.length === 0) {
		return (
			<>
				<p className={styles.titulo}>No hay elementos en el carrito</p>
				<Link to="/">Ir a comprar</Link>
			</>
		);
	}

	return (
		<div className={styles.compradiv}>
			{cart.map((items) => (
				<ItemCart key={items.id} items={items} />
			))}
			<p>total: {totalPrice()}</p>
			<Link to="/checkout">
			<button>Finalizar compra</button>
			</Link>
		</div>
	);
};

export default Cart;
