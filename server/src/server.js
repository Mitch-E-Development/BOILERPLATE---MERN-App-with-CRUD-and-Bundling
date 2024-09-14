/**
 * @file server.js
 * @description Main server file for the application. Sets up the Express server, connects to MongoDB, and configures middleware.
 * @requires express
 * @requires mongoose
 * @requires cors
 * @requires path
 * @requires dotenv
 * @requires ./routes/itemRoutes
 * @requires ./middleware/errorMiddleware
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const itemRoutes = require('./routes/itemRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// API routes
app.use('/api/items', itemRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Connect to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Serve static files from the client build directory if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Serve the index.html file for any other route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
