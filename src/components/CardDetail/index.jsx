import React, { useState } from 'react'
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';


const CardDetail = ({ items }) => {
    const [goToCart, setGoToCart] = useState(false)
    const { addProduct } = useCartContext();

    
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(items, quantity);
        console.log(`Compraste ${quantity} unidades`);
    }
    
    
    return (
    <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" alt={items.nombre} height="500" image={items.imagen}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {items.nombre}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {items.pais}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {items.posicion}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {items.torneo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        $ {items.precio}
                    </Typography>
                </CardContent>
                
            <CardActions>
                {goToCart ? <Link to={'/cart'}>Terminar Compra</Link> : <ItemCount initial={1} stock={5} onAdd={onAdd}/>}
                {/* <Button size="small">Agregar al carrito</Button> */}
            </CardActions>
        </Card>
    )
}

export default CardDetail