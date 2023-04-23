import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Torneos = () => {
  const [desplegarLista, setOpenlista] = React.useState(false);

  const handleClick = () => {
    setOpenlista(!desplegarLista);
  };
  
  return (
    <>
    <ListItemButton onClick={handleClick}>
            <ListItemText primary="Torneos" />
            {desplegarLista ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={desplegarLista} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/mundial">
                  <ListItemText primary="Mundial de Futbol" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/champions">
                  <ListItemText primary="Champions League" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/torneoArgentino">
                  <ListItemText primary="Torneo Argentino" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
          </Collapse>
    </>
  )
}

export default Torneos