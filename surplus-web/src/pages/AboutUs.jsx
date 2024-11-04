import { Box, Container, Typography, Paper } from '@mui/material';

function AboutUs() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            Reducing Food Waste, Building Community
          </Typography>
          <Typography paragraph>
            Surplus is a community-driven platform dedicated to reducing food waste 
            while strengthening local connections. Our marketplace enables businesses 
            and individuals to share surplus food that would otherwise go to waste.
          </Typography>
          <Typography paragraph>
            Founded in 2024, we believe that every meal saved is a step towards a 
            more sustainable future. Our platform connects those with excess food to 
            those who can use it, creating a more efficient and sustainable food system.
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Our Mission
          </Typography>
          <Typography paragraph>
            To create a world where no edible food goes to waste, by building 
            technology that makes it easy to share and redistribute surplus food 
            within communities.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default AboutUs; 