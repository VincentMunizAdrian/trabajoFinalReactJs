import { Box, Container } from '@mui/material'
import Cards from '../Cards'
import { useEffect, useState } from 'react';

export const FilterItems = ({ posicion, torneo, pais, año }) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
    fetch("../../../products.json")
        .then((response) => response.json())
        .then((data) => {
        setProductos(data);
        });
    }, []);

    return (
        <div>
            <Container>
                <Box display="grid" gridTemplateColumns="repeat(4, 3fr)" gap={8}>{productos.map((items, id) => (items.posicion == posicion || items.torneo == torneo || items.pais == pais || items.año == año ? <Cards key={id} items={items} /> : null))}</Box>
            </Container>
        </div>
    )
}