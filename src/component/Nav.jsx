// Nav.jsx — FINAL FIXED VERSION (works 100% with your AuthContext)
import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Button, IconButton,
  Box, Stack, Divider, Drawer, List, ListItem,
  ListItemButton, ListItemText, Avatar, CircularProgress
} from '@mui/material';
import LocationCity from '@mui/icons-material/LocationCity';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx'; // ← Correct case!


export function Header({ currentPage = 'home' }) {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth(); // ← This is the key!
  const [mobileOpen, setMobileOpen] = useState(false);

  const routes = {
    home: '/',
    destinations: '/destination',
    hotels: '/hotels',
    'plan-trip': '/plantravel',
    'travel-guide': '/travelguide',
    dashbord: '/dashboard',
    signin: '/login',
    signup: '/signup',
  };

  const handleNavigate = (page) => {
    navigate(routes[page]);
    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileOpen(false);
  };

  const isActive = (page) => currentPage === page;

  // Base nav items (always shown)
  const baseNavItems = [
    { label: 'Home', key: 'home' },
    { label: 'Destinations', key: 'destinations' },
    { label: 'Hotels', key: 'hotels' },
    { label: 'Plan Trip', key: 'plan-trip' },
    { label: 'Travel Guide', key: 'travel-guide' },
  ];

  // Only add Dashboard when logged in
  const navItems = user ? [...baseNavItems, { label: 'Dashboard', key: 'dashbord' }] : baseNavItems;

  // Mobile Drawer
  const drawer = (
    <Box sx={{ width: 280, bgcolor: 'background.paper' }}>
      <Box sx={{ p: 3, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }} onClick={() => handleNavigate('home')}>
          <LocationCity sx={{ fontSize: 40, color: '#16a34a' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sri Lanka Explorer</Typography>
        </Box>
      </Box>

      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.key} disablePadding>
            <ListItemButton
              onClick={() => handleNavigate(item.key)}
              selected={isActive(item.key)}
              sx={{
                borderRadius: 2,
                my: 0.5,
                '&.Mui-selected': { bgcolor: '#f0fdf4', color: '#16a34a' },
              }}
            >
              {item.key === 'dashbord' && <DashboardIcon sx={{ mr: 1 }} />}
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: isActive(item.key) ? 600 : 500 }} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Logout only if logged in */}
        {user && (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ color: 'error.main' }}>
              <LogoutIcon sx={{ mr: 1 }} />
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>

      <Divider />

      {/* Bottom section in drawer */}
      <Box sx={{ p: 3 }}>
        {loading ? (
          <CircularProgress size={24} />
        ) : user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: '#16a34a' }}>{user.name?.[0]?.toUpperCase() || 'U'}</Avatar>
            <Box>
              <Typography fontWeight="bold">{user.name || 'User'}</Typography>
              <Typography variant="body2" color="text.secondary">{user.email}</Typography>
            </Box>
          </Box>
        ) : (
          <Stack spacing={2}>
            <Button fullWidth variant="text" onClick={() => handleNavigate('signin')}>Sign In</Button>
            <Button fullWidth variant="contained" color="success" onClick={() => handleNavigate('signup')}>Sign Up</Button>
          </Stack>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={1} sx={{ bgcolor: 'white', borderBottom: 1, borderColor: 'divider' }}>
        <Toolbar sx={{ maxWidth: '1400px', mx: 'auto', width: '100%', px: { xs: 2, lg: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer', flexGrow: { xs: 1, md: 0 } }} onClick={() => handleNavigate('home')}>
            <LocationCity sx={{ fontSize: 32, color: '#16a34a' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Sri Lanka Explorer</Typography>
          </Box>

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={4} sx={{ mx: 6, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.key}
                onClick={() => handleNavigate(item.key)}
                sx={{
                  color: isActive(item.key) ? '#16a34a' : '#374151',
                  fontWeight: isActive(item.key) ? 600 : 500,
                  textTransform: 'none',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* Right Side — THIS IS THE MOST IMPORTANT PART */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Show user info + logout when logged in */}
            {loading ? (
              <CircularProgress size={28} />
            ) : user ? (
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar sx={{ width: 36, height: 36, bgcolor: '#16a34a' }}>
                    {user.name?.[0]?.toUpperCase() || 'U'}
                  </Avatar>
                  <Typography fontWeight="medium" noWrap sx={{ maxWidth: 100 }}>
                    {user.name || 'User'}
                  </Typography>
                </Box>
                <Button variant="outlined" color="error" size="small" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            ) : (
              /* Show Sign In / Sign Up only when NOT logged in */
              <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button variant="text" onClick={() => handleNavigate('signin')}>Sign In</Button>
                <Button variant="contained" color="success" onClick={() => handleNavigate('signup')}>Sign Up</Button>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        {drawer}
      </Drawer>
    </>
  );
}

export default Header;