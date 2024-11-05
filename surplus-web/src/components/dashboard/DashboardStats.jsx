import { Grid, Paper, Typography, Box } from '@mui/material';

function DashboardStats() {
  const stats = [
    { label: 'Active Listings', value: '12' },
    { label: 'Items Sold', value: '45' },
    { label: 'Total Revenue', value: '$234.50' },
    { label: 'Food Saved (kg)', value: '67' }
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography variant="h4" component="div">
              {stat.value}
            </Typography>
            <Typography color="text.secondary">
              {stat.label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardStats; 