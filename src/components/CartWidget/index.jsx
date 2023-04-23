import { IconButton } from '@mui/material'
import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
// import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {
  // const { totalProducts } = useCartContext();

  return (
    <IconButton
    size="large"
    aria-label="show 1 new notifications"
    color="inherit">
      <Badge badgeContent={2} color="error">
        <ShoppingCartTwoToneIcon />
      </Badge>
    </IconButton>
  )
}

export default CartWidget