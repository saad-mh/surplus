import { 
  Box, 
  Typography, 
  TextField, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  Button,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function Marketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  // Dummy data - replace with actual data from your backend
  const items = [
    {
      id: 1,
      title: "Small Television",
      price: "free",
      image: "https://placehold.co/300x200",
      category: "electronics",
      description: "A small television"
    },
    {
      id: 2,
      title: "Organic Fruit Pack",
      price: "free",
      image: "https://placehold.co/300x200",
      category: "fruits",
      description: "Selection of seasonal organic fruits"
    },
    {
      id: 3,
      title: "Bakery Surplus",
      price: "free",
      image: "https://placehold.co/300x200",
      category: "bakery",
      description: "Fresh bread and pastries from local bakery"
    },
    // Add more items as needed
  ];

  return (
    <Box sx={{ p: 4 }}>
      {/* Header Section */}
      <Typography variant="h4" sx={{ mb: 4 }}>
        Marketplace
      </Typography>

      {/* Search and Filter Section */}
      <Box sx={{ 
        display: 'flex', 
        gap: 2, 
        mb: 4,
        flexWrap: 'wrap'
      }}>
        <TextField
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ flexGrow: 1, minWidth: '200px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="vegetables">Vegetables</MenuItem>
            <MenuItem value="fruits">Fruits</MenuItem>
            <MenuItem value="bakery">Bakery</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Items Grid */}
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  {item.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Marketplace; 