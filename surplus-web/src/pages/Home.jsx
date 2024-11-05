import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    {
      title: "Reduce Food Waste",
      description: "Join our mission to minimize food waste by connecting surplus food with those who need it.",
      image: "/images/reduce-waste.jpg"
    },
    {
      title: "Build Community",
      description: "Create meaningful connections within your local community through food sharing.",
      image: "/images/community.jpg"
    },
    {
      title: "Make a Difference",
      description: "Every meal shared is a step towards a more sustainable and equitable future.",
      image: "/images/impact.jpg"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: 'primary.main', 
          color: 'white',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom>
                Share Food, Share Hope
              </Typography>
              <Typography variant="h5" paragraph>
                Join our community-driven marketplace to reduce food waste and make 
                a positive impact in your local area.
              </Typography>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large"
                component={Link}
                to="/marketplace"
                sx={{ mt: 2 }}
              >
                Explore Marketplace
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center'
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Impact Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6, mt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom>
                Our Impact
              </Typography>
              <Typography paragraph>
                Every day, millions of pounds of food go to waste while people go hungry. 
                Through Surplus, we're changing that reality one meal at a time.
              </Typography>
              <Typography paragraph>
                By connecting those with excess food to those who can use it, we're 
                building a more sustainable and equitable food system for everyone.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                to="/get-involved"
                sx={{ mt: 2 }}
              >
                Get Involved
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Add statistics or impact numbers here */}
              <Paper elevation={3} sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h4" color="primary">1000+</Typography>
                    <Typography>Meals Shared</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" color="primary">500+</Typography>
                    <Typography>Active Users</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" color="primary">50+</Typography>
                    <Typography>Local Partners</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" color="primary">2 tons</Typography>
                    <Typography>Food Saved</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container maxWidth="md" sx={{ textAlign: 'center', my: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Make a Difference?
        </Typography>
        <Typography paragraph sx={{ mb: 4 }}>
          Join our growing community of food-sharing heroes and help us create a 
          world where no edible food goes to waste.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              component={Link}
              to="/marketplace"
            >
              Browse Marketplace
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="outlined" 
              color="primary" 
              size="large"
              component={Link}
              to="/about-us"
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


export default Home;