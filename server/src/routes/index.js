const express = require('express');
const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Import and use other route modules
// router.use('/auth', authRoutes);
// router.use('/marketplace', marketplaceRoutes);
// router.use('/donations', donationRoutes);

module.exports = router; 