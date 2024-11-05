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
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginDialog from '../auth/LoginDialog';

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  const { logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();
  
  const isMobileHomePage = location.pathname === '/homepagem';

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout({ returnTo: window.location.origin });
    } else {
      setLoginDialogOpen(true);
    }
    handleCloseNavMenu();
  };

  const handleProfileClick = () => {
    if (user?.user_metadata?.user_type === 'business') {
      navigate('/dashboard');
    } else {
      navigate('/profile');
    }
    handleCloseNavMenu();
  };

  const pages = [
    { title: 'About Us', path: '/about-us' },
    { title: 'Get Involved', path: '/get-involved' },
    { title: 'Contact Us', path: '/contact-us' }
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile menu button - left side when on mobile home */}
            {isMobileHomePage && (
              <Box sx={{ 
                display: { xs: 'flex', md: 'none' },
                position: 'absolute',
                left: 16
              }}>
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
              </Box>
            )}

            {/* Logo - centered on mobile home, left aligned elsewhere */}
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                ...(isMobileHomePage ? {
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                } : {
                  mr: 2
                })
              }}
            >
              Surplus
            </Typography>

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

            {/* Auth and Profile buttons - right aligned, desktop only */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex', gap: 2 } }}>
              {isAuthenticated && (
                <Button 
                  color="inherit"
                  onClick={handleProfileClick}
                >
                  {user?.user_metadata?.user_type === 'business' ? 'Dashboard' : 'Profile'}
                </Button>
              )}
              <Button 
                color="inherit"
                onClick={handleAuthClick}
              >
                {isAuthenticated ? 'Logout' : 'Login'}
              </Button>
            </Box>

            {/* Mobile menu button - right aligned when not on mobile home */}
            {!isMobileHomePage && (
              <Box sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                flexGrow: 1,
                justifyContent: 'flex-end'
              }}>
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
              </Box>
            )}

            {/* Mobile Menu Dropdown */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
              {isAuthenticated && (
                <MenuItem onClick={handleProfileClick}>
                  <Typography textAlign="center">
                    {user?.user_metadata?.user_type === 'business' ? 'Dashboard' : 'Profile'}
                  </Typography>
                </MenuItem>
              )}
              <MenuItem onClick={handleAuthClick}>
                <Typography textAlign="center">
                  {isAuthenticated ? 'Logout' : 'Login'}
                </Typography>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <LoginDialog 
        open={loginDialogOpen} 
        onClose={() => setLoginDialogOpen(false)} 
      />
    </>
  );
}

export default Navbar;