import React from 'react'
import { Box, Container } from "@mui/material"
import Cards from "../Cards"

const ItemList = ({items = []}) => {
  return (
    <Container>
        <Box 
            display="grid" 
            gridTemplateColumns="repeat(4, 3fr)" 
            gap={8}>
            {items.map((items) => (
            <Cards key={items.id} items = {items}/>))}
        </Box>
    </Container>
  )
}

export default ItemList