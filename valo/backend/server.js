const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To handle requests from frontend
const storeRoutes = require('./routes/store'); // Import store routes

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow requests from React frontend

// MongoDB Connection
mongoose.connect('mongodb://localhost/valorantStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Database connection error:', err);
});

// Routes
app.use('/api/store', storeRoutes); // Store-related routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
