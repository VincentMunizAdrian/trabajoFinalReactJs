import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from "./checkout.module.css";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import db from "../../../db/firebase-config"
import { useState } from 'react';

function Checkout() {
    const { cart, totalPrice } = useCartContext();
    const [inputNombre, setInputNombre] = useState("");
    const [inputApellido, setInputApellido] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputTelefono, setInputTelefono] = useState("");

	const order = {
        comprador: {
            Nombre: inputNombre,
            Apellido: inputApellido,
            Email: inputEmail,
            Telefono: inputTelefono,
        },
		items: cart.map((items) => ({
			id: items.id,
			nombre: items.nombre,
			precio: items.precio,
			quantity: items.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const ordersCollection = collection(db, "order");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};


    return (
        <Form

        className={styles.formulario}>
        <Row>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                onChange={(e) => setInputNombre(e.target.value)}
                value={inputNombre} placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control 
                onChange={(e) => setInputApellido(e.target.value)}
                value={inputApellido} placeholder="Apellido" />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control 
                onChange={(e) => setInputTelefono(e.target.value)}
                value={inputTelefono} placeholder="Telefono" />
            </Form.Group>
        </Row>
        
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" 
            onChange={(e) => setInputEmail(e.target.value)}
            value={inputEmail} placeholder="Email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Repetir Email</Form.Label>
            <Form.Control type="email" placeholder="Repetir Email" />
            </Form.Group>

        </Row>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Link to="/detalle-de-compra">
        <Button variant="primary" type="submit" onClick={handleClick}>
            Submit
        </Button>
            </Link>
        </Form>
    );
}

export default Checkout;