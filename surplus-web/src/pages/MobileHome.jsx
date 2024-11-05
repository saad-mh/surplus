import { Box, Typography, Button, Stack, Card, CardContent, Container, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EcoIcon from '@mui/icons-material/Spa';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useAuth0 } from '@auth0/auth0-react';

function MobileHome() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const featuredDeals = [
    {
      title: "Fresh Pastries",
      restaurant: "Baker's Delight",
      originalPrice: "₹15",
      discountedPrice: "₹6",
      timeLeft: "2 hours"
    },
    {
      title: "Sushi Platter",
      restaurant: "Sakura Japanese",
      originalPrice: "₹30",
      discountedPrice: "₹12",
      timeLeft: "1 hour"
    }
  ];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: 'background.default',
      pb: 8
    }}>
      {/* Hero Section */}
      <Container maxWidth="sm" sx={{ pt: 2 }}>
        <Box sx={{ 
          background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
          color: 'white',
          p: 3,
          pt: 6,
          pb: 4,
          borderRadius: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Reduce Food Waste
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Connect with local restaurants and reduce food waste
          </Typography>
          {!isAuthenticated && (
            <Button 
              variant="contained" 
              color="secondary"
              fullWidth
              size="large"
              onClick={() => loginWithRedirect()}
              sx={{ 
                borderRadius: '12px',
                textTransform: 'none',
                fontWeight: 'bold'
              }}
            >
              Get Started
            </Button>
          )}
        </Box>
      </Container>

      {/* Quick Stats */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 1 }}>
              <Typography variant="h5" color="primary" fontWeight="bold">50+</Typography>
              <Typography variant="caption">Restaurants</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 1 }}>
              <Typography variant="h5" color="primary" fontWeight="bold">1k+</Typography>
              <Typography variant="caption">Meals Saved</Typography>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ textAlign: 'center', p: 1 }}>
              <Typography variant="h5" color="primary" fontWeight="bold">60%</Typography>
              <Typography variant="caption">Avg. Savings</Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Deals */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Featured Deals
        </Typography>
        <Stack spacing={2}>
          {featuredDeals.map((deal, index) => (
            <Card key={index} sx={{ 
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="h6">{deal.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{deal.restaurant}</Typography>
                  </Box>
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="body2" sx={{ textDecoration: 'line-through' }}>{deal.originalPrice}</Typography>
                    <Typography variant="h6" color="primary">{deal.discountedPrice}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <AccessTimeIcon fontSize="small" color="action" />
                    <Typography variant="caption">{deal.timeLeft} left</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <LocalOfferIcon fontSize="small" color="action" />
                    <Typography variant="caption">60% off</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>

      {/* How It Works */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          How It Works
        </Typography>
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <StorefrontIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Browse Deals</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Find discounted meals from restaurants near you
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <LocalDiningIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Reserve & Pick Up</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Confirm through the app and pick up your food
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <EcoIcon color="primary" sx={{ fontSize: 32 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Save Food & Money</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Help reduce waste while saving up to 70%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Stack>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card sx={{ 
          bgcolor: 'primary.light', 
          color: 'white',
          p: 3,
          borderRadius: '16px'
        }}>
          <Typography variant="h6" gutterBottom align="center">
            Ready to Start Saving?
          </Typography>
          <Typography variant="body2" align="center" sx={{ mb: 2 }}>
            Join thousands of people fighting food waste
          </Typography>
          <Button 
            variant="contained" 
            color="secondary"
            fullWidth
            component={Link}
            to="/marketplace"
            sx={{ 
              borderRadius: '12px',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Explore Marketplace
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default MobileHome;