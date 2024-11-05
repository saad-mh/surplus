import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Box
} from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth0 } from '@auth0/auth0-react';

function LoginDialog({ open, onClose }) {
  const { loginWithRedirect } = useAuth0();

  const handleIndividualLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        userType: 'individual'
      },
      appState: {
        returnTo: '/',
        userType: 'individual'
      }
    });
    onClose();
  };

  const handleBusinessLogin = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        userType: 'business'
      },
      appState: {
        returnTo: '/',
        userType: 'business'
      }
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ textAlign: 'center' }}>Choose Account Type</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                textAlign: 'center',
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'action.hover',
                }
              }}
              onClick={handleIndividualLogin}
            >
              <PersonIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
              <Typography variant="h6" gutterBottom>
                Individual
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Buy and sell surplus food in your community
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 3,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 1,
                textAlign: 'center',
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'action.hover',
                }
              }}
              onClick={handleBusinessLogin}
            >
              <StorefrontIcon sx={{ fontSize: 48, mb: 2, color: 'primary.main' }} />
              <Typography variant="h6" gutterBottom>
                Business
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Manage your restaurant's surplus food inventory
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
}

export default LoginDialog; 