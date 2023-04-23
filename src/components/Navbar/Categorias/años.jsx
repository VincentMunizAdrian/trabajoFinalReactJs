import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';

const Años = () => {
    const [desplegarListaAño, setOpenlistaAño] = React.useState(false);

    const handleClick4 = () => {
      setOpenlistaAño(!desplegarListaAño);
    };

  return (
    <>
    <ListItemButton onClick={handleClick4}>
            <ListItemText primary="Año" />
            {desplegarListaAño ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={desplegarListaAño} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/2023">
                  <ListItemText primary="2023" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/2022">
                  <ListItemText primary="2022" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <Link to="category/2005">
                  <ListItemText primary="2005" />
                </Link>
              </ListItemButton>
            </List>
            <Divider />
          </Collapse>
    </>
  )
}

export default Años