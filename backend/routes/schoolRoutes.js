const express = require('express');
const router = express.Router();
const { registerSchool } = require('../controller/schoolController');

router.post('/register', registerSchool);

module.exports = router;