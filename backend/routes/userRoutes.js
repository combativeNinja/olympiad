// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../controllers/userController');

// Define routes and assign controller methods
router.get('/', getAllUsers);
router.post('/', createUser);

module.exports = router;
