import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import CartWidget from '../CartWidget';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Iconos = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
    >
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
        <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
    </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
    >
        <MenuItem>
            <Link to="/cart">
                <CartWidget/>
            </Link>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        </MenuItem>
    </Menu>
    );

return (
    <>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to="/cart">
                <CartWidget/>
            </Link>
            <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            >
            <AccountCircle />
            </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
            >
            <MoreIcon />
            </IconButton>
        </Box>

    {renderMobileMenu}
    {renderMenu}
    </>
)
}

export default Iconos

