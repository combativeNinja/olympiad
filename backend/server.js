require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch((error) => console.error('MongoDB connection error:', error));

// Routes
const userRoutes = require('./routes/userRoutes');
const studentRegister = require('./routes/studentRegistration');
app.use('/api/users', userRoutes);
app.use('/api/studentRegister',studentRegister);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
