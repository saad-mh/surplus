import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  MenuItem,
  Box
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';

function AddFoodItem({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: '',
    unit: 'portions',
    expiryDate: new Date(),
    price: '',
    category: '',
    allergens: '',
    image: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission logic here
    console.log(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add New Food Item</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Item Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                label="Unit"
                name="unit"
                value={formData.unit}
                onChange={handleChange}
                required
              >
                <MenuItem value="portions">Portions</MenuItem>
                <MenuItem value="kg">Kilograms</MenuItem>
                <MenuItem value="items">Items</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Expiry Date & Time"
                  value={formData.expiryDate}
                  onChange={(newValue) => {
                    setFormData(prev => ({
                      ...prev,
                      expiryDate: newValue
                    }));
                  }}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                select
                value={formData.category}
                onChange={handleChange}
                required
              >
                <MenuItem value="meals">Prepared Meals</MenuItem>
                <MenuItem value="produce">Fresh Produce</MenuItem>
                <MenuItem value="bakery">Bakery Items</MenuItem>
                <MenuItem value="dairy">Dairy Products</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Allergens"
                name="allergens"
                value={formData.allergens}
                onChange={handleChange}
                helperText="Separate allergens with commas"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      image: e.target.files[0]
                    }));
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Add Item
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default AddFoodItem; 