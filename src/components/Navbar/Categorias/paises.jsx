import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';

const Paises = () => {
    const [desplegarListaPais, setOpenlistaPais] = React.useState(false);

  const handleClick2 = () => {
    setOpenlistaPais(!desplegarListaPais);
  };

  return (
    <>
    <ListItemButton onClick={handleClick2}>
            <ListItemText primary="Pais" />
            {desplegarListaPais ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={desplegarListaPais} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/Argentina">
                  <ListItemText primary="Argentina" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/Alemania">
                  <ListItemText primary="Alemania" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/Brasil">
                  <ListItemText primary="Brasil" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
          </Collapse>
    </>
  )
}

export default Paises