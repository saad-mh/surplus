import { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  IconButton, 
  Typography, 
  Menu, 
  Container, 
  Button, 
  MenuItem,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAuth = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      loginWithRedirect();
    }
    handleCloseNavMenu();
  };

  const pages = [
    { title: 'About Us', path: '/about-us' },
    { title: 'Get Involved', path: '/get-involved' },
    { title: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - always visible */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Surplus
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center' }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.title} 
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={handleAuth}>
                <Typography textAlign="center">
                  {isAuthenticated ? 'Logout' : 'Login'}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop menu - centered */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            gap: 2
          }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.path}
                sx={{ color: 'white' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Auth button - right aligned, desktop only */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}>
            <Button 
              color="inherit"
              onClick={handleAuth}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;