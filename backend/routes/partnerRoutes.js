const express = require('express');
const router = express.Router();
const { registerPartner } = require('../controller/partnerController');

router.post('/register', registerPartner);

module.exports = router;