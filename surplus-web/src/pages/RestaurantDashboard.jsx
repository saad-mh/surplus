import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardActions,
  Tab,
  Tabs
} from '@mui/material';
import AddFoodItem from '../components/dashboard/AddFoodItem';
import FoodItemsList from '../components/dashboard/FoodItemsList';
import DashboardStats from '../components/dashboard/DashboardStats';

function RestaurantDashboard() {
  const [currentTab, setCurrentTab] = useState(0);
  const [isAddingItem, setIsAddingItem] = useState(false);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h4" component="h1">
              Restaurant Dashboard
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsAddingItem(true)}
            >
              Add New Item
            </Button>
          </Box>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12}>
          <DashboardStats />
        </Grid>

        {/* Main Content */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Tabs value={currentTab} onChange={handleTabChange}>
              <Tab label="Active Listings" />
              <Tab label="Past Listings" />
              <Tab label="Analytics" />
            </Tabs>

            <Box sx={{ mt: 3 }}>
              {currentTab === 0 && <FoodItemsList status="active" />}
              {currentTab === 1 && <FoodItemsList status="past" />}
              {currentTab === 2 && (
                <Typography>Analytics coming soon...</Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Add Food Item Dialog */}
      <AddFoodItem 
        open={isAddingItem} 
        onClose={() => setIsAddingItem(false)} 
      />
    </Container>
  );
}

export default RestaurantDashboard; 