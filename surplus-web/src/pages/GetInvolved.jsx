import { Box, Container, Typography, Paper, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

function GetInvolved() {
  const opportunities = [
    {
      title: "Become a Food Provider",
      description: "Have surplus food? List your items on our marketplace and help reduce food waste while reaching those in need.",
      action: "Register Now"
    },
    {
      title: "Volunteer",
      description: "Help with food collection, distribution, or community outreach. Make a direct impact in your community.",
      action: "Join Us"
    },
    {
      title: "Spread the Word",
      description: "Follow us on social media and help spread awareness about food waste and our mission.",
      action: "Share"
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Get Involved
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Join us in making a difference
          </Typography>
          
          <Grid container spacing={4}>
            {opportunities.map((opp, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {opp.title}
                    </Typography>
                    <Typography>
                      {opp.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {opp.action}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default GetInvolved; 