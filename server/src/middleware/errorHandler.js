const { logger } = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      error: 'Validation Error',
      details: err.message
    });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({
      success: false,
      error: 'Unauthorized',
      details: 'Invalid authentication credentials'
    });
  }

  res.status(500).json({
    success: false,
    error: 'Server Error',
    details: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
};

module.exports = { errorHandler }; 