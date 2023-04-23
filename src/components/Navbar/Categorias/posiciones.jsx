import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';

const Posiciones = () => {
    const [desplegarListaPosicion, setOpenlistaPosicion] = React.useState(false);

    const handleClick3 = () => {
      setOpenlistaPosicion(!desplegarListaPosicion);
    };

  return (
    <>
    <ListItemButton onClick={handleClick3}>
            <ListItemText primary="Posicion" />
            {desplegarListaPosicion ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={desplegarListaPosicion} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to={`category/Arquero`}>
                <ListItemText primary="Arqueros" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to={`category/Defensor`}>
                  <ListItemText primary="Defensores" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
              <Link to={`category/Mediocampista`}>
                <ListItemText primary="Mediocampistas" />
              </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
              <Link to={`category/Delantero`}>
                <ListItemText primary="Delanteros" />
              </Link>
              </ListItemButton>
            </List>
            <Divider />
          </Collapse>
    </>
  )
}

export default Posiciones