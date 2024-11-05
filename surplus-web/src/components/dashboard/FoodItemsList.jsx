import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function FoodItemsList({ status }) {
  // Mock data - replace with actual data from your backend
  const items = [
    {
      id: 1,
      name: 'Pasta Primavera',
      quantity: 5,
      unit: 'portions',
      expiryDate: '2024-03-20 18:00',
      price: 3,
      status: 'active'
    },
    // Add more items...
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Expiry Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{`${item.quantity} ${item.unit}`}</TableCell>
              <TableCell>{item.expiryDate}</TableCell>
              <TableCell>₹{item.price}</TableCell>
              <TableCell>
                <Chip 
                  label={item.status} 
                  color={item.status === 'active' ? 'success' : 'default'}
                />
              </TableCell>
              <TableCell>
                <IconButton size="small">
                  <EditIcon />
                </IconButton>
                <IconButton size="small" color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FoodItemsList; 