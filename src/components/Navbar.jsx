import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Our Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const handleClick = (href) => {
    handleClose();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ p: 2 }}>
      <Toolbar disableGutters>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="PRISMALIS" style={{ height: 40, marginRight: 16 }} />
        </Box>

        {isMobile ? (
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: 'text.primary' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{
                '& .MuiPaper-root': {
                  mt: 1.5,
                  minWidth: 180
                }
              }}
            >
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleClick(item.href)}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(237, 28, 36, 0.08)',
                      color: 'primary.main'
                    }
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, pr: 4 }}>
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                variant="body1"
                component="a"
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                sx={{
                  color: 'text.primary',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  '&:hover': {
                    color: 'primary.main'
                  }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
